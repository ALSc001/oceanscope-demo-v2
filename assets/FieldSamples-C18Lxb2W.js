import{g as Jt,p as _a,v as Ht,a as Kt,o as va,b as Qt,s as e0,S as Cn,c as Ln,d as ua,e as gt,f as n0,h as a0,i as t0}from"./surfaceResources-udFyEaQA.js";import{u as be,R as n,r as y,s as c0,a as i0,b as pa,w as yt,p as cn}from"./workbench-pjWWU-fS.js";import{d as ca,l as r0}from"./publicData-Dh1-tQFp.js";import{W as s0,m as d0,j as o0,C as ia,k as l0,O as f0,a4 as b0,l as m0,a5 as u0,V as Sn,r as p0,y as h0,h as Ya,t as g0,v as La,s as qa,d as Ua,q as y0,i as _0,B as ja,o as v0,D as E0,p as w0,x as B0,a6 as Ja,a7 as Ha,a8 as x0,a9 as S0,a0 as A0,aa as k0,ab as C0,ac as I0,ad as N0,ae as R0,af as _t,ag as M0,ah as O0,a2 as ra,_ as T0,Y as $0,I as F0}from"./SectionRotation-yP1kVbxE.js";import{b as P0,e as Ka,d as D0,c as Qa}from"./comparisonExport-rG_qP9SP.js";import{e as Z0}from"./verticalSection-DptfHDZh.js";const X0="539734f929b2d3d4a53adb2563bc9598e1cc8efcd33439f8a39db052bafb28bd",W0="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",V0="gentle",z0="best1027",G0="e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",Y0="323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",et={sha256:X0,protocolSha256:W0,datasetA:V0,datasetB:z0,manifestA:G0,manifestB:Y0};function L0({fetchFrame:e,decode:t,byteBudget:a=268435456,maxFrames:c=5}){const i=new Map,r=new Map;let d=null,s=0,f=!1,l=!1;const h=(o,b)=>`${o}:${b}`,m=()=>[...i.values()].reduce((o,b)=>o+b.byteLength,0);function w(){for(const o of i.keys()){if(i.size<=c&&m()<=a)break;o!==d&&i.delete(o)}}function g(o,b){const v=h(o,b);if(i.has(v)){const p=i.get(v);return i.delete(v),i.set(v,p),Promise.resolve(p)}if(r.has(v))return r.get(v).promise;const S=new AbortController,B=e(o,b,{signal:S.signal}).then(p=>{if(f||S.signal.aborted)return null;const E=p&&Object.hasOwn(p,"verifiedResource"),_=E?p.buffer:p,x=E?p.verifiedResource:null,u=t(_),I=new Set(u.fields.map(O=>O.values.buffer)),k={comparisonId:o,frameNumber:b,data:u,verifiedResource:x,byteLength:[...I].reduce((O,M)=>O+M.byteLength,0)};return i.set(v,k),w(),k}).finally(()=>{r.get(v)?.controller===S&&r.delete(v)});return r.set(v,{promise:B,controller:S}),B}return{async select(o,b){if(f)return null;const v=++s,S=h(o,b);for(const[p,E]of r)p!==S&&(E.controller.abort(),r.delete(p));const B=d;d=S;try{const p=await g(o,b);return f||v!==s?null:(w(),p)}catch(p){if(f||v!==s||p.name==="AbortError")return null;throw d=B,p}},async prefetch(o,b){f||l||await Promise.all(b.slice(0,2).map(v=>g(o,v).catch(()=>null)))},setScrubbing(o){if(l=o,o)for(const[b,v]of r)b!==d&&(v.controller.abort(),r.delete(b))},stats(){return{bytes:m(),cachedFrames:i.size,oversize:m()>a}},dispose(){f=!0,s++;for(const o of r.values())o.controller.abort();r.clear(),i.clear()}}}function q0({workerFactory:e=()=>new Worker(new URL(""+new URL("geometryWorker-BGm7dbIH.js",import.meta.url).href,import.meta.url),{type:"module"}),byteBudget:t=134217728}={}){const a=new Map;let c=null,i=null,r=0,d=!1;const s=()=>[...a.values()].reduce((l,h)=>l+h.byteLength,0);function f(){i&&(i.resolve(null),i=null,c?.terminate(),c=null)}return{request(l,h,m){if(d)return Promise.resolve(null);f();const w=Jt(l,m);if(a.has(w)){const g=a.get(w);return a.delete(w),a.set(w,g),Promise.resolve(g)}return new Promise((g,o)=>{const b=++r;i={resolve:g,reject:o,id:b};try{c??=e(),c.onmessage=({data:E})=>{if(!i||E.requestId!==i.id||E.version!==1)return;if(i=null,E.type==="error"){o(Error(E.error));return}const _=E.result;a.set(w,_);for(const x of a.keys()){if(s()<=t)break;x!==w&&a.delete(x)}g(_)},c.onerror=E=>{i?.id===b&&(i=null,c?.terminate(),c=null,o(Error(E.message||"Geometry worker failed")))};const v=new Map,S=[],B=E=>{if(!E)return null;if(v.has(E))return v.get(E);const _=E.values.slice(),x={...E,values:_,mask:null};return v.set(E,x),S.push(_.buffer),x.mask=B(E.mask),x},p=Object.fromEntries(Object.entries(l.data.groups).filter(([E])=>E===m.group||E==="sdf"&&m.showContext).map(([E,_])=>[E,Object.fromEntries(Object.entries(_).filter(([x])=>(x==="ground_truth"||x==="prediction"||/^(ground_truth|prediction)\.[xyz]$/.test(x))&&(!m.previewOnly||!x.startsWith("prediction"))).map(([x,u])=>[x,B(u)]))]));c.postMessage({version:1,requestId:b,comparisonId:l.comparisonId,type:"build",payload:{snapshot:{...l,data:{groups:p}},lattice:h,settings:m}},S)}catch(v){i=null,o(v)}})},stats(){return{bytes:s(),cachedFrames:a.size,oversize:s()>t}},dispose(){d=!0,f(),c?.terminate(),c=null,a.clear()}}}const U0="OCFLD001",sa=24,j0=112;function Fn(e,t,a){const c=e.subarray(t,t+a),i=c.indexOf(0);return new TextDecoder().decode(i>=0?c.subarray(0,i):c)}function nt(e,t){if(e>BigInt(Number.MAX_SAFE_INTEGER))throw new Error(`${t} exceeds safe integer range`);return Number(e)}function J0(e){if(!(e instanceof ArrayBuffer)||e.byteLength<sa)throw new Error("Field frame is truncated");const t=new Uint8Array(e);if(Fn(t,0,8)!==U0)throw new Error("Invalid field frame magic");const a=new DataView(e),c=a.getUint32(8,!0);if(c!==1)throw new Error(`Unsupported field frame schema ${c}`);const i=a.getUint32(12,!0),r=a.getUint32(16,!0);if(r!==j0)throw new Error(`Unsupported directory entry size ${r}`);const d=sa+i*r;if(d>e.byteLength)throw new Error("Field frame directory is truncated");const s=[];for(let l=0;l<i;l+=1){const h=sa+l*r,m=Fn(t,h,16),w=Fn(t,h+16,32),g=Fn(t,h+48,16),o=a.getUint32(h+64,!0),b=[a.getUint32(h+68,!0),a.getUint32(h+72,!0),a.getUint32(h+76,!0)],v=nt(a.getBigUint64(h+80,!0),"field offset"),S=nt(a.getBigUint64(h+88,!0),"field length"),B=a.getInt32(h+96,!0);if(!m||!w||b.some(x=>x===0))throw new Error("Invalid field directory entry");if(v<d||v+S>e.byteLength)throw new Error(`Field ${m}:${w} data is truncated`);const p=b[0]*b[1]*b[2];let E,_;if(o===1){if(v%4!==0||S!==p*4)throw new Error(`Field ${m}:${w} has invalid float32 storage`);E=new Float32Array(e,v,p),_="float32"}else if(o===2){if(S!==p)throw new Error(`Field ${m}:${w} has invalid uint8 storage`);E=new Uint8Array(e,v,p),_="uint8"}else throw new Error(`Field ${m}:${w} has unsupported dtype ${o}`);s.push({id:`${m}:${w}`,group:m,name:w,unit:g,dtype:_,shape:b,values:E,maskIndex:B,mask:null})}for(const l of s){if(l.maskIndex<-1||l.maskIndex>=s.length)throw new Error(`Field ${l.id} has an invalid mask index`);l.maskIndex>=0&&(l.mask=s[l.maskIndex])}const f={};for(const l of s){if(f[l.group]??={},f[l.group][l.name])throw new Error(`Duplicate field ${l.id}`);f[l.group][l.name]=l}return{schema:c,fields:s,groups:f}}function ha(e,t,a,c){const i=e.fields.find(g=>g.id===t);if(!i)throw new Error(`Unknown field ${t}`);const[r,d,s]=i.shape;let f,l,h;if(a==="xy")[f,l,h]=[r,d,s];else if(a==="xz")[f,l,h]=[r,s,d];else if(a==="yz")[f,l,h]=[d,s,r];else throw new Error(`Unknown slice plane ${a}`);if(!Number.isInteger(c)||c<0||c>=h)throw new Error(`Slice index ${c} is outside ${a}`);const m=i.dtype==="float32"?Float32Array:Uint8Array,w=new m(f*l);for(let g=0;g<l;g+=1)for(let o=0;o<f;o+=1){let b,v,S;a==="xy"?[b,v,S]=[o,g,c]:a==="xz"?[b,v,S]=[o,c,g]:[b,v,S]=[c,o,g],w[o+f*g]=i.values[b+r*(v+d*S)]}return{fieldId:t,plane:a,sliceIndex:c,width:f,height:l,values:w}}const Wn=new Map;function H0(e){Wn.clear();for(const t of e)Wn.set(t.comparison.id,t)}async function K0(e){const t=new Uint8Array(e);if(t[0]===31&&t[1]===139){if(typeof DecompressionStream>"u")throw new Error("This browser cannot decode the field samples. Please use a recent Chrome, Edge, Firefox or Safari.");return new Response(new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}return e}async function Q0(e,t,a={}){const c=Wn.get(e),i=c?.frameUrls?.[String(t)],r=_a(c,t);if(!i)throw new Error(`Frame ${t} is not included in this public preview.`);if(!/^\/?data\/[a-zA-Z0-9_./-]+$/.test(i)||i.split("/").includes(".."))throw new Error("Invalid published field URL.");const d=await fetch(i.replace(/^\//,""),{signal:a.signal});if(!d.ok)throw new Error(`Field sample unavailable (${d.status}).`);const s=await d.arrayBuffer();if(a.signal?.aborted)throw new DOMException("Aborted","AbortError");const f=r?await Ht(s,r):await K0(s);if(a.signal?.aborted)throw new DOMException("Aborted","AbortError");return a.withIdentity?{buffer:f,verifiedResource:r}:f}async function ec(e){const t=Wn.get(e);if(!t)throw new Error("Unknown public comparison.");return t.metrics??null}const nc={groundTruth:"ground_truth",prediction:"prediction",error:"error"};function ac(e,t,a){if(!e?.origin||!e?.axisSteps)throw new Error("Canonical lattice transform is unavailable");const c=t==="yz"?0:t==="xz"?1:t==="xy"?2:-1;if(c<0)throw new Error(`Unknown slice plane ${t}`);return e.origin.map((i,r)=>i+e.axisSteps[c][r]*a)}function tc(e){let t=0;for(const a of e)Number.isFinite(a)&&(t=Math.max(t,Math.abs(a)));return[-t,t]}function cc(e){let t=0;for(const a of e)Number.isFinite(a)&&(t=Math.max(t,Math.abs(a)));return[0,t]}function da(e,t){const a=nc[t];if(!e)return null;if(e[a])return{ids:[e[a].id],maskId:e[a].mask?.id||null};const c=["x","y","z"].map(i=>e[`${a}.${i}`]).filter(Boolean);return c.length!==3?null:{ids:c.map(i=>i.id),maskId:c[0].mask?.id||null}}function kn(e,t){const a=e?.groups?.[t],c=da(a,"groundTruth"),i=da(a,"prediction"),r=da(a,"error"),d=c?.ids?.[0]||i?.ids?.[0]||r?.ids?.[0],s=d&&(e.fields?.find(f=>f.id===d)?.unit||Object.values(a||{}).find(f=>f?.id===d)?.unit)||"";return{kind:t,groundTruth:c,prediction:i,error:r,unit:s}}function ic(e,t,a,c,i="magnitude"){if(!t?.ids?.length)return null;if(t.ids.length===1)return{...ha(e,t.ids[0],a,c),components:null};const r=t.ids.map(f=>ha(e,f,a,c)),d=["x","y","z"].indexOf(i);if(d>=0)return{...r[d],components:null};const s=new Float32Array(r[0].values.length);for(let f=0;f<s.length;f+=1)s[f]=Math.hypot(r[0].values[f],r[1].values[f],r[2].values[f]);return{...r[0],fieldId:t.ids.join("+"),values:s,components:r.map(f=>f.values)}}function rc(e,{onCameraChange:t,rendererFactory:a=()=>new s0({antialias:!0}),controlsFactory:c=(r,d)=>new f0(r,d),gizmoFactory:i=d0}={}){const r=a();e.appendChild(r.domElement),r.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2));const d=i(e),s=new o0;s.background=new ia("#f4f8fb");const f=new l0(40,1,.001,1e5);f.position.set(8,6,9);const l=c(f,r.domElement);l.enableDamping=!1,s.add(new b0(16777215,6649225,2.4));const h=new m0(16777215,2);h.position.set(3,8,5),s.add(h);const m=new u0(1);s.add(m);let w=[],g=null,o=[],b={mode:"split",opacity:.65},v=!1,S=960,B=540,p=[0,1];function E(){const C=b.sourceRange||p;for(const D of o){const P=D.userData.values;if(!P)continue;const Z=D.geometry.attributes.color;for(let F=0;F<P.length;F++){const R=Math.max(0,Math.min(1,(P[F]-C[0])/(C[1]-C[0]||1)));new ia().setHSL(.65*(1-R),.8,.48).toArray(Z.array,F*3)}Z.needsUpdate=!0}}const _=()=>{for(const C of o)s.remove(C),C.geometry.dispose(),C.material.dispose();o=[]};function x(){for(const C of o){if(C.userData.kind==="slice-outline"){C.material.opacity=1,C.material.depthTest=!1,C.material.depthWrite=!1,C.renderOrder=4;continue}if(C.userData.kind==="section-plane"){C.material.transparent=!0,C.material.opacity=.14,C.material.depthWrite=!1,C.material.depthTest=!0,C.renderOrder=3;continue}const D=C.userData.role==="prediction",P=b.mode==="wire-overlay"&&D&&C.userData.kind==="surface";C.renderOrder=P?3:D?2:1,C.material.transparent=!0,C.material.opacity=b[D?"predictionOpacity":"gtOpacity"]??b.opacity,C.material.depthWrite=!["overlay","wire-overlay"].includes(b.mode),C.isMesh&&(C.userData.kind==="surface"&&w0(C.geometry,C.material,b.shading),C.material.userData.xray!==P&&(C.material.userData.xray=P,C.material.onBeforeCompile=Z=>{P&&(Z.fragmentShader=Z.fragmentShader.replace("void main() {",`void main() {
if (mod(floor(gl_FragCoord.x / 3.0) + floor(gl_FragCoord.y / 3.0), 2.0) < 1.0) discard;`))},C.material.customProgramCacheKey=()=>P?"field-xray-gaps-1":"field-surface-1",C.material.needsUpdate=!0),C.material.wireframe=P,C.material.depthTest=!P)}}function u(){if(v)return;const C=b.mode==="split"?["gt","prediction"]:[b.mode==="gt"?"gt":b.mode==="prediction"?"prediction":null];r.setScissorTest(!0),C.forEach((D,P)=>{const Z=S/C.length;f.aspect=Z/B,f.updateProjectionMatrix(),r.setViewport(P*Z,0,Z,B),r.setScissor(P*Z,0,Z,B),o.forEach(F=>{F.visible=(!D||F.userData.role===D)&&b[F.userData.role==="prediction"?"showPrediction":"showGt"]!==!1&&(F.userData.kind!=="section-plane"||b.showPlane!==!1)}),r.render(s,f)}),d.update(f)}const I=()=>({position:f.position.toArray(),target:l.target.toArray(),zoom:f.zoom,up:f.up.toArray(),fov:f.fov,near:f.near,far:f.far}),k=()=>{u(),t?.(I())};l.addEventListener("change",k);function O(){const C=e.clientWidth,D=e.clientHeight;C>1&&D>1&&(S=C,B=D),r.setSize(S,B),u()}const M=globalThis.ResizeObserver?new ResizeObserver(O):null;M?.observe(e);const $={setGeometry(C){_();let D=1/0,P=-1/0;for(const F of C?.layers||[])for(const R of F.values||[])D=Math.min(D,R),P=Math.max(P,R);p=[D,P];const Z=b.sourceRange||p;for(const F of C?.layers||[]){if(!F.positions.length)continue;const R=new Ya;R.setAttribute("position",new ja(F.positions,3));const G=F.role==="gt"?1416379:15571026;let ne,U;if(F.values){const se=new Float32Array(F.values.length*3);for(let ce=0;ce<F.values.length;ce++){const V=Math.max(0,Math.min(1,(F.values[ce]-Z[0])/(Z[1]-Z[0]||1)));new ia().setHSL(.65*(1-V),.8,.48).toArray(se,ce*3)}R.setAttribute("color",new ja(se,3))}F.kind==="vectors"||F.kind==="slice-outline"?(ne=new qa({vertexColors:!!F.values,color:F.kind==="slice-outline"?8801732:F.values?16777215:G}),U=new La(R,ne)):(R.computeVertexNormals(),ne=new v0({color:F.kind==="section-plane"?9988803:F.values?16777215:G,vertexColors:!!F.values,side:E0,roughness:.7,transparent:!0,opacity:F.kind==="slice"?.85:b.opacity,depthWrite:b.mode!=="overlay"}),U=new Ua(R,ne)),U.userData={role:F.role,kind:F.kind,values:F.values},o.push(U),s.add(U)}x(),u()},setInspection(C,D){for(const Z of w)s.remove(Z),Z.geometry.dispose(),Z.material.dispose();w=[];const P=Z=>{Z.renderOrder=15,s.add(Z),w.push(Z)};if(C?.corners?.length===4&&C.corners.every(Boolean)){const Z=new Ya;Z.setAttribute("position",new g0([0,1,1,2,2,3,3,0].flatMap(F=>C.corners[F]),3)),P(new La(Z,new qa({color:"#e4ac00",depthTest:!1})))}if(C?.probe&&D){const Z=Math.hypot(...D.max.map((R,G)=>R-D.min[G])),F=new Ua(new y0(Z*.007,12,8),new _0({color:"#ffffff",wireframe:!0,depthTest:!1}));F.position.fromArray(C.probe),P(F)}u()},setDisplay(C){const D=JSON.stringify(b.sourceRange)!==JSON.stringify(C.sourceRange);b={...b,...C},x(),D&&E(),u()},setCamera(C){f.position.fromArray(C.position),l.target.fromArray(C.target),f.zoom=C.zoom??1,f.up.fromArray(C.up||[0,1,0]),C.fov&&(f.fov=C.fov),C.near&&(f.near=C.near),C.far&&(f.far=C.far),f.updateProjectionMatrix(),l.update(),f.position.fromArray(C.position),f.lookAt(l.target),k()},capture(){if(v)throw Error("3D unavailable");u();const C=document.createElement("canvas");C.width=r.domElement.width,C.height=r.domElement.height;const D=C.getContext("2d");return D.drawImage(r.domElement,0,0),d.capture(D,C.width,C.height,C.width/S),C},getCamera:I,preset(C,D){const P=h0(C,D,S/(b.mode==="split"?2:1)/B,f.fov);P&&$.setCamera(P)},fit(C){if(!C)return;const D=new Sn(...C.min).add(new Sn(...C.max)).multiplyScalar(.5),P=new Sn(...C.max).sub(new Sn(...C.min)).length()||1;f.position.copy(D).add(new Sn(.8,.65,.9).multiplyScalar(P)),l.target.copy(D),f.near=P/1e4,f.far=P*100,f.zoom=1,m.scale.setScalar(P*.15),m.position.copy(D),g&&(s.remove(g),g.geometry.dispose(),g.material.dispose()),g=new p0(P*1.3,12,13294052,14740209),g.position.set(D.x,C.min[1],D.z),s.add(g),$.preset(C,"reset")},resize:O,dispose(){if(!v){v=!0,M?.disconnect(),l.removeEventListener("change",k),l.dispose(),$.setInspection(null),_();for(const C of[m,g])C?.geometry.dispose(),Array.isArray(C?.material)?C.material.forEach(D=>D.dispose()):C?.material.dispose();d.dispose(),r.dispose(),r.domElement.remove()}}};return O(),$}function Ea(e,t){return t==null?null:e instanceof Map?e.get(t):e?.rows?.find(a=>a.frame===t)}function qn(e,t){const a=Ea(e,t);return["train","validation","test"].includes(a?.split)?a.split:"unassigned"}function sc(e,t,a){const c=Ea(e,t);return a==="all"?!0:a.startsWith("test_")?c?.split==="test"&&(c.prediction_type||"unassigned")===a.slice(5):qn(e,t)===a}function dc(e){return{test_interpolation:e?"Test · 插值":"Test · Interpolation",test_extrapolation:e?"Test · 未来外推":"Test · Future extrapolation",test_unassigned:e?"Test · 类型未声明":"Test · Type undeclared",test_anchor:"Test · Anchor"}}function wa(e,t){const a=Ea(e,t)?.prediction_type;return["anchor","interpolation","extrapolation"].includes(a)?a:"unassigned"}function oc(e,t=!1){return(t?{anchor:"Anchor · 来源帧",interpolation:"时间插值",extrapolation:"未来外推",unassigned:"预测类型未声明"}:{anchor:"Anchor",interpolation:"Interpolation",extrapolation:"Future extrapolation",unassigned:"Prediction type undeclared"})[e]}function Ba({manifest:e,frame:t}){const{language:a}=be(),c=qn(e,t),i=a==="zh"?{train:"Train · 训练集",validation:"Validation · 验证集",test:"Test · 测试集",unassigned:"Unassigned · 未划分"}:{train:"Train",validation:"Validation",test:"Test",unassigned:"Unassigned"};return n.createElement(n.Fragment,null,n.createElement("span",{"aria-label":"Frame split",className:`frame-split-badge split-${t==null?"unassigned":c}`,title:a==="zh"?"依据此预测模型的 CSV 声明；并非独立核验训练历史":"Declared by this prediction model’s CSV; training history is not independently verified"},t==null?"—":i[c]),t!=null&&n.createElement("span",{className:"frame-split-badge","aria-label":"Prediction type"},oc(wa(e,t),a==="zh")))}function lc({geometry:e,settings:t,bounds:a,loadingFrame:c,error:i,labels:r,cameraState:d,onCameraChange:s,frameSplit:f,displayedFrame:l,controlRef:h,onSceneError:m,inspection:w,onShading:g}){const{tr:o,language:b}=be(),v=b==="zh",[S,B]=y.useState("reset");function p(P){_.current?.preset(a,P),B(P)}const E=y.useRef(null),_=y.useRef(null),x=y.useRef(!1),[u,I]=y.useState(""),k=y.useRef(s),O=y.useRef(!1);k.current=s,y.useImperativeHandle(h,()=>({capture(){if(!_.current)throw Error("3D unavailable");return _.current.capture()},getCamera(){if(!_.current)throw Error("camera");return _.current.getCamera()},restoreCamera(P){if(!_.current)throw Error("camera");O.current=!0;try{_.current.setCamera(P),B("custom"),k.current?.(_.current.getCamera())}finally{O.current=!1}}}),[]),y.useEffect(()=>{try{_.current=rc(E.current,{onCameraChange:P=>{B("custom"),O.current||k.current?.(P)}})}catch(P){I(`3D unavailable: ${P.message}. Slices remain available.`),m?.(P.message)}return()=>{_.current?.dispose(),_.current=null}},[]),y.useEffect(()=>{if(d){O.current=!0;try{_.current?.setCamera(d)}finally{O.current=!1}}},[d]),y.useEffect(()=>{_.current?.setDisplay(t)},[t]),y.useEffect(()=>{_.current?.setGeometry(e)},[e]),y.useEffect(()=>{_.current?.setInspection(w,a)},[w,a]),y.useEffect(()=>{a&&!x.current&&(_.current?.fit(a),x.current=!0,B("reset"))},[a]),y.useEffect(()=>{a&&S!=="custom"&&p(S)},[t.mode,a]);const M=t.group==="velocity";let $=1/0,C=-1/0;for(const P of e?.layers||[])for(const Z of P.values||[])$=Math.min($,Z),C=Math.max(C,Z);const D=t.sourceRange||[$,C];return n.createElement("section",{className:"field-viewport","aria-label":o("3D field visualization")},n.createElement("div",{className:"field-view-heading"},n.createElement("strong",null,o(M?"3D velocity field":"3D zero-isosurface")),n.createElement("span",null,o("Frame "),l??"—"," · ",n.createElement(Ba,{manifest:f,frame:l}))),n.createElement("div",{className:"v2-view-actions",role:"group","aria-label":v?"三维视角":"3D view"},n.createElement(B0,{value:t.shading||"original",onChange:g,disabled:t.group!=="sdf"}),[["reset",v?"重置视角":"Reset view"],["top",v?"顶视图":"Top"],["side",v?"侧视图":"Side"]].map(([P,Z])=>n.createElement("button",{key:P,disabled:!a,"aria-pressed":S===P,onClick:()=>p(P)},Z)),n.createElement("button",{disabled:!a,onClick:()=>{_.current?.fit(a),B("reset")}},o("Fit view"))),n.createElement("div",{className:"field-scene",ref:E}),n.createElement("div",{className:`field-role-labels ${t.mode==="split"?"split":""}`,"aria-hidden":"true"},t.mode!=="prediction"&&n.createElement("span",null,r?.gt?.displayName?`GT · ${r.gt.displayName} · ${M?"shared scale":"blue"}`:t.previewOnly?o("Dataset preview"):o(M?"GT · shared color scale":"GT · blue"),t.showGt===!1?o(" · hidden"):""),t.mode!=="gt"&&n.createElement("span",null,r?.prediction?.displayName?`Prediction · ${r.prediction.displayName} · ${M?"shared scale":"orange"}`:o(M?"Prediction · shared color scale":"Prediction · orange"),t.showPrediction===!1?o(" · hidden"):t.mode==="wire-overlay"?o(" · X-ray wireframe"):"")),M&&n.createElement("div",{className:"field-legend"},t.component==="magnitude"?o("Speed magnitude"):`Velocity ${t.component?.toUpperCase()}`,n.createElement("div",{className:"field-gradient"}),D.every(Number.isFinite)?`${D[0].toPrecision(3)} — ${D[1].toPrecision(3)}`:o("No valid samples")," ",n.createElement("span",null,t.unit||o("units undeclared"))),c!=null&&n.createElement("div",{role:"status",className:"field-view-loading"},o("Loading frame "),c,"…"),(u||i)&&n.createElement("p",{role:"alert",className:"field-view-error"},u||i),e?.warnings?.length>0&&n.createElement("p",{className:"field-view-warning"},e.warnings.join(" · ")),n.createElement("small",{className:"field-view-help"},n.createElement("span",{className:"shading-note"},v?"平滑只影响 SDF 表面光照；顶点、切片、指标和速度箭头保持原样。":"Smoothing affects SDF surface lighting only; vertices, slices, scores and velocity arrows are unchanged."),o("Drag to orbit · Scroll to zoom · "),o(M?"Instantaneous velocity vectors, not particle paths":"SDF = 0; display-only mesh"),o(" · X / Y up / Z · Preview quality: "),t.quality||o("balanced")))}function at({frames:e,current:t,direction:a=1,loop:c=!1,status:i="ready"}){const r=e.indexOf(t),d=r+(a<0?-1:1);return r>=0&&d>=0&&d<e.length?{frame:e[d],action:"select"}:i==="processing"&&a>0?{frame:t,action:"wait"}:i==="ready"&&c&&e.length>1?{frame:a<0?e.at(-1):e[0],action:"select"}:{frame:t,action:"stop"}}function fc({frames:e,displayedFrame:t,requestedFrame:a,status:c="ready",loading:i=!1,previewFps:r=24,onFrame:d,onScrubbing:s,timing:f,frameSplit:l,active:h=!0,controlRef:m,initialPlayback:w}){const{tr:g}=be(),[o,b]=y.useState(!1),[v,S]=y.useState(w?.loop??!1),[B,p]=y.useState(w?.fps??r),[E,_]=y.useState(w?.speed??1),[x,u]=y.useState("");y.useImperativeHandle(m,()=>({pause:()=>b(!1),getSettings:()=>({loop:v,fps:B,speed:E}),restoreSettings:M=>{b(!1),S(M.loop),p(M.fps),_(M.speed)}}),[v,B,E]),y.useEffect(()=>{h||b(!1)},[h]),y.useEffect(()=>u(String(a??t??"")),[a,t]),y.useEffect(()=>{e.length<2&&b(!1)},[e.length]),y.useEffect(()=>{if(!o||i)return;const M=setTimeout(()=>{const $=at({frames:e,current:t,loop:v,status:c});$.action==="select"?d($.frame):$.action==="stop"&&b(!1)},1e3/(Math.max(1,B)*E));return()=>clearTimeout(M)},[o,i,t,e,v,c,B,E,d]);function I(M){b(!1);const $=at({frames:e,current:a??t,direction:M,status:c});$.action==="select"&&d($.frame)}function k(){const M=Number(x);e.includes(M)?d(M):u(String(a??t??""))}const O=e.some((M,$)=>$>0&&M!==e[$-1]+1);return n.createElement("section",{className:"field-timeline","aria-label":g("Animation controls")},n.createElement(Ba,{manifest:l,frame:t}),n.createElement("div",{className:"field-play-controls"},n.createElement("button",{"aria-label":g("First frame"),disabled:!e.length,onClick:()=>{b(!1),d(e[0])}},"⏮"),n.createElement("button",{"aria-label":g("Previous frame"),disabled:e.length<2,onClick:()=>I(-1)},"‹"),n.createElement("button",{className:"primary",disabled:e.length<2,onClick:()=>b(M=>!M)},g(o?"Pause":"Play")),n.createElement("button",{"aria-label":g("Next frame"),disabled:e.length<2,onClick:()=>I(1)},"›"),n.createElement("button",{"aria-label":g("Last frame"),disabled:!e.length,onClick:()=>{b(!1),d(e.at(-1))}},"⏭"),n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:v,onChange:M=>S(M.target.checked)}),g(" Loop")),n.createElement("label",null,g("Speed"),n.createElement("select",{value:E,onChange:M=>_(Number(M.target.value))},[.25,.5,1,2].map(M=>n.createElement("option",{key:M,value:M},M,"×"))))),n.createElement("input",{"aria-label":g("Sequence timeline"),type:"range",min:"0",max:Math.max(0,e.length-1),value:Math.max(0,e.indexOf(a??t)),disabled:e.length<2,onPointerDown:()=>{b(!1),s?.(!0)},onPointerUp:()=>s?.(!1),onPointerCancel:()=>s?.(!1),onBlur:()=>s?.(!1),onKeyDown:M=>{s?.(!0),["Home","End"].includes(M.key)&&(M.preventDefault(),b(!1),d(M.key==="Home"?e[0]:e.at(-1)))},onKeyUp:()=>s?.(!1),onChange:M=>{b(!1),d(e[Number(M.target.value)])}}),n.createElement("div",{className:"field-time-labels"},n.createElement("span",null,g("Displayed frame "),n.createElement("strong",null,t??"—"),i?` · ${g("Loading")} ${a}…`:""),n.createElement("label",null,g("Go to frame"),n.createElement("input",{"aria-label":g("Comparison frame"),type:"number",value:x,onChange:M=>u(M.target.value),onBlur:k,onKeyDown:M=>{M.key==="Enter"&&k()}})),n.createElement("label",null,g("Preview FPS"),n.createElement("input",{"aria-label":g("Preview FPS"),type:"number",min:"1",max:"120",value:B,onChange:M=>p(Math.max(1,Math.min(120,Number(M.target.value)||24)))})),n.createElement("small",null,f?.fps>0&&Number.isFinite(f.originFrame)?`${g("Time")}: ${((t-f.originFrame)/f.fps+(f.offsetSeconds||0)).toFixed(3)} s`:g("Playback timing only — not physical simulation time"))),n.createElement("small",null,e.length,g(" available frames"),O?g(" · Missing frames skipped; no interpolation"):"",c==="processing"?g(" · Processing continues; playback waits at the latest frame"):c==="error"?g(" · Processing failed; completed frames remain available"):""))}function bc(e,t){if(!e)return{valid:0,total:0,fraction:null};const a=e.values.length;let c=0;for(let i=0;i<a;i++)(!t||t.values[i])&&Number.isFinite(e.values[i])&&c++;return{valid:c,total:a,fraction:a?c/a:null}}function mc(e,t){return Number.isFinite(e)&&e>0?t?[0,e]:[-e,e]:null}const ga=e=>Math.max(0,Math.min(1,e)),An=(e,t,a)=>e.map((c,i)=>Math.round(c+(t[i]-c)*a));function uc(e,t,a){const[c,i]=t,r=i===c?a==="error"?.5:0:ga((e-c)/(i-c));return a==="error"?r<.5?An([32,91,177],[246,248,250],r*2):An([246,248,250],[201,66,55],(r-.5)*2):a==="prediction"?An([255,244,221],[224,119,32],r):a==="absolute-error"?An([246,240,252],[103,32,150],r):An([235,244,252],[31,111,176],r)}function vt({slice:e,maskSlice:t,range:a,palette:c="ground-truth",crosshair:i,onCrosshair:r,plane:d,aspect:s,region:f=null}){const l=y.useRef(null);return y.useEffect(()=>{const h=l.current;if(!h||!e)return;h.width=e.width,h.height=e.height;const m=h.getContext?.("2d");if(!m)return;const w=m.createImageData(e.width,e.height);for(let g=0;g<e.height;g+=1)for(let o=0;o<e.width;o+=1){const b=o+e.width*g,v=4*(o+e.width*(e.height-1-g)),S=!t||!!t.values[b],B=e.values[b],p=S&&Number.isFinite(B)?uc(B,a,c):(o+g)%6<3?[205,213,219]:[238,242,245];w.data[v]=p[0],w.data[v+1]=p[1],w.data[v+2]=p[2],w.data[v+3]=255}if(m.putImageData(w,0,0),e.components){m.strokeStyle=c==="prediction"?"#7c3f0d":"#123e68",m.lineWidth=Math.max(1,e.width/180);const g=d==="xy"?[0,1]:d==="xz"?[0,2]:[1,2],o=Math.max(4,Math.ceil(Math.max(e.width,e.height)/18));for(let b=o/2;b<e.height;b+=o)for(let v=o/2;v<e.width;v+=o){const S=Math.floor(v)+e.width*Math.floor(b);if(t&&!t.values[S])continue;const[B,p]=d==="oblique"?Kt(e,S):g.map(k=>e.components[k][S]),E=Math.hypot(B,p);if(!Number.isFinite(E)||E<1e-8)continue;const _=Math.min(o*.42,o*.18+Math.log1p(E)*o*.08),x=B/E*_,u=-p/E*_,I=e.height-1-b;m.beginPath(),m.moveTo(v,I),m.lineTo(v+x,I+u),m.lineTo(v+x-x*.35+u*.25,I+u-u*.35-x*.25),m.moveTo(v+x,I+u),m.lineTo(v+x-x*.35-u*.25,I+u-u*.35+x*.25),m.stroke()}}if(f){const[g,o]=Ja(e.width,f.slice(0,2)),[b,v]=Ja(e.height,f.slice(2,4));m.strokeStyle="#9c6900",m.lineWidth=Math.max(1,e.width/180),m.fillStyle="rgba(255,211,62,.17)",m.fillRect(g,e.height-1-v,o-g+1,v-b+1),m.strokeRect(g+.5,e.height-v-.5,Math.max(0,o-g),Math.max(0,v-b))}if(i){const g=i[0]*e.width,o=(1-i[1])*e.height;m.strokeStyle="#111",m.lineWidth=Math.max(.5,e.width/350),m.setLineDash([3,3]),m.beginPath(),m.moveTo(g,0),m.lineTo(g,e.height),m.moveTo(0,o),m.lineTo(e.width,o),m.stroke(),m.setLineDash([])}},[e,t,a,c,i,d,f]),n.createElement("canvas",{ref:l,className:"slice-canvas",style:{aspectRatio:s||"auto",height:"auto"},onClick:h=>{if(!e||!r)return;const m=h.currentTarget.getBoundingClientRect();r([ga((h.clientX-m.left)/m.width),ga(1-(h.clientY-m.top)/m.height)])}})}const Xe=e=>Number.isFinite(e)?e.toPrecision(5):"N/A";function pc({metadata:e,labels:t,single:a,group:c,epe:i,unit:r,local:d,whole:s,counts:f,probes:l,sourceRange:h,errorRange:m,metrics:w,titles:g,aspects:o}){return JSON.parse(JSON.stringify({schema:"oceanscope.field-report.v1",metadata:e,labels:t,single:a,group:c,epe:i,unit:r||"undeclared",local:a?null:d,whole:a?null:s,counts:f.slice(0,a?1:3),probes:l.slice(0,a?1:3),sourceRange:h,errorRange:a?null:m,savedFrameMetrics:a?null:w?.[c]??null,titles:g.slice(0,a?1:3),aspects:o.slice(0,a?1:3),scope:"Slice statistics and saved volume metrics are distinct; shading never changes measurements."}))}async function hc(e,t,a,c,i){const r=c==="zh",d=document.createElement("canvas");d.width=1920,d.height=1800;const s=d.getContext("2d"),f=e.metadata,l="#243f56",h="#5c7487";s.fillStyle="white",s.fillRect(0,0,d.width,d.height);function m(p,E,_,x=23,u=l,I=1808){s.font=`${x}px Segoe UI, Microsoft YaHei, sans-serif`,s.fillStyle=u,s.fillText(String(p),E,_,I)}function w(p,E,_,x,u=21){s.font=`${u}px Segoe UI, Microsoft YaHei, sans-serif`;let I="",k=0;for(const O of String(p))s.measureText(I+O).width>x?(m(I,E,_+k*(u+7),u,h,x),k++,I=O):I+=O;return m(I,E,_+k*(u+7),u,h,x),k+1}function g(p,E,_,x,u,I=p.width/p.height){const k=Math.min(x,u*I),O=k/I;s.drawImage(p,E+(x-k)/2,_+(u-O)/2,k,O)}m(r?"OceanScope | 场比较汇报":"OceanScope | Field comparison report",56,64,38),m("v2.10",1760,64,24),m(`A · ${e.labels.a}`,56,108,25,"#168ba9",870),e.single||m(`B · ${e.labels.b}`,986,108,25,"#c6752a",878),m(`${r?"帧":"Frame"} ${f.frame} · ${e.group.toUpperCase()} ${f.component} · ${f.plane?.startsWith("oblique")?`${(f.rotation_axis||"y").toUpperCase()} ${f.angle_degrees}° / ${Xe(f.section_percent)}%`:f.plane.toUpperCase()+" / "+f.slice_index} · ${r?"数值单位":"Value unit"} ${e.unit}`,56,151),m(e.single?r?"单组 GT；未提供预测，不计算比较误差。":"Single GT; no prediction and no comparison errors.":e.group==="sdf"?r?"SDF 数值差，不等于水面高度差；有效范围以当前数据的掩码为准。":"SDF field differences are not surface-height errors; validity follows the supplied masks.":r?"速度分量差 / 端点误差；瞬时矢量不是粒子轨迹。":"Velocity component differences / endpoint errors; instantaneous vectors are not particle paths.",56,190,22,h),m(`${r?"三维显示":"3D view"}: ${f.mode} · A ${f.gt_visible?"on":"off"}${e.single?"":` / B ${f.prediction_visible?"on":"off"}`} · ${r?"着色":"shading"}: ${f.shading||"original"} · ${r?"显示精度":"quality"}: ${f.preview_quality}`,56,228,22,h),s.fillStyle="#f4f8fb",s.fillRect(56,250,1808,480),g(t,56,250,1808,480);const o=a.length,b=28,v=(1808-b*(o-1))/o;if(a.forEach((p,E)=>{const _=56+E*(v+b),x=E===2?e.errorRange:e.sourceRange;m(e.titles[E],_,782,25,l,v),m(`${Xe(x[0])} … ${Xe(x[1])} ${e.unit}`,_,818,21,h,v),s.imageSmoothingEnabled=!1,g(p,_,840,v,310,e.aspects[E]),s.imageSmoothingEnabled=!0;const u=s.createLinearGradient(_,0,_+v,0);u.addColorStop(0,E===2?e.epe?"#f6f0fc":"#205bb1":"#ebf4fc"),E===2&&!e.epe&&u.addColorStop(.5,"#f6f8fa"),u.addColorStop(1,E===2?e.epe?"#672096":"#c94237":"#1f6fb0"),s.fillStyle=u,s.fillRect(_,1170,v,14),m(`${r?"有效":"Valid"}: ${e.counts[E].valid}/${e.counts[E].total} · ${r?"探针":"Probe"}: ${Xe(e.probes[E])} ${e.unit}`,_,1220,20,h,v)}),m(r?"当前切片与局部区域":"Current slice and selected region",56,1280,27),e.single)m(r?"仅展示 GT 切片及有效样本；无 A/B 差异统计。":"GT slice and validity only; no A/B statistics.",56,1335,23,h);else{const p=[[r?"完整切片":"Full slice",e.whole],...e.local?.region?[[r?"黄色选区":"Yellow region",e.local]]:[]];m(`${e.epe?"Mean EPE":r?"平均有符号差":"Mean signed"} | ${e.epe?"RMS EPE":"MAE / RMSE"} | ${r?"共同有效 / 候选":"Common valid / candidates"}`,400,1280,22,h,1460),p.forEach(([E,_],x)=>{const u=1310+x*65;s.fillStyle="#f1f6f9",s.fillRect(56,u,1808,55),m(E,76,u+36),m(`${Xe(_?.mean)} | ${e.epe?Xe(_?.rmse):`${Xe(_?.mae)} / ${Xe(_?.rmse)}`} ${e.unit} | ${_?.count??0}/${_?.total??0} (${Xe((_?.coverage??0)*100)}%)`,400,u+36,24)})}m(r?"已有全域指标 · 当前帧 · 原始有效范围":"Saved volume metrics · current frame · original support",56,1480,27);const S=e.savedFrameMetrics;if(e.single||!S||S.blocked)m(e.single?r?"不适用：单组查看。":"Not applicable: single dataset.":r?"此帧无可用评分。":"No available scores for this frame.",56,1530,24,h);else{const p=e.group==="sdf"?["mae","rmse","fluidIoU","coverage"]:["meanEpe","epeRmse","coverage"];m(p.map(E=>`${E}: ${Xe(S[E])}${E==="coverage"||E==="fluidIoU"?"":` ${e.unit}`}`).join("   |   "),56,1530,24)}const B=S?.notice||S?.reason||(e.single?"No prediction provided.":"Missing samples are excluded, never zero.");w(B,56,1575,1808),w(r?"黄色表示选区，虚线表示探针。三维平滑只改变光照法线；原始顶点、切片与指标保持不变。坐标使用源网格坐标单位。":"Yellow marks the region; dashed lines mark the probe. Smooth shading changes lighting normals only. Original vertices, slices and metrics are unchanged. Coordinates use source-grid units.",56,1670,1808,21),m(`${f.comparison_id} · ${r?"完整设置与数值请另存汇报 JSON":"Save report JSON for complete settings and values"}`,56,1760,20,h),await P0(d,i)}function gc(e,t){let a=1/0,c=-1/0;return e.forEach((i,r)=>{if(!i)return;const d=t[r];for(let s=0;s<i.values.length;s+=1){if(d&&!d.values[s])continue;const f=i.values[s];Number.isFinite(f)&&(a=Math.min(a,f),c=Math.max(c,f))}}),Number.isFinite(a)?[a,c]:[0,1]}function yc({frame:e,group:t,plane:a,sliceIndex:c,crosshair:i,onCrosshair:r,component:d="magnitude",fixedRange:s=null,lattice:f,single:l=!1,label:h="Dataset",frameNumber:m,frameSplit:w,viewMetadata:g={},angle:o=30,sectionPercent:b=50,rotationAxis:v="y",exportStem:S="comparison",errorScale:B,onErrorScale:p,region:E=null,onRegion:_,onInspection:x,inspectionContext:u,busy:I=!1,captureScene:k,reportReady:O=!1,reportLabels:M={},savedMetrics:$}){const{tr:C,language:D}=be(),P=D==="zh",Z=y.useRef(null),[F,R]=y.useState(!1),[G,ne]=y.useState(1),[U,se]=y.useState(""),ce=B?.locked??F,V=B?.limit??G,N=T=>p?p({locked:T,limit:V}):R(T),Y=T=>p?p({locked:ce,limit:T}):ne(T),K=y.useMemo(()=>kn(e,t),[e,t]),q=y.useMemo(()=>a==="oblique"?va(f,o,b,v):null,[a,f,o,b,v]),ae=y.useMemo(()=>["groundTruth","prediction","error"].map(T=>a==="oblique"?Qt(e,K[T],d,f,q):ic(e,K[T],a,c,d)),[e,K,a,c,d,f,q]),ie=y.useMemo(()=>["groundTruth","prediction","error"].map((T,W)=>a==="oblique"?ae[W]?.maskSlice:K[T]?.maskId?ha(e,K[T].maskId,a,c):null),[e,K,a,c,ae]),xe=y.useMemo(()=>l?null:Ha(ae,ie,E),[l,ae,ie,E]),We=y.useMemo(()=>l?null:Ha(ae,ie),[l,ae,ie]),Fe=y.useMemo(()=>x0(f,a,c,q,ae[0],E,i),[f,a,c,q,ae,E,i]);y.useEffect(()=>{x?.({context:u,value:I?null:Fe})},[x,u,Fe,I]);const Ne=s||gc(ae.slice(0,2),ie.slice(0,2)),we=t==="velocity"&&d==="magnitude",Pe=ce&&mc(V,we)||(ae[2]?(we?cc:tc)(ae[2].values):[-1,1]),Le=[l?h:"Ground Truth","Prediction",we?"Endpoint Error |Pred − GT|":"Signed Error (Pred − GT)"],Rn=a==="xy"?[0,1]:a==="xz"?[0,2]:[1,2],gn=q?[Math.max(q.spacing[0],1e-9),q.spacing[1],1]:f?.voxelSize||[1,1,1],rn=T=>q?q.degenerate?1:Math.max(.15,(q.range[1]-q.range[0])/((q.height-1)*q.spacing[1])):T.width*gn[Rn[0]]/(T.height*gn[Rn[1]]),Ve=ae.map((T,W)=>bc(T,ie[W])),sn=a==="xy"?2:a==="yz"?0:1,Un=q?q.point(0,0):f?.origin?.map((T,W)=>T+c*f.axisSteps[sn][W]),yn=`Frame ${m??"unknown"} | ${qn(w,m)} | ${wa(w,m)} | ${t} ${d} | ${a==="oblique"?`Oblique ${v.toUpperCase()} ${o}° / ${b.toFixed(1)}%`:a.toUpperCase()+" index "+c}`;function oe(T){const W=ae[0];r([(T%W.width+.5)/W.width,(Math.floor(T/W.width)+.5)/W.height])}function Re(){Ka(`${S}_${m}_local_diagnosis.json`,JSON.stringify({schema:"oceanscope.slice-diagnosis.v1",metadata:g,group:t,component:d,unit:K.unit||"undeclared",difference:we?"vector_endpoint_error":"signed_B_minus_A",local:xe,whole:We,world_region_corners:Fe?.corners,probe_world:Fe?.probe,scope:"current_slice_only_saved_volume_scores_unchanged",validity:"Intersection of finite A/B/error samples and their existing masks"},null,2))}function ze(){const T=ae.map((W,X)=>{if(!W)return null;const ge=Math.min(W.width-1,Math.floor(i[0]*W.width))+W.width*Math.min(W.height-1,Math.floor(i[1]*W.height));return(!ie[X]||ie[X].values[ge])&&Number.isFinite(W.values[ge])?W.values[ge]:null});return pc({metadata:{...g,source_color_range:Ne,error_color_range:l?null:Pe,error_range_locked:ce,probe_world:Fe?.probe,world_region_corners:Fe?.corners},labels:M,single:l,group:t,epe:we,unit:K.unit,local:xe,whole:We,counts:Ve,probes:T,sourceRange:Ne,errorRange:Pe,metrics:$,titles:Le,aspects:ae.map(W=>W?rn(W):1)})}async function le(T=!1){try{if(!O)throw Error(P?"等待当前帧加载完成。":"Wait for the current frame.");const W=k(),X=ze();T?Ka(`${S}_${m}_report.json`,JSON.stringify(X,null,2)):await hc(X,W,[...Z.current.querySelectorAll("canvas")],D,`${S}_${m}_report.png`),se("")}catch(W){se(W.message)}}async function _n(){try{const T=[...Z.current.querySelectorAll("canvas")],W=document.createElement("canvas");W.width=1800,W.height=920;const X=W.getContext("2d");X.fillStyle="white",X.fillRect(0,0,1800,920),X.fillStyle="#18374d",X.font="20px sans-serif",X.fillText("OceanScope | "+S,25,35,1740),X.fillText(yn,25,70,1740),X.fillText("Plane origin (world units): "+(Un?.map(ge=>ge.toPrecision(5)).join(", ")||"undeclared"),25,105,1740),T.forEach((ge,pe)=>{const Be=25+pe*590,Me=pe===2?Pe:Ne;X.fillStyle="#18374d",X.fillText(Le[pe],Be,155,560),X.fillText(`${Me.map(dn=>dn.toPrecision(4)).join(" to ")} ${K.unit||"undeclared"}`,Be,185,560);const Qe=rn(ae[pe]),Se=Math.min(555,460*Qe),en=Se/Qe;X.drawImage(ge,Be,205,Se,en);const he=X.createLinearGradient(Be,0,Be+555,0);he.addColorStop(0,pe===2?we?"#f6f0fc":"#205bb1":"#ebf4fc"),pe===2&&!we&&he.addColorStop(.5,"#f6f8fa"),he.addColorStop(1,pe===2?we?"#672096":"#c94237":"#1f6fb0"),X.fillStyle=he,X.fillRect(Be,700,555,18),X.fillStyle="#18374d",X.fillText(`${Me[0].toPrecision(4)}                         ${Me[1].toPrecision(4)} ${K.unit||""}`,Be,745,555),X.fillText(`Valid slice samples: ${Ve[pe].valid}/${Ve[pe].total}`,Be,780,560)}),X.fillText(`Source scale: ${s?"fixed":"auto per frame"}${l?"":` | Error scale: ${ce?"fixed":"auto per frame"}`}`,25,830,1740),X.fillText("Slice validity is not full-volume scoring coverage. Checkerboard = invalid. Source fields and scores unchanged.",25,865,1740),await D0(W,`${S}_${m}_${a}_${a==="oblique"?o:c}_slices.png`,{...g,source_color_range:Ne,error_color_range:Pe,error_range_locked:ce,local_diagnosis:xe,world_region_corners:Fe?.corners}),se("")}catch(T){se(T.message)}}return n.createElement("div",{ref:Z,inert:I||void 0},n.createElement("div",{className:"frame-split-toolbar"},k&&n.createElement(n.Fragment,null,n.createElement("button",{className:"report-export",disabled:!O,onClick:()=>le()},P?"导出场一页汇报图":"Export field report PNG"),n.createElement("button",{disabled:!O,onClick:()=>le(!0)},P?"导出汇报 JSON":"Export report JSON")),!l&&n.createElement(n.Fragment,null,n.createElement("label",null,n.createElement("input",{type:"checkbox",checked:ce,onChange:T=>N(T.target.checked)}),P?"固定误差色标（跨帧）":"Lock error scale across frames"),ce&&n.createElement("label",null,P?"误差上限":"Error limit"," ",n.createElement("input",{"aria-label":"Error scale limit",type:"number",min:"0.000001",step:"0.1",value:V,onChange:T=>{const W=Number(T.target.value);W>0&&Number.isFinite(W)&&Y(W)}}))),n.createElement("button",{onClick:_n,disabled:ae.some((T,W)=>W<(l?1:3)&&!T)},l?P?"导出切片 PNG":"Export slice PNG":P?"导出并排切片 PNG":"Export slice comparison PNG")),n.createElement("small",null,yn," · ",P?"有效样本比例仅针对当前切片，不等于全域计算覆盖率。":"Validity below is for this slice, not full-volume scoring coverage."),U&&n.createElement("p",{role:"alert"},U),n.createElement("section",{className:"slice-triptych","aria-label":`${t} synchronized slices`},ae.slice(0,l?1:3).map((T,W)=>{const X=T&&i?Math.min(T.width-1,Math.floor(i[0]*T.width))+T.width*Math.min(T.height-1,Math.floor(i[1]*T.height)):null,ge=X!==null&&(!ie[W]||ie[W].values[X])&&Number.isFinite(T.values[X]);return n.createElement("figure",{key:Le[W]},n.createElement("figcaption",null,n.createElement("strong",null,Le[W]),n.createElement("span",null,W===2?`${Pe[0].toPrecision(3)} … ${Pe[1].toPrecision(3)}`:`${Ne[0].toPrecision(3)} … ${Ne[1].toPrecision(3)}`," ",K.unit||C("(unit undeclared)"))),T?n.createElement(vt,{slice:T,maskSlice:ie[W],range:W===2?Pe:Ne,palette:W===2?we?"absolute-error":"error":"ground-truth",aspect:rn(T),crosshair:i,onCrosshair:r,plane:a,region:E}):n.createElement("div",{className:"slice-unavailable"},C("Not available")),n.createElement("small",null,C("Probe: "),ge?T.values[X].toPrecision(6):C("Not valid")," ",K.unit," · ",t==="velocity"?d:C("SDF")))})),!l&&xe&&n.createElement(S0,{region:E,onRegion:_,local:xe,whole:We,onLocate:oe,dimensions:2,unit:K.unit||(P?"单位未声明":"undeclared"),absolute:we,onExport:Re}),n.createElement("p",{className:"height-note"},P?"三维白圈表示探针在切面上的位置；黄色框为选中区域，不代表水面高度。":"The 3D white ring marks the probe on this slice; the yellow box marks the selected region, not water-surface height."),q&&n.createElement("p",{className:"height-note"},v==="y"?P?"横轴 s 沿切面，纵轴 Y 向上；使用原始网格坐标单位。斜切不会改变下方保存的全域统计。":"Horizontal: along-section distance s; vertical: Y up. Source-grid coordinates. Oblique inspection does not change saved volume statistics.":P?"横纵轴均沿当前倾斜切面，不等于世界坐标中的高度 Y。使用原始网格坐标单位；全域统计保持不变。":"Both axes lie in the tilted plane; the vertical axis is not world height Y. Source-grid coordinates; saved volume statistics remain unchanged."),n.createElement("div",{className:"frame-split-toolbar"},Ve.slice(0,l?1:3).map((T,W)=>n.createElement("small",{key:W},Le[W],": ",T.valid,"/",T.total," · ",T.fraction==null?"N/A":(100*T.fraction).toFixed(1)+"%"))))}const Et={mae:"MAE",rmse:"RMSE",maxAbsoluteError:"Maximum absolute error",nearSurfaceMae:"Near-surface MAE",signAccuracy:"Sign accuracy",fluidIoU:"Fluid IoU",dice:"Dice",symmetricMeanSurfaceDistance:"Symmetric mean surface distance",hd95:"HD95",meanEpe:"Mean EPE",epeRmse:"EPE RMSE",epeP95:"EPE P95",relativeL2:"Relative L2",meanCosineSimilarity:"Mean cosine similarity",meanAngularErrorDegrees:"Mean angular error",divergenceMae:"Divergence MAE",coverage:"Coverage",validCount:"Valid voxels"},_c=["nearSurfaceMae","rmse","fluidIoU","meanEpe","epeP95","relativeL2","coverage","mae","maxAbsoluteError","signAccuracy","dice","symmetricMeanSurfaceDistance","hd95","epeRmse","componentMae","componentRmse","meanCosineSimilarity","meanAngularErrorDegrees","divergenceMae","validCount","nonFiniteCount","nearSurfaceCount","surfaceSampleCount","angularExcludedCount","divergenceStencilCount","trustedTau","effectiveBand"];Object.assign(Et,{componentMae:"Component MAE (x, y, z)",componentRmse:"Component RMSE (x, y, z)",nonFiniteCount:"Non-finite pairs excluded",nearSurfaceCount:"Near-surface voxels",surfaceSampleCount:"Surface samples (pooled)",angularExcludedCount:"Angular exclusions",divergenceStencilCount:"Divergence stencils",trustedTau:"Trusted truncation τ",effectiveBand:"Effective band"});function vc({metrics:e,group:t,unit:a,frame:c}){const{tr:i,language:r}=be(),d=e?.[t],s=t==="sdf"?["mae","rmse","fluidIoU","coverage"]:["meanEpe","epeRmse","coverage"],f=d?_c.filter(h=>d[h]!==void 0):[],l=h=>n.createElement("div",{key:h},n.createElement("span",null,i(Et[h])),n.createElement("strong",null,d[h]===null?i("Not available"):Array.isArray(d[h])?d[h].map(m=>m==null?"N/A":Number(m).toPrecision(4)).join(" / "):typeof d[h]=="number"?d[h].toLocaleString(void 0,h.endsWith("Count")?{}:{maximumSignificantDigits:5}):String(d[h])),n.createElement("small",null,["mae","rmse","maxAbsoluteError","nearSurfaceMae","symmetricMeanSurfaceDistance","hd95","meanEpe","epeRmse","epeP95","componentMae","componentRmse","trustedTau","effectiveBand"].includes(h)?a:h==="coverage"?i("fraction"):h==="meanAngularErrorDegrees"?i("degrees"):h==="divergenceMae"?i(a==="m/s"?"1/s":"velocity / length"):""));return n.createElement("aside",{className:"metrics-panel"},n.createElement("h3",null,t==="sdf"?r==="zh"?"体积 SDF 指标":"Volumetric SDF metrics":r==="zh"?"原网格速度指标":"Native-grid velocity metrics"),n.createElement("p",{className:"metric-scope"},r==="zh"?`帧 ${c??"—"} · 原网格有效体素 · 不随选区改变`:`Frame ${c??"—"} · Valid native-grid voxels · Independent of ROI`),d?.notice&&n.createElement("p",{role:"note"},r==="zh"&&d.noticeZh?d.noticeZh:i(d.notice)),d?.blocked?n.createElement("p",{className:"score-blocked"},i(d.reason)||i("Scores blocked: declare field semantics and units.")):d?n.createElement(n.Fragment,null,n.createElement("div",{className:"metric-grid"},s.filter(h=>f.includes(h)).map(l),f.filter(h=>h.endsWith("Count")).map(l)),n.createElement("details",null,n.createElement("summary",null,r==="zh"?"更多指标":"More metrics"),n.createElement("div",{className:"metric-grid"},d.nearSurfaceDomain&&n.createElement("p",null,i(d.nearSurfaceDomain),n.createElement("br",null),i("Band: "),d.effectiveBand?.toPrecision(4)," ",a),f.filter(h=>!s.includes(h)&&!h.endsWith("Count")).map(l)))):n.createElement("p",null,i("Metrics are not available for this frame.")))}const pn="Common valid finite SDF voxels M; N = |M|. Interior means SDF ≤ 0.",He="Common valid finite velocity voxels M; not automatically restricted to fluid interior.",te=(e,t,a,c,i,r,d,s="")=>({id:e,label:t,formula:a,unitKind:c,direction:i,group:r,domain:d,caveats:s}),xa=[te("mae","Water-surface elevation MAE","mean |ηp − ηg|","length","Lower","elevation","Paired trustworthy world-Y zero-crossing columns on common XZ lattice.","Not crest-to-trough wave height or Hs. Filled exterior, missing support and multiple crossings are excluded; inspect both coverage denominators."),te("rmse","Water-surface elevation RMSE","sqrt(mean (ηp − ηg)^2)","length","Lower","elevation","Same paired height columns.","Full-resolution aligned SDF, never preview mesh."),te("maxAbsoluteError","Maximum elevation error","max |ηp − ηg|","length","Lower","elevation","Same paired height columns."),te("coverage","Height paired coverage","paired valid columns / GT valid columns","fraction","Context","elevation","GT reconstructible columns.","Zero denominator: N/A. Not SDF voxel coverage."),te("gtCoverage","GT reconstructible coverage","GT valid columns / candidate XZ columns","fraction","Context","elevation","All candidate XZ columns.","Read with paired coverage to expose excluded GT surfaces."),te("mae","SDF MAE","Σ |p − g| / N","length","Lower","sdf",pn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),te("rmse","SDF RMSE","√(Σ (p − g)² / N)","length","Lower","sdf",pn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),te("maxAbsoluteError","Maximum absolute error","max |p − g|","length","Lower","sdf",pn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),te("nearSurfaceMae","Near-surface MAE","mean |clipτ(p) − clipτ(g)| on B","length","Lower","sdf","B = M ∩ {|g| ≤ effective band}, including numerical tolerance.","GT defines B. For TSDF, band ≤ shared τ; clip both values at τ. Shared τ is min of both TSDF τ values, or the single TSDF τ in a mixed pair. No clipping for full/full."),te("signAccuracy","Sign accuracy","count[(p ≤ 0) = (g ≤ 0)] / N","fraction","Higher","sdf",pn),te("fluidIoU","Fluid IoU","|P ∩ G| / |P ∪ G|","fraction","Higher","sdf",pn,"P and G are predicted and GT interior sets in M. Both empty: 1."),te("dice","Dice","2 |P ∩ G| / (|P| + |G|)","fraction","Higher","sdf",pn,"Both interior sets empty: 1."),te("symmetricMeanSurfaceDistance","Symmetric mean surface distance","mean(D(G→P) ∪ D(P→G))","length","Lower","sdf","Pooled nearest distances between sampled zero crossings; each surface uses its own valid support.","Approximation, at most 4096 samples per surface. Not exact continuous-mesh distance; unavailable if either surface is empty."),te("hd95","HD95","percentile95(D(G→P) ∪ D(P→G))","length","Lower","sdf","Same pooled sampled-surface distances.","Linear percentile interpolation; not maximum Hausdorff distance. Surface-sampling limitations apply."),te("meanEpe","Mean EPE","mean ‖p − g‖₂","speed","Lower","velocity",He),te("epeRmse","EPE RMSE","√mean ‖p − g‖₂²","speed","Lower","velocity",He),te("epeP95","EPE P95","percentile95(‖p − g‖₂)","speed","Lower","velocity",He,"Linear interpolation between ordered samples."),te("componentMae","Component MAE (x, y, z)","mean |pₖ − gₖ|, k = x,y,z","speed","Lower","velocity",He),te("componentRmse","Component RMSE (x, y, z)","√mean (pₖ − gₖ)², k = x,y,z","speed","Lower","velocity",He),te("relativeL2","Relative L2","√(Σ ‖p − g‖₂² / Σ ‖g‖₂²)","dimensionless","Lower","velocity",He,"Unavailable when GT energy is zero; no artificial epsilon in denominator."),te("meanCosineSimilarity","Mean cosine similarity","mean clamp((p·g)/(‖p‖₂ ‖g‖₂), −1, 1)","dimensionless","Higher","velocity",He,"Exclude either magnitude ≤ ε (default 1e−8)."),te("meanAngularErrorDegrees","Mean angular error","mean acos(cosine) × 180/π","degrees","Lower","velocity",He,"Same nonzero-vector subset as cosine similarity."),te("divergenceMae","Divergence MAE","mean |∇·p − ∇·g|","inverseTime","Lower","velocity","Six valid neighboring samples; finite central-difference divergence. Borders excluded.","Σₖ (vₖ(i+eₖ) − vₖ(i−eₖ))/(2hₖ). Orthogonal aligned lattice. Divergence mismatch, not absolute incompressibility."),te("coverage","Coverage","N / total lattice voxels","fraction","Context","both","Reported separately for SDF and velocity.","Always read with the error: small valid support can hide missing predictions.")];function Ec(){return{schema:1,notation:"g = Ground Truth; p = Prediction. These are evaluation metrics, not a weighted training loss.",sequence:"Equal weight per valid frame, not pooled voxels. Excluded frame counts are reported. Population standard deviation; interpolated P95.",metrics:xa}}function wc(e){const t=e.filter(s=>typeof s=="number"&&Number.isFinite(s)).sort((s,f)=>s-f);if(!t.length)return{median:null,p95:null,stddev:null};const a=s=>{const f=(t.length-1)*s,l=Math.floor(f),h=f-l;return t[l]*(1-h)+t[Math.min(l+1,t.length-1)]*h},c=t.reduce((s,f)=>Math.max(s,Math.abs(f)),0),i=t.map(s=>c?s/c:0),r=i.reduce((s,f)=>s+f/t.length,0),d=Math.sqrt(i.reduce((s,f)=>s+(f-r)**2/t.length,0))*c;return{median:a(.5),p95:a(.95),stddev:Number.isFinite(d)?d:null}}function wt(e){if(!Number.isSafeInteger(e?.frame)||!Number.isSafeInteger(e?.prediction_origin_frame)||!Number.isFinite(e?.fps)||e.fps<=0||e.prediction_type==="extrapolation"&&e.frame<=e.prediction_origin_frame)return null;const t=(e.frame-e.prediction_origin_frame)/e.fps;return Number.isFinite(t)?t:null}const Bc={length:"m",speed:"m/s",inverseTime:"1/s",degrees:"degrees",fraction:"fraction",dimensionless:"dimensionless"};function xc(e,t={}){return e.flatMap(a=>xa.filter(c=>c.group===a||c.group==="both"&&a!=="elevation").flatMap(c=>{const i=c.unitKind==="length"?t.sdf??"m":c.unitKind==="speed"?t.velocity??"m/s":c.unitKind==="inverseTime"&&t.velocity&&t.velocity!=="m/s"?`(${t.velocity}) / length`:Bc[c.unitKind],r={group:a,key:c.id,label:c.label,unit:i,direction:c.direction};return c.id==="componentMae"||c.id==="componentRmse"?["x","y","z"].map((d,s)=>({...r,id:`${a}.${c.id}.${d}`,index:s,label:`${c.id==="componentMae"?"Component MAE":"Component RMSE"} ${d.toUpperCase()}`})):[{...r,id:`${a}.${c.id}`}]}))}function Sc({metrics:e,frames:t=[],expectedFrames:a=[],groups:c=[],status:i,units:r,frameSplit:d,frameSubset:s="all"}){const f=Object.values(e?.settings?.sdf||{}).some(B=>B?.semantics==="water_interior"),l=f?"gt_water_common_distance_support":e?.settings?.sdfEvaluationRegion||"full_domain",h=xc(c,r).map(B=>({...B,label:B.label+(f&&B.group==="sdf"?["fluidIoU","dice","signAccuracy","symmetricMeanSurfaceDistance","hd95"].includes(B.key)?" (full domain)":" (conditional GT-water support)":"")+(l==="gt_water"&&B.group==="sdf"?["fluidIoU","dice","symmetricMeanSurfaceDistance","hd95"].includes(B.key)?" (full domain)":" (GT water)":"")})),m=new Set(t),w=[...a,...t,...Object.keys(e?.frames||{}).map(Number),...e?.missingPredictionFrames||[]],g=new Map((d?.rows??[]).map(B=>[B.frame,B])),o=[...new Set(w.filter(Number.isInteger))].sort((B,p)=>B-p).filter(B=>sc(g,B,s)),b=o.map(B=>{const p=e?.frames?.[B],E={};for(const u of h){const I=p?.[u.group],k=I?.[u.key],O=u.index===void 0?k:k?.[u.index];E[u.id]=!I?.blocked&&Number.isFinite(O)?O:null}const _=c.filter(u=>u!=="elevation"&&p?.[u]?.blocked).map(u=>`${u}: ${p[u].reason||"Scoring blocked"}`).join("; "),x=g.get(B);return{frame:B,elevationAudit:p?.elevation??null,algorithmVersion:e?.algorithmVersion??"legacy undeclared",split:qn(g,B),predictionType:wa(g,B),predictionOriginFrame:x?.prediction_origin_frame??null,fps:x?.fps??null,horizonSeconds:wt(x),available:m.has(B),calculated:!!p,reason:_,values:E}}),v=h.map(B=>{const p=b.map(x=>x.values[B.id]).filter(Number.isFinite),E=p.length,_=E?p.reduce((x,u)=>x+u/E,0):null;return{...B,mean:_,...wc(p),minimum:E?p.reduce((x,u)=>Math.min(x,u)):null,maximum:E?p.reduce((x,u)=>Math.max(x,u)):null,valid:E,excluded:b.length-E,total:b.length}}),S=[...new Set(o.flatMap(B=>c.filter(p=>p!=="elevation").flatMap(p=>e?.frames?.[B]?.[p]?.blocked?[`${p.toUpperCase()}: ${e.frames[B][p].reason||"Scoring prerequisites not met"}`]:[])))];return{columns:h,rows:b,summary:v,blockedReasons:S,evaluationRegion:l,frameSubset:s,sdfValidation:e?.settings?.sdf||{},total:b.length,calculated:b.filter(B=>B.calculated).length,complete:i==="ready"&&b.length>0&&b.every(B=>B.calculated)&&!S.length,status:i}}function ve(e){return Number.isFinite(e)?Number(e.toPrecision(6)).toString():"N/A"}const Ac=e=>{const t=e==null?"N/A":String(e);return/[",\r\n]/.test(t)?`"${t.replaceAll('"','""')}"`:t};function tt(e,t){const a=e.complete?"complete":"partial",c=t==="frames"?[["frame","frame_status","sequence_status",...e.columns.map(i=>`${i.id} [${i.unit}]`),"excluded_reason"],...e.rows.map(i=>[i.frame,i.reason?"scoring blocked":i.calculated?"calculated":"not calculated",a,...e.columns.map(r=>i.values[r.id]),i.reason||""])]:[["metric","unit","mean","minimum","maximum","valid_frames","excluded_frames","total_frames","sequence_status","median","p95","stddev"],...e.summary.map(i=>[i.id,i.unit,i.mean,i.minimum,i.maximum,i.valid,i.excluded,i.total,a,i.median,i.p95,i.stddev])];return t==="frames"&&(c[0].push("split","prediction_type","prediction_origin_frame","fps","horizon_seconds"),c.slice(1).forEach((i,r)=>i.push(e.rows[r].split||"unassigned",e.rows[r].predictionType||"unassigned",e.rows[r].predictionOriginFrame,e.rows[r].fps,e.rows[r].horizonSeconds))),t==="frames"&&(c[0].push("algorithm_version","elevation_valid_columns","elevation_gt_valid_columns","elevation_candidate_columns","elevation_reason","elevation_excluded_reasons"),c.slice(1).forEach((i,r)=>{const d=e.rows[r],s=d.elevationAudit;i.push(d.algorithmVersion,s?.validColumns,s?.gtValidColumns,s?.candidateColumns,s?.reason||(s?"":"Not calculated by this result version"),JSON.stringify(s?.excludedReasons??{}))})),c[0].push("frame_subset"),c.slice(1).forEach(i=>i.push(e.frameSubset||"all")),c[0].push("sdf_error_region","geometry_region"),c.slice(1).forEach(i=>i.push(e.evaluationRegion||"full_domain","full_domain")),c[0].push("gt_validation_mode","prediction_validation_mode","gt_override_reason","prediction_override_reason"),c.slice(1).forEach(i=>i.push(e.sdfValidation?.gt?.validationMode||"legacy undeclared",e.sdfValidation?.prediction?.validationMode||"legacy undeclared",e.sdfValidation?.gt?.overrideReason||"",e.sdfValidation?.prediction?.overrideReason||"")),c.map(i=>i.map(Ac).join(",")).join(`\r
`)}function kc(e,t,a=640){const i=e.filter(b=>Number.isFinite(b.values[t])).map(b=>b.values[t]);let r=i.length?Math.min(...i):0,d=i.length?Math.max(...i):1;if(r===d){const b=Math.max(Math.abs(r)*.05,1e-6);r-=b,d+=b}const s=e[0]?.frame??0,f=e.at(-1)?.frame??s,l=b=>f===s?(a+42)/2:64+(b-s)/(f-s)*(a-86),h=b=>180-(b-r)/(d-r)*150,m=[],w=[];let g=[],o=null;for(const b of e){const v=b.values[t];if((!Number.isFinite(v)||o!==null&&b.frame!==o+1)&&(g.length&&m.push(g),g=[]),Number.isFinite(v)){const S={frame:b.frame,value:v,x:l(b.frame),y:h(v)};g.push(S),w.push(S)}o=b.frame}return g.length&&m.push(g),{min:r,max:d,start:s,end:f,x:l,y:h,points:w,segments:m}}function Cc(e,t,a=.9){const c=e.filter(r=>Number.isFinite(r.values[t?.id]));return{worst:t?.direction==="Context"?[]:[...c].sort((r,d)=>(t?.direction==="Higher"?1:-1)*(r.values[t.id]-d.values[t.id])||r.frame-d.frame).slice(0,5),lowCoverage:e.filter(r=>Number.isFinite(r.values[`${t?.group}.coverage`])&&r.values[`${t.group}.coverage`]<a),unavailable:e.filter(r=>!Number.isFinite(r.values[t?.id]))}}const Ic=e=>`"${String(e??"undeclared").replaceAll('"','""')}"`;function Nc(e,t,a){const c=[["report_identifier",t],["frame_subset",e.frameSubset],["frame_numbers",e.rows.map(i=>i.frame).join(";")],["frame_count",e.rows.length],["status",e.complete?"complete":"partial"],["sdf_error_region",e.evaluationRegion],["units",JSON.stringify(e.columns.map(i=>({metric:i.id,unit:i.unit})))],["sdf_declarations",JSON.stringify(e.sdfValidation)],["split_manifest_sha256",a?.sha256],["aggregation","Equal weight per valid frame; mean of frame RMSE, not pooled voxel RMSE. N/A excluded, never zero."],["valid_counts",JSON.stringify(e.summary.map(i=>({metric:i.id,valid:i.valid,total:i.total})))],["limitations","SDF error is not wave-height error. Read error with coverage. Frame numbers do not certify physical-time alignment. Split membership is declared, not independently verified. Exterior-filled distances are conditional, not full-domain accuracy."],["provenance","Use the saved-result ZIP for source identities and full scoring protocol. This notes file describes the currently selected report subset."]];return[["field","value"],...c].map(i=>i.map(Ic).join(",")).join(`\r
`)}function Rc({report:e,metric:t,onFrame:a,onDownload:c,comparisonId:i,frameSplit:r}){const{language:d,tr:s}=be(),f=d==="zh",l=(o,b)=>f?b:o,[h,m]=y.useState(.9),w=y.useMemo(()=>Cc(e.rows,t,h),[e.rows,t,h]),g=(o,b)=>o.slice(0,20).map(v=>n.createElement("li",{key:v.frame},n.createElement("button",{disabled:!v.available||!a,"aria-label":`${b==="unavailable"?"Review unavailable frame":b==="coverage"?"Review coverage frame":"Review frame"} ${v.frame}`,onClick:()=>a(v.frame)},v.frame)," · ",ve(b==="coverage"?v.values[`${t?.group}.coverage`]:v.values[t?.id]),b==="unavailable"&&n.createElement("span",null," · ",v.reason||(v.calculated?l("Metric unavailable on this support; see definitions below","该指标在当前有效区域不可用，请查看下方定义"):l("Not calculated / missing frame","尚未计算或帧缺失")))));return n.createElement("details",{className:"frame-review"},n.createElement("summary",null,l("Frame review & report notes","异常帧检查与报告说明")),n.createElement("p",null,l("Review only: no frames are removed and no scores are changed. Lists follow the selected subset and metric. Worst does not mean statistically abnormal.","仅供检查：不剔除帧、不改变数值。列表跟随当前集合和指标；最差帧不等同于统计异常。")),n.createElement("div",{className:"frame-review-grid"},n.createElement("section",null,n.createElement("h4",null,l("Worst 5 frames","表现最差的 5 帧")," · ",s(t?.label)),w.worst.length?n.createElement("ol",null,g(w.worst,"worst")):n.createElement("p",null,l("No rankable finite values. Coverage is context, not accuracy.","没有可排序的有效数值；覆盖率是背景信息，不代表精度。"))),n.createElement("section",null,n.createElement("h4",null,l("Low coverage","低覆盖率")," · ",w.lowCoverage.length),n.createElement("label",null,l("Review threshold","检查阈值")," ",n.createElement("input",{"aria-label":"Coverage review threshold",type:"number",min:"0",max:"1",step:"0.05",value:h,onChange:o=>{const b=Number(o.target.value);o.target.value!==""&&Number.isFinite(b)&&b>=0&&b<=1&&m(b)}})),n.createElement("small",null,l("Below this fraction; review aid, not a scientific pass/fail criterion.","低于此比例时列出；仅辅助检查，不是科研合格线。")),n.createElement("ul",null,g(w.lowCoverage,"coverage"))),n.createElement("section",null,n.createElement("h4",null,l("Unavailable metric","指标不可用")," · ",w.unavailable.length),n.createElement("ul",null,g(w.unavailable,"unavailable")),n.createElement("small",null,l("At most 20 entries per list; all values remain in the frame table and CSV.","每个列表最多显示 20 项，全部数据仍保留在逐帧表格和 CSV。")))),n.createElement("details",null,n.createElement("summary",null,l("How to interpret these results","如何解读这些结果")),n.createElement("ul",null,n.createElement("li",null,l("N/A is not zero: it may mean missing frames, blocked scoring, no valid samples, or an unsupported metric. The list gives known blocking reasons; metric definitions explain other restrictions.","N/A 不是零：可能是缺帧、计算被阻止、无有效样本或指标不适用。列表显示已知阻止原因，其余限制见指标定义。")),n.createElement("li",null,l("A lower error with lower coverage is not automatically better. Compare models on matching frames and common spatial support.","误差更低但覆盖率更低，不自动代表更好。模型比较应使用匹配帧和共同有效空间区域。")),n.createElement("li",null,l("Exterior-filled SDF supports conditional interior distance errors only; it does not certify full-domain distance accuracy. Surface metrics may be unavailable.","水外固定填值的 SDF 只支持有条件的水内距离误差，不能证明全域距离精度；表面指标可能不可用。")),n.createElement("li",null,l("SDF MAE is not wave-height MAE. Sequence means give equal weight to valid frames, not to pooled voxels.","SDF MAE 不等于浪高 MAE。序列均值对有效帧等权，并非将所有体素合并计算。")))),n.createElement("button",{disabled:!e.total,onClick:()=>c(`${i}_${e.frameSubset}_report_notes.csv`,Nc(e,i,r))},l("Export report notes CSV","导出报告说明 CSV")))}function Mc({point:e,row:t,selected:a,onFrame:c,language:i}){const r=!!(c&&t?.available),d=t?.predictionType||"unassigned",s={train:"#b66b14",validation:"#8052bc",test:"#008c9c",unassigned:"#7b8794"}[t?.split||"unassigned"];return n.createElement("g",{transform:`translate(${e.x},${e.y})`,role:"button","aria-label":`${i==="zh"?"选择曲线帧":"Select plotted frame"} ${e.frame}`,"aria-disabled":!r,tabIndex:r?0:-1,onClick:()=>r&&c(e.frame),onKeyDown:f=>{r&&["Enter"," "].includes(f.key)&&(f.preventDefault(),c(e.frame))},style:{cursor:r?"pointer":"default"}},n.createElement("title",null,`Frame ${e.frame}: ${e.value} | ${t?.split||"unassigned"} | ${d}`),n.createElement("circle",{r:"7",fill:"transparent"}),a&&n.createElement("circle",{r:"7",fill:"none",stroke:"#d36218",strokeWidth:"2"}),d==="anchor"?n.createElement("rect",{x:"-4",y:"-4",width:"8",height:"8",fill:s}):d==="extrapolation"?n.createElement("path",{d:"M 0 -5 L 5 4 L -5 4 Z",fill:s}):d==="interpolation"?n.createElement("path",{d:"M 0 -5 L 5 0 L 0 5 L -5 0 Z",fill:s}):n.createElement("circle",{r:"3",fill:s}))}function Oc({rows:e,metricKey:t,manifest:a,modelName:c}){const{language:i}=be(),r=i==="zh",d=new Map;let s=0;const f=new Map((a?.rows??[]).map(l=>[l.frame,l]));for(const l of e){const h=f.get(l.frame);if(h?.prediction_type!=="extrapolation")continue;const m=wt(h);if(m===null){s++;continue}const w=`${h.prediction_origin_frame} / ${h.fps} fps`;d.has(w)||d.set(w,[]),d.get(w).push({frame:l.frame,seconds:m,value:l.values[t]})}return!d.size&&!s?null:n.createElement("details",null,n.createElement("summary",null,c&&`${c} · `,r?"未来外推时间趋势":"Future prediction horizon"),n.createElement("p",null,r?"按声明的输入起点和 FPS 分图；缺失帧不连线，不合并不同预测。":"Separate plots for declared origin and FPS; missing frames are not connected and different predictions are not merged."),s>0&&n.createElement("p",null,r?`${s} 帧缺少有效时间声明，仍使用上方帧号曲线。`:`${s} frame(s) without valid timing; retain the frame-number plot above.`),[...d].map(([l,h])=>{const m=h.filter(S=>Number.isFinite(S.value)),w=Math.max(1,...h.map(S=>S.seconds)),g=m.length?Math.min(...m.map(S=>S.value)):0,o=m.length?Math.max(...m.map(S=>S.value)):1,b=S=>50+S.seconds/w*510,v=S=>160-(S.value-g)/(o-g||1)*120;return n.createElement("figure",{key:l},n.createElement("figcaption",null,r?"预测起点":"Prediction origin"," ",l," · ",t),n.createElement("svg",{role:"img","aria-label":`Prediction horizon ${l}`,viewBox:"0 0 600 200",width:"100%"},n.createElement("line",{x1:"50",x2:"560",y1:"160",y2:"160",stroke:"#a9bac8"}),h.map((S,B)=>{const p=h[B-1];return Number.isFinite(S.value)&&n.createElement("g",{key:S.frame},p&&S.frame===p.frame+1&&Number.isFinite(p.value)&&n.createElement("line",{x1:b(p),y1:v(p),x2:b(S),y2:v(S),stroke:"#008c9c"}),n.createElement("circle",{cx:b(S),cy:v(S),r:"4",fill:"#008c9c"},n.createElement("title",null,S.frame,": ",ve(S.value),"; ",ve(S.seconds)," s")))}),n.createElement("text",{x:"8",y:"40"},ve(o)),n.createElement("text",{x:"8",y:"160"},ve(g)),n.createElement("text",{x:"50",y:"186"},"0"),n.createElement("text",{x:"500",y:"186"},ve(w)," s")))}))}const Tc={missing_or_nonfinite_column:["missing or non-finite column","缺失或非有限数值列"],no_interior_to_exterior_span:["no trustworthy interior-to-exterior span","缺少可信的水内至水外跨度"],ambiguous_or_multiple_crossings:["ambiguous or multiple surfaces","交叉不明确或存在多层水面"],crossing_touches_truncation:["crossing touches truncation boundary","交叉接触截断边界"],nonfinite_height:["non-finite height","高度不是有限数值"],nonfinite_difference:["non-finite height difference","高度差不是有限数值"],outside_common_columns:["outside common column support","不在共同有效列内"]},$c={"No paired trustworthy single-surface columns":"没有可配对的可信单层水面列。","Invalid world-Y lattice":"世界 Y 轴网格无效。","Invalid height input dimensions":"高度输入维度无效。","Height column grids differ":"高度列网格不一致。","Height requires full SDF or trusted TSDF; filled exterior/unknown is not a trustworthy zero crossing":"需要完整 SDF 或可信 TSDF；水外填值或类型未知无法提供可信零交叉。","Height requires validated unchanged SDF distances":"需要经验证且未重建的 SDF 距离。","Height requires axis-aligned world-Y-up lattice":"需要与世界坐标轴对齐、Y 轴向上的网格。","Height requires a comparison with matching declared units":"需要 GT 与预测的声明单位一致。","Height requires finite positive trusted truncation distance":"需要有限、正值且可信的截断距离。"};function Fc({data:e}){const{language:t}=be(),a=t==="zh",c=i=>{const[r,...d]=i.split(":"),s=d.length?d.join(":"):r;return(d.length?r==="gt"?"GT: ":r==="prediction"?a?"预测：":"Prediction: ":r+": ":"")+(Tc[s]?.[a?1:0]??s)};return n.createElement("details",null,n.createElement("summary",null,a?"当前帧高度有效区域与排除原因":"Current-frame height support and exclusions"),e?n.createElement(n.Fragment,null,e.reason&&n.createElement("p",null,a?$c[e.reason]??e.reason:e.reason),e.blocked&&n.createElement("p",null,a?"此帧高度评分不可用；不能把未评估数量当作零。":"Height scoring unavailable for this frame; unevaluated counts are not zero."),n.createElement("table",{"aria-label":a?"高度有效区域明细":"Height support audit"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,a?"项目／原因":"Support / reason"),n.createElement("th",null,a?"列数":"Columns"))),n.createElement("tbody",null,[[a?"有效配对列":"Valid paired columns","validColumns"],[a?"GT 有效列":"Valid GT columns","gtValidColumns"],[a?"候选水平列":"Candidate horizontal columns","candidateColumns"]].map(([i,r])=>n.createElement("tr",{key:r},n.createElement("th",{scope:"row"},i),n.createElement("td",null,e.blocked||!Number.isFinite(e[r])?"N/A":e[r]))),Object.entries(e.excludedReasons??{}).map(([i,r])=>n.createElement("tr",{key:i},n.createElement("th",{scope:"row"},c(i)),n.createElement("td",null,Number.isFinite(r)?r:"N/A"))))),n.createElement("p",null,a?"配对覆盖率＝配对列／GT 有效列；GT 可重建比例＝GT 有效列／候选列。排除原因不代表模型排名。":"Paired coverage = paired / valid GT columns; GT reconstructible fraction = valid GT / candidate columns. Exclusions are not model rankings.")):n.createElement("p",null,a?"此帧没有高度记录。旧结果需重新创建比较；尚未载入的帧请先选择。":"No height record for this frame. Create a new comparison for legacy results, or select a loaded frame."))}function Pc(e,t){const a=URL.createObjectURL(new Blob(["\uFEFF",t],{type:"text/csv;charset=utf-8"})),c=document.createElement("a");c.href=a,c.download=e,c.click(),setTimeout(()=>URL.revokeObjectURL(a),1e3)}const Dc=[];function Zc({metrics:e,frames:t,expectedFrames:a=Dc,groups:c,group:i,status:r,currentFrame:d,onFrame:s,onDownload:f=Pc,comparisonId:l="comparison",sdfUnit:h="m",velocityUnit:m="m/s",onReviewSetup:w,frameSplit:g}){const{tr:o,language:b}=be(),[v,S]=y.useState(()=>g?"test":"all"),B=Object.values(e?.frames||{}).some(N=>N.elevation),p=y.useMemo(()=>B?[...c,"elevation"]:c,[c,B]),[E,_]=y.useState(""),x=p.includes(E)?E:i;y.useEffect(()=>_(""),[i]),y.useEffect(()=>S(g?"test":"all"),[g?.sha256,!!g]);const u=y.useMemo(()=>Sc({metrics:e,frames:t,expectedFrames:a,groups:p,status:r,units:{sdf:h,velocity:m},frameSplit:g,frameSubset:v}),[e,t,a,p,r,h,m,g,v]),I=u.columns.filter(N=>N.group===x),k=u.summary.filter(N=>N.group===x),[O,M]=y.useState(""),[$,C]=y.useState(0),[D,P]=y.useState(640),Z=y.useRef(null),F=I.find(N=>N.id===O)||I[0];y.useEffect(()=>{if(typeof ResizeObserver>"u")return;const N=new ResizeObserver(([Y])=>P(Math.max(280,Math.round(Y.contentRect.width))));return N.observe(Z.current),()=>N.disconnect()},[]);const R=y.useMemo(()=>kc(u.rows,F?.id,D),[u.rows,F?.id,D]),G=Math.max(1,Math.ceil(u.rows.length/50)),ne=Math.min($,G-1),U=u.rows.slice(ne*50,(ne+1)*50),se=y.useMemo(()=>new Map(u.rows.map(N=>[N.frame,N])),[u.rows]),ce=se.get(d),V=u.summary.find(N=>N.id===F?.id);return n.createElement("section",{className:"sequence-metrics",ref:Z,"aria-label":o("Sequence loss analysis")},n.createElement("h2",null,o("Per-frame metrics & sequence averages")),n.createElement("label",null,b==="zh"?"统计组":"Statistics group"," ",n.createElement("select",{"aria-label":"Statistics group",value:x,onChange:N=>_(N.target.value)},p.map(N=>n.createElement("option",{key:N,value:N},N==="elevation"?b==="zh"?"水面高度":"Water-surface elevation":N.toUpperCase())))),x==="elevation"&&n.createElement("p",null,b==="zh"?"世界 Y 水面高度，不是波峰—波谷浪高或 Hs。固定填值、缺失支持和多层水面不可用于此评分。":"World-Y elevation, not crest-to-trough wave height or Hs. Filled exterior, missing support and multiple surfaces cannot be scored."),x==="elevation"&&n.createElement(Fc,{data:e?.frames?.[d]?.elevation}),n.createElement("p",{className:"research-warning"},v==="test"||v.startsWith("test_")?b==="zh"?"Test 报告：仅汇总清单声明的测试帧。":"Test report: only declared test frames are summarized.":v==="train"?b==="zh"?"Train 报告：训练帧表现，不代表未见数据的泛化效果。":"Train report: training-frame performance, not generalization to unseen data.":b==="zh"?"参考报告：不是独立的 Test 结果。":"Reference report: not a Test-only evaluation."," ",b==="zh"?"划分依据训练方清单，不独立核验训练历史。":"Membership follows the supplied manifest; training history is not independently verified."),n.createElement("div",{className:"frame-split-toolbar"},n.createElement("label",null,b==="zh"?"统计帧集合":"Evaluation subset"," ",n.createElement("select",{"aria-label":"Evaluation subset",value:v,onChange:N=>{S(N.target.value),C(0)}},Object.entries({all:b==="zh"?"全部（参考）":"All",train:"Train",validation:"Validation",test:"Test",...dc(b==="zh"),unassigned:b==="zh"?"未划分":"Unassigned"}).map(([N,Y])=>n.createElement("option",{key:N,value:N},Y)))),n.createElement("small",null,b==="zh"?"仅筛选曲线、统计表和下方 CSV；不改变原始计算或动画。":"Filters curves, tables and the CSVs below; original calculations and playback are unchanged.")),u.total===0&&n.createElement("p",{role:"status"},b==="zh"?"此集合没有已声明的帧；不补零，也不使用其他集合替代。":"No declared frames in this subset; no zeros or fallback to another subset."),n.createElement("p",null,o("SDF error region: "),n.createElement("strong",null,u.evaluationRegion==="gt_water_common_distance_support"?o("Conditional GT-water distance support"):u.evaluationRegion==="gt_water"?o("GT water only (GT SDF < 0)"):o("Full domain (valid pairs)")),o(". Occupancy and surface metrics use their own saved validity rules; they are not certified by the distance mask. Velocity metrics unchanged.")),n.createElement("p",{className:"sequence-partial",role:"status"},u.blockedReasons.length?o("Scoring blocked"):u.complete?b==="zh"?"帧记录处理完成":"Processing complete":o("Partial results")," · ",u.calculated," / ",u.total,o(" frame records processed"),r==="error"?o(" · Processing stopped"):""),n.createElement("p",{role:"status"},u.total?V?.valid?b==="zh"?`所选指标有效帧：${V.valid} / ${u.total}；排除 ${V.excluded} 帧。`:`Selected metric valid frames: ${V.valid} / ${u.total}; ${V.excluded} excluded.`:b==="zh"?"所选指标不可用：没有有效数值。处理完成不代表评分有效。":"Selected metric unavailable: no valid values. Completed processing does not imply valid scoring.":b==="zh"?"当前集合为空。":"Selected subset is empty."),u.blockedReasons.length>0&&n.createElement("div",{className:"error",role:"alert"},n.createElement("strong",null,o("No valid loss can be reported for blocked fields.")),u.blockedReasons.map(N=>n.createElement("p",{key:N},o(N))),n.createElement("p",null,o("Review units and SDF type in Datasets & comparison setup, then click Create comparison again. Old results do not change when declarations are edited. Unit confirmation declares the source scale; it does not convert data.")),w&&n.createElement("button",{onClick:w},o("Review scoring setup"))),n.createElement("p",null,o("Equal weight per valid frame. N/A is excluded, never zero. RMSE and P95 averages are means of frame metrics, not pooled-voxel metrics. No combined training loss.")),n.createElement("div",{className:"sequence-toolbar"},n.createElement("label",null,o("Metric curve"),n.createElement("select",{"aria-label":o("Metric curve"),value:F?.id||"",onChange:N=>M(N.target.value)},I.map(N=>n.createElement("option",{key:N.id,value:N.id},o(N.label))))),n.createElement("span",null,o("Unit: "),o(F?.unit)," · ",F?.direction==="Context"?o("Context metric"):o(F?.direction)+" "+o("is better"))),n.createElement("div",{className:"sequence-readout"},o("Frame "),d??"—",": ",n.createElement("strong",null,ve(ce?.values[F?.id])),o(" · Sequence mean: "),n.createElement("strong",null,ve(V?.mean)),o(" · Valid: "),V?.valid??0," / ",u.total),n.createElement(Rc,{report:u,metric:F,onFrame:s,onDownload:f,comparisonId:l,frameSplit:g}),n.createElement("p",null,b==="zh"?"对应覆盖率（所选帧均值）":"Associated coverage (selected-frame mean)",": ",ve(u.summary.find(N=>N.id===`${x}.coverage`)?.mean),x==="elevation"&&n.createElement(n.Fragment,null," · ",b==="zh"?"GT 可重建比例":"GT reconstructible fraction",": ",ve(u.summary.find(N=>N.id==="elevation.gtCoverage")?.mean))),n.createElement(Oc,{rows:u.rows,metricKey:F?.id,manifest:g}),n.createElement("svg",{width:"100%",height:"220",viewBox:`0 0 ${D} 220`,role:"img","aria-label":`${F?.label} over frames; ${o(F?.unit)}`},[R.min,(R.min+R.max)/2,R.max].map((N,Y)=>n.createElement("g",{key:Y},n.createElement("line",{x1:"64",x2:D-22,y1:R.y(N),y2:R.y(N),stroke:"#d7e1eb",strokeWidth:".75"}),n.createElement("text",{x:"57",y:R.y(N)+4,textAnchor:"end"},ve(N)))),Number.isFinite(V?.mean)&&n.createElement("line",{x1:"64",x2:D-22,y1:R.y(V.mean),y2:R.y(V.mean),stroke:"#7a8797",strokeDasharray:"5 4"}),R.segments.map((N,Y)=>n.createElement("polyline",{key:Y,points:N.map(K=>`${K.x},${K.y}`).join(" "),fill:"none",stroke:"#008c9c",strokeWidth:"2"})),R.points.map(N=>n.createElement(Mc,{key:N.frame,point:N,row:se.get(N.frame),selected:N.frame===d,onFrame:s,language:b})),Number.isFinite(d)&&n.createElement("line",{x1:R.x(d),x2:R.x(d),y1:"25",y2:"185",stroke:"#d36218",strokeDasharray:"3 3"}),n.createElement("text",{x:"64",y:"205"},R.start),R.end!==R.start&&n.createElement("text",{x:D-22,y:"205",textAnchor:"end"},R.end),n.createElement("text",{x:D/2,y:"205",textAnchor:"middle"},o("Frame"))),n.createElement("small",null,b==="zh"?"颜色：训练橙 / 验证紫 / 测试青 / 未划分灰。形状：Anchor 方形 / 插值菱形 / 外推三角 / 未声明圆点。橙圈为当前帧，灰虚线为均值；缺失值不连线。":"Color: Train amber / Validation purple / Test teal / Unassigned gray. Shape: Anchor square / Interpolation diamond / Future extrapolation triangle / Undeclared circle. Orange ring: displayed frame; gray dashed line: mean. Missing values are not connected."),n.createElement("div",{className:"sequence-detail-tables"},n.createElement("h3",null,x==="elevation"?b==="zh"?"水面高度":"Elevation":o(x==="sdf"?"SDF":"Velocity"),o(" sequence summary")),n.createElement("p",null,b==="zh"?"中位数、P95 和总体标准差描述所选帧的分布，不代表统计显著性。":"Median, P95 and population standard deviation describe selected frames, not statistical significance."),n.createElement("div",{className:"sequence-table-scroll",tabIndex:"0",role:"region","aria-label":o("Scrollable sequence summary")},n.createElement("table",{"aria-label":o("Sequence metric summary")},n.createElement("thead",null,n.createElement("tr",null,["Metric","Unit","Mean",b==="zh"?"中位数":"Median","P95",b==="zh"?"总体标准差":"Population std. dev.","Minimum","Maximum","Valid / total","Excluded"].map(N=>n.createElement("th",{key:N},o(N))))),n.createElement("tbody",null,k.map(N=>n.createElement("tr",{key:N.id},n.createElement("th",{scope:"row"},o(N.label)),n.createElement("td",null,o(N.unit)),[N.mean,N.median,N.p95,N.stddev,N.minimum,N.maximum].map((Y,K)=>n.createElement("td",{key:K,title:Y==null?"N/A":String(Y)},ve(Y))),n.createElement("td",null,N.valid," / ",N.total),n.createElement("td",null,N.excluded)))))),n.createElement("h3",null,x==="elevation"?b==="zh"?"水面高度":"Elevation":o(x==="sdf"?"SDF":"Velocity"),o(" per-frame values")),n.createElement("div",{className:"sequence-toolbar"},n.createElement("button",{disabled:ne===0,onClick:()=>C(ne-1)},o("Previous rows")),n.createElement("span",null,o("Page "),ne+1," / ",G,o(" · 50 frames per page")),n.createElement("button",{disabled:ne+1>=G,onClick:()=>C(ne+1)},o("Next rows")),n.createElement("button",{onClick:()=>{const N=u.rows.findIndex(Y=>Y.frame===d);N>=0&&C(Math.floor(N/50))}},o("Show current row"))),n.createElement("div",{className:"sequence-table-scroll",tabIndex:"0",role:"region","aria-label":o("Scrollable per-frame metrics")},n.createElement("table",{"aria-label":o("Per-frame metric values")},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,o("Frame")),n.createElement("th",null,b==="zh"?"所属集合":"Split"),I.map(N=>n.createElement("th",{key:N.id},o(N.label),n.createElement("small",null,N.unit))))),n.createElement("tbody",null,U.map(N=>n.createElement("tr",{key:N.frame,className:N.frame===d?"selected-frame":""},n.createElement("th",{scope:"row"},n.createElement("button",{"aria-label":`Go to frame ${N.frame}`,"aria-current":N.frame===d?"true":void 0,disabled:!N.available,onClick:()=>s(N.frame)},N.frame),!N.calculated&&n.createElement("small",null,o("Not calculated"))),n.createElement("td",null,n.createElement(Ba,{manifest:g,frame:N.frame})),I.map(Y=>n.createElement("td",{key:Y.id,title:N.values[Y.id]==null?"N/A":String(N.values[Y.id])},ve(N.values[Y.id])))))))),n.createElement("div",{className:"sequence-toolbar"},n.createElement("button",{disabled:!e||!u.total,onClick:()=>f(`${l}_${v}_frames.csv`,tt(u,"frames"))},v==="all"?o("Export all frames CSV"):b==="zh"?"导出当前集合 CSV":"Export subset CSV"),n.createElement("button",{disabled:!e||!u.total,onClick:()=>f(`${l}_${v}_sequence_summary.csv`,tt(u,"summary"))},o("Export sequence summary CSV")),n.createElement("small",null,b==="zh"?`两个场组 · 当前集合 ${v} 的所有帧（不限本页） · 完整精度`:`Both field groups · all ${v} frames (not only this page) · full numeric precision`))))}function Xc({group:e="sdf"}){const{tr:t}=be();function a(){const c=URL.createObjectURL(new Blob([JSON.stringify(Ec(),null,2)],{type:"application/json"})),i=document.createElement("a");i.href=c,i.download="OceanScope_metric_definitions.json",i.click(),setTimeout(()=>URL.revokeObjectURL(c),1e3)}return n.createElement("details",{className:"loss-definitions"},n.createElement("summary",null,t("Evaluation Metrics / Loss Definitions")),n.createElement("p",null,t("g = Ground Truth; p = Prediction. Evaluation metrics, not a weighted training loss.")),n.createElement("p",null,t("Display quality never changes numerical metrics. Units follow dataset declarations; declaring units does not convert data.")),xa.filter(c=>c.group===e||c.group==="both"&&e!=="elevation").map(c=>n.createElement("article",{key:c.id},n.createElement("strong",null,t(c.label)),n.createElement("code",null,c.formula),n.createElement("small",null,t(c.direction),t(" is better"),c.direction==="Context"?t(" (interpret with error)"):""," · ",t(c.unitKind)),n.createElement("p",null,t(c.domain)," ",t(c.caveats)))),n.createElement("p",null,t("Sequence statistics give equal weight to each valid frame, not each voxel. Missing values are excluded; valid/excluded frame counts are reported.")),n.createElement("button",{onClick:a},t("Export metric definitions")))}function Wc({lattice:e,comparison:t}){const{tr:a}=be();return n.createElement("details",{className:"alignment-report"},n.createElement("summary",null,a("Alignment and provenance")),n.createElement("dl",null,n.createElement("div",null,n.createElement("dt",null,a("Comparison")),n.createElement("dd",null,t?.id||"—")),n.createElement("div",null,n.createElement("dt",null,a("Canonical lattice")),n.createElement("dd",null,e?.dimensions?.join(" × ")||"—",a(" voxels"))),n.createElement("div",null,n.createElement("dt",null,a("Voxel size")),n.createElement("dd",null,e?.voxelSize?.map(c=>Number(c).toPrecision(4)).join(" × ")||"—")),n.createElement("div",null,n.createElement("dt",null,a("Policy")),n.createElement("dd",null,a("Prediction sampled in world space onto Ground Truth voxel centres.")))))}function Vc(e){return`${e.labels?.prediction?.exportStem||"prediction"}_${e.runId||e.id}`.replace(/[<>:"/\\|?*\x00-\x1f]/g,"_").slice(0,125)}function zc({frame:e,lattice:t,settings:a,plane:c,sliceIndex:i,angle:r=30,sectionPercent:d=50,rotationAxis:s="y"}){const f=p=>({status:"unavailable",reason:p});if(c==="oblique"&&s!=="y")return f("tilted");if(a?.previewOnly)return f("single");if(["gt","prediction"].some(p=>a?.sdf?.[p]?.semantics!=="full"))return f("semantics");const l=a?.heightComparison;if(l?.surfaceValidated!==!0||l?.negativeInside!==!0||l?.upAxis!=="Y"||l?.coordinateUnit!=="m"||l?.frameTimeAligned!==!0)return f("declaration");if(["gt","prediction"].some(p=>a.sdf[p].unit!=="m"))return f("units");if(!["xy","yz","oblique"].includes(c))return f("plane");const h=t?.dimensions,m=t?.axisSteps,w=t?.origin;if(!h||h.length!==3||h.some(p=>!Number.isInteger(p)||p<2)||!w||w.length!==3||w.some(p=>!Number.isFinite(p))||!m||m.length!==3||m.some((p,E)=>p.length!==3||p.some((_,x)=>!Number.isFinite(_)||(E===x?_<=0:Math.abs(_)>1e-12))))return f("lattice");const g=e?.groups?.sdf?.ground_truth,o=e?.groups?.sdf?.prediction;if([g,o].some(p=>!p||!Array.isArray(p.shape)||p.shape.length!==3||p.shape.some((E,_)=>E!==h[_])||p.values?.length!==h[0]*h[1]*h[2]||p.mask&&p.mask.values?.length!==p.values.length))return f("fields");if(c==="oblique"){const p=va(t,r,d);if(!p)return f("lattice");const E=_=>p.degenerate?[]:Array.from({length:p.width},(x,u)=>{let I=null,k=null;for(let O=p.height-1;O>=0;O--){const M=e0(_,t,p.point(u,O));if(M===null||O===p.height-1&&M<=0)break;if(k!==null&&k>0&&M<=0){I=w[1]+m[1][1]*(O+-M/(k-M));break}k=M}return[p.range[0]+(p.range[1]-p.range[0])*u/(p.width-1),I]});return{status:"ready",axis:"oblique",angle:r,offset:p.offset,result:Qa(E(g),E(o))}}const b=c==="xy"?2:0,v=c==="xy"?0:2;if(!Number.isInteger(i)||i<0||i>=h[b])return f("lattice");const S=(p,E,_)=>p+h[0]*(E+h[1]*_);function B(p){return Array.from({length:h[v]},(E,_)=>{const x=c==="xy"?_:i,u=c==="xy"?i:_;let I=null,k=null;for(let O=h[1]-1;O>=0;O--){const M=S(x,O,u),$=p.values[M];if(!Number.isFinite($)||p.mask&&!p.mask.values[M]||O===h[1]-1&&$<=0)break;if(k!==null&&k>0&&$<=0){I=w[1]+m[1][1]*(O+-$/(k-$));break}k=$}return[w[v]+m[v][v]*_,I]})}return{status:"ready",axis:v===0?"x":"z",offset:w[b]+m[b][b]*i,result:Qa(B(g),B(o))}}const ct={tilted:["倾斜截面用于场值与结构分析。高度比较请切换 XY、YZ 或绕 Y 的竖直斜切。","Tilted sections show field values and structure. For height comparison use XY, YZ or a vertical Y-axis section."],semantics:["当前预测含水外填充值，不能把填值边界当作可信水面。保留原有 SDF 切片和条件性距离指标。","The prediction has a filled or undeclared exterior; filled boundaries cannot establish a trustworthy water surface. SDF slices and conditional distance scores remain available."],declaration:["还需明确水面有效性、Y 向上、米制坐标、内负外正和帧时间对齐，才能启用高度比较。","Height comparison requires explicit surface validity, Y-up metre coordinates, negative-inside signs and aligned frame times."],units:["两组 SDF 的单位需要明确为米。","Both SDF units must be declared in metres."],plane:["请选择 XY 或 YZ 竖直切面以提取高度曲线。XZ 是水平切面。","Select a vertical XY or YZ section. XZ is horizontal."],lattice:["此坐标网格尚不满足高度采样条件。","This lattice does not meet height-sampling requirements."],fields:["当前帧缺少完整、相互对应的两组 SDF。","This frame lacks complete, matching SDF fields."]};function Gc({frame:e,lattice:t,comparison:a,plane:c,sliceIndex:i,angle:r=30,sectionPercent:d=50,rotationAxis:s="y",frameNumber:f,busy:l}){const{language:h}=be(),m=h==="zh",w=y.useMemo(()=>l?null:zc({frame:e,lattice:t,settings:a.settings,plane:c,sliceIndex:i,angle:r,sectionPercent:d,rotationAxis:s}),[l,e,t,a.settings,c,i,r,d,s]);return w?.status==="ready"?n.createElement(A0,{result:w.result,axis:w.axis,kind:"sdf",labels:{a:a.labels?.gt?.displayName,b:a.labels?.prediction?.displayName},metadata:{kind:"validated_sdf_height",dataset_a:a.groundTruthId,dataset_b:a.predictionId,frame:f,...Z0(w.axis,w.offset,r),reference_y_m:0,meters_per_unit:1,sampling:c==="oblique"?"uppermost_valid_zero_crossing_trilinear_columns":"uppermost_valid_zero_crossing_linear",time_alignment:"declared_aligned"}}):n.createElement("section",{className:"height-unavailable","aria-label":m?"水面高度比较适用性":"Surface-height eligibility"},n.createElement("h2",null,m?"水面高度比较":"Surface-height comparison"," · ",l?m?"加载中":"Loading":m?"不可用":"Unavailable"),n.createElement("p",null,l?m?"等待当前帧加载完成。":"Waiting for the current frame.":(ct[w?.reason]||ct.fields)[m?0:1]))}const Zn=[["heightMae","Height MAE","高度 MAE","m"],["breakingMae","Breaking-region MAE","破碎区 MAE","m"],["amplitudeSlope","Amplitude slope","振幅斜率",""],["velocityRelativeL2","Underwater relative L2","水下速度相对误差",""],["velocityMedianCosine","Median direction cosine","方向余弦中位数",""]];function Yc(e){const t=["frame",...Zn.map(r=>r[0]),"heightRmse","heightBias","pairedColumns","gtColumns","pairedCoverage","breakingColumns","velocityVoxels","velocityGtEligibleVoxels","velocityCoverage","angularExcludedCount","heightErrorPercent","breakingErrorPercent"],a=r=>r==null?"":`"${String(r).replaceAll('"','""')}"`,c=["protocol_version","unit_convention","height_rule","velocity_rule","aggregation","status"],i=[e.version,e.units,e.height,e.velocity,e.aggregation,e.status];return[[...t,...c].map(a).join(","),...Object.entries(e.frames).map(([r,d])=>[...t.map(s=>s==="frame"?r:d[s]),...i].map(a).join(","))].join(`\r
`)}function it(e,t=!1){let a=1/0,c=-1/0;for(const i of e)if(i)for(let r=0;r<i.values.length;r++){const d=i.values[r];!Number.isFinite(d)||i.mask&&!i.mask.values[r]||(a=Math.min(a,d),c=Math.max(c,d))}if(!Number.isFinite(a))return t?[-1,1]:[0,1];if(t){const i=Math.max(Math.abs(a),Math.abs(c),1e-8);return[-i,i]}return a===c?[a-.01,c+.01]:[a,c]}function Bt(e,t){return e&&(!e.mask||e.mask.values[t])&&Number.isFinite(e.values[t])?e.values[t]:null}function Lc(e,t,a){const c=["ground_truth","prediction","error"].map(s=>e.groups.height[s]),[i,,r]=c[0].shape,d=["frame,x_m,z_m,gt_height_m,prediction_height_m,prediction_minus_gt_m,gt_valid,prediction_valid,paired_valid"];for(let s=0;s<r;s++)for(let f=0;f<i;f++){const l=f+i*s,h=c.map(m=>Bt(m,l));d.push([a,t.origin[0]+f*t.axisSteps[0][0],t.origin[2]+s*t.axisSteps[2][2],...h.map(m=>m??""),...h.map(m=>m===null?0:1)].join(","))}return d.join(`\r
`)}const _e=(e,t=4)=>Number.isFinite(e)?e.toFixed(t):"—",rt=e=>Number.isFinite(e)?`${(100*e).toFixed(2)}%`:"—";function qc({protocol:e,frame:t,lattice:a,frameNumber:c,busy:i,onFrame:r}){const{language:d}=be(),s=d==="zh",[f,l]=y.useState([.5,.5]);y.useEffect(()=>l([.5,.5]),[c]);const h=y.useMemo(()=>["ground_truth","prediction","error"].map(E=>t?.groups.height?.[E]),[t]),m=y.useMemo(()=>[it(h.slice(0,2)),it([h[2]],!0)],[h]);if(!e)return null;const w=e.frames[String(c)],g=!i&&w&&h.every(Boolean),o=h[0]?.shape[0]||1,b=h[0]?.shape[2]||1,v=Math.min(o-1,Math.floor(f[0]*o)),S=Math.min(b-1,Math.floor(f[1]*b)),B=v+o*S,p=["A · Gentle GT","B · Best_1027",s?"B − A · 高度差":"B − A · Height difference"];return n.createElement("section",{className:"reconstruction-analysis","aria-label":s?"Best_1027 重建评估":"Best_1027 reconstruction evaluation","aria-busy":i},n.createElement("div",{className:"reconstruction-heading"},n.createElement("div",null,n.createElement("span",{className:"reconstruction-eyebrow"},"BEST_1027 · ",s?"三帧对比":"THREE-FRAME PILOT"),n.createElement("h2",null,s?"水面高度与水下速度":"Surface height & underwater velocity")),n.createElement("span",{className:"reconstruction-frame"},s?"帧":"Frame"," ",g?c:"…")),n.createElement("p",null,s?"当前结果覆盖 1001、1049、1096 三帧，采用下方明确记录的计算规则。不是完整 96 帧评分，也未划分 Test 集。长度和速度沿用 v2 的 m、m/s 模拟尺度约定。":"Frames 1001, 1049 and 1096 only, under the explicit protocol below. Not a full 96-frame or Test-set score. Length and velocity inherit the v2 m / m/s simulation convention."),g?n.createElement(n.Fragment,null,n.createElement("div",{className:"reconstruction-cards"},Zn.map(([E,_,x,u])=>n.createElement("div",{key:E},n.createElement("span",null,s?x:_),n.createElement("strong",null,_e(w[E])," ",n.createElement("small",null,u))))),n.createElement("p",{className:"reconstruction-support"},s?"高度共同有效列":"Paired height columns"," ",n.createElement("strong",null,w.pairedColumns.toLocaleString()," / ",w.gtColumns.toLocaleString())," (",rt(w.pairedCoverage),") · ",s?"水下速度覆盖率":"Underwater velocity coverage"," ",n.createElement("strong",null,rt(w.velocityCoverage))," · ",s?"方向计算排除低速点":"Low-speed directional exclusions"," ",w.angularExcludedCount),n.createElement("div",{className:"reconstruction-maps"},h.map((E,_)=>n.createElement("figure",{key:p[_],"aria-label":p[_]},n.createElement("figcaption",null,p[_]),n.createElement(vt,{slice:{width:o,height:b,values:E.values},maskSlice:E.mask,range:m[_===2?1:0],palette:_===2?"error":"ground-truth",plane:"xz",aspect:o/b,crosshair:f,onCrosshair:l}),n.createElement("div",{className:`reconstruction-scale ${_===2?"difference":""}`},n.createElement("span",null,_e(m[_===2?1:0][0],3)," m"),n.createElement("span",null,_e(m[_===2?1:0][1],3)," m")),n.createElement("small",null,s?"选点":"Probe",": ",_e(Bt(E,B))," m")))),n.createElement("p",{className:"reconstruction-caption"},"X → · Z ↑ · X [",_e(a.origin[0],2),", ",_e(a.origin[0]+(o-1)*a.axisSteps[0][0],2),"] m · Z [",_e(a.origin[2],2),", ",_e(a.origin[2]+(b-1)*a.axisSteps[2][2],2),"] m",n.createElement("br",null),s?"俯视图使用 0.05 m 网格；A/B 同色标，误差红色表示预测偏高，蓝色表示偏低；斜纹为无效区域。点击任一图联动选点。":"Top-down 0.05 m grid. A/B share a scale; red means prediction higher, blue lower. Hatched cells are invalid. Click a map for a shared probe."," · X=",_e(a.origin[0]+v*a.axisSteps[0][0],3),", Z=",_e(a.origin[2]+S*a.axisSteps[2][2],3))):n.createElement("p",{role:"status"},s?"等待当前帧加载完成；不显示上一帧的指标。":"Waiting for this frame; previous-frame scores are hidden."),n.createElement("div",{className:"reconstruction-table-wrap"},n.createElement("table",{"aria-label":s?"三帧重建指标":"Three-frame reconstruction metrics"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null,s?"帧":"Frame"),Zn.map(([E,_,x,u])=>n.createElement("th",{key:E},s?x:_,u&&` (${u})`)))),n.createElement("tbody",null,Object.entries(e.frames).map(([E,_])=>n.createElement("tr",{key:E,"aria-current":g&&Number(E)===c?"true":void 0},n.createElement("td",null,n.createElement("button",{disabled:i,onClick:()=>r(Number(E))},E)),Zn.map(([x])=>n.createElement("td",{key:x},_e(_[x])))))))),n.createElement("p",null,s?"三帧合并：振幅斜率":"Pooled pilot: amplitude slope"," ",n.createElement("strong",null,_e(e.pooled.amplitudeSlope))," · ",s?"速度相对误差":"velocity relative L2"," ",n.createElement("strong",null,_e(e.pooled.velocityRelativeL2))," · ",s?"方向余弦中位数":"median direction cosine"," ",n.createElement("strong",null,_e(e.pooled.velocityMedianCosine)),n.createElement("br",null),n.createElement("small",null,s?"合并分子与分母后求比值；方向指标使用全部有效方向余弦的中位数，不是逐帧数值的平均。振幅斜率以 1 为匹配参考，速度相对误差越小越好，方向余弦越接近 1 越好。":"Ratios use pooled sums; direction uses the median of all eligible cosines, not frame averages. Amplitude reference: 1. Lower relative error and cosine closer to 1 are preferable.")),n.createElement("details",{className:"reconstruction-protocol"},n.createElement("summary",null,s?"本次计算规则与未计算项":"Evaluation protocol & unavailable metrics"),n.createElement("ul",null,n.createElement("li",null,s?"高度：沿 Y 提取内负外正的线性过零位置；排除多层水面和上方缺失支撑，仅比较双方共同有效列。":e.height),n.createElement("li",null,s?"破碎区：在共同有效高度列中选择 X > −0.3 m。当前显示绝对误差（m），R 未定义，因此不显示归一化百分比。":e.breaking+" R is undefined: absolute metres only, no normalized percentages."),n.createElement("li",null,s?"振幅：每帧在同一共同有效区域分别去均值，再计算 Σ(h̃GT·h̃预测) / Σ(h̃GT²)。":e.amplitude),n.createElement("li",null,s?"水下速度：从原网格索引 0 开始，每两个格点取一个，得到 0.1 m 网格；采用 GT 水面下至少 10 cm 且双方 SDF/速度都有效的区域。方向中位数排除任一速度 ≤ 10⁻⁸ m/s 的点。":e.velocity),n.createElement("li",null,s?"右侧和下方通用场指标仍基于原生 0.05 m 网格及其共同有效域，与这里的水下筛选指标分开。":"Generic volume metrics use native 0.05 m common support, separate from the underwater protocol here."),n.createElement("li",null,s?"沿用 v2 的米制、Y 向上和同帧配对约定；新文件本身未独立声明物理单位。读取器报告 VDB 225/224 格式兼容提示，这些是初步参考结果。":e.units+" "+e.reader),n.createElement("li",null,s?"尚未计算：归一化高度/破碎区百分比、各波长增益、独立 M1 基线。缺失项目不以零代替。":e.unavailable.join("; ")))),n.createElement("div",{className:"reconstruction-actions"},n.createElement("button",{onClick:()=>ca("Best_1027_pilot_metrics.csv","\uFEFF"+Yc(e),"text/csv;charset=utf-8")},s?"下载三帧指标 CSV":"Pilot metrics CSV"),n.createElement("button",{onClick:()=>ca("Best_1027_evaluation_protocol.json",JSON.stringify(e,null,2))},s?"下载指标与规则 JSON":"Metrics & protocol JSON"),n.createElement("button",{disabled:!g,onClick:()=>ca(`Best_1027_${c}_height_map.csv`,"\uFEFF"+Lc(t,a,c),"text/csv;charset=utf-8")},s?"下载当前高度图 CSV":"Current height map CSV")))}const Vn="oceanscope.field-view.v1",xt="oceanscope.bookmarks.v2.field",J=e=>{throw Error(e)},Pn=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),$e=(e,t=-1e9,a=1e9)=>typeof e=="number"&&Number.isFinite(e)&&e>=t&&e<=a,st=(e,t=-1e9,a=1e9)=>Array.isArray(e)&&e.length===2&&e.every(c=>$e(c,t,a));function St(e){const t=e.comparison,a=e.processing.lattice;return JSON.stringify({comparison:t.id,gt:t.groundTruthId,prediction:t.settings?.previewOnly?null:t.predictionId,groups:t.availableGroups,settings:t.settings,lattice:{dimensions:a.dimensions,origin:a.origin,axisSteps:a.axisSteps},directory:e.fieldDirectory,frames:e.processing.frames.map(c=>c.frame)})}function Ke(e,t){(!Pn(e)||e.schema!==Vn)&&J("format"),(typeof e.name!="string"||!e.name.trim()||e.name.trim().length>80)&&J("name");const a=e.settings;Pn(a)||J("settings"),a.representation!==void 0&&a.representation!==Cn&&J("settings"),a.representation===Cn&&a.group!=="sdf"&&J("group"),(typeof a.caseId!="string"||!a.caseId||a.caseId.length>100||typeof e.sourceSignature!="string"||e.sourceSignature.length>1e5)&&J("dataset"),(!Number.isInteger(a.frame)||!$e(a.frame,0,1e7))&&J("frame"),(!["sdf","velocity"].includes(a.group)||!["split","overlay","wire-overlay","gt","prediction"].includes(a.mode)||!["balanced","fine"].includes(a.quality)||!["magnitude","x","y","z"].includes(a.component))&&J("settings"),(!["xy","xz","yz","oblique"].includes(a.plane)||!Number.isInteger(a.sliceIndex)||!$e(a.sliceIndex,0,1e7)||!$e(a.angle,0,180)||!$e(a.sectionPercent,0,100))&&J("section");for(const r of["showPlane","showContext","showGt","showPrediction"])typeof a[r]!="boolean"&&J("settings");(!$e(a.gtOpacity,.1,1)||!$e(a.predictionOpacity,.1,1)||!Number.isInteger(a.vectorDensity)||!$e(a.vectorDensity,1,2e4)||!$e(a.arrowScale,.001,1e6))&&J("settings"),a.sourceRange!==null&&(!st(a.sourceRange)||a.sourceRange[1]<=a.sourceRange[0])&&J("color"),(!Pn(a.errorScale)||typeof a.errorScale.locked!="boolean"||!$e(a.errorScale.limit,1e-6,1e9))&&J("color"),st(a.crosshair,0,1)||J("probe"),(!Pn(a.playback)||typeof a.playback.loop!="boolean"||![.25,.5,1,2].includes(a.playback.speed)||!$e(a.playback.fps,1,120))&&J("settings");const c=C0(a.region,2),i=I0(e.camera);if((i.near===null||i.far===null)&&J("camera"),t){const r=t.find(f=>f.id===a.caseId);r||J("dataset"),e.sourceSignature!==St(r)&&J("source"),(a.representation===Cn?!Ln(r).includes(a.frame):!r.processing.frames.some(f=>f.frame===a.frame))&&J("frame"),(!r.comparison.availableGroups.includes(a.group)||a.showContext&&!r.comparison.availableGroups.includes("sdf"))&&J("group"),r.comparison.settings?.previewOnly&&(a.mode!=="gt"||a.showPrediction||c)&&J("single");const d=r.processing.lattice,s=a.plane==="xy"||a.plane==="oblique"?2:a.plane==="yz"?0:1;(a.sliceIndex>=d.dimensions[s]||a.plane==="oblique"&&!ua(d))&&J("section")}return{schema:Vn,name:e.name.trim(),sourceSignature:e.sourceSignature,settings:{...a.representation?{representation:a.representation}:{},...R0(a.rotationAxis),...N0(a.shading),caseId:a.caseId,frame:a.frame,group:a.group,mode:a.mode,quality:a.quality,component:a.component,plane:a.plane,sliceIndex:a.sliceIndex,angle:a.angle,sectionPercent:a.sectionPercent,showPlane:a.showPlane,showContext:a.showContext,showGt:a.showGt,showPrediction:a.showPrediction,gtOpacity:a.gtOpacity,predictionOpacity:a.predictionOpacity,vectorDensity:a.vectorDensity,arrowScale:a.arrowScale,sourceRange:a.sourceRange?[...a.sourceRange]:null,errorScale:{locked:a.errorScale.locked,limit:a.errorScale.limit},crosshair:[...a.crosshair],...c?{region:c}:{},playback:{speed:a.playback.speed,loop:a.playback.loop,fps:a.playback.fps}},camera:i}}function Uc(e,t){new TextEncoder().encode(e).length>M0&&J("size");let a;try{a=JSON.parse(e)}catch{J("json")}return Ke(a,t)}function jc(e){let t;try{t=e.getItem(xt)}catch{J("storage")}if(t===null)return[];try{const a=JSON.parse(t),c=new Set;return(a.schema!=="oceanscope.field-library.v1"||!Array.isArray(a.items)||a.items.length>_t)&&J("library"),a.items.map(i=>((typeof i.id!="string"||!i.id||c.has(i.id))&&J("library"),c.add(i.id),{id:i.id,...Ke(i)}))}catch{J("library")}}function Jc(e,t){t.length>_t&&J("limit");const a=new Set,c=t.map(i=>((typeof i.id!="string"||!i.id||a.has(i.id))&&J("library"),a.add(i.id),{id:i.id,...Ke(i)}));try{e.setItem(xt,JSON.stringify({schema:"oceanscope.field-library.v1",items:c}))}catch{J("storage")}}const dt={...k0,format:["请使用场比较方案 JSON；水面方案、指标和数据说明文件不能作为场方案导入。","Use a field-view JSON. Wave views, metrics and data-info files cannot be imported as field views."],dataset:["当前样例中找不到方案指定的数据。","The saved dataset is not available in the current samples."],source:["样例身份、网格或单位声明已改变，未应用旧方案。","Dataset identity, grid or unit declarations changed; the old view was not applied."],group:["当前样例不提供方案指定的 SDF 或速度场。","This sample does not provide the saved SDF or velocity group."],section:["切片索引或斜切参数超出当前网格范围。","The slice index or oblique settings are outside the current grid."],single:["单组 GT 方案不能包含预测显示或双组模式。","A single GT view cannot use prediction layers or paired display modes."],probe:["切片探针位置必须在 0–100% 范围内。","The slice probe must stay within 0–100%."],color:["色标范围无效；请检查上下限。","Invalid color range; check its limits."],size:["文件超过 2 MB，请选择场比较方案 JSON。","File exceeds 2 MB; select a field-view JSON."],load:["场方案恢复未完成，数据或三维视图加载失败。请检查页面提示后重试。","Field view restoration failed while loading data or 3D. Check the page message and try again."]};function Hc(e,t){return dt[e.message]?.[t?0:1]||dt.load[t?0:1]}const oa=Array.from({length:96},(e,t)=>1001+t),ot=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function At(e){if(typeof e=="number"&&!Number.isFinite(e))throw Error("Nonfinite evaluation value");e&&typeof e=="object"&&Object.values(e).forEach(At)}function Kc(e,t){if(e?.schemaVersion!==1||e.status!=="complete"||!e.runId)throw Error("Incomplete evaluation bundle");if(e.protocol?.sourceScriptSha256!==t.protocolSha256||e.datasetA?.id!==t.datasetA||e.datasetB?.id!==t.datasetB||e.datasetA?.manifestSha256!==t.manifestA||e.datasetB?.manifestSha256!==t.manifestB)throw Error("Evaluation source or protocol mismatch");if(!ot(e.frameIds,oa)||!ot(e.rows?.map(a=>a.frame),oa))throw Error("Evaluation frame coverage mismatch");if(!Array.isArray(e.geometryFrames)||new Set(e.geometryFrames).size!==e.geometryFrames.length||e.geometryFrames.some(a=>!oa.includes(a)))throw Error("Invalid geometry frame identity");At(e);for(const a of e.rows){if(!Number.isFinite(a.height?.mae_m)||!Number.isFinite(a.height?.bias_m)||!Number.isInteger(a.height?.common)||a.height.common<=0)throw Error("Missing height metric");for(const c of["fine","coarse"]){const i=a.velocity?.[c];if(!Number.isFinite(i?.rel_rmse)||!Number.isInteger(i?.voxels)||i.voxels<=0)throw Error("Missing velocity metric")}}return structuredClone(e)}function Qc(e,t){const a=e.rows.find(c=>c.frame===t);if(!a)throw Error("Frame outside evaluation");return{frame:t,row:a,geometryAvailable:e.geometryFrames.includes(t)}}function kt(){let e=0;return{async run(t){const a=++e;try{const c=await t();return a===e?c:null}catch(c){if(a===e)throw c;return null}},cancel(){e++}}}async function zn(e){const t=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e));return[...new Uint8Array(t)].map(a=>a.toString(16).padStart(2,"0")).join("")}function ei(e){return{caseId:e.id,comparisonId:e.comparison.id,gtId:e.comparison.groundTruthId,predictionId:e.comparison.predictionId,geometryFrames:e.processing.frames.map(t=>t.frame),lattice:e.processing.lattice}}function ue(e){return Array.isArray(e)?"["+e.map(ue).join(",")+"]":e&&typeof e=="object"?"{"+Object.keys(e).sort().map(t=>JSON.stringify(t)+":"+ue(e[t])).join(",")+"}":JSON.stringify(e)}async function ni(e,t,a){if(await zn(e)!==t.sha256)throw Error("Reference result checksum mismatch");const c=Kc(JSON.parse(e),t);if(ue(c.caseBinding)!==ue(ei(a)))throw Error("Reference result does not match the selected dataset pair or geometry");return c}function Ct(e,t){if(new TextEncoder().encode(e).length>1024*1024)throw Error("Result selection file too large");const a=JSON.parse(e);if(a?.schemaVersion!==1||a.runId!==t.runId||ue(a.protocol)!==ue(t.protocol)||ue(a.datasetA)!==ue(t.datasetA)||ue(a.datasetB)!==ue(t.datasetB))throw Error("Saved result identity does not match this run");if(!t.frameIds.includes(a.frame)||!["all","six"].includes(a.subset)||!["height","velocity"].includes(a.metric))throw Error("Invalid result selection");return{frame:a.frame,subset:a.subset,metric:a.metric}}const ai=[1007,1023,1039,1057,1073,1089],ti=[["mae_m","Height MAE","高度 MAE","m","pooled common columns"],["mae_pct","Height MAE / R","高度 MAE / R","% R","pooled common columns"],["bias_pct","Signed height bias / R","有符号高度偏差 / R","% R","pooled common columns"],["steep_pct","Steep-column MAE / R","陡坡列 MAE / R","% R","GT slope top 15%, per frame"],["calm_cells_pct","Non-steep-column MAE / R","非陡坡列 MAE / R","% R","remaining GT slope columns"],["breaking_band_pct","Breaking-band MAE / R","破浪带 MAE / R","% R","strict -0.30 < X < 1.10"],["calm_band_pct","Calm-band MAE / R","平静带 MAE / R","% R","strict -7.90 < X < -1.50"],["amplitude_slope","Amplitude slope","振幅斜率","ratio","pooled after per-frame demeaning"],["correlation","Height correlation","高度相关系数","ratio","pooled after per-frame demeaning"],["flicker_pct","Adjacent-frame error change / R","相邻帧误差变化 / R","% R","adjacent pairs, no time-step division"],["gt_range_m","Observed GT height range","观测 GT 高度范围","m","GT max minus min over all frames"],["pct_relative_to_m","Normalization reference R","归一化参考 R","m","fixed protocol parameter"]],ci=[["rel_rmse","Relative RMSE — pooled","相对 RMSE — 全体素汇总","ratio","sqrt(sum error energy / sum GT energy)"],["rel_rmse_frame_mean","Relative RMSE — frame mean","相对 RMSE — 逐帧平均","ratio","arithmetic mean of frame relative RMSE"],["cos_median","Direction cosine median","方向余弦中位数","ratio","median over all selected voxels, not mean of frame medians"],["speed_ratio","Mean speed ratio B / GT","平均速度比 B / GT","ratio","mean |B| / mean |GT|"],["vec_mae","Vector MAE","矢量 MAE","source velocity unit","mean norm of vector error"],["gt_mean_speed","GT mean speed","GT 平均速度","source velocity unit","mean norm of GT velocity"]];function It(e,{subset:t="all",grid:a="coarse",frame:c=e.frameIds[0]}={}){if(!["all","six"].includes(t)||!["fine","coarse"].includes(a)||!e.frameIds.includes(c))throw Error("Invalid metric selection");const i=[],r=e.frameIds,d=e.summary.height,s={runId:e.runId,protocolSha256:e.protocol.sourceScriptSha256,manifestA:e.datasetA.manifestSha256,manifestB:e.datasetB.manifestSha256};function f(b,v,S,B,p,E,_,x,u=null,I="defined by frozen protocol",k="",O=null){const M=Number.isFinite(B)&&!k;i.push({id:b,label:v,labelZh:S,value:M?B:null,unit:p,aggregation:E,scope:_,frameIds:[...x],validCount:u,countStatus:u==null?"not recorded in frozen result":"recorded",status:M?"available":"unavailable",reason:k||(M?"":"Value not recorded or nonfinite in source"),denominator:{formula:I,value:O},source:s})}for(const[b,v,S,B,p]of ti){let E="",_=["mae_m","mae_pct","bias_pct"].includes(b)?d.cells_scored:null;d.cells_scored===0&&!["gt_range_m","pct_relative_to_m"].includes(b)&&(E="No common support"),b==="flicker_pct"&&(r.length<2||r.some((x,u)=>u>0&&x!==r[u-1]+1))&&(E="Requires consecutive adjacent frames"),f("height."+b,v,S,d[b],B,p,"sequence height: all evaluated frames",r,_,B==="% R"?"reference range R":"metric-specific support",E,B==="% R"?d.pct_relative_to_m:null)}for(const b of["gain","coherence"])for(const v of[.3,.6,1.2,2.4,4.8])f(`height.${b}.${v}`,`${b} · λ ${v} m`,`${b==="gain"?"增益":"相干度"} · λ ${v} m`,d[b]?.[String(v)],"ratio","pooled DoG band sums; common support and wider-filter weight > 0.7","sequence height: all evaluated frames",r,null,b==="gain"?"GT band energy":"GT band energy × prediction band energy",d.cells_scored===0?"No common support":"");f("footprint_iou","Wet-column footprint IoU","有水列范围 IoU",e.summary.footprint_iou,"ratio","pooled intersection / union","sequence wet columns",r,null,"wet-column union"),f("volume.iou","Water volume IoU","水体素 IoU",e.summary.volume?.iou,"ratio","pooled intersection / union","sequence water voxels (sdf < 0 and valid)",r,null,"water-voxel union"),f("volume.rec_over_gt","Water volume B / GT","水体积比 B / GT",e.summary.volume?.rec_over_gt,"ratio","pooled B volume / GT volume","sequence water voxels (sdf < 0 and valid)",r,null,"GT water-voxel count");const l=t==="all"?r:ai,h=e.summary.velocity[t==="all"?"all_frames":"velocity_net_6_frames"],m=h?.[a==="fine"?"grid_0.05m":"grid_0.1m"],w=e.rows.filter(b=>l.includes(b.frame)),g=w.map(b=>b.velocity?.[a]?.gtEnergy),o=g.length===l.length&&g.every(Number.isFinite)?g.reduce((b,v)=>b+v,0):null;for(const[b,v,S,B,p]of ci){let E=m?.voxels===0?"No valid velocity support":"";b.startsWith("rel_rmse")&&(o===0||b==="rel_rmse_frame_mean"&&g.some(_=>_===0))&&(E="Zero GT energy makes relative RMSE undefined"),(!h||JSON.stringify(h.frames)!==JSON.stringify(l))&&(E="Frame set does not match archived aggregate"),f("velocity."+b,v,S,m?.[b],B,p,`${t==="all"?"all evaluated frames":"fixed six frames (not train/test split)"}; ${a==="fine"?"native 0.05 XYZ":"XZ 2×2 average, Y unchanged (~0.10 / 0.05 / 0.10)"}`,l,m?.voxels??null,b.startsWith("rel_rmse")?"GT velocity energy":"valid velocity support",E,b==="rel_rmse"?o:null)}return i}function ii(e){const t=["id","value","status","reason","unit","scope","aggregation","frameIds","validCount","countStatus","denominator","source"],a=c=>'"'+String(c==null?"":typeof c=="object"?JSON.stringify(c):c).replaceAll('"','""')+'"';return[t.join(","),...e.map(c=>t.map(i=>a(c[i])).join(","))].join(`
`)}function ri({bundle:e,subset:t,frame:a,zh:c,onDownload:i,selectedGrid:r,onGrid:d}){const[s,f]=y.useState("coarse"),l=r??s;function h(w){f(w),d?.(w)}const m=y.useMemo(()=>It(e,{subset:t,grid:l,frame:a}),[e,t,l,a]);return n.createElement("details",{className:"complete-metrics"},n.createElement("summary",null,c?"完整指标 · 范围、网格与聚合":"Complete metrics · scope, grid and aggregation"),n.createElement("p",null,c?"高度与体积保持全96帧；上方帧集合只切换速度汇总。固定六帧不是训练/测试划分。缺失计数表示原件未记录，不推测或补零。":"Height and volume retain all96 frames; the frame-set selector changes velocity aggregates only. Fixed six is not a train/test split. Missing counts were not recorded, never inferred or filled with zero."),n.createElement("label",null,c?"速度网格":"Velocity grid"," ",n.createElement("select",{"aria-label":"Reference detail grid",value:l,onChange:w=>h(w.target.value)},n.createElement("option",{value:"coarse"},c?"粗网格 · XZ 2×2 / Y不变":"Coarse · XZ 2×2 / unchanged Y"),n.createElement("option",{value:"fine"},c?"细网格 · 原生0.05":"Fine · native0.05"))),n.createElement("div",{className:"metric-table-scroll"},n.createElement("table",{"aria-label":"Complete protocol metrics"},n.createElement("thead",null,n.createElement("tr",null,(c?["指标","数值","单位","范围 / 聚合","有效计数"]:["Metric","Value","Unit","Scope / aggregation","Valid count"]).map(w=>n.createElement("th",{key:w},w)))),n.createElement("tbody",null,m.map(w=>n.createElement("tr",{key:w.id},n.createElement("th",{scope:"row"},c?w.labelZh:w.label),n.createElement("td",null,w.value==null?"—":w.value.toPrecision(8),w.status!=="available"&&n.createElement("small",null,w.reason)),n.createElement("td",null,w.unit),n.createElement("td",null,n.createElement("small",null,w.scope,n.createElement("br",null),w.aggregation)),n.createElement("td",null,w.validCount==null?c?"原件未记录":"Not recorded":w.validCount.toLocaleString())))))),n.createElement("p",null,c?"速度有效域：GT vel_valid、GT sdf < −0.10、预测vel_valid；Z[11:105] / X[11:212]，粗网格须四格全有效。Breaking严格−0.30<X<1.10；calm band与非陡坡列不同。":"Velocity support: GT vel_valid, GT sdf < −0.10, prediction vel_valid; Z[11:105] / X[11:212], all four coarse cells valid. Breaking strictly −0.30<X<1.10; calm band differs from non-steep columns."),n.createElement("button",{onClick:()=>i(`${e.runId}_${t}_${l}_complete-metrics.csv`,ii(m),"text/csv")},c?"导出完整指标 CSV":"Export complete metrics CSV"))}function si({declarations:e,zh:t}){const a=c=>({claimed:t?"来源声明":"Source declaration",verified:t?"已核验":"Verified",unknown:t?"未知":"Unknown"})[c];return n.createElement("details",{className:"complete-metrics"},n.createElement("summary",null,t?"实验条件与证据来源":"Experiment conditions and evidence"),e?n.createElement(n.Fragment,null,n.createElement("p",null,t?"“已核验”仅覆盖注明的原始文件身份；相机、模型、单位和测试划分仍按原始材料声明，不能等同独立训练审计。":"Verified labels cover the stated original-file identities. Camera, model, units and test split remain source declarations, not an independent training audit."),n.createElement("dl",{className:"experiment-declarations"},e.entries.map(c=>n.createElement("div",{key:c.id},n.createElement("dt",null,t?c.labelZh:c.label," ",n.createElement("span",null,a(c.status))),n.createElement("dd",null,c.value==null?"—":typeof c.value=="object"?JSON.stringify(c.value):String(c.value),c.note&&n.createElement("small",null,c.note.replace(/collaborator/gi,"Source")),c.source&&n.createElement("small",null,c.source.file," · SHA256 ",c.source.sha256))))),n.createElement("p",null,t?"直接比较要求相同GT、协议、帧集合、有效域和单位；不同相机/模型可以作为实验变量，但必须显示差异。":"Direct comparison requires the same GT, protocol, frame set, support and units. Camera/model differences may be experimental variables but must be disclosed.")):n.createElement("p",{role:"status"},t?"声明尚未核验，不能推断实验条件。":"Declarations not yet verified; conditions cannot be inferred."))}const lt=[1007,1023,1039,1057,1073,1089],Ye=e=>Number.isFinite(e)?e.toFixed(6):"—";function di({bundle:e,frame:t,onFrame:a,onDownload:c,reportSelection:i,onReportSelection:r,unifiedRestore:d=!1,displayGeometryFrames:s=e.geometryFrames}){const{language:f}=be(),l=f==="zh",[h,m]=y.useState("all"),[w,g]=y.useState("height"),o=i?.subset??h,b=i?.metric??w;function v(R){m(R),r?.(G=>({...G,subset:R}))}function S(R){g(R),r?.(G=>({...G,metric:R}))}const[B,p]=y.useState(""),E=y.useRef(kt());y.useEffect(()=>(E.current.cancel(),()=>E.current.cancel()),[t,e]);function _(R){E.current.cancel(),a(R)}async function x(R){if(E.current.cancel(),!!R)try{if(R.size>1024*1024)throw Error("Result selection file too large");const G=await E.current.run(async()=>Ct(await R.text(),e));G&&(v(G.subset),S(G.metric),a(G.frame),p(l?"已恢复相同结果的帧与集合；指标仍来自已核验结果包。":"Restored frame and subset; metrics remain from the verified bundle."))}catch(G){p(G.message)}}const u=Qc(e,t??e.frameIds[0]),I={...u,geometryAvailable:s.includes(u.frame)},k=e.rows.filter(R=>o==="all"||lt.includes(R.frame)),O=e.summary.velocity[o==="all"?"all_frames":"velocity_net_6_frames"]["grid_0.1m"],M=o==="all"?l?"全96帧 · 粗网格":"All96 frames · Coarse grid":l?"固定六帧 · 粗网格":"Fixed six frames · Coarse grid",$=R=>b==="height"?R.height.mae_m*100:R.velocity.coarse.rel_rmse,C=Math.max(...k.map($),1e-9),D=R=>42+(R-1001)/95*836,P=R=>155-R/C*125;function Z(){return{schemaVersion:1,runId:e.runId,protocol:e.protocol,datasetA:e.datasetA,datasetB:e.datasetB,frame:I.frame,selectedFrame:I.row,subset:o,metric:b,unitStatus:e.unitStatus,geometryAvailable:I.geometryAvailable,summaryScope:"height: all96; velocity: selected subset",summary:{height:e.summary.height,velocity:O},rows:k}}function F(){return["run_id,protocol_id,subset,frame,height_mae_m,height_bias_m,common_columns,coarse_rel_rmse,coarse_valid_voxels,geometry_available",...k.map(R=>[e.runId,e.protocol.id,o,R.frame,R.height.mae_m,R.height.bias_m,R.height.common,R.velocity.coarse.rel_rmse,R.velocity.coarse.voxels,s.includes(R.frame)].join(","))].join(`
`)}return n.createElement("section",{className:"reference-evaluation","aria-label":l?"原始96帧协议结果":"Raw 96-frame protocol results"},n.createElement("header",null,n.createElement("div",null,n.createElement("span",{className:"reference-eyebrow"},"RAW VDB · 96 / 96"),n.createElement("h2",null,l?"Gentle → Best_1027 · 序列评估":"Gentle → Best_1027 · Sequence evaluation")),n.createElement("span",{className:"reference-status"},l?"原始读取已核验":"Verified raw read")),n.createElement("p",null,l?"192个原始文件身份核验 · 0失败 · 95个相邻帧对。单位采用来源约定，尚未独立标定。":"192 source identities verified · 0 failures · 95 adjacent pairs. Units follow source convention, without independent calibration."),n.createElement("div",{className:"reference-cards"},n.createElement("div",null,n.createElement("span",null,l?"全96帧高度 MAE":"All96 height MAE"),n.createElement("strong",null,Ye(e.summary.height.mae_m*100)," ",n.createElement("small",null,"cm")),n.createElement("small",null,Ye(e.summary.height.mae_pct),"% R · R=1.230"),n.createElement("small",null,l?"有符号偏差":"Signed bias"," ",Ye(e.summary.height.bias_pct),"% R")),n.createElement("div",null,n.createElement("span",null,l?"速度 relative RMSE · pooled":"Velocity relative RMSE · pooled"),n.createElement("small",{className:"metric-scope"},M),n.createElement("strong",null,Ye(O.rel_rmse)),n.createElement("small",null,O.voxels.toLocaleString()," ",l?"有效粗网格点":"valid coarse voxels")),n.createElement("div",null,n.createElement("span",null,l?"速度 relative RMSE · 逐帧均值":"Velocity relative RMSE · Frame mean"),n.createElement("small",{className:"metric-scope"},M),n.createElement("strong",null,Ye(O.rel_rmse_frame_mean)),n.createElement("small",null,l?"XZ 0.1 / Y 0.05 · 来源单位":"XZ 0.1 / Y 0.05 · source units"))),n.createElement("div",{className:"reference-controls"},n.createElement("label",null,l?"帧集合":"Frame set"," ",n.createElement("select",{"aria-label":"Reference frame set",value:o,onChange:R=>{E.current.cancel(),v(R.target.value)}},n.createElement("option",{value:"all"},l?"全96帧":"All96 frames"),n.createElement("option",{value:"six"},l?"固定六帧":"Fixed six frames"))),n.createElement("label",null,l?"曲线":"Curve"," ",n.createElement("select",{"aria-label":"Reference metric",value:b,onChange:R=>{E.current.cancel(),S(R.target.value)}},n.createElement("option",{value:"height"},l?"高度 MAE (cm)":"Height MAE (cm)"),n.createElement("option",{value:"velocity"},l?"粗网格速度 relative RMSE":"Coarse velocity relative RMSE"))),n.createElement("label",null,l?"原始帧号":"Original frame"," ",n.createElement("select",{"aria-label":"Reference frame",value:I.frame,onChange:R=>_(Number(R.target.value))},e.frameIds.map(R=>n.createElement("option",{key:R,value:R},R,s.includes(R)?" · 3D":""))))),n.createElement("p",{role:"status"},n.createElement("strong",null,l?"选定帧":"Selected frame"," ",I.frame)," · ",l?"高度 MAE":"Height MAE"," ",Ye(I.row.height.mae_m*100)," cm · ",l?"速度 relative RMSE":"Velocity relative RMSE"," ",Ye(I.row.velocity.coarse.rel_rmse)," · ",I.geometryAvailable?l?"三维预览可用":"3D preview available":l?"该帧无三维数据；保留真实帧号与指标":"No 3D data for this frame; frame identity and metrics retained",o==="six"&&!lt.includes(I.frame)&&(l?" · 当前帧不在固定六帧集合":" · Current frame outside fixed-six subset")),!I.geometryAvailable&&n.createElement("div",{className:"reference-geometry-links"},l?"跳转到可用三维帧：":"Jump to available geometry: ",s.map(R=>n.createElement("button",{key:R,onClick:()=>_(R)},R))),n.createElement("svg",{viewBox:"0 0 920 190",role:"img","aria-label":l?"原始帧指标曲线":"Original-frame metric curve"},n.createElement("text",{x:"8",y:"27"},Ye(C)),n.createElement("text",{x:"15",y:"159"},"0"),n.createElement("line",{x1:"42",x2:"878",y1:"155",y2:"155",stroke:"#a7c4cb"}),n.createElement("polyline",{points:k.map(R=>`${D(R.frame)},${P($(R))}`).join(" "),fill:"none",stroke:"#087e8b",strokeWidth:"2"}),k.map(R=>n.createElement("circle",{key:R.frame,cx:D(R.frame),cy:P($(R)),r:R.frame===I.frame?5:3,fill:R.frame===I.frame?"#c45c15":"#087e8b",role:"button",tabIndex:"0","aria-label":`${l?"选择帧":"Select frame"} ${R.frame}`,onClick:()=>_(R.frame),onKeyDown:G=>{(G.key==="Enter"||G.key===" ")&&(G.preventDefault(),_(R.frame))}},n.createElement("title",null,R.frame,": ",Ye($(R))))),n.createElement("text",{x:"42",y:"180"},"1001"),n.createElement("text",{x:"840",y:"180"},"1096"),n.createElement("text",{x:"400",y:"180"},l?"原始帧号":"Original frame")),n.createElement("p",{className:"reference-scope"},l?"此处为固定协议的全局／逐帧指标。相机、显示平滑与ROI不改变这些值；同协议空间面板使用原生列高度。三维场切片与旧预览诊断保留各自计算范围。":"These are fixed-protocol global/per-frame metrics. Camera, display smoothing and ROI do not change them. The protocol spatial panel uses native height columns; volume slices and legacy diagnostics retain their own scope."),n.createElement("div",{className:"reference-controls"},n.createElement("button",{onClick:()=>c(`${e.runId}_${o}.json`,JSON.stringify(Z(),null,2))},l?"导出结果与当前帧 JSON":"Export results and current frame JSON"),n.createElement("button",{onClick:()=>c(`${e.runId}_${o}.csv`,F(),"text/csv")},l?"导出所选集合 CSV":"Export selected-set CSV")),n.createElement(ri,{bundle:e,subset:o,zh:l,onDownload:c,frame:I.frame,selectedGrid:i?.grid,onGrid:R=>r?.(G=>({...G,grid:R}))}),n.createElement(si,{declarations:e.declarations,zh:l}),!d&&n.createElement("details",null,n.createElement("summary",null,l?"恢复结果选择":"Restore result selection"),n.createElement("label",null,l?"选择本面板导出的 JSON":"Choose JSON exported from this panel"," ",n.createElement("input",{type:"file",accept:"application/json,.json","aria-label":"Restore reference selection",onChange:R=>{x(R.target.files?.[0]),R.target.value=""}})),n.createElement("p",{role:"status"},B)),n.createElement("details",null,n.createElement("summary",null,l?"数据身份、协议与有效计数":"Identity, protocol and valid counts"),n.createElement("p",null,e.protocol.id," · ",e.runId),n.createElement("p",null,"A: ",e.datasetA.manifestSha256,n.createElement("br",null),"B: ",e.datasetB.manifestSha256,n.createElement("br",null),l?"算法":"Algorithm",": ",e.protocol.sourceScriptSha256),n.createElement("p",null,l?"当前帧共同高度列":"Current common height columns",": ",I.row.height.common," · GT ",I.row.height.gtWet," / B ",I.row.height.predictionWet,"; ",l?"速度有效点":"Valid velocity voxels",": ",I.row.velocity.coarse.voxels)))}const ft=`{
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
`,oi="complete",li=96,fi=192,bi="2d38783dc08dd1f8683abd5b5fde7aca2532c46473aa3acaf8024092833cb44a",mi=63307776,ui=25.37458590004826,pi=202805248,hi=1e-12,gi=1867211,yi={mae_m:.015322750768874766,bias_m:-.00377808261841917},bt={status:oi,frames:li,rawHashesVerified:fi,indexSha256:bi,binaryBytes:mi,elapsedSeconds:ui,peakWorkingSetBytes:pi,referenceTolerance:hi,common:gi,weightedHeight:yi},Gn=["heightA","heightB"],_i=["wetA","wetB","common","steep","calmCells","breakingBand","calmBand"],Nt=[...Gn,..._i],la=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function vi(e,t,a,[c,i]){const r=e.left+(e.borderLeft||0),d=e.top+(e.borderTop||0),s=e.width-(e.borderLeft||0)-(e.borderRight||0),f=e.height-(e.borderTop||0)-(e.borderBottom||0);if(!(s>0&&f>0))throw Error("Canvas content box is empty");const l=Math.max(0,Math.min(i-1,Math.floor((t-r)/s*i))),h=Math.max(0,Math.min(c-1,c-1-Math.floor((a-d)/f*c)));return{ix:l,iz:h,index:h*i+l}}function Yn(e){return{runId:e.runId,protocolSha256:e.protocol.sourceScriptSha256,manifestA:e.datasetA.manifestSha256,manifestB:e.datasetB.manifestSha256}}function Rt(e,t){if(e?.schemaVersion!==1||e.kind!=="protocol-spatial-frame"||e.axisOrder!=="ZX"||Object.entries(t).some(([a,c])=>e[a]!==c))throw Error("Spatial identity/axis mismatch");if(!Number.isInteger(e.frameId)||!Array.isArray(e.shape)||e.shape.length!==2||e.shape.some(a=>!Number.isInteger(a)||a<2)||e.shape[0]*e.shape[1]>1e6)throw Error("Invalid spatial shape");if(!Array.isArray(e.originXYZ)||e.originXYZ.length!==3||!e.originXYZ.every(Number.isFinite)||!Number.isFinite(e.spacing)||e.spacing<=0)throw Error("Invalid spatial coordinates");for(const a of Nt){const c=e.resources?.[a],i=Gn.includes(a);if(!c||c.file!==`${e.frameId}-${a}.bin`||c.dtype!==(i?"float64-le":"uint8")||c.bytes!==e.shape[0]*e.shape[1]*(i?8:1)||!/^[a-f0-9]{64}$/.test(c.sha256))throw Error("Invalid spatial resource descriptor")}}async function mt(e,t,a){if(await zn(e)!==t)throw Error("Spatial index checksum mismatch");const c=JSON.parse(e),i=Yn(a);if(c.schemaVersion!==1||c.kind!=="protocol-spatial-index"||Object.entries(i).some(([r,d])=>c[r]!==d)||!la(c.frameIds,a.frameIds)||!la(c.frames?.map(r=>r.frameId),a.frameIds))throw Error("Spatial index does not match reference run");for(const r of c.frames){if(Rt(r,i),!la(r.shape,[128,224]))throw Error("Reference spatial shape mismatch");const d=a.rows.find(s=>s.frame===r.frameId)?.height;if(!d||r.summary?.common!==d.common||!["mae_m","bias_m"].every(s=>Number.isFinite(r.summary[s])&&Math.abs(r.summary[s]-d[s])<1e-12))throw Error("Spatial/reference summary mismatch")}return c}async function Ei(e){const t=await crypto.subtle.digest("SHA-256",e);return[...new Uint8Array(t)].map(a=>a.toString(16).padStart(2,"0")).join("")}async function ut(e,t,a,{fetcher:c=fetch,baseUrl:i=c0}={}){Rt(e,t);const r=await Promise.all(Nt.map(async l=>{const h=e.resources[l],m=await c(i+h.file,{signal:a});if(!m.ok)throw Error(`Spatial resource unavailable: ${e.frameId} / ${l}`);const w=await m.arrayBuffer();if(w.byteLength!==h.bytes||await Ei(w)!==h.sha256)throw Error(`Spatial resource checksum mismatch: ${l}`);if(Gn.includes(l)){const o=new DataView(w),b=new Float64Array(w.byteLength/8);for(let v=0;v<b.length;v++)b[v]=o.getFloat64(v*8,!0);return[l,b]}const g=new Uint8Array(w);if(g.some(o=>o!==0&&o!==1))throw Error("Invalid spatial mask");return[l,g]}));a?.throwIfAborted();const d={descriptor:e,...Object.fromEntries(r)},[s,f]=e.shape;for(let l=0;l<s*f;l++){if(Gn.some(w=>!Number.isFinite(d[w][l])&&!Number.isNaN(d[w][l])))throw Error("Infinite spatial height");const h=+!!(d.wetA[l]&&d.wetB[l]),m=e.originXYZ[0]+l%f*e.spacing;if(d.wetA[l]!==Number(Number.isFinite(d.heightA[l]))||d.wetB[l]!==Number(Number.isFinite(d.heightB[l]))||d.common[l]!==h||d.steep[l]+d.calmCells[l]!==h||d.breakingBand[l]!==+!!(h&&m>-.3&&m<1.1)||d.calmBand[l]!==+!!(h&&m>-7.9&&m<-1.5))throw Error("Spatial mask/height inconsistency")}return d}function In(e,t=null){if(t&&(!["xmin","xmax","zmin","zmax"].every(m=>Number.isFinite(t[m]))||t.xmin>t.xmax||t.zmin>t.zmax))throw Error("Invalid world-coordinate ROI");const{shape:[a,c],originXYZ:[i,,r],spacing:d}=e.descriptor;let s=0,f=0,l=0,h=0;for(let m=0;m<a;m++)for(let w=0;w<c;w++){const g=m*c+w,o=i+w*d,b=r+m*d;if(!e.common[g]||t&&(o<t.xmin||o>t.xmax||b<t.zmin||b>t.zmax))continue;const v=e.heightB[g]-e.heightA[g];s++,f+=Math.abs(v),l+=v,h+=v*v}return{common:s,mae_m:s?f/s:null,bias_m:s?l/s:null,rmse_m:s?Math.sqrt(h/s):null}}function wi(e,t,a,c){const{originXYZ:[i,,r],spacing:d,shape:[,s]}=e.descriptor,f=a*s+t;return{distance:c,x:i+t*d,z:r+a*d,a:e.wetA[f]?e.heightA[f]:null,b:e.wetB[f]?e.heightB[f]:null,difference:e.common[f]?e.heightB[f]-e.heightA[f]:null}}function Bi(e,t,a,c){const{shape:[i,r],originXYZ:[d,,s],spacing:f}=e.descriptor,l=Math.max(0,Math.min(r-1,(t-d)/f)),h=Math.max(0,Math.min(i-1,(a-s)/f)),m=Math.min(r-2,Math.floor(l)),w=Math.min(i-2,Math.floor(h)),g=l-m,o=h-w,b=[w*r+m,w*r+m+1,(w+1)*r+m,(w+1)*r+m+1],v=[(1-g)*(1-o),g*(1-o),(1-g)*o,g*o];if(b.some(p=>!e.common[p]))return{distance:c,x:t,z:a,a:null,b:null,difference:null};const S=b.reduce((p,E,_)=>p+v[_]*e.heightA[E],0),B=b.reduce((p,E,_)=>p+v[_]*e.heightB[E],0);return{distance:c,x:t,z:a,a:S,b:B,difference:B-S}}function Mt(e,{plane:t,index:a=0,angle:c=0,sectionPercent:i=50}){const{shape:[r,d],originXYZ:[s,,f],spacing:l}=e.descriptor;if(["xy","yz"].includes(t)){if(!Number.isInteger(a)||a<0||a>=(t==="xy"?r:d))throw Error("Native section outside lattice");return{sampling:"native_columns",points:Array.from({length:t==="xy"?d:r},(x,u)=>wi(e,t==="xy"?u:a,t==="xy"?a:u,u*l))}}if(t!=="oblique"||!Number.isFinite(c)||!Number.isFinite(i)||i<0||i>100)throw Error("Height profile requires a vertical XY/YZ/Y-axis section");const h=Math.cos(c*Math.PI/180),m=Math.sin(c*Math.PI/180),w=[-m,h],g=s+(d-1)*l,o=f+(r-1)*l,b=[[s,f],[s,o],[g,f],[g,o]].map(([x,u])=>x*w[0]+u*w[1]),v=Math.min(...b)+(Math.max(...b)-Math.min(...b))*i/100,S=w[0]*v,B=w[1]*v;let p=-1/0,E=1/0;for(const[x,u,I,k]of[[S,h,s,g],[B,m,f,o]])if(Math.abs(u)<1e-12){if(x<I-1e-9||x>k+1e-9)return{sampling:"bilinear_common_four",points:[]}}else{const O=(I-x)/u,M=(k-x)/u;p=Math.max(p,Math.min(O,M)),E=Math.min(E,Math.max(O,M))}if(p>E)return{sampling:"bilinear_common_four",points:[]};const _=Math.max(2,Math.ceil((E-p)/l)+1);return{sampling:"bilinear_common_four",points:Array.from({length:_},(x,u)=>{const I=p+(E-p)*u/(_-1);return Bi(e,S+I*h,B+I*m,I-p)})}}const Sa="oceanscope.protocol-report.v1",xi=e=>JSON.parse(JSON.stringify(e)),pt=e=>JSON.stringify(e,(t,a)=>a&&typeof a=="object"&&!Array.isArray(a)?Object.fromEntries(Object.keys(a).sort().map(c=>[c,a[c]])):a),ya=(e,t)=>pt(e)===pt(t),Nn=(e,t=-1e9,a=1e9)=>typeof e=="number"&&Number.isFinite(e)&&e>=t&&e<=a;function Ot(e){if(!/^[a-f0-9]{64}$/.test(e.verifiedPayloadSha256)||!/^[a-f0-9]{64}$/.test(e.declarations?.sha256))throw Error("Verified report identity unavailable");return{...Yn(e),bundleSha256:e.verifiedPayloadSha256,declarationsSha256:e.declarations.sha256}}function Tt(e,t,a,c){if(!e||e.frame!==t.frameId||!a.frameIds.includes(e.frame))throw Error("Report frame mismatch");if(!["xy","xz","yz","oblique"].includes(e.plane)||!["x","y","z"].includes(e.rotationAxis)||!Nn(e.angle,0,180)||!Nn(e.sectionPercent,0,100))throw Error("Invalid report section");const i=e.plane==="xy"||e.plane==="oblique"?t.shape[0]:e.plane==="yz"?t.shape[1]:c?.[0]?.processing.lattice.dimensions[1]??64;if(!Number.isInteger(e.sliceIndex)||e.sliceIndex<0||e.sliceIndex>=i)throw Error("Report slice outside lattice");const r=e.selection;if(!r||!["all","six"].includes(r.subset)||!["fine","coarse"].includes(r.grid)||!["height","velocity"].includes(r.metric))throw Error("Invalid report selection");let d=null,s=null;if(e.geometry){const l=e.geometry.settings?.representation===Cn;if(!c?.length||!l&&!a.geometryFrames.includes(e.frame))throw Error("Report geometry unavailable");d=Ke(e.geometry,c);const h=c.find(m=>m.id===d.settings.caseId);if(s=l?gt(h,e.frame,d.settings.quality):_a(h,e.frame),!s||!ya(e.geometryResource,s))throw Error("Report preview resource identity mismatch");for(const m of["frame","plane","sliceIndex","rotationAxis","angle","sectionPercent"])if(d.settings[m]!==e[m])throw Error("Report geometry/section mismatch")}const f=typeof e.geometryStatus?.reason=="string"?e.geometryStatus.reason.slice(0,500):d?"Exact-frame preview bytes verified":"No 3D evidence captured";return{frame:e.frame,plane:e.plane,sliceIndex:e.sliceIndex,rotationAxis:e.rotationAxis,angle:e.angle,sectionPercent:e.sectionPercent,selection:{subset:r.subset,grid:r.grid,metric:r.metric},geometry:d,geometryResource:s,geometryStatus:{status:d?"included":"unavailable",reason:f}}}function $t(e){if(e==null)return null;if(!["xmin","xmax","zmin","zmax"].every(t=>Nn(e[t]))||e.xmin>e.xmax||e.zmin>e.zmax)throw Error("Invalid report ROI");return Object.fromEntries(["xmin","xmax","zmin","zmax"].map(t=>[t,e[t]]))}function Ft(e,t){if(e==null)return null;const[a,c]=t.shape,i=e.index;if(!Number.isInteger(i)||i<0||i>=a*c)throw Error("Invalid report probe");const r=t.originXYZ[0]+i%c*t.spacing,d=t.originXYZ[2]+Math.floor(i/c)*t.spacing;if(!Nn(e.x)||!Nn(e.z)||Math.abs(r-e.x)>1e-9||Math.abs(d-e.z)>1e-9)throw Error("Report probe/column mismatch");return{index:i,x:r,z:d}}function Si({bundle:e,spatial:t,view:a,roi:c=null,probe:i=null,catalog:r}){const d=t.descriptor,s=Tt(a,d,e,r),f=$t(c),l=s.plane==="xy"||s.plane==="yz"||s.plane==="oblique"&&s.rotationAxis==="y"?Mt(t,{plane:s.plane,index:s.sliceIndex,angle:s.angle,sectionPercent:s.sectionPercent}):null;return xi({schema:Sa,createdAt:new Date().toISOString(),source:Ot(e),descriptor:d,view:s,roi:f,probe:Ft(i,d),global:In(t),local:f?In(t,f):null,profile:l,metrics:It(e,{...s.selection,frame:s.frame}),frameMetrics:e.rows.find(h=>h.frame===s.frame),declarations:e.declarations,unitStatus:e.unitStatus,scope:"Native highest-crossing height columns; ROI/profile do not replace all96 global metrics. Units are source convention, not independently calibrated."})}function Ai(e,t,a,{catalog:c}={}){if(new TextEncoder().encode(e).length>1024*1024)throw Error("Report file too large");const i=JSON.parse(e);if(i?.schema!==Sa)throw Error("Unsupported protocol report format");if(!ya(i.source,Ot(t)))throw Error("Report identity mismatch");const r=a.frames.find(d=>d.frameId===i.view?.frame);if(!r||!ya(i.descriptor,r))throw Error("Report resource mismatch");return{descriptor:r,view:Tt(i.view,r,t,c),roi:$t(i.roi),probe:Ft(i.probe,r)}}function ki(e){const t=c=>'"'+String(c==null?"":typeof c=="object"?JSON.stringify(c):c).replaceAll('"','""')+'"',a=[["kind","name","value","unit","scope","metadata"]];a.push(["source","snapshot",e.createdAt,"",e.schema,e.unitStatus]);for(const[c,i]of Object.entries(e.source))a.push(["source",c,i,"","identity",""]);a.push(["view","selection",e.view,"","current view",{roi:e.roi,probe:e.probe}],["source","declarations",e.declarations,"","claimed / verified / unknown",""]);for(const c of e.metrics)a.push(["metric",c.id,c.value,c.unit,c.scope,c]);for(const[c,i]of[["frame",e.global],["ROI",e.local]])if(i)for(const[r,d]of Object.entries(i))a.push(["spatial",r,d,r==="common"?"columns":"m",c,{frame:e.view.frame,roi:c==="ROI"?e.roi:null}]);for(const c of e.profile?.points??[])a.push(["profile","height A / B / difference",c,"m",e.profile.sampling,{frame:e.view.frame,plane:e.view.plane}]);return a.map(c=>c.map(t).join(",")).join(`
`)}function Ci(e,t){const a=`${e.source.runId}_${e.view.frame}_protocol-report`,c={csv:{name:a+".csv",mime:"text/csv",content:ki(e)},json:{name:a+".json",mime:"application/json",content:JSON.stringify(e,null,2)}};for(const i of Object.values(c))i.href=`data:${i.mime};charset=utf-8,${encodeURIComponent(i.content)}`;if(t){if(!t.startsWith("data:image/png;base64,"))throw Error("PNG encoding failed");const i=Uint8Array.from(atob(t.slice(t.indexOf(",")+1)),d=>d.charCodeAt(0)),r=new Blob([i],{type:"image/png"});c.png={name:a+".png",mime:"image/png",blob:r,href:URL.createObjectURL(r)}}return c}function Ii(e,t){const a=String(e?.message??e??""),c=(i,r)=>t?i:r;return/AbortError|cancelled|canceled/i.test(e?.name+" "+a)?c("操作已取消。当前文件可以稍后重新打开。","Operation cancelled. You can reopen the file later."):/too large|^size$/i.test(a)?c("文件过大。请选择本工具导出的分析 JSON；完整报告上限1 MB，场比较方案上限2 MB。","File too large. Choose an exported analysis JSON: reports up to1 MB, field views up to2 MB."):/Invalid analysis JSON|^json$|JSON|Unexpected token|Unexpected end/i.test(a)&&!/(format|Unsupported)/i.test(a)?c("JSON内容不完整或格式有误。请重新选择原始导出文件，或粘贴文件全文。","Invalid or incomplete JSON. Select the original exported file or paste its entire contents."):/Unsupported|^format$/.test(a)?c("这个文件不能恢复分析。请选择完整分析报告、场比较方案或序列选择 JSON；PNG、CSV和数据说明文件只能查看。","This file cannot restore analysis. Choose an analysis-report, field-view or sequence-selection JSON; images, CSV and data-info files are for viewing."):/checksum|identity|mismatch|does not match|^source$/i.test(a)?c("数据或报告身份不匹配。请确认数据组合，使用同一版本导出的报告及配套资源；资源损坏时重新复制并校验，勿修改文件中的身份信息。","Data or report identity differs. Confirm the dataset and use its matching report/resources. Recopy and verify damaged resources; do not edit identity fields."):/404|unavailable|failed to fetch|network|^dataset$|No spatial resource/i.test(a)?c("数据下载未完成。请检查网络并重试；无三维预览的帧仍可查看高度分析。","The data download did not complete. Check your connection and retry. Frames without 3D previews still support height analysis."):/Wait|not ready|loading|Timed out/i.test(a)?c("数据尚未准备好。等待当前组合加载完成后重试；持续失败时检查本页的数据资源提示。","Data is not ready. Wait for the current dataset to load and retry; if it persists, check this page’s resource message."):/View changed/i.test(a)?c("恢复期间视图已改变，已停止应用旧请求。请在当前视图重新打开报告。","The view changed during restoration. Reopen the report from the current view."):c("操作未完成。确认文件来自当前工具、帧号和参数有效，然后重试；具体原因可查看技术详情。","The operation did not complete. Confirm the file comes from this tool and its frame/settings are valid, then retry; technical details are below.")}function hn({error:e,zh:t,resource:a,onRetry:c}){return e?n.createElement("div",{className:"analysis-error",role:"alert"},n.createElement("strong",null,t?"需要处理的问题":"Action needed"),a&&n.createElement("p",null,a),n.createElement("p",null,Ii(e,t)),c&&n.createElement("button",{type:"button",onClick:c},t?"重新加载资源":"Reload resources"),n.createElement("details",null,n.createElement("summary",null,t?"技术详情":"Technical details"),n.createElement("code",null,String(e?.message??e)))):null}function Ni({controlRef:e,ready:t,capture:a,prepareImport:c,applyImport:i,zh:r,unifiedRestore:d=!1}){const[s,f]=y.useState(null),[l,h]=y.useState(""),[m,w]=y.useState(""),[g,o]=y.useState(null),b=y.useRef(null),v=y.useRef(null);function S(){b.current&&(b.current.abort(),b.current=null,h(r?"恢复已取消，保留新的操作。":"Restore cancelled; newer action retained."))}y.useImperativeHandle(e,()=>({cancel:S,clearSnapshot:()=>f(null),restoreText:(_,x)=>p({size:new TextEncoder().encode(_).length,text:async()=>_},x,!0)})),y.useEffect(()=>()=>b.current?.abort(),[]),y.useEffect(()=>{const _=s?.previewUrl;return()=>{_&&URL.revokeObjectURL(_)}},[s?.previewUrl]);function B(){try{const _=a(),x=Ci(_.record,_.canvas?.toDataURL?.("image/png")??null);f({..._,previewUrl:x.png?.href??null,files:x}),o(null),h(r?"已生成当前快照，三种导出使用同一报告。":"Snapshot created; all three downloads use this report.")}catch(_){o(_)}}async function p(_,x,u=!1){if(S(),!_)return;const I=new AbortController,k=()=>I.abort();x?.addEventListener("abort",k,{once:!0}),x?.aborted&&I.abort(),b.current=I,o(null),h(r?"正在核验报告与资源…":"Verifying report and resources…");try{if(_.size>1024*1024)throw Error("Report file too large");const O=await _.text();I.signal.throwIfAborted();const M=await c(O,I.signal);I.signal.throwIfAborted(),await i(M,I.signal),I.signal.throwIfAborted(),f(null),h(r?"已恢复帧、截面、选区与可用相机；数值来自重新核验的资源。":"Restored frame, section, ROI and available camera; values recomputed from verified resources.")}catch(O){if(I.signal.aborted||(o(O),h("")),u)throw O}finally{x?.removeEventListener("abort",k),b.current===I&&(b.current=null)}}const E={png:r?"下载汇报图片 PNG":"Download presentation PNG",csv:r?"下载数据表 CSV":"Download data table CSV",json:r?"保存可恢复分析 JSON":"Save restorable analysis JSON"};return n.createElement("section",{className:"protocol-report","aria-label":"Protocol evidence report"},n.createElement("h3",null,r?"保存与恢复分析":"Save and restore analysis"),n.createElement("p",null,r?"先确认当前帧、选区、截面和相机，再生成报告。三种下载使用同一快照；后续修改视图时，请更新快照后再导出。":"Confirm frame, ROI, section and camera, then create a report. All downloads use one snapshot; update it before exporting later view changes."),n.createElement("div",{className:"reference-controls"},n.createElement("button",{disabled:!t,onClick:B},s?r?"更新报告快照":"Update report snapshot":r?"生成当前报告":"Create current report"),Object.entries(E).map(([_,x])=>s?.files[_]?n.createElement("a",{key:_,className:"report-download",href:s.files[_].href,download:s.files[_].name,onClick:()=>h(r?"下载已交给浏览器，请在下载列表确认文件。也可展开“下载帮助与 JSON 文本”复制完整分析。":"Download handed to the browser. Check its download list; Download help and JSON text also provides the complete analysis for copying.")},x):n.createElement("button",{key:_,disabled:!0},x))),s&&n.createElement("details",null,n.createElement("summary",null,r?"下载帮助与 JSON 文本":"Download help and JSON text"),n.createElement("p",null,r?"文件由浏览器保存，位置取决于浏览器设置。可在浏览器下载列表中找到文件。继续分析也可选中下方全部 JSON，按 Ctrl+C（Mac：⌘C）复制，再粘贴到顶部“恢复分析”；长期保留请下载 JSON 文件。":"Your browser saves the files according to its download settings. Find them in its download list. To resume without choosing a file, select all JSON below, copy with Ctrl+C (Mac: ⌘C), then paste into Restore analysis. Download the JSON file for long-term storage."),n.createElement("label",null,r?"完整分析 JSON":"Complete analysis JSON",n.createElement("textarea",{ref:v,"aria-label":"Report JSON for copying",rows:"6",readOnly:!0,spellCheck:!1,value:s.files.json.content})),n.createElement("button",{type:"button",onClick:()=>{v.current?.focus(),v.current?.select(),h(r?"已选中完整 JSON。按 Ctrl+C（Mac：⌘C）复制。":"Complete JSON selected. Press Ctrl+C (Mac: ⌘C) to copy.")}},r?"选中全部 JSON":"Select all JSON")),!s&&n.createElement("p",null,r?"生成报告后即可下载。PNG用于展示，CSV保留数值，JSON用于继续同一次分析。":"Create a report to enable downloads. PNG is for presentation, CSV for numbers, and JSON for resuming the analysis."),s&&n.createElement("p",null,r?"导出快照 · 帧":"Export snapshot · frame"," ",s.record.view.frame," · ",s.record.createdAt," · ",s.record.view.geometry?r?"包含已核验三维":"Verified 3D included":r?"二维证据":"2D evidence"," · ",s.record.view.geometryStatus?.reason," · ",r?"后续操作不会改变此报告；更新快照可保存新状态。":"Later actions do not change this report; update the snapshot to save the new state."),s?.previewUrl&&n.createElement("details",null,n.createElement("summary",null,r?"预览汇报图片":"Preview presentation image"),n.createElement("p",null,r?"预览与下载使用同一报告。如果浏览器未保存PNG，可在此图片上使用“图片另存为”。":"Preview and download use the same report. If the browser does not save the PNG, use Save image as on this preview."),n.createElement("img",{src:s.previewUrl,alt:r?`帧 ${s.record.view.frame} 汇报图片`:`Frame ${s.record.view.frame} report image`,style:{display:"block",width:"100%",height:"auto"}})),d?n.createElement("p",null,n.createElement("a",{href:"#restore-analysis",onClick:()=>{const _=document.getElementById("restore-analysis");_&&(_.open=!0)}},r?"恢复分析：选择文件或粘贴 JSON":"Restore analysis: choose a file or paste JSON")):n.createElement(n.Fragment,null,n.createElement("label",null,r?"导入分析报告 JSON":"Import analysis report JSON"," ",n.createElement("input",{type:"file",accept:"application/json,.json","aria-label":"Restore protocol report",onChange:_=>{p(_.target.files?.[0]),_.target.value=""}})),n.createElement("details",null,n.createElement("summary",null,r?"粘贴报告 JSON":"Paste report JSON"),n.createElement("p",null,r?"文件选择不可用时，可粘贴报告内容，使用相同的核验与恢复流程。":"If file selection is unavailable, paste the report content for the same verified restoration."),n.createElement("textarea",{"aria-label":"Protocol report JSON text",rows:"6",value:m,onChange:_=>{S(),w(_.target.value)}}),n.createElement("button",{disabled:!m.trim(),onClick:()=>p({size:new TextEncoder().encode(m).length,text:async()=>m})},r?"恢复粘贴的报告":"Restore pasted report"))),n.createElement(hn,{error:g,zh:r}),n.createElement("p",{role:"status"},l))}const Ee=(e,t=6)=>e==null?"N/A":Number(e).toPrecision(t);function re(e,t,a,c,i=1800,r=23,d="#203747"){for(e.fillStyle=d,e.font=`${r}px sans-serif`;e.measureText(String(t)).width>i&&r>12;)e.font=`${--r}px sans-serif`;e.fillText(String(t),a,c)}function fa(e,t,a,c,i,r=20){e.font=`${r}px sans-serif`,e.fillStyle="#3c5365";let d="";for(const s of String(t).split(" ")){const f=d?d+" "+s:s;e.measureText(f).width>i&&d?(e.fillText(d,a,c),c+=r+8,d=s):d=f}return e.fillText(d,a,c),c+r+8}function Ri(e,t,a,c,i,r,d,s,f,l){const[h,m]=t.descriptor.shape,w=document.createElement("canvas");w.width=m,w.height=h;const g=w.getContext("2d"),o=g.createImageData(m,h),b=c==="difference",v=b?t.common:t[c==="heightA"?"wetA":"wetB"],S=b?[-l,l]:f;for(let u=0;u<h;u++)for(let I=0;I<m;I++){const k=u*m+I,O=((h-1-u)*m+I)*4;if(!v[k]){o.data.set([225,230,235,255],O);continue}const M=b?t.heightB[k]-t.heightA[k]:t[c][k],$=Math.max(0,Math.min(1,(M-S[0])/(S[1]-S[0]))),C=b?$<.5?[80+350*$,130+230*$,220+70*$]:[255,245-350*($-.5),255-440*($-.5)]:[35+195*$,75+155*$,155+70*$];o.data.set([...C,255],O)}g.putImageData(o,0,0),e.imageSmoothingEnabled=!1,e.drawImage(w,i,r,d,s);const{originXYZ:[B,,p],spacing:E}=t.descriptor,_=(u,I)=>[i+(u-B+E/2)/(m*E)*d,r+s-(I-p+E/2)/(h*E)*s];if(e.strokeStyle="#182b3c",e.lineWidth=2,a.profile?.points.length&&(e.beginPath(),a.profile.points.forEach((u,I)=>e[I?"lineTo":"moveTo"](..._(u.x,u.z))),e.stroke()),a.roi){const u=_(a.roi.xmin,a.roi.zmax),I=_(a.roi.xmax,a.roi.zmin);e.save(),e.beginPath(),e.rect(i,r,d,s),e.clip(),e.strokeRect(u[0],u[1],I[0]-u[0],I[1]-u[1]),e.restore()}if(a.probe){const[u,I]=_(a.probe.x,a.probe.z);e.beginPath(),e.moveTo(u-5,I),e.lineTo(u+5,I),e.moveTo(u,I-5),e.lineTo(u,I+5),e.stroke()}const x=e.createLinearGradient(i,0,i+d,0);b?(x.addColorStop(0,"rgb(80,130,220)"),x.addColorStop(.5,"rgb(255,245,255)"),x.addColorStop(1,"rgb(255,70,35)")):(x.addColorStop(0,"rgb(35,75,155)"),x.addColorStop(1,"rgb(230,230,225)")),e.fillStyle=x,e.fillRect(i,r+s+8,d,9),re(e,`${Ee(S[0])} ... ${Ee(S[1])} m`,i,r+s+38,d,21),re(e,`X ${Ee(B,4)} ... ${Ee(B+(m-1)*E,4)}; Z ${Ee(p,4)} ... ${Ee(p+(h-1)*E,4)} m`,i,r+s+62,d,19)}function Mi(e,t,a,c,i,r){const d=t.profile?.points??[],s=d.flatMap(S=>[S.a,S.b]).filter(Number.isFinite);if(re(e,`Section: ${t.view.plane.toUpperCase()} / ${t.profile?.sampling??"no height profile"}`,a,c,i,24),!s.length){re(e,"No valid height profile for this section.",a,c+50,i);return}const f=Math.min(...s),l=Math.max(...s),h=Math.max(l-f,1e-9),m=Math.max(d.at(-1).distance,1e-9),w=Math.max(...d.map(S=>Math.abs(S.difference??0)),1e-9),g=a+65,o=c+45,b=i-95,v=r-120;e.strokeStyle="#798699",e.lineWidth=1,e.beginPath(),e.moveTo(g,o+v+35),e.lineTo(g+b,o+v+35),e.stroke(),re(e,"0",a+35,o+v+40,25,18);for(const[S,B]of[["a","#2583c5"],["b","#e08b22"],["difference","#9b4778"]]){e.strokeStyle=B,e.lineWidth=2,e.beginPath();let p=!1;for(const E of d){if(E[S]==null){p=!1;continue}const _=g+E.distance/m*b,x=S==="difference"?o+v+35-E[S]/w*25:o+v*.7-(E[S]-f)/h*v*.7;e[p?"lineTo":"moveTo"](_,x),p=!0}e.stroke()}re(e,`${Ee(l,4)} m`,a,o+12,65,16),re(e,`${Ee(f,4)} m`,a,o+v*.7,65,16),re(e,`B-A ±${Ee(w,4)} m`,g,o+v+70,b,18),re(e,`GT blue / B orange / B-A purple; distance 0 ... ${Ee(m,5)} m`,g,c+r+35,b,18)}function Oi(e,t,a=null){const c=document.createElement("canvas");c.width=1920,c.height=2220;const i=c.getContext("2d");if(!i)throw Error("Report canvas unavailable");i.fillStyle="#f6f9fb",i.fillRect(0,0,c.width,c.height),i.fillStyle="#123247",i.fillRect(0,0,1920,170),re(i,`OceanScope / analysis report / frame ${e.view.frame}`,60,68,1800,43,"#fff"),re(i,`${e.source.runId} · ${e.createdAt}`,60,115,1800,22,"#d0e6ee"),re(i,`Height: all96 | Velocity: ${e.view.selection.subset} / ${e.view.selection.grid} | ROI: current native columns`,60,150,1800,22,"#d0e6ee");let r=1/0,d=-1/0,s=1e-9;for(let g=0;g<t.heightA.length;g++){for(const o of["A","B"])t["wet"+o][g]&&(r=Math.min(r,t["height"+o][g]),d=Math.max(d,t["height"+o][g]));t.common[g]&&(s=Math.max(s,Math.abs(t.heightB[g]-t.heightA[g])))}const f=Number.isFinite(r)?[r,d>r?d:r+1]:[0,1];[["heightA","A / Ground Truth"],["heightB","B / Prediction"],["difference","B - A / signed height"]].forEach(([g,o],b)=>{re(i,o,60+b*620,215,580,28),Ri(i,t,e,g,60+b*620,240,560,320,f,s)});const l=g=>g==null?null:g*100,h=(g,o)=>`${o}: ${g?.common??0} common columns | MAE ${Ee(l(g?.mae_m))} cm | bias ${Ee(l(g?.bias_m))} cm | RMSE ${Ee(l(g?.rmse_m))} cm`;if(re(i,h(e.global,"Current frame height"),60,645,1800,25),re(i,e.local?h(e.local,"Selected ROI height"):"ROI: none selected",60,682,1800,25),re(i,e.roi?`ROI X [${e.roi.xmin}, ${e.roi.xmax}] / Z [${e.roi.zmin}, ${e.roi.zmax}] m`:"Gray cells are unavailable, never zero.",60,719,1800,21),Mi(i,e,60,770,990,300),a){const g=Math.min(770/a.width,320/a.height);i.drawImage(a,1110+(770-a.width*g)/2,780,a.width*g,a.height*g),re(i,"Current-frame 3D preview; camera retained in JSON",1110,1130,770,20)}else fa(i,`No current-frame 3D capture: ${e.view.geometryStatus?.reason??"unavailable"}. Native spatial data and frame identity are retained; no neighboring frame substituted.`,1120,850,700,25);re(i,"Sequence metrics / labelled scopes; full precision and definitions in CSV + JSON",60,1200,1800,29);const m=Math.ceil(e.metrics.length/2);e.metrics.forEach((g,o)=>{const b=o>=m?1:0,v=o%m,S=60+b*930,B=1245+v*35;re(i,g.label,S,B,620,20),re(i,`${Ee(g.value,8)} ${g.unit}`,S+630,B,260,20)});let w=1840;w=fa(i,e.scope,60,w,1800,22),w=fa(i,"Experiment provenance: model / cameras / split / units are source declarations. Checkpoint hash is unknown. Original-file manifest identities were verified; training history and physical calibration were not independently audited.",60,w+8,1800,21);for(const[g,o]of Object.entries(e.source))re(i,`${g}: ${o}`,60,w+28,1800,18),w+=28;return re(i,"Restore this snapshot in OceanScope with its JSON. Local resources must match; measurements are recomputed.",60,2185,1800,20),c}const Pt=["xmin","xmax","zmin","zmax"];function Ti(e){return Number(e.toFixed(4)).toString()}function ba(e){return Object.fromEntries(Pt.map(t=>[t,Ti(e[t])]))}function $i(e,t,a){const c={},i={};for(const r of Pt)!e[r]?.trim()||!Number.isFinite(Number(e[r]))?i[r]="number":c[r]=a[r]?Number(e[r]):t[r];for(const[r,d]of[["xmin","xmax"],["zmin","zmax"]])!i[r]&&!i[d]&&c[r]>c[d]&&(i[r]="order",i[d]="order");return{values:c,errors:i,valid:Object.keys(i).length===0}}const fe=(e,t=1)=>e==null?"—":(e*t).toFixed(4);function Xn(e){const{shape:[t,a],originXYZ:[c,,i],spacing:r}=e.descriptor;return{xmin:c,xmax:c+(a-1)*r,zmin:i,zmax:i+(t-1)*r}}function Fi(e){let t=1/0,a=-1/0,c=0;for(let i=0;i<e.heightA.length;i++){for(const r of["A","B"])e["wet"+r][i]&&(t=Math.min(t,e["height"+r][i]),a=Math.max(a,e["height"+r][i]));e.common[i]&&(c=Math.max(c,Math.abs(e.heightB[i]-e.heightA[i])))}return{height:Number.isFinite(t)?[t,a>t?a:t+1]:[0,1],error:Math.max(c,1e-9)}}function Pi({spatial:e,kind:t,range:a,roi:c,probe:i,profile:r,onRegion:d,onProbe:s,label:f}){const l=y.useRef(null),h=y.useRef(null),[m,w]=e.descriptor.shape,g=Xn(e),o=t==="difference"?null:e[t],b=t==="difference"?e.common:e[t==="heightA"?"wetA":"wetB"];y.useEffect(()=>{const B=l.current,p=B?.getContext("2d");if(!p)return;const E=p.createImageData(w,m);for(let x=0;x<m;x++)for(let u=0;u<w;u++){const I=x*w+u,k=((m-1-x)*w+u)*4;if(!b[I]){E.data.set([225,230,235,255],k);continue}const O=o?o[I]:e.heightB[I]-e.heightA[I],M=Math.max(0,Math.min(1,(O-a[0])/(a[1]-a[0]))),$=t==="difference"?M<.5?[80+350*M,130+230*M,220+70*M]:[255,245-350*(M-.5),255-440*(M-.5)]:[35+195*M,75+155*M,155+70*M];E.data.set([...$,255],k)}p.putImageData(E,0,0);const _=(x,u)=>[(x-g.xmin)/e.descriptor.spacing+.5,m-.5-(u-g.zmin)/e.descriptor.spacing];if(r?.points.length&&(p.strokeStyle="#172c43",p.lineWidth=1,p.beginPath(),r.points.forEach((x,u)=>p[u?"lineTo":"moveTo"](..._(x.x,x.z))),p.stroke()),c){const[x,u]=_(c.xmin,c.zmax),[I,k]=_(c.xmax,c.zmin);p.strokeStyle="#111",p.lineWidth=1,p.strokeRect(x,u,I-x,k-u)}if(i){const[x,u]=_(i.x,i.z);p.strokeStyle="#111",p.beginPath(),p.moveTo(x-3,u),p.lineTo(x+3,u),p.moveTo(x,u-3),p.lineTo(x,u+3),p.stroke()}},[e,t,a[0],a[1],c,i,r]);function v(B){const p=B.currentTarget.getBoundingClientRect(),E=getComputedStyle(B.currentTarget),_={left:p.left,top:p.top,width:p.width,height:p.height};for(const k of["Left","Right","Top","Bottom"])_["border"+k]=parseFloat(E["border"+k+"Width"])||0;const{ix:x,iz:u,index:I}=vi(_,B.clientX,B.clientY,[m,w]);return{x:g.xmin+x*e.descriptor.spacing,z:g.zmin+u*e.descriptor.spacing,index:I}}function S(B){if(!h.current)return;const p=v(B),E=h.current;h.current=null,p.index===E.index?s(p):d({xmin:Math.min(E.x,p.x),xmax:Math.max(E.x,p.x),zmin:Math.min(E.z,p.z),zmax:Math.max(E.z,p.z)})}return n.createElement("figure",null,n.createElement("figcaption",null,f),n.createElement("canvas",{ref:l,width:w,height:m,"aria-label":t==="heightA"?"GT height map":t==="heightB"?"Prediction height map":"Signed height difference map",onPointerDown:B=>{h.current=v(B),B.currentTarget.setPointerCapture?.(B.pointerId)},onPointerUp:S,onPointerCancel:()=>{h.current=null}}),n.createElement("small",null,"X ",fe(g.xmin),"…",fe(g.xmax)," · Z ",fe(g.zmin),"…",fe(g.zmax)," m"),n.createElement("small",null,fe(a[0])," … ",fe(a[1])," m"))}function Di({profile:e,zh:t}){const a=e.points,c=a.flatMap(m=>[m.a,m.b]).filter(Number.isFinite),i=a.map(m=>m.difference).filter(Number.isFinite);if(!c.length)return n.createElement("p",{role:"status"},t?"此剖面没有有效高度。":"No valid heights on this profile.");const r=Math.min(...c),d=Math.max(...c),s=Math.max(d-r,1e-9),f=Math.max(...i.map(Math.abs),1e-9),l=Math.max(a.at(-1)?.distance||0,1e-9);function h(m,w=!1){let g=!1;return a.map(o=>{if(o[m]===null)return g=!1,"";const b=42+o.distance/l*640,v=w?235-o[m]/f*42:166-(o[m]-r)/s*130,S=g?"L":"M";return g=!0,`${S}${b},${v}`}).join(" ")}return n.createElement("figure",{className:"protocol-profile"},n.createElement("figcaption",null,t?"同一截面 · 蓝色GT／橙色预测 · B−A":"Same section · blue GT / orange prediction · B−A"," · ",e.sampling==="native_columns"?t?"原生列":"Native columns":t?"四邻点共同有效 · 插值诊断":"Four valid neighbors · interpolated diagnosis"),n.createElement("svg",{viewBox:"0 0 720 300",role:"img","aria-label":"Protocol height profile"},n.createElement("text",{x:"8",y:"18"},"Y (m)"),n.createElement("text",{x:"42",y:"30"},fe(d)),n.createElement("text",{x:"42",y:"185"},fe(r)),n.createElement("path",{d:h("a"),fill:"none",stroke:"#2583c5",strokeWidth:"2"}),n.createElement("path",{d:h("b"),fill:"none",stroke:"#e08b22",strokeWidth:"2"}),n.createElement("line",{x1:"42",y1:"235",x2:"682",y2:"235",stroke:"#798699",strokeDasharray:"4 3"}),n.createElement("path",{d:h("difference",!0),fill:"none",stroke:"#9b4778",strokeWidth:"1.5"}),n.createElement("text",{x:"4",y:"220"},"B−A"),n.createElement("text",{x:"4",y:"240"},"0"),n.createElement("text",{x:"600",y:"295"},fe(l)," m"),n.createElement("text",{x:"44",y:"295"},t?"沿截面距离":"Section distance"," · ±",fe(f)," m")))}function ht({value:e,label:t,zh:a}){return n.createElement("div",{className:"protocol-metrics","aria-label":t},n.createElement("strong",null,t==="ROI metrics"?a?"选区 · 水面高度":"ROI · Surface height":a?"当前帧 · 水面高度":"Current frame · Surface height"),n.createElement("span",null,a?"共同列":"Common columns"," ",e.common),e.common?n.createElement(n.Fragment,null,n.createElement("span",null,"MAE ",fe(e.mae_m,100)," cm"),n.createElement("span",null,"Bias ",fe(e.bias_m,100)," cm"),n.createElement("span",null,"RMSE ",fe(e.rmse_m,100)," cm")):n.createElement("span",null,a?"不可用：无共同有效列":"Unavailable: no common columns"))}function Zi({spatial:e,plane:t,sliceIndex:a,rotationAxis:c,angle:i,sectionPercent:r,zh:d,restored:s,controlRef:f}){const[l,h]=y.useState(s?.roi??null),[m,w]=y.useState(s?.probe??null),[g,o]=y.useState(()=>s?.roi??Xn(e)),[b,v]=y.useState(()=>ba(s?.roi??Xn(e))),[S,B]=y.useState({}),p=$i(b,g,S),E=Object.keys(p.errors).length?d?"请补全数字；每个轴的最小值不能大于最大值。当前已应用的选区未改变。":"Enter all numeric bounds; each minimum must be no greater than its maximum. The applied ROI is unchanged.":"";y.useImperativeHandle(f,()=>({capture:()=>({spatial:e,roi:l,probe:m})}));const _=y.useMemo(()=>Fi(e),[e]),x=y.useMemo(()=>In(e),[e]),u=y.useMemo(()=>l?In(e,l):null,[e,l]),I=y.useMemo(()=>{if(t==="xz"||t==="oblique"&&c!=="y")return null;try{return Mt(e,{plane:t,index:Math.max(0,Math.min((t==="xy"?e.descriptor.shape[0]:e.descriptor.shape[1])-1,a)),angle:i,sectionPercent:r})}catch{return null}},[e,t,a,c,i,r]);function k(C){h(C),o(C),v(ba(C)),B({})}function O(){const C=Xn(e);h(null),o(C),v(ba(C)),B({})}function M(){p.valid&&(In(e,p.values),k({...p.values}))}const $=m?.index;return n.createElement(n.Fragment,null,n.createElement("h2",null,d?"高度与选区分析 · 帧 ":"Height & ROI analysis · frame ",e.descriptor.frameId),n.createElement("p",null,d?"原生列高度 · 最高过零点 · 共同有效域。点击探针，拖动选择ROI；灰色为无效区域。A/B共用色标，B−A正值表示预测偏高。":"Native highest-crossing columns and common support. Click to probe; drag to select ROI. Gray is invalid. Shared A/B scale; positive B−A means prediction is higher."),n.createElement("div",{className:"protocol-maps"},[["heightA","A / GT"],["heightB","B / Prediction"],["difference","B−A"]].map(([C,D])=>n.createElement(Pi,{key:C,spatial:e,kind:C,label:D,roi:l,probe:m,profile:I,range:C==="difference"?[-_.error,_.error]:_.height,onRegion:k,onProbe:w}))),n.createElement(ht,{value:x,label:"Frame spatial metrics",zh:d}),n.createElement("form",{onSubmit:C=>{C.preventDefault(),M()}},n.createElement("fieldset",{className:"protocol-roi"},n.createElement("legend",null,d?"选区范围 · 世界坐标（m）":"ROI bounds · world coordinates (m)"),[["xmin","X min"],["xmax","X max"],["zmin","Z min"],["zmax","Z max"]].map(([C,D])=>n.createElement("label",{key:C},D,n.createElement("input",{"aria-label":`ROI ${D}`,type:"number",step:"any",value:b[C],title:String(g[C]),"aria-invalid":!!p.errors[C],"aria-describedby":p.errors[C]?"roi-input-error":void 0,onChange:P=>{v(Z=>({...Z,[C]:P.target.value})),B(Z=>({...Z,[C]:!0}))}}))),n.createElement("button",{type:"submit",disabled:!p.valid},d?"应用选区":"Apply ROI"),n.createElement("button",{type:"button",onClick:O},d?"恢复全域":"Reset to full domain")),E&&n.createElement("p",{id:"roi-input-error",role:"alert"},E)),u&&n.createElement(ht,{value:u,label:"ROI metrics",zh:d}),m&&n.createElement("p",{"aria-label":"Protocol probe"},"X ",fe(m.x)," / Z ",fe(m.z)," m · A ",fe(e.wetA[$]?e.heightA[$]:null)," / B ",fe(e.wetB[$]?e.heightB[$]:null)," m · B−A ",fe(e.common[$]?e.heightB[$]-e.heightA[$]:null,100)," cm"),I?n.createElement(Di,{profile:I,zh:d}):n.createElement("p",{role:"status"},d?"选择 XY、YZ 或绕Y竖直截面查看高度曲线；水平／倾斜几何截面不作为俯视高度剖面。":"Choose XY, YZ or a vertical Y-axis section for heights; horizontal/tilted geometry is not a top-down height profile."),n.createElement("small",null,d?"单位：来源约定，未独立标定。高度仅表示俯视最高层，不覆盖完整翻卷内部结构。全序列指标保持原始范围；ROI与插值剖面不替换全局指标。":"Units: source convention, not independently calibrated. Heights describe the topmost layer, not complete overturning geometry. Sequence metrics retain their scope; ROI and interpolated profiles do not replace them."))}function Xi({viewMode:e="all",bundle:t,frame:a,plane:c,sliceIndex:i,rotationAxis:r,angle:d,sectionPercent:s,getReportView:f,onRestoreReportView:l,reportControlRef:h,onDownload:m,catalog:w,reportContext:g,onPause:o,unifiedRestore:b=!1}){const{language:v}=be(),S=v==="zh",B=JSON.stringify([t.runId,t.protocol,t.datasetA,t.datasetB,a]),[p,E]=y.useState(0),[_,x]=y.useState(null),[u,I]=y.useState(null),k=y.useRef(null),O=y.useRef(g);O.current=g,y.useEffect(()=>{u&&u.view.frame!==a&&I(null)},[a,u]),y.useEffect(()=>{const Z=new AbortController;let F=!0;return(async()=>{try{const R=await mt(ft,bt.indexSha256,t),G=R.frames.find(U=>U.frameId===a);if(!G)throw Error("No spatial resource for selected frame");if(!F)return;const ne=await ut(G,{...Yn(t),frameId:a},Z.signal);F&&x({key:B,spatial:ne})}catch(R){F&&x({key:B,error:R})}})(),()=>{F=!1,Z.abort()}},[t,a,B,p]);const M=_?.key===B?_:null;function $(){if(!M?.spatial||!k.current)throw Error("Wait for verified spatial resources");const Z=k.current.capture(),{view:F,scene:R}=f(),G=Si({bundle:t,...Z,view:F,catalog:w});return{record:G,canvas:Oi(G,Z.spatial,R)}}async function C(Z,F){o?.();const R=O.current,G=await mt(ft,bt.indexSha256,t),ne=Ai(Z,t,G,{catalog:w}),U=await ut(ne.descriptor,{...Yn(t),frameId:ne.view.frame},F);if(F.throwIfAborted(),O.current!==R)throw Error("View changed while restoring; retry from the current view");return{...ne,spatial:U}}async function D(Z,F){F.throwIfAborted();const R=JSON.stringify([t.runId,t.protocol,t.datasetA,t.datasetB,Z.view.frame]);x({key:R,spatial:Z.spatial}),I({...Z,revision:crypto.randomUUID()}),await l(Z.view,F)}const P=u?.view.frame===a?u:null;return n.createElement("section",{className:"protocol-spatial","aria-label":"Protocol spatial analysis"},n.createElement("div",{hidden:e==="report"},M?M.error?n.createElement(hn,{error:M.error,zh:S,resource:(S?"水面高度与掩码 · 帧 ":"Height and masks · frame ")+a,onRetry:()=>{x(null),E(Z=>Z+1)}}):n.createElement(Zi,{key:B+(P?.revision??""),controlRef:k,restored:P,spatial:M.spatial,plane:c,sliceIndex:i,rotationAxis:r,angle:d,sectionPercent:s,zh:S}):n.createElement("p",{role:"status"},S?`正在加载帧 ${a} 的同协议空间资源…`:`Loading protocol spatial resources for frame ${a}…`)),n.createElement("div",{hidden:e==="height"},f&&n.createElement(Ni,{unifiedRestore:b,key:t.runId,controlRef:h,ready:!!M?.spatial,capture:$,prepareImport:C,applyImport:D,onDownload:m,zh:S})))}function Dn(e,t,a="application/json"){const c=URL.createObjectURL(new Blob([t],{type:a})),i=document.createElement("a");i.href=c,i.download=e,i.click(),setTimeout(()=>URL.revokeObjectURL(c),1e3)}function Wi(e){if(!e?.dimensions||!e.axisSteps)return null;const t=[];for(let a=0;a<8;a++)t.push(e.origin.map((c,i)=>c+e.dimensions.reduce((r,d,s)=>r+(a>>s&1)*(d-1)*e.axisSteps[s][i],0)));return{min:[0,1,2].map(a=>Math.min(...t.map(c=>c[a]))),max:[0,1,2].map(a=>Math.max(...t.map(c=>c[a])))}}function Vi({workspace:e="3d",onWorkspace:t=()=>{},evaluation:a=null,evaluationError:c="",unifiedRestore:i=!1,onCancelImport:r,onRetryEvaluation:d,comparison:s,processing:f,activeGroup:l,onActiveGroup:h,setup:m,expectedFrames:w,metricsOverride:g,sourceCase:o,viewApiRef:b,initialView:v,onViewReady:S,onViewRestored:B,restoring:p=!1,frameSplit:E=s.frameSplit,readOnly:_=!1,active:x=!0}){const{tr:u,language:I}=be(),k=I==="zh",O=v?.settings,M=y.useRef(null),$=y.useRef(null),C=y.useRef(!1),[D,P]=y.useState(""),Z=s.id==="best-1027",[F,R]=y.useState(()=>!globalThis.matchMedia?.("(max-width:900px)").matches);y.useEffect(()=>{$.current?.pause()},[e]);const G=y.useRef(null),ne=y.useRef(null),U=y.useRef(F);function se(){R(!1),G.current?.focus()}y.useEffect(()=>{F&&!U.current&&ne.current?.focus(),U.current=F},[F]),y.useEffect(()=>{const A=L=>{L.key==="Escape"&&cn&&F&&(R(!1),ne.current?.parentElement?.contains(document.activeElement)&&G.current?.focus())};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[F]);const[ce,V]=y.useState(!0),N=y.useRef(null),[Y,K]=y.useState({subset:"all",metric:"height",grid:"coarse"}),[q,ae]=y.useState(null),[ie,xe]=y.useState(null),[We,Fe]=y.useState(0),[Ne,we]=y.useState(O?.shading||"original"),{presenting:Pe}=i0();y.useEffect(()=>{Pe&&$.current?.pause()},[Pe]);const[Le,Rn]=y.useState(null),[gn,rn]=y.useState(O?.errorScale||{locked:!1,limit:1}),Ve=y.useRef(null),sn=Vc(s);function Un(){Ve.current&&(Ve.current.open=!0,Ve.current.scrollIntoView?.({block:"start"}))}const yn=JSON.stringify(f?.lattice??null),oe=y.useMemo(()=>JSON.parse(yn),[yn]),Re=y.useMemo(()=>f?.frames?.map(A=>A.frame)||[],[f?.frames]),ze=y.useMemo(()=>Ln(o),[o]),le=y.useMemo(()=>l==="sdf"&&ze.length?ze:Re,[l,ze,Re]),_n=a?.frameIds??le,[T,W]=y.useState(O?.frame??(Z?1049:null)),[X,ge]=y.useState(null),[pe,Be]=y.useState(null),[Me,Qe]=y.useState(""),[Se,en]=y.useState(!1),[he,dn]=y.useState(()=>{if(O)return O.mode;const A=_?"split":pa("field-view")?.mode;return["split","overlay","wire-overlay","gt","prediction"].includes(A)?A:"split"}),[Ge,Aa]=y.useState(O?.quality??"balanced"),[nn,ka]=y.useState(O?.component??"magnitude"),[Ca,n1]=y.useState(.65),[on,Ia]=y.useState(O?.showContext??!1),[ln,Na]=y.useState(O?.vectorDensity??2e3),[fn,Ra]=y.useState(O?.arrowScale??1),[j,jn]=y.useState(O?.plane??(Z?"yz":"xz")),[Dt,vn]=y.useState(O?.sliceIndex??null),[Jn,Ma]=y.useState(O?.crosshair||[.5,.5]),[bn,Oa]=y.useState(!!O?.sourceRange),[qe,Ta]=y.useState(O?.sourceRange||[0,1]),[Oe,$a]=y.useState(O?.rotationAxis||"y"),[Ae,Fa]=y.useState(O?.angle??30),[ke,Hn]=y.useState(O?.sectionPercent??50),[En,Pa]=y.useState(O?.showPlane??!0),[Da,Zt]=y.useState(null),[Te,Kn]=y.useState(O?{showGt:O.showGt,showPrediction:O.showPrediction,gtOpacity:O.gtOpacity,predictionOpacity:O.predictionOpacity}:{showGt:!0,showPrediction:!0,gtOpacity:.65,predictionOpacity:.8}),[Xt,Za]=y.useState(""),an=y.useRef(null),mn=y.useRef(0),Wt=y.useRef(le);Wt.current=le;const Q=!!s?.settings?.previewOnly,tn=l==="sdf"&&ze.includes(T)&&!Re.includes(T);y.useEffect(()=>(an.current={frames:L0({fetchFrame:(A,L,z)=>Q0(A,L,{...z,withIdentity:!0}),decode:J0}),geometry:q0(),surface:n0()},()=>{mn.current++,an.current?.frames.dispose(),an.current?.geometry.dispose(),an.current?.surface.dispose(),an.current=null}),[s.id]),y.useEffect(()=>{ge(null),Be(null),W(O?.frame??(Z?1049:null)),V(!0),Qe("")},[s.id]),y.useEffect(()=>{if(_n.length&&!_n.includes(T)){const A=_?null:pa("field-view");W(A?.comparisonId===s.id&&le.includes(A.frame)?A.frame:le[0])}},[le,_n,T,s.id,_]),y.useEffect(()=>{!_&&T!=null&&yt("field-view",{mode:he,comparisonId:s.id,frame:T})},[he,T,s.id,_]),y.useEffect(()=>{let A=!0;if(_||g){Be(g??null);return}return ec(s.id).then(L=>{A&&Be(L)}).catch(L=>{A&&(Be(null),Qe(L.message))}),()=>{A=!1}},[s.id,le.length,s.status,g,_]);const Mn=X?kn(X.snapshot.data,l):null,On=X?.snapshot.data.fields.find(A=>A.id===(Mn?.groundTruth?.ids[0]||Mn?.prediction?.ids[0]))?.shape||oe?.dimensions,De=On?On[j==="yz"?0:j==="xz"?1:2]-1:0,ye=Math.max(0,Math.min(Dt??Math.floor(De/2),De)),Xa=y.useMemo(()=>({group:l,mode:Q?"gt":he,quality:Ge,component:nn,opacity:Ca,showContext:on,vectorDensity:ln,arrowScale:fn,plane:j,sliceIndex:ye,angle:Ae,sectionPercent:ke,rotationAxis:Oe,showPlane:En,sourceRange:bn&&qe[1]>qe[0]?qe:null,unit:Mn?.unit}),[l,he,Q,Ge,nn,Ca,on,ln,fn,j,ye,Ae,ke,Oe,En,bn,qe,Mn?.unit]),Ue=y.useMemo(()=>({group:l,quality:Ge,component:nn,showContext:on,vectorDensity:ln,arrowScale:fn,plane:j,sliceIndex:ye,angle:Ae,sectionPercent:ke,rotationAxis:Oe,previewOnly:Q}),[l,Ge,nn,on,ln,fn,j,ye,Ae,ke,Oe,Q]),je=JSON.stringify([s.id,T,Ue,We]);y.useEffect(()=>{const A=an.current;if(!A||T==null)return;const L=++mn.current;let z=!0;if(Qe(""),!ce||!le.includes(T)){ge(null),en(!1);return}return en(!0),xe({key:je,status:"loading"}),(async()=>{try{if(tn){const Je=await A.surface.select(o,T,Ge);if(!Je||!z||L!==mn.current)return;const xn=a0(Je.geometry,oe,Ue),$n={comparisonId:s.id,frameNumber:T,data:{fields:[],groups:{}},verifiedResource:Je.verifiedResource};ge({snapshot:$n,geometry:xn,settings:Ue}),xe({key:je,status:"ready"}),en(!1),Za(`${(A.surface.stats().bytes/1048576).toFixed(0)} MiB surface cache`);return}const ee=await A.frames.select(s.id,T);if(!ee||!z||L!==mn.current)return;let de;try{de=await A.geometry.request(ee,oe,Ue)}catch(Je){de={failed:!0,layers:[],warnings:[`3D preparation unavailable: ${Je.message}. Use slices below.`],byteLength:0}}if(!de||!z||L!==mn.current)return;ge({snapshot:ee,geometry:de,settings:Ue}),xe({key:je,status:"ready"}),en(!1);const un=A.frames.stats();Za(un.oversize?"Active frame exceeds preview cache budget":`${(un.bytes/1048576).toFixed(0)} MiB decoded cache`)}catch(ee){z&&L===mn.current&&(Qe(ee.message),xe({key:je,status:"error",error:ee.message}),en(!1))}})(),()=>{z=!1}},[s.id,T,Ue,oe,le,We,je,ce,tn,o,Ge]),y.useEffect(()=>{Me&&$.current?.pause()},[Me]);const Vt=y.useMemo(()=>Wi(f?.lattice),[f?.lattice]),Qn=y.useCallback(A=>W(A),[]),me=X?.snapshot.frameNumber,wn=me==null?null:pe?.frames?.[String(me)],ea=y.useCallback(A=>{$.current?.pause(),l==="velocity"&&!Re.includes(A)&&h("sdf"),W(A)},[l,Re,h]),Ce=JSON.stringify([s.id,T,l,nn,j,ye,Ae,ke,Oe]),[Wa,na]=y.useState(()=>({context:Ce,range:O?.region??null})),Va=y.useRef(Ce);y.useEffect(()=>{Va.current!==Ce&&(Va.current=Ce,na({context:Ce,range:null}))},[Ce]);const aa=Wa.context===Ce?Wa.range:null;function zt(A){$.current?.pause(),na({context:Ce,range:A})}function Gt(A){$.current?.pause(),Ma(A)}const Ie=X?.settings.group||l,Bn=X?kn(X.snapshot.data,Ie):null,H={shading:Ne,...Xa,...X?.settings,...Te,unit:Bn?.unit},Ze=ie?.key===je&&ie.status==="ready"&&!Se&&!Me&&!D&&!!Da&&X?.snapshot.frameNumber===T&&X?.settings===Ue&&!X?.geometry.failed;y.useEffect(()=>{S?.(Ze&&!p)},[Ze,p,S]),y.useEffect(()=>{if(!(!v||C.current)){if(Me||D||X?.geometry.failed){C.current=!0,B?.(Error("load"));return}if(Ze){C.current=!0;try{M.current.restoreCamera(v.camera),$.current.pause(),B?.(null)}catch(A){B?.(A)}}}},[v,Ze,Me,D,X,B]);function za(){if(!Ze||p||!o||bn&&!(qe[1]>qe[0]))throw Error("settings");return $.current.pause(),Ke({schema:Vn,name:`${o.id} · ${l.toUpperCase()} · ${me} · ${j==="oblique"?Oe.toUpperCase()+" "+Ae+"°":j.toUpperCase()}`,sourceSignature:St(o),settings:{...tn?{representation:Cn}:{},shading:Ne,caseId:o.id,frame:me,group:l,mode:Q?"gt":he,quality:Ge,component:nn,plane:j,sliceIndex:ye,angle:Ae,sectionPercent:ke,rotationAxis:Oe,showPlane:En,showContext:on,...Te,showPrediction:Q?!1:Te.showPrediction,vectorDensity:ln,arrowScale:fn,sourceRange:bn?qe:null,errorScale:gn,crosshair:Jn,region:Q?null:aa,playback:$.current.getSettings()},camera:M.current.getCamera()},[o])}y.useImperativeHandle(b,()=>({pause(){$.current?.pause()},captureView:za,async restoreAnalysis(A,L,z){if(z.throwIfAborted(),!a)throw Error("Reference analysis is not ready for this dataset");if(L==="report"){if(!N.current?.restoreText)throw Error("Analysis is not ready");return N.current.restoreText(A,z)}const ee=Ct(A,a);z.throwIfAborted(),$.current?.pause(),N.current?.clearSnapshot(),K(de=>({...de,subset:ee.subset,metric:ee.metric})),W(ee.frame)}}));function Yt(){$.current?.pause();let A=null,L=null,z=null,ee="No 3D preview for this frame";if(le.includes(T)){ee=Me||D||(X?.geometry.failed?"3D preparation failed":Se?"3D preview is loading":"3D preview is not ready or not verified");try{const de=tn?gt(o,T,Ge):_a(o,T);Ze&&de&&JSON.stringify(X.snapshot.verifiedResource)===JSON.stringify(de)&&(A=za(),z=M.current.capture(),L=de,ee=tn?"Exact-frame native SDF surface bytes verified; no volume samples":"Exact-frame preview bytes verified")}catch(de){A=null,L=null,z=null,ee=de.message}}return{view:{frame:T,plane:j,sliceIndex:ye,rotationAxis:Oe,angle:Ae,sectionPercent:ke,selection:Y,geometry:A,geometryResource:L,geometryStatus:{status:A?"included":"unavailable",reason:ee}},scene:z}}function Lt(A,L){if(L.throwIfAborted(),$.current?.pause(),W(A.frame),jn(A.plane),vn(A.sliceIndex),$a(A.rotationAxis),Fa(A.angle),Hn(A.sectionPercent),K(A.selection),Fe(ee=>ee+1),!A.geometry)return Promise.resolve();V(!0);const z=A.geometry.settings;return h(z.group),dn(z.mode),Aa(z.quality),ka(z.component),we(z.shading),Ia(z.showContext),Na(z.vectorDensity),Ra(z.arrowScale),Pa(z.showPlane),Kn({showGt:z.showGt,showPrediction:z.showPrediction,gtOpacity:z.gtOpacity,predictionOpacity:z.predictionOpacity}),Oa(!!z.sourceRange),Ta(z.sourceRange??[0,1]),rn(z.errorScale),Ma(z.crosshair),new Promise((ee,de)=>{const un=setTimeout(()=>xn(Error("Timed out loading the report view; retry the geometry download")),3e4),Je=()=>xn(Error("Report restore cancelled"));function xn($n){clearTimeout(un),L.removeEventListener("abort",Je),ae(null),$n?de($n):ee()}L.addEventListener("abort",Je,{once:!0}),ae({view:A,signal:L,finish:xn})})}y.useEffect(()=>{if(!(!q||q.signal.aborted)&&!(T!==q.view.frame||ie?.key!==je||ie.status==="loading")){if(ie.error||D||X?.geometry.failed){q.finish(Error(ie.error||D||"Geometry unavailable"));return}if(Ze){if(JSON.stringify(X.snapshot.verifiedResource)!==JSON.stringify(q.view.geometryResource)){q.finish(Error("Report preview resource identity mismatch"));return}try{M.current.restoreCamera(q.view.geometry.camera),$.current?.restoreSettings(q.view.geometry.settings.playback),na({context:Ce,range:q.view.geometry.settings.region??null}),q.finish()}catch(A){q.finish(A)}}}},[q,Ze,T,ie,je,D,X]);const qt=O0({sourceCase:o,comparison:s,processing:f,snapshot:X?.snapshot,geometry:X?.geometry,settings:H,metrics:pe}),Ut=X?.snapshot.data.fields.find(A=>A.id===(Bn?.groundTruth?.ids[0]||Bn?.prediction?.ids[0])),Ga=f?.lattice&&j!=="oblique"?ac(f.lattice,j,ye):null,ta={shading:Ie==="sdf"?Ne:"not_applicable",comparison_id:s.id,dataset_a:s.groundTruthId||s.labels?.gt?.displayName||"Ground Truth",dataset_b:Q?"":s.predictionId||s.labels?.prediction?.displayName||"Prediction",frame:me,group:Ie,component:H.component,plane:H.plane,mode:H.mode,camera:Da,gt_opacity:Te.gtOpacity,prediction_opacity:Te.predictionOpacity,preview_quality:H.quality,show_plane:En,gt_visible:Te.showGt,prediction_visible:Te.showPrediction,value_unit:Bn?.unit||"undeclared",coordinate_unit:"source_grid_units",lattice_origin:oe?.origin,lattice_axis_steps:oe?.axisSteps,dimensions:oe?.dimensions,...H.plane==="oblique"?t0(va(oe,H.angle,H.sectionPercent,H.rotationAxis)):{slice_index:H.sliceIndex,angle_degrees:H.plane==="xy"?0:H.plane==="yz"?90:null,sampling:"native_voxel_layer"},section_percent:H.plane==="oblique"?H.sectionPercent:ra(H.sliceIndex,0,(oe?.dimensions?.[H.plane==="xy"?2:H.plane==="yz"?0:1]||1)-1),crosshair_normalized:Jn,local_region:aa,saved_metrics_scope:"precomputed_original_support_not_current_slice"},jt=n.createElement("div",{id:"analysis-height",hidden:!["height","report"].includes(e)},a&&T!=null&&n.createElement(Xi,{viewMode:e==="report"?"report":"height",unifiedRestore:i,bundle:a,frame:T,plane:j,sliceIndex:ye,rotationAxis:Oe,angle:Ae,sectionPercent:ke,getReportView:Yt,onRestoreReportView:Lt,reportControlRef:N,onDownload:Dn,catalog:[o],reportContext:JSON.stringify([Ce,Y]),onPause:()=>$.current?.pause()}));function Tn(){N.current?.cancel(),r?.()}return n.createElement("div",{className:`field-workbench v2-field${` demo-field demo-panel-${e} ${F?"settings-open":""}`}`,inert:p||void 0,onPointerDownCapture:Tn,onKeyDownCapture:Tn,onChangeCapture:Tn,onWheelCapture:Tn},n.createElement("aside",{id:"analysis-settings",className:"field-sidebar","aria-label":k?"视图设置":"View settings"},n.createElement("button",{ref:ne,className:"demo-close-settings",onClick:se},k?"关闭设置":"Close settings"),n.createElement("details",{ref:Ve,className:"field-setup",open:!s},n.createElement("summary",null,_?k?"已发布数据详情":"Published dataset details":u("Datasets & comparison setup")),m),n.createElement("div",{hidden:e==="height"},n.createElement("h2",null,u("Display controls")),n.createElement("div",{className:"field-tabs compact"},["sdf","velocity"].map(A=>n.createElement("button",{key:A,"aria-label":A==="sdf"?"SDF":"Velocity",disabled:!s.availableGroups.includes(A)||A==="velocity"&&!Re.includes(T),"aria-pressed":l===A,onClick:()=>h(A)},u(A==="sdf"?"SDF":"Velocity"),!s.availableGroups.includes(A)&&n.createElement("small",null,u("Not available"))))),!Q&&n.createElement("div",{className:"v2-primary-modes",role:"group","aria-label":k?"主要显示模式":"Primary display mode"},n.createElement("button",{"aria-pressed":he==="split",onClick:()=>dn("split")},k?"并排":"Side by side"),n.createElement("button",{"aria-pressed":he==="overlay",onClick:()=>dn("overlay")},k?"叠加":"Overlay")),n.createElement("p",{className:"v2-mode-caption"},Q?k?"单组查看 · 不显示误差":"Single dataset · no error scores":["split","overlay"].includes(he)?k?"A / GT 蓝色 · B / Prediction 橙色":"A / GT blue · B / Prediction orange":k?"正在使用高级显示模式":"Advanced display mode active")),n.createElement("h2",null,u("Cross section")),n.createElement("label",null,u("Plane"),n.createElement("select",{"aria-label":u("Slice plane"),value:j,onChange:A=>{jn(A.target.value),vn(null)}},["xy","xz","yz"].map(A=>n.createElement("option",{key:A,value:A},A.toUpperCase()," · ",k?"固定":"fixed"," ",A==="xy"?"Z":A==="xz"?"Y":"X")),n.createElement("option",{value:"oblique",disabled:!ua(oe)},k?"斜切 · X / Y / Z 旋转":"Oblique · X / Y / Z rotation"))),j==="oblique"&&n.createElement(T0,{value:Oe,onChange:A=>{$.current?.pause(),$a(A)}}),j==="oblique"&&n.createElement("label",{className:"v2-position"},k?"切面角度":"Section angle"," ",n.createElement("output",null,Ae,"°"),n.createElement("input",{"aria-label":k?"场切面角度":"Field section angle",type:"range",min:"0",max:"180",step:"1",value:Ae,onChange:A=>Fa(+A.target.value)}),n.createElement("small",null,k?"只旋转切面，相机不变；切面与探针同步。":"Rotates the section, not the camera; probes remain synchronized.")),n.createElement("label",{className:"v2-position"},k?"切片位置":"Section position"," ",n.createElement("output",null,(j==="oblique"?ke:ra(ye,0,De)).toFixed(1),"%"),n.createElement("input",{"aria-label":k?"场切片位置百分比":"Field section position percent","aria-valuetext":`${(j==="oblique"?ke:ra(ye,0,De)).toFixed(1)}%`,type:"range",min:"0",max:j==="oblique"?100:De,step:j==="oblique"?.1:1,disabled:!On||De===0,value:j==="oblique"?ke:ye,onChange:A=>j==="oblique"?Hn(+A.target.value):vn(+A.target.value)})),n.createElement("div",{className:"v2-range-labels"},n.createElement("span",null,"0%"),n.createElement("span",null,"100%")),n.createElement("small",null,j==="oblique"?k?"三线性取样：参与插值的邻点必须全部有效，缺失处留空。":"Trilinear sampling: all contributing neighbours must be valid; missing support stays empty.":k?"按原始体素层移动，切面与下方探针同步。":"Snaps to original voxel layers; synchronized with slices and probe."),n.createElement("label",{className:"check"},n.createElement("input",{type:"checkbox",checked:En,onChange:A=>Pa(A.target.checked)}),k?"显示半透明切面":"Show translucent section plane"),n.createElement("details",{hidden:e==="height",className:"v2-advanced"},n.createElement("summary",null,k?"显示、单位与网格详情":"Display, units & grid details"),n.createElement("p",null,j==="oblique"?`${k?"斜切角度":"Oblique angle"} ${Oe.toUpperCase()} ${Ae}°`:`${u("Slice ")}${ye} / ${De}`,n.createElement("br",null),u("World: "),Ga?Ga.map(A=>A.toFixed(3)).join(", "):"—",n.createElement("br",null),k?"原始网格坐标；单位见数据来源声明。":"Source-grid coordinates; see the source unit declaration."),n.createElement("label",null,u("3D display mode"),n.createElement("select",{"aria-label":u("3D display mode"),value:Q?"gt":he,disabled:Q,onChange:A=>dn(A.target.value)},n.createElement("option",{value:"split"},u("Side by side · linked")),n.createElement("option",{value:"wire-overlay"},u("Solid + X-ray wireframe · overlap safe")),n.createElement("option",{value:"overlay"},u("Transparent overlay · blue / orange")),n.createElement("option",{value:"gt"},u("Ground Truth only")),n.createElement("option",{value:"prediction"},u("Prediction only")))),he==="wire-overlay"&&!Q&&n.createElement("small",{className:"field-mode-help"},u("Blue: GT surface. Orange: Prediction wireframe, visible through GT. Geometry and scores are unchanged.")),n.createElement("label",null,u("Preview quality"),n.createElement("select",{value:Ge,onChange:A=>Aa(A.target.value)},n.createElement("option",{value:"balanced"},u("Balanced · stride 2")),n.createElement("option",{value:"fine"},u("Fine · stride 1")))),n.createElement("small",null,u("Display only. Metrics retain the comparison lattice.")),n.createElement("fieldset",{className:"field-layer-controls"},n.createElement("legend",null,u("Visible layers")),[["Gt","Ground Truth","gtOpacity"],...Q?[]:[["Prediction","Prediction","predictionOpacity"]]].map(([A,L,z])=>n.createElement("div",{key:A,className:"field-layer-row"},n.createElement("label",{className:"check"},n.createElement("input",{type:"checkbox",checked:Te[`show${A}`],onChange:ee=>Kn(de=>({...de,[`show${A}`]:ee.target.checked}))}),n.createElement("span",{className:`field-layer-dot ${A==="Gt"?"gt":"prediction"}`}),u(L)),n.createElement("label",null,u(L),u(" opacity "),n.createElement("output",null,Math.round(Te[z]*100),"%"),n.createElement("input",{"aria-label":`${L} opacity`,type:"range",min:".1",max:"1",step:".05",value:Te[z],disabled:!Te[`show${A}`],onChange:ee=>Kn(de=>({...de,[z]:Number(ee.target.value)}))}))))),l==="velocity"&&n.createElement(n.Fragment,null,n.createElement("label",null,u("Velocity display"),n.createElement("select",{value:nn,onChange:A=>ka(A.target.value)},["magnitude","x","y","z"].map(A=>n.createElement("option",{key:A,value:A},A==="magnitude"?Q?"Magnitude":u("Magnitude / EPE"):A.toUpperCase())))),n.createElement("label",null,u("Vector count limit"),n.createElement("input",{type:"number",min:"1",max:"20000",value:ln,onChange:A=>Na(Math.max(1,Math.min(2e4,Number(A.target.value)||1)))})),n.createElement("label",null,u("Arrow scale"),n.createElement("input",{type:"number",min:".001",step:".1",value:fn,onChange:A=>Ra(Math.max(.001,Number(A.target.value)||1))})),s.availableGroups.includes("sdf")&&n.createElement("label",{className:"check"},n.createElement("input",{type:"checkbox",checked:on,onChange:A=>Ia(A.target.checked)}),u(" Show SDF context"))),n.createElement("label",{className:"check"},n.createElement("input",{type:"checkbox",checked:bn,onChange:A=>Oa(A.target.checked)}),u(" Fixed source color range")),bn&&n.createElement("div",{className:"row"},qe.map((A,L)=>n.createElement("input",{key:L,"aria-label":L?"Color maximum":"Color minimum",type:"number",value:A,step:".01",onChange:z=>Ta(ee=>ee.map((de,un)=>un===L?Number(z.target.value):de))}))),_&&Q?n.createElement("details",{className:"alignment-report"},n.createElement("summary",null,"Grid and provenance"),n.createElement("dl",null,n.createElement("div",null,n.createElement("dt",null,"Canonical lattice"),n.createElement("dd",null,oe?.dimensions?.join(" × ")," voxels")),n.createElement("div",null,n.createElement("dt",null,"Voxel size"),n.createElement("dd",null,oe?.voxelSize?.join(" × ")||"See source declaration")),n.createElement("div",null,n.createElement("dt",null,"Source"),n.createElement("dd",null,"Simulation Ground Truth. No prediction alignment or error comparison.")))):n.createElement(Wc,{lattice:f?.lattice,comparison:s}))),n.createElement("div",{className:"field-center"},c&&n.createElement(hn,{error:c,zh:k,resource:k?"序列评估资源":"Sequence evaluation resources",onRetry:d}),n.createElement(hn,{error:Me,zh:k,resource:(k?"当前帧三维资源：":"Current-frame geometry: ")+T,onRetry:()=>Fe(A=>A+1)}),a&&n.createElement("div",{className:"analysis-toolbar","aria-label":k?"分析导航":"Analysis navigation"},n.createElement("label",null,k?"当前帧":"Current frame"," ",n.createElement("select",{"aria-label":"Analysis frame",value:T??a.frameIds[0],onChange:A=>ea(Number(A.target.value))},a.frameIds.map(A=>n.createElement("option",{key:A,value:A},A,ze.includes(A)||Re.includes(A)?" · 3D":"")))),n.createElement("label",null,k?"截面":"Section"," ",n.createElement("select",{"aria-label":"Analysis section",value:j,onChange:A=>{jn(A.target.value),vn(null)}},["xy","xz","yz"].map(A=>n.createElement("option",{key:A,value:A},A.toUpperCase())),n.createElement("option",{value:"oblique",disabled:!ua(oe)},k?"斜切":"Oblique"))),n.createElement("label",null,j==="oblique"?k?"位置 %":"Position %":k?"切片索引":"Slice index"," ",n.createElement("input",{"aria-label":"Analysis section position",type:"number",min:"0",max:j==="oblique"?100:De,step:j==="oblique"?.1:1,disabled:!On||De===0,value:j==="oblique"?ke:ye,onChange:A=>{const L=Number(A.target.value);Number.isFinite(L)&&(j==="oblique"?Hn(Math.max(0,Math.min(100,L))):vn(Math.max(0,Math.min(De,Math.round(L)))))}})),n.createElement("nav",{hidden:cn,"aria-label":k?"分析区域":"Analysis sections"},n.createElement("a",{href:"#analysis-spatial"},k?"三维视图":"3D view"),n.createElement("a",{href:"#analysis-height"},k?"高度与选区":"Height & ROI"),n.createElement("a",{href:"#analysis-slices"},k?"场切片":"Field slices"),n.createElement("a",{href:"#analysis-summary"},k?"序列统计":"Sequence metrics")),["3d","height","slices"].includes(e)&&n.createElement("button",{ref:G,className:"demo-settings-toggle","aria-controls":"analysis-settings","aria-expanded":F,onClick:()=>R(A=>!A)},k?"视图设置":"View settings"),n.createElement("span",{className:"demo-frame-scope"},le.includes(T)?k?"当前帧支持三维":"3D available for this frame":k?"当前帧仅高度与序列数据":"Height and sequence data for this frame")),n.createElement("div",{className:"demo-geometry-panel",hidden:e!=="3d"},tn&&n.createElement("p",{className:"demo-surface-scope"},k?"原生 SDF 三维表面 · 支持精细／均衡显示；高度与 ROI 使用同一帧。体积场与速度切片另有覆盖范围。":"Native SDF 3D surface · Fine / Balanced display; same-frame height and ROI. Volume and velocity slices have separate coverage."),n.createElement("div",{id:"analysis-spatial",className:"v2-section-heading"},!cn,n.createElement("div",null,n.createElement("h2",null,k?"3D 空间分析":"3D spatial analysis"),n.createElement("p",null,Q?k?"选择当前帧，查看三维场与同一位置的切片。":"Choose a frame and inspect its 3D field and synchronized slice.":k?"选择当前帧，比较三维形状与同一位置的场切片。":"Choose a frame and compare geometry and field values at the same section."))),a&&T!=null&&!le.includes(T)?n.createElement("p",{role:"status",className:"reference-scope"},k?`帧 ${T} 无三维缓存。仍可查看此帧的高度图和指标；未替换为邻帧。`:`Frame ${T} has no geometry cache. Height maps and metrics retain this exact frame.`,n.createElement("button",{onClick:()=>t("height")},k?"查看此帧高度与 ROI":"View this frame’s height & ROI")):ce?n.createElement(lc,{onShading:we,inspection:!Se&&Le?.context===Ce?Le.value:null,onSceneError:P,controlRef:M,key:s.id,onCameraChange:Zt,frameSplit:E,displayedFrame:me,labels:s.labels,geometry:X?.geometry,settings:H,bounds:Vt,loadingFrame:Se?T:null,error:null}):n.createElement("div",{className:"demo-geometry-start"},n.createElement("p",null,k?"高度分析已可使用。三维视图每帧约25 MB，点击后加载。":"Height analysis is ready. The 3D view loads about 25 MB for the selected frame."),n.createElement("button",{type:"button",onClick:()=>V(!0)},k?"打开当前帧三维":"Open current frame in 3D")),ce&&(!a||le.includes(T))&&n.createElement(fc,{controlRef:$,initialPlayback:O?.playback,active:x&&!p&&e==="3d",frameSplit:E,frames:le,displayedFrame:me,requestedFrame:T,status:s.status||"ready",loading:Se,onFrame:Qn,onScrubbing:A=>an.current?.frames.setScrubbing(A)})),jt,n.createElement("details",{hidden:e!=="time",className:"analysis-source"},n.createElement("summary",null,k?"数据与显示说明":"Data and display details"),n.createElement("details",{className:"field-saved-note"},n.createElement("summary",null,Q?u("Single dataset preview — no comparison scores"):`Evaluation: ${Object.values(s.settings?.sdf||{}).some(A=>A?.semantics==="water_interior")?"conditional GT-water distance support":s.settings?.sdfEvaluationRegion==="gt_water"?"GT water only":"full domain"} · Saved settings`),n.createElement("p",null,o?.metrics?.reconstructionEvaluation?k?"Best_1027 三帧本地参考结果。原生场指标、俯视高度指标和水下 0.1 m 速度指标使用各自明确的有效域；查看下方计算规则。":"Best_1027 three-frame local reference. Native-volume, top-down height and underwater 0.1 m metrics use separate documented supports; see the protocol below.":_?Q?"Ground Truth fields are shown for inspection. This example contains no prediction and has no error metrics.":"Precomputed results retain the original comparison settings and validity masks. Conditional GT-water distance scores describe their valid support only. Occupancy and surface metrics use separate validity rules; unsupported metrics remain N/A. This example is not a model-ranking benchmark. 3D and slices show the saved aligned fields.":u("Results use the saved comparison settings. Create a new comparison after changing declarations. Occupancy and surface metrics have separate validity rules. Original scores are not certified for model ranking; use Results Library common-support evaluation. 3D and slices show the original aligned fields."))),_&&n.createElement($0,{context:qt,busy:Se})),n.createElement("details",{hidden:e!=="time",open:!a,className:"legacy-height-analysis"},n.createElement("summary",null,a?k?"旧预览协议 · 三帧高度诊断":"Legacy preview protocol · three-frame height diagnosis":k?"高度诊断":"Height diagnosis"),o?.metrics?.reconstructionEvaluation&&n.createElement(qc,{protocol:o.metrics.reconstructionEvaluation,frame:X?.snapshot.data,lattice:oe,frameNumber:me,busy:Se||me!==T||Ie!==l,onFrame:Qn}),!Q&&l==="sdf"&&n.createElement(Gc,{frame:X?.snapshot.data,lattice:oe,comparison:s,plane:H.plane,sliceIndex:H.sliceIndex,rotationAxis:H.rotationAxis,angle:H.angle,sectionPercent:H.sectionPercent,frameNumber:me,busy:Se||me!==T||Ie!==l})),n.createElement("section",{hidden:e!=="slices",id:"analysis-slices",className:"field-slices"},n.createElement("h2",null,u("Synchronized slices & probe")),n.createElement("p",{className:"v2-mode-caption"},Ie==="sdf"?Q?k?"GT 单场切片，不含比较误差。":"GT field slices only; no comparison errors.":k?"此处为 SDF 场差值（B−A），不等于水面高度差。":"This is the SDF field difference (B−A), not water-surface height error.":k?"速度场切片与探针；瞬时矢量不是粒子轨迹。":"Velocity slices and probes; instantaneous vectors are not particle paths."),tn?n.createElement("div",{className:"reference-scope"},n.createElement("p",null,k?"本帧已提供真实三维表面、高度与 ROI；完整体积场切片仅发布了以下三帧。切换帧会明确改变当前帧号。":"This frame has its actual 3D surface, height and ROI. Full volume slices are published for the three frames below. Choosing one explicitly changes the frame."),Re.map(A=>n.createElement("button",{key:A,onClick:()=>ea(A)},A))):Ut?n.createElement(yc,{reportReady:Ze&&!p,captureScene:()=>{if(!Ze||p)throw Error(k?"等待当前帧与三维加载完成。":"Wait for the current frame and 3D.");return $.current?.pause(),M.current.capture()},reportLabels:{a:s.labels?.gt?.displayName||"Ground Truth",b:s.labels?.prediction?.displayName||"Prediction"},savedMetrics:wn,region:Q?null:aa,onRegion:zt,inspectionContext:Ce,onInspection:Rn,busy:Se||me!==T||X?.settings!==Ue,errorScale:gn,onErrorScale:rn,frameNumber:me,frameSplit:E,exportStem:sn,viewMetadata:ta,rotationAxis:H.rotationAxis,angle:H.angle,sectionPercent:H.sectionPercent,frame:X.snapshot.data,group:Ie,plane:H.plane,sliceIndex:H.sliceIndex,crosshair:Jn,onCrosshair:Gt,component:H.component,fixedRange:Xa.sourceRange,lattice:oe,single:Q,label:"Ground Truth"}):n.createElement("p",null,u("No field samples available for this view."))),n.createElement("div",{hidden:e!=="time",id:"analysis-summary"},a&&n.createElement(di,{displayGeometryFrames:ze.length?ze:Re,unifiedRestore:i,bundle:a,frame:T,onFrame:ea,onDownload:Dn,reportSelection:Y,onReportSelection:K})),!Q&&n.createElement("details",{open:!cn,hidden:e!=="time",className:"demo-legacy-sequence"},n.createElement("summary",null,k?"旧预览协议 · 三帧序列诊断":"Legacy preview protocol · three-frame sequence diagnostics"),n.createElement("section",{className:"v2-field-temporal","aria-label":k?"时间分析":"Temporal analysis"},n.createElement("div",{className:"v2-section-heading"},n.createElement("span",null,"02"),n.createElement("div",null,n.createElement("h2",null,k?"时间分析":"Temporal analysis"),n.createElement("p",null,k?"保留逐帧绝对误差与序列统计。只能跳转到已有三维数据的帧。":"Absolute errors and sequence statistics. Frame navigation is available only where geometry exists."))),n.createElement(Zc,{frameSplit:E,onReviewSetup:Un,comparisonId:sn,frames:le,expectedFrames:w,metrics:pe,groups:s.availableGroups,group:Ie,status:s.status,currentFrame:me,onFrame:Qn,sdfUnit:kn(X?.snapshot.data,"sdf").unit||s.settings?.sdf?.gt?.unit||"unit undeclared",velocityUnit:kn(X?.snapshot.data,"velocity").unit||s.settings?.velocity?.gt?.unit||"unit undeclared"}))),n.createElement("small",{hidden:cn,className:"field-memory"},Xt,o?.metrics?.reconstructionEvaluation?k?" · 本地三帧数据 · 按需加载":" · Local three-frame data · Loaded on demand":_?" · Published samples · Geometry prepared in your browser":u(" · Geometry prepared off the UI thread · No cloud upload"))),n.createElement("aside",{className:"field-results"},a&&n.createElement("p",{className:"reference-scope"},k?"旧预览协议 · 三帧空间诊断":"Legacy preview protocol · three-frame spatial diagnostics"),n.createElement("h2",null,u("Current frame "),n.createElement("span",null,me??"—")),Q?n.createElement("p",null,u("Single dataset preview — no comparison scores")):n.createElement(vc,{frame:me,metrics:wn,group:Ie,unit:Bn?.unit||""}),!Q&&n.createElement(n.Fragment,null,n.createElement(Xc,{group:Ie}),n.createElement("div",{className:"field-exports"},n.createElement("h2",null,u("Export results")),n.createElement("button",{disabled:!pe,onClick:()=>Dn(`${sn}_metrics.json`,JSON.stringify({...pe,current_view:ta},null,2))},u("Export JSON")),n.createElement("button",{disabled:!wn,onClick:()=>{const A=["metric,value",...Object.entries(ta).map(([L,z])=>[L,typeof z=="object"?JSON.stringify(z):String(z??"")].map(ee=>'"'+String(ee).replaceAll('"','""')+'"').join(",")),`sdf_error_region,${wn?.sdf?.evaluationRegion||s.settings?.sdfEvaluationRegion||"full_domain"}`];for(const[L,z]of Object.entries(wn?.[Ie]||{}))(typeof z=="number"||z===null)&&A.push(`${L},${z??""}`);Dn(`${sn}_${me}_${Ie}.csv`,A.join(`
`),"text/csv")}},u("Export CSV")),n.createElement("small",null,_?"Download saved values: JSON includes all metric records; CSV describes the displayed frame.":u("JSON: sequence · CSV: displayed frame. Saved-result ZIP includes source names and complete provenance.")))),!Q&&n.createElement("p",null,u("All metric averages and per-frame values are below the synchronized slices. Use the SDF / Velocity tabs to switch field groups."))))}const zi={kind:"field",parse:Uc,read:jc,write:Jc,validate:Ke,error:Hc,title:e=>e?"场比较方案":"Saved field views",intro:e=>e?"保存样例、SDF/速度分量、帧、切面、探针、视角、色标、透明度、箭头与播放设置。恢复时重新读取数据并暂停播放；已有评分保持不变。":"Save sample, SDF/velocity component, frame, section, probe, camera, color scales, opacity, arrows and playback settings. Restore reloads data and pauses playback; saved scores are unchanged.",describe:(e,t)=>`${e.settings.caseId} · ${e.settings.group.toUpperCase()}${e.settings.group==="velocity"?" / "+e.settings.component:""} · ${t?"帧":"Frame"} ${e.settings.frame} · ${e.settings.plane==="oblique"?(e.settings.rotationAxis||"y").toUpperCase()+" "+e.settings.angle+"° / "+e.settings.sectionPercent+"%":e.settings.plane.toUpperCase()+" / "+e.settings.sliceIndex}`,storageNote:e=>e?"场方案与水面方案分开保存。仅保存在当前浏览器和网站地址；清除网站数据会丢失，请导出备份。导入文件仅在本机读取，不含场数据或计算结果；仅支持场比较方案 JSON。":"Field views are stored separately from wave views in this browser and site address. Clearing site data removes them; export a backup. Imports are read locally and contain no field arrays or computed results. Only field-view JSON is supported."};function Gi(e){return n.createElement(F0,{adapter:zi,...e})}function ma(e){if(new TextEncoder().encode(e).length>2*1024*1024)throw Error("Analysis file too large");let t;try{t=JSON.parse(e)}catch{throw Error("Invalid analysis JSON")}if(t?.schema===Sa)return{kind:"report",value:t};if(t?.schema===Vn)return{kind:"field",value:t};if(t&&!t.schema&&t.schemaVersion===1&&typeof t.runId=="string"&&t.protocol&&t.datasetA&&t.datasetB&&"subset"in t&&"metric"in t&&"frame"in t)return{kind:"selection",value:t};throw Error("Unsupported analysis file")}const Yi={report:["完整分析报告：恢复帧、选区、探针、截面和可用相机；重新核验资源。","Analysis report: restore frame, ROI, probe, section and available camera; verify resources again."],field:["场比较方案：恢复数据组合、三维帧、显示设置与相机；不含水面高度选区。","Field view: restore dataset, geometry frame, display settings and camera; no surface-height ROI."],selection:["序列选择：只恢复帧号、帧集合与曲线类型；不恢复选区或相机。","Sequence selection: restore only frame, frame set and curve; no ROI or camera."]};function Li({onRestore:e,zh:t,controlRef:a}){const[c,i]=y.useState(""),[r,d]=y.useState(""),[s,f]=y.useState(null),[l,h]=y.useState(""),[m,w]=y.useState(!1),g=y.useRef(null);function o(){g.current&&(g.current.abort(),g.current=null,w(!1),h(t?"恢复已取消，保留后续操作。":"Restore cancelled; newer actions retained."))}y.useImperativeHandle(a,()=>({cancel:o})),y.useEffect(()=>()=>g.current?.abort(),[]);let b;try{c.trim()&&(b=ma(c))}catch{}async function v(B){if(o(),!B)return;const p=new AbortController;g.current=p,f(null),i(""),d(B.name),h("");try{if(B.size>2*1024*1024)throw Error("Analysis file too large");const E=await B.text();p.signal.throwIfAborted(),ma(E),i(E)}catch(E){p.signal.aborted||f(E)}finally{g.current===p&&(g.current=null)}}async function S(){o();const B=new AbortController;g.current=B,w(!0),f(null),h(t?"正在识别文件并核验资源…":"Recognizing the file and verifying resources…");try{const p=ma(c);await e(c,p,B.signal),B.signal.throwIfAborted(),h(t?"恢复完成。请核对当前帧和范围；导出前重新生成报告。":"Restored. Check frame and scope; create a fresh report before exporting.")}catch(p){B.signal.aborted||(f(p),h(""))}finally{g.current===B&&(g.current=null,w(!1))}}return n.createElement("details",{id:"restore-analysis",className:"restore-analysis"},n.createElement("summary",null,t?"恢复分析 · 打开 JSON":"Restore analysis · Open JSON"),n.createElement("p",null,t?"选择文件或粘贴内容，工具会识别恢复范围。文件在本机读取，仍需匹配的数据资源。":"Choose a file or paste its contents. The tool identifies what it restores. Files stay local; matching data resources are required."),n.createElement("label",null,t?"选择分析文件":"Choose analysis file"," ",n.createElement("input",{type:"file",accept:".json,application/json","aria-label":"Analysis JSON file",onChange:B=>{v(B.target.files?.[0]),B.target.value=""}})),r&&n.createElement("p",null,r),n.createElement("label",null,t?"或粘贴 JSON":"Or paste JSON",n.createElement("textarea",{"aria-label":"Analysis JSON text",rows:"4",value:c,onChange:B=>{o(),i(B.target.value),d(""),f(null),h("")}})),b&&n.createElement("p",{className:"import-kind"},Yi[b.kind][t?0:1]),n.createElement("div",{className:"reference-controls"},n.createElement("button",{disabled:!c.trim()||m,onClick:S},t?"恢复这份分析":"Restore this analysis"),m&&n.createElement("button",{onClick:o},t?"取消恢复":"Cancel restore")),n.createElement(hn,{error:s,zh:t}),n.createElement("p",{role:"status","aria-live":"polite"},l))}const qi=`{
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
`,Ui=`{
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
`,ji=`# OceanScope public source summary

This release presents supplied scene and model descriptions as claims, not independently audited training history. Original machine paths and source prose are omitted. Numerical results, masks and protocol identities are retained.

- Model: "Model A"
- Scene: "v2 Gentle clean full-SDF velocity"
- Camera configuration: ["camera29","camera32","camera35","camera02","camera05","camera08","camera11","camera14","camera17","camera20","camera23","camera26"]
- Source frame rate: "24 fps; 1001–1096"
- Train / validation / test: "v2 all96 test; never used for training/checkpoint choice"
- OceanBox training scenes: ["variant_00000","variant_00001","variant_00002","variant_00003","variant_00004","variant_00008"]
- Preprocessing: "Temporal smoothing"
- Unit evidence: "source convention; not independently calibrated"
`,Ji=`# OceanScope public source summary

This release presents supplied scene and model descriptions as claims, not independently audited training history. Original machine paths and source prose are omitted. Numerical results, masks and protocol identities are retained.

- Model: "Model A"
- Scene: "v2 Gentle clean full-SDF velocity"
- Camera configuration: ["camera29","camera32","camera35","camera02","camera05","camera08","camera11","camera14","camera17","camera20","camera23","camera26"]
- Source frame rate: "24 fps; 1001–1096"
- Train / validation / test: "v2 all96 test; never used for training/checkpoint choice"
- OceanBox training scenes: ["variant_00000","variant_00001","variant_00002","variant_00003","variant_00004","variant_00008"]
- Preprocessing: "Temporal smoothing"
- Unit evidence: "source convention; not independently calibrated"
`;function Hi(e,t){const a=[];(e?.gtRole!=="gt"||t?.gtRole!=="gt"||e?.predictionRole!=="prediction"||t?.predictionRole!=="prediction")&&a.push("Explicit GT/prediction roles required");for(const i of["scene","gtManifest","protocolSha256","frameIds","domain","unitStatus"])(e?.[i]==null||t?.[i]==null||ue(e[i])!==ue(t[i]))&&a.push(`Different or unknown ${i}`);const c=["camera","model","preprocessing"].filter(i=>ue(e?.[i])!==ue(t?.[i]));return{comparable:a.length===0,blockedReasons:a,differences:c}}async function Ki(e,t,a){const c=JSON.parse(e);if(c.schemaVersion!==1||c.runId!==t.runId||c.protocolSha256!==t.protocol.sourceScriptSha256||c.manifestA!==t.datasetA.manifestSha256||c.manifestB!==t.datasetB.manifestSha256)throw Error("Declaration identity mismatch");if(!Array.isArray(c.entries)||new Set(c.entries.map(r=>r.id)).size!==c.entries.length)throw Error("Invalid declarations");const i={gtIdentity:c.manifestA,predictionIdentity:c.manifestB};for(const r of c.entries){if(!["claimed","verified","unknown"].includes(r.status)||!r.id||!r.label)throw Error("Invalid declaration status");if(r.status==="unknown"&&r.value!==null)throw Error("Unknown declaration must have no asserted value");if(r.status==="verified"&&(!Object.hasOwn(i,r.id)||r.value!==i[r.id]))throw Error("Unsupported independent verification claim");if(r.status==="claimed"&&!r.source)throw Error("Claim needs its source");if(r.source&&(typeof a[r.source.file]!="string"||await zn(a[r.source.file])!==r.source.sha256))throw Error("Declaration source checksum mismatch")}if(c.conditions?.gtManifest!==c.manifestA||c.conditions.protocolSha256!==c.protocolSha256||ue(c.conditions.frameIds)!==ue(t.frameIds)||!Hi(c.conditions,c.conditions).comparable)throw Error("Declaration conditions mismatch");return{...c,sha256:await zn(e)}}async function Qi(e){if(e.id!=="best-1027")return null;const t=await ni(qi,et,e);return{...t,verifiedPayloadSha256:et.sha256,declarations:await Ki(Ui,t,{"METRICS.md":ji,"SPLIT.md":Ji})}}function e1({analysisSection:e,onAnalysisSection:t,item:a,active:c,viewApiRef:i,initialView:r,onViewReady:d,onViewRestored:s,restoring:f,onCancelImport:l}){const{language:h}=be(),m=h==="zh",[w,g]=y.useState(()=>r?.settings.group||(a.comparison.settings?.previewOnly&&a.comparison.availableGroups.includes("velocity")?"velocity":"sdf")),[o,b]=y.useState(null),[v,S]=y.useState(""),B=y.useRef(kt()),[p,E]=y.useState(0);y.useEffect(()=>(b(null),S(""),B.current.run(()=>Qi(a)).then(I=>{I&&b(I)}).catch(I=>S(I.message)),()=>B.current.cancel()),[a,p]);const _=!!a.comparison.settings?.previewOnly,x=!!a.metrics?.reconstructionEvaluation,u=n.createElement("div",{className:"public-field-provenance"},n.createElement("p",null,a.description),n.createElement("dl",null,n.createElement("div",null,n.createElement("dt",null,"Ground Truth"),n.createElement("dd",null,a.comparison.labels?.gt?.displayName)),n.createElement("div",null,n.createElement("dt",null,"Prediction"),n.createElement("dd",null,_?m?"未提供；不计算误差":"Not included; no error scores":a.comparison.labels?.prediction?.displayName)),n.createElement("div",null,n.createElement("dt",null,m?"三维表面 / 体积场":"3D surface / volume frames"),n.createElement("dd",null,Ln(a).length?`1001–1096 / ${a.processing.frames.map(I=>I.frame).join(", ")}`:a.processing.frames.map(I=>I.frame).join(", "))),n.createElement("div",null,n.createElement("dt",null,m?"数据语义":"Data semantics"),n.createElement("dd",null,x?m?"原分辨率有效 SDF/速度对比；三帧高度与水下速度评估，采用明确的本地计算规则。":"Native valid SDF/velocity comparison; three-frame height and underwater evaluation under an explicit local protocol.":_?m?"单位未声明":"Units undeclared":m?"条件性 GT 水体距离误差；外部填充值不参与距离评分":"Conditional GT-water distance scores; filled exterior excluded from distance scoring"))));return n.createElement(Vi,{workspace:e,onWorkspace:t,unifiedRestore:!0,onCancelImport:l,onRetryEvaluation:()=>E(I=>I+1),evaluation:o,evaluationError:v,comparison:a.comparison,processing:a.processing,activeGroup:w,onActiveGroup:g,setup:u,expectedFrames:Object.keys(a.metrics?.frames||{}).map(Number),metricsOverride:a.metrics||null,sourceCase:a,viewApiRef:i,initialView:r,onViewReady:d,onViewRestored:s,restoring:f,readOnly:!0,active:c})}function o1({request:e,active:t=!0,analysisSection:a="3d",onAnalysisSection:c}){const{tr:i,language:r}=be(),d=r==="zh",s=y.useRef(null),f=y.useRef(0),l=y.useRef(null),h=y.useRef(null);y.useEffect(()=>()=>h.current?.reject(new DOMException("Cancelled","AbortError")),[]);const[m,w]=y.useState(0),[g,o]=y.useState(null),[b,v]=y.useState(!1),[S,B]=y.useState(!1),[p,E]=y.useState(null),[_,x]=y.useState(null),[u,I]=y.useState(""),[k,O]=y.useState(""),[M,$]=y.useState(""),[C,D]=y.useState(0),[P,Z]=y.useState(!1);y.useEffect(()=>{let V=!0;return r0().then(N=>{if(!V)return;H0(N.cases),x(N);const Y=pa("public-case")?.id,K=N.cases.some(q=>q.id===Y)?Y:N.defaultCaseId||N.cases[0].id;I(K),O(K),$("")}).catch(N=>{V&&$(N.message)}),()=>{V=!1}},[C]),y.useEffect(()=>{e?.id&&_?.cases.some(V=>V.id===e.id)&&F(e.id)},[e,_]),y.useEffect(()=>{u&&yt("public-case",{id:u})},[u]);function F(V){l.current?.cancel(),w(++f.current),s.current?.pause(),o(null),B(!1),v(!1),E(null),I(V),O(V),Z(!1)}function R(V){try{const N=Ke(V,_.cases);s.current?.pause();const Y=++f.current;w(Y),v(!1),B(!0),E(null),Z(!1),I(N.settings.caseId),O(N.settings.caseId),o({doc:N,token:Y})}catch(N){E({error:N})}}async function G(V,N,Y){if(Y.throwIfAborted(),N.kind!=="field"){if(!s.current?.restoreAnalysis)throw Error("Analysis is not ready");return s.current.restoreAnalysis(V,N.kind,Y)}const K=Ke(N.value,_.cases);return new Promise((q,ae)=>{const ie=()=>{h.current?.signal===Y&&(h.current=null,++f.current,o(null),B(!1),ae(new DOMException("Cancelled","AbortError")))};Y.addEventListener("abort",ie,{once:!0});const xe=We=>{Y.removeEventListener("abort",ie),We?ae(We):q()};h.current={signal:Y,finish:xe,reject:ae},R(K)})}function ne(V,N){if(V!==f.current)return;const Y=h.current;h.current=null,Y?.finish(N),B(!1),E(N?{error:N}:{cn:"场方案已恢复：样例、帧、切面、探针、视角与显示设置已同步，播放已暂停。",en:"Field view restored: sample, frame, section, probe, camera and display settings are synchronized. Playback paused."})}const U=_?.cases.find(V=>V.id===u),se=_?.cases.find(V=>V.id===k),ce=U?.comparison.settings?.previewOnly;return n.createElement("section",{className:"public-field-demo","aria-label":"Published field examples"},n.createElement("header",{className:"demo-case-header"},n.createElement("div",null,n.createElement("h1",null,U?.name||(d?"场分析":"Field analysis")),n.createElement("span",null,d?"96帧三维与高度 · 3帧体积场":"96 3D & height frames · 3 volume frames")),n.createElement("button",{"aria-expanded":P,onClick:()=>{O(u),Z(V=>!V)}},d?"数据详情":"Dataset details")),M?n.createElement(hn,{error:M,zh:d,resource:d?"示例目录":"Sample catalogue",onRetry:()=>D(V=>V+1)}):_?n.createElement(n.Fragment,null,P&&n.createElement("section",{className:"sample-setup","aria-label":"Sample dataset selection"},n.createElement("div",{className:"sample-setup-heading"},n.createElement("h2",null,d?"数据与对比设置":"Datasets & comparison setup"),n.createElement("p",null,d?"选择已发布的数据组合，打开已有分析结果。":"Choose a published dataset pair to open its existing analysis.")),n.createElement("label",null,d?"示例组合":"Published example",n.createElement("select",{"aria-label":"Published field example",value:k,onChange:V=>O(V.target.value)},_.cases.map(V=>n.createElement("option",{key:V.id,value:V.id},V.name)))),se&&n.createElement("div",{className:"sample-dataset-grid"},n.createElement("div",{className:"sample-source"},n.createElement("span",{className:"source-role"},"GROUND TRUTH"),n.createElement("h3",null,se.comparison.labels?.gt?.displayName),n.createElement("p",null,se.comparison.availableGroups.join(" + ").toUpperCase()),n.createElement("span",null,d?"可用":"Ready")),n.createElement("div",{className:"sample-source"},n.createElement("span",{className:"source-role prediction"},"PREDICTION"),n.createElement("h3",null,se.comparison.settings?.previewOnly?d?"无预测数据":"No prediction included":se.comparison.labels?.prediction?.displayName),n.createElement("p",null,se.comparison.settings?.previewOnly?d?"独立查看，不显示误差指标":"Standalone inspection without error metrics":d?"已对齐的场数据 · 已记录的计算规则":"Aligned fields · Recorded evaluation protocol"))),n.createElement("div",{className:"sample-actions"},n.createElement("span",null,d?"原始 VDB / ABC 上传和新计算仅限本地版。":"Raw VDB / ABC import and new processing require the local app."),n.createElement("button",{onClick:()=>Z(!1)},d?"取消":"Cancel"),n.createElement("button",{className:"primary",onClick:()=>{F(k)}},se?.comparison.settings?.previewOnly?d?"查看 Ground Truth":"View Ground Truth":d?"打开已有对比":"Open saved comparison"))),U&&n.createElement(n.Fragment,null,n.createElement("div",{className:"demo-session-tools",hidden:a!=="report"},n.createElement(Li,{controlRef:l,zh:d,onRestore:G}),n.createElement(Gi,{unifiedRestore:!0,catalog:_.cases,ready:b,restoring:S,onCapture:()=>s.current.captureView(),onRestore:R,restoreNotice:p})),n.createElement("div",{hidden:cn},n.createElement("div",{className:"case-strip"},n.createElement("strong",null,U.name),n.createElement("span",null,Ln(U).length||U.processing.frames.length," ",d?"个三维帧":"3D frames",!ce&&` · ${Object.keys(U.metrics.frames).length} ${d?"条旧预览指标记录":"legacy preview metric records"}`),n.createElement("details",null,n.createElement("summary",null,d?"数据范围":"Dataset scope"),n.createElement("p",null,U.description),n.createElement("p",null,d?"三维播放仅访问已发布帧；不会插值缺失帧。":"3D playback visits published frames only; missing frames are not interpolated."),(U.limitations||_.limitations).map((V,N)=>n.createElement("p",{key:N},V)))),n.createElement("div",{className:"v2-object-strip"},n.createElement("span",null,n.createElement("i",{className:"field-layer-dot"})," A · GT · ",U.comparison.labels?.gt?.displayName),!ce&&n.createElement("span",null,n.createElement("i",{className:"field-layer-dot prediction"})," B · Prediction · ",U.comparison.labels?.prediction?.displayName),n.createElement("small",null,U.metrics?.reconstructionEvaluation?d?"三帧局部验证 · 高度误差与体积 SDF 误差分开报告。":"Three-frame pilot · Height and volumetric SDF errors are reported separately.":ce?d?"单组查看，不计算误差。":"Single dataset; no error scores.":d?"条件性 SDF 比较。水外填充值不支持可信的水面高度误差。":"Conditional SDF comparison. Filled exterior values do not support trustworthy surface-height errors."))),n.createElement(e1,{analysisSection:a,onAnalysisSection:c,onCancelImport:()=>l.current?.cancel(),key:`${U.id}:${m}`,item:U,active:t,viewApiRef:s,initialView:g?.doc,onViewReady:v,restoring:S,onViewRestored:V=>ne(g?.token,V)}))):n.createElement("p",{role:"status"},d?"正在加载示例…":"Loading samples…"))}export{o1 as default};
