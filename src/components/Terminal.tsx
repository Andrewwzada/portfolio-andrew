import { useState, useEffect, useRef, type KeyboardEvent } from 'react';
import { useReducedMotion } from 'framer-motion';
import { TerminalSquare } from 'lucide-react';
import { localized, profile, skillGroups, type Lang } from '../data/profile';
import { certificates } from '../data/certificates';
import { projects } from '../data/projects';
const commands = ['help', 'about', 'skills', 'education', 'certificates', 'projects', 'contact', 'clear'];
const sections: Record<string, string> = { about: 'about', skills: 'skills', education: 'education', certificates: 'certificates', projects: 'projects', contact: 'contact' };
export default function Terminal({ lang }: { lang: Lang }) {
  const [lines, setLines] = useState<{ cmd: string; out: string }[]>([]);
  const [value, setValue] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const historyIndex = useRef(0);
  const draft = useRef('');
  const output = useRef<HTMLDivElement>(null);
  const pt = lang === 'pt';
  const reduced = useReducedMotion();
  const [typed, setTyped] = useState(0);
  const last = lines.at(-1)?.out ?? '';
  useEffect(() => {
    setTyped(reduced ? last.length : 0);
    if (reduced || !last) return;
    const timer = setInterval(() => setTyped(n => {
      if (n >= last.length) { clearInterval(timer); return n; }
      return Math.min(last.length, n + 16);
    }), 16);
    return () => clearInterval(timer);
  }, [last, lines.length, reduced]);
  useEffect(() => { if (output.current) output.current.scrollTop = output.current.scrollHeight; }, [typed, lines]);
  function run(e: React.FormEvent) {
    e.preventDefault();
    const cmd = value.trim().toLowerCase();
    if (!cmd) return;
    setValue('');
    setHistory(old => [...old, cmd].slice(-100));
    historyIndex.current = Math.min(history.length + 1, 100);
    draft.current = '';
    if (cmd === 'clear') { setLines([]); return; }
    const out: Record<string, string> = {
      help: commands.join(' · ') + (pt ? '\n↑ ↓ histórico · Tab autocompletar · Enter executar' : '\n↑ ↓ history · Tab autocomplete · Enter run'),
      about: `${profile.name}\n${pt ? 'Tecnologia da Informação, infraestrutura, redes e desenvolvimento.' : 'IT, infrastructure, networks and development.'}`,
      skills: skillGroups.map(g => `${g[lang]}\n${g.items.map(s => localized(s, lang)).join(', ')}`).join('\n\n'),
      education: `${pt ? 'Engenharia de Software' : 'Software Engineering'} — UNINTER\n${profile.education.status[lang]} ${profile.education.dates}`.trim(),
      certificates: certificates.map(c => `${c.title} — ${c.issuer}`).join('\n'),
      projects: projects.map(p => `${p.name[lang]}\n${p.description[lang]}\n${p.technologies.join(' · ')}`).join('\n\n'),
      contact: [profile.github, profile.linkedin, profile.email, profile.whatsapp].filter(Boolean).join('\n')
    };
    setLines(old => [...old, { cmd, out: out[cmd] ?? (pt ? 'Comando não encontrado. Digite help.' : 'Command not found. Type help.') }].slice(-30));
  }
  function keyboard(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Tab' && value.trim()) {
      const matches = commands.filter(c => c.startsWith(value.trim().toLowerCase()));
      if (matches.length === 1) { e.preventDefault(); setValue(matches[0]); }
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex.current === history.length) draft.current = value;
      historyIndex.current = Math.max(0, Math.min(history.length, historyIndex.current + (e.key === 'ArrowUp' ? -1 : 1)));
      setValue(historyIndex.current === history.length ? draft.current : history[historyIndex.current]);
    }
  }
  return <div className="terminal"><div className="terminal-bar"><span className="dots"><i/><i/><i/></span><span><TerminalSquare size={14}/> andrew@portfolio: ~</span><small>{pt ? 'navegação / simulado' : 'navigation / simulated'}</small></div><div className="terminal-body"><p className="muted">{pt ? 'Uma outra forma de me conhecer. Digite' : 'Another way to get to know me. Type'} <b>help</b>.</p><div ref={output} className="terminal-output" role="log" aria-live="polite" aria-atomic="false">{lines.map((line, i) => <div key={i}><p><span className="cyan">❯</span> {line.cmd}</p><pre aria-label={line.out} aria-busy={i === lines.length - 1 && typed < line.out.length}>{i === lines.length - 1 ? line.out.slice(0, typed) : line.out}</pre>{sections[line.cmd] && <a className="terminal-section-link" href={`#${sections[line.cmd]}`}>{pt ? 'Ir para a seção' : 'Go to section'} ↗</a>}</div>)}</div><form onSubmit={run}><label htmlFor="command"><span className="cyan">❯</span><span className="sr-only">{pt ? 'Comando do terminal' : 'Terminal command'}</span></label><input id="command" value={value} onChange={e => setValue(e.target.value)} onKeyDown={keyboard} autoComplete="off" autoCapitalize="none" spellCheck={false} placeholder={pt ? 'Digite um comando…' : 'Type a command…'}/><button type="submit" aria-label={pt ? 'Executar comando' : 'Run command'}>↵</button></form><small className="terminal-hint">↑ ↓ {pt ? 'Histórico' : 'History'} · Tab {pt ? 'Completar' : 'Complete'} · Enter</small></div></div>;
}
