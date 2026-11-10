import{g as ai,p as et,v as s0,a as ti,o as nt,b as ii,s as ri,S as Dn,c as Xn,d as Ga,e as o0,f as ci,h as si,i as oi}from"./surfaceResources-udFyEaQA.js";import{u as ce,R as n,r as B,a as li,b as Wa,w as l0}from"./workbench-CiUSG3zo.js";import{d as Ma,l as di}from"./publicData-Dh1-tQFp.js";import{W as fi,m as mi,j as bi,C as Na,k as ui,O as pi,a4 as hi,l as gi,a5 as yi,V as On,r as vi,y as _i,h as Ot,t as Ei,v as $t,s as Tt,d as Ft,q as wi,i as xi,B as Dt,o as Si,D as Bi,p as Ai,x as ki,a6 as zt,a7 as Zt,a8 as Ci,a9 as Ii,a0 as Mi,aa as Ni,ab as Ri,ac as Oi,ad as $i,ae as Ti,af as d0,ag as Fi,ah as Di,a2 as Ra,_ as zi,Y as Zi,I as Xi}from"./SectionRotation-DPMzzF3M.js";import{b as Pi,e as Xt,d as Vi,c as Pt}from"./comparisonExport-rG_qP9SP.js";import{e as Gi}from"./verticalSection-DptfHDZh.js";const Wi="./data/protocol-spatial/",Yi="539734f929b2d3d4a53adb2563bc9598e1cc8efcd33439f8a39db052bafb28bd",ji="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",Li="gentle",qi="best1027",Ui="e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",Ji="323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",zn={sha256:Yi,protocolSha256:ji,datasetA:Li,datasetB:qi,manifestA:Ui,manifestB:Ji};function Hi({fetchFrame:e,decode:a,byteBudget:t=268435456,maxFrames:i=5}){const r=new Map,c=new Map;let s=null,o=0,d=!1,f=!1;const m=(b,l)=>`${b}:${l}`,h=()=>[...r.values()].reduce((b,l)=>b+l.byteLength,0);function x(){for(const b of r.keys()){if(r.size<=i&&h()<=t)break;b!==s&&r.delete(b)}}function u(b,l){const g=m(b,l);if(r.has(g)){const p=r.get(g);return r.delete(g),r.set(g,p),Promise.resolve(p)}if(c.has(g))return c.get(g).promise;const w=new AbortController,_=e(b,l,{signal:w.signal}).then(p=>{if(d||w.signal.aborted)return null;const v=p&&Object.hasOwn(p,"verifiedResource"),y=v?p.buffer:p,S=v?p.verifiedResource:null,E=a(y),A=new Set(E.fields.map(k=>k.values.buffer)),C={comparisonId:b,frameNumber:l,data:E,verifiedResource:S,byteLength:[...A].reduce((k,F)=>k+F.byteLength,0)};return r.set(g,C),x(),C}).finally(()=>{c.get(g)?.controller===w&&c.delete(g)});return c.set(g,{promise:_,controller:w}),_}return{async select(b,l){if(d)return null;const g=++o,w=m(b,l);for(const[p,v]of c)p!==w&&(v.controller.abort(),c.delete(p));const _=s;s=w;try{const p=await u(b,l);return d||g!==o?null:(x(),p)}catch(p){if(d||g!==o||p.name==="AbortError")return null;throw s=_,p}},async prefetch(b,l){d||f||await Promise.all(l.slice(0,2).map(g=>u(b,g).catch(()=>null)))},setScrubbing(b){if(f=b,b)for(const[l,g]of c)l!==s&&(g.controller.abort(),c.delete(l))},stats(){return{bytes:h(),cachedFrames:r.size,oversize:h()>t}},dispose(){d=!0,o++;for(const b of c.values())b.controller.abort();c.clear(),r.clear()}}}function Ki({workerFactory:e=()=>new Worker(new URL(""+new URL("geometryWorker-BGm7dbIH.js",import.meta.url).href,import.meta.url),{type:"module"}),byteBudget:a=134217728}={}){const t=new Map;let i=null,r=null,c=0,s=!1;const o=()=>[...t.values()].reduce((f,m)=>f+m.byteLength,0);function d(){r&&(r.resolve(null),r=null,i?.terminate(),i=null)}return{request(f,m,h){if(s)return Promise.resolve(null);d();const x=ai(f,h);if(t.has(x)){const u=t.get(x);return t.delete(x),t.set(x,u),Promise.resolve(u)}return new Promise((u,b)=>{const l=++c;r={resolve:u,reject:b,id:l};try{i??=e(),i.onmessage=({data:v})=>{if(!r||v.requestId!==r.id||v.version!==1)return;if(r=null,v.type==="error"){b(Error(v.error));return}const y=v.result;t.set(x,y);for(const S of t.keys()){if(o()<=a)break;S!==x&&t.delete(S)}u(y)},i.onerror=v=>{r?.id===l&&(r=null,i?.terminate(),i=null,b(Error(v.message||"Geometry worker failed")))};const g=new Map,w=[],_=v=>{if(!v)return null;if(g.has(v))return g.get(v);const y=v.values.slice(),S={...v,values:y,mask:null};return g.set(v,S),w.push(y.buffer),S.mask=_(v.mask),S},p=Object.fromEntries(Object.entries(f.data.groups).filter(([v])=>v===h.group||v==="sdf"&&h.showContext).map(([v,y])=>[v,Object.fromEntries(Object.entries(y).filter(([S])=>(S==="ground_truth"||S==="prediction"||/^(ground_truth|prediction)\.[xyz]$/.test(S))&&(!h.previewOnly||!S.startsWith("prediction"))).map(([S,E])=>[S,_(E)]))]));i.postMessage({version:1,requestId:l,comparisonId:f.comparisonId,type:"build",payload:{snapshot:{...f,data:{groups:p}},lattice:m,settings:h}},w)}catch(g){r=null,b(g)}})},stats(){return{bytes:o(),cachedFrames:t.size,oversize:o()>a}},dispose(){s=!0,d(),i?.terminate(),i=null,t.clear()}}}const Qi="OCFLD001",Oa=24,er=112;function ea(e,a,t){const i=e.subarray(a,a+t),r=i.indexOf(0);return new TextDecoder().decode(r>=0?i.subarray(0,r):i)}function Vt(e,a){if(e>BigInt(Number.MAX_SAFE_INTEGER))throw new Error(`${a} exceeds safe integer range`);return Number(e)}function f0(e){if(!(e instanceof ArrayBuffer)||e.byteLength<Oa)throw new Error("Field frame is truncated");const a=new Uint8Array(e);if(ea(a,0,8)!==Qi)throw new Error("Invalid field frame magic");const t=new DataView(e),i=t.getUint32(8,!0);if(i!==1)throw new Error(`Unsupported field frame schema ${i}`);const r=t.getUint32(12,!0),c=t.getUint32(16,!0);if(c!==er)throw new Error(`Unsupported directory entry size ${c}`);const s=Oa+r*c;if(s>e.byteLength)throw new Error("Field frame directory is truncated");const o=[];for(let f=0;f<r;f+=1){const m=Oa+f*c,h=ea(a,m,16),x=ea(a,m+16,32),u=ea(a,m+48,16),b=t.getUint32(m+64,!0),l=[t.getUint32(m+68,!0),t.getUint32(m+72,!0),t.getUint32(m+76,!0)],g=Vt(t.getBigUint64(m+80,!0),"field offset"),w=Vt(t.getBigUint64(m+88,!0),"field length"),_=t.getInt32(m+96,!0);if(!h||!x||l.some(S=>S===0))throw new Error("Invalid field directory entry");if(g<s||g+w>e.byteLength)throw new Error(`Field ${h}:${x} data is truncated`);const p=l[0]*l[1]*l[2];let v,y;if(b===1){if(g%4!==0||w!==p*4)throw new Error(`Field ${h}:${x} has invalid float32 storage`);v=new Float32Array(e,g,p),y="float32"}else if(b===2){if(w!==p)throw new Error(`Field ${h}:${x} has invalid uint8 storage`);v=new Uint8Array(e,g,p),y="uint8"}else throw new Error(`Field ${h}:${x} has unsupported dtype ${b}`);o.push({id:`${h}:${x}`,group:h,name:x,unit:u,dtype:y,shape:l,values:v,maskIndex:_,mask:null})}for(const f of o){if(f.maskIndex<-1||f.maskIndex>=o.length)throw new Error(`Field ${f.id} has an invalid mask index`);f.maskIndex>=0&&(f.mask=o[f.maskIndex])}const d={};for(const f of o){if(d[f.group]??={},d[f.group][f.name])throw new Error(`Duplicate field ${f.id}`);d[f.group][f.name]=f}return{schema:i,fields:o,groups:d}}function Ya(e,a,t,i){const r=e.fields.find(u=>u.id===a);if(!r)throw new Error(`Unknown field ${a}`);const[c,s,o]=r.shape;let d,f,m;if(t==="xy")[d,f,m]=[c,s,o];else if(t==="xz")[d,f,m]=[c,o,s];else if(t==="yz")[d,f,m]=[s,o,c];else throw new Error(`Unknown slice plane ${t}`);if(!Number.isInteger(i)||i<0||i>=m)throw new Error(`Slice index ${i} is outside ${t}`);const h=r.dtype==="float32"?Float32Array:Uint8Array,x=new h(d*f);for(let u=0;u<f;u+=1)for(let b=0;b<d;b+=1){let l,g,w;t==="xy"?[l,g,w]=[b,u,i]:t==="xz"?[l,g,w]=[b,i,u]:[l,g,w]=[i,b,u],x[b+d*u]=r.values[l+c*(g+s*w)]}return{fieldId:a,plane:t,sliceIndex:i,width:d,height:f,values:x}}const sa=new Map;function nr(e){sa.clear();for(const a of e)sa.set(a.comparison.id,a)}async function ar(e){const a=new Uint8Array(e);if(a[0]===31&&a[1]===139){if(typeof DecompressionStream>"u")throw new Error("This browser cannot decode the field samples. Please use a recent Chrome, Edge, Firefox or Safari.");return new Response(new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}return e}async function tr(e,a,t={}){const i=sa.get(e),r=i?.frameUrls?.[String(a)],c=et(i,a);if(!r)throw new Error(`Frame ${a} is not included in this public preview.`);if(!/^\/?data\/[a-zA-Z0-9_./-]+$/.test(r)||r.split("/").includes(".."))throw new Error("Invalid published field URL.");const s=await fetch(r.replace(/^\//,""),{signal:t.signal});if(!s.ok)throw new Error(`Field sample unavailable (${s.status}).`);const o=await s.arrayBuffer();if(t.signal?.aborted)throw new DOMException("Aborted","AbortError");const d=c?await s0(o,c):await ar(o);if(t.signal?.aborted)throw new DOMException("Aborted","AbortError");return t.withIdentity?{buffer:d,verifiedResource:c}:d}async function ir(e){const a=sa.get(e);if(!a)throw new Error("Unknown public comparison.");return a.metrics??null}const rr={groundTruth:"ground_truth",prediction:"prediction",error:"error"};function cr(e,a,t){if(!e?.origin||!e?.axisSteps)throw new Error("Canonical lattice transform is unavailable");const i=a==="yz"?0:a==="xz"?1:a==="xy"?2:-1;if(i<0)throw new Error(`Unknown slice plane ${a}`);return e.origin.map((r,c)=>r+e.axisSteps[i][c]*t)}function sr(e){let a=0;for(const t of e)Number.isFinite(t)&&(a=Math.max(a,Math.abs(t)));return[-a,a]}function or(e){let a=0;for(const t of e)Number.isFinite(t)&&(a=Math.max(a,Math.abs(t)));return[0,a]}function $a(e,a){const t=rr[a];if(!e)return null;if(e[t])return{ids:[e[t].id],maskId:e[t].mask?.id||null};const i=["x","y","z"].map(r=>e[`${t}.${r}`]).filter(Boolean);return i.length!==3?null:{ids:i.map(r=>r.id),maskId:i[0].mask?.id||null}}function Fn(e,a){const t=e?.groups?.[a],i=$a(t,"groundTruth"),r=$a(t,"prediction"),c=$a(t,"error"),s=i?.ids?.[0]||r?.ids?.[0]||c?.ids?.[0],o=s&&(e.fields?.find(d=>d.id===s)?.unit||Object.values(t||{}).find(d=>d?.id===s)?.unit)||"";return{kind:a,groundTruth:i,prediction:r,error:c,unit:o}}function lr(e,a,t,i,r="magnitude"){if(!a?.ids?.length)return null;if(a.ids.length===1)return{...Ya(e,a.ids[0],t,i),components:null};const c=a.ids.map(d=>Ya(e,d,t,i)),s=["x","y","z"].indexOf(r);if(s>=0)return{...c[s],components:null};const o=new Float32Array(c[0].values.length);for(let d=0;d<o.length;d+=1)o[d]=Math.hypot(c[0].values[d],c[1].values[d],c[2].values[d]);return{...c[0],fieldId:a.ids.join("+"),values:o,components:c.map(d=>d.values)}}function dr(e,{onCameraChange:a,rendererFactory:t=()=>new fi({antialias:!0}),controlsFactory:i=(c,s)=>new pi(c,s),gizmoFactory:r=mi}={}){const c=t();e.appendChild(c.domElement),c.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2));const s=r(e),o=new bi;o.background=new Na("#f4f8fb");const d=new ui(40,1,.001,1e5);d.position.set(8,6,9);const f=i(d,c.domElement);f.enableDamping=!1,o.add(new hi(16777215,6649225,2.4));const m=new gi(16777215,2);m.position.set(3,8,5),o.add(m);const h=new yi(1);o.add(h);let x=[],u=null,b=[],l={mode:"split",opacity:.65},g=!1,w=960,_=540,p=[0,1];function v(){const I=l.sourceRange||p;for(const O of b){const D=O.userData.values;if(!D)continue;const T=O.geometry.attributes.color;for(let z=0;z<D.length;z++){const M=Math.max(0,Math.min(1,(D[z]-I[0])/(I[1]-I[0]||1)));new Na().setHSL(.65*(1-M),.8,.48).toArray(T.array,z*3)}T.needsUpdate=!0}}const y=()=>{for(const I of b)o.remove(I),I.geometry.dispose(),I.material.dispose();b=[]};function S(){for(const I of b){if(I.userData.kind==="slice-outline"){I.material.opacity=1,I.material.depthTest=!1,I.material.depthWrite=!1,I.renderOrder=4;continue}if(I.userData.kind==="section-plane"){I.material.transparent=!0,I.material.opacity=.14,I.material.depthWrite=!1,I.material.depthTest=!0,I.renderOrder=3;continue}const O=I.userData.role==="prediction",D=l.mode==="wire-overlay"&&O&&I.userData.kind==="surface";I.renderOrder=D?3:O?2:1,I.material.transparent=!0,I.material.opacity=l[O?"predictionOpacity":"gtOpacity"]??l.opacity,I.material.depthWrite=!["overlay","wire-overlay"].includes(l.mode),I.isMesh&&(I.userData.kind==="surface"&&Ai(I.geometry,I.material,l.shading),I.material.userData.xray!==D&&(I.material.userData.xray=D,I.material.onBeforeCompile=T=>{D&&(T.fragmentShader=T.fragmentShader.replace("void main() {",`void main() {
if (mod(floor(gl_FragCoord.x / 3.0) + floor(gl_FragCoord.y / 3.0), 2.0) < 1.0) discard;`))},I.material.customProgramCacheKey=()=>D?"field-xray-gaps-1":"field-surface-1",I.material.needsUpdate=!0),I.material.wireframe=D,I.material.depthTest=!D)}}function E(){if(g)return;const I=l.mode==="split"?["gt","prediction"]:[l.mode==="gt"?"gt":l.mode==="prediction"?"prediction":null];c.setScissorTest(!0),I.forEach((O,D)=>{const T=w/I.length;d.aspect=T/_,d.updateProjectionMatrix(),c.setViewport(D*T,0,T,_),c.setScissor(D*T,0,T,_),b.forEach(z=>{z.visible=(!O||z.userData.role===O)&&l[z.userData.role==="prediction"?"showPrediction":"showGt"]!==!1&&(z.userData.kind!=="section-plane"||l.showPlane!==!1)}),c.render(o,d)}),s.update(d)}const A=()=>({position:d.position.toArray(),target:f.target.toArray(),zoom:d.zoom,up:d.up.toArray(),fov:d.fov,near:d.near,far:d.far}),C=()=>{E(),a?.(A())};f.addEventListener("change",C);function k(){const I=e.clientWidth,O=e.clientHeight;I>1&&O>1&&(w=I,_=O),c.setSize(w,_),E()}const F=globalThis.ResizeObserver?new ResizeObserver(k):null;F?.observe(e);const R={setGeometry(I){y();let O=1/0,D=-1/0;for(const z of I?.layers||[])for(const M of z.values||[])O=Math.min(O,M),D=Math.max(D,M);p=[O,D];const T=l.sourceRange||p;for(const z of I?.layers||[]){if(!z.positions.length)continue;const M=new Ot;M.setAttribute("position",new Dt(z.positions,3));const P=z.role==="gt"?1416379:15571026;let G,U;if(z.values){const j=new Float32Array(z.values.length*3);for(let V=0;V<z.values.length;V++){const Z=Math.max(0,Math.min(1,(z.values[V]-T[0])/(T[1]-T[0]||1)));new Na().setHSL(.65*(1-Z),.8,.48).toArray(j,V*3)}M.setAttribute("color",new Dt(j,3))}z.kind==="vectors"||z.kind==="slice-outline"?(G=new Tt({vertexColors:!!z.values,color:z.kind==="slice-outline"?8801732:z.values?16777215:P}),U=new $t(M,G)):(M.computeVertexNormals(),G=new Si({color:z.kind==="section-plane"?9988803:z.values?16777215:P,vertexColors:!!z.values,side:Bi,roughness:.7,transparent:!0,opacity:z.kind==="slice"?.85:l.opacity,depthWrite:l.mode!=="overlay"}),U=new Ft(M,G)),U.userData={role:z.role,kind:z.kind,values:z.values},b.push(U),o.add(U)}S(),E()},setInspection(I,O){for(const T of x)o.remove(T),T.geometry.dispose(),T.material.dispose();x=[];const D=T=>{T.renderOrder=15,o.add(T),x.push(T)};if(I?.corners?.length===4&&I.corners.every(Boolean)){const T=new Ot;T.setAttribute("position",new Ei([0,1,1,2,2,3,3,0].flatMap(z=>I.corners[z]),3)),D(new $t(T,new Tt({color:"#e4ac00",depthTest:!1})))}if(I?.probe&&O){const T=Math.hypot(...O.max.map((M,P)=>M-O.min[P])),z=new Ft(new wi(T*.007,12,8),new xi({color:"#ffffff",wireframe:!0,depthTest:!1}));z.position.fromArray(I.probe),D(z)}E()},setDisplay(I){const O=JSON.stringify(l.sourceRange)!==JSON.stringify(I.sourceRange);l={...l,...I},S(),O&&v(),E()},setCamera(I){d.position.fromArray(I.position),f.target.fromArray(I.target),d.zoom=I.zoom??1,d.up.fromArray(I.up||[0,1,0]),I.fov&&(d.fov=I.fov),I.near&&(d.near=I.near),I.far&&(d.far=I.far),d.updateProjectionMatrix(),f.update(),d.position.fromArray(I.position),d.lookAt(f.target),C()},capture(){if(g)throw Error("3D unavailable");E();const I=document.createElement("canvas");I.width=c.domElement.width,I.height=c.domElement.height;const O=I.getContext("2d");return O.drawImage(c.domElement,0,0),s.capture(O,I.width,I.height,I.width/w),I},getCamera:A,preset(I,O){const D=_i(I,O,w/(l.mode==="split"?2:1)/_,d.fov);D&&R.setCamera(D)},fit(I){if(!I)return;const O=new On(...I.min).add(new On(...I.max)).multiplyScalar(.5),D=new On(...I.max).sub(new On(...I.min)).length()||1;d.position.copy(O).add(new On(.8,.65,.9).multiplyScalar(D)),f.target.copy(O),d.near=D/1e4,d.far=D*100,d.zoom=1,h.scale.setScalar(D*.15),h.position.copy(O),u&&(o.remove(u),u.geometry.dispose(),u.material.dispose()),u=new vi(D*1.3,12,13294052,14740209),u.position.set(O.x,I.min[1],O.z),o.add(u),R.preset(I,"reset")},resize:k,dispose(){if(!g){g=!0,F?.disconnect(),f.removeEventListener("change",C),f.dispose(),R.setInspection(null),y();for(const I of[h,u])I?.geometry.dispose(),Array.isArray(I?.material)?I.material.forEach(O=>O.dispose()):I?.material.dispose();s.dispose(),c.dispose(),c.domElement.remove()}}};return k(),R}function at(e,a){return a==null?null:e instanceof Map?e.get(a):e?.rows?.find(t=>t.frame===a)}function ha(e,a){const t=at(e,a);return["train","validation","test"].includes(t?.split)?t.split:"unassigned"}function fr(e,a,t){const i=at(e,a);return t==="all"?!0:t.startsWith("test_")?i?.split==="test"&&(i.prediction_type||"unassigned")===t.slice(5):ha(e,a)===t}function mr(e){return{test_interpolation:e?"Test · 插值":"Test · Interpolation",test_extrapolation:e?"Test · 未来外推":"Test · Future extrapolation",test_unassigned:e?"Test · 类型未声明":"Test · Type undeclared",test_anchor:"Test · Anchor"}}function tt(e,a){const t=at(e,a)?.prediction_type;return["anchor","interpolation","extrapolation"].includes(t)?t:"unassigned"}function br(e,a=!1){return(a?{anchor:"Anchor · 来源帧",interpolation:"时间插值",extrapolation:"未来外推",unassigned:"预测类型未声明"}:{anchor:"Anchor",interpolation:"Interpolation",extrapolation:"Future extrapolation",unassigned:"Prediction type undeclared"})[e]}function it({manifest:e,frame:a}){const{language:t}=ce(),i=ha(e,a),r=t==="zh"?{train:"Train · 训练集",validation:"Validation · 验证集",test:"Test · 测试集",unassigned:"Unassigned · 未划分"}:{train:"Train",validation:"Validation",test:"Test",unassigned:"Unassigned"};return n.createElement(n.Fragment,null,n.createElement("span",{"aria-label":"Frame split",className:`frame-split-badge split-${a==null?"unassigned":i}`,title:t==="zh"?"依据此预测模型的 CSV 声明；并非独立核验训练历史":"Declared by this prediction model’s CSV; training history is not independently verified"},a==null?"—":r[i]),a!=null&&n.createElement("span",{className:"frame-split-badge","aria-label":"Prediction type"},br(tt(e,a),t==="zh")))}function ur({geometry:e,settings:a,bounds:t,loadingFrame:i,error:r,labels:c,cameraState:s,onCameraChange:o,frameSplit:d,displayedFrame:f,controlRef:m,onSceneError:h,inspection:x,onShading:u}){const{tr:b,language:l}=ce(),g=l==="zh",[w,_]=B.useState("reset");function p(D){y.current?.preset(t,D),_(D)}const v=B.useRef(null),y=B.useRef(null),S=B.useRef(!1),[E,A]=B.useState(""),C=B.useRef(o),k=B.useRef(!1);C.current=o,B.useImperativeHandle(m,()=>({capture(){if(!y.current)throw Error("3D unavailable");return y.current.capture()},getCamera(){if(!y.current)throw Error("camera");return y.current.getCamera()},restoreCamera(D){if(!y.current)throw Error("camera");k.current=!0;try{y.current.setCamera(D),_("custom"),C.current?.(y.current.getCamera())}finally{k.current=!1}}}),[]),B.useEffect(()=>{try{y.current=dr(v.current,{onCameraChange:D=>{_("custom"),k.current||C.current?.(D)}})}catch(D){A(`3D unavailable: ${D.message}. Slices remain available.`),h?.(D.message)}return()=>{y.current?.dispose(),y.current=null}},[]),B.useEffect(()=>{if(s){k.current=!0;try{y.current?.setCamera(s)}finally{k.current=!1}}},[s]),B.useEffect(()=>{y.current?.setDisplay(a)},[a]),B.useEffect(()=>{y.current?.setGeometry(e)},[e]),B.useEffect(()=>{y.current?.setInspection(x,t)},[x,t]),B.useEffect(()=>{t&&!S.current&&(y.current?.fit(t),S.current=!0,_("reset"))},[t]),B.useEffect(()=>{t&&w!=="custom"&&p(w)},[a.mode,t]);const F=a.group==="velocity";let R=1/0,I=-1/0;for(const D of e?.layers||[])for(const T of D.values||[])R=Math.min(R,T),I=Math.max(I,T);const O=a.sourceRange||[R,I];return n.createElement("section",{className:"field-viewport","aria-label":b("3D field visualization")},n.createElement("div",{className:"field-view-heading"},n.createElement("strong",null,b(F?"3D velocity field":"3D zero-isosurface")),n.createElement("span",null,b("Frame "),f??"—"," · ",n.createElement(it,{manifest:d,frame:f}))),n.createElement("div",{className:"v2-view-actions",role:"group","aria-label":g?"三维视角":"3D view"},n.createElement(ki,{value:a.shading||"original",onChange:u,disabled:a.group!=="sdf"}),[["reset",g?"重置视角":"Reset view"],["top",g?"顶视图":"Top"],["side",g?"侧视图":"Side"]].map(([D,T])=>n.createElement("button",{key:D,disabled:!t,"aria-pressed":w===D,onClick:()=>p(D)},T)),n.createElement("button",{disabled:!t,onClick:()=>{y.current?.fit(t),_("reset")}},b("Fit view"))),n.createElement("div",{className:"field-scene",ref:v}),n.createElement("div",{className:`field-role-labels ${a.mode==="split"?"split":""}`,"aria-hidden":"true"},a.mode!=="prediction"&&n.createElement("span",null,c?.gt?.displayName?`GT · ${c.gt.displayName} · ${F?"shared scale":"blue"}`:a.previewOnly?b("Dataset preview"):b(F?"GT · shared color scale":"GT · blue"),a.showGt===!1?b(" · hidden"):""),a.mode!=="gt"&&n.createElement("span",null,c?.prediction?.displayName?`Prediction · ${c.prediction.displayName} · ${F?"shared scale":"orange"}`:b(F?"Prediction · shared color scale":"Prediction · orange"),a.showPrediction===!1?b(" · hidden"):a.mode==="wire-overlay"?b(" · X-ray wireframe"):"")),F&&n.createElement("div",{className:"field-legend"},a.component==="magnitude"?b("Speed magnitude"):`Velocity ${a.component?.toUpperCase()}`,n.createElement("div",{className:"field-gradient"}),O.every(Number.isFinite)?`${O[0].toPrecision(3)} — ${O[1].toPrecision(3)}`:b("No valid samples")," ",n.createElement("span",null,a.unit||b("units undeclared"))),i!=null&&n.createElement("div",{role:"status",className:"field-view-loading"},b("Loading frame "),i,"…"),(E||r)&&n.createElement("p",{role:"alert",className:"field-view-error"},E||r),e?.warnings?.length>0&&n.createElement("p",{className:"field-view-warning"},e.warnings.join(" · ")),n.createElement("small",{className:"field-view-help"},n.createElement("span",{className:"shading-note"},g?"平滑只影响 SDF 表面光照；顶点、切片、指标和速度箭头保持原样。":"Smoothing affects SDF surface lighting only; vertices, slices, scores and velocity arrows are unchanged."),b("Drag to orbit · Scroll to zoom · "),b(F?"Instantaneous velocity vectors, not particle paths":"SDF = 0; display-only mesh"),b(" · X / Y up / Z · Preview quality: "),a.quality||b("balanced")))}function Gt({frames:e,current:a,direction:t=1,loop:i=!1,status:r="ready"}){const c=e.indexOf(a),s=c+(t<0?-1:1);return c>=0&&s>=0&&s<e.length?{frame:e[s],action:"select"}:r==="processing"&&t>0?{frame:a,action:"wait"}:r==="ready"&&i&&e.length>1?{frame:t<0?e.at(-1):e[0],action:"select"}:{frame:a,action:"stop"}}function pr({frames:e,displayedFrame:a,requestedFrame:t,status:i="ready",loading:r=!1,previewFps:c=24,onFrame:s,onScrubbing:o,timing:d,frameSplit:f,active:m=!0,controlRef:h,initialPlayback:x}){const{tr:u}=ce(),[b,l]=B.useState(!1),[g,w]=B.useState(x?.loop??!1),[_,p]=B.useState(x?.fps??c),[v,y]=B.useState(x?.speed??1),[S,E]=B.useState("");B.useImperativeHandle(h,()=>({pause:()=>l(!1),getSettings:()=>({loop:g,fps:_,speed:v}),restoreSettings:R=>{l(!1),w(R.loop),p(R.fps),y(R.speed)}}),[g,_,v]),B.useEffect(()=>{m||l(!1)},[m]);const A=B.useRef(!1);B.useEffect(()=>{A.current||E(String(t??a??""))},[t,a]),B.useEffect(()=>{e.length<2&&l(!1)},[e.length]),B.useEffect(()=>{if(!b||r)return;const R=setTimeout(()=>{const I=Gt({frames:e,current:a,loop:g,status:i});I.action==="select"?s(I.frame):I.action==="stop"&&l(!1)},1e3/(Math.max(1,_)*v));return()=>clearTimeout(R)},[b,r,a,e,g,i,_,v,s]);function C(R){l(!1);const I=Gt({frames:e,current:t??a,direction:R,status:i});I.action==="select"&&s(I.frame)}function k(){l(!1);const R=Number(S);e.includes(R)?R!==t&&s(R):E(String(t??a??""))}const F=e.some((R,I)=>I>0&&R!==e[I-1]+1);return n.createElement("section",{className:"field-timeline","aria-label":u("Animation controls")},n.createElement(it,{manifest:f,frame:a}),n.createElement("div",{className:"field-play-controls"},n.createElement("button",{"aria-label":u("First frame"),disabled:!e.length,onClick:()=>{l(!1),s(e[0])}},"⏮"),n.createElement("button",{"aria-label":u("Previous frame"),disabled:e.length<2,onClick:()=>C(-1)},"‹"),n.createElement("button",{className:"primary",disabled:e.length<2,onClick:()=>l(R=>!R)},u(b?"Pause":"Play")),n.createElement("button",{"aria-label":u("Next frame"),disabled:e.length<2,onClick:()=>C(1)},"›"),n.createElement("button",{"aria-label":u("Last frame"),disabled:!e.length,onClick:()=>{l(!1),s(e.at(-1))}},"⏭"),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:g,onChange:R=>w(R.target.checked)}),u(" Loop")),n.createElement("label",null,u("Speed"),n.createElement("select",{value:v,onChange:R=>y(Number(R.target.value))},[.25,.5,1,2].map(R=>n.createElement("option",{key:R,value:R},R,"×"))))),n.createElement("input",{"aria-label":u("Sequence timeline"),type:"range",min:"0",max:Math.max(0,e.length-1),value:Math.max(0,e.indexOf(t??a)),disabled:e.length<2,onPointerDown:()=>{l(!1),o?.(!0)},onPointerUp:()=>o?.(!1),onPointerCancel:()=>o?.(!1),onBlur:()=>o?.(!1),onKeyDown:R=>{o?.(!0),["Home","End"].includes(R.key)&&(R.preventDefault(),l(!1),s(R.key==="Home"?e[0]:e.at(-1)))},onKeyUp:()=>o?.(!1),onChange:R=>{l(!1),s(e[Number(R.target.value)])}}),n.createElement("div",{className:"field-time-labels"},n.createElement("span",null,u("Displayed frame "),n.createElement("strong",null,a??"—"),r?` · ${u("Loading")} ${t}…`:""),n.createElement("label",null,u("Go to frame"),n.createElement("input",{"aria-label":u("Comparison frame"),type:"number",value:S,onFocus:()=>{A.current=!0,l(!1)},onChange:R=>{l(!1),E(R.target.value)},onBlur:()=>{A.current=!1,k()},onKeyDown:R=>{R.key==="Enter"&&k()}})),n.createElement("label",null,u("Preview FPS"),n.createElement("input",{"aria-label":u("Preview FPS"),type:"number",min:"1",max:"120",value:_,onChange:R=>p(Math.max(1,Math.min(120,Number(R.target.value)||24)))})),n.createElement("small",null,d?.fps>0&&Number.isFinite(d.originFrame)?`${u("Time")}: ${((a-d.originFrame)/d.fps+(d.offsetSeconds||0)).toFixed(3)} s`:u("Playback timing only — not physical simulation time"))),n.createElement("small",null,e.length,u(" available frames"),F?u(" · Missing frames skipped; no interpolation"):"",i==="processing"?u(" · Processing continues; playback waits at the latest frame"):i==="error"?u(" · Processing failed; completed frames remain available"):""))}function hr(e,a){if(!e)return{valid:0,total:0,fraction:null};const t=e.values.length;let i=0;for(let r=0;r<t;r++)(!a||a.values[r])&&Number.isFinite(e.values[r])&&i++;return{valid:i,total:t,fraction:t?i/t:null}}function gr(e,a){return Number.isFinite(e)&&e>0?a?[0,e]:[-e,e]:null}const yr=e=>Math.max(0,Math.min(1,e)),$n=(e,a,t)=>e.map((i,r)=>Math.round(i+(a[r]-i)*t));function m0(e,a,t){const[i,r]=a,c=r===i?t==="error"?.5:0:yr((e-i)/(r-i));return t==="error"?c<.5?$n([32,91,177],[246,248,250],c*2):$n([246,248,250],[201,66,55],(c-.5)*2):t==="prediction"?$n([255,244,221],[224,119,32],c):t==="absolute-error"?$n([246,240,252],[103,32,150],c):$n([235,244,252],[31,111,176],c)}function b0(e,a,t,i,r,c){const{x:s=0,z:o=0,width:d=a.width,height:f=a.height}=c??{},m=e.createImageData(d,f);for(let h=0;h<f;h++)for(let x=0;x<d;x++){const u=x+s+a.width*(h+o),b=4*(x+d*(f-1-h)),l=a.values[u],g=(!t||t[u])&&Number.isFinite(l)?m0(l,i,r):(x+h)%6<3?[205,213,219]:[238,242,245];m.data[b]=g[0],m.data[b+1]=g[1],m.data[b+2]=g[2],m.data[b+3]=255}e.putImageData(m,0,0)}const Wt=e=>Math.max(0,Math.min(1,e));function rt({slice:e,maskSlice:a,range:t,palette:i="ground-truth",crosshair:r,onCrosshair:c,plane:s,aspect:o,region:d=null,label:f,viewport:m}){const h=B.useRef(null);return B.useEffect(()=>{const x=h.current;if(!x||!e)return;const{width:u=e.width,height:b=e.height}=m??{};x.width=u,x.height=b;const l=x.getContext?.("2d");if(l){if(b0(l,e,a?.values,t,i,m),e.components){l.strokeStyle=i==="prediction"?"#7c3f0d":"#123e68",l.lineWidth=Math.max(1,e.width/180);const g=s==="xy"?[0,1]:s==="xz"?[0,2]:[1,2],w=Math.max(4,Math.ceil(Math.max(e.width,e.height)/18));for(let _=w/2;_<e.height;_+=w)for(let p=w/2;p<e.width;p+=w){const v=Math.floor(p)+e.width*Math.floor(_);if(a&&!a.values[v])continue;const[y,S]=s==="oblique"?ti(e,v):g.map(R=>e.components[R][v]),E=Math.hypot(y,S);if(!Number.isFinite(E)||E<1e-8)continue;const A=Math.min(w*.42,w*.18+Math.log1p(E)*w*.08),C=y/E*A,k=-S/E*A,F=e.height-1-_;l.beginPath(),l.moveTo(p,F),l.lineTo(p+C,F+k),l.lineTo(p+C-C*.35+k*.25,F+k-k*.35-C*.25),l.moveTo(p+C,F+k),l.lineTo(p+C-C*.35-k*.25,F+k-k*.35+C*.25),l.stroke()}}if(d){const[g,w]=zt(e.width,d.slice(0,2)),[_,p]=zt(e.height,d.slice(2,4));l.strokeStyle="#9c6900",l.lineWidth=Math.max(1,e.width/180),l.fillStyle="rgba(255,211,62,.17)",l.fillRect(g,e.height-1-p,w-g+1,p-_+1),l.strokeRect(g+.5,e.height-p-.5,Math.max(0,w-g),Math.max(0,p-_))}if(r){const g=r[0]*u,w=(1-r[1])*b;l.strokeStyle="#111",l.lineWidth=Math.max(.5,u/350),l.setLineDash([3,3]),l.beginPath(),l.moveTo(g,0),l.lineTo(g,b),l.moveTo(0,w),l.lineTo(u,w),l.stroke(),l.setLineDash([])}}},[e,a,t,i,r,s,d,m]),n.createElement("canvas",{ref:h,"aria-label":f,className:"slice-canvas",style:{aspectRatio:o||"auto",height:"auto"},onClick:x=>{if(!e||!c)return;const u=x.currentTarget.getBoundingClientRect();c([Wt((x.clientX-u.left)/u.width),Wt(1-(x.clientY-u.top)/u.height)])}})}const Le=e=>Number.isFinite(e)?e.toPrecision(5):"N/A";function vr({metadata:e,labels:a,single:t,group:i,epe:r,unit:c,local:s,whole:o,counts:d,probes:f,sourceRange:m,errorRange:h,metrics:x,titles:u,aspects:b}){return JSON.parse(JSON.stringify({schema:"oceanscope.field-report.v1",metadata:e,labels:a,single:t,group:i,epe:r,unit:c||"undeclared",local:t?null:s,whole:t?null:o,counts:d.slice(0,t?1:3),probes:f.slice(0,t?1:3),sourceRange:m,errorRange:t?null:h,savedFrameMetrics:t?null:x?.[i]??null,titles:u.slice(0,t?1:3),aspects:b.slice(0,t?1:3),scope:"Slice statistics and saved volume metrics are distinct; shading never changes measurements."}))}async function _r(e,a,t,i,r){const c=i==="zh",s=document.createElement("canvas");s.width=1920,s.height=1800;const o=s.getContext("2d"),d=e.metadata,f="#243f56",m="#5c7487";o.fillStyle="white",o.fillRect(0,0,s.width,s.height);function h(p,v,y,S=23,E=f,A=1808){o.font=`${S}px Segoe UI, Microsoft YaHei, sans-serif`,o.fillStyle=E,o.fillText(String(p),v,y,A)}function x(p,v,y,S,E=21){o.font=`${E}px Segoe UI, Microsoft YaHei, sans-serif`;let A="",C=0;for(const k of String(p))o.measureText(A+k).width>S?(h(A,v,y+C*(E+7),E,m,S),C++,A=k):A+=k;return h(A,v,y+C*(E+7),E,m,S),C+1}function u(p,v,y,S,E,A=p.width/p.height){const C=Math.min(S,E*A),k=C/A;o.drawImage(p,v+(S-C)/2,y+(E-k)/2,C,k)}h(c?"OceanScope | 场比较汇报":"OceanScope | Field comparison report",56,64,38),h("v2.10",1760,64,24),h(`A · ${e.labels.a}`,56,108,25,"#168ba9",870),e.single||h(`B · ${e.labels.b}`,986,108,25,"#c6752a",878),h(`${c?"帧":"Frame"} ${d.frame} · ${e.group.toUpperCase()} ${d.component} · ${d.plane?.startsWith("oblique")?`${(d.rotation_axis||"y").toUpperCase()} ${d.angle_degrees}° / ${Le(d.section_percent)}%`:d.plane.toUpperCase()+" / "+d.slice_index} · ${c?"数值单位":"Value unit"} ${e.unit}`,56,151),h(e.single?c?"单组 GT；未提供预测，不计算比较误差。":"Single GT; no prediction and no comparison errors.":e.group==="sdf"?c?"SDF 数值差，不等于水面高度差；有效范围以当前数据的掩码为准。":"SDF field differences are not surface-height errors; validity follows the supplied masks.":c?"速度分量差 / 端点误差；瞬时矢量不是粒子轨迹。":"Velocity component differences / endpoint errors; instantaneous vectors are not particle paths.",56,190,22,m),h(`${c?"三维显示":"3D view"}: ${d.mode} · A ${d.gt_visible?"on":"off"}${e.single?"":` / B ${d.prediction_visible?"on":"off"}`} · ${c?"着色":"shading"}: ${d.shading||"original"} · ${c?"显示精度":"quality"}: ${d.preview_quality}`,56,228,22,m),o.fillStyle="#f4f8fb",o.fillRect(56,250,1808,480),u(a,56,250,1808,480);const b=t.length,l=28,g=(1808-l*(b-1))/b;if(t.forEach((p,v)=>{const y=56+v*(g+l),S=v===2?e.errorRange:e.sourceRange;h(e.titles[v],y,782,25,f,g),h(`${Le(S[0])} … ${Le(S[1])} ${e.unit}`,y,818,21,m,g),o.imageSmoothingEnabled=!1,u(p,y,840,g,310,e.aspects[v]),o.imageSmoothingEnabled=!0;const E=o.createLinearGradient(y,0,y+g,0);E.addColorStop(0,v===2?e.epe?"#f6f0fc":"#205bb1":"#ebf4fc"),v===2&&!e.epe&&E.addColorStop(.5,"#f6f8fa"),E.addColorStop(1,v===2?e.epe?"#672096":"#c94237":"#1f6fb0"),o.fillStyle=E,o.fillRect(y,1170,g,14),h(`${c?"有效":"Valid"}: ${e.counts[v].valid}/${e.counts[v].total} · ${c?"探针":"Probe"}: ${Le(e.probes[v])} ${e.unit}`,y,1220,20,m,g)}),h(c?"当前切片与局部区域":"Current slice and selected region",56,1280,27),e.single)h(c?"仅展示 GT 切片及有效样本；无 A/B 差异统计。":"GT slice and validity only; no A/B statistics.",56,1335,23,m);else{const p=[[c?"完整切片":"Full slice",e.whole],...e.local?.region?[[c?"黄色选区":"Yellow region",e.local]]:[]];h(`${e.epe?"Mean EPE":c?"平均有符号差":"Mean signed"} | ${e.epe?"RMS EPE":"MAE / RMSE"} | ${c?"共同有效 / 候选":"Common valid / candidates"}`,400,1280,22,m,1460),p.forEach(([v,y],S)=>{const E=1310+S*65;o.fillStyle="#f1f6f9",o.fillRect(56,E,1808,55),h(v,76,E+36),h(`${Le(y?.mean)} | ${e.epe?Le(y?.rmse):`${Le(y?.mae)} / ${Le(y?.rmse)}`} ${e.unit} | ${y?.count??0}/${y?.total??0} (${Le((y?.coverage??0)*100)}%)`,400,E+36,24)})}h(c?"已有全域指标 · 当前帧 · 原始有效范围":"Saved volume metrics · current frame · original support",56,1480,27);const w=e.savedFrameMetrics;if(e.single||!w||w.blocked)h(e.single?c?"不适用：单组查看。":"Not applicable: single dataset.":c?"此帧无可用评分。":"No available scores for this frame.",56,1530,24,m);else{const p=e.group==="sdf"?["mae","rmse","fluidIoU","coverage"]:["meanEpe","epeRmse","coverage"];h(p.map(v=>`${v}: ${Le(w[v])}${v==="coverage"||v==="fluidIoU"?"":` ${e.unit}`}`).join("   |   "),56,1530,24)}const _=w?.notice||w?.reason||(e.single?"No prediction provided.":"Missing samples are excluded, never zero.");x(_,56,1575,1808),x(c?"黄色表示选区，虚线表示探针。三维平滑只改变光照法线；原始顶点、切片与指标保持不变。坐标使用源网格坐标单位。":"Yellow marks the region; dashed lines mark the probe. Smooth shading changes lighting normals only. Original vertices, slices and metrics are unchanged. Coordinates use source-grid units.",56,1670,1808,21),h(`${d.comparison_id} · ${c?"完整设置与数值请另存汇报 JSON":"Save report JSON for complete settings and values"}`,56,1760,20,m),await Pi(s,r)}function Er(e,a){let t=1/0,i=-1/0;return e.forEach((r,c)=>{if(!r)return;const s=a[c];for(let o=0;o<r.values.length;o+=1){if(s&&!s.values[o])continue;const d=r.values[o];Number.isFinite(d)&&(t=Math.min(t,d),i=Math.max(i,d))}}),Number.isFinite(t)?[t,i]:[0,1]}function wr({frame:e,group:a,plane:t,sliceIndex:i,crosshair:r,onCrosshair:c,component:s="magnitude",fixedRange:o=null,lattice:d,single:f=!1,label:m="Dataset",frameNumber:h,frameSplit:x,viewMetadata:u={},angle:b=30,sectionPercent:l=50,rotationAxis:g="y",exportStem:w="comparison",errorScale:_,onErrorScale:p,region:v=null,onRegion:y,onInspection:S,inspectionContext:E,busy:A=!1,captureScene:C,reportReady:k=!1,reportLabels:F={},savedMetrics:R}){const{tr:I,language:O}=ce(),D=O==="zh",T=B.useRef(null),[z,M]=B.useState(!1),[P,G]=B.useState(1),[U,j]=B.useState(""),V=_?.locked??z,Z=_?.limit??P,$=W=>p?p({locked:W,limit:Z}):M(W),J=W=>p?p({locked:V,limit:W}):G(W),Q=B.useMemo(()=>Fn(e,a),[e,a]),be=B.useMemo(()=>t==="oblique"?nt(d,b,l,g):null,[t,d,b,l,g]),le=B.useMemo(()=>["groundTruth","prediction","error"].map(W=>t==="oblique"?ii(e,Q[W],s,d,be):lr(e,Q[W],t,i,s)),[e,Q,t,i,s,d,be]),ye=B.useMemo(()=>["groundTruth","prediction","error"].map((W,Y)=>t==="oblique"?le[Y]?.maskSlice:Q[W]?.maskId?Ya(e,Q[W].maskId,t,i):null),[e,Q,t,i,le]),we=B.useMemo(()=>f?null:Zt(le,ye,v),[f,le,ye,v]),Pe=B.useMemo(()=>f?null:Zt(le,ye),[f,le,ye]),Ne=B.useMemo(()=>Ci(d,t,i,be,le[0],v,r),[d,t,i,be,le,v,r]);B.useEffect(()=>{S?.({context:E,value:A?null:Ne})},[S,E,Ne,A]);const ke=o||Er(le.slice(0,2),ye.slice(0,2)),X=a==="velocity"&&s==="magnitude",K=V&&gr(Z,X)||(le[2]?(X?or:sr)(le[2].values):[-1,1]),ae=[f?m:"Ground Truth","Prediction",X?"Endpoint Error |Pred − GT|":"Signed Error (Pred − GT)"],Re=t==="xy"?[0,1]:t==="xz"?[0,2]:[1,2],Ve=be?[Math.max(be.spacing[0],1e-9),be.spacing[1],1]:d?.voxelSize||[1,1,1],He=W=>be?be.degenerate?1:Math.max(.15,(be.range[1]-be.range[0])/((be.height-1)*be.spacing[1])):W.width*Ve[Re[0]]/(W.height*Ve[Re[1]]),on=le.map((W,Y)=>hr(W,ye[Y])),Gn=t==="xy"?2:t==="yz"?0:1,Sn=be?be.point(0,0):d?.origin?.map((W,Y)=>W+i*d.axisSteps[Gn][Y]),Bn=`Frame ${h??"unknown"} | ${ha(x,h)} | ${tt(x,h)} | ${a} ${s} | ${t==="oblique"?`Oblique ${g.toUpperCase()} ${b}° / ${l.toFixed(1)}%`:t.toUpperCase()+" index "+i}`;function Wn(W){const Y=le[0];c([(W%Y.width+.5)/Y.width,(Math.floor(W/Y.width)+.5)/Y.height])}function _a(){Xt(`${w}_${h}_local_diagnosis.json`,JSON.stringify({schema:"oceanscope.slice-diagnosis.v1",metadata:u,group:a,component:s,unit:Q.unit||"undeclared",difference:X?"vector_endpoint_error":"signed_B_minus_A",local:we,whole:Pe,world_region_corners:Ne?.corners,probe_world:Ne?.probe,scope:"current_slice_only_saved_volume_scores_unchanged",validity:"Intersection of finite A/B/error samples and their existing masks"},null,2))}function Yn(){const W=le.map((Y,ee)=>{if(!Y)return null;const me=Math.min(Y.width-1,Math.floor(r[0]*Y.width))+Y.width*Math.min(Y.height-1,Math.floor(r[1]*Y.height));return(!ye[ee]||ye[ee].values[me])&&Number.isFinite(Y.values[me])?Y.values[me]:null});return vr({metadata:{...u,source_color_range:ke,error_color_range:f?null:K,error_range_locked:V,probe_world:Ne?.probe,world_region_corners:Ne?.corners},labels:F,single:f,group:a,epe:X,unit:Q.unit,local:we,whole:Pe,counts:on,probes:W,sourceRange:ke,errorRange:K,metrics:R,titles:ae,aspects:le.map(Y=>Y?He(Y):1)})}async function An(W=!1){try{if(!k)throw Error(D?"等待当前帧加载完成。":"Wait for the current frame.");const Y=C(),ee=Yn();W?Xt(`${w}_${h}_report.json`,JSON.stringify(ee,null,2)):await _r(ee,Y,[...T.current.querySelectorAll("canvas")],O,`${w}_${h}_report.png`),j("")}catch(Y){j(Y.message)}}async function pn(){try{const W=[...T.current.querySelectorAll("canvas")],Y=document.createElement("canvas");Y.width=1800,Y.height=920;const ee=Y.getContext("2d");ee.fillStyle="white",ee.fillRect(0,0,1800,920),ee.fillStyle="#18374d",ee.font="20px sans-serif",ee.fillText("OceanScope | "+w,25,35,1740),ee.fillText(Bn,25,70,1740),ee.fillText("Plane origin (world units): "+(Sn?.map(me=>me.toPrecision(5)).join(", ")||"undeclared"),25,105,1740),W.forEach((me,ve)=>{const Se=25+ve*590,_e=ve===2?K:ke;ee.fillStyle="#18374d",ee.fillText(ae[ve],Se,155,560),ee.fillText(`${_e.map(hn=>hn.toPrecision(4)).join(" to ")} ${Q.unit||"undeclared"}`,Se,185,560);const Ke=He(le[ve]),q=Math.min(555,460*Ke),Qe=q/Ke;ee.drawImage(me,Se,205,q,Qe);const ne=ee.createLinearGradient(Se,0,Se+555,0);ne.addColorStop(0,ve===2?X?"#f6f0fc":"#205bb1":"#ebf4fc"),ve===2&&!X&&ne.addColorStop(.5,"#f6f8fa"),ne.addColorStop(1,ve===2?X?"#672096":"#c94237":"#1f6fb0"),ee.fillStyle=ne,ee.fillRect(Se,700,555,18),ee.fillStyle="#18374d",ee.fillText(`${_e[0].toPrecision(4)}                         ${_e[1].toPrecision(4)} ${Q.unit||""}`,Se,745,555),ee.fillText(`Valid slice samples: ${on[ve].valid}/${on[ve].total}`,Se,780,560)}),ee.fillText(`Source scale: ${o?"fixed":"auto per frame"}${f?"":` | Error scale: ${V?"fixed":"auto per frame"}`}`,25,830,1740),ee.fillText("Slice validity is not full-volume scoring coverage. Checkerboard = invalid. Source fields and scores unchanged.",25,865,1740),await Vi(Y,`${w}_${h}_${t}_${t==="oblique"?b:i}_slices.png`,{...u,source_color_range:ke,error_color_range:K,error_range_locked:V,local_diagnosis:we,world_region_corners:Ne?.corners}),j("")}catch(W){j(W.message)}}return n.createElement("div",{ref:T,inert:A||void 0},n.createElement("div",{className:"frame-split-toolbar"},C&&n.createElement(n.Fragment,null,n.createElement("button",{className:"report-export",disabled:!k,onClick:()=>An()},D?"导出场一页汇报图":"Export field report PNG"),n.createElement("button",{disabled:!k,onClick:()=>An(!0)},D?"导出汇报 JSON":"Export report JSON")),!f&&n.createElement(n.Fragment,null,n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:V,onChange:W=>$(W.target.checked)}),D?"固定误差色标（跨帧）":"Lock error scale across frames"),V&&n.createElement("label",null,D?"误差上限":"Error limit"," ",n.createElement("input",{"aria-label":"Error scale limit",type:"number",min:"0.000001",step:"0.1",value:Z,onChange:W=>{const Y=Number(W.target.value);Y>0&&Number.isFinite(Y)&&J(Y)}}))),n.createElement("button",{onClick:pn,disabled:le.some((W,Y)=>Y<(f?1:3)&&!W)},f?D?"导出切片 PNG":"Export slice PNG":D?"导出并排切片 PNG":"Export slice comparison PNG")),n.createElement("small",null,Bn," · ",D?"有效样本比例仅针对当前切片，不等于全域计算覆盖率。":"Validity below is for this slice, not full-volume scoring coverage."),U&&n.createElement("p",{role:"alert"},U),n.createElement("section",{className:"slice-triptych","aria-label":`${a} synchronized slices`},le.slice(0,f?1:3).map((W,Y)=>{const ee=W&&r?Math.min(W.width-1,Math.floor(r[0]*W.width))+W.width*Math.min(W.height-1,Math.floor(r[1]*W.height)):null,me=ee!==null&&(!ye[Y]||ye[Y].values[ee])&&Number.isFinite(W.values[ee]);return n.createElement("figure",{key:ae[Y]},n.createElement("figcaption",null,n.createElement("strong",null,ae[Y]),n.createElement("span",null,Y===2?`${K[0].toPrecision(3)} … ${K[1].toPrecision(3)}`:`${ke[0].toPrecision(3)} … ${ke[1].toPrecision(3)}`," ",Q.unit||I("(unit undeclared)"))),W?n.createElement(rt,{slice:W,maskSlice:ye[Y],range:Y===2?K:ke,palette:Y===2?X?"absolute-error":"error":"ground-truth",aspect:He(W),crosshair:r,onCrosshair:c,plane:t,region:v}):n.createElement("div",{className:"slice-unavailable"},I("Not available")),n.createElement("small",null,I("Probe: "),me?W.values[ee].toPrecision(6):I("Not valid")," ",Q.unit," · ",a==="velocity"?s:I("SDF")))})),!f&&we&&n.createElement(Ii,{region:v,onRegion:y,local:we,whole:Pe,onLocate:Wn,dimensions:2,unit:Q.unit||(D?"单位未声明":"undeclared"),absolute:X,onExport:_a}),n.createElement("p",{className:"height-note"},D?"三维白圈表示探针在切面上的位置；黄色框为选中区域，不代表水面高度。":"The 3D white ring marks the probe on this slice; the yellow box marks the selected region, not water-surface height."),be&&n.createElement("p",{className:"height-note"},g==="y"?D?"横轴 s 沿切面，纵轴 Y 向上；使用原始网格坐标单位。斜切不会改变下方保存的全域统计。":"Horizontal: along-section distance s; vertical: Y up. Source-grid coordinates. Oblique inspection does not change saved volume statistics.":D?"横纵轴均沿当前倾斜切面，不等于世界坐标中的高度 Y。使用原始网格坐标单位；全域统计保持不变。":"Both axes lie in the tilted plane; the vertical axis is not world height Y. Source-grid coordinates; saved volume statistics remain unchanged."),n.createElement("div",{className:"frame-split-toolbar"},on.slice(0,f?1:3).map((W,Y)=>n.createElement("small",{key:Y},ae[Y],": ",W.valid,"/",W.total," · ",W.fraction==null?"N/A":(100*W.fraction).toFixed(1)+"%"))))}const u0={mae:"MAE",rmse:"RMSE",maxAbsoluteError:"Maximum absolute error",nearSurfaceMae:"Near-surface MAE",signAccuracy:"Sign accuracy",fluidIoU:"Fluid IoU",dice:"Dice",symmetricMeanSurfaceDistance:"Symmetric mean surface distance",hd95:"HD95",meanEpe:"Mean EPE",epeRmse:"EPE RMSE",epeP95:"EPE P95",relativeL2:"Relative L2",meanCosineSimilarity:"Mean cosine similarity",meanAngularErrorDegrees:"Mean angular error",divergenceMae:"Divergence MAE",coverage:"Coverage",validCount:"Valid voxels"},xr=["nearSurfaceMae","rmse","fluidIoU","meanEpe","epeP95","relativeL2","coverage","mae","maxAbsoluteError","signAccuracy","dice","symmetricMeanSurfaceDistance","hd95","epeRmse","componentMae","componentRmse","meanCosineSimilarity","meanAngularErrorDegrees","divergenceMae","validCount","nonFiniteCount","nearSurfaceCount","surfaceSampleCount","angularExcludedCount","divergenceStencilCount","trustedTau","effectiveBand"];Object.assign(u0,{componentMae:"Component MAE (x, y, z)",componentRmse:"Component RMSE (x, y, z)",nonFiniteCount:"Non-finite pairs excluded",nearSurfaceCount:"Near-surface voxels",surfaceSampleCount:"Surface samples (pooled)",angularExcludedCount:"Angular exclusions",divergenceStencilCount:"Divergence stencils",trustedTau:"Trusted truncation τ",effectiveBand:"Effective band"});function Sr({metrics:e,group:a,unit:t,frame:i}){const{tr:r,language:c}=ce(),s=e?.[a],o=a==="sdf"?["mae","rmse","fluidIoU","coverage"]:["meanEpe","epeRmse","coverage"],d=s?xr.filter(m=>s[m]!==void 0):[],f=m=>n.createElement("div",{key:m},n.createElement("span",null,r(u0[m])),n.createElement("strong",null,s[m]===null?r("Not available"):Array.isArray(s[m])?s[m].map(h=>h==null?"N/A":Number(h).toPrecision(4)).join(" / "):typeof s[m]=="number"?s[m].toLocaleString(void 0,m.endsWith("Count")?{}:{maximumSignificantDigits:5}):String(s[m])),n.createElement("small",null,["mae","rmse","maxAbsoluteError","nearSurfaceMae","symmetricMeanSurfaceDistance","hd95","meanEpe","epeRmse","epeP95","componentMae","componentRmse","trustedTau","effectiveBand"].includes(m)?t:m==="coverage"?r("fraction"):m==="meanAngularErrorDegrees"?r("degrees"):m==="divergenceMae"?r(t==="m/s"?"1/s":"velocity / length"):""));return n.createElement("aside",{className:"metrics-panel"},n.createElement("h3",null,a==="sdf"?c==="zh"?"体积 SDF 指标":"Volumetric SDF metrics":c==="zh"?"原网格速度指标":"Native-grid velocity metrics"),n.createElement("p",{className:"metric-scope"},c==="zh"?`帧 ${i??"—"} · 原网格有效体素 · 不随选区改变`:`Frame ${i??"—"} · Valid native-grid voxels · Independent of ROI`),s?.notice&&n.createElement("p",{role:"note"},c==="zh"&&s.noticeZh?s.noticeZh:r(s.notice)),s?.blocked?n.createElement("p",{className:"score-blocked"},r(s.reason)||r("Scores blocked: declare field semantics and units.")):s?n.createElement(n.Fragment,null,n.createElement("div",{className:"metric-grid"},o.filter(m=>d.includes(m)).map(f),d.filter(m=>m.endsWith("Count")).map(f)),n.createElement("details",null,n.createElement("summary",null,c==="zh"?"更多指标":"More metrics"),n.createElement("div",{className:"metric-grid"},s.nearSurfaceDomain&&n.createElement("p",null,r(s.nearSurfaceDomain),n.createElement("br",null),r("Band: "),s.effectiveBand?.toPrecision(4)," ",t),d.filter(m=>!o.includes(m)&&!m.endsWith("Count")).map(f)))):n.createElement("p",null,r("Metrics are not available for this frame.")))}const xn="Common valid finite SDF voxels M; N = |M|. Interior means SDF ≤ 0.",tn="Common valid finite velocity voxels M; not automatically restricted to fluid interior.",pe=(e,a,t,i,r,c,s,o="")=>({id:e,label:a,formula:t,unitKind:i,direction:r,group:c,domain:s,caveats:o}),ct=[pe("mae","Water-surface elevation MAE","mean |ηp − ηg|","length","Lower","elevation","Paired trustworthy world-Y zero-crossing columns on common XZ lattice.","Not crest-to-trough wave height or Hs. Filled exterior, missing support and multiple crossings are excluded; inspect both coverage denominators."),pe("rmse","Water-surface elevation RMSE","sqrt(mean (ηp − ηg)^2)","length","Lower","elevation","Same paired height columns.","Full-resolution aligned SDF, never preview mesh."),pe("maxAbsoluteError","Maximum elevation error","max |ηp − ηg|","length","Lower","elevation","Same paired height columns."),pe("coverage","Height paired coverage","paired valid columns / GT valid columns","fraction","Context","elevation","GT reconstructible columns.","Zero denominator: N/A. Not SDF voxel coverage."),pe("gtCoverage","GT reconstructible coverage","GT valid columns / candidate XZ columns","fraction","Context","elevation","All candidate XZ columns.","Read with paired coverage to expose excluded GT surfaces."),pe("mae","SDF MAE","Σ |p − g| / N","length","Lower","sdf",xn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),pe("rmse","SDF RMSE","√(Σ (p − g)² / N)","length","Lower","sdf",xn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),pe("maxAbsoluteError","Maximum absolute error","max |p − g|","length","Lower","sdf",xn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),pe("nearSurfaceMae","Near-surface MAE","mean |clipτ(p) − clipτ(g)| on B","length","Lower","sdf","B = M ∩ {|g| ≤ effective band}, including numerical tolerance.","GT defines B. For TSDF, band ≤ shared τ; clip both values at τ. Shared τ is min of both TSDF τ values, or the single TSDF τ in a mixed pair. No clipping for full/full."),pe("signAccuracy","Sign accuracy","count[(p ≤ 0) = (g ≤ 0)] / N","fraction","Higher","sdf",xn),pe("fluidIoU","Fluid IoU","|P ∩ G| / |P ∪ G|","fraction","Higher","sdf",xn,"P and G are predicted and GT interior sets in M. Both empty: 1."),pe("dice","Dice","2 |P ∩ G| / (|P| + |G|)","fraction","Higher","sdf",xn,"Both interior sets empty: 1."),pe("symmetricMeanSurfaceDistance","Symmetric mean surface distance","mean(D(G→P) ∪ D(P→G))","length","Lower","sdf","Pooled nearest distances between sampled zero crossings; each surface uses its own valid support.","Approximation, at most 4096 samples per surface. Not exact continuous-mesh distance; unavailable if either surface is empty."),pe("hd95","HD95","percentile95(D(G→P) ∪ D(P→G))","length","Lower","sdf","Same pooled sampled-surface distances.","Linear percentile interpolation; not maximum Hausdorff distance. Surface-sampling limitations apply."),pe("meanEpe","Mean EPE","mean ‖p − g‖₂","speed","Lower","velocity",tn),pe("epeRmse","EPE RMSE","√mean ‖p − g‖₂²","speed","Lower","velocity",tn),pe("epeP95","EPE P95","percentile95(‖p − g‖₂)","speed","Lower","velocity",tn,"Linear interpolation between ordered samples."),pe("componentMae","Component MAE (x, y, z)","mean |pₖ − gₖ|, k = x,y,z","speed","Lower","velocity",tn),pe("componentRmse","Component RMSE (x, y, z)","√mean (pₖ − gₖ)², k = x,y,z","speed","Lower","velocity",tn),pe("relativeL2","Relative L2","√(Σ ‖p − g‖₂² / Σ ‖g‖₂²)","dimensionless","Lower","velocity",tn,"Unavailable when GT energy is zero; no artificial epsilon in denominator."),pe("meanCosineSimilarity","Mean cosine similarity","mean clamp((p·g)/(‖p‖₂ ‖g‖₂), −1, 1)","dimensionless","Higher","velocity",tn,"Exclude either magnitude ≤ ε (default 1e−8)."),pe("meanAngularErrorDegrees","Mean angular error","mean acos(cosine) × 180/π","degrees","Lower","velocity",tn,"Same nonzero-vector subset as cosine similarity."),pe("divergenceMae","Divergence MAE","mean |∇·p − ∇·g|","inverseTime","Lower","velocity","Six valid neighboring samples; finite central-difference divergence. Borders excluded.","Σₖ (vₖ(i+eₖ) − vₖ(i−eₖ))/(2hₖ). Orthogonal aligned lattice. Divergence mismatch, not absolute incompressibility."),pe("coverage","Coverage","N / total lattice voxels","fraction","Context","both","Reported separately for SDF and velocity.","Always read with the error: small valid support can hide missing predictions.")];function Br(){return{schema:1,notation:"g = Ground Truth; p = Prediction. These are evaluation metrics, not a weighted training loss.",sequence:"Equal weight per valid frame, not pooled voxels. Excluded frame counts are reported. Population standard deviation; interpolated P95.",metrics:ct}}function Ar(e){const a=e.filter(o=>typeof o=="number"&&Number.isFinite(o)).sort((o,d)=>o-d);if(!a.length)return{median:null,p95:null,stddev:null};const t=o=>{const d=(a.length-1)*o,f=Math.floor(d),m=d-f;return a[f]*(1-m)+a[Math.min(f+1,a.length-1)]*m},i=a.reduce((o,d)=>Math.max(o,Math.abs(d)),0),r=a.map(o=>i?o/i:0),c=r.reduce((o,d)=>o+d/a.length,0),s=Math.sqrt(r.reduce((o,d)=>o+(d-c)**2/a.length,0))*i;return{median:t(.5),p95:t(.95),stddev:Number.isFinite(s)?s:null}}function p0(e){if(!Number.isSafeInteger(e?.frame)||!Number.isSafeInteger(e?.prediction_origin_frame)||!Number.isFinite(e?.fps)||e.fps<=0||e.prediction_type==="extrapolation"&&e.frame<=e.prediction_origin_frame)return null;const a=(e.frame-e.prediction_origin_frame)/e.fps;return Number.isFinite(a)?a:null}const kr={length:"m",speed:"m/s",inverseTime:"1/s",degrees:"degrees",fraction:"fraction",dimensionless:"dimensionless"};function Cr(e,a={}){return e.flatMap(t=>ct.filter(i=>i.group===t||i.group==="both"&&t!=="elevation").flatMap(i=>{const r=i.unitKind==="length"?a.sdf??"m":i.unitKind==="speed"?a.velocity??"m/s":i.unitKind==="inverseTime"&&a.velocity&&a.velocity!=="m/s"?`(${a.velocity}) / length`:kr[i.unitKind],c={group:t,key:i.id,label:i.label,unit:r,direction:i.direction};return i.id==="componentMae"||i.id==="componentRmse"?["x","y","z"].map((s,o)=>({...c,id:`${t}.${i.id}.${s}`,index:o,label:`${i.id==="componentMae"?"Component MAE":"Component RMSE"} ${s.toUpperCase()}`})):[{...c,id:`${t}.${i.id}`}]}))}function Ir({metrics:e,frames:a=[],expectedFrames:t=[],groups:i=[],status:r,units:c,frameSplit:s,frameSubset:o="all"}){const d=Object.values(e?.settings?.sdf||{}).some(_=>_?.semantics==="water_interior"),f=d?"gt_water_common_distance_support":e?.settings?.sdfEvaluationRegion||"full_domain",m=Cr(i,c).map(_=>({..._,label:_.label+(d&&_.group==="sdf"?["fluidIoU","dice","signAccuracy","symmetricMeanSurfaceDistance","hd95"].includes(_.key)?" (full domain)":" (conditional GT-water support)":"")+(f==="gt_water"&&_.group==="sdf"?["fluidIoU","dice","symmetricMeanSurfaceDistance","hd95"].includes(_.key)?" (full domain)":" (GT water)":"")})),h=new Set(a),x=[...t,...a,...Object.keys(e?.frames||{}).map(Number),...e?.missingPredictionFrames||[]],u=new Map((s?.rows??[]).map(_=>[_.frame,_])),b=[...new Set(x.filter(Number.isInteger))].sort((_,p)=>_-p).filter(_=>fr(u,_,o)),l=b.map(_=>{const p=e?.frames?.[_],v={};for(const E of m){const A=p?.[E.group],C=A?.[E.key],k=E.index===void 0?C:C?.[E.index];v[E.id]=!A?.blocked&&Number.isFinite(k)?k:null}const y=i.filter(E=>E!=="elevation"&&p?.[E]?.blocked).map(E=>`${E}: ${p[E].reason||"Scoring blocked"}`).join("; "),S=u.get(_);return{frame:_,elevationAudit:p?.elevation??null,algorithmVersion:e?.algorithmVersion??"legacy undeclared",split:ha(u,_),predictionType:tt(u,_),predictionOriginFrame:S?.prediction_origin_frame??null,fps:S?.fps??null,horizonSeconds:p0(S),available:h.has(_),calculated:!!p,reason:y,values:v}}),g=m.map(_=>{const p=l.map(S=>S.values[_.id]).filter(Number.isFinite),v=p.length,y=v?p.reduce((S,E)=>S+E/v,0):null;return{..._,mean:y,...Ar(p),minimum:v?p.reduce((S,E)=>Math.min(S,E)):null,maximum:v?p.reduce((S,E)=>Math.max(S,E)):null,valid:v,excluded:l.length-v,total:l.length}}),w=[...new Set(b.flatMap(_=>i.filter(p=>p!=="elevation").flatMap(p=>e?.frames?.[_]?.[p]?.blocked?[`${p.toUpperCase()}: ${e.frames[_][p].reason||"Scoring prerequisites not met"}`]:[])))];return{columns:m,rows:l,summary:g,blockedReasons:w,evaluationRegion:f,frameSubset:o,sdfValidation:e?.settings?.sdf||{},total:l.length,calculated:l.filter(_=>_.calculated).length,complete:r==="ready"&&l.length>0&&l.every(_=>_.calculated)&&!w.length,status:r}}function Me(e){return Number.isFinite(e)?Number(e.toPrecision(6)).toString():"N/A"}const Mr=e=>{const a=e==null?"N/A":String(e);return/[",\r\n]/.test(a)?`"${a.replaceAll('"','""')}"`:a};function Yt(e,a){const t=e.complete?"complete":"partial",i=a==="frames"?[["frame","frame_status","sequence_status",...e.columns.map(r=>`${r.id} [${r.unit}]`),"excluded_reason"],...e.rows.map(r=>[r.frame,r.reason?"scoring blocked":r.calculated?"calculated":"not calculated",t,...e.columns.map(c=>r.values[c.id]),r.reason||""])]:[["metric","unit","mean","minimum","maximum","valid_frames","excluded_frames","total_frames","sequence_status","median","p95","stddev"],...e.summary.map(r=>[r.id,r.unit,r.mean,r.minimum,r.maximum,r.valid,r.excluded,r.total,t,r.median,r.p95,r.stddev])];return a==="frames"&&(i[0].push("split","prediction_type","prediction_origin_frame","fps","horizon_seconds"),i.slice(1).forEach((r,c)=>r.push(e.rows[c].split||"unassigned",e.rows[c].predictionType||"unassigned",e.rows[c].predictionOriginFrame,e.rows[c].fps,e.rows[c].horizonSeconds))),a==="frames"&&(i[0].push("algorithm_version","elevation_valid_columns","elevation_gt_valid_columns","elevation_candidate_columns","elevation_reason","elevation_excluded_reasons"),i.slice(1).forEach((r,c)=>{const s=e.rows[c],o=s.elevationAudit;r.push(s.algorithmVersion,o?.validColumns,o?.gtValidColumns,o?.candidateColumns,o?.reason||(o?"":"Not calculated by this result version"),JSON.stringify(o?.excludedReasons??{}))})),i[0].push("frame_subset"),i.slice(1).forEach(r=>r.push(e.frameSubset||"all")),i[0].push("sdf_error_region","geometry_region"),i.slice(1).forEach(r=>r.push(e.evaluationRegion||"full_domain","full_domain")),i[0].push("gt_validation_mode","prediction_validation_mode","gt_override_reason","prediction_override_reason"),i.slice(1).forEach(r=>r.push(e.sdfValidation?.gt?.validationMode||"legacy undeclared",e.sdfValidation?.prediction?.validationMode||"legacy undeclared",e.sdfValidation?.gt?.overrideReason||"",e.sdfValidation?.prediction?.overrideReason||"")),i.map(r=>r.map(Mr).join(",")).join(`\r
`)}function Nr(e,a,t=640){const r=e.filter(l=>Number.isFinite(l.values[a])).map(l=>l.values[a]);let c=r.length?Math.min(...r):0,s=r.length?Math.max(...r):1;if(c===s){const l=Math.max(Math.abs(c)*.05,1e-6);c-=l,s+=l}const o=e[0]?.frame??0,d=e.at(-1)?.frame??o,f=l=>d===o?(t+42)/2:64+(l-o)/(d-o)*(t-86),m=l=>180-(l-c)/(s-c)*150,h=[],x=[];let u=[],b=null;for(const l of e){const g=l.values[a];if((!Number.isFinite(g)||b!==null&&l.frame!==b+1)&&(u.length&&h.push(u),u=[]),Number.isFinite(g)){const w={frame:l.frame,value:g,x:f(l.frame),y:m(g)};u.push(w),x.push(w)}b=l.frame}return u.length&&h.push(u),{min:c,max:s,start:o,end:d,x:f,y:m,points:x,segments:h}}function Rr(e,a,t=.9){const i=e.filter(c=>Number.isFinite(c.values[a?.id]));return{worst:a?.direction==="Context"?[]:[...i].sort((c,s)=>(a?.direction==="Higher"?1:-1)*(c.values[a.id]-s.values[a.id])||c.frame-s.frame).slice(0,5),lowCoverage:e.filter(c=>Number.isFinite(c.values[`${a?.group}.coverage`])&&c.values[`${a.group}.coverage`]<t),unavailable:e.filter(c=>!Number.isFinite(c.values[a?.id]))}}const Or=e=>`"${String(e??"undeclared").replaceAll('"','""')}"`;function $r(e,a,t){const i=[["report_identifier",a],["frame_subset",e.frameSubset],["frame_numbers",e.rows.map(r=>r.frame).join(";")],["frame_count",e.rows.length],["status",e.complete?"complete":"partial"],["sdf_error_region",e.evaluationRegion],["units",JSON.stringify(e.columns.map(r=>({metric:r.id,unit:r.unit})))],["sdf_declarations",JSON.stringify(e.sdfValidation)],["split_manifest_sha256",t?.sha256],["aggregation","Equal weight per valid frame; mean of frame RMSE, not pooled voxel RMSE. N/A excluded, never zero."],["valid_counts",JSON.stringify(e.summary.map(r=>({metric:r.id,valid:r.valid,total:r.total})))],["limitations","SDF error is not wave-height error. Read error with coverage. Frame numbers do not certify physical-time alignment. Split membership is declared, not independently verified. Exterior-filled distances are conditional, not full-domain accuracy."],["provenance","Use the saved-result ZIP for source identities and full scoring protocol. This notes file describes the currently selected report subset."]];return[["field","value"],...i].map(r=>r.map(Or).join(",")).join(`\r
`)}function Tr({report:e,metric:a,onFrame:t,onDownload:i,comparisonId:r,frameSplit:c}){const{language:s,tr:o}=ce(),d=s==="zh",f=(b,l)=>d?l:b,[m,h]=B.useState(.9),x=B.useMemo(()=>Rr(e.rows,a,m),[e.rows,a,m]),u=(b,l)=>b.slice(0,20).map(g=>n.createElement("li",{key:g.frame},n.createElement("button",{disabled:!g.available||!t,"aria-label":`${l==="unavailable"?"Review unavailable frame":l==="coverage"?"Review coverage frame":"Review frame"} ${g.frame}`,onClick:()=>t(g.frame)},g.frame)," · ",Me(l==="coverage"?g.values[`${a?.group}.coverage`]:g.values[a?.id]),l==="unavailable"&&n.createElement("span",null," · ",g.reason||(g.calculated?f("Metric unavailable on this support; see definitions below","该指标在当前有效区域不可用，请查看下方定义"):f("Not calculated / missing frame","尚未计算或帧缺失")))));return n.createElement("details",{className:"frame-review"},n.createElement("summary",null,f("Frame review & report notes","异常帧检查与报告说明")),n.createElement("p",null,f("Review only: no frames are removed and no scores are changed. Lists follow the selected subset and metric. Worst does not mean statistically abnormal.","仅供检查：不剔除帧、不改变数值。列表跟随当前集合和指标；最差帧不等同于统计异常。")),n.createElement("div",{className:"frame-review-grid"},n.createElement("section",null,n.createElement("h4",null,f("Worst 5 frames","表现最差的 5 帧")," · ",o(a?.label)),x.worst.length?n.createElement("ol",null,u(x.worst,"worst")):n.createElement("p",null,f("No rankable finite values. Coverage is context, not accuracy.","没有可排序的有效数值；覆盖率是背景信息，不代表精度。"))),n.createElement("section",null,n.createElement("h4",null,f("Low coverage","低覆盖率")," · ",x.lowCoverage.length),n.createElement("label",null,f("Review threshold","检查阈值")," ",n.createElement("input",{"aria-label":"Coverage review threshold",type:"number",min:"0",max:"1",step:"0.05",value:m,onChange:b=>{const l=Number(b.target.value);b.target.value!==""&&Number.isFinite(l)&&l>=0&&l<=1&&h(l)}})),n.createElement("small",null,f("Below this fraction; review aid, not a scientific pass/fail criterion.","低于此比例时列出；仅辅助检查，不是科研合格线。")),n.createElement("ul",null,u(x.lowCoverage,"coverage"))),n.createElement("section",null,n.createElement("h4",null,f("Unavailable metric","指标不可用")," · ",x.unavailable.length),n.createElement("ul",null,u(x.unavailable,"unavailable")),n.createElement("small",null,f("At most 20 entries per list; all values remain in the frame table and CSV.","每个列表最多显示 20 项，全部数据仍保留在逐帧表格和 CSV。")))),n.createElement("details",null,n.createElement("summary",null,f("How to interpret these results","如何解读这些结果")),n.createElement("ul",null,n.createElement("li",null,f("N/A is not zero: it may mean missing frames, blocked scoring, no valid samples, or an unsupported metric. The list gives known blocking reasons; metric definitions explain other restrictions.","N/A 不是零：可能是缺帧、计算被阻止、无有效样本或指标不适用。列表显示已知阻止原因，其余限制见指标定义。")),n.createElement("li",null,f("A lower error with lower coverage is not automatically better. Compare models on matching frames and common spatial support.","误差更低但覆盖率更低，不自动代表更好。模型比较应使用匹配帧和共同有效空间区域。")),n.createElement("li",null,f("Exterior-filled SDF supports conditional interior distance errors only; it does not certify full-domain distance accuracy. Surface metrics may be unavailable.","水外固定填值的 SDF 只支持有条件的水内距离误差，不能证明全域距离精度；表面指标可能不可用。")),n.createElement("li",null,f("SDF MAE is not wave-height MAE. Sequence means give equal weight to valid frames, not to pooled voxels.","SDF MAE 不等于浪高 MAE。序列均值对有效帧等权，并非将所有体素合并计算。")))),n.createElement("button",{disabled:!e.total,onClick:()=>i(`${r}_${e.frameSubset}_report_notes.csv`,$r(e,r,c))},f("Export report notes CSV","导出报告说明 CSV")))}function Fr({point:e,row:a,selected:t,onFrame:i,language:r}){const c=!!(i&&a?.available),s=a?.predictionType||"unassigned",o={train:"#b66b14",validation:"#8052bc",test:"#008c9c",unassigned:"#7b8794"}[a?.split||"unassigned"];return n.createElement("g",{transform:`translate(${e.x},${e.y})`,role:"button","aria-label":`${r==="zh"?"选择曲线帧":"Select plotted frame"} ${e.frame}`,"aria-disabled":!c,tabIndex:c?0:-1,onClick:()=>c&&i(e.frame),onKeyDown:d=>{c&&["Enter"," "].includes(d.key)&&(d.preventDefault(),i(e.frame))},style:{cursor:c?"pointer":"default"}},n.createElement("title",null,`Frame ${e.frame}: ${e.value} | ${a?.split||"unassigned"} | ${s}`),n.createElement("circle",{r:"7",fill:"transparent"}),t&&n.createElement("circle",{r:"7",fill:"none",stroke:"#d36218",strokeWidth:"2"}),s==="anchor"?n.createElement("rect",{x:"-4",y:"-4",width:"8",height:"8",fill:o}):s==="extrapolation"?n.createElement("path",{d:"M 0 -5 L 5 4 L -5 4 Z",fill:o}):s==="interpolation"?n.createElement("path",{d:"M 0 -5 L 5 0 L 0 5 L -5 0 Z",fill:o}):n.createElement("circle",{r:"3",fill:o}))}function Dr({rows:e,metricKey:a,manifest:t,modelName:i}){const{language:r}=ce(),c=r==="zh",s=new Map;let o=0;const d=new Map((t?.rows??[]).map(f=>[f.frame,f]));for(const f of e){const m=d.get(f.frame);if(m?.prediction_type!=="extrapolation")continue;const h=p0(m);if(h===null){o++;continue}const x=`${m.prediction_origin_frame} / ${m.fps} fps`;s.has(x)||s.set(x,[]),s.get(x).push({frame:f.frame,seconds:h,value:f.values[a]})}return!s.size&&!o?null:n.createElement("details",null,n.createElement("summary",null,i&&`${i} · `,c?"未来外推时间趋势":"Future prediction horizon"),n.createElement("p",null,c?"按声明的输入起点和 FPS 分图；缺失帧不连线，不合并不同预测。":"Separate plots for declared origin and FPS; missing frames are not connected and different predictions are not merged."),o>0&&n.createElement("p",null,c?`${o} 帧缺少有效时间声明，仍使用上方帧号曲线。`:`${o} frame(s) without valid timing; retain the frame-number plot above.`),[...s].map(([f,m])=>{const h=m.filter(w=>Number.isFinite(w.value)),x=Math.max(1,...m.map(w=>w.seconds)),u=h.length?Math.min(...h.map(w=>w.value)):0,b=h.length?Math.max(...h.map(w=>w.value)):1,l=w=>50+w.seconds/x*510,g=w=>160-(w.value-u)/(b-u||1)*120;return n.createElement("figure",{key:f},n.createElement("figcaption",null,c?"预测起点":"Prediction origin"," ",f," · ",a),n.createElement("svg",{role:"img","aria-label":`Prediction horizon ${f}`,viewBox:"0 0 600 200",width:"100%"},n.createElement("line",{x1:"50",x2:"560",y1:"160",y2:"160",stroke:"#a9bac8"}),m.map((w,_)=>{const p=m[_-1];return Number.isFinite(w.value)&&n.createElement("g",{key:w.frame},p&&w.frame===p.frame+1&&Number.isFinite(p.value)&&n.createElement("line",{x1:l(p),y1:g(p),x2:l(w),y2:g(w),stroke:"#008c9c"}),n.createElement("circle",{cx:l(w),cy:g(w),r:"4",fill:"#008c9c"},n.createElement("title",null,w.frame,": ",Me(w.value),"; ",Me(w.seconds)," s")))}),n.createElement("text",{x:"8",y:"40"},Me(b)),n.createElement("text",{x:"8",y:"160"},Me(u)),n.createElement("text",{x:"50",y:"186"},"0"),n.createElement("text",{x:"500",y:"186"},Me(x)," s")))}))}const zr={missing_or_nonfinite_column:["missing or non-finite column","缺失或非有限数值列"],no_interior_to_exterior_span:["no trustworthy interior-to-exterior span","缺少可信的水内至水外跨度"],ambiguous_or_multiple_crossings:["ambiguous or multiple surfaces","交叉不明确或存在多层水面"],crossing_touches_truncation:["crossing touches truncation boundary","交叉接触截断边界"],nonfinite_height:["non-finite height","高度不是有限数值"],nonfinite_difference:["non-finite height difference","高度差不是有限数值"],outside_common_columns:["outside common column support","不在共同有效列内"]},Zr={"No paired trustworthy single-surface columns":"没有可配对的可信单层水面列。","Invalid world-Y lattice":"世界 Y 轴网格无效。","Invalid height input dimensions":"高度输入维度无效。","Height column grids differ":"高度列网格不一致。","Height requires full SDF or trusted TSDF; filled exterior/unknown is not a trustworthy zero crossing":"需要完整 SDF 或可信 TSDF；水外填值或类型未知无法提供可信零交叉。","Height requires validated unchanged SDF distances":"需要经验证且未重建的 SDF 距离。","Height requires axis-aligned world-Y-up lattice":"需要与世界坐标轴对齐、Y 轴向上的网格。","Height requires a comparison with matching declared units":"需要 GT 与预测的声明单位一致。","Height requires finite positive trusted truncation distance":"需要有限、正值且可信的截断距离。"};function Xr({data:e}){const{language:a}=ce(),t=a==="zh",i=r=>{const[c,...s]=r.split(":"),o=s.length?s.join(":"):c;return(s.length?c==="gt"?"GT: ":c==="prediction"?t?"预测：":"Prediction: ":c+": ":"")+(zr[o]?.[t?1:0]??o)};return n.createElement("details",null,n.createElement("summary",null,t?"当前帧高度有效区域与排除原因":"Current-frame height support and exclusions"),e?n.createElement(n.Fragment,null,e.reason&&n.createElement("p",null,t?Zr[e.reason]??e.reason:e.reason),e.blocked&&n.createElement("p",null,t?"此帧高度评分不可用；不能把未评估数量当作零。":"Height scoring unavailable for this frame; unevaluated counts are not zero."),n.createElement("table",{"aria-label":t?"高度有效区域明细":"Height support audit"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,t?"项目／原因":"Support / reason"),n.createElement("th",null,t?"列数":"Columns"))),n.createElement("tbody",null,[[t?"有效配对列":"Valid paired columns","validColumns"],[t?"GT 有效列":"Valid GT columns","gtValidColumns"],[t?"候选水平列":"Candidate horizontal columns","candidateColumns"]].map(([r,c])=>n.createElement("tr",{key:c},n.createElement("th",{scope:"row"},r),n.createElement("td",null,e.blocked||!Number.isFinite(e[c])?"N/A":e[c]))),Object.entries(e.excludedReasons??{}).map(([r,c])=>n.createElement("tr",{key:r},n.createElement("th",{scope:"row"},i(r)),n.createElement("td",null,Number.isFinite(c)?c:"N/A"))))),n.createElement("p",null,t?"配对覆盖率＝配对列／GT 有效列；GT 可重建比例＝GT 有效列／候选列。排除原因不代表模型排名。":"Paired coverage = paired / valid GT columns; GT reconstructible fraction = valid GT / candidate columns. Exclusions are not model rankings.")):n.createElement("p",null,t?"此帧没有高度记录。旧结果需重新创建比较；尚未载入的帧请先选择。":"No height record for this frame. Create a new comparison for legacy results, or select a loaded frame."))}function Pr(e,a){const t=URL.createObjectURL(new Blob(["\uFEFF",a],{type:"text/csv;charset=utf-8"})),i=document.createElement("a");i.href=t,i.download=e,i.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}const Vr=[];function Gr({metrics:e,frames:a,expectedFrames:t=Vr,groups:i,group:r,status:c,currentFrame:s,onFrame:o,onDownload:d=Pr,comparisonId:f="comparison",sdfUnit:m="m",velocityUnit:h="m/s",onReviewSetup:x,frameSplit:u}){const{tr:b,language:l}=ce(),[g,w]=B.useState(()=>u?"test":"all"),_=Object.values(e?.frames||{}).some($=>$.elevation),p=B.useMemo(()=>_?[...i,"elevation"]:i,[i,_]),[v,y]=B.useState(""),S=p.includes(v)?v:r;B.useEffect(()=>y(""),[r]),B.useEffect(()=>w(u?"test":"all"),[u?.sha256,!!u]);const E=B.useMemo(()=>Ir({metrics:e,frames:a,expectedFrames:t,groups:p,status:c,units:{sdf:m,velocity:h},frameSplit:u,frameSubset:g}),[e,a,t,p,c,m,h,u,g]),A=E.columns.filter($=>$.group===S),C=E.summary.filter($=>$.group===S),[k,F]=B.useState(""),[R,I]=B.useState(0),[O,D]=B.useState(640),T=B.useRef(null),z=A.find($=>$.id===k)||A[0];B.useEffect(()=>{if(typeof ResizeObserver>"u")return;const $=new ResizeObserver(([J])=>D(Math.max(280,Math.round(J.contentRect.width))));return $.observe(T.current),()=>$.disconnect()},[]);const M=B.useMemo(()=>Nr(E.rows,z?.id,O),[E.rows,z?.id,O]),P=Math.max(1,Math.ceil(E.rows.length/50)),G=Math.min(R,P-1),U=E.rows.slice(G*50,(G+1)*50),j=B.useMemo(()=>new Map(E.rows.map($=>[$.frame,$])),[E.rows]),V=j.get(s),Z=E.summary.find($=>$.id===z?.id);return n.createElement("section",{className:"sequence-metrics",ref:T,"aria-label":b("Sequence loss analysis")},n.createElement("h2",null,b("Per-frame metrics & sequence averages")),n.createElement("label",null,l==="zh"?"统计组":"Statistics group"," ",n.createElement("select",{"aria-label":"Statistics group",value:S,onChange:$=>y($.target.value)},p.map($=>n.createElement("option",{key:$,value:$},$==="elevation"?l==="zh"?"水面高度":"Water-surface elevation":$.toUpperCase())))),S==="elevation"&&n.createElement("p",null,l==="zh"?"世界 Y 水面高度，不是波峰—波谷浪高或 Hs。固定填值、缺失支持和多层水面不可用于此评分。":"World-Y elevation, not crest-to-trough wave height or Hs. Filled exterior, missing support and multiple surfaces cannot be scored."),S==="elevation"&&n.createElement(Xr,{data:e?.frames?.[s]?.elevation}),n.createElement("p",{className:"research-warning"},g==="test"||g.startsWith("test_")?l==="zh"?"Test 报告：仅汇总清单声明的测试帧。":"Test report: only declared test frames are summarized.":g==="train"?l==="zh"?"Train 报告：训练帧表现，不代表未见数据的泛化效果。":"Train report: training-frame performance, not generalization to unseen data.":l==="zh"?"参考报告：不是独立的 Test 结果。":"Reference report: not a Test-only evaluation."," ",l==="zh"?"划分依据训练方清单，不独立核验训练历史。":"Membership follows the supplied manifest; training history is not independently verified."),n.createElement("div",{className:"frame-split-toolbar"},n.createElement("label",null,l==="zh"?"统计帧集合":"Evaluation subset"," ",n.createElement("select",{"aria-label":"Evaluation subset",value:g,onChange:$=>{w($.target.value),I(0)}},Object.entries({all:l==="zh"?"全部（参考）":"All",train:"Train",validation:"Validation",test:"Test",...mr(l==="zh"),unassigned:l==="zh"?"未划分":"Unassigned"}).map(([$,J])=>n.createElement("option",{key:$,value:$},J)))),n.createElement("small",null,l==="zh"?"仅筛选曲线、统计表和下方 CSV；不改变原始计算或动画。":"Filters curves, tables and the CSVs below; original calculations and playback are unchanged.")),E.total===0&&n.createElement("p",{role:"status"},l==="zh"?"此集合没有已声明的帧；不补零，也不使用其他集合替代。":"No declared frames in this subset; no zeros or fallback to another subset."),n.createElement("p",null,b("SDF error region: "),n.createElement("strong",null,E.evaluationRegion==="gt_water_common_distance_support"?b("Conditional GT-water distance support"):E.evaluationRegion==="gt_water"?b("GT water only (GT SDF < 0)"):b("Full domain (valid pairs)")),b(". Occupancy and surface metrics use their own saved validity rules; they are not certified by the distance mask. Velocity metrics unchanged.")),n.createElement("p",{className:"sequence-partial",role:"status"},E.blockedReasons.length?b("Scoring blocked"):E.complete?l==="zh"?"帧记录处理完成":"Processing complete":b("Partial results")," · ",E.calculated," / ",E.total,b(" frame records processed"),c==="error"?b(" · Processing stopped"):""),n.createElement("p",{role:"status"},E.total?Z?.valid?l==="zh"?`所选指标有效帧：${Z.valid} / ${E.total}；排除 ${Z.excluded} 帧。`:`Selected metric valid frames: ${Z.valid} / ${E.total}; ${Z.excluded} excluded.`:l==="zh"?"所选指标不可用：没有有效数值。处理完成不代表评分有效。":"Selected metric unavailable: no valid values. Completed processing does not imply valid scoring.":l==="zh"?"当前集合为空。":"Selected subset is empty."),E.blockedReasons.length>0&&n.createElement("div",{className:"error",role:"alert"},n.createElement("strong",null,b("No valid loss can be reported for blocked fields.")),E.blockedReasons.map($=>n.createElement("p",{key:$},b($))),n.createElement("p",null,b("Review units and SDF type in Datasets & comparison setup, then click Create comparison again. Old results do not change when declarations are edited. Unit confirmation declares the source scale; it does not convert data.")),x&&n.createElement("button",{onClick:x},b("Review scoring setup"))),n.createElement("p",null,b("Equal weight per valid frame. N/A is excluded, never zero. RMSE and P95 averages are means of frame metrics, not pooled-voxel metrics. No combined training loss.")),n.createElement("div",{className:"sequence-toolbar"},n.createElement("label",null,b("Metric curve"),n.createElement("select",{"aria-label":b("Metric curve"),value:z?.id||"",onChange:$=>F($.target.value)},A.map($=>n.createElement("option",{key:$.id,value:$.id},b($.label))))),n.createElement("span",null,b("Unit: "),b(z?.unit)," · ",z?.direction==="Context"?b("Context metric"):b(z?.direction)+" "+b("is better"))),n.createElement("div",{className:"sequence-readout"},b("Frame "),s??"—",": ",n.createElement("strong",null,Me(V?.values[z?.id])),b(" · Sequence mean: "),n.createElement("strong",null,Me(Z?.mean)),b(" · Valid: "),Z?.valid??0," / ",E.total),n.createElement(Tr,{report:E,metric:z,onFrame:o,onDownload:d,comparisonId:f,frameSplit:u}),n.createElement("p",null,l==="zh"?"对应覆盖率（所选帧均值）":"Associated coverage (selected-frame mean)",": ",Me(E.summary.find($=>$.id===`${S}.coverage`)?.mean),S==="elevation"&&n.createElement(n.Fragment,null," · ",l==="zh"?"GT 可重建比例":"GT reconstructible fraction",": ",Me(E.summary.find($=>$.id==="elevation.gtCoverage")?.mean))),n.createElement(Dr,{rows:E.rows,metricKey:z?.id,manifest:u}),n.createElement("svg",{width:"100%",height:"220",viewBox:`0 0 ${O} 220`,role:"img","aria-label":`${z?.label} over frames; ${b(z?.unit)}`},[M.min,(M.min+M.max)/2,M.max].map(($,J)=>n.createElement("g",{key:J},n.createElement("line",{x1:"64",x2:O-22,y1:M.y($),y2:M.y($),stroke:"#d7e1eb",strokeWidth:".75"}),n.createElement("text",{x:"57",y:M.y($)+4,textAnchor:"end"},Me($)))),Number.isFinite(Z?.mean)&&n.createElement("line",{x1:"64",x2:O-22,y1:M.y(Z.mean),y2:M.y(Z.mean),stroke:"#7a8797",strokeDasharray:"5 4"}),M.segments.map(($,J)=>n.createElement("polyline",{key:J,points:$.map(Q=>`${Q.x},${Q.y}`).join(" "),fill:"none",stroke:"#008c9c",strokeWidth:"2"})),M.points.map($=>n.createElement(Fr,{key:$.frame,point:$,row:j.get($.frame),selected:$.frame===s,onFrame:o,language:l})),Number.isFinite(s)&&n.createElement("line",{x1:M.x(s),x2:M.x(s),y1:"25",y2:"185",stroke:"#d36218",strokeDasharray:"3 3"}),n.createElement("text",{x:"64",y:"205"},M.start),M.end!==M.start&&n.createElement("text",{x:O-22,y:"205",textAnchor:"end"},M.end),n.createElement("text",{x:O/2,y:"205",textAnchor:"middle"},b("Frame"))),n.createElement("small",null,l==="zh"?"颜色：训练橙 / 验证紫 / 测试青 / 未划分灰。形状：Anchor 方形 / 插值菱形 / 外推三角 / 未声明圆点。橙圈为当前帧，灰虚线为均值；缺失值不连线。":"Color: Train amber / Validation purple / Test teal / Unassigned gray. Shape: Anchor square / Interpolation diamond / Future extrapolation triangle / Undeclared circle. Orange ring: displayed frame; gray dashed line: mean. Missing values are not connected."),n.createElement("div",{className:"sequence-detail-tables"},n.createElement("h3",null,S==="elevation"?l==="zh"?"水面高度":"Elevation":b(S==="sdf"?"SDF":"Velocity"),b(" sequence summary")),n.createElement("p",null,l==="zh"?"中位数、P95 和总体标准差描述所选帧的分布，不代表统计显著性。":"Median, P95 and population standard deviation describe selected frames, not statistical significance."),n.createElement("div",{className:"sequence-table-scroll",tabIndex:"0",role:"region","aria-label":b("Scrollable sequence summary")},n.createElement("table",{"aria-label":b("Sequence metric summary")},n.createElement("thead",null,n.createElement("tr",null,["Metric","Unit","Mean",l==="zh"?"中位数":"Median","P95",l==="zh"?"总体标准差":"Population std. dev.","Minimum","Maximum","Valid / total","Excluded"].map($=>n.createElement("th",{key:$},b($))))),n.createElement("tbody",null,C.map($=>n.createElement("tr",{key:$.id},n.createElement("th",{scope:"row"},b($.label)),n.createElement("td",null,b($.unit)),[$.mean,$.median,$.p95,$.stddev,$.minimum,$.maximum].map((J,Q)=>n.createElement("td",{key:Q,title:J==null?"N/A":String(J)},Me(J))),n.createElement("td",null,$.valid," / ",$.total),n.createElement("td",null,$.excluded)))))),n.createElement("h3",null,S==="elevation"?l==="zh"?"水面高度":"Elevation":b(S==="sdf"?"SDF":"Velocity"),b(" per-frame values")),n.createElement("div",{className:"sequence-toolbar"},n.createElement("button",{disabled:G===0,onClick:()=>I(G-1)},b("Previous rows")),n.createElement("span",null,b("Page "),G+1," / ",P,b(" · 50 frames per page")),n.createElement("button",{disabled:G+1>=P,onClick:()=>I(G+1)},b("Next rows")),n.createElement("button",{onClick:()=>{const $=E.rows.findIndex(J=>J.frame===s);$>=0&&I(Math.floor($/50))}},b("Show current row"))),n.createElement("div",{className:"sequence-table-scroll",tabIndex:"0",role:"region","aria-label":b("Scrollable per-frame metrics")},n.createElement("table",{"aria-label":b("Per-frame metric values")},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,b("Frame")),n.createElement("th",null,l==="zh"?"所属集合":"Split"),A.map($=>n.createElement("th",{key:$.id},b($.label),n.createElement("small",null,$.unit))))),n.createElement("tbody",null,U.map($=>n.createElement("tr",{key:$.frame,className:$.frame===s?"selected-frame":""},n.createElement("th",{scope:"row"},n.createElement("button",{"aria-label":`Go to frame ${$.frame}`,"aria-current":$.frame===s?"true":void 0,disabled:!$.available,onClick:()=>o($.frame)},$.frame),!$.calculated&&n.createElement("small",null,b("Not calculated"))),n.createElement("td",null,n.createElement(it,{manifest:u,frame:$.frame})),A.map(J=>n.createElement("td",{key:J.id,title:$.values[J.id]==null?"N/A":String($.values[J.id])},Me($.values[J.id])))))))),n.createElement("div",{className:"sequence-toolbar"},n.createElement("button",{disabled:!e||!E.total,onClick:()=>d(`${f}_${g}_frames.csv`,Yt(E,"frames"))},g==="all"?b("Export all frames CSV"):l==="zh"?"导出当前集合 CSV":"Export subset CSV"),n.createElement("button",{disabled:!e||!E.total,onClick:()=>d(`${f}_${g}_sequence_summary.csv`,Yt(E,"summary"))},b("Export sequence summary CSV")),n.createElement("small",null,l==="zh"?`两个场组 · 当前集合 ${g} 的所有帧（不限本页） · 完整精度`:`Both field groups · all ${g} frames (not only this page) · full numeric precision`))))}function Wr({group:e="sdf"}){const{tr:a}=ce();function t(){const i=URL.createObjectURL(new Blob([JSON.stringify(Br(),null,2)],{type:"application/json"})),r=document.createElement("a");r.href=i,r.download="OceanScope_metric_definitions.json",r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}return n.createElement("details",{className:"loss-definitions"},n.createElement("summary",null,a("Evaluation Metrics / Loss Definitions")),n.createElement("p",null,a("g = Ground Truth; p = Prediction. Evaluation metrics, not a weighted training loss.")),n.createElement("p",null,a("Display quality never changes numerical metrics. Units follow dataset declarations; declaring units does not convert data.")),ct.filter(i=>i.group===e||i.group==="both"&&e!=="elevation").map(i=>n.createElement("article",{key:i.id},n.createElement("strong",null,a(i.label)),n.createElement("code",null,i.formula),n.createElement("small",null,a(i.direction),a(" is better"),i.direction==="Context"?a(" (interpret with error)"):""," · ",a(i.unitKind)),n.createElement("p",null,a(i.domain)," ",a(i.caveats)))),n.createElement("p",null,a("Sequence statistics give equal weight to each valid frame, not each voxel. Missing values are excluded; valid/excluded frame counts are reported.")),n.createElement("button",{onClick:t},a("Export metric definitions")))}function Yr({lattice:e,comparison:a}){const{tr:t}=ce();return n.createElement("details",{className:"alignment-report"},n.createElement("summary",null,t("Alignment and provenance")),n.createElement("dl",null,n.createElement("div",null,n.createElement("dt",null,t("Comparison")),n.createElement("dd",null,a?.id||"—")),n.createElement("div",null,n.createElement("dt",null,t("Canonical lattice")),n.createElement("dd",null,e?.dimensions?.join(" × ")||"—",t(" voxels"))),n.createElement("div",null,n.createElement("dt",null,t("Voxel size")),n.createElement("dd",null,e?.voxelSize?.map(i=>Number(i).toPrecision(4)).join(" × ")||"—")),n.createElement("div",null,n.createElement("dt",null,t("Policy")),n.createElement("dd",null,t("Prediction sampled in world space onto Ground Truth voxel centres.")))))}function jr(e){return`${e.labels?.prediction?.exportStem||"prediction"}_${e.runId||e.id}`.replace(/[<>:"/\\|?*\x00-\x1f]/g,"_").slice(0,125)}function Lr({frame:e,lattice:a,settings:t,plane:i,sliceIndex:r,angle:c=30,sectionPercent:s=50,rotationAxis:o="y"}){const d=p=>({status:"unavailable",reason:p});if(i==="oblique"&&o!=="y")return d("tilted");if(t?.previewOnly)return d("single");if(["gt","prediction"].some(p=>t?.sdf?.[p]?.semantics!=="full"))return d("semantics");const f=t?.heightComparison;if(f?.surfaceValidated!==!0||f?.negativeInside!==!0||f?.upAxis!=="Y"||f?.coordinateUnit!=="m"||f?.frameTimeAligned!==!0)return d("declaration");if(["gt","prediction"].some(p=>t.sdf[p].unit!=="m"))return d("units");if(!["xy","yz","oblique"].includes(i))return d("plane");const m=a?.dimensions,h=a?.axisSteps,x=a?.origin;if(!m||m.length!==3||m.some(p=>!Number.isInteger(p)||p<2)||!x||x.length!==3||x.some(p=>!Number.isFinite(p))||!h||h.length!==3||h.some((p,v)=>p.length!==3||p.some((y,S)=>!Number.isFinite(y)||(v===S?y<=0:Math.abs(y)>1e-12))))return d("lattice");const u=e?.groups?.sdf?.ground_truth,b=e?.groups?.sdf?.prediction;if([u,b].some(p=>!p||!Array.isArray(p.shape)||p.shape.length!==3||p.shape.some((v,y)=>v!==m[y])||p.values?.length!==m[0]*m[1]*m[2]||p.mask&&p.mask.values?.length!==p.values.length))return d("fields");if(i==="oblique"){const p=nt(a,c,s);if(!p)return d("lattice");const v=y=>p.degenerate?[]:Array.from({length:p.width},(S,E)=>{let A=null,C=null;for(let k=p.height-1;k>=0;k--){const F=ri(y,a,p.point(E,k));if(F===null||k===p.height-1&&F<=0)break;if(C!==null&&C>0&&F<=0){A=x[1]+h[1][1]*(k+-F/(C-F));break}C=F}return[p.range[0]+(p.range[1]-p.range[0])*E/(p.width-1),A]});return{status:"ready",axis:"oblique",angle:c,offset:p.offset,result:Pt(v(u),v(b))}}const l=i==="xy"?2:0,g=i==="xy"?0:2;if(!Number.isInteger(r)||r<0||r>=m[l])return d("lattice");const w=(p,v,y)=>p+m[0]*(v+m[1]*y);function _(p){return Array.from({length:m[g]},(v,y)=>{const S=i==="xy"?y:r,E=i==="xy"?r:y;let A=null,C=null;for(let k=m[1]-1;k>=0;k--){const F=w(S,k,E),R=p.values[F];if(!Number.isFinite(R)||p.mask&&!p.mask.values[F]||k===m[1]-1&&R<=0)break;if(C!==null&&C>0&&R<=0){A=x[1]+h[1][1]*(k+-R/(C-R));break}C=R}return[x[g]+h[g][g]*y,A]})}return{status:"ready",axis:g===0?"x":"z",offset:x[l]+h[l][l]*r,result:Pt(_(u),_(b))}}const jt={tilted:["倾斜截面用于场值与结构分析。高度比较请切换 XY、YZ 或绕 Y 的竖直斜切。","Tilted sections show field values and structure. For height comparison use XY, YZ or a vertical Y-axis section."],semantics:["当前预测含水外填充值，不能把填值边界当作可信水面。保留原有 SDF 切片和条件性距离指标。","The prediction has a filled or undeclared exterior; filled boundaries cannot establish a trustworthy water surface. SDF slices and conditional distance scores remain available."],declaration:["还需明确水面有效性、Y 向上、米制坐标、内负外正和帧时间对齐，才能启用高度比较。","Height comparison requires explicit surface validity, Y-up metre coordinates, negative-inside signs and aligned frame times."],units:["两组 SDF 的单位需要明确为米。","Both SDF units must be declared in metres."],plane:["请选择 XY 或 YZ 竖直切面以提取高度曲线。XZ 是水平切面。","Select a vertical XY or YZ section. XZ is horizontal."],lattice:["此坐标网格尚不满足高度采样条件。","This lattice does not meet height-sampling requirements."],fields:["当前帧缺少完整、相互对应的两组 SDF。","This frame lacks complete, matching SDF fields."]};function qr({frame:e,lattice:a,comparison:t,plane:i,sliceIndex:r,angle:c=30,sectionPercent:s=50,rotationAxis:o="y",frameNumber:d,busy:f}){const{language:m}=ce(),h=m==="zh",x=B.useMemo(()=>f?null:Lr({frame:e,lattice:a,settings:t.settings,plane:i,sliceIndex:r,angle:c,sectionPercent:s,rotationAxis:o}),[f,e,a,t.settings,i,r,c,s,o]);return x?.status==="ready"?n.createElement(Mi,{result:x.result,axis:x.axis,kind:"sdf",labels:{a:t.labels?.gt?.displayName,b:t.labels?.prediction?.displayName},metadata:{kind:"validated_sdf_height",dataset_a:t.groundTruthId,dataset_b:t.predictionId,frame:d,...Gi(x.axis,x.offset,c),reference_y_m:0,meters_per_unit:1,sampling:i==="oblique"?"uppermost_valid_zero_crossing_trilinear_columns":"uppermost_valid_zero_crossing_linear",time_alignment:"declared_aligned"}}):n.createElement("section",{className:"height-unavailable","aria-label":h?"水面高度比较适用性":"Surface-height eligibility"},n.createElement("h2",null,h?"水面高度比较":"Surface-height comparison"," · ",f?h?"加载中":"Loading":h?"不可用":"Unavailable"),n.createElement("p",null,f?h?"等待当前帧加载完成。":"Waiting for the current frame.":(jt[x?.reason]||jt.fields)[h?0:1]))}const ia=[["heightMae","Height MAE","高度 MAE","m"],["breakingMae","Breaking-region MAE","破碎区 MAE","m"],["amplitudeSlope","Amplitude slope","振幅斜率",""],["velocityRelativeL2","Underwater relative L2","水下速度相对误差",""],["velocityMedianCosine","Median direction cosine","方向余弦中位数",""]];function Ur(e){const a=["frame",...ia.map(c=>c[0]),"heightRmse","heightBias","pairedColumns","gtColumns","pairedCoverage","breakingColumns","velocityVoxels","velocityGtEligibleVoxels","velocityCoverage","angularExcludedCount","heightErrorPercent","breakingErrorPercent"],t=c=>c==null?"":`"${String(c).replaceAll('"','""')}"`,i=["protocol_version","unit_convention","height_rule","velocity_rule","aggregation","status"],r=[e.version,e.units,e.height,e.velocity,e.aggregation,e.status];return[[...a,...i].map(t).join(","),...Object.entries(e.frames).map(([c,s])=>[...a.map(o=>o==="frame"?c:s[o]),...r].map(t).join(","))].join(`\r
`)}function Lt(e,a=!1){let t=1/0,i=-1/0;for(const r of e)if(r)for(let c=0;c<r.values.length;c++){const s=r.values[c];!Number.isFinite(s)||r.mask&&!r.mask.values[c]||(t=Math.min(t,s),i=Math.max(i,s))}if(!Number.isFinite(t))return a?[-1,1]:[0,1];if(a){const r=Math.max(Math.abs(t),Math.abs(i),1e-8);return[-r,r]}return t===i?[t-.01,i+.01]:[t,i]}function h0(e,a){return e&&(!e.mask||e.mask.values[a])&&Number.isFinite(e.values[a])?e.values[a]:null}function Jr(e,a,t){const i=["ground_truth","prediction","error"].map(o=>e.groups.height[o]),[r,,c]=i[0].shape,s=["frame,x_m,z_m,gt_height_m,prediction_height_m,prediction_minus_gt_m,gt_valid,prediction_valid,paired_valid"];for(let o=0;o<c;o++)for(let d=0;d<r;d++){const f=d+r*o,m=i.map(h=>h0(h,f));s.push([t,a.origin[0]+d*a.axisSteps[0][0],a.origin[2]+o*a.axisSteps[2][2],...m.map(h=>h??""),...m.map(h=>h===null?0:1)].join(","))}return s.join(`\r
`)}const Ie=(e,a=4)=>Number.isFinite(e)?e.toFixed(a):"—",qt=e=>Number.isFinite(e)?`${(100*e).toFixed(2)}%`:"—";function Hr({protocol:e,frame:a,lattice:t,frameNumber:i,busy:r,onFrame:c}){const{language:s}=ce(),o=s==="zh",[d,f]=B.useState([.5,.5]);B.useEffect(()=>f([.5,.5]),[i]);const m=B.useMemo(()=>["ground_truth","prediction","error"].map(v=>a?.groups.height?.[v]),[a]),h=B.useMemo(()=>[Lt(m.slice(0,2)),Lt([m[2]],!0)],[m]);if(!e)return null;const x=e.frames[String(i)],u=!r&&x&&m.every(Boolean),b=m[0]?.shape[0]||1,l=m[0]?.shape[2]||1,g=Math.min(b-1,Math.floor(d[0]*b)),w=Math.min(l-1,Math.floor(d[1]*l)),_=g+b*w,p=["A · Gentle GT","B · Best_1027",o?"B − A · 高度差":"B − A · Height difference"];return n.createElement("section",{className:"reconstruction-analysis","aria-label":o?"Best_1027 重建评估":"Best_1027 reconstruction evaluation","aria-busy":r},n.createElement("div",{className:"reconstruction-heading"},n.createElement("div",null,n.createElement("span",{className:"reconstruction-eyebrow"},"BEST_1027 · ",o?"三帧对比":"THREE-FRAME PILOT"),n.createElement("h2",null,o?"水面高度与水下速度":"Surface height & underwater velocity")),n.createElement("span",{className:"reconstruction-frame"},o?"帧":"Frame"," ",u?i:"…")),n.createElement("p",null,o?"当前结果覆盖 1001、1049、1096 三帧，采用下方明确记录的计算规则。不是完整 96 帧评分，也未划分 Test 集。长度和速度沿用 v2 的 m、m/s 模拟尺度约定。":"Frames 1001, 1049 and 1096 only, under the explicit protocol below. Not a full 96-frame or Test-set score. Length and velocity inherit the v2 m / m/s simulation convention."),u?n.createElement(n.Fragment,null,n.createElement("div",{className:"reconstruction-cards"},ia.map(([v,y,S,E])=>n.createElement("div",{key:v},n.createElement("span",null,o?S:y),n.createElement("strong",null,Ie(x[v])," ",n.createElement("small",null,E))))),n.createElement("p",{className:"reconstruction-support"},o?"高度共同有效列":"Paired height columns"," ",n.createElement("strong",null,x.pairedColumns.toLocaleString()," / ",x.gtColumns.toLocaleString())," (",qt(x.pairedCoverage),") · ",o?"水下速度覆盖率":"Underwater velocity coverage"," ",n.createElement("strong",null,qt(x.velocityCoverage))," · ",o?"方向计算排除低速点":"Low-speed directional exclusions"," ",x.angularExcludedCount),n.createElement("div",{className:"reconstruction-maps"},m.map((v,y)=>n.createElement("figure",{key:p[y],"aria-label":p[y]},n.createElement("figcaption",null,p[y]),n.createElement(rt,{slice:{width:b,height:l,values:v.values},maskSlice:v.mask,range:h[y===2?1:0],palette:y===2?"error":"ground-truth",plane:"xz",aspect:b/l,crosshair:d,onCrosshair:f}),n.createElement("div",{className:`reconstruction-scale ${y===2?"difference":""}`},n.createElement("span",null,Ie(h[y===2?1:0][0],3)," m"),n.createElement("span",null,Ie(h[y===2?1:0][1],3)," m")),n.createElement("small",null,o?"选点":"Probe",": ",Ie(h0(v,_))," m")))),n.createElement("p",{className:"reconstruction-caption"},"X → · Z ↑ · X [",Ie(t.origin[0],2),", ",Ie(t.origin[0]+(b-1)*t.axisSteps[0][0],2),"] m · Z [",Ie(t.origin[2],2),", ",Ie(t.origin[2]+(l-1)*t.axisSteps[2][2],2),"] m",n.createElement("br",null),o?"俯视图使用 0.05 m 网格；A/B 同色标，误差红色表示预测偏高，蓝色表示偏低；斜纹为无效区域。点击任一图联动选点。":"Top-down 0.05 m grid. A/B share a scale; red means prediction higher, blue lower. Hatched cells are invalid. Click a map for a shared probe."," · X=",Ie(t.origin[0]+g*t.axisSteps[0][0],3),", Z=",Ie(t.origin[2]+w*t.axisSteps[2][2],3))):n.createElement("p",{role:"status"},o?"等待当前帧加载完成；不显示上一帧的指标。":"Waiting for this frame; previous-frame scores are hidden."),n.createElement("div",{className:"reconstruction-table-wrap"},n.createElement("table",{"aria-label":o?"三帧重建指标":"Three-frame reconstruction metrics"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,o?"帧":"Frame"),ia.map(([v,y,S,E])=>n.createElement("th",{key:v},o?S:y,E&&` (${E})`)))),n.createElement("tbody",null,Object.entries(e.frames).map(([v,y])=>n.createElement("tr",{key:v,"aria-current":u&&Number(v)===i?"true":void 0},n.createElement("td",null,n.createElement("button",{disabled:r,onClick:()=>c(Number(v))},v)),ia.map(([S])=>n.createElement("td",{key:S},Ie(y[S])))))))),n.createElement("p",null,o?"三帧合并：振幅斜率":"Pooled pilot: amplitude slope"," ",n.createElement("strong",null,Ie(e.pooled.amplitudeSlope))," · ",o?"速度相对误差":"velocity relative L2"," ",n.createElement("strong",null,Ie(e.pooled.velocityRelativeL2))," · ",o?"方向余弦中位数":"median direction cosine"," ",n.createElement("strong",null,Ie(e.pooled.velocityMedianCosine)),n.createElement("br",null),n.createElement("small",null,o?"合并分子与分母后求比值；方向指标使用全部有效方向余弦的中位数，不是逐帧数值的平均。振幅斜率以 1 为匹配参考，速度相对误差越小越好，方向余弦越接近 1 越好。":"Ratios use pooled sums; direction uses the median of all eligible cosines, not frame averages. Amplitude reference: 1. Lower relative error and cosine closer to 1 are preferable.")),n.createElement("details",{className:"reconstruction-protocol"},n.createElement("summary",null,o?"本次计算规则与未计算项":"Evaluation protocol & unavailable metrics"),n.createElement("ul",null,n.createElement("li",null,o?"高度：沿 Y 提取内负外正的线性过零位置；排除多层水面和上方缺失支撑，仅比较双方共同有效列。":e.height),n.createElement("li",null,o?"破碎区：在共同有效高度列中选择 X > −0.3 m。当前显示绝对误差（m），R 未定义，因此不显示归一化百分比。":e.breaking+" R is undefined: absolute metres only, no normalized percentages."),n.createElement("li",null,o?"振幅：每帧在同一共同有效区域分别去均值，再计算 Σ(h̃GT·h̃预测) / Σ(h̃GT²)。":e.amplitude),n.createElement("li",null,o?"水下速度：从原网格索引 0 开始，每两个格点取一个，得到 0.1 m 网格；采用 GT 水面下至少 10 cm 且双方 SDF/速度都有效的区域。方向中位数排除任一速度 ≤ 10⁻⁸ m/s 的点。":e.velocity),n.createElement("li",null,o?"右侧和下方通用场指标仍基于原生 0.05 m 网格及其共同有效域，与这里的水下筛选指标分开。":"Generic volume metrics use native 0.05 m common support, separate from the underwater protocol here."),n.createElement("li",null,o?"沿用 v2 的米制、Y 向上和同帧配对约定；新文件本身未独立声明物理单位。读取器报告 VDB 225/224 格式兼容提示，这些是初步参考结果。":e.units+" "+e.reader),n.createElement("li",null,o?"尚未计算：归一化高度/破碎区百分比、各波长增益、独立 M1 基线。缺失项目不以零代替。":e.unavailable.join("; ")))),n.createElement("div",{className:"reconstruction-actions"},n.createElement("button",{onClick:()=>Ma("Best_1027_pilot_metrics.csv","\uFEFF"+Ur(e),"text/csv;charset=utf-8")},o?"下载三帧指标 CSV":"Pilot metrics CSV"),n.createElement("button",{onClick:()=>Ma("Best_1027_evaluation_protocol.json",JSON.stringify(e,null,2))},o?"下载指标与规则 JSON":"Metrics & protocol JSON"),n.createElement("button",{disabled:!u,onClick:()=>Ma(`Best_1027_${i}_height_map.csv`,"\uFEFF"+Jr(a,t,i),"text/csv;charset=utf-8")},o?"下载当前高度图 CSV":"Current height map CSV")))}const oa="oceanscope.field-view.v1",g0="oceanscope.bookmarks.v2.field",ie=e=>{throw Error(e)},na=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),Xe=(e,a=-1e9,t=1e9)=>typeof e=="number"&&Number.isFinite(e)&&e>=a&&e<=t,Ut=(e,a=-1e9,t=1e9)=>Array.isArray(e)&&e.length===2&&e.every(i=>Xe(i,a,t));function y0(e){const a=e.comparison,t=e.processing.lattice;return JSON.stringify({comparison:a.id,gt:a.groundTruthId,prediction:a.settings?.previewOnly?null:a.predictionId,groups:a.availableGroups,settings:a.settings,lattice:{dimensions:t.dimensions,origin:t.origin,axisSteps:t.axisSteps},directory:e.fieldDirectory,frames:e.processing.frames.map(i=>i.frame)})}function sn(e,a){(!na(e)||e.schema!==oa)&&ie("format"),(typeof e.name!="string"||!e.name.trim()||e.name.trim().length>80)&&ie("name");const t=e.settings;na(t)||ie("settings"),t.representation!==void 0&&t.representation!==Dn&&ie("settings"),t.representation===Dn&&t.group!=="sdf"&&ie("group"),(typeof t.caseId!="string"||!t.caseId||t.caseId.length>100||typeof e.sourceSignature!="string"||e.sourceSignature.length>1e5)&&ie("dataset"),(!Number.isInteger(t.frame)||!Xe(t.frame,0,1e7))&&ie("frame"),(!["sdf","velocity"].includes(t.group)||!["split","overlay","wire-overlay","gt","prediction"].includes(t.mode)||!["balanced","fine"].includes(t.quality)||!["magnitude","x","y","z"].includes(t.component))&&ie("settings"),(!["xy","xz","yz","oblique"].includes(t.plane)||!Number.isInteger(t.sliceIndex)||!Xe(t.sliceIndex,0,1e7)||!Xe(t.angle,0,180)||!Xe(t.sectionPercent,0,100))&&ie("section");for(const c of["showPlane","showContext","showGt","showPrediction"])typeof t[c]!="boolean"&&ie("settings");(!Xe(t.gtOpacity,.1,1)||!Xe(t.predictionOpacity,.1,1)||!Number.isInteger(t.vectorDensity)||!Xe(t.vectorDensity,1,2e4)||!Xe(t.arrowScale,.001,1e6))&&ie("settings"),t.sourceRange!==null&&(!Ut(t.sourceRange)||t.sourceRange[1]<=t.sourceRange[0])&&ie("color"),(!na(t.errorScale)||typeof t.errorScale.locked!="boolean"||!Xe(t.errorScale.limit,1e-6,1e9))&&ie("color"),Ut(t.crosshair,0,1)||ie("probe"),(!na(t.playback)||typeof t.playback.loop!="boolean"||![.25,.5,1,2].includes(t.playback.speed)||!Xe(t.playback.fps,1,120))&&ie("settings");const i=Ri(t.region,2),r=Oi(e.camera);if((r.near===null||r.far===null)&&ie("camera"),a){const c=a.find(d=>d.id===t.caseId);c||ie("dataset"),e.sourceSignature!==y0(c)&&ie("source"),(t.representation===Dn?!Xn(c).includes(t.frame):!c.processing.frames.some(d=>d.frame===t.frame))&&ie("frame"),(!c.comparison.availableGroups.includes(t.group)||t.showContext&&!c.comparison.availableGroups.includes("sdf"))&&ie("group"),c.comparison.settings?.previewOnly&&(t.mode!=="gt"||t.showPrediction||i)&&ie("single");const s=c.processing.lattice,o=t.plane==="xy"||t.plane==="oblique"?2:t.plane==="yz"?0:1;(t.sliceIndex>=s.dimensions[o]||t.plane==="oblique"&&!Ga(s))&&ie("section")}return{schema:oa,name:e.name.trim(),sourceSignature:e.sourceSignature,settings:{...t.representation?{representation:t.representation}:{},...Ti(t.rotationAxis),...$i(t.shading),caseId:t.caseId,frame:t.frame,group:t.group,mode:t.mode,quality:t.quality,component:t.component,plane:t.plane,sliceIndex:t.sliceIndex,angle:t.angle,sectionPercent:t.sectionPercent,showPlane:t.showPlane,showContext:t.showContext,showGt:t.showGt,showPrediction:t.showPrediction,gtOpacity:t.gtOpacity,predictionOpacity:t.predictionOpacity,vectorDensity:t.vectorDensity,arrowScale:t.arrowScale,sourceRange:t.sourceRange?[...t.sourceRange]:null,errorScale:{locked:t.errorScale.locked,limit:t.errorScale.limit},crosshair:[...t.crosshair],...i?{region:i}:{},playback:{speed:t.playback.speed,loop:t.playback.loop,fps:t.playback.fps}},camera:r}}function Kr(e,a){new TextEncoder().encode(e).length>Fi&&ie("size");let t;try{t=JSON.parse(e)}catch{ie("json")}return sn(t,a)}function Qr(e){let a;try{a=e.getItem(g0)}catch{ie("storage")}if(a===null)return[];try{const t=JSON.parse(a),i=new Set;return(t.schema!=="oceanscope.field-library.v1"||!Array.isArray(t.items)||t.items.length>d0)&&ie("library"),t.items.map(r=>((typeof r.id!="string"||!r.id||i.has(r.id))&&ie("library"),i.add(r.id),{id:r.id,...sn(r)}))}catch{ie("library")}}function ec(e,a){a.length>d0&&ie("limit");const t=new Set,i=a.map(r=>((typeof r.id!="string"||!r.id||t.has(r.id))&&ie("library"),t.add(r.id),{id:r.id,...sn(r)}));try{e.setItem(g0,JSON.stringify({schema:"oceanscope.field-library.v1",items:i}))}catch{ie("storage")}}const Jt={...Ni,format:["请使用场比较方案 JSON；水面方案、指标和数据说明文件不能作为场方案导入。","Use a field-view JSON. Wave views, metrics and data-info files cannot be imported as field views."],dataset:["当前样例中找不到方案指定的数据。","The saved dataset is not available in the current samples."],source:["样例身份、网格或单位声明已改变，未应用旧方案。","Dataset identity, grid or unit declarations changed; the old view was not applied."],group:["当前样例不提供方案指定的 SDF 或速度场。","This sample does not provide the saved SDF or velocity group."],section:["切片索引或斜切参数超出当前网格范围。","The slice index or oblique settings are outside the current grid."],single:["单组 GT 方案不能包含预测显示或双组模式。","A single GT view cannot use prediction layers or paired display modes."],probe:["切片探针位置必须在 0–100% 范围内。","The slice probe must stay within 0–100%."],color:["色标范围无效；请检查上下限。","Invalid color range; check its limits."],size:["文件超过 2 MB，请选择场比较方案 JSON。","File exceeds 2 MB; select a field-view JSON."],load:["场方案恢复未完成，数据或三维视图加载失败。请检查页面提示后重试。","Field view restoration failed while loading data or 3D. Check the page message and try again."]};function nc(e,a){return Jt[e.message]?.[a?0:1]||Jt.load[a?0:1]}const Ta=Array.from({length:96},(e,a)=>1001+a),Ht=(e,a)=>JSON.stringify(e)===JSON.stringify(a);function v0(e){if(typeof e=="number"&&!Number.isFinite(e))throw Error("Nonfinite evaluation value");e&&typeof e=="object"&&Object.values(e).forEach(v0)}function ac(e,a){if(e?.schemaVersion!==1||e.status!=="complete"||!e.runId)throw Error("Incomplete evaluation bundle");if(e.protocol?.sourceScriptSha256!==a.protocolSha256||e.datasetA?.id!==a.datasetA||e.datasetB?.id!==a.datasetB||e.datasetA?.manifestSha256!==a.manifestA||e.datasetB?.manifestSha256!==a.manifestB)throw Error("Evaluation source or protocol mismatch");if(!Ht(e.frameIds,Ta)||!Ht(e.rows?.map(t=>t.frame),Ta))throw Error("Evaluation frame coverage mismatch");if(!Array.isArray(e.geometryFrames)||new Set(e.geometryFrames).size!==e.geometryFrames.length||e.geometryFrames.some(t=>!Ta.includes(t)))throw Error("Invalid geometry frame identity");v0(e);for(const t of e.rows){if(!Number.isFinite(t.height?.mae_m)||!Number.isFinite(t.height?.bias_m)||!Number.isInteger(t.height?.common)||t.height.common<=0)throw Error("Missing height metric");for(const i of["fine","coarse"]){const r=t.velocity?.[i];if(!Number.isFinite(r?.rel_rmse)||!Number.isInteger(r?.voxels)||r.voxels<=0)throw Error("Missing velocity metric")}}return structuredClone(e)}function tc(e,a){const t=e.rows.find(i=>i.frame===a);if(!t)throw Error("Frame outside evaluation");return{frame:a,row:t,geometryAvailable:e.geometryFrames.includes(a)}}function _0(){let e=0;return{async run(a){const t=++e;try{const i=await a();return t===e?i:null}catch(i){if(t===e)throw i;return null}},cancel(){e++}}}async function la(e){const a=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return[...new Uint8Array(a)].map(t=>t.toString(16).padStart(2,"0")).join("")}function ic(e){return{caseId:e.id,comparisonId:e.comparison.id,gtId:e.comparison.groundTruthId,predictionId:e.comparison.predictionId,geometryFrames:e.processing.frames.map(a=>a.frame),lattice:e.processing.lattice}}function Ae(e){return Array.isArray(e)?"["+e.map(Ae).join(",")+"]":e&&typeof e=="object"?"{"+Object.keys(e).sort().map(a=>JSON.stringify(a)+":"+Ae(e[a])).join(",")+"}":JSON.stringify(e)}async function rc(e,a,t){if(await la(e)!==a.sha256)throw Error("Reference result checksum mismatch");const i=ac(JSON.parse(e),a);if(Ae(i.caseBinding)!==Ae(ic(t)))throw Error("Reference result does not match the selected dataset pair or geometry");return i}function E0(e,a){if(new TextEncoder().encode(e).length>1024*1024)throw Error("Result selection file too large");const t=JSON.parse(e);if(t?.schemaVersion!==1||t.runId!==a.runId||Ae(t.protocol)!==Ae(a.protocol)||Ae(t.datasetA)!==Ae(a.datasetA)||Ae(t.datasetB)!==Ae(a.datasetB))throw Error("Saved result identity does not match this run");if(!a.frameIds.includes(t.frame)||!["all","six"].includes(t.subset)||!["height","velocity"].includes(t.metric))throw Error("Invalid result selection");return{frame:t.frame,subset:t.subset,metric:t.metric}}const cc=[1007,1023,1039,1057,1073,1089],sc=[["mae_m","Height MAE","高度 MAE","m","pooled common columns"],["mae_pct","Height MAE / R","高度 MAE / R","% R","pooled common columns"],["bias_pct","Signed height bias / R","有符号高度偏差 / R","% R","pooled common columns"],["steep_pct","Steep-column MAE / R","陡坡列 MAE / R","% R","GT slope top 15%, per frame"],["calm_cells_pct","Non-steep-column MAE / R","非陡坡列 MAE / R","% R","remaining GT slope columns"],["breaking_band_pct","Breaking-band MAE / R","破浪带 MAE / R","% R","strict -0.30 < X < 1.10"],["calm_band_pct","Calm-band MAE / R","平静带 MAE / R","% R","strict -7.90 < X < -1.50"],["amplitude_slope","Amplitude slope","振幅斜率","ratio","pooled after per-frame demeaning"],["correlation","Height correlation","高度相关系数","ratio","pooled after per-frame demeaning"],["flicker_pct","Adjacent-frame error change / R","相邻帧误差变化 / R","% R","adjacent pairs, no time-step division"],["gt_range_m","Observed GT height range","观测 GT 高度范围","m","GT max minus min over all frames"],["pct_relative_to_m","Normalization reference R","归一化参考 R","m","fixed protocol parameter"]],oc=[["rel_rmse","Relative RMSE — pooled","相对 RMSE — 全体素汇总","ratio","sqrt(sum error energy / sum GT energy)"],["rel_rmse_frame_mean","Relative RMSE — frame mean","相对 RMSE — 逐帧平均","ratio","arithmetic mean of frame relative RMSE"],["cos_median","Direction cosine median","方向余弦中位数","ratio","median over all selected voxels, not mean of frame medians"],["speed_ratio","Mean speed ratio B / GT","平均速度比 B / GT","ratio","mean |B| / mean |GT|"],["vec_mae","Vector MAE","矢量 MAE","source velocity unit","mean norm of vector error"],["gt_mean_speed","GT mean speed","GT 平均速度","source velocity unit","mean norm of GT velocity"]];function w0(e,{subset:a="all",grid:t="coarse",frame:i=e.frameIds[0]}={}){if(!["all","six"].includes(a)||!["fine","coarse"].includes(t)||!e.frameIds.includes(i))throw Error("Invalid metric selection");const r=[],c=e.frameIds,s=e.summary.height,o={runId:e.runId,protocolSha256:e.protocol.sourceScriptSha256,manifestA:e.datasetA.manifestSha256,manifestB:e.datasetB.manifestSha256};function d(l,g,w,_,p,v,y,S,E=null,A="defined by frozen protocol",C="",k=null){const F=Number.isFinite(_)&&!C;r.push({id:l,label:g,labelZh:w,value:F?_:null,unit:p,aggregation:v,scope:y,frameIds:[...S],validCount:E,countStatus:E==null?"not recorded in frozen result":"recorded",status:F?"available":"unavailable",reason:C||(F?"":"Value not recorded or nonfinite in source"),denominator:{formula:A,value:k},source:o})}for(const[l,g,w,_,p]of sc){let v="",y=["mae_m","mae_pct","bias_pct"].includes(l)?s.cells_scored:null;s.cells_scored===0&&!["gt_range_m","pct_relative_to_m"].includes(l)&&(v="No common support"),l==="flicker_pct"&&(c.length<2||c.some((S,E)=>E>0&&S!==c[E-1]+1))&&(v="Requires consecutive adjacent frames"),d("height."+l,g,w,s[l],_,p,"sequence height: all evaluated frames",c,y,_==="% R"?"reference range R":"metric-specific support",v,_==="% R"?s.pct_relative_to_m:null)}for(const l of["gain","coherence"])for(const g of[.3,.6,1.2,2.4,4.8])d(`height.${l}.${g}`,`${l} · λ ${g} m`,`${l==="gain"?"增益":"相干度"} · λ ${g} m`,s[l]?.[String(g)],"ratio","pooled DoG band sums; common support and wider-filter weight > 0.7","sequence height: all evaluated frames",c,null,l==="gain"?"GT band energy":"GT band energy × prediction band energy",s.cells_scored===0?"No common support":"");d("footprint_iou","Wet-column footprint IoU","有水列范围 IoU",e.summary.footprint_iou,"ratio","pooled intersection / union","sequence wet columns",c,null,"wet-column union"),d("volume.iou","Water volume IoU","水体素 IoU",e.summary.volume?.iou,"ratio","pooled intersection / union","sequence water voxels (sdf < 0 and valid)",c,null,"water-voxel union"),d("volume.rec_over_gt","Water volume B / GT","水体积比 B / GT",e.summary.volume?.rec_over_gt,"ratio","pooled B volume / GT volume","sequence water voxels (sdf < 0 and valid)",c,null,"GT water-voxel count");const f=a==="all"?c:cc,m=e.summary.velocity[a==="all"?"all_frames":"velocity_net_6_frames"],h=m?.[t==="fine"?"grid_0.05m":"grid_0.1m"],x=e.rows.filter(l=>f.includes(l.frame)),u=x.map(l=>l.velocity?.[t]?.gtEnergy),b=u.length===f.length&&u.every(Number.isFinite)?u.reduce((l,g)=>l+g,0):null;for(const[l,g,w,_,p]of oc){let v=h?.voxels===0?"No valid velocity support":"";l.startsWith("rel_rmse")&&(b===0||l==="rel_rmse_frame_mean"&&u.some(y=>y===0))&&(v="Zero GT energy makes relative RMSE undefined"),(!m||JSON.stringify(m.frames)!==JSON.stringify(f))&&(v="Frame set does not match archived aggregate"),d("velocity."+l,g,w,h?.[l],_,p,`${a==="all"?"all evaluated frames":"fixed six frames (not train/test split)"}; ${t==="fine"?"native 0.05 XYZ":"XZ 2×2 average, Y unchanged (~0.10 / 0.05 / 0.10)"}`,f,h?.voxels??null,l.startsWith("rel_rmse")?"GT velocity energy":"valid velocity support",v,l==="rel_rmse"?b:null)}return r}function lc(e){const a=["id","value","status","reason","unit","scope","aggregation","frameIds","validCount","countStatus","denominator","source"],t=i=>'"'+String(i==null?"":typeof i=="object"?JSON.stringify(i):i).replaceAll('"','""')+'"';return[a.join(","),...e.map(i=>a.map(r=>t(i[r])).join(","))].join(`
`)}function dc({bundle:e,subset:a,frame:t,zh:i,onDownload:r,selectedGrid:c,onGrid:s}){const[o,d]=B.useState("coarse"),f=c??o;function m(x){d(x),s?.(x)}const h=B.useMemo(()=>w0(e,{subset:a,grid:f,frame:t}),[e,a,f,t]);return n.createElement("details",{className:"complete-metrics"},n.createElement("summary",null,i?"完整指标 · 范围、网格与聚合":"Complete metrics · scope, grid and aggregation"),n.createElement("p",null,i?"高度与体积保持全96帧；上方帧集合只切换速度汇总。固定六帧不是训练/测试划分。缺失计数表示原件未记录，不推测或补零。":"Height and volume retain all96 frames; the frame-set selector changes velocity aggregates only. Fixed six is not a train/test split. Missing counts were not recorded, never inferred or filled with zero."),n.createElement("label",null,i?"速度网格":"Velocity grid"," ",n.createElement("select",{"aria-label":"Reference detail grid",value:f,onChange:x=>m(x.target.value)},n.createElement("option",{value:"coarse"},i?"粗网格 · XZ 2×2 / Y不变":"Coarse · XZ 2×2 / unchanged Y"),n.createElement("option",{value:"fine"},i?"细网格 · 原生0.05":"Fine · native0.05"))),n.createElement("div",{className:"metric-table-scroll"},n.createElement("table",{"aria-label":"Complete protocol metrics"},n.createElement("thead",null,n.createElement("tr",null,(i?["指标","数值","单位","范围 / 聚合","有效计数"]:["Metric","Value","Unit","Scope / aggregation","Valid count"]).map(x=>n.createElement("th",{key:x},x)))),n.createElement("tbody",null,h.map(x=>n.createElement("tr",{key:x.id},n.createElement("th",{scope:"row"},i?x.labelZh:x.label),n.createElement("td",null,x.value==null?"—":x.value.toPrecision(8),x.status!=="available"&&n.createElement("small",null,x.reason)),n.createElement("td",null,x.unit),n.createElement("td",null,n.createElement("small",null,x.scope,n.createElement("br",null),x.aggregation)),n.createElement("td",null,x.validCount==null?i?"原件未记录":"Not recorded":x.validCount.toLocaleString())))))),n.createElement("p",null,i?"速度有效域：GT vel_valid、GT sdf < −0.10、预测vel_valid；Z[11:105] / X[11:212]，粗网格须四格全有效。Breaking严格−0.30<X<1.10；calm band与非陡坡列不同。":"Velocity support: GT vel_valid, GT sdf < −0.10, prediction vel_valid; Z[11:105] / X[11:212], all four coarse cells valid. Breaking strictly −0.30<X<1.10; calm band differs from non-steep columns."),n.createElement("button",{onClick:()=>r(`${e.runId}_${a}_${f}_complete-metrics.csv`,lc(h),"text/csv")},i?"导出完整指标 CSV":"Export complete metrics CSV"))}function fc({declarations:e,zh:a}){const t=i=>({claimed:a?"来源声明":"Source declaration",verified:a?"已核验":"Verified",unknown:a?"未知":"Unknown"})[i];return n.createElement("details",{className:"complete-metrics"},n.createElement("summary",null,a?"实验条件与证据来源":"Experiment conditions and evidence"),e?n.createElement(n.Fragment,null,n.createElement("p",null,a?"“已核验”仅覆盖注明的原始文件身份；相机、模型、单位和测试划分仍按原始材料声明，不能等同独立训练审计。":"Verified labels cover the stated original-file identities. Camera, model, units and test split remain source declarations, not an independent training audit."),n.createElement("dl",{className:"experiment-declarations"},e.entries.map(i=>n.createElement("div",{key:i.id},n.createElement("dt",null,a?i.labelZh:i.label," ",n.createElement("span",null,t(i.status))),n.createElement("dd",null,i.value==null?"—":typeof i.value=="object"?JSON.stringify(i.value):String(i.value),i.note&&n.createElement("small",null,i.note.replace(/collaborator/gi,"Source")),i.source&&n.createElement("small",null,i.source.file," · SHA256 ",i.source.sha256))))),n.createElement("p",null,a?"直接比较要求相同GT、协议、帧集合、有效域和单位；不同相机/模型可以作为实验变量，但必须显示差异。":"Direct comparison requires the same GT, protocol, frame set, support and units. Camera/model differences may be experimental variables but must be disclosed.")):n.createElement("p",{role:"status"},a?"声明尚未核验，不能推断实验条件。":"Declarations not yet verified; conditions cannot be inferred."))}const Kt=[1007,1023,1039,1057,1073,1089],Ue=e=>Number.isFinite(e)?e.toFixed(6):"—";function mc({bundle:e,frame:a,onFrame:t,onDownload:i,reportSelection:r,onReportSelection:c,unifiedRestore:s=!1,displayGeometryFrames:o=e.geometryFrames}){const{language:d}=ce(),f=d==="zh",[m,h]=B.useState("all"),[x,u]=B.useState("height"),b=r?.subset??m,l=r?.metric??x;function g(M){h(M),c?.(P=>({...P,subset:M}))}function w(M){u(M),c?.(P=>({...P,metric:M}))}const[_,p]=B.useState(""),v=B.useRef(_0());B.useEffect(()=>(v.current.cancel(),()=>v.current.cancel()),[a,e]);function y(M){v.current.cancel(),t(M)}async function S(M){if(v.current.cancel(),!!M)try{if(M.size>1024*1024)throw Error("Result selection file too large");const P=await v.current.run(async()=>E0(await M.text(),e));P&&(g(P.subset),w(P.metric),t(P.frame),p(f?"已恢复相同结果的帧与集合；指标仍来自已核验结果包。":"Restored frame and subset; metrics remain from the verified bundle."))}catch(P){p(P.message)}}const E=tc(e,a??e.frameIds[0]),A={...E,geometryAvailable:o.includes(E.frame)},C=e.rows.filter(M=>b==="all"||Kt.includes(M.frame)),k=e.summary.velocity[b==="all"?"all_frames":"velocity_net_6_frames"]["grid_0.1m"],F=b==="all"?f?"全96帧 · 粗网格":"All96 frames · Coarse grid":f?"固定六帧 · 粗网格":"Fixed six frames · Coarse grid",R=M=>l==="height"?M.height.mae_m*100:M.velocity.coarse.rel_rmse,I=Math.max(...C.map(R),1e-9),O=M=>42+(M-1001)/95*836,D=M=>155-M/I*125;function T(){return{schemaVersion:1,runId:e.runId,protocol:e.protocol,datasetA:e.datasetA,datasetB:e.datasetB,frame:A.frame,selectedFrame:A.row,subset:b,metric:l,unitStatus:e.unitStatus,geometryAvailable:A.geometryAvailable,summaryScope:"height: all96; velocity: selected subset",summary:{height:e.summary.height,velocity:k},rows:C}}function z(){return["run_id,protocol_id,subset,frame,height_mae_m,height_bias_m,common_columns,coarse_rel_rmse,coarse_valid_voxels,geometry_available",...C.map(M=>[e.runId,e.protocol.id,b,M.frame,M.height.mae_m,M.height.bias_m,M.height.common,M.velocity.coarse.rel_rmse,M.velocity.coarse.voxels,o.includes(M.frame)].join(","))].join(`
`)}return n.createElement("section",{className:"reference-evaluation","aria-label":f?"原始96帧协议结果":"Raw 96-frame protocol results"},n.createElement("header",null,n.createElement("div",null,n.createElement("span",{className:"reference-eyebrow"},"RAW VDB · 96 / 96"),n.createElement("h2",null,f?"Gentle → Best_1027 · 序列评估":"Gentle → Best_1027 · Sequence evaluation")),n.createElement("span",{className:"reference-status"},f?"原始读取已核验":"Verified raw read")),n.createElement("p",null,f?"192个原始文件身份核验 · 0失败 · 95个相邻帧对。单位采用来源约定，尚未独立标定。":"192 source identities verified · 0 failures · 95 adjacent pairs. Units follow source convention, without independent calibration."),n.createElement("div",{className:"reference-cards"},n.createElement("div",null,n.createElement("span",null,f?"全96帧高度 MAE":"All96 height MAE"),n.createElement("strong",null,Ue(e.summary.height.mae_m*100)," ",n.createElement("small",null,"cm")),n.createElement("small",null,Ue(e.summary.height.mae_pct),"% R · R=1.230"),n.createElement("small",null,f?"有符号偏差":"Signed bias"," ",Ue(e.summary.height.bias_pct),"% R")),n.createElement("div",null,n.createElement("span",null,f?"速度 relative RMSE · pooled":"Velocity relative RMSE · pooled"),n.createElement("small",{className:"metric-scope"},F),n.createElement("strong",null,Ue(k.rel_rmse)),n.createElement("small",null,k.voxels.toLocaleString()," ",f?"有效粗网格点":"valid coarse voxels")),n.createElement("div",null,n.createElement("span",null,f?"速度 relative RMSE · 逐帧均值":"Velocity relative RMSE · Frame mean"),n.createElement("small",{className:"metric-scope"},F),n.createElement("strong",null,Ue(k.rel_rmse_frame_mean)),n.createElement("small",null,f?"XZ 0.1 / Y 0.05 · 来源单位":"XZ 0.1 / Y 0.05 · source units"))),n.createElement("div",{className:"reference-controls"},n.createElement("label",null,f?"帧集合":"Frame set"," ",n.createElement("select",{"aria-label":"Reference frame set",value:b,onChange:M=>{v.current.cancel(),g(M.target.value)}},n.createElement("option",{value:"all"},f?"全96帧":"All96 frames"),n.createElement("option",{value:"six"},f?"固定六帧":"Fixed six frames"))),n.createElement("label",null,f?"曲线":"Curve"," ",n.createElement("select",{"aria-label":"Reference metric",value:l,onChange:M=>{v.current.cancel(),w(M.target.value)}},n.createElement("option",{value:"height"},f?"高度 MAE (cm)":"Height MAE (cm)"),n.createElement("option",{value:"velocity"},f?"粗网格速度 relative RMSE":"Coarse velocity relative RMSE"))),n.createElement("label",null,f?"原始帧号":"Original frame"," ",n.createElement("select",{"aria-label":"Reference frame",value:A.frame,onChange:M=>y(Number(M.target.value))},e.frameIds.map(M=>n.createElement("option",{key:M,value:M},M,o.includes(M)?" · 3D":""))))),n.createElement("p",{role:"status"},n.createElement("strong",null,f?"选定帧":"Selected frame"," ",A.frame)," · ",f?"高度 MAE":"Height MAE"," ",Ue(A.row.height.mae_m*100)," cm · ",f?"速度 relative RMSE":"Velocity relative RMSE"," ",Ue(A.row.velocity.coarse.rel_rmse)," · ",A.geometryAvailable?f?"三维预览可用":"3D preview available":f?"该帧无三维数据；保留真实帧号与指标":"No 3D data for this frame; frame identity and metrics retained",b==="six"&&!Kt.includes(A.frame)&&(f?" · 当前帧不在固定六帧集合":" · Current frame outside fixed-six subset")),!A.geometryAvailable&&n.createElement("div",{className:"reference-geometry-links"},f?"跳转到可用三维帧：":"Jump to available geometry: ",o.map(M=>n.createElement("button",{key:M,onClick:()=>y(M)},M))),n.createElement("svg",{viewBox:"0 0 920 190",role:"img","aria-label":f?"原始帧指标曲线":"Original-frame metric curve"},n.createElement("text",{x:"8",y:"27"},Ue(I)),n.createElement("text",{x:"15",y:"159"},"0"),n.createElement("line",{x1:"42",x2:"878",y1:"155",y2:"155",stroke:"#a7c4cb"}),n.createElement("polyline",{points:C.map(M=>`${O(M.frame)},${D(R(M))}`).join(" "),fill:"none",stroke:"#087e8b",strokeWidth:"2"}),C.map(M=>n.createElement("circle",{key:M.frame,cx:O(M.frame),cy:D(R(M)),r:M.frame===A.frame?5:3,fill:M.frame===A.frame?"#c45c15":"#087e8b",role:"button",tabIndex:"0","aria-label":`${f?"选择帧":"Select frame"} ${M.frame}`,onClick:()=>y(M.frame),onKeyDown:P=>{(P.key==="Enter"||P.key===" ")&&(P.preventDefault(),y(M.frame))}},n.createElement("title",null,M.frame,": ",Ue(R(M))))),n.createElement("text",{x:"42",y:"180"},"1001"),n.createElement("text",{x:"840",y:"180"},"1096"),n.createElement("text",{x:"400",y:"180"},f?"原始帧号":"Original frame")),n.createElement("p",{className:"reference-scope"},f?"此处为固定协议的全局／逐帧指标。相机、显示平滑与ROI不改变这些值；同协议空间面板使用原生列高度。三维场切片与旧预览诊断保留各自计算范围。":"These are fixed-protocol global/per-frame metrics. Camera, display smoothing and ROI do not change them. The protocol spatial panel uses native height columns; volume slices and legacy diagnostics retain their own scope."),n.createElement("div",{className:"reference-controls"},n.createElement("button",{onClick:()=>i(`${e.runId}_${b}.json`,JSON.stringify(T(),null,2))},f?"导出结果与当前帧 JSON":"Export results and current frame JSON"),n.createElement("button",{onClick:()=>i(`${e.runId}_${b}.csv`,z(),"text/csv")},f?"导出所选集合 CSV":"Export selected-set CSV")),n.createElement(dc,{bundle:e,subset:b,zh:f,onDownload:i,frame:A.frame,selectedGrid:r?.grid,onGrid:M=>c?.(P=>({...P,grid:M}))}),n.createElement(fc,{declarations:e.declarations,zh:f}),!s&&n.createElement("details",null,n.createElement("summary",null,f?"恢复结果选择":"Restore result selection"),n.createElement("label",null,f?"选择本面板导出的 JSON":"Choose JSON exported from this panel"," ",n.createElement("input",{type:"file",accept:"application/json,.json","aria-label":"Restore reference selection",onChange:M=>{S(M.target.files?.[0]),M.target.value=""}})),n.createElement("p",{role:"status"},_)),n.createElement("details",null,n.createElement("summary",null,f?"数据身份、协议与有效计数":"Identity, protocol and valid counts"),n.createElement("p",null,e.protocol.id," · ",e.runId),n.createElement("p",null,"A: ",e.datasetA.manifestSha256,n.createElement("br",null),"B: ",e.datasetB.manifestSha256,n.createElement("br",null),f?"算法":"Algorithm",": ",e.protocol.sourceScriptSha256),n.createElement("p",null,f?"当前帧共同高度列":"Current common height columns",": ",A.row.height.common," · GT ",A.row.height.gtWet," / B ",A.row.height.predictionWet,"; ",f?"速度有效点":"Valid velocity voxels",": ",A.row.velocity.coarse.voxels)))}function ga(e){const{shape:[a,t],originXYZ:[i,,r],spacing:c}=e.descriptor;return{xmin:i,xmax:i+(t-1)*c,zmin:r,zmax:r+(a-1)*c}}function da(e,a,{mode:t="create"}={}){const i={...e};for(const r of["x","z"]){const c=r+"min",s=r+"max";if(!Number.isFinite(i[c])||!Number.isFinite(i[s])||i[s]<i[c])throw Error("Invalid ROI");if(t==="move"){const o=Math.min(i[s]-i[c],a[s]-a[c]);i[c]=Math.max(a[c],Math.min(a[s]-o,i[c])),i[s]=i[c]+o}else i[c]=Math.max(a[c],Math.min(a[s],i[c])),i[s]=Math.max(a[c],Math.min(a[s],i[s]))}return{roi:i,clipped:JSON.stringify(i)!==JSON.stringify(e)}}function bc(e,{ix:a,iz:t,resourceKey:i}){const{shape:[r,c],originXYZ:[s,,o],spacing:d,frameId:f}=e.descriptor;if(!Number.isInteger(a)||!Number.isInteger(t)||a<0||a>=c||t<0||t>=r||!e.common[t*c+a])throw Error("Select a paired valid location");const m=s+a*d,h=o+t*d;return{version:1,frame:f,resourceKey:i,hotspot:{ix:a,iz:t,index:t*c+a,x:m,z:h},roi:da({xmin:m-10*d,xmax:m+10*d,zmin:h-10*d,zmax:h+10*d},ga(e)).roi,directionDeg:0,anchorMode:"hotspot"}}function ya({anchor:e,direction:a},t){let i=-1/0,r=1/0;for(const[c,s,o,d]of[[e.x,a[0],t.xmin,t.xmax],[e.z,a[1],t.zmin,t.zmax]])if(Math.abs(s)<1e-12){if(c<o-1e-9||c>d+1e-9)return null}else{const f=(o-c)/s,m=(d-c)/s;i=Math.max(i,Math.min(f,m)),r=Math.min(r,Math.max(f,m))}return i<=r?[i,r]:null}function ja(e,{x:a,z:t,directionDeg:i}){const r=ga(e),{shape:[c,s],originXYZ:[o,,d],spacing:f}=e.descriptor;if(![a,t,i].every(Number.isFinite)||a<r.xmin||a>r.xmax||t<r.zmin||t>r.zmax)throw Error("Profile anchor outside domain");const m=i*Math.PI/180,h=[Math.cos(m),Math.sin(m)],x={x:a,z:t},u=ya({anchor:x,direction:h},r),b=(a-o)/f,l=(t-d)/f,g=Math.abs(h[1])<1e-12&&Math.abs(l-Math.round(l))<1e-8,w=Math.abs(h[0])<1e-12&&Math.abs(b-Math.round(b))<1e-8,_=(g||w)&&Math.abs(b-Math.round(b))<1e-8&&Math.abs(l-Math.round(l))<1e-8;let p;if(_)p=Array.from({length:g?s:c},(y,S)=>((g?o:d)+S*f-(g?a:t))/(g?h[0]:h[1]));else{const y=Math.max(2,Math.ceil((u[1]-u[0])/f)+1);p=Array.from({length:y},(S,E)=>u[0]+(u[1]-u[0])*E/(y-1))}p=[...p,0].sort((y,S)=>y-S).filter((y,S,E)=>S===0||Math.abs(y-E[S-1])>1e-9);const v=p.map(y=>{const S=a+y*h[0],E=t+y*h[1],A=(S-o)/f,C=(E-d)/f;let k=null,F=null;if(_){const R=Math.round(C)*s+Math.round(A);e.common[R]&&(k=e.heightA[R],F=e.heightB[R])}else if(s>=2&&c>=2){const R=Math.max(0,Math.min(s-2,Math.floor(A))),I=Math.max(0,Math.min(c-2,Math.floor(C))),O=A-R,D=C-I,T=[I*s+R,I*s+R+1,(I+1)*s+R,(I+1)*s+R+1],z=[(1-O)*(1-D),O*(1-D),(1-O)*D,O*D];T.every(M=>e.common[M]&&Number.isFinite(e.heightA[M])&&Number.isFinite(e.heightB[M]))&&(k=T.reduce((M,P,G)=>M+z[G]*e.heightA[P],0),F=T.reduce((M,P,G)=>M+z[G]*e.heightB[P],0))}return{distance:y,x:S,z:E,a:k,b:F,difference:k===null||F===null?null:F-k}});return{anchor:x,direction:h,sampling:_?"native_columns":"bilinear_common_four",step:f,points:v}}function st(e,a){return{first:ja(e,{...a.hotspot,directionDeg:a.directionDeg}),second:ja(e,{...a.hotspot,directionDeg:a.directionDeg+90})}}function La(e){let a=0,t=0,i=0,r=0,c=null;for(const s of e){if(!Number.isFinite(s.error))continue;const o=s.error,d=Math.abs(o);a++,t+=o,i+=d,r+=o*o,!c||d>c.absolute?c={...s,absolute:d,signed:o,ties:1}:d===c.absolute&&c.ties++}return{samples:a,mae:a?i/a:null,bias:a?t/a:null,rmse:a?Math.sqrt(r/a):null,maximum:c}}function Pn(e,a=null){if(a&&(!["xmin","xmax","zmin","zmax"].every(x=>Number.isFinite(a[x]))||a.xmin>a.xmax||a.zmin>a.zmax))throw Error("Invalid evidence ROI");const{shape:[t,i],originXYZ:[r,,c],spacing:s}=e.descriptor;let o=0,d=0,f=0;const m=[];for(let x=0;x<t;x++)for(let u=0;u<i;u++){const b=x*i+u,l=r+u*s,g=c+x*s;a&&(l<a.xmin||l>a.xmax||g<a.zmin||g>a.zmax)||(o++,d+=+!!e.wetA[b],f+=+!!e.wetB[b],e.common[b]&&m.push({index:b,ix:u,iz:x,x:l,z:g,error:e.heightB[b]-e.heightA[b]}))}const h=La(m);return{...h,candidates:o,validGT:d,validPrediction:f,common:h.samples,coverageCandidate:o?h.samples/o:null,coverageGT:d?h.samples/d:null,weighting:"native columns, equal area per column"}}function qa(e,a=null){const t=a?ya(e,a):null,i=e.points.map(r=>({...r,error:r.difference}));return{full:La(i),roi:a?La(t?i.filter(r=>r.distance>=t[0]-1e-10&&r.distance<=t[1]+1e-10):[]):null,sampling:e.sampling,weighting:"sample mean; not native area or volume statistics"}}function x0(e,a,t){if(!e||e.version!==1||e.frame!==a.frameId||e.resourceKey!==JSON.stringify(a)||e.anchorMode!=="hotspot"||!Number.isFinite(e.directionDeg)||e.directionDeg<0||e.directionDeg>=180)throw Error("Invalid diagnosis identity/direction");if(e.caseNote!==void 0&&(typeof e.caseNote!="string"||e.caseNote.length>120))throw Error("Invalid case note");const i=e.hotspot,[r,c]=a.shape,s=a.spacing;if(!i||!Number.isInteger(i.ix)||!Number.isInteger(i.iz)||i.ix<0||i.ix>=c||i.iz<0||i.iz>=r||i.index!==i.iz*c+i.ix||![i.x,i.z].every(Number.isFinite)||Math.abs(i.x-(a.originXYZ[0]+i.ix*s))>1e-9||Math.abs(i.z-(a.originXYZ[2]+i.iz*s))>1e-9||!t||t.index!==i.index||Math.abs(t.x-i.x)>1e-9||Math.abs(t.z-i.z)>1e-9)throw Error("Diagnosis native point mismatch");return{...e.caseNote!==void 0?{caseNote:e.caseNote}:{},version:1,frame:e.frame,resourceKey:e.resourceKey,hotspot:{ix:i.ix,iz:i.iz,index:i.index,x:i.x,z:i.z},roi:e.roi??null,directionDeg:e.directionDeg,anchorMode:"hotspot"}}const fa=["heightA","heightB"],uc=["wetA","wetB","common","steep","calmCells","breakingBand","calmBand"],S0=[...fa,...uc],Fa=(e,a)=>JSON.stringify(e)===JSON.stringify(a);function pc(e,a,t,[i,r]){const c=e.left+(e.borderLeft||0),s=e.top+(e.borderTop||0),o=e.width-(e.borderLeft||0)-(e.borderRight||0),d=e.height-(e.borderTop||0)-(e.borderBottom||0);if(!(o>0&&d>0))throw Error("Canvas content box is empty");const f=Math.max(0,Math.min(r-1,Math.floor((a-c)/o*r))),m=Math.max(0,Math.min(i-1,i-1-Math.floor((t-s)/d*i)));return{ix:f,iz:m,index:m*r+f}}function un(e){return{runId:e.runId,protocolSha256:e.protocol.sourceScriptSha256,manifestA:e.datasetA.manifestSha256,manifestB:e.datasetB.manifestSha256}}function B0(e,a){if(e?.schemaVersion!==1||e.kind!=="protocol-spatial-frame"||e.axisOrder!=="ZX"||Object.entries(a).some(([t,i])=>e[t]!==i))throw Error("Spatial identity/axis mismatch");if(!Number.isInteger(e.frameId)||!Array.isArray(e.shape)||e.shape.length!==2||e.shape.some(t=>!Number.isInteger(t)||t<2)||e.shape[0]*e.shape[1]>1e6)throw Error("Invalid spatial shape");if(!Array.isArray(e.originXYZ)||e.originXYZ.length!==3||!e.originXYZ.every(Number.isFinite)||!Number.isFinite(e.spacing)||e.spacing<=0)throw Error("Invalid spatial coordinates");for(const t of S0){const i=e.resources?.[t],r=fa.includes(t);if(!i||i.file!==`${e.frameId}-${t}.bin`||i.dtype!==(r?"float64-le":"uint8")||i.bytes!==e.shape[0]*e.shape[1]*(r?8:1)||!/^[a-f0-9]{64}$/.test(i.sha256))throw Error("Invalid spatial resource descriptor")}}async function Ua(e,a,t){if(await la(e)!==a)throw Error("Spatial index checksum mismatch");const i=JSON.parse(e),r=un(t);if(i.schemaVersion!==1||i.kind!=="protocol-spatial-index"||Object.entries(r).some(([c,s])=>i[c]!==s)||!Fa(i.frameIds,t.frameIds)||!Fa(i.frames?.map(c=>c.frameId),t.frameIds))throw Error("Spatial index does not match reference run");for(const c of i.frames){if(B0(c,r),!Fa(c.shape,[128,224]))throw Error("Reference spatial shape mismatch");const s=t.rows.find(o=>o.frame===c.frameId)?.height;if(!s||c.summary?.common!==s.common||!["mae_m","bias_m"].every(o=>Number.isFinite(c.summary[o])&&Math.abs(c.summary[o]-s[o])<1e-12))throw Error("Spatial/reference summary mismatch")}return i}async function hc(e){const a=await crypto.subtle.digest("SHA-256",e);return[...new Uint8Array(a)].map(t=>t.toString(16).padStart(2,"0")).join("")}async function ma(e,a,t,{fetcher:i=fetch,baseUrl:r=Wi}={}){B0(e,a);const c=await Promise.all(S0.map(async f=>{const m=e.resources[f],h=await i(r+m.file,{signal:t});if(!h.ok)throw Error(`Spatial resource unavailable: ${e.frameId} / ${f}`);const x=await h.arrayBuffer();if(x.byteLength!==m.bytes||await hc(x)!==m.sha256)throw Error(`Spatial resource checksum mismatch: ${f}`);if(fa.includes(f)){const b=new DataView(x),l=new Float64Array(x.byteLength/8);for(let g=0;g<l.length;g++)l[g]=b.getFloat64(g*8,!0);return[f,l]}const u=new Uint8Array(x);if(u.some(b=>b!==0&&b!==1))throw Error("Invalid spatial mask");return[f,u]}));t?.throwIfAborted();const s={descriptor:e,...Object.fromEntries(c)},[o,d]=e.shape;for(let f=0;f<o*d;f++){if(fa.some(x=>!Number.isFinite(s[x][f])&&!Number.isNaN(s[x][f])))throw Error("Infinite spatial height");const m=+!!(s.wetA[f]&&s.wetB[f]),h=e.originXYZ[0]+f%d*e.spacing;if(s.wetA[f]!==Number(Number.isFinite(s.heightA[f]))||s.wetB[f]!==Number(Number.isFinite(s.heightB[f]))||s.common[f]!==m||s.steep[f]+s.calmCells[f]!==m||s.breakingBand[f]!==+!!(m&&h>-.3&&h<1.1)||s.calmBand[f]!==+!!(m&&h>-7.9&&h<-1.5))throw Error("Spatial mask/height inconsistency")}return s}function Zn(e,a=null){if(a&&(!["xmin","xmax","zmin","zmax"].every(h=>Number.isFinite(a[h]))||a.xmin>a.xmax||a.zmin>a.zmax))throw Error("Invalid world-coordinate ROI");const{shape:[t,i],originXYZ:[r,,c],spacing:s}=e.descriptor;let o=0,d=0,f=0,m=0;for(let h=0;h<t;h++)for(let x=0;x<i;x++){const u=h*i+x,b=r+x*s,l=c+h*s;if(!e.common[u]||a&&(b<a.xmin||b>a.xmax||l<a.zmin||l>a.zmax))continue;const g=e.heightB[u]-e.heightA[u];o++,d+=Math.abs(g),f+=g,m+=g*g}return{common:o,mae_m:o?d/o:null,bias_m:o?f/o:null,rmse_m:o?Math.sqrt(m/o):null}}function gc(e,a,t,i){const{originXYZ:[r,,c],spacing:s,shape:[,o]}=e.descriptor,d=t*o+a;return{distance:i,x:r+a*s,z:c+t*s,a:e.wetA[d]?e.heightA[d]:null,b:e.wetB[d]?e.heightB[d]:null,difference:e.common[d]?e.heightB[d]-e.heightA[d]:null}}function yc(e,a,t,i){const{shape:[r,c],originXYZ:[s,,o],spacing:d}=e.descriptor,f=Math.max(0,Math.min(c-1,(a-s)/d)),m=Math.max(0,Math.min(r-1,(t-o)/d)),h=Math.min(c-2,Math.floor(f)),x=Math.min(r-2,Math.floor(m)),u=f-h,b=m-x,l=[x*c+h,x*c+h+1,(x+1)*c+h,(x+1)*c+h+1],g=[(1-u)*(1-b),u*(1-b),(1-u)*b,u*b];if(l.some(p=>!e.common[p]))return{distance:i,x:a,z:t,a:null,b:null,difference:null};const w=l.reduce((p,v,y)=>p+g[y]*e.heightA[v],0),_=l.reduce((p,v,y)=>p+g[y]*e.heightB[v],0);return{distance:i,x:a,z:t,a:w,b:_,difference:_-w}}function A0(e,{plane:a,index:t=0,angle:i=0,sectionPercent:r=50}){const{shape:[c,s],originXYZ:[o,,d],spacing:f}=e.descriptor;if(["xy","yz"].includes(a)){if(!Number.isInteger(t)||t<0||t>=(a==="xy"?c:s))throw Error("Native section outside lattice");return{sampling:"native_columns",points:Array.from({length:a==="xy"?s:c},(S,E)=>gc(e,a==="xy"?E:t,a==="xy"?t:E,E*f))}}if(a!=="oblique"||!Number.isFinite(i)||!Number.isFinite(r)||r<0||r>100)throw Error("Height profile requires a vertical XY/YZ/Y-axis section");const m=Math.cos(i*Math.PI/180),h=Math.sin(i*Math.PI/180),x=[-h,m],u=o+(s-1)*f,b=d+(c-1)*f,l=[[o,d],[o,b],[u,d],[u,b]].map(([S,E])=>S*x[0]+E*x[1]),g=Math.min(...l)+(Math.max(...l)-Math.min(...l))*r/100,w=x[0]*g,_=x[1]*g;let p=-1/0,v=1/0;for(const[S,E,A,C]of[[w,m,o,u],[_,h,d,b]])if(Math.abs(E)<1e-12){if(S<A-1e-9||S>C+1e-9)return{sampling:"bilinear_common_four",points:[]}}else{const k=(A-S)/E,F=(C-S)/E;p=Math.max(p,Math.min(k,F)),v=Math.min(v,Math.max(k,F))}if(p>v)return{sampling:"bilinear_common_four",points:[]};const y=Math.max(2,Math.ceil((v-p)/f)+1);return{sampling:"bilinear_common_four",points:Array.from({length:y},(S,E)=>{const A=p+(v-p)*E/(y-1);return yc(e,w+A*m,_+A*h,A-p)})}}const ot="oceanscope.protocol-report.v1",vc=e=>JSON.parse(JSON.stringify(e)),Qt=e=>JSON.stringify(e,(a,t)=>t&&typeof t=="object"&&!Array.isArray(t)?Object.fromEntries(Object.keys(t).sort().map(i=>[i,t[i]])):t),ra=(e,a)=>Qt(e)===Qt(a),Vn=(e,a=-1e9,t=1e9)=>typeof e=="number"&&Number.isFinite(e)&&e>=a&&e<=t;function k0(e){if(!/^[a-f0-9]{64}$/.test(e.verifiedPayloadSha256)||!/^[a-f0-9]{64}$/.test(e.declarations?.sha256))throw Error("Verified report identity unavailable");return{...un(e),bundleSha256:e.verifiedPayloadSha256,declarationsSha256:e.declarations.sha256}}function C0(e,a,t,i){if(!e||e.frame!==a.frameId||!t.frameIds.includes(e.frame))throw Error("Report frame mismatch");if(!["xy","xz","yz","oblique"].includes(e.plane)||!["x","y","z"].includes(e.rotationAxis)||!Vn(e.angle,0,180)||!Vn(e.sectionPercent,0,100))throw Error("Invalid report section");const r=e.plane==="xy"||e.plane==="oblique"?a.shape[0]:e.plane==="yz"?a.shape[1]:i?.[0]?.processing.lattice.dimensions[1]??64;if(!Number.isInteger(e.sliceIndex)||e.sliceIndex<0||e.sliceIndex>=r)throw Error("Report slice outside lattice");const c=e.selection;if(!c||!["all","six"].includes(c.subset)||!["fine","coarse"].includes(c.grid)||!["height","velocity"].includes(c.metric))throw Error("Invalid report selection");let s=null,o=null;if(e.geometry){const f=e.geometry.settings?.representation===Dn;if(!i?.length||!f&&!t.geometryFrames.includes(e.frame))throw Error("Report geometry unavailable");s=sn(e.geometry,i);const m=i.find(h=>h.id===s.settings.caseId);if(o=f?o0(m,e.frame,s.settings.quality):et(m,e.frame),!o||!ra(e.geometryResource,o))throw Error("Report preview resource identity mismatch");for(const h of["frame","plane","sliceIndex","rotationAxis","angle","sectionPercent"])if(s.settings[h]!==e[h])throw Error("Report geometry/section mismatch")}const d=typeof e.geometryStatus?.reason=="string"?e.geometryStatus.reason.slice(0,500):s?"Exact-frame preview bytes verified":"No 3D evidence captured";return{frame:e.frame,plane:e.plane,sliceIndex:e.sliceIndex,rotationAxis:e.rotationAxis,angle:e.angle,sectionPercent:e.sectionPercent,selection:{subset:c.subset,grid:c.grid,metric:c.metric},geometry:s,geometryResource:o,geometryStatus:{status:s?"included":"unavailable",reason:d}}}function Ja(e){if(e==null)return null;if(!["xmin","xmax","zmin","zmax"].every(a=>Vn(e[a]))||e.xmin>e.xmax||e.zmin>e.zmax)throw Error("Invalid report ROI");return Object.fromEntries(["xmin","xmax","zmin","zmax"].map(a=>[a,e[a]]))}function ba(e,a){if(e==null)return null;const[t,i]=a.shape,r=e.index;if(!Number.isInteger(r)||r<0||r>=t*i)throw Error("Invalid report probe");const c=a.originXYZ[0]+r%i*a.spacing,s=a.originXYZ[2]+Math.floor(r/i)*a.spacing;if(!Vn(e.x)||!Vn(e.z)||Math.abs(c-e.x)>1e-9||Math.abs(s-e.z)>1e-9)throw Error("Report probe/column mismatch");return{index:r,x:c,z:s}}function _c({bundle:e,spatial:a,view:t,roi:i=null,probe:r=null,catalog:c,diagnosis:s=null,appearance:o=null}){const d=a.descriptor,f=C0(t,d,e,c),m=Ja(i);if(o!=null&&typeof o.absoluteError!="boolean")throw Error("Invalid report appearance");let h=o?{appearance:{absoluteError:o.absoluteError}}:{};if(s){const u=x0({...s,roi:m},d,ba(r,d));if(!a.common[u.hotspot.index])throw Error("Diagnosis hotspot is no longer jointly valid");const b=st(a,u);h={diagnosis:u,appearance:{absoluteError:o?.absoluteError??!1},profiles:b,evidence:{frame:Pn(a),roi:m?Pn(a,m):null,first:qa(b.first,m),second:qa(b.second,m)}}}const x=f.plane==="xy"||f.plane==="yz"||f.plane==="oblique"&&f.rotationAxis==="y"?A0(a,{plane:f.plane,index:f.sliceIndex,angle:f.angle,sectionPercent:f.sectionPercent}):null;return vc({schema:ot,...h,createdAt:new Date().toISOString(),source:k0(e),descriptor:d,view:f,roi:m,probe:ba(r,d),global:Zn(a),local:m?Zn(a,m):null,profile:x,metrics:w0(e,{...f.selection,frame:f.frame}),frameMetrics:e.rows.find(u=>u.frame===f.frame),declarations:e.declarations,unitStatus:e.unitStatus,scope:"Native highest-crossing height columns; ROI/profile do not replace all96 global metrics. Units are source convention, not independently calibrated."})}function Ec(e,a,t,{catalog:i}={}){if(new TextEncoder().encode(e).length>1024*1024)throw Error("Report file too large");const r=JSON.parse(e);if(r?.schema!==ot)throw Error("Unsupported protocol report format");if(!ra(r.source,k0(a)))throw Error("Report identity mismatch");const c=t.frames.find(o=>o.frameId===r.view?.frame);if(!c||!ra(r.descriptor,c))throw Error("Report resource mismatch");let s={};if(r.appearance!=null){if(typeof r.appearance.absoluteError!="boolean")throw Error("Invalid report appearance");s.appearance={absoluteError:r.appearance.absoluteError}}if(r.diagnosis!=null){const o=ba(r.probe,c),d=Ja(r.roi),f=x0(r.diagnosis,c,o);if(!ra(f.roi,d))throw Error("Diagnosis ROI mismatch");if(typeof r.appearance?.absoluteError!="boolean")throw Error("Invalid diagnosis appearance");s={diagnosis:f,appearance:{absoluteError:r.appearance.absoluteError}}}return{descriptor:c,...s,view:C0(r.view,c,a,i),roi:Ja(r.roi),probe:ba(r.probe,c)}}function wc(e){const a=i=>'"'+String(i==null?"":typeof i=="object"?JSON.stringify(i):i).replaceAll('"','""')+'"',t=[["kind","name","value","unit","scope","metadata"]];t.push(["source","snapshot",e.createdAt,"",e.schema,e.unitStatus]);for(const[i,r]of Object.entries(e.source))t.push(["source",i,r,"","identity",""]);t.push(["view","selection",e.view,"","current view",{roi:e.roi,probe:e.probe}],["source","declarations",e.declarations,"","claimed / verified / unknown",""]);for(const i of e.metrics)t.push(["metric",i.id,i.value,i.unit,i.scope,i]);for(const[i,r]of[["frame",e.global],["ROI",e.local]])if(r)for(const[c,s]of Object.entries(r))t.push(["spatial",c,s,c==="common"?"columns":"m",i,{frame:e.view.frame,roi:i==="ROI"?e.roi:null}]);for(const i of e.profile?.points??[])t.push(["profile","height A / B / difference",i,"m",e.profile.sampling,{frame:e.view.frame,plane:e.view.plane}]);if(e.diagnosis){t.push(["diagnosis","selection",e.diagnosis,"","native hotspot / current ROI",e.appearance]);for(const[i,r]of Object.entries(e.evidence))r&&t.push(["diagnostic evidence",i,r,"m; coverage fractions","explicit native or profile sample weighting",r.weighting??""]);for(const[i,r]of Object.entries(e.profiles))for(const c of r.points)t.push(["paired profile",i,c,"m",r.sampling,{frame:e.view.frame,anchor:r.anchor,direction:r.direction,roi:e.roi}])}return t.map(i=>i.map(a).join(",")).join(`
`)}function xc(e,a){return lt({stem:`${e.source.runId}_${e.view.frame}_protocol-report`,record:e,csv:wc(e),previewUrl:a})}function lt({stem:e,record:a,csv:t,previewUrl:i}){const r=[],c=s=>{const o=URL.createObjectURL(s);return r.push(o),o};try{const s={csv:{name:e+".csv",mime:"text/csv",content:t},json:{name:e+".json",mime:"application/json",content:JSON.stringify(a,null,2)}};if(i){if(!i.startsWith("data:image/png;base64,"))throw Error("PNG encoding failed");const o=Uint8Array.from(atob(i.slice(i.indexOf(",")+1)),f=>f.charCodeAt(0)),d=new Blob([o],{type:"image/png"});s.png={name:e+".png",mime:"image/png",blob:d,href:c(d)}}for(const o of["csv","json"]){const d=s[o];d.blob=new Blob([d.content],{type:d.mime+";charset=utf-8"}),d.href=c(d.blob)}return s}catch(s){for(const o of r)URL.revokeObjectURL(o);throw s}}const Ha=`{
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
`,Sc="complete",Bc=96,Ac=192,kc="2d38783dc08dd1f8683abd5b5fde7aca2532c46473aa3acaf8024092833cb44a",Cc=63307776,Ic=25.37458590004826,Mc=202805248,Nc=1e-12,Rc=1867211,Oc={mae_m:.015322750768874766,bias_m:-.00377808261841917},ua={status:Sc,frames:Bc,rawHashesVerified:Ac,indexSha256:kc,binaryBytes:Cc,elapsedSeconds:Ic,peakWorkingSetBytes:Mc,referenceTolerance:Nc,common:Rc,weightedHeight:Oc},$c="oceanscope.velocity-alignment.v1",Tc=1001,Fc="best-1027",Dc="partial",zc=!0,Zc={gt:{frame:1001,file:"clean_fullsdf_vel.1001.vdb",bytes:10508067,sha256:"8cd757ed7cecfe8f677a6e8994e053bcbb178e93a8c0b257a82c89b14de954be",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1001,file:"recon_fullsdf_vel.1001.vdb",bytes:10562288,sha256:"fd0ab7ff40ed007eb3543c6326ba10f7f98dbda59e094a0dbfbb2066b4212f26",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},Xc={frame:1001,url:"/data/velocity-raw/1001.ocfld.gz",packedBytes:15074066,packedSha256:"c1284e150f6c95880ae942c08fb3a54209096127c13ed9d14e4d48a8cac6a54b",decodedBytes:62391416,decodedSha256:"723f73f42097cede6faf03a7cd106af8d7aef55eabcdc4207b469fb9a1a4a197",roundtrip:"exact"},Pc={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},Vc={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},Gc={gt:0,prediction:2856765473069345e-22},Wc=2856765473069345e-22,Yc=["x","y","z"],jc="ZYX",Lc={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},qc="m/s",Uc="Existing source convention only; no independent physical or time calibration.",Jc="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",Hc={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},Kc={resource:{frame:1001,url:"/data/fields/best-1027/1001.ocfld.gz",packedBytes:26128772,packedSha256:"3a504d78eefed6ef1a3e5fef3523f62eb7f0a13ae68e67e8cb23907f4b6f6f46",decodedBytes:99523224,decodedSha256:"8760d8da4ce6ac716b433ede5c787ba13baff142a4324fb03e13824f90e978f8"},comparison:{gt:{error:"vel.x values differ at 1363784 samples; max 2.8210940528072825e-16"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: vel.x values differ at 1363784 samples; max 2.8210940528072825e-16"],retainedUnchanged:!0},Qc="exact",es={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:179815,sha256:"6264bad6598a054b1ac18538a73305aa383761e97e67b4e8120f74a6f73fab06"},common:{count:177960,sha256:"33db691f210a15dd5e533103720e9708b363e05c66e4cc266f14413335d8371f"},computable:{count:177960,sha256:"33db691f210a15dd5e533103720e9708b363e05c66e4cc266f14413335d8371f"}},ns=0,as=[],ts="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",is={schema:$c,frame:Tc,caseId:Fc,status:Dc,dataAndDomainVerified:zc,source:Zc,resource:Xc,lattice:Pc,originalLattices:Vc,cacheLatticeMaxDisplacement:Gc,pairMaxDisplacement:Wc,componentOrder:Yc,arrayOrder:jc,vectorBasis:Lc,unitClaim:qc,unitEvidence:Uc,protocolSha256:Jc,domainDefinition:Hc,legacyCache:Kc,diagnosticRoundtrip:Qc,domain:es,nonfiniteExcluded:ns,failures:as,scope:ts},rs="oceanscope.velocity-alignment.v1",cs=1049,ss="best-1027",os="partial",ls=!0,ds={gt:{frame:1049,file:"clean_fullsdf_vel.1049.vdb",bytes:11105671,sha256:"a821ec84b9f2eecc09f234cdf05050e77e3572d6f9c3d46bce94d0a28f328df9",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1049,file:"recon_fullsdf_vel.1049.vdb",bytes:10571839,sha256:"ff18d054439135a9c39abc139aa628ca7dcb753dd46b389b86bde47747f5d4c3",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},fs={frame:1049,url:"/data/velocity-raw/1049.ocfld.gz",packedBytes:15261605,packedSha256:"913c1ddbec87d484f71905720334c90ca6ebccdad5c48a543f69eb405308e707",decodedBytes:62391416,decodedSha256:"403ff5ea6e2afcd3129761caa6a5adf7f2699e180d1733e85774ea1a55df4ef1",roundtrip:"exact"},ms={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},bs={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},us={gt:0,prediction:2856765473069345e-22},ps=2856765473069345e-22,hs=["x","y","z"],gs="ZYX",ys={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},vs="m/s",_s="Existing source convention only; no independent physical or time calibration.",Es="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",ws={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},xs={resource:{frame:1049,url:"/data/fields/best-1027/1049.ocfld.gz",packedBytes:26633403,packedSha256:"1443fd356c49996f7b7bac3ab8d8ee9fc4b40d9a6d4a0734b2a0e6e2592c2548",decodedBytes:99523224,decodedSha256:"ad0deb564ccd2db1fc91e4db9f711acaa8f6c231e3acca426773f8bb0cbf851a"},comparison:{gt:{error:"sdf values differ at 2 samples; max 0.0"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: sdf values differ at 2 samples; max 0.0"],retainedUnchanged:!0},Ss="exact",Bs={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:189062,sha256:"adaf091d8684752b63cdf670a7f10b150720ed4342c7042ee4ee70311055d839"},common:{count:184957,sha256:"6367149b8f2ca91ca5e7dd4c5eeb75c22cf814b39535732dd9fb2f2a698599de"},computable:{count:184957,sha256:"6367149b8f2ca91ca5e7dd4c5eeb75c22cf814b39535732dd9fb2f2a698599de"}},As=0,ks=[],Cs="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",Is={schema:rs,frame:cs,caseId:ss,status:os,dataAndDomainVerified:ls,source:ds,resource:fs,lattice:ms,originalLattices:bs,cacheLatticeMaxDisplacement:us,pairMaxDisplacement:ps,componentOrder:hs,arrayOrder:gs,vectorBasis:ys,unitClaim:vs,unitEvidence:_s,protocolSha256:Es,domainDefinition:ws,legacyCache:xs,diagnosticRoundtrip:Ss,domain:Bs,nonfiniteExcluded:As,failures:ks,scope:Cs},Ms="oceanscope.velocity-alignment.v1",Ns=1096,Rs="best-1027",Os="partial",$s=!0,Ts={gt:{frame:1096,file:"clean_fullsdf_vel.1096.vdb",bytes:11272288,sha256:"7153212dbf15d5970fab77d2c187a858fa5735447abfcd8dfc717fa1844d4e94",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1096,file:"recon_fullsdf_vel.1096.vdb",bytes:10500539,sha256:"16187d0cad3236b3ebef4900650d0b3cd98294ef9ab248088797a73365200db2",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},Fs={frame:1096,url:"/data/velocity-raw/1096.ocfld.gz",packedBytes:15329856,packedSha256:"a0731f4996fadbe7d2e7c9b5562250ead6a8cc817a2f7b1f44d393c45d86dd7d",decodedBytes:62391416,decodedSha256:"bfe8078ba7a9436b73b8906e210a8e7d8f0b312fc772c4ee0e68f9e282fedb9c",roundtrip:"exact"},Ds={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},zs={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},Zs={gt:0,prediction:2856765473069345e-22},Xs=2856765473069345e-22,Ps=["x","y","z"],Vs="ZYX",Gs={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},Ws="m/s",Ys="Existing source convention only; no independent physical or time calibration.",js="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",Ls={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},qs={resource:{frame:1096,url:"/data/fields/best-1027/1096.ocfld.gz",packedBytes:26932173,packedSha256:"5900168e2e47a98c85f505558e49c754619e3824ea1404299d783fd7451dd0ee",decodedBytes:99523224,decodedSha256:"1cdb1261a33ed72f515bd59a75668467cbb8d7f78da7af6b360653cf6cbcb2f9"},comparison:{gt:{error:"sdf values differ at 1 samples; max 0.0"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: sdf values differ at 1 samples; max 0.0"],retainedUnchanged:!0},Us="exact",Js={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:223882,sha256:"3d3747b91823a8c0b8e2d7487c955abe70b257b49b9079a660ddb1112f7c5cf9"},common:{count:217252,sha256:"f4cca5ed859acd6e09a9ab9318b117c094d2647572e72b961768938e558395a8"},computable:{count:217252,sha256:"f4cca5ed859acd6e09a9ab9318b117c094d2647572e72b961768938e558395a8"}},Hs=0,Ks=[],Qs="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",eo={schema:Ms,frame:Ns,caseId:Rs,status:Os,dataAndDomainVerified:$s,source:Ts,resource:Fs,lattice:Ds,originalLattices:zs,cacheLatticeMaxDisplacement:Zs,pairMaxDisplacement:Xs,componentOrder:Ps,arrayOrder:Vs,vectorBasis:Gs,unitClaim:Ws,unitEvidence:Ys,protocolSha256:js,domainDefinition:Ls,legacyCache:qs,diagnosticRoundtrip:Us,domain:Js,nonfiniteExcluded:Hs,failures:Ks,scope:Qs},no=new Map([[1001,is],[1049,Is],[1096,eo]]);function va(e){const a=no.get(e);return!a||a.frame!==e||a.caseId!=="best-1027"||!a.dataAndDomainVerified||a.diagnosticRoundtrip!=="exact"||a.resource.frame!==e||a.resource.url!==`/data/velocity-raw/${e}.ocfld.gz`||a.protocolSha256!==zn.protocolSha256||a.source.gt.manifestSha256!==zn.manifestA||a.source.prediction.manifestSha256!==zn.manifestB?null:a}async function I0(e,{signal:a}={}){const t=va(e);if(!t)throw Error("No verified velocity diagnostic resource for this frame");const i=await fetch(t.resource.url,{signal:a});if(!i.ok)throw Error(`${e} velocity resource unavailable (${i.status}); generate the local diagnostic resource using the alignment handoff`);const r=f0(await s0(await i.arrayBuffer(),t.resource));return a?.throwIfAborted(),{frame:r,lattice:t.lattice,alignment:t}}const ao=["collaborator-native","common-finite-exploration"];function M0({frame:e,lattice:a,alignment:t,domain:i}){if(!ao.includes(i))throw Error("Unknown velocity domain");if(i==="collaborator-native"&&!t?.dataAndDomainVerified)throw Error("Velocity domain has not been verified");const r=a?.dimensions,c=a?.origin,s=a?.axisSteps;if(!r||r.length!==3||r.some(u=>!Number.isInteger(u)||u<1)||!c||c.some(u=>!Number.isFinite(u))||!s||s.length!==3||s.some((u,b)=>u.length!==3||u.some((l,g)=>!Number.isFinite(l)||(b===g?l<=0:l!==0))))throw Error("Unsupported velocity lattice");const o=e?.groups?.velocity,d=e?.groups?.sdf?.ground_truth;if([d,o?.ground_truth_valid,o?.prediction_valid,...["ground_truth","prediction"].flatMap(u=>[..."xyz"].map(b=>o?.[u+"."+b]))].some(u=>!u||u.shape?.length!==3||u.shape.some((b,l)=>b!==r[l])||u.values?.length!==r[0]*r[1]*r[2]))throw Error("Velocity field shape mismatch");const m=t?.domainDefinition?.cropX??[11,212],h=t?.domainDefinition?.cropZ??[11,105];function x(u,b,l){const g=u+r[0]*(b+r[1]*l),w=i!=="collaborator-native"||u>=m[0]&&u<m[1]&&l>=h[0]&&l<h[1],_=w&&o.ground_truth_valid.values[g]>0&&(i!=="collaborator-native"||d.values[g]<Math.fround(-.1)),p=w&&o.prediction_valid.values[g]>0,v=_&&p,y=[..."xyz"].map(C=>o["ground_truth."+C].values[g]),S=[..."xyz"].map(C=>o["prediction."+C].values[g]),E=[...y,...S].every(Number.isFinite);return{candidate:w,gtEligible:_,predValid:p,paired:v,common:v&&E,nonfiniteExcluded:v&&!E,gt:y,pred:S}}return{d:r,o:c,a:s,sample:x,world:(u,b,l)=>c.map((g,w)=>g+s[0][w]*u+s[1][w]*b+s[2][w]*l)}}function N0(e,{x:a,z:t}){return[Math.round((a-e.origin[0])/e.axisSteps[0][0]),Math.round((t-e.origin[2])/e.axisSteps[2][2])]}function to(e){const{d:a,sample:t}=M0(e),[i,r]=N0(e.lattice,e.hotspotXZ);if(i<0||i>=a[0]||r<0||r>=a[2])return null;for(let c=a[1]-1;c>=0;c--)if(t(i,c,r).common)return c;return null}function R0(e){if(e.plane!=="xz")throw Error("Velocity diagnosis supports XZ slices only");const{d:a,a:t,world:i,sample:r}=M0(e),[c,s,o]=a,d=e.sliceIndex;if(!Number.isInteger(d)||d<0||d>=s)throw Error("Velocity Y index is outside the grid");const f=e.roiXZ;if(f&&(Object.values(f).length!==4||["xmin","xmax","zmin","zmax"].some(v=>!Number.isFinite(f[v]))||f.xmin>f.xmax||f.zmin>f.zmax))throw Error("Invalid velocity ROI bounds");const m={domain:e.domain,width:c,height:o,sliceIndex:d,stepX:t[0][0],stepZ:t[2][2],worldAt:v=>i(v%c,d,Math.floor(v/c)),roiView:null};for(const v of["speedGT","speedPred","vectorError","speedDelta"])m[v]=new Float64Array(c*o).fill(NaN);for(const v of["candidate","gtEligible","common","roi"])m[v+"Mask"]=new Uint8Array(c*o);m.vectorsGT=new Float64Array(3*c*o),m.vectorsPred=new Float64Array(3*c*o);const h=()=>({counts:{candidate:0,gtEligible:0,predValid:0,paired:0,common:0,nonfiniteExcluded:0,gtOnly:0,predOnly:0},sumE:0,sumDelta:0,maximum:null}),x=h(),u=h();function b(v,y,S){for(const E of["candidate","gtEligible","predValid","paired","common","nonfiniteExcluded"])v.counts[E]+=Number(y[E]);if(v.counts.gtOnly+=Number(y.gtEligible&&!y.predValid),v.counts.predOnly+=Number(y.predValid&&!y.gtEligible),y.common){const E=m.vectorError[S];v.sumE+=E,v.sumDelta+=m.speedDelta[S],(!v.maximum||E>v.maximum.value)&&(v.maximum={value:E,index:S,world:m.worldAt(S)})}}let l=c,g=-1,w=o,_=-1;for(let v=0;v<o;v++)for(let y=0;y<c;y++){const S=y+c*v,E=r(y,d,v),[A,,C]=i(y,d,v);for(const k of["candidate","gtEligible","common"])m[k+"Mask"][S]=Number(E[k]);E.common&&(m.vectorsGT.set(E.gt,3*S),m.vectorsPred.set(E.pred,3*S),m.speedGT[S]=Math.hypot(...E.gt),m.speedPred[S]=Math.hypot(...E.pred),m.vectorError[S]=Math.hypot(...E.pred.map((k,F)=>k-E.gt[F])),m.speedDelta[S]=m.speedPred[S]-m.speedGT[S]),b(x,E,S),(!f||A>=f.xmin&&A<=f.xmax&&C>=f.zmin&&C<=f.zmax)&&(b(u,E,S),m.roiMask[S]=1,l=Math.min(l,y),g=Math.max(g,y),w=Math.min(w,v),_=Math.max(_,v))}g>=0&&(m.roiView={x:l,z:w,width:g-l+1,height:_-w+1});function p(v){const y=v.counts;return{counts:y,coverageCandidate:y.candidate?y.common/y.candidate:null,coverageGT:y.gtEligible?y.common/y.gtEligible:null,meanE:y.common?v.sumE/y.common:null,meanSpeedDelta:y.common?v.sumDelta/y.common:null,maximum:v.maximum}}return m.whole=p(x),m.local=p(u),m}function O0(e,a){if(a!==null&&(!Number.isFinite(a)||a<0))throw Error("Invalid direction threshold");const{commonMask:t,roiMask:i,vectorsGT:r,vectorsPred:c,speedGT:s,speedPred:o}=e,d=new Float64Array(t.length).fill(NaN),f=new Uint8Array(t.length);let m=0,h=0,x=0,u=0;if(a!==null)for(let l=0;l<t.length;l++){if(!t[l]||s[l]<=a||o[l]<=a)continue;let g=0;for(let _=0;_<3;_++)g+=r[3*l+_]/s[l]*(c[3*l+_]/o[l]);const w=Math.acos(Math.max(-1,Math.min(1,g)))*180/Math.PI;d[l]=w,f[l]=1,x++,m+=w,i[l]&&(u++,h+=w)}const b=(l,g,w)=>({count:l,excludedLowSpeedCount:a===null?null:w-l,meanDegrees:l?g/l:null});return{degrees:d,mask:f,whole:b(x,m,e.whole.counts.common),local:b(u,h,e.local.counts.common)}}function $0(e,a,t,i){const{width:r,commonMask:c,vectorsGT:s,vectorsPred:o,stepX:d,stepZ:f}=e;let m=i??0;for(let l=0;i===void 0&&l<c.length;l++)c[l]&&(m=Math.max(m,Math.hypot(s[3*l],s[3*l+2]),Math.hypot(o[3*l],o[3*l+2])));const h=m>0?.72*Math.min(t,a.width,a.height)/m:0,x=Math.min(d,f),u=l=>[l[0]*h*x/d,l[2]*h*x/f],b=[];for(let l=Math.ceil(a.z/t)*t;l<a.z+a.height;l+=t)for(let g=Math.ceil(a.x/t)*t;g<a.x+a.width;g+=t){const w=g+r*l;if(!c[w])continue;const _=Array.from(s.subarray(3*w,3*w+3)),p=Array.from(o.subarray(3*w,3*w+3));b.push({index:w,x:g,z:l,gt:_,pred:p,gtOffset:u(_),predOffset:u(p)})}return{points:b,stride:t,gain:h,maxProjection:m,referenceSpeed:m,referenceGridLength:u([m,0,0])[0]}}const T0="oceanscope.velocity-diagnosis.v1",io="native-xz-paired-v1";function ro(e,a,t,i=new Date().toISOString()){const{display:r,direction:c,probe:s}=e,[o]=a.lattice.dimensions,{arrows:d}=r;return structuredClone({schema:T0,createdAt:i,source:{caseId:a.caseId,codeRevision:t,calculation:io,protocolSha256:a.protocolSha256,originals:a.source,resource:a.resource},alignment:{lattice:a.lattice,unitClaim:a.unitClaim,unitEvidence:a.unitEvidence,vectorBasis:a.vectorBasis},domain:{id:e.domain,definition:e.domainDefinition},plane:{frame:a.frame,axis:"xz",yIndex:e.yIndex,yWorld:e.yWorld},roi:e.roiXZ,probe:{xIndex:s.index%o,zIndex:Math.floor(s.index/o),xyz:s.xyz},appearance:{mode:r.mode,zoom:r.zoomed,viewport:r.view,ranges:r.ranges},arrows:{enabled:d!==null,stride:d?.stride??null,gain:d?.gain??null,referenceSpeed:d?.referenceSpeed??null,referenceGridLength:d?.referenceGridLength??null},angleThreshold:{tau:c.tau,unit:c.unit,source:c.thresholdSource},summary:{whole:e.whole,roi:e.local,direction:{whole:c.whole,roi:c.local}},samples:{scope:"Probe and displayed arrow anchors. CSV contains the full native slice.",probe:s,arrowNativeIndices:d?.points.map(f=>f.index)??[]},surfaceCase:e.surfaceRequest})}function co(e,a,t){const{plane:i,domain:r}=e,c=new Set(e.samples.arrowNativeIndices),s=["frame,y_index,native_index,x_index,z_index,x,y,z,domain,in_roi,candidate,gt_eligible,common,probe,arrow_anchor,gt_vx,gt_vy,gt_vz,pred_vx,pred_vy,pred_vz,gt_speed,pred_speed,vector_error,speed_delta,direction_tau,angle_eligible,angle_degrees"];for(let o=0;o<a.commonMask.length;o++){const d=a.commonMask[o],f=t.mask[o],m=d?[...a.vectorsGT.subarray(3*o,3*o+3),...a.vectorsPred.subarray(3*o,3*o+3),a.speedGT[o],a.speedPred[o],a.vectorError[o],a.speedDelta[o]]:Array(10).fill("");s.push([i.frame,i.yIndex,o,o%a.width,Math.floor(o/a.width),...a.worldAt(o),r.id,a.roiMask[o],a.candidateMask[o],a.gtEligibleMask[o],d,+(o===e.samples.probe.index),Number(c.has(o)),...m,e.angleThreshold.tau,f,f?t.degrees[o]:""].join(","))}return s.join(`
`)+`
`}function so(e,a,t=.25){const{width:i,height:r,stepX:c,stepZ:s,commonMask:o}=e,d=Math.min(c,s),f=d*t,m=d,h=24*d,x=Math.round(h/f),u=1e-8,b=y=>{const[S,,E]=e.worldAt(0);return[S+y[0]*c,E+y[1]*s]};function l(y,S){const[E,A]=y;if(E<0||A<0||E>=i-1||A>=r-1)return{stop:"grid"};const C=Math.floor(E)+i*Math.floor(A),k=E%1,F=A%1,R=[C,C+1,C+i,C+i+1],I=[(1-k)*(1-F),k*(1-F),(1-k)*F,k*F];if(R.some(M=>!o[M]))return{stop:"mask"};const O=M=>R.reduce((P,G,U)=>P+I[U]*S[G*3+M],0),D=O(0),T=O(2),z=Math.hypot(D,T);return z<=u?{stop:"slow"}:{dir:[D/z/c,T/z/s]}}const g=(y,S,E)=>[y[0]+E*S[0],y[1]+E*S[1]];function w(y){const S=[];let E=a;for(let A=0;A<=x;A++){const C=l(E,y);if(C.stop)return{points:S,stop:C.stop};if(S.push(b(E)),A===x)return{points:S,stop:"limit"};const k=l(g(E,C.dir,f/2),y);if(k.stop)return{points:S,stop:k.stop};const F=g(E,k.dir,f),R=[0,1];for(let I=0;I<2;I++)for(let O=Math.floor(Math.min(E[I],F[I]))+1;O<Math.max(E[I],F[I]);O++)R.push((O-E[I])/(F[I]-E[I]));R.sort((I,O)=>I-O);for(let I=1;I<R.length;I++){const O=l(g(E,k.dir,f*(R[I]+R[I-1])/2),y);if(O.stop)return{points:S,stop:O.stop}}E=F}}const _=w(e.vectorsGT),p=w(e.vectorsPred);let v=null;for(let y=1;y<Math.min(_.points.length,p.points.length);y++){const S=_.points[y],E=p.points[y],A=Math.hypot(S[0]-E[0],S[1]-E[1]);if(A>=m){v={i:y,arc:y*f,gap:A,gt:S,pred:E};break}}return{seed:b(a),step:f,separation:m,maxArc:h,floor:u,gt:_,pred:p,split:v}}const ue=(e,a=6)=>e==null?"N/A":Number(e).toPrecision(a);function oe(e,a,t,i,r=1800,c=23,s="#203747"){for(e.fillStyle=s,e.font=`${c}px sans-serif`;e.measureText(String(a)).width>r&&c>12;)e.font=`${--c}px sans-serif`;e.fillText(String(a),t,i)}function Da(e,a,t,i,r,c=20){e.font=`${c}px sans-serif`,e.fillStyle="#3c5365";let s="";for(const o of String(a).split(" ")){const d=s?s+" "+o:o;e.measureText(d).width>r&&s?(e.fillText(s,t,i),i+=c+8,s=o):s=d}return e.fillText(s,t,i),i+c+8}function oo(e,a,t,i,r,c,s,o,d,f){const[m,h]=a.descriptor.shape,x=document.createElement("canvas");x.width=h,x.height=m;const u=x.getContext("2d"),b=u.createImageData(h,m),l=i==="difference",g=l&&t.appearance?.absoluteError,w=l?a.common:a[i==="heightA"?"wetA":"wetB"],_=l?[g?0:-f,f]:d;for(let A=0;A<m;A++)for(let C=0;C<h;C++){const k=A*h+C,F=((m-1-A)*h+C)*4;if(!w[k]){b.data.set([225,230,235,255],F);continue}const R=a.heightB[k]-a.heightA[k],I=l?g?Math.abs(R):R:a[i][k],O=Math.max(0,Math.min(1,(I-_[0])/(_[1]-_[0]))),D=l&&!g?O<.5?[80+350*O,130+230*O,220+70*O]:[255,245-350*(O-.5),255-440*(O-.5)]:[35+195*O,75+155*O,155+70*O];b.data.set([...D,255],F)}u.putImageData(b,0,0),e.imageSmoothingEnabled=!1,e.drawImage(x,r,c,s,o);const{originXYZ:[p,,v],spacing:y}=a.descriptor,S=(A,C)=>[r+(A-p+y/2)/(h*y)*s,c+o-(C-v+y/2)/(m*y)*o];e.strokeStyle="#182b3c",e.lineWidth=2;for(const A of t.profiles?Object.values(t.profiles):[t.profile])A?.points.length&&(e.beginPath(),A.points.forEach((C,k)=>e[k?"lineTo":"moveTo"](...S(C.x,C.z))),e.stroke());if(t.roi){const A=S(t.roi.xmin,t.roi.zmax),C=S(t.roi.xmax,t.roi.zmin);e.save(),e.beginPath(),e.rect(r,c,s,o),e.clip(),e.strokeRect(A[0],A[1],C[0]-A[0],C[1]-A[1]),e.restore()}if(t.probe){const[A,C]=S(t.probe.x,t.probe.z);e.beginPath(),e.moveTo(A-5,C),e.lineTo(A+5,C),e.moveTo(A,C-5),e.lineTo(A,C+5),e.stroke()}const E=e.createLinearGradient(r,0,r+s,0);l&&!g?(E.addColorStop(0,"rgb(80,130,220)"),E.addColorStop(.5,"rgb(255,245,255)"),E.addColorStop(1,"rgb(255,70,35)")):(E.addColorStop(0,"rgb(35,75,155)"),E.addColorStop(1,"rgb(230,230,225)")),e.fillStyle=E,e.fillRect(r,c+o+8,s,9),oe(e,`${ue(_[0])} ... ${ue(_[1])} m`,r,c+o+38,s,21),oe(e,`X ${ue(p,4)} ... ${ue(p+(h-1)*y,4)}; Z ${ue(v,4)} ... ${ue(v+(m-1)*y,4)} m`,r,c+o+62,s,19)}function za(e,a,t,i,r,c,s=null,o=null,d="en"){const f=(S,E)=>d==="zh"?S:E,m=a.profile?.points??[],h=m.flatMap(S=>[S.a,S.b]).filter(Number.isFinite);if(oe(e,`${f("剖面：","Section: ")}${o??a.view.plane.toUpperCase()} / ${a.profile?.sampling==="native_columns"?f("原生列","native columns"):a.profile?.sampling==="bilinear_common_four"?f("双线性插值 · 四邻点共同有效","bilinear · all four neighbours valid"):f("无高度剖面","no height profile")}`,t,i,r,24),!h.length){oe(e,f("此截面无有效高度剖面。","No valid height profile for this section."),t,i+50,r);return}const x=s?.[0]??Math.min(...h),u=s?.[1]??Math.max(...h),b=Math.max(u-x,1e-9),l=m[0].distance,g=Math.max(m.at(-1).distance-l,1e-9),w=Math.max(...m.map(S=>Math.abs(S.difference??0)),1e-9),_=t+65,p=i+45,v=r-95,y=c-120;if(a.diagnosis){const S=a.roi?ya(a.profile,a.roi):null;if(S){const A=Math.max(l,S[0]),C=Math.min(l+g,S[1]);C>=A&&(e.fillStyle="#deefee",e.fillRect(_+(A-l)/g*v,p,(C-A)/g*v,y+65))}e.strokeStyle="#888",e.beginPath();const E=_-l/g*v;e.moveTo(E,p),e.lineTo(E,p+y+65),e.stroke(),oe(e,f("热点 t=0","hotspot t=0"),E+3,p,100,16)}e.strokeStyle="#798699",e.lineWidth=1,e.beginPath(),e.moveTo(_,p+y+35),e.lineTo(_+v,p+y+35),e.stroke(),oe(e,"0",t+35,p+y+40,25,18);for(const[S,E]of[["a","#2583c5"],["b","#e08b22"],["difference","#9b4778"]]){e.strokeStyle=E,e.lineWidth=2,e.beginPath();let A=!1;for(const C of m){if(C[S]==null){A=!1;continue}const k=_+(C.distance-l)/g*v,F=S==="difference"?p+y+35-C[S]/w*25:p+y*.7-(C[S]-x)/b*y*.7;e[A?"lineTo":"moveTo"](k,F),A=!0}e.stroke()}if(a.crest)for(const[S,E]of[["a","#176693"],["b","#a75400"]]){const A=m[a.crest[S]],C=_+(A.distance-l)/g*v,k=p+y*.7-(A[S]-x)/b*y*.7;e.strokeStyle=E,e.lineWidth=2,e.beginPath(),e.arc(C,k,5,0,2*Math.PI),e.stroke()}oe(e,`${ue(u,4)} m`,t,p+12,65,16),oe(e,`${ue(x,4)} m`,t,p+y*.7,65,16),oe(e,`B-A ±${ue(w,4)} m`,_,p+y+70,v,18),oe(e,`${f("GT 蓝 / B 橙 / B-A 紫；距离 ","GT blue / B orange / B-A purple; distance ")}${ue(l,5)} ... ${ue(l+g,5)} m`,_,i+c+35,v,18)}function lo(e,a,t=null,i="en"){const r=(l,g)=>i==="zh"?l:g,c=document.createElement("canvas");c.width=1920,c.height=e.diagnosis?2650:2220;const s=c.getContext("2d");if(!s)throw Error("Report canvas unavailable");s.fillStyle="#f6f9fb",s.fillRect(0,0,c.width,c.height),s.fillStyle="#123247",s.fillRect(0,0,1920,170),oe(s,`${r("OceanScope / 分析报告 / 帧 ","OceanScope / analysis report / frame ")}${e.view.frame}`,60,68,1800,43,"#fff"),oe(s,`${e.source.runId} · ${e.createdAt}`,60,115,1800,22,"#d0e6ee"),oe(s,`${r("高度：全部96帧 | 速度：","Height: all96 | Velocity: ")}${e.view.selection.subset==="all"?r("全部96帧","all96"):r("固定六帧","fixed six")} / ${e.view.selection.grid==="fine"?r("原生网格","native grid"):r("XZ 2×2均值","XZ 2×2 mean")}${r(" | ROI：当前原生列"," | ROI: current native columns")}`,60,150,1800,22,"#d0e6ee");let o=1/0,d=-1/0,f=1e-9;for(let l=0;l<a.heightA.length;l++){for(const g of["A","B"])a["wet"+g][l]&&(o=Math.min(o,a["height"+g][l]),d=Math.max(d,a["height"+g][l]));a.common[l]&&(f=Math.max(f,Math.abs(a.heightB[l]-a.heightA[l])))}const m=Number.isFinite(o)?[o,d>o?d:o+1]:[0,1];[["heightA",r("A / Ground Truth","A / Ground Truth")],["heightB",r("B / 预测","B / Prediction")],["difference",e.appearance?.absoluteError?r("|B - A| / 绝对高度差","|B - A| / absolute height"):r("B - A / 有符号高度差","B - A / signed height")]].forEach(([l,g],w)=>{oe(s,g,60+w*620,215,580,28),oo(s,a,e,l,60+w*620,240,560,320,m,f)});const h=l=>l==null?null:l*100,x=(l,g)=>`${g}: ${l?.common??0}${r(" 共同列 | MAE "," common columns | MAE ")}${ue(h(l?.mae_m))}${r(" cm | Bias "," cm | bias ")}${ue(h(l?.bias_m))} cm | RMSE ${ue(h(l?.rmse_m))} cm`;if(oe(s,x(e.global,r("当前帧高度","Current frame height")),60,645,1800,25),oe(s,e.local?x(e.local,r("选区高度","Selected ROI height")):r("ROI：未选择","ROI: none selected"),60,682,1800,25),oe(s,e.roi?`ROI X [${e.roi.xmin}, ${e.roi.xmax}] / Z [${e.roi.zmin}, ${e.roi.zmax}] m`:r("灰色格点为缺测，不计为零。","Gray cells are unavailable, never zero."),60,719,1800,21),e.profiles){const l=Object.values(e.profiles).flatMap(w=>w.points.flatMap(_=>[_.a,_.b])).filter(Number.isFinite),g=l.length?[Math.min(...l),Math.max(...l)]:[0,1];za(s,{...e,profile:e.profiles.first},60,770,850,300,g,r("热点剖面1","hotspot 1"),i),za(s,{...e,profile:e.profiles.second},990,770,850,300,g,r("热点剖面2","hotspot 2"),i)}else za(s,e,60,770,990,300,null,null,i);if(t&&!e.diagnosis){const l=Math.min(770/t.width,320/t.height);s.drawImage(t,1110+(770-t.width*l)/2,780,t.width*l,t.height*l),oe(s,r("当前帧三维预览；相机保存在 JSON 中","Current-frame 3D preview; camera retained in JSON"),1110,1130,770,20)}else e.diagnosis||Da(s,`${r("当前帧无三维截图：","No current-frame 3D capture: ")}${e.view.geometryStatus?.reason??r("不可用","unavailable")}${r("。保留原生空间数据和帧身份，不替换为邻帧。",". Native spatial data and frame identity are retained; no neighboring frame substituted.")}`,1120,850,700,25);e.diagnosis?.caseNote&&oe(s,r("案例观察：","Case observation: ")+e.diagnosis.caseNote,60,1155,1800,23),oe(s,r("序列指标 / 明示有效域；完整精度与定义见 CSV + JSON","Sequence metrics / labelled scopes; full precision and definitions in CSV + JSON"),60,1200,1800,29);const u=Math.ceil(e.metrics.length/2);e.metrics.forEach((l,g)=>{const w=g>=u?1:0,_=g%u,p=60+w*930,v=1245+_*35;oe(s,i==="zh"?l.labelZh??l.label:l.label,p,v,620,20),oe(s,`${ue(l.value,8)} ${l.unit}`,p+630,v,260,20)});let b=1840;b=Da(s,i==="zh"&&e.scope==="Native highest-crossing height columns; ROI/profile do not replace all96 global metrics. Units are source convention, not independently calibrated."?"原生最高过零高度列；ROI / 剖面不替代全部96帧的全局指标。单位沿用来源约定，未独立标定。":e.scope,60,b,1800,22),b=Da(s,r("实验来源：模型、相机、划分与单位均为来源声明。检查点哈希未知。已核对原始文件清单身份；未独立审计训练历史或物理标定。","Experiment provenance: model / cameras / split / units are source declarations. Checkpoint hash is unknown. Original-file manifest identities were verified; training history and physical calibration were not independently audited."),60,b+8,1800,21);for(const[l,g]of Object.entries(e.source))oe(s,`${l}: ${g}`,60,b+28,1800,18),b+=28;if(e.evidence){let l=2190;oe(s,`${r("热点 (","Hotspot (")}${e.diagnosis.hotspot.ix},${e.diagnosis.hotspot.iz}) X=${ue(e.probe.x)} Z=${ue(e.probe.z)}${r(" | 方向 "," | direction ")}${e.diagnosis.directionDeg}${r(" 度"," deg")}`,60,l,1800,25),l+=42;for(const[g,w]of[[r("帧","Frame"),e.evidence.frame],["ROI",e.evidence.roi]])w&&(oe(s,`${g}${r(": 共同 ",": common ")}${w.common}${r(" / 候选 "," / candidate ")}${w.candidates} / GT ${w.validGT}${r(" / 预测 "," / prediction ")}${w.validPrediction}${r("; 共同/候选 ","; common/candidate ")}${ue(w.coverageCandidate)}${r("; 共同/GT ","; common/GT ")}${ue(w.coverageGT)}`,60,l,1800,21),l+=30,oe(s,`${g}${r(" 最大 |B-A|="," max |B-A|=")}${ue(w.maximum?.absolute)}${r(" m 位置 "," m at ")}${w.maximum?`X=${ue(w.maximum.x)}, Z=${ue(w.maximum.z)}${r(", 索引=",", index=")}${w.maximum.index}${r(", 并列=",", ties=")}${w.maximum.ties}`:"N/A"}`,60,l,1800,21),l+=32);for(const g of["first","second"])for(const w of["full","roi"]){const _=e.evidence[g][w];_&&(oe(s,`${g==="first"?r("剖面1","Profile 1"):r("剖面2","Profile 2")} / ${w==="full"?r("全线","full line"):r("选区内","within ROI")}: n=${_.samples}${r("; 样本平均 MAE=","; sample mean MAE=")}${ue(_.mae)}${r(" m; Bias="," m; bias=")}${ue(_.bias)}${r(" m; 最大="," m; max=")}${ue(_.maximum?.absolute)}${r(" m（非面积统计）"," m (not area statistics)")}`,60,l,1800,20),l+=27)}}return oe(s,r("使用 JSON 在 OceanScope 恢复此快照。必须匹配本地资源；测量值会重新计算。","Restore this snapshot in OceanScope with its JSON. Local resources must match; measurements are recomputed."),60,c.height-25,1800,20),c}const fo={vectorError:{title:"速度向量误差 E",label:"Velocity vector error map",palette:"absolute-error"},speedDelta:{title:"流速大小差 Δs",label:"Velocity speed delta map",palette:"error"},direction:{title:"三维方向夹角",label:"Velocity direction angle map",palette:"absolute-error"}};function dt(e,a="zh"){const t=[{key:"speedGT",title:"GT 流速",label:"Velocity GT speed map",palette:"ground-truth",role:"gt"},{key:"speedPred",title:"预测流速",label:"Velocity prediction speed map",palette:"ground-truth",role:"pred"},{key:e,...fo[e]}],i={speedGT:"GT speed",speedPred:"Prediction speed",vectorError:"Velocity vector error E",speedDelta:"Speed difference Δs",direction:"3D direction angle"};return a==="zh"?t:t.map(r=>({...r,title:i[r.key]}))}function F0(e,a,t,i){const r=[e+t,a+i];return[[e,a],r,[r[0]-.32*t+.2*i,r[1]-.32*i-.2*t],r,[r[0]-.32*t-.2*i,r[1]-.32*i+.2*t]]}const fe=(e,a=6)=>Number.isFinite(e)?e.toPrecision(a):"N/A",e0=e=>e==null?"N/A":(100*e).toFixed(2)+"%";function he(e,a,t,i,r=1480,c=21,s="#203747"){for(e.fillStyle=s,e.font=`${c}px sans-serif`;e.measureText(String(a)).width>r&&c>14;)e.font=`${--c}px sans-serif`;e.fillText(a,t,i,r)}function n0(e,a,t,i,r,c,s){e.beginPath(),i===0&&r===0?e.arc(a,t,3,0,2*Math.PI):F0(0,0,i,r).forEach(([o,d],f)=>e[f===0||f===2?"moveTo":"lineTo"](a+o*c,t+d*s)),e.lineCap="round",e.lineJoin="round",e.lineWidth=4,e.strokeStyle="#fff",e.stroke(),e.lineWidth=1.5,e.strokeStyle="#10273c",e.stroke()}function D0(e,a,t,i,r,c,s,o="zh"){const d=(D,T)=>o==="zh"?D:T,{key:f,title:m,palette:h,role:x}=a,{viewport:u,zoom:b,ranges:l}=t.appearance,g=l[x?"speed":f],w=Math.min(470/(u.width*i.stepX),340/(u.height*i.stepZ)),_=w*i.stepX,p=w*i.stepZ,v=u.width*_,y=u.height*p,S=202;he(e,m,s,186,470,25);const E=document.createElement("canvas");E.width=u.width,E.height=u.height,b0(E.getContext("2d"),{...i,values:f==="direction"?r.degrees:i[f]},f==="direction"?r.mask:i.commonMask,g,h,u),e.imageSmoothingEnabled=!1,e.drawImage(E,s,S,v,y);const A=D=>s+(D-u.x+.5)*_,C=D=>S+(u.z+u.height-D-.5)*p;e.save(),e.beginPath(),e.rect(s,S,v,y),e.clip();const k=i.roiView;if(!b&&k&&(e.strokeStyle="#9c6900",e.lineWidth=2,e.strokeRect(A(k.x)-_/2,C(k.z+k.height-1)-p/2,k.width*_,k.height*p)),x)for(const D of c){const[T,z]=D[x==="gt"?"gtOffset":"predOffset"];n0(e,A(D.x),C(D.z),T,-z,_,p)}const F=A(t.probe.xIndex),R=C(t.probe.zIndex);F>=s&&F<s+v&&R>=S&&R<S+y&&(e.setLineDash([6,5]),e.beginPath(),e.moveTo(F,S),e.lineTo(F,S+y),e.moveTo(s,R),e.lineTo(s+v,R),e.strokeStyle="#fff",e.lineWidth=3,e.stroke(),e.strokeStyle="#111",e.lineWidth=1,e.stroke()),e.restore();const I=e.createLinearGradient(s,0,s+470,0);for(const D of[0,.5,1])I.addColorStop(D,`rgb(${m0(g[0]+D*(g[1]-g[0]),g,h).join(",")})`);e.fillStyle=I,e.fillRect(s,562,470,11);const O=f==="direction"?"°":" m/s";he(e,`${fe(g[0],4)}${f==="speedDelta"?" / 0":""} / ${fe(g[1],4)}${O}${x?d(" · 共用色标"," · Shared scale"):""}`,s,599,470),he(e,f==="direction"?d("X → · Z ↑ · 棋盘为夹角不可判定","X → · Z ↑ · Checkerboard: angle unavailable"):d("X → · Z ↑ · 棋盘为不在共同有效域","X → · Z ↑ · Checkerboard: outside common domain"),s,629,470,19),x&&c.length&&t.arrows.referenceSpeed&&(n0(e,s+8,654,t.arrows.referenceGridLength,0,_,p),he(e,`${d("参考 ","Reference ")}${fe(t.arrows.referenceSpeed,4)} m/s · ${c.length}${d(" 个配对点"," paired points")}`,s,683,470,19))}function mo(e,a,t,i,r="zh"){const c=(w,_)=>r==="zh"?w:_,s=document.createElement("canvas");s.width=1560,s.height=1170;const o=s.getContext("2d");if(!o)throw Error("Velocity report canvas unavailable");o.fillStyle="#f6f9fb",o.fillRect(0,0,1560,1170),o.fillStyle="#123247",o.fillRect(0,0,1560,142);const{plane:d,domain:f,roi:m,summary:h,angleThreshold:x,samples:u,source:b,surfaceCase:l}=e;he(o,`${c("OceanScope · 速度诊断 · 第 ","OceanScope · Velocity diagnosis · frame ")}${d.frame}${c(" 帧"," ")}`,40,60,1480,38,"#fff"),he(o,`${c("XZ · Y 索引 ","XZ · Y index ")}${d.yIndex}${c(" · 世界 Y "," · World Y ")}${fe(d.yWorld,9)} m · ${f.id}`,40,100,1480,24,"#d0e6ee"),he(o,`${b.caseId} · ${l.surfaceCaseId} · ${e.createdAt}`,40,128,1480,19,"#d0e6ee"),dt(e.appearance.mode,r).forEach((w,_)=>D0(o,w,e,a,t,i?.points??[],40+505*_,r)),he(o,`ROI X [${fe(m.xmin)}, ${fe(m.xmax)}] · Z [${fe(m.zmin)}, ${fe(m.zmax)}] m`,40,724),he(o,`${c("水面热点 X ","Surface hotspot X ")}${fe(l.hotspotXZ.x)} · Z ${fe(l.hotspotXZ.z)} · ${l.caseNote.slice(0,150)}`,40,757);const g=u.probe;he(o,`${c("探针 XYZ (","Probe XYZ (")}${g.xyz.map(w=>fe(w)).join(", ")}) · GT ${fe(g.speedGT)}${c(" · 预测 "," · Prediction ")}${fe(g.speedPred)} · E ${fe(g.E)} · Δs ${fe(g.speedDelta)}${c(" · 夹角 "," · Angle ")}${fe(g.angleDegrees)}°`,40,790);for(const[w,_,p]of[["whole",c("整切片","Whole slice"),835],["roi","ROI",906]]){const v=h[w],y=h.direction[w];he(o,`${_}${c(" · 共同 "," · Common ")}${v.counts.common}${c(" / 候选 "," / Candidate ")}${v.counts.candidate}${c(" · 共同/候选 "," · Common/candidate ")}${e0(v.coverageCandidate)}${c(" · 共同/GT "," · Common/GT ")}${e0(v.coverageGT)}${c(" · 平均 E "," · Mean E ")}${fe(v.meanE)}${c(" · 平均 Δs "," · Mean Δs ")}${fe(v.meanSpeedDelta)}`,40,p),he(o,`${c("最大 E ","Maximum E ")}${fe(v.maximum?.value)}${c(" · 平均三维夹角 "," · Mean 3D angle ")}${fe(y.meanDegrees)}${c("° · 夹角有效 ","° · Angle valid ")}${y.count}${c(" · 低速排除 "," · Low-speed excluded ")}${y.excludedLowSpeedCount??"N/A"}`,40,p+30)}return he(o,`${c("方向阈值 τ = ","Direction threshold τ = ")}${x.tau??c("停用","Disabled")}${c(" · 箭头为 XZ 投影 · 速度 m/s、坐标 m 均沿用来源声明"," · Arrows: XZ projections · Source units: velocity m/s, coordinates m")}`,40,991),he(o,c("当前 Y 层诊断，非整帧体积评分；物理与时间尺度、向量基底尚未独立标定。","Current Y-layer diagnosis, not a volume score; physical/time scales and vector basis are not independently calibrated."),40,1025,1480,19),he(o,f.definition.rule??f.id,40,1096,1480,17),he(o,`${c("代码 ","Code ")}${b.codeRevision}${c(" · 资源 SHA-256 "," · Resource SHA-256 ")}${b.resource.packedSha256}`,40,1064,1480,18),he(o,c("使用配套 JSON 恢复视图。恢复时核验资源并重算。CSV 保留整层原生格点。","Restore with the companion JSON; resources are verified and metrics recomputed. CSV retains the whole native layer."),40,1128,1480,19),s}function bo(e,a,t="zh"){const i=(h,x)=>t==="zh"?h:x,r=document.createElement("canvas");r.width=1560,r.height=1940;const c=r.getContext("2d");if(!c)throw Error("Velocity comparison canvas unavailable");const{scope:s,result:o,source:d,view:f}=e;c.fillStyle="#f6f9fb",c.fillRect(0,0,r.width,r.height),c.fillStyle="#123247",c.fillRect(0,0,r.width,148),he(c,i("OceanScope · Best_1027 三帧速度对照","OceanScope · Best_1027 three-frame velocity comparison"),40,56,1480,38,"#fff"),he(c,`XZ · Y=${s.plane.yIndex} · ROI X [${fe(s.roi.xmin)}, ${fe(s.roi.xmax)}] Z [${fe(s.roi.zmin)}, ${fe(s.roi.zmax)}] m · τ=${s.tau} m/s`,40,99,1480,22,"#d0e6ee"),he(c,`${i("三帧共同有效 ","Common valid across three frames ")}${o.shared}/${o.roiCandidates}${i(" · 夹角共同有效 "," · Common angle-valid ")}${o.sharedAngles}${i(" · 共用色标和箭头比例"," · Shared colour and arrow scales")}`,40,130,1480,21,"#d0e6ee");const m={xIndex:f.probe[0],zIndex:f.probe[1]};return a.rows.forEach(({frame:h,slice:x,angles:u,arrows:b,summary:l},g)=>{const w=155+g*570;he(c,`${i("帧 ","Frame ")}${h}${i(" · 本帧 ROI "," · Frame ROI ")}${l.nativeRoi}/${o.roiCandidates}${i(" · 共同样本平均 E "," · Common-sample mean E ")}${fe(l.meanE)} m/s · Δs ${fe(l.meanDelta)}${i(" m/s · 夹角 "," m/s · Angle ")}${fe(l.meanAngle)}°`,40,w+25,1480,25),c.save(),c.translate(0,w-129);const _={appearance:{viewport:a.view,zoom:!0,ranges:o.ranges},probe:m,arrows:b};dt(f.mode,t).forEach((p,v)=>D0(c,p,_,x,u,f.arrows?b.points:[],40+505*v,t)),c.restore()}),he(c,`${i("探针原生 XZ 索引 (","Probe native XZ index (")}${f.probe.join(", ")}${i(") · 棋盘表示未纳入对应共同有效域 · 单位沿用来源声明",") · Checkerboard: outside common support · Source-declared units")}`,40,1890),he(c,`${i("代码 ","Code ")}${d.codeRevision}${i(" · 逐帧资源身份和恢复设置见配套 JSON · "," · Per-frame resource identities and restore settings: companion JSON ·")}${e.createdAt}`,40,1920,1480,18),r}function uo(e,a){const t=String(e?.message??e??""),i=(r,c)=>a?r:c;return/AbortError|cancelled|canceled/i.test(e?.name+" "+t)?i("操作已取消。当前文件可以稍后重新打开。","Operation cancelled. You can reopen the file later."):/too large|^size$/i.test(t)?i("文件过大。请选择本工具导出的分析 JSON；完整报告上限1 MB，场比较方案上限2 MB。","File too large. Choose an exported analysis JSON: reports up to1 MB, field views up to2 MB."):/Invalid analysis JSON|^json$|JSON|Unexpected token|Unexpected end/i.test(t)&&!/(format|Unsupported)/i.test(t)?i("JSON内容不完整或格式有误。请重新选择原始导出文件，或粘贴文件全文。","Invalid or incomplete JSON. Select the original exported file or paste its entire contents."):/Unsupported|^format$/.test(t)?i("这个文件不能恢复分析。请选择完整分析报告、场比较方案或序列选择 JSON；PNG、CSV和数据说明文件只能查看。","This file cannot restore analysis. Choose an analysis-report, field-view or sequence-selection JSON; images, CSV and data-info files are for viewing."):/checksum|identity|mismatch|does not match|^source$/i.test(t)?i("数据或报告身份不匹配。请确认数据组合，使用同一版本导出的报告及配套资源；资源损坏时重新复制并校验，勿修改文件中的身份信息。","Data or report identity differs. Confirm the dataset and use its matching report/resources. Recopy and verify damaged resources; do not edit identity fields."):/404|unavailable|failed to fetch|network|^dataset$|No spatial resource/i.test(t)?i("数据下载未完成。请检查网络并重试；无三维预览的帧仍可查看高度分析。","The data download did not complete. Check your connection and retry. Frames without 3D previews still support height analysis."):/Wait|not ready|loading|Timed out/i.test(t)?i("数据尚未准备好。等待当前组合加载完成后重试；持续失败时检查本页的数据资源提示。","Data is not ready. Wait for the current dataset to load and retry; if it persists, check this page’s resource message."):/View changed/i.test(t)?i("恢复期间视图已改变，已停止应用旧请求。请在当前视图重新打开报告。","The view changed during restoration. Reopen the report from the current view."):i("操作未完成。确认文件来自当前工具、帧号和参数有效，然后重试；具体原因可查看技术详情。","The operation did not complete. Confirm the file comes from this tool and its frame/settings are valid, then retry; technical details are below.")}function Je({error:e,zh:a,resource:t,onRetry:i}){return e?n.createElement("div",{className:"analysis-error",role:"alert"},n.createElement("strong",null,a?"需要处理的问题":"Action needed"),t&&n.createElement("p",null,t),n.createElement("p",null,uo(e,a)),i&&n.createElement("button",{type:"button",onClick:i},a?"重新加载资源":"Reload resources"),n.createElement("details",null,n.createElement("summary",null,a?"技术详情":"Technical details"),n.createElement("code",null,String(e?.message??e)))):null}function po({controlRef:e,ready:a,capture:t,prepareImport:i,applyImport:r,zh:c,unifiedRestore:s=!1}){const[o,d]=B.useState(null),[f,m]=B.useState(""),[h,x]=B.useState(""),[u,b]=B.useState(null),l=B.useRef(null),g=B.useRef(null),w=o?.language===c?o:null;function _(){l.current&&(l.current.abort(),l.current=null,m(c?"恢复已取消，保留新的操作。":"Restore cancelled; newer action retained."))}B.useImperativeHandle(e,()=>({cancel:_,clearSnapshot:()=>d(null),restoreText:(S,E)=>v({size:new TextEncoder().encode(S).length,text:async()=>S},E,!0)})),B.useEffect(()=>()=>l.current?.abort(),[]),B.useEffect(()=>{d(null),m("")},[c]),B.useEffect(()=>{const S=Object.values(w?.files??{}).map(E=>E.href).filter(E=>E?.startsWith("blob:"));return()=>{for(const E of S)URL.revokeObjectURL(E)}},[w?.files]);function p(){try{const S=t(),E=xc(S.record,S.canvas?.toDataURL?.("image/png")??null);d({...S,language:c,previewUrl:E.png?.href??null,files:E}),b(null),m(c?"已生成当前快照，三种导出使用同一报告。":"Snapshot created; all three downloads use this report.")}catch(S){b(S)}}async function v(S,E,A=!1){if(_(),!S)return;const C=new AbortController,k=()=>C.abort();E?.addEventListener("abort",k,{once:!0}),E?.aborted&&C.abort(),l.current=C,b(null),m(c?"正在核验报告与资源…":"Verifying report and resources…");try{if(S.size>1024*1024)throw Error("Report file too large");const F=await S.text();C.signal.throwIfAborted();const R=await i(F,C.signal);C.signal.throwIfAborted(),await r(R,C.signal),C.signal.throwIfAborted(),d(null),m(c?"已恢复帧、截面、选区与可用相机；数值来自重新核验的资源。":"Restored frame, section, ROI and available camera; values recomputed from verified resources.")}catch(F){if(C.signal.aborted||(b(F),m("")),A)throw F}finally{E?.removeEventListener("abort",k),l.current===C&&(l.current=null)}}const y={png:c?"下载汇报图片 PNG":"Download presentation PNG",csv:c?"下载数据表 CSV":"Download data table CSV",json:c?"保存可恢复分析 JSON":"Save restorable analysis JSON"};return n.createElement("section",{className:"protocol-report","aria-label":"Protocol evidence report"},n.createElement("h3",null,c?"保存与恢复分析":"Save and restore analysis"),n.createElement("p",null,c?"先确认当前帧、选区、截面和相机，再生成报告。三种下载使用同一快照；后续修改视图时，请更新快照后再导出。":"Confirm frame, ROI, section and camera, then create a report. All downloads use one snapshot; update it before exporting later view changes."),n.createElement("div",{className:"reference-controls"},n.createElement("button",{disabled:!a,onClick:p},w?c?"更新报告快照":"Update report snapshot":c?"生成当前报告":"Create current report"),Object.entries(y).map(([S,E])=>w?.files[S]?n.createElement("a",{key:S,className:"report-download",href:w.files[S].href,download:w.files[S].name,onClick:()=>m(c?"下载已交给浏览器，请在下载列表确认文件。也可展开“下载帮助与 JSON 文本”复制完整分析。":"Download handed to the browser. Check its download list; Download help and JSON text also provides the complete analysis for copying.")},E):n.createElement("button",{key:S,disabled:!0},E))),w&&n.createElement("details",null,n.createElement("summary",null,c?"下载帮助与 JSON 文本":"Download help and JSON text"),n.createElement("p",null,c?"文件由浏览器保存，位置取决于浏览器设置。可在浏览器下载列表中找到文件。继续分析也可选中下方全部 JSON，按 Ctrl+C（Mac：⌘C）复制，再粘贴到顶部“恢复分析”；长期保留请下载 JSON 文件。":"Your browser saves the files according to its download settings. Find them in its download list. To resume without choosing a file, select all JSON below, copy with Ctrl+C (Mac: ⌘C), then paste into Restore analysis. Download the JSON file for long-term storage."),n.createElement("label",null,c?"完整分析 JSON":"Complete analysis JSON",n.createElement("textarea",{ref:g,"aria-label":"Report JSON for copying",rows:"6",readOnly:!0,spellCheck:!1,value:w.files.json.content})),n.createElement("button",{type:"button",onClick:()=>{g.current?.focus(),g.current?.select(),m(c?"已选中完整 JSON。按 Ctrl+C（Mac：⌘C）复制。":"Complete JSON selected. Press Ctrl+C (Mac: ⌘C) to copy.")}},c?"选中全部 JSON":"Select all JSON")),!w&&n.createElement("p",null,c?"生成报告后即可下载。PNG用于展示，CSV保留数值，JSON用于继续同一次分析。":"Create a report to enable downloads. PNG is for presentation, CSV for numbers, and JSON for resuming the analysis."),w&&n.createElement("p",null,c?"导出快照 · 帧":"Export snapshot · frame"," ",w.record.view.frame," · ",w.record.createdAt," · ",w.record.view.geometry?c?"包含已核验三维":"Verified 3D included":c?"二维证据":"2D evidence"," · ",w.record.view.geometryStatus?.reason," · ",c?"后续操作不会改变此报告；更新快照可保存新状态。":"Later actions do not change this report; update the snapshot to save the new state."),w?.previewUrl&&n.createElement("details",null,n.createElement("summary",null,c?"预览汇报图片":"Preview presentation image"),n.createElement("p",null,c?"预览与下载使用同一报告。如果浏览器未保存PNG，可在此图片上使用“图片另存为”。":"Preview and download use the same report. If the browser does not save the PNG, use Save image as on this preview."),n.createElement("img",{src:w.previewUrl,alt:c?`帧 ${w.record.view.frame} 汇报图片`:`Frame ${w.record.view.frame} report image`,style:{display:"block",width:"100%",height:"auto"}})),s?n.createElement("p",null,n.createElement("a",{href:"#restore-analysis",onClick:()=>{const S=document.getElementById("restore-analysis");S&&(S.open=!0)}},c?"恢复分析：选择文件或粘贴 JSON":"Restore analysis: choose a file or paste JSON")):n.createElement(n.Fragment,null,n.createElement("label",null,c?"导入分析报告 JSON":"Import analysis report JSON"," ",n.createElement("input",{type:"file",accept:"application/json,.json","aria-label":"Restore protocol report",onChange:S=>{v(S.target.files?.[0]),S.target.value=""}})),n.createElement("details",null,n.createElement("summary",null,c?"粘贴报告 JSON":"Paste report JSON"),n.createElement("p",null,c?"文件选择不可用时，可粘贴报告内容，使用相同的核验与恢复流程。":"If file selection is unavailable, paste the report content for the same verified restoration."),n.createElement("textarea",{"aria-label":"Protocol report JSON text",rows:"6",value:h,onChange:S=>{_(),x(S.target.value)}}),n.createElement("button",{disabled:!h.trim(),onClick:()=>v({size:new TextEncoder().encode(h).length,text:async()=>h})},c?"恢复粘贴的报告":"Restore pasted report"))),n.createElement(Je,{error:u,zh:c}),n.createElement("p",{role:"status"},f))}const z0=["xmin","xmax","zmin","zmax"];function ho(e){return Number(e.toFixed(4)).toString()}function Za(e){return Object.fromEntries(z0.map(a=>[a,ho(e[a])]))}function go(e,a,t){const i={},r={};for(const c of z0)!e[c]?.trim()||!Number.isFinite(Number(e[c]))?r[c]="number":i[c]=t[c]?Number(e[c]):a[c];for(const[c,s]of[["xmin","xmax"],["zmin","zmax"]])!r[c]&&!r[s]&&i[c]>i[s]&&(r[c]="order",r[s]="order");return{values:i,errors:r,valid:Object.keys(r).length===0}}function Ka({profile:e,roi:a,limits:t,label:i,errorLimit:r}){const{language:c}=ce(),s=(w,_)=>c==="zh"?w:_,o=e.points,d=o[0].distance,f=o.at(-1).distance,m=Math.max(f-d,1e-9),h=Math.max(t[1]-t[0],1e-9),x=r??Math.max(1e-9,...o.map(w=>Math.abs(w.difference??0))),u=w=>45+(w-d)/m*620,b=w=>170-(w-t[0])/h*135,l=a?ya(e,a):null;function g(w){let _=!1;return o.map(p=>{if(!Number.isFinite(p[w]))return _=!1,"";const v=_?"L":"M";return _=!0,`${v}${u(p.distance)},${w==="difference"?245-p[w]/x*38:b(p[w])}`}).join(" ")}return n.createElement("figure",null,n.createElement("figcaption",null,i," · ",e.sampling==="native_columns"?s("原生列","Native columns"):s("插值诊断 · 四邻点共同有效","Interpolated diagnosis · all four neighbours valid")),n.createElement("svg",{viewBox:"0 0 710 300",role:"img","aria-label":i},l&&n.createElement("rect",{x:u(Math.max(d,l[0])),y:"25",width:Math.max(0,u(Math.min(f,l[1]))-u(Math.max(d,l[0]))),height:"255",fill:"#4ba8ad",opacity:".13"}),n.createElement("line",{x1:u(0),x2:u(0),y1:"25",y2:"280",stroke:"#666",strokeDasharray:"4 3"}),n.createElement("text",{x:u(0)+4,y:"20"},s("热点 0","Hotspot 0")),n.createElement("text",{x:"3",y:"40"},t[1].toFixed(3)),n.createElement("text",{x:"3",y:"175"},t[0].toFixed(3)),n.createElement("path",{d:g("a"),fill:"none",stroke:"#2583c5",strokeWidth:"2"}),n.createElement("path",{d:g("b"),fill:"none",stroke:"#e08b22",strokeWidth:"2"}),n.createElement("line",{x1:"45",x2:"665",y1:"245",y2:"245",stroke:"#888"}),n.createElement("path",{d:g("difference"),fill:"none",stroke:"#9b4778"}),n.createElement("text",{x:"2",y:"245"},"B−A"),n.createElement("text",{x:"45",y:"298"},d.toFixed(3)," m"),n.createElement("text",{x:"540",y:"298"},f.toFixed(3)," m")),!o.some(w=>w.a!==null)&&n.createElement("p",null,s("此剖面无共同有效高度。","No common valid height on this profile.")))}const cn=e=>e==null?"N/A":(e*100).toFixed(4)+" cm";function a0({value:e,label:a}){const{language:t}=ce(),i=(r,c)=>t==="zh"?r:c;return n.createElement("div",{className:"diagnostic-evidence","aria-label":a},n.createElement("strong",null,a),n.createElement("p",null,"MAE ",cn(e.mae)," · Bias ",cn(e.bias)," · RMSE ",cn(e.rmse)),n.createElement("p",null,i("候选原生列 ","Candidate native columns "),e.candidates,i(" / GT有效 "," / GT valid "),e.validGT,i(" / 预测有效 "," / Prediction valid "),e.validPrediction,i(" / 共同有效 "," / Common valid "),e.common),n.createElement("p",null,i("共同/候选 ","Common/candidate "),e.coverageCandidate==null?"N/A":(e.coverageCandidate*100).toFixed(2)+"%",i(" · 共同/GT "," · Common/GT "),e.coverageGT==null?"N/A":(e.coverageGT*100).toFixed(2)+"%"),n.createElement("p",null,i("最大绝对误差 ","Maximum absolute error "),cn(e.maximum?.absolute)," ",e.maximum&&n.createElement(n.Fragment,null,i("· 有符号 ","· Signed "),cn(e.maximum.signed),i(" · 原生索引 ("," · Native index ("),e.maximum.ix,",",e.maximum.iz,") · X ",e.maximum.x.toFixed(6)," / Z ",e.maximum.z.toFixed(6),i(" · 并列 "," · Ties "),e.maximum.ties,i("（按索引取首点）"," (first point by index)"))))}function t0({value:e,label:a}){const{language:t}=ce(),i=(r,c)=>t==="zh"?r:c;return n.createElement("p",{"aria-label":a},a,i(" · 有效样本 "," · Valid samples "),e.samples," · MAE ",cn(e.mae)," · Bias ",cn(e.bias),i(" · 最大 "," · Maximum "),cn(e.maximum?.absolute))}function yo({spatial:e,diagnosis:a,roi:t,onDirection:i,onRegion:r,mode:c,setMode:s,onExit:o,onNote:d}){const{language:f}=ce(),m=(p,v)=>f==="zh"?p:v,[h,x]=B.useState(""),u=B.useMemo(()=>a?st(e,a):null,[e,a]),b=B.useMemo(()=>Pn(e),[e]),l=B.useMemo(()=>t?Pn(e,t):null,[e,t]),g=u?[...u.first.points,...u.second.points].flatMap(p=>[p.a,p.b]).filter(Number.isFinite):[],w=g.length?[Math.min(...g),Math.max(...g)]:[0,1];function _(p){p.preventDefault();const v=new FormData(p.currentTarget),y=Number(v.get("cx")),S=Number(v.get("cz")),E=Number(v.get("width")),A=Number(v.get("length"));if(![y,S,E,A].every(Number.isFinite)||E<e.descriptor.spacing||A<e.descriptor.spacing){x(m("尺寸至少为一个网格间距，请填写有限数字。","Enter finite numbers; each dimension must span at least one grid spacing."));return}const C={xmin:y-E/2,xmax:y+E/2,zmin:S-A/2,zmax:S+A/2};if(da(C,ga(e)).clipped){x(m("选区超出数据范围，请缩小尺寸或移动中心。","The ROI exceeds the data bounds. Reduce its size or move its centre."));return}r(C),x("")}return n.createElement("section",{"aria-label":"Hotspot diagnosis"},n.createElement(a0,{value:b,label:m("全域诊断 · 原生列","Full-domain diagnosis · native columns")}),l&&n.createElement(a0,{value:l,label:m("ROI诊断 · 原生列","ROI diagnosis · native columns")}),n.createElement("h3",null,m("热点与双剖面 · 最高过零高度","Hotspot and paired profiles · highest zero-crossing height")),n.createElement("div",{className:"hotspot-actions"},n.createElement("button",{"aria-pressed":c==="select",onClick:()=>s("select")},m("定位热点","Locate hotspot")),n.createElement("button",{"aria-pressed":c==="adjust",onClick:()=>s("adjust")},m("调整选区","Adjust ROI"))),a?n.createElement(n.Fragment,null,n.createElement("label",null,m("案例观察（120字以内，非自动归因）","Case observation (up to 120 characters; no automatic attribution)"),n.createElement("textarea",{"aria-label":"Diagnosis case note",maxLength:"120",value:a.caseNote??"",onChange:p=>d(p.target.value)})),n.createElement("button",{onClick:o},m("退出热点诊断","Exit hotspot diagnosis")),n.createElement("p",{"aria-label":"Hotspot coordinates"},m("帧 ","Frame "),a.frame,m(" · 索引 ("," · Index ("),a.hotspot.ix,", ",a.hotspot.iz,") · X ",a.hotspot.x.toFixed(6)," / Z ",a.hotspot.z.toFixed(6)," m"),n.createElement("label",null,m("剖面方向（场景轴 / 手动方向）","Profile direction (scene axes / manual angle)"),n.createElement("input",{"aria-label":"Hotspot direction",type:"number",min:"0",max:"180",step:"1",value:a.directionDeg,onChange:p=>{const v=p.target.valueAsNumber;Number.isFinite(v)&&v>=0&&v<=180&&i(v%180)}})),n.createElement("button",{onClick:()=>i(0)},m("回到场景轴","Reset to scene axes"))):n.createElement("p",null,m("在任意高度图点击共同有效点，暂停并创建热点选区。","Click a common valid point on any height map to pause and create a hotspot ROI.")),t&&n.createElement(n.Fragment,null,n.createElement("p",{"aria-label":"Hotspot ROI summary"},m("ROI中心 X ","ROI centre X "),((t.xmin+t.xmax)/2).toFixed(4)," / Z ",((t.zmin+t.zmax)/2).toFixed(4),m(" · 宽 "," · Width "),(t.xmax-t.xmin).toFixed(4),m(" / 长 "," / Length "),(t.zmax-t.zmin).toFixed(4),m(" m（来源约定，未独立标定）"," m (source convention; not independently calibrated)")),n.createElement("form",{key:JSON.stringify(t),onSubmit:_,className:"hotspot-roi-edit"},[["cx",m("中心X","Centre X"),(t.xmin+t.xmax)/2],["cz",m("中心Z","Centre Z"),(t.zmin+t.zmax)/2],["width",m("X宽","X width"),t.xmax-t.xmin],["length",m("Z长","Z length"),t.zmax-t.zmin]].map(([p,v,y])=>n.createElement("label",{key:p},v,n.createElement("input",{required:!0,name:p,"aria-label":"Hotspot ROI "+p,type:"number",step:"any",defaultValue:y}))),n.createElement("button",null,m("应用中心与尺寸","Apply centre and dimensions")))),h&&n.createElement("p",{role:"alert"},h),a&&t&&(a.hotspot.x<t.xmin||a.hotspot.x>t.xmax||a.hotspot.z<t.zmin||a.hotspot.z>t.zmax)&&n.createElement("p",null,m("热点在选区外；剖面仍锚定原热点。","The hotspot is outside the ROI; profiles remain anchored to the original hotspot.")),u&&n.createElement(n.Fragment,null,n.createElement("p",null,m("蓝色GT / 橙色预测；紫色B−A。横轴为距热点的有符号距离；阴影为ROI交段，缺测断线。两图共享高度范围。","GT blue / prediction orange / B−A purple. Signed distance from the hotspot; shading marks the ROI intersection. Missing samples break the line. Both plots share a height range.")),n.createElement("div",{className:"hotspot-profiles"},n.createElement(Ka,{profile:u.first,roi:t,limits:w,label:m("热点剖面1","Hotspot profile 1")}),n.createElement(Ka,{profile:u.second,roi:t,limits:w,label:m("热点剖面2","Hotspot profile 2")})),[["first",m("剖面1","Profile 1")],["second",m("剖面2","Profile 2")]].map(([p,v])=>{const y=qa(u[p],t);return n.createElement("div",{key:p},n.createElement(t0,{value:y.full,label:v+m("全线 · 样本等权"," · Full line · equal sample weights")}),y.roi&&n.createElement(t0,{value:y.roi,label:v+m("选区内 · 样本等权"," · Within ROI · equal sample weights")}))}),n.createElement("p",null,m("剖面统计按曲线样本等权，不等同原生列面积统计。可到“报告与恢复”生成含双剖面的PNG、CSV和可恢复JSON。","Profile statistics weight curve samples equally; they are not native-column area statistics. Open Reports & restore to generate PNG, CSV and restorable JSON with both profiles."))))}const pa=[1049,1050,1051,1052,1053,1054],Z0="oceanscope.six-frame-profile.v1",X0=e=>({...un(e),indexSha256:ua.indexSha256});function vo(e,a){if(e?.schema!==Z0||!pa.includes(e.selectedFrame)||JSON.stringify(e.frames)!==JSON.stringify(pa)||Object.entries(X0(a)).some(([t,i])=>e.source?.[t]!==i))throw Error("Six-frame report source or frame mismatch");return e.selection}function _o(e,a,t){return{schema:Z0,source:X0(e),frames:pa,selectedFrame:t,selection:a.selection,units:"source length convention",difference:"prediction minus GT",rows:a.rows.map(({frameId:i,profile:r,centre:c,stats:s})=>({frameId:i,centre:c,roi:s,profile:r}))}}function Xa(e,a,t){const i=URL.createObjectURL(new Blob([t],{type:a})),r=document.createElement("a");r.href=i,r.download=e,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}const Tn=e=>Number.isFinite(e)?e.toFixed(4):"—";async function Eo(e,a,t){const i=await Ua(Ha,ua.indexSha256,e),c=i.frames.find(y=>y.frameId===1049).spacing,s=typeof a=="string",o=s?a==="A"?176:174:a?.ix,d=s?a==="A"?90:69:a?.iz,f=s?1049:a?.sourceFrame,m=i.frames.find(y=>y.frameId===f);if(!m||!Number.isInteger(o)||!Number.isInteger(d)||o<0||d<0||o>=m.shape[1]||d>=m.shape[0])throw Error("Invalid hotspot index");const h=m.originXYZ[0]+o*m.spacing,x=m.originXYZ[2]+d*m.spacing,u=s?{xmin:h-10*c,xmax:h+10*c,zmin:x-10*c,zmax:x+10*c}:a.roi,b=s?0:a.directionDeg,l=ga({descriptor:m});if(!Number.isFinite(b)||b<0||b>=180||!u||!["xmin","xmax","zmin","zmax"].every(y=>Number.isFinite(u[y]))||u.xmin>=u.xmax||u.zmin>=u.zmax||u.xmin<l.xmin||u.xmax>l.xmax||u.zmin<l.zmin||u.zmax>l.zmax||h<u.xmin||h>u.xmax||x<u.zmin||x>u.zmax)throw Error("Select an ROI containing the hotspot and a valid profile angle");const g={sourceFrame:f,ix:o,iz:d,x:h,z:x,roi:u,directionDeg:b};if(!s&&(h!==a.x||x!==a.z))throw Error("Hotspot world coordinates differ from source");const w=await ma(m,{...un(e),frameId:f},t);if(!w.common[d*m.shape[1]+o])throw Error("Source hotspot is outside common support");const _=[];for(const y of pa){const S=i.frames.find(k=>k.frameId===y),E=y===f?w:await ma(S,{...un(e),frameId:y},t),A=ja(E,{x:h,z:x,directionDeg:b});A.points=A.points.filter(k=>k.x>=u.xmin-1e-9&&k.x<=u.xmax+1e-9&&k.z>=u.zmin-1e-9&&k.z<=u.zmax+1e-9);const C=A.points.find(k=>Math.abs(k.distance)<1e-9);_.push({frameId:y,profile:A,centre:C,stats:Pn(E,u)})}const p=_.flatMap(y=>y.profile.points),v=p.flatMap(y=>[y.a,y.b]).filter(Number.isFinite);return{selection:g,x:h,z:x,roi:u,rows:_,limits:v.length?[Math.min(...v),Math.max(...v)]:[0,1],error:Math.max(1e-9,...p.map(y=>Math.abs(y.difference??0)))}}function wo({bundle:e,zh:a,getSelection:t}){const[i,r]=B.useState(null),[c,s]=B.useState(1049),[o,d]=B.useState(null),[f,m]=B.useState(""),h=B.useRef(null),x=B.useRef(0);function u(_,p=1049){x.current++,m(""),r(_),s(p)}async function b(_){if(!_)return;const p=++x.current;try{if(_.size>8*1024*1024)throw Error("Report exceeds 8 MiB");const v=JSON.parse(await _.text()),y=vo(v,e);if(!y||typeof y!="object")throw Error("Invalid report selection");p===x.current&&u(y,v.selectedFrame)}catch(v){p===x.current&&m(v.message)}}B.useEffect(()=>{if(!i)return;const _=new AbortController;return Eo(e,i,_.signal).then(p=>{_.signal.aborted||d({bundle:e,location:i,data:p})}).catch(p=>{_.signal.aborted||d({bundle:e,location:i,error:p.message})}),()=>_.abort()},[e,i]);const l=o?.bundle===e&&o.location===i?o:null,g=l?.data,w=g?.rows.find(_=>_.frameId===c);return n.createElement("section",{ref:h,"aria-label":"Fixed ROI wave window"},n.createElement("h3",null,a?"固定选区波形 · 1049–1054":"Fixed ROI wave profiles · 1049–1054"),["A","B"].map(_=>n.createElement("button",{key:_,"aria-pressed":i===_,onClick:()=>u(_)},a?"固定区域 ":"Fixed region ",_)),n.createElement("button",{onClick:()=>{try{u(t())}catch(_){m(_.message)}}},a?"使用当前热点与选区":"Use current hotspot and ROI"),n.createElement("label",null,a?"恢复六帧 JSON":"Restore six-frame JSON"," ",n.createElement("input",{type:"file","aria-label":"Restore six-frame JSON",accept:".json",onChange:_=>{b(_.target.files[0]),_.target.value=""}})),f&&n.createElement("p",{role:"alert"},f),i&&!l&&n.createElement("p",{role:"status"},a?"正在读取六帧高度…":"Loading six height frames…"),l?.error&&n.createElement("p",{role:"alert"},l.error," ",n.createElement("button",{onClick:()=>r(null)},a?"重置":"Reset")),w&&n.createElement(n.Fragment,null,n.createElement("p",null,"XZ (",Tn(g.x),", ",Tn(g.z),") · ",g.selection.directionDeg,"° · ",a?"固定世界位置。蓝 GT，橙预测，紫色为预测减 GT。":"Fixed world position. Blue GT, orange prediction, purple prediction minus GT."),n.createElement("table",null,n.createElement("thead",null,n.createElement("tr",null,(a?["帧","中心高度差","ROI 平均偏差","ROI MAE","共同有效 / 候选"]:["Frame","Centre height difference","ROI mean bias","ROI MAE","Common / candidate"]).map(_=>n.createElement("th",{key:_},_)))),n.createElement("tbody",null,g.rows.map(_=>n.createElement("tr",{key:_.frameId},n.createElement("td",null,n.createElement("button",{"aria-pressed":c===_.frameId,onClick:()=>s(_.frameId)},_.frameId)),n.createElement("td",null,Tn(_.centre?.difference)),n.createElement("td",null,Tn(_.stats.bias)),n.createElement("td",null,Tn(_.stats.mae)),n.createElement("td",null,_.stats.common," / ",_.stats.candidates))))),n.createElement(Ka,{profile:w.profile,roi:g.roi,limits:g.limits,errorLimit:g.error,label:(a?"固定剖面 ":"Fixed profile ")+c}),n.createElement("button",{onClick:()=>Xa("OceanScope-six-frame.json","application/json",JSON.stringify(_o(e,g,c),null,2))},a?"下载六帧 JSON":"Download six-frame JSON"),n.createElement("button",{onClick:()=>Xa("OceanScope-six-frame.csv","text/csv",["frame,hotspot_difference,roi_bias,roi_mae,common,candidate",...g.rows.map(_=>[_.frameId,_.centre?.difference,_.stats.bias,_.stats.mae,_.stats.common,_.stats.candidates].join(","))].join(`
`))},a?"下载逐帧 CSV":"Download six-frame CSV"),n.createElement("button",{onClick:()=>{const _=h.current.querySelector("svg").cloneNode(!0);_.setAttribute("xmlns","http://www.w3.org/2000/svg"),Xa("OceanScope-profile-"+c+".svg","image/svg+xml",_.outerHTML)}},a?"下载当前剖面 SVG":"Download profile SVG")))}function xo({zh:e}){const a=[{id:"MAE",name:e?"平均绝对误差":"Mean absolute error",formula:"MAE = Σ|eᵢ| / N",meaning:e?"平均差多少，不区分偏高或偏低。越接近 0 越好。":"Average error size, regardless of direction. Closer to 0 is better."},{id:"Bias",name:e?"平均有符号偏差":"Mean signed error",formula:"Bias = Σeᵢ / N",meaning:e?"正值表示预测偏高，负值表示偏低。正负误差会抵消，所以 Bias 接近 0 不代表每个位置都准确。":"Positive means the prediction is higher; negative means lower. Opposite errors can cancel, so a near-zero bias does not guarantee small errors."},{id:"RMSE",name:e?"均方根误差":"Root mean square error",formula:"RMSE = √(Σeᵢ² / N)",meaning:e?"先平方、求平均，再开平方，对较大的误差更敏感。越接近 0 越好；它不是最大误差。":"Square the errors, average them, then take the square root. More sensitive to large errors; closer to 0 is better. This is not the maximum error."}];return n.createElement("details",{className:"height-metric-help"},n.createElement("summary",null,e?"MAE、Bias、RMSE 怎么看？说明与公式":"How to read MAE, Bias and RMSE — definitions & formulas"),n.createElement("div",{className:"height-metric-help-body"},n.createElement("p",null,e?"先在同一位置比较水面高度：Aᵢ 是 GT（参考值），Bᵢ 是预测值，eᵢ = Bᵢ − Aᵢ。以下高度与误差统一用 cm 表示；1 m = 100 cm。":"Compare heights at the same location: Aᵢ is GT (the reference), Bᵢ is the prediction, and eᵢ = Bᵢ − Aᵢ. Heights and errors below use cm; 1 m = 100 cm."),n.createElement("p",null,e?"N 是当前统计范围内两边都有有效高度的位置数，也叫“共同列”。每个 (X, Z) 位置对应一条竖直列，取其最上层水面高度。Σ 表示将这 N 个位置的数相加。缺失位置不补零；N = 0 时不提供误差分数。":"N is the number of locations with valid heights in both datasets within the current scope, also called common columns. Each (X, Z) location defines a vertical column with a topmost surface height. Σ sums over these N locations. Missing locations are not filled with zero; no error score is available when N = 0."),n.createElement("div",{className:"height-metric-formulas"},a.map(t=>n.createElement("article",{key:t.id},n.createElement("h3",null,t.id," · ",t.name),n.createElement("p",{className:"height-metric-formula"},t.formula),n.createElement("p",null,t.meaning)))),n.createElement("p",{className:"height-metric-example"},n.createElement("strong",null,e?"小例子：":"Example: "),e?"两个位置分别偏低 1 cm、偏高 3 cm，即 e = −1、+3 cm。MAE = 2 cm，Bias = +1 cm，RMSE = √5 ≈ 2.24 cm。三个指标从不同角度描述同一组误差。":"At two locations, the prediction is 1 cm lower and 3 cm higher: e = −1, +3 cm. MAE = 2 cm, Bias = +1 cm, and RMSE = √5 ≈ 2.24 cm. The metrics describe different aspects of the same errors."),n.createElement("dl",{className:"height-metric-scopes"},n.createElement("div",null,n.createElement("dt",null,e?"当前帧 · 全域":"Current frame · Full domain"),n.createElement("dd",null,e?"当前这一帧内，所有共同有效位置的统计；不是全部 96 帧的平均。":"All paired valid locations in this frame; not an average over all 96 frames.")),n.createElement("div",null,n.createElement("dt",null,e?"选区 · ROI":"Selected region · ROI"),n.createElement("dd",null,e?"只统计已应用的矩形选区内的位置。ROI 是“感兴趣区域”；改变选区不会改变当前帧全域或全序列评分。":"Only locations inside the applied rectangle. ROI means region of interest. Changing it does not change full-frame or sequence scores.")),n.createElement("div",null,n.createElement("dt",null,e?"单点探针 / 截面":"Point probe / Profile"),n.createElement("dd",null,e?"探针读数来自一个点击位置；曲线沿当前整条截面显示，并不自动裁剪到 ROI。两者都不能当作选区平均值。":"The probe reads one clicked location. The profile follows the current full section and is not automatically cropped to the ROI. Neither is an ROI average."))),n.createElement("p",null,e?"这些是水面高度误差，不是 SDF 场误差或速度误差。此处单位为 cm；固定协议的全序列指标及 %R 请到“时间分析”查看。":"These are surface-height errors, not SDF-field or velocity errors. Values here use cm. Open Time analysis for fixed-protocol sequence metrics and %R.")))}const Ee=(e,a=1)=>e==null?"—":(e*a).toFixed(4);function ca(e){const{shape:[a,t],originXYZ:[i,,r],spacing:c}=e.descriptor;return{xmin:i,xmax:i+(t-1)*c,zmin:r,zmax:r+(a-1)*c}}function So(e){let a=1/0,t=-1/0,i=0;for(let r=0;r<e.heightA.length;r++){for(const c of["A","B"])e["wet"+c][r]&&(a=Math.min(a,e["height"+c][r]),t=Math.max(t,e["height"+c][r]));e.common[r]&&(i=Math.max(i,Math.abs(e.heightB[r]-e.heightA[r])))}return{height:Number.isFinite(a)?[a,t>a?t:a+1]:[0,1],error:Math.max(i,1e-9)}}function Bo({spatial:e,kind:a,range:t,roi:i,probe:r,profile:c,onRegion:s,onProbe:o,label:d,absolute:f=!1,diagnosis:m,mode:h,onPause:x}){const u=B.useRef(null),b=B.useRef(null),[l,g]=e.descriptor.shape,w=ca(e),_=a==="difference"?null:e[a],p=a==="difference"?e.common:e[a==="heightA"?"wetA":"wetB"];B.useEffect(()=>{const A=u.current,C=A?.getContext("2d");if(!C)return;const k=C.createImageData(g,l);for(let R=0;R<l;R++)for(let I=0;I<g;I++){const O=R*g+I,D=((l-1-R)*g+I)*4;if(!p[O]){k.data.set([225,230,235,255],D);continue}const T=e.heightB[O]-e.heightA[O],z=_?_[O]:f?Math.abs(T):T,M=Math.max(0,Math.min(1,(z-t[0])/(t[1]-t[0]))),P=a==="difference"&&!f?M<.5?[80+350*M,130+230*M,220+70*M]:[255,245-350*(M-.5),255-440*(M-.5)]:[35+195*M,75+155*M,155+70*M];k.data.set([...P,255],D)}C.putImageData(k,0,0);const F=(R,I)=>[(R-w.xmin)/e.descriptor.spacing+.5,l-.5-(I-w.zmin)/e.descriptor.spacing];if(m){const R=st(e,m);for(const I of[R.first,R.second])C.strokeStyle="#15373e",C.beginPath(),I.points.forEach((O,D)=>C[D?"lineTo":"moveTo"](...F(O.x,O.z))),C.stroke()}if(!m&&c?.points.length&&(C.strokeStyle="#172c43",C.lineWidth=1,C.beginPath(),c.points.forEach((R,I)=>C[I?"lineTo":"moveTo"](...F(R.x,R.z))),C.stroke()),i){const[R,I]=F(i.xmin,i.zmax),[O,D]=F(i.xmax,i.zmin);if(C.strokeStyle="#111",C.lineWidth=1,C.strokeRect(R,I,O-R,D-I),h==="adjust")for(const[T,z]of[[R,I],[R,D],[O,I],[O,D]])C.fillRect(T-1.5,z-1.5,3,3)}if(r){const[R,I]=F(r.x,r.z);C.strokeStyle="#111",C.beginPath(),C.moveTo(R-3,I),C.lineTo(R+3,I),C.moveTo(R,I-3),C.lineTo(R,I+3),C.stroke()}},[e,a,t[0],t[1],i,r,c,f,m,h]);function v(A){const C=A.currentTarget.getBoundingClientRect(),k=getComputedStyle(A.currentTarget),F={left:C.left,top:C.top,width:C.width,height:C.height};for(const D of["Left","Right","Top","Bottom"])F["border"+D]=parseFloat(k["border"+D+"Width"])||0;const{ix:R,iz:I,index:O}=pc(F,A.clientX,A.clientY,[l,g]);return{x:w.xmin+R*e.descriptor.spacing,z:w.zmin+I*e.descriptor.spacing,index:O}}function y(A,C){if(h!=="adjust"||!C.roi)return{xmin:Math.min(C.x,A.x),xmax:Math.max(C.x,A.x),zmin:Math.min(C.z,A.z),zmax:Math.max(C.z,A.z)};const k=C.roi,F=e.descriptor.spacing,R=A.x-C.x,I=A.z-C.z;let O;return C.corner?(O={...k,[C.corner[0]]:A.x,[C.corner[1]]:A.z},O.xmax-O.xmin<F||O.zmax-O.zmin<F?k:da(O,w).roi):(O={xmin:k.xmin+R,xmax:k.xmax+R,zmin:k.zmin+I,zmax:k.zmax+I},da(O,w,{mode:"move"}).roi)}function S(A){if(!b.current)return;const C=v(A),k=b.current;b.current=null,h==="adjust"?s(y(C,k)):C.index===k.index?o(C):s(y(C,k))}function E(A){const C=v(A),k=e.descriptor.spacing;let F=null;if(i&&h==="adjust"){const R=["xmin","xmax"].find(O=>Math.abs(C.x-i[O])<2*k),I=["zmin","zmax"].find(O=>Math.abs(C.z-i[O])<2*k);R&&I&&(F=[R,I])}h==="adjust"&&i&&!F&&(C.x<i.xmin||C.x>i.xmax||C.z<i.zmin||C.z>i.zmax)||(b.current={...C,roi:i,corner:F},x?.(),A.currentTarget.setPointerCapture?.(A.pointerId))}return n.createElement("figure",null,n.createElement("figcaption",null,d),n.createElement("canvas",{ref:u,width:g,height:l,"data-hotspot-index":m?.hotspot.index??"","aria-label":a==="heightA"?"GT height map":a==="heightB"?"Prediction height map":f?"Absolute height difference map":"Signed height difference map",onPointerDown:E,onPointerMove:A=>{b.current&&h==="adjust"&&s(y(v(A),b.current))},onPointerUp:S,onPointerCancel:()=>{b.current?.roi&&h==="adjust"&&s(b.current.roi),b.current=null}}),n.createElement("small",null,"X ",Ee(w.xmin),"…",Ee(w.xmax)," · Z ",Ee(w.zmin),"…",Ee(w.zmax)," m"),n.createElement("small",null,Ee(t[0])," … ",Ee(t[1])," m"))}function Ao({profile:e,zh:a}){const t=e.points,i=t.flatMap(h=>[h.a,h.b]).filter(Number.isFinite),r=t.map(h=>h.difference).filter(Number.isFinite);if(!i.length)return n.createElement("p",{role:"status"},a?"此剖面没有有效高度。":"No valid heights on this profile.");const c=Math.min(...i),s=Math.max(...i),o=Math.max(s-c,1e-9),d=Math.max(...r.map(Math.abs),1e-9),f=Math.max(t.at(-1)?.distance||0,1e-9);function m(h,x=!1){let u=!1;return t.map(b=>{if(b[h]===null)return u=!1,"";const l=42+b.distance/f*640,g=x?235-b[h]/d*42:166-(b[h]-c)/o*130,w=u?"L":"M";return u=!0,`${w}${l},${g}`}).join(" ")}return n.createElement("figure",{className:"protocol-profile"},n.createElement("figcaption",null,a?"同一截面 · 蓝色GT／橙色预测 · B−A":"Same section · blue GT / orange prediction · B−A"," · ",e.sampling==="native_columns"?a?"原生列":"Native columns":a?"四邻点共同有效 · 插值诊断":"Four valid neighbors · interpolated diagnosis"),n.createElement("svg",{viewBox:"0 0 720 300",role:"img","aria-label":"Protocol height profile"},n.createElement("text",{x:"8",y:"18"},"Y (m)"),n.createElement("text",{x:"42",y:"30"},Ee(s)),n.createElement("text",{x:"42",y:"185"},Ee(c)),n.createElement("path",{d:m("a"),fill:"none",stroke:"#2583c5",strokeWidth:"2"}),n.createElement("path",{d:m("b"),fill:"none",stroke:"#e08b22",strokeWidth:"2"}),n.createElement("line",{x1:"42",y1:"235",x2:"682",y2:"235",stroke:"#798699",strokeDasharray:"4 3"}),n.createElement("path",{d:m("difference",!0),fill:"none",stroke:"#9b4778",strokeWidth:"1.5"}),n.createElement("text",{x:"4",y:"220"},"B−A"),n.createElement("text",{x:"4",y:"240"},"0"),n.createElement("text",{x:"600",y:"295"},Ee(f)," m"),n.createElement("text",{x:"44",y:"295"},a?"沿截面距离":"Section distance"," · ±",Ee(d)," m")))}function i0({value:e,label:a,zh:t}){return n.createElement("div",{className:"protocol-metrics","aria-label":a},n.createElement("strong",null,a==="ROI metrics"?t?"选区 · 水面高度":"ROI · Surface height":t?"当前帧全域 · 水面高度":"Full frame · Surface height"),n.createElement("div",{className:"protocol-metric-cards"},n.createElement("div",null,n.createElement("span",null,t?"有效对比点":"Paired valid locations"," ",e.common),n.createElement("small",null,t?"共同列 · 两边都有有效高度":"Common columns · valid heights in both")),e.common?n.createElement(n.Fragment,null,n.createElement("div",null,n.createElement("span",null,"MAE ",Ee(e.mae_m,100)," cm"),n.createElement("small",null,t?"平均差多少 · 越小越好":"Average error size · lower is better")),n.createElement("div",null,n.createElement("span",null,"Bias ",Ee(e.bias_m,100)," cm"),n.createElement("small",null,t?"平均偏差 · 正值偏高，负值偏低":"Mean signed error · positive higher, negative lower")),n.createElement("div",null,n.createElement("span",null,"RMSE ",Ee(e.rmse_m,100)," cm"),n.createElement("small",null,t?"对大误差更敏感 · 越小越好":"More sensitive to large errors · lower is better"))):n.createElement("p",null,t?"不可用：无共同有效列":"Unavailable: no common columns")))}function ko({spatial:e,plane:a,sliceIndex:t,rotationAxis:i,angle:r,sectionPercent:c,zh:s,restored:o,controlRef:d,onPause:f,onOpenVelocity:m}){const[h,x]=B.useState(o?.roi??null),[u,b]=B.useState(o?.probe??null),[l,g]=B.useState(()=>o?.roi??ca(e)),[w,_]=B.useState(()=>Za(o?.roi??ca(e))),[p,v]=B.useState({}),[y,S]=B.useState(o?.diagnosis??null),[E,A]=B.useState(o?.appearance?.absoluteError??!1),[C,k]=B.useState("select"),[F,R]=B.useState("");function I(Z){try{const $=e.descriptor.shape[1],J=bc(e,{ix:Z.index%$,iz:Math.floor(Z.index/$),resourceKey:JSON.stringify(e.descriptor)});f?.(),S(J),b(J.hotspot),G(J.roi),R("")}catch{R("该点没有共同有效高度，请选择有效水面。")}}const O=go(w,l,p),D=Object.keys(O.errors).length?s?"请补全数字；每个轴的最小值不能大于最大值。当前已应用的选区未改变。":"Enter all numeric bounds; each minimum must be no greater than its maximum. The applied ROI is unchanged.":"";B.useImperativeHandle(d,()=>({capture:()=>({spatial:e,roi:h,probe:u,diagnosis:y,appearance:{absoluteError:E}})}));const T=B.useMemo(()=>So(e),[e]),z=B.useMemo(()=>Zn(e),[e]),M=B.useMemo(()=>h?Zn(e,h):null,[e,h]),P=B.useMemo(()=>{if(a==="xz"||a==="oblique"&&i!=="y")return null;try{return A0(e,{plane:a,index:Math.max(0,Math.min((a==="xy"?e.descriptor.shape[0]:e.descriptor.shape[1])-1,t)),angle:r,sectionPercent:c})}catch{return null}},[e,a,t,i,r,c]);function G(Z){x(Z),g(Z),_(Za(Z)),v({})}function U(){const Z=ca(e);x(null),g(Z),_(Za(Z)),v({})}function j(){O.valid&&(Zn(e,O.values),G({...O.values}))}const V=u?.index;return n.createElement(n.Fragment,null,n.createElement("h2",null,s?"高度与选区分析 · 帧 ":"Height & ROI analysis · frame ",e.descriptor.frameId),n.createElement("p",null,s?"原生列高度 · 最高过零点 · 共同有效域。点击探针，拖动选择ROI；灰色为无效区域。A/B共用色标，B−A正值表示预测偏高。":"Native highest-crossing columns and common support. Click to probe; drag to select ROI. Gray is invalid. Shared A/B scale; positive B−A means prediction is higher."),n.createElement("label",null,n.createElement("input",{type:"checkbox","aria-label":"Absolute height error",checked:E,onChange:Z=>A(Z.target.checked)}),s?"绝对误差 |B−A|（取消为有符号差值）":"Absolute error |B−A| (clear for signed difference)"),F&&n.createElement("p",{role:"alert"},F),n.createElement("div",{className:"protocol-maps"},[["heightA","A / GT"],["heightB","B / Prediction"],["difference","B−A"]].map(([Z,$])=>n.createElement(Bo,{key:Z,spatial:e,kind:Z,label:Z==="difference"&&E?"|B−A|":$,roi:h,probe:u,profile:P,diagnosis:y,mode:C,onPause:f,absolute:E,range:Z==="difference"?[E?0:-T.error,T.error]:T.height,onRegion:G,onProbe:I}))),n.createElement(yo,{spatial:e,diagnosis:y,roi:h,mode:C,setMode:k,onRegion:G,onExit:()=>S(null),onNote:Z=>S($=>({...$,caseNote:Z})),onDirection:Z=>S($=>({...$,directionDeg:Z}))}),y&&m&&n.createElement("p",null,n.createElement("button",{disabled:!va(e.descriptor.frameId)||!h,onClick:()=>{f?.(),m({frame:e.descriptor.frameId,hotspotXZ:{x:y.hotspot.x,z:y.hotspot.z},roiXZ:{...h},surfaceCaseId:e.descriptor.runId??"best-1027",caseNote:y.caseNote??"",surfaceIdentity:Object.fromEntries(["runId","protocolSha256","manifestA","manifestB"].map(Z=>[Z,e.descriptor[Z]]))})}},s?"查看此区域速度":"Inspect velocity in this region"),s?" · 已核验帧支持速度诊断。保留 XZ，单独选择水下 Y 层。":" · Verified frames support velocity diagnosis. Retain XZ and choose an underwater Y layer separately."),n.createElement(i0,{value:z,label:"Frame spatial metrics",zh:s}),n.createElement(xo,{zh:s}),n.createElement("p",{className:"protocol-roi-help"},s?"ROI = 局部选区。X、Z 是水平方向，Y 是高度方向；下面四个边界确定矩形范围，点击“应用选区”后更新局部统计。":"ROI = region of interest. X and Z are horizontal; Y is height. The four bounds define a rectangle. Select Apply ROI to update its statistics."),n.createElement("form",{onSubmit:Z=>{Z.preventDefault(),j()}},n.createElement("fieldset",{className:"protocol-roi"},n.createElement("legend",null,s?"选区范围 · 世界坐标（m）":"ROI bounds · world coordinates (m)"),[["xmin","X min"],["xmax","X max"],["zmin","Z min"],["zmax","Z max"]].map(([Z,$])=>n.createElement("label",{key:Z},$,n.createElement("input",{"aria-label":`ROI ${$}`,type:"number",step:"any",value:w[Z],title:String(l[Z]),"aria-invalid":!!O.errors[Z],"aria-describedby":O.errors[Z]?"roi-input-error":void 0,onChange:J=>{_(Q=>({...Q,[Z]:J.target.value})),v(Q=>({...Q,[Z]:!0}))}}))),n.createElement("button",{type:"submit",disabled:!O.valid},s?"应用选区":"Apply ROI"),n.createElement("button",{type:"button",onClick:U},s?"恢复全域":"Reset to full domain")),D&&n.createElement("p",{id:"roi-input-error",role:"alert"},D)),M&&n.createElement(i0,{value:M,label:"ROI metrics",zh:s}),u&&n.createElement("p",{"aria-label":"Protocol probe"},n.createElement("strong",null,s?"单点探针（不是选区平均）":"Point probe (not an ROI average)"),n.createElement("br",null),"X ",Ee(u.x)," / Z ",Ee(u.z)," m · A / GT ",Ee(e.wetA[V]?e.heightA[V]:null)," / B / ",s?"预测":"Prediction"," ",Ee(e.wetB[V]?e.heightB[V]:null)," m · B−A ",Ee(e.common[V]?e.heightB[V]-e.heightA[V]:null,100)," cm"),!y&&P&&n.createElement("p",{className:"protocol-profile-help"},s?"曲线怎么看：蓝线是 GT，橙线是预测；紫线是 B−A，零线上方表示预测偏高，下方表示偏低。横轴是沿截面的距离，纵轴是高度；曲线显示整条截面，不只显示 ROI。":"Reading the profile: blue is GT, orange is prediction. Purple is B−A: above zero means higher, below means lower. The horizontal axis is section distance; the vertical axis is height. The profile covers the full section, not just the ROI."),!y&&(P?n.createElement(Ao,{profile:P,zh:s}):n.createElement("p",{role:"status"},s?"选择 XY、YZ 或绕Y竖直截面查看高度曲线；水平／倾斜几何截面不作为俯视高度剖面。":"Choose XY, YZ or a vertical Y-axis section for heights; horizontal/tilted geometry is not a top-down height profile.")),n.createElement("small",null,s?"单位：来源约定，未独立标定。高度仅表示俯视最高层，不覆盖完整翻卷内部结构。全序列指标保持原始范围；ROI与插值剖面不替换全局指标。":"Units: source convention, not independently calibrated. Heights describe the topmost layer, not complete overturning geometry. Sequence metrics retain their scope; ROI and interpolated profiles do not replace them."))}function Co({viewMode:e="all",bundle:a,frame:t,plane:i,sliceIndex:r,rotationAxis:c,angle:s,sectionPercent:o,getReportView:d,onRestoreReportView:f,reportControlRef:m,onDownload:h,catalog:x,reportContext:u,onPause:b,onOpenVelocity:l,unifiedRestore:g=!1}){const{language:w}=ce(),_=w==="zh",p=JSON.stringify([a.runId,a.protocol,a.datasetA,a.datasetB,t]),[v,y]=B.useState(0),[S,E]=B.useState(null),[A,C]=B.useState(null),k=B.useRef(null),F=B.useRef(u);F.current=u,B.useEffect(()=>{A&&A.view.frame!==t&&C(null)},[t,A]),B.useEffect(()=>{const z=new AbortController;let M=!0;return(async()=>{try{const P=await Ua(Ha,ua.indexSha256,a),G=P.frames.find(j=>j.frameId===t);if(!G)throw Error("No spatial resource for selected frame");if(!M)return;const U=await ma(G,{...un(a),frameId:t},z.signal);M&&E({key:p,spatial:U})}catch(P){M&&E({key:p,error:P})}})(),()=>{M=!1,z.abort()}},[a,t,p,v]);const R=S?.key===p?S:null;function I(){if(!R?.spatial||!k.current)throw Error("Wait for verified spatial resources");const z=k.current.capture(),{view:M,scene:P}=d(),G=_c({bundle:a,...z,view:M,catalog:x});return{record:G,canvas:lo(G,z.spatial,P,w)}}async function O(z,M){b?.();const P=F.current,G=await Ua(Ha,ua.indexSha256,a),U=Ec(z,a,G,{catalog:x}),j=await ma(U.descriptor,{...un(a),frameId:U.view.frame},M);if(U.diagnosis&&!j.common[U.diagnosis.hotspot.index])throw Error("Diagnosis hotspot has no paired valid height");if(M.throwIfAborted(),F.current!==P)throw Error("View changed while restoring; retry from the current view");return{...U,spatial:j}}async function D(z,M){M.throwIfAborted();const P=JSON.stringify([a.runId,a.protocol,a.datasetA,a.datasetB,z.view.frame]);E({key:P,spatial:z.spatial}),C({...z,revision:crypto.randomUUID()}),await f(z.view,M)}const T=A?.view.frame===t?A:null;return n.createElement("section",{className:"protocol-spatial","aria-label":"Protocol spatial analysis"},n.createElement("div",{hidden:e==="report"},R?R.error?n.createElement(Je,{error:R.error,zh:_,resource:(_?"水面高度与掩码 · 帧 ":"Height and masks · frame ")+t,onRetry:()=>{E(null),y(z=>z+1)}}):n.createElement(ko,{key:p+(T?.revision??""),controlRef:k,restored:T,spatial:R.spatial,plane:i,sliceIndex:r,rotationAxis:c,angle:s,sectionPercent:o,zh:_,onPause:b,onOpenVelocity:l}):n.createElement("p",{role:"status"},_?`正在加载帧 ${t} 的同协议空间资源…`:`Loading protocol spatial resources for frame ${t}…`),n.createElement(wo,{bundle:a,zh:_,getSelection:()=>{const z=k.current?.capture();if(!z?.diagnosis||!z.roi)throw Error(_?"请先点击高度图选择热点并设置选区。":"Select a hotspot on a height map and apply an ROI first.");const{hotspot:M,directionDeg:P}=z.diagnosis;return{sourceFrame:z.spatial.descriptor.frameId,ix:M.ix,iz:M.iz,x:M.x,z:M.z,roi:{...z.roi},directionDeg:P}}})),n.createElement("div",{hidden:e==="height"},d&&n.createElement(po,{unifiedRestore:g,key:a.runId,controlRef:m,ready:!!R?.spatial,capture:I,prepareImport:O,applyImport:D,onDownload:h,zh:_})))}function Io({slice:e,probe:a,t}){const[i,r]=B.useState(!1),c=B.useMemo(()=>so(e,a,i?.125:.25),[e,a,i]),{gt:s,pred:o,split:d,seed:f,step:m,separation:h,maxArc:x}=c,u={mask:t("共同有效域边界：插值需要四个有效邻点","Common mask boundary: four valid neighbors required"),slow:t("投影流速低于或等于阈值","Projected speed at or below floor"),limit:t("达到积分长度上限","Arc length limit reached"),grid:t("超出可插值网格","Outside interpolation grid")},b=[f,...s.points,...o.points],l=b.map(E=>E[0]),g=b.map(E=>E[1]),w=Math.max(6*h,Math.max(...l)-Math.min(...l),Math.max(...g)-Math.min(...g)),_=(Math.min(...l)+Math.max(...l))/2,p=(Math.min(...g)+Math.max(...g))/2,v=([E,A])=>[160+(E-_)*250/w,150-(A-p)*250/w],y=(E,A,C)=>{const[k,F]=v(E);return n.createElement("circle",{cx:k,cy:F,r:C,fill:A})},S=E=>E.map(A=>A.toFixed(3)).join(", ");return n.createElement("section",{"aria-label":"1049 paired streamlines"},n.createElement("h3",null,t("配对瞬时流线 · XZ 投影","Paired instantaneous streamlines · XZ projection")),n.createElement("p",null,t("以当前探针为共同起点；点击上方切片可换起点。图中向右为 +X，向上为 +Z。","Both start at the probe. Click a slice above to change the seed. Right is +X; up is +Z.")," XZ (",S(f),")"),n.createElement("button",{type:"button","aria-pressed":i,onClick:()=>r(!i)},t("半步长复核","Half-step check")),n.createElement("svg",{role:"img","aria-label":t("同起点配对流线","Same-seed paired streamlines"),viewBox:"0 0 320 300",style:{width:"100%",maxWidth:480,background:"#0d2030",borderRadius:8}},[s,o].map((E,A)=>n.createElement("polyline",{key:A,fill:"none",stroke:A?"#ffbf69":"#66d9eb",strokeWidth:"2.5",strokeDasharray:A?"5 3":void 0,points:E.points.map(C=>v(C).join(",")).join(" ")})),[s,o].map((E,A)=>{if(!E.points.length)return null;const[C,k]=v(E.points.at(-1));return n.createElement("rect",{key:A,x:C-3,y:k-3,width:"6",height:"6",fill:"none",stroke:A?"#ffbf69":"#66d9eb"})}),d&&n.createElement("line",{x1:v(d.gt)[0],y1:v(d.gt)[1],x2:v(d.pred)[0],y2:v(d.pred)[1],stroke:"white"}),d&&[d.gt,d.pred].map((E,A)=>n.createElement(n.Fragment,{key:A},y(E,"white",3))),y(f,"#fc6380",4)),n.createElement("p",null,t("红点：种子；方框：各自终点；白线：首次达到分离阈值。青色实线：GT；橙色虚线：预测。","Red: seed; squares: endpoints; white connector: first threshold crossing. Cyan solid: GT; orange dashed: prediction.")),n.createElement("p",null,d?t("首次分离","First separation")+" · s="+d.arc.toFixed(4)+" · Δ="+d.gap.toFixed(4)+" · GT XZ ("+S(d.gt)+") · Pred XZ ("+S(d.pred)+")":t("共同积分段内未观测到达到阈值的分离。","No threshold crossing observed on the shared trace.")),[s,o].map((E,A)=>n.createElement("p",{key:A},A?t("预测","Prediction"):"GT"," · ",u[E.stop]," · s=",(Math.max(0,E.points.length-1)*m).toFixed(4)," · XZ (",S(E.points.at(-1)??f),")")),n.createElement("small",null,t("同帧定高投影，不是三维流线或跨帧粒子轨迹。双线性插值，归一化方向，中点 RK2；按相同弧长比较。距离使用网格世界坐标单位。","Frozen plane projection, not a 3D streamline or time trajectory. Bilinear interpolation, normalized direction, midpoint RK2; matched arc length in grid world units.")," Δs=",m.toFixed(4)," · Δ≥",h.toFixed(4)," · s≤",x.toFixed(4)," · |vXZ|>1e−8"))}function P0({x:e,y:a,dx:t,dy:i}){if(t===0&&i===0)return n.createElement("circle",{cx:e,cy:a,r:".5",fill:"none"});const r=F0(e,a,t,i).map((c,s)=>`${s===0||s===2?"M":"L"} ${c.join(" ")}`).join(" ");return n.createElement(n.Fragment,null,n.createElement("path",{d:r,className:"velocity-arrow-outline"}),n.createElement("path",{d:r}))}function Mo({arrows:e,view:a,role:t}){const i=t==="gt"?"gtOffset":"predOffset";return n.createElement("svg",{className:"velocity-arrow-layer",role:"img","aria-label":t==="gt"?"Velocity GT arrows":"Velocity prediction arrows",viewBox:`0 0 ${a.width} ${a.height}`,preserveAspectRatio:"none"},e.points.map(r=>n.createElement("g",{key:r.index,"data-sample":r.index},n.createElement(P0,{x:r.x-a.x+.5,y:a.z+a.height-r.z-.5,dx:r[i][0],dy:-r[i][1]}))))}function No({arrows:e,view:a}){const{language:t}=ce(),i=t==="zh";return e.points.length?e.referenceSpeed?n.createElement(n.Fragment,null,n.createElement("svg",{className:"velocity-arrow-reference","aria-hidden":"true",viewBox:`0 0 ${a.width} 8`,preserveAspectRatio:"none"},n.createElement(P0,{x:a.width*.04,y:4,dx:e.referenceGridLength,dy:0})),n.createElement("small",null,i?"参考箭头":"Reference arrow"," ",e.referenceSpeed.toPrecision(4)," m/s · ",i?"两图共用线性比例":"Shared linear scale"," · ",e.points.length," ",i?"个配对格点":"paired grid points")):n.createElement("small",null,i?"空心点表示 XZ 投影为零":"Hollow markers indicate zero XZ projection"):n.createElement("small",null,i?"当前采样格点无配对箭头":"No paired arrows at the sampled grid points")}function Ro({x:e,z:a,view:t}){const i=t.height-a-.5,r=`M ${e+.5} 0 V ${t.height} M 0 ${i} H ${t.width}`;return n.createElement("svg",{className:"velocity-probe-layer","aria-hidden":"true",viewBox:`0 0 ${t.width} ${t.height}`,preserveAspectRatio:"none"},n.createElement("path",{d:r,className:"velocity-probe-outline"}),n.createElement("path",{d:r}))}function V0({slice:e,angles:a,mode:t,arrows:i,view:r,zoom:c,frame:s,probe:o,setProbe:d,ranges:f}){const{language:m}=ce(),h=m==="zh",x=e.roiView,u=!c&&x?[x.x/Math.max(1,e.width-1),(x.x+x.width-1)/Math.max(1,e.width-1),x.z/Math.max(1,e.height-1),(x.z+x.height-1)/Math.max(1,e.height-1)]:null,b=o[0]-r.x,l=o[1]-r.z,g=b>=0&&b<r.width&&l>=0&&l<r.height,w=dt(t,m);return n.createElement("div",{className:"velocity-triptych"},w.map(({key:_,title:p,label:v,palette:y,role:S})=>{const E=_==="direction"?a.degrees:e[_],A=_==="direction"?a.mask:e.commonMask,C=f[S?"speed":_],k=S?"speed":_==="speedDelta"?"delta":"error",F=R=>R===0?"0":R.toPrecision(5);return n.createElement("figure",{key:v},n.createElement("figcaption",null,p," · ",h?"帧":"Frame"," ",s," · Y ",e.sliceIndex),n.createElement("div",{className:"velocity-map"},n.createElement(rt,{label:v,slice:{width:e.width,height:e.height,values:E},maskSlice:{values:A},range:C,palette:y,plane:"xz",viewport:r,aspect:r.width*e.stepX/(r.height*e.stepZ),region:u,onCrosshair:R=>d([r.x+Math.min(r.width-1,Math.floor(R[0]*r.width)),r.z+Math.min(r.height-1,Math.floor(R[1]*r.height))])}),S&&i&&n.createElement(Mo,{arrows:i,view:r,role:S}),g&&n.createElement(Ro,{x:b,z:l,view:r})),n.createElement("div",{className:"velocity-scale "+k}),n.createElement("small",null,F(C[0])," → ",_==="speedDelta"?"0 → ":"",F(C[1]),_==="direction"?"°":" m/s",S?h?" · GT / 预测共用色标":" · Shared GT / prediction color scale":""),n.createElement("small",null,"X → · Z ↑ · ",_==="direction"?h?"棋盘为夹角不可判定":"Checkerboard: direction angle unavailable":h?"棋盘为不在共同有效域":"Checkerboard: outside common valid support"),_==="speedDelta"&&n.createElement("small",null,h?"蓝色为预测偏慢，红色为预测偏快":"Blue: prediction slower; red: prediction faster"),S&&i&&n.createElement(No,{arrows:i,view:r}))}))}const Be=(e,a=6)=>Number.isFinite(e)?e.toFixed(a):"N/A",r0=e=>e==null?"N/A":(e*100).toFixed(2)+"%",aa=["xmin","xmax","zmin","zmax"],Pa=1e-8;function c0({value:e,angle:a,local:t}){const{language:i}=ce(),r=(s,o)=>i==="zh"?s:o,c=e.counts;return n.createElement("section",{className:"velocity-metrics","aria-label":t?"Velocity ROI metrics":"Velocity slice metrics"},n.createElement("h3",null,t?r("ROI · 当前 Y 层","ROI · current Y layer"):r("全切片 · 当前 Y 层","Whole slice · current Y layer")),n.createElement("p",null,r("平均 E ","Mean E "),n.createElement("b",null,Be(e.meanE)),r(" · 最大 E "," · Maximum E "),n.createElement("b",null,Be(e.maximum?.value)),r(" · 平均 Δs "," · Mean Δs "),n.createElement("b",null,Be(e.meanSpeedDelta))),n.createElement("p",null,r("最大 E 的 XYZ：","Maximum E at XYZ: "),e.maximum?.world.map(s=>Be(s,5)).join(", ")??"N/A"),n.createElement("p",null,r("候选 ","Candidates "),c.candidate,r(" · GT 资格 "," · GT eligible "),c.gtEligible,r(" · 共同有效 "," · Common valid "),c.common,r(" · 非有限排除 "," · Nonfinite excluded "),c.nonfiniteExcluded),n.createElement("p",null,r("覆盖率：共同 / 候选 ","Coverage: common / candidate "),r0(e.coverageCandidate),r(" · 共同 / GT 资格 "," · Common / GT eligible "),r0(e.coverageGT)),n.createElement("p",null,r("平均三维夹角 ","Mean 3D angle "),Be(a.meanDegrees,3),r("° · 夹角有效 ","° · Angle valid "),a.count," / ",c.common,r(" · 低速排除 "," · Low-speed excluded "),a.excludedLowSpeedCount??"N/A"),n.createElement("small",null,r("仅 GT 资格 ","GT eligible only "),c.gtOnly,r(" · 仅预测有效 "," · Prediction valid only "),c.predOnly,r(" · 双方掩膜通过 "," · Both masks pass "),c.paired,r("。非有限值另行排除。",". Nonfinite values are excluded separately.")))}function Oo({loaded:e,request:a,initial:t}){const{language:i}=ce(),r=(X,K)=>i==="zh"?X:K,{frame:c,lattice:s,alignment:o}=e,[d,f]=B.useState(t?.domain??"collaborator-native"),[m,h]=B.useState(()=>t?.y??to({...e,hotspotXZ:a.hotspotXZ,domain:"collaborator-native"})),[x,u]=B.useState(t?.roi??a.roiXZ),[b,l]=B.useState(()=>Object.fromEntries(aa.map(X=>[X,String((t?.roi??a.roiXZ)[X])]))),[g,w]=B.useState(""),[_,p]=B.useState(()=>t?.probe??N0(s,a.hotspotXZ)),[v,y]=B.useState(t?.mode??"vectorError"),[S,E]=B.useState(t?.zoom??!1),[A,C]=B.useState(t?.showArrows??!0),[k,F]=B.useState(t?t.tau:Pa),[R,I]=B.useState(k===null?"":String(k)),[O,D]=B.useState(""),T=B.useMemo(()=>m===null?null:R0({frame:c,lattice:s,alignment:o,plane:"xz",sliceIndex:m,domain:d,roiXZ:x}),[c,s,o,m,d,x]),z=B.useMemo(()=>T?O0(T,k):null,[T,k]),M=!!(S&&T?.roiView),P=B.useMemo(()=>T&&(M?T.roiView:{x:0,z:0,width:T.width,height:T.height}),[T,M]),G=B.useMemo(()=>A&&P?$0(T,P,M?4:16):null,[T,A,P,M]),U=B.useMemo(()=>{let X=0,K=0,ae=0;if(T)for(let Re=0;Re<T.commonMask.length;Re++)T.commonMask[Re]&&(X=Math.max(X,T.speedGT[Re],T.speedPred[Re]),K=Math.max(K,T.vectorError[Re]),ae=Math.max(ae,Math.abs(T.speedDelta[Re])));return{speed:[0,X||1],vectorError:[0,K||1],speedDelta:[-(ae||1),ae||1],direction:[0,180]}},[T]),j=T?_[0]+T.width*_[1]:null,V=T&&_[0]>=0&&_[0]<T.width&&_[1]>=0&&_[1]<T.height&&T.commonMask[j],Z=B.useMemo(()=>T?{schema:"oceanscope.velocity-diagnostic-data.v1",scope:`${o.frame} native velocity diagnosis; diagnostic export only`,frame:o.frame,source:o.source,resource:o.resource,protocolSha256:o.protocolSha256,lattice:s,unitClaim:o.unitClaim,unitEvidence:o.unitEvidence,vectorBasis:o.vectorBasis,domain:d,domainDefinition:d==="collaborator-native"?o.domainDefinition:{id:d,rule:"Both velocity-valid masks > 0 AND six finite components; no tank or SDF depth filter"},yIndex:m,yWorld:s.origin[1]+m*s.axisSteps[1][1],surfaceRequest:a,roiXZ:x,probe:{index:j,xyz:T.worldAt(j),common:!!V,speedGT:V?T.speedGT[j]:null,speedPred:V?T.speedPred[j]:null,E:V?T.vectorError[j]:null,speedDelta:V?T.speedDelta[j]:null,vectorGT:V?Array.from(T.vectorsGT.subarray(3*j,3*j+3)):null,vectorPred:V?Array.from(T.vectorsPred.subarray(3*j,3*j+3)):null,angleDegrees:V&&z.mask[j]?z.degrees[j]:null},whole:T.whole,local:T.local,direction:{tau:k,unit:"m/s (source convention)",thresholdSource:k===null?"disabled":k===Pa?"legacy preview numerical epsilon":"user diagnostic input",whole:z.whole,local:z.local},display:{mode:v,view:P,zoomed:M,ranges:U,arrows:G}}:null,[T,o,s,d,m,a,x,j,V,z,k,v,P,M,U,G]),[$,J]=B.useState(null),[Q,be]=B.useState(null),[le,ye]=B.useState(null);B.useEffect(()=>be(null),[i]);const we=Q?.data===Z&&Q.language===i?Q.files:null;B.useEffect(()=>()=>{for(const X of Object.values(we??{}))URL.revokeObjectURL(X.href)},[we]),B.useEffect(()=>{if(!Z){J(null);return}const X=URL.createObjectURL(new Blob([JSON.stringify(Z,null,2)+`
`],{type:"application/json"}));return J({data:Z,url:X}),()=>URL.revokeObjectURL(X)},[Z]);function Pe(){try{const X=ro(Z,o,"b02fb8f239be78ed16415555635c25289c367924"),K=mo(X,T,z,G,i).toDataURL("image/png"),ae=lt({stem:`oceanscope-velocity-${o.frame}-y${m}`,record:X,csv:co(X,T,z),previewUrl:K});be({data:Z,files:ae,language:i}),ye(null)}catch(X){ye(X)}}function Ne(){const X=Object.fromEntries(aa.map(K=>[K,Number(b[K])]));if(aa.some(K=>!b[K].trim()||!Number.isFinite(X[K]))||X.xmin>X.xmax||X.zmin>X.zmax){w(r("请填写完整有限数字，最小值不能大于最大值。原选区未改变。","Enter finite values for every bound, with minimum ≤ maximum. The ROI is unchanged."));return}u(X),w("")}function ke(X){X.preventDefault();const K=R.trim()===""?null:Number(R);if(K!==null&&(!Number.isFinite(K)||K<0)){D(r("请输入非负有限数，或留空以停用夹角。","Enter a finite nonnegative number, or leave blank to disable angles."));return}F(K),D("")}return n.createElement(n.Fragment,null,n.createElement("p",null,r("来自水面热点 X ","From surface hotspot X "),Be(a.hotspotXZ.x,5),"，Z ",Be(a.hotspotXZ.z,5),r("；保留 XZ 选区。初始 Y 取该列默认域内最上方有效格层，之后由你手动选择，不随水面起伏。","; XZ ROI retained. Initial Y is the highest valid layer in this column within the default domain. Subsequent Y selection is manual and does not follow the surface.")),n.createElement("div",{className:"velocity-controls"},n.createElement("label",null,r("有效域 ","Valid domain "),n.createElement("select",{"aria-label":"Velocity domain",value:d,onChange:X=>f(X.target.value)},n.createElement("option",{value:"collaborator-native"},r("合作者原生域 · 已核对","Collaborator native domain · verified")),n.createElement("option",{value:"common-finite-exploration"},r("共同有限域 · 探索","Common finite domain · exploration")))),n.createElement("label",null,r("XZ 定高切片 · Y 索引 ","Fixed-height XZ slice · Y index "),n.createElement("input",{"aria-label":"Velocity Y index",type:"number",min:"0",max:s.dimensions[1]-1,step:"1",value:m??"",onChange:X=>{const K=X.target.value.trim(),ae=Number(K);K&&Number.isInteger(ae)&&ae>=0&&ae<s.dimensions[1]&&h(ae)}})),n.createElement("output",{"aria-label":"Velocity Y world"},"Y = ",m===null?r("未选择","Not selected"):Be(s.origin[1]+m*s.axisSteps[1][1],8))),n.createElement("p",{className:"velocity-domain"},d==="collaborator-native"?r("合作者原生域：X [11,212)、Z [11,105)，GT vel_valid > 0、GT SDF < −0.10（float32）、预测 vel_valid > 0，再排除非有限速度。","Collaborator native domain: X [11,212), Z [11,105), GT vel_valid > 0, GT SDF < −0.10 (float32), prediction vel_valid > 0; nonfinite velocities excluded."):r("探索域：双方速度有效且六分量有限；不应用水槽裁剪或 GT 深水阈值，不作协议评分。","Exploration domain: both velocity masks valid and all six components finite; no tank crop or GT deep-water threshold. Not protocol scoring."),r(" 当前显示为一层，非整帧体积评分。"," Showing one layer, not a full-frame volume score.")),n.createElement("p",null,r("速度单位沿用来源声明 m/s；坐标沿用来源声明 m。物理尺度、时间尺度与向量基底尚未独立标定。E = ‖预测向量 − GT 向量‖；Δs = 预测流速 − GT 流速。","Velocity m/s and coordinates m follow source declarations. Physical scale, time scale and vector basis have not been independently calibrated. E = ‖prediction vector − GT vector‖; Δs = prediction speed − GT speed.")),T?n.createElement(n.Fragment,null,n.createElement("div",{className:"velocity-controls"},n.createElement("label",null,r("第三图 ","Third map "),n.createElement("select",{"aria-label":"Velocity comparison map",value:v,onChange:X=>y(X.target.value)},n.createElement("option",{value:"vectorError"},r("速度向量误差 E","Velocity vector error E")),n.createElement("option",{value:"speedDelta"},r("流速大小差 Δs","Speed difference Δs")),n.createElement("option",{value:"direction"},r("三维方向夹角","3D direction angle")))),n.createElement("button",{type:"button","aria-pressed":A,onClick:()=>C(X=>!X)},r("配对箭头","Paired arrows")),n.createElement("button",{type:"button","aria-pressed":M,disabled:!T.roiView,onClick:()=>E(!M)},M?r("返回全切片","Back to whole slice"):r("放大 ROI","Zoom to ROI"))),n.createElement("form",{className:"velocity-controls",onSubmit:ke},n.createElement("label",null,r("方向低速阈值（m/s）","Direction low-speed threshold (m/s)"),n.createElement("input",{"aria-label":"Velocity direction threshold",inputMode:"decimal",value:R,onChange:X=>I(X.target.value)})),n.createElement("button",{type:"submit"},r("应用方向阈值","Apply direction threshold")),n.createElement("output",{"aria-label":"Velocity applied threshold"},k===null?r("夹角停用","Angles disabled"):`${r("当前 τ = ","Current τ = ")}${k} m/s · ${k===Pa?r("沿用旧预览数值阈值","Legacy preview numerical threshold"):r("自定诊断阈值","Custom diagnostic threshold")}`)),O&&n.createElement("p",{role:"alert"},O),n.createElement("p",null,r("双方完整流速均大于 τ 才计算三维夹角。阈值用于诊断，等待合作者确认，留空可停用夹角。箭头仅显示 XZ 投影，空心点表示投影为零。","The full speed on both sides must exceed τ to calculate a 3D angle. This diagnostic threshold awaits collaborator confirmation; leave blank to disable angles. Arrows show only XZ projections; hollow markers indicate zero projection.")),n.createElement(V0,{slice:T,angles:z,mode:v,arrows:G,view:P,zoom:M,frame:o.frame,probe:_,setProbe:p,ranges:U}),n.createElement("p",null,r("箭头显示 XZ 投影，夹角使用 XYZ 三个分量。当前切片位于固定 Y 层。","Arrows show the XZ projection. The angle uses all three components on this fixed Y slice.")),n.createElement("p",{"aria-label":"Velocity probe"},r("同位置探针 XYZ (","Same-position probe XYZ ("),Z.probe.xyz.map(X=>Be(X,5)).join(", "),") · ",V?r("共同有效","Common valid"):r("不在共同有效域","Outside common valid domain"),r(" · GT 流速 "," · GT speed "),Be(Z.probe.speedGT),r(" · 预测流速 "," · Prediction speed "),Be(Z.probe.speedPred)," · E ",Be(Z.probe.E)," · Δs ",Be(Z.probe.speedDelta)),n.createElement("p",{"aria-label":"Velocity probe direction"},r("三维夹角 ","3D angle "),Z.probe.angleDegrees===null?"N/A":Be(Z.probe.angleDegrees,4)+"°",V&&Z.probe.angleDegrees===null&&(k===null?r("（夹角已停用）"," (angles disabled)"):r("（至少一侧低于或等于阈值）"," (at least one speed is at or below the threshold)"))," · GT XYZ (",Z.probe.vectorGT?.map(X=>Be(X)).join(", ")??"N/A",r(") · 预测 XYZ (",") · Prediction XYZ ("),Z.probe.vectorPred?.map(X=>Be(X)).join(", ")??"N/A",r(") · Y 为切片法向",") · Y is normal to the slice")),n.createElement("form",{onSubmit:X=>{X.preventDefault(),Ne()}},n.createElement("fieldset",{className:"velocity-controls"},n.createElement("legend",null,r("速度 ROI · 世界坐标 XZ（不改变 Y）","Velocity ROI · world XZ coordinates (Y unchanged)")),aa.map(X=>n.createElement("label",{key:X},X,n.createElement("input",{"aria-label":"Velocity ROI "+X,type:"text",inputMode:"decimal",value:b[X],onChange:K=>l(ae=>({...ae,[X]:K.target.value}))}))),n.createElement("button",{type:"submit"},r("应用速度选区","Apply velocity ROI")))),g&&n.createElement("p",{role:"alert"},g),Number(o.frame)===1049&&d==="collaborator-native"&&n.createElement(Io,{slice:T,probe:_,t:r}),n.createElement("div",{className:"velocity-statistics"},n.createElement(c0,{value:T.whole,angle:z.whole}),n.createElement(c0,{value:T.local,angle:z.local,local:!0})),n.createElement("section",{className:"velocity-report","aria-label":"Velocity report"},n.createElement("h3",null,r("可恢复速度报告","Restorable velocity report")),n.createElement("p",null,r("用当前切片、选区和显示设置生成一份报告。配套 JSON 可从“报告与恢复”重新打开。","Generate a report from the current slice, ROI and display settings. Reopen its JSON in Reports & restore.")),n.createElement("button",{type:"button",onClick:Pe},r("生成当前速度报告","Generate current velocity report")),n.createElement(Je,{error:le,zh:i==="zh"}),we&&n.createElement("div",{className:"velocity-report-downloads"},Object.entries(we).map(([X,K])=>n.createElement("a",{key:X,href:K.href,download:K.name},X==="json"?r("下载可恢复速度 JSON","Download restorable velocity JSON"):r("下载速度报告 ","Download velocity report ")+X.toUpperCase()))),Q&&!we&&n.createElement("p",{role:"status"},r("视图已更新。请重新生成速度报告。","The view or language changed. Generate the velocity report again."))),$?.data===Z&&n.createElement("a",{download:`oceanscope-velocity-${o.frame}-y${m}-data.json`,href:$.url},r("导出速度诊断数据 JSON（不用于恢复）","Export velocity diagnostic data JSON (not restorable)"))):n.createElement("p",{role:"status"},r("热点列内没有共同有效点。请选择明确的 Y 层；不会移到其他 XZ。","No common valid point in the hotspot column. Select an explicit Y layer; XZ will not move.")))}function $o({frameNumber:e,request:a,restored:t}){const{language:i}=ce(),r=(h,x)=>i==="zh"?h:x,[c,s]=B.useState(null),[o,d]=B.useState(0),f=a?.frame===e&&!!va(e);B.useEffect(()=>{if(!f||t){s(null);return}const h=new AbortController;let x=!0;return s(null),I0(e,{signal:h.signal}).then(u=>{x&&s({frameNumber:e,request:a,loaded:u})}).catch(u=>{x&&s({frameNumber:e,request:a,error:u})}),()=>{x=!1,h.abort()}},[e,a,f,o,t]);const m=t??(c?.frameNumber===e&&c?.request===a?c:null);return n.createElement("div",{className:"velocity-diagnosis"},n.createElement("h2",null,r("速度与方向诊断 · 帧 ","Velocity and direction diagnosis · frame "),e),f?m?.error?n.createElement("p",{role:"alert"},r("速度资源加载失败：","Velocity resource failed to load: "),m.error.message," ",n.createElement("button",{onClick:()=>d(h=>h+1)},r("重试速度资源","Retry velocity resource"))):m?.loaded?n.createElement(Oo,{key:o,loaded:m.loaded,request:a,initial:t?.view}):n.createElement("p",{role:"status"},r("正在读取并校验 ","Reading and verifying "),e,r(" 原始值诊断资源…"," raw-value diagnostic resources…")):n.createElement("p",{role:"status"},r("当前帧 ","Frame "),e,r(" 暂无对应的速度报告视图。请选择已核验帧，并从该帧的水面热点或报告进入。"," has no velocity report view. Choose a verified frame and enter from its surface hotspot or report.")))}const G0="oceanscope.velocity-comparison.v1",To=[1001,1049,1096],Fo="best-1027",Do="raw-reference-96-e81b8955734e",ft="collaborator-native",mt=1e-8,Qa=28,zo=[166,186,80,100],Zo=4,Xo={mode:"direction",probe:[176,90],arrows:!0};function W0(){const e=To.map(va),{lattice:a,protocolSha256:t,domainDefinition:i}=e[0],[r,c,s,o]=zo,d=u=>a.origin[0]+u*a.axisSteps[0][0],f=u=>a.origin[2]+u*a.axisSteps[2][2],m={xmin:d(r),xmax:d(c),zmin:f(s),zmax:f(o)},h={axis:"xz",yIndex:Qa,yWorld:a.origin[1]+Qa*a.axisSteps[1][1]},x=e.map(u=>({frame:u.frame,gtSha256:u.source.gt.sha256,predSha256:u.source.prediction.sha256,packedSha256:u.resource.packedSha256,decodedSha256:u.resource.decodedSha256}));return{alignments:e,roi:m,plane:h,domain:ft,tau:mt,domainDefinition:i,protocolSha256:t,sources:x,lattice:a}}async function Po(e,a=I0){const{alignments:t,roi:i,lattice:r,domainDefinition:c}=W0(),s=[];for(const o of t){e.throwIfAborted();const d=await a(o.frame,{signal:e});if(e.throwIfAborted(),d.alignment!==o||JSON.stringify(d.lattice)!==JSON.stringify(r)||JSON.stringify(o.domainDefinition)!==JSON.stringify(c))throw Error("Velocity comparison requires the verified common lattice and protocol");const f=R0({...d,plane:"xz",sliceIndex:Qa,domain:ft,roiXZ:i});s.push({frame:o.frame,slice:f,angles:O0(f,mt)})}return Vo(s)}function Vo(e){const a=e[0].slice,t=new Uint8Array(a.commonMask.length),i=new Uint8Array(t.length),r=[];let c=0,s=0,o=0,d=0,f=0,m=0;for(let u=0;u<t.length;u++)if(!(!a.roiMask[u]||!a.candidateMask[u])&&(r.push(u),!!e.every(({slice:b})=>b.commonMask[u]))){t[u]=1,c++,e.every(({angles:b})=>b.mask[u])&&(i[u]=1,s++);for(const{slice:b}of e){o=Math.max(o,b.speedGT[u],b.speedPred[u]),d=Math.max(d,b.vectorError[u]),f=Math.max(f,Math.abs(b.speedDelta[u]));for(const l of[b.vectorsGT,b.vectorsPred])m=Math.max(m,Math.hypot(l[u*3],l[u*3+2]))}}const h=a.roiView,x=e.map(({frame:u,slice:b,angles:l})=>{let g=0,w=0,_=0;for(const v of r)t[v]&&(g+=b.vectorError[v],w+=b.speedDelta[v]),i[v]&&(_+=l.degrees[v]);const p={...b,commonMask:t};return{frame:u,nativeMask:b.commonMask,slice:p,angles:{...l,mask:i},arrows:$0(p,h,Zo,m),summary:{frame:u,nativeRoi:b.local.counts.common,meanE:c?g/c:null,meanDelta:c?w/c:null,meanAngle:s?_/s:null}}});return{view:h,rows:x,roiIndices:r,paired:c,anglePaired:s,ranges:{speed:[0,o||1],vectorError:[0,d||1],speedDelta:[-(f||1),f||1],direction:[0,180]}}}function Go(e,a,t){const{roi:i,plane:r,protocolSha256:c,sources:s,domainDefinition:o}=W0();return{schema:G0,createdAt:new Date().toISOString(),source:{caseId:Fo,runId:Do,protocolSha256:c,codeRevision:t,frames:s},scope:{preset:"1049-a-fixed-roi",plane:r,roi:i,domain:ft,domainDefinition:o,tau:mt},view:a,result:{roiCandidates:e.roiIndices.length,shared:e.paired,sharedAngles:e.anglePaired,ranges:e.ranges,arrowReferenceSpeed:a.arrows?e.rows[0].arrows.referenceSpeed:null,arrowIndices:a.arrows?e.rows[0].arrows.points.map(d=>d.index):[],frames:e.rows.map(d=>d.summary)}}}function Wo(e,a){const t=["frame,native_index,x,y,z,frame_valid,shared_valid,shared_angle_valid,probe,arrow,gt_speed,pred_speed,vector_error,speed_delta,direction_degrees"];for(const{frame:i,nativeMask:r,slice:c,angles:s,arrows:o}of e.rows){const d=new Set(a.arrows?o.points.map(m=>m.index):[]),f=a.probe[0]+c.width*a.probe[1];for(const m of e.roiIndices){const h=c.commonMask[m],x=s.mask[m];t.push([i,m,...c.worldAt(m),r[m],h,x,+(m===f),Number(d.has(m)),...h?[c.speedGT[m],c.speedPred[m],c.vectorError[m],c.speedDelta[m]]:["","","",""],x?s.degrees[m]:""].join(","))}}return t.join(`
`)+`
`}const rn=(e,a=5)=>Number.isFinite(e)?e.toFixed(a):"N/A";function Yo({data:e,initialView:a}){const{language:t}=ce(),i=(y,S)=>t==="zh"?y:S,[r,c]=B.useState(a),[s,o]=B.useState(null),[d,f]=B.useState(null);B.useEffect(()=>o(null),[t]);const m=s?.view===r&&s.language===t?s.files:null;B.useEffect(()=>()=>{for(const y of Object.values(m??{}))URL.revokeObjectURL(y.href)},[m]);const{paired:h,anglePaired:x,roiIndices:u,rows:b,ranges:l}=e,g=r.arrows?b[0].arrows.points.length:0,w=r.probe[0]+r.probe[1]*b[0].slice.width,_=b[0].slice.worldAt(w);function p(y){c(S=>({...S,...y})),f(null)}function v(){try{const y=Go(e,r,"b02fb8f239be78ed16415555635c25289c367924"),S=bo(y,e,t).toDataURL("image/png"),E=lt({stem:"oceanscope-best-1027-velocity-comparison",record:y,previewUrl:S,csv:Wo(e,r)});o({view:r,files:E,language:t}),f(null)}catch(y){f(y)}}return n.createElement(n.Fragment,null,n.createElement("p",null,i("Best_1027 · XZ 固定选区 · Y=28（约 −0.10 m）· 合作者原生有效域 · 方向阈值 1e−8 m/s","Best_1027 · fixed XZ ROI · Y=28 (about −0.10 m) · collaborator native domain · direction threshold 1e−8 m/s")),n.createElement("p",null,i("1049 A 的 ROI 为 X [−1.35, −0.35]、Z [1.45, 2.45] m。三帧共同有效 ","1049 A ROI: X [−1.35, −0.35], Z [1.45, 2.45] m. Common valid across three frames: "),h," / ",u.length,i("，其中三帧均可判定夹角 ","; angles valid in all three: "),x,i("。图和均值使用对应的共同格点，棋盘表示该格点未纳入。",". Maps and means use the corresponding common grid points; checkerboards mark excluded points.")),n.createElement("p",null,i("流速共用 0–","Shared speed range 0–"),rn(l.speed[1]),i(" m/s。配对箭头共用比例和采样位置"," m/s. Paired arrows share a scale and sampling positions"),r.arrows&&i("，每帧 ",", with ")+g+i(" 个点"," points per frame"),i("。速度和坐标单位沿用来源声明。",". Velocity and coordinate units follow source declarations.")),n.createElement("div",{className:"velocity-controls"},n.createElement("label",null,i("第三图 ","Third map "),n.createElement("select",{"aria-label":"Three-frame comparison map",value:r.mode,onChange:y=>p({mode:y.target.value})},n.createElement("option",{value:"direction"},i("三维方向夹角","3D direction angle")),n.createElement("option",{value:"vectorError"},i("速度向量误差 E","Velocity vector error E")),n.createElement("option",{value:"speedDelta"},i("流速大小差 Δs","Speed difference Δs")))),n.createElement("button",{type:"button","aria-pressed":r.arrows,onClick:()=>p({arrows:!r.arrows})},i("三帧配对箭头","Three-frame paired arrows"))),n.createElement("p",{"aria-label":"Three-frame probe"},i("同步探针 XYZ (","Synchronized probe XYZ ("),_.map(y=>rn(y)).join(", "),") · ",b[0].slice.commonMask[w]?i("三帧共同有效","Common valid in all three frames"):i("不在三帧共同有效格点内","Outside the three-frame common grid points")),n.createElement("div",{className:"velocity-comparison-table"},n.createElement("table",null,n.createElement("caption",null,i("固定 ROI · 各帧覆盖与共同样本指标","Fixed ROI · frame coverage and common-sample metrics")),n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,i("帧","Frame")),n.createElement("th",null,i("本帧有效 / 候选","Frame valid / candidate")),n.createElement("th",null,i("共同格点平均 E（m/s）","Common-point mean E (m/s)")),n.createElement("th",null,i("平均 Δs（m/s）","Mean Δs (m/s)")),n.createElement("th",null,i("平均夹角","Mean angle")))),n.createElement("tbody",null,b.map(({frame:y,summary:S})=>n.createElement("tr",{key:y},n.createElement("th",{scope:"row"},y),n.createElement("td",null,S.nativeRoi," / ",u.length),n.createElement("td",null,rn(S.meanE)),n.createElement("td",null,rn(S.meanDelta)),n.createElement("td",null,rn(S.meanAngle,2),"°")))))),b.map(({frame:y,slice:S,angles:E,arrows:A})=>n.createElement("section",{key:y,className:"velocity-comparison-row","aria-label":`Velocity comparison frame ${y}`},n.createElement("h3",null,i("帧 ","Frame "),y),n.createElement(V0,{frame:y,slice:S,angles:E,ranges:l,mode:r.mode,arrows:r.arrows?A:null,view:e.view,zoom:!0,probe:r.probe,setProbe:C=>p({probe:C})}),S.commonMask[w]?n.createElement("p",null,i("探针 E ","Probe E "),rn(S.vectorError[w])," m/s · Δs ",rn(S.speedDelta[w]),i(" m/s · 夹角 "," m/s · Angle "),E.mask[w]?rn(E.degrees[w],2)+"°":"N/A"):null)),n.createElement("section",{className:"velocity-report","aria-label":"Three-frame velocity report"},n.createElement("h3",null,i("可恢复三帧报告","Restorable three-frame report")),n.createElement("p",null,i("CSV 保留三帧各自的 ROI 候选格点与有效标记。JSON 可在“报告与恢复”重新打开，指标会从核验后的资源重算。","CSV retains each frame’s ROI candidate grid points and validity flags. Reopen JSON in Reports & restore; metrics are recomputed from verified resources.")),n.createElement("button",{type:"button",onClick:v},i("生成三帧速度报告","Generate three-frame velocity report")),n.createElement(Je,{error:d,zh:t==="zh"}),s&&!m&&n.createElement("p",{role:"status"},i("视图或语言已更新，请重新生成报告。","The view or language changed. Generate the report again.")),m&&n.createElement("div",{className:"velocity-report-downloads"},Object.entries(m).map(([y,S])=>n.createElement("a",{key:y,href:S.href,download:S.name},i("下载三帧报告 ","Download three-frame report "),y.toUpperCase())))))}function jo({restored:e}){const{language:a}=ce(),t=(d,f)=>a==="zh"?d:f,[i,r]=B.useState(null),[c,s]=B.useState(0);B.useEffect(()=>{if(e)return;const d=new AbortController;return r(null),Po(d.signal).then(f=>{d.signal.aborted||r({data:f})}).catch(f=>{d.signal.aborted||r({error:f})}),()=>d.abort()},[e,c]);const o=e??i;return n.createElement("div",{className:"velocity-diagnosis"},n.createElement("h2",null,t("三帧速度对照 · 1001 / 1049 / 1096","Three-frame velocity comparison · 1001 / 1049 / 1096")),o?.data?n.createElement(Yo,{data:o.data,initialView:e?.view??Xo}):o?.error?n.createElement(n.Fragment,null,n.createElement(Je,{error:o.error,zh:a==="zh"}),n.createElement("button",{type:"button",onClick:()=>s(d=>d+1)},t("重试三帧资源","Retry three-frame resources"))):n.createElement("p",{role:"status"},t("正在核验三帧速度资源并计算共同有效格点…","Verifying three-frame velocity resources and computing common valid grid points…")))}function Lo({enabled:e,open:a,active:t,forceModal:i=!1,label:r,closeLabel:c,onClose:s,returnFocusRef:o,children:d}){const[f,m]=B.useState(()=>e&&!!globalThis.matchMedia?.("(max-width:900px)").matches),h=e&&(f||i),x=B.useRef(null),u=B.useRef(null),b=B.useRef(a&&t),l=B.useRef(!1);B.useEffect(()=>{if(!e)return;const p=globalThis.matchMedia?.("(max-width:900px)");if(!p)return;const v=()=>m(p.matches);return v(),p.addEventListener("change",v),()=>p.removeEventListener("change",v)},[e]),B.useEffect(()=>{if(!e)return;const p=x.current;return h&&(a&&t&&!p.open?p.showModal():p.open&&(!a||!t)&&p.close()),a&&t&&(h||!b.current)&&u.current?.focus({preventScroll:!0}),!a&&l.current&&(l.current=!1,o.current?.focus({preventScroll:!0})),b.current=a&&t,()=>{h&&p.open&&p.close()}},[e,h,a,t]);function g(){l.current=!0,s()}function w(p){if(e){if(p.key==="Escape"){p.preventDefault(),p.stopPropagation(),g();return}if(h&&p.key==="Tab"){const v=[...x.current.querySelectorAll("button,input,select,textarea,a[href],summary,[tabindex]")].filter(E=>!E.disabled&&E.tabIndex>=0&&E.getClientRects().length),y=v[0],S=v.at(-1);p.shiftKey&&document.activeElement===y?(p.preventDefault(),S?.focus()):!p.shiftKey&&document.activeElement===S&&(p.preventDefault(),y?.focus())}}}const _=h?"dialog":"aside";return n.createElement(_,{ref:x,id:"analysis-settings",className:"field-sidebar","aria-label":r,onCancel:p=>{p.preventDefault(),g()},onKeyDown:w,onClick:p=>{if(!h||p.target!==p.currentTarget)return;const v=p.currentTarget.getBoundingClientRect();(p.clientX<v.left||p.clientX>v.right||p.clientY>v.bottom)&&g()}},e&&n.createElement("div",{className:"demo-settings-header"},n.createElement("button",{ref:u,className:"demo-close-settings",onClick:g},c)),d)}function ta(e,a,t="application/json"){const i=URL.createObjectURL(new Blob([a],{type:t})),r=document.createElement("a");r.href=i,r.download=e,r.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function qo(e){if(!e?.dimensions||!e.axisSteps)return null;const a=[];for(let t=0;t<8;t++)a.push(e.origin.map((i,r)=>i+e.dimensions.reduce((c,s,o)=>c+(t>>o&1)*(s-1)*e.axisSteps[o][r],0)));return{min:[0,1,2].map(t=>Math.min(...a.map(i=>i[t]))),max:[0,1,2].map(t=>Math.max(...a.map(i=>i[t])))}}function Uo({focusedLayout:e=!1,workspace:a="3d",onWorkspace:t=()=>{},evaluation:i=null,evaluationError:r="",unifiedRestore:c=!1,onCancelImport:s,onRetryEvaluation:o,comparison:d,processing:f,activeGroup:m,onActiveGroup:h,setup:x,expectedFrames:u,metricsOverride:b,sourceCase:l,viewApiRef:g,initialView:w,onViewReady:_,onViewRestored:p,restoring:v=!1,frameSplit:y=d.frameSplit,readOnly:S=!1,active:E=!0}){const{tr:A,language:C}=ce(),k=C==="zh",F=e,R=F?"3d":"time",[I,O]=B.useState(null),D=B.useRef(null);B.useRef(0);const T=!!I&&a==="slices",z=!!I?.comparison&&a==="slices";l?.id,i?.runId,B.useEffect(()=>{if(!F||a!=="3d")return;const N=()=>{window.location.hash==="#analysis-summary"&&document.getElementById("analysis-summary")?.scrollIntoView({block:"start"})};return N(),window.addEventListener("hashchange",N),()=>window.removeEventListener("hashchange",N)},[F,a,i]);const M=w?.settings,P=B.useRef(null),G=B.useRef(null),U=B.useRef(!1),[j,V]=B.useState(""),Z=e&&d.id==="best-1027",$=!!l&&d.id!=="best-1027",{presenting:J}=li(),[Q,be]=B.useState(()=>({presenting:J,open:!J&&!globalThis.matchMedia?.("(max-width:900px)").matches})),le=Q.presenting===J&&Q.open;function ye(N){be(H=>({presenting:J,open:typeof N=="function"?N(H.presenting===J&&H.open):N}))}B.useEffect(()=>{e&&G.current?.pause()},[a]);const we=B.useRef(null),[Pe,Ne]=B.useState(!0),ke=B.useRef(null),[X,K]=B.useState({subset:"all",metric:"height",grid:"coarse"}),[ae,Re]=B.useState(null),[Ve,He]=B.useState(null),[on,Gn]=B.useState(0),[Sn,Bn]=B.useState(M?.shading||"original");B.useEffect(()=>{J&&G.current?.pause()},[J]);const[Wn,_a]=B.useState(null),[Yn,An]=B.useState(M?.errorScale||{locked:!1,limit:1}),pn=B.useRef(null),W=jr(d);function Y(){pn.current&&(pn.current.open=!0,pn.current.scrollIntoView?.({block:"start"}))}const ee=JSON.stringify(f?.lattice??null),me=B.useMemo(()=>JSON.parse(ee),[ee]),ve=B.useMemo(()=>f?.frames?.map(N=>N.frame)||[],[f?.frames]),Se=B.useMemo(()=>Xn(l),[l]),_e=B.useMemo(()=>m==="sdf"&&Se.length?Se:ve,[m,Se,ve]),Ke=i?.frameIds??_e,[q,Qe]=B.useState(M?.frame??(Z?1049:null)),[ne,hn]=B.useState(null),[kn,jn]=B.useState(null),[ln,Ln]=B.useState(""),[Ge,Cn]=B.useState(!1),[We,qn]=B.useState(()=>{if(M)return M.mode;const N=S?"split":Wa("field-view")?.mode;return["split","overlay","wire-overlay","gt","prediction"].includes(N)?N:"split"}),[qe,bt]=B.useState(M?.quality??"balanced"),[dn,ut]=B.useState(M?.component??"magnitude"),[pt,o1]=B.useState(.65),[gn,ht]=B.useState(M?.showContext??!1),[yn,gt]=B.useState(M?.vectorDensity??2e3),[vn,yt]=B.useState(M?.arrowScale??1),[te,Ea]=B.useState(M?.plane??(Z?"yz":"xz")),[Y0,In]=B.useState(M?.sliceIndex??null),[wa,vt]=B.useState(M?.crosshair||[.5,.5]),[_n,_t]=B.useState(!!M?.sourceRange),[en,Et]=B.useState(M?.sourceRange||[0,1]),[De,wt]=B.useState(M?.rotationAxis||"y"),[Oe,xt]=B.useState(M?.angle??30),[$e,xa]=B.useState(M?.sectionPercent??50),[Mn,St]=B.useState(M?.showPlane??!0),[Bt,j0]=B.useState(null),[ze,Sa]=B.useState(M?{showGt:M.showGt,showPrediction:M.showPrediction,gtOpacity:M.gtOpacity,predictionOpacity:M.predictionOpacity}:{showGt:!0,showPrediction:!0,gtOpacity:.65,predictionOpacity:.8}),[L0,At]=B.useState(""),fn=B.useRef(null),En=B.useRef(0),Un=B.useRef(_e);Un.current=_e;const se=!!d?.settings?.previewOnly,mn=m==="sdf"&&Se.includes(q)&&!ve.includes(q);B.useEffect(()=>(fn.current={frames:Hi({fetchFrame:(N,H,L)=>tr(N,H,{...L,withIdentity:!0}),decode:f0}),geometry:Ki(),surface:ci()},()=>{En.current++,fn.current?.frames.dispose(),fn.current?.geometry.dispose(),fn.current?.surface.dispose(),fn.current=null}),[d.id]),B.useEffect(()=>{hn(null),jn(null),Qe(M?.frame??(Z?1049:null)),Ne(!0),Ln("")},[d.id]),B.useEffect(()=>{if(Ke.length&&!Ke.includes(q)){const N=S?null:Wa("field-view");Qe(N?.comparisonId===d.id&&_e.includes(N.frame)?N.frame:_e[0])}},[_e,Ke,q,d.id,S]),B.useEffect(()=>{!S&&q!=null&&l0("field-view",{mode:We,comparisonId:d.id,frame:q})},[We,q,d.id,S]),B.useEffect(()=>{let N=!0;if(S||b){jn(b??null);return}return ir(d.id).then(H=>{N&&jn(H)}).catch(H=>{N&&(jn(null),Ln(H.message))}),()=>{N=!1}},[d.id,_e.length,d.status,b,S]);const Jn=ne?Fn(ne.snapshot.data,m):null,Hn=ne?.snapshot.data.fields.find(N=>N.id===(Jn?.groundTruth?.ids[0]||Jn?.prediction?.ids[0]))?.shape||me?.dimensions,Ye=Hn?Hn[te==="yz"?0:te==="xz"?1:2]-1:0,Ce=Math.max(0,Math.min(Y0??Math.floor(Ye/2),Ye)),kt=B.useMemo(()=>({group:m,mode:se?"gt":We,quality:qe,component:dn,opacity:pt,showContext:gn,vectorDensity:yn,arrowScale:vn,plane:te,sliceIndex:Ce,angle:Oe,sectionPercent:$e,rotationAxis:De,showPlane:Mn,sourceRange:_n&&en[1]>en[0]?en:null,unit:Jn?.unit}),[m,We,se,qe,dn,pt,gn,yn,vn,te,Ce,Oe,$e,De,Mn,_n,en,Jn?.unit]),nn=B.useMemo(()=>({group:m,quality:qe,component:dn,showContext:gn,vectorDensity:yn,arrowScale:vn,plane:te,sliceIndex:Ce,angle:Oe,sectionPercent:$e,rotationAxis:De,previewOnly:se}),[m,qe,dn,gn,yn,vn,te,Ce,Oe,$e,De,se]),an=JSON.stringify([d.id,q,nn,on]);B.useEffect(()=>{const N=fn.current;if(!N||q==null)return;const H=++En.current;let L=!0;if(Ln(""),!Pe||!_e.includes(q)){hn(null),Cn(!1);return}return Cn(!0),He({key:an,status:"loading"}),(async()=>{try{if(mn){const Ze=await N.surface.select(l,q,qe);if(!Ze||!L||H!==En.current)return;const bn=si(Ze.geometry,me,nn),Qn={comparisonId:d.id,frameNumber:q,data:{fields:[],groups:{}},verifiedResource:Ze.verifiedResource};hn({snapshot:Qn,geometry:bn,settings:nn}),He({key:an,status:"ready"}),Cn(!1),At(`${(N.surface.stats().bytes/1048576).toFixed(0)} MiB surface cache`);return}const de=await N.frames.select(d.id,q);if(!de||!L||H!==En.current)return;let ge;try{ge=await N.geometry.request(de,me,nn)}catch(Ze){ge={failed:!0,layers:[],warnings:[`3D preparation unavailable: ${Ze.message}. Use slices below.`],byteLength:0}}if(!ge||!L||H!==En.current)return;hn({snapshot:de,geometry:ge,settings:nn}),He({key:an,status:"ready"}),Cn(!1);const wn=N.frames.stats();if(At(wn.oversize?"Active frame exceeds preview cache budget":`${(wn.bytes/1048576).toFixed(0)} MiB decoded cache`),!e){const Ze=Un.current.indexOf(q);N.frames.prefetch(d.id,[Un.current[Ze+1],Un.current[Ze-1]].filter(bn=>bn!=null))}}catch(de){L&&H===En.current&&(Ln(de.message),He({key:an,status:"error",error:de.message}),Cn(!1))}})(),()=>{L=!1}},[d.id,q,nn,me,_e,on,an,Pe,mn,l,qe]),B.useEffect(()=>{ln&&G.current?.pause()},[ln]);const q0=B.useMemo(()=>qo(f?.lattice),[f?.lattice]),Ba=B.useCallback(N=>Qe(N),[]),xe=ne?.snapshot.frameNumber,Nn=xe==null?null:kn?.frames?.[String(xe)],Aa=B.useCallback(N=>{G.current?.pause(),m==="velocity"&&!ve.includes(N)&&h("sdf"),Qe(N)},[m,ve,h]),Te=JSON.stringify([d.id,q,m,dn,te,Ce,Oe,$e,De]),[Ct,ka]=B.useState(()=>({context:Te,range:M?.region??null})),It=B.useRef(Te);B.useEffect(()=>{It.current!==Te&&(It.current=Te,ka({context:Te,range:null}))},[Te]);const Ca=Ct.context===Te?Ct.range:null;function U0(N){G.current?.pause(),ka({context:Te,range:N})}function J0(N){G.current?.pause(),vt(N)}const Fe=ne?.settings.group||m,Rn=ne?Fn(ne.snapshot.data,Fe):null,re={shading:Sn,...kt,...ne?.settings,...ze,unit:Rn?.unit},je=Ve?.key===an&&Ve.status==="ready"&&!Ge&&!ln&&!j&&!!Bt&&ne?.snapshot.frameNumber===q&&ne?.settings===nn&&!ne?.geometry.failed;B.useEffect(()=>{_?.(je&&!v)},[je,v,_]),B.useEffect(()=>{if(!(!w||U.current)){if(ln||j||ne?.geometry.failed){U.current=!0,p?.(Error("load"));return}if(je){U.current=!0;try{P.current.restoreCamera(w.camera),G.current.pause(),p?.(null)}catch(N){p?.(N)}}}},[w,je,ln,j,ne,p]);function Mt(){if(!je||v||!l||_n&&!(en[1]>en[0]))throw Error("settings");return G.current.pause(),sn({schema:oa,name:`${l.id} · ${m.toUpperCase()} · ${xe} · ${te==="oblique"?De.toUpperCase()+" "+Oe+"°":te.toUpperCase()}`,sourceSignature:y0(l),settings:{...mn?{representation:Dn}:{},shading:Sn,caseId:l.id,frame:xe,group:m,mode:se?"gt":We,quality:qe,component:dn,plane:te,sliceIndex:Ce,angle:Oe,sectionPercent:$e,rotationAxis:De,showPlane:Mn,showContext:gn,...ze,showPrediction:se?!1:ze.showPrediction,vectorDensity:yn,arrowScale:vn,sourceRange:_n?en:null,errorScale:Yn,crosshair:wa,region:se?null:Ca,playback:G.current.getSettings()},camera:P.current.getCamera()},[l])}B.useImperativeHandle(g,()=>({pause(){G.current?.pause()},captureView:Mt,async restoreAnalysis(N,H,L){if(L.throwIfAborted(),!i)throw Error("Reference analysis is not ready for this dataset");if(H==="pairedCase"){if(!D.current)throw Error("One-page case unavailable for this dataset");return D.current.restore(N,L)}if(H==="velocityComparison"||H==="velocity")throw Error("Unsupported velocity report in public preview");if(H==="report"){if(!ke.current?.restoreText)throw Error("Analysis is not ready");return ke.current.restoreText(N,L)}const de=E0(N,i);L.throwIfAborted(),G.current?.pause(),ke.current?.clearSnapshot(),K(ge=>({...ge,subset:de.subset,metric:de.metric})),Qe(de.frame)}}));function H0(){G.current?.pause();let N=null,H=null,L=null,de="No 3D preview for this frame";if(_e.includes(q)){de=ln||j||(ne?.geometry.failed?"3D preparation failed":Ge?"3D preview is loading":"3D preview is not ready or not verified");try{const ge=mn?o0(l,q,qe):et(l,q);je&&ge&&JSON.stringify(ne.snapshot.verifiedResource)===JSON.stringify(ge)&&(N=Mt(),L=P.current.capture(),H=ge,de=mn?"Exact-frame native SDF surface bytes verified; no volume samples":"Exact-frame preview bytes verified")}catch(ge){N=null,H=null,L=null,de=ge.message}}return{view:{frame:q,plane:te,sliceIndex:Ce,rotationAxis:De,angle:Oe,sectionPercent:$e,selection:X,geometry:N,geometryResource:H,geometryStatus:{status:N?"included":"unavailable",reason:de}},scene:L}}function K0(N,H){if(H.throwIfAborted(),G.current?.pause(),Qe(N.frame),Ea(N.plane),In(N.sliceIndex),wt(N.rotationAxis),xt(N.angle),xa(N.sectionPercent),K(N.selection),Gn(de=>de+1),!N.geometry)return Promise.resolve();Ne(!0);const L=N.geometry.settings;return h(L.group),qn(L.mode),bt(L.quality),ut(L.component),Bn(L.shading),ht(L.showContext),gt(L.vectorDensity),yt(L.arrowScale),St(L.showPlane),Sa({showGt:L.showGt,showPrediction:L.showPrediction,gtOpacity:L.gtOpacity,predictionOpacity:L.predictionOpacity}),_t(!!L.sourceRange),Et(L.sourceRange??[0,1]),An(L.errorScale),vt(L.crosshair),new Promise((de,ge)=>{const wn=setTimeout(()=>bn(Error("Timed out loading the report view; retry the geometry download")),3e4),Ze=()=>bn(Error("Report restore cancelled"));function bn(Qn){clearTimeout(wn),H.removeEventListener("abort",Ze),Re(null),Qn?ge(Qn):de()}H.addEventListener("abort",Ze,{once:!0}),Re({view:N,signal:H,finish:bn})})}B.useEffect(()=>{if(!(!ae||ae.signal.aborted)&&!(q!==ae.view.frame||Ve?.key!==an||Ve.status==="loading")){if(Ve.error||j||ne?.geometry.failed){ae.finish(Error(Ve.error||j||"Geometry unavailable"));return}if(je){if(JSON.stringify(ne.snapshot.verifiedResource)!==JSON.stringify(ae.view.geometryResource)){ae.finish(Error("Report preview resource identity mismatch"));return}try{P.current.restoreCamera(ae.view.geometry.camera),G.current?.restoreSettings(ae.view.geometry.settings.playback),ka({context:Te,range:ae.view.geometry.settings.region??null}),ae.finish()}catch(N){ae.finish(N)}}}},[ae,je,q,Ve,an,j,ne]);const Q0=Di({sourceCase:l,comparison:d,processing:f,snapshot:ne?.snapshot,geometry:ne?.geometry,settings:re,metrics:kn}),ei=ne?.snapshot.data.fields.find(N=>N.id===(Rn?.groundTruth?.ids[0]||Rn?.prediction?.ids[0])),Nt=f?.lattice&&te!=="oblique"?cr(f.lattice,te,Ce):null,Ia={shading:Fe==="sdf"?Sn:"not_applicable",comparison_id:d.id,dataset_a:d.groundTruthId||d.labels?.gt?.displayName||"Ground Truth",dataset_b:se?"":d.predictionId||d.labels?.prediction?.displayName||"Prediction",frame:xe,group:Fe,component:re.component,plane:re.plane,mode:re.mode,camera:Bt,gt_opacity:ze.gtOpacity,prediction_opacity:ze.predictionOpacity,preview_quality:re.quality,show_plane:Mn,gt_visible:ze.showGt,prediction_visible:ze.showPrediction,value_unit:Rn?.unit||"undeclared",coordinate_unit:"source_grid_units",lattice_origin:me?.origin,lattice_axis_steps:me?.axisSteps,dimensions:me?.dimensions,...re.plane==="oblique"?oi(nt(me,re.angle,re.sectionPercent,re.rotationAxis)):{slice_index:re.sliceIndex,angle_degrees:re.plane==="xy"?0:re.plane==="yz"?90:null,sampling:"native_voxel_layer"},section_percent:re.plane==="oblique"?re.sectionPercent:Ra(re.sliceIndex,0,(me?.dimensions?.[re.plane==="xy"?2:re.plane==="yz"?0:1]||1)-1),crosshair_normalized:wa,local_region:Ca,saved_metrics_scope:"precomputed_original_support_not_current_slice"},ni=n.createElement("div",{id:"analysis-height",hidden:e&&!["height","report"].includes(a)},i&&q!=null&&n.createElement(Co,{viewMode:e?a==="report"?"report":"height":"all",unifiedRestore:c,bundle:i,frame:q,plane:te,sliceIndex:Ce,rotationAxis:De,angle:Oe,sectionPercent:$e,getReportView:H0,onRestoreReportView:K0,reportControlRef:ke,onDownload:ta,catalog:[l],reportContext:JSON.stringify([Te,X]),onPause:()=>G.current?.pause(),onOpenVelocity:void 0})),Rt=n.createElement("div",{hidden:e&&a!==R,id:"analysis-summary",className:F?"demo-integrated-time":void 0},F&&i&&n.createElement("div",{className:"demo-time-heading"},n.createElement("div",null,n.createElement("h2",null,k?"时间分析":"Time analysis"),n.createElement("p",null,k?"查看误差随帧号的变化；点击曲线上的点，同步切换上方三维画面。":"Inspect errors across frames. Select a curve point to update the 3D view above.")),n.createElement("a",{href:"#analysis-spatial"},k?"返回三维画面 ↑":"Back to 3D ↑")),i&&n.createElement(mc,{displayGeometryFrames:Se.length?Se:ve,unifiedRestore:c,bundle:i,frame:q,onFrame:Aa,onDownload:ta,reportSelection:X,onReportSelection:K}));function Kn(){ke.current?.cancel(),s?.()}return n.createElement("div",{className:`field-workbench v2-field${e?` demo-field ${$?"demo-nonreference":""} demo-panel-${a} ${le?"settings-open":""}`:""}`,inert:v||void 0,onPointerDownCapture:Kn,onKeyDownCapture:Kn,onChangeCapture:Kn,onWheelCapture:Kn},n.createElement(Lo,{enabled:e,forceModal:J,open:le,active:E&&!T&&["3d","height","slices"].includes(a),returnFocusRef:we,onClose:()=>ye(!1),label:k?"视图设置":"View settings",closeLabel:k?"关闭设置":"Close settings"},n.createElement("details",{ref:pn,className:"field-setup",open:!d},n.createElement("summary",null,S?k?"已发布数据详情":"Published dataset details":A("Datasets & comparison setup")),x),n.createElement("div",{hidden:e&&a==="height"},n.createElement("h2",null,A("Display controls")),n.createElement("div",{className:"field-tabs compact"},["sdf","velocity"].map(N=>n.createElement("button",{key:N,"aria-label":N==="sdf"?"SDF":"Velocity",disabled:!d.availableGroups.includes(N)||N==="velocity"&&!ve.includes(q),"aria-pressed":m===N,onClick:()=>h(N)},A(N==="sdf"?"SDF":"Velocity"),!d.availableGroups.includes(N)&&n.createElement("small",null,A("Not available"))))),!se&&n.createElement("div",{className:"v2-primary-modes",role:"group","aria-label":k?"主要显示模式":"Primary display mode"},n.createElement("button",{"aria-pressed":We==="split",onClick:()=>qn("split")},k?"并排":"Side by side"),n.createElement("button",{"aria-pressed":We==="overlay",onClick:()=>qn("overlay")},k?"叠加":"Overlay")),n.createElement("p",{className:"v2-mode-caption"},se?k?"单组查看 · 不显示误差":"Single dataset · no error scores":["split","overlay"].includes(We)?k?"A / GT 蓝色 · B / Prediction 橙色":"A / GT blue · B / Prediction orange":k?"正在使用高级显示模式":"Advanced display mode active")),n.createElement("h2",null,A("Cross section")),n.createElement("label",null,A("Plane"),n.createElement("select",{"aria-label":A("Slice plane"),value:te,onChange:N=>{Ea(N.target.value),In(null)}},["xy","xz","yz"].map(N=>n.createElement("option",{key:N,value:N},N.toUpperCase()," · ",k?"固定":"fixed"," ",N==="xy"?"Z":N==="xz"?"Y":"X")),n.createElement("option",{value:"oblique",disabled:!Ga(me)},k?"斜切 · X / Y / Z 旋转":"Oblique · X / Y / Z rotation"))),te==="oblique"&&n.createElement(zi,{value:De,onChange:N=>{G.current?.pause(),wt(N)}}),te==="oblique"&&n.createElement("label",{className:"v2-position"},k?"切面角度":"Section angle"," ",n.createElement("output",null,Oe,"°"),n.createElement("input",{"aria-label":k?"场切面角度":"Field section angle",type:"range",min:"0",max:"180",step:"1",value:Oe,onChange:N=>xt(+N.target.value)}),n.createElement("small",null,k?"只旋转切面，相机不变；切面与探针同步。":"Rotates the section, not the camera; probes remain synchronized.")),n.createElement("label",{className:"v2-position"},k?"切片位置":"Section position"," ",n.createElement("output",null,(te==="oblique"?$e:Ra(Ce,0,Ye)).toFixed(1),"%"),n.createElement("input",{"aria-label":k?"场切片位置百分比":"Field section position percent","aria-valuetext":`${(te==="oblique"?$e:Ra(Ce,0,Ye)).toFixed(1)}%`,type:"range",min:"0",max:te==="oblique"?100:Ye,step:te==="oblique"?.1:1,disabled:!Hn||Ye===0,value:te==="oblique"?$e:Ce,onChange:N=>te==="oblique"?xa(+N.target.value):In(+N.target.value)})),n.createElement("div",{className:"v2-range-labels"},n.createElement("span",null,"0%"),n.createElement("span",null,"100%")),n.createElement("small",null,te==="oblique"?k?"三线性取样：参与插值的邻点必须全部有效，缺失处留空。":"Trilinear sampling: all contributing neighbours must be valid; missing support stays empty.":k?"按原始体素层移动，切面与下方探针同步。":"Snaps to original voxel layers; synchronized with slices and probe."),n.createElement("label",{className:"check"},n.createElement("input",{type:"checkbox",checked:Mn,onChange:N=>St(N.target.checked)}),k?"显示半透明切面":"Show translucent section plane"),n.createElement("details",{hidden:e&&a==="height",className:"v2-advanced"},n.createElement("summary",null,k?"显示、单位与网格详情":"Display, units & grid details"),n.createElement("p",null,te==="oblique"?`${k?"斜切角度":"Oblique angle"} ${De.toUpperCase()} ${Oe}°`:`${A("Slice ")}${Ce} / ${Ye}`,n.createElement("br",null),A("World: "),Nt?Nt.map(N=>N.toFixed(3)).join(", "):"—",n.createElement("br",null),k?"原始网格坐标；单位见数据来源声明。":"Source-grid coordinates; see the source unit declaration."),n.createElement("label",null,A("3D display mode"),n.createElement("select",{"aria-label":A("3D display mode"),value:se?"gt":We,disabled:se,onChange:N=>qn(N.target.value)},n.createElement("option",{value:"split"},A("Side by side · linked")),n.createElement("option",{value:"wire-overlay"},A("Solid + X-ray wireframe · overlap safe")),n.createElement("option",{value:"overlay"},A("Transparent overlay · blue / orange")),n.createElement("option",{value:"gt"},A("Ground Truth only")),n.createElement("option",{value:"prediction"},A("Prediction only")))),We==="wire-overlay"&&!se&&n.createElement("small",{className:"field-mode-help"},A("Blue: GT surface. Orange: Prediction wireframe, visible through GT. Geometry and scores are unchanged.")),n.createElement("label",null,A("Preview quality"),n.createElement("select",{value:qe,onChange:N=>bt(N.target.value)},n.createElement("option",{value:"balanced"},A("Balanced · stride 2")),n.createElement("option",{value:"fine"},A("Fine · stride 1")))),n.createElement("small",null,A("Display only. Metrics retain the comparison lattice.")),n.createElement("fieldset",{className:"field-layer-controls"},n.createElement("legend",null,A("Visible layers")),[["Gt","Ground Truth","gtOpacity"],...se?[]:[["Prediction","Prediction","predictionOpacity"]]].map(([N,H,L])=>n.createElement("div",{key:N,className:"field-layer-row"},n.createElement("label",{className:"check"},n.createElement("input",{type:"checkbox",checked:ze[`show${N}`],onChange:de=>Sa(ge=>({...ge,[`show${N}`]:de.target.checked}))}),n.createElement("span",{className:`field-layer-dot ${N==="Gt"?"gt":"prediction"}`}),A(H)),n.createElement("label",null,A(H),A(" opacity "),n.createElement("output",null,Math.round(ze[L]*100),"%"),n.createElement("input",{"aria-label":`${H} opacity`,type:"range",min:".1",max:"1",step:".05",value:ze[L],disabled:!ze[`show${N}`],onChange:de=>Sa(ge=>({...ge,[L]:Number(de.target.value)}))}))))),m==="velocity"&&n.createElement(n.Fragment,null,n.createElement("label",null,A("Velocity display"),n.createElement("select",{value:dn,onChange:N=>ut(N.target.value)},["magnitude","x","y","z"].map(N=>n.createElement("option",{key:N,value:N},N==="magnitude"?se?"Magnitude":A("Magnitude / EPE"):N.toUpperCase())))),n.createElement("label",null,A("Vector count limit"),n.createElement("input",{type:"number",min:"1",max:"20000",value:yn,onChange:N=>gt(Math.max(1,Math.min(2e4,Number(N.target.value)||1)))})),n.createElement("label",null,A("Arrow scale"),n.createElement("input",{type:"number",min:".001",step:".1",value:vn,onChange:N=>yt(Math.max(.001,Number(N.target.value)||1))})),d.availableGroups.includes("sdf")&&n.createElement("label",{className:"check"},n.createElement("input",{type:"checkbox",checked:gn,onChange:N=>ht(N.target.checked)}),A(" Show SDF context"))),n.createElement("label",{className:"check"},n.createElement("input",{type:"checkbox",checked:_n,onChange:N=>_t(N.target.checked)}),A(" Fixed source color range")),_n&&n.createElement("div",{className:"row"},en.map((N,H)=>n.createElement("input",{key:H,"aria-label":H?"Color maximum":"Color minimum",type:"number",value:N,step:".01",onChange:L=>Et(de=>de.map((ge,wn)=>wn===H?Number(L.target.value):ge))}))),S&&se?n.createElement("details",{className:"alignment-report"},n.createElement("summary",null,"Grid and provenance"),n.createElement("dl",null,n.createElement("div",null,n.createElement("dt",null,"Canonical lattice"),n.createElement("dd",null,me?.dimensions?.join(" × ")," voxels")),n.createElement("div",null,n.createElement("dt",null,"Voxel size"),n.createElement("dd",null,me?.voxelSize?.join(" × ")||"See source declaration")),n.createElement("div",null,n.createElement("dt",null,"Source"),n.createElement("dd",null,"Simulation Ground Truth. No prediction alignment or error comparison.")))):n.createElement(Yr,{lattice:f?.lattice,comparison:d}))),n.createElement("div",{className:"field-center"},r&&n.createElement(Je,{error:r,zh:k,resource:k?"序列评估资源":"Sequence evaluation resources",onRetry:o}),n.createElement(Je,{error:ln,zh:k,resource:(k?"当前帧三维资源：":"Current-frame geometry: ")+q,onRetry:()=>Gn(N=>N+1)}),(i||e)&&n.createElement("div",{className:"analysis-toolbar","aria-label":k?"分析导航":"Analysis navigation"},n.createElement("label",{hidden:z},k?"当前帧":"Current frame"," ",n.createElement("select",{"aria-label":"Analysis frame",value:q??Ke[0],onChange:N=>Aa(Number(N.target.value))},Ke.map(N=>n.createElement("option",{key:N,value:N},N,Se.includes(N)||ve.includes(N)?" · 3D":"")))),n.createElement("label",{hidden:T},k?"截面":"Section"," ",n.createElement("select",{"aria-label":"Analysis section",value:te,onChange:N=>{Ea(N.target.value),In(null)}},["xy","xz","yz"].map(N=>n.createElement("option",{key:N,value:N},N.toUpperCase())),n.createElement("option",{value:"oblique",disabled:!Ga(me)},k?"斜切":"Oblique"))),n.createElement("label",{hidden:T},te==="oblique"?k?"位置 %":"Position %":k?"切片索引":"Slice index"," ",n.createElement("input",{"aria-label":"Analysis section position",type:"number",min:"0",max:te==="oblique"?100:Ye,step:te==="oblique"?.1:1,disabled:!Hn||Ye===0,value:te==="oblique"?$e:Ce,onChange:N=>{const H=Number(N.target.value);Number.isFinite(H)&&(te==="oblique"?xa(Math.max(0,Math.min(100,H))):In(Math.max(0,Math.min(Ye,Math.round(H)))))}})),n.createElement("nav",{hidden:e,"aria-label":k?"分析区域":"Analysis sections"},n.createElement("a",{href:"#analysis-spatial"},k?"三维视图":"3D view"),n.createElement("a",{href:"#analysis-height"},k?"高度与选区":"Height & ROI"),n.createElement("a",{href:"#analysis-slices"},k?"场切片":"Field slices"),n.createElement("a",{href:"#analysis-summary"},k?"序列统计":"Sequence metrics")),e&&!T&&["3d","height","slices"].includes(a)&&n.createElement("button",{ref:we,className:"demo-settings-toggle","aria-controls":"analysis-settings","aria-expanded":le,onClick:()=>ye(N=>!N)},k?"视图设置":"View settings"),e&&!z&&n.createElement("span",{className:"demo-frame-scope"},_e.includes(q)?k?"当前帧支持三维":"3D available for this frame":k?"当前帧仅高度与序列数据":"Height and sequence data for this frame")),n.createElement("div",{className:"demo-geometry-panel",hidden:e&&a!=="3d"},mn&&n.createElement("p",{className:"demo-surface-scope"},k?"原生 SDF 三维表面 · 支持精细／均衡显示；高度与 ROI 使用同一帧。体积场与速度切片另有覆盖范围。":"Native SDF 3D surface · Fine / Balanced display; same-frame height and ROI. Volume and velocity slices have separate coverage."),n.createElement("div",{id:"analysis-spatial",className:"v2-section-heading"},!e&&n.createElement("span",null,"01"),n.createElement("div",null,n.createElement("h2",null,k?"3D 空间分析":"3D spatial analysis"),n.createElement("p",null,se?k?"选择当前帧，查看三维场与同一位置的切片。":"Choose a frame and inspect its 3D field and synchronized slice.":k?"选择当前帧，比较三维形状与同一位置的场切片。":"Choose a frame and compare geometry and field values at the same section.")),F&&i&&n.createElement("a",{className:"demo-time-jump",href:"#analysis-summary"},k?"查看时间分析 ↓":"View time analysis ↓")),i&&q!=null&&!_e.includes(q)?n.createElement("p",{role:"status",className:"reference-scope"},k?`帧 ${q} 无三维缓存。仍可查看此帧的高度图和指标；未替换为邻帧。`:`Frame ${q} has no geometry cache. Height maps and metrics retain this exact frame.`,e&&n.createElement("button",{onClick:()=>t("height")},k?"查看此帧高度与 ROI":"View this frame’s height & ROI")):Pe?n.createElement(ur,{onShading:Bn,inspection:!Ge&&Wn?.context===Te?Wn.value:null,onSceneError:V,controlRef:P,key:d.id,onCameraChange:j0,frameSplit:y,displayedFrame:xe,labels:d.labels,geometry:ne?.geometry,settings:re,bounds:q0,loadingFrame:Ge?q:null,error:null}):n.createElement("div",{className:"demo-geometry-start"},n.createElement("p",null,k?"高度分析已可使用。三维视图每帧约25 MB，点击后加载。":"Height analysis is ready. The 3D view loads about 25 MB for the selected frame."),n.createElement("button",{type:"button",onClick:()=>Ne(!0)},k?"打开当前帧三维":"Open current frame in 3D")),Pe&&(!i||_e.includes(q))&&n.createElement(pr,{controlRef:G,initialPlayback:M?.playback,active:E&&!v&&(!e||a==="3d"),frameSplit:y,frames:_e,displayedFrame:xe,requestedFrame:q,status:d.status||"ready",loading:Ge,onFrame:Ba,onScrubbing:N=>fn.current?.frames.setScrubbing(N)})),F&&Rt,!1,ni,e&&$&&(se&&["height","time"].includes(a)||a==="report")&&n.createElement("p",{className:"reference-scope"},a==="report"?k?"此样例没有96帧协议报告。可保存或恢复场比较方案；切片报告从“场切片”导出。":"This sample has no96-frame protocol report. Save or restore field views here; export slice reports from Field slices.":k?"此样例只有Ground Truth，无配对误差。请查看三维、场切片与探针。":"This sample contains Ground Truth only, without paired errors. Inspect3D, field slices and probes.",n.createElement("button",{onClick:()=>t("slices")},k?"查看场切片":"Open field slices")),n.createElement("details",{hidden:e&&a!==R,className:"analysis-source"},n.createElement("summary",null,k?"数据与显示说明":"Data and display details"),n.createElement("details",{className:"field-saved-note"},n.createElement("summary",null,se?A("Single dataset preview — no comparison scores"):`Evaluation: ${Object.values(d.settings?.sdf||{}).some(N=>N?.semantics==="water_interior")?"conditional GT-water distance support":d.settings?.sdfEvaluationRegion==="gt_water"?"GT water only":"full domain"} · Saved settings`),n.createElement("p",null,l?.metrics?.reconstructionEvaluation?k?"Best_1027 三帧本地参考结果。原生场指标、俯视高度指标和水下 0.1 m 速度指标使用各自明确的有效域；查看下方计算规则。":"Best_1027 three-frame local reference. Native-volume, top-down height and underwater 0.1 m metrics use separate documented supports; see the protocol below.":S?se?"Ground Truth fields are shown for inspection. This example contains no prediction and has no error metrics.":"Precomputed results retain the original comparison settings and validity masks. Conditional GT-water distance scores describe their valid support only. Occupancy and surface metrics use separate validity rules; unsupported metrics remain N/A. This example is not a model-ranking benchmark. 3D and slices show the saved aligned fields.":A("Results use the saved comparison settings. Create a new comparison after changing declarations. Occupancy and surface metrics have separate validity rules. Original scores are not certified for model ranking; use Results Library common-support evaluation. 3D and slices show the original aligned fields."))),S&&n.createElement(Zi,{context:Q0,busy:Ge})),n.createElement("details",{hidden:e&&a!==($?"height":R),open:!i,className:"legacy-height-analysis"},n.createElement("summary",null,i?k?"旧预览协议 · 三帧高度诊断":"Legacy preview protocol · three-frame height diagnosis":k?"高度诊断":"Height diagnosis"),l?.metrics?.reconstructionEvaluation&&n.createElement(Hr,{protocol:l.metrics.reconstructionEvaluation,frame:ne?.snapshot.data,lattice:me,frameNumber:xe,busy:Ge||xe!==q||Fe!==m,onFrame:Ba}),!se&&m==="sdf"&&n.createElement(qr,{frame:ne?.snapshot.data,lattice:me,comparison:d,plane:re.plane,sliceIndex:re.sliceIndex,rotationAxis:re.rotationAxis,angle:re.angle,sectionPercent:re.sectionPercent,frameNumber:xe,busy:Ge||xe!==q||Fe!==m})),n.createElement("section",{hidden:e&&a!=="slices",id:"analysis-slices",className:"field-slices"},!1,I?n.createElement(n.Fragment,null,n.createElement("button",{onClick:()=>O(null)},k?"返回原场切片":"Back to original field slices"),I.comparison?n.createElement(jo,{key:I.key,restored:I.restored}):n.createElement($o,{key:I.key,frameNumber:q,request:I.request,restored:I.restored})):n.createElement(n.Fragment,null,n.createElement("h2",null,A("Synchronized slices & probe")),n.createElement("p",{className:"v2-mode-caption"},Fe==="sdf"?se?k?"GT 单场切片，不含比较误差。":"GT field slices only; no comparison errors.":k?"此处为 SDF 场差值（B−A），不等于水面高度差。":"This is the SDF field difference (B−A), not water-surface height error.":k?"速度场切片与探针；瞬时矢量不是粒子轨迹。":"Velocity slices and probes; instantaneous vectors are not particle paths."),mn?n.createElement("div",{className:"reference-scope"},n.createElement("p",null,k?"本帧已提供真实三维表面、高度与 ROI；完整体积场切片仅发布了以下三帧。切换帧会明确改变当前帧号。":"This frame has its actual 3D surface, height and ROI. Full volume slices are published for the three frames below. Choosing one explicitly changes the frame."),ve.map(N=>n.createElement("button",{key:N,onClick:()=>Aa(N)},N))):ei?n.createElement(wr,{reportReady:je&&!v,captureScene:()=>{if(!je||v)throw Error(k?"等待当前帧与三维加载完成。":"Wait for the current frame and 3D.");return G.current?.pause(),P.current.capture()},reportLabels:{a:d.labels?.gt?.displayName||"Ground Truth",b:d.labels?.prediction?.displayName||"Prediction"},savedMetrics:Nn,region:se?null:Ca,onRegion:U0,inspectionContext:Te,onInspection:_a,busy:Ge||xe!==q||ne?.settings!==nn,errorScale:Yn,onErrorScale:An,frameNumber:xe,frameSplit:y,exportStem:W,viewMetadata:Ia,rotationAxis:re.rotationAxis,angle:re.angle,sectionPercent:re.sectionPercent,frame:ne.snapshot.data,group:Fe,plane:re.plane,sliceIndex:re.sliceIndex,crosshair:wa,onCrosshair:J0,component:re.component,fixedRange:kt.sourceRange,lattice:me,single:se,label:"Ground Truth"}):n.createElement("p",{role:"status"},Ge?`${A("Loading")} ${q}…`:A("No field samples available for this view.")))),!F&&Rt,!se&&n.createElement("details",{open:!e,hidden:e&&a!==R,className:"demo-legacy-sequence"},n.createElement("summary",null,k?"旧预览协议 · 三帧序列诊断":"Legacy preview protocol · three-frame sequence diagnostics"),n.createElement("section",{className:"v2-field-temporal","aria-label":k?"时间分析":"Temporal analysis"},n.createElement("div",{className:"v2-section-heading"},n.createElement("span",null,"02"),n.createElement("div",null,n.createElement("h2",null,k?"时间分析":"Temporal analysis"),n.createElement("p",null,k?"保留逐帧绝对误差与序列统计。只能跳转到已有三维数据的帧。":"Absolute errors and sequence statistics. Frame navigation is available only where geometry exists."))),n.createElement(Gr,{frameSplit:y,onReviewSetup:Y,comparisonId:W,frames:_e,expectedFrames:u,metrics:kn,groups:d.availableGroups,group:Fe,status:d.status,currentFrame:xe,onFrame:Ba,sdfUnit:Fn(ne?.snapshot.data,"sdf").unit||d.settings?.sdf?.gt?.unit||"unit undeclared",velocityUnit:Fn(ne?.snapshot.data,"velocity").unit||d.settings?.velocity?.gt?.unit||"unit undeclared"}))),n.createElement("small",{hidden:e,className:"field-memory"},L0,l?.metrics?.reconstructionEvaluation?k?" · 本地三帧数据 · 按需加载":" · Local three-frame data · Loaded on demand":S?" · Published samples · Geometry prepared in your browser":A(" · Geometry prepared off the UI thread · No cloud upload"))),n.createElement("aside",{className:"field-results",hidden:e&&(!$||!["time","report"].includes(a))},i&&n.createElement("p",{className:"reference-scope"},k?"旧预览协议 · 三帧空间诊断":"Legacy preview protocol · three-frame spatial diagnostics"),n.createElement("h2",null,A("Current frame "),n.createElement("span",null,xe??"—")),se?n.createElement("p",null,A("Single dataset preview — no comparison scores")):n.createElement(Sr,{frame:xe,metrics:Nn,group:Fe,unit:Rn?.unit||""}),!se&&n.createElement(n.Fragment,null,n.createElement(Wr,{group:Fe}),n.createElement("div",{className:"field-exports"},n.createElement("h2",null,A("Export results")),n.createElement("button",{disabled:!kn,onClick:()=>ta(`${W}_metrics.json`,JSON.stringify({...kn,current_view:Ia},null,2))},A("Export JSON")),n.createElement("button",{disabled:!Nn,onClick:()=>{const N=["metric,value",...Object.entries(Ia).map(([H,L])=>[H,typeof L=="object"?JSON.stringify(L):String(L??"")].map(de=>'"'+String(de).replaceAll('"','""')+'"').join(",")),`sdf_error_region,${Nn?.sdf?.evaluationRegion||d.settings?.sdfEvaluationRegion||"full_domain"}`];for(const[H,L]of Object.entries(Nn?.[Fe]||{}))(typeof L=="number"||L===null)&&N.push(`${H},${L??""}`);ta(`${W}_${xe}_${Fe}.csv`,N.join(`
`),"text/csv")}},A("Export CSV")),n.createElement("small",null,S?"Download saved values: JSON includes all metric records; CSV describes the displayed frame.":A("JSON: sequence · CSV: displayed frame. Saved-result ZIP includes source names and complete provenance.")))),!se&&n.createElement("p",null,A("All metric averages and per-frame values are below the synchronized slices. Use the SDF / Velocity tabs to switch field groups."))))}const Jo={kind:"field",parse:Kr,read:Qr,write:ec,validate:sn,error:nc,title:e=>e?"场比较方案":"Saved field views",intro:e=>e?"保存样例、SDF/速度分量、帧、切面、探针、视角、色标、透明度、箭头与播放设置。恢复时重新读取数据并暂停播放；已有评分保持不变。":"Save sample, SDF/velocity component, frame, section, probe, camera, color scales, opacity, arrows and playback settings. Restore reloads data and pauses playback; saved scores are unchanged.",describe:(e,a)=>`${e.settings.caseId} · ${e.settings.group.toUpperCase()}${e.settings.group==="velocity"?" / "+e.settings.component:""} · ${a?"帧":"Frame"} ${e.settings.frame} · ${e.settings.plane==="oblique"?(e.settings.rotationAxis||"y").toUpperCase()+" "+e.settings.angle+"° / "+e.settings.sectionPercent+"%":e.settings.plane.toUpperCase()+" / "+e.settings.sliceIndex}`,storageNote:e=>e?"场方案与水面方案分开保存。仅保存在当前浏览器和网站地址；清除网站数据会丢失，请导出备份。导入文件仅在本机读取，不含场数据或计算结果；仅支持场比较方案 JSON。":"Field views are stored separately from wave views in this browser and site address. Clearing site data removes them; export a backup. Imports are read locally and contain no field arrays or computed results. Only field-view JSON is supported."};function Ho(e){return n.createElement(Xi,{adapter:Jo,...e})}function Va(e){if(new TextEncoder().encode(e).length>2*1024*1024)throw Error("Analysis file too large");let a;try{a=JSON.parse(e)}catch{throw Error("Invalid analysis JSON")}if(a?.schema==="oceanscope.paired-case.v1")return{kind:"pairedCase",value:a};if(a?.schema===ot)return{kind:"report",value:a};if(a?.schema===T0)return{kind:"velocity",value:a};if(a?.schema===G0)return{kind:"velocityComparison",value:a};if(a?.schema===oa)return{kind:"field",value:a};if(a&&!a.schema&&a.schemaVersion===1&&typeof a.runId=="string"&&a.protocol&&a.datasetA&&a.datasetB&&"subset"in a&&"metric"in a&&"frame"in a)return{kind:"selection",value:a};throw Error("Unsupported analysis file")}const Ko={pairedCase:["一页案例：核验水面和速度资源，恢复热点、双剖面、切片与配对流线。","One-page case: verify both resources and restore the hotspot, profiles, slice and streamlines."],velocityComparison:["三帧速度对照：核验三个速度资源，恢复固定选区、探针、箭头和第三图。","Three-frame velocity comparison: verify all three resources and restore the fixed ROI, probe, arrows, and comparison map."],velocity:["速度诊断报告：重新核验对应帧的速度资源，恢复切片、ROI、探针、箭头和方向阈值。","Velocity report: verify the selected frame’s velocity resource and restore the slice, ROI, probe, arrows, and direction threshold."],report:["完整分析报告：恢复帧、选区、探针、截面和可用相机；重新核验资源。","Analysis report: restore frame, ROI, probe, section and available camera; verify resources again."],field:["场比较方案：恢复数据组合、三维帧、显示设置与相机；不含水面高度选区。","Field view: restore dataset, geometry frame, display settings and camera; no surface-height ROI."],selection:["序列选择：只恢复帧号、帧集合与曲线类型；不恢复选区或相机。","Sequence selection: restore only frame, frame set and curve; no ROI or camera."]};function Qo({onRestore:e,zh:a,controlRef:t}){const[i,r]=B.useState(""),[c,s]=B.useState(""),[o,d]=B.useState(null),[f,m]=B.useState(""),[h,x]=B.useState(!1),u=B.useRef(null);function b(){u.current&&(u.current.abort(),u.current=null,x(!1),m(a?"恢复已取消，保留后续操作。":"Restore cancelled; newer actions retained."))}B.useImperativeHandle(t,()=>({cancel:b})),B.useEffect(()=>()=>u.current?.abort(),[]);let l;try{i.trim()&&(l=Va(i))}catch{}async function g(_){if(b(),!_)return;const p=new AbortController;u.current=p,d(null),r(""),s(_.name),m("");try{if(_.size>2*1024*1024)throw Error("Analysis file too large");const v=await _.text();p.signal.throwIfAborted(),Va(v),r(v)}catch(v){p.signal.aborted||d(v)}finally{u.current===p&&(u.current=null)}}async function w(){b();const _=new AbortController;u.current=_,x(!0),d(null),m(a?"正在识别文件并核验资源…":"Recognizing the file and verifying resources…");try{const p=Va(i);await e(i,p,_.signal),_.signal.throwIfAborted(),m(a?"恢复完成。请核对当前帧和范围；导出前重新生成报告。":"Restored. Check frame and scope; create a fresh report before exporting.")}catch(p){_.signal.aborted||(d(p),m(""))}finally{u.current===_&&(u.current=null,x(!1))}}return n.createElement("details",{id:"restore-analysis",className:"restore-analysis"},n.createElement("summary",null,a?"恢复分析 · 打开 JSON":"Restore analysis · Open JSON"),n.createElement("p",null,a?"选择文件或粘贴内容，工具会识别恢复范围。文件在本机读取，仍需匹配的数据资源。":"Choose a file or paste its contents. The tool identifies what it restores. Files stay local; matching data resources are required."),n.createElement("label",null,a?"选择分析文件":"Choose analysis file"," ",n.createElement("input",{type:"file",accept:".json,application/json","aria-label":"Analysis JSON file",onChange:_=>{g(_.target.files?.[0]),_.target.value=""}})),c&&n.createElement("p",null,c),n.createElement("label",null,a?"或粘贴 JSON":"Or paste JSON",n.createElement("textarea",{"aria-label":"Analysis JSON text",rows:"4",value:i,onChange:_=>{b(),r(_.target.value),s(""),d(null),m("")}})),l&&n.createElement("p",{className:"import-kind"},Ko[l.kind][a?0:1]),n.createElement("div",{className:"reference-controls"},n.createElement("button",{disabled:!i.trim()||h,onClick:w},a?"恢复这份分析":"Restore this analysis"),h&&n.createElement("button",{onClick:b},a?"取消恢复":"Cancel restore")),n.createElement(Je,{error:o,zh:a}),n.createElement("p",{role:"status","aria-live":"polite"},f))}const e1=`{
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
`,n1=`{
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
`,a1=`# OceanScope public source summary

This release presents supplied scene and model descriptions as claims, not independently audited training history. Original machine paths and source prose are omitted. Numerical results, masks and protocol identities are retained.

- Model: "Model A"
- Scene: "v2 Gentle clean full-SDF velocity"
- Camera configuration: ["camera29","camera32","camera35","camera02","camera05","camera08","camera11","camera14","camera17","camera20","camera23","camera26"]
- Source frame rate: "24 fps; 1001–1096"
- Train / validation / test: "v2 all96 test; never used for training/checkpoint choice"
- OceanBox training scenes: ["variant_00000","variant_00001","variant_00002","variant_00003","variant_00004","variant_00008"]
- Preprocessing: "Temporal smoothing"
- Unit evidence: "source convention; not independently calibrated"
`,t1=`# OceanScope public source summary

This release presents supplied scene and model descriptions as claims, not independently audited training history. Original machine paths and source prose are omitted. Numerical results, masks and protocol identities are retained.

- Model: "Model A"
- Scene: "v2 Gentle clean full-SDF velocity"
- Camera configuration: ["camera29","camera32","camera35","camera02","camera05","camera08","camera11","camera14","camera17","camera20","camera23","camera26"]
- Source frame rate: "24 fps; 1001–1096"
- Train / validation / test: "v2 all96 test; never used for training/checkpoint choice"
- OceanBox training scenes: ["variant_00000","variant_00001","variant_00002","variant_00003","variant_00004","variant_00008"]
- Preprocessing: "Temporal smoothing"
- Unit evidence: "source convention; not independently calibrated"
`;function i1(e,a){const t=[];(e?.gtRole!=="gt"||a?.gtRole!=="gt"||e?.predictionRole!=="prediction"||a?.predictionRole!=="prediction")&&t.push("Explicit GT/prediction roles required");for(const r of["scene","gtManifest","protocolSha256","frameIds","domain","unitStatus"])(e?.[r]==null||a?.[r]==null||Ae(e[r])!==Ae(a[r]))&&t.push(`Different or unknown ${r}`);const i=["camera","model","preprocessing"].filter(r=>Ae(e?.[r])!==Ae(a?.[r]));return{comparable:t.length===0,blockedReasons:t,differences:i}}async function r1(e,a,t){const i=JSON.parse(e);if(i.schemaVersion!==1||i.runId!==a.runId||i.protocolSha256!==a.protocol.sourceScriptSha256||i.manifestA!==a.datasetA.manifestSha256||i.manifestB!==a.datasetB.manifestSha256)throw Error("Declaration identity mismatch");if(!Array.isArray(i.entries)||new Set(i.entries.map(c=>c.id)).size!==i.entries.length)throw Error("Invalid declarations");const r={gtIdentity:i.manifestA,predictionIdentity:i.manifestB};for(const c of i.entries){if(!["claimed","verified","unknown"].includes(c.status)||!c.id||!c.label)throw Error("Invalid declaration status");if(c.status==="unknown"&&c.value!==null)throw Error("Unknown declaration must have no asserted value");if(c.status==="verified"&&(!Object.hasOwn(r,c.id)||c.value!==r[c.id]))throw Error("Unsupported independent verification claim");if(c.status==="claimed"&&!c.source)throw Error("Claim needs its source");if(c.source&&(typeof t[c.source.file]!="string"||await la(t[c.source.file])!==c.source.sha256))throw Error("Declaration source checksum mismatch")}if(i.conditions?.gtManifest!==i.manifestA||i.conditions.protocolSha256!==i.protocolSha256||Ae(i.conditions.frameIds)!==Ae(a.frameIds)||!i1(i.conditions,i.conditions).comparable)throw Error("Declaration conditions mismatch");return{...i,sha256:await la(e)}}async function c1(e){if(e.id!=="best-1027")return null;const a=await rc(e1,zn,e);return{...a,verifiedPayloadSha256:zn.sha256,declarations:await r1(n1,a,{"METRICS.md":a1,"SPLIT.md":t1})}}function s1({analysisSection:e,onAnalysisSection:a,item:t,active:i,viewApiRef:r,initialView:c,onViewReady:s,onViewRestored:o,restoring:d,onCancelImport:f}){const{language:m}=ce(),h=m==="zh",[x,u]=B.useState(()=>c?.settings.group||(t.comparison.settings?.previewOnly&&t.comparison.availableGroups.includes("velocity")?"velocity":"sdf")),[b,l]=B.useState(null),[g,w]=B.useState(""),_=B.useRef(_0()),[p,v]=B.useState(0);B.useEffect(()=>(l(null),w(""),_.current.run(()=>c1(t)).then(A=>{A&&l(A)}).catch(A=>w(A.message)),()=>_.current.cancel()),[t,p]);const y=!!t.comparison.settings?.previewOnly,S=!!t.metrics?.reconstructionEvaluation,E=n.createElement("div",{className:"public-field-provenance"},n.createElement("p",null,t.description),n.createElement("dl",null,n.createElement("div",null,n.createElement("dt",null,"Ground Truth"),n.createElement("dd",null,t.comparison.labels?.gt?.displayName)),n.createElement("div",null,n.createElement("dt",null,"Prediction"),n.createElement("dd",null,y?h?"未提供；不计算误差":"Not included; no error scores":t.comparison.labels?.prediction?.displayName)),n.createElement("div",null,n.createElement("dt",null,h?"三维表面 / 体积场":"3D surface / volume frames"),n.createElement("dd",null,Xn(t).length?`1001–1096 / ${t.processing.frames.map(A=>A.frame).join(", ")}`:t.processing.frames.map(A=>A.frame).join(", "))),n.createElement("div",null,n.createElement("dt",null,h?"数据语义":"Data semantics"),n.createElement("dd",null,S?h?"原分辨率有效 SDF/速度对比；三帧高度与水下速度评估，采用明确的本地计算规则。":"Native valid SDF/velocity comparison; three-frame height and underwater evaluation under an explicit local protocol.":y?h?"单位未声明":"Units undeclared":h?"条件性 GT 水体距离误差；外部填充值不参与距离评分":"Conditional GT-water distance scores; filled exterior excluded from distance scoring"))));return n.createElement(Uo,{focusedLayout:!0,workspace:e,onWorkspace:a,unifiedRestore:!0,onCancelImport:f,onRetryEvaluation:()=>v(A=>A+1),evaluation:b,evaluationError:g,comparison:t.comparison,processing:t.processing,activeGroup:x,onActiveGroup:u,setup:E,expectedFrames:Object.keys(t.metrics?.frames||{}).map(Number),metricsOverride:t.metrics||null,sourceCase:t,viewApiRef:r,initialView:c,onViewReady:s,onViewRestored:o,restoring:d,readOnly:!0,active:i})}function h1({request:e,active:a=!0,analysisSection:t="3d",onAnalysisSection:i}){const{tr:r,language:c}=ce(),s=c==="zh",o=B.useRef(null),d=B.useRef(0),f=B.useRef(null),m=B.useRef(null);B.useEffect(()=>()=>m.current?.reject(new DOMException("Cancelled","AbortError")),[]),B.useEffect(()=>{(!a||t!=="report")&&f.current?.cancel()},[a,t]);const[h,x]=B.useState(0),[u,b]=B.useState(null),[l,g]=B.useState(!1),[w,_]=B.useState(!1),[p,v]=B.useState(null),[y,S]=B.useState(null),[E,A]=B.useState(""),[C,k]=B.useState(""),[F,R]=B.useState(""),[I,O]=B.useState(0),[D,T]=B.useState(!1);B.useEffect(()=>{let V=!0;return di().then(Z=>{if(!V)return;nr(Z.cases),S(Z);const $=Wa("public-case")?.id,J=Z.cases.some(Q=>Q.id===$)?$:Z.defaultCaseId||Z.cases[0].id;A(J),k(J),R("")}).catch(Z=>{V&&R(Z.message)}),()=>{V=!1}},[I]),B.useEffect(()=>{e?.id&&y?.cases.some(V=>V.id===e.id)&&z(e.id)},[e,y]),B.useEffect(()=>{E&&l0("public-case",{id:E})},[E]);function z(V){f.current?.cancel(),x(++d.current),o.current?.pause(),b(null),_(!1),g(!1),v(null),A(V),k(V),T(!1)}function M(V){try{const Z=sn(V,y.cases);o.current?.pause();const $=++d.current;x($),g(!1),_(!0),v(null),T(!1),A(Z.settings.caseId),k(Z.settings.caseId),b({doc:Z,token:$})}catch(Z){v({error:Z})}}async function P(V,Z,$){if($.throwIfAborted(),Z.kind!=="field"){if(!o.current?.restoreAnalysis)throw Error("Analysis is not ready");return o.current.restoreAnalysis(V,Z.kind,$)}const J=sn(Z.value,y.cases);return new Promise((Q,be)=>{const le=()=>{m.current?.signal===$&&(m.current=null,++d.current,b(null),_(!1),be(new DOMException("Cancelled","AbortError")))};$.addEventListener("abort",le,{once:!0});const ye=we=>{$.removeEventListener("abort",le),we?be(we):Q()};m.current={signal:$,finish:ye,reject:be},M(J)})}function G(V,Z){if(V!==d.current)return;const $=m.current;m.current=null,$?.finish(Z),_(!1),v(Z?{error:Z}:{cn:"场方案已恢复：样例、帧、切面、探针、视角与显示设置已同步，播放已暂停。",en:"Field view restored: sample, frame, section, probe, camera and display settings are synchronized. Playback paused."})}const U=y?.cases.find(V=>V.id===E),j=y?.cases.find(V=>V.id===C);return U?.comparison.settings?.previewOnly,n.createElement("section",{className:"public-field-demo","aria-label":"Published field examples"},n.createElement("header",{className:"demo-case-header"},n.createElement("div",null,n.createElement("h1",null,U?.name||(s?"场分析":"Field analysis")),n.createElement("span",null,U&&(s?`${Xn(U).length||U.processing.frames.length}帧三维 · ${U.processing.frames.length}帧体积场`:`${Xn(U).length||U.processing.frames.length} 3D frames · ${U.processing.frames.length} volume frames`))),n.createElement("button",{disabled:w,"aria-expanded":D,onClick:()=>{k(E),T(V=>!V)}},s?"数据与示例":"Datasets & examples")),F?n.createElement(Je,{error:F,zh:s,resource:s?"示例目录":"Sample catalogue",onRetry:()=>O(V=>V+1)}):y?n.createElement(n.Fragment,null,D&&n.createElement("section",{className:"sample-setup","aria-label":"Sample dataset selection"},n.createElement("div",{className:"sample-setup-heading"},n.createElement("h2",null,s?"数据与对比设置":"Datasets & comparison setup"),n.createElement("p",null,s?"选择已发布的数据组合，打开已有分析结果。":"Choose a published dataset pair to open its existing analysis.")),n.createElement("label",null,s?"示例组合":"Published example",n.createElement("select",{"aria-label":"Published field example",value:C,onChange:V=>k(V.target.value)},y.cases.map(V=>n.createElement("option",{key:V.id,value:V.id},V.name)))),j&&n.createElement("div",{className:"sample-dataset-grid"},n.createElement("div",{className:"sample-source"},n.createElement("span",{className:"source-role"},"GROUND TRUTH"),n.createElement("h3",null,j.comparison.labels?.gt?.displayName),n.createElement("p",null,j.comparison.availableGroups.join(" + ").toUpperCase()),n.createElement("span",null,s?"可用":"Ready")),n.createElement("div",{className:"sample-source"},n.createElement("span",{className:"source-role prediction"},"PREDICTION"),n.createElement("h3",null,j.comparison.settings?.previewOnly?s?"无预测数据":"No prediction included":j.comparison.labels?.prediction?.displayName),n.createElement("p",null,j.comparison.settings?.previewOnly?s?"独立查看，不显示误差指标":"Standalone inspection without error metrics":s?"已对齐的场数据 · 已记录的计算规则":"Aligned fields · Recorded evaluation protocol"))),n.createElement("div",{className:"sample-actions"},n.createElement("span",null,s?"本工具读取已有样例与分析资源；原始 VDB / ABC 处理需使用配套离线流程。":"This tool reads existing samples and analysis resources; raw VDB / ABC processing uses the separate offline workflow."),n.createElement("button",{onClick:()=>T(!1)},s?"取消":"Cancel"),n.createElement("button",{className:"primary",onClick:()=>{z(C)}},j?.comparison.settings?.previewOnly?s?"查看 Ground Truth":"View Ground Truth":s?"打开已有对比":"Open saved comparison"))),U&&n.createElement(n.Fragment,null,n.createElement("div",{className:"demo-session-tools",hidden:t!=="report"},n.createElement(Qo,{controlRef:f,zh:s,onRestore:P}),n.createElement(Ho,{unifiedRestore:!0,catalog:y.cases,ready:l,restoring:w,onCapture:()=>o.current.captureView(),onRestore:M,restoreNotice:p})),n.createElement(s1,{analysisSection:t,onAnalysisSection:i,onCancelImport:()=>f.current?.cancel(),key:`${U.id}:${h}`,item:U,active:a,viewApiRef:o,initialView:u?.doc,onViewReady:g,restoring:w,onViewRestored:V=>G(u?.token,V)}))):n.createElement("p",{role:"status"},s?"正在加载示例…":"Loading samples…"))}export{h1 as default};
