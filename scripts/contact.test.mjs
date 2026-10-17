import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';

const source = await readFile(new URL('../src/lib/contact.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext } }).outputText;
const { submitContact, contactConfig } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);
const data = () => {
  const form = new FormData();
  form.set('name', ' Andrew ');
  form.set('email', 'visitor@example.com');
  form.set('message', 'A sufficiently long test message.');
  return form;
};

test('sends public key and trimmed fields to Web3Forms; requires confirmation', async t => {
  t.mock.method(globalThis, 'fetch', async (url, options) => {
    assert.equal(url, 'https://api.web3forms.com/submit');
    assert.equal(options.method, 'POST');
    assert.equal(options.body.get('access_key'), contactConfig.accessKey);
    assert.equal(options.body.get('name'), 'Andrew');
    assert.equal(options.body.get('email'), 'visitor@example.com');
    assert.equal(options.body.get('message'), data().get('message'));
    assert.ok(options.signal instanceof AbortSignal);
    return Response.json({ success: true });
  });
  await submitContact(data());
});

for (const [label, response] of [
  ['API rejection', () => Response.json({ success: false })],
  ['HTTP failure even with success flag', () => Response.json({ success: true }, { status: 500 })],
  ['malformed JSON', () => new Response('Invalid JSON')],
  ['missing confirmation', () => Response.json({ message: 'ok' })],
  ['nonboolean confirmation', () => Response.json({ success: 'true' })],
]) {
  test(`rejects ${label}`, async t => {
    t.mock.method(globalThis, 'fetch', async () => response());
    await assert.rejects(submitContact(data()));
  });
}

test('reports network failure', async t => {
  t.mock.method(globalThis, 'fetch', async () => { throw new TypeError('Network unavailable'); });
  await assert.rejects(submitContact(data()));
});

test('honeypot and empty fields block requests', async t => {
  const fetchMock = t.mock.method(globalThis, 'fetch', async () => Response.json({ success: true }));
  const spam = data(); spam.set('botcheck', 'on');
  await assert.rejects(submitContact(spam));
  for (const field of ['name', 'email', 'message']) {
    const empty = data(); empty.set(field, '   ');
    await assert.rejects(submitContact(empty));
  }
  assert.equal(fetchMock.mock.callCount(), 0);
});
