import{v as qt,p as Yt,S as da,s as pa,a as xc,c as Ni,b as Fi}from"./surfaceResources-BzkAGpcd.js";import{r as v,R as e,u as ue,c as vc,s as Oi,d as Ec,p as _c,e as fa,f as Hn,v as Ka,g as Qa,l as ua,h as et,i as kn,j as ma,k as $s,m as Xs,n as Di,C as wc,o as Wi,q as Ti,t as Sc,x as Vi,y as zi,z as jc,A as Cc,B as Na,D as Zs,E as Gs,F as Hs,G as qs,H as $i,I as Xi,J as Zi,K as Gi,L as Hi,a as qi,b as Ft,w as Bc,M as Ys,N as Zn,O as Yi}from"./workbench-D2SzYwFd.js";import{d as Ct,l as Li}from"./publicData-Dh1-tQFp.js";import{F as Ac,m as Ui,p as Ji,f as Ki,t as Qi,S as kc,d as Mc,a as eo,s as no,c as ao,b as Fa,u as to,e as so,W as co,g as io,h as oo,i as ro}from"./public-field-demo-DekM-YyV.js";import{v as Lt,P as lo,r as Rc,l as Ls,a as sa,m as fo,p as Oa,s as Bt,b as mo}from"./PlotRoleTabs-BF4XJv-0.js";import{b as At}from"./LocalDiagnostics-BwkLRIwo.js";import{H as bo,f as po,a as uo,D as ho,S as go}from"./SectionRotation-ChBiC7eA.js";import{c as Us}from"./comparisonExport-DqHfk1ta.js";import{o as Pc,s as yo,a as Ot,d as xo,D as Mn,b as vo}from"./displayGeometry-DymWgNjp.js";import{e as Eo}from"./verticalSection-DptfHDZh.js";import{Q as _o,U as wo,X as So,Y as jo,Z as Co,_ as Ic,$ as Bo}from"./waveBookmarks-kKKOg6TX.js";const Ao="539734f929b2d3d4a53adb2563bc9598e1cc8efcd33439f8a39db052bafb28bd",ko="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",Mo="gentle",Ro="best1027",Po="e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",Io="323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",ba={sha256:Ao,protocolSha256:ko,datasetA:Mo,datasetB:Ro,manifestA:Po,manifestB:Io},No="oceanscope.velocity-alignment.v1",Fo=1001,Oo="best-1027",Do="partial",Wo=!0,To={gt:{frame:1001,file:"clean_fullsdf_vel.1001.vdb",bytes:10508067,sha256:"8cd757ed7cecfe8f677a6e8994e053bcbb178e93a8c0b257a82c89b14de954be",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1001,file:"recon_fullsdf_vel.1001.vdb",bytes:10562288,sha256:"fd0ab7ff40ed007eb3543c6326ba10f7f98dbda59e094a0dbfbb2066b4212f26",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},Vo={frame:1001,url:"/data/velocity-raw/1001.ocfld.gz",packedBytes:15074066,packedSha256:"c1284e150f6c95880ae942c08fb3a54209096127c13ed9d14e4d48a8cac6a54b",decodedBytes:62391416,decodedSha256:"723f73f42097cede6faf03a7cd106af8d7aef55eabcdc4207b469fb9a1a4a197",roundtrip:"exact"},zo={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},$o={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},Xo={gt:0,prediction:2856765473069345e-22},Zo=2856765473069345e-22,Go=["x","y","z"],Ho="ZYX",qo={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},Yo="m/s",Lo="Existing source convention only; no independent physical or time calibration.",Uo="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",Jo={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},Ko={resource:{frame:1001,url:"/data/fields/best-1027/1001.ocfld.gz",packedBytes:26128772,packedSha256:"3a504d78eefed6ef1a3e5fef3523f62eb7f0a13ae68e67e8cb23907f4b6f6f46",decodedBytes:99523224,decodedSha256:"8760d8da4ce6ac716b433ede5c787ba13baff142a4324fb03e13824f90e978f8"},comparison:{gt:{error:"vel.x values differ at 1363784 samples; max 2.8210940528072825e-16"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: vel.x values differ at 1363784 samples; max 2.8210940528072825e-16"],retainedUnchanged:!0},Qo="exact",er={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:179815,sha256:"6264bad6598a054b1ac18538a73305aa383761e97e67b4e8120f74a6f73fab06"},common:{count:177960,sha256:"33db691f210a15dd5e533103720e9708b363e05c66e4cc266f14413335d8371f"},computable:{count:177960,sha256:"33db691f210a15dd5e533103720e9708b363e05c66e4cc266f14413335d8371f"}},nr=0,ar=[],tr="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",sr={schema:No,frame:Fo,caseId:Oo,status:Do,dataAndDomainVerified:Wo,source:To,resource:Vo,lattice:zo,originalLattices:$o,cacheLatticeMaxDisplacement:Xo,pairMaxDisplacement:Zo,componentOrder:Go,arrayOrder:Ho,vectorBasis:qo,unitClaim:Yo,unitEvidence:Lo,protocolSha256:Uo,domainDefinition:Jo,legacyCache:Ko,diagnosticRoundtrip:Qo,domain:er,nonfiniteExcluded:nr,failures:ar,scope:tr},cr="oceanscope.velocity-alignment.v1",ir=1049,or="best-1027",rr="partial",lr=!0,dr={gt:{frame:1049,file:"clean_fullsdf_vel.1049.vdb",bytes:11105671,sha256:"a821ec84b9f2eecc09f234cdf05050e77e3572d6f9c3d46bce94d0a28f328df9",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1049,file:"recon_fullsdf_vel.1049.vdb",bytes:10571839,sha256:"ff18d054439135a9c39abc139aa628ca7dcb753dd46b389b86bde47747f5d4c3",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},fr={frame:1049,url:"/data/velocity-raw/1049.ocfld.gz",packedBytes:15261605,packedSha256:"913c1ddbec87d484f71905720334c90ca6ebccdad5c48a543f69eb405308e707",decodedBytes:62391416,decodedSha256:"403ff5ea6e2afcd3129761caa6a5adf7f2699e180d1733e85774ea1a55df4ef1",roundtrip:"exact"},mr={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},br={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},pr={gt:0,prediction:2856765473069345e-22},ur=2856765473069345e-22,hr=["x","y","z"],gr="ZYX",yr={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},xr="m/s",vr="Existing source convention only; no independent physical or time calibration.",Er="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",_r={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},wr={resource:{frame:1049,url:"/data/fields/best-1027/1049.ocfld.gz",packedBytes:26633403,packedSha256:"1443fd356c49996f7b7bac3ab8d8ee9fc4b40d9a6d4a0734b2a0e6e2592c2548",decodedBytes:99523224,decodedSha256:"ad0deb564ccd2db1fc91e4db9f711acaa8f6c231e3acca426773f8bb0cbf851a"},comparison:{gt:{error:"sdf values differ at 2 samples; max 0.0"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: sdf values differ at 2 samples; max 0.0"],retainedUnchanged:!0},Sr="exact",jr={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:189062,sha256:"adaf091d8684752b63cdf670a7f10b150720ed4342c7042ee4ee70311055d839"},common:{count:184957,sha256:"6367149b8f2ca91ca5e7dd4c5eeb75c22cf814b39535732dd9fb2f2a698599de"},computable:{count:184957,sha256:"6367149b8f2ca91ca5e7dd4c5eeb75c22cf814b39535732dd9fb2f2a698599de"}},Cr=0,Br=[],Ar="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",kr={schema:cr,frame:ir,caseId:or,status:rr,dataAndDomainVerified:lr,source:dr,resource:fr,lattice:mr,originalLattices:br,cacheLatticeMaxDisplacement:pr,pairMaxDisplacement:ur,componentOrder:hr,arrayOrder:gr,vectorBasis:yr,unitClaim:xr,unitEvidence:vr,protocolSha256:Er,domainDefinition:_r,legacyCache:wr,diagnosticRoundtrip:Sr,domain:jr,nonfiniteExcluded:Cr,failures:Br,scope:Ar},Mr="oceanscope.velocity-alignment.v1",Rr=1096,Pr="best-1027",Ir="partial",Nr=!0,Fr={gt:{frame:1096,file:"clean_fullsdf_vel.1096.vdb",bytes:11272288,sha256:"7153212dbf15d5970fab77d2c187a858fa5735447abfcd8dfc717fa1844d4e94",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1096,file:"recon_fullsdf_vel.1096.vdb",bytes:10500539,sha256:"16187d0cad3236b3ebef4900650d0b3cd98294ef9ab248088797a73365200db2",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},Or={frame:1096,url:"/data/velocity-raw/1096.ocfld.gz",packedBytes:15329856,packedSha256:"a0731f4996fadbe7d2e7c9b5562250ead6a8cc817a2f7b1f44d393c45d86dd7d",decodedBytes:62391416,decodedSha256:"bfe8078ba7a9436b73b8906e210a8e7d8f0b312fc772c4ee0e68f9e282fedb9c",roundtrip:"exact"},Dr={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},Wr={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},Tr={gt:0,prediction:2856765473069345e-22},Vr=2856765473069345e-22,zr=["x","y","z"],$r="ZYX",Xr={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},Zr="m/s",Gr="Existing source convention only; no independent physical or time calibration.",Hr="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",qr={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},Yr={resource:{frame:1096,url:"/data/fields/best-1027/1096.ocfld.gz",packedBytes:26932173,packedSha256:"5900168e2e47a98c85f505558e49c754619e3824ea1404299d783fd7451dd0ee",decodedBytes:99523224,decodedSha256:"1cdb1261a33ed72f515bd59a75668467cbb8d7f78da7af6b360653cf6cbcb2f9"},comparison:{gt:{error:"sdf values differ at 1 samples; max 0.0"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: sdf values differ at 1 samples; max 0.0"],retainedUnchanged:!0},Lr="exact",Ur={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:223882,sha256:"3d3747b91823a8c0b8e2d7487c955abe70b257b49b9079a660ddb1112f7c5cf9"},common:{count:217252,sha256:"f4cca5ed859acd6e09a9ab9318b117c094d2647572e72b961768938e558395a8"},computable:{count:217252,sha256:"f4cca5ed859acd6e09a9ab9318b117c094d2647572e72b961768938e558395a8"}},Jr=0,Kr=[],Qr="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",e0={schema:Mr,frame:Rr,caseId:Pr,status:Ir,dataAndDomainVerified:Nr,source:Fr,resource:Or,lattice:Dr,originalLattices:Wr,cacheLatticeMaxDisplacement:Tr,pairMaxDisplacement:Vr,componentOrder:zr,arrayOrder:$r,vectorBasis:Xr,unitClaim:Zr,unitEvidence:Gr,protocolSha256:Hr,domainDefinition:qr,legacyCache:Yr,diagnosticRoundtrip:Lr,domain:Ur,nonfiniteExcluded:Jr,failures:Kr,scope:Qr},n0=new Map([[1001,sr],[1049,kr],[1096,e0]]);function Rn(n){const a=n0.get(n);return!a||a.frame!==n||a.caseId!=="best-1027"||!a.dataAndDomainVerified||a.diagnosticRoundtrip!=="exact"||a.resource.frame!==n||a.resource.url!==`/data/velocity-raw/${n}.ocfld.gz`||a.protocolSha256!==ba.protocolSha256||a.source.gt.manifestSha256!==ba.manifestA||a.source.prediction.manifestSha256!==ba.manifestB?null:a}const a0=[1001,1049,1096];async function Nc(n,a){const t=await new Promise((s,c)=>{const i=indexedDB.open("oceanscope-native-velocity",1);i.onupgradeneeded=()=>i.result.createObjectStore("files"),i.onsuccess=()=>s(i.result),i.onerror=()=>c(i.error)});try{return await new Promise((s,c)=>{const i=t.transaction("files",n),o=a(i.objectStore("files"));i.oncomplete=()=>s(o.result),i.onabort=()=>c(i.error),i.onerror=()=>c(i.error)})}finally{t.close()}}function t0(n){return Nc("readonly",a=>a.get(n.packedSha256))}async function s0(n){const a=a0.map(Rn).find(t=>t.resource.packedBytes===n.size);if(!a)throw Error("Unsupported native velocity file size");return await qt(await n.arrayBuffer(),a.resource),await Nc("readwrite",t=>t.put(n,a.resource.packedSha256)),a.frame}function c0({zh:n}){const[a,t]=v.useState(!1),[s,c]=v.useState("");async function i(o){const r=Array.from(o.target.files);if(o.target.value="",!r.length)return;t(!0);const f=[],l=[];for(const m of r)try{f.push(await s0(m))}catch{l.push(m.name)}c([f.length&&(n?"本浏览器已保存核验帧 ":"Verified frames saved in this browser: ")+f.join(", "),l.length&&(n?"未能核验或保存，请核对文件和浏览器存储权限。":"Check the file and browser storage permission: ")+l.join(", ")].filter(Boolean).join(" · ")),t(!1),f.length&&window.dispatchEvent(new CustomEvent("oceanscope-velocity-files",{detail:f}))}return e.createElement("section",{"data-os-loc":"src/field/VelocityFiles.jsx:24:10",className:"reference-scope","aria-label":"Native velocity resources","aria-busy":a},e.createElement("label",{"data-os-loc":"src/field/VelocityFiles.jsx:25:5"},n?"在本机选择原生速度文件":"Choose native velocity files on this device"," ",e.createElement("input",{"data-os-loc":"src/field/VelocityFiles.jsx:26:7","data-os-action":"",type:"file",multiple:!0,accept:".gz","aria-label":"Verified velocity files",disabled:a,onChange:i})),e.createElement("small",{"data-os-loc":"src/field/VelocityFiles.jsx:28:5"},n?"1001、1049、1096 的 .ocfld.gz 文件只在此浏览器内校验、保存及计算。":"Select the .ocfld.gz for 1001, 1049 or 1096. Verification, storage and calculations run in this browser."),e.createElement("p",{"data-os-loc":"src/field/VelocityFiles.jsx:29:5",role:"status"},a?n?"正在校验原生速度文件…":"Verifying native velocity files…":s))}function i0({fetchFrame:n,decode:a,byteBudget:t=268435456,maxFrames:s=5}){const c=new Map,i=new Map;let o=null,r=0,f=!1,l=!1;const m=(h,d)=>`${h}:${d}`,y=()=>[...c.values()].reduce((h,d)=>h+d.byteLength,0);function x(){for(const h of c.keys()){if(c.size<=s&&y()<=t)break;h!==o&&c.delete(h)}}function p(h,d){const u=m(h,d);if(c.has(u)){const _=c.get(u);return c.delete(u),c.set(u,_),Promise.resolve(_)}if(i.has(u))return i.get(u).promise;const S=new AbortController,j=n(h,d,{signal:S.signal}).then(_=>{if(f||S.signal.aborted)return null;const E=_&&Object.hasOwn(_,"verifiedResource"),w=E?_.buffer:_,g=E?_.verifiedResource:null,C=a(w),B=new Set(C.fields.map(b=>b.values.buffer)),M={comparisonId:h,frameNumber:d,data:C,verifiedResource:g,byteLength:[...B].reduce((b,k)=>b+k.byteLength,0)};return c.set(u,M),x(),M}).finally(()=>{i.get(u)?.controller===S&&i.delete(u)});return i.set(u,{promise:j,controller:S}),j}return{async select(h,d){if(f)return null;const u=++r,S=m(h,d);for(const[_,E]of i)_!==S&&(E.controller.abort(),i.delete(_));const j=o;o=S;try{const _=await p(h,d);return f||u!==r?null:(x(),_)}catch(_){if(f||u!==r||_.name==="AbortError")return null;throw o=j,_}},async prefetch(h,d){f||l||await Promise.all(d.slice(0,2).map(u=>p(h,u).catch(()=>null)))},setScrubbing(h){if(l=h,h)for(const[d,u]of i)d!==o&&(u.controller.abort(),i.delete(d))},stats(){return{bytes:y(),cachedFrames:c.size,oversize:y()>t}},dispose(){f=!0,r++;for(const h of i.values())h.controller.abort();i.clear(),c.clear()}}}const nt=new Map;function o0(n){nt.clear();for(const a of n)nt.set(a.comparison.id,a)}async function r0(n){const a=new Uint8Array(n);if(a[0]===31&&a[1]===139){if(typeof DecompressionStream>"u")throw new Error("This browser cannot decode the field samples. Please use a recent Chrome, Edge, Firefox or Safari.");return new Response(new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}return n}async function l0(n,a,t={}){const s=nt.get(n),c=s?.frameUrls?.[String(a)],i=Yt(s,a);if(!c)throw new Error(`Frame ${a} is not included in this public preview.`);if(!/^\/?data\/[a-zA-Z0-9_./-]+$/.test(c)||c.split("/").includes(".."))throw new Error("Invalid published field URL.");const o=await fetch(c.replace(/^\//,""),{signal:t.signal});if(!o.ok)throw new Error(`Field sample unavailable (${o.status}).`);const r=await o.arrayBuffer();if(t.signal?.aborted)throw new DOMException("Aborted","AbortError");const f=i?await qt(r,i):await r0(r);if(t.signal?.aborted)throw new DOMException("Aborted","AbortError");return t.withIdentity?{buffer:f,verifiedResource:i}:f}async function d0(n){const a=nt.get(n);if(!a)throw new Error("Unknown public comparison.");return a.metrics??null}function Ha(n,a){const[t,s,c]=a.dimensions;if(!Number.isSafeInteger(n)||n<0||n>=t*s*c)throw Error("probe");const i=n%t,o=Math.floor(n/t)%s,r=Math.floor(n/(t*s)),f=a.origin.map((l,m)=>l+i*a.axisSteps[0][m]+o*a.axisSteps[1][m]+r*a.axisSteps[2][m]);return{index:n,x:i,y:o,z:r,world:f,crosshair:[(i+.5)/t,(r+.5)/c]}}function f0(n,a,t,s){return a==="xz"&&t===n.y&&n.crosshair.every((c,i)=>Math.abs(c-s[i])<1e-9)}function m0(n,a){const{originXYZ:t,spacing:s,shape:[c,i]}=a,o=(n[0]-t[0])/s,r=(n[2]-t[2])/s,f=Math.round(o),l=Math.round(r);return Math.abs(o-f)>1e-5||Math.abs(r-l)>1e-5||f<0||l<0||f>=i||l>=c?null:{ix:f,iz:l,index:l*i+f,x:t[0]+f*s,z:t[2]+l*s}}function Js({frames:n,current:a,direction:t=1,loop:s=!1,status:c="ready"}){const i=n.indexOf(a),o=i+(t<0?-1:1);return i>=0&&o>=0&&o<n.length?{frame:n[o],action:"select"}:c==="processing"&&t>0?{frame:a,action:"wait"}:c==="ready"&&s&&n.length>1?{frame:t<0?n.at(-1):n[0],action:"select"}:{frame:a,action:"stop"}}function b0({frames:n,displayedFrame:a,requestedFrame:t,status:s="ready",loading:c=!1,previewFps:i=24,onFrame:o,onScrubbing:r,timing:f,frameSplit:l,active:m=!0,controlRef:y,initialPlayback:x}){const{tr:p}=ue(),[h,d]=v.useState(!1),[u,S]=v.useState(x?.loop??!1),[j,_]=v.useState(x?.fps??i),[E,w]=v.useState(x?.speed??1),[g,C]=v.useState("");v.useImperativeHandle(y,()=>({pause:()=>d(!1),getSettings:()=>({loop:u,fps:j,speed:E}),restoreSettings:R=>{d(!1),S(R.loop),_(R.fps),w(R.speed)}}),[u,j,E]),v.useEffect(()=>{const R=()=>d(!1);return window.addEventListener("oceanscope-annotate",R),()=>window.removeEventListener("oceanscope-annotate",R)},[]),v.useEffect(()=>{m||d(!1)},[m]);const B=v.useRef(!1);v.useEffect(()=>{B.current||C(String(t??a??""))},[t,a]),v.useEffect(()=>{n.length<2&&d(!1)},[n.length]),v.useEffect(()=>{if(!h||c)return;const R=setTimeout(()=>{const N=Js({frames:n,current:a,loop:u,status:s});N.action==="select"?o(N.frame):N.action==="stop"&&d(!1)},1e3/(Math.max(1,j)*E));return()=>clearTimeout(R)},[h,c,a,n,u,s,j,E,o]);function M(R){d(!1);const N=Js({frames:n,current:t??a,direction:R,status:s});N.action==="select"&&o(N.frame)}function b(){d(!1);const R=Number(g);n.includes(R)?R!==t&&o(R):C(String(t??a??""))}const k=n.some((R,N)=>N>0&&R!==n[N-1]+1);return e.createElement("section",{"data-os-loc":"src/field/FieldTimeline.jsx:21:10",className:"field-timeline","aria-label":p("Animation controls")},e.createElement(Ac,{manifest:l,frame:a}),e.createElement("div",{"data-os-loc":"src/field/FieldTimeline.jsx:23:5",className:"field-play-controls"},e.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:42","data-os-action":"","aria-label":p("First frame"),disabled:!n.length,onClick:()=>{d(!1),o(n[0])}},"⏮"),e.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:170","data-os-action":"","aria-label":p("Previous frame"),disabled:n.length<2,onClick:()=>M(-1)},"‹"),e.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:272","data-os-action":"",className:"primary",disabled:n.length<2,onClick:()=>d(R=>!R)},p(h?"Pause":"Play")),e.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:400","data-os-action":"","aria-label":p("Next frame"),disabled:n.length<2,onClick:()=>M(1)},"›"),e.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:497","data-os-action":"","aria-label":p("Last frame"),disabled:!n.length,onClick:()=>{d(!1),o(n.at(-1))}},"⏭"),e.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:23:628"},e.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:23:635","data-os-action":"",type:"checkbox",checked:u,onChange:R=>S(R.target.checked)}),p(" Loop")),e.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:23:735"},p("Speed"),e.createElement("select",{"data-os-loc":"src/field/FieldTimeline.jsx:23:755","data-os-action":"",value:E,onChange:R=>w(Number(R.target.value))},[.25,.5,1,2].map(R=>e.createElement("option",{"data-os-loc":"src/field/FieldTimeline.jsx:23:845",key:R,value:R},R,"×"))))),e.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:24:5","data-os-action":"","aria-label":p("Sequence timeline"),type:"range",min:"0",max:Math.max(0,n.length-1),value:Math.max(0,n.indexOf(t??a)),disabled:n.length<2,onPointerDown:()=>{d(!1),r?.(!0)},onPointerUp:()=>r?.(!1),onPointerCancel:()=>r?.(!1),onBlur:()=>r?.(!1),onKeyDown:R=>{r?.(!0),["Home","End"].includes(R.key)&&(R.preventDefault(),d(!1),o(R.key==="Home"?n[0]:n.at(-1)))},onKeyUp:()=>r?.(!1),onChange:R=>{d(!1),o(n[Number(R.target.value)])}}),e.createElement("div",{"data-os-loc":"src/field/FieldTimeline.jsx:25:5","data-displayed-frame":a,className:"field-time-labels"},e.createElement("span",{"data-os-loc":"src/field/FieldTimeline.jsx:25:78"},p("Displayed frame "),e.createElement("strong",{"data-os-loc":"src/field/FieldTimeline.jsx:25:108"},a??"—"),c?` · ${p("Loading")} ${t}…`:""),e.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:25:206"},p("Go to frame"),e.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:25:232","data-os-action":"","aria-label":p("Comparison frame"),type:"number",value:g,onFocus:()=>{B.current=!0,d(!1)},onChange:R=>{d(!1),C(R.target.value)},onBlur:()=>{B.current=!1,b()},onKeyDown:R=>{R.key==="Enter"&&b()}})),e.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:25:527"},p("Preview FPS"),e.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:25:553","data-os-action":"","aria-label":p("Preview FPS"),type:"number",min:"1",max:"120",value:j,onChange:R=>_(Math.max(1,Math.min(120,Number(R.target.value)||24)))})),e.createElement("small",{"data-os-loc":"src/field/FieldTimeline.jsx:25:719"},f?.fps>0&&Number.isFinite(f.originFrame)?`${p("Time")}: ${((a-f.originFrame)/f.fps+(f.offsetSeconds||0)).toFixed(3)} s`:p("Playback timing only — not physical simulation time"))),e.createElement("small",{"data-os-loc":"src/field/FieldTimeline.jsx:26:5"},n.length,p(" available frames"),k?p(" · Missing frames skipped; no interpolation"):"",s==="processing"?p(" · Processing continues; playback waits at the latest frame"):s==="error"?p(" · Processing failed; completed frames remain available"):""))}const Fc={mae:"MAE",rmse:"RMSE",maxAbsoluteError:"Maximum absolute error",nearSurfaceMae:"Near-surface MAE",signAccuracy:"Sign accuracy",fluidIoU:"Fluid IoU",dice:"Dice",symmetricMeanSurfaceDistance:"Symmetric mean surface distance",hd95:"HD95",meanEpe:"Mean EPE",epeRmse:"EPE RMSE",epeP95:"EPE P95",relativeL2:"Relative L2",meanCosineSimilarity:"Mean cosine similarity",meanAngularErrorDegrees:"Mean angular error",divergenceMae:"Divergence MAE",coverage:"Coverage",validCount:"Valid voxels"},p0=["nearSurfaceMae","rmse","fluidIoU","meanEpe","epeP95","relativeL2","coverage","mae","maxAbsoluteError","signAccuracy","dice","symmetricMeanSurfaceDistance","hd95","epeRmse","componentMae","componentRmse","meanCosineSimilarity","meanAngularErrorDegrees","divergenceMae","validCount","nonFiniteCount","nearSurfaceCount","surfaceSampleCount","angularExcludedCount","divergenceStencilCount","trustedTau","effectiveBand"];Object.assign(Fc,{componentMae:"Component MAE (x, y, z)",componentRmse:"Component RMSE (x, y, z)",nonFiniteCount:"Non-finite pairs excluded",nearSurfaceCount:"Near-surface voxels",surfaceSampleCount:"Surface samples (pooled)",angularExcludedCount:"Angular exclusions",divergenceStencilCount:"Divergence stencils",trustedTau:"Trusted truncation τ",effectiveBand:"Effective band"});function u0({metrics:n,group:a,unit:t,frame:s}){const{tr:c,language:i}=ue(),o=n?.[a],r=a==="sdf"?["mae","rmse","fluidIoU","coverage"]:["meanEpe","epeRmse","coverage"],f=o?p0.filter(m=>o[m]!==void 0):[],l=m=>e.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:14:21",key:m},e.createElement("span",{"data-os-loc":"src/field/MetricsPanel.jsx:14:36"},c(Fc[m])),e.createElement("strong",{"data-os-loc":"src/field/MetricsPanel.jsx:14:66"},o[m]===null?c("Not available"):Array.isArray(o[m])?o[m].map(y=>y==null?"N/A":Number(y).toPrecision(4)).join(" / "):typeof o[m]=="number"?o[m].toLocaleString(void 0,m.endsWith("Count")?{}:{maximumSignificantDigits:5}):String(o[m])),e.createElement("small",{"data-os-loc":"src/field/MetricsPanel.jsx:14:363"},["mae","rmse","maxAbsoluteError","nearSurfaceMae","symmetricMeanSurfaceDistance","hd95","meanEpe","epeRmse","epeP95","componentMae","componentRmse","trustedTau","effectiveBand"].includes(m)?t:m==="coverage"?c("fraction"):m==="meanAngularErrorDegrees"?c("degrees"):m==="divergenceMae"?c(t==="m/s"?"1/s":"velocity / length"):""));return e.createElement("aside",{"data-os-loc":"src/field/MetricsPanel.jsx:15:10",className:"metrics-panel"},e.createElement("h3",{"data-os-loc":"src/field/MetricsPanel.jsx:15:43"},a==="sdf"?i==="zh"?"体积 SDF 指标":"Volumetric SDF metrics":i==="zh"?"原网格速度指标":"Native-grid velocity metrics"),e.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:181",className:"metric-scope"},i==="zh"?`帧 ${s??"—"} · 原网格有效体素 · 不随选区改变`:`Frame ${s??"—"} · Valid native-grid voxels · Independent of ROI`),o?.notice&&e.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:354",role:"note"},i==="zh"&&o.noticeZh?o.noticeZh:c(o.notice)),o?.blocked?e.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:459",className:"score-blocked"},c(o.reason)||c("Scores blocked: declare field semantics and units.")):o?e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:15:637",className:"metric-grid"},r.filter(m=>f.includes(m)).map(l),f.filter(m=>m.endsWith("Count")).map(l)),e.createElement("details",{"data-os-loc":"src/field/MetricsPanel.jsx:15:776"},e.createElement("summary",{"data-os-loc":"src/field/MetricsPanel.jsx:15:785"},i==="zh"?"更多指标":"More metrics"),e.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:15:843",className:"metric-grid"},o.nearSurfaceDomain&&e.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:899"},c(o.nearSurfaceDomain),e.createElement("br",{"data-os-loc":"src/field/MetricsPanel.jsx:15:932"}),c("Band: "),o.effectiveBand?.toPrecision(4)," ",t),f.filter(m=>!r.includes(m)&&!m.endsWith("Count")).map(l)))):e.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:578"},c("Metrics are not available for this frame.")))}const Xn="Common valid finite SDF voxels M; N = |M|. Interior means SDF ≤ 0.",mn="Common valid finite velocity voxels M; not automatically restricted to fluid interior.",xe=(n,a,t,s,c,i,o,r="")=>({id:n,label:a,formula:t,unitKind:s,direction:c,group:i,domain:o,caveats:r}),Ut=[xe("mae","Water-surface elevation MAE","mean |ηp − ηg|","length","Lower","elevation","Paired trustworthy world-Y zero-crossing columns on common XZ lattice.","Not crest-to-trough wave height or Hs. Filled exterior, missing support and multiple crossings are excluded; inspect both coverage denominators."),xe("rmse","Water-surface elevation RMSE","sqrt(mean (ηp − ηg)^2)","length","Lower","elevation","Same paired height columns.","Full-resolution aligned SDF, never preview mesh."),xe("maxAbsoluteError","Maximum elevation error","max |ηp − ηg|","length","Lower","elevation","Same paired height columns."),xe("coverage","Height paired coverage","paired valid columns / GT valid columns","fraction","Context","elevation","GT reconstructible columns.","Zero denominator: N/A. Not SDF voxel coverage."),xe("gtCoverage","GT reconstructible coverage","GT valid columns / candidate XZ columns","fraction","Context","elevation","All candidate XZ columns.","Read with paired coverage to expose excluded GT surfaces."),xe("mae","SDF MAE","Σ |p − g| / N","length","Lower","sdf",Xn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),xe("rmse","SDF RMSE","√(Σ (p − g)² / N)","length","Lower","sdf",Xn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),xe("maxAbsoluteError","Maximum absolute error","max |p − g|","length","Lower","sdf",Xn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),xe("nearSurfaceMae","Near-surface MAE","mean |clipτ(p) − clipτ(g)| on B","length","Lower","sdf","B = M ∩ {|g| ≤ effective band}, including numerical tolerance.","GT defines B. For TSDF, band ≤ shared τ; clip both values at τ. Shared τ is min of both TSDF τ values, or the single TSDF τ in a mixed pair. No clipping for full/full."),xe("signAccuracy","Sign accuracy","count[(p ≤ 0) = (g ≤ 0)] / N","fraction","Higher","sdf",Xn),xe("fluidIoU","Fluid IoU","|P ∩ G| / |P ∪ G|","fraction","Higher","sdf",Xn,"P and G are predicted and GT interior sets in M. Both empty: 1."),xe("dice","Dice","2 |P ∩ G| / (|P| + |G|)","fraction","Higher","sdf",Xn,"Both interior sets empty: 1."),xe("symmetricMeanSurfaceDistance","Symmetric mean surface distance","mean(D(G→P) ∪ D(P→G))","length","Lower","sdf","Pooled nearest distances between sampled zero crossings; each surface uses its own valid support.","Approximation, at most 4096 samples per surface. Not exact continuous-mesh distance; unavailable if either surface is empty."),xe("hd95","HD95","percentile95(D(G→P) ∪ D(P→G))","length","Lower","sdf","Same pooled sampled-surface distances.","Linear percentile interpolation; not maximum Hausdorff distance. Surface-sampling limitations apply."),xe("meanEpe","Mean EPE","mean ‖p − g‖₂","speed","Lower","velocity",mn),xe("epeRmse","EPE RMSE","√mean ‖p − g‖₂²","speed","Lower","velocity",mn),xe("epeP95","EPE P95","percentile95(‖p − g‖₂)","speed","Lower","velocity",mn,"Linear interpolation between ordered samples."),xe("componentMae","Component MAE (x, y, z)","mean |pₖ − gₖ|, k = x,y,z","speed","Lower","velocity",mn),xe("componentRmse","Component RMSE (x, y, z)","√mean (pₖ − gₖ)², k = x,y,z","speed","Lower","velocity",mn),xe("relativeL2","Relative L2","√(Σ ‖p − g‖₂² / Σ ‖g‖₂²)","dimensionless","Lower","velocity",mn,"Unavailable when GT energy is zero; no artificial epsilon in denominator."),xe("meanCosineSimilarity","Mean cosine similarity","mean clamp((p·g)/(‖p‖₂ ‖g‖₂), −1, 1)","dimensionless","Higher","velocity",mn,"Exclude either magnitude ≤ ε (default 1e−8)."),xe("meanAngularErrorDegrees","Mean angular error","mean acos(cosine) × 180/π","degrees","Lower","velocity",mn,"Same nonzero-vector subset as cosine similarity."),xe("divergenceMae","Divergence MAE","mean |∇·p − ∇·g|","inverseTime","Lower","velocity","Six valid neighboring samples; finite central-difference divergence. Borders excluded.","Σₖ (vₖ(i+eₖ) − vₖ(i−eₖ))/(2hₖ). Orthogonal aligned lattice. Divergence mismatch, not absolute incompressibility."),xe("coverage","Coverage","N / total lattice voxels","fraction","Context","both","Reported separately for SDF and velocity.","Always read with the error: small valid support can hide missing predictions.")];function h0(){return{schema:1,notation:"g = Ground Truth; p = Prediction. These are evaluation metrics, not a weighted training loss.",sequence:"Equal weight per valid frame, not pooled voxels. Excluded frame counts are reported. Population standard deviation; interpolated P95.",metrics:Ut}}function g0(n){const a=n.filter(r=>typeof r=="number"&&Number.isFinite(r)).sort((r,f)=>r-f);if(!a.length)return{median:null,p95:null,stddev:null};const t=r=>{const f=(a.length-1)*r,l=Math.floor(f),m=f-l;return a[l]*(1-m)+a[Math.min(l+1,a.length-1)]*m},s=a.reduce((r,f)=>Math.max(r,Math.abs(f)),0),c=a.map(r=>s?r/s:0),i=c.reduce((r,f)=>r+f/a.length,0),o=Math.sqrt(c.reduce((r,f)=>r+(f-i)**2/a.length,0))*s;return{median:t(.5),p95:t(.95),stddev:Number.isFinite(o)?o:null}}function Oc(n){if(!Number.isSafeInteger(n?.frame)||!Number.isSafeInteger(n?.prediction_origin_frame)||!Number.isFinite(n?.fps)||n.fps<=0||n.prediction_type==="extrapolation"&&n.frame<=n.prediction_origin_frame)return null;const a=(n.frame-n.prediction_origin_frame)/n.fps;return Number.isFinite(a)?a:null}const y0={length:"m",speed:"m/s",inverseTime:"1/s",degrees:"degrees",fraction:"fraction",dimensionless:"dimensionless"};function x0(n,a={}){return n.flatMap(t=>Ut.filter(s=>s.group===t||s.group==="both"&&t!=="elevation").flatMap(s=>{const c=s.unitKind==="length"?a.sdf??"m":s.unitKind==="speed"?a.velocity??"m/s":s.unitKind==="inverseTime"&&a.velocity&&a.velocity!=="m/s"?`(${a.velocity}) / length`:y0[s.unitKind],i={group:t,key:s.id,label:s.label,unit:c,direction:s.direction};return s.id==="componentMae"||s.id==="componentRmse"?["x","y","z"].map((o,r)=>({...i,id:`${t}.${s.id}.${o}`,index:r,label:`${s.id==="componentMae"?"Component MAE":"Component RMSE"} ${o.toUpperCase()}`})):[{...i,id:`${t}.${s.id}`}]}))}function v0({metrics:n,frames:a=[],expectedFrames:t=[],groups:s=[],status:c,units:i,frameSplit:o,frameSubset:r="all"}){const f=Object.values(n?.settings?.sdf||{}).some(j=>j?.semantics==="water_interior"),l=f?"gt_water_common_distance_support":n?.settings?.sdfEvaluationRegion||"full_domain",m=x0(s,i).map(j=>({...j,label:j.label+(f&&j.group==="sdf"?["fluidIoU","dice","signAccuracy","symmetricMeanSurfaceDistance","hd95"].includes(j.key)?" (full domain)":" (conditional GT-water support)":"")+(l==="gt_water"&&j.group==="sdf"?["fluidIoU","dice","symmetricMeanSurfaceDistance","hd95"].includes(j.key)?" (full domain)":" (GT water)":"")})),y=new Set(a),x=[...t,...a,...Object.keys(n?.frames||{}).map(Number),...n?.missingPredictionFrames||[]],p=new Map((o?.rows??[]).map(j=>[j.frame,j])),h=[...new Set(x.filter(Number.isInteger))].sort((j,_)=>j-_).filter(j=>Ui(p,j,r)),d=h.map(j=>{const _=n?.frames?.[j],E={};for(const C of m){const B=_?.[C.group],M=B?.[C.key],b=C.index===void 0?M:M?.[C.index];E[C.id]=!B?.blocked&&Number.isFinite(b)?b:null}const w=s.filter(C=>C!=="elevation"&&_?.[C]?.blocked).map(C=>`${C}: ${_[C].reason||"Scoring blocked"}`).join("; "),g=p.get(j);return{frame:j,elevationAudit:_?.elevation??null,algorithmVersion:n?.algorithmVersion??"legacy undeclared",split:Ki(p,j),predictionType:Ji(p,j),predictionOriginFrame:g?.prediction_origin_frame??null,fps:g?.fps??null,horizonSeconds:Oc(g),available:y.has(j),calculated:!!_,reason:w,values:E}}),u=m.map(j=>{const _=d.map(g=>g.values[j.id]).filter(Number.isFinite),E=_.length,w=E?_.reduce((g,C)=>g+C/E,0):null;return{...j,mean:w,...g0(_),minimum:E?_.reduce((g,C)=>Math.min(g,C)):null,maximum:E?_.reduce((g,C)=>Math.max(g,C)):null,valid:E,excluded:d.length-E,total:d.length}}),S=[...new Set(h.flatMap(j=>s.filter(_=>_!=="elevation").flatMap(_=>n?.frames?.[j]?.[_]?.blocked?[`${_.toUpperCase()}: ${n.frames[j][_].reason||"Scoring prerequisites not met"}`]:[])))];return{columns:m,rows:d,summary:u,blockedReasons:S,evaluationRegion:l,frameSubset:r,sdfValidation:n?.settings?.sdf||{},total:d.length,calculated:d.filter(j=>j.calculated).length,complete:c==="ready"&&d.length>0&&d.every(j=>j.calculated)&&!S.length,status:c}}function Fe(n){return Number.isFinite(n)?Number(n.toPrecision(6)).toString():"N/A"}const E0=n=>{const a=n==null?"N/A":String(n);return/[",\r\n]/.test(a)?`"${a.replaceAll('"','""')}"`:a};function Ks(n,a){const t=n.complete?"complete":"partial",s=a==="frames"?[["frame","frame_status","sequence_status",...n.columns.map(c=>`${c.id} [${c.unit}]`),"excluded_reason"],...n.rows.map(c=>[c.frame,c.reason?"scoring blocked":c.calculated?"calculated":"not calculated",t,...n.columns.map(i=>c.values[i.id]),c.reason||""])]:[["metric","unit","mean","minimum","maximum","valid_frames","excluded_frames","total_frames","sequence_status","median","p95","stddev"],...n.summary.map(c=>[c.id,c.unit,c.mean,c.minimum,c.maximum,c.valid,c.excluded,c.total,t,c.median,c.p95,c.stddev])];return a==="frames"&&(s[0].push("split","prediction_type","prediction_origin_frame","fps","horizon_seconds"),s.slice(1).forEach((c,i)=>c.push(n.rows[i].split||"unassigned",n.rows[i].predictionType||"unassigned",n.rows[i].predictionOriginFrame,n.rows[i].fps,n.rows[i].horizonSeconds))),a==="frames"&&(s[0].push("algorithm_version","elevation_valid_columns","elevation_gt_valid_columns","elevation_candidate_columns","elevation_reason","elevation_excluded_reasons"),s.slice(1).forEach((c,i)=>{const o=n.rows[i],r=o.elevationAudit;c.push(o.algorithmVersion,r?.validColumns,r?.gtValidColumns,r?.candidateColumns,r?.reason||(r?"":"Not calculated by this result version"),JSON.stringify(r?.excludedReasons??{}))})),s[0].push("frame_subset"),s.slice(1).forEach(c=>c.push(n.frameSubset||"all")),s[0].push("sdf_error_region","geometry_region"),s.slice(1).forEach(c=>c.push(n.evaluationRegion||"full_domain","full_domain")),s[0].push("gt_validation_mode","prediction_validation_mode","gt_override_reason","prediction_override_reason"),s.slice(1).forEach(c=>c.push(n.sdfValidation?.gt?.validationMode||"legacy undeclared",n.sdfValidation?.prediction?.validationMode||"legacy undeclared",n.sdfValidation?.gt?.overrideReason||"",n.sdfValidation?.prediction?.overrideReason||"")),s.map(c=>c.map(E0).join(",")).join(`\r
`)}function _0(n,a,t=640){const c=n.filter(d=>Number.isFinite(d.values[a])).map(d=>d.values[a]);let i=c.length?Math.min(...c):0,o=c.length?Math.max(...c):1;if(i===o){const d=Math.max(Math.abs(i)*.05,1e-6);i-=d,o+=d}const r=n[0]?.frame??0,f=n.at(-1)?.frame??r,l=d=>f===r?(t+42)/2:64+(d-r)/(f-r)*(t-86),m=d=>180-(d-i)/(o-i)*150,y=[],x=[];let p=[],h=null;for(const d of n){const u=d.values[a];if((!Number.isFinite(u)||h!==null&&d.frame!==h+1)&&(p.length&&y.push(p),p=[]),Number.isFinite(u)){const S={frame:d.frame,value:u,x:l(d.frame),y:m(u)};p.push(S),x.push(S)}h=d.frame}return p.length&&y.push(p),{min:i,max:o,start:r,end:f,x:l,y:m,points:x,segments:y}}function w0(n,a,t=.9){const s=n.filter(i=>Number.isFinite(i.values[a?.id]));return{worst:a?.direction==="Context"?[]:[...s].sort((i,o)=>(a?.direction==="Higher"?1:-1)*(i.values[a.id]-o.values[a.id])||i.frame-o.frame).slice(0,5),lowCoverage:n.filter(i=>Number.isFinite(i.values[`${a?.group}.coverage`])&&i.values[`${a.group}.coverage`]<t),unavailable:n.filter(i=>!Number.isFinite(i.values[a?.id]))}}const S0=n=>`"${String(n??"undeclared").replaceAll('"','""')}"`;function j0(n,a,t){const s=[["report_identifier",a],["frame_subset",n.frameSubset],["frame_numbers",n.rows.map(c=>c.frame).join(";")],["frame_count",n.rows.length],["status",n.complete?"complete":"partial"],["sdf_error_region",n.evaluationRegion],["units",JSON.stringify(n.columns.map(c=>({metric:c.id,unit:c.unit})))],["sdf_declarations",JSON.stringify(n.sdfValidation)],["split_manifest_sha256",t?.sha256],["aggregation","Equal weight per valid frame; mean of frame RMSE, not pooled voxel RMSE. N/A excluded, never zero."],["valid_counts",JSON.stringify(n.summary.map(c=>({metric:c.id,valid:c.valid,total:c.total})))],["limitations","SDF error is not wave-height error. Read error with coverage. Frame numbers do not certify physical-time alignment. Split membership is declared, not independently verified. Exterior-filled distances are conditional, not full-domain accuracy."],["provenance","Use the saved-result ZIP for source identities and full scoring protocol. This notes file describes the currently selected report subset."]];return[["field","value"],...s].map(c=>c.map(S0).join(",")).join(`\r
`)}function C0({report:n,metric:a,onFrame:t,onDownload:s,comparisonId:c,frameSplit:i}){const{language:o,tr:r}=ue(),f=o==="zh",l=(h,d)=>f?d:h,[m,y]=v.useState(.9),x=v.useMemo(()=>w0(n.rows,a,m),[n.rows,a,m]),p=(h,d)=>h.slice(0,20).map(u=>e.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:9:51",key:u.frame},e.createElement("button",{"data-os-loc":"src/field/FrameReview.jsx:9:69","data-os-action":"",disabled:!u.available||!t,"aria-label":`${d==="unavailable"?"Review unavailable frame":d==="coverage"?"Review coverage frame":"Review frame"} ${u.frame}`,onClick:()=>t(u.frame)},u.frame)," · ",Fe(d==="coverage"?u.values[`${a?.group}.coverage`]:u.values[a?.id]),d==="unavailable"&&e.createElement("span",{"data-os-loc":"src/field/FrameReview.jsx:9:426"}," · ",u.reason||(u.calculated?l("Metric unavailable on this support; see definitions below","该指标在当前有效区域不可用，请查看下方定义"):l("Not calculated / missing frame","尚未计算或帧缺失")))));return e.createElement("details",{"data-os-loc":"src/field/FrameReview.jsx:10:9",className:"frame-review"},e.createElement("summary",{"data-os-loc":"src/field/FrameReview.jsx:10:43"},l("Frame review & report notes","异常帧检查与报告说明")),e.createElement("p",{"data-os-loc":"src/field/FrameReview.jsx:11:3"},l("Review only: no frames are removed and no scores are changed. Lists follow the selected subset and metric. Worst does not mean statistically abnormal.","仅供检查：不剔除帧、不改变数值。列表跟随当前集合和指标；最差帧不等同于统计异常。")),e.createElement("div",{"data-os-loc":"src/field/FrameReview.jsx:12:3",className:"frame-review-grid"},e.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:12:38"},e.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:12:47"},l("Worst 5 frames","表现最差的 5 帧")," · ",r(a?.label)),x.worst.length?e.createElement("ol",{"data-os-loc":"src/field/FrameReview.jsx:12:132"},p(x.worst,"worst")):e.createElement("p",{"data-os-loc":"src/field/FrameReview.jsx:12:171"},l("No rankable finite values. Coverage is context, not accuracy.","没有可排序的有效数值；覆盖率是背景信息，不代表精度。"))),e.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:13:3"},e.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:13:12"},l("Low coverage","低覆盖率")," · ",x.lowCoverage.length),e.createElement("label",{"data-os-loc":"src/field/FrameReview.jsx:13:77"},l("Review threshold","检查阈值")," ",e.createElement("input",{"data-os-loc":"src/field/FrameReview.jsx:13:115","data-os-action":"","aria-label":"Coverage review threshold",type:"number",min:"0",max:"1",step:"0.05",value:m,onChange:h=>{const d=Number(h.target.value);h.target.value!==""&&Number.isFinite(d)&&d>=0&&d<=1&&y(d)}})),e.createElement("small",{"data-os-loc":"src/field/FrameReview.jsx:13:348"},l("Below this fraction; review aid, not a scientific pass/fail criterion.","低于此比例时列出；仅辅助检查，不是科研合格线。")),e.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:13:466"},p(x.lowCoverage,"coverage"))),e.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:14:3"},e.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:14:12"},l("Unavailable metric","指标不可用")," · ",x.unavailable.length),e.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:14:84"},p(x.unavailable,"unavailable")),e.createElement("small",{"data-os-loc":"src/field/FrameReview.jsx:14:134"},l("At most 20 entries per list; all values remain in the frame table and CSV.","每个列表最多显示 20 项，全部数据仍保留在逐帧表格和 CSV。")))),e.createElement("details",{"data-os-loc":"src/field/FrameReview.jsx:15:3"},e.createElement("summary",{"data-os-loc":"src/field/FrameReview.jsx:15:12"},l("How to interpret these results","如何解读这些结果")),e.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:15:79"},e.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:16:4"},l("N/A is not zero: it may mean missing frames, blocked scoring, no valid samples, or an unsupported metric. The list gives known blocking reasons; metric definitions explain other restrictions.","N/A 不是零：可能是缺帧、计算被阻止、无有效样本或指标不适用。列表显示已知阻止原因，其余限制见指标定义。")),e.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:17:4"},l("A lower error with lower coverage is not automatically better. Compare models on matching frames and common spatial support.","误差更低但覆盖率更低，不自动代表更好。模型比较应使用匹配帧和共同有效空间区域。")),e.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:18:4"},l("Exterior-filled SDF supports conditional interior distance errors only; it does not certify full-domain distance accuracy. Surface metrics may be unavailable.","水外固定填值的 SDF 只支持有条件的水内距离误差，不能证明全域距离精度；表面指标可能不可用。")),e.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:19:4"},l("SDF MAE is not wave-height MAE. Sequence means give equal weight to valid frames, not to pooled voxels.","SDF MAE 不等于浪高 MAE。序列均值对有效帧等权，并非将所有体素合并计算。")))),e.createElement("button",{"data-os-loc":"src/field/FrameReview.jsx:21:3","data-os-action":"",disabled:!n.total,onClick:()=>s(`${c}_${n.frameSubset}_report_notes.csv`,j0(n,c,i))},l("Export report notes CSV","导出报告说明 CSV")))}function B0({point:n,row:a,selected:t,onFrame:s,language:c}){const i=!!(s&&a?.available),o=a?.predictionType||"unassigned",r={train:"#b66b14",validation:"#8052bc",test:"#008c9c",unassigned:"#7b8794"}[a?.split||"unassigned"];return e.createElement("g",{"data-os-loc":"src/field/FrameCurvePoint.jsx:5:9","data-os-action":"",transform:`translate(${n.x},${n.y})`,role:"button","aria-label":`${c==="zh"?"选择曲线帧":"Select plotted frame"} ${n.frame}`,"aria-disabled":!i,tabIndex:i?0:-1,onClick:()=>i&&s(n.frame),onKeyDown:f=>{i&&["Enter"," "].includes(f.key)&&(f.preventDefault(),s(n.frame))},style:{cursor:i?"pointer":"default"}},e.createElement("title",{"data-os-loc":"src/field/FrameCurvePoint.jsx:6:2"},`Frame ${n.frame}: ${n.value} | ${a?.split||"unassigned"} | ${o}`),e.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:6:89",r:"7",fill:"transparent"}),t&&e.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:7:13",r:"7",fill:"none",stroke:"#d36218",strokeWidth:"2"}),o==="anchor"?e.createElement("rect",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:19",x:"-4",y:"-4",width:"8",height:"8",fill:r}):o==="extrapolation"?e.createElement("path",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:98",d:"M 0 -5 L 5 4 L -5 4 Z",fill:r}):o==="interpolation"?e.createElement("path",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:168",d:"M 0 -5 L 5 0 L 0 5 L -5 0 Z",fill:r}):e.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:221",r:"3",fill:r}))}function A0({rows:n,metricKey:a,manifest:t,modelName:s}){const{language:c}=ue(),i=c==="zh",o=new Map;let r=0;const f=new Map((t?.rows??[]).map(l=>[l.frame,l]));for(const l of n){const m=f.get(l.frame);if(m?.prediction_type!=="extrapolation")continue;const y=Oc(m);if(y===null){r++;continue}const x=`${m.prediction_origin_frame} / ${m.fps} fps`;o.has(x)||o.set(x,[]),o.get(x).push({frame:l.frame,seconds:y,value:l.values[a]})}return!o.size&&!r?null:e.createElement("details",{"data-os-loc":"src/field/PredictionTrend.jsx:18:9"},e.createElement("summary",{"data-os-loc":"src/field/PredictionTrend.jsx:18:18"},s&&`${s} · `,i?"未来外推时间趋势":"Future prediction horizon"),e.createElement("p",{"data-os-loc":"src/field/PredictionTrend.jsx:18:110"},i?"按声明的输入起点和 FPS 分图；缺失帧不连线，不合并不同预测。":"Separate plots for declared origin and FPS; missing frames are not connected and different predictions are not merged."),r>0&&e.createElement("p",{"data-os-loc":"src/field/PredictionTrend.jsx:19:14"},i?`${r} 帧缺少有效时间声明，仍使用上方帧号曲线。`:`${r} frame(s) without valid timing; retain the frame-number plot above.`),[...o].map(([l,m])=>{const y=m.filter(S=>Number.isFinite(S.value)),x=Math.max(1,...m.map(S=>S.seconds)),p=y.length?Math.min(...y.map(S=>S.value)):0,h=y.length?Math.max(...y.map(S=>S.value)):1,d=S=>50+S.seconds/x*510,u=S=>160-(S.value-p)/(h-p||1)*120;return e.createElement("figure",{"data-os-loc":"src/field/PredictionTrend.jsx:24:10",key:l},e.createElement("figcaption",{"data-os-loc":"src/field/PredictionTrend.jsx:24:28"},i?"预测起点":"Prediction origin"," ",l," · ",a),e.createElement("svg",{"data-os-loc":"src/field/PredictionTrend.jsx:24:104",role:"img","aria-label":`Prediction horizon ${l}`,viewBox:"0 0 600 200",width:"100%"},e.createElement("line",{"data-os-loc":"src/field/PredictionTrend.jsx:25:4",x1:"50",x2:"560",y1:"160",y2:"160",stroke:"#a9bac8"}),m.map((S,j)=>{const _=m[j-1];return Number.isFinite(S.value)&&e.createElement("g",{"data-os-loc":"src/field/PredictionTrend.jsx:26:80",key:S.frame},_&&S.frame===_.frame+1&&Number.isFinite(_.value)&&e.createElement("line",{"data-os-loc":"src/field/PredictionTrend.jsx:26:157",x1:d(_),y1:u(_),x2:d(S),y2:u(S),stroke:"#008c9c"}),e.createElement("circle",{"data-os-loc":"src/field/PredictionTrend.jsx:26:228",cx:d(S),cy:u(S),r:"4",fill:"#008c9c"},e.createElement("title",{"data-os-loc":"src/field/PredictionTrend.jsx:26:277"},S.frame,": ",Fe(S.value),"; ",Fe(S.seconds)," s")))}),e.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:4",x:"8",y:"40"},Fe(h)),e.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:48",x:"8",y:"160"},Fe(p)),e.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:93",x:"50",y:"186"},"0"),e.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:122",x:"500",y:"186"},Fe(x)," s")))}))}const k0={missing_or_nonfinite_column:["missing or non-finite column","缺失或非有限数值列"],no_interior_to_exterior_span:["no trustworthy interior-to-exterior span","缺少可信的水内至水外跨度"],ambiguous_or_multiple_crossings:["ambiguous or multiple surfaces","交叉不明确或存在多层水面"],crossing_touches_truncation:["crossing touches truncation boundary","交叉接触截断边界"],nonfinite_height:["non-finite height","高度不是有限数值"],nonfinite_difference:["non-finite height difference","高度差不是有限数值"],outside_common_columns:["outside common column support","不在共同有效列内"]},M0={"No paired trustworthy single-surface columns":"没有可配对的可信单层水面列。","Invalid world-Y lattice":"世界 Y 轴网格无效。","Invalid height input dimensions":"高度输入维度无效。","Height column grids differ":"高度列网格不一致。","Height requires full SDF or trusted TSDF; filled exterior/unknown is not a trustworthy zero crossing":"需要完整 SDF 或可信 TSDF；水外填值或类型未知无法提供可信零交叉。","Height requires validated unchanged SDF distances":"需要经验证且未重建的 SDF 距离。","Height requires axis-aligned world-Y-up lattice":"需要与世界坐标轴对齐、Y 轴向上的网格。","Height requires a comparison with matching declared units":"需要 GT 与预测的声明单位一致。","Height requires finite positive trusted truncation distance":"需要有限、正值且可信的截断距离。"};function R0({data:n}){const{language:a}=ue(),t=a==="zh",s=c=>{const[i,...o]=c.split(":"),r=o.length?o.join(":"):i;return(o.length?i==="gt"?"GT: ":i==="prediction"?t?"预测：":"Prediction: ":i+": ":"")+(k0[r]?.[t?1:0]??r)};return e.createElement("details",{"data-os-loc":"src/field/HeightSupportAudit.jsx:28:9"},e.createElement("summary",{"data-os-loc":"src/field/HeightSupportAudit.jsx:28:18"},t?"当前帧高度有效区域与排除原因":"Current-frame height support and exclusions"),n?e.createElement(e.Fragment,null,n.reason&&e.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:30:16"},t?M0[n.reason]??n.reason:n.reason),n.blocked&&e.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:31:17"},t?"此帧高度评分不可用；不能把未评估数量当作零。":"Height scoring unavailable for this frame; unevaluated counts are not zero."),e.createElement("table",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:2","aria-label":t?"高度有效区域明细":"Height support audit"},e.createElement("thead",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:59"},e.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:66"},e.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:70"},t?"项目／原因":"Support / reason"),e.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:110"},t?"列数":"Columns"))),e.createElement("tbody",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:151"},[[t?"有效配对列":"Valid paired columns","validColumns"],[t?"GT 有效列":"Valid GT columns","gtValidColumns"],[t?"候选水平列":"Candidate horizontal columns","candidateColumns"]].map(([c,i])=>e.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:187",key:i},e.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:201",scope:"row"},c),e.createElement("td",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:228"},n.blocked||!Number.isFinite(n[i])?"N/A":n[i]))),Object.entries(n.excludedReasons??{}).map(([c,i])=>e.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:59",key:c},e.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:73",scope:"row"},s(c)),e.createElement("td",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:106"},Number.isFinite(i)?i:"N/A"))))),e.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:35:18"},t?"配对覆盖率＝配对列／GT 有效列；GT 可重建比例＝GT 有效列／候选列。排除原因不代表模型排名。":"Paired coverage = paired / valid GT columns; GT reconstructible fraction = valid GT / candidate columns. Exclusions are not model rankings.")):e.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:29:9"},t?"此帧没有高度记录。旧结果需重新创建比较；尚未载入的帧请先选择。":"No height record for this frame. Create a new comparison for legacy results, or select a loaded frame."))}function P0(n,a){const t=URL.createObjectURL(new Blob(["\uFEFF",a],{type:"text/csv;charset=utf-8"})),s=document.createElement("a");s.href=t,s.download=n,s.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}const I0=[];function N0({metrics:n,frames:a,expectedFrames:t=I0,groups:s,group:c,status:i,currentFrame:o,onFrame:r,onDownload:f=P0,comparisonId:l="comparison",sdfUnit:m="m",velocityUnit:y="m/s",onReviewSetup:x,frameSplit:p}){const{tr:h,language:d}=ue(),[u,S]=v.useState(()=>p?"test":"all"),j=Object.values(n?.frames||{}).some(P=>P.elevation),_=v.useMemo(()=>j?[...s,"elevation"]:s,[s,j]),[E,w]=v.useState(""),g=_.includes(E)?E:c;v.useEffect(()=>w(""),[c]),v.useEffect(()=>S(p?"test":"all"),[p?.sha256,!!p]);const C=v.useMemo(()=>v0({metrics:n,frames:a,expectedFrames:t,groups:_,status:i,units:{sdf:m,velocity:y},frameSplit:p,frameSubset:u}),[n,a,t,_,i,m,y,p,u]),B=C.columns.filter(P=>P.group===g),M=C.summary.filter(P=>P.group===g),[b,k]=v.useState(""),[R,N]=v.useState(0),[F,T]=v.useState(640),I=v.useRef(null),$=B.find(P=>P.id===b)||B[0];v.useEffect(()=>{if(typeof ResizeObserver>"u")return;const P=new ResizeObserver(([z])=>T(Math.max(280,Math.round(z.contentRect.width))));return P.observe(I.current),()=>P.disconnect()},[]);const Z=v.useMemo(()=>_0(C.rows,$?.id,F),[C.rows,$?.id,F]),K=Math.max(1,Math.ceil(C.rows.length/50)),O=Math.min(R,K-1),J=C.rows.slice(O*50,(O+1)*50),V=v.useMemo(()=>new Map(C.rows.map(P=>[P.frame,P])),[C.rows]),be=V.get(o),G=C.summary.find(P=>P.id===$?.id);return e.createElement("section",{"data-os-loc":"src/field/SequenceMetrics.jsx:31:9",className:"sequence-metrics",ref:I,"aria-label":h("Sequence loss analysis")},e.createElement("h2",{"data-os-loc":"src/field/SequenceMetrics.jsx:32:3"},h("Per-frame metrics & sequence averages")),e.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:3"},d==="zh"?"统计组":"Statistics group"," ",e.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:53","data-os-action":"","aria-label":"Statistics group",value:g,onChange:P=>w(P.target.value)},_.map(P=>e.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:163",key:P,value:P},P==="elevation"?d==="zh"?"水面高度":"Water-surface elevation":P.toUpperCase())))),g==="elevation"&&e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:34:25"},d==="zh"?"世界 Y 水面高度，不是波峰—波谷浪高或 Hs。固定填值、缺失支持和多层水面不可用于此评分。":"World-Y elevation, not crest-to-trough wave height or Hs. Filled exterior, missing support and multiple surfaces cannot be scored."),g==="elevation"&&e.createElement(R0,{data:n?.frames?.[o]?.elevation}),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:36:3",className:"research-warning"},u==="test"||u.startsWith("test_")?d==="zh"?"Test 报告：仅汇总清单声明的测试帧。":"Test report: only declared test frames are summarized.":u==="train"?d==="zh"?"Train 报告：训练帧表现，不代表未见数据的泛化效果。":"Train report: training-frame performance, not generalization to unseen data.":d==="zh"?"参考报告：不是独立的 Test 结果。":"Reference report: not a Test-only evaluation."," ",d==="zh"?"划分依据训练方清单，不独立核验训练历史。":"Membership follows the supplied manifest; training history is not independently verified."),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:3",className:"frame-split-toolbar"},e.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:40"},d==="zh"?"统计帧集合":"Evaluation subset"," ",e.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:93","data-os-action":"","aria-label":"Evaluation subset",value:u,onChange:P=>{S(P.target.value),N(0)}},Object.entries({all:d==="zh"?"全部（参考）":"All",train:"Train",validation:"Validation",test:"Test",...Qi(d==="zh"),unassigned:d==="zh"?"未划分":"Unassigned"}).map(([P,z])=>e.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:407",key:P,value:P},z)))),e.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:476"},d==="zh"?"仅筛选曲线、统计表和下方 CSV；不改变原始计算或动画。":"Filters curves, tables and the CSVs below; original calculations and playback are unchanged.")),C.total===0&&e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:38:22",role:"status"},d==="zh"?"此集合没有已声明的帧；不补零，也不使用其他集合替代。":"No declared frames in this subset; no zeros or fallback to another subset."),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:39:3"},h("SDF error region: "),e.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:39:32"},C.evaluationRegion==="gt_water_common_distance_support"?h("Conditional GT-water distance support"):C.evaluationRegion==="gt_water"?h("GT water only (GT SDF < 0)"):h("Full domain (valid pairs)")),h(". Occupancy and surface metrics use their own saved validity rules; they are not certified by the distance mask. Velocity metrics unchanged.")),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:40:3",className:"sequence-partial",role:"status"},C.blockedReasons.length?h("Scoring blocked"):C.complete?d==="zh"?"帧记录处理完成":"Processing complete":h("Partial results")," · ",C.calculated," / ",C.total,h(" frame records processed"),i==="error"?h(" · Processing stopped"):""),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:41:3",role:"status"},C.total?G?.valid?d==="zh"?`所选指标有效帧：${G.valid} / ${C.total}；排除 ${G.excluded} 帧。`:`Selected metric valid frames: ${G.valid} / ${C.total}; ${G.excluded} excluded.`:d==="zh"?"所选指标不可用：没有有效数值。处理完成不代表评分有效。":"Selected metric unavailable: no valid values. Completed processing does not imply valid scoring.":d==="zh"?"当前集合为空。":"Selected subset is empty."),C.blockedReasons.length>0&&e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:36",className:"error",role:"alert"},e.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:72"},h("No valid loss can be reported for blocked fields.")),C.blockedReasons.map(P=>e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:181",key:P},h(P))),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:215"},h("Review units and SDF type in Datasets & comparison setup, then click Create comparison again. Old results do not change when declarations are edited. Unit confirmation declares the source scale; it does not convert data.")),x&&e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:466","data-os-action":"",onClick:x},h("Review scoring setup"))),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:43:3"},h("Equal weight per valid frame. N/A is excluded, never zero. RMSE and P95 averages are means of frame metrics, not pooled-voxel metrics. No combined training loss.")),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:3",className:"sequence-toolbar"},e.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:37"},h("Metric curve"),e.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:64","data-os-action":"","aria-label":h("Metric curve"),value:$?.id||"",onChange:P=>k(P.target.value)},B.map(P=>e.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:185",key:P.id,value:P.id},h(P.label))))),e.createElement("span",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:258"},h("Unit: "),h($?.unit)," · ",$?.direction==="Context"?h("Context metric"):h($?.direction)+" "+h("is better"))),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:3",className:"sequence-readout"},h("Frame "),o??"—",": ",e.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:72"},Fe(be?.values[$?.id])),h(" · Sequence mean: "),e.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:158"},Fe(G?.mean)),h(" · Valid: "),G?.valid??0," / ",C.total),e.createElement(C0,{report:C,metric:$,onFrame:r,onDownload:f,comparisonId:l,frameSplit:p}),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:47:3"},d==="zh"?"对应覆盖率（所选帧均值）":"Associated coverage (selected-frame mean)",": ",Fe(C.summary.find(P=>P.id===`${g}.coverage`)?.mean),g==="elevation"&&e.createElement(e.Fragment,null," · ",d==="zh"?"GT 可重建比例":"GT reconstructible fraction",": ",Fe(C.summary.find(P=>P.id==="elevation.gtCoverage")?.mean))),e.createElement(A0,{rows:C.rows,metricKey:$?.id,manifest:p}),e.createElement("figure",{"data-os-loc":"src/field/SequenceMetrics.jsx:49:3",className:"os-metric-figure","data-review-id":"sequence-metric-"+($?.id||g)},e.createElement("figcaption",{"data-os-loc":"src/field/SequenceMetrics.jsx:49:98"},h($?.label)||h("Metric curve")),e.createElement("svg",{"data-os-loc":"src/field/SequenceMetrics.jsx:49:164",width:"100%",height:"220",viewBox:`0 0 ${F} 220`,role:"img","aria-label":`${$?.label} over frames; ${h($?.unit)}`},[Z.min,(Z.min+Z.max)/2,Z.max].map((P,z)=>e.createElement("g",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:58",key:z},e.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:69",x1:"64",x2:F-22,y1:Z.y(P),y2:Z.y(P),stroke:"#d7e1eb",strokeWidth:".75"}),e.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:163",x:"57",y:Z.y(P)+4,textAnchor:"end"},Fe(P)))),Number.isFinite(G?.mean)&&e.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:51:39",x1:"64",x2:F-22,y1:Z.y(G.mean),y2:Z.y(G.mean),stroke:"#7a8797",strokeDasharray:"5 4"}),Z.segments.map((P,z)=>e.createElement("polyline",{"data-os-loc":"src/field/SequenceMetrics.jsx:52:36",key:z,points:P.map(L=>`${L.x},${L.y}`).join(" "),fill:"none",stroke:"#008c9c",strokeWidth:"2"})),Z.points.map(P=>e.createElement(B0,{key:P.frame,point:P,row:V.get(P.frame),selected:P.frame===o,onFrame:r,language:d})),Number.isFinite(o)&&e.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:54:36",x1:Z.x(o),x2:Z.x(o),y1:"25",y2:"185",stroke:"#d36218",strokeDasharray:"3 3"}),e.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:4",x:"64",y:"205"},Z.start),Z.end!==Z.start&&e.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:68",x:F-22,y:"205",textAnchor:"end"},Z.end),e.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:130",x:F/2,y:"205",textAnchor:"middle"},h("Frame")))),e.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:57:3"},d==="zh"?"颜色：训练橙 / 验证紫 / 测试青 / 未划分灰。形状：Anchor 方形 / 插值菱形 / 外推三角 / 未声明圆点。橙圈为当前帧，灰虚线为均值；缺失值不连线。":"Color: Train amber / Validation purple / Test teal / Unassigned gray. Shape: Anchor square / Interpolation diamond / Future extrapolation triangle / Undeclared circle. Orange ring: displayed frame; gray dashed line: mean. Missing values are not connected."),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:58:3",className:"sequence-detail-tables"},e.createElement("h3",{"data-os-loc":"src/field/SequenceMetrics.jsx:58:43"},g==="elevation"?d==="zh"?"水面高度":"Elevation":h(g==="sdf"?"SDF":"Velocity"),h(" sequence summary")),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:59:3"},d==="zh"?"中位数、P95 和总体标准差描述所选帧的分布，不代表统计显著性。":"Median, P95 and population standard deviation describe selected frames, not statistical significance."),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:3",className:"sequence-table-scroll",tabIndex:"0",role:"region","aria-label":h("Scrollable sequence summary")},e.createElement("table",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:116","aria-label":h("Sequence metric summary")},e.createElement("thead",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:166"},e.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:173"},["Metric","Unit","Mean",d==="zh"?"中位数":"Median","P95",d==="zh"?"总体标准差":"Population std. dev.","Minimum","Maximum","Valid / total","Excluded"].map(P=>e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:341",key:P},h(P))))),e.createElement("tbody",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:380"},M.map(P=>e.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:405",key:P.id},e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:420",scope:"row"},h(P.label)),e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:454"},h(P.unit)),[P.mean,P.median,P.p95,P.stddev,P.minimum,P.maximum].map((z,L)=>e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:540",key:L,title:z==null?"N/A":String(z)},Fe(z))),e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:608"},P.valid," / ",P.total),e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:638"},P.excluded)))))),e.createElement("h3",{"data-os-loc":"src/field/SequenceMetrics.jsx:61:3"},g==="elevation"?d==="zh"?"水面高度":"Elevation":h(g==="sdf"?"SDF":"Velocity"),h(" per-frame values")),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:3",className:"sequence-toolbar"},e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:37","data-os-action":"",disabled:O===0,onClick:()=>N(O-1)},h("Previous rows")),e.createElement("span",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:135"},h("Page "),O+1," / ",K,h(" · 50 frames per page")),e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:217","data-os-action":"",disabled:O+1>=K,onClick:()=>N(O+1)},h("Next rows")),e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:320","data-os-action":"",onClick:()=>{const P=C.rows.findIndex(z=>z.frame===o);P>=0&&N(Math.floor(P/50))}},h("Show current row"))),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:3",className:"sequence-table-scroll",tabIndex:"0",role:"region","aria-label":h("Scrollable per-frame metrics")},e.createElement("table",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:117","aria-label":h("Per-frame metric values")},e.createElement("thead",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:167"},e.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:174"},e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:178"},h("Frame")),e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:200"},d==="zh"?"所属集合":"Split"),B.map(P=>e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:257",key:P.id},h(P.label),e.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:285"},P.unit))))),e.createElement("tbody",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:328"},J.map(P=>e.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:352",key:P.frame,className:P.frame===o?"selected-frame":""},e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:425",scope:"row"},e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:441","data-os-action":"","aria-label":`Go to frame ${P.frame}`,"aria-current":P.frame===o?"true":void 0,disabled:!P.available,onClick:()=>r(P.frame)},P.frame),!P.calculated&&e.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:631"},h("Not calculated"))),e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:674"},e.createElement(Ac,{manifest:p,frame:P.frame})),B.map(z=>e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:755",key:z.id,title:P.values[z.id]==null?"N/A":String(P.values[z.id])},Fe(P.values[z.id])))))))),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:3",className:"sequence-toolbar"},e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:37","data-os-action":"",disabled:!n||!C.total,onClick:()=>f(`${l}_${u}_frames.csv`,Ks(C,"frames"))},u==="all"?h("Export all frames CSV"):d==="zh"?"导出当前集合 CSV":"Export subset CSV"),e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:274","data-os-action":"",disabled:!n||!C.total,onClick:()=>f(`${l}_${u}_sequence_summary.csv`,Ks(C,"summary"))},h("Export sequence summary CSV")),e.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:464"},d==="zh"?`两个场组 · 当前集合 ${u} 的所有帧（不限本页） · 完整精度`:`Both field groups · all ${u} frames (not only this page) · full numeric precision`))))}function F0({group:n="sdf"}){const{tr:a}=ue();function t(){const s=URL.createObjectURL(new Blob([JSON.stringify(h0(),null,2)],{type:"application/json"})),c=document.createElement("a");c.href=s,c.download="OceanScope_metric_definitions.json",c.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}return e.createElement("details",{"data-os-loc":"src/field/LossDefinitions.jsx:7:10",className:"loss-definitions"},e.createElement("summary",{"data-os-loc":"src/field/LossDefinitions.jsx:7:48"},a("Evaluation Metrics / Loss Definitions")),e.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:112"},a("g = Ground Truth; p = Prediction. Evaluation metrics, not a weighted training loss.")),e.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:210"},a("Display quality never changes numerical metrics. Units follow dataset declarations; declaring units does not convert data.")),Ut.filter(s=>s.group===n||s.group==="both"&&n!=="elevation").map(s=>e.createElement("article",{"data-os-loc":"src/field/LossDefinitions.jsx:7:442",key:s.id},e.createElement("strong",{"data-os-loc":"src/field/LossDefinitions.jsx:7:462"},a(s.label)),e.createElement("code",{"data-os-loc":"src/field/LossDefinitions.jsx:7:492"},s.formula),e.createElement("small",{"data-os-loc":"src/field/LossDefinitions.jsx:7:516"},a(s.direction),a(" is better"),s.direction==="Context"?a(" (interpret with error)"):""," · ",a(s.unitKind)),e.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:643"},a(s.domain)," ",a(s.caveats)))),e.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:692"},a("Sequence statistics give equal weight to each valid frame, not each voxel. Missing values are excluded; valid/excluded frame counts are reported.")),e.createElement("button",{"data-os-loc":"src/field/LossDefinitions.jsx:7:852","data-os-action":"",onClick:t},a("Export metric definitions")))}function O0({lattice:n,comparison:a}){const{tr:t}=ue();return e.createElement("details",{"data-os-loc":"src/field/AlignmentReport.jsx:7:10",className:"alignment-report"},e.createElement("summary",{"data-os-loc":"src/field/AlignmentReport.jsx:7:48"},t("Alignment and provenance")),e.createElement("dl",{"data-os-loc":"src/field/AlignmentReport.jsx:7:99"},e.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:103"},e.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:108"},t("Comparison")),e.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:135"},a?.id||"—")),e.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:171"},e.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:176"},t("Canonical lattice")),e.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:210"},n?.dimensions?.join(" × ")||"—",t(" voxels"))),e.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:279"},e.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:284"},t("Voxel size")),e.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:311"},n?.voxelSize?.map(s=>Number(s).toPrecision(4)).join(" × ")||"—")),e.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:405"},e.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:410"},t("Policy")),e.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:433"},t("Prediction sampled in world space onto Ground Truth voxel centres.")))))}function D0(n){return`${n.labels?.prediction?.exportStem||"prediction"}_${n.runId||n.id}`.replace(/[<>:"/\\|?*\x00-\x1f]/g,"_").slice(0,125)}function W0({frame:n,lattice:a,settings:t,plane:s,sliceIndex:c,angle:i=30,sectionPercent:o=50,rotationAxis:r="y"}){const f=_=>({status:"unavailable",reason:_});if(s==="oblique"&&r!=="y")return f("tilted");if(t?.previewOnly)return f("single");if(["gt","prediction"].some(_=>t?.sdf?.[_]?.semantics!=="full"))return f("semantics");const l=t?.heightComparison;if(l?.surfaceValidated!==!0||l?.negativeInside!==!0||l?.upAxis!=="Y"||l?.coordinateUnit!=="m"||l?.frameTimeAligned!==!0)return f("declaration");if(["gt","prediction"].some(_=>t.sdf[_].unit!=="m"))return f("units");if(!["xy","yz","oblique"].includes(s))return f("plane");const m=a?.dimensions,y=a?.axisSteps,x=a?.origin;if(!m||m.length!==3||m.some(_=>!Number.isInteger(_)||_<2)||!x||x.length!==3||x.some(_=>!Number.isFinite(_))||!y||y.length!==3||y.some((_,E)=>_.length!==3||_.some((w,g)=>!Number.isFinite(w)||(E===g?w<=0:Math.abs(w)>1e-12))))return f("lattice");const p=n?.groups?.sdf?.ground_truth,h=n?.groups?.sdf?.prediction;if([p,h].some(_=>!_||!Array.isArray(_.shape)||_.shape.length!==3||_.shape.some((E,w)=>E!==m[w])||_.values?.length!==m[0]*m[1]*m[2]||_.mask&&_.mask.values?.length!==_.values.length))return f("fields");if(s==="oblique"){const _=Pc(a,i,o);if(!_)return f("lattice");const E=w=>_.degenerate?[]:Array.from({length:_.width},(g,C)=>{let B=null,M=null;for(let b=_.height-1;b>=0;b--){const k=yo(w,a,_.point(C,b));if(k===null||b===_.height-1&&k<=0)break;if(M!==null&&M>0&&k<=0){B=x[1]+y[1][1]*(b+-k/(M-k));break}M=k}return[_.range[0]+(_.range[1]-_.range[0])*C/(_.width-1),B]});return{status:"ready",axis:"oblique",angle:i,offset:_.offset,result:Us(E(p),E(h))}}const d=s==="xy"?2:0,u=s==="xy"?0:2;if(!Number.isInteger(c)||c<0||c>=m[d])return f("lattice");const S=(_,E,w)=>_+m[0]*(E+m[1]*w);function j(_){return Array.from({length:m[u]},(E,w)=>{const g=s==="xy"?w:c,C=s==="xy"?c:w;let B=null,M=null;for(let b=m[1]-1;b>=0;b--){const k=S(g,b,C),R=_.values[k];if(!Number.isFinite(R)||_.mask&&!_.mask.values[k]||b===m[1]-1&&R<=0)break;if(M!==null&&M>0&&R<=0){B=x[1]+y[1][1]*(b+-R/(M-R));break}M=R}return[x[u]+y[u][u]*w,B]})}return{status:"ready",axis:u===0?"x":"z",offset:x[d]+y[d][d]*c,result:Us(j(p),j(h))}}const Qs={tilted:["倾斜截面用于场值与结构分析。高度比较请切换 XY、YZ 或绕 Y 的竖直斜切。","Tilted sections show field values and structure. For height comparison use XY, YZ or a vertical Y-axis section."],semantics:["当前预测含水外填充值，不能把填值边界当作可信水面。保留原有 SDF 切片和条件性距离指标。","The prediction has a filled or undeclared exterior; filled boundaries cannot establish a trustworthy water surface. SDF slices and conditional distance scores remain available."],declaration:["还需明确水面有效性、Y 向上、米制坐标、内负外正和帧时间对齐，才能启用高度比较。","Height comparison requires explicit surface validity, Y-up metre coordinates, negative-inside signs and aligned frame times."],units:["两组 SDF 的单位需要明确为米。","Both SDF units must be declared in metres."],plane:["请选择 XY 或 YZ 竖直切面以提取高度曲线。XZ 是水平切面。","Select a vertical XY or YZ section. XZ is horizontal."],lattice:["此坐标网格尚不满足高度采样条件。","This lattice does not meet height-sampling requirements."],fields:["当前帧缺少完整、相互对应的两组 SDF。","This frame lacks complete, matching SDF fields."]};function T0({frame:n,lattice:a,comparison:t,plane:s,sliceIndex:c,angle:i=30,sectionPercent:o=50,rotationAxis:r="y",frameNumber:f,busy:l}){const{language:m}=ue(),y=m==="zh",x=v.useMemo(()=>l?null:W0({frame:n,lattice:a,settings:t.settings,plane:s,sliceIndex:c,angle:i,sectionPercent:o,rotationAxis:r}),[l,n,a,t.settings,s,c,i,o,r]);return x?.status==="ready"?e.createElement(bo,{result:x.result,axis:x.axis,kind:"sdf",labels:{a:t.labels?.gt?.displayName,b:t.labels?.prediction?.displayName},metadata:{kind:"validated_sdf_height",dataset_a:t.groundTruthId,dataset_b:t.predictionId,frame:f,...Eo(x.axis,x.offset,i),reference_y_m:0,meters_per_unit:1,sampling:s==="oblique"?"uppermost_valid_zero_crossing_trilinear_columns":"uppermost_valid_zero_crossing_linear",time_alignment:"declared_aligned"}}):e.createElement("section",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:10",className:"height-unavailable","aria-label":y?"水面高度比较适用性":"Surface-height eligibility"},e.createElement("h2",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:107"},y?"水面高度比较":"Surface-height comparison"," · ",l?y?"加载中":"Loading":y?"不可用":"Unavailable"),e.createElement("p",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:212"},l?y?"等待当前帧加载完成。":"Waiting for the current frame.":(Qs[x?.reason]||Qs.fields)[y?0:1]))}const qa=[["heightMae","Height MAE","高度 MAE","m"],["breakingMae","Breaking-region MAE","破碎区 MAE","m"],["amplitudeSlope","Amplitude slope","振幅斜率",""],["velocityRelativeL2","Underwater relative L2","水下速度相对误差",""],["velocityMedianCosine","Median direction cosine","方向余弦中位数",""]];function V0(n){const a=["frame",...qa.map(i=>i[0]),"heightRmse","heightBias","pairedColumns","gtColumns","pairedCoverage","breakingColumns","velocityVoxels","velocityGtEligibleVoxels","velocityCoverage","angularExcludedCount","heightErrorPercent","breakingErrorPercent"],t=i=>i==null?"":`"${String(i).replaceAll('"','""')}"`,s=["protocol_version","unit_convention","height_rule","velocity_rule","aggregation","status"],c=[n.version,n.units,n.height,n.velocity,n.aggregation,n.status];return[[...a,...s].map(t).join(","),...Object.entries(n.frames).map(([i,o])=>[...a.map(r=>r==="frame"?i:o[r]),...c].map(t).join(","))].join(`\r
`)}function ec(n,a=!1){let t=1/0,s=-1/0;for(const c of n)if(c)for(let i=0;i<c.values.length;i++){const o=c.values[i];!Number.isFinite(o)||c.mask&&!c.mask.values[i]||(t=Math.min(t,o),s=Math.max(s,o))}if(!Number.isFinite(t))return a?[-1,1]:[0,1];if(a){const c=Math.max(Math.abs(t),Math.abs(s),1e-8);return[-c,c]}return t===s?[t-.01,s+.01]:[t,s]}function Dc(n,a){return n&&(!n.mask||n.mask.values[a])&&Number.isFinite(n.values[a])?n.values[a]:null}function z0(n,a,t){const s=["ground_truth","prediction","error"].map(r=>n.groups.height[r]),[c,,i]=s[0].shape,o=["frame,x_m,z_m,gt_height_m,prediction_height_m,prediction_minus_gt_m,gt_valid,prediction_valid,paired_valid"];for(let r=0;r<i;r++)for(let f=0;f<c;f++){const l=f+c*r,m=s.map(y=>Dc(y,l));o.push([t,a.origin[0]+f*a.axisSteps[0][0],a.origin[2]+r*a.axisSteps[2][2],...m.map(y=>y??""),...m.map(y=>y===null?0:1)].join(","))}return o.join(`\r
`)}const Ne=(n,a=4)=>Number.isFinite(n)?n.toFixed(a):"—",nc=n=>Number.isFinite(n)?`${(100*n).toFixed(2)}%`:"—";function $0({protocol:n,frame:a,lattice:t,frameNumber:s,busy:c,onFrame:i}){const{language:o}=ue(),r=o==="zh",[f,l]=v.useState([.5,.5]);v.useEffect(()=>l([.5,.5]),[s]);const m=v.useMemo(()=>["ground_truth","prediction","error"].map(E=>a?.groups.height?.[E]),[a]),y=v.useMemo(()=>[ec(m.slice(0,2)),ec([m[2]],!0)],[m]);if(!n)return null;const x=n.frames[String(s)],p=!c&&x&&m.every(Boolean),h=m[0]?.shape[0]||1,d=m[0]?.shape[2]||1,u=Math.min(h-1,Math.floor(f[0]*h)),S=Math.min(d-1,Math.floor(f[1]*d)),j=u+h*S,_=["A · Gentle GT","B · Best_1027",r?"B − A · 高度差":"B − A · Height difference"];return e.createElement("section",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:22:10",className:"reconstruction-analysis","aria-label":r?"Best_1027 重建评估":"Best_1027 reconstruction evaluation","aria-busy":c},e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:5",className:"reconstruction-heading"},e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:45"},e.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:50",className:"reconstruction-eyebrow"},"BEST_1027 · ",r?"三帧对比":"THREE-FRAME PILOT"),e.createElement("h2",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:145"},r?"水面高度与水下速度":"Surface height & underwater velocity")),e.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:219",className:"reconstruction-frame"},r?"帧":"Frame"," ",p?s:"…")),e.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:24:5"},r?"当前结果覆盖 1001、1049、1096 三帧，采用下方明确记录的计算规则。不是完整 96 帧评分，也未划分 Test 集。长度和速度沿用 v2 的 m、m/s 模拟尺度约定。":"Frames 1001, 1049 and 1096 only, under the explicit protocol below. Not a full 96-frame or Test-set score. Length and velocity inherit the v2 m / m/s simulation convention."),p?e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:7",className:"reconstruction-cards"},qa.map(([E,w,g,C])=>e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:89",key:E},e.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:104"},r?g:w),e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:131"},Ne(x[E])," ",e.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:158"},C))))),e.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:7",className:"reconstruction-support"},r?"高度共同有效列":"Paired height columns"," ",e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:88"},x.pairedColumns.toLocaleString()," / ",x.gtColumns.toLocaleString())," (",nc(x.pairedCoverage),") · ",r?"水下速度覆盖率":"Underwater velocity coverage"," ",e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:261"},nc(x.velocityCoverage))," · ",r?"方向计算排除低速点":"Low-speed directional exclusions"," ",x.angularExcludedCount),e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:28:7",className:"reconstruction-maps"},m.map((E,w)=>e.createElement("figure",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:28:70",key:_[w],"aria-label":_[w]},e.createElement("figcaption",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:29:9"},_[w]),e.createElement(kc,{slice:{width:h,height:d,values:E.values},maskSlice:E.mask,range:y[w===2?1:0],palette:w===2?"error":"ground-truth",plane:"xz",aspect:h/d,crosshair:f,onCrosshair:l}),e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:9",className:`reconstruction-scale ${w===2?"difference":""}`},e.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:80"},Ne(y[w===2?1:0][0],3)," m"),e.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:134"},Ne(y[w===2?1:0][1],3)," m")),e.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:32:9"},r?"选点":"Probe",": ",Ne(Dc(E,j))," m")))),e.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:34:7",className:"reconstruction-caption"},"X → · Z ↑ · X [",Ne(t.origin[0],2),", ",Ne(t.origin[0]+(h-1)*t.axisSteps[0][0],2),"] m · Z [",Ne(t.origin[2],2),", ",Ne(t.origin[2]+(d-1)*t.axisSteps[2][2],2),"] m",e.createElement("br",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:34:270"}),r?"俯视图使用 0.05 m 网格；A/B 同色标，误差红色表示预测偏高，蓝色表示偏低；斜纹为无效区域。点击任一图联动选点。":"Top-down 0.05 m grid. A/B share a scale; red means prediction higher, blue lower. Hatched cells are invalid. Click a map for a shared probe."," · X=",Ne(t.origin[0]+u*t.axisSteps[0][0],3),", Z=",Ne(t.origin[2]+S*t.axisSteps[2][2],3))):e.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:25:15",role:"status"},r?"等待当前帧加载完成；不显示上一帧的指标。":"Waiting for this frame; previous-frame scores are hidden."),e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:5",className:"reconstruction-table-wrap"},e.createElement("table",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:48","aria-label":r?"三帧重建指标":"Three-frame reconstruction metrics"},e.createElement("thead",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:121"},e.createElement("tr",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:128"},e.createElement("th",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:132"},r?"帧":"Frame"),qa.map(([E,w,g,C])=>e.createElement("th",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:205",key:E},r?g:w,C&&` (${C})`)))),e.createElement("tbody",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:275"},Object.entries(n.frames).map(([E,w])=>e.createElement("tr",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:335",key:E,"aria-current":p&&Number(E)===s?"true":void 0},e.createElement("td",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:418"},e.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:422","data-os-action":"",disabled:c,onClick:()=>i(Number(E))},E)),qa.map(([g])=>e.createElement("td",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:528",key:g},Ne(w[g])))))))),e.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:5"},r?"三帧合并：振幅斜率":"Pooled pilot: amplitude slope"," ",e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:61"},Ne(n.pooled.amplitudeSlope))," · ",r?"速度相对误差":"velocity relative L2"," ",e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:162"},Ne(n.pooled.velocityRelativeL2))," · ",r?"方向余弦中位数":"median direction cosine"," ",e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:271"},Ne(n.pooled.velocityMedianCosine)),e.createElement("br",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:334"}),e.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:339"},r?"合并分子与分母后求比值；方向指标使用全部有效方向余弦的中位数，不是逐帧数值的平均。振幅斜率以 1 为匹配参考，速度相对误差越小越好，方向余弦越接近 1 越好。":"Ratios use pooled sums; direction uses the median of all eligible cosines, not frame averages. Amplitude reference: 1. Lower relative error and cosine closer to 1 are preferable.")),e.createElement("details",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:38:5",className:"reconstruction-protocol"},e.createElement("summary",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:38:50"},r?"本次计算规则与未计算项":"Evaluation protocol & unavailable metrics"),e.createElement("ul",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:39:7"},e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:39:11"},r?"高度：沿 Y 提取内负外正的线性过零位置；排除多层水面和上方缺失支撑，仅比较双方共同有效列。":n.height),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:40:7"},r?"破碎区：在共同有效高度列中选择 X > −0.3 m。当前显示绝对误差（m），R 未定义，因此不显示归一化百分比。":n.breaking+" R is undefined: absolute metres only, no normalized percentages."),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:41:7"},r?"振幅：每帧在同一共同有效区域分别去均值，再计算 Σ(h̃GT·h̃预测) / Σ(h̃GT²)。":n.amplitude),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:42:7"},r?"水下速度：从原网格索引 0 开始，每两个格点取一个，得到 0.1 m 网格；采用 GT 水面下至少 10 cm 且双方 SDF/速度都有效的区域。方向中位数排除任一速度 ≤ 10⁻⁸ m/s 的点。":n.velocity),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:43:7"},r?"右侧和下方通用场指标仍基于原生 0.05 m 网格及其共同有效域，与这里的水下筛选指标分开。":"Generic volume metrics use native 0.05 m common support, separate from the underwater protocol here."),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:44:7"},r?"沿用 v2 的米制、Y 向上和同帧配对约定；新文件本身未独立声明物理单位。读取器报告 VDB 225/224 格式兼容提示，这些是初步参考结果。":n.units+" "+n.reader),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:45:7"},r?"尚未计算：归一化高度/破碎区百分比、各波长增益、独立 M1 基线。缺失项目不以零代替。":n.unavailable.join("; ")))),e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:5",className:"reconstruction-actions"},e.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:45","data-os-action":"",onClick:()=>Ct("Best_1027_pilot_metrics.csv","\uFEFF"+V0(n),"text/csv;charset=utf-8")},r?"下载三帧指标 CSV":"Pilot metrics CSV"),e.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:229","data-os-action":"",onClick:()=>Ct("Best_1027_evaluation_protocol.json",JSON.stringify(n,null,2))},r?"下载指标与规则 JSON":"Metrics & protocol JSON"),e.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:403","data-os-action":"",disabled:!p,onClick:()=>Ct(`Best_1027_${s}_height_map.csv`,"\uFEFF"+z0(a,t,s),"text/csv;charset=utf-8")},r?"下载当前高度图 CSV":"Current height map CSV")))}const at="oceanscope.field-view.v1",Wc="oceanscope.bookmarks.v2.field",ae=n=>{throw Error(n)},Da=n=>n!==null&&typeof n=="object"&&!Array.isArray(n),Ge=(n,a=-1e9,t=1e9)=>typeof n=="number"&&Number.isFinite(n)&&n>=a&&n<=t,ac=(n,a=-1e9,t=1e9)=>Array.isArray(n)&&n.length===2&&n.every(s=>Ge(s,a,t));function Tc(n){const a=n.comparison,t=n.processing.lattice;return JSON.stringify({comparison:a.id,gt:a.groundTruthId,prediction:a.settings?.previewOnly?null:a.predictionId,groups:a.availableGroups,settings:a.settings,lattice:{dimensions:t.dimensions,origin:t.origin,axisSteps:t.axisSteps},directory:n.fieldDirectory,frames:n.processing.frames.map(s=>s.frame)})}function un(n,a){(!Da(n)||n.schema!==at)&&ae("format"),(typeof n.name!="string"||!n.name.trim()||n.name.trim().length>80)&&ae("name");const t=n.settings;Da(t)||ae("settings"),t.representation!==void 0&&t.representation!==da&&ae("settings"),t.representation===da&&t.group!=="sdf"&&ae("group"),(typeof t.caseId!="string"||!t.caseId||t.caseId.length>100||typeof n.sourceSignature!="string"||n.sourceSignature.length>1e5)&&ae("dataset"),(!Number.isInteger(t.frame)||!Ge(t.frame,0,1e7))&&ae("frame"),(!["sdf","velocity"].includes(t.group)||!["split","overlay","wire-overlay","gt","prediction"].includes(t.mode)||!["balanced","fine"].includes(t.quality)||!["magnitude","x","y","z"].includes(t.component))&&ae("settings"),(!["xy","xz","yz","oblique"].includes(t.plane)||!Number.isInteger(t.sliceIndex)||!Ge(t.sliceIndex,0,1e7)||!Ge(t.angle,0,180)||!Ge(t.sectionPercent,0,100))&&ae("section");for(const o of["showPlane","showContext","showGt","showPrediction"])typeof t[o]!="boolean"&&ae("settings");(!Ge(t.gtOpacity,.1,1)||!Ge(t.predictionOpacity,.1,1)||!Number.isInteger(t.vectorDensity)||!Ge(t.vectorDensity,1,2e4)||!Ge(t.arrowScale,.001,1e6))&&ae("settings"),t.glyphFocusIndex!==void 0&&(t.group!=="velocity"||!["split","overlay"].includes(t.mode)||!Number.isSafeInteger(t.glyphFocusIndex)||t.glyphFocusIndex<0)&&ae("settings"),t.linkedVelocityIndex!==void 0&&(!Number.isSafeInteger(t.linkedVelocityIndex)||t.linkedVelocityIndex<0||t.group!=="velocity"||!["split","overlay"].includes(t.mode)||t.plane!=="xz"||t.glyphFocusIndex!=null&&t.glyphFocusIndex!==t.linkedVelocityIndex)&&ae("probe"),t.overlayStyle!==void 0&&(t.mode!=="overlay"||t.group!=="velocity"||!["errors","angle","speed","arrows"].includes(t.overlayStyle))&&ae("settings"),t.glyphMode!==void 0&&!["direction","scaled"].includes(t.glyphMode)&&ae("settings"),t.sourceRange!==null&&(!ac(t.sourceRange)||t.sourceRange[1]<=t.sourceRange[0])&&ae("color"),(!Da(t.errorScale)||typeof t.errorScale.locked!="boolean"||!Ge(t.errorScale.limit,1e-6,1e9))&&ae("color"),ac(t.crosshair,0,1)||ae("probe"),(!Da(t.playback)||typeof t.playback.loop!="boolean"||![.25,.5,1,2].includes(t.playback.speed)||!Ge(t.playback.fps,1,120))&&ae("settings");const s=wo(t.region,2),c=t.workspace===void 0?null:Lt(t.workspace),i=So(n.camera);if((i.near===null||i.far===null)&&ae("camera"),a){const o=a.find(l=>l.id===t.caseId);o||ae("dataset"),n.sourceSignature!==Tc(o)&&ae("source"),(t.representation===da?!pa(o).includes(t.frame):!o.processing.frames.some(l=>l.frame===t.frame))&&ae("frame"),(!o.comparison.availableGroups.includes(t.group)||t.showContext&&!o.comparison.availableGroups.includes("sdf"))&&ae("group"),o.comparison.settings?.previewOnly&&(t.mode!=="gt"||t.showPrediction||s)&&ae("single");const r=o.processing.lattice,f=t.plane==="xy"||t.plane==="oblique"?2:t.plane==="yz"?0:1;t.linkedVelocityIndex!==void 0&&!f0(Ha(t.linkedVelocityIndex,r),t.plane,t.sliceIndex,t.crosshair)&&ae("probe"),t.glyphFocusIndex>=r.dimensions.reduce((l,m)=>l*m,1)&&ae("settings"),(t.sliceIndex>=r.dimensions[f]||t.plane==="oblique"&&!Ot(r))&&ae("section")}return{schema:at,name:n.name.trim(),sourceSignature:n.sourceSignature,settings:{...c?{workspace:c}:{},...t.representation?{representation:t.representation}:{},...Co(t.rotationAxis),...jo(t.shading),caseId:t.caseId,frame:t.frame,group:t.group,mode:t.mode,quality:t.quality,component:t.component,plane:t.plane,sliceIndex:t.sliceIndex,angle:t.angle,sectionPercent:t.sectionPercent,showPlane:t.showPlane,showContext:t.showContext,showGt:t.showGt,showPrediction:t.showPrediction,gtOpacity:t.gtOpacity,predictionOpacity:t.predictionOpacity,vectorDensity:t.vectorDensity,arrowScale:t.arrowScale,...t.linkedVelocityIndex!=null?{linkedVelocityIndex:t.linkedVelocityIndex}:{},...t.overlayStyle?{overlayStyle:t.overlayStyle}:{},...t.glyphMode?{glyphMode:t.glyphMode}:{},...t.glyphFocusIndex!=null?{glyphFocusIndex:t.glyphFocusIndex}:{},sourceRange:t.sourceRange?[...t.sourceRange]:null,errorScale:{locked:t.errorScale.locked,limit:t.errorScale.limit},crosshair:[...t.crosshair],...s?{region:s}:{},playback:{speed:t.playback.speed,loop:t.playback.loop,fps:t.playback.fps}},camera:i}}function X0(n,a){new TextEncoder().encode(n).length>Bo&&ae("size");let t;try{t=JSON.parse(n)}catch{ae("json")}return un(t,a)}function Z0(n){let a;try{a=n.getItem(Wc)}catch{ae("storage")}if(a===null)return[];try{const t=JSON.parse(a),s=new Set;return(t.schema!=="oceanscope.field-library.v1"||!Array.isArray(t.items)||t.items.length>Ic)&&ae("library"),t.items.map(c=>((typeof c.id!="string"||!c.id||s.has(c.id))&&ae("library"),s.add(c.id),{id:c.id,...un(c)}))}catch{ae("library")}}function G0(n,a){a.length>Ic&&ae("limit");const t=new Set,s=a.map(c=>((typeof c.id!="string"||!c.id||t.has(c.id))&&ae("library"),t.add(c.id),{id:c.id,...un(c)}));try{n.setItem(Wc,JSON.stringify({schema:"oceanscope.field-library.v1",items:s}))}catch{ae("storage")}}const tc={..._o,format:["请使用场比较方案 JSON；水面方案、指标和数据说明文件不能作为场方案导入。","Use a field-view JSON. Wave views, metrics and data-info files cannot be imported as field views."],dataset:["当前样例中找不到方案指定的数据。","The saved dataset is not available in the current samples."],source:["样例身份、网格或单位声明已改变，未应用旧方案。","Dataset identity, grid or unit declarations changed; the old view was not applied."],group:["当前样例不提供方案指定的 SDF 或速度场。","This sample does not provide the saved SDF or velocity group."],section:["切片索引或斜切参数超出当前网格范围。","The slice index or oblique settings are outside the current grid."],single:["单组 GT 方案不能包含预测显示或双组模式。","A single GT view cannot use prediction layers or paired display modes."],probe:["切片探针位置必须在 0–100% 范围内。","The slice probe must stay within 0–100%."],color:["色标范围无效；请检查上下限。","Invalid color range; check its limits."],size:["文件超过 2 MB，请选择场比较方案 JSON。","File exceeds 2 MB; select a field-view JSON."],load:["场方案恢复未完成，数据或三维视图加载失败。请检查页面提示后重试。","Field view restoration failed while loading data or 3D. Check the page message and try again."]};function H0(n,a){return tc[n.message]?.[a?0:1]||tc.load[a?0:1]}const q0=[1007,1023,1039,1057,1073,1089],Y0=[["mae_m","Height MAE","高度 MAE","m","pooled common columns"],["mae_pct","Height MAE / R","高度 MAE / R","% R","pooled common columns"],["bias_pct","Signed height bias / R","有符号高度偏差 / R","% R","pooled common columns"],["steep_pct","Steep-column MAE / R","陡坡列 MAE / R","% R","GT slope top 15%, per frame"],["calm_cells_pct","Non-steep-column MAE / R","非陡坡列 MAE / R","% R","remaining GT slope columns"],["breaking_band_pct","Breaking-band MAE / R","破浪带 MAE / R","% R","strict -0.30 < X < 1.10"],["calm_band_pct","Calm-band MAE / R","平静带 MAE / R","% R","strict -7.90 < X < -1.50"],["amplitude_slope","Amplitude slope","振幅斜率","ratio","pooled after per-frame demeaning"],["correlation","Height correlation","高度相关系数","ratio","pooled after per-frame demeaning"],["flicker_pct","Adjacent-frame error change / R","相邻帧误差变化 / R","% R","adjacent pairs, no time-step division"],["gt_range_m","Observed GT height range","观测 GT 高度范围","m","GT max minus min over all frames"],["pct_relative_to_m","Normalization reference R","归一化参考 R","m","fixed protocol parameter"]],L0=[["rel_rmse","Relative RMSE — pooled","相对 RMSE — 全体素汇总","ratio","sqrt(sum error energy / sum GT energy)"],["rel_rmse_frame_mean","Relative RMSE — frame mean","相对 RMSE — 逐帧平均","ratio","arithmetic mean of frame relative RMSE"],["cos_median","Direction cosine median","方向余弦中位数","ratio","median over all selected voxels, not mean of frame medians"],["speed_ratio","Mean speed ratio B / GT","平均速度比 B / GT","ratio","mean |B| / mean |GT|"],["vec_mae","Vector MAE","矢量 MAE","source velocity unit","mean norm of vector error"],["gt_mean_speed","GT mean speed","GT 平均速度","source velocity unit","mean norm of GT velocity"]];function Vc(n,{subset:a="all",grid:t="coarse",frame:s=n.frameIds[0]}={}){if(!["all","six"].includes(a)||!["fine","coarse"].includes(t)||!n.frameIds.includes(s))throw Error("Invalid metric selection");const c=[],i=n.frameIds,o=n.summary.height,r={runId:n.runId,protocolSha256:n.protocol.sourceScriptSha256,manifestA:n.datasetA.manifestSha256,manifestB:n.datasetB.manifestSha256};function f(d,u,S,j,_,E,w,g,C=null,B="defined by frozen protocol",M="",b=null){const k=Number.isFinite(j)&&!M;c.push({id:d,label:u,labelZh:S,value:k?j:null,unit:_,aggregation:E,scope:w,frameIds:[...g],validCount:C,countStatus:C==null?"not recorded in frozen result":"recorded",status:k?"available":"unavailable",reason:M||(k?"":"Value not recorded or nonfinite in source"),denominator:{formula:B,value:b},source:r})}for(const[d,u,S,j,_]of Y0){let E="",w=["mae_m","mae_pct","bias_pct"].includes(d)?o.cells_scored:null;o.cells_scored===0&&!["gt_range_m","pct_relative_to_m"].includes(d)&&(E="No common support"),d==="flicker_pct"&&(i.length<2||i.some((g,C)=>C>0&&g!==i[C-1]+1))&&(E="Requires consecutive adjacent frames"),f("height."+d,u,S,o[d],j,_,"sequence height: all evaluated frames",i,w,j==="% R"?"reference range R":"metric-specific support",E,j==="% R"?o.pct_relative_to_m:null)}for(const d of["gain","coherence"])for(const u of[.3,.6,1.2,2.4,4.8])f(`height.${d}.${u}`,`${d} · λ ${u} m`,`${d==="gain"?"增益":"相干度"} · λ ${u} m`,o[d]?.[String(u)],"ratio","pooled DoG band sums; common support and wider-filter weight > 0.7","sequence height: all evaluated frames",i,null,d==="gain"?"GT band energy":"GT band energy × prediction band energy",o.cells_scored===0?"No common support":"");f("footprint_iou","Wet-column footprint IoU","有水列范围 IoU",n.summary.footprint_iou,"ratio","pooled intersection / union","sequence wet columns",i,null,"wet-column union"),f("volume.iou","Water volume IoU","水体素 IoU",n.summary.volume?.iou,"ratio","pooled intersection / union","sequence water voxels (sdf < 0 and valid)",i,null,"water-voxel union"),f("volume.rec_over_gt","Water volume B / GT","水体积比 B / GT",n.summary.volume?.rec_over_gt,"ratio","pooled B volume / GT volume","sequence water voxels (sdf < 0 and valid)",i,null,"GT water-voxel count");const l=a==="all"?i:q0,m=n.summary.velocity[a==="all"?"all_frames":"velocity_net_6_frames"],y=m?.[t==="fine"?"grid_0.05m":"grid_0.1m"],x=n.rows.filter(d=>l.includes(d.frame)),p=x.map(d=>d.velocity?.[t]?.gtEnergy),h=p.length===l.length&&p.every(Number.isFinite)?p.reduce((d,u)=>d+u,0):null;for(const[d,u,S,j,_]of L0){let E=y?.voxels===0?"No valid velocity support":"";d.startsWith("rel_rmse")&&(h===0||d==="rel_rmse_frame_mean"&&p.some(w=>w===0))&&(E="Zero GT energy makes relative RMSE undefined"),(!m||JSON.stringify(m.frames)!==JSON.stringify(l))&&(E="Frame set does not match archived aggregate"),f("velocity."+d,u,S,y?.[d],j,_,`${a==="all"?"all evaluated frames":"fixed six frames (not train/test split)"}; ${t==="fine"?"native 0.05 XYZ":"XZ 2×2 average, Y unchanged (~0.10 / 0.05 / 0.10)"}`,l,y?.voxels??null,d.startsWith("rel_rmse")?"GT velocity energy":"valid velocity support",E,d==="rel_rmse"?h:null)}return c}function U0(n){const a=["id","value","status","reason","unit","scope","aggregation","frameIds","validCount","countStatus","denominator","source"],t=s=>'"'+String(s==null?"":typeof s=="object"?JSON.stringify(s):s).replaceAll('"','""')+'"';return[a.join(","),...n.map(s=>a.map(c=>t(s[c])).join(","))].join(`
`)}function J0({bundle:n,subset:a,frame:t,zh:s,onDownload:c,selectedGrid:i,onGrid:o}){const[r,f]=v.useState("coarse"),l=i??r;function m(x){f(x),o?.(x)}const y=v.useMemo(()=>Vc(n,{subset:a,grid:l,frame:t}),[n,a,l,t]);return e.createElement("details",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:7:9",className:"complete-metrics"},e.createElement("summary",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:7:47"},s?"完整指标 · 范围、网格与聚合":"Complete metrics · scope, grid and aggregation"),e.createElement("p",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:8:3"},s?"高度与体积保持全96帧；上方帧集合只切换速度汇总。固定六帧不是训练/测试划分。缺失计数表示原件未记录，不推测或补零。":"Height and volume retain all96 frames; the frame-set selector changes velocity aggregates only. Fixed six is not a train/test split. Missing counts were not recorded, never inferred or filled with zero."),e.createElement("label",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:3"},s?"速度网格":"Velocity grid"," ",e.createElement("select",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:38","data-os-action":"","aria-label":"Reference detail grid",value:l,onChange:x=>m(x.target.value)},e.createElement("option",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:132",value:"coarse"},s?"粗网格 · XZ 2×2 / Y不变":"Coarse · XZ 2×2 / unchanged Y"),e.createElement("option",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:221",value:"fine"},s?"细网格 · 原生0.05":"Fine · native0.05"))),e.createElement("div",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:3",className:"metric-table-scroll"},e.createElement("table",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:40","aria-label":"Complete protocol metrics"},e.createElement("thead",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:86"},e.createElement("tr",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:93"},(s?["指标","数值","单位","范围 / 聚合","有效计数"]:["Metric","Value","Unit","Scope / aggregation","Valid count"]).map(x=>e.createElement("th",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:206",key:x},x)))),e.createElement("tbody",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:241"},y.map(x=>e.createElement("tr",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:261",key:x.id},e.createElement("th",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:276",scope:"row"},s?x.labelZh:x.label),e.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:319"},x.value==null?"—":x.value.toPrecision(8),x.status!=="available"&&e.createElement("small",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:390"},x.reason)),e.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:421"},x.unit),e.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:438"},e.createElement("small",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:442"},x.scope,e.createElement("br",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:458"}),x.aggregation)),e.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:491"},x.validCount==null?s?"原件未记录":"Not recorded":x.validCount.toLocaleString())))))),e.createElement("p",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:11:3"},s?"速度有效域：GT vel_valid、GT sdf < −0.10、预测vel_valid；Z[11:105] / X[11:212]，粗网格须四格全有效。Breaking严格−0.30<X<1.10；calm band与非陡坡列不同。":"Velocity support: GT vel_valid, GT sdf < −0.10, prediction vel_valid; Z[11:105] / X[11:212], all four coarse cells valid. Breaking strictly −0.30<X<1.10; calm band differs from non-steep columns."),e.createElement("button",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:12:3","data-os-action":"",onClick:()=>c(`${n.runId}_${a}_${l}_complete-metrics.csv`,U0(y),"text/csv")},s?"导出完整指标 CSV":"Export complete metrics CSV"))}function K0({declarations:n,zh:a}){const t=s=>({claimed:a?"来源声明":"Source declaration",verified:a?"已核验":"Verified",unknown:a?"未知":"Unknown"})[s];return e.createElement("details",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:9",className:"complete-metrics"},e.createElement("summary",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:47"},a?"实验条件与证据来源":"Experiment conditions and evidence"),n?e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:5:3"},a?"“已核验”仅覆盖注明的原始文件身份；相机、模型、单位和测试划分仍按原始材料声明，不能等同独立训练审计。":"Verified labels cover the stated original-file identities. Camera, model, units and test split remain source declarations, not an independent training audit."),e.createElement("dl",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:3",className:"experiment-declarations"},n.entries.map(s=>e.createElement("div",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:72",key:s.id},e.createElement("dt",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:88"},a?s.labelZh:s.label," ",e.createElement("span",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:115"},t(s.status))),e.createElement("dd",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:150"},s.value==null?"—":typeof s.value=="object"?JSON.stringify(s.value):String(s.value),s.note&&e.createElement("small",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:248"},s.note.replace(/collaborator/gi,"Source")),s.source&&e.createElement("small",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:318"},s.source.file," · SHA256 ",s.source.sha256))))),e.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:7:3"},a?"直接比较要求相同GT、协议、帧集合、有效域和单位；不同相机/模型可以作为实验变量，但必须显示差异。":"Direct comparison requires the same GT, protocol, frame set, support and units. Camera/model differences may be experimental variables but must be disclosed.")):e.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:134",role:"status"},a?"声明尚未核验，不能推断实验条件。":"Declarations not yet verified; conditions cannot be inferred."))}const kt=[1007,1023,1039,1057,1073,1089],nn=n=>Number.isFinite(n)?n.toFixed(6):"—";function Q0({bundle:n,frame:a,onFrame:t,onDownload:s,reportSelection:c,onReportSelection:i,unifiedRestore:o=!1,displayGeometryFrames:r=n.geometryFrames}){const{language:f}=ue(),l=f==="zh",[m,y]=v.useState("all"),[x,p]=v.useState("height"),h=c?.subset??m,d=c?.metric??x;function u(O){y(O),i?.(J=>({...J,subset:O}))}function S(O){p(O),i?.(J=>({...J,metric:O}))}const[j,_]=v.useState(""),E=v.useRef(vc());v.useEffect(()=>(E.current.cancel(),()=>E.current.cancel()),[a,n]);const w=v.useRef(null),g=[n.datasetA.manifestSha256,n.datasetB.manifestSha256,n.protocol.sourceScriptSha256].join("/");v.useEffect(()=>{function O(J){const V=J.detail;!w.current?.getClientRects().length||V.run!==n.runId||V.protocol!==n.protocol.id||V.identity!==g||(d!==V.metric&&S(V.metric),h!==V.subset&&u(V.subset),V.scope==="frame"&&a!==V.frame&&C(V.frame),J.preventDefault())}return window.addEventListener("oceanscope-restore-curve",O),()=>window.removeEventListener("oceanscope-restore-curve",O)},[n,a,d,h,g]);function C(O){E.current.cancel(),t(O)}async function B(O){if(E.current.cancel(),!!O)try{if(O.size>1024*1024)throw Error("Result selection file too large");const J=await E.current.run(async()=>Ec(await O.text(),n));J&&(u(J.subset),S(J.metric),t(J.frame),_(l?"已恢复相同结果的帧与集合；指标仍来自已核验结果包。":"Restored frame and subset; metrics remain from the verified bundle."))}catch(J){_(J.message)}}const M=Oi(n,a??n.frameIds[0]),b={...M,geometryAvailable:r.includes(M.frame)},k=n.rows.filter(O=>h==="all"||kt.includes(O.frame)),R=n.summary.velocity[h==="all"?"all_frames":"velocity_net_6_frames"]["grid_0.1m"],N=h==="all"?l?"全96帧 · 粗网格":"All96 frames · Coarse grid":l?"固定六帧 · 粗网格":"Fixed six frames · Coarse grid",F=O=>d==="height"?O.height.mae_m*100:O.velocity.coarse.rel_rmse,T=Math.max(...k.map(F),1e-9),I=O=>42+(O-1001)/95*836,$=O=>155-O/T*125;function Z(){return{schemaVersion:1,runId:n.runId,protocol:n.protocol,datasetA:n.datasetA,datasetB:n.datasetB,frame:b.frame,selectedFrame:b.row,subset:h,metric:d,unitStatus:n.unitStatus,geometryAvailable:b.geometryAvailable,summaryScope:"height: all96; velocity: selected subset",summary:{height:n.summary.height,velocity:R},rows:k}}function K(){return["run_id,protocol_id,subset,frame,height_mae_m,height_bias_m,common_columns,coarse_rel_rmse,coarse_valid_voxels,geometry_available",...k.map(O=>[n.runId,n.protocol.id,h,O.frame,O.height.mae_m,O.height.bias_m,O.height.common,O.velocity.coarse.rel_rmse,O.velocity.coarse.voxels,r.includes(O.frame)].join(","))].join(`
`)}return e.createElement("section",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:41:9",className:"reference-evaluation","aria-label":l?"原始96帧协议结果":"Raw 96-frame protocol results"},e.createElement("header",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:3"},e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:11"},e.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:16",className:"reference-eyebrow"},"RAW VDB · 96 / 96"),e.createElement("h2",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:76"},l?"Gentle → Best_1027 · 序列评估":"Gentle → Best_1027 · Sequence evaluation")),e.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:166",className:"reference-status"},l?"原始读取已核验":"Verified raw read")),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:43:3"},l?"192个原始文件身份核验 · 0失败 · 95个相邻帧对。单位采用来源约定，尚未独立标定。":"192 source identities verified · 0 failures · 95 adjacent pairs. Units follow source convention, without independent calibration."),e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:3",className:"reference-cards"},e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:36"},e.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:41"},l?"全96帧高度 MAE":"All96 height MAE"),e.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:90"},nn(n.summary.height.mae_m*100)," ",e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:140"},"cm")),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:166"},nn(n.summary.height.mae_pct),"% R · R=1.230"),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:233"},l?"有符号偏差":"Signed bias"," ",nn(n.summary.height.bias_pct),"% R")),e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:324"},e.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:329"},l?"速度 relative RMSE · pooled":"Velocity relative RMSE · pooled"),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:408",className:"metric-scope"},N),e.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:463"},nn(R.rel_rmse)),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:507"},R.voxels.toLocaleString()," ",l?"有效粗网格点":"valid coarse voxels")),e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:598"},e.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:603"},l?"速度 relative RMSE · 逐帧均值":"Velocity relative RMSE · Frame mean"),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:684",className:"metric-scope"},N),e.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:739"},nn(R.rel_rmse_frame_mean)),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:794"},l?"XZ 0.1 / Y 0.05 · 来源单位":"XZ 0.1 / Y 0.05 · source units"))),e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:3",className:"reference-controls"},e.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:39"},l?"帧集合":"Frame set"," ",e.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:69","data-os-action":"","aria-label":"Reference frame set",value:h,onChange:O=>{E.current.cancel(),u(O.target.value)}},e.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:195",value:"all"},l?"全96帧":"All96 frames"),e.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:250",value:"six"},l?"固定六帧":"Fixed six frames"))),e.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:326"},l?"曲线":"Curve"," ",e.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:351","data-os-action":"","aria-label":"Reference metric",value:d,onChange:O=>{E.current.cancel(),S(O.target.value)}},e.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:474",value:"height"},l?"高度 MAE (cm)":"Height MAE (cm)"),e.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:542",value:"velocity"},l?"粗网格速度 relative RMSE":"Coarse velocity relative RMSE"))),e.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:651"},l?"原始帧号":"Original frame"," ",e.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:687","data-os-action":"","aria-label":"Reference frame",value:b.frame,onChange:O=>C(Number(O.target.value))},n.frameIds.map(O=>e.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:822",key:O,value:O},O,r.includes(O)?" · 3D":""))))),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:46:3",role:"status"},e.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:46:20"},l?"选定帧":"Selected frame"," ",b.frame)," ",e.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:46:83","data-os-action":"",hidden:h==="six"&&!kt.includes(b.frame),type:"button","data-os-tools":"",className:"os-frame-comment",onClick:()=>window.dispatchEvent(new CustomEvent("oceanscope-review-frame",{detail:w.current}))},l?"批注此帧":"Comment on this frame")," · ",l?"高度 MAE":"Height MAE"," ",nn(b.row.height.mae_m*100)," cm · ",l?"速度 relative RMSE":"Velocity relative RMSE"," ",nn(b.row.velocity.coarse.rel_rmse)," · ",b.geometryAvailable?l?"三维预览可用":"3D preview available":l?"该帧无三维数据；保留真实帧号与指标":"No 3D data for this frame; frame identity and metrics retained",h==="six"&&!kt.includes(b.frame)&&(l?" · 当前帧不在固定六帧集合":" · Current frame outside fixed-six subset")),!b.geometryAvailable&&e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:47:34",className:"reference-geometry-links"},l?"跳转到可用三维帧：":"Jump to available geometry: ",r.map(O=>e.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:47:153","data-os-action":"",key:O,onClick:()=>C(O)},O))),e.createElement("figure",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:48:3",className:"os-metric-figure","data-review-id":"reference-frame-metric"},e.createElement("figcaption",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:49:4"},d==="height"?l?"高度 MAE 逐帧曲线":"Height MAE by frame":l?"速度 relative RMSE 逐帧曲线":"Velocity relative RMSE by frame"),e.createElement("svg",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:4",ref:w,"data-review-curve":"reference-frame-metric","data-run":n.runId,"data-protocol":n.protocol.id,"data-identity":g,"data-subset":h,"data-metric":d,"data-frame":b.frame,"data-value":F(b.row),"data-unit":d==="height"?"cm":"1",viewBox:"0 0 920 190",role:"img","aria-label":l?"原始帧指标曲线":"Original-frame metric curve"},e.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:384",x:"8",y:"27"},nn(T)),e.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:423",x:"15",y:"159"},"0"),e.createElement("line",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:452",x1:"42",x2:"878",y1:"155",y2:"155",stroke:"#a7c4cb"}),e.createElement("polyline",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:511",points:k.map(O=>`${I(O.frame)},${$(F(O))}`).join(" "),fill:"none",stroke:"#087e8b",strokeWidth:"2"}),k.map(O=>e.createElement("circle",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:643","data-os-action":"","data-frame":O.frame,key:O.frame,cx:I(O.frame),cy:$(F(O)),r:O.frame===b.frame?5:3,fill:O.frame===b.frame?"#c45c15":"#087e8b",role:"button",tabIndex:"0","aria-label":`${l?"选择帧":"Select frame"} ${O.frame}`,onClick:()=>C(O.frame),onKeyDown:J=>{(J.key==="Enter"||J.key===" ")&&(J.preventDefault(),C(O.frame))}},e.createElement("title",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1012"},O.frame,": ",nn(F(O))))),e.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1067",x:"42",y:"180"},"1001"),e.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1099",x:"840",y:"180"},"1096"),e.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1132",x:"400",y:"180"},l?"原始帧号":"Original frame"))),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:51:3",className:"reference-scope"},l?"此处为固定协议的全局／逐帧指标。相机、显示平滑与ROI不改变这些值；同协议空间面板使用原生列高度。三维场切片与旧预览诊断保留各自计算范围。":"These are fixed-protocol global/per-frame metrics. Camera, display smoothing and ROI do not change them. The protocol spatial panel uses native height columns; volume slices and legacy diagnostics retain their own scope."),e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:52:3",className:"reference-controls"},e.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:52:39","data-os-action":"",onClick:()=>s(`${n.runId}_${h}.json`,JSON.stringify(Z(),null,2))},l?"导出结果与当前帧 JSON":"Export results and current frame JSON"),e.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:52:209","data-os-action":"",onClick:()=>s(`${n.runId}_${h}.csv`,K(),"text/csv")},l?"导出所选集合 CSV":"Export selected-set CSV")),e.createElement(J0,{bundle:n,subset:h,zh:l,onDownload:s,frame:b.frame,selectedGrid:c?.grid,onGrid:O=>i?.(J=>({...J,grid:O}))}),e.createElement(K0,{declarations:n.declarations,zh:l}),!o&&e.createElement("details",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:21"},e.createElement("summary",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:30"},l?"恢复结果选择":"Restore result selection"),e.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:89"},l?"选择本面板导出的 JSON":"Choose JSON exported from this panel"," ",e.createElement("input",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:156","data-os-action":"",type:"file",accept:"application/json,.json","aria-label":"Restore reference selection",onChange:O=>{B(O.target.files?.[0]),O.target.value=""}})),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:320",role:"status"},j)),e.createElement("details",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:3"},e.createElement("summary",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:12"},l?"数据身份、协议与有效计数":"Identity, protocol and valid counts"),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:88"},n.protocol.id," · ",n.runId),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:132"},"A: ",n.datasetA.manifestSha256,e.createElement("br",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:170"}),"B: ",n.datasetB.manifestSha256,e.createElement("br",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:210"}),l?"算法":"Algorithm",": ",n.protocol.sourceScriptSha256),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:278"},l?"当前帧共同高度列":"Current common height columns",": ",b.row.height.common," · GT ",b.row.height.gtWet," / B ",b.row.height.predictionWet,"; ",l?"速度有效点":"Valid velocity voxels",": ",b.row.velocity.coarse.voxels)))}function xa(n,a,t){const s=n.points;return s.flatMap((c,i)=>!i||i===s.length-1||c.x<a.xmin||c.x>a.xmax||c.z<a.zmin||c.z>a.zmax?[]:s.slice(i-1,i+2).every(r=>Number.isFinite(r.a)&&Number.isFinite(r.b))?s[i-1][t]<c[t]&&s[i+1][t]<c[t]?[i]:[]:[])}function Yn(n,a){if(!a||!["first","second"].includes(a.profile)||!["uncertain","paired"].includes(a.status))throw Error("Invalid crest annotation");const t=n.profiles[a.profile];for(const i of["a","b"])if(!xa(t,n.roi,i).includes(a[i]))throw Error("Invalid crest sample");const s=t.points[a.a],c=t.points[a.b];return{gt:s,pred:c,deltaHeight:c.b-s.a,deltaDistance:c.distance-s.distance}}function it(n,a){if(!n.roi||!["first","second"].includes(a?.profile))throw Error("Invalid crest profile or ROI");return a.status==="uncertain"&&a.a===null&&a.b===null?null:Yn(n,a)}function ot(n){const{shape:[a,t],originXYZ:[s,,c],spacing:i}=n.descriptor;return{xmin:s,xmax:s+(t-1)*i,zmin:c,zmax:c+(a-1)*i}}function ha(n,a,{mode:t="create"}={}){const s={...n};for(const c of["x","z"]){const i=c+"min",o=c+"max";if(!Number.isFinite(s[i])||!Number.isFinite(s[o])||s[o]<s[i])throw Error("Invalid ROI");if(t==="move"){const r=Math.min(s[o]-s[i],a[o]-a[i]);s[i]=Math.max(a[i],Math.min(a[o]-r,s[i])),s[o]=s[i]+r}else s[i]=Math.max(a[i],Math.min(a[o],s[i])),s[o]=Math.max(a[i],Math.min(a[o],s[o]))}return{roi:s,clipped:JSON.stringify(s)!==JSON.stringify(n)}}function Mt(n,{ix:a,iz:t,resourceKey:s}){const{shape:[c,i],originXYZ:[o,,r],spacing:f,frameId:l}=n.descriptor;if(!Number.isInteger(a)||!Number.isInteger(t)||a<0||a>=i||t<0||t>=c||!n.common[t*i+a])throw Error("Select a paired valid location");const m=o+a*f,y=r+t*f;return{version:1,frame:l,resourceKey:s,hotspot:{ix:a,iz:t,index:t*i+a,x:m,z:y},roi:ha({xmin:m-10*f,xmax:m+10*f,zmin:y-10*f,zmax:y+10*f},ot(n)).roi,directionDeg:0,anchorMode:"hotspot"}}function rt({anchor:n,direction:a},t){let s=-1/0,c=1/0;for(const[i,o,r,f]of[[n.x,a[0],t.xmin,t.xmax],[n.z,a[1],t.zmin,t.zmax]])if(Math.abs(o)<1e-12){if(i<r-1e-9||i>f+1e-9)return null}else{const l=(r-i)/o,m=(f-i)/o;s=Math.max(s,Math.min(l,m)),c=Math.min(c,Math.max(l,m))}return s<=c?[s,c]:null}function Dt(n,{x:a,z:t,directionDeg:s}){const c=ot(n),{shape:[i,o],originXYZ:[r,,f],spacing:l}=n.descriptor;if(![a,t,s].every(Number.isFinite)||a<c.xmin||a>c.xmax||t<c.zmin||t>c.zmax)throw Error("Profile anchor outside domain");const m=s*Math.PI/180,y=[Math.cos(m),Math.sin(m)],x={x:a,z:t},p=rt({anchor:x,direction:y},c),h=(a-r)/l,d=(t-f)/l,u=Math.abs(y[1])<1e-12&&Math.abs(d-Math.round(d))<1e-8,S=Math.abs(y[0])<1e-12&&Math.abs(h-Math.round(h))<1e-8,j=(u||S)&&Math.abs(h-Math.round(h))<1e-8&&Math.abs(d-Math.round(d))<1e-8;let _;if(j)_=Array.from({length:u?o:i},(w,g)=>((u?r:f)+g*l-(u?a:t))/(u?y[0]:y[1]));else{const w=Math.max(2,Math.ceil((p[1]-p[0])/l)+1);_=Array.from({length:w},(g,C)=>p[0]+(p[1]-p[0])*C/(w-1))}_=[..._,0].sort((w,g)=>w-g).filter((w,g,C)=>g===0||Math.abs(w-C[g-1])>1e-9);const E=_.map(w=>{const g=a+w*y[0],C=t+w*y[1],B=(g-r)/l,M=(C-f)/l;let b=null,k=null;if(j){const R=Math.round(M)*o+Math.round(B);n.common[R]&&(b=n.heightA[R],k=n.heightB[R])}else if(o>=2&&i>=2){const R=Math.max(0,Math.min(o-2,Math.floor(B))),N=Math.max(0,Math.min(i-2,Math.floor(M))),F=B-R,T=M-N,I=[N*o+R,N*o+R+1,(N+1)*o+R,(N+1)*o+R+1],$=[(1-F)*(1-T),F*(1-T),(1-F)*T,F*T];I.every(Z=>n.common[Z]&&Number.isFinite(n.heightA[Z])&&Number.isFinite(n.heightB[Z]))&&(b=I.reduce((Z,K,O)=>Z+$[O]*n.heightA[K],0),k=I.reduce((Z,K,O)=>Z+$[O]*n.heightB[K],0))}return{distance:w,x:g,z:C,a:b,b:k,difference:b===null||k===null?null:k-b}});return{anchor:x,direction:y,sampling:j?"native_columns":"bilinear_common_four",step:l,points:E}}function Ln(n,a){return{first:Dt(n,{...a.hotspot,directionDeg:a.directionDeg}),second:Dt(n,{...a.hotspot,directionDeg:a.directionDeg+90})}}function Wt(n){let a=0,t=0,s=0,c=0,i=null;for(const o of n){if(!Number.isFinite(o.error))continue;const r=o.error,f=Math.abs(r);a++,t+=r,s+=f,c+=r*r,!i||f>i.absolute?i={...o,absolute:f,signed:r,ties:1}:f===i.absolute&&i.ties++}return{samples:a,mae:a?s/a:null,bias:a?t/a:null,rmse:a?Math.sqrt(c/a):null,maximum:i}}function qn(n,a=null){if(a&&(!["xmin","xmax","zmin","zmax"].every(x=>Number.isFinite(a[x]))||a.xmin>a.xmax||a.zmin>a.zmax))throw Error("Invalid evidence ROI");const{shape:[t,s],originXYZ:[c,,i],spacing:o}=n.descriptor;let r=0,f=0,l=0;const m=[];for(let x=0;x<t;x++)for(let p=0;p<s;p++){const h=x*s+p,d=c+p*o,u=i+x*o;a&&(d<a.xmin||d>a.xmax||u<a.zmin||u>a.zmax)||(r++,f+=+!!n.wetA[h],l+=+!!n.wetB[h],n.common[h]&&m.push({index:h,ix:p,iz:x,x:d,z:u,error:n.heightB[h]-n.heightA[h]}))}const y=Wt(m);return{...y,candidates:r,validGT:f,validPrediction:l,common:y.samples,coverageCandidate:r?y.samples/r:null,coverageGT:f?y.samples/f:null,weighting:"native columns, equal area per column"}}function Tt(n,a=null){const t=a?rt(n,a):null,s=n.points.map(c=>({...c,error:c.difference}));return{full:Wt(s),roi:a?Wt(t?s.filter(c=>c.distance>=t[0]-1e-10&&c.distance<=t[1]+1e-10):[]):null,sampling:n.sampling,weighting:"sample mean; not native area or volume statistics"}}function zc(n,a,t){if(!n||n.version!==1||n.frame!==a.frameId||n.resourceKey!==JSON.stringify(a)||n.anchorMode!=="hotspot"||!Number.isFinite(n.directionDeg)||n.directionDeg<0||n.directionDeg>=180)throw Error("Invalid diagnosis identity/direction");if(n.caseNote!==void 0&&(typeof n.caseNote!="string"||n.caseNote.length>120))throw Error("Invalid case note");const s=n.hotspot,[c,i]=a.shape,o=a.spacing;if(!s||!Number.isInteger(s.ix)||!Number.isInteger(s.iz)||s.ix<0||s.ix>=i||s.iz<0||s.iz>=c||s.index!==s.iz*i+s.ix||![s.x,s.z].every(Number.isFinite)||Math.abs(s.x-(a.originXYZ[0]+s.ix*o))>1e-9||Math.abs(s.z-(a.originXYZ[2]+s.iz*o))>1e-9||!t||t.index!==s.index||Math.abs(t.x-s.x)>1e-9||Math.abs(t.z-s.z)>1e-9)throw Error("Diagnosis native point mismatch");const r=n.crest;if(r&&(!["first","second"].includes(r.profile)||!["paired","uncertain"].includes(r.status)||!(Number.isInteger(r.a)&&Number.isInteger(r.b)||r.status==="uncertain"&&r.a===null&&r.b===null)))throw Error("Invalid crest selection");return{...r?{crest:{profile:r.profile,status:r.status,a:r.a,b:r.b}}:{},...n.caseNote!==void 0?{caseNote:n.caseNote}:{},version:1,frame:n.frame,resourceKey:n.resourceKey,hotspot:{ix:s.ix,iz:s.iz,index:s.index,x:s.x,z:s.z},roi:n.roi??null,directionDeg:n.directionDeg,anchorMode:"hotspot"}}const Jt="oceanscope.protocol-report.v1",el=n=>JSON.parse(JSON.stringify(n)),sc=n=>JSON.stringify(n,(a,t)=>t&&typeof t=="object"&&!Array.isArray(t)?Object.fromEntries(Object.keys(t).sort().map(s=>[s,t[s]])):t),la=(n,a)=>sc(n)===sc(a),ga=(n,a=-1e9,t=1e9)=>typeof n=="number"&&Number.isFinite(n)&&n>=a&&n<=t;function $c(n){if(!/^[a-f0-9]{64}$/.test(n.verifiedPayloadSha256)||!/^[a-f0-9]{64}$/.test(n.declarations?.sha256))throw Error("Verified report identity unavailable");return{...Hn(n),bundleSha256:n.verifiedPayloadSha256,declarationsSha256:n.declarations.sha256}}function Xc(n,a,t,s){if(!n||n.frame!==a.frameId||!t.frameIds.includes(n.frame))throw Error("Report frame mismatch");if(!["xy","xz","yz","oblique"].includes(n.plane)||!["x","y","z"].includes(n.rotationAxis)||!ga(n.angle,0,180)||!ga(n.sectionPercent,0,100))throw Error("Invalid report section");const c=n.plane==="xy"||n.plane==="oblique"?a.shape[0]:n.plane==="yz"?a.shape[1]:s?.[0]?.processing.lattice.dimensions[1]??64;if(!Number.isInteger(n.sliceIndex)||n.sliceIndex<0||n.sliceIndex>=c)throw Error("Report slice outside lattice");const i=n.selection;if(!i||!["all","six"].includes(i.subset)||!["fine","coarse"].includes(i.grid)||!["height","velocity"].includes(i.metric))throw Error("Invalid report selection");let o=null,r=null;if(n.geometry){const l=n.geometry.settings?.representation===da;if(!s?.length||!l&&!t.geometryFrames.includes(n.frame))throw Error("Report geometry unavailable");o=un(n.geometry,s);const m=s.find(y=>y.id===o.settings.caseId);if(r=l?xc(m,n.frame,o.settings.quality):Yt(m,n.frame),!r||!la(n.geometryResource,r))throw Error("Report preview resource identity mismatch");for(const y of["frame","plane","sliceIndex","rotationAxis","angle","sectionPercent"])if(o.settings[y]!==n[y])throw Error("Report geometry/section mismatch")}const f=typeof n.geometryStatus?.reason=="string"?n.geometryStatus.reason.slice(0,500):o?"Exact-frame preview bytes verified":"No 3D evidence captured";return{frame:n.frame,plane:n.plane,sliceIndex:n.sliceIndex,rotationAxis:n.rotationAxis,angle:n.angle,sectionPercent:n.sectionPercent,selection:{subset:i.subset,grid:i.grid,metric:i.metric},geometry:o,geometryResource:r,geometryStatus:{status:o?"included":"unavailable",reason:f}}}function Ya(n){if(n==null)return null;if(!["xmin","xmax","zmin","zmax"].every(a=>ga(n[a]))||n.xmin>n.xmax||n.zmin>n.zmax)throw Error("Invalid report ROI");return Object.fromEntries(["xmin","xmax","zmin","zmax"].map(a=>[a,n[a]]))}function tt(n,a){if(n==null)return null;const[t,s]=a.shape,c=n.index;if(!Number.isInteger(c)||c<0||c>=t*s)throw Error("Invalid report probe");const i=a.originXYZ[0]+c%s*a.spacing,o=a.originXYZ[2]+Math.floor(c/s)*a.spacing;if(!ga(n.x)||!ga(n.z)||Math.abs(i-n.x)>1e-9||Math.abs(o-n.z)>1e-9)throw Error("Report probe/column mismatch");return{index:c,x:i,z:o}}function nl({bundle:n,spatial:a,view:t,roi:s=null,probe:c=null,catalog:i,diagnosis:o=null,appearance:r=null}){const f=a.descriptor,l=Xc(t,f,n,i),m=Ya(s);if(r!=null&&typeof r.absoluteError!="boolean")throw Error("Invalid report appearance");let y=r?{appearance:{absoluteError:r.absoluteError}}:{};if(o){const p=zc({...o,roi:m},f,tt(c,f));if(!a.common[p.hotspot.index])throw Error("Diagnosis hotspot is no longer jointly valid");const h=Ln(a,p);y={...p.crest&&{crestMeasurement:it({roi:m,profiles:h},p.crest)},diagnosis:p,appearance:{absoluteError:r?.absoluteError??!1},profiles:h,evidence:{frame:qn(a),roi:m?qn(a,m):null,first:Tt(h.first,m),second:Tt(h.second,m)}}}r?.workspace&&(y.appearance={...y.appearance,workspace:Lt(r.workspace)});const x=l.plane==="xy"||l.plane==="yz"||l.plane==="oblique"&&l.rotationAxis==="y"?_c(a,{plane:l.plane,index:l.sliceIndex,angle:l.angle,sectionPercent:l.sectionPercent}):null;return el({schema:Jt,...y,createdAt:new Date().toISOString(),source:$c(n),descriptor:f,view:l,roi:m,probe:tt(c,f),global:fa(a),local:m?fa(a,m):null,profile:x,metrics:Vc(n,{...l.selection,frame:l.frame}),frameMetrics:n.rows.find(p=>p.frame===l.frame),declarations:n.declarations,unitStatus:n.unitStatus,scope:"Native highest-crossing height columns; ROI/profile do not replace all96 global metrics. Units are source convention, not independently calibrated."})}function Zc(n,a,t,{catalog:s}={}){if(new TextEncoder().encode(n).length>1024*1024)throw Error("Report file too large");const c=JSON.parse(n);if(c?.schema!==Jt)throw Error("Unsupported protocol report format");if(!la(c.source,$c(a)))throw Error("Report identity mismatch");const i=t.frames.find(r=>r.frameId===c.view?.frame);if(!i||!la(c.descriptor,i))throw Error("Report resource mismatch");let o={};if(c.appearance!=null){if(typeof c.appearance.absoluteError!="boolean")throw Error("Invalid report appearance");o.appearance={absoluteError:c.appearance.absoluteError}}if(c.diagnosis!=null){const r=tt(c.probe,i),f=Ya(c.roi),l=zc(c.diagnosis,i,r);if(!la(l.roi,f))throw Error("Diagnosis ROI mismatch");if(typeof c.appearance?.absoluteError!="boolean")throw Error("Invalid diagnosis appearance");o={diagnosis:l,appearance:{absoluteError:c.appearance.absoluteError}}}if(c.appearance?.workspace){const r=Lt(c.appearance.workspace);if(!la(r.roi,Ya(c.roi)))throw Error("Workspace ROI mismatch");o.appearance={...o.appearance,workspace:r}}return{descriptor:i,...o,view:Xc(c.view,i,a,s),roi:Ya(c.roi),probe:tt(c.probe,i)}}function al(n){const a=s=>'"'+String(s==null?"":typeof s=="object"?JSON.stringify(s):s).replaceAll('"','""')+'"',t=[["kind","name","value","unit","scope","metadata"]];t.push(["source","snapshot",n.createdAt,"",n.schema,n.unitStatus]);for(const[s,c]of Object.entries(n.source))t.push(["source",s,c,"","identity",""]);t.push(["view","selection",n.view,"","current view",{roi:n.roi,probe:n.probe}],["source","declarations",n.declarations,"","claimed / verified / unknown",""]);for(const s of n.metrics)t.push(["metric",s.id,s.value,s.unit,s.scope,s]);for(const[s,c]of[["frame",n.global],["ROI",n.local]])if(c)for(const[i,o]of Object.entries(c))t.push(["spatial",i,o,i==="common"?"columns":"m",s,{frame:n.view.frame,roi:s==="ROI"?n.roi:null}]);n.diagnosis?.crest&&t.push(["crest pair",n.diagnosis.crest.status,n.crestMeasurement,"scene units","prediction minus GT along profile",n.diagnosis.crest]);for(const s of n.profile?.points??[])t.push(["profile","height A / B / difference",s,"m",n.profile.sampling,{frame:n.view.frame,plane:n.view.plane}]);if(n.diagnosis){t.push(["diagnosis","selection",n.diagnosis,"","native hotspot / current ROI",n.appearance]);for(const[s,c]of Object.entries(n.evidence))c&&t.push(["diagnostic evidence",s,c,"m; coverage fractions","explicit native or profile sample weighting",c.weighting??""]);for(const[s,c]of Object.entries(n.profiles))for(const i of c.points)t.push(["paired profile",s,i,"m",c.sampling,{frame:n.view.frame,anchor:c.anchor,direction:c.direction,roi:n.roi}])}return t.map(s=>s.map(a).join(",")).join(`
`)}function tl(n,a){return lt({stem:`${n.source.runId}_${n.view.frame}_protocol-report`,record:n,csv:al(n),previewUrl:a})}function lt({stem:n,record:a,csv:t,previewUrl:s}){const c=[],i=o=>{const r=URL.createObjectURL(o);return c.push(r),r};try{const o={csv:{name:n+".csv",mime:"text/csv",content:t},json:{name:n+".json",mime:"application/json",content:JSON.stringify(a,null,2)}};if(s){if(!s.startsWith("data:image/png;base64,"))throw Error("PNG encoding failed");const r=Uint8Array.from(atob(s.slice(s.indexOf(",")+1)),l=>l.charCodeAt(0)),f=new Blob([r],{type:"image/png"});o.png={name:n+".png",mime:"image/png",blob:f,href:i(f)}}for(const r of["csv","json"]){const f=o[r];f.blob=new Blob([f.content],{type:f.mime+";charset=utf-8"}),f.href=i(f.blob)}return o}catch(o){for(const r of c)URL.revokeObjectURL(r);throw o}}const sl=JSON.parse('{"surface":{"schema":"oceanscope.protocol-report.v1","source":{"runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d","bundleSha256":"539734f929b2d3d4a53adb2563bc9598e1cc8efcd33439f8a39db052bafb28bd","declarationsSha256":"1d6bf2602f814aaf224c6bf570a8872405d7274bf4c6a9f063bab44d60aeaeec"},"descriptor":{"schemaVersion":1,"kind":"protocol-spatial-frame","runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d","frameId":1049,"shape":[128,224],"axisOrder":"ZX","originXYZ":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],"spacing":0.049999999148505836,"resources":{"heightA":{"file":"1049-heightA.bin","dtype":"float64-le","bytes":229376,"sha256":"24c95d7cdfa22d12d1baa44f16647a69b44fde83a51177b9c999d4111f751d9a"},"heightB":{"file":"1049-heightB.bin","dtype":"float64-le","bytes":229376,"sha256":"c8257805f4d3da79b0d2c5e336cea75c4b4bcfa66a55377dfe3da25004ad03b2"},"wetA":{"file":"1049-wetA.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"wetB":{"file":"1049-wetB.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"common":{"file":"1049-common.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"steep":{"file":"1049-steep.bin","dtype":"uint8","bytes":28672,"sha256":"2cf37c40b5fa4df751e05dfe9fe920a9a2efce396ff746978ff1e0c4f1b688db"},"calmCells":{"file":"1049-calmCells.bin","dtype":"uint8","bytes":28672,"sha256":"7cfdd3055066ff1620d4127ff4e0e4aaf6f94aeb6996731887065efac3533d22"},"breakingBand":{"file":"1049-breakingBand.bin","dtype":"uint8","bytes":28672,"sha256":"28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"},"calmBand":{"file":"1049-calmBand.bin","dtype":"uint8","bytes":28672,"sha256":"b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"}},"summary":{"common":19487,"mae_m":0.020208329793287478,"bias_m":-0.007192271702029772,"rmse_m":0.031439791153657054}},"view":{"frame":1049,"plane":"yz","sliceIndex":111,"rotationAxis":"y","angle":30,"sectionPercent":50,"selection":{"subset":"all","grid":"coarse","metric":"height"},"geometry":{"schema":"oceanscope.field-view.v1","name":"best-1027 · SDF · 1049 · YZ","sourceSignature":"{\\"comparison\\":\\"best-1027\\",\\"gt\\":\\"public-ground-truth\\",\\"prediction\\":\\"best-1027-reconstruction\\",\\"groups\\":[\\"sdf\\",\\"velocity\\"],\\"settings\\":{\\"activeGroup\\":\\"sdf\\",\\"previewOnly\\":false,\\"sdfEvaluationRegion\\":\\"full_domain\\",\\"sdf\\":{\\"gt\\":{\\"semantics\\":\\"full\\",\\"unit\\":\\"m\\",\\"validationMode\\":\\"local_pilot\\"},\\"prediction\\":{\\"semantics\\":\\"full\\",\\"unit\\":\\"m\\",\\"validationMode\\":\\"local_pilot\\"}},\\"velocity\\":{\\"gt\\":{\\"unit\\":\\"m/s\\"},\\"prediction\\":{\\"unit\\":\\"m/s\\"}},\\"heightComparison\\":{\\"surfaceValidated\\":true,\\"negativeInside\\":true,\\"upAxis\\":\\"Y\\",\\"coordinateUnit\\":\\"m\\",\\"frameTimeAligned\\":true,\\"basis\\":\\"Working pairing confirmed by user; local audited full-SDF pilot; see reconstructionEvaluation protocol.\\"}},\\"lattice\\":{\\"dimensions\\":[224,64,128],\\"origin\\":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],\\"axisSteps\\":[[0.049999999148505836,0,0],[0,0.049999999148505836,0],[0,0,0.049999999148505836]]},\\"directory\\":[{\\"group\\":\\"sdf\\",\\"name\\":\\"ground_truth\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"prediction\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"error\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"ground_truth\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"prediction\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"error\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"}],\\"frames\\":[1001,1049,1096]}","settings":{"rotationAxis":"y","shading":"original","caseId":"best-1027","frame":1049,"group":"sdf","mode":"split","quality":"balanced","component":"magnitude","plane":"yz","sliceIndex":111,"angle":30,"sectionPercent":50,"showPlane":true,"showContext":false,"showGt":true,"showPrediction":true,"gtOpacity":0.65,"predictionOpacity":0.8,"vectorDensity":2000,"arrowScale":1,"sourceRange":null,"errorScale":{"locked":false,"limit":1},"crosshair":[0.5,0.5],"playback":{"speed":1,"loop":false,"fps":24}},"camera":{"position":[8.120590815791608,9.983917335547375,14.345039351807678],"target":[-4.074999809265052,0.07499995268883719,0.6249998986189338],"up":[0,1,0],"fov":40,"zoom":1,"near":0.0006606199627135705,"far":274.66654008364844}},"geometryResource":{"frame":1049,"url":"/data/fields/best-1027/1049.ocfld.gz","packedBytes":26633403,"packedSha256":"1443fd356c49996f7b7bac3ab8d8ee9fc4b40d9a6d4a0734b2a0e6e2592c2548","decodedBytes":99523224,"decodedSha256":"ad0deb564ccd2db1fc91e4db9f711acaa8f6c231e3acca426773f8bb0cbf851a"},"geometryStatus":{"status":"included","reason":"Exact-frame preview bytes verified"}},"roi":{"xmin":-1.3499998556714843,"xmax":-0.34999987270136756,"zmin":1.44999988456928,"zmax":2.449999867539397},"probe":{"index":20336,"x":-0.8499998641864259,"z":1.9499998760543384},"diagnosis":{"caseNote":"案例A：GT局部峰附近预测偏低。检查峰高差异；邻近峰对应关系尚未独立确认。","version":1,"frame":1049,"resourceKey":"{\\"schemaVersion\\":1,\\"kind\\":\\"protocol-spatial-frame\\",\\"runId\\":\\"raw-reference-96-e81b8955734e\\",\\"protocolSha256\\":\\"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9\\",\\"manifestA\\":\\"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e\\",\\"manifestB\\":\\"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d\\",\\"frameId\\":1049,\\"shape\\":[128,224],\\"axisOrder\\":\\"ZX\\",\\"originXYZ\\":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],\\"spacing\\":0.049999999148505836,\\"resources\\":{\\"heightA\\":{\\"file\\":\\"1049-heightA.bin\\",\\"dtype\\":\\"float64-le\\",\\"bytes\\":229376,\\"sha256\\":\\"24c95d7cdfa22d12d1baa44f16647a69b44fde83a51177b9c999d4111f751d9a\\"},\\"heightB\\":{\\"file\\":\\"1049-heightB.bin\\",\\"dtype\\":\\"float64-le\\",\\"bytes\\":229376,\\"sha256\\":\\"c8257805f4d3da79b0d2c5e336cea75c4b4bcfa66a55377dfe3da25004ad03b2\\"},\\"wetA\\":{\\"file\\":\\"1049-wetA.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"wetB\\":{\\"file\\":\\"1049-wetB.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"common\\":{\\"file\\":\\"1049-common.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"steep\\":{\\"file\\":\\"1049-steep.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"2cf37c40b5fa4df751e05dfe9fe920a9a2efce396ff746978ff1e0c4f1b688db\\"},\\"calmCells\\":{\\"file\\":\\"1049-calmCells.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"7cfdd3055066ff1620d4127ff4e0e4aaf6f94aeb6996731887065efac3533d22\\"},\\"breakingBand\\":{\\"file\\":\\"1049-breakingBand.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747\\"},\\"calmBand\\":{\\"file\\":\\"1049-calmBand.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1\\"}},\\"summary\\":{\\"common\\":19487,\\"mae_m\\":0.020208329793287478,\\"bias_m\\":-0.007192271702029772,\\"rmse_m\\":0.031439791153657054}}","hotspot":{"ix":176,"iz":90,"index":20336,"x":-0.8499998641864259,"z":1.9499998760543384},"roi":{"xmin":-1.3499998556714843,"xmax":-0.34999987270136756,"zmin":1.44999988456928,"zmax":2.449999867539397},"directionDeg":0,"anchorMode":"hotspot"},"appearance":{"absoluteError":false}},"velocity":{"schema":"oceanscope.velocity-diagnosis.v1","source":{"caseId":"best-1027","codeRevision":"6941367eb0fe09eefefd34144ccd67ed9403b2d4","calculation":"native-xz-paired-v1","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","originals":{"gt":{"frame":1049,"file":"clean_fullsdf_vel.1049.vdb","bytes":11105671,"sha256":"a821ec84b9f2eecc09f234cdf05050e77e3572d6f9c3d46bce94d0a28f328df9","manifestSha256":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},"prediction":{"frame":1049,"file":"recon_fullsdf_vel.1049.vdb","bytes":10571839,"sha256":"ff18d054439135a9c39abc139aa628ca7dcb753dd46b389b86bde47747f5d4c3","manifestSha256":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},"resource":{"frame":1049,"url":"/data/velocity-raw/1049.ocfld.gz","packedBytes":15261605,"packedSha256":"913c1ddbec87d484f71905720334c90ca6ebccdad5c48a543f69eb405308e707","decodedBytes":62391416,"decodedSha256":"403ff5ea6e2afcd3129761caa6a5adf7f2699e180d1733e85774ea1a55df4ef1","roundtrip":"exact"}},"alignment":{"lattice":{"dimensions":[224,64,128],"origin":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],"axisSteps":[[0.049999999148505836,0,0],[0,0.049999999148505836,0],[0,0,0.049999999148505836]],"voxelSize":[0.049999999148505836,0.049999999148505836,0.049999999148505836]},"unitClaim":"m/s","unitEvidence":"Existing source convention only; no independent physical or time calibration.","vectorBasis":{"status":"source-convention","evidence":"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.","independentPhysicalCalibration":false}},"domain":{"id":"collaborator-native","definition":{"id":"collaborator-native","cropX":[11,212],"cropZ":[11,105],"gtSdfCutoffFloat32":-0.10000000149011612,"rule":"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"}},"plane":{"frame":1049,"axis":"xz","yIndex":28,"yWorld":-0.10000004433093324},"roi":{"xmin":-1.3499998556714843,"xmax":-0.34999987270136756,"zmin":1.44999988456928,"zmax":2.449999867539397},"probe":{"xIndex":176,"zIndex":90,"xyz":[-0.8499998641864259,-0.10000004433093324,1.9499998760543384]},"appearance":{"mode":"direction","zoom":true,"viewport":{"x":166,"z":80,"width":21,"height":21},"ranges":{"speed":[0,2.872923899598361],"vectorError":[0,2.0896808971216365],"speedDelta":[-1.750984564815481,1.750984564815481],"direction":[0,180]}},"arrows":{"enabled":true,"stride":4,"gain":1.0036370012923275,"referenceSpeed":2.8695633942267817,"referenceGridLength":2.8800000000000003},"angleThreshold":{"tau":1e-8,"unit":"m/s (source convention)","source":"legacy preview numerical epsilon"},"surfaceCase":{"frame":1049,"hotspotXZ":{"x":-0.8499998641864259,"z":1.9499998760543384},"roiXZ":{"xmin":-1.3499998556714843,"xmax":-0.34999987270136756,"zmin":1.44999988456928,"zmax":2.449999867539397},"surfaceCaseId":"raw-reference-96-e81b8955734e","caseNote":"案例A：GT局部峰附近预测偏低。检查峰高差异；邻近峰对应关系尚未独立确认。","surfaceIdentity":{"runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}}},"inputs":{"surface":"08357988a2ccd4a522f7052a244ca2f811ee2630dab791a5e1f1a5a8399f7615","velocity":"b1205b882a060f69d1e5598f2c2a30858bfb0c77e16817cae12780b05ba074e8"}}'),cl=JSON.parse('{"surface":{"schema":"oceanscope.protocol-report.v1","source":{"runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d","bundleSha256":"539734f929b2d3d4a53adb2563bc9598e1cc8efcd33439f8a39db052bafb28bd","declarationsSha256":"1d6bf2602f814aaf224c6bf570a8872405d7274bf4c6a9f063bab44d60aeaeec"},"descriptor":{"schemaVersion":1,"kind":"protocol-spatial-frame","runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d","frameId":1049,"shape":[128,224],"axisOrder":"ZX","originXYZ":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],"spacing":0.049999999148505836,"resources":{"heightA":{"file":"1049-heightA.bin","dtype":"float64-le","bytes":229376,"sha256":"24c95d7cdfa22d12d1baa44f16647a69b44fde83a51177b9c999d4111f751d9a"},"heightB":{"file":"1049-heightB.bin","dtype":"float64-le","bytes":229376,"sha256":"c8257805f4d3da79b0d2c5e336cea75c4b4bcfa66a55377dfe3da25004ad03b2"},"wetA":{"file":"1049-wetA.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"wetB":{"file":"1049-wetB.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"common":{"file":"1049-common.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"steep":{"file":"1049-steep.bin","dtype":"uint8","bytes":28672,"sha256":"2cf37c40b5fa4df751e05dfe9fe920a9a2efce396ff746978ff1e0c4f1b688db"},"calmCells":{"file":"1049-calmCells.bin","dtype":"uint8","bytes":28672,"sha256":"7cfdd3055066ff1620d4127ff4e0e4aaf6f94aeb6996731887065efac3533d22"},"breakingBand":{"file":"1049-breakingBand.bin","dtype":"uint8","bytes":28672,"sha256":"28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"},"calmBand":{"file":"1049-calmBand.bin","dtype":"uint8","bytes":28672,"sha256":"b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"}},"summary":{"common":19487,"mae_m":0.020208329793287478,"bias_m":-0.007192271702029772,"rmse_m":0.031439791153657054}},"view":{"frame":1049,"plane":"yz","sliceIndex":111,"rotationAxis":"y","angle":30,"sectionPercent":50,"selection":{"subset":"all","grid":"coarse","metric":"height"},"geometry":{"schema":"oceanscope.field-view.v1","name":"best-1027 · SDF · 1049 · YZ","sourceSignature":"{\\"comparison\\":\\"best-1027\\",\\"gt\\":\\"public-ground-truth\\",\\"prediction\\":\\"best-1027-reconstruction\\",\\"groups\\":[\\"sdf\\",\\"velocity\\"],\\"settings\\":{\\"activeGroup\\":\\"sdf\\",\\"previewOnly\\":false,\\"sdfEvaluationRegion\\":\\"full_domain\\",\\"sdf\\":{\\"gt\\":{\\"semantics\\":\\"full\\",\\"unit\\":\\"m\\",\\"validationMode\\":\\"local_pilot\\"},\\"prediction\\":{\\"semantics\\":\\"full\\",\\"unit\\":\\"m\\",\\"validationMode\\":\\"local_pilot\\"}},\\"velocity\\":{\\"gt\\":{\\"unit\\":\\"m/s\\"},\\"prediction\\":{\\"unit\\":\\"m/s\\"}},\\"heightComparison\\":{\\"surfaceValidated\\":true,\\"negativeInside\\":true,\\"upAxis\\":\\"Y\\",\\"coordinateUnit\\":\\"m\\",\\"frameTimeAligned\\":true,\\"basis\\":\\"Working pairing confirmed by user; local audited full-SDF pilot; see reconstructionEvaluation protocol.\\"}},\\"lattice\\":{\\"dimensions\\":[224,64,128],\\"origin\\":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],\\"axisSteps\\":[[0.049999999148505836,0,0],[0,0.049999999148505836,0],[0,0,0.049999999148505836]]},\\"directory\\":[{\\"group\\":\\"sdf\\",\\"name\\":\\"ground_truth\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"prediction\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"error\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"ground_truth\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"prediction\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"error\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"}],\\"frames\\":[1001,1049,1096]}","settings":{"rotationAxis":"y","shading":"original","caseId":"best-1027","frame":1049,"group":"sdf","mode":"split","quality":"balanced","component":"magnitude","plane":"yz","sliceIndex":111,"angle":30,"sectionPercent":50,"showPlane":true,"showContext":false,"showGt":true,"showPrediction":true,"gtOpacity":0.65,"predictionOpacity":0.8,"vectorDensity":2000,"arrowScale":1,"sourceRange":null,"errorScale":{"locked":false,"limit":1},"crosshair":[0.5,0.5],"playback":{"speed":1,"loop":false,"fps":24}},"camera":{"position":[8.120590815791608,9.983917335547375,14.345039351807678],"target":[-4.074999809265052,0.07499995268883719,0.6249998986189338],"up":[0,1,0],"fov":40,"zoom":1,"near":0.0006606199627135705,"far":274.66654008364844}},"geometryResource":{"frame":1049,"url":"/data/fields/best-1027/1049.ocfld.gz","packedBytes":26633403,"packedSha256":"1443fd356c49996f7b7bac3ab8d8ee9fc4b40d9a6d4a0734b2a0e6e2592c2548","decodedBytes":99523224,"decodedSha256":"ad0deb564ccd2db1fc91e4db9f711acaa8f6c231e3acca426773f8bb0cbf851a"},"geometryStatus":{"status":"included","reason":"Exact-frame preview bytes verified"}},"roi":{"xmin":-1.449999853968496,"xmax":-0.44999987099837924,"zmin":0.39999990245065753,"zmax":1.3999998854207742},"probe":{"index":15630,"x":-0.9499998624834376,"z":0.8999998939357159},"diagnosis":{"caseNote":"案例B：沿X局部窗口内，GT与预测峰顶位置不同，峰高也不同；该观察不等于纯平移误差，也不构成自动峰配对。","version":1,"frame":1049,"resourceKey":"{\\"schemaVersion\\":1,\\"kind\\":\\"protocol-spatial-frame\\",\\"runId\\":\\"raw-reference-96-e81b8955734e\\",\\"protocolSha256\\":\\"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9\\",\\"manifestA\\":\\"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e\\",\\"manifestB\\":\\"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d\\",\\"frameId\\":1049,\\"shape\\":[128,224],\\"axisOrder\\":\\"ZX\\",\\"originXYZ\\":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],\\"spacing\\":0.049999999148505836,\\"resources\\":{\\"heightA\\":{\\"file\\":\\"1049-heightA.bin\\",\\"dtype\\":\\"float64-le\\",\\"bytes\\":229376,\\"sha256\\":\\"24c95d7cdfa22d12d1baa44f16647a69b44fde83a51177b9c999d4111f751d9a\\"},\\"heightB\\":{\\"file\\":\\"1049-heightB.bin\\",\\"dtype\\":\\"float64-le\\",\\"bytes\\":229376,\\"sha256\\":\\"c8257805f4d3da79b0d2c5e336cea75c4b4bcfa66a55377dfe3da25004ad03b2\\"},\\"wetA\\":{\\"file\\":\\"1049-wetA.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"wetB\\":{\\"file\\":\\"1049-wetB.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"common\\":{\\"file\\":\\"1049-common.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"steep\\":{\\"file\\":\\"1049-steep.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"2cf37c40b5fa4df751e05dfe9fe920a9a2efce396ff746978ff1e0c4f1b688db\\"},\\"calmCells\\":{\\"file\\":\\"1049-calmCells.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"7cfdd3055066ff1620d4127ff4e0e4aaf6f94aeb6996731887065efac3533d22\\"},\\"breakingBand\\":{\\"file\\":\\"1049-breakingBand.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747\\"},\\"calmBand\\":{\\"file\\":\\"1049-calmBand.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1\\"}},\\"summary\\":{\\"common\\":19487,\\"mae_m\\":0.020208329793287478,\\"bias_m\\":-0.007192271702029772,\\"rmse_m\\":0.031439791153657054}}","hotspot":{"ix":174,"iz":69,"index":15630,"x":-0.9499998624834376,"z":0.8999998939357159},"roi":{"xmin":-1.449999853968496,"xmax":-0.44999987099837924,"zmin":0.39999990245065753,"zmax":1.3999998854207742},"directionDeg":0,"anchorMode":"hotspot"},"appearance":{"absoluteError":true}},"velocity":{"schema":"oceanscope.velocity-diagnosis.v1","source":{"caseId":"best-1027","codeRevision":"6941367eb0fe09eefefd34144ccd67ed9403b2d4","calculation":"native-xz-paired-v1","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","originals":{"gt":{"frame":1049,"file":"clean_fullsdf_vel.1049.vdb","bytes":11105671,"sha256":"a821ec84b9f2eecc09f234cdf05050e77e3572d6f9c3d46bce94d0a28f328df9","manifestSha256":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},"prediction":{"frame":1049,"file":"recon_fullsdf_vel.1049.vdb","bytes":10571839,"sha256":"ff18d054439135a9c39abc139aa628ca7dcb753dd46b389b86bde47747f5d4c3","manifestSha256":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},"resource":{"frame":1049,"url":"/data/velocity-raw/1049.ocfld.gz","packedBytes":15261605,"packedSha256":"913c1ddbec87d484f71905720334c90ca6ebccdad5c48a543f69eb405308e707","decodedBytes":62391416,"decodedSha256":"403ff5ea6e2afcd3129761caa6a5adf7f2699e180d1733e85774ea1a55df4ef1","roundtrip":"exact"}},"alignment":{"lattice":{"dimensions":[224,64,128],"origin":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],"axisSteps":[[0.049999999148505836,0,0],[0,0.049999999148505836,0],[0,0,0.049999999148505836]],"voxelSize":[0.049999999148505836,0.049999999148505836,0.049999999148505836]},"unitClaim":"m/s","unitEvidence":"Existing source convention only; no independent physical or time calibration.","vectorBasis":{"status":"source-convention","evidence":"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.","independentPhysicalCalibration":false}},"domain":{"id":"collaborator-native","definition":{"id":"collaborator-native","cropX":[11,212],"cropZ":[11,105],"gtSdfCutoffFloat32":-0.10000000149011612,"rule":"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"}},"plane":{"frame":1049,"axis":"xz","yIndex":28,"yWorld":-0.10000004433093324},"roi":{"xmin":-1.449999853968496,"xmax":-0.44999987099837924,"zmin":0.39999990245065753,"zmax":1.3999998854207742},"probe":{"xIndex":174,"zIndex":69,"xyz":[-0.9499998624834376,-0.10000004433093324,0.8999998939357159]},"appearance":{"mode":"speedDelta","zoom":true,"viewport":{"x":164,"z":59,"width":21,"height":21},"ranges":{"speed":[0,2.872923899598361],"vectorError":[0,2.0896808971216365],"speedDelta":[-1.750984564815481,1.750984564815481],"direction":[0,180]}},"arrows":{"enabled":true,"stride":4,"gain":1.0036370012923275,"referenceSpeed":2.8695633942267817,"referenceGridLength":2.8800000000000003},"angleThreshold":{"tau":0.2,"unit":"m/s (source convention)","source":"user diagnostic input"},"surfaceCase":{"frame":1049,"hotspotXZ":{"x":-0.9499998624834376,"z":0.8999998939357159},"roiXZ":{"xmin":-1.449999853968496,"xmax":-0.44999987099837924,"zmin":0.39999990245065753,"zmax":1.3999998854207742},"surfaceCaseId":"raw-reference-96-e81b8955734e","caseNote":"案例B：沿X局部窗口内，GT与预测峰顶位置不同，峰高也不同；该观察不等于纯平移误差，也不构成自动峰配对。","surfaceIdentity":{"runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}}},"inputs":{"surface":"301fb43b2c3db75b05a1b5426bd735e8bd95252b3df0c4b95cb1d9324dc2b0ec","velocity":"d9b2d13b48884f23ae57dab94fb1b3d4a1bb7bf9d422ccf4f46be7e15dbb6de5"}}'),Vt={A:sl,B:cl},ya=`{
  "schemaVersion": 1,
  "kind": "protocol-spatial-index",
  "runId": "raw-reference-96-e81b8955734e",
  "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
  "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
  "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
  "evaluationSha256": "539734f929b2d3d4a53adb2563bc9598e1cc8efcd33439f8a39db052bafb28bd",
  "unitStatus": "source convention; not independently calibrated",
  "frameIds": [
    1001,
    1002,
    1003,
    1004,
    1005,
    1006,
    1007,
    1008,
    1009,
    1010,
    1011,
    1012,
    1013,
    1014,
    1015,
    1016,
    1017,
    1018,
    1019,
    1020,
    1021,
    1022,
    1023,
    1024,
    1025,
    1026,
    1027,
    1028,
    1029,
    1030,
    1031,
    1032,
    1033,
    1034,
    1035,
    1036,
    1037,
    1038,
    1039,
    1040,
    1041,
    1042,
    1043,
    1044,
    1045,
    1046,
    1047,
    1048,
    1049,
    1050,
    1051,
    1052,
    1053,
    1054,
    1055,
    1056,
    1057,
    1058,
    1059,
    1060,
    1061,
    1062,
    1063,
    1064,
    1065,
    1066,
    1067,
    1068,
    1069,
    1070,
    1071,
    1072,
    1073,
    1074,
    1075,
    1076,
    1077,
    1078,
    1079,
    1080,
    1081,
    1082,
    1083,
    1084,
    1085,
    1086,
    1087,
    1088,
    1089,
    1090,
    1091,
    1092,
    1093,
    1094,
    1095,
    1096
  ],
  "frames": [
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1001,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1001-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "70a39b0468748503846d8da3d28ca80d9e6d654788f88118d8e1181db4903ae7"
        },
        "heightB": {
          "file": "1001-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "b7a595c1ecc21e70b4d4570065c21790bda7a03cac757f79162ed059552d805f"
        },
        "wetA": {
          "file": "1001-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "706aab10f5f1f1b80f5a1d57d8679316d3b10ebb5beac2f06915bfa3de696e56"
        },
        "wetB": {
          "file": "1001-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "590485add6b0406317bead9175f65a07469ca761c88341daa5ae9bd282331dca"
        },
        "common": {
          "file": "1001-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "590485add6b0406317bead9175f65a07469ca761c88341daa5ae9bd282331dca"
        },
        "steep": {
          "file": "1001-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "134bde163cb5ec10c6c07a9bcc07ac1f3098c129b4fbd1e0474d2ab7c01356e4"
        },
        "calmCells": {
          "file": "1001-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "efe9143e41f596fa4e5d21bca4974256b7a60aa8db0d8e74c5d90cb5a220f9f2"
        },
        "breakingBand": {
          "file": "1001-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "fd5ccff46be9256969c82e4874337f35ffc885b9dc31f9c2d6bdf18b76c1a66b"
        },
        "calmBand": {
          "file": "1001-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19397,
        "mae_m": 0.017575577444165855,
        "bias_m": -0.011671488733768099,
        "rmse_m": 0.021084835642070466
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1002,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1002-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "7d1046b5c14cb5575ec7be833636dd185c45274655e378d8fd45341aa3a8c6da"
        },
        "heightB": {
          "file": "1002-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "d4e5ae27c4f6a5a0e5da5ded0ebe01d8a1c43af3200c0ffd52cbdd2af72fc326"
        },
        "wetA": {
          "file": "1002-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "2d1f5f0214ce1c765019411c350081eed511fddba1e88b49e9c6cc522e527090"
        },
        "wetB": {
          "file": "1002-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "8b797bc0c6e48d237b7d9494c91489bcf392b350f619c22ac3523e16020a7da1"
        },
        "common": {
          "file": "1002-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "69a54c9b0a4e6ada200060a908175d783797aa17e7c4e98c245c961bc849628c"
        },
        "steep": {
          "file": "1002-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "18ef0f16cdac5c668193cad2a25a16bf27505de062ed2d36292e64fb467f5e31"
        },
        "calmCells": {
          "file": "1002-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "cbb4d6a474eb4912959a499bcf57b343fba7cecf27ef21796168e72f2d9d0394"
        },
        "breakingBand": {
          "file": "1002-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b38113892e992c3247a6e6761d6db560b44fad54cc2721df5283d717004bb186"
        },
        "calmBand": {
          "file": "1002-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19404,
        "mae_m": 0.015265024978325659,
        "bias_m": -0.010483588312601865,
        "rmse_m": 0.019097918947192673
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1003,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1003-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "313bb7c966c6187bc6fd897a6b688a15d9169b5ba7dfe430cc13713b060cfb49"
        },
        "heightB": {
          "file": "1003-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "9296a9036c7553b8ffbe2d283406987000957e644fe0fda387c6f69745e0045f"
        },
        "wetA": {
          "file": "1003-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "ccc2e03670f72606a4baeee750cde911266965d1b3a8c60a792a2753c3641122"
        },
        "wetB": {
          "file": "1003-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "9fd7466f3a82ca5ceb583d285a040a724ffb4c70ac60700ab27ed135a7f9fa4b"
        },
        "common": {
          "file": "1003-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "4b037225bfe4559596d6725e13cc20b50bbe3a16eb81f9c76b7f686afb0caf1e"
        },
        "steep": {
          "file": "1003-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "f94397a00f91ede6d631f10b8e99538a25f07d3710046e1ce366c652a7b40554"
        },
        "calmCells": {
          "file": "1003-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c32993a5b5015bccc75a1c3c11c28a753f598b6391b8d9cc773a524b442de8ef"
        },
        "breakingBand": {
          "file": "1003-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "20f2b01b4432ad48ad98c1db71f39c49c2991befbee965d8effbb47335d54ab5"
        },
        "calmBand": {
          "file": "1003-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19411,
        "mae_m": 0.01430787315911845,
        "bias_m": -0.008250215380536878,
        "rmse_m": 0.01817111397553073
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1004,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1004-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "21043973a8b08bb4292c6409f352d2020542ef356fe1494fe1ec51e599d14cee"
        },
        "heightB": {
          "file": "1004-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "f04b9afc44bbfd28441bce29c943c326996ff2702ef11e86772c09a80e35f02c"
        },
        "wetA": {
          "file": "1004-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c1588f915d253f70f62b002e80ce561d5746f485781db937fb899a724ee4216c"
        },
        "wetB": {
          "file": "1004-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "165e9f200f44457e02a0f7bfcc1f96d9b28b2bc05dce0f7f26435fa04af9264e"
        },
        "common": {
          "file": "1004-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b44a84e6d777235dd1e8d41cdc6eff1ce0c6db6e5dabce1433f8b3550e82e42a"
        },
        "steep": {
          "file": "1004-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "f9fba951132eb046f3485b9780521874987343a6265a2698b8011853b0ca5c84"
        },
        "calmCells": {
          "file": "1004-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "2e86380878600cdd19220e12ac121d543c637283ef958a8253911071f744b826"
        },
        "breakingBand": {
          "file": "1004-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "e4a0f30bea1a6485a9d5d30469a7dfc1ffebd598bdbacddaf9d50b7d2c5a582b"
        },
        "calmBand": {
          "file": "1004-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19421,
        "mae_m": 0.015075209094764586,
        "bias_m": -0.006509889090519088,
        "rmse_m": 0.018951783107014775
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1005,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1005-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "34facfa0222a670a5f0f8e02f0be6bf12159e75b351095b695805bd49f16ae04"
        },
        "heightB": {
          "file": "1005-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "35f5ed6312974834155aaf9da5ba2d539fd6a435e37dfce0f8d55c09c271946d"
        },
        "wetA": {
          "file": "1005-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "3fd5774ad76b10ff19f5f05a996a9eea322163867dd36d1400105c59d019bfb0"
        },
        "wetB": {
          "file": "1005-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "85b2d90718ae0390ecb413fe939a6996a93e89a84240cadb201781bf84b0264c"
        },
        "common": {
          "file": "1005-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c4c2a3074e53a31e1f1e34352bc6a6b695be5c29d8bf6bfdf97c314db0936e25"
        },
        "steep": {
          "file": "1005-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "104080196d2374893c55878203516f010f38863c5eaa79b2141b389df6c1ccb3"
        },
        "calmCells": {
          "file": "1005-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "26ba0908995242081f4748526ab41433324aaafaac81c7778c0ef49c4b91872b"
        },
        "breakingBand": {
          "file": "1005-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b49a46019a4c962be2d48c562864c2e1dfc2f36876678a30264c8816be649382"
        },
        "calmBand": {
          "file": "1005-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19433,
        "mae_m": 0.014473316404177278,
        "bias_m": -0.005344722364116549,
        "rmse_m": 0.01812859626018887
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1006,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1006-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "ae6ecae5256b15a64e42a36b4e0f32f343fb1ba67027d97e50abcbbf64f6bb6f"
        },
        "heightB": {
          "file": "1006-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "3f04e03373347dbccaa238b4f8738a3b5ded108da729759d1dabdd626a3233ec"
        },
        "wetA": {
          "file": "1006-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "dd66e368cc4a8d7ce9f91e40cf77385c0a7afab783f7bdfeb5e75afc74644088"
        },
        "wetB": {
          "file": "1006-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "7560a498758008568fde26d47fa7dbaccd0968696b91a5846c9ceb760bfdc422"
        },
        "common": {
          "file": "1006-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "eac83fc48b566bde6110cfb3e13ff46d68071fa0149a8b394d016e3eee3e497c"
        },
        "steep": {
          "file": "1006-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "cb5bcbfa4bca1330f6e881c9e2a4d7b6f15836647cff332fa8c35d839355d325"
        },
        "calmCells": {
          "file": "1006-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "05030e28868154ab56850f1ce0d078d7632d290ac2662d65fc63db7a3cd79baa"
        },
        "breakingBand": {
          "file": "1006-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "e0d3b5447df1a84a7288de95213fafa554c8fd620f929a0b5a467f78991f3d30"
        },
        "calmBand": {
          "file": "1006-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19445,
        "mae_m": 0.01406965260880321,
        "bias_m": -0.004804966169235956,
        "rmse_m": 0.017478868977362137
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1007,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1007-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "8b5aa4d06110fbfa22b4c3615bcb511e9e9f59c84f7d87ff502029a6720a2f1d"
        },
        "heightB": {
          "file": "1007-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "d8b36cbc2f4d158b067dd50f7c1d92a5a776e90b4cd06b8b0ba29af4fe73568a"
        },
        "wetA": {
          "file": "1007-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "507f77b22a9cf708c24edefbc1fd1ff8de84b8006c48b1eb920e436c1edf00fe"
        },
        "wetB": {
          "file": "1007-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "fd64045f423c87bb7ea5793fda036a5437fa3a22202a844642fe280f788ec731"
        },
        "common": {
          "file": "1007-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "e332c4d600b18ea3a94f8b65e5110f8979e6fcf4fd4d64d3af10427adb3a56a3"
        },
        "steep": {
          "file": "1007-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "7738cf313247526870d046ff9463ae0a2c7e2f49fe59a0d3203ffe27f7aed915"
        },
        "calmCells": {
          "file": "1007-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "30fd3ea4b794fb66224ef1c31b3cafa5819ff753e948c79e4272e335c7195c0d"
        },
        "breakingBand": {
          "file": "1007-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "dea083afaa160deb3441913672b2d76c545e7c02e03cee29f1d78c001604c551"
        },
        "calmBand": {
          "file": "1007-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19457,
        "mae_m": 0.013501435984289696,
        "bias_m": -0.004847023491234849,
        "rmse_m": 0.016760474807323816
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1008,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1008-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "aa842e4724abbd0bacefed8b70115f0f3ab3ba4b03e40dcd642fc203e9ad3d30"
        },
        "heightB": {
          "file": "1008-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "5a84ee0211329e058fe8c69f9c2be63ed41750e34edf47ab7b005e1b565179e0"
        },
        "wetA": {
          "file": "1008-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "62a8ed54a1588c0f5f0b56e87abd7a4dc1928fd39b45f6e9f5aad97eb7ddee2c"
        },
        "wetB": {
          "file": "1008-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "0dccdb41a03fbbaaf27eeacabb1d38494d68c9f997021d57761472153ed14f15"
        },
        "common": {
          "file": "1008-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "a5b6aca8e13d276f64fce0b8f43b17d682b7c36e816e1af018084fc5a26da671"
        },
        "steep": {
          "file": "1008-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "f5af2e52c3953b663f1ea3c5aaced882fc6a880cd6acf64aa559d0d5ba6d802a"
        },
        "calmCells": {
          "file": "1008-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "274782f6741623369caf6b6d4e6894e49b4637111739445523c5bb952677e107"
        },
        "breakingBand": {
          "file": "1008-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "101ca63902a119de45a16b98454113a27d172153e5b7d277ca72f74c9b355ddd"
        },
        "calmBand": {
          "file": "1008-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19450,
        "mae_m": 0.012479426718566748,
        "bias_m": -0.00517708419942615,
        "rmse_m": 0.015425888157509265
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1009,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1009-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "9e37764c8931e4134fbd9d68ebd573c1b1f88b6a3edd8f1b37a27c6ebc15342a"
        },
        "heightB": {
          "file": "1009-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "c8670de2f9be0033cbc23c00c0970effcd8c1c1db9f71d55af4b5d856611d68e"
        },
        "wetA": {
          "file": "1009-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "8430942242808fa215909435bf5096f2f72428a3dd16ab6b1db2336bc9a17a71"
        },
        "wetB": {
          "file": "1009-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "0f02d9403066e6ef82c64e323ed7103df819a845bfeb90f3f9de68646429375b"
        },
        "common": {
          "file": "1009-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "3ccae5522a6f071ebedcc4c457b019c3323e53826bac1b9501ce72d653779ac4"
        },
        "steep": {
          "file": "1009-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "4cc4986a8e841f76f96ceb214f74cf340e368d1aca4a734efd6d478a8eabef67"
        },
        "calmCells": {
          "file": "1009-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "e6cdb0c2a8c4ccbc3d801755a1349a3bf31dc3bd90bc53fde1fe64bf3bff66ac"
        },
        "breakingBand": {
          "file": "1009-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "087c84a028d997ec3efa3d8af8296f69cd016d33a3abb10fe1fc5712719d5adc"
        },
        "calmBand": {
          "file": "1009-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19449,
        "mae_m": 0.012511210945155966,
        "bias_m": -0.005276665757618755,
        "rmse_m": 0.015549382923314847
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1010,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1010-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "97e09a4e7c1dc06717f74babb8c9b1597fefe1c1990775d697ad966d59158bdc"
        },
        "heightB": {
          "file": "1010-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "9e52430270267db47d669c9d458453b26843b6ca57de9cc2aa057f61dc718322"
        },
        "wetA": {
          "file": "1010-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "7229ec7f3d1234bddc73594747fa135e21329d09d882fa48a9f3e70bc6297b20"
        },
        "wetB": {
          "file": "1010-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "12a5b42b903ffeea47eadee287c0b5d62e400fc61d12e78e7f98d7a6d5ee6f8e"
        },
        "common": {
          "file": "1010-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "612016223decacdc5e0dd7557afdc19f88b3b5e565bc346976cf8cda1f3df0c0"
        },
        "steep": {
          "file": "1010-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b7c86451938c3ab3e7c51d61e7efd12c96aa4fdc376f45a2b91554fc7551532d"
        },
        "calmCells": {
          "file": "1010-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "0bf77a6cfa5f52cb8e85c6629efbeff869f6190ee3998612abae51805cf02f37"
        },
        "breakingBand": {
          "file": "1010-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "800948c40da735790f2f70aa5ce779e29d4030f278ed9b438444147409026872"
        },
        "calmBand": {
          "file": "1010-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19449,
        "mae_m": 0.013189581866107835,
        "bias_m": -0.005006875795502986,
        "rmse_m": 0.01631979845649268
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1011,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1011-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "d5f0f5a737b016001fe8c43dcef51ecce65c6aad3c2ed962a26ba3b7b1cd9932"
        },
        "heightB": {
          "file": "1011-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "ca31b6e1950374e7402a7465f104ea76ebcece4b96900eea6023bc1a90b804c7"
        },
        "wetA": {
          "file": "1011-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "02473379d2f4d19e65785bd8af39574044e1c44f0200a3c1f67acf9ddd857875"
        },
        "wetB": {
          "file": "1011-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "e400fd5d000629a23168bb46cc8bfc3a14d88ff858ea88ab0dfbbdfb675d6f40"
        },
        "common": {
          "file": "1011-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "2340c298b1ad2afcfddee59339c60c0680db528ca7c75bb5478933378bf04ccf"
        },
        "steep": {
          "file": "1011-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "ec04267dfba1db96559470e81c7863ac7d2170ff95177fd9cd0d1a40e2e82b91"
        },
        "calmCells": {
          "file": "1011-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6ecead651c923b0da64493aa16b52f6c9bca1bd0ccf1afb0779fa2753a089c7d"
        },
        "breakingBand": {
          "file": "1011-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "8aa19e4abfc929df10da4b2c3b9dccfe4a2fb911f51981b99fb3e52b38cfd27b"
        },
        "calmBand": {
          "file": "1011-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19439,
        "mae_m": 0.013543445836742374,
        "bias_m": -0.0047246879869915475,
        "rmse_m": 0.01688377873962934
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1012,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1012-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "e0d934b263e4cc94abdd2def8e1007cbedfaf341c9c8ae5f5bc12f67afb64400"
        },
        "heightB": {
          "file": "1012-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "941dbbb99352ca93981ff61b6bc9177155ecc14bbac5fc61d4f3196257fc54c5"
        },
        "wetA": {
          "file": "1012-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "64ad46c99080d7c13ce77023d5ca8b56d72539168a6dd97511efae6188fde8dc"
        },
        "wetB": {
          "file": "1012-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "049d8bba2e6a8ce648404841775d2c34ea2a66366fac6ff870a560873ee93ccd"
        },
        "common": {
          "file": "1012-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "febd2c3873fe974197592efc2aa4aaf0e495729127397a707d9f11e97c497608"
        },
        "steep": {
          "file": "1012-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "3e9295c9fd46f76e240a247da6b9eb7d5629449feead0dca2ad9e1727bffc447"
        },
        "calmCells": {
          "file": "1012-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "7acba35804c115a8b629a749da8d805fa67c2e41e861b461ce066ee867701520"
        },
        "breakingBand": {
          "file": "1012-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "06bc541fcad468e9909ac6eba7ada6e1036262c2228564e1285e6657221a1e93"
        },
        "calmBand": {
          "file": "1012-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19422,
        "mae_m": 0.013665083071064283,
        "bias_m": -0.0044013687482118945,
        "rmse_m": 0.017082682582280333
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1013,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1013-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "c873715d99ff125e325b0759b59c359c6bdf6d4f8191f5636b97f892ccdf9378"
        },
        "heightB": {
          "file": "1013-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "6999588bc82433f1dcbe20631e4d912b392d18a5a9cb695846595d2c82eb7b60"
        },
        "wetA": {
          "file": "1013-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "90da27c3818333d6abef1d853e192cd99e807d5b3e8650596899545ed764d71f"
        },
        "wetB": {
          "file": "1013-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "74542131ffe2383c527546d7e7ad7f0b9ef6bdb0a431c53501fc3a53b355f24b"
        },
        "common": {
          "file": "1013-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "74542131ffe2383c527546d7e7ad7f0b9ef6bdb0a431c53501fc3a53b355f24b"
        },
        "steep": {
          "file": "1013-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6719e9e4cb3b16647c43d263bee8ca335d495972a9b90da3ff1fc0d0e1e6f542"
        },
        "calmCells": {
          "file": "1013-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "1233fba9db9c7ba92d6fe5b8638349f4b4bcb5a6f9536df6ad2a9f8230981b26"
        },
        "breakingBand": {
          "file": "1013-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "60c92f753eb717e2d6e87173b67d152edb8b7e916b10bbe703db57341706ae36"
        },
        "calmBand": {
          "file": "1013-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19396,
        "mae_m": 0.013699324024362221,
        "bias_m": -0.004493795918735828,
        "rmse_m": 0.017266215070882003
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1014,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1014-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "8ccdb1e04321c16e33c8474a70eb19ee416566448c6aa87f349518cc29afee70"
        },
        "heightB": {
          "file": "1014-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "f5d72cf88af8d0dc0f0d23270b13b2aa13de69940768fc1df054f6f606c0bb28"
        },
        "wetA": {
          "file": "1014-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c893771c363db7a5067ccb722dd54921e2f2dc090a4a9f9f16f2f7344639309e"
        },
        "wetB": {
          "file": "1014-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "a7af3ac5aeb5bc27783e6b832e3565034c8e80cb1d0521973460d534e54b444e"
        },
        "common": {
          "file": "1014-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "899999afeac2b802b2cc9156983ea46f8c94a684ce38716228e323370fe529e1"
        },
        "steep": {
          "file": "1014-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "057662e9d773657bdfaf08f66bc4d20e7c1fda248a95c44d1304c438f2e922d7"
        },
        "calmCells": {
          "file": "1014-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "2ed923ffe94edf870d9d77598f6c21abc77f10ae43bf1857b15ae0d99ead1d10"
        },
        "breakingBand": {
          "file": "1014-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "603183e31ec87de30c02d585ff5e3f2b699a9637bfd4f64f8556892136a5a8f6"
        },
        "calmBand": {
          "file": "1014-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19388,
        "mae_m": 0.014298737076213708,
        "bias_m": -0.004781132364129791,
        "rmse_m": 0.017904497491604384
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1015,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1015-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "ed0f3643b46aaffc385ba18c32b3fe7640cf4dab26d2d704a479126d9955a265"
        },
        "heightB": {
          "file": "1015-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "9cb52f79a3cab875ecd6a6e9445647a03da87cb958c9edd9e8e5719e6a1297bd"
        },
        "wetA": {
          "file": "1015-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "3647182b41e68adff8841e666e1a8d6772d9b47211a13ba5f101f783d52c46c5"
        },
        "wetB": {
          "file": "1015-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "e842d381992e4ce5b31cd8b19b6f40e92781d1718cf6e53fc05cc5ddffa070e5"
        },
        "common": {
          "file": "1015-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "7815a3e6e9b169ba64b2d2c334dbe138d70c98a4bc206958b6bfca9fe6ee3ce0"
        },
        "steep": {
          "file": "1015-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "5564e472cf0d25cf71b3a555b4a9479141e4a7ae77aa7ac9e0f87d267cc52fc4"
        },
        "calmCells": {
          "file": "1015-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "f005a349b0df098f651c45b7d4634ec1ec7b0b886944b27dfb4e1084503f5e20"
        },
        "breakingBand": {
          "file": "1015-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "11d9576b3884a7a30b29787bce1f857d8d1bca28bd5a5419f12bd78bcd0281cc"
        },
        "calmBand": {
          "file": "1015-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19358,
        "mae_m": 0.014672133627008114,
        "bias_m": -0.0056084151750458566,
        "rmse_m": 0.01837155467297848
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1016,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1016-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "69e5eea2f3363bdf377b4596ed75a900d3e13c7eab4cbd0fd430f4bca7239445"
        },
        "heightB": {
          "file": "1016-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "bed8a1be87da0d28f0bd3ec6442afa213b0558c6899d0b40c6b1c4e9e2629783"
        },
        "wetA": {
          "file": "1016-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "e3d95d855c7868002d8032dd7b1d406d5028781ccce1d9454b3b0ee5a6c130dc"
        },
        "wetB": {
          "file": "1016-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "7211d781f2640a356763e7f12d6d1c1f181b970b5a44775dbc46ab3222c4b029"
        },
        "common": {
          "file": "1016-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "0250ca41533269fc89d9fe59feb679ac469f19ecbdb6f4ac1952c5e8f8e1d3a4"
        },
        "steep": {
          "file": "1016-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "bf038b49a421b04cc72ae797be5a4e5ea76b65824d95c4e5aef2291d86a2f293"
        },
        "calmCells": {
          "file": "1016-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "04411c09eda92e1b74dcae946b9d61e6aef49054766aee4db0d3ac37cce8f33d"
        },
        "breakingBand": {
          "file": "1016-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "725a63086af21d4daaf26de7e5064ce4dbaffd91e52155c92c8c61959da03d9e"
        },
        "calmBand": {
          "file": "1016-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19315,
        "mae_m": 0.015099028958585644,
        "bias_m": -0.006292316707038684,
        "rmse_m": 0.018805327560744368
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1017,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1017-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "c12c2d0b57124e5b3316af5fd7499bf7e96c95f151d5d2d627f351830381e20c"
        },
        "heightB": {
          "file": "1017-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "b66477c833eff8ff10a5a253c24df45104e34df341956da9fca29709145687b6"
        },
        "wetA": {
          "file": "1017-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "ba83c2f92ad3a48c39a250cc0855bd72028d486474d98ec0b153c91ce5b74c21"
        },
        "wetB": {
          "file": "1017-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "a9feded12fc2a5d57cbccb2568dd786cf94d0604570f3a5ab8b213d82b08ec92"
        },
        "common": {
          "file": "1017-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "ed4c8574e9b84def0ef95d61081cf1c280798984fe94428a59837c977b9dfd35"
        },
        "steep": {
          "file": "1017-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "772fad7c5a6cf37f148b24f9d284e2c4d391d6397590b0d8bfe7a592b08e27b8"
        },
        "calmCells": {
          "file": "1017-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c7b0bddd9196de19761a6d535c4c728df127fbab75419e77eecd5b885556d28a"
        },
        "breakingBand": {
          "file": "1017-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "08c15265689198327e8dd1222a0e121dedee586f3569ecc75f1e2616b268233a"
        },
        "calmBand": {
          "file": "1017-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19300,
        "mae_m": 0.014085330713342926,
        "bias_m": -0.0037045990003739026,
        "rmse_m": 0.017704664209225354
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1018,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1018-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "0c8ee83728c07a53a10e9397d68fa3c61a468578179387cad5b736d0e95006af"
        },
        "heightB": {
          "file": "1018-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "f9ad81b12ff02977ede4f49dfed2ff04c5a102a5477798cc2234eb9b0d481a26"
        },
        "wetA": {
          "file": "1018-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "8eb5823347e956227bde20843a00425bffa66368795899e6e9bb46d7874b0829"
        },
        "wetB": {
          "file": "1018-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6006ee9279abec79b18341920ff6e4af03ac736cc576a9df1663fe39c37d632d"
        },
        "common": {
          "file": "1018-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "51e2c10862d8160554b53dc94aa8a92f5c713e589fa1829785da10049876ded4"
        },
        "steep": {
          "file": "1018-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "546877e6df97370c072984a32d3300906ebb583a354e37ebbc1d55ce9b8ae59c"
        },
        "calmCells": {
          "file": "1018-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "4755765bb3e183457d49d3e69d6964ed2d074fe631d69a4d6988bd20824f89af"
        },
        "breakingBand": {
          "file": "1018-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "fbacf9bd2ef51ce53d61b4beca855b76cb9ec01a1642dd4a723705faab5824b2"
        },
        "calmBand": {
          "file": "1018-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19274,
        "mae_m": 0.01327314801954506,
        "bias_m": -0.0037073747003072894,
        "rmse_m": 0.016927398910231737
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1019,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1019-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "92ff313a2c8f89efdfa1cd295fa0b7fa6da1204e7b4191bd87022c28798b4e44"
        },
        "heightB": {
          "file": "1019-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "d145bfa721ad59cd7dafc37287db7569a553440b3c13c27d20ca8eee2ce1d5fb"
        },
        "wetA": {
          "file": "1019-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "0bd320134d6dc484768e5f0b0ea557820235f6fd95f7e7bf720bab875af8c7bb"
        },
        "wetB": {
          "file": "1019-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "ec41aa30c7f8dbadcc01de90a4cdd97fa88c15b2ff7a87a7f947157063c8fd76"
        },
        "common": {
          "file": "1019-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "268d5664f99edb36094c6dcc5aa31f0809b5619ef2bcdc9a7f8e0d6630c71157"
        },
        "steep": {
          "file": "1019-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "48aa9fb2cb3afc476d6bd491df9d42377bc4186a2edbf663e422a61d24ccb153"
        },
        "calmCells": {
          "file": "1019-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "83d652b1732e5b01de6a5e0d5da15a970985da6e0cdd1e547188caa6ea83eef4"
        },
        "breakingBand": {
          "file": "1019-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c0065a0f4513519fa943dfe35236cf4d145915983942ad39385472ac488e43f6"
        },
        "calmBand": {
          "file": "1019-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19233,
        "mae_m": 0.013281195653578144,
        "bias_m": -0.003504518800121734,
        "rmse_m": 0.017455578539234462
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1020,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1020-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "f0193a1de57440dc2eb6fb7eebe690461fad5162b5b33596738ed419dab791af"
        },
        "heightB": {
          "file": "1020-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "2a72b7bfd3234cf4ba8dc413ba5f73b7a39b4f507ef20c3d71ffd3907ebd6632"
        },
        "wetA": {
          "file": "1020-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "174608401a1d52f9c03fb75c4e584a45d5903d86847e24085185522b80d63f53"
        },
        "wetB": {
          "file": "1020-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "4becdf4ab40202786449703e2758f2201ad69c2352e6effff2aed5189545a946"
        },
        "common": {
          "file": "1020-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "fb5eefdb9ab3694df69cfdcab70361b87fe69260694704c3aa0335c6c2ca6fa1"
        },
        "steep": {
          "file": "1020-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "bdfa496f1a9c0db94971de2ff2c7c6d8dbe79f8c718d46cf44438670854c4a7f"
        },
        "calmCells": {
          "file": "1020-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "48b07b5165fa0d3bddb6534eeb65e05e049d3b7ed272df237ac94369b525e73b"
        },
        "breakingBand": {
          "file": "1020-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "02c6dd6b4b03bfdeb3b933818df242d5aafa24d406f2e7bc15738caaff409576"
        },
        "calmBand": {
          "file": "1020-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19205,
        "mae_m": 0.01371146303490379,
        "bias_m": -0.0034725889260644963,
        "rmse_m": 0.01826539603970938
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1021,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1021-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "0031d59e38929c642d76fc22c7e20ceebc97148705ecbb47b4d76f7b6d66d5be"
        },
        "heightB": {
          "file": "1021-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "520c2e70681137f32d2a4501edf090e72e95188ae001c0d2326d342494ddbc2c"
        },
        "wetA": {
          "file": "1021-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "16c5dad93252ac3cec9e6756d90e208591b95a878b5cf59c240ce91e8bc9f2f1"
        },
        "wetB": {
          "file": "1021-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c40a235fd987c84ae643ae0a318d7e87b8ae111149a65489a12f72b1933d4c5f"
        },
        "common": {
          "file": "1021-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "45f59695579c7b63eaca6cfe0a55403e8f34a3c26b793059ede10ec98fef820a"
        },
        "steep": {
          "file": "1021-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "7d8e8ad9adb362de42a2eb9b1776ed6c65991f1a88801b255e8609a74e1a2e32"
        },
        "calmCells": {
          "file": "1021-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "ec94173e152b5568a47c77a571da92270877c09d4de5cebc2ca3832e128d743a"
        },
        "breakingBand": {
          "file": "1021-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "d65df339fc33f11f3732f210f677f9c4a6ce2cf103720b914bed597a68a8e63d"
        },
        "calmBand": {
          "file": "1021-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19211,
        "mae_m": 0.013530135352663739,
        "bias_m": -0.003666551351127704,
        "rmse_m": 0.018695265200490353
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1022,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1022-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "c40a7060a0971a30aaf6dbd7bb82daf4250f6f357932f85985053a56818e3b13"
        },
        "heightB": {
          "file": "1022-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "1df75b47398865184bca94a66c71837725c13629b45d68d0b34c766e8b2f9427"
        },
        "wetA": {
          "file": "1022-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "fba1f982bb2f28ef00cd88b0dd8eb6da07850231370aca80537218f670a35934"
        },
        "wetB": {
          "file": "1022-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "cf486ff031298a34b4e29a266d785e713c8bd7a70bce27ee8b6ad86b42087944"
        },
        "common": {
          "file": "1022-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "96ba0d24c3d238d9ea401cee6b76d1815bdbe161d32582d0b7dcb97818888722"
        },
        "steep": {
          "file": "1022-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "5baf51d2fdb2ef6de20cfb138d6ffd85425a2c93df0c07f5365ed30caa912399"
        },
        "calmCells": {
          "file": "1022-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "09b9fbc847407a00acebae169523531ee5cd29ed3bb86bf6abf75cd7a1cdce8f"
        },
        "breakingBand": {
          "file": "1022-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "0d7517702a429fa736175352ee8ed090e102c80d51246667c33cb280244c0bb5"
        },
        "calmBand": {
          "file": "1022-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19225,
        "mae_m": 0.013128948804570462,
        "bias_m": -0.004318664777631372,
        "rmse_m": 0.018349527650022807
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1023,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1023-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "1c07302a9594819bd76e4068319a958825db0e14abeda58c4435c8d2cc2071a5"
        },
        "heightB": {
          "file": "1023-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "a371ec302f734bc393412a9711eef4a3076defcfbc39f1ef0af84a22b8d2bc91"
        },
        "wetA": {
          "file": "1023-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "a9158e2e51816d32fdbc867670c583908e0ad9d9eb513fca284e4a97833e584c"
        },
        "wetB": {
          "file": "1023-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "d4db58cb5e310426b5ae33d8f29678d3df0165b7c5129b48b66b935e034eefed"
        },
        "common": {
          "file": "1023-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "fbe739162f113dc81e31e9bc4e59dfbe98cc774a45448542dff6fd0ddd9d5f5a"
        },
        "steep": {
          "file": "1023-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "7d2c067c93c35b4d871e3d2c70fb5aa362bdf6c673fd3834b9a25c565fdb365d"
        },
        "calmCells": {
          "file": "1023-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "23f3a0b4775c8dc5a30d6a32fba317abea101b7193a6c39ba85f238f67750242"
        },
        "breakingBand": {
          "file": "1023-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "ba799db5dbb826d61b903e9d71c80e535669e1cf3feb44081c09cde37279bfff"
        },
        "calmBand": {
          "file": "1023-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19245,
        "mae_m": 0.013388280955751702,
        "bias_m": -0.005640819589438456,
        "rmse_m": 0.019401795431452498
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1024,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1024-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "86f134c82e7762f81a2d4eeb9fa7ae793dc43fcdc1afe8b9c21e006488e5c46a"
        },
        "heightB": {
          "file": "1024-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "6635290c288ed249547b170c2c36452312650a4c8487e2dbe5700c01dd60b7db"
        },
        "wetA": {
          "file": "1024-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "5ceaaeb203ed7ab98045c4e8960adeb80fcf434d0aa16d34c139bedac084d3fc"
        },
        "wetB": {
          "file": "1024-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "d0bb12f806fd520dec8947435d0eecb6fe9393974328b73a7ce60b6121965a44"
        },
        "common": {
          "file": "1024-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "9b2f46f248a3a2401b3196c8bc945189490726a84e8162b668e65177761dbfd3"
        },
        "steep": {
          "file": "1024-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c6c0e42ede0c0f6d15f54e3ab5ee64ba7b93149b2bce1f2cade52d6ef417ff69"
        },
        "calmCells": {
          "file": "1024-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "8aaf464c2e36798dd96d73265bbd69e0f8fb0c4151fb2b34eee8a3ed8d8a5e6c"
        },
        "breakingBand": {
          "file": "1024-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "85177e1f5b25bea6fc3c3a125bbeb9b802c3f146ec835b1f0bcbb00dc35964c9"
        },
        "calmBand": {
          "file": "1024-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19280,
        "mae_m": 0.014097813560489126,
        "bias_m": -0.006711727579516129,
        "rmse_m": 0.02061530724155275
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1025,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1025-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "5476f1d537c2f2d92c814b4760bd6310816ac5eb5821a98f5d99a80317a51072"
        },
        "heightB": {
          "file": "1025-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "d6ac64bd416179bae6063e4f60414063bcf6a99500907b0c3d057f0ca60d5bad"
        },
        "wetA": {
          "file": "1025-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "f68bdc0a8e9ced1d5af14bbac368eae8178a84e5bb08b69f8806fc75d2121382"
        },
        "wetB": {
          "file": "1025-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "88c1fc9d336d9fb8afae9546cc462887c7b751ff8bbe9d08dc42bb03e904b56a"
        },
        "common": {
          "file": "1025-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b141d2caa13112141d11a21f5de2fb0b0ba7dea415d7eb3759597bb8b3e8bdc3"
        },
        "steep": {
          "file": "1025-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "4b2ef2250e1b3ae1599f30ac19941a8fc621b0fb9b07ce808374bd9f719c02fe"
        },
        "calmCells": {
          "file": "1025-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "4b0c9d7d6aa7f5e77f76395cf8cd99c54e7c9598a3b0f5513685795217933f2e"
        },
        "breakingBand": {
          "file": "1025-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "ea47c19c7329de8c46ffe40a071b2eb24dbe3d78f1a512f6d3775e937587cb41"
        },
        "calmBand": {
          "file": "1025-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19321,
        "mae_m": 0.013408311972271044,
        "bias_m": -0.007484377959492235,
        "rmse_m": 0.01977221889570703
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1026,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1026-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "39e40759986bf721f6300472584aade915901a5cf63fa922345db311c52c7b6d"
        },
        "heightB": {
          "file": "1026-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "43ce3c1067f4cb5a6f33a4ee29b7389594c4695cffe4118d1da57d547bd10321"
        },
        "wetA": {
          "file": "1026-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "15e64ebc2deda14c192ed13551b11240bd42ca3007094fc6e6d75e78c2080fbe"
        },
        "wetB": {
          "file": "1026-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "2c38d944fe2caf8f4522d2f3fe9b4abad5668e64757e4d195bd12b9937680a48"
        },
        "common": {
          "file": "1026-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c230a1c963c53f21d650a2aa40083173b29849144e3f8535ce3aa890c2b00098"
        },
        "steep": {
          "file": "1026-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "391e3e0be03e1aa9f9c34432904440b2df91d0f4ae8e8c75f185068aa10cbfe5"
        },
        "calmCells": {
          "file": "1026-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "1fc29829335e2e04f358c6176f8a4f32f743ea29d95bfb9c10f5af4efea0d34c"
        },
        "breakingBand": {
          "file": "1026-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "12bfd4a1f5b8935895d3ab59a8e2511c0e6b77be283c94a2573ded00b8326723"
        },
        "calmBand": {
          "file": "1026-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19365,
        "mae_m": 0.013362518052301398,
        "bias_m": -0.007519547545388076,
        "rmse_m": 0.019906680060316984
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1027,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1027-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "8aa95464fd411afb5dd604356c4540c09b2efd98288b6661aaf20b564729b326"
        },
        "heightB": {
          "file": "1027-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "53ea177e64bafd1fb7f2e374bff8764f4c79b24880409bd688acfebc983e648c"
        },
        "wetA": {
          "file": "1027-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "bb12eea85adb19e473dd085e9248862b53cf3f8c273a90b3eee91c27a06d4934"
        },
        "wetB": {
          "file": "1027-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4fc929bdd1c0271e18b956587d0c27e98decec1d6b09135a3c76d0b48157638"
        },
        "common": {
          "file": "1027-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "40db168309d5817012561608621a38cd03b3ff0f6924a86877bb799b2ff57dad"
        },
        "steep": {
          "file": "1027-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "a66a573bfb04424a27a116d1302f1488ed539bf44c6716ad767db17f8da98787"
        },
        "calmCells": {
          "file": "1027-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "39082fa57d29f50e32c9e4d8f626ec521d3ebf763a137426c272b3f1cf89ff2b"
        },
        "breakingBand": {
          "file": "1027-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "059dde807702f66ed01ce3f71c2c2d0b2a966123c7df47d7906bf09b2ba25831"
        },
        "calmBand": {
          "file": "1027-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19412,
        "mae_m": 0.013260702202611479,
        "bias_m": -0.0071967393633553,
        "rmse_m": 0.019706989777882142
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1028,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1028-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "5a98b99b83d9aa129cae33418dffd999e1469a64f19805505b9a70d4970a85c1"
        },
        "heightB": {
          "file": "1028-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "2a2b0284278cf3841c1ab9dc9856ef99d93b1e86e7b158d1908d10ddbfa72e20"
        },
        "wetA": {
          "file": "1028-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "bd6b7d0d8ef0df211a14e247dcb026f78a4a35088e94f5629f64a4668a33ddc7"
        },
        "wetB": {
          "file": "1028-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1028-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "bd6b7d0d8ef0df211a14e247dcb026f78a4a35088e94f5629f64a4668a33ddc7"
        },
        "steep": {
          "file": "1028-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b3d65d0568d23762a859f106b9c442b8fac1bce600597a02f223bcb593491eff"
        },
        "calmCells": {
          "file": "1028-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "57a32c8a470bc8f5aee0f698e93cb359b651d173d571d3ec52d56f1fb30e0c82"
        },
        "breakingBand": {
          "file": "1028-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "41b60f56b48d31e520e8bbbd0ed926495126c0772f53e380e69907fc8c410f9e"
        },
        "calmBand": {
          "file": "1028-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19474,
        "mae_m": 0.012868437615558465,
        "bias_m": -0.006320833167347386,
        "rmse_m": 0.019037946894320985
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1029,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1029-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "c0cb9cd9b1bc29111d34bf2585caab31b7bfd0cc2cbe5c7a1010c7bcf41f2fe6"
        },
        "heightB": {
          "file": "1029-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "e91ca6b0bdc7bd0a3e9f2188a42e27cd0f06a1304a01089148ac28c4400d2d5d"
        },
        "wetA": {
          "file": "1029-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1029-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1029-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1029-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "89ed827029db682ebfe62e17885151e89082b52f3ed2f22ae9982fffd35ad3fa"
        },
        "calmCells": {
          "file": "1029-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "32ab7a7a1bf5362b285f91f7bef7a236a0c58361d6dc6979cc1cee0b0e94d5d6"
        },
        "breakingBand": {
          "file": "1029-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1029-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.012732679903062734,
        "bias_m": -0.005511053215064915,
        "rmse_m": 0.018214058940904217
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1030,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1030-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "9c8aee6000ff762e3509e129b6420b1ef4837e4850587ffafb4147eb002b3a38"
        },
        "heightB": {
          "file": "1030-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "b1a100cf9d5db5eba98ead01ac2298e3016bca62c8c71ebdd6a2a49b0daa7a56"
        },
        "wetA": {
          "file": "1030-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1030-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1030-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1030-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "644dc1336602b8d6797ede3664943067002c2f5ed2cc667dd2b577f8ca3f5855"
        },
        "calmCells": {
          "file": "1030-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "217d0c8dad4557a0f58331e0d71e76ce27186f022dc25d3ae826fe267963dc1d"
        },
        "breakingBand": {
          "file": "1030-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1030-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.012611757700998918,
        "bias_m": -0.005274780704308507,
        "rmse_m": 0.01792013158199378
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1031,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1031-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "ba1f53ad2fb3e7bf00f79d8aa30d3e67e8c5556a95f10d40617b0a7ac589d669"
        },
        "heightB": {
          "file": "1031-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "9c9d166d97d188f5e539f970163c45259234229df572a70f9e4894a85011b00b"
        },
        "wetA": {
          "file": "1031-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1031-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1031-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1031-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "4afd342ccb372932bf70e4cf7ddc86e1dda8d88d7340d796d8bb78834dfde409"
        },
        "calmCells": {
          "file": "1031-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c82ede96339f0b3534f5b251a41f680a713af85ee4d9d10c567be8b4b45a2673"
        },
        "breakingBand": {
          "file": "1031-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1031-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.01286935517075881,
        "bias_m": -0.005401045701460822,
        "rmse_m": 0.017807312301156567
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1032,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1032-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "187fa8f0fee74ca349f15c2341de294f2c11539f7f945f1d61dfd3872d0644f4"
        },
        "heightB": {
          "file": "1032-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "e2f55e29393eb4cb4971b696dfbe2bd6748528a0b7bbcee97ebcf2e3c7545044"
        },
        "wetA": {
          "file": "1032-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "fc0e4aab2131ec9cbb06cbf735bf2293fc54d21a69bb1ec93e8f4af9ad302265"
        },
        "wetB": {
          "file": "1032-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1032-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "fc0e4aab2131ec9cbb06cbf735bf2293fc54d21a69bb1ec93e8f4af9ad302265"
        },
        "steep": {
          "file": "1032-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "21db8b315c6dc11d3629c5e84c12934f6d63eb52ba3e75ffc7ec978048b34b85"
        },
        "calmCells": {
          "file": "1032-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "73cde51a9365d52a98b0dcfba78314063d95eb6d39044f6c963557e0b0d077a8"
        },
        "breakingBand": {
          "file": "1032-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "f5ee3e74318a81d3732de40cac8457a7f188454ffcfc3eb671516cbb21965fd9"
        },
        "calmBand": {
          "file": "1032-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19480,
        "mae_m": 0.01370111146354662,
        "bias_m": -0.005625726448081161,
        "rmse_m": 0.018313891404032636
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1033,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1033-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "98d3056989923833d6e6e563b80d72c56627294bc68b0d96a7a3f0acd038f136"
        },
        "heightB": {
          "file": "1033-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "f7b27669c3ceb1a3984f6569cc463abaae2d20b89010d1bce9486d3e61fb16da"
        },
        "wetA": {
          "file": "1033-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "d2a47e8eca7ff10f0c26e2d120084cbe75dd26ebf9ed78b592e1a8ef119d7c67"
        },
        "wetB": {
          "file": "1033-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "f52eb7f9c4fa0226027dfdfca63c34ebefdee2b1ecc25d447b0c25c75839f563"
        },
        "common": {
          "file": "1033-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "3ff60b58690e8718c6941bcdf8efd28fb14c2a5a95698323ad4e9a1dc7457003"
        },
        "steep": {
          "file": "1033-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "99926a93de5917109f350a170759e0031bc6fccc219b2fa29de9defad3dc1765"
        },
        "calmCells": {
          "file": "1033-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "552f51bd32c5430fd4605d0f1252d4e337c693177b775f76d650399b0b918073"
        },
        "breakingBand": {
          "file": "1033-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c13710adb65d66d9fa86378f23eb3575110f60cd80e124ab302dab3226c1f083"
        },
        "calmBand": {
          "file": "1033-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19474,
        "mae_m": 0.014503062530014212,
        "bias_m": -0.005870315405611467,
        "rmse_m": 0.01926576731713966
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1034,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1034-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "39724f1b72f87f3f2373721b265bb28c046e94b4feea568217c68b14ee43c0be"
        },
        "heightB": {
          "file": "1034-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "a56f2b3274e24f81e9a3ba7a934ff215f37ceb60664b886ab7327f0eea6822e3"
        },
        "wetA": {
          "file": "1034-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "0a94881750e262b4c4f634cf9fbefec9f4715315000601bc1882371d773c8f29"
        },
        "wetB": {
          "file": "1034-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "9d90bc5889984392a8c3306d71e1c5d9bf36ee8817f87cb13a2c10d260eb34ed"
        },
        "common": {
          "file": "1034-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "cd6f25e3c5e8236804872c26522609ac72183475f792ef33cbb07432e257a0df"
        },
        "steep": {
          "file": "1034-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "f8bc705d505366950c63895351dede9b50c632d31ade600f336736fd385a1187"
        },
        "calmCells": {
          "file": "1034-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "1af289eb034941ed53bacd57404c6ba5614d5707b40a1f20bbf99fb187bc7c43"
        },
        "breakingBand": {
          "file": "1034-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "5bcc0368558a2a7ff8fa44210e5ddcff8a62cd3872a2de79370c79e9de8294c5"
        },
        "calmBand": {
          "file": "1034-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19472,
        "mae_m": 0.015090760088424537,
        "bias_m": -0.006230375007516336,
        "rmse_m": 0.01983793978518703
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1035,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1035-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "9c8825020167e35524f702e2e66df02fa0ec4117c9033d7baad34595a79c9a15"
        },
        "heightB": {
          "file": "1035-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "97016b7bdeb9c45747912a4bc62033a1c8c321439dcd46e237919158d61fe31b"
        },
        "wetA": {
          "file": "1035-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "5bede74c8ece9c85d4da6ccff5cadfc473dcdea129af7576a7ded5ec25f578c7"
        },
        "wetB": {
          "file": "1035-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "9d90bc5889984392a8c3306d71e1c5d9bf36ee8817f87cb13a2c10d260eb34ed"
        },
        "common": {
          "file": "1035-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c166261c74d1fdb44f8136616a76e63389faa639508ea2bf8e901f9bc1e33701"
        },
        "steep": {
          "file": "1035-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "1d4a1374bd1b7aae4282e0040fcbc0b83970425b56363b17cd04ea6c0baa4bce"
        },
        "calmCells": {
          "file": "1035-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "4f7f5dc08761be447df70e9bfb834a64419ed6c0d332de629e2bb3cc1acd9d41"
        },
        "breakingBand": {
          "file": "1035-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "30c2e0ad0cbb94fa6c11b64dd58f85bf5c0e5b3d122acea72d0ab8c0bb6afea7"
        },
        "calmBand": {
          "file": "1035-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19471,
        "mae_m": 0.016342697881511107,
        "bias_m": -0.006587418768302661,
        "rmse_m": 0.021636881563637158
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1036,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1036-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "8e62c5bddefe595c8f384548fe5ffb70bc7ae75b1675d59919e96d9f9d9aad1c"
        },
        "heightB": {
          "file": "1036-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "4fc78eddaa6fb580e6949f7c9f33bfd91452d4870535bf2a4b75b9a14a053428"
        },
        "wetA": {
          "file": "1036-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b428f4794d0dec61d99e4a226f4ec28a0114442b35fbb722d0b66a8a5d8a3151"
        },
        "wetB": {
          "file": "1036-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "9d90bc5889984392a8c3306d71e1c5d9bf36ee8817f87cb13a2c10d260eb34ed"
        },
        "common": {
          "file": "1036-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "9d90bc5889984392a8c3306d71e1c5d9bf36ee8817f87cb13a2c10d260eb34ed"
        },
        "steep": {
          "file": "1036-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "32190b601e0f95e05ca8b660c543922bb6bd657eb1821a0a608e11d1ec4cb77d"
        },
        "calmCells": {
          "file": "1036-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "cd2b09d415cfe0bad292d2611d5afb397c91d3472ed1da2ed66494cd8e015daf"
        },
        "breakingBand": {
          "file": "1036-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "483b9b9b6e79da0bcb2104ce082b8197aa8202e2ecae71948aa269d1ccdb00a9"
        },
        "calmBand": {
          "file": "1036-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19473,
        "mae_m": 0.017838127183581628,
        "bias_m": -0.006448924843893191,
        "rmse_m": 0.023580349576946002
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1037,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1037-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "4e5fc12cc5dd430b21401cb0ab76eb7f58b1cfacea30160466a7c9572bcc43fb"
        },
        "heightB": {
          "file": "1037-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "d3f478565d6ffa2d5b260587bbaee2f5a5bfbed544a9e7a731baf76d932afb2d"
        },
        "wetA": {
          "file": "1037-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "624f76a4cf2612ad9119da58566bcebc2d9e8392aed5a20f64e1ca281e756fcf"
        },
        "wetB": {
          "file": "1037-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "88a33da825735b7dbd1e8cf0aa10f18b1b844628f8c64e37582c8f5a7130402a"
        },
        "common": {
          "file": "1037-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "2a31abc88b5000e4db0976d0b3049edf1c3f5330623250749558b5deb55df49c"
        },
        "steep": {
          "file": "1037-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "8553dd7775625059fc0b4f4245193bb02bc7c3f13a0c01e9ae656534bab06486"
        },
        "calmCells": {
          "file": "1037-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "654c57d7064b968ec0e842577285ad00e5ec7f7c49105f52c96c8b210e96f673"
        },
        "breakingBand": {
          "file": "1037-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "8f0c8f6d8900753f356742e2f52621a577fc7cb06aeeae013a1252b742f5fdea"
        },
        "calmBand": {
          "file": "1037-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19480,
        "mae_m": 0.018103128492152714,
        "bias_m": -0.006137773369695422,
        "rmse_m": 0.023869470454586473
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1038,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1038-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "4d4766043faeeabb3de110892262a91381bd507d2b696889f05b213c23e3d87f"
        },
        "heightB": {
          "file": "1038-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "9ea96bd3bbb6ce55054d821dae0ad983450b2facd4c4b852ecb3c88785d36ec6"
        },
        "wetA": {
          "file": "1038-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1038-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1038-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1038-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "76d07f781e16f5aaff5d0c8ecd94f6fc460e72fe9d18ae7d54af06a03be9ec5d"
        },
        "calmCells": {
          "file": "1038-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "a2283d031ef10243d670f46fe94d76386df206636652bf9d085a3cef2246a7fa"
        },
        "breakingBand": {
          "file": "1038-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1038-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.01727174037564163,
        "bias_m": -0.005781744553353524,
        "rmse_m": 0.023077405112687813
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1039,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1039-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "3d8b6a597c0e758093e338390a172f206c19d13d69b7b4293917097380caca3a"
        },
        "heightB": {
          "file": "1039-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "f0403d580918887e8d0d34935c5789e4167c225453084d869326ea2b5ea780fa"
        },
        "wetA": {
          "file": "1039-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1039-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1039-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1039-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "3eafc9312249e63da6a5b0c3ce471eb59024b315ac6782f15316480839360d57"
        },
        "calmCells": {
          "file": "1039-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "275709e128be7d41051c1f9264f5c9d135060439a2f0060c8be194898ccde2e3"
        },
        "breakingBand": {
          "file": "1039-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1039-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.01670541862846568,
        "bias_m": -0.005613856528699594,
        "rmse_m": 0.022848171510926885
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1040,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1040-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "1d646e1d426057b057b6698e4f26bf957df51ec6011aa5fb2cff5d55071bd1d7"
        },
        "heightB": {
          "file": "1040-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "d8331c523c77db960b6fe765a10f9cc7139852efd39a59fc7d8e8d3acb4fbab7"
        },
        "wetA": {
          "file": "1040-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1040-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1040-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1040-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "cf98b2ea6b0823c109c57d685e166cc1ad1c90612169e3ab73a88f78e59af11d"
        },
        "calmCells": {
          "file": "1040-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "7e48fee5f7f6b931343c742103ca993851345fd4795692f6fe6e43bedaaabadb"
        },
        "breakingBand": {
          "file": "1040-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1040-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.016012626542249116,
        "bias_m": -0.005507439513918989,
        "rmse_m": 0.022095829721962366
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1041,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1041-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "98a95063362a9d8946e688d6a397aed01f0bf8dfc2bac18eef899ca578a1c64e"
        },
        "heightB": {
          "file": "1041-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "4e68d64a46b1b6564fd901f536e72d92530eda6d851c5b18e8f5c3148a39c3f1"
        },
        "wetA": {
          "file": "1041-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1041-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1041-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1041-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "7728a4c94ad907e9743a1978ca13d8dd88834fd318f6596ea92b627819c2f6eb"
        },
        "calmCells": {
          "file": "1041-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "24ca9e883316f3e11ced67318ec74bcc49542d66e37a42245e02aef86a7d0d06"
        },
        "breakingBand": {
          "file": "1041-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1041-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.01683015679808642,
        "bias_m": -0.005511668770513173,
        "rmse_m": 0.02360636918878521
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1042,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1042-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "1601b5d3aa3c62ccc73ec6dbd2214c25c492daad57c681c93fa8aa4ebc3358d6"
        },
        "heightB": {
          "file": "1042-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "cfac3e18c6396ed2ef43f6f60a60cfcd7b49067c5c0e6aad5d2496327dd4b460"
        },
        "wetA": {
          "file": "1042-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1042-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1042-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1042-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "59463036803e466f05e625c5a2a13eae601ef4d4e1e9d335e05312220621bebb"
        },
        "calmCells": {
          "file": "1042-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6b791fdd4f2445079345238930c3495a45850f058e971b029a873e229b2102fa"
        },
        "breakingBand": {
          "file": "1042-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1042-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.01761972940465533,
        "bias_m": -0.005368334104218777,
        "rmse_m": 0.024596256711004703
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1043,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1043-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "77922279cc1cb76ee5d85c3e5e93deec0a1ddd2c0580046163796212b9989587"
        },
        "heightB": {
          "file": "1043-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "0de6f233b2cbc514ae58d76bf2e09bdd2aab628c13315b9e522cb5069f9daca0"
        },
        "wetA": {
          "file": "1043-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1043-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1043-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1043-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b89fc698a2fde60f7fd652153783cf98d28a7a95783e46378873db2e41744f0e"
        },
        "calmCells": {
          "file": "1043-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6822c1b0fa249548beb24eeb0aeca29c29856413a891e83184c1c9f9cf908ad9"
        },
        "breakingBand": {
          "file": "1043-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1043-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.017365723100948756,
        "bias_m": -0.005104509737824895,
        "rmse_m": 0.024909401422956806
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1044,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1044-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "1bd14740bb4191506d11574c42b8de5774594395552be5cbfa00bc28f8300c2e"
        },
        "heightB": {
          "file": "1044-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "c9e51ea0fb08b11e478aa58a83307f55ee2290570f0014a9a3d84ec29b4f5fb5"
        },
        "wetA": {
          "file": "1044-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1044-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1044-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1044-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "83eb2639d8157661e6b36e15d0168735bfc741f8037d34e76d41745ab2e602aa"
        },
        "calmCells": {
          "file": "1044-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "50f709e069e8a361a3ba80d64dc8b1c894b3d5203077c4b32960c853d8156ab0"
        },
        "breakingBand": {
          "file": "1044-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1044-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.01624375953198417,
        "bias_m": -0.005145459889601977,
        "rmse_m": 0.022799986721271013
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1045,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1045-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "6b21b103b15953b03875bcf0f2ed4c1f0fbbfe3f3d0b393a4a44cba009e9f36a"
        },
        "heightB": {
          "file": "1045-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "bf84d6b0387cc6c0ab9a31f45b7e038d1020ed0ee8ae5b69fa3d0d0d4c588fd0"
        },
        "wetA": {
          "file": "1045-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1045-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1045-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1045-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "d8bbb475e2d6466c0368bf57e93fc0a4d663635cd4fca02d7fb3491ba2106ae3"
        },
        "calmCells": {
          "file": "1045-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "ba773ea7b46da1f3386adaef2603da36094f09f323e15d315a00351bd8b23de1"
        },
        "breakingBand": {
          "file": "1045-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1045-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.016981957469789817,
        "bias_m": -0.004906294285581612,
        "rmse_m": 0.02424797343119134
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1046,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1046-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "c00277d09c4f7daf39442c70482bff2c56fb35144dccb26a398bf77ffdef4f11"
        },
        "heightB": {
          "file": "1046-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "0fed8b390c1b0dd759c951fb4a66c8a6ac4132fc68b05ea9367f514f71259c7c"
        },
        "wetA": {
          "file": "1046-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1046-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1046-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1046-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "438eac013cf8a896937c3a0941edcfa9c012ff5a3021cf1a6a2c015e93396c44"
        },
        "calmCells": {
          "file": "1046-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "e1dd0632b58d437e528552f634bfdde35c887a8a0796da46a2e92b5718f78e01"
        },
        "breakingBand": {
          "file": "1046-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1046-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.018152129210071536,
        "bias_m": -0.005311629367289937,
        "rmse_m": 0.026113943720698862
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1047,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1047-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "e112497bdc95c78bae2b5d3b28a56090b45b865068643577e06eddce8d64bc47"
        },
        "heightB": {
          "file": "1047-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "4c61f5c9c2069c34d1497c318780c4bc161ba910f1134b09bb438facd351c03e"
        },
        "wetA": {
          "file": "1047-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1047-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1047-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1047-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "77b3c377ebd57b1ce8059a41e83870392f660459408363f6f6068ad91820e0c8"
        },
        "calmCells": {
          "file": "1047-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "a3d104f71f6579b32aa876cdb9cf7ba08831dea314cada997e9c05c9417d7958"
        },
        "breakingBand": {
          "file": "1047-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1047-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.01869468075609475,
        "bias_m": -0.005797921413297039,
        "rmse_m": 0.027673607669529542
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1048,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1048-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "aa4abfd9d6181ea56e41517e2cd3e758a39a0cdd67165c4b5829349327517371"
        },
        "heightB": {
          "file": "1048-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "a81cf75a823b908b6fa18ea061a1390fcf047c1dad56f8343ff1b1552b39190b"
        },
        "wetA": {
          "file": "1048-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1048-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1048-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1048-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "552660edc3ca50667e473792a689142438311f2f70c0a7b255be466b380377e8"
        },
        "calmCells": {
          "file": "1048-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "fa93fca8f50c7a32768d6d6740c4dd86492a9f2db10957eeb4b94586d418c077"
        },
        "breakingBand": {
          "file": "1048-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1048-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.019252318164489777,
        "bias_m": -0.006388588875199909,
        "rmse_m": 0.029404971598973945
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1049,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1049-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "24c95d7cdfa22d12d1baa44f16647a69b44fde83a51177b9c999d4111f751d9a"
        },
        "heightB": {
          "file": "1049-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "c8257805f4d3da79b0d2c5e336cea75c4b4bcfa66a55377dfe3da25004ad03b2"
        },
        "wetA": {
          "file": "1049-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1049-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1049-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1049-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "2cf37c40b5fa4df751e05dfe9fe920a9a2efce396ff746978ff1e0c4f1b688db"
        },
        "calmCells": {
          "file": "1049-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "7cfdd3055066ff1620d4127ff4e0e4aaf6f94aeb6996731887065efac3533d22"
        },
        "breakingBand": {
          "file": "1049-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1049-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.020208329793287478,
        "bias_m": -0.007192271702029772,
        "rmse_m": 0.031439791153657054
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1050,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1050-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "12398e209758a5b604b5057919fb6ab1eb8f854fd090a3c49a0c3c207fe8a027"
        },
        "heightB": {
          "file": "1050-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "aaf3f84490419613d95ee73cee3cd5bfcbd018a6d8a6cf5474e36ede813fae43"
        },
        "wetA": {
          "file": "1050-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1050-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1050-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1050-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "75ac9c85124e070bccd6f9be1c7eb46b67028b315ae13a47b0fa7b2ca7fea1f5"
        },
        "calmCells": {
          "file": "1050-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8b523b9939027180a0214409356369fce2230a19cb5aa05b0670d3b2291b7f4"
        },
        "breakingBand": {
          "file": "1050-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1050-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.020861228544896204,
        "bias_m": -0.007944071567669018,
        "rmse_m": 0.03310557365030295
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1051,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1051-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "594a6d3ab9322686acfd9c001e592e8bd38e1afa4a10525d7d3a04f7d801a0ad"
        },
        "heightB": {
          "file": "1051-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "8069dbe494a36d29eeea18cd08f6878e87ba4cb119f3376da7fc1c61c91de3fa"
        },
        "wetA": {
          "file": "1051-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1051-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1051-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1051-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "171de6b68a513f17dfc09007ffa2fa2e537154698643edfed1a51824faa8023a"
        },
        "calmCells": {
          "file": "1051-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "148a28c74e42aac7c9fa81bfb89bf8c28a275141168ba68e21b8c15c916f965f"
        },
        "breakingBand": {
          "file": "1051-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1051-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.021223025351558844,
        "bias_m": -0.008259633778176192,
        "rmse_m": 0.03417282058691034
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1052,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1052-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "13e218f7360a5858dbdf0138ee2c6bf0ac660ca5f2635223dc5d213c9e9e0b5a"
        },
        "heightB": {
          "file": "1052-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "c854dcdba41d9c7272ed61f3933b4bc184cd79414b910540d73f0968341e1c19"
        },
        "wetA": {
          "file": "1052-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1052-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1052-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1052-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "deca7bb8216228386d2f96e0581b3b150ff91958be44d7cb41115e9540cdf708"
        },
        "calmCells": {
          "file": "1052-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "ae0f7d48bc6ce01724981a1c1e939556fba875a8661ace535974ddacb82e180b"
        },
        "breakingBand": {
          "file": "1052-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1052-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.021003427116797403,
        "bias_m": -0.008124345827671227,
        "rmse_m": 0.03428412248412047
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1053,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1053-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "c914be931c5fe021796b04b4da455963ae851ad0ba0bd9b0c9d48f78584bebcf"
        },
        "heightB": {
          "file": "1053-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "646037def20508fc68ad9d986a8c552cbff90da65ff79ff4479ef5f0a0cb62e3"
        },
        "wetA": {
          "file": "1053-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1053-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1053-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1053-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "47073067385bbd3bb45b76e3e3ababa4e33c972c9266c89b82cc6d3fbca97705"
        },
        "calmCells": {
          "file": "1053-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "f866aa80fe00d9d3c873774effc0aeb0401b0049892ec9122218e2c92f329da5"
        },
        "breakingBand": {
          "file": "1053-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1053-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.021315706805753735,
        "bias_m": -0.007418966205510742,
        "rmse_m": 0.03465714695996643
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1054,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1054-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "b971546c4e32a5d6f3609b8f3ad7913076fb8c179dcb0eab5e07eddcbf6fdfef"
        },
        "heightB": {
          "file": "1054-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "51abeb4f0ffcdfd82413b7ff5568fbf580e3d5e88065b31aec240e0f63c60963"
        },
        "wetA": {
          "file": "1054-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1054-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1054-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1054-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "842e1bd9d8332c6c35a079c04e1f54c51a836288f02b1774e9b44f904ed522d0"
        },
        "calmCells": {
          "file": "1054-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "07fbdd7a058b9d2e9a51e030683ea0563a3c31e7b5d2a3775d608827accdc8c9"
        },
        "breakingBand": {
          "file": "1054-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1054-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.020419445531245802,
        "bias_m": -0.006172892745741122,
        "rmse_m": 0.03302051849305776
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1055,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1055-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "6bf6fad09320b60771a152f809a884ef9f29f551958cc98088a1ac6cd73cb8d1"
        },
        "heightB": {
          "file": "1055-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "051bd423fca944ac5a26ad1389d84ac5559573b0a08bddecc02dd4a1bc9416b7"
        },
        "wetA": {
          "file": "1055-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1055-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c70dbab27f0080a896ad8e47b4769e3318f964debcc217d29d0303e5102e6624"
        },
        "common": {
          "file": "1055-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "006e4efbfde4e58cc7ca228bf6d8de9d44971666f90e9a1f6796a27eb35366ad"
        },
        "steep": {
          "file": "1055-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "db84d06889766c4b91a0f3ce3cd5ce727211163ea54f25646b3ccf029f280502"
        },
        "calmCells": {
          "file": "1055-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "81920d4eb74732467a665f5505841430357390a8a0cab03adef28beece5594c1"
        },
        "breakingBand": {
          "file": "1055-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1055-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19486,
        "mae_m": 0.018012133736974262,
        "bias_m": -0.004966727383095532,
        "rmse_m": 0.029468335815362186
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1056,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1056-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "031a2e39cef28f4cce645a7e528cddba7db3f2b28907aa6419b51c3ddeb0458a"
        },
        "heightB": {
          "file": "1056-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "2fc856d37b4bb97d578f47aa3083064125a89372dda60f7495d3ef1d1507aee5"
        },
        "wetA": {
          "file": "1056-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1056-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c70dbab27f0080a896ad8e47b4769e3318f964debcc217d29d0303e5102e6624"
        },
        "common": {
          "file": "1056-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "006e4efbfde4e58cc7ca228bf6d8de9d44971666f90e9a1f6796a27eb35366ad"
        },
        "steep": {
          "file": "1056-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "1427207287b381fd2d608f6c3f595c04f4df48e44acd8117f07f506a1b6e49a1"
        },
        "calmCells": {
          "file": "1056-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "8083d29433b15864725b2c304f67fa6a97c5aff5d14879a17577910693608bfe"
        },
        "breakingBand": {
          "file": "1056-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1056-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19486,
        "mae_m": 0.017109016857119658,
        "bias_m": -0.0037128430098218083,
        "rmse_m": 0.02645634690711424
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1057,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1057-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "3f49d2150ebb63cdb3abcb0623a36ba0c212703acace22e8d092674e0276858b"
        },
        "heightB": {
          "file": "1057-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "0d1ebc46e8afef6d5ae2172862daec7f271aca437315ac3aa7ff6b05883ae2e3"
        },
        "wetA": {
          "file": "1057-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1057-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1057-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1057-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "a134c312ea6ce8dcb930ff7656dbbe4a2a042ccd3ffedea28a94e2e85938a4e6"
        },
        "calmCells": {
          "file": "1057-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c3ec7c2767cd854a97f242bf05f51a30650fe7ee4b81465c853d790d45ea58cd"
        },
        "breakingBand": {
          "file": "1057-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1057-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.017552500415382224,
        "bias_m": -0.002223997539653245,
        "rmse_m": 0.02559262944570823
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1058,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1058-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "94904c38c83b1689c15de1fc57d3ab65b9f7880b433920a26bb16ef4de860bd1"
        },
        "heightB": {
          "file": "1058-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "9e649af11a2d8eba4ec3cb3cc374752f2a3e828f0fd58d3d5015c91d34e5df13"
        },
        "wetA": {
          "file": "1058-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1058-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1058-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1058-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "4de6be0d8336dac121842f5d23b064d6b401fff6ceb264d2315f1b8e67a0dfd6"
        },
        "calmCells": {
          "file": "1058-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "0330f47878e42af19c442613dd0f05ec0da50dee39f47ecdbbd89798b5a753a6"
        },
        "breakingBand": {
          "file": "1058-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1058-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.01759624372163568,
        "bias_m": -0.0009583075711484618,
        "rmse_m": 0.02491643142331845
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1059,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1059-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "517fd8753e75ef8798eeb53f686cb043cde05cc0dddedc7d4042517651ed3f6d"
        },
        "heightB": {
          "file": "1059-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "6b2ca6ea080cde90dfc8c4571ccb5b4c412f20ec4508091d7060269379e1ac6b"
        },
        "wetA": {
          "file": "1059-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1059-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1059-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1059-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6f3335049e33e7c01d1660d34828ecbccd3a88c1c177a0ad836b3cfcb2ea29a9"
        },
        "calmCells": {
          "file": "1059-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "0b569946b9abfebe9bbe8941898614cd63ca2609bd279600180c7c8dce280309"
        },
        "breakingBand": {
          "file": "1059-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1059-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.01733896229467544,
        "bias_m": 0.0004764117865031136,
        "rmse_m": 0.02499452330552645
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1060,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1060-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "9d8b15d77b06a32c3b600d2a05c8377c09602cc2f5fd7fb72fa402fa7ecfc245"
        },
        "heightB": {
          "file": "1060-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "ce4c4c4f0bd3074cc832adbee2156163d9be1b1e1a32d8610e6e91d7313d5462"
        },
        "wetA": {
          "file": "1060-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1060-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1060-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1060-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "5126e6c6e5be4b01db81032395a4c1bf05fde036532ee6e1e378f35db60f414e"
        },
        "calmCells": {
          "file": "1060-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "85a33dc011e66e23f9f4774229855ade2ae1aff0d590b2be713f866fa267a8a4"
        },
        "breakingBand": {
          "file": "1060-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1060-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.01666307322624717,
        "bias_m": 0.0014479926426265112,
        "rmse_m": 0.02504857960490677
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1061,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1061-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "ceed81a53755ae46520128f06416214f315955dae8acabee165df2ec1e9809cf"
        },
        "heightB": {
          "file": "1061-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "7cdd5a8f7059a8a20af0bcd43f92159d02db034d1d4778f46f8b0b2c2c1c71df"
        },
        "wetA": {
          "file": "1061-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1061-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1061-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1061-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "7b5d1cd0f57a04fc527a07759189b012905e960c49f5a36d9998e1da47132204"
        },
        "calmCells": {
          "file": "1061-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "d8c31269c78977208ef1d2d44f48d1283e4941db46bf34258ff291c1d66c741e"
        },
        "breakingBand": {
          "file": "1061-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1061-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.015768071431436024,
        "bias_m": 0.0022166227140157646,
        "rmse_m": 0.023231283374064344
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1062,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1062-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "4835b50aeedab3bdbd5e187d1b2cfdfb4f8dd48b56f04b4861aa34c87bc027ea"
        },
        "heightB": {
          "file": "1062-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "0ff41e0914e5cedfdeb26f5809d29d2b29836fe6e4443494f9d1e2a7ff19b9ba"
        },
        "wetA": {
          "file": "1062-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1062-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1062-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1062-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "07d90dfd1c28e8d917bc7822b54793183f72e54331a8f8f6c56765926d4b8907"
        },
        "calmCells": {
          "file": "1062-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c16c0f66a47765bbab1b152dfa2a243d53a3cb64efc79b0c11995be1725db871"
        },
        "breakingBand": {
          "file": "1062-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1062-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.015583865675937844,
        "bias_m": 0.0023938211429730865,
        "rmse_m": 0.022099450267072208
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1063,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1063-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "fa6ee2b39c8c2abf99b392ab676b2f3f5624a7e74ec716acd4a6881e048711c8"
        },
        "heightB": {
          "file": "1063-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "ef2298420e8704d9a3a3b5edab0f06e1032a0318287d3e0afea56e0ad16772cd"
        },
        "wetA": {
          "file": "1063-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1063-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1063-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1063-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "1b64125bc53080bbe5c41f9bb5a807bd9d72b562dd6354f01f4ce7c8b099492a"
        },
        "calmCells": {
          "file": "1063-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "095f01489a9984fc5b7ac20583cb0be6476bd62a7dfee9a7055cebb10baebd4b"
        },
        "breakingBand": {
          "file": "1063-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1063-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.0156873682686689,
        "bias_m": 0.002171311836911775,
        "rmse_m": 0.02158650351041739
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1064,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1064-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "f543ebd0c514591ec05f90278a9fb556de36b7059a68365172b0ac11e1196301"
        },
        "heightB": {
          "file": "1064-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "1818e471b27023e084fcd0e402a0790b3784cb0210e7bbdb8feafeb50c628680"
        },
        "wetA": {
          "file": "1064-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1064-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1064-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1064-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "857c6ba9efc917fc170bdadfc787df5dcbc6bb7af3a5718be5ddba31653f68f6"
        },
        "calmCells": {
          "file": "1064-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "eace0b45580a5f20c3f84b55297d3d5134329dae6321135e8e540104c3ec1eab"
        },
        "breakingBand": {
          "file": "1064-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1064-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.015203540018734673,
        "bias_m": 0.0018640066145405607,
        "rmse_m": 0.020892329686789366
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1065,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1065-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "1fb525b6c9cf7dbc05dbbed427d0eb223b910c502c900ee91e20eedd9c86c707"
        },
        "heightB": {
          "file": "1065-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "c8ac620a7fcc349952d4fea80e79681fe9ea26dcac7f055f520a3ab133830768"
        },
        "wetA": {
          "file": "1065-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1065-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1065-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1065-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "4a487ad79089b215891325c498644f0f815419cb4f5fcfc61563f4efeb452cc6"
        },
        "calmCells": {
          "file": "1065-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "d5d24fad49d5ac3da0856a161e8d47643e7a99b05fbfe40dfada12d599f32038"
        },
        "breakingBand": {
          "file": "1065-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1065-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.014749558712771118,
        "bias_m": 0.0014359280329235766,
        "rmse_m": 0.020535703407094666
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1066,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1066-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "c17502c587b1dbac7243c13077b59106cd8e03340dfb5465bdcc42098474b30c"
        },
        "heightB": {
          "file": "1066-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "c6da943ec543712a48c2766a13517cde47b3e05e8016d0538d0cf63b363edfdb"
        },
        "wetA": {
          "file": "1066-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1066-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1066-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1066-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6bad6426c5f5daa91b7189b4d7764c4c73ff94520bef68e9d6d3dd06d7d2beb5"
        },
        "calmCells": {
          "file": "1066-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "e88b0941c89d1d291e532a820769d6eea5b5c791cae9e7259743d7336add8a01"
        },
        "breakingBand": {
          "file": "1066-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1066-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.0160292539942454,
        "bias_m": 0.0009697342480300037,
        "rmse_m": 0.0217138332455893
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1067,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1067-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "8ebfaa900a9e889a8cd9caa647d00a395755ce26bdac60344ef0b26fa7b13a9b"
        },
        "heightB": {
          "file": "1067-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "c84f5f6729bec835d3175946b34cf9f4a26f0f0fafb512690d1ef4b1c67a6d48"
        },
        "wetA": {
          "file": "1067-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1067-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1067-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1067-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "990b2c269e7c668bba7906af49a42e0774fba6ca67124904f1d204fefb878c5d"
        },
        "calmCells": {
          "file": "1067-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "4d8368cf087fe28c8bce25aef7721fa4ba38160bdd66ffa9543d4b0c4c59b48f"
        },
        "breakingBand": {
          "file": "1067-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1067-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.017153195318564546,
        "bias_m": 0.0007752921765312375,
        "rmse_m": 0.023285573576891767
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1068,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1068-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "d808313ea3d317b706652212227a44a44eb6bcfd6c9977788e4593d0cb63acbf"
        },
        "heightB": {
          "file": "1068-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "f64a6fe690cfb2f1f224d2e902378ad899e3e35cdb06967aace0b2e331754f12"
        },
        "wetA": {
          "file": "1068-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1068-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1068-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1068-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "587ce38292bb3f9b4dfd8f48d9b6f0ea4e56c376f90e937963c7a0ddbe4cf1e6"
        },
        "calmCells": {
          "file": "1068-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c1b8a744a11133b246ea55ccef3ee154f69f4abcd362bd6c8b57b1d578bbc0f2"
        },
        "breakingBand": {
          "file": "1068-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1068-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.016602072035758902,
        "bias_m": 0.0006150973800382195,
        "rmse_m": 0.023250250938735274
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1069,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1069-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "accdffebffcda7c5f3a234e227bd6c82cfb0f5a69b278aa56217bf3405fe61fa"
        },
        "heightB": {
          "file": "1069-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "565b69dd9e8a81368d7bb41381ccdf4296432cb3823321389da12fca60817411"
        },
        "wetA": {
          "file": "1069-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1069-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1069-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1069-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "dccc6f06eed3688acef1006f4ed80db6395cbe0b9b14f87ee5d0353b5b692bf2"
        },
        "calmCells": {
          "file": "1069-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "4de6256e667d90604abae8ffe642424840120bbae5f6636b9a3ea9fec17c790f"
        },
        "breakingBand": {
          "file": "1069-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1069-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.01606801047491896,
        "bias_m": 0.0006519505975457375,
        "rmse_m": 0.023126363544465987
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1070,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1070-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "c077fc4327e29c855166b2a72638c0973201604530dffb9c2619819e4c4045c1"
        },
        "heightB": {
          "file": "1070-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "ac13bdcf4920895b1118f63c9b08b93a90fde9a50d27b2016fd8f8b735728f55"
        },
        "wetA": {
          "file": "1070-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1070-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1070-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1070-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6d2622d04a8a373cb9be7b7b8731f9a2e9f623462dfb67ba9e75f32303a5dd0e"
        },
        "calmCells": {
          "file": "1070-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c07a69d9493f099e8814fd3911e9c8fa04c88523534cf430ae72f43b19c51bff"
        },
        "breakingBand": {
          "file": "1070-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1070-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.01618925000883001,
        "bias_m": 0.0003835889605367701,
        "rmse_m": 0.02357912861106677
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1071,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1071-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "da82a309d52c013f74c9226e0ffb3179b99f01f41118100077dd2f7ef2568ef7"
        },
        "heightB": {
          "file": "1071-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "ea53a2abb5ec8ea6b8fd5d04532291670316165b218d11147a44145578215ed0"
        },
        "wetA": {
          "file": "1071-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1071-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1071-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1071-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6d63041661418db5eb17a3ca80867b2f6a6ab86a117b0dc6e71ca166502a4a03"
        },
        "calmCells": {
          "file": "1071-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "ca80a64d63c53db79b69c7713c8ddacb4759991cc1f6df6b2b27a71fcd0595b8"
        },
        "breakingBand": {
          "file": "1071-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1071-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.016013781409503686,
        "bias_m": 0.0004075525878549192,
        "rmse_m": 0.023503288692630315
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1072,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1072-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "eabc4dbd19935bc0d4106aa5f77e69e5c12d5090e5d9ce3d8dba5e6b244d3c94"
        },
        "heightB": {
          "file": "1072-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "9a59cca981542ed825de6ae16b1f28a0d90618a4fbd64c5376bd85dd240849fe"
        },
        "wetA": {
          "file": "1072-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1072-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1072-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1072-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c5c4bd03924e6c90a6dc23daa23766a269c376bdce6f57825ffc7d055c5946cd"
        },
        "calmCells": {
          "file": "1072-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "146d9dfd6a602ec98da0d1fbd7c8a6b984718a6f323743b42c6fa7a40505d146"
        },
        "breakingBand": {
          "file": "1072-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1072-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.015603885909287586,
        "bias_m": 0.0006755927113933767,
        "rmse_m": 0.022923725090720118
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1073,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1073-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "a0396005607e3fe478acacfed02df916e4efcc70544bec421a68f873dc12b4cd"
        },
        "heightB": {
          "file": "1073-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "b8b6bc6854536fbf645e9cce4899a4422c3f5cb0fa8131dbb05e7fdbfec7a603"
        },
        "wetA": {
          "file": "1073-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1073-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1073-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1073-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "f2a91e15be2470b31b21c78e2b5e814d1c69369dd79b67db95c4b2bb1dc283ff"
        },
        "calmCells": {
          "file": "1073-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "a61596337e81d0df8f44fe7e631309f8c87ad7e726f21c4c1ef0505688de5832"
        },
        "breakingBand": {
          "file": "1073-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1073-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.015065557110360624,
        "bias_m": 0.0011580697284681652,
        "rmse_m": 0.021801130904344435
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1074,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1074-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "6712b292af2c18752b208dac6998850c3e82b8cf2ec3395150a626b79cec4ff2"
        },
        "heightB": {
          "file": "1074-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "fb4e9ea180f31ee23d7efe322de3978e60a98768d64c7842b191d8072da7e684"
        },
        "wetA": {
          "file": "1074-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1074-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1074-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1074-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "cb767539af820feb7b40502c14e720ccd35a14bf03e868cb17d1da6bf2485c79"
        },
        "calmCells": {
          "file": "1074-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "10f07e993c3b4300da97775bd93bba4939d0cabdfe2f14af5c078d6ac1393dfc"
        },
        "breakingBand": {
          "file": "1074-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1074-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.014949674317241165,
        "bias_m": 0.0020073397558835566,
        "rmse_m": 0.021327956378809403
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1075,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1075-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "9ea6a0bf5789fff3dbd41b82c6af394af6e956e1b79799ae377a482fa0cd2e03"
        },
        "heightB": {
          "file": "1075-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "94f008e815a72364a94690211411fd5b71159ba4a1dabaf87f1c7a9a8994d25d"
        },
        "wetA": {
          "file": "1075-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1075-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1075-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1075-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "1df9b1e2ef8ab7bf1a347e20228d7974aea7d1a30f495936b267969e81cc2499"
        },
        "calmCells": {
          "file": "1075-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "60ccdfc5933a7b087a9e20ea2e710808213261342b4465b4ee6b1448c407e8cb"
        },
        "breakingBand": {
          "file": "1075-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1075-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.01429129749356899,
        "bias_m": 0.0029522336684237697,
        "rmse_m": 0.019957506375914823
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1076,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1076-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "7407ea2bfd8f880e62dc05819fe72720bd01d066973fab51572c14d798085490"
        },
        "heightB": {
          "file": "1076-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "2c729a08d6a271fdb013a114501145d6ebd5df797d066b13b98b03ec19d7e94c"
        },
        "wetA": {
          "file": "1076-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1076-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1076-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1076-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "87f4c7610b0e0abcda4782b3477f1071f7a66d2eb213c7bdd7e073ded29ac47b"
        },
        "calmCells": {
          "file": "1076-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "932c1b1fc93c4f57c26f96a8cd2edf7f56b9969f4c227e0dc9d9deefc94980a9"
        },
        "breakingBand": {
          "file": "1076-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1076-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.014197877694568697,
        "bias_m": 0.003722599094871649,
        "rmse_m": 0.019673362172793574
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1077,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1077-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "7e9c0f646f6645b186e713bf08aab90eb572e2f3a9bc1e2432d201b8a6cc8277"
        },
        "heightB": {
          "file": "1077-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "259dd094ec636eb665093e140fd021d146bace8999a0ff4b6049533818c7f3ad"
        },
        "wetA": {
          "file": "1077-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1077-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1077-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1077-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "d117231a84712a04d0761aecdc410cd342f26834b4c3dbd3a4c3cdaf54806045"
        },
        "calmCells": {
          "file": "1077-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "57c7877ded0c77d1c478dd62a52a1fc4c5664d695b986145e71e050d4ccf72bd"
        },
        "breakingBand": {
          "file": "1077-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1077-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.014788282509104968,
        "bias_m": 0.004020884259574489,
        "rmse_m": 0.020099617000454876
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1078,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1078-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "fd4f0a42288d4154a7c2428011fd49b619ada79ef7df7b42a53fb5c288f583bd"
        },
        "heightB": {
          "file": "1078-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "1d078bb9cc38bd89b75ff6e7bf0bb121f62ee673bdd3c517229ca10ad0a408f6"
        },
        "wetA": {
          "file": "1078-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1078-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1078-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1078-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "7a14c46fb09f28a8729c9c0332c750788835f639ee4f990d7d0f9a72660e2075"
        },
        "calmCells": {
          "file": "1078-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "208b88d1c92d0da7c7c1f6494b19b69f8f60338b66e037cbe2c43d2d54f48c22"
        },
        "breakingBand": {
          "file": "1078-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1078-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.014596763923713705,
        "bias_m": 0.0038195127096343124,
        "rmse_m": 0.019743994521544708
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1079,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1079-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "9fc691cfaf7fa7cfbf2da6904e56282d587673b6cd732c08578ce1a4381fd53d"
        },
        "heightB": {
          "file": "1079-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "d8df6d12aa5dd8851eba6f9b3f909137d479032dcbeef30bedddfb4ef611115b"
        },
        "wetA": {
          "file": "1079-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1079-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1079-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1079-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6a83b8abe84791af31d4e54e3e87bf34ad6cbc296563648be94487dae395312e"
        },
        "calmCells": {
          "file": "1079-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "f932918d46075a14671d906da33c8ab6d4d58d515d4e01c9b6f29e048eafd444"
        },
        "breakingBand": {
          "file": "1079-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1079-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.014108214649807709,
        "bias_m": 0.0032864811169918073,
        "rmse_m": 0.018743752539782572
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1080,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1080-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "e0c81c129cf1100cfe0ea643882ebbce4fd023795925961c7027ed2d21e32539"
        },
        "heightB": {
          "file": "1080-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "68da61cc817c85831db78fa0baf2b2f3e3f79820b5fa4ea67cb9702e787ca37d"
        },
        "wetA": {
          "file": "1080-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1080-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1080-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1080-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "e99d55c95a77e37101c53e7010afc3348fa87bae0b20556e5f170e6aa3df0230"
        },
        "calmCells": {
          "file": "1080-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c710d998a909c1e99f5d7e1b6a30493f6dd2d269306107ca43e5be16d6be32e8"
        },
        "breakingBand": {
          "file": "1080-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1080-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.013736070431116283,
        "bias_m": 0.0024384742237183515,
        "rmse_m": 0.01867537677781983
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1081,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1081-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "2ee0a5293c91dda1b3bc6c7b83735eb12a7e5b81a41dcd64c4efd0afd43e845d"
        },
        "heightB": {
          "file": "1081-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "99c8beca63a02cdffe989954683d1c9ca2ae548a4854e273fbcf786c9e5e7b34"
        },
        "wetA": {
          "file": "1081-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1081-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1081-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1081-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "75d2e13c823eb1fa8fe78d75d03d7f7dd6f9274a43db8bfa3864798c55cf898f"
        },
        "calmCells": {
          "file": "1081-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "022aba646b1fe8bf7368cd06c15a78c60143897f59a91d152edcbbe2c6ca9bc4"
        },
        "breakingBand": {
          "file": "1081-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1081-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.013480887402792692,
        "bias_m": 0.0015484498931370753,
        "rmse_m": 0.017904853018309
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1082,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1082-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "b06c7ba7de1d4a2e08421afd63feb8190849838f5a3a21afe01b147982d8d567"
        },
        "heightB": {
          "file": "1082-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "76e867909d448c05e1d80bf5636f443dc57f83c6e08ceb584f12c42d1be09968"
        },
        "wetA": {
          "file": "1082-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1082-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1082-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1082-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "aa8bcfd380a0b829555626754b60be08bb090310fbeefd391f75eb5ef1b86e21"
        },
        "calmCells": {
          "file": "1082-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "7b385742352a8567734f783e8bc02ec86989e6b40c09d233707957dce525ad31"
        },
        "breakingBand": {
          "file": "1082-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1082-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.013039589973302616,
        "bias_m": 0.00021484564390692942,
        "rmse_m": 0.017355483849925912
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1083,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1083-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "9cf0e53702e485180746d911fc865909febacf84712bfd0350ca44ca53c1442f"
        },
        "heightB": {
          "file": "1083-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "fcea1aa3b0ce291c3db456ea5e68f0e55563a1e7a771a3b5f29383c21082bdf5"
        },
        "wetA": {
          "file": "1083-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1083-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1083-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1083-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "81ea6f322d42b81411de5fc078d79a17c1ffbb26a0e40b67599bf6a9115a4ad7"
        },
        "calmCells": {
          "file": "1083-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "4c9759dde08acbfe233509ad560ac1f4b06cb0acbedb7b30c08905894d53cdf0"
        },
        "breakingBand": {
          "file": "1083-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1083-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.01333182838634777,
        "bias_m": -0.0009967620054796937,
        "rmse_m": 0.017712739961680702
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1084,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1084-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "1a8da027b9667bb6969fa9ffda45eff8bd477771ab5eb28120ed6543806a8c4d"
        },
        "heightB": {
          "file": "1084-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "a3b3de8d45869b272107765ba2aa73548277681b39de4c633c01410c2d4d137b"
        },
        "wetA": {
          "file": "1084-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1084-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1084-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1084-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6cf1d2351e4ff58f35325c2bfdd3481fc4b78fade5ddfd4ae49ba34c5e896456"
        },
        "calmCells": {
          "file": "1084-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "91d970afb747294667d114f5077f3c1d6f7d1520745d192d60e3d5bbadb7bc91"
        },
        "breakingBand": {
          "file": "1084-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1084-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.013136748457536512,
        "bias_m": -0.002300350272063045,
        "rmse_m": 0.01748334348586191
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1085,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1085-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "39ed4078d11beff611af76936e37ed3a1788db12071bddbae6675334938af90a"
        },
        "heightB": {
          "file": "1085-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "2c218c64f1ea4176464a0ba8d764e2cbad0a912affbf2f50fd78755382f324b8"
        },
        "wetA": {
          "file": "1085-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1085-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1085-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1085-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "018a608a53aa94fc2fd9e5a9f2bfaa3b1ca43ca7be4f1a0970115e8f9e889736"
        },
        "calmCells": {
          "file": "1085-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "cd75e43266e31f43188c3961248055f7f2e419097420171019cb24769e8a2e1c"
        },
        "breakingBand": {
          "file": "1085-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1085-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.012782789996763133,
        "bias_m": -0.0031760563835966462,
        "rmse_m": 0.017375145015207188
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1086,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1086-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "4e59d5ddc785852cd2815f77cfbf6aabec451eed5c2a9989ed6d7b43aca97b5e"
        },
        "heightB": {
          "file": "1086-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "9b4ed9f91f3ead5f4b749c7dc31e86b7827b13eaae4b4752e5df102b37203b47"
        },
        "wetA": {
          "file": "1086-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1086-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1086-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1086-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "a81b0c8c270a2ce5acc2b4604a9d95960b0d3dcc463213eb26e2d3d83e4ba5eb"
        },
        "calmCells": {
          "file": "1086-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "c9ecff2c6a049ebd7fbad7cb60f2ab1efd5dcb8f5e35ec90c32da908ba80979e"
        },
        "breakingBand": {
          "file": "1086-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1086-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.012798950440779704,
        "bias_m": -0.003808902411369959,
        "rmse_m": 0.017324575357230153
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1087,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1087-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "d160b949cf1a3059a2db08be589c6e2fc364444eecc4a3dd010c406ee01db294"
        },
        "heightB": {
          "file": "1087-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "fd8bf7927254392fa0c9daad92753875c101df839cf4c73ec7895e57425accdf"
        },
        "wetA": {
          "file": "1087-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1087-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b8fe2e5064b5214b01ac93a51fa84f478ddf9546a455bf6dbc222a638f1411a4"
        },
        "common": {
          "file": "1087-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1087-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "ae259680cc46b9454ee322034c34d202169204edacc4742fb37d7a2f424555bc"
        },
        "calmCells": {
          "file": "1087-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "73142650270a8fb19542ba4a96e7075741db069fb33575454e30f2bd070f74fc"
        },
        "breakingBand": {
          "file": "1087-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1087-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.012862323862885446,
        "bias_m": -0.00398098479127854,
        "rmse_m": 0.017271305930815977
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1088,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1088-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "559edae9003df143040e4ec1672e6dd0a4e487d0c87b4313b53b6a72cf434334"
        },
        "heightB": {
          "file": "1088-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "639b6c8f18e9616216ea5f0b0fb1acbfc87c1a7b2ad54739f2b3ad0b28991f2e"
        },
        "wetA": {
          "file": "1088-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1088-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "d0736df8832c5d824be3ba4756ef058a76ea81367ad20640d20163b9b1584175"
        },
        "common": {
          "file": "1088-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "5c18710ce8bf03806726c30c973de323c9ae9637c18e6848aadfc981f0a5624d"
        },
        "steep": {
          "file": "1088-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "556fd47999d4908bf2acdfc434fe909f298859ca3866ed388aab66dfba49d12c"
        },
        "calmCells": {
          "file": "1088-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "59c5d3bf63900806a38317b6234707887ab1e227a4a2670f0cc8fd7423130fbd"
        },
        "breakingBand": {
          "file": "1088-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "3630d005bde6b14069c6f14533bf48d6317ad4af80c3668e99e15a28db4bfd86"
        },
        "calmBand": {
          "file": "1088-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19486,
        "mae_m": 0.012275913517662046,
        "bias_m": -0.004060464612252993,
        "rmse_m": 0.01651263302223297
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1089,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1089-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "0661394e71dc787d463ea21035a8738ec1fdf4d15f4915c97f785ae4bee180e5"
        },
        "heightB": {
          "file": "1089-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "905c567cc34886fa2dcdfd3d3046a1b6c50c92b5f6c7da6b91baaac46eb704c4"
        },
        "wetA": {
          "file": "1089-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1089-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "d0736df8832c5d824be3ba4756ef058a76ea81367ad20640d20163b9b1584175"
        },
        "common": {
          "file": "1089-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "5c18710ce8bf03806726c30c973de323c9ae9637c18e6848aadfc981f0a5624d"
        },
        "steep": {
          "file": "1089-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "1fb0542fa732e2544344630beb046d2e2452e81508421c0696ea8eb4cc49f963"
        },
        "calmCells": {
          "file": "1089-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "5fd24bb619a06b90e6b8932d63efe188a7a9c22f21949461bdcbbed0346796bd"
        },
        "breakingBand": {
          "file": "1089-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "3630d005bde6b14069c6f14533bf48d6317ad4af80c3668e99e15a28db4bfd86"
        },
        "calmBand": {
          "file": "1089-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19486,
        "mae_m": 0.01210329840282017,
        "bias_m": -0.004019742285912156,
        "rmse_m": 0.016119343774057153
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1090,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1090-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "680745ac7e492c906006e0877cbb849744ac3cd8249378630daffb64e5b470a0"
        },
        "heightB": {
          "file": "1090-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "0c10c0c2990c5394a61b8fa75adcfbd4a28518f383abd635f2b7327592cf23ad"
        },
        "wetA": {
          "file": "1090-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1090-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "59a04ecb08a83b1f8a287fef14e1d33eeed96420aaaeed2844e609d29b9fcf65"
        },
        "common": {
          "file": "1090-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "d0dfea76942bcfc635c785ad93e80b0620391787133aceb5cf3ec9d5d9975523"
        },
        "steep": {
          "file": "1090-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "8ef110f39c85e915808a759d0b605fdd3021ead25bbe9ad29565fe0bbcc7a2be"
        },
        "calmCells": {
          "file": "1090-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "7dd38a05bbc9bc26b53576d587002d4a3bedcd22877bc5ed269a78641108243b"
        },
        "breakingBand": {
          "file": "1090-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "3630d005bde6b14069c6f14533bf48d6317ad4af80c3668e99e15a28db4bfd86"
        },
        "calmBand": {
          "file": "1090-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19485,
        "mae_m": 0.012457727951929516,
        "bias_m": -0.004214175374297015,
        "rmse_m": 0.015999990063288602
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1091,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1091-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "10ae8b4a98c4fa2ae3a3098657b7218263942cf501a4e3eb7ec959fde2f2680c"
        },
        "heightB": {
          "file": "1091-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "e56f337ec9cd4c297ac7d18eb083ec9332d86f2a2a33d5b4dd8612f018edf01e"
        },
        "wetA": {
          "file": "1091-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1091-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "59a04ecb08a83b1f8a287fef14e1d33eeed96420aaaeed2844e609d29b9fcf65"
        },
        "common": {
          "file": "1091-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "d0dfea76942bcfc635c785ad93e80b0620391787133aceb5cf3ec9d5d9975523"
        },
        "steep": {
          "file": "1091-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "723c7f79f6490253dfc34b9c13752ab5c59a683e8fd3da812d056247d9eee6b5"
        },
        "calmCells": {
          "file": "1091-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "73837e917563c191536204730ea5f2d6a5581178cfea6e83d228ff5cd5539f22"
        },
        "breakingBand": {
          "file": "1091-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "3630d005bde6b14069c6f14533bf48d6317ad4af80c3668e99e15a28db4bfd86"
        },
        "calmBand": {
          "file": "1091-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19485,
        "mae_m": 0.012819380136839456,
        "bias_m": -0.00454918981340036,
        "rmse_m": 0.016294595519530743
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1092,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1092-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "f6029b027ce61beddf2be4589b5a9e0cd01317de007a9a4ab2afd51e8d74bda0"
        },
        "heightB": {
          "file": "1092-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "3f0256e360bd18ca49160dcc60293a108a4109418b96d285712eafec0c7221f4"
        },
        "wetA": {
          "file": "1092-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1092-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "43c87a154b531285f68d8e4da0cc74988a57008443f71d18eb393df7bdf86e54"
        },
        "common": {
          "file": "1092-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "5c18710ce8bf03806726c30c973de323c9ae9637c18e6848aadfc981f0a5624d"
        },
        "steep": {
          "file": "1092-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "8232986643958f91c715cee8e29d0c1a7b6ff2b4b189c316c47a4d90412e4e7d"
        },
        "calmCells": {
          "file": "1092-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "1df445237ae6bbe3af37c4915a522ea5fee92dd5797e439645726f90f7ce85a6"
        },
        "breakingBand": {
          "file": "1092-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "3630d005bde6b14069c6f14533bf48d6317ad4af80c3668e99e15a28db4bfd86"
        },
        "calmBand": {
          "file": "1092-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19486,
        "mae_m": 0.013243332909183147,
        "bias_m": -0.005419428146074332,
        "rmse_m": 0.016778046451163073
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1093,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1093-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "e7b4aa61c218c3163b3793f7b4c10a8eeba4d218b50096f232fa3a26acde34c7"
        },
        "heightB": {
          "file": "1093-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "ba8bcc21cd8f5e597af749b05422a38164dba8838550efb4adb9c3e2eab40aec"
        },
        "wetA": {
          "file": "1093-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1093-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "d0736df8832c5d824be3ba4756ef058a76ea81367ad20640d20163b9b1584175"
        },
        "common": {
          "file": "1093-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "5c18710ce8bf03806726c30c973de323c9ae9637c18e6848aadfc981f0a5624d"
        },
        "steep": {
          "file": "1093-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "5d010dd55626c940cd09ccd143e01f76c441c32a4d66c48fbabadf5e79aa4eb2"
        },
        "calmCells": {
          "file": "1093-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "59484e64e249cda1b6610d1b657715d0882442db1dadb540b3ff103b45b7dac5"
        },
        "breakingBand": {
          "file": "1093-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "3630d005bde6b14069c6f14533bf48d6317ad4af80c3668e99e15a28db4bfd86"
        },
        "calmBand": {
          "file": "1093-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19486,
        "mae_m": 0.014564982793465908,
        "bias_m": -0.006638841714226404,
        "rmse_m": 0.018200158954994647
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1094,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1094-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "59a0b5f2f5a0273e962897e30194d86b5ae96a5a4a396f49d35f96327503d2f7"
        },
        "heightB": {
          "file": "1094-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "82c69587fd514903e10482bc41e68d06c37d2c5ea9fdfcb0fad16d4e7dc5c6e9"
        },
        "wetA": {
          "file": "1094-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1094-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "5c18710ce8bf03806726c30c973de323c9ae9637c18e6848aadfc981f0a5624d"
        },
        "common": {
          "file": "1094-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "5c18710ce8bf03806726c30c973de323c9ae9637c18e6848aadfc981f0a5624d"
        },
        "steep": {
          "file": "1094-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "a9829035d5b157edd1741c47a22eda6287d0dc22a610f0564f762a0b58822246"
        },
        "calmCells": {
          "file": "1094-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "e281b18fcc2b4d8e2c3936fe44e72bcfd08bec7e23c70f9066d75840026f6c3a"
        },
        "breakingBand": {
          "file": "1094-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "3630d005bde6b14069c6f14533bf48d6317ad4af80c3668e99e15a28db4bfd86"
        },
        "calmBand": {
          "file": "1094-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19486,
        "mae_m": 0.016382601560379784,
        "bias_m": -0.008300476456484804,
        "rmse_m": 0.020063680701251904
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1095,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1095-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "98493c0b8c16aa1e207551ed603284c1a97c96e92d43cb7a920a18653e89a4fe"
        },
        "heightB": {
          "file": "1095-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "5bde2474215e0a224babb09561e045764867800bb5419c1bed14433f7b662f27"
        },
        "wetA": {
          "file": "1095-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1095-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "common": {
          "file": "1095-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "steep": {
          "file": "1095-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "1be716cf20472524808b80a0debdc1cac014cd4c15c7b23e37f11ea449a8db44"
        },
        "calmCells": {
          "file": "1095-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "1cbb96939dd719df7e6c7d6a58093dc4ccb2637166329fd00c57b70ec43dfca5"
        },
        "breakingBand": {
          "file": "1095-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"
        },
        "calmBand": {
          "file": "1095-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19487,
        "mae_m": 0.01735395057373026,
        "bias_m": -0.010068714470230491,
        "rmse_m": 0.021018730121474916
      }
    },
    {
      "schemaVersion": 1,
      "kind": "protocol-spatial-frame",
      "runId": "raw-reference-96-e81b8955734e",
      "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
      "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "frameId": 1096,
      "shape": [
        128,
        224
      ],
      "axisOrder": "ZX",
      "originXYZ": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "spacing": 0.049999999148505836,
      "resources": {
        "heightA": {
          "file": "1096-heightA.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "ffb6208c091ff29e0006d362f9eba42089387b87acd5ef9c494d3bfc17bc8634"
        },
        "heightB": {
          "file": "1096-heightB.bin",
          "dtype": "float64-le",
          "bytes": 229376,
          "sha256": "ff3a2b88771db3704faec03b9267f9aa8f6199e0f2c7caad94d3f1ddeb0e0a27"
        },
        "wetA": {
          "file": "1096-wetA.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"
        },
        "wetB": {
          "file": "1096-wetB.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "5c18710ce8bf03806726c30c973de323c9ae9637c18e6848aadfc981f0a5624d"
        },
        "common": {
          "file": "1096-common.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "5c18710ce8bf03806726c30c973de323c9ae9637c18e6848aadfc981f0a5624d"
        },
        "steep": {
          "file": "1096-steep.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "3e5a9f0f9ef66b9c9eda7ad5c001ff639ffb06153f004aca2bbe52b282dba1ee"
        },
        "calmCells": {
          "file": "1096-calmCells.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "8a8a2fa215719bae764d56da9e067a2f00c0890f4d2ca5bc1aae7027eb79557f"
        },
        "breakingBand": {
          "file": "1096-breakingBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "3630d005bde6b14069c6f14533bf48d6317ad4af80c3668e99e15a28db4bfd86"
        },
        "calmBand": {
          "file": "1096-calmBand.bin",
          "dtype": "uint8",
          "bytes": 28672,
          "sha256": "b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"
        }
      },
      "summary": {
        "common": 19486,
        "mae_m": 0.018656794217103784,
        "bias_m": -0.011679646139587784,
        "rmse_m": 0.022521592714583177
      }
    }
  ],
  "common": 1867211,
  "weightedHeight": {
    "mae_m": 0.015322750768874766,
    "bias_m": -0.00377808261841917
  }
}
`;async function Kt(n,{signal:a}={}){const t=Rn(n);if(!t)throw Error("No verified velocity diagnostic resource for this frame");let s;{const i=await t0(t.resource);if(!i)throw Object.assign(new Error(`请选择本机文件 / Select ${n}.ocfld.gz`),{code:"VELOCITY_FILE_REQUIRED"});s=await i.arrayBuffer()}a?.throwIfAborted();const c=Mc(await qt(s,t.resource));return a?.throwIfAborted(),{frame:c,lattice:t.lattice,alignment:t}}const Gc=["collaborator-native","common-finite-exploration"];function Hc({frame:n,lattice:a,alignment:t,domain:s}){if(!Gc.includes(s))throw Error("Unknown velocity domain");if(s==="collaborator-native"&&!t?.dataAndDomainVerified)throw Error("Velocity domain has not been verified");const c=a?.dimensions,i=a?.origin,o=a?.axisSteps;if(!c||c.length!==3||c.some(p=>!Number.isInteger(p)||p<1)||!i||i.some(p=>!Number.isFinite(p))||!o||o.length!==3||o.some((p,h)=>p.length!==3||p.some((d,u)=>!Number.isFinite(d)||(h===u?d<=0:d!==0))))throw Error("Unsupported velocity lattice");const r=n?.groups?.velocity,f=n?.groups?.sdf?.ground_truth;if([f,r?.ground_truth_valid,r?.prediction_valid,...["ground_truth","prediction"].flatMap(p=>[..."xyz"].map(h=>r?.[p+"."+h]))].some(p=>!p||p.shape?.length!==3||p.shape.some((h,d)=>h!==c[d])||p.values?.length!==c[0]*c[1]*c[2]))throw Error("Velocity field shape mismatch");const m=t?.domainDefinition?.cropX??[11,212],y=t?.domainDefinition?.cropZ??[11,105];function x(p,h,d){const u=p+c[0]*(h+c[1]*d),S=s!=="collaborator-native"||p>=m[0]&&p<m[1]&&d>=y[0]&&d<y[1],j=S&&r.ground_truth_valid.values[u]>0&&(s!=="collaborator-native"||f.values[u]<Math.fround(-.1)),_=S&&r.prediction_valid.values[u]>0,E=j&&_,w=[..."xyz"].map(M=>r["ground_truth."+M].values[u]),g=[..."xyz"].map(M=>r["prediction."+M].values[u]),C=[...w,...g].every(Number.isFinite);return{candidate:S,gtEligible:j,predValid:_,paired:E,common:E&&C,nonfiniteExcluded:E&&!C,gt:w,pred:g}}return{d:c,o:i,a:o,sample:x,world:(p,h,d)=>i.map((u,S)=>u+o[0][S]*p+o[1][S]*h+o[2][S]*d)}}function Qt(n,{x:a,z:t}){return[Math.round((a-n.origin[0])/n.axisSteps[0][0]),Math.round((t-n.origin[2])/n.axisSteps[2][2])]}function il(n){const{d:a,sample:t}=Hc(n),[s,c]=Qt(n.lattice,n.hotspotXZ);if(s<0||s>=a[0]||c<0||c>=a[2])return null;for(let i=a[1]-1;i>=0;i--)if(t(s,i,c).common)return i;return null}function es(n){if(n.plane!=="xz")throw Error("Velocity diagnosis supports XZ slices only");const{d:a,a:t,world:s,sample:c}=Hc(n),[i,o,r]=a,f=n.sliceIndex;if(!Number.isInteger(f)||f<0||f>=o)throw Error("Velocity Y index is outside the grid");const l=n.roiXZ;if(l&&(Object.values(l).length!==4||["xmin","xmax","zmin","zmax"].some(E=>!Number.isFinite(l[E]))||l.xmin>l.xmax||l.zmin>l.zmax))throw Error("Invalid velocity ROI bounds");const m={domain:n.domain,width:i,height:r,sliceIndex:f,stepX:t[0][0],stepZ:t[2][2],worldAt:E=>s(E%i,f,Math.floor(E/i)),roiView:null};for(const E of["speedGT","speedPred","vectorError","speedDelta"])m[E]=new Float64Array(i*r).fill(NaN);for(const E of["candidate","gtEligible","common","roi"])m[E+"Mask"]=new Uint8Array(i*r);m.vectorsGT=new Float64Array(3*i*r),m.vectorsPred=new Float64Array(3*i*r);const y=()=>({counts:{candidate:0,gtEligible:0,predValid:0,paired:0,common:0,nonfiniteExcluded:0,gtOnly:0,predOnly:0},sumE:0,sumDelta:0,maximum:null}),x=y(),p=y();function h(E,w,g){for(const C of["candidate","gtEligible","predValid","paired","common","nonfiniteExcluded"])E.counts[C]+=Number(w[C]);if(E.counts.gtOnly+=Number(w.gtEligible&&!w.predValid),E.counts.predOnly+=Number(w.predValid&&!w.gtEligible),w.common){const C=m.vectorError[g];E.sumE+=C,E.sumDelta+=m.speedDelta[g],(!E.maximum||C>E.maximum.value)&&(E.maximum={value:C,index:g,world:m.worldAt(g)})}}let d=i,u=-1,S=r,j=-1;for(let E=0;E<r;E++)for(let w=0;w<i;w++){const g=w+i*E,C=c(w,f,E),[B,,M]=s(w,f,E);for(const b of["candidate","gtEligible","common"])m[b+"Mask"][g]=Number(C[b]);C.common&&(m.vectorsGT.set(C.gt,3*g),m.vectorsPred.set(C.pred,3*g),m.speedGT[g]=Math.hypot(...C.gt),m.speedPred[g]=Math.hypot(...C.pred),m.vectorError[g]=Math.hypot(...C.pred.map((b,k)=>b-C.gt[k])),m.speedDelta[g]=m.speedPred[g]-m.speedGT[g]),h(x,C,g),(!l||B>=l.xmin&&B<=l.xmax&&M>=l.zmin&&M<=l.zmax)&&(h(p,C,g),m.roiMask[g]=1,d=Math.min(d,w),u=Math.max(u,w),S=Math.min(S,E),j=Math.max(j,E))}u>=0&&(m.roiView={x:d,z:S,width:u-d+1,height:j-S+1});function _(E){const w=E.counts;return{counts:w,coverageCandidate:w.candidate?w.common/w.candidate:null,coverageGT:w.gtEligible?w.common/w.gtEligible:null,meanE:w.common?E.sumE/w.common:null,meanSpeedDelta:w.common?E.sumDelta/w.common:null,maximum:E.maximum}}return m.whole=_(x),m.local=_(p),m}function ns(n,a){if(a!==null&&(!Number.isFinite(a)||a<0))throw Error("Invalid direction threshold");const{commonMask:t,roiMask:s,vectorsGT:c,vectorsPred:i,speedGT:o,speedPred:r}=n,f=new Float64Array(t.length).fill(NaN),l=new Uint8Array(t.length);let m=0,y=0,x=0,p=0;if(a!==null)for(let d=0;d<t.length;d++){if(!t[d])continue;const u=xo(c,i,o[d],r[d],a,3*d);u!==null&&(f[d]=u,l[d]=1,x++,m+=u,s[d]&&(p++,y+=u))}const h=(d,u,S)=>({count:d,excludedLowSpeedCount:a===null?null:S-d,meanDegrees:d?u/d:null});return{degrees:f,mask:l,whole:h(x,m,n.whole.counts.common),local:h(p,y,n.local.counts.common)}}function as(n,a,t,s,c=4){const{width:i,commonMask:o,vectorsGT:r,vectorsPred:f,stepX:l,stepZ:m}=n;let y=s??0;for(let u=0;s===void 0&&u<o.length;u++)o[u]&&(y=Math.max(y,Math.hypot(r[3*u],r[3*u+2]),Math.hypot(f[3*u],f[3*u+2])));const x=y>0?.72*c/y:0,p=Math.min(l,m),h=u=>[u[0]*x*p/l,u[2]*x*p/m],d=[];for(let u=Math.ceil(a.z/t)*t;u<a.z+a.height;u+=t)for(let S=Math.ceil(a.x/t)*t;S<a.x+a.width;S+=t){const j=S+i*u;if(!o[j])continue;const _=Array.from(r.subarray(3*j,3*j+3)),E=Array.from(f.subarray(3*j,3*j+3));d.push({index:j,x:S,z:u,gt:_,pred:E,gtOffset:h(_),predOffset:h(E)})}return{points:d,stride:t,gain:x,maxProjection:y,referenceSpeed:y,referenceGridLength:h([y,0,0])[0]}}const ts="oceanscope.velocity-diagnosis.v1",qc="native-xz-paired-v1",ol=["vectorError","speedDelta","direction"],cc=["xmin","xmax","zmin","zmax"],Gn=(n,a)=>a&&typeof a=="object"?n&&typeof n=="object"&&(!Array.isArray(a)||Array.isArray(n)&&n.length===a.length)&&Object.keys(a).every(t=>Gn(n[t],a[t])):n===a,ca=(n,a)=>Number.isInteger(n)&&n>=0&&n<a;function ic(n){if(!n||cc.some(a=>!Number.isFinite(n[a]))||n.xmin>n.xmax||n.zmin>n.zmax)throw Error("Velocity report ROI is invalid");return Object.fromEntries(cc.map(a=>[a,n[a]]))}function oc(n,a,t,s=new Date().toISOString()){const{display:c,direction:i,probe:o}=n,[r]=a.lattice.dimensions,{arrows:f}=c;return structuredClone({schema:ts,createdAt:s,source:{caseId:a.caseId,codeRevision:t,calculation:qc,protocolSha256:a.protocolSha256,originals:a.source,resource:a.resource},alignment:{lattice:a.lattice,unitClaim:a.unitClaim,unitEvidence:a.unitEvidence,vectorBasis:a.vectorBasis},domain:{id:n.domain,definition:n.domainDefinition},plane:{frame:a.frame,axis:"xz",yIndex:n.yIndex,yWorld:n.yWorld},roi:n.roiXZ,probe:{xIndex:o.index%r,zIndex:Math.floor(o.index/r),xyz:o.xyz},appearance:{mode:c.mode,zoom:c.zoomed,viewport:c.view,ranges:c.ranges},arrows:{scaleCells:c.scaleCells??4,enabled:f!==null,stride:f?.stride??null,gain:f?.gain??null,referenceSpeed:f?.referenceSpeed??null,referenceGridLength:f?.referenceGridLength??null},angleThreshold:{tau:i.tau,unit:i.unit,source:i.thresholdSource},summary:{whole:n.whole,roi:n.local,direction:{whole:i.whole,roi:i.local}},samples:{scope:"Probe and displayed arrow anchors. CSV contains the full native slice.",probe:o,arrowNativeIndices:f?.points.map(l=>l.index)??[]},surfaceCase:n.surfaceRequest,...n.streamlines&&{streamlines:n.streamlines}})}function Yc(n,{alignment:a,caseId:t,runId:s}){if(new TextEncoder().encode(n).length>1024*1024)throw Error("Velocity report too large");let c;try{c=JSON.parse(n)}catch{throw Error("Invalid analysis JSON")}if(c?.schema!==ts)throw Error("Unsupported velocity report");const{source:i,plane:o,appearance:r,arrows:f,probe:l,surfaceCase:m,angleThreshold:y}=c,x=a??Rn(o?.frame);if(!x||t!==x.caseId||!Gn(i,{caseId:t,calculation:qc,protocolSha256:x.protocolSha256,originals:x.source,resource:x.resource})||!Gn(c.alignment,{lattice:x.lattice,unitClaim:x.unitClaim,unitEvidence:x.unitEvidence,vectorBasis:x.vectorBasis})||o?.frame!==x.frame)throw Error("Velocity report source identity mismatch");const[p,h,d]=x.lattice.dimensions;if(o.axis!=="xz"||!ca(o.yIndex,h)||!ca(l?.xIndex,p)||!ca(l?.zIndex,d))throw Error("Velocity report slice or probe is outside the native lattice");if(!Gc.includes(c.domain?.id)||!ol.includes(r?.mode)||typeof r.zoom!="boolean"||typeof f?.enabled!="boolean")throw Error("Velocity report display settings are invalid");const u=r.zoom?4:16,S=Math.min(u,r.viewport?.width??p,r.viewport?.height??d),j=f.scaleCells??S;if(!Number.isInteger(j)||j<1||j>16)throw Error("Velocity report arrow reference span is invalid");const _=y?.tau;if(_!==null&&(!Number.isFinite(_)||_<0))throw Error("Velocity report threshold is invalid");const E=ic(c.roi),w=ic(m?.roiXZ),g=m?.hotspotXZ,C={runId:s,protocolSha256:x.protocolSha256,manifestA:x.source.gt.manifestSha256,manifestB:x.source.prediction.manifestSha256};if(!s||m?.frame!==x.frame||m?.surfaceCaseId!==s||!Gn(m?.surfaceIdentity,C)||!Number.isFinite(g?.x)||!Number.isFinite(g?.z))throw Error("Velocity report surface reference identity mismatch");const[B,M]=Qt(x.lattice,g),b=c.streamlines?.stepFraction;if(c.streamlines!==void 0&&(x.frame!==1049||c.domain.id!=="collaborator-native"||![.125,.25].includes(b)))throw Error("Velocity report streamline step or frame is invalid");if(!ca(B,p)||!ca(M,d)||typeof m.caseNote!="string"||m.caseNote.length>1e3)throw Error("Velocity report surface hotspot or note is invalid");return{request:{frame:x.frame,hotspotXZ:{x:g.x,z:g.z},roiXZ:w,surfaceCaseId:s,caseNote:m.caseNote,surfaceIdentity:C},view:{scaleCells:j,domain:c.domain.id,y:o.yIndex,roi:E,probe:[l.xIndex,l.zIndex],mode:r.mode,zoom:r.zoom,showArrows:f.enabled,tau:_,...b&&{streamlineStepFraction:b}}}}async function Lc(n,a,t,s=Kt){t.throwIfAborted();const c=Yc(n,a),i=a.alignment??Rn(c.request.frame),o=await s(c.request.frame,{signal:t});if(t.throwIfAborted(),!Gn(o.alignment,i)||!Gn(o.lattice,i.lattice))throw Error("Velocity report loaded identity mismatch");return{...c,loaded:o}}function rl(n,a,t){const{plane:s,domain:c}=n,i=new Set(n.samples.arrowNativeIndices),o=["frame,y_index,native_index,x_index,z_index,x,y,z,domain,in_roi,candidate,gt_eligible,common,probe,arrow_anchor,gt_vx,gt_vy,gt_vz,pred_vx,pred_vy,pred_vz,gt_speed,pred_speed,vector_error,speed_delta,direction_tau,angle_eligible,angle_degrees"];for(let r=0;r<a.commonMask.length;r++){const f=a.commonMask[r],l=t.mask[r],m=f?[...a.vectorsGT.subarray(3*r,3*r+3),...a.vectorsPred.subarray(3*r,3*r+3),a.speedGT[r],a.speedPred[r],a.vectorError[r],a.speedDelta[r]]:Array(10).fill("");o.push([s.frame,s.yIndex,r,r%a.width,Math.floor(r/a.width),...a.worldAt(r),c.id,a.roiMask[r],a.candidateMask[r],a.gtEligibleMask[r],f,+(r===n.samples.probe.index),Number(i.has(r)),...m,n.angleThreshold.tau,l,l?t.degrees[r]:""].join(","))}return o.join(`
`)+`
`}function Uc(n,a,t=.25){const{width:s,height:c,stepX:i,stepZ:o,commonMask:r}=n,f=Math.min(i,o),l=f*t,m=f,y=24*f,x=Math.round(y/l),p=1e-8,h=w=>{const[g,,C]=n.worldAt(0);return[g+w[0]*i,C+w[1]*o]};function d(w,g){const[C,B]=w;if(C<0||B<0||C>=s-1||B>=c-1)return{stop:"grid"};const M=Math.floor(C)+s*Math.floor(B),b=C%1,k=B%1,R=[M,M+1,M+s,M+s+1],N=[(1-b)*(1-k),b*(1-k),(1-b)*k,b*k];if(R.some(Z=>!r[Z]))return{stop:"mask"};const F=Z=>R.reduce((K,O,J)=>K+N[J]*g[O*3+Z],0),T=F(0),I=F(2),$=Math.hypot(T,I);return $<=p?{stop:"slow"}:{dir:[T/$/i,I/$/o]}}const u=(w,g,C)=>[w[0]+C*g[0],w[1]+C*g[1]];function S(w){const g=[];let C=a;for(let B=0;B<=x;B++){const M=d(C,w);if(M.stop)return{points:g,stop:M.stop};if(g.push(h(C)),B===x)return{points:g,stop:"limit"};const b=d(u(C,M.dir,l/2),w);if(b.stop)return{points:g,stop:b.stop};const k=u(C,b.dir,l),R=[0,1];for(let N=0;N<2;N++)for(let F=Math.floor(Math.min(C[N],k[N]))+1;F<Math.max(C[N],k[N]);F++)R.push((F-C[N])/(k[N]-C[N]));R.sort((N,F)=>N-F);for(let N=1;N<R.length;N++){const F=d(u(C,b.dir,l*(R[N]+R[N-1])/2),w);if(F.stop)return{points:g,stop:F.stop}}C=k}}const j=S(n.vectorsGT),_=S(n.vectorsPred);let E=null;for(let w=1;w<Math.min(j.points.length,_.points.length);w++){const g=j.points[w],C=_.points[w],B=Math.hypot(g[0]-C[0],g[1]-C[1]);if(B>=m){E={i:w,arc:w*l,gap:B,gt:g,pred:C};break}}return{seed:h(a),step:l,separation:m,maxArc:y,floor:p,gt:j,pred:_,split:E}}const ll="oceanscope.paired-case.v1",dl={plane:"xz",direction:"forward",method:"normalized-midpoint-rk2",interpolation:"bilinear-four-common",separationCells:1,maxArcCells:24,speedFloor:1e-8},ia=n=>JSON.stringify(n,(a,t)=>t&&typeof t=="object"&&!Array.isArray(t)?Object.fromEntries(Object.keys(t).sort().map(s=>[s,t[s]])):t);function st(n,a=.25){if(!Object.hasOwn(Vt,n)||![.125,.25].includes(a))throw Error("Unknown 1049 case or integration step");const t=Vt[n],c={...t.surface,source:{...t.surface.source,declarationsSha256:"b4b0602325141df1c3f185e1578e94eca1b627b3cedd1c96f5401291e574843c"}};return{schema:ll,id:n,...t,surface:c,integration:{...dl,stepFraction:a}}}async function fl(n,a,t,s){const c=st(n.id,n.integration?.stepFraction);for(const M of Object.keys(c))if(ia(n[M])!==ia(c[M]))throw Error("1049 case settings or source identity mismatch: "+M);const i=await Ka(ya,Qa.indexSha256,a),o=Zc(JSON.stringify(c.surface),a,i,{catalog:t}),[r,f]=await Promise.all([ua(o.descriptor,{...Hn(a),frameId:1049},s),Lc(JSON.stringify(c.velocity),{caseId:t[0].id,runId:a.runId},s)]);s.throwIfAborted();const{hotspot:l}=o.diagnosis,{request:m,view:y,loaded:x}=f;if(o.view.frame!==m.frame||l.x!==m.hotspotXZ.x||l.z!==m.hotspotXZ.z||!r.common[l.index]||ia(o.roi)!==ia(m.roiXZ)||l.ix!==y.probe[0]||l.iz!==y.probe[1])throw Error("Surface and velocity selections do not coincide");const p=es({...x,plane:"xz",sliceIndex:y.y,domain:y.domain,roiXZ:y.roi}),h=y.zoom?p.roiView:{x:0,z:0,width:p.width,height:p.height},d=ns(p,y.tau),u=y.showArrows?as(p,h,y.zoom?4:16,void 0,y.scaleCells):null,S=Ln(r,o.diagnosis),j=qn(r,o.roi),_=[r.heightA[l.index],r.heightB[l.index]],E=p.worldAt(0)[1],w=n.crest;w!==void 0&&Yn({...o,profiles:S},w);const g=new TextEncoder().encode(ia(Vt[c.id])),C=await crypto.subtle.digest("SHA-256",g),B=Array.from(new Uint8Array(C),M=>M.toString(16).padStart(2,"0")).join("");return{settings:c,presetSha:B,mark:w,surface:{...o,profiles:S},spatial:r,slice:p,angles:d,arrows:u,height:j,surfaceY:_,velocityY:E,view:y}}function ml(n,a){const t=Uc(n.slice,n.view.probe,a),c={...st(n.settings.id,a),codeRevision:"3e0193c2882ba5b73cf83b55e32d308d67926a4d",evidence:{surfaceY:n.surfaceY,velocityY:n.velocityY,heightROI:n.height,velocityROI:n.slice.local,profiles:n.surface.profiles,streamlines:t}};return n.mark&&(c.crest=n.mark,c.evidence.crests=Yn(n.surface,n.mark)),{record:c,pair:t}}function bl(n,a){const t=[["kind","role","index","x","y","z","arc_or_distance","GT","prediction","difference","vx","vy","vz","stop"]],s=n.surface.diagnosis.hotspot;t.push(["surface-hotspot","",s.index,s.x,"",s.z,"",...n.surfaceY,n.surfaceY[1]-n.surfaceY[0]]);for(const[i,o]of Object.entries(n.surface.profiles))o.points.forEach((r,f)=>t.push(["profile",i,f,r.x,"",r.z,r.distance,r.a,r.b,r.difference]));if(n.mark){const{gt:i,pred:o}=Yn(n.surface,n.mark);for(const[r,f,l]of[["gt",i,n.mark.a],["prediction",o,n.mark.b]])t.push(["crest-"+n.mark.profile,r,l,f.x,"",f.z,f.distance,f.a,f.b,f.difference])}const c=n.slice;for(let i=0;i<c.commonMask.length;i++)if(!(!c.roiMask[i]||!c.commonMask[i]))for(const[o,r]of[["gt",c.vectorsGT],["prediction",c.vectorsPred]])t.push(["velocity-roi",o,i,...c.worldAt(i),"",c.speedGT[i],c.speedPred[i],c.vectorError[i],...r.subarray(i*3,i*3+3)]);for(const[i,o]of[["gt",a.gt],["prediction",a.pred]])o.points.forEach(([r,f],l)=>t.push(["streamline",i,l,r,n.velocityY,f,l*a.step,"","","","","","",l===o.points.length-1?o.stop:""]));return t.map(i=>Array.from({length:14},(o,r)=>i[r]??"").join(",")).join(`
`)+`
`}const pe=(n,a=6)=>n==null?"N/A":Number(n).toPrecision(a);function fe(n,a,t,s,c=1800,i=23,o="#203747"){for(n.fillStyle=o,n.font=`${i}px sans-serif`;n.measureText(String(a)).width>c&&i>12;)n.font=`${--i}px sans-serif`;n.fillText(String(a),t,s)}function Rt(n,a,t,s,c,i=20){n.font=`${i}px sans-serif`,n.fillStyle="#3c5365";let o="";for(const r of String(a).split(" ")){const f=o?o+" "+r:r;n.measureText(f).width>c&&o?(n.fillText(o,t,s),s+=i+8,o=r):o=f}return n.fillText(o,t,s),s+i+8}function Jc(n,a,t,s,c,i,o,r,f,l){const[m,y]=a.descriptor.shape,x=document.createElement("canvas");x.width=y,x.height=m;const p=x.getContext("2d"),h=p.createImageData(y,m),d=s==="difference",u=d&&t.appearance?.absoluteError,S=d?a.common:a[s==="heightA"?"wetA":"wetB"],j=d?[u?0:-l,l]:f;for(let B=0;B<m;B++)for(let M=0;M<y;M++){const b=B*y+M,k=((m-1-B)*y+M)*4;if(!S[b]){h.data.set([225,230,235,255],k);continue}const R=a.heightB[b]-a.heightA[b],N=d?u?Math.abs(R):R:a[s][b],F=Math.max(0,Math.min(1,(N-j[0])/(j[1]-j[0]))),T=d&&!u?F<.5?[80+350*F,130+230*F,220+70*F]:[255,245-350*(F-.5),255-440*(F-.5)]:[35+195*F,75+155*F,155+70*F];h.data.set([...T,255],k)}p.putImageData(h,0,0),n.imageSmoothingEnabled=!1,n.drawImage(x,c,i,o,r);const{originXYZ:[_,,E],spacing:w}=a.descriptor,g=(B,M)=>[c+(B-_+w/2)/(y*w)*o,i+r-(M-E+w/2)/(m*w)*r];n.strokeStyle="#182b3c",n.lineWidth=2;for(const B of t.profiles?Object.values(t.profiles):[t.profile])B?.points.length&&(n.beginPath(),B.points.forEach((M,b)=>n[b?"lineTo":"moveTo"](...g(M.x,M.z))),n.stroke());if(t.roi){const B=g(t.roi.xmin,t.roi.zmax),M=g(t.roi.xmax,t.roi.zmin);n.save(),n.beginPath(),n.rect(c,i,o,r),n.clip(),n.strokeRect(B[0],B[1],M[0]-B[0],M[1]-B[1]),n.restore()}if(t.probe){const[B,M]=g(t.probe.x,t.probe.z);n.beginPath(),n.moveTo(B-5,M),n.lineTo(B+5,M),n.moveTo(B,M-5),n.lineTo(B,M+5),n.stroke()}const C=n.createLinearGradient(c,0,c+o,0);d&&!u?(C.addColorStop(0,"rgb(80,130,220)"),C.addColorStop(.5,"rgb(255,245,255)"),C.addColorStop(1,"rgb(255,70,35)")):(C.addColorStop(0,"rgb(35,75,155)"),C.addColorStop(1,"rgb(230,230,225)")),n.fillStyle=C,n.fillRect(c,i+r+8,o,9),fe(n,`${pe(j[0])} ... ${pe(j[1])} m`,c,i+r+38,o,21),fe(n,`X ${pe(_,4)} ... ${pe(_+(y-1)*w,4)}; Z ${pe(E,4)} ... ${pe(E+(m-1)*w,4)} m`,c,i+r+62,o,19)}function La(n,a,t,s,c,i,o=null,r=null,f="en"){const l=(g,C)=>f==="zh"?g:C,m=a.profile?.points??[],y=m.flatMap(g=>[g.a,g.b]).filter(Number.isFinite);if(fe(n,`${l("剖面：","Section: ")}${r??a.view.plane.toUpperCase()} / ${a.profile?.sampling==="native_columns"?l("原生列","native columns"):a.profile?.sampling==="bilinear_common_four"?l("双线性插值 · 四邻点共同有效","bilinear · all four neighbours valid"):l("无高度剖面","no height profile")}`,t,s,c,24),!y.length){fe(n,l("此截面无有效高度剖面。","No valid height profile for this section."),t,s+50,c);return}const x=o?.[0]??Math.min(...y),p=o?.[1]??Math.max(...y),h=Math.max(p-x,1e-9),d=m[0].distance,u=Math.max(m.at(-1).distance-d,1e-9),S=Math.max(...m.map(g=>Math.abs(g.difference??0)),1e-9),j=t+65,_=s+45,E=c-95,w=i-120;if(a.diagnosis){const g=a.roi?rt(a.profile,a.roi):null;if(g){const B=Math.max(d,g[0]),M=Math.min(d+u,g[1]);M>=B&&(n.fillStyle="#deefee",n.fillRect(j+(B-d)/u*E,_,(M-B)/u*E,w+65))}n.strokeStyle="#888",n.beginPath();const C=j-d/u*E;n.moveTo(C,_),n.lineTo(C,_+w+65),n.stroke(),fe(n,l("热点 t=0","hotspot t=0"),C+3,_,100,16)}n.strokeStyle="#798699",n.lineWidth=1,n.beginPath(),n.moveTo(j,_+w+35),n.lineTo(j+E,_+w+35),n.stroke(),fe(n,"0",t+35,_+w+40,25,18);for(const[g,C]of[["a","#2583c5"],["b","#e08b22"],["difference","#9b4778"]]){n.strokeStyle=C,n.lineWidth=2,n.beginPath();let B=!1;for(const M of m){if(M[g]==null){B=!1;continue}const b=j+(M.distance-d)/u*E,k=g==="difference"?_+w+35-M[g]/S*25:_+w*.7-(M[g]-x)/h*w*.7;n[B?"lineTo":"moveTo"](b,k),B=!0}n.stroke()}if(a.crest)for(const[g,C]of[["a","#176693"],["b","#a75400"]]){const B=m[a.crest[g]],M=j+(B.distance-d)/u*E,b=_+w*.7-(B[g]-x)/h*w*.7;n.strokeStyle=C,n.lineWidth=2,n.beginPath(),n.arc(M,b,5,0,2*Math.PI),n.stroke()}fe(n,`${pe(p,4)} m`,t,_+12,65,16),fe(n,`${pe(x,4)} m`,t,_+w*.7,65,16),fe(n,`B-A ±${pe(S,4)} m`,j,_+w+70,E,18),fe(n,`${l("GT 蓝 / B 橙 / B-A 紫；距离 ","GT blue / B orange / B-A purple; distance ")}${pe(d,5)} ... ${pe(d+u,5)} m`,j,s+i+35,E,18)}function pl(n,a,t=null,s="en"){const c=(d,u)=>s==="zh"?d:u,i=document.createElement("canvas");i.width=1920,i.height=n.diagnosis?2650:2220;const o=i.getContext("2d");if(!o)throw Error("Report canvas unavailable");o.fillStyle="#f6f9fb",o.fillRect(0,0,i.width,i.height),o.fillStyle="#123247",o.fillRect(0,0,1920,170),fe(o,`${c("OceanScope / 分析报告 / 帧 ","OceanScope / analysis report / frame ")}${n.view.frame}`,60,68,1800,43,"#fff"),fe(o,`${n.source.runId} · ${n.createdAt}`,60,115,1800,22,"#d0e6ee"),fe(o,`${c("高度：全部96帧 | 速度：","Height: all96 | Velocity: ")}${n.view.selection.subset==="all"?c("全部96帧","all96"):c("固定六帧","fixed six")} / ${n.view.selection.grid==="fine"?c("原生网格","native grid"):c("XZ 2×2均值","XZ 2×2 mean")}${c(" | ROI：当前原生列"," | ROI: current native columns")}`,60,150,1800,22,"#d0e6ee");let r=1/0,f=-1/0,l=1e-9;for(let d=0;d<a.heightA.length;d++){for(const u of["A","B"])a["wet"+u][d]&&(r=Math.min(r,a["height"+u][d]),f=Math.max(f,a["height"+u][d]));a.common[d]&&(l=Math.max(l,Math.abs(a.heightB[d]-a.heightA[d])))}const m=Number.isFinite(r)?[r,f>r?f:r+1]:[0,1];[["heightA",c("A / Ground Truth","A / Ground Truth")],["heightB",c("B / 预测","B / Prediction")],["difference",n.appearance?.absoluteError?c("|B - A| / 绝对高度差","|B - A| / absolute height"):c("B - A / 有符号高度差","B - A / signed height")]].forEach(([d,u],S)=>{fe(o,u,60+S*620,215,580,28),Jc(o,a,n,d,60+S*620,240,560,320,m,l)});const y=d=>d==null?null:d*100,x=(d,u)=>`${u}: ${d?.common??0}${c(" 共同列 | MAE "," common columns | MAE ")}${pe(y(d?.mae_m))}${c(" cm | Bias "," cm | bias ")}${pe(y(d?.bias_m))} cm | RMSE ${pe(y(d?.rmse_m))} cm`;if(fe(o,x(n.global,c("当前帧高度","Current frame height")),60,645,1800,25),fe(o,n.local?x(n.local,c("选区高度","Selected ROI height")):c("ROI：未选择","ROI: none selected"),60,682,1800,25),fe(o,n.roi?`ROI X [${n.roi.xmin}, ${n.roi.xmax}] / Z [${n.roi.zmin}, ${n.roi.zmax}] m`:c("灰色格点为缺测，不计为零。","Gray cells are unavailable, never zero."),60,719,1800,21),n.profiles){const d=Object.values(n.profiles).flatMap(S=>S.points.flatMap(j=>[j.a,j.b])).filter(Number.isFinite),u=d.length?[Math.min(...d),Math.max(...d)]:[0,1];La(o,{...n,profile:n.profiles.first,crest:n.crestMeasurement&&n.diagnosis.crest.profile==="first"?n.diagnosis.crest:null},60,770,850,300,u,c("热点剖面1","hotspot 1"),s),La(o,{...n,profile:n.profiles.second,crest:n.crestMeasurement&&n.diagnosis.crest.profile==="second"?n.diagnosis.crest:null},990,770,850,300,u,c("热点剖面2","hotspot 2"),s)}else La(o,n,60,770,990,300,null,null,s);if(t&&!n.diagnosis){const d=Math.min(770/t.width,320/t.height);o.drawImage(t,1110+(770-t.width*d)/2,780,t.width*d,t.height*d),fe(o,c("当前帧三维预览；相机保存在 JSON 中","Current-frame 3D preview; camera retained in JSON"),1110,1130,770,20)}else n.diagnosis||Rt(o,`${c("当前帧无三维截图：","No current-frame 3D capture: ")}${n.view.geometryStatus?.reason??c("不可用","unavailable")}${c("。保留原生空间数据和帧身份，不替换为邻帧。",". Native spatial data and frame identity are retained; no neighboring frame substituted.")}`,1120,850,700,25);if(n.diagnosis?.crest){const d=n.diagnosis.crest,u=n.crestMeasurement,S=d.status==="paired"?c("人工配对","Manually paired"):c("峰配对不确定","Correspondence uncertain");fe(o,(d.profile==="first"?c("剖面 1","Profile 1"):c("剖面 2","Profile 2"))+" · "+S+(u?"   Δh "+pe(u.deltaHeight,5)+"   Δs "+pe(u.deltaDistance,5)+"   "+c("场景单位，预测减 GT","scene units, prediction minus GT"):""),60,1115,1800,24)}n.diagnosis?.caseNote&&fe(o,c("案例观察：","Case observation: ")+n.diagnosis.caseNote,60,1155,1800,23),fe(o,c("序列指标 / 明示有效域；完整精度与定义见 CSV + JSON","Sequence metrics / labelled scopes; full precision and definitions in CSV + JSON"),60,1200,1800,29);const p=Math.ceil(n.metrics.length/2);n.metrics.forEach((d,u)=>{const S=u>=p?1:0,j=u%p,_=60+S*930,E=1245+j*35;fe(o,s==="zh"?d.labelZh??d.label:d.label,_,E,620,20),fe(o,`${pe(d.value,8)} ${d.unit}`,_+630,E,260,20)});let h=1840;h=Rt(o,s==="zh"&&n.scope==="Native highest-crossing height columns; ROI/profile do not replace all96 global metrics. Units are source convention, not independently calibrated."?"原生最高过零高度列；ROI / 剖面不替代全部96帧的全局指标。单位沿用来源约定，未独立标定。":n.scope,60,h,1800,22),h=Rt(o,c("实验来源：模型、相机、划分与单位均为来源声明。检查点哈希未知。已核对原始文件清单身份；未独立审计训练历史或物理标定。","Experiment provenance: model / cameras / split / units are source declarations. Checkpoint hash is unknown. Original-file manifest identities were verified; training history and physical calibration were not independently audited."),60,h+8,1800,21);for(const[d,u]of Object.entries(n.source))fe(o,`${d}: ${u}`,60,h+28,1800,18),h+=28;if(n.evidence){let d=2190;fe(o,`${c("热点 (","Hotspot (")}${n.diagnosis.hotspot.ix},${n.diagnosis.hotspot.iz}) X=${pe(n.probe.x)} Z=${pe(n.probe.z)}${c(" | 方向 "," | direction ")}${n.diagnosis.directionDeg}${c(" 度"," deg")}`,60,d,1800,25),d+=42;for(const[u,S]of[[c("帧","Frame"),n.evidence.frame],["ROI",n.evidence.roi]])S&&(fe(o,`${u}${c(": 共同 ",": common ")}${S.common}${c(" / 候选 "," / candidate ")}${S.candidates} / GT ${S.validGT}${c(" / 预测 "," / prediction ")}${S.validPrediction}${c("; 共同/候选 ","; common/candidate ")}${pe(S.coverageCandidate)}${c("; 共同/GT ","; common/GT ")}${pe(S.coverageGT)}`,60,d,1800,21),d+=30,fe(o,`${u}${c(" 最大 |B-A|="," max |B-A|=")}${pe(S.maximum?.absolute)}${c(" m 位置 "," m at ")}${S.maximum?`X=${pe(S.maximum.x)}, Z=${pe(S.maximum.z)}${c(", 索引=",", index=")}${S.maximum.index}${c(", 并列=",", ties=")}${S.maximum.ties}`:"N/A"}`,60,d,1800,21),d+=32);for(const u of["first","second"])for(const S of["full","roi"]){const j=n.evidence[u][S];j&&(fe(o,`${u==="first"?c("剖面1","Profile 1"):c("剖面2","Profile 2")} / ${S==="full"?c("全线","full line"):c("选区内","within ROI")}: n=${j.samples}${c("; 样本平均 MAE=","; sample mean MAE=")}${pe(j.mae)}${c(" m; Bias="," m; bias=")}${pe(j.bias)}${c(" m; 最大="," m; max=")}${pe(j.maximum?.absolute)}${c(" m（非面积统计）"," m (not area statistics)")}`,60,d,1800,20),d+=27)}}return fe(o,c("使用 JSON 在 OceanScope 恢复此快照。必须匹配本地资源；测量值会重新计算。","Restore this snapshot in OceanScope with its JSON. Local resources must match; measurements are recomputed."),60,i.height-25,1800,20),i}const ul={vectorError:{title:"速度向量误差 E",label:"Velocity vector error map",palette:"absolute-error"},speedDelta:{title:"流速大小差 Δs",label:"Velocity speed delta map",palette:"error"},direction:{title:"三维方向夹角",label:"Velocity direction angle map",palette:"absolute-error"}};function dt(n,a="zh"){const t=[{key:"speedGT",title:"GT 流速",label:"Velocity GT speed map",palette:"ground-truth",role:"gt"},{key:"speedPred",title:"预测流速",label:"Velocity prediction speed map",palette:"ground-truth",role:"pred"},{key:n,...ul[n]}],s={speedGT:"GT speed",speedPred:"Prediction speed",vectorError:"Velocity vector error E",speedDelta:"Speed difference Δs",direction:"3D direction angle"};return a==="zh"?t:t.map(c=>({...c,title:s[c.key]}))}function Kc(n,a,t,s){const c=[n+t,a+s];return[[n,a],c,[c[0]-.32*t+.2*s,c[1]-.32*s-.2*t],c,[c[0]-.32*t-.2*s,c[1]-.32*s+.2*t]]}const me=(n,a=6)=>Number.isFinite(n)?n.toPrecision(a):"N/A",rc=n=>n==null?"N/A":(100*n).toFixed(2)+"%";function ve(n,a,t,s,c=1480,i=21,o="#203747"){for(n.fillStyle=o,n.font=`${i}px sans-serif`;n.measureText(String(a)).width>c&&i>14;)n.font=`${--i}px sans-serif`;n.fillText(a,t,s,c)}function lc(n,a,t,s,c,i,o){n.beginPath(),s===0&&c===0?n.arc(a,t,3,0,2*Math.PI):Kc(0,0,s,c).forEach(([r,f],l)=>n[l===0||l===2?"moveTo":"lineTo"](a+r*i,t+f*o)),n.lineCap="round",n.lineJoin="round",n.lineWidth=4,n.strokeStyle="#fff",n.stroke(),n.lineWidth=1.5,n.strokeStyle="#10273c",n.stroke()}function ss(n,a,t,s,c,i,o,r="zh"){const f=(T,I)=>r==="zh"?T:I,{key:l,title:m,palette:y,role:x}=a,{viewport:p,zoom:h,ranges:d}=t.appearance,u=d[x?"speed":l],S=Math.min(470/(p.width*s.stepX),340/(p.height*s.stepZ)),j=S*s.stepX,_=S*s.stepZ,E=p.width*j,w=p.height*_,g=202;ve(n,m,o,186,470,25);const C=document.createElement("canvas");C.width=p.width,C.height=p.height,eo(C.getContext("2d"),{...s,angleSupport:l==="direction"?s.commonMask:null,values:l==="direction"?c.degrees:s[l]},l==="direction"?c.mask:s.commonMask,u,y,p),n.imageSmoothingEnabled=!1,n.drawImage(C,o,g,E,w);const B=T=>o+(T-p.x+.5)*j,M=T=>g+(p.z+p.height-T-.5)*_;n.save(),n.beginPath(),n.rect(o,g,E,w),n.clip();const b=s.roiView;if(!h&&b&&(n.strokeStyle="#9c6900",n.lineWidth=2,n.strokeRect(B(b.x)-j/2,M(b.z+b.height-1)-_/2,b.width*j,b.height*_)),x)for(const T of i){const[I,$]=T[x==="gt"?"gtOffset":"predOffset"];lc(n,B(T.x),M(T.z),I,-$,j,_)}const k=B(t.probe.xIndex),R=M(t.probe.zIndex);k>=o&&k<o+E&&R>=g&&R<g+w&&(n.setLineDash([6,5]),n.beginPath(),n.moveTo(k,g),n.lineTo(k,g+w),n.moveTo(o,R),n.lineTo(o+E,R),n.strokeStyle="#fff",n.lineWidth=3,n.stroke(),n.strokeStyle="#111",n.lineWidth=1,n.stroke()),n.restore();const N=n.createLinearGradient(o,0,o+470,0);for(const T of[0,.5,1])N.addColorStop(T,`rgb(${no(u[0]+T*(u[1]-u[0]),u,y).join(",")})`);n.fillStyle=N,n.fillRect(o,562,470,11);const F=l==="direction"?"°":" m/s";ve(n,`${me(u[0],4)}${l==="speedDelta"?" / 0":""} / ${me(u[1],4)}${F}${x?f(" · 共用色标"," · Shared scale"):""}`,o,599,470),ve(n,l==="direction"?f("X → · Z ↑ · 灰纹：非共同域；浅黄：有效但无夹角","X → · Z ↑ · Grey: outside support; yellow: valid speed, no angle"):f("X → · Z ↑ · 棋盘为不在共同有效域","X → · Z ↑ · Checkerboard: outside common domain"),o,629,470,19),x&&i.length&&t.arrows.referenceSpeed&&(lc(n,o+8,654,t.arrows.referenceGridLength,0,j,_),ve(n,`${f("参考 ","Reference ")}${me(t.arrows.referenceSpeed,4)} m/s · ${i.length}${f(" 个配对点"," paired points")}`,o,683,470,19))}function hl(n,a,t,s,c="zh"){const i=(S,j)=>c==="zh"?S:j,o=document.createElement("canvas");o.width=1560,o.height=1170;const r=o.getContext("2d");if(!r)throw Error("Velocity report canvas unavailable");r.fillStyle="#f6f9fb",r.fillRect(0,0,1560,1170),r.fillStyle="#123247",r.fillRect(0,0,1560,142);const{plane:f,domain:l,roi:m,summary:y,angleThreshold:x,samples:p,source:h,surfaceCase:d}=n;ve(r,`${i("OceanScope · 速度诊断 · 第 ","OceanScope · Velocity diagnosis · frame ")}${f.frame}${i(" 帧"," ")}`,40,60,1480,38,"#fff"),ve(r,`${i("XZ · Y 索引 ","XZ · Y index ")}${f.yIndex}${i(" · 世界 Y "," · World Y ")}${me(f.yWorld,9)} m · ${l.id}`,40,100,1480,24,"#d0e6ee"),ve(r,`${h.caseId} · ${d.surfaceCaseId} · ${n.createdAt}`,40,128,1480,19,"#d0e6ee"),dt(n.appearance.mode,c).forEach((S,j)=>ss(r,S,n,a,t,s?.points??[],40+505*j,c)),ve(r,`ROI X [${me(m.xmin)}, ${me(m.xmax)}] · Z [${me(m.zmin)}, ${me(m.zmax)}] m`,40,724),ve(r,`${i("水面热点 X ","Surface hotspot X ")}${me(d.hotspotXZ.x)} · Z ${me(d.hotspotXZ.z)} · ${d.caseNote.slice(0,150)}`,40,757);const u=p.probe;ve(r,`${i("探针 XYZ (","Probe XYZ (")}${u.xyz.map(S=>me(S)).join(", ")}) · GT ${me(u.speedGT)}${i(" · 预测 "," · Prediction ")}${me(u.speedPred)} · E ${me(u.E)} · Δs ${me(u.speedDelta)}${i(" · 夹角 "," · Angle ")}${me(u.angleDegrees)}°`,40,790),ve(r,u.common?`Vy · GT ${me(u.vectorGT?.[1])} → ${i("预测","Pred")} ${me(u.vectorPred?.[1])} m/s · ${i("颜色：总流速（前两图）；箭头：XZ 投影","Colour: total speed (first two maps); arrows: XZ projection")}`:i("探针不在共同有效域","Probe outside common valid domain"),40,812,1480,17);for(const[S,j,_]of[["whole",i("整切片","Whole slice"),835],["roi","ROI",906]]){const E=y[S],w=y.direction[S];ve(r,`${j}${i(" · 共同 "," · Common ")}${E.counts.common}${i(" / 候选 "," / Candidate ")}${E.counts.candidate}${i(" · 共同/候选 "," · Common/candidate ")}${rc(E.coverageCandidate)}${i(" · 共同/GT "," · Common/GT ")}${rc(E.coverageGT)}${i(" · 平均 E "," · Mean E ")}${me(E.meanE)}${i(" · 平均 Δs "," · Mean Δs ")}${me(E.meanSpeedDelta)}`,40,_),ve(r,`${i("最大 E ","Maximum E ")}${me(E.maximum?.value)}${i(" · 平均三维夹角 "," · Mean 3D angle ")}${me(w.meanDegrees)}${i("° · 夹角有效 ","° · Angle valid ")}${w.count}${i(" · 低速排除 "," · Low-speed excluded ")}${w.excludedLowSpeedCount??"N/A"}`,40,_+30)}return ve(r,`${i("方向阈值 τ = ","Direction threshold τ = ")}${x.tau??i("停用","Disabled")}${i(" · 箭头为 XZ 投影 · 速度 m/s、坐标 m 均沿用来源声明"," · Arrows: XZ projections · Source units: velocity m/s, coordinates m")}`,40,991),ve(r,i("当前 Y 层诊断，非整帧体积评分；物理与时间尺度、向量基底尚未独立标定。","Current Y-layer diagnosis, not a volume score; physical/time scales and vector basis are not independently calibrated."),40,1025,1480,19),ve(r,l.definition.rule??l.id,40,1096,1480,17),ve(r,`${i("代码 ","Code ")}${h.codeRevision}${i(" · 资源 SHA-256 "," · Resource SHA-256 ")}${h.resource.packedSha256}`,40,1064,1480,18),ve(r,i("使用配套 JSON 恢复视图。恢复时核验资源并重算。CSV 保留整层原生格点。","Restore with the companion JSON; resources are verified and metrics recomputed. CSV retains the whole native layer."),40,1128,1480,19),o}function gl(n,a,t="zh"){const s=(y,x)=>t==="zh"?y:x,c=document.createElement("canvas");c.width=1560,c.height=1940;const i=c.getContext("2d");if(!i)throw Error("Velocity comparison canvas unavailable");const{scope:o,result:r,source:f,view:l}=n;i.fillStyle="#f6f9fb",i.fillRect(0,0,c.width,c.height),i.fillStyle="#123247",i.fillRect(0,0,c.width,148),ve(i,s("OceanScope · Best_1027 三帧速度对照","OceanScope · Best_1027 three-frame velocity comparison"),40,56,1480,38,"#fff"),ve(i,`XZ · Y=${o.plane.yIndex} · ROI X [${me(o.roi.xmin)}, ${me(o.roi.xmax)}] Z [${me(o.roi.zmin)}, ${me(o.roi.zmax)}] m · τ=${o.tau} m/s`,40,99,1480,22,"#d0e6ee"),ve(i,`${s("三帧共同有效 ","Common valid across three frames ")}${r.shared}/${r.roiCandidates}${s(" · 夹角共同有效 "," · Common angle-valid ")}${r.sharedAngles}${s(" · 共用色标和箭头比例"," · Shared colour and arrow scales")}`,40,130,1480,21,"#d0e6ee");const m={xIndex:l.probe[0],zIndex:l.probe[1]};return a.rows.forEach(({frame:y,slice:x,angles:p,arrows:h,summary:d},u)=>{const S=155+u*570;ve(i,`${s("帧 ","Frame ")}${y}${s(" · 本帧 ROI "," · Frame ROI ")}${d.nativeRoi}/${r.roiCandidates}${s(" · 共同样本平均 E "," · Common-sample mean E ")}${me(d.meanE)} m/s · Δs ${me(d.meanDelta)}${s(" m/s · 夹角 "," m/s · Angle ")}${me(d.meanAngle)}°`,40,S+25,1480,25),i.save(),i.translate(0,S-129);const j={appearance:{viewport:a.view,zoom:!0,ranges:r.ranges},probe:m,arrows:h};dt(l.mode,t).forEach((_,E)=>ss(i,_,j,x,p,l.arrows?h.points:[],40+505*E,t)),i.restore()}),ve(i,`${s("探针原生 XZ 索引 (","Probe native XZ index (")}${l.probe.join(", ")}${s(") · 棋盘表示未纳入对应共同有效域 · 单位沿用来源声明",") · Checkerboard: outside common support · Source-declared units")}`,40,1890),ve(i,`${s("代码 ","Code ")}${f.codeRevision}${s(" · 逐帧资源身份和恢复设置见配套 JSON · "," · Per-frame resource identities and restore settings: companion JSON ·")}${n.createdAt}`,40,1920,1480,18),c}const ze=(n,a=4)=>Number.isFinite(n)?n.toFixed(a):"—",oa=n=>n.map(a=>ze(a,3)).join(", ");function yl(n,a){const t=[a.seed,...a.gt.points,...a.pred.points],s=t.map(p=>p[0]),c=t.map(p=>p[1]),i=Math.min(...s),o=Math.max(...s),r=Math.min(...c),f=Math.max(...c),l=275/Math.max(o-i,f-r,a.separation*3),m=([p,h])=>[275+(p-(i+o)/2)*l,1225-(h-(r+f)/2)*l];n.fillStyle="#102b3a",n.fillRect(40,1065,470,320);for(const[p,h,d]of[[a.gt,"#66d9eb",[]],[a.pred,"#ffbf69",[6,4]]])if(n.strokeStyle=h,n.lineWidth=3,n.setLineDash(d),n.beginPath(),p.points.forEach((u,S)=>n[S?"lineTo":"moveTo"](...m(u))),n.stroke(),n.setLineDash([]),p.points.length){const[u,S]=m(p.points.at(-1));n.strokeRect(u-4,S-4,8,8)}a.split&&(n.strokeStyle="white",n.beginPath(),n.moveTo(...m(a.split.gt)),n.lineTo(...m(a.split.pred)),n.stroke());const[y,x]=m(a.seed);n.fillStyle="#ff6b86",n.beginPath(),n.arc(y,x,5,0,2*Math.PI),n.fill()}function xl(n,a,t){const s=(g,C)=>t==="zh"?g:C,c=document.createElement("canvas");c.width=1560,c.height=1530;const i=c.getContext("2d"),o=(g,C,B,M=22,b=1480,k="#173848")=>{i.fillStyle=k,i.font=M+"px sans-serif",i.fillText(g,C,B,b)};i.fillStyle="#f9faf7",i.fillRect(0,0,c.width,c.height),i.fillStyle="#123247",i.fillRect(0,0,c.width,108),o("OceanScope  /  Best_1027   ·   1049   /   "+n.settings.id,40,49,34,1480,"white"),o(s("水面重建与同列流动诊断","Surface reconstruction and flow at the same XZ column"),40,86,25,1480,"#d2e6e7");const{surface:r,spatial:f,view:l,slice:m,arrows:y,angles:x}=n,{hotspot:p,directionDeg:h,caseNote:d}=r.diagnosis;let u=1e-9;for(let g=0;g<f.common.length;g++)f.common[g]&&(u=Math.max(u,Math.abs(f.heightB[g]-f.heightA[g])));o(s("水面高度误差","Surface height error")+(r.appearance.absoluteError?"  |Pred − GT|":"  Pred − GT"),40,150,27),Jc(i,f,r,"difference",40,180,420,215,[0,1],u);const S=Object.values(r.profiles).flatMap(g=>g.points.flatMap(C=>[C.a,C.b]).filter(Number.isFinite)),j=[Math.min(...S),Math.max(...S)];if(Object.values(r.profiles).forEach((g,C)=>La(i,{...r,profile:g,crest:n.mark?.profile===["first","second"][C]?n.mark:null},500+510*C,151,495,245,j,h+90*C+"°",t)),n.mark){const g=Yn(r,n.mark);o(s("候选峰","Candidate crests")+" · "+(n.mark.status==="uncertain"?s("对应不确定","uncertain correspondence"):s("人工配对","manually paired"))+"    GT (s,h) "+oa([g.gt.distance,g.gt.a])+"    Pred (s,h) "+oa([g.pred.distance,g.pred.b])+"    Δs "+ze(g.deltaDistance)+"    Δh "+ze(g.deltaHeight),500,457,21,1010)}o(s("热点水面高度","Surface height at hotspot")+"  GT "+ze(n.surfaceY[0])+"  /  Pred "+ze(n.surfaceY[1])+"     XZ ("+oa([p.x,p.z])+")     ROI MAE "+ze(n.height.mae)+"  ·  n="+n.height.common,40,490),o(s("固定高度速度切片","Fixed-height velocity slice")+"    Y["+l.y+"] = "+ze(n.velocityY)+"    ·    "+s("切片与水面共享 XZ，Y 分别取值","Shared XZ column; slice Y and surface Y shown separately"),40,546,27);const _=n.settings.velocity;i.save(),i.translate(0,390),dt(l.mode,t).forEach((g,C)=>ss(i,g,_,m,x,y?.points??[],40+C*505,t)),i.restore(),i.save(),i.translate(0,45),yl(i,a);const E=550;o(s("切片内配对瞬时流线","Paired instantaneous XZ streamlines"),E,1095,28),o(s("青实线 GT，橙虚线预测，红点为种子，白线为首次越阈","GT solid cyan · Prediction dashed orange · Red seed · White first crossing"),E,1135,21,950),o("XZ ("+oa(a.seed)+")    Δs "+ze(a.step,5)+"    Δ ≥ "+ze(a.separation,5)+"    RK2",E,1174),o(a.split?s("首次采样越阈","First sampled crossing")+"   s "+ze(a.split.arc,5)+"   Δ "+ze(a.split.gap,6):s("共同积分段内未越阈","No crossing on the shared trace"),E,1215,24);const w={limit:s("积分长度上限","arc length limit"),mask:s("共同有效域边界","common mask boundary"),grid:s("网格边界","grid boundary"),slow:s("低投影速度","low projected speed")};return[a.gt,a.pred].forEach((g,C)=>o((C?"Pred":"GT")+"   "+w[g.stop]+"    s "+ze((g.points.length-1)*a.step,5)+"    XZ ("+oa(g.points.at(-1)??a.seed)+")",E,1264+C*39,22,950)),o(s("观察","Observation")+"   "+d,40,1430,22,1480),o(s("单位按来源声明。流线距离采用网格世界坐标。","Source-declared units. Streamline distances use grid world coordinates."),40,1462,18),i.restore(),c}function ft({surface:n,mark:a,onApply:t,zh:s,children:c,allowUnpaired:i=!1}){const[o,r]=v.useState(a?.profile??"first"),[f,l]=v.useState(a?.a??""),[m,y]=v.useState(a?.b??""),[x,p]=v.useState(a?.status??"uncertain"),h=n.profiles[o],d=a&&it(n,a);function u(j,_,E){o!==j&&(r(j),l(""),y("")),(_==="a"?l:y)(E),p("uncertain")}if(!n.roi)return c?.(null)??null;const S=a&&(a.profile!==o||a.a!==(f===""?null:f)||a.b!==(m===""?null:m)||a.status!==x);return e.createElement(e.Fragment,null,c?.({pick:u,profile:o,gt:f,pred:m}),e.createElement("fieldset",{"data-os-loc":"src/field/CrestControls.jsx:17:48"},e.createElement("legend",{"data-os-loc":"src/field/CrestControls.jsx:17:58"},s?"剖面候选峰":"Profile crest candidates"),c&&e.createElement("p",{"data-os-loc":"src/field/CrestControls.jsx:18:16"},s?"空心点是候选峰，实心点是当前选择。也可从列表选择，确认后应用。":"Open circles are candidates and filled circles show your selection. Choose on the curves or in the lists, then apply."),e.createElement("label",{"data-os-loc":"src/field/CrestControls.jsx:19:5"},s?"剖面":"Profile"," ",e.createElement("select",{"data-os-loc":"src/field/CrestControls.jsx:19:32","data-os-action":"",value:o,onChange:j=>{r(j.target.value),l(""),y(""),p("uncertain")}},Object.keys(n.profiles).map((j,_)=>e.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:21:50",key:j,value:j},_+1)))),[["a",f,l,"GT"],["b",m,y,s?"预测":"Prediction"]].map(([j,_,E,w])=>e.createElement("label",{"data-os-loc":"src/field/CrestControls.jsx:23:7",key:j},w," ",e.createElement("select",{"data-os-loc":"src/field/CrestControls.jsx:23:32","data-os-action":"","aria-label":"Crest "+j,value:_,onChange:g=>{E(Number(g.target.value)),p("uncertain")}},e.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:24:9",value:"",disabled:!0},s?"选择局部峰":"Select a local peak"),xa(h,n.roi,j).map(g=>e.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:25:55",key:g,value:g},"s ",h.points[g].distance.toFixed(3)," · h ",h.points[g][j].toFixed(4)))))),e.createElement("select",{"data-os-loc":"src/field/CrestControls.jsx:27:5","data-os-action":"","aria-label":"Peak correspondence",value:x,onChange:j=>p(j.target.value)},e.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:28:7",value:"uncertain"},s?"对应不确定":"Correspondence uncertain"),e.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:29:7",value:"paired"},s?"人工配对":"Manually paired")),e.createElement("button",{"data-os-loc":"src/field/CrestControls.jsx:30:5","data-os-action":"",disabled:f===""||m==="",onClick:()=>t({profile:o,a:f,b:m,status:x})},s?"应用峰标记":"Apply crest markers"),i&&e.createElement("button",{"data-os-loc":"src/field/CrestControls.jsx:31:21","data-os-action":"",type:"button",onClick:()=>{l(""),y(""),p("uncertain"),t({profile:o,a:null,b:null,status:"uncertain"})}},s?"标记峰配对不确定":"Record unresolved crest pair"),S&&e.createElement("small",{"data-os-loc":"src/field/CrestControls.jsx:32:15"},s?"当前选择尚未应用，报告仍保留上次标记。":"Apply your selection to update the saved report markers."),a&&e.createElement("p",{"data-os-loc":"src/field/CrestControls.jsx:33:12","aria-label":"Applied crest comparison"},a.profile==="first"?s?"剖面 1":"Profile 1":s?"剖面 2":"Profile 2"," · ",a.status==="paired"?s?"人工配对":"Manually paired":s?"峰配对不确定":"Correspondence uncertain",d&&e.createElement(e.Fragment,null," · ",s?"峰高差":"Crest height difference"," Δh ",d.deltaHeight.toFixed(5)," · ",s?"峰位差":"Crest displacement"," Δs ",d.deltaDistance.toFixed(5)," ",s?"场景单位（预测减 GT，Δs 沿剖面正向）":"scene units (prediction minus GT, Δs along the profile)"))))}function vl({control:n,bundle:a,catalog:t,language:s,onReady:c}){const i=s==="zh",[o,r]=v.useState(null),[f,l]=v.useState(.25),[m,y]=v.useState(!1),[x,p]=v.useState(""),[h,d]=v.useState(null),u=v.useRef(null);v.useEffect(()=>()=>u.current?.abort(),[]);async function S(_,E,w=null){u.current?.abort();const g=new AbortController,C=()=>g.abort();u.current=g,E?.addEventListener("abort",C,{once:!0}),y(!0),p(""),r(null),d(null);try{E?.throwIfAborted();const B=await fl(_,a,t,g.signal);if(g.signal.throwIfAborted(),w&&w!==B.presetSha)throw Error(i?"案例设置已更新，请打开原始报告。":"Case settings changed. Open the original report.");r(B),l(B.settings.integration.stepFraction),c(!!w)}catch(B){throw g.signal.aborted||p(B.message),B}finally{E?.removeEventListener("abort",C),g===u.current&&(u.current=null,y(!1))}}v.useEffect(()=>{const _=g=>{if(g?.page!=="field"||g.section!=="report"||!g.pairedCase)return;const{id:C,stepFraction:B,crest:M,presetSha:b}=g.pairedCase;try{const k=st(C,B);S({...k,...M?{crest:M}:{}},null,b).catch(()=>{})}catch(k){p(k.message)}},E=g=>_(g.detail),w=g=>{g.detail?.includes(1049)&&_(et())};return window.addEventListener("oceanscope-paired-case-mark",E),window.addEventListener("oceanscope-velocity-files",w),_(et()),()=>{window.removeEventListener("oceanscope-paired-case-mark",E),window.removeEventListener("oceanscope-velocity-files",w)}},[a]),v.useImperativeHandle(n,()=>({restore:(_,E)=>S(JSON.parse(_),E)})),v.useEffect(()=>{if(!o)return;let _;try{const{record:E,pair:w}=ml(o,f),g=xl(o,w,s).toDataURL("image/png");_=lt({stem:"OceanScope-1049-"+E.id+"-"+(f===.125?"half":"default")+"-"+s,record:E,csv:bl(o,w),previewUrl:g}),d({data:o,fraction:f,language:s,files:_}),p("")}catch(E){d(null),p(E.message)}return()=>{_&&Object.values(_).forEach(E=>URL.revokeObjectURL(E.href))}},[o,f,s]);const j=h?.data===o&&h?.fraction===f&&h?.language===s?h.files:null;return e.createElement("section",{"data-os-loc":"src/field/PairedCaseReport.jsx:69:10","aria-label":"1049 one-page case",className:"protocol-report","data-paired-case":j?JSON.stringify({id:o.settings.id,presetSha:o.presetSha,stepFraction:f,crest:o.mark}):void 0},e.createElement("h2",{"data-os-loc":"src/field/PairedCaseReport.jsx:70:5"},i?"1049 一页诊断案例":"1049 one-page diagnostic case"),e.createElement("div",{"data-os-loc":"src/field/PairedCaseReport.jsx:71:5",className:"reference-controls"},["A","B"].map(_=>e.createElement("button",{"data-os-loc":"src/field/PairedCaseReport.jsx:71:60","data-os-action":"",key:_,type:"button",onClick:()=>S(st(_)).catch(()=>{})},i?"打开案例 ":"Open case ",_)),o&&e.createElement("label",{"data-os-loc":"src/field/PairedCaseReport.jsx:73:14"},e.createElement("input",{"data-os-loc":"src/field/PairedCaseReport.jsx:73:21","data-os-action":"",type:"checkbox",checked:f===.125,onChange:_=>l(_.target.checked?.125:.25)}),i?"半步长复核":"Half-step check")),o&&e.createElement(ft,{key:o.settings.id,surface:o.surface,mark:o.mark,zh:i,onApply:_=>r({...o,mark:_})}),m&&e.createElement("p",{"data-os-loc":"src/field/PairedCaseReport.jsx:77:12",role:"status"},i?"正在核验水面和速度资源…":"Verifying surface and velocity resources…"),x&&e.createElement("p",{"data-os-loc":"src/field/PairedCaseReport.jsx:78:13",role:"alert"},x),j&&e.createElement(e.Fragment,null,e.createElement("img",{"data-os-loc":"src/field/PairedCaseReport.jsx:79:17",src:j.png.href,alt:i?"1049 水面热点、双剖面、速度切片与配对流线":"1049 hotspot, two profiles, velocity slice and paired streamlines",style:{maxWidth:"100%",height:"auto",display:"block"}}),e.createElement("div",{"data-os-loc":"src/field/PairedCaseReport.jsx:81:7",className:"reference-controls"},["png","csv","json"].map(_=>e.createElement("a",{"data-os-loc":"src/field/PairedCaseReport.jsx:81:75",key:_,href:j[_].href,download:j[_].name},i?"下载":"Download"," ",_.toUpperCase())))))}function El(n,a){const t=String(n?.message??n??""),s=(c,i)=>a?c:i;return/AbortError|cancelled|canceled/i.test(n?.name+" "+t)?s("操作已取消。当前文件可以稍后重新打开。","Operation cancelled. You can reopen the file later."):/too large|^size$/i.test(t)?s("文件过大。请选择本工具导出的分析 JSON；完整报告上限1 MB，场比较方案上限2 MB。","File too large. Choose an exported analysis JSON: reports up to1 MB, field views up to2 MB."):/Invalid analysis JSON|^json$|JSON|Unexpected token|Unexpected end/i.test(t)&&!/(format|Unsupported)/i.test(t)?s("JSON内容不完整或格式有误。请重新选择原始导出文件，或粘贴文件全文。","Invalid or incomplete JSON. Select the original exported file or paste its entire contents."):/Unsupported|^format$/.test(t)?s("这个文件不能恢复分析。请选择完整分析报告、场比较方案或序列选择 JSON；PNG、CSV和数据说明文件只能查看。","This file cannot restore analysis. Choose an analysis-report, field-view or sequence-selection JSON; images, CSV and data-info files are for viewing."):/checksum|identity|mismatch|does not match|^source$/i.test(t)?s("数据或报告身份不匹配。请确认数据组合，使用同一版本导出的报告及配套资源；资源损坏时重新复制并校验，勿修改文件中的身份信息。","Data or report identity differs. Confirm the dataset and use its matching report/resources. Recopy and verify damaged resources; do not edit identity fields."):/404|unavailable|failed to fetch|network|^dataset$|No spatial resource/i.test(t)?s("数据下载未完成。请检查网络并重试；无三维预览的帧仍可查看高度分析。","The data download did not complete. Check your connection and retry. Frames without 3D previews still support height analysis."):/Wait|not ready|loading|Timed out/i.test(t)?s("数据尚未准备好。等待当前组合加载完成后重试；持续失败时检查本页的数据资源提示。","Data is not ready. Wait for the current dataset to load and retry; if it persists, check this page’s resource message."):/View changed/i.test(t)?s("恢复期间视图已改变，已停止应用旧请求。请在当前视图重新打开报告。","The view changed during restoration. Reopen the report from the current view."):s("操作未完成。确认文件来自当前工具、帧号和参数有效，然后重试；具体原因可查看技术详情。","The operation did not complete. Confirm the file comes from this tool and its frame/settings are valid, then retry; technical details are below.")}function sn({error:n,zh:a,resource:t,onRetry:s}){return n?e.createElement("div",{"data-os-loc":"src/AnalysisError.jsx:18:9",className:"analysis-error",role:"alert"},e.createElement("strong",{"data-os-loc":"src/AnalysisError.jsx:18:54"},a?"需要处理的问题":"Action needed"),t&&e.createElement("p",{"data-os-loc":"src/AnalysisError.jsx:18:112"},t),e.createElement("p",{"data-os-loc":"src/AnalysisError.jsx:18:130"},El(n,a)),s&&e.createElement("button",{"data-os-loc":"src/AnalysisError.jsx:18:179","data-os-action":"",type:"button",onClick:s},a?"重新加载资源":"Reload resources"),e.createElement("details",{"data-os-loc":"src/AnalysisError.jsx:18:261"},e.createElement("summary",{"data-os-loc":"src/AnalysisError.jsx:18:270"},a?"技术详情":"Technical details"),e.createElement("code",{"data-os-loc":"src/AnalysisError.jsx:18:320"},String(n?.message??n)))):null}function _l({controlRef:n,ready:a,capture:t,prepareImport:s,applyImport:c,zh:i,unifiedRestore:o=!1}){const[r,f]=v.useState(null),[l,m]=v.useState(""),[y,x]=v.useState(""),[p,h]=v.useState(null),d=v.useRef(null),u=v.useRef(null),S=r?.language===i?r:null;function j(){d.current&&(d.current.abort(),d.current=null,m(i?"恢复已取消，保留新的操作。":"Restore cancelled; newer action retained."))}v.useImperativeHandle(n,()=>({cancel:j,clearSnapshot:()=>f(null),restoreText:(g,C)=>E({size:new TextEncoder().encode(g).length,text:async()=>g},C,!0)})),v.useEffect(()=>()=>d.current?.abort(),[]),v.useEffect(()=>{f(null),m("")},[i]),v.useEffect(()=>{const g=Object.values(S?.files??{}).map(C=>C.href).filter(C=>C?.startsWith("blob:"));return()=>{for(const C of g)URL.revokeObjectURL(C)}},[S?.files]);function _(){try{const g=t(),C=tl(g.record,g.canvas?.toDataURL?.("image/png")??null);f({...g,language:i,previewUrl:C.png?.href??null,files:C}),h(null),m(i?"已生成当前快照，三种导出使用同一报告。":"Snapshot created; all three downloads use this report.")}catch(g){h(g)}}async function E(g,C,B=!1){if(j(),!g)return;const M=new AbortController,b=()=>M.abort();C?.addEventListener("abort",b,{once:!0}),C?.aborted&&M.abort(),d.current=M,h(null),m(i?"正在核验报告与资源…":"Verifying report and resources…");try{if(g.size>1024*1024)throw Error("Report file too large");const k=await g.text();M.signal.throwIfAborted();const R=await s(k,M.signal);M.signal.throwIfAborted(),await c(R,M.signal),M.signal.throwIfAborted(),f(null),m(i?"已恢复帧、截面、选区与可用相机；数值来自重新核验的资源。":"Restored frame, section, ROI and available camera; values recomputed from verified resources.")}catch(k){if(M.signal.aborted||(h(k),m("")),B)throw k}finally{C?.removeEventListener("abort",b),d.current===M&&(d.current=null)}}const w={png:i?"下载汇报图片 PNG":"Download presentation PNG",csv:i?"下载数据表 CSV":"Download data table CSV",json:i?"保存可恢复分析 JSON":"Save restorable analysis JSON"};return e.createElement("section",{"data-os-loc":"src/field/ProtocolReportControls.jsx:25:9",className:"protocol-report","aria-label":"Protocol evidence report"},e.createElement("h3",{"data-os-loc":"src/field/ProtocolReportControls.jsx:25:84"},i?"保存与恢复分析":"Save and restore analysis"),e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:26:3"},i?"先确认当前帧、选区、截面和相机，再生成报告。三种下载使用同一快照；后续修改视图时，请更新快照后再导出。":"Confirm frame, ROI, section and camera, then create a report. All downloads use one snapshot; update it before exporting later view changes."),e.createElement("div",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:3",className:"reference-controls"},e.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:39","data-os-action":"",disabled:!a,onClick:_},S?i?"更新报告快照":"Update report snapshot":i?"生成当前报告":"Create current report"),Object.entries(w).map(([g,C])=>S?.files[g]?e.createElement("a",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:240","data-os-action":"",key:g,className:"report-download",href:S.files[g].href,download:S.files[g].name,onClick:()=>m(i?"下载已交给浏览器，请在下载列表确认文件。也可展开“下载帮助与 JSON 文本”复制完整分析。":"Download handed to the browser. Check its download list; Download help and JSON text also provides the complete analysis for copying.")},C):e.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:573",key:g,disabled:!0},C))),S&&e.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:12"},e.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:21"},i?"下载帮助与 JSON 文本":"Download help and JSON text"),e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:90"},i?"文件由浏览器保存，位置取决于浏览器设置。可在浏览器下载列表中找到文件。继续分析也可选中下方全部 JSON，按 Ctrl+C（Mac：⌘C）复制，再粘贴到顶部“恢复分析”；长期保留请下载 JSON 文件。":"Your browser saves the files according to its download settings. Find them in its download list. To resume without choosing a file, select all JSON below, copy with Ctrl+C (Mac: ⌘C), then paste into Restore analysis. Download the JSON file for long-term storage."),e.createElement("label",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:470"},i?"完整分析 JSON":"Complete analysis JSON",e.createElement("textarea",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:518",ref:u,"aria-label":"Report JSON for copying",rows:"6",readOnly:!0,spellCheck:!1,value:S.files.json.content})),e.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:662","data-os-action":"",type:"button",onClick:()=>{u.current?.focus(),u.current?.select(),m(i?"已选中完整 JSON。按 Ctrl+C（Mac：⌘C）复制。":"Complete JSON selected. Press Ctrl+C (Mac: ⌘C) to copy.")}},i?"选中全部 JSON":"Select all JSON")),!S&&e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:29:13"},i?"生成报告后即可下载。PNG用于展示，CSV保留数值，JSON用于继续同一次分析。":"Create a report to enable downloads. PNG is for presentation, CSV for numbers, and JSON for resuming the analysis."),S&&e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:30:12"},i?"导出快照 · 帧":"Export snapshot · frame"," ",S.record.view.frame," · ",S.record.createdAt," · ",S.record.view.geometry?i?"包含已核验三维":"Verified 3D included":i?"二维证据":"2D evidence"," · ",S.record.view.geometryStatus?.reason," · ",i?"后续操作不会改变此报告；更新快照可保存新状态。":"Later actions do not change this report; update the snapshot to save the new state."),S?.previewUrl&&e.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:24"},e.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:33"},i?"预览汇报图片":"Preview presentation image"),e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:94"},i?"预览与下载使用同一报告。如果浏览器未保存PNG，可在此图片上使用“图片另存为”。":"Preview and download use the same report. If the browser does not save the PNG, use Save image as on this preview."),e.createElement("img",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:265",src:S.previewUrl,alt:i?`帧 ${S.record.view.frame} 汇报图片`:`Frame ${S.record.view.frame} report image`,style:{display:"block",width:"100%",height:"auto"}})),o?e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:32:19"},e.createElement("a",{"data-os-loc":"src/field/ProtocolReportControls.jsx:32:22","data-os-action":"",href:"#restore-analysis",onClick:()=>{const g=document.getElementById("restore-analysis");g&&(g.open=!0)}},i?"恢复分析：选择文件或粘贴 JSON":"Restore analysis: choose a file or paste JSON")):e.createElement(e.Fragment,null,e.createElement("label",{"data-os-loc":"src/field/ProtocolReportControls.jsx:33:3"},i?"导入分析报告 JSON":"Import analysis report JSON"," ",e.createElement("input",{"data-os-loc":"src/field/ProtocolReportControls.jsx:33:59","data-os-action":"",type:"file",accept:"application/json,.json","aria-label":"Restore protocol report",onChange:g=>{E(g.target.files?.[0]),g.target.value=""}})),e.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:3"},e.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:12"},i?"粘贴报告 JSON":"Paste report JSON"),e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:67"},i?"文件选择不可用时，可粘贴报告内容，使用相同的核验与恢复流程。":"If file selection is unavailable, paste the report content for the same verified restoration."),e.createElement("textarea",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:207","data-os-action":"","aria-label":"Protocol report JSON text",rows:"6",value:y,onChange:g=>{j(),x(g.target.value)}}),e.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:332","data-os-action":"",disabled:!y.trim(),onClick:()=>E({size:new TextEncoder().encode(y).length,text:async()=>y})},i?"恢复粘贴的报告":"Restore pasted report"))),e.createElement(sn,{error:p,zh:i}),e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:35:45",role:"status"},l))}const Qc=["xmin","xmax","zmin","zmax"];function wl(n){return Number(n.toFixed(4)).toString()}function Wa(n){return Object.fromEntries(Qc.map(a=>[a,wl(n[a])]))}function Sl(n,a,t){const s={},c={};for(const i of Qc)!n[i]?.trim()||!Number.isFinite(Number(n[i]))?c[i]="number":s[i]=t[i]?Number(n[i]):a[i];for(const[i,o]of[["xmin","xmax"],["zmin","zmax"]])!c[i]&&!c[o]&&s[i]>s[o]&&(c[i]="order",c[o]="order");return{values:s,errors:c,valid:Object.keys(c).length===0}}function zt({profile:n,roi:a,limits:t,label:s,errorLimit:c,reviewId:i,crestPicker:o,profileKey:r}){const{language:f}=ue(),l=(E,w)=>f==="zh"?E:w,m=n.points,y=m[0].distance,x=m.at(-1).distance,p=Math.max(x-y,1e-9),h=Math.max(t[1]-t[0],1e-9),d=c??Math.max(1e-9,...m.map(E=>Math.abs(E.difference??0))),u=E=>45+(E-y)/p*620,S=E=>170-(E-t[0])/h*135,j=a?rt(n,a):null;function _(E){let w=!1;return m.map(g=>{if(!Number.isFinite(g[E]))return w=!1,"";const C=w?"L":"M";return w=!0,`${C}${u(g.distance)},${E==="difference"?245-g[E]/d*38:S(g[E])}`}).join(" ")}return e.createElement("figure",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:9","data-review-id":i,"data-profile-axis":[y,x,45,665].join(",")},e.createElement("figcaption",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:88"},s," · ",n.sampling==="native_columns"?l("原生列","Native columns"):l("插值诊断 · 四邻点共同有效","Interpolated diagnosis · all four neighbours valid")),e.createElement("svg",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:259",viewBox:"0 0 710 300",role:"img","aria-label":s},j&&e.createElement("rect",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:14:13",x:u(Math.max(y,j[0])),y:"25",width:Math.max(0,u(Math.min(x,j[1]))-u(Math.max(y,j[0]))),height:"255",fill:"#4ba8ad",opacity:".13"}),e.createElement("line",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:2",x1:u(0),x2:u(0),y1:"25",y2:"280",stroke:"#666",strokeDasharray:"4 3"}),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:82",x:u(0)+4,y:"20"},l("热点 0","Hotspot 0")),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:136",x:"3",y:"40"},t[1].toFixed(3)),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:184",x:"3",y:"175"},t[0].toFixed(3)),e.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:233",d:_("a"),fill:"none",stroke:"#2583c5",strokeWidth:"2"}),e.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:299",d:_("b"),fill:"none",stroke:"#e08b22",strokeWidth:"2"}),e.createElement("line",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:365",x1:"45",x2:"665",y1:"245",y2:"245",stroke:"#888"}),e.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:421",d:_("difference"),fill:"none",stroke:"#9b4778"}),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:480",x:"2",y:"245"},"B−A"),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:510",x:"45",y:"298"},y.toFixed(3)," m"),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:555",x:"540",y:"298"},x.toFixed(3)," m"),o&&a&&["a","b"].map(E=>xa(n,a,E).map(w=>{const g=o.profile===r&&(E==="a"?o.gt:o.pred)===w;return e.createElement("circle",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:17:11","data-os-action":"",key:E+w,"data-crest-field":E,"data-sample":w,cx:u(m[w].distance),cy:S(m[w][E]),r:g?6:4,fill:g?E==="a"?"#176693":"#a75400":"white",stroke:E==="a"?"#176693":"#a75400",style:{cursor:"pointer"},onClick:()=>o.pick(r,E,w)},e.createElement("title",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:19:84"},E==="a"?"GT":l("预测","Prediction")," · s ",m[w].distance.toFixed(4)))}))),!m.some(E=>E.a!==null)&&e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:20:38"},l("此剖面无共同有效高度。","No common valid height on this profile.")))}const pn=n=>n==null?"N/A":(n*100).toFixed(4)+" cm";function dc({value:n,label:a}){const{language:t}=ue(),s=(c,i)=>t==="zh"?c:i;return e.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:8",className:"diagnostic-evidence","aria-label":a},e.createElement("strong",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:64"},a),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:88"},"MAE ",pn(n.mae)," · Bias ",pn(n.bias)," · RMSE ",pn(n.rmse)),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:174"},s("候选原生列 ","Candidate native columns "),n.candidates,s(" / GT有效 "," / GT valid "),n.validGT,s(" / 预测有效 "," / Prediction valid "),n.validPrediction,s(" / 共同有效 "," / Common valid "),n.common),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:394"},s("共同/候选 ","Common/candidate "),n.coverageCandidate==null?"N/A":(n.coverageCandidate*100).toFixed(2)+"%",s(" · 共同/GT "," · Common/GT "),n.coverageGT==null?"N/A":(n.coverageGT*100).toFixed(2)+"%"),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:616"},s("最大绝对误差 ","Maximum absolute error "),pn(n.maximum?.absolute)," ",n.maximum&&e.createElement(e.Fragment,null,s("· 有符号 ","· Signed "),pn(n.maximum.signed),s(" · 原生索引 ("," · Native index ("),n.maximum.ix,",",n.maximum.iz,") · X ",n.maximum.x.toFixed(6)," / Z ",n.maximum.z.toFixed(6),s(" · 并列 "," · Ties "),n.maximum.ties,s("（按索引取首点）"," (first point by index)"))))}function fc({value:n,label:a}){const{language:t}=ue(),s=(c,i)=>t==="zh"?c:i;return e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:28:8","aria-label":a},a,s(" · 有效样本 "," · Valid samples "),n.samples," · MAE ",pn(n.mae)," · Bias ",pn(n.bias),s(" · 最大 "," · Maximum "),pn(n.maximum?.absolute))}function jl({spatial:n,diagnosis:a,roi:t,onDirection:s,onRegion:c,mode:i,setMode:o,onExit:r,onNote:f,onCrest:l}){const{language:m}=ue(),y=(E,w)=>m==="zh"?E:w,[x,p]=v.useState(""),h=v.useMemo(()=>a?Ln(n,a):null,[n,a]),d=v.useMemo(()=>qn(n),[n]),u=v.useMemo(()=>t?qn(n,t):null,[n,t]),S=h?[...h.first.points,...h.second.points].flatMap(E=>[E.a,E.b]).filter(Number.isFinite):[],j=S.length?[Math.min(...S),Math.max(...S)]:[0,1];function _(E){E.preventDefault();const w=new FormData(E.currentTarget),g=Number(w.get("cx")),C=Number(w.get("cz")),B=Number(w.get("width")),M=Number(w.get("length"));if(![g,C,B,M].every(Number.isFinite)||B<n.descriptor.spacing||M<n.descriptor.spacing){p(y("尺寸至少为一个网格间距，请填写有限数字。","Enter finite numbers; each dimension must span at least one grid spacing."));return}const b={xmin:g-B/2,xmax:g+B/2,zmin:C-M/2,zmax:C+M/2};if(ha(b,ot(n)).clipped){p(y("选区超出数据范围，请缩小尺寸或移动中心。","The ROI exceeds the data bounds. Reduce its size or move its centre."));return}c(b),p("")}return e.createElement("section",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:9","aria-label":"Hotspot diagnosis"},e.createElement("h3",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:49"},y("热点与双剖面 · 最高过零高度","Hotspot and paired profiles · highest zero-crossing height")),e.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:141",className:"hotspot-actions"},e.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:174","data-os-action":"","aria-pressed":i==="select",onClick:()=>o("select")},y("定位热点","Locate hotspot")),e.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:282","data-os-action":"","aria-pressed":i==="adjust",onClick:()=>o("adjust")},y("调整选区","Adjust ROI"))),a?e.createElement(e.Fragment,null,e.createElement("details",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:176"},e.createElement("summary",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:185"},y("案例观察与备注","Case observation and notes")),e.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:247"},y("案例观察（120字以内，非自动归因）","Case observation (up to 120 characters; no automatic attribution)"),e.createElement("textarea",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:347","data-os-action":"","aria-label":"Diagnosis case note",maxLength:"120",value:a.caseNote??"",onChange:E=>f(E.target.value)}))),e.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:493","data-os-action":"",onClick:r},y("退出热点诊断","Exit hotspot diagnosis")),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:565","aria-label":"Hotspot coordinates"},y("帧 ","Frame "),a.frame,y(" · 索引 ("," · Index ("),a.hotspot.ix,", ",a.hotspot.iz,") · X ",a.hotspot.x.toFixed(6)," / Z ",a.hotspot.z.toFixed(6)," m"),e.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:790"},y("剖面方向（场景轴 / 手动方向）","Profile direction (scene axes / manual angle)"),e.createElement("input",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:868","data-os-action":"","aria-label":"Hotspot direction",type:"number",min:"0",max:"180",step:"1",value:a.directionDeg,onChange:E=>{const w=E.target.valueAsNumber;Number.isFinite(w)&&w>=0&&w<=180&&s(w%180)}})),e.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:1089","data-os-action":"",onClick:()=>s(0)},y("回到场景轴","Reset to scene axes"))):e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:14"},y("在任意高度图点击共同有效点，暂停并创建双剖面；固定 ROI 保持原位。","Click a common valid point on any height map to pause and create paired profiles; fixed ROI stays in place.")),t&&e.createElement("details",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:8"},e.createElement("summary",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:17"},y("修改固定 ROI 的中心和尺寸","Edit fixed ROI centre and size")),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:91","aria-label":"Hotspot ROI summary"},y("ROI中心 X ","ROI centre X "),((t.xmin+t.xmax)/2).toFixed(4)," / Z ",((t.zmin+t.zmax)/2).toFixed(4),y(" · 宽 "," · Width "),(t.xmax-t.xmin).toFixed(4),y(" / 长 "," / Length "),(t.zmax-t.zmin).toFixed(4),y(" m（来源约定，未独立标定）"," m (source convention; not independently calibrated)")),e.createElement("form",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:428",key:JSON.stringify(t),onSubmit:_,className:"hotspot-roi-edit"},[["cx",y("中心X","Centre X"),(t.xmin+t.xmax)/2],["cz",y("中心Z","Centre Z"),(t.zmin+t.zmax)/2],["width",y("X宽","X width"),t.xmax-t.xmin],["length",y("Z长","Z length"),t.zmax-t.zmin]].map(([E,w,g])=>e.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:726",key:E},w,e.createElement("input",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:751",required:!0,name:E,"aria-label":"Hotspot ROI "+E,type:"number",step:"any",defaultValue:g}))),e.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:869"},y("应用中心与尺寸","Apply centre and dimensions")))),x&&e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:39:14",role:"alert"},x),a&&t&&(a.hotspot.x<t.xmin||a.hotspot.x>t.xmax||a.hotspot.z<t.zmin||a.hotspot.z>t.zmax)&&e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:39:185"},y("热点在选区外；剖面仍锚定原热点。","The hotspot is outside the ROI; profiles remain anchored to the original hotspot.")),h&&e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:40:15"},y("蓝色GT / 橙色预测；紫色B−A。横轴为距热点的有符号距离；阴影为ROI交段，缺测断线。两图共享高度范围。","GT blue / prediction orange / B−A purple. Signed distance from the hotspot; shading marks the ROI intersection. Missing samples break the line. Both plots share a height range.")),e.createElement(ft,{key:JSON.stringify([a.hotspot.index,a.directionDeg,t,a.crest]),surface:{profiles:h,roi:t},mark:a.crest,onApply:l,zh:m==="zh",allowUnpaired:!!t},E=>e.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:40:493",className:"hotspot-profiles"},e.createElement(zt,{crestPicker:E,profileKey:"first",reviewId:"hotspot-profile-along",profile:h.first,roi:t,limits:j,label:y("热点剖面1","Hotspot profile 1")}),e.createElement(zt,{crestPicker:E,profileKey:"second",reviewId:"hotspot-profile-across",profile:h.second,roi:t,limits:j,label:y("热点剖面2","Hotspot profile 2")}))),[["first",y("剖面1","Profile 1")],["second",y("剖面2","Profile 2")]].map(([E,w])=>{const g=Tt(h[E],t);return e.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:40:1031",key:E},e.createElement(fc,{value:g.full,label:w+y("全线 · 样本等权"," · Full line · equal sample weights")}),g.roi&&e.createElement(fc,{value:g.roi,label:w+y("选区内 · 样本等权"," · Within ROI · equal sample weights")}))}),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:40:1259"},y("剖面统计按曲线样本等权，不等同原生列面积统计。可到“报告与恢复”生成含双剖面的PNG、CSV和可恢复JSON。","Profile statistics weight curve samples equally; they are not native-column area statistics. Open Reports & restore to generate PNG, CSV and restorable JSON with both profiles."))),e.createElement("details",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:41:2",className:"workspace-support-details"},e.createElement("summary",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:41:49"},y("原生列统计与有效域明细","Native-column statistics and support details")),e.createElement(dc,{value:d,label:y("全域诊断 · 原生列","Full-domain diagnosis · native columns")}),u&&e.createElement(dc,{value:u,label:y("ROI诊断 · 原生列","ROI diagnosis · native columns")})))}const mc={schema:"oceanscope.half-sample.v1",formula:"A*cos(2*pi*(x-c)/wavelength)",wavelength:2,amplitude:1,referenceCentre:0,shift:.0125,dx:.025,first:-40,last:40,units:"scene"};function bc(){const n=mc,a=(l,m)=>n.amplitude*Math.cos(2*Math.PI*(l-m)/n.wavelength),t=Array.from({length:n.last-n.first+1},(l,m)=>{const y=(n.first+m)*n.dx;return{x:y,z:0,a:a(y,n.referenceCentre),b:a(y,n.referenceCentre+n.shift)}}),s={xmin:-1,xmax:1,zmin:0,zmax:0},c=l=>xa({points:t},s,l).map(m=>t[m].x),i=t.find(l=>l.x===c("a")[0]),o=Math.max(...t.map(l=>l.b)),r=t.filter(l=>l.b===o),f={referenceX:i.x,referenceHeight:i.a,strictShiftedCandidates:c("b"),highestSampleXs:r.map(l=>l.x),highestSampleHeight:o,shiftErrorsIfEndpointChosen:r.map(l=>l.x-i.x-n.shift),heightError:o-n.amplitude,midpointEstimate:(r[0].x+r.at(-1).x)/2};return{points:t,report:{recipe:mc,readings:f}}}function Cl({zh:n}){const[a,t]=v.useState(null),[s,c]=v.useState(null),[i,o]=v.useState(""),r=v.useRef(null),f=(d,u)=>n?d:u;async function l(d){if(d)try{const u=bc(),S=JSON.parse(await d.text());if(JSON.stringify(S)!==JSON.stringify(u.report))throw Error();c(u),o(f("已重新采样并核对读数","Resampled and verified"))}catch{o(f("文件与半格对照不匹配","File does not match the half-step control"))}}const m=s?.report.readings,y=s?.report.recipe,x=d=>63+(d+.05)*4800,p=d=>180-(d-.999)*24e3;function h(d){const u=[["quantity","truth","sample_readout","signed_error","interpretation"],["peak_x_left",y.shift,m.highestSampleXs[0],m.shiftErrorsIfEndpointChosen[0],"tied endpoint"],["peak_x_right",y.shift,m.highestSampleXs[1],m.shiftErrorsIfEndpointChosen[1],"tied endpoint"],["peak_height",y.amplitude,m.highestSampleHeight,m.heightError,"sample maximum"],["peak_x_midpoint",y.shift,m.midpointEstimate,m.midpointEstimate-y.shift,"symmetry estimate only"],["strict_shifted_crest_count","",m.strictShiftedCandidates.length,"","strictly higher than both neighbours"]].map(S=>S.join(",")).join(`
`);kn("half-sample."+d,{json:"application/json",csv:"text/csv",svg:"image/svg+xml"}[d],d==="json"?JSON.stringify(s.report,null,2):d==="csv"?u:r.current.outerHTML)}return e.createElement("section",{"data-os-loc":"src/field/HalfSample.jsx:28:9","aria-label":"Half-sample crest"},e.createElement("h3",{"data-os-loc":"src/field/HalfSample.jsx:28:49"},f("半格平移：峰顶落在哪里？","Half-step shift: where is the crest?")),e.createElement("button",{"data-os-loc":"src/field/HalfSample.jsx:29:2","data-os-action":"",onClick:()=>{c(bc()),o("")}},f("查看半格平移","Inspect half-step shift"))," ",e.createElement("label",{"data-os-loc":"src/field/HalfSample.jsx:29:120"},f("恢复半格 JSON","Restore half-step JSON")," ",e.createElement("input",{"data-os-loc":"src/field/HalfSample.jsx:29:169","data-os-action":"",type:"file",accept:".json","aria-label":"Restore half-step JSON",onChange:d=>{l(d.target.files[0]),d.target.value=""}})),e.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:29:310",role:"status"},i),s&&e.createElement(e.Fragment,null,e.createElement("svg",{"data-os-loc":"src/field/HalfSample.jsx:30:11",ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 720 350",role:"img","aria-label":"Half-step crest detail",style:{width:"100%",maxWidth:900},fontFamily:"sans-serif",fill:"#18374b"},e.createElement("rect",{"data-os-loc":"src/field/HalfSample.jsx:31:2",width:"720",height:"350",fill:"#f7fbfd"}),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:31:49",x:"24",y:"35",fontSize:"22"},"半格平移 / Half-step crest"),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:31:112",x:"24",y:"61",fontSize:"15"},"Δx = 0.025   ·   c: 0 → 0.0125   ·   A = 1   ·   scene units"),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:32:2",x:"24",y:"99",fontSize:"14"},"峰顶放大 / Crest detail"),[1,.999,.997].map(d=>e.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:33:24",key:d},e.createElement("path",{"data-os-loc":"src/field/HalfSample.jsx:33:35",d:"M63 "+p(d)+"h605",stroke:"#d8e3e7"}),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:33:82",x:"12",y:p(d)+5},d))),e.createElement("defs",{"data-os-loc":"src/field/HalfSample.jsx:34:2"},e.createElement("clipPath",{"data-os-loc":"src/field/HalfSample.jsx:34:8",id:"half-crest-zoom"},e.createElement("rect",{"data-os-loc":"src/field/HalfSample.jsx:34:39",x:"63",y:"132",width:"605",height:"128"}))),e.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:35:2",clipPath:"url(#half-crest-zoom)"},["a","b"].map((d,u)=>e.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:35:60",key:d,fill:u?"#bd5010":"#19658a",stroke:u?"#bd5010":"#19658a"},e.createElement("polyline",{"data-os-loc":"src/field/HalfSample.jsx:35:131",fill:"none",strokeWidth:"2",points:s.points.map(S=>x(S.x)+","+p(S[d])).join(" ")}),s.points.filter(S=>S.x>=-.05&&S.x<=.075).map(S=>e.createElement("circle",{"data-os-loc":"src/field/HalfSample.jsx:35:280",key:S.x,cx:x(S.x),cy:p(S[d]),r:"4"}))))),e.createElement("path",{"data-os-loc":"src/field/HalfSample.jsx:36:2",d:"M"+x(y.shift)+" 120V260",stroke:"#654493",strokeDasharray:"4 3"}),e.createElement("circle",{"data-os-loc":"src/field/HalfSample.jsx:36:78",cx:x(y.shift),cy:p(1),r:"5",stroke:"#654493",strokeWidth:"2",fill:"white"}),[-.025,0,.025,.05].map(d=>e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:37:29",x:x(d),y:"279",textAnchor:"middle",key:d},d)),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:38:2",x:"24",y:"309",fontSize:"15"},"蓝 / Reference　 橙 / Shifted samples　 ○ 解析峰 / True crest"),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:38:98",x:"24",y:"333",fontSize:"14"},"x ∈ {0, 0.025}　 ·　 sampled height = ",m.highestSampleHeight.toFixed(9))),e.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:39:2"},f("严格局部峰：","Strict local crests: "),m.strictShiftedCandidates.length,"。",f("两个最高采样点等高，不能唯一读回峰位。","The two highest samples tie; neither is a unique crest.")),e.createElement("table",{"data-os-loc":"src/field/HalfSample.jsx:40:2"},e.createElement("thead",{"data-os-loc":"src/field/HalfSample.jsx:40:9"},e.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:40:16"},(n?["量","解析真值","采样读数","读数减真值"]:["Quantity","Truth","Sample readout","Readout minus truth"]).map(d=>e.createElement("th",{"data-os-loc":"src/field/HalfSample.jsx:40:121",key:d},d)))),e.createElement("tbody",{"data-os-loc":"src/field/HalfSample.jsx:40:156"},e.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:40:163"},e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:167"},f("峰位","Crest x")),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:195"},y.shift),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:213"},m.highestSampleXs.join(" / ")),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:253"},m.shiftErrorsIfEndpointChosen.join(" / +"))),e.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:40:311"},e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:315"},f("峰高","Elevation")),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:345"},y.amplitude),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:367"},m.highestSampleHeight.toFixed(9)),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:410"},m.heightError.toFixed(9))))),e.createElement(ft,{surface:{roi:{xmin:-1,xmax:1,zmin:0,zmax:0},profiles:{first:{points:s.points.map(d=>({...d,distance:d.x}))}}},mark:a,onApply:t,zh:n,allowUnpaired:!0}),e.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:42:2"},f("若利用对称性，两个最高点的中点估计为","Using symmetry, the midpoint estimate is")," ",m.midpointEstimate,"。",f("这是估计值，并非某个采样点的位置。","This estimate is not a sampled position.")),["json","svg","csv"].map(d=>e.createElement("button",{"data-os-loc":"src/field/HalfSample.jsx:43:33","data-os-action":"",key:d,onClick:()=>h(d)},f("导出","Export")," ",d.toUpperCase()))))}const ct={schema:"oceanscope.analytic-wave.v1",formula:"A*cos(2*pi*(x-c)/wavelength)",units:"scene",xmin:-1,xmax:1,dx:.025,wavelength:2,reference:{A:1,c:0},controls:[{id:"height",A:.75,c:0},{id:"position",A:1,c:.25}]},ei=n=>n.controls.map(a=>{const t=(y,x)=>y.A*Math.cos(2*Math.PI*(x-y.c)/n.wavelength),s=Array.from({length:1+Math.round((n.xmax-n.xmin)/n.dx)},(y,x)=>{const p=n.xmin+x*n.dx;return{x:p,z:0,distance:p,a:t(n.reference,p),b:t(a,p)}}),c={points:s},i={xmin:n.xmin,xmax:n.xmax,zmin:0,zmax:0},o=y=>{const x=xa(c,i,y);if(x.length!==1)throw Error("Expected one interior crest");return x[0]},{gt:r,pred:f,deltaHeight:l,deltaDistance:m}=Yn({roi:i,profiles:{first:c}},{profile:"first",a:o("a"),b:o("b"),status:"paired"});return{points:s,result:{id:a.id,gtX:r.x,gtHeight:r.a,predX:f.x,predHeight:f.b,expectedHeight:a.A-n.reference.A,measuredHeight:l,expectedShift:a.c-n.reference.c,measuredShift:m}}}),Ua=ei(ct),$t={recipe:ct,readings:Ua.map(n=>n.result)},Bl=JSON.stringify($t,null,2);function Al({zh:n}){const[a,t]=v.useState(null),s=v.useRef(null),[c,i]=v.useState(!1),[o,r]=v.useState("");async function f(l){if(l)try{const m=JSON.parse(await l.text()),y=(x,p)=>x===p||x&&p&&typeof x=="object"&&typeof p=="object"&&Object.keys(x).length===Object.keys(p).length&&Object.keys(x).every(h=>Object.hasOwn(p,h)&&y(x[h],p[h]));if(!y(m.recipe,ct)||!y(m.readings,ei(ct).map(x=>x.result)))throw Error();i(!0),r(n?"已重新采样并核对读数":"Resampled and verified")}catch{r(n?"此文件与解析对照不匹配":"File does not match this control")}}return e.createElement("section",{"data-os-loc":"src/field/AnalyticWave.jsx:25:9","aria-label":"Analytic wave control"},e.createElement("h3",{"data-os-loc":"src/field/AnalyticWave.jsx:25:53"},n?"解析波面校验":"Analytic wave control"),e.createElement("button",{"data-os-loc":"src/field/AnalyticWave.jsx:25:99","data-os-action":"",onClick:()=>i(!0)},n?"打开峰高与峰位对照":"Open crest controls")," ",e.createElement("label",{"data-os-loc":"src/field/AnalyticWave.jsx:25:180"},n?"恢复解析波面 JSON":"Restore analytic JSON"," ",e.createElement("input",{"data-os-loc":"src/field/AnalyticWave.jsx:25:230","data-os-action":"",type:"file","aria-label":"Restore analytic JSON",accept:".json",onChange:l=>{f(l.target.files[0]),l.target.value=""}})),e.createElement("p",{"data-os-loc":"src/field/AnalyticWave.jsx:25:370",role:"status"},o),c&&e.createElement(e.Fragment,null,e.createElement("svg",{"data-os-loc":"src/field/AnalyticWave.jsx:26:11",xmlns:"http://www.w3.org/2000/svg",ref:s,role:"img","aria-label":"Analytic crest comparison",viewBox:"0 0 760 370",style:{width:"100%",maxWidth:920},fontFamily:"sans-serif",fill:"#173950"},e.createElement("rect",{"data-os-loc":"src/field/AnalyticWave.jsx:27:2",width:"760",height:"370",fill:"#f7fbfd"}),e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:27:49",x:"24",y:"32",fontSize:"21"},"解析波面校验 / Analytic crest controls"),e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:27:122",x:"24",y:"58",fontSize:"14"},"η = A cos(2π(x−c)/2)   ·   Δx = 0.025   ·   81 samples   ·   scene units"),Ua.map(({points:l,result:m},y)=>{const x=h=>70+y*370+(h+1)*140,p=h=>199-h*78;return e.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:29:9",key:m.id},e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:29:23",x:x(-1),y:"94",fontSize:"16"},y?"仅平移 / Shift only":"仅降幅 / Amplitude only"),e.createElement("path",{"data-os-loc":"src/field/AnalyticWave.jsx:30:2",d:`M${x(-1)} 113V280H${x(1)} M${x(-1)} 199H${x(1)}`,fill:"none",stroke:"#b3c5cb"}),[-1,0,1].map(h=>e.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:30:109",key:h},e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:30:120",x:x(h)-5,y:"298"},h),e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:30:155",x:x(-1)-28,y:p(h)+4},h))),["a","b"].map((h,d)=>e.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:31:24",key:h,stroke:d?"#bf540e":"#11669b",fill:"none"},e.createElement("polyline",{"data-os-loc":"src/field/AnalyticWave.jsx:31:78",strokeWidth:"2.5",strokeDasharray:d?"6 3":void 0,points:l.map(u=>x(u.x)+","+p(u[h])).join(" ")}),e.createElement("circle",{"data-os-loc":"src/field/AnalyticWave.jsx:31:196",cx:x(d?m.predX:m.gtX),cy:p(d?m.predHeight:m.gtHeight),r:"4",fill:"white",strokeWidth:"2"}))),e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:32:2",x:x(-1),y:"324"},"Δη = ",m.measuredHeight.toFixed(2),"   ·   Δx crest = ",m.measuredShift.toFixed(2)))}),e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:33:2",x:"25",y:"355",fontSize:"14"},"蓝实线 Reference　 橙虚线 Perturbation　 ○ 采样峰顶 / Sampled crest")),e.createElement("table",{"data-os-loc":"src/field/AnalyticWave.jsx:34:2"},e.createElement("thead",{"data-os-loc":"src/field/AnalyticWave.jsx:34:9"},e.createElement("tr",{"data-os-loc":"src/field/AnalyticWave.jsx:34:16"},(n?["对照","峰高差：设定 / 读回","峰位差：设定 / 读回"]:["Control","Crest elevation: set / read","Crest shift: set / read"]).map(l=>e.createElement("th",{"data-os-loc":"src/field/AnalyticWave.jsx:34:136",key:l},l)))),e.createElement("tbody",{"data-os-loc":"src/field/AnalyticWave.jsx:34:171"},Ua.map(({result:l})=>e.createElement("tr",{"data-os-loc":"src/field/AnalyticWave.jsx:34:202",key:l.id},e.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:34:217"},l.id),e.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:34:232"},l.expectedHeight," / ",l.measuredHeight),e.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:34:280"},l.expectedShift," / ",l.measuredShift))))),e.createElement(ft,{surface:{roi:{xmin:-1,xmax:1,zmin:0,zmax:0},profiles:{first:{points:Ua[0].points}}},mark:a,onApply:t,zh:n,allowUnpaired:!0}),e.createElement("p",{"data-os-loc":"src/field/AnalyticWave.jsx:36:2"},n?"峰顶在采样点上。此对照检验剖面峰值读数，不代表真实重建精度。":"Crests lie on sample points. This checks profile readout, not reconstruction accuracy."),["json","svg","csv"].map(l=>e.createElement("button",{"data-os-loc":"src/field/AnalyticWave.jsx:37:33","data-os-action":"",key:l,onClick:()=>kn("analytic-wave."+l,{json:"application/json",csv:"text/csv",svg:"image/svg+xml"}[l],l==="json"?Bl:l==="svg"?s.current.outerHTML:[Object.keys($t.readings[0]),...$t.readings.map(Object.values)].map(m=>m.join(",")).join(`
`))},n?"导出":"Export"," ",l.toUpperCase()))))}const tn="review/b-case-metrics.js",Xt=[{id:"rmse",zh:"ROI 高度均方根误差",en:"ROI height RMSE",expr:"row.stats.rmse",read:n=>n.stats.rmse},{id:"bias",zh:"ROI 平均有符号误差",en:"ROI mean signed error",expr:"row.stats.bias",read:n=>n.stats.bias},{id:"mae",zh:"ROI 平均绝对误差",en:"ROI mean absolute error",expr:"row.stats.mae",read:n=>n.stats.mae},{id:"maximum",zh:"ROI 最大绝对误差",en:"ROI maximum absolute error",expr:"row.stats.maximum?.absolute",read:n=>n.stats.maximum?.absolute},{id:"centre",zh:"中心高度差",en:"Centre height difference",expr:"row.centre?.difference",read:n=>n.centre?.difference}],Pt=n=>"'"+n.replaceAll("\\","\\\\").replaceAll("'","\\'")+"'",kl=/^[a-z][a-z0-9_-]{0,39}$/,Ta={id:"rmse",field:"rmse",en:"ROI height RMSE",zh:"ROI 高度均方根误差",precision:5};function Ml(n,a,t=null){const s=a.id.trim(),c=a.zh.trim(),i=a.en.trim(),o=Xt.find(B=>B.id===a.field);if(!kl.test(s))return{error:"id"};if(!c||!i||[c,i].some(B=>B.length>80||/[\x00-\x1f\x7f\u2028\u2029]/u.test(B)))return{error:"label"};if(!o||!Number.isInteger(a.precision)||a.precision<0||a.precision>10)return{error:"field"};const r=n.split(`
`),f=r.findLastIndex(B=>B.trimEnd()==="];");if(f<1||r.filter(B=>B.trimEnd()==="export const metrics = [").length!==1||r.slice(f+1).some(B=>B.trim()))return{error:"format"};const l=r.findIndex(B=>B.trimEnd()==="export const metrics = ["),m=r.map(B=>B.match(/^\s*\{\s*id:\s*['"]([a-z][a-z0-9_-]*)['"],.*read:\s*row\s*=>\s*row[.?\w]+\s*\},\s*$/u)?.[1]);if(f<=l||r.slice(l+1,f).some((B,M)=>B.trim()&&!B.trimStart().startsWith("//")&&!m[l+M+1]))return{error:"format"};const y=m.filter(Boolean);if(new Set(y).size!==y.length)return{error:"format"};const x=m.indexOf(s);if(t===null&&x>=0)return{error:"duplicate"};if(t!==null&&(t!==s||x<0))return{error:"format"};const p=a.precision===5?"":", precision: "+a.precision,h=r[x<0?f-1:x].endsWith("\r")?"\r":"",d="  { id: "+Pt(s)+", en: "+Pt(i)+", zh: "+Pt(c)+p+", read: row => "+o.expr+" },"+h,u=x<0?f:x,S=x<0?[]:[r[u]];if(S[0]===d)return{error:"unchanged"};const j=r.slice(Math.max(0,u-3),u),_=r.slice(u+S.length).filter((B,M,b)=>M<b.length-1||b[M]!=="").slice(0,3),E=[...r];E.splice(u,S.length,d);const w=u-j.length+1,g=j.length+_.length,C=["--- a/"+tn,"+++ b/"+tn,"@@ -"+w+","+(g+S.length)+" +"+w+","+(g+1)+" @@",...j.map(B=>" "+B),...S.map(B=>"-"+B),"+"+d,..._.map(B=>" "+B)].join(`
`)+`
`;return{id:s,source:E.join(`
`),diff:C,old:S[0]||"",line:d,field:o,precision:a.precision}}async function pc(n){const a=new TextEncoder,t=a.encode("blob "+a.encode(n).length+"\0"+n),s=await crypto.subtle.digest("SHA-1",t);return Array.from(new Uint8Array(s),c=>c.toString(16).padStart(2,"0")).join("")}const ni="ALSc001",Rl="https://api.github.com/repos/"+ni+"/oceanscope-demo-v2";async function Va(n,a,t=!1){const s=await fetch(Rl+n,{headers:{Accept:"application/vnd.github+json"},cache:"no-store",signal:a});if(t&&s.status===404)return null;if(!s.ok)throw Error(String(s.status));return s.json()}async function Pl(n,a,t,s){const[c,i,o]=await Promise.all([pc(n),pc(a.source),Va("/contents/"+tn+"?ref=main",s)]),r="codex/b-metric-"+a.id+"-"+i.slice(0,12);if(o.sha===i)return{kind:"published",url:ma+"/blob/main/"+tn,branch:r};if(o.sha!==c)return{kind:"stale"};const f=await Va("/contents/"+tn+"?ref="+encodeURIComponent(r),s,!0);if(!f)return{kind:"editor",url:ma+"/edit/main/"+tn,branch:r};if(f.sha!==i)return{kind:"stale"};const l=await Va("/compare/main..."+encodeURIComponent(r),s);if(l.files?.length!==1||l.files[0].filename!==tn||l.files[0].sha!==i)return{kind:"stale"};const m=await Va("/pulls?state=open&base=main&head="+encodeURIComponent(ni+":"+r),s);if(m.length)return{kind:"open",url:m[0].html_url,number:m[0].number,branch:r};const y=new URLSearchParams({expand:"1",title:"Region B: "+a.field.en,body:t});return{kind:"compare",url:ma+"/compare/main..."+r+"?"+y,branch:r}}const Il={id:["标识需以小写字母开头，最多 40 个字符。","Use a lowercase identifier of up to 40 characters."],label:["请填写中英文名称，每个最多 80 个字符。","Enter both labels, up to 80 characters each."],field:["请选择统计量和 0–10 位小数。","Choose a statistic and 0–10 decimal places."],duplicate:["该标识已存在。可选择编辑已有指标。","This identifier exists. Choose the existing metric to edit it."],unchanged:["请修改名称、统计量或显示精度。","Change a label, statistic or display precision."],format:["当前源码格式需要在 GitHub 编辑。","Open GitHub to edit this source format."]};function Nl({proposal:n,base:a,body:t,zh:s}){const c=(x,p)=>s?x:p,[i,o]=v.useState(null),[r,f]=v.useState(""),l=v.useRef(null);v.useEffect(()=>()=>l.current?.abort(),[]);async function m(){l.current?.abort();const x=new AbortController;l.current=x,o({kind:"loading"}),f("");const p=setTimeout(()=>{x.signal.aborted||(x.abort(),o({kind:"failed"}))},15e3);try{const h=await Pl(a,n,t,x.signal);x.signal.aborted||o(h)}catch{x.signal.aborted||o({kind:"failed"})}finally{clearTimeout(p)}}async function y(){try{await navigator.clipboard.writeText(n.source),f(c("已复制候选文件","Candidate file copied"))}catch{f(c("请下载候选文件，或在文本框中全选复制。","Download the candidate or select and copy its text."))}}return e.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:33:10",className:"proposal-submit"},e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:34:5","data-os-action":"",type:"button",onClick:m,disabled:i?.kind==="loading"},c("准备提交 PR","Prepare pull request")),i?.kind==="loading"&&e.createElement("span",{"data-os-loc":"src/field/MetricProposal.jsx:35:32",role:"status"},c("正在核对 GitHub 文件与提案分支…","Checking the GitHub file and proposal branch…")),i?.kind==="stale"&&e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:36:30",role:"alert"},c("GitHub 文件已变更。请与最新源码核对后重新生成提案。","The GitHub file has changed. Compare the latest source and regenerate the proposal.")),i?.kind==="failed"&&e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:37:31",role:"alert"},c("无法核对 GitHub，可重试或下载补丁，在最新源码上检查后提交。","GitHub could not be checked. Retry or download the patch and check it against the latest source.")),i?.kind==="open"&&e.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:38:29",href:i.url,target:"_blank",rel:"noreferrer"},c("查看已提交的 PR","View submitted PR")," #",i.number),i?.kind==="published"&&e.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:39:34",href:i.url,target:"_blank",rel:"noreferrer"},c("这份代码已在主分支，查看文件","This version is on main. View file")),i?.kind==="compare"&&e.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:40:32",href:i.url,target:"_blank",rel:"noreferrer"},c("在 GitHub 确认创建 PR","Confirm pull request on GitHub")),i?.kind==="editor"&&e.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:41:31"},e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:42:7"},c("复制候选文件，在 GitHub 编辑器中替换内容，选择新分支或个人 fork，然后创建 PR。","Copy the candidate, paste it into the GitHub editor, then choose a new branch or your fork and create a pull request.")),e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:43:7"},e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:43:10","data-os-action":"",type:"button",onClick:y},c("复制候选文件","Copy candidate file"))," ",e.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:44:7",href:i.url,target:"_blank",rel:"noreferrer"},c("打开 GitHub 编辑器","Open GitHub editor"))),e.createElement("small",{"data-os-loc":"src/field/MetricProposal.jsx:45:7"},c("建议分支","Suggested branch")," ",e.createElement("code",{"data-os-loc":"src/field/MetricProposal.jsx:45:45"},i.branch)),e.createElement("details",{"data-os-loc":"src/field/MetricProposal.jsx:46:7"},e.createElement("summary",{"data-os-loc":"src/field/MetricProposal.jsx:46:16"},c("候选文件全文","Complete candidate file")),e.createElement("textarea",{"data-os-loc":"src/field/MetricProposal.jsx:46:74",readOnly:!0,value:n.source,"aria-label":"Candidate metric module",rows:7})),r&&e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:47:16",role:"status"},r)))}function Fl({metrics:n,rows:a,zh:t}){const s=(b,k)=>t?b:k,c=n.some(b=>b.id==="rmse"),i=()=>c?{...Ta,id:"",en:"",zh:""}:{...Ta},[o,r]=v.useState(()=>!c&&new URLSearchParams(location.search).get("proposal")==="rmse"),[f,l]=v.useState(""),[m,y]=v.useState(!1),[x,p]=v.useState(0),[h,d]=v.useState(""),[u,S]=v.useState(i);v.useEffect(()=>{if(!o)return;const b=new AbortController;return y(!1),fetch(new URL(tn,document.baseURI),{signal:b.signal,cache:"no-store"}).then(k=>{if(!k.ok)throw Error("Metric module unavailable");return k.text()}).then(k=>{b.signal.aborted||l(k)}).catch(()=>{b.signal.aborted||y(!0)}),()=>b.abort()},[o,x]);function j(b){if(d(b),!b){S(i());return}const k=n.find(F=>F.id===b),R=f.split(`
`).find(F=>F.trimStart().startsWith("{ id: '"+b+"',")||F.trimStart().startsWith('{ id: "'+b+'",')),N=Xt.find(F=>R?.includes("read: row => "+F.expr+" }"));S({id:b,en:k.en,zh:k.zh,field:N?.id||"",precision:k.precision??5})}function _(b,k){S(R=>({...R,[b]:k}))}const E=f&&Ml(f,u,h||null),w=n.find(b=>b.id===h),g=[1050,1054].map(b=>a.find(k=>k.frameId===b)),C=E&&!E.error&&g.every(Boolean),B=(b,k)=>Number.isFinite(b)?b.toFixed(k):"—",M=C?["Region B · Gentle GT / Best_1027",u.en+" ("+u.id+")","Definition: "+E.field.expr+"; decimals: "+E.precision,...g.map(b=>"Frame "+b.frameId+": "+B(E.field.read(b),E.precision)+" scene units, "+b.stats.common+" common native columns."),u.id==="rmse"&&u.field==="rmse"&&u.en===Ta.en&&u.zh===Ta.zh&&u.precision===5?$s.replace("#analysis-height","&proposal=rmse#analysis-height"):$s].join(`

`):"";return e.createElement("section",{"data-os-loc":"src/field/MetricProposal.jsx:82:10",className:"metric-proposal","aria-label":"Region B metric proposal"},e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:83:5","data-os-action":"",type:"button","aria-expanded":o,onClick:()=>r(b=>!b)},o?s("收起指标编辑","Close metric editor"):s("改指标并预览","Edit and preview a metric")),o&&e.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:84:14"},m?e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:85:15",role:"alert"},s("未能读取当前指标文件。","Metric source unavailable.")," ",e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:85:79","data-os-action":"",onClick:()=>p(b=>b+1)},s("重试","Retry"))):f?e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:86:7",className:"proposal-fields"},e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:87:9"},s("编辑对象","Metric to edit"),e.createElement("select",{"data-os-loc":"src/field/MetricProposal.jsx:87:44","data-os-action":"","aria-label":"Metric to edit",value:h,onChange:b=>j(b.target.value)},e.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:87:134",value:""},s("新增指标","New metric")),n.map(b=>e.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:87:200",key:b.id,value:b.id},t?b.zh:b.en)))),e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:88:9"},s("标识","Identifier"),e.createElement("input",{"data-os-loc":"src/field/MetricProposal.jsx:88:38","data-os-action":"","aria-label":"Metric identifier",value:u.id,readOnly:!!h,onChange:b=>_("id",b.target.value)})),e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:89:9"},s("统计量","Statistic"),e.createElement("select",{"data-os-loc":"src/field/MetricProposal.jsx:89:38","data-os-action":"","aria-label":"Candidate statistic",value:u.field,onChange:b=>_("field",b.target.value)},!u.field&&e.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:89:158",value:""},"—"),Xt.map(b=>e.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:89:201",value:b.id,key:b.id},t?b.zh:b.en)))),e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:90:9"},s("中文名称","Chinese label"),e.createElement("input",{"data-os-loc":"src/field/MetricProposal.jsx:90:43","data-os-action":"","aria-label":"Chinese metric label",value:u.zh,maxLength:80,onChange:b=>_("zh",b.target.value)})),e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:91:9"},s("英文名称","English label"),e.createElement("input",{"data-os-loc":"src/field/MetricProposal.jsx:91:43","data-os-action":"","aria-label":"English metric label",value:u.en,maxLength:80,onChange:b=>_("en",b.target.value)})),e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:92:9"},s("小数位数","Decimal places"),e.createElement("select",{"data-os-loc":"src/field/MetricProposal.jsx:92:44","data-os-action":"","aria-label":"Metric precision",value:u.precision,onChange:b=>_("precision",Number(b.target.value))},Array.from({length:11},(b,k)=>e.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:92:191",key:k},k))))),E?.error&&(h||u.id.trim())&&e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:94:60",role:"status"},Il[E.error][t?0:1]),E&&!E.error&&!C&&e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:95:49",role:"status"},s("等待 1050 和 1054 两帧。","Waiting for both frames.")),C&&e.createElement(e.Fragment,null,e.createElement("table",{"data-os-loc":"src/field/MetricProposal.jsx:97:9","aria-label":"Two-frame metric preview"},e.createElement("caption",{"data-os-loc":"src/field/MetricProposal.jsx:97:54"},(t?u.zh:u.en)+" · "+s("场景单位","scene units")),e.createElement("thead",{"data-os-loc":"src/field/MetricProposal.jsx:98:11"},e.createElement("tr",{"data-os-loc":"src/field/MetricProposal.jsx:98:18"},[s("帧号","Frame"),s("原值","Current"),s("预览","Preview"),s("共同有效点 / ROI 候选点","Common / candidate columns")].map(b=>e.createElement("th",{"data-os-loc":"src/field/MetricProposal.jsx:98:134",key:b},b)))),e.createElement("tbody",{"data-os-loc":"src/field/MetricProposal.jsx:99:11"},g.map(b=>e.createElement("tr",{"data-os-loc":"src/field/MetricProposal.jsx:99:35",key:b.frameId},e.createElement("th",{"data-os-loc":"src/field/MetricProposal.jsx:99:57"},b.frameId),e.createElement("td",{"data-os-loc":"src/field/MetricProposal.jsx:99:79"},w?B(w.read(b),w.precision??5):s("新增","New")),e.createElement("td",{"data-os-loc":"src/field/MetricProposal.jsx:99:155"},B(E.field.read(b),E.precision)),e.createElement("td",{"data-os-loc":"src/field/MetricProposal.jsx:99:217"},b.stats.common," / ",b.stats.candidates))))),e.createElement("details",{"data-os-loc":"src/field/MetricProposal.jsx:100:9",className:"proposal-diff"},e.createElement("summary",{"data-os-loc":"src/field/MetricProposal.jsx:100:44"},s("查看代码差异","View code changes")),e.createElement("pre",{"data-os-loc":"src/field/MetricProposal.jsx:100:96","aria-label":"Proposed code diff"},E.diff.split(`
`).slice(0,-1).map((b,k)=>e.createElement("span",{"data-os-loc":"src/field/MetricProposal.jsx:100:186",key:k,className:b.startsWith("+")?"diff-plus":b.startsWith("-")?"diff-minus":""},b,`
`)))),e.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:101:9",className:"proposal-downloads"},e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:101:45","data-os-action":"",onClick:()=>Xs("B-"+E.id+".patch",new Blob([E.diff],{type:"text/plain"}))},s("下载补丁","Download patch")),e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:102:9","data-os-action":"",onClick:()=>Xs("b-case-metrics.js",new Blob([E.source],{type:"text/javascript"}))},s("下载候选源码","Download candidate source"))),e.createElement(Nl,{key:E.source,proposal:E,base:f,body:M,zh:t}))):e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:85:154",role:"status"},s("正在读取指标源码…","Loading metric source…"))))}function Ol({rows:n,zh:a,metrics:t,metric:s,metricId:c,onTrack:i,evidence:o,error:r,retry:f}){const l=(x,p)=>a?x:p,m=Di(o),y=["Gentle / Best_1027","XZ (−0.95, 0.90)","ROI 1 × 1","X profile 0°",o.metricLabel,...o.readings.map(x=>x.frameId+": "+x.display+" "+o.units+" ("+x.common+"/"+x.candidates+")")].filter(Boolean).join(" · ");return e.createElement("section",{"data-os-loc":"src/field/ReviewMetrics.jsx:12:10",className:"review-metrics","aria-label":"B case collaboration"},e.createElement("h3",{"data-os-loc":"src/field/ReviewMetrics.jsx:13:5"},l("一起查看 B 区域","Review region B together")),r&&e.createElement("button",{"data-os-loc":"src/field/ReviewMetrics.jsx:14:15","data-os-action":"",onClick:f},l("重试加载追踪量","Retry loading metrics")),t.length>0&&e.createElement(e.Fragment,null,e.createElement("label",{"data-os-loc":"src/field/ReviewMetrics.jsx:15:28"},l("追踪量","Track a quantity")," ",e.createElement("select",{"data-os-loc":"src/field/ReviewMetrics.jsx:15:65","data-os-action":"",value:s?.id??"",onChange:x=>i(x.target.value)},!s&&e.createElement("option",{"data-os-loc":"src/field/ReviewMetrics.jsx:16:19",value:"",disabled:!0},l("请选择正式指标","Select an official metric")),t.map(x=>e.createElement("option",{"data-os-loc":"src/field/ReviewMetrics.jsx:17:27",key:x.id,value:x.id},a?x.zh:x.en)))),s?e.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:19:13","aria-live":"polite"},o.readings.map(x=>x.frameId+": "+x.display).join("　 /　 "),"　",l("场景单位","scene units")):e.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:20:7",role:"alert"},c?l("无法还原此指标，当前正式列表中没有 ","The current registry does not contain the recorded metric ")+c+l("。请选择指标。",". Select a metric."):l("原记录未注明追踪量，无法还原。请选择指标。","The original record did not specify a metric. Select a metric to continue."))),s&&e.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:23:16",className:"b-case-share"},e.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:23:44",href:m,target:"_blank",rel:"noreferrer"},l("分享当前视图给同事","Share this view with a colleague"))),e.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:24:5"},e.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:24:8",href:ma+"/issues/1#new_comment_field",target:"_blank",rel:"noreferrer"},l("去公开 GitHub 参与案例讨论","Discuss this case on public GitHub"))),e.createElement(wc,{topic:"region-B-1050-1054",zh:a,subject:l("B 区域 · 1050 与 1054","Region B · 1050 and 1054"),context:y,viewLink:m}),e.createElement("details",{"data-os-loc":"src/field/ReviewMetrics.jsx:26:5",className:"b-case-source"},e.createElement("summary",{"data-os-loc":"src/field/ReviewMetrics.jsx:26:40"},l("指标源码与补丁","Metric source and patches")),e.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:27:7",href:ma+"/edit/main/review/b-case-metrics.js",target:"_blank",rel:"noreferrer"},l("在 GitHub 编辑指标文件","Edit the metric file on GitHub")),t.length>0&&e.createElement(Fl,{metrics:t,rows:n,zh:a})))}function ai(n,a){if(!Number.isFinite(n))return"#a7acb0";const t=n>=0?[186,58,44]:[35,97,159],s=Math.min(1,Math.abs(n)/(a||1));return"rgb("+t.map(c=>Math.round(250+(c-250)*s)).join(",")+")"}function ti(n){const a=n.map(i=>i.ix),t=n.map(i=>i.iz),s=Math.min(...a),c=Math.min(...t);return[s,c,Math.max(...a)-s+1,Math.max(...t)-c+1]}function si({cells:n,limit:a,selection:t}){const[s,c,i,o]=ti(n),r=c+o-1,f=210/i,l=(t.ix-s+.5)*f,m=(r-t.iz+.5)*f;return e.createElement(e.Fragment,null,e.createElement("g",{"data-os-loc":"src/field/BCasePlots.jsx:22:5",shapeRendering:"crispEdges"},n.map(({ix:y,iz:x,error:p})=>e.createElement("rect",{"data-os-loc":"src/field/BCasePlots.jsx:23:7",key:y+","+x,x:(y-s)*f,y:(r-x)*f,width:f,height:f,fill:ai(p,a)}))),e.createElement("line",{"data-os-loc":"src/field/BCasePlots.jsx:26:5",x1:"0",x2:"210",y1:m,y2:m,stroke:"#182e36",strokeDasharray:"4 3"}),e.createElement("circle",{"data-os-loc":"src/field/BCasePlots.jsx:27:5",cx:l,cy:m,r:"5",stroke:"black",strokeWidth:"2",fill:"white"}))}function Dl(n,a,t,s){const c=n.xmin-a,i=n.xmax-a;return{first:c,last:i,x:o=>(o-c)/(i-c)*335,y:o=>106-(o-t)/(s-t||1)*101}}function ci({points:n,scale:a,band:t}){function s(c){let i=!1;return n.map(o=>{if(!Number.isFinite(o[c]))return i=!1,"";const r=i?"L":"M";return i=!0,r+a.x(o.distance)+" "+a.y(o[c])}).join(" ")}return e.createElement(e.Fragment,null,t&&e.createElement("rect",{"data-os-loc":"src/field/BCasePlots.jsx:48:14",x:a.x(t.lo)-2,width:a.x(t.hi)-a.x(t.lo)+4,y:"0",height:"111",fill:"#f4df9c"}),e.createElement("line",{"data-os-loc":"src/field/BCasePlots.jsx:50:5",x1:a.x(0),x2:a.x(0),y1:"0",y2:"111",stroke:"#777",strokeDasharray:"2 3"}),e.createElement("path",{"data-os-loc":"src/field/BCasePlots.jsx:51:5",d:s("a"),stroke:"#13689e",fill:"none",strokeWidth:"2.5"}),e.createElement("path",{"data-os-loc":"src/field/BCasePlots.jsx:52:5",d:s("b"),stroke:"#ad6411",fill:"none",strokeWidth:"2.5",strokeDasharray:"7 3"}))}function uc({label:n,frame:a,kind:t,zh:s,children:c,legend:i,axis:o,canAnnotate:r}){const[f,l]=v.useState(!1),[m,y]=v.useState([0,1]),x=v.useRef(null),p=a+" · "+n;v.useLayoutEffect(()=>{const d=x.current;if(d.scrollLeft=(d.scrollWidth-d.clientWidth)/2,d.scrollTop=(d.scrollHeight-d.clientHeight)/2,!o)return;function u(){const j=d.querySelector("svg").getBoundingClientRect();if(!j.width)return;const _=(d.getBoundingClientRect().left-j.left)/j.width;y([Math.max(0,_),Math.min(1,_+d.clientWidth/j.width)])}u();const S=new ResizeObserver(u);return S.observe(d),d.addEventListener("scroll",u),()=>{S.disconnect(),d.removeEventListener("scroll",u)}},[f,!!o]);function h(d){window.dispatchEvent(new CustomEvent("oceanscope-review-figure",{detail:{figure:x.current.querySelector("svg"),trigger:d.currentTarget,label:p}}))}return e.createElement("figure",{"data-os-loc":"src/field/BCaseFigures.jsx:31:10",className:"b-plot b-"+t,"data-review-id":"b-"+a+"-"+t},e.createElement("figcaption",{"data-os-loc":"src/field/BCaseFigures.jsx:32:5"},n),e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:33:5",ref:x,className:"b-viewport","data-zoomed":f,tabIndex:f?0:void 0,role:"group","aria-label":p+(s?" · 图像区域":" · plot area")},c),o&&e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:37:14",className:"b-ticks"},[m[0],(m[0]+m[1])/2,m[1]].map((d,u)=>e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:38:7",key:u},(o.first+(o.last-o.first)*d).toFixed(2)))),i,e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:40:5",className:"b-plot-controls","data-os-tools":""},e.createElement("button",{"data-os-loc":"src/field/BCaseFigures.jsx:41:7","data-os-action":"",type:"button","aria-pressed":f,"aria-label":p+(s?" · 局部放大":" · local zoom"),onClick:()=>l(d=>!d)},f?s?"还原 1×":"Reset 1×":s?"放大 2×":"Zoom 2×"),e.createElement("button",{"data-os-loc":"src/field/BCaseFigures.jsx:43:7","data-os-action":"",type:"button",disabled:!r,"aria-label":p+(s?" · 批注这张图":" · Annotate this figure"),onClick:h},s?"批注这张图":"Annotate this figure")),f&&e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:47:16",className:"b-zoom-help"},s?"滑动查看局部；键盘可聚焦图像后用方向键移动。":"Scroll to pan, or focus the plot and use the arrow keys."))}function Wl({rows:n,data:a,limit:t,low:s,high:c,band:i,scale:o,evidence:r,zh:f}){const l=(u,S)=>f?u:S,m=v.useRef(null);v.useEffect(()=>{window.location.hash.startsWith("#mark=")||m.current.scrollIntoView({block:"start"})},[]);const y=l("场景单位","scene units"),x=l("带符号高度误差","Signed height error"),p=l("穿过中心的 X 剖面","X profile through the centre"),{roi:h,selection:d}=a;return e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:63:10",className:"b-case-figures"},e.createElement("h3",{"data-os-loc":"src/field/BCaseFigures.jsx:64:5",className:"b-case-heading",ref:m},l("固定 B 区域","Fixed region B")," · ",n.map(u=>u.frameId).join(" / ")),e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:65:5",className:"b-case-context"},e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:65:35"},l("模型","Model")," Best_1027"),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:65:80"},"GT · Gentle"),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:66:7"}," XZ (",a.x.toFixed(2),", ",a.z.toFixed(2),")"),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:67:7"},"ROI ",(h.xmax-h.xmin).toFixed(2)," × ",(h.zmax-h.zmin).toFixed(2)," ",y)),e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:68:5",className:"b-common-scale"},e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:69:7"},l("两帧共用色标","Shared colour scale")),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:70:7"},l("预测 − GT","Prediction − GT")," · ",y),e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:71:7",className:"b-ramp","aria-hidden":"true"}),e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:72:7",className:"b-ticks"},e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:72:32"},(-t).toFixed(3)," ",l("偏低","low")),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:72:83"},"0"),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:72:97"},"+",t.toFixed(3)," ",l("偏高","high")))),e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:74:5",className:"b-frame-grid"},n.map(u=>{const S=r.readings.find(j=>j.frameId===u.frameId);return e.createElement("article",{"data-os-loc":"src/field/BCaseFigures.jsx:76:14",className:"b-frame-card",key:u.frameId,"data-review-frame":u.frameId},e.createElement("h4",{"data-os-loc":"src/field/BCaseFigures.jsx:77:7"},l("帧","Frame")," ",u.frameId),e.createElement(uc,{frame:u.frameId,kind:"map",label:x,zh:f,canAnnotate:!!S,legend:e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:78:108",className:"b-map-notes"},e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:79:9",className:"b-plot-key"},"Z ↑　X →　",l("白点为中心，虚线为剖面","White centre point, dashed X section")),S&&e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:80:21",className:"b-readout b-tracked-reading"},r.metricLabel,e.createElement("br",{"data-os-loc":"src/field/BCaseFigures.jsx:80:86"}),e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:80:91"},S.display)," ",y),e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:81:9",className:"b-readout"},l("中心差","Centre difference")," ",e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:81:66"},u.centre?.difference?.toFixed(4)??"—")," ",y,e.createElement("br",{"data-os-loc":"src/field/BCaseFigures.jsx:81:134"}),l("共同有效 / 候选列","Common / candidate columns")," ",e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:82:59"},u.stats.common," / ",u.stats.candidates)))},e.createElement("svg",{"data-os-loc":"src/field/BCaseFigures.jsx:84:9",viewBox:"0 0 210 210",role:"img","aria-label":u.frameId+" · "+x,"data-grid-window":ti(u.region.cells).join(","),"data-grid-origin":[a.x-d.ix*u.profile.step,a.z-d.iz*u.profile.step,u.profile.step].join(",")},e.createElement(si,{cells:u.region.cells,limit:t,selection:d}))),e.createElement(uc,{frame:u.frameId,kind:"profile",label:p,zh:f,axis:o,canAnnotate:!!S,legend:e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:91:9",className:"b-plot-key"},l("横轴：距中心的 X 距离","X axis: distance from centre")," · ",y,e.createElement("br",{"data-os-loc":"src/field/BCaseFigures.jsx:91:95"}),l("纵轴：水面高度","Y axis: surface height")," ",s.toFixed(3)," … ",c.toFixed(3)," ",y),e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:93:9",className:"b-line-keys"},e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:93:36"},e.createElement("i",{"data-os-loc":"src/field/BCaseFigures.jsx:93:42",className:"b-line-gt"}),"GT"),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:93:77"},e.createElement("i",{"data-os-loc":"src/field/BCaseFigures.jsx:93:83",className:"b-line-pred"}),l("预测","Prediction")),i&&e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:94:20"},e.createElement("i",{"data-os-loc":"src/field/BCaseFigures.jsx:94:26",className:"b-band"}),l("比较区段","Compared interval"))))},e.createElement("svg",{"data-os-loc":"src/field/BCaseFigures.jsx:96:9",viewBox:"0 0 335 111","data-profile-axis":[o.first,o.last,0,335].join(","),role:"img","aria-label":u.frameId+" · "+p},e.createElement(ci,{points:u.profile.points,scale:o,band:i}))))})),i&&e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:102:14",className:"b-band-note"},e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:102:41"},l("黄色区段","Highlighted interval"),"　s = ",i.lo.toFixed(2)," … ",i.hi.toFixed(2)," ",y)," · ",l("两帧逐点比较正误差，这两个相邻采样占剖面正误差全部减少量的 ","These two adjacent samples account for "),(i.share*100).toFixed(1),"%",l("。"," of all decreases in positive profile error.")," ",l("1050 帧的 GT 从局部谷底向右抬升，1054 帧的同一位置仍靠近谷底。","Here the 1050 GT rises from a local trough. The same positions remain near the trough in 1054.")),e.createElement("details",{"data-os-loc":"src/field/BCaseFigures.jsx:106:5",className:"b-signed-stats"},e.createElement("summary",{"data-os-loc":"src/field/BCaseFigures.jsx:106:41"},l("查看带符号误差统计","Show signed-error statistics")),n.map(u=>e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:107:24",key:u.frameId},e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:107:45"},u.frameId)," · ",l("区域偏差","ROI bias")," ",u.stats.bias?.toFixed(4)??"—"," ·"," ",l("偏高列均值","Mean positive")," ",u.region.counts[4]?.toFixed(4)??"—"," ·"," ",l("偏低列均值","Mean negative")," ",u.region.counts[5]?.toFixed(4)??"—"," ",y))))}function Tl(n,a){const{shape:[t,s],originXYZ:[c,,i],spacing:o}=n.descriptor,r=[];for(let p=0;p<t;p++){const h=i+p*o;if(!(h<a.zmin||h>a.zmax))for(let d=0;d<s;d++){const u=c+d*o,S=p*s+d;u<a.xmin||u>a.xmax||r.push({ix:d,iz:p,error:n.common[S]?n.heightB[S]-n.heightA[S]:null})}}const f=r.map(p=>p.error).filter(Number.isFinite).sort((p,h)=>p-h),l=f.filter(p=>p>0),m=f.filter(p=>p<0),y=p=>p.length?p.reduce((h,d)=>h+d,0)/p.length:null,x=f.length;return{cells:r,counts:[x,l.length,m.length,x-l.length-m.length,y(l),y(m),x?(f[Math.floor((x-1)/2)]+f[Math.floor(x/2)])/2:null,y(f)]}}const za=n=>n==null?"—":n.toFixed(4);function Vl(n){const[a,t]=n.map(i=>i.profile.points),s=a.map((i,o)=>Number.isFinite(i.difference)&&Number.isFinite(t[o]?.difference)?Math.max(0,i.difference)-Math.max(0,t[o].difference):null);let c=null;for(let i=1;i<s.length;i++){if(s[i-1]==null||s[i]==null)continue;const o=s[i-1]+s[i];(!c||o>c.sum)&&(c={sum:o,i})}return{lo:a[c.i-1].distance,hi:a[c.i].distance,share:c.sum/s.reduce((i,o)=>i+Math.max(0,o??0),0)}}function zl({data:n,bundle:a,zh:t,metricId:s,onTrack:c,recorded:i}){const o=v.useRef(null),r=(b,k)=>t?b:k,[f,l]=v.useState([]),[m,y]=v.useState(!1),[x,p]=v.useState(0);v.useEffect(()=>{let b=!0;const k=new URL(tn,document.baseURI);return x&&k.searchParams.set("retry",String(x)),import(k.href).then(R=>{b&&(l(R.metrics),y(!1))}).catch(()=>{b&&y(!0)}),()=>{b=!1}},[x]);const h=n.rows.filter(b=>Wi.includes(b.frameId)),d=f.find(b=>b.id===s),u=Ti({bundle:a,selection:n.selection,rows:h,metric:d,metricId:s,language:t?"zh":"en"});if(i)try{Sc(i,a,n.selection)}catch(b){return e.createElement("p",{"data-os-loc":"src/field/BPairCase.jsx:59:23",role:"alert"},b.message)}const S=!!(i&&d&&(i.metricLabel!==d[i.language]||!Vi(i.readings,u.readings))),j=Math.max(...h.flatMap(b=>b.region.cells.map(k=>Math.abs(k.error??0)))),_=h.flatMap(b=>b.profile.points.flatMap(k=>[k.a,k.b])).filter(Number.isFinite),E=Math.min(..._),w=Math.max(..._),g=Vl(h),C=Dl(n.roi,n.x,E,w),B=["frame","common","positive","negative","zero","mean_positive","mean_negative","median","roi_bias"];function M(b){let k,R;if(b==="svg"&&(k=o.current.outerHTML,R="image/svg+xml"),b==="csv"&&(k=zi(u),R="text/csv"),b==="signed"){const N=[B,...n.rows.map(F=>[F.frameId,...F.region.counts])].map(F=>F.join(",")).join(`\r
`)+`\r
`;kn("OceanScope-B-1049-1054-signed-error.csv","text/csv",N);return}b==="json"&&(k=JSON.stringify({...Cc(a,n,1050),caseView:jc,review:u,signedScale:[-j,j],band:g,signedStats:n.rows.map(N=>Object.fromEntries(B.map((F,T)=>[F,[N.frameId,...N.region.counts][T]])))},null,2),R="application/json"),kn("OceanScope-B-1050-1054."+b,R,k)}return e.createElement("section",{"data-os-loc":"src/field/BPairCase.jsx:84:10","data-b-review":JSON.stringify(u),"data-review-frame":"1050 / 1054","aria-label":"B paired frame case"},e.createElement(Wl,{rows:h,data:n,limit:j,low:E,high:w,band:g,scale:C,evidence:u,zh:t}),e.createElement("div",{"data-os-loc":"src/field/BPairCase.jsx:86:5",hidden:!0},e.createElement("svg",{"data-os-loc":"src/field/BPairCase.jsx:86:17",ref:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 960 765",style:{width:"100%",maxWidth:960},role:"img","aria-label":r("B 区域两帧误差与剖面","B region paired error maps and profiles")},e.createElement("rect",{"data-os-loc":"src/field/BPairCase.jsx:87:5",width:"960",height:"765",fill:"#fafaf8"}),e.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:88:5",fill:"#173447",fontFamily:"sans-serif",fontSize:"16"},e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:89:5",x:"30",y:"40",fontSize:"26",fontWeight:"bold"},r("B 区域 · 中心仍偏高，区域平均转负","Region B · positive centre, changing regional bias")),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:90:5",x:"30",y:"69"},"Best_1027 · XZ (−0.95, 0.90) · ROI 1 × 1 · ",r("剖面沿 X，长度按场景单位","X profile, source length units")),d&&e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:91:16",x:"30",y:"88",fontSize:"15",fontWeight:"bold"},u.metricLabel," (",d.id,") · ",u.readings.map(b=>b.frameId+" = "+b.display+" ["+b.common+"/"+b.candidates+"]").join("   /   ")," · ",r("场景单位 · [共同有效/候选列]","scene units · [common/candidate columns]")),h.map((b,k)=>{const R=40+k*468,N=128,F=I=>R+36+C.x(I),T=I=>423+C.y(I);return e.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:95:14",key:b.frameId},e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:95:33",x:R,y:"109",fontWeight:"bold",fontSize:"23"},b.frameId),e.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:96:9",transform:"translate("+R+" "+N+")"},e.createElement(si,{cells:b.region.cells,limit:j,selection:n.selection})),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:97:9",x:R+222,y:"172"},"Z ↑   X →"),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:97:52",x:R+222,y:"205"},r("中心差","Centre Δh")," ",za(b.centre.difference)),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:98:9",x:R+222,y:"232"},"ROI bias ",za(b.stats.bias)),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:98:71",x:R+222,y:"259"},"n = ",b.region.counts[0]),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:99:9",x:R,y:"368"},r("偏高列均值","Mean positive")," ",za(b.region.counts[4]),"　 ",r("偏低列均值","Mean negative")," ",za(b.region.counts[5])),e.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:100:9",transform:"translate("+(R+36)+" 423)"},e.createElement(ci,{points:b.profile.points,scale:C,band:g})),[E,w].map(I=>e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:101:28",x:R-8,y:T(I)+4,fontSize:"12",key:I},I.toFixed(2))),[-.5,0,.5].map(I=>e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:102:28",key:I,x:F(I),y:"551",textAnchor:"middle",fontSize:"13"},I.toFixed(1))))}),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:105:5",x:"38",y:"400"},r("带符号误差（预测 − GT）","Signed error (prediction − GT)")),Array.from({length:81},(b,k)=>e.createElement("rect",{"data-os-loc":"src/field/BPairCase.jsx:106:36",key:k,x:385+k*3,y:"385",width:"3",height:"14",fill:ai((k-40)*j/40,j)})),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:107:5",x:"328",y:"399"},(-j).toFixed(3)),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:107:55",x:"500",y:"380"},"0"),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:107:85",x:"638",y:"399"},"+",j.toFixed(3)),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:108:5",x:"38",y:"583"},r("剖面横轴为距中心的 X 距离，纵轴为水面高度。蓝线 GT，橙线预测。","Horizontal: X distance from centre. Vertical: surface height. Blue GT, orange prediction.")),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:109:5",x:"38",y:"625",fontWeight:"bold"},r("偏高减小最集中的相邻两点","Adjacent pair with the largest reduction in positive error"),"　s = ",g.lo.toFixed(2)," … ",g.hi.toFixed(2)),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:110:5",x:"38",y:"659"},r("黄色标记该区段。逐点取正误差，再比较两帧；这两点占剖面全部正向减小量的","Gold marks the interval. These points account for this share of all decreases in positive error:")," ",(g.share*100).toFixed(1),"%."),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:111:5",x:"38",y:"695"},r("该段位于 1050 帧 GT 由局部谷底向右抬升处。1054 帧同一位置仍靠近低谷。","In 1050 the GT rises out of a local trough here. In 1054 these positions remain near the trough.")),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:112:5",x:"38",y:"735"},r("两帧比较固定世界位置。白点为中心，虚线为穿过中心的 X 剖面。","World positions are fixed. White circle: centre. Dashed line: X section through centre."))))),S&&e.createElement("p",{"data-os-loc":"src/field/BPairCase.jsx:114:18",role:"alert"},r("原记录与当前正式指标的数值或有效列不同。请核对原文件，然后重新选择指标。","The saved values or column counts differ from the current metric. Check the original record and select a metric again.")),e.createElement(Ol,{rows:h,zh:t,metrics:f,metric:d,metricId:s,onTrack:c,evidence:u,error:m,retry:()=>p(b=>b+1)}),["svg","csv","json"].map(b=>e.createElement("button",{"data-os-loc":"src/field/BPairCase.jsx:116:36","data-os-action":"",key:b,disabled:!d||S,onClick:()=>M(b)},b==="csv"?r("下载 B 两帧指标摘要 CSV","Download B two-frame metric summary CSV"):r("下载 B 案例","Download B case")+" "+b.toUpperCase())),e.createElement("button",{"data-os-loc":"src/field/BPairCase.jsx:117:5","data-os-action":"",onClick:()=>M("signed")},r("下载 B 带符号误差明细 CSV（1049–1054）","Download B signed-error details CSV (1049–1054)")))}const ra=n=>Number.isFinite(n)?n.toFixed(4):"—";function ii(n,a){const t=n.spacing,s=a==="A"?176:174,c=a==="A"?90:69,i=n.originXYZ[0]+s*t,o=n.originXYZ[2]+c*t;return{sourceFrame:n.frameId,ix:s,iz:c,x:i,z:o,roi:{xmin:i-10*t,xmax:i+10*t,zmin:o-10*t,zmax:o+10*t},directionDeg:0}}async function $l(n,a,t){const s=await Ka(ya,Qa.indexSha256,n),c=s.frames.find(w=>w.frameId===1049),i=c.spacing,o=typeof a=="string"?ii(c,a):a,{ix:r,iz:f,sourceFrame:l,roi:m,directionDeg:y}=o,x=s.frames.find(w=>w.frameId===l);if(!x||!Number.isInteger(r)||!Number.isInteger(f)||r<0||f<0||r>=x.shape[1]||f>=x.shape[0])throw Error("Invalid hotspot index");const p=x.originXYZ[0]+r*x.spacing,h=x.originXYZ[2]+f*x.spacing,d=ot({descriptor:x});if(!Number.isFinite(y)||y<0||y>=180||!m||!["xmin","xmax","zmin","zmax"].every(w=>Number.isFinite(m[w]))||m.xmin>=m.xmax||m.zmin>=m.zmax||m.xmin<d.xmin||m.xmax>d.xmax||m.zmin<d.zmin||m.zmax>d.zmax||p<m.xmin||p>m.xmax||h<m.zmin||h>m.zmax)throw Error("Select an ROI containing the hotspot and a valid profile angle");const u={sourceFrame:l,ix:r,iz:f,x:p,z:h,roi:m,directionDeg:y};if(p!==o.x||h!==o.z)throw Error("Hotspot world coordinates differ from source");const S=await ua(x,{...Hn(n),frameId:l},t);if(!S.common[f*x.shape[1]+r])throw Error("Source hotspot is outside common support");const j=[];for(const w of Zi){const g=s.frames.find(k=>k.frameId===w),C=w===l?S:await ua(g,{...Hn(n),frameId:w},t),B=Dt(C,{x:p,z:h,directionDeg:y});B.points=B.points.filter(k=>k.x>=m.xmin-1e-9&&k.x<=m.xmax+1e-9&&k.z>=m.zmin-1e-9&&k.z<=m.zmax+1e-9);const M=B.points.find(k=>Math.abs(k.distance)<1e-9),b=r===174&&f===69&&y===0&&m.xmin===p-10*i&&m.xmax===p+10*i&&m.zmin===h-10*i&&m.zmax===h+10*i?Tl(C,m):null;j.push({region:b,frameId:w,profile:B,centre:M,stats:qn(C,m)})}const _=j.flatMap(w=>w.profile.points),E=_.flatMap(w=>[w.a,w.b]).filter(Number.isFinite);return{selection:u,x:p,z:h,roi:m,rows:j,limits:E.length?[Math.min(...E),Math.max(...E)]:[0,1],error:Math.max(1e-9,..._.map(w=>Math.abs(w.difference??0)))}}function Xl({bundle:n,zh:a,getSelection:t}){const{setLanguage:s}=ue(),[c,i]=v.useState(()=>Na()?"B":null),[o,r]=v.useState(()=>Na()?1050:1049),[f,l]=v.useState(null),[m,y]=v.useState(Na),[x,p]=v.useState(()=>Zs(new URLSearchParams(window.location.search))),[h,d]=v.useState(()=>{const b=et();return Gs(b)?b.bReview:null}),[u,S]=v.useState(""),j=v.useRef(null),_=v.useRef(0);function E(b,k=1049,R=!1,N=x,F=null){_.current++,y(R),S(""),i(b),r(k),d(F);const T=new URL(window.location.href);if(R)p(N),qs(T,N,F?.language||(a?"zh":"en")),T.hash="#analysis-height";else if(Na()){for(const I of["review","metric","proposal"])T.searchParams.delete(I);T.hash="#analysis-height"}window.history.replaceState(window.history.state,"",T)}function w(b){window.dispatchEvent(new Event("oceanscope-dismiss-mark")),_.current++,d(null),p(b);const k=qs(new URL(window.location.href),b,a?"zh":"en");k.hash="#analysis-height",window.history.replaceState(window.history.state,"",k)}v.useEffect(()=>{const b=()=>{if(window.location.hash.startsWith("#mark="))return;const k=new URLSearchParams(window.location.search);k.get("review")==="b-pair"?(_.current++,d(null),y(!0),i("B"),r(1050),p(Zs(k)),S("")):m&&(_.current++,d(null),y(!1),i(null),S(""))};return window.addEventListener("popstate",b),()=>window.removeEventListener("popstate",b)},[m]),v.useEffect(()=>{const b=k=>{const R=k.detail;Gs(R)&&(_.current++,S(""),y(!0),i("B"),r(1050),d(R.bReview||null),p(R.bReview?.metricId||""))};return window.addEventListener(Hs,b),()=>window.removeEventListener(Hs,b)},[]);async function g(b){if(!b)return;const k=++_.current;try{if(b.size>8*1024*1024)throw Error("Report exceeds 8 MiB");const R=JSON.parse(await b.text()),N=$i(R,n);if(!N||typeof N!="object")throw Error("Invalid report selection");const F=R.caseView===jc;if(F){const T=JSON.parse(ya).frames.find($=>$.frameId===1049),I=ii(T,"B");if(!Xi(I,N))throw Error(a?"报告的选区或剖面与固定 B 区域不符。":"The report ROI or profile differs from the fixed B region.");R.review!=null&&Sc(R.review,n,I)}k===_.current&&(E(N,R.selectedFrame,F,R.review?.metricId??"",F?R.review:null),F&&R.review&&s(R.review.language))}catch(R){k===_.current&&S(R.message)}}v.useEffect(()=>{if(!c)return;const b=new AbortController;return $l(n,c,b.signal).then(k=>{b.signal.aborted||l({bundle:n,location:c,data:k})}).catch(k=>{b.signal.aborted||l({bundle:n,location:c,error:k.message})}),()=>b.abort()},[n,c]);const C=f?.bundle===n&&f.location===c?f:null,B=C?.data,M=B?.rows.find(b=>b.frameId===o);return e.createElement("section",{"data-os-loc":"src/field/FixedWaveWindow.jsx:146:10","data-review-frame":M?.frameId,ref:j,"aria-label":"Fixed ROI wave window"},e.createElement("h3",{"data-os-loc":"src/field/FixedWaveWindow.jsx:146:101"},a?"固定选区波形 · 1049–1054":"Fixed ROI wave profiles · 1049–1054"),["A","B"].map(b=>e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:147:24","data-os-action":"",key:b,"aria-pressed":c===b,onClick:()=>E(b)},a?"固定区域 ":"Fixed region ",b)),e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:148:5","data-os-action":"",onClick:()=>E("B",1050,!0)},a?"B 区域：1050 与 1054":"Compare B: 1050 and 1054"),e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:149:5","data-os-action":"",onClick:()=>{try{E(t())}catch(b){S(b.message)}}},a?"使用当前热点与选区":"Use current hotspot and ROI"),e.createElement("label",{"data-os-loc":"src/field/FixedWaveWindow.jsx:150:5"},a?"恢复六帧 JSON":"Restore six-frame JSON"," ",e.createElement("input",{"data-os-loc":"src/field/FixedWaveWindow.jsx:150:54","data-os-action":"",type:"file","aria-label":"Restore six-frame JSON",accept:".json",onChange:b=>{g(b.target.files[0]),b.target.value=""}})),u&&e.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:151:17",role:"alert"},u),c&&!C&&e.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:152:29",role:"status"},a?"正在读取六帧高度…":"Loading six height frames…"),C?.error&&e.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:153:23",role:"alert"},C.error," ",e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:153:54","data-os-action":"",onClick:()=>i(null)},a?"重置":"Reset")),m&&B&&(!B.rows[0].region||B.selection.sourceFrame!==1049)?e.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:155:7",role:"alert"},a?"B 案例固定选区或来源帧不符。":"The fixed B region or source frame does not match."):m&&B&&e.createElement(zl,{data:B,bundle:n,zh:a,metricId:x,recorded:h,onTrack:w}),M&&e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:157:15"},"XZ (",ra(B.x),", ",ra(B.z),") · ",B.selection.directionDeg,"° · ",a?"固定世界位置。蓝 GT，橙预测，紫色为预测减 GT。":"Fixed world position. Blue GT, orange prediction, purple prediction minus GT."),e.createElement("table",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:5"},e.createElement("thead",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:12"},e.createElement("tr",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:19"},(a?["帧","中心高度差","ROI 平均偏差","ROI MAE","共同有效 / 候选"]:["Frame","Centre height difference","ROI mean bias","ROI MAE","Common / candidate"]).map(b=>e.createElement("th",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:167",key:b},b)))),e.createElement("tbody",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:5"},B.rows.map(b=>e.createElement("tr",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:30","data-review-frame":b.frameId,key:b.frameId},e.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:80"},e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:84","data-os-action":"","aria-pressed":o===b.frameId,onClick:()=>r(b.frameId)},b.frameId)),e.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:7"},ra(b.centre?.difference)),e.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:46"},ra(b.stats.bias)),e.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:77"},ra(b.stats.mae)),e.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:107"},b.stats.common," / ",b.stats.candidates))))),e.createElement(zt,{reviewId:"fixed-wave-"+M.region,profile:M.profile,roi:B.roi,limits:B.limits,errorLimit:B.error,label:(a?"固定剖面 ":"Fixed profile ")+o}),e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:162:5","data-os-action":"",onClick:()=>kn("OceanScope-six-frame.json","application/json",JSON.stringify(Cc(n,B,o),null,2))},a?"下载六帧 JSON":"Download six-frame JSON"),e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:163:5","data-os-action":"",onClick:()=>kn("OceanScope-six-frame.csv","text/csv",["frame,hotspot_difference,roi_bias,roi_mae,common,candidate",...B.rows.map(b=>[b.frameId,b.centre?.difference,b.stats.bias,b.stats.mae,b.stats.common,b.stats.candidates].join(","))].join(`
`))},a?"下载逐帧 CSV":"Download six-frame CSV"),e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:164:5","data-os-action":"",onClick:()=>{const b=j.current.querySelector(":scope > figure svg").cloneNode(!0);b.setAttribute("xmlns","http://www.w3.org/2000/svg"),kn("OceanScope-profile-"+o+".svg","image/svg+xml",b.outerHTML)}},a?"下载当前剖面 SVG":"Download profile SVG")),e.createElement(Al,{zh:a}),e.createElement(Cl,{zh:a}))}function Zl({zh:n}){const a=[{id:"MAE",name:n?"平均绝对误差":"Mean absolute error",formula:"MAE = Σ|eᵢ| / N",meaning:n?"平均差多少，不区分偏高或偏低。越接近 0 越好。":"Average error size, regardless of direction. Closer to 0 is better."},{id:"Bias",name:n?"平均有符号偏差":"Mean signed error",formula:"Bias = Σeᵢ / N",meaning:n?"正值表示预测偏高，负值表示偏低。正负误差会抵消，所以 Bias 接近 0 不代表每个位置都准确。":"Positive means the prediction is higher; negative means lower. Opposite errors can cancel, so a near-zero bias does not guarantee small errors."},{id:"RMSE",name:n?"均方根误差":"Root mean square error",formula:"RMSE = √(Σeᵢ² / N)",meaning:n?"先平方、求平均，再开平方，对较大的误差更敏感。越接近 0 越好；它不是最大误差。":"Square the errors, average them, then take the square root. More sensitive to large errors; closer to 0 is better. This is not the maximum error."}];return e.createElement("details",{"data-os-loc":"src/field/HeightMetricHelp.jsx:9:9",className:"height-metric-help"},e.createElement("summary",{"data-os-loc":"src/field/HeightMetricHelp.jsx:10:3"},n?"MAE、Bias、RMSE 怎么看？说明与公式":"How to read MAE, Bias and RMSE — definitions & formulas"),e.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:11:3",className:"height-metric-help-body"},e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:12:4"},n?"先在同一位置比较水面高度：Aᵢ 是 GT（参考值），Bᵢ 是预测值，eᵢ = Bᵢ − Aᵢ。以下高度与误差统一用 cm 表示；1 m = 100 cm。":"Compare heights at the same location: Aᵢ is GT (the reference), Bᵢ is the prediction, and eᵢ = Bᵢ − Aᵢ. Heights and errors below use cm; 1 m = 100 cm."),e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:13:4"},n?"N 是当前统计范围内两边都有有效高度的位置数，也叫“共同列”。每个 (X, Z) 位置对应一条竖直列，取其最上层水面高度。Σ 表示将这 N 个位置的数相加。缺失位置不补零；N = 0 时不提供误差分数。":"N is the number of locations with valid heights in both datasets within the current scope, also called common columns. Each (X, Z) location defines a vertical column with a topmost surface height. Σ sums over these N locations. Missing locations are not filled with zero; no error score is available when N = 0."),e.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:4",className:"height-metric-formulas"},a.map(t=>e.createElement("article",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:61",key:t.id},e.createElement("h3",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:84"},t.id," · ",t.name),e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:116",className:"height-metric-formula"},t.formula),e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:171"},t.meaning)))),e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:15:4",className:"height-metric-example"},e.createElement("strong",{"data-os-loc":"src/field/HeightMetricHelp.jsx:15:41"},n?"小例子：":"Example: "),n?"两个位置分别偏低 1 cm、偏高 3 cm，即 e = −1、+3 cm。MAE = 2 cm，Bias = +1 cm，RMSE = √5 ≈ 2.24 cm。三个指标从不同角度描述同一组误差。":"At two locations, the prediction is 1 cm lower and 3 cm higher: e = −1, +3 cm. MAE = 2 cm, Bias = +1 cm, and RMSE = √5 ≈ 2.24 cm. The metrics describe different aspects of the same errors."),e.createElement("dl",{"data-os-loc":"src/field/HeightMetricHelp.jsx:16:4",className:"height-metric-scopes"},e.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:5"},e.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:10"},n?"当前帧 · 全域":"Current frame · Full domain"),e.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:64"},n?"当前这一帧内，所有共同有效位置的统计；不是全部 96 帧的平均。":"All paired valid locations in this frame; not an average over all 96 frames.")),e.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:5"},e.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:10"},n?"选区 · ROI":"Selected region · ROI"),e.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:58"},n?"只统计已应用的矩形选区内的位置。ROI 是“感兴趣区域”；改变选区不会改变当前帧全域或全序列评分。":"Only locations inside the applied rectangle. ROI means region of interest. Changing it does not change full-frame or sequence scores.")),e.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:5"},e.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:10"},n?"单点探针 / 截面":"Point probe / Profile"),e.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:59"},n?"探针读数来自一个点击位置；曲线沿当前整条截面显示，并不自动裁剪到 ROI。两者都不能当作选区平均值。":"The probe reads one clicked location. The profile follows the current full section and is not automatically cropped to the ROI. Neither is an ROI average."))),e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:21:4"},n?"这些是水面高度误差，不是 SDF 场误差或速度误差。此处单位为 cm；固定协议的全序列指标及 %R 请到“时间分析”查看。":"These are surface-height errors, not SDF-field or velocity errors. Values here use cm. Open Time analysis for fixed-protocol sequence metrics and %R.")))}const Ce=(n,a=1)=>n==null?"—":(n*a).toFixed(4);function an(n){const{shape:[a,t],originXYZ:[s,,c],spacing:i}=n.descriptor;return{xmin:s,xmax:s+(t-1)*i,zmin:c,zmax:c+(a-1)*i}}function Gl(n){let a=1/0,t=-1/0,s=0;for(let c=0;c<n.heightA.length;c++){for(const i of["A","B"])n["wet"+i][c]&&(a=Math.min(a,n["height"+i][c]),t=Math.max(t,n["height"+i][c]));n.common[c]&&(s=Math.max(s,Math.abs(n.heightB[c]-n.heightA[c])))}return{height:Number.isFinite(a)?[a,t>a?t:a+1]:[0,1],error:Math.max(s,1e-9)}}function Hl({spatial:n,kind:a,range:t,roi:s,probe:c,profile:i,onRegion:o,onProbe:r,label:f,absolute:l=!1,diagnosis:m,mode:y,onPause:x}){const p=v.useRef(null),h=v.useRef(null),[d,u]=v.useState(null),[S,j]=n.descriptor.shape,_=an(n),E=a==="difference"?null:n[a],w=a==="difference"?n.common:n[a==="heightA"?"wetA":"wetB"];v.useEffect(()=>{const b=p.current,k=b?.getContext("2d");if(!k)return;const R=k.createImageData(j,S);for(let T=0;T<S;T++)for(let I=0;I<j;I++){const $=T*j+I,Z=((S-1-T)*j+I)*4;if(!w[$]){R.data.set([225,230,235,255],Z);continue}const K=n.heightB[$]-n.heightA[$],O=E?E[$]:l?Math.abs(K):K,J=Math.max(0,Math.min(1,(O-t[0])/(t[1]-t[0]))),V=a==="difference"&&!l?J<.5?[80+350*J,130+230*J,220+70*J]:[255,245-350*(J-.5),255-440*(J-.5)]:[35+195*J,75+155*J,155+70*J];R.data.set([...V,255],Z)}k.putImageData(R,0,0);const N=(T,I)=>[(T-_.xmin)/n.descriptor.spacing+.5,S-.5-(I-_.zmin)/n.descriptor.spacing];if(m){const T=Ln(n,m);for(const I of[T.first,T.second])k.strokeStyle="#15373e",k.beginPath(),I.points.forEach(($,Z)=>k[Z?"lineTo":"moveTo"](...N($.x,$.z))),k.stroke()}!m&&i?.points.length&&(k.strokeStyle="#172c43",k.lineWidth=1,k.beginPath(),i.points.forEach((T,I)=>k[I?"lineTo":"moveTo"](...N(T.x,T.z))),k.stroke());const F=d??s;if(F){const[T,I]=N(F.xmin,F.zmax),[$,Z]=N(F.xmax,F.zmin);if(k.strokeStyle="#111",k.lineWidth=1,k.strokeRect(T,I,$-T,Z-I),y==="adjust")for(const[K,O]of[[T,I],[T,Z],[$,I],[$,Z]])k.fillRect(K-1.5,O-1.5,3,3)}if(c){const[T,I]=N(c.x,c.z);k.strokeStyle="#111",k.beginPath(),k.moveTo(T-3,I),k.lineTo(T+3,I),k.moveTo(T,I-3),k.lineTo(T,I+3),k.stroke()}},[n,a,t[0],t[1],s,c,i,l,m,y,d]);function g(b){const k=b.currentTarget.getBoundingClientRect(),R=getComputedStyle(b.currentTarget),N={left:k.left,top:k.top,width:k.width,height:k.height};for(const $ of["Left","Right","Top","Bottom"])N["border"+$]=parseFloat(R["border"+$+"Width"])||0;const{ix:F,iz:T,index:I}=Hi(N,b.clientX,b.clientY,[S,j]);return{x:_.xmin+F*n.descriptor.spacing,z:_.zmin+T*n.descriptor.spacing,index:I}}function C(b,k){if(y!=="adjust"||!k.roi)return{xmin:Math.min(k.x,b.x),xmax:Math.max(k.x,b.x),zmin:Math.min(k.z,b.z),zmax:Math.max(k.z,b.z)};const R=k.roi,N=n.descriptor.spacing,F=b.x-k.x,T=b.z-k.z;let I;return k.corner?(I={...R,[k.corner[0]]:b.x,[k.corner[1]]:b.z},I.xmax-I.xmin<N||I.zmax-I.zmin<N?R:ha(I,_).roi):(I={xmin:R.xmin+F,xmax:R.xmax+F,zmin:R.zmin+T,zmax:R.zmax+T},ha(I,_,{mode:"move"}).roi)}function B(b){if(!h.current)return;const k=g(b),R=h.current;h.current=null,u(null),y==="adjust"?o(C(k,R)):k.index===R.index?r(k):o(C(k,R))}function M(b){const k=g(b),R=n.descriptor.spacing;let N=null;if(s&&y==="adjust"){const F=["xmin","xmax"].find(I=>Math.abs(k.x-s[I])<2*R),T=["zmin","zmax"].find(I=>Math.abs(k.z-s[I])<2*R);F&&T&&(N=[F,T])}y==="adjust"&&s&&!N&&(k.x<s.xmin||k.x>s.xmax||k.z<s.zmin||k.z>s.zmax)||(h.current={...k,roi:s,corner:N},x?.(),b.currentTarget.setPointerCapture?.(b.pointerId))}return e.createElement("figure",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:58:9","data-review-id":"native-height-"+a+(a==="difference"&&l?"-absolute":"")},e.createElement("figcaption",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:58:103"},f),e.createElement("canvas",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:58:135","data-os-action":"","data-renderer":"native-height","data-review-frame":n.descriptor.frameId,"data-grid-origin":[_.xmin,_.zmin,n.descriptor.spacing].join(","),ref:p,width:j,height:S,"data-hotspot-index":m?.hotspot.index??"","aria-label":a==="heightA"?"GT height map":a==="heightB"?"Prediction height map":l?"Absolute height difference map":"Signed height difference map",onPointerDown:M,onPointerMove:b=>{h.current&&u(C(g(b),h.current))},onPointerUp:B,onPointerCancel:()=>{u(null),h.current=null}}),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:58:734"},"X ",Ce(_.xmin),"…",Ce(_.xmax)," · Z ",Ce(_.zmin),"…",Ce(_.zmax)," m"),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:58:844"},Ce(t[0])," … ",Ce(t[1])," m"))}function ql({profile:n,zh:a}){const t=n.points,s=t.flatMap(y=>[y.a,y.b]).filter(Number.isFinite),c=t.map(y=>y.difference).filter(Number.isFinite);if(!s.length)return e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:62:27",role:"status"},a?"此剖面没有有效高度。":"No valid heights on this profile.");const i=Math.min(...s),o=Math.max(...s),r=Math.max(o-i,1e-9),f=Math.max(...c.map(Math.abs),1e-9),l=Math.max(t.at(-1)?.distance||0,1e-9);function m(y,x=!1){let p=!1;return t.map(h=>{if(h[y]===null)return p=!1,"";const d=42+h.distance/l*640,u=x?235-h[y]/f*42:166-(h[y]-i)/r*130,S=p?"L":"M";return p=!0,`${S}${d},${u}`}).join(" ")}return e.createElement("figure",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:9","data-review-id":"protocol-height-profile","data-profile-axis":[0,l,42,682].join(","),className:"protocol-profile"},e.createElement("figcaption",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:137"},a?"同一截面 · 蓝色GT／橙色预测 · B−A":"Same section · blue GT / orange prediction · B−A"," · ",n.sampling==="native_columns"?a?"原生列":"Native columns":a?"四邻点共同有效 · 插值诊断":"Four valid neighbors · interpolated diagnosis"),e.createElement("svg",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:380",viewBox:"0 0 720 300",role:"img","aria-label":"Protocol height profile"},e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:455",x:"8",y:"18"},"Y (m)"),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:486",x:"42",y:"30"},Ce(o)),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:526",x:"42",y:"185"},Ce(i)),e.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:567",d:m("a"),fill:"none",stroke:"#2583c5",strokeWidth:"2"}),e.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:633",d:m("b"),fill:"none",stroke:"#e08b22",strokeWidth:"2"}),e.createElement("line",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:699",x1:"42",y1:"235",x2:"682",y2:"235",stroke:"#798699",strokeDasharray:"4 3"}),e.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:780",d:m("difference",!0),fill:"none",stroke:"#9b4778",strokeWidth:"1.5"}),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:862",x:"4",y:"220"},"B−A"),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:892",x:"4",y:"240"},"0"),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:920",x:"600",y:"295"},Ce(l)," m"),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:969",x:"44",y:"295"},a?"沿截面距离":"Section distance"," · ±",Ce(f)," m")))}function hc({value:n,label:a,zh:t}){return e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:67:43",className:"protocol-metrics","aria-label":a},e.createElement("strong",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:68:2"},a==="ROI metrics"?t?"选区 · 水面高度":"ROI · Surface height":t?"当前帧全域 · 水面高度":"Full frame · Surface height"),e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:69:2",className:"protocol-metric-cards"},e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:70:3"},e.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:70:8"},t?"有效对比点":"Paired valid locations"," ",n.common),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:70:73"},t?"共同列 · 两边都有有效高度":"Common columns · valid heights in both")),n.common?e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:72:4"},e.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:72:9"},"MAE ",Ce(n.mae_m,100)," cm"),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:72:54"},t?"平均差多少 · 越小越好":"Average error size · lower is better")),e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:73:4"},e.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:73:9"},"Bias ",Ce(n.bias_m,100)," cm"),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:73:56"},t?"平均偏差 · 正值偏高，负值偏低":"Mean signed error · positive higher, negative lower")),e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:74:4"},e.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:74:9"},"RMSE ",Ce(n.rmse_m,100)," cm"),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:74:56"},t?"对大误差更敏感 · 越小越好":"More sensitive to large errors · lower is better"))):e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:75:7"},t?"不可用：无共同有效列":"Unavailable: no common columns")))}function Yl({workspaceSelection:n,onWorkspaceRoi:a,onSpatialState:t,carried:s,linkedPoint:c,onManualHeightPick:i,onHeightMark:o,spatial:r,plane:f,sliceIndex:l,rotationAxis:m,angle:y,sectionPercent:x,zh:p,restored:h,controlRef:d,onPause:u,onOpenVelocity:S,reviewRequest:j,onReviewApplied:_}){const[E,w]=v.useState(0),[g,C]=v.useState(h?.roi??s?.roi??an(r)),[B,M]=v.useState(h?.probe??null),[b,k]=v.useState(()=>h?.roi??an(r)),[R,N]=v.useState(()=>Wa(h?.roi??an(r))),[F,T]=v.useState({}),I=n?n.roi:g;v.useEffect(()=>{const D=I??an(r);k(D),N(Wa(D)),T({})},[I]);const[$,Z]=v.useState(h?.diagnosis??null),[K,O]=v.useState(h?.appearance?.absoluteError??s?.absolute??!1),[J,V]=v.useState("select"),[be,G]=v.useState("");v.useEffect(()=>{t?.({roi:I,absolute:K,directionDeg:$?.directionDeg??s?.directionDeg??0})},[I,K,$?.directionDeg,t]),v.useEffect(()=>{if(!o)return;const D=B&&r.wetA[B.index]?r.heightA[B.index]:null,Q=I?[[I.xmin,I.zmin],[I.xmax,I.zmin],[I.xmax,I.zmax],[I.xmin,I.zmax]].map(([we,ke])=>[we,D??0,ke]):null;return o({frame:r.descriptor.frameId,value:I||D!=null?{source:"height",corners:Q,probe:D!=null?[B.x,D,B.z]:null}:null}),()=>o(null)},[r,B,I,o]),v.useEffect(()=>{if(!c||c.frame!==r.descriptor.frameId)return;const D=m0(c.world,r.descriptor);if(!D||!r.common[D.index]){M(D),Z(null),G(D?p?"该速度点所在列无共同有效水面高度。":"No jointly valid height at the selected velocity column.":p?"该速度点未落在当前高度图的原生列中心。":"The selected velocity point does not coincide with a native height column.");return}const Q=Mt(r,{ix:D.ix,iz:D.iz,resourceKey:JSON.stringify(r.descriptor)});M(Q.hotspot),Z(we=>we?.hotspot.index===Q.hotspot.index?we:{...Q,directionDeg:we?.directionDeg??s?.directionDeg??0}),G("")},[c,r]);function P(D){i?.(D),u?.(),M(D);try{const Q=r.descriptor.shape[1],we=Mt(r,{ix:D.index%Q,iz:Math.floor(D.index/Q),resourceKey:JSON.stringify(r.descriptor)});Z(ke=>({...we,directionDeg:ke?.directionDeg??s?.directionDeg??0})),!n&&h?.appearance?.workspace?.roiMode==="follow"&&se(Rc(I,"follow",[D.x,D.z],an(r))),G("")}catch{Z(null),G(p?"该点没有共同有效高度；保留选点和固定区域，读数缺测。":"No paired height here; point and fixed region retained, reading unavailable.")}}const z=Sl(R,b,F),L=Object.keys(z.errors).length?p?"请补全数字；每个轴的最小值不能大于最大值。当前已应用的选区未改变。":"Enter all numeric bounds; each minimum must be no greater than its maximum. The applied ROI is unchanged.":"";v.useImperativeHandle(d,()=>({capture:()=>({spatial:r,roi:I,probe:B,diagnosis:$,appearance:{absoluteError:K,...n?{workspace:n}:{}}})}));const q=v.useMemo(()=>Gl(r),[r]),ge=v.useMemo(()=>fa(r),[r]),re=v.useMemo(()=>I?fa(r,I):null,[r,I]),le=v.useMemo(()=>{if(f==="xz"||f==="oblique"&&m!=="y")return null;try{return _c(r,{plane:f,index:Math.max(0,Math.min((f==="xy"?r.descriptor.shape[0]:r.descriptor.shape[1])-1,l)),angle:y,sectionPercent:x})}catch{return null}},[r,f,l,m,y,x]);function se(D){Z(we=>we?.crest?{...we,crest:void 0}:we),C(D),a?.(D);const Q=D??an(r);k(Q),N(Wa(Q)),T({})}function hn(){Z(Q=>Q?.crest?{...Q,crest:void 0}:Q);const D=an(r);C(D),a?.(D),k(D),N(Wa(D)),T({})}function Ue(){z.valid&&(fa(r,z.values),se({...z.values}))}const Be=B?.index,Ee=r.descriptor,cn=Ee.resources&&[Ee.protocolSha256,Ee.manifestA,Ee.manifestB,...Object.keys(Ee.resources).sort().map(D=>Ee.resources[D].sha256)].join("/"),Je=cn&&$&&I?{frame:Ee.frameId,run:Ee.runId,identity:cn,ix:$.hotspot.ix,iz:$.hotspot.iz,x:$.hotspot.x,z:$.hotspot.z,roi:I,direction:$.directionDeg,absolute:K,note:$.caseNote??"",...$.crest&&{crest:$.crest}}:null;return v.useEffect(()=>{if(!(!j||j.frame!==Ee.frameId)){try{const D=j,Q=Mt(r,{ix:D.ix,iz:D.iz,resourceKey:JSON.stringify(Ee)});if(D.identity!==cn||D.run!==Ee.runId||D.x!==Q.hotspot.x||D.z!==Q.hotspot.z||ha(D.roi,an(r)).clipped||!Number.isFinite(D.direction)||D.direction<0||D.direction>=180||typeof D.absolute!="boolean"||typeof D.note!="string"||D.note.length>120)throw Error();const we={...Q,roi:D.roi,directionDeg:D.direction,caseNote:D.note,...D.crest&&{crest:D.crest}};D.crest&&it({profiles:Ln(r,we),roi:D.roi},D.crest),se(D.roi),Z(we),M(Q.hotspot),O(D.absolute),G("")}catch{Z(null),M(null),hn(),G(p?"批注与当前水面数据不匹配。":"The annotation does not match the current surface data.")}_()}},[j,r]),e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:137:9","data-hotspot-review":Je?JSON.stringify({surface:Je}):void 0},e.createElement("h2",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:138:3"},p?"高度与选区分析 · 帧 ":"Height & ROI analysis · frame ",r.descriptor.frameId),e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:139:3"},p?"原生列高度 · 最高过零点 · 共同有效域。点击探针，拖动选择ROI；灰色为无效区域。A/B共用色标，B−A正值表示预测偏高。":"Native highest-crossing columns and common support. Click to probe; drag to select ROI. Gray is invalid. Shared A/B scale; positive B−A means prediction is higher."),e.createElement("label",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:140:3"},e.createElement("input",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:140:10","data-os-action":"",type:"checkbox","aria-label":"Absolute height error",checked:K,onChange:D=>O(D.target.checked)}),p?"绝对误差 |B−A|（取消为有符号差值）":"Absolute error |B−A| (clear for signed difference)"),be&&e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:141:20",role:"alert"},be),e.createElement(lo,{value:E,onChange:w,zh:p}),e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:142:70",className:"protocol-maps","data-mobile-role":E},[["heightA","A / GT"],["heightB","B / Prediction"],["difference","B−A"]].map(([D,Q])=>e.createElement(Hl,{key:D,spatial:r,kind:D,label:D==="difference"&&K?"|B−A|":Q,roi:I,probe:B,profile:le,diagnosis:$,mode:J,onPause:u,absolute:K,range:D==="difference"?[K?0:-q.error,q.error]:q.height,onRegion:se,onProbe:P}))),e.createElement(jl,{spatial:r,diagnosis:$,roi:I,mode:J,setMode:V,onRegion:se,onExit:()=>Z(null),onNote:D=>Z(Q=>({...Q,caseNote:D})),onCrest:D=>Z(Q=>({...Q,crest:D})),onDirection:D=>Z(Q=>({...Q,directionDeg:D,crest:void 0}))}),$&&S&&e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:144:31"},e.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:144:34","data-os-action":"",disabled:!Rn(r.descriptor.frameId)||!I,onClick:()=>{u?.();const D={frame:r.descriptor.frameId,hotspotXZ:{x:$.hotspot.x,z:$.hotspot.z},roiXZ:{...I},surfaceCaseId:r.descriptor.runId??"best-1027",caseNote:$.caseNote??"",surfaceIdentity:Object.fromEntries(["runId","protocolSha256","manifestA","manifestB"].map(Q=>[Q,r.descriptor[Q]]))};Je?S(D,null,Je):S(D)}},p?"查看此区域速度":"Inspect velocity in this region"),p?" · 原生速度诊断支持 1001、1049、1096 帧。保留 XZ，单独选择水下 Y 层。":" · Native velocity diagnosis is available for 1001, 1049 and 1096. Retain XZ and choose an underwater Y layer separately."),e.createElement(hc,{value:ge,label:"Frame spatial metrics",zh:p}),e.createElement(Zl,{zh:p}),e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:147:3",className:"protocol-roi-help"},p?"ROI = 局部选区。X、Z 是水平方向，Y 是高度方向；下面四个边界确定矩形范围，点击“应用选区”后更新局部统计。":"ROI = region of interest. X and Z are horizontal; Y is height. The four bounds define a rectangle. Select Apply ROI to update its statistics."),e.createElement("form",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:148:3",onSubmit:D=>{D.preventDefault(),Ue()}},e.createElement("fieldset",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:148:52",className:"protocol-roi"},e.createElement("legend",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:148:87"},p?"选区范围 · 世界坐标（m）":"ROI bounds · world coordinates (m)"),[["xmin","X min"],["xmax","X max"],["zmin","Z min"],["zmax","Z max"]].map(([D,Q])=>e.createElement("label",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:148:252",key:D},Q,e.createElement("input",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:148:276","data-os-action":"","aria-label":`ROI ${Q}`,type:"number",step:"any",value:R[D],title:String(b[D]),"aria-invalid":!!z.errors[D],"aria-describedby":z.errors[D]?"roi-input-error":void 0,onChange:we=>{N(ke=>({...ke,[D]:we.target.value})),T(ke=>({...ke,[D]:!0}))}}))),e.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:148:589",type:"submit",disabled:!z.valid},p?"应用选区":"Apply ROI"),e.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:148:669","data-os-action":"",type:"button",onClick:hn},p?"恢复全域":"Reset to full domain")),L&&e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:148:778",id:"roi-input-error",role:"alert"},L)),e.createElement(wc,{zh:p,subject:"Best_1027 · "+r.descriptor.frameId,context:[K?"|B−A|":"B−A",B&&"XZ "+B.x.toFixed(4)+", "+B.z.toFixed(4),I&&"ROI X ["+I.xmin+", "+I.xmax+"] Z ["+I.zmin+", "+I.zmax+"]",$&&"Profile "+$.directionDeg+"°"].filter(Boolean).join(" · "),viewLink:Gi+"#analysis-height"}),re&&e.createElement(hc,{value:re,label:"ROI metrics",zh:p}),B&&e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:155:11","aria-label":"Protocol probe"},e.createElement("strong",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:155:42"},p?"单点探针（不是选区平均）":"Point probe (not an ROI average)"),e.createElement("br",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:155:113"}),"X ",Ce(B.x)," / Z ",Ce(B.z)," m · A / GT ",Ce(r.wetA[Be]?r.heightA[Be]:null)," / B / ",p?"预测":"Prediction"," ",Ce(r.wetB[Be]?r.heightB[Be]:null)," m · B−A ",Ce(r.common[Be]?r.heightB[Be]-r.heightA[Be]:null,100)," cm"),!$&&le&&e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:156:25",className:"protocol-profile-help"},p?"曲线怎么看：蓝线是 GT，橙线是预测；紫线是 B−A，零线上方表示预测偏高，下方表示偏低。横轴是沿截面的距离，纵轴是高度；曲线显示整条截面，不只显示 ROI。":"Reading the profile: blue is GT, orange is prediction. Purple is B−A: above zero means higher, below means lower. The horizontal axis is section distance; the vertical axis is height. The profile covers the full section, not just the ROI."),!$&&(le?e.createElement(ql,{profile:le,zh:p}):e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:157:62",role:"status"},p?"选择 XY、YZ 或绕Y竖直截面查看高度曲线；水平／倾斜几何截面不作为俯视高度剖面。":"Choose XY, YZ or a vertical Y-axis section for heights; horizontal/tilted geometry is not a top-down height profile.")),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:158:3"},p?"单位：来源约定，未独立标定。高度仅表示俯视最高层，不覆盖完整翻卷内部结构。全序列指标保持原始范围；ROI与插值剖面不替换全局指标。":"Units: source convention, not independently calibrated. Heights describe the topmost layer, not complete overturning geometry. Sequence metrics retain their scope; ROI and interpolated profiles do not replace them."))}function Ll({workspaceSelection:n,onWorkspaceRoi:a,onWorkspaceRestore:t,linkedPoint:s,onManualHeightPick:c,onHeightMark:i,viewMode:o="all",bundle:r,frame:f,plane:l,sliceIndex:m,rotationAxis:y,angle:x,sectionPercent:p,getReportView:h,onRestoreReportView:d,reportControlRef:u,onDownload:S,catalog:j,reportContext:_,onPause:E,onOpenVelocity:w,unifiedRestore:g=!1,reviewRequest:C,onReviewApplied:B}){const{language:M}=ue(),b=M==="zh",k=JSON.stringify([r.runId,r.protocol,r.datasetA,r.datasetB,f]),[R,N]=v.useState(0),[F,T]=v.useState(null),[I,$]=v.useState(null),Z=v.useRef(null),K=v.useRef(_);K.current=_,v.useEffect(()=>{I&&I.view.frame!==f&&$(null)},[f,I]),v.useEffect(()=>{const L=new AbortController;let q=!0;return(async()=>{try{const ge=await Ka(ya,Qa.indexSha256,r),re=ge.frames.find(se=>se.frameId===f);if(!re)throw Error("No spatial resource for selected frame");if(!q)return;const le=await ua(re,{...Hn(r),frameId:f},L.signal);q&&T({key:k,spatial:le})}catch(ge){q&&T({key:k,error:ge})}})(),()=>{q=!1,L.abort()}},[r,f,k,R]);const O=v.useRef(null),J=e.useCallback(L=>{O.current=L},[]),V=F?.key===k?F:null;function be(){if(!V?.spatial||!Z.current)throw Error("Wait for verified spatial resources");const L=Z.current.capture(),{view:q,scene:ge}=h(),re=nl({bundle:r,...L,view:q,catalog:j});return{record:re,canvas:pl(re,L.spatial,ge,M)}}async function G(L,q){E?.();const ge=K.current,re=await Ka(ya,Qa.indexSha256,r),le=Zc(L,r,re,{catalog:j}),se=await ua(le.descriptor,{...Hn(r),frameId:le.view.frame},q);if(le.diagnosis&&!se.common[le.diagnosis.hotspot.index])throw Error("Diagnosis hotspot has no paired valid height");if(le.diagnosis?.crest&&it({profiles:Ln(se,le.diagnosis),roi:le.roi},le.diagnosis.crest),q.throwIfAborted(),K.current!==ge)throw Error("View changed while restoring; retry from the current view");return{...le,spatial:se}}async function P(L,q){q.throwIfAborted();const ge=JSON.stringify([r.runId,r.protocol,r.datasetA,r.datasetB,L.view.frame]);T({key:ge,spatial:L.spatial}),$({...L,revision:crypto.randomUUID()}),await d(L.view,q),t?.(L.appearance?.workspace??{roiMode:"fixed",roi:L.roi,world:null,source:"height"},L.probe,!L.appearance?.workspace,L.view)}const z=I?.view.frame===f?I:null;return e.createElement("section",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:199:9",className:"protocol-spatial","aria-label":"Protocol spatial analysis"},e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:199:86","data-review-frame":f,hidden:o==="report"},V?V.error?e.createElement(sn,{error:V.error,zh:b,resource:(b?"水面高度与掩码 · 帧 ":"Height and masks · frame ")+f,onRetry:()=>{T(null),N(L=>L+1)}}):e.createElement(Yl,{workspaceSelection:n,onWorkspaceRoi:a,onSpatialState:J,carried:O.current,linkedPoint:s,onManualHeightPick:c,onHeightMark:i,key:k+(z?.revision??""),reviewRequest:C,onReviewApplied:B,controlRef:Z,restored:z,spatial:V.spatial,plane:l,sliceIndex:m,rotationAxis:y,angle:x,sectionPercent:p,zh:b,onPause:E,onOpenVelocity:w}):e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:199:155",role:"status"},b?`正在加载帧 ${f} 的同协议空间资源…`:`Loading protocol spatial resources for frame ${f}…`),e.createElement(Xl,{bundle:r,zh:b,getSelection:()=>{const L=Z.current?.capture();if(!L?.diagnosis||!L.roi)throw Error(b?"请先点击高度图选择热点并设置选区。":"Select a hotspot on a height map and apply an ROI first.");const{hotspot:q,directionDeg:ge}=L.diagnosis;return{sourceFrame:L.spatial.descriptor.frameId,ix:q.ix,iz:q.iz,x:q.x,z:q.z,roi:{...L.roi},directionDeg:ge}}})),e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:206:8",hidden:o==="height"},h&&e.createElement(_l,{unifiedRestore:g,key:r.runId,controlRef:u,ready:!!V?.spatial,capture:be,prepareImport:G,applyImport:P,onDownload:S,zh:b})))}const $a=["#66d9eb","#ffbf69"];function Ul({pair:n,stopLabels:a,t}){const{gt:s,pred:c,seed:i,split:o,separation:r}=n,f=[i,...s.points,...c.points],l=[0,1].map(w=>{const g=f.map(C=>C[w]);return[Math.min(...g),Math.max(...g)]}),m=Math.max(6*r,...l.map(([w,g])=>g-w)),[y,x]=l.map(([w,g])=>(w+g)/2),p=([w,g])=>[160+(w-y)*250/m,150-(g-x)*250/m],h=[s,c],d=["GT",t("预测","Prediction")],u=p(i);function S(w,g){const[C,B]=p(s.points[w]),[M,b]=p(c.points[w]);return e.createElement("g",{"data-os-loc":"src/field/StreamlineFigure.jsx:19:12","data-event":g?"before":o?"crossing":"last-shared",stroke:g?"#cad4dd":"white"},e.createElement("line",{"data-os-loc":"src/field/StreamlineFigure.jsx:20:7",x1:C,y1:B,x2:M,y2:b,strokeDasharray:g?"2 2":void 0}),[[C,B],[M,b]].map(([k,R],N)=>e.createElement("circle",{"data-os-loc":"src/field/StreamlineFigure.jsx:21:41",key:N,cx:k,cy:R,r:g?2:3,fill:g?"#0d2030":"white"})))}const j=Math.min(s.points.length,c.points.length)-1,_=o?o.i:j;function E(w,g,C){if(!w)return null;const[B,M]=w;return e.createElement("path",{"data-os-loc":"src/field/StreamlineFigure.jsx:29:12",d:`M ${B} ${M} L 305 ${g} H 315`,stroke:C,opacity:".65",fill:"none",strokeWidth:".9"})}return e.createElement("svg",{"data-os-loc":"src/field/StreamlineFigure.jsx:31:10",role:"img","aria-label":t("同起点配对流线","Same-seed paired streamlines"),viewBox:"0 0 480 300",className:"paired-stream-figure"},e.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:32:5",x:"12",y:"21",fill:"#dbe6ea",fontSize:"12"},"+X →　+Z ↑"),h.map((w,g)=>e.createElement("polyline",{"data-os-loc":"src/field/StreamlineFigure.jsx:33:26",key:d[g],fill:"none",stroke:$a[g],strokeWidth:"2.5",strokeDasharray:g?"5 3":void 0,points:w.points.map(C=>p(C).join(",")).join(" ")})),o&&S(o.i-1,!0),_>=0&&S(_,!1),_>=0&&E(p(s.points[_].map((w,g)=>(w+c.points[_][g])/2)),60,"white"),e.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:38:5",x:"320",y:"58",fill:"white",fontSize:"14"},o?t("首次达到分离阈值","First crossing"):j>=0?t("最后共同样点","Last shared sample"):t("无共同样点","No shared samples")),o&&e.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:39:13",x:"320",y:"78",fill:"#cbdce4",fontSize:"12"},t("虚线为越阈前一步","Dotted: preceding step")),h.map((w,g)=>{const C=w.points.at(-1),B=142+80*g,M=C&&p(C);return e.createElement("g",{"data-os-loc":"src/field/StreamlineFigure.jsx:43:14",key:d[g],"data-stop":w.stop},M&&e.createElement(e.Fragment,null,e.createElement("rect",{"data-os-loc":"src/field/StreamlineFigure.jsx:44:17",x:M[0]-3,y:M[1]-3,width:"6",height:"6",fill:"#0d2030",stroke:$a[g]}),E(M,B,$a[g])),e.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:45:9",x:"320",y:B-3,fill:$a[g],fontSize:"15"},d[g]," · ",C?t("终点","end"):t("无法起步","no start")),e.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:46:9",x:"320",y:B+18,fill:"white",fontSize:"13"},a[w.stop]))}),e.createElement("circle",{"data-os-loc":"src/field/StreamlineFigure.jsx:49:5",cx:u[0],cy:u[1],r:"3.5",fill:"#fc6380",stroke:"#181e25"}))}const Xa=n=>n.map(a=>a.toFixed(4)).join(", ");function Jl({pair:n,fine:a,onChange:t,detailsRef:s,layer:c,t:i}){const{gt:o,pred:r,split:f,seed:l,step:m,separation:y,maxArc:x}=n,p={mask:i("共同有效域边界","Common mask boundary"),slow:i("投影流速过低","Low projected speed"),limit:i("积分长度上限","Integration length limit"),grid:i("可插值网格边界","Interpolation grid edge")},h=Math.min(o.points.length,r.points.length)-1,d=f?[[i("越阈前","Before"),f.i-1],[i("首次越阈","First crossing"),f.i]]:h>=0?[[i("最后共同样点","Last shared sample"),h]]:[];return e.createElement("section",{"data-os-loc":"src/field/StreamlinePanel.jsx:18:10",className:"paired-stream-panel","aria-label":"1049 paired streamlines"},e.createElement("h3",{"data-os-loc":"src/field/StreamlinePanel.jsx:19:5"},i("配对瞬时流线 · XZ 投影","Paired instantaneous streamlines · XZ projection")),e.createElement("details",{"data-os-loc":"src/field/StreamlinePanel.jsx:20:5",ref:s,open:!0},e.createElement("summary",{"data-os-loc":"src/field/StreamlinePanel.jsx:20:36"},i("查看流线图与采样位置","Streamline figure and sample positions")),e.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:21:7"},i("共同起点","Shared seed")," XZ (",Xa(l),") · Y ",c," · ",i("红点为起点，青色实线为 GT，橙色虚线为预测。","Red seed, cyan solid GT, orange dashed prediction.")),e.createElement("button",{"data-os-loc":"src/field/StreamlinePanel.jsx:22:7","data-os-action":"",type:"button","aria-pressed":a,onClick:()=>t(!a)},i("半步长复核","Half-step check")),e.createElement("span",{"data-os-loc":"src/field/StreamlinePanel.jsx:23:7",className:"stream-step"},i("当前步长","Current step")," ",m.toFixed(5)),e.createElement(Ul,{pair:n,stopLabels:p,t:i}),e.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:25:7"},f?i("下列相邻样点标出首次观测到间距达到一格的积分步。","These samples bracket the first observed one-cell separation."):h>=0?i("共同积分段内未测到间距达到一格。","No one-cell separation observed on the shared trace."):i("当前起点没有可配对的积分样点。","No paired integration samples at this seed.")),d.length>0&&e.createElement("div",{"data-os-loc":"src/field/StreamlinePanel.jsx:28:26",className:"stream-samples"},e.createElement("table",{"data-os-loc":"src/field/StreamlinePanel.jsx:28:58"},e.createElement("caption",{"data-os-loc":"src/field/StreamlinePanel.jsx:28:65"},i("按相同积分弧长 s 对照，距离沿用来源空间单位","Matched integration arc length s, in source length units")),e.createElement("thead",{"data-os-loc":"src/field/StreamlinePanel.jsx:29:9"},e.createElement("tr",{"data-os-loc":"src/field/StreamlinePanel.jsx:29:16"},[i("样点","Sample"),"s","GT XZ",i("预测 XZ","Pred XZ"),i("间距","Gap")].map(u=>e.createElement("th",{"data-os-loc":"src/field/StreamlinePanel.jsx:29:94",key:u,scope:"col"},u)))),e.createElement("tbody",{"data-os-loc":"src/field/StreamlinePanel.jsx:30:9"},d.map(([u,S])=>{const j=o.points[S],_=r.points[S];return e.createElement("tr",{"data-os-loc":"src/field/StreamlinePanel.jsx:32:18",key:u},e.createElement("th",{"data-os-loc":"src/field/StreamlinePanel.jsx:32:33",scope:"row"},u),e.createElement("td",{"data-os-loc":"src/field/StreamlinePanel.jsx:32:60"},(S*m).toFixed(5)),e.createElement("td",{"data-os-loc":"src/field/StreamlinePanel.jsx:33:13"},Xa(j)),e.createElement("td",{"data-os-loc":"src/field/StreamlinePanel.jsx:33:30"},Xa(_)),e.createElement("td",{"data-os-loc":"src/field/StreamlinePanel.jsx:33:47"},Math.hypot(j[0]-_[0],j[1]-_[1]).toFixed(5)))})))),[o,r].map((u,S)=>e.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:35:32",key:S},S?i("预测","Prediction"):"GT"," · ",p[u.stop]," · ",u.points.length?`s=${((u.points.length-1)*m).toFixed(5)} · XZ (${Xa(u.points.at(-1))})`:i("起点无可积分样点","No accepted point at seed"))),e.createElement("small",{"data-os-loc":"src/field/StreamlinePanel.jsx:36:7"},i("固定帧、固定 Y 的瞬时投影。有效域边界表示下一步插值所需的四个邻点未全部有效。采用归一化方向的中点 RK2。","Instantaneous projection at a fixed frame and Y. At a mask boundary the next interpolation lacks four valid neighbours. Normalized midpoint RK2.")," Δ≥",y.toFixed(5)," · s≤",x.toFixed(4)," · |vXZ|>1e−8")))}function Kl({layer:n,setLayer:a,lattice:t,t:s}){const c=t.dimensions[1]-1,i=n===null?null:t.origin[1]+n*t.axisSteps[1][1],o=r=>{const f=r.target.value.trim(),l=Number(f);f&&Number.isInteger(l)&&l>=0&&l<=c&&a(l)};return e.createElement("fieldset",{"data-os-loc":"src/field/NativeLayerControl.jsx:7:9",className:"native-layer-control"},e.createElement("legend",{"data-os-loc":"src/field/NativeLayerControl.jsx:7:52"},s("三图联动 · 原生 XZ 切层","Linked maps · native XZ slice")),e.createElement("div",{"data-os-loc":"src/field/NativeLayerControl.jsx:8:3",className:"native-layer-strip"},e.createElement("button",{"data-os-loc":"src/field/NativeLayerControl.jsx:9:4","data-os-action":"",type:"button","aria-label":s("上一原生层","Previous native layer"),disabled:n===null||n===0,onClick:()=>a(n-1)},"−"),e.createElement("label",{"data-os-loc":"src/field/NativeLayerControl.jsx:10:4"},s("原生 Y 层","Native Y index")," ",e.createElement("input",{"data-os-loc":"src/field/NativeLayerControl.jsx:10:42","data-os-action":"",type:"number","aria-label":"Velocity Y index",min:"0",max:c,step:"1",value:n??"",onChange:o})),e.createElement("button",{"data-os-loc":"src/field/NativeLayerControl.jsx:11:4","data-os-action":"",type:"button","aria-label":s("下一原生层","Next native layer"),disabled:n===c,onClick:()=>a(n===null?0:n+1)},"+"),e.createElement("input",{"data-os-loc":"src/field/NativeLayerControl.jsx:12:4","data-os-action":"",type:"range","aria-label":"Native Y layer slider",min:"0",max:c,step:"1",value:n??0,"aria-valuetext":n===null?s("未选择","Not selected"):String(n),onChange:o}),e.createElement("output",{"data-os-loc":"src/field/NativeLayerControl.jsx:13:4","aria-label":"Velocity Y world"},s("世界 Y","World Y")," = ",i===null?"—":i.toFixed(8)+" m")))}const Le=(n,a=4)=>n.toFixed(a),It=n=>(n>0?"+":"")+Le(n);function Ql({probe:n,tau:a,t,onStreamlines:s}){const c=n.xyz.map(r=>Le(r,5)).join(", "),i=r=>Math.hypot(r[0],r[2]),o=r=>Math.abs(r[1])>i(r);return e.createElement("section",{"data-os-loc":"src/field/VelocityProbe.jsx:9:9",className:"velocity-readout","aria-label":"Velocity probe"},e.createElement("div",{"data-os-loc":"src/field/VelocityProbe.jsx:10:3",className:"velocity-readout-heading"},e.createElement("strong",{"data-os-loc":"src/field/VelocityProbe.jsx:10:45"},t("选中点","Selected point")),e.createElement("small",{"data-os-loc":"src/field/VelocityProbe.jsx:10:89"},"XYZ (",c,")")),n.common?e.createElement(e.Fragment,null,e.createElement("dl",{"data-os-loc":"src/field/VelocityProbe.jsx:12:4"},e.createElement("div",{"data-os-loc":"src/field/VelocityProbe.jsx:13:5"},e.createElement("dt",{"data-os-loc":"src/field/VelocityProbe.jsx:13:10"},t("流速差 · 预测 − GT","Speed difference · prediction − GT")),e.createElement("dd",{"data-os-loc":"src/field/VelocityProbe.jsx:13:76"},It(n.speedDelta)," m/s"),e.createElement("small",{"data-os-loc":"src/field/VelocityProbe.jsx:14:5"},"GT ",Le(n.speedGT)," → ",t("预测","Pred")," ",Le(n.speedPred))),e.createElement("div",{"data-os-loc":"src/field/VelocityProbe.jsx:15:5","aria-label":"Velocity probe direction"},e.createElement("dt",{"data-os-loc":"src/field/VelocityProbe.jsx:15:48"},t("三维流向夹角","3D direction angle")),e.createElement("dd",{"data-os-loc":"src/field/VelocityProbe.jsx:16:5"},n.angleDegrees!==null?Le(n.angleDegrees,2)+"°":t("不可判定","Unavailable")),e.createElement("small",{"data-os-loc":"src/field/VelocityProbe.jsx:17:5"},n.angleDegrees!==null?t("用 XYZ 三个分量计算","Uses all three XYZ components"):a===null?t("夹角已停用","Angles disabled"):t("至少一侧流速 ≤ τ","At least one speed ≤ τ"))),e.createElement("div",{"data-os-loc":"src/field/VelocityProbe.jsx:18:5"},e.createElement("dt",{"data-os-loc":"src/field/VelocityProbe.jsx:18:10"},t("切片法向速度 Vy","Slice-normal velocity Vy")),e.createElement("dd",{"data-os-loc":"src/field/VelocityProbe.jsx:18:62"},It(n.vectorGT[1])," → ",It(n.vectorPred[1])),e.createElement("small",{"data-os-loc":"src/field/VelocityProbe.jsx:18:122"},"GT → ",t("预测","Pred")," · m/s · ",t("正值沿 +Y","positive toward +Y")))),[["GT",n.vectorGT],[t("预测","Prediction"),n.vectorPred]].filter(([,r])=>o(r)).map(([r,f])=>e.createElement("p",{"data-os-loc":"src/field/VelocityProbe.jsx:20:103",className:"velocity-normal-note",key:r},r," · ",t("速度主要垂直于切片","Flow is mainly normal to the slice")," (|Vy| ",Le(Math.abs(f[1]))," > XZ ",Le(i(f))," m/s)."," ",t("图上箭头只画 XZ，短箭头不代表总流速低。","Arrows show XZ only; a short arrow does not imply low total speed."))),e.createElement("details",{"data-os-loc":"src/field/VelocityProbe.jsx:22:4"},e.createElement("summary",{"data-os-loc":"src/field/VelocityProbe.jsx:22:13"},t("向量误差与完整分量","Vector error and full components")),e.createElement("p",{"data-os-loc":"src/field/VelocityProbe.jsx:23:5"},"E ",Le(n.E,6)," m/s · GT XYZ (",n.vectorGT.map(r=>Le(r,6)).join(", "),") · ",t("预测","Pred")," XYZ (",n.vectorPred.map(r=>Le(r,6)).join(", "),")"))):e.createElement("p",{"data-os-loc":"src/field/VelocityProbe.jsx:11:14"},t("不在共同有效域。此处没有可比较的速度；空白不代表静止。","Outside common valid domain. There is no comparable velocity here; missing data does not mean still water.")),s&&e.createElement("button",{"data-os-loc":"src/field/VelocityProbe.jsx:25:19","data-os-action":"",type:"button",onClick:s},t("查看此探针的配对流线","Inspect streamlines at this probe")))}function oi({x:n,y:a,dx:t,dy:s}){if(t===0&&s===0)return e.createElement("circle",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:7:27",cx:n,cy:a,r:".5",fill:"none"});const c=Kc(n,a,t,s).map((i,o)=>`${o===0||o===2?"M":"L"} ${i.join(" ")}`).join(" ");return e.createElement(e.Fragment,null,e.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:9:11",d:c,className:"velocity-arrow-outline"}),e.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:9:62",d:c}))}function ed({arrows:n,view:a,role:t}){const s=t==="gt"?"gtOffset":"predOffset";return e.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:14:9",className:"velocity-arrow-layer",role:"img","aria-label":t==="gt"?"Velocity GT arrows":"Velocity prediction arrows",viewBox:`0 0 ${a.width} ${a.height}`,preserveAspectRatio:"none"},n.points.map(c=>e.createElement("g",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:15:25",key:c.index,"data-sample":c.index},e.createElement(oi,{x:c.x-a.x+.5,y:a.z+a.height-c.z-.5,dx:c[s][0],dy:-c[s][1]}))))}function nd({arrows:n,view:a}){const{language:t}=ue(),s=t==="zh";return n.points.length?n.referenceSpeed?e.createElement(e.Fragment,null,e.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:24:3",className:"velocity-arrow-reference","aria-hidden":"true",viewBox:`0 0 ${a.width} 8`,preserveAspectRatio:"none"},e.createElement(oi,{x:a.width*.04,y:4,dx:n.referenceGridLength,dy:0})),e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:27:3"},s?"参考箭头":"Reference arrow"," ",n.referenceSpeed.toPrecision(4)," m/s · ",s?"两图共用线性比例":"Shared linear scale"," · ",n.points.length," ",s?"个配对格点":"paired grid points")):e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:22:35"},s?"空心点表示 XZ 投影为零":"Hollow markers indicate zero XZ projection"):e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:21:34"},s?"当前采样格点无配对箭头":"No paired arrows at the sampled grid points")}function ad({x:n,z:a,view:t}){const s=t.height-a-.5,c=`M ${n+.5} 0 V ${t.height} M 0 ${s} H ${t.width}`;return e.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:34:9",className:"velocity-probe-layer","aria-hidden":"true",viewBox:`0 0 ${t.width} ${t.height}`,preserveAspectRatio:"none"},e.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:35:3",d:c,className:"velocity-probe-outline"}),e.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:35:54",d:c}))}function ri({slice:n,angles:a,mode:t,arrows:s,view:c,zoom:i,frame:o,probe:r,setProbe:f,ranges:l}){const{language:m}=ue(),y=m==="zh",x=n.roiView,p=!i&&x?[x.x/Math.max(1,n.width-1),(x.x+x.width-1)/Math.max(1,n.width-1),x.z/Math.max(1,n.height-1),(x.z+x.height-1)/Math.max(1,n.height-1)]:null,h=r[0]-c.x,d=r[1]-c.z,u=h>=0&&h<c.width&&d>=0&&d<c.height,S=dt(t,m);return e.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:49:9",className:"velocity-triptych"},S.map(({key:j,title:_,label:E,palette:w,role:g})=>{const C=j==="direction"?a.degrees:n[j],B=j==="direction"?a.mask:n.commonMask,M=l[g?"speed":j],b=g?"speed":j==="speedDelta"?"delta":"error",k=R=>R===0?"0":R.toPrecision(5);return e.createElement("figure",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:55:10","data-review-id":"velocity-map-"+j,key:E,"data-review-frame":o,"data-review-slice":E+" Y "+n.sliceIndex},e.createElement("figcaption",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:56:4"},_," · ",y?"帧":"Frame"," ",o," · Y ",n.sliceIndex," · ",y?"世界 Y":"World Y"," ",n.worldAt(0)[1].toFixed(5)," m"),e.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:57:4",className:"velocity-map"},e.createElement(kc,{label:E,slice:{width:n.width,height:n.height,values:C,angleSupport:j==="direction"?n.commonMask:null},maskSlice:{values:B},range:M,palette:w,plane:"xz",viewport:c,aspect:c.width*n.stepX/(c.height*n.stepZ),region:p,onCrosshair:R=>f([c.x+Math.min(c.width-1,Math.floor(R[0]*c.width)),c.z+Math.min(c.height-1,Math.floor(R[1]*c.height))])}),g&&s&&e.createElement(ed,{arrows:s,view:c,role:g}),u&&e.createElement(ad,{x:h,z:d,view:c})),g&&e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:67:12"},y?"颜色：三维总流速":"Colour: full 3D speed",s&&(y?" · 箭头：XZ 投影":" · Arrows: XZ projection")),e.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:68:4",className:"velocity-scale "+b}),e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:69:4"},k(M[0])," → ",j==="speedDelta"?"0 → ":"",k(M[1]),j==="direction"?"°":" m/s",g?y?" · GT / 预测共用色标":" · Shared GT / prediction color scale":""),e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:70:4"},"X → · Z ↑ · ",j==="direction"?y?"灰纹：非共同域；浅黄：共同有效但无夹角":"Grey stripes: outside common domain; pale yellow: valid speed, no angle":y?"灰纹：不在共同有效域":"Grey stripes: outside common valid support"),j==="speedDelta"&&e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:71:25"},y?"蓝色为预测偏慢，红色为预测偏快":"Blue: prediction slower; red: prediction faster"),g&&s&&e.createElement(nd,{arrows:s,view:c}))}))}const An=(n,a=6)=>Number.isFinite(n)?n.toFixed(a):"N/A",gc=n=>n==null?"N/A":(n*100).toFixed(2)+"%",Za=["xmin","xmax","zmin","zmax"];function yc({value:n,angle:a,local:t}){const{language:s}=ue(),c=(o,r)=>s==="zh"?o:r,i=n.counts;return e.createElement("section",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:24:9",className:"velocity-metrics","aria-label":t?"Velocity ROI metrics":"Velocity slice metrics"},e.createElement("h3",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:25:3"},t?c("ROI · 当前 Y 层","ROI · current Y layer"):c("全切片 · 当前 Y 层","Whole slice · current Y layer")),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:3"},c("平均 E ","Mean E "),e.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:28"},An(n.meanE)),c(" · 最大 E "," · Maximum E "),e.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:82"},An(n.maximum?.value)),c(" · 平均 Δs "," · Mean Δs "),e.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:144"},An(n.meanSpeedDelta))),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:27:3"},c("最大 E 的 XYZ：","Maximum E at XYZ: "),n.maximum?.world.map(o=>An(o,5)).join(", ")??"N/A"),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:28:3"},c("候选 ","Candidates "),i.candidate,c(" · GT 资格 "," · GT eligible "),i.gtEligible,c(" · 共同有效 "," · Common valid "),i.common,c(" · 非有限排除 "," · Nonfinite excluded "),i.nonfiniteExcluded),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:29:3"},c("覆盖率：共同 / 候选 ","Coverage: common / candidate "),gc(n.coverageCandidate),c(" · 共同 / GT 资格 "," · Common / GT eligible "),gc(n.coverageGT)),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:30:3"},c("平均三维夹角 ","Mean 3D angle "),An(a.meanDegrees,3),c("° · 夹角有效 ","° · Angle valid "),a.count," / ",i.common,c(" · 低速排除 "," · Low-speed excluded "),a.excludedLowSpeedCount??"N/A"),e.createElement("small",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:31:3"},c("仅 GT 资格 ","GT eligible only "),i.gtOnly,c(" · 仅预测有效 "," · Prediction valid only "),i.predOnly,c(" · 双方掩膜通过 "," · Both masks pass "),i.paired,c("。非有限值另行排除。",". Nonfinite values are excluded separately.")))}function td({onLayer:n,loaded:a,request:t,initial:s,surface:c}){const{language:i}=ue(),o=(H,de)=>i==="zh"?H:de,{frame:r,lattice:f,alignment:l}=a,[m,y]=v.useState(s?.domain??"collaborator-native"),[x,p]=v.useState(()=>s?.y??il({...a,hotspotXZ:t.hotspotXZ,domain:"collaborator-native"}));v.useEffect(()=>{n?.(x)},[n,x]);const[h,d]=v.useState(s?.roi??t.roiXZ),[u,S]=v.useState(()=>Object.fromEntries(Za.map(H=>[H,String((s?.roi??t.roiXZ)[H])]))),[j,_]=v.useState(""),[E,w]=v.useState(()=>s?.probe??Qt(f,t.hotspotXZ)),g=v.useRef(null);function C(){const H=g.current;H&&(H.open=!0,H.querySelector("summary").focus({preventScroll:!0}),H.scrollIntoView({block:"start"}))}const[B,M]=v.useState(s?.streamlineStepFraction===.125),[b,k]=v.useState(s?.mode??"vectorError"),[R,N]=v.useState(s?.zoom??!1),[F,T]=v.useState(s?.showArrows??!0),[I,$]=v.useState(s?s.tau:Mn),[Z,K]=v.useState(I===null?"":String(I)),[O,J]=v.useState(""),V=v.useMemo(()=>x===null?null:es({frame:r,lattice:f,alignment:l,plane:"xz",sliceIndex:x,domain:m,roiXZ:h}),[r,f,l,x,m,h]),be=v.useMemo(()=>V?ns(V,I):null,[V,I]),G=v.useMemo(()=>V&&l.frame===1049&&m==="collaborator-native"?Uc(V,E,B?.125:.25):null,[V,l.frame,m,E,B]),P=!!(R&&V?.roiView),z=v.useMemo(()=>V&&(P?V.roiView:{x:0,z:0,width:V.width,height:V.height}),[V,P]),L=s?.scaleCells??4,q=v.useMemo(()=>F&&z?as(V,z,P?4:16,void 0,L):null,[V,F,z,P,L]),ge=v.useMemo(()=>{let H=0,de=0,Me=0;if(V)for(let _e=0;_e<V.commonMask.length;_e++)V.commonMask[_e]&&(H=Math.max(H,V.speedGT[_e],V.speedPred[_e]),de=Math.max(de,V.vectorError[_e]),Me=Math.max(Me,Math.abs(V.speedDelta[_e])));return{speed:[0,H||1],vectorError:[0,de||1],speedDelta:[-(Me||1),Me||1],direction:[0,180]}},[V]),re=V?E[0]+V.width*E[1]:null,le=V&&E[0]>=0&&E[0]<V.width&&E[1]>=0&&E[1]<V.height&&V.commonMask[re],se=v.useMemo(()=>V?{schema:"oceanscope.velocity-diagnostic-data.v1",scope:`${l.frame} native velocity diagnosis; diagnostic export only`,frame:l.frame,source:l.source,resource:l.resource,protocolSha256:l.protocolSha256,lattice:f,unitClaim:l.unitClaim,unitEvidence:l.unitEvidence,vectorBasis:l.vectorBasis,domain:m,domainDefinition:m==="collaborator-native"?l.domainDefinition:{id:m,rule:"Both velocity-valid masks > 0 AND six finite components; no tank or SDF depth filter"},yIndex:x,yWorld:f.origin[1]+x*f.axisSteps[1][1],surfaceRequest:t,roiXZ:h,probe:{index:re,xyz:V.worldAt(re),common:!!le,speedGT:le?V.speedGT[re]:null,speedPred:le?V.speedPred[re]:null,E:le?V.vectorError[re]:null,speedDelta:le?V.speedDelta[re]:null,vectorGT:le?Array.from(V.vectorsGT.subarray(3*re,3*re+3)):null,vectorPred:le?Array.from(V.vectorsPred.subarray(3*re,3*re+3)):null,angleDegrees:le&&be.mask[re]?be.degrees[re]:null},whole:V.whole,local:V.local,direction:{tau:I,unit:"m/s (source convention)",thresholdSource:I===null?"disabled":I===Mn?"legacy preview numerical epsilon":"user diagnostic input",whole:be.whole,local:be.local},display:{mode:b,view:z,zoomed:P,ranges:ge,arrows:q,scaleCells:L},...G&&{streamlines:{stepFraction:B?.125:.25,seed:G.seed,separation:G.split,gt:{end:G.gt.points.at(-1)??null,stop:G.gt.stop},prediction:{end:G.pred.points.at(-1)??null,stop:G.pred.stop}}}}:null,[V,l,f,m,x,t,h,re,le,be,I,b,z,P,ge,q,G,B,L]),[hn,Ue]=v.useState(null),[Be,Ee]=v.useState(null),[cn,Je]=v.useState(null);v.useEffect(()=>Ee(null),[i]);const D=Be?.data===se&&Be.language===i?Be.files:null;v.useEffect(()=>()=>{for(const H of Object.values(D??{}))URL.revokeObjectURL(H.href)},[D]),v.useEffect(()=>{if(!se){Ue(null);return}const H=URL.createObjectURL(new Blob([JSON.stringify(se,null,2)+`
`],{type:"application/json"}));return Ue({data:se,url:H}),()=>URL.revokeObjectURL(H)},[se]);function Q(){try{const H=oc(se,l,"3e0193c2882ba5b73cf83b55e32d308d67926a4d"),de=hl(H,V,be,q,i).toDataURL("image/png"),Me=lt({stem:`oceanscope-velocity-${l.frame}-y${x}`,record:H,csv:rl(H,V,be),previewUrl:de});Ee({data:se,files:Me,language:i}),Je(null)}catch(H){Je(H)}}function we(){const H=Object.fromEntries(Za.map(de=>[de,Number(u[de])]));if(Za.some(de=>!u[de].trim()||!Number.isFinite(H[de]))||H.xmin>H.xmax||H.zmin>H.zmax){_(o("请填写完整有限数字，最小值不能大于最大值。原选区未改变。","Enter finite values for every bound, with minimum ≤ maximum. The ROI is unchanged."));return}d(H),_("")}function ke(H){H.preventDefault();const de=Z.trim()===""?null:Number(Z);if(de!==null&&(!Number.isFinite(de)||de<0)){J(o("请输入非负有限数，或留空以停用夹角。","Enter a finite nonnegative number, or leave blank to disable angles."));return}$(de),J("")}const Pn=v.useMemo(()=>{if(!c||!se)return null;const H=oc(se,l,"annotation"),{schema:de,source:Me,alignment:_e,plane:va,roi:Ke,probe:In,angleThreshold:Ea,surfaceCase:_a}=H;return JSON.stringify({surface:c,velocity:{schema:de,source:Me,alignment:_e,plane:va,roi:Ke,probe:In,angleThreshold:Ea,surfaceCase:_a,domain:{id:m},appearance:{mode:b,zoom:P},arrows:{enabled:F,scaleCells:L},...G&&{streamlines:{stepFraction:B?.125:.25}}}})},[se,l,c]);return e.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:127:9","data-review-frame":l.frame,"data-hotspot-review":Pn??void 0},e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:3"},o("来自水面热点 X ","From surface hotspot X "),An(t.hotspotXZ.x,5),"，Z ",An(t.hotspotXZ.z,5),o("；保留 XZ 选区。初始 Y 取该列默认域内最上方有效格层，之后由你手动选择，不随水面起伏。","; XZ ROI retained. Initial Y is the highest valid layer in this column within the default domain. Subsequent Y selection is manual and does not follow the surface.")),e.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:129:3",className:"velocity-controls"},e.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:129:38"},o("有效域 ","Valid domain "),e.createElement("select",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:129:72","data-os-action":"","aria-label":"Velocity domain",value:m,onChange:H=>y(H.target.value)},e.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:129:164",value:"collaborator-native"},o("合作者原生域 · 已核对","Collaborator native domain · verified")),e.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:129:268",value:"common-finite-exploration"},o("共同有限域 · 探索","Common finite domain · exploration"))))),e.createElement(Kl,{layer:x,setLayer:p,lattice:f,t:o}),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:131:3",className:"velocity-domain"},m==="collaborator-native"?o("合作者原生域：X [11,212)、Z [11,105)，GT vel_valid > 0、GT SDF < −0.10（float32）、预测 vel_valid > 0，再排除非有限速度。","Collaborator native domain: X [11,212), Z [11,105), GT vel_valid > 0, GT SDF < −0.10 (float32), prediction vel_valid > 0; nonfinite velocities excluded."):o("探索域：双方速度有效且六分量有限；不应用水槽裁剪或 GT 深水阈值，不作协议评分。","Exploration domain: both velocity masks valid and all six components finite; no tank crop or GT deep-water threshold. Not protocol scoring."),o(" 当前显示为一层，非整帧体积评分。"," Showing one layer, not a full-frame volume score.")),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:132:3"},o("速度单位沿用来源声明 m/s；坐标沿用来源声明 m。物理尺度、时间尺度与向量基底尚未独立标定。E = ‖预测向量 − GT 向量‖；Δs = 预测流速 − GT 流速。","Velocity m/s and coordinates m follow source declarations. Physical scale, time scale and vector basis have not been independently calibrated. E = ‖prediction vector − GT vector‖; Δs = prediction speed − GT speed.")),V?e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:134:4",className:"velocity-controls"},e.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:135:5"},o("第三图 ","Third map "),e.createElement("select",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:135:36","data-os-action":"","aria-label":"Velocity comparison map",value:b,onChange:H=>k(H.target.value)},e.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:136:6",value:"vectorError"},o("速度向量误差 E","Velocity vector error E")),e.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:136:84",value:"speedDelta"},o("流速大小差 Δs","Speed difference Δs")),e.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:136:157",value:"direction"},o("三维方向夹角","3D direction angle")))),e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:138:5","data-os-action":"",type:"button","aria-pressed":F,onClick:()=>T(H=>!H)},o("配对箭头","Paired arrows")),e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:139:5","data-os-action":"",type:"button","aria-pressed":P,disabled:!V.roiView,onClick:()=>N(!P)},P?o("返回全切片","Back to whole slice"):o("放大 ROI","Zoom to ROI"))),e.createElement("small",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:141:4",className:"velocity-zoom-key"},o("同层缩放：全图每 16 格、ROI 每 4 格取箭头。按原生网格计的箭长比例、色标和统计范围均不变。","Zoom on this layer: arrows every 16 cells in the full view and every 4 in the ROI. Arrow scale in native cells, colour limits and statistical domains stay fixed.")),e.createElement("form",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:142:4",className:"velocity-controls",onSubmit:ke},e.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:143:5"},o("方向低速阈值（m/s）","Direction low-speed threshold (m/s)"),e.createElement("input",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:143:68","data-os-action":"","aria-label":"Velocity direction threshold",inputMode:"decimal",value:Z,onChange:H=>K(H.target.value)})),e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:144:5",type:"submit"},o("应用方向阈值","Apply direction threshold")),e.createElement("output",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:145:5","aria-label":"Velocity applied threshold"},I===null?o("夹角停用","Angles disabled"):`${o("当前 τ = ","Current τ = ")}${I} m/s · ${I===Mn?o("沿用旧预览数值阈值","Legacy preview numerical threshold"):o("自定诊断阈值","Custom diagnostic threshold")}`)),O&&e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:147:15",role:"alert"},O),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:148:4"},o("双方完整流速均大于 τ 才计算三维夹角。阈值用于诊断，等待合作者确认，留空可停用夹角。箭头仅显示 XZ 投影，空心点表示投影为零。","The full speed on both sides must exceed τ to calculate a 3D angle. This diagnostic threshold awaits collaborator confirmation; leave blank to disable angles. Arrows show only XZ projections; hollow markers indicate zero projection.")),e.createElement(ri,{slice:V,angles:be,mode:b,arrows:q,view:z,zoom:P,frame:l.frame,probe:E,setProbe:w,ranges:ge}),e.createElement(Ql,{probe:se.probe,tau:I,t:o,onStreamlines:G?C:null}),e.createElement("form",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:151:4",onSubmit:H=>{H.preventDefault(),we()}},e.createElement("fieldset",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:151:54",className:"velocity-controls"},e.createElement("legend",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:151:94"},o("速度 ROI · 世界坐标 XZ（不改变 Y）","Velocity ROI · world XZ coordinates (Y unchanged)")),Za.map(H=>e.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:151:208",key:H},H,e.createElement("input",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:151:226","data-os-action":"","aria-label":"Velocity ROI "+H,type:"text",inputMode:"decimal",value:u[H],onChange:de=>S(Me=>({...Me,[H]:de.target.value}))}))),e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:151:379",type:"submit"},o("应用速度选区","Apply velocity ROI")))),j&&e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:151:473",role:"alert"},j),G&&e.createElement(Jl,{detailsRef:g,layer:x,pair:G,fine:B,onChange:M,t:o}),e.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:153:4",className:"velocity-statistics"},e.createElement(yc,{value:V.whole,angle:be.whole}),e.createElement(yc,{value:V.local,angle:be.local,local:!0})),e.createElement("section",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:154:4",className:"velocity-report","aria-label":"Velocity report"},e.createElement("h3",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:155:5"},o("可恢复速度报告","Restorable velocity report")),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:156:5"},o("用当前切片、选区和显示设置生成一份报告。配套 JSON 可从“报告与恢复”重新打开。","Generate a report from the current slice, ROI and display settings. Reopen its JSON in Reports & restore.")),e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:157:5","data-os-action":"",type:"button",onClick:Q},o("生成当前速度报告","Generate current velocity report")),e.createElement(sn,{error:cn,zh:i==="zh"}),D&&e.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:159:19",className:"velocity-report-downloads"},Object.entries(D).map(([H,de])=>e.createElement("a",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:160:54",key:H,href:de.href,download:de.name},H==="json"?o("下载可恢复速度 JSON","Download restorable velocity JSON"):o("下载速度报告 ","Download velocity report ")+H.toUpperCase()))),Be&&!D&&e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:162:28",role:"status"},o("视图已更新。请重新生成速度报告。","The view or language changed. Generate the velocity report again."))),hn?.data===se&&e.createElement("a",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:164:28",download:`oceanscope-velocity-${l.frame}-y${x}-data.json`,href:hn.url},o("导出速度诊断数据 JSON（不用于恢复）","Export velocity diagnostic data JSON (not restorable)"))):e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:133:11",role:"status"},o("热点列内没有共同有效点。请选择明确的 Y 层；不会移到其他 XZ。","No common valid point in the hotspot column. Select an explicit Y layer; XZ will not move.")))}function sd({onLayer:n,frameNumber:a,request:t,restored:s,surface:c,markView:i}){const{language:o}=ue(),r=(d,u)=>o==="zh"?d:u,[f,l]=v.useState(null),[m,y]=v.useState(0),x=t?.frame===a&&!!Rn(a);v.useEffect(()=>{const d=u=>{!f?.loaded&&!s&&u.detail?.includes(a)&&y(S=>S+1)};return window.addEventListener("oceanscope-velocity-files",d),()=>window.removeEventListener("oceanscope-velocity-files",d)},[f,s,a]),v.useEffect(()=>{if(!x||s){l(null);return}const d=new AbortController;let u=!0;return l(null),Kt(a,{signal:d.signal}).then(S=>{u&&l({frameNumber:a,request:t,loaded:S})}).catch(S=>{u&&l({frameNumber:a,request:t,error:S})}),()=>{u=!1,d.abort()}},[a,t,x,m,s]);const p=s??(f?.frameNumber===a&&f?.request===t?f:null),h=p?.loaded?"ready":p?.error?.code==="VELOCITY_FILE_REQUIRED"?"missing":p?.error?"error":"loading";return e.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:184:9",className:"velocity-diagnosis","data-velocity-state":h,"data-velocity-frame":a},e.createElement("h2",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:184:115"},r("速度与方向诊断 · 帧 ","Velocity and direction diagnosis · frame "),a),x?p?.error?e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:184:426",role:"alert"},r("速度资源加载失败：","Velocity resource failed to load: "),p.error.message," ",e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:184:519","data-os-action":"",onClick:()=>y(d=>d+1)},r("重试速度资源","Retry velocity resource"))):p?.loaded?e.createElement(td,{onLayer:n,key:m,loaded:p.loaded,request:t,surface:c,initial:s?.view??i}):e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:184:767",role:"status"},r("正在读取并校验 ","Reading and verifying "),a,r(" 原始值诊断资源…"," raw-value diagnostic resources…")):e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:184:211",role:"status"},r("当前帧 ","Frame "),a,r(" 暂无对应的速度报告视图。请选择已核验帧，并从该帧的水面热点或报告进入。"," has no velocity report view. Choose a verified frame and enter from its surface hotspot or report.")))}const cs="oceanscope.velocity-comparison.v1",cd=[1001,1049,1096],is="best-1027",os="raw-reference-96-e81b8955734e",mt="collaborator-native",Zt=28,Gt=[166,186,80,100],id=4,od=["vectorError","speedDelta","direction"],rd={mode:"direction",probe:[176,90],arrows:!0};function rs(){const n=cd.map(Rn),{lattice:a,protocolSha256:t,domainDefinition:s}=n[0],[c,i,o,r]=Gt,f=p=>a.origin[0]+p*a.axisSteps[0][0],l=p=>a.origin[2]+p*a.axisSteps[2][2],m={xmin:f(c),xmax:f(i),zmin:l(o),zmax:l(r)},y={axis:"xz",yIndex:Zt,yWorld:a.origin[1]+Zt*a.axisSteps[1][1]},x=n.map(p=>({frame:p.frame,gtSha256:p.source.gt.sha256,predSha256:p.source.prediction.sha256,packedSha256:p.resource.packedSha256,decodedSha256:p.resource.decodedSha256}));return{alignments:n,roi:m,plane:y,domain:mt,tau:Mn,domainDefinition:s,protocolSha256:t,sources:x,lattice:a}}function Ja(n){return n.caseId===is&&n.runId===os}async function li(n,a=Kt){const{alignments:t,roi:s,lattice:c,domainDefinition:i}=rs(),o=[];for(const r of t){n.throwIfAborted();const f=await a(r.frame,{signal:n});if(n.throwIfAborted(),f.alignment!==r||JSON.stringify(f.lattice)!==JSON.stringify(c)||JSON.stringify(r.domainDefinition)!==JSON.stringify(i))throw Error("Velocity comparison requires the verified common lattice and protocol");const l=es({...f,plane:"xz",sliceIndex:Zt,domain:mt,roiXZ:s});o.push({frame:r.frame,slice:l,angles:ns(l,Mn)})}return ld(o)}function ld(n){const a=n[0].slice,t=new Uint8Array(a.commonMask.length),s=new Uint8Array(t.length),c=[];let i=0,o=0,r=0,f=0,l=0,m=0;for(let p=0;p<t.length;p++)if(!(!a.roiMask[p]||!a.candidateMask[p])&&(c.push(p),!!n.every(({slice:h})=>h.commonMask[p]))){t[p]=1,i++,n.every(({angles:h})=>h.mask[p])&&(s[p]=1,o++);for(const{slice:h}of n){r=Math.max(r,h.speedGT[p],h.speedPred[p]),f=Math.max(f,h.vectorError[p]),l=Math.max(l,Math.abs(h.speedDelta[p]));for(const d of[h.vectorsGT,h.vectorsPred])m=Math.max(m,Math.hypot(d[p*3],d[p*3+2]))}}const y=a.roiView,x=n.map(({frame:p,slice:h,angles:d})=>{let u=0,S=0,j=0;for(const E of c)t[E]&&(u+=h.vectorError[E],S+=h.speedDelta[E]),s[E]&&(j+=d.degrees[E]);const _={...h,commonMask:t};return{frame:p,nativeMask:h.commonMask,slice:_,angles:{...d,mask:s},arrows:as(_,y,id,m),summary:{frame:p,nativeRoi:h.local.counts.common,meanE:i?u/i:null,meanDelta:i?S/i:null,meanAngle:o?j/o:null}}});return{view:y,rows:x,roiIndices:c,paired:i,anglePaired:o,ranges:{speed:[0,r||1],vectorError:[0,f||1],speedDelta:[-(l||1),l||1],direction:[0,180]}}}function dd(n,a,t){const{roi:s,plane:c,protocolSha256:i,sources:o,domainDefinition:r}=rs();return{schema:cs,createdAt:new Date().toISOString(),source:{caseId:is,runId:os,protocolSha256:i,codeRevision:t,frames:o},scope:{preset:"1049-a-fixed-roi",plane:c,roi:s,domain:mt,domainDefinition:r,tau:Mn},view:a,result:{roiCandidates:n.roiIndices.length,shared:n.paired,sharedAngles:n.anglePaired,ranges:n.ranges,arrowReferenceSpeed:a.arrows?n.rows[0].arrows.referenceSpeed:null,arrowIndices:a.arrows?n.rows[0].arrows.points.map(f=>f.index):[],frames:n.rows.map(f=>f.summary)}}}function Ht(n,a){return!a||typeof a!="object"?n===a:!n||typeof n!="object"||Array.isArray(a)&&(!Array.isArray(n)||n.length!==a.length)?!1:Object.keys(a).every(t=>Ht(n[t],a[t]))}function fd(n,a){if(n.length>1024*1024)throw Error("Velocity comparison report too large");const t=JSON.parse(n),{plane:s,roi:c,protocolSha256:i,sources:o}=rs();if(t?.schema!==cs||!Ja(a)||!Ht(t.source,{caseId:is,runId:os,protocolSha256:i,frames:o})||!Ht(t.scope,{preset:"1049-a-fixed-roi",plane:s,roi:c,domain:mt,tau:Mn}))throw Error("Velocity comparison report source or preset mismatch");const{mode:r,probe:f,arrows:l}=t.view??{};if(!od.includes(r)||typeof l!="boolean"||!Array.isArray(f)||f.length!==2||!f.every((m,y)=>Number.isInteger(m)&&m>=Gt[y*2]&&m<=Gt[y*2+1]))throw Error("Velocity comparison report view is invalid");return{mode:r,probe:f,arrows:l}}async function md(n,a,t){t.throwIfAborted();const s=fd(n,a),c=await li(t);return{view:s,data:c}}function bd(n,a){const t=["frame,native_index,x,y,z,frame_valid,shared_valid,shared_angle_valid,probe,arrow,gt_speed,pred_speed,vector_error,speed_delta,direction_degrees"];for(const{frame:s,nativeMask:c,slice:i,angles:o,arrows:r}of n.rows){const f=new Set(a.arrows?r.points.map(m=>m.index):[]),l=a.probe[0]+i.width*a.probe[1];for(const m of n.roiIndices){const y=i.commonMask[m],x=o.mask[m];t.push([s,m,...i.worldAt(m),c[m],y,x,+(m===l),Number(f.has(m)),...y?[i.speedGT[m],i.speedPred[m],i.vectorError[m],i.speedDelta[m]]:["","","",""],x?o.degrees[m]:""].join(","))}}return t.join(`
`)+`
`}const bn=(n,a=5)=>Number.isFinite(n)?n.toFixed(a):"N/A";function pd({data:n,initialView:a}){const{language:t}=ue(),s=(w,g)=>t==="zh"?w:g,[c,i]=v.useState(a),[o,r]=v.useState(null),[f,l]=v.useState(null);v.useEffect(()=>r(null),[t]);const m=o?.view===c&&o.language===t?o.files:null;v.useEffect(()=>()=>{for(const w of Object.values(m??{}))URL.revokeObjectURL(w.href)},[m]);const{paired:y,anglePaired:x,roiIndices:p,rows:h,ranges:d}=n,u=c.arrows?h[0].arrows.points.length:0,S=c.probe[0]+c.probe[1]*h[0].slice.width,j=h[0].slice.worldAt(S);function _(w){i(g=>({...g,...w})),l(null)}function E(){try{const w=dd(n,c,"3e0193c2882ba5b73cf83b55e32d308d67926a4d"),g=gl(w,n,t).toDataURL("image/png"),C=lt({stem:"oceanscope-best-1027-velocity-comparison",record:w,previewUrl:g,csv:bd(n,c)});r({view:c,files:C,language:t}),l(null)}catch(w){l(w)}}return e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:43:3"},s("Best_1027 · XZ 固定选区 · Y=28（约 −0.10 m）· 合作者原生有效域 · 方向阈值 1e−8 m/s","Best_1027 · fixed XZ ROI · Y=28 (about −0.10 m) · collaborator native domain · direction threshold 1e−8 m/s")),e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:44:3"},s("1049 A 的 ROI 为 X [−1.35, −0.35]、Z [1.45, 2.45] m。三帧共同有效 ","1049 A ROI: X [−1.35, −0.35], Z [1.45, 2.45] m. Common valid across three frames: "),y," / ",p.length,s("，其中三帧均可判定夹角 ","; angles valid in all three: "),x,s("。图和均值使用对应的共同格点，棋盘表示该格点未纳入。",". Maps and means use the corresponding common grid points; checkerboards mark excluded points.")),e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:45:3"},s("流速共用 0–","Shared speed range 0–"),bn(d.speed[1]),s(" m/s。配对箭头共用比例和采样位置"," m/s. Paired arrows share a scale and sampling positions"),c.arrows&&s("，每帧 ",", with ")+u+s(" 个点"," points per frame"),s("。速度和坐标单位沿用来源声明。",". Velocity and coordinate units follow source declarations.")),e.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:46:3",className:"velocity-controls"},e.createElement("label",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:47:4"},s("第三图 ","Third map "),e.createElement("select",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:47:35","data-os-action":"","aria-label":"Three-frame comparison map",value:c.mode,onChange:w=>_({mode:w.target.value})},e.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:48:5",value:"direction"},s("三维方向夹角","3D direction angle")),e.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:49:5",value:"vectorError"},s("速度向量误差 E","Velocity vector error E")),e.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:50:5",value:"speedDelta"},s("流速大小差 Δs","Speed difference Δs")))),e.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:52:4","data-os-action":"",type:"button","aria-pressed":c.arrows,onClick:()=>_({arrows:!c.arrows})},s("三帧配对箭头","Three-frame paired arrows"))),e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:54:3","aria-label":"Three-frame probe"},s("同步探针 XYZ (","Synchronized probe XYZ ("),j.map(w=>bn(w)).join(", "),") · ",h[0].slice.commonMask[S]?s("三帧共同有效","Common valid in all three frames"):s("不在三帧共同有效格点内","Outside the three-frame common grid points")),e.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:55:3",className:"velocity-comparison-table"},e.createElement("table",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:55:46"},e.createElement("caption",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:56:4"},s("固定 ROI · 各帧覆盖与共同样本指标","Fixed ROI · frame coverage and common-sample metrics")),e.createElement("thead",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:4"},e.createElement("tr",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:11"},e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:15"},s("帧","Frame")),e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:40"},s("本帧有效 / 候选","Frame valid / candidate")),e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:91"},s("共同格点平均 E（m/s）","Common-point mean E (m/s)")),e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:148"},s("平均 Δs（m/s）","Mean Δs (m/s)")),e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:190"},s("平均夹角","Mean angle")))),e.createElement("tbody",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:4"},h.map(({frame:w,summary:g})=>e.createElement("tr",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:43",key:w},e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:59",scope:"row"},w),e.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:87"},g.nativeRoi," / ",p.length),e.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:137"},bn(g.meanE)),e.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:169"},bn(g.meanDelta)),e.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:205"},bn(g.meanAngle,2),"°")))))),h.map(({frame:w,slice:g,angles:C,arrows:B})=>e.createElement("section",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:60:49",key:w,className:"velocity-comparison-row","aria-label":`Velocity comparison frame ${w}`},e.createElement("h3",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:61:4"},s("帧 ","Frame "),w),e.createElement(ri,{frame:w,slice:g,angles:C,ranges:d,mode:c.mode,arrows:c.arrows?B:null,view:n.view,zoom:!0,probe:c.probe,setProbe:M=>_({probe:M})}),g.commonMask[S]?e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:64:31"},s("探针 E ","Probe E "),bn(g.vectorError[S])," m/s · Δs ",bn(g.speedDelta[S]),s(" m/s · 夹角 "," m/s · Angle "),C.mask[S]?bn(C.degrees[S],2)+"°":"N/A"):null)),e.createElement("section",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:66:3",className:"velocity-report","aria-label":"Three-frame velocity report"},e.createElement("h3",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:67:4"},s("可恢复三帧报告","Restorable three-frame report")),e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:68:4"},s("CSV 保留三帧各自的 ROI 候选格点与有效标记。JSON 可在“报告与恢复”重新打开，指标会从核验后的资源重算。","CSV retains each frame’s ROI candidate grid points and validity flags. Reopen JSON in Reports & restore; metrics are recomputed from verified resources.")),e.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:69:4","data-os-action":"",type:"button",onClick:E},s("生成三帧速度报告","Generate three-frame velocity report")),e.createElement(sn,{error:f,zh:t==="zh"}),o&&!m&&e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:71:25",role:"status"},s("视图或语言已更新，请重新生成报告。","The view or language changed. Generate the report again.")),m&&e.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:72:14",className:"velocity-report-downloads"},Object.entries(m).map(([w,g])=>e.createElement("a",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:73:5",key:w,href:g.href,download:g.name},s("下载三帧报告 ","Download three-frame report "),w.toUpperCase())))))}function ud({restored:n}){const{language:a}=ue(),t=(f,l)=>a==="zh"?f:l,[s,c]=v.useState(null),[i,o]=v.useState(0);v.useEffect(()=>{const f=()=>{!s?.data&&!n&&o(l=>l+1)};return window.addEventListener("oceanscope-velocity-files",f),()=>window.removeEventListener("oceanscope-velocity-files",f)},[s,n]),v.useEffect(()=>{if(n)return;const f=new AbortController;return c(null),li(f.signal).then(l=>{f.signal.aborted||c({data:l})}).catch(l=>{f.signal.aborted||c({error:l})}),()=>f.abort()},[n,i]);const r=n??s;return e.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:100:9",className:"velocity-diagnosis"},e.createElement("h2",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:101:3"},t("三帧速度对照 · 1001 / 1049 / 1096","Three-frame velocity comparison · 1001 / 1049 / 1096")),r?.data?e.createElement(pd,{data:r.data,initialView:n?.view??rd}):r?.error?e.createElement(e.Fragment,null,e.createElement(sn,{error:r.error,zh:a==="zh"}),e.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:103:84","data-os-action":"",type:"button",onClick:()=>o(f=>f+1)},t("重试三帧资源","Retry three-frame resources"))):e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:104:6",role:"status"},t("正在核验三帧速度资源并计算共同有效格点…","Verifying three-frame velocity resources and computing common valid grid points…")))}function Ga(n,a,t="application/json"){const s=URL.createObjectURL(new Blob([a],{type:t})),c=document.createElement("a");c.href=s,c.download=n,c.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function hd(n){if(!n?.dimensions||!n.axisSteps)return null;const a=[];for(let t=0;t<8;t++)a.push(n.origin.map((s,c)=>s+n.dimensions.reduce((i,o,r)=>i+(t>>r&1)*(o-1)*n.axisSteps[r][c],0)));return{min:[0,1,2].map(t=>Math.min(...a.map(s=>s[t]))),max:[0,1,2].map(t=>Math.max(...a.map(s=>s[t])))}}function gd({focusedLayout:n=!1,workspace:a="3d",onWorkspace:t=()=>{},evaluation:s=null,evaluationError:c="",unifiedRestore:i=!1,onCancelImport:o,onRetryEvaluation:r,comparison:f,processing:l,activeGroup:m,onActiveGroup:y,setup:x,expectedFrames:p,metricsOverride:h,sourceCase:d,viewApiRef:u,initialView:S,onViewReady:j,onViewRestored:_,restoring:E=!1,frameSplit:w=f.frameSplit,readOnly:g=!1,active:C=!0}){const{tr:B,language:M}=ue(),b=M==="zh",k=n,R=k?"3d":"time",[N,F]=v.useState(null),T=v.useRef(null),I=v.useRef(0),$=!!N&&a==="slices",Z=!!N?.comparison&&a==="slices",K={caseId:d?.id,runId:s?.runId},[O,J]=v.useState(null),[V,be]=v.useState("");v.useEffect(()=>{if(!s||d?.id!=="best-1027")return;function A(W){if(W?.page!=="field"||!W.hotspotReview||!["height","slices"].includes(W.section))return;const{surface:U,velocity:ne}=W.hotspotReview;try{if(U?.run!==s.runId||!s.frameIds.includes(U.frame))throw Error();if(W.section==="slices"){const{request:he,view:Ae}=Yc(JSON.stringify(ne),K);if(he.frame!==U.frame||he.hotspotXZ.x!==U.x||he.hotspotXZ.z!==U.z)throw Error();F({request:he,markView:Ae,surface:U,key:++I.current})}q.current?.pause(),$e(U.frame),J(U),be("")}catch{be(b?"批注与当前数据不匹配。":"The annotation does not match this dataset.")}}const X=W=>A(W.detail);return A(et()),window.addEventListener("oceanscope-hotspot-mark",X),()=>window.removeEventListener("oceanscope-hotspot-mark",X)},[s,d?.id]);function G(A,X=null,W=null){q.current?.pause(),Q(!1),F({request:A,restored:X,surface:W,key:++I.current}),t?.("slices")}function P(A=null){q.current?.pause(),Q(!1),F({comparison:!0,restored:A,key:++I.current}),t("slices")}v.useEffect(()=>{if(!k||a!=="3d")return;const A=()=>{window.location.hash==="#analysis-summary"&&document.getElementById("analysis-summary")?.scrollIntoView({block:"start"})};return A(),window.addEventListener("hashchange",A),()=>window.removeEventListener("hashchange",A)},[k,a,s]);const z=S?.settings,L=v.useRef(null),q=v.useRef(null),ge=v.useRef(!1),[re,le]=v.useState(null),[se,hn]=v.useState(""),Ue=n&&f.id==="best-1027",Be=!!d&&f.id!=="best-1027",{presenting:Ee}=qi(),[cn,Je]=v.useState(()=>({presenting:Ee,open:!Ee&&!globalThis.matchMedia?.("(max-width:900px)").matches})),D=cn.presenting===Ee&&cn.open;function Q(A){Je(X=>({presenting:Ee,open:typeof A=="function"?A(X.presenting===Ee&&X.open):A}))}v.useEffect(()=>{n&&q.current?.pause()},[a]);const we=v.useRef(null),[ke,Pn]=v.useState(!0),H=v.useRef(null),[de,Me]=v.useState({subset:"all",metric:"height",grid:"coarse"}),[_e,va]=v.useState(null),[Ke,In]=v.useState(null),[Ea,_a]=v.useState(0),[bt,ls]=v.useState(z?.shading||"original");v.useEffect(()=>{Ee&&q.current?.pause()},[Ee]);const[ds,di]=v.useState(null),[pt,fi]=v.useState(null),[ye,Qe]=v.useState(()=>z?.workspace?{...z.workspace,roi:z.workspace.roi??Ls(l.lattice)}:{roiMode:"fixed",roi:Ls(l.lattice),world:null,source:null}),[mi,bi]=v.useState(!!(S&&!z?.workspace)),ut=v.useCallback(()=>Qe(A=>({...A,world:null,source:null})),[]),[pi,ui]=v.useState("slices"),on=n&&["height","slices"].includes(a);v.useEffect(()=>{on&&ui(a)},[a,on]);const[fs,ms]=v.useState(z?.errorScale||{locked:!1,limit:1}),wa=v.useRef(null),Sa=D0(f);function hi(){wa.current&&(wa.current.open=!0,wa.current.scrollIntoView?.({block:"start"}))}const bs=JSON.stringify(l?.lattice??null),te=v.useMemo(()=>JSON.parse(bs),[bs]),He=v.useMemo(()=>l?.frames?.map(A=>A.frame)||[],[l?.frames]),gn=v.useMemo(()=>pa(d),[d]),Re=v.useMemo(()=>m==="sdf"&&gn.length?gn:He,[m,gn,He]),yn=s?.frameIds??Re,[Y,$e]=v.useState(z?.frame??(Ue?1049:null)),[ie,ja]=v.useState(null),[Un,Ca]=v.useState(null),[xn,Ba]=v.useState(""),[De,Jn]=v.useState(!1),[Pe,Kn]=v.useState(()=>{if(z)return z.mode;const A=g?"split":Ft("field-view")?.mode;return["split","overlay","wire-overlay","gt","prediction"].includes(A)?A:"split"}),[en,ps]=v.useState(z?.quality??"balanced"),[vn,us]=v.useState(z?.component??"magnitude"),[hs,Md]=v.useState(.65),[Nn,gs]=v.useState(z?.showContext??!1),[Fn,ys]=v.useState(z?.vectorDensity??2e3),[On,xs]=v.useState(z?.arrowScale??1),[Qn,vs]=v.useState(z?.glyphMode??"direction"),[Dn,Es]=v.useState(z?.overlayStyle??"errors"),[ee,En]=v.useState(z?.plane??(Ue?"yz":"xz")),[gi,rn]=v.useState(z?.sliceIndex??null),[_n,Wn]=v.useState(z?.crosshair||[.5,.5]),[Tn,_s]=v.useState(!!z?.sourceRange),[ln,ws]=v.useState(z?.sourceRange||[0,1]),[Xe,Ss]=v.useState(z?.rotationAxis||"y"),[We,js]=v.useState(z?.angle??30),[Oe,ht]=v.useState(z?.sectionPercent??50),[ea,Cs]=v.useState(z?.showPlane??!0),[Bs,yi]=v.useState(null),[Ze,gt]=v.useState(z?{showGt:z.showGt,showPrediction:z.showPrediction,gtOpacity:z.gtOpacity,predictionOpacity:z.predictionOpacity}:{showGt:!0,showPrediction:!0,gtOpacity:.65,predictionOpacity:.8}),[xi,As]=v.useState(""),wn=v.useRef(null),Vn=v.useRef(0),Aa=v.useRef(Re);Aa.current=Re;const oe=!!f?.settings?.previewOnly,Sn=m==="sdf"&&gn.includes(Y)&&!He.includes(Y);v.useEffect(()=>(wn.current={frames:i0({fetchFrame:(A,X,W)=>l0(A,X,{...W,withIdentity:!0}),decode:Mc}),geometry:ao(),surface:Ni()},()=>{Vn.current++,wn.current?.frames.dispose(),wn.current?.geometry.dispose(),wn.current?.surface.dispose(),wn.current=null}),[f.id]),v.useEffect(()=>{ja(null),Ca(null),$e(z?.frame??(Ue?1049:null)),Pn(!0),Ba("")},[f.id]),v.useEffect(()=>{if(yn.length&&!yn.includes(Y)){const A=g?null:Ft("field-view");$e(A?.comparisonId===f.id&&Re.includes(A.frame)?A.frame:Re[0])}},[Re,yn,Y,f.id,g]),v.useEffect(()=>{!g&&Y!=null&&Bc("field-view",{mode:Pe,comparisonId:f.id,frame:Y})},[Pe,Y,f.id,g]),v.useEffect(()=>{let A=!0;if(g||h){Ca(h??null);return}return d0(f.id).then(X=>{A&&Ca(X)}).catch(X=>{A&&(Ca(null),Ba(X.message))}),()=>{A=!1}},[f.id,Re.length,f.status,h,g]);const ka=ie?Fa(ie.snapshot.data,m):null,Ma=ie?.snapshot.data.fields.find(A=>A.id===(ka?.groundTruth?.ids[0]||ka?.prediction?.ids[0]))?.shape||te?.dimensions,qe=Ma?Ma[ee==="yz"?0:ee==="xz"?1:2]-1:0,je=Math.max(0,Math.min(gi??Math.floor(qe/2),qe)),ks=v.useMemo(()=>({group:m,mode:oe?"gt":Pe,overlayStyle:Dn,quality:en,component:vn,opacity:hs,showContext:Nn,vectorDensity:Fn,arrowScale:On,glyphMode:Qn,plane:ee,sliceIndex:je,angle:We,sectionPercent:Oe,rotationAxis:Xe,showPlane:ea,sourceRange:Tn&&ln[1]>ln[0]?ln:null,unit:ka?.unit}),[m,Pe,oe,Dn,en,vn,hs,Nn,Fn,On,Qn,ee,je,We,Oe,Xe,ea,Tn,ln,ka?.unit]),dn=v.useMemo(()=>({group:m,quality:en,component:vn,showContext:Nn,vectorDensity:Fn,arrowScale:On,glyphMode:Qn,plane:ee,sliceIndex:je,angle:We,sectionPercent:Oe,rotationAxis:Xe,previewOnly:oe}),[m,en,vn,Nn,Fn,On,Qn,ee,je,We,Oe,Xe,oe]),fn=JSON.stringify([f.id,Y,dn,Ea]);v.useEffect(()=>{const A=wn.current;if(!A||Y==null)return;const X=++Vn.current;let W=!0;if(Ba(""),!ke||!Re.includes(Y)){ja(null),Jn(!1);return}return Jn(!0),In({key:fn,status:"loading"}),(async()=>{try{if(Sn){const Ae=await A.surface.select(d,Y,en);if(!Ae||!W||X!==Vn.current)return;const Bn=Fi(Ae.geometry,te,dn),Ia={comparisonId:f.id,frameNumber:Y,data:{fields:[],groups:{}},verifiedResource:Ae.verifiedResource};ja({snapshot:Ia,geometry:Bn,settings:dn}),In({key:fn,status:"ready"}),Jn(!1),As(`${(A.surface.stats().bytes/1048576).toFixed(0)} MiB surface cache`);return}const U=await A.frames.select(f.id,Y);if(!U||!W||X!==Vn.current)return;let ne;try{ne=await A.geometry.request(U,te,dn)}catch(Ae){ne={failed:!0,layers:[],warnings:[`3D preparation unavailable: ${Ae.message}. Use slices below.`],byteLength:0}}if(!ne||!W||X!==Vn.current)return;ja({snapshot:U,geometry:ne,settings:dn}),In({key:fn,status:"ready"}),Jn(!1);const he=A.frames.stats();if(As(he.oversize?"Active frame exceeds preview cache budget":`${(he.bytes/1048576).toFixed(0)} MiB decoded cache`),!n){const Ae=Aa.current.indexOf(Y);A.frames.prefetch(f.id,[Aa.current[Ae+1],Aa.current[Ae-1]].filter(Bn=>Bn!=null))}}catch(U){W&&X===Vn.current&&(Ba(U.message),In({key:fn,status:"error",error:U.message}),Jn(!1))}})(),()=>{W=!1}},[f.id,Y,dn,te,Re,Ea,fn,ke,Sn,d,en]),v.useEffect(()=>{xn&&q.current?.pause()},[xn]);const zn=v.useMemo(()=>hd(l?.lattice),[l?.lattice]);v.useEffect(()=>{const A=X=>{const W=X.detail;C&&W?.page==="field"&&W.caseId===f.id&&yn.includes(W.frame)&&(W.accept(),$n(W.frame))};return window.addEventListener("oceanscope-annotation-frame",A),()=>window.removeEventListener("oceanscope-annotation-frame",A)});const Ms=v.useCallback(A=>$e(A),[]),Se=ie?.snapshot.frameNumber,na=Se==null?null:Un?.frames?.[String(Se)],$n=v.useCallback(A=>{q.current?.pause(),m==="velocity"&&!He.includes(A)&&y("sdf"),$e(A)},[m,He,y]),jn=to(f.id+":"+Y),Cn=v.useMemo(()=>sa(ye.world,te),[ye.world,te]),Ye=v.useMemo(()=>Cn?{...Ha(Cn.index,te),frame:Y,caseId:f.id}:null,[Cn,te,Y,f.id]),Ra=zn?{xmin:zn.min[0],xmax:zn.max[0],zmin:zn.min[2],zmax:zn.max[2]}:null;function yt(A,X=ye.roiMode){JSON.stringify([A,X])!==JSON.stringify([ye.roi,ye.roiMode])&&(jn.rememberRoi({roi:ye.roi,roiMode:ye.roiMode}),Qe(W=>({...W,roi:A,roiMode:X})))}function aa(A,X,W=ee,U=!0){if(!A)return;q.current?.pause(),U&&JSON.stringify(ye.world)!==JSON.stringify(A.world)&&jn.rememberPoint({world:ye.world,source:ye.source,plane:ee,slice:je,crosshair:_n});const ne=Ra?Rc(ye.roi,ye.roiMode,[A.world[0],A.world[2]],Ra):ye.roi;JSON.stringify(ne)!==JSON.stringify(ye.roi)&&jn.rememberRoi({roi:ye.roi,roiMode:ye.roiMode}),Qe(Ae=>({...Ae,world:A.world,source:X,roi:ne}));const he=Bt(A,W,te);he&&(En(he.plane),rn(he.slice),Wn(he.crosshair))}function Rs(A){const X=Cn??Oa(ee,je,_n,te);En(A);const W=Bt(X,A,te);W&&(rn(W.slice),Wn(W.crosshair),Cn||Qe(U=>({...U,world:X.world,source:"slice"})))}function Ps(A){rn(A),aa(Oa(ee,A,_n,te),"layer")}function vi(A){const W=(Cn??Oa(ee,je,_n,te))?.world[1]??te.origin[1];aa(sa([A.x,W,A.z],te),"height")}function Ei(){const A=jn.previousPoint();if(!A)return;const X=sa(A.world,te);X?aa(X,A.source,A.plane,!1):(Qe(W=>({...W,world:A.world,source:A.source})),En(A.plane),rn(A.slice),Wn(A.crosshair))}function _i(A,X,W,U){bi(W);const ne=mo(A,X,U,te);Qe(ne);const he=Bt(sa(ne.world,te),U.plane,te);he&&(En(he.plane),rn(he.slice),Wn(he.crosshair))}function wi(A){Y!==Se||De||m!=="velocity"||!te||!ie?.geometry.paired?.indices.includes(A)||(F(null),aa(Ha(A,te),"3d","xz"))}const Te=JSON.stringify([f.id,Y,m,vn,ee,je,We,Oe,Xe]),[Is,xt]=v.useState(()=>({context:Te,range:z?.region??null})),Ns=v.useRef(Te);v.useEffect(()=>{Ns.current!==Te&&(Ns.current=Te,xt({context:Te,range:null}))},[Te]);const vt=Is.context===Te?Is.range:null;function Si(A){q.current?.pause(),xt({context:Te,range:A})}const ji=v.useCallback(A=>{En("xz"),rn(A)},[]);v.useEffect(()=>{Z&&(En("xz"),rn(28),[1001,1049,1096].includes(Y)||$e(1049))},[Z,Y]);function Ci(A){q.current?.pause(),Wn(A),ee!=="oblique"&&aa(Oa(ee,je,A,te),"slice")}const Ie=ie?.settings.group||m,ta=ie?Fa(ie.snapshot.data,Ie):null,ce={shading:bt,...ks,...ie?.settings,...Ze,unit:ta?.unit},Ve=Ke?.key===fn&&Ke.status==="ready"&&!De&&!xn&&!se&&!!Bs&&ie?.snapshot.frameNumber===Y&&ie?.settings===dn&&!ie?.geometry.failed;v.useEffect(()=>{j?.(Ve&&!E)},[Ve,E,j]),v.useEffect(()=>{if(!(!S||ge.current)){if(xn||se||ie?.geometry.failed){ge.current=!0,_?.(Error("load"));return}if(Ve){ge.current=!0;try{Fs(S),q.current.pause(),_?.(null)}catch(A){_?.(A)}}}},[S,Ve,xn,se,ie,_]);function Fs(A,X=!0){const W=L.current,{linkedVelocityIndex:U,glyphFocusIndex:ne}=A.settings;if(A.settings.workspace){Qe(A.settings.workspace);const he=sa(A.settings.workspace.world,te)?.index;ne==null&&he==null?W.restoreCamera(A.camera):W.restoreCamera(A.camera,ne,he);return}if(U!=null){if(!ie?.geometry.paired?.indices.includes(U))throw Error("probe");W.restoreCamera(A.camera,ne,U),X?Qe(he=>({...he,world:Ha(U,te).world,source:"3d"})):ut();return}ut(),A.settings.glyphFocusIndex==null?W.restoreCamera(A.camera):W.restoreCamera(A.camera,A.settings.glyphFocusIndex)}function Os(){if(!Ve||E||!d||Tn&&!(ln[1]>ln[0]))throw Error("settings");q.current.pause();const A=L.current.getFocusIndex?.();return un({schema:at,name:`${d.id} · ${m.toUpperCase()} · ${Se} · ${ee==="oblique"?Xe.toUpperCase()+" "+We+"°":ee.toUpperCase()}`,sourceSignature:Tc(d),settings:{workspace:ye,...Sn?{representation:da}:{},shading:bt,caseId:d.id,frame:Se,group:m,mode:oe?"gt":Pe,quality:en,component:vn,plane:ee,sliceIndex:je,angle:We,sectionPercent:Oe,rotationAxis:Xe,showPlane:ea,showContext:Nn,...Ze,showPrediction:oe?!1:Ze.showPrediction,vectorDensity:Fn,arrowScale:On,...m==="velocity"&&!oe?{glyphMode:Qn,...Pe==="overlay"?{overlayStyle:Dn}:{},...A!=null?{glyphFocusIndex:A}:{}}:{},sourceRange:Tn?ln:null,errorScale:fs,crosshair:_n,region:oe?null:vt,playback:q.current.getSettings()},camera:L.current.getCamera()},[d])}v.useImperativeHandle(u,()=>({pause(){q.current?.pause()},captureView:Os,async restoreAnalysis(A,X,W){if(W.throwIfAborted(),!s)throw Error("Reference analysis is not ready for this dataset");if(X==="pairedCase"){if(!T.current)throw Error("One-page case unavailable for this dataset");return T.current.restore(A,W)}if(X==="velocityComparison"){const ne=await md(A,K,W);W.throwIfAborted(),P(ne);return}if(X==="velocity"){const ne=await Lc(A,{caseId:d?.id,runId:s.runId},W);W.throwIfAborted(),$e(ne.request.frame),G(ne.request,ne);return}if(X==="report"){if(!H.current?.restoreText)throw Error("Analysis is not ready");return H.current.restoreText(A,W)}const U=Ec(A,s);W.throwIfAborted(),q.current?.pause(),H.current?.clearSnapshot(),Me(ne=>({...ne,subset:U.subset,metric:U.metric})),$e(U.frame)}}));function Bi(){q.current?.pause();let A=null,X=null,W=null,U="No 3D preview for this frame";if(Re.includes(Y)){U=xn||se||(ie?.geometry.failed?"3D preparation failed":De?"3D preview is loading":"3D preview is not ready or not verified");try{const ne=Sn?xc(d,Y,en):Yt(d,Y);Ve&&ne&&JSON.stringify(ie.snapshot.verifiedResource)===JSON.stringify(ne)&&(A=Os(),W=L.current.capture(),X=ne,U=Sn?"Exact-frame native SDF surface bytes verified; no volume samples":"Exact-frame preview bytes verified")}catch(ne){A=null,X=null,W=null,U=ne.message}}return{view:{frame:Y,plane:ee,sliceIndex:je,rotationAxis:Xe,angle:We,sectionPercent:Oe,selection:de,geometry:A,geometryResource:X,geometryStatus:{status:A?"included":"unavailable",reason:U}},scene:W}}function Ai(A,X){if(X.throwIfAborted(),q.current?.pause(),ut(),$e(A.frame),En(A.plane),rn(A.sliceIndex),Ss(A.rotationAxis),js(A.angle),ht(A.sectionPercent),Me(A.selection),_a(U=>U+1),!A.geometry)return Promise.resolve();Pn(!0);const W=A.geometry.settings;return y(W.group),Kn(W.mode),ps(W.quality),us(W.component),ls(W.shading),gs(W.showContext),ys(W.vectorDensity),xs(W.arrowScale),vs(W.glyphMode??"direction"),Es(W.overlayStyle??"errors"),Cs(W.showPlane),gt({showGt:W.showGt,showPrediction:W.showPrediction,gtOpacity:W.gtOpacity,predictionOpacity:W.predictionOpacity}),_s(!!W.sourceRange),ws(W.sourceRange??[0,1]),ms(W.errorScale),Wn(W.crosshair),new Promise((U,ne)=>{const he=setTimeout(()=>Bn(Error("Timed out loading the report view; retry the geometry download")),3e4),Ae=()=>Bn(Error("Report restore cancelled"));function Bn(Ia){clearTimeout(he),X.removeEventListener("abort",Ae),va(null),Ia?ne(Ia):U()}X.addEventListener("abort",Ae,{once:!0}),va({view:A,signal:X,finish:Bn})})}v.useEffect(()=>{if(!(!_e||_e.signal.aborted)&&!(Y!==_e.view.frame||Ke?.key!==fn||Ke.status==="loading")){if(Ke.error||se||ie?.geometry.failed){_e.finish(Error(Ke.error||se||"Geometry unavailable"));return}if(Ve){if(JSON.stringify(ie.snapshot.verifiedResource)!==JSON.stringify(_e.view.geometryResource)){_e.finish(Error("Report preview resource identity mismatch"));return}try{Fs(_e.view.geometry,!1),q.current?.restoreSettings(_e.view.geometry.settings.playback),xt({context:Te,range:_e.view.geometry.settings.region??null}),_e.finish()}catch(A){_e.finish(A)}}}},[_e,Ve,Y,Ke,fn,se,ie]);const ki=po({sourceCase:d,comparison:f,processing:l,snapshot:ie?.snapshot,geometry:ie?.geometry,settings:ce,metrics:Un}),Mi=ie?.snapshot.data.fields.find(A=>A.id===(ta?.groundTruth?.ids[0]||ta?.prediction?.ids[0])),Ds=l?.lattice&&ee!=="oblique"?so(l.lattice,ee,je):null,Et={shading:Ie==="sdf"?bt:"not_applicable",comparison_id:f.id,dataset_a:f.groundTruthId||f.labels?.gt?.displayName||"Ground Truth",dataset_b:oe?"":f.predictionId||f.labels?.prediction?.displayName||"Prediction",frame:Se,group:Ie,component:ce.component,plane:ce.plane,mode:ce.mode,camera:Bs,gt_opacity:Ze.gtOpacity,prediction_opacity:Ze.predictionOpacity,preview_quality:ce.quality,show_plane:ea,gt_visible:Ze.showGt,prediction_visible:Ze.showPrediction,value_unit:ta?.unit||"undeclared",coordinate_unit:"source_grid_units",lattice_origin:te?.origin,lattice_axis_steps:te?.axisSteps,dimensions:te?.dimensions,...ce.plane==="oblique"?vo(Pc(te,ce.angle,ce.sectionPercent,ce.rotationAxis)):{slice_index:ce.sliceIndex,angle_degrees:ce.plane==="xy"?0:ce.plane==="yz"?90:null,sampling:"native_voxel_layer"},section_percent:ce.plane==="oblique"?ce.sectionPercent:At(ce.sliceIndex,0,(te?.dimensions?.[ce.plane==="xy"?2:ce.plane==="yz"?0:1]||1)-1),crosshair_normalized:_n,local_region:vt,saved_metrics_scope:"precomputed_original_support_not_current_slice"},Ri=on?a:pi,_t=pt&&pt.frame===Se?pt:null,Ws=Ri==="height"&&_t?_t.value:ds?.context===Te?ds.value:null,Pi=ye.world?{...Ws,probe:ye.world}:Ws,Ii=e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:320:25",id:"analysis-height",hidden:n&&!["height","report"].includes(a)},s&&Y!=null&&e.createElement(Ll,{workspaceSelection:ye,onWorkspaceRoi:yt,onWorkspaceRestore:_i,linkedPoint:Ye,onManualHeightPick:vi,onHeightMark:fi,reviewRequest:O,onReviewApplied:()=>J(null),viewMode:n?a==="report"?"report":"height":"all",unifiedRestore:i,bundle:s,frame:Y,plane:ee,sliceIndex:je,rotationAxis:Xe,angle:We,sectionPercent:Oe,getReportView:Bi,onRestoreReportView:Ai,reportControlRef:H,onDownload:Ga,catalog:[d],reportContext:JSON.stringify([Te,de]),onPause:()=>q.current?.pause(),onOpenVelocity:Ja(K)?G:void 0})),Ts=e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:27",hidden:n&&a!==R,id:"analysis-summary",className:k?"demo-integrated-time":void 0},k&&s&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:201",className:"demo-time-heading"},e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:236"},e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:241"},b?"时间分析":"Time analysis"),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:277"},b?"查看误差随帧号的变化；点击曲线上的点，同步切换上方三维画面。":"Inspect errors across frames. Select a curve point to update the 3D view above.")),e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:409",href:"#analysis-spatial"},b?"返回三维画面 ↑":"Back to 3D ↑")),s&&e.createElement(Q0,{displayGeometryFrames:gn.length?gn:He,unifiedRestore:i,bundle:s,frame:Y,onFrame:$n,onDownload:Ga,reportSelection:de,onReportSelection:Me}));function Pa(){H.current?.cancel(),o?.()}const wt=n&&["3d","slices"].includes(a),St=f.availableGroups.includes("velocity"),Vs=St&&He.includes(Y);function jt(A,X=Y){q.current?.pause(),Pn(!0),X!==Y&&$e(X),y(A)}const zs=e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:332:21",className:"field-tabs compact",role:"group","aria-label":b?"三维场类型":"3D field type"},e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:333:5","data-os-action":"",type:"button","aria-pressed":m==="sdf",disabled:!f.availableGroups.includes("sdf"),onClick:()=>jt("sdf")},wt?b?"水面（SDF）":"Surface (SDF)":"SDF"),e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:335:5","data-os-action":"",type:"button","aria-pressed":m==="velocity",disabled:!Vs,onClick:()=>jt("velocity")},b?"速度场":"Velocity"));return e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:338:10","data-review-case":f.id,"data-review-frame":Se,className:`field-workbench v2-field${n?` demo-field ${Be?"demo-nonreference":""} demo-panel-${a} ${D?"settings-open":""}`:""}`,inert:E||void 0,onPointerDownCapture:Pa,onKeyDownCapture:Pa,onChangeCapture:Pa,onWheelCapture:Pa},e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:5",className:"field-center"},mi&&e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:47",className:"workspace-migration"},b?"旧案例已按固定 ROI 打开，保留原区域坐标。":"Legacy case opened with fixed ROI; original bounds retained."),V&&e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:192",role:"alert"},V),c&&e.createElement(sn,{error:c,zh:b,resource:b?"序列评估资源":"Sequence evaluation resources",onRetry:r}),e.createElement(sn,{error:xn,zh:b,resource:(b?"当前帧三维资源：":"Current-frame geometry: ")+Y,onRetry:()=>_a(A=>A+1)}),(s||n)&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:544",className:"analysis-toolbar","aria-label":b?"分析导航":"Analysis navigation"},e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:623",hidden:Z},b?"当前帧":"Current frame"," ",e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:691","data-os-action":"","aria-label":"Analysis frame",value:Y??yn[0],onChange:A=>$n(Number(A.target.value))},yn.map(A=>e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:844",key:A,value:A},A,gn.includes(A)||He.includes(A)?" · 3D":"")))),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:965",hidden:$},b?"截面":"Section"," ",e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:1016","data-os-action":"","aria-label":"Analysis section",value:ee,onChange:A=>{Rs(A.target.value)}},["xy","xz","yz"].map(A=>e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:1137",key:A,value:A},A.toUpperCase())),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:1191",value:"oblique",disabled:!Ot(te)},b?"斜切":"Oblique"))),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:1297",hidden:$},ee==="oblique"?b?"位置 %":"Position %":b?"切片索引":"Slice index"," ",e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:1399","data-os-action":"","aria-label":"Analysis section position",type:"number",min:"0",max:ee==="oblique"?100:qe,step:ee==="oblique"?.1:1,disabled:!Ma||qe===0,value:ee==="oblique"?Oe:je,onChange:A=>{const X=Number(A.target.value);Number.isFinite(X)&&(ee==="oblique"?ht(Math.max(0,Math.min(100,X))):Ps(Math.max(0,Math.min(qe,Math.round(X)))))}})),e.createElement("nav",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:1835",hidden:n,"aria-label":b?"分析区域":"Analysis sections"},e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:1906",href:"#analysis-spatial"},b?"三维视图":"3D view"),e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:1959",href:"#analysis-height"},b?"高度与选区":"Height & ROI"),e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:2017",href:"#analysis-slices"},b?"场切片":"Field slices"),e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:2073",href:"#analysis-summary"},b?"序列统计":"Sequence metrics")),n&&!$&&["3d","height","slices"].includes(a)&&e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:2220","data-os-action":"",ref:we,className:"demo-settings-toggle","aria-controls":"analysis-settings","aria-expanded":D,onClick:()=>Q(A=>!A)},b?"视图设置":"View settings"),n&&!Z&&e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:340:2462",className:"demo-frame-scope"},Re.includes(Y)?b?"当前帧支持三维":"3D available for this frame":b?"当前帧仅高度与序列数据":"Height and sequence data for this frame")),wt&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:341:25",className:"main-field-switch"},e.createElement("strong",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:342:9"},b?"显示":"Display"),zs,!oe&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:342:68",className:"workspace-primary-modes"},[["split",b?"并排":"Side by side"],["overlay",b?"叠加":"Overlay"]].map(([A,X])=>e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:342:194","data-os-action":"",key:A,"aria-pressed":Pe===A,onClick:()=>Kn(A)},X))),Y!=null&&!Vs&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:343:45",className:"velocity-frame-options"},e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:344:11"},St?b?`帧 ${Y} 无速度场。查看速度帧`:`No velocity field for frame ${Y}. Open a velocity frame`:b?"此样例未提供速度场。":"This example has no velocity field."),St&&He.map(A=>e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:345:49","data-os-action":"",key:A,type:"button",onClick:()=>jt("velocity",A),"aria-label":b?`查看 ${A} 帧速度场`:`Show velocity at frame ${A}`},A)))),Ye&&["3d","height","slices"].includes(a)&&e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:349:67",className:"linked-native-point","aria-label":b?"联动选点":"Linked point"},e.createElement("strong",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:350:9"},b?"三维选点":"3D selection")," (",Ye.x,", ",Ye.y,", ",Ye.z,")",e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:351:9"},"XZ (",Ye.world[0].toFixed(4),", ",Ye.world[2].toFixed(4),")"),e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:352:9"},b?"原生 Y 层":"Native Y layer"," ",Ye.y," · Y ",Ye.world[1].toFixed(4))),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:354:7",className:(on?"analysis-linked-layout":"analysis-flat-layout")+(n?" u1-reference-grid":"")},e.createElement(co,{enabled:n,forceModal:Ee,open:D,active:C&&!$&&["3d","height","slices"].includes(a),returnFocusRef:we,onClose:()=>Q(!1),label:b?"视图设置":"View settings",closeLabel:b?"关闭设置":"Close settings"},Ue&&e.createElement(io,{zh:b,...ye,bounds:Ra,onMode:A=>yt(ye.roi,A),onMove:()=>yt(fo(ye.roi,[ye.world[0],ye.world[2]],Ra)),onUndo:()=>{const A=jn.undoRoi();A&&Qe(X=>({...X,...A}))},onPrevious:Ei,canUndo:jn.canUndoRoi,canPrevious:jn.canPreviousPoint},e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:356:487",className:"workspace-readout-details",open:a==="3d"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:356:558"},b?"速度探针读数":"Velocity probe readings"),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:356:616",className:"workspace-probe-readout",ref:le}))),e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:357:1",className:"workspace-advanced-settings"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:357:50"},b?"高级显示、单位与来源":"Advanced display, units & sources"),e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:357:122",ref:wa,className:"field-setup",open:!f},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:357:193"},g?b?"已发布数据详情":"Published dataset details":B("Datasets & comparison setup")),x),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:358:7",hidden:n&&a==="height"},e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:358:57"},B("Display controls")),!wt&&zs,!oe&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:359:17",className:"v2-primary-modes",role:"group","aria-label":b?"主要显示模式":"Primary display mode"},e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:359:112","data-os-action":"","aria-pressed":Pe==="split",onClick:()=>Kn("split")},b?"并排":"Side by side"),e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:359:214","data-os-action":"","aria-pressed":Pe==="overlay",onClick:()=>Kn("overlay")},b?"叠加":"Overlay")),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:360:7",className:"v2-mode-caption"},oe?b?"单组查看 · 不显示误差":"Single dataset · no error scores":m==="velocity"&&Pe==="overlay"?b?"同一格点比较 · 点选查看两侧速度":"Compare at the same cell · select to inspect both velocities":m==="velocity"&&Pe==="split"?b?"并排 · 共享色标与箭长比例":"Linked panes · shared color and length scales":["split","overlay"].includes(Pe)?b?"A / GT 蓝色 · B / Prediction 橙色":"A / GT blue · B / Prediction orange":b?"正在使用高级显示模式":"Advanced display mode active")),e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:361:13"},B("Cross section")),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:361:43"},B("Plane"),e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:361:63","data-os-action":"","aria-label":B("Slice plane"),value:ee,onChange:A=>{Rs(A.target.value)}},["xy","xz","yz"].map(A=>e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:361:185",key:A,value:A},A.toUpperCase()," · ",b?"固定":"fixed"," ",A==="xy"?"Z":A==="xz"?"Y":"X")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:361:291",value:"oblique",disabled:!Ot(te)},b?"斜切 · X / Y / Z 旋转":"Oblique · X / Y / Z rotation"))),ee==="oblique"&&e.createElement(uo,{value:Xe,onChange:A=>{q.current?.pause(),Ss(A)}}),ee==="oblique"&&e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:363:27",className:"v2-position"},b?"切面角度":"Section angle"," ",e.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:363:86"},We,"°"),e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:363:111","data-os-action":"","aria-label":b?"场切面角度":"Field section angle",type:"range",min:"0",max:"180",step:"1",value:We,onChange:A=>js(+A.target.value)}),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:363:259"},b?"只旋转切面，相机不变；切面与探针同步。":"Rotates the section, not the camera; probes remain synchronized.")),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:364:7",className:"v2-position"},b?"切片位置":"Section position"," ",e.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:364:69"},(ee==="oblique"?Oe:At(je,0,qe)).toFixed(1),"%"),e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:364:176","data-os-action":"","aria-label":b?"场切片位置百分比":"Field section position percent","aria-valuetext":`${(ee==="oblique"?Oe:At(je,0,qe)).toFixed(1)}%`,type:"range",min:"0",max:ee==="oblique"?100:qe,step:ee==="oblique"?.1:1,disabled:!Ma||qe===0,value:ee==="oblique"?Oe:je,onChange:A=>ee==="oblique"?ht(+A.target.value):Ps(+A.target.value)})),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:365:7",className:"v2-range-labels"},e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:365:40"},"0%"),e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:365:55"},"100%")),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:365:78"},ee==="oblique"?b?"三线性取样：参与插值的邻点必须全部有效，缺失处留空。":"Trilinear sampling: all contributing neighbours must be valid; missing support stays empty.":b?"按原始体素层移动，切面与下方探针同步。":"Snaps to original voxel layers; synchronized with slices and probe."),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:366:7",className:"check"},e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:366:32","data-os-action":"",type:"checkbox",checked:ea,onChange:A=>Cs(A.target.checked)}),b?"显示半透明切面":"Show translucent section plane"),e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:367:7",hidden:n&&a==="height",className:"v2-advanced"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:367:85"},b?"显示、单位与网格详情":"Display, units & grid details"),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:368:7"},ee==="oblique"?`${b?"斜切角度":"Oblique angle"} ${Xe.toUpperCase()} ${We}°`:`${B("Slice ")}${je} / ${qe}`,e.createElement("br",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:368:148"}),B("World: "),Ds?Ds.map(A=>A.toFixed(3)).join(", "):"—",e.createElement("br",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:368:223"}),b?"原始网格坐标；单位见数据来源声明。":"Source-grid coordinates; see the source unit declaration."),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:369:7"},B("3D display mode"),e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:369:37","data-os-action":"","aria-label":B("3D display mode"),value:oe?"gt":Pe,disabled:oe,onChange:A=>Kn(A.target.value)},e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:369:161",value:"split"},B("Side by side · linked")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:369:221",value:"wire-overlay"},B("Solid + X-ray wireframe · overlap safe")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:369:305",value:"overlay"},B("Transparent overlay · blue / orange")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:369:381",value:"gt"},B("Ground Truth only")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:369:434",value:"prediction"},B("Prediction only")))),Pe==="wire-overlay"&&!oe&&e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:370:40",className:"field-mode-help"},B("Blue: GT surface. Orange: Prediction wireframe, visible through GT. Geometry and scores are unchanged.")),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:371:7"},B("Preview quality"),e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:371:37","data-os-action":"",value:en,onChange:A=>ps(A.target.value)},e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:371:102",value:"balanced"},B("Balanced · stride 2")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:371:163",value:"fine"},B("Fine · stride 1")))),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:371:233"},B("Display only. Metrics retain the comparison lattice.")),e.createElement("fieldset",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:372:7",className:"field-layer-controls"},e.createElement("legend",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:372:50"},B("Visible layers")),[["Gt","Ground Truth","gtOpacity"],...oe?[]:[["Prediction","Prediction","predictionOpacity"]]].map(([A,X,W])=>e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:372:217",key:A,className:"field-layer-row"},e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:372:260",className:"check"},e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:372:285","data-os-action":"",type:"checkbox",checked:Ze[`show${A}`],onChange:U=>gt(ne=>({...ne,[`show${A}`]:U.target.checked}))}),e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:372:409",className:`field-layer-dot ${A==="Gt"?"gt":"prediction"}`}),B(X)),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:372:497"},B(X),B(" opacity "),e.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:372:532"},Math.round(Ze[W]*100),"%"),e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:372:581","data-os-action":"","aria-label":`${X} opacity`,type:"range",min:".1",max:"1",step:".05",value:Ze[W],disabled:!Ze[`show${A}`],onChange:U=>gt(ne=>({...ne,[W]:Number(U.target.value)}))}))))),m==="velocity"&&e.createElement(e.Fragment,null,e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:373:36"},B("Velocity display"),e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:373:67","data-os-action":"",value:vn,onChange:A=>us(A.target.value)},["magnitude","x","y","z"].map(A=>e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:373:170",key:A,value:A},A==="magnitude"?oe?"Magnitude":B("Magnitude / EPE"):A.toUpperCase())))),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:373:300"},B("Vector count limit"),e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:373:333","data-os-action":"",type:"number",min:"1",max:"20000",value:Fn,onChange:A=>ys(Math.max(1,Math.min(2e4,Number(A.target.value)||1)))})),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:373:479"},B("Arrow scale"),e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:373:505","data-os-action":"",type:"number",min:".001",step:".1",value:On,onChange:A=>xs(Math.max(.001,Number(A.target.value)||1))})),f.availableGroups.includes("sdf")&&e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:373:690",className:"check"},e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:373:715","data-os-action":"",type:"checkbox",checked:Nn,onChange:A=>gs(A.target.checked)}),B(" Show SDF context"))),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:374:7",className:"check"},e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:374:32","data-os-action":"",type:"checkbox",checked:Tn,onChange:A=>_s(A.target.checked)}),B(" Fixed source color range")),Tn&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:374:162",className:"row"},ln.map((A,X)=>e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:374:202","data-os-action":"",key:X,"aria-label":X?"Color maximum":"Color minimum",type:"number",value:A,step:".01",onChange:W=>ws(U=>U.map((ne,he)=>he===X?Number(W.target.value):ne))}))),g&&oe?e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:375:25",className:"alignment-report"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:375:63"},"Grid and provenance"),e.createElement("dl",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:375:101"},e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:375:105"},e.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:375:110"},"Canonical lattice"),e.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:375:136"},te?.dimensions?.join(" × ")," voxels")),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:375:192"},e.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:375:197"},"Voxel size"),e.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:375:216"},te?.voxelSize?.join(" × ")||"See source declaration")),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:375:290"},e.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:375:295"},"Source"),e.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:375:310"},"Simulation Ground Truth. No prediction alignment or error comparison.")))):e.createElement(O0,{lattice:l?.lattice,comparison:f})))),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:378:7",className:"demo-geometry-panel"+(on?" linked-3d":""),hidden:n&&a!=="3d"&&!on,"data-loading":on&&(!Ve||Se!==Y)?"true":"false"},on&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:380:19",className:"linked-3d-heading",role:"group","aria-label":b?"同步三维视图":"Linked 3D view"},e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:380:109"},e.createElement("b",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:380:114"},b?"同步三维视图":"Linked 3D view"),e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:380:151","data-os-action":"",type:"button",onClick:()=>t("3d")},b?"打开主视图":"Open main view")),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:381:9"},b?"帧":"Frame"," ",Y," · ",Ie==="velocity"?b?"速度场":"Velocity":"SDF"," · ",ee.toUpperCase()," ",ee==="oblique"?Oe+"%":"#"+je),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:382:9"},ce.mode==="split"?oe?"GT":b?"左 GT · 右预测":"Left GT · right prediction":ce.mode==="overlay"&&Ie==="velocity"?Dn==="speed"?b?"蓝：偏慢 · 橙：偏快":"Blue: slower · orange: faster":Dn==="angle"?b?"流向夹角 · 0–180°":"Direction angle · 0–180°":Dn==="arrows"?b?"双箭头":"Paired arrows":b?"向量误差":"Vector error":ce.mode==="overlay"?b?"叠加 · GT / 预测":"Overlay · GT / prediction":ce.mode),a==="height"&&_t?.value?.corners&&e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:383:67"},b?"黄框：高度 ROI 的 XZ 投影":"Yellow frame: height ROI footprint"),Z&&e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:384:36"},b?"三维参考帧":"3D reference frame"," ",e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:384:77","data-os-action":"","aria-label":"3D reference frame",value:Y,onChange:A=>$n(+A.target.value)},[1001,1049,1096].map(A=>e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:384:208",key:A},A)))),De&&e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:385:16",role:"status"},b?"正在更新当前帧与切面…":"Updating frame and section…")),Sn&&e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:385:115",className:"demo-surface-scope"},b?"原生 SDF 三维表面 · 支持精细／均衡显示；高度与 ROI 使用同一帧。体积场与速度切片另有覆盖范围。":"Native SDF 3D surface · Fine / Balanced display; same-frame height and ROI. Volume and velocity slices have separate coverage."),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:386:7",id:"analysis-spatial",className:"v2-section-heading"},!n&&e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:386:82"},"01"),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:386:98"},e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:386:103"},b?"3D 空间分析":"3D spatial analysis"),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:386:148"},oe?b?"选择当前帧，查看三维场与同一位置的切片。":"Choose a frame and inspect its 3D field and synchronized slice.":b?"选择当前帧，比较三维形状与同一位置的场切片。":"Choose a frame and compare geometry and field values at the same section.")),k&&s&&e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:386:400",className:"demo-time-jump",href:"#analysis-summary"},b?"查看时间分析 ↓":"View time analysis ↓")),s&&Y!=null&&!Re.includes(Y)?e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:387:65",role:"status",className:"reference-scope"},b?`帧 ${Y} 无三维缓存。仍可查看此帧的高度图和指标；未替换为邻帧。`:`Frame ${Y} has no geometry cache. Height maps and metrics retain this exact frame.`,n&&e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:387:268","data-os-action":"",onClick:()=>t("height")},b?"查看此帧高度与 ROI":"View this frame’s height & ROI")):ke?e.createElement(oo,{readoutTarget:D?re:null,selectedIndex:Cn?.index??null,onVelocityPick:wi,onOverlayStyle:Es,velocityVolume:ie?.snapshot.data.groups?.velocity,onGlyphPickPause:()=>q.current?.pause(),onGlyphMode:vs,onShading:ls,inspection:De?null:Pi,onSceneError:hn,controlRef:L,key:f.id,onCameraChange:yi,frameSplit:w,displayedFrame:Se,labels:f.labels,geometry:ie?.geometry,settings:ce,bounds:zn,loadingFrame:De?Y:null,error:null}):e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:387:395",className:"demo-geometry-start"},e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:387:432"},b?"高度分析已可使用。三维视图每帧约25 MB，点击后加载。":"Height analysis is ready. The 3D view loads about 25 MB for the selected frame."),e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:387:556","data-os-action":"",type:"button",onClick:()=>Pn(!0)},b?"打开当前帧三维":"Open current frame in 3D"))),k&&Ts,Ja(K)&&["report","slices"].includes(a)&&e.createElement(c0,{zh:b}),s&&d?.id==="best-1027"&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:393:50",hidden:a!=="report"},e.createElement(vl,{control:T,bundle:s,catalog:[d],language:M,onReady:A=>{q.current?.pause(),$e(1049),A||t("report")}})),Ii,n&&Be&&(oe&&["height","time"].includes(a)||a==="report")&&e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:398:110",className:"reference-scope"},a==="report"?b?"此样例没有96帧协议报告。可保存或恢复场比较方案；切片报告从“场切片”导出。":"This sample has no96-frame protocol report. Save or restore field views here; export slice reports from Field slices.":b?"此样例只有Ground Truth，无配对误差。请查看三维、场切片与探针。":"This sample contains Ground Truth only, without paired errors. Inspect3D, field slices and probes.",e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:398:475","data-os-action":"",onClick:()=>t("slices")},b?"查看场切片":"Open field slices")),e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:399:7",hidden:n&&a!==R,className:"analysis-source"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:399:98"},b?"数据与显示说明":"Data and display details"),e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:399:158",className:"field-saved-note"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:399:196"},oe?B("Single dataset preview — no comparison scores"):`Evaluation: ${Object.values(f.settings?.sdf||{}).some(A=>A?.semantics==="water_interior")?"conditional GT-water distance support":f.settings?.sdfEvaluationRegion==="gt_water"?"GT water only":"full domain"} · Saved settings`),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:399:518"},d?.metrics?.reconstructionEvaluation?b?"Best_1027 三帧本地参考结果。原生场指标、俯视高度指标和水下 0.1 m 速度指标使用各自明确的有效域；查看下方计算规则。":"Best_1027 three-frame local reference. Native-volume, top-down height and underwater 0.1 m metrics use separate documented supports; see the protocol below.":g?oe?"Ground Truth fields are shown for inspection. This example contains no prediction and has no error metrics.":"Precomputed results retain the original comparison settings and validity masks. Conditional GT-water distance scores describe their valid support only. Occupancy and surface metrics use separate validity rules; unsupported metrics remain N/A. This example is not a model-ranking benchmark. 3D and slices show the saved aligned fields.":B("Results use the saved comparison settings. Create a new comparison after changing declarations. Occupancy and surface metrics have separate validity rules. Original scores are not certified for model ranking; use Results Library common-support evaluation. 3D and slices show the original aligned fields."))),g&&e.createElement(ho,{context:ki,busy:De})),e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:402:7",hidden:n&&a!==(Be?"height":R),open:!s,className:"legacy-height-analysis"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:402:148"},s?b?"旧预览协议 · 三帧高度诊断":"Legacy preview protocol · three-frame height diagnosis":b?"高度诊断":"Height diagnosis"),d?.metrics?.reconstructionEvaluation&&e.createElement($0,{protocol:d.metrics.reconstructionEvaluation,frame:ie?.snapshot.data,lattice:te,frameNumber:Se,busy:De||Se!==Y||Ie!==m,onFrame:Ms}),!oe&&m==="sdf"&&e.createElement(T0,{frame:ie?.snapshot.data,lattice:te,comparison:f,plane:ce.plane,sliceIndex:ce.sliceIndex,rotationAxis:ce.rotationAxis,angle:ce.angle,sectionPercent:ce.sectionPercent,frameNumber:Se,busy:De||Se!==Y||Ie!==m})),e.createElement("section",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:407:7",hidden:n&&a!=="slices",id:"analysis-slices",className:"field-slices"},Ja(K)&&!Z&&e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:407:180","data-os-action":"",type:"button",onClick:()=>P()},b?"打开三帧速度对照":"Open three-frame velocity comparison"),N?e.createElement(e.Fragment,null,e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:407:324","data-os-action":"",onClick:()=>F(null)},b?"返回原场切片":"Back to original field slices"),N.comparison?e.createElement(ud,{key:N.key,restored:N.restored}):e.createElement(sd,{onLayer:$?ji:void 0,surface:N.surface,markView:N.markView,key:N.key,frameNumber:Y,request:N.request,restored:N.restored})):e.createElement(e.Fragment,null,e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:407:819"},B("Synchronized slices & probe")),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:407:863",className:"v2-mode-caption"},Ie==="sdf"?oe?b?"GT 单场切片，不含比较误差。":"GT field slices only; no comparison errors.":b?"此处为 SDF 场差值（B−A），不等于水面高度差。":"This is the SDF field difference (B−A), not water-surface height error.":b?"速度场切片与探针；瞬时矢量不是粒子轨迹。":"Velocity slices and probes; instantaneous vectors are not particle paths."),Sn?e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:407:1221",className:"reference-scope"},e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:407:1254"},b?"本帧已提供真实三维表面、高度与 ROI；完整体积场切片仅发布了以下三帧。切换帧会明确改变当前帧号。":"This frame has its actual 3D surface, height and ROI. Full volume slices are published for the three frames below. Choosing one explicitly changes the frame."),He.map(A=>e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:407:1498","data-os-action":"",key:A,onClick:()=>$n(A)},A))):Mi?e.createElement(ro,{linkedProbe:!!Ye&&Ve,reportReady:Ve&&!E,captureScene:()=>{if(!Ve||E)throw Error(b?"等待当前帧与三维加载完成。":"Wait for the current frame and 3D.");return q.current?.pause(),L.current.capture()},reportLabels:{a:f.labels?.gt?.displayName||"Ground Truth",b:f.labels?.prediction?.displayName||"Prediction"},savedMetrics:na,region:oe?null:vt,onRegion:Si,inspectionContext:Te,onInspection:di,busy:De||Se!==Y||ie?.settings!==dn,errorScale:fs,onErrorScale:ms,frameNumber:Se,frameSplit:w,exportStem:Sa,viewMetadata:Et,rotationAxis:ce.rotationAxis,angle:ce.angle,sectionPercent:ce.sectionPercent,frame:ie.snapshot.data,group:Ie,plane:ce.plane,sliceIndex:ce.sliceIndex,crosshair:_n,onCrosshair:Ci,component:ce.component,fixedRange:ks.sourceRange,lattice:te,single:oe,label:"Ground Truth"}):e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:407:2770",role:"status"},De?`${B("Loading")} ${Y}…`:B("No field samples available for this view.")))),!k&&Ts,!oe&&e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:409:17",open:!n,hidden:n&&a!==R,className:"demo-legacy-sequence"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:409:135"},b?"旧预览协议 · 三帧序列诊断":"Legacy preview protocol · three-frame sequence diagnostics"),e.createElement("section",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:409:236",className:"v2-field-temporal","aria-label":b?"时间分析":"Temporal analysis"},e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:409:318",className:"v2-section-heading"},e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:409:354"},"02"),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:409:369"},e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:409:374"},b?"时间分析":"Temporal analysis"),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:409:414"},b?"保留逐帧绝对误差与序列统计。只能跳转到已有三维数据的帧。":"Absolute errors and sequence statistics. Frame navigation is available only where geometry exists."))),e.createElement(N0,{frameSplit:w,onReviewSetup:hi,comparisonId:Sa,frames:Re,expectedFrames:p,metrics:Un,groups:f.availableGroups,group:Ie,status:f.status,currentFrame:Se,onFrame:Ms,sdfUnit:Fa(ie?.snapshot.data,"sdf").unit||f.settings?.sdf?.gt?.unit||"unit undeclared",velocityUnit:Fa(ie?.snapshot.data,"velocity").unit||f.settings?.velocity?.gt?.unit||"unit undeclared"}))),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:411:7",hidden:n,className:"field-memory"},xi,d?.metrics?.reconstructionEvaluation?b?" · 本地三帧数据 · 按需加载":" · Local three-frame data · Loaded on demand":g?" · Published samples · Geometry prepared in your browser":B(" · Geometry prepared off the UI thread · No cloud upload"))),ke&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:413:25",className:"workspace-reference-framebar",hidden:n&&!["3d","height","slices"].includes(a)},e.createElement(b0,{controlRef:q,initialPlayback:z?.playback,active:C&&!E&&(!n||a==="3d"),frameSplit:w,frames:a==="3d"?Re:yn,displayedFrame:Se,requestedFrame:Y,status:f.status||"ready",loading:De,onFrame:$n,onScrubbing:A=>wn.current?.frames.setScrubbing(A)}))),e.createElement("aside",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:415:5",className:"field-results",hidden:n&&(!Be||!["time","report"].includes(a))},s&&e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:415:131",className:"reference-scope"},b?"旧预览协议 · 三帧空间诊断":"Legacy preview protocol · three-frame spatial diagnostics"),e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:415:248"},B("Current frame "),e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:415:274"},Se??"—")),oe?e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:415:312"},B("Single dataset preview — no comparison scores")):e.createElement(u0,{frame:Se,metrics:na,group:Ie,unit:ta?.unit||""}),!oe&&e.createElement(e.Fragment,null,e.createElement(F0,{group:Ie}),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:416:56",className:"field-exports"},e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:416:87"},B("Export results")),e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:416:118","data-os-action":"",disabled:!Un,onClick:()=>Ga(`${Sa}_metrics.json`,JSON.stringify({...Un,current_view:Et},null,2))},B("Export JSON")),e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:416:296","data-os-action":"",disabled:!na,onClick:()=>{const A=["metric,value",...Object.entries(Et).map(([X,W])=>[X,typeof W=="object"?JSON.stringify(W):String(W??"")].map(U=>'"'+String(U).replaceAll('"','""')+'"').join(",")),`sdf_error_region,${na?.sdf?.evaluationRegion||f.settings?.sdfEvaluationRegion||"full_domain"}`];for(const[X,W]of Object.entries(na?.[Ie]||{}))(typeof W=="number"||W===null)&&A.push(`${X},${W??""}`);Ga(`${Sa}_${Se}_${Ie}.csv`,A.join(`
`),"text/csv")}},B("Export CSV")),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:416:918"},g?"Download saved values: JSON includes all metric records; CSV describes the displayed frame.":B("JSON: sequence · CSV: displayed frame. Saved-result ZIP includes source names and complete provenance.")))),!oe&&e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:417:17"},B("All metric averages and per-frame values are below the synchronized slices. Use the SDF / Velocity tabs to switch field groups."))))}const yd={kind:"field",parse:X0,read:Z0,write:G0,validate:un,error:H0,title:n=>n?"场比较方案":"Saved field views",intro:n=>n?"保存样例、SDF/速度分量、帧、切面、探针、视角、色标、透明度、箭头与播放设置。恢复时重新读取数据并暂停播放；已有评分保持不变。":"Save sample, SDF/velocity component, frame, section, probe, camera, color scales, opacity, arrows and playback settings. Restore reloads data and pauses playback; saved scores are unchanged.",describe:(n,a)=>`${n.settings.caseId} · ${n.settings.group.toUpperCase()}${n.settings.group==="velocity"?" / "+n.settings.component:""} · ${a?"帧":"Frame"} ${n.settings.frame} · ${n.settings.plane==="oblique"?(n.settings.rotationAxis||"y").toUpperCase()+" "+n.settings.angle+"° / "+n.settings.sectionPercent+"%":n.settings.plane.toUpperCase()+" / "+n.settings.sliceIndex}`,storageNote:n=>n?"场方案与水面方案分开保存。仅保存在当前浏览器和网站地址；清除网站数据会丢失，请导出备份。导入文件仅在本机读取，不含场数据或计算结果；仅支持场比较方案 JSON。":"Field views are stored separately from wave views in this browser and site address. Clearing site data removes them; export a backup. Imports are read locally and contain no field arrays or computed results. Only field-view JSON is supported."};function xd(n){return e.createElement(go,{adapter:yd,...n})}function Nt(n){if(new TextEncoder().encode(n).length>2*1024*1024)throw Error("Analysis file too large");let a;try{a=JSON.parse(n)}catch{throw Error("Invalid analysis JSON")}if(a?.schema==="oceanscope.paired-case.v1")return{kind:"pairedCase",value:a};if(a?.schema===Jt)return{kind:"report",value:a};if(a?.schema===ts)return{kind:"velocity",value:a};if(a?.schema===cs)return{kind:"velocityComparison",value:a};if(a?.schema===at)return{kind:"field",value:a};if(a&&!a.schema&&a.schemaVersion===1&&typeof a.runId=="string"&&a.protocol&&a.datasetA&&a.datasetB&&"subset"in a&&"metric"in a&&"frame"in a)return{kind:"selection",value:a};throw Error("Unsupported analysis file")}const vd={pairedCase:["一页案例：核验水面和速度资源，恢复热点、双剖面、切片与配对流线。","One-page case: verify both resources and restore the hotspot, profiles, slice and streamlines."],velocityComparison:["三帧速度对照：核验三个速度资源，恢复固定选区、探针、箭头和第三图。","Three-frame velocity comparison: verify all three resources and restore the fixed ROI, probe, arrows, and comparison map."],velocity:["速度诊断报告：重新核验对应帧的速度资源，恢复切片、ROI、探针、箭头和方向阈值。","Velocity report: verify the selected frame’s velocity resource and restore the slice, ROI, probe, arrows, and direction threshold."],report:["完整分析报告：恢复帧、选区、探针、截面和可用相机；重新核验资源。","Analysis report: restore frame, ROI, probe, section and available camera; verify resources again."],field:["场比较方案：恢复数据组合、三维帧、显示设置与相机；不含水面高度选区。","Field view: restore dataset, geometry frame, display settings and camera; no surface-height ROI."],selection:["序列选择：只恢复帧号、帧集合与曲线类型；不恢复选区或相机。","Sequence selection: restore only frame, frame set and curve; no ROI or camera."]};function Ed({onRestore:n,zh:a,controlRef:t}){const[s,c]=v.useState(""),[i,o]=v.useState(""),[r,f]=v.useState(null),[l,m]=v.useState(""),[y,x]=v.useState(!1),p=v.useRef(null);function h(){p.current&&(p.current.abort(),p.current=null,x(!1),m(a?"恢复已取消，保留后续操作。":"Restore cancelled; newer actions retained."))}v.useImperativeHandle(t,()=>({cancel:h})),v.useEffect(()=>()=>p.current?.abort(),[]);let d;try{s.trim()&&(d=Nt(s))}catch{}async function u(j){if(h(),!j)return;const _=new AbortController;p.current=_,f(null),c(""),o(j.name),m("");try{if(j.size>2*1024*1024)throw Error("Analysis file too large");const E=await j.text();_.signal.throwIfAborted(),Nt(E),c(E)}catch(E){_.signal.aborted||f(E)}finally{p.current===_&&(p.current=null)}}async function S(){h();const j=new AbortController;p.current=j,x(!0),f(null),m(a?"正在识别文件并核验资源…":"Recognizing the file and verifying resources…");try{const _=Nt(s);await n(s,_,j.signal),j.signal.throwIfAborted(),m(a?"恢复完成。请核对当前帧和范围；导出前重新生成报告。":"Restored. Check frame and scope; create a fresh report before exporting.")}catch(_){j.signal.aborted||(f(_),m(""))}finally{p.current===j&&(p.current=null,x(!1))}}return e.createElement("details",{"data-os-loc":"src/RestoreAnalysis.jsx:11:9",id:"restore-analysis",className:"restore-analysis"},e.createElement("summary",{"data-os-loc":"src/RestoreAnalysis.jsx:11:69","data-review-title":"","data-review-id":"restore-analysis"},a?"恢复分析 · 打开 JSON":"Restore analysis · Open JSON"),e.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:195"},a?"选择文件或粘贴内容，工具会识别恢复范围。文件在本机读取，仍需匹配的数据资源。":"Choose a file or paste its contents. The tool identifies what it restores. Files stay local; matching data resources are required."),e.createElement("label",{"data-os-loc":"src/RestoreAnalysis.jsx:11:380"},a?"选择分析文件":"Choose analysis file"," ",e.createElement("input",{"data-os-loc":"src/RestoreAnalysis.jsx:11:424","data-os-action":"",type:"file",accept:".json,application/json","aria-label":"Analysis JSON file",onChange:j=>{u(j.target.files?.[0]),j.target.value=""}})),i&&e.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:587"},i),e.createElement("label",{"data-os-loc":"src/RestoreAnalysis.jsx:11:605"},a?"或粘贴 JSON":"Or paste JSON",e.createElement("textarea",{"data-os-loc":"src/RestoreAnalysis.jsx:11:643","data-os-action":"","aria-label":"Analysis JSON text",rows:"4",value:s,onChange:j=>{h(),c(j.target.value),o(""),f(null),m("")}})),d&&e.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:823",className:"import-kind"},vd[d.kind][a?0:1]),e.createElement("div",{"data-os-loc":"src/RestoreAnalysis.jsx:11:900",className:"reference-controls"},e.createElement("button",{"data-os-loc":"src/RestoreAnalysis.jsx:11:936","data-os-action":"",disabled:!s.trim()||y,onClick:S},a?"恢复这份分析":"Restore this analysis"),y&&e.createElement("button",{"data-os-loc":"src/RestoreAnalysis.jsx:11:1045","data-os-action":"",onClick:h},a?"取消恢复":"Cancel restore")),e.createElement(sn,{error:r,zh:a}),e.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:1152",role:"status","aria-live":"polite"},l))}const _d=`{
  "schemaVersion": 1,
  "runId": "raw-reference-96-e81b8955734e",
  "status": "complete",
  "readerMode": "openvdb-copyToArray-original-index-lattice",
  "protocol": {
    "id": "collaborator-vdb-20261103-v1",
    "sourceScriptSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
    "referenceRange": 1.23
  },
  "datasetA": {
    "id": "gentle",
    "manifestSha256": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"
  },
  "datasetB": {
    "id": "best1027",
    "manifestSha256": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"
  },
  "frameIds": [
    1001,
    1002,
    1003,
    1004,
    1005,
    1006,
    1007,
    1008,
    1009,
    1010,
    1011,
    1012,
    1013,
    1014,
    1015,
    1016,
    1017,
    1018,
    1019,
    1020,
    1021,
    1022,
    1023,
    1024,
    1025,
    1026,
    1027,
    1028,
    1029,
    1030,
    1031,
    1032,
    1033,
    1034,
    1035,
    1036,
    1037,
    1038,
    1039,
    1040,
    1041,
    1042,
    1043,
    1044,
    1045,
    1046,
    1047,
    1048,
    1049,
    1050,
    1051,
    1052,
    1053,
    1054,
    1055,
    1056,
    1057,
    1058,
    1059,
    1060,
    1061,
    1062,
    1063,
    1064,
    1065,
    1066,
    1067,
    1068,
    1069,
    1070,
    1071,
    1072,
    1073,
    1074,
    1075,
    1076,
    1077,
    1078,
    1079,
    1080,
    1081,
    1082,
    1083,
    1084,
    1085,
    1086,
    1087,
    1088,
    1089,
    1090,
    1091,
    1092,
    1093,
    1094,
    1095,
    1096
  ],
  "geometryFrames": [
    1001,
    1049,
    1096
  ],
  "unitStatus": "source convention; not independently calibrated",
  "summary": {
    "frames": [
      1001,
      1096
    ],
    "n_frames": 96,
    "height": {
      "gt_range_m": 1.6457909851781873,
      "pct_relative_to_m": 1.23,
      "cells_scored": 1867211,
      "mae_m": 0.015322750768874769,
      "mae_pct": 1.245752095030469,
      "bias_pct": -0.30716118848936347,
      "steep_pct": 1.8529317997721333,
      "calm_cells_pct": 1.138585024434636,
      "breaking_band_pct": 1.8007965898855616,
      "calm_band_pct": 1.093011017425409,
      "amplitude_slope": 1.0169066801137248,
      "correlation": 0.980744668324007,
      "flicker_pct": 0.5505349753619742,
      "gain": {
        "0.3": 0.2774573686046843,
        "0.6": 0.6705792527259374,
        "1.2": 0.9434777707417648,
        "2.4": 1.0397506695023124,
        "4.8": 1.047623133692396
      },
      "coherence": {
        "0.3": 0.27206994619169145,
        "0.6": 0.6693379294938973,
        "1.2": 0.9002333981427132,
        "2.4": 0.9730807423878515,
        "4.8": 0.9903242532896781
      }
    },
    "footprint_iou": 0.9995118094472366,
    "volume": {
      "iou": 0.669195337387905,
      "rec_over_gt": 1.3544745039093804
    },
    "velocity": {
      "all_frames": {
        "frames": [
          1001,
          1002,
          1003,
          1004,
          1005,
          1006,
          1007,
          1008,
          1009,
          1010,
          1011,
          1012,
          1013,
          1014,
          1015,
          1016,
          1017,
          1018,
          1019,
          1020,
          1021,
          1022,
          1023,
          1024,
          1025,
          1026,
          1027,
          1028,
          1029,
          1030,
          1031,
          1032,
          1033,
          1034,
          1035,
          1036,
          1037,
          1038,
          1039,
          1040,
          1041,
          1042,
          1043,
          1044,
          1045,
          1046,
          1047,
          1048,
          1049,
          1050,
          1051,
          1052,
          1053,
          1054,
          1055,
          1056,
          1057,
          1058,
          1059,
          1060,
          1061,
          1062,
          1063,
          1064,
          1065,
          1066,
          1067,
          1068,
          1069,
          1070,
          1071,
          1072,
          1073,
          1074,
          1075,
          1076,
          1077,
          1078,
          1079,
          1080,
          1081,
          1082,
          1083,
          1084,
          1085,
          1086,
          1087,
          1088,
          1089,
          1090,
          1091,
          1092,
          1093,
          1094,
          1095,
          1096
        ],
        "grid_0.05m": {
          "rel_rmse": 0.40361428319948295,
          "cos_median": 0.9845989212930601,
          "speed_ratio": 0.9733164797223399,
          "vec_mae": 0.09194025743692061,
          "gt_mean_speed": 0.3084811121375067,
          "voxels": 18267192,
          "rel_rmse_frame_mean": 0.3879955246034263
        },
        "grid_0.1m": {
          "rel_rmse": 0.3682079365314837,
          "cos_median": 0.9873825730676691,
          "speed_ratio": 0.9894439903037339,
          "vec_mae": 0.08002156153941771,
          "gt_mean_speed": 0.30033007897266595,
          "voxels": 4360540,
          "rel_rmse_frame_mean": 0.35120679180798214
        }
      },
      "velocity_net_6_frames": {
        "frames": [
          1007,
          1023,
          1039,
          1057,
          1073,
          1089
        ],
        "grid_0.05m": {
          "rel_rmse": 0.4064576119515046,
          "cos_median": 0.9849802549899837,
          "speed_ratio": 0.9823342155572469,
          "vec_mae": 0.09117281750617443,
          "gt_mean_speed": 0.3061247114569406,
          "voxels": 1144007,
          "rel_rmse_frame_mean": 0.3863928378627191
        },
        "grid_0.1m": {
          "rel_rmse": 0.3702839639233182,
          "cos_median": 0.9877437274848468,
          "speed_ratio": 0.9996180127258639,
          "vec_mae": 0.07905274680081,
          "gt_mean_speed": 0.297740149730682,
          "voxels": 272971,
          "rel_rmse_frame_mean": 0.3482036199396597
        }
      }
    }
  },
  "rows": [
    {
      "frame": 1001,
      "height": {
        "mae_m": 0.017575577444165855,
        "bias_m": -0.011671488733768099,
        "common": 19397,
        "gtWet": 19414,
        "predictionWet": 19397
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.2227786238374626,
          "cos_median": 0.9910820600627052,
          "speed_ratio": 0.9514821206545936,
          "vec_mae": 0.09359221021089689,
          "gt_mean_speed": 0.4540817138599376,
          "voxels": 177960,
          "gtEnergy": 46013.09618862628,
          "errorEnergy": 2283.6444689599793
        },
        "coarse": {
          "rel_rmse": 0.19368274920505518,
          "cos_median": 0.9925643996710964,
          "speed_ratio": 0.9629345732498934,
          "vec_mae": 0.08419263036748624,
          "gt_mean_speed": 0.4532814069544505,
          "voxels": 42372,
          "gtEnergy": 10876.096160320227,
          "errorEnergy": 407.99507508859585
        }
      }
    },
    {
      "frame": 1002,
      "height": {
        "mae_m": 0.015265024978325659,
        "bias_m": -0.010483588312601865,
        "common": 19404,
        "gtWet": 19414,
        "predictionWet": 19407
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.29035510529295694,
          "cos_median": 0.9849291399705281,
          "speed_ratio": 0.9236832203047644,
          "vec_mae": 0.09261086390177044,
          "gt_mean_speed": 0.3426920340178282,
          "voxels": 178293,
          "gtEnergy": 26296.13949281919,
          "errorEnergy": 2216.9246283077873
        },
        "coarse": {
          "rel_rmse": 0.24420344779346087,
          "cos_median": 0.9879831335216506,
          "speed_ratio": 0.9404965615601034,
          "vec_mae": 0.07971597912839781,
          "gt_mean_speed": 0.33993440717443274,
          "voxels": 42456,
          "gtEnergy": 6132.062626252414,
          "errorEnergy": 365.6875409788058
        }
      }
    },
    {
      "frame": 1003,
      "height": {
        "mae_m": 0.01430787315911845,
        "bias_m": -0.008250215380536878,
        "common": 19411,
        "gtWet": 19421,
        "predictionWet": 19415
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.2531821370664224,
          "cos_median": 0.9898092035756518,
          "speed_ratio": 0.9430502815700467,
          "vec_mae": 0.07583137381185573,
          "gt_mean_speed": 0.33213195261211664,
          "voxels": 178212,
          "gtEnergy": 25130.236570178964,
          "errorEnergy": 1610.8781829579168
        },
        "coarse": {
          "rel_rmse": 0.19839680553751515,
          "cos_median": 0.9926162961884231,
          "speed_ratio": 0.9610019738066611,
          "vec_mae": 0.06175410584883512,
          "gt_mean_speed": 0.3290975874205386,
          "voxels": 42379,
          "gtEnergy": 5846.175627789842,
          "errorEnergy": 230.11302858482796
        }
      }
    },
    {
      "frame": 1004,
      "height": {
        "mae_m": 0.015075209094764586,
        "bias_m": -0.006509889090519088,
        "common": 19421,
        "gtWet": 19428,
        "predictionWet": 19430
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.2440240986638385,
          "cos_median": 0.9901275312178486,
          "speed_ratio": 0.954392773830416,
          "vec_mae": 0.07159244642705627,
          "gt_mean_speed": 0.32719031640653146,
          "voxels": 177989,
          "gtEnergy": 24720.497494193147,
          "errorEnergy": 1472.0502698786115
        },
        "coarse": {
          "rel_rmse": 0.18814153295250213,
          "cos_median": 0.9928825306935738,
          "speed_ratio": 0.9730230689594136,
          "vec_mae": 0.0575705386296804,
          "gt_mean_speed": 0.323937510397927,
          "voxels": 42302,
          "gtEnergy": 5748.227649674998,
          "errorEnergy": 203.47137312139913
        }
      }
    },
    {
      "frame": 1005,
      "height": {
        "mae_m": 0.014473316404177278,
        "bias_m": -0.005344722364116549,
        "common": 19433,
        "gtWet": 19437,
        "predictionWet": 19441
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.2313001970949073,
          "cos_median": 0.9910801680564093,
          "speed_ratio": 0.9831245969888819,
          "vec_mae": 0.0675889940303881,
          "gt_mean_speed": 0.32828397489738564,
          "voxels": 177789,
          "gtEnergy": 25205.944752876116,
          "errorEnergy": 1348.512528616821
        },
        "coarse": {
          "rel_rmse": 0.17635795503234875,
          "cos_median": 0.9936127018998981,
          "speed_ratio": 1.0024309278497285,
          "vec_mae": 0.05412150342585997,
          "gt_mean_speed": 0.3250434132102742,
          "voxels": 42227,
          "gtEnergy": 5871.093587005978,
          "errorEnergy": 182.60350602310737
        }
      }
    },
    {
      "frame": 1006,
      "height": {
        "mae_m": 0.01406965260880321,
        "bias_m": -0.004804966169235956,
        "common": 19445,
        "gtWet": 19450,
        "predictionWet": 19461
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.21772990384286472,
          "cos_median": 0.9920431371994883,
          "speed_ratio": 0.9789169272151935,
          "vec_mae": 0.06444284516290984,
          "gt_mean_speed": 0.334474122571762,
          "voxels": 177792,
          "gtEnergy": 26481.163153122758,
          "errorEnergy": 1255.3742568048742
        },
        "coarse": {
          "rel_rmse": 0.1638164124635066,
          "cos_median": 0.99431540100535,
          "speed_ratio": 0.9974481228367514,
          "vec_mae": 0.05128410069502205,
          "gt_mean_speed": 0.3310602688332243,
          "voxels": 42219,
          "gtEnergy": 6166.551342437417,
          "errorEnergy": 165.48444329997366
        }
      }
    },
    {
      "frame": 1007,
      "height": {
        "mae_m": 0.013501435984289696,
        "bias_m": -0.004847023491234849,
        "common": 19457,
        "gtWet": 19458,
        "predictionWet": 19474
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.2073358529559782,
          "cos_median": 0.992625783714714,
          "speed_ratio": 0.9934079081074696,
          "vec_mae": 0.06343655296723859,
          "gt_mean_speed": 0.34501018475827167,
          "voxels": 177701,
          "gtEnergy": 28483.557622480017,
          "errorEnergy": 1224.4556162594752
        },
        "coarse": {
          "rel_rmse": 0.15626511827614656,
          "cos_median": 0.9946244280349034,
          "speed_ratio": 1.0115963182078795,
          "vec_mae": 0.0507471504387639,
          "gt_mean_speed": 0.34162733307143966,
          "voxels": 42196,
          "gtEnergy": 6644.464648402046,
          "errorEnergy": 162.24976823986472
        }
      }
    },
    {
      "frame": 1008,
      "height": {
        "mae_m": 0.012479426718566748,
        "bias_m": -0.00517708419942615,
        "common": 19450,
        "gtWet": 19455,
        "predictionWet": 19465
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.1963150566127543,
          "cos_median": 0.9929664616031048,
          "speed_ratio": 0.9879575206370597,
          "vec_mae": 0.0626353866183919,
          "gt_mean_speed": 0.35853866719538896,
          "voxels": 177688,
          "gtEnergy": 31094.926130662774,
          "errorEnergy": 1198.386060282143
        },
        "coarse": {
          "rel_rmse": 0.14755982830143205,
          "cos_median": 0.994797652370838,
          "speed_ratio": 1.0050466503304905,
          "vec_mae": 0.05018797344995334,
          "gt_mean_speed": 0.3553899267197452,
          "voxels": 42213,
          "gtEnergy": 7275.090100355083,
          "errorEnergy": 158.4071056401179
        }
      }
    },
    {
      "frame": 1009,
      "height": {
        "mae_m": 0.012511210945155966,
        "bias_m": -0.005276665757618755,
        "common": 19449,
        "gtWet": 19455,
        "predictionWet": 19459
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.18810699916603155,
          "cos_median": 0.993740385052426,
          "speed_ratio": 1.0126865094483364,
          "vec_mae": 0.06380117871436058,
          "gt_mean_speed": 0.3739553891243167,
          "voxels": 177805,
          "gtEnergy": 34242.68128853196,
          "errorEnergy": 1211.65136031627
        },
        "coarse": {
          "rel_rmse": 0.14376240519393094,
          "cos_median": 0.9953757920354013,
          "speed_ratio": 1.0293184468816987,
          "vec_mae": 0.052021624467831803,
          "gt_mean_speed": 0.3710557067248693,
          "voxels": 42268,
          "gtEnergy": 8031.310411305963,
          "errorEnergy": 165.98814514646804
        }
      }
    },
    {
      "frame": 1010,
      "height": {
        "mae_m": 0.013189581866107835,
        "bias_m": -0.005006875795502986,
        "common": 19449,
        "gtWet": 19451,
        "predictionWet": 19463
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.1763217280202935,
          "cos_median": 0.9942918545307255,
          "speed_ratio": 1.0029553832283826,
          "vec_mae": 0.06221822233006834,
          "gt_mean_speed": 0.3892493216553845,
          "voxels": 177855,
          "gtEnergy": 37563.32391381934,
          "errorEnergy": 1167.8193908846515
        },
        "coarse": {
          "rel_rmse": 0.13343832358445545,
          "cos_median": 0.9958449613502451,
          "speed_ratio": 1.0184581270980382,
          "vec_mae": 0.05044911013580788,
          "gt_mean_speed": 0.3867434091434221,
          "voxels": 42328,
          "gtEnergy": 8842.878252009275,
          "errorEnergy": 157.45439955701366
        }
      }
    },
    {
      "frame": 1011,
      "height": {
        "mae_m": 0.013543445836742374,
        "bias_m": -0.0047246879869915475,
        "common": 19439,
        "gtWet": 19448,
        "predictionWet": 19442
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.1712010607505979,
          "cos_median": 0.9946652271670205,
          "speed_ratio": 1.0180328108570371,
          "vec_mae": 0.06368012816313787,
          "gt_mean_speed": 0.40321377027472827,
          "voxels": 177898,
          "gtEnergy": 40887.50626279007,
          "errorEnergy": 1198.4047619882315
        },
        "coarse": {
          "rel_rmse": 0.13178967642047815,
          "cos_median": 0.996149870280066,
          "speed_ratio": 1.032997594425322,
          "vec_mae": 0.05239631902793231,
          "gt_mean_speed": 0.40066732225068646,
          "voxels": 42327,
          "gtEnergy": 9620.950805141987,
          "errorEnergy": 167.1016650389521
        }
      }
    },
    {
      "frame": 1012,
      "height": {
        "mae_m": 0.013665083071064283,
        "bias_m": -0.0044013687482118945,
        "common": 19422,
        "gtWet": 19440,
        "predictionWet": 19424
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.16065585279032132,
          "cos_median": 0.9951990867581426,
          "speed_ratio": 1.0069589931306964,
          "vec_mae": 0.061348940240351806,
          "gt_mean_speed": 0.41530637634394185,
          "voxels": 177849,
          "gtEnergy": 43999.866929755764,
          "errorEnergy": 1135.6498989912286
        },
        "coarse": {
          "rel_rmse": 0.12153763060960508,
          "cos_median": 0.9965744185056513,
          "speed_ratio": 1.021088914510712,
          "vec_mae": 0.049801046788767594,
          "gt_mean_speed": 0.41289724078466844,
          "voxels": 42280,
          "gtEnergy": 10355.272552995308,
          "errorEnergy": 152.96182798733844
        }
      }
    },
    {
      "frame": 1013,
      "height": {
        "mae_m": 0.013699324024362221,
        "bias_m": -0.004493795918735828,
        "common": 19396,
        "gtWet": 19423,
        "predictionWet": 19396
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.15563177286566887,
          "cos_median": 0.9953872756497997,
          "speed_ratio": 1.0061518343605247,
          "vec_mae": 0.06115997753884733,
          "gt_mean_speed": 0.42450560787947483,
          "voxels": 177767,
          "gtEnergy": 46586.37105886313,
          "errorEnergy": 1128.3800806263605
        },
        "coarse": {
          "rel_rmse": 0.11776069507195056,
          "cos_median": 0.9967316044469711,
          "speed_ratio": 1.019722513111202,
          "vec_mae": 0.04969217966382824,
          "gt_mean_speed": 0.4222204434396518,
          "voxels": 42250,
          "gtEnergy": 10965.022898822586,
          "errorEnergy": 152.05834654776808
        }
      }
    },
    {
      "frame": 1014,
      "height": {
        "mae_m": 0.014298737076213708,
        "bias_m": -0.004781132364129791,
        "common": 19388,
        "gtWet": 19413,
        "predictionWet": 19392
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.14912473937733253,
          "cos_median": 0.9954647224712418,
          "speed_ratio": 0.9949789418954282,
          "vec_mae": 0.059426151629655415,
          "gt_mean_speed": 0.43036744317544845,
          "voxels": 177712,
          "gtEnergy": 48583.19025719535,
          "errorEnergy": 1080.4021134468214
        },
        "coarse": {
          "rel_rmse": 0.11180606648098111,
          "cos_median": 0.9967785435212617,
          "speed_ratio": 1.0079225790987405,
          "vec_mae": 0.047782778031304714,
          "gt_mean_speed": 0.4282252273583328,
          "voxels": 42258,
          "gtEnergy": 11449.49886067318,
          "errorEnergy": 143.12556540680671
        }
      }
    },
    {
      "frame": 1015,
      "height": {
        "mae_m": 0.014672133627008114,
        "bias_m": -0.0056084151750458566,
        "common": 19358,
        "gtWet": 19390,
        "predictionWet": 19360
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.14622038884189872,
          "cos_median": 0.9954392479266386,
          "speed_ratio": 1.001649672543581,
          "vec_mae": 0.05943048573722488,
          "gt_mean_speed": 0.43296271373313266,
          "voxels": 177751,
          "gtEnergy": 49897.13147578688,
          "errorEnergy": 1066.8207352413478
        },
        "coarse": {
          "rel_rmse": 0.1099718281143727,
          "cos_median": 0.9967279688778438,
          "speed_ratio": 1.0141582005997742,
          "vec_mae": 0.04805204036371935,
          "gt_mean_speed": 0.4311782292539561,
          "voxels": 42258,
          "gtEnergy": 11779.309113954681,
          "errorEnergy": 142.45664365075294
        }
      }
    },
    {
      "frame": 1016,
      "height": {
        "mae_m": 0.015099028958585644,
        "bias_m": -0.006292316707038684,
        "common": 19315,
        "gtWet": 19349,
        "predictionWet": 19323
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.14343652094409529,
          "cos_median": 0.9951878436578511,
          "speed_ratio": 0.9830066847689009,
          "vec_mae": 0.05810359265390032,
          "gt_mean_speed": 0.43219354327674686,
          "voxels": 177838,
          "gtEnergy": 50499.65726398917,
          "errorEnergy": 1038.9817433346993
        },
        "coarse": {
          "rel_rmse": 0.1066157122191125,
          "cos_median": 0.996525945920268,
          "speed_ratio": 0.9951150317026785,
          "vec_mae": 0.04644536231712915,
          "gt_mean_speed": 0.4302442317567007,
          "voxels": 42274,
          "gtEnergy": 11908.305587570134,
          "errorEnergy": 135.36063896183535
        }
      }
    },
    {
      "frame": 1017,
      "height": {
        "mae_m": 0.014085330713342926,
        "bias_m": -0.0037045990003739026,
        "common": 19300,
        "gtWet": 19326,
        "predictionWet": 19314
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.14284203936170806,
          "cos_median": 0.9950134665932553,
          "speed_ratio": 0.9890318848149159,
          "vec_mae": 0.057924391194719246,
          "gt_mean_speed": 0.42609849003490563,
          "voxels": 175911,
          "gtEnergy": 49250.59110213548,
          "errorEnergy": 1004.901585052077
        },
        "coarse": {
          "rel_rmse": 0.10713653904612214,
          "cos_median": 0.9963787076696006,
          "speed_ratio": 1.0009703388046047,
          "vec_mae": 0.046574661315332846,
          "gt_mean_speed": 0.423332364889664,
          "voxels": 41751,
          "gtEnergy": 11549.260693446151,
          "errorEnergy": 132.56516294934434
        }
      }
    },
    {
      "frame": 1018,
      "height": {
        "mae_m": 0.01327314801954506,
        "bias_m": -0.0037073747003072894,
        "common": 19274,
        "gtWet": 19293,
        "predictionWet": 19293
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.1437319953871033,
          "cos_median": 0.9947223578201105,
          "speed_ratio": 0.9792390550895934,
          "vec_mae": 0.05769870608367763,
          "gt_mean_speed": 0.4192677263343444,
          "voxels": 175941,
          "gtEnergy": 48363.23099155197,
          "errorEnergy": 999.1304997290107
        },
        "coarse": {
          "rel_rmse": 0.1085550494124078,
          "cos_median": 0.996185390253728,
          "speed_ratio": 0.9910324053147974,
          "vec_mae": 0.04641491847808374,
          "gt_mean_speed": 0.41624927157414177,
          "voxels": 41760,
          "gtEnergy": 11326.3806980904,
          "errorEnergy": 133.4723212976507
        }
      }
    },
    {
      "frame": 1019,
      "height": {
        "mae_m": 0.013281195653578144,
        "bias_m": -0.003504518800121734,
        "common": 19233,
        "gtWet": 19271,
        "predictionWet": 19242
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.1456853513991171,
          "cos_median": 0.9944113885627087,
          "speed_ratio": 0.9948693730591811,
          "vec_mae": 0.058087954358670466,
          "gt_mean_speed": 0.4101460191890315,
          "voxels": 176043,
          "gtEnergy": 46825.81804856422,
          "errorEnergy": 993.8415394392257
        },
        "coarse": {
          "rel_rmse": 0.11210318033238865,
          "cos_median": 0.9959347853578946,
          "speed_ratio": 1.0068834551301316,
          "vec_mae": 0.04722616563175806,
          "gt_mean_speed": 0.4068778592742633,
          "voxels": 41808,
          "gtEnergy": 10951.103422740243,
          "errorEnergy": 137.62386414430722
        }
      }
    },
    {
      "frame": 1020,
      "height": {
        "mae_m": 0.01371146303490379,
        "bias_m": -0.0034725889260644963,
        "common": 19205,
        "gtWet": 19249,
        "predictionWet": 19213
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.1482975344028354,
          "cos_median": 0.9940782657624538,
          "speed_ratio": 0.996888896978415,
          "vec_mae": 0.057976134088214844,
          "gt_mean_speed": 0.3991142140300725,
          "voxels": 176049,
          "gtEnergy": 44742.96885539542,
          "errorEnergy": 983.9944722226602
        },
        "coarse": {
          "rel_rmse": 0.11506909722174577,
          "cos_median": 0.995589701563828,
          "speed_ratio": 1.008857825019373,
          "vec_mae": 0.04737091055590622,
          "gt_mean_speed": 0.3953880551806537,
          "voxels": 41798,
          "gtEnergy": 10424.730898894959,
          "errorEnergy": 138.03278949678165
        }
      }
    },
    {
      "frame": 1021,
      "height": {
        "mae_m": 0.013530135352663739,
        "bias_m": -0.003666551351127704,
        "common": 19211,
        "gtWet": 19246,
        "predictionWet": 19221
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.15518564692879547,
          "cos_median": 0.9937886929138172,
          "speed_ratio": 1.0229224521060636,
          "vec_mae": 0.05975506513014367,
          "gt_mean_speed": 0.3872179241986311,
          "voxels": 176153,
          "gtEnergy": 42451.098135772554,
          "errorEnergy": 1022.3321797375853
        },
        "coarse": {
          "rel_rmse": 0.1236588895765945,
          "cos_median": 0.995455951152784,
          "speed_ratio": 1.0351853663557102,
          "vec_mae": 0.04973668990646204,
          "gt_mean_speed": 0.3833287585153109,
          "voxels": 41830,
          "gtEnergy": 9876.724520681426,
          "errorEnergy": 151.03014013591488
        }
      }
    },
    {
      "frame": 1022,
      "height": {
        "mae_m": 0.013128948804570462,
        "bias_m": -0.004318664777631372,
        "common": 19225,
        "gtWet": 19251,
        "predictionWet": 19245
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.15937580174668636,
          "cos_median": 0.9935312187533193,
          "speed_ratio": 1.0300754126122191,
          "vec_mae": 0.05980583154642507,
          "gt_mean_speed": 0.374924630785047,
          "voxels": 176259,
          "gtEnergy": 40013.11582233343,
          "errorEnergy": 1016.3589976584456
        },
        "coarse": {
          "rel_rmse": 0.1284121635108725,
          "cos_median": 0.9952434328625306,
          "speed_ratio": 1.0423216316405648,
          "vec_mae": 0.050067531321734554,
          "gt_mean_speed": 0.37050911700434247,
          "voxels": 41854,
          "gtEnergy": 9261.988635267806,
          "errorEnergy": 152.72726337628413
        }
      }
    },
    {
      "frame": 1023,
      "height": {
        "mae_m": 0.013388280955751702,
        "bias_m": -0.005640819589438456,
        "common": 19245,
        "gtWet": 19284,
        "predictionWet": 19259
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.16647437638177423,
          "cos_median": 0.9933572696147384,
          "speed_ratio": 1.045412755052241,
          "vec_mae": 0.06072262686490218,
          "gt_mean_speed": 0.3621878354945366,
          "voxels": 176316,
          "gtEnergy": 37546.10154395873,
          "errorEnergy": 1040.5420698770279
        },
        "coarse": {
          "rel_rmse": 0.13662567369321135,
          "cos_median": 0.9951461429186922,
          "speed_ratio": 1.0577441732514261,
          "vec_mae": 0.0513597098314527,
          "gt_mean_speed": 0.3574307831450271,
          "voxels": 41860,
          "gtEnergy": 8656.419096731232,
          "errorEnergy": 161.58569380858933
        }
      }
    },
    {
      "frame": 1024,
      "height": {
        "mae_m": 0.014097813560489126,
        "bias_m": -0.006711727579516129,
        "common": 19280,
        "gtWet": 19317,
        "predictionWet": 19287
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.1675669176417163,
          "cos_median": 0.9931838188031235,
          "speed_ratio": 1.0416956254658354,
          "vec_mae": 0.0586397237605213,
          "gt_mean_speed": 0.3497788299145068,
          "voxels": 176414,
          "gtEnergy": 35136.21970936053,
          "errorEnergy": 986.5783846019065
        },
        "coarse": {
          "rel_rmse": 0.1366520934531425,
          "cos_median": 0.9949760518605675,
          "speed_ratio": 1.0537232033066357,
          "vec_mae": 0.04928366093817854,
          "gt_mean_speed": 0.3451502576349081,
          "voxels": 41893,
          "gtEnergy": 8092.339433845621,
          "errorEnergy": 151.11468478629152
        }
      }
    },
    {
      "frame": 1025,
      "height": {
        "mae_m": 0.013408311972271044,
        "bias_m": -0.007484377959492235,
        "common": 19321,
        "gtWet": 19352,
        "predictionWet": 19336
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.17398279306967035,
          "cos_median": 0.9929547697202761,
          "speed_ratio": 1.0478238402470779,
          "vec_mae": 0.05873180158903391,
          "gt_mean_speed": 0.33811554131926425,
          "voxels": 176587,
          "gtEnergy": 32926.0405560961,
          "errorEnergy": 996.6716521071705
        },
        "coarse": {
          "rel_rmse": 0.14291408088732896,
          "cos_median": 0.9947181929516972,
          "speed_ratio": 1.0597333357681364,
          "vec_mae": 0.049644863030890725,
          "gt_mean_speed": 0.33333059846944824,
          "voxels": 41955,
          "gtEnergy": 7562.261577415232,
          "errorEnergy": 154.4549163797972
        }
      }
    },
    {
      "frame": 1026,
      "height": {
        "mae_m": 0.013362518052301398,
        "bias_m": -0.007519547545388076,
        "common": 19365,
        "gtWet": 19388,
        "predictionWet": 19391
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.17297544262634953,
          "cos_median": 0.9925887786260211,
          "speed_ratio": 1.030232994235547,
          "vec_mae": 0.05600270506189539,
          "gt_mean_speed": 0.32778827803296784,
          "voxels": 176821,
          "gtEnergy": 30991.486012032994,
          "errorEnergy": 927.2808734963182
        },
        "coarse": {
          "rel_rmse": 0.13987057560655053,
          "cos_median": 0.9944590500329656,
          "speed_ratio": 1.0418355493947755,
          "vec_mae": 0.04677564813381797,
          "gt_mean_speed": 0.3228863369122827,
          "voxels": 42008,
          "gtEnergy": 7082.536262382091,
          "errorEnergy": 138.56116655118637
        }
      }
    },
    {
      "frame": 1027,
      "height": {
        "mae_m": 0.013260702202611479,
        "bias_m": -0.0071967393633553,
        "common": 19412,
        "gtWet": 19434,
        "predictionWet": 19434
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.17732265511623463,
          "cos_median": 0.991785293739789,
          "speed_ratio": 1.0236136652644652,
          "vec_mae": 0.055764554806126215,
          "gt_mean_speed": 0.3188018025138425,
          "voxels": 176934,
          "gtEnergy": 29388.75423478997,
          "errorEnergy": 924.0801218743267
        },
        "coarse": {
          "rel_rmse": 0.14353904745622678,
          "cos_median": 0.993696159150735,
          "speed_ratio": 1.0351182591506112,
          "vec_mae": 0.04668569920069035,
          "gt_mean_speed": 0.31347683189651554,
          "voxels": 42032,
          "gtEnergy": 6672.597038857867,
          "errorEnergy": 137.478573806163
        }
      }
    },
    {
      "frame": 1028,
      "height": {
        "mae_m": 0.012868437615558465,
        "bias_m": -0.006320833167347386,
        "common": 19474,
        "gtWet": 19474,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.18149874660085086,
          "cos_median": 0.9911889938661547,
          "speed_ratio": 1.0115496451581392,
          "vec_mae": 0.05511142043527123,
          "gt_mean_speed": 0.31168546119508267,
          "voxels": 176947,
          "gtEnergy": 28062.307435403152,
          "errorEnergy": 924.4227792601645
        },
        "coarse": {
          "rel_rmse": 0.14590505962281836,
          "cos_median": 0.993074332950324,
          "speed_ratio": 1.0226801751790608,
          "vec_mae": 0.04626156646332827,
          "gt_mean_speed": 0.30674799702427524,
          "voxels": 42060,
          "gtEnergy": 6390.083684388296,
          "errorEnergy": 136.03393174363617
        }
      }
    },
    {
      "frame": 1029,
      "height": {
        "mae_m": 0.012732679903062734,
        "bias_m": -0.005511053215064915,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.18924067235231404,
          "cos_median": 0.9906242811431105,
          "speed_ratio": 1.0018783606198005,
          "vec_mae": 0.05544178830189207,
          "gt_mean_speed": 0.3058438868544082,
          "voxels": 176941,
          "gtEnergy": 27127.74416482136,
          "errorEnergy": 971.4996440812475
        },
        "coarse": {
          "rel_rmse": 0.15281521916860538,
          "cos_median": 0.9924907650144806,
          "speed_ratio": 1.012844265492227,
          "vec_mae": 0.04671171282930193,
          "gt_mean_speed": 0.3009982089173213,
          "voxels": 42073,
          "gtEnergy": 6166.03281248962,
          "errorEnergy": 143.9922270514539
        }
      }
    },
    {
      "frame": 1030,
      "height": {
        "mae_m": 0.012611757700998918,
        "bias_m": -0.005274780704308507,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.1966080103296977,
          "cos_median": 0.9901058723433414,
          "speed_ratio": 0.9929870064778824,
          "vec_mae": 0.05593929080066929,
          "gt_mean_speed": 0.30137910043725313,
          "voxels": 177192,
          "gtEnergy": 26482.955600460544,
          "errorEnergy": 1023.6909614171184
        },
        "coarse": {
          "rel_rmse": 0.15700374138847356,
          "cos_median": 0.9919968007270857,
          "speed_ratio": 1.0042283616709602,
          "vec_mae": 0.047120391320043836,
          "gt_mean_speed": 0.2960084442044099,
          "voxels": 42121,
          "gtEnergy": 5963.259649510934,
          "errorEnergy": 146.9953927977367
        }
      }
    },
    {
      "frame": 1031,
      "height": {
        "mae_m": 0.01286935517075881,
        "bias_m": -0.005401045701460822,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.2007364244689897,
          "cos_median": 0.9898725949479016,
          "speed_ratio": 0.9910864324175693,
          "vec_mae": 0.05623931422351617,
          "gt_mean_speed": 0.29814128822687086,
          "voxels": 177445,
          "gtEnergy": 25757.25054019708,
          "errorEnergy": 1037.8912981263954
        },
        "coarse": {
          "rel_rmse": 0.16151253269671756,
          "cos_median": 0.9916192258659154,
          "speed_ratio": 1.00222398446168,
          "vec_mae": 0.047404191801160844,
          "gt_mean_speed": 0.29210997903301067,
          "voxels": 42146,
          "gtEnergy": 5750.725589005615,
          "errorEnergy": 150.01514268530676
        }
      }
    },
    {
      "frame": 1032,
      "height": {
        "mae_m": 0.01370111146354662,
        "bias_m": -0.005625726448081161,
        "common": 19480,
        "gtWet": 19480,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.2078240037641044,
          "cos_median": 0.990004090358197,
          "speed_ratio": 0.9856807208787778,
          "vec_mae": 0.05667172312238045,
          "gt_mean_speed": 0.29662094181213494,
          "voxels": 177696,
          "gtEnergy": 25368.912734738024,
          "errorEnergy": 1095.7040557591017
        },
        "coarse": {
          "rel_rmse": 0.1657392905442467,
          "cos_median": 0.9918548008802954,
          "speed_ratio": 0.9970246242906075,
          "vec_mae": 0.04765205723586718,
          "gt_mean_speed": 0.29050989689164025,
          "voxels": 42232,
          "gtEnergy": 5648.849993146187,
          "errorEnergy": 155.1711551025572
        }
      }
    },
    {
      "frame": 1033,
      "height": {
        "mae_m": 0.014503062530014212,
        "bias_m": -0.005870315405611467,
        "common": 19474,
        "gtWet": 19476,
        "predictionWet": 19478
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.21901396737734244,
          "cos_median": 0.9902694982037942,
          "speed_ratio": 0.9819979784136972,
          "vec_mae": 0.05767856886221029,
          "gt_mean_speed": 0.29758320508567354,
          "voxels": 178035,
          "gtEnergy": 25338.83402013022,
          "errorEnergy": 1215.4308390533638
        },
        "coarse": {
          "rel_rmse": 0.17389972009548707,
          "cos_median": 0.9921312091613537,
          "speed_ratio": 0.9939512068713384,
          "vec_mae": 0.04842916401775759,
          "gt_mean_speed": 0.2916299454991513,
          "voxels": 42319,
          "gtEnergy": 5651.657207097797,
          "errorEnergy": 170.9124022550091
        }
      }
    },
    {
      "frame": 1034,
      "height": {
        "mae_m": 0.015090760088424537,
        "bias_m": -0.006230375007516336,
        "common": 19472,
        "gtWet": 19474,
        "predictionWet": 19473
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.22386290890494434,
          "cos_median": 0.9908062378518581,
          "speed_ratio": 0.9772311037595732,
          "vec_mae": 0.05789871174251583,
          "gt_mean_speed": 0.2985979903994184,
          "voxels": 178201,
          "gtEnergy": 25211.86083680573,
          "errorEnergy": 1263.4823710969708
        },
        "coarse": {
          "rel_rmse": 0.17866357126268145,
          "cos_median": 0.9925488946023413,
          "speed_ratio": 0.9894214487885195,
          "vec_mae": 0.04843282299210363,
          "gt_mean_speed": 0.29264429220720667,
          "voxels": 42382,
          "gtEnergy": 5621.252343533634,
          "errorEnergy": 179.43415058019232
        }
      }
    },
    {
      "frame": 1035,
      "height": {
        "mae_m": 0.016342697881511107,
        "bias_m": -0.006587418768302661,
        "common": 19471,
        "gtWet": 19472,
        "predictionWet": 19473
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.23252106642525727,
          "cos_median": 0.9910830722414175,
          "speed_ratio": 0.9799099696087836,
          "vec_mae": 0.059307279964720426,
          "gt_mean_speed": 0.30160196026567077,
          "voxels": 178790,
          "gtEnergy": 25641.845486855487,
          "errorEnergy": 1386.3532061184903
        },
        "coarse": {
          "rel_rmse": 0.18458636542524662,
          "cos_median": 0.9928038972895679,
          "speed_ratio": 0.9923649128301832,
          "vec_mae": 0.049425288371124185,
          "gt_mean_speed": 0.29505850435283704,
          "voxels": 42516,
          "gtEnergy": 5673.145416706896,
          "errorEnergy": 193.29612716142452
        }
      }
    },
    {
      "frame": 1036,
      "height": {
        "mae_m": 0.017838127183581628,
        "bias_m": -0.006448924843893191,
        "common": 19473,
        "gtWet": 19475,
        "predictionWet": 19473
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.24304405556872982,
          "cos_median": 0.9912547545013821,
          "speed_ratio": 0.9827055628883445,
          "vec_mae": 0.06055379608040929,
          "gt_mean_speed": 0.3031056628030355,
          "voxels": 179210,
          "gtEnergy": 25620.445970316323,
          "errorEnergy": 1513.4103233604667
        },
        "coarse": {
          "rel_rmse": 0.19395299526883877,
          "cos_median": 0.9929908762066775,
          "speed_ratio": 0.9951011085713797,
          "vec_mae": 0.050342247442668485,
          "gt_mean_speed": 0.2957774911952162,
          "voxels": 42600,
          "gtEnergy": 5594.10814721896,
          "errorEnergy": 210.43784216338148
        }
      }
    },
    {
      "frame": 1037,
      "height": {
        "mae_m": 0.018103128492152714,
        "bias_m": -0.006137773369695422,
        "common": 19480,
        "gtWet": 19485,
        "predictionWet": 19482
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.28877312855338955,
          "cos_median": 0.9910734638538252,
          "speed_ratio": 0.97873250811296,
          "vec_mae": 0.06711523633491666,
          "gt_mean_speed": 0.3149419781681048,
          "voxels": 181223,
          "gtEnergy": 30276.971535333647,
          "errorEnergy": 2524.7942273466692
        },
        "coarse": {
          "rel_rmse": 0.239964044155318,
          "cos_median": 0.9928380349192367,
          "speed_ratio": 0.9925148747234275,
          "vec_mae": 0.05557596538529315,
          "gt_mean_speed": 0.3057476111956222,
          "voxels": 43084,
          "gtEnergy": 6399.543658030953,
          "errorEnergy": 368.50327449711284
        }
      }
    },
    {
      "frame": 1038,
      "height": {
        "mae_m": 0.01727174037564163,
        "bias_m": -0.005781744553353524,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.2870298241671062,
          "cos_median": 0.9912864624897065,
          "speed_ratio": 0.9722098478669599,
          "vec_mae": 0.06739146509490906,
          "gt_mean_speed": 0.3158282296369623,
          "voxels": 181674,
          "gtEnergy": 30223.895483806722,
          "errorEnergy": 2490.0294790297135
        },
        "coarse": {
          "rel_rmse": 0.2369473496783924,
          "cos_median": 0.9931164419998402,
          "speed_ratio": 0.9857622238764784,
          "vec_mae": 0.055750499710298836,
          "gt_mean_speed": 0.3068867036996127,
          "voxels": 43200,
          "gtEnergy": 6433.348138690815,
          "errorEnergy": 361.1941971755316
        }
      }
    },
    {
      "frame": 1039,
      "height": {
        "mae_m": 0.01670541862846568,
        "bias_m": -0.005613856528699594,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.30017883391739536,
          "cos_median": 0.9912378302619647,
          "speed_ratio": 0.9683989524189673,
          "vec_mae": 0.06959656842592715,
          "gt_mean_speed": 0.3171555206826849,
          "voxels": 182033,
          "gtEnergy": 30646.111968967827,
          "errorEnergy": 2761.4393958716887
        },
        "coarse": {
          "rel_rmse": 0.2470504568195469,
          "cos_median": 0.9930322580708617,
          "speed_ratio": 0.9821546683642133,
          "vec_mae": 0.05763634199453866,
          "gt_mean_speed": 0.30839559620837187,
          "voxels": 43330,
          "gtEnergy": 6529.9831061861905,
          "errorEnergy": 398.5505201464773
        }
      }
    },
    {
      "frame": 1040,
      "height": {
        "mae_m": 0.016012626542249116,
        "bias_m": -0.005507439513918989,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.3113861207245841,
          "cos_median": 0.9913002778284026,
          "speed_ratio": 0.9697176848140492,
          "vec_mae": 0.07103605671440127,
          "gt_mean_speed": 0.31750441144549557,
          "voxels": 182282,
          "gtEnergy": 30939.920129830913,
          "errorEnergy": 2999.975378289551
        },
        "coarse": {
          "rel_rmse": 0.26285580370916944,
          "cos_median": 0.9930521840753523,
          "speed_ratio": 0.9829986274854018,
          "vec_mae": 0.0592358423300338,
          "gt_mean_speed": 0.3090258362794363,
          "voxels": 43402,
          "gtEnergy": 6656.371786829943,
          "errorEnergy": 459.90985103812034
        }
      }
    },
    {
      "frame": 1041,
      "height": {
        "mae_m": 0.01683015679808642,
        "bias_m": -0.005511668770513173,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.32294003262184273,
          "cos_median": 0.9908786602262944,
          "speed_ratio": 0.9673237850484215,
          "vec_mae": 0.07304605354917834,
          "gt_mean_speed": 0.3162851883643199,
          "voxels": 182880,
          "gtEnergy": 30666.29923784675,
          "errorEnergy": 3198.1964639582266
        },
        "coarse": {
          "rel_rmse": 0.273920858153697,
          "cos_median": 0.9926926416016753,
          "speed_ratio": 0.9808712899223744,
          "vec_mae": 0.061222402779341954,
          "gt_mean_speed": 0.3080250144027554,
          "voxels": 43565,
          "gtEnergy": 6642.747892948027,
          "errorEnergy": 498.42288822300503
        }
      }
    },
    {
      "frame": 1042,
      "height": {
        "mae_m": 0.01761972940465533,
        "bias_m": -0.005368334104218777,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.33188590370271975,
          "cos_median": 0.9903500623680737,
          "speed_ratio": 0.9707107837936418,
          "vec_mae": 0.07539334233079052,
          "gt_mean_speed": 0.31510808987088096,
          "voxels": 183106,
          "gtEnergy": 30835.922778850327,
          "errorEnergy": 3396.523026094405
        },
        "coarse": {
          "rel_rmse": 0.2814990940583526,
          "cos_median": 0.9921612299726118,
          "speed_ratio": 0.9844887463808782,
          "vec_mae": 0.06330414986865454,
          "gt_mean_speed": 0.3060769321939217,
          "voxels": 43611,
          "gtEnergy": 6609.931166186103,
          "errorEnergy": 523.7824465958192
        }
      }
    },
    {
      "frame": 1043,
      "height": {
        "mae_m": 0.017365723100948756,
        "bias_m": -0.005104509737824895,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.34574739704462304,
          "cos_median": 0.9897700817120779,
          "speed_ratio": 0.9740500601738289,
          "vec_mae": 0.07889015498866135,
          "gt_mean_speed": 0.31684128658274474,
          "voxels": 181427,
          "gtEnergy": 31339.22798003215,
          "errorEnergy": 3746.3308804868825
        },
        "coarse": {
          "rel_rmse": 0.3013968901927549,
          "cos_median": 0.9915953460393515,
          "speed_ratio": 0.987823374405824,
          "vec_mae": 0.06697181720235974,
          "gt_mean_speed": 0.30744444197965776,
          "voxels": 43259,
          "gtEnergy": 6716.379863072147,
          "errorEnergy": 610.1165204602925
        }
      }
    },
    {
      "frame": 1044,
      "height": {
        "mae_m": 0.01624375953198417,
        "bias_m": -0.005145459889601977,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.37776099083066866,
          "cos_median": 0.9887422961003375,
          "speed_ratio": 0.9734951571128996,
          "vec_mae": 0.08444198446415492,
          "gt_mean_speed": 0.3180542677382926,
          "voxels": 182535,
          "gtEnergy": 33144.26246968314,
          "errorEnergy": 4729.797824420314
        },
        "coarse": {
          "rel_rmse": 0.3327162647248808,
          "cos_median": 0.9905554116221826,
          "speed_ratio": 0.988554609536334,
          "vec_mae": 0.07186849506091562,
          "gt_mean_speed": 0.30763797574541824,
          "voxels": 43536,
          "gtEnergy": 7030.222496477527,
          "errorEnergy": 778.2464234568757
        }
      }
    },
    {
      "frame": 1045,
      "height": {
        "mae_m": 0.016981957469789817,
        "bias_m": -0.004906294285581612,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.38300173414546673,
          "cos_median": 0.9875500378789019,
          "speed_ratio": 0.968984145099532,
          "vec_mae": 0.08602172198446871,
          "gt_mean_speed": 0.31248427103602583,
          "voxels": 182831,
          "gtEnergy": 32045.250190734623,
          "errorEnergy": 4700.728272807057
        },
        "coarse": {
          "rel_rmse": 0.34123723443588966,
          "cos_median": 0.9894836832221492,
          "speed_ratio": 0.9839005167450395,
          "vec_mae": 0.07393729100964044,
          "gt_mean_speed": 0.3027508247327857,
          "voxels": 43633,
          "gtEnergy": 6899.944926524797,
          "errorEnergy": 803.4492532292135
        }
      }
    },
    {
      "frame": 1046,
      "height": {
        "mae_m": 0.018152129210071536,
        "bias_m": -0.005311629367289937,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.39909783286802625,
          "cos_median": 0.9860555919044102,
          "speed_ratio": 0.9706525829996412,
          "vec_mae": 0.08980222202282961,
          "gt_mean_speed": 0.308984339587942,
          "voxels": 183578,
          "gtEnergy": 32375.930797145946,
          "errorEnergy": 5156.808477986802
        },
        "coarse": {
          "rel_rmse": 0.35792905385263046,
          "cos_median": 0.9881288286864855,
          "speed_ratio": 0.9853912530753438,
          "vec_mae": 0.07715993220495482,
          "gt_mean_speed": 0.2978654805655265,
          "voxels": 43787,
          "gtEnergy": 6847.071526248247,
          "errorEnergy": 877.2002958384134
        }
      }
    },
    {
      "frame": 1047,
      "height": {
        "mae_m": 0.01869468075609475,
        "bias_m": -0.005797921413297039,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.41373254750557975,
          "cos_median": 0.9848838081015675,
          "speed_ratio": 0.9711802041283393,
          "vec_mae": 0.09200212629921162,
          "gt_mean_speed": 0.3028349904015953,
          "voxels": 183895,
          "gtEnergy": 31624.51694941732,
          "errorEnergy": 5413.314698869722
        },
        "coarse": {
          "rel_rmse": 0.37372530739911736,
          "cos_median": 0.9871629117851266,
          "speed_ratio": 0.9860306169356094,
          "vec_mae": 0.07923597681471023,
          "gt_mean_speed": 0.291259470066236,
          "voxels": 43873,
          "gtEnergy": 6660.376471369603,
          "errorEnergy": 930.2588138852658
        }
      }
    },
    {
      "frame": 1048,
      "height": {
        "mae_m": 0.019252318164489777,
        "bias_m": -0.006388588875199909,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.4303960680341502,
          "cos_median": 0.9840008515010854,
          "speed_ratio": 0.9737509503699039,
          "vec_mae": 0.0936199399734598,
          "gt_mean_speed": 0.2963708342281146,
          "voxels": 184464,
          "gtEnergy": 30902.29744720422,
          "errorEnergy": 5724.36554012054
        },
        "coarse": {
          "rel_rmse": 0.391613355325819,
          "cos_median": 0.9865344756686986,
          "speed_ratio": 0.9886788873466612,
          "vec_mae": 0.08074444337894782,
          "gt_mean_speed": 0.28453544791578034,
          "voxels": 44006,
          "gtEnergy": 6497.028789254845,
          "errorEnergy": 996.3909625413313
        }
      }
    },
    {
      "frame": 1049,
      "height": {
        "mae_m": 0.020208329793287478,
        "bias_m": -0.007192271702029772,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.4439253128175414,
          "cos_median": 0.9828734838087401,
          "speed_ratio": 0.9671202095437046,
          "vec_mae": 0.09411517699684682,
          "gt_mean_speed": 0.289152437150332,
          "voxels": 184957,
          "gtEnergy": 30052.718955426553,
          "errorEnergy": 5922.479808657547
        },
        "coarse": {
          "rel_rmse": 0.4025084056415356,
          "cos_median": 0.9856417952483235,
          "speed_ratio": 0.9833895413993616,
          "vec_mae": 0.08091581282101624,
          "gt_mean_speed": 0.2774552296212779,
          "voxels": 44155,
          "gtEnergy": 6342.5579328213835,
          "errorEnergy": 1027.5769437333404
        }
      }
    },
    {
      "frame": 1050,
      "height": {
        "mae_m": 0.020861228544896204,
        "bias_m": -0.007944071567669018,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.45619009584684933,
          "cos_median": 0.9817282692974963,
          "speed_ratio": 0.9641691987307575,
          "vec_mae": 0.09591388922821796,
          "gt_mean_speed": 0.2849087294882181,
          "voxels": 185719,
          "gtEnergy": 29985.56008827071,
          "errorEnergy": 6240.277025045448
        },
        "coarse": {
          "rel_rmse": 0.4190247913649542,
          "cos_median": 0.9845818055395068,
          "speed_ratio": 0.980364771700218,
          "vec_mae": 0.08280769425927281,
          "gt_mean_speed": 0.273130600342619,
          "voxels": 44331,
          "gtEnergy": 6324.231161521876,
          "errorEnergy": 1110.4197377733785
        }
      }
    },
    {
      "frame": 1051,
      "height": {
        "mae_m": 0.021223025351558844,
        "bias_m": -0.008259633778176192,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.4609208020400293,
          "cos_median": 0.9808809272974616,
          "speed_ratio": 0.9610673407788587,
          "vec_mae": 0.09618949758695604,
          "gt_mean_speed": 0.280058487047391,
          "voxels": 186324,
          "gtEnergy": 29599.15445350183,
          "errorEnergy": 6288.280743645029
        },
        "coarse": {
          "rel_rmse": 0.41990300381945905,
          "cos_median": 0.9839141457364766,
          "speed_ratio": 0.9785764924198913,
          "vec_mae": 0.08228749282401662,
          "gt_mean_speed": 0.2674616322855303,
          "voxels": 44458,
          "gtEnergy": 6194.323859984112,
          "errorEnergy": 1092.174093544421
        }
      }
    },
    {
      "frame": 1052,
      "height": {
        "mae_m": 0.021003427116797403,
        "bias_m": -0.008124345827671227,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.4740936479613528,
          "cos_median": 0.9800140489173669,
          "speed_ratio": 0.9591314358177916,
          "vec_mae": 0.09832116264692314,
          "gt_mean_speed": 0.27752582672536164,
          "voxels": 187074,
          "gtEnergy": 29826.04173718065,
          "errorEnergy": 6703.843919223123
        },
        "coarse": {
          "rel_rmse": 0.4358857787514409,
          "cos_median": 0.983179386011459,
          "speed_ratio": 0.976291855562276,
          "vec_mae": 0.08437411159737823,
          "gt_mean_speed": 0.2647771686802544,
          "voxels": 44610,
          "gtEnergy": 6263.8403164875235,
          "errorEnergy": 1190.1071862111419
        }
      }
    },
    {
      "frame": 1053,
      "height": {
        "mae_m": 0.021315706805753735,
        "bias_m": -0.007418966205510742,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.4843582696713549,
          "cos_median": 0.9786960828459155,
          "speed_ratio": 0.9573900970396106,
          "vec_mae": 0.09966983556481786,
          "gt_mean_speed": 0.27441680858375794,
          "voxels": 187912,
          "gtEnergy": 29579.333898572993,
          "errorEnergy": 6939.398500594561
        },
        "coarse": {
          "rel_rmse": 0.44489226463632675,
          "cos_median": 0.9819745389640083,
          "speed_ratio": 0.9754582014704732,
          "vec_mae": 0.0855237502426766,
          "gt_mean_speed": 0.2617203908159757,
          "voxels": 44795,
          "gtEnergy": 6203.933105634021,
          "errorEnergy": 1227.9390643911486
        }
      }
    },
    {
      "frame": 1054,
      "height": {
        "mae_m": 0.020419445531245802,
        "bias_m": -0.006172892745741122,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5067428118342616,
          "cos_median": 0.9778108334218079,
          "speed_ratio": 0.9525287210943726,
          "vec_mae": 0.1020926119627164,
          "gt_mean_speed": 0.27280640130457573,
          "voxels": 189096,
          "gtEnergy": 29657.882539710008,
          "errorEnergy": 7615.796567093066
        },
        "coarse": {
          "rel_rmse": 0.46735454353958983,
          "cos_median": 0.9813068674744353,
          "speed_ratio": 0.9709993862527844,
          "vec_mae": 0.08729357914240683,
          "gt_mean_speed": 0.2594632845723322,
          "voxels": 45070,
          "gtEnergy": 6170.265904278405,
          "errorEnergy": 1347.711140879112
        }
      }
    },
    {
      "frame": 1055,
      "height": {
        "mae_m": 0.018012133736974262,
        "bias_m": -0.004966727383095532,
        "common": 19486,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5171976985435142,
          "cos_median": 0.9773204575186083,
          "speed_ratio": 0.9483778963422532,
          "vec_mae": 0.10478610056640533,
          "gt_mean_speed": 0.27392429844627175,
          "voxels": 190574,
          "gtEnergy": 30393.88170120141,
          "errorEnergy": 8130.164560201569
        },
        "coarse": {
          "rel_rmse": 0.479029931483822,
          "cos_median": 0.980913915803814,
          "speed_ratio": 0.9667252445137811,
          "vec_mae": 0.08981939201279887,
          "gt_mean_speed": 0.2606253010949867,
          "voxels": 45418,
          "gtEnergy": 6347.132640212258,
          "errorEnergy": 1456.4744657651204
        }
      }
    },
    {
      "frame": 1056,
      "height": {
        "mae_m": 0.017109016857119658,
        "bias_m": -0.0037128430098218083,
        "common": 19486,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5304612543167001,
          "cos_median": 0.9772488073702631,
          "speed_ratio": 0.9521417350813253,
          "vec_mae": 0.1068444152199406,
          "gt_mean_speed": 0.27376789177632666,
          "voxels": 191643,
          "gtEnergy": 30566.451786582373,
          "errorEnergy": 8601.06765233582
        },
        "coarse": {
          "rel_rmse": 0.4943206060975863,
          "cos_median": 0.9808822521955726,
          "speed_ratio": 0.9696558013599014,
          "vec_mae": 0.09200599546673784,
          "gt_mean_speed": 0.2606886235949281,
          "voxels": 45695,
          "gtEnergy": 6397.344463982031,
          "errorEnergy": 1563.209426496078
        }
      }
    },
    {
      "frame": 1057,
      "height": {
        "mae_m": 0.017552500415382224,
        "bias_m": -0.002223997539653245,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5432285093951816,
          "cos_median": 0.9775047791147031,
          "speed_ratio": 0.9536213840386819,
          "vec_mae": 0.10930540006881943,
          "gt_mean_speed": 0.27483455097716813,
          "voxels": 192651,
          "gtEnergy": 30595.57455068447,
          "errorEnergy": 9028.66879288201
        },
        "coarse": {
          "rel_rmse": 0.5079580030386809,
          "cos_median": 0.9809599758024661,
          "speed_ratio": 0.971957309325719,
          "vec_mae": 0.09440283168998409,
          "gt_mean_speed": 0.2615742311184877,
          "voxels": 45945,
          "gtEnergy": 6405.5692202172295,
          "errorEnergy": 1652.7735078700757
        }
      }
    },
    {
      "frame": 1058,
      "height": {
        "mae_m": 0.01759624372163568,
        "bias_m": -0.0009583075711484618,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5480561164280376,
          "cos_median": 0.9775642840976666,
          "speed_ratio": 0.9549183621828253,
          "vec_mae": 0.11138764340741489,
          "gt_mean_speed": 0.27668317662741376,
          "voxels": 193906,
          "gtEnergy": 30956.052282780533,
          "errorEnergy": 9298.13033102635
        },
        "coarse": {
          "rel_rmse": 0.5150181030461657,
          "cos_median": 0.981280210425156,
          "speed_ratio": 0.9729207401774552,
          "vec_mae": 0.09651376279085605,
          "gt_mean_speed": 0.26351514945469684,
          "voxels": 46262,
          "gtEnergy": 6496.9304677295895,
          "errorEnergy": 1723.2695280919147
        }
      }
    },
    {
      "frame": 1059,
      "height": {
        "mae_m": 0.01733896229467544,
        "bias_m": 0.0004764117865031136,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.554260331816193,
          "cos_median": 0.9783961925136951,
          "speed_ratio": 0.9538428034500415,
          "vec_mae": 0.11295800875766479,
          "gt_mean_speed": 0.2777817667122369,
          "voxels": 194600,
          "gtEnergy": 31056.538418341683,
          "errorEnergy": 9540.708835584443
        },
        "coarse": {
          "rel_rmse": 0.5193948152858053,
          "cos_median": 0.9820381307771449,
          "speed_ratio": 0.9720476615454101,
          "vec_mae": 0.09806602037553386,
          "gt_mean_speed": 0.26515576247507866,
          "voxels": 46500,
          "gtEnergy": 6581.888070301519,
          "errorEnergy": 1775.6023564437014
        }
      }
    },
    {
      "frame": 1060,
      "height": {
        "mae_m": 0.01666307322624717,
        "bias_m": 0.0014479926426265112,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5600285661006809,
          "cos_median": 0.9783162530402636,
          "speed_ratio": 0.95229789394146,
          "vec_mae": 0.11416710707420458,
          "gt_mean_speed": 0.27870822596099337,
          "voxels": 195165,
          "gtEnergy": 31067.968181358654,
          "errorEnergy": 9743.908836618082
        },
        "coarse": {
          "rel_rmse": 0.5284223008743555,
          "cos_median": 0.9819298586760263,
          "speed_ratio": 0.9711807775243402,
          "vec_mae": 0.09968235898223923,
          "gt_mean_speed": 0.26624731833378557,
          "voxels": 46650,
          "gtEnergy": 6588.252192395118,
          "errorEnergy": 1839.638503382945
        }
      }
    },
    {
      "frame": 1061,
      "height": {
        "mae_m": 0.015768071431436024,
        "bias_m": 0.0022166227140157646,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5623764545058437,
          "cos_median": 0.9789483729734934,
          "speed_ratio": 0.9519209206112081,
          "vec_mae": 0.11389236171786186,
          "gt_mean_speed": 0.2783684509090299,
          "voxels": 195868,
          "gtEnergy": 30601.715504781,
          "errorEnergy": 9678.321221451492
        },
        "coarse": {
          "rel_rmse": 0.5310043450406793,
          "cos_median": 0.9825952914863161,
          "speed_ratio": 0.9699564773415427,
          "vec_mae": 0.09928069637539069,
          "gt_mean_speed": 0.265930076048168,
          "voxels": 46798,
          "gtEnergy": 6485.489737953429,
          "errorEnergy": 1828.685098984703
        }
      }
    },
    {
      "frame": 1062,
      "height": {
        "mae_m": 0.015583865675937844,
        "bias_m": 0.0023938211429730865,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.567979368993357,
          "cos_median": 0.978869022970434,
          "speed_ratio": 0.9543588555948489,
          "vec_mae": 0.1153594662431411,
          "gt_mean_speed": 0.27981471501489125,
          "voxels": 193498,
          "gtEnergy": 29717.77293406938,
          "errorEnergy": 9586.970297529777
        },
        "coarse": {
          "rel_rmse": 0.5345141589568934,
          "cos_median": 0.9823730138751544,
          "speed_ratio": 0.971933785978997,
          "vec_mae": 0.1006349935322461,
          "gt_mean_speed": 0.2675582422851684,
          "voxels": 46259,
          "gtEnergy": 6322.721196671511,
          "errorEnergy": 1806.4355008582538
        }
      }
    },
    {
      "frame": 1063,
      "height": {
        "mae_m": 0.0156873682686689,
        "bias_m": 0.002171311836911775,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.574125481846587,
          "cos_median": 0.978687799403894,
          "speed_ratio": 0.9544189335152746,
          "vec_mae": 0.11614431728478325,
          "gt_mean_speed": 0.2791904613806589,
          "voxels": 194640,
          "gtEnergy": 29321.809928560462,
          "errorEnergy": 9665.05700908829
        },
        "coarse": {
          "rel_rmse": 0.5428244805617479,
          "cos_median": 0.9823173918306609,
          "speed_ratio": 0.9717640650443801,
          "vec_mae": 0.10203059521717169,
          "gt_mean_speed": 0.26747488089249294,
          "voxels": 46558,
          "gtEnergy": 6293.104978442995,
          "errorEnergy": 1854.3163490568484
        }
      }
    },
    {
      "frame": 1064,
      "height": {
        "mae_m": 0.015203540018734673,
        "bias_m": 0.0018640066145405607,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5828954537052093,
          "cos_median": 0.9781989987856275,
          "speed_ratio": 0.9476361078939085,
          "vec_mae": 0.11585660497216585,
          "gt_mean_speed": 0.27612141724190553,
          "voxels": 195038,
          "gtEnergy": 28051.01288551229,
          "errorEnergy": 9530.811579286383
        },
        "coarse": {
          "rel_rmse": 0.5511862371299421,
          "cos_median": 0.9817537008330044,
          "speed_ratio": 0.9643817338125932,
          "vec_mae": 0.10175122899447775,
          "gt_mean_speed": 0.26458942232124477,
          "voxels": 46652,
          "gtEnergy": 6022.819574018139,
          "errorEnergy": 1829.7703376286224
        }
      }
    },
    {
      "frame": 1065,
      "height": {
        "mae_m": 0.014749558712771118,
        "bias_m": 0.0014359280329235766,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.589415929519083,
          "cos_median": 0.977677884544061,
          "speed_ratio": 0.9416273857557554,
          "vec_mae": 0.11605277073966849,
          "gt_mean_speed": 0.27420341431117834,
          "voxels": 195600,
          "gtEnergy": 27313.22719847666,
          "errorEnergy": 9488.919342679
        },
        "coarse": {
          "rel_rmse": 0.5600043015164683,
          "cos_median": 0.9812436652685624,
          "speed_ratio": 0.9594820441217611,
          "vec_mae": 0.10233057178054313,
          "gt_mean_speed": 0.26308650139699247,
          "voxels": 46821,
          "gtEnergy": 5889.767875396179,
          "errorEnergy": 1847.0595809587526
        }
      }
    },
    {
      "frame": 1066,
      "height": {
        "mae_m": 0.0160292539942454,
        "bias_m": 0.0009697342480300037,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5970254509499625,
          "cos_median": 0.9771065516406603,
          "speed_ratio": 0.9356770961755777,
          "vec_mae": 0.11596274623366344,
          "gt_mean_speed": 0.2715694314372089,
          "voxels": 196365,
          "gtEnergy": 26356.114948711216,
          "errorEnergy": 9394.357510893755
        },
        "coarse": {
          "rel_rmse": 0.5664986469480048,
          "cos_median": 0.9806585867530003,
          "speed_ratio": 0.9541401172489915,
          "vec_mae": 0.10230362475739706,
          "gt_mean_speed": 0.26069174487847746,
          "voxels": 47029,
          "gtEnergy": 5700.764526899279,
          "errorEnergy": 1829.4934393860228
        }
      }
    },
    {
      "frame": 1067,
      "height": {
        "mae_m": 0.017153195318564546,
        "bias_m": 0.0007752921765312375,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5991738226607751,
          "cos_median": 0.9770604971940698,
          "speed_ratio": 0.9309452471288198,
          "vec_mae": 0.11463242771916365,
          "gt_mean_speed": 0.26822225744461936,
          "voxels": 197073,
          "gtEnergy": 25250.87929685517,
          "errorEnergy": 9065.299737210511
        },
        "coarse": {
          "rel_rmse": 0.569432865522808,
          "cos_median": 0.9807342342463113,
          "speed_ratio": 0.9497960536600434,
          "vec_mae": 0.10109973922305145,
          "gt_mean_speed": 0.25727300709039447,
          "voxels": 47181,
          "gtEnergy": 5453.658733773704,
          "errorEnergy": 1768.3695047261058
        }
      }
    },
    {
      "frame": 1068,
      "height": {
        "mae_m": 0.016602072035758902,
        "bias_m": 0.0006150973800382195,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.6005491337039386,
          "cos_median": 0.9768439920996344,
          "speed_ratio": 0.9251523343360519,
          "vec_mae": 0.11368099785948002,
          "gt_mean_speed": 0.26525998115144933,
          "voxels": 197706,
          "gtEnergy": 24365.095543764266,
          "errorEnergy": 8787.497377192016
        },
        "coarse": {
          "rel_rmse": 0.5698251668772569,
          "cos_median": 0.9807265268393979,
          "speed_ratio": 0.944509478733817,
          "vec_mae": 0.10009969023601828,
          "gt_mean_speed": 0.2542911828965174,
          "voxels": 47310,
          "gtEnergy": 5256.552863943763,
          "errorEnergy": 1706.8065038810298
        }
      }
    },
    {
      "frame": 1069,
      "height": {
        "mae_m": 0.01606801047491896,
        "bias_m": 0.0006519505975457375,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.6003840150687262,
          "cos_median": 0.9766314883798343,
          "speed_ratio": 0.9207023728830638,
          "vec_mae": 0.11277051055885219,
          "gt_mean_speed": 0.2629921837791058,
          "voxels": 198328,
          "gtEnergy": 23616.13197787318,
          "errorEnergy": 8512.69373530145
        },
        "coarse": {
          "rel_rmse": 0.5695543301754268,
          "cos_median": 0.9804436697393142,
          "speed_ratio": 0.9410679576641728,
          "vec_mae": 0.09932505783901543,
          "gt_mean_speed": 0.2521834132678549,
          "voxels": 47464,
          "gtEnergy": 5109.595244021457,
          "errorEnergy": 1657.512510304227
        }
      }
    },
    {
      "frame": 1070,
      "height": {
        "mae_m": 0.01618925000883001,
        "bias_m": 0.0003835889605367701,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.6071843897606728,
          "cos_median": 0.9765872528730688,
          "speed_ratio": 0.9236824700824957,
          "vec_mae": 0.11310061879752266,
          "gt_mean_speed": 0.26146893810918886,
          "voxels": 199242,
          "gtEnergy": 23074.23480626312,
          "errorEnergy": 8506.844672944455
        },
        "coarse": {
          "rel_rmse": 0.576083531936949,
          "cos_median": 0.9806443043702633,
          "speed_ratio": 0.9451452265112914,
          "vec_mae": 0.10001709576079763,
          "gt_mean_speed": 0.2512068886013876,
          "voxels": 47720,
          "gtEnergy": 5027.398065036122,
          "errorEnergy": 1668.4538359440292
        }
      }
    },
    {
      "frame": 1071,
      "height": {
        "mae_m": 0.016013781409503686,
        "bias_m": 0.0004075525878549192,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.6116791691785238,
          "cos_median": 0.9765347567308901,
          "speed_ratio": 0.9317377645071964,
          "vec_mae": 0.11342601558486798,
          "gt_mean_speed": 0.260569623376263,
          "voxels": 199971,
          "gtEnergy": 22724.52516725558,
          "errorEnergy": 8502.413042168522
        },
        "coarse": {
          "rel_rmse": 0.580065434070083,
          "cos_median": 0.9806701504842266,
          "speed_ratio": 0.9540376971735604,
          "vec_mae": 0.10034687684752754,
          "gt_mean_speed": 0.25039188501912146,
          "voxels": 47904,
          "gtEnergy": 4953.425096153353,
          "errorEnergy": 1666.7082059619352
        }
      }
    },
    {
      "frame": 1072,
      "height": {
        "mae_m": 0.015603885909287586,
        "bias_m": 0.0006755927113933767,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.6199408915671282,
          "cos_median": 0.9761458152217132,
          "speed_ratio": 0.945383115554247,
          "vec_mae": 0.11485754585215134,
          "gt_mean_speed": 0.26005767552467435,
          "voxels": 200897,
          "gtEnergy": 22540.57650286016,
          "errorEnergy": 8662.945587142007
        },
        "coarse": {
          "rel_rmse": 0.5906538954323638,
          "cos_median": 0.980272983564671,
          "speed_ratio": 0.9683525733759835,
          "vec_mae": 0.10197619068052746,
          "gt_mean_speed": 0.2500852211092121,
          "voxels": 48139,
          "gtEnergy": 4919.718645751463,
          "errorEnergy": 1716.352202385773
        }
      }
    },
    {
      "frame": 1073,
      "height": {
        "mae_m": 0.015065557110360624,
        "bias_m": 0.0011580697284681652,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.6227690640126027,
          "cos_median": 0.9760563869454937,
          "speed_ratio": 0.9595189799533793,
          "vec_mae": 0.11599746943919238,
          "gt_mean_speed": 0.259685069493718,
          "voxels": 201812,
          "gtEnergy": 22512.402180006484,
          "errorEnergy": 8731.23948725499
        },
        "coarse": {
          "rel_rmse": 0.5935213511533926,
          "cos_median": 0.9802899349537287,
          "speed_ratio": 0.9833883102192477,
          "vec_mae": 0.10305747279460993,
          "gt_mean_speed": 0.24961053284994464,
          "voxels": 48360,
          "gtEnergy": 4910.212144924079,
          "errorEnergy": 1729.7086196720413
        }
      }
    },
    {
      "frame": 1074,
      "height": {
        "mae_m": 0.014949674317241165,
        "bias_m": 0.0020073397558835566,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.6249666760937325,
          "cos_median": 0.975020795095926,
          "speed_ratio": 0.9682203502252147,
          "vec_mae": 0.11776116214026935,
          "gt_mean_speed": 0.2595136418085114,
          "voxels": 202612,
          "gtEnergy": 22584.85639903204,
          "errorEnergy": 8821.26878640485
        },
        "coarse": {
          "rel_rmse": 0.5962026713312037,
          "cos_median": 0.9792594311900484,
          "speed_ratio": 0.9921988768016133,
          "vec_mae": 0.10514386863462319,
          "gt_mean_speed": 0.24982420699961316,
          "voxels": 48602,
          "gtEnergy": 4950.550093165177,
          "errorEnergy": 1759.7107800573826
        }
      }
    },
    {
      "frame": 1075,
      "height": {
        "mae_m": 0.01429129749356899,
        "bias_m": 0.0029522336684237697,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.6274994226694743,
          "cos_median": 0.9736774542924761,
          "speed_ratio": 0.9726975106677752,
          "vec_mae": 0.11971883577471422,
          "gt_mean_speed": 0.25925616807326535,
          "voxels": 203613,
          "gtEnergy": 22759.956257670005,
          "errorEnergy": 8961.858535469786
        },
        "coarse": {
          "rel_rmse": 0.5984286976109101,
          "cos_median": 0.9778264270794874,
          "speed_ratio": 0.9969173305334679,
          "vec_mae": 0.10705827621363909,
          "gt_mean_speed": 0.24947275982006878,
          "voxels": 48835,
          "gtEnergy": 4992.137999465803,
          "errorEnergy": 1787.7690153141966
        }
      }
    },
    {
      "frame": 1076,
      "height": {
        "mae_m": 0.014197877694568697,
        "bias_m": 0.003722599094871649,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.6258397019142651,
          "cos_median": 0.9722874912528976,
          "speed_ratio": 0.9727025665817353,
          "vec_mae": 0.12030512246217243,
          "gt_mean_speed": 0.2580049089983183,
          "voxels": 204432,
          "gtEnergy": 22818.813708946225,
          "errorEnergy": 8937.566446527628
        },
        "coarse": {
          "rel_rmse": 0.5966524279276214,
          "cos_median": 0.9764297105118921,
          "speed_ratio": 0.9960244442028077,
          "vec_mae": 0.10784818775438622,
          "gt_mean_speed": 0.24851114792327486,
          "voxels": 49046,
          "gtEnergy": 5022.609841141599,
          "errorEnergy": 1788.019569254562
        }
      }
    },
    {
      "frame": 1077,
      "height": {
        "mae_m": 0.014788282509104968,
        "bias_m": 0.004020884259574489,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.6223783960127938,
          "cos_median": 0.9705377370189889,
          "speed_ratio": 0.9658877465230449,
          "vec_mae": 0.12085678382793841,
          "gt_mean_speed": 0.25728626039076424,
          "voxels": 205123,
          "gtEnergy": 23078.36807191047,
          "errorEnergy": 8939.518214075992
        },
        "coarse": {
          "rel_rmse": 0.5934492373271814,
          "cos_median": 0.9747634384273669,
          "speed_ratio": 0.9879221722593754,
          "vec_mae": 0.10844410096234632,
          "gt_mean_speed": 0.24787456882775064,
          "voxels": 49203,
          "gtEnergy": 5088.093704207451,
          "errorEnergy": 1791.9350031170109
        }
      }
    },
    {
      "frame": 1078,
      "height": {
        "mae_m": 0.014596763923713705,
        "bias_m": 0.0038195127096343124,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.6131236823911673,
          "cos_median": 0.9692697911550092,
          "speed_ratio": 0.9581661922986004,
          "vec_mae": 0.12028466590647527,
          "gt_mean_speed": 0.2563816143830753,
          "voxels": 205806,
          "gtEnergy": 23371.89181697679,
          "errorEnergy": 8785.976761438535
        },
        "coarse": {
          "rel_rmse": 0.5840685624438432,
          "cos_median": 0.9737588732691221,
          "speed_ratio": 0.9794715989452218,
          "vec_mae": 0.10797719941232012,
          "gt_mean_speed": 0.24700061686648359,
          "voxels": 49374,
          "gtEnergy": 5157.1311349202415,
          "errorEnergy": 1759.283528474198
        }
      }
    },
    {
      "frame": 1079,
      "height": {
        "mae_m": 0.014108214649807709,
        "bias_m": 0.0032864811169918073,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.6027262080373947,
          "cos_median": 0.9678298475234882,
          "speed_ratio": 0.9553761722988976,
          "vec_mae": 0.11916712320498735,
          "gt_mean_speed": 0.255132073933923,
          "voxels": 206486,
          "gtEnergy": 23529.378942584884,
          "errorEnergy": 8547.72647300804
        },
        "coarse": {
          "rel_rmse": 0.572137276809021,
          "cos_median": 0.9721509149466477,
          "speed_ratio": 0.974927882346776,
          "vec_mae": 0.10687786547652665,
          "gt_mean_speed": 0.2459601630442152,
          "voxels": 49544,
          "gtEnergy": 5207.681979790371,
          "errorEnergy": 1704.688157709577
        }
      }
    },
    {
      "frame": 1080,
      "height": {
        "mae_m": 0.013736070431116283,
        "bias_m": 0.0024384742237183515,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5918617265194818,
          "cos_median": 0.9664456627103083,
          "speed_ratio": 0.953102881956593,
          "vec_mae": 0.11862149407749252,
          "gt_mean_speed": 0.25470147788918274,
          "voxels": 207293,
          "gtEnergy": 23864.76834105752,
          "errorEnergy": 8359.835588501091
        },
        "coarse": {
          "rel_rmse": 0.5609583863137055,
          "cos_median": 0.9708459761827545,
          "speed_ratio": 0.9717723167497255,
          "vec_mae": 0.1064209366792194,
          "gt_mean_speed": 0.24554874735267615,
          "voxels": 49733,
          "gtEnergy": 5288.119031379349,
          "errorEnergy": 1664.035213614282
        }
      }
    },
    {
      "frame": 1081,
      "height": {
        "mae_m": 0.013480887402792692,
        "bias_m": 0.0015484498931370753,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5795208816576105,
          "cos_median": 0.966262930083724,
          "speed_ratio": 0.9509846915561451,
          "vec_mae": 0.11753519745145227,
          "gt_mean_speed": 0.25519981924834584,
          "voxels": 208022,
          "gtEnergy": 24257.714902855478,
          "errorEnergy": 8146.818975046314
        },
        "coarse": {
          "rel_rmse": 0.5497334294533548,
          "cos_median": 0.9707222394732326,
          "speed_ratio": 0.9686771505076398,
          "vec_mae": 0.10573795743892787,
          "gt_mean_speed": 0.24635225102296573,
          "voxels": 49936,
          "gtEnergy": 5403.52538635683,
          "errorEnergy": 1632.982350559021
        }
      }
    },
    {
      "frame": 1082,
      "height": {
        "mae_m": 0.013039589973302616,
        "bias_m": 0.00021484564390692942,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5666091045553137,
          "cos_median": 0.9659372127530981,
          "speed_ratio": 0.9529256781068436,
          "vec_mae": 0.11747340282435505,
          "gt_mean_speed": 0.25701192631633923,
          "voxels": 208898,
          "gtEnergy": 24892.823743306,
          "errorEnergy": 7991.738438761341
        },
        "coarse": {
          "rel_rmse": 0.5364146622208653,
          "cos_median": 0.970335389422487,
          "speed_ratio": 0.9702820989489161,
          "vec_mae": 0.10551084329826735,
          "gt_mean_speed": 0.24780869186039106,
          "voxels": 50106,
          "gtEnergy": 5526.141460988427,
          "errorEnergy": 1590.0957561687676
        }
      }
    },
    {
      "frame": 1083,
      "height": {
        "mae_m": 0.01333182838634777,
        "bias_m": -0.0009967620054796937,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5532543633310993,
          "cos_median": 0.9652039047852292,
          "speed_ratio": 0.957328674147057,
          "vec_mae": 0.1175758855797104,
          "gt_mean_speed": 0.25934356551860666,
          "voxels": 209629,
          "gtEnergy": 25488.934275494976,
          "errorEnergy": 7801.917846959546
        },
        "coarse": {
          "rel_rmse": 0.523152905595128,
          "cos_median": 0.9696362980096631,
          "speed_ratio": 0.9751569390848397,
          "vec_mae": 0.10566740688509484,
          "gt_mean_speed": 0.2499431275624991,
          "voxels": 50264,
          "gtEnergy": 5653.218113020337,
          "errorEnergy": 1547.223400888501
        }
      }
    },
    {
      "frame": 1084,
      "height": {
        "mae_m": 0.013136748457536512,
        "bias_m": -0.002300350272063045,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5354739680942469,
          "cos_median": 0.9656154197241729,
          "speed_ratio": 0.9612931667494898,
          "vec_mae": 0.11733250484549466,
          "gt_mean_speed": 0.26333979298556764,
          "voxels": 210410,
          "gtEnergy": 26308.87161832176,
          "errorEnergy": 7543.605124475168
        },
        "coarse": {
          "rel_rmse": 0.5051643791683099,
          "cos_median": 0.9698654804113733,
          "speed_ratio": 0.9783532797098999,
          "vec_mae": 0.10542300560778707,
          "gt_mean_speed": 0.2538841520023176,
          "voxels": 50436,
          "gtEnergy": 5836.622180440187,
          "errorEnergy": 1489.45374256603
        }
      }
    },
    {
      "frame": 1085,
      "height": {
        "mae_m": 0.012782789996763133,
        "bias_m": -0.0031760563835966462,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5202896382592732,
          "cos_median": 0.9660234386886513,
          "speed_ratio": 0.9600435358876801,
          "vec_mae": 0.11761131383621322,
          "gt_mean_speed": 0.269056536718431,
          "voxels": 211098,
          "gtEnergy": 27371.3126900751,
          "errorEnergy": 7409.450138120561
        },
        "coarse": {
          "rel_rmse": 0.48971086544929443,
          "cos_median": 0.9701027190116174,
          "speed_ratio": 0.977218732790653,
          "vec_mae": 0.10582355720053602,
          "gt_mean_speed": 0.2597424586203717,
          "voxels": 50654,
          "gtEnergy": 6097.102805564061,
          "errorEnergy": 1462.1872679076519
        }
      }
    },
    {
      "frame": 1086,
      "height": {
        "mae_m": 0.012798950440779704,
        "bias_m": -0.003808902411369959,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5057209092986108,
          "cos_median": 0.9674753169614366,
          "speed_ratio": 0.9653106507751659,
          "vec_mae": 0.11751771114716257,
          "gt_mean_speed": 0.2738936297427659,
          "voxels": 211739,
          "gtEnergy": 28247.08704539575,
          "errorEnergy": 7224.295277638577
        },
        "coarse": {
          "rel_rmse": 0.47493434841819504,
          "cos_median": 0.9714323510217406,
          "speed_ratio": 0.9828639001283342,
          "vec_mae": 0.1058616450109399,
          "gt_mean_speed": 0.26478660406180626,
          "voxels": 50804,
          "gtEnergy": 6309.308683801328,
          "errorEnergy": 1423.1442936861886
        }
      }
    },
    {
      "frame": 1087,
      "height": {
        "mae_m": 0.012862323862885446,
        "bias_m": -0.00398098479127854,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19488
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.49523160330947685,
          "cos_median": 0.9691994589706322,
          "speed_ratio": 0.9639436192865478,
          "vec_mae": 0.117734970877637,
          "gt_mean_speed": 0.28018909046812646,
          "voxels": 212382,
          "gtEnergy": 29271.691004231874,
          "errorEnergy": 7179.0092847536
        },
        "coarse": {
          "rel_rmse": 0.46428256803596374,
          "cos_median": 0.9729504040160935,
          "speed_ratio": 0.981113581207937,
          "vec_mae": 0.10611287055520896,
          "gt_mean_speed": 0.2711394136420473,
          "voxels": 51000,
          "gtEnergy": 6553.495538976637,
          "errorEnergy": 1412.6603769823655
        }
      }
    },
    {
      "frame": 1088,
      "height": {
        "mae_m": 0.012275913517662046,
        "bias_m": -0.004060464612252993,
        "common": 19486,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.48532940266421415,
          "cos_median": 0.9705189293775902,
          "speed_ratio": 0.9645132713429726,
          "vec_mae": 0.1174834270910195,
          "gt_mean_speed": 0.28517171520939105,
          "voxels": 212840,
          "gtEnergy": 30009.22921758867,
          "errorEnergy": 7068.512765345805
        },
        "coarse": {
          "rel_rmse": 0.4542277234035717,
          "cos_median": 0.9740470788839426,
          "speed_ratio": 0.9812217011483452,
          "vec_mae": 0.10606567747758824,
          "gt_mean_speed": 0.2765596685031559,
          "voxels": 51114,
          "gtEnergy": 6754.568571754061,
          "errorEnergy": 1393.6216674108243
        }
      }
    },
    {
      "frame": 1089,
      "height": {
        "mae_m": 0.01210329840282017,
        "bias_m": -0.004019742285912156,
        "common": 19486,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.47837039051338276,
          "cos_median": 0.9714160576968318,
          "speed_ratio": 0.9631809889291368,
          "vec_mae": 0.11797466808549886,
          "gt_mean_speed": 0.2901869013346324,
          "voxels": 213494,
          "gtEnergy": 30788.67034864182,
          "errorEnergy": 7045.624842644516
        },
        "coarse": {
          "rel_rmse": 0.4478011166569803,
          "cos_median": 0.9748636547452576,
          "speed_ratio": 0.9801885599165364,
          "vec_mae": 0.10665528370784305,
          "gt_mean_speed": 0.2816905671281139,
          "voxels": 51280,
          "gtEnergy": 6936.396363894624,
          "errorEnergy": 1390.9267079925446
        }
      }
    },
    {
      "frame": 1090,
      "height": {
        "mae_m": 0.012457727951929516,
        "bias_m": -0.004214175374297015,
        "common": 19485,
        "gtWet": 19487,
        "predictionWet": 19486
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.47495692320644417,
          "cos_median": 0.9721713510886559,
          "speed_ratio": 0.9652060651273937,
          "vec_mae": 0.11847310352022315,
          "gt_mean_speed": 0.29348344079995303,
          "voxels": 214147,
          "gtEnergy": 31162.538440918026,
          "errorEnergy": 7029.772530434311
        },
        "coarse": {
          "rel_rmse": 0.4447527340692076,
          "cos_median": 0.9753802443833658,
          "speed_ratio": 0.981948196723318,
          "vec_mae": 0.10723094061964777,
          "gt_mean_speed": 0.28491368184343024,
          "voxels": 51420,
          "gtEnergy": 7012.8920077898865,
          "errorEnergy": 1387.1850647637302
        }
      }
    },
    {
      "frame": 1091,
      "height": {
        "mae_m": 0.012819380136839456,
        "bias_m": -0.00454918981340036,
        "common": 19485,
        "gtWet": 19487,
        "predictionWet": 19486
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.47417812568881684,
          "cos_median": 0.9722905909139062,
          "speed_ratio": 0.9611276112521023,
          "vec_mae": 0.11958429935115686,
          "gt_mean_speed": 0.2965649350531389,
          "voxels": 214575,
          "gtEnergy": 31342.413430918456,
          "errorEnergy": 7047.181653215504
        },
        "coarse": {
          "rel_rmse": 0.44372043854153403,
          "cos_median": 0.9752726783914389,
          "speed_ratio": 0.9777287404294711,
          "vec_mae": 0.10838949001712726,
          "gt_mean_speed": 0.28809937861735074,
          "voxels": 51509,
          "gtEnergy": 7057.557795859055,
          "errorEnergy": 1389.5472224433922
        }
      }
    },
    {
      "frame": 1092,
      "height": {
        "mae_m": 0.013243332909183147,
        "bias_m": -0.005419428146074332,
        "common": 19486,
        "gtWet": 19487,
        "predictionWet": 19489
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.4750765703845378,
          "cos_median": 0.9719213585051667,
          "speed_ratio": 0.9601619736781756,
          "vec_mae": 0.11992857314132813,
          "gt_mean_speed": 0.29794574398408646,
          "voxels": 215107,
          "gtEnergy": 31185.029490030312,
          "errorEnergy": 7038.39091874154
        },
        "coarse": {
          "rel_rmse": 0.4452176354286473,
          "cos_median": 0.9749321897042322,
          "speed_ratio": 0.9768929654905165,
          "vec_mae": 0.10905572404377514,
          "gt_mean_speed": 0.29012087211567744,
          "voxels": 51649,
          "gtEnergy": 7065.57608269419,
          "errorEnergy": 1400.529608952462
        }
      }
    },
    {
      "frame": 1093,
      "height": {
        "mae_m": 0.014564982793465908,
        "bias_m": -0.006638841714226404,
        "common": 19486,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.48167330680229353,
          "cos_median": 0.9709560943698626,
          "speed_ratio": 0.9589510954677816,
          "vec_mae": 0.12105933025991741,
          "gt_mean_speed": 0.2980351856263001,
          "voxels": 215617,
          "gtEnergy": 30677.663412255504,
          "errorEnergy": 7117.499363432359
        },
        "coarse": {
          "rel_rmse": 0.4524322087056949,
          "cos_median": 0.9740810867960683,
          "speed_ratio": 0.9756454751275236,
          "vec_mae": 0.11027514929018314,
          "gt_mean_speed": 0.290187419757563,
          "voxels": 51766,
          "gtEnergy": 6941.311116910196,
          "errorEnergy": 1420.8510090611114
        }
      }
    },
    {
      "frame": 1094,
      "height": {
        "mae_m": 0.016382601560379784,
        "bias_m": -0.008300476456484804,
        "common": 19486,
        "gtWet": 19487,
        "predictionWet": 19486
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.49063423358780317,
          "cos_median": 0.9696167247902685,
          "speed_ratio": 0.9568385474823644,
          "vec_mae": 0.12187428810076578,
          "gt_mean_speed": 0.2968955244704044,
          "voxels": 216280,
          "gtEnergy": 29906.345899772743,
          "errorEnergy": 7199.113937307115
        },
        "coarse": {
          "rel_rmse": 0.46184164045453296,
          "cos_median": 0.9728287055179018,
          "speed_ratio": 0.973719140034238,
          "vec_mae": 0.1112604038352037,
          "gt_mean_speed": 0.28924312043762934,
          "voxels": 51958,
          "gtEnergy": 6771.465044418542,
          "errorEnergy": 1444.337925412989
        }
      }
    },
    {
      "frame": 1095,
      "height": {
        "mae_m": 0.01735395057373026,
        "bias_m": -0.010068714470230491,
        "common": 19487,
        "gtWet": 19487,
        "predictionWet": 19487
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5019465257508461,
          "cos_median": 0.967443994575212,
          "speed_ratio": 0.9531864383450334,
          "vec_mae": 0.12316751783410396,
          "gt_mean_speed": 0.29467279818425546,
          "voxels": 216966,
          "gtEnergy": 28958.242828527105,
          "errorEnergy": 7296.038394192866
        },
        "coarse": {
          "rel_rmse": 0.4730813195314563,
          "cos_median": 0.9706342203125847,
          "speed_ratio": 0.9704466244666962,
          "vec_mae": 0.11257861270912449,
          "gt_mean_speed": 0.2869634332791664,
          "voxels": 52125,
          "gtEnergy": 6541.312526661577,
          "errorEnergy": 1463.9845654347018
        }
      }
    },
    {
      "frame": 1096,
      "height": {
        "mae_m": 0.018656794217103784,
        "bias_m": -0.011679646139587784,
        "common": 19486,
        "gtWet": 19487,
        "predictionWet": 19486
      },
      "velocity": {
        "fine": {
          "rel_rmse": 0.5125056968493376,
          "cos_median": 0.9650128582086479,
          "speed_ratio": 0.9473080942836108,
          "vec_mae": 0.12478217166645271,
          "gt_mean_speed": 0.29235497713309133,
          "voxels": 217252,
          "gtEnergy": 28093.967770260715,
          "errorEnergy": 7379.220271348527
        },
        "coarse": {
          "rel_rmse": 0.4840287003361969,
          "cos_median": 0.9686019191421206,
          "speed_ratio": 0.9642654785401105,
          "vec_mae": 0.11441180852269411,
          "gt_mean_speed": 0.28481023850542886,
          "voxels": 52207,
          "gtEnergy": 6345.187361830289,
          "errorEnergy": 1486.5744973816863
        }
      }
    }
  ],
  "caseBinding": {
    "caseId": "best-1027",
    "comparisonId": "best-1027",
    "gtId": "public-ground-truth",
    "predictionId": "best-1027-reconstruction",
    "geometryFrames": [
      1001,
      1049,
      1096
    ],
    "lattice": {
      "axisSteps": [
        [
          0.049999999148505836,
          0,
          0
        ],
        [
          0,
          0.049999999148505836,
          0
        ],
        [
          0,
          0,
          0.049999999148505836
        ]
      ],
      "dimensions": [
        224,
        64,
        128
      ],
      "origin": [
        -9.649999714323453,
        -1.5000000204890966,
        -2.550000047311187
      ],
      "voxelSize": [
        0.049999999148505836,
        0.049999999148505836,
        0.049999999148505836
      ]
    }
  },
  "spatialProtocolResources": "unavailable; preview uses legacy protocol",
  "implementationBase": "53fb20db2f5350adcf3f9dc3bc3fa9b294521ca6"
}
`,wd=`{
  "schemaVersion": 1,
  "runId": "raw-reference-96-e81b8955734e",
  "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
  "manifestA": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
  "manifestB": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
  "entries": [
    {
      "id": "model",
      "label": "Model",
      "labelZh": "模型",
      "value": "Model A",
      "status": "claimed",
      "source": {
        "file": "METRICS.md",
        "sha256": "2c3ca4b76cf0230262ba5aad6ceb1b0488553b914eaf50435402b33088e596b2"
      },
      "note": "Source description; checkpoint hash not supplied."
    },
    {
      "id": "checkpoint",
      "label": "Checkpoint identity",
      "labelZh": "Checkpoint身份",
      "value": null,
      "status": "unknown",
      "source": null,
      "note": "No original checkpoint file/hash supplied; not inferred from Best_1027 name."
    },
    {
      "id": "scene",
      "label": "Scene",
      "labelZh": "场景",
      "value": "v2 Gentle clean full-SDF velocity",
      "status": "claimed",
      "source": {
        "file": "METRICS.md",
        "sha256": "2c3ca4b76cf0230262ba5aad6ceb1b0488553b914eaf50435402b33088e596b2"
      },
      "note": ""
    },
    {
      "id": "cameraNames",
      "label": "Camera configuration",
      "labelZh": "相机配置",
      "value": [
        "camera29",
        "camera32",
        "camera35",
        "camera02",
        "camera05",
        "camera08",
        "camera11",
        "camera14",
        "camera17",
        "camera20",
        "camera23",
        "camera26"
      ],
      "status": "claimed",
      "source": {
        "file": "SPLIT.md",
        "sha256": "2c3ca4b76cf0230262ba5aad6ceb1b0488553b914eaf50435402b33088e596b2"
      },
      "note": "12 ring cameras; calibration files not independently checked."
    },
    {
      "id": "frameRate",
      "label": "Source frame rate",
      "labelZh": "源帧率",
      "value": "24 fps; 1001–1096",
      "status": "claimed",
      "source": {
        "file": "SPLIT.md",
        "sha256": "2c3ca4b76cf0230262ba5aad6ceb1b0488553b914eaf50435402b33088e596b2"
      },
      "note": "Display playback speed is not simulation time."
    },
    {
      "id": "testSplit",
      "label": "Train / validation / test",
      "labelZh": "训练／验证／测试",
      "value": "v2 all96 test; never used for training/checkpoint choice",
      "status": "claimed",
      "source": {
        "file": "SPLIT.md",
        "sha256": "2c3ca4b76cf0230262ba5aad6ceb1b0488553b914eaf50435402b33088e596b2"
      },
      "note": "Source claim, not independent training-history audit. Fixed six is a velocity evaluation subset, not a split."
    },
    {
      "id": "trainingScenes",
      "label": "OceanBox training scenes",
      "labelZh": "OceanBox训练场景",
      "value": [
        "variant_00000",
        "variant_00001",
        "variant_00002",
        "variant_00003",
        "variant_00004",
        "variant_00008"
      ],
      "status": "claimed",
      "source": {
        "file": "SPLIT.md",
        "sha256": "2c3ca4b76cf0230262ba5aad6ceb1b0488553b914eaf50435402b33088e596b2"
      },
      "note": "Validation: variant_00006/00007; test: variant_00005/00009. These scene IDs do not re-label v2 frame IDs."
    },
    {
      "id": "preprocessing",
      "label": "Preprocessing",
      "labelZh": "预处理",
      "value": "Temporal smoothing",
      "status": "claimed",
      "source": {
        "file": "METRICS.md",
        "sha256": "2c3ca4b76cf0230262ba5aad6ceb1b0488553b914eaf50435402b33088e596b2"
      },
      "note": "Smoothing parameters and raw calibration were not supplied."
    },
    {
      "id": "units",
      "label": "Unit evidence",
      "labelZh": "单位证据",
      "value": "source convention; not independently calibrated",
      "status": "claimed",
      "source": {
        "file": "METRICS.md",
        "sha256": "2c3ca4b76cf0230262ba5aad6ceb1b0488553b914eaf50435402b33088e596b2"
      },
      "note": "Source convention; no independent physical calibration."
    },
    {
      "id": "gtIdentity",
      "label": "GT original-file manifest",
      "labelZh": "GT原始文件清单",
      "value": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
      "status": "verified",
      "source": null,
      "note": "192 original GT/prediction files rehashed in the archived desktop raw reference; role follows declared source."
    },
    {
      "id": "predictionIdentity",
      "label": "Prediction original-file manifest",
      "labelZh": "预测原始文件清单",
      "value": "323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",
      "status": "verified",
      "source": null,
      "note": "Matched archived original-file manifest; derived-cache hashes are separate."
    }
  ],
  "conditions": {
    "scene": "v2-gentle",
    "gtRole": "gt",
    "predictionRole": "prediction",
    "gtManifest": "e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",
    "protocolSha256": "4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",
    "frameIds": [
      1001,
      1002,
      1003,
      1004,
      1005,
      1006,
      1007,
      1008,
      1009,
      1010,
      1011,
      1012,
      1013,
      1014,
      1015,
      1016,
      1017,
      1018,
      1019,
      1020,
      1021,
      1022,
      1023,
      1024,
      1025,
      1026,
      1027,
      1028,
      1029,
      1030,
      1031,
      1032,
      1033,
      1034,
      1035,
      1036,
      1037,
      1038,
      1039,
      1040,
      1041,
      1042,
      1043,
      1044,
      1045,
      1046,
      1047,
      1048,
      1049,
      1050,
      1051,
      1052,
      1053,
      1054,
      1055,
      1056,
      1057,
      1058,
      1059,
      1060,
      1061,
      1062,
      1063,
      1064,
      1065,
      1066,
      1067,
      1068,
      1069,
      1070,
      1071,
      1072,
      1073,
      1074,
      1075,
      1076,
      1077,
      1078,
      1079,
      1080,
      1081,
      1082,
      1083,
      1084,
      1085,
      1086,
      1087,
      1088,
      1089,
      1090,
      1091,
      1092,
      1093,
      1094,
      1095,
      1096
    ],
    "domain": "collaborator-vdb-20261103-v1",
    "unitStatus": "source convention; not independently calibrated",
    "camera": {
      "status": "claimed",
      "value": [
        "camera29",
        "camera32",
        "camera35",
        "camera02",
        "camera05",
        "camera08",
        "camera11",
        "camera14",
        "camera17",
        "camera20",
        "camera23",
        "camera26"
      ]
    }
  },
  "publication": {
    "schema": "oceanscope.public-source-summary.v1",
    "originalDeclarationSha256": "1d6bf2602f814aaf224c6bf570a8872405d7274bf4c6a9f063bab44d60aeaeec",
    "note": "Source documents are represented by a reviewed public summary; source claims remain unaudited."
  }
}
`,Sd=`# OceanScope public source summary

This release presents supplied scene and model descriptions as claims, not independently audited training history. Original machine paths and source prose are omitted. Numerical results, masks and protocol identities are retained.

- Model: "Model A"
- Scene: "v2 Gentle clean full-SDF velocity"
- Camera configuration: ["camera29","camera32","camera35","camera02","camera05","camera08","camera11","camera14","camera17","camera20","camera23","camera26"]
- Source frame rate: "24 fps; 1001–1096"
- Train / validation / test: "v2 all96 test; never used for training/checkpoint choice"
- OceanBox training scenes: ["variant_00000","variant_00001","variant_00002","variant_00003","variant_00004","variant_00008"]
- Preprocessing: "Temporal smoothing"
- Unit evidence: "source convention; not independently calibrated"
`,jd=`# OceanScope public source summary

This release presents supplied scene and model descriptions as claims, not independently audited training history. Original machine paths and source prose are omitted. Numerical results, masks and protocol identities are retained.

- Model: "Model A"
- Scene: "v2 Gentle clean full-SDF velocity"
- Camera configuration: ["camera29","camera32","camera35","camera02","camera05","camera08","camera11","camera14","camera17","camera20","camera23","camera26"]
- Source frame rate: "24 fps; 1001–1096"
- Train / validation / test: "v2 all96 test; never used for training/checkpoint choice"
- OceanBox training scenes: ["variant_00000","variant_00001","variant_00002","variant_00003","variant_00004","variant_00008"]
- Preprocessing: "Temporal smoothing"
- Unit evidence: "source convention; not independently calibrated"
`;function Cd(n,a){const t=[];(n?.gtRole!=="gt"||a?.gtRole!=="gt"||n?.predictionRole!=="prediction"||a?.predictionRole!=="prediction")&&t.push("Explicit GT/prediction roles required");for(const c of["scene","gtManifest","protocolSha256","frameIds","domain","unitStatus"])(n?.[c]==null||a?.[c]==null||Zn(n[c])!==Zn(a[c]))&&t.push(`Different or unknown ${c}`);const s=["camera","model","preprocessing"].filter(c=>Zn(n?.[c])!==Zn(a?.[c]));return{comparable:t.length===0,blockedReasons:t,differences:s}}async function Bd(n,a,t){const s=JSON.parse(n);if(s.schemaVersion!==1||s.runId!==a.runId||s.protocolSha256!==a.protocol.sourceScriptSha256||s.manifestA!==a.datasetA.manifestSha256||s.manifestB!==a.datasetB.manifestSha256)throw Error("Declaration identity mismatch");if(!Array.isArray(s.entries)||new Set(s.entries.map(i=>i.id)).size!==s.entries.length)throw Error("Invalid declarations");const c={gtIdentity:s.manifestA,predictionIdentity:s.manifestB};for(const i of s.entries){if(!["claimed","verified","unknown"].includes(i.status)||!i.id||!i.label)throw Error("Invalid declaration status");if(i.status==="unknown"&&i.value!==null)throw Error("Unknown declaration must have no asserted value");if(i.status==="verified"&&(!Object.hasOwn(c,i.id)||i.value!==c[i.id]))throw Error("Unsupported independent verification claim");if(i.status==="claimed"&&!i.source)throw Error("Claim needs its source");if(i.source&&(typeof t[i.source.file]!="string"||await Ys(t[i.source.file])!==i.source.sha256))throw Error("Declaration source checksum mismatch")}if(s.conditions?.gtManifest!==s.manifestA||s.conditions.protocolSha256!==s.protocolSha256||Zn(s.conditions.frameIds)!==Zn(a.frameIds)||!Cd(s.conditions,s.conditions).comparable)throw Error("Declaration conditions mismatch");return{...s,sha256:await Ys(n)}}async function Ad(n){if(n.id!=="best-1027")return null;const a=await Yi(_d,ba,n);return{...a,verifiedPayloadSha256:ba.sha256,declarations:await Bd(wd,a,{"METRICS.md":Sd,"SPLIT.md":jd})}}function kd({analysisSection:n,onAnalysisSection:a,item:t,active:s,viewApiRef:c,initialView:i,startWithVelocity:o,onViewReady:r,onViewRestored:f,restoring:l,onCancelImport:m}){const{language:y}=ue(),x=y==="zh",[p,h]=v.useState(()=>i?.settings.group||((o||t.comparison.settings?.previewOnly)&&t.comparison.availableGroups.includes("velocity")?"velocity":"sdf")),[d,u]=v.useState(null),[S,j]=v.useState(""),_=v.useRef(vc()),[E,w]=v.useState(0);v.useEffect(()=>(u(null),j(""),_.current.run(()=>Ad(t)).then(M=>{M&&u(M)}).catch(M=>j(M.message)),()=>_.current.cancel()),[t,E]);const g=!!t.comparison.settings?.previewOnly,C=!!t.metrics?.reconstructionEvaluation,B=e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:22:14",className:"public-field-provenance"},e.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:22:55"},t.description),e.createElement("dl",{"data-os-loc":"src/FieldSamples.jsx:22:80"},e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:23:3"},e.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:23:8"},"Ground Truth"),e.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:23:29"},t.comparison.labels?.gt?.displayName)),e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:24:3"},e.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:24:8"},"Prediction"),e.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:24:27"},g?x?"未提供；不计算误差":"Not included; no error scores":t.comparison.labels?.prediction?.displayName)),e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:25:3"},e.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:25:8"},x?"三维表面 / 体积场":"3D surface / volume frames"),e.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:25:63"},pa(t).length?`1001–1096 / ${t.processing.frames.map(M=>M.frame).join(", ")}`:t.processing.frames.map(M=>M.frame).join(", "))),e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:26:3"},e.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:26:8"},x?"数据语义":"Data semantics"),e.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:26:45"},C?x?"原分辨率有效 SDF/速度对比；三帧高度与水下速度评估，采用明确的本地计算规则。":"Native valid SDF/velocity comparison; three-frame height and underwater evaluation under an explicit local protocol.":g?x?"单位未声明":"Units undeclared":x?"条件性 GT 水体距离误差；外部填充值不参与距离评分":"Conditional GT-water distance scores; filled exterior excluded from distance scoring"))));return e.createElement(gd,{focusedLayout:!0,workspace:n,onWorkspace:a,unifiedRestore:!0,onCancelImport:m,onRetryEvaluation:()=>w(M=>M+1),evaluation:d,evaluationError:S,comparison:t.comparison,processing:t.processing,activeGroup:p,onActiveGroup:h,setup:B,expectedFrames:Object.keys(t.metrics?.frames||{}).map(Number),metricsOverride:t.metrics||null,sourceCase:t,viewApiRef:c,initialView:i,onViewReady:r,onViewRestored:f,restoring:l,readOnly:!0,active:s})}function Xd({request:n,active:a=!0,analysisSection:t="3d",onAnalysisSection:s}){const{tr:c,language:i}=ue(),o=i==="zh",r=v.useRef(null),f=v.useRef(0),l=v.useRef(null),m=v.useRef(null),[y]=v.useState(()=>new URLSearchParams(location.search).get("field")==="velocity"&&["","#analysis-spatial"].includes(location.hash));v.useEffect(()=>()=>m.current?.reject(new DOMException("Cancelled","AbortError")),[]),v.useEffect(()=>{(!a||t!=="report")&&l.current?.cancel()},[a,t]);const[x,p]=v.useState(0),[h,d]=v.useState(null),[u,S]=v.useState(!1),[j,_]=v.useState(!1),[E,w]=v.useState(null),[g,C]=v.useState(null),[B,M]=v.useState(""),[b,k]=v.useState(""),[R,N]=v.useState(""),[F,T]=v.useState(0),[I,$]=v.useState(!1);v.useEffect(()=>{let G=!0;return Li().then(P=>{if(!G)return;o0(P.cases),C(P);const z=y?"best-1027":Ft("public-case")?.id,L=P.cases.some(q=>q.id===z)?z:P.defaultCaseId||P.cases[0].id;M(L),k(L),N("")}).catch(P=>{G&&N(P.message)}),()=>{G=!1}},[F,y]),v.useEffect(()=>{n?.id&&g?.cases.some(G=>G.id===n.id)&&Z(n.id)},[n,g]),v.useEffect(()=>{B&&Bc("public-case",{id:B})},[B]);function Z(G){l.current?.cancel(),p(++f.current),r.current?.pause(),d(null),_(!1),S(!1),w(null),M(G),k(G),$(!1)}function K(G){try{const P=un(G,g.cases);r.current?.pause();const z=++f.current;p(z),S(!1),_(!0),w(null),$(!1),M(P.settings.caseId),k(P.settings.caseId),d({doc:P,token:z})}catch(P){w({error:P})}}async function O(G,P,z){if(z.throwIfAborted(),P.kind!=="field"){if(!r.current?.restoreAnalysis)throw Error("Analysis is not ready");return r.current.restoreAnalysis(G,P.kind,z)}const L=un(P.value,g.cases);return new Promise((q,ge)=>{const re=()=>{m.current?.signal===z&&(m.current=null,++f.current,d(null),_(!1),ge(new DOMException("Cancelled","AbortError")))};z.addEventListener("abort",re,{once:!0});const le=se=>{z.removeEventListener("abort",re),se?ge(se):q()};m.current={signal:z,finish:le,reject:ge},K(L)})}function J(G,P){if(G!==f.current)return;const z=m.current;m.current=null,z?.finish(P),_(!1),w(P?{error:P}:{cn:"场方案已恢复：样例、帧、切面、探针、视角与显示设置已同步，播放已暂停。",en:"Field view restored: sample, frame, section, probe, camera and display settings are synchronized. Playback paused."})}const V=g?.cases.find(G=>G.id===B),be=g?.cases.find(G=>G.id===b);return V?.comparison.settings?.previewOnly,e.createElement("section",{"data-os-loc":"src/FieldSamples.jsx:63:9",className:"public-field-demo","aria-label":"Published field examples"},e.createElement("header",{"data-os-loc":"src/FieldSamples.jsx:64:3",className:"demo-case-header"},e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:64:40"},e.createElement("h1",{"data-os-loc":"src/FieldSamples.jsx:64:45"},V?.name||(o?"场分析":"Field analysis")),e.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:64:95"},V&&(o?`${pa(V).length||V.processing.frames.length}帧三维 · ${V.processing.frames.length}帧体积场`:`${pa(V).length||V.processing.frames.length} 3D frames · ${V.processing.frames.length} volume frames`))),e.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:64:357","data-os-action":"",disabled:j,"aria-expanded":I,onClick:()=>{k(B),$(G=>!G)}},o?"数据与示例":"Datasets & examples")),R?e.createElement(sn,{error:R,zh:o,resource:o?"示例目录":"Sample catalogue",onRetry:()=>T(G=>G+1)}):g?e.createElement(e.Fragment,null,I&&e.createElement("section",{"data-os-loc":"src/FieldSamples.jsx:67:14",className:"sample-setup","aria-label":"Sample dataset selection"},e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:67:86",className:"sample-setup-heading"},e.createElement("h2",{"data-os-loc":"src/FieldSamples.jsx:67:124"},o?"数据与对比设置":"Datasets & comparison setup"),e.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:67:177"},o?"选择已发布的数据组合，打开已有分析结果。":"Choose a published dataset pair to open its existing analysis.")),e.createElement("label",{"data-os-loc":"src/FieldSamples.jsx:68:5"},o?"示例组合":"Published example",e.createElement("select",{"data-os-loc":"src/FieldSamples.jsx:68:43","data-os-action":"","aria-label":"Published field example",value:b,onChange:G=>k(G.target.value)},g.cases.map(G=>e.createElement("option",{"data-os-loc":"src/FieldSamples.jsx:68:168",key:G.id,value:G.id},G.name)))),be&&e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:69:13",className:"sample-dataset-grid"},e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:69:50",className:"sample-source"},e.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:69:81",className:"source-role"},"GROUND TRUTH"),e.createElement("h3",{"data-os-loc":"src/FieldSamples.jsx:69:130"},be.comparison.labels?.gt?.displayName),e.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:69:181"},be.comparison.availableGroups.join(" + ").toUpperCase()),e.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:69:248"},o?"可用":"Ready")),e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:69:284",className:"sample-source"},e.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:69:315",className:"source-role prediction"},"PREDICTION"),e.createElement("h3",{"data-os-loc":"src/FieldSamples.jsx:69:373"},be.comparison.settings?.previewOnly?o?"无预测数据":"No prediction included":be.comparison.labels?.prediction?.displayName),e.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:69:509"},be.comparison.settings?.previewOnly?o?"独立查看，不显示误差指标":"Standalone inspection without error metrics":o?"已对齐的场数据 · 已记录的计算规则":"Aligned fields · Recorded evaluation protocol"))),e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:70:5",className:"sample-actions"},e.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:70:37"},o?"这里选择已发布案例。要分析自己的 GT 和预测 VDB，请进入":"Choose a published case here. To compare your own GT and prediction VDBs, open"," ",e.createElement("a",{"data-os-loc":"src/FieldSamples.jsx:70:163","data-os-action":"",href:"#workspace-experiments",onClick:()=>$(!1)},o?"我的实验":"My experiments")),e.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:70:267","data-os-action":"",onClick:()=>$(!1)},o?"取消":"Cancel"),e.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:70:334","data-os-action":"",className:"primary",onClick:()=>{Z(b)}},be?.comparison.settings?.previewOnly?o?"查看 Ground Truth":"View Ground Truth":o?"打开已有对比":"Open saved comparison"))),V&&e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:72:13",className:"demo-session-tools",hidden:t!=="report"},e.createElement(Ed,{controlRef:l,zh:o,onRestore:O}),e.createElement(xd,{unifiedRestore:!0,catalog:g.cases,ready:u,restoring:j,onCapture:()=>r.current.captureView(),onRestore:K,restoreNotice:E})),e.createElement(kd,{startWithVelocity:y&&x===0&&V.id==="best-1027",analysisSection:t,onAnalysisSection:s,onCancelImport:()=>l.current?.cancel(),key:`${V.id}:${x}`,item:V,active:a,viewApiRef:r,initialView:h?.doc,onViewReady:S,restoring:j,onViewRestored:G=>J(h?.token,G)}))):e.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:66:130",role:"status"},o?"正在加载示例…":"Loading samples…"))}export{Xd as default};
