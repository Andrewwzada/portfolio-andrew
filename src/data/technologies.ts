export const technologies=[
 ['Python','Py','#77beff','Automação, scripts e desenvolvimento de soluções.','Automation, scripting and solution development.'],
 ['JavaScript','JS','#f5d75b','Interatividade e desenvolvimento para a web.','Interactivity and web development.'],
 ['HTML5','<>','#ff9570','Estrutura semântica e acessível de páginas.','Semantic, accessible page structure.'],
 ['CSS3','#','#85adff','Interfaces responsivas, estilos e animações.','Responsive interfaces, styling and animation.'],
 ['MySQL','SQL','#6ed8ed','Bancos relacionais e consultas SQL.','Relational databases and SQL queries.'],
 ['NoSQL','DB','#92e7ac','Modelagem e armazenamento não relacional.','Nonrelational data modeling and storage.'],
 ['Git','⑂','#ff9e88','Controle de versão e histórico de alterações.','Version control and change history.'],
 ['GitHub','GH','#d6c4ff','Repositórios e colaboração em código.','Repositories and code collaboration.'],
 ['PowerShell','>_','#67caff','Scripts e automação de ambientes Windows.','Scripting and automation for Windows environments.'],
 ['Linux','LX','#e7d88d','Administração e diagnóstico de servidores.','Server administration and diagnostics.'],
 ['Redes / Networks','NET','#66f4df','TCP/IP, VPNs, VLANs e conectividade corporativa.','TCP/IP, VPNs, VLANs and corporate connectivity.'],
 ['Windows Server','SRV','#75baff','Active Directory, permissões e infraestrutura.','Active Directory, permissions and infrastructure.'],
 ['MikroTik','MT','#e5edf5','Configuração de equipamentos, roteamento e conectividade corporativa.','Device configuration, routing and corporate connectivity.'],
 ['UniFi','U','#72baff','Implantação e manutenção de redes Wi-Fi corporativas.','Enterprise Wi-Fi deployment and maintenance.']
];

// Pinned vendor artwork; NoSQL and Networks are categories, not vendor brands.
const devicon = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/';
const logos: Record<string,string> = {Python:'python/python-original.svg',JavaScript:'javascript/javascript-original.svg',HTML5:'html5/html5-original.svg',CSS3:'css3/css3-original.svg',MySQL:'mysql/mysql-original.svg',Git:'git/git-original.svg',GitHub:'github/github-original.svg',PowerShell:'powershell/powershell-original.svg',Linux:'linux/linux-original.svg','Windows Server':'windows11/windows11-original.svg'};
export function technologyLogo(name:string){return logos[name]?devicon+logos[name]:name==='MikroTik'?'https://cdn.simpleicons.org/mikrotik/ffffff':name==='UniFi'?'https://cdn.simpleicons.org/ubiquiti/159EFF':undefined;}
