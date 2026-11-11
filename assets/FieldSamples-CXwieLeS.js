import{g as ji,p as rt,v as Ss,a as Bi,o as ot,b as Ci,s as Ai,S as Tn,c as zn,d as qa,e as js,f as ki,h as Mi,i as Ri}from"./surfaceResources-udFyEaQA.js";import{u as ie,R as e,r as S,c as Bs,s as Pi,d as Cs,p as As,e as Wn,f as Xn,g as pn,h as $n,i as Vt,j as zt,k as Ii,C as ks,l as Ni,m as Fi,v as Ms,n as Oi,o as Di,q as Rs,t as Ps,x as sa,y as Xt,z as Ti,A as Zt,B as Gt,D as Ht,E as Wi,F as $i,G as La,H as Ya,I as ua,J as Vi,K as zi,L as Xi,a as Zi,b as Ua,w as Is,M as qt,N as Bn,O as Gi}from"./workbench-kOPy4lee.js";import{d as Fa,l as Hi}from"./publicData-Dh1-tQFp.js";import{W as qi,m as Li,j as Yi,C as Oa,k as Ui,O as Ji,a4 as Ki,l as Qi,a5 as ec,g as nc,a as ac,V as Sn,r as tc,y as sc,h as Lt,t as ic,v as Yt,s as Ut,d as Jt,q as cc,i as rc,B as Kt,o as oc,D as lc,p as dc,x as fc,a6 as Qt,a7 as es,a8 as mc,a9 as bc,a0 as pc,aa as uc,ab as hc,ac as gc,ad as yc,ae as xc,af as Ns,ag as vc,ah as Ec,a2 as Da,_ as _c,Y as wc,I as Sc}from"./SectionRotation-h2xUyWEq.js";import{b as jc,e as ns,d as Bc,c as as}from"./comparisonExport-rG_qP9SP.js";import{e as Cc}from"./verticalSection-DptfHDZh.js";const Ac="539734f929b2d3d4a53adb2563bc9598e1cc8efcd33439f8a39db052bafb28bd",kc="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",Mc="gentle",Rc="best1027",Pc="e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",Ic="323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",Vn={sha256:Ac,protocolSha256:kc,datasetA:Mc,datasetB:Rc,manifestA:Pc,manifestB:Ic};function Nc({fetchFrame:n,decode:a,byteBudget:t=268435456,maxFrames:s=5}){const i=new Map,c=new Map;let r=null,o=0,l=!1,f=!1;const m=(p,d)=>`${p}:${d}`,g=()=>[...i.values()].reduce((p,d)=>p+d.byteLength,0);function y(){for(const p of i.keys()){if(i.size<=s&&g()<=t)break;p!==r&&i.delete(p)}}function u(p,d){const h=m(p,d);if(i.has(h)){const v=i.get(h);return i.delete(h),i.set(h,v),Promise.resolve(v)}if(c.has(h))return c.get(h).promise;const _=new AbortController,C=n(p,d,{signal:_.signal}).then(v=>{if(l||_.signal.aborted)return null;const x=v&&Object.hasOwn(v,"verifiedResource"),E=x?v.buffer:v,j=x?v.verifiedResource:null,w=a(E),B=new Set(w.fields.map(b=>b.values.buffer)),k={comparisonId:p,frameNumber:d,data:w,verifiedResource:j,byteLength:[...B].reduce((b,R)=>b+R.byteLength,0)};return i.set(h,k),y(),k}).finally(()=>{c.get(h)?.controller===_&&c.delete(h)});return c.set(h,{promise:C,controller:_}),C}return{async select(p,d){if(l)return null;const h=++o,_=m(p,d);for(const[v,x]of c)v!==_&&(x.controller.abort(),c.delete(v));const C=r;r=_;try{const v=await u(p,d);return l||h!==o?null:(y(),v)}catch(v){if(l||h!==o||v.name==="AbortError")return null;throw r=C,v}},async prefetch(p,d){l||f||await Promise.all(d.slice(0,2).map(h=>u(p,h).catch(()=>null)))},setScrubbing(p){if(f=p,p)for(const[d,h]of c)d!==r&&(h.controller.abort(),c.delete(d))},stats(){return{bytes:g(),cachedFrames:i.size,oversize:g()>t}},dispose(){l=!0,o++;for(const p of c.values())p.controller.abort();c.clear(),i.clear()}}}function Fc({workerFactory:n=()=>new Worker(new URL(""+new URL("geometryWorker-BGm7dbIH.js",import.meta.url).href,import.meta.url),{type:"module"}),byteBudget:a=134217728}={}){const t=new Map;let s=null,i=null,c=0,r=!1;const o=()=>[...t.values()].reduce((f,m)=>f+m.byteLength,0);function l(){i&&(i.resolve(null),i=null,s?.terminate(),s=null)}return{request(f,m,g){if(r)return Promise.resolve(null);l();const y=ji(f,g);if(t.has(y)){const u=t.get(y);return t.delete(y),t.set(y,u),Promise.resolve(u)}return new Promise((u,p)=>{const d=++c;i={resolve:u,reject:p,id:d};try{s??=n(),s.onmessage=({data:x})=>{if(!i||x.requestId!==i.id||x.version!==1)return;if(i=null,x.type==="error"){p(Error(x.error));return}const E=x.result;t.set(y,E);for(const j of t.keys()){if(o()<=a)break;j!==y&&t.delete(j)}u(E)},s.onerror=x=>{i?.id===d&&(i=null,s?.terminate(),s=null,p(Error(x.message||"Geometry worker failed")))};const h=new Map,_=[],C=x=>{if(!x)return null;if(h.has(x))return h.get(x);const E=x.values.slice(),j={...x,values:E,mask:null};return h.set(x,j),_.push(E.buffer),j.mask=C(x.mask),j},v=Object.fromEntries(Object.entries(f.data.groups).filter(([x])=>x===g.group||x==="sdf"&&g.showContext).map(([x,E])=>[x,Object.fromEntries(Object.entries(E).filter(([j])=>(j==="ground_truth"||j==="prediction"||/^(ground_truth|prediction)\.[xyz]$/.test(j))&&(!g.previewOnly||!j.startsWith("prediction"))).map(([j,w])=>[j,C(w)]))]));s.postMessage({version:1,requestId:d,comparisonId:f.comparisonId,type:"build",payload:{snapshot:{...f,data:{groups:v}},lattice:m,settings:g}},_)}catch(h){i=null,p(h)}})},stats(){return{bytes:o(),cachedFrames:t.size,oversize:o()>a}},dispose(){r=!0,l(),s?.terminate(),s=null,t.clear()}}}const Oc="OCFLD001",Ta=24,Dc=112;function ia(n,a,t){const s=n.subarray(a,a+t),i=s.indexOf(0);return new TextDecoder().decode(i>=0?s.subarray(0,i):s)}function ts(n,a){if(n>BigInt(Number.MAX_SAFE_INTEGER))throw new Error(`${a} exceeds safe integer range`);return Number(n)}function Fs(n){if(!(n instanceof ArrayBuffer)||n.byteLength<Ta)throw new Error("Field frame is truncated");const a=new Uint8Array(n);if(ia(a,0,8)!==Oc)throw new Error("Invalid field frame magic");const t=new DataView(n),s=t.getUint32(8,!0);if(s!==1)throw new Error(`Unsupported field frame schema ${s}`);const i=t.getUint32(12,!0),c=t.getUint32(16,!0);if(c!==Dc)throw new Error(`Unsupported directory entry size ${c}`);const r=Ta+i*c;if(r>n.byteLength)throw new Error("Field frame directory is truncated");const o=[];for(let f=0;f<i;f+=1){const m=Ta+f*c,g=ia(a,m,16),y=ia(a,m+16,32),u=ia(a,m+48,16),p=t.getUint32(m+64,!0),d=[t.getUint32(m+68,!0),t.getUint32(m+72,!0),t.getUint32(m+76,!0)],h=ts(t.getBigUint64(m+80,!0),"field offset"),_=ts(t.getBigUint64(m+88,!0),"field length"),C=t.getInt32(m+96,!0);if(!g||!y||d.some(j=>j===0))throw new Error("Invalid field directory entry");if(h<r||h+_>n.byteLength)throw new Error(`Field ${g}:${y} data is truncated`);const v=d[0]*d[1]*d[2];let x,E;if(p===1){if(h%4!==0||_!==v*4)throw new Error(`Field ${g}:${y} has invalid float32 storage`);x=new Float32Array(n,h,v),E="float32"}else if(p===2){if(_!==v)throw new Error(`Field ${g}:${y} has invalid uint8 storage`);x=new Uint8Array(n,h,v),E="uint8"}else throw new Error(`Field ${g}:${y} has unsupported dtype ${p}`);o.push({id:`${g}:${y}`,group:g,name:y,unit:u,dtype:E,shape:d,values:x,maskIndex:C,mask:null})}for(const f of o){if(f.maskIndex<-1||f.maskIndex>=o.length)throw new Error(`Field ${f.id} has an invalid mask index`);f.maskIndex>=0&&(f.mask=o[f.maskIndex])}const l={};for(const f of o){if(l[f.group]??={},l[f.group][f.name])throw new Error(`Duplicate field ${f.id}`);l[f.group][f.name]=f}return{schema:s,fields:o,groups:l}}function Ja(n,a,t,s){const i=n.fields.find(u=>u.id===a);if(!i)throw new Error(`Unknown field ${a}`);const[c,r,o]=i.shape;let l,f,m;if(t==="xy")[l,f,m]=[c,r,o];else if(t==="xz")[l,f,m]=[c,o,r];else if(t==="yz")[l,f,m]=[r,o,c];else throw new Error(`Unknown slice plane ${t}`);if(!Number.isInteger(s)||s<0||s>=m)throw new Error(`Slice index ${s} is outside ${t}`);const g=i.dtype==="float32"?Float32Array:Uint8Array,y=new g(l*f);for(let u=0;u<f;u+=1)for(let p=0;p<l;p+=1){let d,h,_;t==="xy"?[d,h,_]=[p,u,s]:t==="xz"?[d,h,_]=[p,s,u]:[d,h,_]=[s,p,u],y[p+l*u]=i.values[d+c*(h+r*_)]}return{fieldId:a,plane:t,sliceIndex:s,width:l,height:f,values:y}}const ha=new Map;function Tc(n){ha.clear();for(const a of n)ha.set(a.comparison.id,a)}async function Wc(n){const a=new Uint8Array(n);if(a[0]===31&&a[1]===139){if(typeof DecompressionStream>"u")throw new Error("This browser cannot decode the field samples. Please use a recent Chrome, Edge, Firefox or Safari.");return new Response(new Blob([n]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}return n}async function $c(n,a,t={}){const s=ha.get(n),i=s?.frameUrls?.[String(a)],c=rt(s,a);if(!i)throw new Error(`Frame ${a} is not included in this public preview.`);if(!/^\/?data\/[a-zA-Z0-9_./-]+$/.test(i)||i.split("/").includes(".."))throw new Error("Invalid published field URL.");const r=await fetch(i.replace(/^\//,""),{signal:t.signal});if(!r.ok)throw new Error(`Field sample unavailable (${r.status}).`);const o=await r.arrayBuffer();if(t.signal?.aborted)throw new DOMException("Aborted","AbortError");const l=c?await Ss(o,c):await Wc(o);if(t.signal?.aborted)throw new DOMException("Aborted","AbortError");return t.withIdentity?{buffer:l,verifiedResource:c}:l}async function Vc(n){const a=ha.get(n);if(!a)throw new Error("Unknown public comparison.");return a.metrics??null}const zc={groundTruth:"ground_truth",prediction:"prediction",error:"error"};function Xc(n,a,t){if(!n?.origin||!n?.axisSteps)throw new Error("Canonical lattice transform is unavailable");const s=a==="yz"?0:a==="xz"?1:a==="xy"?2:-1;if(s<0)throw new Error(`Unknown slice plane ${a}`);return n.origin.map((i,c)=>i+n.axisSteps[s][c]*t)}function Zc(n){let a=0;for(const t of n)Number.isFinite(t)&&(a=Math.max(a,Math.abs(t)));return[-a,a]}function Gc(n){let a=0;for(const t of n)Number.isFinite(t)&&(a=Math.max(a,Math.abs(t)));return[0,a]}function Wa(n,a){const t=zc[a];if(!n)return null;if(n[t])return{ids:[n[t].id],maskId:n[t].mask?.id||null};const s=["x","y","z"].map(i=>n[`${t}.${i}`]).filter(Boolean);return s.length!==3?null:{ids:s.map(i=>i.id),maskId:s[0].mask?.id||null}}function Dn(n,a){const t=n?.groups?.[a],s=Wa(t,"groundTruth"),i=Wa(t,"prediction"),c=Wa(t,"error"),r=s?.ids?.[0]||i?.ids?.[0]||c?.ids?.[0],o=r&&(n.fields?.find(l=>l.id===r)?.unit||Object.values(t||{}).find(l=>l?.id===r)?.unit)||"";return{kind:a,groundTruth:s,prediction:i,error:c,unit:o}}function Hc(n,a,t,s,i="magnitude"){if(!a?.ids?.length)return null;if(a.ids.length===1)return{...Ja(n,a.ids[0],t,s),components:null};const c=a.ids.map(l=>Ja(n,l,t,s)),r=["x","y","z"].indexOf(i);if(r>=0)return{...c[r],components:null};const o=new Float32Array(c[0].values.length);for(let l=0;l<o.length;l+=1)o[l]=Math.hypot(c[0].values[l],c[1].values[l],c[2].values[l]);return{...c[0],fieldId:a.ids.join("+"),values:o,components:c.map(l=>l.values)}}function qc(n,{onCameraChange:a,rendererFactory:t=()=>new qi({antialias:!0}),controlsFactory:s=(c,r)=>new Ji(c,r),gizmoFactory:i=Li}={}){const c=t();n.appendChild(c.domElement),c.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2));const r=i(n),o=new Yi;o.background=new Oa("#f4f8fb");const l=new Ui(40,1,.001,1e5);l.position.set(8,6,9);const f=s(l,c.domElement);f.enableDamping=!1,o.add(new Ki(16777215,6649225,2.4));const m=new Qi(16777215,2);m.position.set(3,8,5),o.add(m);const g=new ec(1);o.add(g);let y=[],u=null,p=[],d={mode:"split",opacity:.65},h=!1,_=960,C=540,v=[0,1];function x(){const A=d.sourceRange||v;for(const P of p){const F=P.userData.values;if(!F)continue;const N=P.geometry.attributes.color;for(let W=0;W<F.length;W++){const T=Math.max(0,Math.min(1,(F[W]-A[0])/(A[1]-A[0]||1)));new Oa().setHSL(.65*(1-T),.8,.48).toArray(N.array,W*3)}N.needsUpdate=!0}}const E=()=>{for(const A of p)o.remove(A),A.geometry.dispose(),A.material.dispose();p=[]};function j(){for(const A of p){if(A.userData.kind==="slice-outline"){A.material.opacity=1,A.material.depthTest=!1,A.material.depthWrite=!1,A.renderOrder=4;continue}if(A.userData.kind==="section-plane"){A.material.transparent=!0,A.material.opacity=.14,A.material.depthWrite=!1,A.material.depthTest=!0,A.renderOrder=3;continue}const P=A.userData.role==="prediction",F=d.mode==="wire-overlay"&&P&&A.userData.kind==="surface";A.renderOrder=F?3:P?2:1,A.material.transparent=!0,A.material.opacity=d[P?"predictionOpacity":"gtOpacity"]??d.opacity,A.material.depthWrite=!["overlay","wire-overlay"].includes(d.mode),A.isMesh&&(A.userData.kind==="surface"&&dc(A.geometry,A.material,d.shading),A.material.userData.xray!==F&&(A.material.userData.xray=F,A.material.onBeforeCompile=N=>{F&&(N.fragmentShader=N.fragmentShader.replace("void main() {",`void main() {
if (mod(floor(gl_FragCoord.x / 3.0) + floor(gl_FragCoord.y / 3.0), 2.0) < 1.0) discard;`))},A.material.customProgramCacheKey=()=>F?"field-xray-gaps-1":"field-surface-1",A.material.needsUpdate=!0),A.material.wireframe=F,A.material.depthTest=!F)}}function w(){if(h)return;const A=d.mode==="split"?["gt","prediction"]:[d.mode==="gt"?"gt":d.mode==="prediction"?"prediction":null];c.setScissorTest(!0),A.forEach((P,F)=>{const N=_/A.length;l.aspect=N/C,l.updateProjectionMatrix(),c.setViewport(F*N,0,N,C),c.setScissor(F*N,0,N,C),p.forEach(W=>{W.visible=(!P||W.userData.role===P)&&d[W.userData.role==="prediction"?"showPrediction":"showGt"]!==!1&&(W.userData.kind!=="section-plane"||d.showPlane!==!1)}),c.render(o,l)}),r.update(l)}const B=()=>({position:l.position.toArray(),target:f.target.toArray(),zoom:l.zoom,up:l.up.toArray(),fov:l.fov,near:l.near,far:l.far});c.domElement.setAttribute?.("data-renderer","field-3d"),c.domElement.osPick=(A,P)=>{const F=d.mode==="split",N=F?A<.5?"gt":"prediction":d.mode,W=F?A*2%1:A,T=new nc;T.setFromCamera(new ac(W*2-1,1-P*2),l);const H=p.filter(z=>z.userData.kind==="surface"&&(N!=="gt"&&N!=="prediction"||z.userData.role===N)&&d[z.userData.role==="prediction"?"showPrediction":"showGt"]!==!1),O=T.intersectObjects(H,!1)[0];return{camera:B(),hit:O?{xyz:O.point.toArray(),role:O.object.userData.role}:null}},c.domElement.osProject=A=>{const P=d.mode==="split";if(!P&&["gt","prediction"].includes(d.mode)&&d.mode!==A.role)return null;const F=new Sn(...A.xyz).project(l);return Math.abs(F.x)>1||Math.abs(F.y)>1||Math.abs(F.z)>1?null:[P?((F.x+1)/2+(A.role==="prediction"?1:0))/2:(F.x+1)/2,(1-F.y)/2]},c.domElement.osCapture=()=>w();const k=()=>{w(),a?.(B())};f.addEventListener("change",k);function b(){const A=n.clientWidth,P=n.clientHeight;A>1&&P>1&&(_=A,C=P),c.setSize(_,C),w()}const R=globalThis.ResizeObserver?new ResizeObserver(b):null;R?.observe(n);const M={setGeometry(A){E();let P=1/0,F=-1/0;for(const W of A?.layers||[])for(const T of W.values||[])P=Math.min(P,T),F=Math.max(F,T);v=[P,F];const N=d.sourceRange||v;for(const W of A?.layers||[]){if(!W.positions.length)continue;const T=new Lt;T.setAttribute("position",new Kt(W.positions,3));const H=W.role==="gt"?1416379:15571026;let O,z;if(W.values){const Z=new Float32Array(W.values.length*3);for(let X=0;X<W.values.length;X++){const $=Math.max(0,Math.min(1,(W.values[X]-N[0])/(N[1]-N[0]||1)));new Oa().setHSL(.65*(1-$),.8,.48).toArray(Z,X*3)}T.setAttribute("color",new Kt(Z,3))}W.kind==="vectors"||W.kind==="slice-outline"?(O=new Ut({vertexColors:!!W.values,color:W.kind==="slice-outline"?8801732:W.values?16777215:H}),z=new Yt(T,O)):(T.computeVertexNormals(),O=new oc({color:W.kind==="section-plane"?9988803:W.values?16777215:H,vertexColors:!!W.values,side:lc,roughness:.7,transparent:!0,opacity:W.kind==="slice"?.85:d.opacity,depthWrite:d.mode!=="overlay"}),z=new Jt(T,O)),z.userData={role:W.role,kind:W.kind,values:W.values},p.push(z),o.add(z)}j(),w()},setInspection(A,P){for(const N of y)o.remove(N),N.geometry.dispose(),N.material.dispose();y=[];const F=N=>{N.renderOrder=15,o.add(N),y.push(N)};if(A?.corners?.length===4&&A.corners.every(Boolean)){const N=new Lt;N.setAttribute("position",new ic([0,1,1,2,2,3,3,0].flatMap(W=>A.corners[W]),3)),F(new Yt(N,new Ut({color:"#e4ac00",depthTest:!1})))}if(A?.probe&&P){const N=Math.hypot(...P.max.map((T,H)=>T-P.min[H])),W=new Jt(new cc(N*.007,12,8),new rc({color:"#ffffff",wireframe:!0,depthTest:!1}));W.position.fromArray(A.probe),F(W)}w()},setDisplay(A){const P=JSON.stringify(d.sourceRange)!==JSON.stringify(A.sourceRange);d={...d,...A},j(),P&&x(),w()},setCamera(A){l.position.fromArray(A.position),f.target.fromArray(A.target),l.zoom=A.zoom??1,l.up.fromArray(A.up||[0,1,0]),A.fov&&(l.fov=A.fov),A.near&&(l.near=A.near),A.far&&(l.far=A.far),l.updateProjectionMatrix(),f.update(),l.position.fromArray(A.position),l.lookAt(f.target),k()},capture(){if(h)throw Error("3D unavailable");w();const A=document.createElement("canvas");A.width=c.domElement.width,A.height=c.domElement.height;const P=A.getContext("2d");return P.drawImage(c.domElement,0,0),r.capture(P,A.width,A.height,A.width/_),A},getCamera:B,preset(A,P){const F=sc(A,P,_/(d.mode==="split"?2:1)/C,l.fov);F&&M.setCamera(F)},fit(A){if(!A)return;const P=new Sn(...A.min).add(new Sn(...A.max)).multiplyScalar(.5),F=new Sn(...A.max).sub(new Sn(...A.min)).length()||1;l.position.copy(P).add(new Sn(.8,.65,.9).multiplyScalar(F)),f.target.copy(P),l.near=F/1e4,l.far=F*100,l.zoom=1,g.scale.setScalar(F*.15),g.position.copy(P),u&&(o.remove(u),u.geometry.dispose(),u.material.dispose()),u=new tc(F*1.3,12,13294052,14740209),u.position.set(P.x,A.min[1],P.z),o.add(u),M.preset(A,"reset")},resize:b,dispose(){if(!h){h=!0,R?.disconnect(),f.removeEventListener("change",k),f.dispose(),M.setInspection(null),E();for(const A of[g,u])A?.geometry.dispose(),Array.isArray(A?.material)?A.material.forEach(P=>P.dispose()):A?.material.dispose();r.dispose(),c.dispose(),c.domElement.remove()}}};return b(),M}function lt(n,a){return a==null?null:n instanceof Map?n.get(a):n?.rows?.find(t=>t.frame===a)}function _a(n,a){const t=lt(n,a);return["train","validation","test"].includes(t?.split)?t.split:"unassigned"}function Lc(n,a,t){const s=lt(n,a);return t==="all"?!0:t.startsWith("test_")?s?.split==="test"&&(s.prediction_type||"unassigned")===t.slice(5):_a(n,a)===t}function Yc(n){return{test_interpolation:n?"Test · 插值":"Test · Interpolation",test_extrapolation:n?"Test · 未来外推":"Test · Future extrapolation",test_unassigned:n?"Test · 类型未声明":"Test · Type undeclared",test_anchor:"Test · Anchor"}}function dt(n,a){const t=lt(n,a)?.prediction_type;return["anchor","interpolation","extrapolation"].includes(t)?t:"unassigned"}function Uc(n,a=!1){return(a?{anchor:"Anchor · 来源帧",interpolation:"时间插值",extrapolation:"未来外推",unassigned:"预测类型未声明"}:{anchor:"Anchor",interpolation:"Interpolation",extrapolation:"Future extrapolation",unassigned:"Prediction type undeclared"})[n]}function ft({manifest:n,frame:a}){const{language:t}=ie(),s=_a(n,a),i=t==="zh"?{train:"Train · 训练集",validation:"Validation · 验证集",test:"Test · 测试集",unassigned:"Unassigned · 未划分"}:{train:"Train",validation:"Validation",test:"Test",unassigned:"Unassigned"};return e.createElement(e.Fragment,null,e.createElement("span",{"data-os-loc":"src/field/FrameSplitBadge.jsx:9:11","aria-label":"Frame split",className:`frame-split-badge split-${a==null?"unassigned":s}`,title:t==="zh"?"依据此预测模型的 CSV 声明；并非独立核验训练历史":"Declared by this prediction model’s CSV; training history is not independently verified"},a==null?"—":i[s]),a!=null&&e.createElement("span",{"data-os-loc":"src/field/FrameSplitBadge.jsx:9:309",className:"frame-split-badge","aria-label":"Prediction type"},Uc(dt(n,a),t==="zh")))}function Jc({geometry:n,settings:a,bounds:t,loadingFrame:s,error:i,labels:c,cameraState:r,onCameraChange:o,frameSplit:l,displayedFrame:f,controlRef:m,onSceneError:g,inspection:y,onShading:u}){const{tr:p,language:d}=ie(),h=d==="zh",[_,C]=S.useState("reset");function v(F){E.current?.preset(t,F),C(F)}const x=S.useRef(null),E=S.useRef(null),j=S.useRef(!1),[w,B]=S.useState(""),k=S.useRef(o),b=S.useRef(!1);k.current=o,S.useImperativeHandle(m,()=>({capture(){if(!E.current)throw Error("3D unavailable");return E.current.capture()},getCamera(){if(!E.current)throw Error("camera");return E.current.getCamera()},restoreCamera(F){if(!E.current)throw Error("camera");b.current=!0;try{E.current.setCamera(F),C("custom"),k.current?.(E.current.getCamera())}finally{b.current=!1}}}),[]),S.useEffect(()=>{try{E.current=qc(x.current,{onCameraChange:F=>{C("custom"),b.current||k.current?.(F)}})}catch(F){B(`3D unavailable: ${F.message}. Slices remain available.`),g?.(F.message)}return()=>{E.current?.dispose(),E.current=null}},[]),S.useEffect(()=>{if(r){b.current=!0;try{E.current?.setCamera(r)}finally{b.current=!1}}},[r]),S.useEffect(()=>{E.current?.setDisplay(a)},[a]),S.useEffect(()=>{E.current?.setGeometry(n)},[n]),S.useEffect(()=>{E.current?.setInspection(y,t)},[y,t]),S.useEffect(()=>{t&&!j.current&&(E.current?.fit(t),j.current=!0,C("reset"))},[t]),S.useEffect(()=>{t&&_!=="custom"&&v(_)},[a.mode,t]);const R=a.group==="velocity";let M=1/0,A=-1/0;for(const F of n?.layers||[])for(const N of F.values||[])M=Math.min(M,N),A=Math.max(A,N);const P=a.sourceRange||[M,A];return e.createElement("section",{"data-os-loc":"src/field/FieldViewport.jsx:23:10",className:"field-viewport","aria-label":p("3D field visualization")},e.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:24:5",className:"field-view-heading"},e.createElement("strong",{"data-os-loc":"src/field/FieldViewport.jsx:24:41"},p(R?"3D velocity field":"3D zero-isosurface")),e.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:24:117"},p("Frame "),f??"—"," · ",e.createElement(ft,{manifest:l,frame:f}))),e.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:24:237",className:"v2-view-actions",role:"group","aria-label":h?"三维视角":"3D view"},e.createElement(fc,{value:a.shading||"original",onChange:u,disabled:a.group!=="sdf"}),[["reset",h?"重置视角":"Reset view"],["top",h?"顶视图":"Top"],["side",h?"侧视图":"Side"]].map(([F,N])=>e.createElement("button",{"data-os-loc":"src/field/FieldViewport.jsx:24:528","data-os-action":"",key:F,disabled:!t,"aria-pressed":_===F,onClick:()=>v(F)},N)),e.createElement("button",{"data-os-loc":"src/field/FieldViewport.jsx:24:639","data-os-action":"",disabled:!t,onClick:()=>{E.current?.fit(t),C("reset")}},p("Fit view"))),e.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:25:5",className:"field-scene",ref:x}),e.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:26:5",className:`field-role-labels ${a.mode==="split"?"split":""}`,"aria-hidden":"true"},a.mode!=="prediction"&&e.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:26:130"},c?.gt?.displayName?`GT · ${c.gt.displayName} · ${R?"shared scale":"blue"}`:a.previewOnly?p("Dataset preview"):p(R?"GT · shared color scale":"GT · blue"),a.showGt===!1?p(" · hidden"):""),a.mode!=="gt"&&e.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:26:402"},c?.prediction?.displayName?`Prediction · ${c.prediction.displayName} · ${R?"shared scale":"orange"}`:p(R?"Prediction · shared color scale":"Prediction · orange"),a.showPrediction===!1?p(" · hidden"):a.mode==="wire-overlay"?p(" · X-ray wireframe"):"")),R&&e.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:27:16",className:"field-legend"},a.component==="magnitude"?p("Speed magnitude"):`Velocity ${a.component?.toUpperCase()}`,e.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:27:150",className:"field-gradient"}),P.every(Number.isFinite)?`${P[0].toPrecision(3)} — ${P[1].toPrecision(3)}`:p("No valid samples")," ",e.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:27:295"},a.unit||p("units undeclared"))),s!=null&&e.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:28:26",role:"status",className:"field-view-loading"},p("Loading frame "),s,"…"),(w||i)&&e.createElement("p",{"data-os-loc":"src/field/FieldViewport.jsx:29:28",role:"alert",className:"field-view-error"},w||i),n?.warnings?.length>0&&e.createElement("p",{"data-os-loc":"src/field/FieldViewport.jsx:30:36",className:"field-view-warning"},n.warnings.join(" · ")),e.createElement("small",{"data-os-loc":"src/field/FieldViewport.jsx:31:5",className:"field-view-help"},e.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:31:40",className:"shading-note"},h?"平滑只影响 SDF 表面光照；顶点、切片、指标和速度箭头保持原样。":"Smoothing affects SDF surface lighting only; vertices, slices, scores and velocity arrows are unchanged."),p("Drag to orbit · Scroll to zoom · "),p(R?"Instantaneous velocity vectors, not particle paths":"SDF = 0; display-only mesh"),p(" · X / Y up / Z · Preview quality: "),a.quality||p("balanced")))}function ss({frames:n,current:a,direction:t=1,loop:s=!1,status:i="ready"}){const c=n.indexOf(a),r=c+(t<0?-1:1);return c>=0&&r>=0&&r<n.length?{frame:n[r],action:"select"}:i==="processing"&&t>0?{frame:a,action:"wait"}:i==="ready"&&s&&n.length>1?{frame:t<0?n.at(-1):n[0],action:"select"}:{frame:a,action:"stop"}}function Kc({frames:n,displayedFrame:a,requestedFrame:t,status:s="ready",loading:i=!1,previewFps:c=24,onFrame:r,onScrubbing:o,timing:l,frameSplit:f,active:m=!0,controlRef:g,initialPlayback:y}){const{tr:u}=ie(),[p,d]=S.useState(!1),[h,_]=S.useState(y?.loop??!1),[C,v]=S.useState(y?.fps??c),[x,E]=S.useState(y?.speed??1),[j,w]=S.useState("");S.useImperativeHandle(g,()=>({pause:()=>d(!1),getSettings:()=>({loop:h,fps:C,speed:x}),restoreSettings:M=>{d(!1),_(M.loop),v(M.fps),E(M.speed)}}),[h,C,x]),S.useEffect(()=>{const M=()=>d(!1);return window.addEventListener("oceanscope-annotate",M),()=>window.removeEventListener("oceanscope-annotate",M)},[]),S.useEffect(()=>{m||d(!1)},[m]);const B=S.useRef(!1);S.useEffect(()=>{B.current||w(String(t??a??""))},[t,a]),S.useEffect(()=>{n.length<2&&d(!1)},[n.length]),S.useEffect(()=>{if(!p||i)return;const M=setTimeout(()=>{const A=ss({frames:n,current:a,loop:h,status:s});A.action==="select"?r(A.frame):A.action==="stop"&&d(!1)},1e3/(Math.max(1,C)*x));return()=>clearTimeout(M)},[p,i,a,n,h,s,C,x,r]);function k(M){d(!1);const A=ss({frames:n,current:t??a,direction:M,status:s});A.action==="select"&&r(A.frame)}function b(){d(!1);const M=Number(j);n.includes(M)?M!==t&&r(M):w(String(t??a??""))}const R=n.some((M,A)=>A>0&&M!==n[A-1]+1);return e.createElement("section",{"data-os-loc":"src/field/FieldTimeline.jsx:21:10",className:"field-timeline","aria-label":u("Animation controls")},e.createElement(ft,{manifest:f,frame:a}),e.createElement("div",{"data-os-loc":"src/field/FieldTimeline.jsx:23:5",className:"field-play-controls"},e.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:42","data-os-action":"","aria-label":u("First frame"),disabled:!n.length,onClick:()=>{d(!1),r(n[0])}},"⏮"),e.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:170","data-os-action":"","aria-label":u("Previous frame"),disabled:n.length<2,onClick:()=>k(-1)},"‹"),e.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:272","data-os-action":"",className:"primary",disabled:n.length<2,onClick:()=>d(M=>!M)},u(p?"Pause":"Play")),e.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:400","data-os-action":"","aria-label":u("Next frame"),disabled:n.length<2,onClick:()=>k(1)},"›"),e.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:497","data-os-action":"","aria-label":u("Last frame"),disabled:!n.length,onClick:()=>{d(!1),r(n.at(-1))}},"⏭"),e.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:23:628"},e.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:23:635","data-os-action":"",type:"checkbox",checked:h,onChange:M=>_(M.target.checked)}),u(" Loop")),e.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:23:735"},u("Speed"),e.createElement("select",{"data-os-loc":"src/field/FieldTimeline.jsx:23:755","data-os-action":"",value:x,onChange:M=>E(Number(M.target.value))},[.25,.5,1,2].map(M=>e.createElement("option",{"data-os-loc":"src/field/FieldTimeline.jsx:23:845",key:M,value:M},M,"×"))))),e.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:24:5","data-os-action":"","aria-label":u("Sequence timeline"),type:"range",min:"0",max:Math.max(0,n.length-1),value:Math.max(0,n.indexOf(t??a)),disabled:n.length<2,onPointerDown:()=>{d(!1),o?.(!0)},onPointerUp:()=>o?.(!1),onPointerCancel:()=>o?.(!1),onBlur:()=>o?.(!1),onKeyDown:M=>{o?.(!0),["Home","End"].includes(M.key)&&(M.preventDefault(),d(!1),r(M.key==="Home"?n[0]:n.at(-1)))},onKeyUp:()=>o?.(!1),onChange:M=>{d(!1),r(n[Number(M.target.value)])}}),e.createElement("div",{"data-os-loc":"src/field/FieldTimeline.jsx:25:5","data-displayed-frame":a,className:"field-time-labels"},e.createElement("span",{"data-os-loc":"src/field/FieldTimeline.jsx:25:78"},u("Displayed frame "),e.createElement("strong",{"data-os-loc":"src/field/FieldTimeline.jsx:25:108"},a??"—"),i?` · ${u("Loading")} ${t}…`:""),e.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:25:206"},u("Go to frame"),e.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:25:232","data-os-action":"","aria-label":u("Comparison frame"),type:"number",value:j,onFocus:()=>{B.current=!0,d(!1)},onChange:M=>{d(!1),w(M.target.value)},onBlur:()=>{B.current=!1,b()},onKeyDown:M=>{M.key==="Enter"&&b()}})),e.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:25:527"},u("Preview FPS"),e.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:25:553","data-os-action":"","aria-label":u("Preview FPS"),type:"number",min:"1",max:"120",value:C,onChange:M=>v(Math.max(1,Math.min(120,Number(M.target.value)||24)))})),e.createElement("small",{"data-os-loc":"src/field/FieldTimeline.jsx:25:719"},l?.fps>0&&Number.isFinite(l.originFrame)?`${u("Time")}: ${((a-l.originFrame)/l.fps+(l.offsetSeconds||0)).toFixed(3)} s`:u("Playback timing only — not physical simulation time"))),e.createElement("small",{"data-os-loc":"src/field/FieldTimeline.jsx:26:5"},n.length,u(" available frames"),R?u(" · Missing frames skipped; no interpolation"):"",s==="processing"?u(" · Processing continues; playback waits at the latest frame"):s==="error"?u(" · Processing failed; completed frames remain available"):""))}function Qc(n,a){if(!n)return{valid:0,total:0,fraction:null};const t=n.values.length;let s=0;for(let i=0;i<t;i++)(!a||a.values[i])&&Number.isFinite(n.values[i])&&s++;return{valid:s,total:t,fraction:t?s/t:null}}function er(n,a){return Number.isFinite(n)&&n>0?a?[0,n]:[-n,n]:null}const nr=n=>Math.max(0,Math.min(1,n)),Fn=(n,a,t)=>n.map((s,i)=>Math.round(s+(a[i]-s)*t));function Os(n,a,t){const[s,i]=a,c=i===s?t==="error"?.5:0:nr((n-s)/(i-s));return t==="error"?c<.5?Fn([32,91,177],[246,248,250],c*2):Fn([246,248,250],[201,66,55],(c-.5)*2):t==="prediction"?Fn([255,244,221],[224,119,32],c):t==="absolute-error"?Fn([246,240,252],[103,32,150],c):Fn([235,244,252],[31,111,176],c)}function Ds(n,a,t,s,i,c){const{x:r=0,z:o=0,width:l=a.width,height:f=a.height}=c??{},m=n.createImageData(l,f);for(let g=0;g<f;g++)for(let y=0;y<l;y++){const u=y+r+a.width*(g+o),p=4*(y+l*(f-1-g)),d=a.values[u],h=(!t||t[u])&&Number.isFinite(d)?Os(d,s,i):(y+g)%6<3?[205,213,219]:[238,242,245];m.data[p]=h[0],m.data[p+1]=h[1],m.data[p+2]=h[2],m.data[p+3]=255}n.putImageData(m,0,0)}const is=n=>Math.max(0,Math.min(1,n));function mt({slice:n,maskSlice:a,range:t,palette:s="ground-truth",crosshair:i,onCrosshair:c,plane:r,aspect:o,region:l=null,label:f,viewport:m}){const g=S.useRef(null);return S.useEffect(()=>{const y=g.current;if(!y||!n)return;const{width:u=n.width,height:p=n.height}=m??{};y.width=u,y.height=p;const d=y.getContext?.("2d");if(d){if(Ds(d,n,a?.values,t,s,m),n.components){d.strokeStyle=s==="prediction"?"#7c3f0d":"#123e68",d.lineWidth=Math.max(1,n.width/180);const h=r==="xy"?[0,1]:r==="xz"?[0,2]:[1,2],_=Math.max(4,Math.ceil(Math.max(n.width,n.height)/18));for(let C=_/2;C<n.height;C+=_)for(let v=_/2;v<n.width;v+=_){const x=Math.floor(v)+n.width*Math.floor(C);if(a&&!a.values[x])continue;const[E,j]=r==="oblique"?Bi(n,x):h.map(M=>n.components[M][x]),w=Math.hypot(E,j);if(!Number.isFinite(w)||w<1e-8)continue;const B=Math.min(_*.42,_*.18+Math.log1p(w)*_*.08),k=E/w*B,b=-j/w*B,R=n.height-1-C;d.beginPath(),d.moveTo(v,R),d.lineTo(v+k,R+b),d.lineTo(v+k-k*.35+b*.25,R+b-b*.35-k*.25),d.moveTo(v+k,R+b),d.lineTo(v+k-k*.35-b*.25,R+b-b*.35+k*.25),d.stroke()}}if(l){const[h,_]=Qt(n.width,l.slice(0,2)),[C,v]=Qt(n.height,l.slice(2,4));d.strokeStyle="#9c6900",d.lineWidth=Math.max(1,n.width/180),d.fillStyle="rgba(255,211,62,.17)",d.fillRect(h,n.height-1-v,_-h+1,v-C+1),d.strokeRect(h+.5,n.height-v-.5,Math.max(0,_-h),Math.max(0,v-C))}if(i){const h=i[0]*u,_=(1-i[1])*p;d.strokeStyle="#111",d.lineWidth=Math.max(.5,u/350),d.setLineDash([3,3]),d.beginPath(),d.moveTo(h,0),d.lineTo(h,p),d.moveTo(0,_),d.lineTo(u,_),d.stroke(),d.setLineDash([])}}},[n,a,t,s,i,r,l,m]),e.createElement("canvas",{"data-os-loc":"src/field/SliceCanvas.jsx:41:10","data-os-action":"","data-renderer":"field-slice","data-review-plane":r,"data-review-shape":n?[n.width,n.height].join(","):void 0,ref:g,"aria-label":f,className:"slice-canvas",style:{aspectRatio:o||"auto",height:"auto"},onClick:y=>{if(!n||!c)return;const u=y.currentTarget.getBoundingClientRect();c([is((y.clientX-u.left)/u.width),is(1-(y.clientY-u.top)/u.height)])}})}const He=n=>Number.isFinite(n)?n.toPrecision(5):"N/A";function ar({metadata:n,labels:a,single:t,group:s,epe:i,unit:c,local:r,whole:o,counts:l,probes:f,sourceRange:m,errorRange:g,metrics:y,titles:u,aspects:p}){return JSON.parse(JSON.stringify({schema:"oceanscope.field-report.v1",metadata:n,labels:a,single:t,group:s,epe:i,unit:c||"undeclared",local:t?null:r,whole:t?null:o,counts:l.slice(0,t?1:3),probes:f.slice(0,t?1:3),sourceRange:m,errorRange:t?null:g,savedFrameMetrics:t?null:y?.[s]??null,titles:u.slice(0,t?1:3),aspects:p.slice(0,t?1:3),scope:"Slice statistics and saved volume metrics are distinct; shading never changes measurements."}))}async function tr(n,a,t,s,i){const c=s==="zh",r=document.createElement("canvas");r.width=1920,r.height=1800;const o=r.getContext("2d"),l=n.metadata,f="#243f56",m="#5c7487";o.fillStyle="white",o.fillRect(0,0,r.width,r.height);function g(v,x,E,j=23,w=f,B=1808){o.font=`${j}px Segoe UI, Microsoft YaHei, sans-serif`,o.fillStyle=w,o.fillText(String(v),x,E,B)}function y(v,x,E,j,w=21){o.font=`${w}px Segoe UI, Microsoft YaHei, sans-serif`;let B="",k=0;for(const b of String(v))o.measureText(B+b).width>j?(g(B,x,E+k*(w+7),w,m,j),k++,B=b):B+=b;return g(B,x,E+k*(w+7),w,m,j),k+1}function u(v,x,E,j,w,B=v.width/v.height){const k=Math.min(j,w*B),b=k/B;o.drawImage(v,x+(j-k)/2,E+(w-b)/2,k,b)}g(c?"OceanScope | 场比较汇报":"OceanScope | Field comparison report",56,64,38),g("v2.10",1760,64,24),g(`A · ${n.labels.a}`,56,108,25,"#168ba9",870),n.single||g(`B · ${n.labels.b}`,986,108,25,"#c6752a",878),g(`${c?"帧":"Frame"} ${l.frame} · ${n.group.toUpperCase()} ${l.component} · ${l.plane?.startsWith("oblique")?`${(l.rotation_axis||"y").toUpperCase()} ${l.angle_degrees}° / ${He(l.section_percent)}%`:l.plane.toUpperCase()+" / "+l.slice_index} · ${c?"数值单位":"Value unit"} ${n.unit}`,56,151),g(n.single?c?"单组 GT；未提供预测，不计算比较误差。":"Single GT; no prediction and no comparison errors.":n.group==="sdf"?c?"SDF 数值差，不等于水面高度差；有效范围以当前数据的掩码为准。":"SDF field differences are not surface-height errors; validity follows the supplied masks.":c?"速度分量差 / 端点误差；瞬时矢量不是粒子轨迹。":"Velocity component differences / endpoint errors; instantaneous vectors are not particle paths.",56,190,22,m),g(`${c?"三维显示":"3D view"}: ${l.mode} · A ${l.gt_visible?"on":"off"}${n.single?"":` / B ${l.prediction_visible?"on":"off"}`} · ${c?"着色":"shading"}: ${l.shading||"original"} · ${c?"显示精度":"quality"}: ${l.preview_quality}`,56,228,22,m),o.fillStyle="#f4f8fb",o.fillRect(56,250,1808,480),u(a,56,250,1808,480);const p=t.length,d=28,h=(1808-d*(p-1))/p;if(t.forEach((v,x)=>{const E=56+x*(h+d),j=x===2?n.errorRange:n.sourceRange;g(n.titles[x],E,782,25,f,h),g(`${He(j[0])} … ${He(j[1])} ${n.unit}`,E,818,21,m,h),o.imageSmoothingEnabled=!1,u(v,E,840,h,310,n.aspects[x]),o.imageSmoothingEnabled=!0;const w=o.createLinearGradient(E,0,E+h,0);w.addColorStop(0,x===2?n.epe?"#f6f0fc":"#205bb1":"#ebf4fc"),x===2&&!n.epe&&w.addColorStop(.5,"#f6f8fa"),w.addColorStop(1,x===2?n.epe?"#672096":"#c94237":"#1f6fb0"),o.fillStyle=w,o.fillRect(E,1170,h,14),g(`${c?"有效":"Valid"}: ${n.counts[x].valid}/${n.counts[x].total} · ${c?"探针":"Probe"}: ${He(n.probes[x])} ${n.unit}`,E,1220,20,m,h)}),g(c?"当前切片与局部区域":"Current slice and selected region",56,1280,27),n.single)g(c?"仅展示 GT 切片及有效样本；无 A/B 差异统计。":"GT slice and validity only; no A/B statistics.",56,1335,23,m);else{const v=[[c?"完整切片":"Full slice",n.whole],...n.local?.region?[[c?"黄色选区":"Yellow region",n.local]]:[]];g(`${n.epe?"Mean EPE":c?"平均有符号差":"Mean signed"} | ${n.epe?"RMS EPE":"MAE / RMSE"} | ${c?"共同有效 / 候选":"Common valid / candidates"}`,400,1280,22,m,1460),v.forEach(([x,E],j)=>{const w=1310+j*65;o.fillStyle="#f1f6f9",o.fillRect(56,w,1808,55),g(x,76,w+36),g(`${He(E?.mean)} | ${n.epe?He(E?.rmse):`${He(E?.mae)} / ${He(E?.rmse)}`} ${n.unit} | ${E?.count??0}/${E?.total??0} (${He((E?.coverage??0)*100)}%)`,400,w+36,24)})}g(c?"已有全域指标 · 当前帧 · 原始有效范围":"Saved volume metrics · current frame · original support",56,1480,27);const _=n.savedFrameMetrics;if(n.single||!_||_.blocked)g(n.single?c?"不适用：单组查看。":"Not applicable: single dataset.":c?"此帧无可用评分。":"No available scores for this frame.",56,1530,24,m);else{const v=n.group==="sdf"?["mae","rmse","fluidIoU","coverage"]:["meanEpe","epeRmse","coverage"];g(v.map(x=>`${x}: ${He(_[x])}${x==="coverage"||x==="fluidIoU"?"":` ${n.unit}`}`).join("   |   "),56,1530,24)}const C=_?.notice||_?.reason||(n.single?"No prediction provided.":"Missing samples are excluded, never zero.");y(C,56,1575,1808),y(c?"黄色表示选区，虚线表示探针。三维平滑只改变光照法线；原始顶点、切片与指标保持不变。坐标使用源网格坐标单位。":"Yellow marks the region; dashed lines mark the probe. Smooth shading changes lighting normals only. Original vertices, slices and metrics are unchanged. Coordinates use source-grid units.",56,1670,1808,21),g(`${l.comparison_id} · ${c?"完整设置与数值请另存汇报 JSON":"Save report JSON for complete settings and values"}`,56,1760,20,m),await jc(r,i)}function sr(n,a){let t=1/0,s=-1/0;return n.forEach((i,c)=>{if(!i)return;const r=a[c];for(let o=0;o<i.values.length;o+=1){if(r&&!r.values[o])continue;const l=i.values[o];Number.isFinite(l)&&(t=Math.min(t,l),s=Math.max(s,l))}}),Number.isFinite(t)?[t,s]:[0,1]}function ir({frame:n,group:a,plane:t,sliceIndex:s,crosshair:i,onCrosshair:c,component:r="magnitude",fixedRange:o=null,lattice:l,single:f=!1,label:m="Dataset",frameNumber:g,frameSplit:y,viewMetadata:u={},angle:p=30,sectionPercent:d=50,rotationAxis:h="y",exportStem:_="comparison",errorScale:C,onErrorScale:v,region:x=null,onRegion:E,onInspection:j,inspectionContext:w,busy:B=!1,captureScene:k,reportReady:b=!1,reportLabels:R={},savedMetrics:M}){const{tr:A,language:P}=ie(),F=P==="zh",N=S.useRef(null),[W,T]=S.useState(!1),[H,O]=S.useState(1),[z,Z]=S.useState(""),X=C?.locked??W,$=C?.limit??H,D=G=>v?v({locked:G,limit:$}):T(G),J=G=>v?v({locked:X,limit:G}):O(G),Q=S.useMemo(()=>Dn(n,a),[n,a]),be=S.useMemo(()=>t==="oblique"?ot(l,p,d,h):null,[t,l,p,d,h]),le=S.useMemo(()=>["groundTruth","prediction","error"].map(G=>t==="oblique"?Ci(n,Q[G],r,l,be):Hc(n,Q[G],t,s,r)),[n,Q,t,s,r,l,be]),ye=S.useMemo(()=>["groundTruth","prediction","error"].map((G,L)=>t==="oblique"?le[L]?.maskSlice:Q[G]?.maskId?Ja(n,Q[G].maskId,t,s):null),[n,Q,t,s,le]),we=S.useMemo(()=>f?null:es(le,ye,x),[f,le,ye,x]),$e=S.useMemo(()=>f?null:es(le,ye),[f,le,ye]),Me=S.useMemo(()=>mc(l,t,s,be,le[0],x,i),[l,t,s,be,le,x,i]);S.useEffect(()=>{j?.({context:w,value:B?null:Me})},[j,w,Me,B]);const Be=o||sr(le.slice(0,2),ye.slice(0,2)),V=a==="velocity"&&r==="magnitude",K=X&&er($,V)||(le[2]?(V?Gc:Zc)(le[2].values):[-1,1]),ae=[f?m:"Ground Truth","Prediction",V?"Endpoint Error |Pred − GT|":"Signed Error (Pred − GT)"],Re=t==="xy"?[0,1]:t==="xz"?[0,2]:[1,2],Ve=be?[Math.max(be.spacing[0],1e-9),be.spacing[1],1]:l?.voxelSize||[1,1,1],Ke=G=>be?be.degenerate?1:Math.max(.15,(be.range[1]-be.range[0])/((be.height-1)*be.spacing[1])):G.width*Ve[Re[0]]/(G.height*Ve[Re[1]]),on=le.map((G,L)=>Qc(G,ye[L])),Hn=t==="xy"?2:t==="yz"?0:1,Cn=be?be.point(0,0):l?.origin?.map((G,L)=>G+s*l.axisSteps[Hn][L]),un=`Frame ${g??"unknown"} | ${_a(y,g)} | ${dt(y,g)} | ${a} ${r} | ${t==="oblique"?`Oblique ${h.toUpperCase()} ${p}° / ${d.toFixed(1)}%`:t.toUpperCase()+" index "+s}`;function qn(G){const L=le[0];c([(G%L.width+.5)/L.width,(Math.floor(G/L.width)+.5)/L.height])}function Ba(){ns(`${_}_${g}_local_diagnosis.json`,JSON.stringify({schema:"oceanscope.slice-diagnosis.v1",metadata:u,group:a,component:r,unit:Q.unit||"undeclared",difference:V?"vector_endpoint_error":"signed_B_minus_A",local:we,whole:$e,world_region_corners:Me?.corners,probe_world:Me?.probe,scope:"current_slice_only_saved_volume_scores_unchanged",validity:"Intersection of finite A/B/error samples and their existing masks"},null,2))}function Ln(){const G=le.map((L,ee)=>{if(!L)return null;const me=Math.min(L.width-1,Math.floor(i[0]*L.width))+L.width*Math.min(L.height-1,Math.floor(i[1]*L.height));return(!ye[ee]||ye[ee].values[me])&&Number.isFinite(L.values[me])?L.values[me]:null});return ar({metadata:{...u,source_color_range:Be,error_color_range:f?null:K,error_range_locked:X,probe_world:Me?.probe,world_region_corners:Me?.corners},labels:R,single:f,group:a,epe:V,unit:Q.unit,local:we,whole:$e,counts:on,probes:G,sourceRange:Be,errorRange:K,metrics:M,titles:ae,aspects:le.map(L=>L?Ke(L):1)})}async function An(G=!1){try{if(!b)throw Error(F?"等待当前帧加载完成。":"Wait for the current frame.");const L=k(),ee=Ln();G?ns(`${_}_${g}_report.json`,JSON.stringify(ee,null,2)):await tr(ee,L,[...N.current.querySelectorAll("canvas")],P,`${_}_${g}_report.png`),Z("")}catch(L){Z(L.message)}}async function hn(){try{const G=[...N.current.querySelectorAll("canvas")],L=document.createElement("canvas");L.width=1800,L.height=920;const ee=L.getContext("2d");ee.fillStyle="white",ee.fillRect(0,0,1800,920),ee.fillStyle="#18374d",ee.font="20px sans-serif",ee.fillText("OceanScope | "+_,25,35,1740),ee.fillText(un,25,70,1740),ee.fillText("Plane origin (world units): "+(Cn?.map(me=>me.toPrecision(5)).join(", ")||"undeclared"),25,105,1740),G.forEach((me,xe)=>{const Se=25+xe*590,ve=xe===2?K:Be;ee.fillStyle="#18374d",ee.fillText(ae[xe],Se,155,560),ee.fillText(`${ve.map(gn=>gn.toPrecision(4)).join(" to ")} ${Q.unit||"undeclared"}`,Se,185,560);const qe=Ke(le[xe]),Y=Math.min(555,460*qe),Qe=Y/qe;ee.drawImage(me,Se,205,Y,Qe);const ne=ee.createLinearGradient(Se,0,Se+555,0);ne.addColorStop(0,xe===2?V?"#f6f0fc":"#205bb1":"#ebf4fc"),xe===2&&!V&&ne.addColorStop(.5,"#f6f8fa"),ne.addColorStop(1,xe===2?V?"#672096":"#c94237":"#1f6fb0"),ee.fillStyle=ne,ee.fillRect(Se,700,555,18),ee.fillStyle="#18374d",ee.fillText(`${ve[0].toPrecision(4)}                         ${ve[1].toPrecision(4)} ${Q.unit||""}`,Se,745,555),ee.fillText(`Valid slice samples: ${on[xe].valid}/${on[xe].total}`,Se,780,560)}),ee.fillText(`Source scale: ${o?"fixed":"auto per frame"}${f?"":` | Error scale: ${X?"fixed":"auto per frame"}`}`,25,830,1740),ee.fillText("Slice validity is not full-volume scoring coverage. Checkerboard = invalid. Source fields and scores unchanged.",25,865,1740),await Bc(L,`${_}_${g}_${t}_${t==="oblique"?p:s}_slices.png`,{...u,source_color_range:Be,error_color_range:K,error_range_locked:X,local_diagnosis:we,world_region_corners:Me?.corners}),Z("")}catch(G){Z(G.message)}}return e.createElement("div",{"data-os-loc":"src/field/SliceTriptych.jsx:70:10","data-review-frame":g,"data-review-slice":un,ref:N,inert:B||void 0},e.createElement("div",{"data-os-loc":"src/field/SliceTriptych.jsx:70:111",className:"frame-split-toolbar"},k&&e.createElement(e.Fragment,null,e.createElement("button",{"data-os-loc":"src/field/SliceTriptych.jsx:70:165","data-os-action":"",className:"report-export",disabled:!b,onClick:()=>An()},F?"导出场一页汇报图":"Export field report PNG"),e.createElement("button",{"data-os-loc":"src/field/SliceTriptych.jsx:70:302","data-os-action":"",disabled:!b,onClick:()=>An(!0)},F?"导出汇报 JSON":"Export report JSON")),!f&&e.createElement(e.Fragment,null,e.createElement("label",{"data-os-loc":"src/field/SliceTriptych.jsx:70:429"},e.createElement("input",{"data-os-loc":"src/field/SliceTriptych.jsx:70:436","data-os-action":"",type:"checkbox",checked:X,onChange:G=>D(G.target.checked)}),F?"固定误差色标（跨帧）":"Lock error scale across frames"),X&&e.createElement("label",{"data-os-loc":"src/field/SliceTriptych.jsx:70:586"},F?"误差上限":"Error limit"," ",e.createElement("input",{"data-os-loc":"src/field/SliceTriptych.jsx:70:619","data-os-action":"","aria-label":"Error scale limit",type:"number",min:"0.000001",step:"0.1",value:$,onChange:G=>{const L=Number(G.target.value);L>0&&Number.isFinite(L)&&J(L)}}))),e.createElement("button",{"data-os-loc":"src/field/SliceTriptych.jsx:70:821","data-os-action":"",onClick:hn,disabled:le.some((G,L)=>L<(f?1:3)&&!G)},f?F?"导出切片 PNG":"Export slice PNG":F?"导出并排切片 PNG":"Export slice comparison PNG")),e.createElement("small",{"data-os-loc":"src/field/SliceTriptych.jsx:70:1005"},un," · ",F?"有效样本比例仅针对当前切片，不等于全域计算覆盖率。":"Validity below is for this slice, not full-volume scoring coverage."),z&&e.createElement("p",{"data-os-loc":"src/field/SliceTriptych.jsx:70:1149",role:"alert"},z),e.createElement("section",{"data-os-loc":"src/field/SliceTriptych.jsx:70:1183",className:"slice-triptych","aria-label":`${a} synchronized slices`},le.slice(0,f?1:3).map((G,L)=>{const ee=G&&i?Math.min(G.width-1,Math.floor(i[0]*G.width))+G.width*Math.min(G.height-1,Math.floor(i[1]*G.height)):null,me=ee!==null&&(!ye[L]||ye[L].values[ee])&&Number.isFinite(G.values[ee]);return e.createElement("figure",{"data-os-loc":"src/field/SliceTriptych.jsx:71:338","data-review-id":"field-slice-"+a+"-"+L,key:ae[L]},e.createElement("figcaption",{"data-os-loc":"src/field/SliceTriptych.jsx:71:414"},e.createElement("strong",{"data-os-loc":"src/field/SliceTriptych.jsx:71:426"},ae[L]),e.createElement("span",{"data-os-loc":"src/field/SliceTriptych.jsx:71:458"},L===2?`${K[0].toPrecision(3)} … ${K[1].toPrecision(3)}`:`${Be[0].toPrecision(3)} … ${Be[1].toPrecision(3)}`," ",Q.unit||A("(unit undeclared)"))),G?e.createElement(mt,{slice:G,maskSlice:ye[L],range:L===2?K:Be,palette:L===2?V?"absolute-error":"error":"ground-truth",aspect:Ke(G),crosshair:i,onCrosshair:c,plane:t,region:x}):e.createElement("div",{"data-os-loc":"src/field/SliceTriptych.jsx:71:909",className:"slice-unavailable"},A("Not available")),e.createElement("small",{"data-os-loc":"src/field/SliceTriptych.jsx:71:972"},A("Probe: "),me?G.values[ee].toPrecision(6):A("Not valid")," ",Q.unit," · ",a==="velocity"?r:A("SDF")))})),!f&&we&&e.createElement(bc,{region:x,onRegion:E,local:we,whole:$e,onLocate:qn,dimensions:2,unit:Q.unit||(F?"单位未声明":"undeclared"),absolute:V,onExport:Ba}),e.createElement("p",{"data-os-loc":"src/field/SliceTriptych.jsx:72:203",className:"height-note"},F?"三维白圈表示探针在切面上的位置；黄色框为选中区域，不代表水面高度。":"The 3D white ring marks the probe on this slice; the yellow box marks the selected region, not water-surface height."),be&&e.createElement("p",{"data-os-loc":"src/field/SliceTriptych.jsx:72:400",className:"height-note"},h==="y"?F?"横轴 s 沿切面，纵轴 Y 向上；使用原始网格坐标单位。斜切不会改变下方保存的全域统计。":"Horizontal: along-section distance s; vertical: Y up. Source-grid coordinates. Oblique inspection does not change saved volume statistics.":F?"横纵轴均沿当前倾斜切面，不等于世界坐标中的高度 Y。使用原始网格坐标单位；全域统计保持不变。":"Both axes lie in the tilted plane; the vertical axis is not world height Y. Source-grid coordinates; saved volume statistics remain unchanged."),e.createElement("div",{"data-os-loc":"src/field/SliceTriptych.jsx:72:844",className:"frame-split-toolbar"},on.slice(0,f?1:3).map((G,L)=>e.createElement("small",{"data-os-loc":"src/field/SliceTriptych.jsx:72:920",key:L},ae[L],": ",G.valid,"/",G.total," · ",G.fraction==null?"N/A":(100*G.fraction).toFixed(1)+"%"))))}const Ts={mae:"MAE",rmse:"RMSE",maxAbsoluteError:"Maximum absolute error",nearSurfaceMae:"Near-surface MAE",signAccuracy:"Sign accuracy",fluidIoU:"Fluid IoU",dice:"Dice",symmetricMeanSurfaceDistance:"Symmetric mean surface distance",hd95:"HD95",meanEpe:"Mean EPE",epeRmse:"EPE RMSE",epeP95:"EPE P95",relativeL2:"Relative L2",meanCosineSimilarity:"Mean cosine similarity",meanAngularErrorDegrees:"Mean angular error",divergenceMae:"Divergence MAE",coverage:"Coverage",validCount:"Valid voxels"},cr=["nearSurfaceMae","rmse","fluidIoU","meanEpe","epeP95","relativeL2","coverage","mae","maxAbsoluteError","signAccuracy","dice","symmetricMeanSurfaceDistance","hd95","epeRmse","componentMae","componentRmse","meanCosineSimilarity","meanAngularErrorDegrees","divergenceMae","validCount","nonFiniteCount","nearSurfaceCount","surfaceSampleCount","angularExcludedCount","divergenceStencilCount","trustedTau","effectiveBand"];Object.assign(Ts,{componentMae:"Component MAE (x, y, z)",componentRmse:"Component RMSE (x, y, z)",nonFiniteCount:"Non-finite pairs excluded",nearSurfaceCount:"Near-surface voxels",surfaceSampleCount:"Surface samples (pooled)",angularExcludedCount:"Angular exclusions",divergenceStencilCount:"Divergence stencils",trustedTau:"Trusted truncation τ",effectiveBand:"Effective band"});function rr({metrics:n,group:a,unit:t,frame:s}){const{tr:i,language:c}=ie(),r=n?.[a],o=a==="sdf"?["mae","rmse","fluidIoU","coverage"]:["meanEpe","epeRmse","coverage"],l=r?cr.filter(m=>r[m]!==void 0):[],f=m=>e.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:14:21",key:m},e.createElement("span",{"data-os-loc":"src/field/MetricsPanel.jsx:14:36"},i(Ts[m])),e.createElement("strong",{"data-os-loc":"src/field/MetricsPanel.jsx:14:66"},r[m]===null?i("Not available"):Array.isArray(r[m])?r[m].map(g=>g==null?"N/A":Number(g).toPrecision(4)).join(" / "):typeof r[m]=="number"?r[m].toLocaleString(void 0,m.endsWith("Count")?{}:{maximumSignificantDigits:5}):String(r[m])),e.createElement("small",{"data-os-loc":"src/field/MetricsPanel.jsx:14:363"},["mae","rmse","maxAbsoluteError","nearSurfaceMae","symmetricMeanSurfaceDistance","hd95","meanEpe","epeRmse","epeP95","componentMae","componentRmse","trustedTau","effectiveBand"].includes(m)?t:m==="coverage"?i("fraction"):m==="meanAngularErrorDegrees"?i("degrees"):m==="divergenceMae"?i(t==="m/s"?"1/s":"velocity / length"):""));return e.createElement("aside",{"data-os-loc":"src/field/MetricsPanel.jsx:15:10",className:"metrics-panel"},e.createElement("h3",{"data-os-loc":"src/field/MetricsPanel.jsx:15:43"},a==="sdf"?c==="zh"?"体积 SDF 指标":"Volumetric SDF metrics":c==="zh"?"原网格速度指标":"Native-grid velocity metrics"),e.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:181",className:"metric-scope"},c==="zh"?`帧 ${s??"—"} · 原网格有效体素 · 不随选区改变`:`Frame ${s??"—"} · Valid native-grid voxels · Independent of ROI`),r?.notice&&e.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:354",role:"note"},c==="zh"&&r.noticeZh?r.noticeZh:i(r.notice)),r?.blocked?e.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:459",className:"score-blocked"},i(r.reason)||i("Scores blocked: declare field semantics and units.")):r?e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:15:637",className:"metric-grid"},o.filter(m=>l.includes(m)).map(f),l.filter(m=>m.endsWith("Count")).map(f)),e.createElement("details",{"data-os-loc":"src/field/MetricsPanel.jsx:15:776"},e.createElement("summary",{"data-os-loc":"src/field/MetricsPanel.jsx:15:785"},c==="zh"?"更多指标":"More metrics"),e.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:15:843",className:"metric-grid"},r.nearSurfaceDomain&&e.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:899"},i(r.nearSurfaceDomain),e.createElement("br",{"data-os-loc":"src/field/MetricsPanel.jsx:15:932"}),i("Band: "),r.effectiveBand?.toPrecision(4)," ",t),l.filter(m=>!o.includes(m)&&!m.endsWith("Count")).map(f)))):e.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:578"},i("Metrics are not available for this frame.")))}const jn="Common valid finite SDF voxels M; N = |M|. Interior means SDF ≤ 0.",tn="Common valid finite velocity voxels M; not automatically restricted to fluid interior.",ue=(n,a,t,s,i,c,r,o="")=>({id:n,label:a,formula:t,unitKind:s,direction:i,group:c,domain:r,caveats:o}),bt=[ue("mae","Water-surface elevation MAE","mean |ηp − ηg|","length","Lower","elevation","Paired trustworthy world-Y zero-crossing columns on common XZ lattice.","Not crest-to-trough wave height or Hs. Filled exterior, missing support and multiple crossings are excluded; inspect both coverage denominators."),ue("rmse","Water-surface elevation RMSE","sqrt(mean (ηp − ηg)^2)","length","Lower","elevation","Same paired height columns.","Full-resolution aligned SDF, never preview mesh."),ue("maxAbsoluteError","Maximum elevation error","max |ηp − ηg|","length","Lower","elevation","Same paired height columns."),ue("coverage","Height paired coverage","paired valid columns / GT valid columns","fraction","Context","elevation","GT reconstructible columns.","Zero denominator: N/A. Not SDF voxel coverage."),ue("gtCoverage","GT reconstructible coverage","GT valid columns / candidate XZ columns","fraction","Context","elevation","All candidate XZ columns.","Read with paired coverage to expose excluded GT surfaces."),ue("mae","SDF MAE","Σ |p − g| / N","length","Lower","sdf",jn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),ue("rmse","SDF RMSE","√(Σ (p − g)² / N)","length","Lower","sdf",jn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),ue("maxAbsoluteError","Maximum absolute error","max |p − g|","length","Lower","sdf",jn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),ue("nearSurfaceMae","Near-surface MAE","mean |clipτ(p) − clipτ(g)| on B","length","Lower","sdf","B = M ∩ {|g| ≤ effective band}, including numerical tolerance.","GT defines B. For TSDF, band ≤ shared τ; clip both values at τ. Shared τ is min of both TSDF τ values, or the single TSDF τ in a mixed pair. No clipping for full/full."),ue("signAccuracy","Sign accuracy","count[(p ≤ 0) = (g ≤ 0)] / N","fraction","Higher","sdf",jn),ue("fluidIoU","Fluid IoU","|P ∩ G| / |P ∪ G|","fraction","Higher","sdf",jn,"P and G are predicted and GT interior sets in M. Both empty: 1."),ue("dice","Dice","2 |P ∩ G| / (|P| + |G|)","fraction","Higher","sdf",jn,"Both interior sets empty: 1."),ue("symmetricMeanSurfaceDistance","Symmetric mean surface distance","mean(D(G→P) ∪ D(P→G))","length","Lower","sdf","Pooled nearest distances between sampled zero crossings; each surface uses its own valid support.","Approximation, at most 4096 samples per surface. Not exact continuous-mesh distance; unavailable if either surface is empty."),ue("hd95","HD95","percentile95(D(G→P) ∪ D(P→G))","length","Lower","sdf","Same pooled sampled-surface distances.","Linear percentile interpolation; not maximum Hausdorff distance. Surface-sampling limitations apply."),ue("meanEpe","Mean EPE","mean ‖p − g‖₂","speed","Lower","velocity",tn),ue("epeRmse","EPE RMSE","√mean ‖p − g‖₂²","speed","Lower","velocity",tn),ue("epeP95","EPE P95","percentile95(‖p − g‖₂)","speed","Lower","velocity",tn,"Linear interpolation between ordered samples."),ue("componentMae","Component MAE (x, y, z)","mean |pₖ − gₖ|, k = x,y,z","speed","Lower","velocity",tn),ue("componentRmse","Component RMSE (x, y, z)","√mean (pₖ − gₖ)², k = x,y,z","speed","Lower","velocity",tn),ue("relativeL2","Relative L2","√(Σ ‖p − g‖₂² / Σ ‖g‖₂²)","dimensionless","Lower","velocity",tn,"Unavailable when GT energy is zero; no artificial epsilon in denominator."),ue("meanCosineSimilarity","Mean cosine similarity","mean clamp((p·g)/(‖p‖₂ ‖g‖₂), −1, 1)","dimensionless","Higher","velocity",tn,"Exclude either magnitude ≤ ε (default 1e−8)."),ue("meanAngularErrorDegrees","Mean angular error","mean acos(cosine) × 180/π","degrees","Lower","velocity",tn,"Same nonzero-vector subset as cosine similarity."),ue("divergenceMae","Divergence MAE","mean |∇·p − ∇·g|","inverseTime","Lower","velocity","Six valid neighboring samples; finite central-difference divergence. Borders excluded.","Σₖ (vₖ(i+eₖ) − vₖ(i−eₖ))/(2hₖ). Orthogonal aligned lattice. Divergence mismatch, not absolute incompressibility."),ue("coverage","Coverage","N / total lattice voxels","fraction","Context","both","Reported separately for SDF and velocity.","Always read with the error: small valid support can hide missing predictions.")];function or(){return{schema:1,notation:"g = Ground Truth; p = Prediction. These are evaluation metrics, not a weighted training loss.",sequence:"Equal weight per valid frame, not pooled voxels. Excluded frame counts are reported. Population standard deviation; interpolated P95.",metrics:bt}}function lr(n){const a=n.filter(o=>typeof o=="number"&&Number.isFinite(o)).sort((o,l)=>o-l);if(!a.length)return{median:null,p95:null,stddev:null};const t=o=>{const l=(a.length-1)*o,f=Math.floor(l),m=l-f;return a[f]*(1-m)+a[Math.min(f+1,a.length-1)]*m},s=a.reduce((o,l)=>Math.max(o,Math.abs(l)),0),i=a.map(o=>s?o/s:0),c=i.reduce((o,l)=>o+l/a.length,0),r=Math.sqrt(i.reduce((o,l)=>o+(l-c)**2/a.length,0))*s;return{median:t(.5),p95:t(.95),stddev:Number.isFinite(r)?r:null}}function Ws(n){if(!Number.isSafeInteger(n?.frame)||!Number.isSafeInteger(n?.prediction_origin_frame)||!Number.isFinite(n?.fps)||n.fps<=0||n.prediction_type==="extrapolation"&&n.frame<=n.prediction_origin_frame)return null;const a=(n.frame-n.prediction_origin_frame)/n.fps;return Number.isFinite(a)?a:null}const dr={length:"m",speed:"m/s",inverseTime:"1/s",degrees:"degrees",fraction:"fraction",dimensionless:"dimensionless"};function fr(n,a={}){return n.flatMap(t=>bt.filter(s=>s.group===t||s.group==="both"&&t!=="elevation").flatMap(s=>{const i=s.unitKind==="length"?a.sdf??"m":s.unitKind==="speed"?a.velocity??"m/s":s.unitKind==="inverseTime"&&a.velocity&&a.velocity!=="m/s"?`(${a.velocity}) / length`:dr[s.unitKind],c={group:t,key:s.id,label:s.label,unit:i,direction:s.direction};return s.id==="componentMae"||s.id==="componentRmse"?["x","y","z"].map((r,o)=>({...c,id:`${t}.${s.id}.${r}`,index:o,label:`${s.id==="componentMae"?"Component MAE":"Component RMSE"} ${r.toUpperCase()}`})):[{...c,id:`${t}.${s.id}`}]}))}function mr({metrics:n,frames:a=[],expectedFrames:t=[],groups:s=[],status:i,units:c,frameSplit:r,frameSubset:o="all"}){const l=Object.values(n?.settings?.sdf||{}).some(C=>C?.semantics==="water_interior"),f=l?"gt_water_common_distance_support":n?.settings?.sdfEvaluationRegion||"full_domain",m=fr(s,c).map(C=>({...C,label:C.label+(l&&C.group==="sdf"?["fluidIoU","dice","signAccuracy","symmetricMeanSurfaceDistance","hd95"].includes(C.key)?" (full domain)":" (conditional GT-water support)":"")+(f==="gt_water"&&C.group==="sdf"?["fluidIoU","dice","symmetricMeanSurfaceDistance","hd95"].includes(C.key)?" (full domain)":" (GT water)":"")})),g=new Set(a),y=[...t,...a,...Object.keys(n?.frames||{}).map(Number),...n?.missingPredictionFrames||[]],u=new Map((r?.rows??[]).map(C=>[C.frame,C])),p=[...new Set(y.filter(Number.isInteger))].sort((C,v)=>C-v).filter(C=>Lc(u,C,o)),d=p.map(C=>{const v=n?.frames?.[C],x={};for(const w of m){const B=v?.[w.group],k=B?.[w.key],b=w.index===void 0?k:k?.[w.index];x[w.id]=!B?.blocked&&Number.isFinite(b)?b:null}const E=s.filter(w=>w!=="elevation"&&v?.[w]?.blocked).map(w=>`${w}: ${v[w].reason||"Scoring blocked"}`).join("; "),j=u.get(C);return{frame:C,elevationAudit:v?.elevation??null,algorithmVersion:n?.algorithmVersion??"legacy undeclared",split:_a(u,C),predictionType:dt(u,C),predictionOriginFrame:j?.prediction_origin_frame??null,fps:j?.fps??null,horizonSeconds:Ws(j),available:g.has(C),calculated:!!v,reason:E,values:x}}),h=m.map(C=>{const v=d.map(j=>j.values[C.id]).filter(Number.isFinite),x=v.length,E=x?v.reduce((j,w)=>j+w/x,0):null;return{...C,mean:E,...lr(v),minimum:x?v.reduce((j,w)=>Math.min(j,w)):null,maximum:x?v.reduce((j,w)=>Math.max(j,w)):null,valid:x,excluded:d.length-x,total:d.length}}),_=[...new Set(p.flatMap(C=>s.filter(v=>v!=="elevation").flatMap(v=>n?.frames?.[C]?.[v]?.blocked?[`${v.toUpperCase()}: ${n.frames[C][v].reason||"Scoring prerequisites not met"}`]:[])))];return{columns:m,rows:d,summary:h,blockedReasons:_,evaluationRegion:f,frameSubset:o,sdfValidation:n?.settings?.sdf||{},total:d.length,calculated:d.filter(C=>C.calculated).length,complete:i==="ready"&&d.length>0&&d.every(C=>C.calculated)&&!_.length,status:i}}function ke(n){return Number.isFinite(n)?Number(n.toPrecision(6)).toString():"N/A"}const br=n=>{const a=n==null?"N/A":String(n);return/[",\r\n]/.test(a)?`"${a.replaceAll('"','""')}"`:a};function cs(n,a){const t=n.complete?"complete":"partial",s=a==="frames"?[["frame","frame_status","sequence_status",...n.columns.map(i=>`${i.id} [${i.unit}]`),"excluded_reason"],...n.rows.map(i=>[i.frame,i.reason?"scoring blocked":i.calculated?"calculated":"not calculated",t,...n.columns.map(c=>i.values[c.id]),i.reason||""])]:[["metric","unit","mean","minimum","maximum","valid_frames","excluded_frames","total_frames","sequence_status","median","p95","stddev"],...n.summary.map(i=>[i.id,i.unit,i.mean,i.minimum,i.maximum,i.valid,i.excluded,i.total,t,i.median,i.p95,i.stddev])];return a==="frames"&&(s[0].push("split","prediction_type","prediction_origin_frame","fps","horizon_seconds"),s.slice(1).forEach((i,c)=>i.push(n.rows[c].split||"unassigned",n.rows[c].predictionType||"unassigned",n.rows[c].predictionOriginFrame,n.rows[c].fps,n.rows[c].horizonSeconds))),a==="frames"&&(s[0].push("algorithm_version","elevation_valid_columns","elevation_gt_valid_columns","elevation_candidate_columns","elevation_reason","elevation_excluded_reasons"),s.slice(1).forEach((i,c)=>{const r=n.rows[c],o=r.elevationAudit;i.push(r.algorithmVersion,o?.validColumns,o?.gtValidColumns,o?.candidateColumns,o?.reason||(o?"":"Not calculated by this result version"),JSON.stringify(o?.excludedReasons??{}))})),s[0].push("frame_subset"),s.slice(1).forEach(i=>i.push(n.frameSubset||"all")),s[0].push("sdf_error_region","geometry_region"),s.slice(1).forEach(i=>i.push(n.evaluationRegion||"full_domain","full_domain")),s[0].push("gt_validation_mode","prediction_validation_mode","gt_override_reason","prediction_override_reason"),s.slice(1).forEach(i=>i.push(n.sdfValidation?.gt?.validationMode||"legacy undeclared",n.sdfValidation?.prediction?.validationMode||"legacy undeclared",n.sdfValidation?.gt?.overrideReason||"",n.sdfValidation?.prediction?.overrideReason||"")),s.map(i=>i.map(br).join(",")).join(`\r
`)}function pr(n,a,t=640){const i=n.filter(d=>Number.isFinite(d.values[a])).map(d=>d.values[a]);let c=i.length?Math.min(...i):0,r=i.length?Math.max(...i):1;if(c===r){const d=Math.max(Math.abs(c)*.05,1e-6);c-=d,r+=d}const o=n[0]?.frame??0,l=n.at(-1)?.frame??o,f=d=>l===o?(t+42)/2:64+(d-o)/(l-o)*(t-86),m=d=>180-(d-c)/(r-c)*150,g=[],y=[];let u=[],p=null;for(const d of n){const h=d.values[a];if((!Number.isFinite(h)||p!==null&&d.frame!==p+1)&&(u.length&&g.push(u),u=[]),Number.isFinite(h)){const _={frame:d.frame,value:h,x:f(d.frame),y:m(h)};u.push(_),y.push(_)}p=d.frame}return u.length&&g.push(u),{min:c,max:r,start:o,end:l,x:f,y:m,points:y,segments:g}}function ur(n,a,t=.9){const s=n.filter(c=>Number.isFinite(c.values[a?.id]));return{worst:a?.direction==="Context"?[]:[...s].sort((c,r)=>(a?.direction==="Higher"?1:-1)*(c.values[a.id]-r.values[a.id])||c.frame-r.frame).slice(0,5),lowCoverage:n.filter(c=>Number.isFinite(c.values[`${a?.group}.coverage`])&&c.values[`${a.group}.coverage`]<t),unavailable:n.filter(c=>!Number.isFinite(c.values[a?.id]))}}const hr=n=>`"${String(n??"undeclared").replaceAll('"','""')}"`;function gr(n,a,t){const s=[["report_identifier",a],["frame_subset",n.frameSubset],["frame_numbers",n.rows.map(i=>i.frame).join(";")],["frame_count",n.rows.length],["status",n.complete?"complete":"partial"],["sdf_error_region",n.evaluationRegion],["units",JSON.stringify(n.columns.map(i=>({metric:i.id,unit:i.unit})))],["sdf_declarations",JSON.stringify(n.sdfValidation)],["split_manifest_sha256",t?.sha256],["aggregation","Equal weight per valid frame; mean of frame RMSE, not pooled voxel RMSE. N/A excluded, never zero."],["valid_counts",JSON.stringify(n.summary.map(i=>({metric:i.id,valid:i.valid,total:i.total})))],["limitations","SDF error is not wave-height error. Read error with coverage. Frame numbers do not certify physical-time alignment. Split membership is declared, not independently verified. Exterior-filled distances are conditional, not full-domain accuracy."],["provenance","Use the saved-result ZIP for source identities and full scoring protocol. This notes file describes the currently selected report subset."]];return[["field","value"],...s].map(i=>i.map(hr).join(",")).join(`\r
`)}function yr({report:n,metric:a,onFrame:t,onDownload:s,comparisonId:i,frameSplit:c}){const{language:r,tr:o}=ie(),l=r==="zh",f=(p,d)=>l?d:p,[m,g]=S.useState(.9),y=S.useMemo(()=>ur(n.rows,a,m),[n.rows,a,m]),u=(p,d)=>p.slice(0,20).map(h=>e.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:9:51",key:h.frame},e.createElement("button",{"data-os-loc":"src/field/FrameReview.jsx:9:69","data-os-action":"",disabled:!h.available||!t,"aria-label":`${d==="unavailable"?"Review unavailable frame":d==="coverage"?"Review coverage frame":"Review frame"} ${h.frame}`,onClick:()=>t(h.frame)},h.frame)," · ",ke(d==="coverage"?h.values[`${a?.group}.coverage`]:h.values[a?.id]),d==="unavailable"&&e.createElement("span",{"data-os-loc":"src/field/FrameReview.jsx:9:426"}," · ",h.reason||(h.calculated?f("Metric unavailable on this support; see definitions below","该指标在当前有效区域不可用，请查看下方定义"):f("Not calculated / missing frame","尚未计算或帧缺失")))));return e.createElement("details",{"data-os-loc":"src/field/FrameReview.jsx:10:9",className:"frame-review"},e.createElement("summary",{"data-os-loc":"src/field/FrameReview.jsx:10:43"},f("Frame review & report notes","异常帧检查与报告说明")),e.createElement("p",{"data-os-loc":"src/field/FrameReview.jsx:11:3"},f("Review only: no frames are removed and no scores are changed. Lists follow the selected subset and metric. Worst does not mean statistically abnormal.","仅供检查：不剔除帧、不改变数值。列表跟随当前集合和指标；最差帧不等同于统计异常。")),e.createElement("div",{"data-os-loc":"src/field/FrameReview.jsx:12:3",className:"frame-review-grid"},e.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:12:38"},e.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:12:47"},f("Worst 5 frames","表现最差的 5 帧")," · ",o(a?.label)),y.worst.length?e.createElement("ol",{"data-os-loc":"src/field/FrameReview.jsx:12:132"},u(y.worst,"worst")):e.createElement("p",{"data-os-loc":"src/field/FrameReview.jsx:12:171"},f("No rankable finite values. Coverage is context, not accuracy.","没有可排序的有效数值；覆盖率是背景信息，不代表精度。"))),e.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:13:3"},e.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:13:12"},f("Low coverage","低覆盖率")," · ",y.lowCoverage.length),e.createElement("label",{"data-os-loc":"src/field/FrameReview.jsx:13:77"},f("Review threshold","检查阈值")," ",e.createElement("input",{"data-os-loc":"src/field/FrameReview.jsx:13:115","data-os-action":"","aria-label":"Coverage review threshold",type:"number",min:"0",max:"1",step:"0.05",value:m,onChange:p=>{const d=Number(p.target.value);p.target.value!==""&&Number.isFinite(d)&&d>=0&&d<=1&&g(d)}})),e.createElement("small",{"data-os-loc":"src/field/FrameReview.jsx:13:348"},f("Below this fraction; review aid, not a scientific pass/fail criterion.","低于此比例时列出；仅辅助检查，不是科研合格线。")),e.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:13:466"},u(y.lowCoverage,"coverage"))),e.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:14:3"},e.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:14:12"},f("Unavailable metric","指标不可用")," · ",y.unavailable.length),e.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:14:84"},u(y.unavailable,"unavailable")),e.createElement("small",{"data-os-loc":"src/field/FrameReview.jsx:14:134"},f("At most 20 entries per list; all values remain in the frame table and CSV.","每个列表最多显示 20 项，全部数据仍保留在逐帧表格和 CSV。")))),e.createElement("details",{"data-os-loc":"src/field/FrameReview.jsx:15:3"},e.createElement("summary",{"data-os-loc":"src/field/FrameReview.jsx:15:12"},f("How to interpret these results","如何解读这些结果")),e.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:15:79"},e.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:16:4"},f("N/A is not zero: it may mean missing frames, blocked scoring, no valid samples, or an unsupported metric. The list gives known blocking reasons; metric definitions explain other restrictions.","N/A 不是零：可能是缺帧、计算被阻止、无有效样本或指标不适用。列表显示已知阻止原因，其余限制见指标定义。")),e.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:17:4"},f("A lower error with lower coverage is not automatically better. Compare models on matching frames and common spatial support.","误差更低但覆盖率更低，不自动代表更好。模型比较应使用匹配帧和共同有效空间区域。")),e.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:18:4"},f("Exterior-filled SDF supports conditional interior distance errors only; it does not certify full-domain distance accuracy. Surface metrics may be unavailable.","水外固定填值的 SDF 只支持有条件的水内距离误差，不能证明全域距离精度；表面指标可能不可用。")),e.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:19:4"},f("SDF MAE is not wave-height MAE. Sequence means give equal weight to valid frames, not to pooled voxels.","SDF MAE 不等于浪高 MAE。序列均值对有效帧等权，并非将所有体素合并计算。")))),e.createElement("button",{"data-os-loc":"src/field/FrameReview.jsx:21:3","data-os-action":"",disabled:!n.total,onClick:()=>s(`${i}_${n.frameSubset}_report_notes.csv`,gr(n,i,c))},f("Export report notes CSV","导出报告说明 CSV")))}function xr({point:n,row:a,selected:t,onFrame:s,language:i}){const c=!!(s&&a?.available),r=a?.predictionType||"unassigned",o={train:"#b66b14",validation:"#8052bc",test:"#008c9c",unassigned:"#7b8794"}[a?.split||"unassigned"];return e.createElement("g",{"data-os-loc":"src/field/FrameCurvePoint.jsx:5:9","data-os-action":"",transform:`translate(${n.x},${n.y})`,role:"button","aria-label":`${i==="zh"?"选择曲线帧":"Select plotted frame"} ${n.frame}`,"aria-disabled":!c,tabIndex:c?0:-1,onClick:()=>c&&s(n.frame),onKeyDown:l=>{c&&["Enter"," "].includes(l.key)&&(l.preventDefault(),s(n.frame))},style:{cursor:c?"pointer":"default"}},e.createElement("title",{"data-os-loc":"src/field/FrameCurvePoint.jsx:6:2"},`Frame ${n.frame}: ${n.value} | ${a?.split||"unassigned"} | ${r}`),e.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:6:89",r:"7",fill:"transparent"}),t&&e.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:7:13",r:"7",fill:"none",stroke:"#d36218",strokeWidth:"2"}),r==="anchor"?e.createElement("rect",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:19",x:"-4",y:"-4",width:"8",height:"8",fill:o}):r==="extrapolation"?e.createElement("path",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:98",d:"M 0 -5 L 5 4 L -5 4 Z",fill:o}):r==="interpolation"?e.createElement("path",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:168",d:"M 0 -5 L 5 0 L 0 5 L -5 0 Z",fill:o}):e.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:221",r:"3",fill:o}))}function vr({rows:n,metricKey:a,manifest:t,modelName:s}){const{language:i}=ie(),c=i==="zh",r=new Map;let o=0;const l=new Map((t?.rows??[]).map(f=>[f.frame,f]));for(const f of n){const m=l.get(f.frame);if(m?.prediction_type!=="extrapolation")continue;const g=Ws(m);if(g===null){o++;continue}const y=`${m.prediction_origin_frame} / ${m.fps} fps`;r.has(y)||r.set(y,[]),r.get(y).push({frame:f.frame,seconds:g,value:f.values[a]})}return!r.size&&!o?null:e.createElement("details",{"data-os-loc":"src/field/PredictionTrend.jsx:18:9"},e.createElement("summary",{"data-os-loc":"src/field/PredictionTrend.jsx:18:18"},s&&`${s} · `,c?"未来外推时间趋势":"Future prediction horizon"),e.createElement("p",{"data-os-loc":"src/field/PredictionTrend.jsx:18:110"},c?"按声明的输入起点和 FPS 分图；缺失帧不连线，不合并不同预测。":"Separate plots for declared origin and FPS; missing frames are not connected and different predictions are not merged."),o>0&&e.createElement("p",{"data-os-loc":"src/field/PredictionTrend.jsx:19:14"},c?`${o} 帧缺少有效时间声明，仍使用上方帧号曲线。`:`${o} frame(s) without valid timing; retain the frame-number plot above.`),[...r].map(([f,m])=>{const g=m.filter(_=>Number.isFinite(_.value)),y=Math.max(1,...m.map(_=>_.seconds)),u=g.length?Math.min(...g.map(_=>_.value)):0,p=g.length?Math.max(...g.map(_=>_.value)):1,d=_=>50+_.seconds/y*510,h=_=>160-(_.value-u)/(p-u||1)*120;return e.createElement("figure",{"data-os-loc":"src/field/PredictionTrend.jsx:24:10",key:f},e.createElement("figcaption",{"data-os-loc":"src/field/PredictionTrend.jsx:24:28"},c?"预测起点":"Prediction origin"," ",f," · ",a),e.createElement("svg",{"data-os-loc":"src/field/PredictionTrend.jsx:24:104",role:"img","aria-label":`Prediction horizon ${f}`,viewBox:"0 0 600 200",width:"100%"},e.createElement("line",{"data-os-loc":"src/field/PredictionTrend.jsx:25:4",x1:"50",x2:"560",y1:"160",y2:"160",stroke:"#a9bac8"}),m.map((_,C)=>{const v=m[C-1];return Number.isFinite(_.value)&&e.createElement("g",{"data-os-loc":"src/field/PredictionTrend.jsx:26:80",key:_.frame},v&&_.frame===v.frame+1&&Number.isFinite(v.value)&&e.createElement("line",{"data-os-loc":"src/field/PredictionTrend.jsx:26:157",x1:d(v),y1:h(v),x2:d(_),y2:h(_),stroke:"#008c9c"}),e.createElement("circle",{"data-os-loc":"src/field/PredictionTrend.jsx:26:228",cx:d(_),cy:h(_),r:"4",fill:"#008c9c"},e.createElement("title",{"data-os-loc":"src/field/PredictionTrend.jsx:26:277"},_.frame,": ",ke(_.value),"; ",ke(_.seconds)," s")))}),e.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:4",x:"8",y:"40"},ke(p)),e.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:48",x:"8",y:"160"},ke(u)),e.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:93",x:"50",y:"186"},"0"),e.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:122",x:"500",y:"186"},ke(y)," s")))}))}const Er={missing_or_nonfinite_column:["missing or non-finite column","缺失或非有限数值列"],no_interior_to_exterior_span:["no trustworthy interior-to-exterior span","缺少可信的水内至水外跨度"],ambiguous_or_multiple_crossings:["ambiguous or multiple surfaces","交叉不明确或存在多层水面"],crossing_touches_truncation:["crossing touches truncation boundary","交叉接触截断边界"],nonfinite_height:["non-finite height","高度不是有限数值"],nonfinite_difference:["non-finite height difference","高度差不是有限数值"],outside_common_columns:["outside common column support","不在共同有效列内"]},_r={"No paired trustworthy single-surface columns":"没有可配对的可信单层水面列。","Invalid world-Y lattice":"世界 Y 轴网格无效。","Invalid height input dimensions":"高度输入维度无效。","Height column grids differ":"高度列网格不一致。","Height requires full SDF or trusted TSDF; filled exterior/unknown is not a trustworthy zero crossing":"需要完整 SDF 或可信 TSDF；水外填值或类型未知无法提供可信零交叉。","Height requires validated unchanged SDF distances":"需要经验证且未重建的 SDF 距离。","Height requires axis-aligned world-Y-up lattice":"需要与世界坐标轴对齐、Y 轴向上的网格。","Height requires a comparison with matching declared units":"需要 GT 与预测的声明单位一致。","Height requires finite positive trusted truncation distance":"需要有限、正值且可信的截断距离。"};function wr({data:n}){const{language:a}=ie(),t=a==="zh",s=i=>{const[c,...r]=i.split(":"),o=r.length?r.join(":"):c;return(r.length?c==="gt"?"GT: ":c==="prediction"?t?"预测：":"Prediction: ":c+": ":"")+(Er[o]?.[t?1:0]??o)};return e.createElement("details",{"data-os-loc":"src/field/HeightSupportAudit.jsx:28:9"},e.createElement("summary",{"data-os-loc":"src/field/HeightSupportAudit.jsx:28:18"},t?"当前帧高度有效区域与排除原因":"Current-frame height support and exclusions"),n?e.createElement(e.Fragment,null,n.reason&&e.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:30:16"},t?_r[n.reason]??n.reason:n.reason),n.blocked&&e.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:31:17"},t?"此帧高度评分不可用；不能把未评估数量当作零。":"Height scoring unavailable for this frame; unevaluated counts are not zero."),e.createElement("table",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:2","aria-label":t?"高度有效区域明细":"Height support audit"},e.createElement("thead",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:59"},e.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:66"},e.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:70"},t?"项目／原因":"Support / reason"),e.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:110"},t?"列数":"Columns"))),e.createElement("tbody",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:151"},[[t?"有效配对列":"Valid paired columns","validColumns"],[t?"GT 有效列":"Valid GT columns","gtValidColumns"],[t?"候选水平列":"Candidate horizontal columns","candidateColumns"]].map(([i,c])=>e.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:187",key:c},e.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:201",scope:"row"},i),e.createElement("td",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:228"},n.blocked||!Number.isFinite(n[c])?"N/A":n[c]))),Object.entries(n.excludedReasons??{}).map(([i,c])=>e.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:59",key:i},e.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:73",scope:"row"},s(i)),e.createElement("td",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:106"},Number.isFinite(c)?c:"N/A"))))),e.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:35:18"},t?"配对覆盖率＝配对列／GT 有效列；GT 可重建比例＝GT 有效列／候选列。排除原因不代表模型排名。":"Paired coverage = paired / valid GT columns; GT reconstructible fraction = valid GT / candidate columns. Exclusions are not model rankings.")):e.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:29:9"},t?"此帧没有高度记录。旧结果需重新创建比较；尚未载入的帧请先选择。":"No height record for this frame. Create a new comparison for legacy results, or select a loaded frame."))}function Sr(n,a){const t=URL.createObjectURL(new Blob(["\uFEFF",a],{type:"text/csv;charset=utf-8"})),s=document.createElement("a");s.href=t,s.download=n,s.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}const jr=[];function Br({metrics:n,frames:a,expectedFrames:t=jr,groups:s,group:i,status:c,currentFrame:r,onFrame:o,onDownload:l=Sr,comparisonId:f="comparison",sdfUnit:m="m",velocityUnit:g="m/s",onReviewSetup:y,frameSplit:u}){const{tr:p,language:d}=ie(),[h,_]=S.useState(()=>u?"test":"all"),C=Object.values(n?.frames||{}).some(D=>D.elevation),v=S.useMemo(()=>C?[...s,"elevation"]:s,[s,C]),[x,E]=S.useState(""),j=v.includes(x)?x:i;S.useEffect(()=>E(""),[i]),S.useEffect(()=>_(u?"test":"all"),[u?.sha256,!!u]);const w=S.useMemo(()=>mr({metrics:n,frames:a,expectedFrames:t,groups:v,status:c,units:{sdf:m,velocity:g},frameSplit:u,frameSubset:h}),[n,a,t,v,c,m,g,u,h]),B=w.columns.filter(D=>D.group===j),k=w.summary.filter(D=>D.group===j),[b,R]=S.useState(""),[M,A]=S.useState(0),[P,F]=S.useState(640),N=S.useRef(null),W=B.find(D=>D.id===b)||B[0];S.useEffect(()=>{if(typeof ResizeObserver>"u")return;const D=new ResizeObserver(([J])=>F(Math.max(280,Math.round(J.contentRect.width))));return D.observe(N.current),()=>D.disconnect()},[]);const T=S.useMemo(()=>pr(w.rows,W?.id,P),[w.rows,W?.id,P]),H=Math.max(1,Math.ceil(w.rows.length/50)),O=Math.min(M,H-1),z=w.rows.slice(O*50,(O+1)*50),Z=S.useMemo(()=>new Map(w.rows.map(D=>[D.frame,D])),[w.rows]),X=Z.get(r),$=w.summary.find(D=>D.id===W?.id);return e.createElement("section",{"data-os-loc":"src/field/SequenceMetrics.jsx:31:9",className:"sequence-metrics",ref:N,"aria-label":p("Sequence loss analysis")},e.createElement("h2",{"data-os-loc":"src/field/SequenceMetrics.jsx:32:3"},p("Per-frame metrics & sequence averages")),e.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:3"},d==="zh"?"统计组":"Statistics group"," ",e.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:53","data-os-action":"","aria-label":"Statistics group",value:j,onChange:D=>E(D.target.value)},v.map(D=>e.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:163",key:D,value:D},D==="elevation"?d==="zh"?"水面高度":"Water-surface elevation":D.toUpperCase())))),j==="elevation"&&e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:34:25"},d==="zh"?"世界 Y 水面高度，不是波峰—波谷浪高或 Hs。固定填值、缺失支持和多层水面不可用于此评分。":"World-Y elevation, not crest-to-trough wave height or Hs. Filled exterior, missing support and multiple surfaces cannot be scored."),j==="elevation"&&e.createElement(wr,{data:n?.frames?.[r]?.elevation}),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:36:3",className:"research-warning"},h==="test"||h.startsWith("test_")?d==="zh"?"Test 报告：仅汇总清单声明的测试帧。":"Test report: only declared test frames are summarized.":h==="train"?d==="zh"?"Train 报告：训练帧表现，不代表未见数据的泛化效果。":"Train report: training-frame performance, not generalization to unseen data.":d==="zh"?"参考报告：不是独立的 Test 结果。":"Reference report: not a Test-only evaluation."," ",d==="zh"?"划分依据训练方清单，不独立核验训练历史。":"Membership follows the supplied manifest; training history is not independently verified."),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:3",className:"frame-split-toolbar"},e.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:40"},d==="zh"?"统计帧集合":"Evaluation subset"," ",e.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:93","data-os-action":"","aria-label":"Evaluation subset",value:h,onChange:D=>{_(D.target.value),A(0)}},Object.entries({all:d==="zh"?"全部（参考）":"All",train:"Train",validation:"Validation",test:"Test",...Yc(d==="zh"),unassigned:d==="zh"?"未划分":"Unassigned"}).map(([D,J])=>e.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:407",key:D,value:D},J)))),e.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:476"},d==="zh"?"仅筛选曲线、统计表和下方 CSV；不改变原始计算或动画。":"Filters curves, tables and the CSVs below; original calculations and playback are unchanged.")),w.total===0&&e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:38:22",role:"status"},d==="zh"?"此集合没有已声明的帧；不补零，也不使用其他集合替代。":"No declared frames in this subset; no zeros or fallback to another subset."),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:39:3"},p("SDF error region: "),e.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:39:32"},w.evaluationRegion==="gt_water_common_distance_support"?p("Conditional GT-water distance support"):w.evaluationRegion==="gt_water"?p("GT water only (GT SDF < 0)"):p("Full domain (valid pairs)")),p(". Occupancy and surface metrics use their own saved validity rules; they are not certified by the distance mask. Velocity metrics unchanged.")),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:40:3",className:"sequence-partial",role:"status"},w.blockedReasons.length?p("Scoring blocked"):w.complete?d==="zh"?"帧记录处理完成":"Processing complete":p("Partial results")," · ",w.calculated," / ",w.total,p(" frame records processed"),c==="error"?p(" · Processing stopped"):""),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:41:3",role:"status"},w.total?$?.valid?d==="zh"?`所选指标有效帧：${$.valid} / ${w.total}；排除 ${$.excluded} 帧。`:`Selected metric valid frames: ${$.valid} / ${w.total}; ${$.excluded} excluded.`:d==="zh"?"所选指标不可用：没有有效数值。处理完成不代表评分有效。":"Selected metric unavailable: no valid values. Completed processing does not imply valid scoring.":d==="zh"?"当前集合为空。":"Selected subset is empty."),w.blockedReasons.length>0&&e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:36",className:"error",role:"alert"},e.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:72"},p("No valid loss can be reported for blocked fields.")),w.blockedReasons.map(D=>e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:181",key:D},p(D))),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:215"},p("Review units and SDF type in Datasets & comparison setup, then click Create comparison again. Old results do not change when declarations are edited. Unit confirmation declares the source scale; it does not convert data.")),y&&e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:466","data-os-action":"",onClick:y},p("Review scoring setup"))),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:43:3"},p("Equal weight per valid frame. N/A is excluded, never zero. RMSE and P95 averages are means of frame metrics, not pooled-voxel metrics. No combined training loss.")),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:3",className:"sequence-toolbar"},e.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:37"},p("Metric curve"),e.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:64","data-os-action":"","aria-label":p("Metric curve"),value:W?.id||"",onChange:D=>R(D.target.value)},B.map(D=>e.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:185",key:D.id,value:D.id},p(D.label))))),e.createElement("span",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:258"},p("Unit: "),p(W?.unit)," · ",W?.direction==="Context"?p("Context metric"):p(W?.direction)+" "+p("is better"))),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:3",className:"sequence-readout"},p("Frame "),r??"—",": ",e.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:72"},ke(X?.values[W?.id])),p(" · Sequence mean: "),e.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:158"},ke($?.mean)),p(" · Valid: "),$?.valid??0," / ",w.total),e.createElement(yr,{report:w,metric:W,onFrame:o,onDownload:l,comparisonId:f,frameSplit:u}),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:47:3"},d==="zh"?"对应覆盖率（所选帧均值）":"Associated coverage (selected-frame mean)",": ",ke(w.summary.find(D=>D.id===`${j}.coverage`)?.mean),j==="elevation"&&e.createElement(e.Fragment,null," · ",d==="zh"?"GT 可重建比例":"GT reconstructible fraction",": ",ke(w.summary.find(D=>D.id==="elevation.gtCoverage")?.mean))),e.createElement(vr,{rows:w.rows,metricKey:W?.id,manifest:u}),e.createElement("figure",{"data-os-loc":"src/field/SequenceMetrics.jsx:49:3",className:"os-metric-figure","data-review-id":"sequence-metric-"+(W?.id||j)},e.createElement("figcaption",{"data-os-loc":"src/field/SequenceMetrics.jsx:49:98"},p(W?.label)||p("Metric curve")),e.createElement("svg",{"data-os-loc":"src/field/SequenceMetrics.jsx:49:164",width:"100%",height:"220",viewBox:`0 0 ${P} 220`,role:"img","aria-label":`${W?.label} over frames; ${p(W?.unit)}`},[T.min,(T.min+T.max)/2,T.max].map((D,J)=>e.createElement("g",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:58",key:J},e.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:69",x1:"64",x2:P-22,y1:T.y(D),y2:T.y(D),stroke:"#d7e1eb",strokeWidth:".75"}),e.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:163",x:"57",y:T.y(D)+4,textAnchor:"end"},ke(D)))),Number.isFinite($?.mean)&&e.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:51:39",x1:"64",x2:P-22,y1:T.y($.mean),y2:T.y($.mean),stroke:"#7a8797",strokeDasharray:"5 4"}),T.segments.map((D,J)=>e.createElement("polyline",{"data-os-loc":"src/field/SequenceMetrics.jsx:52:36",key:J,points:D.map(Q=>`${Q.x},${Q.y}`).join(" "),fill:"none",stroke:"#008c9c",strokeWidth:"2"})),T.points.map(D=>e.createElement(xr,{key:D.frame,point:D,row:Z.get(D.frame),selected:D.frame===r,onFrame:o,language:d})),Number.isFinite(r)&&e.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:54:36",x1:T.x(r),x2:T.x(r),y1:"25",y2:"185",stroke:"#d36218",strokeDasharray:"3 3"}),e.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:4",x:"64",y:"205"},T.start),T.end!==T.start&&e.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:68",x:P-22,y:"205",textAnchor:"end"},T.end),e.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:130",x:P/2,y:"205",textAnchor:"middle"},p("Frame")))),e.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:57:3"},d==="zh"?"颜色：训练橙 / 验证紫 / 测试青 / 未划分灰。形状：Anchor 方形 / 插值菱形 / 外推三角 / 未声明圆点。橙圈为当前帧，灰虚线为均值；缺失值不连线。":"Color: Train amber / Validation purple / Test teal / Unassigned gray. Shape: Anchor square / Interpolation diamond / Future extrapolation triangle / Undeclared circle. Orange ring: displayed frame; gray dashed line: mean. Missing values are not connected."),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:58:3",className:"sequence-detail-tables"},e.createElement("h3",{"data-os-loc":"src/field/SequenceMetrics.jsx:58:43"},j==="elevation"?d==="zh"?"水面高度":"Elevation":p(j==="sdf"?"SDF":"Velocity"),p(" sequence summary")),e.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:59:3"},d==="zh"?"中位数、P95 和总体标准差描述所选帧的分布，不代表统计显著性。":"Median, P95 and population standard deviation describe selected frames, not statistical significance."),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:3",className:"sequence-table-scroll",tabIndex:"0",role:"region","aria-label":p("Scrollable sequence summary")},e.createElement("table",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:116","aria-label":p("Sequence metric summary")},e.createElement("thead",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:166"},e.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:173"},["Metric","Unit","Mean",d==="zh"?"中位数":"Median","P95",d==="zh"?"总体标准差":"Population std. dev.","Minimum","Maximum","Valid / total","Excluded"].map(D=>e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:341",key:D},p(D))))),e.createElement("tbody",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:380"},k.map(D=>e.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:405",key:D.id},e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:420",scope:"row"},p(D.label)),e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:454"},p(D.unit)),[D.mean,D.median,D.p95,D.stddev,D.minimum,D.maximum].map((J,Q)=>e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:540",key:Q,title:J==null?"N/A":String(J)},ke(J))),e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:608"},D.valid," / ",D.total),e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:638"},D.excluded)))))),e.createElement("h3",{"data-os-loc":"src/field/SequenceMetrics.jsx:61:3"},j==="elevation"?d==="zh"?"水面高度":"Elevation":p(j==="sdf"?"SDF":"Velocity"),p(" per-frame values")),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:3",className:"sequence-toolbar"},e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:37","data-os-action":"",disabled:O===0,onClick:()=>A(O-1)},p("Previous rows")),e.createElement("span",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:135"},p("Page "),O+1," / ",H,p(" · 50 frames per page")),e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:217","data-os-action":"",disabled:O+1>=H,onClick:()=>A(O+1)},p("Next rows")),e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:320","data-os-action":"",onClick:()=>{const D=w.rows.findIndex(J=>J.frame===r);D>=0&&A(Math.floor(D/50))}},p("Show current row"))),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:3",className:"sequence-table-scroll",tabIndex:"0",role:"region","aria-label":p("Scrollable per-frame metrics")},e.createElement("table",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:117","aria-label":p("Per-frame metric values")},e.createElement("thead",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:167"},e.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:174"},e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:178"},p("Frame")),e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:200"},d==="zh"?"所属集合":"Split"),B.map(D=>e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:257",key:D.id},p(D.label),e.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:285"},D.unit))))),e.createElement("tbody",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:328"},z.map(D=>e.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:352",key:D.frame,className:D.frame===r?"selected-frame":""},e.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:425",scope:"row"},e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:441","data-os-action":"","aria-label":`Go to frame ${D.frame}`,"aria-current":D.frame===r?"true":void 0,disabled:!D.available,onClick:()=>o(D.frame)},D.frame),!D.calculated&&e.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:631"},p("Not calculated"))),e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:674"},e.createElement(ft,{manifest:u,frame:D.frame})),B.map(J=>e.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:755",key:J.id,title:D.values[J.id]==null?"N/A":String(D.values[J.id])},ke(D.values[J.id])))))))),e.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:3",className:"sequence-toolbar"},e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:37","data-os-action":"",disabled:!n||!w.total,onClick:()=>l(`${f}_${h}_frames.csv`,cs(w,"frames"))},h==="all"?p("Export all frames CSV"):d==="zh"?"导出当前集合 CSV":"Export subset CSV"),e.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:274","data-os-action":"",disabled:!n||!w.total,onClick:()=>l(`${f}_${h}_sequence_summary.csv`,cs(w,"summary"))},p("Export sequence summary CSV")),e.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:464"},d==="zh"?`两个场组 · 当前集合 ${h} 的所有帧（不限本页） · 完整精度`:`Both field groups · all ${h} frames (not only this page) · full numeric precision`))))}function Cr({group:n="sdf"}){const{tr:a}=ie();function t(){const s=URL.createObjectURL(new Blob([JSON.stringify(or(),null,2)],{type:"application/json"})),i=document.createElement("a");i.href=s,i.download="OceanScope_metric_definitions.json",i.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}return e.createElement("details",{"data-os-loc":"src/field/LossDefinitions.jsx:7:10",className:"loss-definitions"},e.createElement("summary",{"data-os-loc":"src/field/LossDefinitions.jsx:7:48"},a("Evaluation Metrics / Loss Definitions")),e.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:112"},a("g = Ground Truth; p = Prediction. Evaluation metrics, not a weighted training loss.")),e.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:210"},a("Display quality never changes numerical metrics. Units follow dataset declarations; declaring units does not convert data.")),bt.filter(s=>s.group===n||s.group==="both"&&n!=="elevation").map(s=>e.createElement("article",{"data-os-loc":"src/field/LossDefinitions.jsx:7:442",key:s.id},e.createElement("strong",{"data-os-loc":"src/field/LossDefinitions.jsx:7:462"},a(s.label)),e.createElement("code",{"data-os-loc":"src/field/LossDefinitions.jsx:7:492"},s.formula),e.createElement("small",{"data-os-loc":"src/field/LossDefinitions.jsx:7:516"},a(s.direction),a(" is better"),s.direction==="Context"?a(" (interpret with error)"):""," · ",a(s.unitKind)),e.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:643"},a(s.domain)," ",a(s.caveats)))),e.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:692"},a("Sequence statistics give equal weight to each valid frame, not each voxel. Missing values are excluded; valid/excluded frame counts are reported.")),e.createElement("button",{"data-os-loc":"src/field/LossDefinitions.jsx:7:852","data-os-action":"",onClick:t},a("Export metric definitions")))}function Ar({lattice:n,comparison:a}){const{tr:t}=ie();return e.createElement("details",{"data-os-loc":"src/field/AlignmentReport.jsx:7:10",className:"alignment-report"},e.createElement("summary",{"data-os-loc":"src/field/AlignmentReport.jsx:7:48"},t("Alignment and provenance")),e.createElement("dl",{"data-os-loc":"src/field/AlignmentReport.jsx:7:99"},e.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:103"},e.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:108"},t("Comparison")),e.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:135"},a?.id||"—")),e.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:171"},e.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:176"},t("Canonical lattice")),e.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:210"},n?.dimensions?.join(" × ")||"—",t(" voxels"))),e.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:279"},e.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:284"},t("Voxel size")),e.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:311"},n?.voxelSize?.map(s=>Number(s).toPrecision(4)).join(" × ")||"—")),e.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:405"},e.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:410"},t("Policy")),e.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:433"},t("Prediction sampled in world space onto Ground Truth voxel centres.")))))}function kr(n){return`${n.labels?.prediction?.exportStem||"prediction"}_${n.runId||n.id}`.replace(/[<>:"/\\|?*\x00-\x1f]/g,"_").slice(0,125)}function Mr({frame:n,lattice:a,settings:t,plane:s,sliceIndex:i,angle:c=30,sectionPercent:r=50,rotationAxis:o="y"}){const l=v=>({status:"unavailable",reason:v});if(s==="oblique"&&o!=="y")return l("tilted");if(t?.previewOnly)return l("single");if(["gt","prediction"].some(v=>t?.sdf?.[v]?.semantics!=="full"))return l("semantics");const f=t?.heightComparison;if(f?.surfaceValidated!==!0||f?.negativeInside!==!0||f?.upAxis!=="Y"||f?.coordinateUnit!=="m"||f?.frameTimeAligned!==!0)return l("declaration");if(["gt","prediction"].some(v=>t.sdf[v].unit!=="m"))return l("units");if(!["xy","yz","oblique"].includes(s))return l("plane");const m=a?.dimensions,g=a?.axisSteps,y=a?.origin;if(!m||m.length!==3||m.some(v=>!Number.isInteger(v)||v<2)||!y||y.length!==3||y.some(v=>!Number.isFinite(v))||!g||g.length!==3||g.some((v,x)=>v.length!==3||v.some((E,j)=>!Number.isFinite(E)||(x===j?E<=0:Math.abs(E)>1e-12))))return l("lattice");const u=n?.groups?.sdf?.ground_truth,p=n?.groups?.sdf?.prediction;if([u,p].some(v=>!v||!Array.isArray(v.shape)||v.shape.length!==3||v.shape.some((x,E)=>x!==m[E])||v.values?.length!==m[0]*m[1]*m[2]||v.mask&&v.mask.values?.length!==v.values.length))return l("fields");if(s==="oblique"){const v=ot(a,c,r);if(!v)return l("lattice");const x=E=>v.degenerate?[]:Array.from({length:v.width},(j,w)=>{let B=null,k=null;for(let b=v.height-1;b>=0;b--){const R=Ai(E,a,v.point(w,b));if(R===null||b===v.height-1&&R<=0)break;if(k!==null&&k>0&&R<=0){B=y[1]+g[1][1]*(b+-R/(k-R));break}k=R}return[v.range[0]+(v.range[1]-v.range[0])*w/(v.width-1),B]});return{status:"ready",axis:"oblique",angle:c,offset:v.offset,result:as(x(u),x(p))}}const d=s==="xy"?2:0,h=s==="xy"?0:2;if(!Number.isInteger(i)||i<0||i>=m[d])return l("lattice");const _=(v,x,E)=>v+m[0]*(x+m[1]*E);function C(v){return Array.from({length:m[h]},(x,E)=>{const j=s==="xy"?E:i,w=s==="xy"?i:E;let B=null,k=null;for(let b=m[1]-1;b>=0;b--){const R=_(j,b,w),M=v.values[R];if(!Number.isFinite(M)||v.mask&&!v.mask.values[R]||b===m[1]-1&&M<=0)break;if(k!==null&&k>0&&M<=0){B=y[1]+g[1][1]*(b+-M/(k-M));break}k=M}return[y[h]+g[h][h]*E,B]})}return{status:"ready",axis:h===0?"x":"z",offset:y[d]+g[d][d]*i,result:as(C(u),C(p))}}const rs={tilted:["倾斜截面用于场值与结构分析。高度比较请切换 XY、YZ 或绕 Y 的竖直斜切。","Tilted sections show field values and structure. For height comparison use XY, YZ or a vertical Y-axis section."],semantics:["当前预测含水外填充值，不能把填值边界当作可信水面。保留原有 SDF 切片和条件性距离指标。","The prediction has a filled or undeclared exterior; filled boundaries cannot establish a trustworthy water surface. SDF slices and conditional distance scores remain available."],declaration:["还需明确水面有效性、Y 向上、米制坐标、内负外正和帧时间对齐，才能启用高度比较。","Height comparison requires explicit surface validity, Y-up metre coordinates, negative-inside signs and aligned frame times."],units:["两组 SDF 的单位需要明确为米。","Both SDF units must be declared in metres."],plane:["请选择 XY 或 YZ 竖直切面以提取高度曲线。XZ 是水平切面。","Select a vertical XY or YZ section. XZ is horizontal."],lattice:["此坐标网格尚不满足高度采样条件。","This lattice does not meet height-sampling requirements."],fields:["当前帧缺少完整、相互对应的两组 SDF。","This frame lacks complete, matching SDF fields."]};function Rr({frame:n,lattice:a,comparison:t,plane:s,sliceIndex:i,angle:c=30,sectionPercent:r=50,rotationAxis:o="y",frameNumber:l,busy:f}){const{language:m}=ie(),g=m==="zh",y=S.useMemo(()=>f?null:Mr({frame:n,lattice:a,settings:t.settings,plane:s,sliceIndex:i,angle:c,sectionPercent:r,rotationAxis:o}),[f,n,a,t.settings,s,i,c,r,o]);return y?.status==="ready"?e.createElement(pc,{result:y.result,axis:y.axis,kind:"sdf",labels:{a:t.labels?.gt?.displayName,b:t.labels?.prediction?.displayName},metadata:{kind:"validated_sdf_height",dataset_a:t.groundTruthId,dataset_b:t.predictionId,frame:l,...Cc(y.axis,y.offset,c),reference_y_m:0,meters_per_unit:1,sampling:s==="oblique"?"uppermost_valid_zero_crossing_trilinear_columns":"uppermost_valid_zero_crossing_linear",time_alignment:"declared_aligned"}}):e.createElement("section",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:10",className:"height-unavailable","aria-label":g?"水面高度比较适用性":"Surface-height eligibility"},e.createElement("h2",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:107"},g?"水面高度比较":"Surface-height comparison"," · ",f?g?"加载中":"Loading":g?"不可用":"Unavailable"),e.createElement("p",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:212"},f?g?"等待当前帧加载完成。":"Waiting for the current frame.":(rs[y?.reason]||rs.fields)[g?0:1]))}const ma=[["heightMae","Height MAE","高度 MAE","m"],["breakingMae","Breaking-region MAE","破碎区 MAE","m"],["amplitudeSlope","Amplitude slope","振幅斜率",""],["velocityRelativeL2","Underwater relative L2","水下速度相对误差",""],["velocityMedianCosine","Median direction cosine","方向余弦中位数",""]];function Pr(n){const a=["frame",...ma.map(c=>c[0]),"heightRmse","heightBias","pairedColumns","gtColumns","pairedCoverage","breakingColumns","velocityVoxels","velocityGtEligibleVoxels","velocityCoverage","angularExcludedCount","heightErrorPercent","breakingErrorPercent"],t=c=>c==null?"":`"${String(c).replaceAll('"','""')}"`,s=["protocol_version","unit_convention","height_rule","velocity_rule","aggregation","status"],i=[n.version,n.units,n.height,n.velocity,n.aggregation,n.status];return[[...a,...s].map(t).join(","),...Object.entries(n.frames).map(([c,r])=>[...a.map(o=>o==="frame"?c:r[o]),...i].map(t).join(","))].join(`\r
`)}function os(n,a=!1){let t=1/0,s=-1/0;for(const i of n)if(i)for(let c=0;c<i.values.length;c++){const r=i.values[c];!Number.isFinite(r)||i.mask&&!i.mask.values[c]||(t=Math.min(t,r),s=Math.max(s,r))}if(!Number.isFinite(t))return a?[-1,1]:[0,1];if(a){const i=Math.max(Math.abs(t),Math.abs(s),1e-8);return[-i,i]}return t===s?[t-.01,s+.01]:[t,s]}function $s(n,a){return n&&(!n.mask||n.mask.values[a])&&Number.isFinite(n.values[a])?n.values[a]:null}function Ir(n,a,t){const s=["ground_truth","prediction","error"].map(o=>n.groups.height[o]),[i,,c]=s[0].shape,r=["frame,x_m,z_m,gt_height_m,prediction_height_m,prediction_minus_gt_m,gt_valid,prediction_valid,paired_valid"];for(let o=0;o<c;o++)for(let l=0;l<i;l++){const f=l+i*o,m=s.map(g=>$s(g,f));r.push([t,a.origin[0]+l*a.axisSteps[0][0],a.origin[2]+o*a.axisSteps[2][2],...m.map(g=>g??""),...m.map(g=>g===null?0:1)].join(","))}return r.join(`\r
`)}const Ae=(n,a=4)=>Number.isFinite(n)?n.toFixed(a):"—",ls=n=>Number.isFinite(n)?`${(100*n).toFixed(2)}%`:"—";function Nr({protocol:n,frame:a,lattice:t,frameNumber:s,busy:i,onFrame:c}){const{language:r}=ie(),o=r==="zh",[l,f]=S.useState([.5,.5]);S.useEffect(()=>f([.5,.5]),[s]);const m=S.useMemo(()=>["ground_truth","prediction","error"].map(x=>a?.groups.height?.[x]),[a]),g=S.useMemo(()=>[os(m.slice(0,2)),os([m[2]],!0)],[m]);if(!n)return null;const y=n.frames[String(s)],u=!i&&y&&m.every(Boolean),p=m[0]?.shape[0]||1,d=m[0]?.shape[2]||1,h=Math.min(p-1,Math.floor(l[0]*p)),_=Math.min(d-1,Math.floor(l[1]*d)),C=h+p*_,v=["A · Gentle GT","B · Best_1027",o?"B − A · 高度差":"B − A · Height difference"];return e.createElement("section",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:22:10",className:"reconstruction-analysis","aria-label":o?"Best_1027 重建评估":"Best_1027 reconstruction evaluation","aria-busy":i},e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:5",className:"reconstruction-heading"},e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:45"},e.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:50",className:"reconstruction-eyebrow"},"BEST_1027 · ",o?"三帧对比":"THREE-FRAME PILOT"),e.createElement("h2",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:145"},o?"水面高度与水下速度":"Surface height & underwater velocity")),e.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:219",className:"reconstruction-frame"},o?"帧":"Frame"," ",u?s:"…")),e.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:24:5"},o?"当前结果覆盖 1001、1049、1096 三帧，采用下方明确记录的计算规则。不是完整 96 帧评分，也未划分 Test 集。长度和速度沿用 v2 的 m、m/s 模拟尺度约定。":"Frames 1001, 1049 and 1096 only, under the explicit protocol below. Not a full 96-frame or Test-set score. Length and velocity inherit the v2 m / m/s simulation convention."),u?e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:7",className:"reconstruction-cards"},ma.map(([x,E,j,w])=>e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:89",key:x},e.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:104"},o?j:E),e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:131"},Ae(y[x])," ",e.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:158"},w))))),e.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:7",className:"reconstruction-support"},o?"高度共同有效列":"Paired height columns"," ",e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:88"},y.pairedColumns.toLocaleString()," / ",y.gtColumns.toLocaleString())," (",ls(y.pairedCoverage),") · ",o?"水下速度覆盖率":"Underwater velocity coverage"," ",e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:261"},ls(y.velocityCoverage))," · ",o?"方向计算排除低速点":"Low-speed directional exclusions"," ",y.angularExcludedCount),e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:28:7",className:"reconstruction-maps"},m.map((x,E)=>e.createElement("figure",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:28:70",key:v[E],"aria-label":v[E]},e.createElement("figcaption",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:29:9"},v[E]),e.createElement(mt,{slice:{width:p,height:d,values:x.values},maskSlice:x.mask,range:g[E===2?1:0],palette:E===2?"error":"ground-truth",plane:"xz",aspect:p/d,crosshair:l,onCrosshair:f}),e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:9",className:`reconstruction-scale ${E===2?"difference":""}`},e.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:80"},Ae(g[E===2?1:0][0],3)," m"),e.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:134"},Ae(g[E===2?1:0][1],3)," m")),e.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:32:9"},o?"选点":"Probe",": ",Ae($s(x,C))," m")))),e.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:34:7",className:"reconstruction-caption"},"X → · Z ↑ · X [",Ae(t.origin[0],2),", ",Ae(t.origin[0]+(p-1)*t.axisSteps[0][0],2),"] m · Z [",Ae(t.origin[2],2),", ",Ae(t.origin[2]+(d-1)*t.axisSteps[2][2],2),"] m",e.createElement("br",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:34:270"}),o?"俯视图使用 0.05 m 网格；A/B 同色标，误差红色表示预测偏高，蓝色表示偏低；斜纹为无效区域。点击任一图联动选点。":"Top-down 0.05 m grid. A/B share a scale; red means prediction higher, blue lower. Hatched cells are invalid. Click a map for a shared probe."," · X=",Ae(t.origin[0]+h*t.axisSteps[0][0],3),", Z=",Ae(t.origin[2]+_*t.axisSteps[2][2],3))):e.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:25:15",role:"status"},o?"等待当前帧加载完成；不显示上一帧的指标。":"Waiting for this frame; previous-frame scores are hidden."),e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:5",className:"reconstruction-table-wrap"},e.createElement("table",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:48","aria-label":o?"三帧重建指标":"Three-frame reconstruction metrics"},e.createElement("thead",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:121"},e.createElement("tr",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:128"},e.createElement("th",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:132"},o?"帧":"Frame"),ma.map(([x,E,j,w])=>e.createElement("th",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:205",key:x},o?j:E,w&&` (${w})`)))),e.createElement("tbody",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:275"},Object.entries(n.frames).map(([x,E])=>e.createElement("tr",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:335",key:x,"aria-current":u&&Number(x)===s?"true":void 0},e.createElement("td",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:418"},e.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:422","data-os-action":"",disabled:i,onClick:()=>c(Number(x))},x)),ma.map(([j])=>e.createElement("td",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:528",key:j},Ae(E[j])))))))),e.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:5"},o?"三帧合并：振幅斜率":"Pooled pilot: amplitude slope"," ",e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:61"},Ae(n.pooled.amplitudeSlope))," · ",o?"速度相对误差":"velocity relative L2"," ",e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:162"},Ae(n.pooled.velocityRelativeL2))," · ",o?"方向余弦中位数":"median direction cosine"," ",e.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:271"},Ae(n.pooled.velocityMedianCosine)),e.createElement("br",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:334"}),e.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:339"},o?"合并分子与分母后求比值；方向指标使用全部有效方向余弦的中位数，不是逐帧数值的平均。振幅斜率以 1 为匹配参考，速度相对误差越小越好，方向余弦越接近 1 越好。":"Ratios use pooled sums; direction uses the median of all eligible cosines, not frame averages. Amplitude reference: 1. Lower relative error and cosine closer to 1 are preferable.")),e.createElement("details",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:38:5",className:"reconstruction-protocol"},e.createElement("summary",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:38:50"},o?"本次计算规则与未计算项":"Evaluation protocol & unavailable metrics"),e.createElement("ul",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:39:7"},e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:39:11"},o?"高度：沿 Y 提取内负外正的线性过零位置；排除多层水面和上方缺失支撑，仅比较双方共同有效列。":n.height),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:40:7"},o?"破碎区：在共同有效高度列中选择 X > −0.3 m。当前显示绝对误差（m），R 未定义，因此不显示归一化百分比。":n.breaking+" R is undefined: absolute metres only, no normalized percentages."),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:41:7"},o?"振幅：每帧在同一共同有效区域分别去均值，再计算 Σ(h̃GT·h̃预测) / Σ(h̃GT²)。":n.amplitude),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:42:7"},o?"水下速度：从原网格索引 0 开始，每两个格点取一个，得到 0.1 m 网格；采用 GT 水面下至少 10 cm 且双方 SDF/速度都有效的区域。方向中位数排除任一速度 ≤ 10⁻⁸ m/s 的点。":n.velocity),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:43:7"},o?"右侧和下方通用场指标仍基于原生 0.05 m 网格及其共同有效域，与这里的水下筛选指标分开。":"Generic volume metrics use native 0.05 m common support, separate from the underwater protocol here."),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:44:7"},o?"沿用 v2 的米制、Y 向上和同帧配对约定；新文件本身未独立声明物理单位。读取器报告 VDB 225/224 格式兼容提示，这些是初步参考结果。":n.units+" "+n.reader),e.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:45:7"},o?"尚未计算：归一化高度/破碎区百分比、各波长增益、独立 M1 基线。缺失项目不以零代替。":n.unavailable.join("; ")))),e.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:5",className:"reconstruction-actions"},e.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:45","data-os-action":"",onClick:()=>Fa("Best_1027_pilot_metrics.csv","\uFEFF"+Pr(n),"text/csv;charset=utf-8")},o?"下载三帧指标 CSV":"Pilot metrics CSV"),e.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:229","data-os-action":"",onClick:()=>Fa("Best_1027_evaluation_protocol.json",JSON.stringify(n,null,2))},o?"下载指标与规则 JSON":"Metrics & protocol JSON"),e.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:403","data-os-action":"",disabled:!u,onClick:()=>Fa(`Best_1027_${s}_height_map.csv`,"\uFEFF"+Ir(a,t,s),"text/csv;charset=utf-8")},o?"下载当前高度图 CSV":"Current height map CSV")))}const ga="oceanscope.field-view.v1",Vs="oceanscope.bookmarks.v2.field",se=n=>{throw Error(n)},ca=n=>n!==null&&typeof n=="object"&&!Array.isArray(n),We=(n,a=-1e9,t=1e9)=>typeof n=="number"&&Number.isFinite(n)&&n>=a&&n<=t,ds=(n,a=-1e9,t=1e9)=>Array.isArray(n)&&n.length===2&&n.every(s=>We(s,a,t));function zs(n){const a=n.comparison,t=n.processing.lattice;return JSON.stringify({comparison:a.id,gt:a.groundTruthId,prediction:a.settings?.previewOnly?null:a.predictionId,groups:a.availableGroups,settings:a.settings,lattice:{dimensions:t.dimensions,origin:t.origin,axisSteps:t.axisSteps},directory:n.fieldDirectory,frames:n.processing.frames.map(s=>s.frame)})}function rn(n,a){(!ca(n)||n.schema!==ga)&&se("format"),(typeof n.name!="string"||!n.name.trim()||n.name.trim().length>80)&&se("name");const t=n.settings;ca(t)||se("settings"),t.representation!==void 0&&t.representation!==Tn&&se("settings"),t.representation===Tn&&t.group!=="sdf"&&se("group"),(typeof t.caseId!="string"||!t.caseId||t.caseId.length>100||typeof n.sourceSignature!="string"||n.sourceSignature.length>1e5)&&se("dataset"),(!Number.isInteger(t.frame)||!We(t.frame,0,1e7))&&se("frame"),(!["sdf","velocity"].includes(t.group)||!["split","overlay","wire-overlay","gt","prediction"].includes(t.mode)||!["balanced","fine"].includes(t.quality)||!["magnitude","x","y","z"].includes(t.component))&&se("settings"),(!["xy","xz","yz","oblique"].includes(t.plane)||!Number.isInteger(t.sliceIndex)||!We(t.sliceIndex,0,1e7)||!We(t.angle,0,180)||!We(t.sectionPercent,0,100))&&se("section");for(const c of["showPlane","showContext","showGt","showPrediction"])typeof t[c]!="boolean"&&se("settings");(!We(t.gtOpacity,.1,1)||!We(t.predictionOpacity,.1,1)||!Number.isInteger(t.vectorDensity)||!We(t.vectorDensity,1,2e4)||!We(t.arrowScale,.001,1e6))&&se("settings"),t.sourceRange!==null&&(!ds(t.sourceRange)||t.sourceRange[1]<=t.sourceRange[0])&&se("color"),(!ca(t.errorScale)||typeof t.errorScale.locked!="boolean"||!We(t.errorScale.limit,1e-6,1e9))&&se("color"),ds(t.crosshair,0,1)||se("probe"),(!ca(t.playback)||typeof t.playback.loop!="boolean"||![.25,.5,1,2].includes(t.playback.speed)||!We(t.playback.fps,1,120))&&se("settings");const s=hc(t.region,2),i=gc(n.camera);if((i.near===null||i.far===null)&&se("camera"),a){const c=a.find(l=>l.id===t.caseId);c||se("dataset"),n.sourceSignature!==zs(c)&&se("source"),(t.representation===Tn?!zn(c).includes(t.frame):!c.processing.frames.some(l=>l.frame===t.frame))&&se("frame"),(!c.comparison.availableGroups.includes(t.group)||t.showContext&&!c.comparison.availableGroups.includes("sdf"))&&se("group"),c.comparison.settings?.previewOnly&&(t.mode!=="gt"||t.showPrediction||s)&&se("single");const r=c.processing.lattice,o=t.plane==="xy"||t.plane==="oblique"?2:t.plane==="yz"?0:1;(t.sliceIndex>=r.dimensions[o]||t.plane==="oblique"&&!qa(r))&&se("section")}return{schema:ga,name:n.name.trim(),sourceSignature:n.sourceSignature,settings:{...t.representation?{representation:t.representation}:{},...xc(t.rotationAxis),...yc(t.shading),caseId:t.caseId,frame:t.frame,group:t.group,mode:t.mode,quality:t.quality,component:t.component,plane:t.plane,sliceIndex:t.sliceIndex,angle:t.angle,sectionPercent:t.sectionPercent,showPlane:t.showPlane,showContext:t.showContext,showGt:t.showGt,showPrediction:t.showPrediction,gtOpacity:t.gtOpacity,predictionOpacity:t.predictionOpacity,vectorDensity:t.vectorDensity,arrowScale:t.arrowScale,sourceRange:t.sourceRange?[...t.sourceRange]:null,errorScale:{locked:t.errorScale.locked,limit:t.errorScale.limit},crosshair:[...t.crosshair],...s?{region:s}:{},playback:{speed:t.playback.speed,loop:t.playback.loop,fps:t.playback.fps}},camera:i}}function Fr(n,a){new TextEncoder().encode(n).length>vc&&se("size");let t;try{t=JSON.parse(n)}catch{se("json")}return rn(t,a)}function Or(n){let a;try{a=n.getItem(Vs)}catch{se("storage")}if(a===null)return[];try{const t=JSON.parse(a),s=new Set;return(t.schema!=="oceanscope.field-library.v1"||!Array.isArray(t.items)||t.items.length>Ns)&&se("library"),t.items.map(i=>((typeof i.id!="string"||!i.id||s.has(i.id))&&se("library"),s.add(i.id),{id:i.id,...rn(i)}))}catch{se("library")}}function Dr(n,a){a.length>Ns&&se("limit");const t=new Set,s=a.map(i=>((typeof i.id!="string"||!i.id||t.has(i.id))&&se("library"),t.add(i.id),{id:i.id,...rn(i)}));try{n.setItem(Vs,JSON.stringify({schema:"oceanscope.field-library.v1",items:s}))}catch{se("storage")}}const fs={...uc,format:["请使用场比较方案 JSON；水面方案、指标和数据说明文件不能作为场方案导入。","Use a field-view JSON. Wave views, metrics and data-info files cannot be imported as field views."],dataset:["当前样例中找不到方案指定的数据。","The saved dataset is not available in the current samples."],source:["样例身份、网格或单位声明已改变，未应用旧方案。","Dataset identity, grid or unit declarations changed; the old view was not applied."],group:["当前样例不提供方案指定的 SDF 或速度场。","This sample does not provide the saved SDF or velocity group."],section:["切片索引或斜切参数超出当前网格范围。","The slice index or oblique settings are outside the current grid."],single:["单组 GT 方案不能包含预测显示或双组模式。","A single GT view cannot use prediction layers or paired display modes."],probe:["切片探针位置必须在 0–100% 范围内。","The slice probe must stay within 0–100%."],color:["色标范围无效；请检查上下限。","Invalid color range; check its limits."],size:["文件超过 2 MB，请选择场比较方案 JSON。","File exceeds 2 MB; select a field-view JSON."],load:["场方案恢复未完成，数据或三维视图加载失败。请检查页面提示后重试。","Field view restoration failed while loading data or 3D. Check the page message and try again."]};function Tr(n,a){return fs[n.message]?.[a?0:1]||fs.load[a?0:1]}const Wr=[1007,1023,1039,1057,1073,1089],$r=[["mae_m","Height MAE","高度 MAE","m","pooled common columns"],["mae_pct","Height MAE / R","高度 MAE / R","% R","pooled common columns"],["bias_pct","Signed height bias / R","有符号高度偏差 / R","% R","pooled common columns"],["steep_pct","Steep-column MAE / R","陡坡列 MAE / R","% R","GT slope top 15%, per frame"],["calm_cells_pct","Non-steep-column MAE / R","非陡坡列 MAE / R","% R","remaining GT slope columns"],["breaking_band_pct","Breaking-band MAE / R","破浪带 MAE / R","% R","strict -0.30 < X < 1.10"],["calm_band_pct","Calm-band MAE / R","平静带 MAE / R","% R","strict -7.90 < X < -1.50"],["amplitude_slope","Amplitude slope","振幅斜率","ratio","pooled after per-frame demeaning"],["correlation","Height correlation","高度相关系数","ratio","pooled after per-frame demeaning"],["flicker_pct","Adjacent-frame error change / R","相邻帧误差变化 / R","% R","adjacent pairs, no time-step division"],["gt_range_m","Observed GT height range","观测 GT 高度范围","m","GT max minus min over all frames"],["pct_relative_to_m","Normalization reference R","归一化参考 R","m","fixed protocol parameter"]],Vr=[["rel_rmse","Relative RMSE — pooled","相对 RMSE — 全体素汇总","ratio","sqrt(sum error energy / sum GT energy)"],["rel_rmse_frame_mean","Relative RMSE — frame mean","相对 RMSE — 逐帧平均","ratio","arithmetic mean of frame relative RMSE"],["cos_median","Direction cosine median","方向余弦中位数","ratio","median over all selected voxels, not mean of frame medians"],["speed_ratio","Mean speed ratio B / GT","平均速度比 B / GT","ratio","mean |B| / mean |GT|"],["vec_mae","Vector MAE","矢量 MAE","source velocity unit","mean norm of vector error"],["gt_mean_speed","GT mean speed","GT 平均速度","source velocity unit","mean norm of GT velocity"]];function Xs(n,{subset:a="all",grid:t="coarse",frame:s=n.frameIds[0]}={}){if(!["all","six"].includes(a)||!["fine","coarse"].includes(t)||!n.frameIds.includes(s))throw Error("Invalid metric selection");const i=[],c=n.frameIds,r=n.summary.height,o={runId:n.runId,protocolSha256:n.protocol.sourceScriptSha256,manifestA:n.datasetA.manifestSha256,manifestB:n.datasetB.manifestSha256};function l(d,h,_,C,v,x,E,j,w=null,B="defined by frozen protocol",k="",b=null){const R=Number.isFinite(C)&&!k;i.push({id:d,label:h,labelZh:_,value:R?C:null,unit:v,aggregation:x,scope:E,frameIds:[...j],validCount:w,countStatus:w==null?"not recorded in frozen result":"recorded",status:R?"available":"unavailable",reason:k||(R?"":"Value not recorded or nonfinite in source"),denominator:{formula:B,value:b},source:o})}for(const[d,h,_,C,v]of $r){let x="",E=["mae_m","mae_pct","bias_pct"].includes(d)?r.cells_scored:null;r.cells_scored===0&&!["gt_range_m","pct_relative_to_m"].includes(d)&&(x="No common support"),d==="flicker_pct"&&(c.length<2||c.some((j,w)=>w>0&&j!==c[w-1]+1))&&(x="Requires consecutive adjacent frames"),l("height."+d,h,_,r[d],C,v,"sequence height: all evaluated frames",c,E,C==="% R"?"reference range R":"metric-specific support",x,C==="% R"?r.pct_relative_to_m:null)}for(const d of["gain","coherence"])for(const h of[.3,.6,1.2,2.4,4.8])l(`height.${d}.${h}`,`${d} · λ ${h} m`,`${d==="gain"?"增益":"相干度"} · λ ${h} m`,r[d]?.[String(h)],"ratio","pooled DoG band sums; common support and wider-filter weight > 0.7","sequence height: all evaluated frames",c,null,d==="gain"?"GT band energy":"GT band energy × prediction band energy",r.cells_scored===0?"No common support":"");l("footprint_iou","Wet-column footprint IoU","有水列范围 IoU",n.summary.footprint_iou,"ratio","pooled intersection / union","sequence wet columns",c,null,"wet-column union"),l("volume.iou","Water volume IoU","水体素 IoU",n.summary.volume?.iou,"ratio","pooled intersection / union","sequence water voxels (sdf < 0 and valid)",c,null,"water-voxel union"),l("volume.rec_over_gt","Water volume B / GT","水体积比 B / GT",n.summary.volume?.rec_over_gt,"ratio","pooled B volume / GT volume","sequence water voxels (sdf < 0 and valid)",c,null,"GT water-voxel count");const f=a==="all"?c:Wr,m=n.summary.velocity[a==="all"?"all_frames":"velocity_net_6_frames"],g=m?.[t==="fine"?"grid_0.05m":"grid_0.1m"],y=n.rows.filter(d=>f.includes(d.frame)),u=y.map(d=>d.velocity?.[t]?.gtEnergy),p=u.length===f.length&&u.every(Number.isFinite)?u.reduce((d,h)=>d+h,0):null;for(const[d,h,_,C,v]of Vr){let x=g?.voxels===0?"No valid velocity support":"";d.startsWith("rel_rmse")&&(p===0||d==="rel_rmse_frame_mean"&&u.some(E=>E===0))&&(x="Zero GT energy makes relative RMSE undefined"),(!m||JSON.stringify(m.frames)!==JSON.stringify(f))&&(x="Frame set does not match archived aggregate"),l("velocity."+d,h,_,g?.[d],C,v,`${a==="all"?"all evaluated frames":"fixed six frames (not train/test split)"}; ${t==="fine"?"native 0.05 XYZ":"XZ 2×2 average, Y unchanged (~0.10 / 0.05 / 0.10)"}`,f,g?.voxels??null,d.startsWith("rel_rmse")?"GT velocity energy":"valid velocity support",x,d==="rel_rmse"?p:null)}return i}function zr(n){const a=["id","value","status","reason","unit","scope","aggregation","frameIds","validCount","countStatus","denominator","source"],t=s=>'"'+String(s==null?"":typeof s=="object"?JSON.stringify(s):s).replaceAll('"','""')+'"';return[a.join(","),...n.map(s=>a.map(i=>t(s[i])).join(","))].join(`
`)}function Xr({bundle:n,subset:a,frame:t,zh:s,onDownload:i,selectedGrid:c,onGrid:r}){const[o,l]=S.useState("coarse"),f=c??o;function m(y){l(y),r?.(y)}const g=S.useMemo(()=>Xs(n,{subset:a,grid:f,frame:t}),[n,a,f,t]);return e.createElement("details",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:7:9",className:"complete-metrics"},e.createElement("summary",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:7:47"},s?"完整指标 · 范围、网格与聚合":"Complete metrics · scope, grid and aggregation"),e.createElement("p",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:8:3"},s?"高度与体积保持全96帧；上方帧集合只切换速度汇总。固定六帧不是训练/测试划分。缺失计数表示原件未记录，不推测或补零。":"Height and volume retain all96 frames; the frame-set selector changes velocity aggregates only. Fixed six is not a train/test split. Missing counts were not recorded, never inferred or filled with zero."),e.createElement("label",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:3"},s?"速度网格":"Velocity grid"," ",e.createElement("select",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:38","data-os-action":"","aria-label":"Reference detail grid",value:f,onChange:y=>m(y.target.value)},e.createElement("option",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:132",value:"coarse"},s?"粗网格 · XZ 2×2 / Y不变":"Coarse · XZ 2×2 / unchanged Y"),e.createElement("option",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:221",value:"fine"},s?"细网格 · 原生0.05":"Fine · native0.05"))),e.createElement("div",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:3",className:"metric-table-scroll"},e.createElement("table",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:40","aria-label":"Complete protocol metrics"},e.createElement("thead",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:86"},e.createElement("tr",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:93"},(s?["指标","数值","单位","范围 / 聚合","有效计数"]:["Metric","Value","Unit","Scope / aggregation","Valid count"]).map(y=>e.createElement("th",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:206",key:y},y)))),e.createElement("tbody",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:241"},g.map(y=>e.createElement("tr",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:261",key:y.id},e.createElement("th",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:276",scope:"row"},s?y.labelZh:y.label),e.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:319"},y.value==null?"—":y.value.toPrecision(8),y.status!=="available"&&e.createElement("small",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:390"},y.reason)),e.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:421"},y.unit),e.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:438"},e.createElement("small",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:442"},y.scope,e.createElement("br",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:458"}),y.aggregation)),e.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:491"},y.validCount==null?s?"原件未记录":"Not recorded":y.validCount.toLocaleString())))))),e.createElement("p",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:11:3"},s?"速度有效域：GT vel_valid、GT sdf < −0.10、预测vel_valid；Z[11:105] / X[11:212]，粗网格须四格全有效。Breaking严格−0.30<X<1.10；calm band与非陡坡列不同。":"Velocity support: GT vel_valid, GT sdf < −0.10, prediction vel_valid; Z[11:105] / X[11:212], all four coarse cells valid. Breaking strictly −0.30<X<1.10; calm band differs from non-steep columns."),e.createElement("button",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:12:3","data-os-action":"",onClick:()=>i(`${n.runId}_${a}_${f}_complete-metrics.csv`,zr(g),"text/csv")},s?"导出完整指标 CSV":"Export complete metrics CSV"))}function Zr({declarations:n,zh:a}){const t=s=>({claimed:a?"来源声明":"Source declaration",verified:a?"已核验":"Verified",unknown:a?"未知":"Unknown"})[s];return e.createElement("details",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:9",className:"complete-metrics"},e.createElement("summary",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:47"},a?"实验条件与证据来源":"Experiment conditions and evidence"),n?e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:5:3"},a?"“已核验”仅覆盖注明的原始文件身份；相机、模型、单位和测试划分仍按原始材料声明，不能等同独立训练审计。":"Verified labels cover the stated original-file identities. Camera, model, units and test split remain source declarations, not an independent training audit."),e.createElement("dl",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:3",className:"experiment-declarations"},n.entries.map(s=>e.createElement("div",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:72",key:s.id},e.createElement("dt",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:88"},a?s.labelZh:s.label," ",e.createElement("span",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:115"},t(s.status))),e.createElement("dd",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:150"},s.value==null?"—":typeof s.value=="object"?JSON.stringify(s.value):String(s.value),s.note&&e.createElement("small",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:248"},s.note.replace(/collaborator/gi,"Source")),s.source&&e.createElement("small",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:318"},s.source.file," · SHA256 ",s.source.sha256))))),e.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:7:3"},a?"直接比较要求相同GT、协议、帧集合、有效域和单位；不同相机/模型可以作为实验变量，但必须显示差异。":"Direct comparison requires the same GT, protocol, frame set, support and units. Camera/model differences may be experimental variables but must be disclosed.")):e.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:134",role:"status"},a?"声明尚未核验，不能推断实验条件。":"Declarations not yet verified; conditions cannot be inferred."))}const $a=[1007,1023,1039,1057,1073,1089],Ye=n=>Number.isFinite(n)?n.toFixed(6):"—";function Gr({bundle:n,frame:a,onFrame:t,onDownload:s,reportSelection:i,onReportSelection:c,unifiedRestore:r=!1,displayGeometryFrames:o=n.geometryFrames}){const{language:l}=ie(),f=l==="zh",[m,g]=S.useState("all"),[y,u]=S.useState("height"),p=i?.subset??m,d=i?.metric??y;function h(O){g(O),c?.(z=>({...z,subset:O}))}function _(O){u(O),c?.(z=>({...z,metric:O}))}const[C,v]=S.useState(""),x=S.useRef(Bs());S.useEffect(()=>(x.current.cancel(),()=>x.current.cancel()),[a,n]);const E=S.useRef(null),j=[n.datasetA.manifestSha256,n.datasetB.manifestSha256,n.protocol.sourceScriptSha256].join("/");S.useEffect(()=>{function O(z){const Z=z.detail;!E.current?.getClientRects().length||Z.run!==n.runId||Z.protocol!==n.protocol.id||Z.identity!==j||(d!==Z.metric&&_(Z.metric),p!==Z.subset&&h(Z.subset),Z.scope==="frame"&&a!==Z.frame&&w(Z.frame),z.preventDefault())}return window.addEventListener("oceanscope-restore-curve",O),()=>window.removeEventListener("oceanscope-restore-curve",O)},[n,a,d,p,j]);function w(O){x.current.cancel(),t(O)}async function B(O){if(x.current.cancel(),!!O)try{if(O.size>1024*1024)throw Error("Result selection file too large");const z=await x.current.run(async()=>Cs(await O.text(),n));z&&(h(z.subset),_(z.metric),t(z.frame),v(f?"已恢复相同结果的帧与集合；指标仍来自已核验结果包。":"Restored frame and subset; metrics remain from the verified bundle."))}catch(z){v(z.message)}}const k=Pi(n,a??n.frameIds[0]),b={...k,geometryAvailable:o.includes(k.frame)},R=n.rows.filter(O=>p==="all"||$a.includes(O.frame)),M=n.summary.velocity[p==="all"?"all_frames":"velocity_net_6_frames"]["grid_0.1m"],A=p==="all"?f?"全96帧 · 粗网格":"All96 frames · Coarse grid":f?"固定六帧 · 粗网格":"Fixed six frames · Coarse grid",P=O=>d==="height"?O.height.mae_m*100:O.velocity.coarse.rel_rmse,F=Math.max(...R.map(P),1e-9),N=O=>42+(O-1001)/95*836,W=O=>155-O/F*125;function T(){return{schemaVersion:1,runId:n.runId,protocol:n.protocol,datasetA:n.datasetA,datasetB:n.datasetB,frame:b.frame,selectedFrame:b.row,subset:p,metric:d,unitStatus:n.unitStatus,geometryAvailable:b.geometryAvailable,summaryScope:"height: all96; velocity: selected subset",summary:{height:n.summary.height,velocity:M},rows:R}}function H(){return["run_id,protocol_id,subset,frame,height_mae_m,height_bias_m,common_columns,coarse_rel_rmse,coarse_valid_voxels,geometry_available",...R.map(O=>[n.runId,n.protocol.id,p,O.frame,O.height.mae_m,O.height.bias_m,O.height.common,O.velocity.coarse.rel_rmse,O.velocity.coarse.voxels,o.includes(O.frame)].join(","))].join(`
`)}return e.createElement("section",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:41:9",className:"reference-evaluation","aria-label":f?"原始96帧协议结果":"Raw 96-frame protocol results"},e.createElement("header",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:3"},e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:11"},e.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:16",className:"reference-eyebrow"},"RAW VDB · 96 / 96"),e.createElement("h2",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:76"},f?"Gentle → Best_1027 · 序列评估":"Gentle → Best_1027 · Sequence evaluation")),e.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:42:166",className:"reference-status"},f?"原始读取已核验":"Verified raw read")),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:43:3"},f?"192个原始文件身份核验 · 0失败 · 95个相邻帧对。单位采用来源约定，尚未独立标定。":"192 source identities verified · 0 failures · 95 adjacent pairs. Units follow source convention, without independent calibration."),e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:3",className:"reference-cards"},e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:36"},e.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:41"},f?"全96帧高度 MAE":"All96 height MAE"),e.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:90"},Ye(n.summary.height.mae_m*100)," ",e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:140"},"cm")),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:166"},Ye(n.summary.height.mae_pct),"% R · R=1.230"),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:233"},f?"有符号偏差":"Signed bias"," ",Ye(n.summary.height.bias_pct),"% R")),e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:324"},e.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:329"},f?"速度 relative RMSE · pooled":"Velocity relative RMSE · pooled"),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:408",className:"metric-scope"},A),e.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:463"},Ye(M.rel_rmse)),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:507"},M.voxels.toLocaleString()," ",f?"有效粗网格点":"valid coarse voxels")),e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:598"},e.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:603"},f?"速度 relative RMSE · 逐帧均值":"Velocity relative RMSE · Frame mean"),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:684",className:"metric-scope"},A),e.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:739"},Ye(M.rel_rmse_frame_mean)),e.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:44:794"},f?"XZ 0.1 / Y 0.05 · 来源单位":"XZ 0.1 / Y 0.05 · source units"))),e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:3",className:"reference-controls"},e.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:39"},f?"帧集合":"Frame set"," ",e.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:69","data-os-action":"","aria-label":"Reference frame set",value:p,onChange:O=>{x.current.cancel(),h(O.target.value)}},e.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:195",value:"all"},f?"全96帧":"All96 frames"),e.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:250",value:"six"},f?"固定六帧":"Fixed six frames"))),e.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:326"},f?"曲线":"Curve"," ",e.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:351","data-os-action":"","aria-label":"Reference metric",value:d,onChange:O=>{x.current.cancel(),_(O.target.value)}},e.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:474",value:"height"},f?"高度 MAE (cm)":"Height MAE (cm)"),e.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:542",value:"velocity"},f?"粗网格速度 relative RMSE":"Coarse velocity relative RMSE"))),e.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:651"},f?"原始帧号":"Original frame"," ",e.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:687","data-os-action":"","aria-label":"Reference frame",value:b.frame,onChange:O=>w(Number(O.target.value))},n.frameIds.map(O=>e.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:45:822",key:O,value:O},O,o.includes(O)?" · 3D":""))))),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:46:3",role:"status"},e.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:46:20"},f?"选定帧":"Selected frame"," ",b.frame)," ",e.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:46:83","data-os-action":"",hidden:p==="six"&&!$a.includes(b.frame),type:"button","data-os-tools":"",className:"os-frame-comment",onClick:()=>window.dispatchEvent(new CustomEvent("oceanscope-review-frame",{detail:E.current}))},f?"批注此帧":"Comment on this frame")," · ",f?"高度 MAE":"Height MAE"," ",Ye(b.row.height.mae_m*100)," cm · ",f?"速度 relative RMSE":"Velocity relative RMSE"," ",Ye(b.row.velocity.coarse.rel_rmse)," · ",b.geometryAvailable?f?"三维预览可用":"3D preview available":f?"该帧无三维数据；保留真实帧号与指标":"No 3D data for this frame; frame identity and metrics retained",p==="six"&&!$a.includes(b.frame)&&(f?" · 当前帧不在固定六帧集合":" · Current frame outside fixed-six subset")),!b.geometryAvailable&&e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:47:34",className:"reference-geometry-links"},f?"跳转到可用三维帧：":"Jump to available geometry: ",o.map(O=>e.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:47:153","data-os-action":"",key:O,onClick:()=>w(O)},O))),e.createElement("figure",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:48:3",className:"os-metric-figure","data-review-id":"reference-frame-metric"},e.createElement("figcaption",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:49:4"},d==="height"?f?"高度 MAE 逐帧曲线":"Height MAE by frame":f?"速度 relative RMSE 逐帧曲线":"Velocity relative RMSE by frame"),e.createElement("svg",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:4",ref:E,"data-review-curve":"reference-frame-metric","data-run":n.runId,"data-protocol":n.protocol.id,"data-identity":j,"data-subset":p,"data-metric":d,"data-frame":b.frame,"data-value":P(b.row),"data-unit":d==="height"?"cm":"1",viewBox:"0 0 920 190",role:"img","aria-label":f?"原始帧指标曲线":"Original-frame metric curve"},e.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:384",x:"8",y:"27"},Ye(F)),e.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:423",x:"15",y:"159"},"0"),e.createElement("line",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:452",x1:"42",x2:"878",y1:"155",y2:"155",stroke:"#a7c4cb"}),e.createElement("polyline",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:511",points:R.map(O=>`${N(O.frame)},${W(P(O))}`).join(" "),fill:"none",stroke:"#087e8b",strokeWidth:"2"}),R.map(O=>e.createElement("circle",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:643","data-os-action":"","data-frame":O.frame,key:O.frame,cx:N(O.frame),cy:W(P(O)),r:O.frame===b.frame?5:3,fill:O.frame===b.frame?"#c45c15":"#087e8b",role:"button",tabIndex:"0","aria-label":`${f?"选择帧":"Select frame"} ${O.frame}`,onClick:()=>w(O.frame),onKeyDown:z=>{(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),w(O.frame))}},e.createElement("title",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1012"},O.frame,": ",Ye(P(O))))),e.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1067",x:"42",y:"180"},"1001"),e.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1099",x:"840",y:"180"},"1096"),e.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:50:1132",x:"400",y:"180"},f?"原始帧号":"Original frame"))),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:51:3",className:"reference-scope"},f?"此处为固定协议的全局／逐帧指标。相机、显示平滑与ROI不改变这些值；同协议空间面板使用原生列高度。三维场切片与旧预览诊断保留各自计算范围。":"These are fixed-protocol global/per-frame metrics. Camera, display smoothing and ROI do not change them. The protocol spatial panel uses native height columns; volume slices and legacy diagnostics retain their own scope."),e.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:52:3",className:"reference-controls"},e.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:52:39","data-os-action":"",onClick:()=>s(`${n.runId}_${p}.json`,JSON.stringify(T(),null,2))},f?"导出结果与当前帧 JSON":"Export results and current frame JSON"),e.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:52:209","data-os-action":"",onClick:()=>s(`${n.runId}_${p}.csv`,H(),"text/csv")},f?"导出所选集合 CSV":"Export selected-set CSV")),e.createElement(Xr,{bundle:n,subset:p,zh:f,onDownload:s,frame:b.frame,selectedGrid:i?.grid,onGrid:O=>c?.(z=>({...z,grid:O}))}),e.createElement(Zr,{declarations:n.declarations,zh:f}),!r&&e.createElement("details",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:21"},e.createElement("summary",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:30"},f?"恢复结果选择":"Restore result selection"),e.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:89"},f?"选择本面板导出的 JSON":"Choose JSON exported from this panel"," ",e.createElement("input",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:156","data-os-action":"",type:"file",accept:"application/json,.json","aria-label":"Restore reference selection",onChange:O=>{B(O.target.files?.[0]),O.target.value=""}})),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:55:320",role:"status"},C)),e.createElement("details",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:3"},e.createElement("summary",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:12"},f?"数据身份、协议与有效计数":"Identity, protocol and valid counts"),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:88"},n.protocol.id," · ",n.runId),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:132"},"A: ",n.datasetA.manifestSha256,e.createElement("br",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:170"}),"B: ",n.datasetB.manifestSha256,e.createElement("br",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:210"}),f?"算法":"Algorithm",": ",n.protocol.sourceScriptSha256),e.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:56:278"},f?"当前帧共同高度列":"Current common height columns",": ",b.row.height.common," · GT ",b.row.height.gtWet," / B ",b.row.height.predictionWet,"; ",f?"速度有效点":"Valid velocity voxels",": ",b.row.velocity.coarse.voxels)))}function wa(n){const{shape:[a,t],originXYZ:[s,,i],spacing:c}=n.descriptor;return{xmin:s,xmax:s+(t-1)*c,zmin:i,zmax:i+(a-1)*c}}function ya(n,a,{mode:t="create"}={}){const s={...n};for(const i of["x","z"]){const c=i+"min",r=i+"max";if(!Number.isFinite(s[c])||!Number.isFinite(s[r])||s[r]<s[c])throw Error("Invalid ROI");if(t==="move"){const o=Math.min(s[r]-s[c],a[r]-a[c]);s[c]=Math.max(a[c],Math.min(a[r]-o,s[c])),s[r]=s[c]+o}else s[c]=Math.max(a[c],Math.min(a[r],s[c])),s[r]=Math.max(a[c],Math.min(a[r],s[r]))}return{roi:s,clipped:JSON.stringify(s)!==JSON.stringify(n)}}function Hr(n,{ix:a,iz:t,resourceKey:s}){const{shape:[i,c],originXYZ:[r,,o],spacing:l,frameId:f}=n.descriptor;if(!Number.isInteger(a)||!Number.isInteger(t)||a<0||a>=c||t<0||t>=i||!n.common[t*c+a])throw Error("Select a paired valid location");const m=r+a*l,g=o+t*l;return{version:1,frame:f,resourceKey:s,hotspot:{ix:a,iz:t,index:t*c+a,x:m,z:g},roi:ya({xmin:m-10*l,xmax:m+10*l,zmin:g-10*l,zmax:g+10*l},wa(n)).roi,directionDeg:0,anchorMode:"hotspot"}}function Sa({anchor:n,direction:a},t){let s=-1/0,i=1/0;for(const[c,r,o,l]of[[n.x,a[0],t.xmin,t.xmax],[n.z,a[1],t.zmin,t.zmax]])if(Math.abs(r)<1e-12){if(c<o-1e-9||c>l+1e-9)return null}else{const f=(o-c)/r,m=(l-c)/r;s=Math.max(s,Math.min(f,m)),i=Math.min(i,Math.max(f,m))}return s<=i?[s,i]:null}function Ka(n,{x:a,z:t,directionDeg:s}){const i=wa(n),{shape:[c,r],originXYZ:[o,,l],spacing:f}=n.descriptor;if(![a,t,s].every(Number.isFinite)||a<i.xmin||a>i.xmax||t<i.zmin||t>i.zmax)throw Error("Profile anchor outside domain");const m=s*Math.PI/180,g=[Math.cos(m),Math.sin(m)],y={x:a,z:t},u=Sa({anchor:y,direction:g},i),p=(a-o)/f,d=(t-l)/f,h=Math.abs(g[1])<1e-12&&Math.abs(d-Math.round(d))<1e-8,_=Math.abs(g[0])<1e-12&&Math.abs(p-Math.round(p))<1e-8,C=(h||_)&&Math.abs(p-Math.round(p))<1e-8&&Math.abs(d-Math.round(d))<1e-8;let v;if(C)v=Array.from({length:h?r:c},(E,j)=>((h?o:l)+j*f-(h?a:t))/(h?g[0]:g[1]));else{const E=Math.max(2,Math.ceil((u[1]-u[0])/f)+1);v=Array.from({length:E},(j,w)=>u[0]+(u[1]-u[0])*w/(E-1))}v=[...v,0].sort((E,j)=>E-j).filter((E,j,w)=>j===0||Math.abs(E-w[j-1])>1e-9);const x=v.map(E=>{const j=a+E*g[0],w=t+E*g[1],B=(j-o)/f,k=(w-l)/f;let b=null,R=null;if(C){const M=Math.round(k)*r+Math.round(B);n.common[M]&&(b=n.heightA[M],R=n.heightB[M])}else if(r>=2&&c>=2){const M=Math.max(0,Math.min(r-2,Math.floor(B))),A=Math.max(0,Math.min(c-2,Math.floor(k))),P=B-M,F=k-A,N=[A*r+M,A*r+M+1,(A+1)*r+M,(A+1)*r+M+1],W=[(1-P)*(1-F),P*(1-F),(1-P)*F,P*F];N.every(T=>n.common[T]&&Number.isFinite(n.heightA[T])&&Number.isFinite(n.heightB[T]))&&(b=N.reduce((T,H,O)=>T+W[O]*n.heightA[H],0),R=N.reduce((T,H,O)=>T+W[O]*n.heightB[H],0))}return{distance:E,x:j,z:w,a:b,b:R,difference:b===null||R===null?null:R-b}});return{anchor:y,direction:g,sampling:C?"native_columns":"bilinear_common_four",step:f,points:x}}function pt(n,a){return{first:Ka(n,{...a.hotspot,directionDeg:a.directionDeg}),second:Ka(n,{...a.hotspot,directionDeg:a.directionDeg+90})}}function Qa(n){let a=0,t=0,s=0,i=0,c=null;for(const r of n){if(!Number.isFinite(r.error))continue;const o=r.error,l=Math.abs(o);a++,t+=o,s+=l,i+=o*o,!c||l>c.absolute?c={...r,absolute:l,signed:o,ties:1}:l===c.absolute&&c.ties++}return{samples:a,mae:a?s/a:null,bias:a?t/a:null,rmse:a?Math.sqrt(i/a):null,maximum:c}}function Zn(n,a=null){if(a&&(!["xmin","xmax","zmin","zmax"].every(y=>Number.isFinite(a[y]))||a.xmin>a.xmax||a.zmin>a.zmax))throw Error("Invalid evidence ROI");const{shape:[t,s],originXYZ:[i,,c],spacing:r}=n.descriptor;let o=0,l=0,f=0;const m=[];for(let y=0;y<t;y++)for(let u=0;u<s;u++){const p=y*s+u,d=i+u*r,h=c+y*r;a&&(d<a.xmin||d>a.xmax||h<a.zmin||h>a.zmax)||(o++,l+=+!!n.wetA[p],f+=+!!n.wetB[p],n.common[p]&&m.push({index:p,ix:u,iz:y,x:d,z:h,error:n.heightB[p]-n.heightA[p]}))}const g=Qa(m);return{...g,candidates:o,validGT:l,validPrediction:f,common:g.samples,coverageCandidate:o?g.samples/o:null,coverageGT:l?g.samples/l:null,weighting:"native columns, equal area per column"}}function et(n,a=null){const t=a?Sa(n,a):null,s=n.points.map(i=>({...i,error:i.difference}));return{full:Qa(s),roi:a?Qa(t?s.filter(i=>i.distance>=t[0]-1e-10&&i.distance<=t[1]+1e-10):[]):null,sampling:n.sampling,weighting:"sample mean; not native area or volume statistics"}}function Zs(n,a,t){if(!n||n.version!==1||n.frame!==a.frameId||n.resourceKey!==JSON.stringify(a)||n.anchorMode!=="hotspot"||!Number.isFinite(n.directionDeg)||n.directionDeg<0||n.directionDeg>=180)throw Error("Invalid diagnosis identity/direction");if(n.caseNote!==void 0&&(typeof n.caseNote!="string"||n.caseNote.length>120))throw Error("Invalid case note");const s=n.hotspot,[i,c]=a.shape,r=a.spacing;if(!s||!Number.isInteger(s.ix)||!Number.isInteger(s.iz)||s.ix<0||s.ix>=c||s.iz<0||s.iz>=i||s.index!==s.iz*c+s.ix||![s.x,s.z].every(Number.isFinite)||Math.abs(s.x-(a.originXYZ[0]+s.ix*r))>1e-9||Math.abs(s.z-(a.originXYZ[2]+s.iz*r))>1e-9||!t||t.index!==s.index||Math.abs(t.x-s.x)>1e-9||Math.abs(t.z-s.z)>1e-9)throw Error("Diagnosis native point mismatch");return{...n.caseNote!==void 0?{caseNote:n.caseNote}:{},version:1,frame:n.frame,resourceKey:n.resourceKey,hotspot:{ix:s.ix,iz:s.iz,index:s.index,x:s.x,z:s.z},roi:n.roi??null,directionDeg:n.directionDeg,anchorMode:"hotspot"}}const ut="oceanscope.protocol-report.v1",qr=n=>JSON.parse(JSON.stringify(n)),ms=n=>JSON.stringify(n,(a,t)=>t&&typeof t=="object"&&!Array.isArray(t)?Object.fromEntries(Object.keys(t).sort().map(s=>[s,t[s]])):t),ba=(n,a)=>ms(n)===ms(a),Gn=(n,a=-1e9,t=1e9)=>typeof n=="number"&&Number.isFinite(n)&&n>=a&&n<=t;function Gs(n){if(!/^[a-f0-9]{64}$/.test(n.verifiedPayloadSha256)||!/^[a-f0-9]{64}$/.test(n.declarations?.sha256))throw Error("Verified report identity unavailable");return{...Xn(n),bundleSha256:n.verifiedPayloadSha256,declarationsSha256:n.declarations.sha256}}function Hs(n,a,t,s){if(!n||n.frame!==a.frameId||!t.frameIds.includes(n.frame))throw Error("Report frame mismatch");if(!["xy","xz","yz","oblique"].includes(n.plane)||!["x","y","z"].includes(n.rotationAxis)||!Gn(n.angle,0,180)||!Gn(n.sectionPercent,0,100))throw Error("Invalid report section");const i=n.plane==="xy"||n.plane==="oblique"?a.shape[0]:n.plane==="yz"?a.shape[1]:s?.[0]?.processing.lattice.dimensions[1]??64;if(!Number.isInteger(n.sliceIndex)||n.sliceIndex<0||n.sliceIndex>=i)throw Error("Report slice outside lattice");const c=n.selection;if(!c||!["all","six"].includes(c.subset)||!["fine","coarse"].includes(c.grid)||!["height","velocity"].includes(c.metric))throw Error("Invalid report selection");let r=null,o=null;if(n.geometry){const f=n.geometry.settings?.representation===Tn;if(!s?.length||!f&&!t.geometryFrames.includes(n.frame))throw Error("Report geometry unavailable");r=rn(n.geometry,s);const m=s.find(g=>g.id===r.settings.caseId);if(o=f?js(m,n.frame,r.settings.quality):rt(m,n.frame),!o||!ba(n.geometryResource,o))throw Error("Report preview resource identity mismatch");for(const g of["frame","plane","sliceIndex","rotationAxis","angle","sectionPercent"])if(r.settings[g]!==n[g])throw Error("Report geometry/section mismatch")}const l=typeof n.geometryStatus?.reason=="string"?n.geometryStatus.reason.slice(0,500):r?"Exact-frame preview bytes verified":"No 3D evidence captured";return{frame:n.frame,plane:n.plane,sliceIndex:n.sliceIndex,rotationAxis:n.rotationAxis,angle:n.angle,sectionPercent:n.sectionPercent,selection:{subset:c.subset,grid:c.grid,metric:c.metric},geometry:r,geometryResource:o,geometryStatus:{status:r?"included":"unavailable",reason:l}}}function nt(n){if(n==null)return null;if(!["xmin","xmax","zmin","zmax"].every(a=>Gn(n[a]))||n.xmin>n.xmax||n.zmin>n.zmax)throw Error("Invalid report ROI");return Object.fromEntries(["xmin","xmax","zmin","zmax"].map(a=>[a,n[a]]))}function xa(n,a){if(n==null)return null;const[t,s]=a.shape,i=n.index;if(!Number.isInteger(i)||i<0||i>=t*s)throw Error("Invalid report probe");const c=a.originXYZ[0]+i%s*a.spacing,r=a.originXYZ[2]+Math.floor(i/s)*a.spacing;if(!Gn(n.x)||!Gn(n.z)||Math.abs(c-n.x)>1e-9||Math.abs(r-n.z)>1e-9)throw Error("Report probe/column mismatch");return{index:i,x:c,z:r}}function Lr({bundle:n,spatial:a,view:t,roi:s=null,probe:i=null,catalog:c,diagnosis:r=null,appearance:o=null}){const l=a.descriptor,f=Hs(t,l,n,c),m=nt(s);if(o!=null&&typeof o.absoluteError!="boolean")throw Error("Invalid report appearance");let g=o?{appearance:{absoluteError:o.absoluteError}}:{};if(r){const u=Zs({...r,roi:m},l,xa(i,l));if(!a.common[u.hotspot.index])throw Error("Diagnosis hotspot is no longer jointly valid");const p=pt(a,u);g={diagnosis:u,appearance:{absoluteError:o?.absoluteError??!1},profiles:p,evidence:{frame:Zn(a),roi:m?Zn(a,m):null,first:et(p.first,m),second:et(p.second,m)}}}const y=f.plane==="xy"||f.plane==="yz"||f.plane==="oblique"&&f.rotationAxis==="y"?As(a,{plane:f.plane,index:f.sliceIndex,angle:f.angle,sectionPercent:f.sectionPercent}):null;return qr({schema:ut,...g,createdAt:new Date().toISOString(),source:Gs(n),descriptor:l,view:f,roi:m,probe:xa(i,l),global:Wn(a),local:m?Wn(a,m):null,profile:y,metrics:Xs(n,{...f.selection,frame:f.frame}),frameMetrics:n.rows.find(u=>u.frame===f.frame),declarations:n.declarations,unitStatus:n.unitStatus,scope:"Native highest-crossing height columns; ROI/profile do not replace all96 global metrics. Units are source convention, not independently calibrated."})}function Yr(n,a,t,{catalog:s}={}){if(new TextEncoder().encode(n).length>1024*1024)throw Error("Report file too large");const i=JSON.parse(n);if(i?.schema!==ut)throw Error("Unsupported protocol report format");if(!ba(i.source,Gs(a)))throw Error("Report identity mismatch");const c=t.frames.find(o=>o.frameId===i.view?.frame);if(!c||!ba(i.descriptor,c))throw Error("Report resource mismatch");let r={};if(i.appearance!=null){if(typeof i.appearance.absoluteError!="boolean")throw Error("Invalid report appearance");r.appearance={absoluteError:i.appearance.absoluteError}}if(i.diagnosis!=null){const o=xa(i.probe,c),l=nt(i.roi),f=Zs(i.diagnosis,c,o);if(!ba(f.roi,l))throw Error("Diagnosis ROI mismatch");if(typeof i.appearance?.absoluteError!="boolean")throw Error("Invalid diagnosis appearance");r={diagnosis:f,appearance:{absoluteError:i.appearance.absoluteError}}}return{descriptor:c,...r,view:Hs(i.view,c,a,s),roi:nt(i.roi),probe:xa(i.probe,c)}}function Ur(n){const a=s=>'"'+String(s==null?"":typeof s=="object"?JSON.stringify(s):s).replaceAll('"','""')+'"',t=[["kind","name","value","unit","scope","metadata"]];t.push(["source","snapshot",n.createdAt,"",n.schema,n.unitStatus]);for(const[s,i]of Object.entries(n.source))t.push(["source",s,i,"","identity",""]);t.push(["view","selection",n.view,"","current view",{roi:n.roi,probe:n.probe}],["source","declarations",n.declarations,"","claimed / verified / unknown",""]);for(const s of n.metrics)t.push(["metric",s.id,s.value,s.unit,s.scope,s]);for(const[s,i]of[["frame",n.global],["ROI",n.local]])if(i)for(const[c,r]of Object.entries(i))t.push(["spatial",c,r,c==="common"?"columns":"m",s,{frame:n.view.frame,roi:s==="ROI"?n.roi:null}]);for(const s of n.profile?.points??[])t.push(["profile","height A / B / difference",s,"m",n.profile.sampling,{frame:n.view.frame,plane:n.view.plane}]);if(n.diagnosis){t.push(["diagnosis","selection",n.diagnosis,"","native hotspot / current ROI",n.appearance]);for(const[s,i]of Object.entries(n.evidence))i&&t.push(["diagnostic evidence",s,i,"m; coverage fractions","explicit native or profile sample weighting",i.weighting??""]);for(const[s,i]of Object.entries(n.profiles))for(const c of i.points)t.push(["paired profile",s,c,"m",i.sampling,{frame:n.view.frame,anchor:i.anchor,direction:i.direction,roi:n.roi}])}return t.map(s=>s.map(a).join(",")).join(`
`)}function Jr(n,a){return ht({stem:`${n.source.runId}_${n.view.frame}_protocol-report`,record:n,csv:Ur(n),previewUrl:a})}function ht({stem:n,record:a,csv:t,previewUrl:s}){const i=[],c=r=>{const o=URL.createObjectURL(r);return i.push(o),o};try{const r={csv:{name:n+".csv",mime:"text/csv",content:t},json:{name:n+".json",mime:"application/json",content:JSON.stringify(a,null,2)}};if(s){if(!s.startsWith("data:image/png;base64,"))throw Error("PNG encoding failed");const o=Uint8Array.from(atob(s.slice(s.indexOf(",")+1)),f=>f.charCodeAt(0)),l=new Blob([o],{type:"image/png"});r.png={name:n+".png",mime:"image/png",blob:l,href:c(l)}}for(const o of["csv","json"]){const l=r[o];l.blob=new Blob([l.content],{type:l.mime+";charset=utf-8"}),l.href=c(l.blob)}return r}catch(r){for(const o of i)URL.revokeObjectURL(o);throw r}}const va=`{
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
`,Kr="oceanscope.velocity-alignment.v1",Qr=1001,eo="best-1027",no="partial",ao=!0,to={gt:{frame:1001,file:"clean_fullsdf_vel.1001.vdb",bytes:10508067,sha256:"8cd757ed7cecfe8f677a6e8994e053bcbb178e93a8c0b257a82c89b14de954be",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1001,file:"recon_fullsdf_vel.1001.vdb",bytes:10562288,sha256:"fd0ab7ff40ed007eb3543c6326ba10f7f98dbda59e094a0dbfbb2066b4212f26",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},so={frame:1001,url:"/data/velocity-raw/1001.ocfld.gz",packedBytes:15074066,packedSha256:"c1284e150f6c95880ae942c08fb3a54209096127c13ed9d14e4d48a8cac6a54b",decodedBytes:62391416,decodedSha256:"723f73f42097cede6faf03a7cd106af8d7aef55eabcdc4207b469fb9a1a4a197",roundtrip:"exact"},io={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},co={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},ro={gt:0,prediction:2856765473069345e-22},oo=2856765473069345e-22,lo=["x","y","z"],fo="ZYX",mo={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},bo="m/s",po="Existing source convention only; no independent physical or time calibration.",uo="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",ho={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},go={resource:{frame:1001,url:"/data/fields/best-1027/1001.ocfld.gz",packedBytes:26128772,packedSha256:"3a504d78eefed6ef1a3e5fef3523f62eb7f0a13ae68e67e8cb23907f4b6f6f46",decodedBytes:99523224,decodedSha256:"8760d8da4ce6ac716b433ede5c787ba13baff142a4324fb03e13824f90e978f8"},comparison:{gt:{error:"vel.x values differ at 1363784 samples; max 2.8210940528072825e-16"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: vel.x values differ at 1363784 samples; max 2.8210940528072825e-16"],retainedUnchanged:!0},yo="exact",xo={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:179815,sha256:"6264bad6598a054b1ac18538a73305aa383761e97e67b4e8120f74a6f73fab06"},common:{count:177960,sha256:"33db691f210a15dd5e533103720e9708b363e05c66e4cc266f14413335d8371f"},computable:{count:177960,sha256:"33db691f210a15dd5e533103720e9708b363e05c66e4cc266f14413335d8371f"}},vo=0,Eo=[],_o="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",wo={schema:Kr,frame:Qr,caseId:eo,status:no,dataAndDomainVerified:ao,source:to,resource:so,lattice:io,originalLattices:co,cacheLatticeMaxDisplacement:ro,pairMaxDisplacement:oo,componentOrder:lo,arrayOrder:fo,vectorBasis:mo,unitClaim:bo,unitEvidence:po,protocolSha256:uo,domainDefinition:ho,legacyCache:go,diagnosticRoundtrip:yo,domain:xo,nonfiniteExcluded:vo,failures:Eo,scope:_o},So="oceanscope.velocity-alignment.v1",jo=1049,Bo="best-1027",Co="partial",Ao=!0,ko={gt:{frame:1049,file:"clean_fullsdf_vel.1049.vdb",bytes:11105671,sha256:"a821ec84b9f2eecc09f234cdf05050e77e3572d6f9c3d46bce94d0a28f328df9",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1049,file:"recon_fullsdf_vel.1049.vdb",bytes:10571839,sha256:"ff18d054439135a9c39abc139aa628ca7dcb753dd46b389b86bde47747f5d4c3",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},Mo={frame:1049,url:"/data/velocity-raw/1049.ocfld.gz",packedBytes:15261605,packedSha256:"913c1ddbec87d484f71905720334c90ca6ebccdad5c48a543f69eb405308e707",decodedBytes:62391416,decodedSha256:"403ff5ea6e2afcd3129761caa6a5adf7f2699e180d1733e85774ea1a55df4ef1",roundtrip:"exact"},Ro={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},Po={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},Io={gt:0,prediction:2856765473069345e-22},No=2856765473069345e-22,Fo=["x","y","z"],Oo="ZYX",Do={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},To="m/s",Wo="Existing source convention only; no independent physical or time calibration.",$o="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",Vo={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},zo={resource:{frame:1049,url:"/data/fields/best-1027/1049.ocfld.gz",packedBytes:26633403,packedSha256:"1443fd356c49996f7b7bac3ab8d8ee9fc4b40d9a6d4a0734b2a0e6e2592c2548",decodedBytes:99523224,decodedSha256:"ad0deb564ccd2db1fc91e4db9f711acaa8f6c231e3acca426773f8bb0cbf851a"},comparison:{gt:{error:"sdf values differ at 2 samples; max 0.0"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: sdf values differ at 2 samples; max 0.0"],retainedUnchanged:!0},Xo="exact",Zo={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:189062,sha256:"adaf091d8684752b63cdf670a7f10b150720ed4342c7042ee4ee70311055d839"},common:{count:184957,sha256:"6367149b8f2ca91ca5e7dd4c5eeb75c22cf814b39535732dd9fb2f2a698599de"},computable:{count:184957,sha256:"6367149b8f2ca91ca5e7dd4c5eeb75c22cf814b39535732dd9fb2f2a698599de"}},Go=0,Ho=[],qo="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",Lo={schema:So,frame:jo,caseId:Bo,status:Co,dataAndDomainVerified:Ao,source:ko,resource:Mo,lattice:Ro,originalLattices:Po,cacheLatticeMaxDisplacement:Io,pairMaxDisplacement:No,componentOrder:Fo,arrayOrder:Oo,vectorBasis:Do,unitClaim:To,unitEvidence:Wo,protocolSha256:$o,domainDefinition:Vo,legacyCache:zo,diagnosticRoundtrip:Xo,domain:Zo,nonfiniteExcluded:Go,failures:Ho,scope:qo},Yo="oceanscope.velocity-alignment.v1",Uo=1096,Jo="best-1027",Ko="partial",Qo=!0,e0={gt:{frame:1096,file:"clean_fullsdf_vel.1096.vdb",bytes:11272288,sha256:"7153212dbf15d5970fab77d2c187a858fa5735447abfcd8dfc717fa1844d4e94",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1096,file:"recon_fullsdf_vel.1096.vdb",bytes:10500539,sha256:"16187d0cad3236b3ebef4900650d0b3cd98294ef9ab248088797a73365200db2",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},n0={frame:1096,url:"/data/velocity-raw/1096.ocfld.gz",packedBytes:15329856,packedSha256:"a0731f4996fadbe7d2e7c9b5562250ead6a8cc817a2f7b1f44d393c45d86dd7d",decodedBytes:62391416,decodedSha256:"bfe8078ba7a9436b73b8906e210a8e7d8f0b312fc772c4ee0e68f9e282fedb9c",roundtrip:"exact"},a0={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},t0={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},s0={gt:0,prediction:2856765473069345e-22},i0=2856765473069345e-22,c0=["x","y","z"],r0="ZYX",o0={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},l0="m/s",d0="Existing source convention only; no independent physical or time calibration.",f0="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",m0={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},b0={resource:{frame:1096,url:"/data/fields/best-1027/1096.ocfld.gz",packedBytes:26932173,packedSha256:"5900168e2e47a98c85f505558e49c754619e3824ea1404299d783fd7451dd0ee",decodedBytes:99523224,decodedSha256:"1cdb1261a33ed72f515bd59a75668467cbb8d7f78da7af6b360653cf6cbcb2f9"},comparison:{gt:{error:"sdf values differ at 1 samples; max 0.0"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: sdf values differ at 1 samples; max 0.0"],retainedUnchanged:!0},p0="exact",u0={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:223882,sha256:"3d3747b91823a8c0b8e2d7487c955abe70b257b49b9079a660ddb1112f7c5cf9"},common:{count:217252,sha256:"f4cca5ed859acd6e09a9ab9318b117c094d2647572e72b961768938e558395a8"},computable:{count:217252,sha256:"f4cca5ed859acd6e09a9ab9318b117c094d2647572e72b961768938e558395a8"}},h0=0,g0=[],y0="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",x0={schema:Yo,frame:Uo,caseId:Jo,status:Ko,dataAndDomainVerified:Qo,source:e0,resource:n0,lattice:a0,originalLattices:t0,cacheLatticeMaxDisplacement:s0,pairMaxDisplacement:i0,componentOrder:c0,arrayOrder:r0,vectorBasis:o0,unitClaim:l0,unitEvidence:d0,protocolSha256:f0,domainDefinition:m0,legacyCache:b0,diagnosticRoundtrip:p0,domain:u0,nonfiniteExcluded:h0,failures:g0,scope:y0},v0=new Map([[1001,wo],[1049,Lo],[1096,x0]]);function ja(n){const a=v0.get(n);return!a||a.frame!==n||a.caseId!=="best-1027"||!a.dataAndDomainVerified||a.diagnosticRoundtrip!=="exact"||a.resource.frame!==n||a.resource.url!==`/data/velocity-raw/${n}.ocfld.gz`||a.protocolSha256!==Vn.protocolSha256||a.source.gt.manifestSha256!==Vn.manifestA||a.source.prediction.manifestSha256!==Vn.manifestB?null:a}async function qs(n,{signal:a}={}){const t=ja(n);if(!t)throw Error("No verified velocity diagnostic resource for this frame");const s=await fetch(t.resource.url,{signal:a});if(!s.ok)throw Error(`${n} velocity resource unavailable (${s.status}); generate the local diagnostic resource using the alignment handoff`);const i=Fs(await Ss(await s.arrayBuffer(),t.resource));return a?.throwIfAborted(),{frame:i,lattice:t.lattice,alignment:t}}const E0=["collaborator-native","common-finite-exploration"];function Ls({frame:n,lattice:a,alignment:t,domain:s}){if(!E0.includes(s))throw Error("Unknown velocity domain");if(s==="collaborator-native"&&!t?.dataAndDomainVerified)throw Error("Velocity domain has not been verified");const i=a?.dimensions,c=a?.origin,r=a?.axisSteps;if(!i||i.length!==3||i.some(u=>!Number.isInteger(u)||u<1)||!c||c.some(u=>!Number.isFinite(u))||!r||r.length!==3||r.some((u,p)=>u.length!==3||u.some((d,h)=>!Number.isFinite(d)||(p===h?d<=0:d!==0))))throw Error("Unsupported velocity lattice");const o=n?.groups?.velocity,l=n?.groups?.sdf?.ground_truth;if([l,o?.ground_truth_valid,o?.prediction_valid,...["ground_truth","prediction"].flatMap(u=>[..."xyz"].map(p=>o?.[u+"."+p]))].some(u=>!u||u.shape?.length!==3||u.shape.some((p,d)=>p!==i[d])||u.values?.length!==i[0]*i[1]*i[2]))throw Error("Velocity field shape mismatch");const m=t?.domainDefinition?.cropX??[11,212],g=t?.domainDefinition?.cropZ??[11,105];function y(u,p,d){const h=u+i[0]*(p+i[1]*d),_=s!=="collaborator-native"||u>=m[0]&&u<m[1]&&d>=g[0]&&d<g[1],C=_&&o.ground_truth_valid.values[h]>0&&(s!=="collaborator-native"||l.values[h]<Math.fround(-.1)),v=_&&o.prediction_valid.values[h]>0,x=C&&v,E=[..."xyz"].map(k=>o["ground_truth."+k].values[h]),j=[..."xyz"].map(k=>o["prediction."+k].values[h]),w=[...E,...j].every(Number.isFinite);return{candidate:_,gtEligible:C,predValid:v,paired:x,common:x&&w,nonfiniteExcluded:x&&!w,gt:E,pred:j}}return{d:i,o:c,a:r,sample:y,world:(u,p,d)=>c.map((h,_)=>h+r[0][_]*u+r[1][_]*p+r[2][_]*d)}}function Ys(n,{x:a,z:t}){return[Math.round((a-n.origin[0])/n.axisSteps[0][0]),Math.round((t-n.origin[2])/n.axisSteps[2][2])]}function _0(n){const{d:a,sample:t}=Ls(n),[s,i]=Ys(n.lattice,n.hotspotXZ);if(s<0||s>=a[0]||i<0||i>=a[2])return null;for(let c=a[1]-1;c>=0;c--)if(t(s,c,i).common)return c;return null}function Us(n){if(n.plane!=="xz")throw Error("Velocity diagnosis supports XZ slices only");const{d:a,a:t,world:s,sample:i}=Ls(n),[c,r,o]=a,l=n.sliceIndex;if(!Number.isInteger(l)||l<0||l>=r)throw Error("Velocity Y index is outside the grid");const f=n.roiXZ;if(f&&(Object.values(f).length!==4||["xmin","xmax","zmin","zmax"].some(x=>!Number.isFinite(f[x]))||f.xmin>f.xmax||f.zmin>f.zmax))throw Error("Invalid velocity ROI bounds");const m={domain:n.domain,width:c,height:o,sliceIndex:l,stepX:t[0][0],stepZ:t[2][2],worldAt:x=>s(x%c,l,Math.floor(x/c)),roiView:null};for(const x of["speedGT","speedPred","vectorError","speedDelta"])m[x]=new Float64Array(c*o).fill(NaN);for(const x of["candidate","gtEligible","common","roi"])m[x+"Mask"]=new Uint8Array(c*o);m.vectorsGT=new Float64Array(3*c*o),m.vectorsPred=new Float64Array(3*c*o);const g=()=>({counts:{candidate:0,gtEligible:0,predValid:0,paired:0,common:0,nonfiniteExcluded:0,gtOnly:0,predOnly:0},sumE:0,sumDelta:0,maximum:null}),y=g(),u=g();function p(x,E,j){for(const w of["candidate","gtEligible","predValid","paired","common","nonfiniteExcluded"])x.counts[w]+=Number(E[w]);if(x.counts.gtOnly+=Number(E.gtEligible&&!E.predValid),x.counts.predOnly+=Number(E.predValid&&!E.gtEligible),E.common){const w=m.vectorError[j];x.sumE+=w,x.sumDelta+=m.speedDelta[j],(!x.maximum||w>x.maximum.value)&&(x.maximum={value:w,index:j,world:m.worldAt(j)})}}let d=c,h=-1,_=o,C=-1;for(let x=0;x<o;x++)for(let E=0;E<c;E++){const j=E+c*x,w=i(E,l,x),[B,,k]=s(E,l,x);for(const b of["candidate","gtEligible","common"])m[b+"Mask"][j]=Number(w[b]);w.common&&(m.vectorsGT.set(w.gt,3*j),m.vectorsPred.set(w.pred,3*j),m.speedGT[j]=Math.hypot(...w.gt),m.speedPred[j]=Math.hypot(...w.pred),m.vectorError[j]=Math.hypot(...w.pred.map((b,R)=>b-w.gt[R])),m.speedDelta[j]=m.speedPred[j]-m.speedGT[j]),p(y,w,j),(!f||B>=f.xmin&&B<=f.xmax&&k>=f.zmin&&k<=f.zmax)&&(p(u,w,j),m.roiMask[j]=1,d=Math.min(d,E),h=Math.max(h,E),_=Math.min(_,x),C=Math.max(C,x))}h>=0&&(m.roiView={x:d,z:_,width:h-d+1,height:C-_+1});function v(x){const E=x.counts;return{counts:E,coverageCandidate:E.candidate?E.common/E.candidate:null,coverageGT:E.gtEligible?E.common/E.gtEligible:null,meanE:E.common?x.sumE/E.common:null,meanSpeedDelta:E.common?x.sumDelta/E.common:null,maximum:x.maximum}}return m.whole=v(y),m.local=v(u),m}function Js(n,a){if(a!==null&&(!Number.isFinite(a)||a<0))throw Error("Invalid direction threshold");const{commonMask:t,roiMask:s,vectorsGT:i,vectorsPred:c,speedGT:r,speedPred:o}=n,l=new Float64Array(t.length).fill(NaN),f=new Uint8Array(t.length);let m=0,g=0,y=0,u=0;if(a!==null)for(let d=0;d<t.length;d++){if(!t[d]||r[d]<=a||o[d]<=a)continue;let h=0;for(let C=0;C<3;C++)h+=i[3*d+C]/r[d]*(c[3*d+C]/o[d]);const _=Math.acos(Math.max(-1,Math.min(1,h)))*180/Math.PI;l[d]=_,f[d]=1,y++,m+=_,s[d]&&(u++,g+=_)}const p=(d,h,_)=>({count:d,excludedLowSpeedCount:a===null?null:_-d,meanDegrees:d?h/d:null});return{degrees:l,mask:f,whole:p(y,m,n.whole.counts.common),local:p(u,g,n.local.counts.common)}}function Ks(n,a,t,s){const{width:i,commonMask:c,vectorsGT:r,vectorsPred:o,stepX:l,stepZ:f}=n;let m=s??0;for(let d=0;s===void 0&&d<c.length;d++)c[d]&&(m=Math.max(m,Math.hypot(r[3*d],r[3*d+2]),Math.hypot(o[3*d],o[3*d+2])));const g=m>0?.72*Math.min(t,a.width,a.height)/m:0,y=Math.min(l,f),u=d=>[d[0]*g*y/l,d[2]*g*y/f],p=[];for(let d=Math.ceil(a.z/t)*t;d<a.z+a.height;d+=t)for(let h=Math.ceil(a.x/t)*t;h<a.x+a.width;h+=t){const _=h+i*d;if(!c[_])continue;const C=Array.from(r.subarray(3*_,3*_+3)),v=Array.from(o.subarray(3*_,3*_+3));p.push({index:_,x:h,z:d,gt:C,pred:v,gtOffset:u(C),predOffset:u(v)})}return{points:p,stride:t,gain:g,maxProjection:m,referenceSpeed:m,referenceGridLength:u([m,0,0])[0]}}const Qs="oceanscope.velocity-diagnosis.v1",w0="native-xz-paired-v1";function S0(n,a,t,s=new Date().toISOString()){const{display:i,direction:c,probe:r}=n,[o]=a.lattice.dimensions,{arrows:l}=i;return structuredClone({schema:Qs,createdAt:s,source:{caseId:a.caseId,codeRevision:t,calculation:w0,protocolSha256:a.protocolSha256,originals:a.source,resource:a.resource},alignment:{lattice:a.lattice,unitClaim:a.unitClaim,unitEvidence:a.unitEvidence,vectorBasis:a.vectorBasis},domain:{id:n.domain,definition:n.domainDefinition},plane:{frame:a.frame,axis:"xz",yIndex:n.yIndex,yWorld:n.yWorld},roi:n.roiXZ,probe:{xIndex:r.index%o,zIndex:Math.floor(r.index/o),xyz:r.xyz},appearance:{mode:i.mode,zoom:i.zoomed,viewport:i.view,ranges:i.ranges},arrows:{enabled:l!==null,stride:l?.stride??null,gain:l?.gain??null,referenceSpeed:l?.referenceSpeed??null,referenceGridLength:l?.referenceGridLength??null},angleThreshold:{tau:c.tau,unit:c.unit,source:c.thresholdSource},summary:{whole:n.whole,roi:n.local,direction:{whole:c.whole,roi:c.local}},samples:{scope:"Probe and displayed arrow anchors. CSV contains the full native slice.",probe:r,arrowNativeIndices:l?.points.map(f=>f.index)??[]},surfaceCase:n.surfaceRequest})}function j0(n,a,t){const{plane:s,domain:i}=n,c=new Set(n.samples.arrowNativeIndices),r=["frame,y_index,native_index,x_index,z_index,x,y,z,domain,in_roi,candidate,gt_eligible,common,probe,arrow_anchor,gt_vx,gt_vy,gt_vz,pred_vx,pred_vy,pred_vz,gt_speed,pred_speed,vector_error,speed_delta,direction_tau,angle_eligible,angle_degrees"];for(let o=0;o<a.commonMask.length;o++){const l=a.commonMask[o],f=t.mask[o],m=l?[...a.vectorsGT.subarray(3*o,3*o+3),...a.vectorsPred.subarray(3*o,3*o+3),a.speedGT[o],a.speedPred[o],a.vectorError[o],a.speedDelta[o]]:Array(10).fill("");r.push([s.frame,s.yIndex,o,o%a.width,Math.floor(o/a.width),...a.worldAt(o),i.id,a.roiMask[o],a.candidateMask[o],a.gtEligibleMask[o],l,+(o===n.samples.probe.index),Number(c.has(o)),...m,n.angleThreshold.tau,f,f?t.degrees[o]:""].join(","))}return r.join(`
`)+`
`}function B0(n,a,t=.25){const{width:s,height:i,stepX:c,stepZ:r,commonMask:o}=n,l=Math.min(c,r),f=l*t,m=l,g=24*l,y=Math.round(g/f),u=1e-8,p=E=>{const[j,,w]=n.worldAt(0);return[j+E[0]*c,w+E[1]*r]};function d(E,j){const[w,B]=E;if(w<0||B<0||w>=s-1||B>=i-1)return{stop:"grid"};const k=Math.floor(w)+s*Math.floor(B),b=w%1,R=B%1,M=[k,k+1,k+s,k+s+1],A=[(1-b)*(1-R),b*(1-R),(1-b)*R,b*R];if(M.some(T=>!o[T]))return{stop:"mask"};const P=T=>M.reduce((H,O,z)=>H+A[z]*j[O*3+T],0),F=P(0),N=P(2),W=Math.hypot(F,N);return W<=u?{stop:"slow"}:{dir:[F/W/c,N/W/r]}}const h=(E,j,w)=>[E[0]+w*j[0],E[1]+w*j[1]];function _(E){const j=[];let w=a;for(let B=0;B<=y;B++){const k=d(w,E);if(k.stop)return{points:j,stop:k.stop};if(j.push(p(w)),B===y)return{points:j,stop:"limit"};const b=d(h(w,k.dir,f/2),E);if(b.stop)return{points:j,stop:b.stop};const R=h(w,b.dir,f),M=[0,1];for(let A=0;A<2;A++)for(let P=Math.floor(Math.min(w[A],R[A]))+1;P<Math.max(w[A],R[A]);P++)M.push((P-w[A])/(R[A]-w[A]));M.sort((A,P)=>A-P);for(let A=1;A<M.length;A++){const P=d(h(w,b.dir,f*(M[A]+M[A-1])/2),E);if(P.stop)return{points:j,stop:P.stop}}w=R}}const C=_(n.vectorsGT),v=_(n.vectorsPred);let x=null;for(let E=1;E<Math.min(C.points.length,v.points.length);E++){const j=C.points[E],w=v.points[E],B=Math.hypot(j[0]-w[0],j[1]-w[1]);if(B>=m){x={i:E,arc:E*f,gap:B,gt:j,pred:w};break}}return{seed:p(a),step:f,separation:m,maxArc:g,floor:u,gt:C,pred:v,split:x}}function gt(n,a,t){const s=n.points;return s.flatMap((i,c)=>!c||c===s.length-1||i.x<a.xmin||i.x>a.xmax||i.z<a.zmin||i.z>a.zmax?[]:s.slice(c-1,c+2).every(o=>Number.isFinite(o.a)&&Number.isFinite(o.b))?s[c-1][t]<i[t]&&s[c+1][t]<i[t]?[c]:[]:[])}function C0(n,a){if(!a||!["first","second"].includes(a.profile)||!["uncertain","paired"].includes(a.status))throw Error("Invalid crest annotation");const t=n.profiles[a.profile];for(const c of["a","b"])if(!gt(t,n.roi,c).includes(a[c]))throw Error("Invalid crest sample");const s=t.points[a.a],i=t.points[a.b];return{gt:s,pred:i,deltaHeight:i.b-s.a,deltaDistance:i.distance-s.distance}}const pe=(n,a=6)=>n==null?"N/A":Number(n).toPrecision(a);function oe(n,a,t,s,i=1800,c=23,r="#203747"){for(n.fillStyle=r,n.font=`${c}px sans-serif`;n.measureText(String(a)).width>i&&c>12;)n.font=`${--c}px sans-serif`;n.fillText(String(a),t,s)}function Va(n,a,t,s,i,c=20){n.font=`${c}px sans-serif`,n.fillStyle="#3c5365";let r="";for(const o of String(a).split(" ")){const l=r?r+" "+o:o;n.measureText(l).width>i&&r?(n.fillText(r,t,s),s+=c+8,r=o):r=l}return n.fillText(r,t,s),s+c+8}function A0(n,a,t,s,i,c,r,o,l,f){const[m,g]=a.descriptor.shape,y=document.createElement("canvas");y.width=g,y.height=m;const u=y.getContext("2d"),p=u.createImageData(g,m),d=s==="difference",h=d&&t.appearance?.absoluteError,_=d?a.common:a[s==="heightA"?"wetA":"wetB"],C=d?[h?0:-f,f]:l;for(let B=0;B<m;B++)for(let k=0;k<g;k++){const b=B*g+k,R=((m-1-B)*g+k)*4;if(!_[b]){p.data.set([225,230,235,255],R);continue}const M=a.heightB[b]-a.heightA[b],A=d?h?Math.abs(M):M:a[s][b],P=Math.max(0,Math.min(1,(A-C[0])/(C[1]-C[0]))),F=d&&!h?P<.5?[80+350*P,130+230*P,220+70*P]:[255,245-350*(P-.5),255-440*(P-.5)]:[35+195*P,75+155*P,155+70*P];p.data.set([...F,255],R)}u.putImageData(p,0,0),n.imageSmoothingEnabled=!1,n.drawImage(y,i,c,r,o);const{originXYZ:[v,,x],spacing:E}=a.descriptor,j=(B,k)=>[i+(B-v+E/2)/(g*E)*r,c+o-(k-x+E/2)/(m*E)*o];n.strokeStyle="#182b3c",n.lineWidth=2;for(const B of t.profiles?Object.values(t.profiles):[t.profile])B?.points.length&&(n.beginPath(),B.points.forEach((k,b)=>n[b?"lineTo":"moveTo"](...j(k.x,k.z))),n.stroke());if(t.roi){const B=j(t.roi.xmin,t.roi.zmax),k=j(t.roi.xmax,t.roi.zmin);n.save(),n.beginPath(),n.rect(i,c,r,o),n.clip(),n.strokeRect(B[0],B[1],k[0]-B[0],k[1]-B[1]),n.restore()}if(t.probe){const[B,k]=j(t.probe.x,t.probe.z);n.beginPath(),n.moveTo(B-5,k),n.lineTo(B+5,k),n.moveTo(B,k-5),n.lineTo(B,k+5),n.stroke()}const w=n.createLinearGradient(i,0,i+r,0);d&&!h?(w.addColorStop(0,"rgb(80,130,220)"),w.addColorStop(.5,"rgb(255,245,255)"),w.addColorStop(1,"rgb(255,70,35)")):(w.addColorStop(0,"rgb(35,75,155)"),w.addColorStop(1,"rgb(230,230,225)")),n.fillStyle=w,n.fillRect(i,c+o+8,r,9),oe(n,`${pe(C[0])} ... ${pe(C[1])} m`,i,c+o+38,r,21),oe(n,`X ${pe(v,4)} ... ${pe(v+(g-1)*E,4)}; Z ${pe(x,4)} ... ${pe(x+(m-1)*E,4)} m`,i,c+o+62,r,19)}function za(n,a,t,s,i,c,r=null,o=null,l="en"){const f=(j,w)=>l==="zh"?j:w,m=a.profile?.points??[],g=m.flatMap(j=>[j.a,j.b]).filter(Number.isFinite);if(oe(n,`${f("剖面：","Section: ")}${o??a.view.plane.toUpperCase()} / ${a.profile?.sampling==="native_columns"?f("原生列","native columns"):a.profile?.sampling==="bilinear_common_four"?f("双线性插值 · 四邻点共同有效","bilinear · all four neighbours valid"):f("无高度剖面","no height profile")}`,t,s,i,24),!g.length){oe(n,f("此截面无有效高度剖面。","No valid height profile for this section."),t,s+50,i);return}const y=r?.[0]??Math.min(...g),u=r?.[1]??Math.max(...g),p=Math.max(u-y,1e-9),d=m[0].distance,h=Math.max(m.at(-1).distance-d,1e-9),_=Math.max(...m.map(j=>Math.abs(j.difference??0)),1e-9),C=t+65,v=s+45,x=i-95,E=c-120;if(a.diagnosis){const j=a.roi?Sa(a.profile,a.roi):null;if(j){const B=Math.max(d,j[0]),k=Math.min(d+h,j[1]);k>=B&&(n.fillStyle="#deefee",n.fillRect(C+(B-d)/h*x,v,(k-B)/h*x,E+65))}n.strokeStyle="#888",n.beginPath();const w=C-d/h*x;n.moveTo(w,v),n.lineTo(w,v+E+65),n.stroke(),oe(n,f("热点 t=0","hotspot t=0"),w+3,v,100,16)}n.strokeStyle="#798699",n.lineWidth=1,n.beginPath(),n.moveTo(C,v+E+35),n.lineTo(C+x,v+E+35),n.stroke(),oe(n,"0",t+35,v+E+40,25,18);for(const[j,w]of[["a","#2583c5"],["b","#e08b22"],["difference","#9b4778"]]){n.strokeStyle=w,n.lineWidth=2,n.beginPath();let B=!1;for(const k of m){if(k[j]==null){B=!1;continue}const b=C+(k.distance-d)/h*x,R=j==="difference"?v+E+35-k[j]/_*25:v+E*.7-(k[j]-y)/p*E*.7;n[B?"lineTo":"moveTo"](b,R),B=!0}n.stroke()}if(a.crest)for(const[j,w]of[["a","#176693"],["b","#a75400"]]){const B=m[a.crest[j]],k=C+(B.distance-d)/h*x,b=v+E*.7-(B[j]-y)/p*E*.7;n.strokeStyle=w,n.lineWidth=2,n.beginPath(),n.arc(k,b,5,0,2*Math.PI),n.stroke()}oe(n,`${pe(u,4)} m`,t,v+12,65,16),oe(n,`${pe(y,4)} m`,t,v+E*.7,65,16),oe(n,`B-A ±${pe(_,4)} m`,C,v+E+70,x,18),oe(n,`${f("GT 蓝 / B 橙 / B-A 紫；距离 ","GT blue / B orange / B-A purple; distance ")}${pe(d,5)} ... ${pe(d+h,5)} m`,C,s+c+35,x,18)}function k0(n,a,t=null,s="en"){const i=(d,h)=>s==="zh"?d:h,c=document.createElement("canvas");c.width=1920,c.height=n.diagnosis?2650:2220;const r=c.getContext("2d");if(!r)throw Error("Report canvas unavailable");r.fillStyle="#f6f9fb",r.fillRect(0,0,c.width,c.height),r.fillStyle="#123247",r.fillRect(0,0,1920,170),oe(r,`${i("OceanScope / 分析报告 / 帧 ","OceanScope / analysis report / frame ")}${n.view.frame}`,60,68,1800,43,"#fff"),oe(r,`${n.source.runId} · ${n.createdAt}`,60,115,1800,22,"#d0e6ee"),oe(r,`${i("高度：全部96帧 | 速度：","Height: all96 | Velocity: ")}${n.view.selection.subset==="all"?i("全部96帧","all96"):i("固定六帧","fixed six")} / ${n.view.selection.grid==="fine"?i("原生网格","native grid"):i("XZ 2×2均值","XZ 2×2 mean")}${i(" | ROI：当前原生列"," | ROI: current native columns")}`,60,150,1800,22,"#d0e6ee");let o=1/0,l=-1/0,f=1e-9;for(let d=0;d<a.heightA.length;d++){for(const h of["A","B"])a["wet"+h][d]&&(o=Math.min(o,a["height"+h][d]),l=Math.max(l,a["height"+h][d]));a.common[d]&&(f=Math.max(f,Math.abs(a.heightB[d]-a.heightA[d])))}const m=Number.isFinite(o)?[o,l>o?l:o+1]:[0,1];[["heightA",i("A / Ground Truth","A / Ground Truth")],["heightB",i("B / 预测","B / Prediction")],["difference",n.appearance?.absoluteError?i("|B - A| / 绝对高度差","|B - A| / absolute height"):i("B - A / 有符号高度差","B - A / signed height")]].forEach(([d,h],_)=>{oe(r,h,60+_*620,215,580,28),A0(r,a,n,d,60+_*620,240,560,320,m,f)});const g=d=>d==null?null:d*100,y=(d,h)=>`${h}: ${d?.common??0}${i(" 共同列 | MAE "," common columns | MAE ")}${pe(g(d?.mae_m))}${i(" cm | Bias "," cm | bias ")}${pe(g(d?.bias_m))} cm | RMSE ${pe(g(d?.rmse_m))} cm`;if(oe(r,y(n.global,i("当前帧高度","Current frame height")),60,645,1800,25),oe(r,n.local?y(n.local,i("选区高度","Selected ROI height")):i("ROI：未选择","ROI: none selected"),60,682,1800,25),oe(r,n.roi?`ROI X [${n.roi.xmin}, ${n.roi.xmax}] / Z [${n.roi.zmin}, ${n.roi.zmax}] m`:i("灰色格点为缺测，不计为零。","Gray cells are unavailable, never zero."),60,719,1800,21),n.profiles){const d=Object.values(n.profiles).flatMap(_=>_.points.flatMap(C=>[C.a,C.b])).filter(Number.isFinite),h=d.length?[Math.min(...d),Math.max(...d)]:[0,1];za(r,{...n,profile:n.profiles.first},60,770,850,300,h,i("热点剖面1","hotspot 1"),s),za(r,{...n,profile:n.profiles.second},990,770,850,300,h,i("热点剖面2","hotspot 2"),s)}else za(r,n,60,770,990,300,null,null,s);if(t&&!n.diagnosis){const d=Math.min(770/t.width,320/t.height);r.drawImage(t,1110+(770-t.width*d)/2,780,t.width*d,t.height*d),oe(r,i("当前帧三维预览；相机保存在 JSON 中","Current-frame 3D preview; camera retained in JSON"),1110,1130,770,20)}else n.diagnosis||Va(r,`${i("当前帧无三维截图：","No current-frame 3D capture: ")}${n.view.geometryStatus?.reason??i("不可用","unavailable")}${i("。保留原生空间数据和帧身份，不替换为邻帧。",". Native spatial data and frame identity are retained; no neighboring frame substituted.")}`,1120,850,700,25);n.diagnosis?.caseNote&&oe(r,i("案例观察：","Case observation: ")+n.diagnosis.caseNote,60,1155,1800,23),oe(r,i("序列指标 / 明示有效域；完整精度与定义见 CSV + JSON","Sequence metrics / labelled scopes; full precision and definitions in CSV + JSON"),60,1200,1800,29);const u=Math.ceil(n.metrics.length/2);n.metrics.forEach((d,h)=>{const _=h>=u?1:0,C=h%u,v=60+_*930,x=1245+C*35;oe(r,s==="zh"?d.labelZh??d.label:d.label,v,x,620,20),oe(r,`${pe(d.value,8)} ${d.unit}`,v+630,x,260,20)});let p=1840;p=Va(r,s==="zh"&&n.scope==="Native highest-crossing height columns; ROI/profile do not replace all96 global metrics. Units are source convention, not independently calibrated."?"原生最高过零高度列；ROI / 剖面不替代全部96帧的全局指标。单位沿用来源约定，未独立标定。":n.scope,60,p,1800,22),p=Va(r,i("实验来源：模型、相机、划分与单位均为来源声明。检查点哈希未知。已核对原始文件清单身份；未独立审计训练历史或物理标定。","Experiment provenance: model / cameras / split / units are source declarations. Checkpoint hash is unknown. Original-file manifest identities were verified; training history and physical calibration were not independently audited."),60,p+8,1800,21);for(const[d,h]of Object.entries(n.source))oe(r,`${d}: ${h}`,60,p+28,1800,18),p+=28;if(n.evidence){let d=2190;oe(r,`${i("热点 (","Hotspot (")}${n.diagnosis.hotspot.ix},${n.diagnosis.hotspot.iz}) X=${pe(n.probe.x)} Z=${pe(n.probe.z)}${i(" | 方向 "," | direction ")}${n.diagnosis.directionDeg}${i(" 度"," deg")}`,60,d,1800,25),d+=42;for(const[h,_]of[[i("帧","Frame"),n.evidence.frame],["ROI",n.evidence.roi]])_&&(oe(r,`${h}${i(": 共同 ",": common ")}${_.common}${i(" / 候选 "," / candidate ")}${_.candidates} / GT ${_.validGT}${i(" / 预测 "," / prediction ")}${_.validPrediction}${i("; 共同/候选 ","; common/candidate ")}${pe(_.coverageCandidate)}${i("; 共同/GT ","; common/GT ")}${pe(_.coverageGT)}`,60,d,1800,21),d+=30,oe(r,`${h}${i(" 最大 |B-A|="," max |B-A|=")}${pe(_.maximum?.absolute)}${i(" m 位置 "," m at ")}${_.maximum?`X=${pe(_.maximum.x)}, Z=${pe(_.maximum.z)}${i(", 索引=",", index=")}${_.maximum.index}${i(", 并列=",", ties=")}${_.maximum.ties}`:"N/A"}`,60,d,1800,21),d+=32);for(const h of["first","second"])for(const _ of["full","roi"]){const C=n.evidence[h][_];C&&(oe(r,`${h==="first"?i("剖面1","Profile 1"):i("剖面2","Profile 2")} / ${_==="full"?i("全线","full line"):i("选区内","within ROI")}: n=${C.samples}${i("; 样本平均 MAE=","; sample mean MAE=")}${pe(C.mae)}${i(" m; Bias="," m; bias=")}${pe(C.bias)}${i(" m; 最大="," m; max=")}${pe(C.maximum?.absolute)}${i(" m（非面积统计）"," m (not area statistics)")}`,60,d,1800,20),d+=27)}}return oe(r,i("使用 JSON 在 OceanScope 恢复此快照。必须匹配本地资源；测量值会重新计算。","Restore this snapshot in OceanScope with its JSON. Local resources must match; measurements are recomputed."),60,c.height-25,1800,20),c}const M0={vectorError:{title:"速度向量误差 E",label:"Velocity vector error map",palette:"absolute-error"},speedDelta:{title:"流速大小差 Δs",label:"Velocity speed delta map",palette:"error"},direction:{title:"三维方向夹角",label:"Velocity direction angle map",palette:"absolute-error"}};function yt(n,a="zh"){const t=[{key:"speedGT",title:"GT 流速",label:"Velocity GT speed map",palette:"ground-truth",role:"gt"},{key:"speedPred",title:"预测流速",label:"Velocity prediction speed map",palette:"ground-truth",role:"pred"},{key:n,...M0[n]}],s={speedGT:"GT speed",speedPred:"Prediction speed",vectorError:"Velocity vector error E",speedDelta:"Speed difference Δs",direction:"3D direction angle"};return a==="zh"?t:t.map(i=>({...i,title:s[i.key]}))}function ei(n,a,t,s){const i=[n+t,a+s];return[[n,a],i,[i[0]-.32*t+.2*s,i[1]-.32*s-.2*t],i,[i[0]-.32*t-.2*s,i[1]-.32*s+.2*t]]}const fe=(n,a=6)=>Number.isFinite(n)?n.toPrecision(a):"N/A",bs=n=>n==null?"N/A":(100*n).toFixed(2)+"%";function he(n,a,t,s,i=1480,c=21,r="#203747"){for(n.fillStyle=r,n.font=`${c}px sans-serif`;n.measureText(String(a)).width>i&&c>14;)n.font=`${--c}px sans-serif`;n.fillText(a,t,s,i)}function ps(n,a,t,s,i,c,r){n.beginPath(),s===0&&i===0?n.arc(a,t,3,0,2*Math.PI):ei(0,0,s,i).forEach(([o,l],f)=>n[f===0||f===2?"moveTo":"lineTo"](a+o*c,t+l*r)),n.lineCap="round",n.lineJoin="round",n.lineWidth=4,n.strokeStyle="#fff",n.stroke(),n.lineWidth=1.5,n.strokeStyle="#10273c",n.stroke()}function ni(n,a,t,s,i,c,r,o="zh"){const l=(F,N)=>o==="zh"?F:N,{key:f,title:m,palette:g,role:y}=a,{viewport:u,zoom:p,ranges:d}=t.appearance,h=d[y?"speed":f],_=Math.min(470/(u.width*s.stepX),340/(u.height*s.stepZ)),C=_*s.stepX,v=_*s.stepZ,x=u.width*C,E=u.height*v,j=202;he(n,m,r,186,470,25);const w=document.createElement("canvas");w.width=u.width,w.height=u.height,Ds(w.getContext("2d"),{...s,values:f==="direction"?i.degrees:s[f]},f==="direction"?i.mask:s.commonMask,h,g,u),n.imageSmoothingEnabled=!1,n.drawImage(w,r,j,x,E);const B=F=>r+(F-u.x+.5)*C,k=F=>j+(u.z+u.height-F-.5)*v;n.save(),n.beginPath(),n.rect(r,j,x,E),n.clip();const b=s.roiView;if(!p&&b&&(n.strokeStyle="#9c6900",n.lineWidth=2,n.strokeRect(B(b.x)-C/2,k(b.z+b.height-1)-v/2,b.width*C,b.height*v)),y)for(const F of c){const[N,W]=F[y==="gt"?"gtOffset":"predOffset"];ps(n,B(F.x),k(F.z),N,-W,C,v)}const R=B(t.probe.xIndex),M=k(t.probe.zIndex);R>=r&&R<r+x&&M>=j&&M<j+E&&(n.setLineDash([6,5]),n.beginPath(),n.moveTo(R,j),n.lineTo(R,j+E),n.moveTo(r,M),n.lineTo(r+x,M),n.strokeStyle="#fff",n.lineWidth=3,n.stroke(),n.strokeStyle="#111",n.lineWidth=1,n.stroke()),n.restore();const A=n.createLinearGradient(r,0,r+470,0);for(const F of[0,.5,1])A.addColorStop(F,`rgb(${Os(h[0]+F*(h[1]-h[0]),h,g).join(",")})`);n.fillStyle=A,n.fillRect(r,562,470,11);const P=f==="direction"?"°":" m/s";he(n,`${fe(h[0],4)}${f==="speedDelta"?" / 0":""} / ${fe(h[1],4)}${P}${y?l(" · 共用色标"," · Shared scale"):""}`,r,599,470),he(n,f==="direction"?l("X → · Z ↑ · 棋盘为夹角不可判定","X → · Z ↑ · Checkerboard: angle unavailable"):l("X → · Z ↑ · 棋盘为不在共同有效域","X → · Z ↑ · Checkerboard: outside common domain"),r,629,470,19),y&&c.length&&t.arrows.referenceSpeed&&(ps(n,r+8,654,t.arrows.referenceGridLength,0,C,v),he(n,`${l("参考 ","Reference ")}${fe(t.arrows.referenceSpeed,4)} m/s · ${c.length}${l(" 个配对点"," paired points")}`,r,683,470,19))}function R0(n,a,t,s,i="zh"){const c=(_,C)=>i==="zh"?_:C,r=document.createElement("canvas");r.width=1560,r.height=1170;const o=r.getContext("2d");if(!o)throw Error("Velocity report canvas unavailable");o.fillStyle="#f6f9fb",o.fillRect(0,0,1560,1170),o.fillStyle="#123247",o.fillRect(0,0,1560,142);const{plane:l,domain:f,roi:m,summary:g,angleThreshold:y,samples:u,source:p,surfaceCase:d}=n;he(o,`${c("OceanScope · 速度诊断 · 第 ","OceanScope · Velocity diagnosis · frame ")}${l.frame}${c(" 帧"," ")}`,40,60,1480,38,"#fff"),he(o,`${c("XZ · Y 索引 ","XZ · Y index ")}${l.yIndex}${c(" · 世界 Y "," · World Y ")}${fe(l.yWorld,9)} m · ${f.id}`,40,100,1480,24,"#d0e6ee"),he(o,`${p.caseId} · ${d.surfaceCaseId} · ${n.createdAt}`,40,128,1480,19,"#d0e6ee"),yt(n.appearance.mode,i).forEach((_,C)=>ni(o,_,n,a,t,s?.points??[],40+505*C,i)),he(o,`ROI X [${fe(m.xmin)}, ${fe(m.xmax)}] · Z [${fe(m.zmin)}, ${fe(m.zmax)}] m`,40,724),he(o,`${c("水面热点 X ","Surface hotspot X ")}${fe(d.hotspotXZ.x)} · Z ${fe(d.hotspotXZ.z)} · ${d.caseNote.slice(0,150)}`,40,757);const h=u.probe;he(o,`${c("探针 XYZ (","Probe XYZ (")}${h.xyz.map(_=>fe(_)).join(", ")}) · GT ${fe(h.speedGT)}${c(" · 预测 "," · Prediction ")}${fe(h.speedPred)} · E ${fe(h.E)} · Δs ${fe(h.speedDelta)}${c(" · 夹角 "," · Angle ")}${fe(h.angleDegrees)}°`,40,790);for(const[_,C,v]of[["whole",c("整切片","Whole slice"),835],["roi","ROI",906]]){const x=g[_],E=g.direction[_];he(o,`${C}${c(" · 共同 "," · Common ")}${x.counts.common}${c(" / 候选 "," / Candidate ")}${x.counts.candidate}${c(" · 共同/候选 "," · Common/candidate ")}${bs(x.coverageCandidate)}${c(" · 共同/GT "," · Common/GT ")}${bs(x.coverageGT)}${c(" · 平均 E "," · Mean E ")}${fe(x.meanE)}${c(" · 平均 Δs "," · Mean Δs ")}${fe(x.meanSpeedDelta)}`,40,v),he(o,`${c("最大 E ","Maximum E ")}${fe(x.maximum?.value)}${c(" · 平均三维夹角 "," · Mean 3D angle ")}${fe(E.meanDegrees)}${c("° · 夹角有效 ","° · Angle valid ")}${E.count}${c(" · 低速排除 "," · Low-speed excluded ")}${E.excludedLowSpeedCount??"N/A"}`,40,v+30)}return he(o,`${c("方向阈值 τ = ","Direction threshold τ = ")}${y.tau??c("停用","Disabled")}${c(" · 箭头为 XZ 投影 · 速度 m/s、坐标 m 均沿用来源声明"," · Arrows: XZ projections · Source units: velocity m/s, coordinates m")}`,40,991),he(o,c("当前 Y 层诊断，非整帧体积评分；物理与时间尺度、向量基底尚未独立标定。","Current Y-layer diagnosis, not a volume score; physical/time scales and vector basis are not independently calibrated."),40,1025,1480,19),he(o,f.definition.rule??f.id,40,1096,1480,17),he(o,`${c("代码 ","Code ")}${p.codeRevision}${c(" · 资源 SHA-256 "," · Resource SHA-256 ")}${p.resource.packedSha256}`,40,1064,1480,18),he(o,c("使用配套 JSON 恢复视图。恢复时核验资源并重算。CSV 保留整层原生格点。","Restore with the companion JSON; resources are verified and metrics recomputed. CSV retains the whole native layer."),40,1128,1480,19),r}function P0(n,a,t="zh"){const s=(g,y)=>t==="zh"?g:y,i=document.createElement("canvas");i.width=1560,i.height=1940;const c=i.getContext("2d");if(!c)throw Error("Velocity comparison canvas unavailable");const{scope:r,result:o,source:l,view:f}=n;c.fillStyle="#f6f9fb",c.fillRect(0,0,i.width,i.height),c.fillStyle="#123247",c.fillRect(0,0,i.width,148),he(c,s("OceanScope · Best_1027 三帧速度对照","OceanScope · Best_1027 three-frame velocity comparison"),40,56,1480,38,"#fff"),he(c,`XZ · Y=${r.plane.yIndex} · ROI X [${fe(r.roi.xmin)}, ${fe(r.roi.xmax)}] Z [${fe(r.roi.zmin)}, ${fe(r.roi.zmax)}] m · τ=${r.tau} m/s`,40,99,1480,22,"#d0e6ee"),he(c,`${s("三帧共同有效 ","Common valid across three frames ")}${o.shared}/${o.roiCandidates}${s(" · 夹角共同有效 "," · Common angle-valid ")}${o.sharedAngles}${s(" · 共用色标和箭头比例"," · Shared colour and arrow scales")}`,40,130,1480,21,"#d0e6ee");const m={xIndex:f.probe[0],zIndex:f.probe[1]};return a.rows.forEach(({frame:g,slice:y,angles:u,arrows:p,summary:d},h)=>{const _=155+h*570;he(c,`${s("帧 ","Frame ")}${g}${s(" · 本帧 ROI "," · Frame ROI ")}${d.nativeRoi}/${o.roiCandidates}${s(" · 共同样本平均 E "," · Common-sample mean E ")}${fe(d.meanE)} m/s · Δs ${fe(d.meanDelta)}${s(" m/s · 夹角 "," m/s · Angle ")}${fe(d.meanAngle)}°`,40,_+25,1480,25),c.save(),c.translate(0,_-129);const C={appearance:{viewport:a.view,zoom:!0,ranges:o.ranges},probe:m,arrows:p};yt(f.mode,t).forEach((v,x)=>ni(c,v,C,y,u,f.arrows?p.points:[],40+505*x,t)),c.restore()}),he(c,`${s("探针原生 XZ 索引 (","Probe native XZ index (")}${f.probe.join(", ")}${s(") · 棋盘表示未纳入对应共同有效域 · 单位沿用来源声明",") · Checkerboard: outside common support · Source-declared units")}`,40,1890),he(c,`${s("代码 ","Code ")}${l.codeRevision}${s(" · 逐帧资源身份和恢复设置见配套 JSON · "," · Per-frame resource identities and restore settings: companion JSON ·")}${n.createdAt}`,40,1920,1480,18),i}function I0(n,a){const t=String(n?.message??n??""),s=(i,c)=>a?i:c;return/AbortError|cancelled|canceled/i.test(n?.name+" "+t)?s("操作已取消。当前文件可以稍后重新打开。","Operation cancelled. You can reopen the file later."):/too large|^size$/i.test(t)?s("文件过大。请选择本工具导出的分析 JSON；完整报告上限1 MB，场比较方案上限2 MB。","File too large. Choose an exported analysis JSON: reports up to1 MB, field views up to2 MB."):/Invalid analysis JSON|^json$|JSON|Unexpected token|Unexpected end/i.test(t)&&!/(format|Unsupported)/i.test(t)?s("JSON内容不完整或格式有误。请重新选择原始导出文件，或粘贴文件全文。","Invalid or incomplete JSON. Select the original exported file or paste its entire contents."):/Unsupported|^format$/.test(t)?s("这个文件不能恢复分析。请选择完整分析报告、场比较方案或序列选择 JSON；PNG、CSV和数据说明文件只能查看。","This file cannot restore analysis. Choose an analysis-report, field-view or sequence-selection JSON; images, CSV and data-info files are for viewing."):/checksum|identity|mismatch|does not match|^source$/i.test(t)?s("数据或报告身份不匹配。请确认数据组合，使用同一版本导出的报告及配套资源；资源损坏时重新复制并校验，勿修改文件中的身份信息。","Data or report identity differs. Confirm the dataset and use its matching report/resources. Recopy and verify damaged resources; do not edit identity fields."):/404|unavailable|failed to fetch|network|^dataset$|No spatial resource/i.test(t)?s("数据下载未完成。请检查网络并重试；无三维预览的帧仍可查看高度分析。","The data download did not complete. Check your connection and retry. Frames without 3D previews still support height analysis."):/Wait|not ready|loading|Timed out/i.test(t)?s("数据尚未准备好。等待当前组合加载完成后重试；持续失败时检查本页的数据资源提示。","Data is not ready. Wait for the current dataset to load and retry; if it persists, check this page’s resource message."):/View changed/i.test(t)?s("恢复期间视图已改变，已停止应用旧请求。请在当前视图重新打开报告。","The view changed during restoration. Reopen the report from the current view."):s("操作未完成。确认文件来自当前工具、帧号和参数有效，然后重试；具体原因可查看技术详情。","The operation did not complete. Confirm the file comes from this tool and its frame/settings are valid, then retry; technical details are below.")}function Je({error:n,zh:a,resource:t,onRetry:s}){return n?e.createElement("div",{"data-os-loc":"src/AnalysisError.jsx:18:9",className:"analysis-error",role:"alert"},e.createElement("strong",{"data-os-loc":"src/AnalysisError.jsx:18:54"},a?"需要处理的问题":"Action needed"),t&&e.createElement("p",{"data-os-loc":"src/AnalysisError.jsx:18:112"},t),e.createElement("p",{"data-os-loc":"src/AnalysisError.jsx:18:130"},I0(n,a)),s&&e.createElement("button",{"data-os-loc":"src/AnalysisError.jsx:18:179","data-os-action":"",type:"button",onClick:s},a?"重新加载资源":"Reload resources"),e.createElement("details",{"data-os-loc":"src/AnalysisError.jsx:18:261"},e.createElement("summary",{"data-os-loc":"src/AnalysisError.jsx:18:270"},a?"技术详情":"Technical details"),e.createElement("code",{"data-os-loc":"src/AnalysisError.jsx:18:320"},String(n?.message??n)))):null}function N0({controlRef:n,ready:a,capture:t,prepareImport:s,applyImport:i,zh:c,unifiedRestore:r=!1}){const[o,l]=S.useState(null),[f,m]=S.useState(""),[g,y]=S.useState(""),[u,p]=S.useState(null),d=S.useRef(null),h=S.useRef(null),_=o?.language===c?o:null;function C(){d.current&&(d.current.abort(),d.current=null,m(c?"恢复已取消，保留新的操作。":"Restore cancelled; newer action retained."))}S.useImperativeHandle(n,()=>({cancel:C,clearSnapshot:()=>l(null),restoreText:(j,w)=>x({size:new TextEncoder().encode(j).length,text:async()=>j},w,!0)})),S.useEffect(()=>()=>d.current?.abort(),[]),S.useEffect(()=>{l(null),m("")},[c]),S.useEffect(()=>{const j=Object.values(_?.files??{}).map(w=>w.href).filter(w=>w?.startsWith("blob:"));return()=>{for(const w of j)URL.revokeObjectURL(w)}},[_?.files]);function v(){try{const j=t(),w=Jr(j.record,j.canvas?.toDataURL?.("image/png")??null);l({...j,language:c,previewUrl:w.png?.href??null,files:w}),p(null),m(c?"已生成当前快照，三种导出使用同一报告。":"Snapshot created; all three downloads use this report.")}catch(j){p(j)}}async function x(j,w,B=!1){if(C(),!j)return;const k=new AbortController,b=()=>k.abort();w?.addEventListener("abort",b,{once:!0}),w?.aborted&&k.abort(),d.current=k,p(null),m(c?"正在核验报告与资源…":"Verifying report and resources…");try{if(j.size>1024*1024)throw Error("Report file too large");const R=await j.text();k.signal.throwIfAborted();const M=await s(R,k.signal);k.signal.throwIfAborted(),await i(M,k.signal),k.signal.throwIfAborted(),l(null),m(c?"已恢复帧、截面、选区与可用相机；数值来自重新核验的资源。":"Restored frame, section, ROI and available camera; values recomputed from verified resources.")}catch(R){if(k.signal.aborted||(p(R),m("")),B)throw R}finally{w?.removeEventListener("abort",b),d.current===k&&(d.current=null)}}const E={png:c?"下载汇报图片 PNG":"Download presentation PNG",csv:c?"下载数据表 CSV":"Download data table CSV",json:c?"保存可恢复分析 JSON":"Save restorable analysis JSON"};return e.createElement("section",{"data-os-loc":"src/field/ProtocolReportControls.jsx:25:9",className:"protocol-report","aria-label":"Protocol evidence report"},e.createElement("h3",{"data-os-loc":"src/field/ProtocolReportControls.jsx:25:84"},c?"保存与恢复分析":"Save and restore analysis"),e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:26:3"},c?"先确认当前帧、选区、截面和相机，再生成报告。三种下载使用同一快照；后续修改视图时，请更新快照后再导出。":"Confirm frame, ROI, section and camera, then create a report. All downloads use one snapshot; update it before exporting later view changes."),e.createElement("div",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:3",className:"reference-controls"},e.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:39","data-os-action":"",disabled:!a,onClick:v},_?c?"更新报告快照":"Update report snapshot":c?"生成当前报告":"Create current report"),Object.entries(E).map(([j,w])=>_?.files[j]?e.createElement("a",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:240","data-os-action":"",key:j,className:"report-download",href:_.files[j].href,download:_.files[j].name,onClick:()=>m(c?"下载已交给浏览器，请在下载列表确认文件。也可展开“下载帮助与 JSON 文本”复制完整分析。":"Download handed to the browser. Check its download list; Download help and JSON text also provides the complete analysis for copying.")},w):e.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:573",key:j,disabled:!0},w))),_&&e.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:12"},e.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:21"},c?"下载帮助与 JSON 文本":"Download help and JSON text"),e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:90"},c?"文件由浏览器保存，位置取决于浏览器设置。可在浏览器下载列表中找到文件。继续分析也可选中下方全部 JSON，按 Ctrl+C（Mac：⌘C）复制，再粘贴到顶部“恢复分析”；长期保留请下载 JSON 文件。":"Your browser saves the files according to its download settings. Find them in its download list. To resume without choosing a file, select all JSON below, copy with Ctrl+C (Mac: ⌘C), then paste into Restore analysis. Download the JSON file for long-term storage."),e.createElement("label",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:470"},c?"完整分析 JSON":"Complete analysis JSON",e.createElement("textarea",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:518",ref:h,"aria-label":"Report JSON for copying",rows:"6",readOnly:!0,spellCheck:!1,value:_.files.json.content})),e.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:662","data-os-action":"",type:"button",onClick:()=>{h.current?.focus(),h.current?.select(),m(c?"已选中完整 JSON。按 Ctrl+C（Mac：⌘C）复制。":"Complete JSON selected. Press Ctrl+C (Mac: ⌘C) to copy.")}},c?"选中全部 JSON":"Select all JSON")),!_&&e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:29:13"},c?"生成报告后即可下载。PNG用于展示，CSV保留数值，JSON用于继续同一次分析。":"Create a report to enable downloads. PNG is for presentation, CSV for numbers, and JSON for resuming the analysis."),_&&e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:30:12"},c?"导出快照 · 帧":"Export snapshot · frame"," ",_.record.view.frame," · ",_.record.createdAt," · ",_.record.view.geometry?c?"包含已核验三维":"Verified 3D included":c?"二维证据":"2D evidence"," · ",_.record.view.geometryStatus?.reason," · ",c?"后续操作不会改变此报告；更新快照可保存新状态。":"Later actions do not change this report; update the snapshot to save the new state."),_?.previewUrl&&e.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:24"},e.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:33"},c?"预览汇报图片":"Preview presentation image"),e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:94"},c?"预览与下载使用同一报告。如果浏览器未保存PNG，可在此图片上使用“图片另存为”。":"Preview and download use the same report. If the browser does not save the PNG, use Save image as on this preview."),e.createElement("img",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:265",src:_.previewUrl,alt:c?`帧 ${_.record.view.frame} 汇报图片`:`Frame ${_.record.view.frame} report image`,style:{display:"block",width:"100%",height:"auto"}})),r?e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:32:19"},e.createElement("a",{"data-os-loc":"src/field/ProtocolReportControls.jsx:32:22","data-os-action":"",href:"#restore-analysis",onClick:()=>{const j=document.getElementById("restore-analysis");j&&(j.open=!0)}},c?"恢复分析：选择文件或粘贴 JSON":"Restore analysis: choose a file or paste JSON")):e.createElement(e.Fragment,null,e.createElement("label",{"data-os-loc":"src/field/ProtocolReportControls.jsx:33:3"},c?"导入分析报告 JSON":"Import analysis report JSON"," ",e.createElement("input",{"data-os-loc":"src/field/ProtocolReportControls.jsx:33:59","data-os-action":"",type:"file",accept:"application/json,.json","aria-label":"Restore protocol report",onChange:j=>{x(j.target.files?.[0]),j.target.value=""}})),e.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:3"},e.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:12"},c?"粘贴报告 JSON":"Paste report JSON"),e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:67"},c?"文件选择不可用时，可粘贴报告内容，使用相同的核验与恢复流程。":"If file selection is unavailable, paste the report content for the same verified restoration."),e.createElement("textarea",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:207","data-os-action":"","aria-label":"Protocol report JSON text",rows:"6",value:g,onChange:j=>{C(),y(j.target.value)}}),e.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:332","data-os-action":"",disabled:!g.trim(),onClick:()=>x({size:new TextEncoder().encode(g).length,text:async()=>g})},c?"恢复粘贴的报告":"Restore pasted report"))),e.createElement(Je,{error:u,zh:c}),e.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:35:45",role:"status"},f))}const ai=["xmin","xmax","zmin","zmax"];function F0(n){return Number(n.toFixed(4)).toString()}function Xa(n){return Object.fromEntries(ai.map(a=>[a,F0(n[a])]))}function O0(n,a,t){const s={},i={};for(const c of ai)!n[c]?.trim()||!Number.isFinite(Number(n[c]))?i[c]="number":s[c]=t[c]?Number(n[c]):a[c];for(const[c,r]of[["xmin","xmax"],["zmin","zmax"]])!i[c]&&!i[r]&&s[c]>s[r]&&(i[c]="order",i[r]="order");return{values:s,errors:i,valid:Object.keys(i).length===0}}function at({profile:n,roi:a,limits:t,label:s,errorLimit:i,reviewId:c}){const{language:r}=ie(),o=(C,v)=>r==="zh"?C:v,l=n.points,f=l[0].distance,m=l.at(-1).distance,g=Math.max(m-f,1e-9),y=Math.max(t[1]-t[0],1e-9),u=i??Math.max(1e-9,...l.map(C=>Math.abs(C.difference??0))),p=C=>45+(C-f)/g*620,d=C=>170-(C-t[0])/y*135,h=a?Sa(n,a):null;function _(C){let v=!1;return l.map(x=>{if(!Number.isFinite(x[C]))return v=!1,"";const E=v?"L":"M";return v=!0,`${E}${p(x.distance)},${C==="difference"?245-x[C]/u*38:d(x[C])}`}).join(" ")}return e.createElement("figure",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:11:9","data-review-id":c,"data-profile-axis":[f,m,45,665].join(",")},e.createElement("figcaption",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:11:88"},s," · ",n.sampling==="native_columns"?o("原生列","Native columns"):o("插值诊断 · 四邻点共同有效","Interpolated diagnosis · all four neighbours valid")),e.createElement("svg",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:11:259",viewBox:"0 0 710 300",role:"img","aria-label":s},h&&e.createElement("rect",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:12:13",x:p(Math.max(f,h[0])),y:"25",width:Math.max(0,p(Math.min(m,h[1]))-p(Math.max(f,h[0]))),height:"255",fill:"#4ba8ad",opacity:".13"}),e.createElement("line",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:2",x1:p(0),x2:p(0),y1:"25",y2:"280",stroke:"#666",strokeDasharray:"4 3"}),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:82",x:p(0)+4,y:"20"},o("热点 0","Hotspot 0")),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:136",x:"3",y:"40"},t[1].toFixed(3)),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:184",x:"3",y:"175"},t[0].toFixed(3)),e.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:233",d:_("a"),fill:"none",stroke:"#2583c5",strokeWidth:"2"}),e.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:299",d:_("b"),fill:"none",stroke:"#e08b22",strokeWidth:"2"}),e.createElement("line",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:365",x1:"45",x2:"665",y1:"245",y2:"245",stroke:"#888"}),e.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:421",d:_("difference"),fill:"none",stroke:"#9b4778"}),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:480",x:"2",y:"245"},"B−A"),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:510",x:"45",y:"298"},f.toFixed(3)," m"),e.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:555",x:"540",y:"298"},m.toFixed(3)," m")),!l.some(C=>C.a!==null)&&e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:633"},o("此剖面无共同有效高度。","No common valid height on this profile.")))}const cn=n=>n==null?"N/A":(n*100).toFixed(4)+" cm";function us({value:n,label:a}){const{language:t}=ie(),s=(i,c)=>t==="zh"?i:c;return e.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:18:8",className:"diagnostic-evidence","aria-label":a},e.createElement("strong",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:18:64"},a),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:18:88"},"MAE ",cn(n.mae)," · Bias ",cn(n.bias)," · RMSE ",cn(n.rmse)),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:18:174"},s("候选原生列 ","Candidate native columns "),n.candidates,s(" / GT有效 "," / GT valid "),n.validGT,s(" / 预测有效 "," / Prediction valid "),n.validPrediction,s(" / 共同有效 "," / Common valid "),n.common),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:18:394"},s("共同/候选 ","Common/candidate "),n.coverageCandidate==null?"N/A":(n.coverageCandidate*100).toFixed(2)+"%",s(" · 共同/GT "," · Common/GT "),n.coverageGT==null?"N/A":(n.coverageGT*100).toFixed(2)+"%"),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:18:616"},s("最大绝对误差 ","Maximum absolute error "),cn(n.maximum?.absolute)," ",n.maximum&&e.createElement(e.Fragment,null,s("· 有符号 ","· Signed "),cn(n.maximum.signed),s(" · 原生索引 ("," · Native index ("),n.maximum.ix,",",n.maximum.iz,") · X ",n.maximum.x.toFixed(6)," / Z ",n.maximum.z.toFixed(6),s(" · 并列 "," · Ties "),n.maximum.ties,s("（按索引取首点）"," (first point by index)"))))}function hs({value:n,label:a}){const{language:t}=ie(),s=(i,c)=>t==="zh"?i:c;return e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:21:8","aria-label":a},a,s(" · 有效样本 "," · Valid samples "),n.samples," · MAE ",cn(n.mae)," · Bias ",cn(n.bias),s(" · 最大 "," · Maximum "),cn(n.maximum?.absolute))}function D0({spatial:n,diagnosis:a,roi:t,onDirection:s,onRegion:i,mode:c,setMode:r,onExit:o,onNote:l}){const{language:f}=ie(),m=(v,x)=>f==="zh"?v:x,[g,y]=S.useState(""),u=S.useMemo(()=>a?pt(n,a):null,[n,a]),p=S.useMemo(()=>Zn(n),[n]),d=S.useMemo(()=>t?Zn(n,t):null,[n,t]),h=u?[...u.first.points,...u.second.points].flatMap(v=>[v.a,v.b]).filter(Number.isFinite):[],_=h.length?[Math.min(...h),Math.max(...h)]:[0,1];function C(v){v.preventDefault();const x=new FormData(v.currentTarget),E=Number(x.get("cx")),j=Number(x.get("cz")),w=Number(x.get("width")),B=Number(x.get("length"));if(![E,j,w,B].every(Number.isFinite)||w<n.descriptor.spacing||B<n.descriptor.spacing){y(m("尺寸至少为一个网格间距，请填写有限数字。","Enter finite numbers; each dimension must span at least one grid spacing."));return}const k={xmin:E-w/2,xmax:E+w/2,zmin:j-B/2,zmax:j+B/2};if(ya(k,wa(n)).clipped){y(m("选区超出数据范围，请缩小尺寸或移动中心。","The ROI exceeds the data bounds. Reduce its size or move its centre."));return}i(k),y("")}return e.createElement("section",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:29:9","aria-label":"Hotspot diagnosis"},e.createElement(us,{value:p,label:m("全域诊断 · 原生列","Full-domain diagnosis · native columns")}),d&&e.createElement(us,{value:d,label:m("ROI诊断 · 原生列","ROI diagnosis · native columns")}),e.createElement("h3",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:29:252"},m("热点与双剖面 · 最高过零高度","Hotspot and paired profiles · highest zero-crossing height")),e.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:29:344",className:"hotspot-actions"},e.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:29:377","data-os-action":"","aria-pressed":c==="select",onClick:()=>r("select")},m("定位热点","Locate hotspot")),e.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:29:485","data-os-action":"","aria-pressed":c==="adjust",onClick:()=>r("adjust")},m("调整选区","Adjust ROI"))),a?e.createElement(e.Fragment,null,e.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:30:137"},m("案例观察（120字以内，非自动归因）","Case observation (up to 120 characters; no automatic attribution)"),e.createElement("textarea",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:30:237","data-os-action":"","aria-label":"Diagnosis case note",maxLength:"120",value:a.caseNote??"",onChange:v=>l(v.target.value)})),e.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:30:373","data-os-action":"",onClick:o},m("退出热点诊断","Exit hotspot diagnosis")),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:30:445","aria-label":"Hotspot coordinates"},m("帧 ","Frame "),a.frame,m(" · 索引 ("," · Index ("),a.hotspot.ix,", ",a.hotspot.iz,") · X ",a.hotspot.x.toFixed(6)," / Z ",a.hotspot.z.toFixed(6)," m"),e.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:30:670"},m("剖面方向（场景轴 / 手动方向）","Profile direction (scene axes / manual angle)"),e.createElement("input",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:30:748","data-os-action":"","aria-label":"Hotspot direction",type:"number",min:"0",max:"180",step:"1",value:a.directionDeg,onChange:v=>{const x=v.target.valueAsNumber;Number.isFinite(x)&&x>=0&&x<=180&&s(x%180)}})),e.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:30:969","data-os-action":"",onClick:()=>s(0)},m("回到场景轴","Reset to scene axes"))):e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:30:14"},m("在任意高度图点击共同有效点，暂停并创建热点选区。","Click a common valid point on any height map to pause and create a hotspot ROI.")),t&&e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:31:10","aria-label":"Hotspot ROI summary"},m("ROI中心 X ","ROI centre X "),((t.xmin+t.xmax)/2).toFixed(4)," / Z ",((t.zmin+t.zmax)/2).toFixed(4),m(" · 宽 "," · Width "),(t.xmax-t.xmin).toFixed(4),m(" / 长 "," / Length "),(t.zmax-t.zmin).toFixed(4),m(" m（来源约定，未独立标定）"," m (source convention; not independently calibrated)")),e.createElement("form",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:31:347",key:JSON.stringify(t),onSubmit:C,className:"hotspot-roi-edit"},[["cx",m("中心X","Centre X"),(t.xmin+t.xmax)/2],["cz",m("中心Z","Centre Z"),(t.zmin+t.zmax)/2],["width",m("X宽","X width"),t.xmax-t.xmin],["length",m("Z长","Z length"),t.zmax-t.zmin]].map(([v,x,E])=>e.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:31:645",key:v},x,e.createElement("input",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:31:670",required:!0,name:v,"aria-label":"Hotspot ROI "+v,type:"number",step:"any",defaultValue:E}))),e.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:31:788"},m("应用中心与尺寸","Apply centre and dimensions")))),g&&e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:32:14",role:"alert"},g),a&&t&&(a.hotspot.x<t.xmin||a.hotspot.x>t.xmax||a.hotspot.z<t.zmin||a.hotspot.z>t.zmax)&&e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:32:185"},m("热点在选区外；剖面仍锚定原热点。","The hotspot is outside the ROI; profiles remain anchored to the original hotspot.")),u&&e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:33:15"},m("蓝色GT / 橙色预测；紫色B−A。横轴为距热点的有符号距离；阴影为ROI交段，缺测断线。两图共享高度范围。","GT blue / prediction orange / B−A purple. Signed distance from the hotspot; shading marks the ROI intersection. Missing samples break the line. Both plots share a height range.")),e.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:33:262",className:"hotspot-profiles"},e.createElement(at,{reviewId:"hotspot-profile-along",profile:u.first,roi:t,limits:_,label:m("热点剖面1","Hotspot profile 1")}),e.createElement(at,{reviewId:"hotspot-profile-across",profile:u.second,roi:t,limits:_,label:m("热点剖面2","Hotspot profile 2")})),[["first",m("剖面1","Profile 1")],["second",m("剖面2","Profile 2")]].map(([v,x])=>{const E=et(u[v],t);return e.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:33:702",key:v},e.createElement(hs,{value:E.full,label:x+m("全线 · 样本等权"," · Full line · equal sample weights")}),E.roi&&e.createElement(hs,{value:E.roi,label:x+m("选区内 · 样本等权"," · Within ROI · equal sample weights")}))}),e.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:33:930"},m("剖面统计按曲线样本等权，不等同原生列面积统计。可到“报告与恢复”生成含双剖面的PNG、CSV和可恢复JSON。","Profile statistics weight curve samples equally; they are not native-column area statistics. Open Reports & restore to generate PNG, CSV and restorable JSON with both profiles."))))}const gs={schema:"oceanscope.half-sample.v1",formula:"A*cos(2*pi*(x-c)/wavelength)",wavelength:2,amplitude:1,referenceCentre:0,shift:.0125,dx:.025,first:-40,last:40,units:"scene"};function ys(){const n=gs,a=(f,m)=>n.amplitude*Math.cos(2*Math.PI*(f-m)/n.wavelength),t=Array.from({length:n.last-n.first+1},(f,m)=>{const g=(n.first+m)*n.dx;return{x:g,z:0,a:a(g,n.referenceCentre),b:a(g,n.referenceCentre+n.shift)}}),s={xmin:-1,xmax:1,zmin:0,zmax:0},i=f=>gt({points:t},s,f).map(m=>t[m].x),c=t.find(f=>f.x===i("a")[0]),r=Math.max(...t.map(f=>f.b)),o=t.filter(f=>f.b===r),l={referenceX:c.x,referenceHeight:c.a,strictShiftedCandidates:i("b"),highestSampleXs:o.map(f=>f.x),highestSampleHeight:r,shiftErrorsIfEndpointChosen:o.map(f=>f.x-c.x-n.shift),heightError:r-n.amplitude,midpointEstimate:(o[0].x+o.at(-1).x)/2};return{points:t,report:{recipe:gs,readings:l}}}function T0({zh:n}){const[a,t]=S.useState(null),[s,i]=S.useState(""),c=S.useRef(null),r=(u,p)=>n?u:p;async function o(u){if(u)try{const p=ys(),d=JSON.parse(await u.text());if(JSON.stringify(d)!==JSON.stringify(p.report))throw Error();t(p),i(r("已重新采样并核对读数","Resampled and verified"))}catch{i(r("文件与半格对照不匹配","File does not match the half-step control"))}}const l=a?.report.readings,f=a?.report.recipe,m=u=>63+(u+.05)*4800,g=u=>180-(u-.999)*24e3;function y(u){const p=[["quantity","truth","sample_readout","signed_error","interpretation"],["peak_x_left",f.shift,l.highestSampleXs[0],l.shiftErrorsIfEndpointChosen[0],"tied endpoint"],["peak_x_right",f.shift,l.highestSampleXs[1],l.shiftErrorsIfEndpointChosen[1],"tied endpoint"],["peak_height",f.amplitude,l.highestSampleHeight,l.heightError,"sample maximum"],["peak_x_midpoint",f.shift,l.midpointEstimate,l.midpointEstimate-f.shift,"symmetry estimate only"],["strict_shifted_crest_count","",l.strictShiftedCandidates.length,"","strictly higher than both neighbours"]].map(d=>d.join(",")).join(`
`);pn("half-sample."+u,{json:"application/json",csv:"text/csv",svg:"image/svg+xml"}[u],u==="json"?JSON.stringify(a.report,null,2):u==="csv"?p:c.current.outerHTML)}return e.createElement("section",{"data-os-loc":"src/field/HalfSample.jsx:26:9","aria-label":"Half-sample crest"},e.createElement("h3",{"data-os-loc":"src/field/HalfSample.jsx:26:49"},r("半格平移：峰顶落在哪里？","Half-step shift: where is the crest?")),e.createElement("button",{"data-os-loc":"src/field/HalfSample.jsx:27:2","data-os-action":"",onClick:()=>{t(ys()),i("")}},r("查看半格平移","Inspect half-step shift"))," ",e.createElement("label",{"data-os-loc":"src/field/HalfSample.jsx:27:120"},r("恢复半格 JSON","Restore half-step JSON")," ",e.createElement("input",{"data-os-loc":"src/field/HalfSample.jsx:27:169","data-os-action":"",type:"file",accept:".json","aria-label":"Restore half-step JSON",onChange:u=>{o(u.target.files[0]),u.target.value=""}})),e.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:27:310",role:"status"},s),a&&e.createElement(e.Fragment,null,e.createElement("svg",{"data-os-loc":"src/field/HalfSample.jsx:28:11",ref:c,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 720 350",role:"img","aria-label":"Half-step crest detail",style:{width:"100%",maxWidth:900},fontFamily:"sans-serif",fill:"#18374b"},e.createElement("rect",{"data-os-loc":"src/field/HalfSample.jsx:29:2",width:"720",height:"350",fill:"#f7fbfd"}),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:29:49",x:"24",y:"35",fontSize:"22"},"半格平移 / Half-step crest"),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:29:112",x:"24",y:"61",fontSize:"15"},"Δx = 0.025   ·   c: 0 → 0.0125   ·   A = 1   ·   scene units"),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:30:2",x:"24",y:"99",fontSize:"14"},"峰顶放大 / Crest detail"),[1,.999,.997].map(u=>e.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:31:24",key:u},e.createElement("path",{"data-os-loc":"src/field/HalfSample.jsx:31:35",d:"M63 "+g(u)+"h605",stroke:"#d8e3e7"}),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:31:82",x:"12",y:g(u)+5},u))),e.createElement("defs",{"data-os-loc":"src/field/HalfSample.jsx:32:2"},e.createElement("clipPath",{"data-os-loc":"src/field/HalfSample.jsx:32:8",id:"half-crest-zoom"},e.createElement("rect",{"data-os-loc":"src/field/HalfSample.jsx:32:39",x:"63",y:"132",width:"605",height:"128"}))),e.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:33:2",clipPath:"url(#half-crest-zoom)"},["a","b"].map((u,p)=>e.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:33:60",key:u,fill:p?"#bd5010":"#19658a",stroke:p?"#bd5010":"#19658a"},e.createElement("polyline",{"data-os-loc":"src/field/HalfSample.jsx:33:131",fill:"none",strokeWidth:"2",points:a.points.map(d=>m(d.x)+","+g(d[u])).join(" ")}),a.points.filter(d=>d.x>=-.05&&d.x<=.075).map(d=>e.createElement("circle",{"data-os-loc":"src/field/HalfSample.jsx:33:280",key:d.x,cx:m(d.x),cy:g(d[u]),r:"4"}))))),e.createElement("path",{"data-os-loc":"src/field/HalfSample.jsx:34:2",d:"M"+m(f.shift)+" 120V260",stroke:"#654493",strokeDasharray:"4 3"}),e.createElement("circle",{"data-os-loc":"src/field/HalfSample.jsx:34:78",cx:m(f.shift),cy:g(1),r:"5",stroke:"#654493",strokeWidth:"2",fill:"white"}),[-.025,0,.025,.05].map(u=>e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:35:29",x:m(u),y:"279",textAnchor:"middle",key:u},u)),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:36:2",x:"24",y:"309",fontSize:"15"},"蓝 / Reference　 橙 / Shifted samples　 ○ 解析峰 / True crest"),e.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:36:98",x:"24",y:"333",fontSize:"14"},"x ∈ {0, 0.025}　 ·　 sampled height = ",l.highestSampleHeight.toFixed(9))),e.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:37:2"},r("严格局部峰：","Strict local crests: "),l.strictShiftedCandidates.length,"。",r("两个最高采样点等高，不能唯一读回峰位。","The two highest samples tie; neither is a unique crest.")),e.createElement("table",{"data-os-loc":"src/field/HalfSample.jsx:38:2"},e.createElement("thead",{"data-os-loc":"src/field/HalfSample.jsx:38:9"},e.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:38:16"},(n?["量","解析真值","采样读数","读数减真值"]:["Quantity","Truth","Sample readout","Readout minus truth"]).map(u=>e.createElement("th",{"data-os-loc":"src/field/HalfSample.jsx:38:121",key:u},u)))),e.createElement("tbody",{"data-os-loc":"src/field/HalfSample.jsx:38:156"},e.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:38:163"},e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:38:167"},r("峰位","Crest x")),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:38:195"},f.shift),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:38:213"},l.highestSampleXs.join(" / ")),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:38:253"},l.shiftErrorsIfEndpointChosen.join(" / +"))),e.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:38:311"},e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:38:315"},r("峰高","Elevation")),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:38:345"},f.amplitude),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:38:367"},l.highestSampleHeight.toFixed(9)),e.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:38:410"},l.heightError.toFixed(9))))),e.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:39:2"},r("若利用对称性，两个最高点的中点估计为","Using symmetry, the midpoint estimate is")," ",l.midpointEstimate,"。",r("这是估计值，并非某个采样点的位置。","This estimate is not a sampled position.")),["json","svg","csv"].map(u=>e.createElement("button",{"data-os-loc":"src/field/HalfSample.jsx:40:33","data-os-action":"",key:u,onClick:()=>y(u)},r("导出","Export")," ",u.toUpperCase()))))}const Ea={schema:"oceanscope.analytic-wave.v1",formula:"A*cos(2*pi*(x-c)/wavelength)",units:"scene",xmin:-1,xmax:1,dx:.025,wavelength:2,reference:{A:1,c:0},controls:[{id:"height",A:.75,c:0},{id:"position",A:1,c:.25}]},ti=n=>n.controls.map(a=>{const t=(g,y)=>g.A*Math.cos(2*Math.PI*(y-g.c)/n.wavelength),s=Array.from({length:1+Math.round((n.xmax-n.xmin)/n.dx)},(g,y)=>{const u=n.xmin+y*n.dx;return{x:u,z:0,distance:u,a:t(n.reference,u),b:t(a,u)}}),i={points:s},c={xmin:n.xmin,xmax:n.xmax,zmin:0,zmax:0},r=g=>{const y=gt(i,c,g);if(y.length!==1)throw Error("Expected one interior crest");return y[0]},{gt:o,pred:l,deltaHeight:f,deltaDistance:m}=C0({roi:c,profiles:{first:i}},{profile:"first",a:r("a"),b:r("b"),status:"paired"});return{points:s,result:{id:a.id,gtX:o.x,gtHeight:o.a,predX:l.x,predHeight:l.b,expectedHeight:a.A-n.reference.A,measuredHeight:f,expectedShift:a.c-n.reference.c,measuredShift:m}}}),tt=ti(Ea),st={recipe:Ea,readings:tt.map(n=>n.result)},W0=JSON.stringify(st,null,2);function $0({zh:n}){const a=S.useRef(null),[t,s]=S.useState(!1),[i,c]=S.useState("");async function r(o){if(o)try{const l=JSON.parse(await o.text()),f=(m,g)=>m===g||m&&g&&typeof m=="object"&&typeof g=="object"&&Object.keys(m).length===Object.keys(g).length&&Object.keys(m).every(y=>Object.hasOwn(g,y)&&f(m[y],g[y]));if(!f(l.recipe,Ea)||!f(l.readings,ti(Ea).map(m=>m.result)))throw Error();s(!0),c(n?"已重新采样并核对读数":"Resampled and verified")}catch{c(n?"此文件与解析对照不匹配":"File does not match this control")}}return e.createElement("section",{"data-os-loc":"src/field/AnalyticWave.jsx:23:9","aria-label":"Analytic wave control"},e.createElement("h3",{"data-os-loc":"src/field/AnalyticWave.jsx:23:53"},n?"解析波面校验":"Analytic wave control"),e.createElement("button",{"data-os-loc":"src/field/AnalyticWave.jsx:23:99","data-os-action":"",onClick:()=>s(!0)},n?"打开峰高与峰位对照":"Open crest controls")," ",e.createElement("label",{"data-os-loc":"src/field/AnalyticWave.jsx:23:180"},n?"恢复解析波面 JSON":"Restore analytic JSON"," ",e.createElement("input",{"data-os-loc":"src/field/AnalyticWave.jsx:23:230","data-os-action":"",type:"file","aria-label":"Restore analytic JSON",accept:".json",onChange:o=>{r(o.target.files[0]),o.target.value=""}})),e.createElement("p",{"data-os-loc":"src/field/AnalyticWave.jsx:23:370",role:"status"},i),t&&e.createElement(e.Fragment,null,e.createElement("svg",{"data-os-loc":"src/field/AnalyticWave.jsx:24:11",xmlns:"http://www.w3.org/2000/svg",ref:a,role:"img","aria-label":"Analytic crest comparison",viewBox:"0 0 760 370",style:{width:"100%",maxWidth:920},fontFamily:"sans-serif",fill:"#173950"},e.createElement("rect",{"data-os-loc":"src/field/AnalyticWave.jsx:25:2",width:"760",height:"370",fill:"#f7fbfd"}),e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:25:49",x:"24",y:"32",fontSize:"21"},"解析波面校验 / Analytic crest controls"),e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:25:122",x:"24",y:"58",fontSize:"14"},"η = A cos(2π(x−c)/2)   ·   Δx = 0.025   ·   81 samples   ·   scene units"),tt.map(({points:o,result:l},f)=>{const m=y=>70+f*370+(y+1)*140,g=y=>199-y*78;return e.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:27:9",key:l.id},e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:27:23",x:m(-1),y:"94",fontSize:"16"},f?"仅平移 / Shift only":"仅降幅 / Amplitude only"),e.createElement("path",{"data-os-loc":"src/field/AnalyticWave.jsx:28:2",d:`M${m(-1)} 113V280H${m(1)} M${m(-1)} 199H${m(1)}`,fill:"none",stroke:"#b3c5cb"}),[-1,0,1].map(y=>e.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:28:109",key:y},e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:28:120",x:m(y)-5,y:"298"},y),e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:28:155",x:m(-1)-28,y:g(y)+4},y))),["a","b"].map((y,u)=>e.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:29:24",key:y,stroke:u?"#bf540e":"#11669b",fill:"none"},e.createElement("polyline",{"data-os-loc":"src/field/AnalyticWave.jsx:29:78",strokeWidth:"2.5",strokeDasharray:u?"6 3":void 0,points:o.map(p=>m(p.x)+","+g(p[y])).join(" ")}),e.createElement("circle",{"data-os-loc":"src/field/AnalyticWave.jsx:29:196",cx:m(u?l.predX:l.gtX),cy:g(u?l.predHeight:l.gtHeight),r:"4",fill:"white",strokeWidth:"2"}))),e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:30:2",x:m(-1),y:"324"},"Δη = ",l.measuredHeight.toFixed(2),"   ·   Δx crest = ",l.measuredShift.toFixed(2)))}),e.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:31:2",x:"25",y:"355",fontSize:"14"},"蓝实线 Reference　 橙虚线 Perturbation　 ○ 采样峰顶 / Sampled crest")),e.createElement("table",{"data-os-loc":"src/field/AnalyticWave.jsx:32:2"},e.createElement("thead",{"data-os-loc":"src/field/AnalyticWave.jsx:32:9"},e.createElement("tr",{"data-os-loc":"src/field/AnalyticWave.jsx:32:16"},(n?["对照","峰高差：设定 / 读回","峰位差：设定 / 读回"]:["Control","Crest elevation: set / read","Crest shift: set / read"]).map(o=>e.createElement("th",{"data-os-loc":"src/field/AnalyticWave.jsx:32:136",key:o},o)))),e.createElement("tbody",{"data-os-loc":"src/field/AnalyticWave.jsx:32:171"},tt.map(({result:o})=>e.createElement("tr",{"data-os-loc":"src/field/AnalyticWave.jsx:32:202",key:o.id},e.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:32:217"},o.id),e.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:32:232"},o.expectedHeight," / ",o.measuredHeight),e.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:32:280"},o.expectedShift," / ",o.measuredShift))))),e.createElement("p",{"data-os-loc":"src/field/AnalyticWave.jsx:33:2"},n?"峰顶在采样点上。此对照检验剖面峰值读数，不代表真实重建精度。":"Crests lie on sample points. This checks profile readout, not reconstruction accuracy."),["json","svg","csv"].map(o=>e.createElement("button",{"data-os-loc":"src/field/AnalyticWave.jsx:34:33","data-os-action":"",key:o,onClick:()=>pn("analytic-wave."+o,{json:"application/json",csv:"text/csv",svg:"image/svg+xml"}[o],o==="json"?W0:o==="svg"?a.current.outerHTML:[Object.keys(st.readings[0]),...st.readings.map(Object.values)].map(l=>l.join(",")).join(`
`))},n?"导出":"Export"," ",o.toUpperCase()))))}const Ue="review/b-case-metrics.js",it=[{id:"rmse",zh:"ROI 高度均方根误差",en:"ROI height RMSE",expr:"row.stats.rmse",read:n=>n.stats.rmse},{id:"bias",zh:"ROI 平均有符号误差",en:"ROI mean signed error",expr:"row.stats.bias",read:n=>n.stats.bias},{id:"mae",zh:"ROI 平均绝对误差",en:"ROI mean absolute error",expr:"row.stats.mae",read:n=>n.stats.mae},{id:"maximum",zh:"ROI 最大绝对误差",en:"ROI maximum absolute error",expr:"row.stats.maximum?.absolute",read:n=>n.stats.maximum?.absolute},{id:"centre",zh:"中心高度差",en:"Centre height difference",expr:"row.centre?.difference",read:n=>n.centre?.difference}],Za=n=>"'"+n.replaceAll("\\","\\\\").replaceAll("'","\\'")+"'",V0=/^[a-z][a-z0-9_-]{0,39}$/,ra={id:"rmse",field:"rmse",en:"ROI height RMSE",zh:"ROI 高度均方根误差",precision:5};function z0(n,a,t=null){const s=a.id.trim(),i=a.zh.trim(),c=a.en.trim(),r=it.find(B=>B.id===a.field);if(!V0.test(s))return{error:"id"};if(!i||!c||[i,c].some(B=>B.length>80||/[\x00-\x1f\x7f\u2028\u2029]/u.test(B)))return{error:"label"};if(!r||!Number.isInteger(a.precision)||a.precision<0||a.precision>10)return{error:"field"};const o=n.split(`
`),l=o.findLastIndex(B=>B.trimEnd()==="];");if(l<1||o.filter(B=>B.trimEnd()==="export const metrics = [").length!==1||o.slice(l+1).some(B=>B.trim()))return{error:"format"};const f=o.findIndex(B=>B.trimEnd()==="export const metrics = ["),m=o.map(B=>B.match(/^\s*\{\s*id:\s*['"]([a-z][a-z0-9_-]*)['"],.*read:\s*row\s*=>\s*row[.?\w]+\s*\},\s*$/u)?.[1]);if(l<=f||o.slice(f+1,l).some((B,k)=>B.trim()&&!B.trimStart().startsWith("//")&&!m[f+k+1]))return{error:"format"};const g=m.filter(Boolean);if(new Set(g).size!==g.length)return{error:"format"};const y=m.indexOf(s);if(t===null&&y>=0)return{error:"duplicate"};if(t!==null&&(t!==s||y<0))return{error:"format"};const u=a.precision===5?"":", precision: "+a.precision,p=o[y<0?l-1:y].endsWith("\r")?"\r":"",d="  { id: "+Za(s)+", en: "+Za(c)+", zh: "+Za(i)+u+", read: row => "+r.expr+" },"+p,h=y<0?l:y,_=y<0?[]:[o[h]];if(_[0]===d)return{error:"unchanged"};const C=o.slice(Math.max(0,h-3),h),v=o.slice(h+_.length).filter((B,k,b)=>k<b.length-1||b[k]!=="").slice(0,3),x=[...o];x.splice(h,_.length,d);const E=h-C.length+1,j=C.length+v.length,w=["--- a/"+Ue,"+++ b/"+Ue,"@@ -"+E+","+(j+_.length)+" +"+E+","+(j+1)+" @@",...C.map(B=>" "+B),..._.map(B=>"-"+B),"+"+d,...v.map(B=>" "+B)].join(`
`)+`
`;return{id:s,source:x.join(`
`),diff:w,old:_[0]||"",line:d,field:r,precision:a.precision}}async function xs(n){const a=new TextEncoder,t=a.encode("blob "+a.encode(n).length+"\0"+n),s=await crypto.subtle.digest("SHA-1",t);return Array.from(new Uint8Array(s),i=>i.toString(16).padStart(2,"0")).join("")}const si="ALSc001",X0="https://api.github.com/repos/"+si+"/oceanscope-demo-v2";async function oa(n,a,t=!1){const s=await fetch(X0+n,{headers:{Accept:"application/vnd.github+json"},cache:"no-store",signal:a});if(t&&s.status===404)return null;if(!s.ok)throw Error(String(s.status));return s.json()}async function Z0(n,a,t,s){const[i,c,r]=await Promise.all([xs(n),xs(a.source),oa("/contents/"+Ue+"?ref=main",s)]),o="codex/b-metric-"+a.id+"-"+c.slice(0,12);if(r.sha===c)return{kind:"published",url:$n+"/blob/main/"+Ue,branch:o};if(r.sha!==i)return{kind:"stale"};const l=await oa("/contents/"+Ue+"?ref="+encodeURIComponent(o),s,!0);if(!l)return{kind:"editor",url:$n+"/edit/main/"+Ue,branch:o};if(l.sha!==c)return{kind:"stale"};const f=await oa("/compare/main..."+encodeURIComponent(o),s);if(f.files?.length!==1||f.files[0].filename!==Ue||f.files[0].sha!==c)return{kind:"stale"};const m=await oa("/pulls?state=open&base=main&head="+encodeURIComponent(si+":"+o),s);if(m.length)return{kind:"open",url:m[0].html_url,number:m[0].number,branch:o};const g=new URLSearchParams({expand:"1",title:"Region B: "+a.field.en,body:t});return{kind:"compare",url:$n+"/compare/main..."+o+"?"+g,branch:o}}const G0={id:["标识需以小写字母开头，最多 40 个字符。","Use a lowercase identifier of up to 40 characters."],label:["请填写中英文名称，每个最多 80 个字符。","Enter both labels, up to 80 characters each."],field:["请选择统计量和 0–10 位小数。","Choose a statistic and 0–10 decimal places."],duplicate:["该标识已存在。可选择编辑已有指标。","This identifier exists. Choose the existing metric to edit it."],unchanged:["请修改名称、统计量或显示精度。","Change a label, statistic or display precision."],format:["当前源码格式需要在 GitHub 编辑。","Open GitHub to edit this source format."]};function H0({proposal:n,base:a,body:t,zh:s}){const i=(y,u)=>s?y:u,[c,r]=S.useState(null),[o,l]=S.useState(""),f=S.useRef(null);S.useEffect(()=>()=>f.current?.abort(),[]);async function m(){f.current?.abort();const y=new AbortController;f.current=y,r({kind:"loading"}),l("");const u=setTimeout(()=>{y.signal.aborted||(y.abort(),r({kind:"failed"}))},15e3);try{const p=await Z0(a,n,t,y.signal);y.signal.aborted||r(p)}catch{y.signal.aborted||r({kind:"failed"})}finally{clearTimeout(u)}}async function g(){try{await navigator.clipboard.writeText(n.source),l(i("已复制候选文件","Candidate file copied"))}catch{l(i("请下载候选文件，或在文本框中全选复制。","Download the candidate or select and copy its text."))}}return e.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:33:10",className:"proposal-submit"},e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:34:5","data-os-action":"",type:"button",onClick:m,disabled:c?.kind==="loading"},i("准备提交 PR","Prepare pull request")),c?.kind==="loading"&&e.createElement("span",{"data-os-loc":"src/field/MetricProposal.jsx:35:32",role:"status"},i("正在核对 GitHub 文件与提案分支…","Checking the GitHub file and proposal branch…")),c?.kind==="stale"&&e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:36:30",role:"alert"},i("GitHub 文件已变更。请与最新源码核对后重新生成提案。","The GitHub file has changed. Compare the latest source and regenerate the proposal.")),c?.kind==="failed"&&e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:37:31",role:"alert"},i("无法核对 GitHub，可重试或下载补丁，在最新源码上检查后提交。","GitHub could not be checked. Retry or download the patch and check it against the latest source.")),c?.kind==="open"&&e.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:38:29",href:c.url,target:"_blank",rel:"noreferrer"},i("查看已提交的 PR","View submitted PR")," #",c.number),c?.kind==="published"&&e.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:39:34",href:c.url,target:"_blank",rel:"noreferrer"},i("这份代码已在主分支，查看文件","This version is on main. View file")),c?.kind==="compare"&&e.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:40:32",href:c.url,target:"_blank",rel:"noreferrer"},i("在 GitHub 确认创建 PR","Confirm pull request on GitHub")),c?.kind==="editor"&&e.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:41:31"},e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:42:7"},i("复制候选文件，在 GitHub 编辑器中替换内容，选择新分支或个人 fork，然后创建 PR。","Copy the candidate, paste it into the GitHub editor, then choose a new branch or your fork and create a pull request.")),e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:43:7"},e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:43:10","data-os-action":"",type:"button",onClick:g},i("复制候选文件","Copy candidate file"))," ",e.createElement("a",{"data-os-loc":"src/field/MetricProposal.jsx:44:7",href:c.url,target:"_blank",rel:"noreferrer"},i("打开 GitHub 编辑器","Open GitHub editor"))),e.createElement("small",{"data-os-loc":"src/field/MetricProposal.jsx:45:7"},i("建议分支","Suggested branch")," ",e.createElement("code",{"data-os-loc":"src/field/MetricProposal.jsx:45:45"},c.branch)),e.createElement("details",{"data-os-loc":"src/field/MetricProposal.jsx:46:7"},e.createElement("summary",{"data-os-loc":"src/field/MetricProposal.jsx:46:16"},i("候选文件全文","Complete candidate file")),e.createElement("textarea",{"data-os-loc":"src/field/MetricProposal.jsx:46:74",readOnly:!0,value:n.source,"aria-label":"Candidate metric module",rows:7})),o&&e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:47:16",role:"status"},o)))}function q0({metrics:n,rows:a,zh:t}){const s=(b,R)=>t?b:R,i=n.some(b=>b.id==="rmse"),c=()=>i?{...ra,id:"",en:"",zh:""}:{...ra},[r,o]=S.useState(()=>!i&&new URLSearchParams(location.search).get("proposal")==="rmse"),[l,f]=S.useState(""),[m,g]=S.useState(!1),[y,u]=S.useState(0),[p,d]=S.useState(""),[h,_]=S.useState(c);S.useEffect(()=>{if(!r)return;const b=new AbortController;return g(!1),fetch(new URL(Ue,document.baseURI),{signal:b.signal,cache:"no-store"}).then(R=>{if(!R.ok)throw Error("Metric module unavailable");return R.text()}).then(R=>{b.signal.aborted||f(R)}).catch(()=>{b.signal.aborted||g(!0)}),()=>b.abort()},[r,y]);function C(b){if(d(b),!b){_(c());return}const R=n.find(P=>P.id===b),M=l.split(`
`).find(P=>P.trimStart().startsWith("{ id: '"+b+"',")||P.trimStart().startsWith('{ id: "'+b+'",')),A=it.find(P=>M?.includes("read: row => "+P.expr+" }"));_({id:b,en:R.en,zh:R.zh,field:A?.id||"",precision:R.precision??5})}function v(b,R){_(M=>({...M,[b]:R}))}const x=l&&z0(l,h,p||null),E=n.find(b=>b.id===p),j=[1050,1054].map(b=>a.find(R=>R.frameId===b)),w=x&&!x.error&&j.every(Boolean),B=(b,R)=>Number.isFinite(b)?b.toFixed(R):"—",k=w?["Region B · Gentle GT / Best_1027",h.en+" ("+h.id+")","Definition: "+x.field.expr+"; decimals: "+x.precision,...j.map(b=>"Frame "+b.frameId+": "+B(x.field.read(b),x.precision)+" scene units, "+b.stats.common+" common native columns."),h.id==="rmse"&&h.field==="rmse"&&h.en===ra.en&&h.zh===ra.zh&&h.precision===5?Vt.replace("#analysis-height","&proposal=rmse#analysis-height"):Vt].join(`

`):"";return e.createElement("section",{"data-os-loc":"src/field/MetricProposal.jsx:82:10",className:"metric-proposal","aria-label":"Region B metric proposal"},e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:83:5","data-os-action":"",type:"button","aria-expanded":r,onClick:()=>o(b=>!b)},r?s("收起指标编辑","Close metric editor"):s("改指标并预览","Edit and preview a metric")),r&&e.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:84:14"},m?e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:85:15",role:"alert"},s("未能读取当前指标文件。","Metric source unavailable.")," ",e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:85:79","data-os-action":"",onClick:()=>u(b=>b+1)},s("重试","Retry"))):l?e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:86:7",className:"proposal-fields"},e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:87:9"},s("编辑对象","Metric to edit"),e.createElement("select",{"data-os-loc":"src/field/MetricProposal.jsx:87:44","data-os-action":"","aria-label":"Metric to edit",value:p,onChange:b=>C(b.target.value)},e.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:87:134",value:""},s("新增指标","New metric")),n.map(b=>e.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:87:200",key:b.id,value:b.id},t?b.zh:b.en)))),e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:88:9"},s("标识","Identifier"),e.createElement("input",{"data-os-loc":"src/field/MetricProposal.jsx:88:38","data-os-action":"","aria-label":"Metric identifier",value:h.id,readOnly:!!p,onChange:b=>v("id",b.target.value)})),e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:89:9"},s("统计量","Statistic"),e.createElement("select",{"data-os-loc":"src/field/MetricProposal.jsx:89:38","data-os-action":"","aria-label":"Candidate statistic",value:h.field,onChange:b=>v("field",b.target.value)},!h.field&&e.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:89:158",value:""},"—"),it.map(b=>e.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:89:201",value:b.id,key:b.id},t?b.zh:b.en)))),e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:90:9"},s("中文名称","Chinese label"),e.createElement("input",{"data-os-loc":"src/field/MetricProposal.jsx:90:43","data-os-action":"","aria-label":"Chinese metric label",value:h.zh,maxLength:80,onChange:b=>v("zh",b.target.value)})),e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:91:9"},s("英文名称","English label"),e.createElement("input",{"data-os-loc":"src/field/MetricProposal.jsx:91:43","data-os-action":"","aria-label":"English metric label",value:h.en,maxLength:80,onChange:b=>v("en",b.target.value)})),e.createElement("label",{"data-os-loc":"src/field/MetricProposal.jsx:92:9"},s("小数位数","Decimal places"),e.createElement("select",{"data-os-loc":"src/field/MetricProposal.jsx:92:44","data-os-action":"","aria-label":"Metric precision",value:h.precision,onChange:b=>v("precision",Number(b.target.value))},Array.from({length:11},(b,R)=>e.createElement("option",{"data-os-loc":"src/field/MetricProposal.jsx:92:191",key:R},R))))),x?.error&&(p||h.id.trim())&&e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:94:60",role:"status"},G0[x.error][t?0:1]),x&&!x.error&&!w&&e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:95:49",role:"status"},s("等待 1050 和 1054 两帧。","Waiting for both frames.")),w&&e.createElement(e.Fragment,null,e.createElement("table",{"data-os-loc":"src/field/MetricProposal.jsx:97:9","aria-label":"Two-frame metric preview"},e.createElement("caption",{"data-os-loc":"src/field/MetricProposal.jsx:97:54"},(t?h.zh:h.en)+" · "+s("场景单位","scene units")),e.createElement("thead",{"data-os-loc":"src/field/MetricProposal.jsx:98:11"},e.createElement("tr",{"data-os-loc":"src/field/MetricProposal.jsx:98:18"},[s("帧号","Frame"),s("原值","Current"),s("预览","Preview"),s("共同有效点 / ROI 候选点","Common / candidate columns")].map(b=>e.createElement("th",{"data-os-loc":"src/field/MetricProposal.jsx:98:134",key:b},b)))),e.createElement("tbody",{"data-os-loc":"src/field/MetricProposal.jsx:99:11"},j.map(b=>e.createElement("tr",{"data-os-loc":"src/field/MetricProposal.jsx:99:35",key:b.frameId},e.createElement("th",{"data-os-loc":"src/field/MetricProposal.jsx:99:57"},b.frameId),e.createElement("td",{"data-os-loc":"src/field/MetricProposal.jsx:99:79"},E?B(E.read(b),E.precision??5):s("新增","New")),e.createElement("td",{"data-os-loc":"src/field/MetricProposal.jsx:99:155"},B(x.field.read(b),x.precision)),e.createElement("td",{"data-os-loc":"src/field/MetricProposal.jsx:99:217"},b.stats.common," / ",b.stats.candidates))))),e.createElement("details",{"data-os-loc":"src/field/MetricProposal.jsx:100:9",className:"proposal-diff"},e.createElement("summary",{"data-os-loc":"src/field/MetricProposal.jsx:100:44"},s("查看代码差异","View code changes")),e.createElement("pre",{"data-os-loc":"src/field/MetricProposal.jsx:100:96","aria-label":"Proposed code diff"},x.diff.split(`
`).slice(0,-1).map((b,R)=>e.createElement("span",{"data-os-loc":"src/field/MetricProposal.jsx:100:186",key:R,className:b.startsWith("+")?"diff-plus":b.startsWith("-")?"diff-minus":""},b,`
`)))),e.createElement("div",{"data-os-loc":"src/field/MetricProposal.jsx:101:9",className:"proposal-downloads"},e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:101:45","data-os-action":"",onClick:()=>zt("B-"+x.id+".patch",new Blob([x.diff],{type:"text/plain"}))},s("下载补丁","Download patch")),e.createElement("button",{"data-os-loc":"src/field/MetricProposal.jsx:102:9","data-os-action":"",onClick:()=>zt("b-case-metrics.js",new Blob([x.source],{type:"text/javascript"}))},s("下载候选源码","Download candidate source"))),e.createElement(H0,{key:x.source,proposal:x,base:l,body:k,zh:t}))):e.createElement("p",{"data-os-loc":"src/field/MetricProposal.jsx:85:154",role:"status"},s("正在读取指标源码…","Loading metric source…"))))}function L0({rows:n,zh:a,metrics:t,metric:s,metricId:i,onTrack:c,evidence:r,error:o,retry:l}){const f=(y,u)=>a?y:u,m=Ii(r),g=["Gentle / Best_1027","XZ (−0.95, 0.90)","ROI 1 × 1","X profile 0°",r.metricLabel,...r.readings.map(y=>y.frameId+": "+y.display+" "+r.units+" ("+y.common+"/"+y.candidates+")")].filter(Boolean).join(" · ");return e.createElement("section",{"data-os-loc":"src/field/ReviewMetrics.jsx:12:10",className:"review-metrics","aria-label":"B case collaboration"},e.createElement("h3",{"data-os-loc":"src/field/ReviewMetrics.jsx:13:5"},f("一起查看 B 区域","Review region B together")),o&&e.createElement("button",{"data-os-loc":"src/field/ReviewMetrics.jsx:14:15","data-os-action":"",onClick:l},f("重试加载追踪量","Retry loading metrics")),t.length>0&&e.createElement(e.Fragment,null,e.createElement("label",{"data-os-loc":"src/field/ReviewMetrics.jsx:15:28"},f("追踪量","Track a quantity")," ",e.createElement("select",{"data-os-loc":"src/field/ReviewMetrics.jsx:15:65","data-os-action":"",value:s?.id??"",onChange:y=>c(y.target.value)},!s&&e.createElement("option",{"data-os-loc":"src/field/ReviewMetrics.jsx:16:19",value:"",disabled:!0},f("请选择正式指标","Select an official metric")),t.map(y=>e.createElement("option",{"data-os-loc":"src/field/ReviewMetrics.jsx:17:27",key:y.id,value:y.id},a?y.zh:y.en)))),s?e.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:19:13","aria-live":"polite"},r.readings.map(y=>y.frameId+": "+y.display).join("　 /　 "),"　",f("场景单位","scene units")):e.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:20:7",role:"alert"},i?f("无法还原此指标，当前正式列表中没有 ","The current registry does not contain the recorded metric ")+i+f("。请选择指标。",". Select a metric."):f("原记录未注明追踪量，无法还原。请选择指标。","The original record did not specify a metric. Select a metric to continue."))),s&&e.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:23:16",className:"b-case-share"},e.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:23:44",href:m,target:"_blank",rel:"noreferrer"},f("分享当前视图给同事","Share this view with a colleague"))),e.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:24:5"},e.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:24:8",href:$n+"/issues/1#new_comment_field",target:"_blank",rel:"noreferrer"},f("去公开 GitHub 参与案例讨论","Discuss this case on public GitHub"))),e.createElement(ks,{topic:"region-B-1050-1054",zh:a,subject:f("B 区域 · 1050 与 1054","Region B · 1050 and 1054"),context:g,viewLink:m}),e.createElement("details",{"data-os-loc":"src/field/ReviewMetrics.jsx:26:5",className:"b-case-source"},e.createElement("summary",{"data-os-loc":"src/field/ReviewMetrics.jsx:26:40"},f("指标源码与补丁","Metric source and patches")),e.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:27:7",href:$n+"/edit/main/review/b-case-metrics.js",target:"_blank",rel:"noreferrer"},f("在 GitHub 编辑指标文件","Edit the metric file on GitHub")),t.length>0&&e.createElement(q0,{metrics:t,rows:n,zh:a})))}function ii(n,a){if(!Number.isFinite(n))return"#a7acb0";const t=n>=0?[186,58,44]:[35,97,159],s=Math.min(1,Math.abs(n)/(a||1));return"rgb("+t.map(i=>Math.round(250+(i-250)*s)).join(",")+")"}function ci(n){const a=n.map(c=>c.ix),t=n.map(c=>c.iz),s=Math.min(...a),i=Math.min(...t);return[s,i,Math.max(...a)-s+1,Math.max(...t)-i+1]}function ri({cells:n,limit:a,selection:t}){const[s,i,c,r]=ci(n),o=i+r-1,l=210/c,f=(t.ix-s+.5)*l,m=(o-t.iz+.5)*l;return e.createElement(e.Fragment,null,e.createElement("g",{"data-os-loc":"src/field/BCasePlots.jsx:22:5",shapeRendering:"crispEdges"},n.map(({ix:g,iz:y,error:u})=>e.createElement("rect",{"data-os-loc":"src/field/BCasePlots.jsx:23:7",key:g+","+y,x:(g-s)*l,y:(o-y)*l,width:l,height:l,fill:ii(u,a)}))),e.createElement("line",{"data-os-loc":"src/field/BCasePlots.jsx:26:5",x1:"0",x2:"210",y1:m,y2:m,stroke:"#182e36",strokeDasharray:"4 3"}),e.createElement("circle",{"data-os-loc":"src/field/BCasePlots.jsx:27:5",cx:f,cy:m,r:"5",stroke:"black",strokeWidth:"2",fill:"white"}))}function Y0(n,a,t,s){const i=n.xmin-a,c=n.xmax-a;return{first:i,last:c,x:r=>(r-i)/(c-i)*335,y:r=>106-(r-t)/(s-t||1)*101}}function oi({points:n,scale:a,band:t}){function s(i){let c=!1;return n.map(r=>{if(!Number.isFinite(r[i]))return c=!1,"";const o=c?"L":"M";return c=!0,o+a.x(r.distance)+" "+a.y(r[i])}).join(" ")}return e.createElement(e.Fragment,null,t&&e.createElement("rect",{"data-os-loc":"src/field/BCasePlots.jsx:48:14",x:a.x(t.lo)-2,width:a.x(t.hi)-a.x(t.lo)+4,y:"0",height:"111",fill:"#f4df9c"}),e.createElement("line",{"data-os-loc":"src/field/BCasePlots.jsx:50:5",x1:a.x(0),x2:a.x(0),y1:"0",y2:"111",stroke:"#777",strokeDasharray:"2 3"}),e.createElement("path",{"data-os-loc":"src/field/BCasePlots.jsx:51:5",d:s("a"),stroke:"#13689e",fill:"none",strokeWidth:"2.5"}),e.createElement("path",{"data-os-loc":"src/field/BCasePlots.jsx:52:5",d:s("b"),stroke:"#ad6411",fill:"none",strokeWidth:"2.5",strokeDasharray:"7 3"}))}function vs({label:n,frame:a,kind:t,zh:s,children:i,legend:c,axis:r,canAnnotate:o}){const[l,f]=S.useState(!1),[m,g]=S.useState([0,1]),y=S.useRef(null),u=a+" · "+n;S.useLayoutEffect(()=>{const d=y.current;if(d.scrollLeft=(d.scrollWidth-d.clientWidth)/2,d.scrollTop=(d.scrollHeight-d.clientHeight)/2,!r)return;function h(){const C=d.querySelector("svg").getBoundingClientRect();if(!C.width)return;const v=(d.getBoundingClientRect().left-C.left)/C.width;g([Math.max(0,v),Math.min(1,v+d.clientWidth/C.width)])}h();const _=new ResizeObserver(h);return _.observe(d),d.addEventListener("scroll",h),()=>{_.disconnect(),d.removeEventListener("scroll",h)}},[l,!!r]);function p(d){window.dispatchEvent(new CustomEvent("oceanscope-review-figure",{detail:{figure:y.current.querySelector("svg"),trigger:d.currentTarget,label:u}}))}return e.createElement("figure",{"data-os-loc":"src/field/BCaseFigures.jsx:31:10",className:"b-plot b-"+t,"data-review-id":"b-"+a+"-"+t},e.createElement("figcaption",{"data-os-loc":"src/field/BCaseFigures.jsx:32:5"},n),e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:33:5",ref:y,className:"b-viewport","data-zoomed":l,tabIndex:l?0:void 0,role:"group","aria-label":u+(s?" · 图像区域":" · plot area")},i),r&&e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:37:14",className:"b-ticks"},[m[0],(m[0]+m[1])/2,m[1]].map((d,h)=>e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:38:7",key:h},(r.first+(r.last-r.first)*d).toFixed(2)))),c,e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:40:5",className:"b-plot-controls","data-os-tools":""},e.createElement("button",{"data-os-loc":"src/field/BCaseFigures.jsx:41:7","data-os-action":"",type:"button","aria-pressed":l,"aria-label":u+(s?" · 局部放大":" · local zoom"),onClick:()=>f(d=>!d)},l?s?"还原 1×":"Reset 1×":s?"放大 2×":"Zoom 2×"),e.createElement("button",{"data-os-loc":"src/field/BCaseFigures.jsx:43:7","data-os-action":"",type:"button",disabled:!o,"aria-label":u+(s?" · 批注这张图":" · Annotate this figure"),onClick:p},s?"批注这张图":"Annotate this figure")),l&&e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:47:16",className:"b-zoom-help"},s?"滑动查看局部；键盘可聚焦图像后用方向键移动。":"Scroll to pan, or focus the plot and use the arrow keys."))}function U0({rows:n,data:a,limit:t,low:s,high:i,band:c,scale:r,evidence:o,zh:l}){const f=(h,_)=>l?h:_,m=S.useRef(null);S.useEffect(()=>{window.location.hash.startsWith("#mark=")||m.current.scrollIntoView({block:"start"})},[]);const g=f("场景单位","scene units"),y=f("带符号高度误差","Signed height error"),u=f("穿过中心的 X 剖面","X profile through the centre"),{roi:p,selection:d}=a;return e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:63:10",className:"b-case-figures"},e.createElement("h3",{"data-os-loc":"src/field/BCaseFigures.jsx:64:5",className:"b-case-heading",ref:m},f("固定 B 区域","Fixed region B")," · ",n.map(h=>h.frameId).join(" / ")),e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:65:5",className:"b-case-context"},e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:65:35"},f("模型","Model")," Best_1027"),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:65:80"},"GT · Gentle"),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:66:7"}," XZ (",a.x.toFixed(2),", ",a.z.toFixed(2),")"),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:67:7"},"ROI ",(p.xmax-p.xmin).toFixed(2)," × ",(p.zmax-p.zmin).toFixed(2)," ",g)),e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:68:5",className:"b-common-scale"},e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:69:7"},f("两帧共用色标","Shared colour scale")),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:70:7"},f("预测 − GT","Prediction − GT")," · ",g),e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:71:7",className:"b-ramp","aria-hidden":"true"}),e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:72:7",className:"b-ticks"},e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:72:32"},(-t).toFixed(3)," ",f("偏低","low")),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:72:83"},"0"),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:72:97"},"+",t.toFixed(3)," ",f("偏高","high")))),e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:74:5",className:"b-frame-grid"},n.map(h=>{const _=o.readings.find(C=>C.frameId===h.frameId);return e.createElement("article",{"data-os-loc":"src/field/BCaseFigures.jsx:76:14",className:"b-frame-card",key:h.frameId,"data-review-frame":h.frameId},e.createElement("h4",{"data-os-loc":"src/field/BCaseFigures.jsx:77:7"},f("帧","Frame")," ",h.frameId),e.createElement(vs,{frame:h.frameId,kind:"map",label:y,zh:l,canAnnotate:!!_,legend:e.createElement("div",{"data-os-loc":"src/field/BCaseFigures.jsx:78:108",className:"b-map-notes"},e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:79:9",className:"b-plot-key"},"Z ↑　X →　",f("白点为中心，虚线为剖面","White centre point, dashed X section")),_&&e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:80:21",className:"b-readout b-tracked-reading"},o.metricLabel,e.createElement("br",{"data-os-loc":"src/field/BCaseFigures.jsx:80:86"}),e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:80:91"},_.display)," ",g),e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:81:9",className:"b-readout"},f("中心差","Centre difference")," ",e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:81:66"},h.centre?.difference?.toFixed(4)??"—")," ",g,e.createElement("br",{"data-os-loc":"src/field/BCaseFigures.jsx:81:134"}),f("共同有效 / 候选列","Common / candidate columns")," ",e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:82:59"},h.stats.common," / ",h.stats.candidates)))},e.createElement("svg",{"data-os-loc":"src/field/BCaseFigures.jsx:84:9",viewBox:"0 0 210 210",role:"img","aria-label":h.frameId+" · "+y,"data-grid-window":ci(h.region.cells).join(","),"data-grid-origin":[a.x-d.ix*h.profile.step,a.z-d.iz*h.profile.step,h.profile.step].join(",")},e.createElement(ri,{cells:h.region.cells,limit:t,selection:d}))),e.createElement(vs,{frame:h.frameId,kind:"profile",label:u,zh:l,axis:r,canAnnotate:!!_,legend:e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:91:9",className:"b-plot-key"},f("横轴：距中心的 X 距离","X axis: distance from centre")," · ",g,e.createElement("br",{"data-os-loc":"src/field/BCaseFigures.jsx:91:95"}),f("纵轴：水面高度","Y axis: surface height")," ",s.toFixed(3)," … ",i.toFixed(3)," ",g),e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:93:9",className:"b-line-keys"},e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:93:36"},e.createElement("i",{"data-os-loc":"src/field/BCaseFigures.jsx:93:42",className:"b-line-gt"}),"GT"),e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:93:77"},e.createElement("i",{"data-os-loc":"src/field/BCaseFigures.jsx:93:83",className:"b-line-pred"}),f("预测","Prediction")),c&&e.createElement("span",{"data-os-loc":"src/field/BCaseFigures.jsx:94:20"},e.createElement("i",{"data-os-loc":"src/field/BCaseFigures.jsx:94:26",className:"b-band"}),f("比较区段","Compared interval"))))},e.createElement("svg",{"data-os-loc":"src/field/BCaseFigures.jsx:96:9",viewBox:"0 0 335 111","data-profile-axis":[r.first,r.last,0,335].join(","),role:"img","aria-label":h.frameId+" · "+u},e.createElement(oi,{points:h.profile.points,scale:r,band:c}))))})),c&&e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:102:14",className:"b-band-note"},e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:102:41"},f("黄色区段","Highlighted interval"),"　s = ",c.lo.toFixed(2)," … ",c.hi.toFixed(2)," ",g)," · ",f("两帧逐点比较正误差，这两个相邻采样占剖面正误差全部减少量的 ","These two adjacent samples account for "),(c.share*100).toFixed(1),"%",f("。"," of all decreases in positive profile error.")," ",f("1050 帧的 GT 从局部谷底向右抬升，1054 帧的同一位置仍靠近谷底。","Here the 1050 GT rises from a local trough. The same positions remain near the trough in 1054.")),e.createElement("details",{"data-os-loc":"src/field/BCaseFigures.jsx:106:5",className:"b-signed-stats"},e.createElement("summary",{"data-os-loc":"src/field/BCaseFigures.jsx:106:41"},f("查看带符号误差统计","Show signed-error statistics")),n.map(h=>e.createElement("p",{"data-os-loc":"src/field/BCaseFigures.jsx:107:24",key:h.frameId},e.createElement("strong",{"data-os-loc":"src/field/BCaseFigures.jsx:107:45"},h.frameId)," · ",f("区域偏差","ROI bias")," ",h.stats.bias?.toFixed(4)??"—"," ·"," ",f("偏高列均值","Mean positive")," ",h.region.counts[4]?.toFixed(4)??"—"," ·"," ",f("偏低列均值","Mean negative")," ",h.region.counts[5]?.toFixed(4)??"—"," ",g))))}function J0(n,a){const{shape:[t,s],originXYZ:[i,,c],spacing:r}=n.descriptor,o=[];for(let u=0;u<t;u++){const p=c+u*r;if(!(p<a.zmin||p>a.zmax))for(let d=0;d<s;d++){const h=i+d*r,_=u*s+d;h<a.xmin||h>a.xmax||o.push({ix:d,iz:u,error:n.common[_]?n.heightB[_]-n.heightA[_]:null})}}const l=o.map(u=>u.error).filter(Number.isFinite).sort((u,p)=>u-p),f=l.filter(u=>u>0),m=l.filter(u=>u<0),g=u=>u.length?u.reduce((p,d)=>p+d,0)/u.length:null,y=l.length;return{cells:o,counts:[y,f.length,m.length,y-f.length-m.length,g(f),g(m),y?(l[Math.floor((y-1)/2)]+l[Math.floor(y/2)])/2:null,g(l)]}}const la=n=>n==null?"—":n.toFixed(4);function K0(n){const[a,t]=n.map(c=>c.profile.points),s=a.map((c,r)=>Number.isFinite(c.difference)&&Number.isFinite(t[r]?.difference)?Math.max(0,c.difference)-Math.max(0,t[r].difference):null);let i=null;for(let c=1;c<s.length;c++){if(s[c-1]==null||s[c]==null)continue;const r=s[c-1]+s[c];(!i||r>i.sum)&&(i={sum:r,i:c})}return{lo:a[i.i-1].distance,hi:a[i.i].distance,share:i.sum/s.reduce((c,r)=>c+Math.max(0,r??0),0)}}function Q0({data:n,bundle:a,zh:t,metricId:s,onTrack:i,recorded:c}){const r=S.useRef(null),o=(b,R)=>t?b:R,[l,f]=S.useState([]),[m,g]=S.useState(!1),[y,u]=S.useState(0);S.useEffect(()=>{let b=!0;const R=new URL(Ue,document.baseURI);return y&&R.searchParams.set("retry",String(y)),import(R.href).then(M=>{b&&(f(M.metrics),g(!1))}).catch(()=>{b&&g(!0)}),()=>{b=!1}},[y]);const p=n.rows.filter(b=>Ni.includes(b.frameId)),d=l.find(b=>b.id===s),h=Fi({bundle:a,selection:n.selection,rows:p,metric:d,metricId:s,language:t?"zh":"en"});if(c)try{Ms(c,a,n.selection)}catch(b){return e.createElement("p",{"data-os-loc":"src/field/BPairCase.jsx:59:23",role:"alert"},b.message)}const _=!!(c&&d&&(c.metricLabel!==d[c.language]||!Oi(c.readings,h.readings))),C=Math.max(...p.flatMap(b=>b.region.cells.map(R=>Math.abs(R.error??0)))),v=p.flatMap(b=>b.profile.points.flatMap(R=>[R.a,R.b])).filter(Number.isFinite),x=Math.min(...v),E=Math.max(...v),j=K0(p),w=Y0(n.roi,n.x,x,E),B=["frame","common","positive","negative","zero","mean_positive","mean_negative","median","roi_bias"];function k(b){let R,M;if(b==="svg"&&(R=r.current.outerHTML,M="image/svg+xml"),b==="csv"&&(R=Di(h),M="text/csv"),b==="signed"){const A=[B,...n.rows.map(P=>[P.frameId,...P.region.counts])].map(P=>P.join(",")).join(`\r
`)+`\r
`;pn("OceanScope-B-1049-1054-signed-error.csv","text/csv",A);return}b==="json"&&(R=JSON.stringify({...Ps(a,n,1050),caseView:Rs,review:h,signedScale:[-C,C],band:j,signedStats:n.rows.map(A=>Object.fromEntries(B.map((P,F)=>[P,[A.frameId,...A.region.counts][F]])))},null,2),M="application/json"),pn("OceanScope-B-1050-1054."+b,M,R)}return e.createElement("section",{"data-os-loc":"src/field/BPairCase.jsx:84:10","data-b-review":JSON.stringify(h),"data-review-frame":"1050 / 1054","aria-label":"B paired frame case"},e.createElement(U0,{rows:p,data:n,limit:C,low:x,high:E,band:j,scale:w,evidence:h,zh:t}),e.createElement("div",{"data-os-loc":"src/field/BPairCase.jsx:86:5",hidden:!0},e.createElement("svg",{"data-os-loc":"src/field/BPairCase.jsx:86:17",ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 960 765",style:{width:"100%",maxWidth:960},role:"img","aria-label":o("B 区域两帧误差与剖面","B region paired error maps and profiles")},e.createElement("rect",{"data-os-loc":"src/field/BPairCase.jsx:87:5",width:"960",height:"765",fill:"#fafaf8"}),e.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:88:5",fill:"#173447",fontFamily:"sans-serif",fontSize:"16"},e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:89:5",x:"30",y:"40",fontSize:"26",fontWeight:"bold"},o("B 区域 · 中心仍偏高，区域平均转负","Region B · positive centre, changing regional bias")),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:90:5",x:"30",y:"69"},"Best_1027 · XZ (−0.95, 0.90) · ROI 1 × 1 · ",o("剖面沿 X，长度按场景单位","X profile, source length units")),d&&e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:91:16",x:"30",y:"88",fontSize:"15",fontWeight:"bold"},h.metricLabel," (",d.id,") · ",h.readings.map(b=>b.frameId+" = "+b.display+" ["+b.common+"/"+b.candidates+"]").join("   /   ")," · ",o("场景单位 · [共同有效/候选列]","scene units · [common/candidate columns]")),p.map((b,R)=>{const M=40+R*468,A=128,P=N=>M+36+w.x(N),F=N=>423+w.y(N);return e.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:95:14",key:b.frameId},e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:95:33",x:M,y:"109",fontWeight:"bold",fontSize:"23"},b.frameId),e.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:96:9",transform:"translate("+M+" "+A+")"},e.createElement(ri,{cells:b.region.cells,limit:C,selection:n.selection})),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:97:9",x:M+222,y:"172"},"Z ↑   X →"),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:97:52",x:M+222,y:"205"},o("中心差","Centre Δh")," ",la(b.centre.difference)),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:98:9",x:M+222,y:"232"},"ROI bias ",la(b.stats.bias)),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:98:71",x:M+222,y:"259"},"n = ",b.region.counts[0]),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:99:9",x:M,y:"368"},o("偏高列均值","Mean positive")," ",la(b.region.counts[4]),"　 ",o("偏低列均值","Mean negative")," ",la(b.region.counts[5])),e.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:100:9",transform:"translate("+(M+36)+" 423)"},e.createElement(oi,{points:b.profile.points,scale:w,band:j})),[x,E].map(N=>e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:101:28",x:M-8,y:F(N)+4,fontSize:"12",key:N},N.toFixed(2))),[-.5,0,.5].map(N=>e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:102:28",key:N,x:P(N),y:"551",textAnchor:"middle",fontSize:"13"},N.toFixed(1))))}),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:105:5",x:"38",y:"400"},o("带符号误差（预测 − GT）","Signed error (prediction − GT)")),Array.from({length:81},(b,R)=>e.createElement("rect",{"data-os-loc":"src/field/BPairCase.jsx:106:36",key:R,x:385+R*3,y:"385",width:"3",height:"14",fill:ii((R-40)*C/40,C)})),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:107:5",x:"328",y:"399"},(-C).toFixed(3)),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:107:55",x:"500",y:"380"},"0"),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:107:85",x:"638",y:"399"},"+",C.toFixed(3)),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:108:5",x:"38",y:"583"},o("剖面横轴为距中心的 X 距离，纵轴为水面高度。蓝线 GT，橙线预测。","Horizontal: X distance from centre. Vertical: surface height. Blue GT, orange prediction.")),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:109:5",x:"38",y:"625",fontWeight:"bold"},o("偏高减小最集中的相邻两点","Adjacent pair with the largest reduction in positive error"),"　s = ",j.lo.toFixed(2)," … ",j.hi.toFixed(2)),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:110:5",x:"38",y:"659"},o("黄色标记该区段。逐点取正误差，再比较两帧；这两点占剖面全部正向减小量的","Gold marks the interval. These points account for this share of all decreases in positive error:")," ",(j.share*100).toFixed(1),"%."),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:111:5",x:"38",y:"695"},o("该段位于 1050 帧 GT 由局部谷底向右抬升处。1054 帧同一位置仍靠近低谷。","In 1050 the GT rises out of a local trough here. In 1054 these positions remain near the trough.")),e.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:112:5",x:"38",y:"735"},o("两帧比较固定世界位置。白点为中心，虚线为穿过中心的 X 剖面。","World positions are fixed. White circle: centre. Dashed line: X section through centre."))))),_&&e.createElement("p",{"data-os-loc":"src/field/BPairCase.jsx:114:18",role:"alert"},o("原记录与当前正式指标的数值或有效列不同。请核对原文件，然后重新选择指标。","The saved values or column counts differ from the current metric. Check the original record and select a metric again.")),e.createElement(L0,{rows:p,zh:t,metrics:l,metric:d,metricId:s,onTrack:i,evidence:h,error:m,retry:()=>u(b=>b+1)}),["svg","csv","json"].map(b=>e.createElement("button",{"data-os-loc":"src/field/BPairCase.jsx:116:36","data-os-action":"",key:b,disabled:!d||_,onClick:()=>k(b)},b==="csv"?o("下载 B 两帧指标摘要 CSV","Download B two-frame metric summary CSV"):o("下载 B 案例","Download B case")+" "+b.toUpperCase())),e.createElement("button",{"data-os-loc":"src/field/BPairCase.jsx:117:5","data-os-action":"",onClick:()=>k("signed")},o("下载 B 带符号误差明细 CSV（1049–1054）","Download B signed-error details CSV (1049–1054)")))}const On=n=>Number.isFinite(n)?n.toFixed(4):"—";function li(n,a){const t=n.spacing,s=a==="A"?176:174,i=a==="A"?90:69,c=n.originXYZ[0]+s*t,r=n.originXYZ[2]+i*t;return{sourceFrame:n.frameId,ix:s,iz:i,x:c,z:r,roi:{xmin:c-10*t,xmax:c+10*t,zmin:r-10*t,zmax:r+10*t},directionDeg:0}}async function el(n,a,t){const s=await La(va,Ya.indexSha256,n),i=s.frames.find(E=>E.frameId===1049),c=i.spacing,r=typeof a=="string"?li(i,a):a,{ix:o,iz:l,sourceFrame:f,roi:m,directionDeg:g}=r,y=s.frames.find(E=>E.frameId===f);if(!y||!Number.isInteger(o)||!Number.isInteger(l)||o<0||l<0||o>=y.shape[1]||l>=y.shape[0])throw Error("Invalid hotspot index");const u=y.originXYZ[0]+o*y.spacing,p=y.originXYZ[2]+l*y.spacing,d=wa({descriptor:y});if(!Number.isFinite(g)||g<0||g>=180||!m||!["xmin","xmax","zmin","zmax"].every(E=>Number.isFinite(m[E]))||m.xmin>=m.xmax||m.zmin>=m.zmax||m.xmin<d.xmin||m.xmax>d.xmax||m.zmin<d.zmin||m.zmax>d.zmax||u<m.xmin||u>m.xmax||p<m.zmin||p>m.zmax)throw Error("Select an ROI containing the hotspot and a valid profile angle");const h={sourceFrame:f,ix:o,iz:l,x:u,z:p,roi:m,directionDeg:g};if(u!==r.x||p!==r.z)throw Error("Hotspot world coordinates differ from source");const _=await ua(y,{...Xn(n),frameId:f},t);if(!_.common[l*y.shape[1]+o])throw Error("Source hotspot is outside common support");const C=[];for(const E of Vi){const j=s.frames.find(R=>R.frameId===E),w=E===f?_:await ua(j,{...Xn(n),frameId:E},t),B=Ka(w,{x:u,z:p,directionDeg:g});B.points=B.points.filter(R=>R.x>=m.xmin-1e-9&&R.x<=m.xmax+1e-9&&R.z>=m.zmin-1e-9&&R.z<=m.zmax+1e-9);const k=B.points.find(R=>Math.abs(R.distance)<1e-9),b=o===174&&l===69&&g===0&&m.xmin===u-10*c&&m.xmax===u+10*c&&m.zmin===p-10*c&&m.zmax===p+10*c?J0(w,m):null;C.push({region:b,frameId:E,profile:B,centre:k,stats:Zn(w,m)})}const v=C.flatMap(E=>E.profile.points),x=v.flatMap(E=>[E.a,E.b]).filter(Number.isFinite);return{selection:h,x:u,z:p,roi:m,rows:C,limits:x.length?[Math.min(...x),Math.max(...x)]:[0,1],error:Math.max(1e-9,...v.map(E=>Math.abs(E.difference??0)))}}function nl({bundle:n,zh:a,getSelection:t}){const{setLanguage:s}=ie(),[i,c]=S.useState(()=>sa()?"B":null),[r,o]=S.useState(()=>sa()?1050:1049),[l,f]=S.useState(null),[m,g]=S.useState(sa),[y,u]=S.useState(()=>Xt(new URLSearchParams(window.location.search))),[p,d]=S.useState(()=>{const b=Ti();return Zt(b)?b.bReview:null}),[h,_]=S.useState(""),C=S.useRef(null),v=S.useRef(0);function x(b,R=1049,M=!1,A=y,P=null){v.current++,g(M),_(""),c(b),o(R),d(P);const F=new URL(window.location.href);if(M)u(A),Ht(F,A,P?.language||(a?"zh":"en")),F.hash="#analysis-height";else if(sa()){for(const N of["review","metric","proposal"])F.searchParams.delete(N);F.hash="#analysis-height"}window.history.replaceState(window.history.state,"",F)}function E(b){window.dispatchEvent(new Event("oceanscope-dismiss-mark")),v.current++,d(null),u(b);const R=Ht(new URL(window.location.href),b,a?"zh":"en");R.hash="#analysis-height",window.history.replaceState(window.history.state,"",R)}S.useEffect(()=>{const b=()=>{if(window.location.hash.startsWith("#mark="))return;const R=new URLSearchParams(window.location.search);R.get("review")==="b-pair"?(v.current++,d(null),g(!0),c("B"),o(1050),u(Xt(R)),_("")):m&&(v.current++,d(null),g(!1),c(null),_(""))};return window.addEventListener("popstate",b),()=>window.removeEventListener("popstate",b)},[m]),S.useEffect(()=>{const b=R=>{const M=R.detail;Zt(M)&&(v.current++,_(""),g(!0),c("B"),o(1050),d(M.bReview||null),u(M.bReview?.metricId||""))};return window.addEventListener(Gt,b),()=>window.removeEventListener(Gt,b)},[]);async function j(b){if(!b)return;const R=++v.current;try{if(b.size>8*1024*1024)throw Error("Report exceeds 8 MiB");const M=JSON.parse(await b.text()),A=Wi(M,n);if(!A||typeof A!="object")throw Error("Invalid report selection");const P=M.caseView===Rs;if(P){const F=JSON.parse(va).frames.find(W=>W.frameId===1049),N=li(F,"B");if(!$i(N,A))throw Error(a?"报告的选区或剖面与固定 B 区域不符。":"The report ROI or profile differs from the fixed B region.");M.review!=null&&Ms(M.review,n,N)}R===v.current&&(x(A,M.selectedFrame,P,M.review?.metricId??"",P?M.review:null),P&&M.review&&s(M.review.language))}catch(M){R===v.current&&_(M.message)}}S.useEffect(()=>{if(!i)return;const b=new AbortController;return el(n,i,b.signal).then(R=>{b.signal.aborted||f({bundle:n,location:i,data:R})}).catch(R=>{b.signal.aborted||f({bundle:n,location:i,error:R.message})}),()=>b.abort()},[n,i]);const w=l?.bundle===n&&l.location===i?l:null,B=w?.data,k=B?.rows.find(b=>b.frameId===r);return e.createElement("section",{"data-os-loc":"src/field/FixedWaveWindow.jsx:146:10","data-review-frame":k?.frameId,ref:C,"aria-label":"Fixed ROI wave window"},e.createElement("h3",{"data-os-loc":"src/field/FixedWaveWindow.jsx:146:101"},a?"固定选区波形 · 1049–1054":"Fixed ROI wave profiles · 1049–1054"),["A","B"].map(b=>e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:147:24","data-os-action":"",key:b,"aria-pressed":i===b,onClick:()=>x(b)},a?"固定区域 ":"Fixed region ",b)),e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:148:5","data-os-action":"",onClick:()=>x("B",1050,!0)},a?"B 区域：1050 与 1054":"Compare B: 1050 and 1054"),e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:149:5","data-os-action":"",onClick:()=>{try{x(t())}catch(b){_(b.message)}}},a?"使用当前热点与选区":"Use current hotspot and ROI"),e.createElement("label",{"data-os-loc":"src/field/FixedWaveWindow.jsx:150:5"},a?"恢复六帧 JSON":"Restore six-frame JSON"," ",e.createElement("input",{"data-os-loc":"src/field/FixedWaveWindow.jsx:150:54","data-os-action":"",type:"file","aria-label":"Restore six-frame JSON",accept:".json",onChange:b=>{j(b.target.files[0]),b.target.value=""}})),h&&e.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:151:17",role:"alert"},h),i&&!w&&e.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:152:29",role:"status"},a?"正在读取六帧高度…":"Loading six height frames…"),w?.error&&e.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:153:23",role:"alert"},w.error," ",e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:153:54","data-os-action":"",onClick:()=>c(null)},a?"重置":"Reset")),m&&B&&(!B.rows[0].region||B.selection.sourceFrame!==1049)?e.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:155:7",role:"alert"},a?"B 案例固定选区或来源帧不符。":"The fixed B region or source frame does not match."):m&&B&&e.createElement(Q0,{data:B,bundle:n,zh:a,metricId:y,recorded:p,onTrack:E}),k&&e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:157:15"},"XZ (",On(B.x),", ",On(B.z),") · ",B.selection.directionDeg,"° · ",a?"固定世界位置。蓝 GT，橙预测，紫色为预测减 GT。":"Fixed world position. Blue GT, orange prediction, purple prediction minus GT."),e.createElement("table",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:5"},e.createElement("thead",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:12"},e.createElement("tr",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:19"},(a?["帧","中心高度差","ROI 平均偏差","ROI MAE","共同有效 / 候选"]:["Frame","Centre height difference","ROI mean bias","ROI MAE","Common / candidate"]).map(b=>e.createElement("th",{"data-os-loc":"src/field/FixedWaveWindow.jsx:158:167",key:b},b)))),e.createElement("tbody",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:5"},B.rows.map(b=>e.createElement("tr",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:30","data-review-frame":b.frameId,key:b.frameId},e.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:80"},e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:159:84","data-os-action":"","aria-pressed":r===b.frameId,onClick:()=>o(b.frameId)},b.frameId)),e.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:7"},On(b.centre?.difference)),e.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:46"},On(b.stats.bias)),e.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:77"},On(b.stats.mae)),e.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:160:107"},b.stats.common," / ",b.stats.candidates))))),e.createElement(at,{reviewId:"fixed-wave-"+k.region,profile:k.profile,roi:B.roi,limits:B.limits,errorLimit:B.error,label:(a?"固定剖面 ":"Fixed profile ")+r}),e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:162:5","data-os-action":"",onClick:()=>pn("OceanScope-six-frame.json","application/json",JSON.stringify(Ps(n,B,r),null,2))},a?"下载六帧 JSON":"Download six-frame JSON"),e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:163:5","data-os-action":"",onClick:()=>pn("OceanScope-six-frame.csv","text/csv",["frame,hotspot_difference,roi_bias,roi_mae,common,candidate",...B.rows.map(b=>[b.frameId,b.centre?.difference,b.stats.bias,b.stats.mae,b.stats.common,b.stats.candidates].join(","))].join(`
`))},a?"下载逐帧 CSV":"Download six-frame CSV"),e.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:164:5","data-os-action":"",onClick:()=>{const b=C.current.querySelector(":scope > figure svg").cloneNode(!0);b.setAttribute("xmlns","http://www.w3.org/2000/svg"),pn("OceanScope-profile-"+r+".svg","image/svg+xml",b.outerHTML)}},a?"下载当前剖面 SVG":"Download profile SVG")),e.createElement($0,{zh:a}),e.createElement(T0,{zh:a}))}function al({zh:n}){const a=[{id:"MAE",name:n?"平均绝对误差":"Mean absolute error",formula:"MAE = Σ|eᵢ| / N",meaning:n?"平均差多少，不区分偏高或偏低。越接近 0 越好。":"Average error size, regardless of direction. Closer to 0 is better."},{id:"Bias",name:n?"平均有符号偏差":"Mean signed error",formula:"Bias = Σeᵢ / N",meaning:n?"正值表示预测偏高，负值表示偏低。正负误差会抵消，所以 Bias 接近 0 不代表每个位置都准确。":"Positive means the prediction is higher; negative means lower. Opposite errors can cancel, so a near-zero bias does not guarantee small errors."},{id:"RMSE",name:n?"均方根误差":"Root mean square error",formula:"RMSE = √(Σeᵢ² / N)",meaning:n?"先平方、求平均，再开平方，对较大的误差更敏感。越接近 0 越好；它不是最大误差。":"Square the errors, average them, then take the square root. More sensitive to large errors; closer to 0 is better. This is not the maximum error."}];return e.createElement("details",{"data-os-loc":"src/field/HeightMetricHelp.jsx:9:9",className:"height-metric-help"},e.createElement("summary",{"data-os-loc":"src/field/HeightMetricHelp.jsx:10:3"},n?"MAE、Bias、RMSE 怎么看？说明与公式":"How to read MAE, Bias and RMSE — definitions & formulas"),e.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:11:3",className:"height-metric-help-body"},e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:12:4"},n?"先在同一位置比较水面高度：Aᵢ 是 GT（参考值），Bᵢ 是预测值，eᵢ = Bᵢ − Aᵢ。以下高度与误差统一用 cm 表示；1 m = 100 cm。":"Compare heights at the same location: Aᵢ is GT (the reference), Bᵢ is the prediction, and eᵢ = Bᵢ − Aᵢ. Heights and errors below use cm; 1 m = 100 cm."),e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:13:4"},n?"N 是当前统计范围内两边都有有效高度的位置数，也叫“共同列”。每个 (X, Z) 位置对应一条竖直列，取其最上层水面高度。Σ 表示将这 N 个位置的数相加。缺失位置不补零；N = 0 时不提供误差分数。":"N is the number of locations with valid heights in both datasets within the current scope, also called common columns. Each (X, Z) location defines a vertical column with a topmost surface height. Σ sums over these N locations. Missing locations are not filled with zero; no error score is available when N = 0."),e.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:4",className:"height-metric-formulas"},a.map(t=>e.createElement("article",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:61",key:t.id},e.createElement("h3",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:84"},t.id," · ",t.name),e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:116",className:"height-metric-formula"},t.formula),e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:171"},t.meaning)))),e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:15:4",className:"height-metric-example"},e.createElement("strong",{"data-os-loc":"src/field/HeightMetricHelp.jsx:15:41"},n?"小例子：":"Example: "),n?"两个位置分别偏低 1 cm、偏高 3 cm，即 e = −1、+3 cm。MAE = 2 cm，Bias = +1 cm，RMSE = √5 ≈ 2.24 cm。三个指标从不同角度描述同一组误差。":"At two locations, the prediction is 1 cm lower and 3 cm higher: e = −1, +3 cm. MAE = 2 cm, Bias = +1 cm, and RMSE = √5 ≈ 2.24 cm. The metrics describe different aspects of the same errors."),e.createElement("dl",{"data-os-loc":"src/field/HeightMetricHelp.jsx:16:4",className:"height-metric-scopes"},e.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:5"},e.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:10"},n?"当前帧 · 全域":"Current frame · Full domain"),e.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:64"},n?"当前这一帧内，所有共同有效位置的统计；不是全部 96 帧的平均。":"All paired valid locations in this frame; not an average over all 96 frames.")),e.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:5"},e.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:10"},n?"选区 · ROI":"Selected region · ROI"),e.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:58"},n?"只统计已应用的矩形选区内的位置。ROI 是“感兴趣区域”；改变选区不会改变当前帧全域或全序列评分。":"Only locations inside the applied rectangle. ROI means region of interest. Changing it does not change full-frame or sequence scores.")),e.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:5"},e.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:10"},n?"单点探针 / 截面":"Point probe / Profile"),e.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:59"},n?"探针读数来自一个点击位置；曲线沿当前整条截面显示，并不自动裁剪到 ROI。两者都不能当作选区平均值。":"The probe reads one clicked location. The profile follows the current full section and is not automatically cropped to the ROI. Neither is an ROI average."))),e.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:21:4"},n?"这些是水面高度误差，不是 SDF 场误差或速度误差。此处单位为 cm；固定协议的全序列指标及 %R 请到“时间分析”查看。":"These are surface-height errors, not SDF-field or velocity errors. Values here use cm. Open Time analysis for fixed-protocol sequence metrics and %R.")))}const _e=(n,a=1)=>n==null?"—":(n*a).toFixed(4);function pa(n){const{shape:[a,t],originXYZ:[s,,i],spacing:c}=n.descriptor;return{xmin:s,xmax:s+(t-1)*c,zmin:i,zmax:i+(a-1)*c}}function tl(n){let a=1/0,t=-1/0,s=0;for(let i=0;i<n.heightA.length;i++){for(const c of["A","B"])n["wet"+c][i]&&(a=Math.min(a,n["height"+c][i]),t=Math.max(t,n["height"+c][i]));n.common[i]&&(s=Math.max(s,Math.abs(n.heightB[i]-n.heightA[i])))}return{height:Number.isFinite(a)?[a,t>a?t:a+1]:[0,1],error:Math.max(s,1e-9)}}function sl({spatial:n,kind:a,range:t,roi:s,probe:i,profile:c,onRegion:r,onProbe:o,label:l,absolute:f=!1,diagnosis:m,mode:g,onPause:y}){const u=S.useRef(null),p=S.useRef(null),[d,h]=n.descriptor.shape,_=pa(n),C=a==="difference"?null:n[a],v=a==="difference"?n.common:n[a==="heightA"?"wetA":"wetB"];S.useEffect(()=>{const B=u.current,k=B?.getContext("2d");if(!k)return;const b=k.createImageData(h,d);for(let M=0;M<d;M++)for(let A=0;A<h;A++){const P=M*h+A,F=((d-1-M)*h+A)*4;if(!v[P]){b.data.set([225,230,235,255],F);continue}const N=n.heightB[P]-n.heightA[P],W=C?C[P]:f?Math.abs(N):N,T=Math.max(0,Math.min(1,(W-t[0])/(t[1]-t[0]))),H=a==="difference"&&!f?T<.5?[80+350*T,130+230*T,220+70*T]:[255,245-350*(T-.5),255-440*(T-.5)]:[35+195*T,75+155*T,155+70*T];b.data.set([...H,255],F)}k.putImageData(b,0,0);const R=(M,A)=>[(M-_.xmin)/n.descriptor.spacing+.5,d-.5-(A-_.zmin)/n.descriptor.spacing];if(m){const M=pt(n,m);for(const A of[M.first,M.second])k.strokeStyle="#15373e",k.beginPath(),A.points.forEach((P,F)=>k[F?"lineTo":"moveTo"](...R(P.x,P.z))),k.stroke()}if(!m&&c?.points.length&&(k.strokeStyle="#172c43",k.lineWidth=1,k.beginPath(),c.points.forEach((M,A)=>k[A?"lineTo":"moveTo"](...R(M.x,M.z))),k.stroke()),s){const[M,A]=R(s.xmin,s.zmax),[P,F]=R(s.xmax,s.zmin);if(k.strokeStyle="#111",k.lineWidth=1,k.strokeRect(M,A,P-M,F-A),g==="adjust")for(const[N,W]of[[M,A],[M,F],[P,A],[P,F]])k.fillRect(N-1.5,W-1.5,3,3)}if(i){const[M,A]=R(i.x,i.z);k.strokeStyle="#111",k.beginPath(),k.moveTo(M-3,A),k.lineTo(M+3,A),k.moveTo(M,A-3),k.lineTo(M,A+3),k.stroke()}},[n,a,t[0],t[1],s,i,c,f,m,g]);function x(B){const k=B.currentTarget.getBoundingClientRect(),b=getComputedStyle(B.currentTarget),R={left:k.left,top:k.top,width:k.width,height:k.height};for(const F of["Left","Right","Top","Bottom"])R["border"+F]=parseFloat(b["border"+F+"Width"])||0;const{ix:M,iz:A,index:P}=Xi(R,B.clientX,B.clientY,[d,h]);return{x:_.xmin+M*n.descriptor.spacing,z:_.zmin+A*n.descriptor.spacing,index:P}}function E(B,k){if(g!=="adjust"||!k.roi)return{xmin:Math.min(k.x,B.x),xmax:Math.max(k.x,B.x),zmin:Math.min(k.z,B.z),zmax:Math.max(k.z,B.z)};const b=k.roi,R=n.descriptor.spacing,M=B.x-k.x,A=B.z-k.z;let P;return k.corner?(P={...b,[k.corner[0]]:B.x,[k.corner[1]]:B.z},P.xmax-P.xmin<R||P.zmax-P.zmin<R?b:ya(P,_).roi):(P={xmin:b.xmin+M,xmax:b.xmax+M,zmin:b.zmin+A,zmax:b.zmax+A},ya(P,_,{mode:"move"}).roi)}function j(B){if(!p.current)return;const k=x(B),b=p.current;p.current=null,g==="adjust"?r(E(k,b)):k.index===b.index?o(k):r(E(k,b))}function w(B){const k=x(B),b=n.descriptor.spacing;let R=null;if(s&&g==="adjust"){const M=["xmin","xmax"].find(P=>Math.abs(k.x-s[P])<2*b),A=["zmin","zmax"].find(P=>Math.abs(k.z-s[P])<2*b);M&&A&&(R=[M,A])}g==="adjust"&&s&&!R&&(k.x<s.xmin||k.x>s.xmax||k.z<s.zmin||k.z>s.zmax)||(p.current={...k,roi:s,corner:R},y?.(),B.currentTarget.setPointerCapture?.(B.pointerId))}return e.createElement("figure",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:53:9","data-review-id":"native-height-"+a+(a==="difference"&&f?"-absolute":"")},e.createElement("figcaption",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:53:103"},l),e.createElement("canvas",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:53:135","data-os-action":"","data-renderer":"native-height","data-review-frame":n.descriptor.frameId,"data-grid-origin":[_.xmin,_.zmin,n.descriptor.spacing].join(","),ref:u,width:h,height:d,"data-hotspot-index":m?.hotspot.index??"","aria-label":a==="heightA"?"GT height map":a==="heightB"?"Prediction height map":f?"Absolute height difference map":"Signed height difference map",onPointerDown:w,onPointerMove:B=>{p.current&&g==="adjust"&&r(E(x(B),p.current))},onPointerUp:j,onPointerCancel:()=>{p.current?.roi&&g==="adjust"&&r(p.current.roi),p.current=null}}),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:53:799"},"X ",_e(_.xmin),"…",_e(_.xmax)," · Z ",_e(_.zmin),"…",_e(_.zmax)," m"),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:53:909"},_e(t[0])," … ",_e(t[1])," m"))}function il({profile:n,zh:a}){const t=n.points,s=t.flatMap(g=>[g.a,g.b]).filter(Number.isFinite),i=t.map(g=>g.difference).filter(Number.isFinite);if(!s.length)return e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:57:27",role:"status"},a?"此剖面没有有效高度。":"No valid heights on this profile.");const c=Math.min(...s),r=Math.max(...s),o=Math.max(r-c,1e-9),l=Math.max(...i.map(Math.abs),1e-9),f=Math.max(t.at(-1)?.distance||0,1e-9);function m(g,y=!1){let u=!1;return t.map(p=>{if(p[g]===null)return u=!1,"";const d=42+p.distance/f*640,h=y?235-p[g]/l*42:166-(p[g]-c)/o*130,_=u?"L":"M";return u=!0,`${_}${d},${h}`}).join(" ")}return e.createElement("figure",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:9","data-review-id":"protocol-height-profile","data-profile-axis":[0,f,42,682].join(","),className:"protocol-profile"},e.createElement("figcaption",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:137"},a?"同一截面 · 蓝色GT／橙色预测 · B−A":"Same section · blue GT / orange prediction · B−A"," · ",n.sampling==="native_columns"?a?"原生列":"Native columns":a?"四邻点共同有效 · 插值诊断":"Four valid neighbors · interpolated diagnosis"),e.createElement("svg",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:380",viewBox:"0 0 720 300",role:"img","aria-label":"Protocol height profile"},e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:455",x:"8",y:"18"},"Y (m)"),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:486",x:"42",y:"30"},_e(r)),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:526",x:"42",y:"185"},_e(c)),e.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:567",d:m("a"),fill:"none",stroke:"#2583c5",strokeWidth:"2"}),e.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:633",d:m("b"),fill:"none",stroke:"#e08b22",strokeWidth:"2"}),e.createElement("line",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:699",x1:"42",y1:"235",x2:"682",y2:"235",stroke:"#798699",strokeDasharray:"4 3"}),e.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:780",d:m("difference",!0),fill:"none",stroke:"#9b4778",strokeWidth:"1.5"}),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:862",x:"4",y:"220"},"B−A"),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:892",x:"4",y:"240"},"0"),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:920",x:"600",y:"295"},_e(f)," m"),e.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:969",x:"44",y:"295"},a?"沿截面距离":"Section distance"," · ±",_e(l)," m")))}function Es({value:n,label:a,zh:t}){return e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:62:43",className:"protocol-metrics","aria-label":a},e.createElement("strong",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:63:2"},a==="ROI metrics"?t?"选区 · 水面高度":"ROI · Surface height":t?"当前帧全域 · 水面高度":"Full frame · Surface height"),e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:64:2",className:"protocol-metric-cards"},e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:3"},e.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:8"},t?"有效对比点":"Paired valid locations"," ",n.common),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:73"},t?"共同列 · 两边都有有效高度":"Common columns · valid heights in both")),n.common?e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:67:4"},e.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:67:9"},"MAE ",_e(n.mae_m,100)," cm"),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:67:54"},t?"平均差多少 · 越小越好":"Average error size · lower is better")),e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:68:4"},e.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:68:9"},"Bias ",_e(n.bias_m,100)," cm"),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:68:56"},t?"平均偏差 · 正值偏高，负值偏低":"Mean signed error · positive higher, negative lower")),e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:69:4"},e.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:69:9"},"RMSE ",_e(n.rmse_m,100)," cm"),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:69:56"},t?"对大误差更敏感 · 越小越好":"More sensitive to large errors · lower is better"))):e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:70:7"},t?"不可用：无共同有效列":"Unavailable: no common columns")))}function cl({spatial:n,plane:a,sliceIndex:t,rotationAxis:s,angle:i,sectionPercent:c,zh:r,restored:o,controlRef:l,onPause:f,onOpenVelocity:m}){const[g,y]=S.useState(o?.roi??null),[u,p]=S.useState(o?.probe??null),[d,h]=S.useState(()=>o?.roi??pa(n)),[_,C]=S.useState(()=>Xa(o?.roi??pa(n))),[v,x]=S.useState({}),[E,j]=S.useState(o?.diagnosis??null),[w,B]=S.useState(o?.appearance?.absoluteError??!1),[k,b]=S.useState("select"),[R,M]=S.useState("");function A($){try{const D=n.descriptor.shape[1],J=Hr(n,{ix:$.index%D,iz:Math.floor($.index/D),resourceKey:JSON.stringify(n.descriptor)});f?.(),j(J),p(J.hotspot),O(J.roi),M("")}catch{M("该点没有共同有效高度，请选择有效水面。")}}const P=O0(_,d,v),F=Object.keys(P.errors).length?r?"请补全数字；每个轴的最小值不能大于最大值。当前已应用的选区未改变。":"Enter all numeric bounds; each minimum must be no greater than its maximum. The applied ROI is unchanged.":"";S.useImperativeHandle(l,()=>({capture:()=>({spatial:n,roi:g,probe:u,diagnosis:E,appearance:{absoluteError:w}})}));const N=S.useMemo(()=>tl(n),[n]),W=S.useMemo(()=>Wn(n),[n]),T=S.useMemo(()=>g?Wn(n,g):null,[n,g]),H=S.useMemo(()=>{if(a==="xz"||a==="oblique"&&s!=="y")return null;try{return As(n,{plane:a,index:Math.max(0,Math.min((a==="xy"?n.descriptor.shape[0]:n.descriptor.shape[1])-1,t)),angle:i,sectionPercent:c})}catch{return null}},[n,a,t,s,i,c]);function O($){y($),h($),C(Xa($)),x({})}function z(){const $=pa(n);y(null),h($),C(Xa($)),x({})}function Z(){P.valid&&(Wn(n,P.values),O({...P.values}))}const X=u?.index;return e.createElement(e.Fragment,null,e.createElement("h2",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:90:3"},r?"高度与选区分析 · 帧 ":"Height & ROI analysis · frame ",n.descriptor.frameId),e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:91:3"},r?"原生列高度 · 最高过零点 · 共同有效域。点击探针，拖动选择ROI；灰色为无效区域。A/B共用色标，B−A正值表示预测偏高。":"Native highest-crossing columns and common support. Click to probe; drag to select ROI. Gray is invalid. Shared A/B scale; positive B−A means prediction is higher."),e.createElement("label",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:92:3"},e.createElement("input",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:92:10","data-os-action":"",type:"checkbox","aria-label":"Absolute height error",checked:w,onChange:$=>B($.target.checked)}),r?"绝对误差 |B−A|（取消为有符号差值）":"Absolute error |B−A| (clear for signed difference)"),R&&e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:93:20",role:"alert"},R),e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:94:3",className:"protocol-maps"},[["heightA","A / GT"],["heightB","B / Prediction"],["difference","B−A"]].map(([$,D])=>e.createElement(sl,{key:$,spatial:n,kind:$,label:$==="difference"&&w?"|B−A|":D,roi:g,probe:u,profile:H,diagnosis:E,mode:k,onPause:f,absolute:w,range:$==="difference"?[w?0:-N.error,N.error]:N.height,onRegion:O,onProbe:A}))),e.createElement(D0,{spatial:n,diagnosis:E,roi:g,mode:k,setMode:b,onRegion:O,onExit:()=>j(null),onNote:$=>j(D=>({...D,caseNote:$})),onDirection:$=>j(D=>({...D,directionDeg:$}))}),E&&m&&e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:96:31"},e.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:96:34","data-os-action":"",disabled:!ja(n.descriptor.frameId)||!g,onClick:()=>{f?.(),m({frame:n.descriptor.frameId,hotspotXZ:{x:E.hotspot.x,z:E.hotspot.z},roiXZ:{...g},surfaceCaseId:n.descriptor.runId??"best-1027",caseNote:E.caseNote??"",surfaceIdentity:Object.fromEntries(["runId","protocolSha256","manifestA","manifestB"].map($=>[$,n.descriptor[$]]))})}},r?"查看此区域速度":"Inspect velocity in this region"),r?" · 已核验帧支持速度诊断。保留 XZ，单独选择水下 Y 层。":" · Verified frames support velocity diagnosis. Retain XZ and choose an underwater Y layer separately."),e.createElement(Es,{value:W,label:"Frame spatial metrics",zh:r}),e.createElement(al,{zh:r}),e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:99:3",className:"protocol-roi-help"},r?"ROI = 局部选区。X、Z 是水平方向，Y 是高度方向；下面四个边界确定矩形范围，点击“应用选区”后更新局部统计。":"ROI = region of interest. X and Z are horizontal; Y is height. The four bounds define a rectangle. Select Apply ROI to update its statistics."),e.createElement("form",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:100:3",onSubmit:$=>{$.preventDefault(),Z()}},e.createElement("fieldset",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:100:52",className:"protocol-roi"},e.createElement("legend",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:100:87"},r?"选区范围 · 世界坐标（m）":"ROI bounds · world coordinates (m)"),[["xmin","X min"],["xmax","X max"],["zmin","Z min"],["zmax","Z max"]].map(([$,D])=>e.createElement("label",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:100:252",key:$},D,e.createElement("input",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:100:276","data-os-action":"","aria-label":`ROI ${D}`,type:"number",step:"any",value:_[$],title:String(d[$]),"aria-invalid":!!P.errors[$],"aria-describedby":P.errors[$]?"roi-input-error":void 0,onChange:J=>{C(Q=>({...Q,[$]:J.target.value})),x(Q=>({...Q,[$]:!0}))}}))),e.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:100:589",type:"submit",disabled:!P.valid},r?"应用选区":"Apply ROI"),e.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:100:669","data-os-action":"",type:"button",onClick:z},r?"恢复全域":"Reset to full domain")),F&&e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:100:778",id:"roi-input-error",role:"alert"},F)),e.createElement(ks,{zh:r,subject:"Best_1027 · "+n.descriptor.frameId,context:[w?"|B−A|":"B−A",u&&"XZ "+u.x.toFixed(4)+", "+u.z.toFixed(4),g&&"ROI X ["+g.xmin+", "+g.xmax+"] Z ["+g.zmin+", "+g.zmax+"]",E&&"Profile "+E.directionDeg+"°"].filter(Boolean).join(" · "),viewLink:zi+"#analysis-height"}),T&&e.createElement(Es,{value:T,label:"ROI metrics",zh:r}),u&&e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:107:11","aria-label":"Protocol probe"},e.createElement("strong",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:107:42"},r?"单点探针（不是选区平均）":"Point probe (not an ROI average)"),e.createElement("br",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:107:113"}),"X ",_e(u.x)," / Z ",_e(u.z)," m · A / GT ",_e(n.wetA[X]?n.heightA[X]:null)," / B / ",r?"预测":"Prediction"," ",_e(n.wetB[X]?n.heightB[X]:null)," m · B−A ",_e(n.common[X]?n.heightB[X]-n.heightA[X]:null,100)," cm"),!E&&H&&e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:108:25",className:"protocol-profile-help"},r?"曲线怎么看：蓝线是 GT，橙线是预测；紫线是 B−A，零线上方表示预测偏高，下方表示偏低。横轴是沿截面的距离，纵轴是高度；曲线显示整条截面，不只显示 ROI。":"Reading the profile: blue is GT, orange is prediction. Purple is B−A: above zero means higher, below means lower. The horizontal axis is section distance; the vertical axis is height. The profile covers the full section, not just the ROI."),!E&&(H?e.createElement(il,{profile:H,zh:r}):e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:109:62",role:"status"},r?"选择 XY、YZ 或绕Y竖直截面查看高度曲线；水平／倾斜几何截面不作为俯视高度剖面。":"Choose XY, YZ or a vertical Y-axis section for heights; horizontal/tilted geometry is not a top-down height profile.")),e.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:110:3"},r?"单位：来源约定，未独立标定。高度仅表示俯视最高层，不覆盖完整翻卷内部结构。全序列指标保持原始范围；ROI与插值剖面不替换全局指标。":"Units: source convention, not independently calibrated. Heights describe the topmost layer, not complete overturning geometry. Sequence metrics retain their scope; ROI and interpolated profiles do not replace them."))}function rl({viewMode:n="all",bundle:a,frame:t,plane:s,sliceIndex:i,rotationAxis:c,angle:r,sectionPercent:o,getReportView:l,onRestoreReportView:f,reportControlRef:m,onDownload:g,catalog:y,reportContext:u,onPause:p,onOpenVelocity:d,unifiedRestore:h=!1}){const{language:_}=ie(),C=_==="zh",v=JSON.stringify([a.runId,a.protocol,a.datasetA,a.datasetB,t]),[x,E]=S.useState(0),[j,w]=S.useState(null),[B,k]=S.useState(null),b=S.useRef(null),R=S.useRef(u);R.current=u,S.useEffect(()=>{B&&B.view.frame!==t&&k(null)},[t,B]),S.useEffect(()=>{const W=new AbortController;let T=!0;return(async()=>{try{const H=await La(va,Ya.indexSha256,a),O=H.frames.find(Z=>Z.frameId===t);if(!O)throw Error("No spatial resource for selected frame");if(!T)return;const z=await ua(O,{...Xn(a),frameId:t},W.signal);T&&w({key:v,spatial:z})}catch(H){T&&w({key:v,error:H})}})(),()=>{T=!1,W.abort()}},[a,t,v,x]);const M=j?.key===v?j:null;function A(){if(!M?.spatial||!b.current)throw Error("Wait for verified spatial resources");const W=b.current.capture(),{view:T,scene:H}=l(),O=Lr({bundle:a,...W,view:T,catalog:y});return{record:O,canvas:k0(O,W.spatial,H,_)}}async function P(W,T){p?.();const H=R.current,O=await La(va,Ya.indexSha256,a),z=Yr(W,a,O,{catalog:y}),Z=await ua(z.descriptor,{...Xn(a),frameId:z.view.frame},T);if(z.diagnosis&&!Z.common[z.diagnosis.hotspot.index])throw Error("Diagnosis hotspot has no paired valid height");if(T.throwIfAborted(),R.current!==H)throw Error("View changed while restoring; retry from the current view");return{...z,spatial:Z}}async function F(W,T){T.throwIfAborted();const H=JSON.stringify([a.runId,a.protocol,a.datasetA,a.datasetB,W.view.frame]);w({key:H,spatial:W.spatial}),k({...W,revision:crypto.randomUUID()}),await f(W.view,T)}const N=B?.view.frame===t?B:null;return e.createElement("section",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:148:9",className:"protocol-spatial","aria-label":"Protocol spatial analysis"},e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:148:86","data-review-frame":t,hidden:n==="report"},M?M.error?e.createElement(Je,{error:M.error,zh:C,resource:(C?"水面高度与掩码 · 帧 ":"Height and masks · frame ")+t,onRetry:()=>{w(null),E(W=>W+1)}}):e.createElement(cl,{key:v+(N?.revision??""),controlRef:b,restored:N,spatial:M.spatial,plane:s,sliceIndex:i,rotationAxis:c,angle:r,sectionPercent:o,zh:C,onPause:p,onOpenVelocity:d}):e.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:148:155",role:"status"},C?`正在加载帧 ${t} 的同协议空间资源…`:`Loading protocol spatial resources for frame ${t}…`),e.createElement(nl,{bundle:a,zh:C,getSelection:()=>{const W=b.current?.capture();if(!W?.diagnosis||!W.roi)throw Error(C?"请先点击高度图选择热点并设置选区。":"Select a hotspot on a height map and apply an ROI first.");const{hotspot:T,directionDeg:H}=W.diagnosis;return{sourceFrame:W.spatial.descriptor.frameId,ix:T.ix,iz:T.iz,x:T.x,z:T.z,roi:{...W.roi},directionDeg:H}}})),e.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:155:8",hidden:n==="height"},l&&e.createElement(N0,{unifiedRestore:h,key:a.runId,controlRef:m,ready:!!M?.spatial,capture:A,prepareImport:P,applyImport:F,onDownload:g,zh:C})))}function ol({slice:n,probe:a,t}){const[s,i]=S.useState(!1),c=S.useMemo(()=>B0(n,a,s?.125:.25),[n,a,s]),{gt:r,pred:o,split:l,seed:f,step:m,separation:g,maxArc:y}=c,u={mask:t("共同有效域边界：插值需要四个有效邻点","Common mask boundary: four valid neighbors required"),slow:t("投影流速低于或等于阈值","Projected speed at or below floor"),limit:t("达到积分长度上限","Arc length limit reached"),grid:t("超出可插值网格","Outside interpolation grid")},p=[f,...r.points,...o.points],d=p.map(w=>w[0]),h=p.map(w=>w[1]),_=Math.max(6*g,Math.max(...d)-Math.min(...d),Math.max(...h)-Math.min(...h)),C=(Math.min(...d)+Math.max(...d))/2,v=(Math.min(...h)+Math.max(...h))/2,x=([w,B])=>[160+(w-C)*250/_,150-(B-v)*250/_],E=(w,B,k)=>{const[b,R]=x(w);return e.createElement("circle",{"data-os-loc":"src/field/StreamlinePanel.jsx:13:53",cx:b,cy:R,r:k,fill:B})},j=w=>w.map(B=>B.toFixed(3)).join(", ");return e.createElement("section",{"data-os-loc":"src/field/StreamlinePanel.jsx:15:9","aria-label":"1049 paired streamlines"},e.createElement("h3",{"data-os-loc":"src/field/StreamlinePanel.jsx:15:55"},t("配对瞬时流线 · XZ 投影","Paired instantaneous streamlines · XZ projection")),e.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:16:2"},t("以当前探针为共同起点；点击上方切片可换起点。图中向右为 +X，向上为 +Z。","Both start at the probe. Click a slice above to change the seed. Right is +X; up is +Z.")," XZ (",j(f),")"),e.createElement("button",{"data-os-loc":"src/field/StreamlinePanel.jsx:17:2","data-os-action":"",type:"button","aria-pressed":s,onClick:()=>i(!s)},t("半步长复核","Half-step check")),e.createElement("svg",{"data-os-loc":"src/field/StreamlinePanel.jsx:18:2",role:"img","aria-label":t("同起点配对流线","Same-seed paired streamlines"),viewBox:"0 0 320 300",style:{width:"100%",maxWidth:480,background:"#0d2030",borderRadius:8}},[r,o].map((w,B)=>e.createElement("polyline",{"data-os-loc":"src/field/StreamlinePanel.jsx:19:27",key:B,fill:"none",stroke:B?"#ffbf69":"#66d9eb",strokeWidth:"2.5",strokeDasharray:B?"5 3":void 0,points:w.points.map(k=>x(k).join(",")).join(" ")})),[r,o].map((w,B)=>{if(!w.points.length)return null;const[k,b]=x(w.points.at(-1));return e.createElement("rect",{"data-os-loc":"src/field/StreamlinePanel.jsx:20:105",key:B,x:k-3,y:b-3,width:"6",height:"6",fill:"none",stroke:B?"#ffbf69":"#66d9eb"})}),l&&e.createElement("line",{"data-os-loc":"src/field/StreamlinePanel.jsx:21:10",x1:x(l.gt)[0],y1:x(l.gt)[1],x2:x(l.pred)[0],y2:x(l.pred)[1],stroke:"white"}),l&&[l.gt,l.pred].map((w,B)=>e.createElement(e.Fragment,{key:B},E(w,"white",3))),E(f,"#fc6380",4)),e.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:23:2"},t("红点：种子；方框：各自终点；白线：首次达到分离阈值。青色实线：GT；橙色虚线：预测。","Red: seed; squares: endpoints; white connector: first threshold crossing. Cyan solid: GT; orange dashed: prediction.")),e.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:24:2"},l?t("首次分离","First separation")+" · s="+l.arc.toFixed(4)+" · Δ="+l.gap.toFixed(4)+" · GT XZ ("+j(l.gt)+") · Pred XZ ("+j(l.pred)+")":t("共同积分段内未观测到达到阈值的分离。","No threshold crossing observed on the shared trace.")),[r,o].map((w,B)=>e.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:25:27",key:B},B?t("预测","Prediction"):"GT"," · ",u[w.stop]," · s=",(Math.max(0,w.points.length-1)*m).toFixed(4)," · XZ (",j(w.points.at(-1)??f),")")),e.createElement("small",{"data-os-loc":"src/field/StreamlinePanel.jsx:26:2"},t("同帧定高投影，不是三维流线或跨帧粒子轨迹。双线性插值，归一化方向，中点 RK2；按相同弧长比较。距离使用网格世界坐标单位。","Frozen plane projection, not a 3D streamline or time trajectory. Bilinear interpolation, normalized direction, midpoint RK2; matched arc length in grid world units.")," Δs=",m.toFixed(4)," · Δ≥",g.toFixed(4)," · s≤",y.toFixed(4)," · |vXZ|>1e−8"))}function di({x:n,y:a,dx:t,dy:s}){if(t===0&&s===0)return e.createElement("circle",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:7:27",cx:n,cy:a,r:".5",fill:"none"});const i=ei(n,a,t,s).map((c,r)=>`${r===0||r===2?"M":"L"} ${c.join(" ")}`).join(" ");return e.createElement(e.Fragment,null,e.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:9:11",d:i,className:"velocity-arrow-outline"}),e.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:9:62",d:i}))}function ll({arrows:n,view:a,role:t}){const s=t==="gt"?"gtOffset":"predOffset";return e.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:14:9",className:"velocity-arrow-layer",role:"img","aria-label":t==="gt"?"Velocity GT arrows":"Velocity prediction arrows",viewBox:`0 0 ${a.width} ${a.height}`,preserveAspectRatio:"none"},n.points.map(i=>e.createElement("g",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:15:25",key:i.index,"data-sample":i.index},e.createElement(di,{x:i.x-a.x+.5,y:a.z+a.height-i.z-.5,dx:i[s][0],dy:-i[s][1]}))))}function dl({arrows:n,view:a}){const{language:t}=ie(),s=t==="zh";return n.points.length?n.referenceSpeed?e.createElement(e.Fragment,null,e.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:24:3",className:"velocity-arrow-reference","aria-hidden":"true",viewBox:`0 0 ${a.width} 8`,preserveAspectRatio:"none"},e.createElement(di,{x:a.width*.04,y:4,dx:n.referenceGridLength,dy:0})),e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:27:3"},s?"参考箭头":"Reference arrow"," ",n.referenceSpeed.toPrecision(4)," m/s · ",s?"两图共用线性比例":"Shared linear scale"," · ",n.points.length," ",s?"个配对格点":"paired grid points")):e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:22:35"},s?"空心点表示 XZ 投影为零":"Hollow markers indicate zero XZ projection"):e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:21:34"},s?"当前采样格点无配对箭头":"No paired arrows at the sampled grid points")}function fl({x:n,z:a,view:t}){const s=t.height-a-.5,i=`M ${n+.5} 0 V ${t.height} M 0 ${s} H ${t.width}`;return e.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:34:9",className:"velocity-probe-layer","aria-hidden":"true",viewBox:`0 0 ${t.width} ${t.height}`,preserveAspectRatio:"none"},e.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:35:3",d:i,className:"velocity-probe-outline"}),e.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:35:54",d:i}))}function fi({slice:n,angles:a,mode:t,arrows:s,view:i,zoom:c,frame:r,probe:o,setProbe:l,ranges:f}){const{language:m}=ie(),g=m==="zh",y=n.roiView,u=!c&&y?[y.x/Math.max(1,n.width-1),(y.x+y.width-1)/Math.max(1,n.width-1),y.z/Math.max(1,n.height-1),(y.z+y.height-1)/Math.max(1,n.height-1)]:null,p=o[0]-i.x,d=o[1]-i.z,h=p>=0&&p<i.width&&d>=0&&d<i.height,_=yt(t,m);return e.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:49:9",className:"velocity-triptych"},_.map(({key:C,title:v,label:x,palette:E,role:j})=>{const w=C==="direction"?a.degrees:n[C],B=C==="direction"?a.mask:n.commonMask,k=f[j?"speed":C],b=j?"speed":C==="speedDelta"?"delta":"error",R=M=>M===0?"0":M.toPrecision(5);return e.createElement("figure",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:55:10","data-review-id":"velocity-map-"+C,key:x,"data-review-frame":r,"data-review-slice":x+" Y "+n.sliceIndex},e.createElement("figcaption",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:56:4"},v," · ",g?"帧":"Frame"," ",r," · Y ",n.sliceIndex),e.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:57:4",className:"velocity-map"},e.createElement(mt,{label:x,slice:{width:n.width,height:n.height,values:w},maskSlice:{values:B},range:k,palette:E,plane:"xz",viewport:i,aspect:i.width*n.stepX/(i.height*n.stepZ),region:u,onCrosshair:M=>l([i.x+Math.min(i.width-1,Math.floor(M[0]*i.width)),i.z+Math.min(i.height-1,Math.floor(M[1]*i.height))])}),j&&s&&e.createElement(ll,{arrows:s,view:i,role:j}),h&&e.createElement(fl,{x:p,z:d,view:i})),e.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:67:4",className:"velocity-scale "+b}),e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:68:4"},R(k[0])," → ",C==="speedDelta"?"0 → ":"",R(k[1]),C==="direction"?"°":" m/s",j?g?" · GT / 预测共用色标":" · Shared GT / prediction color scale":""),e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:69:4"},"X → · Z ↑ · ",C==="direction"?g?"棋盘为夹角不可判定":"Checkerboard: direction angle unavailable":g?"棋盘为不在共同有效域":"Checkerboard: outside common valid support"),C==="speedDelta"&&e.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:70:25"},g?"蓝色为预测偏慢，红色为预测偏快":"Blue: prediction slower; red: prediction faster"),j&&s&&e.createElement(dl,{arrows:s,view:i}))}))}const je=(n,a=6)=>Number.isFinite(n)?n.toFixed(a):"N/A",_s=n=>n==null?"N/A":(n*100).toFixed(2)+"%",da=["xmin","xmax","zmin","zmax"],Ga=1e-8;function ws({value:n,angle:a,local:t}){const{language:s}=ie(),i=(r,o)=>s==="zh"?r:o,c=n.counts;return e.createElement("section",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:21:9",className:"velocity-metrics","aria-label":t?"Velocity ROI metrics":"Velocity slice metrics"},e.createElement("h3",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:22:3"},t?i("ROI · 当前 Y 层","ROI · current Y layer"):i("全切片 · 当前 Y 层","Whole slice · current Y layer")),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:23:3"},i("平均 E ","Mean E "),e.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:23:28"},je(n.meanE)),i(" · 最大 E "," · Maximum E "),e.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:23:82"},je(n.maximum?.value)),i(" · 平均 Δs "," · Mean Δs "),e.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:23:144"},je(n.meanSpeedDelta))),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:24:3"},i("最大 E 的 XYZ：","Maximum E at XYZ: "),n.maximum?.world.map(r=>je(r,5)).join(", ")??"N/A"),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:25:3"},i("候选 ","Candidates "),c.candidate,i(" · GT 资格 "," · GT eligible "),c.gtEligible,i(" · 共同有效 "," · Common valid "),c.common,i(" · 非有限排除 "," · Nonfinite excluded "),c.nonfiniteExcluded),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:3"},i("覆盖率：共同 / 候选 ","Coverage: common / candidate "),_s(n.coverageCandidate),i(" · 共同 / GT 资格 "," · Common / GT eligible "),_s(n.coverageGT)),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:27:3"},i("平均三维夹角 ","Mean 3D angle "),je(a.meanDegrees,3),i("° · 夹角有效 ","° · Angle valid "),a.count," / ",c.common,i(" · 低速排除 "," · Low-speed excluded "),a.excludedLowSpeedCount??"N/A"),e.createElement("small",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:28:3"},i("仅 GT 资格 ","GT eligible only "),c.gtOnly,i(" · 仅预测有效 "," · Prediction valid only "),c.predOnly,i(" · 双方掩膜通过 "," · Both masks pass "),c.paired,i("。非有限值另行排除。",". Nonfinite values are excluded separately.")))}function ml({loaded:n,request:a,initial:t}){const{language:s}=ie(),i=(V,K)=>s==="zh"?V:K,{frame:c,lattice:r,alignment:o}=n,[l,f]=S.useState(t?.domain??"collaborator-native"),[m,g]=S.useState(()=>t?.y??_0({...n,hotspotXZ:a.hotspotXZ,domain:"collaborator-native"})),[y,u]=S.useState(t?.roi??a.roiXZ),[p,d]=S.useState(()=>Object.fromEntries(da.map(V=>[V,String((t?.roi??a.roiXZ)[V])]))),[h,_]=S.useState(""),[C,v]=S.useState(()=>t?.probe??Ys(r,a.hotspotXZ)),[x,E]=S.useState(t?.mode??"vectorError"),[j,w]=S.useState(t?.zoom??!1),[B,k]=S.useState(t?.showArrows??!0),[b,R]=S.useState(t?t.tau:Ga),[M,A]=S.useState(b===null?"":String(b)),[P,F]=S.useState(""),N=S.useMemo(()=>m===null?null:Us({frame:c,lattice:r,alignment:o,plane:"xz",sliceIndex:m,domain:l,roiXZ:y}),[c,r,o,m,l,y]),W=S.useMemo(()=>N?Js(N,b):null,[N,b]),T=!!(j&&N?.roiView),H=S.useMemo(()=>N&&(T?N.roiView:{x:0,z:0,width:N.width,height:N.height}),[N,T]),O=S.useMemo(()=>B&&H?Ks(N,H,T?4:16):null,[N,B,H,T]),z=S.useMemo(()=>{let V=0,K=0,ae=0;if(N)for(let Re=0;Re<N.commonMask.length;Re++)N.commonMask[Re]&&(V=Math.max(V,N.speedGT[Re],N.speedPred[Re]),K=Math.max(K,N.vectorError[Re]),ae=Math.max(ae,Math.abs(N.speedDelta[Re])));return{speed:[0,V||1],vectorError:[0,K||1],speedDelta:[-(ae||1),ae||1],direction:[0,180]}},[N]),Z=N?C[0]+N.width*C[1]:null,X=N&&C[0]>=0&&C[0]<N.width&&C[1]>=0&&C[1]<N.height&&N.commonMask[Z],$=S.useMemo(()=>N?{schema:"oceanscope.velocity-diagnostic-data.v1",scope:`${o.frame} native velocity diagnosis; diagnostic export only`,frame:o.frame,source:o.source,resource:o.resource,protocolSha256:o.protocolSha256,lattice:r,unitClaim:o.unitClaim,unitEvidence:o.unitEvidence,vectorBasis:o.vectorBasis,domain:l,domainDefinition:l==="collaborator-native"?o.domainDefinition:{id:l,rule:"Both velocity-valid masks > 0 AND six finite components; no tank or SDF depth filter"},yIndex:m,yWorld:r.origin[1]+m*r.axisSteps[1][1],surfaceRequest:a,roiXZ:y,probe:{index:Z,xyz:N.worldAt(Z),common:!!X,speedGT:X?N.speedGT[Z]:null,speedPred:X?N.speedPred[Z]:null,E:X?N.vectorError[Z]:null,speedDelta:X?N.speedDelta[Z]:null,vectorGT:X?Array.from(N.vectorsGT.subarray(3*Z,3*Z+3)):null,vectorPred:X?Array.from(N.vectorsPred.subarray(3*Z,3*Z+3)):null,angleDegrees:X&&W.mask[Z]?W.degrees[Z]:null},whole:N.whole,local:N.local,direction:{tau:b,unit:"m/s (source convention)",thresholdSource:b===null?"disabled":b===Ga?"legacy preview numerical epsilon":"user diagnostic input",whole:W.whole,local:W.local},display:{mode:x,view:H,zoomed:T,ranges:z,arrows:O}}:null,[N,o,r,l,m,a,y,Z,X,W,b,x,H,T,z,O]),[D,J]=S.useState(null),[Q,be]=S.useState(null),[le,ye]=S.useState(null);S.useEffect(()=>be(null),[s]);const we=Q?.data===$&&Q.language===s?Q.files:null;S.useEffect(()=>()=>{for(const V of Object.values(we??{}))URL.revokeObjectURL(V.href)},[we]),S.useEffect(()=>{if(!$){J(null);return}const V=URL.createObjectURL(new Blob([JSON.stringify($,null,2)+`
`],{type:"application/json"}));return J({data:$,url:V}),()=>URL.revokeObjectURL(V)},[$]);function $e(){try{const V=S0($,o,"1c43866289b6bf2cb6dfffa6502270b21eb27d92"),K=R0(V,N,W,O,s).toDataURL("image/png"),ae=ht({stem:`oceanscope-velocity-${o.frame}-y${m}`,record:V,csv:j0(V,N,W),previewUrl:K});be({data:$,files:ae,language:s}),ye(null)}catch(V){ye(V)}}function Me(){const V=Object.fromEntries(da.map(K=>[K,Number(p[K])]));if(da.some(K=>!p[K].trim()||!Number.isFinite(V[K]))||V.xmin>V.xmax||V.zmin>V.zmax){_(i("请填写完整有限数字，最小值不能大于最大值。原选区未改变。","Enter finite values for every bound, with minimum ≤ maximum. The ROI is unchanged."));return}u(V),_("")}function Be(V){V.preventDefault();const K=M.trim()===""?null:Number(M);if(K!==null&&(!Number.isFinite(K)||K<0)){F(i("请输入非负有限数，或留空以停用夹角。","Enter a finite nonnegative number, or leave blank to disable angles."));return}R(K),F("")}return e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:102:3"},i("来自水面热点 X ","From surface hotspot X "),je(a.hotspotXZ.x,5),"，Z ",je(a.hotspotXZ.z,5),i("；保留 XZ 选区。初始 Y 取该列默认域内最上方有效格层，之后由你手动选择，不随水面起伏。","; XZ ROI retained. Initial Y is the highest valid layer in this column within the default domain. Subsequent Y selection is manual and does not follow the surface.")),e.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:103:3",className:"velocity-controls"},e.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:103:38"},i("有效域 ","Valid domain "),e.createElement("select",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:103:72","data-os-action":"","aria-label":"Velocity domain",value:l,onChange:V=>f(V.target.value)},e.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:103:164",value:"collaborator-native"},i("合作者原生域 · 已核对","Collaborator native domain · verified")),e.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:103:268",value:"common-finite-exploration"},i("共同有限域 · 探索","Common finite domain · exploration")))),e.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:103:390"},i("XZ 定高切片 · Y 索引 ","Fixed-height XZ slice · Y index "),e.createElement("input",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:103:454","data-os-action":"","aria-label":"Velocity Y index",type:"number",min:"0",max:r.dimensions[1]-1,step:"1",value:m??"",onChange:V=>{const K=V.target.value.trim(),ae=Number(K);K&&Number.isInteger(ae)&&ae>=0&&ae<r.dimensions[1]&&g(ae)}})),e.createElement("output",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:103:714","aria-label":"Velocity Y world"},"Y = ",m===null?i("未选择","Not selected"):je(r.origin[1]+m*r.axisSteps[1][1],8))),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:104:3",className:"velocity-domain"},l==="collaborator-native"?i("合作者原生域：X [11,212)、Z [11,105)，GT vel_valid > 0、GT SDF < −0.10（float32）、预测 vel_valid > 0，再排除非有限速度。","Collaborator native domain: X [11,212), Z [11,105), GT vel_valid > 0, GT SDF < −0.10 (float32), prediction vel_valid > 0; nonfinite velocities excluded."):i("探索域：双方速度有效且六分量有限；不应用水槽裁剪或 GT 深水阈值，不作协议评分。","Exploration domain: both velocity masks valid and all six components finite; no tank crop or GT deep-water threshold. Not protocol scoring."),i(" 当前显示为一层，非整帧体积评分。"," Showing one layer, not a full-frame volume score.")),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:105:3"},i("速度单位沿用来源声明 m/s；坐标沿用来源声明 m。物理尺度、时间尺度与向量基底尚未独立标定。E = ‖预测向量 − GT 向量‖；Δs = 预测流速 − GT 流速。","Velocity m/s and coordinates m follow source declarations. Physical scale, time scale and vector basis have not been independently calibrated. E = ‖prediction vector − GT vector‖; Δs = prediction speed − GT speed.")),N?e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:107:4",className:"velocity-controls"},e.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:108:5"},i("第三图 ","Third map "),e.createElement("select",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:108:36","data-os-action":"","aria-label":"Velocity comparison map",value:x,onChange:V=>E(V.target.value)},e.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:109:6",value:"vectorError"},i("速度向量误差 E","Velocity vector error E")),e.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:109:84",value:"speedDelta"},i("流速大小差 Δs","Speed difference Δs")),e.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:109:157",value:"direction"},i("三维方向夹角","3D direction angle")))),e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:111:5","data-os-action":"",type:"button","aria-pressed":B,onClick:()=>k(V=>!V)},i("配对箭头","Paired arrows")),e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:112:5","data-os-action":"",type:"button","aria-pressed":T,disabled:!N.roiView,onClick:()=>w(!T)},T?i("返回全切片","Back to whole slice"):i("放大 ROI","Zoom to ROI"))),e.createElement("form",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:114:4",className:"velocity-controls",onSubmit:Be},e.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:115:5"},i("方向低速阈值（m/s）","Direction low-speed threshold (m/s)"),e.createElement("input",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:115:68","data-os-action":"","aria-label":"Velocity direction threshold",inputMode:"decimal",value:M,onChange:V=>A(V.target.value)})),e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:116:5",type:"submit"},i("应用方向阈值","Apply direction threshold")),e.createElement("output",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:117:5","aria-label":"Velocity applied threshold"},b===null?i("夹角停用","Angles disabled"):`${i("当前 τ = ","Current τ = ")}${b} m/s · ${b===Ga?i("沿用旧预览数值阈值","Legacy preview numerical threshold"):i("自定诊断阈值","Custom diagnostic threshold")}`)),P&&e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:119:15",role:"alert"},P),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:120:4"},i("双方完整流速均大于 τ 才计算三维夹角。阈值用于诊断，等待合作者确认，留空可停用夹角。箭头仅显示 XZ 投影，空心点表示投影为零。","The full speed on both sides must exceed τ to calculate a 3D angle. This diagnostic threshold awaits collaborator confirmation; leave blank to disable angles. Arrows show only XZ projections; hollow markers indicate zero projection.")),e.createElement(fi,{slice:N,angles:W,mode:x,arrows:O,view:H,zoom:T,frame:o.frame,probe:C,setProbe:v,ranges:z}),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:122:4"},i("箭头显示 XZ 投影，夹角使用 XYZ 三个分量。当前切片位于固定 Y 层。","Arrows show the XZ projection. The angle uses all three components on this fixed Y slice.")),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:123:4","aria-label":"Velocity probe"},i("同位置探针 XYZ (","Same-position probe XYZ ("),$.probe.xyz.map(V=>je(V,5)).join(", "),") · ",X?i("共同有效","Common valid"):i("不在共同有效域","Outside common valid domain"),i(" · GT 流速 "," · GT speed "),je($.probe.speedGT),i(" · 预测流速 "," · Prediction speed "),je($.probe.speedPred)," · E ",je($.probe.E)," · Δs ",je($.probe.speedDelta)),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:124:4","aria-label":"Velocity probe direction"},i("三维夹角 ","3D angle "),$.probe.angleDegrees===null?"N/A":je($.probe.angleDegrees,4)+"°",X&&$.probe.angleDegrees===null&&(b===null?i("（夹角已停用）"," (angles disabled)"):i("（至少一侧低于或等于阈值）"," (at least one speed is at or below the threshold)"))," · GT XYZ (",$.probe.vectorGT?.map(V=>je(V)).join(", ")??"N/A",i(") · 预测 XYZ (",") · Prediction XYZ ("),$.probe.vectorPred?.map(V=>je(V)).join(", ")??"N/A",i(") · Y 为切片法向",") · Y is normal to the slice")),e.createElement("form",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:4",onSubmit:V=>{V.preventDefault(),Me()}},e.createElement("fieldset",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:54",className:"velocity-controls"},e.createElement("legend",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:94"},i("速度 ROI · 世界坐标 XZ（不改变 Y）","Velocity ROI · world XZ coordinates (Y unchanged)")),da.map(V=>e.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:208",key:V},V,e.createElement("input",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:226","data-os-action":"","aria-label":"Velocity ROI "+V,type:"text",inputMode:"decimal",value:p[V],onChange:K=>d(ae=>({...ae,[V]:K.target.value}))}))),e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:379",type:"submit"},i("应用速度选区","Apply velocity ROI")))),h&&e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:473",role:"alert"},h),Number(o.frame)===1049&&l==="collaborator-native"&&e.createElement(ol,{slice:N,probe:C,t:i}),e.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:130:4",className:"velocity-statistics"},e.createElement(ws,{value:N.whole,angle:W.whole}),e.createElement(ws,{value:N.local,angle:W.local,local:!0})),e.createElement("section",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:131:4",className:"velocity-report","aria-label":"Velocity report"},e.createElement("h3",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:132:5"},i("可恢复速度报告","Restorable velocity report")),e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:133:5"},i("用当前切片、选区和显示设置生成一份报告。配套 JSON 可从“报告与恢复”重新打开。","Generate a report from the current slice, ROI and display settings. Reopen its JSON in Reports & restore.")),e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:134:5","data-os-action":"",type:"button",onClick:$e},i("生成当前速度报告","Generate current velocity report")),e.createElement(Je,{error:le,zh:s==="zh"}),we&&e.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:136:19",className:"velocity-report-downloads"},Object.entries(we).map(([V,K])=>e.createElement("a",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:137:54",key:V,href:K.href,download:K.name},V==="json"?i("下载可恢复速度 JSON","Download restorable velocity JSON"):i("下载速度报告 ","Download velocity report ")+V.toUpperCase()))),Q&&!we&&e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:139:28",role:"status"},i("视图已更新。请重新生成速度报告。","The view or language changed. Generate the velocity report again."))),D?.data===$&&e.createElement("a",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:141:28",download:`oceanscope-velocity-${o.frame}-y${m}-data.json`,href:D.url},i("导出速度诊断数据 JSON（不用于恢复）","Export velocity diagnostic data JSON (not restorable)"))):e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:106:11",role:"status"},i("热点列内没有共同有效点。请选择明确的 Y 层；不会移到其他 XZ。","No common valid point in the hotspot column. Select an explicit Y layer; XZ will not move.")))}function bl({frameNumber:n,request:a,restored:t}){const{language:s}=ie(),i=(g,y)=>s==="zh"?g:y,[c,r]=S.useState(null),[o,l]=S.useState(0),f=a?.frame===n&&!!ja(n);S.useEffect(()=>{if(!f||t){r(null);return}const g=new AbortController;let y=!0;return r(null),qs(n,{signal:g.signal}).then(u=>{y&&r({frameNumber:n,request:a,loaded:u})}).catch(u=>{y&&r({frameNumber:n,request:a,error:u})}),()=>{y=!1,g.abort()}},[n,a,f,o,t]);const m=t??(c?.frameNumber===n&&c?.request===a?c:null);return e.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:153:9",className:"velocity-diagnosis"},e.createElement("h2",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:153:45"},i("速度与方向诊断 · 帧 ","Velocity and direction diagnosis · frame "),n),f?m?.error?e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:153:356",role:"alert"},i("速度资源加载失败：","Velocity resource failed to load: "),m.error.message," ",e.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:153:449","data-os-action":"",onClick:()=>l(g=>g+1)},i("重试速度资源","Retry velocity resource"))):m?.loaded?e.createElement(ml,{key:o,loaded:m.loaded,request:a,initial:t?.view}):e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:153:651",role:"status"},i("正在读取并校验 ","Reading and verifying "),n,i(" 原始值诊断资源…"," raw-value diagnostic resources…")):e.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:153:141",role:"status"},i("当前帧 ","Frame "),n,i(" 暂无对应的速度报告视图。请选择已核验帧，并从该帧的水面热点或报告进入。"," has no velocity report view. Choose a verified frame and enter from its surface hotspot or report.")))}const mi="oceanscope.velocity-comparison.v1",pl=[1001,1049,1096],ul="best-1027",hl="raw-reference-96-e81b8955734e",xt="collaborator-native",vt=1e-8,ct=28,gl=[166,186,80,100],yl=4,xl={mode:"direction",probe:[176,90],arrows:!0};function bi(){const n=pl.map(ja),{lattice:a,protocolSha256:t,domainDefinition:s}=n[0],[i,c,r,o]=gl,l=u=>a.origin[0]+u*a.axisSteps[0][0],f=u=>a.origin[2]+u*a.axisSteps[2][2],m={xmin:l(i),xmax:l(c),zmin:f(r),zmax:f(o)},g={axis:"xz",yIndex:ct,yWorld:a.origin[1]+ct*a.axisSteps[1][1]},y=n.map(u=>({frame:u.frame,gtSha256:u.source.gt.sha256,predSha256:u.source.prediction.sha256,packedSha256:u.resource.packedSha256,decodedSha256:u.resource.decodedSha256}));return{alignments:n,roi:m,plane:g,domain:xt,tau:vt,domainDefinition:s,protocolSha256:t,sources:y,lattice:a}}async function vl(n,a=qs){const{alignments:t,roi:s,lattice:i,domainDefinition:c}=bi(),r=[];for(const o of t){n.throwIfAborted();const l=await a(o.frame,{signal:n});if(n.throwIfAborted(),l.alignment!==o||JSON.stringify(l.lattice)!==JSON.stringify(i)||JSON.stringify(o.domainDefinition)!==JSON.stringify(c))throw Error("Velocity comparison requires the verified common lattice and protocol");const f=Us({...l,plane:"xz",sliceIndex:ct,domain:xt,roiXZ:s});r.push({frame:o.frame,slice:f,angles:Js(f,vt)})}return El(r)}function El(n){const a=n[0].slice,t=new Uint8Array(a.commonMask.length),s=new Uint8Array(t.length),i=[];let c=0,r=0,o=0,l=0,f=0,m=0;for(let u=0;u<t.length;u++)if(!(!a.roiMask[u]||!a.candidateMask[u])&&(i.push(u),!!n.every(({slice:p})=>p.commonMask[u]))){t[u]=1,c++,n.every(({angles:p})=>p.mask[u])&&(s[u]=1,r++);for(const{slice:p}of n){o=Math.max(o,p.speedGT[u],p.speedPred[u]),l=Math.max(l,p.vectorError[u]),f=Math.max(f,Math.abs(p.speedDelta[u]));for(const d of[p.vectorsGT,p.vectorsPred])m=Math.max(m,Math.hypot(d[u*3],d[u*3+2]))}}const g=a.roiView,y=n.map(({frame:u,slice:p,angles:d})=>{let h=0,_=0,C=0;for(const x of i)t[x]&&(h+=p.vectorError[x],_+=p.speedDelta[x]),s[x]&&(C+=d.degrees[x]);const v={...p,commonMask:t};return{frame:u,nativeMask:p.commonMask,slice:v,angles:{...d,mask:s},arrows:Ks(v,g,yl,m),summary:{frame:u,nativeRoi:p.local.counts.common,meanE:c?h/c:null,meanDelta:c?_/c:null,meanAngle:r?C/r:null}}});return{view:g,rows:y,roiIndices:i,paired:c,anglePaired:r,ranges:{speed:[0,o||1],vectorError:[0,l||1],speedDelta:[-(f||1),f||1],direction:[0,180]}}}function _l(n,a,t){const{roi:s,plane:i,protocolSha256:c,sources:r,domainDefinition:o}=bi();return{schema:mi,createdAt:new Date().toISOString(),source:{caseId:ul,runId:hl,protocolSha256:c,codeRevision:t,frames:r},scope:{preset:"1049-a-fixed-roi",plane:i,roi:s,domain:xt,domainDefinition:o,tau:vt},view:a,result:{roiCandidates:n.roiIndices.length,shared:n.paired,sharedAngles:n.anglePaired,ranges:n.ranges,arrowReferenceSpeed:a.arrows?n.rows[0].arrows.referenceSpeed:null,arrowIndices:a.arrows?n.rows[0].arrows.points.map(l=>l.index):[],frames:n.rows.map(l=>l.summary)}}}function wl(n,a){const t=["frame,native_index,x,y,z,frame_valid,shared_valid,shared_angle_valid,probe,arrow,gt_speed,pred_speed,vector_error,speed_delta,direction_degrees"];for(const{frame:s,nativeMask:i,slice:c,angles:r,arrows:o}of n.rows){const l=new Set(a.arrows?o.points.map(m=>m.index):[]),f=a.probe[0]+c.width*a.probe[1];for(const m of n.roiIndices){const g=c.commonMask[m],y=r.mask[m];t.push([s,m,...c.worldAt(m),i[m],g,y,+(m===f),Number(l.has(m)),...g?[c.speedGT[m],c.speedPred[m],c.vectorError[m],c.speedDelta[m]]:["","","",""],y?r.degrees[m]:""].join(","))}}return t.join(`
`)+`
`}const sn=(n,a=5)=>Number.isFinite(n)?n.toFixed(a):"N/A";function Sl({data:n,initialView:a}){const{language:t}=ie(),s=(E,j)=>t==="zh"?E:j,[i,c]=S.useState(a),[r,o]=S.useState(null),[l,f]=S.useState(null);S.useEffect(()=>o(null),[t]);const m=r?.view===i&&r.language===t?r.files:null;S.useEffect(()=>()=>{for(const E of Object.values(m??{}))URL.revokeObjectURL(E.href)},[m]);const{paired:g,anglePaired:y,roiIndices:u,rows:p,ranges:d}=n,h=i.arrows?p[0].arrows.points.length:0,_=i.probe[0]+i.probe[1]*p[0].slice.width,C=p[0].slice.worldAt(_);function v(E){c(j=>({...j,...E})),f(null)}function x(){try{const E=_l(n,i,"1c43866289b6bf2cb6dfffa6502270b21eb27d92"),j=P0(E,n,t).toDataURL("image/png"),w=ht({stem:"oceanscope-best-1027-velocity-comparison",record:E,previewUrl:j,csv:wl(n,i)});o({view:i,files:w,language:t}),f(null)}catch(E){f(E)}}return e.createElement(e.Fragment,null,e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:43:3"},s("Best_1027 · XZ 固定选区 · Y=28（约 −0.10 m）· 合作者原生有效域 · 方向阈值 1e−8 m/s","Best_1027 · fixed XZ ROI · Y=28 (about −0.10 m) · collaborator native domain · direction threshold 1e−8 m/s")),e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:44:3"},s("1049 A 的 ROI 为 X [−1.35, −0.35]、Z [1.45, 2.45] m。三帧共同有效 ","1049 A ROI: X [−1.35, −0.35], Z [1.45, 2.45] m. Common valid across three frames: "),g," / ",u.length,s("，其中三帧均可判定夹角 ","; angles valid in all three: "),y,s("。图和均值使用对应的共同格点，棋盘表示该格点未纳入。",". Maps and means use the corresponding common grid points; checkerboards mark excluded points.")),e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:45:3"},s("流速共用 0–","Shared speed range 0–"),sn(d.speed[1]),s(" m/s。配对箭头共用比例和采样位置"," m/s. Paired arrows share a scale and sampling positions"),i.arrows&&s("，每帧 ",", with ")+h+s(" 个点"," points per frame"),s("。速度和坐标单位沿用来源声明。",". Velocity and coordinate units follow source declarations.")),e.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:46:3",className:"velocity-controls"},e.createElement("label",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:47:4"},s("第三图 ","Third map "),e.createElement("select",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:47:35","data-os-action":"","aria-label":"Three-frame comparison map",value:i.mode,onChange:E=>v({mode:E.target.value})},e.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:48:5",value:"direction"},s("三维方向夹角","3D direction angle")),e.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:49:5",value:"vectorError"},s("速度向量误差 E","Velocity vector error E")),e.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:50:5",value:"speedDelta"},s("流速大小差 Δs","Speed difference Δs")))),e.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:52:4","data-os-action":"",type:"button","aria-pressed":i.arrows,onClick:()=>v({arrows:!i.arrows})},s("三帧配对箭头","Three-frame paired arrows"))),e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:54:3","aria-label":"Three-frame probe"},s("同步探针 XYZ (","Synchronized probe XYZ ("),C.map(E=>sn(E)).join(", "),") · ",p[0].slice.commonMask[_]?s("三帧共同有效","Common valid in all three frames"):s("不在三帧共同有效格点内","Outside the three-frame common grid points")),e.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:55:3",className:"velocity-comparison-table"},e.createElement("table",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:55:46"},e.createElement("caption",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:56:4"},s("固定 ROI · 各帧覆盖与共同样本指标","Fixed ROI · frame coverage and common-sample metrics")),e.createElement("thead",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:4"},e.createElement("tr",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:11"},e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:15"},s("帧","Frame")),e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:40"},s("本帧有效 / 候选","Frame valid / candidate")),e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:91"},s("共同格点平均 E（m/s）","Common-point mean E (m/s)")),e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:148"},s("平均 Δs（m/s）","Mean Δs (m/s)")),e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:190"},s("平均夹角","Mean angle")))),e.createElement("tbody",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:4"},p.map(({frame:E,summary:j})=>e.createElement("tr",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:43",key:E},e.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:59",scope:"row"},E),e.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:87"},j.nativeRoi," / ",u.length),e.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:137"},sn(j.meanE)),e.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:169"},sn(j.meanDelta)),e.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:205"},sn(j.meanAngle,2),"°")))))),p.map(({frame:E,slice:j,angles:w,arrows:B})=>e.createElement("section",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:60:49",key:E,className:"velocity-comparison-row","aria-label":`Velocity comparison frame ${E}`},e.createElement("h3",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:61:4"},s("帧 ","Frame "),E),e.createElement(fi,{frame:E,slice:j,angles:w,ranges:d,mode:i.mode,arrows:i.arrows?B:null,view:n.view,zoom:!0,probe:i.probe,setProbe:k=>v({probe:k})}),j.commonMask[_]?e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:64:31"},s("探针 E ","Probe E "),sn(j.vectorError[_])," m/s · Δs ",sn(j.speedDelta[_]),s(" m/s · 夹角 "," m/s · Angle "),w.mask[_]?sn(w.degrees[_],2)+"°":"N/A"):null)),e.createElement("section",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:66:3",className:"velocity-report","aria-label":"Three-frame velocity report"},e.createElement("h3",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:67:4"},s("可恢复三帧报告","Restorable three-frame report")),e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:68:4"},s("CSV 保留三帧各自的 ROI 候选格点与有效标记。JSON 可在“报告与恢复”重新打开，指标会从核验后的资源重算。","CSV retains each frame’s ROI candidate grid points and validity flags. Reopen JSON in Reports & restore; metrics are recomputed from verified resources.")),e.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:69:4","data-os-action":"",type:"button",onClick:x},s("生成三帧速度报告","Generate three-frame velocity report")),e.createElement(Je,{error:l,zh:t==="zh"}),r&&!m&&e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:71:25",role:"status"},s("视图或语言已更新，请重新生成报告。","The view or language changed. Generate the report again.")),m&&e.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:72:14",className:"velocity-report-downloads"},Object.entries(m).map(([E,j])=>e.createElement("a",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:73:5",key:E,href:j.href,download:j.name},s("下载三帧报告 ","Download three-frame report "),E.toUpperCase())))))}function jl({restored:n}){const{language:a}=ie(),t=(l,f)=>a==="zh"?l:f,[s,i]=S.useState(null),[c,r]=S.useState(0);S.useEffect(()=>{if(n)return;const l=new AbortController;return i(null),vl(l.signal).then(f=>{l.signal.aborted||i({data:f})}).catch(f=>{l.signal.aborted||i({error:f})}),()=>l.abort()},[n,c]);const o=n??s;return e.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:95:9",className:"velocity-diagnosis"},e.createElement("h2",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:96:3"},t("三帧速度对照 · 1001 / 1049 / 1096","Three-frame velocity comparison · 1001 / 1049 / 1096")),o?.data?e.createElement(Sl,{data:o.data,initialView:n?.view??xl}):o?.error?e.createElement(e.Fragment,null,e.createElement(Je,{error:o.error,zh:a==="zh"}),e.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:98:84","data-os-action":"",type:"button",onClick:()=>r(l=>l+1)},t("重试三帧资源","Retry three-frame resources"))):e.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:99:6",role:"status"},t("正在核验三帧速度资源并计算共同有效格点…","Verifying three-frame velocity resources and computing common valid grid points…")))}function Bl({enabled:n,open:a,active:t,forceModal:s=!1,label:i,closeLabel:c,onClose:r,returnFocusRef:o,children:l}){const[f,m]=S.useState(()=>n&&!!globalThis.matchMedia?.("(max-width:900px)").matches),g=n&&(f||s),y=S.useRef(null),u=S.useRef(null),p=S.useRef(a&&t),d=S.useRef(!1);S.useEffect(()=>{if(!n)return;const v=globalThis.matchMedia?.("(max-width:900px)");if(!v)return;const x=()=>m(v.matches);return x(),v.addEventListener("change",x),()=>v.removeEventListener("change",x)},[n]),S.useEffect(()=>{if(!n)return;const v=y.current;return g&&(a&&t&&!v.open?v.showModal():v.open&&(!a||!t)&&v.close()),a&&t&&(g||!p.current)&&u.current?.focus({preventScroll:!0}),!a&&d.current&&(d.current=!1,o.current?.focus({preventScroll:!0})),p.current=a&&t,()=>{g&&v.open&&v.close()}},[n,g,a,t]);function h(){d.current=!0,r()}function _(v){if(n){if(v.key==="Escape"){v.preventDefault(),v.stopPropagation(),h();return}if(g&&v.key==="Tab"){const x=[...y.current.querySelectorAll("button,input,select,textarea,a[href],summary,[tabindex]")].filter(w=>!w.disabled&&w.tabIndex>=0&&w.getClientRects().length),E=x[0],j=x.at(-1);v.shiftKey&&document.activeElement===E?(v.preventDefault(),j?.focus()):!v.shiftKey&&document.activeElement===j&&(v.preventDefault(),E?.focus())}}}const C=g?"dialog":"aside";return e.createElement(C,{ref:y,id:"analysis-settings",className:"field-sidebar","aria-label":i,onCancel:v=>{v.preventDefault(),h()},onKeyDown:_,onClick:v=>{if(!g||v.target!==v.currentTarget)return;const x=v.currentTarget.getBoundingClientRect();(v.clientX<x.left||v.clientX>x.right||v.clientY>x.bottom)&&h()}},n&&e.createElement("div",{"data-os-loc":"src/field/WorkbenchSettings.jsx:42:13",className:"demo-settings-header"},e.createElement("button",{"data-os-loc":"src/field/WorkbenchSettings.jsx:42:51","data-os-action":"",ref:u,className:"demo-close-settings",onClick:h},c)),l)}function fa(n,a,t="application/json"){const s=URL.createObjectURL(new Blob([a],{type:t})),i=document.createElement("a");i.href=s,i.download=n,i.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function Cl(n){if(!n?.dimensions||!n.axisSteps)return null;const a=[];for(let t=0;t<8;t++)a.push(n.origin.map((s,i)=>s+n.dimensions.reduce((c,r,o)=>c+(t>>o&1)*(r-1)*n.axisSteps[o][i],0)));return{min:[0,1,2].map(t=>Math.min(...a.map(s=>s[t]))),max:[0,1,2].map(t=>Math.max(...a.map(s=>s[t])))}}function Al({focusedLayout:n=!1,workspace:a="3d",onWorkspace:t=()=>{},evaluation:s=null,evaluationError:i="",unifiedRestore:c=!1,onCancelImport:r,onRetryEvaluation:o,comparison:l,processing:f,activeGroup:m,onActiveGroup:g,setup:y,expectedFrames:u,metricsOverride:p,sourceCase:d,viewApiRef:h,initialView:_,onViewReady:C,onViewRestored:v,restoring:x=!1,frameSplit:E=l.frameSplit,readOnly:j=!1,active:w=!0}){const{tr:B,language:k}=ie(),b=k==="zh",R=n,M=R?"3d":"time",[A,P]=S.useState(null),F=S.useRef(null);S.useRef(0);const N=!!A&&a==="slices",W=!!A?.comparison&&a==="slices";d?.id,s?.runId,S.useEffect(()=>{if(!R||a!=="3d")return;const I=()=>{window.location.hash==="#analysis-summary"&&document.getElementById("analysis-summary")?.scrollIntoView({block:"start"})};return I(),window.addEventListener("hashchange",I),()=>window.removeEventListener("hashchange",I)},[R,a,s]);const T=_?.settings,H=S.useRef(null),O=S.useRef(null),z=S.useRef(!1),[Z,X]=S.useState(""),$=n&&l.id==="best-1027",D=!!d&&l.id!=="best-1027",{presenting:J}=Zi(),[Q,be]=S.useState(()=>({presenting:J,open:!J&&!globalThis.matchMedia?.("(max-width:900px)").matches})),le=Q.presenting===J&&Q.open;function ye(I){be(U=>({presenting:J,open:typeof I=="function"?I(U.presenting===J&&U.open):I}))}S.useEffect(()=>{n&&O.current?.pause()},[a]);const we=S.useRef(null),[$e,Me]=S.useState(!0),Be=S.useRef(null),[V,K]=S.useState({subset:"all",metric:"height",grid:"coarse"}),[ae,Re]=S.useState(null),[Ve,Ke]=S.useState(null),[on,Hn]=S.useState(0),[Cn,un]=S.useState(T?.shading||"original");S.useEffect(()=>{J&&O.current?.pause()},[J]);const[qn,Ba]=S.useState(null),[Ln,An]=S.useState(T?.errorScale||{locked:!1,limit:1}),hn=S.useRef(null),G=kr(l);function L(){hn.current&&(hn.current.open=!0,hn.current.scrollIntoView?.({block:"start"}))}const ee=JSON.stringify(f?.lattice??null),me=S.useMemo(()=>JSON.parse(ee),[ee]),xe=S.useMemo(()=>f?.frames?.map(I=>I.frame)||[],[f?.frames]),Se=S.useMemo(()=>zn(d),[d]),ve=S.useMemo(()=>m==="sdf"&&Se.length?Se:xe,[m,Se,xe]),qe=s?.frameIds??ve,[Y,Qe]=S.useState(T?.frame??($?1049:null)),[ne,gn]=S.useState(null),[kn,Yn]=S.useState(null),[ln,Un]=S.useState(""),[ze,Mn]=S.useState(!1),[Xe,Jn]=S.useState(()=>{if(T)return T.mode;const I=j?"split":Ua("field-view")?.mode;return["split","overlay","wire-overlay","gt","prediction"].includes(I)?I:"split"}),[Le,Et]=S.useState(T?.quality??"balanced"),[dn,_t]=S.useState(T?.component??"magnitude"),[wt,Vl]=S.useState(.65),[yn,St]=S.useState(T?.showContext??!1),[xn,jt]=S.useState(T?.vectorDensity??2e3),[vn,Bt]=S.useState(T?.arrowScale??1),[te,Ca]=S.useState(T?.plane??($?"yz":"xz")),[pi,Rn]=S.useState(T?.sliceIndex??null),[Aa,Ct]=S.useState(T?.crosshair||[.5,.5]),[En,At]=S.useState(!!T?.sourceRange),[en,kt]=S.useState(T?.sourceRange||[0,1]),[Oe,Mt]=S.useState(T?.rotationAxis||"y"),[Pe,Rt]=S.useState(T?.angle??30),[Ie,ka]=S.useState(T?.sectionPercent??50),[Pn,Pt]=S.useState(T?.showPlane??!0),[It,ui]=S.useState(null),[De,Ma]=S.useState(T?{showGt:T.showGt,showPrediction:T.showPrediction,gtOpacity:T.gtOpacity,predictionOpacity:T.predictionOpacity}:{showGt:!0,showPrediction:!0,gtOpacity:.65,predictionOpacity:.8}),[hi,Nt]=S.useState(""),fn=S.useRef(null),_n=S.useRef(0),Kn=S.useRef(ve);Kn.current=ve;const re=!!l?.settings?.previewOnly,mn=m==="sdf"&&Se.includes(Y)&&!xe.includes(Y);S.useEffect(()=>(fn.current={frames:Nc({fetchFrame:(I,U,q)=>$c(I,U,{...q,withIdentity:!0}),decode:Fs}),geometry:Fc(),surface:ki()},()=>{_n.current++,fn.current?.frames.dispose(),fn.current?.geometry.dispose(),fn.current?.surface.dispose(),fn.current=null}),[l.id]),S.useEffect(()=>{gn(null),Yn(null),Qe(T?.frame??($?1049:null)),Me(!0),Un("")},[l.id]),S.useEffect(()=>{if(qe.length&&!qe.includes(Y)){const I=j?null:Ua("field-view");Qe(I?.comparisonId===l.id&&ve.includes(I.frame)?I.frame:ve[0])}},[ve,qe,Y,l.id,j]),S.useEffect(()=>{!j&&Y!=null&&Is("field-view",{mode:Xe,comparisonId:l.id,frame:Y})},[Xe,Y,l.id,j]),S.useEffect(()=>{let I=!0;if(j||p){Yn(p??null);return}return Vc(l.id).then(U=>{I&&Yn(U)}).catch(U=>{I&&(Yn(null),Un(U.message))}),()=>{I=!1}},[l.id,ve.length,l.status,p,j]);const Qn=ne?Dn(ne.snapshot.data,m):null,ea=ne?.snapshot.data.fields.find(I=>I.id===(Qn?.groundTruth?.ids[0]||Qn?.prediction?.ids[0]))?.shape||me?.dimensions,Ze=ea?ea[te==="yz"?0:te==="xz"?1:2]-1:0,Ce=Math.max(0,Math.min(pi??Math.floor(Ze/2),Ze)),Ft=S.useMemo(()=>({group:m,mode:re?"gt":Xe,quality:Le,component:dn,opacity:wt,showContext:yn,vectorDensity:xn,arrowScale:vn,plane:te,sliceIndex:Ce,angle:Pe,sectionPercent:Ie,rotationAxis:Oe,showPlane:Pn,sourceRange:En&&en[1]>en[0]?en:null,unit:Qn?.unit}),[m,Xe,re,Le,dn,wt,yn,xn,vn,te,Ce,Pe,Ie,Oe,Pn,En,en,Qn?.unit]),nn=S.useMemo(()=>({group:m,quality:Le,component:dn,showContext:yn,vectorDensity:xn,arrowScale:vn,plane:te,sliceIndex:Ce,angle:Pe,sectionPercent:Ie,rotationAxis:Oe,previewOnly:re}),[m,Le,dn,yn,xn,vn,te,Ce,Pe,Ie,Oe,re]),an=JSON.stringify([l.id,Y,nn,on]);S.useEffect(()=>{const I=fn.current;if(!I||Y==null)return;const U=++_n.current;let q=!0;if(Un(""),!$e||!ve.includes(Y)){gn(null),Mn(!1);return}return Mn(!0),Ke({key:an,status:"loading"}),(async()=>{try{if(mn){const Te=await I.surface.select(d,Y,Le);if(!Te||!q||U!==_n.current)return;const bn=Mi(Te.geometry,me,nn),ta={comparisonId:l.id,frameNumber:Y,data:{fields:[],groups:{}},verifiedResource:Te.verifiedResource};gn({snapshot:ta,geometry:bn,settings:nn}),Ke({key:an,status:"ready"}),Mn(!1),Nt(`${(I.surface.stats().bytes/1048576).toFixed(0)} MiB surface cache`);return}const de=await I.frames.select(l.id,Y);if(!de||!q||U!==_n.current)return;let ge;try{ge=await I.geometry.request(de,me,nn)}catch(Te){ge={failed:!0,layers:[],warnings:[`3D preparation unavailable: ${Te.message}. Use slices below.`],byteLength:0}}if(!ge||!q||U!==_n.current)return;gn({snapshot:de,geometry:ge,settings:nn}),Ke({key:an,status:"ready"}),Mn(!1);const wn=I.frames.stats();if(Nt(wn.oversize?"Active frame exceeds preview cache budget":`${(wn.bytes/1048576).toFixed(0)} MiB decoded cache`),!n){const Te=Kn.current.indexOf(Y);I.frames.prefetch(l.id,[Kn.current[Te+1],Kn.current[Te-1]].filter(bn=>bn!=null))}}catch(de){q&&U===_n.current&&(Un(de.message),Ke({key:an,status:"error",error:de.message}),Mn(!1))}})(),()=>{q=!1}},[l.id,Y,nn,me,ve,on,an,$e,mn,d,Le]),S.useEffect(()=>{ln&&O.current?.pause()},[ln]);const gi=S.useMemo(()=>Cl(f?.lattice),[f?.lattice]);S.useEffect(()=>{const I=U=>{const q=U.detail;w&&q?.page==="field"&&q.caseId===l.id&&qe.includes(q.frame)&&(q.accept(),na(q.frame))};return window.addEventListener("oceanscope-annotation-frame",I),()=>window.removeEventListener("oceanscope-annotation-frame",I)});const Ra=S.useCallback(I=>Qe(I),[]),Ee=ne?.snapshot.frameNumber,In=Ee==null?null:kn?.frames?.[String(Ee)],na=S.useCallback(I=>{O.current?.pause(),m==="velocity"&&!xe.includes(I)&&g("sdf"),Qe(I)},[m,xe,g]),Ne=JSON.stringify([l.id,Y,m,dn,te,Ce,Pe,Ie,Oe]),[Ot,Pa]=S.useState(()=>({context:Ne,range:T?.region??null})),Dt=S.useRef(Ne);S.useEffect(()=>{Dt.current!==Ne&&(Dt.current=Ne,Pa({context:Ne,range:null}))},[Ne]);const Ia=Ot.context===Ne?Ot.range:null;function yi(I){O.current?.pause(),Pa({context:Ne,range:I})}function xi(I){O.current?.pause(),Ct(I)}const Fe=ne?.settings.group||m,Nn=ne?Dn(ne.snapshot.data,Fe):null,ce={shading:Cn,...Ft,...ne?.settings,...De,unit:Nn?.unit},Ge=Ve?.key===an&&Ve.status==="ready"&&!ze&&!ln&&!Z&&!!It&&ne?.snapshot.frameNumber===Y&&ne?.settings===nn&&!ne?.geometry.failed;S.useEffect(()=>{C?.(Ge&&!x)},[Ge,x,C]),S.useEffect(()=>{if(!(!_||z.current)){if(ln||Z||ne?.geometry.failed){z.current=!0,v?.(Error("load"));return}if(Ge){z.current=!0;try{H.current.restoreCamera(_.camera),O.current.pause(),v?.(null)}catch(I){v?.(I)}}}},[_,Ge,ln,Z,ne,v]);function Tt(){if(!Ge||x||!d||En&&!(en[1]>en[0]))throw Error("settings");return O.current.pause(),rn({schema:ga,name:`${d.id} · ${m.toUpperCase()} · ${Ee} · ${te==="oblique"?Oe.toUpperCase()+" "+Pe+"°":te.toUpperCase()}`,sourceSignature:zs(d),settings:{...mn?{representation:Tn}:{},shading:Cn,caseId:d.id,frame:Ee,group:m,mode:re?"gt":Xe,quality:Le,component:dn,plane:te,sliceIndex:Ce,angle:Pe,sectionPercent:Ie,rotationAxis:Oe,showPlane:Pn,showContext:yn,...De,showPrediction:re?!1:De.showPrediction,vectorDensity:xn,arrowScale:vn,sourceRange:En?en:null,errorScale:Ln,crosshair:Aa,region:re?null:Ia,playback:O.current.getSettings()},camera:H.current.getCamera()},[d])}S.useImperativeHandle(h,()=>({pause(){O.current?.pause()},captureView:Tt,async restoreAnalysis(I,U,q){if(q.throwIfAborted(),!s)throw Error("Reference analysis is not ready for this dataset");if(U==="pairedCase"){if(!F.current)throw Error("One-page case unavailable for this dataset");return F.current.restore(I,q)}if(U==="velocityComparison"||U==="velocity")throw Error("Unsupported velocity report in public preview");if(U==="report"){if(!Be.current?.restoreText)throw Error("Analysis is not ready");return Be.current.restoreText(I,q)}const de=Cs(I,s);q.throwIfAborted(),O.current?.pause(),Be.current?.clearSnapshot(),K(ge=>({...ge,subset:de.subset,metric:de.metric})),Qe(de.frame)}}));function vi(){O.current?.pause();let I=null,U=null,q=null,de="No 3D preview for this frame";if(ve.includes(Y)){de=ln||Z||(ne?.geometry.failed?"3D preparation failed":ze?"3D preview is loading":"3D preview is not ready or not verified");try{const ge=mn?js(d,Y,Le):rt(d,Y);Ge&&ge&&JSON.stringify(ne.snapshot.verifiedResource)===JSON.stringify(ge)&&(I=Tt(),q=H.current.capture(),U=ge,de=mn?"Exact-frame native SDF surface bytes verified; no volume samples":"Exact-frame preview bytes verified")}catch(ge){I=null,U=null,q=null,de=ge.message}}return{view:{frame:Y,plane:te,sliceIndex:Ce,rotationAxis:Oe,angle:Pe,sectionPercent:Ie,selection:V,geometry:I,geometryResource:U,geometryStatus:{status:I?"included":"unavailable",reason:de}},scene:q}}function Ei(I,U){if(U.throwIfAborted(),O.current?.pause(),Qe(I.frame),Ca(I.plane),Rn(I.sliceIndex),Mt(I.rotationAxis),Rt(I.angle),ka(I.sectionPercent),K(I.selection),Hn(de=>de+1),!I.geometry)return Promise.resolve();Me(!0);const q=I.geometry.settings;return g(q.group),Jn(q.mode),Et(q.quality),_t(q.component),un(q.shading),St(q.showContext),jt(q.vectorDensity),Bt(q.arrowScale),Pt(q.showPlane),Ma({showGt:q.showGt,showPrediction:q.showPrediction,gtOpacity:q.gtOpacity,predictionOpacity:q.predictionOpacity}),At(!!q.sourceRange),kt(q.sourceRange??[0,1]),An(q.errorScale),Ct(q.crosshair),new Promise((de,ge)=>{const wn=setTimeout(()=>bn(Error("Timed out loading the report view; retry the geometry download")),3e4),Te=()=>bn(Error("Report restore cancelled"));function bn(ta){clearTimeout(wn),U.removeEventListener("abort",Te),Re(null),ta?ge(ta):de()}U.addEventListener("abort",Te,{once:!0}),Re({view:I,signal:U,finish:bn})})}S.useEffect(()=>{if(!(!ae||ae.signal.aborted)&&!(Y!==ae.view.frame||Ve?.key!==an||Ve.status==="loading")){if(Ve.error||Z||ne?.geometry.failed){ae.finish(Error(Ve.error||Z||"Geometry unavailable"));return}if(Ge){if(JSON.stringify(ne.snapshot.verifiedResource)!==JSON.stringify(ae.view.geometryResource)){ae.finish(Error("Report preview resource identity mismatch"));return}try{H.current.restoreCamera(ae.view.geometry.camera),O.current?.restoreSettings(ae.view.geometry.settings.playback),Pa({context:Ne,range:ae.view.geometry.settings.region??null}),ae.finish()}catch(I){ae.finish(I)}}}},[ae,Ge,Y,Ve,an,Z,ne]);const _i=Ec({sourceCase:d,comparison:l,processing:f,snapshot:ne?.snapshot,geometry:ne?.geometry,settings:ce,metrics:kn}),wi=ne?.snapshot.data.fields.find(I=>I.id===(Nn?.groundTruth?.ids[0]||Nn?.prediction?.ids[0])),Wt=f?.lattice&&te!=="oblique"?Xc(f.lattice,te,Ce):null,Na={shading:Fe==="sdf"?Cn:"not_applicable",comparison_id:l.id,dataset_a:l.groundTruthId||l.labels?.gt?.displayName||"Ground Truth",dataset_b:re?"":l.predictionId||l.labels?.prediction?.displayName||"Prediction",frame:Ee,group:Fe,component:ce.component,plane:ce.plane,mode:ce.mode,camera:It,gt_opacity:De.gtOpacity,prediction_opacity:De.predictionOpacity,preview_quality:ce.quality,show_plane:Pn,gt_visible:De.showGt,prediction_visible:De.showPrediction,value_unit:Nn?.unit||"undeclared",coordinate_unit:"source_grid_units",lattice_origin:me?.origin,lattice_axis_steps:me?.axisSteps,dimensions:me?.dimensions,...ce.plane==="oblique"?Ri(ot(me,ce.angle,ce.sectionPercent,ce.rotationAxis)):{slice_index:ce.sliceIndex,angle_degrees:ce.plane==="xy"?0:ce.plane==="yz"?90:null,sampling:"native_voxel_layer"},section_percent:ce.plane==="oblique"?ce.sectionPercent:Da(ce.sliceIndex,0,(me?.dimensions?.[ce.plane==="xy"?2:ce.plane==="yz"?0:1]||1)-1),crosshair_normalized:Aa,local_region:Ia,saved_metrics_scope:"precomputed_original_support_not_current_slice"},Si=e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:222:25",id:"analysis-height",hidden:n&&!["height","report"].includes(a)},s&&Y!=null&&e.createElement(rl,{viewMode:n?a==="report"?"report":"height":"all",unifiedRestore:c,bundle:s,frame:Y,plane:te,sliceIndex:Ce,rotationAxis:Oe,angle:Pe,sectionPercent:Ie,getReportView:vi,onRestoreReportView:Ei,reportControlRef:Be,onDownload:fa,catalog:[d],reportContext:JSON.stringify([Ne,V]),onPause:()=>O.current?.pause(),onOpenVelocity:void 0})),$t=e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:223:27",hidden:n&&a!==M,id:"analysis-summary",className:R?"demo-integrated-time":void 0},R&&s&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:223:201",className:"demo-time-heading"},e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:223:236"},e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:223:241"},b?"时间分析":"Time analysis"),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:223:277"},b?"查看误差随帧号的变化；点击曲线上的点，同步切换上方三维画面。":"Inspect errors across frames. Select a curve point to update the 3D view above.")),e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:223:409",href:"#analysis-spatial"},b?"返回三维画面 ↑":"Back to 3D ↑")),s&&e.createElement(Gr,{displayGeometryFrames:Se.length?Se:xe,unifiedRestore:c,bundle:s,frame:Y,onFrame:na,onDownload:fa,reportSelection:V,onReportSelection:K}));function aa(){Be.current?.cancel(),r?.()}return e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:225:10","data-review-case":l.id,"data-review-frame":Ee,className:`field-workbench v2-field${n?` demo-field ${D?"demo-nonreference":""} demo-panel-${a} ${le?"settings-open":""}`:""}`,inert:x||void 0,onPointerDownCapture:aa,onKeyDownCapture:aa,onChangeCapture:aa,onWheelCapture:aa},e.createElement(Bl,{enabled:n,forceModal:J,open:le,active:w&&!N&&["3d","height","slices"].includes(a),returnFocusRef:we,onClose:()=>ye(!1),label:b?"视图设置":"View settings",closeLabel:b?"关闭设置":"Close settings"},e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:226:314",ref:hn,className:"field-setup",open:!l},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:226:385"},j?b?"已发布数据详情":"Published dataset details":B("Datasets & comparison setup")),y),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:227:7",hidden:n&&a==="height"},e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:227:57"},B("Display controls")),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:227:90",className:"field-tabs compact"},["sdf","velocity"].map(I=>e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:227:156","data-os-action":"",key:I,"aria-label":I==="sdf"?"SDF":"Velocity",disabled:!l.availableGroups.includes(I)||I==="velocity"&&!xe.includes(Y),"aria-pressed":m===I,onClick:()=>g(I)},B(I==="sdf"?"SDF":"Velocity"),!l.availableGroups.includes(I)&&e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:227:478"},B("Not available"))))),!re&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:228:17",className:"v2-primary-modes",role:"group","aria-label":b?"主要显示模式":"Primary display mode"},e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:228:112","data-os-action":"","aria-pressed":Xe==="split",onClick:()=>Jn("split")},b?"并排":"Side by side"),e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:228:214","data-os-action":"","aria-pressed":Xe==="overlay",onClick:()=>Jn("overlay")},b?"叠加":"Overlay")),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:229:7",className:"v2-mode-caption"},re?b?"单组查看 · 不显示误差":"Single dataset · no error scores":["split","overlay"].includes(Xe)?b?"A / GT 蓝色 · B / Prediction 橙色":"A / GT blue · B / Prediction orange":b?"正在使用高级显示模式":"Advanced display mode active")),e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:230:13"},B("Cross section")),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:230:43"},B("Plane"),e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:230:63","data-os-action":"","aria-label":B("Slice plane"),value:te,onChange:I=>{Ca(I.target.value),Rn(null)}},["xy","xz","yz"].map(I=>e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:230:197",key:I,value:I},I.toUpperCase()," · ",b?"固定":"fixed"," ",I==="xy"?"Z":I==="xz"?"Y":"X")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:230:303",value:"oblique",disabled:!qa(me)},b?"斜切 · X / Y / Z 旋转":"Oblique · X / Y / Z rotation"))),te==="oblique"&&e.createElement(_c,{value:Oe,onChange:I=>{O.current?.pause(),Mt(I)}}),te==="oblique"&&e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:232:27",className:"v2-position"},b?"切面角度":"Section angle"," ",e.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:232:86"},Pe,"°"),e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:232:111","data-os-action":"","aria-label":b?"场切面角度":"Field section angle",type:"range",min:"0",max:"180",step:"1",value:Pe,onChange:I=>Rt(+I.target.value)}),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:232:259"},b?"只旋转切面，相机不变；切面与探针同步。":"Rotates the section, not the camera; probes remain synchronized.")),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:233:7",className:"v2-position"},b?"切片位置":"Section position"," ",e.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:233:69"},(te==="oblique"?Ie:Da(Ce,0,Ze)).toFixed(1),"%"),e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:233:176","data-os-action":"","aria-label":b?"场切片位置百分比":"Field section position percent","aria-valuetext":`${(te==="oblique"?Ie:Da(Ce,0,Ze)).toFixed(1)}%`,type:"range",min:"0",max:te==="oblique"?100:Ze,step:te==="oblique"?.1:1,disabled:!ea||Ze===0,value:te==="oblique"?Ie:Ce,onChange:I=>te==="oblique"?ka(+I.target.value):Rn(+I.target.value)})),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:234:7",className:"v2-range-labels"},e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:234:40"},"0%"),e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:234:55"},"100%")),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:234:78"},te==="oblique"?b?"三线性取样：参与插值的邻点必须全部有效，缺失处留空。":"Trilinear sampling: all contributing neighbours must be valid; missing support stays empty.":b?"按原始体素层移动，切面与下方探针同步。":"Snaps to original voxel layers; synchronized with slices and probe."),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:235:7",className:"check"},e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:235:32","data-os-action":"",type:"checkbox",checked:Pn,onChange:I=>Pt(I.target.checked)}),b?"显示半透明切面":"Show translucent section plane"),e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:236:7",hidden:n&&a==="height",className:"v2-advanced"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:236:85"},b?"显示、单位与网格详情":"Display, units & grid details"),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:237:7"},te==="oblique"?`${b?"斜切角度":"Oblique angle"} ${Oe.toUpperCase()} ${Pe}°`:`${B("Slice ")}${Ce} / ${Ze}`,e.createElement("br",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:237:148"}),B("World: "),Wt?Wt.map(I=>I.toFixed(3)).join(", "):"—",e.createElement("br",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:237:223"}),b?"原始网格坐标；单位见数据来源声明。":"Source-grid coordinates; see the source unit declaration."),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:238:7"},B("3D display mode"),e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:238:37","data-os-action":"","aria-label":B("3D display mode"),value:re?"gt":Xe,disabled:re,onChange:I=>Jn(I.target.value)},e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:238:161",value:"split"},B("Side by side · linked")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:238:221",value:"wire-overlay"},B("Solid + X-ray wireframe · overlap safe")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:238:305",value:"overlay"},B("Transparent overlay · blue / orange")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:238:381",value:"gt"},B("Ground Truth only")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:238:434",value:"prediction"},B("Prediction only")))),Xe==="wire-overlay"&&!re&&e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:239:40",className:"field-mode-help"},B("Blue: GT surface. Orange: Prediction wireframe, visible through GT. Geometry and scores are unchanged.")),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:240:7"},B("Preview quality"),e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:240:37","data-os-action":"",value:Le,onChange:I=>Et(I.target.value)},e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:240:102",value:"balanced"},B("Balanced · stride 2")),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:240:163",value:"fine"},B("Fine · stride 1")))),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:240:233"},B("Display only. Metrics retain the comparison lattice.")),e.createElement("fieldset",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:7",className:"field-layer-controls"},e.createElement("legend",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:50"},B("Visible layers")),[["Gt","Ground Truth","gtOpacity"],...re?[]:[["Prediction","Prediction","predictionOpacity"]]].map(([I,U,q])=>e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:217",key:I,className:"field-layer-row"},e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:260",className:"check"},e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:285","data-os-action":"",type:"checkbox",checked:De[`show${I}`],onChange:de=>Ma(ge=>({...ge,[`show${I}`]:de.target.checked}))}),e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:409",className:`field-layer-dot ${I==="Gt"?"gt":"prediction"}`}),B(U)),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:497"},B(U),B(" opacity "),e.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:532"},Math.round(De[q]*100),"%"),e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:581","data-os-action":"","aria-label":`${U} opacity`,type:"range",min:".1",max:"1",step:".05",value:De[q],disabled:!De[`show${I}`],onChange:de=>Ma(ge=>({...ge,[q]:Number(de.target.value)}))}))))),m==="velocity"&&e.createElement(e.Fragment,null,e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:36"},B("Velocity display"),e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:67","data-os-action":"",value:dn,onChange:I=>_t(I.target.value)},["magnitude","x","y","z"].map(I=>e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:170",key:I,value:I},I==="magnitude"?re?"Magnitude":B("Magnitude / EPE"):I.toUpperCase())))),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:300"},B("Vector count limit"),e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:333","data-os-action":"",type:"number",min:"1",max:"20000",value:xn,onChange:I=>jt(Math.max(1,Math.min(2e4,Number(I.target.value)||1)))})),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:479"},B("Arrow scale"),e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:505","data-os-action":"",type:"number",min:".001",step:".1",value:vn,onChange:I=>Bt(Math.max(.001,Number(I.target.value)||1))})),l.availableGroups.includes("sdf")&&e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:690",className:"check"},e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:715","data-os-action":"",type:"checkbox",checked:yn,onChange:I=>St(I.target.checked)}),B(" Show SDF context"))),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:243:7",className:"check"},e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:243:32","data-os-action":"",type:"checkbox",checked:En,onChange:I=>At(I.target.checked)}),B(" Fixed source color range")),En&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:243:162",className:"row"},en.map((I,U)=>e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:243:202","data-os-action":"",key:U,"aria-label":U?"Color maximum":"Color minimum",type:"number",value:I,step:".01",onChange:q=>kt(de=>de.map((ge,wn)=>wn===U?Number(q.target.value):ge))}))),j&&re?e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:25",className:"alignment-report"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:63"},"Grid and provenance"),e.createElement("dl",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:101"},e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:105"},e.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:110"},"Canonical lattice"),e.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:136"},me?.dimensions?.join(" × ")," voxels")),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:192"},e.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:197"},"Voxel size"),e.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:216"},me?.voxelSize?.join(" × ")||"See source declaration")),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:290"},e.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:295"},"Source"),e.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:310"},"Simulation Ground Truth. No prediction alignment or error comparison.")))):e.createElement(Ar,{lattice:f?.lattice,comparison:l}))),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:5",className:"field-center"},i&&e.createElement(Je,{error:i,zh:b,resource:b?"序列评估资源":"Sequence evaluation resources",onRetry:o}),e.createElement(Je,{error:ln,zh:b,resource:(b?"当前帧三维资源：":"Current-frame geometry: ")+Y,onRetry:()=>Hn(I=>I+1)}),(s||n)&&e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:355",className:"analysis-toolbar","aria-label":b?"分析导航":"Analysis navigation"},e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:434",hidden:W},b?"当前帧":"Current frame"," ",e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:502","data-os-action":"","aria-label":"Analysis frame",value:Y??qe[0],onChange:I=>na(Number(I.target.value))},qe.map(I=>e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:655",key:I,value:I},I,Se.includes(I)||xe.includes(I)?" · 3D":"")))),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:776",hidden:N},b?"截面":"Section"," ",e.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:827","data-os-action":"","aria-label":"Analysis section",value:te,onChange:I=>{Ca(I.target.value),Rn(null)}},["xy","xz","yz"].map(I=>e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:960",key:I,value:I},I.toUpperCase())),e.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:1014",value:"oblique",disabled:!qa(me)},b?"斜切":"Oblique"))),e.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:1120",hidden:N},te==="oblique"?b?"位置 %":"Position %":b?"切片索引":"Slice index"," ",e.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:1222","data-os-action":"","aria-label":"Analysis section position",type:"number",min:"0",max:te==="oblique"?100:Ze,step:te==="oblique"?.1:1,disabled:!ea||Ze===0,value:te==="oblique"?Ie:Ce,onChange:I=>{const U=Number(I.target.value);Number.isFinite(U)&&(te==="oblique"?ka(Math.max(0,Math.min(100,U))):Rn(Math.max(0,Math.min(Ze,Math.round(U)))))}})),e.createElement("nav",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:1655",hidden:n,"aria-label":b?"分析区域":"Analysis sections"},e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:1726",href:"#analysis-spatial"},b?"三维视图":"3D view"),e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:1779",href:"#analysis-height"},b?"高度与选区":"Height & ROI"),e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:1837",href:"#analysis-slices"},b?"场切片":"Field slices"),e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:1893",href:"#analysis-summary"},b?"序列统计":"Sequence metrics")),n&&!N&&["3d","height","slices"].includes(a)&&e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:2040","data-os-action":"",ref:we,className:"demo-settings-toggle","aria-controls":"analysis-settings","aria-expanded":le,onClick:()=>ye(I=>!I)},b?"视图设置":"View settings"),n&&!W&&e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:2282",className:"demo-frame-scope"},ve.includes(Y)?b?"当前帧支持三维":"3D available for this frame":b?"当前帧仅高度与序列数据":"Height and sequence data for this frame")),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:248:7",className:"demo-geometry-panel",hidden:n&&a!=="3d"},mn&&e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:248:99",className:"demo-surface-scope"},b?"原生 SDF 三维表面 · 支持精细／均衡显示；高度与 ROI 使用同一帧。体积场与速度切片另有覆盖范围。":"Native SDF 3D surface · Fine / Balanced display; same-frame height and ROI. Volume and velocity slices have separate coverage."),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:7",id:"analysis-spatial",className:"v2-section-heading"},!n&&e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:82"},"01"),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:98"},e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:103"},b?"3D 空间分析":"3D spatial analysis"),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:148"},re?b?"选择当前帧，查看三维场与同一位置的切片。":"Choose a frame and inspect its 3D field and synchronized slice.":b?"选择当前帧，比较三维形状与同一位置的场切片。":"Choose a frame and compare geometry and field values at the same section.")),R&&s&&e.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:400",className:"demo-time-jump",href:"#analysis-summary"},b?"查看时间分析 ↓":"View time analysis ↓")),s&&Y!=null&&!ve.includes(Y)?e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:250:65",role:"status",className:"reference-scope"},b?`帧 ${Y} 无三维缓存。仍可查看此帧的高度图和指标；未替换为邻帧。`:`Frame ${Y} has no geometry cache. Height maps and metrics retain this exact frame.`,n&&e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:250:268","data-os-action":"",onClick:()=>t("height")},b?"查看此帧高度与 ROI":"View this frame’s height & ROI")):$e?e.createElement(Jc,{onShading:un,inspection:!ze&&qn?.context===Ne?qn.value:null,onSceneError:X,controlRef:H,key:l.id,onCameraChange:ui,frameSplit:E,displayedFrame:Ee,labels:l.labels,geometry:ne?.geometry,settings:ce,bounds:gi,loadingFrame:ze?Y:null,error:null}):e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:250:395",className:"demo-geometry-start"},e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:250:432"},b?"高度分析已可使用。三维视图每帧约25 MB，点击后加载。":"Height analysis is ready. The 3D view loads about 25 MB for the selected frame."),e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:250:556","data-os-action":"",type:"button",onClick:()=>Me(!0)},b?"打开当前帧三维":"Open current frame in 3D")),$e&&(!s||ve.includes(Y))&&e.createElement(Kc,{controlRef:O,initialPlayback:T?.playback,active:w&&!x&&(!n||a==="3d"),frameSplit:E,frames:ve,displayedFrame:Ee,requestedFrame:Y,status:l.status||"ready",loading:ze,onFrame:Ra,onScrubbing:I=>fn.current?.frames.setScrubbing(I)})),R&&$t,!1,Si,n&&D&&(re&&["height","time"].includes(a)||a==="report")&&e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:260:110",className:"reference-scope"},a==="report"?b?"此样例没有96帧协议报告。可保存或恢复场比较方案；切片报告从“场切片”导出。":"This sample has no96-frame protocol report. Save or restore field views here; export slice reports from Field slices.":b?"此样例只有Ground Truth，无配对误差。请查看三维、场切片与探针。":"This sample contains Ground Truth only, without paired errors. Inspect3D, field slices and probes.",e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:260:475","data-os-action":"",onClick:()=>t("slices")},b?"查看场切片":"Open field slices")),e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:7",hidden:n&&a!==M,className:"analysis-source"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:98"},b?"数据与显示说明":"Data and display details"),e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:158",className:"field-saved-note"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:196"},re?B("Single dataset preview — no comparison scores"):`Evaluation: ${Object.values(l.settings?.sdf||{}).some(I=>I?.semantics==="water_interior")?"conditional GT-water distance support":l.settings?.sdfEvaluationRegion==="gt_water"?"GT water only":"full domain"} · Saved settings`),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:518"},d?.metrics?.reconstructionEvaluation?b?"Best_1027 三帧本地参考结果。原生场指标、俯视高度指标和水下 0.1 m 速度指标使用各自明确的有效域；查看下方计算规则。":"Best_1027 three-frame local reference. Native-volume, top-down height and underwater 0.1 m metrics use separate documented supports; see the protocol below.":j?re?"Ground Truth fields are shown for inspection. This example contains no prediction and has no error metrics.":"Precomputed results retain the original comparison settings and validity masks. Conditional GT-water distance scores describe their valid support only. Occupancy and surface metrics use separate validity rules; unsupported metrics remain N/A. This example is not a model-ranking benchmark. 3D and slices show the saved aligned fields.":B("Results use the saved comparison settings. Create a new comparison after changing declarations. Occupancy and surface metrics have separate validity rules. Original scores are not certified for model ranking; use Results Library common-support evaluation. 3D and slices show the original aligned fields."))),j&&e.createElement(wc,{context:_i,busy:ze})),e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:7",hidden:n&&a!==(D?"height":M),open:!s,className:"legacy-height-analysis"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:148"},s?b?"旧预览协议 · 三帧高度诊断":"Legacy preview protocol · three-frame height diagnosis":b?"高度诊断":"Height diagnosis"),d?.metrics?.reconstructionEvaluation&&e.createElement(Nr,{protocol:d.metrics.reconstructionEvaluation,frame:ne?.snapshot.data,lattice:me,frameNumber:Ee,busy:ze||Ee!==Y||Fe!==m,onFrame:Ra}),!re&&m==="sdf"&&e.createElement(Rr,{frame:ne?.snapshot.data,lattice:me,comparison:l,plane:ce.plane,sliceIndex:ce.sliceIndex,rotationAxis:ce.rotationAxis,angle:ce.angle,sectionPercent:ce.sectionPercent,frameNumber:Ee,busy:ze||Ee!==Y||Fe!==m})),e.createElement("section",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:7",hidden:n&&a!=="slices",id:"analysis-slices",className:"field-slices"},!1,A?e.createElement(e.Fragment,null,e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:337","data-os-action":"",onClick:()=>P(null)},b?"返回原场切片":"Back to original field slices"),A.comparison?e.createElement(jl,{key:A.key,restored:A.restored}):e.createElement(bl,{key:A.key,frameNumber:Y,request:A.request,restored:A.restored})):e.createElement(e.Fragment,null,e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:707"},B("Synchronized slices & probe")),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:751",className:"v2-mode-caption"},Fe==="sdf"?re?b?"GT 单场切片，不含比较误差。":"GT field slices only; no comparison errors.":b?"此处为 SDF 场差值（B−A），不等于水面高度差。":"This is the SDF field difference (B−A), not water-surface height error.":b?"速度场切片与探针；瞬时矢量不是粒子轨迹。":"Velocity slices and probes; instantaneous vectors are not particle paths."),mn?e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:1109",className:"reference-scope"},e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:1142"},b?"本帧已提供真实三维表面、高度与 ROI；完整体积场切片仅发布了以下三帧。切换帧会明确改变当前帧号。":"This frame has its actual 3D surface, height and ROI. Full volume slices are published for the three frames below. Choosing one explicitly changes the frame."),xe.map(I=>e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:1386","data-os-action":"",key:I,onClick:()=>na(I)},I))):wi?e.createElement(ir,{reportReady:Ge&&!x,captureScene:()=>{if(!Ge||x)throw Error(b?"等待当前帧与三维加载完成。":"Wait for the current frame and 3D.");return O.current?.pause(),H.current.capture()},reportLabels:{a:l.labels?.gt?.displayName||"Ground Truth",b:l.labels?.prediction?.displayName||"Prediction"},savedMetrics:In,region:re?null:Ia,onRegion:yi,inspectionContext:Ne,onInspection:Ba,busy:ze||Ee!==Y||ne?.settings!==nn,errorScale:Ln,onErrorScale:An,frameNumber:Ee,frameSplit:E,exportStem:G,viewMetadata:Na,rotationAxis:ce.rotationAxis,angle:ce.angle,sectionPercent:ce.sectionPercent,frame:ne.snapshot.data,group:Fe,plane:ce.plane,sliceIndex:ce.sliceIndex,crosshair:Aa,onCrosshair:xi,component:ce.component,fixedRange:Ft.sourceRange,lattice:me,single:re,label:"Ground Truth"}):e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:2612",role:"status"},ze?`${B("Loading")} ${Y}…`:B("No field samples available for this view.")))),!R&&$t,!re&&e.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:271:17",open:!n,hidden:n&&a!==M,className:"demo-legacy-sequence"},e.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:271:135"},b?"旧预览协议 · 三帧序列诊断":"Legacy preview protocol · three-frame sequence diagnostics"),e.createElement("section",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:271:236",className:"v2-field-temporal","aria-label":b?"时间分析":"Temporal analysis"},e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:271:318",className:"v2-section-heading"},e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:271:354"},"02"),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:271:369"},e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:271:374"},b?"时间分析":"Temporal analysis"),e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:271:414"},b?"保留逐帧绝对误差与序列统计。只能跳转到已有三维数据的帧。":"Absolute errors and sequence statistics. Frame navigation is available only where geometry exists."))),e.createElement(Br,{frameSplit:E,onReviewSetup:L,comparisonId:G,frames:ve,expectedFrames:u,metrics:kn,groups:l.availableGroups,group:Fe,status:l.status,currentFrame:Ee,onFrame:Ra,sdfUnit:Dn(ne?.snapshot.data,"sdf").unit||l.settings?.sdf?.gt?.unit||"unit undeclared",velocityUnit:Dn(ne?.snapshot.data,"velocity").unit||l.settings?.velocity?.gt?.unit||"unit undeclared"}))),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:7",hidden:n,className:"field-memory"},hi,d?.metrics?.reconstructionEvaluation?b?" · 本地三帧数据 · 按需加载":" · Local three-frame data · Loaded on demand":j?" · Published samples · Geometry prepared in your browser":B(" · Geometry prepared off the UI thread · No cloud upload"))),e.createElement("aside",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:275:5",className:"field-results",hidden:n&&(!D||!["time","report"].includes(a))},s&&e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:275:131",className:"reference-scope"},b?"旧预览协议 · 三帧空间诊断":"Legacy preview protocol · three-frame spatial diagnostics"),e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:275:248"},B("Current frame "),e.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:275:274"},Ee??"—")),re?e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:275:312"},B("Single dataset preview — no comparison scores")):e.createElement(rr,{frame:Ee,metrics:In,group:Fe,unit:Nn?.unit||""}),!re&&e.createElement(e.Fragment,null,e.createElement(Cr,{group:Fe}),e.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:276:56",className:"field-exports"},e.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:276:87"},B("Export results")),e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:276:118","data-os-action":"",disabled:!kn,onClick:()=>fa(`${G}_metrics.json`,JSON.stringify({...kn,current_view:Na},null,2))},B("Export JSON")),e.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:276:296","data-os-action":"",disabled:!In,onClick:()=>{const I=["metric,value",...Object.entries(Na).map(([U,q])=>[U,typeof q=="object"?JSON.stringify(q):String(q??"")].map(de=>'"'+String(de).replaceAll('"','""')+'"').join(",")),`sdf_error_region,${In?.sdf?.evaluationRegion||l.settings?.sdfEvaluationRegion||"full_domain"}`];for(const[U,q]of Object.entries(In?.[Fe]||{}))(typeof q=="number"||q===null)&&I.push(`${U},${q??""}`);fa(`${G}_${Ee}_${Fe}.csv`,I.join(`
`),"text/csv")}},B("Export CSV")),e.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:276:918"},j?"Download saved values: JSON includes all metric records; CSV describes the displayed frame.":B("JSON: sequence · CSV: displayed frame. Saved-result ZIP includes source names and complete provenance.")))),!re&&e.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:277:17"},B("All metric averages and per-frame values are below the synchronized slices. Use the SDF / Velocity tabs to switch field groups."))))}const kl={kind:"field",parse:Fr,read:Or,write:Dr,validate:rn,error:Tr,title:n=>n?"场比较方案":"Saved field views",intro:n=>n?"保存样例、SDF/速度分量、帧、切面、探针、视角、色标、透明度、箭头与播放设置。恢复时重新读取数据并暂停播放；已有评分保持不变。":"Save sample, SDF/velocity component, frame, section, probe, camera, color scales, opacity, arrows and playback settings. Restore reloads data and pauses playback; saved scores are unchanged.",describe:(n,a)=>`${n.settings.caseId} · ${n.settings.group.toUpperCase()}${n.settings.group==="velocity"?" / "+n.settings.component:""} · ${a?"帧":"Frame"} ${n.settings.frame} · ${n.settings.plane==="oblique"?(n.settings.rotationAxis||"y").toUpperCase()+" "+n.settings.angle+"° / "+n.settings.sectionPercent+"%":n.settings.plane.toUpperCase()+" / "+n.settings.sliceIndex}`,storageNote:n=>n?"场方案与水面方案分开保存。仅保存在当前浏览器和网站地址；清除网站数据会丢失，请导出备份。导入文件仅在本机读取，不含场数据或计算结果；仅支持场比较方案 JSON。":"Field views are stored separately from wave views in this browser and site address. Clearing site data removes them; export a backup. Imports are read locally and contain no field arrays or computed results. Only field-view JSON is supported."};function Ml(n){return e.createElement(Sc,{adapter:kl,...n})}function Ha(n){if(new TextEncoder().encode(n).length>2*1024*1024)throw Error("Analysis file too large");let a;try{a=JSON.parse(n)}catch{throw Error("Invalid analysis JSON")}if(a?.schema==="oceanscope.paired-case.v1")return{kind:"pairedCase",value:a};if(a?.schema===ut)return{kind:"report",value:a};if(a?.schema===Qs)return{kind:"velocity",value:a};if(a?.schema===mi)return{kind:"velocityComparison",value:a};if(a?.schema===ga)return{kind:"field",value:a};if(a&&!a.schema&&a.schemaVersion===1&&typeof a.runId=="string"&&a.protocol&&a.datasetA&&a.datasetB&&"subset"in a&&"metric"in a&&"frame"in a)return{kind:"selection",value:a};throw Error("Unsupported analysis file")}const Rl={pairedCase:["一页案例：核验水面和速度资源，恢复热点、双剖面、切片与配对流线。","One-page case: verify both resources and restore the hotspot, profiles, slice and streamlines."],velocityComparison:["三帧速度对照：核验三个速度资源，恢复固定选区、探针、箭头和第三图。","Three-frame velocity comparison: verify all three resources and restore the fixed ROI, probe, arrows, and comparison map."],velocity:["速度诊断报告：重新核验对应帧的速度资源，恢复切片、ROI、探针、箭头和方向阈值。","Velocity report: verify the selected frame’s velocity resource and restore the slice, ROI, probe, arrows, and direction threshold."],report:["完整分析报告：恢复帧、选区、探针、截面和可用相机；重新核验资源。","Analysis report: restore frame, ROI, probe, section and available camera; verify resources again."],field:["场比较方案：恢复数据组合、三维帧、显示设置与相机；不含水面高度选区。","Field view: restore dataset, geometry frame, display settings and camera; no surface-height ROI."],selection:["序列选择：只恢复帧号、帧集合与曲线类型；不恢复选区或相机。","Sequence selection: restore only frame, frame set and curve; no ROI or camera."]};function Pl({onRestore:n,zh:a,controlRef:t}){const[s,i]=S.useState(""),[c,r]=S.useState(""),[o,l]=S.useState(null),[f,m]=S.useState(""),[g,y]=S.useState(!1),u=S.useRef(null);function p(){u.current&&(u.current.abort(),u.current=null,y(!1),m(a?"恢复已取消，保留后续操作。":"Restore cancelled; newer actions retained."))}S.useImperativeHandle(t,()=>({cancel:p})),S.useEffect(()=>()=>u.current?.abort(),[]);let d;try{s.trim()&&(d=Ha(s))}catch{}async function h(C){if(p(),!C)return;const v=new AbortController;u.current=v,l(null),i(""),r(C.name),m("");try{if(C.size>2*1024*1024)throw Error("Analysis file too large");const x=await C.text();v.signal.throwIfAborted(),Ha(x),i(x)}catch(x){v.signal.aborted||l(x)}finally{u.current===v&&(u.current=null)}}async function _(){p();const C=new AbortController;u.current=C,y(!0),l(null),m(a?"正在识别文件并核验资源…":"Recognizing the file and verifying resources…");try{const v=Ha(s);await n(s,v,C.signal),C.signal.throwIfAborted(),m(a?"恢复完成。请核对当前帧和范围；导出前重新生成报告。":"Restored. Check frame and scope; create a fresh report before exporting.")}catch(v){C.signal.aborted||(l(v),m(""))}finally{u.current===C&&(u.current=null,y(!1))}}return e.createElement("details",{"data-os-loc":"src/RestoreAnalysis.jsx:11:9",id:"restore-analysis",className:"restore-analysis"},e.createElement("summary",{"data-os-loc":"src/RestoreAnalysis.jsx:11:69","data-review-title":"","data-review-id":"restore-analysis"},a?"恢复分析 · 打开 JSON":"Restore analysis · Open JSON"),e.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:195"},a?"选择文件或粘贴内容，工具会识别恢复范围。文件在本机读取，仍需匹配的数据资源。":"Choose a file or paste its contents. The tool identifies what it restores. Files stay local; matching data resources are required."),e.createElement("label",{"data-os-loc":"src/RestoreAnalysis.jsx:11:380"},a?"选择分析文件":"Choose analysis file"," ",e.createElement("input",{"data-os-loc":"src/RestoreAnalysis.jsx:11:424","data-os-action":"",type:"file",accept:".json,application/json","aria-label":"Analysis JSON file",onChange:C=>{h(C.target.files?.[0]),C.target.value=""}})),c&&e.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:587"},c),e.createElement("label",{"data-os-loc":"src/RestoreAnalysis.jsx:11:605"},a?"或粘贴 JSON":"Or paste JSON",e.createElement("textarea",{"data-os-loc":"src/RestoreAnalysis.jsx:11:643","data-os-action":"","aria-label":"Analysis JSON text",rows:"4",value:s,onChange:C=>{p(),i(C.target.value),r(""),l(null),m("")}})),d&&e.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:823",className:"import-kind"},Rl[d.kind][a?0:1]),e.createElement("div",{"data-os-loc":"src/RestoreAnalysis.jsx:11:900",className:"reference-controls"},e.createElement("button",{"data-os-loc":"src/RestoreAnalysis.jsx:11:936","data-os-action":"",disabled:!s.trim()||g,onClick:_},a?"恢复这份分析":"Restore this analysis"),g&&e.createElement("button",{"data-os-loc":"src/RestoreAnalysis.jsx:11:1045","data-os-action":"",onClick:p},a?"取消恢复":"Cancel restore")),e.createElement(Je,{error:o,zh:a}),e.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:1152",role:"status","aria-live":"polite"},f))}const Il=`{
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
`,Nl=`{
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
`,Fl=`# OceanScope public source summary

This release presents supplied scene and model descriptions as claims, not independently audited training history. Original machine paths and source prose are omitted. Numerical results, masks and protocol identities are retained.

- Model: "Model A"
- Scene: "v2 Gentle clean full-SDF velocity"
- Camera configuration: ["camera29","camera32","camera35","camera02","camera05","camera08","camera11","camera14","camera17","camera20","camera23","camera26"]
- Source frame rate: "24 fps; 1001–1096"
- Train / validation / test: "v2 all96 test; never used for training/checkpoint choice"
- OceanBox training scenes: ["variant_00000","variant_00001","variant_00002","variant_00003","variant_00004","variant_00008"]
- Preprocessing: "Temporal smoothing"
- Unit evidence: "source convention; not independently calibrated"
`,Ol=`# OceanScope public source summary

This release presents supplied scene and model descriptions as claims, not independently audited training history. Original machine paths and source prose are omitted. Numerical results, masks and protocol identities are retained.

- Model: "Model A"
- Scene: "v2 Gentle clean full-SDF velocity"
- Camera configuration: ["camera29","camera32","camera35","camera02","camera05","camera08","camera11","camera14","camera17","camera20","camera23","camera26"]
- Source frame rate: "24 fps; 1001–1096"
- Train / validation / test: "v2 all96 test; never used for training/checkpoint choice"
- OceanBox training scenes: ["variant_00000","variant_00001","variant_00002","variant_00003","variant_00004","variant_00008"]
- Preprocessing: "Temporal smoothing"
- Unit evidence: "source convention; not independently calibrated"
`;function Dl(n,a){const t=[];(n?.gtRole!=="gt"||a?.gtRole!=="gt"||n?.predictionRole!=="prediction"||a?.predictionRole!=="prediction")&&t.push("Explicit GT/prediction roles required");for(const i of["scene","gtManifest","protocolSha256","frameIds","domain","unitStatus"])(n?.[i]==null||a?.[i]==null||Bn(n[i])!==Bn(a[i]))&&t.push(`Different or unknown ${i}`);const s=["camera","model","preprocessing"].filter(i=>Bn(n?.[i])!==Bn(a?.[i]));return{comparable:t.length===0,blockedReasons:t,differences:s}}async function Tl(n,a,t){const s=JSON.parse(n);if(s.schemaVersion!==1||s.runId!==a.runId||s.protocolSha256!==a.protocol.sourceScriptSha256||s.manifestA!==a.datasetA.manifestSha256||s.manifestB!==a.datasetB.manifestSha256)throw Error("Declaration identity mismatch");if(!Array.isArray(s.entries)||new Set(s.entries.map(c=>c.id)).size!==s.entries.length)throw Error("Invalid declarations");const i={gtIdentity:s.manifestA,predictionIdentity:s.manifestB};for(const c of s.entries){if(!["claimed","verified","unknown"].includes(c.status)||!c.id||!c.label)throw Error("Invalid declaration status");if(c.status==="unknown"&&c.value!==null)throw Error("Unknown declaration must have no asserted value");if(c.status==="verified"&&(!Object.hasOwn(i,c.id)||c.value!==i[c.id]))throw Error("Unsupported independent verification claim");if(c.status==="claimed"&&!c.source)throw Error("Claim needs its source");if(c.source&&(typeof t[c.source.file]!="string"||await qt(t[c.source.file])!==c.source.sha256))throw Error("Declaration source checksum mismatch")}if(s.conditions?.gtManifest!==s.manifestA||s.conditions.protocolSha256!==s.protocolSha256||Bn(s.conditions.frameIds)!==Bn(a.frameIds)||!Dl(s.conditions,s.conditions).comparable)throw Error("Declaration conditions mismatch");return{...s,sha256:await qt(n)}}async function Wl(n){if(n.id!=="best-1027")return null;const a=await Gi(Il,Vn,n);return{...a,verifiedPayloadSha256:Vn.sha256,declarations:await Tl(Nl,a,{"METRICS.md":Fl,"SPLIT.md":Ol})}}function $l({analysisSection:n,onAnalysisSection:a,item:t,active:s,viewApiRef:i,initialView:c,onViewReady:r,onViewRestored:o,restoring:l,onCancelImport:f}){const{language:m}=ie(),g=m==="zh",[y,u]=S.useState(()=>c?.settings.group||(t.comparison.settings?.previewOnly&&t.comparison.availableGroups.includes("velocity")?"velocity":"sdf")),[p,d]=S.useState(null),[h,_]=S.useState(""),C=S.useRef(Bs()),[v,x]=S.useState(0);S.useEffect(()=>(d(null),_(""),C.current.run(()=>Wl(t)).then(B=>{B&&d(B)}).catch(B=>_(B.message)),()=>C.current.cancel()),[t,v]);const E=!!t.comparison.settings?.previewOnly,j=!!t.metrics?.reconstructionEvaluation,w=e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:22:14",className:"public-field-provenance"},e.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:22:55"},t.description),e.createElement("dl",{"data-os-loc":"src/FieldSamples.jsx:22:80"},e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:23:3"},e.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:23:8"},"Ground Truth"),e.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:23:29"},t.comparison.labels?.gt?.displayName)),e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:24:3"},e.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:24:8"},"Prediction"),e.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:24:27"},E?g?"未提供；不计算误差":"Not included; no error scores":t.comparison.labels?.prediction?.displayName)),e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:25:3"},e.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:25:8"},g?"三维表面 / 体积场":"3D surface / volume frames"),e.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:25:63"},zn(t).length?`1001–1096 / ${t.processing.frames.map(B=>B.frame).join(", ")}`:t.processing.frames.map(B=>B.frame).join(", "))),e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:26:3"},e.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:26:8"},g?"数据语义":"Data semantics"),e.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:26:45"},j?g?"原分辨率有效 SDF/速度对比；三帧高度与水下速度评估，采用明确的本地计算规则。":"Native valid SDF/velocity comparison; three-frame height and underwater evaluation under an explicit local protocol.":E?g?"单位未声明":"Units undeclared":g?"条件性 GT 水体距离误差；外部填充值不参与距离评分":"Conditional GT-water distance scores; filled exterior excluded from distance scoring"))));return e.createElement(Al,{focusedLayout:!0,workspace:n,onWorkspace:a,unifiedRestore:!0,onCancelImport:f,onRetryEvaluation:()=>x(B=>B+1),evaluation:p,evaluationError:h,comparison:t.comparison,processing:t.processing,activeGroup:y,onActiveGroup:u,setup:w,expectedFrames:Object.keys(t.metrics?.frames||{}).map(Number),metricsOverride:t.metrics||null,sourceCase:t,viewApiRef:i,initialView:c,onViewReady:r,onViewRestored:o,restoring:l,readOnly:!0,active:s})}function Yl({request:n,active:a=!0,analysisSection:t="3d",onAnalysisSection:s}){const{tr:i,language:c}=ie(),r=c==="zh",o=S.useRef(null),l=S.useRef(0),f=S.useRef(null),m=S.useRef(null);S.useEffect(()=>()=>m.current?.reject(new DOMException("Cancelled","AbortError")),[]),S.useEffect(()=>{(!a||t!=="report")&&f.current?.cancel()},[a,t]);const[g,y]=S.useState(0),[u,p]=S.useState(null),[d,h]=S.useState(!1),[_,C]=S.useState(!1),[v,x]=S.useState(null),[E,j]=S.useState(null),[w,B]=S.useState(""),[k,b]=S.useState(""),[R,M]=S.useState(""),[A,P]=S.useState(0),[F,N]=S.useState(!1);S.useEffect(()=>{let X=!0;return Hi().then($=>{if(!X)return;Tc($.cases),j($);const D=Ua("public-case")?.id,J=$.cases.some(Q=>Q.id===D)?D:$.defaultCaseId||$.cases[0].id;B(J),b(J),M("")}).catch($=>{X&&M($.message)}),()=>{X=!1}},[A]),S.useEffect(()=>{n?.id&&E?.cases.some(X=>X.id===n.id)&&W(n.id)},[n,E]),S.useEffect(()=>{w&&Is("public-case",{id:w})},[w]);function W(X){f.current?.cancel(),y(++l.current),o.current?.pause(),p(null),C(!1),h(!1),x(null),B(X),b(X),N(!1)}function T(X){try{const $=rn(X,E.cases);o.current?.pause();const D=++l.current;y(D),h(!1),C(!0),x(null),N(!1),B($.settings.caseId),b($.settings.caseId),p({doc:$,token:D})}catch($){x({error:$})}}async function H(X,$,D){if(D.throwIfAborted(),$.kind!=="field"){if(!o.current?.restoreAnalysis)throw Error("Analysis is not ready");return o.current.restoreAnalysis(X,$.kind,D)}const J=rn($.value,E.cases);return new Promise((Q,be)=>{const le=()=>{m.current?.signal===D&&(m.current=null,++l.current,p(null),C(!1),be(new DOMException("Cancelled","AbortError")))};D.addEventListener("abort",le,{once:!0});const ye=we=>{D.removeEventListener("abort",le),we?be(we):Q()};m.current={signal:D,finish:ye,reject:be},T(J)})}function O(X,$){if(X!==l.current)return;const D=m.current;m.current=null,D?.finish($),C(!1),x($?{error:$}:{cn:"场方案已恢复：样例、帧、切面、探针、视角与显示设置已同步，播放已暂停。",en:"Field view restored: sample, frame, section, probe, camera and display settings are synchronized. Playback paused."})}const z=E?.cases.find(X=>X.id===w),Z=E?.cases.find(X=>X.id===k);return z?.comparison.settings?.previewOnly,e.createElement("section",{"data-os-loc":"src/FieldSamples.jsx:62:9",className:"public-field-demo","aria-label":"Published field examples"},e.createElement("header",{"data-os-loc":"src/FieldSamples.jsx:63:3",className:"demo-case-header"},e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:63:40"},e.createElement("h1",{"data-os-loc":"src/FieldSamples.jsx:63:45"},z?.name||(r?"场分析":"Field analysis")),e.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:63:95"},z&&(r?`${zn(z).length||z.processing.frames.length}帧三维 · ${z.processing.frames.length}帧体积场`:`${zn(z).length||z.processing.frames.length} 3D frames · ${z.processing.frames.length} volume frames`))),e.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:63:357","data-os-action":"",disabled:_,"aria-expanded":F,onClick:()=>{b(w),N(X=>!X)}},r?"数据与示例":"Datasets & examples")),R?e.createElement(Je,{error:R,zh:r,resource:r?"示例目录":"Sample catalogue",onRetry:()=>P(X=>X+1)}):E?e.createElement(e.Fragment,null,F&&e.createElement("section",{"data-os-loc":"src/FieldSamples.jsx:66:14",className:"sample-setup","aria-label":"Sample dataset selection"},e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:66:86",className:"sample-setup-heading"},e.createElement("h2",{"data-os-loc":"src/FieldSamples.jsx:66:124"},r?"数据与对比设置":"Datasets & comparison setup"),e.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:66:177"},r?"选择已发布的数据组合，打开已有分析结果。":"Choose a published dataset pair to open its existing analysis.")),e.createElement("label",{"data-os-loc":"src/FieldSamples.jsx:67:5"},r?"示例组合":"Published example",e.createElement("select",{"data-os-loc":"src/FieldSamples.jsx:67:43","data-os-action":"","aria-label":"Published field example",value:k,onChange:X=>b(X.target.value)},E.cases.map(X=>e.createElement("option",{"data-os-loc":"src/FieldSamples.jsx:67:168",key:X.id,value:X.id},X.name)))),Z&&e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:68:13",className:"sample-dataset-grid"},e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:68:50",className:"sample-source"},e.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:68:81",className:"source-role"},"GROUND TRUTH"),e.createElement("h3",{"data-os-loc":"src/FieldSamples.jsx:68:130"},Z.comparison.labels?.gt?.displayName),e.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:68:181"},Z.comparison.availableGroups.join(" + ").toUpperCase()),e.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:68:248"},r?"可用":"Ready")),e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:68:284",className:"sample-source"},e.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:68:315",className:"source-role prediction"},"PREDICTION"),e.createElement("h3",{"data-os-loc":"src/FieldSamples.jsx:68:373"},Z.comparison.settings?.previewOnly?r?"无预测数据":"No prediction included":Z.comparison.labels?.prediction?.displayName),e.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:68:509"},Z.comparison.settings?.previewOnly?r?"独立查看，不显示误差指标":"Standalone inspection without error metrics":r?"已对齐的场数据 · 已记录的计算规则":"Aligned fields · Recorded evaluation protocol"))),e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:69:5",className:"sample-actions"},e.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:69:37"},r?"本工具读取已有样例与分析资源；原始 VDB / ABC 处理需使用配套离线流程。":"This tool reads existing samples and analysis resources; raw VDB / ABC processing uses the separate offline workflow."),e.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:69:217","data-os-action":"",onClick:()=>N(!1)},r?"取消":"Cancel"),e.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:69:284","data-os-action":"",className:"primary",onClick:()=>{W(k)}},Z?.comparison.settings?.previewOnly?r?"查看 Ground Truth":"View Ground Truth":r?"打开已有对比":"Open saved comparison"))),z&&e.createElement(e.Fragment,null,e.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:71:13",className:"demo-session-tools",hidden:t!=="report"},e.createElement(Pl,{controlRef:f,zh:r,onRestore:H}),e.createElement(Ml,{unifiedRestore:!0,catalog:E.cases,ready:d,restoring:_,onCapture:()=>o.current.captureView(),onRestore:T,restoreNotice:v})),e.createElement($l,{analysisSection:t,onAnalysisSection:s,onCancelImport:()=>f.current?.cancel(),key:`${z.id}:${g}`,item:z,active:a,viewApiRef:o,initialView:u?.doc,onViewReady:h,restoring:_,onViewRestored:X=>O(u?.token,X)}))):e.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:65:130",role:"status"},r?"正在加载示例…":"Loading samples…"))}export{Yl as default};
