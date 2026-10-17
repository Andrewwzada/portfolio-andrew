import { ArrowUpRight, Code2, Github, Check, Monitor, Cpu, Database, ScanLine } from 'lucide-react';
import { projects } from '../data/projects';
import { profile, type Lang } from '../data/profile';
import { Reveal, Tilt } from '../components/Visual';

export default function Projects({ lang }: { lang: Lang }) {
  const pt = lang === 'pt';
  return <div className="container">
    <Reveal><div className="section-heading"><div><div className="eyebrow">07 / {pt ? 'PROJETOS' : 'PROJECTS'}</div><h2>{pt ? 'Ideias em código.' : 'Ideas in code.'}<br/><span>{pt ? 'Experiências em prática.' : 'Experiences in practice.'}</span></h2></div><p>{pt ? 'Projetos que conectam desenvolvimento, infraestrutura e automação para resolver desafios reais.' : 'Projects connecting development, infrastructure and automation to solve real challenges.'}</p></div></Reveal>
    <div className="project-grid">{projects.map(project => <Reveal key={project.id}>
      <Tilt className={`project-card project-${project.id}`}>
        <div className="project-art" aria-hidden="true">
          {project.image ? <img src={project.image} loading="lazy" decoding="async" alt=""/> : <>
            <div className="project-art-grid"/>
            {project.id === 'n2-collector' ? <><div className="collector-diagram"><Cpu className="collector-node node-cpu" size={26}/><div className="collector-monitor"><Monitor size={82} strokeWidth={1}/><ScanLine size={30} className="collector-scan"/></div><Database className="collector-node node-data" size={26}/></div><span>N2 / SYSTEM INFORMATION</span><div className="project-code">{'> collect_system_info()'}</div></> : <><Code2 size={64} strokeWidth={1}/><span>PORTFOLIO / INTERACTIVE WEB</span><div className="project-code">{'<Experience />'}</div></>}
          </>}
        </div>
        <div className="project-content">
          <div className="project-meta"><small className="cyan">{project.id === 'portfolio' ? (pt ? 'APLICAÇÃO WEB · PROJETO LOCAL' : 'WEB APPLICATION · LOCAL PROJECT') : (pt ? 'AUTOMAÇÃO · SUPORTE TÉCNICO' : 'AUTOMATION · TECHNICAL SUPPORT')}</small>{project.status && <span className="project-status"><i/>{project.status[lang]}</span>}</div>
          <h3>{project.name[lang]}</h3><p>{project.description[lang]}</p>
          <div className="skill-chips">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
          {project.features[lang].length > 0 && <ul>{project.features[lang].map(feature => <li key={feature}><Check size={14}/>{feature}</li>)}</ul>}
          <div className="project-actions">
            {project.repository && <a className="button secondary" href={project.repository} target="_blank" rel="noopener noreferrer"><Github size={16}/>{pt ? 'Ver no GitHub' : 'View on GitHub'}<ArrowUpRight size={15}/></a>}
            {project.demo && <a className="button primary" href={project.demo} target="_blank" rel="noopener noreferrer">Demo <ArrowUpRight size={16}/></a>}
            {project.id === 'portfolio' && <a href="#home">{pt ? 'Explorar este projeto' : 'Explore this project'}<ArrowUpRight size={16}/></a>}
          </div>
        </div>
      </Tilt>
    </Reveal>)}</div>
    <a className="github-discover" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18}/>{pt ? 'Visitar meu perfil no GitHub' : 'Visit my GitHub profile'}<ArrowUpRight size={16}/></a>
  </div>;
}
