import { readFile,readdir } from 'node:fs/promises';
import {createHash} from 'node:crypto';
const manifest=JSON.parse(await readFile(new URL('../src/data/original-files.json',import.meta.url),'utf8'));
let failed=false;
for(const [file,hash] of Object.entries(manifest)){
 const data=await readFile(file);const actual=createHash('sha256').update(data).digest('hex');
 if(actual!==hash){console.error('Original alterado:',file);failed=true;}
 const copy=await readFile(`public/assets/${file}`);
 if(!copy.equals(data)){console.error('Cópia divergente:',file);failed=true;}
}
if(failed)process.exitCode=1;else console.log(`${Object.keys(manifest).length} originais e cópias conferidos por SHA-256.`);
