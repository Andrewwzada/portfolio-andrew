import type { Lang } from './profile';
export interface Project {
  id: string;
  name: Record<Lang, string>;
  description: Record<Lang, string>;
  technologies: string[];
  features: Record<Lang, string[]>;
  repository?: string;
  demo?: string;
  image?: string;
  status?: Record<Lang, string>;
}
export const projects: Project[] = [{
  id: 'portfolio',
  name: { pt: 'Portfólio interativo', en: 'Interactive portfolio' },
  description: {
    pt: 'Uma experiência bilíngue que conecta infraestrutura, desenvolvimento e minha trajetória profissional.',
    en: 'A bilingual experience connecting infrastructure, development and my professional journey.'
  },
  technologies: ['React', 'TypeScript', 'Vite', 'Three.js', 'Framer Motion'],
  features: {
    pt: ['Globo 3D interativo e laboratório de infraestrutura', 'Terminal com navegação por comandos', 'Certificados originais com visualização ampliada', 'Interface responsiva em português e inglês'],
    en: ['Interactive 3D globe and infrastructure lab', 'Terminal with command navigation', 'Original certificates with enlarged previews', 'Responsive Portuguese and English interface']
  }
}, {
  id: 'n2-collector',
  name: { pt: 'N2 Collector', en: 'N2 Collector' },
  status: { pt: 'Em desenvolvimento', en: 'In development' },
  description: {
    pt: 'Aplicativo desenvolvido em Python para automatizar a coleta de informações técnicas de computadores Windows, auxiliando no inventário de equipamentos, diagnóstico de ambientes e atividades de suporte técnico.',
    en: 'An application developed in Python to automate technical information collection from Windows computers, supporting equipment inventory, environment diagnostics and technical support activities.'
  },
  technologies: ['Python', 'PowerShell', 'PySide6', 'Windows'],
  features: { pt: [], en: [] },
  repository: 'https://github.com/Andrewwzada/n2-collector'
}];
