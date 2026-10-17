// Public Web3Forms form identifier; the recipient is configured in Web3Forms.
export const contactConfig = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: '4a1848b0-ac14-4850-99f3-13ef8db7e6d1',
};

export async function submitContact(formData: FormData): Promise<void> {
  if (formData.get('botcheck')) throw new Error('Spam check failed');
  const payload = new FormData();
  for (const field of ['name', 'email', 'message']) {
    const value = formData.get(field);
    if (typeof value !== 'string' || !value.trim()) throw new Error('Invalid field');
    payload.set(field, value.trim());
  }
  payload.set('access_key', contactConfig.accessKey);
  payload.set('subject', 'Nova mensagem pelo portfólio / New portfolio message');
  payload.set('from_name', 'Portfólio Andrew Nicolas Farrapo');

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20000);
  try {
    const response = await fetch(contactConfig.endpoint, {
      method: 'POST',
      body: payload,
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });
    const result: unknown = await response.json();
    if (!response.ok || !result || typeof result !== 'object' ||
      !('success' in result) || result.success !== true) {
      throw new Error('Submission not confirmed');
    }
  } finally {
    clearTimeout(timeout);
  }
}
