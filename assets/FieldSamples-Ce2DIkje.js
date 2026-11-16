import{v as Wt,p as Tt,S as Qn,s as ta,a as tc,c as pi,b as ui}from"./surfaceResources-CGZ_Xip1.js";import{r as E,R as e,u as me,c as sc,s as hi,d as cc,p as ic,e as ea,f as Nn,v as $a,g as Xa,l as sa,h as Za,i as gn,j as na,k as Bs,m as As,n as gi,C as oc,o as yi,q as xi,t as rc,x as vi,y as Ei,z as lc,A as dc,B as Ba,D as ks,E as Ms,F as Rs,G as Ps,H as _i,I as wi,J as Si,K as ji,L as Ci,a as Bi,b as St,w as fc,M as Is,N as Pn,O as Ai}from"./workbench-CD4TTXxv.js";import{d as ut,l as ki}from"./publicData-Dh1-tQFp.js";import{F as mc,m as Mi,p as Ri,f as Pi,t as Ii,S as bc,d as pc,a as Ni,s as Fi,c as Oi,b as Aa,e as Di,g as Wi,h as Ti}from"./public-field-demo-CpU-a4Ae.js";import{b as ht}from"./LocalDiagnostics-Ci8G-9HI.js";import{H as Vi,f as zi,a as $i,D as Xi,S as Zi}from"./SectionRotation-CF5X22dC.js";import{c as Ns}from"./comparisonExport-DqHfk1ta.js";import{o as uc,s as Gi,a as jt,d as Hi,D as yn,b as qi}from"./displayGeometry-iT8ZjaQt.js";import{e as Li}from"./verticalSection-DptfHDZh.js";import{Q as Yi,U as Ui,X as Ji,Y as Ki,Z as Qi,_ as hc,$ as eo}from"./waveBookmarks-CocfWvZ8.js";const no="539734f929b2d3d4a53adb2563bc9598e1cc8efcd33439f8a39db052bafb28bd",ao="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",to="gentle",so="best1027",co="e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",io="323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",aa={sha256:no,protocolSha256:ao,datasetA:to,datasetB:so,manifestA:co,manifestB:io},oo="oceanscope.velocity-alignment.v1",ro=1001,lo="best-1027",fo="partial",mo=!0,bo={gt:{frame:1001,file:"clean_fullsdf_vel.1001.vdb",bytes:10508067,sha256:"8cd757ed7cecfe8f677a6e8994e053bcbb178e93a8c0b257a82c89b14de954be",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1001,file:"recon_fullsdf_vel.1001.vdb",bytes:10562288,sha256:"fd0ab7ff40ed007eb3543c6326ba10f7f98dbda59e094a0dbfbb2066b4212f26",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},po={frame:1001,url:"/data/velocity-raw/1001.ocfld.gz",packedBytes:15074066,packedSha256:"c1284e150f6c95880ae942c08fb3a54209096127c13ed9d14e4d48a8cac6a54b",decodedBytes:62391416,decodedSha256:"723f73f42097cede6faf03a7cd106af8d7aef55eabcdc4207b469fb9a1a4a197",roundtrip:"exact"},uo={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},ho={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},go={gt:0,prediction:2856765473069345e-22},yo=2856765473069345e-22,xo=["x","y","z"],vo="ZYX",Eo={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},_o="m/s",wo="Existing source convention only; no independent physical or time calibration.",So="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",jo={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},Co={resource:{frame:1001,url:"/data/fields/best-1027/1001.ocfld.gz",packedBytes:26128772,packedSha256:"3a504d78eefed6ef1a3e5fef3523f62eb7f0a13ae68e67e8cb23907f4b6f6f46",decodedBytes:99523224,decodedSha256:"8760d8da4ce6ac716b433ede5c787ba13baff142a4324fb03e13824f90e978f8"},comparison:{gt:{error:"vel.x values differ at 1363784 samples; max 2.8210940528072825e-16"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: vel.x values differ at 1363784 samples; max 2.8210940528072825e-16"],retainedUnchanged:!0},Bo="exact",Ao={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:179815,sha256:"6264bad6598a054b1ac18538a73305aa383761e97e67b4e8120f74a6f73fab06"},common:{count:177960,sha256:"33db691f210a15dd5e533103720e9708b363e05c66e4cc266f14413335d8371f"},computable:{count:177960,sha256:"33db691f210a15dd5e533103720e9708b363e05c66e4cc266f14413335d8371f"}},ko=0,Mo=[],Ro="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",Po={schema:oo,frame:ro,caseId:lo,status:fo,dataAndDomainVerified:mo,source:bo,resource:po,lattice:uo,originalLattices:ho,cacheLatticeMaxDisplacement:go,pairMaxDisplacement:yo,componentOrder:xo,arrayOrder:vo,vectorBasis:Eo,unitClaim:_o,unitEvidence:wo,protocolSha256:So,domainDefinition:jo,legacyCache:Co,diagnosticRoundtrip:Bo,domain:Ao,nonfiniteExcluded:ko,failures:Mo,scope:Ro},Io="oceanscope.velocity-alignment.v1",No=1049,Fo="best-1027",Oo="partial",Do=!0,Wo={gt:{frame:1049,file:"clean_fullsdf_vel.1049.vdb",bytes:11105671,sha256:"a821ec84b9f2eecc09f234cdf05050e77e3572d6f9c3d46bce94d0a28f328df9",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1049,file:"recon_fullsdf_vel.1049.vdb",bytes:10571839,sha256:"ff18d054439135a9c39abc139aa628ca7dcb753dd46b389b86bde47747f5d4c3",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},To={frame:1049,url:"/data/velocity-raw/1049.ocfld.gz",packedBytes:15261605,packedSha256:"913c1ddbec87d484f71905720334c90ca6ebccdad5c48a543f69eb405308e707",decodedBytes:62391416,decodedSha256:"403ff5ea6e2afcd3129761caa6a5adf7f2699e180d1733e85774ea1a55df4ef1",roundtrip:"exact"},Vo={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},zo={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},$o={gt:0,prediction:2856765473069345e-22},Xo=2856765473069345e-22,Zo=["x","y","z"],Go="ZYX",Ho={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},qo="m/s",Lo="Existing source convention only; no independent physical or time calibration.",Yo="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",Uo={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},Jo={resource:{frame:1049,url:"/data/fields/best-1027/1049.ocfld.gz",packedBytes:26633403,packedSha256:"1443fd356c49996f7b7bac3ab8d8ee9fc4b40d9a6d4a0734b2a0e6e2592c2548",decodedBytes:99523224,decodedSha256:"ad0deb564ccd2db1fc91e4db9f711acaa8f6c231e3acca426773f8bb0cbf851a"},comparison:{gt:{error:"sdf values differ at 2 samples; max 0.0"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: sdf values differ at 2 samples; max 0.0"],retainedUnchanged:!0},Ko="exact",Qo={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:189062,sha256:"adaf091d8684752b63cdf670a7f10b150720ed4342c7042ee4ee70311055d839"},common:{count:184957,sha256:"6367149b8f2ca91ca5e7dd4c5eeb75c22cf814b39535732dd9fb2f2a698599de"},computable:{count:184957,sha256:"6367149b8f2ca91ca5e7dd4c5eeb75c22cf814b39535732dd9fb2f2a698599de"}},er=0,nr=[],ar="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",tr={schema:Io,frame:No,caseId:Fo,status:Oo,dataAndDomainVerified:Do,source:Wo,resource:To,lattice:Vo,originalLattices:zo,cacheLatticeMaxDisplacement:$o,pairMaxDisplacement:Xo,componentOrder:Zo,arrayOrder:Go,vectorBasis:Ho,unitClaim:qo,unitEvidence:Lo,protocolSha256:Yo,domainDefinition:Uo,legacyCache:Jo,diagnosticRoundtrip:Ko,domain:Qo,nonfiniteExcluded:er,failures:nr,scope:ar},sr="oceanscope.velocity-alignment.v1",cr=1096,ir="best-1027",or="partial",rr=!0,lr={gt:{frame:1096,file:"clean_fullsdf_vel.1096.vdb",bytes:11272288,sha256:"7153212dbf15d5970fab77d2c187a858fa5735447abfcd8dfc717fa1844d4e94",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1096,file:"recon_fullsdf_vel.1096.vdb",bytes:10500539,sha256:"16187d0cad3236b3ebef4900650d0b3cd98294ef9ab248088797a73365200db2",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},dr={frame:1096,url:"/data/velocity-raw/1096.ocfld.gz",packedBytes:15329856,packedSha256:"a0731f4996fadbe7d2e7c9b5562250ead6a8cc817a2f7b1f44d393c45d86dd7d",decodedBytes:62391416,decodedSha256:"bfe8078ba7a9436b73b8906e210a8e7d8f0b312fc772c4ee0e68f9e282fedb9c",roundtrip:"exact"},fr={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},mr={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},br={gt:0,prediction:2856765473069345e-22},pr=2856765473069345e-22,ur=["x","y","z"],hr="ZYX",gr={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},yr="m/s",xr="Existing source convention only; no independent physical or time calibration.",vr="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",Er={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},_r={resource:{frame:1096,url:"/data/fields/best-1027/1096.ocfld.gz",packedBytes:26932173,packedSha256:"5900168e2e47a98c85f505558e49c754619e3824ea1404299d783fd7451dd0ee",decodedBytes:99523224,decodedSha256:"1cdb1261a33ed72f515bd59a75668467cbb8d7f78da7af6b360653cf6cbcb2f9"},comparison:{gt:{error:"sdf values differ at 1 samples; max 0.0"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: sdf values differ at 1 samples; max 0.0"],retainedUnchanged:!0},wr="exact",Sr={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:223882,sha256:"3d3747b91823a8c0b8e2d7487c955abe70b257b49b9079a660ddb1112f7c5cf9"},common:{count:217252,sha256:"f4cca5ed859acd6e09a9ab9318b117c094d2647572e72b961768938e558395a8"},computable:{count:217252,sha256:"f4cca5ed859acd6e09a9ab9318b117c094d2647572e72b961768938e558395a8"}},jr=0,Cr=[],Br="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",Ar={schema:sr,frame:cr,caseId:ir,status:or,dataAndDomainVerified:rr,source:lr,resource:dr,lattice:fr,originalLattices:mr,cacheLatticeMaxDisplacement:br,pairMaxDisplacement:pr,componentOrder:ur,arrayOrder:hr,vectorBasis:gr,unitClaim:yr,unitEvidence:xr,protocolSha256:vr,domainDefinition:Er,legacyCache:_r,diagnosticRoundtrip:wr,domain:Sr,nonfiniteExcluded:jr,failures:Cr,scope:Br},kr=new Map([[1001,Po],[1049,tr],[1096,Ar]]);function xn(n){const a=kr.get(n);return!a||a.frame!==n||a.caseId!=="best-1027"||!a.dataAndDomainVerified||a.diagnosticRoundtrip!=="exact"||a.resource.frame!==n||a.resource.url!==`/data/velocity-raw/${n}.ocfld.gz`||a.protocolSha256!==aa.protocolSha256||a.source.gt.manifestSha256!==aa.manifestA||a.source.prediction.manifestSha256!==aa.manifestB?null:a}const Mr=[1001,1049,1096];async function gc(n,a){const s=await new Promise((t,c)=>{const i=indexedDB.open("oceanscope-native-velocity",1);i.onupgradeneeded=()=>i.result.createObjectStore("files"),i.onsuccess=()=>t(i.result),i.onerror=()=>c(i.error)});try{return await new Promise((t,c)=>{const i=s.transaction("files",n),o=a(i.objectStore("files"));i.oncomplete=()=>t(o.result),i.onabort=()=>c(i.error),i.onerror=()=>c(i.error)})}finally{s.close()}}function Rr(n){return gc("readonly",a=>a.get(n.packedSha256))}async function Pr(n){const a=Mr.map(xn).find(s=>s.resource.packedBytes===n.size);if(!a)throw Error("Unsupported native velocity file size");return await Wt(await n.arrayBuffer(),a.resource),await gc("readwrite",s=>s.put(n,a.resource.packedSha256)),a.frame}function Ir({zh:n}){const[a,s]=E.useState(!1),[t,c]=E.useState("");async function i(o){const r=Array.from(o.target.files);if(o.target.value="",!r.length)return;s(!0);const f=[],l=[];for(const m of r)try{f.push(await Pr(m))}catch{l.push(m.name)}c([f.length&&(n?"本浏览器已保存核验帧 ":"Verified frames saved in this browser: ")+f.join(", "),l.length&&(n?"未能核验或保存，请核对文件和浏览器存储权限。":"Check the file and browser storage permission: ")+l.join(", ")].filter(Boolean).join(" · ")),s(!1),f.length&&window.dispatchEvent(new CustomEvent("oceanscope-velocity-files",{detail:f}))}return e.createElement("section",{"data-os-loc":"src/field/VelocityFiles.jsx:24:10",className:"reference-scope","aria-label":"Native velocity resources","aria-busy":a},e.createElement("label",{"data-os-loc":"src/field/VelocityFiles.jsx:25:5"},n?"在本机选择原生速度文件":"Choose native velocity files on this device"," ",e.createElement("input",{"data-os-loc":"src/field/VelocityFiles.jsx:26:7","data-os-action":"",type:"file",multiple:!0,accept:".gz","aria-label":"Verified velocity files",disabled:a,onChange:i})),e.createElement("small",{"data-os-loc":"src/field/VelocityFiles.jsx:28:5"},n?"1001、1049、1096 的 .ocfld.gz 文件只在此浏览器内校验、保存及计算。":"Select the .ocfld.gz for 1001, 1049 or 1096. Verification, storage and calculations run in this browser."),e.createElement("p",{"data-os-loc":"src/field/VelocityFiles.jsx:29:5",role:"status"},a?n?"正在校验原生速度文件…":"Verifying native velocity files…":t))}function Nr({fetchFrame:n,decode:a,byteBudget:s=268435456,maxFrames:t=5}){const c=new Map,i=new Map;let o=null,r=0,f=!1,l=!1;const m=(u,d)=>`${u}:${d}`,g=()=>[...c.values()].reduce((u,d)=>u+d.byteLength,0);function x(){for(const u of c.keys()){if(c.size<=t&&g()<=s)break;u!==o&&c.delete(u)}}function h(u,d){const p=m(u,d);if(c.has(p)){const S=c.get(p);return c.delete(p),c.set(p,S),Promise.resolve(S)}if(i.has(p))return i.get(p).promise;const w=new AbortController,j=n(u,d,{signal:w.signal}).then(S=>{if(f||w.signal.aborted)return null;const v=S&&Object.hasOwn(S,"verifiedResource"),_=v?S.buffer:S,y=v?S.verifiedResource:null,C=a(_),B=new Set(C.fields.map(b=>b.values.buffer)),A={comparisonId:u,frameNumber:d,data:C,verifiedResource:y,byteLength:[...B].reduce((b,M)=>b+M.byteLength,0)};return c.set(p,A),x(),A}).finally(()=>{i.get(p)?.controller===w&&i.delete(p)});return i.set(p,{promise:j,controller:w}),j}return{async select(u,d){if(f)return null;const p=++r,w=m(u,d);for(const[S,v]of i)S!==w&&(v.controller.abort(),i.delete(S));const j=o;o=w;try{const S=await h(u,d);return f||p!==r?null:(x(),S)}catch(S){if(f||p!==r||S.name==="AbortError")return null;throw o=j,S}},async prefetch(u,d){f||l||await Promise.all(d.slice(0,2).map(p=>h(u,p).catch(()=>null)))},setScrubbing(u){if(l=u,u)for(const[d,p]of i)d!==o&&(p.controller.abort(),i.delete(d))},stats(){return{bytes:g(),cachedFrames:c.size,oversize:g()>s}},dispose(){f=!0,r++;for(const u of i.values())u.controller.abort();i.clear(),c.clear()}}}const Ga=new Map;function Fr(n){Ga.clear();for(const a of n)Ga.set(a.comparison.id,a)}async function Or(n){const a=new Uint8Array(n);if(a[0]===31&&a[1]===139){if(typeof DecompressionStream>"u")throw new Error("This browser cannot decode the field samples. Please use a recent Chrome, Edge, Firefox or Safari.");return new Response(new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}return n}async function Dr(n,a,s={}){const t=Ga.get(n),c=t?.frameUrls?.[String(a)],i=Tt(t,a);if(!c)throw new Error(`Frame ${a} is not included in this public preview.`);if(!/^\/?data\/[a-zA-Z0-9_./-]+$/.test(c)||c.split("/").includes(".."))throw new Error("Invalid published field URL.");const o=await fetch(c.replace(/^\//,""),{signal:s.signal});if(!o.ok)throw new Error(`Field sample unavailable (${o.status}).`);const r=await o.arrayBuffer();if(s.signal?.aborted)throw new DOMException("Aborted","AbortError");const f=i?await Wt(r,i):await Or(r);if(s.signal?.aborted)throw new DOMException("Aborted","AbortError");return s.withIdentity?{buffer:f,verifiedResource:i}:f}async function Wr(n){const a=Ga.get(n);if(!a)throw new Error("Unknown public comparison.");return a.metrics??null}function Ct(n,a){const[s,t,c]=a.dimensions;if(!Number.isSafeInteger(n)||n<0||n>=s*t*c)throw Error("probe");const i=n%s,o=Math.floor(n/s)%t,r=Math.floor(n/(s*t)),f=a.origin.map((l,m)=>l+i*a.axisSteps[0][m]+o*a.axisSteps[1][m]+r*a.axisSteps[2][m]);return{index:n,x:i,y:o,z:r,world:f,crosshair:[(i+.5)/s,(r+.5)/c]}}function yc(n,a,s,t){return a==="xz"&&s===n.y&&n.crosshair.every((c,i)=>Math.abs(c-t[i])<1e-9)}function Tr(n,a){const{originXYZ:s,spacing:t,shape:[c,i]}=a,o=(n[0]-s[0])/t,r=(n[2]-s[2])/t,f=Math.round(o),l=Math.round(r);return Math.abs(o-f)>1e-5||Math.abs(r-l)>1e-5||f<0||l<0||f>=i||l>=c?null:{ix:f,iz:l,index:l*i+f,x:s[0]+f*t,z:s[2]+l*t}}function Fs({frames:n,current:a,direction:s=1,loop:t=!1,status:c="ready"}){const i=n.indexOf(a),o=i+(s<0?-1:1);return i>=0&&o>=0&&o<n.length?{frame:n[o],action:"select"}:c==="processing"&&s>0?{frame:a,action:"wait"}:c==="ready"&&t&&n.length>1?{frame:s<0?n.at(-1):n[0],action:"select"}:{frame:a,action:"stop"}}function Vr({frames:n,displayedFrame:a,requestedFrame:s,status:t="ready",loading:c=!1,previewFps:i=24,onFrame:o,onScrubbing:r,timing:f,frameSplit:l,active:m=!0,controlRef:g,initialPlayback:x}){const{tr:h}=me(),[u,d]=E.useState(!1),[p,w]=E.useState(x?.loop??!1),[j,S]=E.useState(x?.fps??i),[v,_]=E.useState(x?.speed??1),[y,C]=E.useState("");E.useImperativeHandle(g,()=>({pause:()=>d(!1),getSettings:()=>({loop:p,fps:j,speed:v}),restoreSettings:R=>{d(!1),w(R.loop),S(R.fps),_(R.speed)}}),[p,j,v]),E.useEffect(()=>{const R=()=>d(!1);return window.addEventListener("oceanscope-annotate",R),()=>window.removeEventListener("oceanscope-annotate",R)},[]),E.useEffect(()=>{m||d(!1)},[m]);const B=E.useRef(!1);E.useEffect(()=>{B.current||C(String(s??a??""))},[s,a]),E.useEffect(()=>{n.length<2&&d(!1)},[n.length]),E.useEffect(()=>{if(!u||c)return;const R=setTimeout(()=>{const I=Fs({frames:n,current:a,loop:p,status:t});I.action==="select"?o(I.frame):I.action==="stop"&&d(!1)},1e3/(Math.max(1,j)*v));return()=>clearTimeout(R)},[u,c,a,n,p,t,j,v,o]);function A(R){d(!1);const I=Fs({frames:n,current:s??a,direction:R,status:t});I.action==="select"&&o(I.frame)}function b(){d(!1);const R=Number(y);n.includes(R)?R!==s&&o(R):C(String(s??a??""))}const M=n.some((R,I)=>I>0&&R!==n[I-1]+1);return e.createElement("section",{"data-os-loc":"src/field/FieldTimeline.jsx:21:10",className:"field-timeline","aria-label":h("Animation controls")},e.createElement(mc,{manifest:l,frame:a}),e.createElement("div",{"data-os-loc":"src/field/FieldTimeline.jsx:23:5",className:"field-play-controls"},e.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:42","data-os-action":"","aria-label":h("First frame"),disabled:!n.length,onClick:()=>{d(!1),o(n[0])}},"⏮"),e.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:170","data-os-action":"","aria-label":h("Previous frame"),disabled:n.length<2,onClick:()=>A(-1)},"‹"),e.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:272","data-os-action":"",className:"primary",disabled:n.length<2,onClick:()=>d(R=>!R)},h(u?"Pause":"Play")),e.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:400","data-os-action":"","aria-label":h("Next frame"),disabled:n.length<2,onClick:()=>A(1)},"›"),e.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:497","data-os-action":"","aria-label":h("Last frame"),disabled:!n.length,onClick:()=>{d(!1),o(n.at(-1))}},"⏭"),e.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:23:628"},e.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:23:635","data-os-action":"",type:"checkbox",checked:p,onChange:R=>w(R.target.checked)}),h(" Loop")),e.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:23:735"},h("Speed"),e.createElement("select",{"data-os-loc":"src/field/FieldTimeline.jsx:23:755","data-os-action":"",value:v,onChange:R=>_(Number(R.target.value))},[.25,.5,1,2].map(R=>e.createElement("option",{"data-os-loc":"src/field/FieldTimeline.jsx:23:845",key:R,value:R},R,"×"))))),e.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:24:5","data-os-action":"","aria-label":h("Sequence timeline"),type:"range",min:"0",max:Math.max(0,n.length-1),value:Math.max(0,n.indexOf(s??a)),disabled:n.length<2,onPointerDown:()=>{d(!1),r?.(!0)},onPointerUp:()=>r?.(!1),onPointerCancel:()=>r?.(!1),onBlur:()=>r?.(!1),onKeyDown:R=>{r?.(!0),["Home","End"].includes(R.key)&&(R.preventDefault(),d(!1),o(R.key==="Home"?n[0]:n.at(-1)))},onKeyUp:()=>r?.(!1),onChange:R=>{d(!1),o(n[Number(R.target.value)])}}),e.createElement("div",{"data-os-loc":"src/field/FieldTimeline.jsx:25:5","data-displayed-frame":a,className:"field-time-labels"},e.createElement("span",{"data-os-loc":"src/field/FieldTimeline.jsx:25:78"},h("Displayed frame "),e.createElement("strong",{"data-os-loc":"src/field/FieldTimeline.jsx:25:108"},a??"—"),c?` · ${h("Loading")} ${s}…`:""),e.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:25:206"},h("Go to frame"),e.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:25:232","data-os-action":"","aria-label":h("Comparison frame"),type:"number",value:y,onFocus:()=>{B.current=!0,d(!1)},onChange:R=>{d(!1),C(R.target.value)},onBlur:()=>{B.current=!1,b()},onKeyDown:R=>{R.key==="Enter"&&b()}})),e.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:25:527"},h("Preview FPS"),e.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:25:553","data-os-action":"","aria-label":h("Preview FPS"),type:"number",min:"1",max:"120",value:j,onChange:R=>S(Math.max(1,Math.min(120,Number(R.target.value)||24)))})),e.createElement("small",{"data-os-loc":"src/field/FieldTimeline.jsx:25:719"},f?.fps>0&&Number.isFinite(f.originFrame)?`${h("Time")}: ${((a-f.originFrame)/f.fps+(f.offsetSeconds||0)).toFixed(3)} s`:h("Playback timing only — not physical simulation time"))),e.createElement("small",{"data-os-loc":"src/field/FieldTimeline.jsx:26:5"},n.length,h(" available frames"),M?h(" · Missing frames skipped; no interpolation"):"",t==="processing"?h(" · Processing continues; playback waits at the latest frame"):t==="error"?h(" · Processing failed; completed frames remain available"):""))}const xc={mae:"MAE",rmse:"RMSE",maxAbsoluteError:"Maximum absolute error",nearSurfaceMae:"Near-surface MAE",signAccuracy:"Sign accuracy",fluidIoU:"Fluid IoU",dice:"Dice",symmetricMeanSurfaceDistance:"Symmetric mean surface distance",hd95:"HD95",meanEpe:"Mean EPE",epeRmse:"EPE RMSE",epeP95:"EPE P95",relativeL2:"Relative L2",meanCosineSimilarity:"Mean cosine similarity",meanAngularErrorDegrees:"Mean angular error",divergenceMae:"Divergence MAE",coverage:"Coverage",validCount:"Valid voxels"},zr=["nearSurfaceMae","rmse","fluidIoU","meanEpe","epeP95","relativeL2","coverage","mae","maxAbsoluteError","signAccuracy","dice","symmetricMeanSurfaceDistance","hd95","epeRmse","componentMae","componentRmse","meanCosineSimilarity","meanAngularErrorDegrees","divergenceMae","validCount","nonFiniteCount","nearSurfaceCount","surfaceSampleCount","angularExcludedCount","divergenceStencilCount","trustedTau","effectiveBand"];Object.assign(xc,{componentMae:"Component MAE (x, y, z)",componentRmse:"Component RMSE (x, y, z)",nonFiniteCount:"Non-finite pairs excluded",nearSurfaceCount:"Near-surface voxels",surfaceSampleCount:"Surface samples (pooled)",angularExcludedCount:"Angular exclusions",divergenceStencilCount:"Divergence stencils",trustedTau:"Trusted truncation τ",effectiveBand:"Effective band"});function $r({metrics:n,group:a,unit:s,frame:t}){const{tr:c,language:i}=me(),o=n?.[a],r=a==="sdf"?["mae","rmse","fluidIoU","coverage"]:["meanEpe","epeRmse","coverage"],f=o?zr.filter(m=>o[m]!==void 0):[],l=m=>e.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:14:21",key:m},e.createElement("span",{"data-os-loc":"src/field/MetricsPanel.jsx:14:36"},c(xc[m])),e.createElement("strong",{"data-os-loc":"src/field/MetricsPanel.jsx:14:66"},o[m]===null?c("Not available"):Array.isArray(o[m])?o[m].map(g=>g==null?"N/A":Number(g).toPrecision(4)).join(" / "):typeof o[m]=="number"?o[m].toLocaleString(void 0,m.endsWith("Count")?{}:{maximumSignificantDigits:5}):String(o[m])),e.createElement("small",{"data-os-loc":"src/field/MetricsPanel.jsx:14:363"},["mae","rmse","maxAbsoluteError","nearSurfaceMae","symmetricMeanSurfaceDistance","hd95","meanEpe","epeRmse","epeP95","componentMae","componentRmse","trustedTau","effectiveBand"].includes(m)?s:m==="coverage"?c("fraction"):m==="meanAngularErrorDegrees"?c("degrees"):m==="divergenceMae"?c(s==="m/s"?"1/s":"velocity / length"):""));return e.createElement("aside",{"data-os-loc":"src/field/MetricsPanel.jsx:15:10",className:"metrics-panel"},e.createElement("h3",{"data-os-loc":"src/field/MetricsPanel.jsx:15:43"},a==="sdf"?i==="zh"?"体积 SDF 指标":"Volumetric SDF metrics":i==="zh"?"原网格速度指标":"Native-grid velocity metrics"),e.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:181",className:"metric-scope"},i==="zh"?`帧 ${t??"—"} · 原网格有效体素 · 不随选区改变`:`Frame ${t??"—"} · Valid native-grid voxels · Independent of ROI`),o?.notice&&e.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:354",role:"note"},i==="zh"&&o.noticeZh?o.noticeZh:c(o.notice)),o?.blocked?e.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:459",className:"score-blocked"},c(o.reason)||c("Scores blocked: declare field semantics and units.")):o?e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:15:637",className:"metric-grid"},r.filter(m=>f.includes(m)).map(l),f.filter(m=>m.endsWith("Count")).map(l)),e.createElement("details",{"data-os-loc":"src/field/MetricsPanel.jsx:15:776"},e.createElement("summary",{"data-os-loc":"src/field/MetricsPanel.jsx:15:785"},i==="zh"?"更多指标":"More metrics"),e.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:15:843",className:"metric-grid"},o.nearSurfaceDomain&&e.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:899"},c(o.nearSurfaceDomain),e.createElement("br",{"data-os-loc":"src/field/MetricsPanel.jsx:15:932"}),c("Band: "),o.effectiveBand?.toPrecision(4)," ",s),f.filter(m=>!r.includes(m)&&!m.endsWith("Count")).map(l)))):e.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:578"},c("Metrics are not available for this frame.")))}const Rn="Common valid finite SDF voxels M; N = |M|. Interior means SDF ≤ 0.",an="Common valid finite velocity voxels M; not automatically restricted to fluid interior.",be=(n,a,s,t,c,i,o,r="")=>({id:n,label:a,formula:s,unitKind:t,direction:c,group:i,domain:o,caveats:r}),Vt=[be("mae","Water-surface elevation MAE","mean |ηp − ηg|","length","Lower","elevation","Paired trustworthy world-Y zero-crossing columns on common XZ lattice.","Not crest-to-trough wave height or Hs. Filled exterior, missing support and multiple crossings are excluded; inspect both coverage denominators."),be("rmse","Water-surface elevation RMSE","sqrt(mean (ηp − ηg)^2)","length","Lower","elevation","Same paired height columns.","Full-resolution aligned SDF, never preview mesh."),be("maxAbsoluteError","Maximum elevation error","max |ηp − ηg|","length","Lower","elevation","Same paired height columns."),be("coverage","Height paired coverage","paired valid columns / GT valid columns","fraction","Context","elevation","GT reconstructible columns.","Zero denominator: N/A. Not SDF voxel coverage."),be("gtCoverage","GT reconstructible coverage","GT valid columns / candidate XZ columns","fraction","Context","elevation","All candidate XZ columns.","Read with paired coverage to expose excluded GT surfaces."),be("mae","SDF MAE","Σ |p − g| / N","length","Lower","sdf",Rn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),be("rmse","SDF RMSE","√(Σ (p − g)² / N)","length","Lower","sdf",Rn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),be("maxAbsoluteError","Maximum absolute error","max |p − g|","length","Lower","sdf",Rn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),be("nearSurfaceMae","Near-surface MAE","mean |clipτ(p) − clipτ(g)| on B","length","Lower","sdf","B = M ∩ {|g| ≤ effective band}, including numerical tolerance.","GT defines B. For TSDF, band ≤ shared τ; clip both values at τ. Shared τ is min of both TSDF τ values, or the single TSDF τ in a mixed pair. No clipping for full/full."),be("signAccuracy","Sign accuracy","count[(p ≤ 0) = (g ≤ 0)] / N","fraction","Higher","sdf",Rn),be("fluidIoU","Fluid IoU","|P ∩ G| / |P ∪ G|","fraction","Higher","sdf",Rn,"P and G are predicted and GT interior sets in M. Both empty: 1."),be("dice","Dice","2 |P ∩ G| / (|P| + |G|)","fraction","Higher","sdf",Rn,"Both interior sets empty: 1."),be("symmetricMeanSurfaceDistance","Symmetric mean surface distance","mean(D(G→P) ∪ D(P→G))","length","Lower","sdf","Pooled nearest distances between sampled zero crossings; each surface uses its own valid support.","Approximation, at most 4096 samples per surface. Not exact continuous-mesh distance; unavailable if either surface is empty."),be("hd95","HD95","percentile95(D(G→P) ∪ D(P→G))","length","Lower","sdf","Same pooled sampled-surface distances.","Linear percentile interpolation; not maximum Hausdorff distance. Surface-sampling limitations apply."),be("meanEpe","Mean EPE","mean ‖p − g‖₂","speed","Lower","velocity",an),be("epeRmse","EPE RMSE","√mean ‖p − g‖₂²","speed","Lower","velocity",an),be("epeP95","EPE P95","percentile95(‖p − g‖₂)","speed","Lower","velocity",an,"Linear interpolation between ordered samples."),be("componentMae","Component MAE (x, y, z)","mean |pₖ − gₖ|, k = x,y,z","speed","Lower","velocity",an),be("componentRmse","Component RMSE (x, y, z)","√mean (pₖ − gₖ)², k = x,y,z","speed","Lower","velocity",an),be("relativeL2","Relative L2","√(Σ ‖p − g‖₂² / Σ ‖g‖₂²)","dimensionless","Lower","velocity",an,"Unavailable when GT energy is zero; no artificial epsilon in denominator."),be("meanCosineSimilarity","Mean cosine similarity","mean clamp((p·g)/(‖p‖₂ ‖g‖₂), −1, 1)","dimensionless","Higher","velocity",an,"Exclude either magnitude ≤ ε (default 1e−8)."),be("meanAngularErrorDegrees","Mean angular error","mean acos(cosine) × 180/π","degrees","Lower","velocity",an,"Same nonzero-vector subset as cosine similarity."),be("divergenceMae","Divergence MAE","mean |∇·p − ∇·g|","inverseTime","Lower","velocity","Six valid neighboring samples; finite central-difference divergence. Borders excluded.","Σₖ (vₖ(i+eₖ) − vₖ(i−eₖ))/(2hₖ). Orthogonal aligned lattice. Divergence mismatch, not absolute incompressibility."),be("coverage","Coverage","N / total lattice voxels","fraction","Context","both","Reported separately for SDF and velocity.","Always read with the error: small valid support can hide missing predictions.")];function Xr(){return{schema:1,notation:"g = Ground Truth; p = Prediction. These are evaluation metrics, not a weighted training loss.",sequence:"Equal weight per valid frame, not pooled voxels. Excluded frame counts are reported. Population standard deviation; interpolated P95.",metrics:Vt}}function Zr(n){const a=n.filter(r=>typeof r=="number"&&Number.isFinite(r)).sort((r,f)=>r-f);if(!a.length)return{median:null,p95:null,stddev:null};const s=r=>{const f=(a.length-1)*r,l=Math.floor(f),m=f-l;return a[l]*(1-m)+a[Math.min(l+1,a.length-1)]*m},t=a.reduce((r,f)=>Math.max(r,Math.abs(f)),0),c=a.map(r=>t?r/t:0),i=c.reduce((r,f)=>r+f/a.length,0),o=Math.sqrt(c.reduce((r,f)=>r+(f-i)**2/a.length,0))*t;return{median:s(.5),p95:s(.95),stddev:Number.isFinite(o)?o:null}}function vc(n){if(!Number.isSafeInteger(n?.frame)||!Number.isSafeInteger(n?.prediction_origin_frame)||!Number.isFinite(n?.fps)||n.fps<=0||n.prediction_type==="extrapolation"&&n.frame<=n.prediction_origin_frame)return null;const a=(n.frame-n.prediction_origin_frame)/n.fps;return Number.isFinite(a)?a:null}const Gr={length:"m",speed:"m/s",inverseTime:"1/s",degrees:"degrees",fraction:"fraction",dimensionless:"dimensionless"};function Hr(n,a={}){return n.flatMap(s=>Vt.filter(t=>t.group===s||t.group==="both"&&s!=="elevation").flatMap(t=>{const c=t.unitKind==="length"?a.sdf??"m":t.unitKind==="speed"?a.velocity??"m/s":t.unitKind==="inverseTime"&&a.velocity&&a.velocity!=="m/s"?`(${a.velocity}) / length`:Gr[t.unitKind],i={group:s,key:t.id,label:t.label,unit:c,direction:t.direction};return t.id==="componentMae"||t.id==="componentRmse"?["x","y","z"].map((o,r)=>({...i,id:`${s}.${t.id}.${o}`,index:r,label:`${t.id==="componentMae"?"Component MAE":"Component RMSE"} ${o.toUpperCase()}`})):[{...i,id:`${s}.${t.id}`}]}))}function qr({metrics:n,frames:a=[],expectedFrames:s=[],groups:t=[],status:c,units:i,frameSplit:o,frameSubset:r="all"}){const f=Object.values(n?.settings?.sdf||{}).some(j=>j?.semantics==="water_interior"),l=f?"gt_water_common_distance_support":n?.settings?.sdfEvaluationRegion||"full_domain",m=Hr(t,i).map(j=>({...j,label:j.label+(f&&j.group==="sdf"?["fluidIoU","dice","signAccuracy","symmetricMeanSurfaceDistance","hd95"].includes(j.key)?" (full domain)":" (conditional GT-water support)":"")+(l==="gt_water"&&j.group==="sdf"?["fluidIoU","dice","symmetricMeanSurfaceDistance","hd95"].includes(j.key)?" (full domain)":" (GT water)":"")})),g=new Set(a),x=[...s,...a,...Object.keys(n?.frames||{}).map(Number),...n?.missingPredictionFrames||[]],h=new Map((o?.rows??[]).map(j=>[j.frame,j])),u=[...new Set(x.filter(Number.isInteger))].sort((j,S)=>j-S).filter(j=>Mi(h,j,r)),d=u.map(j=>{const S=n?.frames?.[j],v={};for(const C of m){const B=S?.[C.group],A=B?.[C.key],b=C.index===void 0?A:A?.[C.index];v[C.id]=!B?.blocked&&Number.isFinite(b)?b:null}const _=t.filter(C=>C!=="elevation"&&S?.[C]?.blocked).map(C=>`${C}: ${S[C].reason||"Scoring blocked"}`).join("; "),y=h.get(j);return{frame:j,elevationAudit:S?.elevation??null,algorithmVersion:n?.algorithmVersion??"legacy undeclared",split:Pi(h,j),predictionType:Ri(h,j),predictionOriginFrame:y?.prediction_origin_frame??null,fps:y?.fps??null,horizonSeconds:vc(y),available:g.has(j),calculated:!!S,reason:_,values:v}}),p=m.map(j=>{const S=d.map(y=>y.values[j.id]).filter(Number.isFinite),v=S.length,_=v?S.reduce((y,C)=>y+C/v,0):null;return{...j,mean:_,...Zr(S),minimum:v?S.reduce((y,C)=>Math.min(y,C)):null,maximum:v?S.reduce((y,C)=>Math.max(y,C)):null,valid:v,excluded:d.length-v,total:d.length}}),w=[...new Set(u.flatMap(j=>t.filter(S=>S!=="elevation").flatMap(S=>n?.frames?.[j]?.[S]?.blocked?[`${S.toUpperCase()}: ${n.frames[j][S].reason||"Scoring prerequisites not met"}`]:[])))];return{columns:m,rows:d,summary:p,blockedReasons:w,evaluationRegion:l,frameSubset:r,sdfValidation:n?.settings?.sdf||{},total:d.length,calculated:d.filter(j=>j.calculated).length,complete:c==="ready"&&d.length>0&&d.every(j=>j.calculated)&&!w.length,status:c}}function Ae(n){return Number.isFinite(n)?Number(n.toPrecision(6)).toString():"N/A"}const Lr=n=>{const a=n==null?"N/A":String(n);return/[",\r\n]/.test(a)?`"${a.replaceAll('"','""')}"`:a};function Os(n,a){const s=n.complete?"complete":"partial",t=a==="frames"?[["frame","frame_status","sequence_status",...n.columns.map(c=>`${c.id} [${c.unit}]`),"excluded_reason"],...n.rows.map(c=>[c.frame,c.reason?"scoring blocked":c.calculated?"calculated":"not calculated",s,...n.columns.map(i=>c.values[i.id]),c.reason||""])]:[["metric","unit","mean","minimum","maximum","valid_frames","excluded_frames","total_frames","sequence_status","median","p95","stddev"],...n.summary.map(c=>[c.id,c.unit,c.mean,c.minimum,c.maximum,c.valid,c.excluded,c.total,s,c.median,c.p95,c.stddev])];return a==="frames"&&(t[0].push("split","prediction_type","prediction_origin_frame","fps","horizon_seconds"),t.slice(1).forEach((c,i)=>c.push(n.rows[i].split||"unassigned",n.rows[i].predictionType||"unassigned",n.rows[i].predictionOriginFrame,n.rows[i].fps,n.rows[i].horizonSeconds))),a==="frames"&&(t[0].push("algorithm_version","elevation_valid_columns","elevation_gt_valid_columns","elevation_candidate_columns","elevation_reason","elevation_excluded_reasons"),t.slice(1).forEach((c,i)=>{const o=n.rows[i],r=o.elevationAudit;c.push(o.algorithmVersion,r?.validColumns,r?.gtValidColumns,r?.candidateColumns,r?.reason||(r?"":"Not calculated by this result version"),JSON.stringify(r?.excludedReasons??{}))})),t[0].push("frame_subset"),t.slice(1).forEach(c=>c.push(n.frameSubset||"all")),t[0].push("sdf_error_region","geometry_region"),t.slice(1).forEach(c=>c.push(n.evaluationRegion||"full_domain","full_domain")),t[0].push("gt_validation_mode","prediction_validation_mode","gt_override_reason","prediction_override_reason"),t.slice(1).forEach(c=>c.push(n.sdfValidation?.gt?.validationMode||"legacy undeclared",n.sdfValidation?.prediction?.validationMode||"legacy undeclared",n.sdfValidation?.gt?.overrideReason||"",n.sdfValidation?.prediction?.overrideReason||"")),t.map(c=>c.map(Lr).join(",")).join(`\r
`)}function Yr(n,a,s=640){const c=n.filter(d=>Number.isFinite(d.values[a])).map(d=>d.values[a]);let i=c.length?Math.min(...c):0,o=c.length?Math.max(...c):1;if(i===o){const d=Math.max(Math.abs(i)*.05,1e-6);i-=d,o+=d}const r=n[0]?.frame??0,f=n.at(-1)?.frame??r,l=d=>f===r?(s+42)/2:64+(d-r)/(f-r)*(s-86),m=d=>180-(d-i)/(o-i)*150,g=[],x=[];let h=[],u=null;for(const d of n){const p=d.values[a];if((!Number.isFinite(p)||u!==null&&d.frame!==u+1)&&(h.length&&g.push(h),h=[]),Number.isFinite(p)){const w={frame:d.frame,value:p,x:l(d.frame),y:m(p)};h.push(w),x.push(w)}u=d.frame}return h.length&&g.push(h),{min:i,max:o,start:r,end:f,x:l,y:m,points:x,segments:g}}function Ur(n,a,s=.9){const t=n.filter(i=>Number.isFinite(i.values[a?.id]));return{worst:a?.direction==="Context"?[]:[...t].sort((i,o)=>(a?.direction==="Higher"?1:-1)*(i.values[a.id]-o.values[a.id])||i.frame-o.frame).slice(0,5),lowCoverage:n.filter(i=>Number.isFinite(i.values[`${a?.group}.coverage`])&&i.values[`${a.group}.coverage`]<s),unavailable:n.filter(i=>!Number.isFinite(i.values[a?.id]))}}const Jr=n=>`"${String(n??"undeclared").replaceAll('"','""')}"`;function Kr(n,a,s){const t=[["report_identifier",a],["frame_subset",n.frameSubset],["frame_numbers",n.rows.map(c=>c.frame).join(";")],["frame_count",n.rows.length],["status",n.complete?"complete":"partial"],["sdf_error_region",n.evaluationRegion],["units",JSON.stringify(n.columns.map(c=>({metric:c.id,unit:c.unit})))],["sdf_declarations",JSON.stringify(n.sdfValidation)],["split_manifest_sha256",s?.sha256],["aggregation","Equal weight per valid frame; mean of frame RMSE, not pooled voxel RMSE. N/A excluded, never zero."],["valid_counts",JSON.stringify(n.summary.map(c=>({metric:c.id,valid:c.valid,total:c.total})))],["limitations","SDF error is not wave-height error. Read error with coverage. Frame numbers do not certify physical-time alignment. Split membership is declared, not independently verified. Exterior-filled distances are conditional, not full-domain accuracy."],["provenance","Use the saved-result ZIP for source identities and full scoring protocol. This notes file describes the currently selected report subset."]];return[["field","value"],...t].map(c=>c.map(Jr).join(",")).join(`\r
`)}function Qr({report:n,metric:a,onFrame:s,onDownload:t,comparisonId:c,frameSplit:i}){const{language:o,tr:r}=me(),f=o==="zh",l=(u,d)=>f?d:u,[m,g]=E.useState(.9),x=E.useMemo(()=>Ur(n.rows,a,m),[n.rows,a,m]),h=(u,d)=>u.slice(0,20).map(p=>e.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:9:51",key:p.frame},e.createElement("button",{"data-os-loc":"src/field/FrameReview.jsx:9:69","data-os-action":"",disabled:!p.available||!s,"aria-label":`${d==="unavailable"?"Review unavailable frame":d==="coverage"?"Review coverage frame":"Review frame"} ${p.frame}`,onClick:()=>s(p.frame)},p.frame)," · ",Ae(d==="coverage"?p.values[`${a?.group}.coverage`]:p.values[a?.id]),d==="unavailable"&&e.createElement("span",{"data-os-loc":"src/field/FrameReview.jsx:9:426"}," · ",p.reason||(p.calculated?l("Metric unavailable on this support; see definitions below","该指标在当前有效区域不可用，请查看下方定义"):l("Not calculated / missing frame","尚未计算或帧缺失")))));return e.createElement("details",{"data-os-loc":"src/field/FrameReview.jsx:10:9",className:"frame-review"},e.createElement("summary",{"data-os-loc":"src/field/FrameReview.jsx:10:43"},l("Frame review & report notes","异常帧检查与报告说明")),e.createElement("p",{"data-os-loc":"src/field/FrameReview.jsx:11:3"},l("Review only: no frames are removed and no scores are changed. Lists follow the selected subset and metric. Worst does not mean statistically abnormal.","仅供检查：不剔除帧、不改变数值。列表跟随当前集合和指标；最差帧不等同于统计异常。")),e.createElement("div",{"data-os-loc":"src/field/FrameReview.jsx:12:3",className:"frame-review-grid"},e.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:12:38"},e.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:12:47"},l("Worst 5 frames","表现最差的 5 帧")," · ",r(a?.label)),x.worst.length?e.createElement("ol",{"data-os-loc":"src/field/FrameReview.jsx:12:132"},h(x.worst,"worst")):e.createElement("p",{"data-os-loc":"src/field/FrameReview.jsx:12:171"},l("No rankable finite values. Coverage is context, not accuracy.","没有可排序的有效数值；覆盖率是背景信息，不代表精度。"))),e.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:13:3"},e.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:13:12"},l("Low coverage","低覆盖率")," · ",x.lowCoverage.length),e.createElement("label",{"data-os-loc":"src/field/FrameReview.jsx:13:77"},l("Review threshold","检查阈值")," ",e.createElement("input",{"data-os-loc":"src/field/FrameReview.jsx:13:115","data-os-action":"","aria-label":"Coverage review threshold",type:"number",min:"0",max:"1",step:"0.05",value:m,onChange:u=>{const d=Number(u.target.value);u.target.value!==""&&Number.isFinite(d)&&d>=0&&d<=1&&g(d)}})),e.createElement("small",{"data-os-loc":"src/field/FrameReview.jsx:13:348"},l("Below this fraction; review aid, not a scientific pass/fail criterion.","低于此比例时列出；仅辅助检查，不是科研合格线。")),e.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:13:466"},h(x.lowCoverage,"coverage"))),e.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:14:3"},e.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:14:12"},l("Unavailable metric","指标不可用")," · ",x.unavailable.length),e.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:14:84"},h(x.unavailable,"unavailable")),e.createElement("small",{"data-os-loc":"src/field/FrameReview.jsx:14:134"},l("At most 20 entries per list; all values remain in the frame table and CSV.","每个列表最多显示 20 项，全部数据仍保留在逐帧表格和 CSV。")))),e.createElement("details",{"data-os-loc":"src/field/FrameReview.jsx:15:3"},e.createElement("summary",{"data-os-loc":"src/field/FrameReview.jsx:15:12"},l("How to interpret these results","如何解读这些结果")),e.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:15:79"},e.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:16:4"},l("N/A is not zero: it may mean missing frames, blocked scoring, no valid samples, or an unsupported metric. The list gives known blocking reasons; metric definitions explain other restrictions.","N/A 不是零：可能是缺帧、计算被阻止、无有效样本或指标不适用。列表显示已知阻止原因，其余限制见指标定义。")),e.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:17:4"},l("A lower error with lower coverage is not automatically better. Compare models on matching frames and common spatial support.","误差更低但覆盖率更低，不自动代表更好。模型比较应使用匹配帧和共同有效空间区域。")),e.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:18:4"},l("Exterior-filled SDF supports conditional interior distance errors only; it does not certify full-domain distance accuracy. Surface metrics may be unavailable.","水外固定填值的 SDF 只支持有条件的水内距离误差，不能证明全域距离精度；表面指标可能不可用。")),e.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:19:4"},l("SDF MAE is not wave-height MAE. Sequence means give equal weight to valid frames, not to pooled voxels.","SDF MAE 不等于浪高 MAE。序列均值对有效帧等权，并非将所有体素合并计算。")))),e.createElement("button",{"data-os-loc":"src/field/FrameReview.jsx:21:3","data-os-action":"",disabled:!n.total,onClick:()=>t(`${c}_${n.frameSubset}_report_notes.csv`,Kr(n,c,i))},l("Export report notes CSV","导出报告说明 CSV")))}function e0({point:n,row:a,selected:s,onFrame:t,language:c}){const i=!!(t&&a?.available),o=a?.predictionType||"unassigned",r={train:"#b66b14",validation:"#8052bc",test:"#008c9c",unassigned:"#7b8794"}[a?.split||"unassigned"];return e.createElement("g",{"data-os-loc":"src/field/FrameCurvePoint.jsx:5:9","data-os-action":"",transform:`translate(${n.x},${n.y})`,role:"button","aria-label":`${c==="zh"?"选择曲线帧":"Select plotted frame"} ${n.frame}`,"aria-disabled":!i,tabIndex:i?0:-1,onClick:()=>i&&t(n.frame),onKeyDown:f=>{i&&["Enter"," "].includes(f.key)&&(f.preventDefault(),t(n.frame))},style:{cursor:i?"pointer":"default"}},e.createElement("title",{"data-os-loc":"src/field/FrameCurvePoint.jsx:6:2"},`Frame ${n.frame}: ${n.value} | ${a?.split||"unassigned"} | ${o}`),e.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:6:89",r:"7",fill:"transparent"}),s&&e.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:7:13",r:"7",fill:"none",stroke:"#d36218",strokeWidth:"2"}),o==="anchor"?e.createElement("rect",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:19",x:"-4",y:"-4",width:"8",height:"8",fill:r}):o==="extrapolation"?e.createElement("path",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:98",d:"M 0 -5 L 5 4 L -5 4 Z",fill:r}):o==="interpolation"?e.createElement("path",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:168",d:"M 0 -5 L 5 0 L 0 5 L -5 0 Z",fill:r}):e.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:221",r:"3",fill:r}))}function n0({rows:n,metricKey:a,manifest:s,modelName:t}){const{language:c}=me(),i=c==="zh",o=new Map;let r=0;const f=new Map((s?.rows??[]).map(l=>[l.frame,l]));for(const l of n){const m=f.get(l.frame);if(m?.prediction_type!=="extrapolation")continue;const g=vc(m);if(g===null){r++;continue}const x=`${m.prediction_origin_frame} / ${m.fps} fps`;o.has(x)||o.set(x,[]),o.get(x).push({frame:l.frame,seconds:g,value:l.values[a]})}return!o.size&&!r?null:e.createElement("details",{"data-os-loc":"src/field/PredictionTrend.jsx:18:9"},e.createElement("summary",{"data-os-loc":"src/field/PredictionTrend.jsx:18:18"},t&&`${t} · `,i?"未来外推时间趋势":"Future prediction horizon"),e.createElement("p",{"data-os-loc":"src/field/PredictionTrend.jsx:18:110"},i?"按声明的输入起点和 FPS 分图；缺失帧不连线，不合并不同预测。":"Separate plots for declared origin and FPS; missing frames are not connected and different predictions are not merged."),r>0&&e.createElement("p",{"data-os-loc":"src/field/PredictionTrend.jsx:19:14"},i?`${r} 帧缺少有效时间声明，仍使用上方帧号曲线。`:`${r} frame(s) without valid timing; retain the frame-number plot above.`),[...o].map(([l,m])=>{const g=m.filter(w=>Number.isFinite(w.value)),x=Math.max(1,...m.map(w=>w.seconds)),h=g.length?Math.min(...g.map(w=>w.value)):0,u=g.length?Math.max(...g.map(w=>w.value)):1,d=w=>50+w.seconds/x*510,p=w=>160-(w.value-h)/(u-h||1)*120;return e.createElement("figure",{"data-os-loc":"src/field/PredictionTrend.jsx:24:10",key:l},e.createElement("figcaption",{"data-os-loc":"src/field/PredictionTrend.jsx:24:28"},i?"预测起点":"Prediction origin"," ",l," · ",a),e.createElement("svg",{"data-os-loc":"src/field/PredictionTrend.jsx:24:104",role:"img","aria-label":`Prediction horizon ${l}`,viewBox:"0 0 600 200",width:"100%"},e.createElement("line",{"data-os-loc":"src/field/PredictionTrend.jsx:25:4",x1:"50",x2:"560",y1:"160",y2:"160",stroke:"#a9bac8"}),m.map((w,j)=>{const S=m[j-1];return Number.isFinite(w.value)&&e.createElement("g",{"data-os-loc":"src/field/PredictionTrend.jsx:26:80",key:w.frame},S&&w.frame===S.frame+1&&Number.isFinite(S.value)&&e.createElement("line",{"data-os-loc":"src/field/PredictionTrend.jsx:26:157",x1:d(S),y1:p(S),x2:d(w),y2:p(w),stroke:"#008c9c"}),e.createElement("circle",{"data-os-loc":"src/field/PredictionTrend.jsx:26:228",cx:d(w),cy:p(w),r:"4",fill:"#008c9c"},e.createElement("title",{"data-os-loc":"src/field/PredictionTrend.jsx:26:277"},w.frame,": ",Ae(w.value),"; ",Ae(w.seconds)," s")))}),e.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:4",x:"8",y:"40"},Ae(u)),e.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:48",x:"8",y:"160"},Ae(h)),e.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:93",x:"50",y:"186"},"0"),e.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:122",x:"500",y:"186"},Ae(x)," s")))}))}const a0={missing_or_nonfinite_column:["missing or non-finite column","缺失或非有限数值列"],no_interior_to_exterior_span:["no trustworthy interior-to-exterior span","缺少可信的水内至水外跨度"],ambiguous_or_multiple_crossings:["ambiguous or multiple surfaces","交叉不明确或存在多层水面"],crossing_touches_truncation:["crossing touches truncation boundary","交叉接触截断边界"],nonfinite_height:["non-finite height","高度不是有限数值"],nonfinite_difference:["non-finite height difference","高度差不是有限数值"],outside_common_columns:["outside common column support","不在共同有效列内"]},t0={"No paired trustworthy single-surface columns":"没有可配对的可信单层水面列。","Invalid world-Y lattice":"世界 Y 轴网格无效。","Invalid height input dimensions":"高度输入维度无效。","Height column grids differ":"高度列网格不一致。","Height requires full SDF or trusted TSDF; filled exterior/unknown is not a trustworthy zero crossing":"需要完整 SDF 或可信 TSDF；水外填值或类型未知无法提供可信零交叉。","Height requires validated unchanged SDF distances":"需要经验证且未重建的 SDF 距离。","Height requires axis-aligned world-Y-up lattice":"需要与世界坐标轴对齐、Y 轴向上的网格。","Height requires a comparison with matching declared units":"需要 GT 与预测的声明单位一致。","Height requires finite positive trusted truncation distance":"需要有限、正值且可信的截断距离。"};function s0({data:n}){const{language:a}=me(),s=a==="zh",t=c=>{const[i,...o]=c.split(":"),r=o.length?o.join(":"):i;return(o.length?i==="gt"?"GT: ":i==="prediction"?s?"预测：":"Prediction: ":i+": ":"")+(a0[r]?.[s?1:0]??r)};return e.createElement("details",{"data-os-loc":"src/field/HeightSupportAudit.jsx:28:9"},e.createElement("summary",{"data-os-loc":"src/field/HeightSupportAudit.jsx:28:18"},s?"当前帧高度有效区域与排除原因":"Current-frame height support and exclusions"),n?e.createElement(e.Fragment,null,n.reason&&e.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:30:16"},s?t0[n.reason]??n.reason:n.reason),n.blocked&&e.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:31:17"},s?"此帧高度评分不可用；不能把未评估数量当作零。":"Height scoring unavailable for this frame; unevaluated counts are not zero."),e.createElement("table",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:2","aria-label":s?"高度有效区域明细":"Height support audit"},e.createElement("thead",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:59"},e.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:66"},e.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:70"},s?"项目／原因":"Support / reason"),e.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:110"},s?"列数":"Columns"))),e.createElement("tbody",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:151"},[[s?"有效配对列":"Valid paired columns","validColumns"],[s?"GT 有效列":"Valid GT columns","gtValidColumns"],[s?"候选水平列":"Candidate horizontal columns","candidateColumns"]].map(([c,i])=>e.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:187",key:i},e.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:201",scope:"row"},c),e.createElement("td",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:228"},n.blocked||!Number.isFinite(n[i])?"N/A":n[i]))),Object.entries(n.excludedReasons??{}).map(([c,i])=>e.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:59",key:c},e.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:73",scope:"row"},t(c)),e.createElement("td",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:106"},Number.isFinite(i)?i:"N/A"))))),e.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:35:18"},s?"配对覆盖率＝配对列／GT 有效列；GT 可重建比例＝GT 有效列／候选列。排除原因不代表模型排名。":"Paired coverage = paired / valid GT columns; GT reconstructible fraction = valid GT / candidate columns. Exclusions are not model rankings.")):e.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:29:9"},s?"此帧没有高度记录。旧结果需重新创建比较；尚未载入的帧请先选择。":"No height record for this frame. Create a new comparison for legacy results, or select a loaded frame."))}function c0(n,a){const s=URL.createObjectURL(new Blob(["\uFEFF",a],{type:"text/csv;charset=utf-8"})),t=document.createElement("a");t.href=s,t.download=n,t.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}const i0=[];function o0({metrics:n,frames:a,expectedFrames:s=i0,groups:t,group:c,status:i,currentFrame:o,onFrame:r,onDownload:f=c0,comparisonId:l="comparison",sdfUnit:m="m",velocityUnit:g="m/s",onReviewSetup:x,frameSplit:h}){const{tr:u,language:d}=me(),[p,w]=E.useState(()=>h?"test":"all"),j=Object.values(n?.frames||{}).some(P=>P.elevation),S=E.useMemo(()=>j?[...t,"elevation"]:t,[t,j]),[v,_]=E.useState(""),y=S.includes(v)?v:c;E.useEffect(()=>_(""),[c]),E.useEffect(()=>w(h?"test":"all"),[h?.sha256,!!h]);const C=E.useMemo(()=>qr({metrics:n,frames:a,expectedFrames:s,groups:S,status:i,units:{sdf:m,velocity:g},frameSplit:h,frameSubset:p}),[n,a,s,S,i,m,g,h,p]),B=C.columns.filter(P=>P.group===y),A=C.summary.filter(P=>P.group===y),[b,M]=E.useState(""),[R,I]=E.useState(0),[N,z]=E.useState(640),$=E.useRef(null),X=B.find(P=>P.id===b)||B[0];E.useEffect(()=>{if(typeof ResizeObserver>"u")return;const P=new ResizeObserver(([W])=>z(Math.max(280,Math.round(W.contentRect.width))));return P.observe($.current),()=>P.disconnect()},[]);const Z=E.useMemo(()=>Yr(C.rows,X?.id,N),[C.rows,X?.id,N]),ne=Math.max(1,Math.ceil(C.rows.length/50)),D=Math.min(R,ne-1),K=C.rows.slice(D*50,(D+1)*50),F=E.useMemo(()=>new Map(C.rows.map(P=>[P.frame,P])),[C.rows]),L=F.get(o),T=C.summary.find(P=>P.id===X?.id);return e.createElement("section",{"data-os-loc":"src/field/SequenceMetrics.jsx:31:9",className:"sequence-metrics",ref:$,"aria-label":u("Sequence loss analysis")},e.createElement("h2",{"data-os-loc":"src/field/SequenceMetrics.jsx:32:3"},u("Per-frame metrics & sequence averages")),e.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:3"},d==="zh"?"统计组":"Statistics group"," ",e.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:53","data-os-action":"","aria-label":"Statistics group",value:y,onChange:P=>_(P.target.value)},S.map(P=>e.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:163",key:P,value:P},P==="elevation"?d==="zh"?"水面高度":"Water-surface elevation":P.toUpperCase())))),y==="elevation"&&e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:34:25"},d==="zh"?"世界 Y 水面高度，不是波峰—波谷浪高或 Hs。固定填值、缺失支持和多层水面不可用于此评分。":"World-Y elevation, not crest-to-trough wave height or Hs. Filled exterior, missing support and multiple surfaces cannot be scored."),y==="elevation"&&e.createElement(s0,{data:n?.frames?.[o]?.elevation}),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:36:3",className:"research-warning"},p==="test"||p.startsWith("test_")?d==="zh"?"Test 报告：仅汇总清单声明的测试帧。":"Test report: only declared test frames are summarized.":p==="train"?d==="zh"?"Train 报告：训练帧表现，不代表未见数据的泛化效果。":"Train report: training-frame performance, not generalization to unseen data.":d==="zh"?"参考报告：不是独立的 Test 结果。":"Reference report: not a Test-only evaluation."," ",d==="zh"?"划分依据训练方清单，不独立核验训练历史。":"Membership follows the supplied manifest; training history is not independently verified."),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:3",className:"frame-split-toolbar"},e.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:40"},d==="zh"?"统计帧集合":"Evaluation subset"," ",e.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:93","data-os-action":"","aria-label":"Evaluation subset",value:p,onChange:P=>{w(P.target.value),I(0)}},Object.entries({all:d==="zh"?"全部（参考）":"All",train:"Train",validation:"Validation",test:"Test",...Ii(d==="zh"),unassigned:d==="zh"?"未划分":"Unassigned"}).map(([P,W])=>e.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:407",key:P,value:P},W)))),e.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:476"},d==="zh"?"仅筛选曲线、统计表和下方 CSV；不改变原始计算或动画。":"Filters curves, tables and the CSVs below; original calculations and playback are unchanged.")),C.total===0&&e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:38:22",role:"status"},d==="zh"?"此集合没有已声明的帧；不补零，也不使用其他集合替代。":"No declared frames in this subset; no zeros or fallback to another subset."),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:39:3"},u("SDF error region: "),e.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:39:32"},C.evaluationRegion==="gt_water_common_distance_support"?u("Conditional GT-water distance support"):C.evaluationRegion==="gt_water"?u("GT water only (GT SDF < 0)"):u("Full domain (valid pairs)")),u(". Occupancy and surface metrics use their own saved validity rules; they are not certified by the distance mask. Velocity metrics unchanged.")),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:40:3",className:"sequence-partial",role:"status"},C.blockedReasons.length?u("Scoring blocked"):C.complete?d==="zh"?"帧记录处理完成":"Processing complete":u("Partial results")," · ",C.calculated," / ",C.total,u(" frame records processed"),i==="error"?u(" · Processing stopped"):""),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:41:3",role:"status"},C.total?T?.valid?d==="zh"?`所选指标有效帧：${T.valid} / ${C.total}；排除 ${T.excluded} 帧。`:`Selected metric valid frames: ${T.valid} / ${C.total}; ${T.excluded} excluded.`:d==="zh"?"所选指标不可用：没有有效数值。处理完成不代表评分有效。":"Selected metric unavailable: no valid values. Completed processing does not imply valid scoring.":d==="zh"?"当前集合为空。":"Selected subset is empty."),C.blockedReasons.length>0&&e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:36",className:"error",role:"alert"},e.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:72"},u("No valid loss can be reported for blocked fields.")),C.blockedReasons.map(P=>e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:181",key:P},u(P))),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:215"},u("Review units and SDF type in Datasets & comparison setup, then click Create comparison again. Old results do not change when declarations are edited. Unit confirmation declares the source scale; it does not convert data.")),x&&e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:466","data-os-action":"",onClick:x},u("Review scoring setup"))),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:43:3"},u("Equal weight per valid frame. N/A is excluded, never zero. RMSE and P95 averages are means of frame metrics, not pooled-voxel metrics. No combined training loss.")),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:3",className:"sequence-toolbar"},e.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:37"},u("Metric curve"),e.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:64","data-os-action":"","aria-label":u("Metric curve"),value:X?.id||"",onChange:P=>M(P.target.value)},B.map(P=>e.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:185",key:P.id,value:P.id},u(P.label))))),e.createElement("span",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:258"},u("Unit: "),u(X?.unit)," · ",X?.direction==="Context"?u("Context metric"):u(X?.direction)+" "+u("is better"))),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:3",className:"sequence-readout"},u("Frame "),o??"—",": ",e.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:72"},Ae(L?.values[X?.id])),u(" · Sequence mean: "),e.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:158"},Ae(T?.mean)),u(" · Valid: "),T?.valid??0," / ",C.total),e.createElement(Qr,{report:C,metric:X,onFrame:r,onDownload:f,comparisonId:l,frameSplit:h}),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:47:3"},d==="zh"?"对应覆盖率（所选帧均值）":"Associated coverage (selected-frame mean)",": ",Ae(C.summary.find(P=>P.id===`${y}.coverage`)?.mean),y==="elevation"&&e.createElement(e.Fragment,null," · ",d==="zh"?"GT 可重建比例":"GT reconstructible fraction",": ",Ae(C.summary.find(P=>P.id==="elevation.gtCoverage")?.mean))),e.createElement(n0,{rows:C.rows,metricKey:X?.id,manifest:h}),e.createElement("figure",{"data-os-loc":"src/field/SequenceMetrics.jsx:49:3",className:"os-metric-figure","data-review-id":"sequence-metric-"+(X?.id||y)},e.createElement("figcaption",{"data-os-loc":"src/field/SequenceMetrics.jsx:49:98"},u(X?.label)||u("Metric curve")),e.createElement("svg",{"data-os-loc":"src/field/SequenceMetrics.jsx:49:164",width:"100%",height:"220",viewBox:`0 0 ${N} 220`,role:"img","aria-label":`${X?.label} over frames; ${u(X?.unit)}`},[Z.min,(Z.min+Z.max)/2,Z.max].map((P,W)=>e.createElement("g",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:58",key:W},e.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:69",x1:"64",x2:N-22,y1:Z.y(P),y2:Z.y(P),stroke:"#d7e1eb",strokeWidth:".75"}),e.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:163",x:"57",y:Z.y(P)+4,textAnchor:"end"},Ae(P)))),Number.isFinite(T?.mean)&&e.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:51:39",x1:"64",x2:N-22,y1:Z.y(T.mean),y2:Z.y(T.mean),stroke:"#7a8797",strokeDasharray:"5 4"}),Z.segments.map((P,W)=>e.createElement("polyline",{"data-os-loc":"src/field/SequenceMetrics.jsx:52:36",key:W,points:P.map(ce=>`${ce.x},${ce.y}`).join(" "),fill:"none",stroke:"#008c9c",strokeWidth:"2"})),Z.points.map(P=>e.createElement(e0,{key:P.frame,point:P,row:F.get(P.frame),selected:P.frame===o,onFrame:r,language:d})),Number.isFinite(o)&&e.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:54:36",x1:Z.x(o),x2:Z.x(o),y1:"25",y2:"185",stroke:"#d36218",strokeDasharray:"3 3"}),e.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:4",x:"64",y:"205"},Z.start),Z.end!==Z.start&&e.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:68",x:N-22,y:"205",textAnchor:"end"},Z.end),e.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:130",x:N/2,y:"205",textAnchor:"middle"},u("Frame")))),e.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:57:3"},d==="zh"?"颜色：训练橙 / 验证紫 / 测试青 / 未划分灰。形状：Anchor 方形 / 插值菱形 / 外推三角 / 未声明圆点。橙圈为当前帧，灰虚线为均值；缺失值不连线。":"Color: Train amber / Validation purple / Test teal / Unassigned gray. Shape: Anchor square / Interpolation diamond / Future extrapolation triangle / Undeclared circle. Orange ring: displayed frame; gray dashed line: mean. Missing values are not connected."),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:58:3",className:"sequence-detail-tables"},e.createElement("h3",{"data-os-loc":"src/field/SequenceMetrics.jsx:58:43"},y==="elevation"?d==="zh"?"水面高度":"Elevation":u(y==="sdf"?"SDF":"Velocity"),u(" sequence summary")),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:59:3"},d==="zh"?"中位数、P95 和总体标准差描述所选帧的分布，不代表统计显著性。":"Median, P95 and population standard deviation describe selected frames, not statistical significance."),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:3",className:"sequence-table-scroll",tabIndex:"0",role:"region","aria-label":u("Scrollable sequence summary")},e.createElement("table",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:116","aria-label":u("Sequence metric summary")},e.createElement("thead",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:166"},e.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:173"},["Metric","Unit","Mean",d==="zh"?"中位数":"Median","P95",d==="zh"?"总体标准差":"Population std. dev.","Minimum","Maximum","Valid / total","Excluded"].map(P=>e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:341",key:P},u(P))))),e.createElement("tbody",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:380"},A.map(P=>e.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:405",key:P.id},e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:420",scope:"row"},u(P.label)),e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:454"},u(P.unit)),[P.mean,P.median,P.p95,P.stddev,P.minimum,P.maximum].map((W,ce)=>e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:540",key:ce,title:W==null?"N/A":String(W)},Ae(W))),e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:608"},P.valid," / ",P.total),e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:638"},P.excluded)))))),e.createElement("h3",{"data-os-loc":"src/field/SequenceMetrics.jsx:61:3"},y==="elevation"?d==="zh"?"水面高度":"Elevation":u(y==="sdf"?"SDF":"Velocity"),u(" per-frame values")),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:3",className:"sequence-toolbar"},e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:37","data-os-action":"",disabled:D===0,onClick:()=>I(D-1)},u("Previous rows")),e.createElement("span",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:135"},u("Page "),D+1," / ",ne,u(" · 50 frames per page")),e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:217","data-os-action":"",disabled:D+1>=ne,onClick:()=>I(D+1)},u("Next rows")),e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:320","data-os-action":"",onClick:()=>{const P=C.rows.findIndex(W=>W.frame===o);P>=0&&I(Math.floor(P/50))}},u("Show current row"))),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:3",className:"sequence-table-scroll",tabIndex:"0",role:"region","aria-label":u("Scrollable per-frame metrics")},e.createElement("table",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:117","aria-label":u("Per-frame metric values")},e.createElement("thead",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:167"},e.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:174"},e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:178"},u("Frame")),e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:200"},d==="zh"?"所属集合":"Split"),B.map(P=>e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:257",key:P.id},u(P.label),e.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:285"},P.unit))))),e.createElement("tbody",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:328"},K.map(P=>e.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:352",key:P.frame,className:P.frame===o?"selected-frame":""},e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:425",scope:"row"},e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:441","data-os-action":"","aria-label":`Go to frame ${P.frame}`,"aria-current":P.frame===o?"true":void 0,disabled:!P.available,onClick:()=>r(P.frame)},P.frame),!P.calculated&&e.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:631"},u("Not calculated"))),e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:674"},e.createElement(mc,{manifest:h,frame:P.frame})),B.map(W=>e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:755",key:W.id,title:P.values[W.id]==null?"N/A":String(P.values[W.id])},Ae(P.values[W.id])))))))),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:3",className:"sequence-toolbar"},e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:37","data-os-action":"",disabled:!n||!C.total,onClick:()=>f(`${l}_${p}_frames.csv`,Os(C,"frames"))},p==="all"?u("Export all frames CSV"):d==="zh"?"导出当前集合 CSV":"Export subset CSV"),e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:274","data-os-action":"",disabled:!n||!C.total,onClick:()=>f(`${l}_${p}_sequence_summary.csv`,Os(C,"summary"))},u("Export sequence summary CSV")),e.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:464"},d==="zh"?`两个场组 · 当前集合 ${p} 的所有帧（不限本页） · 完整精度`:`Both field groups · all ${p} frames (not only this page) · full numeric precision`))))}function r0({group:n="sdf"}){const{tr:a}=me();function s(){const t=URL.createObjectURL(new Blob([JSON.stringify(Xr(),null,2)],{type:"application/json"})),c=document.createElement("a");c.href=t,c.download="OceanScope_metric_definitions.json",c.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}return e.createElement("details",{"data-os-loc":"src/field/LossDefinitions.jsx:7:10",className:"loss-definitions"},e.createElement("summary",{"data-os-loc":"src/field/LossDefinitions.jsx:7:48"},a("Evaluation Metrics / Loss Definitions")),e.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:112"},a("g = Ground Truth; p = Prediction. Evaluation metrics, not a weighted training loss.")),e.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:210"},a("Display quality never changes numerical metrics. Units follow dataset declarations; declaring units does not convert data.")),Vt.filter(t=>t.group===n||t.group==="both"&&n!=="elevation").map(t=>e.createElement("article",{"data-os-loc":"src/field/LossDefinitions.jsx:7:442",key:t.id},e.createElement("strong",{"data-os-loc":"src/field/LossDefinitions.jsx:7:462"},a(t.label)),e.createElement("code",{"data-os-loc":"src/field/LossDefinitions.jsx:7:492"},t.formula),e.createElement("small",{"data-os-loc":"src/field/LossDefinitions.jsx:7:516"},a(t.direction),a(" is better"),t.direction==="Context"?a(" (interpret with error)"):""," · ",a(t.unitKind)),e.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:643"},a(t.domain)," ",a(t.caveats)))),e.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:692"},a("Sequence statistics give equal weight to each valid frame, not each voxel. Missing values are excluded; valid/excluded frame counts are reported.")),e.createElement("button",{"data-os-loc":"src/field/LossDefinitions.jsx:7:852","data-os-action":"",onClick:s},a("Export metric definitions")))}function l0({lattice:n,comparison:a}){const{tr:s}=me();return e.createElement("details",{"data-os-loc":"src/field/AlignmentReport.jsx:7:10",className:"alignment-report"},e.createElement("summary",{"data-os-loc":"src/field/AlignmentReport.jsx:7:48"},s("Alignment and provenance")),e.createElement("dl",{"data-os-loc":"src/field/AlignmentReport.jsx:7:99"},e.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:103"},e.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:108"},s("Comparison")),e.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:135"},a?.id||"—")),e.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:171"},e.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:176"},s("Canonical lattice")),e.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:210"},n?.dimensions?.join(" × ")||"—",s(" voxels"))),e.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:279"},e.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:284"},s("Voxel size")),e.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:311"},n?.voxelSize?.map(t=>Number(t).toPrecision(4)).join(" × ")||"—")),e.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:405"},e.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:410"},s("Policy")),e.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:433"},s("Prediction sampled in world space onto Ground Truth voxel centres.")))))}function d0(n){return`${n.labels?.prediction?.exportStem||"prediction"}_${n.runId||n.id}`.replace(/[<>:"/\\|?*\x00-\x1f]/g,"_").slice(0,125)}function f0({frame:n,lattice:a,settings:s,plane:t,sliceIndex:c,angle:i=30,sectionPercent:o=50,rotationAxis:r="y"}){const f=S=>({status:"unavailable",reason:S});if(t==="oblique"&&r!=="y")return f("tilted");if(s?.previewOnly)return f("single");if(["gt","prediction"].some(S=>s?.sdf?.[S]?.semantics!=="full"))return f("semantics");const l=s?.heightComparison;if(l?.surfaceValidated!==!0||l?.negativeInside!==!0||l?.upAxis!=="Y"||l?.coordinateUnit!=="m"||l?.frameTimeAligned!==!0)return f("declaration");if(["gt","prediction"].some(S=>s.sdf[S].unit!=="m"))return f("units");if(!["xy","yz","oblique"].includes(t))return f("plane");const m=a?.dimensions,g=a?.axisSteps,x=a?.origin;if(!m||m.length!==3||m.some(S=>!Number.isInteger(S)||S<2)||!x||x.length!==3||x.some(S=>!Number.isFinite(S))||!g||g.length!==3||g.some((S,v)=>S.length!==3||S.some((_,y)=>!Number.isFinite(_)||(v===y?_<=0:Math.abs(_)>1e-12))))return f("lattice");const h=n?.groups?.sdf?.ground_truth,u=n?.groups?.sdf?.prediction;if([h,u].some(S=>!S||!Array.isArray(S.shape)||S.shape.length!==3||S.shape.some((v,_)=>v!==m[_])||S.values?.length!==m[0]*m[1]*m[2]||S.mask&&S.mask.values?.length!==S.values.length))return f("fields");if(t==="oblique"){const S=uc(a,i,o);if(!S)return f("lattice");const v=_=>S.degenerate?[]:Array.from({length:S.width},(y,C)=>{let B=null,A=null;for(let b=S.height-1;b>=0;b--){const M=Gi(_,a,S.point(C,b));if(M===null||b===S.height-1&&M<=0)break;if(A!==null&&A>0&&M<=0){B=x[1]+g[1][1]*(b+-M/(A-M));break}A=M}return[S.range[0]+(S.range[1]-S.range[0])*C/(S.width-1),B]});return{status:"ready",axis:"oblique",angle:i,offset:S.offset,result:Ns(v(h),v(u))}}const d=t==="xy"?2:0,p=t==="xy"?0:2;if(!Number.isInteger(c)||c<0||c>=m[d])return f("lattice");const w=(S,v,_)=>S+m[0]*(v+m[1]*_);function j(S){return Array.from({length:m[p]},(v,_)=>{const y=t==="xy"?_:c,C=t==="xy"?c:_;let B=null,A=null;for(let b=m[1]-1;b>=0;b--){const M=w(y,b,C),R=S.values[M];if(!Number.isFinite(R)||S.mask&&!S.mask.values[M]||b===m[1]-1&&R<=0)break;if(A!==null&&A>0&&R<=0){B=x[1]+g[1][1]*(b+-R/(A-R));break}A=R}return[x[p]+g[p][p]*_,B]})}return{status:"ready",axis:p===0?"x":"z",offset:x[d]+g[d][d]*c,result:Ns(j(h),j(u))}}const Ds={tilted:["倾斜截面用于场值与结构分析。高度比较请切换 XY、YZ 或绕 Y 的竖直斜切。","Tilted sections show field values and structure. For height comparison use XY, YZ or a vertical Y-axis section."],semantics:["当前预测含水外填充值，不能把填值边界当作可信水面。保留原有 SDF 切片和条件性距离指标。","The prediction has a filled or undeclared exterior; filled boundaries cannot establish a trustworthy water surface. SDF slices and conditional distance scores remain available."],declaration:["还需明确水面有效性、Y 向上、米制坐标、内负外正和帧时间对齐，才能启用高度比较。","Height comparison requires explicit surface validity, Y-up metre coordinates, negative-inside signs and aligned frame times."],units:["两组 SDF 的单位需要明确为米。","Both SDF units must be declared in metres."],plane:["请选择 XY 或 YZ 竖直切面以提取高度曲线。XZ 是水平切面。","Select a vertical XY or YZ section. XZ is horizontal."],lattice:["此坐标网格尚不满足高度采样条件。","This lattice does not meet height-sampling requirements."],fields:["当前帧缺少完整、相互对应的两组 SDF。","This frame lacks complete, matching SDF fields."]};function m0({frame:n,lattice:a,comparison:s,plane:t,sliceIndex:c,angle:i=30,sectionPercent:o=50,rotationAxis:r="y",frameNumber:f,busy:l}){const{language:m}=me(),g=m==="zh",x=E.useMemo(()=>l?null:f0({frame:n,lattice:a,settings:s.settings,plane:t,sliceIndex:c,angle:i,sectionPercent:o,rotationAxis:r}),[l,n,a,s.settings,t,c,i,o,r]);return x?.status==="ready"?e.createElement(Vi,{result:x.result,axis:x.axis,kind:"sdf",labels:{a:s.labels?.gt?.displayName,b:s.labels?.prediction?.displayName},metadata:{kind:"validated_sdf_height",dataset_a:s.groundTruthId,dataset_b:s.predictionId,frame:f,...Li(x.axis,x.offset,i),reference_y_m:0,meters_per_unit:1,sampling:t==="oblique"?"uppermost_valid_zero_crossing_trilinear_columns":"uppermost_valid_zero_crossing_linear",time_alignment:"declared_aligned"}}):e.createElement("section",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:10",className:"height-unavailable","aria-label":g?"水面高度比较适用性":"Surface-height eligibility"},e.createElement("h2",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:107"},g?"水面高度比较":"Surface-height comparison"," · ",l?g?"加载中":"Loading":g?"不可用":"Unavailable"),e.createElement("p",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:212"},l?g?"等待当前帧加载完成。":"Waiting for the current frame.":(Ds[x?.reason]||Ds.fields)[g?0:1]))}const Da=[["heightMae","Height MAE","高度 MAE","m"],["breakingMae","Breaking-region MAE","破碎区 MAE","m"],["amplitudeSlope","Amplitude slope","振幅斜率",""],["velocityRelativeL2","Underwater relative L2","水下速度相对误差",""],["velocityMedianCosine","Median direction cosine","方向余弦中位数",""]];function b0(n){const a=["frame",...Da.map(i=>i[0]),"heightRmse","heightBias","pairedColumns","gtColumns","pairedCoverage","breakingColumns","velocityVoxels","velocityGtEligibleVoxels","velocityCoverage","angularExcludedCount","heightErrorPercent","breakingErrorPercent"],s=i=>i==null?"":`"${String(i).replaceAll('"','""')}"`,t=["protocol_version","unit_convention","height_rule","velocity_rule","aggregation","status"],c=[n.version,n.units,n.height,n.velocity,n.aggregation,n.status];return[[...a,...t].map(s).join(","),...Object.entries(n.frames).map(([i,o])=>[...a.map(r=>r==="frame"?i:o[r]),...c].map(s).join(","))].join(`\r
`)}function Ws(n,a=!1){let s=1/0,t=-1/0;for(const c of n)if(c)for(let i=0;i<c.values.length;i++){const o=c.values[i];!Number.isFinite(o)||c.mask&&!c.mask.values[i]||(s=Math.min(s,o),t=Math.max(t,o))}if(!Number.isFinite(s))return a?[-1,1]:[0,1];if(a){const c=Math.max(Math.abs(s),Math.abs(t),1e-8);return[-c,c]}return s===t?[s-.01,t+.01]:[s,t]}function Ec(n,a){return n&&(!n.mask||n.mask.values[a])&&Number.isFinite(n.values[a])?n.values[a]:null}function p0(n,a,s){const t=["ground_truth","prediction","error"].map(r=>n.groups.height[r]),[c,,i]=t[0].shape,o=["frame,x_m,z_m,gt_height_m,prediction_height_m,prediction_minus_gt_m,gt_valid,prediction_valid,paired_valid"];for(let r=0;r<i;r++)for(let f=0;f<c;f++){const l=f+c*r,m=t.map(g=>Ec(g,l));o.push([s,a.origin[0]+f*a.axisSteps[0][0],a.origin[2]+r*a.axisSteps[2][2],...m.map(g=>g??""),...m.map(g=>g===null?0:1)].join(","))}return o.join(`\r
`)}const Be=(n,a=4)=>Number.isFinite(n)?n.toFixed(a):"—",Ts=n=>Number.isFinite(n)?`${(100*n).toFixed(2)}%`:"—";function u0({protocol:n,frame:a,lattice:s,frameNumber:t,busy:c,onFrame:i}){const{language:o}=me(),r=o==="zh",[f,l]=E.useState([.5,.5]);E.useEffect(()=>l([.5,.5]),[t]);const m=E.useMemo(()=>["ground_truth","prediction","error"].map(v=>a?.groups.height?.[v]),[a]),g=E.useMemo(()=>[Ws(m.slice(0,2)),Ws([m[2]],!0)],[m]);if(!n)return null;const x=n.frames[String(t)],h=!c&&x&&m.every(Boolean),u=m[0]?.shape[0]||1,d=m[0]?.shape[2]||1,p=Math.min(u-1,Math.floor(f[0]*u)),w=Math.min(d-1,Math.floor(f[1]*d)),j=p+u*w,S=["A · Gentle GT","B · Best_1027",r?"B − A · 高度差":"B − A · Height difference"];return e.createElement("section",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:22:10",className:"reconstruction-analysis","aria-label":r?"Best_1027 重建评估":"Best_1027 reconstruction evaluation","aria-busy":c},e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:5",className:"reconstruction-heading"},e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:45"},e.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:50",className:"reconstruction-eyebrow"},"BEST_1027 · ",r?"三帧对比":"THREE-FRAME PILOT"),e.createElement("h2",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:145"},r?"水面高度与水下速度":"Surface height & underwater velocity")),e.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:219",className:"reconstruction-frame"},r?"帧":"Frame"," ",h?t:"…")),e.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:24:5"},r?"当前结果覆盖 1001、1049、1096 三帧，采用下方明确记录的计算规则。不是完整 96 帧评分，也未划分 Test 集。长度和速度沿用 v2 的 m、m/s 模拟尺度约定。":"Frames 1001, 1049 and 1096 only, under the explicit protocol below. Not a full 96-frame or Test-set score. Length and velocity inherit the v2 m / m/s simulation convention."),h?e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:7",className:"reconstruction-cards"},Da.map(([v,_,y,C])=>e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:89",key:v},e.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:104"},r?y:_),e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:131"},Be(x[v])," ",e.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:158"},C))))),e.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:7",className:"reconstruction-support"},r?"高度共同有效列":"Paired height columns"," ",e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:88"},x.pairedColumns.toLocaleString()," / ",x.gtColumns.toLocaleString())," (",Ts(x.pairedCoverage),") · ",r?"水下速度覆盖率":"Underwater velocity coverage"," ",e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:261"},Ts(x.velocityCoverage))," · ",r?"方向计算排除低速点":"Low-speed directional exclusions"," ",x.angularExcludedCount),e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:28:7",className:"reconstruction-maps"},m.map((v,_)=>e.createElement("figure",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:28:70",key:S[_],"aria-label":S[_]},e.createElement("figcaption",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:29:9"},S[_]),e.createElement(bc,{slice:{width:u,height:d,values:v.values},maskSlice:v.mask,range:g[_===2?1:0],palette:_===2?"error":"ground-truth",plane:"xz",aspect:u/d,crosshair:f,onCrosshair:l}),e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:9",className:`reconstruction-scale ${_===2?"difference":""}`},e.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:80"},Be(g[_===2?1:0][0],3)," m"),e.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:134"},Be(g[_===2?1:0][1],3)," m")),e.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:32:9"},r?"选点":"Probe",": ",Be(Ec(v,j))," m")))),e.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:34:7",className:"reconstruction-caption"},"X → · Z ↑ · X [",Be(s.origin[0],2),", ",Be(s.origin[0]+(u-1)*s.axisSteps[0][0],2),"] m · Z [",Be(s.origin[2],2),", ",Be(s.origin[2]+(d-1)*s.axisSteps[2][2],2),"] m",e.createElement("br",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:34:270"}),r?"俯视图使用 0.05 m 网格；A/B 同色标，误差红色表示预测偏高，蓝色表示偏低；斜纹为无效区域。点击任一图联动选点。":"Top-down 0.05 m grid. A/B share a scale; red means prediction higher, blue lower. Hatched cells are invalid. Click a map for a shared probe."," · X=",Be(s.origin[0]+p*s.axisSteps[0][0],3),", Z=",Be(s.origin[2]+w*s.axisSteps[2][2],3))):e.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:25:15",role:"status"},r?"等待当前帧加载完成；不显示上一帧的指标。":"Waiting for this frame; previous-frame scores are hidden."),e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:5",className:"reconstruction-table-wrap"},e.createElement("table",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:48","aria-label":r?"三帧重建指标":"Three-frame reconstruction metrics"},e.createElement("thead",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:121"},e.createElement("tr",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:128"},e.createElement("th",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:132"},r?"帧":"Frame"),Da.map(([v,_,y,C])=>e.createElement("th",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:205",key:v},r?y:_,C&&` (${C})`)))),e.createElement("tbody",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:275"},Object.entries(n.frames).map(([v,_])=>e.createElement("tr",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:335",key:v,"aria-current":h&&Number(v)===t?"true":void 0},e.createElement("td",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:418"},e.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:422","data-os-action":"",disabled:c,onClick:()=>i(Number(v))},v)),Da.map(([y])=>e.createElement("td",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:528",key:y},Be(_[y])))))))),e.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:5"},r?"三帧合并：振幅斜率":"Pooled pilot: amplitude slope"," ",e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:61"},Be(n.pooled.amplitudeSlope))," · ",r?"速度相对误差":"velocity relative L2"," ",e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:162"},Be(n.pooled.velocityRelativeL2))," · ",r?"方向余弦中位数":"median direction cosine"," ",e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:271"},Be(n.pooled.velocityMedianCosine)),e.createElement("br",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:334"}),e.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:339"},r?"合并分子与分母后求比值；方向指标使用全部有效方向余弦的中位数，不是逐帧数值的平均。振幅斜率以 1 为匹配参考，速度相对误差越小越好，方向余弦越接近 1 越好。":"Ratios use pooled sums; direction uses the median of all eligible cosines, not frame averages. Amplitude reference: 1. Lower relative error and cosine closer to 1 are preferable.")),e.createElement("details",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:38:5",className:"reconstruction-protocol"},e.createElement("summary",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:38:50"},r?"本次计算规则与未计算项":"Evaluation protocol & unavailable metrics"),e.createElement("ul",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:39:7"},e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:39:11"},r?"高度：沿 Y 提取内负外正的线性过零位置；排除多层水面和上方缺失支撑，仅比较双方共同有效列。":n.height),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:40:7"},r?"破碎区：在共同有效高度列中选择 X > −0.3 m。当前显示绝对误差（m），R 未定义，因此不显示归一化百分比。":n.breaking+" R is undefined: absolute metres only, no normalized percentages."),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:41:7"},r?"振幅：每帧在同一共同有效区域分别去均值，再计算 Σ(h̃GT·h̃预测) / Σ(h̃GT²)。":n.amplitude),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:42:7"},r?"水下速度：从原网格索引 0 开始，每两个格点取一个，得到 0.1 m 网格；采用 GT 水面下至少 10 cm 且双方 SDF/速度都有效的区域。方向中位数排除任一速度 ≤ 10⁻⁸ m/s 的点。":n.velocity),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:43:7"},r?"右侧和下方通用场指标仍基于原生 0.05 m 网格及其共同有效域，与这里的水下筛选指标分开。":"Generic volume metrics use native 0.05 m common support, separate from the underwater protocol here."),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:44:7"},r?"沿用 v2 的米制、Y 向上和同帧配对约定；新文件本身未独立声明物理单位。读取器报告 VDB 225/224 格式兼容提示，这些是初步参考结果。":n.units+" "+n.reader),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:45:7"},r?"尚未计算：归一化高度/破碎区百分比、各波长增益、独立 M1 基线。缺失项目不以零代替。":n.unavailable.join("; ")))),e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:5",className:"reconstruction-actions"},e.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:45","data-os-action":"",onClick:()=>ut("Best_1027_pilot_metrics.csv","\uFEFF"+b0(n),"text/csv;charset=utf-8")},r?"下载三帧指标 CSV":"Pilot metrics CSV"),e.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:229","data-os-action":"",onClick:()=>ut("Best_1027_evaluation_protocol.json",JSON.stringify(n,null,2))},r?"下载指标与规则 JSON":"Metrics & protocol JSON"),e.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:403","data-os-action":"",disabled:!h,onClick:()=>ut(`Best_1027_${t}_height_map.csv`,"\uFEFF"+p0(a,s,t),"text/csv;charset=utf-8")},r?"下载当前高度图 CSV":"Current height map CSV")))}const Ha="oceanscope.field-view.v1",_c="oceanscope.bookmarks.v2.field",ee=n=>{throw Error(n)},ka=n=>n!==null&&typeof n=="object"&&!Array.isArray(n),$e=(n,a=-1e9,s=1e9)=>typeof n=="number"&&Number.isFinite(n)&&n>=a&&n<=s,Vs=(n,a=-1e9,s=1e9)=>Array.isArray(n)&&n.length===2&&n.every(t=>$e(t,a,s));function wc(n){const a=n.comparison,s=n.processing.lattice;return JSON.stringify({comparison:a.id,gt:a.groundTruthId,prediction:a.settings?.previewOnly?null:a.predictionId,groups:a.availableGroups,settings:a.settings,lattice:{dimensions:s.dimensions,origin:s.origin,axisSteps:s.axisSteps},directory:n.fieldDirectory,frames:n.processing.frames.map(t=>t.frame)})}function cn(n,a){(!ka(n)||n.schema!==Ha)&&ee("format"),(typeof n.name!="string"||!n.name.trim()||n.name.trim().length>80)&&ee("name");const s=n.settings;ka(s)||ee("settings"),s.representation!==void 0&&s.representation!==Qn&&ee("settings"),s.representation===Qn&&s.group!=="sdf"&&ee("group"),(typeof s.caseId!="string"||!s.caseId||s.caseId.length>100||typeof n.sourceSignature!="string"||n.sourceSignature.length>1e5)&&ee("dataset"),(!Number.isInteger(s.frame)||!$e(s.frame,0,1e7))&&ee("frame"),(!["sdf","velocity"].includes(s.group)||!["split","overlay","wire-overlay","gt","prediction"].includes(s.mode)||!["balanced","fine"].includes(s.quality)||!["magnitude","x","y","z"].includes(s.component))&&ee("settings"),(!["xy","xz","yz","oblique"].includes(s.plane)||!Number.isInteger(s.sliceIndex)||!$e(s.sliceIndex,0,1e7)||!$e(s.angle,0,180)||!$e(s.sectionPercent,0,100))&&ee("section");for(const i of["showPlane","showContext","showGt","showPrediction"])typeof s[i]!="boolean"&&ee("settings");(!$e(s.gtOpacity,.1,1)||!$e(s.predictionOpacity,.1,1)||!Number.isInteger(s.vectorDensity)||!$e(s.vectorDensity,1,2e4)||!$e(s.arrowScale,.001,1e6))&&ee("settings"),s.glyphFocusIndex!==void 0&&(s.group!=="velocity"||!["split","overlay"].includes(s.mode)||!Number.isSafeInteger(s.glyphFocusIndex)||s.glyphFocusIndex<0)&&ee("settings"),s.linkedVelocityIndex!==void 0&&(!Number.isSafeInteger(s.linkedVelocityIndex)||s.linkedVelocityIndex<0||s.group!=="velocity"||!["split","overlay"].includes(s.mode)||s.plane!=="xz"||s.glyphFocusIndex!=null&&s.glyphFocusIndex!==s.linkedVelocityIndex)&&ee("probe"),s.overlayStyle!==void 0&&(s.mode!=="overlay"||s.group!=="velocity"||!["errors","angle","speed","arrows"].includes(s.overlayStyle))&&ee("settings"),s.glyphMode!==void 0&&!["direction","scaled"].includes(s.glyphMode)&&ee("settings"),s.sourceRange!==null&&(!Vs(s.sourceRange)||s.sourceRange[1]<=s.sourceRange[0])&&ee("color"),(!ka(s.errorScale)||typeof s.errorScale.locked!="boolean"||!$e(s.errorScale.limit,1e-6,1e9))&&ee("color"),Vs(s.crosshair,0,1)||ee("probe"),(!ka(s.playback)||typeof s.playback.loop!="boolean"||![.25,.5,1,2].includes(s.playback.speed)||!$e(s.playback.fps,1,120))&&ee("settings");const t=Ui(s.region,2),c=Ji(n.camera);if((c.near===null||c.far===null)&&ee("camera"),a){const i=a.find(f=>f.id===s.caseId);i||ee("dataset"),n.sourceSignature!==wc(i)&&ee("source"),(s.representation===Qn?!ta(i).includes(s.frame):!i.processing.frames.some(f=>f.frame===s.frame))&&ee("frame"),(!i.comparison.availableGroups.includes(s.group)||s.showContext&&!i.comparison.availableGroups.includes("sdf"))&&ee("group"),i.comparison.settings?.previewOnly&&(s.mode!=="gt"||s.showPrediction||t)&&ee("single");const o=i.processing.lattice,r=s.plane==="xy"||s.plane==="oblique"?2:s.plane==="yz"?0:1;s.linkedVelocityIndex!==void 0&&!yc(Ct(s.linkedVelocityIndex,o),s.plane,s.sliceIndex,s.crosshair)&&ee("probe"),s.glyphFocusIndex>=o.dimensions.reduce((f,l)=>f*l,1)&&ee("settings"),(s.sliceIndex>=o.dimensions[r]||s.plane==="oblique"&&!jt(o))&&ee("section")}return{schema:Ha,name:n.name.trim(),sourceSignature:n.sourceSignature,settings:{...s.representation?{representation:s.representation}:{},...Qi(s.rotationAxis),...Ki(s.shading),caseId:s.caseId,frame:s.frame,group:s.group,mode:s.mode,quality:s.quality,component:s.component,plane:s.plane,sliceIndex:s.sliceIndex,angle:s.angle,sectionPercent:s.sectionPercent,showPlane:s.showPlane,showContext:s.showContext,showGt:s.showGt,showPrediction:s.showPrediction,gtOpacity:s.gtOpacity,predictionOpacity:s.predictionOpacity,vectorDensity:s.vectorDensity,arrowScale:s.arrowScale,...s.linkedVelocityIndex!=null?{linkedVelocityIndex:s.linkedVelocityIndex}:{},...s.overlayStyle?{overlayStyle:s.overlayStyle}:{},...s.glyphMode?{glyphMode:s.glyphMode}:{},...s.glyphFocusIndex!=null?{glyphFocusIndex:s.glyphFocusIndex}:{},sourceRange:s.sourceRange?[...s.sourceRange]:null,errorScale:{locked:s.errorScale.locked,limit:s.errorScale.limit},crosshair:[...s.crosshair],...t?{region:t}:{},playback:{speed:s.playback.speed,loop:s.playback.loop,fps:s.playback.fps}},camera:c}}function h0(n,a){new TextEncoder().encode(n).length>eo&&ee("size");let s;try{s=JSON.parse(n)}catch{ee("json")}return cn(s,a)}function g0(n){let a;try{a=n.getItem(_c)}catch{ee("storage")}if(a===null)return[];try{const s=JSON.parse(a),t=new Set;return(s.schema!=="oceanscope.field-library.v1"||!Array.isArray(s.items)||s.items.length>hc)&&ee("library"),s.items.map(c=>((typeof c.id!="string"||!c.id||t.has(c.id))&&ee("library"),t.add(c.id),{id:c.id,...cn(c)}))}catch{ee("library")}}function y0(n,a){a.length>hc&&ee("limit");const s=new Set,t=a.map(c=>((typeof c.id!="string"||!c.id||s.has(c.id))&&ee("library"),s.add(c.id),{id:c.id,...cn(c)}));try{n.setItem(_c,JSON.stringify({schema:"oceanscope.field-library.v1",items:t}))}catch{ee("storage")}}const zs={...Yi,format:["请使用场比较方案 JSON；水面方案、指标和数据说明文件不能作为场方案导入。","Use a field-view JSON. Wave views, metrics and data-info files cannot be imported as field views."],dataset:["当前样例中找不到方案指定的数据。","The saved dataset is not available in the current samples."],source:["样例身份、网格或单位声明已改变，未应用旧方案。","Dataset identity, grid or unit declarations changed; the old view was not applied."],group:["当前样例不提供方案指定的 SDF 或速度场。","This sample does not provide the saved SDF or velocity group."],section:["切片索引或斜切参数超出当前网格范围。","The slice index or oblique settings are outside the current grid."],single:["单组 GT 方案不能包含预测显示或双组模式。","A single GT view cannot use prediction layers or paired display modes."],probe:["切片探针位置必须在 0–100% 范围内。","The slice probe must stay within 0–100%."],color:["色标范围无效；请检查上下限。","Invalid color range; check its limits."],size:["文件超过 2 MB，请选择场比较方案 JSON。","File exceeds 2 MB; select a field-view JSON."],load:["场方案恢复未完成，数据或三维视图加载失败。请检查页面提示后重试。","Field view restoration failed while loading data or 3D. Check the page message and try again."]};function x0(n,a){return zs[n.message]?.[a?0:1]||zs.load[a?0:1]}const v0=[1007,1023,1039,1057,1073,1089],E0=[["mae_m","Height MAE","高度 MAE","m","pooled common columns"],["mae_pct","Height MAE / R","高度 MAE / R","% R","pooled common columns"],["bias_pct","Signed height bias / R","有符号高度偏差 / R","% R","pooled common columns"],["steep_pct","Steep-column MAE / R","陡坡列 MAE / R","% R","GT slope top 15%, per frame"],["calm_cells_pct","Non-steep-column MAE / R","非陡坡列 MAE / R","% R","remaining GT slope columns"],["breaking_band_pct","Breaking-band MAE / R","破浪带 MAE / R","% R","strict -0.30 < X < 1.10"],["calm_band_pct","Calm-band MAE / R","平静带 MAE / R","% R","strict -7.90 < X < -1.50"],["amplitude_slope","Amplitude slope","振幅斜率","ratio","pooled after per-frame demeaning"],["correlation","Height correlation","高度相关系数","ratio","pooled after per-frame demeaning"],["flicker_pct","Adjacent-frame error change / R","相邻帧误差变化 / R","% R","adjacent pairs, no time-step division"],["gt_range_m","Observed GT height range","观测 GT 高度范围","m","GT max minus min over all frames"],["pct_relative_to_m","Normalization reference R","归一化参考 R","m","fixed protocol parameter"]],_0=[["rel_rmse","Relative RMSE — pooled","相对 RMSE — 全体素汇总","ratio","sqrt(sum error energy / sum GT energy)"],["rel_rmse_frame_mean","Relative RMSE — frame mean","相对 RMSE — 逐帧平均","ratio","arithmetic mean of frame relative RMSE"],["cos_median","Direction cosine median","方向余弦中位数","ratio","median over all selected voxels, not mean of frame medians"],["speed_ratio","Mean speed ratio B / GT","平均速度比 B / GT","ratio","mean |B| / mean |GT|"],["vec_mae","Vector MAE","矢量 MAE","source velocity unit","mean norm of vector error"],["gt_mean_speed","GT mean speed","GT 平均速度","source velocity unit","mean norm of GT velocity"]];function Sc(n,{subset:a="all",grid:s="coarse",frame:t=n.frameIds[0]}={}){if(!["all","six"].includes(a)||!["fine","coarse"].includes(s)||!n.frameIds.includes(t))throw Error("Invalid metric selection");const c=[],i=n.frameIds,o=n.summary.height,r={runId:n.runId,protocolSha256:n.protocol.sourceScriptSha256,manifestA:n.datasetA.manifestSha256,manifestB:n.datasetB.manifestSha256};function f(d,p,w,j,S,v,_,y,C=null,B="defined by frozen protocol",A="",b=null){const M=Number.isFinite(j)&&!A;c.push({id:d,label:p,labelZh:w,value:M?j:null,unit:S,aggregation:v,scope:_,frameIds:[...y],validCount:C,countStatus:C==null?"not recorded in frozen result":"recorded",status:M?"available":"unavailable",reason:A||(M?"":"Value not recorded or nonfinite in source"),denominator:{formula:B,value:b},source:r})}for(const[d,p,w,j,S]of E0){let v="",_=["mae_m","mae_pct","bias_pct"].includes(d)?o.cells_scored:null;o.cells_scored===0&&!["gt_range_m","pct_relative_to_m"].includes(d)&&(v="No common support"),d==="flicker_pct"&&(i.length<2||i.some((y,C)=>C>0&&y!==i[C-1]+1))&&(v="Requires consecutive adjacent frames"),f("height."+d,p,w,o[d],j,S,"sequence height: all evaluated frames",i,_,j==="% R"?"reference range R":"metric-specific support",v,j==="% R"?o.pct_relative_to_m:null)}for(const d of["gain","coherence"])for(const p of[.3,.6,1.2,2.4,4.8])f(`height.${d}.${p}`,`${d} · λ ${p} m`,`${d==="gain"?"增益":"相干度"} · λ ${p} m`,o[d]?.[String(p)],"ratio","pooled DoG band sums; common support and wider-filter weight > 0.7","sequence height: all evaluated frames",i,null,d==="gain"?"GT band energy":"GT band energy × prediction band energy",o.cells_scored===0?"No common support":"");f("footprint_iou","Wet-column footprint IoU","有水列范围 IoU",n.summary.footprint_iou,"ratio","pooled intersection / union","sequence wet columns",i,null,"wet-column union"),f("volume.iou","Water volume IoU","水体素 IoU",n.summary.volume?.iou,"ratio","pooled intersection / union","sequence water voxels (sdf < 0 and valid)",i,null,"water-voxel union"),f("volume.rec_over_gt","Water volume B / GT","水体积比 B / GT",n.summary.volume?.rec_over_gt,"ratio","pooled B volume / GT volume","sequence water voxels (sdf < 0 and valid)",i,null,"GT water-voxel count");const l=a==="all"?i:v0,m=n.summary.velocity[a==="all"?"all_frames":"velocity_net_6_frames"],g=m?.[s==="fine"?"grid_0.05m":"grid_0.1m"],x=n.rows.filter(d=>l.includes(d.frame)),h=x.map(d=>d.velocity?.[s]?.gtEnergy),u=h.length===l.length&&h.every(Number.isFinite)?h.reduce((d,p)=>d+p,0):null;for(const[d,p,w,j,S]of _0){let v=g?.voxels===0?"No valid velocity support":"";d.startsWith("rel_rmse")&&(u===0||d==="rel_rmse_frame_mean"&&h.some(_=>_===0))&&(v="Zero GT energy makes relative RMSE undefined"),(!m||JSON.stringify(m.frames)!==JSON.stringify(l))&&(v="Frame set does not match archived aggregate"),f("velocity."+d,p,w,g?.[d],j,S,`${a==="all"?"all evaluated frames":"fixed six frames (not train/test split)"}; ${s==="fine"?"native 0.05 XYZ":"XZ 2×2 average, Y unchanged (~0.10 / 0.05 / 0.10)"}`,l,g?.voxels??null,d.startsWith("rel_rmse")?"GT velocity energy":"valid velocity support",v,d==="rel_rmse"?u:null)}return c}function w0(n){const a=["id","value","status","reason","unit","scope","aggregation","frameIds","validCount","countStatus","denominator","source"],s=t=>'"'+String(t==null?"":typeof t=="object"?JSON.stringify(t):t).replaceAll('"','""')+'"';return[a.join(","),...n.map(t=>a.map(c=>s(t[c])).join(","))].join(`
`)}function S0({bundle:n,subset:a,frame:s,zh:t,onDownload:c,selectedGrid:i,onGrid:o}){const[r,f]=E.useState("coarse"),l=i??r;function m(x){f(x),o?.(x)}const g=E.useMemo(()=>Sc(n,{subset:a,grid:l,frame:s}),[n,a,l,s]);return e.createElement("details",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:7:9",className:"complete-metrics"},e.createElement("summary",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:7:47"},t?"完整指标 · 范围、网格与聚合":"Complete metrics · scope, grid and aggregation"),e.createElement("p",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:8:3"},t?"高度与体积保持全96帧；上方帧集合只切换速度汇总。固定六帧不是训练/测试划分。缺失计数表示原件未记录，不推测或补零。":"Height and volume retain all96 frames; the frame-set selector changes velocity aggregates only. Fixed six is not a train/test split. Missing counts were not recorded, never inferred or filled with zero."),e.createElement("label",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:3"},t?"速度网格":"Velocity grid"," ",e.createElement("select",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:38","data-os-action":"","aria-label":"Reference detail grid",value:l,onChange:x=>m(x.target.value)},e.createElement("option",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:132",value:"coarse"},t?"粗网格 · XZ 2×2 / Y不变":"Coarse · XZ 2×2 / unchanged Y"),e.createElement("option",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:221",value:"fine"},t?"细网格 · 原生0.05":"Fine · native0.05"))),e.createElement("div",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:3",className:"metric-table-scroll"},e.createElement("table",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:40","aria-label":"Complete protocol metrics"},e.createElement("thead",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:86"},e.createElement("tr",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:93"},(t?["指标","数值","单位","范围 / 聚合","有效计数"]:["Metric","Value","Unit","Scope / aggregation","Valid count"]).map(x=>e.createElement("th",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:206",key:x},x)))),e.createElement("tbody",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:241"},g.map(x=>e.createElement("tr",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:261",key:x.id},e.createElement("th",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:276",scope:"row"},t?x.labelZh:x.label),e.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:319"},x.value==null?"—":x.value.toPrecision(8),x.status!=="available"&&e.createElement("small",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:390"},x.reason)),e.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:421"},x.unit),e.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:438"},e.createElement("small",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:442"},x.scope,e.createElement("br",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:458"}),x.aggregation)),e.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:491"},x.validCount==null?t?"原件未记录":"Not recorded":x.validCount.toLocaleString())))))),e.createElement("p",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:11:3"},t?"速度有效域：GT vel_valid、GT sdf < −0.10、预测vel_valid；Z[11:105] / X[11:212]，粗网格须四格全有效。Breaking严格−0.30<X<1.10；calm band与非陡坡列不同。":"Velocity support: GT vel_valid, GT sdf < −0.10, prediction vel_valid; Z[11:105] / X[11:212], all four coarse cells valid. Breaking strictly −0.30<X<1.10; calm band differs from non-steep columns."),e.createElement("button",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:12:3","data-os-action":"",onClick:()=>c(`${n.runId}_${a}_${l}_complete-metrics.csv`,w0(g),"text/csv")},t?"导出完整指标 CSV":"Export complete metrics CSV"))}function j0({declarations:n,zh:a}){const s=t=>({claimed:a?"来源声明":"Source declaration",verified:a?"已核验":"Verified",unknown:a?"未知":"Unknown"})[t];return e.createElement("details",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:9",className:"complete-metrics"},e.createElement("summary",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:47"},a?"实验条件与证据来源":"Experiment conditions and evidence"),n?e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:5:3"},a?"“已核验”仅覆盖注明的原始文件身份；相机、模型、单位和测试划分仍按原始材料声明，不能等同独立训练审计。":"Verified labels cover the stated original-file identities. Camera, model, units and test split remain source declarations, not an independent training audit."),e.createElement("dl",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:3",className:"experiment-declarations"},n.entries.map(t=>e.createElement("div",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:72",key:t.id},e.createElement("dt",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:88"},a?t.labelZh:t.label," ",e.createElement("span",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:115"},s(t.status))),e.createElement("dd",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:150"},t.value==null?"—":typeof t.value=="object"?JSON.stringify(t.value):String(t.value),t.note&&e.createElement("small",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:248"},t.note.replace(/collaborator/gi,"Source")),t.source&&e.createElement("small",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:318"},t.source.file," · SHA256 ",t.source.sha256))))),e.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:7:3"},a?"直接比较要求相同GT、协议、帧集合、有效域和单位；不同相机/模型可以作为实验变量，但必须显示差异。":"Direct comparison requires the same GT, protocol, frame set, support and units. Camera/model differences may be experimental variables but must be disclosed.")):e.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:134",role:"status"},a?"声明尚未核验，不能推断实验条件。":"Declarations not yet verified; conditions cannot be inferred."))}const gt=[1007,1023,1039,1057,1073,1089],qe=n=>Number.isFinite(n)?n.toFixed(6):"—";function C0({bundle:n,frame:a,onFrame:s,onDownload:t,reportSelection:c,onReportSelection:i,unifiedRestore:o=!1,displayGeometryFrames:r=n.geometryFrames}){const{language:f}=me(),l=f==="zh",[m,g]=E.useState("all"),[x,h]=E.useState("height"),u=c?.subset??m,d=c?.metric??x;function p(D){g(D),i?.(K=>({...K,subset:D}))}function w(D){h(D),i?.(K=>({...K,metric:D}))}const[j,S]=E.useState(""),v=E.useRef(sc());E.useEffect(()=>(v.current.cancel(),()=>v.current.cancel()),[a,n]);const _=E.useRef(null),y=[n.datasetA.manifestSha256,n.datasetB.manifestSha256,n.protocol.sourceScriptSha256].join("/");E.useEffect(()=>{function D(K){const F=K.detail;!_.current?.getClientRects().length||F.run!==n.runId||F.protocol!==n.protocol.id||F.identity!==y||(d!==F.metric&&w(F.metric),u!==F.subset&&p(F.subset),F.scope==="frame"&&a!==F.frame&&C(F.frame),K.preventDefault())}return window.addEventListener("oceanscope-restore-curve",D),()=>window.removeEventListener("oceanscope-restore-curve",D)},[n,a,d,u,y]);function C(D){v.current.cancel(),s(D)}async function B(D){if(v.current.cancel(),!!D)try{if(D.size>1024*1024)throw Error("Result selection file too large");const K=await v.current.run(async()=>cc(await D.text(),n));K&&(p(K.subset),w(K.metric),s(K.frame),S(l?"已恢复相同结果的帧与集合；指标仍来自已核验结果包。":"Restored frame and subset; metrics remain from the verified bundle."))}catch(K){S(K.message)}}const A=hi(n,a??n.frameIds[0]),b={...A,geometryAvailable:r.includes(A.frame)},M=n.rows.filter(D=>u==="all"||gt.includes(D.frame)),R=n.summary.velocity[u==="all"?"all_frames":"velocity_net_6_frames"]["grid_0.1m"],I=u==="all"?l?"全96帧 · 粗网格":"All96 frames · Coarse grid":l?"固定六帧 · 粗网格":"Fixed six frames · Coarse grid",N=D=>d==="height"?D.height.mae_m*100:D.velocity.coarse.rel_rmse,z=Math.max(...M.map(N),1e-9),$=D=>42+(D-1001)/95*836,X=D=>155-D/z*125;function Z(){return{schemaVersion:1,runId:n.runId,protocol:n.protocol,datasetA:n.datasetA,datasetB:n.datasetB,frame:b.frame,selectedFrame:b.row,subset:u,metric:d,unitStatus:n.unitStatus,geometryAvailable:b.geometryAvailable,summaryScope:"height: all96; velocity: selected subset",summary:{height:n.summary.height,velocity:R},rows:M}}function ne(){return["run_id,protocol_id,subset,frame,height_mae_m,height_bias_m,common_columns,coarse_rel_rmse,coarse_valid_voxels,geometry_available",...M.map(D=>[n.runId,n.protocol.id,u,D.frame,D.height.mae_m,D.height.bias_m,D.height.common,D.velocity.coarse.rel_rmse,D.velocity.coarse.voxels,r.includes(D.frame)].join(","))].join(`
`)}return e.createElement("section",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:41:9",className:"reference-evaluation","aria-label":l?"原始96帧协议结果":"Raw 96-frame protocol results"},e.createElement("header",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:3"},e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:11"},e.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:16",className:"reference-eyebrow"},"RAW VDB · 96 / 96"),e.createElement("h2",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:76"},l?"Gentle → Best_1027 · 序列评估":"Gentle → Best_1027 · Sequence evaluation")),e.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:166",className:"reference-status"},l?"原始读取已核验":"Verified raw read")),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:43:3"},l?"192个原始文件身份核验 · 0失败 · 95个相邻帧对。单位采用来源约定，尚未独立标定。":"192 source identities verified · 0 failures · 95 adjacent pairs. Units follow source convention, without independent calibration."),e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:3",className:"reference-cards"},e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:36"},e.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:41"},l?"全96帧高度 MAE":"All96 height MAE"),e.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:90"},qe(n.summary.height.mae_m*100)," ",e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:140"},"cm")),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:166"},qe(n.summary.height.mae_pct),"% R · R=1.230"),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:233"},l?"有符号偏差":"Signed bias"," ",qe(n.summary.height.bias_pct),"% R")),e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:324"},e.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:329"},l?"速度 relative RMSE · pooled":"Velocity relative RMSE · pooled"),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:408",className:"metric-scope"},I),e.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:463"},qe(R.rel_rmse)),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:507"},R.voxels.toLocaleString()," ",l?"有效粗网格点":"valid coarse voxels")),e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:598"},e.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:603"},l?"速度 relative RMSE · 逐帧均值":"Velocity relative RMSE · Frame mean"),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:684",className:"metric-scope"},I),e.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:739"},qe(R.rel_rmse_frame_mean)),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:794"},l?"XZ 0.1 / Y 0.05 · 来源单位":"XZ 0.1 / Y 0.05 · source units"))),e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:3",className:"reference-controls"},e.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:39"},l?"帧集合":"Frame set"," ",e.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:69","data-os-action":"","aria-label":"Reference frame set",value:u,onChange:D=>{v.current.cancel(),p(D.target.value)}},e.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:195",value:"all"},l?"全96帧":"All96 frames"),e.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:250",value:"six"},l?"固定六帧":"Fixed six frames"))),e.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:326"},l?"曲线":"Curve"," ",e.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:351","data-os-action":"","aria-label":"Reference metric",value:d,onChange:D=>{v.current.cancel(),w(D.target.value)}},e.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:474",value:"height"},l?"高度 MAE (cm)":"Height MAE (cm)"),e.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:542",value:"velocity"},l?"粗网格速度 relative RMSE":"Coarse velocity relative RMSE"))),e.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:651"},l?"原始帧号":"Original frame"," ",e.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:687","data-os-action":"","aria-label":"Reference frame",value:b.frame,onChange:D=>C(Number(D.target.value))},n.frameIds.map(D=>e.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:822",key:D,value:D},D,r.includes(D)?" · 3D":""))))),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:46:3",role:"status"},e.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:46:20"},l?"选定帧":"Selected frame"," ",b.frame)," ",e.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:46:83","data-os-action":"",hidden:u==="six"&&!gt.includes(b.frame),type:"button","data-os-tools":"",className:"os-frame-comment",onClick:()=>window.dispatchEvent(new CustomEvent("oceanscope-review-frame",{detail:_.current}))},l?"批注此帧":"Comment on this frame")," · ",l?"高度 MAE":"Height MAE"," ",qe(b.row.height.mae_m*100)," cm · ",l?"速度 relative RMSE":"Velocity relative RMSE"," ",qe(b.row.velocity.coarse.rel_rmse)," · ",b.geometryAvailable?l?"三维预览可用":"3D preview available":l?"该帧无三维数据；保留真实帧号与指标":"No 3D data for this frame; frame identity and metrics retained",u==="six"&&!gt.includes(b.frame)&&(l?" · 当前帧不在固定六帧集合":" · Current frame outside fixed-six subset")),!b.geometryAvailable&&e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:47:34",className:"reference-geometry-links"},l?"跳转到可用三维帧：":"Jump to available geometry: ",r.map(D=>e.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:47:153","data-os-action":"",key:D,onClick:()=>C(D)},D))),e.createElement("figure",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:48:3",className:"os-metric-figure","data-review-id":"reference-frame-metric"},e.createElement("figcaption",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:49:4"},d==="height"?l?"高度 MAE 逐帧曲线":"Height MAE by frame":l?"速度 relative RMSE 逐帧曲线":"Velocity relative RMSE by frame"),e.createElement("svg",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:4",ref:_,"data-review-curve":"reference-frame-metric","data-run":n.runId,"data-protocol":n.protocol.id,"data-identity":y,"data-subset":u,"data-metric":d,"data-frame":b.frame,"data-value":N(b.row),"data-unit":d==="height"?"cm":"1",viewBox:"0 0 920 190",role:"img","aria-label":l?"原始帧指标曲线":"Original-frame metric curve"},e.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:384",x:"8",y:"27"},qe(z)),e.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:423",x:"15",y:"159"},"0"),e.createElement("line",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:452",x1:"42",x2:"878",y1:"155",y2:"155",stroke:"#a7c4cb"}),e.createElement("polyline",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:511",points:M.map(D=>`${$(D.frame)},${X(N(D))}`).join(" "),fill:"none",stroke:"#087e8b",strokeWidth:"2"}),M.map(D=>e.createElement("circle",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:643","data-os-action":"","data-frame":D.frame,key:D.frame,cx:$(D.frame),cy:X(N(D)),r:D.frame===b.frame?5:3,fill:D.frame===b.frame?"#c45c15":"#087e8b",role:"button",tabIndex:"0","aria-label":`${l?"选择帧":"Select frame"} ${D.frame}`,onClick:()=>C(D.frame),onKeyDown:K=>{(K.key==="Enter"||K.key===" ")&&(K.preventDefault(),C(D.frame))}},e.createElement("title",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1012"},D.frame,": ",qe(N(D))))),e.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1067",x:"42",y:"180"},"1001"),e.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1099",x:"840",y:"180"},"1096"),e.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1132",x:"400",y:"180"},l?"原始帧号":"Original frame"))),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:51:3",className:"reference-scope"},l?"此处为固定协议的全局／逐帧指标。相机、显示平滑与ROI不改变这些值；同协议空间面板使用原生列高度。三维场切片与旧预览诊断保留各自计算范围。":"These are fixed-protocol global/per-frame metrics. Camera, display smoothing and ROI do not change them. The protocol spatial panel uses native height columns; volume slices and legacy diagnostics retain their own scope."),e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:52:3",className:"reference-controls"},e.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:52:39","data-os-action":"",onClick:()=>t(`${n.runId}_${u}.json`,JSON.stringify(Z(),null,2))},l?"导出结果与当前帧 JSON":"Export results and current frame JSON"),e.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:52:209","data-os-action":"",onClick:()=>t(`${n.runId}_${u}.csv`,ne(),"text/csv")},l?"导出所选集合 CSV":"Export selected-set CSV")),e.createElement(S0,{bundle:n,subset:u,zh:l,onDownload:t,frame:b.frame,selectedGrid:c?.grid,onGrid:D=>i?.(K=>({...K,grid:D}))}),e.createElement(j0,{declarations:n.declarations,zh:l}),!o&&e.createElement("details",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:21"},e.createElement("summary",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:30"},l?"恢复结果选择":"Restore result selection"),e.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:89"},l?"选择本面板导出的 JSON":"Choose JSON exported from this panel"," ",e.createElement("input",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:156","data-os-action":"",type:"file",accept:"application/json,.json","aria-label":"Restore reference selection",onChange:D=>{B(D.target.files?.[0]),D.target.value=""}})),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:320",role:"status"},j)),e.createElement("details",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:3"},e.createElement("summary",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:12"},l?"数据身份、协议与有效计数":"Identity, protocol and valid counts"),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:88"},n.protocol.id," · ",n.runId),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:132"},"A: ",n.datasetA.manifestSha256,e.createElement("br",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:170"}),"B: ",n.datasetB.manifestSha256,e.createElement("br",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:210"}),l?"算法":"Algorithm",": ",n.protocol.sourceScriptSha256),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:278"},l?"当前帧共同高度列":"Current common height columns",": ",b.row.height.common," · GT ",b.row.height.gtWet," / B ",b.row.height.predictionWet,"; ",l?"速度有效点":"Valid velocity voxels",": ",b.row.velocity.coarse.voxels)))}function ra(n,a,s){const t=n.points;return t.flatMap((c,i)=>!i||i===t.length-1||c.x<a.xmin||c.x>a.xmax||c.z<a.zmin||c.z>a.zmax?[]:t.slice(i-1,i+2).every(r=>Number.isFinite(r.a)&&Number.isFinite(r.b))?t[i-1][s]<c[s]&&t[i+1][s]<c[s]?[i]:[]:[])}function On(n,a){if(!a||!["first","second"].includes(a.profile)||!["uncertain","paired"].includes(a.status))throw Error("Invalid crest annotation");const s=n.profiles[a.profile];for(const i of["a","b"])if(!ra(s,n.roi,i).includes(a[i]))throw Error("Invalid crest sample");const t=s.points[a.a],c=s.points[a.b];return{gt:t,pred:c,deltaHeight:c.b-t.a,deltaDistance:c.distance-t.distance}}function Ua(n,a){if(!n.roi||!["first","second"].includes(a?.profile))throw Error("Invalid crest profile or ROI");return a.status==="uncertain"&&a.a===null&&a.b===null?null:On(n,a)}function Ja(n){const{shape:[a,s],originXYZ:[t,,c],spacing:i}=n.descriptor;return{xmin:t,xmax:t+(s-1)*i,zmin:c,zmax:c+(a-1)*i}}function ca(n,a,{mode:s="create"}={}){const t={...n};for(const c of["x","z"]){const i=c+"min",o=c+"max";if(!Number.isFinite(t[i])||!Number.isFinite(t[o])||t[o]<t[i])throw Error("Invalid ROI");if(s==="move"){const r=Math.min(t[o]-t[i],a[o]-a[i]);t[i]=Math.max(a[i],Math.min(a[o]-r,t[i])),t[o]=t[i]+r}else t[i]=Math.max(a[i],Math.min(a[o],t[i])),t[o]=Math.max(a[i],Math.min(a[o],t[o]))}return{roi:t,clipped:JSON.stringify(t)!==JSON.stringify(n)}}function yt(n,{ix:a,iz:s,resourceKey:t}){const{shape:[c,i],originXYZ:[o,,r],spacing:f,frameId:l}=n.descriptor;if(!Number.isInteger(a)||!Number.isInteger(s)||a<0||a>=i||s<0||s>=c||!n.common[s*i+a])throw Error("Select a paired valid location");const m=o+a*f,g=r+s*f;return{version:1,frame:l,resourceKey:t,hotspot:{ix:a,iz:s,index:s*i+a,x:m,z:g},roi:ca({xmin:m-10*f,xmax:m+10*f,zmin:g-10*f,zmax:g+10*f},Ja(n)).roi,directionDeg:0,anchorMode:"hotspot"}}function Ka({anchor:n,direction:a},s){let t=-1/0,c=1/0;for(const[i,o,r,f]of[[n.x,a[0],s.xmin,s.xmax],[n.z,a[1],s.zmin,s.zmax]])if(Math.abs(o)<1e-12){if(i<r-1e-9||i>f+1e-9)return null}else{const l=(r-i)/o,m=(f-i)/o;t=Math.max(t,Math.min(l,m)),c=Math.min(c,Math.max(l,m))}return t<=c?[t,c]:null}function Bt(n,{x:a,z:s,directionDeg:t}){const c=Ja(n),{shape:[i,o],originXYZ:[r,,f],spacing:l}=n.descriptor;if(![a,s,t].every(Number.isFinite)||a<c.xmin||a>c.xmax||s<c.zmin||s>c.zmax)throw Error("Profile anchor outside domain");const m=t*Math.PI/180,g=[Math.cos(m),Math.sin(m)],x={x:a,z:s},h=Ka({anchor:x,direction:g},c),u=(a-r)/l,d=(s-f)/l,p=Math.abs(g[1])<1e-12&&Math.abs(d-Math.round(d))<1e-8,w=Math.abs(g[0])<1e-12&&Math.abs(u-Math.round(u))<1e-8,j=(p||w)&&Math.abs(u-Math.round(u))<1e-8&&Math.abs(d-Math.round(d))<1e-8;let S;if(j)S=Array.from({length:p?o:i},(_,y)=>((p?r:f)+y*l-(p?a:s))/(p?g[0]:g[1]));else{const _=Math.max(2,Math.ceil((h[1]-h[0])/l)+1);S=Array.from({length:_},(y,C)=>h[0]+(h[1]-h[0])*C/(_-1))}S=[...S,0].sort((_,y)=>_-y).filter((_,y,C)=>y===0||Math.abs(_-C[y-1])>1e-9);const v=S.map(_=>{const y=a+_*g[0],C=s+_*g[1],B=(y-r)/l,A=(C-f)/l;let b=null,M=null;if(j){const R=Math.round(A)*o+Math.round(B);n.common[R]&&(b=n.heightA[R],M=n.heightB[R])}else if(o>=2&&i>=2){const R=Math.max(0,Math.min(o-2,Math.floor(B))),I=Math.max(0,Math.min(i-2,Math.floor(A))),N=B-R,z=A-I,$=[I*o+R,I*o+R+1,(I+1)*o+R,(I+1)*o+R+1],X=[(1-N)*(1-z),N*(1-z),(1-N)*z,N*z];$.every(Z=>n.common[Z]&&Number.isFinite(n.heightA[Z])&&Number.isFinite(n.heightB[Z]))&&(b=$.reduce((Z,ne,D)=>Z+X[D]*n.heightA[ne],0),M=$.reduce((Z,ne,D)=>Z+X[D]*n.heightB[ne],0))}return{distance:_,x:y,z:C,a:b,b:M,difference:b===null||M===null?null:M-b}});return{anchor:x,direction:g,sampling:j?"native_columns":"bilinear_common_four",step:l,points:v}}function Dn(n,a){return{first:Bt(n,{...a.hotspot,directionDeg:a.directionDeg}),second:Bt(n,{...a.hotspot,directionDeg:a.directionDeg+90})}}function At(n){let a=0,s=0,t=0,c=0,i=null;for(const o of n){if(!Number.isFinite(o.error))continue;const r=o.error,f=Math.abs(r);a++,s+=r,t+=f,c+=r*r,!i||f>i.absolute?i={...o,absolute:f,signed:r,ties:1}:f===i.absolute&&i.ties++}return{samples:a,mae:a?t/a:null,bias:a?s/a:null,rmse:a?Math.sqrt(c/a):null,maximum:i}}function Fn(n,a=null){if(a&&(!["xmin","xmax","zmin","zmax"].every(x=>Number.isFinite(a[x]))||a.xmin>a.xmax||a.zmin>a.zmax))throw Error("Invalid evidence ROI");const{shape:[s,t],originXYZ:[c,,i],spacing:o}=n.descriptor;let r=0,f=0,l=0;const m=[];for(let x=0;x<s;x++)for(let h=0;h<t;h++){const u=x*t+h,d=c+h*o,p=i+x*o;a&&(d<a.xmin||d>a.xmax||p<a.zmin||p>a.zmax)||(r++,f+=+!!n.wetA[u],l+=+!!n.wetB[u],n.common[u]&&m.push({index:u,ix:h,iz:x,x:d,z:p,error:n.heightB[u]-n.heightA[u]}))}const g=At(m);return{...g,candidates:r,validGT:f,validPrediction:l,common:g.samples,coverageCandidate:r?g.samples/r:null,coverageGT:f?g.samples/f:null,weighting:"native columns, equal area per column"}}function kt(n,a=null){const s=a?Ka(n,a):null,t=n.points.map(c=>({...c,error:c.difference}));return{full:At(t),roi:a?At(s?t.filter(c=>c.distance>=s[0]-1e-10&&c.distance<=s[1]+1e-10):[]):null,sampling:n.sampling,weighting:"sample mean; not native area or volume statistics"}}function jc(n,a,s){if(!n||n.version!==1||n.frame!==a.frameId||n.resourceKey!==JSON.stringify(a)||n.anchorMode!=="hotspot"||!Number.isFinite(n.directionDeg)||n.directionDeg<0||n.directionDeg>=180)throw Error("Invalid diagnosis identity/direction");if(n.caseNote!==void 0&&(typeof n.caseNote!="string"||n.caseNote.length>120))throw Error("Invalid case note");const t=n.hotspot,[c,i]=a.shape,o=a.spacing;if(!t||!Number.isInteger(t.ix)||!Number.isInteger(t.iz)||t.ix<0||t.ix>=i||t.iz<0||t.iz>=c||t.index!==t.iz*i+t.ix||![t.x,t.z].every(Number.isFinite)||Math.abs(t.x-(a.originXYZ[0]+t.ix*o))>1e-9||Math.abs(t.z-(a.originXYZ[2]+t.iz*o))>1e-9||!s||s.index!==t.index||Math.abs(s.x-t.x)>1e-9||Math.abs(s.z-t.z)>1e-9)throw Error("Diagnosis native point mismatch");const r=n.crest;if(r&&(!["first","second"].includes(r.profile)||!["paired","uncertain"].includes(r.status)||!(Number.isInteger(r.a)&&Number.isInteger(r.b)||r.status==="uncertain"&&r.a===null&&r.b===null)))throw Error("Invalid crest selection");return{...r?{crest:{profile:r.profile,status:r.status,a:r.a,b:r.b}}:{},...n.caseNote!==void 0?{caseNote:n.caseNote}:{},version:1,frame:n.frame,resourceKey:n.resourceKey,hotspot:{ix:t.ix,iz:t.iz,index:t.index,x:t.x,z:t.z},roi:n.roi??null,directionDeg:n.directionDeg,anchorMode:"hotspot"}}const zt="oceanscope.protocol-report.v1",B0=n=>JSON.parse(JSON.stringify(n)),$s=n=>JSON.stringify(n,(a,s)=>s&&typeof s=="object"&&!Array.isArray(s)?Object.fromEntries(Object.keys(s).sort().map(t=>[t,s[t]])):s),Wa=(n,a)=>$s(n)===$s(a),ia=(n,a=-1e9,s=1e9)=>typeof n=="number"&&Number.isFinite(n)&&n>=a&&n<=s;function Cc(n){if(!/^[a-f0-9]{64}$/.test(n.verifiedPayloadSha256)||!/^[a-f0-9]{64}$/.test(n.declarations?.sha256))throw Error("Verified report identity unavailable");return{...Nn(n),bundleSha256:n.verifiedPayloadSha256,declarationsSha256:n.declarations.sha256}}function Bc(n,a,s,t){if(!n||n.frame!==a.frameId||!s.frameIds.includes(n.frame))throw Error("Report frame mismatch");if(!["xy","xz","yz","oblique"].includes(n.plane)||!["x","y","z"].includes(n.rotationAxis)||!ia(n.angle,0,180)||!ia(n.sectionPercent,0,100))throw Error("Invalid report section");const c=n.plane==="xy"||n.plane==="oblique"?a.shape[0]:n.plane==="yz"?a.shape[1]:t?.[0]?.processing.lattice.dimensions[1]??64;if(!Number.isInteger(n.sliceIndex)||n.sliceIndex<0||n.sliceIndex>=c)throw Error("Report slice outside lattice");const i=n.selection;if(!i||!["all","six"].includes(i.subset)||!["fine","coarse"].includes(i.grid)||!["height","velocity"].includes(i.metric))throw Error("Invalid report selection");let o=null,r=null;if(n.geometry){const l=n.geometry.settings?.representation===Qn;if(!t?.length||!l&&!s.geometryFrames.includes(n.frame))throw Error("Report geometry unavailable");o=cn(n.geometry,t);const m=t.find(g=>g.id===o.settings.caseId);if(r=l?tc(m,n.frame,o.settings.quality):Tt(m,n.frame),!r||!Wa(n.geometryResource,r))throw Error("Report preview resource identity mismatch");for(const g of["frame","plane","sliceIndex","rotationAxis","angle","sectionPercent"])if(o.settings[g]!==n[g])throw Error("Report geometry/section mismatch")}const f=typeof n.geometryStatus?.reason=="string"?n.geometryStatus.reason.slice(0,500):o?"Exact-frame preview bytes verified":"No 3D evidence captured";return{frame:n.frame,plane:n.plane,sliceIndex:n.sliceIndex,rotationAxis:n.rotationAxis,angle:n.angle,sectionPercent:n.sectionPercent,selection:{subset:i.subset,grid:i.grid,metric:i.metric},geometry:o,geometryResource:r,geometryStatus:{status:o?"included":"unavailable",reason:f}}}function Mt(n){if(n==null)return null;if(!["xmin","xmax","zmin","zmax"].every(a=>ia(n[a]))||n.xmin>n.xmax||n.zmin>n.zmax)throw Error("Invalid report ROI");return Object.fromEntries(["xmin","xmax","zmin","zmax"].map(a=>[a,n[a]]))}function qa(n,a){if(n==null)return null;const[s,t]=a.shape,c=n.index;if(!Number.isInteger(c)||c<0||c>=s*t)throw Error("Invalid report probe");const i=a.originXYZ[0]+c%t*a.spacing,o=a.originXYZ[2]+Math.floor(c/t)*a.spacing;if(!ia(n.x)||!ia(n.z)||Math.abs(i-n.x)>1e-9||Math.abs(o-n.z)>1e-9)throw Error("Report probe/column mismatch");return{index:c,x:i,z:o}}function A0({bundle:n,spatial:a,view:s,roi:t=null,probe:c=null,catalog:i,diagnosis:o=null,appearance:r=null}){const f=a.descriptor,l=Bc(s,f,n,i),m=Mt(t);if(r!=null&&typeof r.absoluteError!="boolean")throw Error("Invalid report appearance");let g=r?{appearance:{absoluteError:r.absoluteError}}:{};if(o){const h=jc({...o,roi:m},f,qa(c,f));if(!a.common[h.hotspot.index])throw Error("Diagnosis hotspot is no longer jointly valid");const u=Dn(a,h);g={...h.crest&&{crestMeasurement:Ua({roi:m,profiles:u},h.crest)},diagnosis:h,appearance:{absoluteError:r?.absoluteError??!1},profiles:u,evidence:{frame:Fn(a),roi:m?Fn(a,m):null,first:kt(u.first,m),second:kt(u.second,m)}}}const x=l.plane==="xy"||l.plane==="yz"||l.plane==="oblique"&&l.rotationAxis==="y"?ic(a,{plane:l.plane,index:l.sliceIndex,angle:l.angle,sectionPercent:l.sectionPercent}):null;return B0({schema:zt,...g,createdAt:new Date().toISOString(),source:Cc(n),descriptor:f,view:l,roi:m,probe:qa(c,f),global:ea(a),local:m?ea(a,m):null,profile:x,metrics:Sc(n,{...l.selection,frame:l.frame}),frameMetrics:n.rows.find(h=>h.frame===l.frame),declarations:n.declarations,unitStatus:n.unitStatus,scope:"Native highest-crossing height columns; ROI/profile do not replace all96 global metrics. Units are source convention, not independently calibrated."})}function Ac(n,a,s,{catalog:t}={}){if(new TextEncoder().encode(n).length>1024*1024)throw Error("Report file too large");const c=JSON.parse(n);if(c?.schema!==zt)throw Error("Unsupported protocol report format");if(!Wa(c.source,Cc(a)))throw Error("Report identity mismatch");const i=s.frames.find(r=>r.frameId===c.view?.frame);if(!i||!Wa(c.descriptor,i))throw Error("Report resource mismatch");let o={};if(c.appearance!=null){if(typeof c.appearance.absoluteError!="boolean")throw Error("Invalid report appearance");o.appearance={absoluteError:c.appearance.absoluteError}}if(c.diagnosis!=null){const r=qa(c.probe,i),f=Mt(c.roi),l=jc(c.diagnosis,i,r);if(!Wa(l.roi,f))throw Error("Diagnosis ROI mismatch");if(typeof c.appearance?.absoluteError!="boolean")throw Error("Invalid diagnosis appearance");o={diagnosis:l,appearance:{absoluteError:c.appearance.absoluteError}}}return{descriptor:i,...o,view:Bc(c.view,i,a,t),roi:Mt(c.roi),probe:qa(c.probe,i)}}function k0(n){const a=t=>'"'+String(t==null?"":typeof t=="object"?JSON.stringify(t):t).replaceAll('"','""')+'"',s=[["kind","name","value","unit","scope","metadata"]];s.push(["source","snapshot",n.createdAt,"",n.schema,n.unitStatus]);for(const[t,c]of Object.entries(n.source))s.push(["source",t,c,"","identity",""]);s.push(["view","selection",n.view,"","current view",{roi:n.roi,probe:n.probe}],["source","declarations",n.declarations,"","claimed / verified / unknown",""]);for(const t of n.metrics)s.push(["metric",t.id,t.value,t.unit,t.scope,t]);for(const[t,c]of[["frame",n.global],["ROI",n.local]])if(c)for(const[i,o]of Object.entries(c))s.push(["spatial",i,o,i==="common"?"columns":"m",t,{frame:n.view.frame,roi:t==="ROI"?n.roi:null}]);n.diagnosis?.crest&&s.push(["crest pair",n.diagnosis.crest.status,n.crestMeasurement,"scene units","prediction minus GT along profile",n.diagnosis.crest]);for(const t of n.profile?.points??[])s.push(["profile","height A / B / difference",t,"m",n.profile.sampling,{frame:n.view.frame,plane:n.view.plane}]);if(n.diagnosis){s.push(["diagnosis","selection",n.diagnosis,"","native hotspot / current ROI",n.appearance]);for(const[t,c]of Object.entries(n.evidence))c&&s.push(["diagnostic evidence",t,c,"m; coverage fractions","explicit native or profile sample weighting",c.weighting??""]);for(const[t,c]of Object.entries(n.profiles))for(const i of c.points)s.push(["paired profile",t,i,"m",c.sampling,{frame:n.view.frame,anchor:c.anchor,direction:c.direction,roi:n.roi}])}return s.map(t=>t.map(a).join(",")).join(`
`)}function M0(n,a){return Qa({stem:`${n.source.runId}_${n.view.frame}_protocol-report`,record:n,csv:k0(n),previewUrl:a})}function Qa({stem:n,record:a,csv:s,previewUrl:t}){const c=[],i=o=>{const r=URL.createObjectURL(o);return c.push(r),r};try{const o={csv:{name:n+".csv",mime:"text/csv",content:s},json:{name:n+".json",mime:"application/json",content:JSON.stringify(a,null,2)}};if(t){if(!t.startsWith("data:image/png;base64,"))throw Error("PNG encoding failed");const r=Uint8Array.from(atob(t.slice(t.indexOf(",")+1)),l=>l.charCodeAt(0)),f=new Blob([r],{type:"image/png"});o.png={name:n+".png",mime:"image/png",blob:f,href:i(f)}}for(const r of["csv","json"]){const f=o[r];f.blob=new Blob([f.content],{type:f.mime+";charset=utf-8"}),f.href=i(f.blob)}return o}catch(o){for(const r of c)URL.revokeObjectURL(r);throw o}}const R0=JSON.parse('{"surface":{"schema":"oceanscope.protocol-report.v1","source":{"runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d","bundleSha256":"539734f929b2d3d4a53adb2563bc9598e1cc8efcd33439f8a39db052bafb28bd","declarationsSha256":"1d6bf2602f814aaf224c6bf570a8872405d7274bf4c6a9f063bab44d60aeaeec"},"descriptor":{"schemaVersion":1,"kind":"protocol-spatial-frame","runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d","frameId":1049,"shape":[128,224],"axisOrder":"ZX","originXYZ":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],"spacing":0.049999999148505836,"resources":{"heightA":{"file":"1049-heightA.bin","dtype":"float64-le","bytes":229376,"sha256":"24c95d7cdfa22d12d1baa44f16647a69b44fde83a51177b9c999d4111f751d9a"},"heightB":{"file":"1049-heightB.bin","dtype":"float64-le","bytes":229376,"sha256":"c8257805f4d3da79b0d2c5e336cea75c4b4bcfa66a55377dfe3da25004ad03b2"},"wetA":{"file":"1049-wetA.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"wetB":{"file":"1049-wetB.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"common":{"file":"1049-common.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"steep":{"file":"1049-steep.bin","dtype":"uint8","bytes":28672,"sha256":"2cf37c40b5fa4df751e05dfe9fe920a9a2efce396ff746978ff1e0c4f1b688db"},"calmCells":{"file":"1049-calmCells.bin","dtype":"uint8","bytes":28672,"sha256":"7cfdd3055066ff1620d4127ff4e0e4aaf6f94aeb6996731887065efac3533d22"},"breakingBand":{"file":"1049-breakingBand.bin","dtype":"uint8","bytes":28672,"sha256":"28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"},"calmBand":{"file":"1049-calmBand.bin","dtype":"uint8","bytes":28672,"sha256":"b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"}},"summary":{"common":19487,"mae_m":0.020208329793287478,"bias_m":-0.007192271702029772,"rmse_m":0.031439791153657054}},"view":{"frame":1049,"plane":"yz","sliceIndex":111,"rotationAxis":"y","angle":30,"sectionPercent":50,"selection":{"subset":"all","grid":"coarse","metric":"height"},"geometry":{"schema":"oceanscope.field-view.v1","name":"best-1027 · SDF · 1049 · YZ","sourceSignature":"{\\"comparison\\":\\"best-1027\\",\\"gt\\":\\"public-ground-truth\\",\\"prediction\\":\\"best-1027-reconstruction\\",\\"groups\\":[\\"sdf\\",\\"velocity\\"],\\"settings\\":{\\"activeGroup\\":\\"sdf\\",\\"previewOnly\\":false,\\"sdfEvaluationRegion\\":\\"full_domain\\",\\"sdf\\":{\\"gt\\":{\\"semantics\\":\\"full\\",\\"unit\\":\\"m\\",\\"validationMode\\":\\"local_pilot\\"},\\"prediction\\":{\\"semantics\\":\\"full\\",\\"unit\\":\\"m\\",\\"validationMode\\":\\"local_pilot\\"}},\\"velocity\\":{\\"gt\\":{\\"unit\\":\\"m/s\\"},\\"prediction\\":{\\"unit\\":\\"m/s\\"}},\\"heightComparison\\":{\\"surfaceValidated\\":true,\\"negativeInside\\":true,\\"upAxis\\":\\"Y\\",\\"coordinateUnit\\":\\"m\\",\\"frameTimeAligned\\":true,\\"basis\\":\\"Working pairing confirmed by user; local audited full-SDF pilot; see reconstructionEvaluation protocol.\\"}},\\"lattice\\":{\\"dimensions\\":[224,64,128],\\"origin\\":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],\\"axisSteps\\":[[0.049999999148505836,0,0],[0,0.049999999148505836,0],[0,0,0.049999999148505836]]},\\"directory\\":[{\\"group\\":\\"sdf\\",\\"name\\":\\"ground_truth\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"prediction\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"error\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"ground_truth\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"prediction\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"error\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"}],\\"frames\\":[1001,1049,1096]}","settings":{"rotationAxis":"y","shading":"original","caseId":"best-1027","frame":1049,"group":"sdf","mode":"split","quality":"balanced","component":"magnitude","plane":"yz","sliceIndex":111,"angle":30,"sectionPercent":50,"showPlane":true,"showContext":false,"showGt":true,"showPrediction":true,"gtOpacity":0.65,"predictionOpacity":0.8,"vectorDensity":2000,"arrowScale":1,"sourceRange":null,"errorScale":{"locked":false,"limit":1},"crosshair":[0.5,0.5],"playback":{"speed":1,"loop":false,"fps":24}},"camera":{"position":[8.120590815791608,9.983917335547375,14.345039351807678],"target":[-4.074999809265052,0.07499995268883719,0.6249998986189338],"up":[0,1,0],"fov":40,"zoom":1,"near":0.0006606199627135705,"far":274.66654008364844}},"geometryResource":{"frame":1049,"url":"/data/fields/best-1027/1049.ocfld.gz","packedBytes":26633403,"packedSha256":"1443fd356c49996f7b7bac3ab8d8ee9fc4b40d9a6d4a0734b2a0e6e2592c2548","decodedBytes":99523224,"decodedSha256":"ad0deb564ccd2db1fc91e4db9f711acaa8f6c231e3acca426773f8bb0cbf851a"},"geometryStatus":{"status":"included","reason":"Exact-frame preview bytes verified"}},"roi":{"xmin":-1.3499998556714843,"xmax":-0.34999987270136756,"zmin":1.44999988456928,"zmax":2.449999867539397},"probe":{"index":20336,"x":-0.8499998641864259,"z":1.9499998760543384},"diagnosis":{"caseNote":"案例A：GT局部峰附近预测偏低。检查峰高差异；邻近峰对应关系尚未独立确认。","version":1,"frame":1049,"resourceKey":"{\\"schemaVersion\\":1,\\"kind\\":\\"protocol-spatial-frame\\",\\"runId\\":\\"raw-reference-96-e81b8955734e\\",\\"protocolSha256\\":\\"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9\\",\\"manifestA\\":\\"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e\\",\\"manifestB\\":\\"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d\\",\\"frameId\\":1049,\\"shape\\":[128,224],\\"axisOrder\\":\\"ZX\\",\\"originXYZ\\":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],\\"spacing\\":0.049999999148505836,\\"resources\\":{\\"heightA\\":{\\"file\\":\\"1049-heightA.bin\\",\\"dtype\\":\\"float64-le\\",\\"bytes\\":229376,\\"sha256\\":\\"24c95d7cdfa22d12d1baa44f16647a69b44fde83a51177b9c999d4111f751d9a\\"},\\"heightB\\":{\\"file\\":\\"1049-heightB.bin\\",\\"dtype\\":\\"float64-le\\",\\"bytes\\":229376,\\"sha256\\":\\"c8257805f4d3da79b0d2c5e336cea75c4b4bcfa66a55377dfe3da25004ad03b2\\"},\\"wetA\\":{\\"file\\":\\"1049-wetA.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"wetB\\":{\\"file\\":\\"1049-wetB.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"common\\":{\\"file\\":\\"1049-common.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"steep\\":{\\"file\\":\\"1049-steep.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"2cf37c40b5fa4df751e05dfe9fe920a9a2efce396ff746978ff1e0c4f1b688db\\"},\\"calmCells\\":{\\"file\\":\\"1049-calmCells.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"7cfdd3055066ff1620d4127ff4e0e4aaf6f94aeb6996731887065efac3533d22\\"},\\"breakingBand\\":{\\"file\\":\\"1049-breakingBand.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747\\"},\\"calmBand\\":{\\"file\\":\\"1049-calmBand.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1\\"}},\\"summary\\":{\\"common\\":19487,\\"mae_m\\":0.020208329793287478,\\"bias_m\\":-0.007192271702029772,\\"rmse_m\\":0.031439791153657054}}","hotspot":{"ix":176,"iz":90,"index":20336,"x":-0.8499998641864259,"z":1.9499998760543384},"roi":{"xmin":-1.3499998556714843,"xmax":-0.34999987270136756,"zmin":1.44999988456928,"zmax":2.449999867539397},"directionDeg":0,"anchorMode":"hotspot"},"appearance":{"absoluteError":false}},"velocity":{"schema":"oceanscope.velocity-diagnosis.v1","source":{"caseId":"best-1027","codeRevision":"6941367eb0fe09eefefd34144ccd67ed9403b2d4","calculation":"native-xz-paired-v1","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","originals":{"gt":{"frame":1049,"file":"clean_fullsdf_vel.1049.vdb","bytes":11105671,"sha256":"a821ec84b9f2eecc09f234cdf05050e77e3572d6f9c3d46bce94d0a28f328df9","manifestSha256":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},"prediction":{"frame":1049,"file":"recon_fullsdf_vel.1049.vdb","bytes":10571839,"sha256":"ff18d054439135a9c39abc139aa628ca7dcb753dd46b389b86bde47747f5d4c3","manifestSha256":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},"resource":{"frame":1049,"url":"/data/velocity-raw/1049.ocfld.gz","packedBytes":15261605,"packedSha256":"913c1ddbec87d484f71905720334c90ca6ebccdad5c48a543f69eb405308e707","decodedBytes":62391416,"decodedSha256":"403ff5ea6e2afcd3129761caa6a5adf7f2699e180d1733e85774ea1a55df4ef1","roundtrip":"exact"}},"alignment":{"lattice":{"dimensions":[224,64,128],"origin":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],"axisSteps":[[0.049999999148505836,0,0],[0,0.049999999148505836,0],[0,0,0.049999999148505836]],"voxelSize":[0.049999999148505836,0.049999999148505836,0.049999999148505836]},"unitClaim":"m/s","unitEvidence":"Existing source convention only; no independent physical or time calibration.","vectorBasis":{"status":"source-convention","evidence":"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.","independentPhysicalCalibration":false}},"domain":{"id":"collaborator-native","definition":{"id":"collaborator-native","cropX":[11,212],"cropZ":[11,105],"gtSdfCutoffFloat32":-0.10000000149011612,"rule":"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"}},"plane":{"frame":1049,"axis":"xz","yIndex":28,"yWorld":-0.10000004433093324},"roi":{"xmin":-1.3499998556714843,"xmax":-0.34999987270136756,"zmin":1.44999988456928,"zmax":2.449999867539397},"probe":{"xIndex":176,"zIndex":90,"xyz":[-0.8499998641864259,-0.10000004433093324,1.9499998760543384]},"appearance":{"mode":"direction","zoom":true,"viewport":{"x":166,"z":80,"width":21,"height":21},"ranges":{"speed":[0,2.872923899598361],"vectorError":[0,2.0896808971216365],"speedDelta":[-1.750984564815481,1.750984564815481],"direction":[0,180]}},"arrows":{"enabled":true,"stride":4,"gain":1.0036370012923275,"referenceSpeed":2.8695633942267817,"referenceGridLength":2.8800000000000003},"angleThreshold":{"tau":1e-8,"unit":"m/s (source convention)","source":"legacy preview numerical epsilon"},"surfaceCase":{"frame":1049,"hotspotXZ":{"x":-0.8499998641864259,"z":1.9499998760543384},"roiXZ":{"xmin":-1.3499998556714843,"xmax":-0.34999987270136756,"zmin":1.44999988456928,"zmax":2.449999867539397},"surfaceCaseId":"raw-reference-96-e81b8955734e","caseNote":"案例A：GT局部峰附近预测偏低。检查峰高差异；邻近峰对应关系尚未独立确认。","surfaceIdentity":{"runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}}},"inputs":{"surface":"08357988a2ccd4a522f7052a244ca2f811ee2630dab791a5e1f1a5a8399f7615","velocity":"b1205b882a060f69d1e5598f2c2a30858bfb0c77e16817cae12780b05ba074e8"}}'),P0=JSON.parse('{"surface":{"schema":"oceanscope.protocol-report.v1","source":{"runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d","bundleSha256":"539734f929b2d3d4a53adb2563bc9598e1cc8efcd33439f8a39db052bafb28bd","declarationsSha256":"1d6bf2602f814aaf224c6bf570a8872405d7274bf4c6a9f063bab44d60aeaeec"},"descriptor":{"schemaVersion":1,"kind":"protocol-spatial-frame","runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d","frameId":1049,"shape":[128,224],"axisOrder":"ZX","originXYZ":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],"spacing":0.049999999148505836,"resources":{"heightA":{"file":"1049-heightA.bin","dtype":"float64-le","bytes":229376,"sha256":"24c95d7cdfa22d12d1baa44f16647a69b44fde83a51177b9c999d4111f751d9a"},"heightB":{"file":"1049-heightB.bin","dtype":"float64-le","bytes":229376,"sha256":"c8257805f4d3da79b0d2c5e336cea75c4b4bcfa66a55377dfe3da25004ad03b2"},"wetA":{"file":"1049-wetA.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"wetB":{"file":"1049-wetB.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"common":{"file":"1049-common.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"steep":{"file":"1049-steep.bin","dtype":"uint8","bytes":28672,"sha256":"2cf37c40b5fa4df751e05dfe9fe920a9a2efce396ff746978ff1e0c4f1b688db"},"calmCells":{"file":"1049-calmCells.bin","dtype":"uint8","bytes":28672,"sha256":"7cfdd3055066ff1620d4127ff4e0e4aaf6f94aeb6996731887065efac3533d22"},"breakingBand":{"file":"1049-breakingBand.bin","dtype":"uint8","bytes":28672,"sha256":"28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"},"calmBand":{"file":"1049-calmBand.bin","dtype":"uint8","bytes":28672,"sha256":"b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"}},"summary":{"common":19487,"mae_m":0.020208329793287478,"bias_m":-0.007192271702029772,"rmse_m":0.031439791153657054}},"view":{"frame":1049,"plane":"yz","sliceIndex":111,"rotationAxis":"y","angle":30,"sectionPercent":50,"selection":{"subset":"all","grid":"coarse","metric":"height"},"geometry":{"schema":"oceanscope.field-view.v1","name":"best-1027 · SDF · 1049 · YZ","sourceSignature":"{\\"comparison\\":\\"best-1027\\",\\"gt\\":\\"public-ground-truth\\",\\"prediction\\":\\"best-1027-reconstruction\\",\\"groups\\":[\\"sdf\\",\\"velocity\\"],\\"settings\\":{\\"activeGroup\\":\\"sdf\\",\\"previewOnly\\":false,\\"sdfEvaluationRegion\\":\\"full_domain\\",\\"sdf\\":{\\"gt\\":{\\"semantics\\":\\"full\\",\\"unit\\":\\"m\\",\\"validationMode\\":\\"local_pilot\\"},\\"prediction\\":{\\"semantics\\":\\"full\\",\\"unit\\":\\"m\\",\\"validationMode\\":\\"local_pilot\\"}},\\"velocity\\":{\\"gt\\":{\\"unit\\":\\"m/s\\"},\\"prediction\\":{\\"unit\\":\\"m/s\\"}},\\"heightComparison\\":{\\"surfaceValidated\\":true,\\"negativeInside\\":true,\\"upAxis\\":\\"Y\\",\\"coordinateUnit\\":\\"m\\",\\"frameTimeAligned\\":true,\\"basis\\":\\"Working pairing confirmed by user; local audited full-SDF pilot; see reconstructionEvaluation protocol.\\"}},\\"lattice\\":{\\"dimensions\\":[224,64,128],\\"origin\\":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],\\"axisSteps\\":[[0.049999999148505836,0,0],[0,0.049999999148505836,0],[0,0,0.049999999148505836]]},\\"directory\\":[{\\"group\\":\\"sdf\\",\\"name\\":\\"ground_truth\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"prediction\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"error\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"ground_truth\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"prediction\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"error\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"}],\\"frames\\":[1001,1049,1096]}","settings":{"rotationAxis":"y","shading":"original","caseId":"best-1027","frame":1049,"group":"sdf","mode":"split","quality":"balanced","component":"magnitude","plane":"yz","sliceIndex":111,"angle":30,"sectionPercent":50,"showPlane":true,"showContext":false,"showGt":true,"showPrediction":true,"gtOpacity":0.65,"predictionOpacity":0.8,"vectorDensity":2000,"arrowScale":1,"sourceRange":null,"errorScale":{"locked":false,"limit":1},"crosshair":[0.5,0.5],"playback":{"speed":1,"loop":false,"fps":24}},"camera":{"position":[8.120590815791608,9.983917335547375,14.345039351807678],"target":[-4.074999809265052,0.07499995268883719,0.6249998986189338],"up":[0,1,0],"fov":40,"zoom":1,"near":0.0006606199627135705,"far":274.66654008364844}},"geometryResource":{"frame":1049,"url":"/data/fields/best-1027/1049.ocfld.gz","packedBytes":26633403,"packedSha256":"1443fd356c49996f7b7bac3ab8d8ee9fc4b40d9a6d4a0734b2a0e6e2592c2548","decodedBytes":99523224,"decodedSha256":"ad0deb564ccd2db1fc91e4db9f711acaa8f6c231e3acca426773f8bb0cbf851a"},"geometryStatus":{"status":"included","reason":"Exact-frame preview bytes verified"}},"roi":{"xmin":-1.449999853968496,"xmax":-0.44999987099837924,"zmin":0.39999990245065753,"zmax":1.3999998854207742},"probe":{"index":15630,"x":-0.9499998624834376,"z":0.8999998939357159},"diagnosis":{"caseNote":"案例B：沿X局部窗口内，GT与预测峰顶位置不同，峰高也不同；该观察不等于纯平移误差，也不构成自动峰配对。","version":1,"frame":1049,"resourceKey":"{\\"schemaVersion\\":1,\\"kind\\":\\"protocol-spatial-frame\\",\\"runId\\":\\"raw-reference-96-e81b8955734e\\",\\"protocolSha256\\":\\"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9\\",\\"manifestA\\":\\"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e\\",\\"manifestB\\":\\"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d\\",\\"frameId\\":1049,\\"shape\\":[128,224],\\"axisOrder\\":\\"ZX\\",\\"originXYZ\\":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],\\"spacing\\":0.049999999148505836,\\"resources\\":{\\"heightA\\":{\\"file\\":\\"1049-heightA.bin\\",\\"dtype\\":\\"float64-le\\",\\"bytes\\":229376,\\"sha256\\":\\"24c95d7cdfa22d12d1baa44f16647a69b44fde83a51177b9c999d4111f751d9a\\"},\\"heightB\\":{\\"file\\":\\"1049-heightB.bin\\",\\"dtype\\":\\"float64-le\\",\\"bytes\\":229376,\\"sha256\\":\\"c8257805f4d3da79b0d2c5e336cea75c4b4bcfa66a55377dfe3da25004ad03b2\\"},\\"wetA\\":{\\"file\\":\\"1049-wetA.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"wetB\\":{\\"file\\":\\"1049-wetB.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"common\\":{\\"file\\":\\"1049-common.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"steep\\":{\\"file\\":\\"1049-steep.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"2cf37c40b5fa4df751e05dfe9fe920a9a2efce396ff746978ff1e0c4f1b688db\\"},\\"calmCells\\":{\\"file\\":\\"1049-calmCells.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"7cfdd3055066ff1620d4127ff4e0e4aaf6f94aeb6996731887065efac3533d22\\"},\\"breakingBand\\":{\\"file\\":\\"1049-breakingBand.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747\\"},\\"calmBand\\":{\\"file\\":\\"1049-calmBand.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1\\"}},\\"summary\\":{\\"common\\":19487,\\"mae_m\\":0.020208329793287478,\\"bias_m\\":-0.007192271702029772,\\"rmse_m\\":0.031439791153657054}}","hotspot":{"ix":174,"iz":69,"index":15630,"x":-0.9499998624834376,"z":0.8999998939357159},"roi":{"xmin":-1.449999853968496,"xmax":-0.44999987099837924,"zmin":0.39999990245065753,"zmax":1.3999998854207742},"directionDeg":0,"anchorMode":"hotspot"},"appearance":{"absoluteError":true}},"velocity":{"schema":"oceanscope.velocity-diagnosis.v1","source":{"caseId":"best-1027","codeRevision":"6941367eb0fe09eefefd34144ccd67ed9403b2d4","calculation":"native-xz-paired-v1","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","originals":{"gt":{"frame":1049,"file":"clean_fullsdf_vel.1049.vdb","bytes":11105671,"sha256":"a821ec84b9f2eecc09f234cdf05050e77e3572d6f9c3d46bce94d0a28f328df9","manifestSha256":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},"prediction":{"frame":1049,"file":"recon_fullsdf_vel.1049.vdb","bytes":10571839,"sha256":"ff18d054439135a9c39abc139aa628ca7dcb753dd46b389b86bde47747f5d4c3","manifestSha256":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},"resource":{"frame":1049,"url":"/data/velocity-raw/1049.ocfld.gz","packedBytes":15261605,"packedSha256":"913c1ddbec87d484f71905720334c90ca6ebccdad5c48a543f69eb405308e707","decodedBytes":62391416,"decodedSha256":"403ff5ea6e2afcd3129761caa6a5adf7f2699e180d1733e85774ea1a55df4ef1","roundtrip":"exact"}},"alignment":{"lattice":{"dimensions":[224,64,128],"origin":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],"axisSteps":[[0.049999999148505836,0,0],[0,0.049999999148505836,0],[0,0,0.049999999148505836]],"voxelSize":[0.049999999148505836,0.049999999148505836,0.049999999148505836]},"unitClaim":"m/s","unitEvidence":"Existing source convention only; no independent physical or time calibration.","vectorBasis":{"status":"source-convention","evidence":"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.","independentPhysicalCalibration":false}},"domain":{"id":"collaborator-native","definition":{"id":"collaborator-native","cropX":[11,212],"cropZ":[11,105],"gtSdfCutoffFloat32":-0.10000000149011612,"rule":"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"}},"plane":{"frame":1049,"axis":"xz","yIndex":28,"yWorld":-0.10000004433093324},"roi":{"xmin":-1.449999853968496,"xmax":-0.44999987099837924,"zmin":0.39999990245065753,"zmax":1.3999998854207742},"probe":{"xIndex":174,"zIndex":69,"xyz":[-0.9499998624834376,-0.10000004433093324,0.8999998939357159]},"appearance":{"mode":"speedDelta","zoom":true,"viewport":{"x":164,"z":59,"width":21,"height":21},"ranges":{"speed":[0,2.872923899598361],"vectorError":[0,2.0896808971216365],"speedDelta":[-1.750984564815481,1.750984564815481],"direction":[0,180]}},"arrows":{"enabled":true,"stride":4,"gain":1.0036370012923275,"referenceSpeed":2.8695633942267817,"referenceGridLength":2.8800000000000003},"angleThreshold":{"tau":0.2,"unit":"m/s (source convention)","source":"user diagnostic input"},"surfaceCase":{"frame":1049,"hotspotXZ":{"x":-0.9499998624834376,"z":0.8999998939357159},"roiXZ":{"xmin":-1.449999853968496,"xmax":-0.44999987099837924,"zmin":0.39999990245065753,"zmax":1.3999998854207742},"surfaceCaseId":"raw-reference-96-e81b8955734e","caseNote":"案例B：沿X局部窗口内，GT与预测峰顶位置不同，峰高也不同；该观察不等于纯平移误差，也不构成自动峰配对。","surfaceIdentity":{"runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}}},"inputs":{"surface":"301fb43b2c3db75b05a1b5426bd735e8bd95252b3df0c4b95cb1d9324dc2b0ec","velocity":"d9b2d13b48884f23ae57dab94fb1b3d4a1bb7bf9d422ccf4f46be7e15dbb6de5"}}'),Rt={A:R0,B:P0},oa=`{
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
`;async function $t(n,{signal:a}={}){const s=xn(n);if(!s)throw Error("No verified velocity diagnostic resource for this frame");let t;{const i=await Rr(s.resource);if(!i)throw Object.assign(new Error(`请选择本机文件 / Select ${n}.ocfld.gz`),{code:"VELOCITY_FILE_REQUIRED"});t=await i.arrayBuffer()}a?.throwIfAborted();const c=pc(await Wt(t,s.resource));return a?.throwIfAborted(),{frame:c,lattice:s.lattice,alignment:s}}const kc=["collaborator-native","common-finite-exploration"];function Mc({frame:n,lattice:a,alignment:s,domain:t}){if(!kc.includes(t))throw Error("Unknown velocity domain");if(t==="collaborator-native"&&!s?.dataAndDomainVerified)throw Error("Velocity domain has not been verified");const c=a?.dimensions,i=a?.origin,o=a?.axisSteps;if(!c||c.length!==3||c.some(h=>!Number.isInteger(h)||h<1)||!i||i.some(h=>!Number.isFinite(h))||!o||o.length!==3||o.some((h,u)=>h.length!==3||h.some((d,p)=>!Number.isFinite(d)||(u===p?d<=0:d!==0))))throw Error("Unsupported velocity lattice");const r=n?.groups?.velocity,f=n?.groups?.sdf?.ground_truth;if([f,r?.ground_truth_valid,r?.prediction_valid,...["ground_truth","prediction"].flatMap(h=>[..."xyz"].map(u=>r?.[h+"."+u]))].some(h=>!h||h.shape?.length!==3||h.shape.some((u,d)=>u!==c[d])||h.values?.length!==c[0]*c[1]*c[2]))throw Error("Velocity field shape mismatch");const m=s?.domainDefinition?.cropX??[11,212],g=s?.domainDefinition?.cropZ??[11,105];function x(h,u,d){const p=h+c[0]*(u+c[1]*d),w=t!=="collaborator-native"||h>=m[0]&&h<m[1]&&d>=g[0]&&d<g[1],j=w&&r.ground_truth_valid.values[p]>0&&(t!=="collaborator-native"||f.values[p]<Math.fround(-.1)),S=w&&r.prediction_valid.values[p]>0,v=j&&S,_=[..."xyz"].map(A=>r["ground_truth."+A].values[p]),y=[..."xyz"].map(A=>r["prediction."+A].values[p]),C=[..._,...y].every(Number.isFinite);return{candidate:w,gtEligible:j,predValid:S,paired:v,common:v&&C,nonfiniteExcluded:v&&!C,gt:_,pred:y}}return{d:c,o:i,a:o,sample:x,world:(h,u,d)=>i.map((p,w)=>p+o[0][w]*h+o[1][w]*u+o[2][w]*d)}}function Xt(n,{x:a,z:s}){return[Math.round((a-n.origin[0])/n.axisSteps[0][0]),Math.round((s-n.origin[2])/n.axisSteps[2][2])]}function I0(n){const{d:a,sample:s}=Mc(n),[t,c]=Xt(n.lattice,n.hotspotXZ);if(t<0||t>=a[0]||c<0||c>=a[2])return null;for(let i=a[1]-1;i>=0;i--)if(s(t,i,c).common)return i;return null}function Zt(n){if(n.plane!=="xz")throw Error("Velocity diagnosis supports XZ slices only");const{d:a,a:s,world:t,sample:c}=Mc(n),[i,o,r]=a,f=n.sliceIndex;if(!Number.isInteger(f)||f<0||f>=o)throw Error("Velocity Y index is outside the grid");const l=n.roiXZ;if(l&&(Object.values(l).length!==4||["xmin","xmax","zmin","zmax"].some(v=>!Number.isFinite(l[v]))||l.xmin>l.xmax||l.zmin>l.zmax))throw Error("Invalid velocity ROI bounds");const m={domain:n.domain,width:i,height:r,sliceIndex:f,stepX:s[0][0],stepZ:s[2][2],worldAt:v=>t(v%i,f,Math.floor(v/i)),roiView:null};for(const v of["speedGT","speedPred","vectorError","speedDelta"])m[v]=new Float64Array(i*r).fill(NaN);for(const v of["candidate","gtEligible","common","roi"])m[v+"Mask"]=new Uint8Array(i*r);m.vectorsGT=new Float64Array(3*i*r),m.vectorsPred=new Float64Array(3*i*r);const g=()=>({counts:{candidate:0,gtEligible:0,predValid:0,paired:0,common:0,nonfiniteExcluded:0,gtOnly:0,predOnly:0},sumE:0,sumDelta:0,maximum:null}),x=g(),h=g();function u(v,_,y){for(const C of["candidate","gtEligible","predValid","paired","common","nonfiniteExcluded"])v.counts[C]+=Number(_[C]);if(v.counts.gtOnly+=Number(_.gtEligible&&!_.predValid),v.counts.predOnly+=Number(_.predValid&&!_.gtEligible),_.common){const C=m.vectorError[y];v.sumE+=C,v.sumDelta+=m.speedDelta[y],(!v.maximum||C>v.maximum.value)&&(v.maximum={value:C,index:y,world:m.worldAt(y)})}}let d=i,p=-1,w=r,j=-1;for(let v=0;v<r;v++)for(let _=0;_<i;_++){const y=_+i*v,C=c(_,f,v),[B,,A]=t(_,f,v);for(const b of["candidate","gtEligible","common"])m[b+"Mask"][y]=Number(C[b]);C.common&&(m.vectorsGT.set(C.gt,3*y),m.vectorsPred.set(C.pred,3*y),m.speedGT[y]=Math.hypot(...C.gt),m.speedPred[y]=Math.hypot(...C.pred),m.vectorError[y]=Math.hypot(...C.pred.map((b,M)=>b-C.gt[M])),m.speedDelta[y]=m.speedPred[y]-m.speedGT[y]),u(x,C,y),(!l||B>=l.xmin&&B<=l.xmax&&A>=l.zmin&&A<=l.zmax)&&(u(h,C,y),m.roiMask[y]=1,d=Math.min(d,_),p=Math.max(p,_),w=Math.min(w,v),j=Math.max(j,v))}p>=0&&(m.roiView={x:d,z:w,width:p-d+1,height:j-w+1});function S(v){const _=v.counts;return{counts:_,coverageCandidate:_.candidate?_.common/_.candidate:null,coverageGT:_.gtEligible?_.common/_.gtEligible:null,meanE:_.common?v.sumE/_.common:null,meanSpeedDelta:_.common?v.sumDelta/_.common:null,maximum:v.maximum}}return m.whole=S(x),m.local=S(h),m}function Gt(n,a){if(a!==null&&(!Number.isFinite(a)||a<0))throw Error("Invalid direction threshold");const{commonMask:s,roiMask:t,vectorsGT:c,vectorsPred:i,speedGT:o,speedPred:r}=n,f=new Float64Array(s.length).fill(NaN),l=new Uint8Array(s.length);let m=0,g=0,x=0,h=0;if(a!==null)for(let d=0;d<s.length;d++){if(!s[d])continue;const p=Hi(c,i,o[d],r[d],a,3*d);p!==null&&(f[d]=p,l[d]=1,x++,m+=p,t[d]&&(h++,g+=p))}const u=(d,p,w)=>({count:d,excludedLowSpeedCount:a===null?null:w-d,meanDegrees:d?p/d:null});return{degrees:f,mask:l,whole:u(x,m,n.whole.counts.common),local:u(h,g,n.local.counts.common)}}function Ht(n,a,s,t,c=4){const{width:i,commonMask:o,vectorsGT:r,vectorsPred:f,stepX:l,stepZ:m}=n;let g=t??0;for(let p=0;t===void 0&&p<o.length;p++)o[p]&&(g=Math.max(g,Math.hypot(r[3*p],r[3*p+2]),Math.hypot(f[3*p],f[3*p+2])));const x=g>0?.72*c/g:0,h=Math.min(l,m),u=p=>[p[0]*x*h/l,p[2]*x*h/m],d=[];for(let p=Math.ceil(a.z/s)*s;p<a.z+a.height;p+=s)for(let w=Math.ceil(a.x/s)*s;w<a.x+a.width;w+=s){const j=w+i*p;if(!o[j])continue;const S=Array.from(r.subarray(3*j,3*j+3)),v=Array.from(f.subarray(3*j,3*j+3));d.push({index:j,x:w,z:p,gt:S,pred:v,gtOffset:u(S),predOffset:u(v)})}return{points:d,stride:s,gain:x,maxProjection:g,referenceSpeed:g,referenceGridLength:u([g,0,0])[0]}}const qt="oceanscope.velocity-diagnosis.v1",Rc="native-xz-paired-v1",N0=["vectorError","speedDelta","direction"],Xs=["xmin","xmax","zmin","zmax"],In=(n,a)=>a&&typeof a=="object"?n&&typeof n=="object"&&(!Array.isArray(a)||Array.isArray(n)&&n.length===a.length)&&Object.keys(a).every(s=>In(n[s],a[s])):n===a,Ln=(n,a)=>Number.isInteger(n)&&n>=0&&n<a;function Zs(n){if(!n||Xs.some(a=>!Number.isFinite(n[a]))||n.xmin>n.xmax||n.zmin>n.zmax)throw Error("Velocity report ROI is invalid");return Object.fromEntries(Xs.map(a=>[a,n[a]]))}function Gs(n,a,s,t=new Date().toISOString()){const{display:c,direction:i,probe:o}=n,[r]=a.lattice.dimensions,{arrows:f}=c;return structuredClone({schema:qt,createdAt:t,source:{caseId:a.caseId,codeRevision:s,calculation:Rc,protocolSha256:a.protocolSha256,originals:a.source,resource:a.resource},alignment:{lattice:a.lattice,unitClaim:a.unitClaim,unitEvidence:a.unitEvidence,vectorBasis:a.vectorBasis},domain:{id:n.domain,definition:n.domainDefinition},plane:{frame:a.frame,axis:"xz",yIndex:n.yIndex,yWorld:n.yWorld},roi:n.roiXZ,probe:{xIndex:o.index%r,zIndex:Math.floor(o.index/r),xyz:o.xyz},appearance:{mode:c.mode,zoom:c.zoomed,viewport:c.view,ranges:c.ranges},arrows:{scaleCells:c.scaleCells??4,enabled:f!==null,stride:f?.stride??null,gain:f?.gain??null,referenceSpeed:f?.referenceSpeed??null,referenceGridLength:f?.referenceGridLength??null},angleThreshold:{tau:i.tau,unit:i.unit,source:i.thresholdSource},summary:{whole:n.whole,roi:n.local,direction:{whole:i.whole,roi:i.local}},samples:{scope:"Probe and displayed arrow anchors. CSV contains the full native slice.",probe:o,arrowNativeIndices:f?.points.map(l=>l.index)??[]},surfaceCase:n.surfaceRequest,...n.streamlines&&{streamlines:n.streamlines}})}function Pc(n,{alignment:a,caseId:s,runId:t}){if(new TextEncoder().encode(n).length>1024*1024)throw Error("Velocity report too large");let c;try{c=JSON.parse(n)}catch{throw Error("Invalid analysis JSON")}if(c?.schema!==qt)throw Error("Unsupported velocity report");const{source:i,plane:o,appearance:r,arrows:f,probe:l,surfaceCase:m,angleThreshold:g}=c,x=a??xn(o?.frame);if(!x||s!==x.caseId||!In(i,{caseId:s,calculation:Rc,protocolSha256:x.protocolSha256,originals:x.source,resource:x.resource})||!In(c.alignment,{lattice:x.lattice,unitClaim:x.unitClaim,unitEvidence:x.unitEvidence,vectorBasis:x.vectorBasis})||o?.frame!==x.frame)throw Error("Velocity report source identity mismatch");const[h,u,d]=x.lattice.dimensions;if(o.axis!=="xz"||!Ln(o.yIndex,u)||!Ln(l?.xIndex,h)||!Ln(l?.zIndex,d))throw Error("Velocity report slice or probe is outside the native lattice");if(!kc.includes(c.domain?.id)||!N0.includes(r?.mode)||typeof r.zoom!="boolean"||typeof f?.enabled!="boolean")throw Error("Velocity report display settings are invalid");const p=r.zoom?4:16,w=Math.min(p,r.viewport?.width??h,r.viewport?.height??d),j=f.scaleCells??w;if(!Number.isInteger(j)||j<1||j>16)throw Error("Velocity report arrow reference span is invalid");const S=g?.tau;if(S!==null&&(!Number.isFinite(S)||S<0))throw Error("Velocity report threshold is invalid");const v=Zs(c.roi),_=Zs(m?.roiXZ),y=m?.hotspotXZ,C={runId:t,protocolSha256:x.protocolSha256,manifestA:x.source.gt.manifestSha256,manifestB:x.source.prediction.manifestSha256};if(!t||m?.frame!==x.frame||m?.surfaceCaseId!==t||!In(m?.surfaceIdentity,C)||!Number.isFinite(y?.x)||!Number.isFinite(y?.z))throw Error("Velocity report surface reference identity mismatch");const[B,A]=Xt(x.lattice,y),b=c.streamlines?.stepFraction;if(c.streamlines!==void 0&&(x.frame!==1049||c.domain.id!=="collaborator-native"||![.125,.25].includes(b)))throw Error("Velocity report streamline step or frame is invalid");if(!Ln(B,h)||!Ln(A,d)||typeof m.caseNote!="string"||m.caseNote.length>1e3)throw Error("Velocity report surface hotspot or note is invalid");return{request:{frame:x.frame,hotspotXZ:{x:y.x,z:y.z},roiXZ:_,surfaceCaseId:t,caseNote:m.caseNote,surfaceIdentity:C},view:{scaleCells:j,domain:c.domain.id,y:o.yIndex,roi:v,probe:[l.xIndex,l.zIndex],mode:r.mode,zoom:r.zoom,showArrows:f.enabled,tau:S,...b&&{streamlineStepFraction:b}}}}async function Ic(n,a,s,t=$t){s.throwIfAborted();const c=Pc(n,a),i=a.alignment??xn(c.request.frame),o=await t(c.request.frame,{signal:s});if(s.throwIfAborted(),!In(o.alignment,i)||!In(o.lattice,i.lattice))throw Error("Velocity report loaded identity mismatch");return{...c,loaded:o}}function F0(n,a,s){const{plane:t,domain:c}=n,i=new Set(n.samples.arrowNativeIndices),o=["frame,y_index,native_index,x_index,z_index,x,y,z,domain,in_roi,candidate,gt_eligible,common,probe,arrow_anchor,gt_vx,gt_vy,gt_vz,pred_vx,pred_vy,pred_vz,gt_speed,pred_speed,vector_error,speed_delta,direction_tau,angle_eligible,angle_degrees"];for(let r=0;r<a.commonMask.length;r++){const f=a.commonMask[r],l=s.mask[r],m=f?[...a.vectorsGT.subarray(3*r,3*r+3),...a.vectorsPred.subarray(3*r,3*r+3),a.speedGT[r],a.speedPred[r],a.vectorError[r],a.speedDelta[r]]:Array(10).fill("");o.push([t.frame,t.yIndex,r,r%a.width,Math.floor(r/a.width),...a.worldAt(r),c.id,a.roiMask[r],a.candidateMask[r],a.gtEligibleMask[r],f,+(r===n.samples.probe.index),Number(i.has(r)),...m,n.angleThreshold.tau,l,l?s.degrees[r]:""].join(","))}return o.join(`
`)+`
`}function Nc(n,a,s=.25){const{width:t,height:c,stepX:i,stepZ:o,commonMask:r}=n,f=Math.min(i,o),l=f*s,m=f,g=24*f,x=Math.round(g/l),h=1e-8,u=_=>{const[y,,C]=n.worldAt(0);return[y+_[0]*i,C+_[1]*o]};function d(_,y){const[C,B]=_;if(C<0||B<0||C>=t-1||B>=c-1)return{stop:"grid"};const A=Math.floor(C)+t*Math.floor(B),b=C%1,M=B%1,R=[A,A+1,A+t,A+t+1],I=[(1-b)*(1-M),b*(1-M),(1-b)*M,b*M];if(R.some(Z=>!r[Z]))return{stop:"mask"};const N=Z=>R.reduce((ne,D,K)=>ne+I[K]*y[D*3+Z],0),z=N(0),$=N(2),X=Math.hypot(z,$);return X<=h?{stop:"slow"}:{dir:[z/X/i,$/X/o]}}const p=(_,y,C)=>[_[0]+C*y[0],_[1]+C*y[1]];function w(_){const y=[];let C=a;for(let B=0;B<=x;B++){const A=d(C,_);if(A.stop)return{points:y,stop:A.stop};if(y.push(u(C)),B===x)return{points:y,stop:"limit"};const b=d(p(C,A.dir,l/2),_);if(b.stop)return{points:y,stop:b.stop};const M=p(C,b.dir,l),R=[0,1];for(let I=0;I<2;I++)for(let N=Math.floor(Math.min(C[I],M[I]))+1;N<Math.max(C[I],M[I]);N++)R.push((N-C[I])/(M[I]-C[I]));R.sort((I,N)=>I-N);for(let I=1;I<R.length;I++){const N=d(p(C,b.dir,l*(R[I]+R[I-1])/2),_);if(N.stop)return{points:y,stop:N.stop}}C=M}}const j=w(n.vectorsGT),S=w(n.vectorsPred);let v=null;for(let _=1;_<Math.min(j.points.length,S.points.length);_++){const y=j.points[_],C=S.points[_],B=Math.hypot(y[0]-C[0],y[1]-C[1]);if(B>=m){v={i:_,arc:_*l,gap:B,gt:y,pred:C};break}}return{seed:u(a),step:l,separation:m,maxArc:g,floor:h,gt:j,pred:S,split:v}}const O0="oceanscope.paired-case.v1",D0={plane:"xz",direction:"forward",method:"normalized-midpoint-rk2",interpolation:"bilinear-four-common",separationCells:1,maxArcCells:24,speedFloor:1e-8},Yn=n=>JSON.stringify(n,(a,s)=>s&&typeof s=="object"&&!Array.isArray(s)?Object.fromEntries(Object.keys(s).sort().map(t=>[t,s[t]])):s);function La(n,a=.25){if(!Object.hasOwn(Rt,n)||![.125,.25].includes(a))throw Error("Unknown 1049 case or integration step");const s=Rt[n],c={...s.surface,source:{...s.surface.source,declarationsSha256:"b4b0602325141df1c3f185e1578e94eca1b627b3cedd1c96f5401291e574843c"}};return{schema:O0,id:n,...s,surface:c,integration:{...D0,stepFraction:a}}}async function W0(n,a,s,t){const c=La(n.id,n.integration?.stepFraction);for(const A of Object.keys(c))if(Yn(n[A])!==Yn(c[A]))throw Error("1049 case settings or source identity mismatch: "+A);const i=await $a(oa,Xa.indexSha256,a),o=Ac(JSON.stringify(c.surface),a,i,{catalog:s}),[r,f]=await Promise.all([sa(o.descriptor,{...Nn(a),frameId:1049},t),Ic(JSON.stringify(c.velocity),{caseId:s[0].id,runId:a.runId},t)]);t.throwIfAborted();const{hotspot:l}=o.diagnosis,{request:m,view:g,loaded:x}=f;if(o.view.frame!==m.frame||l.x!==m.hotspotXZ.x||l.z!==m.hotspotXZ.z||!r.common[l.index]||Yn(o.roi)!==Yn(m.roiXZ)||l.ix!==g.probe[0]||l.iz!==g.probe[1])throw Error("Surface and velocity selections do not coincide");const h=Zt({...x,plane:"xz",sliceIndex:g.y,domain:g.domain,roiXZ:g.roi}),u=g.zoom?h.roiView:{x:0,z:0,width:h.width,height:h.height},d=Gt(h,g.tau),p=g.showArrows?Ht(h,u,g.zoom?4:16,void 0,g.scaleCells):null,w=Dn(r,o.diagnosis),j=Fn(r,o.roi),S=[r.heightA[l.index],r.heightB[l.index]],v=h.worldAt(0)[1],_=n.crest;_!==void 0&&On({...o,profiles:w},_);const y=new TextEncoder().encode(Yn(Rt[c.id])),C=await crypto.subtle.digest("SHA-256",y),B=Array.from(new Uint8Array(C),A=>A.toString(16).padStart(2,"0")).join("");return{settings:c,presetSha:B,mark:_,surface:{...o,profiles:w},spatial:r,slice:h,angles:d,arrows:p,height:j,surfaceY:S,velocityY:v,view:g}}function T0(n,a){const s=Nc(n.slice,n.view.probe,a),c={...La(n.settings.id,a),codeRevision:"eaf428574e53d5745a8d6322dcf66bbc9fbd29c4",evidence:{surfaceY:n.surfaceY,velocityY:n.velocityY,heightROI:n.height,velocityROI:n.slice.local,profiles:n.surface.profiles,streamlines:s}};return n.mark&&(c.crest=n.mark,c.evidence.crests=On(n.surface,n.mark)),{record:c,pair:s}}function V0(n,a){const s=[["kind","role","index","x","y","z","arc_or_distance","GT","prediction","difference","vx","vy","vz","stop"]],t=n.surface.diagnosis.hotspot;s.push(["surface-hotspot","",t.index,t.x,"",t.z,"",...n.surfaceY,n.surfaceY[1]-n.surfaceY[0]]);for(const[i,o]of Object.entries(n.surface.profiles))o.points.forEach((r,f)=>s.push(["profile",i,f,r.x,"",r.z,r.distance,r.a,r.b,r.difference]));if(n.mark){const{gt:i,pred:o}=On(n.surface,n.mark);for(const[r,f,l]of[["gt",i,n.mark.a],["prediction",o,n.mark.b]])s.push(["crest-"+n.mark.profile,r,l,f.x,"",f.z,f.distance,f.a,f.b,f.difference])}const c=n.slice;for(let i=0;i<c.commonMask.length;i++)if(!(!c.roiMask[i]||!c.commonMask[i]))for(const[o,r]of[["gt",c.vectorsGT],["prediction",c.vectorsPred]])s.push(["velocity-roi",o,i,...c.worldAt(i),"",c.speedGT[i],c.speedPred[i],c.vectorError[i],...r.subarray(i*3,i*3+3)]);for(const[i,o]of[["gt",a.gt],["prediction",a.pred]])o.points.forEach(([r,f],l)=>s.push(["streamline",i,l,r,n.velocityY,f,l*a.step,"","","","","","",l===o.points.length-1?o.stop:""]));return s.map(i=>Array.from({length:14},(o,r)=>i[r]??"").join(",")).join(`
`)+`
`}const fe=(n,a=6)=>n==null?"N/A":Number(n).toPrecision(a);function le(n,a,s,t,c=1800,i=23,o="#203747"){for(n.fillStyle=o,n.font=`${i}px sans-serif`;n.measureText(String(a)).width>c&&i>12;)n.font=`${--i}px sans-serif`;n.fillText(String(a),s,t)}function xt(n,a,s,t,c,i=20){n.font=`${i}px sans-serif`,n.fillStyle="#3c5365";let o="";for(const r of String(a).split(" ")){const f=o?o+" "+r:r;n.measureText(f).width>c&&o?(n.fillText(o,s,t),t+=i+8,o=r):o=f}return n.fillText(o,s,t),t+i+8}function Fc(n,a,s,t,c,i,o,r,f,l){const[m,g]=a.descriptor.shape,x=document.createElement("canvas");x.width=g,x.height=m;const h=x.getContext("2d"),u=h.createImageData(g,m),d=t==="difference",p=d&&s.appearance?.absoluteError,w=d?a.common:a[t==="heightA"?"wetA":"wetB"],j=d?[p?0:-l,l]:f;for(let B=0;B<m;B++)for(let A=0;A<g;A++){const b=B*g+A,M=((m-1-B)*g+A)*4;if(!w[b]){u.data.set([225,230,235,255],M);continue}const R=a.heightB[b]-a.heightA[b],I=d?p?Math.abs(R):R:a[t][b],N=Math.max(0,Math.min(1,(I-j[0])/(j[1]-j[0]))),z=d&&!p?N<.5?[80+350*N,130+230*N,220+70*N]:[255,245-350*(N-.5),255-440*(N-.5)]:[35+195*N,75+155*N,155+70*N];u.data.set([...z,255],M)}h.putImageData(u,0,0),n.imageSmoothingEnabled=!1,n.drawImage(x,c,i,o,r);const{originXYZ:[S,,v],spacing:_}=a.descriptor,y=(B,A)=>[c+(B-S+_/2)/(g*_)*o,i+r-(A-v+_/2)/(m*_)*r];n.strokeStyle="#182b3c",n.lineWidth=2;for(const B of s.profiles?Object.values(s.profiles):[s.profile])B?.points.length&&(n.beginPath(),B.points.forEach((A,b)=>n[b?"lineTo":"moveTo"](...y(A.x,A.z))),n.stroke());if(s.roi){const B=y(s.roi.xmin,s.roi.zmax),A=y(s.roi.xmax,s.roi.zmin);n.save(),n.beginPath(),n.rect(c,i,o,r),n.clip(),n.strokeRect(B[0],B[1],A[0]-B[0],A[1]-B[1]),n.restore()}if(s.probe){const[B,A]=y(s.probe.x,s.probe.z);n.beginPath(),n.moveTo(B-5,A),n.lineTo(B+5,A),n.moveTo(B,A-5),n.lineTo(B,A+5),n.stroke()}const C=n.createLinearGradient(c,0,c+o,0);d&&!p?(C.addColorStop(0,"rgb(80,130,220)"),C.addColorStop(.5,"rgb(255,245,255)"),C.addColorStop(1,"rgb(255,70,35)")):(C.addColorStop(0,"rgb(35,75,155)"),C.addColorStop(1,"rgb(230,230,225)")),n.fillStyle=C,n.fillRect(c,i+r+8,o,9),le(n,`${fe(j[0])} ... ${fe(j[1])} m`,c,i+r+38,o,21),le(n,`X ${fe(S,4)} ... ${fe(S+(g-1)*_,4)}; Z ${fe(v,4)} ... ${fe(v+(m-1)*_,4)} m`,c,i+r+62,o,19)}function Ta(n,a,s,t,c,i,o=null,r=null,f="en"){const l=(y,C)=>f==="zh"?y:C,m=a.profile?.points??[],g=m.flatMap(y=>[y.a,y.b]).filter(Number.isFinite);if(le(n,`${l("剖面：","Section: ")}${r??a.view.plane.toUpperCase()} / ${a.profile?.sampling==="native_columns"?l("原生列","native columns"):a.profile?.sampling==="bilinear_common_four"?l("双线性插值 · 四邻点共同有效","bilinear · all four neighbours valid"):l("无高度剖面","no height profile")}`,s,t,c,24),!g.length){le(n,l("此截面无有效高度剖面。","No valid height profile for this section."),s,t+50,c);return}const x=o?.[0]??Math.min(...g),h=o?.[1]??Math.max(...g),u=Math.max(h-x,1e-9),d=m[0].distance,p=Math.max(m.at(-1).distance-d,1e-9),w=Math.max(...m.map(y=>Math.abs(y.difference??0)),1e-9),j=s+65,S=t+45,v=c-95,_=i-120;if(a.diagnosis){const y=a.roi?Ka(a.profile,a.roi):null;if(y){const B=Math.max(d,y[0]),A=Math.min(d+p,y[1]);A>=B&&(n.fillStyle="#deefee",n.fillRect(j+(B-d)/p*v,S,(A-B)/p*v,_+65))}n.strokeStyle="#888",n.beginPath();const C=j-d/p*v;n.moveTo(C,S),n.lineTo(C,S+_+65),n.stroke(),le(n,l("热点 t=0","hotspot t=0"),C+3,S,100,16)}n.strokeStyle="#798699",n.lineWidth=1,n.beginPath(),n.moveTo(j,S+_+35),n.lineTo(j+v,S+_+35),n.stroke(),le(n,"0",s+35,S+_+40,25,18);for(const[y,C]of[["a","#2583c5"],["b","#e08b22"],["difference","#9b4778"]]){n.strokeStyle=C,n.lineWidth=2,n.beginPath();let B=!1;for(const A of m){if(A[y]==null){B=!1;continue}const b=j+(A.distance-d)/p*v,M=y==="difference"?S+_+35-A[y]/w*25:S+_*.7-(A[y]-x)/u*_*.7;n[B?"lineTo":"moveTo"](b,M),B=!0}n.stroke()}if(a.crest)for(const[y,C]of[["a","#176693"],["b","#a75400"]]){const B=m[a.crest[y]],A=j+(B.distance-d)/p*v,b=S+_*.7-(B[y]-x)/u*_*.7;n.strokeStyle=C,n.lineWidth=2,n.beginPath(),n.arc(A,b,5,0,2*Math.PI),n.stroke()}le(n,`${fe(h,4)} m`,s,S+12,65,16),le(n,`${fe(x,4)} m`,s,S+_*.7,65,16),le(n,`B-A ±${fe(w,4)} m`,j,S+_+70,v,18),le(n,`${l("GT 蓝 / B 橙 / B-A 紫；距离 ","GT blue / B orange / B-A purple; distance ")}${fe(d,5)} ... ${fe(d+p,5)} m`,j,t+i+35,v,18)}function z0(n,a,s=null,t="en"){const c=(d,p)=>t==="zh"?d:p,i=document.createElement("canvas");i.width=1920,i.height=n.diagnosis?2650:2220;const o=i.getContext("2d");if(!o)throw Error("Report canvas unavailable");o.fillStyle="#f6f9fb",o.fillRect(0,0,i.width,i.height),o.fillStyle="#123247",o.fillRect(0,0,1920,170),le(o,`${c("OceanScope / 分析报告 / 帧 ","OceanScope / analysis report / frame ")}${n.view.frame}`,60,68,1800,43,"#fff"),le(o,`${n.source.runId} · ${n.createdAt}`,60,115,1800,22,"#d0e6ee"),le(o,`${c("高度：全部96帧 | 速度：","Height: all96 | Velocity: ")}${n.view.selection.subset==="all"?c("全部96帧","all96"):c("固定六帧","fixed six")} / ${n.view.selection.grid==="fine"?c("原生网格","native grid"):c("XZ 2×2均值","XZ 2×2 mean")}${c(" | ROI：当前原生列"," | ROI: current native columns")}`,60,150,1800,22,"#d0e6ee");let r=1/0,f=-1/0,l=1e-9;for(let d=0;d<a.heightA.length;d++){for(const p of["A","B"])a["wet"+p][d]&&(r=Math.min(r,a["height"+p][d]),f=Math.max(f,a["height"+p][d]));a.common[d]&&(l=Math.max(l,Math.abs(a.heightB[d]-a.heightA[d])))}const m=Number.isFinite(r)?[r,f>r?f:r+1]:[0,1];[["heightA",c("A / Ground Truth","A / Ground Truth")],["heightB",c("B / 预测","B / Prediction")],["difference",n.appearance?.absoluteError?c("|B - A| / 绝对高度差","|B - A| / absolute height"):c("B - A / 有符号高度差","B - A / signed height")]].forEach(([d,p],w)=>{le(o,p,60+w*620,215,580,28),Fc(o,a,n,d,60+w*620,240,560,320,m,l)});const g=d=>d==null?null:d*100,x=(d,p)=>`${p}: ${d?.common??0}${c(" 共同列 | MAE "," common columns | MAE ")}${fe(g(d?.mae_m))}${c(" cm | Bias "," cm | bias ")}${fe(g(d?.bias_m))} cm | RMSE ${fe(g(d?.rmse_m))} cm`;if(le(o,x(n.global,c("当前帧高度","Current frame height")),60,645,1800,25),le(o,n.local?x(n.local,c("选区高度","Selected ROI height")):c("ROI：未选择","ROI: none selected"),60,682,1800,25),le(o,n.roi?`ROI X [${n.roi.xmin}, ${n.roi.xmax}] / Z [${n.roi.zmin}, ${n.roi.zmax}] m`:c("灰色格点为缺测，不计为零。","Gray cells are unavailable, never zero."),60,719,1800,21),n.profiles){const d=Object.values(n.profiles).flatMap(w=>w.points.flatMap(j=>[j.a,j.b])).filter(Number.isFinite),p=d.length?[Math.min(...d),Math.max(...d)]:[0,1];Ta(o,{...n,profile:n.profiles.first,crest:n.crestMeasurement&&n.diagnosis.crest.profile==="first"?n.diagnosis.crest:null},60,770,850,300,p,c("热点剖面1","hotspot 1"),t),Ta(o,{...n,profile:n.profiles.second,crest:n.crestMeasurement&&n.diagnosis.crest.profile==="second"?n.diagnosis.crest:null},990,770,850,300,p,c("热点剖面2","hotspot 2"),t)}else Ta(o,n,60,770,990,300,null,null,t);if(s&&!n.diagnosis){const d=Math.min(770/s.width,320/s.height);o.drawImage(s,1110+(770-s.width*d)/2,780,s.width*d,s.height*d),le(o,c("当前帧三维预览；相机保存在 JSON 中","Current-frame 3D preview; camera retained in JSON"),1110,1130,770,20)}else n.diagnosis||xt(o,`${c("当前帧无三维截图：","No current-frame 3D capture: ")}${n.view.geometryStatus?.reason??c("不可用","unavailable")}${c("。保留原生空间数据和帧身份，不替换为邻帧。",". Native spatial data and frame identity are retained; no neighboring frame substituted.")}`,1120,850,700,25);if(n.diagnosis?.crest){const d=n.diagnosis.crest,p=n.crestMeasurement,w=d.status==="paired"?c("人工配对","Manually paired"):c("峰配对不确定","Correspondence uncertain");le(o,(d.profile==="first"?c("剖面 1","Profile 1"):c("剖面 2","Profile 2"))+" · "+w+(p?"   Δh "+fe(p.deltaHeight,5)+"   Δs "+fe(p.deltaDistance,5)+"   "+c("场景单位，预测减 GT","scene units, prediction minus GT"):""),60,1115,1800,24)}n.diagnosis?.caseNote&&le(o,c("案例观察：","Case observation: ")+n.diagnosis.caseNote,60,1155,1800,23),le(o,c("序列指标 / 明示有效域；完整精度与定义见 CSV + JSON","Sequence metrics / labelled scopes; full precision and definitions in CSV + JSON"),60,1200,1800,29);const h=Math.ceil(n.metrics.length/2);n.metrics.forEach((d,p)=>{const w=p>=h?1:0,j=p%h,S=60+w*930,v=1245+j*35;le(o,t==="zh"?d.labelZh??d.label:d.label,S,v,620,20),le(o,`${fe(d.value,8)} ${d.unit}`,S+630,v,260,20)});let u=1840;u=xt(o,t==="zh"&&n.scope==="Native highest-crossing height columns; ROI/profile do not replace all96 global metrics. Units are source convention, not independently calibrated."?"原生最高过零高度列；ROI / 剖面不替代全部96帧的全局指标。单位沿用来源约定，未独立标定。":n.scope,60,u,1800,22),u=xt(o,c("实验来源：模型、相机、划分与单位均为来源声明。检查点哈希未知。已核对原始文件清单身份；未独立审计训练历史或物理标定。","Experiment provenance: model / cameras / split / units are source declarations. Checkpoint hash is unknown. Original-file manifest identities were verified; training history and physical calibration were not independently audited."),60,u+8,1800,21);for(const[d,p]of Object.entries(n.source))le(o,`${d}: ${p}`,60,u+28,1800,18),u+=28;if(n.evidence){let d=2190;le(o,`${c("热点 (","Hotspot (")}${n.diagnosis.hotspot.ix},${n.diagnosis.hotspot.iz}) X=${fe(n.probe.x)} Z=${fe(n.probe.z)}${c(" | 方向 "," | direction ")}${n.diagnosis.directionDeg}${c(" 度"," deg")}`,60,d,1800,25),d+=42;for(const[p,w]of[[c("帧","Frame"),n.evidence.frame],["ROI",n.evidence.roi]])w&&(le(o,`${p}${c(": 共同 ",": common ")}${w.common}${c(" / 候选 "," / candidate ")}${w.candidates} / GT ${w.validGT}${c(" / 预测 "," / prediction ")}${w.validPrediction}${c("; 共同/候选 ","; common/candidate ")}${fe(w.coverageCandidate)}${c("; 共同/GT ","; common/GT ")}${fe(w.coverageGT)}`,60,d,1800,21),d+=30,le(o,`${p}${c(" 最大 |B-A|="," max |B-A|=")}${fe(w.maximum?.absolute)}${c(" m 位置 "," m at ")}${w.maximum?`X=${fe(w.maximum.x)}, Z=${fe(w.maximum.z)}${c(", 索引=",", index=")}${w.maximum.index}${c(", 并列=",", ties=")}${w.maximum.ties}`:"N/A"}`,60,d,1800,21),d+=32);for(const p of["first","second"])for(const w of["full","roi"]){const j=n.evidence[p][w];j&&(le(o,`${p==="first"?c("剖面1","Profile 1"):c("剖面2","Profile 2")} / ${w==="full"?c("全线","full line"):c("选区内","within ROI")}: n=${j.samples}${c("; 样本平均 MAE=","; sample mean MAE=")}${fe(j.mae)}${c(" m; Bias="," m; bias=")}${fe(j.bias)}${c(" m; 最大="," m; max=")}${fe(j.maximum?.absolute)}${c(" m（非面积统计）"," m (not area statistics)")}`,60,d,1800,20),d+=27)}}return le(o,c("使用 JSON 在 OceanScope 恢复此快照。必须匹配本地资源；测量值会重新计算。","Restore this snapshot in OceanScope with its JSON. Local resources must match; measurements are recomputed."),60,i.height-25,1800,20),i}const $0={vectorError:{title:"速度向量误差 E",label:"Velocity vector error map",palette:"absolute-error"},speedDelta:{title:"流速大小差 Δs",label:"Velocity speed delta map",palette:"error"},direction:{title:"三维方向夹角",label:"Velocity direction angle map",palette:"absolute-error"}};function et(n,a="zh"){const s=[{key:"speedGT",title:"GT 流速",label:"Velocity GT speed map",palette:"ground-truth",role:"gt"},{key:"speedPred",title:"预测流速",label:"Velocity prediction speed map",palette:"ground-truth",role:"pred"},{key:n,...$0[n]}],t={speedGT:"GT speed",speedPred:"Prediction speed",vectorError:"Velocity vector error E",speedDelta:"Speed difference Δs",direction:"3D direction angle"};return a==="zh"?s:s.map(c=>({...c,title:t[c.key]}))}function Oc(n,a,s,t){const c=[n+s,a+t];return[[n,a],c,[c[0]-.32*s+.2*t,c[1]-.32*t-.2*s],c,[c[0]-.32*s-.2*t,c[1]-.32*t+.2*s]]}const de=(n,a=6)=>Number.isFinite(n)?n.toPrecision(a):"N/A",Hs=n=>n==null?"N/A":(100*n).toFixed(2)+"%";function pe(n,a,s,t,c=1480,i=21,o="#203747"){for(n.fillStyle=o,n.font=`${i}px sans-serif`;n.measureText(String(a)).width>c&&i>14;)n.font=`${--i}px sans-serif`;n.fillText(a,s,t,c)}function qs(n,a,s,t,c,i,o){n.beginPath(),t===0&&c===0?n.arc(a,s,3,0,2*Math.PI):Oc(0,0,t,c).forEach(([r,f],l)=>n[l===0||l===2?"moveTo":"lineTo"](a+r*i,s+f*o)),n.lineCap="round",n.lineJoin="round",n.lineWidth=4,n.strokeStyle="#fff",n.stroke(),n.lineWidth=1.5,n.strokeStyle="#10273c",n.stroke()}function Lt(n,a,s,t,c,i,o,r="zh"){const f=(z,$)=>r==="zh"?z:$,{key:l,title:m,palette:g,role:x}=a,{viewport:h,zoom:u,ranges:d}=s.appearance,p=d[x?"speed":l],w=Math.min(470/(h.width*t.stepX),340/(h.height*t.stepZ)),j=w*t.stepX,S=w*t.stepZ,v=h.width*j,_=h.height*S,y=202;pe(n,m,o,186,470,25);const C=document.createElement("canvas");C.width=h.width,C.height=h.height,Ni(C.getContext("2d"),{...t,angleSupport:l==="direction"?t.commonMask:null,values:l==="direction"?c.degrees:t[l]},l==="direction"?c.mask:t.commonMask,p,g,h),n.imageSmoothingEnabled=!1,n.drawImage(C,o,y,v,_);const B=z=>o+(z-h.x+.5)*j,A=z=>y+(h.z+h.height-z-.5)*S;n.save(),n.beginPath(),n.rect(o,y,v,_),n.clip();const b=t.roiView;if(!u&&b&&(n.strokeStyle="#9c6900",n.lineWidth=2,n.strokeRect(B(b.x)-j/2,A(b.z+b.height-1)-S/2,b.width*j,b.height*S)),x)for(const z of i){const[$,X]=z[x==="gt"?"gtOffset":"predOffset"];qs(n,B(z.x),A(z.z),$,-X,j,S)}const M=B(s.probe.xIndex),R=A(s.probe.zIndex);M>=o&&M<o+v&&R>=y&&R<y+_&&(n.setLineDash([6,5]),n.beginPath(),n.moveTo(M,y),n.lineTo(M,y+_),n.moveTo(o,R),n.lineTo(o+v,R),n.strokeStyle="#fff",n.lineWidth=3,n.stroke(),n.strokeStyle="#111",n.lineWidth=1,n.stroke()),n.restore();const I=n.createLinearGradient(o,0,o+470,0);for(const z of[0,.5,1])I.addColorStop(z,`rgb(${Fi(p[0]+z*(p[1]-p[0]),p,g).join(",")})`);n.fillStyle=I,n.fillRect(o,562,470,11);const N=l==="direction"?"°":" m/s";pe(n,`${de(p[0],4)}${l==="speedDelta"?" / 0":""} / ${de(p[1],4)}${N}${x?f(" · 共用色标"," · Shared scale"):""}`,o,599,470),pe(n,l==="direction"?f("X → · Z ↑ · 灰纹：非共同域；浅黄：有效但无夹角","X → · Z ↑ · Grey: outside support; yellow: valid speed, no angle"):f("X → · Z ↑ · 棋盘为不在共同有效域","X → · Z ↑ · Checkerboard: outside common domain"),o,629,470,19),x&&i.length&&s.arrows.referenceSpeed&&(qs(n,o+8,654,s.arrows.referenceGridLength,0,j,S),pe(n,`${f("参考 ","Reference ")}${de(s.arrows.referenceSpeed,4)} m/s · ${i.length}${f(" 个配对点"," paired points")}`,o,683,470,19))}function X0(n,a,s,t,c="zh"){const i=(w,j)=>c==="zh"?w:j,o=document.createElement("canvas");o.width=1560,o.height=1170;const r=o.getContext("2d");if(!r)throw Error("Velocity report canvas unavailable");r.fillStyle="#f6f9fb",r.fillRect(0,0,1560,1170),r.fillStyle="#123247",r.fillRect(0,0,1560,142);const{plane:f,domain:l,roi:m,summary:g,angleThreshold:x,samples:h,source:u,surfaceCase:d}=n;pe(r,`${i("OceanScope · 速度诊断 · 第 ","OceanScope · Velocity diagnosis · frame ")}${f.frame}${i(" 帧"," ")}`,40,60,1480,38,"#fff"),pe(r,`${i("XZ · Y 索引 ","XZ · Y index ")}${f.yIndex}${i(" · 世界 Y "," · World Y ")}${de(f.yWorld,9)} m · ${l.id}`,40,100,1480,24,"#d0e6ee"),pe(r,`${u.caseId} · ${d.surfaceCaseId} · ${n.createdAt}`,40,128,1480,19,"#d0e6ee"),et(n.appearance.mode,c).forEach((w,j)=>Lt(r,w,n,a,s,t?.points??[],40+505*j,c)),pe(r,`ROI X [${de(m.xmin)}, ${de(m.xmax)}] · Z [${de(m.zmin)}, ${de(m.zmax)}] m`,40,724),pe(r,`${i("水面热点 X ","Surface hotspot X ")}${de(d.hotspotXZ.x)} · Z ${de(d.hotspotXZ.z)} · ${d.caseNote.slice(0,150)}`,40,757);const p=h.probe;pe(r,`${i("探针 XYZ (","Probe XYZ (")}${p.xyz.map(w=>de(w)).join(", ")}) · GT ${de(p.speedGT)}${i(" · 预测 "," · Prediction ")}${de(p.speedPred)} · E ${de(p.E)} · Δs ${de(p.speedDelta)}${i(" · 夹角 "," · Angle ")}${de(p.angleDegrees)}°`,40,790),pe(r,p.common?`Vy · GT ${de(p.vectorGT?.[1])} → ${i("预测","Pred")} ${de(p.vectorPred?.[1])} m/s · ${i("颜色：总流速（前两图）；箭头：XZ 投影","Colour: total speed (first two maps); arrows: XZ projection")}`:i("探针不在共同有效域","Probe outside common valid domain"),40,812,1480,17);for(const[w,j,S]of[["whole",i("整切片","Whole slice"),835],["roi","ROI",906]]){const v=g[w],_=g.direction[w];pe(r,`${j}${i(" · 共同 "," · Common ")}${v.counts.common}${i(" / 候选 "," / Candidate ")}${v.counts.candidate}${i(" · 共同/候选 "," · Common/candidate ")}${Hs(v.coverageCandidate)}${i(" · 共同/GT "," · Common/GT ")}${Hs(v.coverageGT)}${i(" · 平均 E "," · Mean E ")}${de(v.meanE)}${i(" · 平均 Δs "," · Mean Δs ")}${de(v.meanSpeedDelta)}`,40,S),pe(r,`${i("最大 E ","Maximum E ")}${de(v.maximum?.value)}${i(" · 平均三维夹角 "," · Mean 3D angle ")}${de(_.meanDegrees)}${i("° · 夹角有效 ","° · Angle valid ")}${_.count}${i(" · 低速排除 "," · Low-speed excluded ")}${_.excludedLowSpeedCount??"N/A"}`,40,S+30)}return pe(r,`${i("方向阈值 τ = ","Direction threshold τ = ")}${x.tau??i("停用","Disabled")}${i(" · 箭头为 XZ 投影 · 速度 m/s、坐标 m 均沿用来源声明"," · Arrows: XZ projections · Source units: velocity m/s, coordinates m")}`,40,991),pe(r,i("当前 Y 层诊断，非整帧体积评分；物理与时间尺度、向量基底尚未独立标定。","Current Y-layer diagnosis, not a volume score; physical/time scales and vector basis are not independently calibrated."),40,1025,1480,19),pe(r,l.definition.rule??l.id,40,1096,1480,17),pe(r,`${i("代码 ","Code ")}${u.codeRevision}${i(" · 资源 SHA-256 "," · Resource SHA-256 ")}${u.resource.packedSha256}`,40,1064,1480,18),pe(r,i("使用配套 JSON 恢复视图。恢复时核验资源并重算。CSV 保留整层原生格点。","Restore with the companion JSON; resources are verified and metrics recomputed. CSV retains the whole native layer."),40,1128,1480,19),o}function Z0(n,a,s="zh"){const t=(g,x)=>s==="zh"?g:x,c=document.createElement("canvas");c.width=1560,c.height=1940;const i=c.getContext("2d");if(!i)throw Error("Velocity comparison canvas unavailable");const{scope:o,result:r,source:f,view:l}=n;i.fillStyle="#f6f9fb",i.fillRect(0,0,c.width,c.height),i.fillStyle="#123247",i.fillRect(0,0,c.width,148),pe(i,t("OceanScope · Best_1027 三帧速度对照","OceanScope · Best_1027 three-frame velocity comparison"),40,56,1480,38,"#fff"),pe(i,`XZ · Y=${o.plane.yIndex} · ROI X [${de(o.roi.xmin)}, ${de(o.roi.xmax)}] Z [${de(o.roi.zmin)}, ${de(o.roi.zmax)}] m · τ=${o.tau} m/s`,40,99,1480,22,"#d0e6ee"),pe(i,`${t("三帧共同有效 ","Common valid across three frames ")}${r.shared}/${r.roiCandidates}${t(" · 夹角共同有效 "," · Common angle-valid ")}${r.sharedAngles}${t(" · 共用色标和箭头比例"," · Shared colour and arrow scales")}`,40,130,1480,21,"#d0e6ee");const m={xIndex:l.probe[0],zIndex:l.probe[1]};return a.rows.forEach(({frame:g,slice:x,angles:h,arrows:u,summary:d},p)=>{const w=155+p*570;pe(i,`${t("帧 ","Frame ")}${g}${t(" · 本帧 ROI "," · Frame ROI ")}${d.nativeRoi}/${r.roiCandidates}${t(" · 共同样本平均 E "," · Common-sample mean E ")}${de(d.meanE)} m/s · Δs ${de(d.meanDelta)}${t(" m/s · 夹角 "," m/s · Angle ")}${de(d.meanAngle)}°`,40,w+25,1480,25),i.save(),i.translate(0,w-129);const j={appearance:{viewport:a.view,zoom:!0,ranges:r.ranges},probe:m,arrows:u};et(l.mode,s).forEach((S,v)=>Lt(i,S,j,x,h,l.arrows?u.points:[],40+505*v,s)),i.restore()}),pe(i,`${t("探针原生 XZ 索引 (","Probe native XZ index (")}${l.probe.join(", ")}${t(") · 棋盘表示未纳入对应共同有效域 · 单位沿用来源声明",") · Checkerboard: outside common support · Source-declared units")}`,40,1890),pe(i,`${t("代码 ","Code ")}${f.codeRevision}${t(" · 逐帧资源身份和恢复设置见配套 JSON · "," · Per-frame resource identities and restore settings: companion JSON ·")}${n.createdAt}`,40,1920,1480,18),c}const De=(n,a=4)=>Number.isFinite(n)?n.toFixed(a):"—",Un=n=>n.map(a=>De(a,3)).join(", ");function G0(n,a){const s=[a.seed,...a.gt.points,...a.pred.points],t=s.map(h=>h[0]),c=s.map(h=>h[1]),i=Math.min(...t),o=Math.max(...t),r=Math.min(...c),f=Math.max(...c),l=275/Math.max(o-i,f-r,a.separation*3),m=([h,u])=>[275+(h-(i+o)/2)*l,1225-(u-(r+f)/2)*l];n.fillStyle="#102b3a",n.fillRect(40,1065,470,320);for(const[h,u,d]of[[a.gt,"#66d9eb",[]],[a.pred,"#ffbf69",[6,4]]])if(n.strokeStyle=u,n.lineWidth=3,n.setLineDash(d),n.beginPath(),h.points.forEach((p,w)=>n[w?"lineTo":"moveTo"](...m(p))),n.stroke(),n.setLineDash([]),h.points.length){const[p,w]=m(h.points.at(-1));n.strokeRect(p-4,w-4,8,8)}a.split&&(n.strokeStyle="white",n.beginPath(),n.moveTo(...m(a.split.gt)),n.lineTo(...m(a.split.pred)),n.stroke());const[g,x]=m(a.seed);n.fillStyle="#ff6b86",n.beginPath(),n.arc(g,x,5,0,2*Math.PI),n.fill()}function H0(n,a,s){const t=(y,C)=>s==="zh"?y:C,c=document.createElement("canvas");c.width=1560,c.height=1530;const i=c.getContext("2d"),o=(y,C,B,A=22,b=1480,M="#173848")=>{i.fillStyle=M,i.font=A+"px sans-serif",i.fillText(y,C,B,b)};i.fillStyle="#f9faf7",i.fillRect(0,0,c.width,c.height),i.fillStyle="#123247",i.fillRect(0,0,c.width,108),o("OceanScope  /  Best_1027   ·   1049   /   "+n.settings.id,40,49,34,1480,"white"),o(t("水面重建与同列流动诊断","Surface reconstruction and flow at the same XZ column"),40,86,25,1480,"#d2e6e7");const{surface:r,spatial:f,view:l,slice:m,arrows:g,angles:x}=n,{hotspot:h,directionDeg:u,caseNote:d}=r.diagnosis;let p=1e-9;for(let y=0;y<f.common.length;y++)f.common[y]&&(p=Math.max(p,Math.abs(f.heightB[y]-f.heightA[y])));o(t("水面高度误差","Surface height error")+(r.appearance.absoluteError?"  |Pred − GT|":"  Pred − GT"),40,150,27),Fc(i,f,r,"difference",40,180,420,215,[0,1],p);const w=Object.values(r.profiles).flatMap(y=>y.points.flatMap(C=>[C.a,C.b]).filter(Number.isFinite)),j=[Math.min(...w),Math.max(...w)];if(Object.values(r.profiles).forEach((y,C)=>Ta(i,{...r,profile:y,crest:n.mark?.profile===["first","second"][C]?n.mark:null},500+510*C,151,495,245,j,u+90*C+"°",s)),n.mark){const y=On(r,n.mark);o(t("候选峰","Candidate crests")+" · "+(n.mark.status==="uncertain"?t("对应不确定","uncertain correspondence"):t("人工配对","manually paired"))+"    GT (s,h) "+Un([y.gt.distance,y.gt.a])+"    Pred (s,h) "+Un([y.pred.distance,y.pred.b])+"    Δs "+De(y.deltaDistance)+"    Δh "+De(y.deltaHeight),500,457,21,1010)}o(t("热点水面高度","Surface height at hotspot")+"  GT "+De(n.surfaceY[0])+"  /  Pred "+De(n.surfaceY[1])+"     XZ ("+Un([h.x,h.z])+")     ROI MAE "+De(n.height.mae)+"  ·  n="+n.height.common,40,490),o(t("固定高度速度切片","Fixed-height velocity slice")+"    Y["+l.y+"] = "+De(n.velocityY)+"    ·    "+t("切片与水面共享 XZ，Y 分别取值","Shared XZ column; slice Y and surface Y shown separately"),40,546,27);const S=n.settings.velocity;i.save(),i.translate(0,390),et(l.mode,s).forEach((y,C)=>Lt(i,y,S,m,x,g?.points??[],40+C*505,s)),i.restore(),i.save(),i.translate(0,45),G0(i,a);const v=550;o(t("切片内配对瞬时流线","Paired instantaneous XZ streamlines"),v,1095,28),o(t("青实线 GT，橙虚线预测，红点为种子，白线为首次越阈","GT solid cyan · Prediction dashed orange · Red seed · White first crossing"),v,1135,21,950),o("XZ ("+Un(a.seed)+")    Δs "+De(a.step,5)+"    Δ ≥ "+De(a.separation,5)+"    RK2",v,1174),o(a.split?t("首次采样越阈","First sampled crossing")+"   s "+De(a.split.arc,5)+"   Δ "+De(a.split.gap,6):t("共同积分段内未越阈","No crossing on the shared trace"),v,1215,24);const _={limit:t("积分长度上限","arc length limit"),mask:t("共同有效域边界","common mask boundary"),grid:t("网格边界","grid boundary"),slow:t("低投影速度","low projected speed")};return[a.gt,a.pred].forEach((y,C)=>o((C?"Pred":"GT")+"   "+_[y.stop]+"    s "+De((y.points.length-1)*a.step,5)+"    XZ ("+Un(y.points.at(-1)??a.seed)+")",v,1264+C*39,22,950)),o(t("观察","Observation")+"   "+d,40,1430,22,1480),o(t("单位按来源声明。流线距离采用网格世界坐标。","Source-declared units. Streamline distances use grid world coordinates."),40,1462,18),i.restore(),c}function nt({surface:n,mark:a,onApply:s,zh:t,children:c,allowUnpaired:i=!1}){const[o,r]=E.useState(a?.profile??"first"),[f,l]=E.useState(a?.a??""),[m,g]=E.useState(a?.b??""),[x,h]=E.useState(a?.status??"uncertain"),u=n.profiles[o],d=a&&Ua(n,a);function p(j,S,v){o!==j&&(r(j),l(""),g("")),(S==="a"?l:g)(v),h("uncertain")}if(!n.roi)return c?.(null)??null;const w=a&&(a.profile!==o||a.a!==(f===""?null:f)||a.b!==(m===""?null:m)||a.status!==x);return e.createElement(e.Fragment,null,c?.({pick:p,profile:o,gt:f,pred:m}),e.createElement("fieldset",{"data-os-loc":"src/field/CrestControls.jsx:17:48"},e.createElement("legend",{"data-os-loc":"src/field/CrestControls.jsx:17:58"},t?"剖面候选峰":"Profile crest candidates"),c&&e.createElement("p",{"data-os-loc":"src/field/CrestControls.jsx:18:16"},t?"空心点是候选峰，实心点是当前选择。也可从列表选择，确认后应用。":"Open circles are candidates and filled circles show your selection. Choose on the curves or in the lists, then apply."),e.createElement("label",{"data-os-loc":"src/field/CrestControls.jsx:19:5"},t?"剖面":"Profile"," ",e.createElement("select",{"data-os-loc":"src/field/CrestControls.jsx:19:32","data-os-action":"",value:o,onChange:j=>{r(j.target.value),l(""),g(""),h("uncertain")}},Object.keys(n.profiles).map((j,S)=>e.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:21:50",key:j,value:j},S+1)))),[["a",f,l,"GT"],["b",m,g,t?"预测":"Prediction"]].map(([j,S,v,_])=>e.createElement("label",{"data-os-loc":"src/field/CrestControls.jsx:23:7",key:j},_," ",e.createElement("select",{"data-os-loc":"src/field/CrestControls.jsx:23:32","data-os-action":"","aria-label":"Crest "+j,value:S,onChange:y=>{v(Number(y.target.value)),h("uncertain")}},e.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:24:9",value:"",disabled:!0},t?"选择局部峰":"Select a local peak"),ra(u,n.roi,j).map(y=>e.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:25:55",key:y,value:y},"s ",u.points[y].distance.toFixed(3)," · h ",u.points[y][j].toFixed(4)))))),e.createElement("select",{"data-os-loc":"src/field/CrestControls.jsx:27:5","data-os-action":"","aria-label":"Peak correspondence",value:x,onChange:j=>h(j.target.value)},e.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:28:7",value:"uncertain"},t?"对应不确定":"Correspondence uncertain"),e.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:29:7",value:"paired"},t?"人工配对":"Manually paired")),e.createElement("button",{"data-os-loc":"src/field/CrestControls.jsx:30:5","data-os-action":"",disabled:f===""||m==="",onClick:()=>s({profile:o,a:f,b:m,status:x})},t?"应用峰标记":"Apply crest markers"),i&&e.createElement("button",{"data-os-loc":"src/field/CrestControls.jsx:31:21","data-os-action":"",type:"button",onClick:()=>{l(""),g(""),h("uncertain"),s({profile:o,a:null,b:null,status:"uncertain"})}},t?"标记峰配对不确定":"Record unresolved crest pair"),w&&e.createElement("small",{"data-os-loc":"src/field/CrestControls.jsx:32:15"},t?"当前选择尚未应用，报告仍保留上次标记。":"Apply your selection to update the saved report markers."),a&&e.createElement("p",{"data-os-loc":"src/field/CrestControls.jsx:33:12","aria-label":"Applied crest comparison"},a.profile==="first"?t?"剖面 1":"Profile 1":t?"剖面 2":"Profile 2"," · ",a.status==="paired"?t?"人工配对":"Manually paired":t?"峰配对不确定":"Correspondence uncertain",d&&e.createElement(e.Fragment,null," · ",t?"峰高差":"Crest height difference"," Δh ",d.deltaHeight.toFixed(5)," · ",t?"峰位差":"Crest displacement"," Δs ",d.deltaDistance.toFixed(5)," ",t?"场景单位（预测减 GT，Δs 沿剖面正向）":"scene units (prediction minus GT, Δs along the profile)"))))}function q0({control:n,bundle:a,catalog:s,language:t,onReady:c}){const i=t==="zh",[o,r]=E.useState(null),[f,l]=E.useState(.25),[m,g]=E.useState(!1),[x,h]=E.useState(""),[u,d]=E.useState(null),p=E.useRef(null);E.useEffect(()=>()=>p.current?.abort(),[]);async function w(S,v,_=null){p.current?.abort();const y=new AbortController,C=()=>y.abort();p.current=y,v?.addEventListener("abort",C,{once:!0}),g(!0),h(""),r(null),d(null);try{v?.throwIfAborted();const B=await W0(S,a,s,y.signal);if(y.signal.throwIfAborted(),_&&_!==B.presetSha)throw Error(i?"案例设置已更新，请打开原始报告。":"Case settings changed. Open the original report.");r(B),l(B.settings.integration.stepFraction),c(!!_)}catch(B){throw y.signal.aborted||h(B.message),B}finally{v?.removeEventListener("abort",C),y===p.current&&(p.current=null,g(!1))}}E.useEffect(()=>{const S=y=>{if(y?.page!=="field"||y.section!=="report"||!y.pairedCase)return;const{id:C,stepFraction:B,crest:A,presetSha:b}=y.pairedCase;try{const M=La(C,B);w({...M,...A?{crest:A}:{}},null,b).catch(()=>{})}catch(M){h(M.message)}},v=y=>S(y.detail),_=y=>{y.detail?.includes(1049)&&S(Za())};return window.addEventListener("oceanscope-paired-case-mark",v),window.addEventListener("oceanscope-velocity-files",_),S(Za()),()=>{window.removeEventListener("oceanscope-paired-case-mark",v),window.removeEventListener("oceanscope-velocity-files",_)}},[a]),E.useImperativeHandle(n,()=>({restore:(S,v)=>w(JSON.parse(S),v)})),E.useEffect(()=>{if(!o)return;let S;try{const{record:v,pair:_}=T0(o,f),y=H0(o,_,t).toDataURL("image/png");S=Qa({stem:"OceanScope-1049-"+v.id+"-"+(f===.125?"half":"default")+"-"+t,record:v,csv:V0(o,_),previewUrl:y}),d({data:o,fraction:f,language:t,files:S}),h("")}catch(v){d(null),h(v.message)}return()=>{S&&Object.values(S).forEach(v=>URL.revokeObjectURL(v.href))}},[o,f,t]);const j=u?.data===o&&u?.fraction===f&&u?.language===t?u.files:null;return e.createElement("section",{"data-os-loc":"src/field/PairedCaseReport.jsx:69:10","aria-label":"1049 one-page case",className:"protocol-report","data-paired-case":j?JSON.stringify({id:o.settings.id,presetSha:o.presetSha,stepFraction:f,crest:o.mark}):void 0},e.createElement("h2",{"data-os-loc":"src/field/PairedCaseReport.jsx:70:5"},i?"1049 一页诊断案例":"1049 one-page diagnostic case"),e.createElement("div",{"data-os-loc":"src/field/PairedCaseReport.jsx:71:5",className:"reference-controls"},["A","B"].map(S=>e.createElement("button",{"data-os-loc":"src/field/PairedCaseReport.jsx:71:60","data-os-action":"",key:S,type:"button",onClick:()=>w(La(S)).catch(()=>{})},i?"打开案例 ":"Open case ",S)),o&&e.createElement("label",{"data-os-loc":"src/field/PairedCaseReport.jsx:73:14"},e.createElement("input",{"data-os-loc":"src/field/PairedCaseReport.jsx:73:21","data-os-action":"",type:"checkbox",checked:f===.125,onChange:S=>l(S.target.checked?.125:.25)}),i?"半步长复核":"Half-step check")),o&&e.createElement(nt,{key:o.settings.id,surface:o.surface,mark:o.mark,zh:i,onApply:S=>r({...o,mark:S})}),m&&e.createElement("p",{"data-os-loc":"src/field/PairedCaseReport.jsx:77:12",role:"status"},i?"正在核验水面和速度资源…":"Verifying surface and velocity resources…"),x&&e.createElement("p",{"data-os-loc":"src/field/PairedCaseReport.jsx:78:13",role:"alert"},x),j&&e.createElement(e.Fragment,null,e.createElement("img",{"data-os-loc":"src/field/PairedCaseReport.jsx:79:17",src:j.png.href,alt:i?"1049 水面热点、双剖面、速度切片与配对流线":"1049 hotspot, two profiles, velocity slice and paired streamlines",style:{maxWidth:"100%",height:"auto",display:"block"}}),e.createElement("div",{"data-os-loc":"src/field/PairedCaseReport.jsx:81:7",className:"reference-controls"},["png","csv","json"].map(S=>e.createElement("a",{"data-os-loc":"src/field/PairedCaseReport.jsx:81:75",key:S,href:j[S].href,download:j[S].name},i?"下载":"Download"," ",S.toUpperCase())))))}function L0(n,a){const s=String(n?.message??n??""),t=(c,i)=>a?c:i;return/AbortError|cancelled|canceled/i.test(n?.name+" "+s)?t("操作已取消。当前文件可以稍后重新打开。","Operation cancelled. You can reopen the file later."):/too large|^size$/i.test(s)?t("文件过大。请选择本工具导出的分析 JSON；完整报告上限1 MB，场比较方案上限2 MB。","File too large. Choose an exported analysis JSON: reports up to1 MB, field views up to2 MB."):/Invalid analysis JSON|^json$|JSON|Unexpected token|Unexpected end/i.test(s)&&!/(format|Unsupported)/i.test(s)?t("JSON内容不完整或格式有误。请重新选择原始导出文件，或粘贴文件全文。","Invalid or incomplete JSON. Select the original exported file or paste its entire contents."):/Unsupported|^format$/.test(s)?t("这个文件不能恢复分析。请选择完整分析报告、场比较方案或序列选择 JSON；PNG、CSV和数据说明文件只能查看。","This file cannot restore analysis. Choose an analysis-report, field-view or sequence-selection JSON; images, CSV and data-info files are for viewing."):/checksum|identity|mismatch|does not match|^source$/i.test(s)?t("数据或报告身份不匹配。请确认数据组合，使用同一版本导出的报告及配套资源；资源损坏时重新复制并校验，勿修改文件中的身份信息。","Data or report identity differs. Confirm the dataset and use its matching report/resources. Recopy and verify damaged resources; do not edit identity fields."):/404|unavailable|failed to fetch|network|^dataset$|No spatial resource/i.test(s)?t("数据下载未完成。请检查网络并重试；无三维预览的帧仍可查看高度分析。","The data download did not complete. Check your connection and retry. Frames without 3D previews still support height analysis."):/Wait|not ready|loading|Timed out/i.test(s)?t("数据尚未准备好。等待当前组合加载完成后重试；持续失败时检查本页的数据资源提示。","Data is not ready. Wait for the current dataset to load and retry; if it persists, check this page’s resource message."):/View changed/i.test(s)?t("恢复期间视图已改变，已停止应用旧请求。请在当前视图重新打开报告。","The view changed during restoration. Reopen the report from the current view."):t("操作未完成。确认文件来自当前工具、帧号和参数有效，然后重试；具体原因可查看技术详情。","The operation did not complete. Confirm the file comes from this tool and its frame/settings are valid, then retry; technical details are below.")}function Ye({error:n,zh:a,resource:s,onRetry:t}){return n?e.createElement("div",{"data-os-loc":"src/AnalysisError.jsx:18:9",className:"analysis-error",role:"alert"},e.createElement("strong",{"data-os-loc":"src/AnalysisError.jsx:18:54"},a?"需要处理的问题":"Action needed"),s&&e.createElement("p",{"data-os-loc":"src/AnalysisError.jsx:18:112"},s),e.createElement("p",{"data-os-loc":"src/AnalysisError.jsx:18:130"},L0(n,a)),t&&e.createElement("button",{"data-os-loc":"src/AnalysisError.jsx:18:179","data-os-action":"",type:"button",onClick:t},a?"重新加载资源":"Reload resources"),e.createElement("details",{"data-os-loc":"src/AnalysisError.jsx:18:261"},e.createElement("summary",{"data-os-loc":"src/AnalysisError.jsx:18:270"},a?"技术详情":"Technical details"),e.createElement("code",{"data-os-loc":"src/AnalysisError.jsx:18:320"},String(n?.message??n)))):null}function Y0({controlRef:n,ready:a,capture:s,prepareImport:t,applyImport:c,zh:i,unifiedRestore:o=!1}){const[r,f]=E.useState(null),[l,m]=E.useState(""),[g,x]=E.useState(""),[h,u]=E.useState(null),d=E.useRef(null),p=E.useRef(null),w=r?.language===i?r:null;function j(){d.current&&(d.current.abort(),d.current=null,m(i?"恢复已取消，保留新的操作。":"Restore cancelled; newer action retained."))}E.useImperativeHandle(n,()=>({cancel:j,clearSnapshot:()=>f(null),restoreText:(y,C)=>v({size:new TextEncoder().encode(y).length,text:async()=>y},C,!0)})),E.useEffect(()=>()=>d.current?.abort(),[]),E.useEffect(()=>{f(null),m("")},[i]),E.useEffect(()=>{const y=Object.values(w?.files??{}).map(C=>C.href).filter(C=>C?.startsWith("blob:"));return()=>{for(const C of y)URL.revokeObjectURL(C)}},[w?.files]);function S(){try{const y=s(),C=M0(y.record,y.canvas?.toDataURL?.("image/png")??null);f({...y,language:i,previewUrl:C.png?.href??null,files:C}),u(null),m(i?"已生成当前快照，三种导出使用同一报告。":"Snapshot created; all three downloads use this report.")}catch(y){u(y)}}async function v(y,C,B=!1){if(j(),!y)return;const A=new AbortController,b=()=>A.abort();C?.addEventListener("abort",b,{once:!0}),C?.aborted&&A.abort(),d.current=A,u(null),m(i?"正在核验报告与资源…":"Verifying report and resources…");try{if(y.size>1024*1024)throw Error("Report file too large");const M=await y.text();A.signal.throwIfAborted();const R=await t(M,A.signal);A.signal.throwIfAborted(),await c(R,A.signal),A.signal.throwIfAborted(),f(null),m(i?"已恢复帧、截面、选区与可用相机；数值来自重新核验的资源。":"Restored frame, section, ROI and available camera; values recomputed from verified resources.")}catch(M){if(A.signal.aborted||(u(M),m("")),B)throw M}finally{C?.removeEventListener("abort",b),d.current===A&&(d.current=null)}}const _={png:i?"下载汇报图片 PNG":"Download presentation PNG",csv:i?"下载数据表 CSV":"Download data table CSV",json:i?"保存可恢复分析 JSON":"Save restorable analysis JSON"};return e.createElement("section",{"data-os-loc":"src/field/ProtocolReportControls.jsx:25:9",className:"protocol-report","aria-label":"Protocol evidence report"},e.createElement("h3",{"data-os-loc":"src/field/ProtocolReportControls.jsx:25:84"},i?"保存与恢复分析":"Save and restore analysis"),e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:26:3"},i?"先确认当前帧、选区、截面和相机，再生成报告。三种下载使用同一快照；后续修改视图时，请更新快照后再导出。":"Confirm frame, ROI, section and camera, then create a report. All downloads use one snapshot; update it before exporting later view changes."),e.createElement("div",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:3",className:"reference-controls"},e.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:39","data-os-action":"",disabled:!a,onClick:S},w?i?"更新报告快照":"Update report snapshot":i?"生成当前报告":"Create current report"),Object.entries(_).map(([y,C])=>w?.files[y]?e.createElement("a",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:240","data-os-action":"",key:y,className:"report-download",href:w.files[y].href,download:w.files[y].name,onClick:()=>m(i?"下载已交给浏览器，请在下载列表确认文件。也可展开“下载帮助与 JSON 文本”复制完整分析。":"Download handed to the browser. Check its download list; Download help and JSON text also provides the complete analysis for copying.")},C):e.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:573",key:y,disabled:!0},C))),w&&e.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:12"},e.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:21"},i?"下载帮助与 JSON 文本":"Download help and JSON text"),e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:90"},i?"文件由浏览器保存，位置取决于浏览器设置。可在浏览器下载列表中找到文件。继续分析也可选中下方全部 JSON，按 Ctrl+C（Mac：⌘C）复制，再粘贴到顶部“恢复分析”；长期保留请下载 JSON 文件。":"Your browser saves the files according to its download settings. Find them in its download list. To resume without choosing a file, select all JSON below, copy with Ctrl+C (Mac: ⌘C), then paste into Restore analysis. Download the JSON file for long-term storage."),e.createElement("label",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:470"},i?"完整分析 JSON":"Complete analysis JSON",e.createElement("textarea",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:518",ref:p,"aria-label":"Report JSON for copying",rows:"6",readOnly:!0,spellCheck:!1,value:w.files.json.content})),e.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:662","data-os-action":"",type:"button",onClick:()=>{p.current?.focus(),p.current?.select(),m(i?"已选中完整 JSON。按 Ctrl+C（Mac：⌘C）复制。":"Complete JSON selected. Press Ctrl+C (Mac: ⌘C) to copy.")}},i?"选中全部 JSON":"Select all JSON")),!w&&e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:29:13"},i?"生成报告后即可下载。PNG用于展示，CSV保留数值，JSON用于继续同一次分析。":"Create a report to enable downloads. PNG is for presentation, CSV for numbers, and JSON for resuming the analysis."),w&&e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:30:12"},i?"导出快照 · 帧":"Export snapshot · frame"," ",w.record.view.frame," · ",w.record.createdAt," · ",w.record.view.geometry?i?"包含已核验三维":"Verified 3D included":i?"二维证据":"2D evidence"," · ",w.record.view.geometryStatus?.reason," · ",i?"后续操作不会改变此报告；更新快照可保存新状态。":"Later actions do not change this report; update the snapshot to save the new state."),w?.previewUrl&&e.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:24"},e.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:33"},i?"预览汇报图片":"Preview presentation image"),e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:94"},i?"预览与下载使用同一报告。如果浏览器未保存PNG，可在此图片上使用“图片另存为”。":"Preview and download use the same report. If the browser does not save the PNG, use Save image as on this preview."),e.createElement("img",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:265",src:w.previewUrl,alt:i?`帧 ${w.record.view.frame} 汇报图片`:`Frame ${w.record.view.frame} report image`,style:{display:"block",width:"100%",height:"auto"}})),o?e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:32:19"},e.createElement("a",{"data-os-loc":"src/field/ProtocolReportControls.jsx:32:22","data-os-action":"",href:"#restore-analysis",onClick:()=>{const y=document.getElementById("restore-analysis");y&&(y.open=!0)}},i?"恢复分析：选择文件或粘贴 JSON":"Restore analysis: choose a file or paste JSON")):e.createElement(e.Fragment,null,e.createElement("label",{"data-os-loc":"src/field/ProtocolReportControls.jsx:33:3"},i?"导入分析报告 JSON":"Import analysis report JSON"," ",e.createElement("input",{"data-os-loc":"src/field/ProtocolReportControls.jsx:33:59","data-os-action":"",type:"file",accept:"application/json,.json","aria-label":"Restore protocol report",onChange:y=>{v(y.target.files?.[0]),y.target.value=""}})),e.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:3"},e.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:12"},i?"粘贴报告 JSON":"Paste report JSON"),e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:67"},i?"文件选择不可用时，可粘贴报告内容，使用相同的核验与恢复流程。":"If file selection is unavailable, paste the report content for the same verified restoration."),e.createElement("textarea",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:207","data-os-action":"","aria-label":"Protocol report JSON text",rows:"6",value:g,onChange:y=>{j(),x(y.target.value)}}),e.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:332","data-os-action":"",disabled:!g.trim(),onClick:()=>v({size:new TextEncoder().encode(g).length,text:async()=>g})},i?"恢复粘贴的报告":"Restore pasted report"))),e.createElement(Ye,{error:h,zh:i}),e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:35:45",role:"status"},l))}const Dc=["xmin","xmax","zmin","zmax"];function U0(n){return Number(n.toFixed(4)).toString()}function vt(n){return Object.fromEntries(Dc.map(a=>[a,U0(n[a])]))}function J0(n,a,s){const t={},c={};for(const i of Dc)!n[i]?.trim()||!Number.isFinite(Number(n[i]))?c[i]="number":t[i]=s[i]?Number(n[i]):a[i];for(const[i,o]of[["xmin","xmax"],["zmin","zmax"]])!c[i]&&!c[o]&&t[i]>t[o]&&(c[i]="order",c[o]="order");return{values:t,errors:c,valid:Object.keys(c).length===0}}function Pt({profile:n,roi:a,limits:s,label:t,errorLimit:c,reviewId:i,crestPicker:o,profileKey:r}){const{language:f}=me(),l=(v,_)=>f==="zh"?v:_,m=n.points,g=m[0].distance,x=m.at(-1).distance,h=Math.max(x-g,1e-9),u=Math.max(s[1]-s[0],1e-9),d=c??Math.max(1e-9,...m.map(v=>Math.abs(v.difference??0))),p=v=>45+(v-g)/h*620,w=v=>170-(v-s[0])/u*135,j=a?Ka(n,a):null;function S(v){let _=!1;return m.map(y=>{if(!Number.isFinite(y[v]))return _=!1,"";const C=_?"L":"M";return _=!0,`${C}${p(y.distance)},${v==="difference"?245-y[v]/d*38:w(y[v])}`}).join(" ")}return e.createElement("figure",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:9","data-review-id":i,"data-profile-axis":[g,x,45,665].join(",")},e.createElement("figcaption",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:88"},t," · ",n.sampling==="native_columns"?l("原生列","Native columns"):l("插值诊断 · 四邻点共同有效","Interpolated diagnosis · all four neighbours valid")),e.createElement("svg",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:259",viewBox:"0 0 710 300",role:"img","aria-label":t},j&&e.createElement("rect",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:14:13",x:p(Math.max(g,j[0])),y:"25",width:Math.max(0,p(Math.min(x,j[1]))-p(Math.max(g,j[0]))),height:"255",fill:"#4ba8ad",opacity:".13"}),e.createElement("line",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:2",x1:p(0),x2:p(0),y1:"25",y2:"280",stroke:"#666",strokeDasharray:"4 3"}),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:82",x:p(0)+4,y:"20"},l("热点 0","Hotspot 0")),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:136",x:"3",y:"40"},s[1].toFixed(3)),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:184",x:"3",y:"175"},s[0].toFixed(3)),e.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:233",d:S("a"),fill:"none",stroke:"#2583c5",strokeWidth:"2"}),e.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:299",d:S("b"),fill:"none",stroke:"#e08b22",strokeWidth:"2"}),e.createElement("line",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:365",x1:"45",x2:"665",y1:"245",y2:"245",stroke:"#888"}),e.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:421",d:S("difference"),fill:"none",stroke:"#9b4778"}),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:480",x:"2",y:"245"},"B−A"),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:510",x:"45",y:"298"},g.toFixed(3)," m"),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:555",x:"540",y:"298"},x.toFixed(3)," m"),o&&a&&["a","b"].map(v=>ra(n,a,v).map(_=>{const y=o.profile===r&&(v==="a"?o.gt:o.pred)===_;return e.createElement("circle",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:17:11","data-os-action":"",key:v+_,"data-crest-field":v,"data-sample":_,cx:p(m[_].distance),cy:w(m[_][v]),r:y?6:4,fill:y?v==="a"?"#176693":"#a75400":"white",stroke:v==="a"?"#176693":"#a75400",style:{cursor:"pointer"},onClick:()=>o.pick(r,v,_)},e.createElement("title",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:19:84"},v==="a"?"GT":l("预测","Prediction")," · s ",m[_].distance.toFixed(4)))}))),!m.some(v=>v.a!==null)&&e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:20:38"},l("此剖面无共同有效高度。","No common valid height on this profile.")))}const sn=n=>n==null?"N/A":(n*100).toFixed(4)+" cm";function Ls({value:n,label:a}){const{language:s}=me(),t=(c,i)=>s==="zh"?c:i;return e.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:8",className:"diagnostic-evidence","aria-label":a},e.createElement("strong",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:64"},a),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:88"},"MAE ",sn(n.mae)," · Bias ",sn(n.bias)," · RMSE ",sn(n.rmse)),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:174"},t("候选原生列 ","Candidate native columns "),n.candidates,t(" / GT有效 "," / GT valid "),n.validGT,t(" / 预测有效 "," / Prediction valid "),n.validPrediction,t(" / 共同有效 "," / Common valid "),n.common),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:394"},t("共同/候选 ","Common/candidate "),n.coverageCandidate==null?"N/A":(n.coverageCandidate*100).toFixed(2)+"%",t(" · 共同/GT "," · Common/GT "),n.coverageGT==null?"N/A":(n.coverageGT*100).toFixed(2)+"%"),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:616"},t("最大绝对误差 ","Maximum absolute error "),sn(n.maximum?.absolute)," ",n.maximum&&e.createElement(e.Fragment,null,t("· 有符号 ","· Signed "),sn(n.maximum.signed),t(" · 原生索引 ("," · Native index ("),n.maximum.ix,",",n.maximum.iz,") · X ",n.maximum.x.toFixed(6)," / Z ",n.maximum.z.toFixed(6),t(" · 并列 "," · Ties "),n.maximum.ties,t("（按索引取首点）"," (first point by index)"))))}function Ys({value:n,label:a}){const{language:s}=me(),t=(c,i)=>s==="zh"?c:i;return e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:28:8","aria-label":a},a,t(" · 有效样本 "," · Valid samples "),n.samples," · MAE ",sn(n.mae)," · Bias ",sn(n.bias),t(" · 最大 "," · Maximum "),sn(n.maximum?.absolute))}function K0({spatial:n,diagnosis:a,roi:s,onDirection:t,onRegion:c,mode:i,setMode:o,onExit:r,onNote:f,onCrest:l}){const{language:m}=me(),g=(v,_)=>m==="zh"?v:_,[x,h]=E.useState(""),u=E.useMemo(()=>a?Dn(n,a):null,[n,a]),d=E.useMemo(()=>Fn(n),[n]),p=E.useMemo(()=>s?Fn(n,s):null,[n,s]),w=u?[...u.first.points,...u.second.points].flatMap(v=>[v.a,v.b]).filter(Number.isFinite):[],j=w.length?[Math.min(...w),Math.max(...w)]:[0,1];function S(v){v.preventDefault();const _=new FormData(v.currentTarget),y=Number(_.get("cx")),C=Number(_.get("cz")),B=Number(_.get("width")),A=Number(_.get("length"));if(![y,C,B,A].every(Number.isFinite)||B<n.descriptor.spacing||A<n.descriptor.spacing){h(g("尺寸至少为一个网格间距，请填写有限数字。","Enter finite numbers; each dimension must span at least one grid spacing."));return}const b={xmin:y-B/2,xmax:y+B/2,zmin:C-A/2,zmax:C+A/2};if(ca(b,Ja(n)).clipped){h(g("选区超出数据范围，请缩小尺寸或移动中心。","The ROI exceeds the data bounds. Reduce its size or move its centre."));return}c(b),h("")}return e.createElement("section",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:9","aria-label":"Hotspot diagnosis"},e.createElement(Ls,{value:d,label:g("全域诊断 · 原生列","Full-domain diagnosis · native columns")}),p&&e.createElement(Ls,{value:p,label:g("ROI诊断 · 原生列","ROI diagnosis · native columns")}),e.createElement("h3",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:252"},g("热点与双剖面 · 最高过零高度","Hotspot and paired profiles · highest zero-crossing height")),e.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:344",className:"hotspot-actions"},e.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:377","data-os-action":"","aria-pressed":i==="select",onClick:()=>o("select")},g("定位热点","Locate hotspot")),e.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:485","data-os-action":"","aria-pressed":i==="adjust",onClick:()=>o("adjust")},g("调整选区","Adjust ROI"))),a?e.createElement(e.Fragment,null,e.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:137"},g("案例观察（120字以内，非自动归因）","Case observation (up to 120 characters; no automatic attribution)"),e.createElement("textarea",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:237","data-os-action":"","aria-label":"Diagnosis case note",maxLength:"120",value:a.caseNote??"",onChange:v=>f(v.target.value)})),e.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:373","data-os-action":"",onClick:r},g("退出热点诊断","Exit hotspot diagnosis")),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:445","aria-label":"Hotspot coordinates"},g("帧 ","Frame "),a.frame,g(" · 索引 ("," · Index ("),a.hotspot.ix,", ",a.hotspot.iz,") · X ",a.hotspot.x.toFixed(6)," / Z ",a.hotspot.z.toFixed(6)," m"),e.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:670"},g("剖面方向（场景轴 / 手动方向）","Profile direction (scene axes / manual angle)"),e.createElement("input",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:748","data-os-action":"","aria-label":"Hotspot direction",type:"number",min:"0",max:"180",step:"1",value:a.directionDeg,onChange:v=>{const _=v.target.valueAsNumber;Number.isFinite(_)&&_>=0&&_<=180&&t(_%180)}})),e.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:969","data-os-action":"",onClick:()=>t(0)},g("回到场景轴","Reset to scene axes"))):e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:14"},g("在任意高度图点击共同有效点，暂停并创建热点选区。","Click a common valid point on any height map to pause and create a hotspot ROI.")),s&&e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:10","aria-label":"Hotspot ROI summary"},g("ROI中心 X ","ROI centre X "),((s.xmin+s.xmax)/2).toFixed(4)," / Z ",((s.zmin+s.zmax)/2).toFixed(4),g(" · 宽 "," · Width "),(s.xmax-s.xmin).toFixed(4),g(" / 长 "," / Length "),(s.zmax-s.zmin).toFixed(4),g(" m（来源约定，未独立标定）"," m (source convention; not independently calibrated)")),e.createElement("form",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:347",key:JSON.stringify(s),onSubmit:S,className:"hotspot-roi-edit"},[["cx",g("中心X","Centre X"),(s.xmin+s.xmax)/2],["cz",g("中心Z","Centre Z"),(s.zmin+s.zmax)/2],["width",g("X宽","X width"),s.xmax-s.xmin],["length",g("Z长","Z length"),s.zmax-s.zmin]].map(([v,_,y])=>e.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:645",key:v},_,e.createElement("input",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:670",required:!0,name:v,"aria-label":"Hotspot ROI "+v,type:"number",step:"any",defaultValue:y}))),e.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:788"},g("应用中心与尺寸","Apply centre and dimensions")))),x&&e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:39:14",role:"alert"},x),a&&s&&(a.hotspot.x<s.xmin||a.hotspot.x>s.xmax||a.hotspot.z<s.zmin||a.hotspot.z>s.zmax)&&e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:39:185"},g("热点在选区外；剖面仍锚定原热点。","The hotspot is outside the ROI; profiles remain anchored to the original hotspot.")),u&&e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:40:15"},g("蓝色GT / 橙色预测；紫色B−A。横轴为距热点的有符号距离；阴影为ROI交段，缺测断线。两图共享高度范围。","GT blue / prediction orange / B−A purple. Signed distance from the hotspot; shading marks the ROI intersection. Missing samples break the line. Both plots share a height range.")),e.createElement(nt,{key:JSON.stringify([a.hotspot.index,a.directionDeg,s,a.crest]),surface:{profiles:u,roi:s},mark:a.crest,onApply:l,zh:m==="zh",allowUnpaired:!!s},v=>e.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:40:493",className:"hotspot-profiles"},e.createElement(Pt,{crestPicker:v,profileKey:"first",reviewId:"hotspot-profile-along",profile:u.first,roi:s,limits:j,label:g("热点剖面1","Hotspot profile 1")}),e.createElement(Pt,{crestPicker:v,profileKey:"second",reviewId:"hotspot-profile-across",profile:u.second,roi:s,limits:j,label:g("热点剖面2","Hotspot profile 2")}))),[["first",g("剖面1","Profile 1")],["second",g("剖面2","Profile 2")]].map(([v,_])=>{const y=kt(u[v],s);return e.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:40:1031",key:v},e.createElement(Ys,{value:y.full,label:_+g("全线 · 样本等权"," · Full line · equal sample weights")}),y.roi&&e.createElement(Ys,{value:y.roi,label:_+g("选区内 · 样本等权"," · Within ROI · equal sample weights")}))}),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:40:1259"},g("剖面统计按曲线样本等权，不等同原生列面积统计。可到“报告与恢复”生成含双剖面的PNG、CSV和可恢复JSON。","Profile statistics weight curve samples equally; they are not native-column area statistics. Open Reports & restore to generate PNG, CSV and restorable JSON with both profiles."))))}const Us={schema:"oceanscope.half-sample.v1",formula:"A*cos(2*pi*(x-c)/wavelength)",wavelength:2,amplitude:1,referenceCentre:0,shift:.0125,dx:.025,first:-40,last:40,units:"scene"};function Js(){const n=Us,a=(l,m)=>n.amplitude*Math.cos(2*Math.PI*(l-m)/n.wavelength),s=Array.from({length:n.last-n.first+1},(l,m)=>{const g=(n.first+m)*n.dx;return{x:g,z:0,a:a(g,n.referenceCentre),b:a(g,n.referenceCentre+n.shift)}}),t={xmin:-1,xmax:1,zmin:0,zmax:0},c=l=>ra({points:s},t,l).map(m=>s[m].x),i=s.find(l=>l.x===c("a")[0]),o=Math.max(...s.map(l=>l.b)),r=s.filter(l=>l.b===o),f={referenceX:i.x,referenceHeight:i.a,strictShiftedCandidates:c("b"),highestSampleXs:r.map(l=>l.x),highestSampleHeight:o,shiftErrorsIfEndpointChosen:r.map(l=>l.x-i.x-n.shift),heightError:o-n.amplitude,midpointEstimate:(r[0].x+r.at(-1).x)/2};return{points:s,report:{recipe:Us,readings:f}}}function Q0({zh:n}){const[a,s]=E.useState(null),[t,c]=E.useState(null),[i,o]=E.useState(""),r=E.useRef(null),f=(d,p)=>n?d:p;async function l(d){if(d)try{const p=Js(),w=JSON.parse(await d.text());if(JSON.stringify(w)!==JSON.stringify(p.report))throw Error();c(p),o(f("已重新采样并核对读数","Resampled and verified"))}catch{o(f("文件与半格对照不匹配","File does not match the half-step control"))}}const m=t?.report.readings,g=t?.report.recipe,x=d=>63+(d+.05)*4800,h=d=>180-(d-.999)*24e3;function u(d){const p=[["quantity","truth","sample_readout","signed_error","interpretation"],["peak_x_left",g.shift,m.highestSampleXs[0],m.shiftErrorsIfEndpointChosen[0],"tied endpoint"],["peak_x_right",g.shift,m.highestSampleXs[1],m.shiftErrorsIfEndpointChosen[1],"tied endpoint"],["peak_height",g.amplitude,m.highestSampleHeight,m.heightError,"sample maximum"],["peak_x_midpoint",g.shift,m.midpointEstimate,m.midpointEstimate-g.shift,"symmetry estimate only"],["strict_shifted_crest_count","",m.strictShiftedCandidates.length,"","strictly higher than both neighbours"]].map(w=>w.join(",")).join(`
`);gn("half-sample."+d,{json:"application/json",csv:"text/csv",svg:"image/svg+xml"}[d],d==="json"?JSON.stringify(t.report,null,2):d==="csv"?p:r.current.outerHTML)}return e.createElement("section",{"data-os-loc":"src/field/HalfSample.jsx:28:9","aria-label":"Half-sample crest"},e.createElement("h3",{"data-os-loc":"src/field/HalfSample.jsx:28:49"},f("半格平移：峰顶落在哪里？","Half-step shift: where is the crest?")),e.createElement("button",{"data-os-loc":"src/field/HalfSample.jsx:29:2","data-os-action":"",onClick:()=>{c(Js()),o("")}},f("查看半格平移","Inspect half-step shift"))," ",e.createElement("label",{"data-os-loc":"src/field/HalfSample.jsx:29:120"},f("恢复半格 JSON","Restore half-step JSON")," ",e.createElement("input",{"data-os-loc":"src/field/HalfSample.jsx:29:169","data-os-action":"",type:"file",accept:".json","aria-label":"Restore half-step JSON",onChange:d=>{l(d.target.files[0]),d.target.value=""}})),e.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:29:310",role:"status"},i),t&&e.createElement(e.Fragment,null,e.createElement("svg",{"data-os-loc":"src/field/HalfSample.jsx:30:11",ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 720 350",role:"img","aria-label":"Half-step crest detail",style:{width:"100%",maxWidth:900},fontFamily:"sans-serif",fill:"#18374b"},e.createElement("rect",{"data-os-loc":"src/field/HalfSample.jsx:31:2",width:"720",height:"350",fill:"#f7fbfd"}),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:31:49",x:"24",y:"35",fontSize:"22"},"半格平移 / Half-step crest"),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:31:112",x:"24",y:"61",fontSize:"15"},"Δx = 0.025   ·   c: 0 → 0.0125   ·   A = 1   ·   scene units"),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:32:2",x:"24",y:"99",fontSize:"14"},"峰顶放大 / Crest detail"),[1,.999,.997].map(d=>e.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:33:24",key:d},e.createElement("path",{"data-os-loc":"src/field/HalfSample.jsx:33:35",d:"M63 "+h(d)+"h605",stroke:"#d8e3e7"}),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:33:82",x:"12",y:h(d)+5},d))),e.createElement("defs",{"data-os-loc":"src/field/HalfSample.jsx:34:2"},e.createElement("clipPath",{"data-os-loc":"src/field/HalfSample.jsx:34:8",id:"half-crest-zoom"},e.createElement("rect",{"data-os-loc":"src/field/HalfSample.jsx:34:39",x:"63",y:"132",width:"605",height:"128"}))),e.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:35:2",clipPath:"url(#half-crest-zoom)"},["a","b"].map((d,p)=>e.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:35:60",key:d,fill:p?"#bd5010":"#19658a",stroke:p?"#bd5010":"#19658a"},e.createElement("polyline",{"data-os-loc":"src/field/HalfSample.jsx:35:131",fill:"none",strokeWidth:"2",points:t.points.map(w=>x(w.x)+","+h(w[d])).join(" ")}),t.points.filter(w=>w.x>=-.05&&w.x<=.075).map(w=>e.createElement("circle",{"data-os-loc":"src/field/HalfSample.jsx:35:280",key:w.x,cx:x(w.x),cy:h(w[d]),r:"4"}))))),e.createElement("path",{"data-os-loc":"src/field/HalfSample.jsx:36:2",d:"M"+x(g.shift)+" 120V260",stroke:"#654493",strokeDasharray:"4 3"}),e.createElement("circle",{"data-os-loc":"src/field/HalfSample.jsx:36:78",cx:x(g.shift),cy:h(1),r:"5",stroke:"#654493",strokeWidth:"2",fill:"white"}),[-.025,0,.025,.05].map(d=>e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:37:29",x:x(d),y:"279",textAnchor:"middle",key:d},d)),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:38:2",x:"24",y:"309",fontSize:"15"},"蓝 / Reference　 橙 / Shifted samples　 ○ 解析峰 / True crest"),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:38:98",x:"24",y:"333",fontSize:"14"},"x ∈ {0, 0.025}　 ·　 sampled height = ",m.highestSampleHeight.toFixed(9))),e.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:39:2"},f("严格局部峰：","Strict local crests: "),m.strictShiftedCandidates.length,"。",f("两个最高采样点等高，不能唯一读回峰位。","The two highest samples tie; neither is a unique crest.")),e.createElement("table",{"data-os-loc":"src/field/HalfSample.jsx:40:2"},e.createElement("thead",{"data-os-loc":"src/field/HalfSample.jsx:40:9"},e.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:40:16"},(n?["量","解析真值","采样读数","读数减真值"]:["Quantity","Truth","Sample readout","Readout minus truth"]).map(d=>e.createElement("th",{"data-os-loc":"src/field/HalfSample.jsx:40:121",key:d},d)))),e.createElement("tbody",{"data-os-loc":"src/field/HalfSample.jsx:40:156"},e.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:40:163"},e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:167"},f("峰位","Crest x")),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:195"},g.shift),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:213"},m.highestSampleXs.join(" / ")),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:253"},m.shiftErrorsIfEndpointChosen.join(" / +"))),e.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:40:311"},e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:315"},f("峰高","Elevation")),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:345"},g.amplitude),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:367"},m.highestSampleHeight.toFixed(9)),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:410"},m.heightError.toFixed(9))))),e.createElement(nt,{surface:{roi:{xmin:-1,xmax:1,zmin:0,zmax:0},profiles:{first:{points:t.points.map(d=>({...d,distance:d.x}))}}},mark:a,onApply:s,zh:n,allowUnpaired:!0}),e.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:42:2"},f("若利用对称性，两个最高点的中点估计为","Using symmetry, the midpoint estimate is")," ",m.midpointEstimate,"。",f("这是估计值，并非某个采样点的位置。","This estimate is not a sampled position.")),["json","svg","csv"].map(d=>e.createElement("button",{"data-os-loc":"src/field/HalfSample.jsx:43:33","data-os-action":"",key:d,onClick:()=>u(d)},f("导出","Export")," ",d.toUpperCase()))))}const Ya={schema:"oceanscope.analytic-wave.v1",formula:"A*cos(2*pi*(x-c)/wavelength)",units:"scene",xmin:-1,xmax:1,dx:.025,wavelength:2,reference:{A:1,c:0},controls:[{id:"height",A:.75,c:0},{id:"position",A:1,c:.25}]},Wc=n=>n.controls.map(a=>{const s=(g,x)=>g.A*Math.cos(2*Math.PI*(x-g.c)/n.wavelength),t=Array.from({length:1+Math.round((n.xmax-n.xmin)/n.dx)},(g,x)=>{const h=n.xmin+x*n.dx;return{x:h,z:0,distance:h,a:s(n.reference,h),b:s(a,h)}}),c={points:t},i={xmin:n.xmin,xmax:n.xmax,zmin:0,zmax:0},o=g=>{const x=ra(c,i,g);if(x.length!==1)throw Error("Expected one interior crest");return x[0]},{gt:r,pred:f,deltaHeight:l,deltaDistance:m}=On({roi:i,profiles:{first:c}},{profile:"first",a:o("a"),b:o("b"),status:"paired"});return{points:t,result:{id:a.id,gtX:r.x,gtHeight:r.a,predX:f.x,predHeight:f.b,expectedHeight:a.A-n.reference.A,measuredHeight:l,expectedShift:a.c-n.reference.c,measuredShift:m}}}),Va=Wc(Ya),It={recipe:Ya,readings:Va.map(n=>n.result)},el=JSON.stringify(It,null,2);function nl({zh:n}){const[a,s]=E.useState(null),t=E.useRef(null),[c,i]=E.useState(!1),[o,r]=E.useState("");async function f(l){if(l)try{const m=JSON.parse(await l.text()),g=(x,h)=>x===h||x&&h&&typeof x=="object"&&typeof h=="object"&&Object.keys(x).length===Object.keys(h).length&&Object.keys(x).every(u=>Object.hasOwn(h,u)&&g(x[u],h[u]));if(!g(m.recipe,Ya)||!g(m.readings,Wc(Ya).map(x=>x.result)))throw Error();i(!0),r(n?"已重新采样并核对读数":"Resampled and verified")}catch{r(n?"此文件与解析对照不匹配":"File does not match this control")}}return e.createElement("section",{"data-os-loc":"src/field/AnalyticWave.jsx:25:9","aria-label":"Analytic wave control"},e.createElement("h3",{"data-os-loc":"src/field/AnalyticWave.jsx:25:53"},n?"解析波面校验":"Analytic wave control"),e.createElement("button",{"data-os-loc":"src/field/AnalyticWave.jsx:25:99","data-os-action":"",onClick:()=>i(!0)},n?"打开峰高与峰位对照":"Open crest controls")," ",e.createElement("label",{"data-os-loc":"src/field/AnalyticWave.jsx:25:180"},n?"恢复解析波面 JSON":"Restore analytic JSON"," ",e.createElement("input",{"data-os-loc":"src/field/AnalyticWave.jsx:25:230","data-os-action":"",type:"file","aria-label":"Restore analytic JSON",accept:".json",onChange:l=>{f(l.target.files[0]),l.target.value=""}})),e.createElement("p",{"data-os-loc":"src/field/AnalyticWave.jsx:25:370",role:"status"},o),c&&e.createElement(e.Fragment,null,e.createElement("svg",{"data-os-loc":"src/field/AnalyticWave.jsx:26:11",xmlns:"http://www.w3.org/2000/svg",ref:t,role:"img","aria-label":"Analytic crest comparison",viewBox:"0 0 760 370",style:{width:"100%",maxWidth:920},fontFamily:"sans-serif",fill:"#173950"},e.createElement("rect",{"data-os-loc":"src/field/AnalyticWave.jsx:27:2",width:"760",height:"370",fill:"#f7fbfd"}),e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:27:49",x:"24",y:"32",fontSize:"21"},"解析波面校验 / Analytic crest controls"),e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:27:122",x:"24",y:"58",fontSize:"14"},"η = A cos(2π(x−c)/2)   ·   Δx = 0.025   ·   81 samples   ·   scene units"),Va.map(({points:l,result:m},g)=>{const x=u=>70+g*370+(u+1)*140,h=u=>199-u*78;return e.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:29:9",key:m.id},e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:29:23",x:x(-1),y:"94",fontSize:"16"},g?"仅平移 / Shift only":"仅降幅 / Amplitude only"),e.createElement("path",{"data-os-loc":"src/field/AnalyticWave.jsx:30:2",d:`M${x(-1)} 113V280H${x(1)} M${x(-1)} 199H${x(1)}`,fill:"none",stroke:"#b3c5cb"}),[-1,0,1].map(u=>e.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:30:109",key:u},e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:30:120",x:x(u)-5,y:"298"},u),e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:30:155",x:x(-1)-28,y:h(u)+4},u))),["a","b"].map((u,d)=>e.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:31:24",key:u,stroke:d?"#bf540e":"#11669b",fill:"none"},e.createElement("polyline",{"data-os-loc":"src/field/AnalyticWave.jsx:31:78",strokeWidth:"2.5",strokeDasharray:d?"6 3":void 0,points:l.map(p=>x(p.x)+","+h(p[u])).join(" ")}),e.createElement("circle",{"data-os-loc":"src/field/AnalyticWave.jsx:31:196",cx:x(d?m.predX:m.gtX),cy:h(d?m.predHeight:m.gtHeight),r:"4",fill:"white",strokeWidth:"2"}))),e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:32:2",x:x(-1),y:"324"},"Δη = ",m.measuredHeight.toFixed(2),"   ·   Δx crest = ",m.measuredShift.toFixed(2)))}),e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:33:2",x:"25",y:"355",fontSize:"14"},"蓝实线 Reference　 橙虚线 Perturbation　 ○ 采样峰顶 / Sampled crest")),e.createElement("table",{"data-os-loc":"src/field/AnalyticWave.jsx:34:2"},e.createElement("thead",{"data-os-loc":"src/field/AnalyticWave.jsx:34:9"},e.createElement("tr",{"data-os-loc":"src/field/AnalyticWave.jsx:34:16"},(n?["对照","峰高差：设定 / 读回","峰位差：设定 / 读回"]:["Control","Crest elevation: set / read","Crest shift: set / read"]).map(l=>e.createElement("th",{"data-os-loc":"src/field/AnalyticWave.jsx:34:136",key:l},l)))),e.createElement("tbody",{"data-os-loc":"src/field/AnalyticWave.jsx:34:171"},Va.map(({result:l})=>e.createElement("tr",{"data-os-loc":"src/field/AnalyticWave.jsx:34:202",key:l.id},e.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:34:217"},l.id),e.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:34:232"},l.expectedHeight," / ",l.measuredHeight),e.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:34:280"},l.expectedShift," / ",l.measuredShift))))),e.createElement(nt,{surface:{roi:{xmin:-1,xmax:1,zmin:0,zmax:0},profiles:{first:{points:Va[0].points}}},mark:a,onApply:s,zh:n,allowUnpaired:!0}),e.createElement("p",{"data-os-loc":"src/field/AnalyticWave.jsx:36:2"},n?"峰顶在采样点上。此对照检验剖面峰值读数，不代表真实重建精度。":"Crests lie on sample points. This checks profile readout, not reconstruction accuracy."),["json","svg","csv"].map(l=>e.createElement("button",{"data-os-loc":"src/field/AnalyticWave.jsx:37:33","data-os-action":"",key:l,onClick:()=>gn("analytic-wave."+l,{json:"application/json",csv:"text/csv",svg:"image/svg+xml"}[l],l==="json"?el:l==="svg"?t.current.outerHTML:[Object.keys(It.readings[0]),...It.readings.map(Object.values)].map(m=>m.join(",")).join(`
`))},n?"导出":"Export"," ",l.toUpperCase()))))}const Le="review/b-case-metrics.js",Nt=[{id:"rmse",zh:"ROI 高度均方根误差",en:"ROI height RMSE",expr:"row.stats.rmse",read:n=>n.stats.rmse},{id:"bias",zh:"ROI 平均有符号误差",en:"ROI mean signed error",expr:"row.stats.bias",read:n=>n.stats.bias},{id:"mae",zh:"ROI 平均绝对误差",en:"ROI mean absolute error",expr:"row.stats.mae",read:n=>n.stats.mae},{id:"maximum",zh:"ROI 最大绝对误差",en:"ROI maximum absolute error",expr:"row.stats.maximum?.absolute",read:n=>n.stats.maximum?.absolute},{id:"centre",zh:"中心高度差",en:"Centre height difference",expr:"row.centre?.difference",read:n=>n.centre?.difference}],Et=n=>"'"+n.replaceAll("\\","\\\\").replaceAll("'","\\'")+"'",al=/^[a-z][a-z0-9_-]{0,39}$/,Ma={id:"rmse",field:"rmse",en:"ROI height RMSE",zh:"ROI 高度均方根误差",precision:5};function tl(n,a,s=null){const t=a.id.trim(),c=a.zh.trim(),i=a.en.trim(),o=Nt.find(B=>B.id===a.field);if(!al.test(t))return{error:"id"};if(!c||!i||[c,i].some(B=>B.length>80||/[\x00-\x1f\x7f\u2028\u2029]/u.test(B)))return{error:"label"};if(!o||!Number.isInteger(a.precision)||a.precision<0||a.precision>10)return{error:"field"};const r=n.split(`
`),f=r.findLastIndex(B=>B.trimEnd()==="];");if(f<1||r.filter(B=>B.trimEnd()==="export const metrics = [").length!==1||r.slice(f+1).some(B=>B.trim()))return{error:"format"};const l=r.findIndex(B=>B.trimEnd()==="export const metrics = ["),m=r.map(B=>B.match(/^\s*\{\s*id:\s*['"]([a-z][a-z0-9_-]*)['"],.*read:\s*row\s*=>\s*row[.?\w]+\s*\},\s*$/u)?.[1]);if(f<=l||r.slice(l+1,f).some((B,A)=>B.trim()&&!B.trimStart().startsWith("//")&&!m[l+A+1]))return{error:"format"};const g=m.filter(Boolean);if(new Set(g).size!==g.length)return{error:"format"};const x=m.indexOf(t);if(s===null&&x>=0)return{error:"duplicate"};if(s!==null&&(s!==t||x<0))return{error:"format"};const h=a.precision===5?"":", precision: "+a.precision,u=r[x<0?f-1:x].endsWith("\r")?"\r":"",d="  { id: "+Et(t)+", en: "+Et(i)+", zh: "+Et(c)+h+", read: row => "+o.expr+" },"+u,p=x<0?f:x,w=x<0?[]:[r[p]];if(w[0]===d)return{error:"unchanged"};const j=r.slice(Math.max(0,p-3),p),S=r.slice(p+w.length).filter((B,A,b)=>A<b.length-1||b[A]!=="").slice(0,3),v=[...r];v.splice(p,w.length,d);const _=p-j.length+1,y=j.length+S.length,C=["--- a/"+Le,"+++ b/"+Le,"@@ -"+_+","+(y+w.length)+" +"+_+","+(y+1)+" @@",...j.map(B=>" "+B),...w.map(B=>"-"+B),"+"+d,...S.map(B=>" "+B)].join(`
`)+`
`;return{id:t,source:v.join(`
`),diff:C,old:w[0]||"",line:d,field:o,precision:a.precision}}async function Ks(n){const a=new TextEncoder,s=a.encode("blob "+a.encode(n).length+"\0"+n),t=await crypto.subtle.digest("SHA-1",s);return Array.from(new Uint8Array(t),c=>c.toString(16).padStart(2,"0")).join("")}const Tc="ALSc001",sl="https://api.github.com/repos/"+Tc+"/oceanscope-demo-v2";async function Ra(n,a,s=!1){const t=await fetch(sl+n,{headers:{Accept:"application/vnd.github+json"},cache:"no-store",signal:a});if(s&&t.status===404)return null;if(!t.ok)throw Error(String(t.status));return t.json()}async function cl(n,a,s,t){const[c,i,o]=await Promise.all([Ks(n),Ks(a.source),Ra("/contents/"+Le+"?ref=main",t)]),r="codex/b-metric-"+a.id+"-"+i.slice(0,12);if(o.sha===i)return{kind:"published",url:na+"/blob/main/"+Le,branch:r};if(o.sha!==c)return{kind:"stale"};const f=await Ra("/contents/"+Le+"?ref="+encodeURIComponent(r),t,!0);if(!f)return{kind:"editor",url:na+"/edit/main/"+Le,branch:r};if(f.sha!==i)return{kind:"stale"};const l=await Ra("/compare/main..."+encodeURIComponent(r),t);if(l.files?.length!==1||l.files[0].filename!==Le||l.files[0].sha!==i)return{kind:"stale"};const m=await Ra("/pulls?state=open&base=main&head="+encodeURIComponent(Tc+":"+r),t);if(m.length)return{kind:"open",url:m[0].html_url,number:m[0].number,branch:r};const g=new URLSearchParams({expand:"1",title:"Region B: "+a.field.en,body:s});return{kind:"compare",url:na+"/compare/main..."+r+"?"+g,branch:r}}const il={id:["标识需以小写字母开头，最多 40 个字符。","Use a lowercase identifier of up to 40 characters."],label:["请填写中英文名称，每个最多 80 个字符。","Enter both labels, up to 80 characters each."],field:["请选择统计量和 0–10 位小数。","Choose a statistic and 0–10 decimal places."],duplicate:["该标识已存在。可选择编辑已有指标。","This identifier exists. Choose the existing metric to edit it."],unchanged:["请修改名称、统计量或显示精度。","Change a label, statistic or display precision."],format:["当前源码格式需要在 GitHub 编辑。","Open GitHub to edit this source format."]};function ol({proposal:n,base:a,body:s,zh:t}){const c=(x,h)=>t?x:h,[i,o]=E.useState(null),[r,f]=E.useState(""),l=E.useRef(null);E.useEffect(()=>()=>l.current?.abort(),[]);async function m(){l.current?.abort();const x=new AbortController;l.current=x,o({kind:"loading"}),f("");const h=setTimeout(()=>{x.signal.aborted||(x.abort(),o({kind:"failed"}))},15e3);try{const u=await cl(a,n,s,x.signal);x.signal.aborted||o(u)}catch{x.signal.aborted||o({kind:"failed"})}finally{clearTimeout(h)}}async function g(){try{await navigator.clipboard.writeText(n.source),f(c("已复制候选文件","Candidate file copied"))}catch{f(c("请下载候选文件，或在文本框中全选复制。","Download the candidate or select and copy its text."))}}return e.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:33:10",className:"proposal-submit"},e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:34:5","data-os-action":"",type:"button",onClick:m,disabled:i?.kind==="loading"},c("准备提交 PR","Prepare pull request")),i?.kind==="loading"&&e.createElement("span",{"data-os-loc":"src/field/MetricProposal.jsx:35:32",role:"status"},c("正在核对 GitHub 文件与提案分支…","Checking the GitHub file and proposal branch…")),i?.kind==="stale"&&e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:36:30",role:"alert"},c("GitHub 文件已变更。请与最新源码核对后重新生成提案。","The GitHub file has changed. Compare the latest source and regenerate the proposal.")),i?.kind==="failed"&&e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:37:31",role:"alert"},c("无法核对 GitHub，可重试或下载补丁，在最新源码上检查后提交。","GitHub could not be checked. Retry or download the patch and check it against the latest source.")),i?.kind==="open"&&e.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:38:29",href:i.url,target:"_blank",rel:"noreferrer"},c("查看已提交的 PR","View submitted PR")," #",i.number),i?.kind==="published"&&e.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:39:34",href:i.url,target:"_blank",rel:"noreferrer"},c("这份代码已在主分支，查看文件","This version is on main. View file")),i?.kind==="compare"&&e.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:40:32",href:i.url,target:"_blank",rel:"noreferrer"},c("在 GitHub 确认创建 PR","Confirm pull request on GitHub")),i?.kind==="editor"&&e.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:41:31"},e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:42:7"},c("复制候选文件，在 GitHub 编辑器中替换内容，选择新分支或个人 fork，然后创建 PR。","Copy the candidate, paste it into the GitHub editor, then choose a new branch or your fork and create a pull request.")),e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:43:7"},e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:43:10","data-os-action":"",type:"button",onClick:g},c("复制候选文件","Copy candidate file"))," ",e.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:44:7",href:i.url,target:"_blank",rel:"noreferrer"},c("打开 GitHub 编辑器","Open GitHub editor"))),e.createElement("small",{"data-os-loc":"src/field/MetricProposal.jsx:45:7"},c("建议分支","Suggested branch")," ",e.createElement("code",{"data-os-loc":"src/field/MetricProposal.jsx:45:45"},i.branch)),e.createElement("details",{"data-os-loc":"src/field/MetricProposal.jsx:46:7"},e.createElement("summary",{"data-os-loc":"src/field/MetricProposal.jsx:46:16"},c("候选文件全文","Complete candidate file")),e.createElement("textarea",{"data-os-loc":"src/field/MetricProposal.jsx:46:74",readOnly:!0,value:n.source,"aria-label":"Candidate metric module",rows:7})),r&&e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:47:16",role:"status"},r)))}function rl({metrics:n,rows:a,zh:s}){const t=(b,M)=>s?b:M,c=n.some(b=>b.id==="rmse"),i=()=>c?{...Ma,id:"",en:"",zh:""}:{...Ma},[o,r]=E.useState(()=>!c&&new URLSearchParams(location.search).get("proposal")==="rmse"),[f,l]=E.useState(""),[m,g]=E.useState(!1),[x,h]=E.useState(0),[u,d]=E.useState(""),[p,w]=E.useState(i);E.useEffect(()=>{if(!o)return;const b=new AbortController;return g(!1),fetch(new URL(Le,document.baseURI),{signal:b.signal,cache:"no-store"}).then(M=>{if(!M.ok)throw Error("Metric module unavailable");return M.text()}).then(M=>{b.signal.aborted||l(M)}).catch(()=>{b.signal.aborted||g(!0)}),()=>b.abort()},[o,x]);function j(b){if(d(b),!b){w(i());return}const M=n.find(N=>N.id===b),R=f.split(`
`).find(N=>N.trimStart().startsWith("{ id: '"+b+"',")||N.trimStart().startsWith('{ id: "'+b+'",')),I=Nt.find(N=>R?.includes("read: row => "+N.expr+" }"));w({id:b,en:M.en,zh:M.zh,field:I?.id||"",precision:M.precision??5})}function S(b,M){w(R=>({...R,[b]:M}))}const v=f&&tl(f,p,u||null),_=n.find(b=>b.id===u),y=[1050,1054].map(b=>a.find(M=>M.frameId===b)),C=v&&!v.error&&y.every(Boolean),B=(b,M)=>Number.isFinite(b)?b.toFixed(M):"—",A=C?["Region B · Gentle GT / Best_1027",p.en+" ("+p.id+")","Definition: "+v.field.expr+"; decimals: "+v.precision,...y.map(b=>"Frame "+b.frameId+": "+B(v.field.read(b),v.precision)+" scene units, "+b.stats.common+" common native columns."),p.id==="rmse"&&p.field==="rmse"&&p.en===Ma.en&&p.zh===Ma.zh&&p.precision===5?Bs.replace("#analysis-height","&proposal=rmse#analysis-height"):Bs].join(`

`):"";return e.createElement("section",{"data-os-loc":"src/field/MetricProposal.jsx:82:10",className:"metric-proposal","aria-label":"Region B metric proposal"},e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:83:5","data-os-action":"",type:"button","aria-expanded":o,onClick:()=>r(b=>!b)},o?t("收起指标编辑","Close metric editor"):t("改指标并预览","Edit and preview a metric")),o&&e.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:84:14"},m?e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:85:15",role:"alert"},t("未能读取当前指标文件。","Metric source unavailable.")," ",e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:85:79","data-os-action":"",onClick:()=>h(b=>b+1)},t("重试","Retry"))):f?e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:86:7",className:"proposal-fields"},e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:87:9"},t("编辑对象","Metric to edit"),e.createElement("select",{"data-os-loc":"src/field/MetricProposal.jsx:87:44","data-os-action":"","aria-label":"Metric to edit",value:u,onChange:b=>j(b.target.value)},e.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:87:134",value:""},t("新增指标","New metric")),n.map(b=>e.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:87:200",key:b.id,value:b.id},s?b.zh:b.en)))),e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:88:9"},t("标识","Identifier"),e.createElement("input",{"data-os-loc":"src/field/MetricProposal.jsx:88:38","data-os-action":"","aria-label":"Metric identifier",value:p.id,readOnly:!!u,onChange:b=>S("id",b.target.value)})),e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:89:9"},t("统计量","Statistic"),e.createElement("select",{"data-os-loc":"src/field/MetricProposal.jsx:89:38","data-os-action":"","aria-label":"Candidate statistic",value:p.field,onChange:b=>S("field",b.target.value)},!p.field&&e.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:89:158",value:""},"—"),Nt.map(b=>e.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:89:201",value:b.id,key:b.id},s?b.zh:b.en)))),e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:90:9"},t("中文名称","Chinese label"),e.createElement("input",{"data-os-loc":"src/field/MetricProposal.jsx:90:43","data-os-action":"","aria-label":"Chinese metric label",value:p.zh,maxLength:80,onChange:b=>S("zh",b.target.value)})),e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:91:9"},t("英文名称","English label"),e.createElement("input",{"data-os-loc":"src/field/MetricProposal.jsx:91:43","data-os-action":"","aria-label":"English metric label",value:p.en,maxLength:80,onChange:b=>S("en",b.target.value)})),e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:92:9"},t("小数位数","Decimal places"),e.createElement("select",{"data-os-loc":"src/field/MetricProposal.jsx:92:44","data-os-action":"","aria-label":"Metric precision",value:p.precision,onChange:b=>S("precision",Number(b.target.value))},Array.from({length:11},(b,M)=>e.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:92:191",key:M},M))))),v?.error&&(u||p.id.trim())&&e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:94:60",role:"status"},il[v.error][s?0:1]),v&&!v.error&&!C&&e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:95:49",role:"status"},t("等待 1050 和 1054 两帧。","Waiting for both frames.")),C&&e.createElement(e.Fragment,null,e.createElement("table",{"data-os-loc":"src/field/MetricProposal.jsx:97:9","aria-label":"Two-frame metric preview"},e.createElement("caption",{"data-os-loc":"src/field/MetricProposal.jsx:97:54"},(s?p.zh:p.en)+" · "+t("场景单位","scene units")),e.createElement("thead",{"data-os-loc":"src/field/MetricProposal.jsx:98:11"},e.createElement("tr",{"data-os-loc":"src/field/MetricProposal.jsx:98:18"},[t("帧号","Frame"),t("原值","Current"),t("预览","Preview"),t("共同有效点 / ROI 候选点","Common / candidate columns")].map(b=>e.createElement("th",{"data-os-loc":"src/field/MetricProposal.jsx:98:134",key:b},b)))),e.createElement("tbody",{"data-os-loc":"src/field/MetricProposal.jsx:99:11"},y.map(b=>e.createElement("tr",{"data-os-loc":"src/field/MetricProposal.jsx:99:35",key:b.frameId},e.createElement("th",{"data-os-loc":"src/field/MetricProposal.jsx:99:57"},b.frameId),e.createElement("td",{"data-os-loc":"src/field/MetricProposal.jsx:99:79"},_?B(_.read(b),_.precision??5):t("新增","New")),e.createElement("td",{"data-os-loc":"src/field/MetricProposal.jsx:99:155"},B(v.field.read(b),v.precision)),e.createElement("td",{"data-os-loc":"src/field/MetricProposal.jsx:99:217"},b.stats.common," / ",b.stats.candidates))))),e.createElement("details",{"data-os-loc":"src/field/MetricProposal.jsx:100:9",className:"proposal-diff"},e.createElement("summary",{"data-os-loc":"src/field/MetricProposal.jsx:100:44"},t("查看代码差异","View code changes")),e.createElement("pre",{"data-os-loc":"src/field/MetricProposal.jsx:100:96","aria-label":"Proposed code diff"},v.diff.split(`
`).slice(0,-1).map((b,M)=>e.createElement("span",{"data-os-loc":"src/field/MetricProposal.jsx:100:186",key:M,className:b.startsWith("+")?"diff-plus":b.startsWith("-")?"diff-minus":""},b,`
`)))),e.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:101:9",className:"proposal-downloads"},e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:101:45","data-os-action":"",onClick:()=>As("B-"+v.id+".patch",new Blob([v.diff],{type:"text/plain"}))},t("下载补丁","Download patch")),e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:102:9","data-os-action":"",onClick:()=>As("b-case-metrics.js",new Blob([v.source],{type:"text/javascript"}))},t("下载候选源码","Download candidate source"))),e.createElement(ol,{key:v.source,proposal:v,base:f,body:A,zh:s}))):e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:85:154",role:"status"},t("正在读取指标源码…","Loading metric source…"))))}function ll({rows:n,zh:a,metrics:s,metric:t,metricId:c,onTrack:i,evidence:o,error:r,retry:f}){const l=(x,h)=>a?x:h,m=gi(o),g=["Gentle / Best_1027","XZ (−0.95, 0.90)","ROI 1 × 1","X profile 0°",o.metricLabel,...o.readings.map(x=>x.frameId+": "+x.display+" "+o.units+" ("+x.common+"/"+x.candidates+")")].filter(Boolean).join(" · ");return e.createElement("section",{"data-os-loc":"src/field/ReviewMetrics.jsx:12:10",className:"review-metrics","aria-label":"B case collaboration"},e.createElement("h3",{"data-os-loc":"src/field/ReviewMetrics.jsx:13:5"},l("一起查看 B 区域","Review region B together")),r&&e.createElement("button",{"data-os-loc":"src/field/ReviewMetrics.jsx:14:15","data-os-action":"",onClick:f},l("重试加载追踪量","Retry loading metrics")),s.length>0&&e.createElement(e.Fragment,null,e.createElement("label",{"data-os-loc":"src/field/ReviewMetrics.jsx:15:28"},l("追踪量","Track a quantity")," ",e.createElement("select",{"data-os-loc":"src/field/ReviewMetrics.jsx:15:65","data-os-action":"",value:t?.id??"",onChange:x=>i(x.target.value)},!t&&e.createElement("option",{"data-os-loc":"src/field/ReviewMetrics.jsx:16:19",value:"",disabled:!0},l("请选择正式指标","Select an official metric")),s.map(x=>e.createElement("option",{"data-os-loc":"src/field/ReviewMetrics.jsx:17:27",key:x.id,value:x.id},a?x.zh:x.en)))),t?e.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:19:13","aria-live":"polite"},o.readings.map(x=>x.frameId+": "+x.display).join("　 /　 "),"　",l("场景单位","scene units")):e.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:20:7",role:"alert"},c?l("无法还原此指标，当前正式列表中没有 ","The current registry does not contain the recorded metric ")+c+l("。请选择指标。",". Select a metric."):l("原记录未注明追踪量，无法还原。请选择指标。","The original record did not specify a metric. Select a metric to continue."))),t&&e.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:23:16",className:"b-case-share"},e.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:23:44",href:m,target:"_blank",rel:"noreferrer"},l("分享当前视图给同事","Share this view with a colleague"))),e.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:24:5"},e.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:24:8",href:na+"/issues/1#new_comment_field",target:"_blank",rel:"noreferrer"},l("去公开 GitHub 参与案例讨论","Discuss this case on public GitHub"))),e.createElement(oc,{topic:"region-B-1050-1054",zh:a,subject:l("B 区域 · 1050 与 1054","Region B · 1050 and 1054"),context:g,viewLink:m}),e.createElement("details",{"data-os-loc":"src/field/ReviewMetrics.jsx:26:5",className:"b-case-source"},e.createElement("summary",{"data-os-loc":"src/field/ReviewMetrics.jsx:26:40"},l("指标源码与补丁","Metric source and patches")),e.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:27:7",href:na+"/edit/main/review/b-case-metrics.js",target:"_blank",rel:"noreferrer"},l("在 GitHub 编辑指标文件","Edit the metric file on GitHub")),s.length>0&&e.createElement(rl,{metrics:s,rows:n,zh:a})))}function Vc(n,a){if(!Number.isFinite(n))return"#a7acb0";const s=n>=0?[186,58,44]:[35,97,159],t=Math.min(1,Math.abs(n)/(a||1));return"rgb("+s.map(c=>Math.round(250+(c-250)*t)).join(",")+")"}function zc(n){const a=n.map(i=>i.ix),s=n.map(i=>i.iz),t=Math.min(...a),c=Math.min(...s);return[t,c,Math.max(...a)-t+1,Math.max(...s)-c+1]}function $c({cells:n,limit:a,selection:s}){const[t,c,i,o]=zc(n),r=c+o-1,f=210/i,l=(s.ix-t+.5)*f,m=(r-s.iz+.5)*f;return e.createElement(e.Fragment,null,e.createElement("g",{"data-os-loc":"src/field/BCasePlots.jsx:22:5",shapeRendering:"crispEdges"},n.map(({ix:g,iz:x,error:h})=>e.createElement("rect",{"data-os-loc":"src/field/BCasePlots.jsx:23:7",key:g+","+x,x:(g-t)*f,y:(r-x)*f,width:f,height:f,fill:Vc(h,a)}))),e.createElement("line",{"data-os-loc":"src/field/BCasePlots.jsx:26:5",x1:"0",x2:"210",y1:m,y2:m,stroke:"#182e36",strokeDasharray:"4 3"}),e.createElement("circle",{"data-os-loc":"src/field/BCasePlots.jsx:27:5",cx:l,cy:m,r:"5",stroke:"black",strokeWidth:"2",fill:"white"}))}function dl(n,a,s,t){const c=n.xmin-a,i=n.xmax-a;return{first:c,last:i,x:o=>(o-c)/(i-c)*335,y:o=>106-(o-s)/(t-s||1)*101}}function Xc({points:n,scale:a,band:s}){function t(c){let i=!1;return n.map(o=>{if(!Number.isFinite(o[c]))return i=!1,"";const r=i?"L":"M";return i=!0,r+a.x(o.distance)+" "+a.y(o[c])}).join(" ")}return e.createElement(e.Fragment,null,s&&e.createElement("rect",{"data-os-loc":"src/field/BCasePlots.jsx:48:14",x:a.x(s.lo)-2,width:a.x(s.hi)-a.x(s.lo)+4,y:"0",height:"111",fill:"#f4df9c"}),e.createElement("line",{"data-os-loc":"src/field/BCasePlots.jsx:50:5",x1:a.x(0),x2:a.x(0),y1:"0",y2:"111",stroke:"#777",strokeDasharray:"2 3"}),e.createElement("path",{"data-os-loc":"src/field/BCasePlots.jsx:51:5",d:t("a"),stroke:"#13689e",fill:"none",strokeWidth:"2.5"}),e.createElement("path",{"data-os-loc":"src/field/BCasePlots.jsx:52:5",d:t("b"),stroke:"#ad6411",fill:"none",strokeWidth:"2.5",strokeDasharray:"7 3"}))}function Qs({label:n,frame:a,kind:s,zh:t,children:c,legend:i,axis:o,canAnnotate:r}){const[f,l]=E.useState(!1),[m,g]=E.useState([0,1]),x=E.useRef(null),h=a+" · "+n;E.useLayoutEffect(()=>{const d=x.current;if(d.scrollLeft=(d.scrollWidth-d.clientWidth)/2,d.scrollTop=(d.scrollHeight-d.clientHeight)/2,!o)return;function p(){const j=d.querySelector("svg").getBoundingClientRect();if(!j.width)return;const S=(d.getBoundingClientRect().left-j.left)/j.width;g([Math.max(0,S),Math.min(1,S+d.clientWidth/j.width)])}p();const w=new ResizeObserver(p);return w.observe(d),d.addEventListener("scroll",p),()=>{w.disconnect(),d.removeEventListener("scroll",p)}},[f,!!o]);function u(d){window.dispatchEvent(new CustomEvent("oceanscope-review-figure",{detail:{figure:x.current.querySelector("svg"),trigger:d.currentTarget,label:h}}))}return e.createElement("figure",{"data-os-loc":"src/field/BCaseFigures.jsx:31:10",className:"b-plot b-"+s,"data-review-id":"b-"+a+"-"+s},e.createElement("figcaption",{"data-os-loc":"src/field/BCaseFigures.jsx:32:5"},n),e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:33:5",ref:x,className:"b-viewport","data-zoomed":f,tabIndex:f?0:void 0,role:"group","aria-label":h+(t?" · 图像区域":" · plot area")},c),o&&e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:37:14",className:"b-ticks"},[m[0],(m[0]+m[1])/2,m[1]].map((d,p)=>e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:38:7",key:p},(o.first+(o.last-o.first)*d).toFixed(2)))),i,e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:40:5",className:"b-plot-controls","data-os-tools":""},e.createElement("button",{"data-os-loc":"src/field/BCaseFigures.jsx:41:7","data-os-action":"",type:"button","aria-pressed":f,"aria-label":h+(t?" · 局部放大":" · local zoom"),onClick:()=>l(d=>!d)},f?t?"还原 1×":"Reset 1×":t?"放大 2×":"Zoom 2×"),e.createElement("button",{"data-os-loc":"src/field/BCaseFigures.jsx:43:7","data-os-action":"",type:"button",disabled:!r,"aria-label":h+(t?" · 批注这张图":" · Annotate this figure"),onClick:u},t?"批注这张图":"Annotate this figure")),f&&e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:47:16",className:"b-zoom-help"},t?"滑动查看局部；键盘可聚焦图像后用方向键移动。":"Scroll to pan, or focus the plot and use the arrow keys."))}function fl({rows:n,data:a,limit:s,low:t,high:c,band:i,scale:o,evidence:r,zh:f}){const l=(p,w)=>f?p:w,m=E.useRef(null);E.useEffect(()=>{window.location.hash.startsWith("#mark=")||m.current.scrollIntoView({block:"start"})},[]);const g=l("场景单位","scene units"),x=l("带符号高度误差","Signed height error"),h=l("穿过中心的 X 剖面","X profile through the centre"),{roi:u,selection:d}=a;return e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:63:10",className:"b-case-figures"},e.createElement("h3",{"data-os-loc":"src/field/BCaseFigures.jsx:64:5",className:"b-case-heading",ref:m},l("固定 B 区域","Fixed region B")," · ",n.map(p=>p.frameId).join(" / ")),e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:65:5",className:"b-case-context"},e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:65:35"},l("模型","Model")," Best_1027"),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:65:80"},"GT · Gentle"),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:66:7"}," XZ (",a.x.toFixed(2),", ",a.z.toFixed(2),")"),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:67:7"},"ROI ",(u.xmax-u.xmin).toFixed(2)," × ",(u.zmax-u.zmin).toFixed(2)," ",g)),e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:68:5",className:"b-common-scale"},e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:69:7"},l("两帧共用色标","Shared colour scale")),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:70:7"},l("预测 − GT","Prediction − GT")," · ",g),e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:71:7",className:"b-ramp","aria-hidden":"true"}),e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:72:7",className:"b-ticks"},e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:72:32"},(-s).toFixed(3)," ",l("偏低","low")),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:72:83"},"0"),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:72:97"},"+",s.toFixed(3)," ",l("偏高","high")))),e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:74:5",className:"b-frame-grid"},n.map(p=>{const w=r.readings.find(j=>j.frameId===p.frameId);return e.createElement("article",{"data-os-loc":"src/field/BCaseFigures.jsx:76:14",className:"b-frame-card",key:p.frameId,"data-review-frame":p.frameId},e.createElement("h4",{"data-os-loc":"src/field/BCaseFigures.jsx:77:7"},l("帧","Frame")," ",p.frameId),e.createElement(Qs,{frame:p.frameId,kind:"map",label:x,zh:f,canAnnotate:!!w,legend:e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:78:108",className:"b-map-notes"},e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:79:9",className:"b-plot-key"},"Z ↑　X →　",l("白点为中心，虚线为剖面","White centre point, dashed X section")),w&&e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:80:21",className:"b-readout b-tracked-reading"},r.metricLabel,e.createElement("br",{"data-os-loc":"src/field/BCaseFigures.jsx:80:86"}),e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:80:91"},w.display)," ",g),e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:81:9",className:"b-readout"},l("中心差","Centre difference")," ",e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:81:66"},p.centre?.difference?.toFixed(4)??"—")," ",g,e.createElement("br",{"data-os-loc":"src/field/BCaseFigures.jsx:81:134"}),l("共同有效 / 候选列","Common / candidate columns")," ",e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:82:59"},p.stats.common," / ",p.stats.candidates)))},e.createElement("svg",{"data-os-loc":"src/field/BCaseFigures.jsx:84:9",viewBox:"0 0 210 210",role:"img","aria-label":p.frameId+" · "+x,"data-grid-window":zc(p.region.cells).join(","),"data-grid-origin":[a.x-d.ix*p.profile.step,a.z-d.iz*p.profile.step,p.profile.step].join(",")},e.createElement($c,{cells:p.region.cells,limit:s,selection:d}))),e.createElement(Qs,{frame:p.frameId,kind:"profile",label:h,zh:f,axis:o,canAnnotate:!!w,legend:e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:91:9",className:"b-plot-key"},l("横轴：距中心的 X 距离","X axis: distance from centre")," · ",g,e.createElement("br",{"data-os-loc":"src/field/BCaseFigures.jsx:91:95"}),l("纵轴：水面高度","Y axis: surface height")," ",t.toFixed(3)," … ",c.toFixed(3)," ",g),e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:93:9",className:"b-line-keys"},e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:93:36"},e.createElement("i",{"data-os-loc":"src/field/BCaseFigures.jsx:93:42",className:"b-line-gt"}),"GT"),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:93:77"},e.createElement("i",{"data-os-loc":"src/field/BCaseFigures.jsx:93:83",className:"b-line-pred"}),l("预测","Prediction")),i&&e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:94:20"},e.createElement("i",{"data-os-loc":"src/field/BCaseFigures.jsx:94:26",className:"b-band"}),l("比较区段","Compared interval"))))},e.createElement("svg",{"data-os-loc":"src/field/BCaseFigures.jsx:96:9",viewBox:"0 0 335 111","data-profile-axis":[o.first,o.last,0,335].join(","),role:"img","aria-label":p.frameId+" · "+h},e.createElement(Xc,{points:p.profile.points,scale:o,band:i}))))})),i&&e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:102:14",className:"b-band-note"},e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:102:41"},l("黄色区段","Highlighted interval"),"　s = ",i.lo.toFixed(2)," … ",i.hi.toFixed(2)," ",g)," · ",l("两帧逐点比较正误差，这两个相邻采样占剖面正误差全部减少量的 ","These two adjacent samples account for "),(i.share*100).toFixed(1),"%",l("。"," of all decreases in positive profile error.")," ",l("1050 帧的 GT 从局部谷底向右抬升，1054 帧的同一位置仍靠近谷底。","Here the 1050 GT rises from a local trough. The same positions remain near the trough in 1054.")),e.createElement("details",{"data-os-loc":"src/field/BCaseFigures.jsx:106:5",className:"b-signed-stats"},e.createElement("summary",{"data-os-loc":"src/field/BCaseFigures.jsx:106:41"},l("查看带符号误差统计","Show signed-error statistics")),n.map(p=>e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:107:24",key:p.frameId},e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:107:45"},p.frameId)," · ",l("区域偏差","ROI bias")," ",p.stats.bias?.toFixed(4)??"—"," ·"," ",l("偏高列均值","Mean positive")," ",p.region.counts[4]?.toFixed(4)??"—"," ·"," ",l("偏低列均值","Mean negative")," ",p.region.counts[5]?.toFixed(4)??"—"," ",g))))}function ml(n,a){const{shape:[s,t],originXYZ:[c,,i],spacing:o}=n.descriptor,r=[];for(let h=0;h<s;h++){const u=i+h*o;if(!(u<a.zmin||u>a.zmax))for(let d=0;d<t;d++){const p=c+d*o,w=h*t+d;p<a.xmin||p>a.xmax||r.push({ix:d,iz:h,error:n.common[w]?n.heightB[w]-n.heightA[w]:null})}}const f=r.map(h=>h.error).filter(Number.isFinite).sort((h,u)=>h-u),l=f.filter(h=>h>0),m=f.filter(h=>h<0),g=h=>h.length?h.reduce((u,d)=>u+d,0)/h.length:null,x=f.length;return{cells:r,counts:[x,l.length,m.length,x-l.length-m.length,g(l),g(m),x?(f[Math.floor((x-1)/2)]+f[Math.floor(x/2)])/2:null,g(f)]}}const Pa=n=>n==null?"—":n.toFixed(4);function bl(n){const[a,s]=n.map(i=>i.profile.points),t=a.map((i,o)=>Number.isFinite(i.difference)&&Number.isFinite(s[o]?.difference)?Math.max(0,i.difference)-Math.max(0,s[o].difference):null);let c=null;for(let i=1;i<t.length;i++){if(t[i-1]==null||t[i]==null)continue;const o=t[i-1]+t[i];(!c||o>c.sum)&&(c={sum:o,i})}return{lo:a[c.i-1].distance,hi:a[c.i].distance,share:c.sum/t.reduce((i,o)=>i+Math.max(0,o??0),0)}}function pl({data:n,bundle:a,zh:s,metricId:t,onTrack:c,recorded:i}){const o=E.useRef(null),r=(b,M)=>s?b:M,[f,l]=E.useState([]),[m,g]=E.useState(!1),[x,h]=E.useState(0);E.useEffect(()=>{let b=!0;const M=new URL(Le,document.baseURI);return x&&M.searchParams.set("retry",String(x)),import(M.href).then(R=>{b&&(l(R.metrics),g(!1))}).catch(()=>{b&&g(!0)}),()=>{b=!1}},[x]);const u=n.rows.filter(b=>yi.includes(b.frameId)),d=f.find(b=>b.id===t),p=xi({bundle:a,selection:n.selection,rows:u,metric:d,metricId:t,language:s?"zh":"en"});if(i)try{rc(i,a,n.selection)}catch(b){return e.createElement("p",{"data-os-loc":"src/field/BPairCase.jsx:59:23",role:"alert"},b.message)}const w=!!(i&&d&&(i.metricLabel!==d[i.language]||!vi(i.readings,p.readings))),j=Math.max(...u.flatMap(b=>b.region.cells.map(M=>Math.abs(M.error??0)))),S=u.flatMap(b=>b.profile.points.flatMap(M=>[M.a,M.b])).filter(Number.isFinite),v=Math.min(...S),_=Math.max(...S),y=bl(u),C=dl(n.roi,n.x,v,_),B=["frame","common","positive","negative","zero","mean_positive","mean_negative","median","roi_bias"];function A(b){let M,R;if(b==="svg"&&(M=o.current.outerHTML,R="image/svg+xml"),b==="csv"&&(M=Ei(p),R="text/csv"),b==="signed"){const I=[B,...n.rows.map(N=>[N.frameId,...N.region.counts])].map(N=>N.join(",")).join(`\r
`)+`\r
`;gn("OceanScope-B-1049-1054-signed-error.csv","text/csv",I);return}b==="json"&&(M=JSON.stringify({...dc(a,n,1050),caseView:lc,review:p,signedScale:[-j,j],band:y,signedStats:n.rows.map(I=>Object.fromEntries(B.map((N,z)=>[N,[I.frameId,...I.region.counts][z]])))},null,2),R="application/json"),gn("OceanScope-B-1050-1054."+b,R,M)}return e.createElement("section",{"data-os-loc":"src/field/BPairCase.jsx:84:10","data-b-review":JSON.stringify(p),"data-review-frame":"1050 / 1054","aria-label":"B paired frame case"},e.createElement(fl,{rows:u,data:n,limit:j,low:v,high:_,band:y,scale:C,evidence:p,zh:s}),e.createElement("div",{"data-os-loc":"src/field/BPairCase.jsx:86:5",hidden:!0},e.createElement("svg",{"data-os-loc":"src/field/BPairCase.jsx:86:17",ref:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 960 765",style:{width:"100%",maxWidth:960},role:"img","aria-label":r("B 区域两帧误差与剖面","B region paired error maps and profiles")},e.createElement("rect",{"data-os-loc":"src/field/BPairCase.jsx:87:5",width:"960",height:"765",fill:"#fafaf8"}),e.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:88:5",fill:"#173447",fontFamily:"sans-serif",fontSize:"16"},e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:89:5",x:"30",y:"40",fontSize:"26",fontWeight:"bold"},r("B 区域 · 中心仍偏高，区域平均转负","Region B · positive centre, changing regional bias")),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:90:5",x:"30",y:"69"},"Best_1027 · XZ (−0.95, 0.90) · ROI 1 × 1 · ",r("剖面沿 X，长度按场景单位","X profile, source length units")),d&&e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:91:16",x:"30",y:"88",fontSize:"15",fontWeight:"bold"},p.metricLabel," (",d.id,") · ",p.readings.map(b=>b.frameId+" = "+b.display+" ["+b.common+"/"+b.candidates+"]").join("   /   ")," · ",r("场景单位 · [共同有效/候选列]","scene units · [common/candidate columns]")),u.map((b,M)=>{const R=40+M*468,I=128,N=$=>R+36+C.x($),z=$=>423+C.y($);return e.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:95:14",key:b.frameId},e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:95:33",x:R,y:"109",fontWeight:"bold",fontSize:"23"},b.frameId),e.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:96:9",transform:"translate("+R+" "+I+")"},e.createElement($c,{cells:b.region.cells,limit:j,selection:n.selection})),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:97:9",x:R+222,y:"172"},"Z ↑   X →"),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:97:52",x:R+222,y:"205"},r("中心差","Centre Δh")," ",Pa(b.centre.difference)),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:98:9",x:R+222,y:"232"},"ROI bias ",Pa(b.stats.bias)),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:98:71",x:R+222,y:"259"},"n = ",b.region.counts[0]),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:99:9",x:R,y:"368"},r("偏高列均值","Mean positive")," ",Pa(b.region.counts[4]),"　 ",r("偏低列均值","Mean negative")," ",Pa(b.region.counts[5])),e.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:100:9",transform:"translate("+(R+36)+" 423)"},e.createElement(Xc,{points:b.profile.points,scale:C,band:y})),[v,_].map($=>e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:101:28",x:R-8,y:z($)+4,fontSize:"12",key:$},$.toFixed(2))),[-.5,0,.5].map($=>e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:102:28",key:$,x:N($),y:"551",textAnchor:"middle",fontSize:"13"},$.toFixed(1))))}),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:105:5",x:"38",y:"400"},r("带符号误差（预测 − GT）","Signed error (prediction − GT)")),Array.from({length:81},(b,M)=>e.createElement("rect",{"data-os-loc":"src/field/BPairCase.jsx:106:36",key:M,x:385+M*3,y:"385",width:"3",height:"14",fill:Vc((M-40)*j/40,j)})),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:107:5",x:"328",y:"399"},(-j).toFixed(3)),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:107:55",x:"500",y:"380"},"0"),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:107:85",x:"638",y:"399"},"+",j.toFixed(3)),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:108:5",x:"38",y:"583"},r("剖面横轴为距中心的 X 距离，纵轴为水面高度。蓝线 GT，橙线预测。","Horizontal: X distance from centre. Vertical: surface height. Blue GT, orange prediction.")),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:109:5",x:"38",y:"625",fontWeight:"bold"},r("偏高减小最集中的相邻两点","Adjacent pair with the largest reduction in positive error"),"　s = ",y.lo.toFixed(2)," … ",y.hi.toFixed(2)),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:110:5",x:"38",y:"659"},r("黄色标记该区段。逐点取正误差，再比较两帧；这两点占剖面全部正向减小量的","Gold marks the interval. These points account for this share of all decreases in positive error:")," ",(y.share*100).toFixed(1),"%."),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:111:5",x:"38",y:"695"},r("该段位于 1050 帧 GT 由局部谷底向右抬升处。1054 帧同一位置仍靠近低谷。","In 1050 the GT rises out of a local trough here. In 1054 these positions remain near the trough.")),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:112:5",x:"38",y:"735"},r("两帧比较固定世界位置。白点为中心，虚线为穿过中心的 X 剖面。","World positions are fixed. White circle: centre. Dashed line: X section through centre."))))),w&&e.createElement("p",{"data-os-loc":"src/field/BPairCase.jsx:114:18",role:"alert"},r("原记录与当前正式指标的数值或有效列不同。请核对原文件，然后重新选择指标。","The saved values or column counts differ from the current metric. Check the original record and select a metric again.")),e.createElement(ll,{rows:u,zh:s,metrics:f,metric:d,metricId:t,onTrack:c,evidence:p,error:m,retry:()=>h(b=>b+1)}),["svg","csv","json"].map(b=>e.createElement("button",{"data-os-loc":"src/field/BPairCase.jsx:116:36","data-os-action":"",key:b,disabled:!d||w,onClick:()=>A(b)},b==="csv"?r("下载 B 两帧指标摘要 CSV","Download B two-frame metric summary CSV"):r("下载 B 案例","Download B case")+" "+b.toUpperCase())),e.createElement("button",{"data-os-loc":"src/field/BPairCase.jsx:117:5","data-os-action":"",onClick:()=>A("signed")},r("下载 B 带符号误差明细 CSV（1049–1054）","Download B signed-error details CSV (1049–1054)")))}const Jn=n=>Number.isFinite(n)?n.toFixed(4):"—";function Zc(n,a){const s=n.spacing,t=a==="A"?176:174,c=a==="A"?90:69,i=n.originXYZ[0]+t*s,o=n.originXYZ[2]+c*s;return{sourceFrame:n.frameId,ix:t,iz:c,x:i,z:o,roi:{xmin:i-10*s,xmax:i+10*s,zmin:o-10*s,zmax:o+10*s},directionDeg:0}}async function ul(n,a,s){const t=await $a(oa,Xa.indexSha256,n),c=t.frames.find(_=>_.frameId===1049),i=c.spacing,o=typeof a=="string"?Zc(c,a):a,{ix:r,iz:f,sourceFrame:l,roi:m,directionDeg:g}=o,x=t.frames.find(_=>_.frameId===l);if(!x||!Number.isInteger(r)||!Number.isInteger(f)||r<0||f<0||r>=x.shape[1]||f>=x.shape[0])throw Error("Invalid hotspot index");const h=x.originXYZ[0]+r*x.spacing,u=x.originXYZ[2]+f*x.spacing,d=Ja({descriptor:x});if(!Number.isFinite(g)||g<0||g>=180||!m||!["xmin","xmax","zmin","zmax"].every(_=>Number.isFinite(m[_]))||m.xmin>=m.xmax||m.zmin>=m.zmax||m.xmin<d.xmin||m.xmax>d.xmax||m.zmin<d.zmin||m.zmax>d.zmax||h<m.xmin||h>m.xmax||u<m.zmin||u>m.zmax)throw Error("Select an ROI containing the hotspot and a valid profile angle");const p={sourceFrame:l,ix:r,iz:f,x:h,z:u,roi:m,directionDeg:g};if(h!==o.x||u!==o.z)throw Error("Hotspot world coordinates differ from source");const w=await sa(x,{...Nn(n),frameId:l},s);if(!w.common[f*x.shape[1]+r])throw Error("Source hotspot is outside common support");const j=[];for(const _ of Si){const y=t.frames.find(M=>M.frameId===_),C=_===l?w:await sa(y,{...Nn(n),frameId:_},s),B=Bt(C,{x:h,z:u,directionDeg:g});B.points=B.points.filter(M=>M.x>=m.xmin-1e-9&&M.x<=m.xmax+1e-9&&M.z>=m.zmin-1e-9&&M.z<=m.zmax+1e-9);const A=B.points.find(M=>Math.abs(M.distance)<1e-9),b=r===174&&f===69&&g===0&&m.xmin===h-10*i&&m.xmax===h+10*i&&m.zmin===u-10*i&&m.zmax===u+10*i?ml(C,m):null;j.push({region:b,frameId:_,profile:B,centre:A,stats:Fn(C,m)})}const S=j.flatMap(_=>_.profile.points),v=S.flatMap(_=>[_.a,_.b]).filter(Number.isFinite);return{selection:p,x:h,z:u,roi:m,rows:j,limits:v.length?[Math.min(...v),Math.max(...v)]:[0,1],error:Math.max(1e-9,...S.map(_=>Math.abs(_.difference??0)))}}function hl({bundle:n,zh:a,getSelection:s}){const{setLanguage:t}=me(),[c,i]=E.useState(()=>Ba()?"B":null),[o,r]=E.useState(()=>Ba()?1050:1049),[f,l]=E.useState(null),[m,g]=E.useState(Ba),[x,h]=E.useState(()=>ks(new URLSearchParams(window.location.search))),[u,d]=E.useState(()=>{const b=Za();return Ms(b)?b.bReview:null}),[p,w]=E.useState(""),j=E.useRef(null),S=E.useRef(0);function v(b,M=1049,R=!1,I=x,N=null){S.current++,g(R),w(""),i(b),r(M),d(N);const z=new URL(window.location.href);if(R)h(I),Ps(z,I,N?.language||(a?"zh":"en")),z.hash="#analysis-height";else if(Ba()){for(const $ of["review","metric","proposal"])z.searchParams.delete($);z.hash="#analysis-height"}window.history.replaceState(window.history.state,"",z)}function _(b){window.dispatchEvent(new Event("oceanscope-dismiss-mark")),S.current++,d(null),h(b);const M=Ps(new URL(window.location.href),b,a?"zh":"en");M.hash="#analysis-height",window.history.replaceState(window.history.state,"",M)}E.useEffect(()=>{const b=()=>{if(window.location.hash.startsWith("#mark="))return;const M=new URLSearchParams(window.location.search);M.get("review")==="b-pair"?(S.current++,d(null),g(!0),i("B"),r(1050),h(ks(M)),w("")):m&&(S.current++,d(null),g(!1),i(null),w(""))};return window.addEventListener("popstate",b),()=>window.removeEventListener("popstate",b)},[m]),E.useEffect(()=>{const b=M=>{const R=M.detail;Ms(R)&&(S.current++,w(""),g(!0),i("B"),r(1050),d(R.bReview||null),h(R.bReview?.metricId||""))};return window.addEventListener(Rs,b),()=>window.removeEventListener(Rs,b)},[]);async function y(b){if(!b)return;const M=++S.current;try{if(b.size>8*1024*1024)throw Error("Report exceeds 8 MiB");const R=JSON.parse(await b.text()),I=_i(R,n);if(!I||typeof I!="object")throw Error("Invalid report selection");const N=R.caseView===lc;if(N){const z=JSON.parse(oa).frames.find(X=>X.frameId===1049),$=Zc(z,"B");if(!wi($,I))throw Error(a?"报告的选区或剖面与固定 B 区域不符。":"The report ROI or profile differs from the fixed B region.");R.review!=null&&rc(R.review,n,$)}M===S.current&&(v(I,R.selectedFrame,N,R.review?.metricId??"",N?R.review:null),N&&R.review&&t(R.review.language))}catch(R){M===S.current&&w(R.message)}}E.useEffect(()=>{if(!c)return;const b=new AbortController;return ul(n,c,b.signal).then(M=>{b.signal.aborted||l({bundle:n,location:c,data:M})}).catch(M=>{b.signal.aborted||l({bundle:n,location:c,error:M.message})}),()=>b.abort()},[n,c]);const C=f?.bundle===n&&f.location===c?f:null,B=C?.data,A=B?.rows.find(b=>b.frameId===o);return e.createElement("section",{"data-os-loc":"src/field/FixedWaveWindow.jsx:146:10","data-review-frame":A?.frameId,ref:j,"aria-label":"Fixed ROI wave window"},e.createElement("h3",{"data-os-loc":"src/field/FixedWaveWindow.jsx:146:101"},a?"固定选区波形 · 1049–1054":"Fixed ROI wave profiles · 1049–1054"),["A","B"].map(b=>e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:147:24","data-os-action":"",key:b,"aria-pressed":c===b,onClick:()=>v(b)},a?"固定区域 ":"Fixed region ",b)),e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:148:5","data-os-action":"",onClick:()=>v("B",1050,!0)},a?"B 区域：1050 与 1054":"Compare B: 1050 and 1054"),e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:149:5","data-os-action":"",onClick:()=>{try{v(s())}catch(b){w(b.message)}}},a?"使用当前热点与选区":"Use current hotspot and ROI"),e.createElement("label",{"data-os-loc":"src/field/FixedWaveWindow.jsx:150:5"},a?"恢复六帧 JSON":"Restore six-frame JSON"," ",e.createElement("input",{"data-os-loc":"src/field/FixedWaveWindow.jsx:150:54","data-os-action":"",type:"file","aria-label":"Restore six-frame JSON",accept:".json",onChange:b=>{y(b.target.files[0]),b.target.value=""}})),p&&e.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:151:17",role:"alert"},p),c&&!C&&e.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:152:29",role:"status"},a?"正在读取六帧高度…":"Loading six height frames…"),C?.error&&e.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:153:23",role:"alert"},C.error," ",e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:153:54","data-os-action":"",onClick:()=>i(null)},a?"重置":"Reset")),m&&B&&(!B.rows[0].region||B.selection.sourceFrame!==1049)?e.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:155:7",role:"alert"},a?"B 案例固定选区或来源帧不符。":"The fixed B region or source frame does not match."):m&&B&&e.createElement(pl,{data:B,bundle:n,zh:a,metricId:x,recorded:u,onTrack:_}),A&&e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:157:15"},"XZ (",Jn(B.x),", ",Jn(B.z),") · ",B.selection.directionDeg,"° · ",a?"固定世界位置。蓝 GT，橙预测，紫色为预测减 GT。":"Fixed world position. Blue GT, orange prediction, purple prediction minus GT."),e.createElement("table",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:5"},e.createElement("thead",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:12"},e.createElement("tr",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:19"},(a?["帧","中心高度差","ROI 平均偏差","ROI MAE","共同有效 / 候选"]:["Frame","Centre height difference","ROI mean bias","ROI MAE","Common / candidate"]).map(b=>e.createElement("th",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:167",key:b},b)))),e.createElement("tbody",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:5"},B.rows.map(b=>e.createElement("tr",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:30","data-review-frame":b.frameId,key:b.frameId},e.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:80"},e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:84","data-os-action":"","aria-pressed":o===b.frameId,onClick:()=>r(b.frameId)},b.frameId)),e.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:7"},Jn(b.centre?.difference)),e.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:46"},Jn(b.stats.bias)),e.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:77"},Jn(b.stats.mae)),e.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:107"},b.stats.common," / ",b.stats.candidates))))),e.createElement(Pt,{reviewId:"fixed-wave-"+A.region,profile:A.profile,roi:B.roi,limits:B.limits,errorLimit:B.error,label:(a?"固定剖面 ":"Fixed profile ")+o}),e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:162:5","data-os-action":"",onClick:()=>gn("OceanScope-six-frame.json","application/json",JSON.stringify(dc(n,B,o),null,2))},a?"下载六帧 JSON":"Download six-frame JSON"),e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:163:5","data-os-action":"",onClick:()=>gn("OceanScope-six-frame.csv","text/csv",["frame,hotspot_difference,roi_bias,roi_mae,common,candidate",...B.rows.map(b=>[b.frameId,b.centre?.difference,b.stats.bias,b.stats.mae,b.stats.common,b.stats.candidates].join(","))].join(`
`))},a?"下载逐帧 CSV":"Download six-frame CSV"),e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:164:5","data-os-action":"",onClick:()=>{const b=j.current.querySelector(":scope > figure svg").cloneNode(!0);b.setAttribute("xmlns","http://www.w3.org/2000/svg"),gn("OceanScope-profile-"+o+".svg","image/svg+xml",b.outerHTML)}},a?"下载当前剖面 SVG":"Download profile SVG")),e.createElement(nl,{zh:a}),e.createElement(Q0,{zh:a}))}function gl({zh:n}){const a=[{id:"MAE",name:n?"平均绝对误差":"Mean absolute error",formula:"MAE = Σ|eᵢ| / N",meaning:n?"平均差多少，不区分偏高或偏低。越接近 0 越好。":"Average error size, regardless of direction. Closer to 0 is better."},{id:"Bias",name:n?"平均有符号偏差":"Mean signed error",formula:"Bias = Σeᵢ / N",meaning:n?"正值表示预测偏高，负值表示偏低。正负误差会抵消，所以 Bias 接近 0 不代表每个位置都准确。":"Positive means the prediction is higher; negative means lower. Opposite errors can cancel, so a near-zero bias does not guarantee small errors."},{id:"RMSE",name:n?"均方根误差":"Root mean square error",formula:"RMSE = √(Σeᵢ² / N)",meaning:n?"先平方、求平均，再开平方，对较大的误差更敏感。越接近 0 越好；它不是最大误差。":"Square the errors, average them, then take the square root. More sensitive to large errors; closer to 0 is better. This is not the maximum error."}];return e.createElement("details",{"data-os-loc":"src/field/HeightMetricHelp.jsx:9:9",className:"height-metric-help"},e.createElement("summary",{"data-os-loc":"src/field/HeightMetricHelp.jsx:10:3"},n?"MAE、Bias、RMSE 怎么看？说明与公式":"How to read MAE, Bias and RMSE — definitions & formulas"),e.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:11:3",className:"height-metric-help-body"},e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:12:4"},n?"先在同一位置比较水面高度：Aᵢ 是 GT（参考值），Bᵢ 是预测值，eᵢ = Bᵢ − Aᵢ。以下高度与误差统一用 cm 表示；1 m = 100 cm。":"Compare heights at the same location: Aᵢ is GT (the reference), Bᵢ is the prediction, and eᵢ = Bᵢ − Aᵢ. Heights and errors below use cm; 1 m = 100 cm."),e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:13:4"},n?"N 是当前统计范围内两边都有有效高度的位置数，也叫“共同列”。每个 (X, Z) 位置对应一条竖直列，取其最上层水面高度。Σ 表示将这 N 个位置的数相加。缺失位置不补零；N = 0 时不提供误差分数。":"N is the number of locations with valid heights in both datasets within the current scope, also called common columns. Each (X, Z) location defines a vertical column with a topmost surface height. Σ sums over these N locations. Missing locations are not filled with zero; no error score is available when N = 0."),e.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:4",className:"height-metric-formulas"},a.map(s=>e.createElement("article",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:61",key:s.id},e.createElement("h3",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:84"},s.id," · ",s.name),e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:116",className:"height-metric-formula"},s.formula),e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:171"},s.meaning)))),e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:15:4",className:"height-metric-example"},e.createElement("strong",{"data-os-loc":"src/field/HeightMetricHelp.jsx:15:41"},n?"小例子：":"Example: "),n?"两个位置分别偏低 1 cm、偏高 3 cm，即 e = −1、+3 cm。MAE = 2 cm，Bias = +1 cm，RMSE = √5 ≈ 2.24 cm。三个指标从不同角度描述同一组误差。":"At two locations, the prediction is 1 cm lower and 3 cm higher: e = −1, +3 cm. MAE = 2 cm, Bias = +1 cm, and RMSE = √5 ≈ 2.24 cm. The metrics describe different aspects of the same errors."),e.createElement("dl",{"data-os-loc":"src/field/HeightMetricHelp.jsx:16:4",className:"height-metric-scopes"},e.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:5"},e.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:10"},n?"当前帧 · 全域":"Current frame · Full domain"),e.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:64"},n?"当前这一帧内，所有共同有效位置的统计；不是全部 96 帧的平均。":"All paired valid locations in this frame; not an average over all 96 frames.")),e.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:5"},e.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:10"},n?"选区 · ROI":"Selected region · ROI"),e.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:58"},n?"只统计已应用的矩形选区内的位置。ROI 是“感兴趣区域”；改变选区不会改变当前帧全域或全序列评分。":"Only locations inside the applied rectangle. ROI means region of interest. Changing it does not change full-frame or sequence scores.")),e.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:5"},e.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:10"},n?"单点探针 / 截面":"Point probe / Profile"),e.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:59"},n?"探针读数来自一个点击位置；曲线沿当前整条截面显示，并不自动裁剪到 ROI。两者都不能当作选区平均值。":"The probe reads one clicked location. The profile follows the current full section and is not automatically cropped to the ROI. Neither is an ROI average."))),e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:21:4"},n?"这些是水面高度误差，不是 SDF 场误差或速度误差。此处单位为 cm；固定协议的全序列指标及 %R 请到“时间分析”查看。":"These are surface-height errors, not SDF-field or velocity errors. Values here use cm. Open Time analysis for fixed-protocol sequence metrics and %R.")))}const ve=(n,a=1)=>n==null?"—":(n*a).toFixed(4);function Kn(n){const{shape:[a,s],originXYZ:[t,,c],spacing:i}=n.descriptor;return{xmin:t,xmax:t+(s-1)*i,zmin:c,zmax:c+(a-1)*i}}function yl(n){let a=1/0,s=-1/0,t=0;for(let c=0;c<n.heightA.length;c++){for(const i of["A","B"])n["wet"+i][c]&&(a=Math.min(a,n["height"+i][c]),s=Math.max(s,n["height"+i][c]));n.common[c]&&(t=Math.max(t,Math.abs(n.heightB[c]-n.heightA[c])))}return{height:Number.isFinite(a)?[a,s>a?s:a+1]:[0,1],error:Math.max(t,1e-9)}}function xl({spatial:n,kind:a,range:s,roi:t,probe:c,profile:i,onRegion:o,onProbe:r,label:f,absolute:l=!1,diagnosis:m,mode:g,onPause:x}){const h=E.useRef(null),u=E.useRef(null),[d,p]=n.descriptor.shape,w=Kn(n),j=a==="difference"?null:n[a],S=a==="difference"?n.common:n[a==="heightA"?"wetA":"wetB"];E.useEffect(()=>{const B=h.current,A=B?.getContext("2d");if(!A)return;const b=A.createImageData(p,d);for(let R=0;R<d;R++)for(let I=0;I<p;I++){const N=R*p+I,z=((d-1-R)*p+I)*4;if(!S[N]){b.data.set([225,230,235,255],z);continue}const $=n.heightB[N]-n.heightA[N],X=j?j[N]:l?Math.abs($):$,Z=Math.max(0,Math.min(1,(X-s[0])/(s[1]-s[0]))),ne=a==="difference"&&!l?Z<.5?[80+350*Z,130+230*Z,220+70*Z]:[255,245-350*(Z-.5),255-440*(Z-.5)]:[35+195*Z,75+155*Z,155+70*Z];b.data.set([...ne,255],z)}A.putImageData(b,0,0);const M=(R,I)=>[(R-w.xmin)/n.descriptor.spacing+.5,d-.5-(I-w.zmin)/n.descriptor.spacing];if(m){const R=Dn(n,m);for(const I of[R.first,R.second])A.strokeStyle="#15373e",A.beginPath(),I.points.forEach((N,z)=>A[z?"lineTo":"moveTo"](...M(N.x,N.z))),A.stroke()}if(!m&&i?.points.length&&(A.strokeStyle="#172c43",A.lineWidth=1,A.beginPath(),i.points.forEach((R,I)=>A[I?"lineTo":"moveTo"](...M(R.x,R.z))),A.stroke()),t){const[R,I]=M(t.xmin,t.zmax),[N,z]=M(t.xmax,t.zmin);if(A.strokeStyle="#111",A.lineWidth=1,A.strokeRect(R,I,N-R,z-I),g==="adjust")for(const[$,X]of[[R,I],[R,z],[N,I],[N,z]])A.fillRect($-1.5,X-1.5,3,3)}if(c){const[R,I]=M(c.x,c.z);A.strokeStyle="#111",A.beginPath(),A.moveTo(R-3,I),A.lineTo(R+3,I),A.moveTo(R,I-3),A.lineTo(R,I+3),A.stroke()}},[n,a,s[0],s[1],t,c,i,l,m,g]);function v(B){const A=B.currentTarget.getBoundingClientRect(),b=getComputedStyle(B.currentTarget),M={left:A.left,top:A.top,width:A.width,height:A.height};for(const z of["Left","Right","Top","Bottom"])M["border"+z]=parseFloat(b["border"+z+"Width"])||0;const{ix:R,iz:I,index:N}=Ci(M,B.clientX,B.clientY,[d,p]);return{x:w.xmin+R*n.descriptor.spacing,z:w.zmin+I*n.descriptor.spacing,index:N}}function _(B,A){if(g!=="adjust"||!A.roi)return{xmin:Math.min(A.x,B.x),xmax:Math.max(A.x,B.x),zmin:Math.min(A.z,B.z),zmax:Math.max(A.z,B.z)};const b=A.roi,M=n.descriptor.spacing,R=B.x-A.x,I=B.z-A.z;let N;return A.corner?(N={...b,[A.corner[0]]:B.x,[A.corner[1]]:B.z},N.xmax-N.xmin<M||N.zmax-N.zmin<M?b:ca(N,w).roi):(N={xmin:b.xmin+R,xmax:b.xmax+R,zmin:b.zmin+I,zmax:b.zmax+I},ca(N,w,{mode:"move"}).roi)}function y(B){if(!u.current)return;const A=v(B),b=u.current;u.current=null,g==="adjust"?o(_(A,b)):A.index===b.index?r(A):o(_(A,b))}function C(B){const A=v(B),b=n.descriptor.spacing;let M=null;if(t&&g==="adjust"){const R=["xmin","xmax"].find(N=>Math.abs(A.x-t[N])<2*b),I=["zmin","zmax"].find(N=>Math.abs(A.z-t[N])<2*b);R&&I&&(M=[R,I])}g==="adjust"&&t&&!M&&(A.x<t.xmin||A.x>t.xmax||A.z<t.zmin||A.z>t.zmax)||(u.current={...A,roi:t,corner:M},x?.(),B.currentTarget.setPointerCapture?.(B.pointerId))}return e.createElement("figure",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:55:9","data-review-id":"native-height-"+a+(a==="difference"&&l?"-absolute":"")},e.createElement("figcaption",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:55:103"},f),e.createElement("canvas",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:55:135","data-os-action":"","data-renderer":"native-height","data-review-frame":n.descriptor.frameId,"data-grid-origin":[w.xmin,w.zmin,n.descriptor.spacing].join(","),ref:h,width:p,height:d,"data-hotspot-index":m?.hotspot.index??"","aria-label":a==="heightA"?"GT height map":a==="heightB"?"Prediction height map":l?"Absolute height difference map":"Signed height difference map",onPointerDown:C,onPointerMove:B=>{u.current&&g==="adjust"&&o(_(v(B),u.current))},onPointerUp:y,onPointerCancel:()=>{u.current?.roi&&g==="adjust"&&o(u.current.roi),u.current=null}}),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:55:799"},"X ",ve(w.xmin),"…",ve(w.xmax)," · Z ",ve(w.zmin),"…",ve(w.zmax)," m"),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:55:909"},ve(s[0])," … ",ve(s[1])," m"))}function vl({profile:n,zh:a}){const s=n.points,t=s.flatMap(g=>[g.a,g.b]).filter(Number.isFinite),c=s.map(g=>g.difference).filter(Number.isFinite);if(!t.length)return e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:59:27",role:"status"},a?"此剖面没有有效高度。":"No valid heights on this profile.");const i=Math.min(...t),o=Math.max(...t),r=Math.max(o-i,1e-9),f=Math.max(...c.map(Math.abs),1e-9),l=Math.max(s.at(-1)?.distance||0,1e-9);function m(g,x=!1){let h=!1;return s.map(u=>{if(u[g]===null)return h=!1,"";const d=42+u.distance/l*640,p=x?235-u[g]/f*42:166-(u[g]-i)/r*130,w=h?"L":"M";return h=!0,`${w}${d},${p}`}).join(" ")}return e.createElement("figure",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:62:9","data-review-id":"protocol-height-profile","data-profile-axis":[0,l,42,682].join(","),className:"protocol-profile"},e.createElement("figcaption",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:62:137"},a?"同一截面 · 蓝色GT／橙色预测 · B−A":"Same section · blue GT / orange prediction · B−A"," · ",n.sampling==="native_columns"?a?"原生列":"Native columns":a?"四邻点共同有效 · 插值诊断":"Four valid neighbors · interpolated diagnosis"),e.createElement("svg",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:62:380",viewBox:"0 0 720 300",role:"img","aria-label":"Protocol height profile"},e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:62:455",x:"8",y:"18"},"Y (m)"),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:62:486",x:"42",y:"30"},ve(o)),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:62:526",x:"42",y:"185"},ve(i)),e.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:62:567",d:m("a"),fill:"none",stroke:"#2583c5",strokeWidth:"2"}),e.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:62:633",d:m("b"),fill:"none",stroke:"#e08b22",strokeWidth:"2"}),e.createElement("line",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:62:699",x1:"42",y1:"235",x2:"682",y2:"235",stroke:"#798699",strokeDasharray:"4 3"}),e.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:62:780",d:m("difference",!0),fill:"none",stroke:"#9b4778",strokeWidth:"1.5"}),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:62:862",x:"4",y:"220"},"B−A"),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:62:892",x:"4",y:"240"},"0"),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:62:920",x:"600",y:"295"},ve(l)," m"),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:62:969",x:"44",y:"295"},a?"沿截面距离":"Section distance"," · ±",ve(f)," m")))}function ec({value:n,label:a,zh:s}){return e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:64:43",className:"protocol-metrics","aria-label":a},e.createElement("strong",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:2"},a==="ROI metrics"?s?"选区 · 水面高度":"ROI · Surface height":s?"当前帧全域 · 水面高度":"Full frame · Surface height"),e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:66:2",className:"protocol-metric-cards"},e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:67:3"},e.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:67:8"},s?"有效对比点":"Paired valid locations"," ",n.common),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:67:73"},s?"共同列 · 两边都有有效高度":"Common columns · valid heights in both")),n.common?e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:69:4"},e.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:69:9"},"MAE ",ve(n.mae_m,100)," cm"),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:69:54"},s?"平均差多少 · 越小越好":"Average error size · lower is better")),e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:70:4"},e.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:70:9"},"Bias ",ve(n.bias_m,100)," cm"),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:70:56"},s?"平均偏差 · 正值偏高，负值偏低":"Mean signed error · positive higher, negative lower")),e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:71:4"},e.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:71:9"},"RMSE ",ve(n.rmse_m,100)," cm"),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:71:56"},s?"对大误差更敏感 · 越小越好":"More sensitive to large errors · lower is better"))):e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:72:7"},s?"不可用：无共同有效列":"Unavailable: no common columns")))}function El({linkedPoint:n,onManualHeightPick:a,onHeightMark:s,spatial:t,plane:c,sliceIndex:i,rotationAxis:o,angle:r,sectionPercent:f,zh:l,restored:m,controlRef:g,onPause:x,onOpenVelocity:h,reviewRequest:u,onReviewApplied:d}){const[p,w]=E.useState(m?.roi??null),[j,S]=E.useState(m?.probe??null),[v,_]=E.useState(()=>m?.roi??Kn(t)),[y,C]=E.useState(()=>vt(m?.roi??Kn(t))),[B,A]=E.useState({}),[b,M]=E.useState(m?.diagnosis??null),[R,I]=E.useState(m?.appearance?.absoluteError??!1),[N,z]=E.useState("select"),[$,X]=E.useState("");E.useEffect(()=>{if(!s)return;const O=j&&t.wetA[j.index]?t.heightA[j.index]:null,Y=p?[[p.xmin,p.zmin],[p.xmax,p.zmin],[p.xmax,p.zmax],[p.xmin,p.zmax]].map(([he,ke])=>[he,O??0,ke]):null;return s({frame:t.descriptor.frameId,value:p||O!=null?{source:"height",corners:Y,probe:O!=null?[j.x,O,j.z]:null}:null}),()=>s(null)},[t,j,p,s]),E.useEffect(()=>{if(!n||n.frame!==t.descriptor.frameId)return;const O=Tr(n.world,t.descriptor);if(!O||!t.common[O.index]){S(O),M(null),W(),X(O?l?"该速度点所在列无共同有效水面高度。":"No jointly valid height at the selected velocity column.":l?"该速度点未落在当前高度图的原生列中心。":"The selected velocity point does not coincide with a native height column.");return}const Y=yt(t,{ix:O.ix,iz:O.iz,resourceKey:JSON.stringify(t.descriptor)});P(Y.roi),S(Y.hotspot),M(Y),X("")},[n,t]);function Z(O){a?.();try{const Y=t.descriptor.shape[1],he=yt(t,{ix:O.index%Y,iz:Math.floor(O.index/Y),resourceKey:JSON.stringify(t.descriptor)});x?.(),M(he),S(he.hotspot),P(he.roi),X("")}catch{X(l?"该点没有共同有效高度，请选择有效水面。":"No paired height at this point. Choose a valid water column.")}}const ne=J0(y,v,B),D=Object.keys(ne.errors).length?l?"请补全数字；每个轴的最小值不能大于最大值。当前已应用的选区未改变。":"Enter all numeric bounds; each minimum must be no greater than its maximum. The applied ROI is unchanged.":"";E.useImperativeHandle(g,()=>({capture:()=>({spatial:t,roi:p,probe:j,diagnosis:b,appearance:{absoluteError:R}})}));const K=E.useMemo(()=>yl(t),[t]),F=E.useMemo(()=>ea(t),[t]),L=E.useMemo(()=>p?ea(t,p):null,[t,p]),T=E.useMemo(()=>{if(c==="xz"||c==="oblique"&&o!=="y")return null;try{return ic(t,{plane:c,index:Math.max(0,Math.min((c==="xy"?t.descriptor.shape[0]:t.descriptor.shape[1])-1,i)),angle:r,sectionPercent:f})}catch{return null}},[t,c,i,o,r,f]);function P(O){M(Y=>Y?.crest?{...Y,crest:void 0}:Y),w(O),_(O),C(vt(O)),A({})}function W(){M(Y=>Y?.crest?{...Y,crest:void 0}:Y);const O=Kn(t);w(null),_(O),C(vt(O)),A({})}function ce(){ne.valid&&(ea(t,ne.values),P({...ne.values}))}const U=j?.index,ue=t.descriptor,re=ue.resources&&[ue.protocolSha256,ue.manifestA,ue.manifestB,...Object.keys(ue.resources).sort().map(O=>ue.resources[O].sha256)].join("/"),xe=re&&b&&p?{frame:ue.frameId,run:ue.runId,identity:re,ix:b.hotspot.ix,iz:b.hotspot.iz,x:b.hotspot.x,z:b.hotspot.z,roi:p,direction:b.directionDeg,absolute:R,note:b.caseNote??"",...b.crest&&{crest:b.crest}}:null;return E.useEffect(()=>{if(!(!u||u.frame!==ue.frameId)){try{const O=u,Y=yt(t,{ix:O.ix,iz:O.iz,resourceKey:JSON.stringify(ue)});if(O.identity!==re||O.run!==ue.runId||O.x!==Y.hotspot.x||O.z!==Y.hotspot.z||ca(O.roi,Kn(t)).clipped||!Number.isFinite(O.direction)||O.direction<0||O.direction>=180||typeof O.absolute!="boolean"||typeof O.note!="string"||O.note.length>120)throw Error();const he={...Y,roi:O.roi,directionDeg:O.direction,caseNote:O.note,...O.crest&&{crest:O.crest}};O.crest&&Ua({profiles:Dn(t,he),roi:O.roi},O.crest),P(O.roi),M(he),S(Y.hotspot),I(O.absolute),X("")}catch{M(null),S(null),W(),X(l?"批注与当前水面数据不匹配。":"The annotation does not match the current surface data.")}d()}},[u,t]),e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:130:9","data-hotspot-review":xe?JSON.stringify({surface:xe}):void 0},e.createElement("h2",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:131:3"},l?"高度与选区分析 · 帧 ":"Height & ROI analysis · frame ",t.descriptor.frameId),e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:132:3"},l?"原生列高度 · 最高过零点 · 共同有效域。点击探针，拖动选择ROI；灰色为无效区域。A/B共用色标，B−A正值表示预测偏高。":"Native highest-crossing columns and common support. Click to probe; drag to select ROI. Gray is invalid. Shared A/B scale; positive B−A means prediction is higher."),e.createElement("label",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:133:3"},e.createElement("input",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:133:10","data-os-action":"",type:"checkbox","aria-label":"Absolute height error",checked:R,onChange:O=>I(O.target.checked)}),l?"绝对误差 |B−A|（取消为有符号差值）":"Absolute error |B−A| (clear for signed difference)"),$&&e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:134:20",role:"alert"},$),e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:135:3",className:"protocol-maps"},[["heightA","A / GT"],["heightB","B / Prediction"],["difference","B−A"]].map(([O,Y])=>e.createElement(xl,{key:O,spatial:t,kind:O,label:O==="difference"&&R?"|B−A|":Y,roi:p,probe:j,profile:T,diagnosis:b,mode:N,onPause:x,absolute:R,range:O==="difference"?[R?0:-K.error,K.error]:K.height,onRegion:P,onProbe:Z}))),e.createElement(K0,{spatial:t,diagnosis:b,roi:p,mode:N,setMode:z,onRegion:P,onExit:()=>M(null),onNote:O=>M(Y=>({...Y,caseNote:O})),onCrest:O=>M(Y=>({...Y,crest:O})),onDirection:O=>M(Y=>({...Y,directionDeg:O,crest:void 0}))}),b&&h&&e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:137:31"},e.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:137:34","data-os-action":"",disabled:!xn(t.descriptor.frameId)||!p,onClick:()=>{x?.();const O={frame:t.descriptor.frameId,hotspotXZ:{x:b.hotspot.x,z:b.hotspot.z},roiXZ:{...p},surfaceCaseId:t.descriptor.runId??"best-1027",caseNote:b.caseNote??"",surfaceIdentity:Object.fromEntries(["runId","protocolSha256","manifestA","manifestB"].map(Y=>[Y,t.descriptor[Y]]))};xe?h(O,null,xe):h(O)}},l?"查看此区域速度":"Inspect velocity in this region"),l?" · 原生速度诊断支持 1001、1049、1096 帧。保留 XZ，单独选择水下 Y 层。":" · Native velocity diagnosis is available for 1001, 1049 and 1096. Retain XZ and choose an underwater Y layer separately."),e.createElement(ec,{value:F,label:"Frame spatial metrics",zh:l}),e.createElement(gl,{zh:l}),e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:140:3",className:"protocol-roi-help"},l?"ROI = 局部选区。X、Z 是水平方向，Y 是高度方向；下面四个边界确定矩形范围，点击“应用选区”后更新局部统计。":"ROI = region of interest. X and Z are horizontal; Y is height. The four bounds define a rectangle. Select Apply ROI to update its statistics."),e.createElement("form",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:141:3",onSubmit:O=>{O.preventDefault(),ce()}},e.createElement("fieldset",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:141:52",className:"protocol-roi"},e.createElement("legend",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:141:87"},l?"选区范围 · 世界坐标（m）":"ROI bounds · world coordinates (m)"),[["xmin","X min"],["xmax","X max"],["zmin","Z min"],["zmax","Z max"]].map(([O,Y])=>e.createElement("label",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:141:252",key:O},Y,e.createElement("input",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:141:276","data-os-action":"","aria-label":`ROI ${Y}`,type:"number",step:"any",value:y[O],title:String(v[O]),"aria-invalid":!!ne.errors[O],"aria-describedby":ne.errors[O]?"roi-input-error":void 0,onChange:he=>{C(ke=>({...ke,[O]:he.target.value})),A(ke=>({...ke,[O]:!0}))}}))),e.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:141:589",type:"submit",disabled:!ne.valid},l?"应用选区":"Apply ROI"),e.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:141:669","data-os-action":"",type:"button",onClick:W},l?"恢复全域":"Reset to full domain")),D&&e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:141:778",id:"roi-input-error",role:"alert"},D)),e.createElement(oc,{zh:l,subject:"Best_1027 · "+t.descriptor.frameId,context:[R?"|B−A|":"B−A",j&&"XZ "+j.x.toFixed(4)+", "+j.z.toFixed(4),p&&"ROI X ["+p.xmin+", "+p.xmax+"] Z ["+p.zmin+", "+p.zmax+"]",b&&"Profile "+b.directionDeg+"°"].filter(Boolean).join(" · "),viewLink:ji+"#analysis-height"}),L&&e.createElement(ec,{value:L,label:"ROI metrics",zh:l}),j&&e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:148:11","aria-label":"Protocol probe"},e.createElement("strong",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:148:42"},l?"单点探针（不是选区平均）":"Point probe (not an ROI average)"),e.createElement("br",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:148:113"}),"X ",ve(j.x)," / Z ",ve(j.z)," m · A / GT ",ve(t.wetA[U]?t.heightA[U]:null)," / B / ",l?"预测":"Prediction"," ",ve(t.wetB[U]?t.heightB[U]:null)," m · B−A ",ve(t.common[U]?t.heightB[U]-t.heightA[U]:null,100)," cm"),!b&&T&&e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:149:25",className:"protocol-profile-help"},l?"曲线怎么看：蓝线是 GT，橙线是预测；紫线是 B−A，零线上方表示预测偏高，下方表示偏低。横轴是沿截面的距离，纵轴是高度；曲线显示整条截面，不只显示 ROI。":"Reading the profile: blue is GT, orange is prediction. Purple is B−A: above zero means higher, below means lower. The horizontal axis is section distance; the vertical axis is height. The profile covers the full section, not just the ROI."),!b&&(T?e.createElement(vl,{profile:T,zh:l}):e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:150:62",role:"status"},l?"选择 XY、YZ 或绕Y竖直截面查看高度曲线；水平／倾斜几何截面不作为俯视高度剖面。":"Choose XY, YZ or a vertical Y-axis section for heights; horizontal/tilted geometry is not a top-down height profile.")),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:151:3"},l?"单位：来源约定，未独立标定。高度仅表示俯视最高层，不覆盖完整翻卷内部结构。全序列指标保持原始范围；ROI与插值剖面不替换全局指标。":"Units: source convention, not independently calibrated. Heights describe the topmost layer, not complete overturning geometry. Sequence metrics retain their scope; ROI and interpolated profiles do not replace them."))}function _l({linkedPoint:n,onManualHeightPick:a,onHeightMark:s,viewMode:t="all",bundle:c,frame:i,plane:o,sliceIndex:r,rotationAxis:f,angle:l,sectionPercent:m,getReportView:g,onRestoreReportView:x,reportControlRef:h,onDownload:u,catalog:d,reportContext:p,onPause:w,onOpenVelocity:j,unifiedRestore:S=!1,reviewRequest:v,onReviewApplied:_}){const{language:y}=me(),C=y==="zh",B=JSON.stringify([c.runId,c.protocol,c.datasetA,c.datasetB,i]),[A,b]=E.useState(0),[M,R]=E.useState(null),[I,N]=E.useState(null),z=E.useRef(null),$=E.useRef(p);$.current=p,E.useEffect(()=>{I&&I.view.frame!==i&&N(null)},[i,I]),E.useEffect(()=>{const F=new AbortController;let L=!0;return(async()=>{try{const T=await $a(oa,Xa.indexSha256,c),P=T.frames.find(ce=>ce.frameId===i);if(!P)throw Error("No spatial resource for selected frame");if(!L)return;const W=await sa(P,{...Nn(c),frameId:i},F.signal);L&&R({key:B,spatial:W})}catch(T){L&&R({key:B,error:T})}})(),()=>{L=!1,F.abort()}},[c,i,B,A]);const X=M?.key===B?M:null;function Z(){if(!X?.spatial||!z.current)throw Error("Wait for verified spatial resources");const F=z.current.capture(),{view:L,scene:T}=g(),P=A0({bundle:c,...F,view:L,catalog:d});return{record:P,canvas:z0(P,F.spatial,T,y)}}async function ne(F,L){w?.();const T=$.current,P=await $a(oa,Xa.indexSha256,c),W=Ac(F,c,P,{catalog:d}),ce=await sa(W.descriptor,{...Nn(c),frameId:W.view.frame},L);if(W.diagnosis&&!ce.common[W.diagnosis.hotspot.index])throw Error("Diagnosis hotspot has no paired valid height");if(W.diagnosis?.crest&&Ua({profiles:Dn(ce,W.diagnosis),roi:W.roi},W.diagnosis.crest),L.throwIfAborted(),$.current!==T)throw Error("View changed while restoring; retry from the current view");return{...W,spatial:ce}}async function D(F,L){L.throwIfAborted();const T=JSON.stringify([c.runId,c.protocol,c.datasetA,c.datasetB,F.view.frame]);R({key:T,spatial:F.spatial}),N({...F,revision:crypto.randomUUID()}),await x(F.view,L)}const K=I?.view.frame===i?I:null;return e.createElement("section",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:190:9",className:"protocol-spatial","aria-label":"Protocol spatial analysis"},e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:190:86","data-review-frame":i,hidden:t==="report"},X?X.error?e.createElement(Ye,{error:X.error,zh:C,resource:(C?"水面高度与掩码 · 帧 ":"Height and masks · frame ")+i,onRetry:()=>{R(null),b(F=>F+1)}}):e.createElement(El,{linkedPoint:n,onManualHeightPick:a,onHeightMark:s,key:B+(K?.revision??""),reviewRequest:v,onReviewApplied:_,controlRef:z,restored:K,spatial:X.spatial,plane:o,sliceIndex:r,rotationAxis:f,angle:l,sectionPercent:m,zh:C,onPause:w,onOpenVelocity:j}):e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:190:155",role:"status"},C?`正在加载帧 ${i} 的同协议空间资源…`:`Loading protocol spatial resources for frame ${i}…`),e.createElement(hl,{bundle:c,zh:C,getSelection:()=>{const F=z.current?.capture();if(!F?.diagnosis||!F.roi)throw Error(C?"请先点击高度图选择热点并设置选区。":"Select a hotspot on a height map and apply an ROI first.");const{hotspot:L,directionDeg:T}=F.diagnosis;return{sourceFrame:F.spatial.descriptor.frameId,ix:L.ix,iz:L.iz,x:L.x,z:L.z,roi:{...F.roi},directionDeg:T}}})),e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:197:8",hidden:t==="height"},g&&e.createElement(Y0,{unifiedRestore:S,key:c.runId,controlRef:h,ready:!!X?.spatial,capture:Z,prepareImport:ne,applyImport:D,onDownload:u,zh:C})))}const Ia=["#66d9eb","#ffbf69"];function wl({pair:n,stopLabels:a,t:s}){const{gt:t,pred:c,seed:i,split:o,separation:r}=n,f=[i,...t.points,...c.points],l=[0,1].map(_=>{const y=f.map(C=>C[_]);return[Math.min(...y),Math.max(...y)]}),m=Math.max(6*r,...l.map(([_,y])=>y-_)),[g,x]=l.map(([_,y])=>(_+y)/2),h=([_,y])=>[160+(_-g)*250/m,150-(y-x)*250/m],u=[t,c],d=["GT",s("预测","Prediction")],p=h(i);function w(_,y){const[C,B]=h(t.points[_]),[A,b]=h(c.points[_]);return e.createElement("g",{"data-os-loc":"src/field/StreamlineFigure.jsx:19:12","data-event":y?"before":o?"crossing":"last-shared",stroke:y?"#cad4dd":"white"},e.createElement("line",{"data-os-loc":"src/field/StreamlineFigure.jsx:20:7",x1:C,y1:B,x2:A,y2:b,strokeDasharray:y?"2 2":void 0}),[[C,B],[A,b]].map(([M,R],I)=>e.createElement("circle",{"data-os-loc":"src/field/StreamlineFigure.jsx:21:41",key:I,cx:M,cy:R,r:y?2:3,fill:y?"#0d2030":"white"})))}const j=Math.min(t.points.length,c.points.length)-1,S=o?o.i:j;function v(_,y,C){if(!_)return null;const[B,A]=_;return e.createElement("path",{"data-os-loc":"src/field/StreamlineFigure.jsx:29:12",d:`M ${B} ${A} L 305 ${y} H 315`,stroke:C,opacity:".65",fill:"none",strokeWidth:".9"})}return e.createElement("svg",{"data-os-loc":"src/field/StreamlineFigure.jsx:31:10",role:"img","aria-label":s("同起点配对流线","Same-seed paired streamlines"),viewBox:"0 0 480 300",className:"paired-stream-figure"},e.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:32:5",x:"12",y:"21",fill:"#dbe6ea",fontSize:"12"},"+X →　+Z ↑"),u.map((_,y)=>e.createElement("polyline",{"data-os-loc":"src/field/StreamlineFigure.jsx:33:26",key:d[y],fill:"none",stroke:Ia[y],strokeWidth:"2.5",strokeDasharray:y?"5 3":void 0,points:_.points.map(C=>h(C).join(",")).join(" ")})),o&&w(o.i-1,!0),S>=0&&w(S,!1),S>=0&&v(h(t.points[S].map((_,y)=>(_+c.points[S][y])/2)),60,"white"),e.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:38:5",x:"320",y:"58",fill:"white",fontSize:"14"},o?s("首次达到分离阈值","First crossing"):j>=0?s("最后共同样点","Last shared sample"):s("无共同样点","No shared samples")),o&&e.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:39:13",x:"320",y:"78",fill:"#cbdce4",fontSize:"12"},s("虚线为越阈前一步","Dotted: preceding step")),u.map((_,y)=>{const C=_.points.at(-1),B=142+80*y,A=C&&h(C);return e.createElement("g",{"data-os-loc":"src/field/StreamlineFigure.jsx:43:14",key:d[y],"data-stop":_.stop},A&&e.createElement(e.Fragment,null,e.createElement("rect",{"data-os-loc":"src/field/StreamlineFigure.jsx:44:17",x:A[0]-3,y:A[1]-3,width:"6",height:"6",fill:"#0d2030",stroke:Ia[y]}),v(A,B,Ia[y])),e.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:45:9",x:"320",y:B-3,fill:Ia[y],fontSize:"15"},d[y]," · ",C?s("终点","end"):s("无法起步","no start")),e.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:46:9",x:"320",y:B+18,fill:"white",fontSize:"13"},a[_.stop]))}),e.createElement("circle",{"data-os-loc":"src/field/StreamlineFigure.jsx:49:5",cx:p[0],cy:p[1],r:"3.5",fill:"#fc6380",stroke:"#181e25"}))}const Na=n=>n.map(a=>a.toFixed(4)).join(", ");function Sl({pair:n,fine:a,onChange:s,detailsRef:t,layer:c,t:i}){const{gt:o,pred:r,split:f,seed:l,step:m,separation:g,maxArc:x}=n,h={mask:i("共同有效域边界","Common mask boundary"),slow:i("投影流速过低","Low projected speed"),limit:i("积分长度上限","Integration length limit"),grid:i("可插值网格边界","Interpolation grid edge")},u=Math.min(o.points.length,r.points.length)-1,d=f?[[i("越阈前","Before"),f.i-1],[i("首次越阈","First crossing"),f.i]]:u>=0?[[i("最后共同样点","Last shared sample"),u]]:[];return e.createElement("section",{"data-os-loc":"src/field/StreamlinePanel.jsx:18:10",className:"paired-stream-panel","aria-label":"1049 paired streamlines"},e.createElement("h3",{"data-os-loc":"src/field/StreamlinePanel.jsx:19:5"},i("配对瞬时流线 · XZ 投影","Paired instantaneous streamlines · XZ projection")),e.createElement("details",{"data-os-loc":"src/field/StreamlinePanel.jsx:20:5",ref:t,open:!0},e.createElement("summary",{"data-os-loc":"src/field/StreamlinePanel.jsx:20:36"},i("查看流线图与采样位置","Streamline figure and sample positions")),e.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:21:7"},i("共同起点","Shared seed")," XZ (",Na(l),") · Y ",c," · ",i("红点为起点，青色实线为 GT，橙色虚线为预测。","Red seed, cyan solid GT, orange dashed prediction.")),e.createElement("button",{"data-os-loc":"src/field/StreamlinePanel.jsx:22:7","data-os-action":"",type:"button","aria-pressed":a,onClick:()=>s(!a)},i("半步长复核","Half-step check")),e.createElement("span",{"data-os-loc":"src/field/StreamlinePanel.jsx:23:7",className:"stream-step"},i("当前步长","Current step")," ",m.toFixed(5)),e.createElement(wl,{pair:n,stopLabels:h,t:i}),e.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:25:7"},f?i("下列相邻样点标出首次观测到间距达到一格的积分步。","These samples bracket the first observed one-cell separation."):u>=0?i("共同积分段内未测到间距达到一格。","No one-cell separation observed on the shared trace."):i("当前起点没有可配对的积分样点。","No paired integration samples at this seed.")),d.length>0&&e.createElement("div",{"data-os-loc":"src/field/StreamlinePanel.jsx:28:26",className:"stream-samples"},e.createElement("table",{"data-os-loc":"src/field/StreamlinePanel.jsx:28:58"},e.createElement("caption",{"data-os-loc":"src/field/StreamlinePanel.jsx:28:65"},i("按相同积分弧长 s 对照，距离沿用来源空间单位","Matched integration arc length s, in source length units")),e.createElement("thead",{"data-os-loc":"src/field/StreamlinePanel.jsx:29:9"},e.createElement("tr",{"data-os-loc":"src/field/StreamlinePanel.jsx:29:16"},[i("样点","Sample"),"s","GT XZ",i("预测 XZ","Pred XZ"),i("间距","Gap")].map(p=>e.createElement("th",{"data-os-loc":"src/field/StreamlinePanel.jsx:29:94",key:p,scope:"col"},p)))),e.createElement("tbody",{"data-os-loc":"src/field/StreamlinePanel.jsx:30:9"},d.map(([p,w])=>{const j=o.points[w],S=r.points[w];return e.createElement("tr",{"data-os-loc":"src/field/StreamlinePanel.jsx:32:18",key:p},e.createElement("th",{"data-os-loc":"src/field/StreamlinePanel.jsx:32:33",scope:"row"},p),e.createElement("td",{"data-os-loc":"src/field/StreamlinePanel.jsx:32:60"},(w*m).toFixed(5)),e.createElement("td",{"data-os-loc":"src/field/StreamlinePanel.jsx:33:13"},Na(j)),e.createElement("td",{"data-os-loc":"src/field/StreamlinePanel.jsx:33:30"},Na(S)),e.createElement("td",{"data-os-loc":"src/field/StreamlinePanel.jsx:33:47"},Math.hypot(j[0]-S[0],j[1]-S[1]).toFixed(5)))})))),[o,r].map((p,w)=>e.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:35:32",key:w},w?i("预测","Prediction"):"GT"," · ",h[p.stop]," · ",p.points.length?`s=${((p.points.length-1)*m).toFixed(5)} · XZ (${Na(p.points.at(-1))})`:i("起点无可积分样点","No accepted point at seed"))),e.createElement("small",{"data-os-loc":"src/field/StreamlinePanel.jsx:36:7"},i("固定帧、固定 Y 的瞬时投影。有效域边界表示下一步插值所需的四个邻点未全部有效。采用归一化方向的中点 RK2。","Instantaneous projection at a fixed frame and Y. At a mask boundary the next interpolation lacks four valid neighbours. Normalized midpoint RK2.")," Δ≥",g.toFixed(5)," · s≤",x.toFixed(4)," · |vXZ|>1e−8")))}function jl({layer:n,setLayer:a,lattice:s,t}){const c=s.dimensions[1]-1,i=n===null?null:s.origin[1]+n*s.axisSteps[1][1],o=r=>{const f=r.target.value.trim(),l=Number(f);f&&Number.isInteger(l)&&l>=0&&l<=c&&a(l)};return e.createElement("fieldset",{"data-os-loc":"src/field/NativeLayerControl.jsx:7:9",className:"native-layer-control"},e.createElement("legend",{"data-os-loc":"src/field/NativeLayerControl.jsx:7:52"},t("三图联动 · 原生 XZ 切层","Linked maps · native XZ slice")),e.createElement("div",{"data-os-loc":"src/field/NativeLayerControl.jsx:8:3",className:"native-layer-strip"},e.createElement("button",{"data-os-loc":"src/field/NativeLayerControl.jsx:9:4","data-os-action":"",type:"button","aria-label":t("上一原生层","Previous native layer"),disabled:n===null||n===0,onClick:()=>a(n-1)},"−"),e.createElement("label",{"data-os-loc":"src/field/NativeLayerControl.jsx:10:4"},t("原生 Y 层","Native Y index")," ",e.createElement("input",{"data-os-loc":"src/field/NativeLayerControl.jsx:10:42","data-os-action":"",type:"number","aria-label":"Velocity Y index",min:"0",max:c,step:"1",value:n??"",onChange:o})),e.createElement("button",{"data-os-loc":"src/field/NativeLayerControl.jsx:11:4","data-os-action":"",type:"button","aria-label":t("下一原生层","Next native layer"),disabled:n===c,onClick:()=>a(n===null?0:n+1)},"+"),e.createElement("input",{"data-os-loc":"src/field/NativeLayerControl.jsx:12:4","data-os-action":"",type:"range","aria-label":"Native Y layer slider",min:"0",max:c,step:"1",value:n??0,"aria-valuetext":n===null?t("未选择","Not selected"):String(n),onChange:o}),e.createElement("output",{"data-os-loc":"src/field/NativeLayerControl.jsx:13:4","aria-label":"Velocity Y world"},t("世界 Y","World Y")," = ",i===null?"—":i.toFixed(8)+" m")))}const Ge=(n,a=4)=>n.toFixed(a),_t=n=>(n>0?"+":"")+Ge(n);function Cl({probe:n,tau:a,t:s,onStreamlines:t}){const c=n.xyz.map(r=>Ge(r,5)).join(", "),i=r=>Math.hypot(r[0],r[2]),o=r=>Math.abs(r[1])>i(r);return e.createElement("section",{"data-os-loc":"src/field/VelocityProbe.jsx:9:9",className:"velocity-readout","aria-label":"Velocity probe"},e.createElement("div",{"data-os-loc":"src/field/VelocityProbe.jsx:10:3",className:"velocity-readout-heading"},e.createElement("strong",{"data-os-loc":"src/field/VelocityProbe.jsx:10:45"},s("选中点","Selected point")),e.createElement("small",{"data-os-loc":"src/field/VelocityProbe.jsx:10:89"},"XYZ (",c,")")),n.common?e.createElement(e.Fragment,null,e.createElement("dl",{"data-os-loc":"src/field/VelocityProbe.jsx:12:4"},e.createElement("div",{"data-os-loc":"src/field/VelocityProbe.jsx:13:5"},e.createElement("dt",{"data-os-loc":"src/field/VelocityProbe.jsx:13:10"},s("流速差 · 预测 − GT","Speed difference · prediction − GT")),e.createElement("dd",{"data-os-loc":"src/field/VelocityProbe.jsx:13:76"},_t(n.speedDelta)," m/s"),e.createElement("small",{"data-os-loc":"src/field/VelocityProbe.jsx:14:5"},"GT ",Ge(n.speedGT)," → ",s("预测","Pred")," ",Ge(n.speedPred))),e.createElement("div",{"data-os-loc":"src/field/VelocityProbe.jsx:15:5","aria-label":"Velocity probe direction"},e.createElement("dt",{"data-os-loc":"src/field/VelocityProbe.jsx:15:48"},s("三维流向夹角","3D direction angle")),e.createElement("dd",{"data-os-loc":"src/field/VelocityProbe.jsx:16:5"},n.angleDegrees!==null?Ge(n.angleDegrees,2)+"°":s("不可判定","Unavailable")),e.createElement("small",{"data-os-loc":"src/field/VelocityProbe.jsx:17:5"},n.angleDegrees!==null?s("用 XYZ 三个分量计算","Uses all three XYZ components"):a===null?s("夹角已停用","Angles disabled"):s("至少一侧流速 ≤ τ","At least one speed ≤ τ"))),e.createElement("div",{"data-os-loc":"src/field/VelocityProbe.jsx:18:5"},e.createElement("dt",{"data-os-loc":"src/field/VelocityProbe.jsx:18:10"},s("切片法向速度 Vy","Slice-normal velocity Vy")),e.createElement("dd",{"data-os-loc":"src/field/VelocityProbe.jsx:18:62"},_t(n.vectorGT[1])," → ",_t(n.vectorPred[1])),e.createElement("small",{"data-os-loc":"src/field/VelocityProbe.jsx:18:122"},"GT → ",s("预测","Pred")," · m/s · ",s("正值沿 +Y","positive toward +Y")))),[["GT",n.vectorGT],[s("预测","Prediction"),n.vectorPred]].filter(([,r])=>o(r)).map(([r,f])=>e.createElement("p",{"data-os-loc":"src/field/VelocityProbe.jsx:20:103",className:"velocity-normal-note",key:r},r," · ",s("速度主要垂直于切片","Flow is mainly normal to the slice")," (|Vy| ",Ge(Math.abs(f[1]))," > XZ ",Ge(i(f))," m/s)."," ",s("图上箭头只画 XZ，短箭头不代表总流速低。","Arrows show XZ only; a short arrow does not imply low total speed."))),e.createElement("details",{"data-os-loc":"src/field/VelocityProbe.jsx:22:4"},e.createElement("summary",{"data-os-loc":"src/field/VelocityProbe.jsx:22:13"},s("向量误差与完整分量","Vector error and full components")),e.createElement("p",{"data-os-loc":"src/field/VelocityProbe.jsx:23:5"},"E ",Ge(n.E,6)," m/s · GT XYZ (",n.vectorGT.map(r=>Ge(r,6)).join(", "),") · ",s("预测","Pred")," XYZ (",n.vectorPred.map(r=>Ge(r,6)).join(", "),")"))):e.createElement("p",{"data-os-loc":"src/field/VelocityProbe.jsx:11:14"},s("不在共同有效域。此处没有可比较的速度；空白不代表静止。","Outside common valid domain. There is no comparable velocity here; missing data does not mean still water.")),t&&e.createElement("button",{"data-os-loc":"src/field/VelocityProbe.jsx:25:19","data-os-action":"",type:"button",onClick:t},s("查看此探针的配对流线","Inspect streamlines at this probe")))}function Gc({x:n,y:a,dx:s,dy:t}){if(s===0&&t===0)return e.createElement("circle",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:7:27",cx:n,cy:a,r:".5",fill:"none"});const c=Oc(n,a,s,t).map((i,o)=>`${o===0||o===2?"M":"L"} ${i.join(" ")}`).join(" ");return e.createElement(e.Fragment,null,e.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:9:11",d:c,className:"velocity-arrow-outline"}),e.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:9:62",d:c}))}function Bl({arrows:n,view:a,role:s}){const t=s==="gt"?"gtOffset":"predOffset";return e.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:14:9",className:"velocity-arrow-layer",role:"img","aria-label":s==="gt"?"Velocity GT arrows":"Velocity prediction arrows",viewBox:`0 0 ${a.width} ${a.height}`,preserveAspectRatio:"none"},n.points.map(c=>e.createElement("g",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:15:25",key:c.index,"data-sample":c.index},e.createElement(Gc,{x:c.x-a.x+.5,y:a.z+a.height-c.z-.5,dx:c[t][0],dy:-c[t][1]}))))}function Al({arrows:n,view:a}){const{language:s}=me(),t=s==="zh";return n.points.length?n.referenceSpeed?e.createElement(e.Fragment,null,e.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:24:3",className:"velocity-arrow-reference","aria-hidden":"true",viewBox:`0 0 ${a.width} 8`,preserveAspectRatio:"none"},e.createElement(Gc,{x:a.width*.04,y:4,dx:n.referenceGridLength,dy:0})),e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:27:3"},t?"参考箭头":"Reference arrow"," ",n.referenceSpeed.toPrecision(4)," m/s · ",t?"两图共用线性比例":"Shared linear scale"," · ",n.points.length," ",t?"个配对格点":"paired grid points")):e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:22:35"},t?"空心点表示 XZ 投影为零":"Hollow markers indicate zero XZ projection"):e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:21:34"},t?"当前采样格点无配对箭头":"No paired arrows at the sampled grid points")}function kl({x:n,z:a,view:s}){const t=s.height-a-.5,c=`M ${n+.5} 0 V ${s.height} M 0 ${t} H ${s.width}`;return e.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:34:9",className:"velocity-probe-layer","aria-hidden":"true",viewBox:`0 0 ${s.width} ${s.height}`,preserveAspectRatio:"none"},e.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:35:3",d:c,className:"velocity-probe-outline"}),e.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:35:54",d:c}))}function Hc({slice:n,angles:a,mode:s,arrows:t,view:c,zoom:i,frame:o,probe:r,setProbe:f,ranges:l}){const{language:m}=me(),g=m==="zh",x=n.roiView,h=!i&&x?[x.x/Math.max(1,n.width-1),(x.x+x.width-1)/Math.max(1,n.width-1),x.z/Math.max(1,n.height-1),(x.z+x.height-1)/Math.max(1,n.height-1)]:null,u=r[0]-c.x,d=r[1]-c.z,p=u>=0&&u<c.width&&d>=0&&d<c.height,w=et(s,m);return e.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:49:9",className:"velocity-triptych"},w.map(({key:j,title:S,label:v,palette:_,role:y})=>{const C=j==="direction"?a.degrees:n[j],B=j==="direction"?a.mask:n.commonMask,A=l[y?"speed":j],b=y?"speed":j==="speedDelta"?"delta":"error",M=R=>R===0?"0":R.toPrecision(5);return e.createElement("figure",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:55:10","data-review-id":"velocity-map-"+j,key:v,"data-review-frame":o,"data-review-slice":v+" Y "+n.sliceIndex},e.createElement("figcaption",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:56:4"},S," · ",g?"帧":"Frame"," ",o," · Y ",n.sliceIndex," · ",g?"世界 Y":"World Y"," ",n.worldAt(0)[1].toFixed(5)," m"),e.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:57:4",className:"velocity-map"},e.createElement(bc,{label:v,slice:{width:n.width,height:n.height,values:C,angleSupport:j==="direction"?n.commonMask:null},maskSlice:{values:B},range:A,palette:_,plane:"xz",viewport:c,aspect:c.width*n.stepX/(c.height*n.stepZ),region:h,onCrosshair:R=>f([c.x+Math.min(c.width-1,Math.floor(R[0]*c.width)),c.z+Math.min(c.height-1,Math.floor(R[1]*c.height))])}),y&&t&&e.createElement(Bl,{arrows:t,view:c,role:y}),p&&e.createElement(kl,{x:u,z:d,view:c})),y&&e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:67:12"},g?"颜色：三维总流速":"Colour: full 3D speed",t&&(g?" · 箭头：XZ 投影":" · Arrows: XZ projection")),e.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:68:4",className:"velocity-scale "+b}),e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:69:4"},M(A[0])," → ",j==="speedDelta"?"0 → ":"",M(A[1]),j==="direction"?"°":" m/s",y?g?" · GT / 预测共用色标":" · Shared GT / prediction color scale":""),e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:70:4"},"X → · Z ↑ · ",j==="direction"?g?"灰纹：非共同域；浅黄：共同有效但无夹角":"Grey stripes: outside common domain; pale yellow: valid speed, no angle":g?"灰纹：不在共同有效域":"Grey stripes: outside common valid support"),j==="speedDelta"&&e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:71:25"},g?"蓝色为预测偏慢，红色为预测偏快":"Blue: prediction slower; red: prediction faster"),y&&t&&e.createElement(Al,{arrows:t,view:c}))}))}const hn=(n,a=6)=>Number.isFinite(n)?n.toFixed(a):"N/A",nc=n=>n==null?"N/A":(n*100).toFixed(2)+"%",Fa=["xmin","xmax","zmin","zmax"];function ac({value:n,angle:a,local:s}){const{language:t}=me(),c=(o,r)=>t==="zh"?o:r,i=n.counts;return e.createElement("section",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:24:9",className:"velocity-metrics","aria-label":s?"Velocity ROI metrics":"Velocity slice metrics"},e.createElement("h3",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:25:3"},s?c("ROI · 当前 Y 层","ROI · current Y layer"):c("全切片 · 当前 Y 层","Whole slice · current Y layer")),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:3"},c("平均 E ","Mean E "),e.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:28"},hn(n.meanE)),c(" · 最大 E "," · Maximum E "),e.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:82"},hn(n.maximum?.value)),c(" · 平均 Δs "," · Mean Δs "),e.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:144"},hn(n.meanSpeedDelta))),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:27:3"},c("最大 E 的 XYZ：","Maximum E at XYZ: "),n.maximum?.world.map(o=>hn(o,5)).join(", ")??"N/A"),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:28:3"},c("候选 ","Candidates "),i.candidate,c(" · GT 资格 "," · GT eligible "),i.gtEligible,c(" · 共同有效 "," · Common valid "),i.common,c(" · 非有限排除 "," · Nonfinite excluded "),i.nonfiniteExcluded),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:29:3"},c("覆盖率：共同 / 候选 ","Coverage: common / candidate "),nc(n.coverageCandidate),c(" · 共同 / GT 资格 "," · Common / GT eligible "),nc(n.coverageGT)),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:30:3"},c("平均三维夹角 ","Mean 3D angle "),hn(a.meanDegrees,3),c("° · 夹角有效 ","° · Angle valid "),a.count," / ",i.common,c(" · 低速排除 "," · Low-speed excluded "),a.excludedLowSpeedCount??"N/A"),e.createElement("small",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:31:3"},c("仅 GT 资格 ","GT eligible only "),i.gtOnly,c(" · 仅预测有效 "," · Prediction valid only "),i.predOnly,c(" · 双方掩膜通过 "," · Both masks pass "),i.paired,c("。非有限值另行排除。",". Nonfinite values are excluded separately.")))}function Ml({onLayer:n,loaded:a,request:s,initial:t,surface:c}){const{language:i}=me(),o=(G,Q)=>i==="zh"?G:Q,{frame:r,lattice:f,alignment:l}=a,[m,g]=E.useState(t?.domain??"collaborator-native"),[x,h]=E.useState(()=>t?.y??I0({...a,hotspotXZ:s.hotspotXZ,domain:"collaborator-native"}));E.useEffect(()=>{n?.(x)},[n,x]);const[u,d]=E.useState(t?.roi??s.roiXZ),[p,w]=E.useState(()=>Object.fromEntries(Fa.map(G=>[G,String((t?.roi??s.roiXZ)[G])]))),[j,S]=E.useState(""),[v,_]=E.useState(()=>t?.probe??Xt(f,s.hotspotXZ)),y=E.useRef(null);function C(){const G=y.current;G&&(G.open=!0,G.querySelector("summary").focus({preventScroll:!0}),G.scrollIntoView({block:"start"}))}const[B,A]=E.useState(t?.streamlineStepFraction===.125),[b,M]=E.useState(t?.mode??"vectorError"),[R,I]=E.useState(t?.zoom??!1),[N,z]=E.useState(t?.showArrows??!0),[$,X]=E.useState(t?t.tau:yn),[Z,ne]=E.useState($===null?"":String($)),[D,K]=E.useState(""),F=E.useMemo(()=>x===null?null:Zt({frame:r,lattice:f,alignment:l,plane:"xz",sliceIndex:x,domain:m,roiXZ:u}),[r,f,l,x,m,u]),L=E.useMemo(()=>F?Gt(F,$):null,[F,$]),T=E.useMemo(()=>F&&l.frame===1049&&m==="collaborator-native"?Nc(F,v,B?.125:.25):null,[F,l.frame,m,v,B]),P=!!(R&&F?.roiView),W=E.useMemo(()=>F&&(P?F.roiView:{x:0,z:0,width:F.width,height:F.height}),[F,P]),ce=t?.scaleCells??4,U=E.useMemo(()=>N&&W?Ht(F,W,P?4:16,void 0,ce):null,[F,N,W,P,ce]),ue=E.useMemo(()=>{let G=0,Q=0,Me=0;if(F)for(let Ee=0;Ee<F.commonMask.length;Ee++)F.commonMask[Ee]&&(G=Math.max(G,F.speedGT[Ee],F.speedPred[Ee]),Q=Math.max(Q,F.vectorError[Ee]),Me=Math.max(Me,Math.abs(F.speedDelta[Ee])));return{speed:[0,G||1],vectorError:[0,Q||1],speedDelta:[-(Me||1),Me||1],direction:[0,180]}},[F]),re=F?v[0]+F.width*v[1]:null,xe=F&&v[0]>=0&&v[0]<F.width&&v[1]>=0&&v[1]<F.height&&F.commonMask[re],O=E.useMemo(()=>F?{schema:"oceanscope.velocity-diagnostic-data.v1",scope:`${l.frame} native velocity diagnosis; diagnostic export only`,frame:l.frame,source:l.source,resource:l.resource,protocolSha256:l.protocolSha256,lattice:f,unitClaim:l.unitClaim,unitEvidence:l.unitEvidence,vectorBasis:l.vectorBasis,domain:m,domainDefinition:m==="collaborator-native"?l.domainDefinition:{id:m,rule:"Both velocity-valid masks > 0 AND six finite components; no tank or SDF depth filter"},yIndex:x,yWorld:f.origin[1]+x*f.axisSteps[1][1],surfaceRequest:s,roiXZ:u,probe:{index:re,xyz:F.worldAt(re),common:!!xe,speedGT:xe?F.speedGT[re]:null,speedPred:xe?F.speedPred[re]:null,E:xe?F.vectorError[re]:null,speedDelta:xe?F.speedDelta[re]:null,vectorGT:xe?Array.from(F.vectorsGT.subarray(3*re,3*re+3)):null,vectorPred:xe?Array.from(F.vectorsPred.subarray(3*re,3*re+3)):null,angleDegrees:xe&&L.mask[re]?L.degrees[re]:null},whole:F.whole,local:F.local,direction:{tau:$,unit:"m/s (source convention)",thresholdSource:$===null?"disabled":$===yn?"legacy preview numerical epsilon":"user diagnostic input",whole:L.whole,local:L.local},display:{mode:b,view:W,zoomed:P,ranges:ue,arrows:U,scaleCells:ce},...T&&{streamlines:{stepFraction:B?.125:.25,seed:T.seed,separation:T.split,gt:{end:T.gt.points.at(-1)??null,stop:T.gt.stop},prediction:{end:T.pred.points.at(-1)??null,stop:T.pred.stop}}}}:null,[F,l,f,m,x,s,u,re,xe,L,$,b,W,P,ue,U,T,B,ce]),[Y,he]=E.useState(null),[ke,la]=E.useState(null),[Wn,on]=E.useState(null);E.useEffect(()=>la(null),[i]);const Ue=ke?.data===O&&ke.language===i?ke.files:null;E.useEffect(()=>()=>{for(const G of Object.values(Ue??{}))URL.revokeObjectURL(G.href)},[Ue]),E.useEffect(()=>{if(!O){he(null);return}const G=URL.createObjectURL(new Blob([JSON.stringify(O,null,2)+`
`],{type:"application/json"}));return he({data:O,url:G}),()=>URL.revokeObjectURL(G)},[O]);function vn(){try{const G=Gs(O,l,"eaf428574e53d5745a8d6322dcf66bbc9fbd29c4"),Q=X0(G,F,L,U,i).toDataURL("image/png"),Me=Qa({stem:`oceanscope-velocity-${l.frame}-y${x}`,record:G,csv:F0(G,F,L),previewUrl:Q});la({data:O,files:Me,language:i}),on(null)}catch(G){on(G)}}function En(){const G=Object.fromEntries(Fa.map(Q=>[Q,Number(p[Q])]));if(Fa.some(Q=>!p[Q].trim()||!Number.isFinite(G[Q]))||G.xmin>G.xmax||G.zmin>G.zmax){S(o("请填写完整有限数字，最小值不能大于最大值。原选区未改变。","Enter finite values for every bound, with minimum ≤ maximum. The ROI is unchanged."));return}d(G),S("")}function rn(G){G.preventDefault();const Q=Z.trim()===""?null:Number(Z);if(Q!==null&&(!Number.isFinite(Q)||Q<0)){K(o("请输入非负有限数，或留空以停用夹角。","Enter a finite nonnegative number, or leave blank to disable angles."));return}X(Q),K("")}const Tn=E.useMemo(()=>{if(!c||!O)return null;const G=Gs(O,l,"annotation"),{schema:Q,source:Me,alignment:Ee,plane:_n,roi:da,probe:fa,angleThreshold:Vn,surfaceCase:ma}=G;return JSON.stringify({surface:c,velocity:{schema:Q,source:Me,alignment:Ee,plane:_n,roi:da,probe:fa,angleThreshold:Vn,surfaceCase:ma,domain:{id:m},appearance:{mode:b,zoom:P},arrows:{enabled:N,scaleCells:ce},...T&&{streamlines:{stepFraction:B?.125:.25}}}})},[O,l,c]);return e.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:127:9","data-review-frame":l.frame,"data-hotspot-review":Tn??void 0},e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:3"},o("来自水面热点 X ","From surface hotspot X "),hn(s.hotspotXZ.x,5),"，Z ",hn(s.hotspotXZ.z,5),o("；保留 XZ 选区。初始 Y 取该列默认域内最上方有效格层，之后由你手动选择，不随水面起伏。","; XZ ROI retained. Initial Y is the highest valid layer in this column within the default domain. Subsequent Y selection is manual and does not follow the surface.")),e.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:129:3",className:"velocity-controls"},e.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:129:38"},o("有效域 ","Valid domain "),e.createElement("select",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:129:72","data-os-action":"","aria-label":"Velocity domain",value:m,onChange:G=>g(G.target.value)},e.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:129:164",value:"collaborator-native"},o("合作者原生域 · 已核对","Collaborator native domain · verified")),e.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:129:268",value:"common-finite-exploration"},o("共同有限域 · 探索","Common finite domain · exploration"))))),e.createElement(jl,{layer:x,setLayer:h,lattice:f,t:o}),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:131:3",className:"velocity-domain"},m==="collaborator-native"?o("合作者原生域：X [11,212)、Z [11,105)，GT vel_valid > 0、GT SDF < −0.10（float32）、预测 vel_valid > 0，再排除非有限速度。","Collaborator native domain: X [11,212), Z [11,105), GT vel_valid > 0, GT SDF < −0.10 (float32), prediction vel_valid > 0; nonfinite velocities excluded."):o("探索域：双方速度有效且六分量有限；不应用水槽裁剪或 GT 深水阈值，不作协议评分。","Exploration domain: both velocity masks valid and all six components finite; no tank crop or GT deep-water threshold. Not protocol scoring."),o(" 当前显示为一层，非整帧体积评分。"," Showing one layer, not a full-frame volume score.")),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:132:3"},o("速度单位沿用来源声明 m/s；坐标沿用来源声明 m。物理尺度、时间尺度与向量基底尚未独立标定。E = ‖预测向量 − GT 向量‖；Δs = 预测流速 − GT 流速。","Velocity m/s and coordinates m follow source declarations. Physical scale, time scale and vector basis have not been independently calibrated. E = ‖prediction vector − GT vector‖; Δs = prediction speed − GT speed.")),F?e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:134:4",className:"velocity-controls"},e.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:135:5"},o("第三图 ","Third map "),e.createElement("select",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:135:36","data-os-action":"","aria-label":"Velocity comparison map",value:b,onChange:G=>M(G.target.value)},e.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:136:6",value:"vectorError"},o("速度向量误差 E","Velocity vector error E")),e.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:136:84",value:"speedDelta"},o("流速大小差 Δs","Speed difference Δs")),e.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:136:157",value:"direction"},o("三维方向夹角","3D direction angle")))),e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:138:5","data-os-action":"",type:"button","aria-pressed":N,onClick:()=>z(G=>!G)},o("配对箭头","Paired arrows")),e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:139:5","data-os-action":"",type:"button","aria-pressed":P,disabled:!F.roiView,onClick:()=>I(!P)},P?o("返回全切片","Back to whole slice"):o("放大 ROI","Zoom to ROI"))),e.createElement("small",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:141:4",className:"velocity-zoom-key"},o("同层缩放：全图每 16 格、ROI 每 4 格取箭头。按原生网格计的箭长比例、色标和统计范围均不变。","Zoom on this layer: arrows every 16 cells in the full view and every 4 in the ROI. Arrow scale in native cells, colour limits and statistical domains stay fixed.")),e.createElement("form",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:142:4",className:"velocity-controls",onSubmit:rn},e.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:143:5"},o("方向低速阈值（m/s）","Direction low-speed threshold (m/s)"),e.createElement("input",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:143:68","data-os-action":"","aria-label":"Velocity direction threshold",inputMode:"decimal",value:Z,onChange:G=>ne(G.target.value)})),e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:144:5",type:"submit"},o("应用方向阈值","Apply direction threshold")),e.createElement("output",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:145:5","aria-label":"Velocity applied threshold"},$===null?o("夹角停用","Angles disabled"):`${o("当前 τ = ","Current τ = ")}${$} m/s · ${$===yn?o("沿用旧预览数值阈值","Legacy preview numerical threshold"):o("自定诊断阈值","Custom diagnostic threshold")}`)),D&&e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:147:15",role:"alert"},D),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:148:4"},o("双方完整流速均大于 τ 才计算三维夹角。阈值用于诊断，等待合作者确认，留空可停用夹角。箭头仅显示 XZ 投影，空心点表示投影为零。","The full speed on both sides must exceed τ to calculate a 3D angle. This diagnostic threshold awaits collaborator confirmation; leave blank to disable angles. Arrows show only XZ projections; hollow markers indicate zero projection.")),e.createElement(Hc,{slice:F,angles:L,mode:b,arrows:U,view:W,zoom:P,frame:l.frame,probe:v,setProbe:_,ranges:ue}),e.createElement(Cl,{probe:O.probe,tau:$,t:o,onStreamlines:T?C:null}),e.createElement("form",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:151:4",onSubmit:G=>{G.preventDefault(),En()}},e.createElement("fieldset",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:151:54",className:"velocity-controls"},e.createElement("legend",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:151:94"},o("速度 ROI · 世界坐标 XZ（不改变 Y）","Velocity ROI · world XZ coordinates (Y unchanged)")),Fa.map(G=>e.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:151:208",key:G},G,e.createElement("input",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:151:226","data-os-action":"","aria-label":"Velocity ROI "+G,type:"text",inputMode:"decimal",value:p[G],onChange:Q=>w(Me=>({...Me,[G]:Q.target.value}))}))),e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:151:379",type:"submit"},o("应用速度选区","Apply velocity ROI")))),j&&e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:151:473",role:"alert"},j),T&&e.createElement(Sl,{detailsRef:y,layer:x,pair:T,fine:B,onChange:A,t:o}),e.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:153:4",className:"velocity-statistics"},e.createElement(ac,{value:F.whole,angle:L.whole}),e.createElement(ac,{value:F.local,angle:L.local,local:!0})),e.createElement("section",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:154:4",className:"velocity-report","aria-label":"Velocity report"},e.createElement("h3",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:155:5"},o("可恢复速度报告","Restorable velocity report")),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:156:5"},o("用当前切片、选区和显示设置生成一份报告。配套 JSON 可从“报告与恢复”重新打开。","Generate a report from the current slice, ROI and display settings. Reopen its JSON in Reports & restore.")),e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:157:5","data-os-action":"",type:"button",onClick:vn},o("生成当前速度报告","Generate current velocity report")),e.createElement(Ye,{error:Wn,zh:i==="zh"}),Ue&&e.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:159:19",className:"velocity-report-downloads"},Object.entries(Ue).map(([G,Q])=>e.createElement("a",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:160:54",key:G,href:Q.href,download:Q.name},G==="json"?o("下载可恢复速度 JSON","Download restorable velocity JSON"):o("下载速度报告 ","Download velocity report ")+G.toUpperCase()))),ke&&!Ue&&e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:162:28",role:"status"},o("视图已更新。请重新生成速度报告。","The view or language changed. Generate the velocity report again."))),Y?.data===O&&e.createElement("a",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:164:28",download:`oceanscope-velocity-${l.frame}-y${x}-data.json`,href:Y.url},o("导出速度诊断数据 JSON（不用于恢复）","Export velocity diagnostic data JSON (not restorable)"))):e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:133:11",role:"status"},o("热点列内没有共同有效点。请选择明确的 Y 层；不会移到其他 XZ。","No common valid point in the hotspot column. Select an explicit Y layer; XZ will not move.")))}function Rl({onLayer:n,frameNumber:a,request:s,restored:t,surface:c,markView:i}){const{language:o}=me(),r=(d,p)=>o==="zh"?d:p,[f,l]=E.useState(null),[m,g]=E.useState(0),x=s?.frame===a&&!!xn(a);E.useEffect(()=>{const d=p=>{!f?.loaded&&!t&&p.detail?.includes(a)&&g(w=>w+1)};return window.addEventListener("oceanscope-velocity-files",d),()=>window.removeEventListener("oceanscope-velocity-files",d)},[f,t,a]),E.useEffect(()=>{if(!x||t){l(null);return}const d=new AbortController;let p=!0;return l(null),$t(a,{signal:d.signal}).then(w=>{p&&l({frameNumber:a,request:s,loaded:w})}).catch(w=>{p&&l({frameNumber:a,request:s,error:w})}),()=>{p=!1,d.abort()}},[a,s,x,m,t]);const h=t??(f?.frameNumber===a&&f?.request===s?f:null),u=h?.loaded?"ready":h?.error?.code==="VELOCITY_FILE_REQUIRED"?"missing":h?.error?"error":"loading";return e.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:184:9",className:"velocity-diagnosis","data-velocity-state":u,"data-velocity-frame":a},e.createElement("h2",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:184:115"},r("速度与方向诊断 · 帧 ","Velocity and direction diagnosis · frame "),a),x?h?.error?e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:184:426",role:"alert"},r("速度资源加载失败：","Velocity resource failed to load: "),h.error.message," ",e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:184:519","data-os-action":"",onClick:()=>g(d=>d+1)},r("重试速度资源","Retry velocity resource"))):h?.loaded?e.createElement(Ml,{onLayer:n,key:m,loaded:h.loaded,request:s,surface:c,initial:t?.view??i}):e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:184:767",role:"status"},r("正在读取并校验 ","Reading and verifying "),a,r(" 原始值诊断资源…"," raw-value diagnostic resources…")):e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:184:211",role:"status"},r("当前帧 ","Frame "),a,r(" 暂无对应的速度报告视图。请选择已核验帧，并从该帧的水面热点或报告进入。"," has no velocity report view. Choose a verified frame and enter from its surface hotspot or report.")))}const Yt="oceanscope.velocity-comparison.v1",Pl=[1001,1049,1096],Ut="best-1027",Jt="raw-reference-96-e81b8955734e",at="collaborator-native",Ft=28,Ot=[166,186,80,100],Il=4,Nl=["vectorError","speedDelta","direction"],Fl={mode:"direction",probe:[176,90],arrows:!0};function Kt(){const n=Pl.map(xn),{lattice:a,protocolSha256:s,domainDefinition:t}=n[0],[c,i,o,r]=Ot,f=h=>a.origin[0]+h*a.axisSteps[0][0],l=h=>a.origin[2]+h*a.axisSteps[2][2],m={xmin:f(c),xmax:f(i),zmin:l(o),zmax:l(r)},g={axis:"xz",yIndex:Ft,yWorld:a.origin[1]+Ft*a.axisSteps[1][1]},x=n.map(h=>({frame:h.frame,gtSha256:h.source.gt.sha256,predSha256:h.source.prediction.sha256,packedSha256:h.resource.packedSha256,decodedSha256:h.resource.decodedSha256}));return{alignments:n,roi:m,plane:g,domain:at,tau:yn,domainDefinition:t,protocolSha256:s,sources:x,lattice:a}}function za(n){return n.caseId===Ut&&n.runId===Jt}async function qc(n,a=$t){const{alignments:s,roi:t,lattice:c,domainDefinition:i}=Kt(),o=[];for(const r of s){n.throwIfAborted();const f=await a(r.frame,{signal:n});if(n.throwIfAborted(),f.alignment!==r||JSON.stringify(f.lattice)!==JSON.stringify(c)||JSON.stringify(r.domainDefinition)!==JSON.stringify(i))throw Error("Velocity comparison requires the verified common lattice and protocol");const l=Zt({...f,plane:"xz",sliceIndex:Ft,domain:at,roiXZ:t});o.push({frame:r.frame,slice:l,angles:Gt(l,yn)})}return Ol(o)}function Ol(n){const a=n[0].slice,s=new Uint8Array(a.commonMask.length),t=new Uint8Array(s.length),c=[];let i=0,o=0,r=0,f=0,l=0,m=0;for(let h=0;h<s.length;h++)if(!(!a.roiMask[h]||!a.candidateMask[h])&&(c.push(h),!!n.every(({slice:u})=>u.commonMask[h]))){s[h]=1,i++,n.every(({angles:u})=>u.mask[h])&&(t[h]=1,o++);for(const{slice:u}of n){r=Math.max(r,u.speedGT[h],u.speedPred[h]),f=Math.max(f,u.vectorError[h]),l=Math.max(l,Math.abs(u.speedDelta[h]));for(const d of[u.vectorsGT,u.vectorsPred])m=Math.max(m,Math.hypot(d[h*3],d[h*3+2]))}}const g=a.roiView,x=n.map(({frame:h,slice:u,angles:d})=>{let p=0,w=0,j=0;for(const v of c)s[v]&&(p+=u.vectorError[v],w+=u.speedDelta[v]),t[v]&&(j+=d.degrees[v]);const S={...u,commonMask:s};return{frame:h,nativeMask:u.commonMask,slice:S,angles:{...d,mask:t},arrows:Ht(S,g,Il,m),summary:{frame:h,nativeRoi:u.local.counts.common,meanE:i?p/i:null,meanDelta:i?w/i:null,meanAngle:o?j/o:null}}});return{view:g,rows:x,roiIndices:c,paired:i,anglePaired:o,ranges:{speed:[0,r||1],vectorError:[0,f||1],speedDelta:[-(l||1),l||1],direction:[0,180]}}}function Dl(n,a,s){const{roi:t,plane:c,protocolSha256:i,sources:o,domainDefinition:r}=Kt();return{schema:Yt,createdAt:new Date().toISOString(),source:{caseId:Ut,runId:Jt,protocolSha256:i,codeRevision:s,frames:o},scope:{preset:"1049-a-fixed-roi",plane:c,roi:t,domain:at,domainDefinition:r,tau:yn},view:a,result:{roiCandidates:n.roiIndices.length,shared:n.paired,sharedAngles:n.anglePaired,ranges:n.ranges,arrowReferenceSpeed:a.arrows?n.rows[0].arrows.referenceSpeed:null,arrowIndices:a.arrows?n.rows[0].arrows.points.map(f=>f.index):[],frames:n.rows.map(f=>f.summary)}}}function Dt(n,a){return!a||typeof a!="object"?n===a:!n||typeof n!="object"||Array.isArray(a)&&(!Array.isArray(n)||n.length!==a.length)?!1:Object.keys(a).every(s=>Dt(n[s],a[s]))}function Wl(n,a){if(n.length>1024*1024)throw Error("Velocity comparison report too large");const s=JSON.parse(n),{plane:t,roi:c,protocolSha256:i,sources:o}=Kt();if(s?.schema!==Yt||!za(a)||!Dt(s.source,{caseId:Ut,runId:Jt,protocolSha256:i,frames:o})||!Dt(s.scope,{preset:"1049-a-fixed-roi",plane:t,roi:c,domain:at,tau:yn}))throw Error("Velocity comparison report source or preset mismatch");const{mode:r,probe:f,arrows:l}=s.view??{};if(!Nl.includes(r)||typeof l!="boolean"||!Array.isArray(f)||f.length!==2||!f.every((m,g)=>Number.isInteger(m)&&m>=Ot[g*2]&&m<=Ot[g*2+1]))throw Error("Velocity comparison report view is invalid");return{mode:r,probe:f,arrows:l}}async function Tl(n,a,s){s.throwIfAborted();const t=Wl(n,a),c=await qc(s);return{view:t,data:c}}function Vl(n,a){const s=["frame,native_index,x,y,z,frame_valid,shared_valid,shared_angle_valid,probe,arrow,gt_speed,pred_speed,vector_error,speed_delta,direction_degrees"];for(const{frame:t,nativeMask:c,slice:i,angles:o,arrows:r}of n.rows){const f=new Set(a.arrows?r.points.map(m=>m.index):[]),l=a.probe[0]+i.width*a.probe[1];for(const m of n.roiIndices){const g=i.commonMask[m],x=o.mask[m];s.push([t,m,...i.worldAt(m),c[m],g,x,+(m===l),Number(f.has(m)),...g?[i.speedGT[m],i.speedPred[m],i.vectorError[m],i.speedDelta[m]]:["","","",""],x?o.degrees[m]:""].join(","))}}return s.join(`
`)+`
`}const tn=(n,a=5)=>Number.isFinite(n)?n.toFixed(a):"N/A";function zl({data:n,initialView:a}){const{language:s}=me(),t=(_,y)=>s==="zh"?_:y,[c,i]=E.useState(a),[o,r]=E.useState(null),[f,l]=E.useState(null);E.useEffect(()=>r(null),[s]);const m=o?.view===c&&o.language===s?o.files:null;E.useEffect(()=>()=>{for(const _ of Object.values(m??{}))URL.revokeObjectURL(_.href)},[m]);const{paired:g,anglePaired:x,roiIndices:h,rows:u,ranges:d}=n,p=c.arrows?u[0].arrows.points.length:0,w=c.probe[0]+c.probe[1]*u[0].slice.width,j=u[0].slice.worldAt(w);function S(_){i(y=>({...y,..._})),l(null)}function v(){try{const _=Dl(n,c,"eaf428574e53d5745a8d6322dcf66bbc9fbd29c4"),y=Z0(_,n,s).toDataURL("image/png"),C=Qa({stem:"oceanscope-best-1027-velocity-comparison",record:_,previewUrl:y,csv:Vl(n,c)});r({view:c,files:C,language:s}),l(null)}catch(_){l(_)}}return e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:43:3"},t("Best_1027 · XZ 固定选区 · Y=28（约 −0.10 m）· 合作者原生有效域 · 方向阈值 1e−8 m/s","Best_1027 · fixed XZ ROI · Y=28 (about −0.10 m) · collaborator native domain · direction threshold 1e−8 m/s")),e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:44:3"},t("1049 A 的 ROI 为 X [−1.35, −0.35]、Z [1.45, 2.45] m。三帧共同有效 ","1049 A ROI: X [−1.35, −0.35], Z [1.45, 2.45] m. Common valid across three frames: "),g," / ",h.length,t("，其中三帧均可判定夹角 ","; angles valid in all three: "),x,t("。图和均值使用对应的共同格点，棋盘表示该格点未纳入。",". Maps and means use the corresponding common grid points; checkerboards mark excluded points.")),e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:45:3"},t("流速共用 0–","Shared speed range 0–"),tn(d.speed[1]),t(" m/s。配对箭头共用比例和采样位置"," m/s. Paired arrows share a scale and sampling positions"),c.arrows&&t("，每帧 ",", with ")+p+t(" 个点"," points per frame"),t("。速度和坐标单位沿用来源声明。",". Velocity and coordinate units follow source declarations.")),e.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:46:3",className:"velocity-controls"},e.createElement("label",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:47:4"},t("第三图 ","Third map "),e.createElement("select",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:47:35","data-os-action":"","aria-label":"Three-frame comparison map",value:c.mode,onChange:_=>S({mode:_.target.value})},e.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:48:5",value:"direction"},t("三维方向夹角","3D direction angle")),e.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:49:5",value:"vectorError"},t("速度向量误差 E","Velocity vector error E")),e.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:50:5",value:"speedDelta"},t("流速大小差 Δs","Speed difference Δs")))),e.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:52:4","data-os-action":"",type:"button","aria-pressed":c.arrows,onClick:()=>S({arrows:!c.arrows})},t("三帧配对箭头","Three-frame paired arrows"))),e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:54:3","aria-label":"Three-frame probe"},t("同步探针 XYZ (","Synchronized probe XYZ ("),j.map(_=>tn(_)).join(", "),") · ",u[0].slice.commonMask[w]?t("三帧共同有效","Common valid in all three frames"):t("不在三帧共同有效格点内","Outside the three-frame common grid points")),e.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:55:3",className:"velocity-comparison-table"},e.createElement("table",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:55:46"},e.createElement("caption",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:56:4"},t("固定 ROI · 各帧覆盖与共同样本指标","Fixed ROI · frame coverage and common-sample metrics")),e.createElement("thead",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:4"},e.createElement("tr",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:11"},e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:15"},t("帧","Frame")),e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:40"},t("本帧有效 / 候选","Frame valid / candidate")),e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:91"},t("共同格点平均 E（m/s）","Common-point mean E (m/s)")),e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:148"},t("平均 Δs（m/s）","Mean Δs (m/s)")),e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:190"},t("平均夹角","Mean angle")))),e.createElement("tbody",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:4"},u.map(({frame:_,summary:y})=>e.createElement("tr",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:43",key:_},e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:59",scope:"row"},_),e.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:87"},y.nativeRoi," / ",h.length),e.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:137"},tn(y.meanE)),e.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:169"},tn(y.meanDelta)),e.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:205"},tn(y.meanAngle,2),"°")))))),u.map(({frame:_,slice:y,angles:C,arrows:B})=>e.createElement("section",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:60:49",key:_,className:"velocity-comparison-row","aria-label":`Velocity comparison frame ${_}`},e.createElement("h3",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:61:4"},t("帧 ","Frame "),_),e.createElement(Hc,{frame:_,slice:y,angles:C,ranges:d,mode:c.mode,arrows:c.arrows?B:null,view:n.view,zoom:!0,probe:c.probe,setProbe:A=>S({probe:A})}),y.commonMask[w]?e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:64:31"},t("探针 E ","Probe E "),tn(y.vectorError[w])," m/s · Δs ",tn(y.speedDelta[w]),t(" m/s · 夹角 "," m/s · Angle "),C.mask[w]?tn(C.degrees[w],2)+"°":"N/A"):null)),e.createElement("section",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:66:3",className:"velocity-report","aria-label":"Three-frame velocity report"},e.createElement("h3",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:67:4"},t("可恢复三帧报告","Restorable three-frame report")),e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:68:4"},t("CSV 保留三帧各自的 ROI 候选格点与有效标记。JSON 可在“报告与恢复”重新打开，指标会从核验后的资源重算。","CSV retains each frame’s ROI candidate grid points and validity flags. Reopen JSON in Reports & restore; metrics are recomputed from verified resources.")),e.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:69:4","data-os-action":"",type:"button",onClick:v},t("生成三帧速度报告","Generate three-frame velocity report")),e.createElement(Ye,{error:f,zh:s==="zh"}),o&&!m&&e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:71:25",role:"status"},t("视图或语言已更新，请重新生成报告。","The view or language changed. Generate the report again.")),m&&e.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:72:14",className:"velocity-report-downloads"},Object.entries(m).map(([_,y])=>e.createElement("a",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:73:5",key:_,href:y.href,download:y.name},t("下载三帧报告 ","Download three-frame report "),_.toUpperCase())))))}function $l({restored:n}){const{language:a}=me(),s=(f,l)=>a==="zh"?f:l,[t,c]=E.useState(null),[i,o]=E.useState(0);E.useEffect(()=>{const f=()=>{!t?.data&&!n&&o(l=>l+1)};return window.addEventListener("oceanscope-velocity-files",f),()=>window.removeEventListener("oceanscope-velocity-files",f)},[t,n]),E.useEffect(()=>{if(n)return;const f=new AbortController;return c(null),qc(f.signal).then(l=>{f.signal.aborted||c({data:l})}).catch(l=>{f.signal.aborted||c({error:l})}),()=>f.abort()},[n,i]);const r=n??t;return e.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:100:9",className:"velocity-diagnosis"},e.createElement("h2",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:101:3"},s("三帧速度对照 · 1001 / 1049 / 1096","Three-frame velocity comparison · 1001 / 1049 / 1096")),r?.data?e.createElement(zl,{data:r.data,initialView:n?.view??Fl}):r?.error?e.createElement(e.Fragment,null,e.createElement(Ye,{error:r.error,zh:a==="zh"}),e.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:103:84","data-os-action":"",type:"button",onClick:()=>o(f=>f+1)},s("重试三帧资源","Retry three-frame resources"))):e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:104:6",role:"status"},s("正在核验三帧速度资源并计算共同有效格点…","Verifying three-frame velocity resources and computing common valid grid points…")))}function Xl({enabled:n,open:a,active:s,forceModal:t=!1,label:c,closeLabel:i,onClose:o,returnFocusRef:r,children:f}){const[l,m]=E.useState(()=>n&&!!globalThis.matchMedia?.("(max-width:900px)").matches),g=n&&(l||t),x=E.useRef(null),h=E.useRef(null),u=E.useRef(a&&s),d=E.useRef(!1),p=E.useRef(o);p.current=o,E.useEffect(()=>{if(!n)return;const v=globalThis.matchMedia?.("(max-width:900px)");if(!v)return;const _=()=>{v.matches&&!t&&(d.current=!!x.current?.contains(document.activeElement),p.current()),m(v.matches)};return m(v.matches),v.addEventListener("change",_),()=>v.removeEventListener("change",_)},[n,t]),E.useEffect(()=>{if(!n)return;const v=x.current;return g&&(a&&s&&!v.open?v.showModal():v.open&&(!a||!s)&&v.close()),a&&s&&(g||!u.current)&&h.current?.focus({preventScroll:!0}),!a&&d.current&&(d.current=!1,r.current?.focus({preventScroll:!0})),u.current=a&&s,()=>{g&&v.open&&v.close()}},[n,g,a,s]);function w(){d.current=!0,o()}function j(v){if(n){if(v.key==="Escape"){v.preventDefault(),v.stopPropagation(),w();return}if(g&&v.key==="Tab"){const _=[...x.current.querySelectorAll("button,input,select,textarea,a[href],summary,[tabindex]")].filter(B=>!B.disabled&&B.tabIndex>=0&&B.getClientRects().length),y=_[0],C=_.at(-1);v.shiftKey&&document.activeElement===y?(v.preventDefault(),C?.focus()):!v.shiftKey&&document.activeElement===C&&(v.preventDefault(),y?.focus())}}}const S=g?"dialog":"aside";return e.createElement(S,{ref:x,id:"analysis-settings",className:"field-sidebar","aria-label":c,onCancel:v=>{v.preventDefault(),w()},onKeyDown:j,onClick:v=>{if(!g||v.target!==v.currentTarget)return;const _=v.currentTarget.getBoundingClientRect();(v.clientX<_.left||v.clientX>_.right||v.clientY>_.bottom)&&w()}},n&&e.createElement("div",{"data-os-loc":"src/field/WorkbenchSettings.jsx:50:13",className:"demo-settings-header"},e.createElement("button",{"data-os-loc":"src/field/WorkbenchSettings.jsx:50:51","data-os-action":"",ref:h,className:"demo-close-settings",onClick:w},i)),f)}function Oa(n,a,s="application/json"){const t=URL.createObjectURL(new Blob([a],{type:s})),c=document.createElement("a");c.href=t,c.download=n,c.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}function Zl(n){if(!n?.dimensions||!n.axisSteps)return null;const a=[];for(let s=0;s<8;s++)a.push(n.origin.map((t,c)=>t+n.dimensions.reduce((i,o,r)=>i+(s>>r&1)*(o-1)*n.axisSteps[r][c],0)));return{min:[0,1,2].map(s=>Math.min(...a.map(t=>t[s]))),max:[0,1,2].map(s=>Math.max(...a.map(t=>t[s])))}}function Gl({focusedLayout:n=!1,workspace:a="3d",onWorkspace:s=()=>{},evaluation:t=null,evaluationError:c="",unifiedRestore:i=!1,onCancelImport:o,onRetryEvaluation:r,comparison:f,processing:l,activeGroup:m,onActiveGroup:g,setup:x,expectedFrames:h,metricsOverride:u,sourceCase:d,viewApiRef:p,initialView:w,onViewReady:j,onViewRestored:S,restoring:v=!1,frameSplit:_=f.frameSplit,readOnly:y=!1,active:C=!0}){const{tr:B,language:A}=me(),b=A==="zh",M=n,R=M?"3d":"time",[I,N]=E.useState(null),z=E.useRef(null),$=E.useRef(0),X=!!I&&a==="slices",Z=!!I?.comparison&&a==="slices",ne={caseId:d?.id,runId:t?.runId},[D,K]=E.useState(null),[F,L]=E.useState("");E.useEffect(()=>{if(!t||d?.id!=="best-1027")return;function k(V){if(V?.page!=="field"||!V.hotspotReview||!["height","slices"].includes(V.section))return;const{surface:J,velocity:oe}=V.hotspotReview;try{if(J?.run!==t.runId||!t.frameIds.includes(J.frame))throw Error();if(V.section==="slices"){const{request:ze,view:Pe}=Pc(JSON.stringify(oe),ne);if(ze.frame!==J.frame||ze.hotspotXZ.x!==J.x||ze.hotspotXZ.z!==J.z)throw Error();N({request:ze,markView:Pe,surface:J,key:++$.current})}U.current?.pause(),We(J.frame),K(J),L("")}catch{L(b?"批注与当前数据不匹配。":"The annotation does not match this dataset.")}}const H=V=>k(V.detail);return k(Za()),window.addEventListener("oceanscope-hotspot-mark",H),()=>window.removeEventListener("oceanscope-hotspot-mark",H)},[t,d?.id]);function T(k,H=null,V=null){U.current?.pause(),on(!1),N({request:k,restored:H,surface:V,key:++$.current}),s?.("slices")}function P(k=null){U.current?.pause(),on(!1),N({comparison:!0,restored:k,key:++$.current}),s("slices")}E.useEffect(()=>{if(!M||a!=="3d")return;const k=()=>{window.location.hash==="#analysis-summary"&&document.getElementById("analysis-summary")?.scrollIntoView({block:"start"})};return k(),window.addEventListener("hashchange",k),()=>window.removeEventListener("hashchange",k)},[M,a,t]);const W=w?.settings,ce=E.useRef(null),U=E.useRef(null),ue=E.useRef(!1),[re,xe]=E.useState(""),O=n&&f.id==="best-1027",Y=!!d&&f.id!=="best-1027",{presenting:he}=Bi(),[ke,la]=E.useState(()=>({presenting:he,open:!he&&!globalThis.matchMedia?.("(max-width:900px)").matches})),Wn=ke.presenting===he&&ke.open;function on(k){la(H=>({presenting:he,open:typeof k=="function"?k(H.presenting===he&&H.open):k}))}E.useEffect(()=>{n&&U.current?.pause()},[a]);const Ue=E.useRef(null),[vn,En]=E.useState(!0),rn=E.useRef(null),[Tn,G]=E.useState({subset:"all",metric:"height",grid:"coarse"}),[Q,Me]=E.useState(null),[Ee,_n]=E.useState(null),[da,fa]=E.useState(0),[Vn,ma]=E.useState(W?.shading||"original");E.useEffect(()=>{he&&U.current?.pause()},[he]);const[Qt,Lc]=E.useState(null),[tt,Yc]=E.useState(null),[ln,ba]=E.useState(null),pa=E.useCallback(()=>ba(null),[]),[Uc,Jc]=E.useState("slices"),Je=n&&["height","slices"].includes(a);E.useEffect(()=>{Je&&Jc(a)},[a,Je]);const[es,ns]=E.useState(W?.errorScale||{locked:!1,limit:1}),ua=E.useRef(null),ha=d0(f);function Kc(){ua.current&&(ua.current.open=!0,ua.current.scrollIntoView?.({block:"start"}))}const as=JSON.stringify(l?.lattice??null),ye=E.useMemo(()=>JSON.parse(as),[as]),Xe=E.useMemo(()=>l?.frames?.map(k=>k.frame)||[],[l?.frames]),dn=E.useMemo(()=>ta(d),[d]),we=E.useMemo(()=>m==="sdf"&&dn.length?dn:Xe,[m,dn,Xe]),wn=t?.frameIds??we,[q,We]=E.useState(W?.frame??(O?1049:null)),[se,ga]=E.useState(null),[zn,ya]=E.useState(null),[fn,xa]=E.useState(""),[Ie,$n]=E.useState(!1),[Se,va]=E.useState(()=>{if(W)return W.mode;const k=y?"split":St("field-view")?.mode;return["split","overlay","wire-overlay","gt","prediction"].includes(k)?k:"split"}),[He,ts]=E.useState(W?.quality??"balanced"),[mn,ss]=E.useState(W?.component??"magnitude"),[cs,sd]=E.useState(.65),[Sn,is]=E.useState(W?.showContext??!1),[jn,os]=E.useState(W?.vectorDensity??2e3),[Cn,rs]=E.useState(W?.arrowScale??1),[Xn,ls]=E.useState(W?.glyphMode??"direction"),[Bn,ds]=E.useState(W?.overlayStyle??"errors"),[ae,An]=E.useState(W?.plane??(O?"yz":"xz")),[Qc,Ke]=E.useState(W?.sliceIndex??null),[Ea,st]=E.useState(W?.crosshair||[.5,.5]),[kn,fs]=E.useState(!!W?.sourceRange),[Qe,ms]=E.useState(W?.sourceRange||[0,1]),[Te,bs]=E.useState(W?.rotationAxis||"y"),[Ne,ps]=E.useState(W?.angle??30),[Re,ct]=E.useState(W?.sectionPercent??50),[Zn,us]=E.useState(W?.showPlane??!0),[hs,ei]=E.useState(null),[Ve,it]=E.useState(W?{showGt:W.showGt,showPrediction:W.showPrediction,gtOpacity:W.gtOpacity,predictionOpacity:W.predictionOpacity}:{showGt:!0,showPrediction:!0,gtOpacity:.65,predictionOpacity:.8}),[ni,gs]=E.useState(""),bn=E.useRef(null),Mn=E.useRef(0),_a=E.useRef(we);_a.current=we;const ie=!!f?.settings?.previewOnly,pn=m==="sdf"&&dn.includes(q)&&!Xe.includes(q);E.useEffect(()=>(bn.current={frames:Nr({fetchFrame:(k,H,V)=>Dr(k,H,{...V,withIdentity:!0}),decode:pc}),geometry:Oi(),surface:pi()},()=>{Mn.current++,bn.current?.frames.dispose(),bn.current?.geometry.dispose(),bn.current?.surface.dispose(),bn.current=null}),[f.id]),E.useEffect(()=>{ga(null),ya(null),We(W?.frame??(O?1049:null)),En(!0),xa("")},[f.id]),E.useEffect(()=>{if(wn.length&&!wn.includes(q)){const k=y?null:St("field-view");We(k?.comparisonId===f.id&&we.includes(k.frame)?k.frame:we[0])}},[we,wn,q,f.id,y]),E.useEffect(()=>{!y&&q!=null&&fc("field-view",{mode:Se,comparisonId:f.id,frame:q})},[Se,q,f.id,y]),E.useEffect(()=>{let k=!0;if(y||u){ya(u??null);return}return Wr(f.id).then(H=>{k&&ya(H)}).catch(H=>{k&&(ya(null),xa(H.message))}),()=>{k=!1}},[f.id,we.length,f.status,u,y]);const wa=se?Aa(se.snapshot.data,m):null,Sa=se?.snapshot.data.fields.find(k=>k.id===(wa?.groundTruth?.ids[0]||wa?.prediction?.ids[0]))?.shape||ye?.dimensions,Ze=Sa?Sa[ae==="yz"?0:ae==="xz"?1:2]-1:0,_e=Math.max(0,Math.min(Qc??Math.floor(Ze/2),Ze)),ys=E.useMemo(()=>({group:m,mode:ie?"gt":Se,overlayStyle:Bn,quality:He,component:mn,opacity:cs,showContext:Sn,vectorDensity:jn,arrowScale:Cn,glyphMode:Xn,plane:ae,sliceIndex:_e,angle:Ne,sectionPercent:Re,rotationAxis:Te,showPlane:Zn,sourceRange:kn&&Qe[1]>Qe[0]?Qe:null,unit:wa?.unit}),[m,Se,ie,Bn,He,mn,cs,Sn,jn,Cn,Xn,ae,_e,Ne,Re,Te,Zn,kn,Qe,wa?.unit]),en=E.useMemo(()=>({group:m,quality:He,component:mn,showContext:Sn,vectorDensity:jn,arrowScale:Cn,glyphMode:Xn,plane:ae,sliceIndex:_e,angle:Ne,sectionPercent:Re,rotationAxis:Te,previewOnly:ie}),[m,He,mn,Sn,jn,Cn,Xn,ae,_e,Ne,Re,Te,ie]),nn=JSON.stringify([f.id,q,en,da]);E.useEffect(()=>{const k=bn.current;if(!k||q==null)return;const H=++Mn.current;let V=!0;if(xa(""),!vn||!we.includes(q)){ga(null),$n(!1);return}return $n(!0),_n({key:nn,status:"loading"}),(async()=>{try{if(pn){const Pe=await k.surface.select(d,q,He);if(!Pe||!V||H!==Mn.current)return;const un=ui(Pe.geometry,ye,en),Ca={comparisonId:f.id,frameNumber:q,data:{fields:[],groups:{}},verifiedResource:Pe.verifiedResource};ga({snapshot:Ca,geometry:un,settings:en}),_n({key:nn,status:"ready"}),$n(!1),gs(`${(k.surface.stats().bytes/1048576).toFixed(0)} MiB surface cache`);return}const J=await k.frames.select(f.id,q);if(!J||!V||H!==Mn.current)return;let oe;try{oe=await k.geometry.request(J,ye,en)}catch(Pe){oe={failed:!0,layers:[],warnings:[`3D preparation unavailable: ${Pe.message}. Use slices below.`],byteLength:0}}if(!oe||!V||H!==Mn.current)return;ga({snapshot:J,geometry:oe,settings:en}),_n({key:nn,status:"ready"}),$n(!1);const ze=k.frames.stats();if(gs(ze.oversize?"Active frame exceeds preview cache budget":`${(ze.bytes/1048576).toFixed(0)} MiB decoded cache`),!n){const Pe=_a.current.indexOf(q);k.frames.prefetch(f.id,[_a.current[Pe+1],_a.current[Pe-1]].filter(un=>un!=null))}}catch(J){V&&H===Mn.current&&(xa(J.message),_n({key:nn,status:"error",error:J.message}),$n(!1))}})(),()=>{V=!1}},[f.id,q,en,ye,we,da,nn,vn,pn,d,He]),E.useEffect(()=>{fn&&U.current?.pause()},[fn]);const ai=E.useMemo(()=>Zl(l?.lattice),[l?.lattice]);E.useEffect(()=>{const k=H=>{const V=H.detail;C&&V?.page==="field"&&V.caseId===f.id&&wn.includes(V.frame)&&(V.accept(),Hn(V.frame))};return window.addEventListener("oceanscope-annotation-frame",k),()=>window.removeEventListener("oceanscope-annotation-frame",k)});const ot=E.useCallback(k=>We(k),[]),ge=se?.snapshot.frameNumber,Gn=ge==null?null:zn?.frames?.[String(ge)],Hn=E.useCallback(k=>{U.current?.pause(),m==="velocity"&&!Xe.includes(k)&&g("sdf"),We(k)},[m,Xe,g]),je=ln&&ln.frame===q&&ln.caseId===f.id&&m==="velocity"&&["overlay","split"].includes(Se)&&yc(ln,ae,_e,Ea)?ln:null;E.useEffect(()=>{ln&&!je&&ba(null)},[ln,je]);function ti(k){if(q!==ge||Ie||m!=="velocity"||!ye||!se?.geometry.paired?.indices.includes(k))return;const H=Ct(k,ye);N(null),An("xz"),Ke(H.y),st(H.crosshair),ba({...H,frame:ge,caseId:f.id})}const Fe=JSON.stringify([f.id,q,m,mn,ae,_e,Ne,Re,Te]),[xs,rt]=E.useState(()=>({context:Fe,range:W?.region??null})),vs=E.useRef(Fe);E.useEffect(()=>{vs.current!==Fe&&(vs.current=Fe,rt({context:Fe,range:null}))},[Fe]);const lt=xs.context===Fe?xs.range:null;function si(k){U.current?.pause(),rt({context:Fe,range:k})}const ci=E.useCallback(k=>{An("xz"),Ke(k)},[]);E.useEffect(()=>{Z&&(An("xz"),Ke(28),[1001,1049,1096].includes(q)||We(1049))},[Z,q]);function ii(k){U.current?.pause(),st(k)}const Ce=se?.settings.group||m,qn=se?Aa(se.snapshot.data,Ce):null,te={shading:Vn,...ys,...se?.settings,...Ve,unit:qn?.unit},Oe=Ee?.key===nn&&Ee.status==="ready"&&!Ie&&!fn&&!re&&!!hs&&se?.snapshot.frameNumber===q&&se?.settings===en&&!se?.geometry.failed;E.useEffect(()=>{j?.(Oe&&!v)},[Oe,v,j]),E.useEffect(()=>{if(!(!w||ue.current)){if(fn||re||se?.geometry.failed){ue.current=!0,S?.(Error("load"));return}if(Oe){ue.current=!0;try{Es(w),U.current.pause(),S?.(null)}catch(k){S?.(k)}}}},[w,Oe,fn,re,se,S]);function Es(k,H=!0){const V=ce.current,{linkedVelocityIndex:J,glyphFocusIndex:oe}=k.settings;if(J!=null){if(!se?.geometry.paired?.indices.includes(J))throw Error("probe");V.restoreCamera(k.camera,oe,J),H?ba({...Ct(J,ye),frame:k.settings.frame,caseId:f.id}):pa();return}pa(),k.settings.glyphFocusIndex==null?V.restoreCamera(k.camera):V.restoreCamera(k.camera,k.settings.glyphFocusIndex)}function _s(){if(!Oe||v||!d||kn&&!(Qe[1]>Qe[0]))throw Error("settings");U.current.pause();const k=ce.current.getFocusIndex?.();return cn({schema:Ha,name:`${d.id} · ${m.toUpperCase()} · ${ge} · ${ae==="oblique"?Te.toUpperCase()+" "+Ne+"°":ae.toUpperCase()}`,sourceSignature:wc(d),settings:{...pn?{representation:Qn}:{},shading:Vn,caseId:d.id,frame:ge,group:m,mode:ie?"gt":Se,quality:He,component:mn,plane:ae,sliceIndex:_e,angle:Ne,sectionPercent:Re,rotationAxis:Te,showPlane:Zn,showContext:Sn,...Ve,showPrediction:ie?!1:Ve.showPrediction,vectorDensity:jn,arrowScale:Cn,...m==="velocity"&&!ie?{glyphMode:Xn,...je?{linkedVelocityIndex:je.index}:{},...Se==="overlay"?{overlayStyle:Bn}:{},...k!=null?{glyphFocusIndex:k}:{}}:{},sourceRange:kn?Qe:null,errorScale:es,crosshair:Ea,region:ie?null:lt,playback:U.current.getSettings()},camera:ce.current.getCamera()},[d])}E.useImperativeHandle(p,()=>({pause(){U.current?.pause()},captureView:_s,async restoreAnalysis(k,H,V){if(V.throwIfAborted(),!t)throw Error("Reference analysis is not ready for this dataset");if(H==="pairedCase"){if(!z.current)throw Error("One-page case unavailable for this dataset");return z.current.restore(k,V)}if(H==="velocityComparison"){const oe=await Tl(k,ne,V);V.throwIfAborted(),P(oe);return}if(H==="velocity"){const oe=await Ic(k,{caseId:d?.id,runId:t.runId},V);V.throwIfAborted(),We(oe.request.frame),T(oe.request,oe);return}if(H==="report"){if(!rn.current?.restoreText)throw Error("Analysis is not ready");return rn.current.restoreText(k,V)}const J=cc(k,t);V.throwIfAborted(),U.current?.pause(),rn.current?.clearSnapshot(),G(oe=>({...oe,subset:J.subset,metric:J.metric})),We(J.frame)}}));function oi(){U.current?.pause();let k=null,H=null,V=null,J="No 3D preview for this frame";if(we.includes(q)){J=fn||re||(se?.geometry.failed?"3D preparation failed":Ie?"3D preview is loading":"3D preview is not ready or not verified");try{const oe=pn?tc(d,q,He):Tt(d,q);Oe&&oe&&JSON.stringify(se.snapshot.verifiedResource)===JSON.stringify(oe)&&(k=_s(),V=ce.current.capture(),H=oe,J=pn?"Exact-frame native SDF surface bytes verified; no volume samples":"Exact-frame preview bytes verified")}catch(oe){k=null,H=null,V=null,J=oe.message}}return{view:{frame:q,plane:ae,sliceIndex:_e,rotationAxis:Te,angle:Ne,sectionPercent:Re,selection:Tn,geometry:k,geometryResource:H,geometryStatus:{status:k?"included":"unavailable",reason:J}},scene:V}}function ri(k,H){if(H.throwIfAborted(),U.current?.pause(),pa(),We(k.frame),An(k.plane),Ke(k.sliceIndex),bs(k.rotationAxis),ps(k.angle),ct(k.sectionPercent),G(k.selection),fa(J=>J+1),!k.geometry)return Promise.resolve();En(!0);const V=k.geometry.settings;return g(V.group),va(V.mode),ts(V.quality),ss(V.component),ma(V.shading),is(V.showContext),os(V.vectorDensity),rs(V.arrowScale),ls(V.glyphMode??"direction"),ds(V.overlayStyle??"errors"),us(V.showPlane),it({showGt:V.showGt,showPrediction:V.showPrediction,gtOpacity:V.gtOpacity,predictionOpacity:V.predictionOpacity}),fs(!!V.sourceRange),ms(V.sourceRange??[0,1]),ns(V.errorScale),st(V.crosshair),new Promise((J,oe)=>{const ze=setTimeout(()=>un(Error("Timed out loading the report view; retry the geometry download")),3e4),Pe=()=>un(Error("Report restore cancelled"));function un(Ca){clearTimeout(ze),H.removeEventListener("abort",Pe),Me(null),Ca?oe(Ca):J()}H.addEventListener("abort",Pe,{once:!0}),Me({view:k,signal:H,finish:un})})}E.useEffect(()=>{if(!(!Q||Q.signal.aborted)&&!(q!==Q.view.frame||Ee?.key!==nn||Ee.status==="loading")){if(Ee.error||re||se?.geometry.failed){Q.finish(Error(Ee.error||re||"Geometry unavailable"));return}if(Oe){if(JSON.stringify(se.snapshot.verifiedResource)!==JSON.stringify(Q.view.geometryResource)){Q.finish(Error("Report preview resource identity mismatch"));return}try{Es(Q.view.geometry,!1),U.current?.restoreSettings(Q.view.geometry.settings.playback),rt({context:Fe,range:Q.view.geometry.settings.region??null}),Q.finish()}catch(k){Q.finish(k)}}}},[Q,Oe,q,Ee,nn,re,se]);const li=zi({sourceCase:d,comparison:f,processing:l,snapshot:se?.snapshot,geometry:se?.geometry,settings:te,metrics:zn}),di=se?.snapshot.data.fields.find(k=>k.id===(qn?.groundTruth?.ids[0]||qn?.prediction?.ids[0])),ws=l?.lattice&&ae!=="oblique"?Di(l.lattice,ae,_e):null,dt={shading:Ce==="sdf"?Vn:"not_applicable",comparison_id:f.id,dataset_a:f.groundTruthId||f.labels?.gt?.displayName||"Ground Truth",dataset_b:ie?"":f.predictionId||f.labels?.prediction?.displayName||"Prediction",frame:ge,group:Ce,component:te.component,plane:te.plane,mode:te.mode,camera:hs,gt_opacity:Ve.gtOpacity,prediction_opacity:Ve.predictionOpacity,preview_quality:te.quality,show_plane:Zn,gt_visible:Ve.showGt,prediction_visible:Ve.showPrediction,value_unit:qn?.unit||"undeclared",coordinate_unit:"source_grid_units",lattice_origin:ye?.origin,lattice_axis_steps:ye?.axisSteps,dimensions:ye?.dimensions,...te.plane==="oblique"?qi(uc(ye,te.angle,te.sectionPercent,te.rotationAxis)):{slice_index:te.sliceIndex,angle_degrees:te.plane==="xy"?0:te.plane==="yz"?90:null,sampling:"native_voxel_layer"},section_percent:te.plane==="oblique"?te.sectionPercent:ht(te.sliceIndex,0,(ye?.dimensions?.[te.plane==="xy"?2:te.plane==="yz"?0:1]||1)-1),crosshair_normalized:Ea,local_region:lt,saved_metrics_scope:"precomputed_original_support_not_current_slice"},fi=Je?a:Uc,ft=tt&&tt.frame===ge?tt:null,mi=fi==="height"&&ft?ft.value:Qt?.context===Fe?Qt.value:null,bi=e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:284:25",id:"analysis-height",hidden:n&&!["height","report"].includes(a)},t&&q!=null&&e.createElement(_l,{linkedPoint:je,onManualHeightPick:pa,onHeightMark:Yc,reviewRequest:D,onReviewApplied:()=>K(null),viewMode:n?a==="report"?"report":"height":"all",unifiedRestore:i,bundle:t,frame:q,plane:ae,sliceIndex:_e,rotationAxis:Te,angle:Ne,sectionPercent:Re,getReportView:oi,onRestoreReportView:ri,reportControlRef:rn,onDownload:Oa,catalog:[d],reportContext:JSON.stringify([Fe,Tn]),onPause:()=>U.current?.pause(),onOpenVelocity:za(ne)?T:void 0})),Ss=e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:285:27",hidden:n&&a!==R,id:"analysis-summary",className:M?"demo-integrated-time":void 0},M&&t&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:285:201",className:"demo-time-heading"},e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:285:236"},e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:285:241"},b?"时间分析":"Time analysis"),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:285:277"},b?"查看误差随帧号的变化；点击曲线上的点，同步切换上方三维画面。":"Inspect errors across frames. Select a curve point to update the 3D view above.")),e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:285:409",href:"#analysis-spatial"},b?"返回三维画面 ↑":"Back to 3D ↑")),t&&e.createElement(C0,{displayGeometryFrames:dn.length?dn:Xe,unifiedRestore:i,bundle:t,frame:q,onFrame:Hn,onDownload:Oa,reportSelection:Tn,onReportSelection:G}));function ja(){rn.current?.cancel(),o?.()}const mt=n&&a==="3d",bt=f.availableGroups.includes("velocity"),js=bt&&Xe.includes(q);function pt(k,H=q){U.current?.pause(),En(!0),H!==q&&We(H),g(k)}const Cs=e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:296:21",className:"field-tabs compact",role:"group","aria-label":b?"三维场类型":"3D field type"},e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:297:5","data-os-action":"",type:"button","aria-pressed":m==="sdf",disabled:!f.availableGroups.includes("sdf"),onClick:()=>pt("sdf")},mt?b?"水面（SDF）":"Surface (SDF)":"SDF"),e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:299:5","data-os-action":"",type:"button","aria-pressed":m==="velocity",disabled:!js,onClick:()=>pt("velocity")},b?"速度场":"Velocity"));return e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:302:10","data-review-case":f.id,"data-review-frame":ge,className:`field-workbench v2-field${n?` demo-field ${Y?"demo-nonreference":""} demo-panel-${a} ${Wn?"settings-open":""}`:""}`,inert:v||void 0,onPointerDownCapture:ja,onKeyDownCapture:ja,onChangeCapture:ja,onWheelCapture:ja},e.createElement(Xl,{enabled:n,forceModal:he,open:Wn,active:C&&!X&&["3d","height","slices"].includes(a),returnFocusRef:Ue,onClose:()=>on(!1),label:b?"视图设置":"View settings",closeLabel:b?"关闭设置":"Close settings"},e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:303:314",ref:ua,className:"field-setup",open:!f},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:303:385"},y?b?"已发布数据详情":"Published dataset details":B("Datasets & comparison setup")),x),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:304:7",hidden:n&&a==="height"},e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:304:57"},B("Display controls")),!mt&&Cs,!ie&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:305:17",className:"v2-primary-modes",role:"group","aria-label":b?"主要显示模式":"Primary display mode"},e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:305:112","data-os-action":"","aria-pressed":Se==="split",onClick:()=>va("split")},b?"并排":"Side by side"),e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:305:214","data-os-action":"","aria-pressed":Se==="overlay",onClick:()=>va("overlay")},b?"叠加":"Overlay")),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:306:7",className:"v2-mode-caption"},ie?b?"单组查看 · 不显示误差":"Single dataset · no error scores":m==="velocity"&&Se==="overlay"?b?"同一格点比较 · 点选查看两侧速度":"Compare at the same cell · select to inspect both velocities":m==="velocity"&&Se==="split"?b?"并排 · 共享色标与箭长比例":"Linked panes · shared color and length scales":["split","overlay"].includes(Se)?b?"A / GT 蓝色 · B / Prediction 橙色":"A / GT blue · B / Prediction orange":b?"正在使用高级显示模式":"Advanced display mode active")),e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:307:13"},B("Cross section")),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:307:43"},B("Plane"),e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:307:63","data-os-action":"","aria-label":B("Slice plane"),value:ae,onChange:k=>{An(k.target.value),Ke(null)}},["xy","xz","yz"].map(k=>e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:307:197",key:k,value:k},k.toUpperCase()," · ",b?"固定":"fixed"," ",k==="xy"?"Z":k==="xz"?"Y":"X")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:307:303",value:"oblique",disabled:!jt(ye)},b?"斜切 · X / Y / Z 旋转":"Oblique · X / Y / Z rotation"))),ae==="oblique"&&e.createElement($i,{value:Te,onChange:k=>{U.current?.pause(),bs(k)}}),ae==="oblique"&&e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:309:27",className:"v2-position"},b?"切面角度":"Section angle"," ",e.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:309:86"},Ne,"°"),e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:309:111","data-os-action":"","aria-label":b?"场切面角度":"Field section angle",type:"range",min:"0",max:"180",step:"1",value:Ne,onChange:k=>ps(+k.target.value)}),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:309:259"},b?"只旋转切面，相机不变；切面与探针同步。":"Rotates the section, not the camera; probes remain synchronized.")),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:310:7",className:"v2-position"},b?"切片位置":"Section position"," ",e.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:310:69"},(ae==="oblique"?Re:ht(_e,0,Ze)).toFixed(1),"%"),e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:310:176","data-os-action":"","aria-label":b?"场切片位置百分比":"Field section position percent","aria-valuetext":`${(ae==="oblique"?Re:ht(_e,0,Ze)).toFixed(1)}%`,type:"range",min:"0",max:ae==="oblique"?100:Ze,step:ae==="oblique"?.1:1,disabled:!Sa||Ze===0,value:ae==="oblique"?Re:_e,onChange:k=>ae==="oblique"?ct(+k.target.value):Ke(+k.target.value)})),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:311:7",className:"v2-range-labels"},e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:311:40"},"0%"),e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:311:55"},"100%")),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:311:78"},ae==="oblique"?b?"三线性取样：参与插值的邻点必须全部有效，缺失处留空。":"Trilinear sampling: all contributing neighbours must be valid; missing support stays empty.":b?"按原始体素层移动，切面与下方探针同步。":"Snaps to original voxel layers; synchronized with slices and probe."),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:312:7",className:"check"},e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:312:32","data-os-action":"",type:"checkbox",checked:Zn,onChange:k=>us(k.target.checked)}),b?"显示半透明切面":"Show translucent section plane"),e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:313:7",hidden:n&&a==="height",className:"v2-advanced"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:313:85"},b?"显示、单位与网格详情":"Display, units & grid details"),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:314:7"},ae==="oblique"?`${b?"斜切角度":"Oblique angle"} ${Te.toUpperCase()} ${Ne}°`:`${B("Slice ")}${_e} / ${Ze}`,e.createElement("br",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:314:148"}),B("World: "),ws?ws.map(k=>k.toFixed(3)).join(", "):"—",e.createElement("br",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:314:223"}),b?"原始网格坐标；单位见数据来源声明。":"Source-grid coordinates; see the source unit declaration."),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:315:7"},B("3D display mode"),e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:315:37","data-os-action":"","aria-label":B("3D display mode"),value:ie?"gt":Se,disabled:ie,onChange:k=>va(k.target.value)},e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:315:161",value:"split"},B("Side by side · linked")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:315:221",value:"wire-overlay"},B("Solid + X-ray wireframe · overlap safe")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:315:305",value:"overlay"},B("Transparent overlay · blue / orange")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:315:381",value:"gt"},B("Ground Truth only")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:315:434",value:"prediction"},B("Prediction only")))),Se==="wire-overlay"&&!ie&&e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:316:40",className:"field-mode-help"},B("Blue: GT surface. Orange: Prediction wireframe, visible through GT. Geometry and scores are unchanged.")),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:317:7"},B("Preview quality"),e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:317:37","data-os-action":"",value:He,onChange:k=>ts(k.target.value)},e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:317:102",value:"balanced"},B("Balanced · stride 2")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:317:163",value:"fine"},B("Fine · stride 1")))),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:317:233"},B("Display only. Metrics retain the comparison lattice.")),e.createElement("fieldset",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:318:7",className:"field-layer-controls"},e.createElement("legend",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:318:50"},B("Visible layers")),[["Gt","Ground Truth","gtOpacity"],...ie?[]:[["Prediction","Prediction","predictionOpacity"]]].map(([k,H,V])=>e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:318:217",key:k,className:"field-layer-row"},e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:318:260",className:"check"},e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:318:285","data-os-action":"",type:"checkbox",checked:Ve[`show${k}`],onChange:J=>it(oe=>({...oe,[`show${k}`]:J.target.checked}))}),e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:318:409",className:`field-layer-dot ${k==="Gt"?"gt":"prediction"}`}),B(H)),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:318:497"},B(H),B(" opacity "),e.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:318:532"},Math.round(Ve[V]*100),"%"),e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:318:581","data-os-action":"","aria-label":`${H} opacity`,type:"range",min:".1",max:"1",step:".05",value:Ve[V],disabled:!Ve[`show${k}`],onChange:J=>it(oe=>({...oe,[V]:Number(J.target.value)}))}))))),m==="velocity"&&e.createElement(e.Fragment,null,e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:319:36"},B("Velocity display"),e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:319:67","data-os-action":"",value:mn,onChange:k=>ss(k.target.value)},["magnitude","x","y","z"].map(k=>e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:319:170",key:k,value:k},k==="magnitude"?ie?"Magnitude":B("Magnitude / EPE"):k.toUpperCase())))),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:319:300"},B("Vector count limit"),e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:319:333","data-os-action":"",type:"number",min:"1",max:"20000",value:jn,onChange:k=>os(Math.max(1,Math.min(2e4,Number(k.target.value)||1)))})),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:319:479"},B("Arrow scale"),e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:319:505","data-os-action":"",type:"number",min:".001",step:".1",value:Cn,onChange:k=>rs(Math.max(.001,Number(k.target.value)||1))})),f.availableGroups.includes("sdf")&&e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:319:690",className:"check"},e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:319:715","data-os-action":"",type:"checkbox",checked:Sn,onChange:k=>is(k.target.checked)}),B(" Show SDF context"))),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:320:7",className:"check"},e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:320:32","data-os-action":"",type:"checkbox",checked:kn,onChange:k=>fs(k.target.checked)}),B(" Fixed source color range")),kn&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:320:162",className:"row"},Qe.map((k,H)=>e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:320:202","data-os-action":"",key:H,"aria-label":H?"Color maximum":"Color minimum",type:"number",value:k,step:".01",onChange:V=>ms(J=>J.map((oe,ze)=>ze===H?Number(V.target.value):oe))}))),y&&ie?e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:25",className:"alignment-report"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:63"},"Grid and provenance"),e.createElement("dl",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:101"},e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:105"},e.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:110"},"Canonical lattice"),e.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:136"},ye?.dimensions?.join(" × ")," voxels")),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:192"},e.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:197"},"Voxel size"),e.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:216"},ye?.voxelSize?.join(" × ")||"See source declaration")),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:290"},e.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:295"},"Source"),e.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:321:310"},"Simulation Ground Truth. No prediction alignment or error comparison.")))):e.createElement(l0,{lattice:l?.lattice,comparison:f}))),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:5",className:"field-center"},F&&e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:47",role:"alert"},F),c&&e.createElement(Ye,{error:c,zh:b,resource:b?"序列评估资源":"Sequence evaluation resources",onRetry:r}),e.createElement(Ye,{error:fn,zh:b,resource:(b?"当前帧三维资源：":"Current-frame geometry: ")+q,onRetry:()=>fa(k=>k+1)}),(t||n)&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:399",className:"analysis-toolbar","aria-label":b?"分析导航":"Analysis navigation"},e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:478",hidden:Z},b?"当前帧":"Current frame"," ",e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:546","data-os-action":"","aria-label":"Analysis frame",value:q??wn[0],onChange:k=>Hn(Number(k.target.value))},wn.map(k=>e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:699",key:k,value:k},k,dn.includes(k)||Xe.includes(k)?" · 3D":"")))),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:820",hidden:X},b?"截面":"Section"," ",e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:871","data-os-action":"","aria-label":"Analysis section",value:ae,onChange:k=>{An(k.target.value),Ke(null)}},["xy","xz","yz"].map(k=>e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:1004",key:k,value:k},k.toUpperCase())),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:1058",value:"oblique",disabled:!jt(ye)},b?"斜切":"Oblique"))),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:1164",hidden:X},ae==="oblique"?b?"位置 %":"Position %":b?"切片索引":"Slice index"," ",e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:1266","data-os-action":"","aria-label":"Analysis section position",type:"number",min:"0",max:ae==="oblique"?100:Ze,step:ae==="oblique"?.1:1,disabled:!Sa||Ze===0,value:ae==="oblique"?Re:_e,onChange:k=>{const H=Number(k.target.value);Number.isFinite(H)&&(ae==="oblique"?ct(Math.max(0,Math.min(100,H))):Ke(Math.max(0,Math.min(Ze,Math.round(H)))))}})),e.createElement("nav",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:1699",hidden:n,"aria-label":b?"分析区域":"Analysis sections"},e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:1770",href:"#analysis-spatial"},b?"三维视图":"3D view"),e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:1823",href:"#analysis-height"},b?"高度与选区":"Height & ROI"),e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:1881",href:"#analysis-slices"},b?"场切片":"Field slices"),e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:1937",href:"#analysis-summary"},b?"序列统计":"Sequence metrics")),n&&!X&&["3d","height","slices"].includes(a)&&e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:2084","data-os-action":"",ref:Ue,className:"demo-settings-toggle","aria-controls":"analysis-settings","aria-expanded":Wn,onClick:()=>on(k=>!k)},b?"视图设置":"View settings"),n&&!Z&&e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:324:2326",className:"demo-frame-scope"},we.includes(q)?b?"当前帧支持三维":"3D available for this frame":b?"当前帧仅高度与序列数据":"Height and sequence data for this frame")),mt&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:325:25",className:"main-field-switch"},e.createElement("strong",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:326:9"},b?"三维显示":"3D display"),Cs,q!=null&&!js&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:327:45",className:"velocity-frame-options"},e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:328:11"},bt?b?`帧 ${q} 无速度场。查看速度帧`:`No velocity field for frame ${q}. Open a velocity frame`:b?"此样例未提供速度场。":"This example has no velocity field."),bt&&Xe.map(k=>e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:329:49","data-os-action":"",key:k,type:"button",onClick:()=>pt("velocity",k),"aria-label":b?`查看 ${k} 帧速度场`:`Show velocity at frame ${k}`},k)))),je&&["3d","height","slices"].includes(a)&&e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:333:67",className:"linked-native-point","aria-label":b?"联动选点":"Linked point"},e.createElement("strong",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:334:9"},b?"三维选点":"3D selection")," (",je.x,", ",je.y,", ",je.z,")",e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:335:9"},"XZ (",je.world[0].toFixed(4),", ",je.world[2].toFixed(4),")"),e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:336:9"},b?"原生 Y 层":"Native Y layer"," ",je.y," · Y ",je.world[1].toFixed(4))),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:338:7",className:Je?"analysis-linked-layout":"analysis-flat-layout"},e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:339:7",className:"demo-geometry-panel"+(Je?" linked-3d":""),hidden:n&&a!=="3d"&&!Je,"data-loading":Je&&(!Oe||ge!==q)?"true":"false"},Je&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:341:19",className:"linked-3d-heading",role:"group","aria-label":b?"同步三维视图":"Linked 3D view"},e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:341:109"},e.createElement("b",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:341:114"},b?"同步三维视图":"Linked 3D view"),e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:341:151","data-os-action":"",type:"button",onClick:()=>s("3d")},b?"打开主视图":"Open main view")),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:342:9"},b?"帧":"Frame"," ",q," · ",Ce==="velocity"?b?"速度场":"Velocity":"SDF"," · ",ae.toUpperCase()," ",ae==="oblique"?Re+"%":"#"+_e),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:343:9"},te.mode==="split"?ie?"GT":b?"左 GT · 右预测":"Left GT · right prediction":te.mode==="overlay"&&Ce==="velocity"?Bn==="speed"?b?"蓝：偏慢 · 橙：偏快":"Blue: slower · orange: faster":Bn==="angle"?b?"流向夹角 · 0–180°":"Direction angle · 0–180°":Bn==="arrows"?b?"双箭头":"Paired arrows":b?"向量误差":"Vector error":te.mode==="overlay"?b?"叠加 · GT / 预测":"Overlay · GT / prediction":te.mode),a==="height"&&ft?.value?.corners&&e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:344:67"},b?"黄框：高度 ROI 的 XZ 投影":"Yellow frame: height ROI footprint"),Z&&e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:345:36"},b?"三维参考帧":"3D reference frame"," ",e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:345:77","data-os-action":"","aria-label":"3D reference frame",value:q,onChange:k=>Hn(+k.target.value)},[1001,1049,1096].map(k=>e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:345:208",key:k},k)))),Ie&&e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:346:16",role:"status"},b?"正在更新当前帧与切面…":"Updating frame and section…")),pn&&e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:346:115",className:"demo-surface-scope"},b?"原生 SDF 三维表面 · 支持精细／均衡显示；高度与 ROI 使用同一帧。体积场与速度切片另有覆盖范围。":"Native SDF 3D surface · Fine / Balanced display; same-frame height and ROI. Volume and velocity slices have separate coverage."),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:347:7",id:"analysis-spatial",className:"v2-section-heading"},!n&&e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:347:82"},"01"),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:347:98"},e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:347:103"},b?"3D 空间分析":"3D spatial analysis"),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:347:148"},ie?b?"选择当前帧，查看三维场与同一位置的切片。":"Choose a frame and inspect its 3D field and synchronized slice.":b?"选择当前帧，比较三维形状与同一位置的场切片。":"Choose a frame and compare geometry and field values at the same section.")),M&&t&&e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:347:400",className:"demo-time-jump",href:"#analysis-summary"},b?"查看时间分析 ↓":"View time analysis ↓")),t&&q!=null&&!we.includes(q)?e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:348:65",role:"status",className:"reference-scope"},b?`帧 ${q} 无三维缓存。仍可查看此帧的高度图和指标；未替换为邻帧。`:`Frame ${q} has no geometry cache. Height maps and metrics retain this exact frame.`,n&&e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:348:268","data-os-action":"",onClick:()=>s("height")},b?"查看此帧高度与 ROI":"View this frame’s height & ROI")):vn?e.createElement(Wi,{onVelocityPick:ti,onOverlayStyle:ds,velocityVolume:se?.snapshot.data.groups?.velocity,onGlyphPickPause:()=>U.current?.pause(),onGlyphMode:ls,onShading:ma,inspection:Ie?null:mi,onSceneError:xe,controlRef:ce,key:f.id,onCameraChange:ei,frameSplit:_,displayedFrame:ge,labels:f.labels,geometry:se?.geometry,settings:te,bounds:ai,loadingFrame:Ie?q:null,error:null}):e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:348:395",className:"demo-geometry-start"},e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:348:432"},b?"高度分析已可使用。三维视图每帧约25 MB，点击后加载。":"Height analysis is ready. The 3D view loads about 25 MB for the selected frame."),e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:348:556","data-os-action":"",type:"button",onClick:()=>En(!0)},b?"打开当前帧三维":"Open current frame in 3D")),vn&&(!t||we.includes(q))&&e.createElement(Vr,{controlRef:U,initialPlayback:W?.playback,active:C&&!v&&(!n||a==="3d"),frameSplit:_,frames:we,displayedFrame:ge,requestedFrame:q,status:f.status||"ready",loading:Ie,onFrame:ot,onScrubbing:k=>bn.current?.frames.setScrubbing(k)})),M&&Ss,za(ne)&&["report","slices"].includes(a)&&e.createElement(Ir,{zh:b}),t&&d?.id==="best-1027"&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:354:50",hidden:a!=="report"},e.createElement(q0,{control:z,bundle:t,catalog:[d],language:A,onReady:k=>{U.current?.pause(),We(1049),k||s("report")}})),bi,n&&Y&&(ie&&["height","time"].includes(a)||a==="report")&&e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:359:110",className:"reference-scope"},a==="report"?b?"此样例没有96帧协议报告。可保存或恢复场比较方案；切片报告从“场切片”导出。":"This sample has no96-frame protocol report. Save or restore field views here; export slice reports from Field slices.":b?"此样例只有Ground Truth，无配对误差。请查看三维、场切片与探针。":"This sample contains Ground Truth only, without paired errors. Inspect3D, field slices and probes.",e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:359:475","data-os-action":"",onClick:()=>s("slices")},b?"查看场切片":"Open field slices")),e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:360:7",hidden:n&&a!==R,className:"analysis-source"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:360:98"},b?"数据与显示说明":"Data and display details"),e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:360:158",className:"field-saved-note"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:360:196"},ie?B("Single dataset preview — no comparison scores"):`Evaluation: ${Object.values(f.settings?.sdf||{}).some(k=>k?.semantics==="water_interior")?"conditional GT-water distance support":f.settings?.sdfEvaluationRegion==="gt_water"?"GT water only":"full domain"} · Saved settings`),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:360:518"},d?.metrics?.reconstructionEvaluation?b?"Best_1027 三帧本地参考结果。原生场指标、俯视高度指标和水下 0.1 m 速度指标使用各自明确的有效域；查看下方计算规则。":"Best_1027 three-frame local reference. Native-volume, top-down height and underwater 0.1 m metrics use separate documented supports; see the protocol below.":y?ie?"Ground Truth fields are shown for inspection. This example contains no prediction and has no error metrics.":"Precomputed results retain the original comparison settings and validity masks. Conditional GT-water distance scores describe their valid support only. Occupancy and surface metrics use separate validity rules; unsupported metrics remain N/A. This example is not a model-ranking benchmark. 3D and slices show the saved aligned fields.":B("Results use the saved comparison settings. Create a new comparison after changing declarations. Occupancy and surface metrics have separate validity rules. Original scores are not certified for model ranking; use Results Library common-support evaluation. 3D and slices show the original aligned fields."))),y&&e.createElement(Xi,{context:li,busy:Ie})),e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:363:7",hidden:n&&a!==(Y?"height":R),open:!t,className:"legacy-height-analysis"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:363:148"},t?b?"旧预览协议 · 三帧高度诊断":"Legacy preview protocol · three-frame height diagnosis":b?"高度诊断":"Height diagnosis"),d?.metrics?.reconstructionEvaluation&&e.createElement(u0,{protocol:d.metrics.reconstructionEvaluation,frame:se?.snapshot.data,lattice:ye,frameNumber:ge,busy:Ie||ge!==q||Ce!==m,onFrame:ot}),!ie&&m==="sdf"&&e.createElement(m0,{frame:se?.snapshot.data,lattice:ye,comparison:f,plane:te.plane,sliceIndex:te.sliceIndex,rotationAxis:te.rotationAxis,angle:te.angle,sectionPercent:te.sectionPercent,frameNumber:ge,busy:Ie||ge!==q||Ce!==m})),e.createElement("section",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:368:7",hidden:n&&a!=="slices",id:"analysis-slices",className:"field-slices"},za(ne)&&!Z&&e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:368:180","data-os-action":"",type:"button",onClick:()=>P()},b?"打开三帧速度对照":"Open three-frame velocity comparison"),I?e.createElement(e.Fragment,null,e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:368:324","data-os-action":"",onClick:()=>N(null)},b?"返回原场切片":"Back to original field slices"),I.comparison?e.createElement($l,{key:I.key,restored:I.restored}):e.createElement(Rl,{onLayer:X?ci:void 0,surface:I.surface,markView:I.markView,key:I.key,frameNumber:q,request:I.request,restored:I.restored})):e.createElement(e.Fragment,null,e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:368:819"},B("Synchronized slices & probe")),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:368:863",className:"v2-mode-caption"},Ce==="sdf"?ie?b?"GT 单场切片，不含比较误差。":"GT field slices only; no comparison errors.":b?"此处为 SDF 场差值（B−A），不等于水面高度差。":"This is the SDF field difference (B−A), not water-surface height error.":b?"速度场切片与探针；瞬时矢量不是粒子轨迹。":"Velocity slices and probes; instantaneous vectors are not particle paths."),pn?e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:368:1221",className:"reference-scope"},e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:368:1254"},b?"本帧已提供真实三维表面、高度与 ROI；完整体积场切片仅发布了以下三帧。切换帧会明确改变当前帧号。":"This frame has its actual 3D surface, height and ROI. Full volume slices are published for the three frames below. Choosing one explicitly changes the frame."),Xe.map(k=>e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:368:1498","data-os-action":"",key:k,onClick:()=>Hn(k)},k))):di?e.createElement(Ti,{linkedProbe:!!je&&Oe,reportReady:Oe&&!v,captureScene:()=>{if(!Oe||v)throw Error(b?"等待当前帧与三维加载完成。":"Wait for the current frame and 3D.");return U.current?.pause(),ce.current.capture()},reportLabels:{a:f.labels?.gt?.displayName||"Ground Truth",b:f.labels?.prediction?.displayName||"Prediction"},savedMetrics:Gn,region:ie?null:lt,onRegion:si,inspectionContext:Fe,onInspection:Lc,busy:Ie||ge!==q||se?.settings!==en,errorScale:es,onErrorScale:ns,frameNumber:ge,frameSplit:_,exportStem:ha,viewMetadata:dt,rotationAxis:te.rotationAxis,angle:te.angle,sectionPercent:te.sectionPercent,frame:se.snapshot.data,group:Ce,plane:te.plane,sliceIndex:te.sliceIndex,crosshair:Ea,onCrosshair:ii,component:te.component,fixedRange:ys.sourceRange,lattice:ye,single:ie,label:"Ground Truth"}):e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:368:2770",role:"status"},Ie?`${B("Loading")} ${q}…`:B("No field samples available for this view.")))),!M&&Ss,!ie&&e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:370:17",open:!n,hidden:n&&a!==R,className:"demo-legacy-sequence"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:370:135"},b?"旧预览协议 · 三帧序列诊断":"Legacy preview protocol · three-frame sequence diagnostics"),e.createElement("section",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:370:236",className:"v2-field-temporal","aria-label":b?"时间分析":"Temporal analysis"},e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:370:318",className:"v2-section-heading"},e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:370:354"},"02"),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:370:369"},e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:370:374"},b?"时间分析":"Temporal analysis"),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:370:414"},b?"保留逐帧绝对误差与序列统计。只能跳转到已有三维数据的帧。":"Absolute errors and sequence statistics. Frame navigation is available only where geometry exists."))),e.createElement(o0,{frameSplit:_,onReviewSetup:Kc,comparisonId:ha,frames:we,expectedFrames:h,metrics:zn,groups:f.availableGroups,group:Ce,status:f.status,currentFrame:ge,onFrame:ot,sdfUnit:Aa(se?.snapshot.data,"sdf").unit||f.settings?.sdf?.gt?.unit||"unit undeclared",velocityUnit:Aa(se?.snapshot.data,"velocity").unit||f.settings?.velocity?.gt?.unit||"unit undeclared"}))),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:372:7",hidden:n,className:"field-memory"},ni,d?.metrics?.reconstructionEvaluation?b?" · 本地三帧数据 · 按需加载":" · Local three-frame data · Loaded on demand":y?" · Published samples · Geometry prepared in your browser":B(" · Geometry prepared off the UI thread · No cloud upload")))),e.createElement("aside",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:375:5",className:"field-results",hidden:n&&(!Y||!["time","report"].includes(a))},t&&e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:375:131",className:"reference-scope"},b?"旧预览协议 · 三帧空间诊断":"Legacy preview protocol · three-frame spatial diagnostics"),e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:375:248"},B("Current frame "),e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:375:274"},ge??"—")),ie?e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:375:312"},B("Single dataset preview — no comparison scores")):e.createElement($r,{frame:ge,metrics:Gn,group:Ce,unit:qn?.unit||""}),!ie&&e.createElement(e.Fragment,null,e.createElement(r0,{group:Ce}),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:376:56",className:"field-exports"},e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:376:87"},B("Export results")),e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:376:118","data-os-action":"",disabled:!zn,onClick:()=>Oa(`${ha}_metrics.json`,JSON.stringify({...zn,current_view:dt},null,2))},B("Export JSON")),e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:376:296","data-os-action":"",disabled:!Gn,onClick:()=>{const k=["metric,value",...Object.entries(dt).map(([H,V])=>[H,typeof V=="object"?JSON.stringify(V):String(V??"")].map(J=>'"'+String(J).replaceAll('"','""')+'"').join(",")),`sdf_error_region,${Gn?.sdf?.evaluationRegion||f.settings?.sdfEvaluationRegion||"full_domain"}`];for(const[H,V]of Object.entries(Gn?.[Ce]||{}))(typeof V=="number"||V===null)&&k.push(`${H},${V??""}`);Oa(`${ha}_${ge}_${Ce}.csv`,k.join(`
`),"text/csv")}},B("Export CSV")),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:376:918"},y?"Download saved values: JSON includes all metric records; CSV describes the displayed frame.":B("JSON: sequence · CSV: displayed frame. Saved-result ZIP includes source names and complete provenance.")))),!ie&&e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:377:17"},B("All metric averages and per-frame values are below the synchronized slices. Use the SDF / Velocity tabs to switch field groups."))))}const Hl={kind:"field",parse:h0,read:g0,write:y0,validate:cn,error:x0,title:n=>n?"场比较方案":"Saved field views",intro:n=>n?"保存样例、SDF/速度分量、帧、切面、探针、视角、色标、透明度、箭头与播放设置。恢复时重新读取数据并暂停播放；已有评分保持不变。":"Save sample, SDF/velocity component, frame, section, probe, camera, color scales, opacity, arrows and playback settings. Restore reloads data and pauses playback; saved scores are unchanged.",describe:(n,a)=>`${n.settings.caseId} · ${n.settings.group.toUpperCase()}${n.settings.group==="velocity"?" / "+n.settings.component:""} · ${a?"帧":"Frame"} ${n.settings.frame} · ${n.settings.plane==="oblique"?(n.settings.rotationAxis||"y").toUpperCase()+" "+n.settings.angle+"° / "+n.settings.sectionPercent+"%":n.settings.plane.toUpperCase()+" / "+n.settings.sliceIndex}`,storageNote:n=>n?"场方案与水面方案分开保存。仅保存在当前浏览器和网站地址；清除网站数据会丢失，请导出备份。导入文件仅在本机读取，不含场数据或计算结果；仅支持场比较方案 JSON。":"Field views are stored separately from wave views in this browser and site address. Clearing site data removes them; export a backup. Imports are read locally and contain no field arrays or computed results. Only field-view JSON is supported."};function ql(n){return e.createElement(Zi,{adapter:Hl,...n})}function wt(n){if(new TextEncoder().encode(n).length>2*1024*1024)throw Error("Analysis file too large");let a;try{a=JSON.parse(n)}catch{throw Error("Invalid analysis JSON")}if(a?.schema==="oceanscope.paired-case.v1")return{kind:"pairedCase",value:a};if(a?.schema===zt)return{kind:"report",value:a};if(a?.schema===qt)return{kind:"velocity",value:a};if(a?.schema===Yt)return{kind:"velocityComparison",value:a};if(a?.schema===Ha)return{kind:"field",value:a};if(a&&!a.schema&&a.schemaVersion===1&&typeof a.runId=="string"&&a.protocol&&a.datasetA&&a.datasetB&&"subset"in a&&"metric"in a&&"frame"in a)return{kind:"selection",value:a};throw Error("Unsupported analysis file")}const Ll={pairedCase:["一页案例：核验水面和速度资源，恢复热点、双剖面、切片与配对流线。","One-page case: verify both resources and restore the hotspot, profiles, slice and streamlines."],velocityComparison:["三帧速度对照：核验三个速度资源，恢复固定选区、探针、箭头和第三图。","Three-frame velocity comparison: verify all three resources and restore the fixed ROI, probe, arrows, and comparison map."],velocity:["速度诊断报告：重新核验对应帧的速度资源，恢复切片、ROI、探针、箭头和方向阈值。","Velocity report: verify the selected frame’s velocity resource and restore the slice, ROI, probe, arrows, and direction threshold."],report:["完整分析报告：恢复帧、选区、探针、截面和可用相机；重新核验资源。","Analysis report: restore frame, ROI, probe, section and available camera; verify resources again."],field:["场比较方案：恢复数据组合、三维帧、显示设置与相机；不含水面高度选区。","Field view: restore dataset, geometry frame, display settings and camera; no surface-height ROI."],selection:["序列选择：只恢复帧号、帧集合与曲线类型；不恢复选区或相机。","Sequence selection: restore only frame, frame set and curve; no ROI or camera."]};function Yl({onRestore:n,zh:a,controlRef:s}){const[t,c]=E.useState(""),[i,o]=E.useState(""),[r,f]=E.useState(null),[l,m]=E.useState(""),[g,x]=E.useState(!1),h=E.useRef(null);function u(){h.current&&(h.current.abort(),h.current=null,x(!1),m(a?"恢复已取消，保留后续操作。":"Restore cancelled; newer actions retained."))}E.useImperativeHandle(s,()=>({cancel:u})),E.useEffect(()=>()=>h.current?.abort(),[]);let d;try{t.trim()&&(d=wt(t))}catch{}async function p(j){if(u(),!j)return;const S=new AbortController;h.current=S,f(null),c(""),o(j.name),m("");try{if(j.size>2*1024*1024)throw Error("Analysis file too large");const v=await j.text();S.signal.throwIfAborted(),wt(v),c(v)}catch(v){S.signal.aborted||f(v)}finally{h.current===S&&(h.current=null)}}async function w(){u();const j=new AbortController;h.current=j,x(!0),f(null),m(a?"正在识别文件并核验资源…":"Recognizing the file and verifying resources…");try{const S=wt(t);await n(t,S,j.signal),j.signal.throwIfAborted(),m(a?"恢复完成。请核对当前帧和范围；导出前重新生成报告。":"Restored. Check frame and scope; create a fresh report before exporting.")}catch(S){j.signal.aborted||(f(S),m(""))}finally{h.current===j&&(h.current=null,x(!1))}}return e.createElement("details",{"data-os-loc":"src/RestoreAnalysis.jsx:11:9",id:"restore-analysis",className:"restore-analysis"},e.createElement("summary",{"data-os-loc":"src/RestoreAnalysis.jsx:11:69","data-review-title":"","data-review-id":"restore-analysis"},a?"恢复分析 · 打开 JSON":"Restore analysis · Open JSON"),e.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:195"},a?"选择文件或粘贴内容，工具会识别恢复范围。文件在本机读取，仍需匹配的数据资源。":"Choose a file or paste its contents. The tool identifies what it restores. Files stay local; matching data resources are required."),e.createElement("label",{"data-os-loc":"src/RestoreAnalysis.jsx:11:380"},a?"选择分析文件":"Choose analysis file"," ",e.createElement("input",{"data-os-loc":"src/RestoreAnalysis.jsx:11:424","data-os-action":"",type:"file",accept:".json,application/json","aria-label":"Analysis JSON file",onChange:j=>{p(j.target.files?.[0]),j.target.value=""}})),i&&e.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:587"},i),e.createElement("label",{"data-os-loc":"src/RestoreAnalysis.jsx:11:605"},a?"或粘贴 JSON":"Or paste JSON",e.createElement("textarea",{"data-os-loc":"src/RestoreAnalysis.jsx:11:643","data-os-action":"","aria-label":"Analysis JSON text",rows:"4",value:t,onChange:j=>{u(),c(j.target.value),o(""),f(null),m("")}})),d&&e.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:823",className:"import-kind"},Ll[d.kind][a?0:1]),e.createElement("div",{"data-os-loc":"src/RestoreAnalysis.jsx:11:900",className:"reference-controls"},e.createElement("button",{"data-os-loc":"src/RestoreAnalysis.jsx:11:936","data-os-action":"",disabled:!t.trim()||g,onClick:w},a?"恢复这份分析":"Restore this analysis"),g&&e.createElement("button",{"data-os-loc":"src/RestoreAnalysis.jsx:11:1045","data-os-action":"",onClick:u},a?"取消恢复":"Cancel restore")),e.createElement(Ye,{error:r,zh:a}),e.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:1152",role:"status","aria-live":"polite"},l))}const Ul=`{
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
`,Jl=`{
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
`,Kl=`# OceanScope public source summary

This release presents supplied scene and model descriptions as claims, not independently audited training history. Original machine paths and source prose are omitted. Numerical results, masks and protocol identities are retained.

- Model: "Model A"
- Scene: "v2 Gentle clean full-SDF velocity"
- Camera configuration: ["camera29","camera32","camera35","camera02","camera05","camera08","camera11","camera14","camera17","camera20","camera23","camera26"]
- Source frame rate: "24 fps; 1001–1096"
- Train / validation / test: "v2 all96 test; never used for training/checkpoint choice"
- OceanBox training scenes: ["variant_00000","variant_00001","variant_00002","variant_00003","variant_00004","variant_00008"]
- Preprocessing: "Temporal smoothing"
- Unit evidence: "source convention; not independently calibrated"
`,Ql=`# OceanScope public source summary

This release presents supplied scene and model descriptions as claims, not independently audited training history. Original machine paths and source prose are omitted. Numerical results, masks and protocol identities are retained.

- Model: "Model A"
- Scene: "v2 Gentle clean full-SDF velocity"
- Camera configuration: ["camera29","camera32","camera35","camera02","camera05","camera08","camera11","camera14","camera17","camera20","camera23","camera26"]
- Source frame rate: "24 fps; 1001–1096"
- Train / validation / test: "v2 all96 test; never used for training/checkpoint choice"
- OceanBox training scenes: ["variant_00000","variant_00001","variant_00002","variant_00003","variant_00004","variant_00008"]
- Preprocessing: "Temporal smoothing"
- Unit evidence: "source convention; not independently calibrated"
`;function ed(n,a){const s=[];(n?.gtRole!=="gt"||a?.gtRole!=="gt"||n?.predictionRole!=="prediction"||a?.predictionRole!=="prediction")&&s.push("Explicit GT/prediction roles required");for(const c of["scene","gtManifest","protocolSha256","frameIds","domain","unitStatus"])(n?.[c]==null||a?.[c]==null||Pn(n[c])!==Pn(a[c]))&&s.push(`Different or unknown ${c}`);const t=["camera","model","preprocessing"].filter(c=>Pn(n?.[c])!==Pn(a?.[c]));return{comparable:s.length===0,blockedReasons:s,differences:t}}async function nd(n,a,s){const t=JSON.parse(n);if(t.schemaVersion!==1||t.runId!==a.runId||t.protocolSha256!==a.protocol.sourceScriptSha256||t.manifestA!==a.datasetA.manifestSha256||t.manifestB!==a.datasetB.manifestSha256)throw Error("Declaration identity mismatch");if(!Array.isArray(t.entries)||new Set(t.entries.map(i=>i.id)).size!==t.entries.length)throw Error("Invalid declarations");const c={gtIdentity:t.manifestA,predictionIdentity:t.manifestB};for(const i of t.entries){if(!["claimed","verified","unknown"].includes(i.status)||!i.id||!i.label)throw Error("Invalid declaration status");if(i.status==="unknown"&&i.value!==null)throw Error("Unknown declaration must have no asserted value");if(i.status==="verified"&&(!Object.hasOwn(c,i.id)||i.value!==c[i.id]))throw Error("Unsupported independent verification claim");if(i.status==="claimed"&&!i.source)throw Error("Claim needs its source");if(i.source&&(typeof s[i.source.file]!="string"||await Is(s[i.source.file])!==i.source.sha256))throw Error("Declaration source checksum mismatch")}if(t.conditions?.gtManifest!==t.manifestA||t.conditions.protocolSha256!==t.protocolSha256||Pn(t.conditions.frameIds)!==Pn(a.frameIds)||!ed(t.conditions,t.conditions).comparable)throw Error("Declaration conditions mismatch");return{...t,sha256:await Is(n)}}async function ad(n){if(n.id!=="best-1027")return null;const a=await Ai(Ul,aa,n);return{...a,verifiedPayloadSha256:aa.sha256,declarations:await nd(Jl,a,{"METRICS.md":Kl,"SPLIT.md":Ql})}}function td({analysisSection:n,onAnalysisSection:a,item:s,active:t,viewApiRef:c,initialView:i,startWithVelocity:o,onViewReady:r,onViewRestored:f,restoring:l,onCancelImport:m}){const{language:g}=me(),x=g==="zh",[h,u]=E.useState(()=>i?.settings.group||((o||s.comparison.settings?.previewOnly)&&s.comparison.availableGroups.includes("velocity")?"velocity":"sdf")),[d,p]=E.useState(null),[w,j]=E.useState(""),S=E.useRef(sc()),[v,_]=E.useState(0);E.useEffect(()=>(p(null),j(""),S.current.run(()=>ad(s)).then(A=>{A&&p(A)}).catch(A=>j(A.message)),()=>S.current.cancel()),[s,v]);const y=!!s.comparison.settings?.previewOnly,C=!!s.metrics?.reconstructionEvaluation,B=e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:22:14",className:"public-field-provenance"},e.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:22:55"},s.description),e.createElement("dl",{"data-os-loc":"src/FieldSamples.jsx:22:80"},e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:23:3"},e.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:23:8"},"Ground Truth"),e.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:23:29"},s.comparison.labels?.gt?.displayName)),e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:24:3"},e.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:24:8"},"Prediction"),e.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:24:27"},y?x?"未提供；不计算误差":"Not included; no error scores":s.comparison.labels?.prediction?.displayName)),e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:25:3"},e.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:25:8"},x?"三维表面 / 体积场":"3D surface / volume frames"),e.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:25:63"},ta(s).length?`1001–1096 / ${s.processing.frames.map(A=>A.frame).join(", ")}`:s.processing.frames.map(A=>A.frame).join(", "))),e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:26:3"},e.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:26:8"},x?"数据语义":"Data semantics"),e.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:26:45"},C?x?"原分辨率有效 SDF/速度对比；三帧高度与水下速度评估，采用明确的本地计算规则。":"Native valid SDF/velocity comparison; three-frame height and underwater evaluation under an explicit local protocol.":y?x?"单位未声明":"Units undeclared":x?"条件性 GT 水体距离误差；外部填充值不参与距离评分":"Conditional GT-water distance scores; filled exterior excluded from distance scoring"))));return e.createElement(Gl,{focusedLayout:!0,workspace:n,onWorkspace:a,unifiedRestore:!0,onCancelImport:m,onRetryEvaluation:()=>_(A=>A+1),evaluation:d,evaluationError:w,comparison:s.comparison,processing:s.processing,activeGroup:h,onActiveGroup:u,setup:B,expectedFrames:Object.keys(s.metrics?.frames||{}).map(Number),metricsOverride:s.metrics||null,sourceCase:s,viewApiRef:c,initialView:i,onViewReady:r,onViewRestored:f,restoring:l,readOnly:!0,active:t})}function hd({request:n,active:a=!0,analysisSection:s="3d",onAnalysisSection:t}){const{tr:c,language:i}=me(),o=i==="zh",r=E.useRef(null),f=E.useRef(0),l=E.useRef(null),m=E.useRef(null),[g]=E.useState(()=>new URLSearchParams(location.search).get("field")==="velocity"&&["","#analysis-spatial"].includes(location.hash));E.useEffect(()=>()=>m.current?.reject(new DOMException("Cancelled","AbortError")),[]),E.useEffect(()=>{(!a||s!=="report")&&l.current?.cancel()},[a,s]);const[x,h]=E.useState(0),[u,d]=E.useState(null),[p,w]=E.useState(!1),[j,S]=E.useState(!1),[v,_]=E.useState(null),[y,C]=E.useState(null),[B,A]=E.useState(""),[b,M]=E.useState(""),[R,I]=E.useState(""),[N,z]=E.useState(0),[$,X]=E.useState(!1);E.useEffect(()=>{let T=!0;return ki().then(P=>{if(!T)return;Fr(P.cases),C(P);const W=g?"best-1027":St("public-case")?.id,ce=P.cases.some(U=>U.id===W)?W:P.defaultCaseId||P.cases[0].id;A(ce),M(ce),I("")}).catch(P=>{T&&I(P.message)}),()=>{T=!1}},[N,g]),E.useEffect(()=>{n?.id&&y?.cases.some(T=>T.id===n.id)&&Z(n.id)},[n,y]),E.useEffect(()=>{B&&fc("public-case",{id:B})},[B]);function Z(T){l.current?.cancel(),h(++f.current),r.current?.pause(),d(null),S(!1),w(!1),_(null),A(T),M(T),X(!1)}function ne(T){try{const P=cn(T,y.cases);r.current?.pause();const W=++f.current;h(W),w(!1),S(!0),_(null),X(!1),A(P.settings.caseId),M(P.settings.caseId),d({doc:P,token:W})}catch(P){_({error:P})}}async function D(T,P,W){if(W.throwIfAborted(),P.kind!=="field"){if(!r.current?.restoreAnalysis)throw Error("Analysis is not ready");return r.current.restoreAnalysis(T,P.kind,W)}const ce=cn(P.value,y.cases);return new Promise((U,ue)=>{const re=()=>{m.current?.signal===W&&(m.current=null,++f.current,d(null),S(!1),ue(new DOMException("Cancelled","AbortError")))};W.addEventListener("abort",re,{once:!0});const xe=O=>{W.removeEventListener("abort",re),O?ue(O):U()};m.current={signal:W,finish:xe,reject:ue},ne(ce)})}function K(T,P){if(T!==f.current)return;const W=m.current;m.current=null,W?.finish(P),S(!1),_(P?{error:P}:{cn:"场方案已恢复：样例、帧、切面、探针、视角与显示设置已同步，播放已暂停。",en:"Field view restored: sample, frame, section, probe, camera and display settings are synchronized. Playback paused."})}const F=y?.cases.find(T=>T.id===B),L=y?.cases.find(T=>T.id===b);return F?.comparison.settings?.previewOnly,e.createElement("section",{"data-os-loc":"src/FieldSamples.jsx:63:9",className:"public-field-demo","aria-label":"Published field examples"},e.createElement("header",{"data-os-loc":"src/FieldSamples.jsx:64:3",className:"demo-case-header"},e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:64:40"},e.createElement("h1",{"data-os-loc":"src/FieldSamples.jsx:64:45"},F?.name||(o?"场分析":"Field analysis")),e.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:64:95"},F&&(o?`${ta(F).length||F.processing.frames.length}帧三维 · ${F.processing.frames.length}帧体积场`:`${ta(F).length||F.processing.frames.length} 3D frames · ${F.processing.frames.length} volume frames`))),e.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:64:357","data-os-action":"",disabled:j,"aria-expanded":$,onClick:()=>{M(B),X(T=>!T)}},o?"数据与示例":"Datasets & examples")),R?e.createElement(Ye,{error:R,zh:o,resource:o?"示例目录":"Sample catalogue",onRetry:()=>z(T=>T+1)}):y?e.createElement(e.Fragment,null,$&&e.createElement("section",{"data-os-loc":"src/FieldSamples.jsx:67:14",className:"sample-setup","aria-label":"Sample dataset selection"},e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:67:86",className:"sample-setup-heading"},e.createElement("h2",{"data-os-loc":"src/FieldSamples.jsx:67:124"},o?"数据与对比设置":"Datasets & comparison setup"),e.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:67:177"},o?"选择已发布的数据组合，打开已有分析结果。":"Choose a published dataset pair to open its existing analysis.")),e.createElement("label",{"data-os-loc":"src/FieldSamples.jsx:68:5"},o?"示例组合":"Published example",e.createElement("select",{"data-os-loc":"src/FieldSamples.jsx:68:43","data-os-action":"","aria-label":"Published field example",value:b,onChange:T=>M(T.target.value)},y.cases.map(T=>e.createElement("option",{"data-os-loc":"src/FieldSamples.jsx:68:168",key:T.id,value:T.id},T.name)))),L&&e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:69:13",className:"sample-dataset-grid"},e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:69:50",className:"sample-source"},e.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:69:81",className:"source-role"},"GROUND TRUTH"),e.createElement("h3",{"data-os-loc":"src/FieldSamples.jsx:69:130"},L.comparison.labels?.gt?.displayName),e.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:69:181"},L.comparison.availableGroups.join(" + ").toUpperCase()),e.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:69:248"},o?"可用":"Ready")),e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:69:284",className:"sample-source"},e.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:69:315",className:"source-role prediction"},"PREDICTION"),e.createElement("h3",{"data-os-loc":"src/FieldSamples.jsx:69:373"},L.comparison.settings?.previewOnly?o?"无预测数据":"No prediction included":L.comparison.labels?.prediction?.displayName),e.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:69:509"},L.comparison.settings?.previewOnly?o?"独立查看，不显示误差指标":"Standalone inspection without error metrics":o?"已对齐的场数据 · 已记录的计算规则":"Aligned fields · Recorded evaluation protocol"))),e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:70:5",className:"sample-actions"},e.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:70:37"},o?"这里选择已发布案例。要分析自己的 GT 和预测 VDB，请进入":"Choose a published case here. To compare your own GT and prediction VDBs, open"," ",e.createElement("a",{"data-os-loc":"src/FieldSamples.jsx:70:163","data-os-action":"",href:"#workspace-experiments",onClick:()=>X(!1)},o?"我的实验":"My experiments")),e.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:70:267","data-os-action":"",onClick:()=>X(!1)},o?"取消":"Cancel"),e.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:70:334","data-os-action":"",className:"primary",onClick:()=>{Z(b)}},L?.comparison.settings?.previewOnly?o?"查看 Ground Truth":"View Ground Truth":o?"打开已有对比":"Open saved comparison"))),F&&e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:72:13",className:"demo-session-tools",hidden:s!=="report"},e.createElement(Yl,{controlRef:l,zh:o,onRestore:D}),e.createElement(ql,{unifiedRestore:!0,catalog:y.cases,ready:p,restoring:j,onCapture:()=>r.current.captureView(),onRestore:ne,restoreNotice:v})),e.createElement(td,{startWithVelocity:g&&x===0&&F.id==="best-1027",analysisSection:s,onAnalysisSection:t,onCancelImport:()=>l.current?.cancel(),key:`${F.id}:${x}`,item:F,active:a,viewApiRef:r,initialView:u?.doc,onViewReady:w,restoring:j,onViewRestored:T=>K(u?.token,T)}))):e.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:66:130",role:"status"},o?"正在加载示例…":"Loading samples…"))}export{hd as default};
