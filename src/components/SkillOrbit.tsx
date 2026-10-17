import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Visual } from './Visual';
import type { Lang } from '../data/profile';
import { technologies } from '../data/technologies';
import TechnologyMark from './TechnologyMark';
export default function SkillOrbit({lang,hero=false}:{lang:Lang;hero?:boolean}){
 const [selected,setSelected]=useState<number>();const close=useRef<HTMLButtonElement>(null);const origin=useRef<HTMLElement|null>(null);
 const select=(i:number)=>{origin.current=document.activeElement as HTMLElement;setSelected(i)};
 const dismiss=()=>{setSelected(undefined);origin.current?.focus()};
 useEffect(()=>{if(selected!==undefined)close.current?.focus()},[selected]);
 return <div className={`skill-universe ${hero?'hero-universe':''}`}><Visual kind={hero?'globe':'skills'} selected={selected} onSelect={select} lang={lang}/>{!hero&&<div className="tech-selector" aria-label={lang==='pt'?'Selecionar tecnologia':'Select technology'}>{technologies.map((tech,i)=><button key={tech[0]} aria-pressed={selected===i} onClick={()=>select(i)}>{tech[0]}</button>)}</div>}
 <AnimatePresence>{selected!==undefined&&<motion.div key="panel" className="tech-description competency-panel" initial={{opacity:0,y:12,scale:.97}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:8}} role="dialog" aria-modal="false" aria-label={technologies[selected][0]} onKeyDown={e=>{if(e.key==='Escape'){e.stopPropagation();dismiss()}}}><TechnologyMark index={selected}/><div><strong>{technologies[selected][0]}</strong><p>{technologies[selected][lang==='pt'?3:4]}</p></div><button ref={close} onClick={dismiss} aria-label={lang==='pt'?'Fechar competência':'Close skill'}><X size={18}/></button></motion.div>}</AnimatePresence>
 </div>
}
