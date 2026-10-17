import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, MessageCircle, Search, Layers, RefreshCw, HeartHandshake, ShieldCheck } from 'lucide-react';
import { softSkills, type Lang } from '../data/profile';
import { Reveal } from './Visual';
const groups = [
  { pt: 'Comunicação e colaboração', en: 'Communication & collaboration', ids: [0, 1], icon: MessageCircle },
  { pt: 'Análise e solução', en: 'Analysis & solutions', ids: [2, 3], icon: Search },
  { pt: 'Iniciativa e organização', en: 'Initiative & organization', ids: [4, 5], icon: Layers },
  { pt: 'Evolução e adaptação', en: 'Growth & adaptability', ids: [6, 7], icon: RefreshCw },
  { pt: 'Atendimento e prioridades', en: 'Service & priorities', ids: [8, 9], icon: HeartHandshake },
  { pt: 'Responsabilidade e investigação', en: 'Responsibility & investigation', ids: [10, 11], icon: ShieldCheck }
];
export default function SoftSkills({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState<number[]>([]);
  const pt = lang === 'pt';
  return <div className="soft-grid grouped-soft">{groups.map((g, i) => {
    const expanded = open.includes(i);
    return <Reveal key={g.en}><article className="soft-group"><button aria-expanded={expanded} aria-controls={`soft-detail-${i}`} onClick={() => setOpen(old => expanded ? old.filter(n => n !== i) : [...old, i])}><g.icon size={23}/><span><small>0{i + 1} / 02 {pt ? 'COMPETÊNCIAS' : 'SKILLS'}</small><strong>{g[lang]}</strong></span><ChevronDown className={expanded ? 'turned' : ''} size={18}/></button><div id={`soft-detail-${i}`}><AnimatePresence initial={false}>{expanded && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>{g.ids.map(id => <div className="soft-detail" key={id}><h3>{softSkills[id][pt ? 0 : 1]}</h3><p>{softSkills[id][pt ? 2 : 3]}</p></div>)}</motion.div>}</AnimatePresence></div></article></Reveal>;
  })}</div>;
}
