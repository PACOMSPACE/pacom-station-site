// Rebuild with pinned deck.gl 9.1.14, editable-layers 9.1.0-beta.4 and esbuild 0.25.12.
// Pass installed package directory and esbuild module path; no network at page runtime.
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';
import {createHash} from 'node:crypto';
const require=createRequire(import.meta.url),dir=path.dirname(fileURLToPath(import.meta.url));
const esbuild=require(process.argv[3]||'esbuild');
const result=await esbuild.build({entryPoints:[path.join(dir,'engine-entry.mjs')],outfile:path.join(dir,'engine.js'),bundle:true,minify:true,format:'iife',platform:'browser',target:['chrome105','safari16'],legalComments:'eof',metafile:true,nodePaths:process.argv[2]?[process.argv[2],path.join(process.argv[2],'.pnpm/node_modules')]:[],define:{'process.env.NODE_ENV':'"production"'}});
const packages=new Map();
for(const file of Object.keys(result.metafile.inputs)){
  let parent=path.dirname(path.resolve(file));
  while(parent!==path.dirname(parent)){
    try{
      const pkg=JSON.parse(await fs.readFile(path.join(parent,'package.json'),'utf8'));
      if(pkg.name&&parent.includes('node_modules')){
        const key=pkg.name+'@'+pkg.version;
        if(!packages.has(key)){
          const names=(await fs.readdir(parent)).filter(n=>/^(license|licence|copying|notice)(\.|$)/i.test(n));
          const notices=[];
          for(const n of names)if((await fs.stat(path.join(parent,n))).isFile())notices.push(n+'\n'+await fs.readFile(path.join(parent,n),'utf8'));
          if(key==='turf-jsts@1.2.3')notices.push(await fs.readFile(path.join(dir,'TURF-JSTS-EDL-1.0.txt'),'utf8'));
          if(key==='viewport-mercator-project@7.0.4')notices.push(await fs.readFile(path.join(dir,'VIEWPORT-MERCATOR-LICENSE.txt'),'utf8'));
          if(key==='@nodable/entities@3.0.0')notices.push(await fs.readFile(path.join(dir,'NODABLE-ENTITIES-LICENSE.txt'),'utf8'));
          packages.set(key,{name:pkg.name,version:pkg.version,license:pkg.license,notices:notices.join('\n')});
        }
        break;
      }
    }catch(e){if(e.message.startsWith('License text missing:'))throw e}
    parent=path.dirname(parent);
  }
}
const entries=[...packages.values()].sort((a,b)=>a.name.localeCompare(b.name));
const missing=entries.filter(p=>!p.notices);
if(missing.length)throw Error('License text missing: '+JSON.stringify(missing.map(({name,version,license})=>({name,version,license}))));
await fs.writeFile(path.join(dir,'LICENSES.txt'),'Bundled image-plane drawing dependencies\n\n'+entries.map(p=>p.name+'@'+p.version+' ('+p.license+')\n'+p.notices).join('\n\n'));
const hash=async name=>createHash('sha256').update(await fs.readFile(path.join(dir,name))).digest('hex');
await fs.writeFile(path.join(dir,'build-manifest.json'),JSON.stringify({entry_sha256:await hash('engine-entry.mjs'),bundle_sha256:await hash('engine.js'),target:['chrome105','safari16'],dependencies:entries.map(({name,version,license})=>({name,version,license})),bundler:'esbuild@'+esbuild.version},null,2)+'\n');
