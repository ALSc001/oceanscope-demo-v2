import {readFile,stat} from 'node:fs/promises';
import {resolve,sep} from 'node:path';
import {createHash} from 'node:crypto';
import assert from 'node:assert/strict';
const root=resolve(process.argv[2]||'.');
const manifest=JSON.parse(await readFile(resolve(root,'release-manifest.json'),'utf8'));
assert.equal(manifest.schema,'oceanscope.static-release.v1');
assert.equal(manifest.sourceDirty,false,'Release must be built from a clean source commit');
assert.match(manifest.sourceCommit,/^[a-f0-9]{40}$/);
assert.deepEqual(manifest.geometryFrames,Array.from({length:96},(_,i)=>1001+i));
assert.deepEqual(manifest.volumeFrames,[1001,1049,1096]);
assert.deepEqual(manifest.heightFrames,Array.from({length:96},(_,i)=>1001+i));
let total=0;const unique=new Set();
for(const file of manifest.files){
 assert(!unique.has(file.path));unique.add(file.path);
 const path=resolve(root,file.path);assert(path.startsWith(root+sep),'Invalid release path');
 const info=await stat(path);assert(info.isFile());assert.equal(info.size,file.bytes,file.path);
 assert(info.size<100*1024*1024,'File exceeds GitHub regular-file limit');
 const data=await readFile(path);assert.equal(createHash('sha256').update(data).digest('hex'),file.sha256,file.path);total+=file.bytes;
}
assert(total<800*1024*1024);
assert(unique.has('index.html'));assert(unique.has('public-source-summary.md'));
assert.equal([...unique].filter(p=>p.startsWith('data/protocol-spatial/')&&p.endsWith('.bin')).length,864);
assert.equal([...unique].filter(p=>p.endsWith('.ocfld.gz')).length,3);
assert.equal([...unique].filter(p=>p.endsWith('.ocsurf.gz')).length,192);
const html=await readFile(resolve(root,'index.html'),'utf8');assert(!/(?:src|href)="\/assets\//.test(html),'Assets must support project subpaths');
console.log(JSON.stringify({files:unique.size,MiB:Number((total/1048576).toFixed(2)),sourceCommit:manifest.sourceCommit,geometryFrames:manifest.geometryFrames,heightFrames:manifest.heightFrames.length}));
