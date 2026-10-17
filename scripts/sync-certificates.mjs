import { cp, mkdir } from 'node:fs/promises';
await mkdir('public/assets/certificados',{recursive:true});
for (const folder of ['imagens','pdfs']) await cp(`certificados/${folder}`,`public/assets/certificados/${folder}`,{recursive:true});
console.log('Cópias públicas sincronizadas. Originais preservados.');
