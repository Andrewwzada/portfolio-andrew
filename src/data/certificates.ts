export interface Certificate {id:string;title:string;issuer:string;category:'support'|'networks'|'ai';hours?:number;date?:string;endDate?:string;file:string;image?:boolean;note?:string}
const root='assets/certificados/';
export const certificates:Certificate[]=[
{id:'google',title:'Technical Support Fundamentals',issuer:'Google / Coursera',category:'support',date:'2024-10-07',file:root+'pdfs/Coursera 0KVFPNFFRO66.pdf'},
{id:'copilot',title:'MS-4004: Empower with Copilot for MS 365 Use Cases',issuer:'Microsoft',category:'ai',hours:8,date:'2024-10-01',endDate:'2024-10-02',file:root+'pdfs/Certificado MOC - 08 horas - Andrew Nicolas.pdf'},
{id:'ia',title:'Inteligência Artificial para Infraestrutura',issuer:'Hackone',category:'ai',hours:1,file:root+'pdfs/Andrew - Certificado 06.pdf'},
{id:'redes',title:'Marco Zero Analista de Redes',issuer:'Hackone',category:'networks',hours:5,file:root+'pdfs/hackone.pdf'},
{id:'jncia',title:'Formação JNCIA Juniper Networks Certified Associate',issuer:'Hackone',category:'networks',hours:10,file:root+'pdfs/Andrew - Certificado 4.pdf'},
{id:'ospf',title:'OSPF',issuer:'Hackone',category:'networks',hours:11,file:root+'pdfs/Andrew - Certificado 05.pdf'},
{id:'inside-operacional',title:'E-Learning | Service - Operacional (Básico)',issuer:'Universidade Inside',category:'support',hours:1,date:'2023-01-31',file:root+'imagens/9aa19537-60b5-408c-982b-a135d371a14f.jpg',image:true},
{id:'inside-sac',title:'E-Learning | Service - SAC (Básico)',issuer:'Universidade Inside',category:'support',hours:1,date:'2023-06-09',file:root+'imagens/1686335999105.jpg',image:true},
{id:'inside-mobile',title:'E-Learning | Service - Aplicativo Service OS Mobile',issuer:'Universidade Inside',category:'support',hours:1,date:'2023-01-31',file:root+'imagens/1686336214982.jpg',image:true},
{id:'inside-cadastros',title:'E-Learning | Service - Cadastros',issuer:'Universidade Inside',category:'support',hours:1,date:'2023-06-09',file:root+'imagens/1686338090702.jpg',image:true}
];
export const assetUrl=(path:string)=>import.meta.env.BASE_URL+path.split('/').map(encodeURIComponent).join('/');
