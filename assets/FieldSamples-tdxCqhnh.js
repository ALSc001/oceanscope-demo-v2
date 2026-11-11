import{v as zt,g as xc,p as Xt,a as vc,b as Ec,o as Zt,c as _c,s as wc,S as oa,d as fa,e as At,f as yi,h as Sc,i as jc,j as Cc}from"./surfaceResources-CFIdCr4P.js";import{r as j,R as n,u as fe,c as xi,s as Bc,d as vi,p as Ei,e as ra,f as Xn,v as Xa,g as Za,l as ma,h as Ga,i as Mn,j as la,k as ks,m as Ms,n as Ac,C as _i,o as kc,q as Mc,t as wi,x as Rc,y as Pc,z as Si,A as ji,B as Ba,D as Rs,E as Ps,F as Is,G as Ns,H as Ic,I as Nc,J as Fc,K as Oc,L as Tc,a as Dc,b as kt,w as Ci,M as Fs,N as Vn,O as $c}from"./workbench-7QmhisbO.js";import{d as ut,l as Wc}from"./publicData-Dh1-tQFp.js";import{W as Vc,m as zc,j as Xc,C as ht,k as Zc,O as Gc,a4 as Hc,l as qc,a5 as Lc,g as Yc,a as Uc,V as un,r as Jc,y as Kc,h as Aa,t as gt,v as Os,s as Ts,d as Ds,q as Qc,i as eo,B as $s,o as no,D as ao,w as Ws,u as Vs,p as to,a6 as so,x as io,a7 as zs,a8 as Xs,a9 as co,aa as oo,a0 as ro,ab as lo,ac as fo,ad as mo,ae as bo,af as po,ag as Bi,ah as uo,ai as ho,a2 as yt,_ as go,Y as yo,I as xo}from"./SectionRotation-DflGhv7u.js";import{b as vo,e as Zs,d as Eo,c as Gs}from"./comparisonExport-rG_qP9SP.js";import{e as _o}from"./verticalSection-DptfHDZh.js";const wo="539734f929b2d3d4a53adb2563bc9598e1cc8efcd33439f8a39db052bafb28bd",So="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",jo="gentle",Co="best1027",Bo="e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",Ao="323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",da={sha256:wo,protocolSha256:So,datasetA:jo,datasetB:Co,manifestA:Bo,manifestB:Ao},ko="oceanscope.velocity-alignment.v1",Mo=1001,Ro="best-1027",Po="partial",Io=!0,No={gt:{frame:1001,file:"clean_fullsdf_vel.1001.vdb",bytes:10508067,sha256:"8cd757ed7cecfe8f677a6e8994e053bcbb178e93a8c0b257a82c89b14de954be",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1001,file:"recon_fullsdf_vel.1001.vdb",bytes:10562288,sha256:"fd0ab7ff40ed007eb3543c6326ba10f7f98dbda59e094a0dbfbb2066b4212f26",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},Fo={frame:1001,url:"/data/velocity-raw/1001.ocfld.gz",packedBytes:15074066,packedSha256:"c1284e150f6c95880ae942c08fb3a54209096127c13ed9d14e4d48a8cac6a54b",decodedBytes:62391416,decodedSha256:"723f73f42097cede6faf03a7cd106af8d7aef55eabcdc4207b469fb9a1a4a197",roundtrip:"exact"},Oo={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},To={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},Do={gt:0,prediction:2856765473069345e-22},$o=2856765473069345e-22,Wo=["x","y","z"],Vo="ZYX",zo={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},Xo="m/s",Zo="Existing source convention only; no independent physical or time calibration.",Go="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",Ho={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},qo={resource:{frame:1001,url:"/data/fields/best-1027/1001.ocfld.gz",packedBytes:26128772,packedSha256:"3a504d78eefed6ef1a3e5fef3523f62eb7f0a13ae68e67e8cb23907f4b6f6f46",decodedBytes:99523224,decodedSha256:"8760d8da4ce6ac716b433ede5c787ba13baff142a4324fb03e13824f90e978f8"},comparison:{gt:{error:"vel.x values differ at 1363784 samples; max 2.8210940528072825e-16"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: vel.x values differ at 1363784 samples; max 2.8210940528072825e-16"],retainedUnchanged:!0},Lo="exact",Yo={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:179815,sha256:"6264bad6598a054b1ac18538a73305aa383761e97e67b4e8120f74a6f73fab06"},common:{count:177960,sha256:"33db691f210a15dd5e533103720e9708b363e05c66e4cc266f14413335d8371f"},computable:{count:177960,sha256:"33db691f210a15dd5e533103720e9708b363e05c66e4cc266f14413335d8371f"}},Uo=0,Jo=[],Ko="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",Qo={schema:ko,frame:Mo,caseId:Ro,status:Po,dataAndDomainVerified:Io,source:No,resource:Fo,lattice:Oo,originalLattices:To,cacheLatticeMaxDisplacement:Do,pairMaxDisplacement:$o,componentOrder:Wo,arrayOrder:Vo,vectorBasis:zo,unitClaim:Xo,unitEvidence:Zo,protocolSha256:Go,domainDefinition:Ho,legacyCache:qo,diagnosticRoundtrip:Lo,domain:Yo,nonfiniteExcluded:Uo,failures:Jo,scope:Ko},er="oceanscope.velocity-alignment.v1",nr=1049,ar="best-1027",tr="partial",sr=!0,ir={gt:{frame:1049,file:"clean_fullsdf_vel.1049.vdb",bytes:11105671,sha256:"a821ec84b9f2eecc09f234cdf05050e77e3572d6f9c3d46bce94d0a28f328df9",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1049,file:"recon_fullsdf_vel.1049.vdb",bytes:10571839,sha256:"ff18d054439135a9c39abc139aa628ca7dcb753dd46b389b86bde47747f5d4c3",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},cr={frame:1049,url:"/data/velocity-raw/1049.ocfld.gz",packedBytes:15261605,packedSha256:"913c1ddbec87d484f71905720334c90ca6ebccdad5c48a543f69eb405308e707",decodedBytes:62391416,decodedSha256:"403ff5ea6e2afcd3129761caa6a5adf7f2699e180d1733e85774ea1a55df4ef1",roundtrip:"exact"},or={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},rr={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},lr={gt:0,prediction:2856765473069345e-22},dr=2856765473069345e-22,fr=["x","y","z"],mr="ZYX",br={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},pr="m/s",ur="Existing source convention only; no independent physical or time calibration.",hr="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",gr={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},yr={resource:{frame:1049,url:"/data/fields/best-1027/1049.ocfld.gz",packedBytes:26633403,packedSha256:"1443fd356c49996f7b7bac3ab8d8ee9fc4b40d9a6d4a0734b2a0e6e2592c2548",decodedBytes:99523224,decodedSha256:"ad0deb564ccd2db1fc91e4db9f711acaa8f6c231e3acca426773f8bb0cbf851a"},comparison:{gt:{error:"sdf values differ at 2 samples; max 0.0"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: sdf values differ at 2 samples; max 0.0"],retainedUnchanged:!0},xr="exact",vr={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:189062,sha256:"adaf091d8684752b63cdf670a7f10b150720ed4342c7042ee4ee70311055d839"},common:{count:184957,sha256:"6367149b8f2ca91ca5e7dd4c5eeb75c22cf814b39535732dd9fb2f2a698599de"},computable:{count:184957,sha256:"6367149b8f2ca91ca5e7dd4c5eeb75c22cf814b39535732dd9fb2f2a698599de"}},Er=0,_r=[],wr="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",Sr={schema:er,frame:nr,caseId:ar,status:tr,dataAndDomainVerified:sr,source:ir,resource:cr,lattice:or,originalLattices:rr,cacheLatticeMaxDisplacement:lr,pairMaxDisplacement:dr,componentOrder:fr,arrayOrder:mr,vectorBasis:br,unitClaim:pr,unitEvidence:ur,protocolSha256:hr,domainDefinition:gr,legacyCache:yr,diagnosticRoundtrip:xr,domain:vr,nonfiniteExcluded:Er,failures:_r,scope:wr},jr="oceanscope.velocity-alignment.v1",Cr=1096,Br="best-1027",Ar="partial",kr=!0,Mr={gt:{frame:1096,file:"clean_fullsdf_vel.1096.vdb",bytes:11272288,sha256:"7153212dbf15d5970fab77d2c187a858fa5735447abfcd8dfc717fa1844d4e94",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1096,file:"recon_fullsdf_vel.1096.vdb",bytes:10500539,sha256:"16187d0cad3236b3ebef4900650d0b3cd98294ef9ab248088797a73365200db2",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},Rr={frame:1096,url:"/data/velocity-raw/1096.ocfld.gz",packedBytes:15329856,packedSha256:"a0731f4996fadbe7d2e7c9b5562250ead6a8cc817a2f7b1f44d393c45d86dd7d",decodedBytes:62391416,decodedSha256:"bfe8078ba7a9436b73b8906e210a8e7d8f0b312fc772c4ee0e68f9e282fedb9c",roundtrip:"exact"},Pr={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},Ir={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},Nr={gt:0,prediction:2856765473069345e-22},Fr=2856765473069345e-22,Or=["x","y","z"],Tr="ZYX",Dr={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},$r="m/s",Wr="Existing source convention only; no independent physical or time calibration.",Vr="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",zr={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},Xr={resource:{frame:1096,url:"/data/fields/best-1027/1096.ocfld.gz",packedBytes:26932173,packedSha256:"5900168e2e47a98c85f505558e49c754619e3824ea1404299d783fd7451dd0ee",decodedBytes:99523224,decodedSha256:"1cdb1261a33ed72f515bd59a75668467cbb8d7f78da7af6b360653cf6cbcb2f9"},comparison:{gt:{error:"sdf values differ at 1 samples; max 0.0"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: sdf values differ at 1 samples; max 0.0"],retainedUnchanged:!0},Zr="exact",Gr={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:223882,sha256:"3d3747b91823a8c0b8e2d7487c955abe70b257b49b9079a660ddb1112f7c5cf9"},common:{count:217252,sha256:"f4cca5ed859acd6e09a9ab9318b117c094d2647572e72b961768938e558395a8"},computable:{count:217252,sha256:"f4cca5ed859acd6e09a9ab9318b117c094d2647572e72b961768938e558395a8"}},Hr=0,qr=[],Lr="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",Yr={schema:jr,frame:Cr,caseId:Br,status:Ar,dataAndDomainVerified:kr,source:Mr,resource:Rr,lattice:Pr,originalLattices:Ir,cacheLatticeMaxDisplacement:Nr,pairMaxDisplacement:Fr,componentOrder:Or,arrayOrder:Tr,vectorBasis:Dr,unitClaim:$r,unitEvidence:Wr,protocolSha256:Vr,domainDefinition:zr,legacyCache:Xr,diagnosticRoundtrip:Zr,domain:Gr,nonfiniteExcluded:Hr,failures:qr,scope:Lr},Ur=new Map([[1001,Qo],[1049,Sr],[1096,Yr]]);function Rn(e){const a=Ur.get(e);return!a||a.frame!==e||a.caseId!=="best-1027"||!a.dataAndDomainVerified||a.diagnosticRoundtrip!=="exact"||a.resource.frame!==e||a.resource.url!==`/data/velocity-raw/${e}.ocfld.gz`||a.protocolSha256!==da.protocolSha256||a.source.gt.manifestSha256!==da.manifestA||a.source.prediction.manifestSha256!==da.manifestB?null:a}const Jr=[1001,1049,1096];async function Ai(e,a){const t=await new Promise((s,c)=>{const i=indexedDB.open("oceanscope-native-velocity",1);i.onupgradeneeded=()=>i.result.createObjectStore("files"),i.onsuccess=()=>s(i.result),i.onerror=()=>c(i.error)});try{return await new Promise((s,c)=>{const i=t.transaction("files",e),o=a(i.objectStore("files"));i.oncomplete=()=>s(o.result),i.onabort=()=>c(i.error),i.onerror=()=>c(i.error)})}finally{t.close()}}function Kr(e){return Ai("readonly",a=>a.get(e.packedSha256))}async function Qr(e){const a=Jr.map(Rn).find(t=>t.resource.packedBytes===e.size);if(!a)throw Error("Unsupported native velocity file size");return await zt(await e.arrayBuffer(),a.resource),await Ai("readwrite",t=>t.put(e,a.resource.packedSha256)),a.frame}function el({zh:e}){const[a,t]=j.useState(!1),[s,c]=j.useState("");async function i(o){const r=Array.from(o.target.files);if(o.target.value="",!r.length)return;t(!0);const f=[],d=[];for(const m of r)try{f.push(await Qr(m))}catch{d.push(m.name)}c([f.length&&(e?"本浏览器已保存核验帧 ":"Verified frames saved in this browser: ")+f.join(", "),d.length&&(e?"未能核验或保存，请核对文件和浏览器存储权限。":"Check the file and browser storage permission: ")+d.join(", ")].filter(Boolean).join(" · ")),t(!1),f.length&&window.dispatchEvent(new CustomEvent("oceanscope-velocity-files",{detail:f}))}return n.createElement("section",{"data-os-loc":"src/field/VelocityFiles.jsx:24:10",className:"reference-scope","aria-label":"Native velocity resources","aria-busy":a},n.createElement("label",{"data-os-loc":"src/field/VelocityFiles.jsx:25:5"},e?"在本机选择原生速度文件":"Choose native velocity files on this device"," ",n.createElement("input",{"data-os-loc":"src/field/VelocityFiles.jsx:26:7","data-os-action":"",type:"file",multiple:!0,accept:".gz","aria-label":"Verified velocity files",disabled:a,onChange:i})),n.createElement("small",{"data-os-loc":"src/field/VelocityFiles.jsx:28:5"},e?"1001、1049、1096 的 .ocfld.gz 文件只在此浏览器内校验、保存及计算。":"Select the .ocfld.gz for 1001, 1049 or 1096. Verification, storage and calculations run in this browser."),n.createElement("p",{"data-os-loc":"src/field/VelocityFiles.jsx:29:5",role:"status"},a?e?"正在校验原生速度文件…":"Verifying native velocity files…":s))}function nl({fetchFrame:e,decode:a,byteBudget:t=268435456,maxFrames:s=5}){const c=new Map,i=new Map;let o=null,r=0,f=!1,d=!1;const m=(p,l)=>`${p}:${l}`,u=()=>[...c.values()].reduce((p,l)=>p+l.byteLength,0);function v(){for(const p of c.keys()){if(c.size<=s&&u()<=t)break;p!==o&&c.delete(p)}}function g(p,l){const b=m(p,l);if(c.has(b)){const E=c.get(b);return c.delete(b),c.set(b,E),Promise.resolve(E)}if(i.has(b))return i.get(b).promise;const w=new AbortController,B=e(p,l,{signal:w.signal}).then(E=>{if(f||w.signal.aborted)return null;const y=E&&Object.hasOwn(E,"verifiedResource"),_=y?E.buffer:E,x=y?E.verifiedResource:null,S=a(_),C=new Set(S.fields.map(h=>h.values.buffer)),A={comparisonId:p,frameNumber:l,data:S,verifiedResource:x,byteLength:[...C].reduce((h,R)=>h+R.byteLength,0)};return c.set(b,A),v(),A}).finally(()=>{i.get(b)?.controller===w&&i.delete(b)});return i.set(b,{promise:B,controller:w}),B}return{async select(p,l){if(f)return null;const b=++r,w=m(p,l);for(const[E,y]of i)E!==w&&(y.controller.abort(),i.delete(E));const B=o;o=w;try{const E=await g(p,l);return f||b!==r?null:(v(),E)}catch(E){if(f||b!==r||E.name==="AbortError")return null;throw o=B,E}},async prefetch(p,l){f||d||await Promise.all(l.slice(0,2).map(b=>g(p,b).catch(()=>null)))},setScrubbing(p){if(d=p,p)for(const[l,b]of i)l!==o&&(b.controller.abort(),i.delete(l))},stats(){return{bytes:u(),cachedFrames:c.size,oversize:u()>t}},dispose(){f=!0,r++;for(const p of i.values())p.controller.abort();i.clear(),c.clear()}}}function al({workerFactory:e=()=>new Worker(new URL(""+new URL("geometryWorker-DaK7Js9j.js",import.meta.url).href,import.meta.url),{type:"module"}),byteBudget:a=134217728}={}){const t=new Map;let s=null,c=null,i=0,o=!1;const r=()=>[...t.values()].reduce((d,m)=>d+m.byteLength,0);function f(){c&&(c.resolve(null),c=null,s?.terminate(),s=null)}return{request(d,m,u){if(o)return Promise.resolve(null);f();const v=xc(d,u);if(t.has(v)){const g=t.get(v);return t.delete(v),t.set(v,g),Promise.resolve(g)}return new Promise((g,p)=>{const l=++i;c={resolve:g,reject:p,id:l};try{s??=e(),s.onmessage=({data:y})=>{if(!c||y.requestId!==c.id||y.version!==1)return;if(c=null,y.type==="error"){p(Error(y.error));return}const _=y.result;t.set(v,_);for(const x of t.keys()){if(r()<=a)break;x!==v&&t.delete(x)}g(_)},s.onerror=y=>{c?.id===l&&(c=null,s?.terminate(),s=null,p(Error(y.message||"Geometry worker failed")))};const b=new Map,w=[],B=y=>{if(!y)return null;if(b.has(y))return b.get(y);const _=y.values.slice(),x={...y,values:_,mask:null};return b.set(y,x),w.push(_.buffer),x.mask=B(y.mask),x},E=Object.fromEntries(Object.entries(d.data.groups).filter(([y])=>y===u.group||y==="sdf"&&u.showContext).map(([y,_])=>[y,Object.fromEntries(Object.entries(_).filter(([x])=>(x==="ground_truth"||x==="prediction"||/^(ground_truth|prediction)\.[xyz]$/.test(x))&&(!u.previewOnly||!x.startsWith("prediction"))).map(([x,S])=>[x,B(S)]))]));s.postMessage({version:1,requestId:l,comparisonId:d.comparisonId,type:"build",payload:{snapshot:{...d,data:{groups:E}},lattice:m,settings:u}},w)}catch(b){c=null,p(b)}})},stats(){return{bytes:r(),cachedFrames:t.size,oversize:r()>a}},dispose(){o=!0,f(),s?.terminate(),s=null,t.clear()}}}const tl="OCFLD001",xt=24,sl=112;function ka(e,a,t){const s=e.subarray(a,a+t),c=s.indexOf(0);return new TextDecoder().decode(c>=0?s.subarray(0,c):s)}function Hs(e,a){if(e>BigInt(Number.MAX_SAFE_INTEGER))throw new Error(`${a} exceeds safe integer range`);return Number(e)}function ki(e){if(!(e instanceof ArrayBuffer)||e.byteLength<xt)throw new Error("Field frame is truncated");const a=new Uint8Array(e);if(ka(a,0,8)!==tl)throw new Error("Invalid field frame magic");const t=new DataView(e),s=t.getUint32(8,!0);if(s!==1)throw new Error(`Unsupported field frame schema ${s}`);const c=t.getUint32(12,!0),i=t.getUint32(16,!0);if(i!==sl)throw new Error(`Unsupported directory entry size ${i}`);const o=xt+c*i;if(o>e.byteLength)throw new Error("Field frame directory is truncated");const r=[];for(let d=0;d<c;d+=1){const m=xt+d*i,u=ka(a,m,16),v=ka(a,m+16,32),g=ka(a,m+48,16),p=t.getUint32(m+64,!0),l=[t.getUint32(m+68,!0),t.getUint32(m+72,!0),t.getUint32(m+76,!0)],b=Hs(t.getBigUint64(m+80,!0),"field offset"),w=Hs(t.getBigUint64(m+88,!0),"field length"),B=t.getInt32(m+96,!0);if(!u||!v||l.some(x=>x===0))throw new Error("Invalid field directory entry");if(b<o||b+w>e.byteLength)throw new Error(`Field ${u}:${v} data is truncated`);const E=l[0]*l[1]*l[2];let y,_;if(p===1){if(b%4!==0||w!==E*4)throw new Error(`Field ${u}:${v} has invalid float32 storage`);y=new Float32Array(e,b,E),_="float32"}else if(p===2){if(w!==E)throw new Error(`Field ${u}:${v} has invalid uint8 storage`);y=new Uint8Array(e,b,E),_="uint8"}else throw new Error(`Field ${u}:${v} has unsupported dtype ${p}`);r.push({id:`${u}:${v}`,group:u,name:v,unit:g,dtype:_,shape:l,values:y,maskIndex:B,mask:null})}for(const d of r){if(d.maskIndex<-1||d.maskIndex>=r.length)throw new Error(`Field ${d.id} has an invalid mask index`);d.maskIndex>=0&&(d.mask=r[d.maskIndex])}const f={};for(const d of r){if(f[d.group]??={},f[d.group][d.name])throw new Error(`Duplicate field ${d.id}`);f[d.group][d.name]=d}return{schema:s,fields:r,groups:f}}function Mt(e,a,t,s){const c=e.fields.find(g=>g.id===a);if(!c)throw new Error(`Unknown field ${a}`);const[i,o,r]=c.shape;let f,d,m;if(t==="xy")[f,d,m]=[i,o,r];else if(t==="xz")[f,d,m]=[i,r,o];else if(t==="yz")[f,d,m]=[o,r,i];else throw new Error(`Unknown slice plane ${t}`);if(!Number.isInteger(s)||s<0||s>=m)throw new Error(`Slice index ${s} is outside ${t}`);const u=c.dtype==="float32"?Float32Array:Uint8Array,v=new u(f*d);for(let g=0;g<d;g+=1)for(let p=0;p<f;p+=1){let l,b,w;t==="xy"?[l,b,w]=[p,g,s]:t==="xz"?[l,b,w]=[p,s,g]:[l,b,w]=[s,p,g],v[p+f*g]=c.values[l+i*(b+o*w)]}return{fieldId:a,plane:t,sliceIndex:s,width:f,height:d,values:v}}const Ha=new Map;function il(e){Ha.clear();for(const a of e)Ha.set(a.comparison.id,a)}async function cl(e){const a=new Uint8Array(e);if(a[0]===31&&a[1]===139){if(typeof DecompressionStream>"u")throw new Error("This browser cannot decode the field samples. Please use a recent Chrome, Edge, Firefox or Safari.");return new Response(new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}return e}async function ol(e,a,t={}){const s=Ha.get(e),c=s?.frameUrls?.[String(a)],i=Xt(s,a);if(!c)throw new Error(`Frame ${a} is not included in this public preview.`);if(!/^\/?data\/[a-zA-Z0-9_./-]+$/.test(c)||c.split("/").includes(".."))throw new Error("Invalid published field URL.");const o=await fetch(c.replace(/^\//,""),{signal:t.signal});if(!o.ok)throw new Error(`Field sample unavailable (${o.status}).`);const r=await o.arrayBuffer();if(t.signal?.aborted)throw new DOMException("Aborted","AbortError");const f=i?await zt(r,i):await cl(r);if(t.signal?.aborted)throw new DOMException("Aborted","AbortError");return t.withIdentity?{buffer:f,verifiedResource:i}:f}async function rl(e){const a=Ha.get(e);if(!a)throw new Error("Unknown public comparison.");return a.metrics??null}const ll={groundTruth:"ground_truth",prediction:"prediction",error:"error"};function dl(e,a,t){if(!e?.origin||!e?.axisSteps)throw new Error("Canonical lattice transform is unavailable");const s=a==="yz"?0:a==="xz"?1:a==="xy"?2:-1;if(s<0)throw new Error(`Unknown slice plane ${a}`);return e.origin.map((c,i)=>c+e.axisSteps[s][i]*t)}function fl(e){let a=0;for(const t of e)Number.isFinite(t)&&(a=Math.max(a,Math.abs(t)));return[-a,a]}function ml(e){let a=0;for(const t of e)Number.isFinite(t)&&(a=Math.max(a,Math.abs(t)));return[0,a]}function vt(e,a){const t=ll[a];if(!e)return null;if(e[t])return{ids:[e[t].id],maskId:e[t].mask?.id||null};const s=["x","y","z"].map(c=>e[`${t}.${c}`]).filter(Boolean);return s.length!==3?null:{ids:s.map(c=>c.id),maskId:s[0].mask?.id||null}}function ia(e,a){const t=e?.groups?.[a],s=vt(t,"groundTruth"),c=vt(t,"prediction"),i=vt(t,"error"),o=s?.ids?.[0]||c?.ids?.[0]||i?.ids?.[0],r=o&&(e.fields?.find(f=>f.id===o)?.unit||Object.values(t||{}).find(f=>f?.id===o)?.unit)||"";return{kind:a,groundTruth:s,prediction:c,error:i,unit:r}}function bl(e,a,t,s,c="magnitude"){if(!a?.ids?.length)return null;if(a.ids.length===1)return{...Mt(e,a.ids[0],t,s),components:null};const i=a.ids.map(f=>Mt(e,f,t,s)),o=["x","y","z"].indexOf(c);if(o>=0)return{...i[o],components:null};const r=new Float32Array(i[0].values.length);for(let f=0;f<r.length;f+=1)r[f]=Math.hypot(i[0].values[f],i[1].values[f],i[2].values[f]);return{...i[0],fieldId:a.ids.join("+"),values:r,components:i.map(f=>f.values)}}const Mi=["#440154","#3b528b","#21918c","#5ec962","#fde725"],qs=Mi.map(e=>[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255));function pl(e){const a=Math.min(1,Math.max(0,e))*4,t=Math.min(3,Math.floor(a));return qs[t].map((s,c)=>s+(qs[t+1][c]-s)*(a-t))}function ul(e,{onCameraChange:a,onGlyphPick:t,rendererFactory:s=()=>new Vc({antialias:!0}),controlsFactory:c=(o,r)=>new Gc(o,r),gizmoFactory:i=zc}={}){const o=s();e.appendChild(o.domElement),o.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2));const r=i(e),f=new Xc;f.background=new ht("#f4f8fb");const d=new Zc(40,1,.001,1e5);d.position.set(8,6,9);const m=c(d,o.domElement);m.enableDamping=!1,f.add(new Hc(16777215,6649225,2.4));const u=new qc(16777215,2);u.position.set(3,8,5),f.add(u);const v=new Lc(1);f.add(v);let g=[],p=null,l=[],b={mode:"split",opacity:.65},w=!1,B=960,E=540,y=[0,1],_=null,x=-1,S=null,C=null;const A=k=>_&&b.component==="magnitude"?new ht().setRGB(...pl(k),so):new ht().setHSL(.65*(1-k),.8,.48);function h(k){x=k,S&&(f.remove(S),S.geometry.dispose(),S.material.dispose(),S=null);const P=_?.indices.indexOf(k)??-1,O=l.find(X=>X.userData.kind==="vectors");if(P>=0&&O){const X=O.geometry.attributes.position,W=[X.getX(P*6),X.getY(P*6),X.getZ(P*6)],T=new Aa().setAttribute("position",new gt(W,3));S=new Ws(T,new Vs({color:14040103,size:7,sizeAttenuation:!1,depthTest:!1})),S.renderOrder=20,f.add(S)}}function R(){const k=b.sourceRange||y;for(const P of l){const O=P.userData.values;if(!O)continue;const X=P.geometry.attributes.color;for(let W=0;W<O.length;W++){const T=Math.max(0,Math.min(1,k[0]===k[1]?+(O[W]>k[1]):(O[W]-k[0])/(k[1]-k[0])));A(T).toArray(X.array,W*3)}X.needsUpdate=!0}}const M=()=>{for(const k of l)f.remove(k),k.geometry.dispose(),k.material.dispose();l=[]};function N(){for(const k of l){if(k.userData.kind==="slice-outline"){k.material.opacity=1,k.material.depthTest=!1,k.material.depthWrite=!1,k.renderOrder=4;continue}if(k.userData.kind==="section-plane"){k.material.transparent=!0,k.material.opacity=.14,k.material.depthWrite=!1,k.material.depthTest=!0,k.renderOrder=3;continue}const P=k.userData.role==="prediction",O=b.mode==="wire-overlay"&&P&&k.userData.kind==="surface";k.renderOrder=O?3:P?2:1,k.material.transparent=!0,k.material.opacity=b[P?"predictionOpacity":"gtOpacity"]??b.opacity,k.material.depthWrite=!["overlay","wire-overlay"].includes(b.mode),k.isMesh&&(k.userData.kind==="surface"&&to(k.geometry,k.material,b.shading),k.material.userData.xray!==O&&(k.material.userData.xray=O,k.material.onBeforeCompile=X=>{O&&(X.fragmentShader=X.fragmentShader.replace("void main() {",`void main() {
if (mod(floor(gl_FragCoord.x / 3.0) + floor(gl_FragCoord.y / 3.0), 2.0) < 1.0) discard;`))},k.material.customProgramCacheKey=()=>O?"field-xray-gaps-1":"field-surface-1",k.material.needsUpdate=!0),k.material.wireframe=O,k.material.depthTest=!O)}}function F(){if(w)return;const k=b.mode==="split"?["gt","prediction"]:[b.mode==="gt"?"gt":b.mode==="prediction"?"prediction":null];o.setScissorTest(!0),k.forEach((P,O)=>{const X=B/k.length;d.aspect=X/E,d.updateProjectionMatrix(),o.setViewport(O*X,0,X,E),o.setScissor(O*X,0,X,E),l.forEach(W=>{W.visible=(!P||W.userData.role===P)&&b[W.userData.role==="prediction"?"showPrediction":"showGt"]!==!1&&(W.userData.kind!=="section-plane"||b.showPlane!==!1)}),o.render(f,d)}),r.update(d)}const V=()=>({position:d.position.toArray(),target:m.target.toArray(),zoom:d.zoom,up:d.up.toArray(),fov:d.fov,near:d.near,far:d.far});o.domElement.setAttribute?.("data-renderer","field-3d"),o.domElement.osPick=(k,P)=>{const O=b.mode==="split",X=O?k<.5?"gt":"prediction":b.mode,W=O?k*2%1:k,T=new Yc;T.setFromCamera(new Uc(W*2-1,1-P*2),d);const Z=l.filter(ye=>ye.userData.kind==="surface"&&(X!=="gt"&&X!=="prediction"||ye.userData.role===X)&&b[ye.userData.role==="prediction"?"showPrediction":"showGt"]!==!1),ne=T.intersectObjects(Z,!1)[0];return{camera:V(),hit:ne?{xyz:ne.point.toArray(),role:ne.object.userData.role}:null}},o.domElement.osProject=k=>{const P=b.mode==="split";if(!P&&["gt","prediction"].includes(b.mode)&&b.mode!==k.role)return null;const O=new un(...k.xyz).project(d);return Math.abs(O.x)>1||Math.abs(O.y)>1||Math.abs(O.z)>1?null:[P?((O.x+1)/2+(k.role==="prediction"?1:0))/2:(O.x+1)/2,(1-O.y)/2]};function H(k){C=k.button===0?[k.clientX,k.clientY]:null}function J(k){C&&Math.hypot(k.clientX-C[0],k.clientY-C[1])>4&&(C=null)}function q(k){if(!C||!_)return;const P=C;if(C=null,Math.hypot(k.clientX-P[0],k.clientY-P[1])>4)return;const O=o.domElement.getBoundingClientRect(),X=b.mode==="split",W=O.width/(X?2:1),T=k.clientX-O.left,Z=k.clientY-O.top,ne=X&&T>=W,ye=X?ne?"prediction":"gt":b.mode,ve=T-(ne?W:0);let se=null;const ie=new un,Ee=new un;for(const Re of l){const{role:Ae,kind:tn}=Re.userData;if(tn!=="vectors"||["gt","prediction"].includes(ye)&&ye!==Ae||b[Ae==="gt"?"showGt":"showPrediction"]===!1)continue;const Oe=Re.geometry.attributes.position;for(let ke=0;ke<_.indices.length;ke++){if(ie.fromBufferAttribute(Oe,6*ke).project(d),Ee.fromBufferAttribute(Oe,6*ke+1).project(d),ie.z<-1||ie.z>1)continue;const De=(ie.x+1)*W/2,L=(1-ie.y)*O.height/2,te=(Ee.x-ie.x)*W/2,de=(ie.y-Ee.y)*O.height/2,Be=Math.max(0,Math.min(1,((ve-De)*te+(Z-L)*de)/(te*te+de*de||1))),Me=Math.hypot(ve-De-Be*te,Z-L-Be*de);Me<=7&&(!se||Me<se.dist-.1||Math.abs(Me-se.dist)<=.1&&ie.z<se.z)&&(se={id:_.indices[ke],dist:Me,z:ie.z})}}se&&t?.(se.id)}const Y={pointerdown:H,pointermove:J,pointerup:q,pointercancel:()=>{C=null}};for(const[k,P]of Object.entries(Y))o.domElement.addEventListener?.(k,P);o.domElement.osCapture=()=>F();const D=()=>{F(),a?.(V())};m.addEventListener("change",D);function $(){const k=e.clientWidth,P=e.clientHeight;k>1&&P>1&&(B=k,E=P),o.setSize(B,E),F()}const U=globalThis.ResizeObserver?new ResizeObserver($):null;U?.observe(e);const z={setGeometry(k){M(),_=k?.paired??null;let P=1/0,O=-1/0;for(const W of k?.layers||[])for(const T of W.values||[])P=Math.min(P,T),O=Math.max(O,T);y=_&&b.component==="magnitude"&&_.p95!=null?[0,_.p95]:[P,O];const X=b.sourceRange||y;for(const W of k?.layers||[]){if(!W.positions.length)continue;const T=new Aa;T.setAttribute("position",new $s(W.positions,3));const Z=W.role==="gt"?1416379:15571026;let ne,ye;if(W.values){const ve=new Float32Array(W.values.length*3);for(let se=0;se<W.values.length;se++){const ie=Math.max(0,Math.min(1,X[0]===X[1]?+(W.values[se]>X[1]):(W.values[se]-X[0])/(X[1]-X[0])));A(ie).toArray(ve,se*3)}T.setAttribute("color",new $s(ve,3))}if(W.kind==="vectors"||W.kind==="slice-outline"?(ne=new Ts({vertexColors:!!W.values,color:W.kind==="slice-outline"?8801732:W.values?16777215:Z}),ye=new Os(T,ne)):(T.computeVertexNormals(),ne=new no({color:W.kind==="section-plane"?9988803:W.values?16777215:Z,vertexColors:!!W.values,side:ao,roughness:.7,transparent:!0,opacity:W.kind==="slice"?.85:b.opacity,depthWrite:b.mode!=="overlay"}),ye=new Ds(T,ne)),ye.userData={role:W.role,kind:W.kind,values:W.values},l.push(ye),f.add(ye),_&&W.kind==="vectors"){const ve=[],se=W.role==="gt"?0:3;for(let ie=0;ie<_.indices.length;ie++){const Ee=ie*6+se;!_.raw[Ee]&&!_.raw[Ee+1]&&!_.raw[Ee+2]&&ve.push(...W.positions.subarray(18*ie,18*ie+3))}if(ve.length){const ie=new Aa().setAttribute("position",new gt(ve,3)),Ee=new Ws(ie,new Vs({color:A(0),size:3,sizeAttenuation:!1}));Ee.userData={role:W.role,kind:"zeros"},l.push(Ee),f.add(Ee)}}}h(x),N(),F()},setGlyph(k){h(k),F()},setInspection(k,P){for(const X of g)f.remove(X),X.geometry.dispose(),X.material.dispose();g=[];const O=X=>{X.renderOrder=15,f.add(X),g.push(X)};if(k?.corners?.length===4&&k.corners.every(Boolean)){const X=new Aa;X.setAttribute("position",new gt([0,1,1,2,2,3,3,0].flatMap(W=>k.corners[W]),3)),O(new Os(X,new Ts({color:"#e4ac00",depthTest:!1})))}if(k?.probe&&P){const X=Math.hypot(...P.max.map((T,Z)=>T-P.min[Z])),W=new Ds(new Qc(X*.007,12,8),new eo({color:"#ffffff",wireframe:!0,depthTest:!1}));W.position.fromArray(k.probe),O(W)}F()},setDisplay(k){const P=JSON.stringify(b.sourceRange)!==JSON.stringify(k.sourceRange);b={...b,...k},N(),P&&R(),F()},setCamera(k){d.position.fromArray(k.position),m.target.fromArray(k.target),d.zoom=k.zoom??1,d.up.fromArray(k.up||[0,1,0]),k.fov&&(d.fov=k.fov),k.near&&(d.near=k.near),k.far&&(d.far=k.far),d.updateProjectionMatrix(),m.update(),d.position.fromArray(k.position),d.lookAt(m.target),D()},capture(){if(w)throw Error("3D unavailable");F();const k=document.createElement("canvas");k.width=o.domElement.width,k.height=o.domElement.height;const P=k.getContext("2d");return P.drawImage(o.domElement,0,0),r.capture(P,k.width,k.height,k.width/B),k},getCamera:V,preset(k,P){const O=Kc(k,P,B/(b.mode==="split"?2:1)/E,d.fov);O&&z.setCamera(O)},fit(k){if(!k)return;const P=new un(...k.min).add(new un(...k.max)).multiplyScalar(.5),O=new un(...k.max).sub(new un(...k.min)).length()||1;d.position.copy(P).add(new un(.8,.65,.9).multiplyScalar(O)),m.target.copy(P),d.near=O/1e4,d.far=O*100,d.zoom=1,v.scale.setScalar(O*.15),v.position.copy(P),p&&(f.remove(p),p.geometry.dispose(),p.material.dispose()),p=new Jc(O*1.3,12,13294052,14740209),p.position.set(P.x,k.min[1],P.z),f.add(p),z.preset(k,"reset")},resize:$,dispose(){if(!w){w=!0;for(const[k,P]of Object.entries(Y))o.domElement.removeEventListener?.(k,P);h(-1),U?.disconnect(),m.removeEventListener("change",D),m.dispose(),z.setInspection(null),M();for(const k of[v,p])k?.geometry.dispose(),Array.isArray(k?.material)?k.material.forEach(P=>P.dispose()):k?.material.dispose();r.dispose(),o.dispose(),o.domElement.remove()}}};return $(),z}function hl({paired:e,settings:a,zh:t,selected:s,onPick:c,onMode:i,busy:o}){const r=(p,l)=>t?p:l,f=p=>Number(p.toPrecision(8)).toString(),d=vc(e,s),m=a.glyphMode??"direction",u=a.component==="magnitude",v=a.sourceRange??[0,e.p95],g=a.unit||r("单位未声明","unit undeclared");return n.createElement("div",{"data-os-loc":"src/field/GlyphControls.jsx:8:9",className:"paired-glyphs","aria-label":r("三维箭头比较","3D glyph comparison"),"data-mode":m,"data-count":e.indices.length,"data-population":e.count,"data-p95":e.p95},n.createElement("div",{"data-os-loc":"src/field/GlyphControls.jsx:9:4",className:"glyph-toolbar"},n.createElement("span",{"data-os-loc":"src/field/GlyphControls.jsx:9:35"},r("箭长","Arrow length")),[["direction",r("等长 · 看方向","Equal · direction")],["scaled",r("真实比例 · 看流速","Proportional · speed")]].map(([p,l])=>n.createElement("button",{"data-os-loc":"src/field/GlyphControls.jsx:10:126","data-os-action":"",key:p,disabled:o,"aria-pressed":m===p,onClick:()=>i(p)},l)),n.createElement("span",{"data-os-loc":"src/field/GlyphControls.jsx:11:6"},r("共同起点","Paired anchors")," ",n.createElement("b",{"data-os-loc":"src/field/GlyphControls.jsx:11:41"},e.indices.length)," / ",e.count.toLocaleString()," ",r("个共同有效格点","valid cells")),u&&e.count>0&&n.createElement("span",{"data-os-loc":"src/field/GlyphControls.jsx:12:34",className:"glyph-scale",title:r("同一帧、共同有效域，合并两侧的流速","Both roles pooled across the common valid domain of this frame")},n.createElement("i",{"data-os-loc":"src/field/GlyphControls.jsx:12:160",style:{background:"linear-gradient(90deg,"+Mi.join(",")+")"}}),r("共享流速色标","Shared speed scale")," ",f(v[0])," – ",f(v[1])," ",a.sourceRange?r("（手动）","(manual)"):"(P95)"," · ",g)),n.createElement("div",{"data-os-loc":"src/field/GlyphControls.jsx:14:4",className:"glyph-probe"},n.createElement("button",{"data-os-loc":"src/field/GlyphControls.jsx:14:33","data-os-action":"",disabled:o||e.peak<0,onClick:()=>c(e.peak)},r("查看采样最快点","Inspect fastest sampled point")),d?n.createElement("output",{"data-os-loc":"src/field/GlyphControls.jsx:15:8","aria-live":"polite","data-index":s},r("格点","Cell")," (",d.xyz.join(", "),") · ",["gt","prediction"].map((p,l)=>n.createElement(n.Fragment,{key:p},l?" · ":"",l?r("预测","Pred"):"GT"," ",n.createElement("b",{"data-os-loc":"src/field/GlyphControls.jsx:15:189"},f(d[p+"Speed"])),d[p+"Speed"]>e.p95?" (>P95)":""," ",n.createElement("small",{"data-os-loc":"src/field/GlyphControls.jsx:15:254"},"(",d[p].map(f).join(", "),")")))," · ",g):n.createElement("span",{"data-os-loc":"src/field/GlyphControls.jsx:16:5"},e.indices.length?r("点击任一侧箭头，读取同一格点两侧的流速与 XYZ 分量。","Click an arrow on either side for both speeds and XYZ components."):r("当前采样没有共同有效起点。","No jointly valid anchors at this sampling density.")),d&&n.createElement("details",{"data-os-loc":"src/field/GlyphControls.jsx:17:9",className:"glyph-exact"},n.createElement("summary",{"data-os-loc":"src/field/GlyphControls.jsx:17:42"},r("完整读数","Full precision")),n.createElement("div",{"data-os-loc":"src/field/GlyphControls.jsx:17:89"},["gt","prediction"].map(p=>n.createElement("div",{"data-os-loc":"src/field/GlyphControls.jsx:17:122",key:p},p==="gt"?"GT":r("预测","Prediction")," |v| = ",String(d[p+"Speed"])," · (Vx, Vy, Vz) = (",d[p].join(", "),")")),r("当前三维预览数据；仅颜色在上限饱和。","Current 3D preview values; only colour saturates at the upper bound.")))))}function Gt(e,a){return a==null?null:e instanceof Map?e.get(a):e?.rows?.find(t=>t.frame===a)}function Ja(e,a){const t=Gt(e,a);return["train","validation","test"].includes(t?.split)?t.split:"unassigned"}function gl(e,a,t){const s=Gt(e,a);return t==="all"?!0:t.startsWith("test_")?s?.split==="test"&&(s.prediction_type||"unassigned")===t.slice(5):Ja(e,a)===t}function yl(e){return{test_interpolation:e?"Test · 插值":"Test · Interpolation",test_extrapolation:e?"Test · 未来外推":"Test · Future extrapolation",test_unassigned:e?"Test · 类型未声明":"Test · Type undeclared",test_anchor:"Test · Anchor"}}function Ht(e,a){const t=Gt(e,a)?.prediction_type;return["anchor","interpolation","extrapolation"].includes(t)?t:"unassigned"}function xl(e,a=!1){return(a?{anchor:"Anchor · 来源帧",interpolation:"时间插值",extrapolation:"未来外推",unassigned:"预测类型未声明"}:{anchor:"Anchor",interpolation:"Interpolation",extrapolation:"Future extrapolation",unassigned:"Prediction type undeclared"})[e]}function qt({manifest:e,frame:a}){const{language:t}=fe(),s=Ja(e,a),c=t==="zh"?{train:"Train · 训练集",validation:"Validation · 验证集",test:"Test · 测试集",unassigned:"Unassigned · 未划分"}:{train:"Train",validation:"Validation",test:"Test",unassigned:"Unassigned"};return n.createElement(n.Fragment,null,n.createElement("span",{"data-os-loc":"src/field/FrameSplitBadge.jsx:9:11","aria-label":"Frame split",className:`frame-split-badge split-${a==null?"unassigned":s}`,title:t==="zh"?"依据此预测模型的 CSV 声明；并非独立核验训练历史":"Declared by this prediction model’s CSV; training history is not independently verified"},a==null?"—":c[s]),a!=null&&n.createElement("span",{"data-os-loc":"src/field/FrameSplitBadge.jsx:9:309",className:"frame-split-badge","aria-label":"Prediction type"},xl(Ht(e,a),t==="zh")))}function vl({geometry:e,settings:a,bounds:t,loadingFrame:s,error:c,labels:i,cameraState:o,onCameraChange:r,frameSplit:f,displayedFrame:d,controlRef:m,onSceneError:u,inspection:v,onGlyphMode:g,onShading:p}){const{tr:l,language:b}=fe(),w=b==="zh",[B,E]=j.useState("reset"),[y,_]=j.useState(null),x=e?.paired,S=d,C=j.useRef(S);C.current=S;const A=z=>_({context:C.current,id:z}),h=y?.context===S?y?.id:-1;function R(z){N.current?.preset(t,z),E(z)}const M=j.useRef(null),N=j.useRef(null),F=j.useRef(!1),[V,H]=j.useState(""),J=j.useRef(r),q=j.useRef(!1);J.current=r,j.useImperativeHandle(m,()=>({capture(){if(!N.current)throw Error("3D unavailable");return N.current.capture()},getCamera(){if(!N.current)throw Error("camera");return N.current.getCamera()},restoreCamera(z){if(!N.current)throw Error("camera");q.current=!0;try{N.current.setCamera(z),E("custom"),J.current?.(N.current.getCamera())}finally{q.current=!1}}}),[]),j.useEffect(()=>{try{N.current=ul(M.current,{onGlyphPick:A,onCameraChange:z=>{E("custom"),q.current||J.current?.(z)}})}catch(z){H(`3D unavailable: ${z.message}. Slices remain available.`),u?.(z.message)}return()=>{N.current?.dispose(),N.current=null}},[]),j.useEffect(()=>{if(o){q.current=!0;try{N.current?.setCamera(o)}finally{q.current=!1}}},[o]),j.useEffect(()=>{N.current?.setDisplay(a)},[a]),j.useEffect(()=>{N.current?.setGeometry(e)},[e]),j.useEffect(()=>{N.current?.setGlyph?.(h)},[e,h]),j.useEffect(()=>{N.current?.setInspection(v,t)},[v,t]),j.useEffect(()=>{t&&!F.current&&(N.current?.fit(t),F.current=!0,E("reset"))},[t]),j.useEffect(()=>{t&&B!=="custom"&&R(B)},[a.mode,t]);const Y=a.group==="velocity";let D=1/0,$=-1/0;for(const z of e?.layers||[])for(const k of z.values||[])D=Math.min(D,k),$=Math.max($,k);const U=a.sourceRange||[D,$];return n.createElement("section",{"data-os-loc":"src/field/FieldViewport.jsx:28:10",className:"field-viewport","aria-label":l("3D field visualization")},n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:29:5",className:"field-view-heading"},n.createElement("strong",{"data-os-loc":"src/field/FieldViewport.jsx:29:41"},l(Y?"3D velocity field":"3D zero-isosurface")),n.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:29:117"},l("Frame "),d??"—"," · ",n.createElement(qt,{manifest:f,frame:d}))),n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:29:237",className:"v2-view-actions",role:"group","aria-label":w?"三维视角":"3D view"},n.createElement(io,{value:a.shading||"original",onChange:p,disabled:a.group!=="sdf"}),[["reset",w?"重置视角":"Reset view"],["top",w?"顶视图":"Top"],["side",w?"侧视图":"Side"]].map(([z,k])=>n.createElement("button",{"data-os-loc":"src/field/FieldViewport.jsx:29:528","data-os-action":"",key:z,disabled:!t,"aria-pressed":B===z,onClick:()=>R(z)},k)),n.createElement("button",{"data-os-loc":"src/field/FieldViewport.jsx:29:639","data-os-action":"",disabled:!t,onClick:()=>{N.current?.fit(t),E("reset")}},l("Fit view"))),Y&&x&&n.createElement(hl,{paired:x,settings:a,zh:w,busy:s!=null,selected:h,onPick:A,onMode:g}),n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:31:5",className:"field-scene",ref:M}),n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:32:5",className:`field-role-labels ${a.mode==="split"?"split":""}`,"aria-hidden":"true"},a.mode!=="prediction"&&n.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:32:130"},i?.gt?.displayName?`GT · ${i.gt.displayName} · ${Y?"shared scale":"blue"}`:a.previewOnly?l("Dataset preview"):l(Y?"GT · shared color scale":"GT · blue"),a.showGt===!1?l(" · hidden"):""),a.mode!=="gt"&&n.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:32:402"},i?.prediction?.displayName?`Prediction · ${i.prediction.displayName} · ${Y?"shared scale":"orange"}`:l(Y?"Prediction · shared color scale":"Prediction · orange"),a.showPrediction===!1?l(" · hidden"):a.mode==="wire-overlay"?l(" · X-ray wireframe"):"")),Y&&(!x||a.component!=="magnitude")&&n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:33:61",className:"field-legend"},a.component==="magnitude"?l("Speed magnitude"):`Velocity ${a.component?.toUpperCase()}`,n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:33:195",className:"field-gradient"}),U.every(Number.isFinite)?`${U[0].toPrecision(3)} — ${U[1].toPrecision(3)}`:l("No valid samples")," ",n.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:33:340"},a.unit||l("units undeclared"))),s!=null&&n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:34:26",role:"status",className:"field-view-loading"},l("Loading frame "),s,"…"),(V||c)&&n.createElement("p",{"data-os-loc":"src/field/FieldViewport.jsx:35:28",role:"alert",className:"field-view-error"},V||c),e?.warnings?.length>0&&n.createElement("p",{"data-os-loc":"src/field/FieldViewport.jsx:36:36",className:"field-view-warning"},e.warnings.join(" · ")),n.createElement("small",{"data-os-loc":"src/field/FieldViewport.jsx:37:5",className:"field-view-help"},n.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:37:40",className:"shading-note"},w?"平滑只影响 SDF 表面光照；顶点、切片、指标和速度箭头保持原样。":"Smoothing affects SDF surface lighting only; vertices, slices, scores and velocity arrows are unchanged."),l("Drag to orbit · Scroll to zoom · "),l(Y?"Instantaneous velocity vectors, not particle paths":"SDF = 0; display-only mesh"),l(" · X / Y up / Z · Preview quality: "),a.quality||l("balanced")))}function Ls({frames:e,current:a,direction:t=1,loop:s=!1,status:c="ready"}){const i=e.indexOf(a),o=i+(t<0?-1:1);return i>=0&&o>=0&&o<e.length?{frame:e[o],action:"select"}:c==="processing"&&t>0?{frame:a,action:"wait"}:c==="ready"&&s&&e.length>1?{frame:t<0?e.at(-1):e[0],action:"select"}:{frame:a,action:"stop"}}function El({frames:e,displayedFrame:a,requestedFrame:t,status:s="ready",loading:c=!1,previewFps:i=24,onFrame:o,onScrubbing:r,timing:f,frameSplit:d,active:m=!0,controlRef:u,initialPlayback:v}){const{tr:g}=fe(),[p,l]=j.useState(!1),[b,w]=j.useState(v?.loop??!1),[B,E]=j.useState(v?.fps??i),[y,_]=j.useState(v?.speed??1),[x,S]=j.useState("");j.useImperativeHandle(u,()=>({pause:()=>l(!1),getSettings:()=>({loop:b,fps:B,speed:y}),restoreSettings:M=>{l(!1),w(M.loop),E(M.fps),_(M.speed)}}),[b,B,y]),j.useEffect(()=>{const M=()=>l(!1);return window.addEventListener("oceanscope-annotate",M),()=>window.removeEventListener("oceanscope-annotate",M)},[]),j.useEffect(()=>{m||l(!1)},[m]);const C=j.useRef(!1);j.useEffect(()=>{C.current||S(String(t??a??""))},[t,a]),j.useEffect(()=>{e.length<2&&l(!1)},[e.length]),j.useEffect(()=>{if(!p||c)return;const M=setTimeout(()=>{const N=Ls({frames:e,current:a,loop:b,status:s});N.action==="select"?o(N.frame):N.action==="stop"&&l(!1)},1e3/(Math.max(1,B)*y));return()=>clearTimeout(M)},[p,c,a,e,b,s,B,y,o]);function A(M){l(!1);const N=Ls({frames:e,current:t??a,direction:M,status:s});N.action==="select"&&o(N.frame)}function h(){l(!1);const M=Number(x);e.includes(M)?M!==t&&o(M):S(String(t??a??""))}const R=e.some((M,N)=>N>0&&M!==e[N-1]+1);return n.createElement("section",{"data-os-loc":"src/field/FieldTimeline.jsx:21:10",className:"field-timeline","aria-label":g("Animation controls")},n.createElement(qt,{manifest:d,frame:a}),n.createElement("div",{"data-os-loc":"src/field/FieldTimeline.jsx:23:5",className:"field-play-controls"},n.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:42","data-os-action":"","aria-label":g("First frame"),disabled:!e.length,onClick:()=>{l(!1),o(e[0])}},"⏮"),n.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:170","data-os-action":"","aria-label":g("Previous frame"),disabled:e.length<2,onClick:()=>A(-1)},"‹"),n.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:272","data-os-action":"",className:"primary",disabled:e.length<2,onClick:()=>l(M=>!M)},g(p?"Pause":"Play")),n.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:400","data-os-action":"","aria-label":g("Next frame"),disabled:e.length<2,onClick:()=>A(1)},"›"),n.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:497","data-os-action":"","aria-label":g("Last frame"),disabled:!e.length,onClick:()=>{l(!1),o(e.at(-1))}},"⏭"),n.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:23:628"},n.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:23:635","data-os-action":"",type:"checkbox",checked:b,onChange:M=>w(M.target.checked)}),g(" Loop")),n.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:23:735"},g("Speed"),n.createElement("select",{"data-os-loc":"src/field/FieldTimeline.jsx:23:755","data-os-action":"",value:y,onChange:M=>_(Number(M.target.value))},[.25,.5,1,2].map(M=>n.createElement("option",{"data-os-loc":"src/field/FieldTimeline.jsx:23:845",key:M,value:M},M,"×"))))),n.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:24:5","data-os-action":"","aria-label":g("Sequence timeline"),type:"range",min:"0",max:Math.max(0,e.length-1),value:Math.max(0,e.indexOf(t??a)),disabled:e.length<2,onPointerDown:()=>{l(!1),r?.(!0)},onPointerUp:()=>r?.(!1),onPointerCancel:()=>r?.(!1),onBlur:()=>r?.(!1),onKeyDown:M=>{r?.(!0),["Home","End"].includes(M.key)&&(M.preventDefault(),l(!1),o(M.key==="Home"?e[0]:e.at(-1)))},onKeyUp:()=>r?.(!1),onChange:M=>{l(!1),o(e[Number(M.target.value)])}}),n.createElement("div",{"data-os-loc":"src/field/FieldTimeline.jsx:25:5","data-displayed-frame":a,className:"field-time-labels"},n.createElement("span",{"data-os-loc":"src/field/FieldTimeline.jsx:25:78"},g("Displayed frame "),n.createElement("strong",{"data-os-loc":"src/field/FieldTimeline.jsx:25:108"},a??"—"),c?` · ${g("Loading")} ${t}…`:""),n.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:25:206"},g("Go to frame"),n.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:25:232","data-os-action":"","aria-label":g("Comparison frame"),type:"number",value:x,onFocus:()=>{C.current=!0,l(!1)},onChange:M=>{l(!1),S(M.target.value)},onBlur:()=>{C.current=!1,h()},onKeyDown:M=>{M.key==="Enter"&&h()}})),n.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:25:527"},g("Preview FPS"),n.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:25:553","data-os-action":"","aria-label":g("Preview FPS"),type:"number",min:"1",max:"120",value:B,onChange:M=>E(Math.max(1,Math.min(120,Number(M.target.value)||24)))})),n.createElement("small",{"data-os-loc":"src/field/FieldTimeline.jsx:25:719"},f?.fps>0&&Number.isFinite(f.originFrame)?`${g("Time")}: ${((a-f.originFrame)/f.fps+(f.offsetSeconds||0)).toFixed(3)} s`:g("Playback timing only — not physical simulation time"))),n.createElement("small",{"data-os-loc":"src/field/FieldTimeline.jsx:26:5"},e.length,g(" available frames"),R?g(" · Missing frames skipped; no interpolation"):"",s==="processing"?g(" · Processing continues; playback waits at the latest frame"):s==="error"?g(" · Processing failed; completed frames remain available"):""))}function _l(e,a){if(!e)return{valid:0,total:0,fraction:null};const t=e.values.length;let s=0;for(let c=0;c<t;c++)(!a||a.values[c])&&Number.isFinite(e.values[c])&&s++;return{valid:s,total:t,fraction:t?s/t:null}}function wl(e,a){return Number.isFinite(e)&&e>0?a?[0,e]:[-e,e]:null}const Sl=e=>Math.max(0,Math.min(1,e)),ea=(e,a,t)=>e.map((s,c)=>Math.round(s+(a[c]-s)*t));function Ri(e,a,t){const[s,c]=a,i=c===s?t==="error"?.5:0:Sl((e-s)/(c-s));return t==="error"?i<.5?ea([32,91,177],[246,248,250],i*2):ea([246,248,250],[201,66,55],(i-.5)*2):t==="prediction"?ea([255,244,221],[224,119,32],i):t==="absolute-error"?ea([246,240,252],[103,32,150],i):ea([235,244,252],[31,111,176],i)}function Pi(e,a,t,s,c,i){const{x:o=0,z:r=0,width:f=a.width,height:d=a.height}=i??{},m=e.createImageData(f,d);for(let u=0;u<d;u++)for(let v=0;v<f;v++){const g=v+o+a.width*(u+r),p=4*(v+f*(d-1-u)),l=a.values[g],b=(!t||t[g])&&Number.isFinite(l)?Ri(l,s,c):a.angleSupport?.[g]?[252,222,147]:(v+u)%6<3?[205,213,219]:[238,242,245];m.data[p]=b[0],m.data[p+1]=b[1],m.data[p+2]=b[2],m.data[p+3]=255}e.putImageData(m,0,0)}const Ys=e=>Math.max(0,Math.min(1,e));function Lt({slice:e,maskSlice:a,range:t,palette:s="ground-truth",crosshair:c,onCrosshair:i,plane:o,aspect:r,region:f=null,label:d,viewport:m}){const u=j.useRef(null);return j.useEffect(()=>{const v=u.current;if(!v||!e)return;const{width:g=e.width,height:p=e.height}=m??{};v.width=g,v.height=p;const l=v.getContext?.("2d");if(l){if(Pi(l,e,a?.values,t,s,m),e.components){l.strokeStyle=s==="prediction"?"#7c3f0d":"#123e68",l.lineWidth=Math.max(1,e.width/180);const b=o==="xy"?[0,1]:o==="xz"?[0,2]:[1,2],w=Math.max(4,Math.ceil(Math.max(e.width,e.height)/18));for(let B=w/2;B<e.height;B+=w)for(let E=w/2;E<e.width;E+=w){const y=Math.floor(E)+e.width*Math.floor(B);if(a&&!a.values[y])continue;const[_,x]=o==="oblique"?Ec(e,y):b.map(M=>e.components[M][y]),S=Math.hypot(_,x);if(!Number.isFinite(S)||S<1e-8)continue;const C=Math.min(w*.42,w*.18+Math.log1p(S)*w*.08),A=_/S*C,h=-x/S*C,R=e.height-1-B;l.beginPath(),l.moveTo(E,R),l.lineTo(E+A,R+h),l.lineTo(E+A-A*.35+h*.25,R+h-h*.35-A*.25),l.moveTo(E+A,R+h),l.lineTo(E+A-A*.35-h*.25,R+h-h*.35+A*.25),l.stroke()}}if(f){const[b,w]=zs(e.width,f.slice(0,2)),[B,E]=zs(e.height,f.slice(2,4));l.strokeStyle="#9c6900",l.lineWidth=Math.max(1,e.width/180),l.fillStyle="rgba(255,211,62,.17)",l.fillRect(b,e.height-1-E,w-b+1,E-B+1),l.strokeRect(b+.5,e.height-E-.5,Math.max(0,w-b),Math.max(0,E-B))}if(c){const b=c[0]*g,w=(1-c[1])*p;l.strokeStyle="#111",l.lineWidth=Math.max(.5,g/350),l.setLineDash([3,3]),l.beginPath(),l.moveTo(b,0),l.lineTo(b,p),l.moveTo(0,w),l.lineTo(g,w),l.stroke(),l.setLineDash([])}}},[e,a,t,s,c,o,f,m]),n.createElement("canvas",{"data-os-loc":"src/field/SliceCanvas.jsx:41:10","data-os-action":"","data-renderer":"field-slice","data-review-plane":o,"data-review-shape":e?[e.width,e.height].join(","):void 0,ref:u,"aria-label":d,className:"slice-canvas",style:{aspectRatio:r||"auto",height:"auto"},onClick:v=>{if(!e||!i)return;const g=v.currentTarget.getBoundingClientRect();i([Ys((v.clientX-g.left)/g.width),Ys(1-(v.clientY-g.top)/g.height)])}})}const nn=e=>Number.isFinite(e)?e.toPrecision(5):"N/A";function jl({metadata:e,labels:a,single:t,group:s,epe:c,unit:i,local:o,whole:r,counts:f,probes:d,sourceRange:m,errorRange:u,metrics:v,titles:g,aspects:p}){return JSON.parse(JSON.stringify({schema:"oceanscope.field-report.v1",metadata:e,labels:a,single:t,group:s,epe:c,unit:i||"undeclared",local:t?null:o,whole:t?null:r,counts:f.slice(0,t?1:3),probes:d.slice(0,t?1:3),sourceRange:m,errorRange:t?null:u,savedFrameMetrics:t?null:v?.[s]??null,titles:g.slice(0,t?1:3),aspects:p.slice(0,t?1:3),scope:"Slice statistics and saved volume metrics are distinct; shading never changes measurements."}))}async function Cl(e,a,t,s,c){const i=s==="zh",o=document.createElement("canvas");o.width=1920,o.height=1800;const r=o.getContext("2d"),f=e.metadata,d="#243f56",m="#5c7487";r.fillStyle="white",r.fillRect(0,0,o.width,o.height);function u(E,y,_,x=23,S=d,C=1808){r.font=`${x}px Segoe UI, Microsoft YaHei, sans-serif`,r.fillStyle=S,r.fillText(String(E),y,_,C)}function v(E,y,_,x,S=21){r.font=`${S}px Segoe UI, Microsoft YaHei, sans-serif`;let C="",A=0;for(const h of String(E))r.measureText(C+h).width>x?(u(C,y,_+A*(S+7),S,m,x),A++,C=h):C+=h;return u(C,y,_+A*(S+7),S,m,x),A+1}function g(E,y,_,x,S,C=E.width/E.height){const A=Math.min(x,S*C),h=A/C;r.drawImage(E,y+(x-A)/2,_+(S-h)/2,A,h)}u(i?"OceanScope | 场比较汇报":"OceanScope | Field comparison report",56,64,38),u("v2.10",1760,64,24),u(`A · ${e.labels.a}`,56,108,25,"#168ba9",870),e.single||u(`B · ${e.labels.b}`,986,108,25,"#c6752a",878),u(`${i?"帧":"Frame"} ${f.frame} · ${e.group.toUpperCase()} ${f.component} · ${f.plane?.startsWith("oblique")?`${(f.rotation_axis||"y").toUpperCase()} ${f.angle_degrees}° / ${nn(f.section_percent)}%`:f.plane.toUpperCase()+" / "+f.slice_index} · ${i?"数值单位":"Value unit"} ${e.unit}`,56,151),u(e.single?i?"单组 GT；未提供预测，不计算比较误差。":"Single GT; no prediction and no comparison errors.":e.group==="sdf"?i?"SDF 数值差，不等于水面高度差；有效范围以当前数据的掩码为准。":"SDF field differences are not surface-height errors; validity follows the supplied masks.":i?"速度分量差 / 端点误差；瞬时矢量不是粒子轨迹。":"Velocity component differences / endpoint errors; instantaneous vectors are not particle paths.",56,190,22,m),u(`${i?"三维显示":"3D view"}: ${f.mode} · A ${f.gt_visible?"on":"off"}${e.single?"":` / B ${f.prediction_visible?"on":"off"}`} · ${i?"着色":"shading"}: ${f.shading||"original"} · ${i?"显示精度":"quality"}: ${f.preview_quality}`,56,228,22,m),r.fillStyle="#f4f8fb",r.fillRect(56,250,1808,480),g(a,56,250,1808,480);const p=t.length,l=28,b=(1808-l*(p-1))/p;if(t.forEach((E,y)=>{const _=56+y*(b+l),x=y===2?e.errorRange:e.sourceRange;u(e.titles[y],_,782,25,d,b),u(`${nn(x[0])} … ${nn(x[1])} ${e.unit}`,_,818,21,m,b),r.imageSmoothingEnabled=!1,g(E,_,840,b,310,e.aspects[y]),r.imageSmoothingEnabled=!0;const S=r.createLinearGradient(_,0,_+b,0);S.addColorStop(0,y===2?e.epe?"#f6f0fc":"#205bb1":"#ebf4fc"),y===2&&!e.epe&&S.addColorStop(.5,"#f6f8fa"),S.addColorStop(1,y===2?e.epe?"#672096":"#c94237":"#1f6fb0"),r.fillStyle=S,r.fillRect(_,1170,b,14),u(`${i?"有效":"Valid"}: ${e.counts[y].valid}/${e.counts[y].total} · ${i?"探针":"Probe"}: ${nn(e.probes[y])} ${e.unit}`,_,1220,20,m,b)}),u(i?"当前切片与局部区域":"Current slice and selected region",56,1280,27),e.single)u(i?"仅展示 GT 切片及有效样本；无 A/B 差异统计。":"GT slice and validity only; no A/B statistics.",56,1335,23,m);else{const E=[[i?"完整切片":"Full slice",e.whole],...e.local?.region?[[i?"黄色选区":"Yellow region",e.local]]:[]];u(`${e.epe?"Mean EPE":i?"平均有符号差":"Mean signed"} | ${e.epe?"RMS EPE":"MAE / RMSE"} | ${i?"共同有效 / 候选":"Common valid / candidates"}`,400,1280,22,m,1460),E.forEach(([y,_],x)=>{const S=1310+x*65;r.fillStyle="#f1f6f9",r.fillRect(56,S,1808,55),u(y,76,S+36),u(`${nn(_?.mean)} | ${e.epe?nn(_?.rmse):`${nn(_?.mae)} / ${nn(_?.rmse)}`} ${e.unit} | ${_?.count??0}/${_?.total??0} (${nn((_?.coverage??0)*100)}%)`,400,S+36,24)})}u(i?"已有全域指标 · 当前帧 · 原始有效范围":"Saved volume metrics · current frame · original support",56,1480,27);const w=e.savedFrameMetrics;if(e.single||!w||w.blocked)u(e.single?i?"不适用：单组查看。":"Not applicable: single dataset.":i?"此帧无可用评分。":"No available scores for this frame.",56,1530,24,m);else{const E=e.group==="sdf"?["mae","rmse","fluidIoU","coverage"]:["meanEpe","epeRmse","coverage"];u(E.map(y=>`${y}: ${nn(w[y])}${y==="coverage"||y==="fluidIoU"?"":` ${e.unit}`}`).join("   |   "),56,1530,24)}const B=w?.notice||w?.reason||(e.single?"No prediction provided.":"Missing samples are excluded, never zero.");v(B,56,1575,1808),v(i?"黄色表示选区，虚线表示探针。三维平滑只改变光照法线；原始顶点、切片与指标保持不变。坐标使用源网格坐标单位。":"Yellow marks the region; dashed lines mark the probe. Smooth shading changes lighting normals only. Original vertices, slices and metrics are unchanged. Coordinates use source-grid units.",56,1670,1808,21),u(`${f.comparison_id} · ${i?"完整设置与数值请另存汇报 JSON":"Save report JSON for complete settings and values"}`,56,1760,20,m),await vo(o,c)}function Bl(e,a){let t=1/0,s=-1/0;return e.forEach((c,i)=>{if(!c)return;const o=a[i];for(let r=0;r<c.values.length;r+=1){if(o&&!o.values[r])continue;const f=c.values[r];Number.isFinite(f)&&(t=Math.min(t,f),s=Math.max(s,f))}}),Number.isFinite(t)?[t,s]:[0,1]}function Al({frame:e,group:a,plane:t,sliceIndex:s,crosshair:c,onCrosshair:i,component:o="magnitude",fixedRange:r=null,lattice:f,single:d=!1,label:m="Dataset",frameNumber:u,frameSplit:v,viewMetadata:g={},angle:p=30,sectionPercent:l=50,rotationAxis:b="y",exportStem:w="comparison",errorScale:B,onErrorScale:E,region:y=null,onRegion:_,onInspection:x,inspectionContext:S,busy:C=!1,captureScene:A,reportReady:h=!1,reportLabels:R={},savedMetrics:M}){const{tr:N,language:F}=fe(),V=F==="zh",H=j.useRef(null),[J,q]=j.useState(!1),[Y,D]=j.useState(1),[$,U]=j.useState(""),z=B?.locked??J,k=B?.limit??Y,P=K=>E?E({locked:K,limit:k}):q(K),O=K=>E?E({locked:z,limit:K}):D(K),X=j.useMemo(()=>ia(e,a),[e,a]),W=j.useMemo(()=>t==="oblique"?Zt(f,p,l,b):null,[t,f,p,l,b]),T=j.useMemo(()=>["groundTruth","prediction","error"].map(K=>t==="oblique"?_c(e,X[K],o,f,W):bl(e,X[K],t,s,o)),[e,X,t,s,o,f,W]),Z=j.useMemo(()=>["groundTruth","prediction","error"].map((K,Q)=>t==="oblique"?T[Q]?.maskSlice:X[K]?.maskId?Mt(e,X[K].maskId,t,s):null),[e,X,t,s,T]),ne=j.useMemo(()=>d?null:Xs(T,Z,y),[d,T,Z,y]),ye=j.useMemo(()=>d?null:Xs(T,Z),[d,T,Z]),ve=j.useMemo(()=>co(f,t,s,W,T[0],y,c),[f,t,s,W,T,y,c]);j.useEffect(()=>{x?.({context:S,value:C?null:ve})},[x,S,ve,C]);const se=r||Bl(T.slice(0,2),Z.slice(0,2)),ie=a==="velocity"&&o==="magnitude",Ee=z&&wl(k,ie)||(T[2]?(ie?ml:fl)(T[2].values):[-1,1]),Re=[d?m:"Ground Truth","Prediction",ie?"Endpoint Error |Pred − GT|":"Signed Error (Pred − GT)"],Ae=t==="xy"?[0,1]:t==="xz"?[0,2]:[1,2],tn=W?[Math.max(W.spacing[0],1e-9),W.spacing[1],1]:f?.voxelSize||[1,1,1],Oe=K=>W?W.degenerate?1:Math.max(.15,(W.range[1]-W.range[0])/((W.height-1)*W.spacing[1])):K.width*tn[Ae[0]]/(K.height*tn[Ae[1]]),ke=T.map((K,Q)=>_l(K,Z[Q])),De=t==="xy"?2:t==="yz"?0:1,L=W?W.point(0,0):f?.origin?.map((K,Q)=>K+s*f.axisSteps[De][Q]),te=`Frame ${u??"unknown"} | ${Ja(v,u)} | ${Ht(v,u)} | ${a} ${o} | ${t==="oblique"?`Oblique ${b.toUpperCase()} ${p}° / ${l.toFixed(1)}%`:t.toUpperCase()+" index "+s}`;function de(K){const Q=T[0];i([(K%Q.width+.5)/Q.width,(Math.floor(K/Q.width)+.5)/Q.height])}function Be(){Zs(`${w}_${u}_local_diagnosis.json`,JSON.stringify({schema:"oceanscope.slice-diagnosis.v1",metadata:g,group:a,component:o,unit:X.unit||"undeclared",difference:ie?"vector_endpoint_error":"signed_B_minus_A",local:ne,whole:ye,world_region_corners:ve?.corners,probe_world:ve?.probe,scope:"current_slice_only_saved_volume_scores_unchanged",validity:"Intersection of finite A/B/error samples and their existing masks"},null,2))}function Me(){const K=T.map((Q,oe)=>{if(!Q)return null;const $e=Math.min(Q.width-1,Math.floor(c[0]*Q.width))+Q.width*Math.min(Q.height-1,Math.floor(c[1]*Q.height));return(!Z[oe]||Z[oe].values[$e])&&Number.isFinite(Q.values[$e])?Q.values[$e]:null});return jl({metadata:{...g,source_color_range:se,error_color_range:d?null:Ee,error_range_locked:z,probe_world:ve?.probe,world_region_corners:ve?.corners},labels:R,single:d,group:a,epe:ie,unit:X.unit,local:ne,whole:ye,counts:ke,probes:K,sourceRange:se,errorRange:Ee,metrics:M,titles:Re,aspects:T.map(Q=>Q?Oe(Q):1)})}async function sn(K=!1){try{if(!h)throw Error(V?"等待当前帧加载完成。":"Wait for the current frame.");const Q=A(),oe=Me();K?Zs(`${w}_${u}_report.json`,JSON.stringify(oe,null,2)):await Cl(oe,Q,[...H.current.querySelectorAll("canvas")],F,`${w}_${u}_report.png`),U("")}catch(Q){U(Q.message)}}async function Pn(){try{const K=[...H.current.querySelectorAll("canvas")],Q=document.createElement("canvas");Q.width=1800,Q.height=920;const oe=Q.getContext("2d");oe.fillStyle="white",oe.fillRect(0,0,1800,920),oe.fillStyle="#18374d",oe.font="20px sans-serif",oe.fillText("OceanScope | "+w,25,35,1740),oe.fillText(te,25,70,1740),oe.fillText("Plane origin (world units): "+(L?.map($e=>$e.toPrecision(5)).join(", ")||"undeclared"),25,105,1740),K.forEach(($e,Ge)=>{const He=25+Ge*590,In=Ge===2?Ee:se;oe.fillStyle="#18374d",oe.fillText(Re[Ge],He,155,560),oe.fillText(`${In.map(Se=>Se.toPrecision(4)).join(" to ")} ${X.unit||"undeclared"}`,He,185,560);const vn=Oe(T[Ge]),En=Math.min(555,460*vn),ct=En/vn;oe.drawImage($e,He,205,En,ct);const _n=oe.createLinearGradient(He,0,He+555,0);_n.addColorStop(0,Ge===2?ie?"#f6f0fc":"#205bb1":"#ebf4fc"),Ge===2&&!ie&&_n.addColorStop(.5,"#f6f8fa"),_n.addColorStop(1,Ge===2?ie?"#672096":"#c94237":"#1f6fb0"),oe.fillStyle=_n,oe.fillRect(He,700,555,18),oe.fillStyle="#18374d",oe.fillText(`${In[0].toPrecision(4)}                         ${In[1].toPrecision(4)} ${X.unit||""}`,He,745,555),oe.fillText(`Valid slice samples: ${ke[Ge].valid}/${ke[Ge].total}`,He,780,560)}),oe.fillText(`Source scale: ${r?"fixed":"auto per frame"}${d?"":` | Error scale: ${z?"fixed":"auto per frame"}`}`,25,830,1740),oe.fillText("Slice validity is not full-volume scoring coverage. Checkerboard = invalid. Source fields and scores unchanged.",25,865,1740),await Eo(Q,`${w}_${u}_${t}_${t==="oblique"?p:s}_slices.png`,{...g,source_color_range:se,error_color_range:Ee,error_range_locked:z,local_diagnosis:ne,world_region_corners:ve?.corners}),U("")}catch(K){U(K.message)}}return n.createElement("div",{"data-os-loc":"src/field/SliceTriptych.jsx:70:10","data-review-frame":u,"data-review-slice":te,ref:H,inert:C||void 0},n.createElement("div",{"data-os-loc":"src/field/SliceTriptych.jsx:70:111",className:"frame-split-toolbar"},A&&n.createElement(n.Fragment,null,n.createElement("button",{"data-os-loc":"src/field/SliceTriptych.jsx:70:165","data-os-action":"",className:"report-export",disabled:!h,onClick:()=>sn()},V?"导出场一页汇报图":"Export field report PNG"),n.createElement("button",{"data-os-loc":"src/field/SliceTriptych.jsx:70:302","data-os-action":"",disabled:!h,onClick:()=>sn(!0)},V?"导出汇报 JSON":"Export report JSON")),!d&&n.createElement(n.Fragment,null,n.createElement("label",{"data-os-loc":"src/field/SliceTriptych.jsx:70:429"},n.createElement("input",{"data-os-loc":"src/field/SliceTriptych.jsx:70:436","data-os-action":"",type:"checkbox",checked:z,onChange:K=>P(K.target.checked)}),V?"固定误差色标（跨帧）":"Lock error scale across frames"),z&&n.createElement("label",{"data-os-loc":"src/field/SliceTriptych.jsx:70:586"},V?"误差上限":"Error limit"," ",n.createElement("input",{"data-os-loc":"src/field/SliceTriptych.jsx:70:619","data-os-action":"","aria-label":"Error scale limit",type:"number",min:"0.000001",step:"0.1",value:k,onChange:K=>{const Q=Number(K.target.value);Q>0&&Number.isFinite(Q)&&O(Q)}}))),n.createElement("button",{"data-os-loc":"src/field/SliceTriptych.jsx:70:821","data-os-action":"",onClick:Pn,disabled:T.some((K,Q)=>Q<(d?1:3)&&!K)},d?V?"导出切片 PNG":"Export slice PNG":V?"导出并排切片 PNG":"Export slice comparison PNG")),n.createElement("small",{"data-os-loc":"src/field/SliceTriptych.jsx:70:1005"},te," · ",V?"有效样本比例仅针对当前切片，不等于全域计算覆盖率。":"Validity below is for this slice, not full-volume scoring coverage."),$&&n.createElement("p",{"data-os-loc":"src/field/SliceTriptych.jsx:70:1149",role:"alert"},$),n.createElement("section",{"data-os-loc":"src/field/SliceTriptych.jsx:70:1183",className:"slice-triptych","aria-label":`${a} synchronized slices`},T.slice(0,d?1:3).map((K,Q)=>{const oe=K&&c?Math.min(K.width-1,Math.floor(c[0]*K.width))+K.width*Math.min(K.height-1,Math.floor(c[1]*K.height)):null,$e=oe!==null&&(!Z[Q]||Z[Q].values[oe])&&Number.isFinite(K.values[oe]);return n.createElement("figure",{"data-os-loc":"src/field/SliceTriptych.jsx:71:338","data-review-id":"field-slice-"+a+"-"+Q,key:Re[Q]},n.createElement("figcaption",{"data-os-loc":"src/field/SliceTriptych.jsx:71:414"},n.createElement("strong",{"data-os-loc":"src/field/SliceTriptych.jsx:71:426"},Re[Q]),n.createElement("span",{"data-os-loc":"src/field/SliceTriptych.jsx:71:458"},Q===2?`${Ee[0].toPrecision(3)} … ${Ee[1].toPrecision(3)}`:`${se[0].toPrecision(3)} … ${se[1].toPrecision(3)}`," ",X.unit||N("(unit undeclared)"))),K?n.createElement(Lt,{slice:K,maskSlice:Z[Q],range:Q===2?Ee:se,palette:Q===2?ie?"absolute-error":"error":"ground-truth",aspect:Oe(K),crosshair:c,onCrosshair:i,plane:t,region:y}):n.createElement("div",{"data-os-loc":"src/field/SliceTriptych.jsx:71:909",className:"slice-unavailable"},N("Not available")),n.createElement("small",{"data-os-loc":"src/field/SliceTriptych.jsx:71:972"},N("Probe: "),$e?K.values[oe].toPrecision(6):N("Not valid")," ",X.unit," · ",a==="velocity"?o:N("SDF")))})),!d&&ne&&n.createElement(oo,{region:y,onRegion:_,local:ne,whole:ye,onLocate:de,dimensions:2,unit:X.unit||(V?"单位未声明":"undeclared"),absolute:ie,onExport:Be}),n.createElement("p",{"data-os-loc":"src/field/SliceTriptych.jsx:72:203",className:"height-note"},V?"三维白圈表示探针在切面上的位置；黄色框为选中区域，不代表水面高度。":"The 3D white ring marks the probe on this slice; the yellow box marks the selected region, not water-surface height."),W&&n.createElement("p",{"data-os-loc":"src/field/SliceTriptych.jsx:72:400",className:"height-note"},b==="y"?V?"横轴 s 沿切面，纵轴 Y 向上；使用原始网格坐标单位。斜切不会改变下方保存的全域统计。":"Horizontal: along-section distance s; vertical: Y up. Source-grid coordinates. Oblique inspection does not change saved volume statistics.":V?"横纵轴均沿当前倾斜切面，不等于世界坐标中的高度 Y。使用原始网格坐标单位；全域统计保持不变。":"Both axes lie in the tilted plane; the vertical axis is not world height Y. Source-grid coordinates; saved volume statistics remain unchanged."),n.createElement("div",{"data-os-loc":"src/field/SliceTriptych.jsx:72:844",className:"frame-split-toolbar"},ke.slice(0,d?1:3).map((K,Q)=>n.createElement("small",{"data-os-loc":"src/field/SliceTriptych.jsx:72:920",key:Q},Re[Q],": ",K.valid,"/",K.total," · ",K.fraction==null?"N/A":(100*K.fraction).toFixed(1)+"%"))))}const Ii={mae:"MAE",rmse:"RMSE",maxAbsoluteError:"Maximum absolute error",nearSurfaceMae:"Near-surface MAE",signAccuracy:"Sign accuracy",fluidIoU:"Fluid IoU",dice:"Dice",symmetricMeanSurfaceDistance:"Symmetric mean surface distance",hd95:"HD95",meanEpe:"Mean EPE",epeRmse:"EPE RMSE",epeP95:"EPE P95",relativeL2:"Relative L2",meanCosineSimilarity:"Mean cosine similarity",meanAngularErrorDegrees:"Mean angular error",divergenceMae:"Divergence MAE",coverage:"Coverage",validCount:"Valid voxels"},kl=["nearSurfaceMae","rmse","fluidIoU","meanEpe","epeP95","relativeL2","coverage","mae","maxAbsoluteError","signAccuracy","dice","symmetricMeanSurfaceDistance","hd95","epeRmse","componentMae","componentRmse","meanCosineSimilarity","meanAngularErrorDegrees","divergenceMae","validCount","nonFiniteCount","nearSurfaceCount","surfaceSampleCount","angularExcludedCount","divergenceStencilCount","trustedTau","effectiveBand"];Object.assign(Ii,{componentMae:"Component MAE (x, y, z)",componentRmse:"Component RMSE (x, y, z)",nonFiniteCount:"Non-finite pairs excluded",nearSurfaceCount:"Near-surface voxels",surfaceSampleCount:"Surface samples (pooled)",angularExcludedCount:"Angular exclusions",divergenceStencilCount:"Divergence stencils",trustedTau:"Trusted truncation τ",effectiveBand:"Effective band"});function Ml({metrics:e,group:a,unit:t,frame:s}){const{tr:c,language:i}=fe(),o=e?.[a],r=a==="sdf"?["mae","rmse","fluidIoU","coverage"]:["meanEpe","epeRmse","coverage"],f=o?kl.filter(m=>o[m]!==void 0):[],d=m=>n.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:14:21",key:m},n.createElement("span",{"data-os-loc":"src/field/MetricsPanel.jsx:14:36"},c(Ii[m])),n.createElement("strong",{"data-os-loc":"src/field/MetricsPanel.jsx:14:66"},o[m]===null?c("Not available"):Array.isArray(o[m])?o[m].map(u=>u==null?"N/A":Number(u).toPrecision(4)).join(" / "):typeof o[m]=="number"?o[m].toLocaleString(void 0,m.endsWith("Count")?{}:{maximumSignificantDigits:5}):String(o[m])),n.createElement("small",{"data-os-loc":"src/field/MetricsPanel.jsx:14:363"},["mae","rmse","maxAbsoluteError","nearSurfaceMae","symmetricMeanSurfaceDistance","hd95","meanEpe","epeRmse","epeP95","componentMae","componentRmse","trustedTau","effectiveBand"].includes(m)?t:m==="coverage"?c("fraction"):m==="meanAngularErrorDegrees"?c("degrees"):m==="divergenceMae"?c(t==="m/s"?"1/s":"velocity / length"):""));return n.createElement("aside",{"data-os-loc":"src/field/MetricsPanel.jsx:15:10",className:"metrics-panel"},n.createElement("h3",{"data-os-loc":"src/field/MetricsPanel.jsx:15:43"},a==="sdf"?i==="zh"?"体积 SDF 指标":"Volumetric SDF metrics":i==="zh"?"原网格速度指标":"Native-grid velocity metrics"),n.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:181",className:"metric-scope"},i==="zh"?`帧 ${s??"—"} · 原网格有效体素 · 不随选区改变`:`Frame ${s??"—"} · Valid native-grid voxels · Independent of ROI`),o?.notice&&n.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:354",role:"note"},i==="zh"&&o.noticeZh?o.noticeZh:c(o.notice)),o?.blocked?n.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:459",className:"score-blocked"},c(o.reason)||c("Scores blocked: declare field semantics and units.")):o?n.createElement(n.Fragment,null,n.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:15:637",className:"metric-grid"},r.filter(m=>f.includes(m)).map(d),f.filter(m=>m.endsWith("Count")).map(d)),n.createElement("details",{"data-os-loc":"src/field/MetricsPanel.jsx:15:776"},n.createElement("summary",{"data-os-loc":"src/field/MetricsPanel.jsx:15:785"},i==="zh"?"更多指标":"More metrics"),n.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:15:843",className:"metric-grid"},o.nearSurfaceDomain&&n.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:899"},c(o.nearSurfaceDomain),n.createElement("br",{"data-os-loc":"src/field/MetricsPanel.jsx:15:932"}),c("Band: "),o.effectiveBand?.toPrecision(4)," ",t),f.filter(m=>!r.includes(m)&&!m.endsWith("Count")).map(d)))):n.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:578"},c("Metrics are not available for this frame.")))}const Wn="Common valid finite SDF voxels M; N = |M|. Interior means SDF ≤ 0.",hn="Common valid finite velocity voxels M; not automatically restricted to fluid interior.",_e=(e,a,t,s,c,i,o,r="")=>({id:e,label:a,formula:t,unitKind:s,direction:c,group:i,domain:o,caveats:r}),Yt=[_e("mae","Water-surface elevation MAE","mean |ηp − ηg|","length","Lower","elevation","Paired trustworthy world-Y zero-crossing columns on common XZ lattice.","Not crest-to-trough wave height or Hs. Filled exterior, missing support and multiple crossings are excluded; inspect both coverage denominators."),_e("rmse","Water-surface elevation RMSE","sqrt(mean (ηp − ηg)^2)","length","Lower","elevation","Same paired height columns.","Full-resolution aligned SDF, never preview mesh."),_e("maxAbsoluteError","Maximum elevation error","max |ηp − ηg|","length","Lower","elevation","Same paired height columns."),_e("coverage","Height paired coverage","paired valid columns / GT valid columns","fraction","Context","elevation","GT reconstructible columns.","Zero denominator: N/A. Not SDF voxel coverage."),_e("gtCoverage","GT reconstructible coverage","GT valid columns / candidate XZ columns","fraction","Context","elevation","All candidate XZ columns.","Read with paired coverage to expose excluded GT surfaces."),_e("mae","SDF MAE","Σ |p − g| / N","length","Lower","sdf",Wn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),_e("rmse","SDF RMSE","√(Σ (p − g)² / N)","length","Lower","sdf",Wn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),_e("maxAbsoluteError","Maximum absolute error","max |p − g|","length","Lower","sdf",Wn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),_e("nearSurfaceMae","Near-surface MAE","mean |clipτ(p) − clipτ(g)| on B","length","Lower","sdf","B = M ∩ {|g| ≤ effective band}, including numerical tolerance.","GT defines B. For TSDF, band ≤ shared τ; clip both values at τ. Shared τ is min of both TSDF τ values, or the single TSDF τ in a mixed pair. No clipping for full/full."),_e("signAccuracy","Sign accuracy","count[(p ≤ 0) = (g ≤ 0)] / N","fraction","Higher","sdf",Wn),_e("fluidIoU","Fluid IoU","|P ∩ G| / |P ∪ G|","fraction","Higher","sdf",Wn,"P and G are predicted and GT interior sets in M. Both empty: 1."),_e("dice","Dice","2 |P ∩ G| / (|P| + |G|)","fraction","Higher","sdf",Wn,"Both interior sets empty: 1."),_e("symmetricMeanSurfaceDistance","Symmetric mean surface distance","mean(D(G→P) ∪ D(P→G))","length","Lower","sdf","Pooled nearest distances between sampled zero crossings; each surface uses its own valid support.","Approximation, at most 4096 samples per surface. Not exact continuous-mesh distance; unavailable if either surface is empty."),_e("hd95","HD95","percentile95(D(G→P) ∪ D(P→G))","length","Lower","sdf","Same pooled sampled-surface distances.","Linear percentile interpolation; not maximum Hausdorff distance. Surface-sampling limitations apply."),_e("meanEpe","Mean EPE","mean ‖p − g‖₂","speed","Lower","velocity",hn),_e("epeRmse","EPE RMSE","√mean ‖p − g‖₂²","speed","Lower","velocity",hn),_e("epeP95","EPE P95","percentile95(‖p − g‖₂)","speed","Lower","velocity",hn,"Linear interpolation between ordered samples."),_e("componentMae","Component MAE (x, y, z)","mean |pₖ − gₖ|, k = x,y,z","speed","Lower","velocity",hn),_e("componentRmse","Component RMSE (x, y, z)","√mean (pₖ − gₖ)², k = x,y,z","speed","Lower","velocity",hn),_e("relativeL2","Relative L2","√(Σ ‖p − g‖₂² / Σ ‖g‖₂²)","dimensionless","Lower","velocity",hn,"Unavailable when GT energy is zero; no artificial epsilon in denominator."),_e("meanCosineSimilarity","Mean cosine similarity","mean clamp((p·g)/(‖p‖₂ ‖g‖₂), −1, 1)","dimensionless","Higher","velocity",hn,"Exclude either magnitude ≤ ε (default 1e−8)."),_e("meanAngularErrorDegrees","Mean angular error","mean acos(cosine) × 180/π","degrees","Lower","velocity",hn,"Same nonzero-vector subset as cosine similarity."),_e("divergenceMae","Divergence MAE","mean |∇·p − ∇·g|","inverseTime","Lower","velocity","Six valid neighboring samples; finite central-difference divergence. Borders excluded.","Σₖ (vₖ(i+eₖ) − vₖ(i−eₖ))/(2hₖ). Orthogonal aligned lattice. Divergence mismatch, not absolute incompressibility."),_e("coverage","Coverage","N / total lattice voxels","fraction","Context","both","Reported separately for SDF and velocity.","Always read with the error: small valid support can hide missing predictions.")];function Rl(){return{schema:1,notation:"g = Ground Truth; p = Prediction. These are evaluation metrics, not a weighted training loss.",sequence:"Equal weight per valid frame, not pooled voxels. Excluded frame counts are reported. Population standard deviation; interpolated P95.",metrics:Yt}}function Pl(e){const a=e.filter(r=>typeof r=="number"&&Number.isFinite(r)).sort((r,f)=>r-f);if(!a.length)return{median:null,p95:null,stddev:null};const t=r=>{const f=(a.length-1)*r,d=Math.floor(f),m=f-d;return a[d]*(1-m)+a[Math.min(d+1,a.length-1)]*m},s=a.reduce((r,f)=>Math.max(r,Math.abs(f)),0),c=a.map(r=>s?r/s:0),i=c.reduce((r,f)=>r+f/a.length,0),o=Math.sqrt(c.reduce((r,f)=>r+(f-i)**2/a.length,0))*s;return{median:t(.5),p95:t(.95),stddev:Number.isFinite(o)?o:null}}function Ni(e){if(!Number.isSafeInteger(e?.frame)||!Number.isSafeInteger(e?.prediction_origin_frame)||!Number.isFinite(e?.fps)||e.fps<=0||e.prediction_type==="extrapolation"&&e.frame<=e.prediction_origin_frame)return null;const a=(e.frame-e.prediction_origin_frame)/e.fps;return Number.isFinite(a)?a:null}const Il={length:"m",speed:"m/s",inverseTime:"1/s",degrees:"degrees",fraction:"fraction",dimensionless:"dimensionless"};function Nl(e,a={}){return e.flatMap(t=>Yt.filter(s=>s.group===t||s.group==="both"&&t!=="elevation").flatMap(s=>{const c=s.unitKind==="length"?a.sdf??"m":s.unitKind==="speed"?a.velocity??"m/s":s.unitKind==="inverseTime"&&a.velocity&&a.velocity!=="m/s"?`(${a.velocity}) / length`:Il[s.unitKind],i={group:t,key:s.id,label:s.label,unit:c,direction:s.direction};return s.id==="componentMae"||s.id==="componentRmse"?["x","y","z"].map((o,r)=>({...i,id:`${t}.${s.id}.${o}`,index:r,label:`${s.id==="componentMae"?"Component MAE":"Component RMSE"} ${o.toUpperCase()}`})):[{...i,id:`${t}.${s.id}`}]}))}function Fl({metrics:e,frames:a=[],expectedFrames:t=[],groups:s=[],status:c,units:i,frameSplit:o,frameSubset:r="all"}){const f=Object.values(e?.settings?.sdf||{}).some(B=>B?.semantics==="water_interior"),d=f?"gt_water_common_distance_support":e?.settings?.sdfEvaluationRegion||"full_domain",m=Nl(s,i).map(B=>({...B,label:B.label+(f&&B.group==="sdf"?["fluidIoU","dice","signAccuracy","symmetricMeanSurfaceDistance","hd95"].includes(B.key)?" (full domain)":" (conditional GT-water support)":"")+(d==="gt_water"&&B.group==="sdf"?["fluidIoU","dice","symmetricMeanSurfaceDistance","hd95"].includes(B.key)?" (full domain)":" (GT water)":"")})),u=new Set(a),v=[...t,...a,...Object.keys(e?.frames||{}).map(Number),...e?.missingPredictionFrames||[]],g=new Map((o?.rows??[]).map(B=>[B.frame,B])),p=[...new Set(v.filter(Number.isInteger))].sort((B,E)=>B-E).filter(B=>gl(g,B,r)),l=p.map(B=>{const E=e?.frames?.[B],y={};for(const S of m){const C=E?.[S.group],A=C?.[S.key],h=S.index===void 0?A:A?.[S.index];y[S.id]=!C?.blocked&&Number.isFinite(h)?h:null}const _=s.filter(S=>S!=="elevation"&&E?.[S]?.blocked).map(S=>`${S}: ${E[S].reason||"Scoring blocked"}`).join("; "),x=g.get(B);return{frame:B,elevationAudit:E?.elevation??null,algorithmVersion:e?.algorithmVersion??"legacy undeclared",split:Ja(g,B),predictionType:Ht(g,B),predictionOriginFrame:x?.prediction_origin_frame??null,fps:x?.fps??null,horizonSeconds:Ni(x),available:u.has(B),calculated:!!E,reason:_,values:y}}),b=m.map(B=>{const E=l.map(x=>x.values[B.id]).filter(Number.isFinite),y=E.length,_=y?E.reduce((x,S)=>x+S/y,0):null;return{...B,mean:_,...Pl(E),minimum:y?E.reduce((x,S)=>Math.min(x,S)):null,maximum:y?E.reduce((x,S)=>Math.max(x,S)):null,valid:y,excluded:l.length-y,total:l.length}}),w=[...new Set(p.flatMap(B=>s.filter(E=>E!=="elevation").flatMap(E=>e?.frames?.[B]?.[E]?.blocked?[`${E.toUpperCase()}: ${e.frames[B][E].reason||"Scoring prerequisites not met"}`]:[])))];return{columns:m,rows:l,summary:b,blockedReasons:w,evaluationRegion:d,frameSubset:r,sdfValidation:e?.settings?.sdf||{},total:l.length,calculated:l.filter(B=>B.calculated).length,complete:c==="ready"&&l.length>0&&l.every(B=>B.calculated)&&!w.length,status:c}}function Fe(e){return Number.isFinite(e)?Number(e.toPrecision(6)).toString():"N/A"}const Ol=e=>{const a=e==null?"N/A":String(e);return/[",\r\n]/.test(a)?`"${a.replaceAll('"','""')}"`:a};function Us(e,a){const t=e.complete?"complete":"partial",s=a==="frames"?[["frame","frame_status","sequence_status",...e.columns.map(c=>`${c.id} [${c.unit}]`),"excluded_reason"],...e.rows.map(c=>[c.frame,c.reason?"scoring blocked":c.calculated?"calculated":"not calculated",t,...e.columns.map(i=>c.values[i.id]),c.reason||""])]:[["metric","unit","mean","minimum","maximum","valid_frames","excluded_frames","total_frames","sequence_status","median","p95","stddev"],...e.summary.map(c=>[c.id,c.unit,c.mean,c.minimum,c.maximum,c.valid,c.excluded,c.total,t,c.median,c.p95,c.stddev])];return a==="frames"&&(s[0].push("split","prediction_type","prediction_origin_frame","fps","horizon_seconds"),s.slice(1).forEach((c,i)=>c.push(e.rows[i].split||"unassigned",e.rows[i].predictionType||"unassigned",e.rows[i].predictionOriginFrame,e.rows[i].fps,e.rows[i].horizonSeconds))),a==="frames"&&(s[0].push("algorithm_version","elevation_valid_columns","elevation_gt_valid_columns","elevation_candidate_columns","elevation_reason","elevation_excluded_reasons"),s.slice(1).forEach((c,i)=>{const o=e.rows[i],r=o.elevationAudit;c.push(o.algorithmVersion,r?.validColumns,r?.gtValidColumns,r?.candidateColumns,r?.reason||(r?"":"Not calculated by this result version"),JSON.stringify(r?.excludedReasons??{}))})),s[0].push("frame_subset"),s.slice(1).forEach(c=>c.push(e.frameSubset||"all")),s[0].push("sdf_error_region","geometry_region"),s.slice(1).forEach(c=>c.push(e.evaluationRegion||"full_domain","full_domain")),s[0].push("gt_validation_mode","prediction_validation_mode","gt_override_reason","prediction_override_reason"),s.slice(1).forEach(c=>c.push(e.sdfValidation?.gt?.validationMode||"legacy undeclared",e.sdfValidation?.prediction?.validationMode||"legacy undeclared",e.sdfValidation?.gt?.overrideReason||"",e.sdfValidation?.prediction?.overrideReason||"")),s.map(c=>c.map(Ol).join(",")).join(`\r
`)}function Tl(e,a,t=640){const c=e.filter(l=>Number.isFinite(l.values[a])).map(l=>l.values[a]);let i=c.length?Math.min(...c):0,o=c.length?Math.max(...c):1;if(i===o){const l=Math.max(Math.abs(i)*.05,1e-6);i-=l,o+=l}const r=e[0]?.frame??0,f=e.at(-1)?.frame??r,d=l=>f===r?(t+42)/2:64+(l-r)/(f-r)*(t-86),m=l=>180-(l-i)/(o-i)*150,u=[],v=[];let g=[],p=null;for(const l of e){const b=l.values[a];if((!Number.isFinite(b)||p!==null&&l.frame!==p+1)&&(g.length&&u.push(g),g=[]),Number.isFinite(b)){const w={frame:l.frame,value:b,x:d(l.frame),y:m(b)};g.push(w),v.push(w)}p=l.frame}return g.length&&u.push(g),{min:i,max:o,start:r,end:f,x:d,y:m,points:v,segments:u}}function Dl(e,a,t=.9){const s=e.filter(i=>Number.isFinite(i.values[a?.id]));return{worst:a?.direction==="Context"?[]:[...s].sort((i,o)=>(a?.direction==="Higher"?1:-1)*(i.values[a.id]-o.values[a.id])||i.frame-o.frame).slice(0,5),lowCoverage:e.filter(i=>Number.isFinite(i.values[`${a?.group}.coverage`])&&i.values[`${a.group}.coverage`]<t),unavailable:e.filter(i=>!Number.isFinite(i.values[a?.id]))}}const $l=e=>`"${String(e??"undeclared").replaceAll('"','""')}"`;function Wl(e,a,t){const s=[["report_identifier",a],["frame_subset",e.frameSubset],["frame_numbers",e.rows.map(c=>c.frame).join(";")],["frame_count",e.rows.length],["status",e.complete?"complete":"partial"],["sdf_error_region",e.evaluationRegion],["units",JSON.stringify(e.columns.map(c=>({metric:c.id,unit:c.unit})))],["sdf_declarations",JSON.stringify(e.sdfValidation)],["split_manifest_sha256",t?.sha256],["aggregation","Equal weight per valid frame; mean of frame RMSE, not pooled voxel RMSE. N/A excluded, never zero."],["valid_counts",JSON.stringify(e.summary.map(c=>({metric:c.id,valid:c.valid,total:c.total})))],["limitations","SDF error is not wave-height error. Read error with coverage. Frame numbers do not certify physical-time alignment. Split membership is declared, not independently verified. Exterior-filled distances are conditional, not full-domain accuracy."],["provenance","Use the saved-result ZIP for source identities and full scoring protocol. This notes file describes the currently selected report subset."]];return[["field","value"],...s].map(c=>c.map($l).join(",")).join(`\r
`)}function Vl({report:e,metric:a,onFrame:t,onDownload:s,comparisonId:c,frameSplit:i}){const{language:o,tr:r}=fe(),f=o==="zh",d=(p,l)=>f?l:p,[m,u]=j.useState(.9),v=j.useMemo(()=>Dl(e.rows,a,m),[e.rows,a,m]),g=(p,l)=>p.slice(0,20).map(b=>n.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:9:51",key:b.frame},n.createElement("button",{"data-os-loc":"src/field/FrameReview.jsx:9:69","data-os-action":"",disabled:!b.available||!t,"aria-label":`${l==="unavailable"?"Review unavailable frame":l==="coverage"?"Review coverage frame":"Review frame"} ${b.frame}`,onClick:()=>t(b.frame)},b.frame)," · ",Fe(l==="coverage"?b.values[`${a?.group}.coverage`]:b.values[a?.id]),l==="unavailable"&&n.createElement("span",{"data-os-loc":"src/field/FrameReview.jsx:9:426"}," · ",b.reason||(b.calculated?d("Metric unavailable on this support; see definitions below","该指标在当前有效区域不可用，请查看下方定义"):d("Not calculated / missing frame","尚未计算或帧缺失")))));return n.createElement("details",{"data-os-loc":"src/field/FrameReview.jsx:10:9",className:"frame-review"},n.createElement("summary",{"data-os-loc":"src/field/FrameReview.jsx:10:43"},d("Frame review & report notes","异常帧检查与报告说明")),n.createElement("p",{"data-os-loc":"src/field/FrameReview.jsx:11:3"},d("Review only: no frames are removed and no scores are changed. Lists follow the selected subset and metric. Worst does not mean statistically abnormal.","仅供检查：不剔除帧、不改变数值。列表跟随当前集合和指标；最差帧不等同于统计异常。")),n.createElement("div",{"data-os-loc":"src/field/FrameReview.jsx:12:3",className:"frame-review-grid"},n.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:12:38"},n.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:12:47"},d("Worst 5 frames","表现最差的 5 帧")," · ",r(a?.label)),v.worst.length?n.createElement("ol",{"data-os-loc":"src/field/FrameReview.jsx:12:132"},g(v.worst,"worst")):n.createElement("p",{"data-os-loc":"src/field/FrameReview.jsx:12:171"},d("No rankable finite values. Coverage is context, not accuracy.","没有可排序的有效数值；覆盖率是背景信息，不代表精度。"))),n.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:13:3"},n.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:13:12"},d("Low coverage","低覆盖率")," · ",v.lowCoverage.length),n.createElement("label",{"data-os-loc":"src/field/FrameReview.jsx:13:77"},d("Review threshold","检查阈值")," ",n.createElement("input",{"data-os-loc":"src/field/FrameReview.jsx:13:115","data-os-action":"","aria-label":"Coverage review threshold",type:"number",min:"0",max:"1",step:"0.05",value:m,onChange:p=>{const l=Number(p.target.value);p.target.value!==""&&Number.isFinite(l)&&l>=0&&l<=1&&u(l)}})),n.createElement("small",{"data-os-loc":"src/field/FrameReview.jsx:13:348"},d("Below this fraction; review aid, not a scientific pass/fail criterion.","低于此比例时列出；仅辅助检查，不是科研合格线。")),n.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:13:466"},g(v.lowCoverage,"coverage"))),n.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:14:3"},n.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:14:12"},d("Unavailable metric","指标不可用")," · ",v.unavailable.length),n.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:14:84"},g(v.unavailable,"unavailable")),n.createElement("small",{"data-os-loc":"src/field/FrameReview.jsx:14:134"},d("At most 20 entries per list; all values remain in the frame table and CSV.","每个列表最多显示 20 项，全部数据仍保留在逐帧表格和 CSV。")))),n.createElement("details",{"data-os-loc":"src/field/FrameReview.jsx:15:3"},n.createElement("summary",{"data-os-loc":"src/field/FrameReview.jsx:15:12"},d("How to interpret these results","如何解读这些结果")),n.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:15:79"},n.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:16:4"},d("N/A is not zero: it may mean missing frames, blocked scoring, no valid samples, or an unsupported metric. The list gives known blocking reasons; metric definitions explain other restrictions.","N/A 不是零：可能是缺帧、计算被阻止、无有效样本或指标不适用。列表显示已知阻止原因，其余限制见指标定义。")),n.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:17:4"},d("A lower error with lower coverage is not automatically better. Compare models on matching frames and common spatial support.","误差更低但覆盖率更低，不自动代表更好。模型比较应使用匹配帧和共同有效空间区域。")),n.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:18:4"},d("Exterior-filled SDF supports conditional interior distance errors only; it does not certify full-domain distance accuracy. Surface metrics may be unavailable.","水外固定填值的 SDF 只支持有条件的水内距离误差，不能证明全域距离精度；表面指标可能不可用。")),n.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:19:4"},d("SDF MAE is not wave-height MAE. Sequence means give equal weight to valid frames, not to pooled voxels.","SDF MAE 不等于浪高 MAE。序列均值对有效帧等权，并非将所有体素合并计算。")))),n.createElement("button",{"data-os-loc":"src/field/FrameReview.jsx:21:3","data-os-action":"",disabled:!e.total,onClick:()=>s(`${c}_${e.frameSubset}_report_notes.csv`,Wl(e,c,i))},d("Export report notes CSV","导出报告说明 CSV")))}function zl({point:e,row:a,selected:t,onFrame:s,language:c}){const i=!!(s&&a?.available),o=a?.predictionType||"unassigned",r={train:"#b66b14",validation:"#8052bc",test:"#008c9c",unassigned:"#7b8794"}[a?.split||"unassigned"];return n.createElement("g",{"data-os-loc":"src/field/FrameCurvePoint.jsx:5:9","data-os-action":"",transform:`translate(${e.x},${e.y})`,role:"button","aria-label":`${c==="zh"?"选择曲线帧":"Select plotted frame"} ${e.frame}`,"aria-disabled":!i,tabIndex:i?0:-1,onClick:()=>i&&s(e.frame),onKeyDown:f=>{i&&["Enter"," "].includes(f.key)&&(f.preventDefault(),s(e.frame))},style:{cursor:i?"pointer":"default"}},n.createElement("title",{"data-os-loc":"src/field/FrameCurvePoint.jsx:6:2"},`Frame ${e.frame}: ${e.value} | ${a?.split||"unassigned"} | ${o}`),n.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:6:89",r:"7",fill:"transparent"}),t&&n.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:7:13",r:"7",fill:"none",stroke:"#d36218",strokeWidth:"2"}),o==="anchor"?n.createElement("rect",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:19",x:"-4",y:"-4",width:"8",height:"8",fill:r}):o==="extrapolation"?n.createElement("path",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:98",d:"M 0 -5 L 5 4 L -5 4 Z",fill:r}):o==="interpolation"?n.createElement("path",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:168",d:"M 0 -5 L 5 0 L 0 5 L -5 0 Z",fill:r}):n.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:221",r:"3",fill:r}))}function Xl({rows:e,metricKey:a,manifest:t,modelName:s}){const{language:c}=fe(),i=c==="zh",o=new Map;let r=0;const f=new Map((t?.rows??[]).map(d=>[d.frame,d]));for(const d of e){const m=f.get(d.frame);if(m?.prediction_type!=="extrapolation")continue;const u=Ni(m);if(u===null){r++;continue}const v=`${m.prediction_origin_frame} / ${m.fps} fps`;o.has(v)||o.set(v,[]),o.get(v).push({frame:d.frame,seconds:u,value:d.values[a]})}return!o.size&&!r?null:n.createElement("details",{"data-os-loc":"src/field/PredictionTrend.jsx:18:9"},n.createElement("summary",{"data-os-loc":"src/field/PredictionTrend.jsx:18:18"},s&&`${s} · `,i?"未来外推时间趋势":"Future prediction horizon"),n.createElement("p",{"data-os-loc":"src/field/PredictionTrend.jsx:18:110"},i?"按声明的输入起点和 FPS 分图；缺失帧不连线，不合并不同预测。":"Separate plots for declared origin and FPS; missing frames are not connected and different predictions are not merged."),r>0&&n.createElement("p",{"data-os-loc":"src/field/PredictionTrend.jsx:19:14"},i?`${r} 帧缺少有效时间声明，仍使用上方帧号曲线。`:`${r} frame(s) without valid timing; retain the frame-number plot above.`),[...o].map(([d,m])=>{const u=m.filter(w=>Number.isFinite(w.value)),v=Math.max(1,...m.map(w=>w.seconds)),g=u.length?Math.min(...u.map(w=>w.value)):0,p=u.length?Math.max(...u.map(w=>w.value)):1,l=w=>50+w.seconds/v*510,b=w=>160-(w.value-g)/(p-g||1)*120;return n.createElement("figure",{"data-os-loc":"src/field/PredictionTrend.jsx:24:10",key:d},n.createElement("figcaption",{"data-os-loc":"src/field/PredictionTrend.jsx:24:28"},i?"预测起点":"Prediction origin"," ",d," · ",a),n.createElement("svg",{"data-os-loc":"src/field/PredictionTrend.jsx:24:104",role:"img","aria-label":`Prediction horizon ${d}`,viewBox:"0 0 600 200",width:"100%"},n.createElement("line",{"data-os-loc":"src/field/PredictionTrend.jsx:25:4",x1:"50",x2:"560",y1:"160",y2:"160",stroke:"#a9bac8"}),m.map((w,B)=>{const E=m[B-1];return Number.isFinite(w.value)&&n.createElement("g",{"data-os-loc":"src/field/PredictionTrend.jsx:26:80",key:w.frame},E&&w.frame===E.frame+1&&Number.isFinite(E.value)&&n.createElement("line",{"data-os-loc":"src/field/PredictionTrend.jsx:26:157",x1:l(E),y1:b(E),x2:l(w),y2:b(w),stroke:"#008c9c"}),n.createElement("circle",{"data-os-loc":"src/field/PredictionTrend.jsx:26:228",cx:l(w),cy:b(w),r:"4",fill:"#008c9c"},n.createElement("title",{"data-os-loc":"src/field/PredictionTrend.jsx:26:277"},w.frame,": ",Fe(w.value),"; ",Fe(w.seconds)," s")))}),n.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:4",x:"8",y:"40"},Fe(p)),n.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:48",x:"8",y:"160"},Fe(g)),n.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:93",x:"50",y:"186"},"0"),n.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:122",x:"500",y:"186"},Fe(v)," s")))}))}const Zl={missing_or_nonfinite_column:["missing or non-finite column","缺失或非有限数值列"],no_interior_to_exterior_span:["no trustworthy interior-to-exterior span","缺少可信的水内至水外跨度"],ambiguous_or_multiple_crossings:["ambiguous or multiple surfaces","交叉不明确或存在多层水面"],crossing_touches_truncation:["crossing touches truncation boundary","交叉接触截断边界"],nonfinite_height:["non-finite height","高度不是有限数值"],nonfinite_difference:["non-finite height difference","高度差不是有限数值"],outside_common_columns:["outside common column support","不在共同有效列内"]},Gl={"No paired trustworthy single-surface columns":"没有可配对的可信单层水面列。","Invalid world-Y lattice":"世界 Y 轴网格无效。","Invalid height input dimensions":"高度输入维度无效。","Height column grids differ":"高度列网格不一致。","Height requires full SDF or trusted TSDF; filled exterior/unknown is not a trustworthy zero crossing":"需要完整 SDF 或可信 TSDF；水外填值或类型未知无法提供可信零交叉。","Height requires validated unchanged SDF distances":"需要经验证且未重建的 SDF 距离。","Height requires axis-aligned world-Y-up lattice":"需要与世界坐标轴对齐、Y 轴向上的网格。","Height requires a comparison with matching declared units":"需要 GT 与预测的声明单位一致。","Height requires finite positive trusted truncation distance":"需要有限、正值且可信的截断距离。"};function Hl({data:e}){const{language:a}=fe(),t=a==="zh",s=c=>{const[i,...o]=c.split(":"),r=o.length?o.join(":"):i;return(o.length?i==="gt"?"GT: ":i==="prediction"?t?"预测：":"Prediction: ":i+": ":"")+(Zl[r]?.[t?1:0]??r)};return n.createElement("details",{"data-os-loc":"src/field/HeightSupportAudit.jsx:28:9"},n.createElement("summary",{"data-os-loc":"src/field/HeightSupportAudit.jsx:28:18"},t?"当前帧高度有效区域与排除原因":"Current-frame height support and exclusions"),e?n.createElement(n.Fragment,null,e.reason&&n.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:30:16"},t?Gl[e.reason]??e.reason:e.reason),e.blocked&&n.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:31:17"},t?"此帧高度评分不可用；不能把未评估数量当作零。":"Height scoring unavailable for this frame; unevaluated counts are not zero."),n.createElement("table",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:2","aria-label":t?"高度有效区域明细":"Height support audit"},n.createElement("thead",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:59"},n.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:66"},n.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:70"},t?"项目／原因":"Support / reason"),n.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:110"},t?"列数":"Columns"))),n.createElement("tbody",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:151"},[[t?"有效配对列":"Valid paired columns","validColumns"],[t?"GT 有效列":"Valid GT columns","gtValidColumns"],[t?"候选水平列":"Candidate horizontal columns","candidateColumns"]].map(([c,i])=>n.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:187",key:i},n.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:201",scope:"row"},c),n.createElement("td",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:228"},e.blocked||!Number.isFinite(e[i])?"N/A":e[i]))),Object.entries(e.excludedReasons??{}).map(([c,i])=>n.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:59",key:c},n.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:73",scope:"row"},s(c)),n.createElement("td",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:106"},Number.isFinite(i)?i:"N/A"))))),n.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:35:18"},t?"配对覆盖率＝配对列／GT 有效列；GT 可重建比例＝GT 有效列／候选列。排除原因不代表模型排名。":"Paired coverage = paired / valid GT columns; GT reconstructible fraction = valid GT / candidate columns. Exclusions are not model rankings.")):n.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:29:9"},t?"此帧没有高度记录。旧结果需重新创建比较；尚未载入的帧请先选择。":"No height record for this frame. Create a new comparison for legacy results, or select a loaded frame."))}function ql(e,a){const t=URL.createObjectURL(new Blob(["\uFEFF",a],{type:"text/csv;charset=utf-8"})),s=document.createElement("a");s.href=t,s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}const Ll=[];function Yl({metrics:e,frames:a,expectedFrames:t=Ll,groups:s,group:c,status:i,currentFrame:o,onFrame:r,onDownload:f=ql,comparisonId:d="comparison",sdfUnit:m="m",velocityUnit:u="m/s",onReviewSetup:v,frameSplit:g}){const{tr:p,language:l}=fe(),[b,w]=j.useState(()=>g?"test":"all"),B=Object.values(e?.frames||{}).some(P=>P.elevation),E=j.useMemo(()=>B?[...s,"elevation"]:s,[s,B]),[y,_]=j.useState(""),x=E.includes(y)?y:c;j.useEffect(()=>_(""),[c]),j.useEffect(()=>w(g?"test":"all"),[g?.sha256,!!g]);const S=j.useMemo(()=>Fl({metrics:e,frames:a,expectedFrames:t,groups:E,status:i,units:{sdf:m,velocity:u},frameSplit:g,frameSubset:b}),[e,a,t,E,i,m,u,g,b]),C=S.columns.filter(P=>P.group===x),A=S.summary.filter(P=>P.group===x),[h,R]=j.useState(""),[M,N]=j.useState(0),[F,V]=j.useState(640),H=j.useRef(null),J=C.find(P=>P.id===h)||C[0];j.useEffect(()=>{if(typeof ResizeObserver>"u")return;const P=new ResizeObserver(([O])=>V(Math.max(280,Math.round(O.contentRect.width))));return P.observe(H.current),()=>P.disconnect()},[]);const q=j.useMemo(()=>Tl(S.rows,J?.id,F),[S.rows,J?.id,F]),Y=Math.max(1,Math.ceil(S.rows.length/50)),D=Math.min(M,Y-1),$=S.rows.slice(D*50,(D+1)*50),U=j.useMemo(()=>new Map(S.rows.map(P=>[P.frame,P])),[S.rows]),z=U.get(o),k=S.summary.find(P=>P.id===J?.id);return n.createElement("section",{"data-os-loc":"src/field/SequenceMetrics.jsx:31:9",className:"sequence-metrics",ref:H,"aria-label":p("Sequence loss analysis")},n.createElement("h2",{"data-os-loc":"src/field/SequenceMetrics.jsx:32:3"},p("Per-frame metrics & sequence averages")),n.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:3"},l==="zh"?"统计组":"Statistics group"," ",n.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:53","data-os-action":"","aria-label":"Statistics group",value:x,onChange:P=>_(P.target.value)},E.map(P=>n.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:163",key:P,value:P},P==="elevation"?l==="zh"?"水面高度":"Water-surface elevation":P.toUpperCase())))),x==="elevation"&&n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:34:25"},l==="zh"?"世界 Y 水面高度，不是波峰—波谷浪高或 Hs。固定填值、缺失支持和多层水面不可用于此评分。":"World-Y elevation, not crest-to-trough wave height or Hs. Filled exterior, missing support and multiple surfaces cannot be scored."),x==="elevation"&&n.createElement(Hl,{data:e?.frames?.[o]?.elevation}),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:36:3",className:"research-warning"},b==="test"||b.startsWith("test_")?l==="zh"?"Test 报告：仅汇总清单声明的测试帧。":"Test report: only declared test frames are summarized.":b==="train"?l==="zh"?"Train 报告：训练帧表现，不代表未见数据的泛化效果。":"Train report: training-frame performance, not generalization to unseen data.":l==="zh"?"参考报告：不是独立的 Test 结果。":"Reference report: not a Test-only evaluation."," ",l==="zh"?"划分依据训练方清单，不独立核验训练历史。":"Membership follows the supplied manifest; training history is not independently verified."),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:3",className:"frame-split-toolbar"},n.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:40"},l==="zh"?"统计帧集合":"Evaluation subset"," ",n.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:93","data-os-action":"","aria-label":"Evaluation subset",value:b,onChange:P=>{w(P.target.value),N(0)}},Object.entries({all:l==="zh"?"全部（参考）":"All",train:"Train",validation:"Validation",test:"Test",...yl(l==="zh"),unassigned:l==="zh"?"未划分":"Unassigned"}).map(([P,O])=>n.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:407",key:P,value:P},O)))),n.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:476"},l==="zh"?"仅筛选曲线、统计表和下方 CSV；不改变原始计算或动画。":"Filters curves, tables and the CSVs below; original calculations and playback are unchanged.")),S.total===0&&n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:38:22",role:"status"},l==="zh"?"此集合没有已声明的帧；不补零，也不使用其他集合替代。":"No declared frames in this subset; no zeros or fallback to another subset."),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:39:3"},p("SDF error region: "),n.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:39:32"},S.evaluationRegion==="gt_water_common_distance_support"?p("Conditional GT-water distance support"):S.evaluationRegion==="gt_water"?p("GT water only (GT SDF < 0)"):p("Full domain (valid pairs)")),p(". Occupancy and surface metrics use their own saved validity rules; they are not certified by the distance mask. Velocity metrics unchanged.")),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:40:3",className:"sequence-partial",role:"status"},S.blockedReasons.length?p("Scoring blocked"):S.complete?l==="zh"?"帧记录处理完成":"Processing complete":p("Partial results")," · ",S.calculated," / ",S.total,p(" frame records processed"),i==="error"?p(" · Processing stopped"):""),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:41:3",role:"status"},S.total?k?.valid?l==="zh"?`所选指标有效帧：${k.valid} / ${S.total}；排除 ${k.excluded} 帧。`:`Selected metric valid frames: ${k.valid} / ${S.total}; ${k.excluded} excluded.`:l==="zh"?"所选指标不可用：没有有效数值。处理完成不代表评分有效。":"Selected metric unavailable: no valid values. Completed processing does not imply valid scoring.":l==="zh"?"当前集合为空。":"Selected subset is empty."),S.blockedReasons.length>0&&n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:36",className:"error",role:"alert"},n.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:72"},p("No valid loss can be reported for blocked fields.")),S.blockedReasons.map(P=>n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:181",key:P},p(P))),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:215"},p("Review units and SDF type in Datasets & comparison setup, then click Create comparison again. Old results do not change when declarations are edited. Unit confirmation declares the source scale; it does not convert data.")),v&&n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:466","data-os-action":"",onClick:v},p("Review scoring setup"))),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:43:3"},p("Equal weight per valid frame. N/A is excluded, never zero. RMSE and P95 averages are means of frame metrics, not pooled-voxel metrics. No combined training loss.")),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:3",className:"sequence-toolbar"},n.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:37"},p("Metric curve"),n.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:64","data-os-action":"","aria-label":p("Metric curve"),value:J?.id||"",onChange:P=>R(P.target.value)},C.map(P=>n.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:185",key:P.id,value:P.id},p(P.label))))),n.createElement("span",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:258"},p("Unit: "),p(J?.unit)," · ",J?.direction==="Context"?p("Context metric"):p(J?.direction)+" "+p("is better"))),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:3",className:"sequence-readout"},p("Frame "),o??"—",": ",n.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:72"},Fe(z?.values[J?.id])),p(" · Sequence mean: "),n.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:158"},Fe(k?.mean)),p(" · Valid: "),k?.valid??0," / ",S.total),n.createElement(Vl,{report:S,metric:J,onFrame:r,onDownload:f,comparisonId:d,frameSplit:g}),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:47:3"},l==="zh"?"对应覆盖率（所选帧均值）":"Associated coverage (selected-frame mean)",": ",Fe(S.summary.find(P=>P.id===`${x}.coverage`)?.mean),x==="elevation"&&n.createElement(n.Fragment,null," · ",l==="zh"?"GT 可重建比例":"GT reconstructible fraction",": ",Fe(S.summary.find(P=>P.id==="elevation.gtCoverage")?.mean))),n.createElement(Xl,{rows:S.rows,metricKey:J?.id,manifest:g}),n.createElement("figure",{"data-os-loc":"src/field/SequenceMetrics.jsx:49:3",className:"os-metric-figure","data-review-id":"sequence-metric-"+(J?.id||x)},n.createElement("figcaption",{"data-os-loc":"src/field/SequenceMetrics.jsx:49:98"},p(J?.label)||p("Metric curve")),n.createElement("svg",{"data-os-loc":"src/field/SequenceMetrics.jsx:49:164",width:"100%",height:"220",viewBox:`0 0 ${F} 220`,role:"img","aria-label":`${J?.label} over frames; ${p(J?.unit)}`},[q.min,(q.min+q.max)/2,q.max].map((P,O)=>n.createElement("g",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:58",key:O},n.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:69",x1:"64",x2:F-22,y1:q.y(P),y2:q.y(P),stroke:"#d7e1eb",strokeWidth:".75"}),n.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:163",x:"57",y:q.y(P)+4,textAnchor:"end"},Fe(P)))),Number.isFinite(k?.mean)&&n.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:51:39",x1:"64",x2:F-22,y1:q.y(k.mean),y2:q.y(k.mean),stroke:"#7a8797",strokeDasharray:"5 4"}),q.segments.map((P,O)=>n.createElement("polyline",{"data-os-loc":"src/field/SequenceMetrics.jsx:52:36",key:O,points:P.map(X=>`${X.x},${X.y}`).join(" "),fill:"none",stroke:"#008c9c",strokeWidth:"2"})),q.points.map(P=>n.createElement(zl,{key:P.frame,point:P,row:U.get(P.frame),selected:P.frame===o,onFrame:r,language:l})),Number.isFinite(o)&&n.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:54:36",x1:q.x(o),x2:q.x(o),y1:"25",y2:"185",stroke:"#d36218",strokeDasharray:"3 3"}),n.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:4",x:"64",y:"205"},q.start),q.end!==q.start&&n.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:68",x:F-22,y:"205",textAnchor:"end"},q.end),n.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:130",x:F/2,y:"205",textAnchor:"middle"},p("Frame")))),n.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:57:3"},l==="zh"?"颜色：训练橙 / 验证紫 / 测试青 / 未划分灰。形状：Anchor 方形 / 插值菱形 / 外推三角 / 未声明圆点。橙圈为当前帧，灰虚线为均值；缺失值不连线。":"Color: Train amber / Validation purple / Test teal / Unassigned gray. Shape: Anchor square / Interpolation diamond / Future extrapolation triangle / Undeclared circle. Orange ring: displayed frame; gray dashed line: mean. Missing values are not connected."),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:58:3",className:"sequence-detail-tables"},n.createElement("h3",{"data-os-loc":"src/field/SequenceMetrics.jsx:58:43"},x==="elevation"?l==="zh"?"水面高度":"Elevation":p(x==="sdf"?"SDF":"Velocity"),p(" sequence summary")),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:59:3"},l==="zh"?"中位数、P95 和总体标准差描述所选帧的分布，不代表统计显著性。":"Median, P95 and population standard deviation describe selected frames, not statistical significance."),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:3",className:"sequence-table-scroll",tabIndex:"0",role:"region","aria-label":p("Scrollable sequence summary")},n.createElement("table",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:116","aria-label":p("Sequence metric summary")},n.createElement("thead",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:166"},n.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:173"},["Metric","Unit","Mean",l==="zh"?"中位数":"Median","P95",l==="zh"?"总体标准差":"Population std. dev.","Minimum","Maximum","Valid / total","Excluded"].map(P=>n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:341",key:P},p(P))))),n.createElement("tbody",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:380"},A.map(P=>n.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:405",key:P.id},n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:420",scope:"row"},p(P.label)),n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:454"},p(P.unit)),[P.mean,P.median,P.p95,P.stddev,P.minimum,P.maximum].map((O,X)=>n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:540",key:X,title:O==null?"N/A":String(O)},Fe(O))),n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:608"},P.valid," / ",P.total),n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:638"},P.excluded)))))),n.createElement("h3",{"data-os-loc":"src/field/SequenceMetrics.jsx:61:3"},x==="elevation"?l==="zh"?"水面高度":"Elevation":p(x==="sdf"?"SDF":"Velocity"),p(" per-frame values")),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:3",className:"sequence-toolbar"},n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:37","data-os-action":"",disabled:D===0,onClick:()=>N(D-1)},p("Previous rows")),n.createElement("span",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:135"},p("Page "),D+1," / ",Y,p(" · 50 frames per page")),n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:217","data-os-action":"",disabled:D+1>=Y,onClick:()=>N(D+1)},p("Next rows")),n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:320","data-os-action":"",onClick:()=>{const P=S.rows.findIndex(O=>O.frame===o);P>=0&&N(Math.floor(P/50))}},p("Show current row"))),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:3",className:"sequence-table-scroll",tabIndex:"0",role:"region","aria-label":p("Scrollable per-frame metrics")},n.createElement("table",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:117","aria-label":p("Per-frame metric values")},n.createElement("thead",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:167"},n.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:174"},n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:178"},p("Frame")),n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:200"},l==="zh"?"所属集合":"Split"),C.map(P=>n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:257",key:P.id},p(P.label),n.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:285"},P.unit))))),n.createElement("tbody",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:328"},$.map(P=>n.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:352",key:P.frame,className:P.frame===o?"selected-frame":""},n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:425",scope:"row"},n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:441","data-os-action":"","aria-label":`Go to frame ${P.frame}`,"aria-current":P.frame===o?"true":void 0,disabled:!P.available,onClick:()=>r(P.frame)},P.frame),!P.calculated&&n.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:631"},p("Not calculated"))),n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:674"},n.createElement(qt,{manifest:g,frame:P.frame})),C.map(O=>n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:755",key:O.id,title:P.values[O.id]==null?"N/A":String(P.values[O.id])},Fe(P.values[O.id])))))))),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:3",className:"sequence-toolbar"},n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:37","data-os-action":"",disabled:!e||!S.total,onClick:()=>f(`${d}_${b}_frames.csv`,Us(S,"frames"))},b==="all"?p("Export all frames CSV"):l==="zh"?"导出当前集合 CSV":"Export subset CSV"),n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:274","data-os-action":"",disabled:!e||!S.total,onClick:()=>f(`${d}_${b}_sequence_summary.csv`,Us(S,"summary"))},p("Export sequence summary CSV")),n.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:464"},l==="zh"?`两个场组 · 当前集合 ${b} 的所有帧（不限本页） · 完整精度`:`Both field groups · all ${b} frames (not only this page) · full numeric precision`))))}function Ul({group:e="sdf"}){const{tr:a}=fe();function t(){const s=URL.createObjectURL(new Blob([JSON.stringify(Rl(),null,2)],{type:"application/json"})),c=document.createElement("a");c.href=s,c.download="OceanScope_metric_definitions.json",c.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}return n.createElement("details",{"data-os-loc":"src/field/LossDefinitions.jsx:7:10",className:"loss-definitions"},n.createElement("summary",{"data-os-loc":"src/field/LossDefinitions.jsx:7:48"},a("Evaluation Metrics / Loss Definitions")),n.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:112"},a("g = Ground Truth; p = Prediction. Evaluation metrics, not a weighted training loss.")),n.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:210"},a("Display quality never changes numerical metrics. Units follow dataset declarations; declaring units does not convert data.")),Yt.filter(s=>s.group===e||s.group==="both"&&e!=="elevation").map(s=>n.createElement("article",{"data-os-loc":"src/field/LossDefinitions.jsx:7:442",key:s.id},n.createElement("strong",{"data-os-loc":"src/field/LossDefinitions.jsx:7:462"},a(s.label)),n.createElement("code",{"data-os-loc":"src/field/LossDefinitions.jsx:7:492"},s.formula),n.createElement("small",{"data-os-loc":"src/field/LossDefinitions.jsx:7:516"},a(s.direction),a(" is better"),s.direction==="Context"?a(" (interpret with error)"):""," · ",a(s.unitKind)),n.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:643"},a(s.domain)," ",a(s.caveats)))),n.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:692"},a("Sequence statistics give equal weight to each valid frame, not each voxel. Missing values are excluded; valid/excluded frame counts are reported.")),n.createElement("button",{"data-os-loc":"src/field/LossDefinitions.jsx:7:852","data-os-action":"",onClick:t},a("Export metric definitions")))}function Jl({lattice:e,comparison:a}){const{tr:t}=fe();return n.createElement("details",{"data-os-loc":"src/field/AlignmentReport.jsx:7:10",className:"alignment-report"},n.createElement("summary",{"data-os-loc":"src/field/AlignmentReport.jsx:7:48"},t("Alignment and provenance")),n.createElement("dl",{"data-os-loc":"src/field/AlignmentReport.jsx:7:99"},n.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:103"},n.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:108"},t("Comparison")),n.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:135"},a?.id||"—")),n.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:171"},n.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:176"},t("Canonical lattice")),n.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:210"},e?.dimensions?.join(" × ")||"—",t(" voxels"))),n.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:279"},n.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:284"},t("Voxel size")),n.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:311"},e?.voxelSize?.map(s=>Number(s).toPrecision(4)).join(" × ")||"—")),n.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:405"},n.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:410"},t("Policy")),n.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:433"},t("Prediction sampled in world space onto Ground Truth voxel centres.")))))}function Kl(e){return`${e.labels?.prediction?.exportStem||"prediction"}_${e.runId||e.id}`.replace(/[<>:"/\\|?*\x00-\x1f]/g,"_").slice(0,125)}function Ql({frame:e,lattice:a,settings:t,plane:s,sliceIndex:c,angle:i=30,sectionPercent:o=50,rotationAxis:r="y"}){const f=E=>({status:"unavailable",reason:E});if(s==="oblique"&&r!=="y")return f("tilted");if(t?.previewOnly)return f("single");if(["gt","prediction"].some(E=>t?.sdf?.[E]?.semantics!=="full"))return f("semantics");const d=t?.heightComparison;if(d?.surfaceValidated!==!0||d?.negativeInside!==!0||d?.upAxis!=="Y"||d?.coordinateUnit!=="m"||d?.frameTimeAligned!==!0)return f("declaration");if(["gt","prediction"].some(E=>t.sdf[E].unit!=="m"))return f("units");if(!["xy","yz","oblique"].includes(s))return f("plane");const m=a?.dimensions,u=a?.axisSteps,v=a?.origin;if(!m||m.length!==3||m.some(E=>!Number.isInteger(E)||E<2)||!v||v.length!==3||v.some(E=>!Number.isFinite(E))||!u||u.length!==3||u.some((E,y)=>E.length!==3||E.some((_,x)=>!Number.isFinite(_)||(y===x?_<=0:Math.abs(_)>1e-12))))return f("lattice");const g=e?.groups?.sdf?.ground_truth,p=e?.groups?.sdf?.prediction;if([g,p].some(E=>!E||!Array.isArray(E.shape)||E.shape.length!==3||E.shape.some((y,_)=>y!==m[_])||E.values?.length!==m[0]*m[1]*m[2]||E.mask&&E.mask.values?.length!==E.values.length))return f("fields");if(s==="oblique"){const E=Zt(a,i,o);if(!E)return f("lattice");const y=_=>E.degenerate?[]:Array.from({length:E.width},(x,S)=>{let C=null,A=null;for(let h=E.height-1;h>=0;h--){const R=wc(_,a,E.point(S,h));if(R===null||h===E.height-1&&R<=0)break;if(A!==null&&A>0&&R<=0){C=v[1]+u[1][1]*(h+-R/(A-R));break}A=R}return[E.range[0]+(E.range[1]-E.range[0])*S/(E.width-1),C]});return{status:"ready",axis:"oblique",angle:i,offset:E.offset,result:Gs(y(g),y(p))}}const l=s==="xy"?2:0,b=s==="xy"?0:2;if(!Number.isInteger(c)||c<0||c>=m[l])return f("lattice");const w=(E,y,_)=>E+m[0]*(y+m[1]*_);function B(E){return Array.from({length:m[b]},(y,_)=>{const x=s==="xy"?_:c,S=s==="xy"?c:_;let C=null,A=null;for(let h=m[1]-1;h>=0;h--){const R=w(x,h,S),M=E.values[R];if(!Number.isFinite(M)||E.mask&&!E.mask.values[R]||h===m[1]-1&&M<=0)break;if(A!==null&&A>0&&M<=0){C=v[1]+u[1][1]*(h+-M/(A-M));break}A=M}return[v[b]+u[b][b]*_,C]})}return{status:"ready",axis:b===0?"x":"z",offset:v[l]+u[l][l]*c,result:Gs(B(g),B(p))}}const Js={tilted:["倾斜截面用于场值与结构分析。高度比较请切换 XY、YZ 或绕 Y 的竖直斜切。","Tilted sections show field values and structure. For height comparison use XY, YZ or a vertical Y-axis section."],semantics:["当前预测含水外填充值，不能把填值边界当作可信水面。保留原有 SDF 切片和条件性距离指标。","The prediction has a filled or undeclared exterior; filled boundaries cannot establish a trustworthy water surface. SDF slices and conditional distance scores remain available."],declaration:["还需明确水面有效性、Y 向上、米制坐标、内负外正和帧时间对齐，才能启用高度比较。","Height comparison requires explicit surface validity, Y-up metre coordinates, negative-inside signs and aligned frame times."],units:["两组 SDF 的单位需要明确为米。","Both SDF units must be declared in metres."],plane:["请选择 XY 或 YZ 竖直切面以提取高度曲线。XZ 是水平切面。","Select a vertical XY or YZ section. XZ is horizontal."],lattice:["此坐标网格尚不满足高度采样条件。","This lattice does not meet height-sampling requirements."],fields:["当前帧缺少完整、相互对应的两组 SDF。","This frame lacks complete, matching SDF fields."]};function e0({frame:e,lattice:a,comparison:t,plane:s,sliceIndex:c,angle:i=30,sectionPercent:o=50,rotationAxis:r="y",frameNumber:f,busy:d}){const{language:m}=fe(),u=m==="zh",v=j.useMemo(()=>d?null:Ql({frame:e,lattice:a,settings:t.settings,plane:s,sliceIndex:c,angle:i,sectionPercent:o,rotationAxis:r}),[d,e,a,t.settings,s,c,i,o,r]);return v?.status==="ready"?n.createElement(ro,{result:v.result,axis:v.axis,kind:"sdf",labels:{a:t.labels?.gt?.displayName,b:t.labels?.prediction?.displayName},metadata:{kind:"validated_sdf_height",dataset_a:t.groundTruthId,dataset_b:t.predictionId,frame:f,..._o(v.axis,v.offset,i),reference_y_m:0,meters_per_unit:1,sampling:s==="oblique"?"uppermost_valid_zero_crossing_trilinear_columns":"uppermost_valid_zero_crossing_linear",time_alignment:"declared_aligned"}}):n.createElement("section",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:10",className:"height-unavailable","aria-label":u?"水面高度比较适用性":"Surface-height eligibility"},n.createElement("h2",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:107"},u?"水面高度比较":"Surface-height comparison"," · ",d?u?"加载中":"Loading":u?"不可用":"Unavailable"),n.createElement("p",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:212"},d?u?"等待当前帧加载完成。":"Waiting for the current frame.":(Js[v?.reason]||Js.fields)[u?0:1]))}const Da=[["heightMae","Height MAE","高度 MAE","m"],["breakingMae","Breaking-region MAE","破碎区 MAE","m"],["amplitudeSlope","Amplitude slope","振幅斜率",""],["velocityRelativeL2","Underwater relative L2","水下速度相对误差",""],["velocityMedianCosine","Median direction cosine","方向余弦中位数",""]];function n0(e){const a=["frame",...Da.map(i=>i[0]),"heightRmse","heightBias","pairedColumns","gtColumns","pairedCoverage","breakingColumns","velocityVoxels","velocityGtEligibleVoxels","velocityCoverage","angularExcludedCount","heightErrorPercent","breakingErrorPercent"],t=i=>i==null?"":`"${String(i).replaceAll('"','""')}"`,s=["protocol_version","unit_convention","height_rule","velocity_rule","aggregation","status"],c=[e.version,e.units,e.height,e.velocity,e.aggregation,e.status];return[[...a,...s].map(t).join(","),...Object.entries(e.frames).map(([i,o])=>[...a.map(r=>r==="frame"?i:o[r]),...c].map(t).join(","))].join(`\r
`)}function Ks(e,a=!1){let t=1/0,s=-1/0;for(const c of e)if(c)for(let i=0;i<c.values.length;i++){const o=c.values[i];!Number.isFinite(o)||c.mask&&!c.mask.values[i]||(t=Math.min(t,o),s=Math.max(s,o))}if(!Number.isFinite(t))return a?[-1,1]:[0,1];if(a){const c=Math.max(Math.abs(t),Math.abs(s),1e-8);return[-c,c]}return t===s?[t-.01,s+.01]:[t,s]}function Fi(e,a){return e&&(!e.mask||e.mask.values[a])&&Number.isFinite(e.values[a])?e.values[a]:null}function a0(e,a,t){const s=["ground_truth","prediction","error"].map(r=>e.groups.height[r]),[c,,i]=s[0].shape,o=["frame,x_m,z_m,gt_height_m,prediction_height_m,prediction_minus_gt_m,gt_valid,prediction_valid,paired_valid"];for(let r=0;r<i;r++)for(let f=0;f<c;f++){const d=f+c*r,m=s.map(u=>Fi(u,d));o.push([t,a.origin[0]+f*a.axisSteps[0][0],a.origin[2]+r*a.axisSteps[2][2],...m.map(u=>u??""),...m.map(u=>u===null?0:1)].join(","))}return o.join(`\r
`)}const Ne=(e,a=4)=>Number.isFinite(e)?e.toFixed(a):"—",Qs=e=>Number.isFinite(e)?`${(100*e).toFixed(2)}%`:"—";function t0({protocol:e,frame:a,lattice:t,frameNumber:s,busy:c,onFrame:i}){const{language:o}=fe(),r=o==="zh",[f,d]=j.useState([.5,.5]);j.useEffect(()=>d([.5,.5]),[s]);const m=j.useMemo(()=>["ground_truth","prediction","error"].map(y=>a?.groups.height?.[y]),[a]),u=j.useMemo(()=>[Ks(m.slice(0,2)),Ks([m[2]],!0)],[m]);if(!e)return null;const v=e.frames[String(s)],g=!c&&v&&m.every(Boolean),p=m[0]?.shape[0]||1,l=m[0]?.shape[2]||1,b=Math.min(p-1,Math.floor(f[0]*p)),w=Math.min(l-1,Math.floor(f[1]*l)),B=b+p*w,E=["A · Gentle GT","B · Best_1027",r?"B − A · 高度差":"B − A · Height difference"];return n.createElement("section",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:22:10",className:"reconstruction-analysis","aria-label":r?"Best_1027 重建评估":"Best_1027 reconstruction evaluation","aria-busy":c},n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:5",className:"reconstruction-heading"},n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:45"},n.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:50",className:"reconstruction-eyebrow"},"BEST_1027 · ",r?"三帧对比":"THREE-FRAME PILOT"),n.createElement("h2",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:145"},r?"水面高度与水下速度":"Surface height & underwater velocity")),n.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:219",className:"reconstruction-frame"},r?"帧":"Frame"," ",g?s:"…")),n.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:24:5"},r?"当前结果覆盖 1001、1049、1096 三帧，采用下方明确记录的计算规则。不是完整 96 帧评分，也未划分 Test 集。长度和速度沿用 v2 的 m、m/s 模拟尺度约定。":"Frames 1001, 1049 and 1096 only, under the explicit protocol below. Not a full 96-frame or Test-set score. Length and velocity inherit the v2 m / m/s simulation convention."),g?n.createElement(n.Fragment,null,n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:7",className:"reconstruction-cards"},Da.map(([y,_,x,S])=>n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:89",key:y},n.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:104"},r?x:_),n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:131"},Ne(v[y])," ",n.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:158"},S))))),n.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:7",className:"reconstruction-support"},r?"高度共同有效列":"Paired height columns"," ",n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:88"},v.pairedColumns.toLocaleString()," / ",v.gtColumns.toLocaleString())," (",Qs(v.pairedCoverage),") · ",r?"水下速度覆盖率":"Underwater velocity coverage"," ",n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:261"},Qs(v.velocityCoverage))," · ",r?"方向计算排除低速点":"Low-speed directional exclusions"," ",v.angularExcludedCount),n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:28:7",className:"reconstruction-maps"},m.map((y,_)=>n.createElement("figure",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:28:70",key:E[_],"aria-label":E[_]},n.createElement("figcaption",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:29:9"},E[_]),n.createElement(Lt,{slice:{width:p,height:l,values:y.values},maskSlice:y.mask,range:u[_===2?1:0],palette:_===2?"error":"ground-truth",plane:"xz",aspect:p/l,crosshair:f,onCrosshair:d}),n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:9",className:`reconstruction-scale ${_===2?"difference":""}`},n.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:80"},Ne(u[_===2?1:0][0],3)," m"),n.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:134"},Ne(u[_===2?1:0][1],3)," m")),n.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:32:9"},r?"选点":"Probe",": ",Ne(Fi(y,B))," m")))),n.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:34:7",className:"reconstruction-caption"},"X → · Z ↑ · X [",Ne(t.origin[0],2),", ",Ne(t.origin[0]+(p-1)*t.axisSteps[0][0],2),"] m · Z [",Ne(t.origin[2],2),", ",Ne(t.origin[2]+(l-1)*t.axisSteps[2][2],2),"] m",n.createElement("br",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:34:270"}),r?"俯视图使用 0.05 m 网格；A/B 同色标，误差红色表示预测偏高，蓝色表示偏低；斜纹为无效区域。点击任一图联动选点。":"Top-down 0.05 m grid. A/B share a scale; red means prediction higher, blue lower. Hatched cells are invalid. Click a map for a shared probe."," · X=",Ne(t.origin[0]+b*t.axisSteps[0][0],3),", Z=",Ne(t.origin[2]+w*t.axisSteps[2][2],3))):n.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:25:15",role:"status"},r?"等待当前帧加载完成；不显示上一帧的指标。":"Waiting for this frame; previous-frame scores are hidden."),n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:5",className:"reconstruction-table-wrap"},n.createElement("table",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:48","aria-label":r?"三帧重建指标":"Three-frame reconstruction metrics"},n.createElement("thead",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:121"},n.createElement("tr",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:128"},n.createElement("th",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:132"},r?"帧":"Frame"),Da.map(([y,_,x,S])=>n.createElement("th",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:205",key:y},r?x:_,S&&` (${S})`)))),n.createElement("tbody",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:275"},Object.entries(e.frames).map(([y,_])=>n.createElement("tr",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:335",key:y,"aria-current":g&&Number(y)===s?"true":void 0},n.createElement("td",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:418"},n.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:422","data-os-action":"",disabled:c,onClick:()=>i(Number(y))},y)),Da.map(([x])=>n.createElement("td",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:528",key:x},Ne(_[x])))))))),n.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:5"},r?"三帧合并：振幅斜率":"Pooled pilot: amplitude slope"," ",n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:61"},Ne(e.pooled.amplitudeSlope))," · ",r?"速度相对误差":"velocity relative L2"," ",n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:162"},Ne(e.pooled.velocityRelativeL2))," · ",r?"方向余弦中位数":"median direction cosine"," ",n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:271"},Ne(e.pooled.velocityMedianCosine)),n.createElement("br",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:334"}),n.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:339"},r?"合并分子与分母后求比值；方向指标使用全部有效方向余弦的中位数，不是逐帧数值的平均。振幅斜率以 1 为匹配参考，速度相对误差越小越好，方向余弦越接近 1 越好。":"Ratios use pooled sums; direction uses the median of all eligible cosines, not frame averages. Amplitude reference: 1. Lower relative error and cosine closer to 1 are preferable.")),n.createElement("details",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:38:5",className:"reconstruction-protocol"},n.createElement("summary",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:38:50"},r?"本次计算规则与未计算项":"Evaluation protocol & unavailable metrics"),n.createElement("ul",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:39:7"},n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:39:11"},r?"高度：沿 Y 提取内负外正的线性过零位置；排除多层水面和上方缺失支撑，仅比较双方共同有效列。":e.height),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:40:7"},r?"破碎区：在共同有效高度列中选择 X > −0.3 m。当前显示绝对误差（m），R 未定义，因此不显示归一化百分比。":e.breaking+" R is undefined: absolute metres only, no normalized percentages."),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:41:7"},r?"振幅：每帧在同一共同有效区域分别去均值，再计算 Σ(h̃GT·h̃预测) / Σ(h̃GT²)。":e.amplitude),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:42:7"},r?"水下速度：从原网格索引 0 开始，每两个格点取一个，得到 0.1 m 网格；采用 GT 水面下至少 10 cm 且双方 SDF/速度都有效的区域。方向中位数排除任一速度 ≤ 10⁻⁸ m/s 的点。":e.velocity),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:43:7"},r?"右侧和下方通用场指标仍基于原生 0.05 m 网格及其共同有效域，与这里的水下筛选指标分开。":"Generic volume metrics use native 0.05 m common support, separate from the underwater protocol here."),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:44:7"},r?"沿用 v2 的米制、Y 向上和同帧配对约定；新文件本身未独立声明物理单位。读取器报告 VDB 225/224 格式兼容提示，这些是初步参考结果。":e.units+" "+e.reader),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:45:7"},r?"尚未计算：归一化高度/破碎区百分比、各波长增益、独立 M1 基线。缺失项目不以零代替。":e.unavailable.join("; ")))),n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:5",className:"reconstruction-actions"},n.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:45","data-os-action":"",onClick:()=>ut("Best_1027_pilot_metrics.csv","\uFEFF"+n0(e),"text/csv;charset=utf-8")},r?"下载三帧指标 CSV":"Pilot metrics CSV"),n.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:229","data-os-action":"",onClick:()=>ut("Best_1027_evaluation_protocol.json",JSON.stringify(e,null,2))},r?"下载指标与规则 JSON":"Metrics & protocol JSON"),n.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:403","data-os-action":"",disabled:!g,onClick:()=>ut(`Best_1027_${s}_height_map.csv`,"\uFEFF"+a0(a,t,s),"text/csv;charset=utf-8")},r?"下载当前高度图 CSV":"Current height map CSV")))}const qa="oceanscope.field-view.v1",Oi="oceanscope.bookmarks.v2.field",re=e=>{throw Error(e)},Ma=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),Ue=(e,a=-1e9,t=1e9)=>typeof e=="number"&&Number.isFinite(e)&&e>=a&&e<=t,ei=(e,a=-1e9,t=1e9)=>Array.isArray(e)&&e.length===2&&e.every(s=>Ue(s,a,t));function Ti(e){const a=e.comparison,t=e.processing.lattice;return JSON.stringify({comparison:a.id,gt:a.groundTruthId,prediction:a.settings?.previewOnly?null:a.predictionId,groups:a.availableGroups,settings:a.settings,lattice:{dimensions:t.dimensions,origin:t.origin,axisSteps:t.axisSteps},directory:e.fieldDirectory,frames:e.processing.frames.map(s=>s.frame)})}function xn(e,a){(!Ma(e)||e.schema!==qa)&&re("format"),(typeof e.name!="string"||!e.name.trim()||e.name.trim().length>80)&&re("name");const t=e.settings;Ma(t)||re("settings"),t.representation!==void 0&&t.representation!==oa&&re("settings"),t.representation===oa&&t.group!=="sdf"&&re("group"),(typeof t.caseId!="string"||!t.caseId||t.caseId.length>100||typeof e.sourceSignature!="string"||e.sourceSignature.length>1e5)&&re("dataset"),(!Number.isInteger(t.frame)||!Ue(t.frame,0,1e7))&&re("frame"),(!["sdf","velocity"].includes(t.group)||!["split","overlay","wire-overlay","gt","prediction"].includes(t.mode)||!["balanced","fine"].includes(t.quality)||!["magnitude","x","y","z"].includes(t.component))&&re("settings"),(!["xy","xz","yz","oblique"].includes(t.plane)||!Number.isInteger(t.sliceIndex)||!Ue(t.sliceIndex,0,1e7)||!Ue(t.angle,0,180)||!Ue(t.sectionPercent,0,100))&&re("section");for(const i of["showPlane","showContext","showGt","showPrediction"])typeof t[i]!="boolean"&&re("settings");(!Ue(t.gtOpacity,.1,1)||!Ue(t.predictionOpacity,.1,1)||!Number.isInteger(t.vectorDensity)||!Ue(t.vectorDensity,1,2e4)||!Ue(t.arrowScale,.001,1e6))&&re("settings"),t.glyphMode!==void 0&&!["direction","scaled"].includes(t.glyphMode)&&re("settings"),t.sourceRange!==null&&(!ei(t.sourceRange)||t.sourceRange[1]<=t.sourceRange[0])&&re("color"),(!Ma(t.errorScale)||typeof t.errorScale.locked!="boolean"||!Ue(t.errorScale.limit,1e-6,1e9))&&re("color"),ei(t.crosshair,0,1)||re("probe"),(!Ma(t.playback)||typeof t.playback.loop!="boolean"||![.25,.5,1,2].includes(t.playback.speed)||!Ue(t.playback.fps,1,120))&&re("settings");const s=fo(t.region,2),c=mo(e.camera);if((c.near===null||c.far===null)&&re("camera"),a){const i=a.find(f=>f.id===t.caseId);i||re("dataset"),e.sourceSignature!==Ti(i)&&re("source"),(t.representation===oa?!fa(i).includes(t.frame):!i.processing.frames.some(f=>f.frame===t.frame))&&re("frame"),(!i.comparison.availableGroups.includes(t.group)||t.showContext&&!i.comparison.availableGroups.includes("sdf"))&&re("group"),i.comparison.settings?.previewOnly&&(t.mode!=="gt"||t.showPrediction||s)&&re("single");const o=i.processing.lattice,r=t.plane==="xy"||t.plane==="oblique"?2:t.plane==="yz"?0:1;(t.sliceIndex>=o.dimensions[r]||t.plane==="oblique"&&!At(o))&&re("section")}return{schema:qa,name:e.name.trim(),sourceSignature:e.sourceSignature,settings:{...t.representation?{representation:t.representation}:{},...po(t.rotationAxis),...bo(t.shading),caseId:t.caseId,frame:t.frame,group:t.group,mode:t.mode,quality:t.quality,component:t.component,plane:t.plane,sliceIndex:t.sliceIndex,angle:t.angle,sectionPercent:t.sectionPercent,showPlane:t.showPlane,showContext:t.showContext,showGt:t.showGt,showPrediction:t.showPrediction,gtOpacity:t.gtOpacity,predictionOpacity:t.predictionOpacity,vectorDensity:t.vectorDensity,arrowScale:t.arrowScale,...t.glyphMode?{glyphMode:t.glyphMode}:{},sourceRange:t.sourceRange?[...t.sourceRange]:null,errorScale:{locked:t.errorScale.locked,limit:t.errorScale.limit},crosshair:[...t.crosshair],...s?{region:s}:{},playback:{speed:t.playback.speed,loop:t.playback.loop,fps:t.playback.fps}},camera:c}}function s0(e,a){new TextEncoder().encode(e).length>uo&&re("size");let t;try{t=JSON.parse(e)}catch{re("json")}return xn(t,a)}function i0(e){let a;try{a=e.getItem(Oi)}catch{re("storage")}if(a===null)return[];try{const t=JSON.parse(a),s=new Set;return(t.schema!=="oceanscope.field-library.v1"||!Array.isArray(t.items)||t.items.length>Bi)&&re("library"),t.items.map(c=>((typeof c.id!="string"||!c.id||s.has(c.id))&&re("library"),s.add(c.id),{id:c.id,...xn(c)}))}catch{re("library")}}function c0(e,a){a.length>Bi&&re("limit");const t=new Set,s=a.map(c=>((typeof c.id!="string"||!c.id||t.has(c.id))&&re("library"),t.add(c.id),{id:c.id,...xn(c)}));try{e.setItem(Oi,JSON.stringify({schema:"oceanscope.field-library.v1",items:s}))}catch{re("storage")}}const ni={...lo,format:["请使用场比较方案 JSON；水面方案、指标和数据说明文件不能作为场方案导入。","Use a field-view JSON. Wave views, metrics and data-info files cannot be imported as field views."],dataset:["当前样例中找不到方案指定的数据。","The saved dataset is not available in the current samples."],source:["样例身份、网格或单位声明已改变，未应用旧方案。","Dataset identity, grid or unit declarations changed; the old view was not applied."],group:["当前样例不提供方案指定的 SDF 或速度场。","This sample does not provide the saved SDF or velocity group."],section:["切片索引或斜切参数超出当前网格范围。","The slice index or oblique settings are outside the current grid."],single:["单组 GT 方案不能包含预测显示或双组模式。","A single GT view cannot use prediction layers or paired display modes."],probe:["切片探针位置必须在 0–100% 范围内。","The slice probe must stay within 0–100%."],color:["色标范围无效；请检查上下限。","Invalid color range; check its limits."],size:["文件超过 2 MB，请选择场比较方案 JSON。","File exceeds 2 MB; select a field-view JSON."],load:["场方案恢复未完成，数据或三维视图加载失败。请检查页面提示后重试。","Field view restoration failed while loading data or 3D. Check the page message and try again."]};function o0(e,a){return ni[e.message]?.[a?0:1]||ni.load[a?0:1]}const r0=[1007,1023,1039,1057,1073,1089],l0=[["mae_m","Height MAE","高度 MAE","m","pooled common columns"],["mae_pct","Height MAE / R","高度 MAE / R","% R","pooled common columns"],["bias_pct","Signed height bias / R","有符号高度偏差 / R","% R","pooled common columns"],["steep_pct","Steep-column MAE / R","陡坡列 MAE / R","% R","GT slope top 15%, per frame"],["calm_cells_pct","Non-steep-column MAE / R","非陡坡列 MAE / R","% R","remaining GT slope columns"],["breaking_band_pct","Breaking-band MAE / R","破浪带 MAE / R","% R","strict -0.30 < X < 1.10"],["calm_band_pct","Calm-band MAE / R","平静带 MAE / R","% R","strict -7.90 < X < -1.50"],["amplitude_slope","Amplitude slope","振幅斜率","ratio","pooled after per-frame demeaning"],["correlation","Height correlation","高度相关系数","ratio","pooled after per-frame demeaning"],["flicker_pct","Adjacent-frame error change / R","相邻帧误差变化 / R","% R","adjacent pairs, no time-step division"],["gt_range_m","Observed GT height range","观测 GT 高度范围","m","GT max minus min over all frames"],["pct_relative_to_m","Normalization reference R","归一化参考 R","m","fixed protocol parameter"]],d0=[["rel_rmse","Relative RMSE — pooled","相对 RMSE — 全体素汇总","ratio","sqrt(sum error energy / sum GT energy)"],["rel_rmse_frame_mean","Relative RMSE — frame mean","相对 RMSE — 逐帧平均","ratio","arithmetic mean of frame relative RMSE"],["cos_median","Direction cosine median","方向余弦中位数","ratio","median over all selected voxels, not mean of frame medians"],["speed_ratio","Mean speed ratio B / GT","平均速度比 B / GT","ratio","mean |B| / mean |GT|"],["vec_mae","Vector MAE","矢量 MAE","source velocity unit","mean norm of vector error"],["gt_mean_speed","GT mean speed","GT 平均速度","source velocity unit","mean norm of GT velocity"]];function Di(e,{subset:a="all",grid:t="coarse",frame:s=e.frameIds[0]}={}){if(!["all","six"].includes(a)||!["fine","coarse"].includes(t)||!e.frameIds.includes(s))throw Error("Invalid metric selection");const c=[],i=e.frameIds,o=e.summary.height,r={runId:e.runId,protocolSha256:e.protocol.sourceScriptSha256,manifestA:e.datasetA.manifestSha256,manifestB:e.datasetB.manifestSha256};function f(l,b,w,B,E,y,_,x,S=null,C="defined by frozen protocol",A="",h=null){const R=Number.isFinite(B)&&!A;c.push({id:l,label:b,labelZh:w,value:R?B:null,unit:E,aggregation:y,scope:_,frameIds:[...x],validCount:S,countStatus:S==null?"not recorded in frozen result":"recorded",status:R?"available":"unavailable",reason:A||(R?"":"Value not recorded or nonfinite in source"),denominator:{formula:C,value:h},source:r})}for(const[l,b,w,B,E]of l0){let y="",_=["mae_m","mae_pct","bias_pct"].includes(l)?o.cells_scored:null;o.cells_scored===0&&!["gt_range_m","pct_relative_to_m"].includes(l)&&(y="No common support"),l==="flicker_pct"&&(i.length<2||i.some((x,S)=>S>0&&x!==i[S-1]+1))&&(y="Requires consecutive adjacent frames"),f("height."+l,b,w,o[l],B,E,"sequence height: all evaluated frames",i,_,B==="% R"?"reference range R":"metric-specific support",y,B==="% R"?o.pct_relative_to_m:null)}for(const l of["gain","coherence"])for(const b of[.3,.6,1.2,2.4,4.8])f(`height.${l}.${b}`,`${l} · λ ${b} m`,`${l==="gain"?"增益":"相干度"} · λ ${b} m`,o[l]?.[String(b)],"ratio","pooled DoG band sums; common support and wider-filter weight > 0.7","sequence height: all evaluated frames",i,null,l==="gain"?"GT band energy":"GT band energy × prediction band energy",o.cells_scored===0?"No common support":"");f("footprint_iou","Wet-column footprint IoU","有水列范围 IoU",e.summary.footprint_iou,"ratio","pooled intersection / union","sequence wet columns",i,null,"wet-column union"),f("volume.iou","Water volume IoU","水体素 IoU",e.summary.volume?.iou,"ratio","pooled intersection / union","sequence water voxels (sdf < 0 and valid)",i,null,"water-voxel union"),f("volume.rec_over_gt","Water volume B / GT","水体积比 B / GT",e.summary.volume?.rec_over_gt,"ratio","pooled B volume / GT volume","sequence water voxels (sdf < 0 and valid)",i,null,"GT water-voxel count");const d=a==="all"?i:r0,m=e.summary.velocity[a==="all"?"all_frames":"velocity_net_6_frames"],u=m?.[t==="fine"?"grid_0.05m":"grid_0.1m"],v=e.rows.filter(l=>d.includes(l.frame)),g=v.map(l=>l.velocity?.[t]?.gtEnergy),p=g.length===d.length&&g.every(Number.isFinite)?g.reduce((l,b)=>l+b,0):null;for(const[l,b,w,B,E]of d0){let y=u?.voxels===0?"No valid velocity support":"";l.startsWith("rel_rmse")&&(p===0||l==="rel_rmse_frame_mean"&&g.some(_=>_===0))&&(y="Zero GT energy makes relative RMSE undefined"),(!m||JSON.stringify(m.frames)!==JSON.stringify(d))&&(y="Frame set does not match archived aggregate"),f("velocity."+l,b,w,u?.[l],B,E,`${a==="all"?"all evaluated frames":"fixed six frames (not train/test split)"}; ${t==="fine"?"native 0.05 XYZ":"XZ 2×2 average, Y unchanged (~0.10 / 0.05 / 0.10)"}`,d,u?.voxels??null,l.startsWith("rel_rmse")?"GT velocity energy":"valid velocity support",y,l==="rel_rmse"?p:null)}return c}function f0(e){const a=["id","value","status","reason","unit","scope","aggregation","frameIds","validCount","countStatus","denominator","source"],t=s=>'"'+String(s==null?"":typeof s=="object"?JSON.stringify(s):s).replaceAll('"','""')+'"';return[a.join(","),...e.map(s=>a.map(c=>t(s[c])).join(","))].join(`
`)}function m0({bundle:e,subset:a,frame:t,zh:s,onDownload:c,selectedGrid:i,onGrid:o}){const[r,f]=j.useState("coarse"),d=i??r;function m(v){f(v),o?.(v)}const u=j.useMemo(()=>Di(e,{subset:a,grid:d,frame:t}),[e,a,d,t]);return n.createElement("details",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:7:9",className:"complete-metrics"},n.createElement("summary",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:7:47"},s?"完整指标 · 范围、网格与聚合":"Complete metrics · scope, grid and aggregation"),n.createElement("p",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:8:3"},s?"高度与体积保持全96帧；上方帧集合只切换速度汇总。固定六帧不是训练/测试划分。缺失计数表示原件未记录，不推测或补零。":"Height and volume retain all96 frames; the frame-set selector changes velocity aggregates only. Fixed six is not a train/test split. Missing counts were not recorded, never inferred or filled with zero."),n.createElement("label",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:3"},s?"速度网格":"Velocity grid"," ",n.createElement("select",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:38","data-os-action":"","aria-label":"Reference detail grid",value:d,onChange:v=>m(v.target.value)},n.createElement("option",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:132",value:"coarse"},s?"粗网格 · XZ 2×2 / Y不变":"Coarse · XZ 2×2 / unchanged Y"),n.createElement("option",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:221",value:"fine"},s?"细网格 · 原生0.05":"Fine · native0.05"))),n.createElement("div",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:3",className:"metric-table-scroll"},n.createElement("table",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:40","aria-label":"Complete protocol metrics"},n.createElement("thead",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:86"},n.createElement("tr",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:93"},(s?["指标","数值","单位","范围 / 聚合","有效计数"]:["Metric","Value","Unit","Scope / aggregation","Valid count"]).map(v=>n.createElement("th",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:206",key:v},v)))),n.createElement("tbody",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:241"},u.map(v=>n.createElement("tr",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:261",key:v.id},n.createElement("th",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:276",scope:"row"},s?v.labelZh:v.label),n.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:319"},v.value==null?"—":v.value.toPrecision(8),v.status!=="available"&&n.createElement("small",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:390"},v.reason)),n.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:421"},v.unit),n.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:438"},n.createElement("small",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:442"},v.scope,n.createElement("br",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:458"}),v.aggregation)),n.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:491"},v.validCount==null?s?"原件未记录":"Not recorded":v.validCount.toLocaleString())))))),n.createElement("p",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:11:3"},s?"速度有效域：GT vel_valid、GT sdf < −0.10、预测vel_valid；Z[11:105] / X[11:212]，粗网格须四格全有效。Breaking严格−0.30<X<1.10；calm band与非陡坡列不同。":"Velocity support: GT vel_valid, GT sdf < −0.10, prediction vel_valid; Z[11:105] / X[11:212], all four coarse cells valid. Breaking strictly −0.30<X<1.10; calm band differs from non-steep columns."),n.createElement("button",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:12:3","data-os-action":"",onClick:()=>c(`${e.runId}_${a}_${d}_complete-metrics.csv`,f0(u),"text/csv")},s?"导出完整指标 CSV":"Export complete metrics CSV"))}function b0({declarations:e,zh:a}){const t=s=>({claimed:a?"来源声明":"Source declaration",verified:a?"已核验":"Verified",unknown:a?"未知":"Unknown"})[s];return n.createElement("details",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:9",className:"complete-metrics"},n.createElement("summary",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:47"},a?"实验条件与证据来源":"Experiment conditions and evidence"),e?n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:5:3"},a?"“已核验”仅覆盖注明的原始文件身份；相机、模型、单位和测试划分仍按原始材料声明，不能等同独立训练审计。":"Verified labels cover the stated original-file identities. Camera, model, units and test split remain source declarations, not an independent training audit."),n.createElement("dl",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:3",className:"experiment-declarations"},e.entries.map(s=>n.createElement("div",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:72",key:s.id},n.createElement("dt",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:88"},a?s.labelZh:s.label," ",n.createElement("span",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:115"},t(s.status))),n.createElement("dd",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:150"},s.value==null?"—":typeof s.value=="object"?JSON.stringify(s.value):String(s.value),s.note&&n.createElement("small",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:248"},s.note.replace(/collaborator/gi,"Source")),s.source&&n.createElement("small",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:318"},s.source.file," · SHA256 ",s.source.sha256))))),n.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:7:3"},a?"直接比较要求相同GT、协议、帧集合、有效域和单位；不同相机/模型可以作为实验变量，但必须显示差异。":"Direct comparison requires the same GT, protocol, frame set, support and units. Camera/model differences may be experimental variables but must be disclosed.")):n.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:134",role:"status"},a?"声明尚未核验，不能推断实验条件。":"Declarations not yet verified; conditions cannot be inferred."))}const Et=[1007,1023,1039,1057,1073,1089],ln=e=>Number.isFinite(e)?e.toFixed(6):"—";function p0({bundle:e,frame:a,onFrame:t,onDownload:s,reportSelection:c,onReportSelection:i,unifiedRestore:o=!1,displayGeometryFrames:r=e.geometryFrames}){const{language:f}=fe(),d=f==="zh",[m,u]=j.useState("all"),[v,g]=j.useState("height"),p=c?.subset??m,l=c?.metric??v;function b(D){u(D),i?.($=>({...$,subset:D}))}function w(D){g(D),i?.($=>({...$,metric:D}))}const[B,E]=j.useState(""),y=j.useRef(xi());j.useEffect(()=>(y.current.cancel(),()=>y.current.cancel()),[a,e]);const _=j.useRef(null),x=[e.datasetA.manifestSha256,e.datasetB.manifestSha256,e.protocol.sourceScriptSha256].join("/");j.useEffect(()=>{function D($){const U=$.detail;!_.current?.getClientRects().length||U.run!==e.runId||U.protocol!==e.protocol.id||U.identity!==x||(l!==U.metric&&w(U.metric),p!==U.subset&&b(U.subset),U.scope==="frame"&&a!==U.frame&&S(U.frame),$.preventDefault())}return window.addEventListener("oceanscope-restore-curve",D),()=>window.removeEventListener("oceanscope-restore-curve",D)},[e,a,l,p,x]);function S(D){y.current.cancel(),t(D)}async function C(D){if(y.current.cancel(),!!D)try{if(D.size>1024*1024)throw Error("Result selection file too large");const $=await y.current.run(async()=>vi(await D.text(),e));$&&(b($.subset),w($.metric),t($.frame),E(d?"已恢复相同结果的帧与集合；指标仍来自已核验结果包。":"Restored frame and subset; metrics remain from the verified bundle."))}catch($){E($.message)}}const A=Bc(e,a??e.frameIds[0]),h={...A,geometryAvailable:r.includes(A.frame)},R=e.rows.filter(D=>p==="all"||Et.includes(D.frame)),M=e.summary.velocity[p==="all"?"all_frames":"velocity_net_6_frames"]["grid_0.1m"],N=p==="all"?d?"全96帧 · 粗网格":"All96 frames · Coarse grid":d?"固定六帧 · 粗网格":"Fixed six frames · Coarse grid",F=D=>l==="height"?D.height.mae_m*100:D.velocity.coarse.rel_rmse,V=Math.max(...R.map(F),1e-9),H=D=>42+(D-1001)/95*836,J=D=>155-D/V*125;function q(){return{schemaVersion:1,runId:e.runId,protocol:e.protocol,datasetA:e.datasetA,datasetB:e.datasetB,frame:h.frame,selectedFrame:h.row,subset:p,metric:l,unitStatus:e.unitStatus,geometryAvailable:h.geometryAvailable,summaryScope:"height: all96; velocity: selected subset",summary:{height:e.summary.height,velocity:M},rows:R}}function Y(){return["run_id,protocol_id,subset,frame,height_mae_m,height_bias_m,common_columns,coarse_rel_rmse,coarse_valid_voxels,geometry_available",...R.map(D=>[e.runId,e.protocol.id,p,D.frame,D.height.mae_m,D.height.bias_m,D.height.common,D.velocity.coarse.rel_rmse,D.velocity.coarse.voxels,r.includes(D.frame)].join(","))].join(`
`)}return n.createElement("section",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:41:9",className:"reference-evaluation","aria-label":d?"原始96帧协议结果":"Raw 96-frame protocol results"},n.createElement("header",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:3"},n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:11"},n.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:16",className:"reference-eyebrow"},"RAW VDB · 96 / 96"),n.createElement("h2",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:76"},d?"Gentle → Best_1027 · 序列评估":"Gentle → Best_1027 · Sequence evaluation")),n.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:166",className:"reference-status"},d?"原始读取已核验":"Verified raw read")),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:43:3"},d?"192个原始文件身份核验 · 0失败 · 95个相邻帧对。单位采用来源约定，尚未独立标定。":"192 source identities verified · 0 failures · 95 adjacent pairs. Units follow source convention, without independent calibration."),n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:3",className:"reference-cards"},n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:36"},n.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:41"},d?"全96帧高度 MAE":"All96 height MAE"),n.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:90"},ln(e.summary.height.mae_m*100)," ",n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:140"},"cm")),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:166"},ln(e.summary.height.mae_pct),"% R · R=1.230"),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:233"},d?"有符号偏差":"Signed bias"," ",ln(e.summary.height.bias_pct),"% R")),n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:324"},n.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:329"},d?"速度 relative RMSE · pooled":"Velocity relative RMSE · pooled"),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:408",className:"metric-scope"},N),n.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:463"},ln(M.rel_rmse)),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:507"},M.voxels.toLocaleString()," ",d?"有效粗网格点":"valid coarse voxels")),n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:598"},n.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:603"},d?"速度 relative RMSE · 逐帧均值":"Velocity relative RMSE · Frame mean"),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:684",className:"metric-scope"},N),n.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:739"},ln(M.rel_rmse_frame_mean)),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:794"},d?"XZ 0.1 / Y 0.05 · 来源单位":"XZ 0.1 / Y 0.05 · source units"))),n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:3",className:"reference-controls"},n.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:39"},d?"帧集合":"Frame set"," ",n.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:69","data-os-action":"","aria-label":"Reference frame set",value:p,onChange:D=>{y.current.cancel(),b(D.target.value)}},n.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:195",value:"all"},d?"全96帧":"All96 frames"),n.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:250",value:"six"},d?"固定六帧":"Fixed six frames"))),n.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:326"},d?"曲线":"Curve"," ",n.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:351","data-os-action":"","aria-label":"Reference metric",value:l,onChange:D=>{y.current.cancel(),w(D.target.value)}},n.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:474",value:"height"},d?"高度 MAE (cm)":"Height MAE (cm)"),n.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:542",value:"velocity"},d?"粗网格速度 relative RMSE":"Coarse velocity relative RMSE"))),n.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:651"},d?"原始帧号":"Original frame"," ",n.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:687","data-os-action":"","aria-label":"Reference frame",value:h.frame,onChange:D=>S(Number(D.target.value))},e.frameIds.map(D=>n.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:822",key:D,value:D},D,r.includes(D)?" · 3D":""))))),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:46:3",role:"status"},n.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:46:20"},d?"选定帧":"Selected frame"," ",h.frame)," ",n.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:46:83","data-os-action":"",hidden:p==="six"&&!Et.includes(h.frame),type:"button","data-os-tools":"",className:"os-frame-comment",onClick:()=>window.dispatchEvent(new CustomEvent("oceanscope-review-frame",{detail:_.current}))},d?"批注此帧":"Comment on this frame")," · ",d?"高度 MAE":"Height MAE"," ",ln(h.row.height.mae_m*100)," cm · ",d?"速度 relative RMSE":"Velocity relative RMSE"," ",ln(h.row.velocity.coarse.rel_rmse)," · ",h.geometryAvailable?d?"三维预览可用":"3D preview available":d?"该帧无三维数据；保留真实帧号与指标":"No 3D data for this frame; frame identity and metrics retained",p==="six"&&!Et.includes(h.frame)&&(d?" · 当前帧不在固定六帧集合":" · Current frame outside fixed-six subset")),!h.geometryAvailable&&n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:47:34",className:"reference-geometry-links"},d?"跳转到可用三维帧：":"Jump to available geometry: ",r.map(D=>n.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:47:153","data-os-action":"",key:D,onClick:()=>S(D)},D))),n.createElement("figure",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:48:3",className:"os-metric-figure","data-review-id":"reference-frame-metric"},n.createElement("figcaption",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:49:4"},l==="height"?d?"高度 MAE 逐帧曲线":"Height MAE by frame":d?"速度 relative RMSE 逐帧曲线":"Velocity relative RMSE by frame"),n.createElement("svg",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:4",ref:_,"data-review-curve":"reference-frame-metric","data-run":e.runId,"data-protocol":e.protocol.id,"data-identity":x,"data-subset":p,"data-metric":l,"data-frame":h.frame,"data-value":F(h.row),"data-unit":l==="height"?"cm":"1",viewBox:"0 0 920 190",role:"img","aria-label":d?"原始帧指标曲线":"Original-frame metric curve"},n.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:384",x:"8",y:"27"},ln(V)),n.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:423",x:"15",y:"159"},"0"),n.createElement("line",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:452",x1:"42",x2:"878",y1:"155",y2:"155",stroke:"#a7c4cb"}),n.createElement("polyline",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:511",points:R.map(D=>`${H(D.frame)},${J(F(D))}`).join(" "),fill:"none",stroke:"#087e8b",strokeWidth:"2"}),R.map(D=>n.createElement("circle",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:643","data-os-action":"","data-frame":D.frame,key:D.frame,cx:H(D.frame),cy:J(F(D)),r:D.frame===h.frame?5:3,fill:D.frame===h.frame?"#c45c15":"#087e8b",role:"button",tabIndex:"0","aria-label":`${d?"选择帧":"Select frame"} ${D.frame}`,onClick:()=>S(D.frame),onKeyDown:$=>{($.key==="Enter"||$.key===" ")&&($.preventDefault(),S(D.frame))}},n.createElement("title",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1012"},D.frame,": ",ln(F(D))))),n.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1067",x:"42",y:"180"},"1001"),n.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1099",x:"840",y:"180"},"1096"),n.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1132",x:"400",y:"180"},d?"原始帧号":"Original frame"))),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:51:3",className:"reference-scope"},d?"此处为固定协议的全局／逐帧指标。相机、显示平滑与ROI不改变这些值；同协议空间面板使用原生列高度。三维场切片与旧预览诊断保留各自计算范围。":"These are fixed-protocol global/per-frame metrics. Camera, display smoothing and ROI do not change them. The protocol spatial panel uses native height columns; volume slices and legacy diagnostics retain their own scope."),n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:52:3",className:"reference-controls"},n.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:52:39","data-os-action":"",onClick:()=>s(`${e.runId}_${p}.json`,JSON.stringify(q(),null,2))},d?"导出结果与当前帧 JSON":"Export results and current frame JSON"),n.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:52:209","data-os-action":"",onClick:()=>s(`${e.runId}_${p}.csv`,Y(),"text/csv")},d?"导出所选集合 CSV":"Export selected-set CSV")),n.createElement(m0,{bundle:e,subset:p,zh:d,onDownload:s,frame:h.frame,selectedGrid:c?.grid,onGrid:D=>i?.($=>({...$,grid:D}))}),n.createElement(b0,{declarations:e.declarations,zh:d}),!o&&n.createElement("details",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:21"},n.createElement("summary",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:30"},d?"恢复结果选择":"Restore result selection"),n.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:89"},d?"选择本面板导出的 JSON":"Choose JSON exported from this panel"," ",n.createElement("input",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:156","data-os-action":"",type:"file",accept:"application/json,.json","aria-label":"Restore reference selection",onChange:D=>{C(D.target.files?.[0]),D.target.value=""}})),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:320",role:"status"},B)),n.createElement("details",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:3"},n.createElement("summary",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:12"},d?"数据身份、协议与有效计数":"Identity, protocol and valid counts"),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:88"},e.protocol.id," · ",e.runId),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:132"},"A: ",e.datasetA.manifestSha256,n.createElement("br",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:170"}),"B: ",e.datasetB.manifestSha256,n.createElement("br",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:210"}),d?"算法":"Algorithm",": ",e.protocol.sourceScriptSha256),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:278"},d?"当前帧共同高度列":"Current common height columns",": ",h.row.height.common," · GT ",h.row.height.gtWet," / B ",h.row.height.predictionWet,"; ",d?"速度有效点":"Valid velocity voxels",": ",h.row.velocity.coarse.voxels)))}function ha(e,a,t){const s=e.points;return s.flatMap((c,i)=>!i||i===s.length-1||c.x<a.xmin||c.x>a.xmax||c.z<a.zmin||c.z>a.zmax?[]:s.slice(i-1,i+2).every(r=>Number.isFinite(r.a)&&Number.isFinite(r.b))?s[i-1][t]<c[t]&&s[i+1][t]<c[t]?[i]:[]:[])}function Gn(e,a){if(!a||!["first","second"].includes(a.profile)||!["uncertain","paired"].includes(a.status))throw Error("Invalid crest annotation");const t=e.profiles[a.profile];for(const i of["a","b"])if(!ha(t,e.roi,i).includes(a[i]))throw Error("Invalid crest sample");const s=t.points[a.a],c=t.points[a.b];return{gt:s,pred:c,deltaHeight:c.b-s.a,deltaDistance:c.distance-s.distance}}function Ka(e,a){if(!e.roi||!["first","second"].includes(a?.profile))throw Error("Invalid crest profile or ROI");return a.status==="uncertain"&&a.a===null&&a.b===null?null:Gn(e,a)}function Qa(e){const{shape:[a,t],originXYZ:[s,,c],spacing:i}=e.descriptor;return{xmin:s,xmax:s+(t-1)*i,zmin:c,zmax:c+(a-1)*i}}function ba(e,a,{mode:t="create"}={}){const s={...e};for(const c of["x","z"]){const i=c+"min",o=c+"max";if(!Number.isFinite(s[i])||!Number.isFinite(s[o])||s[o]<s[i])throw Error("Invalid ROI");if(t==="move"){const r=Math.min(s[o]-s[i],a[o]-a[i]);s[i]=Math.max(a[i],Math.min(a[o]-r,s[i])),s[o]=s[i]+r}else s[i]=Math.max(a[i],Math.min(a[o],s[i])),s[o]=Math.max(a[i],Math.min(a[o],s[o]))}return{roi:s,clipped:JSON.stringify(s)!==JSON.stringify(e)}}function ai(e,{ix:a,iz:t,resourceKey:s}){const{shape:[c,i],originXYZ:[o,,r],spacing:f,frameId:d}=e.descriptor;if(!Number.isInteger(a)||!Number.isInteger(t)||a<0||a>=i||t<0||t>=c||!e.common[t*i+a])throw Error("Select a paired valid location");const m=o+a*f,u=r+t*f;return{version:1,frame:d,resourceKey:s,hotspot:{ix:a,iz:t,index:t*i+a,x:m,z:u},roi:ba({xmin:m-10*f,xmax:m+10*f,zmin:u-10*f,zmax:u+10*f},Qa(e)).roi,directionDeg:0,anchorMode:"hotspot"}}function et({anchor:e,direction:a},t){let s=-1/0,c=1/0;for(const[i,o,r,f]of[[e.x,a[0],t.xmin,t.xmax],[e.z,a[1],t.zmin,t.zmax]])if(Math.abs(o)<1e-12){if(i<r-1e-9||i>f+1e-9)return null}else{const d=(r-i)/o,m=(f-i)/o;s=Math.max(s,Math.min(d,m)),c=Math.min(c,Math.max(d,m))}return s<=c?[s,c]:null}function Rt(e,{x:a,z:t,directionDeg:s}){const c=Qa(e),{shape:[i,o],originXYZ:[r,,f],spacing:d}=e.descriptor;if(![a,t,s].every(Number.isFinite)||a<c.xmin||a>c.xmax||t<c.zmin||t>c.zmax)throw Error("Profile anchor outside domain");const m=s*Math.PI/180,u=[Math.cos(m),Math.sin(m)],v={x:a,z:t},g=et({anchor:v,direction:u},c),p=(a-r)/d,l=(t-f)/d,b=Math.abs(u[1])<1e-12&&Math.abs(l-Math.round(l))<1e-8,w=Math.abs(u[0])<1e-12&&Math.abs(p-Math.round(p))<1e-8,B=(b||w)&&Math.abs(p-Math.round(p))<1e-8&&Math.abs(l-Math.round(l))<1e-8;let E;if(B)E=Array.from({length:b?o:i},(_,x)=>((b?r:f)+x*d-(b?a:t))/(b?u[0]:u[1]));else{const _=Math.max(2,Math.ceil((g[1]-g[0])/d)+1);E=Array.from({length:_},(x,S)=>g[0]+(g[1]-g[0])*S/(_-1))}E=[...E,0].sort((_,x)=>_-x).filter((_,x,S)=>x===0||Math.abs(_-S[x-1])>1e-9);const y=E.map(_=>{const x=a+_*u[0],S=t+_*u[1],C=(x-r)/d,A=(S-f)/d;let h=null,R=null;if(B){const M=Math.round(A)*o+Math.round(C);e.common[M]&&(h=e.heightA[M],R=e.heightB[M])}else if(o>=2&&i>=2){const M=Math.max(0,Math.min(o-2,Math.floor(C))),N=Math.max(0,Math.min(i-2,Math.floor(A))),F=C-M,V=A-N,H=[N*o+M,N*o+M+1,(N+1)*o+M,(N+1)*o+M+1],J=[(1-F)*(1-V),F*(1-V),(1-F)*V,F*V];H.every(q=>e.common[q]&&Number.isFinite(e.heightA[q])&&Number.isFinite(e.heightB[q]))&&(h=H.reduce((q,Y,D)=>q+J[D]*e.heightA[Y],0),R=H.reduce((q,Y,D)=>q+J[D]*e.heightB[Y],0))}return{distance:_,x,z:S,a:h,b:R,difference:h===null||R===null?null:R-h}});return{anchor:v,direction:u,sampling:B?"native_columns":"bilinear_common_four",step:d,points:y}}function Hn(e,a){return{first:Rt(e,{...a.hotspot,directionDeg:a.directionDeg}),second:Rt(e,{...a.hotspot,directionDeg:a.directionDeg+90})}}function Pt(e){let a=0,t=0,s=0,c=0,i=null;for(const o of e){if(!Number.isFinite(o.error))continue;const r=o.error,f=Math.abs(r);a++,t+=r,s+=f,c+=r*r,!i||f>i.absolute?i={...o,absolute:f,signed:r,ties:1}:f===i.absolute&&i.ties++}return{samples:a,mae:a?s/a:null,bias:a?t/a:null,rmse:a?Math.sqrt(c/a):null,maximum:i}}function Zn(e,a=null){if(a&&(!["xmin","xmax","zmin","zmax"].every(v=>Number.isFinite(a[v]))||a.xmin>a.xmax||a.zmin>a.zmax))throw Error("Invalid evidence ROI");const{shape:[t,s],originXYZ:[c,,i],spacing:o}=e.descriptor;let r=0,f=0,d=0;const m=[];for(let v=0;v<t;v++)for(let g=0;g<s;g++){const p=v*s+g,l=c+g*o,b=i+v*o;a&&(l<a.xmin||l>a.xmax||b<a.zmin||b>a.zmax)||(r++,f+=+!!e.wetA[p],d+=+!!e.wetB[p],e.common[p]&&m.push({index:p,ix:g,iz:v,x:l,z:b,error:e.heightB[p]-e.heightA[p]}))}const u=Pt(m);return{...u,candidates:r,validGT:f,validPrediction:d,common:u.samples,coverageCandidate:r?u.samples/r:null,coverageGT:f?u.samples/f:null,weighting:"native columns, equal area per column"}}function It(e,a=null){const t=a?et(e,a):null,s=e.points.map(c=>({...c,error:c.difference}));return{full:Pt(s),roi:a?Pt(t?s.filter(c=>c.distance>=t[0]-1e-10&&c.distance<=t[1]+1e-10):[]):null,sampling:e.sampling,weighting:"sample mean; not native area or volume statistics"}}function $i(e,a,t){if(!e||e.version!==1||e.frame!==a.frameId||e.resourceKey!==JSON.stringify(a)||e.anchorMode!=="hotspot"||!Number.isFinite(e.directionDeg)||e.directionDeg<0||e.directionDeg>=180)throw Error("Invalid diagnosis identity/direction");if(e.caseNote!==void 0&&(typeof e.caseNote!="string"||e.caseNote.length>120))throw Error("Invalid case note");const s=e.hotspot,[c,i]=a.shape,o=a.spacing;if(!s||!Number.isInteger(s.ix)||!Number.isInteger(s.iz)||s.ix<0||s.ix>=i||s.iz<0||s.iz>=c||s.index!==s.iz*i+s.ix||![s.x,s.z].every(Number.isFinite)||Math.abs(s.x-(a.originXYZ[0]+s.ix*o))>1e-9||Math.abs(s.z-(a.originXYZ[2]+s.iz*o))>1e-9||!t||t.index!==s.index||Math.abs(t.x-s.x)>1e-9||Math.abs(t.z-s.z)>1e-9)throw Error("Diagnosis native point mismatch");const r=e.crest;if(r&&(!["first","second"].includes(r.profile)||!["paired","uncertain"].includes(r.status)||!(Number.isInteger(r.a)&&Number.isInteger(r.b)||r.status==="uncertain"&&r.a===null&&r.b===null)))throw Error("Invalid crest selection");return{...r?{crest:{profile:r.profile,status:r.status,a:r.a,b:r.b}}:{},...e.caseNote!==void 0?{caseNote:e.caseNote}:{},version:1,frame:e.frame,resourceKey:e.resourceKey,hotspot:{ix:s.ix,iz:s.iz,index:s.index,x:s.x,z:s.z},roi:e.roi??null,directionDeg:e.directionDeg,anchorMode:"hotspot"}}const Ut="oceanscope.protocol-report.v1",u0=e=>JSON.parse(JSON.stringify(e)),ti=e=>JSON.stringify(e,(a,t)=>t&&typeof t=="object"&&!Array.isArray(t)?Object.fromEntries(Object.keys(t).sort().map(s=>[s,t[s]])):t),$a=(e,a)=>ti(e)===ti(a),pa=(e,a=-1e9,t=1e9)=>typeof e=="number"&&Number.isFinite(e)&&e>=a&&e<=t;function Wi(e){if(!/^[a-f0-9]{64}$/.test(e.verifiedPayloadSha256)||!/^[a-f0-9]{64}$/.test(e.declarations?.sha256))throw Error("Verified report identity unavailable");return{...Xn(e),bundleSha256:e.verifiedPayloadSha256,declarationsSha256:e.declarations.sha256}}function Vi(e,a,t,s){if(!e||e.frame!==a.frameId||!t.frameIds.includes(e.frame))throw Error("Report frame mismatch");if(!["xy","xz","yz","oblique"].includes(e.plane)||!["x","y","z"].includes(e.rotationAxis)||!pa(e.angle,0,180)||!pa(e.sectionPercent,0,100))throw Error("Invalid report section");const c=e.plane==="xy"||e.plane==="oblique"?a.shape[0]:e.plane==="yz"?a.shape[1]:s?.[0]?.processing.lattice.dimensions[1]??64;if(!Number.isInteger(e.sliceIndex)||e.sliceIndex<0||e.sliceIndex>=c)throw Error("Report slice outside lattice");const i=e.selection;if(!i||!["all","six"].includes(i.subset)||!["fine","coarse"].includes(i.grid)||!["height","velocity"].includes(i.metric))throw Error("Invalid report selection");let o=null,r=null;if(e.geometry){const d=e.geometry.settings?.representation===oa;if(!s?.length||!d&&!t.geometryFrames.includes(e.frame))throw Error("Report geometry unavailable");o=xn(e.geometry,s);const m=s.find(u=>u.id===o.settings.caseId);if(r=d?yi(m,e.frame,o.settings.quality):Xt(m,e.frame),!r||!$a(e.geometryResource,r))throw Error("Report preview resource identity mismatch");for(const u of["frame","plane","sliceIndex","rotationAxis","angle","sectionPercent"])if(o.settings[u]!==e[u])throw Error("Report geometry/section mismatch")}const f=typeof e.geometryStatus?.reason=="string"?e.geometryStatus.reason.slice(0,500):o?"Exact-frame preview bytes verified":"No 3D evidence captured";return{frame:e.frame,plane:e.plane,sliceIndex:e.sliceIndex,rotationAxis:e.rotationAxis,angle:e.angle,sectionPercent:e.sectionPercent,selection:{subset:i.subset,grid:i.grid,metric:i.metric},geometry:o,geometryResource:r,geometryStatus:{status:o?"included":"unavailable",reason:f}}}function Nt(e){if(e==null)return null;if(!["xmin","xmax","zmin","zmax"].every(a=>pa(e[a]))||e.xmin>e.xmax||e.zmin>e.zmax)throw Error("Invalid report ROI");return Object.fromEntries(["xmin","xmax","zmin","zmax"].map(a=>[a,e[a]]))}function La(e,a){if(e==null)return null;const[t,s]=a.shape,c=e.index;if(!Number.isInteger(c)||c<0||c>=t*s)throw Error("Invalid report probe");const i=a.originXYZ[0]+c%s*a.spacing,o=a.originXYZ[2]+Math.floor(c/s)*a.spacing;if(!pa(e.x)||!pa(e.z)||Math.abs(i-e.x)>1e-9||Math.abs(o-e.z)>1e-9)throw Error("Report probe/column mismatch");return{index:c,x:i,z:o}}function h0({bundle:e,spatial:a,view:t,roi:s=null,probe:c=null,catalog:i,diagnosis:o=null,appearance:r=null}){const f=a.descriptor,d=Vi(t,f,e,i),m=Nt(s);if(r!=null&&typeof r.absoluteError!="boolean")throw Error("Invalid report appearance");let u=r?{appearance:{absoluteError:r.absoluteError}}:{};if(o){const g=$i({...o,roi:m},f,La(c,f));if(!a.common[g.hotspot.index])throw Error("Diagnosis hotspot is no longer jointly valid");const p=Hn(a,g);u={...g.crest&&{crestMeasurement:Ka({roi:m,profiles:p},g.crest)},diagnosis:g,appearance:{absoluteError:r?.absoluteError??!1},profiles:p,evidence:{frame:Zn(a),roi:m?Zn(a,m):null,first:It(p.first,m),second:It(p.second,m)}}}const v=d.plane==="xy"||d.plane==="yz"||d.plane==="oblique"&&d.rotationAxis==="y"?Ei(a,{plane:d.plane,index:d.sliceIndex,angle:d.angle,sectionPercent:d.sectionPercent}):null;return u0({schema:Ut,...u,createdAt:new Date().toISOString(),source:Wi(e),descriptor:f,view:d,roi:m,probe:La(c,f),global:ra(a),local:m?ra(a,m):null,profile:v,metrics:Di(e,{...d.selection,frame:d.frame}),frameMetrics:e.rows.find(g=>g.frame===d.frame),declarations:e.declarations,unitStatus:e.unitStatus,scope:"Native highest-crossing height columns; ROI/profile do not replace all96 global metrics. Units are source convention, not independently calibrated."})}function zi(e,a,t,{catalog:s}={}){if(new TextEncoder().encode(e).length>1024*1024)throw Error("Report file too large");const c=JSON.parse(e);if(c?.schema!==Ut)throw Error("Unsupported protocol report format");if(!$a(c.source,Wi(a)))throw Error("Report identity mismatch");const i=t.frames.find(r=>r.frameId===c.view?.frame);if(!i||!$a(c.descriptor,i))throw Error("Report resource mismatch");let o={};if(c.appearance!=null){if(typeof c.appearance.absoluteError!="boolean")throw Error("Invalid report appearance");o.appearance={absoluteError:c.appearance.absoluteError}}if(c.diagnosis!=null){const r=La(c.probe,i),f=Nt(c.roi),d=$i(c.diagnosis,i,r);if(!$a(d.roi,f))throw Error("Diagnosis ROI mismatch");if(typeof c.appearance?.absoluteError!="boolean")throw Error("Invalid diagnosis appearance");o={diagnosis:d,appearance:{absoluteError:c.appearance.absoluteError}}}return{descriptor:i,...o,view:Vi(c.view,i,a,s),roi:Nt(c.roi),probe:La(c.probe,i)}}function g0(e){const a=s=>'"'+String(s==null?"":typeof s=="object"?JSON.stringify(s):s).replaceAll('"','""')+'"',t=[["kind","name","value","unit","scope","metadata"]];t.push(["source","snapshot",e.createdAt,"",e.schema,e.unitStatus]);for(const[s,c]of Object.entries(e.source))t.push(["source",s,c,"","identity",""]);t.push(["view","selection",e.view,"","current view",{roi:e.roi,probe:e.probe}],["source","declarations",e.declarations,"","claimed / verified / unknown",""]);for(const s of e.metrics)t.push(["metric",s.id,s.value,s.unit,s.scope,s]);for(const[s,c]of[["frame",e.global],["ROI",e.local]])if(c)for(const[i,o]of Object.entries(c))t.push(["spatial",i,o,i==="common"?"columns":"m",s,{frame:e.view.frame,roi:s==="ROI"?e.roi:null}]);e.diagnosis?.crest&&t.push(["crest pair",e.diagnosis.crest.status,e.crestMeasurement,"scene units","prediction minus GT along profile",e.diagnosis.crest]);for(const s of e.profile?.points??[])t.push(["profile","height A / B / difference",s,"m",e.profile.sampling,{frame:e.view.frame,plane:e.view.plane}]);if(e.diagnosis){t.push(["diagnosis","selection",e.diagnosis,"","native hotspot / current ROI",e.appearance]);for(const[s,c]of Object.entries(e.evidence))c&&t.push(["diagnostic evidence",s,c,"m; coverage fractions","explicit native or profile sample weighting",c.weighting??""]);for(const[s,c]of Object.entries(e.profiles))for(const i of c.points)t.push(["paired profile",s,i,"m",c.sampling,{frame:e.view.frame,anchor:c.anchor,direction:c.direction,roi:e.roi}])}return t.map(s=>s.map(a).join(",")).join(`
`)}function y0(e,a){return nt({stem:`${e.source.runId}_${e.view.frame}_protocol-report`,record:e,csv:g0(e),previewUrl:a})}function nt({stem:e,record:a,csv:t,previewUrl:s}){const c=[],i=o=>{const r=URL.createObjectURL(o);return c.push(r),r};try{const o={csv:{name:e+".csv",mime:"text/csv",content:t},json:{name:e+".json",mime:"application/json",content:JSON.stringify(a,null,2)}};if(s){if(!s.startsWith("data:image/png;base64,"))throw Error("PNG encoding failed");const r=Uint8Array.from(atob(s.slice(s.indexOf(",")+1)),d=>d.charCodeAt(0)),f=new Blob([r],{type:"image/png"});o.png={name:e+".png",mime:"image/png",blob:f,href:i(f)}}for(const r of["csv","json"]){const f=o[r];f.blob=new Blob([f.content],{type:f.mime+";charset=utf-8"}),f.href=i(f.blob)}return o}catch(o){for(const r of c)URL.revokeObjectURL(r);throw o}}const x0=JSON.parse('{"surface":{"schema":"oceanscope.protocol-report.v1","source":{"runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d","bundleSha256":"539734f929b2d3d4a53adb2563bc9598e1cc8efcd33439f8a39db052bafb28bd","declarationsSha256":"1d6bf2602f814aaf224c6bf570a8872405d7274bf4c6a9f063bab44d60aeaeec"},"descriptor":{"schemaVersion":1,"kind":"protocol-spatial-frame","runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d","frameId":1049,"shape":[128,224],"axisOrder":"ZX","originXYZ":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],"spacing":0.049999999148505836,"resources":{"heightA":{"file":"1049-heightA.bin","dtype":"float64-le","bytes":229376,"sha256":"24c95d7cdfa22d12d1baa44f16647a69b44fde83a51177b9c999d4111f751d9a"},"heightB":{"file":"1049-heightB.bin","dtype":"float64-le","bytes":229376,"sha256":"c8257805f4d3da79b0d2c5e336cea75c4b4bcfa66a55377dfe3da25004ad03b2"},"wetA":{"file":"1049-wetA.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"wetB":{"file":"1049-wetB.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"common":{"file":"1049-common.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"steep":{"file":"1049-steep.bin","dtype":"uint8","bytes":28672,"sha256":"2cf37c40b5fa4df751e05dfe9fe920a9a2efce396ff746978ff1e0c4f1b688db"},"calmCells":{"file":"1049-calmCells.bin","dtype":"uint8","bytes":28672,"sha256":"7cfdd3055066ff1620d4127ff4e0e4aaf6f94aeb6996731887065efac3533d22"},"breakingBand":{"file":"1049-breakingBand.bin","dtype":"uint8","bytes":28672,"sha256":"28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"},"calmBand":{"file":"1049-calmBand.bin","dtype":"uint8","bytes":28672,"sha256":"b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"}},"summary":{"common":19487,"mae_m":0.020208329793287478,"bias_m":-0.007192271702029772,"rmse_m":0.031439791153657054}},"view":{"frame":1049,"plane":"yz","sliceIndex":111,"rotationAxis":"y","angle":30,"sectionPercent":50,"selection":{"subset":"all","grid":"coarse","metric":"height"},"geometry":{"schema":"oceanscope.field-view.v1","name":"best-1027 · SDF · 1049 · YZ","sourceSignature":"{\\"comparison\\":\\"best-1027\\",\\"gt\\":\\"public-ground-truth\\",\\"prediction\\":\\"best-1027-reconstruction\\",\\"groups\\":[\\"sdf\\",\\"velocity\\"],\\"settings\\":{\\"activeGroup\\":\\"sdf\\",\\"previewOnly\\":false,\\"sdfEvaluationRegion\\":\\"full_domain\\",\\"sdf\\":{\\"gt\\":{\\"semantics\\":\\"full\\",\\"unit\\":\\"m\\",\\"validationMode\\":\\"local_pilot\\"},\\"prediction\\":{\\"semantics\\":\\"full\\",\\"unit\\":\\"m\\",\\"validationMode\\":\\"local_pilot\\"}},\\"velocity\\":{\\"gt\\":{\\"unit\\":\\"m/s\\"},\\"prediction\\":{\\"unit\\":\\"m/s\\"}},\\"heightComparison\\":{\\"surfaceValidated\\":true,\\"negativeInside\\":true,\\"upAxis\\":\\"Y\\",\\"coordinateUnit\\":\\"m\\",\\"frameTimeAligned\\":true,\\"basis\\":\\"Working pairing confirmed by user; local audited full-SDF pilot; see reconstructionEvaluation protocol.\\"}},\\"lattice\\":{\\"dimensions\\":[224,64,128],\\"origin\\":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],\\"axisSteps\\":[[0.049999999148505836,0,0],[0,0.049999999148505836,0],[0,0,0.049999999148505836]]},\\"directory\\":[{\\"group\\":\\"sdf\\",\\"name\\":\\"ground_truth\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"prediction\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"error\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"ground_truth\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"prediction\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"error\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"}],\\"frames\\":[1001,1049,1096]}","settings":{"rotationAxis":"y","shading":"original","caseId":"best-1027","frame":1049,"group":"sdf","mode":"split","quality":"balanced","component":"magnitude","plane":"yz","sliceIndex":111,"angle":30,"sectionPercent":50,"showPlane":true,"showContext":false,"showGt":true,"showPrediction":true,"gtOpacity":0.65,"predictionOpacity":0.8,"vectorDensity":2000,"arrowScale":1,"sourceRange":null,"errorScale":{"locked":false,"limit":1},"crosshair":[0.5,0.5],"playback":{"speed":1,"loop":false,"fps":24}},"camera":{"position":[8.120590815791608,9.983917335547375,14.345039351807678],"target":[-4.074999809265052,0.07499995268883719,0.6249998986189338],"up":[0,1,0],"fov":40,"zoom":1,"near":0.0006606199627135705,"far":274.66654008364844}},"geometryResource":{"frame":1049,"url":"/data/fields/best-1027/1049.ocfld.gz","packedBytes":26633403,"packedSha256":"1443fd356c49996f7b7bac3ab8d8ee9fc4b40d9a6d4a0734b2a0e6e2592c2548","decodedBytes":99523224,"decodedSha256":"ad0deb564ccd2db1fc91e4db9f711acaa8f6c231e3acca426773f8bb0cbf851a"},"geometryStatus":{"status":"included","reason":"Exact-frame preview bytes verified"}},"roi":{"xmin":-1.3499998556714843,"xmax":-0.34999987270136756,"zmin":1.44999988456928,"zmax":2.449999867539397},"probe":{"index":20336,"x":-0.8499998641864259,"z":1.9499998760543384},"diagnosis":{"caseNote":"案例A：GT局部峰附近预测偏低。检查峰高差异；邻近峰对应关系尚未独立确认。","version":1,"frame":1049,"resourceKey":"{\\"schemaVersion\\":1,\\"kind\\":\\"protocol-spatial-frame\\",\\"runId\\":\\"raw-reference-96-e81b8955734e\\",\\"protocolSha256\\":\\"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9\\",\\"manifestA\\":\\"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e\\",\\"manifestB\\":\\"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d\\",\\"frameId\\":1049,\\"shape\\":[128,224],\\"axisOrder\\":\\"ZX\\",\\"originXYZ\\":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],\\"spacing\\":0.049999999148505836,\\"resources\\":{\\"heightA\\":{\\"file\\":\\"1049-heightA.bin\\",\\"dtype\\":\\"float64-le\\",\\"bytes\\":229376,\\"sha256\\":\\"24c95d7cdfa22d12d1baa44f16647a69b44fde83a51177b9c999d4111f751d9a\\"},\\"heightB\\":{\\"file\\":\\"1049-heightB.bin\\",\\"dtype\\":\\"float64-le\\",\\"bytes\\":229376,\\"sha256\\":\\"c8257805f4d3da79b0d2c5e336cea75c4b4bcfa66a55377dfe3da25004ad03b2\\"},\\"wetA\\":{\\"file\\":\\"1049-wetA.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"wetB\\":{\\"file\\":\\"1049-wetB.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"common\\":{\\"file\\":\\"1049-common.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"steep\\":{\\"file\\":\\"1049-steep.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"2cf37c40b5fa4df751e05dfe9fe920a9a2efce396ff746978ff1e0c4f1b688db\\"},\\"calmCells\\":{\\"file\\":\\"1049-calmCells.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"7cfdd3055066ff1620d4127ff4e0e4aaf6f94aeb6996731887065efac3533d22\\"},\\"breakingBand\\":{\\"file\\":\\"1049-breakingBand.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747\\"},\\"calmBand\\":{\\"file\\":\\"1049-calmBand.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1\\"}},\\"summary\\":{\\"common\\":19487,\\"mae_m\\":0.020208329793287478,\\"bias_m\\":-0.007192271702029772,\\"rmse_m\\":0.031439791153657054}}","hotspot":{"ix":176,"iz":90,"index":20336,"x":-0.8499998641864259,"z":1.9499998760543384},"roi":{"xmin":-1.3499998556714843,"xmax":-0.34999987270136756,"zmin":1.44999988456928,"zmax":2.449999867539397},"directionDeg":0,"anchorMode":"hotspot"},"appearance":{"absoluteError":false}},"velocity":{"schema":"oceanscope.velocity-diagnosis.v1","source":{"caseId":"best-1027","codeRevision":"6941367eb0fe09eefefd34144ccd67ed9403b2d4","calculation":"native-xz-paired-v1","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","originals":{"gt":{"frame":1049,"file":"clean_fullsdf_vel.1049.vdb","bytes":11105671,"sha256":"a821ec84b9f2eecc09f234cdf05050e77e3572d6f9c3d46bce94d0a28f328df9","manifestSha256":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},"prediction":{"frame":1049,"file":"recon_fullsdf_vel.1049.vdb","bytes":10571839,"sha256":"ff18d054439135a9c39abc139aa628ca7dcb753dd46b389b86bde47747f5d4c3","manifestSha256":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},"resource":{"frame":1049,"url":"/data/velocity-raw/1049.ocfld.gz","packedBytes":15261605,"packedSha256":"913c1ddbec87d484f71905720334c90ca6ebccdad5c48a543f69eb405308e707","decodedBytes":62391416,"decodedSha256":"403ff5ea6e2afcd3129761caa6a5adf7f2699e180d1733e85774ea1a55df4ef1","roundtrip":"exact"}},"alignment":{"lattice":{"dimensions":[224,64,128],"origin":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],"axisSteps":[[0.049999999148505836,0,0],[0,0.049999999148505836,0],[0,0,0.049999999148505836]],"voxelSize":[0.049999999148505836,0.049999999148505836,0.049999999148505836]},"unitClaim":"m/s","unitEvidence":"Existing source convention only; no independent physical or time calibration.","vectorBasis":{"status":"source-convention","evidence":"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.","independentPhysicalCalibration":false}},"domain":{"id":"collaborator-native","definition":{"id":"collaborator-native","cropX":[11,212],"cropZ":[11,105],"gtSdfCutoffFloat32":-0.10000000149011612,"rule":"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"}},"plane":{"frame":1049,"axis":"xz","yIndex":28,"yWorld":-0.10000004433093324},"roi":{"xmin":-1.3499998556714843,"xmax":-0.34999987270136756,"zmin":1.44999988456928,"zmax":2.449999867539397},"probe":{"xIndex":176,"zIndex":90,"xyz":[-0.8499998641864259,-0.10000004433093324,1.9499998760543384]},"appearance":{"mode":"direction","zoom":true,"viewport":{"x":166,"z":80,"width":21,"height":21},"ranges":{"speed":[0,2.872923899598361],"vectorError":[0,2.0896808971216365],"speedDelta":[-1.750984564815481,1.750984564815481],"direction":[0,180]}},"arrows":{"enabled":true,"stride":4,"gain":1.0036370012923275,"referenceSpeed":2.8695633942267817,"referenceGridLength":2.8800000000000003},"angleThreshold":{"tau":1e-8,"unit":"m/s (source convention)","source":"legacy preview numerical epsilon"},"surfaceCase":{"frame":1049,"hotspotXZ":{"x":-0.8499998641864259,"z":1.9499998760543384},"roiXZ":{"xmin":-1.3499998556714843,"xmax":-0.34999987270136756,"zmin":1.44999988456928,"zmax":2.449999867539397},"surfaceCaseId":"raw-reference-96-e81b8955734e","caseNote":"案例A：GT局部峰附近预测偏低。检查峰高差异；邻近峰对应关系尚未独立确认。","surfaceIdentity":{"runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}}},"inputs":{"surface":"08357988a2ccd4a522f7052a244ca2f811ee2630dab791a5e1f1a5a8399f7615","velocity":"b1205b882a060f69d1e5598f2c2a30858bfb0c77e16817cae12780b05ba074e8"}}'),v0=JSON.parse('{"surface":{"schema":"oceanscope.protocol-report.v1","source":{"runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d","bundleSha256":"539734f929b2d3d4a53adb2563bc9598e1cc8efcd33439f8a39db052bafb28bd","declarationsSha256":"1d6bf2602f814aaf224c6bf570a8872405d7274bf4c6a9f063bab44d60aeaeec"},"descriptor":{"schemaVersion":1,"kind":"protocol-spatial-frame","runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d","frameId":1049,"shape":[128,224],"axisOrder":"ZX","originXYZ":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],"spacing":0.049999999148505836,"resources":{"heightA":{"file":"1049-heightA.bin","dtype":"float64-le","bytes":229376,"sha256":"24c95d7cdfa22d12d1baa44f16647a69b44fde83a51177b9c999d4111f751d9a"},"heightB":{"file":"1049-heightB.bin","dtype":"float64-le","bytes":229376,"sha256":"c8257805f4d3da79b0d2c5e336cea75c4b4bcfa66a55377dfe3da25004ad03b2"},"wetA":{"file":"1049-wetA.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"wetB":{"file":"1049-wetB.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"common":{"file":"1049-common.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"steep":{"file":"1049-steep.bin","dtype":"uint8","bytes":28672,"sha256":"2cf37c40b5fa4df751e05dfe9fe920a9a2efce396ff746978ff1e0c4f1b688db"},"calmCells":{"file":"1049-calmCells.bin","dtype":"uint8","bytes":28672,"sha256":"7cfdd3055066ff1620d4127ff4e0e4aaf6f94aeb6996731887065efac3533d22"},"breakingBand":{"file":"1049-breakingBand.bin","dtype":"uint8","bytes":28672,"sha256":"28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"},"calmBand":{"file":"1049-calmBand.bin","dtype":"uint8","bytes":28672,"sha256":"b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"}},"summary":{"common":19487,"mae_m":0.020208329793287478,"bias_m":-0.007192271702029772,"rmse_m":0.031439791153657054}},"view":{"frame":1049,"plane":"yz","sliceIndex":111,"rotationAxis":"y","angle":30,"sectionPercent":50,"selection":{"subset":"all","grid":"coarse","metric":"height"},"geometry":{"schema":"oceanscope.field-view.v1","name":"best-1027 · SDF · 1049 · YZ","sourceSignature":"{\\"comparison\\":\\"best-1027\\",\\"gt\\":\\"public-ground-truth\\",\\"prediction\\":\\"best-1027-reconstruction\\",\\"groups\\":[\\"sdf\\",\\"velocity\\"],\\"settings\\":{\\"activeGroup\\":\\"sdf\\",\\"previewOnly\\":false,\\"sdfEvaluationRegion\\":\\"full_domain\\",\\"sdf\\":{\\"gt\\":{\\"semantics\\":\\"full\\",\\"unit\\":\\"m\\",\\"validationMode\\":\\"local_pilot\\"},\\"prediction\\":{\\"semantics\\":\\"full\\",\\"unit\\":\\"m\\",\\"validationMode\\":\\"local_pilot\\"}},\\"velocity\\":{\\"gt\\":{\\"unit\\":\\"m/s\\"},\\"prediction\\":{\\"unit\\":\\"m/s\\"}},\\"heightComparison\\":{\\"surfaceValidated\\":true,\\"negativeInside\\":true,\\"upAxis\\":\\"Y\\",\\"coordinateUnit\\":\\"m\\",\\"frameTimeAligned\\":true,\\"basis\\":\\"Working pairing confirmed by user; local audited full-SDF pilot; see reconstructionEvaluation protocol.\\"}},\\"lattice\\":{\\"dimensions\\":[224,64,128],\\"origin\\":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],\\"axisSteps\\":[[0.049999999148505836,0,0],[0,0.049999999148505836,0],[0,0,0.049999999148505836]]},\\"directory\\":[{\\"group\\":\\"sdf\\",\\"name\\":\\"ground_truth\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"prediction\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"error\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"ground_truth\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"prediction\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"error\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"}],\\"frames\\":[1001,1049,1096]}","settings":{"rotationAxis":"y","shading":"original","caseId":"best-1027","frame":1049,"group":"sdf","mode":"split","quality":"balanced","component":"magnitude","plane":"yz","sliceIndex":111,"angle":30,"sectionPercent":50,"showPlane":true,"showContext":false,"showGt":true,"showPrediction":true,"gtOpacity":0.65,"predictionOpacity":0.8,"vectorDensity":2000,"arrowScale":1,"sourceRange":null,"errorScale":{"locked":false,"limit":1},"crosshair":[0.5,0.5],"playback":{"speed":1,"loop":false,"fps":24}},"camera":{"position":[8.120590815791608,9.983917335547375,14.345039351807678],"target":[-4.074999809265052,0.07499995268883719,0.6249998986189338],"up":[0,1,0],"fov":40,"zoom":1,"near":0.0006606199627135705,"far":274.66654008364844}},"geometryResource":{"frame":1049,"url":"/data/fields/best-1027/1049.ocfld.gz","packedBytes":26633403,"packedSha256":"1443fd356c49996f7b7bac3ab8d8ee9fc4b40d9a6d4a0734b2a0e6e2592c2548","decodedBytes":99523224,"decodedSha256":"ad0deb564ccd2db1fc91e4db9f711acaa8f6c231e3acca426773f8bb0cbf851a"},"geometryStatus":{"status":"included","reason":"Exact-frame preview bytes verified"}},"roi":{"xmin":-1.449999853968496,"xmax":-0.44999987099837924,"zmin":0.39999990245065753,"zmax":1.3999998854207742},"probe":{"index":15630,"x":-0.9499998624834376,"z":0.8999998939357159},"diagnosis":{"caseNote":"案例B：沿X局部窗口内，GT与预测峰顶位置不同，峰高也不同；该观察不等于纯平移误差，也不构成自动峰配对。","version":1,"frame":1049,"resourceKey":"{\\"schemaVersion\\":1,\\"kind\\":\\"protocol-spatial-frame\\",\\"runId\\":\\"raw-reference-96-e81b8955734e\\",\\"protocolSha256\\":\\"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9\\",\\"manifestA\\":\\"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e\\",\\"manifestB\\":\\"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d\\",\\"frameId\\":1049,\\"shape\\":[128,224],\\"axisOrder\\":\\"ZX\\",\\"originXYZ\\":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],\\"spacing\\":0.049999999148505836,\\"resources\\":{\\"heightA\\":{\\"file\\":\\"1049-heightA.bin\\",\\"dtype\\":\\"float64-le\\",\\"bytes\\":229376,\\"sha256\\":\\"24c95d7cdfa22d12d1baa44f16647a69b44fde83a51177b9c999d4111f751d9a\\"},\\"heightB\\":{\\"file\\":\\"1049-heightB.bin\\",\\"dtype\\":\\"float64-le\\",\\"bytes\\":229376,\\"sha256\\":\\"c8257805f4d3da79b0d2c5e336cea75c4b4bcfa66a55377dfe3da25004ad03b2\\"},\\"wetA\\":{\\"file\\":\\"1049-wetA.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"wetB\\":{\\"file\\":\\"1049-wetB.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"common\\":{\\"file\\":\\"1049-common.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"steep\\":{\\"file\\":\\"1049-steep.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"2cf37c40b5fa4df751e05dfe9fe920a9a2efce396ff746978ff1e0c4f1b688db\\"},\\"calmCells\\":{\\"file\\":\\"1049-calmCells.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"7cfdd3055066ff1620d4127ff4e0e4aaf6f94aeb6996731887065efac3533d22\\"},\\"breakingBand\\":{\\"file\\":\\"1049-breakingBand.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747\\"},\\"calmBand\\":{\\"file\\":\\"1049-calmBand.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1\\"}},\\"summary\\":{\\"common\\":19487,\\"mae_m\\":0.020208329793287478,\\"bias_m\\":-0.007192271702029772,\\"rmse_m\\":0.031439791153657054}}","hotspot":{"ix":174,"iz":69,"index":15630,"x":-0.9499998624834376,"z":0.8999998939357159},"roi":{"xmin":-1.449999853968496,"xmax":-0.44999987099837924,"zmin":0.39999990245065753,"zmax":1.3999998854207742},"directionDeg":0,"anchorMode":"hotspot"},"appearance":{"absoluteError":true}},"velocity":{"schema":"oceanscope.velocity-diagnosis.v1","source":{"caseId":"best-1027","codeRevision":"6941367eb0fe09eefefd34144ccd67ed9403b2d4","calculation":"native-xz-paired-v1","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","originals":{"gt":{"frame":1049,"file":"clean_fullsdf_vel.1049.vdb","bytes":11105671,"sha256":"a821ec84b9f2eecc09f234cdf05050e77e3572d6f9c3d46bce94d0a28f328df9","manifestSha256":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},"prediction":{"frame":1049,"file":"recon_fullsdf_vel.1049.vdb","bytes":10571839,"sha256":"ff18d054439135a9c39abc139aa628ca7dcb753dd46b389b86bde47747f5d4c3","manifestSha256":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},"resource":{"frame":1049,"url":"/data/velocity-raw/1049.ocfld.gz","packedBytes":15261605,"packedSha256":"913c1ddbec87d484f71905720334c90ca6ebccdad5c48a543f69eb405308e707","decodedBytes":62391416,"decodedSha256":"403ff5ea6e2afcd3129761caa6a5adf7f2699e180d1733e85774ea1a55df4ef1","roundtrip":"exact"}},"alignment":{"lattice":{"dimensions":[224,64,128],"origin":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],"axisSteps":[[0.049999999148505836,0,0],[0,0.049999999148505836,0],[0,0,0.049999999148505836]],"voxelSize":[0.049999999148505836,0.049999999148505836,0.049999999148505836]},"unitClaim":"m/s","unitEvidence":"Existing source convention only; no independent physical or time calibration.","vectorBasis":{"status":"source-convention","evidence":"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.","independentPhysicalCalibration":false}},"domain":{"id":"collaborator-native","definition":{"id":"collaborator-native","cropX":[11,212],"cropZ":[11,105],"gtSdfCutoffFloat32":-0.10000000149011612,"rule":"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"}},"plane":{"frame":1049,"axis":"xz","yIndex":28,"yWorld":-0.10000004433093324},"roi":{"xmin":-1.449999853968496,"xmax":-0.44999987099837924,"zmin":0.39999990245065753,"zmax":1.3999998854207742},"probe":{"xIndex":174,"zIndex":69,"xyz":[-0.9499998624834376,-0.10000004433093324,0.8999998939357159]},"appearance":{"mode":"speedDelta","zoom":true,"viewport":{"x":164,"z":59,"width":21,"height":21},"ranges":{"speed":[0,2.872923899598361],"vectorError":[0,2.0896808971216365],"speedDelta":[-1.750984564815481,1.750984564815481],"direction":[0,180]}},"arrows":{"enabled":true,"stride":4,"gain":1.0036370012923275,"referenceSpeed":2.8695633942267817,"referenceGridLength":2.8800000000000003},"angleThreshold":{"tau":0.2,"unit":"m/s (source convention)","source":"user diagnostic input"},"surfaceCase":{"frame":1049,"hotspotXZ":{"x":-0.9499998624834376,"z":0.8999998939357159},"roiXZ":{"xmin":-1.449999853968496,"xmax":-0.44999987099837924,"zmin":0.39999990245065753,"zmax":1.3999998854207742},"surfaceCaseId":"raw-reference-96-e81b8955734e","caseNote":"案例B：沿X局部窗口内，GT与预测峰顶位置不同，峰高也不同；该观察不等于纯平移误差，也不构成自动峰配对。","surfaceIdentity":{"runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}}},"inputs":{"surface":"301fb43b2c3db75b05a1b5426bd735e8bd95252b3df0c4b95cb1d9324dc2b0ec","velocity":"d9b2d13b48884f23ae57dab94fb1b3d4a1bb7bf9d422ccf4f46be7e15dbb6de5"}}'),Ft={A:x0,B:v0},ua=`{
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
`;async function Jt(e,{signal:a}={}){const t=Rn(e);if(!t)throw Error("No verified velocity diagnostic resource for this frame");let s;{const i=await Kr(t.resource);if(!i)throw Object.assign(new Error(`请选择本机文件 / Select ${e}.ocfld.gz`),{code:"VELOCITY_FILE_REQUIRED"});s=await i.arrayBuffer()}a?.throwIfAborted();const c=ki(await zt(s,t.resource));return a?.throwIfAborted(),{frame:c,lattice:t.lattice,alignment:t}}const Xi=["collaborator-native","common-finite-exploration"];function Zi({frame:e,lattice:a,alignment:t,domain:s}){if(!Xi.includes(s))throw Error("Unknown velocity domain");if(s==="collaborator-native"&&!t?.dataAndDomainVerified)throw Error("Velocity domain has not been verified");const c=a?.dimensions,i=a?.origin,o=a?.axisSteps;if(!c||c.length!==3||c.some(g=>!Number.isInteger(g)||g<1)||!i||i.some(g=>!Number.isFinite(g))||!o||o.length!==3||o.some((g,p)=>g.length!==3||g.some((l,b)=>!Number.isFinite(l)||(p===b?l<=0:l!==0))))throw Error("Unsupported velocity lattice");const r=e?.groups?.velocity,f=e?.groups?.sdf?.ground_truth;if([f,r?.ground_truth_valid,r?.prediction_valid,...["ground_truth","prediction"].flatMap(g=>[..."xyz"].map(p=>r?.[g+"."+p]))].some(g=>!g||g.shape?.length!==3||g.shape.some((p,l)=>p!==c[l])||g.values?.length!==c[0]*c[1]*c[2]))throw Error("Velocity field shape mismatch");const m=t?.domainDefinition?.cropX??[11,212],u=t?.domainDefinition?.cropZ??[11,105];function v(g,p,l){const b=g+c[0]*(p+c[1]*l),w=s!=="collaborator-native"||g>=m[0]&&g<m[1]&&l>=u[0]&&l<u[1],B=w&&r.ground_truth_valid.values[b]>0&&(s!=="collaborator-native"||f.values[b]<Math.fround(-.1)),E=w&&r.prediction_valid.values[b]>0,y=B&&E,_=[..."xyz"].map(A=>r["ground_truth."+A].values[b]),x=[..."xyz"].map(A=>r["prediction."+A].values[b]),S=[..._,...x].every(Number.isFinite);return{candidate:w,gtEligible:B,predValid:E,paired:y,common:y&&S,nonfiniteExcluded:y&&!S,gt:_,pred:x}}return{d:c,o:i,a:o,sample:v,world:(g,p,l)=>i.map((b,w)=>b+o[0][w]*g+o[1][w]*p+o[2][w]*l)}}function Kt(e,{x:a,z:t}){return[Math.round((a-e.origin[0])/e.axisSteps[0][0]),Math.round((t-e.origin[2])/e.axisSteps[2][2])]}function E0(e){const{d:a,sample:t}=Zi(e),[s,c]=Kt(e.lattice,e.hotspotXZ);if(s<0||s>=a[0]||c<0||c>=a[2])return null;for(let i=a[1]-1;i>=0;i--)if(t(s,i,c).common)return i;return null}function Qt(e){if(e.plane!=="xz")throw Error("Velocity diagnosis supports XZ slices only");const{d:a,a:t,world:s,sample:c}=Zi(e),[i,o,r]=a,f=e.sliceIndex;if(!Number.isInteger(f)||f<0||f>=o)throw Error("Velocity Y index is outside the grid");const d=e.roiXZ;if(d&&(Object.values(d).length!==4||["xmin","xmax","zmin","zmax"].some(y=>!Number.isFinite(d[y]))||d.xmin>d.xmax||d.zmin>d.zmax))throw Error("Invalid velocity ROI bounds");const m={domain:e.domain,width:i,height:r,sliceIndex:f,stepX:t[0][0],stepZ:t[2][2],worldAt:y=>s(y%i,f,Math.floor(y/i)),roiView:null};for(const y of["speedGT","speedPred","vectorError","speedDelta"])m[y]=new Float64Array(i*r).fill(NaN);for(const y of["candidate","gtEligible","common","roi"])m[y+"Mask"]=new Uint8Array(i*r);m.vectorsGT=new Float64Array(3*i*r),m.vectorsPred=new Float64Array(3*i*r);const u=()=>({counts:{candidate:0,gtEligible:0,predValid:0,paired:0,common:0,nonfiniteExcluded:0,gtOnly:0,predOnly:0},sumE:0,sumDelta:0,maximum:null}),v=u(),g=u();function p(y,_,x){for(const S of["candidate","gtEligible","predValid","paired","common","nonfiniteExcluded"])y.counts[S]+=Number(_[S]);if(y.counts.gtOnly+=Number(_.gtEligible&&!_.predValid),y.counts.predOnly+=Number(_.predValid&&!_.gtEligible),_.common){const S=m.vectorError[x];y.sumE+=S,y.sumDelta+=m.speedDelta[x],(!y.maximum||S>y.maximum.value)&&(y.maximum={value:S,index:x,world:m.worldAt(x)})}}let l=i,b=-1,w=r,B=-1;for(let y=0;y<r;y++)for(let _=0;_<i;_++){const x=_+i*y,S=c(_,f,y),[C,,A]=s(_,f,y);for(const h of["candidate","gtEligible","common"])m[h+"Mask"][x]=Number(S[h]);S.common&&(m.vectorsGT.set(S.gt,3*x),m.vectorsPred.set(S.pred,3*x),m.speedGT[x]=Math.hypot(...S.gt),m.speedPred[x]=Math.hypot(...S.pred),m.vectorError[x]=Math.hypot(...S.pred.map((h,R)=>h-S.gt[R])),m.speedDelta[x]=m.speedPred[x]-m.speedGT[x]),p(v,S,x),(!d||C>=d.xmin&&C<=d.xmax&&A>=d.zmin&&A<=d.zmax)&&(p(g,S,x),m.roiMask[x]=1,l=Math.min(l,_),b=Math.max(b,_),w=Math.min(w,y),B=Math.max(B,y))}b>=0&&(m.roiView={x:l,z:w,width:b-l+1,height:B-w+1});function E(y){const _=y.counts;return{counts:_,coverageCandidate:_.candidate?_.common/_.candidate:null,coverageGT:_.gtEligible?_.common/_.gtEligible:null,meanE:_.common?y.sumE/_.common:null,meanSpeedDelta:_.common?y.sumDelta/_.common:null,maximum:y.maximum}}return m.whole=E(v),m.local=E(g),m}function es(e,a){if(a!==null&&(!Number.isFinite(a)||a<0))throw Error("Invalid direction threshold");const{commonMask:t,roiMask:s,vectorsGT:c,vectorsPred:i,speedGT:o,speedPred:r}=e,f=new Float64Array(t.length).fill(NaN),d=new Uint8Array(t.length);let m=0,u=0,v=0,g=0;if(a!==null)for(let l=0;l<t.length;l++){if(!t[l]||o[l]<=a||r[l]<=a)continue;let b=0;for(let B=0;B<3;B++)b+=c[3*l+B]/o[l]*(i[3*l+B]/r[l]);const w=Math.acos(Math.max(-1,Math.min(1,b)))*180/Math.PI;f[l]=w,d[l]=1,v++,m+=w,s[l]&&(g++,u+=w)}const p=(l,b,w)=>({count:l,excludedLowSpeedCount:a===null?null:w-l,meanDegrees:l?b/l:null});return{degrees:f,mask:d,whole:p(v,m,e.whole.counts.common),local:p(g,u,e.local.counts.common)}}function ns(e,a,t,s,c=4){const{width:i,commonMask:o,vectorsGT:r,vectorsPred:f,stepX:d,stepZ:m}=e;let u=s??0;for(let b=0;s===void 0&&b<o.length;b++)o[b]&&(u=Math.max(u,Math.hypot(r[3*b],r[3*b+2]),Math.hypot(f[3*b],f[3*b+2])));const v=u>0?.72*c/u:0,g=Math.min(d,m),p=b=>[b[0]*v*g/d,b[2]*v*g/m],l=[];for(let b=Math.ceil(a.z/t)*t;b<a.z+a.height;b+=t)for(let w=Math.ceil(a.x/t)*t;w<a.x+a.width;w+=t){const B=w+i*b;if(!o[B])continue;const E=Array.from(r.subarray(3*B,3*B+3)),y=Array.from(f.subarray(3*B,3*B+3));l.push({index:B,x:w,z:b,gt:E,pred:y,gtOffset:p(E),predOffset:p(y)})}return{points:l,stride:t,gain:v,maxProjection:u,referenceSpeed:u,referenceGridLength:p([u,0,0])[0]}}const as="oceanscope.velocity-diagnosis.v1",Gi="native-xz-paired-v1",_0=["vectorError","speedDelta","direction"],si=["xmin","xmax","zmin","zmax"],zn=(e,a)=>a&&typeof a=="object"?e&&typeof e=="object"&&(!Array.isArray(a)||Array.isArray(e)&&e.length===a.length)&&Object.keys(a).every(t=>zn(e[t],a[t])):e===a,na=(e,a)=>Number.isInteger(e)&&e>=0&&e<a;function ii(e){if(!e||si.some(a=>!Number.isFinite(e[a]))||e.xmin>e.xmax||e.zmin>e.zmax)throw Error("Velocity report ROI is invalid");return Object.fromEntries(si.map(a=>[a,e[a]]))}function ci(e,a,t,s=new Date().toISOString()){const{display:c,direction:i,probe:o}=e,[r]=a.lattice.dimensions,{arrows:f}=c;return structuredClone({schema:as,createdAt:s,source:{caseId:a.caseId,codeRevision:t,calculation:Gi,protocolSha256:a.protocolSha256,originals:a.source,resource:a.resource},alignment:{lattice:a.lattice,unitClaim:a.unitClaim,unitEvidence:a.unitEvidence,vectorBasis:a.vectorBasis},domain:{id:e.domain,definition:e.domainDefinition},plane:{frame:a.frame,axis:"xz",yIndex:e.yIndex,yWorld:e.yWorld},roi:e.roiXZ,probe:{xIndex:o.index%r,zIndex:Math.floor(o.index/r),xyz:o.xyz},appearance:{mode:c.mode,zoom:c.zoomed,viewport:c.view,ranges:c.ranges},arrows:{scaleCells:c.scaleCells??4,enabled:f!==null,stride:f?.stride??null,gain:f?.gain??null,referenceSpeed:f?.referenceSpeed??null,referenceGridLength:f?.referenceGridLength??null},angleThreshold:{tau:i.tau,unit:i.unit,source:i.thresholdSource},summary:{whole:e.whole,roi:e.local,direction:{whole:i.whole,roi:i.local}},samples:{scope:"Probe and displayed arrow anchors. CSV contains the full native slice.",probe:o,arrowNativeIndices:f?.points.map(d=>d.index)??[]},surfaceCase:e.surfaceRequest,...e.streamlines&&{streamlines:e.streamlines}})}function Hi(e,{alignment:a,caseId:t,runId:s}){if(new TextEncoder().encode(e).length>1024*1024)throw Error("Velocity report too large");let c;try{c=JSON.parse(e)}catch{throw Error("Invalid analysis JSON")}if(c?.schema!==as)throw Error("Unsupported velocity report");const{source:i,plane:o,appearance:r,arrows:f,probe:d,surfaceCase:m,angleThreshold:u}=c,v=a??Rn(o?.frame);if(!v||t!==v.caseId||!zn(i,{caseId:t,calculation:Gi,protocolSha256:v.protocolSha256,originals:v.source,resource:v.resource})||!zn(c.alignment,{lattice:v.lattice,unitClaim:v.unitClaim,unitEvidence:v.unitEvidence,vectorBasis:v.vectorBasis})||o?.frame!==v.frame)throw Error("Velocity report source identity mismatch");const[g,p,l]=v.lattice.dimensions;if(o.axis!=="xz"||!na(o.yIndex,p)||!na(d?.xIndex,g)||!na(d?.zIndex,l))throw Error("Velocity report slice or probe is outside the native lattice");if(!Xi.includes(c.domain?.id)||!_0.includes(r?.mode)||typeof r.zoom!="boolean"||typeof f?.enabled!="boolean")throw Error("Velocity report display settings are invalid");const b=r.zoom?4:16,w=Math.min(b,r.viewport?.width??g,r.viewport?.height??l),B=f.scaleCells??w;if(!Number.isInteger(B)||B<1||B>16)throw Error("Velocity report arrow reference span is invalid");const E=u?.tau;if(E!==null&&(!Number.isFinite(E)||E<0))throw Error("Velocity report threshold is invalid");const y=ii(c.roi),_=ii(m?.roiXZ),x=m?.hotspotXZ,S={runId:s,protocolSha256:v.protocolSha256,manifestA:v.source.gt.manifestSha256,manifestB:v.source.prediction.manifestSha256};if(!s||m?.frame!==v.frame||m?.surfaceCaseId!==s||!zn(m?.surfaceIdentity,S)||!Number.isFinite(x?.x)||!Number.isFinite(x?.z))throw Error("Velocity report surface reference identity mismatch");const[C,A]=Kt(v.lattice,x),h=c.streamlines?.stepFraction;if(c.streamlines!==void 0&&(v.frame!==1049||c.domain.id!=="collaborator-native"||![.125,.25].includes(h)))throw Error("Velocity report streamline step or frame is invalid");if(!na(C,g)||!na(A,l)||typeof m.caseNote!="string"||m.caseNote.length>1e3)throw Error("Velocity report surface hotspot or note is invalid");return{request:{frame:v.frame,hotspotXZ:{x:x.x,z:x.z},roiXZ:_,surfaceCaseId:s,caseNote:m.caseNote,surfaceIdentity:S},view:{scaleCells:B,domain:c.domain.id,y:o.yIndex,roi:y,probe:[d.xIndex,d.zIndex],mode:r.mode,zoom:r.zoom,showArrows:f.enabled,tau:E,...h&&{streamlineStepFraction:h}}}}async function qi(e,a,t,s=Jt){t.throwIfAborted();const c=Hi(e,a),i=a.alignment??Rn(c.request.frame),o=await s(c.request.frame,{signal:t});if(t.throwIfAborted(),!zn(o.alignment,i)||!zn(o.lattice,i.lattice))throw Error("Velocity report loaded identity mismatch");return{...c,loaded:o}}function w0(e,a,t){const{plane:s,domain:c}=e,i=new Set(e.samples.arrowNativeIndices),o=["frame,y_index,native_index,x_index,z_index,x,y,z,domain,in_roi,candidate,gt_eligible,common,probe,arrow_anchor,gt_vx,gt_vy,gt_vz,pred_vx,pred_vy,pred_vz,gt_speed,pred_speed,vector_error,speed_delta,direction_tau,angle_eligible,angle_degrees"];for(let r=0;r<a.commonMask.length;r++){const f=a.commonMask[r],d=t.mask[r],m=f?[...a.vectorsGT.subarray(3*r,3*r+3),...a.vectorsPred.subarray(3*r,3*r+3),a.speedGT[r],a.speedPred[r],a.vectorError[r],a.speedDelta[r]]:Array(10).fill("");o.push([s.frame,s.yIndex,r,r%a.width,Math.floor(r/a.width),...a.worldAt(r),c.id,a.roiMask[r],a.candidateMask[r],a.gtEligibleMask[r],f,+(r===e.samples.probe.index),Number(i.has(r)),...m,e.angleThreshold.tau,d,d?t.degrees[r]:""].join(","))}return o.join(`
`)+`
`}function Li(e,a,t=.25){const{width:s,height:c,stepX:i,stepZ:o,commonMask:r}=e,f=Math.min(i,o),d=f*t,m=f,u=24*f,v=Math.round(u/d),g=1e-8,p=_=>{const[x,,S]=e.worldAt(0);return[x+_[0]*i,S+_[1]*o]};function l(_,x){const[S,C]=_;if(S<0||C<0||S>=s-1||C>=c-1)return{stop:"grid"};const A=Math.floor(S)+s*Math.floor(C),h=S%1,R=C%1,M=[A,A+1,A+s,A+s+1],N=[(1-h)*(1-R),h*(1-R),(1-h)*R,h*R];if(M.some(q=>!r[q]))return{stop:"mask"};const F=q=>M.reduce((Y,D,$)=>Y+N[$]*x[D*3+q],0),V=F(0),H=F(2),J=Math.hypot(V,H);return J<=g?{stop:"slow"}:{dir:[V/J/i,H/J/o]}}const b=(_,x,S)=>[_[0]+S*x[0],_[1]+S*x[1]];function w(_){const x=[];let S=a;for(let C=0;C<=v;C++){const A=l(S,_);if(A.stop)return{points:x,stop:A.stop};if(x.push(p(S)),C===v)return{points:x,stop:"limit"};const h=l(b(S,A.dir,d/2),_);if(h.stop)return{points:x,stop:h.stop};const R=b(S,h.dir,d),M=[0,1];for(let N=0;N<2;N++)for(let F=Math.floor(Math.min(S[N],R[N]))+1;F<Math.max(S[N],R[N]);F++)M.push((F-S[N])/(R[N]-S[N]));M.sort((N,F)=>N-F);for(let N=1;N<M.length;N++){const F=l(b(S,h.dir,d*(M[N]+M[N-1])/2),_);if(F.stop)return{points:x,stop:F.stop}}S=R}}const B=w(e.vectorsGT),E=w(e.vectorsPred);let y=null;for(let _=1;_<Math.min(B.points.length,E.points.length);_++){const x=B.points[_],S=E.points[_],C=Math.hypot(x[0]-S[0],x[1]-S[1]);if(C>=m){y={i:_,arc:_*d,gap:C,gt:x,pred:S};break}}return{seed:p(a),step:d,separation:m,maxArc:u,floor:g,gt:B,pred:E,split:y}}const S0="oceanscope.paired-case.v1",j0={plane:"xz",direction:"forward",method:"normalized-midpoint-rk2",interpolation:"bilinear-four-common",separationCells:1,maxArcCells:24,speedFloor:1e-8},aa=e=>JSON.stringify(e,(a,t)=>t&&typeof t=="object"&&!Array.isArray(t)?Object.fromEntries(Object.keys(t).sort().map(s=>[s,t[s]])):t);function Ya(e,a=.25){if(!Object.hasOwn(Ft,e)||![.125,.25].includes(a))throw Error("Unknown 1049 case or integration step");const t=Ft[e],c={...t.surface,source:{...t.surface.source,declarationsSha256:"b4b0602325141df1c3f185e1578e94eca1b627b3cedd1c96f5401291e574843c"}};return{schema:S0,id:e,...t,surface:c,integration:{...j0,stepFraction:a}}}async function C0(e,a,t,s){const c=Ya(e.id,e.integration?.stepFraction);for(const A of Object.keys(c))if(aa(e[A])!==aa(c[A]))throw Error("1049 case settings or source identity mismatch: "+A);const i=await Xa(ua,Za.indexSha256,a),o=zi(JSON.stringify(c.surface),a,i,{catalog:t}),[r,f]=await Promise.all([ma(o.descriptor,{...Xn(a),frameId:1049},s),qi(JSON.stringify(c.velocity),{caseId:t[0].id,runId:a.runId},s)]);s.throwIfAborted();const{hotspot:d}=o.diagnosis,{request:m,view:u,loaded:v}=f;if(o.view.frame!==m.frame||d.x!==m.hotspotXZ.x||d.z!==m.hotspotXZ.z||!r.common[d.index]||aa(o.roi)!==aa(m.roiXZ)||d.ix!==u.probe[0]||d.iz!==u.probe[1])throw Error("Surface and velocity selections do not coincide");const g=Qt({...v,plane:"xz",sliceIndex:u.y,domain:u.domain,roiXZ:u.roi}),p=u.zoom?g.roiView:{x:0,z:0,width:g.width,height:g.height},l=es(g,u.tau),b=u.showArrows?ns(g,p,u.zoom?4:16,void 0,u.scaleCells):null,w=Hn(r,o.diagnosis),B=Zn(r,o.roi),E=[r.heightA[d.index],r.heightB[d.index]],y=g.worldAt(0)[1],_=e.crest;_!==void 0&&Gn({...o,profiles:w},_);const x=new TextEncoder().encode(aa(Ft[c.id])),S=await crypto.subtle.digest("SHA-256",x),C=Array.from(new Uint8Array(S),A=>A.toString(16).padStart(2,"0")).join("");return{settings:c,presetSha:C,mark:_,surface:{...o,profiles:w},spatial:r,slice:g,angles:l,arrows:b,height:B,surfaceY:E,velocityY:y,view:u}}function B0(e,a){const t=Li(e.slice,e.view.probe,a),c={...Ya(e.settings.id,a),codeRevision:"a999a257d995f8e084d5e8f23469b9153767df64",evidence:{surfaceY:e.surfaceY,velocityY:e.velocityY,heightROI:e.height,velocityROI:e.slice.local,profiles:e.surface.profiles,streamlines:t}};return e.mark&&(c.crest=e.mark,c.evidence.crests=Gn(e.surface,e.mark)),{record:c,pair:t}}function A0(e,a){const t=[["kind","role","index","x","y","z","arc_or_distance","GT","prediction","difference","vx","vy","vz","stop"]],s=e.surface.diagnosis.hotspot;t.push(["surface-hotspot","",s.index,s.x,"",s.z,"",...e.surfaceY,e.surfaceY[1]-e.surfaceY[0]]);for(const[i,o]of Object.entries(e.surface.profiles))o.points.forEach((r,f)=>t.push(["profile",i,f,r.x,"",r.z,r.distance,r.a,r.b,r.difference]));if(e.mark){const{gt:i,pred:o}=Gn(e.surface,e.mark);for(const[r,f,d]of[["gt",i,e.mark.a],["prediction",o,e.mark.b]])t.push(["crest-"+e.mark.profile,r,d,f.x,"",f.z,f.distance,f.a,f.b,f.difference])}const c=e.slice;for(let i=0;i<c.commonMask.length;i++)if(!(!c.roiMask[i]||!c.commonMask[i]))for(const[o,r]of[["gt",c.vectorsGT],["prediction",c.vectorsPred]])t.push(["velocity-roi",o,i,...c.worldAt(i),"",c.speedGT[i],c.speedPred[i],c.vectorError[i],...r.subarray(i*3,i*3+3)]);for(const[i,o]of[["gt",a.gt],["prediction",a.pred]])o.points.forEach(([r,f],d)=>t.push(["streamline",i,d,r,e.velocityY,f,d*a.step,"","","","","","",d===o.points.length-1?o.stop:""]));return t.map(i=>Array.from({length:14},(o,r)=>i[r]??"").join(",")).join(`
`)+`
`}const xe=(e,a=6)=>e==null?"N/A":Number(e).toPrecision(a);function pe(e,a,t,s,c=1800,i=23,o="#203747"){for(e.fillStyle=o,e.font=`${i}px sans-serif`;e.measureText(String(a)).width>c&&i>12;)e.font=`${--i}px sans-serif`;e.fillText(String(a),t,s)}function _t(e,a,t,s,c,i=20){e.font=`${i}px sans-serif`,e.fillStyle="#3c5365";let o="";for(const r of String(a).split(" ")){const f=o?o+" "+r:r;e.measureText(f).width>c&&o?(e.fillText(o,t,s),s+=i+8,o=r):o=f}return e.fillText(o,t,s),s+i+8}function Yi(e,a,t,s,c,i,o,r,f,d){const[m,u]=a.descriptor.shape,v=document.createElement("canvas");v.width=u,v.height=m;const g=v.getContext("2d"),p=g.createImageData(u,m),l=s==="difference",b=l&&t.appearance?.absoluteError,w=l?a.common:a[s==="heightA"?"wetA":"wetB"],B=l?[b?0:-d,d]:f;for(let C=0;C<m;C++)for(let A=0;A<u;A++){const h=C*u+A,R=((m-1-C)*u+A)*4;if(!w[h]){p.data.set([225,230,235,255],R);continue}const M=a.heightB[h]-a.heightA[h],N=l?b?Math.abs(M):M:a[s][h],F=Math.max(0,Math.min(1,(N-B[0])/(B[1]-B[0]))),V=l&&!b?F<.5?[80+350*F,130+230*F,220+70*F]:[255,245-350*(F-.5),255-440*(F-.5)]:[35+195*F,75+155*F,155+70*F];p.data.set([...V,255],R)}g.putImageData(p,0,0),e.imageSmoothingEnabled=!1,e.drawImage(v,c,i,o,r);const{originXYZ:[E,,y],spacing:_}=a.descriptor,x=(C,A)=>[c+(C-E+_/2)/(u*_)*o,i+r-(A-y+_/2)/(m*_)*r];e.strokeStyle="#182b3c",e.lineWidth=2;for(const C of t.profiles?Object.values(t.profiles):[t.profile])C?.points.length&&(e.beginPath(),C.points.forEach((A,h)=>e[h?"lineTo":"moveTo"](...x(A.x,A.z))),e.stroke());if(t.roi){const C=x(t.roi.xmin,t.roi.zmax),A=x(t.roi.xmax,t.roi.zmin);e.save(),e.beginPath(),e.rect(c,i,o,r),e.clip(),e.strokeRect(C[0],C[1],A[0]-C[0],A[1]-C[1]),e.restore()}if(t.probe){const[C,A]=x(t.probe.x,t.probe.z);e.beginPath(),e.moveTo(C-5,A),e.lineTo(C+5,A),e.moveTo(C,A-5),e.lineTo(C,A+5),e.stroke()}const S=e.createLinearGradient(c,0,c+o,0);l&&!b?(S.addColorStop(0,"rgb(80,130,220)"),S.addColorStop(.5,"rgb(255,245,255)"),S.addColorStop(1,"rgb(255,70,35)")):(S.addColorStop(0,"rgb(35,75,155)"),S.addColorStop(1,"rgb(230,230,225)")),e.fillStyle=S,e.fillRect(c,i+r+8,o,9),pe(e,`${xe(B[0])} ... ${xe(B[1])} m`,c,i+r+38,o,21),pe(e,`X ${xe(E,4)} ... ${xe(E+(u-1)*_,4)}; Z ${xe(y,4)} ... ${xe(y+(m-1)*_,4)} m`,c,i+r+62,o,19)}function Wa(e,a,t,s,c,i,o=null,r=null,f="en"){const d=(x,S)=>f==="zh"?x:S,m=a.profile?.points??[],u=m.flatMap(x=>[x.a,x.b]).filter(Number.isFinite);if(pe(e,`${d("剖面：","Section: ")}${r??a.view.plane.toUpperCase()} / ${a.profile?.sampling==="native_columns"?d("原生列","native columns"):a.profile?.sampling==="bilinear_common_four"?d("双线性插值 · 四邻点共同有效","bilinear · all four neighbours valid"):d("无高度剖面","no height profile")}`,t,s,c,24),!u.length){pe(e,d("此截面无有效高度剖面。","No valid height profile for this section."),t,s+50,c);return}const v=o?.[0]??Math.min(...u),g=o?.[1]??Math.max(...u),p=Math.max(g-v,1e-9),l=m[0].distance,b=Math.max(m.at(-1).distance-l,1e-9),w=Math.max(...m.map(x=>Math.abs(x.difference??0)),1e-9),B=t+65,E=s+45,y=c-95,_=i-120;if(a.diagnosis){const x=a.roi?et(a.profile,a.roi):null;if(x){const C=Math.max(l,x[0]),A=Math.min(l+b,x[1]);A>=C&&(e.fillStyle="#deefee",e.fillRect(B+(C-l)/b*y,E,(A-C)/b*y,_+65))}e.strokeStyle="#888",e.beginPath();const S=B-l/b*y;e.moveTo(S,E),e.lineTo(S,E+_+65),e.stroke(),pe(e,d("热点 t=0","hotspot t=0"),S+3,E,100,16)}e.strokeStyle="#798699",e.lineWidth=1,e.beginPath(),e.moveTo(B,E+_+35),e.lineTo(B+y,E+_+35),e.stroke(),pe(e,"0",t+35,E+_+40,25,18);for(const[x,S]of[["a","#2583c5"],["b","#e08b22"],["difference","#9b4778"]]){e.strokeStyle=S,e.lineWidth=2,e.beginPath();let C=!1;for(const A of m){if(A[x]==null){C=!1;continue}const h=B+(A.distance-l)/b*y,R=x==="difference"?E+_+35-A[x]/w*25:E+_*.7-(A[x]-v)/p*_*.7;e[C?"lineTo":"moveTo"](h,R),C=!0}e.stroke()}if(a.crest)for(const[x,S]of[["a","#176693"],["b","#a75400"]]){const C=m[a.crest[x]],A=B+(C.distance-l)/b*y,h=E+_*.7-(C[x]-v)/p*_*.7;e.strokeStyle=S,e.lineWidth=2,e.beginPath(),e.arc(A,h,5,0,2*Math.PI),e.stroke()}pe(e,`${xe(g,4)} m`,t,E+12,65,16),pe(e,`${xe(v,4)} m`,t,E+_*.7,65,16),pe(e,`B-A ±${xe(w,4)} m`,B,E+_+70,y,18),pe(e,`${d("GT 蓝 / B 橙 / B-A 紫；距离 ","GT blue / B orange / B-A purple; distance ")}${xe(l,5)} ... ${xe(l+b,5)} m`,B,s+i+35,y,18)}function k0(e,a,t=null,s="en"){const c=(l,b)=>s==="zh"?l:b,i=document.createElement("canvas");i.width=1920,i.height=e.diagnosis?2650:2220;const o=i.getContext("2d");if(!o)throw Error("Report canvas unavailable");o.fillStyle="#f6f9fb",o.fillRect(0,0,i.width,i.height),o.fillStyle="#123247",o.fillRect(0,0,1920,170),pe(o,`${c("OceanScope / 分析报告 / 帧 ","OceanScope / analysis report / frame ")}${e.view.frame}`,60,68,1800,43,"#fff"),pe(o,`${e.source.runId} · ${e.createdAt}`,60,115,1800,22,"#d0e6ee"),pe(o,`${c("高度：全部96帧 | 速度：","Height: all96 | Velocity: ")}${e.view.selection.subset==="all"?c("全部96帧","all96"):c("固定六帧","fixed six")} / ${e.view.selection.grid==="fine"?c("原生网格","native grid"):c("XZ 2×2均值","XZ 2×2 mean")}${c(" | ROI：当前原生列"," | ROI: current native columns")}`,60,150,1800,22,"#d0e6ee");let r=1/0,f=-1/0,d=1e-9;for(let l=0;l<a.heightA.length;l++){for(const b of["A","B"])a["wet"+b][l]&&(r=Math.min(r,a["height"+b][l]),f=Math.max(f,a["height"+b][l]));a.common[l]&&(d=Math.max(d,Math.abs(a.heightB[l]-a.heightA[l])))}const m=Number.isFinite(r)?[r,f>r?f:r+1]:[0,1];[["heightA",c("A / Ground Truth","A / Ground Truth")],["heightB",c("B / 预测","B / Prediction")],["difference",e.appearance?.absoluteError?c("|B - A| / 绝对高度差","|B - A| / absolute height"):c("B - A / 有符号高度差","B - A / signed height")]].forEach(([l,b],w)=>{pe(o,b,60+w*620,215,580,28),Yi(o,a,e,l,60+w*620,240,560,320,m,d)});const u=l=>l==null?null:l*100,v=(l,b)=>`${b}: ${l?.common??0}${c(" 共同列 | MAE "," common columns | MAE ")}${xe(u(l?.mae_m))}${c(" cm | Bias "," cm | bias ")}${xe(u(l?.bias_m))} cm | RMSE ${xe(u(l?.rmse_m))} cm`;if(pe(o,v(e.global,c("当前帧高度","Current frame height")),60,645,1800,25),pe(o,e.local?v(e.local,c("选区高度","Selected ROI height")):c("ROI：未选择","ROI: none selected"),60,682,1800,25),pe(o,e.roi?`ROI X [${e.roi.xmin}, ${e.roi.xmax}] / Z [${e.roi.zmin}, ${e.roi.zmax}] m`:c("灰色格点为缺测，不计为零。","Gray cells are unavailable, never zero."),60,719,1800,21),e.profiles){const l=Object.values(e.profiles).flatMap(w=>w.points.flatMap(B=>[B.a,B.b])).filter(Number.isFinite),b=l.length?[Math.min(...l),Math.max(...l)]:[0,1];Wa(o,{...e,profile:e.profiles.first,crest:e.crestMeasurement&&e.diagnosis.crest.profile==="first"?e.diagnosis.crest:null},60,770,850,300,b,c("热点剖面1","hotspot 1"),s),Wa(o,{...e,profile:e.profiles.second,crest:e.crestMeasurement&&e.diagnosis.crest.profile==="second"?e.diagnosis.crest:null},990,770,850,300,b,c("热点剖面2","hotspot 2"),s)}else Wa(o,e,60,770,990,300,null,null,s);if(t&&!e.diagnosis){const l=Math.min(770/t.width,320/t.height);o.drawImage(t,1110+(770-t.width*l)/2,780,t.width*l,t.height*l),pe(o,c("当前帧三维预览；相机保存在 JSON 中","Current-frame 3D preview; camera retained in JSON"),1110,1130,770,20)}else e.diagnosis||_t(o,`${c("当前帧无三维截图：","No current-frame 3D capture: ")}${e.view.geometryStatus?.reason??c("不可用","unavailable")}${c("。保留原生空间数据和帧身份，不替换为邻帧。",". Native spatial data and frame identity are retained; no neighboring frame substituted.")}`,1120,850,700,25);if(e.diagnosis?.crest){const l=e.diagnosis.crest,b=e.crestMeasurement,w=l.status==="paired"?c("人工配对","Manually paired"):c("峰配对不确定","Correspondence uncertain");pe(o,(l.profile==="first"?c("剖面 1","Profile 1"):c("剖面 2","Profile 2"))+" · "+w+(b?"   Δh "+xe(b.deltaHeight,5)+"   Δs "+xe(b.deltaDistance,5)+"   "+c("场景单位，预测减 GT","scene units, prediction minus GT"):""),60,1115,1800,24)}e.diagnosis?.caseNote&&pe(o,c("案例观察：","Case observation: ")+e.diagnosis.caseNote,60,1155,1800,23),pe(o,c("序列指标 / 明示有效域；完整精度与定义见 CSV + JSON","Sequence metrics / labelled scopes; full precision and definitions in CSV + JSON"),60,1200,1800,29);const g=Math.ceil(e.metrics.length/2);e.metrics.forEach((l,b)=>{const w=b>=g?1:0,B=b%g,E=60+w*930,y=1245+B*35;pe(o,s==="zh"?l.labelZh??l.label:l.label,E,y,620,20),pe(o,`${xe(l.value,8)} ${l.unit}`,E+630,y,260,20)});let p=1840;p=_t(o,s==="zh"&&e.scope==="Native highest-crossing height columns; ROI/profile do not replace all96 global metrics. Units are source convention, not independently calibrated."?"原生最高过零高度列；ROI / 剖面不替代全部96帧的全局指标。单位沿用来源约定，未独立标定。":e.scope,60,p,1800,22),p=_t(o,c("实验来源：模型、相机、划分与单位均为来源声明。检查点哈希未知。已核对原始文件清单身份；未独立审计训练历史或物理标定。","Experiment provenance: model / cameras / split / units are source declarations. Checkpoint hash is unknown. Original-file manifest identities were verified; training history and physical calibration were not independently audited."),60,p+8,1800,21);for(const[l,b]of Object.entries(e.source))pe(o,`${l}: ${b}`,60,p+28,1800,18),p+=28;if(e.evidence){let l=2190;pe(o,`${c("热点 (","Hotspot (")}${e.diagnosis.hotspot.ix},${e.diagnosis.hotspot.iz}) X=${xe(e.probe.x)} Z=${xe(e.probe.z)}${c(" | 方向 "," | direction ")}${e.diagnosis.directionDeg}${c(" 度"," deg")}`,60,l,1800,25),l+=42;for(const[b,w]of[[c("帧","Frame"),e.evidence.frame],["ROI",e.evidence.roi]])w&&(pe(o,`${b}${c(": 共同 ",": common ")}${w.common}${c(" / 候选 "," / candidate ")}${w.candidates} / GT ${w.validGT}${c(" / 预测 "," / prediction ")}${w.validPrediction}${c("; 共同/候选 ","; common/candidate ")}${xe(w.coverageCandidate)}${c("; 共同/GT ","; common/GT ")}${xe(w.coverageGT)}`,60,l,1800,21),l+=30,pe(o,`${b}${c(" 最大 |B-A|="," max |B-A|=")}${xe(w.maximum?.absolute)}${c(" m 位置 "," m at ")}${w.maximum?`X=${xe(w.maximum.x)}, Z=${xe(w.maximum.z)}${c(", 索引=",", index=")}${w.maximum.index}${c(", 并列=",", ties=")}${w.maximum.ties}`:"N/A"}`,60,l,1800,21),l+=32);for(const b of["first","second"])for(const w of["full","roi"]){const B=e.evidence[b][w];B&&(pe(o,`${b==="first"?c("剖面1","Profile 1"):c("剖面2","Profile 2")} / ${w==="full"?c("全线","full line"):c("选区内","within ROI")}: n=${B.samples}${c("; 样本平均 MAE=","; sample mean MAE=")}${xe(B.mae)}${c(" m; Bias="," m; bias=")}${xe(B.bias)}${c(" m; 最大="," m; max=")}${xe(B.maximum?.absolute)}${c(" m（非面积统计）"," m (not area statistics)")}`,60,l,1800,20),l+=27)}}return pe(o,c("使用 JSON 在 OceanScope 恢复此快照。必须匹配本地资源；测量值会重新计算。","Restore this snapshot in OceanScope with its JSON. Local resources must match; measurements are recomputed."),60,i.height-25,1800,20),i}const M0={vectorError:{title:"速度向量误差 E",label:"Velocity vector error map",palette:"absolute-error"},speedDelta:{title:"流速大小差 Δs",label:"Velocity speed delta map",palette:"error"},direction:{title:"三维方向夹角",label:"Velocity direction angle map",palette:"absolute-error"}};function at(e,a="zh"){const t=[{key:"speedGT",title:"GT 流速",label:"Velocity GT speed map",palette:"ground-truth",role:"gt"},{key:"speedPred",title:"预测流速",label:"Velocity prediction speed map",palette:"ground-truth",role:"pred"},{key:e,...M0[e]}],s={speedGT:"GT speed",speedPred:"Prediction speed",vectorError:"Velocity vector error E",speedDelta:"Speed difference Δs",direction:"3D direction angle"};return a==="zh"?t:t.map(c=>({...c,title:s[c.key]}))}function Ui(e,a,t,s){const c=[e+t,a+s];return[[e,a],c,[c[0]-.32*t+.2*s,c[1]-.32*s-.2*t],c,[c[0]-.32*t-.2*s,c[1]-.32*s+.2*t]]}const ue=(e,a=6)=>Number.isFinite(e)?e.toPrecision(a):"N/A",oi=e=>e==null?"N/A":(100*e).toFixed(2)+"%";function we(e,a,t,s,c=1480,i=21,o="#203747"){for(e.fillStyle=o,e.font=`${i}px sans-serif`;e.measureText(String(a)).width>c&&i>14;)e.font=`${--i}px sans-serif`;e.fillText(a,t,s,c)}function ri(e,a,t,s,c,i,o){e.beginPath(),s===0&&c===0?e.arc(a,t,3,0,2*Math.PI):Ui(0,0,s,c).forEach(([r,f],d)=>e[d===0||d===2?"moveTo":"lineTo"](a+r*i,t+f*o)),e.lineCap="round",e.lineJoin="round",e.lineWidth=4,e.strokeStyle="#fff",e.stroke(),e.lineWidth=1.5,e.strokeStyle="#10273c",e.stroke()}function ts(e,a,t,s,c,i,o,r="zh"){const f=(V,H)=>r==="zh"?V:H,{key:d,title:m,palette:u,role:v}=a,{viewport:g,zoom:p,ranges:l}=t.appearance,b=l[v?"speed":d],w=Math.min(470/(g.width*s.stepX),340/(g.height*s.stepZ)),B=w*s.stepX,E=w*s.stepZ,y=g.width*B,_=g.height*E,x=202;we(e,m,o,186,470,25);const S=document.createElement("canvas");S.width=g.width,S.height=g.height,Pi(S.getContext("2d"),{...s,angleSupport:d==="direction"?s.commonMask:null,values:d==="direction"?c.degrees:s[d]},d==="direction"?c.mask:s.commonMask,b,u,g),e.imageSmoothingEnabled=!1,e.drawImage(S,o,x,y,_);const C=V=>o+(V-g.x+.5)*B,A=V=>x+(g.z+g.height-V-.5)*E;e.save(),e.beginPath(),e.rect(o,x,y,_),e.clip();const h=s.roiView;if(!p&&h&&(e.strokeStyle="#9c6900",e.lineWidth=2,e.strokeRect(C(h.x)-B/2,A(h.z+h.height-1)-E/2,h.width*B,h.height*E)),v)for(const V of i){const[H,J]=V[v==="gt"?"gtOffset":"predOffset"];ri(e,C(V.x),A(V.z),H,-J,B,E)}const R=C(t.probe.xIndex),M=A(t.probe.zIndex);R>=o&&R<o+y&&M>=x&&M<x+_&&(e.setLineDash([6,5]),e.beginPath(),e.moveTo(R,x),e.lineTo(R,x+_),e.moveTo(o,M),e.lineTo(o+y,M),e.strokeStyle="#fff",e.lineWidth=3,e.stroke(),e.strokeStyle="#111",e.lineWidth=1,e.stroke()),e.restore();const N=e.createLinearGradient(o,0,o+470,0);for(const V of[0,.5,1])N.addColorStop(V,`rgb(${Ri(b[0]+V*(b[1]-b[0]),b,u).join(",")})`);e.fillStyle=N,e.fillRect(o,562,470,11);const F=d==="direction"?"°":" m/s";we(e,`${ue(b[0],4)}${d==="speedDelta"?" / 0":""} / ${ue(b[1],4)}${F}${v?f(" · 共用色标"," · Shared scale"):""}`,o,599,470),we(e,d==="direction"?f("X → · Z ↑ · 灰纹：非共同域；浅黄：有效但无夹角","X → · Z ↑ · Grey: outside support; yellow: valid speed, no angle"):f("X → · Z ↑ · 棋盘为不在共同有效域","X → · Z ↑ · Checkerboard: outside common domain"),o,629,470,19),v&&i.length&&t.arrows.referenceSpeed&&(ri(e,o+8,654,t.arrows.referenceGridLength,0,B,E),we(e,`${f("参考 ","Reference ")}${ue(t.arrows.referenceSpeed,4)} m/s · ${i.length}${f(" 个配对点"," paired points")}`,o,683,470,19))}function R0(e,a,t,s,c="zh"){const i=(w,B)=>c==="zh"?w:B,o=document.createElement("canvas");o.width=1560,o.height=1170;const r=o.getContext("2d");if(!r)throw Error("Velocity report canvas unavailable");r.fillStyle="#f6f9fb",r.fillRect(0,0,1560,1170),r.fillStyle="#123247",r.fillRect(0,0,1560,142);const{plane:f,domain:d,roi:m,summary:u,angleThreshold:v,samples:g,source:p,surfaceCase:l}=e;we(r,`${i("OceanScope · 速度诊断 · 第 ","OceanScope · Velocity diagnosis · frame ")}${f.frame}${i(" 帧"," ")}`,40,60,1480,38,"#fff"),we(r,`${i("XZ · Y 索引 ","XZ · Y index ")}${f.yIndex}${i(" · 世界 Y "," · World Y ")}${ue(f.yWorld,9)} m · ${d.id}`,40,100,1480,24,"#d0e6ee"),we(r,`${p.caseId} · ${l.surfaceCaseId} · ${e.createdAt}`,40,128,1480,19,"#d0e6ee"),at(e.appearance.mode,c).forEach((w,B)=>ts(r,w,e,a,t,s?.points??[],40+505*B,c)),we(r,`ROI X [${ue(m.xmin)}, ${ue(m.xmax)}] · Z [${ue(m.zmin)}, ${ue(m.zmax)}] m`,40,724),we(r,`${i("水面热点 X ","Surface hotspot X ")}${ue(l.hotspotXZ.x)} · Z ${ue(l.hotspotXZ.z)} · ${l.caseNote.slice(0,150)}`,40,757);const b=g.probe;we(r,`${i("探针 XYZ (","Probe XYZ (")}${b.xyz.map(w=>ue(w)).join(", ")}) · GT ${ue(b.speedGT)}${i(" · 预测 "," · Prediction ")}${ue(b.speedPred)} · E ${ue(b.E)} · Δs ${ue(b.speedDelta)}${i(" · 夹角 "," · Angle ")}${ue(b.angleDegrees)}°`,40,790),we(r,b.common?`Vy · GT ${ue(b.vectorGT?.[1])} → ${i("预测","Pred")} ${ue(b.vectorPred?.[1])} m/s · ${i("颜色：总流速（前两图）；箭头：XZ 投影","Colour: total speed (first two maps); arrows: XZ projection")}`:i("探针不在共同有效域","Probe outside common valid domain"),40,812,1480,17);for(const[w,B,E]of[["whole",i("整切片","Whole slice"),835],["roi","ROI",906]]){const y=u[w],_=u.direction[w];we(r,`${B}${i(" · 共同 "," · Common ")}${y.counts.common}${i(" / 候选 "," / Candidate ")}${y.counts.candidate}${i(" · 共同/候选 "," · Common/candidate ")}${oi(y.coverageCandidate)}${i(" · 共同/GT "," · Common/GT ")}${oi(y.coverageGT)}${i(" · 平均 E "," · Mean E ")}${ue(y.meanE)}${i(" · 平均 Δs "," · Mean Δs ")}${ue(y.meanSpeedDelta)}`,40,E),we(r,`${i("最大 E ","Maximum E ")}${ue(y.maximum?.value)}${i(" · 平均三维夹角 "," · Mean 3D angle ")}${ue(_.meanDegrees)}${i("° · 夹角有效 ","° · Angle valid ")}${_.count}${i(" · 低速排除 "," · Low-speed excluded ")}${_.excludedLowSpeedCount??"N/A"}`,40,E+30)}return we(r,`${i("方向阈值 τ = ","Direction threshold τ = ")}${v.tau??i("停用","Disabled")}${i(" · 箭头为 XZ 投影 · 速度 m/s、坐标 m 均沿用来源声明"," · Arrows: XZ projections · Source units: velocity m/s, coordinates m")}`,40,991),we(r,i("当前 Y 层诊断，非整帧体积评分；物理与时间尺度、向量基底尚未独立标定。","Current Y-layer diagnosis, not a volume score; physical/time scales and vector basis are not independently calibrated."),40,1025,1480,19),we(r,d.definition.rule??d.id,40,1096,1480,17),we(r,`${i("代码 ","Code ")}${p.codeRevision}${i(" · 资源 SHA-256 "," · Resource SHA-256 ")}${p.resource.packedSha256}`,40,1064,1480,18),we(r,i("使用配套 JSON 恢复视图。恢复时核验资源并重算。CSV 保留整层原生格点。","Restore with the companion JSON; resources are verified and metrics recomputed. CSV retains the whole native layer."),40,1128,1480,19),o}function P0(e,a,t="zh"){const s=(u,v)=>t==="zh"?u:v,c=document.createElement("canvas");c.width=1560,c.height=1940;const i=c.getContext("2d");if(!i)throw Error("Velocity comparison canvas unavailable");const{scope:o,result:r,source:f,view:d}=e;i.fillStyle="#f6f9fb",i.fillRect(0,0,c.width,c.height),i.fillStyle="#123247",i.fillRect(0,0,c.width,148),we(i,s("OceanScope · Best_1027 三帧速度对照","OceanScope · Best_1027 three-frame velocity comparison"),40,56,1480,38,"#fff"),we(i,`XZ · Y=${o.plane.yIndex} · ROI X [${ue(o.roi.xmin)}, ${ue(o.roi.xmax)}] Z [${ue(o.roi.zmin)}, ${ue(o.roi.zmax)}] m · τ=${o.tau} m/s`,40,99,1480,22,"#d0e6ee"),we(i,`${s("三帧共同有效 ","Common valid across three frames ")}${r.shared}/${r.roiCandidates}${s(" · 夹角共同有效 "," · Common angle-valid ")}${r.sharedAngles}${s(" · 共用色标和箭头比例"," · Shared colour and arrow scales")}`,40,130,1480,21,"#d0e6ee");const m={xIndex:d.probe[0],zIndex:d.probe[1]};return a.rows.forEach(({frame:u,slice:v,angles:g,arrows:p,summary:l},b)=>{const w=155+b*570;we(i,`${s("帧 ","Frame ")}${u}${s(" · 本帧 ROI "," · Frame ROI ")}${l.nativeRoi}/${r.roiCandidates}${s(" · 共同样本平均 E "," · Common-sample mean E ")}${ue(l.meanE)} m/s · Δs ${ue(l.meanDelta)}${s(" m/s · 夹角 "," m/s · Angle ")}${ue(l.meanAngle)}°`,40,w+25,1480,25),i.save(),i.translate(0,w-129);const B={appearance:{viewport:a.view,zoom:!0,ranges:r.ranges},probe:m,arrows:p};at(d.mode,t).forEach((E,y)=>ts(i,E,B,v,g,d.arrows?p.points:[],40+505*y,t)),i.restore()}),we(i,`${s("探针原生 XZ 索引 (","Probe native XZ index (")}${d.probe.join(", ")}${s(") · 棋盘表示未纳入对应共同有效域 · 单位沿用来源声明",") · Checkerboard: outside common support · Source-declared units")}`,40,1890),we(i,`${s("代码 ","Code ")}${f.codeRevision}${s(" · 逐帧资源身份和恢复设置见配套 JSON · "," · Per-frame resource identities and restore settings: companion JSON ·")}${e.createdAt}`,40,1920,1480,18),c}const Ze=(e,a=4)=>Number.isFinite(e)?e.toFixed(a):"—",ta=e=>e.map(a=>Ze(a,3)).join(", ");function I0(e,a){const t=[a.seed,...a.gt.points,...a.pred.points],s=t.map(g=>g[0]),c=t.map(g=>g[1]),i=Math.min(...s),o=Math.max(...s),r=Math.min(...c),f=Math.max(...c),d=275/Math.max(o-i,f-r,a.separation*3),m=([g,p])=>[275+(g-(i+o)/2)*d,1225-(p-(r+f)/2)*d];e.fillStyle="#102b3a",e.fillRect(40,1065,470,320);for(const[g,p,l]of[[a.gt,"#66d9eb",[]],[a.pred,"#ffbf69",[6,4]]])if(e.strokeStyle=p,e.lineWidth=3,e.setLineDash(l),e.beginPath(),g.points.forEach((b,w)=>e[w?"lineTo":"moveTo"](...m(b))),e.stroke(),e.setLineDash([]),g.points.length){const[b,w]=m(g.points.at(-1));e.strokeRect(b-4,w-4,8,8)}a.split&&(e.strokeStyle="white",e.beginPath(),e.moveTo(...m(a.split.gt)),e.lineTo(...m(a.split.pred)),e.stroke());const[u,v]=m(a.seed);e.fillStyle="#ff6b86",e.beginPath(),e.arc(u,v,5,0,2*Math.PI),e.fill()}function N0(e,a,t){const s=(x,S)=>t==="zh"?x:S,c=document.createElement("canvas");c.width=1560,c.height=1530;const i=c.getContext("2d"),o=(x,S,C,A=22,h=1480,R="#173848")=>{i.fillStyle=R,i.font=A+"px sans-serif",i.fillText(x,S,C,h)};i.fillStyle="#f9faf7",i.fillRect(0,0,c.width,c.height),i.fillStyle="#123247",i.fillRect(0,0,c.width,108),o("OceanScope  /  Best_1027   ·   1049   /   "+e.settings.id,40,49,34,1480,"white"),o(s("水面重建与同列流动诊断","Surface reconstruction and flow at the same XZ column"),40,86,25,1480,"#d2e6e7");const{surface:r,spatial:f,view:d,slice:m,arrows:u,angles:v}=e,{hotspot:g,directionDeg:p,caseNote:l}=r.diagnosis;let b=1e-9;for(let x=0;x<f.common.length;x++)f.common[x]&&(b=Math.max(b,Math.abs(f.heightB[x]-f.heightA[x])));o(s("水面高度误差","Surface height error")+(r.appearance.absoluteError?"  |Pred − GT|":"  Pred − GT"),40,150,27),Yi(i,f,r,"difference",40,180,420,215,[0,1],b);const w=Object.values(r.profiles).flatMap(x=>x.points.flatMap(S=>[S.a,S.b]).filter(Number.isFinite)),B=[Math.min(...w),Math.max(...w)];if(Object.values(r.profiles).forEach((x,S)=>Wa(i,{...r,profile:x,crest:e.mark?.profile===["first","second"][S]?e.mark:null},500+510*S,151,495,245,B,p+90*S+"°",t)),e.mark){const x=Gn(r,e.mark);o(s("候选峰","Candidate crests")+" · "+(e.mark.status==="uncertain"?s("对应不确定","uncertain correspondence"):s("人工配对","manually paired"))+"    GT (s,h) "+ta([x.gt.distance,x.gt.a])+"    Pred (s,h) "+ta([x.pred.distance,x.pred.b])+"    Δs "+Ze(x.deltaDistance)+"    Δh "+Ze(x.deltaHeight),500,457,21,1010)}o(s("热点水面高度","Surface height at hotspot")+"  GT "+Ze(e.surfaceY[0])+"  /  Pred "+Ze(e.surfaceY[1])+"     XZ ("+ta([g.x,g.z])+")     ROI MAE "+Ze(e.height.mae)+"  ·  n="+e.height.common,40,490),o(s("固定高度速度切片","Fixed-height velocity slice")+"    Y["+d.y+"] = "+Ze(e.velocityY)+"    ·    "+s("切片与水面共享 XZ，Y 分别取值","Shared XZ column; slice Y and surface Y shown separately"),40,546,27);const E=e.settings.velocity;i.save(),i.translate(0,390),at(d.mode,t).forEach((x,S)=>ts(i,x,E,m,v,u?.points??[],40+S*505,t)),i.restore(),i.save(),i.translate(0,45),I0(i,a);const y=550;o(s("切片内配对瞬时流线","Paired instantaneous XZ streamlines"),y,1095,28),o(s("青实线 GT，橙虚线预测，红点为种子，白线为首次越阈","GT solid cyan · Prediction dashed orange · Red seed · White first crossing"),y,1135,21,950),o("XZ ("+ta(a.seed)+")    Δs "+Ze(a.step,5)+"    Δ ≥ "+Ze(a.separation,5)+"    RK2",y,1174),o(a.split?s("首次采样越阈","First sampled crossing")+"   s "+Ze(a.split.arc,5)+"   Δ "+Ze(a.split.gap,6):s("共同积分段内未越阈","No crossing on the shared trace"),y,1215,24);const _={limit:s("积分长度上限","arc length limit"),mask:s("共同有效域边界","common mask boundary"),grid:s("网格边界","grid boundary"),slow:s("低投影速度","low projected speed")};return[a.gt,a.pred].forEach((x,S)=>o((S?"Pred":"GT")+"   "+_[x.stop]+"    s "+Ze((x.points.length-1)*a.step,5)+"    XZ ("+ta(x.points.at(-1)??a.seed)+")",y,1264+S*39,22,950)),o(s("观察","Observation")+"   "+l,40,1430,22,1480),o(s("单位按来源声明。流线距离采用网格世界坐标。","Source-declared units. Streamline distances use grid world coordinates."),40,1462,18),i.restore(),c}function tt({surface:e,mark:a,onApply:t,zh:s,children:c,allowUnpaired:i=!1}){const[o,r]=j.useState(a?.profile??"first"),[f,d]=j.useState(a?.a??""),[m,u]=j.useState(a?.b??""),[v,g]=j.useState(a?.status??"uncertain"),p=e.profiles[o],l=a&&Ka(e,a);function b(B,E,y){o!==B&&(r(B),d(""),u("")),(E==="a"?d:u)(y),g("uncertain")}if(!e.roi)return c?.(null)??null;const w=a&&(a.profile!==o||a.a!==(f===""?null:f)||a.b!==(m===""?null:m)||a.status!==v);return n.createElement(n.Fragment,null,c?.({pick:b,profile:o,gt:f,pred:m}),n.createElement("fieldset",{"data-os-loc":"src/field/CrestControls.jsx:17:48"},n.createElement("legend",{"data-os-loc":"src/field/CrestControls.jsx:17:58"},s?"剖面候选峰":"Profile crest candidates"),c&&n.createElement("p",{"data-os-loc":"src/field/CrestControls.jsx:18:16"},s?"空心点是候选峰，实心点是当前选择。也可从列表选择，确认后应用。":"Open circles are candidates and filled circles show your selection. Choose on the curves or in the lists, then apply."),n.createElement("label",{"data-os-loc":"src/field/CrestControls.jsx:19:5"},s?"剖面":"Profile"," ",n.createElement("select",{"data-os-loc":"src/field/CrestControls.jsx:19:32","data-os-action":"",value:o,onChange:B=>{r(B.target.value),d(""),u(""),g("uncertain")}},Object.keys(e.profiles).map((B,E)=>n.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:21:50",key:B,value:B},E+1)))),[["a",f,d,"GT"],["b",m,u,s?"预测":"Prediction"]].map(([B,E,y,_])=>n.createElement("label",{"data-os-loc":"src/field/CrestControls.jsx:23:7",key:B},_," ",n.createElement("select",{"data-os-loc":"src/field/CrestControls.jsx:23:32","data-os-action":"","aria-label":"Crest "+B,value:E,onChange:x=>{y(Number(x.target.value)),g("uncertain")}},n.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:24:9",value:"",disabled:!0},s?"选择局部峰":"Select a local peak"),ha(p,e.roi,B).map(x=>n.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:25:55",key:x,value:x},"s ",p.points[x].distance.toFixed(3)," · h ",p.points[x][B].toFixed(4)))))),n.createElement("select",{"data-os-loc":"src/field/CrestControls.jsx:27:5","data-os-action":"","aria-label":"Peak correspondence",value:v,onChange:B=>g(B.target.value)},n.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:28:7",value:"uncertain"},s?"对应不确定":"Correspondence uncertain"),n.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:29:7",value:"paired"},s?"人工配对":"Manually paired")),n.createElement("button",{"data-os-loc":"src/field/CrestControls.jsx:30:5","data-os-action":"",disabled:f===""||m==="",onClick:()=>t({profile:o,a:f,b:m,status:v})},s?"应用峰标记":"Apply crest markers"),i&&n.createElement("button",{"data-os-loc":"src/field/CrestControls.jsx:31:21","data-os-action":"",type:"button",onClick:()=>{d(""),u(""),g("uncertain"),t({profile:o,a:null,b:null,status:"uncertain"})}},s?"标记峰配对不确定":"Record unresolved crest pair"),w&&n.createElement("small",{"data-os-loc":"src/field/CrestControls.jsx:32:15"},s?"当前选择尚未应用，报告仍保留上次标记。":"Apply your selection to update the saved report markers."),a&&n.createElement("p",{"data-os-loc":"src/field/CrestControls.jsx:33:12","aria-label":"Applied crest comparison"},a.profile==="first"?s?"剖面 1":"Profile 1":s?"剖面 2":"Profile 2"," · ",a.status==="paired"?s?"人工配对":"Manually paired":s?"峰配对不确定":"Correspondence uncertain",l&&n.createElement(n.Fragment,null," · ",s?"峰高差":"Crest height difference"," Δh ",l.deltaHeight.toFixed(5)," · ",s?"峰位差":"Crest displacement"," Δs ",l.deltaDistance.toFixed(5)," ",s?"场景单位（预测减 GT，Δs 沿剖面正向）":"scene units (prediction minus GT, Δs along the profile)"))))}function F0({control:e,bundle:a,catalog:t,language:s,onReady:c}){const i=s==="zh",[o,r]=j.useState(null),[f,d]=j.useState(.25),[m,u]=j.useState(!1),[v,g]=j.useState(""),[p,l]=j.useState(null),b=j.useRef(null);j.useEffect(()=>()=>b.current?.abort(),[]);async function w(E,y,_=null){b.current?.abort();const x=new AbortController,S=()=>x.abort();b.current=x,y?.addEventListener("abort",S,{once:!0}),u(!0),g(""),r(null),l(null);try{y?.throwIfAborted();const C=await C0(E,a,t,x.signal);if(x.signal.throwIfAborted(),_&&_!==C.presetSha)throw Error(i?"案例设置已更新，请打开原始报告。":"Case settings changed. Open the original report.");r(C),d(C.settings.integration.stepFraction),c(!!_)}catch(C){throw x.signal.aborted||g(C.message),C}finally{y?.removeEventListener("abort",S),x===b.current&&(b.current=null,u(!1))}}j.useEffect(()=>{const E=x=>{if(x?.page!=="field"||x.section!=="report"||!x.pairedCase)return;const{id:S,stepFraction:C,crest:A,presetSha:h}=x.pairedCase;try{const R=Ya(S,C);w({...R,...A?{crest:A}:{}},null,h).catch(()=>{})}catch(R){g(R.message)}},y=x=>E(x.detail),_=x=>{x.detail?.includes(1049)&&E(Ga())};return window.addEventListener("oceanscope-paired-case-mark",y),window.addEventListener("oceanscope-velocity-files",_),E(Ga()),()=>{window.removeEventListener("oceanscope-paired-case-mark",y),window.removeEventListener("oceanscope-velocity-files",_)}},[a]),j.useImperativeHandle(e,()=>({restore:(E,y)=>w(JSON.parse(E),y)})),j.useEffect(()=>{if(!o)return;let E;try{const{record:y,pair:_}=B0(o,f),x=N0(o,_,s).toDataURL("image/png");E=nt({stem:"OceanScope-1049-"+y.id+"-"+(f===.125?"half":"default")+"-"+s,record:y,csv:A0(o,_),previewUrl:x}),l({data:o,fraction:f,language:s,files:E}),g("")}catch(y){l(null),g(y.message)}return()=>{E&&Object.values(E).forEach(y=>URL.revokeObjectURL(y.href))}},[o,f,s]);const B=p?.data===o&&p?.fraction===f&&p?.language===s?p.files:null;return n.createElement("section",{"data-os-loc":"src/field/PairedCaseReport.jsx:69:10","aria-label":"1049 one-page case",className:"protocol-report","data-paired-case":B?JSON.stringify({id:o.settings.id,presetSha:o.presetSha,stepFraction:f,crest:o.mark}):void 0},n.createElement("h2",{"data-os-loc":"src/field/PairedCaseReport.jsx:70:5"},i?"1049 一页诊断案例":"1049 one-page diagnostic case"),n.createElement("div",{"data-os-loc":"src/field/PairedCaseReport.jsx:71:5",className:"reference-controls"},["A","B"].map(E=>n.createElement("button",{"data-os-loc":"src/field/PairedCaseReport.jsx:71:60","data-os-action":"",key:E,type:"button",onClick:()=>w(Ya(E)).catch(()=>{})},i?"打开案例 ":"Open case ",E)),o&&n.createElement("label",{"data-os-loc":"src/field/PairedCaseReport.jsx:73:14"},n.createElement("input",{"data-os-loc":"src/field/PairedCaseReport.jsx:73:21","data-os-action":"",type:"checkbox",checked:f===.125,onChange:E=>d(E.target.checked?.125:.25)}),i?"半步长复核":"Half-step check")),o&&n.createElement(tt,{key:o.settings.id,surface:o.surface,mark:o.mark,zh:i,onApply:E=>r({...o,mark:E})}),m&&n.createElement("p",{"data-os-loc":"src/field/PairedCaseReport.jsx:77:12",role:"status"},i?"正在核验水面和速度资源…":"Verifying surface and velocity resources…"),v&&n.createElement("p",{"data-os-loc":"src/field/PairedCaseReport.jsx:78:13",role:"alert"},v),B&&n.createElement(n.Fragment,null,n.createElement("img",{"data-os-loc":"src/field/PairedCaseReport.jsx:79:17",src:B.png.href,alt:i?"1049 水面热点、双剖面、速度切片与配对流线":"1049 hotspot, two profiles, velocity slice and paired streamlines",style:{maxWidth:"100%",height:"auto",display:"block"}}),n.createElement("div",{"data-os-loc":"src/field/PairedCaseReport.jsx:81:7",className:"reference-controls"},["png","csv","json"].map(E=>n.createElement("a",{"data-os-loc":"src/field/PairedCaseReport.jsx:81:75",key:E,href:B[E].href,download:B[E].name},i?"下载":"Download"," ",E.toUpperCase())))))}function O0(e,a){const t=String(e?.message??e??""),s=(c,i)=>a?c:i;return/AbortError|cancelled|canceled/i.test(e?.name+" "+t)?s("操作已取消。当前文件可以稍后重新打开。","Operation cancelled. You can reopen the file later."):/too large|^size$/i.test(t)?s("文件过大。请选择本工具导出的分析 JSON；完整报告上限1 MB，场比较方案上限2 MB。","File too large. Choose an exported analysis JSON: reports up to1 MB, field views up to2 MB."):/Invalid analysis JSON|^json$|JSON|Unexpected token|Unexpected end/i.test(t)&&!/(format|Unsupported)/i.test(t)?s("JSON内容不完整或格式有误。请重新选择原始导出文件，或粘贴文件全文。","Invalid or incomplete JSON. Select the original exported file or paste its entire contents."):/Unsupported|^format$/.test(t)?s("这个文件不能恢复分析。请选择完整分析报告、场比较方案或序列选择 JSON；PNG、CSV和数据说明文件只能查看。","This file cannot restore analysis. Choose an analysis-report, field-view or sequence-selection JSON; images, CSV and data-info files are for viewing."):/checksum|identity|mismatch|does not match|^source$/i.test(t)?s("数据或报告身份不匹配。请确认数据组合，使用同一版本导出的报告及配套资源；资源损坏时重新复制并校验，勿修改文件中的身份信息。","Data or report identity differs. Confirm the dataset and use its matching report/resources. Recopy and verify damaged resources; do not edit identity fields."):/404|unavailable|failed to fetch|network|^dataset$|No spatial resource/i.test(t)?s("数据下载未完成。请检查网络并重试；无三维预览的帧仍可查看高度分析。","The data download did not complete. Check your connection and retry. Frames without 3D previews still support height analysis."):/Wait|not ready|loading|Timed out/i.test(t)?s("数据尚未准备好。等待当前组合加载完成后重试；持续失败时检查本页的数据资源提示。","Data is not ready. Wait for the current dataset to load and retry; if it persists, check this page’s resource message."):/View changed/i.test(t)?s("恢复期间视图已改变，已停止应用旧请求。请在当前视图重新打开报告。","The view changed during restoration. Reopen the report from the current view."):s("操作未完成。确认文件来自当前工具、帧号和参数有效，然后重试；具体原因可查看技术详情。","The operation did not complete. Confirm the file comes from this tool and its frame/settings are valid, then retry; technical details are below.")}function fn({error:e,zh:a,resource:t,onRetry:s}){return e?n.createElement("div",{"data-os-loc":"src/AnalysisError.jsx:18:9",className:"analysis-error",role:"alert"},n.createElement("strong",{"data-os-loc":"src/AnalysisError.jsx:18:54"},a?"需要处理的问题":"Action needed"),t&&n.createElement("p",{"data-os-loc":"src/AnalysisError.jsx:18:112"},t),n.createElement("p",{"data-os-loc":"src/AnalysisError.jsx:18:130"},O0(e,a)),s&&n.createElement("button",{"data-os-loc":"src/AnalysisError.jsx:18:179","data-os-action":"",type:"button",onClick:s},a?"重新加载资源":"Reload resources"),n.createElement("details",{"data-os-loc":"src/AnalysisError.jsx:18:261"},n.createElement("summary",{"data-os-loc":"src/AnalysisError.jsx:18:270"},a?"技术详情":"Technical details"),n.createElement("code",{"data-os-loc":"src/AnalysisError.jsx:18:320"},String(e?.message??e)))):null}function T0({controlRef:e,ready:a,capture:t,prepareImport:s,applyImport:c,zh:i,unifiedRestore:o=!1}){const[r,f]=j.useState(null),[d,m]=j.useState(""),[u,v]=j.useState(""),[g,p]=j.useState(null),l=j.useRef(null),b=j.useRef(null),w=r?.language===i?r:null;function B(){l.current&&(l.current.abort(),l.current=null,m(i?"恢复已取消，保留新的操作。":"Restore cancelled; newer action retained."))}j.useImperativeHandle(e,()=>({cancel:B,clearSnapshot:()=>f(null),restoreText:(x,S)=>y({size:new TextEncoder().encode(x).length,text:async()=>x},S,!0)})),j.useEffect(()=>()=>l.current?.abort(),[]),j.useEffect(()=>{f(null),m("")},[i]),j.useEffect(()=>{const x=Object.values(w?.files??{}).map(S=>S.href).filter(S=>S?.startsWith("blob:"));return()=>{for(const S of x)URL.revokeObjectURL(S)}},[w?.files]);function E(){try{const x=t(),S=y0(x.record,x.canvas?.toDataURL?.("image/png")??null);f({...x,language:i,previewUrl:S.png?.href??null,files:S}),p(null),m(i?"已生成当前快照，三种导出使用同一报告。":"Snapshot created; all three downloads use this report.")}catch(x){p(x)}}async function y(x,S,C=!1){if(B(),!x)return;const A=new AbortController,h=()=>A.abort();S?.addEventListener("abort",h,{once:!0}),S?.aborted&&A.abort(),l.current=A,p(null),m(i?"正在核验报告与资源…":"Verifying report and resources…");try{if(x.size>1024*1024)throw Error("Report file too large");const R=await x.text();A.signal.throwIfAborted();const M=await s(R,A.signal);A.signal.throwIfAborted(),await c(M,A.signal),A.signal.throwIfAborted(),f(null),m(i?"已恢复帧、截面、选区与可用相机；数值来自重新核验的资源。":"Restored frame, section, ROI and available camera; values recomputed from verified resources.")}catch(R){if(A.signal.aborted||(p(R),m("")),C)throw R}finally{S?.removeEventListener("abort",h),l.current===A&&(l.current=null)}}const _={png:i?"下载汇报图片 PNG":"Download presentation PNG",csv:i?"下载数据表 CSV":"Download data table CSV",json:i?"保存可恢复分析 JSON":"Save restorable analysis JSON"};return n.createElement("section",{"data-os-loc":"src/field/ProtocolReportControls.jsx:25:9",className:"protocol-report","aria-label":"Protocol evidence report"},n.createElement("h3",{"data-os-loc":"src/field/ProtocolReportControls.jsx:25:84"},i?"保存与恢复分析":"Save and restore analysis"),n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:26:3"},i?"先确认当前帧、选区、截面和相机，再生成报告。三种下载使用同一快照；后续修改视图时，请更新快照后再导出。":"Confirm frame, ROI, section and camera, then create a report. All downloads use one snapshot; update it before exporting later view changes."),n.createElement("div",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:3",className:"reference-controls"},n.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:39","data-os-action":"",disabled:!a,onClick:E},w?i?"更新报告快照":"Update report snapshot":i?"生成当前报告":"Create current report"),Object.entries(_).map(([x,S])=>w?.files[x]?n.createElement("a",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:240","data-os-action":"",key:x,className:"report-download",href:w.files[x].href,download:w.files[x].name,onClick:()=>m(i?"下载已交给浏览器，请在下载列表确认文件。也可展开“下载帮助与 JSON 文本”复制完整分析。":"Download handed to the browser. Check its download list; Download help and JSON text also provides the complete analysis for copying.")},S):n.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:573",key:x,disabled:!0},S))),w&&n.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:12"},n.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:21"},i?"下载帮助与 JSON 文本":"Download help and JSON text"),n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:90"},i?"文件由浏览器保存，位置取决于浏览器设置。可在浏览器下载列表中找到文件。继续分析也可选中下方全部 JSON，按 Ctrl+C（Mac：⌘C）复制，再粘贴到顶部“恢复分析”；长期保留请下载 JSON 文件。":"Your browser saves the files according to its download settings. Find them in its download list. To resume without choosing a file, select all JSON below, copy with Ctrl+C (Mac: ⌘C), then paste into Restore analysis. Download the JSON file for long-term storage."),n.createElement("label",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:470"},i?"完整分析 JSON":"Complete analysis JSON",n.createElement("textarea",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:518",ref:b,"aria-label":"Report JSON for copying",rows:"6",readOnly:!0,spellCheck:!1,value:w.files.json.content})),n.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:662","data-os-action":"",type:"button",onClick:()=>{b.current?.focus(),b.current?.select(),m(i?"已选中完整 JSON。按 Ctrl+C（Mac：⌘C）复制。":"Complete JSON selected. Press Ctrl+C (Mac: ⌘C) to copy.")}},i?"选中全部 JSON":"Select all JSON")),!w&&n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:29:13"},i?"生成报告后即可下载。PNG用于展示，CSV保留数值，JSON用于继续同一次分析。":"Create a report to enable downloads. PNG is for presentation, CSV for numbers, and JSON for resuming the analysis."),w&&n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:30:12"},i?"导出快照 · 帧":"Export snapshot · frame"," ",w.record.view.frame," · ",w.record.createdAt," · ",w.record.view.geometry?i?"包含已核验三维":"Verified 3D included":i?"二维证据":"2D evidence"," · ",w.record.view.geometryStatus?.reason," · ",i?"后续操作不会改变此报告；更新快照可保存新状态。":"Later actions do not change this report; update the snapshot to save the new state."),w?.previewUrl&&n.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:24"},n.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:33"},i?"预览汇报图片":"Preview presentation image"),n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:94"},i?"预览与下载使用同一报告。如果浏览器未保存PNG，可在此图片上使用“图片另存为”。":"Preview and download use the same report. If the browser does not save the PNG, use Save image as on this preview."),n.createElement("img",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:265",src:w.previewUrl,alt:i?`帧 ${w.record.view.frame} 汇报图片`:`Frame ${w.record.view.frame} report image`,style:{display:"block",width:"100%",height:"auto"}})),o?n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:32:19"},n.createElement("a",{"data-os-loc":"src/field/ProtocolReportControls.jsx:32:22","data-os-action":"",href:"#restore-analysis",onClick:()=>{const x=document.getElementById("restore-analysis");x&&(x.open=!0)}},i?"恢复分析：选择文件或粘贴 JSON":"Restore analysis: choose a file or paste JSON")):n.createElement(n.Fragment,null,n.createElement("label",{"data-os-loc":"src/field/ProtocolReportControls.jsx:33:3"},i?"导入分析报告 JSON":"Import analysis report JSON"," ",n.createElement("input",{"data-os-loc":"src/field/ProtocolReportControls.jsx:33:59","data-os-action":"",type:"file",accept:"application/json,.json","aria-label":"Restore protocol report",onChange:x=>{y(x.target.files?.[0]),x.target.value=""}})),n.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:3"},n.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:12"},i?"粘贴报告 JSON":"Paste report JSON"),n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:67"},i?"文件选择不可用时，可粘贴报告内容，使用相同的核验与恢复流程。":"If file selection is unavailable, paste the report content for the same verified restoration."),n.createElement("textarea",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:207","data-os-action":"","aria-label":"Protocol report JSON text",rows:"6",value:u,onChange:x=>{B(),v(x.target.value)}}),n.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:332","data-os-action":"",disabled:!u.trim(),onClick:()=>y({size:new TextEncoder().encode(u).length,text:async()=>u})},i?"恢复粘贴的报告":"Restore pasted report"))),n.createElement(fn,{error:g,zh:i}),n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:35:45",role:"status"},d))}const Ji=["xmin","xmax","zmin","zmax"];function D0(e){return Number(e.toFixed(4)).toString()}function wt(e){return Object.fromEntries(Ji.map(a=>[a,D0(e[a])]))}function $0(e,a,t){const s={},c={};for(const i of Ji)!e[i]?.trim()||!Number.isFinite(Number(e[i]))?c[i]="number":s[i]=t[i]?Number(e[i]):a[i];for(const[i,o]of[["xmin","xmax"],["zmin","zmax"]])!c[i]&&!c[o]&&s[i]>s[o]&&(c[i]="order",c[o]="order");return{values:s,errors:c,valid:Object.keys(c).length===0}}function Ot({profile:e,roi:a,limits:t,label:s,errorLimit:c,reviewId:i,crestPicker:o,profileKey:r}){const{language:f}=fe(),d=(y,_)=>f==="zh"?y:_,m=e.points,u=m[0].distance,v=m.at(-1).distance,g=Math.max(v-u,1e-9),p=Math.max(t[1]-t[0],1e-9),l=c??Math.max(1e-9,...m.map(y=>Math.abs(y.difference??0))),b=y=>45+(y-u)/g*620,w=y=>170-(y-t[0])/p*135,B=a?et(e,a):null;function E(y){let _=!1;return m.map(x=>{if(!Number.isFinite(x[y]))return _=!1,"";const S=_?"L":"M";return _=!0,`${S}${b(x.distance)},${y==="difference"?245-x[y]/l*38:w(x[y])}`}).join(" ")}return n.createElement("figure",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:9","data-review-id":i,"data-profile-axis":[u,v,45,665].join(",")},n.createElement("figcaption",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:88"},s," · ",e.sampling==="native_columns"?d("原生列","Native columns"):d("插值诊断 · 四邻点共同有效","Interpolated diagnosis · all four neighbours valid")),n.createElement("svg",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:259",viewBox:"0 0 710 300",role:"img","aria-label":s},B&&n.createElement("rect",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:14:13",x:b(Math.max(u,B[0])),y:"25",width:Math.max(0,b(Math.min(v,B[1]))-b(Math.max(u,B[0]))),height:"255",fill:"#4ba8ad",opacity:".13"}),n.createElement("line",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:2",x1:b(0),x2:b(0),y1:"25",y2:"280",stroke:"#666",strokeDasharray:"4 3"}),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:82",x:b(0)+4,y:"20"},d("热点 0","Hotspot 0")),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:136",x:"3",y:"40"},t[1].toFixed(3)),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:184",x:"3",y:"175"},t[0].toFixed(3)),n.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:233",d:E("a"),fill:"none",stroke:"#2583c5",strokeWidth:"2"}),n.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:299",d:E("b"),fill:"none",stroke:"#e08b22",strokeWidth:"2"}),n.createElement("line",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:365",x1:"45",x2:"665",y1:"245",y2:"245",stroke:"#888"}),n.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:421",d:E("difference"),fill:"none",stroke:"#9b4778"}),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:480",x:"2",y:"245"},"B−A"),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:510",x:"45",y:"298"},u.toFixed(3)," m"),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:555",x:"540",y:"298"},v.toFixed(3)," m"),o&&a&&["a","b"].map(y=>ha(e,a,y).map(_=>{const x=o.profile===r&&(y==="a"?o.gt:o.pred)===_;return n.createElement("circle",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:17:11","data-os-action":"",key:y+_,"data-crest-field":y,"data-sample":_,cx:b(m[_].distance),cy:w(m[_][y]),r:x?6:4,fill:x?y==="a"?"#176693":"#a75400":"white",stroke:y==="a"?"#176693":"#a75400",style:{cursor:"pointer"},onClick:()=>o.pick(r,y,_)},n.createElement("title",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:19:84"},y==="a"?"GT":d("预测","Prediction")," · s ",m[_].distance.toFixed(4)))}))),!m.some(y=>y.a!==null)&&n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:20:38"},d("此剖面无共同有效高度。","No common valid height on this profile.")))}const yn=e=>e==null?"N/A":(e*100).toFixed(4)+" cm";function li({value:e,label:a}){const{language:t}=fe(),s=(c,i)=>t==="zh"?c:i;return n.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:8",className:"diagnostic-evidence","aria-label":a},n.createElement("strong",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:64"},a),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:88"},"MAE ",yn(e.mae)," · Bias ",yn(e.bias)," · RMSE ",yn(e.rmse)),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:174"},s("候选原生列 ","Candidate native columns "),e.candidates,s(" / GT有效 "," / GT valid "),e.validGT,s(" / 预测有效 "," / Prediction valid "),e.validPrediction,s(" / 共同有效 "," / Common valid "),e.common),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:394"},s("共同/候选 ","Common/candidate "),e.coverageCandidate==null?"N/A":(e.coverageCandidate*100).toFixed(2)+"%",s(" · 共同/GT "," · Common/GT "),e.coverageGT==null?"N/A":(e.coverageGT*100).toFixed(2)+"%"),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:616"},s("最大绝对误差 ","Maximum absolute error "),yn(e.maximum?.absolute)," ",e.maximum&&n.createElement(n.Fragment,null,s("· 有符号 ","· Signed "),yn(e.maximum.signed),s(" · 原生索引 ("," · Native index ("),e.maximum.ix,",",e.maximum.iz,") · X ",e.maximum.x.toFixed(6)," / Z ",e.maximum.z.toFixed(6),s(" · 并列 "," · Ties "),e.maximum.ties,s("（按索引取首点）"," (first point by index)"))))}function di({value:e,label:a}){const{language:t}=fe(),s=(c,i)=>t==="zh"?c:i;return n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:28:8","aria-label":a},a,s(" · 有效样本 "," · Valid samples "),e.samples," · MAE ",yn(e.mae)," · Bias ",yn(e.bias),s(" · 最大 "," · Maximum "),yn(e.maximum?.absolute))}function W0({spatial:e,diagnosis:a,roi:t,onDirection:s,onRegion:c,mode:i,setMode:o,onExit:r,onNote:f,onCrest:d}){const{language:m}=fe(),u=(y,_)=>m==="zh"?y:_,[v,g]=j.useState(""),p=j.useMemo(()=>a?Hn(e,a):null,[e,a]),l=j.useMemo(()=>Zn(e),[e]),b=j.useMemo(()=>t?Zn(e,t):null,[e,t]),w=p?[...p.first.points,...p.second.points].flatMap(y=>[y.a,y.b]).filter(Number.isFinite):[],B=w.length?[Math.min(...w),Math.max(...w)]:[0,1];function E(y){y.preventDefault();const _=new FormData(y.currentTarget),x=Number(_.get("cx")),S=Number(_.get("cz")),C=Number(_.get("width")),A=Number(_.get("length"));if(![x,S,C,A].every(Number.isFinite)||C<e.descriptor.spacing||A<e.descriptor.spacing){g(u("尺寸至少为一个网格间距，请填写有限数字。","Enter finite numbers; each dimension must span at least one grid spacing."));return}const h={xmin:x-C/2,xmax:x+C/2,zmin:S-A/2,zmax:S+A/2};if(ba(h,Qa(e)).clipped){g(u("选区超出数据范围，请缩小尺寸或移动中心。","The ROI exceeds the data bounds. Reduce its size or move its centre."));return}c(h),g("")}return n.createElement("section",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:9","aria-label":"Hotspot diagnosis"},n.createElement(li,{value:l,label:u("全域诊断 · 原生列","Full-domain diagnosis · native columns")}),b&&n.createElement(li,{value:b,label:u("ROI诊断 · 原生列","ROI diagnosis · native columns")}),n.createElement("h3",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:252"},u("热点与双剖面 · 最高过零高度","Hotspot and paired profiles · highest zero-crossing height")),n.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:344",className:"hotspot-actions"},n.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:377","data-os-action":"","aria-pressed":i==="select",onClick:()=>o("select")},u("定位热点","Locate hotspot")),n.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:485","data-os-action":"","aria-pressed":i==="adjust",onClick:()=>o("adjust")},u("调整选区","Adjust ROI"))),a?n.createElement(n.Fragment,null,n.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:137"},u("案例观察（120字以内，非自动归因）","Case observation (up to 120 characters; no automatic attribution)"),n.createElement("textarea",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:237","data-os-action":"","aria-label":"Diagnosis case note",maxLength:"120",value:a.caseNote??"",onChange:y=>f(y.target.value)})),n.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:373","data-os-action":"",onClick:r},u("退出热点诊断","Exit hotspot diagnosis")),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:445","aria-label":"Hotspot coordinates"},u("帧 ","Frame "),a.frame,u(" · 索引 ("," · Index ("),a.hotspot.ix,", ",a.hotspot.iz,") · X ",a.hotspot.x.toFixed(6)," / Z ",a.hotspot.z.toFixed(6)," m"),n.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:670"},u("剖面方向（场景轴 / 手动方向）","Profile direction (scene axes / manual angle)"),n.createElement("input",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:748","data-os-action":"","aria-label":"Hotspot direction",type:"number",min:"0",max:"180",step:"1",value:a.directionDeg,onChange:y=>{const _=y.target.valueAsNumber;Number.isFinite(_)&&_>=0&&_<=180&&s(_%180)}})),n.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:969","data-os-action":"",onClick:()=>s(0)},u("回到场景轴","Reset to scene axes"))):n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:14"},u("在任意高度图点击共同有效点，暂停并创建热点选区。","Click a common valid point on any height map to pause and create a hotspot ROI.")),t&&n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:10","aria-label":"Hotspot ROI summary"},u("ROI中心 X ","ROI centre X "),((t.xmin+t.xmax)/2).toFixed(4)," / Z ",((t.zmin+t.zmax)/2).toFixed(4),u(" · 宽 "," · Width "),(t.xmax-t.xmin).toFixed(4),u(" / 长 "," / Length "),(t.zmax-t.zmin).toFixed(4),u(" m（来源约定，未独立标定）"," m (source convention; not independently calibrated)")),n.createElement("form",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:347",key:JSON.stringify(t),onSubmit:E,className:"hotspot-roi-edit"},[["cx",u("中心X","Centre X"),(t.xmin+t.xmax)/2],["cz",u("中心Z","Centre Z"),(t.zmin+t.zmax)/2],["width",u("X宽","X width"),t.xmax-t.xmin],["length",u("Z长","Z length"),t.zmax-t.zmin]].map(([y,_,x])=>n.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:645",key:y},_,n.createElement("input",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:670",required:!0,name:y,"aria-label":"Hotspot ROI "+y,type:"number",step:"any",defaultValue:x}))),n.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:788"},u("应用中心与尺寸","Apply centre and dimensions")))),v&&n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:39:14",role:"alert"},v),a&&t&&(a.hotspot.x<t.xmin||a.hotspot.x>t.xmax||a.hotspot.z<t.zmin||a.hotspot.z>t.zmax)&&n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:39:185"},u("热点在选区外；剖面仍锚定原热点。","The hotspot is outside the ROI; profiles remain anchored to the original hotspot.")),p&&n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:40:15"},u("蓝色GT / 橙色预测；紫色B−A。横轴为距热点的有符号距离；阴影为ROI交段，缺测断线。两图共享高度范围。","GT blue / prediction orange / B−A purple. Signed distance from the hotspot; shading marks the ROI intersection. Missing samples break the line. Both plots share a height range.")),n.createElement(tt,{key:JSON.stringify([a.hotspot.index,a.directionDeg,t,a.crest]),surface:{profiles:p,roi:t},mark:a.crest,onApply:d,zh:m==="zh",allowUnpaired:!!t},y=>n.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:40:493",className:"hotspot-profiles"},n.createElement(Ot,{crestPicker:y,profileKey:"first",reviewId:"hotspot-profile-along",profile:p.first,roi:t,limits:B,label:u("热点剖面1","Hotspot profile 1")}),n.createElement(Ot,{crestPicker:y,profileKey:"second",reviewId:"hotspot-profile-across",profile:p.second,roi:t,limits:B,label:u("热点剖面2","Hotspot profile 2")}))),[["first",u("剖面1","Profile 1")],["second",u("剖面2","Profile 2")]].map(([y,_])=>{const x=It(p[y],t);return n.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:40:1031",key:y},n.createElement(di,{value:x.full,label:_+u("全线 · 样本等权"," · Full line · equal sample weights")}),x.roi&&n.createElement(di,{value:x.roi,label:_+u("选区内 · 样本等权"," · Within ROI · equal sample weights")}))}),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:40:1259"},u("剖面统计按曲线样本等权，不等同原生列面积统计。可到“报告与恢复”生成含双剖面的PNG、CSV和可恢复JSON。","Profile statistics weight curve samples equally; they are not native-column area statistics. Open Reports & restore to generate PNG, CSV and restorable JSON with both profiles."))))}const fi={schema:"oceanscope.half-sample.v1",formula:"A*cos(2*pi*(x-c)/wavelength)",wavelength:2,amplitude:1,referenceCentre:0,shift:.0125,dx:.025,first:-40,last:40,units:"scene"};function mi(){const e=fi,a=(d,m)=>e.amplitude*Math.cos(2*Math.PI*(d-m)/e.wavelength),t=Array.from({length:e.last-e.first+1},(d,m)=>{const u=(e.first+m)*e.dx;return{x:u,z:0,a:a(u,e.referenceCentre),b:a(u,e.referenceCentre+e.shift)}}),s={xmin:-1,xmax:1,zmin:0,zmax:0},c=d=>ha({points:t},s,d).map(m=>t[m].x),i=t.find(d=>d.x===c("a")[0]),o=Math.max(...t.map(d=>d.b)),r=t.filter(d=>d.b===o),f={referenceX:i.x,referenceHeight:i.a,strictShiftedCandidates:c("b"),highestSampleXs:r.map(d=>d.x),highestSampleHeight:o,shiftErrorsIfEndpointChosen:r.map(d=>d.x-i.x-e.shift),heightError:o-e.amplitude,midpointEstimate:(r[0].x+r.at(-1).x)/2};return{points:t,report:{recipe:fi,readings:f}}}function V0({zh:e}){const[a,t]=j.useState(null),[s,c]=j.useState(null),[i,o]=j.useState(""),r=j.useRef(null),f=(l,b)=>e?l:b;async function d(l){if(l)try{const b=mi(),w=JSON.parse(await l.text());if(JSON.stringify(w)!==JSON.stringify(b.report))throw Error();c(b),o(f("已重新采样并核对读数","Resampled and verified"))}catch{o(f("文件与半格对照不匹配","File does not match the half-step control"))}}const m=s?.report.readings,u=s?.report.recipe,v=l=>63+(l+.05)*4800,g=l=>180-(l-.999)*24e3;function p(l){const b=[["quantity","truth","sample_readout","signed_error","interpretation"],["peak_x_left",u.shift,m.highestSampleXs[0],m.shiftErrorsIfEndpointChosen[0],"tied endpoint"],["peak_x_right",u.shift,m.highestSampleXs[1],m.shiftErrorsIfEndpointChosen[1],"tied endpoint"],["peak_height",u.amplitude,m.highestSampleHeight,m.heightError,"sample maximum"],["peak_x_midpoint",u.shift,m.midpointEstimate,m.midpointEstimate-u.shift,"symmetry estimate only"],["strict_shifted_crest_count","",m.strictShiftedCandidates.length,"","strictly higher than both neighbours"]].map(w=>w.join(",")).join(`
`);Mn("half-sample."+l,{json:"application/json",csv:"text/csv",svg:"image/svg+xml"}[l],l==="json"?JSON.stringify(s.report,null,2):l==="csv"?b:r.current.outerHTML)}return n.createElement("section",{"data-os-loc":"src/field/HalfSample.jsx:28:9","aria-label":"Half-sample crest"},n.createElement("h3",{"data-os-loc":"src/field/HalfSample.jsx:28:49"},f("半格平移：峰顶落在哪里？","Half-step shift: where is the crest?")),n.createElement("button",{"data-os-loc":"src/field/HalfSample.jsx:29:2","data-os-action":"",onClick:()=>{c(mi()),o("")}},f("查看半格平移","Inspect half-step shift"))," ",n.createElement("label",{"data-os-loc":"src/field/HalfSample.jsx:29:120"},f("恢复半格 JSON","Restore half-step JSON")," ",n.createElement("input",{"data-os-loc":"src/field/HalfSample.jsx:29:169","data-os-action":"",type:"file",accept:".json","aria-label":"Restore half-step JSON",onChange:l=>{d(l.target.files[0]),l.target.value=""}})),n.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:29:310",role:"status"},i),s&&n.createElement(n.Fragment,null,n.createElement("svg",{"data-os-loc":"src/field/HalfSample.jsx:30:11",ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 720 350",role:"img","aria-label":"Half-step crest detail",style:{width:"100%",maxWidth:900},fontFamily:"sans-serif",fill:"#18374b"},n.createElement("rect",{"data-os-loc":"src/field/HalfSample.jsx:31:2",width:"720",height:"350",fill:"#f7fbfd"}),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:31:49",x:"24",y:"35",fontSize:"22"},"半格平移 / Half-step crest"),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:31:112",x:"24",y:"61",fontSize:"15"},"Δx = 0.025   ·   c: 0 → 0.0125   ·   A = 1   ·   scene units"),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:32:2",x:"24",y:"99",fontSize:"14"},"峰顶放大 / Crest detail"),[1,.999,.997].map(l=>n.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:33:24",key:l},n.createElement("path",{"data-os-loc":"src/field/HalfSample.jsx:33:35",d:"M63 "+g(l)+"h605",stroke:"#d8e3e7"}),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:33:82",x:"12",y:g(l)+5},l))),n.createElement("defs",{"data-os-loc":"src/field/HalfSample.jsx:34:2"},n.createElement("clipPath",{"data-os-loc":"src/field/HalfSample.jsx:34:8",id:"half-crest-zoom"},n.createElement("rect",{"data-os-loc":"src/field/HalfSample.jsx:34:39",x:"63",y:"132",width:"605",height:"128"}))),n.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:35:2",clipPath:"url(#half-crest-zoom)"},["a","b"].map((l,b)=>n.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:35:60",key:l,fill:b?"#bd5010":"#19658a",stroke:b?"#bd5010":"#19658a"},n.createElement("polyline",{"data-os-loc":"src/field/HalfSample.jsx:35:131",fill:"none",strokeWidth:"2",points:s.points.map(w=>v(w.x)+","+g(w[l])).join(" ")}),s.points.filter(w=>w.x>=-.05&&w.x<=.075).map(w=>n.createElement("circle",{"data-os-loc":"src/field/HalfSample.jsx:35:280",key:w.x,cx:v(w.x),cy:g(w[l]),r:"4"}))))),n.createElement("path",{"data-os-loc":"src/field/HalfSample.jsx:36:2",d:"M"+v(u.shift)+" 120V260",stroke:"#654493",strokeDasharray:"4 3"}),n.createElement("circle",{"data-os-loc":"src/field/HalfSample.jsx:36:78",cx:v(u.shift),cy:g(1),r:"5",stroke:"#654493",strokeWidth:"2",fill:"white"}),[-.025,0,.025,.05].map(l=>n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:37:29",x:v(l),y:"279",textAnchor:"middle",key:l},l)),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:38:2",x:"24",y:"309",fontSize:"15"},"蓝 / Reference　 橙 / Shifted samples　 ○ 解析峰 / True crest"),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:38:98",x:"24",y:"333",fontSize:"14"},"x ∈ {0, 0.025}　 ·　 sampled height = ",m.highestSampleHeight.toFixed(9))),n.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:39:2"},f("严格局部峰：","Strict local crests: "),m.strictShiftedCandidates.length,"。",f("两个最高采样点等高，不能唯一读回峰位。","The two highest samples tie; neither is a unique crest.")),n.createElement("table",{"data-os-loc":"src/field/HalfSample.jsx:40:2"},n.createElement("thead",{"data-os-loc":"src/field/HalfSample.jsx:40:9"},n.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:40:16"},(e?["量","解析真值","采样读数","读数减真值"]:["Quantity","Truth","Sample readout","Readout minus truth"]).map(l=>n.createElement("th",{"data-os-loc":"src/field/HalfSample.jsx:40:121",key:l},l)))),n.createElement("tbody",{"data-os-loc":"src/field/HalfSample.jsx:40:156"},n.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:40:163"},n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:167"},f("峰位","Crest x")),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:195"},u.shift),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:213"},m.highestSampleXs.join(" / ")),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:253"},m.shiftErrorsIfEndpointChosen.join(" / +"))),n.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:40:311"},n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:315"},f("峰高","Elevation")),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:345"},u.amplitude),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:367"},m.highestSampleHeight.toFixed(9)),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:410"},m.heightError.toFixed(9))))),n.createElement(tt,{surface:{roi:{xmin:-1,xmax:1,zmin:0,zmax:0},profiles:{first:{points:s.points.map(l=>({...l,distance:l.x}))}}},mark:a,onApply:t,zh:e,allowUnpaired:!0}),n.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:42:2"},f("若利用对称性，两个最高点的中点估计为","Using symmetry, the midpoint estimate is")," ",m.midpointEstimate,"。",f("这是估计值，并非某个采样点的位置。","This estimate is not a sampled position.")),["json","svg","csv"].map(l=>n.createElement("button",{"data-os-loc":"src/field/HalfSample.jsx:43:33","data-os-action":"",key:l,onClick:()=>p(l)},f("导出","Export")," ",l.toUpperCase()))))}const Ua={schema:"oceanscope.analytic-wave.v1",formula:"A*cos(2*pi*(x-c)/wavelength)",units:"scene",xmin:-1,xmax:1,dx:.025,wavelength:2,reference:{A:1,c:0},controls:[{id:"height",A:.75,c:0},{id:"position",A:1,c:.25}]},Ki=e=>e.controls.map(a=>{const t=(u,v)=>u.A*Math.cos(2*Math.PI*(v-u.c)/e.wavelength),s=Array.from({length:1+Math.round((e.xmax-e.xmin)/e.dx)},(u,v)=>{const g=e.xmin+v*e.dx;return{x:g,z:0,distance:g,a:t(e.reference,g),b:t(a,g)}}),c={points:s},i={xmin:e.xmin,xmax:e.xmax,zmin:0,zmax:0},o=u=>{const v=ha(c,i,u);if(v.length!==1)throw Error("Expected one interior crest");return v[0]},{gt:r,pred:f,deltaHeight:d,deltaDistance:m}=Gn({roi:i,profiles:{first:c}},{profile:"first",a:o("a"),b:o("b"),status:"paired"});return{points:s,result:{id:a.id,gtX:r.x,gtHeight:r.a,predX:f.x,predHeight:f.b,expectedHeight:a.A-e.reference.A,measuredHeight:d,expectedShift:a.c-e.reference.c,measuredShift:m}}}),Va=Ki(Ua),Tt={recipe:Ua,readings:Va.map(e=>e.result)},z0=JSON.stringify(Tt,null,2);function X0({zh:e}){const[a,t]=j.useState(null),s=j.useRef(null),[c,i]=j.useState(!1),[o,r]=j.useState("");async function f(d){if(d)try{const m=JSON.parse(await d.text()),u=(v,g)=>v===g||v&&g&&typeof v=="object"&&typeof g=="object"&&Object.keys(v).length===Object.keys(g).length&&Object.keys(v).every(p=>Object.hasOwn(g,p)&&u(v[p],g[p]));if(!u(m.recipe,Ua)||!u(m.readings,Ki(Ua).map(v=>v.result)))throw Error();i(!0),r(e?"已重新采样并核对读数":"Resampled and verified")}catch{r(e?"此文件与解析对照不匹配":"File does not match this control")}}return n.createElement("section",{"data-os-loc":"src/field/AnalyticWave.jsx:25:9","aria-label":"Analytic wave control"},n.createElement("h3",{"data-os-loc":"src/field/AnalyticWave.jsx:25:53"},e?"解析波面校验":"Analytic wave control"),n.createElement("button",{"data-os-loc":"src/field/AnalyticWave.jsx:25:99","data-os-action":"",onClick:()=>i(!0)},e?"打开峰高与峰位对照":"Open crest controls")," ",n.createElement("label",{"data-os-loc":"src/field/AnalyticWave.jsx:25:180"},e?"恢复解析波面 JSON":"Restore analytic JSON"," ",n.createElement("input",{"data-os-loc":"src/field/AnalyticWave.jsx:25:230","data-os-action":"",type:"file","aria-label":"Restore analytic JSON",accept:".json",onChange:d=>{f(d.target.files[0]),d.target.value=""}})),n.createElement("p",{"data-os-loc":"src/field/AnalyticWave.jsx:25:370",role:"status"},o),c&&n.createElement(n.Fragment,null,n.createElement("svg",{"data-os-loc":"src/field/AnalyticWave.jsx:26:11",xmlns:"http://www.w3.org/2000/svg",ref:s,role:"img","aria-label":"Analytic crest comparison",viewBox:"0 0 760 370",style:{width:"100%",maxWidth:920},fontFamily:"sans-serif",fill:"#173950"},n.createElement("rect",{"data-os-loc":"src/field/AnalyticWave.jsx:27:2",width:"760",height:"370",fill:"#f7fbfd"}),n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:27:49",x:"24",y:"32",fontSize:"21"},"解析波面校验 / Analytic crest controls"),n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:27:122",x:"24",y:"58",fontSize:"14"},"η = A cos(2π(x−c)/2)   ·   Δx = 0.025   ·   81 samples   ·   scene units"),Va.map(({points:d,result:m},u)=>{const v=p=>70+u*370+(p+1)*140,g=p=>199-p*78;return n.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:29:9",key:m.id},n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:29:23",x:v(-1),y:"94",fontSize:"16"},u?"仅平移 / Shift only":"仅降幅 / Amplitude only"),n.createElement("path",{"data-os-loc":"src/field/AnalyticWave.jsx:30:2",d:`M${v(-1)} 113V280H${v(1)} M${v(-1)} 199H${v(1)}`,fill:"none",stroke:"#b3c5cb"}),[-1,0,1].map(p=>n.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:30:109",key:p},n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:30:120",x:v(p)-5,y:"298"},p),n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:30:155",x:v(-1)-28,y:g(p)+4},p))),["a","b"].map((p,l)=>n.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:31:24",key:p,stroke:l?"#bf540e":"#11669b",fill:"none"},n.createElement("polyline",{"data-os-loc":"src/field/AnalyticWave.jsx:31:78",strokeWidth:"2.5",strokeDasharray:l?"6 3":void 0,points:d.map(b=>v(b.x)+","+g(b[p])).join(" ")}),n.createElement("circle",{"data-os-loc":"src/field/AnalyticWave.jsx:31:196",cx:v(l?m.predX:m.gtX),cy:g(l?m.predHeight:m.gtHeight),r:"4",fill:"white",strokeWidth:"2"}))),n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:32:2",x:v(-1),y:"324"},"Δη = ",m.measuredHeight.toFixed(2),"   ·   Δx crest = ",m.measuredShift.toFixed(2)))}),n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:33:2",x:"25",y:"355",fontSize:"14"},"蓝实线 Reference　 橙虚线 Perturbation　 ○ 采样峰顶 / Sampled crest")),n.createElement("table",{"data-os-loc":"src/field/AnalyticWave.jsx:34:2"},n.createElement("thead",{"data-os-loc":"src/field/AnalyticWave.jsx:34:9"},n.createElement("tr",{"data-os-loc":"src/field/AnalyticWave.jsx:34:16"},(e?["对照","峰高差：设定 / 读回","峰位差：设定 / 读回"]:["Control","Crest elevation: set / read","Crest shift: set / read"]).map(d=>n.createElement("th",{"data-os-loc":"src/field/AnalyticWave.jsx:34:136",key:d},d)))),n.createElement("tbody",{"data-os-loc":"src/field/AnalyticWave.jsx:34:171"},Va.map(({result:d})=>n.createElement("tr",{"data-os-loc":"src/field/AnalyticWave.jsx:34:202",key:d.id},n.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:34:217"},d.id),n.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:34:232"},d.expectedHeight," / ",d.measuredHeight),n.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:34:280"},d.expectedShift," / ",d.measuredShift))))),n.createElement(tt,{surface:{roi:{xmin:-1,xmax:1,zmin:0,zmax:0},profiles:{first:{points:Va[0].points}}},mark:a,onApply:t,zh:e,allowUnpaired:!0}),n.createElement("p",{"data-os-loc":"src/field/AnalyticWave.jsx:36:2"},e?"峰顶在采样点上。此对照检验剖面峰值读数，不代表真实重建精度。":"Crests lie on sample points. This checks profile readout, not reconstruction accuracy."),["json","svg","csv"].map(d=>n.createElement("button",{"data-os-loc":"src/field/AnalyticWave.jsx:37:33","data-os-action":"",key:d,onClick:()=>Mn("analytic-wave."+d,{json:"application/json",csv:"text/csv",svg:"image/svg+xml"}[d],d==="json"?z0:d==="svg"?s.current.outerHTML:[Object.keys(Tt.readings[0]),...Tt.readings.map(Object.values)].map(m=>m.join(",")).join(`
`))},e?"导出":"Export"," ",d.toUpperCase()))))}const dn="review/b-case-metrics.js",Dt=[{id:"rmse",zh:"ROI 高度均方根误差",en:"ROI height RMSE",expr:"row.stats.rmse",read:e=>e.stats.rmse},{id:"bias",zh:"ROI 平均有符号误差",en:"ROI mean signed error",expr:"row.stats.bias",read:e=>e.stats.bias},{id:"mae",zh:"ROI 平均绝对误差",en:"ROI mean absolute error",expr:"row.stats.mae",read:e=>e.stats.mae},{id:"maximum",zh:"ROI 最大绝对误差",en:"ROI maximum absolute error",expr:"row.stats.maximum?.absolute",read:e=>e.stats.maximum?.absolute},{id:"centre",zh:"中心高度差",en:"Centre height difference",expr:"row.centre?.difference",read:e=>e.centre?.difference}],St=e=>"'"+e.replaceAll("\\","\\\\").replaceAll("'","\\'")+"'",Z0=/^[a-z][a-z0-9_-]{0,39}$/,Ra={id:"rmse",field:"rmse",en:"ROI height RMSE",zh:"ROI 高度均方根误差",precision:5};function G0(e,a,t=null){const s=a.id.trim(),c=a.zh.trim(),i=a.en.trim(),o=Dt.find(C=>C.id===a.field);if(!Z0.test(s))return{error:"id"};if(!c||!i||[c,i].some(C=>C.length>80||/[\x00-\x1f\x7f\u2028\u2029]/u.test(C)))return{error:"label"};if(!o||!Number.isInteger(a.precision)||a.precision<0||a.precision>10)return{error:"field"};const r=e.split(`
`),f=r.findLastIndex(C=>C.trimEnd()==="];");if(f<1||r.filter(C=>C.trimEnd()==="export const metrics = [").length!==1||r.slice(f+1).some(C=>C.trim()))return{error:"format"};const d=r.findIndex(C=>C.trimEnd()==="export const metrics = ["),m=r.map(C=>C.match(/^\s*\{\s*id:\s*['"]([a-z][a-z0-9_-]*)['"],.*read:\s*row\s*=>\s*row[.?\w]+\s*\},\s*$/u)?.[1]);if(f<=d||r.slice(d+1,f).some((C,A)=>C.trim()&&!C.trimStart().startsWith("//")&&!m[d+A+1]))return{error:"format"};const u=m.filter(Boolean);if(new Set(u).size!==u.length)return{error:"format"};const v=m.indexOf(s);if(t===null&&v>=0)return{error:"duplicate"};if(t!==null&&(t!==s||v<0))return{error:"format"};const g=a.precision===5?"":", precision: "+a.precision,p=r[v<0?f-1:v].endsWith("\r")?"\r":"",l="  { id: "+St(s)+", en: "+St(i)+", zh: "+St(c)+g+", read: row => "+o.expr+" },"+p,b=v<0?f:v,w=v<0?[]:[r[b]];if(w[0]===l)return{error:"unchanged"};const B=r.slice(Math.max(0,b-3),b),E=r.slice(b+w.length).filter((C,A,h)=>A<h.length-1||h[A]!=="").slice(0,3),y=[...r];y.splice(b,w.length,l);const _=b-B.length+1,x=B.length+E.length,S=["--- a/"+dn,"+++ b/"+dn,"@@ -"+_+","+(x+w.length)+" +"+_+","+(x+1)+" @@",...B.map(C=>" "+C),...w.map(C=>"-"+C),"+"+l,...E.map(C=>" "+C)].join(`
`)+`
`;return{id:s,source:y.join(`
`),diff:S,old:w[0]||"",line:l,field:o,precision:a.precision}}async function bi(e){const a=new TextEncoder,t=a.encode("blob "+a.encode(e).length+"\0"+e),s=await crypto.subtle.digest("SHA-1",t);return Array.from(new Uint8Array(s),c=>c.toString(16).padStart(2,"0")).join("")}const Qi="ALSc001",H0="https://api.github.com/repos/"+Qi+"/oceanscope-demo-v2";async function Pa(e,a,t=!1){const s=await fetch(H0+e,{headers:{Accept:"application/vnd.github+json"},cache:"no-store",signal:a});if(t&&s.status===404)return null;if(!s.ok)throw Error(String(s.status));return s.json()}async function q0(e,a,t,s){const[c,i,o]=await Promise.all([bi(e),bi(a.source),Pa("/contents/"+dn+"?ref=main",s)]),r="codex/b-metric-"+a.id+"-"+i.slice(0,12);if(o.sha===i)return{kind:"published",url:la+"/blob/main/"+dn,branch:r};if(o.sha!==c)return{kind:"stale"};const f=await Pa("/contents/"+dn+"?ref="+encodeURIComponent(r),s,!0);if(!f)return{kind:"editor",url:la+"/edit/main/"+dn,branch:r};if(f.sha!==i)return{kind:"stale"};const d=await Pa("/compare/main..."+encodeURIComponent(r),s);if(d.files?.length!==1||d.files[0].filename!==dn||d.files[0].sha!==i)return{kind:"stale"};const m=await Pa("/pulls?state=open&base=main&head="+encodeURIComponent(Qi+":"+r),s);if(m.length)return{kind:"open",url:m[0].html_url,number:m[0].number,branch:r};const u=new URLSearchParams({expand:"1",title:"Region B: "+a.field.en,body:t});return{kind:"compare",url:la+"/compare/main..."+r+"?"+u,branch:r}}const L0={id:["标识需以小写字母开头，最多 40 个字符。","Use a lowercase identifier of up to 40 characters."],label:["请填写中英文名称，每个最多 80 个字符。","Enter both labels, up to 80 characters each."],field:["请选择统计量和 0–10 位小数。","Choose a statistic and 0–10 decimal places."],duplicate:["该标识已存在。可选择编辑已有指标。","This identifier exists. Choose the existing metric to edit it."],unchanged:["请修改名称、统计量或显示精度。","Change a label, statistic or display precision."],format:["当前源码格式需要在 GitHub 编辑。","Open GitHub to edit this source format."]};function Y0({proposal:e,base:a,body:t,zh:s}){const c=(v,g)=>s?v:g,[i,o]=j.useState(null),[r,f]=j.useState(""),d=j.useRef(null);j.useEffect(()=>()=>d.current?.abort(),[]);async function m(){d.current?.abort();const v=new AbortController;d.current=v,o({kind:"loading"}),f("");const g=setTimeout(()=>{v.signal.aborted||(v.abort(),o({kind:"failed"}))},15e3);try{const p=await q0(a,e,t,v.signal);v.signal.aborted||o(p)}catch{v.signal.aborted||o({kind:"failed"})}finally{clearTimeout(g)}}async function u(){try{await navigator.clipboard.writeText(e.source),f(c("已复制候选文件","Candidate file copied"))}catch{f(c("请下载候选文件，或在文本框中全选复制。","Download the candidate or select and copy its text."))}}return n.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:33:10",className:"proposal-submit"},n.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:34:5","data-os-action":"",type:"button",onClick:m,disabled:i?.kind==="loading"},c("准备提交 PR","Prepare pull request")),i?.kind==="loading"&&n.createElement("span",{"data-os-loc":"src/field/MetricProposal.jsx:35:32",role:"status"},c("正在核对 GitHub 文件与提案分支…","Checking the GitHub file and proposal branch…")),i?.kind==="stale"&&n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:36:30",role:"alert"},c("GitHub 文件已变更。请与最新源码核对后重新生成提案。","The GitHub file has changed. Compare the latest source and regenerate the proposal.")),i?.kind==="failed"&&n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:37:31",role:"alert"},c("无法核对 GitHub，可重试或下载补丁，在最新源码上检查后提交。","GitHub could not be checked. Retry or download the patch and check it against the latest source.")),i?.kind==="open"&&n.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:38:29",href:i.url,target:"_blank",rel:"noreferrer"},c("查看已提交的 PR","View submitted PR")," #",i.number),i?.kind==="published"&&n.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:39:34",href:i.url,target:"_blank",rel:"noreferrer"},c("这份代码已在主分支，查看文件","This version is on main. View file")),i?.kind==="compare"&&n.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:40:32",href:i.url,target:"_blank",rel:"noreferrer"},c("在 GitHub 确认创建 PR","Confirm pull request on GitHub")),i?.kind==="editor"&&n.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:41:31"},n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:42:7"},c("复制候选文件，在 GitHub 编辑器中替换内容，选择新分支或个人 fork，然后创建 PR。","Copy the candidate, paste it into the GitHub editor, then choose a new branch or your fork and create a pull request.")),n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:43:7"},n.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:43:10","data-os-action":"",type:"button",onClick:u},c("复制候选文件","Copy candidate file"))," ",n.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:44:7",href:i.url,target:"_blank",rel:"noreferrer"},c("打开 GitHub 编辑器","Open GitHub editor"))),n.createElement("small",{"data-os-loc":"src/field/MetricProposal.jsx:45:7"},c("建议分支","Suggested branch")," ",n.createElement("code",{"data-os-loc":"src/field/MetricProposal.jsx:45:45"},i.branch)),n.createElement("details",{"data-os-loc":"src/field/MetricProposal.jsx:46:7"},n.createElement("summary",{"data-os-loc":"src/field/MetricProposal.jsx:46:16"},c("候选文件全文","Complete candidate file")),n.createElement("textarea",{"data-os-loc":"src/field/MetricProposal.jsx:46:74",readOnly:!0,value:e.source,"aria-label":"Candidate metric module",rows:7})),r&&n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:47:16",role:"status"},r)))}function U0({metrics:e,rows:a,zh:t}){const s=(h,R)=>t?h:R,c=e.some(h=>h.id==="rmse"),i=()=>c?{...Ra,id:"",en:"",zh:""}:{...Ra},[o,r]=j.useState(()=>!c&&new URLSearchParams(location.search).get("proposal")==="rmse"),[f,d]=j.useState(""),[m,u]=j.useState(!1),[v,g]=j.useState(0),[p,l]=j.useState(""),[b,w]=j.useState(i);j.useEffect(()=>{if(!o)return;const h=new AbortController;return u(!1),fetch(new URL(dn,document.baseURI),{signal:h.signal,cache:"no-store"}).then(R=>{if(!R.ok)throw Error("Metric module unavailable");return R.text()}).then(R=>{h.signal.aborted||d(R)}).catch(()=>{h.signal.aborted||u(!0)}),()=>h.abort()},[o,v]);function B(h){if(l(h),!h){w(i());return}const R=e.find(F=>F.id===h),M=f.split(`
`).find(F=>F.trimStart().startsWith("{ id: '"+h+"',")||F.trimStart().startsWith('{ id: "'+h+'",')),N=Dt.find(F=>M?.includes("read: row => "+F.expr+" }"));w({id:h,en:R.en,zh:R.zh,field:N?.id||"",precision:R.precision??5})}function E(h,R){w(M=>({...M,[h]:R}))}const y=f&&G0(f,b,p||null),_=e.find(h=>h.id===p),x=[1050,1054].map(h=>a.find(R=>R.frameId===h)),S=y&&!y.error&&x.every(Boolean),C=(h,R)=>Number.isFinite(h)?h.toFixed(R):"—",A=S?["Region B · Gentle GT / Best_1027",b.en+" ("+b.id+")","Definition: "+y.field.expr+"; decimals: "+y.precision,...x.map(h=>"Frame "+h.frameId+": "+C(y.field.read(h),y.precision)+" scene units, "+h.stats.common+" common native columns."),b.id==="rmse"&&b.field==="rmse"&&b.en===Ra.en&&b.zh===Ra.zh&&b.precision===5?ks.replace("#analysis-height","&proposal=rmse#analysis-height"):ks].join(`

`):"";return n.createElement("section",{"data-os-loc":"src/field/MetricProposal.jsx:82:10",className:"metric-proposal","aria-label":"Region B metric proposal"},n.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:83:5","data-os-action":"",type:"button","aria-expanded":o,onClick:()=>r(h=>!h)},o?s("收起指标编辑","Close metric editor"):s("改指标并预览","Edit and preview a metric")),o&&n.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:84:14"},m?n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:85:15",role:"alert"},s("未能读取当前指标文件。","Metric source unavailable.")," ",n.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:85:79","data-os-action":"",onClick:()=>g(h=>h+1)},s("重试","Retry"))):f?n.createElement(n.Fragment,null,n.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:86:7",className:"proposal-fields"},n.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:87:9"},s("编辑对象","Metric to edit"),n.createElement("select",{"data-os-loc":"src/field/MetricProposal.jsx:87:44","data-os-action":"","aria-label":"Metric to edit",value:p,onChange:h=>B(h.target.value)},n.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:87:134",value:""},s("新增指标","New metric")),e.map(h=>n.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:87:200",key:h.id,value:h.id},t?h.zh:h.en)))),n.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:88:9"},s("标识","Identifier"),n.createElement("input",{"data-os-loc":"src/field/MetricProposal.jsx:88:38","data-os-action":"","aria-label":"Metric identifier",value:b.id,readOnly:!!p,onChange:h=>E("id",h.target.value)})),n.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:89:9"},s("统计量","Statistic"),n.createElement("select",{"data-os-loc":"src/field/MetricProposal.jsx:89:38","data-os-action":"","aria-label":"Candidate statistic",value:b.field,onChange:h=>E("field",h.target.value)},!b.field&&n.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:89:158",value:""},"—"),Dt.map(h=>n.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:89:201",value:h.id,key:h.id},t?h.zh:h.en)))),n.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:90:9"},s("中文名称","Chinese label"),n.createElement("input",{"data-os-loc":"src/field/MetricProposal.jsx:90:43","data-os-action":"","aria-label":"Chinese metric label",value:b.zh,maxLength:80,onChange:h=>E("zh",h.target.value)})),n.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:91:9"},s("英文名称","English label"),n.createElement("input",{"data-os-loc":"src/field/MetricProposal.jsx:91:43","data-os-action":"","aria-label":"English metric label",value:b.en,maxLength:80,onChange:h=>E("en",h.target.value)})),n.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:92:9"},s("小数位数","Decimal places"),n.createElement("select",{"data-os-loc":"src/field/MetricProposal.jsx:92:44","data-os-action":"","aria-label":"Metric precision",value:b.precision,onChange:h=>E("precision",Number(h.target.value))},Array.from({length:11},(h,R)=>n.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:92:191",key:R},R))))),y?.error&&(p||b.id.trim())&&n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:94:60",role:"status"},L0[y.error][t?0:1]),y&&!y.error&&!S&&n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:95:49",role:"status"},s("等待 1050 和 1054 两帧。","Waiting for both frames.")),S&&n.createElement(n.Fragment,null,n.createElement("table",{"data-os-loc":"src/field/MetricProposal.jsx:97:9","aria-label":"Two-frame metric preview"},n.createElement("caption",{"data-os-loc":"src/field/MetricProposal.jsx:97:54"},(t?b.zh:b.en)+" · "+s("场景单位","scene units")),n.createElement("thead",{"data-os-loc":"src/field/MetricProposal.jsx:98:11"},n.createElement("tr",{"data-os-loc":"src/field/MetricProposal.jsx:98:18"},[s("帧号","Frame"),s("原值","Current"),s("预览","Preview"),s("共同有效点 / ROI 候选点","Common / candidate columns")].map(h=>n.createElement("th",{"data-os-loc":"src/field/MetricProposal.jsx:98:134",key:h},h)))),n.createElement("tbody",{"data-os-loc":"src/field/MetricProposal.jsx:99:11"},x.map(h=>n.createElement("tr",{"data-os-loc":"src/field/MetricProposal.jsx:99:35",key:h.frameId},n.createElement("th",{"data-os-loc":"src/field/MetricProposal.jsx:99:57"},h.frameId),n.createElement("td",{"data-os-loc":"src/field/MetricProposal.jsx:99:79"},_?C(_.read(h),_.precision??5):s("新增","New")),n.createElement("td",{"data-os-loc":"src/field/MetricProposal.jsx:99:155"},C(y.field.read(h),y.precision)),n.createElement("td",{"data-os-loc":"src/field/MetricProposal.jsx:99:217"},h.stats.common," / ",h.stats.candidates))))),n.createElement("details",{"data-os-loc":"src/field/MetricProposal.jsx:100:9",className:"proposal-diff"},n.createElement("summary",{"data-os-loc":"src/field/MetricProposal.jsx:100:44"},s("查看代码差异","View code changes")),n.createElement("pre",{"data-os-loc":"src/field/MetricProposal.jsx:100:96","aria-label":"Proposed code diff"},y.diff.split(`
`).slice(0,-1).map((h,R)=>n.createElement("span",{"data-os-loc":"src/field/MetricProposal.jsx:100:186",key:R,className:h.startsWith("+")?"diff-plus":h.startsWith("-")?"diff-minus":""},h,`
`)))),n.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:101:9",className:"proposal-downloads"},n.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:101:45","data-os-action":"",onClick:()=>Ms("B-"+y.id+".patch",new Blob([y.diff],{type:"text/plain"}))},s("下载补丁","Download patch")),n.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:102:9","data-os-action":"",onClick:()=>Ms("b-case-metrics.js",new Blob([y.source],{type:"text/javascript"}))},s("下载候选源码","Download candidate source"))),n.createElement(Y0,{key:y.source,proposal:y,base:f,body:A,zh:t}))):n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:85:154",role:"status"},s("正在读取指标源码…","Loading metric source…"))))}function J0({rows:e,zh:a,metrics:t,metric:s,metricId:c,onTrack:i,evidence:o,error:r,retry:f}){const d=(v,g)=>a?v:g,m=Ac(o),u=["Gentle / Best_1027","XZ (−0.95, 0.90)","ROI 1 × 1","X profile 0°",o.metricLabel,...o.readings.map(v=>v.frameId+": "+v.display+" "+o.units+" ("+v.common+"/"+v.candidates+")")].filter(Boolean).join(" · ");return n.createElement("section",{"data-os-loc":"src/field/ReviewMetrics.jsx:12:10",className:"review-metrics","aria-label":"B case collaboration"},n.createElement("h3",{"data-os-loc":"src/field/ReviewMetrics.jsx:13:5"},d("一起查看 B 区域","Review region B together")),r&&n.createElement("button",{"data-os-loc":"src/field/ReviewMetrics.jsx:14:15","data-os-action":"",onClick:f},d("重试加载追踪量","Retry loading metrics")),t.length>0&&n.createElement(n.Fragment,null,n.createElement("label",{"data-os-loc":"src/field/ReviewMetrics.jsx:15:28"},d("追踪量","Track a quantity")," ",n.createElement("select",{"data-os-loc":"src/field/ReviewMetrics.jsx:15:65","data-os-action":"",value:s?.id??"",onChange:v=>i(v.target.value)},!s&&n.createElement("option",{"data-os-loc":"src/field/ReviewMetrics.jsx:16:19",value:"",disabled:!0},d("请选择正式指标","Select an official metric")),t.map(v=>n.createElement("option",{"data-os-loc":"src/field/ReviewMetrics.jsx:17:27",key:v.id,value:v.id},a?v.zh:v.en)))),s?n.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:19:13","aria-live":"polite"},o.readings.map(v=>v.frameId+": "+v.display).join("　 /　 "),"　",d("场景单位","scene units")):n.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:20:7",role:"alert"},c?d("无法还原此指标，当前正式列表中没有 ","The current registry does not contain the recorded metric ")+c+d("。请选择指标。",". Select a metric."):d("原记录未注明追踪量，无法还原。请选择指标。","The original record did not specify a metric. Select a metric to continue."))),s&&n.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:23:16",className:"b-case-share"},n.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:23:44",href:m,target:"_blank",rel:"noreferrer"},d("分享当前视图给同事","Share this view with a colleague"))),n.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:24:5"},n.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:24:8",href:la+"/issues/1#new_comment_field",target:"_blank",rel:"noreferrer"},d("去公开 GitHub 参与案例讨论","Discuss this case on public GitHub"))),n.createElement(_i,{topic:"region-B-1050-1054",zh:a,subject:d("B 区域 · 1050 与 1054","Region B · 1050 and 1054"),context:u,viewLink:m}),n.createElement("details",{"data-os-loc":"src/field/ReviewMetrics.jsx:26:5",className:"b-case-source"},n.createElement("summary",{"data-os-loc":"src/field/ReviewMetrics.jsx:26:40"},d("指标源码与补丁","Metric source and patches")),n.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:27:7",href:la+"/edit/main/review/b-case-metrics.js",target:"_blank",rel:"noreferrer"},d("在 GitHub 编辑指标文件","Edit the metric file on GitHub")),t.length>0&&n.createElement(U0,{metrics:t,rows:e,zh:a})))}function ec(e,a){if(!Number.isFinite(e))return"#a7acb0";const t=e>=0?[186,58,44]:[35,97,159],s=Math.min(1,Math.abs(e)/(a||1));return"rgb("+t.map(c=>Math.round(250+(c-250)*s)).join(",")+")"}function nc(e){const a=e.map(i=>i.ix),t=e.map(i=>i.iz),s=Math.min(...a),c=Math.min(...t);return[s,c,Math.max(...a)-s+1,Math.max(...t)-c+1]}function ac({cells:e,limit:a,selection:t}){const[s,c,i,o]=nc(e),r=c+o-1,f=210/i,d=(t.ix-s+.5)*f,m=(r-t.iz+.5)*f;return n.createElement(n.Fragment,null,n.createElement("g",{"data-os-loc":"src/field/BCasePlots.jsx:22:5",shapeRendering:"crispEdges"},e.map(({ix:u,iz:v,error:g})=>n.createElement("rect",{"data-os-loc":"src/field/BCasePlots.jsx:23:7",key:u+","+v,x:(u-s)*f,y:(r-v)*f,width:f,height:f,fill:ec(g,a)}))),n.createElement("line",{"data-os-loc":"src/field/BCasePlots.jsx:26:5",x1:"0",x2:"210",y1:m,y2:m,stroke:"#182e36",strokeDasharray:"4 3"}),n.createElement("circle",{"data-os-loc":"src/field/BCasePlots.jsx:27:5",cx:d,cy:m,r:"5",stroke:"black",strokeWidth:"2",fill:"white"}))}function K0(e,a,t,s){const c=e.xmin-a,i=e.xmax-a;return{first:c,last:i,x:o=>(o-c)/(i-c)*335,y:o=>106-(o-t)/(s-t||1)*101}}function tc({points:e,scale:a,band:t}){function s(c){let i=!1;return e.map(o=>{if(!Number.isFinite(o[c]))return i=!1,"";const r=i?"L":"M";return i=!0,r+a.x(o.distance)+" "+a.y(o[c])}).join(" ")}return n.createElement(n.Fragment,null,t&&n.createElement("rect",{"data-os-loc":"src/field/BCasePlots.jsx:48:14",x:a.x(t.lo)-2,width:a.x(t.hi)-a.x(t.lo)+4,y:"0",height:"111",fill:"#f4df9c"}),n.createElement("line",{"data-os-loc":"src/field/BCasePlots.jsx:50:5",x1:a.x(0),x2:a.x(0),y1:"0",y2:"111",stroke:"#777",strokeDasharray:"2 3"}),n.createElement("path",{"data-os-loc":"src/field/BCasePlots.jsx:51:5",d:s("a"),stroke:"#13689e",fill:"none",strokeWidth:"2.5"}),n.createElement("path",{"data-os-loc":"src/field/BCasePlots.jsx:52:5",d:s("b"),stroke:"#ad6411",fill:"none",strokeWidth:"2.5",strokeDasharray:"7 3"}))}function pi({label:e,frame:a,kind:t,zh:s,children:c,legend:i,axis:o,canAnnotate:r}){const[f,d]=j.useState(!1),[m,u]=j.useState([0,1]),v=j.useRef(null),g=a+" · "+e;j.useLayoutEffect(()=>{const l=v.current;if(l.scrollLeft=(l.scrollWidth-l.clientWidth)/2,l.scrollTop=(l.scrollHeight-l.clientHeight)/2,!o)return;function b(){const B=l.querySelector("svg").getBoundingClientRect();if(!B.width)return;const E=(l.getBoundingClientRect().left-B.left)/B.width;u([Math.max(0,E),Math.min(1,E+l.clientWidth/B.width)])}b();const w=new ResizeObserver(b);return w.observe(l),l.addEventListener("scroll",b),()=>{w.disconnect(),l.removeEventListener("scroll",b)}},[f,!!o]);function p(l){window.dispatchEvent(new CustomEvent("oceanscope-review-figure",{detail:{figure:v.current.querySelector("svg"),trigger:l.currentTarget,label:g}}))}return n.createElement("figure",{"data-os-loc":"src/field/BCaseFigures.jsx:31:10",className:"b-plot b-"+t,"data-review-id":"b-"+a+"-"+t},n.createElement("figcaption",{"data-os-loc":"src/field/BCaseFigures.jsx:32:5"},e),n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:33:5",ref:v,className:"b-viewport","data-zoomed":f,tabIndex:f?0:void 0,role:"group","aria-label":g+(s?" · 图像区域":" · plot area")},c),o&&n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:37:14",className:"b-ticks"},[m[0],(m[0]+m[1])/2,m[1]].map((l,b)=>n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:38:7",key:b},(o.first+(o.last-o.first)*l).toFixed(2)))),i,n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:40:5",className:"b-plot-controls","data-os-tools":""},n.createElement("button",{"data-os-loc":"src/field/BCaseFigures.jsx:41:7","data-os-action":"",type:"button","aria-pressed":f,"aria-label":g+(s?" · 局部放大":" · local zoom"),onClick:()=>d(l=>!l)},f?s?"还原 1×":"Reset 1×":s?"放大 2×":"Zoom 2×"),n.createElement("button",{"data-os-loc":"src/field/BCaseFigures.jsx:43:7","data-os-action":"",type:"button",disabled:!r,"aria-label":g+(s?" · 批注这张图":" · Annotate this figure"),onClick:p},s?"批注这张图":"Annotate this figure")),f&&n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:47:16",className:"b-zoom-help"},s?"滑动查看局部；键盘可聚焦图像后用方向键移动。":"Scroll to pan, or focus the plot and use the arrow keys."))}function Q0({rows:e,data:a,limit:t,low:s,high:c,band:i,scale:o,evidence:r,zh:f}){const d=(b,w)=>f?b:w,m=j.useRef(null);j.useEffect(()=>{window.location.hash.startsWith("#mark=")||m.current.scrollIntoView({block:"start"})},[]);const u=d("场景单位","scene units"),v=d("带符号高度误差","Signed height error"),g=d("穿过中心的 X 剖面","X profile through the centre"),{roi:p,selection:l}=a;return n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:63:10",className:"b-case-figures"},n.createElement("h3",{"data-os-loc":"src/field/BCaseFigures.jsx:64:5",className:"b-case-heading",ref:m},d("固定 B 区域","Fixed region B")," · ",e.map(b=>b.frameId).join(" / ")),n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:65:5",className:"b-case-context"},n.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:65:35"},d("模型","Model")," Best_1027"),n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:65:80"},"GT · Gentle"),n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:66:7"}," XZ (",a.x.toFixed(2),", ",a.z.toFixed(2),")"),n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:67:7"},"ROI ",(p.xmax-p.xmin).toFixed(2)," × ",(p.zmax-p.zmin).toFixed(2)," ",u)),n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:68:5",className:"b-common-scale"},n.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:69:7"},d("两帧共用色标","Shared colour scale")),n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:70:7"},d("预测 − GT","Prediction − GT")," · ",u),n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:71:7",className:"b-ramp","aria-hidden":"true"}),n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:72:7",className:"b-ticks"},n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:72:32"},(-t).toFixed(3)," ",d("偏低","low")),n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:72:83"},"0"),n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:72:97"},"+",t.toFixed(3)," ",d("偏高","high")))),n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:74:5",className:"b-frame-grid"},e.map(b=>{const w=r.readings.find(B=>B.frameId===b.frameId);return n.createElement("article",{"data-os-loc":"src/field/BCaseFigures.jsx:76:14",className:"b-frame-card",key:b.frameId,"data-review-frame":b.frameId},n.createElement("h4",{"data-os-loc":"src/field/BCaseFigures.jsx:77:7"},d("帧","Frame")," ",b.frameId),n.createElement(pi,{frame:b.frameId,kind:"map",label:v,zh:f,canAnnotate:!!w,legend:n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:78:108",className:"b-map-notes"},n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:79:9",className:"b-plot-key"},"Z ↑　X →　",d("白点为中心，虚线为剖面","White centre point, dashed X section")),w&&n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:80:21",className:"b-readout b-tracked-reading"},r.metricLabel,n.createElement("br",{"data-os-loc":"src/field/BCaseFigures.jsx:80:86"}),n.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:80:91"},w.display)," ",u),n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:81:9",className:"b-readout"},d("中心差","Centre difference")," ",n.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:81:66"},b.centre?.difference?.toFixed(4)??"—")," ",u,n.createElement("br",{"data-os-loc":"src/field/BCaseFigures.jsx:81:134"}),d("共同有效 / 候选列","Common / candidate columns")," ",n.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:82:59"},b.stats.common," / ",b.stats.candidates)))},n.createElement("svg",{"data-os-loc":"src/field/BCaseFigures.jsx:84:9",viewBox:"0 0 210 210",role:"img","aria-label":b.frameId+" · "+v,"data-grid-window":nc(b.region.cells).join(","),"data-grid-origin":[a.x-l.ix*b.profile.step,a.z-l.iz*b.profile.step,b.profile.step].join(",")},n.createElement(ac,{cells:b.region.cells,limit:t,selection:l}))),n.createElement(pi,{frame:b.frameId,kind:"profile",label:g,zh:f,axis:o,canAnnotate:!!w,legend:n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:91:9",className:"b-plot-key"},d("横轴：距中心的 X 距离","X axis: distance from centre")," · ",u,n.createElement("br",{"data-os-loc":"src/field/BCaseFigures.jsx:91:95"}),d("纵轴：水面高度","Y axis: surface height")," ",s.toFixed(3)," … ",c.toFixed(3)," ",u),n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:93:9",className:"b-line-keys"},n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:93:36"},n.createElement("i",{"data-os-loc":"src/field/BCaseFigures.jsx:93:42",className:"b-line-gt"}),"GT"),n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:93:77"},n.createElement("i",{"data-os-loc":"src/field/BCaseFigures.jsx:93:83",className:"b-line-pred"}),d("预测","Prediction")),i&&n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:94:20"},n.createElement("i",{"data-os-loc":"src/field/BCaseFigures.jsx:94:26",className:"b-band"}),d("比较区段","Compared interval"))))},n.createElement("svg",{"data-os-loc":"src/field/BCaseFigures.jsx:96:9",viewBox:"0 0 335 111","data-profile-axis":[o.first,o.last,0,335].join(","),role:"img","aria-label":b.frameId+" · "+g},n.createElement(tc,{points:b.profile.points,scale:o,band:i}))))})),i&&n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:102:14",className:"b-band-note"},n.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:102:41"},d("黄色区段","Highlighted interval"),"　s = ",i.lo.toFixed(2)," … ",i.hi.toFixed(2)," ",u)," · ",d("两帧逐点比较正误差，这两个相邻采样占剖面正误差全部减少量的 ","These two adjacent samples account for "),(i.share*100).toFixed(1),"%",d("。"," of all decreases in positive profile error.")," ",d("1050 帧的 GT 从局部谷底向右抬升，1054 帧的同一位置仍靠近谷底。","Here the 1050 GT rises from a local trough. The same positions remain near the trough in 1054.")),n.createElement("details",{"data-os-loc":"src/field/BCaseFigures.jsx:106:5",className:"b-signed-stats"},n.createElement("summary",{"data-os-loc":"src/field/BCaseFigures.jsx:106:41"},d("查看带符号误差统计","Show signed-error statistics")),e.map(b=>n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:107:24",key:b.frameId},n.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:107:45"},b.frameId)," · ",d("区域偏差","ROI bias")," ",b.stats.bias?.toFixed(4)??"—"," ·"," ",d("偏高列均值","Mean positive")," ",b.region.counts[4]?.toFixed(4)??"—"," ·"," ",d("偏低列均值","Mean negative")," ",b.region.counts[5]?.toFixed(4)??"—"," ",u))))}function ed(e,a){const{shape:[t,s],originXYZ:[c,,i],spacing:o}=e.descriptor,r=[];for(let g=0;g<t;g++){const p=i+g*o;if(!(p<a.zmin||p>a.zmax))for(let l=0;l<s;l++){const b=c+l*o,w=g*s+l;b<a.xmin||b>a.xmax||r.push({ix:l,iz:g,error:e.common[w]?e.heightB[w]-e.heightA[w]:null})}}const f=r.map(g=>g.error).filter(Number.isFinite).sort((g,p)=>g-p),d=f.filter(g=>g>0),m=f.filter(g=>g<0),u=g=>g.length?g.reduce((p,l)=>p+l,0)/g.length:null,v=f.length;return{cells:r,counts:[v,d.length,m.length,v-d.length-m.length,u(d),u(m),v?(f[Math.floor((v-1)/2)]+f[Math.floor(v/2)])/2:null,u(f)]}}const Ia=e=>e==null?"—":e.toFixed(4);function nd(e){const[a,t]=e.map(i=>i.profile.points),s=a.map((i,o)=>Number.isFinite(i.difference)&&Number.isFinite(t[o]?.difference)?Math.max(0,i.difference)-Math.max(0,t[o].difference):null);let c=null;for(let i=1;i<s.length;i++){if(s[i-1]==null||s[i]==null)continue;const o=s[i-1]+s[i];(!c||o>c.sum)&&(c={sum:o,i})}return{lo:a[c.i-1].distance,hi:a[c.i].distance,share:c.sum/s.reduce((i,o)=>i+Math.max(0,o??0),0)}}function ad({data:e,bundle:a,zh:t,metricId:s,onTrack:c,recorded:i}){const o=j.useRef(null),r=(h,R)=>t?h:R,[f,d]=j.useState([]),[m,u]=j.useState(!1),[v,g]=j.useState(0);j.useEffect(()=>{let h=!0;const R=new URL(dn,document.baseURI);return v&&R.searchParams.set("retry",String(v)),import(R.href).then(M=>{h&&(d(M.metrics),u(!1))}).catch(()=>{h&&u(!0)}),()=>{h=!1}},[v]);const p=e.rows.filter(h=>kc.includes(h.frameId)),l=f.find(h=>h.id===s),b=Mc({bundle:a,selection:e.selection,rows:p,metric:l,metricId:s,language:t?"zh":"en"});if(i)try{wi(i,a,e.selection)}catch(h){return n.createElement("p",{"data-os-loc":"src/field/BPairCase.jsx:59:23",role:"alert"},h.message)}const w=!!(i&&l&&(i.metricLabel!==l[i.language]||!Rc(i.readings,b.readings))),B=Math.max(...p.flatMap(h=>h.region.cells.map(R=>Math.abs(R.error??0)))),E=p.flatMap(h=>h.profile.points.flatMap(R=>[R.a,R.b])).filter(Number.isFinite),y=Math.min(...E),_=Math.max(...E),x=nd(p),S=K0(e.roi,e.x,y,_),C=["frame","common","positive","negative","zero","mean_positive","mean_negative","median","roi_bias"];function A(h){let R,M;if(h==="svg"&&(R=o.current.outerHTML,M="image/svg+xml"),h==="csv"&&(R=Pc(b),M="text/csv"),h==="signed"){const N=[C,...e.rows.map(F=>[F.frameId,...F.region.counts])].map(F=>F.join(",")).join(`\r
`)+`\r
`;Mn("OceanScope-B-1049-1054-signed-error.csv","text/csv",N);return}h==="json"&&(R=JSON.stringify({...ji(a,e,1050),caseView:Si,review:b,signedScale:[-B,B],band:x,signedStats:e.rows.map(N=>Object.fromEntries(C.map((F,V)=>[F,[N.frameId,...N.region.counts][V]])))},null,2),M="application/json"),Mn("OceanScope-B-1050-1054."+h,M,R)}return n.createElement("section",{"data-os-loc":"src/field/BPairCase.jsx:84:10","data-b-review":JSON.stringify(b),"data-review-frame":"1050 / 1054","aria-label":"B paired frame case"},n.createElement(Q0,{rows:p,data:e,limit:B,low:y,high:_,band:x,scale:S,evidence:b,zh:t}),n.createElement("div",{"data-os-loc":"src/field/BPairCase.jsx:86:5",hidden:!0},n.createElement("svg",{"data-os-loc":"src/field/BPairCase.jsx:86:17",ref:o,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 960 765",style:{width:"100%",maxWidth:960},role:"img","aria-label":r("B 区域两帧误差与剖面","B region paired error maps and profiles")},n.createElement("rect",{"data-os-loc":"src/field/BPairCase.jsx:87:5",width:"960",height:"765",fill:"#fafaf8"}),n.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:88:5",fill:"#173447",fontFamily:"sans-serif",fontSize:"16"},n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:89:5",x:"30",y:"40",fontSize:"26",fontWeight:"bold"},r("B 区域 · 中心仍偏高，区域平均转负","Region B · positive centre, changing regional bias")),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:90:5",x:"30",y:"69"},"Best_1027 · XZ (−0.95, 0.90) · ROI 1 × 1 · ",r("剖面沿 X，长度按场景单位","X profile, source length units")),l&&n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:91:16",x:"30",y:"88",fontSize:"15",fontWeight:"bold"},b.metricLabel," (",l.id,") · ",b.readings.map(h=>h.frameId+" = "+h.display+" ["+h.common+"/"+h.candidates+"]").join("   /   ")," · ",r("场景单位 · [共同有效/候选列]","scene units · [common/candidate columns]")),p.map((h,R)=>{const M=40+R*468,N=128,F=H=>M+36+S.x(H),V=H=>423+S.y(H);return n.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:95:14",key:h.frameId},n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:95:33",x:M,y:"109",fontWeight:"bold",fontSize:"23"},h.frameId),n.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:96:9",transform:"translate("+M+" "+N+")"},n.createElement(ac,{cells:h.region.cells,limit:B,selection:e.selection})),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:97:9",x:M+222,y:"172"},"Z ↑   X →"),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:97:52",x:M+222,y:"205"},r("中心差","Centre Δh")," ",Ia(h.centre.difference)),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:98:9",x:M+222,y:"232"},"ROI bias ",Ia(h.stats.bias)),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:98:71",x:M+222,y:"259"},"n = ",h.region.counts[0]),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:99:9",x:M,y:"368"},r("偏高列均值","Mean positive")," ",Ia(h.region.counts[4]),"　 ",r("偏低列均值","Mean negative")," ",Ia(h.region.counts[5])),n.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:100:9",transform:"translate("+(M+36)+" 423)"},n.createElement(tc,{points:h.profile.points,scale:S,band:x})),[y,_].map(H=>n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:101:28",x:M-8,y:V(H)+4,fontSize:"12",key:H},H.toFixed(2))),[-.5,0,.5].map(H=>n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:102:28",key:H,x:F(H),y:"551",textAnchor:"middle",fontSize:"13"},H.toFixed(1))))}),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:105:5",x:"38",y:"400"},r("带符号误差（预测 − GT）","Signed error (prediction − GT)")),Array.from({length:81},(h,R)=>n.createElement("rect",{"data-os-loc":"src/field/BPairCase.jsx:106:36",key:R,x:385+R*3,y:"385",width:"3",height:"14",fill:ec((R-40)*B/40,B)})),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:107:5",x:"328",y:"399"},(-B).toFixed(3)),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:107:55",x:"500",y:"380"},"0"),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:107:85",x:"638",y:"399"},"+",B.toFixed(3)),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:108:5",x:"38",y:"583"},r("剖面横轴为距中心的 X 距离，纵轴为水面高度。蓝线 GT，橙线预测。","Horizontal: X distance from centre. Vertical: surface height. Blue GT, orange prediction.")),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:109:5",x:"38",y:"625",fontWeight:"bold"},r("偏高减小最集中的相邻两点","Adjacent pair with the largest reduction in positive error"),"　s = ",x.lo.toFixed(2)," … ",x.hi.toFixed(2)),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:110:5",x:"38",y:"659"},r("黄色标记该区段。逐点取正误差，再比较两帧；这两点占剖面全部正向减小量的","Gold marks the interval. These points account for this share of all decreases in positive error:")," ",(x.share*100).toFixed(1),"%."),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:111:5",x:"38",y:"695"},r("该段位于 1050 帧 GT 由局部谷底向右抬升处。1054 帧同一位置仍靠近低谷。","In 1050 the GT rises out of a local trough here. In 1054 these positions remain near the trough.")),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:112:5",x:"38",y:"735"},r("两帧比较固定世界位置。白点为中心，虚线为穿过中心的 X 剖面。","World positions are fixed. White circle: centre. Dashed line: X section through centre."))))),w&&n.createElement("p",{"data-os-loc":"src/field/BPairCase.jsx:114:18",role:"alert"},r("原记录与当前正式指标的数值或有效列不同。请核对原文件，然后重新选择指标。","The saved values or column counts differ from the current metric. Check the original record and select a metric again.")),n.createElement(J0,{rows:p,zh:t,metrics:f,metric:l,metricId:s,onTrack:c,evidence:b,error:m,retry:()=>g(h=>h+1)}),["svg","csv","json"].map(h=>n.createElement("button",{"data-os-loc":"src/field/BPairCase.jsx:116:36","data-os-action":"",key:h,disabled:!l||w,onClick:()=>A(h)},h==="csv"?r("下载 B 两帧指标摘要 CSV","Download B two-frame metric summary CSV"):r("下载 B 案例","Download B case")+" "+h.toUpperCase())),n.createElement("button",{"data-os-loc":"src/field/BPairCase.jsx:117:5","data-os-action":"",onClick:()=>A("signed")},r("下载 B 带符号误差明细 CSV（1049–1054）","Download B signed-error details CSV (1049–1054)")))}const sa=e=>Number.isFinite(e)?e.toFixed(4):"—";function sc(e,a){const t=e.spacing,s=a==="A"?176:174,c=a==="A"?90:69,i=e.originXYZ[0]+s*t,o=e.originXYZ[2]+c*t;return{sourceFrame:e.frameId,ix:s,iz:c,x:i,z:o,roi:{xmin:i-10*t,xmax:i+10*t,zmin:o-10*t,zmax:o+10*t},directionDeg:0}}async function td(e,a,t){const s=await Xa(ua,Za.indexSha256,e),c=s.frames.find(_=>_.frameId===1049),i=c.spacing,o=typeof a=="string"?sc(c,a):a,{ix:r,iz:f,sourceFrame:d,roi:m,directionDeg:u}=o,v=s.frames.find(_=>_.frameId===d);if(!v||!Number.isInteger(r)||!Number.isInteger(f)||r<0||f<0||r>=v.shape[1]||f>=v.shape[0])throw Error("Invalid hotspot index");const g=v.originXYZ[0]+r*v.spacing,p=v.originXYZ[2]+f*v.spacing,l=Qa({descriptor:v});if(!Number.isFinite(u)||u<0||u>=180||!m||!["xmin","xmax","zmin","zmax"].every(_=>Number.isFinite(m[_]))||m.xmin>=m.xmax||m.zmin>=m.zmax||m.xmin<l.xmin||m.xmax>l.xmax||m.zmin<l.zmin||m.zmax>l.zmax||g<m.xmin||g>m.xmax||p<m.zmin||p>m.zmax)throw Error("Select an ROI containing the hotspot and a valid profile angle");const b={sourceFrame:d,ix:r,iz:f,x:g,z:p,roi:m,directionDeg:u};if(g!==o.x||p!==o.z)throw Error("Hotspot world coordinates differ from source");const w=await ma(v,{...Xn(e),frameId:d},t);if(!w.common[f*v.shape[1]+r])throw Error("Source hotspot is outside common support");const B=[];for(const _ of Fc){const x=s.frames.find(R=>R.frameId===_),S=_===d?w:await ma(x,{...Xn(e),frameId:_},t),C=Rt(S,{x:g,z:p,directionDeg:u});C.points=C.points.filter(R=>R.x>=m.xmin-1e-9&&R.x<=m.xmax+1e-9&&R.z>=m.zmin-1e-9&&R.z<=m.zmax+1e-9);const A=C.points.find(R=>Math.abs(R.distance)<1e-9),h=r===174&&f===69&&u===0&&m.xmin===g-10*i&&m.xmax===g+10*i&&m.zmin===p-10*i&&m.zmax===p+10*i?ed(S,m):null;B.push({region:h,frameId:_,profile:C,centre:A,stats:Zn(S,m)})}const E=B.flatMap(_=>_.profile.points),y=E.flatMap(_=>[_.a,_.b]).filter(Number.isFinite);return{selection:b,x:g,z:p,roi:m,rows:B,limits:y.length?[Math.min(...y),Math.max(...y)]:[0,1],error:Math.max(1e-9,...E.map(_=>Math.abs(_.difference??0)))}}function sd({bundle:e,zh:a,getSelection:t}){const{setLanguage:s}=fe(),[c,i]=j.useState(()=>Ba()?"B":null),[o,r]=j.useState(()=>Ba()?1050:1049),[f,d]=j.useState(null),[m,u]=j.useState(Ba),[v,g]=j.useState(()=>Rs(new URLSearchParams(window.location.search))),[p,l]=j.useState(()=>{const h=Ga();return Ps(h)?h.bReview:null}),[b,w]=j.useState(""),B=j.useRef(null),E=j.useRef(0);function y(h,R=1049,M=!1,N=v,F=null){E.current++,u(M),w(""),i(h),r(R),l(F);const V=new URL(window.location.href);if(M)g(N),Ns(V,N,F?.language||(a?"zh":"en")),V.hash="#analysis-height";else if(Ba()){for(const H of["review","metric","proposal"])V.searchParams.delete(H);V.hash="#analysis-height"}window.history.replaceState(window.history.state,"",V)}function _(h){window.dispatchEvent(new Event("oceanscope-dismiss-mark")),E.current++,l(null),g(h);const R=Ns(new URL(window.location.href),h,a?"zh":"en");R.hash="#analysis-height",window.history.replaceState(window.history.state,"",R)}j.useEffect(()=>{const h=()=>{if(window.location.hash.startsWith("#mark="))return;const R=new URLSearchParams(window.location.search);R.get("review")==="b-pair"?(E.current++,l(null),u(!0),i("B"),r(1050),g(Rs(R)),w("")):m&&(E.current++,l(null),u(!1),i(null),w(""))};return window.addEventListener("popstate",h),()=>window.removeEventListener("popstate",h)},[m]),j.useEffect(()=>{const h=R=>{const M=R.detail;Ps(M)&&(E.current++,w(""),u(!0),i("B"),r(1050),l(M.bReview||null),g(M.bReview?.metricId||""))};return window.addEventListener(Is,h),()=>window.removeEventListener(Is,h)},[]);async function x(h){if(!h)return;const R=++E.current;try{if(h.size>8*1024*1024)throw Error("Report exceeds 8 MiB");const M=JSON.parse(await h.text()),N=Ic(M,e);if(!N||typeof N!="object")throw Error("Invalid report selection");const F=M.caseView===Si;if(F){const V=JSON.parse(ua).frames.find(J=>J.frameId===1049),H=sc(V,"B");if(!Nc(H,N))throw Error(a?"报告的选区或剖面与固定 B 区域不符。":"The report ROI or profile differs from the fixed B region.");M.review!=null&&wi(M.review,e,H)}R===E.current&&(y(N,M.selectedFrame,F,M.review?.metricId??"",F?M.review:null),F&&M.review&&s(M.review.language))}catch(M){R===E.current&&w(M.message)}}j.useEffect(()=>{if(!c)return;const h=new AbortController;return td(e,c,h.signal).then(R=>{h.signal.aborted||d({bundle:e,location:c,data:R})}).catch(R=>{h.signal.aborted||d({bundle:e,location:c,error:R.message})}),()=>h.abort()},[e,c]);const S=f?.bundle===e&&f.location===c?f:null,C=S?.data,A=C?.rows.find(h=>h.frameId===o);return n.createElement("section",{"data-os-loc":"src/field/FixedWaveWindow.jsx:146:10","data-review-frame":A?.frameId,ref:B,"aria-label":"Fixed ROI wave window"},n.createElement("h3",{"data-os-loc":"src/field/FixedWaveWindow.jsx:146:101"},a?"固定选区波形 · 1049–1054":"Fixed ROI wave profiles · 1049–1054"),["A","B"].map(h=>n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:147:24","data-os-action":"",key:h,"aria-pressed":c===h,onClick:()=>y(h)},a?"固定区域 ":"Fixed region ",h)),n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:148:5","data-os-action":"",onClick:()=>y("B",1050,!0)},a?"B 区域：1050 与 1054":"Compare B: 1050 and 1054"),n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:149:5","data-os-action":"",onClick:()=>{try{y(t())}catch(h){w(h.message)}}},a?"使用当前热点与选区":"Use current hotspot and ROI"),n.createElement("label",{"data-os-loc":"src/field/FixedWaveWindow.jsx:150:5"},a?"恢复六帧 JSON":"Restore six-frame JSON"," ",n.createElement("input",{"data-os-loc":"src/field/FixedWaveWindow.jsx:150:54","data-os-action":"",type:"file","aria-label":"Restore six-frame JSON",accept:".json",onChange:h=>{x(h.target.files[0]),h.target.value=""}})),b&&n.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:151:17",role:"alert"},b),c&&!S&&n.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:152:29",role:"status"},a?"正在读取六帧高度…":"Loading six height frames…"),S?.error&&n.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:153:23",role:"alert"},S.error," ",n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:153:54","data-os-action":"",onClick:()=>i(null)},a?"重置":"Reset")),m&&C&&(!C.rows[0].region||C.selection.sourceFrame!==1049)?n.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:155:7",role:"alert"},a?"B 案例固定选区或来源帧不符。":"The fixed B region or source frame does not match."):m&&C&&n.createElement(ad,{data:C,bundle:e,zh:a,metricId:v,recorded:p,onTrack:_}),A&&n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:157:15"},"XZ (",sa(C.x),", ",sa(C.z),") · ",C.selection.directionDeg,"° · ",a?"固定世界位置。蓝 GT，橙预测，紫色为预测减 GT。":"Fixed world position. Blue GT, orange prediction, purple prediction minus GT."),n.createElement("table",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:5"},n.createElement("thead",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:12"},n.createElement("tr",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:19"},(a?["帧","中心高度差","ROI 平均偏差","ROI MAE","共同有效 / 候选"]:["Frame","Centre height difference","ROI mean bias","ROI MAE","Common / candidate"]).map(h=>n.createElement("th",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:167",key:h},h)))),n.createElement("tbody",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:5"},C.rows.map(h=>n.createElement("tr",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:30","data-review-frame":h.frameId,key:h.frameId},n.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:80"},n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:84","data-os-action":"","aria-pressed":o===h.frameId,onClick:()=>r(h.frameId)},h.frameId)),n.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:7"},sa(h.centre?.difference)),n.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:46"},sa(h.stats.bias)),n.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:77"},sa(h.stats.mae)),n.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:107"},h.stats.common," / ",h.stats.candidates))))),n.createElement(Ot,{reviewId:"fixed-wave-"+A.region,profile:A.profile,roi:C.roi,limits:C.limits,errorLimit:C.error,label:(a?"固定剖面 ":"Fixed profile ")+o}),n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:162:5","data-os-action":"",onClick:()=>Mn("OceanScope-six-frame.json","application/json",JSON.stringify(ji(e,C,o),null,2))},a?"下载六帧 JSON":"Download six-frame JSON"),n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:163:5","data-os-action":"",onClick:()=>Mn("OceanScope-six-frame.csv","text/csv",["frame,hotspot_difference,roi_bias,roi_mae,common,candidate",...C.rows.map(h=>[h.frameId,h.centre?.difference,h.stats.bias,h.stats.mae,h.stats.common,h.stats.candidates].join(","))].join(`
`))},a?"下载逐帧 CSV":"Download six-frame CSV"),n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:164:5","data-os-action":"",onClick:()=>{const h=B.current.querySelector(":scope > figure svg").cloneNode(!0);h.setAttribute("xmlns","http://www.w3.org/2000/svg"),Mn("OceanScope-profile-"+o+".svg","image/svg+xml",h.outerHTML)}},a?"下载当前剖面 SVG":"Download profile SVG")),n.createElement(X0,{zh:a}),n.createElement(V0,{zh:a}))}function id({zh:e}){const a=[{id:"MAE",name:e?"平均绝对误差":"Mean absolute error",formula:"MAE = Σ|eᵢ| / N",meaning:e?"平均差多少，不区分偏高或偏低。越接近 0 越好。":"Average error size, regardless of direction. Closer to 0 is better."},{id:"Bias",name:e?"平均有符号偏差":"Mean signed error",formula:"Bias = Σeᵢ / N",meaning:e?"正值表示预测偏高，负值表示偏低。正负误差会抵消，所以 Bias 接近 0 不代表每个位置都准确。":"Positive means the prediction is higher; negative means lower. Opposite errors can cancel, so a near-zero bias does not guarantee small errors."},{id:"RMSE",name:e?"均方根误差":"Root mean square error",formula:"RMSE = √(Σeᵢ² / N)",meaning:e?"先平方、求平均，再开平方，对较大的误差更敏感。越接近 0 越好；它不是最大误差。":"Square the errors, average them, then take the square root. More sensitive to large errors; closer to 0 is better. This is not the maximum error."}];return n.createElement("details",{"data-os-loc":"src/field/HeightMetricHelp.jsx:9:9",className:"height-metric-help"},n.createElement("summary",{"data-os-loc":"src/field/HeightMetricHelp.jsx:10:3"},e?"MAE、Bias、RMSE 怎么看？说明与公式":"How to read MAE, Bias and RMSE — definitions & formulas"),n.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:11:3",className:"height-metric-help-body"},n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:12:4"},e?"先在同一位置比较水面高度：Aᵢ 是 GT（参考值），Bᵢ 是预测值，eᵢ = Bᵢ − Aᵢ。以下高度与误差统一用 cm 表示；1 m = 100 cm。":"Compare heights at the same location: Aᵢ is GT (the reference), Bᵢ is the prediction, and eᵢ = Bᵢ − Aᵢ. Heights and errors below use cm; 1 m = 100 cm."),n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:13:4"},e?"N 是当前统计范围内两边都有有效高度的位置数，也叫“共同列”。每个 (X, Z) 位置对应一条竖直列，取其最上层水面高度。Σ 表示将这 N 个位置的数相加。缺失位置不补零；N = 0 时不提供误差分数。":"N is the number of locations with valid heights in both datasets within the current scope, also called common columns. Each (X, Z) location defines a vertical column with a topmost surface height. Σ sums over these N locations. Missing locations are not filled with zero; no error score is available when N = 0."),n.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:4",className:"height-metric-formulas"},a.map(t=>n.createElement("article",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:61",key:t.id},n.createElement("h3",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:84"},t.id," · ",t.name),n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:116",className:"height-metric-formula"},t.formula),n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:171"},t.meaning)))),n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:15:4",className:"height-metric-example"},n.createElement("strong",{"data-os-loc":"src/field/HeightMetricHelp.jsx:15:41"},e?"小例子：":"Example: "),e?"两个位置分别偏低 1 cm、偏高 3 cm，即 e = −1、+3 cm。MAE = 2 cm，Bias = +1 cm，RMSE = √5 ≈ 2.24 cm。三个指标从不同角度描述同一组误差。":"At two locations, the prediction is 1 cm lower and 3 cm higher: e = −1, +3 cm. MAE = 2 cm, Bias = +1 cm, and RMSE = √5 ≈ 2.24 cm. The metrics describe different aspects of the same errors."),n.createElement("dl",{"data-os-loc":"src/field/HeightMetricHelp.jsx:16:4",className:"height-metric-scopes"},n.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:5"},n.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:10"},e?"当前帧 · 全域":"Current frame · Full domain"),n.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:64"},e?"当前这一帧内，所有共同有效位置的统计；不是全部 96 帧的平均。":"All paired valid locations in this frame; not an average over all 96 frames.")),n.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:5"},n.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:10"},e?"选区 · ROI":"Selected region · ROI"),n.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:58"},e?"只统计已应用的矩形选区内的位置。ROI 是“感兴趣区域”；改变选区不会改变当前帧全域或全序列评分。":"Only locations inside the applied rectangle. ROI means region of interest. Changing it does not change full-frame or sequence scores.")),n.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:5"},n.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:10"},e?"单点探针 / 截面":"Point probe / Profile"),n.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:59"},e?"探针读数来自一个点击位置；曲线沿当前整条截面显示，并不自动裁剪到 ROI。两者都不能当作选区平均值。":"The probe reads one clicked location. The profile follows the current full section and is not automatically cropped to the ROI. Neither is an ROI average."))),n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:21:4"},e?"这些是水面高度误差，不是 SDF 场误差或速度误差。此处单位为 cm；固定协议的全序列指标及 %R 请到“时间分析”查看。":"These are surface-height errors, not SDF-field or velocity errors. Values here use cm. Open Time analysis for fixed-protocol sequence metrics and %R.")))}const Ce=(e,a=1)=>e==null?"—":(e*a).toFixed(4);function ca(e){const{shape:[a,t],originXYZ:[s,,c],spacing:i}=e.descriptor;return{xmin:s,xmax:s+(t-1)*i,zmin:c,zmax:c+(a-1)*i}}function cd(e){let a=1/0,t=-1/0,s=0;for(let c=0;c<e.heightA.length;c++){for(const i of["A","B"])e["wet"+i][c]&&(a=Math.min(a,e["height"+i][c]),t=Math.max(t,e["height"+i][c]));e.common[c]&&(s=Math.max(s,Math.abs(e.heightB[c]-e.heightA[c])))}return{height:Number.isFinite(a)?[a,t>a?t:a+1]:[0,1],error:Math.max(s,1e-9)}}function od({spatial:e,kind:a,range:t,roi:s,probe:c,profile:i,onRegion:o,onProbe:r,label:f,absolute:d=!1,diagnosis:m,mode:u,onPause:v}){const g=j.useRef(null),p=j.useRef(null),[l,b]=e.descriptor.shape,w=ca(e),B=a==="difference"?null:e[a],E=a==="difference"?e.common:e[a==="heightA"?"wetA":"wetB"];j.useEffect(()=>{const C=g.current,A=C?.getContext("2d");if(!A)return;const h=A.createImageData(b,l);for(let M=0;M<l;M++)for(let N=0;N<b;N++){const F=M*b+N,V=((l-1-M)*b+N)*4;if(!E[F]){h.data.set([225,230,235,255],V);continue}const H=e.heightB[F]-e.heightA[F],J=B?B[F]:d?Math.abs(H):H,q=Math.max(0,Math.min(1,(J-t[0])/(t[1]-t[0]))),Y=a==="difference"&&!d?q<.5?[80+350*q,130+230*q,220+70*q]:[255,245-350*(q-.5),255-440*(q-.5)]:[35+195*q,75+155*q,155+70*q];h.data.set([...Y,255],V)}A.putImageData(h,0,0);const R=(M,N)=>[(M-w.xmin)/e.descriptor.spacing+.5,l-.5-(N-w.zmin)/e.descriptor.spacing];if(m){const M=Hn(e,m);for(const N of[M.first,M.second])A.strokeStyle="#15373e",A.beginPath(),N.points.forEach((F,V)=>A[V?"lineTo":"moveTo"](...R(F.x,F.z))),A.stroke()}if(!m&&i?.points.length&&(A.strokeStyle="#172c43",A.lineWidth=1,A.beginPath(),i.points.forEach((M,N)=>A[N?"lineTo":"moveTo"](...R(M.x,M.z))),A.stroke()),s){const[M,N]=R(s.xmin,s.zmax),[F,V]=R(s.xmax,s.zmin);if(A.strokeStyle="#111",A.lineWidth=1,A.strokeRect(M,N,F-M,V-N),u==="adjust")for(const[H,J]of[[M,N],[M,V],[F,N],[F,V]])A.fillRect(H-1.5,J-1.5,3,3)}if(c){const[M,N]=R(c.x,c.z);A.strokeStyle="#111",A.beginPath(),A.moveTo(M-3,N),A.lineTo(M+3,N),A.moveTo(M,N-3),A.lineTo(M,N+3),A.stroke()}},[e,a,t[0],t[1],s,c,i,d,m,u]);function y(C){const A=C.currentTarget.getBoundingClientRect(),h=getComputedStyle(C.currentTarget),R={left:A.left,top:A.top,width:A.width,height:A.height};for(const V of["Left","Right","Top","Bottom"])R["border"+V]=parseFloat(h["border"+V+"Width"])||0;const{ix:M,iz:N,index:F}=Tc(R,C.clientX,C.clientY,[l,b]);return{x:w.xmin+M*e.descriptor.spacing,z:w.zmin+N*e.descriptor.spacing,index:F}}function _(C,A){if(u!=="adjust"||!A.roi)return{xmin:Math.min(A.x,C.x),xmax:Math.max(A.x,C.x),zmin:Math.min(A.z,C.z),zmax:Math.max(A.z,C.z)};const h=A.roi,R=e.descriptor.spacing,M=C.x-A.x,N=C.z-A.z;let F;return A.corner?(F={...h,[A.corner[0]]:C.x,[A.corner[1]]:C.z},F.xmax-F.xmin<R||F.zmax-F.zmin<R?h:ba(F,w).roi):(F={xmin:h.xmin+M,xmax:h.xmax+M,zmin:h.zmin+N,zmax:h.zmax+N},ba(F,w,{mode:"move"}).roi)}function x(C){if(!p.current)return;const A=y(C),h=p.current;p.current=null,u==="adjust"?o(_(A,h)):A.index===h.index?r(A):o(_(A,h))}function S(C){const A=y(C),h=e.descriptor.spacing;let R=null;if(s&&u==="adjust"){const M=["xmin","xmax"].find(F=>Math.abs(A.x-s[F])<2*h),N=["zmin","zmax"].find(F=>Math.abs(A.z-s[F])<2*h);M&&N&&(R=[M,N])}u==="adjust"&&s&&!R&&(A.x<s.xmin||A.x>s.xmax||A.z<s.zmin||A.z>s.zmax)||(p.current={...A,roi:s,corner:R},v?.(),C.currentTarget.setPointerCapture?.(C.pointerId))}return n.createElement("figure",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:54:9","data-review-id":"native-height-"+a+(a==="difference"&&d?"-absolute":"")},n.createElement("figcaption",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:54:103"},f),n.createElement("canvas",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:54:135","data-os-action":"","data-renderer":"native-height","data-review-frame":e.descriptor.frameId,"data-grid-origin":[w.xmin,w.zmin,e.descriptor.spacing].join(","),ref:g,width:b,height:l,"data-hotspot-index":m?.hotspot.index??"","aria-label":a==="heightA"?"GT height map":a==="heightB"?"Prediction height map":d?"Absolute height difference map":"Signed height difference map",onPointerDown:S,onPointerMove:C=>{p.current&&u==="adjust"&&o(_(y(C),p.current))},onPointerUp:x,onPointerCancel:()=>{p.current?.roi&&u==="adjust"&&o(p.current.roi),p.current=null}}),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:54:799"},"X ",Ce(w.xmin),"…",Ce(w.xmax)," · Z ",Ce(w.zmin),"…",Ce(w.zmax)," m"),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:54:909"},Ce(t[0])," … ",Ce(t[1])," m"))}function rd({profile:e,zh:a}){const t=e.points,s=t.flatMap(u=>[u.a,u.b]).filter(Number.isFinite),c=t.map(u=>u.difference).filter(Number.isFinite);if(!s.length)return n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:58:27",role:"status"},a?"此剖面没有有效高度。":"No valid heights on this profile.");const i=Math.min(...s),o=Math.max(...s),r=Math.max(o-i,1e-9),f=Math.max(...c.map(Math.abs),1e-9),d=Math.max(t.at(-1)?.distance||0,1e-9);function m(u,v=!1){let g=!1;return t.map(p=>{if(p[u]===null)return g=!1,"";const l=42+p.distance/d*640,b=v?235-p[u]/f*42:166-(p[u]-i)/r*130,w=g?"L":"M";return g=!0,`${w}${l},${b}`}).join(" ")}return n.createElement("figure",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:9","data-review-id":"protocol-height-profile","data-profile-axis":[0,d,42,682].join(","),className:"protocol-profile"},n.createElement("figcaption",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:137"},a?"同一截面 · 蓝色GT／橙色预测 · B−A":"Same section · blue GT / orange prediction · B−A"," · ",e.sampling==="native_columns"?a?"原生列":"Native columns":a?"四邻点共同有效 · 插值诊断":"Four valid neighbors · interpolated diagnosis"),n.createElement("svg",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:380",viewBox:"0 0 720 300",role:"img","aria-label":"Protocol height profile"},n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:455",x:"8",y:"18"},"Y (m)"),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:486",x:"42",y:"30"},Ce(o)),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:526",x:"42",y:"185"},Ce(i)),n.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:567",d:m("a"),fill:"none",stroke:"#2583c5",strokeWidth:"2"}),n.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:633",d:m("b"),fill:"none",stroke:"#e08b22",strokeWidth:"2"}),n.createElement("line",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:699",x1:"42",y1:"235",x2:"682",y2:"235",stroke:"#798699",strokeDasharray:"4 3"}),n.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:780",d:m("difference",!0),fill:"none",stroke:"#9b4778",strokeWidth:"1.5"}),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:862",x:"4",y:"220"},"B−A"),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:892",x:"4",y:"240"},"0"),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:920",x:"600",y:"295"},Ce(d)," m"),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:969",x:"44",y:"295"},a?"沿截面距离":"Section distance"," · ±",Ce(f)," m")))}function ui({value:e,label:a,zh:t}){return n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:63:43",className:"protocol-metrics","aria-label":a},n.createElement("strong",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:64:2"},a==="ROI metrics"?t?"选区 · 水面高度":"ROI · Surface height":t?"当前帧全域 · 水面高度":"Full frame · Surface height"),n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:2",className:"protocol-metric-cards"},n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:66:3"},n.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:66:8"},t?"有效对比点":"Paired valid locations"," ",e.common),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:66:73"},t?"共同列 · 两边都有有效高度":"Common columns · valid heights in both")),e.common?n.createElement(n.Fragment,null,n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:68:4"},n.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:68:9"},"MAE ",Ce(e.mae_m,100)," cm"),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:68:54"},t?"平均差多少 · 越小越好":"Average error size · lower is better")),n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:69:4"},n.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:69:9"},"Bias ",Ce(e.bias_m,100)," cm"),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:69:56"},t?"平均偏差 · 正值偏高，负值偏低":"Mean signed error · positive higher, negative lower")),n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:70:4"},n.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:70:9"},"RMSE ",Ce(e.rmse_m,100)," cm"),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:70:56"},t?"对大误差更敏感 · 越小越好":"More sensitive to large errors · lower is better"))):n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:71:7"},t?"不可用：无共同有效列":"Unavailable: no common columns")))}function ld({spatial:e,plane:a,sliceIndex:t,rotationAxis:s,angle:c,sectionPercent:i,zh:o,restored:r,controlRef:f,onPause:d,onOpenVelocity:m,reviewRequest:u,onReviewApplied:v}){const[g,p]=j.useState(r?.roi??null),[l,b]=j.useState(r?.probe??null),[w,B]=j.useState(()=>r?.roi??ca(e)),[E,y]=j.useState(()=>wt(r?.roi??ca(e))),[_,x]=j.useState({}),[S,C]=j.useState(r?.diagnosis??null),[A,h]=j.useState(r?.appearance?.absoluteError??!1),[R,M]=j.useState("select"),[N,F]=j.useState("");function V(T){try{const Z=e.descriptor.shape[1],ne=ai(e,{ix:T.index%Z,iz:Math.floor(T.index/Z),resourceKey:JSON.stringify(e.descriptor)});d?.(),C(ne),b(ne.hotspot),U(ne.roi),F("")}catch{F(o?"该点没有共同有效高度，请选择有效水面。":"No paired height at this point. Choose a valid water column.")}}const H=$0(E,w,_),J=Object.keys(H.errors).length?o?"请补全数字；每个轴的最小值不能大于最大值。当前已应用的选区未改变。":"Enter all numeric bounds; each minimum must be no greater than its maximum. The applied ROI is unchanged.":"";j.useImperativeHandle(f,()=>({capture:()=>({spatial:e,roi:g,probe:l,diagnosis:S,appearance:{absoluteError:A}})}));const q=j.useMemo(()=>cd(e),[e]),Y=j.useMemo(()=>ra(e),[e]),D=j.useMemo(()=>g?ra(e,g):null,[e,g]),$=j.useMemo(()=>{if(a==="xz"||a==="oblique"&&s!=="y")return null;try{return Ei(e,{plane:a,index:Math.max(0,Math.min((a==="xy"?e.descriptor.shape[0]:e.descriptor.shape[1])-1,t)),angle:c,sectionPercent:i})}catch{return null}},[e,a,t,s,c,i]);function U(T){C(Z=>Z?.crest?{...Z,crest:void 0}:Z),p(T),B(T),y(wt(T)),x({})}function z(){C(Z=>Z?.crest?{...Z,crest:void 0}:Z);const T=ca(e);p(null),B(T),y(wt(T)),x({})}function k(){H.valid&&(ra(e,H.values),U({...H.values}))}const P=l?.index,O=e.descriptor,X=O.resources&&[O.protocolSha256,O.manifestA,O.manifestB,...Object.keys(O.resources).sort().map(T=>O.resources[T].sha256)].join("/"),W=X&&S&&g?{frame:O.frameId,run:O.runId,identity:X,ix:S.hotspot.ix,iz:S.hotspot.iz,x:S.hotspot.x,z:S.hotspot.z,roi:g,direction:S.directionDeg,absolute:A,note:S.caseNote??"",...S.crest&&{crest:S.crest}}:null;return j.useEffect(()=>{if(!(!u||u.frame!==O.frameId)){try{const T=u,Z=ai(e,{ix:T.ix,iz:T.iz,resourceKey:JSON.stringify(O)});if(T.identity!==X||T.run!==O.runId||T.x!==Z.hotspot.x||T.z!==Z.hotspot.z||ba(T.roi,ca(e)).clipped||!Number.isFinite(T.direction)||T.direction<0||T.direction>=180||typeof T.absolute!="boolean"||typeof T.note!="string"||T.note.length>120)throw Error();const ne={...Z,roi:T.roi,directionDeg:T.direction,caseNote:T.note,...T.crest&&{crest:T.crest}};T.crest&&Ka({profiles:Hn(e,ne),roi:T.roi},T.crest),U(T.roi),C(ne),b(Z.hotspot),h(T.absolute),F("")}catch{C(null),b(null),z(),F(o?"批注与当前水面数据不匹配。":"The annotation does not match the current surface data.")}v()}},[u,e]),n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:109:9","data-hotspot-review":W?JSON.stringify({surface:W}):void 0},n.createElement("h2",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:110:3"},o?"高度与选区分析 · 帧 ":"Height & ROI analysis · frame ",e.descriptor.frameId),n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:111:3"},o?"原生列高度 · 最高过零点 · 共同有效域。点击探针，拖动选择ROI；灰色为无效区域。A/B共用色标，B−A正值表示预测偏高。":"Native highest-crossing columns and common support. Click to probe; drag to select ROI. Gray is invalid. Shared A/B scale; positive B−A means prediction is higher."),n.createElement("label",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:112:3"},n.createElement("input",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:112:10","data-os-action":"",type:"checkbox","aria-label":"Absolute height error",checked:A,onChange:T=>h(T.target.checked)}),o?"绝对误差 |B−A|（取消为有符号差值）":"Absolute error |B−A| (clear for signed difference)"),N&&n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:113:20",role:"alert"},N),n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:114:3",className:"protocol-maps"},[["heightA","A / GT"],["heightB","B / Prediction"],["difference","B−A"]].map(([T,Z])=>n.createElement(od,{key:T,spatial:e,kind:T,label:T==="difference"&&A?"|B−A|":Z,roi:g,probe:l,profile:$,diagnosis:S,mode:R,onPause:d,absolute:A,range:T==="difference"?[A?0:-q.error,q.error]:q.height,onRegion:U,onProbe:V}))),n.createElement(W0,{spatial:e,diagnosis:S,roi:g,mode:R,setMode:M,onRegion:U,onExit:()=>C(null),onNote:T=>C(Z=>({...Z,caseNote:T})),onCrest:T=>C(Z=>({...Z,crest:T})),onDirection:T=>C(Z=>({...Z,directionDeg:T,crest:void 0}))}),S&&m&&n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:116:31"},n.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:116:34","data-os-action":"",disabled:!Rn(e.descriptor.frameId)||!g,onClick:()=>{d?.();const T={frame:e.descriptor.frameId,hotspotXZ:{x:S.hotspot.x,z:S.hotspot.z},roiXZ:{...g},surfaceCaseId:e.descriptor.runId??"best-1027",caseNote:S.caseNote??"",surfaceIdentity:Object.fromEntries(["runId","protocolSha256","manifestA","manifestB"].map(Z=>[Z,e.descriptor[Z]]))};W?m(T,null,W):m(T)}},o?"查看此区域速度":"Inspect velocity in this region"),o?" · 原生速度诊断支持 1001、1049、1096 帧。保留 XZ，单独选择水下 Y 层。":" · Native velocity diagnosis is available for 1001, 1049 and 1096. Retain XZ and choose an underwater Y layer separately."),n.createElement(ui,{value:Y,label:"Frame spatial metrics",zh:o}),n.createElement(id,{zh:o}),n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:119:3",className:"protocol-roi-help"},o?"ROI = 局部选区。X、Z 是水平方向，Y 是高度方向；下面四个边界确定矩形范围，点击“应用选区”后更新局部统计。":"ROI = region of interest. X and Z are horizontal; Y is height. The four bounds define a rectangle. Select Apply ROI to update its statistics."),n.createElement("form",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:120:3",onSubmit:T=>{T.preventDefault(),k()}},n.createElement("fieldset",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:120:52",className:"protocol-roi"},n.createElement("legend",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:120:87"},o?"选区范围 · 世界坐标（m）":"ROI bounds · world coordinates (m)"),[["xmin","X min"],["xmax","X max"],["zmin","Z min"],["zmax","Z max"]].map(([T,Z])=>n.createElement("label",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:120:252",key:T},Z,n.createElement("input",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:120:276","data-os-action":"","aria-label":`ROI ${Z}`,type:"number",step:"any",value:E[T],title:String(w[T]),"aria-invalid":!!H.errors[T],"aria-describedby":H.errors[T]?"roi-input-error":void 0,onChange:ne=>{y(ye=>({...ye,[T]:ne.target.value})),x(ye=>({...ye,[T]:!0}))}}))),n.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:120:589",type:"submit",disabled:!H.valid},o?"应用选区":"Apply ROI"),n.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:120:669","data-os-action":"",type:"button",onClick:z},o?"恢复全域":"Reset to full domain")),J&&n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:120:778",id:"roi-input-error",role:"alert"},J)),n.createElement(_i,{zh:o,subject:"Best_1027 · "+e.descriptor.frameId,context:[A?"|B−A|":"B−A",l&&"XZ "+l.x.toFixed(4)+", "+l.z.toFixed(4),g&&"ROI X ["+g.xmin+", "+g.xmax+"] Z ["+g.zmin+", "+g.zmax+"]",S&&"Profile "+S.directionDeg+"°"].filter(Boolean).join(" · "),viewLink:Oc+"#analysis-height"}),D&&n.createElement(ui,{value:D,label:"ROI metrics",zh:o}),l&&n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:127:11","aria-label":"Protocol probe"},n.createElement("strong",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:127:42"},o?"单点探针（不是选区平均）":"Point probe (not an ROI average)"),n.createElement("br",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:127:113"}),"X ",Ce(l.x)," / Z ",Ce(l.z)," m · A / GT ",Ce(e.wetA[P]?e.heightA[P]:null)," / B / ",o?"预测":"Prediction"," ",Ce(e.wetB[P]?e.heightB[P]:null)," m · B−A ",Ce(e.common[P]?e.heightB[P]-e.heightA[P]:null,100)," cm"),!S&&$&&n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:128:25",className:"protocol-profile-help"},o?"曲线怎么看：蓝线是 GT，橙线是预测；紫线是 B−A，零线上方表示预测偏高，下方表示偏低。横轴是沿截面的距离，纵轴是高度；曲线显示整条截面，不只显示 ROI。":"Reading the profile: blue is GT, orange is prediction. Purple is B−A: above zero means higher, below means lower. The horizontal axis is section distance; the vertical axis is height. The profile covers the full section, not just the ROI."),!S&&($?n.createElement(rd,{profile:$,zh:o}):n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:129:62",role:"status"},o?"选择 XY、YZ 或绕Y竖直截面查看高度曲线；水平／倾斜几何截面不作为俯视高度剖面。":"Choose XY, YZ or a vertical Y-axis section for heights; horizontal/tilted geometry is not a top-down height profile.")),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:130:3"},o?"单位：来源约定，未独立标定。高度仅表示俯视最高层，不覆盖完整翻卷内部结构。全序列指标保持原始范围；ROI与插值剖面不替换全局指标。":"Units: source convention, not independently calibrated. Heights describe the topmost layer, not complete overturning geometry. Sequence metrics retain their scope; ROI and interpolated profiles do not replace them."))}function dd({viewMode:e="all",bundle:a,frame:t,plane:s,sliceIndex:c,rotationAxis:i,angle:o,sectionPercent:r,getReportView:f,onRestoreReportView:d,reportControlRef:m,onDownload:u,catalog:v,reportContext:g,onPause:p,onOpenVelocity:l,unifiedRestore:b=!1,reviewRequest:w,onReviewApplied:B}){const{language:E}=fe(),y=E==="zh",_=JSON.stringify([a.runId,a.protocol,a.datasetA,a.datasetB,t]),[x,S]=j.useState(0),[C,A]=j.useState(null),[h,R]=j.useState(null),M=j.useRef(null),N=j.useRef(g);N.current=g,j.useEffect(()=>{h&&h.view.frame!==t&&R(null)},[t,h]),j.useEffect(()=>{const Y=new AbortController;let D=!0;return(async()=>{try{const $=await Xa(ua,Za.indexSha256,a),U=$.frames.find(k=>k.frameId===t);if(!U)throw Error("No spatial resource for selected frame");if(!D)return;const z=await ma(U,{...Xn(a),frameId:t},Y.signal);D&&A({key:_,spatial:z})}catch($){D&&A({key:_,error:$})}})(),()=>{D=!1,Y.abort()}},[a,t,_,x]);const F=C?.key===_?C:null;function V(){if(!F?.spatial||!M.current)throw Error("Wait for verified spatial resources");const Y=M.current.capture(),{view:D,scene:$}=f(),U=h0({bundle:a,...Y,view:D,catalog:v});return{record:U,canvas:k0(U,Y.spatial,$,E)}}async function H(Y,D){p?.();const $=N.current,U=await Xa(ua,Za.indexSha256,a),z=zi(Y,a,U,{catalog:v}),k=await ma(z.descriptor,{...Xn(a),frameId:z.view.frame},D);if(z.diagnosis&&!k.common[z.diagnosis.hotspot.index])throw Error("Diagnosis hotspot has no paired valid height");if(z.diagnosis?.crest&&Ka({profiles:Hn(k,z.diagnosis),roi:z.roi},z.diagnosis.crest),D.throwIfAborted(),N.current!==$)throw Error("View changed while restoring; retry from the current view");return{...z,spatial:k}}async function J(Y,D){D.throwIfAborted();const $=JSON.stringify([a.runId,a.protocol,a.datasetA,a.datasetB,Y.view.frame]);A({key:$,spatial:Y.spatial}),R({...Y,revision:crypto.randomUUID()}),await d(Y.view,D)}const q=h?.view.frame===t?h:null;return n.createElement("section",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:169:9",className:"protocol-spatial","aria-label":"Protocol spatial analysis"},n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:169:86","data-review-frame":t,hidden:e==="report"},F?F.error?n.createElement(fn,{error:F.error,zh:y,resource:(y?"水面高度与掩码 · 帧 ":"Height and masks · frame ")+t,onRetry:()=>{A(null),S(Y=>Y+1)}}):n.createElement(ld,{key:_+(q?.revision??""),reviewRequest:w,onReviewApplied:B,controlRef:M,restored:q,spatial:F.spatial,plane:s,sliceIndex:c,rotationAxis:i,angle:o,sectionPercent:r,zh:y,onPause:p,onOpenVelocity:l}):n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:169:155",role:"status"},y?`正在加载帧 ${t} 的同协议空间资源…`:`Loading protocol spatial resources for frame ${t}…`),n.createElement(sd,{bundle:a,zh:y,getSelection:()=>{const Y=M.current?.capture();if(!Y?.diagnosis||!Y.roi)throw Error(y?"请先点击高度图选择热点并设置选区。":"Select a hotspot on a height map and apply an ROI first.");const{hotspot:D,directionDeg:$}=Y.diagnosis;return{sourceFrame:Y.spatial.descriptor.frameId,ix:D.ix,iz:D.iz,x:D.x,z:D.z,roi:{...Y.roi},directionDeg:$}}})),n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:176:8",hidden:e==="height"},f&&n.createElement(T0,{unifiedRestore:b,key:a.runId,controlRef:m,ready:!!F?.spatial,capture:V,prepareImport:H,applyImport:J,onDownload:u,zh:y})))}const Na=["#66d9eb","#ffbf69"];function fd({pair:e,stopLabels:a,t}){const{gt:s,pred:c,seed:i,split:o,separation:r}=e,f=[i,...s.points,...c.points],d=[0,1].map(_=>{const x=f.map(S=>S[_]);return[Math.min(...x),Math.max(...x)]}),m=Math.max(6*r,...d.map(([_,x])=>x-_)),[u,v]=d.map(([_,x])=>(_+x)/2),g=([_,x])=>[160+(_-u)*250/m,150-(x-v)*250/m],p=[s,c],l=["GT",t("预测","Prediction")],b=g(i);function w(_,x){const[S,C]=g(s.points[_]),[A,h]=g(c.points[_]);return n.createElement("g",{"data-os-loc":"src/field/StreamlineFigure.jsx:19:12","data-event":x?"before":o?"crossing":"last-shared",stroke:x?"#cad4dd":"white"},n.createElement("line",{"data-os-loc":"src/field/StreamlineFigure.jsx:20:7",x1:S,y1:C,x2:A,y2:h,strokeDasharray:x?"2 2":void 0}),[[S,C],[A,h]].map(([R,M],N)=>n.createElement("circle",{"data-os-loc":"src/field/StreamlineFigure.jsx:21:41",key:N,cx:R,cy:M,r:x?2:3,fill:x?"#0d2030":"white"})))}const B=Math.min(s.points.length,c.points.length)-1,E=o?o.i:B;function y(_,x,S){if(!_)return null;const[C,A]=_;return n.createElement("path",{"data-os-loc":"src/field/StreamlineFigure.jsx:29:12",d:`M ${C} ${A} L 305 ${x} H 315`,stroke:S,opacity:".65",fill:"none",strokeWidth:".9"})}return n.createElement("svg",{"data-os-loc":"src/field/StreamlineFigure.jsx:31:10",role:"img","aria-label":t("同起点配对流线","Same-seed paired streamlines"),viewBox:"0 0 480 300",className:"paired-stream-figure"},n.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:32:5",x:"12",y:"21",fill:"#dbe6ea",fontSize:"12"},"+X →　+Z ↑"),p.map((_,x)=>n.createElement("polyline",{"data-os-loc":"src/field/StreamlineFigure.jsx:33:26",key:l[x],fill:"none",stroke:Na[x],strokeWidth:"2.5",strokeDasharray:x?"5 3":void 0,points:_.points.map(S=>g(S).join(",")).join(" ")})),o&&w(o.i-1,!0),E>=0&&w(E,!1),E>=0&&y(g(s.points[E].map((_,x)=>(_+c.points[E][x])/2)),60,"white"),n.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:38:5",x:"320",y:"58",fill:"white",fontSize:"14"},o?t("首次达到分离阈值","First crossing"):B>=0?t("最后共同样点","Last shared sample"):t("无共同样点","No shared samples")),o&&n.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:39:13",x:"320",y:"78",fill:"#cbdce4",fontSize:"12"},t("虚线为越阈前一步","Dotted: preceding step")),p.map((_,x)=>{const S=_.points.at(-1),C=142+80*x,A=S&&g(S);return n.createElement("g",{"data-os-loc":"src/field/StreamlineFigure.jsx:43:14",key:l[x],"data-stop":_.stop},A&&n.createElement(n.Fragment,null,n.createElement("rect",{"data-os-loc":"src/field/StreamlineFigure.jsx:44:17",x:A[0]-3,y:A[1]-3,width:"6",height:"6",fill:"#0d2030",stroke:Na[x]}),y(A,C,Na[x])),n.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:45:9",x:"320",y:C-3,fill:Na[x],fontSize:"15"},l[x]," · ",S?t("终点","end"):t("无法起步","no start")),n.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:46:9",x:"320",y:C+18,fill:"white",fontSize:"13"},a[_.stop]))}),n.createElement("circle",{"data-os-loc":"src/field/StreamlineFigure.jsx:49:5",cx:b[0],cy:b[1],r:"3.5",fill:"#fc6380",stroke:"#181e25"}))}const Fa=e=>e.map(a=>a.toFixed(4)).join(", ");function md({pair:e,fine:a,onChange:t,detailsRef:s,layer:c,t:i}){const{gt:o,pred:r,split:f,seed:d,step:m,separation:u,maxArc:v}=e,g={mask:i("共同有效域边界","Common mask boundary"),slow:i("投影流速过低","Low projected speed"),limit:i("积分长度上限","Integration length limit"),grid:i("可插值网格边界","Interpolation grid edge")},p=Math.min(o.points.length,r.points.length)-1,l=f?[[i("越阈前","Before"),f.i-1],[i("首次越阈","First crossing"),f.i]]:p>=0?[[i("最后共同样点","Last shared sample"),p]]:[];return n.createElement("section",{"data-os-loc":"src/field/StreamlinePanel.jsx:18:10",className:"paired-stream-panel","aria-label":"1049 paired streamlines"},n.createElement("h3",{"data-os-loc":"src/field/StreamlinePanel.jsx:19:5"},i("配对瞬时流线 · XZ 投影","Paired instantaneous streamlines · XZ projection")),n.createElement("details",{"data-os-loc":"src/field/StreamlinePanel.jsx:20:5",ref:s,open:!0},n.createElement("summary",{"data-os-loc":"src/field/StreamlinePanel.jsx:20:36"},i("查看流线图与采样位置","Streamline figure and sample positions")),n.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:21:7"},i("共同起点","Shared seed")," XZ (",Fa(d),") · Y ",c," · ",i("红点为起点，青色实线为 GT，橙色虚线为预测。","Red seed, cyan solid GT, orange dashed prediction.")),n.createElement("button",{"data-os-loc":"src/field/StreamlinePanel.jsx:22:7","data-os-action":"",type:"button","aria-pressed":a,onClick:()=>t(!a)},i("半步长复核","Half-step check")),n.createElement("span",{"data-os-loc":"src/field/StreamlinePanel.jsx:23:7",className:"stream-step"},i("当前步长","Current step")," ",m.toFixed(5)),n.createElement(fd,{pair:e,stopLabels:g,t:i}),n.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:25:7"},f?i("下列相邻样点标出首次观测到间距达到一格的积分步。","These samples bracket the first observed one-cell separation."):p>=0?i("共同积分段内未测到间距达到一格。","No one-cell separation observed on the shared trace."):i("当前起点没有可配对的积分样点。","No paired integration samples at this seed.")),l.length>0&&n.createElement("div",{"data-os-loc":"src/field/StreamlinePanel.jsx:28:26",className:"stream-samples"},n.createElement("table",{"data-os-loc":"src/field/StreamlinePanel.jsx:28:58"},n.createElement("caption",{"data-os-loc":"src/field/StreamlinePanel.jsx:28:65"},i("按相同积分弧长 s 对照，距离沿用来源空间单位","Matched integration arc length s, in source length units")),n.createElement("thead",{"data-os-loc":"src/field/StreamlinePanel.jsx:29:9"},n.createElement("tr",{"data-os-loc":"src/field/StreamlinePanel.jsx:29:16"},[i("样点","Sample"),"s","GT XZ",i("预测 XZ","Pred XZ"),i("间距","Gap")].map(b=>n.createElement("th",{"data-os-loc":"src/field/StreamlinePanel.jsx:29:94",key:b,scope:"col"},b)))),n.createElement("tbody",{"data-os-loc":"src/field/StreamlinePanel.jsx:30:9"},l.map(([b,w])=>{const B=o.points[w],E=r.points[w];return n.createElement("tr",{"data-os-loc":"src/field/StreamlinePanel.jsx:32:18",key:b},n.createElement("th",{"data-os-loc":"src/field/StreamlinePanel.jsx:32:33",scope:"row"},b),n.createElement("td",{"data-os-loc":"src/field/StreamlinePanel.jsx:32:60"},(w*m).toFixed(5)),n.createElement("td",{"data-os-loc":"src/field/StreamlinePanel.jsx:33:13"},Fa(B)),n.createElement("td",{"data-os-loc":"src/field/StreamlinePanel.jsx:33:30"},Fa(E)),n.createElement("td",{"data-os-loc":"src/field/StreamlinePanel.jsx:33:47"},Math.hypot(B[0]-E[0],B[1]-E[1]).toFixed(5)))})))),[o,r].map((b,w)=>n.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:35:32",key:w},w?i("预测","Prediction"):"GT"," · ",g[b.stop]," · ",b.points.length?`s=${((b.points.length-1)*m).toFixed(5)} · XZ (${Fa(b.points.at(-1))})`:i("起点无可积分样点","No accepted point at seed"))),n.createElement("small",{"data-os-loc":"src/field/StreamlinePanel.jsx:36:7"},i("固定帧、固定 Y 的瞬时投影。有效域边界表示下一步插值所需的四个邻点未全部有效。采用归一化方向的中点 RK2。","Instantaneous projection at a fixed frame and Y. At a mask boundary the next interpolation lacks four valid neighbours. Normalized midpoint RK2.")," Δ≥",u.toFixed(5)," · s≤",v.toFixed(4)," · |vXZ|>1e−8")))}function bd({layer:e,setLayer:a,lattice:t,t:s}){const c=t.dimensions[1]-1,i=e===null?null:t.origin[1]+e*t.axisSteps[1][1],o=r=>{const f=r.target.value.trim(),d=Number(f);f&&Number.isInteger(d)&&d>=0&&d<=c&&a(d)};return n.createElement("fieldset",{"data-os-loc":"src/field/NativeLayerControl.jsx:7:9",className:"native-layer-control"},n.createElement("legend",{"data-os-loc":"src/field/NativeLayerControl.jsx:7:52"},s("三图联动 · 原生 XZ 切层","Linked maps · native XZ slice")),n.createElement("div",{"data-os-loc":"src/field/NativeLayerControl.jsx:8:3",className:"native-layer-strip"},n.createElement("button",{"data-os-loc":"src/field/NativeLayerControl.jsx:9:4","data-os-action":"",type:"button","aria-label":s("上一原生层","Previous native layer"),disabled:e===null||e===0,onClick:()=>a(e-1)},"−"),n.createElement("label",{"data-os-loc":"src/field/NativeLayerControl.jsx:10:4"},s("原生 Y 层","Native Y index")," ",n.createElement("input",{"data-os-loc":"src/field/NativeLayerControl.jsx:10:42","data-os-action":"",type:"number","aria-label":"Velocity Y index",min:"0",max:c,step:"1",value:e??"",onChange:o})),n.createElement("button",{"data-os-loc":"src/field/NativeLayerControl.jsx:11:4","data-os-action":"",type:"button","aria-label":s("下一原生层","Next native layer"),disabled:e===c,onClick:()=>a(e===null?0:e+1)},"+"),n.createElement("input",{"data-os-loc":"src/field/NativeLayerControl.jsx:12:4","data-os-action":"",type:"range","aria-label":"Native Y layer slider",min:"0",max:c,step:"1",value:e??0,"aria-valuetext":e===null?s("未选择","Not selected"):String(e),onChange:o}),n.createElement("output",{"data-os-loc":"src/field/NativeLayerControl.jsx:13:4","aria-label":"Velocity Y world"},s("世界 Y","World Y")," = ",i===null?"—":i.toFixed(8)+" m")))}const an=(e,a=4)=>e.toFixed(a),jt=e=>(e>0?"+":"")+an(e);function pd({probe:e,tau:a,t,onStreamlines:s}){const c=e.xyz.map(r=>an(r,5)).join(", "),i=r=>Math.hypot(r[0],r[2]),o=r=>Math.abs(r[1])>i(r);return n.createElement("section",{"data-os-loc":"src/field/VelocityProbe.jsx:9:9",className:"velocity-readout","aria-label":"Velocity probe"},n.createElement("div",{"data-os-loc":"src/field/VelocityProbe.jsx:10:3",className:"velocity-readout-heading"},n.createElement("strong",{"data-os-loc":"src/field/VelocityProbe.jsx:10:45"},t("选中点","Selected point")),n.createElement("small",{"data-os-loc":"src/field/VelocityProbe.jsx:10:89"},"XYZ (",c,")")),e.common?n.createElement(n.Fragment,null,n.createElement("dl",{"data-os-loc":"src/field/VelocityProbe.jsx:12:4"},n.createElement("div",{"data-os-loc":"src/field/VelocityProbe.jsx:13:5"},n.createElement("dt",{"data-os-loc":"src/field/VelocityProbe.jsx:13:10"},t("流速差 · 预测 − GT","Speed difference · prediction − GT")),n.createElement("dd",{"data-os-loc":"src/field/VelocityProbe.jsx:13:76"},jt(e.speedDelta)," m/s"),n.createElement("small",{"data-os-loc":"src/field/VelocityProbe.jsx:14:5"},"GT ",an(e.speedGT)," → ",t("预测","Pred")," ",an(e.speedPred))),n.createElement("div",{"data-os-loc":"src/field/VelocityProbe.jsx:15:5","aria-label":"Velocity probe direction"},n.createElement("dt",{"data-os-loc":"src/field/VelocityProbe.jsx:15:48"},t("三维流向夹角","3D direction angle")),n.createElement("dd",{"data-os-loc":"src/field/VelocityProbe.jsx:16:5"},e.angleDegrees!==null?an(e.angleDegrees,2)+"°":t("不可判定","Unavailable")),n.createElement("small",{"data-os-loc":"src/field/VelocityProbe.jsx:17:5"},e.angleDegrees!==null?t("用 XYZ 三个分量计算","Uses all three XYZ components"):a===null?t("夹角已停用","Angles disabled"):t("至少一侧流速 ≤ τ","At least one speed ≤ τ"))),n.createElement("div",{"data-os-loc":"src/field/VelocityProbe.jsx:18:5"},n.createElement("dt",{"data-os-loc":"src/field/VelocityProbe.jsx:18:10"},t("切片法向速度 Vy","Slice-normal velocity Vy")),n.createElement("dd",{"data-os-loc":"src/field/VelocityProbe.jsx:18:62"},jt(e.vectorGT[1])," → ",jt(e.vectorPred[1])),n.createElement("small",{"data-os-loc":"src/field/VelocityProbe.jsx:18:122"},"GT → ",t("预测","Pred")," · m/s · ",t("正值沿 +Y","positive toward +Y")))),[["GT",e.vectorGT],[t("预测","Prediction"),e.vectorPred]].filter(([,r])=>o(r)).map(([r,f])=>n.createElement("p",{"data-os-loc":"src/field/VelocityProbe.jsx:20:103",className:"velocity-normal-note",key:r},r," · ",t("速度主要垂直于切片","Flow is mainly normal to the slice")," (|Vy| ",an(Math.abs(f[1]))," > XZ ",an(i(f))," m/s)."," ",t("图上箭头只画 XZ，短箭头不代表总流速低。","Arrows show XZ only; a short arrow does not imply low total speed."))),n.createElement("details",{"data-os-loc":"src/field/VelocityProbe.jsx:22:4"},n.createElement("summary",{"data-os-loc":"src/field/VelocityProbe.jsx:22:13"},t("向量误差与完整分量","Vector error and full components")),n.createElement("p",{"data-os-loc":"src/field/VelocityProbe.jsx:23:5"},"E ",an(e.E,6)," m/s · GT XYZ (",e.vectorGT.map(r=>an(r,6)).join(", "),") · ",t("预测","Pred")," XYZ (",e.vectorPred.map(r=>an(r,6)).join(", "),")"))):n.createElement("p",{"data-os-loc":"src/field/VelocityProbe.jsx:11:14"},t("不在共同有效域。此处没有可比较的速度；空白不代表静止。","Outside common valid domain. There is no comparable velocity here; missing data does not mean still water.")),s&&n.createElement("button",{"data-os-loc":"src/field/VelocityProbe.jsx:25:19","data-os-action":"",type:"button",onClick:s},t("查看此探针的配对流线","Inspect streamlines at this probe")))}function ic({x:e,y:a,dx:t,dy:s}){if(t===0&&s===0)return n.createElement("circle",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:7:27",cx:e,cy:a,r:".5",fill:"none"});const c=Ui(e,a,t,s).map((i,o)=>`${o===0||o===2?"M":"L"} ${i.join(" ")}`).join(" ");return n.createElement(n.Fragment,null,n.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:9:11",d:c,className:"velocity-arrow-outline"}),n.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:9:62",d:c}))}function ud({arrows:e,view:a,role:t}){const s=t==="gt"?"gtOffset":"predOffset";return n.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:14:9",className:"velocity-arrow-layer",role:"img","aria-label":t==="gt"?"Velocity GT arrows":"Velocity prediction arrows",viewBox:`0 0 ${a.width} ${a.height}`,preserveAspectRatio:"none"},e.points.map(c=>n.createElement("g",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:15:25",key:c.index,"data-sample":c.index},n.createElement(ic,{x:c.x-a.x+.5,y:a.z+a.height-c.z-.5,dx:c[s][0],dy:-c[s][1]}))))}function hd({arrows:e,view:a}){const{language:t}=fe(),s=t==="zh";return e.points.length?e.referenceSpeed?n.createElement(n.Fragment,null,n.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:24:3",className:"velocity-arrow-reference","aria-hidden":"true",viewBox:`0 0 ${a.width} 8`,preserveAspectRatio:"none"},n.createElement(ic,{x:a.width*.04,y:4,dx:e.referenceGridLength,dy:0})),n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:27:3"},s?"参考箭头":"Reference arrow"," ",e.referenceSpeed.toPrecision(4)," m/s · ",s?"两图共用线性比例":"Shared linear scale"," · ",e.points.length," ",s?"个配对格点":"paired grid points")):n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:22:35"},s?"空心点表示 XZ 投影为零":"Hollow markers indicate zero XZ projection"):n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:21:34"},s?"当前采样格点无配对箭头":"No paired arrows at the sampled grid points")}function gd({x:e,z:a,view:t}){const s=t.height-a-.5,c=`M ${e+.5} 0 V ${t.height} M 0 ${s} H ${t.width}`;return n.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:34:9",className:"velocity-probe-layer","aria-hidden":"true",viewBox:`0 0 ${t.width} ${t.height}`,preserveAspectRatio:"none"},n.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:35:3",d:c,className:"velocity-probe-outline"}),n.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:35:54",d:c}))}function cc({slice:e,angles:a,mode:t,arrows:s,view:c,zoom:i,frame:o,probe:r,setProbe:f,ranges:d}){const{language:m}=fe(),u=m==="zh",v=e.roiView,g=!i&&v?[v.x/Math.max(1,e.width-1),(v.x+v.width-1)/Math.max(1,e.width-1),v.z/Math.max(1,e.height-1),(v.z+v.height-1)/Math.max(1,e.height-1)]:null,p=r[0]-c.x,l=r[1]-c.z,b=p>=0&&p<c.width&&l>=0&&l<c.height,w=at(t,m);return n.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:49:9",className:"velocity-triptych"},w.map(({key:B,title:E,label:y,palette:_,role:x})=>{const S=B==="direction"?a.degrees:e[B],C=B==="direction"?a.mask:e.commonMask,A=d[x?"speed":B],h=x?"speed":B==="speedDelta"?"delta":"error",R=M=>M===0?"0":M.toPrecision(5);return n.createElement("figure",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:55:10","data-review-id":"velocity-map-"+B,key:y,"data-review-frame":o,"data-review-slice":y+" Y "+e.sliceIndex},n.createElement("figcaption",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:56:4"},E," · ",u?"帧":"Frame"," ",o," · Y ",e.sliceIndex," · ",u?"世界 Y":"World Y"," ",e.worldAt(0)[1].toFixed(5)," m"),n.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:57:4",className:"velocity-map"},n.createElement(Lt,{label:y,slice:{width:e.width,height:e.height,values:S,angleSupport:B==="direction"?e.commonMask:null},maskSlice:{values:C},range:A,palette:_,plane:"xz",viewport:c,aspect:c.width*e.stepX/(c.height*e.stepZ),region:g,onCrosshair:M=>f([c.x+Math.min(c.width-1,Math.floor(M[0]*c.width)),c.z+Math.min(c.height-1,Math.floor(M[1]*c.height))])}),x&&s&&n.createElement(ud,{arrows:s,view:c,role:x}),b&&n.createElement(gd,{x:p,z:l,view:c})),x&&n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:67:12"},u?"颜色：三维总流速":"Colour: full 3D speed",s&&(u?" · 箭头：XZ 投影":" · Arrows: XZ projection")),n.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:68:4",className:"velocity-scale "+h}),n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:69:4"},R(A[0])," → ",B==="speedDelta"?"0 → ":"",R(A[1]),B==="direction"?"°":" m/s",x?u?" · GT / 预测共用色标":" · Shared GT / prediction color scale":""),n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:70:4"},"X → · Z ↑ · ",B==="direction"?u?"灰纹：非共同域；浅黄：共同有效但无夹角":"Grey stripes: outside common domain; pale yellow: valid speed, no angle":u?"灰纹：不在共同有效域":"Grey stripes: outside common valid support"),B==="speedDelta"&&n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:71:25"},u?"蓝色为预测偏慢，红色为预测偏快":"Blue: prediction slower; red: prediction faster"),x&&s&&n.createElement(hd,{arrows:s,view:c}))}))}const kn=(e,a=6)=>Number.isFinite(e)?e.toFixed(a):"N/A",hi=e=>e==null?"N/A":(e*100).toFixed(2)+"%",Oa=["xmin","xmax","zmin","zmax"],Ct=1e-8;function gi({value:e,angle:a,local:t}){const{language:s}=fe(),c=(o,r)=>s==="zh"?o:r,i=e.counts;return n.createElement("section",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:24:9",className:"velocity-metrics","aria-label":t?"Velocity ROI metrics":"Velocity slice metrics"},n.createElement("h3",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:25:3"},t?c("ROI · 当前 Y 层","ROI · current Y layer"):c("全切片 · 当前 Y 层","Whole slice · current Y layer")),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:3"},c("平均 E ","Mean E "),n.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:28"},kn(e.meanE)),c(" · 最大 E "," · Maximum E "),n.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:82"},kn(e.maximum?.value)),c(" · 平均 Δs "," · Mean Δs "),n.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:144"},kn(e.meanSpeedDelta))),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:27:3"},c("最大 E 的 XYZ：","Maximum E at XYZ: "),e.maximum?.world.map(o=>kn(o,5)).join(", ")??"N/A"),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:28:3"},c("候选 ","Candidates "),i.candidate,c(" · GT 资格 "," · GT eligible "),i.gtEligible,c(" · 共同有效 "," · Common valid "),i.common,c(" · 非有限排除 "," · Nonfinite excluded "),i.nonfiniteExcluded),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:29:3"},c("覆盖率：共同 / 候选 ","Coverage: common / candidate "),hi(e.coverageCandidate),c(" · 共同 / GT 资格 "," · Common / GT eligible "),hi(e.coverageGT)),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:30:3"},c("平均三维夹角 ","Mean 3D angle "),kn(a.meanDegrees,3),c("° · 夹角有效 ","° · Angle valid "),a.count," / ",i.common,c(" · 低速排除 "," · Low-speed excluded "),a.excludedLowSpeedCount??"N/A"),n.createElement("small",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:31:3"},c("仅 GT 资格 ","GT eligible only "),i.gtOnly,c(" · 仅预测有效 "," · Prediction valid only "),i.predOnly,c(" · 双方掩膜通过 "," · Both masks pass "),i.paired,c("。非有限值另行排除。",". Nonfinite values are excluded separately.")))}function yd({loaded:e,request:a,initial:t,surface:s}){const{language:c}=fe(),i=(L,te)=>c==="zh"?L:te,{frame:o,lattice:r,alignment:f}=e,[d,m]=j.useState(t?.domain??"collaborator-native"),[u,v]=j.useState(()=>t?.y??E0({...e,hotspotXZ:a.hotspotXZ,domain:"collaborator-native"})),[g,p]=j.useState(t?.roi??a.roiXZ),[l,b]=j.useState(()=>Object.fromEntries(Oa.map(L=>[L,String((t?.roi??a.roiXZ)[L])]))),[w,B]=j.useState(""),[E,y]=j.useState(()=>t?.probe??Kt(r,a.hotspotXZ)),_=j.useRef(null);function x(){const L=_.current;L&&(L.open=!0,L.querySelector("summary").focus({preventScroll:!0}),L.scrollIntoView({block:"start"}))}const[S,C]=j.useState(t?.streamlineStepFraction===.125),[A,h]=j.useState(t?.mode??"vectorError"),[R,M]=j.useState(t?.zoom??!1),[N,F]=j.useState(t?.showArrows??!0),[V,H]=j.useState(t?t.tau:Ct),[J,q]=j.useState(V===null?"":String(V)),[Y,D]=j.useState(""),$=j.useMemo(()=>u===null?null:Qt({frame:o,lattice:r,alignment:f,plane:"xz",sliceIndex:u,domain:d,roiXZ:g}),[o,r,f,u,d,g]),U=j.useMemo(()=>$?es($,V):null,[$,V]),z=j.useMemo(()=>$&&f.frame===1049&&d==="collaborator-native"?Li($,E,S?.125:.25):null,[$,f.frame,d,E,S]),k=!!(R&&$?.roiView),P=j.useMemo(()=>$&&(k?$.roiView:{x:0,z:0,width:$.width,height:$.height}),[$,k]),O=t?.scaleCells??4,X=j.useMemo(()=>N&&P?ns($,P,k?4:16,void 0,O):null,[$,N,P,k,O]),W=j.useMemo(()=>{let L=0,te=0,de=0;if($)for(let Be=0;Be<$.commonMask.length;Be++)$.commonMask[Be]&&(L=Math.max(L,$.speedGT[Be],$.speedPred[Be]),te=Math.max(te,$.vectorError[Be]),de=Math.max(de,Math.abs($.speedDelta[Be])));return{speed:[0,L||1],vectorError:[0,te||1],speedDelta:[-(de||1),de||1],direction:[0,180]}},[$]),T=$?E[0]+$.width*E[1]:null,Z=$&&E[0]>=0&&E[0]<$.width&&E[1]>=0&&E[1]<$.height&&$.commonMask[T],ne=j.useMemo(()=>$?{schema:"oceanscope.velocity-diagnostic-data.v1",scope:`${f.frame} native velocity diagnosis; diagnostic export only`,frame:f.frame,source:f.source,resource:f.resource,protocolSha256:f.protocolSha256,lattice:r,unitClaim:f.unitClaim,unitEvidence:f.unitEvidence,vectorBasis:f.vectorBasis,domain:d,domainDefinition:d==="collaborator-native"?f.domainDefinition:{id:d,rule:"Both velocity-valid masks > 0 AND six finite components; no tank or SDF depth filter"},yIndex:u,yWorld:r.origin[1]+u*r.axisSteps[1][1],surfaceRequest:a,roiXZ:g,probe:{index:T,xyz:$.worldAt(T),common:!!Z,speedGT:Z?$.speedGT[T]:null,speedPred:Z?$.speedPred[T]:null,E:Z?$.vectorError[T]:null,speedDelta:Z?$.speedDelta[T]:null,vectorGT:Z?Array.from($.vectorsGT.subarray(3*T,3*T+3)):null,vectorPred:Z?Array.from($.vectorsPred.subarray(3*T,3*T+3)):null,angleDegrees:Z&&U.mask[T]?U.degrees[T]:null},whole:$.whole,local:$.local,direction:{tau:V,unit:"m/s (source convention)",thresholdSource:V===null?"disabled":V===Ct?"legacy preview numerical epsilon":"user diagnostic input",whole:U.whole,local:U.local},display:{mode:A,view:P,zoomed:k,ranges:W,arrows:X,scaleCells:O},...z&&{streamlines:{stepFraction:S?.125:.25,seed:z.seed,separation:z.split,gt:{end:z.gt.points.at(-1)??null,stop:z.gt.stop},prediction:{end:z.pred.points.at(-1)??null,stop:z.pred.stop}}}}:null,[$,f,r,d,u,a,g,T,Z,U,V,A,P,k,W,X,z,S,O]),[ye,ve]=j.useState(null),[se,ie]=j.useState(null),[Ee,Re]=j.useState(null);j.useEffect(()=>ie(null),[c]);const Ae=se?.data===ne&&se.language===c?se.files:null;j.useEffect(()=>()=>{for(const L of Object.values(Ae??{}))URL.revokeObjectURL(L.href)},[Ae]),j.useEffect(()=>{if(!ne){ve(null);return}const L=URL.createObjectURL(new Blob([JSON.stringify(ne,null,2)+`
`],{type:"application/json"}));return ve({data:ne,url:L}),()=>URL.revokeObjectURL(L)},[ne]);function tn(){try{const L=ci(ne,f,"a999a257d995f8e084d5e8f23469b9153767df64"),te=R0(L,$,U,X,c).toDataURL("image/png"),de=nt({stem:`oceanscope-velocity-${f.frame}-y${u}`,record:L,csv:w0(L,$,U),previewUrl:te});ie({data:ne,files:de,language:c}),Re(null)}catch(L){Re(L)}}function Oe(){const L=Object.fromEntries(Oa.map(te=>[te,Number(l[te])]));if(Oa.some(te=>!l[te].trim()||!Number.isFinite(L[te]))||L.xmin>L.xmax||L.zmin>L.zmax){B(i("请填写完整有限数字，最小值不能大于最大值。原选区未改变。","Enter finite values for every bound, with minimum ≤ maximum. The ROI is unchanged."));return}p(L),B("")}function ke(L){L.preventDefault();const te=J.trim()===""?null:Number(J);if(te!==null&&(!Number.isFinite(te)||te<0)){D(i("请输入非负有限数，或留空以停用夹角。","Enter a finite nonnegative number, or leave blank to disable angles."));return}H(te),D("")}const De=j.useMemo(()=>{if(!s||!ne)return null;const L=ci(ne,f,"annotation"),{schema:te,source:de,alignment:Be,plane:Me,roi:sn,probe:Pn,angleThreshold:K,surfaceCase:Q}=L;return JSON.stringify({surface:s,velocity:{schema:te,source:de,alignment:Be,plane:Me,roi:sn,probe:Pn,angleThreshold:K,surfaceCase:Q,domain:{id:d},appearance:{mode:A,zoom:k},arrows:{enabled:N,scaleCells:O},...z&&{streamlines:{stepFraction:S?.125:.25}}}})},[ne,f,s]);return n.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:126:9","data-review-frame":f.frame,"data-hotspot-review":De??void 0},n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:127:3"},i("来自水面热点 X ","From surface hotspot X "),kn(a.hotspotXZ.x,5),"，Z ",kn(a.hotspotXZ.z,5),i("；保留 XZ 选区。初始 Y 取该列默认域内最上方有效格层，之后由你手动选择，不随水面起伏。","; XZ ROI retained. Initial Y is the highest valid layer in this column within the default domain. Subsequent Y selection is manual and does not follow the surface.")),n.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:3",className:"velocity-controls"},n.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:38"},i("有效域 ","Valid domain "),n.createElement("select",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:72","data-os-action":"","aria-label":"Velocity domain",value:d,onChange:L=>m(L.target.value)},n.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:164",value:"collaborator-native"},i("合作者原生域 · 已核对","Collaborator native domain · verified")),n.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:268",value:"common-finite-exploration"},i("共同有限域 · 探索","Common finite domain · exploration"))))),n.createElement(bd,{layer:u,setLayer:v,lattice:r,t:i}),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:130:3",className:"velocity-domain"},d==="collaborator-native"?i("合作者原生域：X [11,212)、Z [11,105)，GT vel_valid > 0、GT SDF < −0.10（float32）、预测 vel_valid > 0，再排除非有限速度。","Collaborator native domain: X [11,212), Z [11,105), GT vel_valid > 0, GT SDF < −0.10 (float32), prediction vel_valid > 0; nonfinite velocities excluded."):i("探索域：双方速度有效且六分量有限；不应用水槽裁剪或 GT 深水阈值，不作协议评分。","Exploration domain: both velocity masks valid and all six components finite; no tank crop or GT deep-water threshold. Not protocol scoring."),i(" 当前显示为一层，非整帧体积评分。"," Showing one layer, not a full-frame volume score.")),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:131:3"},i("速度单位沿用来源声明 m/s；坐标沿用来源声明 m。物理尺度、时间尺度与向量基底尚未独立标定。E = ‖预测向量 − GT 向量‖；Δs = 预测流速 − GT 流速。","Velocity m/s and coordinates m follow source declarations. Physical scale, time scale and vector basis have not been independently calibrated. E = ‖prediction vector − GT vector‖; Δs = prediction speed − GT speed.")),$?n.createElement(n.Fragment,null,n.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:133:4",className:"velocity-controls"},n.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:134:5"},i("第三图 ","Third map "),n.createElement("select",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:134:36","data-os-action":"","aria-label":"Velocity comparison map",value:A,onChange:L=>h(L.target.value)},n.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:135:6",value:"vectorError"},i("速度向量误差 E","Velocity vector error E")),n.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:135:84",value:"speedDelta"},i("流速大小差 Δs","Speed difference Δs")),n.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:135:157",value:"direction"},i("三维方向夹角","3D direction angle")))),n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:137:5","data-os-action":"",type:"button","aria-pressed":N,onClick:()=>F(L=>!L)},i("配对箭头","Paired arrows")),n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:138:5","data-os-action":"",type:"button","aria-pressed":k,disabled:!$.roiView,onClick:()=>M(!k)},k?i("返回全切片","Back to whole slice"):i("放大 ROI","Zoom to ROI"))),n.createElement("small",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:140:4",className:"velocity-zoom-key"},i("同层缩放：全图每 16 格、ROI 每 4 格取箭头。按原生网格计的箭长比例、色标和统计范围均不变。","Zoom on this layer: arrows every 16 cells in the full view and every 4 in the ROI. Arrow scale in native cells, colour limits and statistical domains stay fixed.")),n.createElement("form",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:141:4",className:"velocity-controls",onSubmit:ke},n.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:142:5"},i("方向低速阈值（m/s）","Direction low-speed threshold (m/s)"),n.createElement("input",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:142:68","data-os-action":"","aria-label":"Velocity direction threshold",inputMode:"decimal",value:J,onChange:L=>q(L.target.value)})),n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:143:5",type:"submit"},i("应用方向阈值","Apply direction threshold")),n.createElement("output",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:144:5","aria-label":"Velocity applied threshold"},V===null?i("夹角停用","Angles disabled"):`${i("当前 τ = ","Current τ = ")}${V} m/s · ${V===Ct?i("沿用旧预览数值阈值","Legacy preview numerical threshold"):i("自定诊断阈值","Custom diagnostic threshold")}`)),Y&&n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:146:15",role:"alert"},Y),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:147:4"},i("双方完整流速均大于 τ 才计算三维夹角。阈值用于诊断，等待合作者确认，留空可停用夹角。箭头仅显示 XZ 投影，空心点表示投影为零。","The full speed on both sides must exceed τ to calculate a 3D angle. This diagnostic threshold awaits collaborator confirmation; leave blank to disable angles. Arrows show only XZ projections; hollow markers indicate zero projection.")),n.createElement(cc,{slice:$,angles:U,mode:A,arrows:X,view:P,zoom:k,frame:f.frame,probe:E,setProbe:y,ranges:W}),n.createElement(pd,{probe:ne.probe,tau:V,t:i,onStreamlines:z?x:null}),n.createElement("form",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:150:4",onSubmit:L=>{L.preventDefault(),Oe()}},n.createElement("fieldset",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:150:54",className:"velocity-controls"},n.createElement("legend",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:150:94"},i("速度 ROI · 世界坐标 XZ（不改变 Y）","Velocity ROI · world XZ coordinates (Y unchanged)")),Oa.map(L=>n.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:150:208",key:L},L,n.createElement("input",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:150:226","data-os-action":"","aria-label":"Velocity ROI "+L,type:"text",inputMode:"decimal",value:l[L],onChange:te=>b(de=>({...de,[L]:te.target.value}))}))),n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:150:379",type:"submit"},i("应用速度选区","Apply velocity ROI")))),w&&n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:150:473",role:"alert"},w),z&&n.createElement(md,{detailsRef:_,layer:u,pair:z,fine:S,onChange:C,t:i}),n.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:152:4",className:"velocity-statistics"},n.createElement(gi,{value:$.whole,angle:U.whole}),n.createElement(gi,{value:$.local,angle:U.local,local:!0})),n.createElement("section",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:153:4",className:"velocity-report","aria-label":"Velocity report"},n.createElement("h3",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:154:5"},i("可恢复速度报告","Restorable velocity report")),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:155:5"},i("用当前切片、选区和显示设置生成一份报告。配套 JSON 可从“报告与恢复”重新打开。","Generate a report from the current slice, ROI and display settings. Reopen its JSON in Reports & restore.")),n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:156:5","data-os-action":"",type:"button",onClick:tn},i("生成当前速度报告","Generate current velocity report")),n.createElement(fn,{error:Ee,zh:c==="zh"}),Ae&&n.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:158:19",className:"velocity-report-downloads"},Object.entries(Ae).map(([L,te])=>n.createElement("a",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:159:54",key:L,href:te.href,download:te.name},L==="json"?i("下载可恢复速度 JSON","Download restorable velocity JSON"):i("下载速度报告 ","Download velocity report ")+L.toUpperCase()))),se&&!Ae&&n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:161:28",role:"status"},i("视图已更新。请重新生成速度报告。","The view or language changed. Generate the velocity report again."))),ye?.data===ne&&n.createElement("a",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:163:28",download:`oceanscope-velocity-${f.frame}-y${u}-data.json`,href:ye.url},i("导出速度诊断数据 JSON（不用于恢复）","Export velocity diagnostic data JSON (not restorable)"))):n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:132:11",role:"status"},i("热点列内没有共同有效点。请选择明确的 Y 层；不会移到其他 XZ。","No common valid point in the hotspot column. Select an explicit Y layer; XZ will not move.")))}function xd({frameNumber:e,request:a,restored:t,surface:s,markView:c}){const{language:i}=fe(),o=(p,l)=>i==="zh"?p:l,[r,f]=j.useState(null),[d,m]=j.useState(0),u=a?.frame===e&&!!Rn(e);j.useEffect(()=>{const p=l=>{!r?.loaded&&!t&&l.detail?.includes(e)&&m(b=>b+1)};return window.addEventListener("oceanscope-velocity-files",p),()=>window.removeEventListener("oceanscope-velocity-files",p)},[r,t,e]),j.useEffect(()=>{if(!u||t){f(null);return}const p=new AbortController;let l=!0;return f(null),Jt(e,{signal:p.signal}).then(b=>{l&&f({frameNumber:e,request:a,loaded:b})}).catch(b=>{l&&f({frameNumber:e,request:a,error:b})}),()=>{l=!1,p.abort()}},[e,a,u,d,t]);const v=t??(r?.frameNumber===e&&r?.request===a?r:null),g=v?.loaded?"ready":v?.error?.code==="VELOCITY_FILE_REQUIRED"?"missing":v?.error?"error":"loading";return n.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:183:9",className:"velocity-diagnosis","data-velocity-state":g,"data-velocity-frame":e},n.createElement("h2",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:183:115"},o("速度与方向诊断 · 帧 ","Velocity and direction diagnosis · frame "),e),u?v?.error?n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:183:426",role:"alert"},o("速度资源加载失败：","Velocity resource failed to load: "),v.error.message," ",n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:183:519","data-os-action":"",onClick:()=>m(p=>p+1)},o("重试速度资源","Retry velocity resource"))):v?.loaded?n.createElement(yd,{key:d,loaded:v.loaded,request:a,surface:s,initial:t?.view??c}):n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:183:749",role:"status"},o("正在读取并校验 ","Reading and verifying "),e,o(" 原始值诊断资源…"," raw-value diagnostic resources…")):n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:183:211",role:"status"},o("当前帧 ","Frame "),e,o(" 暂无对应的速度报告视图。请选择已核验帧，并从该帧的水面热点或报告进入。"," has no velocity report view. Choose a verified frame and enter from its surface hotspot or report.")))}const ss="oceanscope.velocity-comparison.v1",vd=[1001,1049,1096],is="best-1027",cs="raw-reference-96-e81b8955734e",st="collaborator-native",it=1e-8,$t=28,Wt=[166,186,80,100],Ed=4,_d=["vectorError","speedDelta","direction"],wd={mode:"direction",probe:[176,90],arrows:!0};function os(){const e=vd.map(Rn),{lattice:a,protocolSha256:t,domainDefinition:s}=e[0],[c,i,o,r]=Wt,f=g=>a.origin[0]+g*a.axisSteps[0][0],d=g=>a.origin[2]+g*a.axisSteps[2][2],m={xmin:f(c),xmax:f(i),zmin:d(o),zmax:d(r)},u={axis:"xz",yIndex:$t,yWorld:a.origin[1]+$t*a.axisSteps[1][1]},v=e.map(g=>({frame:g.frame,gtSha256:g.source.gt.sha256,predSha256:g.source.prediction.sha256,packedSha256:g.resource.packedSha256,decodedSha256:g.resource.decodedSha256}));return{alignments:e,roi:m,plane:u,domain:st,tau:it,domainDefinition:s,protocolSha256:t,sources:v,lattice:a}}function za(e){return e.caseId===is&&e.runId===cs}async function oc(e,a=Jt){const{alignments:t,roi:s,lattice:c,domainDefinition:i}=os(),o=[];for(const r of t){e.throwIfAborted();const f=await a(r.frame,{signal:e});if(e.throwIfAborted(),f.alignment!==r||JSON.stringify(f.lattice)!==JSON.stringify(c)||JSON.stringify(r.domainDefinition)!==JSON.stringify(i))throw Error("Velocity comparison requires the verified common lattice and protocol");const d=Qt({...f,plane:"xz",sliceIndex:$t,domain:st,roiXZ:s});o.push({frame:r.frame,slice:d,angles:es(d,it)})}return Sd(o)}function Sd(e){const a=e[0].slice,t=new Uint8Array(a.commonMask.length),s=new Uint8Array(t.length),c=[];let i=0,o=0,r=0,f=0,d=0,m=0;for(let g=0;g<t.length;g++)if(!(!a.roiMask[g]||!a.candidateMask[g])&&(c.push(g),!!e.every(({slice:p})=>p.commonMask[g]))){t[g]=1,i++,e.every(({angles:p})=>p.mask[g])&&(s[g]=1,o++);for(const{slice:p}of e){r=Math.max(r,p.speedGT[g],p.speedPred[g]),f=Math.max(f,p.vectorError[g]),d=Math.max(d,Math.abs(p.speedDelta[g]));for(const l of[p.vectorsGT,p.vectorsPred])m=Math.max(m,Math.hypot(l[g*3],l[g*3+2]))}}const u=a.roiView,v=e.map(({frame:g,slice:p,angles:l})=>{let b=0,w=0,B=0;for(const y of c)t[y]&&(b+=p.vectorError[y],w+=p.speedDelta[y]),s[y]&&(B+=l.degrees[y]);const E={...p,commonMask:t};return{frame:g,nativeMask:p.commonMask,slice:E,angles:{...l,mask:s},arrows:ns(E,u,Ed,m),summary:{frame:g,nativeRoi:p.local.counts.common,meanE:i?b/i:null,meanDelta:i?w/i:null,meanAngle:o?B/o:null}}});return{view:u,rows:v,roiIndices:c,paired:i,anglePaired:o,ranges:{speed:[0,r||1],vectorError:[0,f||1],speedDelta:[-(d||1),d||1],direction:[0,180]}}}function jd(e,a,t){const{roi:s,plane:c,protocolSha256:i,sources:o,domainDefinition:r}=os();return{schema:ss,createdAt:new Date().toISOString(),source:{caseId:is,runId:cs,protocolSha256:i,codeRevision:t,frames:o},scope:{preset:"1049-a-fixed-roi",plane:c,roi:s,domain:st,domainDefinition:r,tau:it},view:a,result:{roiCandidates:e.roiIndices.length,shared:e.paired,sharedAngles:e.anglePaired,ranges:e.ranges,arrowReferenceSpeed:a.arrows?e.rows[0].arrows.referenceSpeed:null,arrowIndices:a.arrows?e.rows[0].arrows.points.map(f=>f.index):[],frames:e.rows.map(f=>f.summary)}}}function Vt(e,a){return!a||typeof a!="object"?e===a:!e||typeof e!="object"||Array.isArray(a)&&(!Array.isArray(e)||e.length!==a.length)?!1:Object.keys(a).every(t=>Vt(e[t],a[t]))}function Cd(e,a){if(e.length>1024*1024)throw Error("Velocity comparison report too large");const t=JSON.parse(e),{plane:s,roi:c,protocolSha256:i,sources:o}=os();if(t?.schema!==ss||!za(a)||!Vt(t.source,{caseId:is,runId:cs,protocolSha256:i,frames:o})||!Vt(t.scope,{preset:"1049-a-fixed-roi",plane:s,roi:c,domain:st,tau:it}))throw Error("Velocity comparison report source or preset mismatch");const{mode:r,probe:f,arrows:d}=t.view??{};if(!_d.includes(r)||typeof d!="boolean"||!Array.isArray(f)||f.length!==2||!f.every((m,u)=>Number.isInteger(m)&&m>=Wt[u*2]&&m<=Wt[u*2+1]))throw Error("Velocity comparison report view is invalid");return{mode:r,probe:f,arrows:d}}async function Bd(e,a,t){t.throwIfAborted();const s=Cd(e,a),c=await oc(t);return{view:s,data:c}}function Ad(e,a){const t=["frame,native_index,x,y,z,frame_valid,shared_valid,shared_angle_valid,probe,arrow,gt_speed,pred_speed,vector_error,speed_delta,direction_degrees"];for(const{frame:s,nativeMask:c,slice:i,angles:o,arrows:r}of e.rows){const f=new Set(a.arrows?r.points.map(m=>m.index):[]),d=a.probe[0]+i.width*a.probe[1];for(const m of e.roiIndices){const u=i.commonMask[m],v=o.mask[m];t.push([s,m,...i.worldAt(m),c[m],u,v,+(m===d),Number(f.has(m)),...u?[i.speedGT[m],i.speedPred[m],i.vectorError[m],i.speedDelta[m]]:["","","",""],v?o.degrees[m]:""].join(","))}}return t.join(`
`)+`
`}const gn=(e,a=5)=>Number.isFinite(e)?e.toFixed(a):"N/A";function kd({data:e,initialView:a}){const{language:t}=fe(),s=(_,x)=>t==="zh"?_:x,[c,i]=j.useState(a),[o,r]=j.useState(null),[f,d]=j.useState(null);j.useEffect(()=>r(null),[t]);const m=o?.view===c&&o.language===t?o.files:null;j.useEffect(()=>()=>{for(const _ of Object.values(m??{}))URL.revokeObjectURL(_.href)},[m]);const{paired:u,anglePaired:v,roiIndices:g,rows:p,ranges:l}=e,b=c.arrows?p[0].arrows.points.length:0,w=c.probe[0]+c.probe[1]*p[0].slice.width,B=p[0].slice.worldAt(w);function E(_){i(x=>({...x,..._})),d(null)}function y(){try{const _=jd(e,c,"a999a257d995f8e084d5e8f23469b9153767df64"),x=P0(_,e,t).toDataURL("image/png"),S=nt({stem:"oceanscope-best-1027-velocity-comparison",record:_,previewUrl:x,csv:Ad(e,c)});r({view:c,files:S,language:t}),d(null)}catch(_){d(_)}}return n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:43:3"},s("Best_1027 · XZ 固定选区 · Y=28（约 −0.10 m）· 合作者原生有效域 · 方向阈值 1e−8 m/s","Best_1027 · fixed XZ ROI · Y=28 (about −0.10 m) · collaborator native domain · direction threshold 1e−8 m/s")),n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:44:3"},s("1049 A 的 ROI 为 X [−1.35, −0.35]、Z [1.45, 2.45] m。三帧共同有效 ","1049 A ROI: X [−1.35, −0.35], Z [1.45, 2.45] m. Common valid across three frames: "),u," / ",g.length,s("，其中三帧均可判定夹角 ","; angles valid in all three: "),v,s("。图和均值使用对应的共同格点，棋盘表示该格点未纳入。",". Maps and means use the corresponding common grid points; checkerboards mark excluded points.")),n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:45:3"},s("流速共用 0–","Shared speed range 0–"),gn(l.speed[1]),s(" m/s。配对箭头共用比例和采样位置"," m/s. Paired arrows share a scale and sampling positions"),c.arrows&&s("，每帧 ",", with ")+b+s(" 个点"," points per frame"),s("。速度和坐标单位沿用来源声明。",". Velocity and coordinate units follow source declarations.")),n.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:46:3",className:"velocity-controls"},n.createElement("label",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:47:4"},s("第三图 ","Third map "),n.createElement("select",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:47:35","data-os-action":"","aria-label":"Three-frame comparison map",value:c.mode,onChange:_=>E({mode:_.target.value})},n.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:48:5",value:"direction"},s("三维方向夹角","3D direction angle")),n.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:49:5",value:"vectorError"},s("速度向量误差 E","Velocity vector error E")),n.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:50:5",value:"speedDelta"},s("流速大小差 Δs","Speed difference Δs")))),n.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:52:4","data-os-action":"",type:"button","aria-pressed":c.arrows,onClick:()=>E({arrows:!c.arrows})},s("三帧配对箭头","Three-frame paired arrows"))),n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:54:3","aria-label":"Three-frame probe"},s("同步探针 XYZ (","Synchronized probe XYZ ("),B.map(_=>gn(_)).join(", "),") · ",p[0].slice.commonMask[w]?s("三帧共同有效","Common valid in all three frames"):s("不在三帧共同有效格点内","Outside the three-frame common grid points")),n.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:55:3",className:"velocity-comparison-table"},n.createElement("table",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:55:46"},n.createElement("caption",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:56:4"},s("固定 ROI · 各帧覆盖与共同样本指标","Fixed ROI · frame coverage and common-sample metrics")),n.createElement("thead",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:4"},n.createElement("tr",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:11"},n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:15"},s("帧","Frame")),n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:40"},s("本帧有效 / 候选","Frame valid / candidate")),n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:91"},s("共同格点平均 E（m/s）","Common-point mean E (m/s)")),n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:148"},s("平均 Δs（m/s）","Mean Δs (m/s)")),n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:190"},s("平均夹角","Mean angle")))),n.createElement("tbody",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:4"},p.map(({frame:_,summary:x})=>n.createElement("tr",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:43",key:_},n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:59",scope:"row"},_),n.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:87"},x.nativeRoi," / ",g.length),n.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:137"},gn(x.meanE)),n.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:169"},gn(x.meanDelta)),n.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:205"},gn(x.meanAngle,2),"°")))))),p.map(({frame:_,slice:x,angles:S,arrows:C})=>n.createElement("section",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:60:49",key:_,className:"velocity-comparison-row","aria-label":`Velocity comparison frame ${_}`},n.createElement("h3",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:61:4"},s("帧 ","Frame "),_),n.createElement(cc,{frame:_,slice:x,angles:S,ranges:l,mode:c.mode,arrows:c.arrows?C:null,view:e.view,zoom:!0,probe:c.probe,setProbe:A=>E({probe:A})}),x.commonMask[w]?n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:64:31"},s("探针 E ","Probe E "),gn(x.vectorError[w])," m/s · Δs ",gn(x.speedDelta[w]),s(" m/s · 夹角 "," m/s · Angle "),S.mask[w]?gn(S.degrees[w],2)+"°":"N/A"):null)),n.createElement("section",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:66:3",className:"velocity-report","aria-label":"Three-frame velocity report"},n.createElement("h3",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:67:4"},s("可恢复三帧报告","Restorable three-frame report")),n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:68:4"},s("CSV 保留三帧各自的 ROI 候选格点与有效标记。JSON 可在“报告与恢复”重新打开，指标会从核验后的资源重算。","CSV retains each frame’s ROI candidate grid points and validity flags. Reopen JSON in Reports & restore; metrics are recomputed from verified resources.")),n.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:69:4","data-os-action":"",type:"button",onClick:y},s("生成三帧速度报告","Generate three-frame velocity report")),n.createElement(fn,{error:f,zh:t==="zh"}),o&&!m&&n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:71:25",role:"status"},s("视图或语言已更新，请重新生成报告。","The view or language changed. Generate the report again.")),m&&n.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:72:14",className:"velocity-report-downloads"},Object.entries(m).map(([_,x])=>n.createElement("a",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:73:5",key:_,href:x.href,download:x.name},s("下载三帧报告 ","Download three-frame report "),_.toUpperCase())))))}function Md({restored:e}){const{language:a}=fe(),t=(f,d)=>a==="zh"?f:d,[s,c]=j.useState(null),[i,o]=j.useState(0);j.useEffect(()=>{const f=()=>{!s?.data&&!e&&o(d=>d+1)};return window.addEventListener("oceanscope-velocity-files",f),()=>window.removeEventListener("oceanscope-velocity-files",f)},[s,e]),j.useEffect(()=>{if(e)return;const f=new AbortController;return c(null),oc(f.signal).then(d=>{f.signal.aborted||c({data:d})}).catch(d=>{f.signal.aborted||c({error:d})}),()=>f.abort()},[e,i]);const r=e??s;return n.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:100:9",className:"velocity-diagnosis"},n.createElement("h2",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:101:3"},t("三帧速度对照 · 1001 / 1049 / 1096","Three-frame velocity comparison · 1001 / 1049 / 1096")),r?.data?n.createElement(kd,{data:r.data,initialView:e?.view??wd}):r?.error?n.createElement(n.Fragment,null,n.createElement(fn,{error:r.error,zh:a==="zh"}),n.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:103:84","data-os-action":"",type:"button",onClick:()=>o(f=>f+1)},t("重试三帧资源","Retry three-frame resources"))):n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:104:6",role:"status"},t("正在核验三帧速度资源并计算共同有效格点…","Verifying three-frame velocity resources and computing common valid grid points…")))}function Rd({enabled:e,open:a,active:t,forceModal:s=!1,label:c,closeLabel:i,onClose:o,returnFocusRef:r,children:f}){const[d,m]=j.useState(()=>e&&!!globalThis.matchMedia?.("(max-width:900px)").matches),u=e&&(d||s),v=j.useRef(null),g=j.useRef(null),p=j.useRef(a&&t),l=j.useRef(!1);j.useEffect(()=>{if(!e)return;const E=globalThis.matchMedia?.("(max-width:900px)");if(!E)return;const y=()=>m(E.matches);return y(),E.addEventListener("change",y),()=>E.removeEventListener("change",y)},[e]),j.useEffect(()=>{if(!e)return;const E=v.current;return u&&(a&&t&&!E.open?E.showModal():E.open&&(!a||!t)&&E.close()),a&&t&&(u||!p.current)&&g.current?.focus({preventScroll:!0}),!a&&l.current&&(l.current=!1,r.current?.focus({preventScroll:!0})),p.current=a&&t,()=>{u&&E.open&&E.close()}},[e,u,a,t]);function b(){l.current=!0,o()}function w(E){if(e){if(E.key==="Escape"){E.preventDefault(),E.stopPropagation(),b();return}if(u&&E.key==="Tab"){const y=[...v.current.querySelectorAll("button,input,select,textarea,a[href],summary,[tabindex]")].filter(S=>!S.disabled&&S.tabIndex>=0&&S.getClientRects().length),_=y[0],x=y.at(-1);E.shiftKey&&document.activeElement===_?(E.preventDefault(),x?.focus()):!E.shiftKey&&document.activeElement===x&&(E.preventDefault(),_?.focus())}}}const B=u?"dialog":"aside";return n.createElement(B,{ref:v,id:"analysis-settings",className:"field-sidebar","aria-label":c,onCancel:E=>{E.preventDefault(),b()},onKeyDown:w,onClick:E=>{if(!u||E.target!==E.currentTarget)return;const y=E.currentTarget.getBoundingClientRect();(E.clientX<y.left||E.clientX>y.right||E.clientY>y.bottom)&&b()}},e&&n.createElement("div",{"data-os-loc":"src/field/WorkbenchSettings.jsx:42:13",className:"demo-settings-header"},n.createElement("button",{"data-os-loc":"src/field/WorkbenchSettings.jsx:42:51","data-os-action":"",ref:g,className:"demo-close-settings",onClick:b},i)),f)}function Ta(e,a,t="application/json"){const s=URL.createObjectURL(new Blob([a],{type:t})),c=document.createElement("a");c.href=s,c.download=e,c.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function Pd(e){if(!e?.dimensions||!e.axisSteps)return null;const a=[];for(let t=0;t<8;t++)a.push(e.origin.map((s,c)=>s+e.dimensions.reduce((i,o,r)=>i+(t>>r&1)*(o-1)*e.axisSteps[r][c],0)));return{min:[0,1,2].map(t=>Math.min(...a.map(s=>s[t]))),max:[0,1,2].map(t=>Math.max(...a.map(s=>s[t])))}}function Id({focusedLayout:e=!1,workspace:a="3d",onWorkspace:t=()=>{},evaluation:s=null,evaluationError:c="",unifiedRestore:i=!1,onCancelImport:o,onRetryEvaluation:r,comparison:f,processing:d,activeGroup:m,onActiveGroup:u,setup:v,expectedFrames:g,metricsOverride:p,sourceCase:l,viewApiRef:b,initialView:w,onViewReady:B,onViewRestored:E,restoring:y=!1,frameSplit:_=f.frameSplit,readOnly:x=!1,active:S=!0}){const{tr:C,language:A}=fe(),h=A==="zh",R=e,M=R?"3d":"time",[N,F]=j.useState(null),V=j.useRef(null),H=j.useRef(0),J=!!N&&a==="slices",q=!!N?.comparison&&a==="slices",Y={caseId:l?.id,runId:s?.runId},[D,$]=j.useState(null),[U,z]=j.useState("");j.useEffect(()=>{if(!s||l?.id!=="best-1027")return;function I(G){if(G?.page!=="field"||!G.hotspotReview||!["height","slices"].includes(G.section))return;const{surface:ce,velocity:ge}=G.hotspotReview;try{if(ce?.run!==s.runId||!s.frameIds.includes(ce.frame))throw Error();if(G.section==="slices"){const{request:Ye,view:Te}=Hi(JSON.stringify(ge),Y);if(Ye.frame!==ce.frame||Ye.hotspotXZ.x!==ce.x||Ye.hotspotXZ.z!==ce.z)throw Error();F({request:Ye,markView:Te,surface:ce,key:++H.current})}W.current?.pause(),on(ce.frame),$(ce),z("")}catch{z(h?"批注与当前数据不匹配。":"The annotation does not match this dataset.")}}const ee=G=>I(G.detail);return I(Ga()),window.addEventListener("oceanscope-hotspot-mark",ee),()=>window.removeEventListener("oceanscope-hotspot-mark",ee)},[s,l?.id]);function k(I,ee=null,G=null){W.current?.pause(),Ae(!1),F({request:I,restored:ee,surface:G,key:++H.current}),t?.("slices")}function P(I=null){W.current?.pause(),Ae(!1),F({comparison:!0,restored:I,key:++H.current}),t("slices")}j.useEffect(()=>{if(!R||a!=="3d")return;const I=()=>{window.location.hash==="#analysis-summary"&&document.getElementById("analysis-summary")?.scrollIntoView({block:"start"})};return I(),window.addEventListener("hashchange",I),()=>window.removeEventListener("hashchange",I)},[R,a,s]);const O=w?.settings,X=j.useRef(null),W=j.useRef(null),T=j.useRef(!1),[Z,ne]=j.useState(""),ye=e&&f.id==="best-1027",ve=!!l&&f.id!=="best-1027",{presenting:se}=Dc(),[ie,Ee]=j.useState(()=>({presenting:se,open:!se&&!globalThis.matchMedia?.("(max-width:900px)").matches})),Re=ie.presenting===se&&ie.open;function Ae(I){Ee(ee=>({presenting:se,open:typeof I=="function"?I(ee.presenting===se&&ee.open):I}))}j.useEffect(()=>{e&&W.current?.pause()},[a]);const tn=j.useRef(null),[Oe,ke]=j.useState(!0),De=j.useRef(null),[L,te]=j.useState({subset:"all",metric:"height",grid:"coarse"}),[de,Be]=j.useState(null),[Me,sn]=j.useState(null),[Pn,K]=j.useState(0),[Q,oe]=j.useState(O?.shading||"original");j.useEffect(()=>{se&&W.current?.pause()},[se]);const[$e,Ge]=j.useState(null),[He,In]=j.useState(O?.errorScale||{locked:!1,limit:1}),vn=j.useRef(null),En=Kl(f);function ct(){vn.current&&(vn.current.open=!0,vn.current.scrollIntoView?.({block:"start"}))}const _n=JSON.stringify(d?.lattice??null),Se=j.useMemo(()=>JSON.parse(_n),[_n]),cn=j.useMemo(()=>d?.frames?.map(I=>I.frame)||[],[d?.frames]),wn=j.useMemo(()=>fa(l),[l]),Pe=j.useMemo(()=>m==="sdf"&&wn.length?wn:cn,[m,wn,cn]),Nn=s?.frameIds??Pe,[ae,on]=j.useState(O?.frame??(ye?1049:null)),[he,ga]=j.useState(null),[qn,ya]=j.useState(null),[Sn,xa]=j.useState(""),[Je,Ln]=j.useState(!1),[Ke,va]=j.useState(()=>{if(O)return O.mode;const I=x?"split":kt("field-view")?.mode;return["split","overlay","wire-overlay","gt","prediction"].includes(I)?I:"split"}),[rn,rs]=j.useState(O?.quality??"balanced"),[jn,ls]=j.useState(O?.component??"magnitude"),[ds,Hd]=j.useState(.65),[Fn,fs]=j.useState(O?.showContext??!1),[On,ms]=j.useState(O?.vectorDensity??2e3),[Tn,bs]=j.useState(O?.arrowScale??1),[Yn,ps]=j.useState(O?.glyphMode??"direction"),[le,ot]=j.useState(O?.plane??(ye?"yz":"xz")),[rc,Un]=j.useState(O?.sliceIndex??null),[rt,us]=j.useState(O?.crosshair||[.5,.5]),[Dn,hs]=j.useState(!!O?.sourceRange),[mn,gs]=j.useState(O?.sourceRange||[0,1]),[qe,ys]=j.useState(O?.rotationAxis||"y"),[We,xs]=j.useState(O?.angle??30),[Ve,lt]=j.useState(O?.sectionPercent??50),[Jn,vs]=j.useState(O?.showPlane??!0),[Es,lc]=j.useState(null),[Le,dt]=j.useState(O?{showGt:O.showGt,showPrediction:O.showPrediction,gtOpacity:O.gtOpacity,predictionOpacity:O.predictionOpacity}:{showGt:!0,showPrediction:!0,gtOpacity:.65,predictionOpacity:.8}),[dc,_s]=j.useState(""),Cn=j.useRef(null),$n=j.useRef(0),Ea=j.useRef(Pe);Ea.current=Pe;const me=!!f?.settings?.previewOnly,Bn=m==="sdf"&&wn.includes(ae)&&!cn.includes(ae);j.useEffect(()=>(Cn.current={frames:nl({fetchFrame:(I,ee,G)=>ol(I,ee,{...G,withIdentity:!0}),decode:ki}),geometry:al(),surface:Sc()},()=>{$n.current++,Cn.current?.frames.dispose(),Cn.current?.geometry.dispose(),Cn.current?.surface.dispose(),Cn.current=null}),[f.id]),j.useEffect(()=>{ga(null),ya(null),on(O?.frame??(ye?1049:null)),ke(!0),xa("")},[f.id]),j.useEffect(()=>{if(Nn.length&&!Nn.includes(ae)){const I=x?null:kt("field-view");on(I?.comparisonId===f.id&&Pe.includes(I.frame)?I.frame:Pe[0])}},[Pe,Nn,ae,f.id,x]),j.useEffect(()=>{!x&&ae!=null&&Ci("field-view",{mode:Ke,comparisonId:f.id,frame:ae})},[Ke,ae,f.id,x]),j.useEffect(()=>{let I=!0;if(x||p){ya(p??null);return}return rl(f.id).then(ee=>{I&&ya(ee)}).catch(ee=>{I&&(ya(null),xa(ee.message))}),()=>{I=!1}},[f.id,Pe.length,f.status,p,x]);const _a=he?ia(he.snapshot.data,m):null,wa=he?.snapshot.data.fields.find(I=>I.id===(_a?.groundTruth?.ids[0]||_a?.prediction?.ids[0]))?.shape||Se?.dimensions,Qe=wa?wa[le==="yz"?0:le==="xz"?1:2]-1:0,Ie=Math.max(0,Math.min(rc??Math.floor(Qe/2),Qe)),ws=j.useMemo(()=>({group:m,mode:me?"gt":Ke,quality:rn,component:jn,opacity:ds,showContext:Fn,vectorDensity:On,arrowScale:Tn,glyphMode:Yn,plane:le,sliceIndex:Ie,angle:We,sectionPercent:Ve,rotationAxis:qe,showPlane:Jn,sourceRange:Dn&&mn[1]>mn[0]?mn:null,unit:_a?.unit}),[m,Ke,me,rn,jn,ds,Fn,On,Tn,Yn,le,Ie,We,Ve,qe,Jn,Dn,mn,_a?.unit]),bn=j.useMemo(()=>({group:m,quality:rn,component:jn,showContext:Fn,vectorDensity:On,arrowScale:Tn,glyphMode:Yn,plane:le,sliceIndex:Ie,angle:We,sectionPercent:Ve,rotationAxis:qe,previewOnly:me}),[m,rn,jn,Fn,On,Tn,Yn,le,Ie,We,Ve,qe,me]),pn=JSON.stringify([f.id,ae,bn,Pn]);j.useEffect(()=>{const I=Cn.current;if(!I||ae==null)return;const ee=++$n.current;let G=!0;if(xa(""),!Oe||!Pe.includes(ae)){ga(null),Ln(!1);return}return Ln(!0),sn({key:pn,status:"loading"}),(async()=>{try{if(Bn){const Te=await I.surface.select(l,ae,rn);if(!Te||!G||ee!==$n.current)return;const An=jc(Te.geometry,Se,bn),Ca={comparisonId:f.id,frameNumber:ae,data:{fields:[],groups:{}},verifiedResource:Te.verifiedResource};ga({snapshot:Ca,geometry:An,settings:bn}),sn({key:pn,status:"ready"}),Ln(!1),_s(`${(I.surface.stats().bytes/1048576).toFixed(0)} MiB surface cache`);return}const ce=await I.frames.select(f.id,ae);if(!ce||!G||ee!==$n.current)return;let ge;try{ge=await I.geometry.request(ce,Se,bn)}catch(Te){ge={failed:!0,layers:[],warnings:[`3D preparation unavailable: ${Te.message}. Use slices below.`],byteLength:0}}if(!ge||!G||ee!==$n.current)return;ga({snapshot:ce,geometry:ge,settings:bn}),sn({key:pn,status:"ready"}),Ln(!1);const Ye=I.frames.stats();if(_s(Ye.oversize?"Active frame exceeds preview cache budget":`${(Ye.bytes/1048576).toFixed(0)} MiB decoded cache`),!e){const Te=Ea.current.indexOf(ae);I.frames.prefetch(f.id,[Ea.current[Te+1],Ea.current[Te-1]].filter(An=>An!=null))}}catch(ce){G&&ee===$n.current&&(xa(ce.message),sn({key:pn,status:"error",error:ce.message}),Ln(!1))}})(),()=>{G=!1}},[f.id,ae,bn,Se,Pe,Pn,pn,Oe,Bn,l,rn]),j.useEffect(()=>{Sn&&W.current?.pause()},[Sn]);const fc=j.useMemo(()=>Pd(d?.lattice),[d?.lattice]);j.useEffect(()=>{const I=ee=>{const G=ee.detail;S&&G?.page==="field"&&G.caseId===f.id&&Nn.includes(G.frame)&&(G.accept(),Sa(G.frame))};return window.addEventListener("oceanscope-annotation-frame",I),()=>window.removeEventListener("oceanscope-annotation-frame",I)});const ft=j.useCallback(I=>on(I),[]),je=he?.snapshot.frameNumber,Kn=je==null?null:qn?.frames?.[String(je)],Sa=j.useCallback(I=>{W.current?.pause(),m==="velocity"&&!cn.includes(I)&&u("sdf"),on(I)},[m,cn,u]),ze=JSON.stringify([f.id,ae,m,jn,le,Ie,We,Ve,qe]),[Ss,mt]=j.useState(()=>({context:ze,range:O?.region??null})),js=j.useRef(ze);j.useEffect(()=>{js.current!==ze&&(js.current=ze,mt({context:ze,range:null}))},[ze]);const bt=Ss.context===ze?Ss.range:null;function mc(I){W.current?.pause(),mt({context:ze,range:I})}function bc(I){W.current?.pause(),us(I)}const Xe=he?.settings.group||m,Qn=he?ia(he.snapshot.data,Xe):null,be={shading:Q,...ws,...he?.settings,...Le,unit:Qn?.unit},en=Me?.key===pn&&Me.status==="ready"&&!Je&&!Sn&&!Z&&!!Es&&he?.snapshot.frameNumber===ae&&he?.settings===bn&&!he?.geometry.failed;j.useEffect(()=>{B?.(en&&!y)},[en,y,B]),j.useEffect(()=>{if(!(!w||T.current)){if(Sn||Z||he?.geometry.failed){T.current=!0,E?.(Error("load"));return}if(en){T.current=!0;try{X.current.restoreCamera(w.camera),W.current.pause(),E?.(null)}catch(I){E?.(I)}}}},[w,en,Sn,Z,he,E]);function Cs(){if(!en||y||!l||Dn&&!(mn[1]>mn[0]))throw Error("settings");return W.current.pause(),xn({schema:qa,name:`${l.id} · ${m.toUpperCase()} · ${je} · ${le==="oblique"?qe.toUpperCase()+" "+We+"°":le.toUpperCase()}`,sourceSignature:Ti(l),settings:{...Bn?{representation:oa}:{},shading:Q,caseId:l.id,frame:je,group:m,mode:me?"gt":Ke,quality:rn,component:jn,plane:le,sliceIndex:Ie,angle:We,sectionPercent:Ve,rotationAxis:qe,showPlane:Jn,showContext:Fn,...Le,showPrediction:me?!1:Le.showPrediction,vectorDensity:On,arrowScale:Tn,...m==="velocity"&&!me?{glyphMode:Yn}:{},sourceRange:Dn?mn:null,errorScale:He,crosshair:rt,region:me?null:bt,playback:W.current.getSettings()},camera:X.current.getCamera()},[l])}j.useImperativeHandle(b,()=>({pause(){W.current?.pause()},captureView:Cs,async restoreAnalysis(I,ee,G){if(G.throwIfAborted(),!s)throw Error("Reference analysis is not ready for this dataset");if(ee==="pairedCase"){if(!V.current)throw Error("One-page case unavailable for this dataset");return V.current.restore(I,G)}if(ee==="velocityComparison"){const ge=await Bd(I,Y,G);G.throwIfAborted(),P(ge);return}if(ee==="velocity"){const ge=await qi(I,{caseId:l?.id,runId:s.runId},G);G.throwIfAborted(),on(ge.request.frame),k(ge.request,ge);return}if(ee==="report"){if(!De.current?.restoreText)throw Error("Analysis is not ready");return De.current.restoreText(I,G)}const ce=vi(I,s);G.throwIfAborted(),W.current?.pause(),De.current?.clearSnapshot(),te(ge=>({...ge,subset:ce.subset,metric:ce.metric})),on(ce.frame)}}));function pc(){W.current?.pause();let I=null,ee=null,G=null,ce="No 3D preview for this frame";if(Pe.includes(ae)){ce=Sn||Z||(he?.geometry.failed?"3D preparation failed":Je?"3D preview is loading":"3D preview is not ready or not verified");try{const ge=Bn?yi(l,ae,rn):Xt(l,ae);en&&ge&&JSON.stringify(he.snapshot.verifiedResource)===JSON.stringify(ge)&&(I=Cs(),G=X.current.capture(),ee=ge,ce=Bn?"Exact-frame native SDF surface bytes verified; no volume samples":"Exact-frame preview bytes verified")}catch(ge){I=null,ee=null,G=null,ce=ge.message}}return{view:{frame:ae,plane:le,sliceIndex:Ie,rotationAxis:qe,angle:We,sectionPercent:Ve,selection:L,geometry:I,geometryResource:ee,geometryStatus:{status:I?"included":"unavailable",reason:ce}},scene:G}}function uc(I,ee){if(ee.throwIfAborted(),W.current?.pause(),on(I.frame),ot(I.plane),Un(I.sliceIndex),ys(I.rotationAxis),xs(I.angle),lt(I.sectionPercent),te(I.selection),K(ce=>ce+1),!I.geometry)return Promise.resolve();ke(!0);const G=I.geometry.settings;return u(G.group),va(G.mode),rs(G.quality),ls(G.component),oe(G.shading),fs(G.showContext),ms(G.vectorDensity),bs(G.arrowScale),ps(G.glyphMode??"direction"),vs(G.showPlane),dt({showGt:G.showGt,showPrediction:G.showPrediction,gtOpacity:G.gtOpacity,predictionOpacity:G.predictionOpacity}),hs(!!G.sourceRange),gs(G.sourceRange??[0,1]),In(G.errorScale),us(G.crosshair),new Promise((ce,ge)=>{const Ye=setTimeout(()=>An(Error("Timed out loading the report view; retry the geometry download")),3e4),Te=()=>An(Error("Report restore cancelled"));function An(Ca){clearTimeout(Ye),ee.removeEventListener("abort",Te),Be(null),Ca?ge(Ca):ce()}ee.addEventListener("abort",Te,{once:!0}),Be({view:I,signal:ee,finish:An})})}j.useEffect(()=>{if(!(!de||de.signal.aborted)&&!(ae!==de.view.frame||Me?.key!==pn||Me.status==="loading")){if(Me.error||Z||he?.geometry.failed){de.finish(Error(Me.error||Z||"Geometry unavailable"));return}if(en){if(JSON.stringify(he.snapshot.verifiedResource)!==JSON.stringify(de.view.geometryResource)){de.finish(Error("Report preview resource identity mismatch"));return}try{X.current.restoreCamera(de.view.geometry.camera),W.current?.restoreSettings(de.view.geometry.settings.playback),mt({context:ze,range:de.view.geometry.settings.region??null}),de.finish()}catch(I){de.finish(I)}}}},[de,en,ae,Me,pn,Z,he]);const hc=ho({sourceCase:l,comparison:f,processing:d,snapshot:he?.snapshot,geometry:he?.geometry,settings:be,metrics:qn}),gc=he?.snapshot.data.fields.find(I=>I.id===(Qn?.groundTruth?.ids[0]||Qn?.prediction?.ids[0])),Bs=d?.lattice&&le!=="oblique"?dl(d.lattice,le,Ie):null,pt={shading:Xe==="sdf"?Q:"not_applicable",comparison_id:f.id,dataset_a:f.groundTruthId||f.labels?.gt?.displayName||"Ground Truth",dataset_b:me?"":f.predictionId||f.labels?.prediction?.displayName||"Prediction",frame:je,group:Xe,component:be.component,plane:be.plane,mode:be.mode,camera:Es,gt_opacity:Le.gtOpacity,prediction_opacity:Le.predictionOpacity,preview_quality:be.quality,show_plane:Jn,gt_visible:Le.showGt,prediction_visible:Le.showPrediction,value_unit:Qn?.unit||"undeclared",coordinate_unit:"source_grid_units",lattice_origin:Se?.origin,lattice_axis_steps:Se?.axisSteps,dimensions:Se?.dimensions,...be.plane==="oblique"?Cc(Zt(Se,be.angle,be.sectionPercent,be.rotationAxis)):{slice_index:be.sliceIndex,angle_degrees:be.plane==="xy"?0:be.plane==="yz"?90:null,sampling:"native_voxel_layer"},section_percent:be.plane==="oblique"?be.sectionPercent:yt(be.sliceIndex,0,(Se?.dimensions?.[be.plane==="xy"?2:be.plane==="yz"?0:1]||1)-1),crosshair_normalized:rt,local_region:bt,saved_metrics_scope:"precomputed_original_support_not_current_slice"},yc=n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:25",id:"analysis-height",hidden:e&&!["height","report"].includes(a)},s&&ae!=null&&n.createElement(dd,{reviewRequest:D,onReviewApplied:()=>$(null),viewMode:e?a==="report"?"report":"height":"all",unifiedRestore:i,bundle:s,frame:ae,plane:le,sliceIndex:Ie,rotationAxis:qe,angle:We,sectionPercent:Ve,getReportView:pc,onRestoreReportView:uc,reportControlRef:De,onDownload:Ta,catalog:[l],reportContext:JSON.stringify([ze,L]),onPause:()=>W.current?.pause(),onOpenVelocity:za(Y)?k:void 0})),As=n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:243:27",hidden:e&&a!==M,id:"analysis-summary",className:R?"demo-integrated-time":void 0},R&&s&&n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:243:201",className:"demo-time-heading"},n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:243:236"},n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:243:241"},h?"时间分析":"Time analysis"),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:243:277"},h?"查看误差随帧号的变化；点击曲线上的点，同步切换上方三维画面。":"Inspect errors across frames. Select a curve point to update the 3D view above.")),n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:243:409",href:"#analysis-spatial"},h?"返回三维画面 ↑":"Back to 3D ↑")),s&&n.createElement(p0,{displayGeometryFrames:wn.length?wn:cn,unifiedRestore:i,bundle:s,frame:ae,onFrame:Sa,onDownload:Ta,reportSelection:L,onReportSelection:te}));function ja(){De.current?.cancel(),o?.()}return n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:245:10","data-review-case":f.id,"data-review-frame":je,className:`field-workbench v2-field${e?` demo-field ${ve?"demo-nonreference":""} demo-panel-${a} ${Re?"settings-open":""}`:""}`,inert:y||void 0,onPointerDownCapture:ja,onKeyDownCapture:ja,onChangeCapture:ja,onWheelCapture:ja},n.createElement(Rd,{enabled:e,forceModal:se,open:Re,active:S&&!J&&["3d","height","slices"].includes(a),returnFocusRef:tn,onClose:()=>Ae(!1),label:h?"视图设置":"View settings",closeLabel:h?"关闭设置":"Close settings"},n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:246:314",ref:vn,className:"field-setup",open:!f},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:246:385"},x?h?"已发布数据详情":"Published dataset details":C("Datasets & comparison setup")),v),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:7",hidden:e&&a==="height"},n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:57"},C("Display controls")),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:90",className:"field-tabs compact"},["sdf","velocity"].map(I=>n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:156","data-os-action":"",key:I,"aria-label":I==="sdf"?"SDF":"Velocity",disabled:!f.availableGroups.includes(I)||I==="velocity"&&!cn.includes(ae),"aria-pressed":m===I,onClick:()=>u(I)},C(I==="sdf"?"SDF":"Velocity"),!f.availableGroups.includes(I)&&n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:478"},C("Not available"))))),!me&&n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:248:17",className:"v2-primary-modes",role:"group","aria-label":h?"主要显示模式":"Primary display mode"},n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:248:112","data-os-action":"","aria-pressed":Ke==="split",onClick:()=>va("split")},h?"并排":"Side by side"),n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:248:214","data-os-action":"","aria-pressed":Ke==="overlay",onClick:()=>va("overlay")},h?"叠加":"Overlay")),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:7",className:"v2-mode-caption"},me?h?"单组查看 · 不显示误差":"Single dataset · no error scores":["split","overlay"].includes(Ke)?h?"A / GT 蓝色 · B / Prediction 橙色":"A / GT blue · B / Prediction orange":h?"正在使用高级显示模式":"Advanced display mode active")),n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:250:13"},C("Cross section")),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:250:43"},C("Plane"),n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:250:63","data-os-action":"","aria-label":C("Slice plane"),value:le,onChange:I=>{ot(I.target.value),Un(null)}},["xy","xz","yz"].map(I=>n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:250:197",key:I,value:I},I.toUpperCase()," · ",h?"固定":"fixed"," ",I==="xy"?"Z":I==="xz"?"Y":"X")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:250:303",value:"oblique",disabled:!At(Se)},h?"斜切 · X / Y / Z 旋转":"Oblique · X / Y / Z rotation"))),le==="oblique"&&n.createElement(go,{value:qe,onChange:I=>{W.current?.pause(),ys(I)}}),le==="oblique"&&n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:252:27",className:"v2-position"},h?"切面角度":"Section angle"," ",n.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:252:86"},We,"°"),n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:252:111","data-os-action":"","aria-label":h?"场切面角度":"Field section angle",type:"range",min:"0",max:"180",step:"1",value:We,onChange:I=>xs(+I.target.value)}),n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:252:259"},h?"只旋转切面，相机不变；切面与探针同步。":"Rotates the section, not the camera; probes remain synchronized.")),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:253:7",className:"v2-position"},h?"切片位置":"Section position"," ",n.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:253:69"},(le==="oblique"?Ve:yt(Ie,0,Qe)).toFixed(1),"%"),n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:253:176","data-os-action":"","aria-label":h?"场切片位置百分比":"Field section position percent","aria-valuetext":`${(le==="oblique"?Ve:yt(Ie,0,Qe)).toFixed(1)}%`,type:"range",min:"0",max:le==="oblique"?100:Qe,step:le==="oblique"?.1:1,disabled:!wa||Qe===0,value:le==="oblique"?Ve:Ie,onChange:I=>le==="oblique"?lt(+I.target.value):Un(+I.target.value)})),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:254:7",className:"v2-range-labels"},n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:254:40"},"0%"),n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:254:55"},"100%")),n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:254:78"},le==="oblique"?h?"三线性取样：参与插值的邻点必须全部有效，缺失处留空。":"Trilinear sampling: all contributing neighbours must be valid; missing support stays empty.":h?"按原始体素层移动，切面与下方探针同步。":"Snaps to original voxel layers; synchronized with slices and probe."),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:255:7",className:"check"},n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:255:32","data-os-action":"",type:"checkbox",checked:Jn,onChange:I=>vs(I.target.checked)}),h?"显示半透明切面":"Show translucent section plane"),n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:256:7",hidden:e&&a==="height",className:"v2-advanced"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:256:85"},h?"显示、单位与网格详情":"Display, units & grid details"),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:257:7"},le==="oblique"?`${h?"斜切角度":"Oblique angle"} ${qe.toUpperCase()} ${We}°`:`${C("Slice ")}${Ie} / ${Qe}`,n.createElement("br",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:257:148"}),C("World: "),Bs?Bs.map(I=>I.toFixed(3)).join(", "):"—",n.createElement("br",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:257:223"}),h?"原始网格坐标；单位见数据来源声明。":"Source-grid coordinates; see the source unit declaration."),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:258:7"},C("3D display mode"),n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:258:37","data-os-action":"","aria-label":C("3D display mode"),value:me?"gt":Ke,disabled:me,onChange:I=>va(I.target.value)},n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:258:161",value:"split"},C("Side by side · linked")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:258:221",value:"wire-overlay"},C("Solid + X-ray wireframe · overlap safe")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:258:305",value:"overlay"},C("Transparent overlay · blue / orange")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:258:381",value:"gt"},C("Ground Truth only")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:258:434",value:"prediction"},C("Prediction only")))),Ke==="wire-overlay"&&!me&&n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:259:40",className:"field-mode-help"},C("Blue: GT surface. Orange: Prediction wireframe, visible through GT. Geometry and scores are unchanged.")),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:260:7"},C("Preview quality"),n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:260:37","data-os-action":"",value:rn,onChange:I=>rs(I.target.value)},n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:260:102",value:"balanced"},C("Balanced · stride 2")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:260:163",value:"fine"},C("Fine · stride 1")))),n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:260:233"},C("Display only. Metrics retain the comparison lattice.")),n.createElement("fieldset",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:7",className:"field-layer-controls"},n.createElement("legend",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:50"},C("Visible layers")),[["Gt","Ground Truth","gtOpacity"],...me?[]:[["Prediction","Prediction","predictionOpacity"]]].map(([I,ee,G])=>n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:217",key:I,className:"field-layer-row"},n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:260",className:"check"},n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:285","data-os-action":"",type:"checkbox",checked:Le[`show${I}`],onChange:ce=>dt(ge=>({...ge,[`show${I}`]:ce.target.checked}))}),n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:409",className:`field-layer-dot ${I==="Gt"?"gt":"prediction"}`}),C(ee)),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:497"},C(ee),C(" opacity "),n.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:532"},Math.round(Le[G]*100),"%"),n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:581","data-os-action":"","aria-label":`${ee} opacity`,type:"range",min:".1",max:"1",step:".05",value:Le[G],disabled:!Le[`show${I}`],onChange:ce=>dt(ge=>({...ge,[G]:Number(ce.target.value)}))}))))),m==="velocity"&&n.createElement(n.Fragment,null,n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:262:36"},C("Velocity display"),n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:262:67","data-os-action":"",value:jn,onChange:I=>ls(I.target.value)},["magnitude","x","y","z"].map(I=>n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:262:170",key:I,value:I},I==="magnitude"?me?"Magnitude":C("Magnitude / EPE"):I.toUpperCase())))),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:262:300"},C("Vector count limit"),n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:262:333","data-os-action":"",type:"number",min:"1",max:"20000",value:On,onChange:I=>ms(Math.max(1,Math.min(2e4,Number(I.target.value)||1)))})),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:262:479"},C("Arrow scale"),n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:262:505","data-os-action":"",type:"number",min:".001",step:".1",value:Tn,onChange:I=>bs(Math.max(.001,Number(I.target.value)||1))})),f.availableGroups.includes("sdf")&&n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:262:690",className:"check"},n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:262:715","data-os-action":"",type:"checkbox",checked:Fn,onChange:I=>fs(I.target.checked)}),C(" Show SDF context"))),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:263:7",className:"check"},n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:263:32","data-os-action":"",type:"checkbox",checked:Dn,onChange:I=>hs(I.target.checked)}),C(" Fixed source color range")),Dn&&n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:263:162",className:"row"},mn.map((I,ee)=>n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:263:202","data-os-action":"",key:ee,"aria-label":ee?"Color maximum":"Color minimum",type:"number",value:I,step:".01",onChange:G=>gs(ce=>ce.map((ge,Ye)=>Ye===ee?Number(G.target.value):ge))}))),x&&me?n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:25",className:"alignment-report"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:63"},"Grid and provenance"),n.createElement("dl",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:101"},n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:105"},n.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:110"},"Canonical lattice"),n.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:136"},Se?.dimensions?.join(" × ")," voxels")),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:192"},n.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:197"},"Voxel size"),n.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:216"},Se?.voxelSize?.join(" × ")||"See source declaration")),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:290"},n.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:295"},"Source"),n.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:310"},"Simulation Ground Truth. No prediction alignment or error comparison.")))):n.createElement(Jl,{lattice:d?.lattice,comparison:f}))),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:5",className:"field-center"},U&&n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:47",role:"alert"},U),c&&n.createElement(fn,{error:c,zh:h,resource:h?"序列评估资源":"Sequence evaluation resources",onRetry:r}),n.createElement(fn,{error:Sn,zh:h,resource:(h?"当前帧三维资源：":"Current-frame geometry: ")+ae,onRetry:()=>K(I=>I+1)}),(s||e)&&n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:399",className:"analysis-toolbar","aria-label":h?"分析导航":"Analysis navigation"},n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:478",hidden:q},h?"当前帧":"Current frame"," ",n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:546","data-os-action":"","aria-label":"Analysis frame",value:ae??Nn[0],onChange:I=>Sa(Number(I.target.value))},Nn.map(I=>n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:699",key:I,value:I},I,wn.includes(I)||cn.includes(I)?" · 3D":"")))),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:820",hidden:J},h?"截面":"Section"," ",n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:871","data-os-action":"","aria-label":"Analysis section",value:le,onChange:I=>{ot(I.target.value),Un(null)}},["xy","xz","yz"].map(I=>n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:1004",key:I,value:I},I.toUpperCase())),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:1058",value:"oblique",disabled:!At(Se)},h?"斜切":"Oblique"))),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:1164",hidden:J},le==="oblique"?h?"位置 %":"Position %":h?"切片索引":"Slice index"," ",n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:1266","data-os-action":"","aria-label":"Analysis section position",type:"number",min:"0",max:le==="oblique"?100:Qe,step:le==="oblique"?.1:1,disabled:!wa||Qe===0,value:le==="oblique"?Ve:Ie,onChange:I=>{const ee=Number(I.target.value);Number.isFinite(ee)&&(le==="oblique"?lt(Math.max(0,Math.min(100,ee))):Un(Math.max(0,Math.min(Qe,Math.round(ee)))))}})),n.createElement("nav",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:1699",hidden:e,"aria-label":h?"分析区域":"Analysis sections"},n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:1770",href:"#analysis-spatial"},h?"三维视图":"3D view"),n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:1823",href:"#analysis-height"},h?"高度与选区":"Height & ROI"),n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:1881",href:"#analysis-slices"},h?"场切片":"Field slices"),n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:1937",href:"#analysis-summary"},h?"序列统计":"Sequence metrics")),e&&!J&&["3d","height","slices"].includes(a)&&n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:2084","data-os-action":"",ref:tn,className:"demo-settings-toggle","aria-controls":"analysis-settings","aria-expanded":Re,onClick:()=>Ae(I=>!I)},h?"视图设置":"View settings"),e&&!q&&n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:2326",className:"demo-frame-scope"},Pe.includes(ae)?h?"当前帧支持三维":"3D available for this frame":h?"当前帧仅高度与序列数据":"Height and sequence data for this frame")),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:268:7",className:"demo-geometry-panel",hidden:e&&a!=="3d"},Bn&&n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:268:99",className:"demo-surface-scope"},h?"原生 SDF 三维表面 · 支持精细／均衡显示；高度与 ROI 使用同一帧。体积场与速度切片另有覆盖范围。":"Native SDF 3D surface · Fine / Balanced display; same-frame height and ROI. Volume and velocity slices have separate coverage."),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:7",id:"analysis-spatial",className:"v2-section-heading"},!e&&n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:82"},"01"),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:98"},n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:103"},h?"3D 空间分析":"3D spatial analysis"),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:148"},me?h?"选择当前帧，查看三维场与同一位置的切片。":"Choose a frame and inspect its 3D field and synchronized slice.":h?"选择当前帧，比较三维形状与同一位置的场切片。":"Choose a frame and compare geometry and field values at the same section.")),R&&s&&n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:400",className:"demo-time-jump",href:"#analysis-summary"},h?"查看时间分析 ↓":"View time analysis ↓")),s&&ae!=null&&!Pe.includes(ae)?n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:270:65",role:"status",className:"reference-scope"},h?`帧 ${ae} 无三维缓存。仍可查看此帧的高度图和指标；未替换为邻帧。`:`Frame ${ae} has no geometry cache. Height maps and metrics retain this exact frame.`,e&&n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:270:268","data-os-action":"",onClick:()=>t("height")},h?"查看此帧高度与 ROI":"View this frame’s height & ROI")):Oe?n.createElement(vl,{onGlyphMode:ps,onShading:oe,inspection:!Je&&$e?.context===ze?$e.value:null,onSceneError:ne,controlRef:X,key:f.id,onCameraChange:lc,frameSplit:_,displayedFrame:je,labels:f.labels,geometry:he?.geometry,settings:be,bounds:fc,loadingFrame:Je?ae:null,error:null}):n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:270:395",className:"demo-geometry-start"},n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:270:432"},h?"高度分析已可使用。三维视图每帧约25 MB，点击后加载。":"Height analysis is ready. The 3D view loads about 25 MB for the selected frame."),n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:270:556","data-os-action":"",type:"button",onClick:()=>ke(!0)},h?"打开当前帧三维":"Open current frame in 3D")),Oe&&(!s||Pe.includes(ae))&&n.createElement(El,{controlRef:W,initialPlayback:O?.playback,active:S&&!y&&(!e||a==="3d"),frameSplit:_,frames:Pe,displayedFrame:je,requestedFrame:ae,status:f.status||"ready",loading:Je,onFrame:ft,onScrubbing:I=>Cn.current?.frames.setScrubbing(I)})),R&&As,za(Y)&&["report","slices"].includes(a)&&n.createElement(el,{zh:h}),s&&l?.id==="best-1027"&&n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:276:50",hidden:a!=="report"},n.createElement(F0,{control:V,bundle:s,catalog:[l],language:A,onReady:I=>{W.current?.pause(),on(1049),I||t("report")}})),yc,e&&ve&&(me&&["height","time"].includes(a)||a==="report")&&n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:281:110",className:"reference-scope"},a==="report"?h?"此样例没有96帧协议报告。可保存或恢复场比较方案；切片报告从“场切片”导出。":"This sample has no96-frame protocol report. Save or restore field views here; export slice reports from Field slices.":h?"此样例只有Ground Truth，无配对误差。请查看三维、场切片与探针。":"This sample contains Ground Truth only, without paired errors. Inspect3D, field slices and probes.",n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:281:475","data-os-action":"",onClick:()=>t("slices")},h?"查看场切片":"Open field slices")),n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:282:7",hidden:e&&a!==M,className:"analysis-source"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:282:98"},h?"数据与显示说明":"Data and display details"),n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:282:158",className:"field-saved-note"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:282:196"},me?C("Single dataset preview — no comparison scores"):`Evaluation: ${Object.values(f.settings?.sdf||{}).some(I=>I?.semantics==="water_interior")?"conditional GT-water distance support":f.settings?.sdfEvaluationRegion==="gt_water"?"GT water only":"full domain"} · Saved settings`),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:282:518"},l?.metrics?.reconstructionEvaluation?h?"Best_1027 三帧本地参考结果。原生场指标、俯视高度指标和水下 0.1 m 速度指标使用各自明确的有效域；查看下方计算规则。":"Best_1027 three-frame local reference. Native-volume, top-down height and underwater 0.1 m metrics use separate documented supports; see the protocol below.":x?me?"Ground Truth fields are shown for inspection. This example contains no prediction and has no error metrics.":"Precomputed results retain the original comparison settings and validity masks. Conditional GT-water distance scores describe their valid support only. Occupancy and surface metrics use separate validity rules; unsupported metrics remain N/A. This example is not a model-ranking benchmark. 3D and slices show the saved aligned fields.":C("Results use the saved comparison settings. Create a new comparison after changing declarations. Occupancy and surface metrics have separate validity rules. Original scores are not certified for model ranking; use Results Library common-support evaluation. 3D and slices show the original aligned fields."))),x&&n.createElement(yo,{context:hc,busy:Je})),n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:285:7",hidden:e&&a!==(ve?"height":M),open:!s,className:"legacy-height-analysis"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:285:148"},s?h?"旧预览协议 · 三帧高度诊断":"Legacy preview protocol · three-frame height diagnosis":h?"高度诊断":"Height diagnosis"),l?.metrics?.reconstructionEvaluation&&n.createElement(t0,{protocol:l.metrics.reconstructionEvaluation,frame:he?.snapshot.data,lattice:Se,frameNumber:je,busy:Je||je!==ae||Xe!==m,onFrame:ft}),!me&&m==="sdf"&&n.createElement(e0,{frame:he?.snapshot.data,lattice:Se,comparison:f,plane:be.plane,sliceIndex:be.sliceIndex,rotationAxis:be.rotationAxis,angle:be.angle,sectionPercent:be.sectionPercent,frameNumber:je,busy:Je||je!==ae||Xe!==m})),n.createElement("section",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:290:7",hidden:e&&a!=="slices",id:"analysis-slices",className:"field-slices"},za(Y)&&!q&&n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:290:180","data-os-action":"",type:"button",onClick:()=>P()},h?"打开三帧速度对照":"Open three-frame velocity comparison"),N?n.createElement(n.Fragment,null,n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:290:324","data-os-action":"",onClick:()=>F(null)},h?"返回原场切片":"Back to original field slices"),N.comparison?n.createElement(Md,{key:N.key,restored:N.restored}):n.createElement(xd,{surface:N.surface,markView:N.markView,key:N.key,frameNumber:ae,request:N.request,restored:N.restored})):n.createElement(n.Fragment,null,n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:290:764"},C("Synchronized slices & probe")),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:290:808",className:"v2-mode-caption"},Xe==="sdf"?me?h?"GT 单场切片，不含比较误差。":"GT field slices only; no comparison errors.":h?"此处为 SDF 场差值（B−A），不等于水面高度差。":"This is the SDF field difference (B−A), not water-surface height error.":h?"速度场切片与探针；瞬时矢量不是粒子轨迹。":"Velocity slices and probes; instantaneous vectors are not particle paths."),Bn?n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:290:1166",className:"reference-scope"},n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:290:1199"},h?"本帧已提供真实三维表面、高度与 ROI；完整体积场切片仅发布了以下三帧。切换帧会明确改变当前帧号。":"This frame has its actual 3D surface, height and ROI. Full volume slices are published for the three frames below. Choosing one explicitly changes the frame."),cn.map(I=>n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:290:1443","data-os-action":"",key:I,onClick:()=>Sa(I)},I))):gc?n.createElement(Al,{reportReady:en&&!y,captureScene:()=>{if(!en||y)throw Error(h?"等待当前帧与三维加载完成。":"Wait for the current frame and 3D.");return W.current?.pause(),X.current.capture()},reportLabels:{a:f.labels?.gt?.displayName||"Ground Truth",b:f.labels?.prediction?.displayName||"Prediction"},savedMetrics:Kn,region:me?null:bt,onRegion:mc,inspectionContext:ze,onInspection:Ge,busy:Je||je!==ae||he?.settings!==bn,errorScale:He,onErrorScale:In,frameNumber:je,frameSplit:_,exportStem:En,viewMetadata:pt,rotationAxis:be.rotationAxis,angle:be.angle,sectionPercent:be.sectionPercent,frame:he.snapshot.data,group:Xe,plane:be.plane,sliceIndex:be.sliceIndex,crosshair:rt,onCrosshair:bc,component:be.component,fixedRange:ws.sourceRange,lattice:Se,single:me,label:"Ground Truth"}):n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:290:2669",role:"status"},Je?`${C("Loading")} ${ae}…`:C("No field samples available for this view.")))),!R&&As,!me&&n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:292:17",open:!e,hidden:e&&a!==M,className:"demo-legacy-sequence"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:292:135"},h?"旧预览协议 · 三帧序列诊断":"Legacy preview protocol · three-frame sequence diagnostics"),n.createElement("section",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:292:236",className:"v2-field-temporal","aria-label":h?"时间分析":"Temporal analysis"},n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:292:318",className:"v2-section-heading"},n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:292:354"},"02"),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:292:369"},n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:292:374"},h?"时间分析":"Temporal analysis"),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:292:414"},h?"保留逐帧绝对误差与序列统计。只能跳转到已有三维数据的帧。":"Absolute errors and sequence statistics. Frame navigation is available only where geometry exists."))),n.createElement(Yl,{frameSplit:_,onReviewSetup:ct,comparisonId:En,frames:Pe,expectedFrames:g,metrics:qn,groups:f.availableGroups,group:Xe,status:f.status,currentFrame:je,onFrame:ft,sdfUnit:ia(he?.snapshot.data,"sdf").unit||f.settings?.sdf?.gt?.unit||"unit undeclared",velocityUnit:ia(he?.snapshot.data,"velocity").unit||f.settings?.velocity?.gt?.unit||"unit undeclared"}))),n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:294:7",hidden:e,className:"field-memory"},dc,l?.metrics?.reconstructionEvaluation?h?" · 本地三帧数据 · 按需加载":" · Local three-frame data · Loaded on demand":x?" · Published samples · Geometry prepared in your browser":C(" · Geometry prepared off the UI thread · No cloud upload"))),n.createElement("aside",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:296:5",className:"field-results",hidden:e&&(!ve||!["time","report"].includes(a))},s&&n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:296:131",className:"reference-scope"},h?"旧预览协议 · 三帧空间诊断":"Legacy preview protocol · three-frame spatial diagnostics"),n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:296:248"},C("Current frame "),n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:296:274"},je??"—")),me?n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:296:312"},C("Single dataset preview — no comparison scores")):n.createElement(Ml,{frame:je,metrics:Kn,group:Xe,unit:Qn?.unit||""}),!me&&n.createElement(n.Fragment,null,n.createElement(Ul,{group:Xe}),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:297:56",className:"field-exports"},n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:297:87"},C("Export results")),n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:297:118","data-os-action":"",disabled:!qn,onClick:()=>Ta(`${En}_metrics.json`,JSON.stringify({...qn,current_view:pt},null,2))},C("Export JSON")),n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:297:296","data-os-action":"",disabled:!Kn,onClick:()=>{const I=["metric,value",...Object.entries(pt).map(([ee,G])=>[ee,typeof G=="object"?JSON.stringify(G):String(G??"")].map(ce=>'"'+String(ce).replaceAll('"','""')+'"').join(",")),`sdf_error_region,${Kn?.sdf?.evaluationRegion||f.settings?.sdfEvaluationRegion||"full_domain"}`];for(const[ee,G]of Object.entries(Kn?.[Xe]||{}))(typeof G=="number"||G===null)&&I.push(`${ee},${G??""}`);Ta(`${En}_${je}_${Xe}.csv`,I.join(`
`),"text/csv")}},C("Export CSV")),n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:297:918"},x?"Download saved values: JSON includes all metric records; CSV describes the displayed frame.":C("JSON: sequence · CSV: displayed frame. Saved-result ZIP includes source names and complete provenance.")))),!me&&n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:298:17"},C("All metric averages and per-frame values are below the synchronized slices. Use the SDF / Velocity tabs to switch field groups."))))}const Nd={kind:"field",parse:s0,read:i0,write:c0,validate:xn,error:o0,title:e=>e?"场比较方案":"Saved field views",intro:e=>e?"保存样例、SDF/速度分量、帧、切面、探针、视角、色标、透明度、箭头与播放设置。恢复时重新读取数据并暂停播放；已有评分保持不变。":"Save sample, SDF/velocity component, frame, section, probe, camera, color scales, opacity, arrows and playback settings. Restore reloads data and pauses playback; saved scores are unchanged.",describe:(e,a)=>`${e.settings.caseId} · ${e.settings.group.toUpperCase()}${e.settings.group==="velocity"?" / "+e.settings.component:""} · ${a?"帧":"Frame"} ${e.settings.frame} · ${e.settings.plane==="oblique"?(e.settings.rotationAxis||"y").toUpperCase()+" "+e.settings.angle+"° / "+e.settings.sectionPercent+"%":e.settings.plane.toUpperCase()+" / "+e.settings.sliceIndex}`,storageNote:e=>e?"场方案与水面方案分开保存。仅保存在当前浏览器和网站地址；清除网站数据会丢失，请导出备份。导入文件仅在本机读取，不含场数据或计算结果；仅支持场比较方案 JSON。":"Field views are stored separately from wave views in this browser and site address. Clearing site data removes them; export a backup. Imports are read locally and contain no field arrays or computed results. Only field-view JSON is supported."};function Fd(e){return n.createElement(xo,{adapter:Nd,...e})}function Bt(e){if(new TextEncoder().encode(e).length>2*1024*1024)throw Error("Analysis file too large");let a;try{a=JSON.parse(e)}catch{throw Error("Invalid analysis JSON")}if(a?.schema==="oceanscope.paired-case.v1")return{kind:"pairedCase",value:a};if(a?.schema===Ut)return{kind:"report",value:a};if(a?.schema===as)return{kind:"velocity",value:a};if(a?.schema===ss)return{kind:"velocityComparison",value:a};if(a?.schema===qa)return{kind:"field",value:a};if(a&&!a.schema&&a.schemaVersion===1&&typeof a.runId=="string"&&a.protocol&&a.datasetA&&a.datasetB&&"subset"in a&&"metric"in a&&"frame"in a)return{kind:"selection",value:a};throw Error("Unsupported analysis file")}const Od={pairedCase:["一页案例：核验水面和速度资源，恢复热点、双剖面、切片与配对流线。","One-page case: verify both resources and restore the hotspot, profiles, slice and streamlines."],velocityComparison:["三帧速度对照：核验三个速度资源，恢复固定选区、探针、箭头和第三图。","Three-frame velocity comparison: verify all three resources and restore the fixed ROI, probe, arrows, and comparison map."],velocity:["速度诊断报告：重新核验对应帧的速度资源，恢复切片、ROI、探针、箭头和方向阈值。","Velocity report: verify the selected frame’s velocity resource and restore the slice, ROI, probe, arrows, and direction threshold."],report:["完整分析报告：恢复帧、选区、探针、截面和可用相机；重新核验资源。","Analysis report: restore frame, ROI, probe, section and available camera; verify resources again."],field:["场比较方案：恢复数据组合、三维帧、显示设置与相机；不含水面高度选区。","Field view: restore dataset, geometry frame, display settings and camera; no surface-height ROI."],selection:["序列选择：只恢复帧号、帧集合与曲线类型；不恢复选区或相机。","Sequence selection: restore only frame, frame set and curve; no ROI or camera."]};function Td({onRestore:e,zh:a,controlRef:t}){const[s,c]=j.useState(""),[i,o]=j.useState(""),[r,f]=j.useState(null),[d,m]=j.useState(""),[u,v]=j.useState(!1),g=j.useRef(null);function p(){g.current&&(g.current.abort(),g.current=null,v(!1),m(a?"恢复已取消，保留后续操作。":"Restore cancelled; newer actions retained."))}j.useImperativeHandle(t,()=>({cancel:p})),j.useEffect(()=>()=>g.current?.abort(),[]);let l;try{s.trim()&&(l=Bt(s))}catch{}async function b(B){if(p(),!B)return;const E=new AbortController;g.current=E,f(null),c(""),o(B.name),m("");try{if(B.size>2*1024*1024)throw Error("Analysis file too large");const y=await B.text();E.signal.throwIfAborted(),Bt(y),c(y)}catch(y){E.signal.aborted||f(y)}finally{g.current===E&&(g.current=null)}}async function w(){p();const B=new AbortController;g.current=B,v(!0),f(null),m(a?"正在识别文件并核验资源…":"Recognizing the file and verifying resources…");try{const E=Bt(s);await e(s,E,B.signal),B.signal.throwIfAborted(),m(a?"恢复完成。请核对当前帧和范围；导出前重新生成报告。":"Restored. Check frame and scope; create a fresh report before exporting.")}catch(E){B.signal.aborted||(f(E),m(""))}finally{g.current===B&&(g.current=null,v(!1))}}return n.createElement("details",{"data-os-loc":"src/RestoreAnalysis.jsx:11:9",id:"restore-analysis",className:"restore-analysis"},n.createElement("summary",{"data-os-loc":"src/RestoreAnalysis.jsx:11:69","data-review-title":"","data-review-id":"restore-analysis"},a?"恢复分析 · 打开 JSON":"Restore analysis · Open JSON"),n.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:195"},a?"选择文件或粘贴内容，工具会识别恢复范围。文件在本机读取，仍需匹配的数据资源。":"Choose a file or paste its contents. The tool identifies what it restores. Files stay local; matching data resources are required."),n.createElement("label",{"data-os-loc":"src/RestoreAnalysis.jsx:11:380"},a?"选择分析文件":"Choose analysis file"," ",n.createElement("input",{"data-os-loc":"src/RestoreAnalysis.jsx:11:424","data-os-action":"",type:"file",accept:".json,application/json","aria-label":"Analysis JSON file",onChange:B=>{b(B.target.files?.[0]),B.target.value=""}})),i&&n.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:587"},i),n.createElement("label",{"data-os-loc":"src/RestoreAnalysis.jsx:11:605"},a?"或粘贴 JSON":"Or paste JSON",n.createElement("textarea",{"data-os-loc":"src/RestoreAnalysis.jsx:11:643","data-os-action":"","aria-label":"Analysis JSON text",rows:"4",value:s,onChange:B=>{p(),c(B.target.value),o(""),f(null),m("")}})),l&&n.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:823",className:"import-kind"},Od[l.kind][a?0:1]),n.createElement("div",{"data-os-loc":"src/RestoreAnalysis.jsx:11:900",className:"reference-controls"},n.createElement("button",{"data-os-loc":"src/RestoreAnalysis.jsx:11:936","data-os-action":"",disabled:!s.trim()||u,onClick:w},a?"恢复这份分析":"Restore this analysis"),u&&n.createElement("button",{"data-os-loc":"src/RestoreAnalysis.jsx:11:1045","data-os-action":"",onClick:p},a?"取消恢复":"Cancel restore")),n.createElement(fn,{error:r,zh:a}),n.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:1152",role:"status","aria-live":"polite"},d))}const Dd=`{
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
`,$d=`{
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
`,Wd=`# OceanScope public source summary

This release presents supplied scene and model descriptions as claims, not independently audited training history. Original machine paths and source prose are omitted. Numerical results, masks and protocol identities are retained.

- Model: "Model A"
- Scene: "v2 Gentle clean full-SDF velocity"
- Camera configuration: ["camera29","camera32","camera35","camera02","camera05","camera08","camera11","camera14","camera17","camera20","camera23","camera26"]
- Source frame rate: "24 fps; 1001–1096"
- Train / validation / test: "v2 all96 test; never used for training/checkpoint choice"
- OceanBox training scenes: ["variant_00000","variant_00001","variant_00002","variant_00003","variant_00004","variant_00008"]
- Preprocessing: "Temporal smoothing"
- Unit evidence: "source convention; not independently calibrated"
`,Vd=`# OceanScope public source summary

This release presents supplied scene and model descriptions as claims, not independently audited training history. Original machine paths and source prose are omitted. Numerical results, masks and protocol identities are retained.

- Model: "Model A"
- Scene: "v2 Gentle clean full-SDF velocity"
- Camera configuration: ["camera29","camera32","camera35","camera02","camera05","camera08","camera11","camera14","camera17","camera20","camera23","camera26"]
- Source frame rate: "24 fps; 1001–1096"
- Train / validation / test: "v2 all96 test; never used for training/checkpoint choice"
- OceanBox training scenes: ["variant_00000","variant_00001","variant_00002","variant_00003","variant_00004","variant_00008"]
- Preprocessing: "Temporal smoothing"
- Unit evidence: "source convention; not independently calibrated"
`;function zd(e,a){const t=[];(e?.gtRole!=="gt"||a?.gtRole!=="gt"||e?.predictionRole!=="prediction"||a?.predictionRole!=="prediction")&&t.push("Explicit GT/prediction roles required");for(const c of["scene","gtManifest","protocolSha256","frameIds","domain","unitStatus"])(e?.[c]==null||a?.[c]==null||Vn(e[c])!==Vn(a[c]))&&t.push(`Different or unknown ${c}`);const s=["camera","model","preprocessing"].filter(c=>Vn(e?.[c])!==Vn(a?.[c]));return{comparable:t.length===0,blockedReasons:t,differences:s}}async function Xd(e,a,t){const s=JSON.parse(e);if(s.schemaVersion!==1||s.runId!==a.runId||s.protocolSha256!==a.protocol.sourceScriptSha256||s.manifestA!==a.datasetA.manifestSha256||s.manifestB!==a.datasetB.manifestSha256)throw Error("Declaration identity mismatch");if(!Array.isArray(s.entries)||new Set(s.entries.map(i=>i.id)).size!==s.entries.length)throw Error("Invalid declarations");const c={gtIdentity:s.manifestA,predictionIdentity:s.manifestB};for(const i of s.entries){if(!["claimed","verified","unknown"].includes(i.status)||!i.id||!i.label)throw Error("Invalid declaration status");if(i.status==="unknown"&&i.value!==null)throw Error("Unknown declaration must have no asserted value");if(i.status==="verified"&&(!Object.hasOwn(c,i.id)||i.value!==c[i.id]))throw Error("Unsupported independent verification claim");if(i.status==="claimed"&&!i.source)throw Error("Claim needs its source");if(i.source&&(typeof t[i.source.file]!="string"||await Fs(t[i.source.file])!==i.source.sha256))throw Error("Declaration source checksum mismatch")}if(s.conditions?.gtManifest!==s.manifestA||s.conditions.protocolSha256!==s.protocolSha256||Vn(s.conditions.frameIds)!==Vn(a.frameIds)||!zd(s.conditions,s.conditions).comparable)throw Error("Declaration conditions mismatch");return{...s,sha256:await Fs(e)}}async function Zd(e){if(e.id!=="best-1027")return null;const a=await $c(Dd,da,e);return{...a,verifiedPayloadSha256:da.sha256,declarations:await Xd($d,a,{"METRICS.md":Wd,"SPLIT.md":Vd})}}function Gd({analysisSection:e,onAnalysisSection:a,item:t,active:s,viewApiRef:c,initialView:i,onViewReady:o,onViewRestored:r,restoring:f,onCancelImport:d}){const{language:m}=fe(),u=m==="zh",[v,g]=j.useState(()=>i?.settings.group||(t.comparison.settings?.previewOnly&&t.comparison.availableGroups.includes("velocity")?"velocity":"sdf")),[p,l]=j.useState(null),[b,w]=j.useState(""),B=j.useRef(xi()),[E,y]=j.useState(0);j.useEffect(()=>(l(null),w(""),B.current.run(()=>Zd(t)).then(C=>{C&&l(C)}).catch(C=>w(C.message)),()=>B.current.cancel()),[t,E]);const _=!!t.comparison.settings?.previewOnly,x=!!t.metrics?.reconstructionEvaluation,S=n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:22:14",className:"public-field-provenance"},n.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:22:55"},t.description),n.createElement("dl",{"data-os-loc":"src/FieldSamples.jsx:22:80"},n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:23:3"},n.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:23:8"},"Ground Truth"),n.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:23:29"},t.comparison.labels?.gt?.displayName)),n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:24:3"},n.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:24:8"},"Prediction"),n.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:24:27"},_?u?"未提供；不计算误差":"Not included; no error scores":t.comparison.labels?.prediction?.displayName)),n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:25:3"},n.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:25:8"},u?"三维表面 / 体积场":"3D surface / volume frames"),n.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:25:63"},fa(t).length?`1001–1096 / ${t.processing.frames.map(C=>C.frame).join(", ")}`:t.processing.frames.map(C=>C.frame).join(", "))),n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:26:3"},n.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:26:8"},u?"数据语义":"Data semantics"),n.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:26:45"},x?u?"原分辨率有效 SDF/速度对比；三帧高度与水下速度评估，采用明确的本地计算规则。":"Native valid SDF/velocity comparison; three-frame height and underwater evaluation under an explicit local protocol.":_?u?"单位未声明":"Units undeclared":u?"条件性 GT 水体距离误差；外部填充值不参与距离评分":"Conditional GT-water distance scores; filled exterior excluded from distance scoring"))));return n.createElement(Id,{focusedLayout:!0,workspace:e,onWorkspace:a,unifiedRestore:!0,onCancelImport:d,onRetryEvaluation:()=>y(C=>C+1),evaluation:p,evaluationError:b,comparison:t.comparison,processing:t.processing,activeGroup:v,onActiveGroup:g,setup:S,expectedFrames:Object.keys(t.metrics?.frames||{}).map(Number),metricsOverride:t.metrics||null,sourceCase:t,viewApiRef:c,initialView:i,onViewReady:o,onViewRestored:r,restoring:f,readOnly:!0,active:s})}function e1({request:e,active:a=!0,analysisSection:t="3d",onAnalysisSection:s}){const{tr:c,language:i}=fe(),o=i==="zh",r=j.useRef(null),f=j.useRef(0),d=j.useRef(null),m=j.useRef(null);j.useEffect(()=>()=>m.current?.reject(new DOMException("Cancelled","AbortError")),[]),j.useEffect(()=>{(!a||t!=="report")&&d.current?.cancel()},[a,t]);const[u,v]=j.useState(0),[g,p]=j.useState(null),[l,b]=j.useState(!1),[w,B]=j.useState(!1),[E,y]=j.useState(null),[_,x]=j.useState(null),[S,C]=j.useState(""),[A,h]=j.useState(""),[R,M]=j.useState(""),[N,F]=j.useState(0),[V,H]=j.useState(!1);j.useEffect(()=>{let z=!0;return Wc().then(k=>{if(!z)return;il(k.cases),x(k);const P=kt("public-case")?.id,O=k.cases.some(X=>X.id===P)?P:k.defaultCaseId||k.cases[0].id;C(O),h(O),M("")}).catch(k=>{z&&M(k.message)}),()=>{z=!1}},[N]),j.useEffect(()=>{e?.id&&_?.cases.some(z=>z.id===e.id)&&J(e.id)},[e,_]),j.useEffect(()=>{S&&Ci("public-case",{id:S})},[S]);function J(z){d.current?.cancel(),v(++f.current),r.current?.pause(),p(null),B(!1),b(!1),y(null),C(z),h(z),H(!1)}function q(z){try{const k=xn(z,_.cases);r.current?.pause();const P=++f.current;v(P),b(!1),B(!0),y(null),H(!1),C(k.settings.caseId),h(k.settings.caseId),p({doc:k,token:P})}catch(k){y({error:k})}}async function Y(z,k,P){if(P.throwIfAborted(),k.kind!=="field"){if(!r.current?.restoreAnalysis)throw Error("Analysis is not ready");return r.current.restoreAnalysis(z,k.kind,P)}const O=xn(k.value,_.cases);return new Promise((X,W)=>{const T=()=>{m.current?.signal===P&&(m.current=null,++f.current,p(null),B(!1),W(new DOMException("Cancelled","AbortError")))};P.addEventListener("abort",T,{once:!0});const Z=ne=>{P.removeEventListener("abort",T),ne?W(ne):X()};m.current={signal:P,finish:Z,reject:W},q(O)})}function D(z,k){if(z!==f.current)return;const P=m.current;m.current=null,P?.finish(k),B(!1),y(k?{error:k}:{cn:"场方案已恢复：样例、帧、切面、探针、视角与显示设置已同步，播放已暂停。",en:"Field view restored: sample, frame, section, probe, camera and display settings are synchronized. Playback paused."})}const $=_?.cases.find(z=>z.id===S),U=_?.cases.find(z=>z.id===A);return $?.comparison.settings?.previewOnly,n.createElement("section",{"data-os-loc":"src/FieldSamples.jsx:62:9",className:"public-field-demo","aria-label":"Published field examples"},n.createElement("header",{"data-os-loc":"src/FieldSamples.jsx:63:3",className:"demo-case-header"},n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:63:40"},n.createElement("h1",{"data-os-loc":"src/FieldSamples.jsx:63:45"},$?.name||(o?"场分析":"Field analysis")),n.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:63:95"},$&&(o?`${fa($).length||$.processing.frames.length}帧三维 · ${$.processing.frames.length}帧体积场`:`${fa($).length||$.processing.frames.length} 3D frames · ${$.processing.frames.length} volume frames`))),n.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:63:357","data-os-action":"",disabled:w,"aria-expanded":V,onClick:()=>{h(S),H(z=>!z)}},o?"数据与示例":"Datasets & examples")),R?n.createElement(fn,{error:R,zh:o,resource:o?"示例目录":"Sample catalogue",onRetry:()=>F(z=>z+1)}):_?n.createElement(n.Fragment,null,V&&n.createElement("section",{"data-os-loc":"src/FieldSamples.jsx:66:14",className:"sample-setup","aria-label":"Sample dataset selection"},n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:66:86",className:"sample-setup-heading"},n.createElement("h2",{"data-os-loc":"src/FieldSamples.jsx:66:124"},o?"数据与对比设置":"Datasets & comparison setup"),n.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:66:177"},o?"选择已发布的数据组合，打开已有分析结果。":"Choose a published dataset pair to open its existing analysis.")),n.createElement("label",{"data-os-loc":"src/FieldSamples.jsx:67:5"},o?"示例组合":"Published example",n.createElement("select",{"data-os-loc":"src/FieldSamples.jsx:67:43","data-os-action":"","aria-label":"Published field example",value:A,onChange:z=>h(z.target.value)},_.cases.map(z=>n.createElement("option",{"data-os-loc":"src/FieldSamples.jsx:67:168",key:z.id,value:z.id},z.name)))),U&&n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:68:13",className:"sample-dataset-grid"},n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:68:50",className:"sample-source"},n.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:68:81",className:"source-role"},"GROUND TRUTH"),n.createElement("h3",{"data-os-loc":"src/FieldSamples.jsx:68:130"},U.comparison.labels?.gt?.displayName),n.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:68:181"},U.comparison.availableGroups.join(" + ").toUpperCase()),n.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:68:248"},o?"可用":"Ready")),n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:68:284",className:"sample-source"},n.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:68:315",className:"source-role prediction"},"PREDICTION"),n.createElement("h3",{"data-os-loc":"src/FieldSamples.jsx:68:373"},U.comparison.settings?.previewOnly?o?"无预测数据":"No prediction included":U.comparison.labels?.prediction?.displayName),n.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:68:509"},U.comparison.settings?.previewOnly?o?"独立查看，不显示误差指标":"Standalone inspection without error metrics":o?"已对齐的场数据 · 已记录的计算规则":"Aligned fields · Recorded evaluation protocol"))),n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:69:5",className:"sample-actions"},n.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:69:37"},o?"本工具读取已有样例与分析资源；原始 VDB / ABC 处理需使用配套离线流程。":"This tool reads existing samples and analysis resources; raw VDB / ABC processing uses the separate offline workflow."),n.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:69:217","data-os-action":"",onClick:()=>H(!1)},o?"取消":"Cancel"),n.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:69:284","data-os-action":"",className:"primary",onClick:()=>{J(A)}},U?.comparison.settings?.previewOnly?o?"查看 Ground Truth":"View Ground Truth":o?"打开已有对比":"Open saved comparison"))),$&&n.createElement(n.Fragment,null,n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:71:13",className:"demo-session-tools",hidden:t!=="report"},n.createElement(Td,{controlRef:d,zh:o,onRestore:Y}),n.createElement(Fd,{unifiedRestore:!0,catalog:_.cases,ready:l,restoring:w,onCapture:()=>r.current.captureView(),onRestore:q,restoreNotice:E})),n.createElement(Gd,{analysisSection:t,onAnalysisSection:s,onCancelImport:()=>d.current?.cancel(),key:`${$.id}:${u}`,item:$,active:a,viewApiRef:r,initialView:g?.doc,onViewReady:b,restoring:w,onViewRestored:z=>D(g?.token,z)}))):n.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:65:130",role:"status"},o?"正在加载示例…":"Loading samples…"))}export{e1 as default};
