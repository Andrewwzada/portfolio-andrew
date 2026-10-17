export type Lang = 'pt' | 'en';
export const profile = { name:'Andrew Nicolas Farrapo', github:'https://github.com/Andrewwzada', instagram:'https://www.instagram.com/andrewwzada/', linkedin:'', email:'', whatsapp:'', resume:'', photo:import.meta.env.BASE_URL+'assets/fotos/Retrato%20Recortado%20com%20Bra%C3%A7os%20Cruzados%20(1).png', education:{ status:{pt:'',en:''}, dates:''} };
export const navigation = [ ['home','Início','Home'],['about','Sobre mim','About'],['skills','Hard Skills','Hard Skills'],['soft','Soft Skills','Soft Skills'],['education','Formação','Education'],['certificates','Certificados','Certificates'],['projects','Projetos','Projects'],['contact','Contato','Contact'] ];
export const skillGroups = [
{pt:'Infraestrutura e Servidores',en:'Infrastructure & Servers',items:['Windows Server','Windows 10 e 11|Windows 10 and 11','Linux','Active Directory','Group Policy (GPO)','Hyper-V','Proxmox','Remote Desktop Protocol (RDP)','Administração de usuários|User administration','Gerenciamento de permissões|Permission management','Compartilhamento de arquivos|File sharing','Backup e recuperação|Backup & recovery','Suporte técnico N1 e N2|L1 & L2 technical support','Troubleshooting']},
{pt:'Redes e Conectividade',en:'Networks & Connectivity',items:['MikroTik','UniFi','TCP/IP','DNS','DHCP','VLAN','VPN','WireGuard','OpenVPN','ZeroTier','Firewall','Wi-Fi corporativo|Enterprise Wi-Fi','Roteamento|Routing','OSPF','Diagnóstico de conectividade|Connectivity diagnostics']},
{pt:'Segurança e Monitoramento',en:'Security & Monitoring',items:['Controle de acesso|Access control','Segurança de endpoints|Endpoint security','EDR','Políticas de segurança|Security policies','Gerenciamento de permissões|Permission management','Monitoramento de infraestrutura|Infrastructure monitoring','Segurança de redes|Network security']},
{pt:'Programação e Desenvolvimento',en:'Programming & Development',items:['Python','JavaScript','HTML5','CSS3','MySQL','NoSQL','PowerShell','Git','GitHub']} ];
export const softSkills = [
['Comunicação profissional','Professional communication','Explicar soluções técnicas com clareza para diferentes públicos.','Explaining technical solutions clearly to different audiences.'],
['Trabalho em equipe','Teamwork','Colaborar com equipes e compartilhar conhecimento técnico.','Collaborating with teams and sharing technical knowledge.'],
['Resolução de problemas','Problem solving','Investigar causas e construir soluções consistentes.','Investigating causes and building reliable solutions.'],
['Pensamento analítico','Analytical thinking','Relacionar evidências para diagnosticar incidentes.','Connecting evidence to diagnose incidents.'],
['Proatividade','Proactivity','Antecipar necessidades e identificar melhorias no ambiente.','Anticipating needs and identifying improvements.'],
['Organização','Organization','Documentar atividades e manter processos bem definidos.','Documenting work and keeping processes well defined.'],
['Adaptabilidade','Adaptability','Atuar com flexibilidade em diferentes ambientes de TI.','Working flexibly across different IT environments.'],
['Aprendizado contínuo','Continuous learning','Atualizar conhecimentos e explorar novas tecnologias.','Updating knowledge and exploring new technologies.'],
['Atendimento ao cliente','Customer service','Ouvir necessidades e oferecer um suporte cuidadoso.','Listening to needs and providing thoughtful support.'],
['Gestão de prioridades','Priority management','Organizar demandas conforme urgência e impacto.','Organizing requests according to urgency and impact.'],
['Responsabilidade profissional','Professional responsibility','Tratar acessos, dados e entregas com atenção.','Handling access, data and deliverables with care.'],
['Investigação técnica','Technical investigation','Testar hipóteses e registrar evidências para encontrar a causa.','Testing hypotheses and documenting evidence to find the cause.'] ];
export const phrases = {pt:['Solucionando desafios através da tecnologia.','Infraestrutura e redes corporativas.','Administração de servidores.','Desenvolvimento e automação.','Segurança e conectividade.','Transformando problemas em soluções.'],en:['Solving challenges through technology.','Enterprise infrastructure and networks.','Server administration.','Development and automation.','Security and connectivity.','Turning problems into solutions.']};
export const localized = (text:string, lang:Lang) => text.split('|')[lang==='pt'?0:1] ?? text.split('|')[0];
