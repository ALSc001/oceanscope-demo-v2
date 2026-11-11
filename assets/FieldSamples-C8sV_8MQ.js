import{v as xs,g as pr,p as vs,D as jn,a as ur,b as hr,o as Es,c as gr,s as yr,S as Ea,d as ja,e as as,f as oo,h as xr,i as vr,j as Er,k as _r}from"./surfaceResources-B6poyDlB.js";import{r as j,R as n,u as ue,c as ro,s as wr,d as co,p as lo,e as _a,f as aa,v as lt,g as dt,l as Ca,h as ft,i as Wn,j as wa,k as li,m as di,n as Sr,C as fo,o as jr,q as Cr,t as mo,x as Br,y as Ar,z as bo,A as po,B as $a,D as fi,E as mi,F as bi,G as pi,H as kr,I as Mr,J as Pr,K as Rr,L as Ir,a as Nr,b as ts,w as uo,M as ui,N as Qn,O as Fr}from"./workbench-tuGm_Vcs.js";import{d as Tt,l as Or}from"./publicData-Dh1-tQFp.js";import{a4 as Tr,t as Sn,a5 as ss,a6 as ea,a7 as Dr,b as yt,S as ho,V as Me,a8 as go,a9 as nt,aa as yo,a as xo,ab as at,d as is,ac as Ma,L as zr,M as Vr,n as Wr,h as zn,w as mt,u as os,z as $r,W as Xr,m as Gr,j as Zr,C as Dt,k as Hr,O as Lr,ad as qr,l as Yr,ae as Ur,g as Jr,r as Kr,y as Qr,v as zt,s as Vt,q as ec,i as nc,B as hi,o as ac,D as tc,p as sc,af as ic,ag as oc,x as rc,ah as gi,ai as yi,aj as cc,ak as lc,a0 as dc,al as fc,am as mc,an as bc,ao as pc,ap as uc,aq as vo,ar as hc,as as gc,a2 as Wt,_ as yc,Y as xc,I as vc}from"./SectionRotation-CxUTgwgf.js";import{b as Ec,e as xi,d as _c,c as vi}from"./comparisonExport-rG_qP9SP.js";import{e as wc}from"./verticalSection-DptfHDZh.js";const Sc="539734f929b2d3d4a53adb2563bc9598e1cc8efcd33439f8a39db052bafb28bd",jc="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",Cc="gentle",Bc="best1027",Ac="e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",kc="323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",Sa={sha256:Sc,protocolSha256:jc,datasetA:Cc,datasetB:Bc,manifestA:Ac,manifestB:kc},Mc="oceanscope.velocity-alignment.v1",Pc=1001,Rc="best-1027",Ic="partial",Nc=!0,Fc={gt:{frame:1001,file:"clean_fullsdf_vel.1001.vdb",bytes:10508067,sha256:"8cd757ed7cecfe8f677a6e8994e053bcbb178e93a8c0b257a82c89b14de954be",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1001,file:"recon_fullsdf_vel.1001.vdb",bytes:10562288,sha256:"fd0ab7ff40ed007eb3543c6326ba10f7f98dbda59e094a0dbfbb2066b4212f26",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},Oc={frame:1001,url:"/data/velocity-raw/1001.ocfld.gz",packedBytes:15074066,packedSha256:"c1284e150f6c95880ae942c08fb3a54209096127c13ed9d14e4d48a8cac6a54b",decodedBytes:62391416,decodedSha256:"723f73f42097cede6faf03a7cd106af8d7aef55eabcdc4207b469fb9a1a4a197",roundtrip:"exact"},Tc={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},Dc={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},zc={gt:0,prediction:2856765473069345e-22},Vc=2856765473069345e-22,Wc=["x","y","z"],$c="ZYX",Xc={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},Gc="m/s",Zc="Existing source convention only; no independent physical or time calibration.",Hc="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",Lc={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},qc={resource:{frame:1001,url:"/data/fields/best-1027/1001.ocfld.gz",packedBytes:26128772,packedSha256:"3a504d78eefed6ef1a3e5fef3523f62eb7f0a13ae68e67e8cb23907f4b6f6f46",decodedBytes:99523224,decodedSha256:"8760d8da4ce6ac716b433ede5c787ba13baff142a4324fb03e13824f90e978f8"},comparison:{gt:{error:"vel.x values differ at 1363784 samples; max 2.8210940528072825e-16"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: vel.x values differ at 1363784 samples; max 2.8210940528072825e-16"],retainedUnchanged:!0},Yc="exact",Uc={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:179815,sha256:"6264bad6598a054b1ac18538a73305aa383761e97e67b4e8120f74a6f73fab06"},common:{count:177960,sha256:"33db691f210a15dd5e533103720e9708b363e05c66e4cc266f14413335d8371f"},computable:{count:177960,sha256:"33db691f210a15dd5e533103720e9708b363e05c66e4cc266f14413335d8371f"}},Jc=0,Kc=[],Qc="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",el={schema:Mc,frame:Pc,caseId:Rc,status:Ic,dataAndDomainVerified:Nc,source:Fc,resource:Oc,lattice:Tc,originalLattices:Dc,cacheLatticeMaxDisplacement:zc,pairMaxDisplacement:Vc,componentOrder:Wc,arrayOrder:$c,vectorBasis:Xc,unitClaim:Gc,unitEvidence:Zc,protocolSha256:Hc,domainDefinition:Lc,legacyCache:qc,diagnosticRoundtrip:Yc,domain:Uc,nonfiniteExcluded:Jc,failures:Kc,scope:Qc},nl="oceanscope.velocity-alignment.v1",al=1049,tl="best-1027",sl="partial",il=!0,ol={gt:{frame:1049,file:"clean_fullsdf_vel.1049.vdb",bytes:11105671,sha256:"a821ec84b9f2eecc09f234cdf05050e77e3572d6f9c3d46bce94d0a28f328df9",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1049,file:"recon_fullsdf_vel.1049.vdb",bytes:10571839,sha256:"ff18d054439135a9c39abc139aa628ca7dcb753dd46b389b86bde47747f5d4c3",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},rl={frame:1049,url:"/data/velocity-raw/1049.ocfld.gz",packedBytes:15261605,packedSha256:"913c1ddbec87d484f71905720334c90ca6ebccdad5c48a543f69eb405308e707",decodedBytes:62391416,decodedSha256:"403ff5ea6e2afcd3129761caa6a5adf7f2699e180d1733e85774ea1a55df4ef1",roundtrip:"exact"},cl={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},ll={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},dl={gt:0,prediction:2856765473069345e-22},fl=2856765473069345e-22,ml=["x","y","z"],bl="ZYX",pl={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},ul="m/s",hl="Existing source convention only; no independent physical or time calibration.",gl="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",yl={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},xl={resource:{frame:1049,url:"/data/fields/best-1027/1049.ocfld.gz",packedBytes:26633403,packedSha256:"1443fd356c49996f7b7bac3ab8d8ee9fc4b40d9a6d4a0734b2a0e6e2592c2548",decodedBytes:99523224,decodedSha256:"ad0deb564ccd2db1fc91e4db9f711acaa8f6c231e3acca426773f8bb0cbf851a"},comparison:{gt:{error:"sdf values differ at 2 samples; max 0.0"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: sdf values differ at 2 samples; max 0.0"],retainedUnchanged:!0},vl="exact",El={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:189062,sha256:"adaf091d8684752b63cdf670a7f10b150720ed4342c7042ee4ee70311055d839"},common:{count:184957,sha256:"6367149b8f2ca91ca5e7dd4c5eeb75c22cf814b39535732dd9fb2f2a698599de"},computable:{count:184957,sha256:"6367149b8f2ca91ca5e7dd4c5eeb75c22cf814b39535732dd9fb2f2a698599de"}},_l=0,wl=[],Sl="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",jl={schema:nl,frame:al,caseId:tl,status:sl,dataAndDomainVerified:il,source:ol,resource:rl,lattice:cl,originalLattices:ll,cacheLatticeMaxDisplacement:dl,pairMaxDisplacement:fl,componentOrder:ml,arrayOrder:bl,vectorBasis:pl,unitClaim:ul,unitEvidence:hl,protocolSha256:gl,domainDefinition:yl,legacyCache:xl,diagnosticRoundtrip:vl,domain:El,nonfiniteExcluded:_l,failures:wl,scope:Sl},Cl="oceanscope.velocity-alignment.v1",Bl=1096,Al="best-1027",kl="partial",Ml=!0,Pl={gt:{frame:1096,file:"clean_fullsdf_vel.1096.vdb",bytes:11272288,sha256:"7153212dbf15d5970fab77d2c187a858fa5735447abfcd8dfc717fa1844d4e94",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1096,file:"recon_fullsdf_vel.1096.vdb",bytes:10500539,sha256:"16187d0cad3236b3ebef4900650d0b3cd98294ef9ab248088797a73365200db2",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},Rl={frame:1096,url:"/data/velocity-raw/1096.ocfld.gz",packedBytes:15329856,packedSha256:"a0731f4996fadbe7d2e7c9b5562250ead6a8cc817a2f7b1f44d393c45d86dd7d",decodedBytes:62391416,decodedSha256:"bfe8078ba7a9436b73b8906e210a8e7d8f0b312fc772c4ee0e68f9e282fedb9c",roundtrip:"exact"},Il={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},Nl={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},Fl={gt:0,prediction:2856765473069345e-22},Ol=2856765473069345e-22,Tl=["x","y","z"],Dl="ZYX",zl={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},Vl="m/s",Wl="Existing source convention only; no independent physical or time calibration.",$l="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",Xl={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},Gl={resource:{frame:1096,url:"/data/fields/best-1027/1096.ocfld.gz",packedBytes:26932173,packedSha256:"5900168e2e47a98c85f505558e49c754619e3824ea1404299d783fd7451dd0ee",decodedBytes:99523224,decodedSha256:"1cdb1261a33ed72f515bd59a75668467cbb8d7f78da7af6b360653cf6cbcb2f9"},comparison:{gt:{error:"sdf values differ at 1 samples; max 0.0"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: sdf values differ at 1 samples; max 0.0"],retainedUnchanged:!0},Zl="exact",Hl={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:223882,sha256:"3d3747b91823a8c0b8e2d7487c955abe70b257b49b9079a660ddb1112f7c5cf9"},common:{count:217252,sha256:"f4cca5ed859acd6e09a9ab9318b117c094d2647572e72b961768938e558395a8"},computable:{count:217252,sha256:"f4cca5ed859acd6e09a9ab9318b117c094d2647572e72b961768938e558395a8"}},Ll=0,ql=[],Yl="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",Ul={schema:Cl,frame:Bl,caseId:Al,status:kl,dataAndDomainVerified:Ml,source:Pl,resource:Rl,lattice:Il,originalLattices:Nl,cacheLatticeMaxDisplacement:Fl,pairMaxDisplacement:Ol,componentOrder:Tl,arrayOrder:Dl,vectorBasis:zl,unitClaim:Vl,unitEvidence:Wl,protocolSha256:$l,domainDefinition:Xl,legacyCache:Gl,diagnosticRoundtrip:Zl,domain:Hl,nonfiniteExcluded:Ll,failures:ql,scope:Yl},Jl=new Map([[1001,el],[1049,jl],[1096,Ul]]);function Xn(e){const a=Jl.get(e);return!a||a.frame!==e||a.caseId!=="best-1027"||!a.dataAndDomainVerified||a.diagnosticRoundtrip!=="exact"||a.resource.frame!==e||a.resource.url!==`/data/velocity-raw/${e}.ocfld.gz`||a.protocolSha256!==Sa.protocolSha256||a.source.gt.manifestSha256!==Sa.manifestA||a.source.prediction.manifestSha256!==Sa.manifestB?null:a}const Kl=[1001,1049,1096];async function Eo(e,a){const t=await new Promise((s,i)=>{const o=indexedDB.open("oceanscope-native-velocity",1);o.onupgradeneeded=()=>o.result.createObjectStore("files"),o.onsuccess=()=>s(o.result),o.onerror=()=>i(o.error)});try{return await new Promise((s,i)=>{const o=t.transaction("files",e),r=a(o.objectStore("files"));o.oncomplete=()=>s(r.result),o.onabort=()=>i(o.error),o.onerror=()=>i(o.error)})}finally{t.close()}}function Ql(e){return Eo("readonly",a=>a.get(e.packedSha256))}async function ed(e){const a=Kl.map(Xn).find(t=>t.resource.packedBytes===e.size);if(!a)throw Error("Unsupported native velocity file size");return await xs(await e.arrayBuffer(),a.resource),await Eo("readwrite",t=>t.put(e,a.resource.packedSha256)),a.frame}function nd({zh:e}){const[a,t]=j.useState(!1),[s,i]=j.useState("");async function o(r){const c=Array.from(r.target.files);if(r.target.value="",!c.length)return;t(!0);const d=[],l=[];for(const m of c)try{d.push(await ed(m))}catch{l.push(m.name)}i([d.length&&(e?"本浏览器已保存核验帧 ":"Verified frames saved in this browser: ")+d.join(", "),l.length&&(e?"未能核验或保存，请核对文件和浏览器存储权限。":"Check the file and browser storage permission: ")+l.join(", ")].filter(Boolean).join(" · ")),t(!1),d.length&&window.dispatchEvent(new CustomEvent("oceanscope-velocity-files",{detail:d}))}return n.createElement("section",{"data-os-loc":"src/field/VelocityFiles.jsx:24:10",className:"reference-scope","aria-label":"Native velocity resources","aria-busy":a},n.createElement("label",{"data-os-loc":"src/field/VelocityFiles.jsx:25:5"},e?"在本机选择原生速度文件":"Choose native velocity files on this device"," ",n.createElement("input",{"data-os-loc":"src/field/VelocityFiles.jsx:26:7","data-os-action":"",type:"file",multiple:!0,accept:".gz","aria-label":"Verified velocity files",disabled:a,onChange:o})),n.createElement("small",{"data-os-loc":"src/field/VelocityFiles.jsx:28:5"},e?"1001、1049、1096 的 .ocfld.gz 文件只在此浏览器内校验、保存及计算。":"Select the .ocfld.gz for 1001, 1049 or 1096. Verification, storage and calculations run in this browser."),n.createElement("p",{"data-os-loc":"src/field/VelocityFiles.jsx:29:5",role:"status"},a?e?"正在校验原生速度文件…":"Verifying native velocity files…":s))}function ad({fetchFrame:e,decode:a,byteBudget:t=268435456,maxFrames:s=5}){const i=new Map,o=new Map;let r=null,c=0,d=!1,l=!1;const m=(h,f)=>`${h}:${f}`,b=()=>[...i.values()].reduce((h,f)=>h+f.byteLength,0);function v(){for(const h of i.keys()){if(i.size<=s&&b()<=t)break;h!==r&&i.delete(h)}}function u(h,f){const p=m(h,f);if(i.has(p)){const w=i.get(p);return i.delete(p),i.set(p,w),Promise.resolve(w)}if(o.has(p))return o.get(p).promise;const _=new AbortController,C=e(h,f,{signal:_.signal}).then(w=>{if(d||_.signal.aborted)return null;const g=w&&Object.hasOwn(w,"verifiedResource"),E=g?w.buffer:w,x=g?w.verifiedResource:null,S=a(E),B=new Set(S.fields.map(y=>y.values.buffer)),A={comparisonId:h,frameNumber:f,data:S,verifiedResource:x,byteLength:[...B].reduce((y,M)=>y+M.byteLength,0)};return i.set(p,A),v(),A}).finally(()=>{o.get(p)?.controller===_&&o.delete(p)});return o.set(p,{promise:C,controller:_}),C}return{async select(h,f){if(d)return null;const p=++c,_=m(h,f);for(const[w,g]of o)w!==_&&(g.controller.abort(),o.delete(w));const C=r;r=_;try{const w=await u(h,f);return d||p!==c?null:(v(),w)}catch(w){if(d||p!==c||w.name==="AbortError")return null;throw r=C,w}},async prefetch(h,f){d||l||await Promise.all(f.slice(0,2).map(p=>u(h,p).catch(()=>null)))},setScrubbing(h){if(l=h,h)for(const[f,p]of o)f!==r&&(p.controller.abort(),o.delete(f))},stats(){return{bytes:b(),cachedFrames:i.size,oversize:b()>t}},dispose(){d=!0,c++;for(const h of o.values())h.controller.abort();o.clear(),i.clear()}}}function td({workerFactory:e=()=>new Worker(new URL(""+new URL("geometryWorker-BoKE8sav.js",import.meta.url).href,import.meta.url),{type:"module"}),byteBudget:a=134217728}={}){const t=new Map;let s=null,i=null,o=0,r=!1;const c=()=>[...t.values()].reduce((l,m)=>l+m.byteLength,0);function d(){i&&(i.resolve(null),i=null,s?.terminate(),s=null)}return{request(l,m,b){if(r)return Promise.resolve(null);d();const v=pr(l,b);if(t.has(v)){const u=t.get(v);return t.delete(v),t.set(v,u),Promise.resolve(u)}return new Promise((u,h)=>{const f=++o;i={resolve:u,reject:h,id:f};try{s??=e(),s.onmessage=({data:g})=>{if(!i||g.requestId!==i.id||g.version!==1)return;if(i=null,g.type==="error"){h(Error(g.error));return}const E=g.result;t.set(v,E);for(const x of t.keys()){if(c()<=a)break;x!==v&&t.delete(x)}u(E)},s.onerror=g=>{i?.id===f&&(i=null,s?.terminate(),s=null,h(Error(g.message||"Geometry worker failed")))};const p=new Map,_=[],C=g=>{if(!g)return null;if(p.has(g))return p.get(g);const E=g.values.slice(),x={...g,values:E,mask:null};return p.set(g,x),_.push(E.buffer),x.mask=C(g.mask),x},w=Object.fromEntries(Object.entries(l.data.groups).filter(([g])=>g===b.group||g==="sdf"&&b.showContext).map(([g,E])=>[g,Object.fromEntries(Object.entries(E).filter(([x])=>(x==="ground_truth"||x==="prediction"||/^(ground_truth|prediction)\.[xyz]$/.test(x))&&(!b.previewOnly||!x.startsWith("prediction"))).map(([x,S])=>[x,C(S)]))]));s.postMessage({version:1,requestId:f,comparisonId:l.comparisonId,type:"build",payload:{snapshot:{...l,data:{groups:w}},lattice:m,settings:b}},_)}catch(p){i=null,h(p)}})},stats(){return{bytes:c(),cachedFrames:t.size,oversize:c()>a}},dispose(){r=!0,d(),s?.terminate(),s=null,t.clear()}}}const sd="OCFLD001",$t=24,id=112;function Xa(e,a,t){const s=e.subarray(a,a+t),i=s.indexOf(0);return new TextDecoder().decode(i>=0?s.subarray(0,i):s)}function Ei(e,a){if(e>BigInt(Number.MAX_SAFE_INTEGER))throw new Error(`${a} exceeds safe integer range`);return Number(e)}function _o(e){if(!(e instanceof ArrayBuffer)||e.byteLength<$t)throw new Error("Field frame is truncated");const a=new Uint8Array(e);if(Xa(a,0,8)!==sd)throw new Error("Invalid field frame magic");const t=new DataView(e),s=t.getUint32(8,!0);if(s!==1)throw new Error(`Unsupported field frame schema ${s}`);const i=t.getUint32(12,!0),o=t.getUint32(16,!0);if(o!==id)throw new Error(`Unsupported directory entry size ${o}`);const r=$t+i*o;if(r>e.byteLength)throw new Error("Field frame directory is truncated");const c=[];for(let l=0;l<i;l+=1){const m=$t+l*o,b=Xa(a,m,16),v=Xa(a,m+16,32),u=Xa(a,m+48,16),h=t.getUint32(m+64,!0),f=[t.getUint32(m+68,!0),t.getUint32(m+72,!0),t.getUint32(m+76,!0)],p=Ei(t.getBigUint64(m+80,!0),"field offset"),_=Ei(t.getBigUint64(m+88,!0),"field length"),C=t.getInt32(m+96,!0);if(!b||!v||f.some(x=>x===0))throw new Error("Invalid field directory entry");if(p<r||p+_>e.byteLength)throw new Error(`Field ${b}:${v} data is truncated`);const w=f[0]*f[1]*f[2];let g,E;if(h===1){if(p%4!==0||_!==w*4)throw new Error(`Field ${b}:${v} has invalid float32 storage`);g=new Float32Array(e,p,w),E="float32"}else if(h===2){if(_!==w)throw new Error(`Field ${b}:${v} has invalid uint8 storage`);g=new Uint8Array(e,p,w),E="uint8"}else throw new Error(`Field ${b}:${v} has unsupported dtype ${h}`);c.push({id:`${b}:${v}`,group:b,name:v,unit:u,dtype:E,shape:f,values:g,maskIndex:C,mask:null})}for(const l of c){if(l.maskIndex<-1||l.maskIndex>=c.length)throw new Error(`Field ${l.id} has an invalid mask index`);l.maskIndex>=0&&(l.mask=c[l.maskIndex])}const d={};for(const l of c){if(d[l.group]??={},d[l.group][l.name])throw new Error(`Duplicate field ${l.id}`);d[l.group][l.name]=l}return{schema:s,fields:c,groups:d}}function rs(e,a,t,s){const i=e.fields.find(u=>u.id===a);if(!i)throw new Error(`Unknown field ${a}`);const[o,r,c]=i.shape;let d,l,m;if(t==="xy")[d,l,m]=[o,r,c];else if(t==="xz")[d,l,m]=[o,c,r];else if(t==="yz")[d,l,m]=[r,c,o];else throw new Error(`Unknown slice plane ${t}`);if(!Number.isInteger(s)||s<0||s>=m)throw new Error(`Slice index ${s} is outside ${t}`);const b=i.dtype==="float32"?Float32Array:Uint8Array,v=new b(d*l);for(let u=0;u<l;u+=1)for(let h=0;h<d;h+=1){let f,p,_;t==="xy"?[f,p,_]=[h,u,s]:t==="xz"?[f,p,_]=[h,s,u]:[f,p,_]=[s,h,u],v[h+d*u]=i.values[f+o*(p+r*_)]}return{fieldId:a,plane:t,sliceIndex:s,width:d,height:l,values:v}}const bt=new Map;function od(e){bt.clear();for(const a of e)bt.set(a.comparison.id,a)}async function rd(e){const a=new Uint8Array(e);if(a[0]===31&&a[1]===139){if(typeof DecompressionStream>"u")throw new Error("This browser cannot decode the field samples. Please use a recent Chrome, Edge, Firefox or Safari.");return new Response(new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}return e}async function cd(e,a,t={}){const s=bt.get(e),i=s?.frameUrls?.[String(a)],o=vs(s,a);if(!i)throw new Error(`Frame ${a} is not included in this public preview.`);if(!/^\/?data\/[a-zA-Z0-9_./-]+$/.test(i)||i.split("/").includes(".."))throw new Error("Invalid published field URL.");const r=await fetch(i.replace(/^\//,""),{signal:t.signal});if(!r.ok)throw new Error(`Field sample unavailable (${r.status}).`);const c=await r.arrayBuffer();if(t.signal?.aborted)throw new DOMException("Aborted","AbortError");const d=o?await xs(c,o):await rd(c);if(t.signal?.aborted)throw new DOMException("Aborted","AbortError");return t.withIdentity?{buffer:d,verifiedResource:o}:d}async function ld(e){const a=bt.get(e);if(!a)throw new Error("Unknown public comparison.");return a.metrics??null}const dd={groundTruth:"ground_truth",prediction:"prediction",error:"error"};function fd(e,a,t){if(!e?.origin||!e?.axisSteps)throw new Error("Canonical lattice transform is unavailable");const s=a==="yz"?0:a==="xz"?1:a==="xy"?2:-1;if(s<0)throw new Error(`Unknown slice plane ${a}`);return e.origin.map((i,o)=>i+e.axisSteps[s][o]*t)}function md(e){let a=0;for(const t of e)Number.isFinite(t)&&(a=Math.max(a,Math.abs(t)));return[-a,a]}function bd(e){let a=0;for(const t of e)Number.isFinite(t)&&(a=Math.max(a,Math.abs(t)));return[0,a]}function Xt(e,a){const t=dd[a];if(!e)return null;if(e[t])return{ids:[e[t].id],maskId:e[t].mask?.id||null};const s=["x","y","z"].map(i=>e[`${t}.${i}`]).filter(Boolean);return s.length!==3?null:{ids:s.map(i=>i.id),maskId:s[0].mask?.id||null}}function ya(e,a){const t=e?.groups?.[a],s=Xt(t,"groundTruth"),i=Xt(t,"prediction"),o=Xt(t,"error"),r=s?.ids?.[0]||i?.ids?.[0]||o?.ids?.[0],c=r&&(e.fields?.find(d=>d.id===r)?.unit||Object.values(t||{}).find(d=>d?.id===r)?.unit)||"";return{kind:a,groundTruth:s,prediction:i,error:o,unit:c}}function pd(e,a,t,s,i="magnitude"){if(!a?.ids?.length)return null;if(a.ids.length===1)return{...rs(e,a.ids[0],t,s),components:null};const o=a.ids.map(d=>rs(e,d,t,s)),r=["x","y","z"].indexOf(i);if(r>=0)return{...o[r],components:null};const c=new Float32Array(o[0].values.length);for(let d=0;d<c.length;d+=1)c[d]=Math.hypot(o[0].values[d],o[1].values[d],o[2].values[d]);return{...o[0],fieldId:a.ids.join("+"),values:c,components:o.map(d=>d.values)}}const _i=new yt,Ga=new Me;class _s extends Tr{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const a=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],t=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],s=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(s),this.setAttribute("position",new Sn(a,3)),this.setAttribute("uv",new Sn(t,2))}applyMatrix4(a){const t=this.attributes.instanceStart,s=this.attributes.instanceEnd;return t!==void 0&&(t.applyMatrix4(a),s.applyMatrix4(a),t.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(a){let t;a instanceof Float32Array?t=a:Array.isArray(a)&&(t=new Float32Array(a));const s=new ss(t,6,1);return this.setAttribute("instanceStart",new ea(s,3,0)),this.setAttribute("instanceEnd",new ea(s,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(a){let t;a instanceof Float32Array?t=a:Array.isArray(a)&&(t=new Float32Array(a));const s=new ss(t,6,1);return this.setAttribute("instanceColorStart",new ea(s,3,0)),this.setAttribute("instanceColorEnd",new ea(s,3,3)),this}fromWireframeGeometry(a){return this.setPositions(a.attributes.position.array),this}fromEdgesGeometry(a){return this.setPositions(a.attributes.position.array),this}fromMesh(a){return this.fromWireframeGeometry(new Dr(a.geometry)),this}fromLineSegments(a){const t=a.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yt);const a=this.attributes.instanceStart,t=this.attributes.instanceEnd;a!==void 0&&t!==void 0&&(this.boundingBox.setFromBufferAttribute(a),_i.setFromBufferAttribute(t),this.boundingBox.union(_i))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ho),this.boundingBox===null&&this.computeBoundingBox();const a=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(a!==void 0&&t!==void 0){const s=this.boundingSphere.center;this.boundingBox.getCenter(s);let i=0;for(let o=0,r=a.count;o<r;o++)Ga.fromBufferAttribute(a,o),i=Math.max(i,s.distanceToSquared(Ga)),Ga.fromBufferAttribute(t,o),i=Math.max(i,s.distanceToSquared(Ga));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}}at.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new xo(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};nt.line={uniforms:yo.merge([at.common,at.fog,at.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class xt extends go{constructor(a){super({type:"LineMaterial",uniforms:yo.clone(nt.line.uniforms),vertexShader:nt.line.vertexShader,fragmentShader:nt.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(a)}get color(){return this.uniforms.diffuse.value}set color(a){this.uniforms.diffuse.value=a}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(a){a===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(a){this.uniforms.linewidth&&(this.uniforms.linewidth.value=a)}get dashed(){return"USE_DASH"in this.defines}set dashed(a){a===!0!==this.dashed&&(this.needsUpdate=!0),a===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(a){this.uniforms.dashScale.value=a}get dashSize(){return this.uniforms.dashSize.value}set dashSize(a){this.uniforms.dashSize.value=a}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(a){this.uniforms.dashOffset.value=a}get gapSize(){return this.uniforms.gapSize.value}set gapSize(a){this.uniforms.gapSize.value=a}get opacity(){return this.uniforms.opacity.value}set opacity(a){this.uniforms&&(this.uniforms.opacity.value=a)}get resolution(){return this.uniforms.resolution.value}set resolution(a){this.uniforms.resolution.value.copy(a)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(a){this.defines&&(a===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),a===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Gt=new Ma,wi=new Me,Si=new Me,Te=new Ma,De=new Ma,pn=new Ma,Zt=new Me,Ht=new Vr,ze=new zr,ji=new Me,Za=new yt,Ha=new ho,un=new Ma;let yn,$n;function Ci(e,a,t){return un.set(0,0,-a,1).applyMatrix4(e.projectionMatrix),un.multiplyScalar(1/un.w),un.x=$n/t.width,un.y=$n/t.height,un.applyMatrix4(e.projectionMatrixInverse),un.multiplyScalar(1/un.w),Math.abs(Math.max(un.x,un.y))}function ud(e,a){const t=e.matrixWorld,s=e.geometry,i=s.attributes.instanceStart,o=s.attributes.instanceEnd,r=Math.min(s.instanceCount,i.count);for(let c=0,d=r;c<d;c++){ze.start.fromBufferAttribute(i,c),ze.end.fromBufferAttribute(o,c),ze.applyMatrix4(t);const l=new Me,m=new Me;yn.distanceSqToSegment(ze.start,ze.end,m,l),m.distanceTo(l)<$n*.5&&a.push({point:m,pointOnLine:l,distance:yn.origin.distanceTo(m),object:e,face:null,faceIndex:c,uv:null,uv1:null})}}function hd(e,a,t){const s=a.projectionMatrix,o=e.material.resolution,r=e.matrixWorld,c=e.geometry,d=c.attributes.instanceStart,l=c.attributes.instanceEnd,m=Math.min(c.instanceCount,d.count),b=-a.near;yn.at(1,pn),pn.w=1,pn.applyMatrix4(a.matrixWorldInverse),pn.applyMatrix4(s),pn.multiplyScalar(1/pn.w),pn.x*=o.x/2,pn.y*=o.y/2,pn.z=0,Zt.copy(pn),Ht.multiplyMatrices(a.matrixWorldInverse,r);for(let v=0,u=m;v<u;v++){if(Te.fromBufferAttribute(d,v),De.fromBufferAttribute(l,v),Te.w=1,De.w=1,Te.applyMatrix4(Ht),De.applyMatrix4(Ht),Te.z>b&&De.z>b)continue;if(Te.z>b){const w=Te.z-De.z,g=(Te.z-b)/w;Te.lerp(De,g)}else if(De.z>b){const w=De.z-Te.z,g=(De.z-b)/w;De.lerp(Te,g)}Te.applyMatrix4(s),De.applyMatrix4(s),Te.multiplyScalar(1/Te.w),De.multiplyScalar(1/De.w),Te.x*=o.x/2,Te.y*=o.y/2,De.x*=o.x/2,De.y*=o.y/2,ze.start.copy(Te),ze.start.z=0,ze.end.copy(De),ze.end.z=0;const f=ze.closestPointToPointParameter(Zt,!0);ze.at(f,ji);const p=Wr.lerp(Te.z,De.z,f),_=p>=-1&&p<=1,C=Zt.distanceTo(ji)<$n*.5;if(_&&C){ze.start.fromBufferAttribute(d,v),ze.end.fromBufferAttribute(l,v),ze.start.applyMatrix4(r),ze.end.applyMatrix4(r);const w=new Me,g=new Me;yn.distanceSqToSegment(ze.start,ze.end,g,w),t.push({point:g,pointOnLine:w,distance:yn.origin.distanceTo(g),object:e,face:null,faceIndex:v,uv:null,uv1:null})}}}class wo extends is{constructor(a=new _s,t=new xt({color:Math.random()*16777215})){super(a,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const a=this.geometry,t=a.attributes.instanceStart,s=a.attributes.instanceEnd,i=new Float32Array(2*t.count);for(let r=0,c=0,d=t.count;r<d;r++,c+=2)wi.fromBufferAttribute(t,r),Si.fromBufferAttribute(s,r),i[c]=c===0?0:i[c-1],i[c+1]=i[c]+wi.distanceTo(Si);const o=new ss(i,2,1);return a.setAttribute("instanceDistanceStart",new ea(o,1,0)),a.setAttribute("instanceDistanceEnd",new ea(o,1,1)),this}raycast(a,t){const s=this.material.worldUnits,i=a.camera;i===null&&!s&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const o=a.params.Line2!==void 0&&a.params.Line2.threshold||0;yn=a.ray;const r=this.matrixWorld,c=this.geometry,d=this.material;$n=d.linewidth+o,c.boundingSphere===null&&c.computeBoundingSphere(),Ha.copy(c.boundingSphere).applyMatrix4(r);let l;if(s)l=$n*.5;else{const b=Math.max(i.near,Ha.distanceToPoint(yn.origin));l=Ci(i,b,d.resolution)}if(Ha.radius+=l,yn.intersectsSphere(Ha)===!1)return;c.boundingBox===null&&c.computeBoundingBox(),Za.copy(c.boundingBox).applyMatrix4(r);let m;if(s)m=$n*.5;else{const b=Math.max(i.near,Za.distanceToPoint(yn.origin));m=Ci(i,b,d.resolution)}Za.expandByScalar(m),yn.intersectsBox(Za)!==!1&&(s?ud(this,t):hd(this,i,t))}onBeforeRender(a){const t=this.material.uniforms;t&&t.resolution&&(a.getViewport(Gt),this.material.uniforms.resolution.value.set(Gt.z,Gt.w))}}const xa=(e,a)=>!!e&&a.group==="velocity"&&a.mode==="overlay",tt=e=>e.showGt!==!1&&e.showPrediction!==!1;function Bi(e,a,t){const s=[],i=e.geometry.attributes.position.array;for(const o of a){const r=18*o;if(!t){for(let c=0;c<18;c++)s.push(i[r+c]);continue}for(const c of[0,.24,.38,.62,.76,1])for(let d=0;d<3;d++)s.push(i[r+d]+c*(i[r+3+d]-i[r+d]));for(let c=6;c<18;c++)s.push(i[r+c])}return s}function Ai(e,a,t,s){const i=new _s().setPositions(e),o=new xt({color:a?12798464:1463422,linewidth:t?a?3:6:a?1.8:3.5,transparent:!0,opacity:s,depthTest:!1,depthWrite:!1}),r=new wo(i,o);return r.renderOrder=9+Number(t)*2+Number(a),r}function gd(e,a,t,s){const i=[],o=[],r=a.geometry.attributes.position.array;for(const m of t){i.push(...r.subarray(m*18,m*18+3));const b=e.errors[m];o.push(e.errorP95>0?Math.min(1,b/e.errorP95):+(b>0))}const c=new zn().setAttribute("position",new Sn(i,3)).setAttribute("level",new Sn(o,1)),d=new go({uniforms:{dpr:{value:s}},transparent:!0,depthWrite:!1,vertexShader:"attribute float level;uniform float dpr;varying float t;void main(){t=level;gl_PointSize=(4.0+10.0*t)*dpr;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:"varying float t;void main(){float r=length(gl_PointCoord-0.5)*2.0;if(r>1.0)discard;vec3 c=mix(vec3(.72,.78,.80),vec3(.95,.61,.14),smoothstep(.02,.55,t));c=mix(c,vec3(.61,.08,.15),smoothstep(.5,1.,t));gl_FragColor=vec4(mix(c,vec3(.98),smoothstep(.80,.97,r)*.65),1.-smoothstep(.88,1.,r));}"}),l=new mt(c,d);return l.renderOrder=7,l}function yd(e,a,t,s,i,o){if(!xa(e,t))return[];const r=a.filter(b=>b.userData.kind==="vectors");if(!r.length)return[];const c=s?.slots??Array.from(e.indices.keys()),d=e.indices.indexOf(i),l=t.overlayStyle!=="arrows"&&tt(t),m=[];l&&c.length&&m.push(gd(e,r[0],c,o));for(const b of r){const v=b.userData.role==="prediction";if(t[v?"showPrediction":"showGt"]===!1)continue;const u=t[v?"predictionOpacity":"gtOpacity"]??1;!l&&c.length&&m.push(Ai(Bi(b,c,v),v,!1,u)),d>=0&&(!s||s.slotSet.has(d))&&m.push(Ai(Bi(b,[d],v),v,!0,u))}return m}class So extends _s{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(a){const t=a.length-3,s=new Float32Array(2*t);for(let i=0;i<t;i+=3)s[2*i]=a[i],s[2*i+1]=a[i+1],s[2*i+2]=a[i+2],s[2*i+3]=a[i+3],s[2*i+4]=a[i+4],s[2*i+5]=a[i+5];return super.setPositions(s),this}setColors(a){const t=a.length-3,s=new Float32Array(2*t);for(let i=0;i<t;i+=3)s[2*i]=a[i],s[2*i+1]=a[i+1],s[2*i+2]=a[i+2],s[2*i+3]=a[i+3],s[2*i+4]=a[i+4],s[2*i+5]=a[i+5];return super.setColors(s),this}setFromPoints(a){const t=a.length-1,s=new Float32Array(6*t);for(let i=0;i<t;i++)s[6*i]=a[i].x,s[6*i+1]=a[i].y,s[6*i+2]=a[i].z||0,s[6*i+3]=a[i+1].x,s[6*i+4]=a[i+1].y,s[6*i+5]=a[i+1].z||0;return super.setPositions(s),this}fromLine(a){const t=a.geometry;return this.setPositions(t.attributes.position.array),this}}class xd extends wo{constructor(a=new So,t=new xt({color:Math.random()*16777215})){super(a,t),this.isLine2=!0,this.type="Line2"}}const vd={gt:481669,prediction:11749130};function Ed(e,a,t){const s=new So().setPositions(e.flat()),i=new xt({color:a,linewidth:t,depthTest:!1,depthWrite:!1}),o=new xd(s,i);return o.renderOrder=12,o}function ki(e,a,t){const s=document.createElement("canvas");s.width=s.height=32;const i=s.getContext("2d");i.strokeStyle="white",i.lineWidth=5,i.beginPath(),t==="split"?i.arc(16,16,11,0,2*Math.PI):(i.moveTo(6,6),i.lineTo(26,26),i.moveTo(26,6),i.lineTo(6,26)),i.stroke();const o=new zn().setAttribute("position",new Sn(e,3)),r=new os({color:a,map:new $r(s),transparent:!0,size:t==="split"?15:13,sizeAttenuation:!1,depthTest:!1,depthWrite:!1}),c=new mt(o,r);return c.renderOrder=t==="split"?16:17,c}function _d(e){const a=[];if(!e)return a;for(const t of["gt","prediction"]){const{points:s}=e[t],i=vd[t],o=r=>{r.userData.role=t,a.push(r)};s.length>1&&o(Ed(s,i,3.5)),e.split&&o(ki(e.split[t],i,"split")),o(ki(s.at(-1),i,"stop"))}return a}const Mi=16;function Pi(e,[a,t]){return[e%a,Math.floor(e/a)%t,Math.floor(e/(a*t))]}function Ri(e,a){if(!e?.indices.includes(a))return null;const{shape:t,origin:s,axisSteps:i}=e,o=Pi(a,t),r=o.map(u=>Math.max(0,u-Mi)),c=o.map((u,h)=>Math.min(u+Mi,t[h]-1)),d=u=>s.map((h,f)=>h+u.reduce((p,_,C)=>p+_*i[C][f],0)),l=Array.from({length:8},(u,h)=>d(r.map((f,p)=>h&1<<p?c[p]:f))),m=d(o),b=Math.max(...l.map(u=>Math.hypot(...u.map((h,f)=>h-m[f])))),v=[];return e.indices.forEach((u,h)=>{Pi(u,t).every((f,p)=>r[p]<=f&&f<=c[p])&&v.push(h)}),{id:a,min:r,max:c,target:m,corners:l,radius:b,slots:v,slotSet:new Set(v)}}function Lt(e,a,t){const s=a.fov*Math.PI/360,i=Math.atan(Math.tan(s)*Math.max(.01,t)),o=1.08*Math.max(.001,e.radius)/Math.sin(Math.min(s,i)),r=a.position.map((d,l)=>d-a.target[l]),c=Math.hypot(...r);return{...a,target:e.target,zoom:1,position:e.target.map((d,l)=>d+r[l]*o/c),near:Math.min(a.near,o/1e3),far:Math.max(a.far,o+e.radius*2)}}function wd(e,a){const t=e.geometry,s=e.userData.kind==="vectors"?6:1,i=e.userData.zeroSlots;if(!t.index&&!a)return;t.index||t.setIndex(Array.from({length:t.attributes.position.count},(r,c)=>c));const o=t.index;if(a){const r=i?i.flatMap((d,l)=>a.slotSet.has(d)?[l]:[]):a.slots;let c=0;for(const d of r)for(let l=0;l<s;l++)o.setX(c++,d*s+l);t.setDrawRange(0,c)}else{for(let r=0;r<o.count;r++)o.setX(r,r);t.setDrawRange(0,o.count)}o.needsUpdate=!0}const jo=["#440154","#3b528b","#21918c","#5ec962","#fde725"],Ii=jo.map(e=>[1,3,5].map(a=>parseInt(e.slice(a,a+2),16)/255));function Sd(e){const a=Math.min(1,Math.max(0,e))*4,t=Math.min(3,Math.floor(a));return Ii[t].map((s,i)=>s+(Ii[t+1][i]-s)*(a-t))}function jd(e,{onCameraChange:a,onGlyphPick:t,onFocusChange:s,rendererFactory:i=()=>new Xr({antialias:!0}),controlsFactory:o=(c,d)=>new Lr(c,d),gizmoFactory:r=Gr}={}){const c=i();e.appendChild(c.domElement),c.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2));const d=r(e),l=new Zr;l.background=new Dt("#f4f8fb");const m=new Hr(40,1,.001,1e5);m.position.set(8,6,9);const b=o(m,c.domElement);b.enableDamping=!1,l.add(new qr(16777215,6649225,2.4));const v=new Yr(16777215,2);v.position.set(3,8,5),l.add(v);const u=new Ur(1);l.add(u);let h=[],f=null,p=[],_={mode:"split",opacity:.65},C=!1,w=960,g=540,E=[0,1],x=null,S=-1,B=null,A=null;const y=R=>x&&_.component==="magnitude"?new Dt().setRGB(...Sd(R),ic):new Dt().setHSL(.65*(1-R),.8,.48);let M=[],k=null,I=null,F=null;function V(){const R=[_.mode,_.group,_.overlayStyle,_.showGt,_.showPrediction,_.gtOpacity,_.predictionOpacity,S].join("|");if(!(k===R&&I===x&&F===W)){for(const $ of M)l.remove($),$.geometry.dispose(),$.material.dispose();k=R,I=x,F=W,M=yd(x,p,_,W,S,c.getPixelRatio?.()||1),M.forEach($=>l.add($))}}function K(R){S=R,B&&(l.remove(B),B.geometry.dispose(),B.material.dispose(),B=null);const $=x?.indices.indexOf(R)??-1,U=p.find(D=>D.userData.kind==="vectors");if($>=0&&U){const D=U.geometry.attributes.position,H=[D.getX($*6),D.getY($*6),D.getZ($*6)],X=new zn().setAttribute("position",new Sn(H,3));B=new mt(X,new os({color:14040103,size:7,sizeAttenuation:!1,depthTest:!1})),B.renderOrder=20,l.add(B)}}let W=null,G=null,ae=null,T=null;function N(R){if(W=R,G&&(l.remove(G),G.geometry.dispose(),G.material.dispose(),G=null),W){const $=[];for(let D=0;D<8;D++)for(const H of[1,2,4])D&H||$.push(...W.corners[D],...W.corners[D|H]);const U=new zn().setAttribute("position",new Sn($,3));G=new zt(U,new Vt({color:5469834,transparent:!0,opacity:.45})),l.add(G)}for(const $ of p)["vectors","zeros"].includes($.userData.kind)&&wd($,W);for(const $ of h)$.visible=!W;f&&(f.visible=!W),u.visible=!W,s?.(W?{id:W.id,min:W.min,max:W.max,count:W.slots.length}:null)}function ne(R=!0){if(!W)return;const $=ae;ae=null,N(null),R&&$?$e.setCamera($):q()}function Y(){const R=_.sourceRange||E;for(const $ of p){const U=$.userData.values;if(!U)continue;const D=$.geometry.attributes.color;for(let H=0;H<U.length;H++){const X=Math.max(0,Math.min(1,R[0]===R[1]?+(U[H]>R[1]):(U[H]-R[0])/(R[1]-R[0])));y(X).toArray(D.array,H*3)}D.needsUpdate=!0}}const ee=()=>{for(const R of p)l.remove(R),R.geometry.dispose(),R.material.dispose();p=[]};function O(){for(const R of p){if(R.userData.kind==="slice-outline"){R.material.opacity=1,R.material.depthTest=!1,R.material.depthWrite=!1,R.renderOrder=4;continue}if(R.userData.kind==="section-plane"){R.material.transparent=!0,R.material.opacity=.14,R.material.depthWrite=!1,R.material.depthTest=!0,R.renderOrder=3;continue}const $=R.userData.role==="prediction",U=_.mode==="wire-overlay"&&$&&R.userData.kind==="surface";R.renderOrder=U?3:$?2:1,R.material.transparent=!0,R.material.opacity=_[$?"predictionOpacity":"gtOpacity"]??_.opacity,R.material.depthWrite=!["overlay","wire-overlay"].includes(_.mode),R.isMesh&&(R.userData.kind==="surface"&&sc(R.geometry,R.material,_.shading),R.material.userData.xray!==U&&(R.material.userData.xray=U,R.material.onBeforeCompile=D=>{U&&(D.fragmentShader=D.fragmentShader.replace("void main() {",`void main() {
if (mod(floor(gl_FragCoord.x / 3.0) + floor(gl_FragCoord.y / 3.0), 2.0) < 1.0) discard;`))},R.material.customProgramCacheKey=()=>U?"field-xray-gaps-1":"field-surface-1",R.material.needsUpdate=!0),R.material.wireframe=U,R.material.depthTest=!U)}}let Z=[],ie=null,te=null;function z(){for(const R of Z)l.remove(R),R.geometry.dispose(),R.material.map?.dispose(),R.material.dispose();Z=[]}function q(){if(C)return;V();const R=xa(x,_),$=_.mode==="split"?["gt","prediction"]:[_.mode==="gt"?"gt":_.mode==="prediction"?"prediction":null];c.setScissorTest(!0),$.forEach((U,D)=>{const H=w/$.length;if(m.aspect=H/g,m.updateProjectionMatrix(),c.setViewport(D*H,0,H,g),c.setScissor(D*H,0,H,g),p.forEach(X=>{X.visible=(!W||["vectors","zeros"].includes(X.userData.kind))&&(!U||X.userData.role===U)&&_[X.userData.role==="prediction"?"showPrediction":"showGt"]!==!1&&(X.userData.kind!=="section-plane"||_.showPlane!==!1)}),R)for(const X of p){const{kind:oe,role:Se}=X.userData;["vectors","slice"].includes(oe)&&(X.visible=!1),oe==="zeros"&&(X.visible=X.visible&&(_.overlayStyle==="arrows"||!tt(_))),["section-plane","slice-outline"].includes(oe)&&(X.visible=X.visible&&_.showPlane!==!1&&Se===(_.showGt!==!1?"gt":"prediction"))}Z.forEach(X=>{const oe=_[X.userData.role==="gt"?"showGt":"showPrediction"]!==!1;X.visible=oe&&_.mode==="split"&&U===X.userData.role&&T===ie&&W?.id===te}),c.render(l,m)}),d.update(m)}const re=()=>({position:m.position.toArray(),target:b.target.toArray(),zoom:m.zoom,up:m.up.toArray(),fov:m.fov,near:m.near,far:m.far});c.domElement.setAttribute?.("data-renderer","field-3d"),c.domElement.osPick=(R,$)=>{const U=_.mode==="split",D=U?R<.5?"gt":"prediction":_.mode,H=U?R*2%1:R,X=new Jr;X.setFromCamera(new xo(H*2-1,1-$*2),m);const oe=p.filter(je=>je.userData.kind==="surface"&&(D!=="gt"&&D!=="prediction"||je.userData.role===D)&&_[je.userData.role==="prediction"?"showPrediction":"showGt"]!==!1),Se=X.intersectObjects(oe,!1)[0];return{camera:re(),hit:Se?{xyz:Se.point.toArray(),role:Se.object.userData.role}:null}},c.domElement.osProject=R=>{const $=_.mode==="split";if(!$&&["gt","prediction"].includes(_.mode)&&_.mode!==R.role)return null;const U=new Me(...R.xyz).project(m);return Math.abs(U.x)>1||Math.abs(U.y)>1||Math.abs(U.z)>1?null:[$?((U.x+1)/2+(R.role==="prediction"?1:0))/2:(U.x+1)/2,(1-U.y)/2]};function fe(R){A=R.button===0?[R.clientX,R.clientY]:null}function we(R){A&&Math.hypot(R.clientX-A[0],R.clientY-A[1])>4&&(A=null)}function Ae(R){if(!A||!x)return;const $=A;if(A=null,Math.hypot(R.clientX-$[0],R.clientY-$[1])>4)return;const U=c.domElement.getBoundingClientRect(),D=_.mode==="split",H=U.width/(D?2:1),X=R.clientX-U.left,oe=R.clientY-U.top,Se=D&&X>=H,je=D?Se?"prediction":"gt":_.mode,Oe=X-(Se?H:0);let J=null;const L=new Me,ce=new Me;for(const de of p){const{role:Pe,kind:qe}=de.userData;if(qe!=="vectors"||["gt","prediction"].includes(je)&&je!==Pe||_[Pe==="gt"?"showGt":"showPrediction"]===!1)continue;const xn=de.geometry.attributes.position;for(let Ge=0;Ge<x.indices.length;Ge++){if(W&&!W.slotSet.has(Ge)||(L.fromBufferAttribute(xn,6*Ge).project(m),ce.fromBufferAttribute(xn,6*Ge+1).project(m),L.z<-1||L.z>1))continue;const cn=(L.x+1)*H/2,Gn=(1-L.y)*U.height/2,Je=(ce.x-L.x)*H/2,ke=(L.y-ce.y)*U.height/2,dn=xa(x,_)&&_.overlayStyle!=="arrows"&&tt(_)?0:Math.max(0,Math.min(1,((Oe-cn)*Je+(oe-Gn)*ke)/(Je*Je+ke*ke||1))),Re=Math.hypot(Oe-cn-dn*Je,oe-Gn-dn*ke);Re<=7&&(!J||Re<J.dist-.1||Math.abs(Re-J.dist)<=.1&&L.z<J.z)&&(J={id:x.indices[Ge],dist:Re,z:L.z})}}J&&t?.(J.id)}const Ie={pointerdown:fe,pointermove:we,pointerup:Ae,pointercancel:()=>{A=null}};for(const[R,$]of Object.entries(Ie))c.domElement.addEventListener?.(R,$);c.domElement.osCapture=()=>q();const Xe=()=>{q(),a?.(re())};b.addEventListener("change",Xe);function Ve(){const R=e.clientWidth,$=e.clientHeight;R>1&&$>1&&(w=R,g=$),c.setSize(w,g),q()}const We=globalThis.ResizeObserver?new ResizeObserver(Ve):null;We?.observe(e);const $e={focusGlyph(R,$=!0){if(_.mode!=="split"&&!xa(x,_))return!1;const U=Ri(x,R);if(!U)return!1;const D=re();return ae??=D,N(U),$?$e.setCamera(Lt(U,D,w/(_.mode==="split"?2:1)/g)):q(),!0},faceArrowPair(){const R=x?.indices.indexOf(S)??-1;if(R<0||!xa(x,_)||!tt(_))return;const $=p.filter(de=>de.userData.kind==="vectors").map(de=>de.geometry.attributes.position);if($.length!==2)return;const U=new Me().fromBufferAttribute($[0],6*R),D=$.map(de=>new Me().fromBufferAttribute(de,6*R+1)),H=D.map(de=>de.clone().sub(U)),X=m.position.clone().sub(b.target).normalize(),oe=H[0].clone().normalize().cross(H[1].clone().normalize());if(oe.lengthSq()<1e-12){const de=(H[0].lengthSq()?H[0]:H[1]).clone().normalize();oe.copy(X).addScaledVector(de,-X.dot(de)),oe.lengthSq()<1e-12&&oe.crossVectors(de,new Me(Math.abs(de.y)>.9?1:0,Math.abs(de.y)>.9?0:1,0))}oe.normalize(),oe.dot(X)<0&&oe.negate();const Se=[U,...D],je=new yt().setFromPoints(Se).getCenter(new Me),Oe=Math.max(x.referenceLength/4,...Se.map(de=>de.distanceTo(je))),J=re(),L=je.toArray(),ce=Math.abs(oe.y)>.96?[0,0,1]:[0,1,0];$e.setCamera(Lt({target:L,radius:Oe*1.3},{...J,target:L,up:ce,position:je.clone().add(oe).toArray()},w/g))},fitVolumeTraces(R){if(!W||!R||_.mode!=="split")return;const $=[...R.gt.points,...R.prediction.points],U=[0,1,2].map(H=>(Math.min(...$.map(X=>X[H]))+Math.max(...$.map(X=>X[H])))/2),D=Math.max(R.cell,...$.map(H=>Math.hypot(...H.map((X,oe)=>X-U[oe]))));$e.setCamera(Lt({target:U,radius:D},re(),w/2/g))},setVolumeTraces(R,$,U){z(),ie=U,te=$,Z=_d(R);for(const D of Z)l.add(D);q()},leaveRegion:ne,getFocusIndex(){return W?.id},setGeometry(R,$){W&&($!==T||!R?.paired?.indices.includes(W.id))&&ne(),T=$,ee(),k=null,x=R?.paired??null;let U=1/0,D=-1/0;for(const X of R?.layers||[])for(const oe of X.values||[])U=Math.min(U,oe),D=Math.max(D,oe);E=x&&_.component==="magnitude"&&x.p95!=null?[0,x.p95]:[U,D];const H=_.sourceRange||E;for(const X of R?.layers||[]){if(!X.positions.length)continue;const oe=new zn;oe.setAttribute("position",new hi(X.positions,3));const Se=X.role==="gt"?1416379:15571026;let je,Oe;if(X.values){const J=new Float32Array(X.values.length*3);for(let L=0;L<X.values.length;L++){const ce=Math.max(0,Math.min(1,H[0]===H[1]?+(X.values[L]>H[1]):(X.values[L]-H[0])/(H[1]-H[0])));y(ce).toArray(J,L*3)}oe.setAttribute("color",new hi(J,3))}if(X.kind==="vectors"||X.kind==="slice-outline"?(je=new Vt({vertexColors:!!X.values,color:X.kind==="slice-outline"?8801732:X.values?16777215:Se}),Oe=new zt(oe,je)):(oe.computeVertexNormals(),je=new ac({color:X.kind==="section-plane"?9988803:X.values?16777215:Se,vertexColors:!!X.values,side:tc,roughness:.7,transparent:!0,opacity:X.kind==="slice"?.85:_.opacity,depthWrite:_.mode!=="overlay"}),Oe=new is(oe,je)),Oe.userData={role:X.role,kind:X.kind,values:X.values},p.push(Oe),l.add(Oe),x&&X.kind==="vectors"){const J=[],L=[],ce=X.role==="gt"?0:3;for(let de=0;de<x.indices.length;de++){const Pe=de*6+ce;!x.raw[Pe]&&!x.raw[Pe+1]&&!x.raw[Pe+2]&&(L.push(de),J.push(...X.positions.subarray(18*de,18*de+3)))}if(J.length){const de=new zn().setAttribute("position",new Sn(J,3)),Pe=new mt(de,new os({color:y(0),size:3,sizeAttenuation:!1}));Pe.userData={role:X.role,kind:"zeros",zeroSlots:L},p.push(Pe),l.add(Pe)}}}W&&N(Ri(x,W.id)),K(S),O(),q()},setGlyph(R){K(R),q()},setInspection(R,$){for(const D of h)l.remove(D),D.geometry.dispose(),D.material.dispose();h=[];const U=D=>{D.visible=!W,D.renderOrder=15,l.add(D),h.push(D)};if(R?.corners?.length===4&&R.corners.every(Boolean)){const D=new zn;D.setAttribute("position",new Sn([0,1,1,2,2,3,3,0].flatMap(H=>R.corners[H]),3)),U(new zt(D,new Vt({color:"#e4ac00",depthTest:!1})))}if(R?.probe&&$){const D=Math.hypot(...$.max.map((X,oe)=>X-$.min[oe])),H=new is(new ec(D*.007,12,8),new nc({color:"#ffffff",wireframe:!0,depthTest:!1}));H.position.fromArray(R.probe),U(H)}q()},setDisplay(R){W&&(!["split","overlay"].includes(R.mode)||R.group!=="velocity")&&ne();const $=JSON.stringify(_.sourceRange)!==JSON.stringify(R.sourceRange);_={..._,...R},O(),$&&Y(),q()},setCamera(R){m.position.fromArray(R.position),b.target.fromArray(R.target),m.zoom=R.zoom??1,m.up.fromArray(R.up||[0,1,0]),R.fov&&(m.fov=R.fov),R.near&&(m.near=R.near),R.far&&(m.far=R.far),m.updateProjectionMatrix(),b.update(),m.position.fromArray(R.position),m.lookAt(b.target),Xe()},capture(){if(C)throw Error("3D unavailable");q();const R=document.createElement("canvas");R.width=c.domElement.width,R.height=c.domElement.height;const $=R.getContext("2d");return $.drawImage(c.domElement,0,0),d.capture($,R.width,R.height,R.width/w),R},getCamera:re,preset(R,$){ne(!1);const U=Qr(R,$,w/(_.mode==="split"?2:1)/g,m.fov);U&&$e.setCamera(U)},fit(R){if(!R)return;const $=new Me(...R.min).add(new Me(...R.max)).multiplyScalar(.5),U=new Me(...R.max).sub(new Me(...R.min)).length()||1;m.position.copy($).add(new Me(.8,.65,.9).multiplyScalar(U)),b.target.copy($),m.near=U/1e4,m.far=U*100,m.zoom=1,u.scale.setScalar(U*.15),u.position.copy($),f&&(l.remove(f),f.geometry.dispose(),f.material.dispose()),f=new Kr(U*1.3,12,13294052,14740209),f.position.set($.x,R.min[1],$.z),l.add(f),$e.preset(R,"reset")},resize:Ve,dispose(){if(!C){C=!0;for(const R of M)l.remove(R),R.geometry.dispose(),R.material.dispose();M=[],z(),G&&(G.geometry.dispose(),G.material.dispose());for(const[R,$]of Object.entries(Ie))c.domElement.removeEventListener?.(R,$);K(-1),We?.disconnect(),b.removeEventListener("change",Xe),b.dispose(),$e.setInspection(null),ee();for(const R of[u,f])R?.geometry.dispose(),Array.isArray(R?.material)?R.material.forEach($=>$.dispose()):R?.material.dispose();d.dispose(),c.dispose(),c.domElement.remove()}}};return Ve(),$e}const Cd=["x","y","z"],Ni=(e,a,t)=>e.map((s,i)=>s+t*a[i]);function Fi(e,a,t){const s=[0,1];for(let i=0;i<3;i++){const o=Math.min(e[i],a[i]),r=Math.max(e[i],a[i]);for(let c=Math.floor(o)+1;c<r;c++)s.push((c-e[i])/(a[i]-e[i]))}s.sort((i,o)=>i-o);for(let i=1;i<s.length;i++){const o=(s[i-1]+s[i])/2,r=t(e.map((c,d)=>c+o*(a[d]-c))).stop;if(r)return r}return null}function Bd(e,a,t){if(!e||!a||!t)return null;const s=["ground_truth","prediction"].flatMap(E=>Cd.map(x=>e[E+"."+x]));if(s.some(E=>!E))return null;const{origin:i,axisSteps:o,shape:r}=a,[c,d]=r,l=new oc().fromArray(o.flat());if(!l.determinant())return null;const m=l.clone().invert(),b=E=>new Me(...E).applyMatrix3(l).toArray().map((x,S)=>x+i[S]),v=Math.min(...o.map(E=>Math.hypot(...E))),u=v/4,h=96,f=[t.id%c,Math.floor(t.id/c)%d,Math.floor(t.id/(c*d))];function p(E,x){if(E.some((k,I)=>k<0||k>r[I]-1))return{stop:"grid"};if(E.some((k,I)=>k<t.min[I]||k>t.max[I]))return{stop:"roi"};const S=E.map(Math.floor),B=E.map((k,I)=>k-S[I]),A=[0,0,0];for(let k=0;k<8;k++){const I=B.reduce((G,ae,T)=>G*(k&1<<T?ae:1-ae),1);if(I===0)continue;const[F,V,K]=S.map((G,ae)=>G+(k>>ae&1)),W=F+c*(V+d*K);if(!s.every(G=>(!G.mask||G.mask.values[W])&&Number.isFinite(G.values[W])))return{stop:"mask"};for(let G=0;G<3;G++)A[G]+=I*s[x+G].values[W]}const y=Math.hypot(...A);return y<=jn?{stop:"slow"}:{direction:new Me(...A).multiplyScalar(1/y).applyMatrix3(m).toArray()}}function _(E){const x=A=>p(A,E);let S=f;const B=[b(f)];for(let A=0;A<h;A++){const y=x(S);if(y.stop)return{points:B,stop:y.stop};const M=Ni(S,y.direction,u/2),k=x(M),I=k.stop||Fi(S,M,x);if(I)return{points:B,stop:I};const F=Ni(S,k.direction,u),V=Fi(S,F,x)||x(F).stop;if(V)return{points:B,stop:V};B.push(b(F)),S=F}return{points:B,stop:"limit"}}const C=_(0),w=_(3);let g=null;for(let E=1;E<Math.min(C.points.length,w.points.length);E++){const x=C.points[E],S=w.points[E],B=Math.hypot(...S.map((A,y)=>A-x[y]));if(B>=v){g={i:E,arc:E*u,gap:B,gt:x,prediction:S};break}}return{seed:b(f),cell:v,step:u,maxArc:h*u,gt:C,prediction:w,split:g}}const qt={mask:["到达共同有效域边界","Common valid support ends"],grid:["到达网格边界","Grid boundary"],roi:["到达 ROI 边界","ROI boundary"],slow:["局部流速过低","Low local speed"],limit:["达到积分弧长上限","Arc-length limit"]},Kn=e=>e.toFixed(5),Yt=e=>"("+e.map(Kn).join(", ")+")";function Ad({result:e,zh:a,zoomIn:t,zoomBack:s}){const[i,o]=n.useState(null),r=(f,p)=>a?f:p,{gt:c,prediction:d,split:l,cell:m,step:b,maxArc:v,seed:u}=e,h=r("三维配对瞬时流线","Paired 3D instantaneous streamlines");return n.createElement("section",{"data-os-loc":"src/field/VolumeStreamlineSummary.jsx:18:10",className:"volume-stream-summary","aria-label":h},n.createElement("div",{"data-os-loc":"src/field/VolumeStreamlineSummary.jsx:19:5",className:"volume-stream-caption"},n.createElement("strong",{"data-os-loc":"src/field/VolumeStreamlineSummary.jsx:20:7"},h),n.createElement("button",{"data-os-loc":"src/field/VolumeStreamlineSummary.jsx:21:7","data-os-action":"",type:"button",onClick:()=>{i?(s(i),o(null)):o(t())}},i?r("返回原视角","Restore previous view"):r("放大流线","Fit streamlines")),l?n.createElement("span",{"data-os-loc":"src/field/VolumeStreamlineSummary.jsx:24:16"},r("首次分离","First separation")," · ",r("第","step "),l.i,a?"步":""," · ",r("弧长","arc")," ",Kn(l.arc)," · ",r("间距","gap")," ",Kn(l.gap)):n.createElement("span",{"data-os-loc":"src/field/VolumeStreamlineSummary.jsx:25:11"},r("共同积分段内未达到分离阈值","Separation threshold not reached on the shared trace")),n.createElement("span",{"data-os-loc":"src/field/VolumeStreamlineSummary.jsx:26:7",className:"stream-stop gt"},"GT · ",qt[c.stop][a?0:1]),n.createElement("span",{"data-os-loc":"src/field/VolumeStreamlineSummary.jsx:27:7",className:"stream-stop prediction"},r("预测","Pred")," · ",qt[d.stop][a?0:1])),n.createElement("details",{"data-os-loc":"src/field/VolumeStreamlineSummary.jsx:29:5"},n.createElement("summary",{"data-os-loc":"src/field/VolumeStreamlineSummary.jsx:29:14"},r("流线标记、坐标与积分参数","Streamline markers, coordinates and settings")),n.createElement("p",{"data-os-loc":"src/field/VolumeStreamlineSummary.jsx:30:7"},r("起点为红方点，圆环标出首次分离，叉号标出最后一个有效积分点。坐标与距离使用场景单位。","The red square marks the seed, rings mark first separation, and crosses mark the last accepted points. Positions and distances use scene units.")),n.createElement("p",{"data-os-loc":"src/field/VolumeStreamlineSummary.jsx:32:7"},r("共同起点","Shared seed")," ",Yt(u)," · ",r("正向 RK2 中点法，步长","Forward midpoint RK2, step")," ",Kn(b)," · ",r("最大弧长","maximum arc")," ",Kn(v)," · ",r("分离阈值","separation threshold")," ",Kn(m)),n.createElement("p",{"data-os-loc":"src/field/VolumeStreamlineSummary.jsx:33:7"},r("以同一弧长采样，两条线的三维间距首次达到一个网格间距时标记。三线性插值使用两侧均有效的邻点；流速阈值为 1e−8。","Compare at equal arc length. Mark the first sampled gap of at least one cell. Trilinear interpolation requires jointly valid contributing neighbours. The speed floor is 1e−8.")),[["gt",c,"GT"],["prediction",d,r("预测","Pred")]].map(([f,p,_])=>n.createElement("p",{"data-os-loc":"src/field/VolumeStreamlineSummary.jsx:35:90",key:f,"data-trace":f},n.createElement("b",{"data-os-loc":"src/field/VolumeStreamlineSummary.jsx:36:9"},_)," · ",l&&n.createElement(n.Fragment,null,r("首次分离","First separation")," ",Yt(l[f])," · "),r("终点","End")," ",Yt(p.points.at(-1))," · ",p.points.length-1," ",r("步","steps")," · ",qt[p.stop][a?0:1]))))}function kd(e){if(e===0)return"0.0000";const a=Math.abs(e),t=a<5e-5?a.toExponential(2):a.toFixed(4);return(e<0?"−":"+")+t}function Md({onOverlayStyle:e,paired:a,settings:t,zh:s,selected:i,focus:o,onOverview:r,onPick:c,onMode:d,busy:l}){const m=(g,E)=>s?g:E,b=g=>Number(g.toPrecision(8)).toString(),v=ur(a,i),u=t.mode==="overlay",h=t.showGt!==!1&&t.showPrediction!==!1,f=u&&h&&t.overlayStyle!=="arrows",p=t.glyphMode??"direction",_=t.component==="magnitude",C=t.sourceRange??[0,a.p95],w=t.unit||m("单位未声明","unit undeclared");return n.createElement("div",{"data-os-loc":"src/field/GlyphControls.jsx:18:9",className:"paired-glyphs","aria-label":m("三维箭头比较","3D glyph comparison"),"data-mode":p,"data-count":a.indices.length,"data-population":a.count,"data-p95":a.p95},u&&n.createElement("section",{"data-os-loc":"src/field/GlyphControls.jsx:19:14",className:"velocity-overlay-key","aria-label":m("速度差异叠加","Velocity difference overlay")},n.createElement("div",{"data-os-loc":"src/field/GlyphControls.jsx:20:6",className:"overlay-line"},n.createElement("b",{"data-os-loc":"src/field/GlyphControls.jsx:20:36"},m("叠加诊断","Overlay diagnosis")),[[!0,m("误差热点","Error hotspots")],[!1,m("全部双箭头","All paired arrows")]].map(([g,E])=>n.createElement("button",{"data-os-loc":"src/field/GlyphControls.jsx:21:103","data-os-action":"",key:E,disabled:l||!h,"aria-pressed":h&&f===g,onClick:()=>e(g?"errors":"arrows")},E)),f&&a.errorP95!=null&&n.createElement("span",{"data-os-loc":"src/field/GlyphControls.jsx:22:38",className:"overlay-ramp"},n.createElement("i",{"data-os-loc":"src/field/GlyphControls.jsx:22:69"}),m("向量误差","Vector error")," ‖Pred − GT‖ · 0 – ",b(a.errorP95)," ",w," (P95)")),n.createElement("small",{"data-os-loc":"src/field/GlyphControls.jsx:24:6"},h?f?m("点越大、颜色越暖，三维向量差越大。点击热点放大并比较双箭头；超过 P95 的点仍可读原值。","Larger, warmer dots mean greater 3D vector error. Pick one to zoom and compare the arrows; values above P95 are retained."):m("每对箭头从同一格点出发。两箭头重合时，橙色间隙仍会露出蓝线。","Each pair starts at one cell. Gaps in the orange shaft reveal the blue shaft even when directions coincide."):m("打开两组数据即可比较误差。","Show both datasets to compare errors."))),n.createElement("div",{"data-os-loc":"src/field/GlyphControls.jsx:26:4",className:"glyph-toolbar"},n.createElement("span",{"data-os-loc":"src/field/GlyphControls.jsx:26:35"},m("箭长","Arrow length")),[["direction",m("等长 · 看方向","Equal · direction")],["scaled",m("真实比例 · 看流速","Proportional · speed")]].map(([g,E])=>n.createElement("button",{"data-os-loc":"src/field/GlyphControls.jsx:27:126","data-os-action":"",key:g,disabled:l,"aria-pressed":p===g,onClick:()=>d(g)},E)),n.createElement("span",{"data-os-loc":"src/field/GlyphControls.jsx:28:6"},m("共同起点","Paired anchors")," ",n.createElement("b",{"data-os-loc":"src/field/GlyphControls.jsx:28:41"},a.indices.length)," / ",a.count.toLocaleString()," ",m("个共同有效格点","valid cells")),!u&&_&&a.count>0&&n.createElement("span",{"data-os-loc":"src/field/GlyphControls.jsx:29:44",className:"glyph-scale",title:m("同一帧、共同有效域，合并两侧的流速","Both roles pooled across the common valid domain of this frame")},n.createElement("i",{"data-os-loc":"src/field/GlyphControls.jsx:29:170",style:{background:"linear-gradient(90deg,"+jo.join(",")+")"}}),m("共享流速色标","Shared speed scale")," ",b(C[0])," – ",b(C[1])," ",t.sourceRange?m("（手动）","(manual)"):"(P95)"," · ",w)),n.createElement("div",{"data-os-loc":"src/field/GlyphControls.jsx:31:4",className:"glyph-probe"},n.createElement("button",{"data-os-loc":"src/field/GlyphControls.jsx:31:33","data-os-action":"",disabled:l||(u?!h||a.errorPeak<0:a.peak<0),onClick:()=>c(u?a.errorPeak:a.peak)},u?m("定位采样最大误差","Inspect largest sampled error"):m("查看采样最快点","Inspect fastest sampled point")),o&&n.createElement("div",{"data-os-loc":"src/field/GlyphControls.jsx:32:13",className:"glyph-focus",role:"group","aria-label":m("三维 ROI","3D ROI"),"data-count":o.count},n.createElement("b",{"data-os-loc":"src/field/GlyphControls.jsx:33:7"},m("局部 ROI","Local ROI")),n.createElement("span",{"data-os-loc":"src/field/GlyphControls.jsx:34:7"},o.min.map((g,E)=>"XYZ"[E]+" "+g+"–"+o.max[E]).join(" · ")),n.createElement("span",{"data-os-loc":"src/field/GlyphControls.jsx:35:7"},o.count," ",m("个共同起点","paired anchors")),n.createElement("button",{"data-os-loc":"src/field/GlyphControls.jsx:36:7","data-os-action":"",onClick:r},m("返回全域","Return to overview"))),v?n.createElement("output",{"data-os-loc":"src/field/GlyphControls.jsx:38:8",className:"glyph-reading","aria-live":"polite","data-index":i},u&&h&&n.createElement("span",{"data-os-loc":"src/field/GlyphControls.jsx:39:23",className:"glyph-metric overlay-error"},m("向量误差","Vector error")," ",n.createElement("strong",{"data-os-loc":"src/field/GlyphControls.jsx:39:95"},b(v.vectorError)," ",w),v.vectorError>a.errorP95?" (>P95)":""),n.createElement("span",{"data-os-loc":"src/field/GlyphControls.jsx:40:7"},m("格点","Cell")," (",v.xyz.join(", "),")"),n.createElement("span",{"data-os-loc":"src/field/GlyphControls.jsx:41:7",className:"glyph-metric"},m("三维方向夹角","3D direction angle")," ",n.createElement("strong",{"data-os-loc":"src/field/GlyphControls.jsx:41:73"},v.angleDegrees===null?m("流速过低，夹角未定义","Unavailable at low speed"):v.angleDegrees.toFixed(2)+"°")),n.createElement("span",{"data-os-loc":"src/field/GlyphControls.jsx:44:7",className:"glyph-metric"},m("流速差（预测 − GT）","Speed difference (Pred − GT)")," ",n.createElement("strong",{"data-os-loc":"src/field/GlyphControls.jsx:44:89"},kd(v.speedDelta)," ",w)),n.createElement("span",{"data-os-loc":"src/field/GlyphControls.jsx:45:7"},["gt","prediction"].map((g,E)=>n.createElement(n.Fragment,{key:g},E?" · ":"",E?m("预测","Pred"):"GT"," ",n.createElement("b",{"data-os-loc":"src/field/GlyphControls.jsx:46:45"},b(v[g+"Speed"])),v[g+"Speed"]>a.p95?u?m("（流速>P95）"," (speed>P95)"):" (>P95)":""))," · ",w)):n.createElement("span",{"data-os-loc":"src/field/GlyphControls.jsx:49:5"},a.indices.length?t.mode==="split"?m("点击任一侧箭头，两边同时聚焦到该格点周围。","Click an arrow in either pane to focus both views on its neighbourhood."):f?m("点击一个热点，或定位采样最大误差。","Pick a hotspot or inspect the largest sampled error."):m("点击箭头查看两侧读数。","Click an arrow to inspect both values."):m("当前采样没有共同有效起点。","No jointly valid anchors at this sampling density.")),v&&n.createElement("details",{"data-os-loc":"src/field/GlyphControls.jsx:50:9",className:"glyph-exact"},n.createElement("summary",{"data-os-loc":"src/field/GlyphControls.jsx:50:42"},m("完整读数","Full precision")),n.createElement("div",{"data-os-loc":"src/field/GlyphControls.jsx:50:89"},["gt","prediction"].map(g=>n.createElement("div",{"data-os-loc":"src/field/GlyphControls.jsx:50:122",key:g},g==="gt"?"GT":m("预测","Prediction")," |v| = ",String(v[g+"Speed"])," · (Vx, Vy, Vz) = (",v[g].join(", "),")")),n.createElement("p",{"data-os-loc":"src/field/GlyphControls.jsx:50:245"},m("三维方向夹角","3D direction angle")," = ",v.angleDegrees===null?"—":v.angleDegrees+"°"," · Δs = ",String(v.speedDelta)," ",w),u&&h&&n.createElement("p",{"data-os-loc":"src/field/GlyphControls.jsx:51:23"},m("三维向量误差","3D vector error")," = ",String(v.vectorError)," ",w),n.createElement("p",{"data-os-loc":"src/field/GlyphControls.jsx:52:7"},m("仅在两侧流速均超过","Both speeds must exceed")," ",jn," ",w," ",m("时计算夹角。","to calculate the angle."))))))}function Pd({zh:e,scene:a}){const[t,s]=j.useState(null);return n.createElement("button",{"data-os-loc":"src/field/OverlayCameraButton.jsx:5:10","data-os-action":"",type:"button",title:e?"垂直于双箭头所在平面观察，读出真实夹角":"Face the plane of both arrows to remove foreshortening",onClick:()=>{t?(a.current.setCamera(t),s(null)):(s(a.current.getCamera()),a.current.faceArrowPair())}},t?e?"返回原视角":"Restore previous view":e?"正视并放大双箭头":"Face and fit selected arrows")}function ws(e,a){return a==null?null:e instanceof Map?e.get(a):e?.rows?.find(t=>t.frame===a)}function vt(e,a){const t=ws(e,a);return["train","validation","test"].includes(t?.split)?t.split:"unassigned"}function Rd(e,a,t){const s=ws(e,a);return t==="all"?!0:t.startsWith("test_")?s?.split==="test"&&(s.prediction_type||"unassigned")===t.slice(5):vt(e,a)===t}function Id(e){return{test_interpolation:e?"Test · 插值":"Test · Interpolation",test_extrapolation:e?"Test · 未来外推":"Test · Future extrapolation",test_unassigned:e?"Test · 类型未声明":"Test · Type undeclared",test_anchor:"Test · Anchor"}}function Ss(e,a){const t=ws(e,a)?.prediction_type;return["anchor","interpolation","extrapolation"].includes(t)?t:"unassigned"}function Nd(e,a=!1){return(a?{anchor:"Anchor · 来源帧",interpolation:"时间插值",extrapolation:"未来外推",unassigned:"预测类型未声明"}:{anchor:"Anchor",interpolation:"Interpolation",extrapolation:"Future extrapolation",unassigned:"Prediction type undeclared"})[e]}function js({manifest:e,frame:a}){const{language:t}=ue(),s=vt(e,a),i=t==="zh"?{train:"Train · 训练集",validation:"Validation · 验证集",test:"Test · 测试集",unassigned:"Unassigned · 未划分"}:{train:"Train",validation:"Validation",test:"Test",unassigned:"Unassigned"};return n.createElement(n.Fragment,null,n.createElement("span",{"data-os-loc":"src/field/FrameSplitBadge.jsx:9:11","aria-label":"Frame split",className:`frame-split-badge split-${a==null?"unassigned":s}`,title:t==="zh"?"依据此预测模型的 CSV 声明；并非独立核验训练历史":"Declared by this prediction model’s CSV; training history is not independently verified"},a==null?"—":i[s]),a!=null&&n.createElement("span",{"data-os-loc":"src/field/FrameSplitBadge.jsx:9:309",className:"frame-split-badge","aria-label":"Prediction type"},Nd(Ss(e,a),t==="zh")))}function Fd({onOverlayStyle:e,geometry:a,velocityVolume:t,settings:s,bounds:i,loadingFrame:o,error:r,labels:c,cameraState:d,onCameraChange:l,frameSplit:m,displayedFrame:b,controlRef:v,onSceneError:u,inspection:h,onGlyphMode:f,onGlyphPickPause:p,onShading:_}){const{tr:C,language:w}=ue(),g=w==="zh",[E,x]=j.useState("reset"),[S,B]=j.useState(null),[A,y]=j.useState(null),M=a?.paired,k=b,I=j.useRef(k);I.current=k;const F=j.useRef(!1),V=j.useRef(p);F.current=o!=null,V.current=p;function K(fe){F.current||(V.current?.(),B({context:I.current,id:fe}),N.current?.focusGlyph(fe))}const W=S?.context===k?S?.id:-1,G=j.useMemo(()=>o!=null||!A||A.id!==W||s.mode!=="split"||s.group!=="velocity"?null:Bd(t,M,A),[A,W,t,M,o,s.mode,s.group]);function ae(fe){N.current?.preset(i,fe),x(fe)}const T=j.useRef(null),N=j.useRef(null),ne=j.useRef(!1),[Y,ee]=j.useState(""),O=j.useRef(l),Z=j.useRef(!1);O.current=l,j.useImperativeHandle(v,()=>({capture(){if(!N.current)throw Error("3D unavailable");return N.current.capture()},getCamera(){if(!N.current)throw Error("camera");return N.current.getCamera()},getFocusIndex(){return N.current?.getFocusIndex()},restoreCamera(fe,we){if(!N.current)throw Error("camera");Z.current=!0;try{if(we!=null){if(!N.current.focusGlyph(we,!1))throw Error("Saved ROI anchor is unavailable");B({context:I.current,id:we})}else N.current.leaveRegion(!1),B(null);N.current.setCamera(fe),x("custom"),O.current?.(N.current.getCamera())}finally{Z.current=!1}}}),[]),j.useEffect(()=>{try{N.current=jd(T.current,{onGlyphPick:K,onFocusChange:y,onCameraChange:fe=>{x("custom"),Z.current||O.current?.(fe)}})}catch(fe){ee(`3D unavailable: ${fe.message}. Slices remain available.`),u?.(fe.message)}return()=>{N.current?.dispose(),N.current=null}},[]),j.useEffect(()=>{if(d){Z.current=!0;try{N.current?.setCamera(d)}finally{Z.current=!1}}},[d]),j.useEffect(()=>{N.current?.setDisplay(s)},[s]),j.useEffect(()=>{N.current?.setGeometry(a,b)},[a,b]),j.useEffect(()=>{N.current?.setGlyph?.(W)},[a,W]),j.useEffect(()=>{N.current?.setVolumeTraces?.(G,W,b)},[G,W,b]),j.useEffect(()=>{N.current?.setInspection(h,i)},[h,i]),j.useEffect(()=>{i&&!ne.current&&(N.current?.fit(i),ne.current=!0,x("reset"))},[i]),j.useEffect(()=>{i&&E!=="custom"&&ae(E)},[s.mode,i]);const ie=s.group==="velocity",te=ie&&M&&s.mode==="overlay";let z=1/0,q=-1/0;for(const fe of a?.layers||[])for(const we of fe.values||[])z=Math.min(z,we),q=Math.max(q,we);const re=s.sourceRange||[z,q];return n.createElement("section",{"data-os-loc":"src/field/FieldViewport.jsx:49:10",className:"field-viewport","aria-label":C("3D field visualization")},n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:50:5",className:"field-view-heading"},n.createElement("strong",{"data-os-loc":"src/field/FieldViewport.jsx:50:41"},C(ie?"3D velocity field":"3D zero-isosurface")),n.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:50:117"},C("Frame "),b??"—"," · ",n.createElement(js,{manifest:m,frame:b}))),n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:50:237",className:"v2-view-actions",role:"group","aria-label":g?"三维视角":"3D view"},n.createElement(rc,{value:s.shading||"original",onChange:_,disabled:s.group!=="sdf"}),[["reset",g?"重置视角":"Reset view"],["top",g?"顶视图":"Top"],["side",g?"侧视图":"Side"]].map(([fe,we])=>n.createElement("button",{"data-os-loc":"src/field/FieldViewport.jsx:50:528","data-os-action":"",key:fe,disabled:!i,"aria-pressed":E===fe,onClick:()=>ae(fe)},we)),n.createElement("button",{"data-os-loc":"src/field/FieldViewport.jsx:50:639","data-os-action":"",disabled:!i,onClick:()=>{N.current?.fit(i),x("reset")}},C("Fit view"))),ie&&M&&n.createElement(Md,{onOverlayStyle:e,paired:M,settings:s,zh:g,busy:o!=null,selected:W,focus:A,onOverview:()=>N.current?.leaveRegion(),onPick:K,onMode:f}),G&&n.createElement(Ad,{key:b+":"+W,result:G,zh:g,zoomIn:()=>{const fe=N.current.getCamera();return N.current.fitVolumeTraces(G),fe},zoomBack:fe=>N.current.setCamera(fe)}),n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:55:5",className:"field-scene",ref:T}),te?n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:56:14",className:"overlay-role-key"},s.showGt!==!1&&n.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:57:33"},n.createElement("i",{"data-os-loc":"src/field/FieldViewport.jsx:57:39",className:"gt"}),"GT · ",g?"蓝色实线":"solid blue"),s.showPrediction!==!1&&n.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:58:41"},n.createElement("i",{"data-os-loc":"src/field/FieldViewport.jsx:58:47",className:"pred"}),g?"预测 · 橙色分段":"Prediction · segmented orange"),A&&W===A.id&&s.showGt!==!1&&s.showPrediction!==!1&&n.createElement(Pd,{key:b+":"+W+":"+s.glyphMode,zh:g,scene:N})):n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:60:12",className:`field-role-labels ${s.mode==="split"?"split":""}`,"aria-hidden":"true"},s.mode!=="prediction"&&n.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:60:137"},c?.gt?.displayName?`GT · ${c.gt.displayName} · ${ie?"shared scale":"blue"}`:s.previewOnly?C("Dataset preview"):C(ie?"GT · shared color scale":"GT · blue"),s.showGt===!1?C(" · hidden"):""),s.mode!=="gt"&&n.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:60:409"},c?.prediction?.displayName?`Prediction · ${c.prediction.displayName} · ${ie?"shared scale":"orange"}`:C(ie?"Prediction · shared color scale":"Prediction · orange"),s.showPrediction===!1?C(" · hidden"):s.mode==="wire-overlay"?C(" · X-ray wireframe"):"")),ie&&!te&&(!M||s.component!=="magnitude")&&n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:61:71",className:"field-legend"},s.component==="magnitude"?C("Speed magnitude"):`Velocity ${s.component?.toUpperCase()}`,n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:61:205",className:"field-gradient"}),re.every(Number.isFinite)?`${re[0].toPrecision(3)} — ${re[1].toPrecision(3)}`:C("No valid samples")," ",n.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:61:350"},s.unit||C("units undeclared"))),o!=null&&n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:62:26",role:"status",className:"field-view-loading"},C("Loading frame "),o,"…"),(Y||r)&&n.createElement("p",{"data-os-loc":"src/field/FieldViewport.jsx:63:28",role:"alert",className:"field-view-error"},Y||r),a?.warnings?.length>0&&n.createElement("p",{"data-os-loc":"src/field/FieldViewport.jsx:64:36",className:"field-view-warning"},a.warnings.join(" · ")),n.createElement("small",{"data-os-loc":"src/field/FieldViewport.jsx:65:5",className:"field-view-help"},n.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:65:40",className:"shading-note"},g?"平滑只影响 SDF 表面光照；顶点、切片、指标和速度箭头保持原样。":"Smoothing affects SDF surface lighting only; vertices, slices, scores and velocity arrows are unchanged."),C("Drag to orbit · Scroll to zoom · "),C(ie?"Instantaneous velocity vectors, not particle paths":"SDF = 0; display-only mesh"),C(" · X / Y up / Z · Preview quality: "),s.quality||C("balanced")))}function Oi({frames:e,current:a,direction:t=1,loop:s=!1,status:i="ready"}){const o=e.indexOf(a),r=o+(t<0?-1:1);return o>=0&&r>=0&&r<e.length?{frame:e[r],action:"select"}:i==="processing"&&t>0?{frame:a,action:"wait"}:i==="ready"&&s&&e.length>1?{frame:t<0?e.at(-1):e[0],action:"select"}:{frame:a,action:"stop"}}function Od({frames:e,displayedFrame:a,requestedFrame:t,status:s="ready",loading:i=!1,previewFps:o=24,onFrame:r,onScrubbing:c,timing:d,frameSplit:l,active:m=!0,controlRef:b,initialPlayback:v}){const{tr:u}=ue(),[h,f]=j.useState(!1),[p,_]=j.useState(v?.loop??!1),[C,w]=j.useState(v?.fps??o),[g,E]=j.useState(v?.speed??1),[x,S]=j.useState("");j.useImperativeHandle(b,()=>({pause:()=>f(!1),getSettings:()=>({loop:p,fps:C,speed:g}),restoreSettings:k=>{f(!1),_(k.loop),w(k.fps),E(k.speed)}}),[p,C,g]),j.useEffect(()=>{const k=()=>f(!1);return window.addEventListener("oceanscope-annotate",k),()=>window.removeEventListener("oceanscope-annotate",k)},[]),j.useEffect(()=>{m||f(!1)},[m]);const B=j.useRef(!1);j.useEffect(()=>{B.current||S(String(t??a??""))},[t,a]),j.useEffect(()=>{e.length<2&&f(!1)},[e.length]),j.useEffect(()=>{if(!h||i)return;const k=setTimeout(()=>{const I=Oi({frames:e,current:a,loop:p,status:s});I.action==="select"?r(I.frame):I.action==="stop"&&f(!1)},1e3/(Math.max(1,C)*g));return()=>clearTimeout(k)},[h,i,a,e,p,s,C,g,r]);function A(k){f(!1);const I=Oi({frames:e,current:t??a,direction:k,status:s});I.action==="select"&&r(I.frame)}function y(){f(!1);const k=Number(x);e.includes(k)?k!==t&&r(k):S(String(t??a??""))}const M=e.some((k,I)=>I>0&&k!==e[I-1]+1);return n.createElement("section",{"data-os-loc":"src/field/FieldTimeline.jsx:21:10",className:"field-timeline","aria-label":u("Animation controls")},n.createElement(js,{manifest:l,frame:a}),n.createElement("div",{"data-os-loc":"src/field/FieldTimeline.jsx:23:5",className:"field-play-controls"},n.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:42","data-os-action":"","aria-label":u("First frame"),disabled:!e.length,onClick:()=>{f(!1),r(e[0])}},"⏮"),n.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:170","data-os-action":"","aria-label":u("Previous frame"),disabled:e.length<2,onClick:()=>A(-1)},"‹"),n.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:272","data-os-action":"",className:"primary",disabled:e.length<2,onClick:()=>f(k=>!k)},u(h?"Pause":"Play")),n.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:400","data-os-action":"","aria-label":u("Next frame"),disabled:e.length<2,onClick:()=>A(1)},"›"),n.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:497","data-os-action":"","aria-label":u("Last frame"),disabled:!e.length,onClick:()=>{f(!1),r(e.at(-1))}},"⏭"),n.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:23:628"},n.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:23:635","data-os-action":"",type:"checkbox",checked:p,onChange:k=>_(k.target.checked)}),u(" Loop")),n.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:23:735"},u("Speed"),n.createElement("select",{"data-os-loc":"src/field/FieldTimeline.jsx:23:755","data-os-action":"",value:g,onChange:k=>E(Number(k.target.value))},[.25,.5,1,2].map(k=>n.createElement("option",{"data-os-loc":"src/field/FieldTimeline.jsx:23:845",key:k,value:k},k,"×"))))),n.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:24:5","data-os-action":"","aria-label":u("Sequence timeline"),type:"range",min:"0",max:Math.max(0,e.length-1),value:Math.max(0,e.indexOf(t??a)),disabled:e.length<2,onPointerDown:()=>{f(!1),c?.(!0)},onPointerUp:()=>c?.(!1),onPointerCancel:()=>c?.(!1),onBlur:()=>c?.(!1),onKeyDown:k=>{c?.(!0),["Home","End"].includes(k.key)&&(k.preventDefault(),f(!1),r(k.key==="Home"?e[0]:e.at(-1)))},onKeyUp:()=>c?.(!1),onChange:k=>{f(!1),r(e[Number(k.target.value)])}}),n.createElement("div",{"data-os-loc":"src/field/FieldTimeline.jsx:25:5","data-displayed-frame":a,className:"field-time-labels"},n.createElement("span",{"data-os-loc":"src/field/FieldTimeline.jsx:25:78"},u("Displayed frame "),n.createElement("strong",{"data-os-loc":"src/field/FieldTimeline.jsx:25:108"},a??"—"),i?` · ${u("Loading")} ${t}…`:""),n.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:25:206"},u("Go to frame"),n.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:25:232","data-os-action":"","aria-label":u("Comparison frame"),type:"number",value:x,onFocus:()=>{B.current=!0,f(!1)},onChange:k=>{f(!1),S(k.target.value)},onBlur:()=>{B.current=!1,y()},onKeyDown:k=>{k.key==="Enter"&&y()}})),n.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:25:527"},u("Preview FPS"),n.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:25:553","data-os-action":"","aria-label":u("Preview FPS"),type:"number",min:"1",max:"120",value:C,onChange:k=>w(Math.max(1,Math.min(120,Number(k.target.value)||24)))})),n.createElement("small",{"data-os-loc":"src/field/FieldTimeline.jsx:25:719"},d?.fps>0&&Number.isFinite(d.originFrame)?`${u("Time")}: ${((a-d.originFrame)/d.fps+(d.offsetSeconds||0)).toFixed(3)} s`:u("Playback timing only — not physical simulation time"))),n.createElement("small",{"data-os-loc":"src/field/FieldTimeline.jsx:26:5"},e.length,u(" available frames"),M?u(" · Missing frames skipped; no interpolation"):"",s==="processing"?u(" · Processing continues; playback waits at the latest frame"):s==="error"?u(" · Processing failed; completed frames remain available"):""))}function Td(e,a){if(!e)return{valid:0,total:0,fraction:null};const t=e.values.length;let s=0;for(let i=0;i<t;i++)(!a||a.values[i])&&Number.isFinite(e.values[i])&&s++;return{valid:s,total:t,fraction:t?s/t:null}}function Dd(e,a){return Number.isFinite(e)&&e>0?a?[0,e]:[-e,e]:null}const zd=e=>Math.max(0,Math.min(1,e)),ba=(e,a,t)=>e.map((s,i)=>Math.round(s+(a[i]-s)*t));function Co(e,a,t){const[s,i]=a,o=i===s?t==="error"?.5:0:zd((e-s)/(i-s));return t==="error"?o<.5?ba([32,91,177],[246,248,250],o*2):ba([246,248,250],[201,66,55],(o-.5)*2):t==="prediction"?ba([255,244,221],[224,119,32],o):t==="absolute-error"?ba([246,240,252],[103,32,150],o):ba([235,244,252],[31,111,176],o)}function Bo(e,a,t,s,i,o){const{x:r=0,z:c=0,width:d=a.width,height:l=a.height}=o??{},m=e.createImageData(d,l);for(let b=0;b<l;b++)for(let v=0;v<d;v++){const u=v+r+a.width*(b+c),h=4*(v+d*(l-1-b)),f=a.values[u],p=(!t||t[u])&&Number.isFinite(f)?Co(f,s,i):a.angleSupport?.[u]?[252,222,147]:(v+b)%6<3?[205,213,219]:[238,242,245];m.data[h]=p[0],m.data[h+1]=p[1],m.data[h+2]=p[2],m.data[h+3]=255}e.putImageData(m,0,0)}const Ti=e=>Math.max(0,Math.min(1,e));function Cs({slice:e,maskSlice:a,range:t,palette:s="ground-truth",crosshair:i,onCrosshair:o,plane:r,aspect:c,region:d=null,label:l,viewport:m}){const b=j.useRef(null);return j.useEffect(()=>{const v=b.current;if(!v||!e)return;const{width:u=e.width,height:h=e.height}=m??{};v.width=u,v.height=h;const f=v.getContext?.("2d");if(f){if(Bo(f,e,a?.values,t,s,m),e.components){f.strokeStyle=s==="prediction"?"#7c3f0d":"#123e68",f.lineWidth=Math.max(1,e.width/180);const p=r==="xy"?[0,1]:r==="xz"?[0,2]:[1,2],_=Math.max(4,Math.ceil(Math.max(e.width,e.height)/18));for(let C=_/2;C<e.height;C+=_)for(let w=_/2;w<e.width;w+=_){const g=Math.floor(w)+e.width*Math.floor(C);if(a&&!a.values[g])continue;const[E,x]=r==="oblique"?hr(e,g):p.map(k=>e.components[k][g]),S=Math.hypot(E,x);if(!Number.isFinite(S)||S<1e-8)continue;const B=Math.min(_*.42,_*.18+Math.log1p(S)*_*.08),A=E/S*B,y=-x/S*B,M=e.height-1-C;f.beginPath(),f.moveTo(w,M),f.lineTo(w+A,M+y),f.lineTo(w+A-A*.35+y*.25,M+y-y*.35-A*.25),f.moveTo(w+A,M+y),f.lineTo(w+A-A*.35-y*.25,M+y-y*.35+A*.25),f.stroke()}}if(d){const[p,_]=gi(e.width,d.slice(0,2)),[C,w]=gi(e.height,d.slice(2,4));f.strokeStyle="#9c6900",f.lineWidth=Math.max(1,e.width/180),f.fillStyle="rgba(255,211,62,.17)",f.fillRect(p,e.height-1-w,_-p+1,w-C+1),f.strokeRect(p+.5,e.height-w-.5,Math.max(0,_-p),Math.max(0,w-C))}if(i){const p=i[0]*u,_=(1-i[1])*h;f.strokeStyle="#111",f.lineWidth=Math.max(.5,u/350),f.setLineDash([3,3]),f.beginPath(),f.moveTo(p,0),f.lineTo(p,h),f.moveTo(0,_),f.lineTo(u,_),f.stroke(),f.setLineDash([])}}},[e,a,t,s,i,r,d,m]),n.createElement("canvas",{"data-os-loc":"src/field/SliceCanvas.jsx:41:10","data-os-action":"","data-renderer":"field-slice","data-review-plane":r,"data-review-shape":e?[e.width,e.height].join(","):void 0,ref:b,"aria-label":l,className:"slice-canvas",style:{aspectRatio:c||"auto",height:"auto"},onClick:v=>{if(!e||!o)return;const u=v.currentTarget.getBoundingClientRect();o([Ti((v.clientX-u.left)/u.width),Ti(1-(v.clientY-u.top)/u.height)])}})}const hn=e=>Number.isFinite(e)?e.toPrecision(5):"N/A";function Vd({metadata:e,labels:a,single:t,group:s,epe:i,unit:o,local:r,whole:c,counts:d,probes:l,sourceRange:m,errorRange:b,metrics:v,titles:u,aspects:h}){return JSON.parse(JSON.stringify({schema:"oceanscope.field-report.v1",metadata:e,labels:a,single:t,group:s,epe:i,unit:o||"undeclared",local:t?null:r,whole:t?null:c,counts:d.slice(0,t?1:3),probes:l.slice(0,t?1:3),sourceRange:m,errorRange:t?null:b,savedFrameMetrics:t?null:v?.[s]??null,titles:u.slice(0,t?1:3),aspects:h.slice(0,t?1:3),scope:"Slice statistics and saved volume metrics are distinct; shading never changes measurements."}))}async function Wd(e,a,t,s,i){const o=s==="zh",r=document.createElement("canvas");r.width=1920,r.height=1800;const c=r.getContext("2d"),d=e.metadata,l="#243f56",m="#5c7487";c.fillStyle="white",c.fillRect(0,0,r.width,r.height);function b(w,g,E,x=23,S=l,B=1808){c.font=`${x}px Segoe UI, Microsoft YaHei, sans-serif`,c.fillStyle=S,c.fillText(String(w),g,E,B)}function v(w,g,E,x,S=21){c.font=`${S}px Segoe UI, Microsoft YaHei, sans-serif`;let B="",A=0;for(const y of String(w))c.measureText(B+y).width>x?(b(B,g,E+A*(S+7),S,m,x),A++,B=y):B+=y;return b(B,g,E+A*(S+7),S,m,x),A+1}function u(w,g,E,x,S,B=w.width/w.height){const A=Math.min(x,S*B),y=A/B;c.drawImage(w,g+(x-A)/2,E+(S-y)/2,A,y)}b(o?"OceanScope | 场比较汇报":"OceanScope | Field comparison report",56,64,38),b("v2.10",1760,64,24),b(`A · ${e.labels.a}`,56,108,25,"#168ba9",870),e.single||b(`B · ${e.labels.b}`,986,108,25,"#c6752a",878),b(`${o?"帧":"Frame"} ${d.frame} · ${e.group.toUpperCase()} ${d.component} · ${d.plane?.startsWith("oblique")?`${(d.rotation_axis||"y").toUpperCase()} ${d.angle_degrees}° / ${hn(d.section_percent)}%`:d.plane.toUpperCase()+" / "+d.slice_index} · ${o?"数值单位":"Value unit"} ${e.unit}`,56,151),b(e.single?o?"单组 GT；未提供预测，不计算比较误差。":"Single GT; no prediction and no comparison errors.":e.group==="sdf"?o?"SDF 数值差，不等于水面高度差；有效范围以当前数据的掩码为准。":"SDF field differences are not surface-height errors; validity follows the supplied masks.":o?"速度分量差 / 端点误差；瞬时矢量不是粒子轨迹。":"Velocity component differences / endpoint errors; instantaneous vectors are not particle paths.",56,190,22,m),b(`${o?"三维显示":"3D view"}: ${d.mode} · A ${d.gt_visible?"on":"off"}${e.single?"":` / B ${d.prediction_visible?"on":"off"}`} · ${o?"着色":"shading"}: ${d.shading||"original"} · ${o?"显示精度":"quality"}: ${d.preview_quality}`,56,228,22,m),c.fillStyle="#f4f8fb",c.fillRect(56,250,1808,480),u(a,56,250,1808,480);const h=t.length,f=28,p=(1808-f*(h-1))/h;if(t.forEach((w,g)=>{const E=56+g*(p+f),x=g===2?e.errorRange:e.sourceRange;b(e.titles[g],E,782,25,l,p),b(`${hn(x[0])} … ${hn(x[1])} ${e.unit}`,E,818,21,m,p),c.imageSmoothingEnabled=!1,u(w,E,840,p,310,e.aspects[g]),c.imageSmoothingEnabled=!0;const S=c.createLinearGradient(E,0,E+p,0);S.addColorStop(0,g===2?e.epe?"#f6f0fc":"#205bb1":"#ebf4fc"),g===2&&!e.epe&&S.addColorStop(.5,"#f6f8fa"),S.addColorStop(1,g===2?e.epe?"#672096":"#c94237":"#1f6fb0"),c.fillStyle=S,c.fillRect(E,1170,p,14),b(`${o?"有效":"Valid"}: ${e.counts[g].valid}/${e.counts[g].total} · ${o?"探针":"Probe"}: ${hn(e.probes[g])} ${e.unit}`,E,1220,20,m,p)}),b(o?"当前切片与局部区域":"Current slice and selected region",56,1280,27),e.single)b(o?"仅展示 GT 切片及有效样本；无 A/B 差异统计。":"GT slice and validity only; no A/B statistics.",56,1335,23,m);else{const w=[[o?"完整切片":"Full slice",e.whole],...e.local?.region?[[o?"黄色选区":"Yellow region",e.local]]:[]];b(`${e.epe?"Mean EPE":o?"平均有符号差":"Mean signed"} | ${e.epe?"RMS EPE":"MAE / RMSE"} | ${o?"共同有效 / 候选":"Common valid / candidates"}`,400,1280,22,m,1460),w.forEach(([g,E],x)=>{const S=1310+x*65;c.fillStyle="#f1f6f9",c.fillRect(56,S,1808,55),b(g,76,S+36),b(`${hn(E?.mean)} | ${e.epe?hn(E?.rmse):`${hn(E?.mae)} / ${hn(E?.rmse)}`} ${e.unit} | ${E?.count??0}/${E?.total??0} (${hn((E?.coverage??0)*100)}%)`,400,S+36,24)})}b(o?"已有全域指标 · 当前帧 · 原始有效范围":"Saved volume metrics · current frame · original support",56,1480,27);const _=e.savedFrameMetrics;if(e.single||!_||_.blocked)b(e.single?o?"不适用：单组查看。":"Not applicable: single dataset.":o?"此帧无可用评分。":"No available scores for this frame.",56,1530,24,m);else{const w=e.group==="sdf"?["mae","rmse","fluidIoU","coverage"]:["meanEpe","epeRmse","coverage"];b(w.map(g=>`${g}: ${hn(_[g])}${g==="coverage"||g==="fluidIoU"?"":` ${e.unit}`}`).join("   |   "),56,1530,24)}const C=_?.notice||_?.reason||(e.single?"No prediction provided.":"Missing samples are excluded, never zero.");v(C,56,1575,1808),v(o?"黄色表示选区，虚线表示探针。三维平滑只改变光照法线；原始顶点、切片与指标保持不变。坐标使用源网格坐标单位。":"Yellow marks the region; dashed lines mark the probe. Smooth shading changes lighting normals only. Original vertices, slices and metrics are unchanged. Coordinates use source-grid units.",56,1670,1808,21),b(`${d.comparison_id} · ${o?"完整设置与数值请另存汇报 JSON":"Save report JSON for complete settings and values"}`,56,1760,20,m),await Ec(r,i)}function $d(e,a){let t=1/0,s=-1/0;return e.forEach((i,o)=>{if(!i)return;const r=a[o];for(let c=0;c<i.values.length;c+=1){if(r&&!r.values[c])continue;const d=i.values[c];Number.isFinite(d)&&(t=Math.min(t,d),s=Math.max(s,d))}}),Number.isFinite(t)?[t,s]:[0,1]}function Xd({frame:e,group:a,plane:t,sliceIndex:s,crosshair:i,onCrosshair:o,component:r="magnitude",fixedRange:c=null,lattice:d,single:l=!1,label:m="Dataset",frameNumber:b,frameSplit:v,viewMetadata:u={},angle:h=30,sectionPercent:f=50,rotationAxis:p="y",exportStem:_="comparison",errorScale:C,onErrorScale:w,region:g=null,onRegion:E,onInspection:x,inspectionContext:S,busy:B=!1,captureScene:A,reportReady:y=!1,reportLabels:M={},savedMetrics:k}){const{tr:I,language:F}=ue(),V=F==="zh",K=j.useRef(null),[W,G]=j.useState(!1),[ae,T]=j.useState(1),[N,ne]=j.useState(""),Y=C?.locked??W,ee=C?.limit??ae,O=J=>w?w({locked:J,limit:ee}):G(J),Z=J=>w?w({locked:Y,limit:J}):T(J),ie=j.useMemo(()=>ya(e,a),[e,a]),te=j.useMemo(()=>t==="oblique"?Es(d,h,f,p):null,[t,d,h,f,p]),z=j.useMemo(()=>["groundTruth","prediction","error"].map(J=>t==="oblique"?gr(e,ie[J],r,d,te):pd(e,ie[J],t,s,r)),[e,ie,t,s,r,d,te]),q=j.useMemo(()=>["groundTruth","prediction","error"].map((J,L)=>t==="oblique"?z[L]?.maskSlice:ie[J]?.maskId?rs(e,ie[J].maskId,t,s):null),[e,ie,t,s,z]),re=j.useMemo(()=>l?null:yi(z,q,g),[l,z,q,g]),fe=j.useMemo(()=>l?null:yi(z,q),[l,z,q]),we=j.useMemo(()=>cc(d,t,s,te,z[0],g,i),[d,t,s,te,z,g,i]);j.useEffect(()=>{x?.({context:S,value:B?null:we})},[x,S,we,B]);const Ae=c||$d(z.slice(0,2),q.slice(0,2)),Ie=a==="velocity"&&r==="magnitude",Xe=Y&&Dd(ee,Ie)||(z[2]?(Ie?bd:md)(z[2].values):[-1,1]),Ve=[l?m:"Ground Truth","Prediction",Ie?"Endpoint Error |Pred − GT|":"Signed Error (Pred − GT)"],We=t==="xy"?[0,1]:t==="xz"?[0,2]:[1,2],$e=te?[Math.max(te.spacing[0],1e-9),te.spacing[1],1]:d?.voxelSize||[1,1,1],R=J=>te?te.degenerate?1:Math.max(.15,(te.range[1]-te.range[0])/((te.height-1)*te.spacing[1])):J.width*$e[We[0]]/(J.height*$e[We[1]]),$=z.map((J,L)=>Td(J,q[L])),U=t==="xy"?2:t==="yz"?0:1,D=te?te.point(0,0):d?.origin?.map((J,L)=>J+s*d.axisSteps[U][L]),H=`Frame ${b??"unknown"} | ${vt(v,b)} | ${Ss(v,b)} | ${a} ${r} | ${t==="oblique"?`Oblique ${p.toUpperCase()} ${h}° / ${f.toFixed(1)}%`:t.toUpperCase()+" index "+s}`;function X(J){const L=z[0];o([(J%L.width+.5)/L.width,(Math.floor(J/L.width)+.5)/L.height])}function oe(){xi(`${_}_${b}_local_diagnosis.json`,JSON.stringify({schema:"oceanscope.slice-diagnosis.v1",metadata:u,group:a,component:r,unit:ie.unit||"undeclared",difference:Ie?"vector_endpoint_error":"signed_B_minus_A",local:re,whole:fe,world_region_corners:we?.corners,probe_world:we?.probe,scope:"current_slice_only_saved_volume_scores_unchanged",validity:"Intersection of finite A/B/error samples and their existing masks"},null,2))}function Se(){const J=z.map((L,ce)=>{if(!L)return null;const de=Math.min(L.width-1,Math.floor(i[0]*L.width))+L.width*Math.min(L.height-1,Math.floor(i[1]*L.height));return(!q[ce]||q[ce].values[de])&&Number.isFinite(L.values[de])?L.values[de]:null});return Vd({metadata:{...u,source_color_range:Ae,error_color_range:l?null:Xe,error_range_locked:Y,probe_world:we?.probe,world_region_corners:we?.corners},labels:M,single:l,group:a,epe:Ie,unit:ie.unit,local:re,whole:fe,counts:$,probes:J,sourceRange:Ae,errorRange:Xe,metrics:k,titles:Ve,aspects:z.map(L=>L?R(L):1)})}async function je(J=!1){try{if(!y)throw Error(V?"等待当前帧加载完成。":"Wait for the current frame.");const L=A(),ce=Se();J?xi(`${_}_${b}_report.json`,JSON.stringify(ce,null,2)):await Wd(ce,L,[...K.current.querySelectorAll("canvas")],F,`${_}_${b}_report.png`),ne("")}catch(L){ne(L.message)}}async function Oe(){try{const J=[...K.current.querySelectorAll("canvas")],L=document.createElement("canvas");L.width=1800,L.height=920;const ce=L.getContext("2d");ce.fillStyle="white",ce.fillRect(0,0,1800,920),ce.fillStyle="#18374d",ce.font="20px sans-serif",ce.fillText("OceanScope | "+_,25,35,1740),ce.fillText(H,25,70,1740),ce.fillText("Plane origin (world units): "+(D?.map(de=>de.toPrecision(5)).join(", ")||"undeclared"),25,105,1740),J.forEach((de,Pe)=>{const qe=25+Pe*590,xn=Pe===2?Xe:Ae;ce.fillStyle="#18374d",ce.fillText(Ve[Pe],qe,155,560),ce.fillText(`${xn.map(ke=>ke.toPrecision(4)).join(" to ")} ${ie.unit||"undeclared"}`,qe,185,560);const Ge=R(z[Pe]),cn=Math.min(555,460*Ge),Gn=cn/Ge;ce.drawImage(de,qe,205,cn,Gn);const Je=ce.createLinearGradient(qe,0,qe+555,0);Je.addColorStop(0,Pe===2?Ie?"#f6f0fc":"#205bb1":"#ebf4fc"),Pe===2&&!Ie&&Je.addColorStop(.5,"#f6f8fa"),Je.addColorStop(1,Pe===2?Ie?"#672096":"#c94237":"#1f6fb0"),ce.fillStyle=Je,ce.fillRect(qe,700,555,18),ce.fillStyle="#18374d",ce.fillText(`${xn[0].toPrecision(4)}                         ${xn[1].toPrecision(4)} ${ie.unit||""}`,qe,745,555),ce.fillText(`Valid slice samples: ${$[Pe].valid}/${$[Pe].total}`,qe,780,560)}),ce.fillText(`Source scale: ${c?"fixed":"auto per frame"}${l?"":` | Error scale: ${Y?"fixed":"auto per frame"}`}`,25,830,1740),ce.fillText("Slice validity is not full-volume scoring coverage. Checkerboard = invalid. Source fields and scores unchanged.",25,865,1740),await _c(L,`${_}_${b}_${t}_${t==="oblique"?h:s}_slices.png`,{...u,source_color_range:Ae,error_color_range:Xe,error_range_locked:Y,local_diagnosis:re,world_region_corners:we?.corners}),ne("")}catch(J){ne(J.message)}}return n.createElement("div",{"data-os-loc":"src/field/SliceTriptych.jsx:70:10","data-review-frame":b,"data-review-slice":H,ref:K,inert:B||void 0},n.createElement("div",{"data-os-loc":"src/field/SliceTriptych.jsx:70:111",className:"frame-split-toolbar"},A&&n.createElement(n.Fragment,null,n.createElement("button",{"data-os-loc":"src/field/SliceTriptych.jsx:70:165","data-os-action":"",className:"report-export",disabled:!y,onClick:()=>je()},V?"导出场一页汇报图":"Export field report PNG"),n.createElement("button",{"data-os-loc":"src/field/SliceTriptych.jsx:70:302","data-os-action":"",disabled:!y,onClick:()=>je(!0)},V?"导出汇报 JSON":"Export report JSON")),!l&&n.createElement(n.Fragment,null,n.createElement("label",{"data-os-loc":"src/field/SliceTriptych.jsx:70:429"},n.createElement("input",{"data-os-loc":"src/field/SliceTriptych.jsx:70:436","data-os-action":"",type:"checkbox",checked:Y,onChange:J=>O(J.target.checked)}),V?"固定误差色标（跨帧）":"Lock error scale across frames"),Y&&n.createElement("label",{"data-os-loc":"src/field/SliceTriptych.jsx:70:586"},V?"误差上限":"Error limit"," ",n.createElement("input",{"data-os-loc":"src/field/SliceTriptych.jsx:70:619","data-os-action":"","aria-label":"Error scale limit",type:"number",min:"0.000001",step:"0.1",value:ee,onChange:J=>{const L=Number(J.target.value);L>0&&Number.isFinite(L)&&Z(L)}}))),n.createElement("button",{"data-os-loc":"src/field/SliceTriptych.jsx:70:821","data-os-action":"",onClick:Oe,disabled:z.some((J,L)=>L<(l?1:3)&&!J)},l?V?"导出切片 PNG":"Export slice PNG":V?"导出并排切片 PNG":"Export slice comparison PNG")),n.createElement("small",{"data-os-loc":"src/field/SliceTriptych.jsx:70:1005"},H," · ",V?"有效样本比例仅针对当前切片，不等于全域计算覆盖率。":"Validity below is for this slice, not full-volume scoring coverage."),N&&n.createElement("p",{"data-os-loc":"src/field/SliceTriptych.jsx:70:1149",role:"alert"},N),n.createElement("section",{"data-os-loc":"src/field/SliceTriptych.jsx:70:1183",className:"slice-triptych","aria-label":`${a} synchronized slices`},z.slice(0,l?1:3).map((J,L)=>{const ce=J&&i?Math.min(J.width-1,Math.floor(i[0]*J.width))+J.width*Math.min(J.height-1,Math.floor(i[1]*J.height)):null,de=ce!==null&&(!q[L]||q[L].values[ce])&&Number.isFinite(J.values[ce]);return n.createElement("figure",{"data-os-loc":"src/field/SliceTriptych.jsx:71:338","data-review-id":"field-slice-"+a+"-"+L,key:Ve[L]},n.createElement("figcaption",{"data-os-loc":"src/field/SliceTriptych.jsx:71:414"},n.createElement("strong",{"data-os-loc":"src/field/SliceTriptych.jsx:71:426"},Ve[L]),n.createElement("span",{"data-os-loc":"src/field/SliceTriptych.jsx:71:458"},L===2?`${Xe[0].toPrecision(3)} … ${Xe[1].toPrecision(3)}`:`${Ae[0].toPrecision(3)} … ${Ae[1].toPrecision(3)}`," ",ie.unit||I("(unit undeclared)"))),J?n.createElement(Cs,{slice:J,maskSlice:q[L],range:L===2?Xe:Ae,palette:L===2?Ie?"absolute-error":"error":"ground-truth",aspect:R(J),crosshair:i,onCrosshair:o,plane:t,region:g}):n.createElement("div",{"data-os-loc":"src/field/SliceTriptych.jsx:71:909",className:"slice-unavailable"},I("Not available")),n.createElement("small",{"data-os-loc":"src/field/SliceTriptych.jsx:71:972"},I("Probe: "),de?J.values[ce].toPrecision(6):I("Not valid")," ",ie.unit," · ",a==="velocity"?r:I("SDF")))})),!l&&re&&n.createElement(lc,{region:g,onRegion:E,local:re,whole:fe,onLocate:X,dimensions:2,unit:ie.unit||(V?"单位未声明":"undeclared"),absolute:Ie,onExport:oe}),n.createElement("p",{"data-os-loc":"src/field/SliceTriptych.jsx:72:203",className:"height-note"},V?"三维白圈表示探针在切面上的位置；黄色框为选中区域，不代表水面高度。":"The 3D white ring marks the probe on this slice; the yellow box marks the selected region, not water-surface height."),te&&n.createElement("p",{"data-os-loc":"src/field/SliceTriptych.jsx:72:400",className:"height-note"},p==="y"?V?"横轴 s 沿切面，纵轴 Y 向上；使用原始网格坐标单位。斜切不会改变下方保存的全域统计。":"Horizontal: along-section distance s; vertical: Y up. Source-grid coordinates. Oblique inspection does not change saved volume statistics.":V?"横纵轴均沿当前倾斜切面，不等于世界坐标中的高度 Y。使用原始网格坐标单位；全域统计保持不变。":"Both axes lie in the tilted plane; the vertical axis is not world height Y. Source-grid coordinates; saved volume statistics remain unchanged."),n.createElement("div",{"data-os-loc":"src/field/SliceTriptych.jsx:72:844",className:"frame-split-toolbar"},$.slice(0,l?1:3).map((J,L)=>n.createElement("small",{"data-os-loc":"src/field/SliceTriptych.jsx:72:920",key:L},Ve[L],": ",J.valid,"/",J.total," · ",J.fraction==null?"N/A":(100*J.fraction).toFixed(1)+"%"))))}const Ao={mae:"MAE",rmse:"RMSE",maxAbsoluteError:"Maximum absolute error",nearSurfaceMae:"Near-surface MAE",signAccuracy:"Sign accuracy",fluidIoU:"Fluid IoU",dice:"Dice",symmetricMeanSurfaceDistance:"Symmetric mean surface distance",hd95:"HD95",meanEpe:"Mean EPE",epeRmse:"EPE RMSE",epeP95:"EPE P95",relativeL2:"Relative L2",meanCosineSimilarity:"Mean cosine similarity",meanAngularErrorDegrees:"Mean angular error",divergenceMae:"Divergence MAE",coverage:"Coverage",validCount:"Valid voxels"},Gd=["nearSurfaceMae","rmse","fluidIoU","meanEpe","epeP95","relativeL2","coverage","mae","maxAbsoluteError","signAccuracy","dice","symmetricMeanSurfaceDistance","hd95","epeRmse","componentMae","componentRmse","meanCosineSimilarity","meanAngularErrorDegrees","divergenceMae","validCount","nonFiniteCount","nearSurfaceCount","surfaceSampleCount","angularExcludedCount","divergenceStencilCount","trustedTau","effectiveBand"];Object.assign(Ao,{componentMae:"Component MAE (x, y, z)",componentRmse:"Component RMSE (x, y, z)",nonFiniteCount:"Non-finite pairs excluded",nearSurfaceCount:"Near-surface voxels",surfaceSampleCount:"Surface samples (pooled)",angularExcludedCount:"Angular exclusions",divergenceStencilCount:"Divergence stencils",trustedTau:"Trusted truncation τ",effectiveBand:"Effective band"});function Zd({metrics:e,group:a,unit:t,frame:s}){const{tr:i,language:o}=ue(),r=e?.[a],c=a==="sdf"?["mae","rmse","fluidIoU","coverage"]:["meanEpe","epeRmse","coverage"],d=r?Gd.filter(m=>r[m]!==void 0):[],l=m=>n.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:14:21",key:m},n.createElement("span",{"data-os-loc":"src/field/MetricsPanel.jsx:14:36"},i(Ao[m])),n.createElement("strong",{"data-os-loc":"src/field/MetricsPanel.jsx:14:66"},r[m]===null?i("Not available"):Array.isArray(r[m])?r[m].map(b=>b==null?"N/A":Number(b).toPrecision(4)).join(" / "):typeof r[m]=="number"?r[m].toLocaleString(void 0,m.endsWith("Count")?{}:{maximumSignificantDigits:5}):String(r[m])),n.createElement("small",{"data-os-loc":"src/field/MetricsPanel.jsx:14:363"},["mae","rmse","maxAbsoluteError","nearSurfaceMae","symmetricMeanSurfaceDistance","hd95","meanEpe","epeRmse","epeP95","componentMae","componentRmse","trustedTau","effectiveBand"].includes(m)?t:m==="coverage"?i("fraction"):m==="meanAngularErrorDegrees"?i("degrees"):m==="divergenceMae"?i(t==="m/s"?"1/s":"velocity / length"):""));return n.createElement("aside",{"data-os-loc":"src/field/MetricsPanel.jsx:15:10",className:"metrics-panel"},n.createElement("h3",{"data-os-loc":"src/field/MetricsPanel.jsx:15:43"},a==="sdf"?o==="zh"?"体积 SDF 指标":"Volumetric SDF metrics":o==="zh"?"原网格速度指标":"Native-grid velocity metrics"),n.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:181",className:"metric-scope"},o==="zh"?`帧 ${s??"—"} · 原网格有效体素 · 不随选区改变`:`Frame ${s??"—"} · Valid native-grid voxels · Independent of ROI`),r?.notice&&n.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:354",role:"note"},o==="zh"&&r.noticeZh?r.noticeZh:i(r.notice)),r?.blocked?n.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:459",className:"score-blocked"},i(r.reason)||i("Scores blocked: declare field semantics and units.")):r?n.createElement(n.Fragment,null,n.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:15:637",className:"metric-grid"},c.filter(m=>d.includes(m)).map(l),d.filter(m=>m.endsWith("Count")).map(l)),n.createElement("details",{"data-os-loc":"src/field/MetricsPanel.jsx:15:776"},n.createElement("summary",{"data-os-loc":"src/field/MetricsPanel.jsx:15:785"},o==="zh"?"更多指标":"More metrics"),n.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:15:843",className:"metric-grid"},r.nearSurfaceDomain&&n.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:899"},i(r.nearSurfaceDomain),n.createElement("br",{"data-os-loc":"src/field/MetricsPanel.jsx:15:932"}),i("Band: "),r.effectiveBand?.toPrecision(4)," ",t),d.filter(m=>!c.includes(m)&&!m.endsWith("Count")).map(l)))):n.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:578"},i("Metrics are not available for this frame.")))}const Jn="Common valid finite SDF voxels M; N = |M|. Interior means SDF ≤ 0.",Mn="Common valid finite velocity voxels M; not automatically restricted to fluid interior.",Ce=(e,a,t,s,i,o,r,c="")=>({id:e,label:a,formula:t,unitKind:s,direction:i,group:o,domain:r,caveats:c}),Bs=[Ce("mae","Water-surface elevation MAE","mean |ηp − ηg|","length","Lower","elevation","Paired trustworthy world-Y zero-crossing columns on common XZ lattice.","Not crest-to-trough wave height or Hs. Filled exterior, missing support and multiple crossings are excluded; inspect both coverage denominators."),Ce("rmse","Water-surface elevation RMSE","sqrt(mean (ηp − ηg)^2)","length","Lower","elevation","Same paired height columns.","Full-resolution aligned SDF, never preview mesh."),Ce("maxAbsoluteError","Maximum elevation error","max |ηp − ηg|","length","Lower","elevation","Same paired height columns."),Ce("coverage","Height paired coverage","paired valid columns / GT valid columns","fraction","Context","elevation","GT reconstructible columns.","Zero denominator: N/A. Not SDF voxel coverage."),Ce("gtCoverage","GT reconstructible coverage","GT valid columns / candidate XZ columns","fraction","Context","elevation","All candidate XZ columns.","Read with paired coverage to expose excluded GT surfaces."),Ce("mae","SDF MAE","Σ |p − g| / N","length","Lower","sdf",Jn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),Ce("rmse","SDF RMSE","√(Σ (p − g)² / N)","length","Lower","sdf",Jn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),Ce("maxAbsoluteError","Maximum absolute error","max |p − g|","length","Lower","sdf",Jn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),Ce("nearSurfaceMae","Near-surface MAE","mean |clipτ(p) − clipτ(g)| on B","length","Lower","sdf","B = M ∩ {|g| ≤ effective band}, including numerical tolerance.","GT defines B. For TSDF, band ≤ shared τ; clip both values at τ. Shared τ is min of both TSDF τ values, or the single TSDF τ in a mixed pair. No clipping for full/full."),Ce("signAccuracy","Sign accuracy","count[(p ≤ 0) = (g ≤ 0)] / N","fraction","Higher","sdf",Jn),Ce("fluidIoU","Fluid IoU","|P ∩ G| / |P ∪ G|","fraction","Higher","sdf",Jn,"P and G are predicted and GT interior sets in M. Both empty: 1."),Ce("dice","Dice","2 |P ∩ G| / (|P| + |G|)","fraction","Higher","sdf",Jn,"Both interior sets empty: 1."),Ce("symmetricMeanSurfaceDistance","Symmetric mean surface distance","mean(D(G→P) ∪ D(P→G))","length","Lower","sdf","Pooled nearest distances between sampled zero crossings; each surface uses its own valid support.","Approximation, at most 4096 samples per surface. Not exact continuous-mesh distance; unavailable if either surface is empty."),Ce("hd95","HD95","percentile95(D(G→P) ∪ D(P→G))","length","Lower","sdf","Same pooled sampled-surface distances.","Linear percentile interpolation; not maximum Hausdorff distance. Surface-sampling limitations apply."),Ce("meanEpe","Mean EPE","mean ‖p − g‖₂","speed","Lower","velocity",Mn),Ce("epeRmse","EPE RMSE","√mean ‖p − g‖₂²","speed","Lower","velocity",Mn),Ce("epeP95","EPE P95","percentile95(‖p − g‖₂)","speed","Lower","velocity",Mn,"Linear interpolation between ordered samples."),Ce("componentMae","Component MAE (x, y, z)","mean |pₖ − gₖ|, k = x,y,z","speed","Lower","velocity",Mn),Ce("componentRmse","Component RMSE (x, y, z)","√mean (pₖ − gₖ)², k = x,y,z","speed","Lower","velocity",Mn),Ce("relativeL2","Relative L2","√(Σ ‖p − g‖₂² / Σ ‖g‖₂²)","dimensionless","Lower","velocity",Mn,"Unavailable when GT energy is zero; no artificial epsilon in denominator."),Ce("meanCosineSimilarity","Mean cosine similarity","mean clamp((p·g)/(‖p‖₂ ‖g‖₂), −1, 1)","dimensionless","Higher","velocity",Mn,"Exclude either magnitude ≤ ε (default 1e−8)."),Ce("meanAngularErrorDegrees","Mean angular error","mean acos(cosine) × 180/π","degrees","Lower","velocity",Mn,"Same nonzero-vector subset as cosine similarity."),Ce("divergenceMae","Divergence MAE","mean |∇·p − ∇·g|","inverseTime","Lower","velocity","Six valid neighboring samples; finite central-difference divergence. Borders excluded.","Σₖ (vₖ(i+eₖ) − vₖ(i−eₖ))/(2hₖ). Orthogonal aligned lattice. Divergence mismatch, not absolute incompressibility."),Ce("coverage","Coverage","N / total lattice voxels","fraction","Context","both","Reported separately for SDF and velocity.","Always read with the error: small valid support can hide missing predictions.")];function Hd(){return{schema:1,notation:"g = Ground Truth; p = Prediction. These are evaluation metrics, not a weighted training loss.",sequence:"Equal weight per valid frame, not pooled voxels. Excluded frame counts are reported. Population standard deviation; interpolated P95.",metrics:Bs}}function Ld(e){const a=e.filter(c=>typeof c=="number"&&Number.isFinite(c)).sort((c,d)=>c-d);if(!a.length)return{median:null,p95:null,stddev:null};const t=c=>{const d=(a.length-1)*c,l=Math.floor(d),m=d-l;return a[l]*(1-m)+a[Math.min(l+1,a.length-1)]*m},s=a.reduce((c,d)=>Math.max(c,Math.abs(d)),0),i=a.map(c=>s?c/s:0),o=i.reduce((c,d)=>c+d/a.length,0),r=Math.sqrt(i.reduce((c,d)=>c+(d-o)**2/a.length,0))*s;return{median:t(.5),p95:t(.95),stddev:Number.isFinite(r)?r:null}}function ko(e){if(!Number.isSafeInteger(e?.frame)||!Number.isSafeInteger(e?.prediction_origin_frame)||!Number.isFinite(e?.fps)||e.fps<=0||e.prediction_type==="extrapolation"&&e.frame<=e.prediction_origin_frame)return null;const a=(e.frame-e.prediction_origin_frame)/e.fps;return Number.isFinite(a)?a:null}const qd={length:"m",speed:"m/s",inverseTime:"1/s",degrees:"degrees",fraction:"fraction",dimensionless:"dimensionless"};function Yd(e,a={}){return e.flatMap(t=>Bs.filter(s=>s.group===t||s.group==="both"&&t!=="elevation").flatMap(s=>{const i=s.unitKind==="length"?a.sdf??"m":s.unitKind==="speed"?a.velocity??"m/s":s.unitKind==="inverseTime"&&a.velocity&&a.velocity!=="m/s"?`(${a.velocity}) / length`:qd[s.unitKind],o={group:t,key:s.id,label:s.label,unit:i,direction:s.direction};return s.id==="componentMae"||s.id==="componentRmse"?["x","y","z"].map((r,c)=>({...o,id:`${t}.${s.id}.${r}`,index:c,label:`${s.id==="componentMae"?"Component MAE":"Component RMSE"} ${r.toUpperCase()}`})):[{...o,id:`${t}.${s.id}`}]}))}function Ud({metrics:e,frames:a=[],expectedFrames:t=[],groups:s=[],status:i,units:o,frameSplit:r,frameSubset:c="all"}){const d=Object.values(e?.settings?.sdf||{}).some(C=>C?.semantics==="water_interior"),l=d?"gt_water_common_distance_support":e?.settings?.sdfEvaluationRegion||"full_domain",m=Yd(s,o).map(C=>({...C,label:C.label+(d&&C.group==="sdf"?["fluidIoU","dice","signAccuracy","symmetricMeanSurfaceDistance","hd95"].includes(C.key)?" (full domain)":" (conditional GT-water support)":"")+(l==="gt_water"&&C.group==="sdf"?["fluidIoU","dice","symmetricMeanSurfaceDistance","hd95"].includes(C.key)?" (full domain)":" (GT water)":"")})),b=new Set(a),v=[...t,...a,...Object.keys(e?.frames||{}).map(Number),...e?.missingPredictionFrames||[]],u=new Map((r?.rows??[]).map(C=>[C.frame,C])),h=[...new Set(v.filter(Number.isInteger))].sort((C,w)=>C-w).filter(C=>Rd(u,C,c)),f=h.map(C=>{const w=e?.frames?.[C],g={};for(const S of m){const B=w?.[S.group],A=B?.[S.key],y=S.index===void 0?A:A?.[S.index];g[S.id]=!B?.blocked&&Number.isFinite(y)?y:null}const E=s.filter(S=>S!=="elevation"&&w?.[S]?.blocked).map(S=>`${S}: ${w[S].reason||"Scoring blocked"}`).join("; "),x=u.get(C);return{frame:C,elevationAudit:w?.elevation??null,algorithmVersion:e?.algorithmVersion??"legacy undeclared",split:vt(u,C),predictionType:Ss(u,C),predictionOriginFrame:x?.prediction_origin_frame??null,fps:x?.fps??null,horizonSeconds:ko(x),available:b.has(C),calculated:!!w,reason:E,values:g}}),p=m.map(C=>{const w=f.map(x=>x.values[C.id]).filter(Number.isFinite),g=w.length,E=g?w.reduce((x,S)=>x+S/g,0):null;return{...C,mean:E,...Ld(w),minimum:g?w.reduce((x,S)=>Math.min(x,S)):null,maximum:g?w.reduce((x,S)=>Math.max(x,S)):null,valid:g,excluded:f.length-g,total:f.length}}),_=[...new Set(h.flatMap(C=>s.filter(w=>w!=="elevation").flatMap(w=>e?.frames?.[C]?.[w]?.blocked?[`${w.toUpperCase()}: ${e.frames[C][w].reason||"Scoring prerequisites not met"}`]:[])))];return{columns:m,rows:f,summary:p,blockedReasons:_,evaluationRegion:l,frameSubset:c,sdfValidation:e?.settings?.sdf||{},total:f.length,calculated:f.filter(C=>C.calculated).length,complete:i==="ready"&&f.length>0&&f.every(C=>C.calculated)&&!_.length,status:i}}function Le(e){return Number.isFinite(e)?Number(e.toPrecision(6)).toString():"N/A"}const Jd=e=>{const a=e==null?"N/A":String(e);return/[",\r\n]/.test(a)?`"${a.replaceAll('"','""')}"`:a};function Di(e,a){const t=e.complete?"complete":"partial",s=a==="frames"?[["frame","frame_status","sequence_status",...e.columns.map(i=>`${i.id} [${i.unit}]`),"excluded_reason"],...e.rows.map(i=>[i.frame,i.reason?"scoring blocked":i.calculated?"calculated":"not calculated",t,...e.columns.map(o=>i.values[o.id]),i.reason||""])]:[["metric","unit","mean","minimum","maximum","valid_frames","excluded_frames","total_frames","sequence_status","median","p95","stddev"],...e.summary.map(i=>[i.id,i.unit,i.mean,i.minimum,i.maximum,i.valid,i.excluded,i.total,t,i.median,i.p95,i.stddev])];return a==="frames"&&(s[0].push("split","prediction_type","prediction_origin_frame","fps","horizon_seconds"),s.slice(1).forEach((i,o)=>i.push(e.rows[o].split||"unassigned",e.rows[o].predictionType||"unassigned",e.rows[o].predictionOriginFrame,e.rows[o].fps,e.rows[o].horizonSeconds))),a==="frames"&&(s[0].push("algorithm_version","elevation_valid_columns","elevation_gt_valid_columns","elevation_candidate_columns","elevation_reason","elevation_excluded_reasons"),s.slice(1).forEach((i,o)=>{const r=e.rows[o],c=r.elevationAudit;i.push(r.algorithmVersion,c?.validColumns,c?.gtValidColumns,c?.candidateColumns,c?.reason||(c?"":"Not calculated by this result version"),JSON.stringify(c?.excludedReasons??{}))})),s[0].push("frame_subset"),s.slice(1).forEach(i=>i.push(e.frameSubset||"all")),s[0].push("sdf_error_region","geometry_region"),s.slice(1).forEach(i=>i.push(e.evaluationRegion||"full_domain","full_domain")),s[0].push("gt_validation_mode","prediction_validation_mode","gt_override_reason","prediction_override_reason"),s.slice(1).forEach(i=>i.push(e.sdfValidation?.gt?.validationMode||"legacy undeclared",e.sdfValidation?.prediction?.validationMode||"legacy undeclared",e.sdfValidation?.gt?.overrideReason||"",e.sdfValidation?.prediction?.overrideReason||"")),s.map(i=>i.map(Jd).join(",")).join(`\r
`)}function Kd(e,a,t=640){const i=e.filter(f=>Number.isFinite(f.values[a])).map(f=>f.values[a]);let o=i.length?Math.min(...i):0,r=i.length?Math.max(...i):1;if(o===r){const f=Math.max(Math.abs(o)*.05,1e-6);o-=f,r+=f}const c=e[0]?.frame??0,d=e.at(-1)?.frame??c,l=f=>d===c?(t+42)/2:64+(f-c)/(d-c)*(t-86),m=f=>180-(f-o)/(r-o)*150,b=[],v=[];let u=[],h=null;for(const f of e){const p=f.values[a];if((!Number.isFinite(p)||h!==null&&f.frame!==h+1)&&(u.length&&b.push(u),u=[]),Number.isFinite(p)){const _={frame:f.frame,value:p,x:l(f.frame),y:m(p)};u.push(_),v.push(_)}h=f.frame}return u.length&&b.push(u),{min:o,max:r,start:c,end:d,x:l,y:m,points:v,segments:b}}function Qd(e,a,t=.9){const s=e.filter(o=>Number.isFinite(o.values[a?.id]));return{worst:a?.direction==="Context"?[]:[...s].sort((o,r)=>(a?.direction==="Higher"?1:-1)*(o.values[a.id]-r.values[a.id])||o.frame-r.frame).slice(0,5),lowCoverage:e.filter(o=>Number.isFinite(o.values[`${a?.group}.coverage`])&&o.values[`${a.group}.coverage`]<t),unavailable:e.filter(o=>!Number.isFinite(o.values[a?.id]))}}const e0=e=>`"${String(e??"undeclared").replaceAll('"','""')}"`;function n0(e,a,t){const s=[["report_identifier",a],["frame_subset",e.frameSubset],["frame_numbers",e.rows.map(i=>i.frame).join(";")],["frame_count",e.rows.length],["status",e.complete?"complete":"partial"],["sdf_error_region",e.evaluationRegion],["units",JSON.stringify(e.columns.map(i=>({metric:i.id,unit:i.unit})))],["sdf_declarations",JSON.stringify(e.sdfValidation)],["split_manifest_sha256",t?.sha256],["aggregation","Equal weight per valid frame; mean of frame RMSE, not pooled voxel RMSE. N/A excluded, never zero."],["valid_counts",JSON.stringify(e.summary.map(i=>({metric:i.id,valid:i.valid,total:i.total})))],["limitations","SDF error is not wave-height error. Read error with coverage. Frame numbers do not certify physical-time alignment. Split membership is declared, not independently verified. Exterior-filled distances are conditional, not full-domain accuracy."],["provenance","Use the saved-result ZIP for source identities and full scoring protocol. This notes file describes the currently selected report subset."]];return[["field","value"],...s].map(i=>i.map(e0).join(",")).join(`\r
`)}function a0({report:e,metric:a,onFrame:t,onDownload:s,comparisonId:i,frameSplit:o}){const{language:r,tr:c}=ue(),d=r==="zh",l=(h,f)=>d?f:h,[m,b]=j.useState(.9),v=j.useMemo(()=>Qd(e.rows,a,m),[e.rows,a,m]),u=(h,f)=>h.slice(0,20).map(p=>n.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:9:51",key:p.frame},n.createElement("button",{"data-os-loc":"src/field/FrameReview.jsx:9:69","data-os-action":"",disabled:!p.available||!t,"aria-label":`${f==="unavailable"?"Review unavailable frame":f==="coverage"?"Review coverage frame":"Review frame"} ${p.frame}`,onClick:()=>t(p.frame)},p.frame)," · ",Le(f==="coverage"?p.values[`${a?.group}.coverage`]:p.values[a?.id]),f==="unavailable"&&n.createElement("span",{"data-os-loc":"src/field/FrameReview.jsx:9:426"}," · ",p.reason||(p.calculated?l("Metric unavailable on this support; see definitions below","该指标在当前有效区域不可用，请查看下方定义"):l("Not calculated / missing frame","尚未计算或帧缺失")))));return n.createElement("details",{"data-os-loc":"src/field/FrameReview.jsx:10:9",className:"frame-review"},n.createElement("summary",{"data-os-loc":"src/field/FrameReview.jsx:10:43"},l("Frame review & report notes","异常帧检查与报告说明")),n.createElement("p",{"data-os-loc":"src/field/FrameReview.jsx:11:3"},l("Review only: no frames are removed and no scores are changed. Lists follow the selected subset and metric. Worst does not mean statistically abnormal.","仅供检查：不剔除帧、不改变数值。列表跟随当前集合和指标；最差帧不等同于统计异常。")),n.createElement("div",{"data-os-loc":"src/field/FrameReview.jsx:12:3",className:"frame-review-grid"},n.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:12:38"},n.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:12:47"},l("Worst 5 frames","表现最差的 5 帧")," · ",c(a?.label)),v.worst.length?n.createElement("ol",{"data-os-loc":"src/field/FrameReview.jsx:12:132"},u(v.worst,"worst")):n.createElement("p",{"data-os-loc":"src/field/FrameReview.jsx:12:171"},l("No rankable finite values. Coverage is context, not accuracy.","没有可排序的有效数值；覆盖率是背景信息，不代表精度。"))),n.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:13:3"},n.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:13:12"},l("Low coverage","低覆盖率")," · ",v.lowCoverage.length),n.createElement("label",{"data-os-loc":"src/field/FrameReview.jsx:13:77"},l("Review threshold","检查阈值")," ",n.createElement("input",{"data-os-loc":"src/field/FrameReview.jsx:13:115","data-os-action":"","aria-label":"Coverage review threshold",type:"number",min:"0",max:"1",step:"0.05",value:m,onChange:h=>{const f=Number(h.target.value);h.target.value!==""&&Number.isFinite(f)&&f>=0&&f<=1&&b(f)}})),n.createElement("small",{"data-os-loc":"src/field/FrameReview.jsx:13:348"},l("Below this fraction; review aid, not a scientific pass/fail criterion.","低于此比例时列出；仅辅助检查，不是科研合格线。")),n.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:13:466"},u(v.lowCoverage,"coverage"))),n.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:14:3"},n.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:14:12"},l("Unavailable metric","指标不可用")," · ",v.unavailable.length),n.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:14:84"},u(v.unavailable,"unavailable")),n.createElement("small",{"data-os-loc":"src/field/FrameReview.jsx:14:134"},l("At most 20 entries per list; all values remain in the frame table and CSV.","每个列表最多显示 20 项，全部数据仍保留在逐帧表格和 CSV。")))),n.createElement("details",{"data-os-loc":"src/field/FrameReview.jsx:15:3"},n.createElement("summary",{"data-os-loc":"src/field/FrameReview.jsx:15:12"},l("How to interpret these results","如何解读这些结果")),n.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:15:79"},n.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:16:4"},l("N/A is not zero: it may mean missing frames, blocked scoring, no valid samples, or an unsupported metric. The list gives known blocking reasons; metric definitions explain other restrictions.","N/A 不是零：可能是缺帧、计算被阻止、无有效样本或指标不适用。列表显示已知阻止原因，其余限制见指标定义。")),n.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:17:4"},l("A lower error with lower coverage is not automatically better. Compare models on matching frames and common spatial support.","误差更低但覆盖率更低，不自动代表更好。模型比较应使用匹配帧和共同有效空间区域。")),n.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:18:4"},l("Exterior-filled SDF supports conditional interior distance errors only; it does not certify full-domain distance accuracy. Surface metrics may be unavailable.","水外固定填值的 SDF 只支持有条件的水内距离误差，不能证明全域距离精度；表面指标可能不可用。")),n.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:19:4"},l("SDF MAE is not wave-height MAE. Sequence means give equal weight to valid frames, not to pooled voxels.","SDF MAE 不等于浪高 MAE。序列均值对有效帧等权，并非将所有体素合并计算。")))),n.createElement("button",{"data-os-loc":"src/field/FrameReview.jsx:21:3","data-os-action":"",disabled:!e.total,onClick:()=>s(`${i}_${e.frameSubset}_report_notes.csv`,n0(e,i,o))},l("Export report notes CSV","导出报告说明 CSV")))}function t0({point:e,row:a,selected:t,onFrame:s,language:i}){const o=!!(s&&a?.available),r=a?.predictionType||"unassigned",c={train:"#b66b14",validation:"#8052bc",test:"#008c9c",unassigned:"#7b8794"}[a?.split||"unassigned"];return n.createElement("g",{"data-os-loc":"src/field/FrameCurvePoint.jsx:5:9","data-os-action":"",transform:`translate(${e.x},${e.y})`,role:"button","aria-label":`${i==="zh"?"选择曲线帧":"Select plotted frame"} ${e.frame}`,"aria-disabled":!o,tabIndex:o?0:-1,onClick:()=>o&&s(e.frame),onKeyDown:d=>{o&&["Enter"," "].includes(d.key)&&(d.preventDefault(),s(e.frame))},style:{cursor:o?"pointer":"default"}},n.createElement("title",{"data-os-loc":"src/field/FrameCurvePoint.jsx:6:2"},`Frame ${e.frame}: ${e.value} | ${a?.split||"unassigned"} | ${r}`),n.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:6:89",r:"7",fill:"transparent"}),t&&n.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:7:13",r:"7",fill:"none",stroke:"#d36218",strokeWidth:"2"}),r==="anchor"?n.createElement("rect",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:19",x:"-4",y:"-4",width:"8",height:"8",fill:c}):r==="extrapolation"?n.createElement("path",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:98",d:"M 0 -5 L 5 4 L -5 4 Z",fill:c}):r==="interpolation"?n.createElement("path",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:168",d:"M 0 -5 L 5 0 L 0 5 L -5 0 Z",fill:c}):n.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:221",r:"3",fill:c}))}function s0({rows:e,metricKey:a,manifest:t,modelName:s}){const{language:i}=ue(),o=i==="zh",r=new Map;let c=0;const d=new Map((t?.rows??[]).map(l=>[l.frame,l]));for(const l of e){const m=d.get(l.frame);if(m?.prediction_type!=="extrapolation")continue;const b=ko(m);if(b===null){c++;continue}const v=`${m.prediction_origin_frame} / ${m.fps} fps`;r.has(v)||r.set(v,[]),r.get(v).push({frame:l.frame,seconds:b,value:l.values[a]})}return!r.size&&!c?null:n.createElement("details",{"data-os-loc":"src/field/PredictionTrend.jsx:18:9"},n.createElement("summary",{"data-os-loc":"src/field/PredictionTrend.jsx:18:18"},s&&`${s} · `,o?"未来外推时间趋势":"Future prediction horizon"),n.createElement("p",{"data-os-loc":"src/field/PredictionTrend.jsx:18:110"},o?"按声明的输入起点和 FPS 分图；缺失帧不连线，不合并不同预测。":"Separate plots for declared origin and FPS; missing frames are not connected and different predictions are not merged."),c>0&&n.createElement("p",{"data-os-loc":"src/field/PredictionTrend.jsx:19:14"},o?`${c} 帧缺少有效时间声明，仍使用上方帧号曲线。`:`${c} frame(s) without valid timing; retain the frame-number plot above.`),[...r].map(([l,m])=>{const b=m.filter(_=>Number.isFinite(_.value)),v=Math.max(1,...m.map(_=>_.seconds)),u=b.length?Math.min(...b.map(_=>_.value)):0,h=b.length?Math.max(...b.map(_=>_.value)):1,f=_=>50+_.seconds/v*510,p=_=>160-(_.value-u)/(h-u||1)*120;return n.createElement("figure",{"data-os-loc":"src/field/PredictionTrend.jsx:24:10",key:l},n.createElement("figcaption",{"data-os-loc":"src/field/PredictionTrend.jsx:24:28"},o?"预测起点":"Prediction origin"," ",l," · ",a),n.createElement("svg",{"data-os-loc":"src/field/PredictionTrend.jsx:24:104",role:"img","aria-label":`Prediction horizon ${l}`,viewBox:"0 0 600 200",width:"100%"},n.createElement("line",{"data-os-loc":"src/field/PredictionTrend.jsx:25:4",x1:"50",x2:"560",y1:"160",y2:"160",stroke:"#a9bac8"}),m.map((_,C)=>{const w=m[C-1];return Number.isFinite(_.value)&&n.createElement("g",{"data-os-loc":"src/field/PredictionTrend.jsx:26:80",key:_.frame},w&&_.frame===w.frame+1&&Number.isFinite(w.value)&&n.createElement("line",{"data-os-loc":"src/field/PredictionTrend.jsx:26:157",x1:f(w),y1:p(w),x2:f(_),y2:p(_),stroke:"#008c9c"}),n.createElement("circle",{"data-os-loc":"src/field/PredictionTrend.jsx:26:228",cx:f(_),cy:p(_),r:"4",fill:"#008c9c"},n.createElement("title",{"data-os-loc":"src/field/PredictionTrend.jsx:26:277"},_.frame,": ",Le(_.value),"; ",Le(_.seconds)," s")))}),n.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:4",x:"8",y:"40"},Le(h)),n.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:48",x:"8",y:"160"},Le(u)),n.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:93",x:"50",y:"186"},"0"),n.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:122",x:"500",y:"186"},Le(v)," s")))}))}const i0={missing_or_nonfinite_column:["missing or non-finite column","缺失或非有限数值列"],no_interior_to_exterior_span:["no trustworthy interior-to-exterior span","缺少可信的水内至水外跨度"],ambiguous_or_multiple_crossings:["ambiguous or multiple surfaces","交叉不明确或存在多层水面"],crossing_touches_truncation:["crossing touches truncation boundary","交叉接触截断边界"],nonfinite_height:["non-finite height","高度不是有限数值"],nonfinite_difference:["non-finite height difference","高度差不是有限数值"],outside_common_columns:["outside common column support","不在共同有效列内"]},o0={"No paired trustworthy single-surface columns":"没有可配对的可信单层水面列。","Invalid world-Y lattice":"世界 Y 轴网格无效。","Invalid height input dimensions":"高度输入维度无效。","Height column grids differ":"高度列网格不一致。","Height requires full SDF or trusted TSDF; filled exterior/unknown is not a trustworthy zero crossing":"需要完整 SDF 或可信 TSDF；水外填值或类型未知无法提供可信零交叉。","Height requires validated unchanged SDF distances":"需要经验证且未重建的 SDF 距离。","Height requires axis-aligned world-Y-up lattice":"需要与世界坐标轴对齐、Y 轴向上的网格。","Height requires a comparison with matching declared units":"需要 GT 与预测的声明单位一致。","Height requires finite positive trusted truncation distance":"需要有限、正值且可信的截断距离。"};function r0({data:e}){const{language:a}=ue(),t=a==="zh",s=i=>{const[o,...r]=i.split(":"),c=r.length?r.join(":"):o;return(r.length?o==="gt"?"GT: ":o==="prediction"?t?"预测：":"Prediction: ":o+": ":"")+(i0[c]?.[t?1:0]??c)};return n.createElement("details",{"data-os-loc":"src/field/HeightSupportAudit.jsx:28:9"},n.createElement("summary",{"data-os-loc":"src/field/HeightSupportAudit.jsx:28:18"},t?"当前帧高度有效区域与排除原因":"Current-frame height support and exclusions"),e?n.createElement(n.Fragment,null,e.reason&&n.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:30:16"},t?o0[e.reason]??e.reason:e.reason),e.blocked&&n.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:31:17"},t?"此帧高度评分不可用；不能把未评估数量当作零。":"Height scoring unavailable for this frame; unevaluated counts are not zero."),n.createElement("table",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:2","aria-label":t?"高度有效区域明细":"Height support audit"},n.createElement("thead",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:59"},n.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:66"},n.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:70"},t?"项目／原因":"Support / reason"),n.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:110"},t?"列数":"Columns"))),n.createElement("tbody",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:151"},[[t?"有效配对列":"Valid paired columns","validColumns"],[t?"GT 有效列":"Valid GT columns","gtValidColumns"],[t?"候选水平列":"Candidate horizontal columns","candidateColumns"]].map(([i,o])=>n.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:187",key:o},n.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:201",scope:"row"},i),n.createElement("td",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:228"},e.blocked||!Number.isFinite(e[o])?"N/A":e[o]))),Object.entries(e.excludedReasons??{}).map(([i,o])=>n.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:59",key:i},n.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:73",scope:"row"},s(i)),n.createElement("td",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:106"},Number.isFinite(o)?o:"N/A"))))),n.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:35:18"},t?"配对覆盖率＝配对列／GT 有效列；GT 可重建比例＝GT 有效列／候选列。排除原因不代表模型排名。":"Paired coverage = paired / valid GT columns; GT reconstructible fraction = valid GT / candidate columns. Exclusions are not model rankings.")):n.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:29:9"},t?"此帧没有高度记录。旧结果需重新创建比较；尚未载入的帧请先选择。":"No height record for this frame. Create a new comparison for legacy results, or select a loaded frame."))}function c0(e,a){const t=URL.createObjectURL(new Blob(["\uFEFF",a],{type:"text/csv;charset=utf-8"})),s=document.createElement("a");s.href=t,s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}const l0=[];function d0({metrics:e,frames:a,expectedFrames:t=l0,groups:s,group:i,status:o,currentFrame:r,onFrame:c,onDownload:d=c0,comparisonId:l="comparison",sdfUnit:m="m",velocityUnit:b="m/s",onReviewSetup:v,frameSplit:u}){const{tr:h,language:f}=ue(),[p,_]=j.useState(()=>u?"test":"all"),C=Object.values(e?.frames||{}).some(O=>O.elevation),w=j.useMemo(()=>C?[...s,"elevation"]:s,[s,C]),[g,E]=j.useState(""),x=w.includes(g)?g:i;j.useEffect(()=>E(""),[i]),j.useEffect(()=>_(u?"test":"all"),[u?.sha256,!!u]);const S=j.useMemo(()=>Ud({metrics:e,frames:a,expectedFrames:t,groups:w,status:o,units:{sdf:m,velocity:b},frameSplit:u,frameSubset:p}),[e,a,t,w,o,m,b,u,p]),B=S.columns.filter(O=>O.group===x),A=S.summary.filter(O=>O.group===x),[y,M]=j.useState(""),[k,I]=j.useState(0),[F,V]=j.useState(640),K=j.useRef(null),W=B.find(O=>O.id===y)||B[0];j.useEffect(()=>{if(typeof ResizeObserver>"u")return;const O=new ResizeObserver(([Z])=>V(Math.max(280,Math.round(Z.contentRect.width))));return O.observe(K.current),()=>O.disconnect()},[]);const G=j.useMemo(()=>Kd(S.rows,W?.id,F),[S.rows,W?.id,F]),ae=Math.max(1,Math.ceil(S.rows.length/50)),T=Math.min(k,ae-1),N=S.rows.slice(T*50,(T+1)*50),ne=j.useMemo(()=>new Map(S.rows.map(O=>[O.frame,O])),[S.rows]),Y=ne.get(r),ee=S.summary.find(O=>O.id===W?.id);return n.createElement("section",{"data-os-loc":"src/field/SequenceMetrics.jsx:31:9",className:"sequence-metrics",ref:K,"aria-label":h("Sequence loss analysis")},n.createElement("h2",{"data-os-loc":"src/field/SequenceMetrics.jsx:32:3"},h("Per-frame metrics & sequence averages")),n.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:3"},f==="zh"?"统计组":"Statistics group"," ",n.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:53","data-os-action":"","aria-label":"Statistics group",value:x,onChange:O=>E(O.target.value)},w.map(O=>n.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:163",key:O,value:O},O==="elevation"?f==="zh"?"水面高度":"Water-surface elevation":O.toUpperCase())))),x==="elevation"&&n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:34:25"},f==="zh"?"世界 Y 水面高度，不是波峰—波谷浪高或 Hs。固定填值、缺失支持和多层水面不可用于此评分。":"World-Y elevation, not crest-to-trough wave height or Hs. Filled exterior, missing support and multiple surfaces cannot be scored."),x==="elevation"&&n.createElement(r0,{data:e?.frames?.[r]?.elevation}),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:36:3",className:"research-warning"},p==="test"||p.startsWith("test_")?f==="zh"?"Test 报告：仅汇总清单声明的测试帧。":"Test report: only declared test frames are summarized.":p==="train"?f==="zh"?"Train 报告：训练帧表现，不代表未见数据的泛化效果。":"Train report: training-frame performance, not generalization to unseen data.":f==="zh"?"参考报告：不是独立的 Test 结果。":"Reference report: not a Test-only evaluation."," ",f==="zh"?"划分依据训练方清单，不独立核验训练历史。":"Membership follows the supplied manifest; training history is not independently verified."),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:3",className:"frame-split-toolbar"},n.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:40"},f==="zh"?"统计帧集合":"Evaluation subset"," ",n.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:93","data-os-action":"","aria-label":"Evaluation subset",value:p,onChange:O=>{_(O.target.value),I(0)}},Object.entries({all:f==="zh"?"全部（参考）":"All",train:"Train",validation:"Validation",test:"Test",...Id(f==="zh"),unassigned:f==="zh"?"未划分":"Unassigned"}).map(([O,Z])=>n.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:407",key:O,value:O},Z)))),n.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:476"},f==="zh"?"仅筛选曲线、统计表和下方 CSV；不改变原始计算或动画。":"Filters curves, tables and the CSVs below; original calculations and playback are unchanged.")),S.total===0&&n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:38:22",role:"status"},f==="zh"?"此集合没有已声明的帧；不补零，也不使用其他集合替代。":"No declared frames in this subset; no zeros or fallback to another subset."),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:39:3"},h("SDF error region: "),n.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:39:32"},S.evaluationRegion==="gt_water_common_distance_support"?h("Conditional GT-water distance support"):S.evaluationRegion==="gt_water"?h("GT water only (GT SDF < 0)"):h("Full domain (valid pairs)")),h(". Occupancy and surface metrics use their own saved validity rules; they are not certified by the distance mask. Velocity metrics unchanged.")),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:40:3",className:"sequence-partial",role:"status"},S.blockedReasons.length?h("Scoring blocked"):S.complete?f==="zh"?"帧记录处理完成":"Processing complete":h("Partial results")," · ",S.calculated," / ",S.total,h(" frame records processed"),o==="error"?h(" · Processing stopped"):""),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:41:3",role:"status"},S.total?ee?.valid?f==="zh"?`所选指标有效帧：${ee.valid} / ${S.total}；排除 ${ee.excluded} 帧。`:`Selected metric valid frames: ${ee.valid} / ${S.total}; ${ee.excluded} excluded.`:f==="zh"?"所选指标不可用：没有有效数值。处理完成不代表评分有效。":"Selected metric unavailable: no valid values. Completed processing does not imply valid scoring.":f==="zh"?"当前集合为空。":"Selected subset is empty."),S.blockedReasons.length>0&&n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:36",className:"error",role:"alert"},n.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:72"},h("No valid loss can be reported for blocked fields.")),S.blockedReasons.map(O=>n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:181",key:O},h(O))),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:215"},h("Review units and SDF type in Datasets & comparison setup, then click Create comparison again. Old results do not change when declarations are edited. Unit confirmation declares the source scale; it does not convert data.")),v&&n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:466","data-os-action":"",onClick:v},h("Review scoring setup"))),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:43:3"},h("Equal weight per valid frame. N/A is excluded, never zero. RMSE and P95 averages are means of frame metrics, not pooled-voxel metrics. No combined training loss.")),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:3",className:"sequence-toolbar"},n.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:37"},h("Metric curve"),n.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:64","data-os-action":"","aria-label":h("Metric curve"),value:W?.id||"",onChange:O=>M(O.target.value)},B.map(O=>n.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:185",key:O.id,value:O.id},h(O.label))))),n.createElement("span",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:258"},h("Unit: "),h(W?.unit)," · ",W?.direction==="Context"?h("Context metric"):h(W?.direction)+" "+h("is better"))),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:3",className:"sequence-readout"},h("Frame "),r??"—",": ",n.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:72"},Le(Y?.values[W?.id])),h(" · Sequence mean: "),n.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:158"},Le(ee?.mean)),h(" · Valid: "),ee?.valid??0," / ",S.total),n.createElement(a0,{report:S,metric:W,onFrame:c,onDownload:d,comparisonId:l,frameSplit:u}),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:47:3"},f==="zh"?"对应覆盖率（所选帧均值）":"Associated coverage (selected-frame mean)",": ",Le(S.summary.find(O=>O.id===`${x}.coverage`)?.mean),x==="elevation"&&n.createElement(n.Fragment,null," · ",f==="zh"?"GT 可重建比例":"GT reconstructible fraction",": ",Le(S.summary.find(O=>O.id==="elevation.gtCoverage")?.mean))),n.createElement(s0,{rows:S.rows,metricKey:W?.id,manifest:u}),n.createElement("figure",{"data-os-loc":"src/field/SequenceMetrics.jsx:49:3",className:"os-metric-figure","data-review-id":"sequence-metric-"+(W?.id||x)},n.createElement("figcaption",{"data-os-loc":"src/field/SequenceMetrics.jsx:49:98"},h(W?.label)||h("Metric curve")),n.createElement("svg",{"data-os-loc":"src/field/SequenceMetrics.jsx:49:164",width:"100%",height:"220",viewBox:`0 0 ${F} 220`,role:"img","aria-label":`${W?.label} over frames; ${h(W?.unit)}`},[G.min,(G.min+G.max)/2,G.max].map((O,Z)=>n.createElement("g",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:58",key:Z},n.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:69",x1:"64",x2:F-22,y1:G.y(O),y2:G.y(O),stroke:"#d7e1eb",strokeWidth:".75"}),n.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:163",x:"57",y:G.y(O)+4,textAnchor:"end"},Le(O)))),Number.isFinite(ee?.mean)&&n.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:51:39",x1:"64",x2:F-22,y1:G.y(ee.mean),y2:G.y(ee.mean),stroke:"#7a8797",strokeDasharray:"5 4"}),G.segments.map((O,Z)=>n.createElement("polyline",{"data-os-loc":"src/field/SequenceMetrics.jsx:52:36",key:Z,points:O.map(ie=>`${ie.x},${ie.y}`).join(" "),fill:"none",stroke:"#008c9c",strokeWidth:"2"})),G.points.map(O=>n.createElement(t0,{key:O.frame,point:O,row:ne.get(O.frame),selected:O.frame===r,onFrame:c,language:f})),Number.isFinite(r)&&n.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:54:36",x1:G.x(r),x2:G.x(r),y1:"25",y2:"185",stroke:"#d36218",strokeDasharray:"3 3"}),n.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:4",x:"64",y:"205"},G.start),G.end!==G.start&&n.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:68",x:F-22,y:"205",textAnchor:"end"},G.end),n.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:130",x:F/2,y:"205",textAnchor:"middle"},h("Frame")))),n.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:57:3"},f==="zh"?"颜色：训练橙 / 验证紫 / 测试青 / 未划分灰。形状：Anchor 方形 / 插值菱形 / 外推三角 / 未声明圆点。橙圈为当前帧，灰虚线为均值；缺失值不连线。":"Color: Train amber / Validation purple / Test teal / Unassigned gray. Shape: Anchor square / Interpolation diamond / Future extrapolation triangle / Undeclared circle. Orange ring: displayed frame; gray dashed line: mean. Missing values are not connected."),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:58:3",className:"sequence-detail-tables"},n.createElement("h3",{"data-os-loc":"src/field/SequenceMetrics.jsx:58:43"},x==="elevation"?f==="zh"?"水面高度":"Elevation":h(x==="sdf"?"SDF":"Velocity"),h(" sequence summary")),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:59:3"},f==="zh"?"中位数、P95 和总体标准差描述所选帧的分布，不代表统计显著性。":"Median, P95 and population standard deviation describe selected frames, not statistical significance."),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:3",className:"sequence-table-scroll",tabIndex:"0",role:"region","aria-label":h("Scrollable sequence summary")},n.createElement("table",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:116","aria-label":h("Sequence metric summary")},n.createElement("thead",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:166"},n.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:173"},["Metric","Unit","Mean",f==="zh"?"中位数":"Median","P95",f==="zh"?"总体标准差":"Population std. dev.","Minimum","Maximum","Valid / total","Excluded"].map(O=>n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:341",key:O},h(O))))),n.createElement("tbody",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:380"},A.map(O=>n.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:405",key:O.id},n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:420",scope:"row"},h(O.label)),n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:454"},h(O.unit)),[O.mean,O.median,O.p95,O.stddev,O.minimum,O.maximum].map((Z,ie)=>n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:540",key:ie,title:Z==null?"N/A":String(Z)},Le(Z))),n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:608"},O.valid," / ",O.total),n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:638"},O.excluded)))))),n.createElement("h3",{"data-os-loc":"src/field/SequenceMetrics.jsx:61:3"},x==="elevation"?f==="zh"?"水面高度":"Elevation":h(x==="sdf"?"SDF":"Velocity"),h(" per-frame values")),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:3",className:"sequence-toolbar"},n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:37","data-os-action":"",disabled:T===0,onClick:()=>I(T-1)},h("Previous rows")),n.createElement("span",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:135"},h("Page "),T+1," / ",ae,h(" · 50 frames per page")),n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:217","data-os-action":"",disabled:T+1>=ae,onClick:()=>I(T+1)},h("Next rows")),n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:320","data-os-action":"",onClick:()=>{const O=S.rows.findIndex(Z=>Z.frame===r);O>=0&&I(Math.floor(O/50))}},h("Show current row"))),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:3",className:"sequence-table-scroll",tabIndex:"0",role:"region","aria-label":h("Scrollable per-frame metrics")},n.createElement("table",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:117","aria-label":h("Per-frame metric values")},n.createElement("thead",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:167"},n.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:174"},n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:178"},h("Frame")),n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:200"},f==="zh"?"所属集合":"Split"),B.map(O=>n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:257",key:O.id},h(O.label),n.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:285"},O.unit))))),n.createElement("tbody",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:328"},N.map(O=>n.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:352",key:O.frame,className:O.frame===r?"selected-frame":""},n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:425",scope:"row"},n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:441","data-os-action":"","aria-label":`Go to frame ${O.frame}`,"aria-current":O.frame===r?"true":void 0,disabled:!O.available,onClick:()=>c(O.frame)},O.frame),!O.calculated&&n.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:631"},h("Not calculated"))),n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:674"},n.createElement(js,{manifest:u,frame:O.frame})),B.map(Z=>n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:755",key:Z.id,title:O.values[Z.id]==null?"N/A":String(O.values[Z.id])},Le(O.values[Z.id])))))))),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:3",className:"sequence-toolbar"},n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:37","data-os-action":"",disabled:!e||!S.total,onClick:()=>d(`${l}_${p}_frames.csv`,Di(S,"frames"))},p==="all"?h("Export all frames CSV"):f==="zh"?"导出当前集合 CSV":"Export subset CSV"),n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:274","data-os-action":"",disabled:!e||!S.total,onClick:()=>d(`${l}_${p}_sequence_summary.csv`,Di(S,"summary"))},h("Export sequence summary CSV")),n.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:464"},f==="zh"?`两个场组 · 当前集合 ${p} 的所有帧（不限本页） · 完整精度`:`Both field groups · all ${p} frames (not only this page) · full numeric precision`))))}function f0({group:e="sdf"}){const{tr:a}=ue();function t(){const s=URL.createObjectURL(new Blob([JSON.stringify(Hd(),null,2)],{type:"application/json"})),i=document.createElement("a");i.href=s,i.download="OceanScope_metric_definitions.json",i.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}return n.createElement("details",{"data-os-loc":"src/field/LossDefinitions.jsx:7:10",className:"loss-definitions"},n.createElement("summary",{"data-os-loc":"src/field/LossDefinitions.jsx:7:48"},a("Evaluation Metrics / Loss Definitions")),n.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:112"},a("g = Ground Truth; p = Prediction. Evaluation metrics, not a weighted training loss.")),n.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:210"},a("Display quality never changes numerical metrics. Units follow dataset declarations; declaring units does not convert data.")),Bs.filter(s=>s.group===e||s.group==="both"&&e!=="elevation").map(s=>n.createElement("article",{"data-os-loc":"src/field/LossDefinitions.jsx:7:442",key:s.id},n.createElement("strong",{"data-os-loc":"src/field/LossDefinitions.jsx:7:462"},a(s.label)),n.createElement("code",{"data-os-loc":"src/field/LossDefinitions.jsx:7:492"},s.formula),n.createElement("small",{"data-os-loc":"src/field/LossDefinitions.jsx:7:516"},a(s.direction),a(" is better"),s.direction==="Context"?a(" (interpret with error)"):""," · ",a(s.unitKind)),n.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:643"},a(s.domain)," ",a(s.caveats)))),n.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:692"},a("Sequence statistics give equal weight to each valid frame, not each voxel. Missing values are excluded; valid/excluded frame counts are reported.")),n.createElement("button",{"data-os-loc":"src/field/LossDefinitions.jsx:7:852","data-os-action":"",onClick:t},a("Export metric definitions")))}function m0({lattice:e,comparison:a}){const{tr:t}=ue();return n.createElement("details",{"data-os-loc":"src/field/AlignmentReport.jsx:7:10",className:"alignment-report"},n.createElement("summary",{"data-os-loc":"src/field/AlignmentReport.jsx:7:48"},t("Alignment and provenance")),n.createElement("dl",{"data-os-loc":"src/field/AlignmentReport.jsx:7:99"},n.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:103"},n.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:108"},t("Comparison")),n.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:135"},a?.id||"—")),n.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:171"},n.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:176"},t("Canonical lattice")),n.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:210"},e?.dimensions?.join(" × ")||"—",t(" voxels"))),n.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:279"},n.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:284"},t("Voxel size")),n.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:311"},e?.voxelSize?.map(s=>Number(s).toPrecision(4)).join(" × ")||"—")),n.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:405"},n.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:410"},t("Policy")),n.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:433"},t("Prediction sampled in world space onto Ground Truth voxel centres.")))))}function b0(e){return`${e.labels?.prediction?.exportStem||"prediction"}_${e.runId||e.id}`.replace(/[<>:"/\\|?*\x00-\x1f]/g,"_").slice(0,125)}function p0({frame:e,lattice:a,settings:t,plane:s,sliceIndex:i,angle:o=30,sectionPercent:r=50,rotationAxis:c="y"}){const d=w=>({status:"unavailable",reason:w});if(s==="oblique"&&c!=="y")return d("tilted");if(t?.previewOnly)return d("single");if(["gt","prediction"].some(w=>t?.sdf?.[w]?.semantics!=="full"))return d("semantics");const l=t?.heightComparison;if(l?.surfaceValidated!==!0||l?.negativeInside!==!0||l?.upAxis!=="Y"||l?.coordinateUnit!=="m"||l?.frameTimeAligned!==!0)return d("declaration");if(["gt","prediction"].some(w=>t.sdf[w].unit!=="m"))return d("units");if(!["xy","yz","oblique"].includes(s))return d("plane");const m=a?.dimensions,b=a?.axisSteps,v=a?.origin;if(!m||m.length!==3||m.some(w=>!Number.isInteger(w)||w<2)||!v||v.length!==3||v.some(w=>!Number.isFinite(w))||!b||b.length!==3||b.some((w,g)=>w.length!==3||w.some((E,x)=>!Number.isFinite(E)||(g===x?E<=0:Math.abs(E)>1e-12))))return d("lattice");const u=e?.groups?.sdf?.ground_truth,h=e?.groups?.sdf?.prediction;if([u,h].some(w=>!w||!Array.isArray(w.shape)||w.shape.length!==3||w.shape.some((g,E)=>g!==m[E])||w.values?.length!==m[0]*m[1]*m[2]||w.mask&&w.mask.values?.length!==w.values.length))return d("fields");if(s==="oblique"){const w=Es(a,o,r);if(!w)return d("lattice");const g=E=>w.degenerate?[]:Array.from({length:w.width},(x,S)=>{let B=null,A=null;for(let y=w.height-1;y>=0;y--){const M=yr(E,a,w.point(S,y));if(M===null||y===w.height-1&&M<=0)break;if(A!==null&&A>0&&M<=0){B=v[1]+b[1][1]*(y+-M/(A-M));break}A=M}return[w.range[0]+(w.range[1]-w.range[0])*S/(w.width-1),B]});return{status:"ready",axis:"oblique",angle:o,offset:w.offset,result:vi(g(u),g(h))}}const f=s==="xy"?2:0,p=s==="xy"?0:2;if(!Number.isInteger(i)||i<0||i>=m[f])return d("lattice");const _=(w,g,E)=>w+m[0]*(g+m[1]*E);function C(w){return Array.from({length:m[p]},(g,E)=>{const x=s==="xy"?E:i,S=s==="xy"?i:E;let B=null,A=null;for(let y=m[1]-1;y>=0;y--){const M=_(x,y,S),k=w.values[M];if(!Number.isFinite(k)||w.mask&&!w.mask.values[M]||y===m[1]-1&&k<=0)break;if(A!==null&&A>0&&k<=0){B=v[1]+b[1][1]*(y+-k/(A-k));break}A=k}return[v[p]+b[p][p]*E,B]})}return{status:"ready",axis:p===0?"x":"z",offset:v[f]+b[f][f]*i,result:vi(C(u),C(h))}}const zi={tilted:["倾斜截面用于场值与结构分析。高度比较请切换 XY、YZ 或绕 Y 的竖直斜切。","Tilted sections show field values and structure. For height comparison use XY, YZ or a vertical Y-axis section."],semantics:["当前预测含水外填充值，不能把填值边界当作可信水面。保留原有 SDF 切片和条件性距离指标。","The prediction has a filled or undeclared exterior; filled boundaries cannot establish a trustworthy water surface. SDF slices and conditional distance scores remain available."],declaration:["还需明确水面有效性、Y 向上、米制坐标、内负外正和帧时间对齐，才能启用高度比较。","Height comparison requires explicit surface validity, Y-up metre coordinates, negative-inside signs and aligned frame times."],units:["两组 SDF 的单位需要明确为米。","Both SDF units must be declared in metres."],plane:["请选择 XY 或 YZ 竖直切面以提取高度曲线。XZ 是水平切面。","Select a vertical XY or YZ section. XZ is horizontal."],lattice:["此坐标网格尚不满足高度采样条件。","This lattice does not meet height-sampling requirements."],fields:["当前帧缺少完整、相互对应的两组 SDF。","This frame lacks complete, matching SDF fields."]};function u0({frame:e,lattice:a,comparison:t,plane:s,sliceIndex:i,angle:o=30,sectionPercent:r=50,rotationAxis:c="y",frameNumber:d,busy:l}){const{language:m}=ue(),b=m==="zh",v=j.useMemo(()=>l?null:p0({frame:e,lattice:a,settings:t.settings,plane:s,sliceIndex:i,angle:o,sectionPercent:r,rotationAxis:c}),[l,e,a,t.settings,s,i,o,r,c]);return v?.status==="ready"?n.createElement(dc,{result:v.result,axis:v.axis,kind:"sdf",labels:{a:t.labels?.gt?.displayName,b:t.labels?.prediction?.displayName},metadata:{kind:"validated_sdf_height",dataset_a:t.groundTruthId,dataset_b:t.predictionId,frame:d,...wc(v.axis,v.offset,o),reference_y_m:0,meters_per_unit:1,sampling:s==="oblique"?"uppermost_valid_zero_crossing_trilinear_columns":"uppermost_valid_zero_crossing_linear",time_alignment:"declared_aligned"}}):n.createElement("section",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:10",className:"height-unavailable","aria-label":b?"水面高度比较适用性":"Surface-height eligibility"},n.createElement("h2",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:107"},b?"水面高度比较":"Surface-height comparison"," · ",l?b?"加载中":"Loading":b?"不可用":"Unavailable"),n.createElement("p",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:212"},l?b?"等待当前帧加载完成。":"Waiting for the current frame.":(zi[v?.reason]||zi.fields)[b?0:1]))}const st=[["heightMae","Height MAE","高度 MAE","m"],["breakingMae","Breaking-region MAE","破碎区 MAE","m"],["amplitudeSlope","Amplitude slope","振幅斜率",""],["velocityRelativeL2","Underwater relative L2","水下速度相对误差",""],["velocityMedianCosine","Median direction cosine","方向余弦中位数",""]];function h0(e){const a=["frame",...st.map(o=>o[0]),"heightRmse","heightBias","pairedColumns","gtColumns","pairedCoverage","breakingColumns","velocityVoxels","velocityGtEligibleVoxels","velocityCoverage","angularExcludedCount","heightErrorPercent","breakingErrorPercent"],t=o=>o==null?"":`"${String(o).replaceAll('"','""')}"`,s=["protocol_version","unit_convention","height_rule","velocity_rule","aggregation","status"],i=[e.version,e.units,e.height,e.velocity,e.aggregation,e.status];return[[...a,...s].map(t).join(","),...Object.entries(e.frames).map(([o,r])=>[...a.map(c=>c==="frame"?o:r[c]),...i].map(t).join(","))].join(`\r
`)}function Vi(e,a=!1){let t=1/0,s=-1/0;for(const i of e)if(i)for(let o=0;o<i.values.length;o++){const r=i.values[o];!Number.isFinite(r)||i.mask&&!i.mask.values[o]||(t=Math.min(t,r),s=Math.max(s,r))}if(!Number.isFinite(t))return a?[-1,1]:[0,1];if(a){const i=Math.max(Math.abs(t),Math.abs(s),1e-8);return[-i,i]}return t===s?[t-.01,s+.01]:[t,s]}function Mo(e,a){return e&&(!e.mask||e.mask.values[a])&&Number.isFinite(e.values[a])?e.values[a]:null}function g0(e,a,t){const s=["ground_truth","prediction","error"].map(c=>e.groups.height[c]),[i,,o]=s[0].shape,r=["frame,x_m,z_m,gt_height_m,prediction_height_m,prediction_minus_gt_m,gt_valid,prediction_valid,paired_valid"];for(let c=0;c<o;c++)for(let d=0;d<i;d++){const l=d+i*c,m=s.map(b=>Mo(b,l));r.push([t,a.origin[0]+d*a.axisSteps[0][0],a.origin[2]+c*a.axisSteps[2][2],...m.map(b=>b??""),...m.map(b=>b===null?0:1)].join(","))}return r.join(`\r
`)}const He=(e,a=4)=>Number.isFinite(e)?e.toFixed(a):"—",Wi=e=>Number.isFinite(e)?`${(100*e).toFixed(2)}%`:"—";function y0({protocol:e,frame:a,lattice:t,frameNumber:s,busy:i,onFrame:o}){const{language:r}=ue(),c=r==="zh",[d,l]=j.useState([.5,.5]);j.useEffect(()=>l([.5,.5]),[s]);const m=j.useMemo(()=>["ground_truth","prediction","error"].map(g=>a?.groups.height?.[g]),[a]),b=j.useMemo(()=>[Vi(m.slice(0,2)),Vi([m[2]],!0)],[m]);if(!e)return null;const v=e.frames[String(s)],u=!i&&v&&m.every(Boolean),h=m[0]?.shape[0]||1,f=m[0]?.shape[2]||1,p=Math.min(h-1,Math.floor(d[0]*h)),_=Math.min(f-1,Math.floor(d[1]*f)),C=p+h*_,w=["A · Gentle GT","B · Best_1027",c?"B − A · 高度差":"B − A · Height difference"];return n.createElement("section",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:22:10",className:"reconstruction-analysis","aria-label":c?"Best_1027 重建评估":"Best_1027 reconstruction evaluation","aria-busy":i},n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:5",className:"reconstruction-heading"},n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:45"},n.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:50",className:"reconstruction-eyebrow"},"BEST_1027 · ",c?"三帧对比":"THREE-FRAME PILOT"),n.createElement("h2",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:145"},c?"水面高度与水下速度":"Surface height & underwater velocity")),n.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:219",className:"reconstruction-frame"},c?"帧":"Frame"," ",u?s:"…")),n.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:24:5"},c?"当前结果覆盖 1001、1049、1096 三帧，采用下方明确记录的计算规则。不是完整 96 帧评分，也未划分 Test 集。长度和速度沿用 v2 的 m、m/s 模拟尺度约定。":"Frames 1001, 1049 and 1096 only, under the explicit protocol below. Not a full 96-frame or Test-set score. Length and velocity inherit the v2 m / m/s simulation convention."),u?n.createElement(n.Fragment,null,n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:7",className:"reconstruction-cards"},st.map(([g,E,x,S])=>n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:89",key:g},n.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:104"},c?x:E),n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:131"},He(v[g])," ",n.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:158"},S))))),n.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:7",className:"reconstruction-support"},c?"高度共同有效列":"Paired height columns"," ",n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:88"},v.pairedColumns.toLocaleString()," / ",v.gtColumns.toLocaleString())," (",Wi(v.pairedCoverage),") · ",c?"水下速度覆盖率":"Underwater velocity coverage"," ",n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:261"},Wi(v.velocityCoverage))," · ",c?"方向计算排除低速点":"Low-speed directional exclusions"," ",v.angularExcludedCount),n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:28:7",className:"reconstruction-maps"},m.map((g,E)=>n.createElement("figure",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:28:70",key:w[E],"aria-label":w[E]},n.createElement("figcaption",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:29:9"},w[E]),n.createElement(Cs,{slice:{width:h,height:f,values:g.values},maskSlice:g.mask,range:b[E===2?1:0],palette:E===2?"error":"ground-truth",plane:"xz",aspect:h/f,crosshair:d,onCrosshair:l}),n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:9",className:`reconstruction-scale ${E===2?"difference":""}`},n.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:80"},He(b[E===2?1:0][0],3)," m"),n.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:134"},He(b[E===2?1:0][1],3)," m")),n.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:32:9"},c?"选点":"Probe",": ",He(Mo(g,C))," m")))),n.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:34:7",className:"reconstruction-caption"},"X → · Z ↑ · X [",He(t.origin[0],2),", ",He(t.origin[0]+(h-1)*t.axisSteps[0][0],2),"] m · Z [",He(t.origin[2],2),", ",He(t.origin[2]+(f-1)*t.axisSteps[2][2],2),"] m",n.createElement("br",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:34:270"}),c?"俯视图使用 0.05 m 网格；A/B 同色标，误差红色表示预测偏高，蓝色表示偏低；斜纹为无效区域。点击任一图联动选点。":"Top-down 0.05 m grid. A/B share a scale; red means prediction higher, blue lower. Hatched cells are invalid. Click a map for a shared probe."," · X=",He(t.origin[0]+p*t.axisSteps[0][0],3),", Z=",He(t.origin[2]+_*t.axisSteps[2][2],3))):n.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:25:15",role:"status"},c?"等待当前帧加载完成；不显示上一帧的指标。":"Waiting for this frame; previous-frame scores are hidden."),n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:5",className:"reconstruction-table-wrap"},n.createElement("table",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:48","aria-label":c?"三帧重建指标":"Three-frame reconstruction metrics"},n.createElement("thead",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:121"},n.createElement("tr",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:128"},n.createElement("th",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:132"},c?"帧":"Frame"),st.map(([g,E,x,S])=>n.createElement("th",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:205",key:g},c?x:E,S&&` (${S})`)))),n.createElement("tbody",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:275"},Object.entries(e.frames).map(([g,E])=>n.createElement("tr",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:335",key:g,"aria-current":u&&Number(g)===s?"true":void 0},n.createElement("td",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:418"},n.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:422","data-os-action":"",disabled:i,onClick:()=>o(Number(g))},g)),st.map(([x])=>n.createElement("td",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:528",key:x},He(E[x])))))))),n.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:5"},c?"三帧合并：振幅斜率":"Pooled pilot: amplitude slope"," ",n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:61"},He(e.pooled.amplitudeSlope))," · ",c?"速度相对误差":"velocity relative L2"," ",n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:162"},He(e.pooled.velocityRelativeL2))," · ",c?"方向余弦中位数":"median direction cosine"," ",n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:271"},He(e.pooled.velocityMedianCosine)),n.createElement("br",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:334"}),n.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:339"},c?"合并分子与分母后求比值；方向指标使用全部有效方向余弦的中位数，不是逐帧数值的平均。振幅斜率以 1 为匹配参考，速度相对误差越小越好，方向余弦越接近 1 越好。":"Ratios use pooled sums; direction uses the median of all eligible cosines, not frame averages. Amplitude reference: 1. Lower relative error and cosine closer to 1 are preferable.")),n.createElement("details",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:38:5",className:"reconstruction-protocol"},n.createElement("summary",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:38:50"},c?"本次计算规则与未计算项":"Evaluation protocol & unavailable metrics"),n.createElement("ul",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:39:7"},n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:39:11"},c?"高度：沿 Y 提取内负外正的线性过零位置；排除多层水面和上方缺失支撑，仅比较双方共同有效列。":e.height),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:40:7"},c?"破碎区：在共同有效高度列中选择 X > −0.3 m。当前显示绝对误差（m），R 未定义，因此不显示归一化百分比。":e.breaking+" R is undefined: absolute metres only, no normalized percentages."),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:41:7"},c?"振幅：每帧在同一共同有效区域分别去均值，再计算 Σ(h̃GT·h̃预测) / Σ(h̃GT²)。":e.amplitude),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:42:7"},c?"水下速度：从原网格索引 0 开始，每两个格点取一个，得到 0.1 m 网格；采用 GT 水面下至少 10 cm 且双方 SDF/速度都有效的区域。方向中位数排除任一速度 ≤ 10⁻⁸ m/s 的点。":e.velocity),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:43:7"},c?"右侧和下方通用场指标仍基于原生 0.05 m 网格及其共同有效域，与这里的水下筛选指标分开。":"Generic volume metrics use native 0.05 m common support, separate from the underwater protocol here."),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:44:7"},c?"沿用 v2 的米制、Y 向上和同帧配对约定；新文件本身未独立声明物理单位。读取器报告 VDB 225/224 格式兼容提示，这些是初步参考结果。":e.units+" "+e.reader),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:45:7"},c?"尚未计算：归一化高度/破碎区百分比、各波长增益、独立 M1 基线。缺失项目不以零代替。":e.unavailable.join("; ")))),n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:5",className:"reconstruction-actions"},n.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:45","data-os-action":"",onClick:()=>Tt("Best_1027_pilot_metrics.csv","\uFEFF"+h0(e),"text/csv;charset=utf-8")},c?"下载三帧指标 CSV":"Pilot metrics CSV"),n.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:229","data-os-action":"",onClick:()=>Tt("Best_1027_evaluation_protocol.json",JSON.stringify(e,null,2))},c?"下载指标与规则 JSON":"Metrics & protocol JSON"),n.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:403","data-os-action":"",disabled:!u,onClick:()=>Tt(`Best_1027_${s}_height_map.csv`,"\uFEFF"+g0(a,t,s),"text/csv;charset=utf-8")},c?"下载当前高度图 CSV":"Current height map CSV")))}const pt="oceanscope.field-view.v1",Po="oceanscope.bookmarks.v2.field",be=e=>{throw Error(e)},La=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),rn=(e,a=-1e9,t=1e9)=>typeof e=="number"&&Number.isFinite(e)&&e>=a&&e<=t,$i=(e,a=-1e9,t=1e9)=>Array.isArray(e)&&e.length===2&&e.every(s=>rn(s,a,t));function Ro(e){const a=e.comparison,t=e.processing.lattice;return JSON.stringify({comparison:a.id,gt:a.groundTruthId,prediction:a.settings?.previewOnly?null:a.predictionId,groups:a.availableGroups,settings:a.settings,lattice:{dimensions:t.dimensions,origin:t.origin,axisSteps:t.axisSteps},directory:e.fieldDirectory,frames:e.processing.frames.map(s=>s.frame)})}function In(e,a){(!La(e)||e.schema!==pt)&&be("format"),(typeof e.name!="string"||!e.name.trim()||e.name.trim().length>80)&&be("name");const t=e.settings;La(t)||be("settings"),t.representation!==void 0&&t.representation!==Ea&&be("settings"),t.representation===Ea&&t.group!=="sdf"&&be("group"),(typeof t.caseId!="string"||!t.caseId||t.caseId.length>100||typeof e.sourceSignature!="string"||e.sourceSignature.length>1e5)&&be("dataset"),(!Number.isInteger(t.frame)||!rn(t.frame,0,1e7))&&be("frame"),(!["sdf","velocity"].includes(t.group)||!["split","overlay","wire-overlay","gt","prediction"].includes(t.mode)||!["balanced","fine"].includes(t.quality)||!["magnitude","x","y","z"].includes(t.component))&&be("settings"),(!["xy","xz","yz","oblique"].includes(t.plane)||!Number.isInteger(t.sliceIndex)||!rn(t.sliceIndex,0,1e7)||!rn(t.angle,0,180)||!rn(t.sectionPercent,0,100))&&be("section");for(const o of["showPlane","showContext","showGt","showPrediction"])typeof t[o]!="boolean"&&be("settings");(!rn(t.gtOpacity,.1,1)||!rn(t.predictionOpacity,.1,1)||!Number.isInteger(t.vectorDensity)||!rn(t.vectorDensity,1,2e4)||!rn(t.arrowScale,.001,1e6))&&be("settings"),t.glyphFocusIndex!==void 0&&(t.group!=="velocity"||!["split","overlay"].includes(t.mode)||!Number.isSafeInteger(t.glyphFocusIndex)||t.glyphFocusIndex<0)&&be("settings"),t.overlayStyle!==void 0&&(t.mode!=="overlay"||t.group!=="velocity"||!["errors","arrows"].includes(t.overlayStyle))&&be("settings"),t.glyphMode!==void 0&&!["direction","scaled"].includes(t.glyphMode)&&be("settings"),t.sourceRange!==null&&(!$i(t.sourceRange)||t.sourceRange[1]<=t.sourceRange[0])&&be("color"),(!La(t.errorScale)||typeof t.errorScale.locked!="boolean"||!rn(t.errorScale.limit,1e-6,1e9))&&be("color"),$i(t.crosshair,0,1)||be("probe"),(!La(t.playback)||typeof t.playback.loop!="boolean"||![.25,.5,1,2].includes(t.playback.speed)||!rn(t.playback.fps,1,120))&&be("settings");const s=mc(t.region,2),i=bc(e.camera);if((i.near===null||i.far===null)&&be("camera"),a){const o=a.find(d=>d.id===t.caseId);o||be("dataset"),e.sourceSignature!==Ro(o)&&be("source"),(t.representation===Ea?!ja(o).includes(t.frame):!o.processing.frames.some(d=>d.frame===t.frame))&&be("frame"),(!o.comparison.availableGroups.includes(t.group)||t.showContext&&!o.comparison.availableGroups.includes("sdf"))&&be("group"),o.comparison.settings?.previewOnly&&(t.mode!=="gt"||t.showPrediction||s)&&be("single");const r=o.processing.lattice,c=t.plane==="xy"||t.plane==="oblique"?2:t.plane==="yz"?0:1;t.glyphFocusIndex>=r.dimensions.reduce((d,l)=>d*l,1)&&be("settings"),(t.sliceIndex>=r.dimensions[c]||t.plane==="oblique"&&!as(r))&&be("section")}return{schema:pt,name:e.name.trim(),sourceSignature:e.sourceSignature,settings:{...t.representation?{representation:t.representation}:{},...uc(t.rotationAxis),...pc(t.shading),caseId:t.caseId,frame:t.frame,group:t.group,mode:t.mode,quality:t.quality,component:t.component,plane:t.plane,sliceIndex:t.sliceIndex,angle:t.angle,sectionPercent:t.sectionPercent,showPlane:t.showPlane,showContext:t.showContext,showGt:t.showGt,showPrediction:t.showPrediction,gtOpacity:t.gtOpacity,predictionOpacity:t.predictionOpacity,vectorDensity:t.vectorDensity,arrowScale:t.arrowScale,...t.overlayStyle?{overlayStyle:t.overlayStyle}:{},...t.glyphMode?{glyphMode:t.glyphMode}:{},...t.glyphFocusIndex!=null?{glyphFocusIndex:t.glyphFocusIndex}:{},sourceRange:t.sourceRange?[...t.sourceRange]:null,errorScale:{locked:t.errorScale.locked,limit:t.errorScale.limit},crosshair:[...t.crosshair],...s?{region:s}:{},playback:{speed:t.playback.speed,loop:t.playback.loop,fps:t.playback.fps}},camera:i}}function x0(e,a){new TextEncoder().encode(e).length>hc&&be("size");let t;try{t=JSON.parse(e)}catch{be("json")}return In(t,a)}function v0(e){let a;try{a=e.getItem(Po)}catch{be("storage")}if(a===null)return[];try{const t=JSON.parse(a),s=new Set;return(t.schema!=="oceanscope.field-library.v1"||!Array.isArray(t.items)||t.items.length>vo)&&be("library"),t.items.map(i=>((typeof i.id!="string"||!i.id||s.has(i.id))&&be("library"),s.add(i.id),{id:i.id,...In(i)}))}catch{be("library")}}function E0(e,a){a.length>vo&&be("limit");const t=new Set,s=a.map(i=>((typeof i.id!="string"||!i.id||t.has(i.id))&&be("library"),t.add(i.id),{id:i.id,...In(i)}));try{e.setItem(Po,JSON.stringify({schema:"oceanscope.field-library.v1",items:s}))}catch{be("storage")}}const Xi={...fc,format:["请使用场比较方案 JSON；水面方案、指标和数据说明文件不能作为场方案导入。","Use a field-view JSON. Wave views, metrics and data-info files cannot be imported as field views."],dataset:["当前样例中找不到方案指定的数据。","The saved dataset is not available in the current samples."],source:["样例身份、网格或单位声明已改变，未应用旧方案。","Dataset identity, grid or unit declarations changed; the old view was not applied."],group:["当前样例不提供方案指定的 SDF 或速度场。","This sample does not provide the saved SDF or velocity group."],section:["切片索引或斜切参数超出当前网格范围。","The slice index or oblique settings are outside the current grid."],single:["单组 GT 方案不能包含预测显示或双组模式。","A single GT view cannot use prediction layers or paired display modes."],probe:["切片探针位置必须在 0–100% 范围内。","The slice probe must stay within 0–100%."],color:["色标范围无效；请检查上下限。","Invalid color range; check its limits."],size:["文件超过 2 MB，请选择场比较方案 JSON。","File exceeds 2 MB; select a field-view JSON."],load:["场方案恢复未完成，数据或三维视图加载失败。请检查页面提示后重试。","Field view restoration failed while loading data or 3D. Check the page message and try again."]};function _0(e,a){return Xi[e.message]?.[a?0:1]||Xi.load[a?0:1]}const w0=[1007,1023,1039,1057,1073,1089],S0=[["mae_m","Height MAE","高度 MAE","m","pooled common columns"],["mae_pct","Height MAE / R","高度 MAE / R","% R","pooled common columns"],["bias_pct","Signed height bias / R","有符号高度偏差 / R","% R","pooled common columns"],["steep_pct","Steep-column MAE / R","陡坡列 MAE / R","% R","GT slope top 15%, per frame"],["calm_cells_pct","Non-steep-column MAE / R","非陡坡列 MAE / R","% R","remaining GT slope columns"],["breaking_band_pct","Breaking-band MAE / R","破浪带 MAE / R","% R","strict -0.30 < X < 1.10"],["calm_band_pct","Calm-band MAE / R","平静带 MAE / R","% R","strict -7.90 < X < -1.50"],["amplitude_slope","Amplitude slope","振幅斜率","ratio","pooled after per-frame demeaning"],["correlation","Height correlation","高度相关系数","ratio","pooled after per-frame demeaning"],["flicker_pct","Adjacent-frame error change / R","相邻帧误差变化 / R","% R","adjacent pairs, no time-step division"],["gt_range_m","Observed GT height range","观测 GT 高度范围","m","GT max minus min over all frames"],["pct_relative_to_m","Normalization reference R","归一化参考 R","m","fixed protocol parameter"]],j0=[["rel_rmse","Relative RMSE — pooled","相对 RMSE — 全体素汇总","ratio","sqrt(sum error energy / sum GT energy)"],["rel_rmse_frame_mean","Relative RMSE — frame mean","相对 RMSE — 逐帧平均","ratio","arithmetic mean of frame relative RMSE"],["cos_median","Direction cosine median","方向余弦中位数","ratio","median over all selected voxels, not mean of frame medians"],["speed_ratio","Mean speed ratio B / GT","平均速度比 B / GT","ratio","mean |B| / mean |GT|"],["vec_mae","Vector MAE","矢量 MAE","source velocity unit","mean norm of vector error"],["gt_mean_speed","GT mean speed","GT 平均速度","source velocity unit","mean norm of GT velocity"]];function Io(e,{subset:a="all",grid:t="coarse",frame:s=e.frameIds[0]}={}){if(!["all","six"].includes(a)||!["fine","coarse"].includes(t)||!e.frameIds.includes(s))throw Error("Invalid metric selection");const i=[],o=e.frameIds,r=e.summary.height,c={runId:e.runId,protocolSha256:e.protocol.sourceScriptSha256,manifestA:e.datasetA.manifestSha256,manifestB:e.datasetB.manifestSha256};function d(f,p,_,C,w,g,E,x,S=null,B="defined by frozen protocol",A="",y=null){const M=Number.isFinite(C)&&!A;i.push({id:f,label:p,labelZh:_,value:M?C:null,unit:w,aggregation:g,scope:E,frameIds:[...x],validCount:S,countStatus:S==null?"not recorded in frozen result":"recorded",status:M?"available":"unavailable",reason:A||(M?"":"Value not recorded or nonfinite in source"),denominator:{formula:B,value:y},source:c})}for(const[f,p,_,C,w]of S0){let g="",E=["mae_m","mae_pct","bias_pct"].includes(f)?r.cells_scored:null;r.cells_scored===0&&!["gt_range_m","pct_relative_to_m"].includes(f)&&(g="No common support"),f==="flicker_pct"&&(o.length<2||o.some((x,S)=>S>0&&x!==o[S-1]+1))&&(g="Requires consecutive adjacent frames"),d("height."+f,p,_,r[f],C,w,"sequence height: all evaluated frames",o,E,C==="% R"?"reference range R":"metric-specific support",g,C==="% R"?r.pct_relative_to_m:null)}for(const f of["gain","coherence"])for(const p of[.3,.6,1.2,2.4,4.8])d(`height.${f}.${p}`,`${f} · λ ${p} m`,`${f==="gain"?"增益":"相干度"} · λ ${p} m`,r[f]?.[String(p)],"ratio","pooled DoG band sums; common support and wider-filter weight > 0.7","sequence height: all evaluated frames",o,null,f==="gain"?"GT band energy":"GT band energy × prediction band energy",r.cells_scored===0?"No common support":"");d("footprint_iou","Wet-column footprint IoU","有水列范围 IoU",e.summary.footprint_iou,"ratio","pooled intersection / union","sequence wet columns",o,null,"wet-column union"),d("volume.iou","Water volume IoU","水体素 IoU",e.summary.volume?.iou,"ratio","pooled intersection / union","sequence water voxels (sdf < 0 and valid)",o,null,"water-voxel union"),d("volume.rec_over_gt","Water volume B / GT","水体积比 B / GT",e.summary.volume?.rec_over_gt,"ratio","pooled B volume / GT volume","sequence water voxels (sdf < 0 and valid)",o,null,"GT water-voxel count");const l=a==="all"?o:w0,m=e.summary.velocity[a==="all"?"all_frames":"velocity_net_6_frames"],b=m?.[t==="fine"?"grid_0.05m":"grid_0.1m"],v=e.rows.filter(f=>l.includes(f.frame)),u=v.map(f=>f.velocity?.[t]?.gtEnergy),h=u.length===l.length&&u.every(Number.isFinite)?u.reduce((f,p)=>f+p,0):null;for(const[f,p,_,C,w]of j0){let g=b?.voxels===0?"No valid velocity support":"";f.startsWith("rel_rmse")&&(h===0||f==="rel_rmse_frame_mean"&&u.some(E=>E===0))&&(g="Zero GT energy makes relative RMSE undefined"),(!m||JSON.stringify(m.frames)!==JSON.stringify(l))&&(g="Frame set does not match archived aggregate"),d("velocity."+f,p,_,b?.[f],C,w,`${a==="all"?"all evaluated frames":"fixed six frames (not train/test split)"}; ${t==="fine"?"native 0.05 XYZ":"XZ 2×2 average, Y unchanged (~0.10 / 0.05 / 0.10)"}`,l,b?.voxels??null,f.startsWith("rel_rmse")?"GT velocity energy":"valid velocity support",g,f==="rel_rmse"?h:null)}return i}function C0(e){const a=["id","value","status","reason","unit","scope","aggregation","frameIds","validCount","countStatus","denominator","source"],t=s=>'"'+String(s==null?"":typeof s=="object"?JSON.stringify(s):s).replaceAll('"','""')+'"';return[a.join(","),...e.map(s=>a.map(i=>t(s[i])).join(","))].join(`
`)}function B0({bundle:e,subset:a,frame:t,zh:s,onDownload:i,selectedGrid:o,onGrid:r}){const[c,d]=j.useState("coarse"),l=o??c;function m(v){d(v),r?.(v)}const b=j.useMemo(()=>Io(e,{subset:a,grid:l,frame:t}),[e,a,l,t]);return n.createElement("details",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:7:9",className:"complete-metrics"},n.createElement("summary",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:7:47"},s?"完整指标 · 范围、网格与聚合":"Complete metrics · scope, grid and aggregation"),n.createElement("p",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:8:3"},s?"高度与体积保持全96帧；上方帧集合只切换速度汇总。固定六帧不是训练/测试划分。缺失计数表示原件未记录，不推测或补零。":"Height and volume retain all96 frames; the frame-set selector changes velocity aggregates only. Fixed six is not a train/test split. Missing counts were not recorded, never inferred or filled with zero."),n.createElement("label",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:3"},s?"速度网格":"Velocity grid"," ",n.createElement("select",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:38","data-os-action":"","aria-label":"Reference detail grid",value:l,onChange:v=>m(v.target.value)},n.createElement("option",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:132",value:"coarse"},s?"粗网格 · XZ 2×2 / Y不变":"Coarse · XZ 2×2 / unchanged Y"),n.createElement("option",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:221",value:"fine"},s?"细网格 · 原生0.05":"Fine · native0.05"))),n.createElement("div",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:3",className:"metric-table-scroll"},n.createElement("table",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:40","aria-label":"Complete protocol metrics"},n.createElement("thead",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:86"},n.createElement("tr",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:93"},(s?["指标","数值","单位","范围 / 聚合","有效计数"]:["Metric","Value","Unit","Scope / aggregation","Valid count"]).map(v=>n.createElement("th",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:206",key:v},v)))),n.createElement("tbody",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:241"},b.map(v=>n.createElement("tr",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:261",key:v.id},n.createElement("th",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:276",scope:"row"},s?v.labelZh:v.label),n.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:319"},v.value==null?"—":v.value.toPrecision(8),v.status!=="available"&&n.createElement("small",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:390"},v.reason)),n.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:421"},v.unit),n.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:438"},n.createElement("small",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:442"},v.scope,n.createElement("br",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:458"}),v.aggregation)),n.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:491"},v.validCount==null?s?"原件未记录":"Not recorded":v.validCount.toLocaleString())))))),n.createElement("p",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:11:3"},s?"速度有效域：GT vel_valid、GT sdf < −0.10、预测vel_valid；Z[11:105] / X[11:212]，粗网格须四格全有效。Breaking严格−0.30<X<1.10；calm band与非陡坡列不同。":"Velocity support: GT vel_valid, GT sdf < −0.10, prediction vel_valid; Z[11:105] / X[11:212], all four coarse cells valid. Breaking strictly −0.30<X<1.10; calm band differs from non-steep columns."),n.createElement("button",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:12:3","data-os-action":"",onClick:()=>i(`${e.runId}_${a}_${l}_complete-metrics.csv`,C0(b),"text/csv")},s?"导出完整指标 CSV":"Export complete metrics CSV"))}function A0({declarations:e,zh:a}){const t=s=>({claimed:a?"来源声明":"Source declaration",verified:a?"已核验":"Verified",unknown:a?"未知":"Unknown"})[s];return n.createElement("details",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:9",className:"complete-metrics"},n.createElement("summary",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:47"},a?"实验条件与证据来源":"Experiment conditions and evidence"),e?n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:5:3"},a?"“已核验”仅覆盖注明的原始文件身份；相机、模型、单位和测试划分仍按原始材料声明，不能等同独立训练审计。":"Verified labels cover the stated original-file identities. Camera, model, units and test split remain source declarations, not an independent training audit."),n.createElement("dl",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:3",className:"experiment-declarations"},e.entries.map(s=>n.createElement("div",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:72",key:s.id},n.createElement("dt",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:88"},a?s.labelZh:s.label," ",n.createElement("span",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:115"},t(s.status))),n.createElement("dd",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:150"},s.value==null?"—":typeof s.value=="object"?JSON.stringify(s.value):String(s.value),s.note&&n.createElement("small",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:248"},s.note.replace(/collaborator/gi,"Source")),s.source&&n.createElement("small",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:318"},s.source.file," · SHA256 ",s.source.sha256))))),n.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:7:3"},a?"直接比较要求相同GT、协议、帧集合、有效域和单位；不同相机/模型可以作为实验变量，但必须显示差异。":"Direct comparison requires the same GT, protocol, frame set, support and units. Camera/model differences may be experimental variables but must be disclosed.")):n.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:134",role:"status"},a?"声明尚未核验，不能推断实验条件。":"Declarations not yet verified; conditions cannot be inferred."))}const Ut=[1007,1023,1039,1057,1073,1089],_n=e=>Number.isFinite(e)?e.toFixed(6):"—";function k0({bundle:e,frame:a,onFrame:t,onDownload:s,reportSelection:i,onReportSelection:o,unifiedRestore:r=!1,displayGeometryFrames:c=e.geometryFrames}){const{language:d}=ue(),l=d==="zh",[m,b]=j.useState("all"),[v,u]=j.useState("height"),h=i?.subset??m,f=i?.metric??v;function p(T){b(T),o?.(N=>({...N,subset:T}))}function _(T){u(T),o?.(N=>({...N,metric:T}))}const[C,w]=j.useState(""),g=j.useRef(ro());j.useEffect(()=>(g.current.cancel(),()=>g.current.cancel()),[a,e]);const E=j.useRef(null),x=[e.datasetA.manifestSha256,e.datasetB.manifestSha256,e.protocol.sourceScriptSha256].join("/");j.useEffect(()=>{function T(N){const ne=N.detail;!E.current?.getClientRects().length||ne.run!==e.runId||ne.protocol!==e.protocol.id||ne.identity!==x||(f!==ne.metric&&_(ne.metric),h!==ne.subset&&p(ne.subset),ne.scope==="frame"&&a!==ne.frame&&S(ne.frame),N.preventDefault())}return window.addEventListener("oceanscope-restore-curve",T),()=>window.removeEventListener("oceanscope-restore-curve",T)},[e,a,f,h,x]);function S(T){g.current.cancel(),t(T)}async function B(T){if(g.current.cancel(),!!T)try{if(T.size>1024*1024)throw Error("Result selection file too large");const N=await g.current.run(async()=>co(await T.text(),e));N&&(p(N.subset),_(N.metric),t(N.frame),w(l?"已恢复相同结果的帧与集合；指标仍来自已核验结果包。":"Restored frame and subset; metrics remain from the verified bundle."))}catch(N){w(N.message)}}const A=wr(e,a??e.frameIds[0]),y={...A,geometryAvailable:c.includes(A.frame)},M=e.rows.filter(T=>h==="all"||Ut.includes(T.frame)),k=e.summary.velocity[h==="all"?"all_frames":"velocity_net_6_frames"]["grid_0.1m"],I=h==="all"?l?"全96帧 · 粗网格":"All96 frames · Coarse grid":l?"固定六帧 · 粗网格":"Fixed six frames · Coarse grid",F=T=>f==="height"?T.height.mae_m*100:T.velocity.coarse.rel_rmse,V=Math.max(...M.map(F),1e-9),K=T=>42+(T-1001)/95*836,W=T=>155-T/V*125;function G(){return{schemaVersion:1,runId:e.runId,protocol:e.protocol,datasetA:e.datasetA,datasetB:e.datasetB,frame:y.frame,selectedFrame:y.row,subset:h,metric:f,unitStatus:e.unitStatus,geometryAvailable:y.geometryAvailable,summaryScope:"height: all96; velocity: selected subset",summary:{height:e.summary.height,velocity:k},rows:M}}function ae(){return["run_id,protocol_id,subset,frame,height_mae_m,height_bias_m,common_columns,coarse_rel_rmse,coarse_valid_voxels,geometry_available",...M.map(T=>[e.runId,e.protocol.id,h,T.frame,T.height.mae_m,T.height.bias_m,T.height.common,T.velocity.coarse.rel_rmse,T.velocity.coarse.voxels,c.includes(T.frame)].join(","))].join(`
`)}return n.createElement("section",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:41:9",className:"reference-evaluation","aria-label":l?"原始96帧协议结果":"Raw 96-frame protocol results"},n.createElement("header",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:3"},n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:11"},n.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:16",className:"reference-eyebrow"},"RAW VDB · 96 / 96"),n.createElement("h2",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:76"},l?"Gentle → Best_1027 · 序列评估":"Gentle → Best_1027 · Sequence evaluation")),n.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:166",className:"reference-status"},l?"原始读取已核验":"Verified raw read")),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:43:3"},l?"192个原始文件身份核验 · 0失败 · 95个相邻帧对。单位采用来源约定，尚未独立标定。":"192 source identities verified · 0 failures · 95 adjacent pairs. Units follow source convention, without independent calibration."),n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:3",className:"reference-cards"},n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:36"},n.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:41"},l?"全96帧高度 MAE":"All96 height MAE"),n.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:90"},_n(e.summary.height.mae_m*100)," ",n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:140"},"cm")),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:166"},_n(e.summary.height.mae_pct),"% R · R=1.230"),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:233"},l?"有符号偏差":"Signed bias"," ",_n(e.summary.height.bias_pct),"% R")),n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:324"},n.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:329"},l?"速度 relative RMSE · pooled":"Velocity relative RMSE · pooled"),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:408",className:"metric-scope"},I),n.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:463"},_n(k.rel_rmse)),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:507"},k.voxels.toLocaleString()," ",l?"有效粗网格点":"valid coarse voxels")),n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:598"},n.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:603"},l?"速度 relative RMSE · 逐帧均值":"Velocity relative RMSE · Frame mean"),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:684",className:"metric-scope"},I),n.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:739"},_n(k.rel_rmse_frame_mean)),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:794"},l?"XZ 0.1 / Y 0.05 · 来源单位":"XZ 0.1 / Y 0.05 · source units"))),n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:3",className:"reference-controls"},n.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:39"},l?"帧集合":"Frame set"," ",n.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:69","data-os-action":"","aria-label":"Reference frame set",value:h,onChange:T=>{g.current.cancel(),p(T.target.value)}},n.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:195",value:"all"},l?"全96帧":"All96 frames"),n.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:250",value:"six"},l?"固定六帧":"Fixed six frames"))),n.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:326"},l?"曲线":"Curve"," ",n.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:351","data-os-action":"","aria-label":"Reference metric",value:f,onChange:T=>{g.current.cancel(),_(T.target.value)}},n.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:474",value:"height"},l?"高度 MAE (cm)":"Height MAE (cm)"),n.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:542",value:"velocity"},l?"粗网格速度 relative RMSE":"Coarse velocity relative RMSE"))),n.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:651"},l?"原始帧号":"Original frame"," ",n.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:687","data-os-action":"","aria-label":"Reference frame",value:y.frame,onChange:T=>S(Number(T.target.value))},e.frameIds.map(T=>n.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:822",key:T,value:T},T,c.includes(T)?" · 3D":""))))),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:46:3",role:"status"},n.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:46:20"},l?"选定帧":"Selected frame"," ",y.frame)," ",n.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:46:83","data-os-action":"",hidden:h==="six"&&!Ut.includes(y.frame),type:"button","data-os-tools":"",className:"os-frame-comment",onClick:()=>window.dispatchEvent(new CustomEvent("oceanscope-review-frame",{detail:E.current}))},l?"批注此帧":"Comment on this frame")," · ",l?"高度 MAE":"Height MAE"," ",_n(y.row.height.mae_m*100)," cm · ",l?"速度 relative RMSE":"Velocity relative RMSE"," ",_n(y.row.velocity.coarse.rel_rmse)," · ",y.geometryAvailable?l?"三维预览可用":"3D preview available":l?"该帧无三维数据；保留真实帧号与指标":"No 3D data for this frame; frame identity and metrics retained",h==="six"&&!Ut.includes(y.frame)&&(l?" · 当前帧不在固定六帧集合":" · Current frame outside fixed-six subset")),!y.geometryAvailable&&n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:47:34",className:"reference-geometry-links"},l?"跳转到可用三维帧：":"Jump to available geometry: ",c.map(T=>n.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:47:153","data-os-action":"",key:T,onClick:()=>S(T)},T))),n.createElement("figure",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:48:3",className:"os-metric-figure","data-review-id":"reference-frame-metric"},n.createElement("figcaption",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:49:4"},f==="height"?l?"高度 MAE 逐帧曲线":"Height MAE by frame":l?"速度 relative RMSE 逐帧曲线":"Velocity relative RMSE by frame"),n.createElement("svg",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:4",ref:E,"data-review-curve":"reference-frame-metric","data-run":e.runId,"data-protocol":e.protocol.id,"data-identity":x,"data-subset":h,"data-metric":f,"data-frame":y.frame,"data-value":F(y.row),"data-unit":f==="height"?"cm":"1",viewBox:"0 0 920 190",role:"img","aria-label":l?"原始帧指标曲线":"Original-frame metric curve"},n.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:384",x:"8",y:"27"},_n(V)),n.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:423",x:"15",y:"159"},"0"),n.createElement("line",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:452",x1:"42",x2:"878",y1:"155",y2:"155",stroke:"#a7c4cb"}),n.createElement("polyline",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:511",points:M.map(T=>`${K(T.frame)},${W(F(T))}`).join(" "),fill:"none",stroke:"#087e8b",strokeWidth:"2"}),M.map(T=>n.createElement("circle",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:643","data-os-action":"","data-frame":T.frame,key:T.frame,cx:K(T.frame),cy:W(F(T)),r:T.frame===y.frame?5:3,fill:T.frame===y.frame?"#c45c15":"#087e8b",role:"button",tabIndex:"0","aria-label":`${l?"选择帧":"Select frame"} ${T.frame}`,onClick:()=>S(T.frame),onKeyDown:N=>{(N.key==="Enter"||N.key===" ")&&(N.preventDefault(),S(T.frame))}},n.createElement("title",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1012"},T.frame,": ",_n(F(T))))),n.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1067",x:"42",y:"180"},"1001"),n.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1099",x:"840",y:"180"},"1096"),n.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1132",x:"400",y:"180"},l?"原始帧号":"Original frame"))),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:51:3",className:"reference-scope"},l?"此处为固定协议的全局／逐帧指标。相机、显示平滑与ROI不改变这些值；同协议空间面板使用原生列高度。三维场切片与旧预览诊断保留各自计算范围。":"These are fixed-protocol global/per-frame metrics. Camera, display smoothing and ROI do not change them. The protocol spatial panel uses native height columns; volume slices and legacy diagnostics retain their own scope."),n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:52:3",className:"reference-controls"},n.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:52:39","data-os-action":"",onClick:()=>s(`${e.runId}_${h}.json`,JSON.stringify(G(),null,2))},l?"导出结果与当前帧 JSON":"Export results and current frame JSON"),n.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:52:209","data-os-action":"",onClick:()=>s(`${e.runId}_${h}.csv`,ae(),"text/csv")},l?"导出所选集合 CSV":"Export selected-set CSV")),n.createElement(B0,{bundle:e,subset:h,zh:l,onDownload:s,frame:y.frame,selectedGrid:i?.grid,onGrid:T=>o?.(N=>({...N,grid:T}))}),n.createElement(A0,{declarations:e.declarations,zh:l}),!r&&n.createElement("details",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:21"},n.createElement("summary",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:30"},l?"恢复结果选择":"Restore result selection"),n.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:89"},l?"选择本面板导出的 JSON":"Choose JSON exported from this panel"," ",n.createElement("input",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:156","data-os-action":"",type:"file",accept:"application/json,.json","aria-label":"Restore reference selection",onChange:T=>{B(T.target.files?.[0]),T.target.value=""}})),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:320",role:"status"},C)),n.createElement("details",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:3"},n.createElement("summary",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:12"},l?"数据身份、协议与有效计数":"Identity, protocol and valid counts"),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:88"},e.protocol.id," · ",e.runId),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:132"},"A: ",e.datasetA.manifestSha256,n.createElement("br",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:170"}),"B: ",e.datasetB.manifestSha256,n.createElement("br",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:210"}),l?"算法":"Algorithm",": ",e.protocol.sourceScriptSha256),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:278"},l?"当前帧共同高度列":"Current common height columns",": ",y.row.height.common," · GT ",y.row.height.gtWet," / B ",y.row.height.predictionWet,"; ",l?"速度有效点":"Valid velocity voxels",": ",y.row.velocity.coarse.voxels)))}function Pa(e,a,t){const s=e.points;return s.flatMap((i,o)=>!o||o===s.length-1||i.x<a.xmin||i.x>a.xmax||i.z<a.zmin||i.z>a.zmax?[]:s.slice(o-1,o+2).every(c=>Number.isFinite(c.a)&&Number.isFinite(c.b))?s[o-1][t]<i[t]&&s[o+1][t]<i[t]?[o]:[]:[])}function sa(e,a){if(!a||!["first","second"].includes(a.profile)||!["uncertain","paired"].includes(a.status))throw Error("Invalid crest annotation");const t=e.profiles[a.profile];for(const o of["a","b"])if(!Pa(t,e.roi,o).includes(a[o]))throw Error("Invalid crest sample");const s=t.points[a.a],i=t.points[a.b];return{gt:s,pred:i,deltaHeight:i.b-s.a,deltaDistance:i.distance-s.distance}}function Et(e,a){if(!e.roi||!["first","second"].includes(a?.profile))throw Error("Invalid crest profile or ROI");return a.status==="uncertain"&&a.a===null&&a.b===null?null:sa(e,a)}function _t(e){const{shape:[a,t],originXYZ:[s,,i],spacing:o}=e.descriptor;return{xmin:s,xmax:s+(t-1)*o,zmin:i,zmax:i+(a-1)*o}}function Ba(e,a,{mode:t="create"}={}){const s={...e};for(const i of["x","z"]){const o=i+"min",r=i+"max";if(!Number.isFinite(s[o])||!Number.isFinite(s[r])||s[r]<s[o])throw Error("Invalid ROI");if(t==="move"){const c=Math.min(s[r]-s[o],a[r]-a[o]);s[o]=Math.max(a[o],Math.min(a[r]-c,s[o])),s[r]=s[o]+c}else s[o]=Math.max(a[o],Math.min(a[r],s[o])),s[r]=Math.max(a[o],Math.min(a[r],s[r]))}return{roi:s,clipped:JSON.stringify(s)!==JSON.stringify(e)}}function Gi(e,{ix:a,iz:t,resourceKey:s}){const{shape:[i,o],originXYZ:[r,,c],spacing:d,frameId:l}=e.descriptor;if(!Number.isInteger(a)||!Number.isInteger(t)||a<0||a>=o||t<0||t>=i||!e.common[t*o+a])throw Error("Select a paired valid location");const m=r+a*d,b=c+t*d;return{version:1,frame:l,resourceKey:s,hotspot:{ix:a,iz:t,index:t*o+a,x:m,z:b},roi:Ba({xmin:m-10*d,xmax:m+10*d,zmin:b-10*d,zmax:b+10*d},_t(e)).roi,directionDeg:0,anchorMode:"hotspot"}}function wt({anchor:e,direction:a},t){let s=-1/0,i=1/0;for(const[o,r,c,d]of[[e.x,a[0],t.xmin,t.xmax],[e.z,a[1],t.zmin,t.zmax]])if(Math.abs(r)<1e-12){if(o<c-1e-9||o>d+1e-9)return null}else{const l=(c-o)/r,m=(d-o)/r;s=Math.max(s,Math.min(l,m)),i=Math.min(i,Math.max(l,m))}return s<=i?[s,i]:null}function cs(e,{x:a,z:t,directionDeg:s}){const i=_t(e),{shape:[o,r],originXYZ:[c,,d],spacing:l}=e.descriptor;if(![a,t,s].every(Number.isFinite)||a<i.xmin||a>i.xmax||t<i.zmin||t>i.zmax)throw Error("Profile anchor outside domain");const m=s*Math.PI/180,b=[Math.cos(m),Math.sin(m)],v={x:a,z:t},u=wt({anchor:v,direction:b},i),h=(a-c)/l,f=(t-d)/l,p=Math.abs(b[1])<1e-12&&Math.abs(f-Math.round(f))<1e-8,_=Math.abs(b[0])<1e-12&&Math.abs(h-Math.round(h))<1e-8,C=(p||_)&&Math.abs(h-Math.round(h))<1e-8&&Math.abs(f-Math.round(f))<1e-8;let w;if(C)w=Array.from({length:p?r:o},(E,x)=>((p?c:d)+x*l-(p?a:t))/(p?b[0]:b[1]));else{const E=Math.max(2,Math.ceil((u[1]-u[0])/l)+1);w=Array.from({length:E},(x,S)=>u[0]+(u[1]-u[0])*S/(E-1))}w=[...w,0].sort((E,x)=>E-x).filter((E,x,S)=>x===0||Math.abs(E-S[x-1])>1e-9);const g=w.map(E=>{const x=a+E*b[0],S=t+E*b[1],B=(x-c)/l,A=(S-d)/l;let y=null,M=null;if(C){const k=Math.round(A)*r+Math.round(B);e.common[k]&&(y=e.heightA[k],M=e.heightB[k])}else if(r>=2&&o>=2){const k=Math.max(0,Math.min(r-2,Math.floor(B))),I=Math.max(0,Math.min(o-2,Math.floor(A))),F=B-k,V=A-I,K=[I*r+k,I*r+k+1,(I+1)*r+k,(I+1)*r+k+1],W=[(1-F)*(1-V),F*(1-V),(1-F)*V,F*V];K.every(G=>e.common[G]&&Number.isFinite(e.heightA[G])&&Number.isFinite(e.heightB[G]))&&(y=K.reduce((G,ae,T)=>G+W[T]*e.heightA[ae],0),M=K.reduce((G,ae,T)=>G+W[T]*e.heightB[ae],0))}return{distance:E,x,z:S,a:y,b:M,difference:y===null||M===null?null:M-y}});return{anchor:v,direction:b,sampling:C?"native_columns":"bilinear_common_four",step:l,points:g}}function ia(e,a){return{first:cs(e,{...a.hotspot,directionDeg:a.directionDeg}),second:cs(e,{...a.hotspot,directionDeg:a.directionDeg+90})}}function ls(e){let a=0,t=0,s=0,i=0,o=null;for(const r of e){if(!Number.isFinite(r.error))continue;const c=r.error,d=Math.abs(c);a++,t+=c,s+=d,i+=c*c,!o||d>o.absolute?o={...r,absolute:d,signed:c,ties:1}:d===o.absolute&&o.ties++}return{samples:a,mae:a?s/a:null,bias:a?t/a:null,rmse:a?Math.sqrt(i/a):null,maximum:o}}function ta(e,a=null){if(a&&(!["xmin","xmax","zmin","zmax"].every(v=>Number.isFinite(a[v]))||a.xmin>a.xmax||a.zmin>a.zmax))throw Error("Invalid evidence ROI");const{shape:[t,s],originXYZ:[i,,o],spacing:r}=e.descriptor;let c=0,d=0,l=0;const m=[];for(let v=0;v<t;v++)for(let u=0;u<s;u++){const h=v*s+u,f=i+u*r,p=o+v*r;a&&(f<a.xmin||f>a.xmax||p<a.zmin||p>a.zmax)||(c++,d+=+!!e.wetA[h],l+=+!!e.wetB[h],e.common[h]&&m.push({index:h,ix:u,iz:v,x:f,z:p,error:e.heightB[h]-e.heightA[h]}))}const b=ls(m);return{...b,candidates:c,validGT:d,validPrediction:l,common:b.samples,coverageCandidate:c?b.samples/c:null,coverageGT:d?b.samples/d:null,weighting:"native columns, equal area per column"}}function ds(e,a=null){const t=a?wt(e,a):null,s=e.points.map(i=>({...i,error:i.difference}));return{full:ls(s),roi:a?ls(t?s.filter(i=>i.distance>=t[0]-1e-10&&i.distance<=t[1]+1e-10):[]):null,sampling:e.sampling,weighting:"sample mean; not native area or volume statistics"}}function No(e,a,t){if(!e||e.version!==1||e.frame!==a.frameId||e.resourceKey!==JSON.stringify(a)||e.anchorMode!=="hotspot"||!Number.isFinite(e.directionDeg)||e.directionDeg<0||e.directionDeg>=180)throw Error("Invalid diagnosis identity/direction");if(e.caseNote!==void 0&&(typeof e.caseNote!="string"||e.caseNote.length>120))throw Error("Invalid case note");const s=e.hotspot,[i,o]=a.shape,r=a.spacing;if(!s||!Number.isInteger(s.ix)||!Number.isInteger(s.iz)||s.ix<0||s.ix>=o||s.iz<0||s.iz>=i||s.index!==s.iz*o+s.ix||![s.x,s.z].every(Number.isFinite)||Math.abs(s.x-(a.originXYZ[0]+s.ix*r))>1e-9||Math.abs(s.z-(a.originXYZ[2]+s.iz*r))>1e-9||!t||t.index!==s.index||Math.abs(t.x-s.x)>1e-9||Math.abs(t.z-s.z)>1e-9)throw Error("Diagnosis native point mismatch");const c=e.crest;if(c&&(!["first","second"].includes(c.profile)||!["paired","uncertain"].includes(c.status)||!(Number.isInteger(c.a)&&Number.isInteger(c.b)||c.status==="uncertain"&&c.a===null&&c.b===null)))throw Error("Invalid crest selection");return{...c?{crest:{profile:c.profile,status:c.status,a:c.a,b:c.b}}:{},...e.caseNote!==void 0?{caseNote:e.caseNote}:{},version:1,frame:e.frame,resourceKey:e.resourceKey,hotspot:{ix:s.ix,iz:s.iz,index:s.index,x:s.x,z:s.z},roi:e.roi??null,directionDeg:e.directionDeg,anchorMode:"hotspot"}}const As="oceanscope.protocol-report.v1",M0=e=>JSON.parse(JSON.stringify(e)),Zi=e=>JSON.stringify(e,(a,t)=>t&&typeof t=="object"&&!Array.isArray(t)?Object.fromEntries(Object.keys(t).sort().map(s=>[s,t[s]])):t),it=(e,a)=>Zi(e)===Zi(a),Aa=(e,a=-1e9,t=1e9)=>typeof e=="number"&&Number.isFinite(e)&&e>=a&&e<=t;function Fo(e){if(!/^[a-f0-9]{64}$/.test(e.verifiedPayloadSha256)||!/^[a-f0-9]{64}$/.test(e.declarations?.sha256))throw Error("Verified report identity unavailable");return{...aa(e),bundleSha256:e.verifiedPayloadSha256,declarationsSha256:e.declarations.sha256}}function Oo(e,a,t,s){if(!e||e.frame!==a.frameId||!t.frameIds.includes(e.frame))throw Error("Report frame mismatch");if(!["xy","xz","yz","oblique"].includes(e.plane)||!["x","y","z"].includes(e.rotationAxis)||!Aa(e.angle,0,180)||!Aa(e.sectionPercent,0,100))throw Error("Invalid report section");const i=e.plane==="xy"||e.plane==="oblique"?a.shape[0]:e.plane==="yz"?a.shape[1]:s?.[0]?.processing.lattice.dimensions[1]??64;if(!Number.isInteger(e.sliceIndex)||e.sliceIndex<0||e.sliceIndex>=i)throw Error("Report slice outside lattice");const o=e.selection;if(!o||!["all","six"].includes(o.subset)||!["fine","coarse"].includes(o.grid)||!["height","velocity"].includes(o.metric))throw Error("Invalid report selection");let r=null,c=null;if(e.geometry){const l=e.geometry.settings?.representation===Ea;if(!s?.length||!l&&!t.geometryFrames.includes(e.frame))throw Error("Report geometry unavailable");r=In(e.geometry,s);const m=s.find(b=>b.id===r.settings.caseId);if(c=l?oo(m,e.frame,r.settings.quality):vs(m,e.frame),!c||!it(e.geometryResource,c))throw Error("Report preview resource identity mismatch");for(const b of["frame","plane","sliceIndex","rotationAxis","angle","sectionPercent"])if(r.settings[b]!==e[b])throw Error("Report geometry/section mismatch")}const d=typeof e.geometryStatus?.reason=="string"?e.geometryStatus.reason.slice(0,500):r?"Exact-frame preview bytes verified":"No 3D evidence captured";return{frame:e.frame,plane:e.plane,sliceIndex:e.sliceIndex,rotationAxis:e.rotationAxis,angle:e.angle,sectionPercent:e.sectionPercent,selection:{subset:o.subset,grid:o.grid,metric:o.metric},geometry:r,geometryResource:c,geometryStatus:{status:r?"included":"unavailable",reason:d}}}function fs(e){if(e==null)return null;if(!["xmin","xmax","zmin","zmax"].every(a=>Aa(e[a]))||e.xmin>e.xmax||e.zmin>e.zmax)throw Error("Invalid report ROI");return Object.fromEntries(["xmin","xmax","zmin","zmax"].map(a=>[a,e[a]]))}function ut(e,a){if(e==null)return null;const[t,s]=a.shape,i=e.index;if(!Number.isInteger(i)||i<0||i>=t*s)throw Error("Invalid report probe");const o=a.originXYZ[0]+i%s*a.spacing,r=a.originXYZ[2]+Math.floor(i/s)*a.spacing;if(!Aa(e.x)||!Aa(e.z)||Math.abs(o-e.x)>1e-9||Math.abs(r-e.z)>1e-9)throw Error("Report probe/column mismatch");return{index:i,x:o,z:r}}function P0({bundle:e,spatial:a,view:t,roi:s=null,probe:i=null,catalog:o,diagnosis:r=null,appearance:c=null}){const d=a.descriptor,l=Oo(t,d,e,o),m=fs(s);if(c!=null&&typeof c.absoluteError!="boolean")throw Error("Invalid report appearance");let b=c?{appearance:{absoluteError:c.absoluteError}}:{};if(r){const u=No({...r,roi:m},d,ut(i,d));if(!a.common[u.hotspot.index])throw Error("Diagnosis hotspot is no longer jointly valid");const h=ia(a,u);b={...u.crest&&{crestMeasurement:Et({roi:m,profiles:h},u.crest)},diagnosis:u,appearance:{absoluteError:c?.absoluteError??!1},profiles:h,evidence:{frame:ta(a),roi:m?ta(a,m):null,first:ds(h.first,m),second:ds(h.second,m)}}}const v=l.plane==="xy"||l.plane==="yz"||l.plane==="oblique"&&l.rotationAxis==="y"?lo(a,{plane:l.plane,index:l.sliceIndex,angle:l.angle,sectionPercent:l.sectionPercent}):null;return M0({schema:As,...b,createdAt:new Date().toISOString(),source:Fo(e),descriptor:d,view:l,roi:m,probe:ut(i,d),global:_a(a),local:m?_a(a,m):null,profile:v,metrics:Io(e,{...l.selection,frame:l.frame}),frameMetrics:e.rows.find(u=>u.frame===l.frame),declarations:e.declarations,unitStatus:e.unitStatus,scope:"Native highest-crossing height columns; ROI/profile do not replace all96 global metrics. Units are source convention, not independently calibrated."})}function To(e,a,t,{catalog:s}={}){if(new TextEncoder().encode(e).length>1024*1024)throw Error("Report file too large");const i=JSON.parse(e);if(i?.schema!==As)throw Error("Unsupported protocol report format");if(!it(i.source,Fo(a)))throw Error("Report identity mismatch");const o=t.frames.find(c=>c.frameId===i.view?.frame);if(!o||!it(i.descriptor,o))throw Error("Report resource mismatch");let r={};if(i.appearance!=null){if(typeof i.appearance.absoluteError!="boolean")throw Error("Invalid report appearance");r.appearance={absoluteError:i.appearance.absoluteError}}if(i.diagnosis!=null){const c=ut(i.probe,o),d=fs(i.roi),l=No(i.diagnosis,o,c);if(!it(l.roi,d))throw Error("Diagnosis ROI mismatch");if(typeof i.appearance?.absoluteError!="boolean")throw Error("Invalid diagnosis appearance");r={diagnosis:l,appearance:{absoluteError:i.appearance.absoluteError}}}return{descriptor:o,...r,view:Oo(i.view,o,a,s),roi:fs(i.roi),probe:ut(i.probe,o)}}function R0(e){const a=s=>'"'+String(s==null?"":typeof s=="object"?JSON.stringify(s):s).replaceAll('"','""')+'"',t=[["kind","name","value","unit","scope","metadata"]];t.push(["source","snapshot",e.createdAt,"",e.schema,e.unitStatus]);for(const[s,i]of Object.entries(e.source))t.push(["source",s,i,"","identity",""]);t.push(["view","selection",e.view,"","current view",{roi:e.roi,probe:e.probe}],["source","declarations",e.declarations,"","claimed / verified / unknown",""]);for(const s of e.metrics)t.push(["metric",s.id,s.value,s.unit,s.scope,s]);for(const[s,i]of[["frame",e.global],["ROI",e.local]])if(i)for(const[o,r]of Object.entries(i))t.push(["spatial",o,r,o==="common"?"columns":"m",s,{frame:e.view.frame,roi:s==="ROI"?e.roi:null}]);e.diagnosis?.crest&&t.push(["crest pair",e.diagnosis.crest.status,e.crestMeasurement,"scene units","prediction minus GT along profile",e.diagnosis.crest]);for(const s of e.profile?.points??[])t.push(["profile","height A / B / difference",s,"m",e.profile.sampling,{frame:e.view.frame,plane:e.view.plane}]);if(e.diagnosis){t.push(["diagnosis","selection",e.diagnosis,"","native hotspot / current ROI",e.appearance]);for(const[s,i]of Object.entries(e.evidence))i&&t.push(["diagnostic evidence",s,i,"m; coverage fractions","explicit native or profile sample weighting",i.weighting??""]);for(const[s,i]of Object.entries(e.profiles))for(const o of i.points)t.push(["paired profile",s,o,"m",i.sampling,{frame:e.view.frame,anchor:i.anchor,direction:i.direction,roi:e.roi}])}return t.map(s=>s.map(a).join(",")).join(`
`)}function I0(e,a){return St({stem:`${e.source.runId}_${e.view.frame}_protocol-report`,record:e,csv:R0(e),previewUrl:a})}function St({stem:e,record:a,csv:t,previewUrl:s}){const i=[],o=r=>{const c=URL.createObjectURL(r);return i.push(c),c};try{const r={csv:{name:e+".csv",mime:"text/csv",content:t},json:{name:e+".json",mime:"application/json",content:JSON.stringify(a,null,2)}};if(s){if(!s.startsWith("data:image/png;base64,"))throw Error("PNG encoding failed");const c=Uint8Array.from(atob(s.slice(s.indexOf(",")+1)),l=>l.charCodeAt(0)),d=new Blob([c],{type:"image/png"});r.png={name:e+".png",mime:"image/png",blob:d,href:o(d)}}for(const c of["csv","json"]){const d=r[c];d.blob=new Blob([d.content],{type:d.mime+";charset=utf-8"}),d.href=o(d.blob)}return r}catch(r){for(const c of i)URL.revokeObjectURL(c);throw r}}const N0=JSON.parse('{"surface":{"schema":"oceanscope.protocol-report.v1","source":{"runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d","bundleSha256":"539734f929b2d3d4a53adb2563bc9598e1cc8efcd33439f8a39db052bafb28bd","declarationsSha256":"1d6bf2602f814aaf224c6bf570a8872405d7274bf4c6a9f063bab44d60aeaeec"},"descriptor":{"schemaVersion":1,"kind":"protocol-spatial-frame","runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d","frameId":1049,"shape":[128,224],"axisOrder":"ZX","originXYZ":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],"spacing":0.049999999148505836,"resources":{"heightA":{"file":"1049-heightA.bin","dtype":"float64-le","bytes":229376,"sha256":"24c95d7cdfa22d12d1baa44f16647a69b44fde83a51177b9c999d4111f751d9a"},"heightB":{"file":"1049-heightB.bin","dtype":"float64-le","bytes":229376,"sha256":"c8257805f4d3da79b0d2c5e336cea75c4b4bcfa66a55377dfe3da25004ad03b2"},"wetA":{"file":"1049-wetA.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"wetB":{"file":"1049-wetB.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"common":{"file":"1049-common.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"steep":{"file":"1049-steep.bin","dtype":"uint8","bytes":28672,"sha256":"2cf37c40b5fa4df751e05dfe9fe920a9a2efce396ff746978ff1e0c4f1b688db"},"calmCells":{"file":"1049-calmCells.bin","dtype":"uint8","bytes":28672,"sha256":"7cfdd3055066ff1620d4127ff4e0e4aaf6f94aeb6996731887065efac3533d22"},"breakingBand":{"file":"1049-breakingBand.bin","dtype":"uint8","bytes":28672,"sha256":"28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"},"calmBand":{"file":"1049-calmBand.bin","dtype":"uint8","bytes":28672,"sha256":"b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"}},"summary":{"common":19487,"mae_m":0.020208329793287478,"bias_m":-0.007192271702029772,"rmse_m":0.031439791153657054}},"view":{"frame":1049,"plane":"yz","sliceIndex":111,"rotationAxis":"y","angle":30,"sectionPercent":50,"selection":{"subset":"all","grid":"coarse","metric":"height"},"geometry":{"schema":"oceanscope.field-view.v1","name":"best-1027 · SDF · 1049 · YZ","sourceSignature":"{\\"comparison\\":\\"best-1027\\",\\"gt\\":\\"public-ground-truth\\",\\"prediction\\":\\"best-1027-reconstruction\\",\\"groups\\":[\\"sdf\\",\\"velocity\\"],\\"settings\\":{\\"activeGroup\\":\\"sdf\\",\\"previewOnly\\":false,\\"sdfEvaluationRegion\\":\\"full_domain\\",\\"sdf\\":{\\"gt\\":{\\"semantics\\":\\"full\\",\\"unit\\":\\"m\\",\\"validationMode\\":\\"local_pilot\\"},\\"prediction\\":{\\"semantics\\":\\"full\\",\\"unit\\":\\"m\\",\\"validationMode\\":\\"local_pilot\\"}},\\"velocity\\":{\\"gt\\":{\\"unit\\":\\"m/s\\"},\\"prediction\\":{\\"unit\\":\\"m/s\\"}},\\"heightComparison\\":{\\"surfaceValidated\\":true,\\"negativeInside\\":true,\\"upAxis\\":\\"Y\\",\\"coordinateUnit\\":\\"m\\",\\"frameTimeAligned\\":true,\\"basis\\":\\"Working pairing confirmed by user; local audited full-SDF pilot; see reconstructionEvaluation protocol.\\"}},\\"lattice\\":{\\"dimensions\\":[224,64,128],\\"origin\\":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],\\"axisSteps\\":[[0.049999999148505836,0,0],[0,0.049999999148505836,0],[0,0,0.049999999148505836]]},\\"directory\\":[{\\"group\\":\\"sdf\\",\\"name\\":\\"ground_truth\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"prediction\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"error\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"ground_truth\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"prediction\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"error\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"}],\\"frames\\":[1001,1049,1096]}","settings":{"rotationAxis":"y","shading":"original","caseId":"best-1027","frame":1049,"group":"sdf","mode":"split","quality":"balanced","component":"magnitude","plane":"yz","sliceIndex":111,"angle":30,"sectionPercent":50,"showPlane":true,"showContext":false,"showGt":true,"showPrediction":true,"gtOpacity":0.65,"predictionOpacity":0.8,"vectorDensity":2000,"arrowScale":1,"sourceRange":null,"errorScale":{"locked":false,"limit":1},"crosshair":[0.5,0.5],"playback":{"speed":1,"loop":false,"fps":24}},"camera":{"position":[8.120590815791608,9.983917335547375,14.345039351807678],"target":[-4.074999809265052,0.07499995268883719,0.6249998986189338],"up":[0,1,0],"fov":40,"zoom":1,"near":0.0006606199627135705,"far":274.66654008364844}},"geometryResource":{"frame":1049,"url":"/data/fields/best-1027/1049.ocfld.gz","packedBytes":26633403,"packedSha256":"1443fd356c49996f7b7bac3ab8d8ee9fc4b40d9a6d4a0734b2a0e6e2592c2548","decodedBytes":99523224,"decodedSha256":"ad0deb564ccd2db1fc91e4db9f711acaa8f6c231e3acca426773f8bb0cbf851a"},"geometryStatus":{"status":"included","reason":"Exact-frame preview bytes verified"}},"roi":{"xmin":-1.3499998556714843,"xmax":-0.34999987270136756,"zmin":1.44999988456928,"zmax":2.449999867539397},"probe":{"index":20336,"x":-0.8499998641864259,"z":1.9499998760543384},"diagnosis":{"caseNote":"案例A：GT局部峰附近预测偏低。检查峰高差异；邻近峰对应关系尚未独立确认。","version":1,"frame":1049,"resourceKey":"{\\"schemaVersion\\":1,\\"kind\\":\\"protocol-spatial-frame\\",\\"runId\\":\\"raw-reference-96-e81b8955734e\\",\\"protocolSha256\\":\\"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9\\",\\"manifestA\\":\\"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e\\",\\"manifestB\\":\\"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d\\",\\"frameId\\":1049,\\"shape\\":[128,224],\\"axisOrder\\":\\"ZX\\",\\"originXYZ\\":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],\\"spacing\\":0.049999999148505836,\\"resources\\":{\\"heightA\\":{\\"file\\":\\"1049-heightA.bin\\",\\"dtype\\":\\"float64-le\\",\\"bytes\\":229376,\\"sha256\\":\\"24c95d7cdfa22d12d1baa44f16647a69b44fde83a51177b9c999d4111f751d9a\\"},\\"heightB\\":{\\"file\\":\\"1049-heightB.bin\\",\\"dtype\\":\\"float64-le\\",\\"bytes\\":229376,\\"sha256\\":\\"c8257805f4d3da79b0d2c5e336cea75c4b4bcfa66a55377dfe3da25004ad03b2\\"},\\"wetA\\":{\\"file\\":\\"1049-wetA.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"wetB\\":{\\"file\\":\\"1049-wetB.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"common\\":{\\"file\\":\\"1049-common.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"steep\\":{\\"file\\":\\"1049-steep.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"2cf37c40b5fa4df751e05dfe9fe920a9a2efce396ff746978ff1e0c4f1b688db\\"},\\"calmCells\\":{\\"file\\":\\"1049-calmCells.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"7cfdd3055066ff1620d4127ff4e0e4aaf6f94aeb6996731887065efac3533d22\\"},\\"breakingBand\\":{\\"file\\":\\"1049-breakingBand.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747\\"},\\"calmBand\\":{\\"file\\":\\"1049-calmBand.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1\\"}},\\"summary\\":{\\"common\\":19487,\\"mae_m\\":0.020208329793287478,\\"bias_m\\":-0.007192271702029772,\\"rmse_m\\":0.031439791153657054}}","hotspot":{"ix":176,"iz":90,"index":20336,"x":-0.8499998641864259,"z":1.9499998760543384},"roi":{"xmin":-1.3499998556714843,"xmax":-0.34999987270136756,"zmin":1.44999988456928,"zmax":2.449999867539397},"directionDeg":0,"anchorMode":"hotspot"},"appearance":{"absoluteError":false}},"velocity":{"schema":"oceanscope.velocity-diagnosis.v1","source":{"caseId":"best-1027","codeRevision":"6941367eb0fe09eefefd34144ccd67ed9403b2d4","calculation":"native-xz-paired-v1","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","originals":{"gt":{"frame":1049,"file":"clean_fullsdf_vel.1049.vdb","bytes":11105671,"sha256":"a821ec84b9f2eecc09f234cdf05050e77e3572d6f9c3d46bce94d0a28f328df9","manifestSha256":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},"prediction":{"frame":1049,"file":"recon_fullsdf_vel.1049.vdb","bytes":10571839,"sha256":"ff18d054439135a9c39abc139aa628ca7dcb753dd46b389b86bde47747f5d4c3","manifestSha256":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},"resource":{"frame":1049,"url":"/data/velocity-raw/1049.ocfld.gz","packedBytes":15261605,"packedSha256":"913c1ddbec87d484f71905720334c90ca6ebccdad5c48a543f69eb405308e707","decodedBytes":62391416,"decodedSha256":"403ff5ea6e2afcd3129761caa6a5adf7f2699e180d1733e85774ea1a55df4ef1","roundtrip":"exact"}},"alignment":{"lattice":{"dimensions":[224,64,128],"origin":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],"axisSteps":[[0.049999999148505836,0,0],[0,0.049999999148505836,0],[0,0,0.049999999148505836]],"voxelSize":[0.049999999148505836,0.049999999148505836,0.049999999148505836]},"unitClaim":"m/s","unitEvidence":"Existing source convention only; no independent physical or time calibration.","vectorBasis":{"status":"source-convention","evidence":"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.","independentPhysicalCalibration":false}},"domain":{"id":"collaborator-native","definition":{"id":"collaborator-native","cropX":[11,212],"cropZ":[11,105],"gtSdfCutoffFloat32":-0.10000000149011612,"rule":"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"}},"plane":{"frame":1049,"axis":"xz","yIndex":28,"yWorld":-0.10000004433093324},"roi":{"xmin":-1.3499998556714843,"xmax":-0.34999987270136756,"zmin":1.44999988456928,"zmax":2.449999867539397},"probe":{"xIndex":176,"zIndex":90,"xyz":[-0.8499998641864259,-0.10000004433093324,1.9499998760543384]},"appearance":{"mode":"direction","zoom":true,"viewport":{"x":166,"z":80,"width":21,"height":21},"ranges":{"speed":[0,2.872923899598361],"vectorError":[0,2.0896808971216365],"speedDelta":[-1.750984564815481,1.750984564815481],"direction":[0,180]}},"arrows":{"enabled":true,"stride":4,"gain":1.0036370012923275,"referenceSpeed":2.8695633942267817,"referenceGridLength":2.8800000000000003},"angleThreshold":{"tau":1e-8,"unit":"m/s (source convention)","source":"legacy preview numerical epsilon"},"surfaceCase":{"frame":1049,"hotspotXZ":{"x":-0.8499998641864259,"z":1.9499998760543384},"roiXZ":{"xmin":-1.3499998556714843,"xmax":-0.34999987270136756,"zmin":1.44999988456928,"zmax":2.449999867539397},"surfaceCaseId":"raw-reference-96-e81b8955734e","caseNote":"案例A：GT局部峰附近预测偏低。检查峰高差异；邻近峰对应关系尚未独立确认。","surfaceIdentity":{"runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}}},"inputs":{"surface":"08357988a2ccd4a522f7052a244ca2f811ee2630dab791a5e1f1a5a8399f7615","velocity":"b1205b882a060f69d1e5598f2c2a30858bfb0c77e16817cae12780b05ba074e8"}}'),F0=JSON.parse('{"surface":{"schema":"oceanscope.protocol-report.v1","source":{"runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d","bundleSha256":"539734f929b2d3d4a53adb2563bc9598e1cc8efcd33439f8a39db052bafb28bd","declarationsSha256":"1d6bf2602f814aaf224c6bf570a8872405d7274bf4c6a9f063bab44d60aeaeec"},"descriptor":{"schemaVersion":1,"kind":"protocol-spatial-frame","runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d","frameId":1049,"shape":[128,224],"axisOrder":"ZX","originXYZ":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],"spacing":0.049999999148505836,"resources":{"heightA":{"file":"1049-heightA.bin","dtype":"float64-le","bytes":229376,"sha256":"24c95d7cdfa22d12d1baa44f16647a69b44fde83a51177b9c999d4111f751d9a"},"heightB":{"file":"1049-heightB.bin","dtype":"float64-le","bytes":229376,"sha256":"c8257805f4d3da79b0d2c5e336cea75c4b4bcfa66a55377dfe3da25004ad03b2"},"wetA":{"file":"1049-wetA.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"wetB":{"file":"1049-wetB.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"common":{"file":"1049-common.bin","dtype":"uint8","bytes":28672,"sha256":"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0"},"steep":{"file":"1049-steep.bin","dtype":"uint8","bytes":28672,"sha256":"2cf37c40b5fa4df751e05dfe9fe920a9a2efce396ff746978ff1e0c4f1b688db"},"calmCells":{"file":"1049-calmCells.bin","dtype":"uint8","bytes":28672,"sha256":"7cfdd3055066ff1620d4127ff4e0e4aaf6f94aeb6996731887065efac3533d22"},"breakingBand":{"file":"1049-breakingBand.bin","dtype":"uint8","bytes":28672,"sha256":"28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747"},"calmBand":{"file":"1049-calmBand.bin","dtype":"uint8","bytes":28672,"sha256":"b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1"}},"summary":{"common":19487,"mae_m":0.020208329793287478,"bias_m":-0.007192271702029772,"rmse_m":0.031439791153657054}},"view":{"frame":1049,"plane":"yz","sliceIndex":111,"rotationAxis":"y","angle":30,"sectionPercent":50,"selection":{"subset":"all","grid":"coarse","metric":"height"},"geometry":{"schema":"oceanscope.field-view.v1","name":"best-1027 · SDF · 1049 · YZ","sourceSignature":"{\\"comparison\\":\\"best-1027\\",\\"gt\\":\\"public-ground-truth\\",\\"prediction\\":\\"best-1027-reconstruction\\",\\"groups\\":[\\"sdf\\",\\"velocity\\"],\\"settings\\":{\\"activeGroup\\":\\"sdf\\",\\"previewOnly\\":false,\\"sdfEvaluationRegion\\":\\"full_domain\\",\\"sdf\\":{\\"gt\\":{\\"semantics\\":\\"full\\",\\"unit\\":\\"m\\",\\"validationMode\\":\\"local_pilot\\"},\\"prediction\\":{\\"semantics\\":\\"full\\",\\"unit\\":\\"m\\",\\"validationMode\\":\\"local_pilot\\"}},\\"velocity\\":{\\"gt\\":{\\"unit\\":\\"m/s\\"},\\"prediction\\":{\\"unit\\":\\"m/s\\"}},\\"heightComparison\\":{\\"surfaceValidated\\":true,\\"negativeInside\\":true,\\"upAxis\\":\\"Y\\",\\"coordinateUnit\\":\\"m\\",\\"frameTimeAligned\\":true,\\"basis\\":\\"Working pairing confirmed by user; local audited full-SDF pilot; see reconstructionEvaluation protocol.\\"}},\\"lattice\\":{\\"dimensions\\":[224,64,128],\\"origin\\":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],\\"axisSteps\\":[[0.049999999148505836,0,0],[0,0.049999999148505836,0],[0,0,0.049999999148505836]]},\\"directory\\":[{\\"group\\":\\"sdf\\",\\"name\\":\\"ground_truth\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"prediction\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"error\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"sdf\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.x\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.y\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error.z\\",\\"unit\\":\\"m/s\\"},{\\"group\\":\\"velocity\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"ground_truth\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"ground_truth_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"prediction\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"prediction_valid\\",\\"unit\\":\\"\\"},{\\"group\\":\\"height\\",\\"name\\":\\"error\\",\\"unit\\":\\"m\\"},{\\"group\\":\\"height\\",\\"name\\":\\"error_valid\\",\\"unit\\":\\"\\"}],\\"frames\\":[1001,1049,1096]}","settings":{"rotationAxis":"y","shading":"original","caseId":"best-1027","frame":1049,"group":"sdf","mode":"split","quality":"balanced","component":"magnitude","plane":"yz","sliceIndex":111,"angle":30,"sectionPercent":50,"showPlane":true,"showContext":false,"showGt":true,"showPrediction":true,"gtOpacity":0.65,"predictionOpacity":0.8,"vectorDensity":2000,"arrowScale":1,"sourceRange":null,"errorScale":{"locked":false,"limit":1},"crosshair":[0.5,0.5],"playback":{"speed":1,"loop":false,"fps":24}},"camera":{"position":[8.120590815791608,9.983917335547375,14.345039351807678],"target":[-4.074999809265052,0.07499995268883719,0.6249998986189338],"up":[0,1,0],"fov":40,"zoom":1,"near":0.0006606199627135705,"far":274.66654008364844}},"geometryResource":{"frame":1049,"url":"/data/fields/best-1027/1049.ocfld.gz","packedBytes":26633403,"packedSha256":"1443fd356c49996f7b7bac3ab8d8ee9fc4b40d9a6d4a0734b2a0e6e2592c2548","decodedBytes":99523224,"decodedSha256":"ad0deb564ccd2db1fc91e4db9f711acaa8f6c231e3acca426773f8bb0cbf851a"},"geometryStatus":{"status":"included","reason":"Exact-frame preview bytes verified"}},"roi":{"xmin":-1.449999853968496,"xmax":-0.44999987099837924,"zmin":0.39999990245065753,"zmax":1.3999998854207742},"probe":{"index":15630,"x":-0.9499998624834376,"z":0.8999998939357159},"diagnosis":{"caseNote":"案例B：沿X局部窗口内，GT与预测峰顶位置不同，峰高也不同；该观察不等于纯平移误差，也不构成自动峰配对。","version":1,"frame":1049,"resourceKey":"{\\"schemaVersion\\":1,\\"kind\\":\\"protocol-spatial-frame\\",\\"runId\\":\\"raw-reference-96-e81b8955734e\\",\\"protocolSha256\\":\\"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9\\",\\"manifestA\\":\\"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e\\",\\"manifestB\\":\\"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d\\",\\"frameId\\":1049,\\"shape\\":[128,224],\\"axisOrder\\":\\"ZX\\",\\"originXYZ\\":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],\\"spacing\\":0.049999999148505836,\\"resources\\":{\\"heightA\\":{\\"file\\":\\"1049-heightA.bin\\",\\"dtype\\":\\"float64-le\\",\\"bytes\\":229376,\\"sha256\\":\\"24c95d7cdfa22d12d1baa44f16647a69b44fde83a51177b9c999d4111f751d9a\\"},\\"heightB\\":{\\"file\\":\\"1049-heightB.bin\\",\\"dtype\\":\\"float64-le\\",\\"bytes\\":229376,\\"sha256\\":\\"c8257805f4d3da79b0d2c5e336cea75c4b4bcfa66a55377dfe3da25004ad03b2\\"},\\"wetA\\":{\\"file\\":\\"1049-wetA.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"wetB\\":{\\"file\\":\\"1049-wetB.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"common\\":{\\"file\\":\\"1049-common.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"6afc83d7dee3970f9b0ebfc79269bf15bc5cfeebadc339f327a3483d901406a0\\"},\\"steep\\":{\\"file\\":\\"1049-steep.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"2cf37c40b5fa4df751e05dfe9fe920a9a2efce396ff746978ff1e0c4f1b688db\\"},\\"calmCells\\":{\\"file\\":\\"1049-calmCells.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"7cfdd3055066ff1620d4127ff4e0e4aaf6f94aeb6996731887065efac3533d22\\"},\\"breakingBand\\":{\\"file\\":\\"1049-breakingBand.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"28b06f903683c67a6596196eb098e4b5b3a03743f102fefbebe2fccd284d2747\\"},\\"calmBand\\":{\\"file\\":\\"1049-calmBand.bin\\",\\"dtype\\":\\"uint8\\",\\"bytes\\":28672,\\"sha256\\":\\"b4ae9dd24a667f7546ee19dc7bd2ddc69a46f533a03326ab59c0a1abc4a580d1\\"}},\\"summary\\":{\\"common\\":19487,\\"mae_m\\":0.020208329793287478,\\"bias_m\\":-0.007192271702029772,\\"rmse_m\\":0.031439791153657054}}","hotspot":{"ix":174,"iz":69,"index":15630,"x":-0.9499998624834376,"z":0.8999998939357159},"roi":{"xmin":-1.449999853968496,"xmax":-0.44999987099837924,"zmin":0.39999990245065753,"zmax":1.3999998854207742},"directionDeg":0,"anchorMode":"hotspot"},"appearance":{"absoluteError":true}},"velocity":{"schema":"oceanscope.velocity-diagnosis.v1","source":{"caseId":"best-1027","codeRevision":"6941367eb0fe09eefefd34144ccd67ed9403b2d4","calculation":"native-xz-paired-v1","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","originals":{"gt":{"frame":1049,"file":"clean_fullsdf_vel.1049.vdb","bytes":11105671,"sha256":"a821ec84b9f2eecc09f234cdf05050e77e3572d6f9c3d46bce94d0a28f328df9","manifestSha256":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},"prediction":{"frame":1049,"file":"recon_fullsdf_vel.1049.vdb","bytes":10571839,"sha256":"ff18d054439135a9c39abc139aa628ca7dcb753dd46b389b86bde47747f5d4c3","manifestSha256":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},"resource":{"frame":1049,"url":"/data/velocity-raw/1049.ocfld.gz","packedBytes":15261605,"packedSha256":"913c1ddbec87d484f71905720334c90ca6ebccdad5c48a543f69eb405308e707","decodedBytes":62391416,"decodedSha256":"403ff5ea6e2afcd3129761caa6a5adf7f2699e180d1733e85774ea1a55df4ef1","roundtrip":"exact"}},"alignment":{"lattice":{"dimensions":[224,64,128],"origin":[-9.649999714323453,-1.5000000204890966,-2.550000047311187],"axisSteps":[[0.049999999148505836,0,0],[0,0.049999999148505836,0],[0,0,0.049999999148505836]],"voxelSize":[0.049999999148505836,0.049999999148505836,0.049999999148505836]},"unitClaim":"m/s","unitEvidence":"Existing source convention only; no independent physical or time calibration.","vectorBasis":{"status":"source-convention","evidence":"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.","independentPhysicalCalibration":false}},"domain":{"id":"collaborator-native","definition":{"id":"collaborator-native","cropX":[11,212],"cropZ":[11,105],"gtSdfCutoffFloat32":-0.10000000149011612,"rule":"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"}},"plane":{"frame":1049,"axis":"xz","yIndex":28,"yWorld":-0.10000004433093324},"roi":{"xmin":-1.449999853968496,"xmax":-0.44999987099837924,"zmin":0.39999990245065753,"zmax":1.3999998854207742},"probe":{"xIndex":174,"zIndex":69,"xyz":[-0.9499998624834376,-0.10000004433093324,0.8999998939357159]},"appearance":{"mode":"speedDelta","zoom":true,"viewport":{"x":164,"z":59,"width":21,"height":21},"ranges":{"speed":[0,2.872923899598361],"vectorError":[0,2.0896808971216365],"speedDelta":[-1.750984564815481,1.750984564815481],"direction":[0,180]}},"arrows":{"enabled":true,"stride":4,"gain":1.0036370012923275,"referenceSpeed":2.8695633942267817,"referenceGridLength":2.8800000000000003},"angleThreshold":{"tau":0.2,"unit":"m/s (source convention)","source":"user diagnostic input"},"surfaceCase":{"frame":1049,"hotspotXZ":{"x":-0.9499998624834376,"z":0.8999998939357159},"roiXZ":{"xmin":-1.449999853968496,"xmax":-0.44999987099837924,"zmin":0.39999990245065753,"zmax":1.3999998854207742},"surfaceCaseId":"raw-reference-96-e81b8955734e","caseNote":"案例B：沿X局部窗口内，GT与预测峰顶位置不同，峰高也不同；该观察不等于纯平移误差，也不构成自动峰配对。","surfaceIdentity":{"runId":"raw-reference-96-e81b8955734e","protocolSha256":"4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9","manifestA":"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e","manifestB":"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}}},"inputs":{"surface":"301fb43b2c3db75b05a1b5426bd735e8bd95252b3df0c4b95cb1d9324dc2b0ec","velocity":"d9b2d13b48884f23ae57dab94fb1b3d4a1bb7bf9d422ccf4f46be7e15dbb6de5"}}'),ms={A:N0,B:F0},ka=`{
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
`;async function ks(e,{signal:a}={}){const t=Xn(e);if(!t)throw Error("No verified velocity diagnostic resource for this frame");let s;{const o=await Ql(t.resource);if(!o)throw Object.assign(new Error(`请选择本机文件 / Select ${e}.ocfld.gz`),{code:"VELOCITY_FILE_REQUIRED"});s=await o.arrayBuffer()}a?.throwIfAborted();const i=_o(await xs(s,t.resource));return a?.throwIfAborted(),{frame:i,lattice:t.lattice,alignment:t}}const Do=["collaborator-native","common-finite-exploration"];function zo({frame:e,lattice:a,alignment:t,domain:s}){if(!Do.includes(s))throw Error("Unknown velocity domain");if(s==="collaborator-native"&&!t?.dataAndDomainVerified)throw Error("Velocity domain has not been verified");const i=a?.dimensions,o=a?.origin,r=a?.axisSteps;if(!i||i.length!==3||i.some(u=>!Number.isInteger(u)||u<1)||!o||o.some(u=>!Number.isFinite(u))||!r||r.length!==3||r.some((u,h)=>u.length!==3||u.some((f,p)=>!Number.isFinite(f)||(h===p?f<=0:f!==0))))throw Error("Unsupported velocity lattice");const c=e?.groups?.velocity,d=e?.groups?.sdf?.ground_truth;if([d,c?.ground_truth_valid,c?.prediction_valid,...["ground_truth","prediction"].flatMap(u=>[..."xyz"].map(h=>c?.[u+"."+h]))].some(u=>!u||u.shape?.length!==3||u.shape.some((h,f)=>h!==i[f])||u.values?.length!==i[0]*i[1]*i[2]))throw Error("Velocity field shape mismatch");const m=t?.domainDefinition?.cropX??[11,212],b=t?.domainDefinition?.cropZ??[11,105];function v(u,h,f){const p=u+i[0]*(h+i[1]*f),_=s!=="collaborator-native"||u>=m[0]&&u<m[1]&&f>=b[0]&&f<b[1],C=_&&c.ground_truth_valid.values[p]>0&&(s!=="collaborator-native"||d.values[p]<Math.fround(-.1)),w=_&&c.prediction_valid.values[p]>0,g=C&&w,E=[..."xyz"].map(A=>c["ground_truth."+A].values[p]),x=[..."xyz"].map(A=>c["prediction."+A].values[p]),S=[...E,...x].every(Number.isFinite);return{candidate:_,gtEligible:C,predValid:w,paired:g,common:g&&S,nonfiniteExcluded:g&&!S,gt:E,pred:x}}return{d:i,o,a:r,sample:v,world:(u,h,f)=>o.map((p,_)=>p+r[0][_]*u+r[1][_]*h+r[2][_]*f)}}function Ms(e,{x:a,z:t}){return[Math.round((a-e.origin[0])/e.axisSteps[0][0]),Math.round((t-e.origin[2])/e.axisSteps[2][2])]}function O0(e){const{d:a,sample:t}=zo(e),[s,i]=Ms(e.lattice,e.hotspotXZ);if(s<0||s>=a[0]||i<0||i>=a[2])return null;for(let o=a[1]-1;o>=0;o--)if(t(s,o,i).common)return o;return null}function Ps(e){if(e.plane!=="xz")throw Error("Velocity diagnosis supports XZ slices only");const{d:a,a:t,world:s,sample:i}=zo(e),[o,r,c]=a,d=e.sliceIndex;if(!Number.isInteger(d)||d<0||d>=r)throw Error("Velocity Y index is outside the grid");const l=e.roiXZ;if(l&&(Object.values(l).length!==4||["xmin","xmax","zmin","zmax"].some(g=>!Number.isFinite(l[g]))||l.xmin>l.xmax||l.zmin>l.zmax))throw Error("Invalid velocity ROI bounds");const m={domain:e.domain,width:o,height:c,sliceIndex:d,stepX:t[0][0],stepZ:t[2][2],worldAt:g=>s(g%o,d,Math.floor(g/o)),roiView:null};for(const g of["speedGT","speedPred","vectorError","speedDelta"])m[g]=new Float64Array(o*c).fill(NaN);for(const g of["candidate","gtEligible","common","roi"])m[g+"Mask"]=new Uint8Array(o*c);m.vectorsGT=new Float64Array(3*o*c),m.vectorsPred=new Float64Array(3*o*c);const b=()=>({counts:{candidate:0,gtEligible:0,predValid:0,paired:0,common:0,nonfiniteExcluded:0,gtOnly:0,predOnly:0},sumE:0,sumDelta:0,maximum:null}),v=b(),u=b();function h(g,E,x){for(const S of["candidate","gtEligible","predValid","paired","common","nonfiniteExcluded"])g.counts[S]+=Number(E[S]);if(g.counts.gtOnly+=Number(E.gtEligible&&!E.predValid),g.counts.predOnly+=Number(E.predValid&&!E.gtEligible),E.common){const S=m.vectorError[x];g.sumE+=S,g.sumDelta+=m.speedDelta[x],(!g.maximum||S>g.maximum.value)&&(g.maximum={value:S,index:x,world:m.worldAt(x)})}}let f=o,p=-1,_=c,C=-1;for(let g=0;g<c;g++)for(let E=0;E<o;E++){const x=E+o*g,S=i(E,d,g),[B,,A]=s(E,d,g);for(const y of["candidate","gtEligible","common"])m[y+"Mask"][x]=Number(S[y]);S.common&&(m.vectorsGT.set(S.gt,3*x),m.vectorsPred.set(S.pred,3*x),m.speedGT[x]=Math.hypot(...S.gt),m.speedPred[x]=Math.hypot(...S.pred),m.vectorError[x]=Math.hypot(...S.pred.map((y,M)=>y-S.gt[M])),m.speedDelta[x]=m.speedPred[x]-m.speedGT[x]),h(v,S,x),(!l||B>=l.xmin&&B<=l.xmax&&A>=l.zmin&&A<=l.zmax)&&(h(u,S,x),m.roiMask[x]=1,f=Math.min(f,E),p=Math.max(p,E),_=Math.min(_,g),C=Math.max(C,g))}p>=0&&(m.roiView={x:f,z:_,width:p-f+1,height:C-_+1});function w(g){const E=g.counts;return{counts:E,coverageCandidate:E.candidate?E.common/E.candidate:null,coverageGT:E.gtEligible?E.common/E.gtEligible:null,meanE:E.common?g.sumE/E.common:null,meanSpeedDelta:E.common?g.sumDelta/E.common:null,maximum:g.maximum}}return m.whole=w(v),m.local=w(u),m}function Rs(e,a){if(a!==null&&(!Number.isFinite(a)||a<0))throw Error("Invalid direction threshold");const{commonMask:t,roiMask:s,vectorsGT:i,vectorsPred:o,speedGT:r,speedPred:c}=e,d=new Float64Array(t.length).fill(NaN),l=new Uint8Array(t.length);let m=0,b=0,v=0,u=0;if(a!==null)for(let f=0;f<t.length;f++){if(!t[f])continue;const p=xr(i,o,r[f],c[f],a,3*f);p!==null&&(d[f]=p,l[f]=1,v++,m+=p,s[f]&&(u++,b+=p))}const h=(f,p,_)=>({count:f,excludedLowSpeedCount:a===null?null:_-f,meanDegrees:f?p/f:null});return{degrees:d,mask:l,whole:h(v,m,e.whole.counts.common),local:h(u,b,e.local.counts.common)}}function Is(e,a,t,s,i=4){const{width:o,commonMask:r,vectorsGT:c,vectorsPred:d,stepX:l,stepZ:m}=e;let b=s??0;for(let p=0;s===void 0&&p<r.length;p++)r[p]&&(b=Math.max(b,Math.hypot(c[3*p],c[3*p+2]),Math.hypot(d[3*p],d[3*p+2])));const v=b>0?.72*i/b:0,u=Math.min(l,m),h=p=>[p[0]*v*u/l,p[2]*v*u/m],f=[];for(let p=Math.ceil(a.z/t)*t;p<a.z+a.height;p+=t)for(let _=Math.ceil(a.x/t)*t;_<a.x+a.width;_+=t){const C=_+o*p;if(!r[C])continue;const w=Array.from(c.subarray(3*C,3*C+3)),g=Array.from(d.subarray(3*C,3*C+3));f.push({index:C,x:_,z:p,gt:w,pred:g,gtOffset:h(w),predOffset:h(g)})}return{points:f,stride:t,gain:v,maxProjection:b,referenceSpeed:b,referenceGridLength:h([b,0,0])[0]}}const Ns="oceanscope.velocity-diagnosis.v1",Vo="native-xz-paired-v1",T0=["vectorError","speedDelta","direction"],Hi=["xmin","xmax","zmin","zmax"],na=(e,a)=>a&&typeof a=="object"?e&&typeof e=="object"&&(!Array.isArray(a)||Array.isArray(e)&&e.length===a.length)&&Object.keys(a).every(t=>na(e[t],a[t])):e===a,pa=(e,a)=>Number.isInteger(e)&&e>=0&&e<a;function Li(e){if(!e||Hi.some(a=>!Number.isFinite(e[a]))||e.xmin>e.xmax||e.zmin>e.zmax)throw Error("Velocity report ROI is invalid");return Object.fromEntries(Hi.map(a=>[a,e[a]]))}function qi(e,a,t,s=new Date().toISOString()){const{display:i,direction:o,probe:r}=e,[c]=a.lattice.dimensions,{arrows:d}=i;return structuredClone({schema:Ns,createdAt:s,source:{caseId:a.caseId,codeRevision:t,calculation:Vo,protocolSha256:a.protocolSha256,originals:a.source,resource:a.resource},alignment:{lattice:a.lattice,unitClaim:a.unitClaim,unitEvidence:a.unitEvidence,vectorBasis:a.vectorBasis},domain:{id:e.domain,definition:e.domainDefinition},plane:{frame:a.frame,axis:"xz",yIndex:e.yIndex,yWorld:e.yWorld},roi:e.roiXZ,probe:{xIndex:r.index%c,zIndex:Math.floor(r.index/c),xyz:r.xyz},appearance:{mode:i.mode,zoom:i.zoomed,viewport:i.view,ranges:i.ranges},arrows:{scaleCells:i.scaleCells??4,enabled:d!==null,stride:d?.stride??null,gain:d?.gain??null,referenceSpeed:d?.referenceSpeed??null,referenceGridLength:d?.referenceGridLength??null},angleThreshold:{tau:o.tau,unit:o.unit,source:o.thresholdSource},summary:{whole:e.whole,roi:e.local,direction:{whole:o.whole,roi:o.local}},samples:{scope:"Probe and displayed arrow anchors. CSV contains the full native slice.",probe:r,arrowNativeIndices:d?.points.map(l=>l.index)??[]},surfaceCase:e.surfaceRequest,...e.streamlines&&{streamlines:e.streamlines}})}function Wo(e,{alignment:a,caseId:t,runId:s}){if(new TextEncoder().encode(e).length>1024*1024)throw Error("Velocity report too large");let i;try{i=JSON.parse(e)}catch{throw Error("Invalid analysis JSON")}if(i?.schema!==Ns)throw Error("Unsupported velocity report");const{source:o,plane:r,appearance:c,arrows:d,probe:l,surfaceCase:m,angleThreshold:b}=i,v=a??Xn(r?.frame);if(!v||t!==v.caseId||!na(o,{caseId:t,calculation:Vo,protocolSha256:v.protocolSha256,originals:v.source,resource:v.resource})||!na(i.alignment,{lattice:v.lattice,unitClaim:v.unitClaim,unitEvidence:v.unitEvidence,vectorBasis:v.vectorBasis})||r?.frame!==v.frame)throw Error("Velocity report source identity mismatch");const[u,h,f]=v.lattice.dimensions;if(r.axis!=="xz"||!pa(r.yIndex,h)||!pa(l?.xIndex,u)||!pa(l?.zIndex,f))throw Error("Velocity report slice or probe is outside the native lattice");if(!Do.includes(i.domain?.id)||!T0.includes(c?.mode)||typeof c.zoom!="boolean"||typeof d?.enabled!="boolean")throw Error("Velocity report display settings are invalid");const p=c.zoom?4:16,_=Math.min(p,c.viewport?.width??u,c.viewport?.height??f),C=d.scaleCells??_;if(!Number.isInteger(C)||C<1||C>16)throw Error("Velocity report arrow reference span is invalid");const w=b?.tau;if(w!==null&&(!Number.isFinite(w)||w<0))throw Error("Velocity report threshold is invalid");const g=Li(i.roi),E=Li(m?.roiXZ),x=m?.hotspotXZ,S={runId:s,protocolSha256:v.protocolSha256,manifestA:v.source.gt.manifestSha256,manifestB:v.source.prediction.manifestSha256};if(!s||m?.frame!==v.frame||m?.surfaceCaseId!==s||!na(m?.surfaceIdentity,S)||!Number.isFinite(x?.x)||!Number.isFinite(x?.z))throw Error("Velocity report surface reference identity mismatch");const[B,A]=Ms(v.lattice,x),y=i.streamlines?.stepFraction;if(i.streamlines!==void 0&&(v.frame!==1049||i.domain.id!=="collaborator-native"||![.125,.25].includes(y)))throw Error("Velocity report streamline step or frame is invalid");if(!pa(B,u)||!pa(A,f)||typeof m.caseNote!="string"||m.caseNote.length>1e3)throw Error("Velocity report surface hotspot or note is invalid");return{request:{frame:v.frame,hotspotXZ:{x:x.x,z:x.z},roiXZ:E,surfaceCaseId:s,caseNote:m.caseNote,surfaceIdentity:S},view:{scaleCells:C,domain:i.domain.id,y:r.yIndex,roi:g,probe:[l.xIndex,l.zIndex],mode:c.mode,zoom:c.zoom,showArrows:d.enabled,tau:w,...y&&{streamlineStepFraction:y}}}}async function $o(e,a,t,s=ks){t.throwIfAborted();const i=Wo(e,a),o=a.alignment??Xn(i.request.frame),r=await s(i.request.frame,{signal:t});if(t.throwIfAborted(),!na(r.alignment,o)||!na(r.lattice,o.lattice))throw Error("Velocity report loaded identity mismatch");return{...i,loaded:r}}function D0(e,a,t){const{plane:s,domain:i}=e,o=new Set(e.samples.arrowNativeIndices),r=["frame,y_index,native_index,x_index,z_index,x,y,z,domain,in_roi,candidate,gt_eligible,common,probe,arrow_anchor,gt_vx,gt_vy,gt_vz,pred_vx,pred_vy,pred_vz,gt_speed,pred_speed,vector_error,speed_delta,direction_tau,angle_eligible,angle_degrees"];for(let c=0;c<a.commonMask.length;c++){const d=a.commonMask[c],l=t.mask[c],m=d?[...a.vectorsGT.subarray(3*c,3*c+3),...a.vectorsPred.subarray(3*c,3*c+3),a.speedGT[c],a.speedPred[c],a.vectorError[c],a.speedDelta[c]]:Array(10).fill("");r.push([s.frame,s.yIndex,c,c%a.width,Math.floor(c/a.width),...a.worldAt(c),i.id,a.roiMask[c],a.candidateMask[c],a.gtEligibleMask[c],d,+(c===e.samples.probe.index),Number(o.has(c)),...m,e.angleThreshold.tau,l,l?t.degrees[c]:""].join(","))}return r.join(`
`)+`
`}function Xo(e,a,t=.25){const{width:s,height:i,stepX:o,stepZ:r,commonMask:c}=e,d=Math.min(o,r),l=d*t,m=d,b=24*d,v=Math.round(b/l),u=1e-8,h=E=>{const[x,,S]=e.worldAt(0);return[x+E[0]*o,S+E[1]*r]};function f(E,x){const[S,B]=E;if(S<0||B<0||S>=s-1||B>=i-1)return{stop:"grid"};const A=Math.floor(S)+s*Math.floor(B),y=S%1,M=B%1,k=[A,A+1,A+s,A+s+1],I=[(1-y)*(1-M),y*(1-M),(1-y)*M,y*M];if(k.some(G=>!c[G]))return{stop:"mask"};const F=G=>k.reduce((ae,T,N)=>ae+I[N]*x[T*3+G],0),V=F(0),K=F(2),W=Math.hypot(V,K);return W<=u?{stop:"slow"}:{dir:[V/W/o,K/W/r]}}const p=(E,x,S)=>[E[0]+S*x[0],E[1]+S*x[1]];function _(E){const x=[];let S=a;for(let B=0;B<=v;B++){const A=f(S,E);if(A.stop)return{points:x,stop:A.stop};if(x.push(h(S)),B===v)return{points:x,stop:"limit"};const y=f(p(S,A.dir,l/2),E);if(y.stop)return{points:x,stop:y.stop};const M=p(S,y.dir,l),k=[0,1];for(let I=0;I<2;I++)for(let F=Math.floor(Math.min(S[I],M[I]))+1;F<Math.max(S[I],M[I]);F++)k.push((F-S[I])/(M[I]-S[I]));k.sort((I,F)=>I-F);for(let I=1;I<k.length;I++){const F=f(p(S,y.dir,l*(k[I]+k[I-1])/2),E);if(F.stop)return{points:x,stop:F.stop}}S=M}}const C=_(e.vectorsGT),w=_(e.vectorsPred);let g=null;for(let E=1;E<Math.min(C.points.length,w.points.length);E++){const x=C.points[E],S=w.points[E],B=Math.hypot(x[0]-S[0],x[1]-S[1]);if(B>=m){g={i:E,arc:E*l,gap:B,gt:x,pred:S};break}}return{seed:h(a),step:l,separation:m,maxArc:b,floor:u,gt:C,pred:w,split:g}}const z0="oceanscope.paired-case.v1",V0={plane:"xz",direction:"forward",method:"normalized-midpoint-rk2",interpolation:"bilinear-four-common",separationCells:1,maxArcCells:24,speedFloor:1e-8},ua=e=>JSON.stringify(e,(a,t)=>t&&typeof t=="object"&&!Array.isArray(t)?Object.fromEntries(Object.keys(t).sort().map(s=>[s,t[s]])):t);function ht(e,a=.25){if(!Object.hasOwn(ms,e)||![.125,.25].includes(a))throw Error("Unknown 1049 case or integration step");const t=ms[e],i={...t.surface,source:{...t.surface.source,declarationsSha256:"b4b0602325141df1c3f185e1578e94eca1b627b3cedd1c96f5401291e574843c"}};return{schema:z0,id:e,...t,surface:i,integration:{...V0,stepFraction:a}}}async function W0(e,a,t,s){const i=ht(e.id,e.integration?.stepFraction);for(const A of Object.keys(i))if(ua(e[A])!==ua(i[A]))throw Error("1049 case settings or source identity mismatch: "+A);const o=await lt(ka,dt.indexSha256,a),r=To(JSON.stringify(i.surface),a,o,{catalog:t}),[c,d]=await Promise.all([Ca(r.descriptor,{...aa(a),frameId:1049},s),$o(JSON.stringify(i.velocity),{caseId:t[0].id,runId:a.runId},s)]);s.throwIfAborted();const{hotspot:l}=r.diagnosis,{request:m,view:b,loaded:v}=d;if(r.view.frame!==m.frame||l.x!==m.hotspotXZ.x||l.z!==m.hotspotXZ.z||!c.common[l.index]||ua(r.roi)!==ua(m.roiXZ)||l.ix!==b.probe[0]||l.iz!==b.probe[1])throw Error("Surface and velocity selections do not coincide");const u=Ps({...v,plane:"xz",sliceIndex:b.y,domain:b.domain,roiXZ:b.roi}),h=b.zoom?u.roiView:{x:0,z:0,width:u.width,height:u.height},f=Rs(u,b.tau),p=b.showArrows?Is(u,h,b.zoom?4:16,void 0,b.scaleCells):null,_=ia(c,r.diagnosis),C=ta(c,r.roi),w=[c.heightA[l.index],c.heightB[l.index]],g=u.worldAt(0)[1],E=e.crest;E!==void 0&&sa({...r,profiles:_},E);const x=new TextEncoder().encode(ua(ms[i.id])),S=await crypto.subtle.digest("SHA-256",x),B=Array.from(new Uint8Array(S),A=>A.toString(16).padStart(2,"0")).join("");return{settings:i,presetSha:B,mark:E,surface:{...r,profiles:_},spatial:c,slice:u,angles:f,arrows:p,height:C,surfaceY:w,velocityY:g,view:b}}function $0(e,a){const t=Xo(e.slice,e.view.probe,a),i={...ht(e.settings.id,a),codeRevision:"7c92619c5c85e61bcbcde34c618e86fbf5fa5b4e",evidence:{surfaceY:e.surfaceY,velocityY:e.velocityY,heightROI:e.height,velocityROI:e.slice.local,profiles:e.surface.profiles,streamlines:t}};return e.mark&&(i.crest=e.mark,i.evidence.crests=sa(e.surface,e.mark)),{record:i,pair:t}}function X0(e,a){const t=[["kind","role","index","x","y","z","arc_or_distance","GT","prediction","difference","vx","vy","vz","stop"]],s=e.surface.diagnosis.hotspot;t.push(["surface-hotspot","",s.index,s.x,"",s.z,"",...e.surfaceY,e.surfaceY[1]-e.surfaceY[0]]);for(const[o,r]of Object.entries(e.surface.profiles))r.points.forEach((c,d)=>t.push(["profile",o,d,c.x,"",c.z,c.distance,c.a,c.b,c.difference]));if(e.mark){const{gt:o,pred:r}=sa(e.surface,e.mark);for(const[c,d,l]of[["gt",o,e.mark.a],["prediction",r,e.mark.b]])t.push(["crest-"+e.mark.profile,c,l,d.x,"",d.z,d.distance,d.a,d.b,d.difference])}const i=e.slice;for(let o=0;o<i.commonMask.length;o++)if(!(!i.roiMask[o]||!i.commonMask[o]))for(const[r,c]of[["gt",i.vectorsGT],["prediction",i.vectorsPred]])t.push(["velocity-roi",r,o,...i.worldAt(o),"",i.speedGT[o],i.speedPred[o],i.vectorError[o],...c.subarray(o*3,o*3+3)]);for(const[o,r]of[["gt",a.gt],["prediction",a.pred]])r.points.forEach(([c,d],l)=>t.push(["streamline",o,l,c,e.velocityY,d,l*a.step,"","","","","","",l===r.points.length-1?r.stop:""]));return t.map(o=>Array.from({length:14},(r,c)=>o[c]??"").join(",")).join(`
`)+`
`}const _e=(e,a=6)=>e==null?"N/A":Number(e).toPrecision(a);function xe(e,a,t,s,i=1800,o=23,r="#203747"){for(e.fillStyle=r,e.font=`${o}px sans-serif`;e.measureText(String(a)).width>i&&o>12;)e.font=`${--o}px sans-serif`;e.fillText(String(a),t,s)}function Jt(e,a,t,s,i,o=20){e.font=`${o}px sans-serif`,e.fillStyle="#3c5365";let r="";for(const c of String(a).split(" ")){const d=r?r+" "+c:c;e.measureText(d).width>i&&r?(e.fillText(r,t,s),s+=o+8,r=c):r=d}return e.fillText(r,t,s),s+o+8}function Go(e,a,t,s,i,o,r,c,d,l){const[m,b]=a.descriptor.shape,v=document.createElement("canvas");v.width=b,v.height=m;const u=v.getContext("2d"),h=u.createImageData(b,m),f=s==="difference",p=f&&t.appearance?.absoluteError,_=f?a.common:a[s==="heightA"?"wetA":"wetB"],C=f?[p?0:-l,l]:d;for(let B=0;B<m;B++)for(let A=0;A<b;A++){const y=B*b+A,M=((m-1-B)*b+A)*4;if(!_[y]){h.data.set([225,230,235,255],M);continue}const k=a.heightB[y]-a.heightA[y],I=f?p?Math.abs(k):k:a[s][y],F=Math.max(0,Math.min(1,(I-C[0])/(C[1]-C[0]))),V=f&&!p?F<.5?[80+350*F,130+230*F,220+70*F]:[255,245-350*(F-.5),255-440*(F-.5)]:[35+195*F,75+155*F,155+70*F];h.data.set([...V,255],M)}u.putImageData(h,0,0),e.imageSmoothingEnabled=!1,e.drawImage(v,i,o,r,c);const{originXYZ:[w,,g],spacing:E}=a.descriptor,x=(B,A)=>[i+(B-w+E/2)/(b*E)*r,o+c-(A-g+E/2)/(m*E)*c];e.strokeStyle="#182b3c",e.lineWidth=2;for(const B of t.profiles?Object.values(t.profiles):[t.profile])B?.points.length&&(e.beginPath(),B.points.forEach((A,y)=>e[y?"lineTo":"moveTo"](...x(A.x,A.z))),e.stroke());if(t.roi){const B=x(t.roi.xmin,t.roi.zmax),A=x(t.roi.xmax,t.roi.zmin);e.save(),e.beginPath(),e.rect(i,o,r,c),e.clip(),e.strokeRect(B[0],B[1],A[0]-B[0],A[1]-B[1]),e.restore()}if(t.probe){const[B,A]=x(t.probe.x,t.probe.z);e.beginPath(),e.moveTo(B-5,A),e.lineTo(B+5,A),e.moveTo(B,A-5),e.lineTo(B,A+5),e.stroke()}const S=e.createLinearGradient(i,0,i+r,0);f&&!p?(S.addColorStop(0,"rgb(80,130,220)"),S.addColorStop(.5,"rgb(255,245,255)"),S.addColorStop(1,"rgb(255,70,35)")):(S.addColorStop(0,"rgb(35,75,155)"),S.addColorStop(1,"rgb(230,230,225)")),e.fillStyle=S,e.fillRect(i,o+c+8,r,9),xe(e,`${_e(C[0])} ... ${_e(C[1])} m`,i,o+c+38,r,21),xe(e,`X ${_e(w,4)} ... ${_e(w+(b-1)*E,4)}; Z ${_e(g,4)} ... ${_e(g+(m-1)*E,4)} m`,i,o+c+62,r,19)}function ot(e,a,t,s,i,o,r=null,c=null,d="en"){const l=(x,S)=>d==="zh"?x:S,m=a.profile?.points??[],b=m.flatMap(x=>[x.a,x.b]).filter(Number.isFinite);if(xe(e,`${l("剖面：","Section: ")}${c??a.view.plane.toUpperCase()} / ${a.profile?.sampling==="native_columns"?l("原生列","native columns"):a.profile?.sampling==="bilinear_common_four"?l("双线性插值 · 四邻点共同有效","bilinear · all four neighbours valid"):l("无高度剖面","no height profile")}`,t,s,i,24),!b.length){xe(e,l("此截面无有效高度剖面。","No valid height profile for this section."),t,s+50,i);return}const v=r?.[0]??Math.min(...b),u=r?.[1]??Math.max(...b),h=Math.max(u-v,1e-9),f=m[0].distance,p=Math.max(m.at(-1).distance-f,1e-9),_=Math.max(...m.map(x=>Math.abs(x.difference??0)),1e-9),C=t+65,w=s+45,g=i-95,E=o-120;if(a.diagnosis){const x=a.roi?wt(a.profile,a.roi):null;if(x){const B=Math.max(f,x[0]),A=Math.min(f+p,x[1]);A>=B&&(e.fillStyle="#deefee",e.fillRect(C+(B-f)/p*g,w,(A-B)/p*g,E+65))}e.strokeStyle="#888",e.beginPath();const S=C-f/p*g;e.moveTo(S,w),e.lineTo(S,w+E+65),e.stroke(),xe(e,l("热点 t=0","hotspot t=0"),S+3,w,100,16)}e.strokeStyle="#798699",e.lineWidth=1,e.beginPath(),e.moveTo(C,w+E+35),e.lineTo(C+g,w+E+35),e.stroke(),xe(e,"0",t+35,w+E+40,25,18);for(const[x,S]of[["a","#2583c5"],["b","#e08b22"],["difference","#9b4778"]]){e.strokeStyle=S,e.lineWidth=2,e.beginPath();let B=!1;for(const A of m){if(A[x]==null){B=!1;continue}const y=C+(A.distance-f)/p*g,M=x==="difference"?w+E+35-A[x]/_*25:w+E*.7-(A[x]-v)/h*E*.7;e[B?"lineTo":"moveTo"](y,M),B=!0}e.stroke()}if(a.crest)for(const[x,S]of[["a","#176693"],["b","#a75400"]]){const B=m[a.crest[x]],A=C+(B.distance-f)/p*g,y=w+E*.7-(B[x]-v)/h*E*.7;e.strokeStyle=S,e.lineWidth=2,e.beginPath(),e.arc(A,y,5,0,2*Math.PI),e.stroke()}xe(e,`${_e(u,4)} m`,t,w+12,65,16),xe(e,`${_e(v,4)} m`,t,w+E*.7,65,16),xe(e,`B-A ±${_e(_,4)} m`,C,w+E+70,g,18),xe(e,`${l("GT 蓝 / B 橙 / B-A 紫；距离 ","GT blue / B orange / B-A purple; distance ")}${_e(f,5)} ... ${_e(f+p,5)} m`,C,s+o+35,g,18)}function G0(e,a,t=null,s="en"){const i=(f,p)=>s==="zh"?f:p,o=document.createElement("canvas");o.width=1920,o.height=e.diagnosis?2650:2220;const r=o.getContext("2d");if(!r)throw Error("Report canvas unavailable");r.fillStyle="#f6f9fb",r.fillRect(0,0,o.width,o.height),r.fillStyle="#123247",r.fillRect(0,0,1920,170),xe(r,`${i("OceanScope / 分析报告 / 帧 ","OceanScope / analysis report / frame ")}${e.view.frame}`,60,68,1800,43,"#fff"),xe(r,`${e.source.runId} · ${e.createdAt}`,60,115,1800,22,"#d0e6ee"),xe(r,`${i("高度：全部96帧 | 速度：","Height: all96 | Velocity: ")}${e.view.selection.subset==="all"?i("全部96帧","all96"):i("固定六帧","fixed six")} / ${e.view.selection.grid==="fine"?i("原生网格","native grid"):i("XZ 2×2均值","XZ 2×2 mean")}${i(" | ROI：当前原生列"," | ROI: current native columns")}`,60,150,1800,22,"#d0e6ee");let c=1/0,d=-1/0,l=1e-9;for(let f=0;f<a.heightA.length;f++){for(const p of["A","B"])a["wet"+p][f]&&(c=Math.min(c,a["height"+p][f]),d=Math.max(d,a["height"+p][f]));a.common[f]&&(l=Math.max(l,Math.abs(a.heightB[f]-a.heightA[f])))}const m=Number.isFinite(c)?[c,d>c?d:c+1]:[0,1];[["heightA",i("A / Ground Truth","A / Ground Truth")],["heightB",i("B / 预测","B / Prediction")],["difference",e.appearance?.absoluteError?i("|B - A| / 绝对高度差","|B - A| / absolute height"):i("B - A / 有符号高度差","B - A / signed height")]].forEach(([f,p],_)=>{xe(r,p,60+_*620,215,580,28),Go(r,a,e,f,60+_*620,240,560,320,m,l)});const b=f=>f==null?null:f*100,v=(f,p)=>`${p}: ${f?.common??0}${i(" 共同列 | MAE "," common columns | MAE ")}${_e(b(f?.mae_m))}${i(" cm | Bias "," cm | bias ")}${_e(b(f?.bias_m))} cm | RMSE ${_e(b(f?.rmse_m))} cm`;if(xe(r,v(e.global,i("当前帧高度","Current frame height")),60,645,1800,25),xe(r,e.local?v(e.local,i("选区高度","Selected ROI height")):i("ROI：未选择","ROI: none selected"),60,682,1800,25),xe(r,e.roi?`ROI X [${e.roi.xmin}, ${e.roi.xmax}] / Z [${e.roi.zmin}, ${e.roi.zmax}] m`:i("灰色格点为缺测，不计为零。","Gray cells are unavailable, never zero."),60,719,1800,21),e.profiles){const f=Object.values(e.profiles).flatMap(_=>_.points.flatMap(C=>[C.a,C.b])).filter(Number.isFinite),p=f.length?[Math.min(...f),Math.max(...f)]:[0,1];ot(r,{...e,profile:e.profiles.first,crest:e.crestMeasurement&&e.diagnosis.crest.profile==="first"?e.diagnosis.crest:null},60,770,850,300,p,i("热点剖面1","hotspot 1"),s),ot(r,{...e,profile:e.profiles.second,crest:e.crestMeasurement&&e.diagnosis.crest.profile==="second"?e.diagnosis.crest:null},990,770,850,300,p,i("热点剖面2","hotspot 2"),s)}else ot(r,e,60,770,990,300,null,null,s);if(t&&!e.diagnosis){const f=Math.min(770/t.width,320/t.height);r.drawImage(t,1110+(770-t.width*f)/2,780,t.width*f,t.height*f),xe(r,i("当前帧三维预览；相机保存在 JSON 中","Current-frame 3D preview; camera retained in JSON"),1110,1130,770,20)}else e.diagnosis||Jt(r,`${i("当前帧无三维截图：","No current-frame 3D capture: ")}${e.view.geometryStatus?.reason??i("不可用","unavailable")}${i("。保留原生空间数据和帧身份，不替换为邻帧。",". Native spatial data and frame identity are retained; no neighboring frame substituted.")}`,1120,850,700,25);if(e.diagnosis?.crest){const f=e.diagnosis.crest,p=e.crestMeasurement,_=f.status==="paired"?i("人工配对","Manually paired"):i("峰配对不确定","Correspondence uncertain");xe(r,(f.profile==="first"?i("剖面 1","Profile 1"):i("剖面 2","Profile 2"))+" · "+_+(p?"   Δh "+_e(p.deltaHeight,5)+"   Δs "+_e(p.deltaDistance,5)+"   "+i("场景单位，预测减 GT","scene units, prediction minus GT"):""),60,1115,1800,24)}e.diagnosis?.caseNote&&xe(r,i("案例观察：","Case observation: ")+e.diagnosis.caseNote,60,1155,1800,23),xe(r,i("序列指标 / 明示有效域；完整精度与定义见 CSV + JSON","Sequence metrics / labelled scopes; full precision and definitions in CSV + JSON"),60,1200,1800,29);const u=Math.ceil(e.metrics.length/2);e.metrics.forEach((f,p)=>{const _=p>=u?1:0,C=p%u,w=60+_*930,g=1245+C*35;xe(r,s==="zh"?f.labelZh??f.label:f.label,w,g,620,20),xe(r,`${_e(f.value,8)} ${f.unit}`,w+630,g,260,20)});let h=1840;h=Jt(r,s==="zh"&&e.scope==="Native highest-crossing height columns; ROI/profile do not replace all96 global metrics. Units are source convention, not independently calibrated."?"原生最高过零高度列；ROI / 剖面不替代全部96帧的全局指标。单位沿用来源约定，未独立标定。":e.scope,60,h,1800,22),h=Jt(r,i("实验来源：模型、相机、划分与单位均为来源声明。检查点哈希未知。已核对原始文件清单身份；未独立审计训练历史或物理标定。","Experiment provenance: model / cameras / split / units are source declarations. Checkpoint hash is unknown. Original-file manifest identities were verified; training history and physical calibration were not independently audited."),60,h+8,1800,21);for(const[f,p]of Object.entries(e.source))xe(r,`${f}: ${p}`,60,h+28,1800,18),h+=28;if(e.evidence){let f=2190;xe(r,`${i("热点 (","Hotspot (")}${e.diagnosis.hotspot.ix},${e.diagnosis.hotspot.iz}) X=${_e(e.probe.x)} Z=${_e(e.probe.z)}${i(" | 方向 "," | direction ")}${e.diagnosis.directionDeg}${i(" 度"," deg")}`,60,f,1800,25),f+=42;for(const[p,_]of[[i("帧","Frame"),e.evidence.frame],["ROI",e.evidence.roi]])_&&(xe(r,`${p}${i(": 共同 ",": common ")}${_.common}${i(" / 候选 "," / candidate ")}${_.candidates} / GT ${_.validGT}${i(" / 预测 "," / prediction ")}${_.validPrediction}${i("; 共同/候选 ","; common/candidate ")}${_e(_.coverageCandidate)}${i("; 共同/GT ","; common/GT ")}${_e(_.coverageGT)}`,60,f,1800,21),f+=30,xe(r,`${p}${i(" 最大 |B-A|="," max |B-A|=")}${_e(_.maximum?.absolute)}${i(" m 位置 "," m at ")}${_.maximum?`X=${_e(_.maximum.x)}, Z=${_e(_.maximum.z)}${i(", 索引=",", index=")}${_.maximum.index}${i(", 并列=",", ties=")}${_.maximum.ties}`:"N/A"}`,60,f,1800,21),f+=32);for(const p of["first","second"])for(const _ of["full","roi"]){const C=e.evidence[p][_];C&&(xe(r,`${p==="first"?i("剖面1","Profile 1"):i("剖面2","Profile 2")} / ${_==="full"?i("全线","full line"):i("选区内","within ROI")}: n=${C.samples}${i("; 样本平均 MAE=","; sample mean MAE=")}${_e(C.mae)}${i(" m; Bias="," m; bias=")}${_e(C.bias)}${i(" m; 最大="," m; max=")}${_e(C.maximum?.absolute)}${i(" m（非面积统计）"," m (not area statistics)")}`,60,f,1800,20),f+=27)}}return xe(r,i("使用 JSON 在 OceanScope 恢复此快照。必须匹配本地资源；测量值会重新计算。","Restore this snapshot in OceanScope with its JSON. Local resources must match; measurements are recomputed."),60,o.height-25,1800,20),o}const Z0={vectorError:{title:"速度向量误差 E",label:"Velocity vector error map",palette:"absolute-error"},speedDelta:{title:"流速大小差 Δs",label:"Velocity speed delta map",palette:"error"},direction:{title:"三维方向夹角",label:"Velocity direction angle map",palette:"absolute-error"}};function jt(e,a="zh"){const t=[{key:"speedGT",title:"GT 流速",label:"Velocity GT speed map",palette:"ground-truth",role:"gt"},{key:"speedPred",title:"预测流速",label:"Velocity prediction speed map",palette:"ground-truth",role:"pred"},{key:e,...Z0[e]}],s={speedGT:"GT speed",speedPred:"Prediction speed",vectorError:"Velocity vector error E",speedDelta:"Speed difference Δs",direction:"3D direction angle"};return a==="zh"?t:t.map(i=>({...i,title:s[i.key]}))}function Zo(e,a,t,s){const i=[e+t,a+s];return[[e,a],i,[i[0]-.32*t+.2*s,i[1]-.32*s-.2*t],i,[i[0]-.32*t-.2*s,i[1]-.32*s+.2*t]]}const ve=(e,a=6)=>Number.isFinite(e)?e.toPrecision(a):"N/A",Yi=e=>e==null?"N/A":(100*e).toFixed(2)+"%";function Be(e,a,t,s,i=1480,o=21,r="#203747"){for(e.fillStyle=r,e.font=`${o}px sans-serif`;e.measureText(String(a)).width>i&&o>14;)e.font=`${--o}px sans-serif`;e.fillText(a,t,s,i)}function Ui(e,a,t,s,i,o,r){e.beginPath(),s===0&&i===0?e.arc(a,t,3,0,2*Math.PI):Zo(0,0,s,i).forEach(([c,d],l)=>e[l===0||l===2?"moveTo":"lineTo"](a+c*o,t+d*r)),e.lineCap="round",e.lineJoin="round",e.lineWidth=4,e.strokeStyle="#fff",e.stroke(),e.lineWidth=1.5,e.strokeStyle="#10273c",e.stroke()}function Fs(e,a,t,s,i,o,r,c="zh"){const d=(V,K)=>c==="zh"?V:K,{key:l,title:m,palette:b,role:v}=a,{viewport:u,zoom:h,ranges:f}=t.appearance,p=f[v?"speed":l],_=Math.min(470/(u.width*s.stepX),340/(u.height*s.stepZ)),C=_*s.stepX,w=_*s.stepZ,g=u.width*C,E=u.height*w,x=202;Be(e,m,r,186,470,25);const S=document.createElement("canvas");S.width=u.width,S.height=u.height,Bo(S.getContext("2d"),{...s,angleSupport:l==="direction"?s.commonMask:null,values:l==="direction"?i.degrees:s[l]},l==="direction"?i.mask:s.commonMask,p,b,u),e.imageSmoothingEnabled=!1,e.drawImage(S,r,x,g,E);const B=V=>r+(V-u.x+.5)*C,A=V=>x+(u.z+u.height-V-.5)*w;e.save(),e.beginPath(),e.rect(r,x,g,E),e.clip();const y=s.roiView;if(!h&&y&&(e.strokeStyle="#9c6900",e.lineWidth=2,e.strokeRect(B(y.x)-C/2,A(y.z+y.height-1)-w/2,y.width*C,y.height*w)),v)for(const V of o){const[K,W]=V[v==="gt"?"gtOffset":"predOffset"];Ui(e,B(V.x),A(V.z),K,-W,C,w)}const M=B(t.probe.xIndex),k=A(t.probe.zIndex);M>=r&&M<r+g&&k>=x&&k<x+E&&(e.setLineDash([6,5]),e.beginPath(),e.moveTo(M,x),e.lineTo(M,x+E),e.moveTo(r,k),e.lineTo(r+g,k),e.strokeStyle="#fff",e.lineWidth=3,e.stroke(),e.strokeStyle="#111",e.lineWidth=1,e.stroke()),e.restore();const I=e.createLinearGradient(r,0,r+470,0);for(const V of[0,.5,1])I.addColorStop(V,`rgb(${Co(p[0]+V*(p[1]-p[0]),p,b).join(",")})`);e.fillStyle=I,e.fillRect(r,562,470,11);const F=l==="direction"?"°":" m/s";Be(e,`${ve(p[0],4)}${l==="speedDelta"?" / 0":""} / ${ve(p[1],4)}${F}${v?d(" · 共用色标"," · Shared scale"):""}`,r,599,470),Be(e,l==="direction"?d("X → · Z ↑ · 灰纹：非共同域；浅黄：有效但无夹角","X → · Z ↑ · Grey: outside support; yellow: valid speed, no angle"):d("X → · Z ↑ · 棋盘为不在共同有效域","X → · Z ↑ · Checkerboard: outside common domain"),r,629,470,19),v&&o.length&&t.arrows.referenceSpeed&&(Ui(e,r+8,654,t.arrows.referenceGridLength,0,C,w),Be(e,`${d("参考 ","Reference ")}${ve(t.arrows.referenceSpeed,4)} m/s · ${o.length}${d(" 个配对点"," paired points")}`,r,683,470,19))}function H0(e,a,t,s,i="zh"){const o=(_,C)=>i==="zh"?_:C,r=document.createElement("canvas");r.width=1560,r.height=1170;const c=r.getContext("2d");if(!c)throw Error("Velocity report canvas unavailable");c.fillStyle="#f6f9fb",c.fillRect(0,0,1560,1170),c.fillStyle="#123247",c.fillRect(0,0,1560,142);const{plane:d,domain:l,roi:m,summary:b,angleThreshold:v,samples:u,source:h,surfaceCase:f}=e;Be(c,`${o("OceanScope · 速度诊断 · 第 ","OceanScope · Velocity diagnosis · frame ")}${d.frame}${o(" 帧"," ")}`,40,60,1480,38,"#fff"),Be(c,`${o("XZ · Y 索引 ","XZ · Y index ")}${d.yIndex}${o(" · 世界 Y "," · World Y ")}${ve(d.yWorld,9)} m · ${l.id}`,40,100,1480,24,"#d0e6ee"),Be(c,`${h.caseId} · ${f.surfaceCaseId} · ${e.createdAt}`,40,128,1480,19,"#d0e6ee"),jt(e.appearance.mode,i).forEach((_,C)=>Fs(c,_,e,a,t,s?.points??[],40+505*C,i)),Be(c,`ROI X [${ve(m.xmin)}, ${ve(m.xmax)}] · Z [${ve(m.zmin)}, ${ve(m.zmax)}] m`,40,724),Be(c,`${o("水面热点 X ","Surface hotspot X ")}${ve(f.hotspotXZ.x)} · Z ${ve(f.hotspotXZ.z)} · ${f.caseNote.slice(0,150)}`,40,757);const p=u.probe;Be(c,`${o("探针 XYZ (","Probe XYZ (")}${p.xyz.map(_=>ve(_)).join(", ")}) · GT ${ve(p.speedGT)}${o(" · 预测 "," · Prediction ")}${ve(p.speedPred)} · E ${ve(p.E)} · Δs ${ve(p.speedDelta)}${o(" · 夹角 "," · Angle ")}${ve(p.angleDegrees)}°`,40,790),Be(c,p.common?`Vy · GT ${ve(p.vectorGT?.[1])} → ${o("预测","Pred")} ${ve(p.vectorPred?.[1])} m/s · ${o("颜色：总流速（前两图）；箭头：XZ 投影","Colour: total speed (first two maps); arrows: XZ projection")}`:o("探针不在共同有效域","Probe outside common valid domain"),40,812,1480,17);for(const[_,C,w]of[["whole",o("整切片","Whole slice"),835],["roi","ROI",906]]){const g=b[_],E=b.direction[_];Be(c,`${C}${o(" · 共同 "," · Common ")}${g.counts.common}${o(" / 候选 "," / Candidate ")}${g.counts.candidate}${o(" · 共同/候选 "," · Common/candidate ")}${Yi(g.coverageCandidate)}${o(" · 共同/GT "," · Common/GT ")}${Yi(g.coverageGT)}${o(" · 平均 E "," · Mean E ")}${ve(g.meanE)}${o(" · 平均 Δs "," · Mean Δs ")}${ve(g.meanSpeedDelta)}`,40,w),Be(c,`${o("最大 E ","Maximum E ")}${ve(g.maximum?.value)}${o(" · 平均三维夹角 "," · Mean 3D angle ")}${ve(E.meanDegrees)}${o("° · 夹角有效 ","° · Angle valid ")}${E.count}${o(" · 低速排除 "," · Low-speed excluded ")}${E.excludedLowSpeedCount??"N/A"}`,40,w+30)}return Be(c,`${o("方向阈值 τ = ","Direction threshold τ = ")}${v.tau??o("停用","Disabled")}${o(" · 箭头为 XZ 投影 · 速度 m/s、坐标 m 均沿用来源声明"," · Arrows: XZ projections · Source units: velocity m/s, coordinates m")}`,40,991),Be(c,o("当前 Y 层诊断，非整帧体积评分；物理与时间尺度、向量基底尚未独立标定。","Current Y-layer diagnosis, not a volume score; physical/time scales and vector basis are not independently calibrated."),40,1025,1480,19),Be(c,l.definition.rule??l.id,40,1096,1480,17),Be(c,`${o("代码 ","Code ")}${h.codeRevision}${o(" · 资源 SHA-256 "," · Resource SHA-256 ")}${h.resource.packedSha256}`,40,1064,1480,18),Be(c,o("使用配套 JSON 恢复视图。恢复时核验资源并重算。CSV 保留整层原生格点。","Restore with the companion JSON; resources are verified and metrics recomputed. CSV retains the whole native layer."),40,1128,1480,19),r}function L0(e,a,t="zh"){const s=(b,v)=>t==="zh"?b:v,i=document.createElement("canvas");i.width=1560,i.height=1940;const o=i.getContext("2d");if(!o)throw Error("Velocity comparison canvas unavailable");const{scope:r,result:c,source:d,view:l}=e;o.fillStyle="#f6f9fb",o.fillRect(0,0,i.width,i.height),o.fillStyle="#123247",o.fillRect(0,0,i.width,148),Be(o,s("OceanScope · Best_1027 三帧速度对照","OceanScope · Best_1027 three-frame velocity comparison"),40,56,1480,38,"#fff"),Be(o,`XZ · Y=${r.plane.yIndex} · ROI X [${ve(r.roi.xmin)}, ${ve(r.roi.xmax)}] Z [${ve(r.roi.zmin)}, ${ve(r.roi.zmax)}] m · τ=${r.tau} m/s`,40,99,1480,22,"#d0e6ee"),Be(o,`${s("三帧共同有效 ","Common valid across three frames ")}${c.shared}/${c.roiCandidates}${s(" · 夹角共同有效 "," · Common angle-valid ")}${c.sharedAngles}${s(" · 共用色标和箭头比例"," · Shared colour and arrow scales")}`,40,130,1480,21,"#d0e6ee");const m={xIndex:l.probe[0],zIndex:l.probe[1]};return a.rows.forEach(({frame:b,slice:v,angles:u,arrows:h,summary:f},p)=>{const _=155+p*570;Be(o,`${s("帧 ","Frame ")}${b}${s(" · 本帧 ROI "," · Frame ROI ")}${f.nativeRoi}/${c.roiCandidates}${s(" · 共同样本平均 E "," · Common-sample mean E ")}${ve(f.meanE)} m/s · Δs ${ve(f.meanDelta)}${s(" m/s · 夹角 "," m/s · Angle ")}${ve(f.meanAngle)}°`,40,_+25,1480,25),o.save(),o.translate(0,_-129);const C={appearance:{viewport:a.view,zoom:!0,ranges:c.ranges},probe:m,arrows:h};jt(l.mode,t).forEach((w,g)=>Fs(o,w,C,v,u,l.arrows?h.points:[],40+505*g,t)),o.restore()}),Be(o,`${s("探针原生 XZ 索引 (","Probe native XZ index (")}${l.probe.join(", ")}${s(") · 棋盘表示未纳入对应共同有效域 · 单位沿用来源声明",") · Checkerboard: outside common support · Source-declared units")}`,40,1890),Be(o,`${s("代码 ","Code ")}${d.codeRevision}${s(" · 逐帧资源身份和恢复设置见配套 JSON · "," · Per-frame resource identities and restore settings: companion JSON ·")}${e.createdAt}`,40,1920,1480,18),i}const an=(e,a=4)=>Number.isFinite(e)?e.toFixed(a):"—",ha=e=>e.map(a=>an(a,3)).join(", ");function q0(e,a){const t=[a.seed,...a.gt.points,...a.pred.points],s=t.map(u=>u[0]),i=t.map(u=>u[1]),o=Math.min(...s),r=Math.max(...s),c=Math.min(...i),d=Math.max(...i),l=275/Math.max(r-o,d-c,a.separation*3),m=([u,h])=>[275+(u-(o+r)/2)*l,1225-(h-(c+d)/2)*l];e.fillStyle="#102b3a",e.fillRect(40,1065,470,320);for(const[u,h,f]of[[a.gt,"#66d9eb",[]],[a.pred,"#ffbf69",[6,4]]])if(e.strokeStyle=h,e.lineWidth=3,e.setLineDash(f),e.beginPath(),u.points.forEach((p,_)=>e[_?"lineTo":"moveTo"](...m(p))),e.stroke(),e.setLineDash([]),u.points.length){const[p,_]=m(u.points.at(-1));e.strokeRect(p-4,_-4,8,8)}a.split&&(e.strokeStyle="white",e.beginPath(),e.moveTo(...m(a.split.gt)),e.lineTo(...m(a.split.pred)),e.stroke());const[b,v]=m(a.seed);e.fillStyle="#ff6b86",e.beginPath(),e.arc(b,v,5,0,2*Math.PI),e.fill()}function Y0(e,a,t){const s=(x,S)=>t==="zh"?x:S,i=document.createElement("canvas");i.width=1560,i.height=1530;const o=i.getContext("2d"),r=(x,S,B,A=22,y=1480,M="#173848")=>{o.fillStyle=M,o.font=A+"px sans-serif",o.fillText(x,S,B,y)};o.fillStyle="#f9faf7",o.fillRect(0,0,i.width,i.height),o.fillStyle="#123247",o.fillRect(0,0,i.width,108),r("OceanScope  /  Best_1027   ·   1049   /   "+e.settings.id,40,49,34,1480,"white"),r(s("水面重建与同列流动诊断","Surface reconstruction and flow at the same XZ column"),40,86,25,1480,"#d2e6e7");const{surface:c,spatial:d,view:l,slice:m,arrows:b,angles:v}=e,{hotspot:u,directionDeg:h,caseNote:f}=c.diagnosis;let p=1e-9;for(let x=0;x<d.common.length;x++)d.common[x]&&(p=Math.max(p,Math.abs(d.heightB[x]-d.heightA[x])));r(s("水面高度误差","Surface height error")+(c.appearance.absoluteError?"  |Pred − GT|":"  Pred − GT"),40,150,27),Go(o,d,c,"difference",40,180,420,215,[0,1],p);const _=Object.values(c.profiles).flatMap(x=>x.points.flatMap(S=>[S.a,S.b]).filter(Number.isFinite)),C=[Math.min(..._),Math.max(..._)];if(Object.values(c.profiles).forEach((x,S)=>ot(o,{...c,profile:x,crest:e.mark?.profile===["first","second"][S]?e.mark:null},500+510*S,151,495,245,C,h+90*S+"°",t)),e.mark){const x=sa(c,e.mark);r(s("候选峰","Candidate crests")+" · "+(e.mark.status==="uncertain"?s("对应不确定","uncertain correspondence"):s("人工配对","manually paired"))+"    GT (s,h) "+ha([x.gt.distance,x.gt.a])+"    Pred (s,h) "+ha([x.pred.distance,x.pred.b])+"    Δs "+an(x.deltaDistance)+"    Δh "+an(x.deltaHeight),500,457,21,1010)}r(s("热点水面高度","Surface height at hotspot")+"  GT "+an(e.surfaceY[0])+"  /  Pred "+an(e.surfaceY[1])+"     XZ ("+ha([u.x,u.z])+")     ROI MAE "+an(e.height.mae)+"  ·  n="+e.height.common,40,490),r(s("固定高度速度切片","Fixed-height velocity slice")+"    Y["+l.y+"] = "+an(e.velocityY)+"    ·    "+s("切片与水面共享 XZ，Y 分别取值","Shared XZ column; slice Y and surface Y shown separately"),40,546,27);const w=e.settings.velocity;o.save(),o.translate(0,390),jt(l.mode,t).forEach((x,S)=>Fs(o,x,w,m,v,b?.points??[],40+S*505,t)),o.restore(),o.save(),o.translate(0,45),q0(o,a);const g=550;r(s("切片内配对瞬时流线","Paired instantaneous XZ streamlines"),g,1095,28),r(s("青实线 GT，橙虚线预测，红点为种子，白线为首次越阈","GT solid cyan · Prediction dashed orange · Red seed · White first crossing"),g,1135,21,950),r("XZ ("+ha(a.seed)+")    Δs "+an(a.step,5)+"    Δ ≥ "+an(a.separation,5)+"    RK2",g,1174),r(a.split?s("首次采样越阈","First sampled crossing")+"   s "+an(a.split.arc,5)+"   Δ "+an(a.split.gap,6):s("共同积分段内未越阈","No crossing on the shared trace"),g,1215,24);const E={limit:s("积分长度上限","arc length limit"),mask:s("共同有效域边界","common mask boundary"),grid:s("网格边界","grid boundary"),slow:s("低投影速度","low projected speed")};return[a.gt,a.pred].forEach((x,S)=>r((S?"Pred":"GT")+"   "+E[x.stop]+"    s "+an((x.points.length-1)*a.step,5)+"    XZ ("+ha(x.points.at(-1)??a.seed)+")",g,1264+S*39,22,950)),r(s("观察","Observation")+"   "+f,40,1430,22,1480),r(s("单位按来源声明。流线距离采用网格世界坐标。","Source-declared units. Streamline distances use grid world coordinates."),40,1462,18),o.restore(),i}function Ct({surface:e,mark:a,onApply:t,zh:s,children:i,allowUnpaired:o=!1}){const[r,c]=j.useState(a?.profile??"first"),[d,l]=j.useState(a?.a??""),[m,b]=j.useState(a?.b??""),[v,u]=j.useState(a?.status??"uncertain"),h=e.profiles[r],f=a&&Et(e,a);function p(C,w,g){r!==C&&(c(C),l(""),b("")),(w==="a"?l:b)(g),u("uncertain")}if(!e.roi)return i?.(null)??null;const _=a&&(a.profile!==r||a.a!==(d===""?null:d)||a.b!==(m===""?null:m)||a.status!==v);return n.createElement(n.Fragment,null,i?.({pick:p,profile:r,gt:d,pred:m}),n.createElement("fieldset",{"data-os-loc":"src/field/CrestControls.jsx:17:48"},n.createElement("legend",{"data-os-loc":"src/field/CrestControls.jsx:17:58"},s?"剖面候选峰":"Profile crest candidates"),i&&n.createElement("p",{"data-os-loc":"src/field/CrestControls.jsx:18:16"},s?"空心点是候选峰，实心点是当前选择。也可从列表选择，确认后应用。":"Open circles are candidates and filled circles show your selection. Choose on the curves or in the lists, then apply."),n.createElement("label",{"data-os-loc":"src/field/CrestControls.jsx:19:5"},s?"剖面":"Profile"," ",n.createElement("select",{"data-os-loc":"src/field/CrestControls.jsx:19:32","data-os-action":"",value:r,onChange:C=>{c(C.target.value),l(""),b(""),u("uncertain")}},Object.keys(e.profiles).map((C,w)=>n.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:21:50",key:C,value:C},w+1)))),[["a",d,l,"GT"],["b",m,b,s?"预测":"Prediction"]].map(([C,w,g,E])=>n.createElement("label",{"data-os-loc":"src/field/CrestControls.jsx:23:7",key:C},E," ",n.createElement("select",{"data-os-loc":"src/field/CrestControls.jsx:23:32","data-os-action":"","aria-label":"Crest "+C,value:w,onChange:x=>{g(Number(x.target.value)),u("uncertain")}},n.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:24:9",value:"",disabled:!0},s?"选择局部峰":"Select a local peak"),Pa(h,e.roi,C).map(x=>n.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:25:55",key:x,value:x},"s ",h.points[x].distance.toFixed(3)," · h ",h.points[x][C].toFixed(4)))))),n.createElement("select",{"data-os-loc":"src/field/CrestControls.jsx:27:5","data-os-action":"","aria-label":"Peak correspondence",value:v,onChange:C=>u(C.target.value)},n.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:28:7",value:"uncertain"},s?"对应不确定":"Correspondence uncertain"),n.createElement("option",{"data-os-loc":"src/field/CrestControls.jsx:29:7",value:"paired"},s?"人工配对":"Manually paired")),n.createElement("button",{"data-os-loc":"src/field/CrestControls.jsx:30:5","data-os-action":"",disabled:d===""||m==="",onClick:()=>t({profile:r,a:d,b:m,status:v})},s?"应用峰标记":"Apply crest markers"),o&&n.createElement("button",{"data-os-loc":"src/field/CrestControls.jsx:31:21","data-os-action":"",type:"button",onClick:()=>{l(""),b(""),u("uncertain"),t({profile:r,a:null,b:null,status:"uncertain"})}},s?"标记峰配对不确定":"Record unresolved crest pair"),_&&n.createElement("small",{"data-os-loc":"src/field/CrestControls.jsx:32:15"},s?"当前选择尚未应用，报告仍保留上次标记。":"Apply your selection to update the saved report markers."),a&&n.createElement("p",{"data-os-loc":"src/field/CrestControls.jsx:33:12","aria-label":"Applied crest comparison"},a.profile==="first"?s?"剖面 1":"Profile 1":s?"剖面 2":"Profile 2"," · ",a.status==="paired"?s?"人工配对":"Manually paired":s?"峰配对不确定":"Correspondence uncertain",f&&n.createElement(n.Fragment,null," · ",s?"峰高差":"Crest height difference"," Δh ",f.deltaHeight.toFixed(5)," · ",s?"峰位差":"Crest displacement"," Δs ",f.deltaDistance.toFixed(5)," ",s?"场景单位（预测减 GT，Δs 沿剖面正向）":"scene units (prediction minus GT, Δs along the profile)"))))}function U0({control:e,bundle:a,catalog:t,language:s,onReady:i}){const o=s==="zh",[r,c]=j.useState(null),[d,l]=j.useState(.25),[m,b]=j.useState(!1),[v,u]=j.useState(""),[h,f]=j.useState(null),p=j.useRef(null);j.useEffect(()=>()=>p.current?.abort(),[]);async function _(w,g,E=null){p.current?.abort();const x=new AbortController,S=()=>x.abort();p.current=x,g?.addEventListener("abort",S,{once:!0}),b(!0),u(""),c(null),f(null);try{g?.throwIfAborted();const B=await W0(w,a,t,x.signal);if(x.signal.throwIfAborted(),E&&E!==B.presetSha)throw Error(o?"案例设置已更新，请打开原始报告。":"Case settings changed. Open the original report.");c(B),l(B.settings.integration.stepFraction),i(!!E)}catch(B){throw x.signal.aborted||u(B.message),B}finally{g?.removeEventListener("abort",S),x===p.current&&(p.current=null,b(!1))}}j.useEffect(()=>{const w=x=>{if(x?.page!=="field"||x.section!=="report"||!x.pairedCase)return;const{id:S,stepFraction:B,crest:A,presetSha:y}=x.pairedCase;try{const M=ht(S,B);_({...M,...A?{crest:A}:{}},null,y).catch(()=>{})}catch(M){u(M.message)}},g=x=>w(x.detail),E=x=>{x.detail?.includes(1049)&&w(ft())};return window.addEventListener("oceanscope-paired-case-mark",g),window.addEventListener("oceanscope-velocity-files",E),w(ft()),()=>{window.removeEventListener("oceanscope-paired-case-mark",g),window.removeEventListener("oceanscope-velocity-files",E)}},[a]),j.useImperativeHandle(e,()=>({restore:(w,g)=>_(JSON.parse(w),g)})),j.useEffect(()=>{if(!r)return;let w;try{const{record:g,pair:E}=$0(r,d),x=Y0(r,E,s).toDataURL("image/png");w=St({stem:"OceanScope-1049-"+g.id+"-"+(d===.125?"half":"default")+"-"+s,record:g,csv:X0(r,E),previewUrl:x}),f({data:r,fraction:d,language:s,files:w}),u("")}catch(g){f(null),u(g.message)}return()=>{w&&Object.values(w).forEach(g=>URL.revokeObjectURL(g.href))}},[r,d,s]);const C=h?.data===r&&h?.fraction===d&&h?.language===s?h.files:null;return n.createElement("section",{"data-os-loc":"src/field/PairedCaseReport.jsx:69:10","aria-label":"1049 one-page case",className:"protocol-report","data-paired-case":C?JSON.stringify({id:r.settings.id,presetSha:r.presetSha,stepFraction:d,crest:r.mark}):void 0},n.createElement("h2",{"data-os-loc":"src/field/PairedCaseReport.jsx:70:5"},o?"1049 一页诊断案例":"1049 one-page diagnostic case"),n.createElement("div",{"data-os-loc":"src/field/PairedCaseReport.jsx:71:5",className:"reference-controls"},["A","B"].map(w=>n.createElement("button",{"data-os-loc":"src/field/PairedCaseReport.jsx:71:60","data-os-action":"",key:w,type:"button",onClick:()=>_(ht(w)).catch(()=>{})},o?"打开案例 ":"Open case ",w)),r&&n.createElement("label",{"data-os-loc":"src/field/PairedCaseReport.jsx:73:14"},n.createElement("input",{"data-os-loc":"src/field/PairedCaseReport.jsx:73:21","data-os-action":"",type:"checkbox",checked:d===.125,onChange:w=>l(w.target.checked?.125:.25)}),o?"半步长复核":"Half-step check")),r&&n.createElement(Ct,{key:r.settings.id,surface:r.surface,mark:r.mark,zh:o,onApply:w=>c({...r,mark:w})}),m&&n.createElement("p",{"data-os-loc":"src/field/PairedCaseReport.jsx:77:12",role:"status"},o?"正在核验水面和速度资源…":"Verifying surface and velocity resources…"),v&&n.createElement("p",{"data-os-loc":"src/field/PairedCaseReport.jsx:78:13",role:"alert"},v),C&&n.createElement(n.Fragment,null,n.createElement("img",{"data-os-loc":"src/field/PairedCaseReport.jsx:79:17",src:C.png.href,alt:o?"1049 水面热点、双剖面、速度切片与配对流线":"1049 hotspot, two profiles, velocity slice and paired streamlines",style:{maxWidth:"100%",height:"auto",display:"block"}}),n.createElement("div",{"data-os-loc":"src/field/PairedCaseReport.jsx:81:7",className:"reference-controls"},["png","csv","json"].map(w=>n.createElement("a",{"data-os-loc":"src/field/PairedCaseReport.jsx:81:75",key:w,href:C[w].href,download:C[w].name},o?"下载":"Download"," ",w.toUpperCase())))))}function J0(e,a){const t=String(e?.message??e??""),s=(i,o)=>a?i:o;return/AbortError|cancelled|canceled/i.test(e?.name+" "+t)?s("操作已取消。当前文件可以稍后重新打开。","Operation cancelled. You can reopen the file later."):/too large|^size$/i.test(t)?s("文件过大。请选择本工具导出的分析 JSON；完整报告上限1 MB，场比较方案上限2 MB。","File too large. Choose an exported analysis JSON: reports up to1 MB, field views up to2 MB."):/Invalid analysis JSON|^json$|JSON|Unexpected token|Unexpected end/i.test(t)&&!/(format|Unsupported)/i.test(t)?s("JSON内容不完整或格式有误。请重新选择原始导出文件，或粘贴文件全文。","Invalid or incomplete JSON. Select the original exported file or paste its entire contents."):/Unsupported|^format$/.test(t)?s("这个文件不能恢复分析。请选择完整分析报告、场比较方案或序列选择 JSON；PNG、CSV和数据说明文件只能查看。","This file cannot restore analysis. Choose an analysis-report, field-view or sequence-selection JSON; images, CSV and data-info files are for viewing."):/checksum|identity|mismatch|does not match|^source$/i.test(t)?s("数据或报告身份不匹配。请确认数据组合，使用同一版本导出的报告及配套资源；资源损坏时重新复制并校验，勿修改文件中的身份信息。","Data or report identity differs. Confirm the dataset and use its matching report/resources. Recopy and verify damaged resources; do not edit identity fields."):/404|unavailable|failed to fetch|network|^dataset$|No spatial resource/i.test(t)?s("数据下载未完成。请检查网络并重试；无三维预览的帧仍可查看高度分析。","The data download did not complete. Check your connection and retry. Frames without 3D previews still support height analysis."):/Wait|not ready|loading|Timed out/i.test(t)?s("数据尚未准备好。等待当前组合加载完成后重试；持续失败时检查本页的数据资源提示。","Data is not ready. Wait for the current dataset to load and retry; if it persists, check this page’s resource message."):/View changed/i.test(t)?s("恢复期间视图已改变，已停止应用旧请求。请在当前视图重新打开报告。","The view changed during restoration. Reopen the report from the current view."):s("操作未完成。确认文件来自当前工具、帧号和参数有效，然后重试；具体原因可查看技术详情。","The operation did not complete. Confirm the file comes from this tool and its frame/settings are valid, then retry; technical details are below.")}function Cn({error:e,zh:a,resource:t,onRetry:s}){return e?n.createElement("div",{"data-os-loc":"src/AnalysisError.jsx:18:9",className:"analysis-error",role:"alert"},n.createElement("strong",{"data-os-loc":"src/AnalysisError.jsx:18:54"},a?"需要处理的问题":"Action needed"),t&&n.createElement("p",{"data-os-loc":"src/AnalysisError.jsx:18:112"},t),n.createElement("p",{"data-os-loc":"src/AnalysisError.jsx:18:130"},J0(e,a)),s&&n.createElement("button",{"data-os-loc":"src/AnalysisError.jsx:18:179","data-os-action":"",type:"button",onClick:s},a?"重新加载资源":"Reload resources"),n.createElement("details",{"data-os-loc":"src/AnalysisError.jsx:18:261"},n.createElement("summary",{"data-os-loc":"src/AnalysisError.jsx:18:270"},a?"技术详情":"Technical details"),n.createElement("code",{"data-os-loc":"src/AnalysisError.jsx:18:320"},String(e?.message??e)))):null}function K0({controlRef:e,ready:a,capture:t,prepareImport:s,applyImport:i,zh:o,unifiedRestore:r=!1}){const[c,d]=j.useState(null),[l,m]=j.useState(""),[b,v]=j.useState(""),[u,h]=j.useState(null),f=j.useRef(null),p=j.useRef(null),_=c?.language===o?c:null;function C(){f.current&&(f.current.abort(),f.current=null,m(o?"恢复已取消，保留新的操作。":"Restore cancelled; newer action retained."))}j.useImperativeHandle(e,()=>({cancel:C,clearSnapshot:()=>d(null),restoreText:(x,S)=>g({size:new TextEncoder().encode(x).length,text:async()=>x},S,!0)})),j.useEffect(()=>()=>f.current?.abort(),[]),j.useEffect(()=>{d(null),m("")},[o]),j.useEffect(()=>{const x=Object.values(_?.files??{}).map(S=>S.href).filter(S=>S?.startsWith("blob:"));return()=>{for(const S of x)URL.revokeObjectURL(S)}},[_?.files]);function w(){try{const x=t(),S=I0(x.record,x.canvas?.toDataURL?.("image/png")??null);d({...x,language:o,previewUrl:S.png?.href??null,files:S}),h(null),m(o?"已生成当前快照，三种导出使用同一报告。":"Snapshot created; all three downloads use this report.")}catch(x){h(x)}}async function g(x,S,B=!1){if(C(),!x)return;const A=new AbortController,y=()=>A.abort();S?.addEventListener("abort",y,{once:!0}),S?.aborted&&A.abort(),f.current=A,h(null),m(o?"正在核验报告与资源…":"Verifying report and resources…");try{if(x.size>1024*1024)throw Error("Report file too large");const M=await x.text();A.signal.throwIfAborted();const k=await s(M,A.signal);A.signal.throwIfAborted(),await i(k,A.signal),A.signal.throwIfAborted(),d(null),m(o?"已恢复帧、截面、选区与可用相机；数值来自重新核验的资源。":"Restored frame, section, ROI and available camera; values recomputed from verified resources.")}catch(M){if(A.signal.aborted||(h(M),m("")),B)throw M}finally{S?.removeEventListener("abort",y),f.current===A&&(f.current=null)}}const E={png:o?"下载汇报图片 PNG":"Download presentation PNG",csv:o?"下载数据表 CSV":"Download data table CSV",json:o?"保存可恢复分析 JSON":"Save restorable analysis JSON"};return n.createElement("section",{"data-os-loc":"src/field/ProtocolReportControls.jsx:25:9",className:"protocol-report","aria-label":"Protocol evidence report"},n.createElement("h3",{"data-os-loc":"src/field/ProtocolReportControls.jsx:25:84"},o?"保存与恢复分析":"Save and restore analysis"),n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:26:3"},o?"先确认当前帧、选区、截面和相机，再生成报告。三种下载使用同一快照；后续修改视图时，请更新快照后再导出。":"Confirm frame, ROI, section and camera, then create a report. All downloads use one snapshot; update it before exporting later view changes."),n.createElement("div",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:3",className:"reference-controls"},n.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:39","data-os-action":"",disabled:!a,onClick:w},_?o?"更新报告快照":"Update report snapshot":o?"生成当前报告":"Create current report"),Object.entries(E).map(([x,S])=>_?.files[x]?n.createElement("a",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:240","data-os-action":"",key:x,className:"report-download",href:_.files[x].href,download:_.files[x].name,onClick:()=>m(o?"下载已交给浏览器，请在下载列表确认文件。也可展开“下载帮助与 JSON 文本”复制完整分析。":"Download handed to the browser. Check its download list; Download help and JSON text also provides the complete analysis for copying.")},S):n.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:573",key:x,disabled:!0},S))),_&&n.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:12"},n.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:21"},o?"下载帮助与 JSON 文本":"Download help and JSON text"),n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:90"},o?"文件由浏览器保存，位置取决于浏览器设置。可在浏览器下载列表中找到文件。继续分析也可选中下方全部 JSON，按 Ctrl+C（Mac：⌘C）复制，再粘贴到顶部“恢复分析”；长期保留请下载 JSON 文件。":"Your browser saves the files according to its download settings. Find them in its download list. To resume without choosing a file, select all JSON below, copy with Ctrl+C (Mac: ⌘C), then paste into Restore analysis. Download the JSON file for long-term storage."),n.createElement("label",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:470"},o?"完整分析 JSON":"Complete analysis JSON",n.createElement("textarea",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:518",ref:p,"aria-label":"Report JSON for copying",rows:"6",readOnly:!0,spellCheck:!1,value:_.files.json.content})),n.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:662","data-os-action":"",type:"button",onClick:()=>{p.current?.focus(),p.current?.select(),m(o?"已选中完整 JSON。按 Ctrl+C（Mac：⌘C）复制。":"Complete JSON selected. Press Ctrl+C (Mac: ⌘C) to copy.")}},o?"选中全部 JSON":"Select all JSON")),!_&&n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:29:13"},o?"生成报告后即可下载。PNG用于展示，CSV保留数值，JSON用于继续同一次分析。":"Create a report to enable downloads. PNG is for presentation, CSV for numbers, and JSON for resuming the analysis."),_&&n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:30:12"},o?"导出快照 · 帧":"Export snapshot · frame"," ",_.record.view.frame," · ",_.record.createdAt," · ",_.record.view.geometry?o?"包含已核验三维":"Verified 3D included":o?"二维证据":"2D evidence"," · ",_.record.view.geometryStatus?.reason," · ",o?"后续操作不会改变此报告；更新快照可保存新状态。":"Later actions do not change this report; update the snapshot to save the new state."),_?.previewUrl&&n.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:24"},n.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:33"},o?"预览汇报图片":"Preview presentation image"),n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:94"},o?"预览与下载使用同一报告。如果浏览器未保存PNG，可在此图片上使用“图片另存为”。":"Preview and download use the same report. If the browser does not save the PNG, use Save image as on this preview."),n.createElement("img",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:265",src:_.previewUrl,alt:o?`帧 ${_.record.view.frame} 汇报图片`:`Frame ${_.record.view.frame} report image`,style:{display:"block",width:"100%",height:"auto"}})),r?n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:32:19"},n.createElement("a",{"data-os-loc":"src/field/ProtocolReportControls.jsx:32:22","data-os-action":"",href:"#restore-analysis",onClick:()=>{const x=document.getElementById("restore-analysis");x&&(x.open=!0)}},o?"恢复分析：选择文件或粘贴 JSON":"Restore analysis: choose a file or paste JSON")):n.createElement(n.Fragment,null,n.createElement("label",{"data-os-loc":"src/field/ProtocolReportControls.jsx:33:3"},o?"导入分析报告 JSON":"Import analysis report JSON"," ",n.createElement("input",{"data-os-loc":"src/field/ProtocolReportControls.jsx:33:59","data-os-action":"",type:"file",accept:"application/json,.json","aria-label":"Restore protocol report",onChange:x=>{g(x.target.files?.[0]),x.target.value=""}})),n.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:3"},n.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:12"},o?"粘贴报告 JSON":"Paste report JSON"),n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:67"},o?"文件选择不可用时，可粘贴报告内容，使用相同的核验与恢复流程。":"If file selection is unavailable, paste the report content for the same verified restoration."),n.createElement("textarea",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:207","data-os-action":"","aria-label":"Protocol report JSON text",rows:"6",value:b,onChange:x=>{C(),v(x.target.value)}}),n.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:332","data-os-action":"",disabled:!b.trim(),onClick:()=>g({size:new TextEncoder().encode(b).length,text:async()=>b})},o?"恢复粘贴的报告":"Restore pasted report"))),n.createElement(Cn,{error:u,zh:o}),n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:35:45",role:"status"},l))}const Ho=["xmin","xmax","zmin","zmax"];function Q0(e){return Number(e.toFixed(4)).toString()}function Kt(e){return Object.fromEntries(Ho.map(a=>[a,Q0(e[a])]))}function e1(e,a,t){const s={},i={};for(const o of Ho)!e[o]?.trim()||!Number.isFinite(Number(e[o]))?i[o]="number":s[o]=t[o]?Number(e[o]):a[o];for(const[o,r]of[["xmin","xmax"],["zmin","zmax"]])!i[o]&&!i[r]&&s[o]>s[r]&&(i[o]="order",i[r]="order");return{values:s,errors:i,valid:Object.keys(i).length===0}}function bs({profile:e,roi:a,limits:t,label:s,errorLimit:i,reviewId:o,crestPicker:r,profileKey:c}){const{language:d}=ue(),l=(g,E)=>d==="zh"?g:E,m=e.points,b=m[0].distance,v=m.at(-1).distance,u=Math.max(v-b,1e-9),h=Math.max(t[1]-t[0],1e-9),f=i??Math.max(1e-9,...m.map(g=>Math.abs(g.difference??0))),p=g=>45+(g-b)/u*620,_=g=>170-(g-t[0])/h*135,C=a?wt(e,a):null;function w(g){let E=!1;return m.map(x=>{if(!Number.isFinite(x[g]))return E=!1,"";const S=E?"L":"M";return E=!0,`${S}${p(x.distance)},${g==="difference"?245-x[g]/f*38:_(x[g])}`}).join(" ")}return n.createElement("figure",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:9","data-review-id":o,"data-profile-axis":[b,v,45,665].join(",")},n.createElement("figcaption",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:88"},s," · ",e.sampling==="native_columns"?l("原生列","Native columns"):l("插值诊断 · 四邻点共同有效","Interpolated diagnosis · all four neighbours valid")),n.createElement("svg",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:259",viewBox:"0 0 710 300",role:"img","aria-label":s},C&&n.createElement("rect",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:14:13",x:p(Math.max(b,C[0])),y:"25",width:Math.max(0,p(Math.min(v,C[1]))-p(Math.max(b,C[0]))),height:"255",fill:"#4ba8ad",opacity:".13"}),n.createElement("line",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:2",x1:p(0),x2:p(0),y1:"25",y2:"280",stroke:"#666",strokeDasharray:"4 3"}),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:82",x:p(0)+4,y:"20"},l("热点 0","Hotspot 0")),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:136",x:"3",y:"40"},t[1].toFixed(3)),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:184",x:"3",y:"175"},t[0].toFixed(3)),n.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:233",d:w("a"),fill:"none",stroke:"#2583c5",strokeWidth:"2"}),n.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:299",d:w("b"),fill:"none",stroke:"#e08b22",strokeWidth:"2"}),n.createElement("line",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:365",x1:"45",x2:"665",y1:"245",y2:"245",stroke:"#888"}),n.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:421",d:w("difference"),fill:"none",stroke:"#9b4778"}),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:480",x:"2",y:"245"},"B−A"),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:510",x:"45",y:"298"},b.toFixed(3)," m"),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:15:555",x:"540",y:"298"},v.toFixed(3)," m"),r&&a&&["a","b"].map(g=>Pa(e,a,g).map(E=>{const x=r.profile===c&&(g==="a"?r.gt:r.pred)===E;return n.createElement("circle",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:17:11","data-os-action":"",key:g+E,"data-crest-field":g,"data-sample":E,cx:p(m[E].distance),cy:_(m[E][g]),r:x?6:4,fill:x?g==="a"?"#176693":"#a75400":"white",stroke:g==="a"?"#176693":"#a75400",style:{cursor:"pointer"},onClick:()=>r.pick(c,g,E)},n.createElement("title",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:19:84"},g==="a"?"GT":l("预测","Prediction")," · s ",m[E].distance.toFixed(4)))}))),!m.some(g=>g.a!==null)&&n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:20:38"},l("此剖面无共同有效高度。","No common valid height on this profile.")))}const Rn=e=>e==null?"N/A":(e*100).toFixed(4)+" cm";function Ji({value:e,label:a}){const{language:t}=ue(),s=(i,o)=>t==="zh"?i:o;return n.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:8",className:"diagnostic-evidence","aria-label":a},n.createElement("strong",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:64"},a),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:88"},"MAE ",Rn(e.mae)," · Bias ",Rn(e.bias)," · RMSE ",Rn(e.rmse)),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:174"},s("候选原生列 ","Candidate native columns "),e.candidates,s(" / GT有效 "," / GT valid "),e.validGT,s(" / 预测有效 "," / Prediction valid "),e.validPrediction,s(" / 共同有效 "," / Common valid "),e.common),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:394"},s("共同/候选 ","Common/candidate "),e.coverageCandidate==null?"N/A":(e.coverageCandidate*100).toFixed(2)+"%",s(" · 共同/GT "," · Common/GT "),e.coverageGT==null?"N/A":(e.coverageGT*100).toFixed(2)+"%"),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:25:616"},s("最大绝对误差 ","Maximum absolute error "),Rn(e.maximum?.absolute)," ",e.maximum&&n.createElement(n.Fragment,null,s("· 有符号 ","· Signed "),Rn(e.maximum.signed),s(" · 原生索引 ("," · Native index ("),e.maximum.ix,",",e.maximum.iz,") · X ",e.maximum.x.toFixed(6)," / Z ",e.maximum.z.toFixed(6),s(" · 并列 "," · Ties "),e.maximum.ties,s("（按索引取首点）"," (first point by index)"))))}function Ki({value:e,label:a}){const{language:t}=ue(),s=(i,o)=>t==="zh"?i:o;return n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:28:8","aria-label":a},a,s(" · 有效样本 "," · Valid samples "),e.samples," · MAE ",Rn(e.mae)," · Bias ",Rn(e.bias),s(" · 最大 "," · Maximum "),Rn(e.maximum?.absolute))}function n1({spatial:e,diagnosis:a,roi:t,onDirection:s,onRegion:i,mode:o,setMode:r,onExit:c,onNote:d,onCrest:l}){const{language:m}=ue(),b=(g,E)=>m==="zh"?g:E,[v,u]=j.useState(""),h=j.useMemo(()=>a?ia(e,a):null,[e,a]),f=j.useMemo(()=>ta(e),[e]),p=j.useMemo(()=>t?ta(e,t):null,[e,t]),_=h?[...h.first.points,...h.second.points].flatMap(g=>[g.a,g.b]).filter(Number.isFinite):[],C=_.length?[Math.min(..._),Math.max(..._)]:[0,1];function w(g){g.preventDefault();const E=new FormData(g.currentTarget),x=Number(E.get("cx")),S=Number(E.get("cz")),B=Number(E.get("width")),A=Number(E.get("length"));if(![x,S,B,A].every(Number.isFinite)||B<e.descriptor.spacing||A<e.descriptor.spacing){u(b("尺寸至少为一个网格间距，请填写有限数字。","Enter finite numbers; each dimension must span at least one grid spacing."));return}const y={xmin:x-B/2,xmax:x+B/2,zmin:S-A/2,zmax:S+A/2};if(Ba(y,_t(e)).clipped){u(b("选区超出数据范围，请缩小尺寸或移动中心。","The ROI exceeds the data bounds. Reduce its size or move its centre."));return}i(y),u("")}return n.createElement("section",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:9","aria-label":"Hotspot diagnosis"},n.createElement(Ji,{value:f,label:b("全域诊断 · 原生列","Full-domain diagnosis · native columns")}),p&&n.createElement(Ji,{value:p,label:b("ROI诊断 · 原生列","ROI diagnosis · native columns")}),n.createElement("h3",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:252"},b("热点与双剖面 · 最高过零高度","Hotspot and paired profiles · highest zero-crossing height")),n.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:344",className:"hotspot-actions"},n.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:377","data-os-action":"","aria-pressed":o==="select",onClick:()=>r("select")},b("定位热点","Locate hotspot")),n.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:36:485","data-os-action":"","aria-pressed":o==="adjust",onClick:()=>r("adjust")},b("调整选区","Adjust ROI"))),a?n.createElement(n.Fragment,null,n.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:137"},b("案例观察（120字以内，非自动归因）","Case observation (up to 120 characters; no automatic attribution)"),n.createElement("textarea",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:237","data-os-action":"","aria-label":"Diagnosis case note",maxLength:"120",value:a.caseNote??"",onChange:g=>d(g.target.value)})),n.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:373","data-os-action":"",onClick:c},b("退出热点诊断","Exit hotspot diagnosis")),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:445","aria-label":"Hotspot coordinates"},b("帧 ","Frame "),a.frame,b(" · 索引 ("," · Index ("),a.hotspot.ix,", ",a.hotspot.iz,") · X ",a.hotspot.x.toFixed(6)," / Z ",a.hotspot.z.toFixed(6)," m"),n.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:670"},b("剖面方向（场景轴 / 手动方向）","Profile direction (scene axes / manual angle)"),n.createElement("input",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:748","data-os-action":"","aria-label":"Hotspot direction",type:"number",min:"0",max:"180",step:"1",value:a.directionDeg,onChange:g=>{const E=g.target.valueAsNumber;Number.isFinite(E)&&E>=0&&E<=180&&s(E%180)}})),n.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:969","data-os-action":"",onClick:()=>s(0)},b("回到场景轴","Reset to scene axes"))):n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:37:14"},b("在任意高度图点击共同有效点，暂停并创建热点选区。","Click a common valid point on any height map to pause and create a hotspot ROI.")),t&&n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:10","aria-label":"Hotspot ROI summary"},b("ROI中心 X ","ROI centre X "),((t.xmin+t.xmax)/2).toFixed(4)," / Z ",((t.zmin+t.zmax)/2).toFixed(4),b(" · 宽 "," · Width "),(t.xmax-t.xmin).toFixed(4),b(" / 长 "," / Length "),(t.zmax-t.zmin).toFixed(4),b(" m（来源约定，未独立标定）"," m (source convention; not independently calibrated)")),n.createElement("form",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:347",key:JSON.stringify(t),onSubmit:w,className:"hotspot-roi-edit"},[["cx",b("中心X","Centre X"),(t.xmin+t.xmax)/2],["cz",b("中心Z","Centre Z"),(t.zmin+t.zmax)/2],["width",b("X宽","X width"),t.xmax-t.xmin],["length",b("Z长","Z length"),t.zmax-t.zmin]].map(([g,E,x])=>n.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:645",key:g},E,n.createElement("input",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:670",required:!0,name:g,"aria-label":"Hotspot ROI "+g,type:"number",step:"any",defaultValue:x}))),n.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:38:788"},b("应用中心与尺寸","Apply centre and dimensions")))),v&&n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:39:14",role:"alert"},v),a&&t&&(a.hotspot.x<t.xmin||a.hotspot.x>t.xmax||a.hotspot.z<t.zmin||a.hotspot.z>t.zmax)&&n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:39:185"},b("热点在选区外；剖面仍锚定原热点。","The hotspot is outside the ROI; profiles remain anchored to the original hotspot.")),h&&n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:40:15"},b("蓝色GT / 橙色预测；紫色B−A。横轴为距热点的有符号距离；阴影为ROI交段，缺测断线。两图共享高度范围。","GT blue / prediction orange / B−A purple. Signed distance from the hotspot; shading marks the ROI intersection. Missing samples break the line. Both plots share a height range.")),n.createElement(Ct,{key:JSON.stringify([a.hotspot.index,a.directionDeg,t,a.crest]),surface:{profiles:h,roi:t},mark:a.crest,onApply:l,zh:m==="zh",allowUnpaired:!!t},g=>n.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:40:493",className:"hotspot-profiles"},n.createElement(bs,{crestPicker:g,profileKey:"first",reviewId:"hotspot-profile-along",profile:h.first,roi:t,limits:C,label:b("热点剖面1","Hotspot profile 1")}),n.createElement(bs,{crestPicker:g,profileKey:"second",reviewId:"hotspot-profile-across",profile:h.second,roi:t,limits:C,label:b("热点剖面2","Hotspot profile 2")}))),[["first",b("剖面1","Profile 1")],["second",b("剖面2","Profile 2")]].map(([g,E])=>{const x=ds(h[g],t);return n.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:40:1031",key:g},n.createElement(Ki,{value:x.full,label:E+b("全线 · 样本等权"," · Full line · equal sample weights")}),x.roi&&n.createElement(Ki,{value:x.roi,label:E+b("选区内 · 样本等权"," · Within ROI · equal sample weights")}))}),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:40:1259"},b("剖面统计按曲线样本等权，不等同原生列面积统计。可到“报告与恢复”生成含双剖面的PNG、CSV和可恢复JSON。","Profile statistics weight curve samples equally; they are not native-column area statistics. Open Reports & restore to generate PNG, CSV and restorable JSON with both profiles."))))}const Qi={schema:"oceanscope.half-sample.v1",formula:"A*cos(2*pi*(x-c)/wavelength)",wavelength:2,amplitude:1,referenceCentre:0,shift:.0125,dx:.025,first:-40,last:40,units:"scene"};function eo(){const e=Qi,a=(l,m)=>e.amplitude*Math.cos(2*Math.PI*(l-m)/e.wavelength),t=Array.from({length:e.last-e.first+1},(l,m)=>{const b=(e.first+m)*e.dx;return{x:b,z:0,a:a(b,e.referenceCentre),b:a(b,e.referenceCentre+e.shift)}}),s={xmin:-1,xmax:1,zmin:0,zmax:0},i=l=>Pa({points:t},s,l).map(m=>t[m].x),o=t.find(l=>l.x===i("a")[0]),r=Math.max(...t.map(l=>l.b)),c=t.filter(l=>l.b===r),d={referenceX:o.x,referenceHeight:o.a,strictShiftedCandidates:i("b"),highestSampleXs:c.map(l=>l.x),highestSampleHeight:r,shiftErrorsIfEndpointChosen:c.map(l=>l.x-o.x-e.shift),heightError:r-e.amplitude,midpointEstimate:(c[0].x+c.at(-1).x)/2};return{points:t,report:{recipe:Qi,readings:d}}}function a1({zh:e}){const[a,t]=j.useState(null),[s,i]=j.useState(null),[o,r]=j.useState(""),c=j.useRef(null),d=(f,p)=>e?f:p;async function l(f){if(f)try{const p=eo(),_=JSON.parse(await f.text());if(JSON.stringify(_)!==JSON.stringify(p.report))throw Error();i(p),r(d("已重新采样并核对读数","Resampled and verified"))}catch{r(d("文件与半格对照不匹配","File does not match the half-step control"))}}const m=s?.report.readings,b=s?.report.recipe,v=f=>63+(f+.05)*4800,u=f=>180-(f-.999)*24e3;function h(f){const p=[["quantity","truth","sample_readout","signed_error","interpretation"],["peak_x_left",b.shift,m.highestSampleXs[0],m.shiftErrorsIfEndpointChosen[0],"tied endpoint"],["peak_x_right",b.shift,m.highestSampleXs[1],m.shiftErrorsIfEndpointChosen[1],"tied endpoint"],["peak_height",b.amplitude,m.highestSampleHeight,m.heightError,"sample maximum"],["peak_x_midpoint",b.shift,m.midpointEstimate,m.midpointEstimate-b.shift,"symmetry estimate only"],["strict_shifted_crest_count","",m.strictShiftedCandidates.length,"","strictly higher than both neighbours"]].map(_=>_.join(",")).join(`
`);Wn("half-sample."+f,{json:"application/json",csv:"text/csv",svg:"image/svg+xml"}[f],f==="json"?JSON.stringify(s.report,null,2):f==="csv"?p:c.current.outerHTML)}return n.createElement("section",{"data-os-loc":"src/field/HalfSample.jsx:28:9","aria-label":"Half-sample crest"},n.createElement("h3",{"data-os-loc":"src/field/HalfSample.jsx:28:49"},d("半格平移：峰顶落在哪里？","Half-step shift: where is the crest?")),n.createElement("button",{"data-os-loc":"src/field/HalfSample.jsx:29:2","data-os-action":"",onClick:()=>{i(eo()),r("")}},d("查看半格平移","Inspect half-step shift"))," ",n.createElement("label",{"data-os-loc":"src/field/HalfSample.jsx:29:120"},d("恢复半格 JSON","Restore half-step JSON")," ",n.createElement("input",{"data-os-loc":"src/field/HalfSample.jsx:29:169","data-os-action":"",type:"file",accept:".json","aria-label":"Restore half-step JSON",onChange:f=>{l(f.target.files[0]),f.target.value=""}})),n.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:29:310",role:"status"},o),s&&n.createElement(n.Fragment,null,n.createElement("svg",{"data-os-loc":"src/field/HalfSample.jsx:30:11",ref:c,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 720 350",role:"img","aria-label":"Half-step crest detail",style:{width:"100%",maxWidth:900},fontFamily:"sans-serif",fill:"#18374b"},n.createElement("rect",{"data-os-loc":"src/field/HalfSample.jsx:31:2",width:"720",height:"350",fill:"#f7fbfd"}),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:31:49",x:"24",y:"35",fontSize:"22"},"半格平移 / Half-step crest"),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:31:112",x:"24",y:"61",fontSize:"15"},"Δx = 0.025   ·   c: 0 → 0.0125   ·   A = 1   ·   scene units"),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:32:2",x:"24",y:"99",fontSize:"14"},"峰顶放大 / Crest detail"),[1,.999,.997].map(f=>n.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:33:24",key:f},n.createElement("path",{"data-os-loc":"src/field/HalfSample.jsx:33:35",d:"M63 "+u(f)+"h605",stroke:"#d8e3e7"}),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:33:82",x:"12",y:u(f)+5},f))),n.createElement("defs",{"data-os-loc":"src/field/HalfSample.jsx:34:2"},n.createElement("clipPath",{"data-os-loc":"src/field/HalfSample.jsx:34:8",id:"half-crest-zoom"},n.createElement("rect",{"data-os-loc":"src/field/HalfSample.jsx:34:39",x:"63",y:"132",width:"605",height:"128"}))),n.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:35:2",clipPath:"url(#half-crest-zoom)"},["a","b"].map((f,p)=>n.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:35:60",key:f,fill:p?"#bd5010":"#19658a",stroke:p?"#bd5010":"#19658a"},n.createElement("polyline",{"data-os-loc":"src/field/HalfSample.jsx:35:131",fill:"none",strokeWidth:"2",points:s.points.map(_=>v(_.x)+","+u(_[f])).join(" ")}),s.points.filter(_=>_.x>=-.05&&_.x<=.075).map(_=>n.createElement("circle",{"data-os-loc":"src/field/HalfSample.jsx:35:280",key:_.x,cx:v(_.x),cy:u(_[f]),r:"4"}))))),n.createElement("path",{"data-os-loc":"src/field/HalfSample.jsx:36:2",d:"M"+v(b.shift)+" 120V260",stroke:"#654493",strokeDasharray:"4 3"}),n.createElement("circle",{"data-os-loc":"src/field/HalfSample.jsx:36:78",cx:v(b.shift),cy:u(1),r:"5",stroke:"#654493",strokeWidth:"2",fill:"white"}),[-.025,0,.025,.05].map(f=>n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:37:29",x:v(f),y:"279",textAnchor:"middle",key:f},f)),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:38:2",x:"24",y:"309",fontSize:"15"},"蓝 / Reference　 橙 / Shifted samples　 ○ 解析峰 / True crest"),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:38:98",x:"24",y:"333",fontSize:"14"},"x ∈ {0, 0.025}　 ·　 sampled height = ",m.highestSampleHeight.toFixed(9))),n.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:39:2"},d("严格局部峰：","Strict local crests: "),m.strictShiftedCandidates.length,"。",d("两个最高采样点等高，不能唯一读回峰位。","The two highest samples tie; neither is a unique crest.")),n.createElement("table",{"data-os-loc":"src/field/HalfSample.jsx:40:2"},n.createElement("thead",{"data-os-loc":"src/field/HalfSample.jsx:40:9"},n.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:40:16"},(e?["量","解析真值","采样读数","读数减真值"]:["Quantity","Truth","Sample readout","Readout minus truth"]).map(f=>n.createElement("th",{"data-os-loc":"src/field/HalfSample.jsx:40:121",key:f},f)))),n.createElement("tbody",{"data-os-loc":"src/field/HalfSample.jsx:40:156"},n.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:40:163"},n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:167"},d("峰位","Crest x")),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:195"},b.shift),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:213"},m.highestSampleXs.join(" / ")),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:253"},m.shiftErrorsIfEndpointChosen.join(" / +"))),n.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:40:311"},n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:315"},d("峰高","Elevation")),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:345"},b.amplitude),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:367"},m.highestSampleHeight.toFixed(9)),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:40:410"},m.heightError.toFixed(9))))),n.createElement(Ct,{surface:{roi:{xmin:-1,xmax:1,zmin:0,zmax:0},profiles:{first:{points:s.points.map(f=>({...f,distance:f.x}))}}},mark:a,onApply:t,zh:e,allowUnpaired:!0}),n.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:42:2"},d("若利用对称性，两个最高点的中点估计为","Using symmetry, the midpoint estimate is")," ",m.midpointEstimate,"。",d("这是估计值，并非某个采样点的位置。","This estimate is not a sampled position.")),["json","svg","csv"].map(f=>n.createElement("button",{"data-os-loc":"src/field/HalfSample.jsx:43:33","data-os-action":"",key:f,onClick:()=>h(f)},d("导出","Export")," ",f.toUpperCase()))))}const gt={schema:"oceanscope.analytic-wave.v1",formula:"A*cos(2*pi*(x-c)/wavelength)",units:"scene",xmin:-1,xmax:1,dx:.025,wavelength:2,reference:{A:1,c:0},controls:[{id:"height",A:.75,c:0},{id:"position",A:1,c:.25}]},Lo=e=>e.controls.map(a=>{const t=(b,v)=>b.A*Math.cos(2*Math.PI*(v-b.c)/e.wavelength),s=Array.from({length:1+Math.round((e.xmax-e.xmin)/e.dx)},(b,v)=>{const u=e.xmin+v*e.dx;return{x:u,z:0,distance:u,a:t(e.reference,u),b:t(a,u)}}),i={points:s},o={xmin:e.xmin,xmax:e.xmax,zmin:0,zmax:0},r=b=>{const v=Pa(i,o,b);if(v.length!==1)throw Error("Expected one interior crest");return v[0]},{gt:c,pred:d,deltaHeight:l,deltaDistance:m}=sa({roi:o,profiles:{first:i}},{profile:"first",a:r("a"),b:r("b"),status:"paired"});return{points:s,result:{id:a.id,gtX:c.x,gtHeight:c.a,predX:d.x,predHeight:d.b,expectedHeight:a.A-e.reference.A,measuredHeight:l,expectedShift:a.c-e.reference.c,measuredShift:m}}}),rt=Lo(gt),ps={recipe:gt,readings:rt.map(e=>e.result)},t1=JSON.stringify(ps,null,2);function s1({zh:e}){const[a,t]=j.useState(null),s=j.useRef(null),[i,o]=j.useState(!1),[r,c]=j.useState("");async function d(l){if(l)try{const m=JSON.parse(await l.text()),b=(v,u)=>v===u||v&&u&&typeof v=="object"&&typeof u=="object"&&Object.keys(v).length===Object.keys(u).length&&Object.keys(v).every(h=>Object.hasOwn(u,h)&&b(v[h],u[h]));if(!b(m.recipe,gt)||!b(m.readings,Lo(gt).map(v=>v.result)))throw Error();o(!0),c(e?"已重新采样并核对读数":"Resampled and verified")}catch{c(e?"此文件与解析对照不匹配":"File does not match this control")}}return n.createElement("section",{"data-os-loc":"src/field/AnalyticWave.jsx:25:9","aria-label":"Analytic wave control"},n.createElement("h3",{"data-os-loc":"src/field/AnalyticWave.jsx:25:53"},e?"解析波面校验":"Analytic wave control"),n.createElement("button",{"data-os-loc":"src/field/AnalyticWave.jsx:25:99","data-os-action":"",onClick:()=>o(!0)},e?"打开峰高与峰位对照":"Open crest controls")," ",n.createElement("label",{"data-os-loc":"src/field/AnalyticWave.jsx:25:180"},e?"恢复解析波面 JSON":"Restore analytic JSON"," ",n.createElement("input",{"data-os-loc":"src/field/AnalyticWave.jsx:25:230","data-os-action":"",type:"file","aria-label":"Restore analytic JSON",accept:".json",onChange:l=>{d(l.target.files[0]),l.target.value=""}})),n.createElement("p",{"data-os-loc":"src/field/AnalyticWave.jsx:25:370",role:"status"},r),i&&n.createElement(n.Fragment,null,n.createElement("svg",{"data-os-loc":"src/field/AnalyticWave.jsx:26:11",xmlns:"http://www.w3.org/2000/svg",ref:s,role:"img","aria-label":"Analytic crest comparison",viewBox:"0 0 760 370",style:{width:"100%",maxWidth:920},fontFamily:"sans-serif",fill:"#173950"},n.createElement("rect",{"data-os-loc":"src/field/AnalyticWave.jsx:27:2",width:"760",height:"370",fill:"#f7fbfd"}),n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:27:49",x:"24",y:"32",fontSize:"21"},"解析波面校验 / Analytic crest controls"),n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:27:122",x:"24",y:"58",fontSize:"14"},"η = A cos(2π(x−c)/2)   ·   Δx = 0.025   ·   81 samples   ·   scene units"),rt.map(({points:l,result:m},b)=>{const v=h=>70+b*370+(h+1)*140,u=h=>199-h*78;return n.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:29:9",key:m.id},n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:29:23",x:v(-1),y:"94",fontSize:"16"},b?"仅平移 / Shift only":"仅降幅 / Amplitude only"),n.createElement("path",{"data-os-loc":"src/field/AnalyticWave.jsx:30:2",d:`M${v(-1)} 113V280H${v(1)} M${v(-1)} 199H${v(1)}`,fill:"none",stroke:"#b3c5cb"}),[-1,0,1].map(h=>n.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:30:109",key:h},n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:30:120",x:v(h)-5,y:"298"},h),n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:30:155",x:v(-1)-28,y:u(h)+4},h))),["a","b"].map((h,f)=>n.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:31:24",key:h,stroke:f?"#bf540e":"#11669b",fill:"none"},n.createElement("polyline",{"data-os-loc":"src/field/AnalyticWave.jsx:31:78",strokeWidth:"2.5",strokeDasharray:f?"6 3":void 0,points:l.map(p=>v(p.x)+","+u(p[h])).join(" ")}),n.createElement("circle",{"data-os-loc":"src/field/AnalyticWave.jsx:31:196",cx:v(f?m.predX:m.gtX),cy:u(f?m.predHeight:m.gtHeight),r:"4",fill:"white",strokeWidth:"2"}))),n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:32:2",x:v(-1),y:"324"},"Δη = ",m.measuredHeight.toFixed(2),"   ·   Δx crest = ",m.measuredShift.toFixed(2)))}),n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:33:2",x:"25",y:"355",fontSize:"14"},"蓝实线 Reference　 橙虚线 Perturbation　 ○ 采样峰顶 / Sampled crest")),n.createElement("table",{"data-os-loc":"src/field/AnalyticWave.jsx:34:2"},n.createElement("thead",{"data-os-loc":"src/field/AnalyticWave.jsx:34:9"},n.createElement("tr",{"data-os-loc":"src/field/AnalyticWave.jsx:34:16"},(e?["对照","峰高差：设定 / 读回","峰位差：设定 / 读回"]:["Control","Crest elevation: set / read","Crest shift: set / read"]).map(l=>n.createElement("th",{"data-os-loc":"src/field/AnalyticWave.jsx:34:136",key:l},l)))),n.createElement("tbody",{"data-os-loc":"src/field/AnalyticWave.jsx:34:171"},rt.map(({result:l})=>n.createElement("tr",{"data-os-loc":"src/field/AnalyticWave.jsx:34:202",key:l.id},n.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:34:217"},l.id),n.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:34:232"},l.expectedHeight," / ",l.measuredHeight),n.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:34:280"},l.expectedShift," / ",l.measuredShift))))),n.createElement(Ct,{surface:{roi:{xmin:-1,xmax:1,zmin:0,zmax:0},profiles:{first:{points:rt[0].points}}},mark:a,onApply:t,zh:e,allowUnpaired:!0}),n.createElement("p",{"data-os-loc":"src/field/AnalyticWave.jsx:36:2"},e?"峰顶在采样点上。此对照检验剖面峰值读数，不代表真实重建精度。":"Crests lie on sample points. This checks profile readout, not reconstruction accuracy."),["json","svg","csv"].map(l=>n.createElement("button",{"data-os-loc":"src/field/AnalyticWave.jsx:37:33","data-os-action":"",key:l,onClick:()=>Wn("analytic-wave."+l,{json:"application/json",csv:"text/csv",svg:"image/svg+xml"}[l],l==="json"?t1:l==="svg"?s.current.outerHTML:[Object.keys(ps.readings[0]),...ps.readings.map(Object.values)].map(m=>m.join(",")).join(`
`))},e?"导出":"Export"," ",l.toUpperCase()))))}const wn="review/b-case-metrics.js",us=[{id:"rmse",zh:"ROI 高度均方根误差",en:"ROI height RMSE",expr:"row.stats.rmse",read:e=>e.stats.rmse},{id:"bias",zh:"ROI 平均有符号误差",en:"ROI mean signed error",expr:"row.stats.bias",read:e=>e.stats.bias},{id:"mae",zh:"ROI 平均绝对误差",en:"ROI mean absolute error",expr:"row.stats.mae",read:e=>e.stats.mae},{id:"maximum",zh:"ROI 最大绝对误差",en:"ROI maximum absolute error",expr:"row.stats.maximum?.absolute",read:e=>e.stats.maximum?.absolute},{id:"centre",zh:"中心高度差",en:"Centre height difference",expr:"row.centre?.difference",read:e=>e.centre?.difference}],Qt=e=>"'"+e.replaceAll("\\","\\\\").replaceAll("'","\\'")+"'",i1=/^[a-z][a-z0-9_-]{0,39}$/,qa={id:"rmse",field:"rmse",en:"ROI height RMSE",zh:"ROI 高度均方根误差",precision:5};function o1(e,a,t=null){const s=a.id.trim(),i=a.zh.trim(),o=a.en.trim(),r=us.find(B=>B.id===a.field);if(!i1.test(s))return{error:"id"};if(!i||!o||[i,o].some(B=>B.length>80||/[\x00-\x1f\x7f\u2028\u2029]/u.test(B)))return{error:"label"};if(!r||!Number.isInteger(a.precision)||a.precision<0||a.precision>10)return{error:"field"};const c=e.split(`
`),d=c.findLastIndex(B=>B.trimEnd()==="];");if(d<1||c.filter(B=>B.trimEnd()==="export const metrics = [").length!==1||c.slice(d+1).some(B=>B.trim()))return{error:"format"};const l=c.findIndex(B=>B.trimEnd()==="export const metrics = ["),m=c.map(B=>B.match(/^\s*\{\s*id:\s*['"]([a-z][a-z0-9_-]*)['"],.*read:\s*row\s*=>\s*row[.?\w]+\s*\},\s*$/u)?.[1]);if(d<=l||c.slice(l+1,d).some((B,A)=>B.trim()&&!B.trimStart().startsWith("//")&&!m[l+A+1]))return{error:"format"};const b=m.filter(Boolean);if(new Set(b).size!==b.length)return{error:"format"};const v=m.indexOf(s);if(t===null&&v>=0)return{error:"duplicate"};if(t!==null&&(t!==s||v<0))return{error:"format"};const u=a.precision===5?"":", precision: "+a.precision,h=c[v<0?d-1:v].endsWith("\r")?"\r":"",f="  { id: "+Qt(s)+", en: "+Qt(o)+", zh: "+Qt(i)+u+", read: row => "+r.expr+" },"+h,p=v<0?d:v,_=v<0?[]:[c[p]];if(_[0]===f)return{error:"unchanged"};const C=c.slice(Math.max(0,p-3),p),w=c.slice(p+_.length).filter((B,A,y)=>A<y.length-1||y[A]!=="").slice(0,3),g=[...c];g.splice(p,_.length,f);const E=p-C.length+1,x=C.length+w.length,S=["--- a/"+wn,"+++ b/"+wn,"@@ -"+E+","+(x+_.length)+" +"+E+","+(x+1)+" @@",...C.map(B=>" "+B),..._.map(B=>"-"+B),"+"+f,...w.map(B=>" "+B)].join(`
`)+`
`;return{id:s,source:g.join(`
`),diff:S,old:_[0]||"",line:f,field:r,precision:a.precision}}async function no(e){const a=new TextEncoder,t=a.encode("blob "+a.encode(e).length+"\0"+e),s=await crypto.subtle.digest("SHA-1",t);return Array.from(new Uint8Array(s),i=>i.toString(16).padStart(2,"0")).join("")}const qo="ALSc001",r1="https://api.github.com/repos/"+qo+"/oceanscope-demo-v2";async function Ya(e,a,t=!1){const s=await fetch(r1+e,{headers:{Accept:"application/vnd.github+json"},cache:"no-store",signal:a});if(t&&s.status===404)return null;if(!s.ok)throw Error(String(s.status));return s.json()}async function c1(e,a,t,s){const[i,o,r]=await Promise.all([no(e),no(a.source),Ya("/contents/"+wn+"?ref=main",s)]),c="codex/b-metric-"+a.id+"-"+o.slice(0,12);if(r.sha===o)return{kind:"published",url:wa+"/blob/main/"+wn,branch:c};if(r.sha!==i)return{kind:"stale"};const d=await Ya("/contents/"+wn+"?ref="+encodeURIComponent(c),s,!0);if(!d)return{kind:"editor",url:wa+"/edit/main/"+wn,branch:c};if(d.sha!==o)return{kind:"stale"};const l=await Ya("/compare/main..."+encodeURIComponent(c),s);if(l.files?.length!==1||l.files[0].filename!==wn||l.files[0].sha!==o)return{kind:"stale"};const m=await Ya("/pulls?state=open&base=main&head="+encodeURIComponent(qo+":"+c),s);if(m.length)return{kind:"open",url:m[0].html_url,number:m[0].number,branch:c};const b=new URLSearchParams({expand:"1",title:"Region B: "+a.field.en,body:t});return{kind:"compare",url:wa+"/compare/main..."+c+"?"+b,branch:c}}const l1={id:["标识需以小写字母开头，最多 40 个字符。","Use a lowercase identifier of up to 40 characters."],label:["请填写中英文名称，每个最多 80 个字符。","Enter both labels, up to 80 characters each."],field:["请选择统计量和 0–10 位小数。","Choose a statistic and 0–10 decimal places."],duplicate:["该标识已存在。可选择编辑已有指标。","This identifier exists. Choose the existing metric to edit it."],unchanged:["请修改名称、统计量或显示精度。","Change a label, statistic or display precision."],format:["当前源码格式需要在 GitHub 编辑。","Open GitHub to edit this source format."]};function d1({proposal:e,base:a,body:t,zh:s}){const i=(v,u)=>s?v:u,[o,r]=j.useState(null),[c,d]=j.useState(""),l=j.useRef(null);j.useEffect(()=>()=>l.current?.abort(),[]);async function m(){l.current?.abort();const v=new AbortController;l.current=v,r({kind:"loading"}),d("");const u=setTimeout(()=>{v.signal.aborted||(v.abort(),r({kind:"failed"}))},15e3);try{const h=await c1(a,e,t,v.signal);v.signal.aborted||r(h)}catch{v.signal.aborted||r({kind:"failed"})}finally{clearTimeout(u)}}async function b(){try{await navigator.clipboard.writeText(e.source),d(i("已复制候选文件","Candidate file copied"))}catch{d(i("请下载候选文件，或在文本框中全选复制。","Download the candidate or select and copy its text."))}}return n.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:33:10",className:"proposal-submit"},n.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:34:5","data-os-action":"",type:"button",onClick:m,disabled:o?.kind==="loading"},i("准备提交 PR","Prepare pull request")),o?.kind==="loading"&&n.createElement("span",{"data-os-loc":"src/field/MetricProposal.jsx:35:32",role:"status"},i("正在核对 GitHub 文件与提案分支…","Checking the GitHub file and proposal branch…")),o?.kind==="stale"&&n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:36:30",role:"alert"},i("GitHub 文件已变更。请与最新源码核对后重新生成提案。","The GitHub file has changed. Compare the latest source and regenerate the proposal.")),o?.kind==="failed"&&n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:37:31",role:"alert"},i("无法核对 GitHub，可重试或下载补丁，在最新源码上检查后提交。","GitHub could not be checked. Retry or download the patch and check it against the latest source.")),o?.kind==="open"&&n.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:38:29",href:o.url,target:"_blank",rel:"noreferrer"},i("查看已提交的 PR","View submitted PR")," #",o.number),o?.kind==="published"&&n.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:39:34",href:o.url,target:"_blank",rel:"noreferrer"},i("这份代码已在主分支，查看文件","This version is on main. View file")),o?.kind==="compare"&&n.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:40:32",href:o.url,target:"_blank",rel:"noreferrer"},i("在 GitHub 确认创建 PR","Confirm pull request on GitHub")),o?.kind==="editor"&&n.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:41:31"},n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:42:7"},i("复制候选文件，在 GitHub 编辑器中替换内容，选择新分支或个人 fork，然后创建 PR。","Copy the candidate, paste it into the GitHub editor, then choose a new branch or your fork and create a pull request.")),n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:43:7"},n.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:43:10","data-os-action":"",type:"button",onClick:b},i("复制候选文件","Copy candidate file"))," ",n.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:44:7",href:o.url,target:"_blank",rel:"noreferrer"},i("打开 GitHub 编辑器","Open GitHub editor"))),n.createElement("small",{"data-os-loc":"src/field/MetricProposal.jsx:45:7"},i("建议分支","Suggested branch")," ",n.createElement("code",{"data-os-loc":"src/field/MetricProposal.jsx:45:45"},o.branch)),n.createElement("details",{"data-os-loc":"src/field/MetricProposal.jsx:46:7"},n.createElement("summary",{"data-os-loc":"src/field/MetricProposal.jsx:46:16"},i("候选文件全文","Complete candidate file")),n.createElement("textarea",{"data-os-loc":"src/field/MetricProposal.jsx:46:74",readOnly:!0,value:e.source,"aria-label":"Candidate metric module",rows:7})),c&&n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:47:16",role:"status"},c)))}function f1({metrics:e,rows:a,zh:t}){const s=(y,M)=>t?y:M,i=e.some(y=>y.id==="rmse"),o=()=>i?{...qa,id:"",en:"",zh:""}:{...qa},[r,c]=j.useState(()=>!i&&new URLSearchParams(location.search).get("proposal")==="rmse"),[d,l]=j.useState(""),[m,b]=j.useState(!1),[v,u]=j.useState(0),[h,f]=j.useState(""),[p,_]=j.useState(o);j.useEffect(()=>{if(!r)return;const y=new AbortController;return b(!1),fetch(new URL(wn,document.baseURI),{signal:y.signal,cache:"no-store"}).then(M=>{if(!M.ok)throw Error("Metric module unavailable");return M.text()}).then(M=>{y.signal.aborted||l(M)}).catch(()=>{y.signal.aborted||b(!0)}),()=>y.abort()},[r,v]);function C(y){if(f(y),!y){_(o());return}const M=e.find(F=>F.id===y),k=d.split(`
`).find(F=>F.trimStart().startsWith("{ id: '"+y+"',")||F.trimStart().startsWith('{ id: "'+y+'",')),I=us.find(F=>k?.includes("read: row => "+F.expr+" }"));_({id:y,en:M.en,zh:M.zh,field:I?.id||"",precision:M.precision??5})}function w(y,M){_(k=>({...k,[y]:M}))}const g=d&&o1(d,p,h||null),E=e.find(y=>y.id===h),x=[1050,1054].map(y=>a.find(M=>M.frameId===y)),S=g&&!g.error&&x.every(Boolean),B=(y,M)=>Number.isFinite(y)?y.toFixed(M):"—",A=S?["Region B · Gentle GT / Best_1027",p.en+" ("+p.id+")","Definition: "+g.field.expr+"; decimals: "+g.precision,...x.map(y=>"Frame "+y.frameId+": "+B(g.field.read(y),g.precision)+" scene units, "+y.stats.common+" common native columns."),p.id==="rmse"&&p.field==="rmse"&&p.en===qa.en&&p.zh===qa.zh&&p.precision===5?li.replace("#analysis-height","&proposal=rmse#analysis-height"):li].join(`

`):"";return n.createElement("section",{"data-os-loc":"src/field/MetricProposal.jsx:82:10",className:"metric-proposal","aria-label":"Region B metric proposal"},n.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:83:5","data-os-action":"",type:"button","aria-expanded":r,onClick:()=>c(y=>!y)},r?s("收起指标编辑","Close metric editor"):s("改指标并预览","Edit and preview a metric")),r&&n.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:84:14"},m?n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:85:15",role:"alert"},s("未能读取当前指标文件。","Metric source unavailable.")," ",n.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:85:79","data-os-action":"",onClick:()=>u(y=>y+1)},s("重试","Retry"))):d?n.createElement(n.Fragment,null,n.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:86:7",className:"proposal-fields"},n.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:87:9"},s("编辑对象","Metric to edit"),n.createElement("select",{"data-os-loc":"src/field/MetricProposal.jsx:87:44","data-os-action":"","aria-label":"Metric to edit",value:h,onChange:y=>C(y.target.value)},n.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:87:134",value:""},s("新增指标","New metric")),e.map(y=>n.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:87:200",key:y.id,value:y.id},t?y.zh:y.en)))),n.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:88:9"},s("标识","Identifier"),n.createElement("input",{"data-os-loc":"src/field/MetricProposal.jsx:88:38","data-os-action":"","aria-label":"Metric identifier",value:p.id,readOnly:!!h,onChange:y=>w("id",y.target.value)})),n.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:89:9"},s("统计量","Statistic"),n.createElement("select",{"data-os-loc":"src/field/MetricProposal.jsx:89:38","data-os-action":"","aria-label":"Candidate statistic",value:p.field,onChange:y=>w("field",y.target.value)},!p.field&&n.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:89:158",value:""},"—"),us.map(y=>n.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:89:201",value:y.id,key:y.id},t?y.zh:y.en)))),n.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:90:9"},s("中文名称","Chinese label"),n.createElement("input",{"data-os-loc":"src/field/MetricProposal.jsx:90:43","data-os-action":"","aria-label":"Chinese metric label",value:p.zh,maxLength:80,onChange:y=>w("zh",y.target.value)})),n.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:91:9"},s("英文名称","English label"),n.createElement("input",{"data-os-loc":"src/field/MetricProposal.jsx:91:43","data-os-action":"","aria-label":"English metric label",value:p.en,maxLength:80,onChange:y=>w("en",y.target.value)})),n.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:92:9"},s("小数位数","Decimal places"),n.createElement("select",{"data-os-loc":"src/field/MetricProposal.jsx:92:44","data-os-action":"","aria-label":"Metric precision",value:p.precision,onChange:y=>w("precision",Number(y.target.value))},Array.from({length:11},(y,M)=>n.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:92:191",key:M},M))))),g?.error&&(h||p.id.trim())&&n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:94:60",role:"status"},l1[g.error][t?0:1]),g&&!g.error&&!S&&n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:95:49",role:"status"},s("等待 1050 和 1054 两帧。","Waiting for both frames.")),S&&n.createElement(n.Fragment,null,n.createElement("table",{"data-os-loc":"src/field/MetricProposal.jsx:97:9","aria-label":"Two-frame metric preview"},n.createElement("caption",{"data-os-loc":"src/field/MetricProposal.jsx:97:54"},(t?p.zh:p.en)+" · "+s("场景单位","scene units")),n.createElement("thead",{"data-os-loc":"src/field/MetricProposal.jsx:98:11"},n.createElement("tr",{"data-os-loc":"src/field/MetricProposal.jsx:98:18"},[s("帧号","Frame"),s("原值","Current"),s("预览","Preview"),s("共同有效点 / ROI 候选点","Common / candidate columns")].map(y=>n.createElement("th",{"data-os-loc":"src/field/MetricProposal.jsx:98:134",key:y},y)))),n.createElement("tbody",{"data-os-loc":"src/field/MetricProposal.jsx:99:11"},x.map(y=>n.createElement("tr",{"data-os-loc":"src/field/MetricProposal.jsx:99:35",key:y.frameId},n.createElement("th",{"data-os-loc":"src/field/MetricProposal.jsx:99:57"},y.frameId),n.createElement("td",{"data-os-loc":"src/field/MetricProposal.jsx:99:79"},E?B(E.read(y),E.precision??5):s("新增","New")),n.createElement("td",{"data-os-loc":"src/field/MetricProposal.jsx:99:155"},B(g.field.read(y),g.precision)),n.createElement("td",{"data-os-loc":"src/field/MetricProposal.jsx:99:217"},y.stats.common," / ",y.stats.candidates))))),n.createElement("details",{"data-os-loc":"src/field/MetricProposal.jsx:100:9",className:"proposal-diff"},n.createElement("summary",{"data-os-loc":"src/field/MetricProposal.jsx:100:44"},s("查看代码差异","View code changes")),n.createElement("pre",{"data-os-loc":"src/field/MetricProposal.jsx:100:96","aria-label":"Proposed code diff"},g.diff.split(`
`).slice(0,-1).map((y,M)=>n.createElement("span",{"data-os-loc":"src/field/MetricProposal.jsx:100:186",key:M,className:y.startsWith("+")?"diff-plus":y.startsWith("-")?"diff-minus":""},y,`
`)))),n.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:101:9",className:"proposal-downloads"},n.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:101:45","data-os-action":"",onClick:()=>di("B-"+g.id+".patch",new Blob([g.diff],{type:"text/plain"}))},s("下载补丁","Download patch")),n.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:102:9","data-os-action":"",onClick:()=>di("b-case-metrics.js",new Blob([g.source],{type:"text/javascript"}))},s("下载候选源码","Download candidate source"))),n.createElement(d1,{key:g.source,proposal:g,base:d,body:A,zh:t}))):n.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:85:154",role:"status"},s("正在读取指标源码…","Loading metric source…"))))}function m1({rows:e,zh:a,metrics:t,metric:s,metricId:i,onTrack:o,evidence:r,error:c,retry:d}){const l=(v,u)=>a?v:u,m=Sr(r),b=["Gentle / Best_1027","XZ (−0.95, 0.90)","ROI 1 × 1","X profile 0°",r.metricLabel,...r.readings.map(v=>v.frameId+": "+v.display+" "+r.units+" ("+v.common+"/"+v.candidates+")")].filter(Boolean).join(" · ");return n.createElement("section",{"data-os-loc":"src/field/ReviewMetrics.jsx:12:10",className:"review-metrics","aria-label":"B case collaboration"},n.createElement("h3",{"data-os-loc":"src/field/ReviewMetrics.jsx:13:5"},l("一起查看 B 区域","Review region B together")),c&&n.createElement("button",{"data-os-loc":"src/field/ReviewMetrics.jsx:14:15","data-os-action":"",onClick:d},l("重试加载追踪量","Retry loading metrics")),t.length>0&&n.createElement(n.Fragment,null,n.createElement("label",{"data-os-loc":"src/field/ReviewMetrics.jsx:15:28"},l("追踪量","Track a quantity")," ",n.createElement("select",{"data-os-loc":"src/field/ReviewMetrics.jsx:15:65","data-os-action":"",value:s?.id??"",onChange:v=>o(v.target.value)},!s&&n.createElement("option",{"data-os-loc":"src/field/ReviewMetrics.jsx:16:19",value:"",disabled:!0},l("请选择正式指标","Select an official metric")),t.map(v=>n.createElement("option",{"data-os-loc":"src/field/ReviewMetrics.jsx:17:27",key:v.id,value:v.id},a?v.zh:v.en)))),s?n.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:19:13","aria-live":"polite"},r.readings.map(v=>v.frameId+": "+v.display).join("　 /　 "),"　",l("场景单位","scene units")):n.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:20:7",role:"alert"},i?l("无法还原此指标，当前正式列表中没有 ","The current registry does not contain the recorded metric ")+i+l("。请选择指标。",". Select a metric."):l("原记录未注明追踪量，无法还原。请选择指标。","The original record did not specify a metric. Select a metric to continue."))),s&&n.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:23:16",className:"b-case-share"},n.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:23:44",href:m,target:"_blank",rel:"noreferrer"},l("分享当前视图给同事","Share this view with a colleague"))),n.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:24:5"},n.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:24:8",href:wa+"/issues/1#new_comment_field",target:"_blank",rel:"noreferrer"},l("去公开 GitHub 参与案例讨论","Discuss this case on public GitHub"))),n.createElement(fo,{topic:"region-B-1050-1054",zh:a,subject:l("B 区域 · 1050 与 1054","Region B · 1050 and 1054"),context:b,viewLink:m}),n.createElement("details",{"data-os-loc":"src/field/ReviewMetrics.jsx:26:5",className:"b-case-source"},n.createElement("summary",{"data-os-loc":"src/field/ReviewMetrics.jsx:26:40"},l("指标源码与补丁","Metric source and patches")),n.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:27:7",href:wa+"/edit/main/review/b-case-metrics.js",target:"_blank",rel:"noreferrer"},l("在 GitHub 编辑指标文件","Edit the metric file on GitHub")),t.length>0&&n.createElement(f1,{metrics:t,rows:e,zh:a})))}function Yo(e,a){if(!Number.isFinite(e))return"#a7acb0";const t=e>=0?[186,58,44]:[35,97,159],s=Math.min(1,Math.abs(e)/(a||1));return"rgb("+t.map(i=>Math.round(250+(i-250)*s)).join(",")+")"}function Uo(e){const a=e.map(o=>o.ix),t=e.map(o=>o.iz),s=Math.min(...a),i=Math.min(...t);return[s,i,Math.max(...a)-s+1,Math.max(...t)-i+1]}function Jo({cells:e,limit:a,selection:t}){const[s,i,o,r]=Uo(e),c=i+r-1,d=210/o,l=(t.ix-s+.5)*d,m=(c-t.iz+.5)*d;return n.createElement(n.Fragment,null,n.createElement("g",{"data-os-loc":"src/field/BCasePlots.jsx:22:5",shapeRendering:"crispEdges"},e.map(({ix:b,iz:v,error:u})=>n.createElement("rect",{"data-os-loc":"src/field/BCasePlots.jsx:23:7",key:b+","+v,x:(b-s)*d,y:(c-v)*d,width:d,height:d,fill:Yo(u,a)}))),n.createElement("line",{"data-os-loc":"src/field/BCasePlots.jsx:26:5",x1:"0",x2:"210",y1:m,y2:m,stroke:"#182e36",strokeDasharray:"4 3"}),n.createElement("circle",{"data-os-loc":"src/field/BCasePlots.jsx:27:5",cx:l,cy:m,r:"5",stroke:"black",strokeWidth:"2",fill:"white"}))}function b1(e,a,t,s){const i=e.xmin-a,o=e.xmax-a;return{first:i,last:o,x:r=>(r-i)/(o-i)*335,y:r=>106-(r-t)/(s-t||1)*101}}function Ko({points:e,scale:a,band:t}){function s(i){let o=!1;return e.map(r=>{if(!Number.isFinite(r[i]))return o=!1,"";const c=o?"L":"M";return o=!0,c+a.x(r.distance)+" "+a.y(r[i])}).join(" ")}return n.createElement(n.Fragment,null,t&&n.createElement("rect",{"data-os-loc":"src/field/BCasePlots.jsx:48:14",x:a.x(t.lo)-2,width:a.x(t.hi)-a.x(t.lo)+4,y:"0",height:"111",fill:"#f4df9c"}),n.createElement("line",{"data-os-loc":"src/field/BCasePlots.jsx:50:5",x1:a.x(0),x2:a.x(0),y1:"0",y2:"111",stroke:"#777",strokeDasharray:"2 3"}),n.createElement("path",{"data-os-loc":"src/field/BCasePlots.jsx:51:5",d:s("a"),stroke:"#13689e",fill:"none",strokeWidth:"2.5"}),n.createElement("path",{"data-os-loc":"src/field/BCasePlots.jsx:52:5",d:s("b"),stroke:"#ad6411",fill:"none",strokeWidth:"2.5",strokeDasharray:"7 3"}))}function ao({label:e,frame:a,kind:t,zh:s,children:i,legend:o,axis:r,canAnnotate:c}){const[d,l]=j.useState(!1),[m,b]=j.useState([0,1]),v=j.useRef(null),u=a+" · "+e;j.useLayoutEffect(()=>{const f=v.current;if(f.scrollLeft=(f.scrollWidth-f.clientWidth)/2,f.scrollTop=(f.scrollHeight-f.clientHeight)/2,!r)return;function p(){const C=f.querySelector("svg").getBoundingClientRect();if(!C.width)return;const w=(f.getBoundingClientRect().left-C.left)/C.width;b([Math.max(0,w),Math.min(1,w+f.clientWidth/C.width)])}p();const _=new ResizeObserver(p);return _.observe(f),f.addEventListener("scroll",p),()=>{_.disconnect(),f.removeEventListener("scroll",p)}},[d,!!r]);function h(f){window.dispatchEvent(new CustomEvent("oceanscope-review-figure",{detail:{figure:v.current.querySelector("svg"),trigger:f.currentTarget,label:u}}))}return n.createElement("figure",{"data-os-loc":"src/field/BCaseFigures.jsx:31:10",className:"b-plot b-"+t,"data-review-id":"b-"+a+"-"+t},n.createElement("figcaption",{"data-os-loc":"src/field/BCaseFigures.jsx:32:5"},e),n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:33:5",ref:v,className:"b-viewport","data-zoomed":d,tabIndex:d?0:void 0,role:"group","aria-label":u+(s?" · 图像区域":" · plot area")},i),r&&n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:37:14",className:"b-ticks"},[m[0],(m[0]+m[1])/2,m[1]].map((f,p)=>n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:38:7",key:p},(r.first+(r.last-r.first)*f).toFixed(2)))),o,n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:40:5",className:"b-plot-controls","data-os-tools":""},n.createElement("button",{"data-os-loc":"src/field/BCaseFigures.jsx:41:7","data-os-action":"",type:"button","aria-pressed":d,"aria-label":u+(s?" · 局部放大":" · local zoom"),onClick:()=>l(f=>!f)},d?s?"还原 1×":"Reset 1×":s?"放大 2×":"Zoom 2×"),n.createElement("button",{"data-os-loc":"src/field/BCaseFigures.jsx:43:7","data-os-action":"",type:"button",disabled:!c,"aria-label":u+(s?" · 批注这张图":" · Annotate this figure"),onClick:h},s?"批注这张图":"Annotate this figure")),d&&n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:47:16",className:"b-zoom-help"},s?"滑动查看局部；键盘可聚焦图像后用方向键移动。":"Scroll to pan, or focus the plot and use the arrow keys."))}function p1({rows:e,data:a,limit:t,low:s,high:i,band:o,scale:r,evidence:c,zh:d}){const l=(p,_)=>d?p:_,m=j.useRef(null);j.useEffect(()=>{window.location.hash.startsWith("#mark=")||m.current.scrollIntoView({block:"start"})},[]);const b=l("场景单位","scene units"),v=l("带符号高度误差","Signed height error"),u=l("穿过中心的 X 剖面","X profile through the centre"),{roi:h,selection:f}=a;return n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:63:10",className:"b-case-figures"},n.createElement("h3",{"data-os-loc":"src/field/BCaseFigures.jsx:64:5",className:"b-case-heading",ref:m},l("固定 B 区域","Fixed region B")," · ",e.map(p=>p.frameId).join(" / ")),n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:65:5",className:"b-case-context"},n.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:65:35"},l("模型","Model")," Best_1027"),n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:65:80"},"GT · Gentle"),n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:66:7"}," XZ (",a.x.toFixed(2),", ",a.z.toFixed(2),")"),n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:67:7"},"ROI ",(h.xmax-h.xmin).toFixed(2)," × ",(h.zmax-h.zmin).toFixed(2)," ",b)),n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:68:5",className:"b-common-scale"},n.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:69:7"},l("两帧共用色标","Shared colour scale")),n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:70:7"},l("预测 − GT","Prediction − GT")," · ",b),n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:71:7",className:"b-ramp","aria-hidden":"true"}),n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:72:7",className:"b-ticks"},n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:72:32"},(-t).toFixed(3)," ",l("偏低","low")),n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:72:83"},"0"),n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:72:97"},"+",t.toFixed(3)," ",l("偏高","high")))),n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:74:5",className:"b-frame-grid"},e.map(p=>{const _=c.readings.find(C=>C.frameId===p.frameId);return n.createElement("article",{"data-os-loc":"src/field/BCaseFigures.jsx:76:14",className:"b-frame-card",key:p.frameId,"data-review-frame":p.frameId},n.createElement("h4",{"data-os-loc":"src/field/BCaseFigures.jsx:77:7"},l("帧","Frame")," ",p.frameId),n.createElement(ao,{frame:p.frameId,kind:"map",label:v,zh:d,canAnnotate:!!_,legend:n.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:78:108",className:"b-map-notes"},n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:79:9",className:"b-plot-key"},"Z ↑　X →　",l("白点为中心，虚线为剖面","White centre point, dashed X section")),_&&n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:80:21",className:"b-readout b-tracked-reading"},c.metricLabel,n.createElement("br",{"data-os-loc":"src/field/BCaseFigures.jsx:80:86"}),n.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:80:91"},_.display)," ",b),n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:81:9",className:"b-readout"},l("中心差","Centre difference")," ",n.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:81:66"},p.centre?.difference?.toFixed(4)??"—")," ",b,n.createElement("br",{"data-os-loc":"src/field/BCaseFigures.jsx:81:134"}),l("共同有效 / 候选列","Common / candidate columns")," ",n.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:82:59"},p.stats.common," / ",p.stats.candidates)))},n.createElement("svg",{"data-os-loc":"src/field/BCaseFigures.jsx:84:9",viewBox:"0 0 210 210",role:"img","aria-label":p.frameId+" · "+v,"data-grid-window":Uo(p.region.cells).join(","),"data-grid-origin":[a.x-f.ix*p.profile.step,a.z-f.iz*p.profile.step,p.profile.step].join(",")},n.createElement(Jo,{cells:p.region.cells,limit:t,selection:f}))),n.createElement(ao,{frame:p.frameId,kind:"profile",label:u,zh:d,axis:r,canAnnotate:!!_,legend:n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:91:9",className:"b-plot-key"},l("横轴：距中心的 X 距离","X axis: distance from centre")," · ",b,n.createElement("br",{"data-os-loc":"src/field/BCaseFigures.jsx:91:95"}),l("纵轴：水面高度","Y axis: surface height")," ",s.toFixed(3)," … ",i.toFixed(3)," ",b),n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:93:9",className:"b-line-keys"},n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:93:36"},n.createElement("i",{"data-os-loc":"src/field/BCaseFigures.jsx:93:42",className:"b-line-gt"}),"GT"),n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:93:77"},n.createElement("i",{"data-os-loc":"src/field/BCaseFigures.jsx:93:83",className:"b-line-pred"}),l("预测","Prediction")),o&&n.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:94:20"},n.createElement("i",{"data-os-loc":"src/field/BCaseFigures.jsx:94:26",className:"b-band"}),l("比较区段","Compared interval"))))},n.createElement("svg",{"data-os-loc":"src/field/BCaseFigures.jsx:96:9",viewBox:"0 0 335 111","data-profile-axis":[r.first,r.last,0,335].join(","),role:"img","aria-label":p.frameId+" · "+u},n.createElement(Ko,{points:p.profile.points,scale:r,band:o}))))})),o&&n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:102:14",className:"b-band-note"},n.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:102:41"},l("黄色区段","Highlighted interval"),"　s = ",o.lo.toFixed(2)," … ",o.hi.toFixed(2)," ",b)," · ",l("两帧逐点比较正误差，这两个相邻采样占剖面正误差全部减少量的 ","These two adjacent samples account for "),(o.share*100).toFixed(1),"%",l("。"," of all decreases in positive profile error.")," ",l("1050 帧的 GT 从局部谷底向右抬升，1054 帧的同一位置仍靠近谷底。","Here the 1050 GT rises from a local trough. The same positions remain near the trough in 1054.")),n.createElement("details",{"data-os-loc":"src/field/BCaseFigures.jsx:106:5",className:"b-signed-stats"},n.createElement("summary",{"data-os-loc":"src/field/BCaseFigures.jsx:106:41"},l("查看带符号误差统计","Show signed-error statistics")),e.map(p=>n.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:107:24",key:p.frameId},n.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:107:45"},p.frameId)," · ",l("区域偏差","ROI bias")," ",p.stats.bias?.toFixed(4)??"—"," ·"," ",l("偏高列均值","Mean positive")," ",p.region.counts[4]?.toFixed(4)??"—"," ·"," ",l("偏低列均值","Mean negative")," ",p.region.counts[5]?.toFixed(4)??"—"," ",b))))}function u1(e,a){const{shape:[t,s],originXYZ:[i,,o],spacing:r}=e.descriptor,c=[];for(let u=0;u<t;u++){const h=o+u*r;if(!(h<a.zmin||h>a.zmax))for(let f=0;f<s;f++){const p=i+f*r,_=u*s+f;p<a.xmin||p>a.xmax||c.push({ix:f,iz:u,error:e.common[_]?e.heightB[_]-e.heightA[_]:null})}}const d=c.map(u=>u.error).filter(Number.isFinite).sort((u,h)=>u-h),l=d.filter(u=>u>0),m=d.filter(u=>u<0),b=u=>u.length?u.reduce((h,f)=>h+f,0)/u.length:null,v=d.length;return{cells:c,counts:[v,l.length,m.length,v-l.length-m.length,b(l),b(m),v?(d[Math.floor((v-1)/2)]+d[Math.floor(v/2)])/2:null,b(d)]}}const Ua=e=>e==null?"—":e.toFixed(4);function h1(e){const[a,t]=e.map(o=>o.profile.points),s=a.map((o,r)=>Number.isFinite(o.difference)&&Number.isFinite(t[r]?.difference)?Math.max(0,o.difference)-Math.max(0,t[r].difference):null);let i=null;for(let o=1;o<s.length;o++){if(s[o-1]==null||s[o]==null)continue;const r=s[o-1]+s[o];(!i||r>i.sum)&&(i={sum:r,i:o})}return{lo:a[i.i-1].distance,hi:a[i.i].distance,share:i.sum/s.reduce((o,r)=>o+Math.max(0,r??0),0)}}function g1({data:e,bundle:a,zh:t,metricId:s,onTrack:i,recorded:o}){const r=j.useRef(null),c=(y,M)=>t?y:M,[d,l]=j.useState([]),[m,b]=j.useState(!1),[v,u]=j.useState(0);j.useEffect(()=>{let y=!0;const M=new URL(wn,document.baseURI);return v&&M.searchParams.set("retry",String(v)),import(M.href).then(k=>{y&&(l(k.metrics),b(!1))}).catch(()=>{y&&b(!0)}),()=>{y=!1}},[v]);const h=e.rows.filter(y=>jr.includes(y.frameId)),f=d.find(y=>y.id===s),p=Cr({bundle:a,selection:e.selection,rows:h,metric:f,metricId:s,language:t?"zh":"en"});if(o)try{mo(o,a,e.selection)}catch(y){return n.createElement("p",{"data-os-loc":"src/field/BPairCase.jsx:59:23",role:"alert"},y.message)}const _=!!(o&&f&&(o.metricLabel!==f[o.language]||!Br(o.readings,p.readings))),C=Math.max(...h.flatMap(y=>y.region.cells.map(M=>Math.abs(M.error??0)))),w=h.flatMap(y=>y.profile.points.flatMap(M=>[M.a,M.b])).filter(Number.isFinite),g=Math.min(...w),E=Math.max(...w),x=h1(h),S=b1(e.roi,e.x,g,E),B=["frame","common","positive","negative","zero","mean_positive","mean_negative","median","roi_bias"];function A(y){let M,k;if(y==="svg"&&(M=r.current.outerHTML,k="image/svg+xml"),y==="csv"&&(M=Ar(p),k="text/csv"),y==="signed"){const I=[B,...e.rows.map(F=>[F.frameId,...F.region.counts])].map(F=>F.join(",")).join(`\r
`)+`\r
`;Wn("OceanScope-B-1049-1054-signed-error.csv","text/csv",I);return}y==="json"&&(M=JSON.stringify({...po(a,e,1050),caseView:bo,review:p,signedScale:[-C,C],band:x,signedStats:e.rows.map(I=>Object.fromEntries(B.map((F,V)=>[F,[I.frameId,...I.region.counts][V]])))},null,2),k="application/json"),Wn("OceanScope-B-1050-1054."+y,k,M)}return n.createElement("section",{"data-os-loc":"src/field/BPairCase.jsx:84:10","data-b-review":JSON.stringify(p),"data-review-frame":"1050 / 1054","aria-label":"B paired frame case"},n.createElement(p1,{rows:h,data:e,limit:C,low:g,high:E,band:x,scale:S,evidence:p,zh:t}),n.createElement("div",{"data-os-loc":"src/field/BPairCase.jsx:86:5",hidden:!0},n.createElement("svg",{"data-os-loc":"src/field/BPairCase.jsx:86:17",ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 960 765",style:{width:"100%",maxWidth:960},role:"img","aria-label":c("B 区域两帧误差与剖面","B region paired error maps and profiles")},n.createElement("rect",{"data-os-loc":"src/field/BPairCase.jsx:87:5",width:"960",height:"765",fill:"#fafaf8"}),n.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:88:5",fill:"#173447",fontFamily:"sans-serif",fontSize:"16"},n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:89:5",x:"30",y:"40",fontSize:"26",fontWeight:"bold"},c("B 区域 · 中心仍偏高，区域平均转负","Region B · positive centre, changing regional bias")),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:90:5",x:"30",y:"69"},"Best_1027 · XZ (−0.95, 0.90) · ROI 1 × 1 · ",c("剖面沿 X，长度按场景单位","X profile, source length units")),f&&n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:91:16",x:"30",y:"88",fontSize:"15",fontWeight:"bold"},p.metricLabel," (",f.id,") · ",p.readings.map(y=>y.frameId+" = "+y.display+" ["+y.common+"/"+y.candidates+"]").join("   /   ")," · ",c("场景单位 · [共同有效/候选列]","scene units · [common/candidate columns]")),h.map((y,M)=>{const k=40+M*468,I=128,F=K=>k+36+S.x(K),V=K=>423+S.y(K);return n.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:95:14",key:y.frameId},n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:95:33",x:k,y:"109",fontWeight:"bold",fontSize:"23"},y.frameId),n.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:96:9",transform:"translate("+k+" "+I+")"},n.createElement(Jo,{cells:y.region.cells,limit:C,selection:e.selection})),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:97:9",x:k+222,y:"172"},"Z ↑   X →"),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:97:52",x:k+222,y:"205"},c("中心差","Centre Δh")," ",Ua(y.centre.difference)),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:98:9",x:k+222,y:"232"},"ROI bias ",Ua(y.stats.bias)),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:98:71",x:k+222,y:"259"},"n = ",y.region.counts[0]),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:99:9",x:k,y:"368"},c("偏高列均值","Mean positive")," ",Ua(y.region.counts[4]),"　 ",c("偏低列均值","Mean negative")," ",Ua(y.region.counts[5])),n.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:100:9",transform:"translate("+(k+36)+" 423)"},n.createElement(Ko,{points:y.profile.points,scale:S,band:x})),[g,E].map(K=>n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:101:28",x:k-8,y:V(K)+4,fontSize:"12",key:K},K.toFixed(2))),[-.5,0,.5].map(K=>n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:102:28",key:K,x:F(K),y:"551",textAnchor:"middle",fontSize:"13"},K.toFixed(1))))}),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:105:5",x:"38",y:"400"},c("带符号误差（预测 − GT）","Signed error (prediction − GT)")),Array.from({length:81},(y,M)=>n.createElement("rect",{"data-os-loc":"src/field/BPairCase.jsx:106:36",key:M,x:385+M*3,y:"385",width:"3",height:"14",fill:Yo((M-40)*C/40,C)})),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:107:5",x:"328",y:"399"},(-C).toFixed(3)),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:107:55",x:"500",y:"380"},"0"),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:107:85",x:"638",y:"399"},"+",C.toFixed(3)),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:108:5",x:"38",y:"583"},c("剖面横轴为距中心的 X 距离，纵轴为水面高度。蓝线 GT，橙线预测。","Horizontal: X distance from centre. Vertical: surface height. Blue GT, orange prediction.")),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:109:5",x:"38",y:"625",fontWeight:"bold"},c("偏高减小最集中的相邻两点","Adjacent pair with the largest reduction in positive error"),"　s = ",x.lo.toFixed(2)," … ",x.hi.toFixed(2)),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:110:5",x:"38",y:"659"},c("黄色标记该区段。逐点取正误差，再比较两帧；这两点占剖面全部正向减小量的","Gold marks the interval. These points account for this share of all decreases in positive error:")," ",(x.share*100).toFixed(1),"%."),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:111:5",x:"38",y:"695"},c("该段位于 1050 帧 GT 由局部谷底向右抬升处。1054 帧同一位置仍靠近低谷。","In 1050 the GT rises out of a local trough here. In 1054 these positions remain near the trough.")),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:112:5",x:"38",y:"735"},c("两帧比较固定世界位置。白点为中心，虚线为穿过中心的 X 剖面。","World positions are fixed. White circle: centre. Dashed line: X section through centre."))))),_&&n.createElement("p",{"data-os-loc":"src/field/BPairCase.jsx:114:18",role:"alert"},c("原记录与当前正式指标的数值或有效列不同。请核对原文件，然后重新选择指标。","The saved values or column counts differ from the current metric. Check the original record and select a metric again.")),n.createElement(m1,{rows:h,zh:t,metrics:d,metric:f,metricId:s,onTrack:i,evidence:p,error:m,retry:()=>u(y=>y+1)}),["svg","csv","json"].map(y=>n.createElement("button",{"data-os-loc":"src/field/BPairCase.jsx:116:36","data-os-action":"",key:y,disabled:!f||_,onClick:()=>A(y)},y==="csv"?c("下载 B 两帧指标摘要 CSV","Download B two-frame metric summary CSV"):c("下载 B 案例","Download B case")+" "+y.toUpperCase())),n.createElement("button",{"data-os-loc":"src/field/BPairCase.jsx:117:5","data-os-action":"",onClick:()=>A("signed")},c("下载 B 带符号误差明细 CSV（1049–1054）","Download B signed-error details CSV (1049–1054)")))}const ga=e=>Number.isFinite(e)?e.toFixed(4):"—";function Qo(e,a){const t=e.spacing,s=a==="A"?176:174,i=a==="A"?90:69,o=e.originXYZ[0]+s*t,r=e.originXYZ[2]+i*t;return{sourceFrame:e.frameId,ix:s,iz:i,x:o,z:r,roi:{xmin:o-10*t,xmax:o+10*t,zmin:r-10*t,zmax:r+10*t},directionDeg:0}}async function y1(e,a,t){const s=await lt(ka,dt.indexSha256,e),i=s.frames.find(E=>E.frameId===1049),o=i.spacing,r=typeof a=="string"?Qo(i,a):a,{ix:c,iz:d,sourceFrame:l,roi:m,directionDeg:b}=r,v=s.frames.find(E=>E.frameId===l);if(!v||!Number.isInteger(c)||!Number.isInteger(d)||c<0||d<0||c>=v.shape[1]||d>=v.shape[0])throw Error("Invalid hotspot index");const u=v.originXYZ[0]+c*v.spacing,h=v.originXYZ[2]+d*v.spacing,f=_t({descriptor:v});if(!Number.isFinite(b)||b<0||b>=180||!m||!["xmin","xmax","zmin","zmax"].every(E=>Number.isFinite(m[E]))||m.xmin>=m.xmax||m.zmin>=m.zmax||m.xmin<f.xmin||m.xmax>f.xmax||m.zmin<f.zmin||m.zmax>f.zmax||u<m.xmin||u>m.xmax||h<m.zmin||h>m.zmax)throw Error("Select an ROI containing the hotspot and a valid profile angle");const p={sourceFrame:l,ix:c,iz:d,x:u,z:h,roi:m,directionDeg:b};if(u!==r.x||h!==r.z)throw Error("Hotspot world coordinates differ from source");const _=await Ca(v,{...aa(e),frameId:l},t);if(!_.common[d*v.shape[1]+c])throw Error("Source hotspot is outside common support");const C=[];for(const E of Pr){const x=s.frames.find(M=>M.frameId===E),S=E===l?_:await Ca(x,{...aa(e),frameId:E},t),B=cs(S,{x:u,z:h,directionDeg:b});B.points=B.points.filter(M=>M.x>=m.xmin-1e-9&&M.x<=m.xmax+1e-9&&M.z>=m.zmin-1e-9&&M.z<=m.zmax+1e-9);const A=B.points.find(M=>Math.abs(M.distance)<1e-9),y=c===174&&d===69&&b===0&&m.xmin===u-10*o&&m.xmax===u+10*o&&m.zmin===h-10*o&&m.zmax===h+10*o?u1(S,m):null;C.push({region:y,frameId:E,profile:B,centre:A,stats:ta(S,m)})}const w=C.flatMap(E=>E.profile.points),g=w.flatMap(E=>[E.a,E.b]).filter(Number.isFinite);return{selection:p,x:u,z:h,roi:m,rows:C,limits:g.length?[Math.min(...g),Math.max(...g)]:[0,1],error:Math.max(1e-9,...w.map(E=>Math.abs(E.difference??0)))}}function x1({bundle:e,zh:a,getSelection:t}){const{setLanguage:s}=ue(),[i,o]=j.useState(()=>$a()?"B":null),[r,c]=j.useState(()=>$a()?1050:1049),[d,l]=j.useState(null),[m,b]=j.useState($a),[v,u]=j.useState(()=>fi(new URLSearchParams(window.location.search))),[h,f]=j.useState(()=>{const y=ft();return mi(y)?y.bReview:null}),[p,_]=j.useState(""),C=j.useRef(null),w=j.useRef(0);function g(y,M=1049,k=!1,I=v,F=null){w.current++,b(k),_(""),o(y),c(M),f(F);const V=new URL(window.location.href);if(k)u(I),pi(V,I,F?.language||(a?"zh":"en")),V.hash="#analysis-height";else if($a()){for(const K of["review","metric","proposal"])V.searchParams.delete(K);V.hash="#analysis-height"}window.history.replaceState(window.history.state,"",V)}function E(y){window.dispatchEvent(new Event("oceanscope-dismiss-mark")),w.current++,f(null),u(y);const M=pi(new URL(window.location.href),y,a?"zh":"en");M.hash="#analysis-height",window.history.replaceState(window.history.state,"",M)}j.useEffect(()=>{const y=()=>{if(window.location.hash.startsWith("#mark="))return;const M=new URLSearchParams(window.location.search);M.get("review")==="b-pair"?(w.current++,f(null),b(!0),o("B"),c(1050),u(fi(M)),_("")):m&&(w.current++,f(null),b(!1),o(null),_(""))};return window.addEventListener("popstate",y),()=>window.removeEventListener("popstate",y)},[m]),j.useEffect(()=>{const y=M=>{const k=M.detail;mi(k)&&(w.current++,_(""),b(!0),o("B"),c(1050),f(k.bReview||null),u(k.bReview?.metricId||""))};return window.addEventListener(bi,y),()=>window.removeEventListener(bi,y)},[]);async function x(y){if(!y)return;const M=++w.current;try{if(y.size>8*1024*1024)throw Error("Report exceeds 8 MiB");const k=JSON.parse(await y.text()),I=kr(k,e);if(!I||typeof I!="object")throw Error("Invalid report selection");const F=k.caseView===bo;if(F){const V=JSON.parse(ka).frames.find(W=>W.frameId===1049),K=Qo(V,"B");if(!Mr(K,I))throw Error(a?"报告的选区或剖面与固定 B 区域不符。":"The report ROI or profile differs from the fixed B region.");k.review!=null&&mo(k.review,e,K)}M===w.current&&(g(I,k.selectedFrame,F,k.review?.metricId??"",F?k.review:null),F&&k.review&&s(k.review.language))}catch(k){M===w.current&&_(k.message)}}j.useEffect(()=>{if(!i)return;const y=new AbortController;return y1(e,i,y.signal).then(M=>{y.signal.aborted||l({bundle:e,location:i,data:M})}).catch(M=>{y.signal.aborted||l({bundle:e,location:i,error:M.message})}),()=>y.abort()},[e,i]);const S=d?.bundle===e&&d.location===i?d:null,B=S?.data,A=B?.rows.find(y=>y.frameId===r);return n.createElement("section",{"data-os-loc":"src/field/FixedWaveWindow.jsx:146:10","data-review-frame":A?.frameId,ref:C,"aria-label":"Fixed ROI wave window"},n.createElement("h3",{"data-os-loc":"src/field/FixedWaveWindow.jsx:146:101"},a?"固定选区波形 · 1049–1054":"Fixed ROI wave profiles · 1049–1054"),["A","B"].map(y=>n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:147:24","data-os-action":"",key:y,"aria-pressed":i===y,onClick:()=>g(y)},a?"固定区域 ":"Fixed region ",y)),n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:148:5","data-os-action":"",onClick:()=>g("B",1050,!0)},a?"B 区域：1050 与 1054":"Compare B: 1050 and 1054"),n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:149:5","data-os-action":"",onClick:()=>{try{g(t())}catch(y){_(y.message)}}},a?"使用当前热点与选区":"Use current hotspot and ROI"),n.createElement("label",{"data-os-loc":"src/field/FixedWaveWindow.jsx:150:5"},a?"恢复六帧 JSON":"Restore six-frame JSON"," ",n.createElement("input",{"data-os-loc":"src/field/FixedWaveWindow.jsx:150:54","data-os-action":"",type:"file","aria-label":"Restore six-frame JSON",accept:".json",onChange:y=>{x(y.target.files[0]),y.target.value=""}})),p&&n.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:151:17",role:"alert"},p),i&&!S&&n.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:152:29",role:"status"},a?"正在读取六帧高度…":"Loading six height frames…"),S?.error&&n.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:153:23",role:"alert"},S.error," ",n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:153:54","data-os-action":"",onClick:()=>o(null)},a?"重置":"Reset")),m&&B&&(!B.rows[0].region||B.selection.sourceFrame!==1049)?n.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:155:7",role:"alert"},a?"B 案例固定选区或来源帧不符。":"The fixed B region or source frame does not match."):m&&B&&n.createElement(g1,{data:B,bundle:e,zh:a,metricId:v,recorded:h,onTrack:E}),A&&n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:157:15"},"XZ (",ga(B.x),", ",ga(B.z),") · ",B.selection.directionDeg,"° · ",a?"固定世界位置。蓝 GT，橙预测，紫色为预测减 GT。":"Fixed world position. Blue GT, orange prediction, purple prediction minus GT."),n.createElement("table",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:5"},n.createElement("thead",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:12"},n.createElement("tr",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:19"},(a?["帧","中心高度差","ROI 平均偏差","ROI MAE","共同有效 / 候选"]:["Frame","Centre height difference","ROI mean bias","ROI MAE","Common / candidate"]).map(y=>n.createElement("th",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:167",key:y},y)))),n.createElement("tbody",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:5"},B.rows.map(y=>n.createElement("tr",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:30","data-review-frame":y.frameId,key:y.frameId},n.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:80"},n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:84","data-os-action":"","aria-pressed":r===y.frameId,onClick:()=>c(y.frameId)},y.frameId)),n.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:7"},ga(y.centre?.difference)),n.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:46"},ga(y.stats.bias)),n.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:77"},ga(y.stats.mae)),n.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:107"},y.stats.common," / ",y.stats.candidates))))),n.createElement(bs,{reviewId:"fixed-wave-"+A.region,profile:A.profile,roi:B.roi,limits:B.limits,errorLimit:B.error,label:(a?"固定剖面 ":"Fixed profile ")+r}),n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:162:5","data-os-action":"",onClick:()=>Wn("OceanScope-six-frame.json","application/json",JSON.stringify(po(e,B,r),null,2))},a?"下载六帧 JSON":"Download six-frame JSON"),n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:163:5","data-os-action":"",onClick:()=>Wn("OceanScope-six-frame.csv","text/csv",["frame,hotspot_difference,roi_bias,roi_mae,common,candidate",...B.rows.map(y=>[y.frameId,y.centre?.difference,y.stats.bias,y.stats.mae,y.stats.common,y.stats.candidates].join(","))].join(`
`))},a?"下载逐帧 CSV":"Download six-frame CSV"),n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:164:5","data-os-action":"",onClick:()=>{const y=C.current.querySelector(":scope > figure svg").cloneNode(!0);y.setAttribute("xmlns","http://www.w3.org/2000/svg"),Wn("OceanScope-profile-"+r+".svg","image/svg+xml",y.outerHTML)}},a?"下载当前剖面 SVG":"Download profile SVG")),n.createElement(s1,{zh:a}),n.createElement(a1,{zh:a}))}function v1({zh:e}){const a=[{id:"MAE",name:e?"平均绝对误差":"Mean absolute error",formula:"MAE = Σ|eᵢ| / N",meaning:e?"平均差多少，不区分偏高或偏低。越接近 0 越好。":"Average error size, regardless of direction. Closer to 0 is better."},{id:"Bias",name:e?"平均有符号偏差":"Mean signed error",formula:"Bias = Σeᵢ / N",meaning:e?"正值表示预测偏高，负值表示偏低。正负误差会抵消，所以 Bias 接近 0 不代表每个位置都准确。":"Positive means the prediction is higher; negative means lower. Opposite errors can cancel, so a near-zero bias does not guarantee small errors."},{id:"RMSE",name:e?"均方根误差":"Root mean square error",formula:"RMSE = √(Σeᵢ² / N)",meaning:e?"先平方、求平均，再开平方，对较大的误差更敏感。越接近 0 越好；它不是最大误差。":"Square the errors, average them, then take the square root. More sensitive to large errors; closer to 0 is better. This is not the maximum error."}];return n.createElement("details",{"data-os-loc":"src/field/HeightMetricHelp.jsx:9:9",className:"height-metric-help"},n.createElement("summary",{"data-os-loc":"src/field/HeightMetricHelp.jsx:10:3"},e?"MAE、Bias、RMSE 怎么看？说明与公式":"How to read MAE, Bias and RMSE — definitions & formulas"),n.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:11:3",className:"height-metric-help-body"},n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:12:4"},e?"先在同一位置比较水面高度：Aᵢ 是 GT（参考值），Bᵢ 是预测值，eᵢ = Bᵢ − Aᵢ。以下高度与误差统一用 cm 表示；1 m = 100 cm。":"Compare heights at the same location: Aᵢ is GT (the reference), Bᵢ is the prediction, and eᵢ = Bᵢ − Aᵢ. Heights and errors below use cm; 1 m = 100 cm."),n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:13:4"},e?"N 是当前统计范围内两边都有有效高度的位置数，也叫“共同列”。每个 (X, Z) 位置对应一条竖直列，取其最上层水面高度。Σ 表示将这 N 个位置的数相加。缺失位置不补零；N = 0 时不提供误差分数。":"N is the number of locations with valid heights in both datasets within the current scope, also called common columns. Each (X, Z) location defines a vertical column with a topmost surface height. Σ sums over these N locations. Missing locations are not filled with zero; no error score is available when N = 0."),n.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:4",className:"height-metric-formulas"},a.map(t=>n.createElement("article",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:61",key:t.id},n.createElement("h3",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:84"},t.id," · ",t.name),n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:116",className:"height-metric-formula"},t.formula),n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:171"},t.meaning)))),n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:15:4",className:"height-metric-example"},n.createElement("strong",{"data-os-loc":"src/field/HeightMetricHelp.jsx:15:41"},e?"小例子：":"Example: "),e?"两个位置分别偏低 1 cm、偏高 3 cm，即 e = −1、+3 cm。MAE = 2 cm，Bias = +1 cm，RMSE = √5 ≈ 2.24 cm。三个指标从不同角度描述同一组误差。":"At two locations, the prediction is 1 cm lower and 3 cm higher: e = −1, +3 cm. MAE = 2 cm, Bias = +1 cm, and RMSE = √5 ≈ 2.24 cm. The metrics describe different aspects of the same errors."),n.createElement("dl",{"data-os-loc":"src/field/HeightMetricHelp.jsx:16:4",className:"height-metric-scopes"},n.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:5"},n.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:10"},e?"当前帧 · 全域":"Current frame · Full domain"),n.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:64"},e?"当前这一帧内，所有共同有效位置的统计；不是全部 96 帧的平均。":"All paired valid locations in this frame; not an average over all 96 frames.")),n.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:5"},n.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:10"},e?"选区 · ROI":"Selected region · ROI"),n.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:58"},e?"只统计已应用的矩形选区内的位置。ROI 是“感兴趣区域”；改变选区不会改变当前帧全域或全序列评分。":"Only locations inside the applied rectangle. ROI means region of interest. Changing it does not change full-frame or sequence scores.")),n.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:5"},n.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:10"},e?"单点探针 / 截面":"Point probe / Profile"),n.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:59"},e?"探针读数来自一个点击位置；曲线沿当前整条截面显示，并不自动裁剪到 ROI。两者都不能当作选区平均值。":"The probe reads one clicked location. The profile follows the current full section and is not automatically cropped to the ROI. Neither is an ROI average."))),n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:21:4"},e?"这些是水面高度误差，不是 SDF 场误差或速度误差。此处单位为 cm；固定协议的全序列指标及 %R 请到“时间分析”查看。":"These are surface-height errors, not SDF-field or velocity errors. Values here use cm. Open Time analysis for fixed-protocol sequence metrics and %R.")))}const Fe=(e,a=1)=>e==null?"—":(e*a).toFixed(4);function va(e){const{shape:[a,t],originXYZ:[s,,i],spacing:o}=e.descriptor;return{xmin:s,xmax:s+(t-1)*o,zmin:i,zmax:i+(a-1)*o}}function E1(e){let a=1/0,t=-1/0,s=0;for(let i=0;i<e.heightA.length;i++){for(const o of["A","B"])e["wet"+o][i]&&(a=Math.min(a,e["height"+o][i]),t=Math.max(t,e["height"+o][i]));e.common[i]&&(s=Math.max(s,Math.abs(e.heightB[i]-e.heightA[i])))}return{height:Number.isFinite(a)?[a,t>a?t:a+1]:[0,1],error:Math.max(s,1e-9)}}function _1({spatial:e,kind:a,range:t,roi:s,probe:i,profile:o,onRegion:r,onProbe:c,label:d,absolute:l=!1,diagnosis:m,mode:b,onPause:v}){const u=j.useRef(null),h=j.useRef(null),[f,p]=e.descriptor.shape,_=va(e),C=a==="difference"?null:e[a],w=a==="difference"?e.common:e[a==="heightA"?"wetA":"wetB"];j.useEffect(()=>{const B=u.current,A=B?.getContext("2d");if(!A)return;const y=A.createImageData(p,f);for(let k=0;k<f;k++)for(let I=0;I<p;I++){const F=k*p+I,V=((f-1-k)*p+I)*4;if(!w[F]){y.data.set([225,230,235,255],V);continue}const K=e.heightB[F]-e.heightA[F],W=C?C[F]:l?Math.abs(K):K,G=Math.max(0,Math.min(1,(W-t[0])/(t[1]-t[0]))),ae=a==="difference"&&!l?G<.5?[80+350*G,130+230*G,220+70*G]:[255,245-350*(G-.5),255-440*(G-.5)]:[35+195*G,75+155*G,155+70*G];y.data.set([...ae,255],V)}A.putImageData(y,0,0);const M=(k,I)=>[(k-_.xmin)/e.descriptor.spacing+.5,f-.5-(I-_.zmin)/e.descriptor.spacing];if(m){const k=ia(e,m);for(const I of[k.first,k.second])A.strokeStyle="#15373e",A.beginPath(),I.points.forEach((F,V)=>A[V?"lineTo":"moveTo"](...M(F.x,F.z))),A.stroke()}if(!m&&o?.points.length&&(A.strokeStyle="#172c43",A.lineWidth=1,A.beginPath(),o.points.forEach((k,I)=>A[I?"lineTo":"moveTo"](...M(k.x,k.z))),A.stroke()),s){const[k,I]=M(s.xmin,s.zmax),[F,V]=M(s.xmax,s.zmin);if(A.strokeStyle="#111",A.lineWidth=1,A.strokeRect(k,I,F-k,V-I),b==="adjust")for(const[K,W]of[[k,I],[k,V],[F,I],[F,V]])A.fillRect(K-1.5,W-1.5,3,3)}if(i){const[k,I]=M(i.x,i.z);A.strokeStyle="#111",A.beginPath(),A.moveTo(k-3,I),A.lineTo(k+3,I),A.moveTo(k,I-3),A.lineTo(k,I+3),A.stroke()}},[e,a,t[0],t[1],s,i,o,l,m,b]);function g(B){const A=B.currentTarget.getBoundingClientRect(),y=getComputedStyle(B.currentTarget),M={left:A.left,top:A.top,width:A.width,height:A.height};for(const V of["Left","Right","Top","Bottom"])M["border"+V]=parseFloat(y["border"+V+"Width"])||0;const{ix:k,iz:I,index:F}=Ir(M,B.clientX,B.clientY,[f,p]);return{x:_.xmin+k*e.descriptor.spacing,z:_.zmin+I*e.descriptor.spacing,index:F}}function E(B,A){if(b!=="adjust"||!A.roi)return{xmin:Math.min(A.x,B.x),xmax:Math.max(A.x,B.x),zmin:Math.min(A.z,B.z),zmax:Math.max(A.z,B.z)};const y=A.roi,M=e.descriptor.spacing,k=B.x-A.x,I=B.z-A.z;let F;return A.corner?(F={...y,[A.corner[0]]:B.x,[A.corner[1]]:B.z},F.xmax-F.xmin<M||F.zmax-F.zmin<M?y:Ba(F,_).roi):(F={xmin:y.xmin+k,xmax:y.xmax+k,zmin:y.zmin+I,zmax:y.zmax+I},Ba(F,_,{mode:"move"}).roi)}function x(B){if(!h.current)return;const A=g(B),y=h.current;h.current=null,b==="adjust"?r(E(A,y)):A.index===y.index?c(A):r(E(A,y))}function S(B){const A=g(B),y=e.descriptor.spacing;let M=null;if(s&&b==="adjust"){const k=["xmin","xmax"].find(F=>Math.abs(A.x-s[F])<2*y),I=["zmin","zmax"].find(F=>Math.abs(A.z-s[F])<2*y);k&&I&&(M=[k,I])}b==="adjust"&&s&&!M&&(A.x<s.xmin||A.x>s.xmax||A.z<s.zmin||A.z>s.zmax)||(h.current={...A,roi:s,corner:M},v?.(),B.currentTarget.setPointerCapture?.(B.pointerId))}return n.createElement("figure",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:54:9","data-review-id":"native-height-"+a+(a==="difference"&&l?"-absolute":"")},n.createElement("figcaption",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:54:103"},d),n.createElement("canvas",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:54:135","data-os-action":"","data-renderer":"native-height","data-review-frame":e.descriptor.frameId,"data-grid-origin":[_.xmin,_.zmin,e.descriptor.spacing].join(","),ref:u,width:p,height:f,"data-hotspot-index":m?.hotspot.index??"","aria-label":a==="heightA"?"GT height map":a==="heightB"?"Prediction height map":l?"Absolute height difference map":"Signed height difference map",onPointerDown:S,onPointerMove:B=>{h.current&&b==="adjust"&&r(E(g(B),h.current))},onPointerUp:x,onPointerCancel:()=>{h.current?.roi&&b==="adjust"&&r(h.current.roi),h.current=null}}),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:54:799"},"X ",Fe(_.xmin),"…",Fe(_.xmax)," · Z ",Fe(_.zmin),"…",Fe(_.zmax)," m"),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:54:909"},Fe(t[0])," … ",Fe(t[1])," m"))}function w1({profile:e,zh:a}){const t=e.points,s=t.flatMap(b=>[b.a,b.b]).filter(Number.isFinite),i=t.map(b=>b.difference).filter(Number.isFinite);if(!s.length)return n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:58:27",role:"status"},a?"此剖面没有有效高度。":"No valid heights on this profile.");const o=Math.min(...s),r=Math.max(...s),c=Math.max(r-o,1e-9),d=Math.max(...i.map(Math.abs),1e-9),l=Math.max(t.at(-1)?.distance||0,1e-9);function m(b,v=!1){let u=!1;return t.map(h=>{if(h[b]===null)return u=!1,"";const f=42+h.distance/l*640,p=v?235-h[b]/d*42:166-(h[b]-o)/c*130,_=u?"L":"M";return u=!0,`${_}${f},${p}`}).join(" ")}return n.createElement("figure",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:9","data-review-id":"protocol-height-profile","data-profile-axis":[0,l,42,682].join(","),className:"protocol-profile"},n.createElement("figcaption",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:137"},a?"同一截面 · 蓝色GT／橙色预测 · B−A":"Same section · blue GT / orange prediction · B−A"," · ",e.sampling==="native_columns"?a?"原生列":"Native columns":a?"四邻点共同有效 · 插值诊断":"Four valid neighbors · interpolated diagnosis"),n.createElement("svg",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:380",viewBox:"0 0 720 300",role:"img","aria-label":"Protocol height profile"},n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:455",x:"8",y:"18"},"Y (m)"),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:486",x:"42",y:"30"},Fe(r)),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:526",x:"42",y:"185"},Fe(o)),n.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:567",d:m("a"),fill:"none",stroke:"#2583c5",strokeWidth:"2"}),n.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:633",d:m("b"),fill:"none",stroke:"#e08b22",strokeWidth:"2"}),n.createElement("line",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:699",x1:"42",y1:"235",x2:"682",y2:"235",stroke:"#798699",strokeDasharray:"4 3"}),n.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:780",d:m("difference",!0),fill:"none",stroke:"#9b4778",strokeWidth:"1.5"}),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:862",x:"4",y:"220"},"B−A"),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:892",x:"4",y:"240"},"0"),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:920",x:"600",y:"295"},Fe(l)," m"),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:61:969",x:"44",y:"295"},a?"沿截面距离":"Section distance"," · ±",Fe(d)," m")))}function to({value:e,label:a,zh:t}){return n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:63:43",className:"protocol-metrics","aria-label":a},n.createElement("strong",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:64:2"},a==="ROI metrics"?t?"选区 · 水面高度":"ROI · Surface height":t?"当前帧全域 · 水面高度":"Full frame · Surface height"),n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:2",className:"protocol-metric-cards"},n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:66:3"},n.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:66:8"},t?"有效对比点":"Paired valid locations"," ",e.common),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:66:73"},t?"共同列 · 两边都有有效高度":"Common columns · valid heights in both")),e.common?n.createElement(n.Fragment,null,n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:68:4"},n.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:68:9"},"MAE ",Fe(e.mae_m,100)," cm"),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:68:54"},t?"平均差多少 · 越小越好":"Average error size · lower is better")),n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:69:4"},n.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:69:9"},"Bias ",Fe(e.bias_m,100)," cm"),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:69:56"},t?"平均偏差 · 正值偏高，负值偏低":"Mean signed error · positive higher, negative lower")),n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:70:4"},n.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:70:9"},"RMSE ",Fe(e.rmse_m,100)," cm"),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:70:56"},t?"对大误差更敏感 · 越小越好":"More sensitive to large errors · lower is better"))):n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:71:7"},t?"不可用：无共同有效列":"Unavailable: no common columns")))}function S1({spatial:e,plane:a,sliceIndex:t,rotationAxis:s,angle:i,sectionPercent:o,zh:r,restored:c,controlRef:d,onPause:l,onOpenVelocity:m,reviewRequest:b,onReviewApplied:v}){const[u,h]=j.useState(c?.roi??null),[f,p]=j.useState(c?.probe??null),[_,C]=j.useState(()=>c?.roi??va(e)),[w,g]=j.useState(()=>Kt(c?.roi??va(e))),[E,x]=j.useState({}),[S,B]=j.useState(c?.diagnosis??null),[A,y]=j.useState(c?.appearance?.absoluteError??!1),[M,k]=j.useState("select"),[I,F]=j.useState("");function V(z){try{const q=e.descriptor.shape[1],re=Gi(e,{ix:z.index%q,iz:Math.floor(z.index/q),resourceKey:JSON.stringify(e.descriptor)});l?.(),B(re),p(re.hotspot),ne(re.roi),F("")}catch{F(r?"该点没有共同有效高度，请选择有效水面。":"No paired height at this point. Choose a valid water column.")}}const K=e1(w,_,E),W=Object.keys(K.errors).length?r?"请补全数字；每个轴的最小值不能大于最大值。当前已应用的选区未改变。":"Enter all numeric bounds; each minimum must be no greater than its maximum. The applied ROI is unchanged.":"";j.useImperativeHandle(d,()=>({capture:()=>({spatial:e,roi:u,probe:f,diagnosis:S,appearance:{absoluteError:A}})}));const G=j.useMemo(()=>E1(e),[e]),ae=j.useMemo(()=>_a(e),[e]),T=j.useMemo(()=>u?_a(e,u):null,[e,u]),N=j.useMemo(()=>{if(a==="xz"||a==="oblique"&&s!=="y")return null;try{return lo(e,{plane:a,index:Math.max(0,Math.min((a==="xy"?e.descriptor.shape[0]:e.descriptor.shape[1])-1,t)),angle:i,sectionPercent:o})}catch{return null}},[e,a,t,s,i,o]);function ne(z){B(q=>q?.crest?{...q,crest:void 0}:q),h(z),C(z),g(Kt(z)),x({})}function Y(){B(q=>q?.crest?{...q,crest:void 0}:q);const z=va(e);h(null),C(z),g(Kt(z)),x({})}function ee(){K.valid&&(_a(e,K.values),ne({...K.values}))}const O=f?.index,Z=e.descriptor,ie=Z.resources&&[Z.protocolSha256,Z.manifestA,Z.manifestB,...Object.keys(Z.resources).sort().map(z=>Z.resources[z].sha256)].join("/"),te=ie&&S&&u?{frame:Z.frameId,run:Z.runId,identity:ie,ix:S.hotspot.ix,iz:S.hotspot.iz,x:S.hotspot.x,z:S.hotspot.z,roi:u,direction:S.directionDeg,absolute:A,note:S.caseNote??"",...S.crest&&{crest:S.crest}}:null;return j.useEffect(()=>{if(!(!b||b.frame!==Z.frameId)){try{const z=b,q=Gi(e,{ix:z.ix,iz:z.iz,resourceKey:JSON.stringify(Z)});if(z.identity!==ie||z.run!==Z.runId||z.x!==q.hotspot.x||z.z!==q.hotspot.z||Ba(z.roi,va(e)).clipped||!Number.isFinite(z.direction)||z.direction<0||z.direction>=180||typeof z.absolute!="boolean"||typeof z.note!="string"||z.note.length>120)throw Error();const re={...q,roi:z.roi,directionDeg:z.direction,caseNote:z.note,...z.crest&&{crest:z.crest}};z.crest&&Et({profiles:ia(e,re),roi:z.roi},z.crest),ne(z.roi),B(re),p(q.hotspot),y(z.absolute),F("")}catch{B(null),p(null),Y(),F(r?"批注与当前水面数据不匹配。":"The annotation does not match the current surface data.")}v()}},[b,e]),n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:109:9","data-hotspot-review":te?JSON.stringify({surface:te}):void 0},n.createElement("h2",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:110:3"},r?"高度与选区分析 · 帧 ":"Height & ROI analysis · frame ",e.descriptor.frameId),n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:111:3"},r?"原生列高度 · 最高过零点 · 共同有效域。点击探针，拖动选择ROI；灰色为无效区域。A/B共用色标，B−A正值表示预测偏高。":"Native highest-crossing columns and common support. Click to probe; drag to select ROI. Gray is invalid. Shared A/B scale; positive B−A means prediction is higher."),n.createElement("label",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:112:3"},n.createElement("input",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:112:10","data-os-action":"",type:"checkbox","aria-label":"Absolute height error",checked:A,onChange:z=>y(z.target.checked)}),r?"绝对误差 |B−A|（取消为有符号差值）":"Absolute error |B−A| (clear for signed difference)"),I&&n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:113:20",role:"alert"},I),n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:114:3",className:"protocol-maps"},[["heightA","A / GT"],["heightB","B / Prediction"],["difference","B−A"]].map(([z,q])=>n.createElement(_1,{key:z,spatial:e,kind:z,label:z==="difference"&&A?"|B−A|":q,roi:u,probe:f,profile:N,diagnosis:S,mode:M,onPause:l,absolute:A,range:z==="difference"?[A?0:-G.error,G.error]:G.height,onRegion:ne,onProbe:V}))),n.createElement(n1,{spatial:e,diagnosis:S,roi:u,mode:M,setMode:k,onRegion:ne,onExit:()=>B(null),onNote:z=>B(q=>({...q,caseNote:z})),onCrest:z=>B(q=>({...q,crest:z})),onDirection:z=>B(q=>({...q,directionDeg:z,crest:void 0}))}),S&&m&&n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:116:31"},n.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:116:34","data-os-action":"",disabled:!Xn(e.descriptor.frameId)||!u,onClick:()=>{l?.();const z={frame:e.descriptor.frameId,hotspotXZ:{x:S.hotspot.x,z:S.hotspot.z},roiXZ:{...u},surfaceCaseId:e.descriptor.runId??"best-1027",caseNote:S.caseNote??"",surfaceIdentity:Object.fromEntries(["runId","protocolSha256","manifestA","manifestB"].map(q=>[q,e.descriptor[q]]))};te?m(z,null,te):m(z)}},r?"查看此区域速度":"Inspect velocity in this region"),r?" · 原生速度诊断支持 1001、1049、1096 帧。保留 XZ，单独选择水下 Y 层。":" · Native velocity diagnosis is available for 1001, 1049 and 1096. Retain XZ and choose an underwater Y layer separately."),n.createElement(to,{value:ae,label:"Frame spatial metrics",zh:r}),n.createElement(v1,{zh:r}),n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:119:3",className:"protocol-roi-help"},r?"ROI = 局部选区。X、Z 是水平方向，Y 是高度方向；下面四个边界确定矩形范围，点击“应用选区”后更新局部统计。":"ROI = region of interest. X and Z are horizontal; Y is height. The four bounds define a rectangle. Select Apply ROI to update its statistics."),n.createElement("form",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:120:3",onSubmit:z=>{z.preventDefault(),ee()}},n.createElement("fieldset",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:120:52",className:"protocol-roi"},n.createElement("legend",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:120:87"},r?"选区范围 · 世界坐标（m）":"ROI bounds · world coordinates (m)"),[["xmin","X min"],["xmax","X max"],["zmin","Z min"],["zmax","Z max"]].map(([z,q])=>n.createElement("label",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:120:252",key:z},q,n.createElement("input",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:120:276","data-os-action":"","aria-label":`ROI ${q}`,type:"number",step:"any",value:w[z],title:String(_[z]),"aria-invalid":!!K.errors[z],"aria-describedby":K.errors[z]?"roi-input-error":void 0,onChange:re=>{g(fe=>({...fe,[z]:re.target.value})),x(fe=>({...fe,[z]:!0}))}}))),n.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:120:589",type:"submit",disabled:!K.valid},r?"应用选区":"Apply ROI"),n.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:120:669","data-os-action":"",type:"button",onClick:Y},r?"恢复全域":"Reset to full domain")),W&&n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:120:778",id:"roi-input-error",role:"alert"},W)),n.createElement(fo,{zh:r,subject:"Best_1027 · "+e.descriptor.frameId,context:[A?"|B−A|":"B−A",f&&"XZ "+f.x.toFixed(4)+", "+f.z.toFixed(4),u&&"ROI X ["+u.xmin+", "+u.xmax+"] Z ["+u.zmin+", "+u.zmax+"]",S&&"Profile "+S.directionDeg+"°"].filter(Boolean).join(" · "),viewLink:Rr+"#analysis-height"}),T&&n.createElement(to,{value:T,label:"ROI metrics",zh:r}),f&&n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:127:11","aria-label":"Protocol probe"},n.createElement("strong",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:127:42"},r?"单点探针（不是选区平均）":"Point probe (not an ROI average)"),n.createElement("br",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:127:113"}),"X ",Fe(f.x)," / Z ",Fe(f.z)," m · A / GT ",Fe(e.wetA[O]?e.heightA[O]:null)," / B / ",r?"预测":"Prediction"," ",Fe(e.wetB[O]?e.heightB[O]:null)," m · B−A ",Fe(e.common[O]?e.heightB[O]-e.heightA[O]:null,100)," cm"),!S&&N&&n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:128:25",className:"protocol-profile-help"},r?"曲线怎么看：蓝线是 GT，橙线是预测；紫线是 B−A，零线上方表示预测偏高，下方表示偏低。横轴是沿截面的距离，纵轴是高度；曲线显示整条截面，不只显示 ROI。":"Reading the profile: blue is GT, orange is prediction. Purple is B−A: above zero means higher, below means lower. The horizontal axis is section distance; the vertical axis is height. The profile covers the full section, not just the ROI."),!S&&(N?n.createElement(w1,{profile:N,zh:r}):n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:129:62",role:"status"},r?"选择 XY、YZ 或绕Y竖直截面查看高度曲线；水平／倾斜几何截面不作为俯视高度剖面。":"Choose XY, YZ or a vertical Y-axis section for heights; horizontal/tilted geometry is not a top-down height profile.")),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:130:3"},r?"单位：来源约定，未独立标定。高度仅表示俯视最高层，不覆盖完整翻卷内部结构。全序列指标保持原始范围；ROI与插值剖面不替换全局指标。":"Units: source convention, not independently calibrated. Heights describe the topmost layer, not complete overturning geometry. Sequence metrics retain their scope; ROI and interpolated profiles do not replace them."))}function j1({viewMode:e="all",bundle:a,frame:t,plane:s,sliceIndex:i,rotationAxis:o,angle:r,sectionPercent:c,getReportView:d,onRestoreReportView:l,reportControlRef:m,onDownload:b,catalog:v,reportContext:u,onPause:h,onOpenVelocity:f,unifiedRestore:p=!1,reviewRequest:_,onReviewApplied:C}){const{language:w}=ue(),g=w==="zh",E=JSON.stringify([a.runId,a.protocol,a.datasetA,a.datasetB,t]),[x,S]=j.useState(0),[B,A]=j.useState(null),[y,M]=j.useState(null),k=j.useRef(null),I=j.useRef(u);I.current=u,j.useEffect(()=>{y&&y.view.frame!==t&&M(null)},[t,y]),j.useEffect(()=>{const ae=new AbortController;let T=!0;return(async()=>{try{const N=await lt(ka,dt.indexSha256,a),ne=N.frames.find(ee=>ee.frameId===t);if(!ne)throw Error("No spatial resource for selected frame");if(!T)return;const Y=await Ca(ne,{...aa(a),frameId:t},ae.signal);T&&A({key:E,spatial:Y})}catch(N){T&&A({key:E,error:N})}})(),()=>{T=!1,ae.abort()}},[a,t,E,x]);const F=B?.key===E?B:null;function V(){if(!F?.spatial||!k.current)throw Error("Wait for verified spatial resources");const ae=k.current.capture(),{view:T,scene:N}=d(),ne=P0({bundle:a,...ae,view:T,catalog:v});return{record:ne,canvas:G0(ne,ae.spatial,N,w)}}async function K(ae,T){h?.();const N=I.current,ne=await lt(ka,dt.indexSha256,a),Y=To(ae,a,ne,{catalog:v}),ee=await Ca(Y.descriptor,{...aa(a),frameId:Y.view.frame},T);if(Y.diagnosis&&!ee.common[Y.diagnosis.hotspot.index])throw Error("Diagnosis hotspot has no paired valid height");if(Y.diagnosis?.crest&&Et({profiles:ia(ee,Y.diagnosis),roi:Y.roi},Y.diagnosis.crest),T.throwIfAborted(),I.current!==N)throw Error("View changed while restoring; retry from the current view");return{...Y,spatial:ee}}async function W(ae,T){T.throwIfAborted();const N=JSON.stringify([a.runId,a.protocol,a.datasetA,a.datasetB,ae.view.frame]);A({key:N,spatial:ae.spatial}),M({...ae,revision:crypto.randomUUID()}),await l(ae.view,T)}const G=y?.view.frame===t?y:null;return n.createElement("section",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:169:9",className:"protocol-spatial","aria-label":"Protocol spatial analysis"},n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:169:86","data-review-frame":t,hidden:e==="report"},F?F.error?n.createElement(Cn,{error:F.error,zh:g,resource:(g?"水面高度与掩码 · 帧 ":"Height and masks · frame ")+t,onRetry:()=>{A(null),S(ae=>ae+1)}}):n.createElement(S1,{key:E+(G?.revision??""),reviewRequest:_,onReviewApplied:C,controlRef:k,restored:G,spatial:F.spatial,plane:s,sliceIndex:i,rotationAxis:o,angle:r,sectionPercent:c,zh:g,onPause:h,onOpenVelocity:f}):n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:169:155",role:"status"},g?`正在加载帧 ${t} 的同协议空间资源…`:`Loading protocol spatial resources for frame ${t}…`),n.createElement(x1,{bundle:a,zh:g,getSelection:()=>{const ae=k.current?.capture();if(!ae?.diagnosis||!ae.roi)throw Error(g?"请先点击高度图选择热点并设置选区。":"Select a hotspot on a height map and apply an ROI first.");const{hotspot:T,directionDeg:N}=ae.diagnosis;return{sourceFrame:ae.spatial.descriptor.frameId,ix:T.ix,iz:T.iz,x:T.x,z:T.z,roi:{...ae.roi},directionDeg:N}}})),n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:176:8",hidden:e==="height"},d&&n.createElement(K0,{unifiedRestore:p,key:a.runId,controlRef:m,ready:!!F?.spatial,capture:V,prepareImport:K,applyImport:W,onDownload:b,zh:g})))}const Ja=["#66d9eb","#ffbf69"];function C1({pair:e,stopLabels:a,t}){const{gt:s,pred:i,seed:o,split:r,separation:c}=e,d=[o,...s.points,...i.points],l=[0,1].map(E=>{const x=d.map(S=>S[E]);return[Math.min(...x),Math.max(...x)]}),m=Math.max(6*c,...l.map(([E,x])=>x-E)),[b,v]=l.map(([E,x])=>(E+x)/2),u=([E,x])=>[160+(E-b)*250/m,150-(x-v)*250/m],h=[s,i],f=["GT",t("预测","Prediction")],p=u(o);function _(E,x){const[S,B]=u(s.points[E]),[A,y]=u(i.points[E]);return n.createElement("g",{"data-os-loc":"src/field/StreamlineFigure.jsx:19:12","data-event":x?"before":r?"crossing":"last-shared",stroke:x?"#cad4dd":"white"},n.createElement("line",{"data-os-loc":"src/field/StreamlineFigure.jsx:20:7",x1:S,y1:B,x2:A,y2:y,strokeDasharray:x?"2 2":void 0}),[[S,B],[A,y]].map(([M,k],I)=>n.createElement("circle",{"data-os-loc":"src/field/StreamlineFigure.jsx:21:41",key:I,cx:M,cy:k,r:x?2:3,fill:x?"#0d2030":"white"})))}const C=Math.min(s.points.length,i.points.length)-1,w=r?r.i:C;function g(E,x,S){if(!E)return null;const[B,A]=E;return n.createElement("path",{"data-os-loc":"src/field/StreamlineFigure.jsx:29:12",d:`M ${B} ${A} L 305 ${x} H 315`,stroke:S,opacity:".65",fill:"none",strokeWidth:".9"})}return n.createElement("svg",{"data-os-loc":"src/field/StreamlineFigure.jsx:31:10",role:"img","aria-label":t("同起点配对流线","Same-seed paired streamlines"),viewBox:"0 0 480 300",className:"paired-stream-figure"},n.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:32:5",x:"12",y:"21",fill:"#dbe6ea",fontSize:"12"},"+X →　+Z ↑"),h.map((E,x)=>n.createElement("polyline",{"data-os-loc":"src/field/StreamlineFigure.jsx:33:26",key:f[x],fill:"none",stroke:Ja[x],strokeWidth:"2.5",strokeDasharray:x?"5 3":void 0,points:E.points.map(S=>u(S).join(",")).join(" ")})),r&&_(r.i-1,!0),w>=0&&_(w,!1),w>=0&&g(u(s.points[w].map((E,x)=>(E+i.points[w][x])/2)),60,"white"),n.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:38:5",x:"320",y:"58",fill:"white",fontSize:"14"},r?t("首次达到分离阈值","First crossing"):C>=0?t("最后共同样点","Last shared sample"):t("无共同样点","No shared samples")),r&&n.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:39:13",x:"320",y:"78",fill:"#cbdce4",fontSize:"12"},t("虚线为越阈前一步","Dotted: preceding step")),h.map((E,x)=>{const S=E.points.at(-1),B=142+80*x,A=S&&u(S);return n.createElement("g",{"data-os-loc":"src/field/StreamlineFigure.jsx:43:14",key:f[x],"data-stop":E.stop},A&&n.createElement(n.Fragment,null,n.createElement("rect",{"data-os-loc":"src/field/StreamlineFigure.jsx:44:17",x:A[0]-3,y:A[1]-3,width:"6",height:"6",fill:"#0d2030",stroke:Ja[x]}),g(A,B,Ja[x])),n.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:45:9",x:"320",y:B-3,fill:Ja[x],fontSize:"15"},f[x]," · ",S?t("终点","end"):t("无法起步","no start")),n.createElement("text",{"data-os-loc":"src/field/StreamlineFigure.jsx:46:9",x:"320",y:B+18,fill:"white",fontSize:"13"},a[E.stop]))}),n.createElement("circle",{"data-os-loc":"src/field/StreamlineFigure.jsx:49:5",cx:p[0],cy:p[1],r:"3.5",fill:"#fc6380",stroke:"#181e25"}))}const Ka=e=>e.map(a=>a.toFixed(4)).join(", ");function B1({pair:e,fine:a,onChange:t,detailsRef:s,layer:i,t:o}){const{gt:r,pred:c,split:d,seed:l,step:m,separation:b,maxArc:v}=e,u={mask:o("共同有效域边界","Common mask boundary"),slow:o("投影流速过低","Low projected speed"),limit:o("积分长度上限","Integration length limit"),grid:o("可插值网格边界","Interpolation grid edge")},h=Math.min(r.points.length,c.points.length)-1,f=d?[[o("越阈前","Before"),d.i-1],[o("首次越阈","First crossing"),d.i]]:h>=0?[[o("最后共同样点","Last shared sample"),h]]:[];return n.createElement("section",{"data-os-loc":"src/field/StreamlinePanel.jsx:18:10",className:"paired-stream-panel","aria-label":"1049 paired streamlines"},n.createElement("h3",{"data-os-loc":"src/field/StreamlinePanel.jsx:19:5"},o("配对瞬时流线 · XZ 投影","Paired instantaneous streamlines · XZ projection")),n.createElement("details",{"data-os-loc":"src/field/StreamlinePanel.jsx:20:5",ref:s,open:!0},n.createElement("summary",{"data-os-loc":"src/field/StreamlinePanel.jsx:20:36"},o("查看流线图与采样位置","Streamline figure and sample positions")),n.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:21:7"},o("共同起点","Shared seed")," XZ (",Ka(l),") · Y ",i," · ",o("红点为起点，青色实线为 GT，橙色虚线为预测。","Red seed, cyan solid GT, orange dashed prediction.")),n.createElement("button",{"data-os-loc":"src/field/StreamlinePanel.jsx:22:7","data-os-action":"",type:"button","aria-pressed":a,onClick:()=>t(!a)},o("半步长复核","Half-step check")),n.createElement("span",{"data-os-loc":"src/field/StreamlinePanel.jsx:23:7",className:"stream-step"},o("当前步长","Current step")," ",m.toFixed(5)),n.createElement(C1,{pair:e,stopLabels:u,t:o}),n.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:25:7"},d?o("下列相邻样点标出首次观测到间距达到一格的积分步。","These samples bracket the first observed one-cell separation."):h>=0?o("共同积分段内未测到间距达到一格。","No one-cell separation observed on the shared trace."):o("当前起点没有可配对的积分样点。","No paired integration samples at this seed.")),f.length>0&&n.createElement("div",{"data-os-loc":"src/field/StreamlinePanel.jsx:28:26",className:"stream-samples"},n.createElement("table",{"data-os-loc":"src/field/StreamlinePanel.jsx:28:58"},n.createElement("caption",{"data-os-loc":"src/field/StreamlinePanel.jsx:28:65"},o("按相同积分弧长 s 对照，距离沿用来源空间单位","Matched integration arc length s, in source length units")),n.createElement("thead",{"data-os-loc":"src/field/StreamlinePanel.jsx:29:9"},n.createElement("tr",{"data-os-loc":"src/field/StreamlinePanel.jsx:29:16"},[o("样点","Sample"),"s","GT XZ",o("预测 XZ","Pred XZ"),o("间距","Gap")].map(p=>n.createElement("th",{"data-os-loc":"src/field/StreamlinePanel.jsx:29:94",key:p,scope:"col"},p)))),n.createElement("tbody",{"data-os-loc":"src/field/StreamlinePanel.jsx:30:9"},f.map(([p,_])=>{const C=r.points[_],w=c.points[_];return n.createElement("tr",{"data-os-loc":"src/field/StreamlinePanel.jsx:32:18",key:p},n.createElement("th",{"data-os-loc":"src/field/StreamlinePanel.jsx:32:33",scope:"row"},p),n.createElement("td",{"data-os-loc":"src/field/StreamlinePanel.jsx:32:60"},(_*m).toFixed(5)),n.createElement("td",{"data-os-loc":"src/field/StreamlinePanel.jsx:33:13"},Ka(C)),n.createElement("td",{"data-os-loc":"src/field/StreamlinePanel.jsx:33:30"},Ka(w)),n.createElement("td",{"data-os-loc":"src/field/StreamlinePanel.jsx:33:47"},Math.hypot(C[0]-w[0],C[1]-w[1]).toFixed(5)))})))),[r,c].map((p,_)=>n.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:35:32",key:_},_?o("预测","Prediction"):"GT"," · ",u[p.stop]," · ",p.points.length?`s=${((p.points.length-1)*m).toFixed(5)} · XZ (${Ka(p.points.at(-1))})`:o("起点无可积分样点","No accepted point at seed"))),n.createElement("small",{"data-os-loc":"src/field/StreamlinePanel.jsx:36:7"},o("固定帧、固定 Y 的瞬时投影。有效域边界表示下一步插值所需的四个邻点未全部有效。采用归一化方向的中点 RK2。","Instantaneous projection at a fixed frame and Y. At a mask boundary the next interpolation lacks four valid neighbours. Normalized midpoint RK2.")," Δ≥",b.toFixed(5)," · s≤",v.toFixed(4)," · |vXZ|>1e−8")))}function A1({layer:e,setLayer:a,lattice:t,t:s}){const i=t.dimensions[1]-1,o=e===null?null:t.origin[1]+e*t.axisSteps[1][1],r=c=>{const d=c.target.value.trim(),l=Number(d);d&&Number.isInteger(l)&&l>=0&&l<=i&&a(l)};return n.createElement("fieldset",{"data-os-loc":"src/field/NativeLayerControl.jsx:7:9",className:"native-layer-control"},n.createElement("legend",{"data-os-loc":"src/field/NativeLayerControl.jsx:7:52"},s("三图联动 · 原生 XZ 切层","Linked maps · native XZ slice")),n.createElement("div",{"data-os-loc":"src/field/NativeLayerControl.jsx:8:3",className:"native-layer-strip"},n.createElement("button",{"data-os-loc":"src/field/NativeLayerControl.jsx:9:4","data-os-action":"",type:"button","aria-label":s("上一原生层","Previous native layer"),disabled:e===null||e===0,onClick:()=>a(e-1)},"−"),n.createElement("label",{"data-os-loc":"src/field/NativeLayerControl.jsx:10:4"},s("原生 Y 层","Native Y index")," ",n.createElement("input",{"data-os-loc":"src/field/NativeLayerControl.jsx:10:42","data-os-action":"",type:"number","aria-label":"Velocity Y index",min:"0",max:i,step:"1",value:e??"",onChange:r})),n.createElement("button",{"data-os-loc":"src/field/NativeLayerControl.jsx:11:4","data-os-action":"",type:"button","aria-label":s("下一原生层","Next native layer"),disabled:e===i,onClick:()=>a(e===null?0:e+1)},"+"),n.createElement("input",{"data-os-loc":"src/field/NativeLayerControl.jsx:12:4","data-os-action":"",type:"range","aria-label":"Native Y layer slider",min:"0",max:i,step:"1",value:e??0,"aria-valuetext":e===null?s("未选择","Not selected"):String(e),onChange:r}),n.createElement("output",{"data-os-loc":"src/field/NativeLayerControl.jsx:13:4","aria-label":"Velocity Y world"},s("世界 Y","World Y")," = ",o===null?"—":o.toFixed(8)+" m")))}const gn=(e,a=4)=>e.toFixed(a),es=e=>(e>0?"+":"")+gn(e);function k1({probe:e,tau:a,t,onStreamlines:s}){const i=e.xyz.map(c=>gn(c,5)).join(", "),o=c=>Math.hypot(c[0],c[2]),r=c=>Math.abs(c[1])>o(c);return n.createElement("section",{"data-os-loc":"src/field/VelocityProbe.jsx:9:9",className:"velocity-readout","aria-label":"Velocity probe"},n.createElement("div",{"data-os-loc":"src/field/VelocityProbe.jsx:10:3",className:"velocity-readout-heading"},n.createElement("strong",{"data-os-loc":"src/field/VelocityProbe.jsx:10:45"},t("选中点","Selected point")),n.createElement("small",{"data-os-loc":"src/field/VelocityProbe.jsx:10:89"},"XYZ (",i,")")),e.common?n.createElement(n.Fragment,null,n.createElement("dl",{"data-os-loc":"src/field/VelocityProbe.jsx:12:4"},n.createElement("div",{"data-os-loc":"src/field/VelocityProbe.jsx:13:5"},n.createElement("dt",{"data-os-loc":"src/field/VelocityProbe.jsx:13:10"},t("流速差 · 预测 − GT","Speed difference · prediction − GT")),n.createElement("dd",{"data-os-loc":"src/field/VelocityProbe.jsx:13:76"},es(e.speedDelta)," m/s"),n.createElement("small",{"data-os-loc":"src/field/VelocityProbe.jsx:14:5"},"GT ",gn(e.speedGT)," → ",t("预测","Pred")," ",gn(e.speedPred))),n.createElement("div",{"data-os-loc":"src/field/VelocityProbe.jsx:15:5","aria-label":"Velocity probe direction"},n.createElement("dt",{"data-os-loc":"src/field/VelocityProbe.jsx:15:48"},t("三维流向夹角","3D direction angle")),n.createElement("dd",{"data-os-loc":"src/field/VelocityProbe.jsx:16:5"},e.angleDegrees!==null?gn(e.angleDegrees,2)+"°":t("不可判定","Unavailable")),n.createElement("small",{"data-os-loc":"src/field/VelocityProbe.jsx:17:5"},e.angleDegrees!==null?t("用 XYZ 三个分量计算","Uses all three XYZ components"):a===null?t("夹角已停用","Angles disabled"):t("至少一侧流速 ≤ τ","At least one speed ≤ τ"))),n.createElement("div",{"data-os-loc":"src/field/VelocityProbe.jsx:18:5"},n.createElement("dt",{"data-os-loc":"src/field/VelocityProbe.jsx:18:10"},t("切片法向速度 Vy","Slice-normal velocity Vy")),n.createElement("dd",{"data-os-loc":"src/field/VelocityProbe.jsx:18:62"},es(e.vectorGT[1])," → ",es(e.vectorPred[1])),n.createElement("small",{"data-os-loc":"src/field/VelocityProbe.jsx:18:122"},"GT → ",t("预测","Pred")," · m/s · ",t("正值沿 +Y","positive toward +Y")))),[["GT",e.vectorGT],[t("预测","Prediction"),e.vectorPred]].filter(([,c])=>r(c)).map(([c,d])=>n.createElement("p",{"data-os-loc":"src/field/VelocityProbe.jsx:20:103",className:"velocity-normal-note",key:c},c," · ",t("速度主要垂直于切片","Flow is mainly normal to the slice")," (|Vy| ",gn(Math.abs(d[1]))," > XZ ",gn(o(d))," m/s)."," ",t("图上箭头只画 XZ，短箭头不代表总流速低。","Arrows show XZ only; a short arrow does not imply low total speed."))),n.createElement("details",{"data-os-loc":"src/field/VelocityProbe.jsx:22:4"},n.createElement("summary",{"data-os-loc":"src/field/VelocityProbe.jsx:22:13"},t("向量误差与完整分量","Vector error and full components")),n.createElement("p",{"data-os-loc":"src/field/VelocityProbe.jsx:23:5"},"E ",gn(e.E,6)," m/s · GT XYZ (",e.vectorGT.map(c=>gn(c,6)).join(", "),") · ",t("预测","Pred")," XYZ (",e.vectorPred.map(c=>gn(c,6)).join(", "),")"))):n.createElement("p",{"data-os-loc":"src/field/VelocityProbe.jsx:11:14"},t("不在共同有效域。此处没有可比较的速度；空白不代表静止。","Outside common valid domain. There is no comparable velocity here; missing data does not mean still water.")),s&&n.createElement("button",{"data-os-loc":"src/field/VelocityProbe.jsx:25:19","data-os-action":"",type:"button",onClick:s},t("查看此探针的配对流线","Inspect streamlines at this probe")))}function er({x:e,y:a,dx:t,dy:s}){if(t===0&&s===0)return n.createElement("circle",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:7:27",cx:e,cy:a,r:".5",fill:"none"});const i=Zo(e,a,t,s).map((o,r)=>`${r===0||r===2?"M":"L"} ${o.join(" ")}`).join(" ");return n.createElement(n.Fragment,null,n.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:9:11",d:i,className:"velocity-arrow-outline"}),n.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:9:62",d:i}))}function M1({arrows:e,view:a,role:t}){const s=t==="gt"?"gtOffset":"predOffset";return n.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:14:9",className:"velocity-arrow-layer",role:"img","aria-label":t==="gt"?"Velocity GT arrows":"Velocity prediction arrows",viewBox:`0 0 ${a.width} ${a.height}`,preserveAspectRatio:"none"},e.points.map(i=>n.createElement("g",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:15:25",key:i.index,"data-sample":i.index},n.createElement(er,{x:i.x-a.x+.5,y:a.z+a.height-i.z-.5,dx:i[s][0],dy:-i[s][1]}))))}function P1({arrows:e,view:a}){const{language:t}=ue(),s=t==="zh";return e.points.length?e.referenceSpeed?n.createElement(n.Fragment,null,n.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:24:3",className:"velocity-arrow-reference","aria-hidden":"true",viewBox:`0 0 ${a.width} 8`,preserveAspectRatio:"none"},n.createElement(er,{x:a.width*.04,y:4,dx:e.referenceGridLength,dy:0})),n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:27:3"},s?"参考箭头":"Reference arrow"," ",e.referenceSpeed.toPrecision(4)," m/s · ",s?"两图共用线性比例":"Shared linear scale"," · ",e.points.length," ",s?"个配对格点":"paired grid points")):n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:22:35"},s?"空心点表示 XZ 投影为零":"Hollow markers indicate zero XZ projection"):n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:21:34"},s?"当前采样格点无配对箭头":"No paired arrows at the sampled grid points")}function R1({x:e,z:a,view:t}){const s=t.height-a-.5,i=`M ${e+.5} 0 V ${t.height} M 0 ${s} H ${t.width}`;return n.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:34:9",className:"velocity-probe-layer","aria-hidden":"true",viewBox:`0 0 ${t.width} ${t.height}`,preserveAspectRatio:"none"},n.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:35:3",d:i,className:"velocity-probe-outline"}),n.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:35:54",d:i}))}function nr({slice:e,angles:a,mode:t,arrows:s,view:i,zoom:o,frame:r,probe:c,setProbe:d,ranges:l}){const{language:m}=ue(),b=m==="zh",v=e.roiView,u=!o&&v?[v.x/Math.max(1,e.width-1),(v.x+v.width-1)/Math.max(1,e.width-1),v.z/Math.max(1,e.height-1),(v.z+v.height-1)/Math.max(1,e.height-1)]:null,h=c[0]-i.x,f=c[1]-i.z,p=h>=0&&h<i.width&&f>=0&&f<i.height,_=jt(t,m);return n.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:49:9",className:"velocity-triptych"},_.map(({key:C,title:w,label:g,palette:E,role:x})=>{const S=C==="direction"?a.degrees:e[C],B=C==="direction"?a.mask:e.commonMask,A=l[x?"speed":C],y=x?"speed":C==="speedDelta"?"delta":"error",M=k=>k===0?"0":k.toPrecision(5);return n.createElement("figure",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:55:10","data-review-id":"velocity-map-"+C,key:g,"data-review-frame":r,"data-review-slice":g+" Y "+e.sliceIndex},n.createElement("figcaption",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:56:4"},w," · ",b?"帧":"Frame"," ",r," · Y ",e.sliceIndex," · ",b?"世界 Y":"World Y"," ",e.worldAt(0)[1].toFixed(5)," m"),n.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:57:4",className:"velocity-map"},n.createElement(Cs,{label:g,slice:{width:e.width,height:e.height,values:S,angleSupport:C==="direction"?e.commonMask:null},maskSlice:{values:B},range:A,palette:E,plane:"xz",viewport:i,aspect:i.width*e.stepX/(i.height*e.stepZ),region:u,onCrosshair:k=>d([i.x+Math.min(i.width-1,Math.floor(k[0]*i.width)),i.z+Math.min(i.height-1,Math.floor(k[1]*i.height))])}),x&&s&&n.createElement(M1,{arrows:s,view:i,role:x}),p&&n.createElement(R1,{x:h,z:f,view:i})),x&&n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:67:12"},b?"颜色：三维总流速":"Colour: full 3D speed",s&&(b?" · 箭头：XZ 投影":" · Arrows: XZ projection")),n.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:68:4",className:"velocity-scale "+y}),n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:69:4"},M(A[0])," → ",C==="speedDelta"?"0 → ":"",M(A[1]),C==="direction"?"°":" m/s",x?b?" · GT / 预测共用色标":" · Shared GT / prediction color scale":""),n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:70:4"},"X → · Z ↑ · ",C==="direction"?b?"灰纹：非共同域；浅黄：共同有效但无夹角":"Grey stripes: outside common domain; pale yellow: valid speed, no angle":b?"灰纹：不在共同有效域":"Grey stripes: outside common valid support"),C==="speedDelta"&&n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:71:25"},b?"蓝色为预测偏慢，红色为预测偏快":"Blue: prediction slower; red: prediction faster"),x&&s&&n.createElement(P1,{arrows:s,view:i}))}))}const Vn=(e,a=6)=>Number.isFinite(e)?e.toFixed(a):"N/A",so=e=>e==null?"N/A":(e*100).toFixed(2)+"%",Qa=["xmin","xmax","zmin","zmax"];function io({value:e,angle:a,local:t}){const{language:s}=ue(),i=(r,c)=>s==="zh"?r:c,o=e.counts;return n.createElement("section",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:24:9",className:"velocity-metrics","aria-label":t?"Velocity ROI metrics":"Velocity slice metrics"},n.createElement("h3",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:25:3"},t?i("ROI · 当前 Y 层","ROI · current Y layer"):i("全切片 · 当前 Y 层","Whole slice · current Y layer")),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:3"},i("平均 E ","Mean E "),n.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:28"},Vn(e.meanE)),i(" · 最大 E "," · Maximum E "),n.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:82"},Vn(e.maximum?.value)),i(" · 平均 Δs "," · Mean Δs "),n.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:144"},Vn(e.meanSpeedDelta))),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:27:3"},i("最大 E 的 XYZ：","Maximum E at XYZ: "),e.maximum?.world.map(r=>Vn(r,5)).join(", ")??"N/A"),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:28:3"},i("候选 ","Candidates "),o.candidate,i(" · GT 资格 "," · GT eligible "),o.gtEligible,i(" · 共同有效 "," · Common valid "),o.common,i(" · 非有限排除 "," · Nonfinite excluded "),o.nonfiniteExcluded),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:29:3"},i("覆盖率：共同 / 候选 ","Coverage: common / candidate "),so(e.coverageCandidate),i(" · 共同 / GT 资格 "," · Common / GT eligible "),so(e.coverageGT)),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:30:3"},i("平均三维夹角 ","Mean 3D angle "),Vn(a.meanDegrees,3),i("° · 夹角有效 ","° · Angle valid "),a.count," / ",o.common,i(" · 低速排除 "," · Low-speed excluded "),a.excludedLowSpeedCount??"N/A"),n.createElement("small",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:31:3"},i("仅 GT 资格 ","GT eligible only "),o.gtOnly,i(" · 仅预测有效 "," · Prediction valid only "),o.predOnly,i(" · 双方掩膜通过 "," · Both masks pass "),o.paired,i("。非有限值另行排除。",". Nonfinite values are excluded separately.")))}function I1({loaded:e,request:a,initial:t,surface:s}){const{language:i}=ue(),o=(D,H)=>i==="zh"?D:H,{frame:r,lattice:c,alignment:d}=e,[l,m]=j.useState(t?.domain??"collaborator-native"),[b,v]=j.useState(()=>t?.y??O0({...e,hotspotXZ:a.hotspotXZ,domain:"collaborator-native"})),[u,h]=j.useState(t?.roi??a.roiXZ),[f,p]=j.useState(()=>Object.fromEntries(Qa.map(D=>[D,String((t?.roi??a.roiXZ)[D])]))),[_,C]=j.useState(""),[w,g]=j.useState(()=>t?.probe??Ms(c,a.hotspotXZ)),E=j.useRef(null);function x(){const D=E.current;D&&(D.open=!0,D.querySelector("summary").focus({preventScroll:!0}),D.scrollIntoView({block:"start"}))}const[S,B]=j.useState(t?.streamlineStepFraction===.125),[A,y]=j.useState(t?.mode??"vectorError"),[M,k]=j.useState(t?.zoom??!1),[I,F]=j.useState(t?.showArrows??!0),[V,K]=j.useState(t?t.tau:jn),[W,G]=j.useState(V===null?"":String(V)),[ae,T]=j.useState(""),N=j.useMemo(()=>b===null?null:Ps({frame:r,lattice:c,alignment:d,plane:"xz",sliceIndex:b,domain:l,roiXZ:u}),[r,c,d,b,l,u]),ne=j.useMemo(()=>N?Rs(N,V):null,[N,V]),Y=j.useMemo(()=>N&&d.frame===1049&&l==="collaborator-native"?Xo(N,w,S?.125:.25):null,[N,d.frame,l,w,S]),ee=!!(M&&N?.roiView),O=j.useMemo(()=>N&&(ee?N.roiView:{x:0,z:0,width:N.width,height:N.height}),[N,ee]),Z=t?.scaleCells??4,ie=j.useMemo(()=>I&&O?Is(N,O,ee?4:16,void 0,Z):null,[N,I,O,ee,Z]),te=j.useMemo(()=>{let D=0,H=0,X=0;if(N)for(let oe=0;oe<N.commonMask.length;oe++)N.commonMask[oe]&&(D=Math.max(D,N.speedGT[oe],N.speedPred[oe]),H=Math.max(H,N.vectorError[oe]),X=Math.max(X,Math.abs(N.speedDelta[oe])));return{speed:[0,D||1],vectorError:[0,H||1],speedDelta:[-(X||1),X||1],direction:[0,180]}},[N]),z=N?w[0]+N.width*w[1]:null,q=N&&w[0]>=0&&w[0]<N.width&&w[1]>=0&&w[1]<N.height&&N.commonMask[z],re=j.useMemo(()=>N?{schema:"oceanscope.velocity-diagnostic-data.v1",scope:`${d.frame} native velocity diagnosis; diagnostic export only`,frame:d.frame,source:d.source,resource:d.resource,protocolSha256:d.protocolSha256,lattice:c,unitClaim:d.unitClaim,unitEvidence:d.unitEvidence,vectorBasis:d.vectorBasis,domain:l,domainDefinition:l==="collaborator-native"?d.domainDefinition:{id:l,rule:"Both velocity-valid masks > 0 AND six finite components; no tank or SDF depth filter"},yIndex:b,yWorld:c.origin[1]+b*c.axisSteps[1][1],surfaceRequest:a,roiXZ:u,probe:{index:z,xyz:N.worldAt(z),common:!!q,speedGT:q?N.speedGT[z]:null,speedPred:q?N.speedPred[z]:null,E:q?N.vectorError[z]:null,speedDelta:q?N.speedDelta[z]:null,vectorGT:q?Array.from(N.vectorsGT.subarray(3*z,3*z+3)):null,vectorPred:q?Array.from(N.vectorsPred.subarray(3*z,3*z+3)):null,angleDegrees:q&&ne.mask[z]?ne.degrees[z]:null},whole:N.whole,local:N.local,direction:{tau:V,unit:"m/s (source convention)",thresholdSource:V===null?"disabled":V===jn?"legacy preview numerical epsilon":"user diagnostic input",whole:ne.whole,local:ne.local},display:{mode:A,view:O,zoomed:ee,ranges:te,arrows:ie,scaleCells:Z},...Y&&{streamlines:{stepFraction:S?.125:.25,seed:Y.seed,separation:Y.split,gt:{end:Y.gt.points.at(-1)??null,stop:Y.gt.stop},prediction:{end:Y.pred.points.at(-1)??null,stop:Y.pred.stop}}}}:null,[N,d,c,l,b,a,u,z,q,ne,V,A,O,ee,te,ie,Y,S,Z]),[fe,we]=j.useState(null),[Ae,Ie]=j.useState(null),[Xe,Ve]=j.useState(null);j.useEffect(()=>Ie(null),[i]);const We=Ae?.data===re&&Ae.language===i?Ae.files:null;j.useEffect(()=>()=>{for(const D of Object.values(We??{}))URL.revokeObjectURL(D.href)},[We]),j.useEffect(()=>{if(!re){we(null);return}const D=URL.createObjectURL(new Blob([JSON.stringify(re,null,2)+`
`],{type:"application/json"}));return we({data:re,url:D}),()=>URL.revokeObjectURL(D)},[re]);function $e(){try{const D=qi(re,d,"7c92619c5c85e61bcbcde34c618e86fbf5fa5b4e"),H=H0(D,N,ne,ie,i).toDataURL("image/png"),X=St({stem:`oceanscope-velocity-${d.frame}-y${b}`,record:D,csv:D0(D,N,ne),previewUrl:H});Ie({data:re,files:X,language:i}),Ve(null)}catch(D){Ve(D)}}function R(){const D=Object.fromEntries(Qa.map(H=>[H,Number(f[H])]));if(Qa.some(H=>!f[H].trim()||!Number.isFinite(D[H]))||D.xmin>D.xmax||D.zmin>D.zmax){C(o("请填写完整有限数字，最小值不能大于最大值。原选区未改变。","Enter finite values for every bound, with minimum ≤ maximum. The ROI is unchanged."));return}h(D),C("")}function $(D){D.preventDefault();const H=W.trim()===""?null:Number(W);if(H!==null&&(!Number.isFinite(H)||H<0)){T(o("请输入非负有限数，或留空以停用夹角。","Enter a finite nonnegative number, or leave blank to disable angles."));return}K(H),T("")}const U=j.useMemo(()=>{if(!s||!re)return null;const D=qi(re,d,"annotation"),{schema:H,source:X,alignment:oe,plane:Se,roi:je,probe:Oe,angleThreshold:J,surfaceCase:L}=D;return JSON.stringify({surface:s,velocity:{schema:H,source:X,alignment:oe,plane:Se,roi:je,probe:Oe,angleThreshold:J,surfaceCase:L,domain:{id:l},appearance:{mode:A,zoom:ee},arrows:{enabled:I,scaleCells:Z},...Y&&{streamlines:{stepFraction:S?.125:.25}}}})},[re,d,s]);return n.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:126:9","data-review-frame":d.frame,"data-hotspot-review":U??void 0},n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:127:3"},o("来自水面热点 X ","From surface hotspot X "),Vn(a.hotspotXZ.x,5),"，Z ",Vn(a.hotspotXZ.z,5),o("；保留 XZ 选区。初始 Y 取该列默认域内最上方有效格层，之后由你手动选择，不随水面起伏。","; XZ ROI retained. Initial Y is the highest valid layer in this column within the default domain. Subsequent Y selection is manual and does not follow the surface.")),n.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:3",className:"velocity-controls"},n.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:38"},o("有效域 ","Valid domain "),n.createElement("select",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:72","data-os-action":"","aria-label":"Velocity domain",value:l,onChange:D=>m(D.target.value)},n.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:164",value:"collaborator-native"},o("合作者原生域 · 已核对","Collaborator native domain · verified")),n.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:268",value:"common-finite-exploration"},o("共同有限域 · 探索","Common finite domain · exploration"))))),n.createElement(A1,{layer:b,setLayer:v,lattice:c,t:o}),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:130:3",className:"velocity-domain"},l==="collaborator-native"?o("合作者原生域：X [11,212)、Z [11,105)，GT vel_valid > 0、GT SDF < −0.10（float32）、预测 vel_valid > 0，再排除非有限速度。","Collaborator native domain: X [11,212), Z [11,105), GT vel_valid > 0, GT SDF < −0.10 (float32), prediction vel_valid > 0; nonfinite velocities excluded."):o("探索域：双方速度有效且六分量有限；不应用水槽裁剪或 GT 深水阈值，不作协议评分。","Exploration domain: both velocity masks valid and all six components finite; no tank crop or GT deep-water threshold. Not protocol scoring."),o(" 当前显示为一层，非整帧体积评分。"," Showing one layer, not a full-frame volume score.")),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:131:3"},o("速度单位沿用来源声明 m/s；坐标沿用来源声明 m。物理尺度、时间尺度与向量基底尚未独立标定。E = ‖预测向量 − GT 向量‖；Δs = 预测流速 − GT 流速。","Velocity m/s and coordinates m follow source declarations. Physical scale, time scale and vector basis have not been independently calibrated. E = ‖prediction vector − GT vector‖; Δs = prediction speed − GT speed.")),N?n.createElement(n.Fragment,null,n.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:133:4",className:"velocity-controls"},n.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:134:5"},o("第三图 ","Third map "),n.createElement("select",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:134:36","data-os-action":"","aria-label":"Velocity comparison map",value:A,onChange:D=>y(D.target.value)},n.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:135:6",value:"vectorError"},o("速度向量误差 E","Velocity vector error E")),n.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:135:84",value:"speedDelta"},o("流速大小差 Δs","Speed difference Δs")),n.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:135:157",value:"direction"},o("三维方向夹角","3D direction angle")))),n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:137:5","data-os-action":"",type:"button","aria-pressed":I,onClick:()=>F(D=>!D)},o("配对箭头","Paired arrows")),n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:138:5","data-os-action":"",type:"button","aria-pressed":ee,disabled:!N.roiView,onClick:()=>k(!ee)},ee?o("返回全切片","Back to whole slice"):o("放大 ROI","Zoom to ROI"))),n.createElement("small",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:140:4",className:"velocity-zoom-key"},o("同层缩放：全图每 16 格、ROI 每 4 格取箭头。按原生网格计的箭长比例、色标和统计范围均不变。","Zoom on this layer: arrows every 16 cells in the full view and every 4 in the ROI. Arrow scale in native cells, colour limits and statistical domains stay fixed.")),n.createElement("form",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:141:4",className:"velocity-controls",onSubmit:$},n.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:142:5"},o("方向低速阈值（m/s）","Direction low-speed threshold (m/s)"),n.createElement("input",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:142:68","data-os-action":"","aria-label":"Velocity direction threshold",inputMode:"decimal",value:W,onChange:D=>G(D.target.value)})),n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:143:5",type:"submit"},o("应用方向阈值","Apply direction threshold")),n.createElement("output",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:144:5","aria-label":"Velocity applied threshold"},V===null?o("夹角停用","Angles disabled"):`${o("当前 τ = ","Current τ = ")}${V} m/s · ${V===jn?o("沿用旧预览数值阈值","Legacy preview numerical threshold"):o("自定诊断阈值","Custom diagnostic threshold")}`)),ae&&n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:146:15",role:"alert"},ae),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:147:4"},o("双方完整流速均大于 τ 才计算三维夹角。阈值用于诊断，等待合作者确认，留空可停用夹角。箭头仅显示 XZ 投影，空心点表示投影为零。","The full speed on both sides must exceed τ to calculate a 3D angle. This diagnostic threshold awaits collaborator confirmation; leave blank to disable angles. Arrows show only XZ projections; hollow markers indicate zero projection.")),n.createElement(nr,{slice:N,angles:ne,mode:A,arrows:ie,view:O,zoom:ee,frame:d.frame,probe:w,setProbe:g,ranges:te}),n.createElement(k1,{probe:re.probe,tau:V,t:o,onStreamlines:Y?x:null}),n.createElement("form",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:150:4",onSubmit:D=>{D.preventDefault(),R()}},n.createElement("fieldset",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:150:54",className:"velocity-controls"},n.createElement("legend",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:150:94"},o("速度 ROI · 世界坐标 XZ（不改变 Y）","Velocity ROI · world XZ coordinates (Y unchanged)")),Qa.map(D=>n.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:150:208",key:D},D,n.createElement("input",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:150:226","data-os-action":"","aria-label":"Velocity ROI "+D,type:"text",inputMode:"decimal",value:f[D],onChange:H=>p(X=>({...X,[D]:H.target.value}))}))),n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:150:379",type:"submit"},o("应用速度选区","Apply velocity ROI")))),_&&n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:150:473",role:"alert"},_),Y&&n.createElement(B1,{detailsRef:E,layer:b,pair:Y,fine:S,onChange:B,t:o}),n.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:152:4",className:"velocity-statistics"},n.createElement(io,{value:N.whole,angle:ne.whole}),n.createElement(io,{value:N.local,angle:ne.local,local:!0})),n.createElement("section",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:153:4",className:"velocity-report","aria-label":"Velocity report"},n.createElement("h3",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:154:5"},o("可恢复速度报告","Restorable velocity report")),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:155:5"},o("用当前切片、选区和显示设置生成一份报告。配套 JSON 可从“报告与恢复”重新打开。","Generate a report from the current slice, ROI and display settings. Reopen its JSON in Reports & restore.")),n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:156:5","data-os-action":"",type:"button",onClick:$e},o("生成当前速度报告","Generate current velocity report")),n.createElement(Cn,{error:Xe,zh:i==="zh"}),We&&n.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:158:19",className:"velocity-report-downloads"},Object.entries(We).map(([D,H])=>n.createElement("a",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:159:54",key:D,href:H.href,download:H.name},D==="json"?o("下载可恢复速度 JSON","Download restorable velocity JSON"):o("下载速度报告 ","Download velocity report ")+D.toUpperCase()))),Ae&&!We&&n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:161:28",role:"status"},o("视图已更新。请重新生成速度报告。","The view or language changed. Generate the velocity report again."))),fe?.data===re&&n.createElement("a",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:163:28",download:`oceanscope-velocity-${d.frame}-y${b}-data.json`,href:fe.url},o("导出速度诊断数据 JSON（不用于恢复）","Export velocity diagnostic data JSON (not restorable)"))):n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:132:11",role:"status"},o("热点列内没有共同有效点。请选择明确的 Y 层；不会移到其他 XZ。","No common valid point in the hotspot column. Select an explicit Y layer; XZ will not move.")))}function N1({frameNumber:e,request:a,restored:t,surface:s,markView:i}){const{language:o}=ue(),r=(h,f)=>o==="zh"?h:f,[c,d]=j.useState(null),[l,m]=j.useState(0),b=a?.frame===e&&!!Xn(e);j.useEffect(()=>{const h=f=>{!c?.loaded&&!t&&f.detail?.includes(e)&&m(p=>p+1)};return window.addEventListener("oceanscope-velocity-files",h),()=>window.removeEventListener("oceanscope-velocity-files",h)},[c,t,e]),j.useEffect(()=>{if(!b||t){d(null);return}const h=new AbortController;let f=!0;return d(null),ks(e,{signal:h.signal}).then(p=>{f&&d({frameNumber:e,request:a,loaded:p})}).catch(p=>{f&&d({frameNumber:e,request:a,error:p})}),()=>{f=!1,h.abort()}},[e,a,b,l,t]);const v=t??(c?.frameNumber===e&&c?.request===a?c:null),u=v?.loaded?"ready":v?.error?.code==="VELOCITY_FILE_REQUIRED"?"missing":v?.error?"error":"loading";return n.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:183:9",className:"velocity-diagnosis","data-velocity-state":u,"data-velocity-frame":e},n.createElement("h2",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:183:115"},r("速度与方向诊断 · 帧 ","Velocity and direction diagnosis · frame "),e),b?v?.error?n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:183:426",role:"alert"},r("速度资源加载失败：","Velocity resource failed to load: "),v.error.message," ",n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:183:519","data-os-action":"",onClick:()=>m(h=>h+1)},r("重试速度资源","Retry velocity resource"))):v?.loaded?n.createElement(I1,{key:l,loaded:v.loaded,request:a,surface:s,initial:t?.view??i}):n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:183:749",role:"status"},r("正在读取并校验 ","Reading and verifying "),e,r(" 原始值诊断资源…"," raw-value diagnostic resources…")):n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:183:211",role:"status"},r("当前帧 ","Frame "),e,r(" 暂无对应的速度报告视图。请选择已核验帧，并从该帧的水面热点或报告进入。"," has no velocity report view. Choose a verified frame and enter from its surface hotspot or report.")))}const Os="oceanscope.velocity-comparison.v1",F1=[1001,1049,1096],Ts="best-1027",Ds="raw-reference-96-e81b8955734e",Bt="collaborator-native",hs=28,gs=[166,186,80,100],O1=4,T1=["vectorError","speedDelta","direction"],D1={mode:"direction",probe:[176,90],arrows:!0};function zs(){const e=F1.map(Xn),{lattice:a,protocolSha256:t,domainDefinition:s}=e[0],[i,o,r,c]=gs,d=u=>a.origin[0]+u*a.axisSteps[0][0],l=u=>a.origin[2]+u*a.axisSteps[2][2],m={xmin:d(i),xmax:d(o),zmin:l(r),zmax:l(c)},b={axis:"xz",yIndex:hs,yWorld:a.origin[1]+hs*a.axisSteps[1][1]},v=e.map(u=>({frame:u.frame,gtSha256:u.source.gt.sha256,predSha256:u.source.prediction.sha256,packedSha256:u.resource.packedSha256,decodedSha256:u.resource.decodedSha256}));return{alignments:e,roi:m,plane:b,domain:Bt,tau:jn,domainDefinition:s,protocolSha256:t,sources:v,lattice:a}}function ct(e){return e.caseId===Ts&&e.runId===Ds}async function ar(e,a=ks){const{alignments:t,roi:s,lattice:i,domainDefinition:o}=zs(),r=[];for(const c of t){e.throwIfAborted();const d=await a(c.frame,{signal:e});if(e.throwIfAborted(),d.alignment!==c||JSON.stringify(d.lattice)!==JSON.stringify(i)||JSON.stringify(c.domainDefinition)!==JSON.stringify(o))throw Error("Velocity comparison requires the verified common lattice and protocol");const l=Ps({...d,plane:"xz",sliceIndex:hs,domain:Bt,roiXZ:s});r.push({frame:c.frame,slice:l,angles:Rs(l,jn)})}return z1(r)}function z1(e){const a=e[0].slice,t=new Uint8Array(a.commonMask.length),s=new Uint8Array(t.length),i=[];let o=0,r=0,c=0,d=0,l=0,m=0;for(let u=0;u<t.length;u++)if(!(!a.roiMask[u]||!a.candidateMask[u])&&(i.push(u),!!e.every(({slice:h})=>h.commonMask[u]))){t[u]=1,o++,e.every(({angles:h})=>h.mask[u])&&(s[u]=1,r++);for(const{slice:h}of e){c=Math.max(c,h.speedGT[u],h.speedPred[u]),d=Math.max(d,h.vectorError[u]),l=Math.max(l,Math.abs(h.speedDelta[u]));for(const f of[h.vectorsGT,h.vectorsPred])m=Math.max(m,Math.hypot(f[u*3],f[u*3+2]))}}const b=a.roiView,v=e.map(({frame:u,slice:h,angles:f})=>{let p=0,_=0,C=0;for(const g of i)t[g]&&(p+=h.vectorError[g],_+=h.speedDelta[g]),s[g]&&(C+=f.degrees[g]);const w={...h,commonMask:t};return{frame:u,nativeMask:h.commonMask,slice:w,angles:{...f,mask:s},arrows:Is(w,b,O1,m),summary:{frame:u,nativeRoi:h.local.counts.common,meanE:o?p/o:null,meanDelta:o?_/o:null,meanAngle:r?C/r:null}}});return{view:b,rows:v,roiIndices:i,paired:o,anglePaired:r,ranges:{speed:[0,c||1],vectorError:[0,d||1],speedDelta:[-(l||1),l||1],direction:[0,180]}}}function V1(e,a,t){const{roi:s,plane:i,protocolSha256:o,sources:r,domainDefinition:c}=zs();return{schema:Os,createdAt:new Date().toISOString(),source:{caseId:Ts,runId:Ds,protocolSha256:o,codeRevision:t,frames:r},scope:{preset:"1049-a-fixed-roi",plane:i,roi:s,domain:Bt,domainDefinition:c,tau:jn},view:a,result:{roiCandidates:e.roiIndices.length,shared:e.paired,sharedAngles:e.anglePaired,ranges:e.ranges,arrowReferenceSpeed:a.arrows?e.rows[0].arrows.referenceSpeed:null,arrowIndices:a.arrows?e.rows[0].arrows.points.map(d=>d.index):[],frames:e.rows.map(d=>d.summary)}}}function ys(e,a){return!a||typeof a!="object"?e===a:!e||typeof e!="object"||Array.isArray(a)&&(!Array.isArray(e)||e.length!==a.length)?!1:Object.keys(a).every(t=>ys(e[t],a[t]))}function W1(e,a){if(e.length>1024*1024)throw Error("Velocity comparison report too large");const t=JSON.parse(e),{plane:s,roi:i,protocolSha256:o,sources:r}=zs();if(t?.schema!==Os||!ct(a)||!ys(t.source,{caseId:Ts,runId:Ds,protocolSha256:o,frames:r})||!ys(t.scope,{preset:"1049-a-fixed-roi",plane:s,roi:i,domain:Bt,tau:jn}))throw Error("Velocity comparison report source or preset mismatch");const{mode:c,probe:d,arrows:l}=t.view??{};if(!T1.includes(c)||typeof l!="boolean"||!Array.isArray(d)||d.length!==2||!d.every((m,b)=>Number.isInteger(m)&&m>=gs[b*2]&&m<=gs[b*2+1]))throw Error("Velocity comparison report view is invalid");return{mode:c,probe:d,arrows:l}}async function $1(e,a,t){t.throwIfAborted();const s=W1(e,a),i=await ar(t);return{view:s,data:i}}function X1(e,a){const t=["frame,native_index,x,y,z,frame_valid,shared_valid,shared_angle_valid,probe,arrow,gt_speed,pred_speed,vector_error,speed_delta,direction_degrees"];for(const{frame:s,nativeMask:i,slice:o,angles:r,arrows:c}of e.rows){const d=new Set(a.arrows?c.points.map(m=>m.index):[]),l=a.probe[0]+o.width*a.probe[1];for(const m of e.roiIndices){const b=o.commonMask[m],v=r.mask[m];t.push([s,m,...o.worldAt(m),i[m],b,v,+(m===l),Number(d.has(m)),...b?[o.speedGT[m],o.speedPred[m],o.vectorError[m],o.speedDelta[m]]:["","","",""],v?r.degrees[m]:""].join(","))}}return t.join(`
`)+`
`}const Pn=(e,a=5)=>Number.isFinite(e)?e.toFixed(a):"N/A";function G1({data:e,initialView:a}){const{language:t}=ue(),s=(E,x)=>t==="zh"?E:x,[i,o]=j.useState(a),[r,c]=j.useState(null),[d,l]=j.useState(null);j.useEffect(()=>c(null),[t]);const m=r?.view===i&&r.language===t?r.files:null;j.useEffect(()=>()=>{for(const E of Object.values(m??{}))URL.revokeObjectURL(E.href)},[m]);const{paired:b,anglePaired:v,roiIndices:u,rows:h,ranges:f}=e,p=i.arrows?h[0].arrows.points.length:0,_=i.probe[0]+i.probe[1]*h[0].slice.width,C=h[0].slice.worldAt(_);function w(E){o(x=>({...x,...E})),l(null)}function g(){try{const E=V1(e,i,"7c92619c5c85e61bcbcde34c618e86fbf5fa5b4e"),x=L0(E,e,t).toDataURL("image/png"),S=St({stem:"oceanscope-best-1027-velocity-comparison",record:E,previewUrl:x,csv:X1(e,i)});c({view:i,files:S,language:t}),l(null)}catch(E){l(E)}}return n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:43:3"},s("Best_1027 · XZ 固定选区 · Y=28（约 −0.10 m）· 合作者原生有效域 · 方向阈值 1e−8 m/s","Best_1027 · fixed XZ ROI · Y=28 (about −0.10 m) · collaborator native domain · direction threshold 1e−8 m/s")),n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:44:3"},s("1049 A 的 ROI 为 X [−1.35, −0.35]、Z [1.45, 2.45] m。三帧共同有效 ","1049 A ROI: X [−1.35, −0.35], Z [1.45, 2.45] m. Common valid across three frames: "),b," / ",u.length,s("，其中三帧均可判定夹角 ","; angles valid in all three: "),v,s("。图和均值使用对应的共同格点，棋盘表示该格点未纳入。",". Maps and means use the corresponding common grid points; checkerboards mark excluded points.")),n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:45:3"},s("流速共用 0–","Shared speed range 0–"),Pn(f.speed[1]),s(" m/s。配对箭头共用比例和采样位置"," m/s. Paired arrows share a scale and sampling positions"),i.arrows&&s("，每帧 ",", with ")+p+s(" 个点"," points per frame"),s("。速度和坐标单位沿用来源声明。",". Velocity and coordinate units follow source declarations.")),n.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:46:3",className:"velocity-controls"},n.createElement("label",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:47:4"},s("第三图 ","Third map "),n.createElement("select",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:47:35","data-os-action":"","aria-label":"Three-frame comparison map",value:i.mode,onChange:E=>w({mode:E.target.value})},n.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:48:5",value:"direction"},s("三维方向夹角","3D direction angle")),n.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:49:5",value:"vectorError"},s("速度向量误差 E","Velocity vector error E")),n.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:50:5",value:"speedDelta"},s("流速大小差 Δs","Speed difference Δs")))),n.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:52:4","data-os-action":"",type:"button","aria-pressed":i.arrows,onClick:()=>w({arrows:!i.arrows})},s("三帧配对箭头","Three-frame paired arrows"))),n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:54:3","aria-label":"Three-frame probe"},s("同步探针 XYZ (","Synchronized probe XYZ ("),C.map(E=>Pn(E)).join(", "),") · ",h[0].slice.commonMask[_]?s("三帧共同有效","Common valid in all three frames"):s("不在三帧共同有效格点内","Outside the three-frame common grid points")),n.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:55:3",className:"velocity-comparison-table"},n.createElement("table",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:55:46"},n.createElement("caption",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:56:4"},s("固定 ROI · 各帧覆盖与共同样本指标","Fixed ROI · frame coverage and common-sample metrics")),n.createElement("thead",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:4"},n.createElement("tr",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:11"},n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:15"},s("帧","Frame")),n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:40"},s("本帧有效 / 候选","Frame valid / candidate")),n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:91"},s("共同格点平均 E（m/s）","Common-point mean E (m/s)")),n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:148"},s("平均 Δs（m/s）","Mean Δs (m/s)")),n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:190"},s("平均夹角","Mean angle")))),n.createElement("tbody",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:4"},h.map(({frame:E,summary:x})=>n.createElement("tr",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:43",key:E},n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:59",scope:"row"},E),n.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:87"},x.nativeRoi," / ",u.length),n.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:137"},Pn(x.meanE)),n.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:169"},Pn(x.meanDelta)),n.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:205"},Pn(x.meanAngle,2),"°")))))),h.map(({frame:E,slice:x,angles:S,arrows:B})=>n.createElement("section",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:60:49",key:E,className:"velocity-comparison-row","aria-label":`Velocity comparison frame ${E}`},n.createElement("h3",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:61:4"},s("帧 ","Frame "),E),n.createElement(nr,{frame:E,slice:x,angles:S,ranges:f,mode:i.mode,arrows:i.arrows?B:null,view:e.view,zoom:!0,probe:i.probe,setProbe:A=>w({probe:A})}),x.commonMask[_]?n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:64:31"},s("探针 E ","Probe E "),Pn(x.vectorError[_])," m/s · Δs ",Pn(x.speedDelta[_]),s(" m/s · 夹角 "," m/s · Angle "),S.mask[_]?Pn(S.degrees[_],2)+"°":"N/A"):null)),n.createElement("section",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:66:3",className:"velocity-report","aria-label":"Three-frame velocity report"},n.createElement("h3",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:67:4"},s("可恢复三帧报告","Restorable three-frame report")),n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:68:4"},s("CSV 保留三帧各自的 ROI 候选格点与有效标记。JSON 可在“报告与恢复”重新打开，指标会从核验后的资源重算。","CSV retains each frame’s ROI candidate grid points and validity flags. Reopen JSON in Reports & restore; metrics are recomputed from verified resources.")),n.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:69:4","data-os-action":"",type:"button",onClick:g},s("生成三帧速度报告","Generate three-frame velocity report")),n.createElement(Cn,{error:d,zh:t==="zh"}),r&&!m&&n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:71:25",role:"status"},s("视图或语言已更新，请重新生成报告。","The view or language changed. Generate the report again.")),m&&n.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:72:14",className:"velocity-report-downloads"},Object.entries(m).map(([E,x])=>n.createElement("a",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:73:5",key:E,href:x.href,download:x.name},s("下载三帧报告 ","Download three-frame report "),E.toUpperCase())))))}function Z1({restored:e}){const{language:a}=ue(),t=(d,l)=>a==="zh"?d:l,[s,i]=j.useState(null),[o,r]=j.useState(0);j.useEffect(()=>{const d=()=>{!s?.data&&!e&&r(l=>l+1)};return window.addEventListener("oceanscope-velocity-files",d),()=>window.removeEventListener("oceanscope-velocity-files",d)},[s,e]),j.useEffect(()=>{if(e)return;const d=new AbortController;return i(null),ar(d.signal).then(l=>{d.signal.aborted||i({data:l})}).catch(l=>{d.signal.aborted||i({error:l})}),()=>d.abort()},[e,o]);const c=e??s;return n.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:100:9",className:"velocity-diagnosis"},n.createElement("h2",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:101:3"},t("三帧速度对照 · 1001 / 1049 / 1096","Three-frame velocity comparison · 1001 / 1049 / 1096")),c?.data?n.createElement(G1,{data:c.data,initialView:e?.view??D1}):c?.error?n.createElement(n.Fragment,null,n.createElement(Cn,{error:c.error,zh:a==="zh"}),n.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:103:84","data-os-action":"",type:"button",onClick:()=>r(d=>d+1)},t("重试三帧资源","Retry three-frame resources"))):n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:104:6",role:"status"},t("正在核验三帧速度资源并计算共同有效格点…","Verifying three-frame velocity resources and computing common valid grid points…")))}function H1({enabled:e,open:a,active:t,forceModal:s=!1,label:i,closeLabel:o,onClose:r,returnFocusRef:c,children:d}){const[l,m]=j.useState(()=>e&&!!globalThis.matchMedia?.("(max-width:900px)").matches),b=e&&(l||s),v=j.useRef(null),u=j.useRef(null),h=j.useRef(a&&t),f=j.useRef(!1);j.useEffect(()=>{if(!e)return;const w=globalThis.matchMedia?.("(max-width:900px)");if(!w)return;const g=()=>m(w.matches);return g(),w.addEventListener("change",g),()=>w.removeEventListener("change",g)},[e]),j.useEffect(()=>{if(!e)return;const w=v.current;return b&&(a&&t&&!w.open?w.showModal():w.open&&(!a||!t)&&w.close()),a&&t&&(b||!h.current)&&u.current?.focus({preventScroll:!0}),!a&&f.current&&(f.current=!1,c.current?.focus({preventScroll:!0})),h.current=a&&t,()=>{b&&w.open&&w.close()}},[e,b,a,t]);function p(){f.current=!0,r()}function _(w){if(e){if(w.key==="Escape"){w.preventDefault(),w.stopPropagation(),p();return}if(b&&w.key==="Tab"){const g=[...v.current.querySelectorAll("button,input,select,textarea,a[href],summary,[tabindex]")].filter(S=>!S.disabled&&S.tabIndex>=0&&S.getClientRects().length),E=g[0],x=g.at(-1);w.shiftKey&&document.activeElement===E?(w.preventDefault(),x?.focus()):!w.shiftKey&&document.activeElement===x&&(w.preventDefault(),E?.focus())}}}const C=b?"dialog":"aside";return n.createElement(C,{ref:v,id:"analysis-settings",className:"field-sidebar","aria-label":i,onCancel:w=>{w.preventDefault(),p()},onKeyDown:_,onClick:w=>{if(!b||w.target!==w.currentTarget)return;const g=w.currentTarget.getBoundingClientRect();(w.clientX<g.left||w.clientX>g.right||w.clientY>g.bottom)&&p()}},e&&n.createElement("div",{"data-os-loc":"src/field/WorkbenchSettings.jsx:42:13",className:"demo-settings-header"},n.createElement("button",{"data-os-loc":"src/field/WorkbenchSettings.jsx:42:51","data-os-action":"",ref:u,className:"demo-close-settings",onClick:p},o)),d)}function et(e,a,t="application/json"){const s=URL.createObjectURL(new Blob([a],{type:t})),i=document.createElement("a");i.href=s,i.download=e,i.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function L1(e){if(!e?.dimensions||!e.axisSteps)return null;const a=[];for(let t=0;t<8;t++)a.push(e.origin.map((s,i)=>s+e.dimensions.reduce((o,r,c)=>o+(t>>c&1)*(r-1)*e.axisSteps[c][i],0)));return{min:[0,1,2].map(t=>Math.min(...a.map(s=>s[t]))),max:[0,1,2].map(t=>Math.max(...a.map(s=>s[t])))}}function q1({focusedLayout:e=!1,workspace:a="3d",onWorkspace:t=()=>{},evaluation:s=null,evaluationError:i="",unifiedRestore:o=!1,onCancelImport:r,onRetryEvaluation:c,comparison:d,processing:l,activeGroup:m,onActiveGroup:b,setup:v,expectedFrames:u,metricsOverride:h,sourceCase:f,viewApiRef:p,initialView:_,onViewReady:C,onViewRestored:w,restoring:g=!1,frameSplit:E=d.frameSplit,readOnly:x=!1,active:S=!0}){const{tr:B,language:A}=ue(),y=A==="zh",M=e,k=M?"3d":"time",[I,F]=j.useState(null),V=j.useRef(null),K=j.useRef(0),W=!!I&&a==="slices",G=!!I?.comparison&&a==="slices",ae={caseId:f?.id,runId:s?.runId},[T,N]=j.useState(null),[ne,Y]=j.useState("");j.useEffect(()=>{if(!s||f?.id!=="best-1027")return;function P(Q){if(Q?.page!=="field"||!Q.hotspotReview||!["height","slices"].includes(Q.section))return;const{surface:me,velocity:Ee}=Q.hotspotReview;try{if(me?.run!==s.runId||!s.frameIds.includes(me.frame))throw Error();if(Q.section==="slices"){const{request:on,view:Ue}=Wo(JSON.stringify(Ee),ae);if(on.frame!==me.frame||on.hotspotXZ.x!==me.x||on.hotspotXZ.z!==me.z)throw Error();F({request:on,markView:Ue,surface:me,key:++K.current})}te.current?.pause(),vn(me.frame),N(me),Y("")}catch{Y(y?"批注与当前数据不匹配。":"The annotation does not match this dataset.")}}const se=Q=>P(Q.detail);return P(ft()),window.addEventListener("oceanscope-hotspot-mark",se),()=>window.removeEventListener("oceanscope-hotspot-mark",se)},[s,f?.id]);function ee(P,se=null,Q=null){te.current?.pause(),We(!1),F({request:P,restored:se,surface:Q,key:++K.current}),t?.("slices")}function O(P=null){te.current?.pause(),We(!1),F({comparison:!0,restored:P,key:++K.current}),t("slices")}j.useEffect(()=>{if(!M||a!=="3d")return;const P=()=>{window.location.hash==="#analysis-summary"&&document.getElementById("analysis-summary")?.scrollIntoView({block:"start"})};return P(),window.addEventListener("hashchange",P),()=>window.removeEventListener("hashchange",P)},[M,a,s]);const Z=_?.settings,ie=j.useRef(null),te=j.useRef(null),z=j.useRef(!1),[q,re]=j.useState(""),fe=e&&d.id==="best-1027",we=!!f&&d.id!=="best-1027",{presenting:Ae}=Nr(),[Ie,Xe]=j.useState(()=>({presenting:Ae,open:!Ae&&!globalThis.matchMedia?.("(max-width:900px)").matches})),Ve=Ie.presenting===Ae&&Ie.open;function We(P){Xe(se=>({presenting:Ae,open:typeof P=="function"?P(se.presenting===Ae&&se.open):P}))}j.useEffect(()=>{e&&te.current?.pause()},[a]);const $e=j.useRef(null),[R,$]=j.useState(!0),U=j.useRef(null),[D,H]=j.useState({subset:"all",metric:"height",grid:"coarse"}),[X,oe]=j.useState(null),[Se,je]=j.useState(null),[Oe,J]=j.useState(0),[L,ce]=j.useState(Z?.shading||"original");j.useEffect(()=>{Ae&&te.current?.pause()},[Ae]);const[de,Pe]=j.useState(null),[qe,xn]=j.useState(Z?.errorScale||{locked:!1,limit:1}),Ge=j.useRef(null),cn=b0(d);function Gn(){Ge.current&&(Ge.current.open=!0,Ge.current.scrollIntoView?.({block:"start"}))}const Je=JSON.stringify(l?.lattice??null),ke=j.useMemo(()=>JSON.parse(Je),[Je]),ln=j.useMemo(()=>l?.frames?.map(P=>P.frame)||[],[l?.frames]),dn=j.useMemo(()=>ja(f),[f]),Re=j.useMemo(()=>m==="sdf"&&dn.length?dn:ln,[m,dn,ln]),Zn=s?.frameIds??Re,[le,vn]=j.useState(Z?.frame??(fe?1049:null)),[he,Ra]=j.useState(null),[oa,Ia]=j.useState(null),[Nn,Na]=j.useState(""),[fn,ra]=j.useState(!1),[Ye,Fa]=j.useState(()=>{if(Z)return Z.mode;const P=x?"split":ts("field-view")?.mode;return["split","overlay","wire-overlay","gt","prediction"].includes(P)?P:"split"}),[En,Vs]=j.useState(Z?.quality??"balanced"),[Fn,Ws]=j.useState(Z?.component??"magnitude"),[$s,r2]=j.useState(.65),[Hn,Xs]=j.useState(Z?.showContext??!1),[Ln,Gs]=j.useState(Z?.vectorDensity??2e3),[qn,Zs]=j.useState(Z?.arrowScale??1),[ca,Hs]=j.useState(Z?.glyphMode??"direction"),[At,Ls]=j.useState(Z?.overlayStyle??"errors"),[pe,kt]=j.useState(Z?.plane??(fe?"yz":"xz")),[tr,la]=j.useState(Z?.sliceIndex??null),[Mt,qs]=j.useState(Z?.crosshair||[.5,.5]),[Yn,Ys]=j.useState(!!Z?.sourceRange),[Bn,Us]=j.useState(Z?.sourceRange||[0,1]),[tn,Js]=j.useState(Z?.rotationAxis||"y"),[Ke,Ks]=j.useState(Z?.angle??30),[Qe,Pt]=j.useState(Z?.sectionPercent??50),[da,Qs]=j.useState(Z?.showPlane??!0),[ei,sr]=j.useState(null),[sn,Rt]=j.useState(Z?{showGt:Z.showGt,showPrediction:Z.showPrediction,gtOpacity:Z.gtOpacity,predictionOpacity:Z.predictionOpacity}:{showGt:!0,showPrediction:!0,gtOpacity:.65,predictionOpacity:.8}),[ir,ni]=j.useState(""),On=j.useRef(null),Un=j.useRef(0),Oa=j.useRef(Re);Oa.current=Re;const ge=!!d?.settings?.previewOnly,Tn=m==="sdf"&&dn.includes(le)&&!ln.includes(le);j.useEffect(()=>(On.current={frames:ad({fetchFrame:(P,se,Q)=>cd(P,se,{...Q,withIdentity:!0}),decode:_o}),geometry:td(),surface:vr()},()=>{Un.current++,On.current?.frames.dispose(),On.current?.geometry.dispose(),On.current?.surface.dispose(),On.current=null}),[d.id]),j.useEffect(()=>{Ra(null),Ia(null),vn(Z?.frame??(fe?1049:null)),$(!0),Na("")},[d.id]),j.useEffect(()=>{if(Zn.length&&!Zn.includes(le)){const P=x?null:ts("field-view");vn(P?.comparisonId===d.id&&Re.includes(P.frame)?P.frame:Re[0])}},[Re,Zn,le,d.id,x]),j.useEffect(()=>{!x&&le!=null&&uo("field-view",{mode:Ye,comparisonId:d.id,frame:le})},[Ye,le,d.id,x]),j.useEffect(()=>{let P=!0;if(x||h){Ia(h??null);return}return ld(d.id).then(se=>{P&&Ia(se)}).catch(se=>{P&&(Ia(null),Na(se.message))}),()=>{P=!1}},[d.id,Re.length,d.status,h,x]);const Ta=he?ya(he.snapshot.data,m):null,Da=he?.snapshot.data.fields.find(P=>P.id===(Ta?.groundTruth?.ids[0]||Ta?.prediction?.ids[0]))?.shape||ke?.dimensions,mn=Da?Da[pe==="yz"?0:pe==="xz"?1:2]-1:0,Ze=Math.max(0,Math.min(tr??Math.floor(mn/2),mn)),ai=j.useMemo(()=>({group:m,mode:ge?"gt":Ye,overlayStyle:At,quality:En,component:Fn,opacity:$s,showContext:Hn,vectorDensity:Ln,arrowScale:qn,glyphMode:ca,plane:pe,sliceIndex:Ze,angle:Ke,sectionPercent:Qe,rotationAxis:tn,showPlane:da,sourceRange:Yn&&Bn[1]>Bn[0]?Bn:null,unit:Ta?.unit}),[m,Ye,ge,At,En,Fn,$s,Hn,Ln,qn,ca,pe,Ze,Ke,Qe,tn,da,Yn,Bn,Ta?.unit]),An=j.useMemo(()=>({group:m,quality:En,component:Fn,showContext:Hn,vectorDensity:Ln,arrowScale:qn,glyphMode:ca,plane:pe,sliceIndex:Ze,angle:Ke,sectionPercent:Qe,rotationAxis:tn,previewOnly:ge}),[m,En,Fn,Hn,Ln,qn,ca,pe,Ze,Ke,Qe,tn,ge]),kn=JSON.stringify([d.id,le,An,Oe]);j.useEffect(()=>{const P=On.current;if(!P||le==null)return;const se=++Un.current;let Q=!0;if(Na(""),!R||!Re.includes(le)){Ra(null),ra(!1);return}return ra(!0),je({key:kn,status:"loading"}),(async()=>{try{if(Tn){const Ue=await P.surface.select(f,le,En);if(!Ue||!Q||se!==Un.current)return;const Dn=Er(Ue.geometry,ke,An),Wa={comparisonId:d.id,frameNumber:le,data:{fields:[],groups:{}},verifiedResource:Ue.verifiedResource};Ra({snapshot:Wa,geometry:Dn,settings:An}),je({key:kn,status:"ready"}),ra(!1),ni(`${(P.surface.stats().bytes/1048576).toFixed(0)} MiB surface cache`);return}const me=await P.frames.select(d.id,le);if(!me||!Q||se!==Un.current)return;let Ee;try{Ee=await P.geometry.request(me,ke,An)}catch(Ue){Ee={failed:!0,layers:[],warnings:[`3D preparation unavailable: ${Ue.message}. Use slices below.`],byteLength:0}}if(!Ee||!Q||se!==Un.current)return;Ra({snapshot:me,geometry:Ee,settings:An}),je({key:kn,status:"ready"}),ra(!1);const on=P.frames.stats();if(ni(on.oversize?"Active frame exceeds preview cache budget":`${(on.bytes/1048576).toFixed(0)} MiB decoded cache`),!e){const Ue=Oa.current.indexOf(le);P.frames.prefetch(d.id,[Oa.current[Ue+1],Oa.current[Ue-1]].filter(Dn=>Dn!=null))}}catch(me){Q&&se===Un.current&&(Na(me.message),je({key:kn,status:"error",error:me.message}),ra(!1))}})(),()=>{Q=!1}},[d.id,le,An,ke,Re,Oe,kn,R,Tn,f,En]),j.useEffect(()=>{Nn&&te.current?.pause()},[Nn]);const or=j.useMemo(()=>L1(l?.lattice),[l?.lattice]);j.useEffect(()=>{const P=se=>{const Q=se.detail;S&&Q?.page==="field"&&Q.caseId===d.id&&Zn.includes(Q.frame)&&(Q.accept(),za(Q.frame))};return window.addEventListener("oceanscope-annotation-frame",P),()=>window.removeEventListener("oceanscope-annotation-frame",P)});const It=j.useCallback(P=>vn(P),[]),Ne=he?.snapshot.frameNumber,fa=Ne==null?null:oa?.frames?.[String(Ne)],za=j.useCallback(P=>{te.current?.pause(),m==="velocity"&&!ln.includes(P)&&b("sdf"),vn(P)},[m,ln,b]),en=JSON.stringify([d.id,le,m,Fn,pe,Ze,Ke,Qe,tn]),[ti,Nt]=j.useState(()=>({context:en,range:Z?.region??null})),si=j.useRef(en);j.useEffect(()=>{si.current!==en&&(si.current=en,Nt({context:en,range:null}))},[en]);const Ft=ti.context===en?ti.range:null;function rr(P){te.current?.pause(),Nt({context:en,range:P})}function cr(P){te.current?.pause(),qs(P)}const nn=he?.settings.group||m,ma=he?ya(he.snapshot.data,nn):null,ye={shading:L,...ai,...he?.settings,...sn,unit:ma?.unit},bn=Se?.key===kn&&Se.status==="ready"&&!fn&&!Nn&&!q&&!!ei&&he?.snapshot.frameNumber===le&&he?.settings===An&&!he?.geometry.failed;j.useEffect(()=>{C?.(bn&&!g)},[bn,g,C]),j.useEffect(()=>{if(!(!_||z.current)){if(Nn||q||he?.geometry.failed){z.current=!0,w?.(Error("load"));return}if(bn){z.current=!0;try{ii(_),te.current.pause(),w?.(null)}catch(P){w?.(P)}}}},[_,bn,Nn,q,he,w]);function ii(P){const se=ie.current;P.settings.glyphFocusIndex==null?se.restoreCamera(P.camera):se.restoreCamera(P.camera,P.settings.glyphFocusIndex)}function oi(){if(!bn||g||!f||Yn&&!(Bn[1]>Bn[0]))throw Error("settings");te.current.pause();const P=ie.current.getFocusIndex?.();return In({schema:pt,name:`${f.id} · ${m.toUpperCase()} · ${Ne} · ${pe==="oblique"?tn.toUpperCase()+" "+Ke+"°":pe.toUpperCase()}`,sourceSignature:Ro(f),settings:{...Tn?{representation:Ea}:{},shading:L,caseId:f.id,frame:Ne,group:m,mode:ge?"gt":Ye,quality:En,component:Fn,plane:pe,sliceIndex:Ze,angle:Ke,sectionPercent:Qe,rotationAxis:tn,showPlane:da,showContext:Hn,...sn,showPrediction:ge?!1:sn.showPrediction,vectorDensity:Ln,arrowScale:qn,...m==="velocity"&&!ge?{glyphMode:ca,...Ye==="overlay"?{overlayStyle:At}:{},...P!=null?{glyphFocusIndex:P}:{}}:{},sourceRange:Yn?Bn:null,errorScale:qe,crosshair:Mt,region:ge?null:Ft,playback:te.current.getSettings()},camera:ie.current.getCamera()},[f])}j.useImperativeHandle(p,()=>({pause(){te.current?.pause()},captureView:oi,async restoreAnalysis(P,se,Q){if(Q.throwIfAborted(),!s)throw Error("Reference analysis is not ready for this dataset");if(se==="pairedCase"){if(!V.current)throw Error("One-page case unavailable for this dataset");return V.current.restore(P,Q)}if(se==="velocityComparison"){const Ee=await $1(P,ae,Q);Q.throwIfAborted(),O(Ee);return}if(se==="velocity"){const Ee=await $o(P,{caseId:f?.id,runId:s.runId},Q);Q.throwIfAborted(),vn(Ee.request.frame),ee(Ee.request,Ee);return}if(se==="report"){if(!U.current?.restoreText)throw Error("Analysis is not ready");return U.current.restoreText(P,Q)}const me=co(P,s);Q.throwIfAborted(),te.current?.pause(),U.current?.clearSnapshot(),H(Ee=>({...Ee,subset:me.subset,metric:me.metric})),vn(me.frame)}}));function lr(){te.current?.pause();let P=null,se=null,Q=null,me="No 3D preview for this frame";if(Re.includes(le)){me=Nn||q||(he?.geometry.failed?"3D preparation failed":fn?"3D preview is loading":"3D preview is not ready or not verified");try{const Ee=Tn?oo(f,le,En):vs(f,le);bn&&Ee&&JSON.stringify(he.snapshot.verifiedResource)===JSON.stringify(Ee)&&(P=oi(),Q=ie.current.capture(),se=Ee,me=Tn?"Exact-frame native SDF surface bytes verified; no volume samples":"Exact-frame preview bytes verified")}catch(Ee){P=null,se=null,Q=null,me=Ee.message}}return{view:{frame:le,plane:pe,sliceIndex:Ze,rotationAxis:tn,angle:Ke,sectionPercent:Qe,selection:D,geometry:P,geometryResource:se,geometryStatus:{status:P?"included":"unavailable",reason:me}},scene:Q}}function dr(P,se){if(se.throwIfAborted(),te.current?.pause(),vn(P.frame),kt(P.plane),la(P.sliceIndex),Js(P.rotationAxis),Ks(P.angle),Pt(P.sectionPercent),H(P.selection),J(me=>me+1),!P.geometry)return Promise.resolve();$(!0);const Q=P.geometry.settings;return b(Q.group),Fa(Q.mode),Vs(Q.quality),Ws(Q.component),ce(Q.shading),Xs(Q.showContext),Gs(Q.vectorDensity),Zs(Q.arrowScale),Hs(Q.glyphMode??"direction"),Ls(Q.overlayStyle??"errors"),Qs(Q.showPlane),Rt({showGt:Q.showGt,showPrediction:Q.showPrediction,gtOpacity:Q.gtOpacity,predictionOpacity:Q.predictionOpacity}),Ys(!!Q.sourceRange),Us(Q.sourceRange??[0,1]),xn(Q.errorScale),qs(Q.crosshair),new Promise((me,Ee)=>{const on=setTimeout(()=>Dn(Error("Timed out loading the report view; retry the geometry download")),3e4),Ue=()=>Dn(Error("Report restore cancelled"));function Dn(Wa){clearTimeout(on),se.removeEventListener("abort",Ue),oe(null),Wa?Ee(Wa):me()}se.addEventListener("abort",Ue,{once:!0}),oe({view:P,signal:se,finish:Dn})})}j.useEffect(()=>{if(!(!X||X.signal.aborted)&&!(le!==X.view.frame||Se?.key!==kn||Se.status==="loading")){if(Se.error||q||he?.geometry.failed){X.finish(Error(Se.error||q||"Geometry unavailable"));return}if(bn){if(JSON.stringify(he.snapshot.verifiedResource)!==JSON.stringify(X.view.geometryResource)){X.finish(Error("Report preview resource identity mismatch"));return}try{ii(X.view.geometry),te.current?.restoreSettings(X.view.geometry.settings.playback),Nt({context:en,range:X.view.geometry.settings.region??null}),X.finish()}catch(P){X.finish(P)}}}},[X,bn,le,Se,kn,q,he]);const fr=gc({sourceCase:f,comparison:d,processing:l,snapshot:he?.snapshot,geometry:he?.geometry,settings:ye,metrics:oa}),mr=he?.snapshot.data.fields.find(P=>P.id===(ma?.groundTruth?.ids[0]||ma?.prediction?.ids[0])),ri=l?.lattice&&pe!=="oblique"?fd(l.lattice,pe,Ze):null,Ot={shading:nn==="sdf"?L:"not_applicable",comparison_id:d.id,dataset_a:d.groundTruthId||d.labels?.gt?.displayName||"Ground Truth",dataset_b:ge?"":d.predictionId||d.labels?.prediction?.displayName||"Prediction",frame:Ne,group:nn,component:ye.component,plane:ye.plane,mode:ye.mode,camera:ei,gt_opacity:sn.gtOpacity,prediction_opacity:sn.predictionOpacity,preview_quality:ye.quality,show_plane:da,gt_visible:sn.showGt,prediction_visible:sn.showPrediction,value_unit:ma?.unit||"undeclared",coordinate_unit:"source_grid_units",lattice_origin:ke?.origin,lattice_axis_steps:ke?.axisSteps,dimensions:ke?.dimensions,...ye.plane==="oblique"?_r(Es(ke,ye.angle,ye.sectionPercent,ye.rotationAxis)):{slice_index:ye.sliceIndex,angle_degrees:ye.plane==="xy"?0:ye.plane==="yz"?90:null,sampling:"native_voxel_layer"},section_percent:ye.plane==="oblique"?ye.sectionPercent:Wt(ye.sliceIndex,0,(ke?.dimensions?.[ye.plane==="xy"?2:ye.plane==="yz"?0:1]||1)-1),crosshair_normalized:Mt,local_region:Ft,saved_metrics_scope:"precomputed_original_support_not_current_slice"},br=n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:248:25",id:"analysis-height",hidden:e&&!["height","report"].includes(a)},s&&le!=null&&n.createElement(j1,{reviewRequest:T,onReviewApplied:()=>N(null),viewMode:e?a==="report"?"report":"height":"all",unifiedRestore:o,bundle:s,frame:le,plane:pe,sliceIndex:Ze,rotationAxis:tn,angle:Ke,sectionPercent:Qe,getReportView:lr,onRestoreReportView:dr,reportControlRef:U,onDownload:et,catalog:[f],reportContext:JSON.stringify([en,D]),onPause:()=>te.current?.pause(),onOpenVelocity:ct(ae)?ee:void 0})),ci=n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:27",hidden:e&&a!==k,id:"analysis-summary",className:M?"demo-integrated-time":void 0},M&&s&&n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:201",className:"demo-time-heading"},n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:236"},n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:241"},y?"时间分析":"Time analysis"),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:277"},y?"查看误差随帧号的变化；点击曲线上的点，同步切换上方三维画面。":"Inspect errors across frames. Select a curve point to update the 3D view above.")),n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:409",href:"#analysis-spatial"},y?"返回三维画面 ↑":"Back to 3D ↑")),s&&n.createElement(k0,{displayGeometryFrames:dn.length?dn:ln,unifiedRestore:o,bundle:s,frame:le,onFrame:za,onDownload:et,reportSelection:D,onReportSelection:H}));function Va(){U.current?.cancel(),r?.()}return n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:251:10","data-review-case":d.id,"data-review-frame":Ne,className:`field-workbench v2-field${e?` demo-field ${we?"demo-nonreference":""} demo-panel-${a} ${Ve?"settings-open":""}`:""}`,inert:g||void 0,onPointerDownCapture:Va,onKeyDownCapture:Va,onChangeCapture:Va,onWheelCapture:Va},n.createElement(H1,{enabled:e,forceModal:Ae,open:Ve,active:S&&!W&&["3d","height","slices"].includes(a),returnFocusRef:$e,onClose:()=>We(!1),label:y?"视图设置":"View settings",closeLabel:y?"关闭设置":"Close settings"},n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:252:314",ref:Ge,className:"field-setup",open:!d},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:252:385"},x?y?"已发布数据详情":"Published dataset details":B("Datasets & comparison setup")),v),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:253:7",hidden:e&&a==="height"},n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:253:57"},B("Display controls")),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:253:90",className:"field-tabs compact"},["sdf","velocity"].map(P=>n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:253:156","data-os-action":"",key:P,"aria-label":P==="sdf"?"SDF":"Velocity",disabled:!d.availableGroups.includes(P)||P==="velocity"&&!ln.includes(le),"aria-pressed":m===P,onClick:()=>b(P)},B(P==="sdf"?"SDF":"Velocity"),!d.availableGroups.includes(P)&&n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:253:478"},B("Not available"))))),!ge&&n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:254:17",className:"v2-primary-modes",role:"group","aria-label":y?"主要显示模式":"Primary display mode"},n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:254:112","data-os-action":"","aria-pressed":Ye==="split",onClick:()=>Fa("split")},y?"并排":"Side by side"),n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:254:214","data-os-action":"","aria-pressed":Ye==="overlay",onClick:()=>Fa("overlay")},y?"叠加":"Overlay")),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:255:7",className:"v2-mode-caption"},ge?y?"单组查看 · 不显示误差":"Single dataset · no error scores":m==="velocity"&&Ye==="overlay"?y?"同一格点比较 · 点选查看两侧速度":"Compare at the same cell · select to inspect both velocities":m==="velocity"&&Ye==="split"?y?"并排 · 共享色标与箭长比例":"Linked panes · shared color and length scales":["split","overlay"].includes(Ye)?y?"A / GT 蓝色 · B / Prediction 橙色":"A / GT blue · B / Prediction orange":y?"正在使用高级显示模式":"Advanced display mode active")),n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:256:13"},B("Cross section")),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:256:43"},B("Plane"),n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:256:63","data-os-action":"","aria-label":B("Slice plane"),value:pe,onChange:P=>{kt(P.target.value),la(null)}},["xy","xz","yz"].map(P=>n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:256:197",key:P,value:P},P.toUpperCase()," · ",y?"固定":"fixed"," ",P==="xy"?"Z":P==="xz"?"Y":"X")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:256:303",value:"oblique",disabled:!as(ke)},y?"斜切 · X / Y / Z 旋转":"Oblique · X / Y / Z rotation"))),pe==="oblique"&&n.createElement(yc,{value:tn,onChange:P=>{te.current?.pause(),Js(P)}}),pe==="oblique"&&n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:258:27",className:"v2-position"},y?"切面角度":"Section angle"," ",n.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:258:86"},Ke,"°"),n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:258:111","data-os-action":"","aria-label":y?"场切面角度":"Field section angle",type:"range",min:"0",max:"180",step:"1",value:Ke,onChange:P=>Ks(+P.target.value)}),n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:258:259"},y?"只旋转切面，相机不变；切面与探针同步。":"Rotates the section, not the camera; probes remain synchronized.")),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:259:7",className:"v2-position"},y?"切片位置":"Section position"," ",n.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:259:69"},(pe==="oblique"?Qe:Wt(Ze,0,mn)).toFixed(1),"%"),n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:259:176","data-os-action":"","aria-label":y?"场切片位置百分比":"Field section position percent","aria-valuetext":`${(pe==="oblique"?Qe:Wt(Ze,0,mn)).toFixed(1)}%`,type:"range",min:"0",max:pe==="oblique"?100:mn,step:pe==="oblique"?.1:1,disabled:!Da||mn===0,value:pe==="oblique"?Qe:Ze,onChange:P=>pe==="oblique"?Pt(+P.target.value):la(+P.target.value)})),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:260:7",className:"v2-range-labels"},n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:260:40"},"0%"),n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:260:55"},"100%")),n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:260:78"},pe==="oblique"?y?"三线性取样：参与插值的邻点必须全部有效，缺失处留空。":"Trilinear sampling: all contributing neighbours must be valid; missing support stays empty.":y?"按原始体素层移动，切面与下方探针同步。":"Snaps to original voxel layers; synchronized with slices and probe."),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:7",className:"check"},n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:32","data-os-action":"",type:"checkbox",checked:da,onChange:P=>Qs(P.target.checked)}),y?"显示半透明切面":"Show translucent section plane"),n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:262:7",hidden:e&&a==="height",className:"v2-advanced"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:262:85"},y?"显示、单位与网格详情":"Display, units & grid details"),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:263:7"},pe==="oblique"?`${y?"斜切角度":"Oblique angle"} ${tn.toUpperCase()} ${Ke}°`:`${B("Slice ")}${Ze} / ${mn}`,n.createElement("br",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:263:148"}),B("World: "),ri?ri.map(P=>P.toFixed(3)).join(", "):"—",n.createElement("br",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:263:223"}),y?"原始网格坐标；单位见数据来源声明。":"Source-grid coordinates; see the source unit declaration."),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:7"},B("3D display mode"),n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:37","data-os-action":"","aria-label":B("3D display mode"),value:ge?"gt":Ye,disabled:ge,onChange:P=>Fa(P.target.value)},n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:161",value:"split"},B("Side by side · linked")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:221",value:"wire-overlay"},B("Solid + X-ray wireframe · overlap safe")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:305",value:"overlay"},B("Transparent overlay · blue / orange")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:381",value:"gt"},B("Ground Truth only")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:434",value:"prediction"},B("Prediction only")))),Ye==="wire-overlay"&&!ge&&n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:265:40",className:"field-mode-help"},B("Blue: GT surface. Orange: Prediction wireframe, visible through GT. Geometry and scores are unchanged.")),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:266:7"},B("Preview quality"),n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:266:37","data-os-action":"",value:En,onChange:P=>Vs(P.target.value)},n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:266:102",value:"balanced"},B("Balanced · stride 2")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:266:163",value:"fine"},B("Fine · stride 1")))),n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:266:233"},B("Display only. Metrics retain the comparison lattice.")),n.createElement("fieldset",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:7",className:"field-layer-controls"},n.createElement("legend",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:50"},B("Visible layers")),[["Gt","Ground Truth","gtOpacity"],...ge?[]:[["Prediction","Prediction","predictionOpacity"]]].map(([P,se,Q])=>n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:217",key:P,className:"field-layer-row"},n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:260",className:"check"},n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:285","data-os-action":"",type:"checkbox",checked:sn[`show${P}`],onChange:me=>Rt(Ee=>({...Ee,[`show${P}`]:me.target.checked}))}),n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:409",className:`field-layer-dot ${P==="Gt"?"gt":"prediction"}`}),B(se)),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:497"},B(se),B(" opacity "),n.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:532"},Math.round(sn[Q]*100),"%"),n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:267:581","data-os-action":"","aria-label":`${se} opacity`,type:"range",min:".1",max:"1",step:".05",value:sn[Q],disabled:!sn[`show${P}`],onChange:me=>Rt(Ee=>({...Ee,[Q]:Number(me.target.value)}))}))))),m==="velocity"&&n.createElement(n.Fragment,null,n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:268:36"},B("Velocity display"),n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:268:67","data-os-action":"",value:Fn,onChange:P=>Ws(P.target.value)},["magnitude","x","y","z"].map(P=>n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:268:170",key:P,value:P},P==="magnitude"?ge?"Magnitude":B("Magnitude / EPE"):P.toUpperCase())))),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:268:300"},B("Vector count limit"),n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:268:333","data-os-action":"",type:"number",min:"1",max:"20000",value:Ln,onChange:P=>Gs(Math.max(1,Math.min(2e4,Number(P.target.value)||1)))})),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:268:479"},B("Arrow scale"),n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:268:505","data-os-action":"",type:"number",min:".001",step:".1",value:qn,onChange:P=>Zs(Math.max(.001,Number(P.target.value)||1))})),d.availableGroups.includes("sdf")&&n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:268:690",className:"check"},n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:268:715","data-os-action":"",type:"checkbox",checked:Hn,onChange:P=>Xs(P.target.checked)}),B(" Show SDF context"))),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:7",className:"check"},n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:32","data-os-action":"",type:"checkbox",checked:Yn,onChange:P=>Ys(P.target.checked)}),B(" Fixed source color range")),Yn&&n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:162",className:"row"},Bn.map((P,se)=>n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:202","data-os-action":"",key:se,"aria-label":se?"Color maximum":"Color minimum",type:"number",value:P,step:".01",onChange:Q=>Us(me=>me.map((Ee,on)=>on===se?Number(Q.target.value):Ee))}))),x&&ge?n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:270:25",className:"alignment-report"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:270:63"},"Grid and provenance"),n.createElement("dl",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:270:101"},n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:270:105"},n.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:270:110"},"Canonical lattice"),n.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:270:136"},ke?.dimensions?.join(" × ")," voxels")),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:270:192"},n.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:270:197"},"Voxel size"),n.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:270:216"},ke?.voxelSize?.join(" × ")||"See source declaration")),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:270:290"},n.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:270:295"},"Source"),n.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:270:310"},"Simulation Ground Truth. No prediction alignment or error comparison.")))):n.createElement(m0,{lattice:l?.lattice,comparison:d}))),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:5",className:"field-center"},ne&&n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:47",role:"alert"},ne),i&&n.createElement(Cn,{error:i,zh:y,resource:y?"序列评估资源":"Sequence evaluation resources",onRetry:c}),n.createElement(Cn,{error:Nn,zh:y,resource:(y?"当前帧三维资源：":"Current-frame geometry: ")+le,onRetry:()=>J(P=>P+1)}),(s||e)&&n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:399",className:"analysis-toolbar","aria-label":y?"分析导航":"Analysis navigation"},n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:478",hidden:G},y?"当前帧":"Current frame"," ",n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:546","data-os-action":"","aria-label":"Analysis frame",value:le??Zn[0],onChange:P=>za(Number(P.target.value))},Zn.map(P=>n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:699",key:P,value:P},P,dn.includes(P)||ln.includes(P)?" · 3D":"")))),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:820",hidden:W},y?"截面":"Section"," ",n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:871","data-os-action":"","aria-label":"Analysis section",value:pe,onChange:P=>{kt(P.target.value),la(null)}},["xy","xz","yz"].map(P=>n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:1004",key:P,value:P},P.toUpperCase())),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:1058",value:"oblique",disabled:!as(ke)},y?"斜切":"Oblique"))),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:1164",hidden:W},pe==="oblique"?y?"位置 %":"Position %":y?"切片索引":"Slice index"," ",n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:1266","data-os-action":"","aria-label":"Analysis section position",type:"number",min:"0",max:pe==="oblique"?100:mn,step:pe==="oblique"?.1:1,disabled:!Da||mn===0,value:pe==="oblique"?Qe:Ze,onChange:P=>{const se=Number(P.target.value);Number.isFinite(se)&&(pe==="oblique"?Pt(Math.max(0,Math.min(100,se))):la(Math.max(0,Math.min(mn,Math.round(se)))))}})),n.createElement("nav",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:1699",hidden:e,"aria-label":y?"分析区域":"Analysis sections"},n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:1770",href:"#analysis-spatial"},y?"三维视图":"3D view"),n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:1823",href:"#analysis-height"},y?"高度与选区":"Height & ROI"),n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:1881",href:"#analysis-slices"},y?"场切片":"Field slices"),n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:1937",href:"#analysis-summary"},y?"序列统计":"Sequence metrics")),e&&!W&&["3d","height","slices"].includes(a)&&n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:2084","data-os-action":"",ref:$e,className:"demo-settings-toggle","aria-controls":"analysis-settings","aria-expanded":Ve,onClick:()=>We(P=>!P)},y?"视图设置":"View settings"),e&&!G&&n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:2326",className:"demo-frame-scope"},Re.includes(le)?y?"当前帧支持三维":"3D available for this frame":y?"当前帧仅高度与序列数据":"Height and sequence data for this frame")),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:274:7",className:"demo-geometry-panel",hidden:e&&a!=="3d"},Tn&&n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:274:99",className:"demo-surface-scope"},y?"原生 SDF 三维表面 · 支持精细／均衡显示；高度与 ROI 使用同一帧。体积场与速度切片另有覆盖范围。":"Native SDF 3D surface · Fine / Balanced display; same-frame height and ROI. Volume and velocity slices have separate coverage."),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:275:7",id:"analysis-spatial",className:"v2-section-heading"},!e&&n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:275:82"},"01"),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:275:98"},n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:275:103"},y?"3D 空间分析":"3D spatial analysis"),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:275:148"},ge?y?"选择当前帧，查看三维场与同一位置的切片。":"Choose a frame and inspect its 3D field and synchronized slice.":y?"选择当前帧，比较三维形状与同一位置的场切片。":"Choose a frame and compare geometry and field values at the same section.")),M&&s&&n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:275:400",className:"demo-time-jump",href:"#analysis-summary"},y?"查看时间分析 ↓":"View time analysis ↓")),s&&le!=null&&!Re.includes(le)?n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:276:65",role:"status",className:"reference-scope"},y?`帧 ${le} 无三维缓存。仍可查看此帧的高度图和指标；未替换为邻帧。`:`Frame ${le} has no geometry cache. Height maps and metrics retain this exact frame.`,e&&n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:276:268","data-os-action":"",onClick:()=>t("height")},y?"查看此帧高度与 ROI":"View this frame’s height & ROI")):R?n.createElement(Fd,{onOverlayStyle:Ls,velocityVolume:he?.snapshot.data.groups?.velocity,onGlyphPickPause:()=>te.current?.pause(),onGlyphMode:Hs,onShading:ce,inspection:!fn&&de?.context===en?de.value:null,onSceneError:re,controlRef:ie,key:d.id,onCameraChange:sr,frameSplit:E,displayedFrame:Ne,labels:d.labels,geometry:he?.geometry,settings:ye,bounds:or,loadingFrame:fn?le:null,error:null}):n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:276:395",className:"demo-geometry-start"},n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:276:432"},y?"高度分析已可使用。三维视图每帧约25 MB，点击后加载。":"Height analysis is ready. The 3D view loads about 25 MB for the selected frame."),n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:276:556","data-os-action":"",type:"button",onClick:()=>$(!0)},y?"打开当前帧三维":"Open current frame in 3D")),R&&(!s||Re.includes(le))&&n.createElement(Od,{controlRef:te,initialPlayback:Z?.playback,active:S&&!g&&(!e||a==="3d"),frameSplit:E,frames:Re,displayedFrame:Ne,requestedFrame:le,status:d.status||"ready",loading:fn,onFrame:It,onScrubbing:P=>On.current?.frames.setScrubbing(P)})),M&&ci,ct(ae)&&["report","slices"].includes(a)&&n.createElement(nd,{zh:y}),s&&f?.id==="best-1027"&&n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:282:50",hidden:a!=="report"},n.createElement(U0,{control:V,bundle:s,catalog:[f],language:A,onReady:P=>{te.current?.pause(),vn(1049),P||t("report")}})),br,e&&we&&(ge&&["height","time"].includes(a)||a==="report")&&n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:287:110",className:"reference-scope"},a==="report"?y?"此样例没有96帧协议报告。可保存或恢复场比较方案；切片报告从“场切片”导出。":"This sample has no96-frame protocol report. Save or restore field views here; export slice reports from Field slices.":y?"此样例只有Ground Truth，无配对误差。请查看三维、场切片与探针。":"This sample contains Ground Truth only, without paired errors. Inspect3D, field slices and probes.",n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:287:475","data-os-action":"",onClick:()=>t("slices")},y?"查看场切片":"Open field slices")),n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:288:7",hidden:e&&a!==k,className:"analysis-source"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:288:98"},y?"数据与显示说明":"Data and display details"),n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:288:158",className:"field-saved-note"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:288:196"},ge?B("Single dataset preview — no comparison scores"):`Evaluation: ${Object.values(d.settings?.sdf||{}).some(P=>P?.semantics==="water_interior")?"conditional GT-water distance support":d.settings?.sdfEvaluationRegion==="gt_water"?"GT water only":"full domain"} · Saved settings`),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:288:518"},f?.metrics?.reconstructionEvaluation?y?"Best_1027 三帧本地参考结果。原生场指标、俯视高度指标和水下 0.1 m 速度指标使用各自明确的有效域；查看下方计算规则。":"Best_1027 three-frame local reference. Native-volume, top-down height and underwater 0.1 m metrics use separate documented supports; see the protocol below.":x?ge?"Ground Truth fields are shown for inspection. This example contains no prediction and has no error metrics.":"Precomputed results retain the original comparison settings and validity masks. Conditional GT-water distance scores describe their valid support only. Occupancy and surface metrics use separate validity rules; unsupported metrics remain N/A. This example is not a model-ranking benchmark. 3D and slices show the saved aligned fields.":B("Results use the saved comparison settings. Create a new comparison after changing declarations. Occupancy and surface metrics have separate validity rules. Original scores are not certified for model ranking; use Results Library common-support evaluation. 3D and slices show the original aligned fields."))),x&&n.createElement(xc,{context:fr,busy:fn})),n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:291:7",hidden:e&&a!==(we?"height":k),open:!s,className:"legacy-height-analysis"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:291:148"},s?y?"旧预览协议 · 三帧高度诊断":"Legacy preview protocol · three-frame height diagnosis":y?"高度诊断":"Height diagnosis"),f?.metrics?.reconstructionEvaluation&&n.createElement(y0,{protocol:f.metrics.reconstructionEvaluation,frame:he?.snapshot.data,lattice:ke,frameNumber:Ne,busy:fn||Ne!==le||nn!==m,onFrame:It}),!ge&&m==="sdf"&&n.createElement(u0,{frame:he?.snapshot.data,lattice:ke,comparison:d,plane:ye.plane,sliceIndex:ye.sliceIndex,rotationAxis:ye.rotationAxis,angle:ye.angle,sectionPercent:ye.sectionPercent,frameNumber:Ne,busy:fn||Ne!==le||nn!==m})),n.createElement("section",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:296:7",hidden:e&&a!=="slices",id:"analysis-slices",className:"field-slices"},ct(ae)&&!G&&n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:296:180","data-os-action":"",type:"button",onClick:()=>O()},y?"打开三帧速度对照":"Open three-frame velocity comparison"),I?n.createElement(n.Fragment,null,n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:296:324","data-os-action":"",onClick:()=>F(null)},y?"返回原场切片":"Back to original field slices"),I.comparison?n.createElement(Z1,{key:I.key,restored:I.restored}):n.createElement(N1,{surface:I.surface,markView:I.markView,key:I.key,frameNumber:le,request:I.request,restored:I.restored})):n.createElement(n.Fragment,null,n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:296:764"},B("Synchronized slices & probe")),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:296:808",className:"v2-mode-caption"},nn==="sdf"?ge?y?"GT 单场切片，不含比较误差。":"GT field slices only; no comparison errors.":y?"此处为 SDF 场差值（B−A），不等于水面高度差。":"This is the SDF field difference (B−A), not water-surface height error.":y?"速度场切片与探针；瞬时矢量不是粒子轨迹。":"Velocity slices and probes; instantaneous vectors are not particle paths."),Tn?n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:296:1166",className:"reference-scope"},n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:296:1199"},y?"本帧已提供真实三维表面、高度与 ROI；完整体积场切片仅发布了以下三帧。切换帧会明确改变当前帧号。":"This frame has its actual 3D surface, height and ROI. Full volume slices are published for the three frames below. Choosing one explicitly changes the frame."),ln.map(P=>n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:296:1443","data-os-action":"",key:P,onClick:()=>za(P)},P))):mr?n.createElement(Xd,{reportReady:bn&&!g,captureScene:()=>{if(!bn||g)throw Error(y?"等待当前帧与三维加载完成。":"Wait for the current frame and 3D.");return te.current?.pause(),ie.current.capture()},reportLabels:{a:d.labels?.gt?.displayName||"Ground Truth",b:d.labels?.prediction?.displayName||"Prediction"},savedMetrics:fa,region:ge?null:Ft,onRegion:rr,inspectionContext:en,onInspection:Pe,busy:fn||Ne!==le||he?.settings!==An,errorScale:qe,onErrorScale:xn,frameNumber:Ne,frameSplit:E,exportStem:cn,viewMetadata:Ot,rotationAxis:ye.rotationAxis,angle:ye.angle,sectionPercent:ye.sectionPercent,frame:he.snapshot.data,group:nn,plane:ye.plane,sliceIndex:ye.sliceIndex,crosshair:Mt,onCrosshair:cr,component:ye.component,fixedRange:ai.sourceRange,lattice:ke,single:ge,label:"Ground Truth"}):n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:296:2669",role:"status"},fn?`${B("Loading")} ${le}…`:B("No field samples available for this view.")))),!M&&ci,!ge&&n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:298:17",open:!e,hidden:e&&a!==k,className:"demo-legacy-sequence"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:298:135"},y?"旧预览协议 · 三帧序列诊断":"Legacy preview protocol · three-frame sequence diagnostics"),n.createElement("section",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:298:236",className:"v2-field-temporal","aria-label":y?"时间分析":"Temporal analysis"},n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:298:318",className:"v2-section-heading"},n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:298:354"},"02"),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:298:369"},n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:298:374"},y?"时间分析":"Temporal analysis"),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:298:414"},y?"保留逐帧绝对误差与序列统计。只能跳转到已有三维数据的帧。":"Absolute errors and sequence statistics. Frame navigation is available only where geometry exists."))),n.createElement(d0,{frameSplit:E,onReviewSetup:Gn,comparisonId:cn,frames:Re,expectedFrames:u,metrics:oa,groups:d.availableGroups,group:nn,status:d.status,currentFrame:Ne,onFrame:It,sdfUnit:ya(he?.snapshot.data,"sdf").unit||d.settings?.sdf?.gt?.unit||"unit undeclared",velocityUnit:ya(he?.snapshot.data,"velocity").unit||d.settings?.velocity?.gt?.unit||"unit undeclared"}))),n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:300:7",hidden:e,className:"field-memory"},ir,f?.metrics?.reconstructionEvaluation?y?" · 本地三帧数据 · 按需加载":" · Local three-frame data · Loaded on demand":x?" · Published samples · Geometry prepared in your browser":B(" · Geometry prepared off the UI thread · No cloud upload"))),n.createElement("aside",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:302:5",className:"field-results",hidden:e&&(!we||!["time","report"].includes(a))},s&&n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:302:131",className:"reference-scope"},y?"旧预览协议 · 三帧空间诊断":"Legacy preview protocol · three-frame spatial diagnostics"),n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:302:248"},B("Current frame "),n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:302:274"},Ne??"—")),ge?n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:302:312"},B("Single dataset preview — no comparison scores")):n.createElement(Zd,{frame:Ne,metrics:fa,group:nn,unit:ma?.unit||""}),!ge&&n.createElement(n.Fragment,null,n.createElement(f0,{group:nn}),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:303:56",className:"field-exports"},n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:303:87"},B("Export results")),n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:303:118","data-os-action":"",disabled:!oa,onClick:()=>et(`${cn}_metrics.json`,JSON.stringify({...oa,current_view:Ot},null,2))},B("Export JSON")),n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:303:296","data-os-action":"",disabled:!fa,onClick:()=>{const P=["metric,value",...Object.entries(Ot).map(([se,Q])=>[se,typeof Q=="object"?JSON.stringify(Q):String(Q??"")].map(me=>'"'+String(me).replaceAll('"','""')+'"').join(",")),`sdf_error_region,${fa?.sdf?.evaluationRegion||d.settings?.sdfEvaluationRegion||"full_domain"}`];for(const[se,Q]of Object.entries(fa?.[nn]||{}))(typeof Q=="number"||Q===null)&&P.push(`${se},${Q??""}`);et(`${cn}_${Ne}_${nn}.csv`,P.join(`
`),"text/csv")}},B("Export CSV")),n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:303:918"},x?"Download saved values: JSON includes all metric records; CSV describes the displayed frame.":B("JSON: sequence · CSV: displayed frame. Saved-result ZIP includes source names and complete provenance.")))),!ge&&n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:304:17"},B("All metric averages and per-frame values are below the synchronized slices. Use the SDF / Velocity tabs to switch field groups."))))}const Y1={kind:"field",parse:x0,read:v0,write:E0,validate:In,error:_0,title:e=>e?"场比较方案":"Saved field views",intro:e=>e?"保存样例、SDF/速度分量、帧、切面、探针、视角、色标、透明度、箭头与播放设置。恢复时重新读取数据并暂停播放；已有评分保持不变。":"Save sample, SDF/velocity component, frame, section, probe, camera, color scales, opacity, arrows and playback settings. Restore reloads data and pauses playback; saved scores are unchanged.",describe:(e,a)=>`${e.settings.caseId} · ${e.settings.group.toUpperCase()}${e.settings.group==="velocity"?" / "+e.settings.component:""} · ${a?"帧":"Frame"} ${e.settings.frame} · ${e.settings.plane==="oblique"?(e.settings.rotationAxis||"y").toUpperCase()+" "+e.settings.angle+"° / "+e.settings.sectionPercent+"%":e.settings.plane.toUpperCase()+" / "+e.settings.sliceIndex}`,storageNote:e=>e?"场方案与水面方案分开保存。仅保存在当前浏览器和网站地址；清除网站数据会丢失，请导出备份。导入文件仅在本机读取，不含场数据或计算结果；仅支持场比较方案 JSON。":"Field views are stored separately from wave views in this browser and site address. Clearing site data removes them; export a backup. Imports are read locally and contain no field arrays or computed results. Only field-view JSON is supported."};function U1(e){return n.createElement(vc,{adapter:Y1,...e})}function ns(e){if(new TextEncoder().encode(e).length>2*1024*1024)throw Error("Analysis file too large");let a;try{a=JSON.parse(e)}catch{throw Error("Invalid analysis JSON")}if(a?.schema==="oceanscope.paired-case.v1")return{kind:"pairedCase",value:a};if(a?.schema===As)return{kind:"report",value:a};if(a?.schema===Ns)return{kind:"velocity",value:a};if(a?.schema===Os)return{kind:"velocityComparison",value:a};if(a?.schema===pt)return{kind:"field",value:a};if(a&&!a.schema&&a.schemaVersion===1&&typeof a.runId=="string"&&a.protocol&&a.datasetA&&a.datasetB&&"subset"in a&&"metric"in a&&"frame"in a)return{kind:"selection",value:a};throw Error("Unsupported analysis file")}const J1={pairedCase:["一页案例：核验水面和速度资源，恢复热点、双剖面、切片与配对流线。","One-page case: verify both resources and restore the hotspot, profiles, slice and streamlines."],velocityComparison:["三帧速度对照：核验三个速度资源，恢复固定选区、探针、箭头和第三图。","Three-frame velocity comparison: verify all three resources and restore the fixed ROI, probe, arrows, and comparison map."],velocity:["速度诊断报告：重新核验对应帧的速度资源，恢复切片、ROI、探针、箭头和方向阈值。","Velocity report: verify the selected frame’s velocity resource and restore the slice, ROI, probe, arrows, and direction threshold."],report:["完整分析报告：恢复帧、选区、探针、截面和可用相机；重新核验资源。","Analysis report: restore frame, ROI, probe, section and available camera; verify resources again."],field:["场比较方案：恢复数据组合、三维帧、显示设置与相机；不含水面高度选区。","Field view: restore dataset, geometry frame, display settings and camera; no surface-height ROI."],selection:["序列选择：只恢复帧号、帧集合与曲线类型；不恢复选区或相机。","Sequence selection: restore only frame, frame set and curve; no ROI or camera."]};function K1({onRestore:e,zh:a,controlRef:t}){const[s,i]=j.useState(""),[o,r]=j.useState(""),[c,d]=j.useState(null),[l,m]=j.useState(""),[b,v]=j.useState(!1),u=j.useRef(null);function h(){u.current&&(u.current.abort(),u.current=null,v(!1),m(a?"恢复已取消，保留后续操作。":"Restore cancelled; newer actions retained."))}j.useImperativeHandle(t,()=>({cancel:h})),j.useEffect(()=>()=>u.current?.abort(),[]);let f;try{s.trim()&&(f=ns(s))}catch{}async function p(C){if(h(),!C)return;const w=new AbortController;u.current=w,d(null),i(""),r(C.name),m("");try{if(C.size>2*1024*1024)throw Error("Analysis file too large");const g=await C.text();w.signal.throwIfAborted(),ns(g),i(g)}catch(g){w.signal.aborted||d(g)}finally{u.current===w&&(u.current=null)}}async function _(){h();const C=new AbortController;u.current=C,v(!0),d(null),m(a?"正在识别文件并核验资源…":"Recognizing the file and verifying resources…");try{const w=ns(s);await e(s,w,C.signal),C.signal.throwIfAborted(),m(a?"恢复完成。请核对当前帧和范围；导出前重新生成报告。":"Restored. Check frame and scope; create a fresh report before exporting.")}catch(w){C.signal.aborted||(d(w),m(""))}finally{u.current===C&&(u.current=null,v(!1))}}return n.createElement("details",{"data-os-loc":"src/RestoreAnalysis.jsx:11:9",id:"restore-analysis",className:"restore-analysis"},n.createElement("summary",{"data-os-loc":"src/RestoreAnalysis.jsx:11:69","data-review-title":"","data-review-id":"restore-analysis"},a?"恢复分析 · 打开 JSON":"Restore analysis · Open JSON"),n.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:195"},a?"选择文件或粘贴内容，工具会识别恢复范围。文件在本机读取，仍需匹配的数据资源。":"Choose a file or paste its contents. The tool identifies what it restores. Files stay local; matching data resources are required."),n.createElement("label",{"data-os-loc":"src/RestoreAnalysis.jsx:11:380"},a?"选择分析文件":"Choose analysis file"," ",n.createElement("input",{"data-os-loc":"src/RestoreAnalysis.jsx:11:424","data-os-action":"",type:"file",accept:".json,application/json","aria-label":"Analysis JSON file",onChange:C=>{p(C.target.files?.[0]),C.target.value=""}})),o&&n.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:587"},o),n.createElement("label",{"data-os-loc":"src/RestoreAnalysis.jsx:11:605"},a?"或粘贴 JSON":"Or paste JSON",n.createElement("textarea",{"data-os-loc":"src/RestoreAnalysis.jsx:11:643","data-os-action":"","aria-label":"Analysis JSON text",rows:"4",value:s,onChange:C=>{h(),i(C.target.value),r(""),d(null),m("")}})),f&&n.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:823",className:"import-kind"},J1[f.kind][a?0:1]),n.createElement("div",{"data-os-loc":"src/RestoreAnalysis.jsx:11:900",className:"reference-controls"},n.createElement("button",{"data-os-loc":"src/RestoreAnalysis.jsx:11:936","data-os-action":"",disabled:!s.trim()||b,onClick:_},a?"恢复这份分析":"Restore this analysis"),b&&n.createElement("button",{"data-os-loc":"src/RestoreAnalysis.jsx:11:1045","data-os-action":"",onClick:h},a?"取消恢复":"Cancel restore")),n.createElement(Cn,{error:c,zh:a}),n.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:1152",role:"status","aria-live":"polite"},l))}const Q1=`{
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
`,e2=`{
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
`,n2=`# OceanScope public source summary

This release presents supplied scene and model descriptions as claims, not independently audited training history. Original machine paths and source prose are omitted. Numerical results, masks and protocol identities are retained.

- Model: "Model A"
- Scene: "v2 Gentle clean full-SDF velocity"
- Camera configuration: ["camera29","camera32","camera35","camera02","camera05","camera08","camera11","camera14","camera17","camera20","camera23","camera26"]
- Source frame rate: "24 fps; 1001–1096"
- Train / validation / test: "v2 all96 test; never used for training/checkpoint choice"
- OceanBox training scenes: ["variant_00000","variant_00001","variant_00002","variant_00003","variant_00004","variant_00008"]
- Preprocessing: "Temporal smoothing"
- Unit evidence: "source convention; not independently calibrated"
`,a2=`# OceanScope public source summary

This release presents supplied scene and model descriptions as claims, not independently audited training history. Original machine paths and source prose are omitted. Numerical results, masks and protocol identities are retained.

- Model: "Model A"
- Scene: "v2 Gentle clean full-SDF velocity"
- Camera configuration: ["camera29","camera32","camera35","camera02","camera05","camera08","camera11","camera14","camera17","camera20","camera23","camera26"]
- Source frame rate: "24 fps; 1001–1096"
- Train / validation / test: "v2 all96 test; never used for training/checkpoint choice"
- OceanBox training scenes: ["variant_00000","variant_00001","variant_00002","variant_00003","variant_00004","variant_00008"]
- Preprocessing: "Temporal smoothing"
- Unit evidence: "source convention; not independently calibrated"
`;function t2(e,a){const t=[];(e?.gtRole!=="gt"||a?.gtRole!=="gt"||e?.predictionRole!=="prediction"||a?.predictionRole!=="prediction")&&t.push("Explicit GT/prediction roles required");for(const i of["scene","gtManifest","protocolSha256","frameIds","domain","unitStatus"])(e?.[i]==null||a?.[i]==null||Qn(e[i])!==Qn(a[i]))&&t.push(`Different or unknown ${i}`);const s=["camera","model","preprocessing"].filter(i=>Qn(e?.[i])!==Qn(a?.[i]));return{comparable:t.length===0,blockedReasons:t,differences:s}}async function s2(e,a,t){const s=JSON.parse(e);if(s.schemaVersion!==1||s.runId!==a.runId||s.protocolSha256!==a.protocol.sourceScriptSha256||s.manifestA!==a.datasetA.manifestSha256||s.manifestB!==a.datasetB.manifestSha256)throw Error("Declaration identity mismatch");if(!Array.isArray(s.entries)||new Set(s.entries.map(o=>o.id)).size!==s.entries.length)throw Error("Invalid declarations");const i={gtIdentity:s.manifestA,predictionIdentity:s.manifestB};for(const o of s.entries){if(!["claimed","verified","unknown"].includes(o.status)||!o.id||!o.label)throw Error("Invalid declaration status");if(o.status==="unknown"&&o.value!==null)throw Error("Unknown declaration must have no asserted value");if(o.status==="verified"&&(!Object.hasOwn(i,o.id)||o.value!==i[o.id]))throw Error("Unsupported independent verification claim");if(o.status==="claimed"&&!o.source)throw Error("Claim needs its source");if(o.source&&(typeof t[o.source.file]!="string"||await ui(t[o.source.file])!==o.source.sha256))throw Error("Declaration source checksum mismatch")}if(s.conditions?.gtManifest!==s.manifestA||s.conditions.protocolSha256!==s.protocolSha256||Qn(s.conditions.frameIds)!==Qn(a.frameIds)||!t2(s.conditions,s.conditions).comparable)throw Error("Declaration conditions mismatch");return{...s,sha256:await ui(e)}}async function i2(e){if(e.id!=="best-1027")return null;const a=await Fr(Q1,Sa,e);return{...a,verifiedPayloadSha256:Sa.sha256,declarations:await s2(e2,a,{"METRICS.md":n2,"SPLIT.md":a2})}}function o2({analysisSection:e,onAnalysisSection:a,item:t,active:s,viewApiRef:i,initialView:o,onViewReady:r,onViewRestored:c,restoring:d,onCancelImport:l}){const{language:m}=ue(),b=m==="zh",[v,u]=j.useState(()=>o?.settings.group||(t.comparison.settings?.previewOnly&&t.comparison.availableGroups.includes("velocity")?"velocity":"sdf")),[h,f]=j.useState(null),[p,_]=j.useState(""),C=j.useRef(ro()),[w,g]=j.useState(0);j.useEffect(()=>(f(null),_(""),C.current.run(()=>i2(t)).then(B=>{B&&f(B)}).catch(B=>_(B.message)),()=>C.current.cancel()),[t,w]);const E=!!t.comparison.settings?.previewOnly,x=!!t.metrics?.reconstructionEvaluation,S=n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:22:14",className:"public-field-provenance"},n.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:22:55"},t.description),n.createElement("dl",{"data-os-loc":"src/FieldSamples.jsx:22:80"},n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:23:3"},n.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:23:8"},"Ground Truth"),n.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:23:29"},t.comparison.labels?.gt?.displayName)),n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:24:3"},n.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:24:8"},"Prediction"),n.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:24:27"},E?b?"未提供；不计算误差":"Not included; no error scores":t.comparison.labels?.prediction?.displayName)),n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:25:3"},n.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:25:8"},b?"三维表面 / 体积场":"3D surface / volume frames"),n.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:25:63"},ja(t).length?`1001–1096 / ${t.processing.frames.map(B=>B.frame).join(", ")}`:t.processing.frames.map(B=>B.frame).join(", "))),n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:26:3"},n.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:26:8"},b?"数据语义":"Data semantics"),n.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:26:45"},x?b?"原分辨率有效 SDF/速度对比；三帧高度与水下速度评估，采用明确的本地计算规则。":"Native valid SDF/velocity comparison; three-frame height and underwater evaluation under an explicit local protocol.":E?b?"单位未声明":"Units undeclared":b?"条件性 GT 水体距离误差；外部填充值不参与距离评分":"Conditional GT-water distance scores; filled exterior excluded from distance scoring"))));return n.createElement(q1,{focusedLayout:!0,workspace:e,onWorkspace:a,unifiedRestore:!0,onCancelImport:l,onRetryEvaluation:()=>g(B=>B+1),evaluation:h,evaluationError:p,comparison:t.comparison,processing:t.processing,activeGroup:v,onActiveGroup:u,setup:S,expectedFrames:Object.keys(t.metrics?.frames||{}).map(Number),metricsOverride:t.metrics||null,sourceCase:t,viewApiRef:i,initialView:o,onViewReady:r,onViewRestored:c,restoring:d,readOnly:!0,active:s})}function u2({request:e,active:a=!0,analysisSection:t="3d",onAnalysisSection:s}){const{tr:i,language:o}=ue(),r=o==="zh",c=j.useRef(null),d=j.useRef(0),l=j.useRef(null),m=j.useRef(null);j.useEffect(()=>()=>m.current?.reject(new DOMException("Cancelled","AbortError")),[]),j.useEffect(()=>{(!a||t!=="report")&&l.current?.cancel()},[a,t]);const[b,v]=j.useState(0),[u,h]=j.useState(null),[f,p]=j.useState(!1),[_,C]=j.useState(!1),[w,g]=j.useState(null),[E,x]=j.useState(null),[S,B]=j.useState(""),[A,y]=j.useState(""),[M,k]=j.useState(""),[I,F]=j.useState(0),[V,K]=j.useState(!1);j.useEffect(()=>{let Y=!0;return Or().then(ee=>{if(!Y)return;od(ee.cases),x(ee);const O=ts("public-case")?.id,Z=ee.cases.some(ie=>ie.id===O)?O:ee.defaultCaseId||ee.cases[0].id;B(Z),y(Z),k("")}).catch(ee=>{Y&&k(ee.message)}),()=>{Y=!1}},[I]),j.useEffect(()=>{e?.id&&E?.cases.some(Y=>Y.id===e.id)&&W(e.id)},[e,E]),j.useEffect(()=>{S&&uo("public-case",{id:S})},[S]);function W(Y){l.current?.cancel(),v(++d.current),c.current?.pause(),h(null),C(!1),p(!1),g(null),B(Y),y(Y),K(!1)}function G(Y){try{const ee=In(Y,E.cases);c.current?.pause();const O=++d.current;v(O),p(!1),C(!0),g(null),K(!1),B(ee.settings.caseId),y(ee.settings.caseId),h({doc:ee,token:O})}catch(ee){g({error:ee})}}async function ae(Y,ee,O){if(O.throwIfAborted(),ee.kind!=="field"){if(!c.current?.restoreAnalysis)throw Error("Analysis is not ready");return c.current.restoreAnalysis(Y,ee.kind,O)}const Z=In(ee.value,E.cases);return new Promise((ie,te)=>{const z=()=>{m.current?.signal===O&&(m.current=null,++d.current,h(null),C(!1),te(new DOMException("Cancelled","AbortError")))};O.addEventListener("abort",z,{once:!0});const q=re=>{O.removeEventListener("abort",z),re?te(re):ie()};m.current={signal:O,finish:q,reject:te},G(Z)})}function T(Y,ee){if(Y!==d.current)return;const O=m.current;m.current=null,O?.finish(ee),C(!1),g(ee?{error:ee}:{cn:"场方案已恢复：样例、帧、切面、探针、视角与显示设置已同步，播放已暂停。",en:"Field view restored: sample, frame, section, probe, camera and display settings are synchronized. Playback paused."})}const N=E?.cases.find(Y=>Y.id===S),ne=E?.cases.find(Y=>Y.id===A);return N?.comparison.settings?.previewOnly,n.createElement("section",{"data-os-loc":"src/FieldSamples.jsx:62:9",className:"public-field-demo","aria-label":"Published field examples"},n.createElement("header",{"data-os-loc":"src/FieldSamples.jsx:63:3",className:"demo-case-header"},n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:63:40"},n.createElement("h1",{"data-os-loc":"src/FieldSamples.jsx:63:45"},N?.name||(r?"场分析":"Field analysis")),n.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:63:95"},N&&(r?`${ja(N).length||N.processing.frames.length}帧三维 · ${N.processing.frames.length}帧体积场`:`${ja(N).length||N.processing.frames.length} 3D frames · ${N.processing.frames.length} volume frames`))),n.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:63:357","data-os-action":"",disabled:_,"aria-expanded":V,onClick:()=>{y(S),K(Y=>!Y)}},r?"数据与示例":"Datasets & examples")),M?n.createElement(Cn,{error:M,zh:r,resource:r?"示例目录":"Sample catalogue",onRetry:()=>F(Y=>Y+1)}):E?n.createElement(n.Fragment,null,V&&n.createElement("section",{"data-os-loc":"src/FieldSamples.jsx:66:14",className:"sample-setup","aria-label":"Sample dataset selection"},n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:66:86",className:"sample-setup-heading"},n.createElement("h2",{"data-os-loc":"src/FieldSamples.jsx:66:124"},r?"数据与对比设置":"Datasets & comparison setup"),n.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:66:177"},r?"选择已发布的数据组合，打开已有分析结果。":"Choose a published dataset pair to open its existing analysis.")),n.createElement("label",{"data-os-loc":"src/FieldSamples.jsx:67:5"},r?"示例组合":"Published example",n.createElement("select",{"data-os-loc":"src/FieldSamples.jsx:67:43","data-os-action":"","aria-label":"Published field example",value:A,onChange:Y=>y(Y.target.value)},E.cases.map(Y=>n.createElement("option",{"data-os-loc":"src/FieldSamples.jsx:67:168",key:Y.id,value:Y.id},Y.name)))),ne&&n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:68:13",className:"sample-dataset-grid"},n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:68:50",className:"sample-source"},n.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:68:81",className:"source-role"},"GROUND TRUTH"),n.createElement("h3",{"data-os-loc":"src/FieldSamples.jsx:68:130"},ne.comparison.labels?.gt?.displayName),n.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:68:181"},ne.comparison.availableGroups.join(" + ").toUpperCase()),n.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:68:248"},r?"可用":"Ready")),n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:68:284",className:"sample-source"},n.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:68:315",className:"source-role prediction"},"PREDICTION"),n.createElement("h3",{"data-os-loc":"src/FieldSamples.jsx:68:373"},ne.comparison.settings?.previewOnly?r?"无预测数据":"No prediction included":ne.comparison.labels?.prediction?.displayName),n.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:68:509"},ne.comparison.settings?.previewOnly?r?"独立查看，不显示误差指标":"Standalone inspection without error metrics":r?"已对齐的场数据 · 已记录的计算规则":"Aligned fields · Recorded evaluation protocol"))),n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:69:5",className:"sample-actions"},n.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:69:37"},r?"本工具读取已有样例与分析资源；原始 VDB / ABC 处理需使用配套离线流程。":"This tool reads existing samples and analysis resources; raw VDB / ABC processing uses the separate offline workflow."),n.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:69:217","data-os-action":"",onClick:()=>K(!1)},r?"取消":"Cancel"),n.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:69:284","data-os-action":"",className:"primary",onClick:()=>{W(A)}},ne?.comparison.settings?.previewOnly?r?"查看 Ground Truth":"View Ground Truth":r?"打开已有对比":"Open saved comparison"))),N&&n.createElement(n.Fragment,null,n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:71:13",className:"demo-session-tools",hidden:t!=="report"},n.createElement(K1,{controlRef:l,zh:r,onRestore:ae}),n.createElement(U1,{unifiedRestore:!0,catalog:E.cases,ready:f,restoring:_,onCapture:()=>c.current.captureView(),onRestore:G,restoreNotice:w})),n.createElement(o2,{analysisSection:t,onAnalysisSection:s,onCancelImport:()=>l.current?.cancel(),key:`${N.id}:${b}`,item:N,active:a,viewApiRef:c,initialView:u?.doc,onViewReady:p,restoring:_,onViewRestored:Y=>T(u?.token,Y)}))):n.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:65:130",role:"status"},r?"正在加载示例…":"Loading samples…"))}export{u2 as default};
