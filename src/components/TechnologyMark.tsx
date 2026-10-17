import { useState } from 'react';
import { Database, Network } from 'lucide-react';
import { technologyLogo, technologies } from '../data/technologies';
export default function TechnologyMark({index}:{index:number}) {
 const [failed,setFailed]=useState(false); const tech=technologies[index];const logo=technologyLogo(tech[0]);
 return logo&&!failed?<img className={`technology-logo ${tech[0]==='GitHub'?'invert-logo':''}`} src={logo} alt="" draggable={false} onError={()=>setFailed(true)}/>:tech[0]==='NoSQL'?<Database size={24}/>:tech[0].startsWith('Redes')?<Network size={24}/>:<span className="logo-fallback">{tech[1]}</span>;
}
