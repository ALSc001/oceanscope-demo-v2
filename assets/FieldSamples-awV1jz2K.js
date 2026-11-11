import{g as oi,p as nt,v as bs,a as li,o as at,b as di,s as fi,S as Tn,c as Vn,d as za,e as ps,f as mi,h as bi,i as pi}from"./surfaceResources-udFyEaQA.js";import{u as ce,R as n,r as S,c as us,s as ui,d as hs,p as gs,e as $n,f as Bn,g as hi,h as Ot,C as ys,i as Ra,v as Xa,l as da,j as gi,n as yi,a as xi,b as Za,w as xs,k as Ft,m as Sn,o as vi}from"./workbench-BjxNRp81.js";import{d as Pa,l as Ei}from"./publicData-Dh1-tQFp.js";import{W as _i,m as wi,j as Si,C as Ia,k as ji,O as Bi,a4 as Ai,l as Ci,a5 as ki,g as Mi,a as Ri,V as _n,r as Pi,y as Ii,h as Dt,t as Ni,v as Tt,s as $t,d as Wt,q as Oi,i as Fi,B as Vt,o as Di,D as Ti,p as $i,x as Wi,a6 as zt,a7 as Xt,a8 as Vi,a9 as zi,a0 as Xi,aa as Zi,ab as Gi,ac as Hi,ad as qi,ae as Yi,af as vs,ag as Li,ah as Ui,a2 as Na,_ as Ji,Y as Ki,I as Qi}from"./SectionRotation-Dgo6SOSD.js";import{b as ec,e as Zt,d as nc,c as Gt}from"./comparisonExport-rG_qP9SP.js";import{e as ac}from"./verticalSection-DptfHDZh.js";const tc="539734f929b2d3d4a53adb2563bc9598e1cc8efcd33439f8a39db052bafb28bd",sc="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",ic="gentle",cc="best1027",rc="e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e",oc="323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d",Wn={sha256:tc,protocolSha256:sc,datasetA:ic,datasetB:cc,manifestA:rc,manifestB:oc};function lc({fetchFrame:e,decode:a,byteBudget:t=268435456,maxFrames:s=5}){const i=new Map,c=new Map;let r=null,o=0,d=!1,m=!1;const f=(p,l)=>`${p}:${l}`,h=()=>[...i.values()].reduce((p,l)=>p+l.byteLength,0);function E(){for(const p of i.keys()){if(i.size<=s&&h()<=t)break;p!==r&&i.delete(p)}}function b(p,l){const v=f(p,l);if(i.has(v)){const x=i.get(v);return i.delete(v),i.set(v,x),Promise.resolve(x)}if(c.has(v))return c.get(v).promise;const g=new AbortController,j=e(p,l,{signal:g.signal}).then(x=>{if(d||g.signal.aborted)return null;const u=x&&Object.hasOwn(x,"verifiedResource"),y=u?x.buffer:x,w=u?x.verifiedResource:null,_=a(y),B=new Set(_.fields.map(A=>A.values.buffer)),C={comparisonId:p,frameNumber:l,data:_,verifiedResource:w,byteLength:[...B].reduce((A,O)=>A+O.byteLength,0)};return i.set(v,C),E(),C}).finally(()=>{c.get(v)?.controller===g&&c.delete(v)});return c.set(v,{promise:j,controller:g}),j}return{async select(p,l){if(d)return null;const v=++o,g=f(p,l);for(const[x,u]of c)x!==g&&(u.controller.abort(),c.delete(x));const j=r;r=g;try{const x=await b(p,l);return d||v!==o?null:(E(),x)}catch(x){if(d||v!==o||x.name==="AbortError")return null;throw r=j,x}},async prefetch(p,l){d||m||await Promise.all(l.slice(0,2).map(v=>b(p,v).catch(()=>null)))},setScrubbing(p){if(m=p,p)for(const[l,v]of c)l!==r&&(v.controller.abort(),c.delete(l))},stats(){return{bytes:h(),cachedFrames:i.size,oversize:h()>t}},dispose(){d=!0,o++;for(const p of c.values())p.controller.abort();c.clear(),i.clear()}}}function dc({workerFactory:e=()=>new Worker(new URL(""+new URL("geometryWorker-BGm7dbIH.js",import.meta.url).href,import.meta.url),{type:"module"}),byteBudget:a=134217728}={}){const t=new Map;let s=null,i=null,c=0,r=!1;const o=()=>[...t.values()].reduce((m,f)=>m+f.byteLength,0);function d(){i&&(i.resolve(null),i=null,s?.terminate(),s=null)}return{request(m,f,h){if(r)return Promise.resolve(null);d();const E=oi(m,h);if(t.has(E)){const b=t.get(E);return t.delete(E),t.set(E,b),Promise.resolve(b)}return new Promise((b,p)=>{const l=++c;i={resolve:b,reject:p,id:l};try{s??=e(),s.onmessage=({data:u})=>{if(!i||u.requestId!==i.id||u.version!==1)return;if(i=null,u.type==="error"){p(Error(u.error));return}const y=u.result;t.set(E,y);for(const w of t.keys()){if(o()<=a)break;w!==E&&t.delete(w)}b(y)},s.onerror=u=>{i?.id===l&&(i=null,s?.terminate(),s=null,p(Error(u.message||"Geometry worker failed")))};const v=new Map,g=[],j=u=>{if(!u)return null;if(v.has(u))return v.get(u);const y=u.values.slice(),w={...u,values:y,mask:null};return v.set(u,w),g.push(y.buffer),w.mask=j(u.mask),w},x=Object.fromEntries(Object.entries(m.data.groups).filter(([u])=>u===h.group||u==="sdf"&&h.showContext).map(([u,y])=>[u,Object.fromEntries(Object.entries(y).filter(([w])=>(w==="ground_truth"||w==="prediction"||/^(ground_truth|prediction)\.[xyz]$/.test(w))&&(!h.previewOnly||!w.startsWith("prediction"))).map(([w,_])=>[w,j(_)]))]));s.postMessage({version:1,requestId:l,comparisonId:m.comparisonId,type:"build",payload:{snapshot:{...m,data:{groups:x}},lattice:f,settings:h}},g)}catch(v){i=null,p(v)}})},stats(){return{bytes:o(),cachedFrames:t.size,oversize:o()>a}},dispose(){r=!0,d(),s?.terminate(),s=null,t.clear()}}}const fc="OCFLD001",Oa=24,mc=112;function aa(e,a,t){const s=e.subarray(a,a+t),i=s.indexOf(0);return new TextDecoder().decode(i>=0?s.subarray(0,i):s)}function Ht(e,a){if(e>BigInt(Number.MAX_SAFE_INTEGER))throw new Error(`${a} exceeds safe integer range`);return Number(e)}function Es(e){if(!(e instanceof ArrayBuffer)||e.byteLength<Oa)throw new Error("Field frame is truncated");const a=new Uint8Array(e);if(aa(a,0,8)!==fc)throw new Error("Invalid field frame magic");const t=new DataView(e),s=t.getUint32(8,!0);if(s!==1)throw new Error(`Unsupported field frame schema ${s}`);const i=t.getUint32(12,!0),c=t.getUint32(16,!0);if(c!==mc)throw new Error(`Unsupported directory entry size ${c}`);const r=Oa+i*c;if(r>e.byteLength)throw new Error("Field frame directory is truncated");const o=[];for(let m=0;m<i;m+=1){const f=Oa+m*c,h=aa(a,f,16),E=aa(a,f+16,32),b=aa(a,f+48,16),p=t.getUint32(f+64,!0),l=[t.getUint32(f+68,!0),t.getUint32(f+72,!0),t.getUint32(f+76,!0)],v=Ht(t.getBigUint64(f+80,!0),"field offset"),g=Ht(t.getBigUint64(f+88,!0),"field length"),j=t.getInt32(f+96,!0);if(!h||!E||l.some(w=>w===0))throw new Error("Invalid field directory entry");if(v<r||v+g>e.byteLength)throw new Error(`Field ${h}:${E} data is truncated`);const x=l[0]*l[1]*l[2];let u,y;if(p===1){if(v%4!==0||g!==x*4)throw new Error(`Field ${h}:${E} has invalid float32 storage`);u=new Float32Array(e,v,x),y="float32"}else if(p===2){if(g!==x)throw new Error(`Field ${h}:${E} has invalid uint8 storage`);u=new Uint8Array(e,v,x),y="uint8"}else throw new Error(`Field ${h}:${E} has unsupported dtype ${p}`);o.push({id:`${h}:${E}`,group:h,name:E,unit:b,dtype:y,shape:l,values:u,maskIndex:j,mask:null})}for(const m of o){if(m.maskIndex<-1||m.maskIndex>=o.length)throw new Error(`Field ${m.id} has an invalid mask index`);m.maskIndex>=0&&(m.mask=o[m.maskIndex])}const d={};for(const m of o){if(d[m.group]??={},d[m.group][m.name])throw new Error(`Duplicate field ${m.id}`);d[m.group][m.name]=m}return{schema:s,fields:o,groups:d}}function Ga(e,a,t,s){const i=e.fields.find(b=>b.id===a);if(!i)throw new Error(`Unknown field ${a}`);const[c,r,o]=i.shape;let d,m,f;if(t==="xy")[d,m,f]=[c,r,o];else if(t==="xz")[d,m,f]=[c,o,r];else if(t==="yz")[d,m,f]=[r,o,c];else throw new Error(`Unknown slice plane ${t}`);if(!Number.isInteger(s)||s<0||s>=f)throw new Error(`Slice index ${s} is outside ${t}`);const h=i.dtype==="float32"?Float32Array:Uint8Array,E=new h(d*m);for(let b=0;b<m;b+=1)for(let p=0;p<d;p+=1){let l,v,g;t==="xy"?[l,v,g]=[p,b,s]:t==="xz"?[l,v,g]=[p,s,b]:[l,v,g]=[s,p,b],E[p+d*b]=i.values[l+c*(v+r*g)]}return{fieldId:a,plane:t,sliceIndex:s,width:d,height:m,values:E}}const fa=new Map;function bc(e){fa.clear();for(const a of e)fa.set(a.comparison.id,a)}async function pc(e){const a=new Uint8Array(e);if(a[0]===31&&a[1]===139){if(typeof DecompressionStream>"u")throw new Error("This browser cannot decode the field samples. Please use a recent Chrome, Edge, Firefox or Safari.");return new Response(new Blob([e]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer()}return e}async function uc(e,a,t={}){const s=fa.get(e),i=s?.frameUrls?.[String(a)],c=nt(s,a);if(!i)throw new Error(`Frame ${a} is not included in this public preview.`);if(!/^\/?data\/[a-zA-Z0-9_./-]+$/.test(i)||i.split("/").includes(".."))throw new Error("Invalid published field URL.");const r=await fetch(i.replace(/^\//,""),{signal:t.signal});if(!r.ok)throw new Error(`Field sample unavailable (${r.status}).`);const o=await r.arrayBuffer();if(t.signal?.aborted)throw new DOMException("Aborted","AbortError");const d=c?await bs(o,c):await pc(o);if(t.signal?.aborted)throw new DOMException("Aborted","AbortError");return t.withIdentity?{buffer:d,verifiedResource:c}:d}async function hc(e){const a=fa.get(e);if(!a)throw new Error("Unknown public comparison.");return a.metrics??null}const gc={groundTruth:"ground_truth",prediction:"prediction",error:"error"};function yc(e,a,t){if(!e?.origin||!e?.axisSteps)throw new Error("Canonical lattice transform is unavailable");const s=a==="yz"?0:a==="xz"?1:a==="xy"?2:-1;if(s<0)throw new Error(`Unknown slice plane ${a}`);return e.origin.map((i,c)=>i+e.axisSteps[s][c]*t)}function xc(e){let a=0;for(const t of e)Number.isFinite(t)&&(a=Math.max(a,Math.abs(t)));return[-a,a]}function vc(e){let a=0;for(const t of e)Number.isFinite(t)&&(a=Math.max(a,Math.abs(t)));return[0,a]}function Fa(e,a){const t=gc[a];if(!e)return null;if(e[t])return{ids:[e[t].id],maskId:e[t].mask?.id||null};const s=["x","y","z"].map(i=>e[`${t}.${i}`]).filter(Boolean);return s.length!==3?null:{ids:s.map(i=>i.id),maskId:s[0].mask?.id||null}}function Dn(e,a){const t=e?.groups?.[a],s=Fa(t,"groundTruth"),i=Fa(t,"prediction"),c=Fa(t,"error"),r=s?.ids?.[0]||i?.ids?.[0]||c?.ids?.[0],o=r&&(e.fields?.find(d=>d.id===r)?.unit||Object.values(t||{}).find(d=>d?.id===r)?.unit)||"";return{kind:a,groundTruth:s,prediction:i,error:c,unit:o}}function Ec(e,a,t,s,i="magnitude"){if(!a?.ids?.length)return null;if(a.ids.length===1)return{...Ga(e,a.ids[0],t,s),components:null};const c=a.ids.map(d=>Ga(e,d,t,s)),r=["x","y","z"].indexOf(i);if(r>=0)return{...c[r],components:null};const o=new Float32Array(c[0].values.length);for(let d=0;d<o.length;d+=1)o[d]=Math.hypot(c[0].values[d],c[1].values[d],c[2].values[d]);return{...c[0],fieldId:a.ids.join("+"),values:o,components:c.map(d=>d.values)}}function _c(e,{onCameraChange:a,rendererFactory:t=()=>new _i({antialias:!0}),controlsFactory:s=(c,r)=>new Bi(c,r),gizmoFactory:i=wi}={}){const c=t();e.appendChild(c.domElement),c.setPixelRatio(Math.min(globalThis.devicePixelRatio||1,2));const r=i(e),o=new Si;o.background=new Ia("#f4f8fb");const d=new ji(40,1,.001,1e5);d.position.set(8,6,9);const m=s(d,c.domElement);m.enableDamping=!1,o.add(new Ai(16777215,6649225,2.4));const f=new Ci(16777215,2);f.position.set(3,8,5),o.add(f);const h=new ki(1);o.add(h);let E=[],b=null,p=[],l={mode:"split",opacity:.65},v=!1,g=960,j=540,x=[0,1];function u(){const k=l.sourceRange||x;for(const I of p){const D=I.userData.values;if(!D)continue;const F=I.geometry.attributes.color;for(let T=0;T<D.length;T++){const M=Math.max(0,Math.min(1,(D[T]-k[0])/(k[1]-k[0]||1)));new Ia().setHSL(.65*(1-M),.8,.48).toArray(F.array,T*3)}F.needsUpdate=!0}}const y=()=>{for(const k of p)o.remove(k),k.geometry.dispose(),k.material.dispose();p=[]};function w(){for(const k of p){if(k.userData.kind==="slice-outline"){k.material.opacity=1,k.material.depthTest=!1,k.material.depthWrite=!1,k.renderOrder=4;continue}if(k.userData.kind==="section-plane"){k.material.transparent=!0,k.material.opacity=.14,k.material.depthWrite=!1,k.material.depthTest=!0,k.renderOrder=3;continue}const I=k.userData.role==="prediction",D=l.mode==="wire-overlay"&&I&&k.userData.kind==="surface";k.renderOrder=D?3:I?2:1,k.material.transparent=!0,k.material.opacity=l[I?"predictionOpacity":"gtOpacity"]??l.opacity,k.material.depthWrite=!["overlay","wire-overlay"].includes(l.mode),k.isMesh&&(k.userData.kind==="surface"&&$i(k.geometry,k.material,l.shading),k.material.userData.xray!==D&&(k.material.userData.xray=D,k.material.onBeforeCompile=F=>{D&&(F.fragmentShader=F.fragmentShader.replace("void main() {",`void main() {
if (mod(floor(gl_FragCoord.x / 3.0) + floor(gl_FragCoord.y / 3.0), 2.0) < 1.0) discard;`))},k.material.customProgramCacheKey=()=>D?"field-xray-gaps-1":"field-surface-1",k.material.needsUpdate=!0),k.material.wireframe=D,k.material.depthTest=!D)}}function _(){if(v)return;const k=l.mode==="split"?["gt","prediction"]:[l.mode==="gt"?"gt":l.mode==="prediction"?"prediction":null];c.setScissorTest(!0),k.forEach((I,D)=>{const F=g/k.length;d.aspect=F/j,d.updateProjectionMatrix(),c.setViewport(D*F,0,F,j),c.setScissor(D*F,0,F,j),p.forEach(T=>{T.visible=(!I||T.userData.role===I)&&l[T.userData.role==="prediction"?"showPrediction":"showGt"]!==!1&&(T.userData.kind!=="section-plane"||l.showPlane!==!1)}),c.render(o,d)}),r.update(d)}const B=()=>({position:d.position.toArray(),target:m.target.toArray(),zoom:d.zoom,up:d.up.toArray(),fov:d.fov,near:d.near,far:d.far});c.domElement.setAttribute?.("data-renderer","field-3d"),c.domElement.osPick=(k,I)=>{const D=l.mode==="split",F=D?k<.5?"gt":"prediction":l.mode,T=D?k*2%1:k,M=new Mi;M.setFromCamera(new Ri(T*2-1,1-I*2),d);const V=p.filter(Y=>Y.userData.kind==="surface"&&(F!=="gt"&&F!=="prediction"||Y.userData.role===F)&&l[Y.userData.role==="prediction"?"showPrediction":"showGt"]!==!1),X=M.intersectObjects(V,!1)[0];return{camera:B(),hit:X?{xyz:X.point.toArray(),role:X.object.userData.role}:null}},c.domElement.osProject=k=>{const I=l.mode==="split";if(!I&&["gt","prediction"].includes(l.mode)&&l.mode!==k.role)return null;const D=new _n(...k.xyz).project(d);return Math.abs(D.x)>1||Math.abs(D.y)>1||Math.abs(D.z)>1?null:[I?((D.x+1)/2+(k.role==="prediction"?1:0))/2:(D.x+1)/2,(1-D.y)/2]},c.domElement.osCapture=()=>_();const C=()=>{_(),a?.(B())};m.addEventListener("change",C);function A(){const k=e.clientWidth,I=e.clientHeight;k>1&&I>1&&(g=k,j=I),c.setSize(g,j),_()}const O=globalThis.ResizeObserver?new ResizeObserver(A):null;O?.observe(e);const P={setGeometry(k){y();let I=1/0,D=-1/0;for(const T of k?.layers||[])for(const M of T.values||[])I=Math.min(I,M),D=Math.max(D,M);x=[I,D];const F=l.sourceRange||x;for(const T of k?.layers||[]){if(!T.positions.length)continue;const M=new Dt;M.setAttribute("position",new Vt(T.positions,3));const V=T.role==="gt"?1416379:15571026;let X,Y;if(T.values){const q=new Float32Array(T.values.length*3);for(let z=0;z<T.values.length;z++){const $=Math.max(0,Math.min(1,(T.values[z]-F[0])/(F[1]-F[0]||1)));new Ia().setHSL(.65*(1-$),.8,.48).toArray(q,z*3)}M.setAttribute("color",new Vt(q,3))}T.kind==="vectors"||T.kind==="slice-outline"?(X=new $t({vertexColors:!!T.values,color:T.kind==="slice-outline"?8801732:T.values?16777215:V}),Y=new Tt(M,X)):(M.computeVertexNormals(),X=new Di({color:T.kind==="section-plane"?9988803:T.values?16777215:V,vertexColors:!!T.values,side:Ti,roughness:.7,transparent:!0,opacity:T.kind==="slice"?.85:l.opacity,depthWrite:l.mode!=="overlay"}),Y=new Wt(M,X)),Y.userData={role:T.role,kind:T.kind,values:T.values},p.push(Y),o.add(Y)}w(),_()},setInspection(k,I){for(const F of E)o.remove(F),F.geometry.dispose(),F.material.dispose();E=[];const D=F=>{F.renderOrder=15,o.add(F),E.push(F)};if(k?.corners?.length===4&&k.corners.every(Boolean)){const F=new Dt;F.setAttribute("position",new Ni([0,1,1,2,2,3,3,0].flatMap(T=>k.corners[T]),3)),D(new Tt(F,new $t({color:"#e4ac00",depthTest:!1})))}if(k?.probe&&I){const F=Math.hypot(...I.max.map((M,V)=>M-I.min[V])),T=new Wt(new Oi(F*.007,12,8),new Fi({color:"#ffffff",wireframe:!0,depthTest:!1}));T.position.fromArray(k.probe),D(T)}_()},setDisplay(k){const I=JSON.stringify(l.sourceRange)!==JSON.stringify(k.sourceRange);l={...l,...k},w(),I&&u(),_()},setCamera(k){d.position.fromArray(k.position),m.target.fromArray(k.target),d.zoom=k.zoom??1,d.up.fromArray(k.up||[0,1,0]),k.fov&&(d.fov=k.fov),k.near&&(d.near=k.near),k.far&&(d.far=k.far),d.updateProjectionMatrix(),m.update(),d.position.fromArray(k.position),d.lookAt(m.target),C()},capture(){if(v)throw Error("3D unavailable");_();const k=document.createElement("canvas");k.width=c.domElement.width,k.height=c.domElement.height;const I=k.getContext("2d");return I.drawImage(c.domElement,0,0),r.capture(I,k.width,k.height,k.width/g),k},getCamera:B,preset(k,I){const D=Ii(k,I,g/(l.mode==="split"?2:1)/j,d.fov);D&&P.setCamera(D)},fit(k){if(!k)return;const I=new _n(...k.min).add(new _n(...k.max)).multiplyScalar(.5),D=new _n(...k.max).sub(new _n(...k.min)).length()||1;d.position.copy(I).add(new _n(.8,.65,.9).multiplyScalar(D)),m.target.copy(I),d.near=D/1e4,d.far=D*100,d.zoom=1,h.scale.setScalar(D*.15),h.position.copy(I),b&&(o.remove(b),b.geometry.dispose(),b.material.dispose()),b=new Pi(D*1.3,12,13294052,14740209),b.position.set(I.x,k.min[1],I.z),o.add(b),P.preset(k,"reset")},resize:A,dispose(){if(!v){v=!0,O?.disconnect(),m.removeEventListener("change",C),m.dispose(),P.setInspection(null),y();for(const k of[h,b])k?.geometry.dispose(),Array.isArray(k?.material)?k.material.forEach(I=>I.dispose()):k?.material.dispose();r.dispose(),c.dispose(),c.domElement.remove()}}};return A(),P}function tt(e,a){return a==null?null:e instanceof Map?e.get(a):e?.rows?.find(t=>t.frame===a)}function ya(e,a){const t=tt(e,a);return["train","validation","test"].includes(t?.split)?t.split:"unassigned"}function wc(e,a,t){const s=tt(e,a);return t==="all"?!0:t.startsWith("test_")?s?.split==="test"&&(s.prediction_type||"unassigned")===t.slice(5):ya(e,a)===t}function Sc(e){return{test_interpolation:e?"Test · 插值":"Test · Interpolation",test_extrapolation:e?"Test · 未来外推":"Test · Future extrapolation",test_unassigned:e?"Test · 类型未声明":"Test · Type undeclared",test_anchor:"Test · Anchor"}}function st(e,a){const t=tt(e,a)?.prediction_type;return["anchor","interpolation","extrapolation"].includes(t)?t:"unassigned"}function jc(e,a=!1){return(a?{anchor:"Anchor · 来源帧",interpolation:"时间插值",extrapolation:"未来外推",unassigned:"预测类型未声明"}:{anchor:"Anchor",interpolation:"Interpolation",extrapolation:"Future extrapolation",unassigned:"Prediction type undeclared"})[e]}function it({manifest:e,frame:a}){const{language:t}=ce(),s=ya(e,a),i=t==="zh"?{train:"Train · 训练集",validation:"Validation · 验证集",test:"Test · 测试集",unassigned:"Unassigned · 未划分"}:{train:"Train",validation:"Validation",test:"Test",unassigned:"Unassigned"};return n.createElement(n.Fragment,null,n.createElement("span",{"data-os-loc":"src/field/FrameSplitBadge.jsx:9:11","aria-label":"Frame split",className:`frame-split-badge split-${a==null?"unassigned":s}`,title:t==="zh"?"依据此预测模型的 CSV 声明；并非独立核验训练历史":"Declared by this prediction model’s CSV; training history is not independently verified"},a==null?"—":i[s]),a!=null&&n.createElement("span",{"data-os-loc":"src/field/FrameSplitBadge.jsx:9:309",className:"frame-split-badge","aria-label":"Prediction type"},jc(st(e,a),t==="zh")))}function Bc({geometry:e,settings:a,bounds:t,loadingFrame:s,error:i,labels:c,cameraState:r,onCameraChange:o,frameSplit:d,displayedFrame:m,controlRef:f,onSceneError:h,inspection:E,onShading:b}){const{tr:p,language:l}=ce(),v=l==="zh",[g,j]=S.useState("reset");function x(D){y.current?.preset(t,D),j(D)}const u=S.useRef(null),y=S.useRef(null),w=S.useRef(!1),[_,B]=S.useState(""),C=S.useRef(o),A=S.useRef(!1);C.current=o,S.useImperativeHandle(f,()=>({capture(){if(!y.current)throw Error("3D unavailable");return y.current.capture()},getCamera(){if(!y.current)throw Error("camera");return y.current.getCamera()},restoreCamera(D){if(!y.current)throw Error("camera");A.current=!0;try{y.current.setCamera(D),j("custom"),C.current?.(y.current.getCamera())}finally{A.current=!1}}}),[]),S.useEffect(()=>{try{y.current=_c(u.current,{onCameraChange:D=>{j("custom"),A.current||C.current?.(D)}})}catch(D){B(`3D unavailable: ${D.message}. Slices remain available.`),h?.(D.message)}return()=>{y.current?.dispose(),y.current=null}},[]),S.useEffect(()=>{if(r){A.current=!0;try{y.current?.setCamera(r)}finally{A.current=!1}}},[r]),S.useEffect(()=>{y.current?.setDisplay(a)},[a]),S.useEffect(()=>{y.current?.setGeometry(e)},[e]),S.useEffect(()=>{y.current?.setInspection(E,t)},[E,t]),S.useEffect(()=>{t&&!w.current&&(y.current?.fit(t),w.current=!0,j("reset"))},[t]),S.useEffect(()=>{t&&g!=="custom"&&x(g)},[a.mode,t]);const O=a.group==="velocity";let P=1/0,k=-1/0;for(const D of e?.layers||[])for(const F of D.values||[])P=Math.min(P,F),k=Math.max(k,F);const I=a.sourceRange||[P,k];return n.createElement("section",{"data-os-loc":"src/field/FieldViewport.jsx:23:10",className:"field-viewport","aria-label":p("3D field visualization")},n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:24:5",className:"field-view-heading"},n.createElement("strong",{"data-os-loc":"src/field/FieldViewport.jsx:24:41"},p(O?"3D velocity field":"3D zero-isosurface")),n.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:24:117"},p("Frame "),m??"—"," · ",n.createElement(it,{manifest:d,frame:m}))),n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:24:237",className:"v2-view-actions",role:"group","aria-label":v?"三维视角":"3D view"},n.createElement(Wi,{value:a.shading||"original",onChange:b,disabled:a.group!=="sdf"}),[["reset",v?"重置视角":"Reset view"],["top",v?"顶视图":"Top"],["side",v?"侧视图":"Side"]].map(([D,F])=>n.createElement("button",{"data-os-loc":"src/field/FieldViewport.jsx:24:528",key:D,disabled:!t,"aria-pressed":g===D,onClick:()=>x(D)},F)),n.createElement("button",{"data-os-loc":"src/field/FieldViewport.jsx:24:639",disabled:!t,onClick:()=>{y.current?.fit(t),j("reset")}},p("Fit view"))),n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:25:5",className:"field-scene",ref:u}),n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:26:5",className:`field-role-labels ${a.mode==="split"?"split":""}`,"aria-hidden":"true"},a.mode!=="prediction"&&n.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:26:130"},c?.gt?.displayName?`GT · ${c.gt.displayName} · ${O?"shared scale":"blue"}`:a.previewOnly?p("Dataset preview"):p(O?"GT · shared color scale":"GT · blue"),a.showGt===!1?p(" · hidden"):""),a.mode!=="gt"&&n.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:26:402"},c?.prediction?.displayName?`Prediction · ${c.prediction.displayName} · ${O?"shared scale":"orange"}`:p(O?"Prediction · shared color scale":"Prediction · orange"),a.showPrediction===!1?p(" · hidden"):a.mode==="wire-overlay"?p(" · X-ray wireframe"):"")),O&&n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:27:16",className:"field-legend"},a.component==="magnitude"?p("Speed magnitude"):`Velocity ${a.component?.toUpperCase()}`,n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:27:150",className:"field-gradient"}),I.every(Number.isFinite)?`${I[0].toPrecision(3)} — ${I[1].toPrecision(3)}`:p("No valid samples")," ",n.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:27:295"},a.unit||p("units undeclared"))),s!=null&&n.createElement("div",{"data-os-loc":"src/field/FieldViewport.jsx:28:26",role:"status",className:"field-view-loading"},p("Loading frame "),s,"…"),(_||i)&&n.createElement("p",{"data-os-loc":"src/field/FieldViewport.jsx:29:28",role:"alert",className:"field-view-error"},_||i),e?.warnings?.length>0&&n.createElement("p",{"data-os-loc":"src/field/FieldViewport.jsx:30:36",className:"field-view-warning"},e.warnings.join(" · ")),n.createElement("small",{"data-os-loc":"src/field/FieldViewport.jsx:31:5",className:"field-view-help"},n.createElement("span",{"data-os-loc":"src/field/FieldViewport.jsx:31:40",className:"shading-note"},v?"平滑只影响 SDF 表面光照；顶点、切片、指标和速度箭头保持原样。":"Smoothing affects SDF surface lighting only; vertices, slices, scores and velocity arrows are unchanged."),p("Drag to orbit · Scroll to zoom · "),p(O?"Instantaneous velocity vectors, not particle paths":"SDF = 0; display-only mesh"),p(" · X / Y up / Z · Preview quality: "),a.quality||p("balanced")))}function qt({frames:e,current:a,direction:t=1,loop:s=!1,status:i="ready"}){const c=e.indexOf(a),r=c+(t<0?-1:1);return c>=0&&r>=0&&r<e.length?{frame:e[r],action:"select"}:i==="processing"&&t>0?{frame:a,action:"wait"}:i==="ready"&&s&&e.length>1?{frame:t<0?e.at(-1):e[0],action:"select"}:{frame:a,action:"stop"}}function Ac({frames:e,displayedFrame:a,requestedFrame:t,status:s="ready",loading:i=!1,previewFps:c=24,onFrame:r,onScrubbing:o,timing:d,frameSplit:m,active:f=!0,controlRef:h,initialPlayback:E}){const{tr:b}=ce(),[p,l]=S.useState(!1),[v,g]=S.useState(E?.loop??!1),[j,x]=S.useState(E?.fps??c),[u,y]=S.useState(E?.speed??1),[w,_]=S.useState("");S.useImperativeHandle(h,()=>({pause:()=>l(!1),getSettings:()=>({loop:v,fps:j,speed:u}),restoreSettings:P=>{l(!1),g(P.loop),x(P.fps),y(P.speed)}}),[v,j,u]),S.useEffect(()=>{const P=()=>l(!1);return window.addEventListener("oceanscope-annotate",P),()=>window.removeEventListener("oceanscope-annotate",P)},[]),S.useEffect(()=>{f||l(!1)},[f]);const B=S.useRef(!1);S.useEffect(()=>{B.current||_(String(t??a??""))},[t,a]),S.useEffect(()=>{e.length<2&&l(!1)},[e.length]),S.useEffect(()=>{if(!p||i)return;const P=setTimeout(()=>{const k=qt({frames:e,current:a,loop:v,status:s});k.action==="select"?r(k.frame):k.action==="stop"&&l(!1)},1e3/(Math.max(1,j)*u));return()=>clearTimeout(P)},[p,i,a,e,v,s,j,u,r]);function C(P){l(!1);const k=qt({frames:e,current:t??a,direction:P,status:s});k.action==="select"&&r(k.frame)}function A(){l(!1);const P=Number(w);e.includes(P)?P!==t&&r(P):_(String(t??a??""))}const O=e.some((P,k)=>k>0&&P!==e[k-1]+1);return n.createElement("section",{"data-os-loc":"src/field/FieldTimeline.jsx:21:10",className:"field-timeline","aria-label":b("Animation controls")},n.createElement(it,{manifest:m,frame:a}),n.createElement("div",{"data-os-loc":"src/field/FieldTimeline.jsx:23:5",className:"field-play-controls"},n.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:42","aria-label":b("First frame"),disabled:!e.length,onClick:()=>{l(!1),r(e[0])}},"⏮"),n.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:170","aria-label":b("Previous frame"),disabled:e.length<2,onClick:()=>C(-1)},"‹"),n.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:272",className:"primary",disabled:e.length<2,onClick:()=>l(P=>!P)},b(p?"Pause":"Play")),n.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:400","aria-label":b("Next frame"),disabled:e.length<2,onClick:()=>C(1)},"›"),n.createElement("button",{"data-os-loc":"src/field/FieldTimeline.jsx:23:497","aria-label":b("Last frame"),disabled:!e.length,onClick:()=>{l(!1),r(e.at(-1))}},"⏭"),n.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:23:628"},n.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:23:635",type:"checkbox",checked:v,onChange:P=>g(P.target.checked)}),b(" Loop")),n.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:23:735"},b("Speed"),n.createElement("select",{"data-os-loc":"src/field/FieldTimeline.jsx:23:755",value:u,onChange:P=>y(Number(P.target.value))},[.25,.5,1,2].map(P=>n.createElement("option",{"data-os-loc":"src/field/FieldTimeline.jsx:23:845",key:P,value:P},P,"×"))))),n.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:24:5","aria-label":b("Sequence timeline"),type:"range",min:"0",max:Math.max(0,e.length-1),value:Math.max(0,e.indexOf(t??a)),disabled:e.length<2,onPointerDown:()=>{l(!1),o?.(!0)},onPointerUp:()=>o?.(!1),onPointerCancel:()=>o?.(!1),onBlur:()=>o?.(!1),onKeyDown:P=>{o?.(!0),["Home","End"].includes(P.key)&&(P.preventDefault(),l(!1),r(P.key==="Home"?e[0]:e.at(-1)))},onKeyUp:()=>o?.(!1),onChange:P=>{l(!1),r(e[Number(P.target.value)])}}),n.createElement("div",{"data-os-loc":"src/field/FieldTimeline.jsx:25:5","data-displayed-frame":a,className:"field-time-labels"},n.createElement("span",{"data-os-loc":"src/field/FieldTimeline.jsx:25:78"},b("Displayed frame "),n.createElement("strong",{"data-os-loc":"src/field/FieldTimeline.jsx:25:108"},a??"—"),i?` · ${b("Loading")} ${t}…`:""),n.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:25:206"},b("Go to frame"),n.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:25:232","aria-label":b("Comparison frame"),type:"number",value:w,onFocus:()=>{B.current=!0,l(!1)},onChange:P=>{l(!1),_(P.target.value)},onBlur:()=>{B.current=!1,A()},onKeyDown:P=>{P.key==="Enter"&&A()}})),n.createElement("label",{"data-os-loc":"src/field/FieldTimeline.jsx:25:527"},b("Preview FPS"),n.createElement("input",{"data-os-loc":"src/field/FieldTimeline.jsx:25:553","aria-label":b("Preview FPS"),type:"number",min:"1",max:"120",value:j,onChange:P=>x(Math.max(1,Math.min(120,Number(P.target.value)||24)))})),n.createElement("small",{"data-os-loc":"src/field/FieldTimeline.jsx:25:719"},d?.fps>0&&Number.isFinite(d.originFrame)?`${b("Time")}: ${((a-d.originFrame)/d.fps+(d.offsetSeconds||0)).toFixed(3)} s`:b("Playback timing only — not physical simulation time"))),n.createElement("small",{"data-os-loc":"src/field/FieldTimeline.jsx:26:5"},e.length,b(" available frames"),O?b(" · Missing frames skipped; no interpolation"):"",s==="processing"?b(" · Processing continues; playback waits at the latest frame"):s==="error"?b(" · Processing failed; completed frames remain available"):""))}function Cc(e,a){if(!e)return{valid:0,total:0,fraction:null};const t=e.values.length;let s=0;for(let i=0;i<t;i++)(!a||a.values[i])&&Number.isFinite(e.values[i])&&s++;return{valid:s,total:t,fraction:t?s/t:null}}function kc(e,a){return Number.isFinite(e)&&e>0?a?[0,e]:[-e,e]:null}const Mc=e=>Math.max(0,Math.min(1,e)),On=(e,a,t)=>e.map((s,i)=>Math.round(s+(a[i]-s)*t));function _s(e,a,t){const[s,i]=a,c=i===s?t==="error"?.5:0:Mc((e-s)/(i-s));return t==="error"?c<.5?On([32,91,177],[246,248,250],c*2):On([246,248,250],[201,66,55],(c-.5)*2):t==="prediction"?On([255,244,221],[224,119,32],c):t==="absolute-error"?On([246,240,252],[103,32,150],c):On([235,244,252],[31,111,176],c)}function ws(e,a,t,s,i,c){const{x:r=0,z:o=0,width:d=a.width,height:m=a.height}=c??{},f=e.createImageData(d,m);for(let h=0;h<m;h++)for(let E=0;E<d;E++){const b=E+r+a.width*(h+o),p=4*(E+d*(m-1-h)),l=a.values[b],v=(!t||t[b])&&Number.isFinite(l)?_s(l,s,i):(E+h)%6<3?[205,213,219]:[238,242,245];f.data[p]=v[0],f.data[p+1]=v[1],f.data[p+2]=v[2],f.data[p+3]=255}e.putImageData(f,0,0)}const Yt=e=>Math.max(0,Math.min(1,e));function ct({slice:e,maskSlice:a,range:t,palette:s="ground-truth",crosshair:i,onCrosshair:c,plane:r,aspect:o,region:d=null,label:m,viewport:f}){const h=S.useRef(null);return S.useEffect(()=>{const E=h.current;if(!E||!e)return;const{width:b=e.width,height:p=e.height}=f??{};E.width=b,E.height=p;const l=E.getContext?.("2d");if(l){if(ws(l,e,a?.values,t,s,f),e.components){l.strokeStyle=s==="prediction"?"#7c3f0d":"#123e68",l.lineWidth=Math.max(1,e.width/180);const v=r==="xy"?[0,1]:r==="xz"?[0,2]:[1,2],g=Math.max(4,Math.ceil(Math.max(e.width,e.height)/18));for(let j=g/2;j<e.height;j+=g)for(let x=g/2;x<e.width;x+=g){const u=Math.floor(x)+e.width*Math.floor(j);if(a&&!a.values[u])continue;const[y,w]=r==="oblique"?li(e,u):v.map(P=>e.components[P][u]),_=Math.hypot(y,w);if(!Number.isFinite(_)||_<1e-8)continue;const B=Math.min(g*.42,g*.18+Math.log1p(_)*g*.08),C=y/_*B,A=-w/_*B,O=e.height-1-j;l.beginPath(),l.moveTo(x,O),l.lineTo(x+C,O+A),l.lineTo(x+C-C*.35+A*.25,O+A-A*.35-C*.25),l.moveTo(x+C,O+A),l.lineTo(x+C-C*.35-A*.25,O+A-A*.35+C*.25),l.stroke()}}if(d){const[v,g]=zt(e.width,d.slice(0,2)),[j,x]=zt(e.height,d.slice(2,4));l.strokeStyle="#9c6900",l.lineWidth=Math.max(1,e.width/180),l.fillStyle="rgba(255,211,62,.17)",l.fillRect(v,e.height-1-x,g-v+1,x-j+1),l.strokeRect(v+.5,e.height-x-.5,Math.max(0,g-v),Math.max(0,x-j))}if(i){const v=i[0]*b,g=(1-i[1])*p;l.strokeStyle="#111",l.lineWidth=Math.max(.5,b/350),l.setLineDash([3,3]),l.beginPath(),l.moveTo(v,0),l.lineTo(v,p),l.moveTo(0,g),l.lineTo(b,g),l.stroke(),l.setLineDash([])}}},[e,a,t,s,i,r,d,f]),n.createElement("canvas",{"data-os-loc":"src/field/SliceCanvas.jsx:41:10","data-renderer":"field-slice","data-review-plane":r,"data-review-shape":e?[e.width,e.height].join(","):void 0,ref:h,"aria-label":m,className:"slice-canvas",style:{aspectRatio:o||"auto",height:"auto"},onClick:E=>{if(!e||!c)return;const b=E.currentTarget.getBoundingClientRect();c([Yt((E.clientX-b.left)/b.width),Yt(1-(E.clientY-b.top)/b.height)])}})}const He=e=>Number.isFinite(e)?e.toPrecision(5):"N/A";function Rc({metadata:e,labels:a,single:t,group:s,epe:i,unit:c,local:r,whole:o,counts:d,probes:m,sourceRange:f,errorRange:h,metrics:E,titles:b,aspects:p}){return JSON.parse(JSON.stringify({schema:"oceanscope.field-report.v1",metadata:e,labels:a,single:t,group:s,epe:i,unit:c||"undeclared",local:t?null:r,whole:t?null:o,counts:d.slice(0,t?1:3),probes:m.slice(0,t?1:3),sourceRange:f,errorRange:t?null:h,savedFrameMetrics:t?null:E?.[s]??null,titles:b.slice(0,t?1:3),aspects:p.slice(0,t?1:3),scope:"Slice statistics and saved volume metrics are distinct; shading never changes measurements."}))}async function Pc(e,a,t,s,i){const c=s==="zh",r=document.createElement("canvas");r.width=1920,r.height=1800;const o=r.getContext("2d"),d=e.metadata,m="#243f56",f="#5c7487";o.fillStyle="white",o.fillRect(0,0,r.width,r.height);function h(x,u,y,w=23,_=m,B=1808){o.font=`${w}px Segoe UI, Microsoft YaHei, sans-serif`,o.fillStyle=_,o.fillText(String(x),u,y,B)}function E(x,u,y,w,_=21){o.font=`${_}px Segoe UI, Microsoft YaHei, sans-serif`;let B="",C=0;for(const A of String(x))o.measureText(B+A).width>w?(h(B,u,y+C*(_+7),_,f,w),C++,B=A):B+=A;return h(B,u,y+C*(_+7),_,f,w),C+1}function b(x,u,y,w,_,B=x.width/x.height){const C=Math.min(w,_*B),A=C/B;o.drawImage(x,u+(w-C)/2,y+(_-A)/2,C,A)}h(c?"OceanScope | 场比较汇报":"OceanScope | Field comparison report",56,64,38),h("v2.10",1760,64,24),h(`A · ${e.labels.a}`,56,108,25,"#168ba9",870),e.single||h(`B · ${e.labels.b}`,986,108,25,"#c6752a",878),h(`${c?"帧":"Frame"} ${d.frame} · ${e.group.toUpperCase()} ${d.component} · ${d.plane?.startsWith("oblique")?`${(d.rotation_axis||"y").toUpperCase()} ${d.angle_degrees}° / ${He(d.section_percent)}%`:d.plane.toUpperCase()+" / "+d.slice_index} · ${c?"数值单位":"Value unit"} ${e.unit}`,56,151),h(e.single?c?"单组 GT；未提供预测，不计算比较误差。":"Single GT; no prediction and no comparison errors.":e.group==="sdf"?c?"SDF 数值差，不等于水面高度差；有效范围以当前数据的掩码为准。":"SDF field differences are not surface-height errors; validity follows the supplied masks.":c?"速度分量差 / 端点误差；瞬时矢量不是粒子轨迹。":"Velocity component differences / endpoint errors; instantaneous vectors are not particle paths.",56,190,22,f),h(`${c?"三维显示":"3D view"}: ${d.mode} · A ${d.gt_visible?"on":"off"}${e.single?"":` / B ${d.prediction_visible?"on":"off"}`} · ${c?"着色":"shading"}: ${d.shading||"original"} · ${c?"显示精度":"quality"}: ${d.preview_quality}`,56,228,22,f),o.fillStyle="#f4f8fb",o.fillRect(56,250,1808,480),b(a,56,250,1808,480);const p=t.length,l=28,v=(1808-l*(p-1))/p;if(t.forEach((x,u)=>{const y=56+u*(v+l),w=u===2?e.errorRange:e.sourceRange;h(e.titles[u],y,782,25,m,v),h(`${He(w[0])} … ${He(w[1])} ${e.unit}`,y,818,21,f,v),o.imageSmoothingEnabled=!1,b(x,y,840,v,310,e.aspects[u]),o.imageSmoothingEnabled=!0;const _=o.createLinearGradient(y,0,y+v,0);_.addColorStop(0,u===2?e.epe?"#f6f0fc":"#205bb1":"#ebf4fc"),u===2&&!e.epe&&_.addColorStop(.5,"#f6f8fa"),_.addColorStop(1,u===2?e.epe?"#672096":"#c94237":"#1f6fb0"),o.fillStyle=_,o.fillRect(y,1170,v,14),h(`${c?"有效":"Valid"}: ${e.counts[u].valid}/${e.counts[u].total} · ${c?"探针":"Probe"}: ${He(e.probes[u])} ${e.unit}`,y,1220,20,f,v)}),h(c?"当前切片与局部区域":"Current slice and selected region",56,1280,27),e.single)h(c?"仅展示 GT 切片及有效样本；无 A/B 差异统计。":"GT slice and validity only; no A/B statistics.",56,1335,23,f);else{const x=[[c?"完整切片":"Full slice",e.whole],...e.local?.region?[[c?"黄色选区":"Yellow region",e.local]]:[]];h(`${e.epe?"Mean EPE":c?"平均有符号差":"Mean signed"} | ${e.epe?"RMS EPE":"MAE / RMSE"} | ${c?"共同有效 / 候选":"Common valid / candidates"}`,400,1280,22,f,1460),x.forEach(([u,y],w)=>{const _=1310+w*65;o.fillStyle="#f1f6f9",o.fillRect(56,_,1808,55),h(u,76,_+36),h(`${He(y?.mean)} | ${e.epe?He(y?.rmse):`${He(y?.mae)} / ${He(y?.rmse)}`} ${e.unit} | ${y?.count??0}/${y?.total??0} (${He((y?.coverage??0)*100)}%)`,400,_+36,24)})}h(c?"已有全域指标 · 当前帧 · 原始有效范围":"Saved volume metrics · current frame · original support",56,1480,27);const g=e.savedFrameMetrics;if(e.single||!g||g.blocked)h(e.single?c?"不适用：单组查看。":"Not applicable: single dataset.":c?"此帧无可用评分。":"No available scores for this frame.",56,1530,24,f);else{const x=e.group==="sdf"?["mae","rmse","fluidIoU","coverage"]:["meanEpe","epeRmse","coverage"];h(x.map(u=>`${u}: ${He(g[u])}${u==="coverage"||u==="fluidIoU"?"":` ${e.unit}`}`).join("   |   "),56,1530,24)}const j=g?.notice||g?.reason||(e.single?"No prediction provided.":"Missing samples are excluded, never zero.");E(j,56,1575,1808),E(c?"黄色表示选区，虚线表示探针。三维平滑只改变光照法线；原始顶点、切片与指标保持不变。坐标使用源网格坐标单位。":"Yellow marks the region; dashed lines mark the probe. Smooth shading changes lighting normals only. Original vertices, slices and metrics are unchanged. Coordinates use source-grid units.",56,1670,1808,21),h(`${d.comparison_id} · ${c?"完整设置与数值请另存汇报 JSON":"Save report JSON for complete settings and values"}`,56,1760,20,f),await ec(r,i)}function Ic(e,a){let t=1/0,s=-1/0;return e.forEach((i,c)=>{if(!i)return;const r=a[c];for(let o=0;o<i.values.length;o+=1){if(r&&!r.values[o])continue;const d=i.values[o];Number.isFinite(d)&&(t=Math.min(t,d),s=Math.max(s,d))}}),Number.isFinite(t)?[t,s]:[0,1]}function Nc({frame:e,group:a,plane:t,sliceIndex:s,crosshair:i,onCrosshair:c,component:r="magnitude",fixedRange:o=null,lattice:d,single:m=!1,label:f="Dataset",frameNumber:h,frameSplit:E,viewMetadata:b={},angle:p=30,sectionPercent:l=50,rotationAxis:v="y",exportStem:g="comparison",errorScale:j,onErrorScale:x,region:u=null,onRegion:y,onInspection:w,inspectionContext:_,busy:B=!1,captureScene:C,reportReady:A=!1,reportLabels:O={},savedMetrics:P}){const{tr:k,language:I}=ce(),D=I==="zh",F=S.useRef(null),[T,M]=S.useState(!1),[V,X]=S.useState(1),[Y,q]=S.useState(""),z=j?.locked??T,$=j?.limit??V,N=Z=>x?x({locked:Z,limit:$}):M(Z),J=Z=>x?x({locked:z,limit:Z}):X(Z),Q=S.useMemo(()=>Dn(e,a),[e,a]),be=S.useMemo(()=>t==="oblique"?at(d,p,l,v):null,[t,d,p,l,v]),le=S.useMemo(()=>["groundTruth","prediction","error"].map(Z=>t==="oblique"?di(e,Q[Z],r,d,be):Ec(e,Q[Z],t,s,r)),[e,Q,t,s,r,d,be]),ye=S.useMemo(()=>["groundTruth","prediction","error"].map((Z,H)=>t==="oblique"?le[H]?.maskSlice:Q[Z]?.maskId?Ga(e,Q[Z].maskId,t,s):null),[e,Q,t,s,le]),we=S.useMemo(()=>m?null:Xt(le,ye,u),[m,le,ye,u]),We=S.useMemo(()=>m?null:Xt(le,ye),[m,le,ye]),Me=S.useMemo(()=>Vi(d,t,s,be,le[0],u,i),[d,t,s,be,le,u,i]);S.useEffect(()=>{w?.({context:_,value:B?null:Me})},[w,_,Me,B]);const Be=o||Ic(le.slice(0,2),ye.slice(0,2)),W=a==="velocity"&&r==="magnitude",K=z&&kc($,W)||(le[2]?(W?vc:xc)(le[2].values):[-1,1]),ae=[m?f:"Ground Truth","Prediction",W?"Endpoint Error |Pred − GT|":"Signed Error (Pred − GT)"],Re=t==="xy"?[0,1]:t==="xz"?[0,2]:[1,2],Ve=be?[Math.max(be.spacing[0],1e-9),be.spacing[1],1]:d?.voxelSize||[1,1,1],Je=Z=>be?be.degenerate?1:Math.max(.15,(be.range[1]-be.range[0])/((be.height-1)*be.spacing[1])):Z.width*Ve[Re[0]]/(Z.height*Ve[Re[1]]),rn=le.map((Z,H)=>Cc(Z,ye[H])),Zn=t==="xy"?2:t==="yz"?0:1,An=be?be.point(0,0):d?.origin?.map((Z,H)=>Z+s*d.axisSteps[Zn][H]),bn=`Frame ${h??"unknown"} | ${ya(E,h)} | ${st(E,h)} | ${a} ${r} | ${t==="oblique"?`Oblique ${v.toUpperCase()} ${p}° / ${l.toFixed(1)}%`:t.toUpperCase()+" index "+s}`;function Gn(Z){const H=le[0];c([(Z%H.width+.5)/H.width,(Math.floor(Z/H.width)+.5)/H.height])}function _a(){Zt(`${g}_${h}_local_diagnosis.json`,JSON.stringify({schema:"oceanscope.slice-diagnosis.v1",metadata:b,group:a,component:r,unit:Q.unit||"undeclared",difference:W?"vector_endpoint_error":"signed_B_minus_A",local:we,whole:We,world_region_corners:Me?.corners,probe_world:Me?.probe,scope:"current_slice_only_saved_volume_scores_unchanged",validity:"Intersection of finite A/B/error samples and their existing masks"},null,2))}function Hn(){const Z=le.map((H,ee)=>{if(!H)return null;const me=Math.min(H.width-1,Math.floor(i[0]*H.width))+H.width*Math.min(H.height-1,Math.floor(i[1]*H.height));return(!ye[ee]||ye[ee].values[me])&&Number.isFinite(H.values[me])?H.values[me]:null});return Rc({metadata:{...b,source_color_range:Be,error_color_range:m?null:K,error_range_locked:z,probe_world:Me?.probe,world_region_corners:Me?.corners},labels:O,single:m,group:a,epe:W,unit:Q.unit,local:we,whole:We,counts:rn,probes:Z,sourceRange:Be,errorRange:K,metrics:P,titles:ae,aspects:le.map(H=>H?Je(H):1)})}async function Cn(Z=!1){try{if(!A)throw Error(D?"等待当前帧加载完成。":"Wait for the current frame.");const H=C(),ee=Hn();Z?Zt(`${g}_${h}_report.json`,JSON.stringify(ee,null,2)):await Pc(ee,H,[...F.current.querySelectorAll("canvas")],I,`${g}_${h}_report.png`),q("")}catch(H){q(H.message)}}async function pn(){try{const Z=[...F.current.querySelectorAll("canvas")],H=document.createElement("canvas");H.width=1800,H.height=920;const ee=H.getContext("2d");ee.fillStyle="white",ee.fillRect(0,0,1800,920),ee.fillStyle="#18374d",ee.font="20px sans-serif",ee.fillText("OceanScope | "+g,25,35,1740),ee.fillText(bn,25,70,1740),ee.fillText("Plane origin (world units): "+(An?.map(me=>me.toPrecision(5)).join(", ")||"undeclared"),25,105,1740),Z.forEach((me,xe)=>{const Se=25+xe*590,ve=xe===2?K:Be;ee.fillStyle="#18374d",ee.fillText(ae[xe],Se,155,560),ee.fillText(`${ve.map(un=>un.toPrecision(4)).join(" to ")} ${Q.unit||"undeclared"}`,Se,185,560);const qe=Je(le[xe]),L=Math.min(555,460*qe),Ke=L/qe;ee.drawImage(me,Se,205,L,Ke);const ne=ee.createLinearGradient(Se,0,Se+555,0);ne.addColorStop(0,xe===2?W?"#f6f0fc":"#205bb1":"#ebf4fc"),xe===2&&!W&&ne.addColorStop(.5,"#f6f8fa"),ne.addColorStop(1,xe===2?W?"#672096":"#c94237":"#1f6fb0"),ee.fillStyle=ne,ee.fillRect(Se,700,555,18),ee.fillStyle="#18374d",ee.fillText(`${ve[0].toPrecision(4)}                         ${ve[1].toPrecision(4)} ${Q.unit||""}`,Se,745,555),ee.fillText(`Valid slice samples: ${rn[xe].valid}/${rn[xe].total}`,Se,780,560)}),ee.fillText(`Source scale: ${o?"fixed":"auto per frame"}${m?"":` | Error scale: ${z?"fixed":"auto per frame"}`}`,25,830,1740),ee.fillText("Slice validity is not full-volume scoring coverage. Checkerboard = invalid. Source fields and scores unchanged.",25,865,1740),await nc(H,`${g}_${h}_${t}_${t==="oblique"?p:s}_slices.png`,{...b,source_color_range:Be,error_color_range:K,error_range_locked:z,local_diagnosis:we,world_region_corners:Me?.corners}),q("")}catch(Z){q(Z.message)}}return n.createElement("div",{"data-os-loc":"src/field/SliceTriptych.jsx:70:10","data-review-frame":h,"data-review-slice":bn,ref:F,inert:B||void 0},n.createElement("div",{"data-os-loc":"src/field/SliceTriptych.jsx:70:111",className:"frame-split-toolbar"},C&&n.createElement(n.Fragment,null,n.createElement("button",{"data-os-loc":"src/field/SliceTriptych.jsx:70:165",className:"report-export",disabled:!A,onClick:()=>Cn()},D?"导出场一页汇报图":"Export field report PNG"),n.createElement("button",{"data-os-loc":"src/field/SliceTriptych.jsx:70:302",disabled:!A,onClick:()=>Cn(!0)},D?"导出汇报 JSON":"Export report JSON")),!m&&n.createElement(n.Fragment,null,n.createElement("label",{"data-os-loc":"src/field/SliceTriptych.jsx:70:429"},n.createElement("input",{"data-os-loc":"src/field/SliceTriptych.jsx:70:436",type:"checkbox",checked:z,onChange:Z=>N(Z.target.checked)}),D?"固定误差色标（跨帧）":"Lock error scale across frames"),z&&n.createElement("label",{"data-os-loc":"src/field/SliceTriptych.jsx:70:586"},D?"误差上限":"Error limit"," ",n.createElement("input",{"data-os-loc":"src/field/SliceTriptych.jsx:70:619","aria-label":"Error scale limit",type:"number",min:"0.000001",step:"0.1",value:$,onChange:Z=>{const H=Number(Z.target.value);H>0&&Number.isFinite(H)&&J(H)}}))),n.createElement("button",{"data-os-loc":"src/field/SliceTriptych.jsx:70:821",onClick:pn,disabled:le.some((Z,H)=>H<(m?1:3)&&!Z)},m?D?"导出切片 PNG":"Export slice PNG":D?"导出并排切片 PNG":"Export slice comparison PNG")),n.createElement("small",{"data-os-loc":"src/field/SliceTriptych.jsx:70:1005"},bn," · ",D?"有效样本比例仅针对当前切片，不等于全域计算覆盖率。":"Validity below is for this slice, not full-volume scoring coverage."),Y&&n.createElement("p",{"data-os-loc":"src/field/SliceTriptych.jsx:70:1149",role:"alert"},Y),n.createElement("section",{"data-os-loc":"src/field/SliceTriptych.jsx:70:1183",className:"slice-triptych","aria-label":`${a} synchronized slices`},le.slice(0,m?1:3).map((Z,H)=>{const ee=Z&&i?Math.min(Z.width-1,Math.floor(i[0]*Z.width))+Z.width*Math.min(Z.height-1,Math.floor(i[1]*Z.height)):null,me=ee!==null&&(!ye[H]||ye[H].values[ee])&&Number.isFinite(Z.values[ee]);return n.createElement("figure",{"data-os-loc":"src/field/SliceTriptych.jsx:71:338",key:ae[H]},n.createElement("figcaption",{"data-os-loc":"src/field/SliceTriptych.jsx:71:366"},n.createElement("strong",{"data-os-loc":"src/field/SliceTriptych.jsx:71:378"},ae[H]),n.createElement("span",{"data-os-loc":"src/field/SliceTriptych.jsx:71:410"},H===2?`${K[0].toPrecision(3)} … ${K[1].toPrecision(3)}`:`${Be[0].toPrecision(3)} … ${Be[1].toPrecision(3)}`," ",Q.unit||k("(unit undeclared)"))),Z?n.createElement(ct,{slice:Z,maskSlice:ye[H],range:H===2?K:Be,palette:H===2?W?"absolute-error":"error":"ground-truth",aspect:Je(Z),crosshair:i,onCrosshair:c,plane:t,region:u}):n.createElement("div",{"data-os-loc":"src/field/SliceTriptych.jsx:71:861",className:"slice-unavailable"},k("Not available")),n.createElement("small",{"data-os-loc":"src/field/SliceTriptych.jsx:71:924"},k("Probe: "),me?Z.values[ee].toPrecision(6):k("Not valid")," ",Q.unit," · ",a==="velocity"?r:k("SDF")))})),!m&&we&&n.createElement(zi,{region:u,onRegion:y,local:we,whole:We,onLocate:Gn,dimensions:2,unit:Q.unit||(D?"单位未声明":"undeclared"),absolute:W,onExport:_a}),n.createElement("p",{"data-os-loc":"src/field/SliceTriptych.jsx:72:203",className:"height-note"},D?"三维白圈表示探针在切面上的位置；黄色框为选中区域，不代表水面高度。":"The 3D white ring marks the probe on this slice; the yellow box marks the selected region, not water-surface height."),be&&n.createElement("p",{"data-os-loc":"src/field/SliceTriptych.jsx:72:400",className:"height-note"},v==="y"?D?"横轴 s 沿切面，纵轴 Y 向上；使用原始网格坐标单位。斜切不会改变下方保存的全域统计。":"Horizontal: along-section distance s; vertical: Y up. Source-grid coordinates. Oblique inspection does not change saved volume statistics.":D?"横纵轴均沿当前倾斜切面，不等于世界坐标中的高度 Y。使用原始网格坐标单位；全域统计保持不变。":"Both axes lie in the tilted plane; the vertical axis is not world height Y. Source-grid coordinates; saved volume statistics remain unchanged."),n.createElement("div",{"data-os-loc":"src/field/SliceTriptych.jsx:72:844",className:"frame-split-toolbar"},rn.slice(0,m?1:3).map((Z,H)=>n.createElement("small",{"data-os-loc":"src/field/SliceTriptych.jsx:72:920",key:H},ae[H],": ",Z.valid,"/",Z.total," · ",Z.fraction==null?"N/A":(100*Z.fraction).toFixed(1)+"%"))))}const Ss={mae:"MAE",rmse:"RMSE",maxAbsoluteError:"Maximum absolute error",nearSurfaceMae:"Near-surface MAE",signAccuracy:"Sign accuracy",fluidIoU:"Fluid IoU",dice:"Dice",symmetricMeanSurfaceDistance:"Symmetric mean surface distance",hd95:"HD95",meanEpe:"Mean EPE",epeRmse:"EPE RMSE",epeP95:"EPE P95",relativeL2:"Relative L2",meanCosineSimilarity:"Mean cosine similarity",meanAngularErrorDegrees:"Mean angular error",divergenceMae:"Divergence MAE",coverage:"Coverage",validCount:"Valid voxels"},Oc=["nearSurfaceMae","rmse","fluidIoU","meanEpe","epeP95","relativeL2","coverage","mae","maxAbsoluteError","signAccuracy","dice","symmetricMeanSurfaceDistance","hd95","epeRmse","componentMae","componentRmse","meanCosineSimilarity","meanAngularErrorDegrees","divergenceMae","validCount","nonFiniteCount","nearSurfaceCount","surfaceSampleCount","angularExcludedCount","divergenceStencilCount","trustedTau","effectiveBand"];Object.assign(Ss,{componentMae:"Component MAE (x, y, z)",componentRmse:"Component RMSE (x, y, z)",nonFiniteCount:"Non-finite pairs excluded",nearSurfaceCount:"Near-surface voxels",surfaceSampleCount:"Surface samples (pooled)",angularExcludedCount:"Angular exclusions",divergenceStencilCount:"Divergence stencils",trustedTau:"Trusted truncation τ",effectiveBand:"Effective band"});function Fc({metrics:e,group:a,unit:t,frame:s}){const{tr:i,language:c}=ce(),r=e?.[a],o=a==="sdf"?["mae","rmse","fluidIoU","coverage"]:["meanEpe","epeRmse","coverage"],d=r?Oc.filter(f=>r[f]!==void 0):[],m=f=>n.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:14:21",key:f},n.createElement("span",{"data-os-loc":"src/field/MetricsPanel.jsx:14:36"},i(Ss[f])),n.createElement("strong",{"data-os-loc":"src/field/MetricsPanel.jsx:14:66"},r[f]===null?i("Not available"):Array.isArray(r[f])?r[f].map(h=>h==null?"N/A":Number(h).toPrecision(4)).join(" / "):typeof r[f]=="number"?r[f].toLocaleString(void 0,f.endsWith("Count")?{}:{maximumSignificantDigits:5}):String(r[f])),n.createElement("small",{"data-os-loc":"src/field/MetricsPanel.jsx:14:363"},["mae","rmse","maxAbsoluteError","nearSurfaceMae","symmetricMeanSurfaceDistance","hd95","meanEpe","epeRmse","epeP95","componentMae","componentRmse","trustedTau","effectiveBand"].includes(f)?t:f==="coverage"?i("fraction"):f==="meanAngularErrorDegrees"?i("degrees"):f==="divergenceMae"?i(t==="m/s"?"1/s":"velocity / length"):""));return n.createElement("aside",{"data-os-loc":"src/field/MetricsPanel.jsx:15:10",className:"metrics-panel"},n.createElement("h3",{"data-os-loc":"src/field/MetricsPanel.jsx:15:43"},a==="sdf"?c==="zh"?"体积 SDF 指标":"Volumetric SDF metrics":c==="zh"?"原网格速度指标":"Native-grid velocity metrics"),n.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:181",className:"metric-scope"},c==="zh"?`帧 ${s??"—"} · 原网格有效体素 · 不随选区改变`:`Frame ${s??"—"} · Valid native-grid voxels · Independent of ROI`),r?.notice&&n.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:354",role:"note"},c==="zh"&&r.noticeZh?r.noticeZh:i(r.notice)),r?.blocked?n.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:459",className:"score-blocked"},i(r.reason)||i("Scores blocked: declare field semantics and units.")):r?n.createElement(n.Fragment,null,n.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:15:637",className:"metric-grid"},o.filter(f=>d.includes(f)).map(m),d.filter(f=>f.endsWith("Count")).map(m)),n.createElement("details",{"data-os-loc":"src/field/MetricsPanel.jsx:15:776"},n.createElement("summary",{"data-os-loc":"src/field/MetricsPanel.jsx:15:785"},c==="zh"?"更多指标":"More metrics"),n.createElement("div",{"data-os-loc":"src/field/MetricsPanel.jsx:15:843",className:"metric-grid"},r.nearSurfaceDomain&&n.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:899"},i(r.nearSurfaceDomain),n.createElement("br",{"data-os-loc":"src/field/MetricsPanel.jsx:15:932"}),i("Band: "),r.effectiveBand?.toPrecision(4)," ",t),d.filter(f=>!o.includes(f)&&!f.endsWith("Count")).map(m)))):n.createElement("p",{"data-os-loc":"src/field/MetricsPanel.jsx:15:578"},i("Metrics are not available for this frame.")))}const wn="Common valid finite SDF voxels M; N = |M|. Interior means SDF ≤ 0.",an="Common valid finite velocity voxels M; not automatically restricted to fluid interior.",ue=(e,a,t,s,i,c,r,o="")=>({id:e,label:a,formula:t,unitKind:s,direction:i,group:c,domain:r,caveats:o}),rt=[ue("mae","Water-surface elevation MAE","mean |ηp − ηg|","length","Lower","elevation","Paired trustworthy world-Y zero-crossing columns on common XZ lattice.","Not crest-to-trough wave height or Hs. Filled exterior, missing support and multiple crossings are excluded; inspect both coverage denominators."),ue("rmse","Water-surface elevation RMSE","sqrt(mean (ηp − ηg)^2)","length","Lower","elevation","Same paired height columns.","Full-resolution aligned SDF, never preview mesh."),ue("maxAbsoluteError","Maximum elevation error","max |ηp − ηg|","length","Lower","elevation","Same paired height columns."),ue("coverage","Height paired coverage","paired valid columns / GT valid columns","fraction","Context","elevation","GT reconstructible columns.","Zero denominator: N/A. Not SDF voxel coverage."),ue("gtCoverage","GT reconstructible coverage","GT valid columns / candidate XZ columns","fraction","Context","elevation","All candidate XZ columns.","Read with paired coverage to expose excluded GT surfaces."),ue("mae","SDF MAE","Σ |p − g| / N","length","Lower","sdf",wn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),ue("rmse","SDF RMSE","√(Σ (p − g)² / N)","length","Lower","sdf",wn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),ue("maxAbsoluteError","Maximum absolute error","max |p − g|","length","Lower","sdf",wn,"Full/full distances, or explicitly labeled conditional interior distances. For filled exteriors, exclude unsupported distances and interpret with GT-water coverage and occupancy metrics."),ue("nearSurfaceMae","Near-surface MAE","mean |clipτ(p) − clipτ(g)| on B","length","Lower","sdf","B = M ∩ {|g| ≤ effective band}, including numerical tolerance.","GT defines B. For TSDF, band ≤ shared τ; clip both values at τ. Shared τ is min of both TSDF τ values, or the single TSDF τ in a mixed pair. No clipping for full/full."),ue("signAccuracy","Sign accuracy","count[(p ≤ 0) = (g ≤ 0)] / N","fraction","Higher","sdf",wn),ue("fluidIoU","Fluid IoU","|P ∩ G| / |P ∪ G|","fraction","Higher","sdf",wn,"P and G are predicted and GT interior sets in M. Both empty: 1."),ue("dice","Dice","2 |P ∩ G| / (|P| + |G|)","fraction","Higher","sdf",wn,"Both interior sets empty: 1."),ue("symmetricMeanSurfaceDistance","Symmetric mean surface distance","mean(D(G→P) ∪ D(P→G))","length","Lower","sdf","Pooled nearest distances between sampled zero crossings; each surface uses its own valid support.","Approximation, at most 4096 samples per surface. Not exact continuous-mesh distance; unavailable if either surface is empty."),ue("hd95","HD95","percentile95(D(G→P) ∪ D(P→G))","length","Lower","sdf","Same pooled sampled-surface distances.","Linear percentile interpolation; not maximum Hausdorff distance. Surface-sampling limitations apply."),ue("meanEpe","Mean EPE","mean ‖p − g‖₂","speed","Lower","velocity",an),ue("epeRmse","EPE RMSE","√mean ‖p − g‖₂²","speed","Lower","velocity",an),ue("epeP95","EPE P95","percentile95(‖p − g‖₂)","speed","Lower","velocity",an,"Linear interpolation between ordered samples."),ue("componentMae","Component MAE (x, y, z)","mean |pₖ − gₖ|, k = x,y,z","speed","Lower","velocity",an),ue("componentRmse","Component RMSE (x, y, z)","√mean (pₖ − gₖ)², k = x,y,z","speed","Lower","velocity",an),ue("relativeL2","Relative L2","√(Σ ‖p − g‖₂² / Σ ‖g‖₂²)","dimensionless","Lower","velocity",an,"Unavailable when GT energy is zero; no artificial epsilon in denominator."),ue("meanCosineSimilarity","Mean cosine similarity","mean clamp((p·g)/(‖p‖₂ ‖g‖₂), −1, 1)","dimensionless","Higher","velocity",an,"Exclude either magnitude ≤ ε (default 1e−8)."),ue("meanAngularErrorDegrees","Mean angular error","mean acos(cosine) × 180/π","degrees","Lower","velocity",an,"Same nonzero-vector subset as cosine similarity."),ue("divergenceMae","Divergence MAE","mean |∇·p − ∇·g|","inverseTime","Lower","velocity","Six valid neighboring samples; finite central-difference divergence. Borders excluded.","Σₖ (vₖ(i+eₖ) − vₖ(i−eₖ))/(2hₖ). Orthogonal aligned lattice. Divergence mismatch, not absolute incompressibility."),ue("coverage","Coverage","N / total lattice voxels","fraction","Context","both","Reported separately for SDF and velocity.","Always read with the error: small valid support can hide missing predictions.")];function Dc(){return{schema:1,notation:"g = Ground Truth; p = Prediction. These are evaluation metrics, not a weighted training loss.",sequence:"Equal weight per valid frame, not pooled voxels. Excluded frame counts are reported. Population standard deviation; interpolated P95.",metrics:rt}}function Tc(e){const a=e.filter(o=>typeof o=="number"&&Number.isFinite(o)).sort((o,d)=>o-d);if(!a.length)return{median:null,p95:null,stddev:null};const t=o=>{const d=(a.length-1)*o,m=Math.floor(d),f=d-m;return a[m]*(1-f)+a[Math.min(m+1,a.length-1)]*f},s=a.reduce((o,d)=>Math.max(o,Math.abs(d)),0),i=a.map(o=>s?o/s:0),c=i.reduce((o,d)=>o+d/a.length,0),r=Math.sqrt(i.reduce((o,d)=>o+(d-c)**2/a.length,0))*s;return{median:t(.5),p95:t(.95),stddev:Number.isFinite(r)?r:null}}function js(e){if(!Number.isSafeInteger(e?.frame)||!Number.isSafeInteger(e?.prediction_origin_frame)||!Number.isFinite(e?.fps)||e.fps<=0||e.prediction_type==="extrapolation"&&e.frame<=e.prediction_origin_frame)return null;const a=(e.frame-e.prediction_origin_frame)/e.fps;return Number.isFinite(a)?a:null}const $c={length:"m",speed:"m/s",inverseTime:"1/s",degrees:"degrees",fraction:"fraction",dimensionless:"dimensionless"};function Wc(e,a={}){return e.flatMap(t=>rt.filter(s=>s.group===t||s.group==="both"&&t!=="elevation").flatMap(s=>{const i=s.unitKind==="length"?a.sdf??"m":s.unitKind==="speed"?a.velocity??"m/s":s.unitKind==="inverseTime"&&a.velocity&&a.velocity!=="m/s"?`(${a.velocity}) / length`:$c[s.unitKind],c={group:t,key:s.id,label:s.label,unit:i,direction:s.direction};return s.id==="componentMae"||s.id==="componentRmse"?["x","y","z"].map((r,o)=>({...c,id:`${t}.${s.id}.${r}`,index:o,label:`${s.id==="componentMae"?"Component MAE":"Component RMSE"} ${r.toUpperCase()}`})):[{...c,id:`${t}.${s.id}`}]}))}function Vc({metrics:e,frames:a=[],expectedFrames:t=[],groups:s=[],status:i,units:c,frameSplit:r,frameSubset:o="all"}){const d=Object.values(e?.settings?.sdf||{}).some(j=>j?.semantics==="water_interior"),m=d?"gt_water_common_distance_support":e?.settings?.sdfEvaluationRegion||"full_domain",f=Wc(s,c).map(j=>({...j,label:j.label+(d&&j.group==="sdf"?["fluidIoU","dice","signAccuracy","symmetricMeanSurfaceDistance","hd95"].includes(j.key)?" (full domain)":" (conditional GT-water support)":"")+(m==="gt_water"&&j.group==="sdf"?["fluidIoU","dice","symmetricMeanSurfaceDistance","hd95"].includes(j.key)?" (full domain)":" (GT water)":"")})),h=new Set(a),E=[...t,...a,...Object.keys(e?.frames||{}).map(Number),...e?.missingPredictionFrames||[]],b=new Map((r?.rows??[]).map(j=>[j.frame,j])),p=[...new Set(E.filter(Number.isInteger))].sort((j,x)=>j-x).filter(j=>wc(b,j,o)),l=p.map(j=>{const x=e?.frames?.[j],u={};for(const _ of f){const B=x?.[_.group],C=B?.[_.key],A=_.index===void 0?C:C?.[_.index];u[_.id]=!B?.blocked&&Number.isFinite(A)?A:null}const y=s.filter(_=>_!=="elevation"&&x?.[_]?.blocked).map(_=>`${_}: ${x[_].reason||"Scoring blocked"}`).join("; "),w=b.get(j);return{frame:j,elevationAudit:x?.elevation??null,algorithmVersion:e?.algorithmVersion??"legacy undeclared",split:ya(b,j),predictionType:st(b,j),predictionOriginFrame:w?.prediction_origin_frame??null,fps:w?.fps??null,horizonSeconds:js(w),available:h.has(j),calculated:!!x,reason:y,values:u}}),v=f.map(j=>{const x=l.map(w=>w.values[j.id]).filter(Number.isFinite),u=x.length,y=u?x.reduce((w,_)=>w+_/u,0):null;return{...j,mean:y,...Tc(x),minimum:u?x.reduce((w,_)=>Math.min(w,_)):null,maximum:u?x.reduce((w,_)=>Math.max(w,_)):null,valid:u,excluded:l.length-u,total:l.length}}),g=[...new Set(p.flatMap(j=>s.filter(x=>x!=="elevation").flatMap(x=>e?.frames?.[j]?.[x]?.blocked?[`${x.toUpperCase()}: ${e.frames[j][x].reason||"Scoring prerequisites not met"}`]:[])))];return{columns:f,rows:l,summary:v,blockedReasons:g,evaluationRegion:m,frameSubset:o,sdfValidation:e?.settings?.sdf||{},total:l.length,calculated:l.filter(j=>j.calculated).length,complete:i==="ready"&&l.length>0&&l.every(j=>j.calculated)&&!g.length,status:i}}function ke(e){return Number.isFinite(e)?Number(e.toPrecision(6)).toString():"N/A"}const zc=e=>{const a=e==null?"N/A":String(e);return/[",\r\n]/.test(a)?`"${a.replaceAll('"','""')}"`:a};function Lt(e,a){const t=e.complete?"complete":"partial",s=a==="frames"?[["frame","frame_status","sequence_status",...e.columns.map(i=>`${i.id} [${i.unit}]`),"excluded_reason"],...e.rows.map(i=>[i.frame,i.reason?"scoring blocked":i.calculated?"calculated":"not calculated",t,...e.columns.map(c=>i.values[c.id]),i.reason||""])]:[["metric","unit","mean","minimum","maximum","valid_frames","excluded_frames","total_frames","sequence_status","median","p95","stddev"],...e.summary.map(i=>[i.id,i.unit,i.mean,i.minimum,i.maximum,i.valid,i.excluded,i.total,t,i.median,i.p95,i.stddev])];return a==="frames"&&(s[0].push("split","prediction_type","prediction_origin_frame","fps","horizon_seconds"),s.slice(1).forEach((i,c)=>i.push(e.rows[c].split||"unassigned",e.rows[c].predictionType||"unassigned",e.rows[c].predictionOriginFrame,e.rows[c].fps,e.rows[c].horizonSeconds))),a==="frames"&&(s[0].push("algorithm_version","elevation_valid_columns","elevation_gt_valid_columns","elevation_candidate_columns","elevation_reason","elevation_excluded_reasons"),s.slice(1).forEach((i,c)=>{const r=e.rows[c],o=r.elevationAudit;i.push(r.algorithmVersion,o?.validColumns,o?.gtValidColumns,o?.candidateColumns,o?.reason||(o?"":"Not calculated by this result version"),JSON.stringify(o?.excludedReasons??{}))})),s[0].push("frame_subset"),s.slice(1).forEach(i=>i.push(e.frameSubset||"all")),s[0].push("sdf_error_region","geometry_region"),s.slice(1).forEach(i=>i.push(e.evaluationRegion||"full_domain","full_domain")),s[0].push("gt_validation_mode","prediction_validation_mode","gt_override_reason","prediction_override_reason"),s.slice(1).forEach(i=>i.push(e.sdfValidation?.gt?.validationMode||"legacy undeclared",e.sdfValidation?.prediction?.validationMode||"legacy undeclared",e.sdfValidation?.gt?.overrideReason||"",e.sdfValidation?.prediction?.overrideReason||"")),s.map(i=>i.map(zc).join(",")).join(`\r
`)}function Xc(e,a,t=640){const i=e.filter(l=>Number.isFinite(l.values[a])).map(l=>l.values[a]);let c=i.length?Math.min(...i):0,r=i.length?Math.max(...i):1;if(c===r){const l=Math.max(Math.abs(c)*.05,1e-6);c-=l,r+=l}const o=e[0]?.frame??0,d=e.at(-1)?.frame??o,m=l=>d===o?(t+42)/2:64+(l-o)/(d-o)*(t-86),f=l=>180-(l-c)/(r-c)*150,h=[],E=[];let b=[],p=null;for(const l of e){const v=l.values[a];if((!Number.isFinite(v)||p!==null&&l.frame!==p+1)&&(b.length&&h.push(b),b=[]),Number.isFinite(v)){const g={frame:l.frame,value:v,x:m(l.frame),y:f(v)};b.push(g),E.push(g)}p=l.frame}return b.length&&h.push(b),{min:c,max:r,start:o,end:d,x:m,y:f,points:E,segments:h}}function Zc(e,a,t=.9){const s=e.filter(c=>Number.isFinite(c.values[a?.id]));return{worst:a?.direction==="Context"?[]:[...s].sort((c,r)=>(a?.direction==="Higher"?1:-1)*(c.values[a.id]-r.values[a.id])||c.frame-r.frame).slice(0,5),lowCoverage:e.filter(c=>Number.isFinite(c.values[`${a?.group}.coverage`])&&c.values[`${a.group}.coverage`]<t),unavailable:e.filter(c=>!Number.isFinite(c.values[a?.id]))}}const Gc=e=>`"${String(e??"undeclared").replaceAll('"','""')}"`;function Hc(e,a,t){const s=[["report_identifier",a],["frame_subset",e.frameSubset],["frame_numbers",e.rows.map(i=>i.frame).join(";")],["frame_count",e.rows.length],["status",e.complete?"complete":"partial"],["sdf_error_region",e.evaluationRegion],["units",JSON.stringify(e.columns.map(i=>({metric:i.id,unit:i.unit})))],["sdf_declarations",JSON.stringify(e.sdfValidation)],["split_manifest_sha256",t?.sha256],["aggregation","Equal weight per valid frame; mean of frame RMSE, not pooled voxel RMSE. N/A excluded, never zero."],["valid_counts",JSON.stringify(e.summary.map(i=>({metric:i.id,valid:i.valid,total:i.total})))],["limitations","SDF error is not wave-height error. Read error with coverage. Frame numbers do not certify physical-time alignment. Split membership is declared, not independently verified. Exterior-filled distances are conditional, not full-domain accuracy."],["provenance","Use the saved-result ZIP for source identities and full scoring protocol. This notes file describes the currently selected report subset."]];return[["field","value"],...s].map(i=>i.map(Gc).join(",")).join(`\r
`)}function qc({report:e,metric:a,onFrame:t,onDownload:s,comparisonId:i,frameSplit:c}){const{language:r,tr:o}=ce(),d=r==="zh",m=(p,l)=>d?l:p,[f,h]=S.useState(.9),E=S.useMemo(()=>Zc(e.rows,a,f),[e.rows,a,f]),b=(p,l)=>p.slice(0,20).map(v=>n.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:9:51",key:v.frame},n.createElement("button",{"data-os-loc":"src/field/FrameReview.jsx:9:69",disabled:!v.available||!t,"aria-label":`${l==="unavailable"?"Review unavailable frame":l==="coverage"?"Review coverage frame":"Review frame"} ${v.frame}`,onClick:()=>t(v.frame)},v.frame)," · ",ke(l==="coverage"?v.values[`${a?.group}.coverage`]:v.values[a?.id]),l==="unavailable"&&n.createElement("span",{"data-os-loc":"src/field/FrameReview.jsx:9:426"}," · ",v.reason||(v.calculated?m("Metric unavailable on this support; see definitions below","该指标在当前有效区域不可用，请查看下方定义"):m("Not calculated / missing frame","尚未计算或帧缺失")))));return n.createElement("details",{"data-os-loc":"src/field/FrameReview.jsx:10:9",className:"frame-review"},n.createElement("summary",{"data-os-loc":"src/field/FrameReview.jsx:10:43"},m("Frame review & report notes","异常帧检查与报告说明")),n.createElement("p",{"data-os-loc":"src/field/FrameReview.jsx:11:3"},m("Review only: no frames are removed and no scores are changed. Lists follow the selected subset and metric. Worst does not mean statistically abnormal.","仅供检查：不剔除帧、不改变数值。列表跟随当前集合和指标；最差帧不等同于统计异常。")),n.createElement("div",{"data-os-loc":"src/field/FrameReview.jsx:12:3",className:"frame-review-grid"},n.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:12:38"},n.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:12:47"},m("Worst 5 frames","表现最差的 5 帧")," · ",o(a?.label)),E.worst.length?n.createElement("ol",{"data-os-loc":"src/field/FrameReview.jsx:12:132"},b(E.worst,"worst")):n.createElement("p",{"data-os-loc":"src/field/FrameReview.jsx:12:171"},m("No rankable finite values. Coverage is context, not accuracy.","没有可排序的有效数值；覆盖率是背景信息，不代表精度。"))),n.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:13:3"},n.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:13:12"},m("Low coverage","低覆盖率")," · ",E.lowCoverage.length),n.createElement("label",{"data-os-loc":"src/field/FrameReview.jsx:13:77"},m("Review threshold","检查阈值")," ",n.createElement("input",{"data-os-loc":"src/field/FrameReview.jsx:13:115","aria-label":"Coverage review threshold",type:"number",min:"0",max:"1",step:"0.05",value:f,onChange:p=>{const l=Number(p.target.value);p.target.value!==""&&Number.isFinite(l)&&l>=0&&l<=1&&h(l)}})),n.createElement("small",{"data-os-loc":"src/field/FrameReview.jsx:13:348"},m("Below this fraction; review aid, not a scientific pass/fail criterion.","低于此比例时列出；仅辅助检查，不是科研合格线。")),n.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:13:466"},b(E.lowCoverage,"coverage"))),n.createElement("section",{"data-os-loc":"src/field/FrameReview.jsx:14:3"},n.createElement("h4",{"data-os-loc":"src/field/FrameReview.jsx:14:12"},m("Unavailable metric","指标不可用")," · ",E.unavailable.length),n.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:14:84"},b(E.unavailable,"unavailable")),n.createElement("small",{"data-os-loc":"src/field/FrameReview.jsx:14:134"},m("At most 20 entries per list; all values remain in the frame table and CSV.","每个列表最多显示 20 项，全部数据仍保留在逐帧表格和 CSV。")))),n.createElement("details",{"data-os-loc":"src/field/FrameReview.jsx:15:3"},n.createElement("summary",{"data-os-loc":"src/field/FrameReview.jsx:15:12"},m("How to interpret these results","如何解读这些结果")),n.createElement("ul",{"data-os-loc":"src/field/FrameReview.jsx:15:79"},n.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:16:4"},m("N/A is not zero: it may mean missing frames, blocked scoring, no valid samples, or an unsupported metric. The list gives known blocking reasons; metric definitions explain other restrictions.","N/A 不是零：可能是缺帧、计算被阻止、无有效样本或指标不适用。列表显示已知阻止原因，其余限制见指标定义。")),n.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:17:4"},m("A lower error with lower coverage is not automatically better. Compare models on matching frames and common spatial support.","误差更低但覆盖率更低，不自动代表更好。模型比较应使用匹配帧和共同有效空间区域。")),n.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:18:4"},m("Exterior-filled SDF supports conditional interior distance errors only; it does not certify full-domain distance accuracy. Surface metrics may be unavailable.","水外固定填值的 SDF 只支持有条件的水内距离误差，不能证明全域距离精度；表面指标可能不可用。")),n.createElement("li",{"data-os-loc":"src/field/FrameReview.jsx:19:4"},m("SDF MAE is not wave-height MAE. Sequence means give equal weight to valid frames, not to pooled voxels.","SDF MAE 不等于浪高 MAE。序列均值对有效帧等权，并非将所有体素合并计算。")))),n.createElement("button",{"data-os-loc":"src/field/FrameReview.jsx:21:3",disabled:!e.total,onClick:()=>s(`${i}_${e.frameSubset}_report_notes.csv`,Hc(e,i,c))},m("Export report notes CSV","导出报告说明 CSV")))}function Yc({point:e,row:a,selected:t,onFrame:s,language:i}){const c=!!(s&&a?.available),r=a?.predictionType||"unassigned",o={train:"#b66b14",validation:"#8052bc",test:"#008c9c",unassigned:"#7b8794"}[a?.split||"unassigned"];return n.createElement("g",{"data-os-loc":"src/field/FrameCurvePoint.jsx:5:9",transform:`translate(${e.x},${e.y})`,role:"button","aria-label":`${i==="zh"?"选择曲线帧":"Select plotted frame"} ${e.frame}`,"aria-disabled":!c,tabIndex:c?0:-1,onClick:()=>c&&s(e.frame),onKeyDown:d=>{c&&["Enter"," "].includes(d.key)&&(d.preventDefault(),s(e.frame))},style:{cursor:c?"pointer":"default"}},n.createElement("title",{"data-os-loc":"src/field/FrameCurvePoint.jsx:6:2"},`Frame ${e.frame}: ${e.value} | ${a?.split||"unassigned"} | ${r}`),n.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:6:89",r:"7",fill:"transparent"}),t&&n.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:7:13",r:"7",fill:"none",stroke:"#d36218",strokeWidth:"2"}),r==="anchor"?n.createElement("rect",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:19",x:"-4",y:"-4",width:"8",height:"8",fill:o}):r==="extrapolation"?n.createElement("path",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:98",d:"M 0 -5 L 5 4 L -5 4 Z",fill:o}):r==="interpolation"?n.createElement("path",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:168",d:"M 0 -5 L 5 0 L 0 5 L -5 0 Z",fill:o}):n.createElement("circle",{"data-os-loc":"src/field/FrameCurvePoint.jsx:8:221",r:"3",fill:o}))}function Lc({rows:e,metricKey:a,manifest:t,modelName:s}){const{language:i}=ce(),c=i==="zh",r=new Map;let o=0;const d=new Map((t?.rows??[]).map(m=>[m.frame,m]));for(const m of e){const f=d.get(m.frame);if(f?.prediction_type!=="extrapolation")continue;const h=js(f);if(h===null){o++;continue}const E=`${f.prediction_origin_frame} / ${f.fps} fps`;r.has(E)||r.set(E,[]),r.get(E).push({frame:m.frame,seconds:h,value:m.values[a]})}return!r.size&&!o?null:n.createElement("details",{"data-os-loc":"src/field/PredictionTrend.jsx:18:9"},n.createElement("summary",{"data-os-loc":"src/field/PredictionTrend.jsx:18:18"},s&&`${s} · `,c?"未来外推时间趋势":"Future prediction horizon"),n.createElement("p",{"data-os-loc":"src/field/PredictionTrend.jsx:18:110"},c?"按声明的输入起点和 FPS 分图；缺失帧不连线，不合并不同预测。":"Separate plots for declared origin and FPS; missing frames are not connected and different predictions are not merged."),o>0&&n.createElement("p",{"data-os-loc":"src/field/PredictionTrend.jsx:19:14"},c?`${o} 帧缺少有效时间声明，仍使用上方帧号曲线。`:`${o} frame(s) without valid timing; retain the frame-number plot above.`),[...r].map(([m,f])=>{const h=f.filter(g=>Number.isFinite(g.value)),E=Math.max(1,...f.map(g=>g.seconds)),b=h.length?Math.min(...h.map(g=>g.value)):0,p=h.length?Math.max(...h.map(g=>g.value)):1,l=g=>50+g.seconds/E*510,v=g=>160-(g.value-b)/(p-b||1)*120;return n.createElement("figure",{"data-os-loc":"src/field/PredictionTrend.jsx:24:10",key:m},n.createElement("figcaption",{"data-os-loc":"src/field/PredictionTrend.jsx:24:28"},c?"预测起点":"Prediction origin"," ",m," · ",a),n.createElement("svg",{"data-os-loc":"src/field/PredictionTrend.jsx:24:104",role:"img","aria-label":`Prediction horizon ${m}`,viewBox:"0 0 600 200",width:"100%"},n.createElement("line",{"data-os-loc":"src/field/PredictionTrend.jsx:25:4",x1:"50",x2:"560",y1:"160",y2:"160",stroke:"#a9bac8"}),f.map((g,j)=>{const x=f[j-1];return Number.isFinite(g.value)&&n.createElement("g",{"data-os-loc":"src/field/PredictionTrend.jsx:26:80",key:g.frame},x&&g.frame===x.frame+1&&Number.isFinite(x.value)&&n.createElement("line",{"data-os-loc":"src/field/PredictionTrend.jsx:26:157",x1:l(x),y1:v(x),x2:l(g),y2:v(g),stroke:"#008c9c"}),n.createElement("circle",{"data-os-loc":"src/field/PredictionTrend.jsx:26:228",cx:l(g),cy:v(g),r:"4",fill:"#008c9c"},n.createElement("title",{"data-os-loc":"src/field/PredictionTrend.jsx:26:277"},g.frame,": ",ke(g.value),"; ",ke(g.seconds)," s")))}),n.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:4",x:"8",y:"40"},ke(p)),n.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:48",x:"8",y:"160"},ke(b)),n.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:93",x:"50",y:"186"},"0"),n.createElement("text",{"data-os-loc":"src/field/PredictionTrend.jsx:27:122",x:"500",y:"186"},ke(E)," s")))}))}const Uc={missing_or_nonfinite_column:["missing or non-finite column","缺失或非有限数值列"],no_interior_to_exterior_span:["no trustworthy interior-to-exterior span","缺少可信的水内至水外跨度"],ambiguous_or_multiple_crossings:["ambiguous or multiple surfaces","交叉不明确或存在多层水面"],crossing_touches_truncation:["crossing touches truncation boundary","交叉接触截断边界"],nonfinite_height:["non-finite height","高度不是有限数值"],nonfinite_difference:["non-finite height difference","高度差不是有限数值"],outside_common_columns:["outside common column support","不在共同有效列内"]},Jc={"No paired trustworthy single-surface columns":"没有可配对的可信单层水面列。","Invalid world-Y lattice":"世界 Y 轴网格无效。","Invalid height input dimensions":"高度输入维度无效。","Height column grids differ":"高度列网格不一致。","Height requires full SDF or trusted TSDF; filled exterior/unknown is not a trustworthy zero crossing":"需要完整 SDF 或可信 TSDF；水外填值或类型未知无法提供可信零交叉。","Height requires validated unchanged SDF distances":"需要经验证且未重建的 SDF 距离。","Height requires axis-aligned world-Y-up lattice":"需要与世界坐标轴对齐、Y 轴向上的网格。","Height requires a comparison with matching declared units":"需要 GT 与预测的声明单位一致。","Height requires finite positive trusted truncation distance":"需要有限、正值且可信的截断距离。"};function Kc({data:e}){const{language:a}=ce(),t=a==="zh",s=i=>{const[c,...r]=i.split(":"),o=r.length?r.join(":"):c;return(r.length?c==="gt"?"GT: ":c==="prediction"?t?"预测：":"Prediction: ":c+": ":"")+(Uc[o]?.[t?1:0]??o)};return n.createElement("details",{"data-os-loc":"src/field/HeightSupportAudit.jsx:28:9"},n.createElement("summary",{"data-os-loc":"src/field/HeightSupportAudit.jsx:28:18"},t?"当前帧高度有效区域与排除原因":"Current-frame height support and exclusions"),e?n.createElement(n.Fragment,null,e.reason&&n.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:30:16"},t?Jc[e.reason]??e.reason:e.reason),e.blocked&&n.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:31:17"},t?"此帧高度评分不可用；不能把未评估数量当作零。":"Height scoring unavailable for this frame; unevaluated counts are not zero."),n.createElement("table",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:2","aria-label":t?"高度有效区域明细":"Height support audit"},n.createElement("thead",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:59"},n.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:66"},n.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:70"},t?"项目／原因":"Support / reason"),n.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:110"},t?"列数":"Columns"))),n.createElement("tbody",{"data-os-loc":"src/field/HeightSupportAudit.jsx:32:151"},[[t?"有效配对列":"Valid paired columns","validColumns"],[t?"GT 有效列":"Valid GT columns","gtValidColumns"],[t?"候选水平列":"Candidate horizontal columns","candidateColumns"]].map(([i,c])=>n.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:187",key:c},n.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:201",scope:"row"},i),n.createElement("td",{"data-os-loc":"src/field/HeightSupportAudit.jsx:33:228"},e.blocked||!Number.isFinite(e[c])?"N/A":e[c]))),Object.entries(e.excludedReasons??{}).map(([i,c])=>n.createElement("tr",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:59",key:i},n.createElement("th",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:73",scope:"row"},s(i)),n.createElement("td",{"data-os-loc":"src/field/HeightSupportAudit.jsx:34:106"},Number.isFinite(c)?c:"N/A"))))),n.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:35:18"},t?"配对覆盖率＝配对列／GT 有效列；GT 可重建比例＝GT 有效列／候选列。排除原因不代表模型排名。":"Paired coverage = paired / valid GT columns; GT reconstructible fraction = valid GT / candidate columns. Exclusions are not model rankings.")):n.createElement("p",{"data-os-loc":"src/field/HeightSupportAudit.jsx:29:9"},t?"此帧没有高度记录。旧结果需重新创建比较；尚未载入的帧请先选择。":"No height record for this frame. Create a new comparison for legacy results, or select a loaded frame."))}function Qc(e,a){const t=URL.createObjectURL(new Blob(["\uFEFF",a],{type:"text/csv;charset=utf-8"})),s=document.createElement("a");s.href=t,s.download=e,s.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}const er=[];function nr({metrics:e,frames:a,expectedFrames:t=er,groups:s,group:i,status:c,currentFrame:r,onFrame:o,onDownload:d=Qc,comparisonId:m="comparison",sdfUnit:f="m",velocityUnit:h="m/s",onReviewSetup:E,frameSplit:b}){const{tr:p,language:l}=ce(),[v,g]=S.useState(()=>b?"test":"all"),j=Object.values(e?.frames||{}).some(N=>N.elevation),x=S.useMemo(()=>j?[...s,"elevation"]:s,[s,j]),[u,y]=S.useState(""),w=x.includes(u)?u:i;S.useEffect(()=>y(""),[i]),S.useEffect(()=>g(b?"test":"all"),[b?.sha256,!!b]);const _=S.useMemo(()=>Vc({metrics:e,frames:a,expectedFrames:t,groups:x,status:c,units:{sdf:f,velocity:h},frameSplit:b,frameSubset:v}),[e,a,t,x,c,f,h,b,v]),B=_.columns.filter(N=>N.group===w),C=_.summary.filter(N=>N.group===w),[A,O]=S.useState(""),[P,k]=S.useState(0),[I,D]=S.useState(640),F=S.useRef(null),T=B.find(N=>N.id===A)||B[0];S.useEffect(()=>{if(typeof ResizeObserver>"u")return;const N=new ResizeObserver(([J])=>D(Math.max(280,Math.round(J.contentRect.width))));return N.observe(F.current),()=>N.disconnect()},[]);const M=S.useMemo(()=>Xc(_.rows,T?.id,I),[_.rows,T?.id,I]),V=Math.max(1,Math.ceil(_.rows.length/50)),X=Math.min(P,V-1),Y=_.rows.slice(X*50,(X+1)*50),q=S.useMemo(()=>new Map(_.rows.map(N=>[N.frame,N])),[_.rows]),z=q.get(r),$=_.summary.find(N=>N.id===T?.id);return n.createElement("section",{"data-os-loc":"src/field/SequenceMetrics.jsx:31:9",className:"sequence-metrics",ref:F,"aria-label":p("Sequence loss analysis")},n.createElement("h2",{"data-os-loc":"src/field/SequenceMetrics.jsx:32:3"},p("Per-frame metrics & sequence averages")),n.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:3"},l==="zh"?"统计组":"Statistics group"," ",n.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:53","aria-label":"Statistics group",value:w,onChange:N=>y(N.target.value)},x.map(N=>n.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:33:163",key:N,value:N},N==="elevation"?l==="zh"?"水面高度":"Water-surface elevation":N.toUpperCase())))),w==="elevation"&&n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:34:25"},l==="zh"?"世界 Y 水面高度，不是波峰—波谷浪高或 Hs。固定填值、缺失支持和多层水面不可用于此评分。":"World-Y elevation, not crest-to-trough wave height or Hs. Filled exterior, missing support and multiple surfaces cannot be scored."),w==="elevation"&&n.createElement(Kc,{data:e?.frames?.[r]?.elevation}),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:36:3",className:"research-warning"},v==="test"||v.startsWith("test_")?l==="zh"?"Test 报告：仅汇总清单声明的测试帧。":"Test report: only declared test frames are summarized.":v==="train"?l==="zh"?"Train 报告：训练帧表现，不代表未见数据的泛化效果。":"Train report: training-frame performance, not generalization to unseen data.":l==="zh"?"参考报告：不是独立的 Test 结果。":"Reference report: not a Test-only evaluation."," ",l==="zh"?"划分依据训练方清单，不独立核验训练历史。":"Membership follows the supplied manifest; training history is not independently verified."),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:3",className:"frame-split-toolbar"},n.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:40"},l==="zh"?"统计帧集合":"Evaluation subset"," ",n.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:93","aria-label":"Evaluation subset",value:v,onChange:N=>{g(N.target.value),k(0)}},Object.entries({all:l==="zh"?"全部（参考）":"All",train:"Train",validation:"Validation",test:"Test",...Sc(l==="zh"),unassigned:l==="zh"?"未划分":"Unassigned"}).map(([N,J])=>n.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:407",key:N,value:N},J)))),n.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:37:476"},l==="zh"?"仅筛选曲线、统计表和下方 CSV；不改变原始计算或动画。":"Filters curves, tables and the CSVs below; original calculations and playback are unchanged.")),_.total===0&&n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:38:22",role:"status"},l==="zh"?"此集合没有已声明的帧；不补零，也不使用其他集合替代。":"No declared frames in this subset; no zeros or fallback to another subset."),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:39:3"},p("SDF error region: "),n.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:39:32"},_.evaluationRegion==="gt_water_common_distance_support"?p("Conditional GT-water distance support"):_.evaluationRegion==="gt_water"?p("GT water only (GT SDF < 0)"):p("Full domain (valid pairs)")),p(". Occupancy and surface metrics use their own saved validity rules; they are not certified by the distance mask. Velocity metrics unchanged.")),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:40:3",className:"sequence-partial",role:"status"},_.blockedReasons.length?p("Scoring blocked"):_.complete?l==="zh"?"帧记录处理完成":"Processing complete":p("Partial results")," · ",_.calculated," / ",_.total,p(" frame records processed"),c==="error"?p(" · Processing stopped"):""),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:41:3",role:"status"},_.total?$?.valid?l==="zh"?`所选指标有效帧：${$.valid} / ${_.total}；排除 ${$.excluded} 帧。`:`Selected metric valid frames: ${$.valid} / ${_.total}; ${$.excluded} excluded.`:l==="zh"?"所选指标不可用：没有有效数值。处理完成不代表评分有效。":"Selected metric unavailable: no valid values. Completed processing does not imply valid scoring.":l==="zh"?"当前集合为空。":"Selected subset is empty."),_.blockedReasons.length>0&&n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:36",className:"error",role:"alert"},n.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:72"},p("No valid loss can be reported for blocked fields.")),_.blockedReasons.map(N=>n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:181",key:N},p(N))),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:215"},p("Review units and SDF type in Datasets & comparison setup, then click Create comparison again. Old results do not change when declarations are edited. Unit confirmation declares the source scale; it does not convert data.")),E&&n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:42:466",onClick:E},p("Review scoring setup"))),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:43:3"},p("Equal weight per valid frame. N/A is excluded, never zero. RMSE and P95 averages are means of frame metrics, not pooled-voxel metrics. No combined training loss.")),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:3",className:"sequence-toolbar"},n.createElement("label",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:37"},p("Metric curve"),n.createElement("select",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:64","aria-label":p("Metric curve"),value:T?.id||"",onChange:N=>O(N.target.value)},B.map(N=>n.createElement("option",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:185",key:N.id,value:N.id},p(N.label))))),n.createElement("span",{"data-os-loc":"src/field/SequenceMetrics.jsx:44:258"},p("Unit: "),p(T?.unit)," · ",T?.direction==="Context"?p("Context metric"):p(T?.direction)+" "+p("is better"))),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:3",className:"sequence-readout"},p("Frame "),r??"—",": ",n.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:72"},ke(z?.values[T?.id])),p(" · Sequence mean: "),n.createElement("strong",{"data-os-loc":"src/field/SequenceMetrics.jsx:45:158"},ke($?.mean)),p(" · Valid: "),$?.valid??0," / ",_.total),n.createElement(qc,{report:_,metric:T,onFrame:o,onDownload:d,comparisonId:m,frameSplit:b}),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:47:3"},l==="zh"?"对应覆盖率（所选帧均值）":"Associated coverage (selected-frame mean)",": ",ke(_.summary.find(N=>N.id===`${w}.coverage`)?.mean),w==="elevation"&&n.createElement(n.Fragment,null," · ",l==="zh"?"GT 可重建比例":"GT reconstructible fraction",": ",ke(_.summary.find(N=>N.id==="elevation.gtCoverage")?.mean))),n.createElement(Lc,{rows:_.rows,metricKey:T?.id,manifest:b}),n.createElement("svg",{"data-os-loc":"src/field/SequenceMetrics.jsx:49:3",width:"100%",height:"220",viewBox:`0 0 ${I} 220`,role:"img","aria-label":`${T?.label} over frames; ${p(T?.unit)}`},[M.min,(M.min+M.max)/2,M.max].map((N,J)=>n.createElement("g",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:58",key:J},n.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:69",x1:"64",x2:I-22,y1:M.y(N),y2:M.y(N),stroke:"#d7e1eb",strokeWidth:".75"}),n.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:50:163",x:"57",y:M.y(N)+4,textAnchor:"end"},ke(N)))),Number.isFinite($?.mean)&&n.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:51:39",x1:"64",x2:I-22,y1:M.y($.mean),y2:M.y($.mean),stroke:"#7a8797",strokeDasharray:"5 4"}),M.segments.map((N,J)=>n.createElement("polyline",{"data-os-loc":"src/field/SequenceMetrics.jsx:52:36",key:J,points:N.map(Q=>`${Q.x},${Q.y}`).join(" "),fill:"none",stroke:"#008c9c",strokeWidth:"2"})),M.points.map(N=>n.createElement(Yc,{key:N.frame,point:N,row:q.get(N.frame),selected:N.frame===r,onFrame:o,language:l})),Number.isFinite(r)&&n.createElement("line",{"data-os-loc":"src/field/SequenceMetrics.jsx:54:36",x1:M.x(r),x2:M.x(r),y1:"25",y2:"185",stroke:"#d36218",strokeDasharray:"3 3"}),n.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:4",x:"64",y:"205"},M.start),M.end!==M.start&&n.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:68",x:I-22,y:"205",textAnchor:"end"},M.end),n.createElement("text",{"data-os-loc":"src/field/SequenceMetrics.jsx:55:130",x:I/2,y:"205",textAnchor:"middle"},p("Frame"))),n.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:57:3"},l==="zh"?"颜色：训练橙 / 验证紫 / 测试青 / 未划分灰。形状：Anchor 方形 / 插值菱形 / 外推三角 / 未声明圆点。橙圈为当前帧，灰虚线为均值；缺失值不连线。":"Color: Train amber / Validation purple / Test teal / Unassigned gray. Shape: Anchor square / Interpolation diamond / Future extrapolation triangle / Undeclared circle. Orange ring: displayed frame; gray dashed line: mean. Missing values are not connected."),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:58:3",className:"sequence-detail-tables"},n.createElement("h3",{"data-os-loc":"src/field/SequenceMetrics.jsx:58:43"},w==="elevation"?l==="zh"?"水面高度":"Elevation":p(w==="sdf"?"SDF":"Velocity"),p(" sequence summary")),n.createElement("p",{"data-os-loc":"src/field/SequenceMetrics.jsx:59:3"},l==="zh"?"中位数、P95 和总体标准差描述所选帧的分布，不代表统计显著性。":"Median, P95 and population standard deviation describe selected frames, not statistical significance."),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:3",className:"sequence-table-scroll",tabIndex:"0",role:"region","aria-label":p("Scrollable sequence summary")},n.createElement("table",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:116","aria-label":p("Sequence metric summary")},n.createElement("thead",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:166"},n.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:173"},["Metric","Unit","Mean",l==="zh"?"中位数":"Median","P95",l==="zh"?"总体标准差":"Population std. dev.","Minimum","Maximum","Valid / total","Excluded"].map(N=>n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:341",key:N},p(N))))),n.createElement("tbody",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:380"},C.map(N=>n.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:405",key:N.id},n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:420",scope:"row"},p(N.label)),n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:454"},p(N.unit)),[N.mean,N.median,N.p95,N.stddev,N.minimum,N.maximum].map((J,Q)=>n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:540",key:Q,title:J==null?"N/A":String(J)},ke(J))),n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:608"},N.valid," / ",N.total),n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:60:638"},N.excluded)))))),n.createElement("h3",{"data-os-loc":"src/field/SequenceMetrics.jsx:61:3"},w==="elevation"?l==="zh"?"水面高度":"Elevation":p(w==="sdf"?"SDF":"Velocity"),p(" per-frame values")),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:3",className:"sequence-toolbar"},n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:37",disabled:X===0,onClick:()=>k(X-1)},p("Previous rows")),n.createElement("span",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:135"},p("Page "),X+1," / ",V,p(" · 50 frames per page")),n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:217",disabled:X+1>=V,onClick:()=>k(X+1)},p("Next rows")),n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:62:320",onClick:()=>{const N=_.rows.findIndex(J=>J.frame===r);N>=0&&k(Math.floor(N/50))}},p("Show current row"))),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:3",className:"sequence-table-scroll",tabIndex:"0",role:"region","aria-label":p("Scrollable per-frame metrics")},n.createElement("table",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:117","aria-label":p("Per-frame metric values")},n.createElement("thead",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:167"},n.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:174"},n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:178"},p("Frame")),n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:200"},l==="zh"?"所属集合":"Split"),B.map(N=>n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:257",key:N.id},p(N.label),n.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:285"},N.unit))))),n.createElement("tbody",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:328"},Y.map(N=>n.createElement("tr",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:352",key:N.frame,className:N.frame===r?"selected-frame":""},n.createElement("th",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:425",scope:"row"},n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:441","aria-label":`Go to frame ${N.frame}`,"aria-current":N.frame===r?"true":void 0,disabled:!N.available,onClick:()=>o(N.frame)},N.frame),!N.calculated&&n.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:631"},p("Not calculated"))),n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:674"},n.createElement(it,{manifest:b,frame:N.frame})),B.map(J=>n.createElement("td",{"data-os-loc":"src/field/SequenceMetrics.jsx:63:755",key:J.id,title:N.values[J.id]==null?"N/A":String(N.values[J.id])},ke(N.values[J.id])))))))),n.createElement("div",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:3",className:"sequence-toolbar"},n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:37",disabled:!e||!_.total,onClick:()=>d(`${m}_${v}_frames.csv`,Lt(_,"frames"))},v==="all"?p("Export all frames CSV"):l==="zh"?"导出当前集合 CSV":"Export subset CSV"),n.createElement("button",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:274",disabled:!e||!_.total,onClick:()=>d(`${m}_${v}_sequence_summary.csv`,Lt(_,"summary"))},p("Export sequence summary CSV")),n.createElement("small",{"data-os-loc":"src/field/SequenceMetrics.jsx:64:464"},l==="zh"?`两个场组 · 当前集合 ${v} 的所有帧（不限本页） · 完整精度`:`Both field groups · all ${v} frames (not only this page) · full numeric precision`))))}function ar({group:e="sdf"}){const{tr:a}=ce();function t(){const s=URL.createObjectURL(new Blob([JSON.stringify(Dc(),null,2)],{type:"application/json"})),i=document.createElement("a");i.href=s,i.download="OceanScope_metric_definitions.json",i.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}return n.createElement("details",{"data-os-loc":"src/field/LossDefinitions.jsx:7:10",className:"loss-definitions"},n.createElement("summary",{"data-os-loc":"src/field/LossDefinitions.jsx:7:48"},a("Evaluation Metrics / Loss Definitions")),n.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:112"},a("g = Ground Truth; p = Prediction. Evaluation metrics, not a weighted training loss.")),n.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:210"},a("Display quality never changes numerical metrics. Units follow dataset declarations; declaring units does not convert data.")),rt.filter(s=>s.group===e||s.group==="both"&&e!=="elevation").map(s=>n.createElement("article",{"data-os-loc":"src/field/LossDefinitions.jsx:7:442",key:s.id},n.createElement("strong",{"data-os-loc":"src/field/LossDefinitions.jsx:7:462"},a(s.label)),n.createElement("code",{"data-os-loc":"src/field/LossDefinitions.jsx:7:492"},s.formula),n.createElement("small",{"data-os-loc":"src/field/LossDefinitions.jsx:7:516"},a(s.direction),a(" is better"),s.direction==="Context"?a(" (interpret with error)"):""," · ",a(s.unitKind)),n.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:643"},a(s.domain)," ",a(s.caveats)))),n.createElement("p",{"data-os-loc":"src/field/LossDefinitions.jsx:7:692"},a("Sequence statistics give equal weight to each valid frame, not each voxel. Missing values are excluded; valid/excluded frame counts are reported.")),n.createElement("button",{"data-os-loc":"src/field/LossDefinitions.jsx:7:852",onClick:t},a("Export metric definitions")))}function tr({lattice:e,comparison:a}){const{tr:t}=ce();return n.createElement("details",{"data-os-loc":"src/field/AlignmentReport.jsx:7:10",className:"alignment-report"},n.createElement("summary",{"data-os-loc":"src/field/AlignmentReport.jsx:7:48"},t("Alignment and provenance")),n.createElement("dl",{"data-os-loc":"src/field/AlignmentReport.jsx:7:99"},n.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:103"},n.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:108"},t("Comparison")),n.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:135"},a?.id||"—")),n.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:171"},n.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:176"},t("Canonical lattice")),n.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:210"},e?.dimensions?.join(" × ")||"—",t(" voxels"))),n.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:279"},n.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:284"},t("Voxel size")),n.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:311"},e?.voxelSize?.map(s=>Number(s).toPrecision(4)).join(" × ")||"—")),n.createElement("div",{"data-os-loc":"src/field/AlignmentReport.jsx:7:405"},n.createElement("dt",{"data-os-loc":"src/field/AlignmentReport.jsx:7:410"},t("Policy")),n.createElement("dd",{"data-os-loc":"src/field/AlignmentReport.jsx:7:433"},t("Prediction sampled in world space onto Ground Truth voxel centres.")))))}function sr(e){return`${e.labels?.prediction?.exportStem||"prediction"}_${e.runId||e.id}`.replace(/[<>:"/\\|?*\x00-\x1f]/g,"_").slice(0,125)}function ir({frame:e,lattice:a,settings:t,plane:s,sliceIndex:i,angle:c=30,sectionPercent:r=50,rotationAxis:o="y"}){const d=x=>({status:"unavailable",reason:x});if(s==="oblique"&&o!=="y")return d("tilted");if(t?.previewOnly)return d("single");if(["gt","prediction"].some(x=>t?.sdf?.[x]?.semantics!=="full"))return d("semantics");const m=t?.heightComparison;if(m?.surfaceValidated!==!0||m?.negativeInside!==!0||m?.upAxis!=="Y"||m?.coordinateUnit!=="m"||m?.frameTimeAligned!==!0)return d("declaration");if(["gt","prediction"].some(x=>t.sdf[x].unit!=="m"))return d("units");if(!["xy","yz","oblique"].includes(s))return d("plane");const f=a?.dimensions,h=a?.axisSteps,E=a?.origin;if(!f||f.length!==3||f.some(x=>!Number.isInteger(x)||x<2)||!E||E.length!==3||E.some(x=>!Number.isFinite(x))||!h||h.length!==3||h.some((x,u)=>x.length!==3||x.some((y,w)=>!Number.isFinite(y)||(u===w?y<=0:Math.abs(y)>1e-12))))return d("lattice");const b=e?.groups?.sdf?.ground_truth,p=e?.groups?.sdf?.prediction;if([b,p].some(x=>!x||!Array.isArray(x.shape)||x.shape.length!==3||x.shape.some((u,y)=>u!==f[y])||x.values?.length!==f[0]*f[1]*f[2]||x.mask&&x.mask.values?.length!==x.values.length))return d("fields");if(s==="oblique"){const x=at(a,c,r);if(!x)return d("lattice");const u=y=>x.degenerate?[]:Array.from({length:x.width},(w,_)=>{let B=null,C=null;for(let A=x.height-1;A>=0;A--){const O=fi(y,a,x.point(_,A));if(O===null||A===x.height-1&&O<=0)break;if(C!==null&&C>0&&O<=0){B=E[1]+h[1][1]*(A+-O/(C-O));break}C=O}return[x.range[0]+(x.range[1]-x.range[0])*_/(x.width-1),B]});return{status:"ready",axis:"oblique",angle:c,offset:x.offset,result:Gt(u(b),u(p))}}const l=s==="xy"?2:0,v=s==="xy"?0:2;if(!Number.isInteger(i)||i<0||i>=f[l])return d("lattice");const g=(x,u,y)=>x+f[0]*(u+f[1]*y);function j(x){return Array.from({length:f[v]},(u,y)=>{const w=s==="xy"?y:i,_=s==="xy"?i:y;let B=null,C=null;for(let A=f[1]-1;A>=0;A--){const O=g(w,A,_),P=x.values[O];if(!Number.isFinite(P)||x.mask&&!x.mask.values[O]||A===f[1]-1&&P<=0)break;if(C!==null&&C>0&&P<=0){B=E[1]+h[1][1]*(A+-P/(C-P));break}C=P}return[E[v]+h[v][v]*y,B]})}return{status:"ready",axis:v===0?"x":"z",offset:E[l]+h[l][l]*i,result:Gt(j(b),j(p))}}const Ut={tilted:["倾斜截面用于场值与结构分析。高度比较请切换 XY、YZ 或绕 Y 的竖直斜切。","Tilted sections show field values and structure. For height comparison use XY, YZ or a vertical Y-axis section."],semantics:["当前预测含水外填充值，不能把填值边界当作可信水面。保留原有 SDF 切片和条件性距离指标。","The prediction has a filled or undeclared exterior; filled boundaries cannot establish a trustworthy water surface. SDF slices and conditional distance scores remain available."],declaration:["还需明确水面有效性、Y 向上、米制坐标、内负外正和帧时间对齐，才能启用高度比较。","Height comparison requires explicit surface validity, Y-up metre coordinates, negative-inside signs and aligned frame times."],units:["两组 SDF 的单位需要明确为米。","Both SDF units must be declared in metres."],plane:["请选择 XY 或 YZ 竖直切面以提取高度曲线。XZ 是水平切面。","Select a vertical XY or YZ section. XZ is horizontal."],lattice:["此坐标网格尚不满足高度采样条件。","This lattice does not meet height-sampling requirements."],fields:["当前帧缺少完整、相互对应的两组 SDF。","This frame lacks complete, matching SDF fields."]};function cr({frame:e,lattice:a,comparison:t,plane:s,sliceIndex:i,angle:c=30,sectionPercent:r=50,rotationAxis:o="y",frameNumber:d,busy:m}){const{language:f}=ce(),h=f==="zh",E=S.useMemo(()=>m?null:ir({frame:e,lattice:a,settings:t.settings,plane:s,sliceIndex:i,angle:c,sectionPercent:r,rotationAxis:o}),[m,e,a,t.settings,s,i,c,r,o]);return E?.status==="ready"?n.createElement(Xi,{result:E.result,axis:E.axis,kind:"sdf",labels:{a:t.labels?.gt?.displayName,b:t.labels?.prediction?.displayName},metadata:{kind:"validated_sdf_height",dataset_a:t.groundTruthId,dataset_b:t.predictionId,frame:d,...ac(E.axis,E.offset,c),reference_y_m:0,meters_per_unit:1,sampling:s==="oblique"?"uppermost_valid_zero_crossing_trilinear_columns":"uppermost_valid_zero_crossing_linear",time_alignment:"declared_aligned"}}):n.createElement("section",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:10",className:"height-unavailable","aria-label":h?"水面高度比较适用性":"Surface-height eligibility"},n.createElement("h2",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:107"},h?"水面高度比较":"Surface-height comparison"," · ",m?h?"加载中":"Loading":h?"不可用":"Unavailable"),n.createElement("p",{"data-os-loc":"src/field/FieldHeightComparison.jsx:20:212"},m?h?"等待当前帧加载完成。":"Waiting for the current frame.":(Ut[E?.reason]||Ut.fields)[h?0:1]))}const ra=[["heightMae","Height MAE","高度 MAE","m"],["breakingMae","Breaking-region MAE","破碎区 MAE","m"],["amplitudeSlope","Amplitude slope","振幅斜率",""],["velocityRelativeL2","Underwater relative L2","水下速度相对误差",""],["velocityMedianCosine","Median direction cosine","方向余弦中位数",""]];function rr(e){const a=["frame",...ra.map(c=>c[0]),"heightRmse","heightBias","pairedColumns","gtColumns","pairedCoverage","breakingColumns","velocityVoxels","velocityGtEligibleVoxels","velocityCoverage","angularExcludedCount","heightErrorPercent","breakingErrorPercent"],t=c=>c==null?"":`"${String(c).replaceAll('"','""')}"`,s=["protocol_version","unit_convention","height_rule","velocity_rule","aggregation","status"],i=[e.version,e.units,e.height,e.velocity,e.aggregation,e.status];return[[...a,...s].map(t).join(","),...Object.entries(e.frames).map(([c,r])=>[...a.map(o=>o==="frame"?c:r[o]),...i].map(t).join(","))].join(`\r
`)}function Jt(e,a=!1){let t=1/0,s=-1/0;for(const i of e)if(i)for(let c=0;c<i.values.length;c++){const r=i.values[c];!Number.isFinite(r)||i.mask&&!i.mask.values[c]||(t=Math.min(t,r),s=Math.max(s,r))}if(!Number.isFinite(t))return a?[-1,1]:[0,1];if(a){const i=Math.max(Math.abs(t),Math.abs(s),1e-8);return[-i,i]}return t===s?[t-.01,s+.01]:[t,s]}function Bs(e,a){return e&&(!e.mask||e.mask.values[a])&&Number.isFinite(e.values[a])?e.values[a]:null}function or(e,a,t){const s=["ground_truth","prediction","error"].map(o=>e.groups.height[o]),[i,,c]=s[0].shape,r=["frame,x_m,z_m,gt_height_m,prediction_height_m,prediction_minus_gt_m,gt_valid,prediction_valid,paired_valid"];for(let o=0;o<c;o++)for(let d=0;d<i;d++){const m=d+i*o,f=s.map(h=>Bs(h,m));r.push([t,a.origin[0]+d*a.axisSteps[0][0],a.origin[2]+o*a.axisSteps[2][2],...f.map(h=>h??""),...f.map(h=>h===null?0:1)].join(","))}return r.join(`\r
`)}const Ce=(e,a=4)=>Number.isFinite(e)?e.toFixed(a):"—",Kt=e=>Number.isFinite(e)?`${(100*e).toFixed(2)}%`:"—";function lr({protocol:e,frame:a,lattice:t,frameNumber:s,busy:i,onFrame:c}){const{language:r}=ce(),o=r==="zh",[d,m]=S.useState([.5,.5]);S.useEffect(()=>m([.5,.5]),[s]);const f=S.useMemo(()=>["ground_truth","prediction","error"].map(u=>a?.groups.height?.[u]),[a]),h=S.useMemo(()=>[Jt(f.slice(0,2)),Jt([f[2]],!0)],[f]);if(!e)return null;const E=e.frames[String(s)],b=!i&&E&&f.every(Boolean),p=f[0]?.shape[0]||1,l=f[0]?.shape[2]||1,v=Math.min(p-1,Math.floor(d[0]*p)),g=Math.min(l-1,Math.floor(d[1]*l)),j=v+p*g,x=["A · Gentle GT","B · Best_1027",o?"B − A · 高度差":"B − A · Height difference"];return n.createElement("section",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:22:10",className:"reconstruction-analysis","aria-label":o?"Best_1027 重建评估":"Best_1027 reconstruction evaluation","aria-busy":i},n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:5",className:"reconstruction-heading"},n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:45"},n.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:50",className:"reconstruction-eyebrow"},"BEST_1027 · ",o?"三帧对比":"THREE-FRAME PILOT"),n.createElement("h2",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:145"},o?"水面高度与水下速度":"Surface height & underwater velocity")),n.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:23:219",className:"reconstruction-frame"},o?"帧":"Frame"," ",b?s:"…")),n.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:24:5"},o?"当前结果覆盖 1001、1049、1096 三帧，采用下方明确记录的计算规则。不是完整 96 帧评分，也未划分 Test 集。长度和速度沿用 v2 的 m、m/s 模拟尺度约定。":"Frames 1001, 1049 and 1096 only, under the explicit protocol below. Not a full 96-frame or Test-set score. Length and velocity inherit the v2 m / m/s simulation convention."),b?n.createElement(n.Fragment,null,n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:7",className:"reconstruction-cards"},ra.map(([u,y,w,_])=>n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:89",key:u},n.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:104"},o?w:y),n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:131"},Ce(E[u])," ",n.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:26:158"},_))))),n.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:7",className:"reconstruction-support"},o?"高度共同有效列":"Paired height columns"," ",n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:88"},E.pairedColumns.toLocaleString()," / ",E.gtColumns.toLocaleString())," (",Kt(E.pairedCoverage),") · ",o?"水下速度覆盖率":"Underwater velocity coverage"," ",n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:27:261"},Kt(E.velocityCoverage))," · ",o?"方向计算排除低速点":"Low-speed directional exclusions"," ",E.angularExcludedCount),n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:28:7",className:"reconstruction-maps"},f.map((u,y)=>n.createElement("figure",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:28:70",key:x[y],"aria-label":x[y]},n.createElement("figcaption",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:29:9"},x[y]),n.createElement(ct,{slice:{width:p,height:l,values:u.values},maskSlice:u.mask,range:h[y===2?1:0],palette:y===2?"error":"ground-truth",plane:"xz",aspect:p/l,crosshair:d,onCrosshair:m}),n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:9",className:`reconstruction-scale ${y===2?"difference":""}`},n.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:80"},Ce(h[y===2?1:0][0],3)," m"),n.createElement("span",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:31:134"},Ce(h[y===2?1:0][1],3)," m")),n.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:32:9"},o?"选点":"Probe",": ",Ce(Bs(u,j))," m")))),n.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:34:7",className:"reconstruction-caption"},"X → · Z ↑ · X [",Ce(t.origin[0],2),", ",Ce(t.origin[0]+(p-1)*t.axisSteps[0][0],2),"] m · Z [",Ce(t.origin[2],2),", ",Ce(t.origin[2]+(l-1)*t.axisSteps[2][2],2),"] m",n.createElement("br",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:34:270"}),o?"俯视图使用 0.05 m 网格；A/B 同色标，误差红色表示预测偏高，蓝色表示偏低；斜纹为无效区域。点击任一图联动选点。":"Top-down 0.05 m grid. A/B share a scale; red means prediction higher, blue lower. Hatched cells are invalid. Click a map for a shared probe."," · X=",Ce(t.origin[0]+v*t.axisSteps[0][0],3),", Z=",Ce(t.origin[2]+g*t.axisSteps[2][2],3))):n.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:25:15",role:"status"},o?"等待当前帧加载完成；不显示上一帧的指标。":"Waiting for this frame; previous-frame scores are hidden."),n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:5",className:"reconstruction-table-wrap"},n.createElement("table",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:48","aria-label":o?"三帧重建指标":"Three-frame reconstruction metrics"},n.createElement("thead",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:121"},n.createElement("tr",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:128"},n.createElement("th",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:132"},o?"帧":"Frame"),ra.map(([u,y,w,_])=>n.createElement("th",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:205",key:u},o?w:y,_&&` (${_})`)))),n.createElement("tbody",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:275"},Object.entries(e.frames).map(([u,y])=>n.createElement("tr",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:335",key:u,"aria-current":b&&Number(u)===s?"true":void 0},n.createElement("td",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:418"},n.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:422",disabled:i,onClick:()=>c(Number(u))},u)),ra.map(([w])=>n.createElement("td",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:36:528",key:w},Ce(y[w])))))))),n.createElement("p",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:5"},o?"三帧合并：振幅斜率":"Pooled pilot: amplitude slope"," ",n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:61"},Ce(e.pooled.amplitudeSlope))," · ",o?"速度相对误差":"velocity relative L2"," ",n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:162"},Ce(e.pooled.velocityRelativeL2))," · ",o?"方向余弦中位数":"median direction cosine"," ",n.createElement("strong",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:271"},Ce(e.pooled.velocityMedianCosine)),n.createElement("br",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:334"}),n.createElement("small",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:37:339"},o?"合并分子与分母后求比值；方向指标使用全部有效方向余弦的中位数，不是逐帧数值的平均。振幅斜率以 1 为匹配参考，速度相对误差越小越好，方向余弦越接近 1 越好。":"Ratios use pooled sums; direction uses the median of all eligible cosines, not frame averages. Amplitude reference: 1. Lower relative error and cosine closer to 1 are preferable.")),n.createElement("details",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:38:5",className:"reconstruction-protocol"},n.createElement("summary",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:38:50"},o?"本次计算规则与未计算项":"Evaluation protocol & unavailable metrics"),n.createElement("ul",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:39:7"},n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:39:11"},o?"高度：沿 Y 提取内负外正的线性过零位置；排除多层水面和上方缺失支撑，仅比较双方共同有效列。":e.height),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:40:7"},o?"破碎区：在共同有效高度列中选择 X > −0.3 m。当前显示绝对误差（m），R 未定义，因此不显示归一化百分比。":e.breaking+" R is undefined: absolute metres only, no normalized percentages."),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:41:7"},o?"振幅：每帧在同一共同有效区域分别去均值，再计算 Σ(h̃GT·h̃预测) / Σ(h̃GT²)。":e.amplitude),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:42:7"},o?"水下速度：从原网格索引 0 开始，每两个格点取一个，得到 0.1 m 网格；采用 GT 水面下至少 10 cm 且双方 SDF/速度都有效的区域。方向中位数排除任一速度 ≤ 10⁻⁸ m/s 的点。":e.velocity),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:43:7"},o?"右侧和下方通用场指标仍基于原生 0.05 m 网格及其共同有效域，与这里的水下筛选指标分开。":"Generic volume metrics use native 0.05 m common support, separate from the underwater protocol here."),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:44:7"},o?"沿用 v2 的米制、Y 向上和同帧配对约定；新文件本身未独立声明物理单位。读取器报告 VDB 225/224 格式兼容提示，这些是初步参考结果。":e.units+" "+e.reader),n.createElement("li",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:45:7"},o?"尚未计算：归一化高度/破碎区百分比、各波长增益、独立 M1 基线。缺失项目不以零代替。":e.unavailable.join("; ")))),n.createElement("div",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:5",className:"reconstruction-actions"},n.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:45",onClick:()=>Pa("Best_1027_pilot_metrics.csv","\uFEFF"+rr(e),"text/csv;charset=utf-8")},o?"下载三帧指标 CSV":"Pilot metrics CSV"),n.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:229",onClick:()=>Pa("Best_1027_evaluation_protocol.json",JSON.stringify(e,null,2))},o?"下载指标与规则 JSON":"Metrics & protocol JSON"),n.createElement("button",{"data-os-loc":"src/field/ReconstructionAnalysis.jsx:47:403",disabled:!b,onClick:()=>Pa(`Best_1027_${s}_height_map.csv`,"\uFEFF"+or(a,t,s),"text/csv;charset=utf-8")},o?"下载当前高度图 CSV":"Current height map CSV")))}const ma="oceanscope.field-view.v1",As="oceanscope.bookmarks.v2.field",se=e=>{throw Error(e)},ta=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),$e=(e,a=-1e9,t=1e9)=>typeof e=="number"&&Number.isFinite(e)&&e>=a&&e<=t,Qt=(e,a=-1e9,t=1e9)=>Array.isArray(e)&&e.length===2&&e.every(s=>$e(s,a,t));function Cs(e){const a=e.comparison,t=e.processing.lattice;return JSON.stringify({comparison:a.id,gt:a.groundTruthId,prediction:a.settings?.previewOnly?null:a.predictionId,groups:a.availableGroups,settings:a.settings,lattice:{dimensions:t.dimensions,origin:t.origin,axisSteps:t.axisSteps},directory:e.fieldDirectory,frames:e.processing.frames.map(s=>s.frame)})}function cn(e,a){(!ta(e)||e.schema!==ma)&&se("format"),(typeof e.name!="string"||!e.name.trim()||e.name.trim().length>80)&&se("name");const t=e.settings;ta(t)||se("settings"),t.representation!==void 0&&t.representation!==Tn&&se("settings"),t.representation===Tn&&t.group!=="sdf"&&se("group"),(typeof t.caseId!="string"||!t.caseId||t.caseId.length>100||typeof e.sourceSignature!="string"||e.sourceSignature.length>1e5)&&se("dataset"),(!Number.isInteger(t.frame)||!$e(t.frame,0,1e7))&&se("frame"),(!["sdf","velocity"].includes(t.group)||!["split","overlay","wire-overlay","gt","prediction"].includes(t.mode)||!["balanced","fine"].includes(t.quality)||!["magnitude","x","y","z"].includes(t.component))&&se("settings"),(!["xy","xz","yz","oblique"].includes(t.plane)||!Number.isInteger(t.sliceIndex)||!$e(t.sliceIndex,0,1e7)||!$e(t.angle,0,180)||!$e(t.sectionPercent,0,100))&&se("section");for(const c of["showPlane","showContext","showGt","showPrediction"])typeof t[c]!="boolean"&&se("settings");(!$e(t.gtOpacity,.1,1)||!$e(t.predictionOpacity,.1,1)||!Number.isInteger(t.vectorDensity)||!$e(t.vectorDensity,1,2e4)||!$e(t.arrowScale,.001,1e6))&&se("settings"),t.sourceRange!==null&&(!Qt(t.sourceRange)||t.sourceRange[1]<=t.sourceRange[0])&&se("color"),(!ta(t.errorScale)||typeof t.errorScale.locked!="boolean"||!$e(t.errorScale.limit,1e-6,1e9))&&se("color"),Qt(t.crosshair,0,1)||se("probe"),(!ta(t.playback)||typeof t.playback.loop!="boolean"||![.25,.5,1,2].includes(t.playback.speed)||!$e(t.playback.fps,1,120))&&se("settings");const s=Gi(t.region,2),i=Hi(e.camera);if((i.near===null||i.far===null)&&se("camera"),a){const c=a.find(d=>d.id===t.caseId);c||se("dataset"),e.sourceSignature!==Cs(c)&&se("source"),(t.representation===Tn?!Vn(c).includes(t.frame):!c.processing.frames.some(d=>d.frame===t.frame))&&se("frame"),(!c.comparison.availableGroups.includes(t.group)||t.showContext&&!c.comparison.availableGroups.includes("sdf"))&&se("group"),c.comparison.settings?.previewOnly&&(t.mode!=="gt"||t.showPrediction||s)&&se("single");const r=c.processing.lattice,o=t.plane==="xy"||t.plane==="oblique"?2:t.plane==="yz"?0:1;(t.sliceIndex>=r.dimensions[o]||t.plane==="oblique"&&!za(r))&&se("section")}return{schema:ma,name:e.name.trim(),sourceSignature:e.sourceSignature,settings:{...t.representation?{representation:t.representation}:{},...Yi(t.rotationAxis),...qi(t.shading),caseId:t.caseId,frame:t.frame,group:t.group,mode:t.mode,quality:t.quality,component:t.component,plane:t.plane,sliceIndex:t.sliceIndex,angle:t.angle,sectionPercent:t.sectionPercent,showPlane:t.showPlane,showContext:t.showContext,showGt:t.showGt,showPrediction:t.showPrediction,gtOpacity:t.gtOpacity,predictionOpacity:t.predictionOpacity,vectorDensity:t.vectorDensity,arrowScale:t.arrowScale,sourceRange:t.sourceRange?[...t.sourceRange]:null,errorScale:{locked:t.errorScale.locked,limit:t.errorScale.limit},crosshair:[...t.crosshair],...s?{region:s}:{},playback:{speed:t.playback.speed,loop:t.playback.loop,fps:t.playback.fps}},camera:i}}function dr(e,a){new TextEncoder().encode(e).length>Li&&se("size");let t;try{t=JSON.parse(e)}catch{se("json")}return cn(t,a)}function fr(e){let a;try{a=e.getItem(As)}catch{se("storage")}if(a===null)return[];try{const t=JSON.parse(a),s=new Set;return(t.schema!=="oceanscope.field-library.v1"||!Array.isArray(t.items)||t.items.length>vs)&&se("library"),t.items.map(i=>((typeof i.id!="string"||!i.id||s.has(i.id))&&se("library"),s.add(i.id),{id:i.id,...cn(i)}))}catch{se("library")}}function mr(e,a){a.length>vs&&se("limit");const t=new Set,s=a.map(i=>((typeof i.id!="string"||!i.id||t.has(i.id))&&se("library"),t.add(i.id),{id:i.id,...cn(i)}));try{e.setItem(As,JSON.stringify({schema:"oceanscope.field-library.v1",items:s}))}catch{se("storage")}}const es={...Zi,format:["请使用场比较方案 JSON；水面方案、指标和数据说明文件不能作为场方案导入。","Use a field-view JSON. Wave views, metrics and data-info files cannot be imported as field views."],dataset:["当前样例中找不到方案指定的数据。","The saved dataset is not available in the current samples."],source:["样例身份、网格或单位声明已改变，未应用旧方案。","Dataset identity, grid or unit declarations changed; the old view was not applied."],group:["当前样例不提供方案指定的 SDF 或速度场。","This sample does not provide the saved SDF or velocity group."],section:["切片索引或斜切参数超出当前网格范围。","The slice index or oblique settings are outside the current grid."],single:["单组 GT 方案不能包含预测显示或双组模式。","A single GT view cannot use prediction layers or paired display modes."],probe:["切片探针位置必须在 0–100% 范围内。","The slice probe must stay within 0–100%."],color:["色标范围无效；请检查上下限。","Invalid color range; check its limits."],size:["文件超过 2 MB，请选择场比较方案 JSON。","File exceeds 2 MB; select a field-view JSON."],load:["场方案恢复未完成，数据或三维视图加载失败。请检查页面提示后重试。","Field view restoration failed while loading data or 3D. Check the page message and try again."]};function br(e,a){return es[e.message]?.[a?0:1]||es.load[a?0:1]}const pr=[1007,1023,1039,1057,1073,1089],ur=[["mae_m","Height MAE","高度 MAE","m","pooled common columns"],["mae_pct","Height MAE / R","高度 MAE / R","% R","pooled common columns"],["bias_pct","Signed height bias / R","有符号高度偏差 / R","% R","pooled common columns"],["steep_pct","Steep-column MAE / R","陡坡列 MAE / R","% R","GT slope top 15%, per frame"],["calm_cells_pct","Non-steep-column MAE / R","非陡坡列 MAE / R","% R","remaining GT slope columns"],["breaking_band_pct","Breaking-band MAE / R","破浪带 MAE / R","% R","strict -0.30 < X < 1.10"],["calm_band_pct","Calm-band MAE / R","平静带 MAE / R","% R","strict -7.90 < X < -1.50"],["amplitude_slope","Amplitude slope","振幅斜率","ratio","pooled after per-frame demeaning"],["correlation","Height correlation","高度相关系数","ratio","pooled after per-frame demeaning"],["flicker_pct","Adjacent-frame error change / R","相邻帧误差变化 / R","% R","adjacent pairs, no time-step division"],["gt_range_m","Observed GT height range","观测 GT 高度范围","m","GT max minus min over all frames"],["pct_relative_to_m","Normalization reference R","归一化参考 R","m","fixed protocol parameter"]],hr=[["rel_rmse","Relative RMSE — pooled","相对 RMSE — 全体素汇总","ratio","sqrt(sum error energy / sum GT energy)"],["rel_rmse_frame_mean","Relative RMSE — frame mean","相对 RMSE — 逐帧平均","ratio","arithmetic mean of frame relative RMSE"],["cos_median","Direction cosine median","方向余弦中位数","ratio","median over all selected voxels, not mean of frame medians"],["speed_ratio","Mean speed ratio B / GT","平均速度比 B / GT","ratio","mean |B| / mean |GT|"],["vec_mae","Vector MAE","矢量 MAE","source velocity unit","mean norm of vector error"],["gt_mean_speed","GT mean speed","GT 平均速度","source velocity unit","mean norm of GT velocity"]];function ks(e,{subset:a="all",grid:t="coarse",frame:s=e.frameIds[0]}={}){if(!["all","six"].includes(a)||!["fine","coarse"].includes(t)||!e.frameIds.includes(s))throw Error("Invalid metric selection");const i=[],c=e.frameIds,r=e.summary.height,o={runId:e.runId,protocolSha256:e.protocol.sourceScriptSha256,manifestA:e.datasetA.manifestSha256,manifestB:e.datasetB.manifestSha256};function d(l,v,g,j,x,u,y,w,_=null,B="defined by frozen protocol",C="",A=null){const O=Number.isFinite(j)&&!C;i.push({id:l,label:v,labelZh:g,value:O?j:null,unit:x,aggregation:u,scope:y,frameIds:[...w],validCount:_,countStatus:_==null?"not recorded in frozen result":"recorded",status:O?"available":"unavailable",reason:C||(O?"":"Value not recorded or nonfinite in source"),denominator:{formula:B,value:A},source:o})}for(const[l,v,g,j,x]of ur){let u="",y=["mae_m","mae_pct","bias_pct"].includes(l)?r.cells_scored:null;r.cells_scored===0&&!["gt_range_m","pct_relative_to_m"].includes(l)&&(u="No common support"),l==="flicker_pct"&&(c.length<2||c.some((w,_)=>_>0&&w!==c[_-1]+1))&&(u="Requires consecutive adjacent frames"),d("height."+l,v,g,r[l],j,x,"sequence height: all evaluated frames",c,y,j==="% R"?"reference range R":"metric-specific support",u,j==="% R"?r.pct_relative_to_m:null)}for(const l of["gain","coherence"])for(const v of[.3,.6,1.2,2.4,4.8])d(`height.${l}.${v}`,`${l} · λ ${v} m`,`${l==="gain"?"增益":"相干度"} · λ ${v} m`,r[l]?.[String(v)],"ratio","pooled DoG band sums; common support and wider-filter weight > 0.7","sequence height: all evaluated frames",c,null,l==="gain"?"GT band energy":"GT band energy × prediction band energy",r.cells_scored===0?"No common support":"");d("footprint_iou","Wet-column footprint IoU","有水列范围 IoU",e.summary.footprint_iou,"ratio","pooled intersection / union","sequence wet columns",c,null,"wet-column union"),d("volume.iou","Water volume IoU","水体素 IoU",e.summary.volume?.iou,"ratio","pooled intersection / union","sequence water voxels (sdf < 0 and valid)",c,null,"water-voxel union"),d("volume.rec_over_gt","Water volume B / GT","水体积比 B / GT",e.summary.volume?.rec_over_gt,"ratio","pooled B volume / GT volume","sequence water voxels (sdf < 0 and valid)",c,null,"GT water-voxel count");const m=a==="all"?c:pr,f=e.summary.velocity[a==="all"?"all_frames":"velocity_net_6_frames"],h=f?.[t==="fine"?"grid_0.05m":"grid_0.1m"],E=e.rows.filter(l=>m.includes(l.frame)),b=E.map(l=>l.velocity?.[t]?.gtEnergy),p=b.length===m.length&&b.every(Number.isFinite)?b.reduce((l,v)=>l+v,0):null;for(const[l,v,g,j,x]of hr){let u=h?.voxels===0?"No valid velocity support":"";l.startsWith("rel_rmse")&&(p===0||l==="rel_rmse_frame_mean"&&b.some(y=>y===0))&&(u="Zero GT energy makes relative RMSE undefined"),(!f||JSON.stringify(f.frames)!==JSON.stringify(m))&&(u="Frame set does not match archived aggregate"),d("velocity."+l,v,g,h?.[l],j,x,`${a==="all"?"all evaluated frames":"fixed six frames (not train/test split)"}; ${t==="fine"?"native 0.05 XYZ":"XZ 2×2 average, Y unchanged (~0.10 / 0.05 / 0.10)"}`,m,h?.voxels??null,l.startsWith("rel_rmse")?"GT velocity energy":"valid velocity support",u,l==="rel_rmse"?p:null)}return i}function gr(e){const a=["id","value","status","reason","unit","scope","aggregation","frameIds","validCount","countStatus","denominator","source"],t=s=>'"'+String(s==null?"":typeof s=="object"?JSON.stringify(s):s).replaceAll('"','""')+'"';return[a.join(","),...e.map(s=>a.map(i=>t(s[i])).join(","))].join(`
`)}function yr({bundle:e,subset:a,frame:t,zh:s,onDownload:i,selectedGrid:c,onGrid:r}){const[o,d]=S.useState("coarse"),m=c??o;function f(E){d(E),r?.(E)}const h=S.useMemo(()=>ks(e,{subset:a,grid:m,frame:t}),[e,a,m,t]);return n.createElement("details",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:7:9",className:"complete-metrics"},n.createElement("summary",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:7:47"},s?"完整指标 · 范围、网格与聚合":"Complete metrics · scope, grid and aggregation"),n.createElement("p",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:8:3"},s?"高度与体积保持全96帧；上方帧集合只切换速度汇总。固定六帧不是训练/测试划分。缺失计数表示原件未记录，不推测或补零。":"Height and volume retain all96 frames; the frame-set selector changes velocity aggregates only. Fixed six is not a train/test split. Missing counts were not recorded, never inferred or filled with zero."),n.createElement("label",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:3"},s?"速度网格":"Velocity grid"," ",n.createElement("select",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:38","aria-label":"Reference detail grid",value:m,onChange:E=>f(E.target.value)},n.createElement("option",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:132",value:"coarse"},s?"粗网格 · XZ 2×2 / Y不变":"Coarse · XZ 2×2 / unchanged Y"),n.createElement("option",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:9:221",value:"fine"},s?"细网格 · 原生0.05":"Fine · native0.05"))),n.createElement("div",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:3",className:"metric-table-scroll"},n.createElement("table",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:40","aria-label":"Complete protocol metrics"},n.createElement("thead",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:86"},n.createElement("tr",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:93"},(s?["指标","数值","单位","范围 / 聚合","有效计数"]:["Metric","Value","Unit","Scope / aggregation","Valid count"]).map(E=>n.createElement("th",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:206",key:E},E)))),n.createElement("tbody",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:241"},h.map(E=>n.createElement("tr",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:261",key:E.id},n.createElement("th",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:276",scope:"row"},s?E.labelZh:E.label),n.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:319"},E.value==null?"—":E.value.toPrecision(8),E.status!=="available"&&n.createElement("small",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:390"},E.reason)),n.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:421"},E.unit),n.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:438"},n.createElement("small",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:442"},E.scope,n.createElement("br",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:458"}),E.aggregation)),n.createElement("td",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:10:491"},E.validCount==null?s?"原件未记录":"Not recorded":E.validCount.toLocaleString())))))),n.createElement("p",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:11:3"},s?"速度有效域：GT vel_valid、GT sdf < −0.10、预测vel_valid；Z[11:105] / X[11:212]，粗网格须四格全有效。Breaking严格−0.30<X<1.10；calm band与非陡坡列不同。":"Velocity support: GT vel_valid, GT sdf < −0.10, prediction vel_valid; Z[11:105] / X[11:212], all four coarse cells valid. Breaking strictly −0.30<X<1.10; calm band differs from non-steep columns."),n.createElement("button",{"data-os-loc":"src/field/CompleteMetricMatrix.jsx:12:3",onClick:()=>i(`${e.runId}_${a}_${m}_complete-metrics.csv`,gr(h),"text/csv")},s?"导出完整指标 CSV":"Export complete metrics CSV"))}function xr({declarations:e,zh:a}){const t=s=>({claimed:a?"来源声明":"Source declaration",verified:a?"已核验":"Verified",unknown:a?"未知":"Unknown"})[s];return n.createElement("details",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:9",className:"complete-metrics"},n.createElement("summary",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:47"},a?"实验条件与证据来源":"Experiment conditions and evidence"),e?n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:5:3"},a?"“已核验”仅覆盖注明的原始文件身份；相机、模型、单位和测试划分仍按原始材料声明，不能等同独立训练审计。":"Verified labels cover the stated original-file identities. Camera, model, units and test split remain source declarations, not an independent training audit."),n.createElement("dl",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:3",className:"experiment-declarations"},e.entries.map(s=>n.createElement("div",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:72",key:s.id},n.createElement("dt",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:88"},a?s.labelZh:s.label," ",n.createElement("span",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:115"},t(s.status))),n.createElement("dd",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:150"},s.value==null?"—":typeof s.value=="object"?JSON.stringify(s.value):String(s.value),s.note&&n.createElement("small",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:248"},s.note.replace(/collaborator/gi,"Source")),s.source&&n.createElement("small",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:6:318"},s.source.file," · SHA256 ",s.source.sha256))))),n.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:7:3"},a?"直接比较要求相同GT、协议、帧集合、有效域和单位；不同相机/模型可以作为实验变量，但必须显示差异。":"Direct comparison requires the same GT, protocol, frame set, support and units. Camera/model differences may be experimental variables but must be disclosed.")):n.createElement("p",{"data-os-loc":"src/field/ExperimentDeclarations.jsx:4:134",role:"status"},a?"声明尚未核验，不能推断实验条件。":"Declarations not yet verified; conditions cannot be inferred."))}const ns=[1007,1023,1039,1057,1073,1089],Le=e=>Number.isFinite(e)?e.toFixed(6):"—";function vr({bundle:e,frame:a,onFrame:t,onDownload:s,reportSelection:i,onReportSelection:c,unifiedRestore:r=!1,displayGeometryFrames:o=e.geometryFrames}){const{language:d}=ce(),m=d==="zh",[f,h]=S.useState("all"),[E,b]=S.useState("height"),p=i?.subset??f,l=i?.metric??E;function v(M){h(M),c?.(V=>({...V,subset:M}))}function g(M){b(M),c?.(V=>({...V,metric:M}))}const[j,x]=S.useState(""),u=S.useRef(us());S.useEffect(()=>(u.current.cancel(),()=>u.current.cancel()),[a,e]);function y(M){u.current.cancel(),t(M)}async function w(M){if(u.current.cancel(),!!M)try{if(M.size>1024*1024)throw Error("Result selection file too large");const V=await u.current.run(async()=>hs(await M.text(),e));V&&(v(V.subset),g(V.metric),t(V.frame),x(m?"已恢复相同结果的帧与集合；指标仍来自已核验结果包。":"Restored frame and subset; metrics remain from the verified bundle."))}catch(V){x(V.message)}}const _=ui(e,a??e.frameIds[0]),B={..._,geometryAvailable:o.includes(_.frame)},C=e.rows.filter(M=>p==="all"||ns.includes(M.frame)),A=e.summary.velocity[p==="all"?"all_frames":"velocity_net_6_frames"]["grid_0.1m"],O=p==="all"?m?"全96帧 · 粗网格":"All96 frames · Coarse grid":m?"固定六帧 · 粗网格":"Fixed six frames · Coarse grid",P=M=>l==="height"?M.height.mae_m*100:M.velocity.coarse.rel_rmse,k=Math.max(...C.map(P),1e-9),I=M=>42+(M-1001)/95*836,D=M=>155-M/k*125;function F(){return{schemaVersion:1,runId:e.runId,protocol:e.protocol,datasetA:e.datasetA,datasetB:e.datasetB,frame:B.frame,selectedFrame:B.row,subset:p,metric:l,unitStatus:e.unitStatus,geometryAvailable:B.geometryAvailable,summaryScope:"height: all96; velocity: selected subset",summary:{height:e.summary.height,velocity:A},rows:C}}function T(){return["run_id,protocol_id,subset,frame,height_mae_m,height_bias_m,common_columns,coarse_rel_rmse,coarse_valid_voxels,geometry_available",...C.map(M=>[e.runId,e.protocol.id,p,M.frame,M.height.mae_m,M.height.bias_m,M.height.common,M.velocity.coarse.rel_rmse,M.velocity.coarse.voxels,o.includes(M.frame)].join(","))].join(`
`)}return n.createElement("section",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:27:9",className:"reference-evaluation","aria-label":m?"原始96帧协议结果":"Raw 96-frame protocol results"},n.createElement("header",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:28:3"},n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:28:11"},n.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:28:16",className:"reference-eyebrow"},"RAW VDB · 96 / 96"),n.createElement("h2",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:28:76"},m?"Gentle → Best_1027 · 序列评估":"Gentle → Best_1027 · Sequence evaluation")),n.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:28:166",className:"reference-status"},m?"原始读取已核验":"Verified raw read")),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:29:3"},m?"192个原始文件身份核验 · 0失败 · 95个相邻帧对。单位采用来源约定，尚未独立标定。":"192 source identities verified · 0 failures · 95 adjacent pairs. Units follow source convention, without independent calibration."),n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:30:3",className:"reference-cards"},n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:30:36"},n.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:30:41"},m?"全96帧高度 MAE":"All96 height MAE"),n.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:30:90"},Le(e.summary.height.mae_m*100)," ",n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:30:140"},"cm")),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:30:166"},Le(e.summary.height.mae_pct),"% R · R=1.230"),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:30:233"},m?"有符号偏差":"Signed bias"," ",Le(e.summary.height.bias_pct),"% R")),n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:30:324"},n.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:30:329"},m?"速度 relative RMSE · pooled":"Velocity relative RMSE · pooled"),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:30:408",className:"metric-scope"},O),n.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:30:463"},Le(A.rel_rmse)),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:30:507"},A.voxels.toLocaleString()," ",m?"有效粗网格点":"valid coarse voxels")),n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:30:598"},n.createElement("span",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:30:603"},m?"速度 relative RMSE · 逐帧均值":"Velocity relative RMSE · Frame mean"),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:30:684",className:"metric-scope"},O),n.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:30:739"},Le(A.rel_rmse_frame_mean)),n.createElement("small",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:30:794"},m?"XZ 0.1 / Y 0.05 · 来源单位":"XZ 0.1 / Y 0.05 · source units"))),n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:31:3",className:"reference-controls"},n.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:31:39"},m?"帧集合":"Frame set"," ",n.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:31:69","aria-label":"Reference frame set",value:p,onChange:M=>{u.current.cancel(),v(M.target.value)}},n.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:31:195",value:"all"},m?"全96帧":"All96 frames"),n.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:31:250",value:"six"},m?"固定六帧":"Fixed six frames"))),n.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:31:326"},m?"曲线":"Curve"," ",n.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:31:351","aria-label":"Reference metric",value:l,onChange:M=>{u.current.cancel(),g(M.target.value)}},n.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:31:474",value:"height"},m?"高度 MAE (cm)":"Height MAE (cm)"),n.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:31:542",value:"velocity"},m?"粗网格速度 relative RMSE":"Coarse velocity relative RMSE"))),n.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:31:651"},m?"原始帧号":"Original frame"," ",n.createElement("select",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:31:687","aria-label":"Reference frame",value:B.frame,onChange:M=>y(Number(M.target.value))},e.frameIds.map(M=>n.createElement("option",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:31:822",key:M,value:M},M,o.includes(M)?" · 3D":""))))),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:32:3",role:"status"},n.createElement("strong",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:32:20"},m?"选定帧":"Selected frame"," ",B.frame)," · ",m?"高度 MAE":"Height MAE"," ",Le(B.row.height.mae_m*100)," cm · ",m?"速度 relative RMSE":"Velocity relative RMSE"," ",Le(B.row.velocity.coarse.rel_rmse)," · ",B.geometryAvailable?m?"三维预览可用":"3D preview available":m?"该帧无三维数据；保留真实帧号与指标":"No 3D data for this frame; frame identity and metrics retained",p==="six"&&!ns.includes(B.frame)&&(m?" · 当前帧不在固定六帧集合":" · Current frame outside fixed-six subset")),!B.geometryAvailable&&n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:33:34",className:"reference-geometry-links"},m?"跳转到可用三维帧：":"Jump to available geometry: ",o.map(M=>n.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:33:153",key:M,onClick:()=>y(M)},M))),n.createElement("svg",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:34:3",viewBox:"0 0 920 190",role:"img","aria-label":m?"原始帧指标曲线":"Original-frame metric curve"},n.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:34:97",x:"8",y:"27"},Le(k)),n.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:34:136",x:"15",y:"159"},"0"),n.createElement("line",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:34:165",x1:"42",x2:"878",y1:"155",y2:"155",stroke:"#a7c4cb"}),n.createElement("polyline",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:34:224",points:C.map(M=>`${I(M.frame)},${D(P(M))}`).join(" "),fill:"none",stroke:"#087e8b",strokeWidth:"2"}),C.map(M=>n.createElement("circle",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:34:356",key:M.frame,cx:I(M.frame),cy:D(P(M)),r:M.frame===B.frame?5:3,fill:M.frame===B.frame?"#c45c15":"#087e8b",role:"button",tabIndex:"0","aria-label":`${m?"选择帧":"Select frame"} ${M.frame}`,onClick:()=>y(M.frame),onKeyDown:V=>{(V.key==="Enter"||V.key===" ")&&(V.preventDefault(),y(M.frame))}},n.createElement("title",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:34:704"},M.frame,": ",Le(P(M))))),n.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:34:759",x:"42",y:"180"},"1001"),n.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:34:791",x:"840",y:"180"},"1096"),n.createElement("text",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:34:824",x:"400",y:"180"},m?"原始帧号":"Original frame")),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:35:3",className:"reference-scope"},m?"此处为固定协议的全局／逐帧指标。相机、显示平滑与ROI不改变这些值；同协议空间面板使用原生列高度。三维场切片与旧预览诊断保留各自计算范围。":"These are fixed-protocol global/per-frame metrics. Camera, display smoothing and ROI do not change them. The protocol spatial panel uses native height columns; volume slices and legacy diagnostics retain their own scope."),n.createElement("div",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:36:3",className:"reference-controls"},n.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:36:39",onClick:()=>s(`${e.runId}_${p}.json`,JSON.stringify(F(),null,2))},m?"导出结果与当前帧 JSON":"Export results and current frame JSON"),n.createElement("button",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:36:209",onClick:()=>s(`${e.runId}_${p}.csv`,T(),"text/csv")},m?"导出所选集合 CSV":"Export selected-set CSV")),n.createElement(yr,{bundle:e,subset:p,zh:m,onDownload:s,frame:B.frame,selectedGrid:i?.grid,onGrid:M=>c?.(V=>({...V,grid:M}))}),n.createElement(xr,{declarations:e.declarations,zh:m}),!r&&n.createElement("details",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:39:21"},n.createElement("summary",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:39:30"},m?"恢复结果选择":"Restore result selection"),n.createElement("label",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:39:89"},m?"选择本面板导出的 JSON":"Choose JSON exported from this panel"," ",n.createElement("input",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:39:156",type:"file",accept:"application/json,.json","aria-label":"Restore reference selection",onChange:M=>{w(M.target.files?.[0]),M.target.value=""}})),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:39:320",role:"status"},j)),n.createElement("details",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:40:3"},n.createElement("summary",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:40:12"},m?"数据身份、协议与有效计数":"Identity, protocol and valid counts"),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:40:88"},e.protocol.id," · ",e.runId),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:40:132"},"A: ",e.datasetA.manifestSha256,n.createElement("br",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:40:170"}),"B: ",e.datasetB.manifestSha256,n.createElement("br",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:40:210"}),m?"算法":"Algorithm",": ",e.protocol.sourceScriptSha256),n.createElement("p",{"data-os-loc":"src/field/ReferenceEvaluation.jsx:40:278"},m?"当前帧共同高度列":"Current common height columns",": ",B.row.height.common," · GT ",B.row.height.gtWet," / B ",B.row.height.predictionWet,"; ",m?"速度有效点":"Valid velocity voxels",": ",B.row.velocity.coarse.voxels)))}function xa(e){const{shape:[a,t],originXYZ:[s,,i],spacing:c}=e.descriptor;return{xmin:s,xmax:s+(t-1)*c,zmin:i,zmax:i+(a-1)*c}}function ba(e,a,{mode:t="create"}={}){const s={...e};for(const i of["x","z"]){const c=i+"min",r=i+"max";if(!Number.isFinite(s[c])||!Number.isFinite(s[r])||s[r]<s[c])throw Error("Invalid ROI");if(t==="move"){const o=Math.min(s[r]-s[c],a[r]-a[c]);s[c]=Math.max(a[c],Math.min(a[r]-o,s[c])),s[r]=s[c]+o}else s[c]=Math.max(a[c],Math.min(a[r],s[c])),s[r]=Math.max(a[c],Math.min(a[r],s[r]))}return{roi:s,clipped:JSON.stringify(s)!==JSON.stringify(e)}}function Er(e,{ix:a,iz:t,resourceKey:s}){const{shape:[i,c],originXYZ:[r,,o],spacing:d,frameId:m}=e.descriptor;if(!Number.isInteger(a)||!Number.isInteger(t)||a<0||a>=c||t<0||t>=i||!e.common[t*c+a])throw Error("Select a paired valid location");const f=r+a*d,h=o+t*d;return{version:1,frame:m,resourceKey:s,hotspot:{ix:a,iz:t,index:t*c+a,x:f,z:h},roi:ba({xmin:f-10*d,xmax:f+10*d,zmin:h-10*d,zmax:h+10*d},xa(e)).roi,directionDeg:0,anchorMode:"hotspot"}}function va({anchor:e,direction:a},t){let s=-1/0,i=1/0;for(const[c,r,o,d]of[[e.x,a[0],t.xmin,t.xmax],[e.z,a[1],t.zmin,t.zmax]])if(Math.abs(r)<1e-12){if(c<o-1e-9||c>d+1e-9)return null}else{const m=(o-c)/r,f=(d-c)/r;s=Math.max(s,Math.min(m,f)),i=Math.min(i,Math.max(m,f))}return s<=i?[s,i]:null}function Ha(e,{x:a,z:t,directionDeg:s}){const i=xa(e),{shape:[c,r],originXYZ:[o,,d],spacing:m}=e.descriptor;if(![a,t,s].every(Number.isFinite)||a<i.xmin||a>i.xmax||t<i.zmin||t>i.zmax)throw Error("Profile anchor outside domain");const f=s*Math.PI/180,h=[Math.cos(f),Math.sin(f)],E={x:a,z:t},b=va({anchor:E,direction:h},i),p=(a-o)/m,l=(t-d)/m,v=Math.abs(h[1])<1e-12&&Math.abs(l-Math.round(l))<1e-8,g=Math.abs(h[0])<1e-12&&Math.abs(p-Math.round(p))<1e-8,j=(v||g)&&Math.abs(p-Math.round(p))<1e-8&&Math.abs(l-Math.round(l))<1e-8;let x;if(j)x=Array.from({length:v?r:c},(y,w)=>((v?o:d)+w*m-(v?a:t))/(v?h[0]:h[1]));else{const y=Math.max(2,Math.ceil((b[1]-b[0])/m)+1);x=Array.from({length:y},(w,_)=>b[0]+(b[1]-b[0])*_/(y-1))}x=[...x,0].sort((y,w)=>y-w).filter((y,w,_)=>w===0||Math.abs(y-_[w-1])>1e-9);const u=x.map(y=>{const w=a+y*h[0],_=t+y*h[1],B=(w-o)/m,C=(_-d)/m;let A=null,O=null;if(j){const P=Math.round(C)*r+Math.round(B);e.common[P]&&(A=e.heightA[P],O=e.heightB[P])}else if(r>=2&&c>=2){const P=Math.max(0,Math.min(r-2,Math.floor(B))),k=Math.max(0,Math.min(c-2,Math.floor(C))),I=B-P,D=C-k,F=[k*r+P,k*r+P+1,(k+1)*r+P,(k+1)*r+P+1],T=[(1-I)*(1-D),I*(1-D),(1-I)*D,I*D];F.every(M=>e.common[M]&&Number.isFinite(e.heightA[M])&&Number.isFinite(e.heightB[M]))&&(A=F.reduce((M,V,X)=>M+T[X]*e.heightA[V],0),O=F.reduce((M,V,X)=>M+T[X]*e.heightB[V],0))}return{distance:y,x:w,z:_,a:A,b:O,difference:A===null||O===null?null:O-A}});return{anchor:E,direction:h,sampling:j?"native_columns":"bilinear_common_four",step:m,points:u}}function ot(e,a){return{first:Ha(e,{...a.hotspot,directionDeg:a.directionDeg}),second:Ha(e,{...a.hotspot,directionDeg:a.directionDeg+90})}}function qa(e){let a=0,t=0,s=0,i=0,c=null;for(const r of e){if(!Number.isFinite(r.error))continue;const o=r.error,d=Math.abs(o);a++,t+=o,s+=d,i+=o*o,!c||d>c.absolute?c={...r,absolute:d,signed:o,ties:1}:d===c.absolute&&c.ties++}return{samples:a,mae:a?s/a:null,bias:a?t/a:null,rmse:a?Math.sqrt(i/a):null,maximum:c}}function zn(e,a=null){if(a&&(!["xmin","xmax","zmin","zmax"].every(E=>Number.isFinite(a[E]))||a.xmin>a.xmax||a.zmin>a.zmax))throw Error("Invalid evidence ROI");const{shape:[t,s],originXYZ:[i,,c],spacing:r}=e.descriptor;let o=0,d=0,m=0;const f=[];for(let E=0;E<t;E++)for(let b=0;b<s;b++){const p=E*s+b,l=i+b*r,v=c+E*r;a&&(l<a.xmin||l>a.xmax||v<a.zmin||v>a.zmax)||(o++,d+=+!!e.wetA[p],m+=+!!e.wetB[p],e.common[p]&&f.push({index:p,ix:b,iz:E,x:l,z:v,error:e.heightB[p]-e.heightA[p]}))}const h=qa(f);return{...h,candidates:o,validGT:d,validPrediction:m,common:h.samples,coverageCandidate:o?h.samples/o:null,coverageGT:d?h.samples/d:null,weighting:"native columns, equal area per column"}}function Ya(e,a=null){const t=a?va(e,a):null,s=e.points.map(i=>({...i,error:i.difference}));return{full:qa(s),roi:a?qa(t?s.filter(i=>i.distance>=t[0]-1e-10&&i.distance<=t[1]+1e-10):[]):null,sampling:e.sampling,weighting:"sample mean; not native area or volume statistics"}}function Ms(e,a,t){if(!e||e.version!==1||e.frame!==a.frameId||e.resourceKey!==JSON.stringify(a)||e.anchorMode!=="hotspot"||!Number.isFinite(e.directionDeg)||e.directionDeg<0||e.directionDeg>=180)throw Error("Invalid diagnosis identity/direction");if(e.caseNote!==void 0&&(typeof e.caseNote!="string"||e.caseNote.length>120))throw Error("Invalid case note");const s=e.hotspot,[i,c]=a.shape,r=a.spacing;if(!s||!Number.isInteger(s.ix)||!Number.isInteger(s.iz)||s.ix<0||s.ix>=c||s.iz<0||s.iz>=i||s.index!==s.iz*c+s.ix||![s.x,s.z].every(Number.isFinite)||Math.abs(s.x-(a.originXYZ[0]+s.ix*r))>1e-9||Math.abs(s.z-(a.originXYZ[2]+s.iz*r))>1e-9||!t||t.index!==s.index||Math.abs(t.x-s.x)>1e-9||Math.abs(t.z-s.z)>1e-9)throw Error("Diagnosis native point mismatch");return{...e.caseNote!==void 0?{caseNote:e.caseNote}:{},version:1,frame:e.frame,resourceKey:e.resourceKey,hotspot:{ix:s.ix,iz:s.iz,index:s.index,x:s.x,z:s.z},roi:e.roi??null,directionDeg:e.directionDeg,anchorMode:"hotspot"}}const lt="oceanscope.protocol-report.v1",_r=e=>JSON.parse(JSON.stringify(e)),as=e=>JSON.stringify(e,(a,t)=>t&&typeof t=="object"&&!Array.isArray(t)?Object.fromEntries(Object.keys(t).sort().map(s=>[s,t[s]])):t),oa=(e,a)=>as(e)===as(a),Xn=(e,a=-1e9,t=1e9)=>typeof e=="number"&&Number.isFinite(e)&&e>=a&&e<=t;function Rs(e){if(!/^[a-f0-9]{64}$/.test(e.verifiedPayloadSha256)||!/^[a-f0-9]{64}$/.test(e.declarations?.sha256))throw Error("Verified report identity unavailable");return{...Bn(e),bundleSha256:e.verifiedPayloadSha256,declarationsSha256:e.declarations.sha256}}function Ps(e,a,t,s){if(!e||e.frame!==a.frameId||!t.frameIds.includes(e.frame))throw Error("Report frame mismatch");if(!["xy","xz","yz","oblique"].includes(e.plane)||!["x","y","z"].includes(e.rotationAxis)||!Xn(e.angle,0,180)||!Xn(e.sectionPercent,0,100))throw Error("Invalid report section");const i=e.plane==="xy"||e.plane==="oblique"?a.shape[0]:e.plane==="yz"?a.shape[1]:s?.[0]?.processing.lattice.dimensions[1]??64;if(!Number.isInteger(e.sliceIndex)||e.sliceIndex<0||e.sliceIndex>=i)throw Error("Report slice outside lattice");const c=e.selection;if(!c||!["all","six"].includes(c.subset)||!["fine","coarse"].includes(c.grid)||!["height","velocity"].includes(c.metric))throw Error("Invalid report selection");let r=null,o=null;if(e.geometry){const m=e.geometry.settings?.representation===Tn;if(!s?.length||!m&&!t.geometryFrames.includes(e.frame))throw Error("Report geometry unavailable");r=cn(e.geometry,s);const f=s.find(h=>h.id===r.settings.caseId);if(o=m?ps(f,e.frame,r.settings.quality):nt(f,e.frame),!o||!oa(e.geometryResource,o))throw Error("Report preview resource identity mismatch");for(const h of["frame","plane","sliceIndex","rotationAxis","angle","sectionPercent"])if(r.settings[h]!==e[h])throw Error("Report geometry/section mismatch")}const d=typeof e.geometryStatus?.reason=="string"?e.geometryStatus.reason.slice(0,500):r?"Exact-frame preview bytes verified":"No 3D evidence captured";return{frame:e.frame,plane:e.plane,sliceIndex:e.sliceIndex,rotationAxis:e.rotationAxis,angle:e.angle,sectionPercent:e.sectionPercent,selection:{subset:c.subset,grid:c.grid,metric:c.metric},geometry:r,geometryResource:o,geometryStatus:{status:r?"included":"unavailable",reason:d}}}function La(e){if(e==null)return null;if(!["xmin","xmax","zmin","zmax"].every(a=>Xn(e[a]))||e.xmin>e.xmax||e.zmin>e.zmax)throw Error("Invalid report ROI");return Object.fromEntries(["xmin","xmax","zmin","zmax"].map(a=>[a,e[a]]))}function pa(e,a){if(e==null)return null;const[t,s]=a.shape,i=e.index;if(!Number.isInteger(i)||i<0||i>=t*s)throw Error("Invalid report probe");const c=a.originXYZ[0]+i%s*a.spacing,r=a.originXYZ[2]+Math.floor(i/s)*a.spacing;if(!Xn(e.x)||!Xn(e.z)||Math.abs(c-e.x)>1e-9||Math.abs(r-e.z)>1e-9)throw Error("Report probe/column mismatch");return{index:i,x:c,z:r}}function wr({bundle:e,spatial:a,view:t,roi:s=null,probe:i=null,catalog:c,diagnosis:r=null,appearance:o=null}){const d=a.descriptor,m=Ps(t,d,e,c),f=La(s);if(o!=null&&typeof o.absoluteError!="boolean")throw Error("Invalid report appearance");let h=o?{appearance:{absoluteError:o.absoluteError}}:{};if(r){const b=Ms({...r,roi:f},d,pa(i,d));if(!a.common[b.hotspot.index])throw Error("Diagnosis hotspot is no longer jointly valid");const p=ot(a,b);h={diagnosis:b,appearance:{absoluteError:o?.absoluteError??!1},profiles:p,evidence:{frame:zn(a),roi:f?zn(a,f):null,first:Ya(p.first,f),second:Ya(p.second,f)}}}const E=m.plane==="xy"||m.plane==="yz"||m.plane==="oblique"&&m.rotationAxis==="y"?gs(a,{plane:m.plane,index:m.sliceIndex,angle:m.angle,sectionPercent:m.sectionPercent}):null;return _r({schema:lt,...h,createdAt:new Date().toISOString(),source:Rs(e),descriptor:d,view:m,roi:f,probe:pa(i,d),global:$n(a),local:f?$n(a,f):null,profile:E,metrics:ks(e,{...m.selection,frame:m.frame}),frameMetrics:e.rows.find(b=>b.frame===m.frame),declarations:e.declarations,unitStatus:e.unitStatus,scope:"Native highest-crossing height columns; ROI/profile do not replace all96 global metrics. Units are source convention, not independently calibrated."})}function Sr(e,a,t,{catalog:s}={}){if(new TextEncoder().encode(e).length>1024*1024)throw Error("Report file too large");const i=JSON.parse(e);if(i?.schema!==lt)throw Error("Unsupported protocol report format");if(!oa(i.source,Rs(a)))throw Error("Report identity mismatch");const c=t.frames.find(o=>o.frameId===i.view?.frame);if(!c||!oa(i.descriptor,c))throw Error("Report resource mismatch");let r={};if(i.appearance!=null){if(typeof i.appearance.absoluteError!="boolean")throw Error("Invalid report appearance");r.appearance={absoluteError:i.appearance.absoluteError}}if(i.diagnosis!=null){const o=pa(i.probe,c),d=La(i.roi),m=Ms(i.diagnosis,c,o);if(!oa(m.roi,d))throw Error("Diagnosis ROI mismatch");if(typeof i.appearance?.absoluteError!="boolean")throw Error("Invalid diagnosis appearance");r={diagnosis:m,appearance:{absoluteError:i.appearance.absoluteError}}}return{descriptor:c,...r,view:Ps(i.view,c,a,s),roi:La(i.roi),probe:pa(i.probe,c)}}function jr(e){const a=s=>'"'+String(s==null?"":typeof s=="object"?JSON.stringify(s):s).replaceAll('"','""')+'"',t=[["kind","name","value","unit","scope","metadata"]];t.push(["source","snapshot",e.createdAt,"",e.schema,e.unitStatus]);for(const[s,i]of Object.entries(e.source))t.push(["source",s,i,"","identity",""]);t.push(["view","selection",e.view,"","current view",{roi:e.roi,probe:e.probe}],["source","declarations",e.declarations,"","claimed / verified / unknown",""]);for(const s of e.metrics)t.push(["metric",s.id,s.value,s.unit,s.scope,s]);for(const[s,i]of[["frame",e.global],["ROI",e.local]])if(i)for(const[c,r]of Object.entries(i))t.push(["spatial",c,r,c==="common"?"columns":"m",s,{frame:e.view.frame,roi:s==="ROI"?e.roi:null}]);for(const s of e.profile?.points??[])t.push(["profile","height A / B / difference",s,"m",e.profile.sampling,{frame:e.view.frame,plane:e.view.plane}]);if(e.diagnosis){t.push(["diagnosis","selection",e.diagnosis,"","native hotspot / current ROI",e.appearance]);for(const[s,i]of Object.entries(e.evidence))i&&t.push(["diagnostic evidence",s,i,"m; coverage fractions","explicit native or profile sample weighting",i.weighting??""]);for(const[s,i]of Object.entries(e.profiles))for(const c of i.points)t.push(["paired profile",s,c,"m",i.sampling,{frame:e.view.frame,anchor:i.anchor,direction:i.direction,roi:e.roi}])}return t.map(s=>s.map(a).join(",")).join(`
`)}function Br(e,a){return dt({stem:`${e.source.runId}_${e.view.frame}_protocol-report`,record:e,csv:jr(e),previewUrl:a})}function dt({stem:e,record:a,csv:t,previewUrl:s}){const i=[],c=r=>{const o=URL.createObjectURL(r);return i.push(o),o};try{const r={csv:{name:e+".csv",mime:"text/csv",content:t},json:{name:e+".json",mime:"application/json",content:JSON.stringify(a,null,2)}};if(s){if(!s.startsWith("data:image/png;base64,"))throw Error("PNG encoding failed");const o=Uint8Array.from(atob(s.slice(s.indexOf(",")+1)),m=>m.charCodeAt(0)),d=new Blob([o],{type:"image/png"});r.png={name:e+".png",mime:"image/png",blob:d,href:c(d)}}for(const o of["csv","json"]){const d=r[o];d.blob=new Blob([d.content],{type:d.mime+";charset=utf-8"}),d.href=c(d.blob)}return r}catch(r){for(const o of i)URL.revokeObjectURL(o);throw r}}const Ua=`{
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
`,Ar="complete",Cr=96,kr=192,Mr="2d38783dc08dd1f8683abd5b5fde7aca2532c46473aa3acaf8024092833cb44a",Rr=63307776,Pr=25.37458590004826,Ir=202805248,Nr=1e-12,Or=1867211,Fr={mae_m:.015322750768874766,bias_m:-.00377808261841917},ua={status:Ar,frames:Cr,rawHashesVerified:kr,indexSha256:Mr,binaryBytes:Rr,elapsedSeconds:Pr,peakWorkingSetBytes:Ir,referenceTolerance:Nr,common:Or,weightedHeight:Fr},Dr="oceanscope.velocity-alignment.v1",Tr=1001,$r="best-1027",Wr="partial",Vr=!0,zr={gt:{frame:1001,file:"clean_fullsdf_vel.1001.vdb",bytes:10508067,sha256:"8cd757ed7cecfe8f677a6e8994e053bcbb178e93a8c0b257a82c89b14de954be",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1001,file:"recon_fullsdf_vel.1001.vdb",bytes:10562288,sha256:"fd0ab7ff40ed007eb3543c6326ba10f7f98dbda59e094a0dbfbb2066b4212f26",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},Xr={frame:1001,url:"/data/velocity-raw/1001.ocfld.gz",packedBytes:15074066,packedSha256:"c1284e150f6c95880ae942c08fb3a54209096127c13ed9d14e4d48a8cac6a54b",decodedBytes:62391416,decodedSha256:"723f73f42097cede6faf03a7cd106af8d7aef55eabcdc4207b469fb9a1a4a197",roundtrip:"exact"},Zr={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},Gr={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},Hr={gt:0,prediction:2856765473069345e-22},qr=2856765473069345e-22,Yr=["x","y","z"],Lr="ZYX",Ur={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},Jr="m/s",Kr="Existing source convention only; no independent physical or time calibration.",Qr="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",eo={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},no={resource:{frame:1001,url:"/data/fields/best-1027/1001.ocfld.gz",packedBytes:26128772,packedSha256:"3a504d78eefed6ef1a3e5fef3523f62eb7f0a13ae68e67e8cb23907f4b6f6f46",decodedBytes:99523224,decodedSha256:"8760d8da4ce6ac716b433ede5c787ba13baff142a4324fb03e13824f90e978f8"},comparison:{gt:{error:"vel.x values differ at 1363784 samples; max 2.8210940528072825e-16"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: vel.x values differ at 1363784 samples; max 2.8210940528072825e-16"],retainedUnchanged:!0},ao="exact",to={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:179815,sha256:"6264bad6598a054b1ac18538a73305aa383761e97e67b4e8120f74a6f73fab06"},common:{count:177960,sha256:"33db691f210a15dd5e533103720e9708b363e05c66e4cc266f14413335d8371f"},computable:{count:177960,sha256:"33db691f210a15dd5e533103720e9708b363e05c66e4cc266f14413335d8371f"}},so=0,io=[],co="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",ro={schema:Dr,frame:Tr,caseId:$r,status:Wr,dataAndDomainVerified:Vr,source:zr,resource:Xr,lattice:Zr,originalLattices:Gr,cacheLatticeMaxDisplacement:Hr,pairMaxDisplacement:qr,componentOrder:Yr,arrayOrder:Lr,vectorBasis:Ur,unitClaim:Jr,unitEvidence:Kr,protocolSha256:Qr,domainDefinition:eo,legacyCache:no,diagnosticRoundtrip:ao,domain:to,nonfiniteExcluded:so,failures:io,scope:co},oo="oceanscope.velocity-alignment.v1",lo=1049,fo="best-1027",mo="partial",bo=!0,po={gt:{frame:1049,file:"clean_fullsdf_vel.1049.vdb",bytes:11105671,sha256:"a821ec84b9f2eecc09f234cdf05050e77e3572d6f9c3d46bce94d0a28f328df9",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1049,file:"recon_fullsdf_vel.1049.vdb",bytes:10571839,sha256:"ff18d054439135a9c39abc139aa628ca7dcb753dd46b389b86bde47747f5d4c3",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},uo={frame:1049,url:"/data/velocity-raw/1049.ocfld.gz",packedBytes:15261605,packedSha256:"913c1ddbec87d484f71905720334c90ca6ebccdad5c48a543f69eb405308e707",decodedBytes:62391416,decodedSha256:"403ff5ea6e2afcd3129761caa6a5adf7f2699e180d1733e85774ea1a55df4ef1",roundtrip:"exact"},ho={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},go={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},yo={gt:0,prediction:2856765473069345e-22},xo=2856765473069345e-22,vo=["x","y","z"],Eo="ZYX",_o={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},wo="m/s",So="Existing source convention only; no independent physical or time calibration.",jo="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",Bo={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},Ao={resource:{frame:1049,url:"/data/fields/best-1027/1049.ocfld.gz",packedBytes:26633403,packedSha256:"1443fd356c49996f7b7bac3ab8d8ee9fc4b40d9a6d4a0734b2a0e6e2592c2548",decodedBytes:99523224,decodedSha256:"ad0deb564ccd2db1fc91e4db9f711acaa8f6c231e3acca426773f8bb0cbf851a"},comparison:{gt:{error:"sdf values differ at 2 samples; max 0.0"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: sdf values differ at 2 samples; max 0.0"],retainedUnchanged:!0},Co="exact",ko={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:189062,sha256:"adaf091d8684752b63cdf670a7f10b150720ed4342c7042ee4ee70311055d839"},common:{count:184957,sha256:"6367149b8f2ca91ca5e7dd4c5eeb75c22cf814b39535732dd9fb2f2a698599de"},computable:{count:184957,sha256:"6367149b8f2ca91ca5e7dd4c5eeb75c22cf814b39535732dd9fb2f2a698599de"}},Mo=0,Ro=[],Po="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",Io={schema:oo,frame:lo,caseId:fo,status:mo,dataAndDomainVerified:bo,source:po,resource:uo,lattice:ho,originalLattices:go,cacheLatticeMaxDisplacement:yo,pairMaxDisplacement:xo,componentOrder:vo,arrayOrder:Eo,vectorBasis:_o,unitClaim:wo,unitEvidence:So,protocolSha256:jo,domainDefinition:Bo,legacyCache:Ao,diagnosticRoundtrip:Co,domain:ko,nonfiniteExcluded:Mo,failures:Ro,scope:Po},No="oceanscope.velocity-alignment.v1",Oo=1096,Fo="best-1027",Do="partial",To=!0,$o={gt:{frame:1096,file:"clean_fullsdf_vel.1096.vdb",bytes:11272288,sha256:"7153212dbf15d5970fab77d2c187a858fa5735447abfcd8dfc717fa1844d4e94",manifestSha256:"e3047a16a86369b6a58f12912097c1f09914d9e435356959a289757b126e586e"},prediction:{frame:1096,file:"recon_fullsdf_vel.1096.vdb",bytes:10500539,sha256:"16187d0cad3236b3ebef4900650d0b3cd98294ef9ab248088797a73365200db2",manifestSha256:"323dd9e90113fc2c263944216da1d442ec769ad767141605a633c69cbfc7a37d"}},Wo={frame:1096,url:"/data/velocity-raw/1096.ocfld.gz",packedBytes:15329856,packedSha256:"a0731f4996fadbe7d2e7c9b5562250ead6a8cc817a2f7b1f44d393c45d86dd7d",decodedBytes:62391416,decodedSha256:"bfe8078ba7a9436b73b8906e210a8e7d8f0b312fc772c4ee0e68f9e282fedb9c",roundtrip:"exact"},Vo={dimensions:[224,64,128],origin:[-9.649999714323453,-1.5000000204890966,-2.550000047311187],axisSteps:[[.049999999148505836,0,0],[0,.049999999148505836,0],[0,0,.049999999148505836]],voxelSize:[.049999999148505836,.049999999148505836,.049999999148505836]},zo={gt:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.049999999148505836,0,0,-9.649999714323453],[0,.049999999148505836,0,-1.5000000204890966],[0,0,.049999999148505836,-2.550000047311187],[0,0,0,1]],shape_zyx:[128,64,224]},prediction:{bbox_min:[0,0,0],bbox_max:[223,63,127],matrix:[[.05000000000000071,0,0,-9.65],[0,.050000000000000044,0,-1.5],[0,0,.04999999999999982,-2.5500000000000003],[0,0,0,1]],shape_zyx:[128,64,224]}},Xo={gt:0,prediction:2856765473069345e-22},Zo=2856765473069345e-22,Go=["x","y","z"],Ho="ZYX",qo={status:"source-convention",evidence:"Separate scalar vel.x/y/z match raw grid values and frozen evaluator components; no rotation/rescaling.",independentPhysicalCalibration:!1},Yo="m/s",Lo="Existing source convention only; no independent physical or time calibration.",Uo="4b86170d9ec410011b80e7a10aa485cda30cb4a670367c8a5091a2c687b60df9",Jo={id:"collaborator-native",cropX:[11,212],cropZ:[11,105],gtSdfCutoffFloat32:-.10000000149011612,rule:"GT vel_valid > 0 AND GT sdf < -0.10 (float32) AND Pred vel_valid > 0, within tank ZX crop; no sdf_valid or prediction water condition"},Ko={resource:{frame:1096,url:"/data/fields/best-1027/1096.ocfld.gz",packedBytes:26932173,packedSha256:"5900168e2e47a98c85f505558e49c754619e3824ea1404299d783fd7451dd0ee",decodedBytes:99523224,decodedSha256:"1cdb1261a33ed72f515bd59a75668467cbb8d7f78da7af6b360653cf6cbcb2f9"},comparison:{gt:{error:"sdf values differ at 1 samples; max 0.0"},prediction:{fields:{sdf:{unequal:0,maxAbsoluteDifference:0},"vel.x":{unequal:0,maxAbsoluteDifference:0},"vel.y":{unequal:0,maxAbsoluteDifference:0},"vel.z":{unequal:0,maxAbsoluteDifference:0}},maskUnequal:0,positiveVsHalfThresholdUnequal:0}},failures:["gt: sdf values differ at 1 samples; max 0.0"],retainedUnchanged:!0},Qo="exact",e0={candidate:{count:1209216,sha256:"794c0711f14bf6c0429ce630a71b4994a993fc1d0d515bcd0a337a203eb26a65"},eligible:{count:223882,sha256:"3d3747b91823a8c0b8e2d7487c955abe70b257b49b9079a660ddb1112f7c5cf9"},common:{count:217252,sha256:"f4cca5ed859acd6e09a9ab9318b117c094d2647572e72b961768938e558395a8"},computable:{count:217252,sha256:"f4cca5ed859acd6e09a9ab9318b117c094d2647572e72b961768938e558395a8"}},n0=0,a0=[],t0="Single frame native diagnostics; not new sequence scoring, independent reader, or physical calibration",s0={schema:No,frame:Oo,caseId:Fo,status:Do,dataAndDomainVerified:To,source:$o,resource:Wo,lattice:Vo,originalLattices:zo,cacheLatticeMaxDisplacement:Xo,pairMaxDisplacement:Zo,componentOrder:Go,arrayOrder:Ho,vectorBasis:qo,unitClaim:Yo,unitEvidence:Lo,protocolSha256:Uo,domainDefinition:Jo,legacyCache:Ko,diagnosticRoundtrip:Qo,domain:e0,nonfiniteExcluded:n0,failures:a0,scope:t0},i0=new Map([[1001,ro],[1049,Io],[1096,s0]]);function Ea(e){const a=i0.get(e);return!a||a.frame!==e||a.caseId!=="best-1027"||!a.dataAndDomainVerified||a.diagnosticRoundtrip!=="exact"||a.resource.frame!==e||a.resource.url!==`/data/velocity-raw/${e}.ocfld.gz`||a.protocolSha256!==Wn.protocolSha256||a.source.gt.manifestSha256!==Wn.manifestA||a.source.prediction.manifestSha256!==Wn.manifestB?null:a}async function Is(e,{signal:a}={}){const t=Ea(e);if(!t)throw Error("No verified velocity diagnostic resource for this frame");const s=await fetch(t.resource.url,{signal:a});if(!s.ok)throw Error(`${e} velocity resource unavailable (${s.status}); generate the local diagnostic resource using the alignment handoff`);const i=Es(await bs(await s.arrayBuffer(),t.resource));return a?.throwIfAborted(),{frame:i,lattice:t.lattice,alignment:t}}const c0=["collaborator-native","common-finite-exploration"];function Ns({frame:e,lattice:a,alignment:t,domain:s}){if(!c0.includes(s))throw Error("Unknown velocity domain");if(s==="collaborator-native"&&!t?.dataAndDomainVerified)throw Error("Velocity domain has not been verified");const i=a?.dimensions,c=a?.origin,r=a?.axisSteps;if(!i||i.length!==3||i.some(b=>!Number.isInteger(b)||b<1)||!c||c.some(b=>!Number.isFinite(b))||!r||r.length!==3||r.some((b,p)=>b.length!==3||b.some((l,v)=>!Number.isFinite(l)||(p===v?l<=0:l!==0))))throw Error("Unsupported velocity lattice");const o=e?.groups?.velocity,d=e?.groups?.sdf?.ground_truth;if([d,o?.ground_truth_valid,o?.prediction_valid,...["ground_truth","prediction"].flatMap(b=>[..."xyz"].map(p=>o?.[b+"."+p]))].some(b=>!b||b.shape?.length!==3||b.shape.some((p,l)=>p!==i[l])||b.values?.length!==i[0]*i[1]*i[2]))throw Error("Velocity field shape mismatch");const f=t?.domainDefinition?.cropX??[11,212],h=t?.domainDefinition?.cropZ??[11,105];function E(b,p,l){const v=b+i[0]*(p+i[1]*l),g=s!=="collaborator-native"||b>=f[0]&&b<f[1]&&l>=h[0]&&l<h[1],j=g&&o.ground_truth_valid.values[v]>0&&(s!=="collaborator-native"||d.values[v]<Math.fround(-.1)),x=g&&o.prediction_valid.values[v]>0,u=j&&x,y=[..."xyz"].map(C=>o["ground_truth."+C].values[v]),w=[..."xyz"].map(C=>o["prediction."+C].values[v]),_=[...y,...w].every(Number.isFinite);return{candidate:g,gtEligible:j,predValid:x,paired:u,common:u&&_,nonfiniteExcluded:u&&!_,gt:y,pred:w}}return{d:i,o:c,a:r,sample:E,world:(b,p,l)=>c.map((v,g)=>v+r[0][g]*b+r[1][g]*p+r[2][g]*l)}}function Os(e,{x:a,z:t}){return[Math.round((a-e.origin[0])/e.axisSteps[0][0]),Math.round((t-e.origin[2])/e.axisSteps[2][2])]}function r0(e){const{d:a,sample:t}=Ns(e),[s,i]=Os(e.lattice,e.hotspotXZ);if(s<0||s>=a[0]||i<0||i>=a[2])return null;for(let c=a[1]-1;c>=0;c--)if(t(s,c,i).common)return c;return null}function Fs(e){if(e.plane!=="xz")throw Error("Velocity diagnosis supports XZ slices only");const{d:a,a:t,world:s,sample:i}=Ns(e),[c,r,o]=a,d=e.sliceIndex;if(!Number.isInteger(d)||d<0||d>=r)throw Error("Velocity Y index is outside the grid");const m=e.roiXZ;if(m&&(Object.values(m).length!==4||["xmin","xmax","zmin","zmax"].some(u=>!Number.isFinite(m[u]))||m.xmin>m.xmax||m.zmin>m.zmax))throw Error("Invalid velocity ROI bounds");const f={domain:e.domain,width:c,height:o,sliceIndex:d,stepX:t[0][0],stepZ:t[2][2],worldAt:u=>s(u%c,d,Math.floor(u/c)),roiView:null};for(const u of["speedGT","speedPred","vectorError","speedDelta"])f[u]=new Float64Array(c*o).fill(NaN);for(const u of["candidate","gtEligible","common","roi"])f[u+"Mask"]=new Uint8Array(c*o);f.vectorsGT=new Float64Array(3*c*o),f.vectorsPred=new Float64Array(3*c*o);const h=()=>({counts:{candidate:0,gtEligible:0,predValid:0,paired:0,common:0,nonfiniteExcluded:0,gtOnly:0,predOnly:0},sumE:0,sumDelta:0,maximum:null}),E=h(),b=h();function p(u,y,w){for(const _ of["candidate","gtEligible","predValid","paired","common","nonfiniteExcluded"])u.counts[_]+=Number(y[_]);if(u.counts.gtOnly+=Number(y.gtEligible&&!y.predValid),u.counts.predOnly+=Number(y.predValid&&!y.gtEligible),y.common){const _=f.vectorError[w];u.sumE+=_,u.sumDelta+=f.speedDelta[w],(!u.maximum||_>u.maximum.value)&&(u.maximum={value:_,index:w,world:f.worldAt(w)})}}let l=c,v=-1,g=o,j=-1;for(let u=0;u<o;u++)for(let y=0;y<c;y++){const w=y+c*u,_=i(y,d,u),[B,,C]=s(y,d,u);for(const A of["candidate","gtEligible","common"])f[A+"Mask"][w]=Number(_[A]);_.common&&(f.vectorsGT.set(_.gt,3*w),f.vectorsPred.set(_.pred,3*w),f.speedGT[w]=Math.hypot(..._.gt),f.speedPred[w]=Math.hypot(..._.pred),f.vectorError[w]=Math.hypot(..._.pred.map((A,O)=>A-_.gt[O])),f.speedDelta[w]=f.speedPred[w]-f.speedGT[w]),p(E,_,w),(!m||B>=m.xmin&&B<=m.xmax&&C>=m.zmin&&C<=m.zmax)&&(p(b,_,w),f.roiMask[w]=1,l=Math.min(l,y),v=Math.max(v,y),g=Math.min(g,u),j=Math.max(j,u))}v>=0&&(f.roiView={x:l,z:g,width:v-l+1,height:j-g+1});function x(u){const y=u.counts;return{counts:y,coverageCandidate:y.candidate?y.common/y.candidate:null,coverageGT:y.gtEligible?y.common/y.gtEligible:null,meanE:y.common?u.sumE/y.common:null,meanSpeedDelta:y.common?u.sumDelta/y.common:null,maximum:u.maximum}}return f.whole=x(E),f.local=x(b),f}function Ds(e,a){if(a!==null&&(!Number.isFinite(a)||a<0))throw Error("Invalid direction threshold");const{commonMask:t,roiMask:s,vectorsGT:i,vectorsPred:c,speedGT:r,speedPred:o}=e,d=new Float64Array(t.length).fill(NaN),m=new Uint8Array(t.length);let f=0,h=0,E=0,b=0;if(a!==null)for(let l=0;l<t.length;l++){if(!t[l]||r[l]<=a||o[l]<=a)continue;let v=0;for(let j=0;j<3;j++)v+=i[3*l+j]/r[l]*(c[3*l+j]/o[l]);const g=Math.acos(Math.max(-1,Math.min(1,v)))*180/Math.PI;d[l]=g,m[l]=1,E++,f+=g,s[l]&&(b++,h+=g)}const p=(l,v,g)=>({count:l,excludedLowSpeedCount:a===null?null:g-l,meanDegrees:l?v/l:null});return{degrees:d,mask:m,whole:p(E,f,e.whole.counts.common),local:p(b,h,e.local.counts.common)}}function Ts(e,a,t,s){const{width:i,commonMask:c,vectorsGT:r,vectorsPred:o,stepX:d,stepZ:m}=e;let f=s??0;for(let l=0;s===void 0&&l<c.length;l++)c[l]&&(f=Math.max(f,Math.hypot(r[3*l],r[3*l+2]),Math.hypot(o[3*l],o[3*l+2])));const h=f>0?.72*Math.min(t,a.width,a.height)/f:0,E=Math.min(d,m),b=l=>[l[0]*h*E/d,l[2]*h*E/m],p=[];for(let l=Math.ceil(a.z/t)*t;l<a.z+a.height;l+=t)for(let v=Math.ceil(a.x/t)*t;v<a.x+a.width;v+=t){const g=v+i*l;if(!c[g])continue;const j=Array.from(r.subarray(3*g,3*g+3)),x=Array.from(o.subarray(3*g,3*g+3));p.push({index:g,x:v,z:l,gt:j,pred:x,gtOffset:b(j),predOffset:b(x)})}return{points:p,stride:t,gain:h,maxProjection:f,referenceSpeed:f,referenceGridLength:b([f,0,0])[0]}}const $s="oceanscope.velocity-diagnosis.v1",o0="native-xz-paired-v1";function l0(e,a,t,s=new Date().toISOString()){const{display:i,direction:c,probe:r}=e,[o]=a.lattice.dimensions,{arrows:d}=i;return structuredClone({schema:$s,createdAt:s,source:{caseId:a.caseId,codeRevision:t,calculation:o0,protocolSha256:a.protocolSha256,originals:a.source,resource:a.resource},alignment:{lattice:a.lattice,unitClaim:a.unitClaim,unitEvidence:a.unitEvidence,vectorBasis:a.vectorBasis},domain:{id:e.domain,definition:e.domainDefinition},plane:{frame:a.frame,axis:"xz",yIndex:e.yIndex,yWorld:e.yWorld},roi:e.roiXZ,probe:{xIndex:r.index%o,zIndex:Math.floor(r.index/o),xyz:r.xyz},appearance:{mode:i.mode,zoom:i.zoomed,viewport:i.view,ranges:i.ranges},arrows:{enabled:d!==null,stride:d?.stride??null,gain:d?.gain??null,referenceSpeed:d?.referenceSpeed??null,referenceGridLength:d?.referenceGridLength??null},angleThreshold:{tau:c.tau,unit:c.unit,source:c.thresholdSource},summary:{whole:e.whole,roi:e.local,direction:{whole:c.whole,roi:c.local}},samples:{scope:"Probe and displayed arrow anchors. CSV contains the full native slice.",probe:r,arrowNativeIndices:d?.points.map(m=>m.index)??[]},surfaceCase:e.surfaceRequest})}function d0(e,a,t){const{plane:s,domain:i}=e,c=new Set(e.samples.arrowNativeIndices),r=["frame,y_index,native_index,x_index,z_index,x,y,z,domain,in_roi,candidate,gt_eligible,common,probe,arrow_anchor,gt_vx,gt_vy,gt_vz,pred_vx,pred_vy,pred_vz,gt_speed,pred_speed,vector_error,speed_delta,direction_tau,angle_eligible,angle_degrees"];for(let o=0;o<a.commonMask.length;o++){const d=a.commonMask[o],m=t.mask[o],f=d?[...a.vectorsGT.subarray(3*o,3*o+3),...a.vectorsPred.subarray(3*o,3*o+3),a.speedGT[o],a.speedPred[o],a.vectorError[o],a.speedDelta[o]]:Array(10).fill("");r.push([s.frame,s.yIndex,o,o%a.width,Math.floor(o/a.width),...a.worldAt(o),i.id,a.roiMask[o],a.candidateMask[o],a.gtEligibleMask[o],d,+(o===e.samples.probe.index),Number(c.has(o)),...f,e.angleThreshold.tau,m,m?t.degrees[o]:""].join(","))}return r.join(`
`)+`
`}function f0(e,a,t=.25){const{width:s,height:i,stepX:c,stepZ:r,commonMask:o}=e,d=Math.min(c,r),m=d*t,f=d,h=24*d,E=Math.round(h/m),b=1e-8,p=y=>{const[w,,_]=e.worldAt(0);return[w+y[0]*c,_+y[1]*r]};function l(y,w){const[_,B]=y;if(_<0||B<0||_>=s-1||B>=i-1)return{stop:"grid"};const C=Math.floor(_)+s*Math.floor(B),A=_%1,O=B%1,P=[C,C+1,C+s,C+s+1],k=[(1-A)*(1-O),A*(1-O),(1-A)*O,A*O];if(P.some(M=>!o[M]))return{stop:"mask"};const I=M=>P.reduce((V,X,Y)=>V+k[Y]*w[X*3+M],0),D=I(0),F=I(2),T=Math.hypot(D,F);return T<=b?{stop:"slow"}:{dir:[D/T/c,F/T/r]}}const v=(y,w,_)=>[y[0]+_*w[0],y[1]+_*w[1]];function g(y){const w=[];let _=a;for(let B=0;B<=E;B++){const C=l(_,y);if(C.stop)return{points:w,stop:C.stop};if(w.push(p(_)),B===E)return{points:w,stop:"limit"};const A=l(v(_,C.dir,m/2),y);if(A.stop)return{points:w,stop:A.stop};const O=v(_,A.dir,m),P=[0,1];for(let k=0;k<2;k++)for(let I=Math.floor(Math.min(_[k],O[k]))+1;I<Math.max(_[k],O[k]);I++)P.push((I-_[k])/(O[k]-_[k]));P.sort((k,I)=>k-I);for(let k=1;k<P.length;k++){const I=l(v(_,A.dir,m*(P[k]+P[k-1])/2),y);if(I.stop)return{points:w,stop:I.stop}}_=O}}const j=g(e.vectorsGT),x=g(e.vectorsPred);let u=null;for(let y=1;y<Math.min(j.points.length,x.points.length);y++){const w=j.points[y],_=x.points[y],B=Math.hypot(w[0]-_[0],w[1]-_[1]);if(B>=f){u={i:y,arc:y*m,gap:B,gt:w,pred:_};break}}return{seed:p(a),step:m,separation:f,maxArc:h,floor:b,gt:j,pred:x,split:u}}function ft(e,a,t){const s=e.points;return s.flatMap((i,c)=>!c||c===s.length-1||i.x<a.xmin||i.x>a.xmax||i.z<a.zmin||i.z>a.zmax?[]:s.slice(c-1,c+2).every(o=>Number.isFinite(o.a)&&Number.isFinite(o.b))?s[c-1][t]<i[t]&&s[c+1][t]<i[t]?[c]:[]:[])}function m0(e,a){if(!a||!["first","second"].includes(a.profile)||!["uncertain","paired"].includes(a.status))throw Error("Invalid crest annotation");const t=e.profiles[a.profile];for(const c of["a","b"])if(!ft(t,e.roi,c).includes(a[c]))throw Error("Invalid crest sample");const s=t.points[a.a],i=t.points[a.b];return{gt:s,pred:i,deltaHeight:i.b-s.a,deltaDistance:i.distance-s.distance}}const pe=(e,a=6)=>e==null?"N/A":Number(e).toPrecision(a);function oe(e,a,t,s,i=1800,c=23,r="#203747"){for(e.fillStyle=r,e.font=`${c}px sans-serif`;e.measureText(String(a)).width>i&&c>12;)e.font=`${--c}px sans-serif`;e.fillText(String(a),t,s)}function Da(e,a,t,s,i,c=20){e.font=`${c}px sans-serif`,e.fillStyle="#3c5365";let r="";for(const o of String(a).split(" ")){const d=r?r+" "+o:o;e.measureText(d).width>i&&r?(e.fillText(r,t,s),s+=c+8,r=o):r=d}return e.fillText(r,t,s),s+c+8}function b0(e,a,t,s,i,c,r,o,d,m){const[f,h]=a.descriptor.shape,E=document.createElement("canvas");E.width=h,E.height=f;const b=E.getContext("2d"),p=b.createImageData(h,f),l=s==="difference",v=l&&t.appearance?.absoluteError,g=l?a.common:a[s==="heightA"?"wetA":"wetB"],j=l?[v?0:-m,m]:d;for(let B=0;B<f;B++)for(let C=0;C<h;C++){const A=B*h+C,O=((f-1-B)*h+C)*4;if(!g[A]){p.data.set([225,230,235,255],O);continue}const P=a.heightB[A]-a.heightA[A],k=l?v?Math.abs(P):P:a[s][A],I=Math.max(0,Math.min(1,(k-j[0])/(j[1]-j[0]))),D=l&&!v?I<.5?[80+350*I,130+230*I,220+70*I]:[255,245-350*(I-.5),255-440*(I-.5)]:[35+195*I,75+155*I,155+70*I];p.data.set([...D,255],O)}b.putImageData(p,0,0),e.imageSmoothingEnabled=!1,e.drawImage(E,i,c,r,o);const{originXYZ:[x,,u],spacing:y}=a.descriptor,w=(B,C)=>[i+(B-x+y/2)/(h*y)*r,c+o-(C-u+y/2)/(f*y)*o];e.strokeStyle="#182b3c",e.lineWidth=2;for(const B of t.profiles?Object.values(t.profiles):[t.profile])B?.points.length&&(e.beginPath(),B.points.forEach((C,A)=>e[A?"lineTo":"moveTo"](...w(C.x,C.z))),e.stroke());if(t.roi){const B=w(t.roi.xmin,t.roi.zmax),C=w(t.roi.xmax,t.roi.zmin);e.save(),e.beginPath(),e.rect(i,c,r,o),e.clip(),e.strokeRect(B[0],B[1],C[0]-B[0],C[1]-B[1]),e.restore()}if(t.probe){const[B,C]=w(t.probe.x,t.probe.z);e.beginPath(),e.moveTo(B-5,C),e.lineTo(B+5,C),e.moveTo(B,C-5),e.lineTo(B,C+5),e.stroke()}const _=e.createLinearGradient(i,0,i+r,0);l&&!v?(_.addColorStop(0,"rgb(80,130,220)"),_.addColorStop(.5,"rgb(255,245,255)"),_.addColorStop(1,"rgb(255,70,35)")):(_.addColorStop(0,"rgb(35,75,155)"),_.addColorStop(1,"rgb(230,230,225)")),e.fillStyle=_,e.fillRect(i,c+o+8,r,9),oe(e,`${pe(j[0])} ... ${pe(j[1])} m`,i,c+o+38,r,21),oe(e,`X ${pe(x,4)} ... ${pe(x+(h-1)*y,4)}; Z ${pe(u,4)} ... ${pe(u+(f-1)*y,4)} m`,i,c+o+62,r,19)}function Ta(e,a,t,s,i,c,r=null,o=null,d="en"){const m=(w,_)=>d==="zh"?w:_,f=a.profile?.points??[],h=f.flatMap(w=>[w.a,w.b]).filter(Number.isFinite);if(oe(e,`${m("剖面：","Section: ")}${o??a.view.plane.toUpperCase()} / ${a.profile?.sampling==="native_columns"?m("原生列","native columns"):a.profile?.sampling==="bilinear_common_four"?m("双线性插值 · 四邻点共同有效","bilinear · all four neighbours valid"):m("无高度剖面","no height profile")}`,t,s,i,24),!h.length){oe(e,m("此截面无有效高度剖面。","No valid height profile for this section."),t,s+50,i);return}const E=r?.[0]??Math.min(...h),b=r?.[1]??Math.max(...h),p=Math.max(b-E,1e-9),l=f[0].distance,v=Math.max(f.at(-1).distance-l,1e-9),g=Math.max(...f.map(w=>Math.abs(w.difference??0)),1e-9),j=t+65,x=s+45,u=i-95,y=c-120;if(a.diagnosis){const w=a.roi?va(a.profile,a.roi):null;if(w){const B=Math.max(l,w[0]),C=Math.min(l+v,w[1]);C>=B&&(e.fillStyle="#deefee",e.fillRect(j+(B-l)/v*u,x,(C-B)/v*u,y+65))}e.strokeStyle="#888",e.beginPath();const _=j-l/v*u;e.moveTo(_,x),e.lineTo(_,x+y+65),e.stroke(),oe(e,m("热点 t=0","hotspot t=0"),_+3,x,100,16)}e.strokeStyle="#798699",e.lineWidth=1,e.beginPath(),e.moveTo(j,x+y+35),e.lineTo(j+u,x+y+35),e.stroke(),oe(e,"0",t+35,x+y+40,25,18);for(const[w,_]of[["a","#2583c5"],["b","#e08b22"],["difference","#9b4778"]]){e.strokeStyle=_,e.lineWidth=2,e.beginPath();let B=!1;for(const C of f){if(C[w]==null){B=!1;continue}const A=j+(C.distance-l)/v*u,O=w==="difference"?x+y+35-C[w]/g*25:x+y*.7-(C[w]-E)/p*y*.7;e[B?"lineTo":"moveTo"](A,O),B=!0}e.stroke()}if(a.crest)for(const[w,_]of[["a","#176693"],["b","#a75400"]]){const B=f[a.crest[w]],C=j+(B.distance-l)/v*u,A=x+y*.7-(B[w]-E)/p*y*.7;e.strokeStyle=_,e.lineWidth=2,e.beginPath(),e.arc(C,A,5,0,2*Math.PI),e.stroke()}oe(e,`${pe(b,4)} m`,t,x+12,65,16),oe(e,`${pe(E,4)} m`,t,x+y*.7,65,16),oe(e,`B-A ±${pe(g,4)} m`,j,x+y+70,u,18),oe(e,`${m("GT 蓝 / B 橙 / B-A 紫；距离 ","GT blue / B orange / B-A purple; distance ")}${pe(l,5)} ... ${pe(l+v,5)} m`,j,s+c+35,u,18)}function p0(e,a,t=null,s="en"){const i=(l,v)=>s==="zh"?l:v,c=document.createElement("canvas");c.width=1920,c.height=e.diagnosis?2650:2220;const r=c.getContext("2d");if(!r)throw Error("Report canvas unavailable");r.fillStyle="#f6f9fb",r.fillRect(0,0,c.width,c.height),r.fillStyle="#123247",r.fillRect(0,0,1920,170),oe(r,`${i("OceanScope / 分析报告 / 帧 ","OceanScope / analysis report / frame ")}${e.view.frame}`,60,68,1800,43,"#fff"),oe(r,`${e.source.runId} · ${e.createdAt}`,60,115,1800,22,"#d0e6ee"),oe(r,`${i("高度：全部96帧 | 速度：","Height: all96 | Velocity: ")}${e.view.selection.subset==="all"?i("全部96帧","all96"):i("固定六帧","fixed six")} / ${e.view.selection.grid==="fine"?i("原生网格","native grid"):i("XZ 2×2均值","XZ 2×2 mean")}${i(" | ROI：当前原生列"," | ROI: current native columns")}`,60,150,1800,22,"#d0e6ee");let o=1/0,d=-1/0,m=1e-9;for(let l=0;l<a.heightA.length;l++){for(const v of["A","B"])a["wet"+v][l]&&(o=Math.min(o,a["height"+v][l]),d=Math.max(d,a["height"+v][l]));a.common[l]&&(m=Math.max(m,Math.abs(a.heightB[l]-a.heightA[l])))}const f=Number.isFinite(o)?[o,d>o?d:o+1]:[0,1];[["heightA",i("A / Ground Truth","A / Ground Truth")],["heightB",i("B / 预测","B / Prediction")],["difference",e.appearance?.absoluteError?i("|B - A| / 绝对高度差","|B - A| / absolute height"):i("B - A / 有符号高度差","B - A / signed height")]].forEach(([l,v],g)=>{oe(r,v,60+g*620,215,580,28),b0(r,a,e,l,60+g*620,240,560,320,f,m)});const h=l=>l==null?null:l*100,E=(l,v)=>`${v}: ${l?.common??0}${i(" 共同列 | MAE "," common columns | MAE ")}${pe(h(l?.mae_m))}${i(" cm | Bias "," cm | bias ")}${pe(h(l?.bias_m))} cm | RMSE ${pe(h(l?.rmse_m))} cm`;if(oe(r,E(e.global,i("当前帧高度","Current frame height")),60,645,1800,25),oe(r,e.local?E(e.local,i("选区高度","Selected ROI height")):i("ROI：未选择","ROI: none selected"),60,682,1800,25),oe(r,e.roi?`ROI X [${e.roi.xmin}, ${e.roi.xmax}] / Z [${e.roi.zmin}, ${e.roi.zmax}] m`:i("灰色格点为缺测，不计为零。","Gray cells are unavailable, never zero."),60,719,1800,21),e.profiles){const l=Object.values(e.profiles).flatMap(g=>g.points.flatMap(j=>[j.a,j.b])).filter(Number.isFinite),v=l.length?[Math.min(...l),Math.max(...l)]:[0,1];Ta(r,{...e,profile:e.profiles.first},60,770,850,300,v,i("热点剖面1","hotspot 1"),s),Ta(r,{...e,profile:e.profiles.second},990,770,850,300,v,i("热点剖面2","hotspot 2"),s)}else Ta(r,e,60,770,990,300,null,null,s);if(t&&!e.diagnosis){const l=Math.min(770/t.width,320/t.height);r.drawImage(t,1110+(770-t.width*l)/2,780,t.width*l,t.height*l),oe(r,i("当前帧三维预览；相机保存在 JSON 中","Current-frame 3D preview; camera retained in JSON"),1110,1130,770,20)}else e.diagnosis||Da(r,`${i("当前帧无三维截图：","No current-frame 3D capture: ")}${e.view.geometryStatus?.reason??i("不可用","unavailable")}${i("。保留原生空间数据和帧身份，不替换为邻帧。",". Native spatial data and frame identity are retained; no neighboring frame substituted.")}`,1120,850,700,25);e.diagnosis?.caseNote&&oe(r,i("案例观察：","Case observation: ")+e.diagnosis.caseNote,60,1155,1800,23),oe(r,i("序列指标 / 明示有效域；完整精度与定义见 CSV + JSON","Sequence metrics / labelled scopes; full precision and definitions in CSV + JSON"),60,1200,1800,29);const b=Math.ceil(e.metrics.length/2);e.metrics.forEach((l,v)=>{const g=v>=b?1:0,j=v%b,x=60+g*930,u=1245+j*35;oe(r,s==="zh"?l.labelZh??l.label:l.label,x,u,620,20),oe(r,`${pe(l.value,8)} ${l.unit}`,x+630,u,260,20)});let p=1840;p=Da(r,s==="zh"&&e.scope==="Native highest-crossing height columns; ROI/profile do not replace all96 global metrics. Units are source convention, not independently calibrated."?"原生最高过零高度列；ROI / 剖面不替代全部96帧的全局指标。单位沿用来源约定，未独立标定。":e.scope,60,p,1800,22),p=Da(r,i("实验来源：模型、相机、划分与单位均为来源声明。检查点哈希未知。已核对原始文件清单身份；未独立审计训练历史或物理标定。","Experiment provenance: model / cameras / split / units are source declarations. Checkpoint hash is unknown. Original-file manifest identities were verified; training history and physical calibration were not independently audited."),60,p+8,1800,21);for(const[l,v]of Object.entries(e.source))oe(r,`${l}: ${v}`,60,p+28,1800,18),p+=28;if(e.evidence){let l=2190;oe(r,`${i("热点 (","Hotspot (")}${e.diagnosis.hotspot.ix},${e.diagnosis.hotspot.iz}) X=${pe(e.probe.x)} Z=${pe(e.probe.z)}${i(" | 方向 "," | direction ")}${e.diagnosis.directionDeg}${i(" 度"," deg")}`,60,l,1800,25),l+=42;for(const[v,g]of[[i("帧","Frame"),e.evidence.frame],["ROI",e.evidence.roi]])g&&(oe(r,`${v}${i(": 共同 ",": common ")}${g.common}${i(" / 候选 "," / candidate ")}${g.candidates} / GT ${g.validGT}${i(" / 预测 "," / prediction ")}${g.validPrediction}${i("; 共同/候选 ","; common/candidate ")}${pe(g.coverageCandidate)}${i("; 共同/GT ","; common/GT ")}${pe(g.coverageGT)}`,60,l,1800,21),l+=30,oe(r,`${v}${i(" 最大 |B-A|="," max |B-A|=")}${pe(g.maximum?.absolute)}${i(" m 位置 "," m at ")}${g.maximum?`X=${pe(g.maximum.x)}, Z=${pe(g.maximum.z)}${i(", 索引=",", index=")}${g.maximum.index}${i(", 并列=",", ties=")}${g.maximum.ties}`:"N/A"}`,60,l,1800,21),l+=32);for(const v of["first","second"])for(const g of["full","roi"]){const j=e.evidence[v][g];j&&(oe(r,`${v==="first"?i("剖面1","Profile 1"):i("剖面2","Profile 2")} / ${g==="full"?i("全线","full line"):i("选区内","within ROI")}: n=${j.samples}${i("; 样本平均 MAE=","; sample mean MAE=")}${pe(j.mae)}${i(" m; Bias="," m; bias=")}${pe(j.bias)}${i(" m; 最大="," m; max=")}${pe(j.maximum?.absolute)}${i(" m（非面积统计）"," m (not area statistics)")}`,60,l,1800,20),l+=27)}}return oe(r,i("使用 JSON 在 OceanScope 恢复此快照。必须匹配本地资源；测量值会重新计算。","Restore this snapshot in OceanScope with its JSON. Local resources must match; measurements are recomputed."),60,c.height-25,1800,20),c}const u0={vectorError:{title:"速度向量误差 E",label:"Velocity vector error map",palette:"absolute-error"},speedDelta:{title:"流速大小差 Δs",label:"Velocity speed delta map",palette:"error"},direction:{title:"三维方向夹角",label:"Velocity direction angle map",palette:"absolute-error"}};function mt(e,a="zh"){const t=[{key:"speedGT",title:"GT 流速",label:"Velocity GT speed map",palette:"ground-truth",role:"gt"},{key:"speedPred",title:"预测流速",label:"Velocity prediction speed map",palette:"ground-truth",role:"pred"},{key:e,...u0[e]}],s={speedGT:"GT speed",speedPred:"Prediction speed",vectorError:"Velocity vector error E",speedDelta:"Speed difference Δs",direction:"3D direction angle"};return a==="zh"?t:t.map(i=>({...i,title:s[i.key]}))}function Ws(e,a,t,s){const i=[e+t,a+s];return[[e,a],i,[i[0]-.32*t+.2*s,i[1]-.32*s-.2*t],i,[i[0]-.32*t-.2*s,i[1]-.32*s+.2*t]]}const fe=(e,a=6)=>Number.isFinite(e)?e.toPrecision(a):"N/A",ts=e=>e==null?"N/A":(100*e).toFixed(2)+"%";function he(e,a,t,s,i=1480,c=21,r="#203747"){for(e.fillStyle=r,e.font=`${c}px sans-serif`;e.measureText(String(a)).width>i&&c>14;)e.font=`${--c}px sans-serif`;e.fillText(a,t,s,i)}function ss(e,a,t,s,i,c,r){e.beginPath(),s===0&&i===0?e.arc(a,t,3,0,2*Math.PI):Ws(0,0,s,i).forEach(([o,d],m)=>e[m===0||m===2?"moveTo":"lineTo"](a+o*c,t+d*r)),e.lineCap="round",e.lineJoin="round",e.lineWidth=4,e.strokeStyle="#fff",e.stroke(),e.lineWidth=1.5,e.strokeStyle="#10273c",e.stroke()}function Vs(e,a,t,s,i,c,r,o="zh"){const d=(D,F)=>o==="zh"?D:F,{key:m,title:f,palette:h,role:E}=a,{viewport:b,zoom:p,ranges:l}=t.appearance,v=l[E?"speed":m],g=Math.min(470/(b.width*s.stepX),340/(b.height*s.stepZ)),j=g*s.stepX,x=g*s.stepZ,u=b.width*j,y=b.height*x,w=202;he(e,f,r,186,470,25);const _=document.createElement("canvas");_.width=b.width,_.height=b.height,ws(_.getContext("2d"),{...s,values:m==="direction"?i.degrees:s[m]},m==="direction"?i.mask:s.commonMask,v,h,b),e.imageSmoothingEnabled=!1,e.drawImage(_,r,w,u,y);const B=D=>r+(D-b.x+.5)*j,C=D=>w+(b.z+b.height-D-.5)*x;e.save(),e.beginPath(),e.rect(r,w,u,y),e.clip();const A=s.roiView;if(!p&&A&&(e.strokeStyle="#9c6900",e.lineWidth=2,e.strokeRect(B(A.x)-j/2,C(A.z+A.height-1)-x/2,A.width*j,A.height*x)),E)for(const D of c){const[F,T]=D[E==="gt"?"gtOffset":"predOffset"];ss(e,B(D.x),C(D.z),F,-T,j,x)}const O=B(t.probe.xIndex),P=C(t.probe.zIndex);O>=r&&O<r+u&&P>=w&&P<w+y&&(e.setLineDash([6,5]),e.beginPath(),e.moveTo(O,w),e.lineTo(O,w+y),e.moveTo(r,P),e.lineTo(r+u,P),e.strokeStyle="#fff",e.lineWidth=3,e.stroke(),e.strokeStyle="#111",e.lineWidth=1,e.stroke()),e.restore();const k=e.createLinearGradient(r,0,r+470,0);for(const D of[0,.5,1])k.addColorStop(D,`rgb(${_s(v[0]+D*(v[1]-v[0]),v,h).join(",")})`);e.fillStyle=k,e.fillRect(r,562,470,11);const I=m==="direction"?"°":" m/s";he(e,`${fe(v[0],4)}${m==="speedDelta"?" / 0":""} / ${fe(v[1],4)}${I}${E?d(" · 共用色标"," · Shared scale"):""}`,r,599,470),he(e,m==="direction"?d("X → · Z ↑ · 棋盘为夹角不可判定","X → · Z ↑ · Checkerboard: angle unavailable"):d("X → · Z ↑ · 棋盘为不在共同有效域","X → · Z ↑ · Checkerboard: outside common domain"),r,629,470,19),E&&c.length&&t.arrows.referenceSpeed&&(ss(e,r+8,654,t.arrows.referenceGridLength,0,j,x),he(e,`${d("参考 ","Reference ")}${fe(t.arrows.referenceSpeed,4)} m/s · ${c.length}${d(" 个配对点"," paired points")}`,r,683,470,19))}function h0(e,a,t,s,i="zh"){const c=(g,j)=>i==="zh"?g:j,r=document.createElement("canvas");r.width=1560,r.height=1170;const o=r.getContext("2d");if(!o)throw Error("Velocity report canvas unavailable");o.fillStyle="#f6f9fb",o.fillRect(0,0,1560,1170),o.fillStyle="#123247",o.fillRect(0,0,1560,142);const{plane:d,domain:m,roi:f,summary:h,angleThreshold:E,samples:b,source:p,surfaceCase:l}=e;he(o,`${c("OceanScope · 速度诊断 · 第 ","OceanScope · Velocity diagnosis · frame ")}${d.frame}${c(" 帧"," ")}`,40,60,1480,38,"#fff"),he(o,`${c("XZ · Y 索引 ","XZ · Y index ")}${d.yIndex}${c(" · 世界 Y "," · World Y ")}${fe(d.yWorld,9)} m · ${m.id}`,40,100,1480,24,"#d0e6ee"),he(o,`${p.caseId} · ${l.surfaceCaseId} · ${e.createdAt}`,40,128,1480,19,"#d0e6ee"),mt(e.appearance.mode,i).forEach((g,j)=>Vs(o,g,e,a,t,s?.points??[],40+505*j,i)),he(o,`ROI X [${fe(f.xmin)}, ${fe(f.xmax)}] · Z [${fe(f.zmin)}, ${fe(f.zmax)}] m`,40,724),he(o,`${c("水面热点 X ","Surface hotspot X ")}${fe(l.hotspotXZ.x)} · Z ${fe(l.hotspotXZ.z)} · ${l.caseNote.slice(0,150)}`,40,757);const v=b.probe;he(o,`${c("探针 XYZ (","Probe XYZ (")}${v.xyz.map(g=>fe(g)).join(", ")}) · GT ${fe(v.speedGT)}${c(" · 预测 "," · Prediction ")}${fe(v.speedPred)} · E ${fe(v.E)} · Δs ${fe(v.speedDelta)}${c(" · 夹角 "," · Angle ")}${fe(v.angleDegrees)}°`,40,790);for(const[g,j,x]of[["whole",c("整切片","Whole slice"),835],["roi","ROI",906]]){const u=h[g],y=h.direction[g];he(o,`${j}${c(" · 共同 "," · Common ")}${u.counts.common}${c(" / 候选 "," / Candidate ")}${u.counts.candidate}${c(" · 共同/候选 "," · Common/candidate ")}${ts(u.coverageCandidate)}${c(" · 共同/GT "," · Common/GT ")}${ts(u.coverageGT)}${c(" · 平均 E "," · Mean E ")}${fe(u.meanE)}${c(" · 平均 Δs "," · Mean Δs ")}${fe(u.meanSpeedDelta)}`,40,x),he(o,`${c("最大 E ","Maximum E ")}${fe(u.maximum?.value)}${c(" · 平均三维夹角 "," · Mean 3D angle ")}${fe(y.meanDegrees)}${c("° · 夹角有效 ","° · Angle valid ")}${y.count}${c(" · 低速排除 "," · Low-speed excluded ")}${y.excludedLowSpeedCount??"N/A"}`,40,x+30)}return he(o,`${c("方向阈值 τ = ","Direction threshold τ = ")}${E.tau??c("停用","Disabled")}${c(" · 箭头为 XZ 投影 · 速度 m/s、坐标 m 均沿用来源声明"," · Arrows: XZ projections · Source units: velocity m/s, coordinates m")}`,40,991),he(o,c("当前 Y 层诊断，非整帧体积评分；物理与时间尺度、向量基底尚未独立标定。","Current Y-layer diagnosis, not a volume score; physical/time scales and vector basis are not independently calibrated."),40,1025,1480,19),he(o,m.definition.rule??m.id,40,1096,1480,17),he(o,`${c("代码 ","Code ")}${p.codeRevision}${c(" · 资源 SHA-256 "," · Resource SHA-256 ")}${p.resource.packedSha256}`,40,1064,1480,18),he(o,c("使用配套 JSON 恢复视图。恢复时核验资源并重算。CSV 保留整层原生格点。","Restore with the companion JSON; resources are verified and metrics recomputed. CSV retains the whole native layer."),40,1128,1480,19),r}function g0(e,a,t="zh"){const s=(h,E)=>t==="zh"?h:E,i=document.createElement("canvas");i.width=1560,i.height=1940;const c=i.getContext("2d");if(!c)throw Error("Velocity comparison canvas unavailable");const{scope:r,result:o,source:d,view:m}=e;c.fillStyle="#f6f9fb",c.fillRect(0,0,i.width,i.height),c.fillStyle="#123247",c.fillRect(0,0,i.width,148),he(c,s("OceanScope · Best_1027 三帧速度对照","OceanScope · Best_1027 three-frame velocity comparison"),40,56,1480,38,"#fff"),he(c,`XZ · Y=${r.plane.yIndex} · ROI X [${fe(r.roi.xmin)}, ${fe(r.roi.xmax)}] Z [${fe(r.roi.zmin)}, ${fe(r.roi.zmax)}] m · τ=${r.tau} m/s`,40,99,1480,22,"#d0e6ee"),he(c,`${s("三帧共同有效 ","Common valid across three frames ")}${o.shared}/${o.roiCandidates}${s(" · 夹角共同有效 "," · Common angle-valid ")}${o.sharedAngles}${s(" · 共用色标和箭头比例"," · Shared colour and arrow scales")}`,40,130,1480,21,"#d0e6ee");const f={xIndex:m.probe[0],zIndex:m.probe[1]};return a.rows.forEach(({frame:h,slice:E,angles:b,arrows:p,summary:l},v)=>{const g=155+v*570;he(c,`${s("帧 ","Frame ")}${h}${s(" · 本帧 ROI "," · Frame ROI ")}${l.nativeRoi}/${o.roiCandidates}${s(" · 共同样本平均 E "," · Common-sample mean E ")}${fe(l.meanE)} m/s · Δs ${fe(l.meanDelta)}${s(" m/s · 夹角 "," m/s · Angle ")}${fe(l.meanAngle)}°`,40,g+25,1480,25),c.save(),c.translate(0,g-129);const j={appearance:{viewport:a.view,zoom:!0,ranges:o.ranges},probe:f,arrows:p};mt(m.mode,t).forEach((x,u)=>Vs(c,x,j,E,b,m.arrows?p.points:[],40+505*u,t)),c.restore()}),he(c,`${s("探针原生 XZ 索引 (","Probe native XZ index (")}${m.probe.join(", ")}${s(") · 棋盘表示未纳入对应共同有效域 · 单位沿用来源声明",") · Checkerboard: outside common support · Source-declared units")}`,40,1890),he(c,`${s("代码 ","Code ")}${d.codeRevision}${s(" · 逐帧资源身份和恢复设置见配套 JSON · "," · Per-frame resource identities and restore settings: companion JSON ·")}${e.createdAt}`,40,1920,1480,18),i}function y0(e,a){const t=String(e?.message??e??""),s=(i,c)=>a?i:c;return/AbortError|cancelled|canceled/i.test(e?.name+" "+t)?s("操作已取消。当前文件可以稍后重新打开。","Operation cancelled. You can reopen the file later."):/too large|^size$/i.test(t)?s("文件过大。请选择本工具导出的分析 JSON；完整报告上限1 MB，场比较方案上限2 MB。","File too large. Choose an exported analysis JSON: reports up to1 MB, field views up to2 MB."):/Invalid analysis JSON|^json$|JSON|Unexpected token|Unexpected end/i.test(t)&&!/(format|Unsupported)/i.test(t)?s("JSON内容不完整或格式有误。请重新选择原始导出文件，或粘贴文件全文。","Invalid or incomplete JSON. Select the original exported file or paste its entire contents."):/Unsupported|^format$/.test(t)?s("这个文件不能恢复分析。请选择完整分析报告、场比较方案或序列选择 JSON；PNG、CSV和数据说明文件只能查看。","This file cannot restore analysis. Choose an analysis-report, field-view or sequence-selection JSON; images, CSV and data-info files are for viewing."):/checksum|identity|mismatch|does not match|^source$/i.test(t)?s("数据或报告身份不匹配。请确认数据组合，使用同一版本导出的报告及配套资源；资源损坏时重新复制并校验，勿修改文件中的身份信息。","Data or report identity differs. Confirm the dataset and use its matching report/resources. Recopy and verify damaged resources; do not edit identity fields."):/404|unavailable|failed to fetch|network|^dataset$|No spatial resource/i.test(t)?s("数据下载未完成。请检查网络并重试；无三维预览的帧仍可查看高度分析。","The data download did not complete. Check your connection and retry. Frames without 3D previews still support height analysis."):/Wait|not ready|loading|Timed out/i.test(t)?s("数据尚未准备好。等待当前组合加载完成后重试；持续失败时检查本页的数据资源提示。","Data is not ready. Wait for the current dataset to load and retry; if it persists, check this page’s resource message."):/View changed/i.test(t)?s("恢复期间视图已改变，已停止应用旧请求。请在当前视图重新打开报告。","The view changed during restoration. Reopen the report from the current view."):s("操作未完成。确认文件来自当前工具、帧号和参数有效，然后重试；具体原因可查看技术详情。","The operation did not complete. Confirm the file comes from this tool and its frame/settings are valid, then retry; technical details are below.")}function Ue({error:e,zh:a,resource:t,onRetry:s}){return e?n.createElement("div",{"data-os-loc":"src/AnalysisError.jsx:18:9",className:"analysis-error",role:"alert"},n.createElement("strong",{"data-os-loc":"src/AnalysisError.jsx:18:54"},a?"需要处理的问题":"Action needed"),t&&n.createElement("p",{"data-os-loc":"src/AnalysisError.jsx:18:112"},t),n.createElement("p",{"data-os-loc":"src/AnalysisError.jsx:18:130"},y0(e,a)),s&&n.createElement("button",{"data-os-loc":"src/AnalysisError.jsx:18:179",type:"button",onClick:s},a?"重新加载资源":"Reload resources"),n.createElement("details",{"data-os-loc":"src/AnalysisError.jsx:18:261"},n.createElement("summary",{"data-os-loc":"src/AnalysisError.jsx:18:270"},a?"技术详情":"Technical details"),n.createElement("code",{"data-os-loc":"src/AnalysisError.jsx:18:320"},String(e?.message??e)))):null}function x0({controlRef:e,ready:a,capture:t,prepareImport:s,applyImport:i,zh:c,unifiedRestore:r=!1}){const[o,d]=S.useState(null),[m,f]=S.useState(""),[h,E]=S.useState(""),[b,p]=S.useState(null),l=S.useRef(null),v=S.useRef(null),g=o?.language===c?o:null;function j(){l.current&&(l.current.abort(),l.current=null,f(c?"恢复已取消，保留新的操作。":"Restore cancelled; newer action retained."))}S.useImperativeHandle(e,()=>({cancel:j,clearSnapshot:()=>d(null),restoreText:(w,_)=>u({size:new TextEncoder().encode(w).length,text:async()=>w},_,!0)})),S.useEffect(()=>()=>l.current?.abort(),[]),S.useEffect(()=>{d(null),f("")},[c]),S.useEffect(()=>{const w=Object.values(g?.files??{}).map(_=>_.href).filter(_=>_?.startsWith("blob:"));return()=>{for(const _ of w)URL.revokeObjectURL(_)}},[g?.files]);function x(){try{const w=t(),_=Br(w.record,w.canvas?.toDataURL?.("image/png")??null);d({...w,language:c,previewUrl:_.png?.href??null,files:_}),p(null),f(c?"已生成当前快照，三种导出使用同一报告。":"Snapshot created; all three downloads use this report.")}catch(w){p(w)}}async function u(w,_,B=!1){if(j(),!w)return;const C=new AbortController,A=()=>C.abort();_?.addEventListener("abort",A,{once:!0}),_?.aborted&&C.abort(),l.current=C,p(null),f(c?"正在核验报告与资源…":"Verifying report and resources…");try{if(w.size>1024*1024)throw Error("Report file too large");const O=await w.text();C.signal.throwIfAborted();const P=await s(O,C.signal);C.signal.throwIfAborted(),await i(P,C.signal),C.signal.throwIfAborted(),d(null),f(c?"已恢复帧、截面、选区与可用相机；数值来自重新核验的资源。":"Restored frame, section, ROI and available camera; values recomputed from verified resources.")}catch(O){if(C.signal.aborted||(p(O),f("")),B)throw O}finally{_?.removeEventListener("abort",A),l.current===C&&(l.current=null)}}const y={png:c?"下载汇报图片 PNG":"Download presentation PNG",csv:c?"下载数据表 CSV":"Download data table CSV",json:c?"保存可恢复分析 JSON":"Save restorable analysis JSON"};return n.createElement("section",{"data-os-loc":"src/field/ProtocolReportControls.jsx:25:9",className:"protocol-report","aria-label":"Protocol evidence report"},n.createElement("h3",{"data-os-loc":"src/field/ProtocolReportControls.jsx:25:84"},c?"保存与恢复分析":"Save and restore analysis"),n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:26:3"},c?"先确认当前帧、选区、截面和相机，再生成报告。三种下载使用同一快照；后续修改视图时，请更新快照后再导出。":"Confirm frame, ROI, section and camera, then create a report. All downloads use one snapshot; update it before exporting later view changes."),n.createElement("div",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:3",className:"reference-controls"},n.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:39",disabled:!a,onClick:x},g?c?"更新报告快照":"Update report snapshot":c?"生成当前报告":"Create current report"),Object.entries(y).map(([w,_])=>g?.files[w]?n.createElement("a",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:240",key:w,className:"report-download",href:g.files[w].href,download:g.files[w].name,onClick:()=>f(c?"下载已交给浏览器，请在下载列表确认文件。也可展开“下载帮助与 JSON 文本”复制完整分析。":"Download handed to the browser. Check its download list; Download help and JSON text also provides the complete analysis for copying.")},_):n.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:27:573",key:w,disabled:!0},_))),g&&n.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:12"},n.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:21"},c?"下载帮助与 JSON 文本":"Download help and JSON text"),n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:90"},c?"文件由浏览器保存，位置取决于浏览器设置。可在浏览器下载列表中找到文件。继续分析也可选中下方全部 JSON，按 Ctrl+C（Mac：⌘C）复制，再粘贴到顶部“恢复分析”；长期保留请下载 JSON 文件。":"Your browser saves the files according to its download settings. Find them in its download list. To resume without choosing a file, select all JSON below, copy with Ctrl+C (Mac: ⌘C), then paste into Restore analysis. Download the JSON file for long-term storage."),n.createElement("label",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:470"},c?"完整分析 JSON":"Complete analysis JSON",n.createElement("textarea",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:518",ref:v,"aria-label":"Report JSON for copying",rows:"6",readOnly:!0,spellCheck:!1,value:g.files.json.content})),n.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:28:662",type:"button",onClick:()=>{v.current?.focus(),v.current?.select(),f(c?"已选中完整 JSON。按 Ctrl+C（Mac：⌘C）复制。":"Complete JSON selected. Press Ctrl+C (Mac: ⌘C) to copy.")}},c?"选中全部 JSON":"Select all JSON")),!g&&n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:29:13"},c?"生成报告后即可下载。PNG用于展示，CSV保留数值，JSON用于继续同一次分析。":"Create a report to enable downloads. PNG is for presentation, CSV for numbers, and JSON for resuming the analysis."),g&&n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:30:12"},c?"导出快照 · 帧":"Export snapshot · frame"," ",g.record.view.frame," · ",g.record.createdAt," · ",g.record.view.geometry?c?"包含已核验三维":"Verified 3D included":c?"二维证据":"2D evidence"," · ",g.record.view.geometryStatus?.reason," · ",c?"后续操作不会改变此报告；更新快照可保存新状态。":"Later actions do not change this report; update the snapshot to save the new state."),g?.previewUrl&&n.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:24"},n.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:33"},c?"预览汇报图片":"Preview presentation image"),n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:94"},c?"预览与下载使用同一报告。如果浏览器未保存PNG，可在此图片上使用“图片另存为”。":"Preview and download use the same report. If the browser does not save the PNG, use Save image as on this preview."),n.createElement("img",{"data-os-loc":"src/field/ProtocolReportControls.jsx:31:265",src:g.previewUrl,alt:c?`帧 ${g.record.view.frame} 汇报图片`:`Frame ${g.record.view.frame} report image`,style:{display:"block",width:"100%",height:"auto"}})),r?n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:32:19"},n.createElement("a",{"data-os-loc":"src/field/ProtocolReportControls.jsx:32:22",href:"#restore-analysis",onClick:()=>{const w=document.getElementById("restore-analysis");w&&(w.open=!0)}},c?"恢复分析：选择文件或粘贴 JSON":"Restore analysis: choose a file or paste JSON")):n.createElement(n.Fragment,null,n.createElement("label",{"data-os-loc":"src/field/ProtocolReportControls.jsx:33:3"},c?"导入分析报告 JSON":"Import analysis report JSON"," ",n.createElement("input",{"data-os-loc":"src/field/ProtocolReportControls.jsx:33:59",type:"file",accept:"application/json,.json","aria-label":"Restore protocol report",onChange:w=>{u(w.target.files?.[0]),w.target.value=""}})),n.createElement("details",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:3"},n.createElement("summary",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:12"},c?"粘贴报告 JSON":"Paste report JSON"),n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:67"},c?"文件选择不可用时，可粘贴报告内容，使用相同的核验与恢复流程。":"If file selection is unavailable, paste the report content for the same verified restoration."),n.createElement("textarea",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:207","aria-label":"Protocol report JSON text",rows:"6",value:h,onChange:w=>{j(),E(w.target.value)}}),n.createElement("button",{"data-os-loc":"src/field/ProtocolReportControls.jsx:34:332",disabled:!h.trim(),onClick:()=>u({size:new TextEncoder().encode(h).length,text:async()=>h})},c?"恢复粘贴的报告":"Restore pasted report"))),n.createElement(Ue,{error:b,zh:c}),n.createElement("p",{"data-os-loc":"src/field/ProtocolReportControls.jsx:35:45",role:"status"},m))}const zs=["xmin","xmax","zmin","zmax"];function v0(e){return Number(e.toFixed(4)).toString()}function $a(e){return Object.fromEntries(zs.map(a=>[a,v0(e[a])]))}function E0(e,a,t){const s={},i={};for(const c of zs)!e[c]?.trim()||!Number.isFinite(Number(e[c]))?i[c]="number":s[c]=t[c]?Number(e[c]):a[c];for(const[c,r]of[["xmin","xmax"],["zmin","zmax"]])!i[c]&&!i[r]&&s[c]>s[r]&&(i[c]="order",i[r]="order");return{values:s,errors:i,valid:Object.keys(i).length===0}}function Ja({profile:e,roi:a,limits:t,label:s,errorLimit:i}){const{language:c}=ce(),r=(g,j)=>c==="zh"?g:j,o=e.points,d=o[0].distance,m=o.at(-1).distance,f=Math.max(m-d,1e-9),h=Math.max(t[1]-t[0],1e-9),E=i??Math.max(1e-9,...o.map(g=>Math.abs(g.difference??0))),b=g=>45+(g-d)/f*620,p=g=>170-(g-t[0])/h*135,l=a?va(e,a):null;function v(g){let j=!1;return o.map(x=>{if(!Number.isFinite(x[g]))return j=!1,"";const u=j?"L":"M";return j=!0,`${u}${b(x.distance)},${g==="difference"?245-x[g]/E*38:p(x[g])}`}).join(" ")}return n.createElement("figure",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:11:9","data-profile-axis":[d,m,45,665].join(",")},n.createElement("figcaption",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:11:62"},s," · ",e.sampling==="native_columns"?r("原生列","Native columns"):r("插值诊断 · 四邻点共同有效","Interpolated diagnosis · all four neighbours valid")),n.createElement("svg",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:11:233",viewBox:"0 0 710 300",role:"img","aria-label":s},l&&n.createElement("rect",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:12:13",x:b(Math.max(d,l[0])),y:"25",width:Math.max(0,b(Math.min(m,l[1]))-b(Math.max(d,l[0]))),height:"255",fill:"#4ba8ad",opacity:".13"}),n.createElement("line",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:2",x1:b(0),x2:b(0),y1:"25",y2:"280",stroke:"#666",strokeDasharray:"4 3"}),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:82",x:b(0)+4,y:"20"},r("热点 0","Hotspot 0")),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:136",x:"3",y:"40"},t[1].toFixed(3)),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:184",x:"3",y:"175"},t[0].toFixed(3)),n.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:233",d:v("a"),fill:"none",stroke:"#2583c5",strokeWidth:"2"}),n.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:299",d:v("b"),fill:"none",stroke:"#e08b22",strokeWidth:"2"}),n.createElement("line",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:365",x1:"45",x2:"665",y1:"245",y2:"245",stroke:"#888"}),n.createElement("path",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:421",d:v("difference"),fill:"none",stroke:"#9b4778"}),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:480",x:"2",y:"245"},"B−A"),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:510",x:"45",y:"298"},d.toFixed(3)," m"),n.createElement("text",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:555",x:"540",y:"298"},m.toFixed(3)," m")),!o.some(g=>g.a!==null)&&n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:13:633"},r("此剖面无共同有效高度。","No common valid height on this profile.")))}const sn=e=>e==null?"N/A":(e*100).toFixed(4)+" cm";function is({value:e,label:a}){const{language:t}=ce(),s=(i,c)=>t==="zh"?i:c;return n.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:18:8",className:"diagnostic-evidence","aria-label":a},n.createElement("strong",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:18:64"},a),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:18:88"},"MAE ",sn(e.mae)," · Bias ",sn(e.bias)," · RMSE ",sn(e.rmse)),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:18:174"},s("候选原生列 ","Candidate native columns "),e.candidates,s(" / GT有效 "," / GT valid "),e.validGT,s(" / 预测有效 "," / Prediction valid "),e.validPrediction,s(" / 共同有效 "," / Common valid "),e.common),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:18:394"},s("共同/候选 ","Common/candidate "),e.coverageCandidate==null?"N/A":(e.coverageCandidate*100).toFixed(2)+"%",s(" · 共同/GT "," · Common/GT "),e.coverageGT==null?"N/A":(e.coverageGT*100).toFixed(2)+"%"),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:18:616"},s("最大绝对误差 ","Maximum absolute error "),sn(e.maximum?.absolute)," ",e.maximum&&n.createElement(n.Fragment,null,s("· 有符号 ","· Signed "),sn(e.maximum.signed),s(" · 原生索引 ("," · Native index ("),e.maximum.ix,",",e.maximum.iz,") · X ",e.maximum.x.toFixed(6)," / Z ",e.maximum.z.toFixed(6),s(" · 并列 "," · Ties "),e.maximum.ties,s("（按索引取首点）"," (first point by index)"))))}function cs({value:e,label:a}){const{language:t}=ce(),s=(i,c)=>t==="zh"?i:c;return n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:21:8","aria-label":a},a,s(" · 有效样本 "," · Valid samples "),e.samples," · MAE ",sn(e.mae)," · Bias ",sn(e.bias),s(" · 最大 "," · Maximum "),sn(e.maximum?.absolute))}function _0({spatial:e,diagnosis:a,roi:t,onDirection:s,onRegion:i,mode:c,setMode:r,onExit:o,onNote:d}){const{language:m}=ce(),f=(x,u)=>m==="zh"?x:u,[h,E]=S.useState(""),b=S.useMemo(()=>a?ot(e,a):null,[e,a]),p=S.useMemo(()=>zn(e),[e]),l=S.useMemo(()=>t?zn(e,t):null,[e,t]),v=b?[...b.first.points,...b.second.points].flatMap(x=>[x.a,x.b]).filter(Number.isFinite):[],g=v.length?[Math.min(...v),Math.max(...v)]:[0,1];function j(x){x.preventDefault();const u=new FormData(x.currentTarget),y=Number(u.get("cx")),w=Number(u.get("cz")),_=Number(u.get("width")),B=Number(u.get("length"));if(![y,w,_,B].every(Number.isFinite)||_<e.descriptor.spacing||B<e.descriptor.spacing){E(f("尺寸至少为一个网格间距，请填写有限数字。","Enter finite numbers; each dimension must span at least one grid spacing."));return}const C={xmin:y-_/2,xmax:y+_/2,zmin:w-B/2,zmax:w+B/2};if(ba(C,xa(e)).clipped){E(f("选区超出数据范围，请缩小尺寸或移动中心。","The ROI exceeds the data bounds. Reduce its size or move its centre."));return}i(C),E("")}return n.createElement("section",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:29:9","aria-label":"Hotspot diagnosis"},n.createElement(is,{value:p,label:f("全域诊断 · 原生列","Full-domain diagnosis · native columns")}),l&&n.createElement(is,{value:l,label:f("ROI诊断 · 原生列","ROI diagnosis · native columns")}),n.createElement("h3",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:29:252"},f("热点与双剖面 · 最高过零高度","Hotspot and paired profiles · highest zero-crossing height")),n.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:29:344",className:"hotspot-actions"},n.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:29:377","aria-pressed":c==="select",onClick:()=>r("select")},f("定位热点","Locate hotspot")),n.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:29:485","aria-pressed":c==="adjust",onClick:()=>r("adjust")},f("调整选区","Adjust ROI"))),a?n.createElement(n.Fragment,null,n.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:30:137"},f("案例观察（120字以内，非自动归因）","Case observation (up to 120 characters; no automatic attribution)"),n.createElement("textarea",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:30:237","aria-label":"Diagnosis case note",maxLength:"120",value:a.caseNote??"",onChange:x=>d(x.target.value)})),n.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:30:373",onClick:o},f("退出热点诊断","Exit hotspot diagnosis")),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:30:445","aria-label":"Hotspot coordinates"},f("帧 ","Frame "),a.frame,f(" · 索引 ("," · Index ("),a.hotspot.ix,", ",a.hotspot.iz,") · X ",a.hotspot.x.toFixed(6)," / Z ",a.hotspot.z.toFixed(6)," m"),n.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:30:670"},f("剖面方向（场景轴 / 手动方向）","Profile direction (scene axes / manual angle)"),n.createElement("input",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:30:748","aria-label":"Hotspot direction",type:"number",min:"0",max:"180",step:"1",value:a.directionDeg,onChange:x=>{const u=x.target.valueAsNumber;Number.isFinite(u)&&u>=0&&u<=180&&s(u%180)}})),n.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:30:969",onClick:()=>s(0)},f("回到场景轴","Reset to scene axes"))):n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:30:14"},f("在任意高度图点击共同有效点，暂停并创建热点选区。","Click a common valid point on any height map to pause and create a hotspot ROI.")),t&&n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:31:10","aria-label":"Hotspot ROI summary"},f("ROI中心 X ","ROI centre X "),((t.xmin+t.xmax)/2).toFixed(4)," / Z ",((t.zmin+t.zmax)/2).toFixed(4),f(" · 宽 "," · Width "),(t.xmax-t.xmin).toFixed(4),f(" / 长 "," / Length "),(t.zmax-t.zmin).toFixed(4),f(" m（来源约定，未独立标定）"," m (source convention; not independently calibrated)")),n.createElement("form",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:31:347",key:JSON.stringify(t),onSubmit:j,className:"hotspot-roi-edit"},[["cx",f("中心X","Centre X"),(t.xmin+t.xmax)/2],["cz",f("中心Z","Centre Z"),(t.zmin+t.zmax)/2],["width",f("X宽","X width"),t.xmax-t.xmin],["length",f("Z长","Z length"),t.zmax-t.zmin]].map(([x,u,y])=>n.createElement("label",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:31:645",key:x},u,n.createElement("input",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:31:670",required:!0,name:x,"aria-label":"Hotspot ROI "+x,type:"number",step:"any",defaultValue:y}))),n.createElement("button",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:31:788"},f("应用中心与尺寸","Apply centre and dimensions")))),h&&n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:32:14",role:"alert"},h),a&&t&&(a.hotspot.x<t.xmin||a.hotspot.x>t.xmax||a.hotspot.z<t.zmin||a.hotspot.z>t.zmax)&&n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:32:185"},f("热点在选区外；剖面仍锚定原热点。","The hotspot is outside the ROI; profiles remain anchored to the original hotspot.")),b&&n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:33:15"},f("蓝色GT / 橙色预测；紫色B−A。横轴为距热点的有符号距离；阴影为ROI交段，缺测断线。两图共享高度范围。","GT blue / prediction orange / B−A purple. Signed distance from the hotspot; shading marks the ROI intersection. Missing samples break the line. Both plots share a height range.")),n.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:33:262",className:"hotspot-profiles"},n.createElement(Ja,{profile:b.first,roi:t,limits:g,label:f("热点剖面1","Hotspot profile 1")}),n.createElement(Ja,{profile:b.second,roi:t,limits:g,label:f("热点剖面2","Hotspot profile 2")})),[["first",f("剖面1","Profile 1")],["second",f("剖面2","Profile 2")]].map(([x,u])=>{const y=Ya(b[x],t);return n.createElement("div",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:33:635",key:x},n.createElement(cs,{value:y.full,label:u+f("全线 · 样本等权"," · Full line · equal sample weights")}),y.roi&&n.createElement(cs,{value:y.roi,label:u+f("选区内 · 样本等权"," · Within ROI · equal sample weights")}))}),n.createElement("p",{"data-os-loc":"src/field/HotspotDiagnosisPanel.jsx:33:863"},f("剖面统计按曲线样本等权，不等同原生列面积统计。可到“报告与恢复”生成含双剖面的PNG、CSV和可恢复JSON。","Profile statistics weight curve samples equally; they are not native-column area statistics. Open Reports & restore to generate PNG, CSV and restorable JSON with both profiles."))))}const rs={schema:"oceanscope.half-sample.v1",formula:"A*cos(2*pi*(x-c)/wavelength)",wavelength:2,amplitude:1,referenceCentre:0,shift:.0125,dx:.025,first:-40,last:40,units:"scene"};function os(){const e=rs,a=(m,f)=>e.amplitude*Math.cos(2*Math.PI*(m-f)/e.wavelength),t=Array.from({length:e.last-e.first+1},(m,f)=>{const h=(e.first+f)*e.dx;return{x:h,z:0,a:a(h,e.referenceCentre),b:a(h,e.referenceCentre+e.shift)}}),s={xmin:-1,xmax:1,zmin:0,zmax:0},i=m=>ft({points:t},s,m).map(f=>t[f].x),c=t.find(m=>m.x===i("a")[0]),r=Math.max(...t.map(m=>m.b)),o=t.filter(m=>m.b===r),d={referenceX:c.x,referenceHeight:c.a,strictShiftedCandidates:i("b"),highestSampleXs:o.map(m=>m.x),highestSampleHeight:r,shiftErrorsIfEndpointChosen:o.map(m=>m.x-c.x-e.shift),heightError:r-e.amplitude,midpointEstimate:(o[0].x+o.at(-1).x)/2};return{points:t,report:{recipe:rs,readings:d}}}const ha=[1049,1050,1051,1052,1053,1054],Xs="oceanscope.six-frame-profile.v1",Zs=e=>({...Bn(e),indexSha256:ua.indexSha256});function w0(e,a){if(e?.schema!==Xs||!ha.includes(e.selectedFrame)||JSON.stringify(e.frames)!==JSON.stringify(ha)||Object.entries(Zs(a)).some(([t,s])=>e.source?.[t]!==s))throw Error("Six-frame report source or frame mismatch");return e.selection}function Gs(e,a,t){return{schema:Xs,source:Zs(e),frames:ha,selectedFrame:t,selection:a.selection,units:"source length convention",difference:"prediction minus GT",rows:a.rows.map(({frameId:s,profile:i,centre:c,stats:r})=>({frameId:s,centre:c,roi:r,profile:i}))}}function jn(e,a,t){a.startsWith("image/svg+xml")&&(t=t.replace(/ data-os-loc="[^"]*"/g,""));const s=URL.createObjectURL(new Blob([t],{type:a})),i=document.createElement("a");i.href=s,i.download=e,i.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function S0({zh:e}){const[a,t]=S.useState(null),[s,i]=S.useState(""),c=S.useRef(null),r=(b,p)=>e?b:p;async function o(b){if(b)try{const p=os(),l=JSON.parse(await b.text());if(JSON.stringify(l)!==JSON.stringify(p.report))throw Error();t(p),i(r("已重新采样并核对读数","Resampled and verified"))}catch{i(r("文件与半格对照不匹配","File does not match the half-step control"))}}const d=a?.report.readings,m=a?.report.recipe,f=b=>63+(b+.05)*4800,h=b=>180-(b-.999)*24e3;function E(b){const p=[["quantity","truth","sample_readout","signed_error","interpretation"],["peak_x_left",m.shift,d.highestSampleXs[0],d.shiftErrorsIfEndpointChosen[0],"tied endpoint"],["peak_x_right",m.shift,d.highestSampleXs[1],d.shiftErrorsIfEndpointChosen[1],"tied endpoint"],["peak_height",m.amplitude,d.highestSampleHeight,d.heightError,"sample maximum"],["peak_x_midpoint",m.shift,d.midpointEstimate,d.midpointEstimate-m.shift,"symmetry estimate only"],["strict_shifted_crest_count","",d.strictShiftedCandidates.length,"","strictly higher than both neighbours"]].map(l=>l.join(",")).join(`
`);jn("half-sample."+b,{json:"application/json",csv:"text/csv",svg:"image/svg+xml"}[b],b==="json"?JSON.stringify(a.report,null,2):b==="csv"?p:c.current.outerHTML)}return n.createElement("section",{"data-os-loc":"src/field/HalfSample.jsx:26:9","aria-label":"Half-sample crest"},n.createElement("h3",{"data-os-loc":"src/field/HalfSample.jsx:26:49"},r("半格平移：峰顶落在哪里？","Half-step shift: where is the crest?")),n.createElement("button",{"data-os-loc":"src/field/HalfSample.jsx:27:2",onClick:()=>{t(os()),i("")}},r("查看半格平移","Inspect half-step shift"))," ",n.createElement("label",{"data-os-loc":"src/field/HalfSample.jsx:27:120"},r("恢复半格 JSON","Restore half-step JSON")," ",n.createElement("input",{"data-os-loc":"src/field/HalfSample.jsx:27:169",type:"file",accept:".json","aria-label":"Restore half-step JSON",onChange:b=>{o(b.target.files[0]),b.target.value=""}})),n.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:27:310",role:"status"},s),a&&n.createElement(n.Fragment,null,n.createElement("svg",{"data-os-loc":"src/field/HalfSample.jsx:28:11",ref:c,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 720 350",role:"img","aria-label":"Half-step crest detail",style:{width:"100%",maxWidth:900},fontFamily:"sans-serif",fill:"#18374b"},n.createElement("rect",{"data-os-loc":"src/field/HalfSample.jsx:29:2",width:"720",height:"350",fill:"#f7fbfd"}),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:29:49",x:"24",y:"35",fontSize:"22"},"半格平移 / Half-step crest"),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:29:112",x:"24",y:"61",fontSize:"15"},"Δx = 0.025   ·   c: 0 → 0.0125   ·   A = 1   ·   scene units"),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:30:2",x:"24",y:"99",fontSize:"14"},"峰顶放大 / Crest detail"),[1,.999,.997].map(b=>n.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:31:24",key:b},n.createElement("path",{"data-os-loc":"src/field/HalfSample.jsx:31:35",d:"M63 "+h(b)+"h605",stroke:"#d8e3e7"}),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:31:82",x:"12",y:h(b)+5},b))),n.createElement("defs",{"data-os-loc":"src/field/HalfSample.jsx:32:2"},n.createElement("clipPath",{"data-os-loc":"src/field/HalfSample.jsx:32:8",id:"half-crest-zoom"},n.createElement("rect",{"data-os-loc":"src/field/HalfSample.jsx:32:39",x:"63",y:"132",width:"605",height:"128"}))),n.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:33:2",clipPath:"url(#half-crest-zoom)"},["a","b"].map((b,p)=>n.createElement("g",{"data-os-loc":"src/field/HalfSample.jsx:33:60",key:b,fill:p?"#bd5010":"#19658a",stroke:p?"#bd5010":"#19658a"},n.createElement("polyline",{"data-os-loc":"src/field/HalfSample.jsx:33:131",fill:"none",strokeWidth:"2",points:a.points.map(l=>f(l.x)+","+h(l[b])).join(" ")}),a.points.filter(l=>l.x>=-.05&&l.x<=.075).map(l=>n.createElement("circle",{"data-os-loc":"src/field/HalfSample.jsx:33:280",key:l.x,cx:f(l.x),cy:h(l[b]),r:"4"}))))),n.createElement("path",{"data-os-loc":"src/field/HalfSample.jsx:34:2",d:"M"+f(m.shift)+" 120V260",stroke:"#654493",strokeDasharray:"4 3"}),n.createElement("circle",{"data-os-loc":"src/field/HalfSample.jsx:34:78",cx:f(m.shift),cy:h(1),r:"5",stroke:"#654493",strokeWidth:"2",fill:"white"}),[-.025,0,.025,.05].map(b=>n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:35:29",x:f(b),y:"279",textAnchor:"middle",key:b},b)),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:36:2",x:"24",y:"309",fontSize:"15"},"蓝 / Reference　 橙 / Shifted samples　 ○ 解析峰 / True crest"),n.createElement("text",{"data-os-loc":"src/field/HalfSample.jsx:36:98",x:"24",y:"333",fontSize:"14"},"x ∈ {0, 0.025}　 ·　 sampled height = ",d.highestSampleHeight.toFixed(9))),n.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:37:2"},r("严格局部峰：","Strict local crests: "),d.strictShiftedCandidates.length,"。",r("两个最高采样点等高，不能唯一读回峰位。","The two highest samples tie; neither is a unique crest.")),n.createElement("table",{"data-os-loc":"src/field/HalfSample.jsx:38:2"},n.createElement("thead",{"data-os-loc":"src/field/HalfSample.jsx:38:9"},n.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:38:16"},(e?["量","解析真值","采样读数","读数减真值"]:["Quantity","Truth","Sample readout","Readout minus truth"]).map(b=>n.createElement("th",{"data-os-loc":"src/field/HalfSample.jsx:38:121",key:b},b)))),n.createElement("tbody",{"data-os-loc":"src/field/HalfSample.jsx:38:156"},n.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:38:163"},n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:38:167"},r("峰位","Crest x")),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:38:195"},m.shift),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:38:213"},d.highestSampleXs.join(" / ")),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:38:253"},d.shiftErrorsIfEndpointChosen.join(" / +"))),n.createElement("tr",{"data-os-loc":"src/field/HalfSample.jsx:38:311"},n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:38:315"},r("峰高","Elevation")),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:38:345"},m.amplitude),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:38:367"},d.highestSampleHeight.toFixed(9)),n.createElement("td",{"data-os-loc":"src/field/HalfSample.jsx:38:410"},d.heightError.toFixed(9))))),n.createElement("p",{"data-os-loc":"src/field/HalfSample.jsx:39:2"},r("若利用对称性，两个最高点的中点估计为","Using symmetry, the midpoint estimate is")," ",d.midpointEstimate,"。",r("这是估计值，并非某个采样点的位置。","This estimate is not a sampled position.")),["json","svg","csv"].map(b=>n.createElement("button",{"data-os-loc":"src/field/HalfSample.jsx:40:33",key:b,onClick:()=>E(b)},r("导出","Export")," ",b.toUpperCase()))))}const ga={schema:"oceanscope.analytic-wave.v1",formula:"A*cos(2*pi*(x-c)/wavelength)",units:"scene",xmin:-1,xmax:1,dx:.025,wavelength:2,reference:{A:1,c:0},controls:[{id:"height",A:.75,c:0},{id:"position",A:1,c:.25}]},Hs=e=>e.controls.map(a=>{const t=(h,E)=>h.A*Math.cos(2*Math.PI*(E-h.c)/e.wavelength),s=Array.from({length:1+Math.round((e.xmax-e.xmin)/e.dx)},(h,E)=>{const b=e.xmin+E*e.dx;return{x:b,z:0,distance:b,a:t(e.reference,b),b:t(a,b)}}),i={points:s},c={xmin:e.xmin,xmax:e.xmax,zmin:0,zmax:0},r=h=>{const E=ft(i,c,h);if(E.length!==1)throw Error("Expected one interior crest");return E[0]},{gt:o,pred:d,deltaHeight:m,deltaDistance:f}=m0({roi:c,profiles:{first:i}},{profile:"first",a:r("a"),b:r("b"),status:"paired"});return{points:s,result:{id:a.id,gtX:o.x,gtHeight:o.a,predX:d.x,predHeight:d.b,expectedHeight:a.A-e.reference.A,measuredHeight:m,expectedShift:a.c-e.reference.c,measuredShift:f}}}),Ka=Hs(ga),Qa={recipe:ga,readings:Ka.map(e=>e.result)},j0=JSON.stringify(Qa,null,2);function B0({zh:e}){const a=S.useRef(null),[t,s]=S.useState(!1),[i,c]=S.useState("");async function r(o){if(o)try{const d=JSON.parse(await o.text()),m=(f,h)=>f===h||f&&h&&typeof f=="object"&&typeof h=="object"&&Object.keys(f).length===Object.keys(h).length&&Object.keys(f).every(E=>Object.hasOwn(h,E)&&m(f[E],h[E]));if(!m(d.recipe,ga)||!m(d.readings,Hs(ga).map(f=>f.result)))throw Error();s(!0),c(e?"已重新采样并核对读数":"Resampled and verified")}catch{c(e?"此文件与解析对照不匹配":"File does not match this control")}}return n.createElement("section",{"data-os-loc":"src/field/AnalyticWave.jsx:23:9","aria-label":"Analytic wave control"},n.createElement("h3",{"data-os-loc":"src/field/AnalyticWave.jsx:23:53"},e?"解析波面校验":"Analytic wave control"),n.createElement("button",{"data-os-loc":"src/field/AnalyticWave.jsx:23:99",onClick:()=>s(!0)},e?"打开峰高与峰位对照":"Open crest controls")," ",n.createElement("label",{"data-os-loc":"src/field/AnalyticWave.jsx:23:180"},e?"恢复解析波面 JSON":"Restore analytic JSON"," ",n.createElement("input",{"data-os-loc":"src/field/AnalyticWave.jsx:23:230",type:"file","aria-label":"Restore analytic JSON",accept:".json",onChange:o=>{r(o.target.files[0]),o.target.value=""}})),n.createElement("p",{"data-os-loc":"src/field/AnalyticWave.jsx:23:370",role:"status"},i),t&&n.createElement(n.Fragment,null,n.createElement("svg",{"data-os-loc":"src/field/AnalyticWave.jsx:24:11",xmlns:"http://www.w3.org/2000/svg",ref:a,role:"img","aria-label":"Analytic crest comparison",viewBox:"0 0 760 370",style:{width:"100%",maxWidth:920},fontFamily:"sans-serif",fill:"#173950"},n.createElement("rect",{"data-os-loc":"src/field/AnalyticWave.jsx:25:2",width:"760",height:"370",fill:"#f7fbfd"}),n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:25:49",x:"24",y:"32",fontSize:"21"},"解析波面校验 / Analytic crest controls"),n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:25:122",x:"24",y:"58",fontSize:"14"},"η = A cos(2π(x−c)/2)   ·   Δx = 0.025   ·   81 samples   ·   scene units"),Ka.map(({points:o,result:d},m)=>{const f=E=>70+m*370+(E+1)*140,h=E=>199-E*78;return n.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:27:9",key:d.id},n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:27:23",x:f(-1),y:"94",fontSize:"16"},m?"仅平移 / Shift only":"仅降幅 / Amplitude only"),n.createElement("path",{"data-os-loc":"src/field/AnalyticWave.jsx:28:2",d:`M${f(-1)} 113V280H${f(1)} M${f(-1)} 199H${f(1)}`,fill:"none",stroke:"#b3c5cb"}),[-1,0,1].map(E=>n.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:28:109",key:E},n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:28:120",x:f(E)-5,y:"298"},E),n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:28:155",x:f(-1)-28,y:h(E)+4},E))),["a","b"].map((E,b)=>n.createElement("g",{"data-os-loc":"src/field/AnalyticWave.jsx:29:24",key:E,stroke:b?"#bf540e":"#11669b",fill:"none"},n.createElement("polyline",{"data-os-loc":"src/field/AnalyticWave.jsx:29:78",strokeWidth:"2.5",strokeDasharray:b?"6 3":void 0,points:o.map(p=>f(p.x)+","+h(p[E])).join(" ")}),n.createElement("circle",{"data-os-loc":"src/field/AnalyticWave.jsx:29:196",cx:f(b?d.predX:d.gtX),cy:h(b?d.predHeight:d.gtHeight),r:"4",fill:"white",strokeWidth:"2"}))),n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:30:2",x:f(-1),y:"324"},"Δη = ",d.measuredHeight.toFixed(2),"   ·   Δx crest = ",d.measuredShift.toFixed(2)))}),n.createElement("text",{"data-os-loc":"src/field/AnalyticWave.jsx:31:2",x:"25",y:"355",fontSize:"14"},"蓝实线 Reference　 橙虚线 Perturbation　 ○ 采样峰顶 / Sampled crest")),n.createElement("table",{"data-os-loc":"src/field/AnalyticWave.jsx:32:2"},n.createElement("thead",{"data-os-loc":"src/field/AnalyticWave.jsx:32:9"},n.createElement("tr",{"data-os-loc":"src/field/AnalyticWave.jsx:32:16"},(e?["对照","峰高差：设定 / 读回","峰位差：设定 / 读回"]:["Control","Crest elevation: set / read","Crest shift: set / read"]).map(o=>n.createElement("th",{"data-os-loc":"src/field/AnalyticWave.jsx:32:136",key:o},o)))),n.createElement("tbody",{"data-os-loc":"src/field/AnalyticWave.jsx:32:171"},Ka.map(({result:o})=>n.createElement("tr",{"data-os-loc":"src/field/AnalyticWave.jsx:32:202",key:o.id},n.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:32:217"},o.id),n.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:32:232"},o.expectedHeight," / ",o.measuredHeight),n.createElement("td",{"data-os-loc":"src/field/AnalyticWave.jsx:32:280"},o.expectedShift," / ",o.measuredShift))))),n.createElement("p",{"data-os-loc":"src/field/AnalyticWave.jsx:33:2"},e?"峰顶在采样点上。此对照检验剖面峰值读数，不代表真实重建精度。":"Crests lie on sample points. This checks profile readout, not reconstruction accuracy."),["json","svg","csv"].map(o=>n.createElement("button",{"data-os-loc":"src/field/AnalyticWave.jsx:34:33",key:o,onClick:()=>jn("analytic-wave."+o,{json:"application/json",csv:"text/csv",svg:"image/svg+xml"}[o],o==="json"?j0:o==="svg"?a.current.outerHTML:[Object.keys(Qa.readings[0]),...Qa.readings.map(Object.values)].map(d=>d.join(",")).join(`
`))},e?"导出":"Export"," ",o.toUpperCase()))))}function A0({rows:e,zh:a}){const t=S.useRef(null),[s,i]=S.useState([]),[c,r]=S.useState(!1),[o,d]=S.useState(0),[m,f]=S.useState(()=>new URLSearchParams(window.location.search).get("metric")||"bias"),h=(g,j)=>a?g:j;S.useEffect(()=>{let g=!0;return import(new URL("review/b-case-metrics.js",document.baseURI).href).then(x=>{g&&(i(x.metrics),r(!1))}).catch(()=>{g&&r(!0)}),()=>{g=!1}},[o]),S.useEffect(()=>{s.length&&new URLSearchParams(window.location.search).get("review")==="b-pair"&&t.current?.scrollIntoView({block:"center"})},[s]);const E=s.find(g=>g.id===m)||s.find(g=>g.id==="bias")||s[0],b=new URL(hi);E&&b.searchParams.set("metric",E.id);const p=g=>Number.isFinite(g)?g.toFixed(5):"—",l=E&&e.map(g=>[g.frameId,p(E.read(g))]),v=["Gentle / Best_1027","XZ (−0.95, 0.90)","ROI 1 × 1","X profile 0°",E&&E.en,...(l||[]).map(([g,j])=>g+": "+j)].filter(Boolean).join(" · ");return n.createElement("section",{"data-os-loc":"src/field/ReviewMetrics.jsx:30:10",ref:t,className:"review-metrics","aria-label":"B case collaboration"},n.createElement("h3",{"data-os-loc":"src/field/ReviewMetrics.jsx:31:5"},h("一起查看 B 区域","Review region B together")),c&&n.createElement("button",{"data-os-loc":"src/field/ReviewMetrics.jsx:32:15",onClick:()=>d(o+1)},h("重试加载追踪量","Retry loading metrics")),E&&n.createElement(n.Fragment,null,n.createElement("label",{"data-os-loc":"src/field/ReviewMetrics.jsx:33:18"},h("追踪量","Track a quantity")," ",n.createElement("select",{"data-os-loc":"src/field/ReviewMetrics.jsx:33:56",value:E.id,onChange:g=>f(g.target.value)},s.map(g=>n.createElement("option",{"data-os-loc":"src/field/ReviewMetrics.jsx:34:29",key:g.id,value:g.id},a?g.zh:g.en)))),n.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:36:5","aria-live":"polite"},l.map(([g,j])=>g+": "+j).join("　 /　 "),"　",h("场景单位","scene units"))),n.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:37:5",href:b.href,target:"_blank",rel:"noreferrer"},h("打开这个视图的分享链接","Open shareable view"))," · ",n.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:38:12",href:Ot+"/edit/main/review/b-case-metrics.js",target:"_blank",rel:"noreferrer"},h("在 GitHub 建议修改指标源码","Propose an edit to the metric code")),n.createElement("p",{"data-os-loc":"src/field/ReviewMetrics.jsx:39:5"},n.createElement("a",{"data-os-loc":"src/field/ReviewMetrics.jsx:39:8",href:Ot+"/issues/1#new_comment_field",target:"_blank",rel:"noreferrer"},h("在案例讨论中留言","Comment on this case"))),n.createElement(ys,{topic:"region-B-1050-1054",zh:a,subject:h("B 区域 · 1050 与 1054","Region B · 1050 and 1054"),context:v,viewLink:b.href}))}function C0(e,a){const{shape:[t,s],originXYZ:[i,,c],spacing:r}=e.descriptor,o=[];for(let b=0;b<t;b++){const p=c+b*r;if(!(p<a.zmin||p>a.zmax))for(let l=0;l<s;l++){const v=i+l*r,g=b*s+l;v<a.xmin||v>a.xmax||o.push({ix:l,iz:b,error:e.common[g]?e.heightB[g]-e.heightA[g]:null})}}const d=o.map(b=>b.error).filter(Number.isFinite).sort((b,p)=>b-p),m=d.filter(b=>b>0),f=d.filter(b=>b<0),h=b=>b.length?b.reduce((p,l)=>p+l,0)/b.length:null,E=d.length;return{cells:o,counts:[E,m.length,f.length,E-m.length-f.length,h(m),h(f),E?(d[Math.floor((E-1)/2)]+d[Math.floor(E/2)])/2:null,h(d)]}}const sa=e=>e==null?"—":e.toFixed(4);function ls(e,a){if(e==null)return"#a7acb0";const t=e>=0?[186,58,44]:[35,97,159],s=Math.min(1,Math.abs(e)/(a||1));return"rgb("+t.map(i=>Math.round(250+(i-250)*s)).join(",")+")"}function k0(e){const[a,t]=e.map(c=>c.profile.points),s=a.map((c,r)=>Number.isFinite(c.difference)&&Number.isFinite(t[r]?.difference)?Math.max(0,c.difference)-Math.max(0,t[r].difference):null);let i=null;for(let c=1;c<s.length;c++){if(s[c-1]==null||s[c]==null)continue;const r=s[c-1]+s[c];(!i||r>i.sum)&&(i={sum:r,i:c})}return{lo:a[i.i-1].distance,hi:a[i.i].distance,share:i.sum/s.reduce((c,r)=>c+Math.max(0,r??0),0)}}function M0({data:e,bundle:a,zh:t}){const s=S.useRef(null),i=(b,p)=>t?b:p,c=e.rows.filter(b=>[1050,1054].includes(b.frameId)),r=Math.max(...c.flatMap(b=>b.region.cells.map(p=>Math.abs(p.error??0)))),o=c.flatMap(b=>b.profile.points.flatMap(p=>[p.a,p.b])).filter(Number.isFinite),d=Math.min(...o),m=Math.max(...o),f=k0(c),h=["frame","common","positive","negative","zero","mean_positive","mean_negative","median","roi_bias"];function E(b){let p,l;b==="svg"&&(p=s.current.outerHTML,l="image/svg+xml"),b==="csv"&&(p=[h,...e.rows.map(v=>[v.frameId,...v.region.counts])].map(v=>v.join(",")).join(`
`)+`
`,l="text/csv"),b==="json"&&(p=JSON.stringify({...Gs(a,e,1050),caseView:"B-1050-1054",signedScale:[-r,r],band:f,signedStats:e.rows.map(v=>Object.fromEntries(h.map((g,j)=>[g,[v.frameId,...v.region.counts][j]])))},null,2),l="application/json"),jn("OceanScope-B-1050-1054."+b,l,p)}return n.createElement("section",{"data-os-loc":"src/field/BPairCase.jsx:62:10","data-review-frame":"1050 / 1054","aria-label":"B paired frame case"},n.createElement("svg",{"data-os-loc":"src/field/BPairCase.jsx:62:84",ref:s,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 960 765",style:{width:"100%",maxWidth:960},role:"img","aria-label":i("B 区域两帧误差与剖面","B region paired error maps and profiles")},n.createElement("rect",{"data-os-loc":"src/field/BPairCase.jsx:63:5",width:"960",height:"765",fill:"#fafaf8"}),n.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:64:5",fill:"#173447",fontFamily:"sans-serif",fontSize:"16"},n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:65:5",x:"30",y:"40",fontSize:"26",fontWeight:"bold"},i("B 区域 · 中心仍偏高，区域平均转负","Region B · positive centre, changing regional bias")),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:66:5",x:"30",y:"69"},"Best_1027 · XZ (−0.95, 0.90) · ROI 1 × 1 · ",i("剖面沿 X，长度按场景单位","X profile, source length units")),c.map((b,p)=>{const l=40+p*468,v=128,g=210,j=u=>l+36+(u+.5)*335,x=u=>529-(u-d)/(m-d)*101;return n.createElement("g",{"data-os-loc":"src/field/BPairCase.jsx:70:14",key:b.frameId},n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:70:33",x:l,y:"109",fontWeight:"bold",fontSize:"23"},b.frameId),b.region.cells.map(u=>n.createElement("rect",{"data-os-loc":"src/field/BPairCase.jsx:71:32",key:u.ix+","+u.iz,x:l+(u.ix-164)*10,y:v+(79-u.iz)*10,width:"10",height:"10",fill:ls(u.error,r)})),n.createElement("line",{"data-os-loc":"src/field/BPairCase.jsx:72:9",x1:l,x2:l+g,y1:v+105,y2:v+105,stroke:"#182e36",strokeDasharray:"4 3"}),n.createElement("circle",{"data-os-loc":"src/field/BPairCase.jsx:73:9",cx:l+105,cy:v+105,r:"5",stroke:"black",strokeWidth:"2",fill:"white"}),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:74:9",x:l+222,y:"172"},"Z ↑   X →"),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:74:52",x:l+222,y:"205"},i("中心差","Centre Δh")," ",sa(b.centre.difference)),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:75:9",x:l+222,y:"232"},"ROI bias ",sa(b.stats.bias)),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:75:71",x:l+222,y:"259"},"n = ",b.region.counts[0]),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:76:9",x:l,y:"368"},i("偏高列均值","Mean positive")," ",sa(b.region.counts[4]),"　 ",i("偏低列均值","Mean negative")," ",sa(b.region.counts[5])),n.createElement("rect",{"data-os-loc":"src/field/BPairCase.jsx:77:9",x:j(f.lo)-2,width:j(f.hi)-j(f.lo)+4,y:"421",height:"111",fill:"#f4df9c"}),n.createElement("line",{"data-os-loc":"src/field/BPairCase.jsx:78:9",x1:j(0),x2:j(0),y1:"421",y2:"534",stroke:"#777",strokeDasharray:"2 3"}),[d,m].map(u=>n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:79:28",x:l-8,y:x(u)+4,fontSize:"12",key:u},u.toFixed(2))),["a","b"].map((u,y)=>{let w=!1;const _=b.profile.points.map(B=>{if(!Number.isFinite(B[u]))return w=!1,"";const C=w?"L":"M";return w=!0,C+j(B.distance)+" "+x(B[u])}).join(" ");return n.createElement("path",{"data-os-loc":"src/field/BPairCase.jsx:82:18",key:u,d:_,stroke:y?"#c57718":"#13689e",fill:"none",strokeWidth:"2.5"})}),[-.5,0,.5].map(u=>n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:84:28",key:u,x:j(u),y:"551",textAnchor:"middle",fontSize:"13"},u.toFixed(1))))}),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:87:5",x:"38",y:"400"},i("带符号误差（预测 − GT）","Signed error (prediction − GT)")),Array.from({length:81},(b,p)=>n.createElement("rect",{"data-os-loc":"src/field/BPairCase.jsx:88:36",key:p,x:385+p*3,y:"385",width:"3",height:"14",fill:ls((p-40)*r/40,r)})),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:89:5",x:"328",y:"399"},(-r).toFixed(3)),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:89:55",x:"500",y:"380"},"0"),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:89:85",x:"638",y:"399"},"+",r.toFixed(3)),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:90:5",x:"38",y:"583"},i("剖面横轴为距中心的 X 距离，纵轴为水面高度。蓝线 GT，橙线预测。","Horizontal: X distance from centre. Vertical: surface height. Blue GT, orange prediction.")),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:91:5",x:"38",y:"625",fontWeight:"bold"},i("偏高减小最集中的相邻两点","Adjacent pair with the largest reduction in positive error"),"　s = ",f.lo.toFixed(2)," … ",f.hi.toFixed(2)),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:92:5",x:"38",y:"659"},i("黄色标记该区段。逐点取正误差，再比较两帧；这两点占剖面全部正向减小量的","Gold marks the interval. These points account for this share of all decreases in positive error:")," ",(f.share*100).toFixed(1),"%."),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:93:5",x:"38",y:"695"},i("该段位于 1050 帧 GT 由局部谷底向右抬升处。1054 帧同一位置仍靠近低谷。","In 1050 the GT rises out of a local trough here. In 1054 these positions remain near the trough.")),n.createElement("text",{"data-os-loc":"src/field/BPairCase.jsx:94:5",x:"38",y:"735"},i("两帧比较固定世界位置。白点为中心，虚线为穿过中心的 X 剖面。","World positions are fixed. White circle: centre. Dashed line: X section through centre.")))),n.createElement(A0,{rows:c,zh:t}),["svg","csv","json"].map(b=>n.createElement("button",{"data-os-loc":"src/field/BPairCase.jsx:97:36",key:b,onClick:()=>E(b)},i("下载 B 案例","Download B case")," ",b.toUpperCase())))}const Fn=e=>Number.isFinite(e)?e.toFixed(4):"—";async function R0(e,a,t){const s=await Xa(Ua,ua.indexSha256,e),c=s.frames.find(y=>y.frameId===1049).spacing,r=typeof a=="string",o=r?a==="A"?176:174:a?.ix,d=r?a==="A"?90:69:a?.iz,m=r?1049:a?.sourceFrame,f=s.frames.find(y=>y.frameId===m);if(!f||!Number.isInteger(o)||!Number.isInteger(d)||o<0||d<0||o>=f.shape[1]||d>=f.shape[0])throw Error("Invalid hotspot index");const h=f.originXYZ[0]+o*f.spacing,E=f.originXYZ[2]+d*f.spacing,b=r?{xmin:h-10*c,xmax:h+10*c,zmin:E-10*c,zmax:E+10*c}:a.roi,p=r?0:a.directionDeg,l=xa({descriptor:f});if(!Number.isFinite(p)||p<0||p>=180||!b||!["xmin","xmax","zmin","zmax"].every(y=>Number.isFinite(b[y]))||b.xmin>=b.xmax||b.zmin>=b.zmax||b.xmin<l.xmin||b.xmax>l.xmax||b.zmin<l.zmin||b.zmax>l.zmax||h<b.xmin||h>b.xmax||E<b.zmin||E>b.zmax)throw Error("Select an ROI containing the hotspot and a valid profile angle");const v={sourceFrame:m,ix:o,iz:d,x:h,z:E,roi:b,directionDeg:p};if(!r&&(h!==a.x||E!==a.z))throw Error("Hotspot world coordinates differ from source");const g=await da(f,{...Bn(e),frameId:m},t);if(!g.common[d*f.shape[1]+o])throw Error("Source hotspot is outside common support");const j=[];for(const y of ha){const w=s.frames.find(O=>O.frameId===y),_=y===m?g:await da(w,{...Bn(e),frameId:y},t),B=Ha(_,{x:h,z:E,directionDeg:p});B.points=B.points.filter(O=>O.x>=b.xmin-1e-9&&O.x<=b.xmax+1e-9&&O.z>=b.zmin-1e-9&&O.z<=b.zmax+1e-9);const C=B.points.find(O=>Math.abs(O.distance)<1e-9),A=o===174&&d===69&&p===0&&b.xmin===h-10*c&&b.xmax===h+10*c&&b.zmin===E-10*c&&b.zmax===E+10*c?C0(_,b):null;j.push({region:A,frameId:y,profile:B,centre:C,stats:zn(_,b)})}const x=j.flatMap(y=>y.profile.points),u=x.flatMap(y=>[y.a,y.b]).filter(Number.isFinite);return{selection:v,x:h,z:E,roi:b,rows:j,limits:u.length?[Math.min(...u),Math.max(...u)]:[0,1],error:Math.max(1e-9,...x.map(y=>Math.abs(y.difference??0)))}}function P0({bundle:e,zh:a,getSelection:t}){const[s,i]=S.useState(()=>Ra()?"B":null),[c,r]=S.useState(()=>Ra()?1050:1049),[o,d]=S.useState(null),[m,f]=S.useState(Ra),[h,E]=S.useState(""),b=S.useRef(null),p=S.useRef(0);function l(u,y=1049,w=!1){p.current++,f(w),E(""),i(u),r(y)}async function v(u){if(!u)return;const y=++p.current;try{if(u.size>8*1024*1024)throw Error("Report exceeds 8 MiB");const w=JSON.parse(await u.text()),_=w0(w,e);if(!_||typeof _!="object")throw Error("Invalid report selection");y===p.current&&l(_,w.selectedFrame,w.caseView==="B-1050-1054")}catch(w){y===p.current&&E(w.message)}}S.useEffect(()=>{if(!s)return;const u=new AbortController;return R0(e,s,u.signal).then(y=>{u.signal.aborted||d({bundle:e,location:s,data:y})}).catch(y=>{u.signal.aborted||d({bundle:e,location:s,error:y.message})}),()=>u.abort()},[e,s]);const g=o?.bundle===e&&o.location===s?o:null,j=g?.data,x=j?.rows.find(u=>u.frameId===c);return n.createElement("section",{"data-os-loc":"src/field/FixedWaveWindow.jsx:87:10","data-review-frame":x?.frameId,ref:b,"aria-label":"Fixed ROI wave window"},n.createElement("h3",{"data-os-loc":"src/field/FixedWaveWindow.jsx:87:101"},a?"固定选区波形 · 1049–1054":"Fixed ROI wave profiles · 1049–1054"),["A","B"].map(u=>n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:88:24",key:u,"aria-pressed":s===u,onClick:()=>l(u)},a?"固定区域 ":"Fixed region ",u)),n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:89:5",onClick:()=>l("B",1050,!0)},a?"B 区域：1050 与 1054":"Compare B: 1050 and 1054"),n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:90:5",onClick:()=>{try{l(t())}catch(u){E(u.message)}}},a?"使用当前热点与选区":"Use current hotspot and ROI"),n.createElement("label",{"data-os-loc":"src/field/FixedWaveWindow.jsx:91:5"},a?"恢复六帧 JSON":"Restore six-frame JSON"," ",n.createElement("input",{"data-os-loc":"src/field/FixedWaveWindow.jsx:91:54",type:"file","aria-label":"Restore six-frame JSON",accept:".json",onChange:u=>{v(u.target.files[0]),u.target.value=""}})),h&&n.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:92:17",role:"alert"},h),s&&!g&&n.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:93:29",role:"status"},a?"正在读取六帧高度…":"Loading six height frames…"),g?.error&&n.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:94:23",role:"alert"},g.error," ",n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:94:54",onClick:()=>i(null)},a?"重置":"Reset")),m&&j?.rows[0].region&&n.createElement(M0,{data:j,bundle:e,zh:a}),x&&n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/FixedWaveWindow.jsx:96:15"},"XZ (",Fn(j.x),", ",Fn(j.z),") · ",j.selection.directionDeg,"° · ",a?"固定世界位置。蓝 GT，橙预测，紫色为预测减 GT。":"Fixed world position. Blue GT, orange prediction, purple prediction minus GT."),n.createElement("table",{"data-os-loc":"src/field/FixedWaveWindow.jsx:97:5"},n.createElement("thead",{"data-os-loc":"src/field/FixedWaveWindow.jsx:97:12"},n.createElement("tr",{"data-os-loc":"src/field/FixedWaveWindow.jsx:97:19"},(a?["帧","中心高度差","ROI 平均偏差","ROI MAE","共同有效 / 候选"]:["Frame","Centre height difference","ROI mean bias","ROI MAE","Common / candidate"]).map(u=>n.createElement("th",{"data-os-loc":"src/field/FixedWaveWindow.jsx:97:167",key:u},u)))),n.createElement("tbody",{"data-os-loc":"src/field/FixedWaveWindow.jsx:98:5"},j.rows.map(u=>n.createElement("tr",{"data-os-loc":"src/field/FixedWaveWindow.jsx:98:30","data-review-frame":u.frameId,key:u.frameId},n.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:98:80"},n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:98:84","aria-pressed":c===u.frameId,onClick:()=>r(u.frameId)},u.frameId)),n.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:99:7"},Fn(u.centre?.difference)),n.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:99:46"},Fn(u.stats.bias)),n.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:99:77"},Fn(u.stats.mae)),n.createElement("td",{"data-os-loc":"src/field/FixedWaveWindow.jsx:99:107"},u.stats.common," / ",u.stats.candidates))))),n.createElement(Ja,{profile:x.profile,roi:j.roi,limits:j.limits,errorLimit:j.error,label:(a?"固定剖面 ":"Fixed profile ")+c}),n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:101:5",onClick:()=>jn("OceanScope-six-frame.json","application/json",JSON.stringify(Gs(e,j,c),null,2))},a?"下载六帧 JSON":"Download six-frame JSON"),n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:102:5",onClick:()=>jn("OceanScope-six-frame.csv","text/csv",["frame,hotspot_difference,roi_bias,roi_mae,common,candidate",...j.rows.map(u=>[u.frameId,u.centre?.difference,u.stats.bias,u.stats.mae,u.stats.common,u.stats.candidates].join(","))].join(`
`))},a?"下载逐帧 CSV":"Download six-frame CSV"),n.createElement("button",{"data-os-loc":"src/field/FixedWaveWindow.jsx:103:5",onClick:()=>{const u=b.current.querySelector("figure svg").cloneNode(!0);u.setAttribute("xmlns","http://www.w3.org/2000/svg"),jn("OceanScope-profile-"+c+".svg","image/svg+xml",u.outerHTML)}},a?"下载当前剖面 SVG":"Download profile SVG")),n.createElement(B0,{zh:a}),n.createElement(S0,{zh:a}))}function I0({zh:e}){const a=[{id:"MAE",name:e?"平均绝对误差":"Mean absolute error",formula:"MAE = Σ|eᵢ| / N",meaning:e?"平均差多少，不区分偏高或偏低。越接近 0 越好。":"Average error size, regardless of direction. Closer to 0 is better."},{id:"Bias",name:e?"平均有符号偏差":"Mean signed error",formula:"Bias = Σeᵢ / N",meaning:e?"正值表示预测偏高，负值表示偏低。正负误差会抵消，所以 Bias 接近 0 不代表每个位置都准确。":"Positive means the prediction is higher; negative means lower. Opposite errors can cancel, so a near-zero bias does not guarantee small errors."},{id:"RMSE",name:e?"均方根误差":"Root mean square error",formula:"RMSE = √(Σeᵢ² / N)",meaning:e?"先平方、求平均，再开平方，对较大的误差更敏感。越接近 0 越好；它不是最大误差。":"Square the errors, average them, then take the square root. More sensitive to large errors; closer to 0 is better. This is not the maximum error."}];return n.createElement("details",{"data-os-loc":"src/field/HeightMetricHelp.jsx:9:9",className:"height-metric-help"},n.createElement("summary",{"data-os-loc":"src/field/HeightMetricHelp.jsx:10:3"},e?"MAE、Bias、RMSE 怎么看？说明与公式":"How to read MAE, Bias and RMSE — definitions & formulas"),n.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:11:3",className:"height-metric-help-body"},n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:12:4"},e?"先在同一位置比较水面高度：Aᵢ 是 GT（参考值），Bᵢ 是预测值，eᵢ = Bᵢ − Aᵢ。以下高度与误差统一用 cm 表示；1 m = 100 cm。":"Compare heights at the same location: Aᵢ is GT (the reference), Bᵢ is the prediction, and eᵢ = Bᵢ − Aᵢ. Heights and errors below use cm; 1 m = 100 cm."),n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:13:4"},e?"N 是当前统计范围内两边都有有效高度的位置数，也叫“共同列”。每个 (X, Z) 位置对应一条竖直列，取其最上层水面高度。Σ 表示将这 N 个位置的数相加。缺失位置不补零；N = 0 时不提供误差分数。":"N is the number of locations with valid heights in both datasets within the current scope, also called common columns. Each (X, Z) location defines a vertical column with a topmost surface height. Σ sums over these N locations. Missing locations are not filled with zero; no error score is available when N = 0."),n.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:4",className:"height-metric-formulas"},a.map(t=>n.createElement("article",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:61",key:t.id},n.createElement("h3",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:84"},t.id," · ",t.name),n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:116",className:"height-metric-formula"},t.formula),n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:14:171"},t.meaning)))),n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:15:4",className:"height-metric-example"},n.createElement("strong",{"data-os-loc":"src/field/HeightMetricHelp.jsx:15:41"},e?"小例子：":"Example: "),e?"两个位置分别偏低 1 cm、偏高 3 cm，即 e = −1、+3 cm。MAE = 2 cm，Bias = +1 cm，RMSE = √5 ≈ 2.24 cm。三个指标从不同角度描述同一组误差。":"At two locations, the prediction is 1 cm lower and 3 cm higher: e = −1, +3 cm. MAE = 2 cm, Bias = +1 cm, and RMSE = √5 ≈ 2.24 cm. The metrics describe different aspects of the same errors."),n.createElement("dl",{"data-os-loc":"src/field/HeightMetricHelp.jsx:16:4",className:"height-metric-scopes"},n.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:5"},n.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:10"},e?"当前帧 · 全域":"Current frame · Full domain"),n.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:17:64"},e?"当前这一帧内，所有共同有效位置的统计；不是全部 96 帧的平均。":"All paired valid locations in this frame; not an average over all 96 frames.")),n.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:5"},n.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:10"},e?"选区 · ROI":"Selected region · ROI"),n.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:18:58"},e?"只统计已应用的矩形选区内的位置。ROI 是“感兴趣区域”；改变选区不会改变当前帧全域或全序列评分。":"Only locations inside the applied rectangle. ROI means region of interest. Changing it does not change full-frame or sequence scores.")),n.createElement("div",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:5"},n.createElement("dt",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:10"},e?"单点探针 / 截面":"Point probe / Profile"),n.createElement("dd",{"data-os-loc":"src/field/HeightMetricHelp.jsx:19:59"},e?"探针读数来自一个点击位置；曲线沿当前整条截面显示，并不自动裁剪到 ROI。两者都不能当作选区平均值。":"The probe reads one clicked location. The profile follows the current full section and is not automatically cropped to the ROI. Neither is an ROI average."))),n.createElement("p",{"data-os-loc":"src/field/HeightMetricHelp.jsx:21:4"},e?"这些是水面高度误差，不是 SDF 场误差或速度误差。此处单位为 cm；固定协议的全序列指标及 %R 请到“时间分析”查看。":"These are surface-height errors, not SDF-field or velocity errors. Values here use cm. Open Time analysis for fixed-protocol sequence metrics and %R.")))}const _e=(e,a=1)=>e==null?"—":(e*a).toFixed(4);function la(e){const{shape:[a,t],originXYZ:[s,,i],spacing:c}=e.descriptor;return{xmin:s,xmax:s+(t-1)*c,zmin:i,zmax:i+(a-1)*c}}function N0(e){let a=1/0,t=-1/0,s=0;for(let i=0;i<e.heightA.length;i++){for(const c of["A","B"])e["wet"+c][i]&&(a=Math.min(a,e["height"+c][i]),t=Math.max(t,e["height"+c][i]));e.common[i]&&(s=Math.max(s,Math.abs(e.heightB[i]-e.heightA[i])))}return{height:Number.isFinite(a)?[a,t>a?t:a+1]:[0,1],error:Math.max(s,1e-9)}}function O0({spatial:e,kind:a,range:t,roi:s,probe:i,profile:c,onRegion:r,onProbe:o,label:d,absolute:m=!1,diagnosis:f,mode:h,onPause:E}){const b=S.useRef(null),p=S.useRef(null),[l,v]=e.descriptor.shape,g=la(e),j=a==="difference"?null:e[a],x=a==="difference"?e.common:e[a==="heightA"?"wetA":"wetB"];S.useEffect(()=>{const B=b.current,C=B?.getContext("2d");if(!C)return;const A=C.createImageData(v,l);for(let P=0;P<l;P++)for(let k=0;k<v;k++){const I=P*v+k,D=((l-1-P)*v+k)*4;if(!x[I]){A.data.set([225,230,235,255],D);continue}const F=e.heightB[I]-e.heightA[I],T=j?j[I]:m?Math.abs(F):F,M=Math.max(0,Math.min(1,(T-t[0])/(t[1]-t[0]))),V=a==="difference"&&!m?M<.5?[80+350*M,130+230*M,220+70*M]:[255,245-350*(M-.5),255-440*(M-.5)]:[35+195*M,75+155*M,155+70*M];A.data.set([...V,255],D)}C.putImageData(A,0,0);const O=(P,k)=>[(P-g.xmin)/e.descriptor.spacing+.5,l-.5-(k-g.zmin)/e.descriptor.spacing];if(f){const P=ot(e,f);for(const k of[P.first,P.second])C.strokeStyle="#15373e",C.beginPath(),k.points.forEach((I,D)=>C[D?"lineTo":"moveTo"](...O(I.x,I.z))),C.stroke()}if(!f&&c?.points.length&&(C.strokeStyle="#172c43",C.lineWidth=1,C.beginPath(),c.points.forEach((P,k)=>C[k?"lineTo":"moveTo"](...O(P.x,P.z))),C.stroke()),s){const[P,k]=O(s.xmin,s.zmax),[I,D]=O(s.xmax,s.zmin);if(C.strokeStyle="#111",C.lineWidth=1,C.strokeRect(P,k,I-P,D-k),h==="adjust")for(const[F,T]of[[P,k],[P,D],[I,k],[I,D]])C.fillRect(F-1.5,T-1.5,3,3)}if(i){const[P,k]=O(i.x,i.z);C.strokeStyle="#111",C.beginPath(),C.moveTo(P-3,k),C.lineTo(P+3,k),C.moveTo(P,k-3),C.lineTo(P,k+3),C.stroke()}},[e,a,t[0],t[1],s,i,c,m,f,h]);function u(B){const C=B.currentTarget.getBoundingClientRect(),A=getComputedStyle(B.currentTarget),O={left:C.left,top:C.top,width:C.width,height:C.height};for(const D of["Left","Right","Top","Bottom"])O["border"+D]=parseFloat(A["border"+D+"Width"])||0;const{ix:P,iz:k,index:I}=yi(O,B.clientX,B.clientY,[l,v]);return{x:g.xmin+P*e.descriptor.spacing,z:g.zmin+k*e.descriptor.spacing,index:I}}function y(B,C){if(h!=="adjust"||!C.roi)return{xmin:Math.min(C.x,B.x),xmax:Math.max(C.x,B.x),zmin:Math.min(C.z,B.z),zmax:Math.max(C.z,B.z)};const A=C.roi,O=e.descriptor.spacing,P=B.x-C.x,k=B.z-C.z;let I;return C.corner?(I={...A,[C.corner[0]]:B.x,[C.corner[1]]:B.z},I.xmax-I.xmin<O||I.zmax-I.zmin<O?A:ba(I,g).roi):(I={xmin:A.xmin+P,xmax:A.xmax+P,zmin:A.zmin+k,zmax:A.zmax+k},ba(I,g,{mode:"move"}).roi)}function w(B){if(!p.current)return;const C=u(B),A=p.current;p.current=null,h==="adjust"?r(y(C,A)):C.index===A.index?o(C):r(y(C,A))}function _(B){const C=u(B),A=e.descriptor.spacing;let O=null;if(s&&h==="adjust"){const P=["xmin","xmax"].find(I=>Math.abs(C.x-s[I])<2*A),k=["zmin","zmax"].find(I=>Math.abs(C.z-s[I])<2*A);P&&k&&(O=[P,k])}h==="adjust"&&s&&!O&&(C.x<s.xmin||C.x>s.xmax||C.z<s.zmin||C.z>s.zmax)||(p.current={...C,roi:s,corner:O},E?.(),B.currentTarget.setPointerCapture?.(B.pointerId))}return n.createElement("figure",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:53:9"},n.createElement("figcaption",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:53:17"},d),n.createElement("canvas",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:53:49","data-renderer":"native-height","data-review-frame":e.descriptor.frameId,"data-grid-origin":[g.xmin,g.zmin,e.descriptor.spacing].join(","),ref:b,width:v,height:l,"data-hotspot-index":f?.hotspot.index??"","aria-label":a==="heightA"?"GT height map":a==="heightB"?"Prediction height map":m?"Absolute height difference map":"Signed height difference map",onPointerDown:_,onPointerMove:B=>{p.current&&h==="adjust"&&r(y(u(B),p.current))},onPointerUp:w,onPointerCancel:()=>{p.current?.roi&&h==="adjust"&&r(p.current.roi),p.current=null}}),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:53:713"},"X ",_e(g.xmin),"…",_e(g.xmax)," · Z ",_e(g.zmin),"…",_e(g.zmax)," m"),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:53:823"},_e(t[0])," … ",_e(t[1])," m"))}function F0({profile:e,zh:a}){const t=e.points,s=t.flatMap(h=>[h.a,h.b]).filter(Number.isFinite),i=t.map(h=>h.difference).filter(Number.isFinite);if(!s.length)return n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:57:27",role:"status"},a?"此剖面没有有效高度。":"No valid heights on this profile.");const c=Math.min(...s),r=Math.max(...s),o=Math.max(r-c,1e-9),d=Math.max(...i.map(Math.abs),1e-9),m=Math.max(t.at(-1)?.distance||0,1e-9);function f(h,E=!1){let b=!1;return t.map(p=>{if(p[h]===null)return b=!1,"";const l=42+p.distance/m*640,v=E?235-p[h]/d*42:166-(p[h]-c)/o*130,g=b?"L":"M";return b=!0,`${g}${l},${v}`}).join(" ")}return n.createElement("figure",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:9","data-profile-axis":[0,m,42,682].join(","),className:"protocol-profile"},n.createElement("figcaption",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:96"},a?"同一截面 · 蓝色GT／橙色预测 · B−A":"Same section · blue GT / orange prediction · B−A"," · ",e.sampling==="native_columns"?a?"原生列":"Native columns":a?"四邻点共同有效 · 插值诊断":"Four valid neighbors · interpolated diagnosis"),n.createElement("svg",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:339",viewBox:"0 0 720 300",role:"img","aria-label":"Protocol height profile"},n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:414",x:"8",y:"18"},"Y (m)"),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:445",x:"42",y:"30"},_e(r)),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:485",x:"42",y:"185"},_e(c)),n.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:526",d:f("a"),fill:"none",stroke:"#2583c5",strokeWidth:"2"}),n.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:592",d:f("b"),fill:"none",stroke:"#e08b22",strokeWidth:"2"}),n.createElement("line",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:658",x1:"42",y1:"235",x2:"682",y2:"235",stroke:"#798699",strokeDasharray:"4 3"}),n.createElement("path",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:739",d:f("difference",!0),fill:"none",stroke:"#9b4778",strokeWidth:"1.5"}),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:821",x:"4",y:"220"},"B−A"),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:851",x:"4",y:"240"},"0"),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:879",x:"600",y:"295"},_e(m)," m"),n.createElement("text",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:60:928",x:"44",y:"295"},a?"沿截面距离":"Section distance"," · ±",_e(d)," m")))}function ds({value:e,label:a,zh:t}){return n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:62:43",className:"protocol-metrics","aria-label":a},n.createElement("strong",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:63:2"},a==="ROI metrics"?t?"选区 · 水面高度":"ROI · Surface height":t?"当前帧全域 · 水面高度":"Full frame · Surface height"),n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:64:2",className:"protocol-metric-cards"},n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:3"},n.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:8"},t?"有效对比点":"Paired valid locations"," ",e.common),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:65:73"},t?"共同列 · 两边都有有效高度":"Common columns · valid heights in both")),e.common?n.createElement(n.Fragment,null,n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:67:4"},n.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:67:9"},"MAE ",_e(e.mae_m,100)," cm"),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:67:54"},t?"平均差多少 · 越小越好":"Average error size · lower is better")),n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:68:4"},n.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:68:9"},"Bias ",_e(e.bias_m,100)," cm"),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:68:56"},t?"平均偏差 · 正值偏高，负值偏低":"Mean signed error · positive higher, negative lower")),n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:69:4"},n.createElement("span",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:69:9"},"RMSE ",_e(e.rmse_m,100)," cm"),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:69:56"},t?"对大误差更敏感 · 越小越好":"More sensitive to large errors · lower is better"))):n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:70:7"},t?"不可用：无共同有效列":"Unavailable: no common columns")))}function D0({spatial:e,plane:a,sliceIndex:t,rotationAxis:s,angle:i,sectionPercent:c,zh:r,restored:o,controlRef:d,onPause:m,onOpenVelocity:f}){const[h,E]=S.useState(o?.roi??null),[b,p]=S.useState(o?.probe??null),[l,v]=S.useState(()=>o?.roi??la(e)),[g,j]=S.useState(()=>$a(o?.roi??la(e))),[x,u]=S.useState({}),[y,w]=S.useState(o?.diagnosis??null),[_,B]=S.useState(o?.appearance?.absoluteError??!1),[C,A]=S.useState("select"),[O,P]=S.useState("");function k($){try{const N=e.descriptor.shape[1],J=Er(e,{ix:$.index%N,iz:Math.floor($.index/N),resourceKey:JSON.stringify(e.descriptor)});m?.(),w(J),p(J.hotspot),X(J.roi),P("")}catch{P("该点没有共同有效高度，请选择有效水面。")}}const I=E0(g,l,x),D=Object.keys(I.errors).length?r?"请补全数字；每个轴的最小值不能大于最大值。当前已应用的选区未改变。":"Enter all numeric bounds; each minimum must be no greater than its maximum. The applied ROI is unchanged.":"";S.useImperativeHandle(d,()=>({capture:()=>({spatial:e,roi:h,probe:b,diagnosis:y,appearance:{absoluteError:_}})}));const F=S.useMemo(()=>N0(e),[e]),T=S.useMemo(()=>$n(e),[e]),M=S.useMemo(()=>h?$n(e,h):null,[e,h]),V=S.useMemo(()=>{if(a==="xz"||a==="oblique"&&s!=="y")return null;try{return gs(e,{plane:a,index:Math.max(0,Math.min((a==="xy"?e.descriptor.shape[0]:e.descriptor.shape[1])-1,t)),angle:i,sectionPercent:c})}catch{return null}},[e,a,t,s,i,c]);function X($){E($),v($),j($a($)),u({})}function Y(){const $=la(e);E(null),v($),j($a($)),u({})}function q(){I.valid&&($n(e,I.values),X({...I.values}))}const z=b?.index;return n.createElement(n.Fragment,null,n.createElement("h2",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:90:3"},r?"高度与选区分析 · 帧 ":"Height & ROI analysis · frame ",e.descriptor.frameId),n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:91:3"},r?"原生列高度 · 最高过零点 · 共同有效域。点击探针，拖动选择ROI；灰色为无效区域。A/B共用色标，B−A正值表示预测偏高。":"Native highest-crossing columns and common support. Click to probe; drag to select ROI. Gray is invalid. Shared A/B scale; positive B−A means prediction is higher."),n.createElement("label",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:92:3"},n.createElement("input",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:92:10",type:"checkbox","aria-label":"Absolute height error",checked:_,onChange:$=>B($.target.checked)}),r?"绝对误差 |B−A|（取消为有符号差值）":"Absolute error |B−A| (clear for signed difference)"),O&&n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:93:20",role:"alert"},O),n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:94:3",className:"protocol-maps"},[["heightA","A / GT"],["heightB","B / Prediction"],["difference","B−A"]].map(([$,N])=>n.createElement(O0,{key:$,spatial:e,kind:$,label:$==="difference"&&_?"|B−A|":N,roi:h,probe:b,profile:V,diagnosis:y,mode:C,onPause:m,absolute:_,range:$==="difference"?[_?0:-F.error,F.error]:F.height,onRegion:X,onProbe:k}))),n.createElement(_0,{spatial:e,diagnosis:y,roi:h,mode:C,setMode:A,onRegion:X,onExit:()=>w(null),onNote:$=>w(N=>({...N,caseNote:$})),onDirection:$=>w(N=>({...N,directionDeg:$}))}),y&&f&&n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:96:31"},n.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:96:34",disabled:!Ea(e.descriptor.frameId)||!h,onClick:()=>{m?.(),f({frame:e.descriptor.frameId,hotspotXZ:{x:y.hotspot.x,z:y.hotspot.z},roiXZ:{...h},surfaceCaseId:e.descriptor.runId??"best-1027",caseNote:y.caseNote??"",surfaceIdentity:Object.fromEntries(["runId","protocolSha256","manifestA","manifestB"].map($=>[$,e.descriptor[$]]))})}},r?"查看此区域速度":"Inspect velocity in this region"),r?" · 已核验帧支持速度诊断。保留 XZ，单独选择水下 Y 层。":" · Verified frames support velocity diagnosis. Retain XZ and choose an underwater Y layer separately."),n.createElement(ds,{value:T,label:"Frame spatial metrics",zh:r}),n.createElement(I0,{zh:r}),n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:99:3",className:"protocol-roi-help"},r?"ROI = 局部选区。X、Z 是水平方向，Y 是高度方向；下面四个边界确定矩形范围，点击“应用选区”后更新局部统计。":"ROI = region of interest. X and Z are horizontal; Y is height. The four bounds define a rectangle. Select Apply ROI to update its statistics."),n.createElement("form",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:100:3",onSubmit:$=>{$.preventDefault(),q()}},n.createElement("fieldset",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:100:52",className:"protocol-roi"},n.createElement("legend",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:100:87"},r?"选区范围 · 世界坐标（m）":"ROI bounds · world coordinates (m)"),[["xmin","X min"],["xmax","X max"],["zmin","Z min"],["zmax","Z max"]].map(([$,N])=>n.createElement("label",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:100:252",key:$},N,n.createElement("input",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:100:276","aria-label":`ROI ${N}`,type:"number",step:"any",value:g[$],title:String(l[$]),"aria-invalid":!!I.errors[$],"aria-describedby":I.errors[$]?"roi-input-error":void 0,onChange:J=>{j(Q=>({...Q,[$]:J.target.value})),u(Q=>({...Q,[$]:!0}))}}))),n.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:100:589",type:"submit",disabled:!I.valid},r?"应用选区":"Apply ROI"),n.createElement("button",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:100:669",type:"button",onClick:Y},r?"恢复全域":"Reset to full domain")),D&&n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:100:778",id:"roi-input-error",role:"alert"},D)),n.createElement(ys,{zh:r,subject:"Best_1027 · "+e.descriptor.frameId,context:[_?"|B−A|":"B−A",b&&"XZ "+b.x.toFixed(4)+", "+b.z.toFixed(4),h&&"ROI X ["+h.xmin+", "+h.xmax+"] Z ["+h.zmin+", "+h.zmax+"]",y&&"Profile "+y.directionDeg+"°"].filter(Boolean).join(" · "),viewLink:gi+"#analysis-height"}),M&&n.createElement(ds,{value:M,label:"ROI metrics",zh:r}),b&&n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:107:11","aria-label":"Protocol probe"},n.createElement("strong",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:107:42"},r?"单点探针（不是选区平均）":"Point probe (not an ROI average)"),n.createElement("br",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:107:113"}),"X ",_e(b.x)," / Z ",_e(b.z)," m · A / GT ",_e(e.wetA[z]?e.heightA[z]:null)," / B / ",r?"预测":"Prediction"," ",_e(e.wetB[z]?e.heightB[z]:null)," m · B−A ",_e(e.common[z]?e.heightB[z]-e.heightA[z]:null,100)," cm"),!y&&V&&n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:108:25",className:"protocol-profile-help"},r?"曲线怎么看：蓝线是 GT，橙线是预测；紫线是 B−A，零线上方表示预测偏高，下方表示偏低。横轴是沿截面的距离，纵轴是高度；曲线显示整条截面，不只显示 ROI。":"Reading the profile: blue is GT, orange is prediction. Purple is B−A: above zero means higher, below means lower. The horizontal axis is section distance; the vertical axis is height. The profile covers the full section, not just the ROI."),!y&&(V?n.createElement(F0,{profile:V,zh:r}):n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:109:62",role:"status"},r?"选择 XY、YZ 或绕Y竖直截面查看高度曲线；水平／倾斜几何截面不作为俯视高度剖面。":"Choose XY, YZ or a vertical Y-axis section for heights; horizontal/tilted geometry is not a top-down height profile.")),n.createElement("small",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:110:3"},r?"单位：来源约定，未独立标定。高度仅表示俯视最高层，不覆盖完整翻卷内部结构。全序列指标保持原始范围；ROI与插值剖面不替换全局指标。":"Units: source convention, not independently calibrated. Heights describe the topmost layer, not complete overturning geometry. Sequence metrics retain their scope; ROI and interpolated profiles do not replace them."))}function T0({viewMode:e="all",bundle:a,frame:t,plane:s,sliceIndex:i,rotationAxis:c,angle:r,sectionPercent:o,getReportView:d,onRestoreReportView:m,reportControlRef:f,onDownload:h,catalog:E,reportContext:b,onPause:p,onOpenVelocity:l,unifiedRestore:v=!1}){const{language:g}=ce(),j=g==="zh",x=JSON.stringify([a.runId,a.protocol,a.datasetA,a.datasetB,t]),[u,y]=S.useState(0),[w,_]=S.useState(null),[B,C]=S.useState(null),A=S.useRef(null),O=S.useRef(b);O.current=b,S.useEffect(()=>{B&&B.view.frame!==t&&C(null)},[t,B]),S.useEffect(()=>{const T=new AbortController;let M=!0;return(async()=>{try{const V=await Xa(Ua,ua.indexSha256,a),X=V.frames.find(q=>q.frameId===t);if(!X)throw Error("No spatial resource for selected frame");if(!M)return;const Y=await da(X,{...Bn(a),frameId:t},T.signal);M&&_({key:x,spatial:Y})}catch(V){M&&_({key:x,error:V})}})(),()=>{M=!1,T.abort()}},[a,t,x,u]);const P=w?.key===x?w:null;function k(){if(!P?.spatial||!A.current)throw Error("Wait for verified spatial resources");const T=A.current.capture(),{view:M,scene:V}=d(),X=wr({bundle:a,...T,view:M,catalog:E});return{record:X,canvas:p0(X,T.spatial,V,g)}}async function I(T,M){p?.();const V=O.current,X=await Xa(Ua,ua.indexSha256,a),Y=Sr(T,a,X,{catalog:E}),q=await da(Y.descriptor,{...Bn(a),frameId:Y.view.frame},M);if(Y.diagnosis&&!q.common[Y.diagnosis.hotspot.index])throw Error("Diagnosis hotspot has no paired valid height");if(M.throwIfAborted(),O.current!==V)throw Error("View changed while restoring; retry from the current view");return{...Y,spatial:q}}async function D(T,M){M.throwIfAborted();const V=JSON.stringify([a.runId,a.protocol,a.datasetA,a.datasetB,T.view.frame]);_({key:V,spatial:T.spatial}),C({...T,revision:crypto.randomUUID()}),await m(T.view,M)}const F=B?.view.frame===t?B:null;return n.createElement("section",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:148:9",className:"protocol-spatial","aria-label":"Protocol spatial analysis"},n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:148:86","data-review-frame":t,hidden:e==="report"},P?P.error?n.createElement(Ue,{error:P.error,zh:j,resource:(j?"水面高度与掩码 · 帧 ":"Height and masks · frame ")+t,onRetry:()=>{_(null),y(T=>T+1)}}):n.createElement(D0,{key:x+(F?.revision??""),controlRef:A,restored:F,spatial:P.spatial,plane:s,sliceIndex:i,rotationAxis:c,angle:r,sectionPercent:o,zh:j,onPause:p,onOpenVelocity:l}):n.createElement("p",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:148:155",role:"status"},j?`正在加载帧 ${t} 的同协议空间资源…`:`Loading protocol spatial resources for frame ${t}…`),n.createElement(P0,{bundle:a,zh:j,getSelection:()=>{const T=A.current?.capture();if(!T?.diagnosis||!T.roi)throw Error(j?"请先点击高度图选择热点并设置选区。":"Select a hotspot on a height map and apply an ROI first.");const{hotspot:M,directionDeg:V}=T.diagnosis;return{sourceFrame:T.spatial.descriptor.frameId,ix:M.ix,iz:M.iz,x:M.x,z:M.z,roi:{...T.roi},directionDeg:V}}})),n.createElement("div",{"data-os-loc":"src/field/ProtocolSpatialPanel.jsx:155:8",hidden:e==="height"},d&&n.createElement(x0,{unifiedRestore:v,key:a.runId,controlRef:f,ready:!!P?.spatial,capture:k,prepareImport:I,applyImport:D,onDownload:h,zh:j})))}function $0({slice:e,probe:a,t}){const[s,i]=S.useState(!1),c=S.useMemo(()=>f0(e,a,s?.125:.25),[e,a,s]),{gt:r,pred:o,split:d,seed:m,step:f,separation:h,maxArc:E}=c,b={mask:t("共同有效域边界：插值需要四个有效邻点","Common mask boundary: four valid neighbors required"),slow:t("投影流速低于或等于阈值","Projected speed at or below floor"),limit:t("达到积分长度上限","Arc length limit reached"),grid:t("超出可插值网格","Outside interpolation grid")},p=[m,...r.points,...o.points],l=p.map(_=>_[0]),v=p.map(_=>_[1]),g=Math.max(6*h,Math.max(...l)-Math.min(...l),Math.max(...v)-Math.min(...v)),j=(Math.min(...l)+Math.max(...l))/2,x=(Math.min(...v)+Math.max(...v))/2,u=([_,B])=>[160+(_-j)*250/g,150-(B-x)*250/g],y=(_,B,C)=>{const[A,O]=u(_);return n.createElement("circle",{"data-os-loc":"src/field/StreamlinePanel.jsx:13:53",cx:A,cy:O,r:C,fill:B})},w=_=>_.map(B=>B.toFixed(3)).join(", ");return n.createElement("section",{"data-os-loc":"src/field/StreamlinePanel.jsx:15:9","aria-label":"1049 paired streamlines"},n.createElement("h3",{"data-os-loc":"src/field/StreamlinePanel.jsx:15:55"},t("配对瞬时流线 · XZ 投影","Paired instantaneous streamlines · XZ projection")),n.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:16:2"},t("以当前探针为共同起点；点击上方切片可换起点。图中向右为 +X，向上为 +Z。","Both start at the probe. Click a slice above to change the seed. Right is +X; up is +Z.")," XZ (",w(m),")"),n.createElement("button",{"data-os-loc":"src/field/StreamlinePanel.jsx:17:2",type:"button","aria-pressed":s,onClick:()=>i(!s)},t("半步长复核","Half-step check")),n.createElement("svg",{"data-os-loc":"src/field/StreamlinePanel.jsx:18:2",role:"img","aria-label":t("同起点配对流线","Same-seed paired streamlines"),viewBox:"0 0 320 300",style:{width:"100%",maxWidth:480,background:"#0d2030",borderRadius:8}},[r,o].map((_,B)=>n.createElement("polyline",{"data-os-loc":"src/field/StreamlinePanel.jsx:19:27",key:B,fill:"none",stroke:B?"#ffbf69":"#66d9eb",strokeWidth:"2.5",strokeDasharray:B?"5 3":void 0,points:_.points.map(C=>u(C).join(",")).join(" ")})),[r,o].map((_,B)=>{if(!_.points.length)return null;const[C,A]=u(_.points.at(-1));return n.createElement("rect",{"data-os-loc":"src/field/StreamlinePanel.jsx:20:105",key:B,x:C-3,y:A-3,width:"6",height:"6",fill:"none",stroke:B?"#ffbf69":"#66d9eb"})}),d&&n.createElement("line",{"data-os-loc":"src/field/StreamlinePanel.jsx:21:10",x1:u(d.gt)[0],y1:u(d.gt)[1],x2:u(d.pred)[0],y2:u(d.pred)[1],stroke:"white"}),d&&[d.gt,d.pred].map((_,B)=>n.createElement(n.Fragment,{key:B},y(_,"white",3))),y(m,"#fc6380",4)),n.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:23:2"},t("红点：种子；方框：各自终点；白线：首次达到分离阈值。青色实线：GT；橙色虚线：预测。","Red: seed; squares: endpoints; white connector: first threshold crossing. Cyan solid: GT; orange dashed: prediction.")),n.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:24:2"},d?t("首次分离","First separation")+" · s="+d.arc.toFixed(4)+" · Δ="+d.gap.toFixed(4)+" · GT XZ ("+w(d.gt)+") · Pred XZ ("+w(d.pred)+")":t("共同积分段内未观测到达到阈值的分离。","No threshold crossing observed on the shared trace.")),[r,o].map((_,B)=>n.createElement("p",{"data-os-loc":"src/field/StreamlinePanel.jsx:25:27",key:B},B?t("预测","Prediction"):"GT"," · ",b[_.stop]," · s=",(Math.max(0,_.points.length-1)*f).toFixed(4)," · XZ (",w(_.points.at(-1)??m),")")),n.createElement("small",{"data-os-loc":"src/field/StreamlinePanel.jsx:26:2"},t("同帧定高投影，不是三维流线或跨帧粒子轨迹。双线性插值，归一化方向，中点 RK2；按相同弧长比较。距离使用网格世界坐标单位。","Frozen plane projection, not a 3D streamline or time trajectory. Bilinear interpolation, normalized direction, midpoint RK2; matched arc length in grid world units.")," Δs=",f.toFixed(4)," · Δ≥",h.toFixed(4)," · s≤",E.toFixed(4)," · |vXZ|>1e−8"))}function qs({x:e,y:a,dx:t,dy:s}){if(t===0&&s===0)return n.createElement("circle",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:7:27",cx:e,cy:a,r:".5",fill:"none"});const i=Ws(e,a,t,s).map((c,r)=>`${r===0||r===2?"M":"L"} ${c.join(" ")}`).join(" ");return n.createElement(n.Fragment,null,n.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:9:11",d:i,className:"velocity-arrow-outline"}),n.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:9:62",d:i}))}function W0({arrows:e,view:a,role:t}){const s=t==="gt"?"gtOffset":"predOffset";return n.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:14:9",className:"velocity-arrow-layer",role:"img","aria-label":t==="gt"?"Velocity GT arrows":"Velocity prediction arrows",viewBox:`0 0 ${a.width} ${a.height}`,preserveAspectRatio:"none"},e.points.map(i=>n.createElement("g",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:15:25",key:i.index,"data-sample":i.index},n.createElement(qs,{x:i.x-a.x+.5,y:a.z+a.height-i.z-.5,dx:i[s][0],dy:-i[s][1]}))))}function V0({arrows:e,view:a}){const{language:t}=ce(),s=t==="zh";return e.points.length?e.referenceSpeed?n.createElement(n.Fragment,null,n.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:24:3",className:"velocity-arrow-reference","aria-hidden":"true",viewBox:`0 0 ${a.width} 8`,preserveAspectRatio:"none"},n.createElement(qs,{x:a.width*.04,y:4,dx:e.referenceGridLength,dy:0})),n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:27:3"},s?"参考箭头":"Reference arrow"," ",e.referenceSpeed.toPrecision(4)," m/s · ",s?"两图共用线性比例":"Shared linear scale"," · ",e.points.length," ",s?"个配对格点":"paired grid points")):n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:22:35"},s?"空心点表示 XZ 投影为零":"Hollow markers indicate zero XZ projection"):n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:21:34"},s?"当前采样格点无配对箭头":"No paired arrows at the sampled grid points")}function z0({x:e,z:a,view:t}){const s=t.height-a-.5,i=`M ${e+.5} 0 V ${t.height} M 0 ${s} H ${t.width}`;return n.createElement("svg",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:34:9",className:"velocity-probe-layer","aria-hidden":"true",viewBox:`0 0 ${t.width} ${t.height}`,preserveAspectRatio:"none"},n.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:35:3",d:i,className:"velocity-probe-outline"}),n.createElement("path",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:35:54",d:i}))}function Ys({slice:e,angles:a,mode:t,arrows:s,view:i,zoom:c,frame:r,probe:o,setProbe:d,ranges:m}){const{language:f}=ce(),h=f==="zh",E=e.roiView,b=!c&&E?[E.x/Math.max(1,e.width-1),(E.x+E.width-1)/Math.max(1,e.width-1),E.z/Math.max(1,e.height-1),(E.z+E.height-1)/Math.max(1,e.height-1)]:null,p=o[0]-i.x,l=o[1]-i.z,v=p>=0&&p<i.width&&l>=0&&l<i.height,g=mt(t,f);return n.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:49:9",className:"velocity-triptych"},g.map(({key:j,title:x,label:u,palette:y,role:w})=>{const _=j==="direction"?a.degrees:e[j],B=j==="direction"?a.mask:e.commonMask,C=m[w?"speed":j],A=w?"speed":j==="speedDelta"?"delta":"error",O=P=>P===0?"0":P.toPrecision(5);return n.createElement("figure",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:55:10",key:u,"data-review-frame":r,"data-review-slice":u+" Y "+e.sliceIndex},n.createElement("figcaption",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:56:4"},x," · ",h?"帧":"Frame"," ",r," · Y ",e.sliceIndex),n.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:57:4",className:"velocity-map"},n.createElement(ct,{label:u,slice:{width:e.width,height:e.height,values:_},maskSlice:{values:B},range:C,palette:y,plane:"xz",viewport:i,aspect:i.width*e.stepX/(i.height*e.stepZ),region:b,onCrosshair:P=>d([i.x+Math.min(i.width-1,Math.floor(P[0]*i.width)),i.z+Math.min(i.height-1,Math.floor(P[1]*i.height))])}),w&&s&&n.createElement(W0,{arrows:s,view:i,role:w}),v&&n.createElement(z0,{x:p,z:l,view:i})),n.createElement("div",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:67:4",className:"velocity-scale "+A}),n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:68:4"},O(C[0])," → ",j==="speedDelta"?"0 → ":"",O(C[1]),j==="direction"?"°":" m/s",w?h?" · GT / 预测共用色标":" · Shared GT / prediction color scale":""),n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:69:4"},"X → · Z ↑ · ",j==="direction"?h?"棋盘为夹角不可判定":"Checkerboard: direction angle unavailable":h?"棋盘为不在共同有效域":"Checkerboard: outside common valid support"),j==="speedDelta"&&n.createElement("small",{"data-os-loc":"src/field/VelocitySliceMaps.jsx:70:25"},h?"蓝色为预测偏慢，红色为预测偏快":"Blue: prediction slower; red: prediction faster"),w&&s&&n.createElement(V0,{arrows:s,view:i}))}))}const je=(e,a=6)=>Number.isFinite(e)?e.toFixed(a):"N/A",fs=e=>e==null?"N/A":(e*100).toFixed(2)+"%",ia=["xmin","xmax","zmin","zmax"],Wa=1e-8;function ms({value:e,angle:a,local:t}){const{language:s}=ce(),i=(r,o)=>s==="zh"?r:o,c=e.counts;return n.createElement("section",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:21:9",className:"velocity-metrics","aria-label":t?"Velocity ROI metrics":"Velocity slice metrics"},n.createElement("h3",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:22:3"},t?i("ROI · 当前 Y 层","ROI · current Y layer"):i("全切片 · 当前 Y 层","Whole slice · current Y layer")),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:23:3"},i("平均 E ","Mean E "),n.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:23:28"},je(e.meanE)),i(" · 最大 E "," · Maximum E "),n.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:23:82"},je(e.maximum?.value)),i(" · 平均 Δs "," · Mean Δs "),n.createElement("b",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:23:144"},je(e.meanSpeedDelta))),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:24:3"},i("最大 E 的 XYZ：","Maximum E at XYZ: "),e.maximum?.world.map(r=>je(r,5)).join(", ")??"N/A"),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:25:3"},i("候选 ","Candidates "),c.candidate,i(" · GT 资格 "," · GT eligible "),c.gtEligible,i(" · 共同有效 "," · Common valid "),c.common,i(" · 非有限排除 "," · Nonfinite excluded "),c.nonfiniteExcluded),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:26:3"},i("覆盖率：共同 / 候选 ","Coverage: common / candidate "),fs(e.coverageCandidate),i(" · 共同 / GT 资格 "," · Common / GT eligible "),fs(e.coverageGT)),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:27:3"},i("平均三维夹角 ","Mean 3D angle "),je(a.meanDegrees,3),i("° · 夹角有效 ","° · Angle valid "),a.count," / ",c.common,i(" · 低速排除 "," · Low-speed excluded "),a.excludedLowSpeedCount??"N/A"),n.createElement("small",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:28:3"},i("仅 GT 资格 ","GT eligible only "),c.gtOnly,i(" · 仅预测有效 "," · Prediction valid only "),c.predOnly,i(" · 双方掩膜通过 "," · Both masks pass "),c.paired,i("。非有限值另行排除。",". Nonfinite values are excluded separately.")))}function X0({loaded:e,request:a,initial:t}){const{language:s}=ce(),i=(W,K)=>s==="zh"?W:K,{frame:c,lattice:r,alignment:o}=e,[d,m]=S.useState(t?.domain??"collaborator-native"),[f,h]=S.useState(()=>t?.y??r0({...e,hotspotXZ:a.hotspotXZ,domain:"collaborator-native"})),[E,b]=S.useState(t?.roi??a.roiXZ),[p,l]=S.useState(()=>Object.fromEntries(ia.map(W=>[W,String((t?.roi??a.roiXZ)[W])]))),[v,g]=S.useState(""),[j,x]=S.useState(()=>t?.probe??Os(r,a.hotspotXZ)),[u,y]=S.useState(t?.mode??"vectorError"),[w,_]=S.useState(t?.zoom??!1),[B,C]=S.useState(t?.showArrows??!0),[A,O]=S.useState(t?t.tau:Wa),[P,k]=S.useState(A===null?"":String(A)),[I,D]=S.useState(""),F=S.useMemo(()=>f===null?null:Fs({frame:c,lattice:r,alignment:o,plane:"xz",sliceIndex:f,domain:d,roiXZ:E}),[c,r,o,f,d,E]),T=S.useMemo(()=>F?Ds(F,A):null,[F,A]),M=!!(w&&F?.roiView),V=S.useMemo(()=>F&&(M?F.roiView:{x:0,z:0,width:F.width,height:F.height}),[F,M]),X=S.useMemo(()=>B&&V?Ts(F,V,M?4:16):null,[F,B,V,M]),Y=S.useMemo(()=>{let W=0,K=0,ae=0;if(F)for(let Re=0;Re<F.commonMask.length;Re++)F.commonMask[Re]&&(W=Math.max(W,F.speedGT[Re],F.speedPred[Re]),K=Math.max(K,F.vectorError[Re]),ae=Math.max(ae,Math.abs(F.speedDelta[Re])));return{speed:[0,W||1],vectorError:[0,K||1],speedDelta:[-(ae||1),ae||1],direction:[0,180]}},[F]),q=F?j[0]+F.width*j[1]:null,z=F&&j[0]>=0&&j[0]<F.width&&j[1]>=0&&j[1]<F.height&&F.commonMask[q],$=S.useMemo(()=>F?{schema:"oceanscope.velocity-diagnostic-data.v1",scope:`${o.frame} native velocity diagnosis; diagnostic export only`,frame:o.frame,source:o.source,resource:o.resource,protocolSha256:o.protocolSha256,lattice:r,unitClaim:o.unitClaim,unitEvidence:o.unitEvidence,vectorBasis:o.vectorBasis,domain:d,domainDefinition:d==="collaborator-native"?o.domainDefinition:{id:d,rule:"Both velocity-valid masks > 0 AND six finite components; no tank or SDF depth filter"},yIndex:f,yWorld:r.origin[1]+f*r.axisSteps[1][1],surfaceRequest:a,roiXZ:E,probe:{index:q,xyz:F.worldAt(q),common:!!z,speedGT:z?F.speedGT[q]:null,speedPred:z?F.speedPred[q]:null,E:z?F.vectorError[q]:null,speedDelta:z?F.speedDelta[q]:null,vectorGT:z?Array.from(F.vectorsGT.subarray(3*q,3*q+3)):null,vectorPred:z?Array.from(F.vectorsPred.subarray(3*q,3*q+3)):null,angleDegrees:z&&T.mask[q]?T.degrees[q]:null},whole:F.whole,local:F.local,direction:{tau:A,unit:"m/s (source convention)",thresholdSource:A===null?"disabled":A===Wa?"legacy preview numerical epsilon":"user diagnostic input",whole:T.whole,local:T.local},display:{mode:u,view:V,zoomed:M,ranges:Y,arrows:X}}:null,[F,o,r,d,f,a,E,q,z,T,A,u,V,M,Y,X]),[N,J]=S.useState(null),[Q,be]=S.useState(null),[le,ye]=S.useState(null);S.useEffect(()=>be(null),[s]);const we=Q?.data===$&&Q.language===s?Q.files:null;S.useEffect(()=>()=>{for(const W of Object.values(we??{}))URL.revokeObjectURL(W.href)},[we]),S.useEffect(()=>{if(!$){J(null);return}const W=URL.createObjectURL(new Blob([JSON.stringify($,null,2)+`
`],{type:"application/json"}));return J({data:$,url:W}),()=>URL.revokeObjectURL(W)},[$]);function We(){try{const W=l0($,o,"09dcfb8802587565ef79b13ee20aed3c2c89f535"),K=h0(W,F,T,X,s).toDataURL("image/png"),ae=dt({stem:`oceanscope-velocity-${o.frame}-y${f}`,record:W,csv:d0(W,F,T),previewUrl:K});be({data:$,files:ae,language:s}),ye(null)}catch(W){ye(W)}}function Me(){const W=Object.fromEntries(ia.map(K=>[K,Number(p[K])]));if(ia.some(K=>!p[K].trim()||!Number.isFinite(W[K]))||W.xmin>W.xmax||W.zmin>W.zmax){g(i("请填写完整有限数字，最小值不能大于最大值。原选区未改变。","Enter finite values for every bound, with minimum ≤ maximum. The ROI is unchanged."));return}b(W),g("")}function Be(W){W.preventDefault();const K=P.trim()===""?null:Number(P);if(K!==null&&(!Number.isFinite(K)||K<0)){D(i("请输入非负有限数，或留空以停用夹角。","Enter a finite nonnegative number, or leave blank to disable angles."));return}O(K),D("")}return n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:102:3"},i("来自水面热点 X ","From surface hotspot X "),je(a.hotspotXZ.x,5),"，Z ",je(a.hotspotXZ.z,5),i("；保留 XZ 选区。初始 Y 取该列默认域内最上方有效格层，之后由你手动选择，不随水面起伏。","; XZ ROI retained. Initial Y is the highest valid layer in this column within the default domain. Subsequent Y selection is manual and does not follow the surface.")),n.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:103:3",className:"velocity-controls"},n.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:103:38"},i("有效域 ","Valid domain "),n.createElement("select",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:103:72","aria-label":"Velocity domain",value:d,onChange:W=>m(W.target.value)},n.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:103:164",value:"collaborator-native"},i("合作者原生域 · 已核对","Collaborator native domain · verified")),n.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:103:268",value:"common-finite-exploration"},i("共同有限域 · 探索","Common finite domain · exploration")))),n.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:103:390"},i("XZ 定高切片 · Y 索引 ","Fixed-height XZ slice · Y index "),n.createElement("input",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:103:454","aria-label":"Velocity Y index",type:"number",min:"0",max:r.dimensions[1]-1,step:"1",value:f??"",onChange:W=>{const K=W.target.value.trim(),ae=Number(K);K&&Number.isInteger(ae)&&ae>=0&&ae<r.dimensions[1]&&h(ae)}})),n.createElement("output",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:103:714","aria-label":"Velocity Y world"},"Y = ",f===null?i("未选择","Not selected"):je(r.origin[1]+f*r.axisSteps[1][1],8))),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:104:3",className:"velocity-domain"},d==="collaborator-native"?i("合作者原生域：X [11,212)、Z [11,105)，GT vel_valid > 0、GT SDF < −0.10（float32）、预测 vel_valid > 0，再排除非有限速度。","Collaborator native domain: X [11,212), Z [11,105), GT vel_valid > 0, GT SDF < −0.10 (float32), prediction vel_valid > 0; nonfinite velocities excluded."):i("探索域：双方速度有效且六分量有限；不应用水槽裁剪或 GT 深水阈值，不作协议评分。","Exploration domain: both velocity masks valid and all six components finite; no tank crop or GT deep-water threshold. Not protocol scoring."),i(" 当前显示为一层，非整帧体积评分。"," Showing one layer, not a full-frame volume score.")),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:105:3"},i("速度单位沿用来源声明 m/s；坐标沿用来源声明 m。物理尺度、时间尺度与向量基底尚未独立标定。E = ‖预测向量 − GT 向量‖；Δs = 预测流速 − GT 流速。","Velocity m/s and coordinates m follow source declarations. Physical scale, time scale and vector basis have not been independently calibrated. E = ‖prediction vector − GT vector‖; Δs = prediction speed − GT speed.")),F?n.createElement(n.Fragment,null,n.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:107:4",className:"velocity-controls"},n.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:108:5"},i("第三图 ","Third map "),n.createElement("select",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:108:36","aria-label":"Velocity comparison map",value:u,onChange:W=>y(W.target.value)},n.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:109:6",value:"vectorError"},i("速度向量误差 E","Velocity vector error E")),n.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:109:84",value:"speedDelta"},i("流速大小差 Δs","Speed difference Δs")),n.createElement("option",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:109:157",value:"direction"},i("三维方向夹角","3D direction angle")))),n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:111:5",type:"button","aria-pressed":B,onClick:()=>C(W=>!W)},i("配对箭头","Paired arrows")),n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:112:5",type:"button","aria-pressed":M,disabled:!F.roiView,onClick:()=>_(!M)},M?i("返回全切片","Back to whole slice"):i("放大 ROI","Zoom to ROI"))),n.createElement("form",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:114:4",className:"velocity-controls",onSubmit:Be},n.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:115:5"},i("方向低速阈值（m/s）","Direction low-speed threshold (m/s)"),n.createElement("input",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:115:68","aria-label":"Velocity direction threshold",inputMode:"decimal",value:P,onChange:W=>k(W.target.value)})),n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:116:5",type:"submit"},i("应用方向阈值","Apply direction threshold")),n.createElement("output",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:117:5","aria-label":"Velocity applied threshold"},A===null?i("夹角停用","Angles disabled"):`${i("当前 τ = ","Current τ = ")}${A} m/s · ${A===Wa?i("沿用旧预览数值阈值","Legacy preview numerical threshold"):i("自定诊断阈值","Custom diagnostic threshold")}`)),I&&n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:119:15",role:"alert"},I),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:120:4"},i("双方完整流速均大于 τ 才计算三维夹角。阈值用于诊断，等待合作者确认，留空可停用夹角。箭头仅显示 XZ 投影，空心点表示投影为零。","The full speed on both sides must exceed τ to calculate a 3D angle. This diagnostic threshold awaits collaborator confirmation; leave blank to disable angles. Arrows show only XZ projections; hollow markers indicate zero projection.")),n.createElement(Ys,{slice:F,angles:T,mode:u,arrows:X,view:V,zoom:M,frame:o.frame,probe:j,setProbe:x,ranges:Y}),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:122:4"},i("箭头显示 XZ 投影，夹角使用 XYZ 三个分量。当前切片位于固定 Y 层。","Arrows show the XZ projection. The angle uses all three components on this fixed Y slice.")),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:123:4","aria-label":"Velocity probe"},i("同位置探针 XYZ (","Same-position probe XYZ ("),$.probe.xyz.map(W=>je(W,5)).join(", "),") · ",z?i("共同有效","Common valid"):i("不在共同有效域","Outside common valid domain"),i(" · GT 流速 "," · GT speed "),je($.probe.speedGT),i(" · 预测流速 "," · Prediction speed "),je($.probe.speedPred)," · E ",je($.probe.E)," · Δs ",je($.probe.speedDelta)),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:124:4","aria-label":"Velocity probe direction"},i("三维夹角 ","3D angle "),$.probe.angleDegrees===null?"N/A":je($.probe.angleDegrees,4)+"°",z&&$.probe.angleDegrees===null&&(A===null?i("（夹角已停用）"," (angles disabled)"):i("（至少一侧低于或等于阈值）"," (at least one speed is at or below the threshold)"))," · GT XYZ (",$.probe.vectorGT?.map(W=>je(W)).join(", ")??"N/A",i(") · 预测 XYZ (",") · Prediction XYZ ("),$.probe.vectorPred?.map(W=>je(W)).join(", ")??"N/A",i(") · Y 为切片法向",") · Y is normal to the slice")),n.createElement("form",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:4",onSubmit:W=>{W.preventDefault(),Me()}},n.createElement("fieldset",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:54",className:"velocity-controls"},n.createElement("legend",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:94"},i("速度 ROI · 世界坐标 XZ（不改变 Y）","Velocity ROI · world XZ coordinates (Y unchanged)")),ia.map(W=>n.createElement("label",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:208",key:W},W,n.createElement("input",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:226","aria-label":"Velocity ROI "+W,type:"text",inputMode:"decimal",value:p[W],onChange:K=>l(ae=>({...ae,[W]:K.target.value}))}))),n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:379",type:"submit"},i("应用速度选区","Apply velocity ROI")))),v&&n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:128:473",role:"alert"},v),Number(o.frame)===1049&&d==="collaborator-native"&&n.createElement($0,{slice:F,probe:j,t:i}),n.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:130:4",className:"velocity-statistics"},n.createElement(ms,{value:F.whole,angle:T.whole}),n.createElement(ms,{value:F.local,angle:T.local,local:!0})),n.createElement("section",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:131:4",className:"velocity-report","aria-label":"Velocity report"},n.createElement("h3",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:132:5"},i("可恢复速度报告","Restorable velocity report")),n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:133:5"},i("用当前切片、选区和显示设置生成一份报告。配套 JSON 可从“报告与恢复”重新打开。","Generate a report from the current slice, ROI and display settings. Reopen its JSON in Reports & restore.")),n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:134:5",type:"button",onClick:We},i("生成当前速度报告","Generate current velocity report")),n.createElement(Ue,{error:le,zh:s==="zh"}),we&&n.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:136:19",className:"velocity-report-downloads"},Object.entries(we).map(([W,K])=>n.createElement("a",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:137:54",key:W,href:K.href,download:K.name},W==="json"?i("下载可恢复速度 JSON","Download restorable velocity JSON"):i("下载速度报告 ","Download velocity report ")+W.toUpperCase()))),Q&&!we&&n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:139:28",role:"status"},i("视图已更新。请重新生成速度报告。","The view or language changed. Generate the velocity report again."))),N?.data===$&&n.createElement("a",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:141:28",download:`oceanscope-velocity-${o.frame}-y${f}-data.json`,href:N.url},i("导出速度诊断数据 JSON（不用于恢复）","Export velocity diagnostic data JSON (not restorable)"))):n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:106:11",role:"status"},i("热点列内没有共同有效点。请选择明确的 Y 层；不会移到其他 XZ。","No common valid point in the hotspot column. Select an explicit Y layer; XZ will not move.")))}function Z0({frameNumber:e,request:a,restored:t}){const{language:s}=ce(),i=(h,E)=>s==="zh"?h:E,[c,r]=S.useState(null),[o,d]=S.useState(0),m=a?.frame===e&&!!Ea(e);S.useEffect(()=>{if(!m||t){r(null);return}const h=new AbortController;let E=!0;return r(null),Is(e,{signal:h.signal}).then(b=>{E&&r({frameNumber:e,request:a,loaded:b})}).catch(b=>{E&&r({frameNumber:e,request:a,error:b})}),()=>{E=!1,h.abort()}},[e,a,m,o,t]);const f=t??(c?.frameNumber===e&&c?.request===a?c:null);return n.createElement("div",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:153:9",className:"velocity-diagnosis"},n.createElement("h2",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:153:45"},i("速度与方向诊断 · 帧 ","Velocity and direction diagnosis · frame "),e),m?f?.error?n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:153:356",role:"alert"},i("速度资源加载失败：","Velocity resource failed to load: "),f.error.message," ",n.createElement("button",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:153:449",onClick:()=>d(h=>h+1)},i("重试速度资源","Retry velocity resource"))):f?.loaded?n.createElement(X0,{key:o,loaded:f.loaded,request:a,initial:t?.view}):n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:153:651",role:"status"},i("正在读取并校验 ","Reading and verifying "),e,i(" 原始值诊断资源…"," raw-value diagnostic resources…")):n.createElement("p",{"data-os-loc":"src/field/VelocityDiagnosisPanel.jsx:153:141",role:"status"},i("当前帧 ","Frame "),e,i(" 暂无对应的速度报告视图。请选择已核验帧，并从该帧的水面热点或报告进入。"," has no velocity report view. Choose a verified frame and enter from its surface hotspot or report.")))}const Ls="oceanscope.velocity-comparison.v1",G0=[1001,1049,1096],H0="best-1027",q0="raw-reference-96-e81b8955734e",bt="collaborator-native",pt=1e-8,et=28,Y0=[166,186,80,100],L0=4,U0={mode:"direction",probe:[176,90],arrows:!0};function Us(){const e=G0.map(Ea),{lattice:a,protocolSha256:t,domainDefinition:s}=e[0],[i,c,r,o]=Y0,d=b=>a.origin[0]+b*a.axisSteps[0][0],m=b=>a.origin[2]+b*a.axisSteps[2][2],f={xmin:d(i),xmax:d(c),zmin:m(r),zmax:m(o)},h={axis:"xz",yIndex:et,yWorld:a.origin[1]+et*a.axisSteps[1][1]},E=e.map(b=>({frame:b.frame,gtSha256:b.source.gt.sha256,predSha256:b.source.prediction.sha256,packedSha256:b.resource.packedSha256,decodedSha256:b.resource.decodedSha256}));return{alignments:e,roi:f,plane:h,domain:bt,tau:pt,domainDefinition:s,protocolSha256:t,sources:E,lattice:a}}async function J0(e,a=Is){const{alignments:t,roi:s,lattice:i,domainDefinition:c}=Us(),r=[];for(const o of t){e.throwIfAborted();const d=await a(o.frame,{signal:e});if(e.throwIfAborted(),d.alignment!==o||JSON.stringify(d.lattice)!==JSON.stringify(i)||JSON.stringify(o.domainDefinition)!==JSON.stringify(c))throw Error("Velocity comparison requires the verified common lattice and protocol");const m=Fs({...d,plane:"xz",sliceIndex:et,domain:bt,roiXZ:s});r.push({frame:o.frame,slice:m,angles:Ds(m,pt)})}return K0(r)}function K0(e){const a=e[0].slice,t=new Uint8Array(a.commonMask.length),s=new Uint8Array(t.length),i=[];let c=0,r=0,o=0,d=0,m=0,f=0;for(let b=0;b<t.length;b++)if(!(!a.roiMask[b]||!a.candidateMask[b])&&(i.push(b),!!e.every(({slice:p})=>p.commonMask[b]))){t[b]=1,c++,e.every(({angles:p})=>p.mask[b])&&(s[b]=1,r++);for(const{slice:p}of e){o=Math.max(o,p.speedGT[b],p.speedPred[b]),d=Math.max(d,p.vectorError[b]),m=Math.max(m,Math.abs(p.speedDelta[b]));for(const l of[p.vectorsGT,p.vectorsPred])f=Math.max(f,Math.hypot(l[b*3],l[b*3+2]))}}const h=a.roiView,E=e.map(({frame:b,slice:p,angles:l})=>{let v=0,g=0,j=0;for(const u of i)t[u]&&(v+=p.vectorError[u],g+=p.speedDelta[u]),s[u]&&(j+=l.degrees[u]);const x={...p,commonMask:t};return{frame:b,nativeMask:p.commonMask,slice:x,angles:{...l,mask:s},arrows:Ts(x,h,L0,f),summary:{frame:b,nativeRoi:p.local.counts.common,meanE:c?v/c:null,meanDelta:c?g/c:null,meanAngle:r?j/r:null}}});return{view:h,rows:E,roiIndices:i,paired:c,anglePaired:r,ranges:{speed:[0,o||1],vectorError:[0,d||1],speedDelta:[-(m||1),m||1],direction:[0,180]}}}function Q0(e,a,t){const{roi:s,plane:i,protocolSha256:c,sources:r,domainDefinition:o}=Us();return{schema:Ls,createdAt:new Date().toISOString(),source:{caseId:H0,runId:q0,protocolSha256:c,codeRevision:t,frames:r},scope:{preset:"1049-a-fixed-roi",plane:i,roi:s,domain:bt,domainDefinition:o,tau:pt},view:a,result:{roiCandidates:e.roiIndices.length,shared:e.paired,sharedAngles:e.anglePaired,ranges:e.ranges,arrowReferenceSpeed:a.arrows?e.rows[0].arrows.referenceSpeed:null,arrowIndices:a.arrows?e.rows[0].arrows.points.map(d=>d.index):[],frames:e.rows.map(d=>d.summary)}}}function el(e,a){const t=["frame,native_index,x,y,z,frame_valid,shared_valid,shared_angle_valid,probe,arrow,gt_speed,pred_speed,vector_error,speed_delta,direction_degrees"];for(const{frame:s,nativeMask:i,slice:c,angles:r,arrows:o}of e.rows){const d=new Set(a.arrows?o.points.map(f=>f.index):[]),m=a.probe[0]+c.width*a.probe[1];for(const f of e.roiIndices){const h=c.commonMask[f],E=r.mask[f];t.push([s,f,...c.worldAt(f),i[f],h,E,+(f===m),Number(d.has(f)),...h?[c.speedGT[f],c.speedPred[f],c.vectorError[f],c.speedDelta[f]]:["","","",""],E?r.degrees[f]:""].join(","))}}return t.join(`
`)+`
`}const tn=(e,a=5)=>Number.isFinite(e)?e.toFixed(a):"N/A";function nl({data:e,initialView:a}){const{language:t}=ce(),s=(y,w)=>t==="zh"?y:w,[i,c]=S.useState(a),[r,o]=S.useState(null),[d,m]=S.useState(null);S.useEffect(()=>o(null),[t]);const f=r?.view===i&&r.language===t?r.files:null;S.useEffect(()=>()=>{for(const y of Object.values(f??{}))URL.revokeObjectURL(y.href)},[f]);const{paired:h,anglePaired:E,roiIndices:b,rows:p,ranges:l}=e,v=i.arrows?p[0].arrows.points.length:0,g=i.probe[0]+i.probe[1]*p[0].slice.width,j=p[0].slice.worldAt(g);function x(y){c(w=>({...w,...y})),m(null)}function u(){try{const y=Q0(e,i,"09dcfb8802587565ef79b13ee20aed3c2c89f535"),w=g0(y,e,t).toDataURL("image/png"),_=dt({stem:"oceanscope-best-1027-velocity-comparison",record:y,previewUrl:w,csv:el(e,i)});o({view:i,files:_,language:t}),m(null)}catch(y){m(y)}}return n.createElement(n.Fragment,null,n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:43:3"},s("Best_1027 · XZ 固定选区 · Y=28（约 −0.10 m）· 合作者原生有效域 · 方向阈值 1e−8 m/s","Best_1027 · fixed XZ ROI · Y=28 (about −0.10 m) · collaborator native domain · direction threshold 1e−8 m/s")),n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:44:3"},s("1049 A 的 ROI 为 X [−1.35, −0.35]、Z [1.45, 2.45] m。三帧共同有效 ","1049 A ROI: X [−1.35, −0.35], Z [1.45, 2.45] m. Common valid across three frames: "),h," / ",b.length,s("，其中三帧均可判定夹角 ","; angles valid in all three: "),E,s("。图和均值使用对应的共同格点，棋盘表示该格点未纳入。",". Maps and means use the corresponding common grid points; checkerboards mark excluded points.")),n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:45:3"},s("流速共用 0–","Shared speed range 0–"),tn(l.speed[1]),s(" m/s。配对箭头共用比例和采样位置"," m/s. Paired arrows share a scale and sampling positions"),i.arrows&&s("，每帧 ",", with ")+v+s(" 个点"," points per frame"),s("。速度和坐标单位沿用来源声明。",". Velocity and coordinate units follow source declarations.")),n.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:46:3",className:"velocity-controls"},n.createElement("label",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:47:4"},s("第三图 ","Third map "),n.createElement("select",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:47:35","aria-label":"Three-frame comparison map",value:i.mode,onChange:y=>x({mode:y.target.value})},n.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:48:5",value:"direction"},s("三维方向夹角","3D direction angle")),n.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:49:5",value:"vectorError"},s("速度向量误差 E","Velocity vector error E")),n.createElement("option",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:50:5",value:"speedDelta"},s("流速大小差 Δs","Speed difference Δs")))),n.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:52:4",type:"button","aria-pressed":i.arrows,onClick:()=>x({arrows:!i.arrows})},s("三帧配对箭头","Three-frame paired arrows"))),n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:54:3","aria-label":"Three-frame probe"},s("同步探针 XYZ (","Synchronized probe XYZ ("),j.map(y=>tn(y)).join(", "),") · ",p[0].slice.commonMask[g]?s("三帧共同有效","Common valid in all three frames"):s("不在三帧共同有效格点内","Outside the three-frame common grid points")),n.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:55:3",className:"velocity-comparison-table"},n.createElement("table",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:55:46"},n.createElement("caption",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:56:4"},s("固定 ROI · 各帧覆盖与共同样本指标","Fixed ROI · frame coverage and common-sample metrics")),n.createElement("thead",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:4"},n.createElement("tr",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:11"},n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:15"},s("帧","Frame")),n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:40"},s("本帧有效 / 候选","Frame valid / candidate")),n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:91"},s("共同格点平均 E（m/s）","Common-point mean E (m/s)")),n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:148"},s("平均 Δs（m/s）","Mean Δs (m/s)")),n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:57:190"},s("平均夹角","Mean angle")))),n.createElement("tbody",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:4"},p.map(({frame:y,summary:w})=>n.createElement("tr",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:43",key:y},n.createElement("th",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:59",scope:"row"},y),n.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:87"},w.nativeRoi," / ",b.length),n.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:137"},tn(w.meanE)),n.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:169"},tn(w.meanDelta)),n.createElement("td",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:58:205"},tn(w.meanAngle,2),"°")))))),p.map(({frame:y,slice:w,angles:_,arrows:B})=>n.createElement("section",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:60:49",key:y,className:"velocity-comparison-row","aria-label":`Velocity comparison frame ${y}`},n.createElement("h3",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:61:4"},s("帧 ","Frame "),y),n.createElement(Ys,{frame:y,slice:w,angles:_,ranges:l,mode:i.mode,arrows:i.arrows?B:null,view:e.view,zoom:!0,probe:i.probe,setProbe:C=>x({probe:C})}),w.commonMask[g]?n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:64:31"},s("探针 E ","Probe E "),tn(w.vectorError[g])," m/s · Δs ",tn(w.speedDelta[g]),s(" m/s · 夹角 "," m/s · Angle "),_.mask[g]?tn(_.degrees[g],2)+"°":"N/A"):null)),n.createElement("section",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:66:3",className:"velocity-report","aria-label":"Three-frame velocity report"},n.createElement("h3",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:67:4"},s("可恢复三帧报告","Restorable three-frame report")),n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:68:4"},s("CSV 保留三帧各自的 ROI 候选格点与有效标记。JSON 可在“报告与恢复”重新打开，指标会从核验后的资源重算。","CSV retains each frame’s ROI candidate grid points and validity flags. Reopen JSON in Reports & restore; metrics are recomputed from verified resources.")),n.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:69:4",type:"button",onClick:u},s("生成三帧速度报告","Generate three-frame velocity report")),n.createElement(Ue,{error:d,zh:t==="zh"}),r&&!f&&n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:71:25",role:"status"},s("视图或语言已更新，请重新生成报告。","The view or language changed. Generate the report again.")),f&&n.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:72:14",className:"velocity-report-downloads"},Object.entries(f).map(([y,w])=>n.createElement("a",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:73:5",key:y,href:w.href,download:w.name},s("下载三帧报告 ","Download three-frame report "),y.toUpperCase())))))}function al({restored:e}){const{language:a}=ce(),t=(d,m)=>a==="zh"?d:m,[s,i]=S.useState(null),[c,r]=S.useState(0);S.useEffect(()=>{if(e)return;const d=new AbortController;return i(null),J0(d.signal).then(m=>{d.signal.aborted||i({data:m})}).catch(m=>{d.signal.aborted||i({error:m})}),()=>d.abort()},[e,c]);const o=e??s;return n.createElement("div",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:95:9",className:"velocity-diagnosis"},n.createElement("h2",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:96:3"},t("三帧速度对照 · 1001 / 1049 / 1096","Three-frame velocity comparison · 1001 / 1049 / 1096")),o?.data?n.createElement(nl,{data:o.data,initialView:e?.view??U0}):o?.error?n.createElement(n.Fragment,null,n.createElement(Ue,{error:o.error,zh:a==="zh"}),n.createElement("button",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:98:84",type:"button",onClick:()=>r(d=>d+1)},t("重试三帧资源","Retry three-frame resources"))):n.createElement("p",{"data-os-loc":"src/field/VelocityComparisonPanel.jsx:99:6",role:"status"},t("正在核验三帧速度资源并计算共同有效格点…","Verifying three-frame velocity resources and computing common valid grid points…")))}function tl({enabled:e,open:a,active:t,forceModal:s=!1,label:i,closeLabel:c,onClose:r,returnFocusRef:o,children:d}){const[m,f]=S.useState(()=>e&&!!globalThis.matchMedia?.("(max-width:900px)").matches),h=e&&(m||s),E=S.useRef(null),b=S.useRef(null),p=S.useRef(a&&t),l=S.useRef(!1);S.useEffect(()=>{if(!e)return;const x=globalThis.matchMedia?.("(max-width:900px)");if(!x)return;const u=()=>f(x.matches);return u(),x.addEventListener("change",u),()=>x.removeEventListener("change",u)},[e]),S.useEffect(()=>{if(!e)return;const x=E.current;return h&&(a&&t&&!x.open?x.showModal():x.open&&(!a||!t)&&x.close()),a&&t&&(h||!p.current)&&b.current?.focus({preventScroll:!0}),!a&&l.current&&(l.current=!1,o.current?.focus({preventScroll:!0})),p.current=a&&t,()=>{h&&x.open&&x.close()}},[e,h,a,t]);function v(){l.current=!0,r()}function g(x){if(e){if(x.key==="Escape"){x.preventDefault(),x.stopPropagation(),v();return}if(h&&x.key==="Tab"){const u=[...E.current.querySelectorAll("button,input,select,textarea,a[href],summary,[tabindex]")].filter(_=>!_.disabled&&_.tabIndex>=0&&_.getClientRects().length),y=u[0],w=u.at(-1);x.shiftKey&&document.activeElement===y?(x.preventDefault(),w?.focus()):!x.shiftKey&&document.activeElement===w&&(x.preventDefault(),y?.focus())}}}const j=h?"dialog":"aside";return n.createElement(j,{ref:E,id:"analysis-settings",className:"field-sidebar","aria-label":i,onCancel:x=>{x.preventDefault(),v()},onKeyDown:g,onClick:x=>{if(!h||x.target!==x.currentTarget)return;const u=x.currentTarget.getBoundingClientRect();(x.clientX<u.left||x.clientX>u.right||x.clientY>u.bottom)&&v()}},e&&n.createElement("div",{"data-os-loc":"src/field/WorkbenchSettings.jsx:42:13",className:"demo-settings-header"},n.createElement("button",{"data-os-loc":"src/field/WorkbenchSettings.jsx:42:51",ref:b,className:"demo-close-settings",onClick:v},c)),d)}function ca(e,a,t="application/json"){const s=URL.createObjectURL(new Blob([a],{type:t})),i=document.createElement("a");i.href=s,i.download=e,i.click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)}function sl(e){if(!e?.dimensions||!e.axisSteps)return null;const a=[];for(let t=0;t<8;t++)a.push(e.origin.map((s,i)=>s+e.dimensions.reduce((c,r,o)=>c+(t>>o&1)*(r-1)*e.axisSteps[o][i],0)));return{min:[0,1,2].map(t=>Math.min(...a.map(s=>s[t]))),max:[0,1,2].map(t=>Math.max(...a.map(s=>s[t])))}}function il({focusedLayout:e=!1,workspace:a="3d",onWorkspace:t=()=>{},evaluation:s=null,evaluationError:i="",unifiedRestore:c=!1,onCancelImport:r,onRetryEvaluation:o,comparison:d,processing:m,activeGroup:f,onActiveGroup:h,setup:E,expectedFrames:b,metricsOverride:p,sourceCase:l,viewApiRef:v,initialView:g,onViewReady:j,onViewRestored:x,restoring:u=!1,frameSplit:y=d.frameSplit,readOnly:w=!1,active:_=!0}){const{tr:B,language:C}=ce(),A=C==="zh",O=e,P=O?"3d":"time",[k,I]=S.useState(null),D=S.useRef(null);S.useRef(0);const F=!!k&&a==="slices",T=!!k?.comparison&&a==="slices";l?.id,s?.runId,S.useEffect(()=>{if(!O||a!=="3d")return;const R=()=>{window.location.hash==="#analysis-summary"&&document.getElementById("analysis-summary")?.scrollIntoView({block:"start"})};return R(),window.addEventListener("hashchange",R),()=>window.removeEventListener("hashchange",R)},[O,a,s]);const M=g?.settings,V=S.useRef(null),X=S.useRef(null),Y=S.useRef(!1),[q,z]=S.useState(""),$=e&&d.id==="best-1027",N=!!l&&d.id!=="best-1027",{presenting:J}=xi(),[Q,be]=S.useState(()=>({presenting:J,open:!J&&!globalThis.matchMedia?.("(max-width:900px)").matches})),le=Q.presenting===J&&Q.open;function ye(R){be(U=>({presenting:J,open:typeof R=="function"?R(U.presenting===J&&U.open):R}))}S.useEffect(()=>{e&&X.current?.pause()},[a]);const we=S.useRef(null),[We,Me]=S.useState(!0),Be=S.useRef(null),[W,K]=S.useState({subset:"all",metric:"height",grid:"coarse"}),[ae,Re]=S.useState(null),[Ve,Je]=S.useState(null),[rn,Zn]=S.useState(0),[An,bn]=S.useState(M?.shading||"original");S.useEffect(()=>{J&&X.current?.pause()},[J]);const[Gn,_a]=S.useState(null),[Hn,Cn]=S.useState(M?.errorScale||{locked:!1,limit:1}),pn=S.useRef(null),Z=sr(d);function H(){pn.current&&(pn.current.open=!0,pn.current.scrollIntoView?.({block:"start"}))}const ee=JSON.stringify(m?.lattice??null),me=S.useMemo(()=>JSON.parse(ee),[ee]),xe=S.useMemo(()=>m?.frames?.map(R=>R.frame)||[],[m?.frames]),Se=S.useMemo(()=>Vn(l),[l]),ve=S.useMemo(()=>f==="sdf"&&Se.length?Se:xe,[f,Se,xe]),qe=s?.frameIds??ve,[L,Ke]=S.useState(M?.frame??($?1049:null)),[ne,un]=S.useState(null),[kn,qn]=S.useState(null),[on,Yn]=S.useState(""),[ze,Mn]=S.useState(!1),[Xe,Ln]=S.useState(()=>{if(M)return M.mode;const R=w?"split":Za("field-view")?.mode;return["split","overlay","wire-overlay","gt","prediction"].includes(R)?R:"split"}),[Ye,ut]=S.useState(M?.quality??"balanced"),[ln,ht]=S.useState(M?.component??"magnitude"),[gt,yl]=S.useState(.65),[hn,yt]=S.useState(M?.showContext??!1),[gn,xt]=S.useState(M?.vectorDensity??2e3),[yn,vt]=S.useState(M?.arrowScale??1),[te,wa]=S.useState(M?.plane??($?"yz":"xz")),[Js,Rn]=S.useState(M?.sliceIndex??null),[Sa,Et]=S.useState(M?.crosshair||[.5,.5]),[xn,_t]=S.useState(!!M?.sourceRange),[Qe,wt]=S.useState(M?.sourceRange||[0,1]),[Fe,St]=S.useState(M?.rotationAxis||"y"),[Pe,jt]=S.useState(M?.angle??30),[Ie,ja]=S.useState(M?.sectionPercent??50),[Pn,Bt]=S.useState(M?.showPlane??!0),[At,Ks]=S.useState(null),[De,Ba]=S.useState(M?{showGt:M.showGt,showPrediction:M.showPrediction,gtOpacity:M.gtOpacity,predictionOpacity:M.predictionOpacity}:{showGt:!0,showPrediction:!0,gtOpacity:.65,predictionOpacity:.8}),[Qs,Ct]=S.useState(""),dn=S.useRef(null),vn=S.useRef(0),Un=S.useRef(ve);Un.current=ve;const re=!!d?.settings?.previewOnly,fn=f==="sdf"&&Se.includes(L)&&!xe.includes(L);S.useEffect(()=>(dn.current={frames:lc({fetchFrame:(R,U,G)=>uc(R,U,{...G,withIdentity:!0}),decode:Es}),geometry:dc(),surface:mi()},()=>{vn.current++,dn.current?.frames.dispose(),dn.current?.geometry.dispose(),dn.current?.surface.dispose(),dn.current=null}),[d.id]),S.useEffect(()=>{un(null),qn(null),Ke(M?.frame??($?1049:null)),Me(!0),Yn("")},[d.id]),S.useEffect(()=>{if(qe.length&&!qe.includes(L)){const R=w?null:Za("field-view");Ke(R?.comparisonId===d.id&&ve.includes(R.frame)?R.frame:ve[0])}},[ve,qe,L,d.id,w]),S.useEffect(()=>{!w&&L!=null&&xs("field-view",{mode:Xe,comparisonId:d.id,frame:L})},[Xe,L,d.id,w]),S.useEffect(()=>{let R=!0;if(w||p){qn(p??null);return}return hc(d.id).then(U=>{R&&qn(U)}).catch(U=>{R&&(qn(null),Yn(U.message))}),()=>{R=!1}},[d.id,ve.length,d.status,p,w]);const Jn=ne?Dn(ne.snapshot.data,f):null,Kn=ne?.snapshot.data.fields.find(R=>R.id===(Jn?.groundTruth?.ids[0]||Jn?.prediction?.ids[0]))?.shape||me?.dimensions,Ze=Kn?Kn[te==="yz"?0:te==="xz"?1:2]-1:0,Ae=Math.max(0,Math.min(Js??Math.floor(Ze/2),Ze)),kt=S.useMemo(()=>({group:f,mode:re?"gt":Xe,quality:Ye,component:ln,opacity:gt,showContext:hn,vectorDensity:gn,arrowScale:yn,plane:te,sliceIndex:Ae,angle:Pe,sectionPercent:Ie,rotationAxis:Fe,showPlane:Pn,sourceRange:xn&&Qe[1]>Qe[0]?Qe:null,unit:Jn?.unit}),[f,Xe,re,Ye,ln,gt,hn,gn,yn,te,Ae,Pe,Ie,Fe,Pn,xn,Qe,Jn?.unit]),en=S.useMemo(()=>({group:f,quality:Ye,component:ln,showContext:hn,vectorDensity:gn,arrowScale:yn,plane:te,sliceIndex:Ae,angle:Pe,sectionPercent:Ie,rotationAxis:Fe,previewOnly:re}),[f,Ye,ln,hn,gn,yn,te,Ae,Pe,Ie,Fe,re]),nn=JSON.stringify([d.id,L,en,rn]);S.useEffect(()=>{const R=dn.current;if(!R||L==null)return;const U=++vn.current;let G=!0;if(Yn(""),!We||!ve.includes(L)){un(null),Mn(!1);return}return Mn(!0),Je({key:nn,status:"loading"}),(async()=>{try{if(fn){const Te=await R.surface.select(l,L,Ye);if(!Te||!G||U!==vn.current)return;const mn=bi(Te.geometry,me,en),na={comparisonId:d.id,frameNumber:L,data:{fields:[],groups:{}},verifiedResource:Te.verifiedResource};un({snapshot:na,geometry:mn,settings:en}),Je({key:nn,status:"ready"}),Mn(!1),Ct(`${(R.surface.stats().bytes/1048576).toFixed(0)} MiB surface cache`);return}const de=await R.frames.select(d.id,L);if(!de||!G||U!==vn.current)return;let ge;try{ge=await R.geometry.request(de,me,en)}catch(Te){ge={failed:!0,layers:[],warnings:[`3D preparation unavailable: ${Te.message}. Use slices below.`],byteLength:0}}if(!ge||!G||U!==vn.current)return;un({snapshot:de,geometry:ge,settings:en}),Je({key:nn,status:"ready"}),Mn(!1);const En=R.frames.stats();if(Ct(En.oversize?"Active frame exceeds preview cache budget":`${(En.bytes/1048576).toFixed(0)} MiB decoded cache`),!e){const Te=Un.current.indexOf(L);R.frames.prefetch(d.id,[Un.current[Te+1],Un.current[Te-1]].filter(mn=>mn!=null))}}catch(de){G&&U===vn.current&&(Yn(de.message),Je({key:nn,status:"error",error:de.message}),Mn(!1))}})(),()=>{G=!1}},[d.id,L,en,me,ve,rn,nn,We,fn,l,Ye]),S.useEffect(()=>{on&&X.current?.pause()},[on]);const ei=S.useMemo(()=>sl(m?.lattice),[m?.lattice]);S.useEffect(()=>{const R=U=>{const G=U.detail;_&&G?.page==="field"&&G.caseId===d.id&&qe.includes(G.frame)&&(G.accept(),Qn(G.frame))};return window.addEventListener("oceanscope-annotation-frame",R),()=>window.removeEventListener("oceanscope-annotation-frame",R)});const Aa=S.useCallback(R=>Ke(R),[]),Ee=ne?.snapshot.frameNumber,In=Ee==null?null:kn?.frames?.[String(Ee)],Qn=S.useCallback(R=>{X.current?.pause(),f==="velocity"&&!xe.includes(R)&&h("sdf"),Ke(R)},[f,xe,h]),Ne=JSON.stringify([d.id,L,f,ln,te,Ae,Pe,Ie,Fe]),[Mt,Ca]=S.useState(()=>({context:Ne,range:M?.region??null})),Rt=S.useRef(Ne);S.useEffect(()=>{Rt.current!==Ne&&(Rt.current=Ne,Ca({context:Ne,range:null}))},[Ne]);const ka=Mt.context===Ne?Mt.range:null;function ni(R){X.current?.pause(),Ca({context:Ne,range:R})}function ai(R){X.current?.pause(),Et(R)}const Oe=ne?.settings.group||f,Nn=ne?Dn(ne.snapshot.data,Oe):null,ie={shading:An,...kt,...ne?.settings,...De,unit:Nn?.unit},Ge=Ve?.key===nn&&Ve.status==="ready"&&!ze&&!on&&!q&&!!At&&ne?.snapshot.frameNumber===L&&ne?.settings===en&&!ne?.geometry.failed;S.useEffect(()=>{j?.(Ge&&!u)},[Ge,u,j]),S.useEffect(()=>{if(!(!g||Y.current)){if(on||q||ne?.geometry.failed){Y.current=!0,x?.(Error("load"));return}if(Ge){Y.current=!0;try{V.current.restoreCamera(g.camera),X.current.pause(),x?.(null)}catch(R){x?.(R)}}}},[g,Ge,on,q,ne,x]);function Pt(){if(!Ge||u||!l||xn&&!(Qe[1]>Qe[0]))throw Error("settings");return X.current.pause(),cn({schema:ma,name:`${l.id} · ${f.toUpperCase()} · ${Ee} · ${te==="oblique"?Fe.toUpperCase()+" "+Pe+"°":te.toUpperCase()}`,sourceSignature:Cs(l),settings:{...fn?{representation:Tn}:{},shading:An,caseId:l.id,frame:Ee,group:f,mode:re?"gt":Xe,quality:Ye,component:ln,plane:te,sliceIndex:Ae,angle:Pe,sectionPercent:Ie,rotationAxis:Fe,showPlane:Pn,showContext:hn,...De,showPrediction:re?!1:De.showPrediction,vectorDensity:gn,arrowScale:yn,sourceRange:xn?Qe:null,errorScale:Hn,crosshair:Sa,region:re?null:ka,playback:X.current.getSettings()},camera:V.current.getCamera()},[l])}S.useImperativeHandle(v,()=>({pause(){X.current?.pause()},captureView:Pt,async restoreAnalysis(R,U,G){if(G.throwIfAborted(),!s)throw Error("Reference analysis is not ready for this dataset");if(U==="pairedCase"){if(!D.current)throw Error("One-page case unavailable for this dataset");return D.current.restore(R,G)}if(U==="velocityComparison"||U==="velocity")throw Error("Unsupported velocity report in public preview");if(U==="report"){if(!Be.current?.restoreText)throw Error("Analysis is not ready");return Be.current.restoreText(R,G)}const de=hs(R,s);G.throwIfAborted(),X.current?.pause(),Be.current?.clearSnapshot(),K(ge=>({...ge,subset:de.subset,metric:de.metric})),Ke(de.frame)}}));function ti(){X.current?.pause();let R=null,U=null,G=null,de="No 3D preview for this frame";if(ve.includes(L)){de=on||q||(ne?.geometry.failed?"3D preparation failed":ze?"3D preview is loading":"3D preview is not ready or not verified");try{const ge=fn?ps(l,L,Ye):nt(l,L);Ge&&ge&&JSON.stringify(ne.snapshot.verifiedResource)===JSON.stringify(ge)&&(R=Pt(),G=V.current.capture(),U=ge,de=fn?"Exact-frame native SDF surface bytes verified; no volume samples":"Exact-frame preview bytes verified")}catch(ge){R=null,U=null,G=null,de=ge.message}}return{view:{frame:L,plane:te,sliceIndex:Ae,rotationAxis:Fe,angle:Pe,sectionPercent:Ie,selection:W,geometry:R,geometryResource:U,geometryStatus:{status:R?"included":"unavailable",reason:de}},scene:G}}function si(R,U){if(U.throwIfAborted(),X.current?.pause(),Ke(R.frame),wa(R.plane),Rn(R.sliceIndex),St(R.rotationAxis),jt(R.angle),ja(R.sectionPercent),K(R.selection),Zn(de=>de+1),!R.geometry)return Promise.resolve();Me(!0);const G=R.geometry.settings;return h(G.group),Ln(G.mode),ut(G.quality),ht(G.component),bn(G.shading),yt(G.showContext),xt(G.vectorDensity),vt(G.arrowScale),Bt(G.showPlane),Ba({showGt:G.showGt,showPrediction:G.showPrediction,gtOpacity:G.gtOpacity,predictionOpacity:G.predictionOpacity}),_t(!!G.sourceRange),wt(G.sourceRange??[0,1]),Cn(G.errorScale),Et(G.crosshair),new Promise((de,ge)=>{const En=setTimeout(()=>mn(Error("Timed out loading the report view; retry the geometry download")),3e4),Te=()=>mn(Error("Report restore cancelled"));function mn(na){clearTimeout(En),U.removeEventListener("abort",Te),Re(null),na?ge(na):de()}U.addEventListener("abort",Te,{once:!0}),Re({view:R,signal:U,finish:mn})})}S.useEffect(()=>{if(!(!ae||ae.signal.aborted)&&!(L!==ae.view.frame||Ve?.key!==nn||Ve.status==="loading")){if(Ve.error||q||ne?.geometry.failed){ae.finish(Error(Ve.error||q||"Geometry unavailable"));return}if(Ge){if(JSON.stringify(ne.snapshot.verifiedResource)!==JSON.stringify(ae.view.geometryResource)){ae.finish(Error("Report preview resource identity mismatch"));return}try{V.current.restoreCamera(ae.view.geometry.camera),X.current?.restoreSettings(ae.view.geometry.settings.playback),Ca({context:Ne,range:ae.view.geometry.settings.region??null}),ae.finish()}catch(R){ae.finish(R)}}}},[ae,Ge,L,Ve,nn,q,ne]);const ii=Ui({sourceCase:l,comparison:d,processing:m,snapshot:ne?.snapshot,geometry:ne?.geometry,settings:ie,metrics:kn}),ci=ne?.snapshot.data.fields.find(R=>R.id===(Nn?.groundTruth?.ids[0]||Nn?.prediction?.ids[0])),It=m?.lattice&&te!=="oblique"?yc(m.lattice,te,Ae):null,Ma={shading:Oe==="sdf"?An:"not_applicable",comparison_id:d.id,dataset_a:d.groundTruthId||d.labels?.gt?.displayName||"Ground Truth",dataset_b:re?"":d.predictionId||d.labels?.prediction?.displayName||"Prediction",frame:Ee,group:Oe,component:ie.component,plane:ie.plane,mode:ie.mode,camera:At,gt_opacity:De.gtOpacity,prediction_opacity:De.predictionOpacity,preview_quality:ie.quality,show_plane:Pn,gt_visible:De.showGt,prediction_visible:De.showPrediction,value_unit:Nn?.unit||"undeclared",coordinate_unit:"source_grid_units",lattice_origin:me?.origin,lattice_axis_steps:me?.axisSteps,dimensions:me?.dimensions,...ie.plane==="oblique"?pi(at(me,ie.angle,ie.sectionPercent,ie.rotationAxis)):{slice_index:ie.sliceIndex,angle_degrees:ie.plane==="xy"?0:ie.plane==="yz"?90:null,sampling:"native_voxel_layer"},section_percent:ie.plane==="oblique"?ie.sectionPercent:Na(ie.sliceIndex,0,(me?.dimensions?.[ie.plane==="xy"?2:ie.plane==="yz"?0:1]||1)-1),crosshair_normalized:Sa,local_region:ka,saved_metrics_scope:"precomputed_original_support_not_current_slice"},ri=n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:222:25",id:"analysis-height",hidden:e&&!["height","report"].includes(a)},s&&L!=null&&n.createElement(T0,{viewMode:e?a==="report"?"report":"height":"all",unifiedRestore:c,bundle:s,frame:L,plane:te,sliceIndex:Ae,rotationAxis:Fe,angle:Pe,sectionPercent:Ie,getReportView:ti,onRestoreReportView:si,reportControlRef:Be,onDownload:ca,catalog:[l],reportContext:JSON.stringify([Ne,W]),onPause:()=>X.current?.pause(),onOpenVelocity:void 0})),Nt=n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:223:27",hidden:e&&a!==P,id:"analysis-summary",className:O?"demo-integrated-time":void 0},O&&s&&n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:223:201",className:"demo-time-heading"},n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:223:236"},n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:223:241"},A?"时间分析":"Time analysis"),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:223:277"},A?"查看误差随帧号的变化；点击曲线上的点，同步切换上方三维画面。":"Inspect errors across frames. Select a curve point to update the 3D view above.")),n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:223:409",href:"#analysis-spatial"},A?"返回三维画面 ↑":"Back to 3D ↑")),s&&n.createElement(vr,{displayGeometryFrames:Se.length?Se:xe,unifiedRestore:c,bundle:s,frame:L,onFrame:Qn,onDownload:ca,reportSelection:W,onReportSelection:K}));function ea(){Be.current?.cancel(),r?.()}return n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:225:10","data-review-case":d.id,"data-review-frame":Ee,className:`field-workbench v2-field${e?` demo-field ${N?"demo-nonreference":""} demo-panel-${a} ${le?"settings-open":""}`:""}`,inert:u||void 0,onPointerDownCapture:ea,onKeyDownCapture:ea,onChangeCapture:ea,onWheelCapture:ea},n.createElement(tl,{enabled:e,forceModal:J,open:le,active:_&&!F&&["3d","height","slices"].includes(a),returnFocusRef:we,onClose:()=>ye(!1),label:A?"视图设置":"View settings",closeLabel:A?"关闭设置":"Close settings"},n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:226:314",ref:pn,className:"field-setup",open:!d},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:226:385"},w?A?"已发布数据详情":"Published dataset details":B("Datasets & comparison setup")),E),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:227:7",hidden:e&&a==="height"},n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:227:57"},B("Display controls")),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:227:90",className:"field-tabs compact"},["sdf","velocity"].map(R=>n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:227:156",key:R,"aria-label":R==="sdf"?"SDF":"Velocity",disabled:!d.availableGroups.includes(R)||R==="velocity"&&!xe.includes(L),"aria-pressed":f===R,onClick:()=>h(R)},B(R==="sdf"?"SDF":"Velocity"),!d.availableGroups.includes(R)&&n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:227:478"},B("Not available"))))),!re&&n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:228:17",className:"v2-primary-modes",role:"group","aria-label":A?"主要显示模式":"Primary display mode"},n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:228:112","aria-pressed":Xe==="split",onClick:()=>Ln("split")},A?"并排":"Side by side"),n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:228:214","aria-pressed":Xe==="overlay",onClick:()=>Ln("overlay")},A?"叠加":"Overlay")),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:229:7",className:"v2-mode-caption"},re?A?"单组查看 · 不显示误差":"Single dataset · no error scores":["split","overlay"].includes(Xe)?A?"A / GT 蓝色 · B / Prediction 橙色":"A / GT blue · B / Prediction orange":A?"正在使用高级显示模式":"Advanced display mode active")),n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:230:13"},B("Cross section")),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:230:43"},B("Plane"),n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:230:63","aria-label":B("Slice plane"),value:te,onChange:R=>{wa(R.target.value),Rn(null)}},["xy","xz","yz"].map(R=>n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:230:197",key:R,value:R},R.toUpperCase()," · ",A?"固定":"fixed"," ",R==="xy"?"Z":R==="xz"?"Y":"X")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:230:303",value:"oblique",disabled:!za(me)},A?"斜切 · X / Y / Z 旋转":"Oblique · X / Y / Z rotation"))),te==="oblique"&&n.createElement(Ji,{value:Fe,onChange:R=>{X.current?.pause(),St(R)}}),te==="oblique"&&n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:232:27",className:"v2-position"},A?"切面角度":"Section angle"," ",n.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:232:86"},Pe,"°"),n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:232:111","aria-label":A?"场切面角度":"Field section angle",type:"range",min:"0",max:"180",step:"1",value:Pe,onChange:R=>jt(+R.target.value)}),n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:232:259"},A?"只旋转切面，相机不变；切面与探针同步。":"Rotates the section, not the camera; probes remain synchronized.")),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:233:7",className:"v2-position"},A?"切片位置":"Section position"," ",n.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:233:69"},(te==="oblique"?Ie:Na(Ae,0,Ze)).toFixed(1),"%"),n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:233:176","aria-label":A?"场切片位置百分比":"Field section position percent","aria-valuetext":`${(te==="oblique"?Ie:Na(Ae,0,Ze)).toFixed(1)}%`,type:"range",min:"0",max:te==="oblique"?100:Ze,step:te==="oblique"?.1:1,disabled:!Kn||Ze===0,value:te==="oblique"?Ie:Ae,onChange:R=>te==="oblique"?ja(+R.target.value):Rn(+R.target.value)})),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:234:7",className:"v2-range-labels"},n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:234:40"},"0%"),n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:234:55"},"100%")),n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:234:78"},te==="oblique"?A?"三线性取样：参与插值的邻点必须全部有效，缺失处留空。":"Trilinear sampling: all contributing neighbours must be valid; missing support stays empty.":A?"按原始体素层移动，切面与下方探针同步。":"Snaps to original voxel layers; synchronized with slices and probe."),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:235:7",className:"check"},n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:235:32",type:"checkbox",checked:Pn,onChange:R=>Bt(R.target.checked)}),A?"显示半透明切面":"Show translucent section plane"),n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:236:7",hidden:e&&a==="height",className:"v2-advanced"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:236:85"},A?"显示、单位与网格详情":"Display, units & grid details"),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:237:7"},te==="oblique"?`${A?"斜切角度":"Oblique angle"} ${Fe.toUpperCase()} ${Pe}°`:`${B("Slice ")}${Ae} / ${Ze}`,n.createElement("br",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:237:148"}),B("World: "),It?It.map(R=>R.toFixed(3)).join(", "):"—",n.createElement("br",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:237:223"}),A?"原始网格坐标；单位见数据来源声明。":"Source-grid coordinates; see the source unit declaration."),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:238:7"},B("3D display mode"),n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:238:37","aria-label":B("3D display mode"),value:re?"gt":Xe,disabled:re,onChange:R=>Ln(R.target.value)},n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:238:161",value:"split"},B("Side by side · linked")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:238:221",value:"wire-overlay"},B("Solid + X-ray wireframe · overlap safe")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:238:305",value:"overlay"},B("Transparent overlay · blue / orange")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:238:381",value:"gt"},B("Ground Truth only")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:238:434",value:"prediction"},B("Prediction only")))),Xe==="wire-overlay"&&!re&&n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:239:40",className:"field-mode-help"},B("Blue: GT surface. Orange: Prediction wireframe, visible through GT. Geometry and scores are unchanged.")),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:240:7"},B("Preview quality"),n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:240:37",value:Ye,onChange:R=>ut(R.target.value)},n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:240:102",value:"balanced"},B("Balanced · stride 2")),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:240:163",value:"fine"},B("Fine · stride 1")))),n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:240:233"},B("Display only. Metrics retain the comparison lattice.")),n.createElement("fieldset",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:7",className:"field-layer-controls"},n.createElement("legend",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:50"},B("Visible layers")),[["Gt","Ground Truth","gtOpacity"],...re?[]:[["Prediction","Prediction","predictionOpacity"]]].map(([R,U,G])=>n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:217",key:R,className:"field-layer-row"},n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:260",className:"check"},n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:285",type:"checkbox",checked:De[`show${R}`],onChange:de=>Ba(ge=>({...ge,[`show${R}`]:de.target.checked}))}),n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:409",className:`field-layer-dot ${R==="Gt"?"gt":"prediction"}`}),B(U)),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:497"},B(U),B(" opacity "),n.createElement("output",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:532"},Math.round(De[G]*100),"%"),n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:241:581","aria-label":`${U} opacity`,type:"range",min:".1",max:"1",step:".05",value:De[G],disabled:!De[`show${R}`],onChange:de=>Ba(ge=>({...ge,[G]:Number(de.target.value)}))}))))),f==="velocity"&&n.createElement(n.Fragment,null,n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:36"},B("Velocity display"),n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:67",value:ln,onChange:R=>ht(R.target.value)},["magnitude","x","y","z"].map(R=>n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:170",key:R,value:R},R==="magnitude"?re?"Magnitude":B("Magnitude / EPE"):R.toUpperCase())))),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:300"},B("Vector count limit"),n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:333",type:"number",min:"1",max:"20000",value:gn,onChange:R=>xt(Math.max(1,Math.min(2e4,Number(R.target.value)||1)))})),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:479"},B("Arrow scale"),n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:505",type:"number",min:".001",step:".1",value:yn,onChange:R=>vt(Math.max(.001,Number(R.target.value)||1))})),d.availableGroups.includes("sdf")&&n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:690",className:"check"},n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:242:715",type:"checkbox",checked:hn,onChange:R=>yt(R.target.checked)}),B(" Show SDF context"))),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:243:7",className:"check"},n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:243:32",type:"checkbox",checked:xn,onChange:R=>_t(R.target.checked)}),B(" Fixed source color range")),xn&&n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:243:162",className:"row"},Qe.map((R,U)=>n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:243:202",key:U,"aria-label":U?"Color maximum":"Color minimum",type:"number",value:R,step:".01",onChange:G=>wt(de=>de.map((ge,En)=>En===U?Number(G.target.value):ge))}))),w&&re?n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:25",className:"alignment-report"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:63"},"Grid and provenance"),n.createElement("dl",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:101"},n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:105"},n.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:110"},"Canonical lattice"),n.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:136"},me?.dimensions?.join(" × ")," voxels")),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:192"},n.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:197"},"Voxel size"),n.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:216"},me?.voxelSize?.join(" × ")||"See source declaration")),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:290"},n.createElement("dt",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:295"},"Source"),n.createElement("dd",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:244:310"},"Simulation Ground Truth. No prediction alignment or error comparison.")))):n.createElement(tr,{lattice:m?.lattice,comparison:d}))),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:5",className:"field-center"},i&&n.createElement(Ue,{error:i,zh:A,resource:A?"序列评估资源":"Sequence evaluation resources",onRetry:o}),n.createElement(Ue,{error:on,zh:A,resource:(A?"当前帧三维资源：":"Current-frame geometry: ")+L,onRetry:()=>Zn(R=>R+1)}),(s||e)&&n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:355",className:"analysis-toolbar","aria-label":A?"分析导航":"Analysis navigation"},n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:434",hidden:T},A?"当前帧":"Current frame"," ",n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:502","aria-label":"Analysis frame",value:L??qe[0],onChange:R=>Qn(Number(R.target.value))},qe.map(R=>n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:655",key:R,value:R},R,Se.includes(R)||xe.includes(R)?" · 3D":"")))),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:776",hidden:F},A?"截面":"Section"," ",n.createElement("select",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:827","aria-label":"Analysis section",value:te,onChange:R=>{wa(R.target.value),Rn(null)}},["xy","xz","yz"].map(R=>n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:960",key:R,value:R},R.toUpperCase())),n.createElement("option",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:1014",value:"oblique",disabled:!za(me)},A?"斜切":"Oblique"))),n.createElement("label",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:1120",hidden:F},te==="oblique"?A?"位置 %":"Position %":A?"切片索引":"Slice index"," ",n.createElement("input",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:1222","aria-label":"Analysis section position",type:"number",min:"0",max:te==="oblique"?100:Ze,step:te==="oblique"?.1:1,disabled:!Kn||Ze===0,value:te==="oblique"?Ie:Ae,onChange:R=>{const U=Number(R.target.value);Number.isFinite(U)&&(te==="oblique"?ja(Math.max(0,Math.min(100,U))):Rn(Math.max(0,Math.min(Ze,Math.round(U)))))}})),n.createElement("nav",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:1655",hidden:e,"aria-label":A?"分析区域":"Analysis sections"},n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:1726",href:"#analysis-spatial"},A?"三维视图":"3D view"),n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:1779",href:"#analysis-height"},A?"高度与选区":"Height & ROI"),n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:1837",href:"#analysis-slices"},A?"场切片":"Field slices"),n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:1893",href:"#analysis-summary"},A?"序列统计":"Sequence metrics")),e&&!F&&["3d","height","slices"].includes(a)&&n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:2040",ref:we,className:"demo-settings-toggle","aria-controls":"analysis-settings","aria-expanded":le,onClick:()=>ye(R=>!R)},A?"视图设置":"View settings"),e&&!T&&n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:247:2282",className:"demo-frame-scope"},ve.includes(L)?A?"当前帧支持三维":"3D available for this frame":A?"当前帧仅高度与序列数据":"Height and sequence data for this frame")),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:248:7",className:"demo-geometry-panel",hidden:e&&a!=="3d"},fn&&n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:248:99",className:"demo-surface-scope"},A?"原生 SDF 三维表面 · 支持精细／均衡显示；高度与 ROI 使用同一帧。体积场与速度切片另有覆盖范围。":"Native SDF 3D surface · Fine / Balanced display; same-frame height and ROI. Volume and velocity slices have separate coverage."),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:7",id:"analysis-spatial",className:"v2-section-heading"},!e&&n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:82"},"01"),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:98"},n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:103"},A?"3D 空间分析":"3D spatial analysis"),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:148"},re?A?"选择当前帧，查看三维场与同一位置的切片。":"Choose a frame and inspect its 3D field and synchronized slice.":A?"选择当前帧，比较三维形状与同一位置的场切片。":"Choose a frame and compare geometry and field values at the same section.")),O&&s&&n.createElement("a",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:249:400",className:"demo-time-jump",href:"#analysis-summary"},A?"查看时间分析 ↓":"View time analysis ↓")),s&&L!=null&&!ve.includes(L)?n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:250:65",role:"status",className:"reference-scope"},A?`帧 ${L} 无三维缓存。仍可查看此帧的高度图和指标；未替换为邻帧。`:`Frame ${L} has no geometry cache. Height maps and metrics retain this exact frame.`,e&&n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:250:268",onClick:()=>t("height")},A?"查看此帧高度与 ROI":"View this frame’s height & ROI")):We?n.createElement(Bc,{onShading:bn,inspection:!ze&&Gn?.context===Ne?Gn.value:null,onSceneError:z,controlRef:V,key:d.id,onCameraChange:Ks,frameSplit:y,displayedFrame:Ee,labels:d.labels,geometry:ne?.geometry,settings:ie,bounds:ei,loadingFrame:ze?L:null,error:null}):n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:250:395",className:"demo-geometry-start"},n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:250:432"},A?"高度分析已可使用。三维视图每帧约25 MB，点击后加载。":"Height analysis is ready. The 3D view loads about 25 MB for the selected frame."),n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:250:556",type:"button",onClick:()=>Me(!0)},A?"打开当前帧三维":"Open current frame in 3D")),We&&(!s||ve.includes(L))&&n.createElement(Ac,{controlRef:X,initialPlayback:M?.playback,active:_&&!u&&(!e||a==="3d"),frameSplit:y,frames:ve,displayedFrame:Ee,requestedFrame:L,status:d.status||"ready",loading:ze,onFrame:Aa,onScrubbing:R=>dn.current?.frames.setScrubbing(R)})),O&&Nt,!1,ri,e&&N&&(re&&["height","time"].includes(a)||a==="report")&&n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:260:110",className:"reference-scope"},a==="report"?A?"此样例没有96帧协议报告。可保存或恢复场比较方案；切片报告从“场切片”导出。":"This sample has no96-frame protocol report. Save or restore field views here; export slice reports from Field slices.":A?"此样例只有Ground Truth，无配对误差。请查看三维、场切片与探针。":"This sample contains Ground Truth only, without paired errors. Inspect3D, field slices and probes.",n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:260:475",onClick:()=>t("slices")},A?"查看场切片":"Open field slices")),n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:7",hidden:e&&a!==P,className:"analysis-source"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:98"},A?"数据与显示说明":"Data and display details"),n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:158",className:"field-saved-note"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:196"},re?B("Single dataset preview — no comparison scores"):`Evaluation: ${Object.values(d.settings?.sdf||{}).some(R=>R?.semantics==="water_interior")?"conditional GT-water distance support":d.settings?.sdfEvaluationRegion==="gt_water"?"GT water only":"full domain"} · Saved settings`),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:261:518"},l?.metrics?.reconstructionEvaluation?A?"Best_1027 三帧本地参考结果。原生场指标、俯视高度指标和水下 0.1 m 速度指标使用各自明确的有效域；查看下方计算规则。":"Best_1027 three-frame local reference. Native-volume, top-down height and underwater 0.1 m metrics use separate documented supports; see the protocol below.":w?re?"Ground Truth fields are shown for inspection. This example contains no prediction and has no error metrics.":"Precomputed results retain the original comparison settings and validity masks. Conditional GT-water distance scores describe their valid support only. Occupancy and surface metrics use separate validity rules; unsupported metrics remain N/A. This example is not a model-ranking benchmark. 3D and slices show the saved aligned fields.":B("Results use the saved comparison settings. Create a new comparison after changing declarations. Occupancy and surface metrics have separate validity rules. Original scores are not certified for model ranking; use Results Library common-support evaluation. 3D and slices show the original aligned fields."))),w&&n.createElement(Ki,{context:ii,busy:ze})),n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:7",hidden:e&&a!==(N?"height":P),open:!s,className:"legacy-height-analysis"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:264:148"},s?A?"旧预览协议 · 三帧高度诊断":"Legacy preview protocol · three-frame height diagnosis":A?"高度诊断":"Height diagnosis"),l?.metrics?.reconstructionEvaluation&&n.createElement(lr,{protocol:l.metrics.reconstructionEvaluation,frame:ne?.snapshot.data,lattice:me,frameNumber:Ee,busy:ze||Ee!==L||Oe!==f,onFrame:Aa}),!re&&f==="sdf"&&n.createElement(cr,{frame:ne?.snapshot.data,lattice:me,comparison:d,plane:ie.plane,sliceIndex:ie.sliceIndex,rotationAxis:ie.rotationAxis,angle:ie.angle,sectionPercent:ie.sectionPercent,frameNumber:Ee,busy:ze||Ee!==L||Oe!==f})),n.createElement("section",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:7",hidden:e&&a!=="slices",id:"analysis-slices",className:"field-slices"},!1,k?n.createElement(n.Fragment,null,n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:337",onClick:()=>I(null)},A?"返回原场切片":"Back to original field slices"),k.comparison?n.createElement(al,{key:k.key,restored:k.restored}):n.createElement(Z0,{key:k.key,frameNumber:L,request:k.request,restored:k.restored})):n.createElement(n.Fragment,null,n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:707"},B("Synchronized slices & probe")),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:751",className:"v2-mode-caption"},Oe==="sdf"?re?A?"GT 单场切片，不含比较误差。":"GT field slices only; no comparison errors.":A?"此处为 SDF 场差值（B−A），不等于水面高度差。":"This is the SDF field difference (B−A), not water-surface height error.":A?"速度场切片与探针；瞬时矢量不是粒子轨迹。":"Velocity slices and probes; instantaneous vectors are not particle paths."),fn?n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:1109",className:"reference-scope"},n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:1142"},A?"本帧已提供真实三维表面、高度与 ROI；完整体积场切片仅发布了以下三帧。切换帧会明确改变当前帧号。":"This frame has its actual 3D surface, height and ROI. Full volume slices are published for the three frames below. Choosing one explicitly changes the frame."),xe.map(R=>n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:1386",key:R,onClick:()=>Qn(R)},R))):ci?n.createElement(Nc,{reportReady:Ge&&!u,captureScene:()=>{if(!Ge||u)throw Error(A?"等待当前帧与三维加载完成。":"Wait for the current frame and 3D.");return X.current?.pause(),V.current.capture()},reportLabels:{a:d.labels?.gt?.displayName||"Ground Truth",b:d.labels?.prediction?.displayName||"Prediction"},savedMetrics:In,region:re?null:ka,onRegion:ni,inspectionContext:Ne,onInspection:_a,busy:ze||Ee!==L||ne?.settings!==en,errorScale:Hn,onErrorScale:Cn,frameNumber:Ee,frameSplit:y,exportStem:Z,viewMetadata:Ma,rotationAxis:ie.rotationAxis,angle:ie.angle,sectionPercent:ie.sectionPercent,frame:ne.snapshot.data,group:Oe,plane:ie.plane,sliceIndex:ie.sliceIndex,crosshair:Sa,onCrosshair:ai,component:ie.component,fixedRange:kt.sourceRange,lattice:me,single:re,label:"Ground Truth"}):n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:269:2612",role:"status"},ze?`${B("Loading")} ${L}…`:B("No field samples available for this view.")))),!O&&Nt,!re&&n.createElement("details",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:271:17",open:!e,hidden:e&&a!==P,className:"demo-legacy-sequence"},n.createElement("summary",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:271:135"},A?"旧预览协议 · 三帧序列诊断":"Legacy preview protocol · three-frame sequence diagnostics"),n.createElement("section",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:271:236",className:"v2-field-temporal","aria-label":A?"时间分析":"Temporal analysis"},n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:271:318",className:"v2-section-heading"},n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:271:354"},"02"),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:271:369"},n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:271:374"},A?"时间分析":"Temporal analysis"),n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:271:414"},A?"保留逐帧绝对误差与序列统计。只能跳转到已有三维数据的帧。":"Absolute errors and sequence statistics. Frame navigation is available only where geometry exists."))),n.createElement(nr,{frameSplit:y,onReviewSetup:H,comparisonId:Z,frames:ve,expectedFrames:b,metrics:kn,groups:d.availableGroups,group:Oe,status:d.status,currentFrame:Ee,onFrame:Aa,sdfUnit:Dn(ne?.snapshot.data,"sdf").unit||d.settings?.sdf?.gt?.unit||"unit undeclared",velocityUnit:Dn(ne?.snapshot.data,"velocity").unit||d.settings?.velocity?.gt?.unit||"unit undeclared"}))),n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:273:7",hidden:e,className:"field-memory"},Qs,l?.metrics?.reconstructionEvaluation?A?" · 本地三帧数据 · 按需加载":" · Local three-frame data · Loaded on demand":w?" · Published samples · Geometry prepared in your browser":B(" · Geometry prepared off the UI thread · No cloud upload"))),n.createElement("aside",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:275:5",className:"field-results",hidden:e&&(!N||!["time","report"].includes(a))},s&&n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:275:131",className:"reference-scope"},A?"旧预览协议 · 三帧空间诊断":"Legacy preview protocol · three-frame spatial diagnostics"),n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:275:248"},B("Current frame "),n.createElement("span",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:275:274"},Ee??"—")),re?n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:275:312"},B("Single dataset preview — no comparison scores")):n.createElement(Fc,{frame:Ee,metrics:In,group:Oe,unit:Nn?.unit||""}),!re&&n.createElement(n.Fragment,null,n.createElement(ar,{group:Oe}),n.createElement("div",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:276:56",className:"field-exports"},n.createElement("h2",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:276:87"},B("Export results")),n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:276:118",disabled:!kn,onClick:()=>ca(`${Z}_metrics.json`,JSON.stringify({...kn,current_view:Ma},null,2))},B("Export JSON")),n.createElement("button",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:276:296",disabled:!In,onClick:()=>{const R=["metric,value",...Object.entries(Ma).map(([U,G])=>[U,typeof G=="object"?JSON.stringify(G):String(G??"")].map(de=>'"'+String(de).replaceAll('"','""')+'"').join(",")),`sdf_error_region,${In?.sdf?.evaluationRegion||d.settings?.sdfEvaluationRegion||"full_domain"}`];for(const[U,G]of Object.entries(In?.[Oe]||{}))(typeof G=="number"||G===null)&&R.push(`${U},${G??""}`);ca(`${Z}_${Ee}_${Oe}.csv`,R.join(`
`),"text/csv")}},B("Export CSV")),n.createElement("small",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:276:918"},w?"Download saved values: JSON includes all metric records; CSV describes the displayed frame.":B("JSON: sequence · CSV: displayed frame. Saved-result ZIP includes source names and complete provenance.")))),!re&&n.createElement("p",{"data-os-loc":"src/field/ComparisonWorkbench.jsx:277:17"},B("All metric averages and per-frame values are below the synchronized slices. Use the SDF / Velocity tabs to switch field groups."))))}const cl={kind:"field",parse:dr,read:fr,write:mr,validate:cn,error:br,title:e=>e?"场比较方案":"Saved field views",intro:e=>e?"保存样例、SDF/速度分量、帧、切面、探针、视角、色标、透明度、箭头与播放设置。恢复时重新读取数据并暂停播放；已有评分保持不变。":"Save sample, SDF/velocity component, frame, section, probe, camera, color scales, opacity, arrows and playback settings. Restore reloads data and pauses playback; saved scores are unchanged.",describe:(e,a)=>`${e.settings.caseId} · ${e.settings.group.toUpperCase()}${e.settings.group==="velocity"?" / "+e.settings.component:""} · ${a?"帧":"Frame"} ${e.settings.frame} · ${e.settings.plane==="oblique"?(e.settings.rotationAxis||"y").toUpperCase()+" "+e.settings.angle+"° / "+e.settings.sectionPercent+"%":e.settings.plane.toUpperCase()+" / "+e.settings.sliceIndex}`,storageNote:e=>e?"场方案与水面方案分开保存。仅保存在当前浏览器和网站地址；清除网站数据会丢失，请导出备份。导入文件仅在本机读取，不含场数据或计算结果；仅支持场比较方案 JSON。":"Field views are stored separately from wave views in this browser and site address. Clearing site data removes them; export a backup. Imports are read locally and contain no field arrays or computed results. Only field-view JSON is supported."};function rl(e){return n.createElement(Qi,{adapter:cl,...e})}function Va(e){if(new TextEncoder().encode(e).length>2*1024*1024)throw Error("Analysis file too large");let a;try{a=JSON.parse(e)}catch{throw Error("Invalid analysis JSON")}if(a?.schema==="oceanscope.paired-case.v1")return{kind:"pairedCase",value:a};if(a?.schema===lt)return{kind:"report",value:a};if(a?.schema===$s)return{kind:"velocity",value:a};if(a?.schema===Ls)return{kind:"velocityComparison",value:a};if(a?.schema===ma)return{kind:"field",value:a};if(a&&!a.schema&&a.schemaVersion===1&&typeof a.runId=="string"&&a.protocol&&a.datasetA&&a.datasetB&&"subset"in a&&"metric"in a&&"frame"in a)return{kind:"selection",value:a};throw Error("Unsupported analysis file")}const ol={pairedCase:["一页案例：核验水面和速度资源，恢复热点、双剖面、切片与配对流线。","One-page case: verify both resources and restore the hotspot, profiles, slice and streamlines."],velocityComparison:["三帧速度对照：核验三个速度资源，恢复固定选区、探针、箭头和第三图。","Three-frame velocity comparison: verify all three resources and restore the fixed ROI, probe, arrows, and comparison map."],velocity:["速度诊断报告：重新核验对应帧的速度资源，恢复切片、ROI、探针、箭头和方向阈值。","Velocity report: verify the selected frame’s velocity resource and restore the slice, ROI, probe, arrows, and direction threshold."],report:["完整分析报告：恢复帧、选区、探针、截面和可用相机；重新核验资源。","Analysis report: restore frame, ROI, probe, section and available camera; verify resources again."],field:["场比较方案：恢复数据组合、三维帧、显示设置与相机；不含水面高度选区。","Field view: restore dataset, geometry frame, display settings and camera; no surface-height ROI."],selection:["序列选择：只恢复帧号、帧集合与曲线类型；不恢复选区或相机。","Sequence selection: restore only frame, frame set and curve; no ROI or camera."]};function ll({onRestore:e,zh:a,controlRef:t}){const[s,i]=S.useState(""),[c,r]=S.useState(""),[o,d]=S.useState(null),[m,f]=S.useState(""),[h,E]=S.useState(!1),b=S.useRef(null);function p(){b.current&&(b.current.abort(),b.current=null,E(!1),f(a?"恢复已取消，保留后续操作。":"Restore cancelled; newer actions retained."))}S.useImperativeHandle(t,()=>({cancel:p})),S.useEffect(()=>()=>b.current?.abort(),[]);let l;try{s.trim()&&(l=Va(s))}catch{}async function v(j){if(p(),!j)return;const x=new AbortController;b.current=x,d(null),i(""),r(j.name),f("");try{if(j.size>2*1024*1024)throw Error("Analysis file too large");const u=await j.text();x.signal.throwIfAborted(),Va(u),i(u)}catch(u){x.signal.aborted||d(u)}finally{b.current===x&&(b.current=null)}}async function g(){p();const j=new AbortController;b.current=j,E(!0),d(null),f(a?"正在识别文件并核验资源…":"Recognizing the file and verifying resources…");try{const x=Va(s);await e(s,x,j.signal),j.signal.throwIfAborted(),f(a?"恢复完成。请核对当前帧和范围；导出前重新生成报告。":"Restored. Check frame and scope; create a fresh report before exporting.")}catch(x){j.signal.aborted||(d(x),f(""))}finally{b.current===j&&(b.current=null,E(!1))}}return n.createElement("details",{"data-os-loc":"src/RestoreAnalysis.jsx:11:9",id:"restore-analysis",className:"restore-analysis"},n.createElement("summary",{"data-os-loc":"src/RestoreAnalysis.jsx:11:69"},a?"恢复分析 · 打开 JSON":"Restore analysis · Open JSON"),n.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:140"},a?"选择文件或粘贴内容，工具会识别恢复范围。文件在本机读取，仍需匹配的数据资源。":"Choose a file or paste its contents. The tool identifies what it restores. Files stay local; matching data resources are required."),n.createElement("label",{"data-os-loc":"src/RestoreAnalysis.jsx:11:325"},a?"选择分析文件":"Choose analysis file"," ",n.createElement("input",{"data-os-loc":"src/RestoreAnalysis.jsx:11:369",type:"file",accept:".json,application/json","aria-label":"Analysis JSON file",onChange:j=>{v(j.target.files?.[0]),j.target.value=""}})),c&&n.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:532"},c),n.createElement("label",{"data-os-loc":"src/RestoreAnalysis.jsx:11:550"},a?"或粘贴 JSON":"Or paste JSON",n.createElement("textarea",{"data-os-loc":"src/RestoreAnalysis.jsx:11:588","aria-label":"Analysis JSON text",rows:"4",value:s,onChange:j=>{p(),i(j.target.value),r(""),d(null),f("")}})),l&&n.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:768",className:"import-kind"},ol[l.kind][a?0:1]),n.createElement("div",{"data-os-loc":"src/RestoreAnalysis.jsx:11:845",className:"reference-controls"},n.createElement("button",{"data-os-loc":"src/RestoreAnalysis.jsx:11:881",disabled:!s.trim()||h,onClick:g},a?"恢复这份分析":"Restore this analysis"),h&&n.createElement("button",{"data-os-loc":"src/RestoreAnalysis.jsx:11:990",onClick:p},a?"取消恢复":"Cancel restore")),n.createElement(Ue,{error:o,zh:a}),n.createElement("p",{"data-os-loc":"src/RestoreAnalysis.jsx:11:1097",role:"status","aria-live":"polite"},m))}const dl=`{
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
`,fl=`{
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
`,ml=`# OceanScope public source summary

This release presents supplied scene and model descriptions as claims, not independently audited training history. Original machine paths and source prose are omitted. Numerical results, masks and protocol identities are retained.

- Model: "Model A"
- Scene: "v2 Gentle clean full-SDF velocity"
- Camera configuration: ["camera29","camera32","camera35","camera02","camera05","camera08","camera11","camera14","camera17","camera20","camera23","camera26"]
- Source frame rate: "24 fps; 1001–1096"
- Train / validation / test: "v2 all96 test; never used for training/checkpoint choice"
- OceanBox training scenes: ["variant_00000","variant_00001","variant_00002","variant_00003","variant_00004","variant_00008"]
- Preprocessing: "Temporal smoothing"
- Unit evidence: "source convention; not independently calibrated"
`,bl=`# OceanScope public source summary

This release presents supplied scene and model descriptions as claims, not independently audited training history. Original machine paths and source prose are omitted. Numerical results, masks and protocol identities are retained.

- Model: "Model A"
- Scene: "v2 Gentle clean full-SDF velocity"
- Camera configuration: ["camera29","camera32","camera35","camera02","camera05","camera08","camera11","camera14","camera17","camera20","camera23","camera26"]
- Source frame rate: "24 fps; 1001–1096"
- Train / validation / test: "v2 all96 test; never used for training/checkpoint choice"
- OceanBox training scenes: ["variant_00000","variant_00001","variant_00002","variant_00003","variant_00004","variant_00008"]
- Preprocessing: "Temporal smoothing"
- Unit evidence: "source convention; not independently calibrated"
`;function pl(e,a){const t=[];(e?.gtRole!=="gt"||a?.gtRole!=="gt"||e?.predictionRole!=="prediction"||a?.predictionRole!=="prediction")&&t.push("Explicit GT/prediction roles required");for(const i of["scene","gtManifest","protocolSha256","frameIds","domain","unitStatus"])(e?.[i]==null||a?.[i]==null||Sn(e[i])!==Sn(a[i]))&&t.push(`Different or unknown ${i}`);const s=["camera","model","preprocessing"].filter(i=>Sn(e?.[i])!==Sn(a?.[i]));return{comparable:t.length===0,blockedReasons:t,differences:s}}async function ul(e,a,t){const s=JSON.parse(e);if(s.schemaVersion!==1||s.runId!==a.runId||s.protocolSha256!==a.protocol.sourceScriptSha256||s.manifestA!==a.datasetA.manifestSha256||s.manifestB!==a.datasetB.manifestSha256)throw Error("Declaration identity mismatch");if(!Array.isArray(s.entries)||new Set(s.entries.map(c=>c.id)).size!==s.entries.length)throw Error("Invalid declarations");const i={gtIdentity:s.manifestA,predictionIdentity:s.manifestB};for(const c of s.entries){if(!["claimed","verified","unknown"].includes(c.status)||!c.id||!c.label)throw Error("Invalid declaration status");if(c.status==="unknown"&&c.value!==null)throw Error("Unknown declaration must have no asserted value");if(c.status==="verified"&&(!Object.hasOwn(i,c.id)||c.value!==i[c.id]))throw Error("Unsupported independent verification claim");if(c.status==="claimed"&&!c.source)throw Error("Claim needs its source");if(c.source&&(typeof t[c.source.file]!="string"||await Ft(t[c.source.file])!==c.source.sha256))throw Error("Declaration source checksum mismatch")}if(s.conditions?.gtManifest!==s.manifestA||s.conditions.protocolSha256!==s.protocolSha256||Sn(s.conditions.frameIds)!==Sn(a.frameIds)||!pl(s.conditions,s.conditions).comparable)throw Error("Declaration conditions mismatch");return{...s,sha256:await Ft(e)}}async function hl(e){if(e.id!=="best-1027")return null;const a=await vi(dl,Wn,e);return{...a,verifiedPayloadSha256:Wn.sha256,declarations:await ul(fl,a,{"METRICS.md":ml,"SPLIT.md":bl})}}function gl({analysisSection:e,onAnalysisSection:a,item:t,active:s,viewApiRef:i,initialView:c,onViewReady:r,onViewRestored:o,restoring:d,onCancelImport:m}){const{language:f}=ce(),h=f==="zh",[E,b]=S.useState(()=>c?.settings.group||(t.comparison.settings?.previewOnly&&t.comparison.availableGroups.includes("velocity")?"velocity":"sdf")),[p,l]=S.useState(null),[v,g]=S.useState(""),j=S.useRef(us()),[x,u]=S.useState(0);S.useEffect(()=>(l(null),g(""),j.current.run(()=>hl(t)).then(B=>{B&&l(B)}).catch(B=>g(B.message)),()=>j.current.cancel()),[t,x]);const y=!!t.comparison.settings?.previewOnly,w=!!t.metrics?.reconstructionEvaluation,_=n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:22:14",className:"public-field-provenance"},n.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:22:55"},t.description),n.createElement("dl",{"data-os-loc":"src/FieldSamples.jsx:22:80"},n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:23:3"},n.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:23:8"},"Ground Truth"),n.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:23:29"},t.comparison.labels?.gt?.displayName)),n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:24:3"},n.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:24:8"},"Prediction"),n.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:24:27"},y?h?"未提供；不计算误差":"Not included; no error scores":t.comparison.labels?.prediction?.displayName)),n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:25:3"},n.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:25:8"},h?"三维表面 / 体积场":"3D surface / volume frames"),n.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:25:63"},Vn(t).length?`1001–1096 / ${t.processing.frames.map(B=>B.frame).join(", ")}`:t.processing.frames.map(B=>B.frame).join(", "))),n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:26:3"},n.createElement("dt",{"data-os-loc":"src/FieldSamples.jsx:26:8"},h?"数据语义":"Data semantics"),n.createElement("dd",{"data-os-loc":"src/FieldSamples.jsx:26:45"},w?h?"原分辨率有效 SDF/速度对比；三帧高度与水下速度评估，采用明确的本地计算规则。":"Native valid SDF/velocity comparison; three-frame height and underwater evaluation under an explicit local protocol.":y?h?"单位未声明":"Units undeclared":h?"条件性 GT 水体距离误差；外部填充值不参与距离评分":"Conditional GT-water distance scores; filled exterior excluded from distance scoring"))));return n.createElement(il,{focusedLayout:!0,workspace:e,onWorkspace:a,unifiedRestore:!0,onCancelImport:m,onRetryEvaluation:()=>u(B=>B+1),evaluation:p,evaluationError:v,comparison:t.comparison,processing:t.processing,activeGroup:E,onActiveGroup:b,setup:_,expectedFrames:Object.keys(t.metrics?.frames||{}).map(Number),metricsOverride:t.metrics||null,sourceCase:t,viewApiRef:i,initialView:c,onViewReady:r,onViewRestored:o,restoring:d,readOnly:!0,active:s})}function Bl({request:e,active:a=!0,analysisSection:t="3d",onAnalysisSection:s}){const{tr:i,language:c}=ce(),r=c==="zh",o=S.useRef(null),d=S.useRef(0),m=S.useRef(null),f=S.useRef(null);S.useEffect(()=>()=>f.current?.reject(new DOMException("Cancelled","AbortError")),[]),S.useEffect(()=>{(!a||t!=="report")&&m.current?.cancel()},[a,t]);const[h,E]=S.useState(0),[b,p]=S.useState(null),[l,v]=S.useState(!1),[g,j]=S.useState(!1),[x,u]=S.useState(null),[y,w]=S.useState(null),[_,B]=S.useState(""),[C,A]=S.useState(""),[O,P]=S.useState(""),[k,I]=S.useState(0),[D,F]=S.useState(!1);S.useEffect(()=>{let z=!0;return Ei().then($=>{if(!z)return;bc($.cases),w($);const N=Za("public-case")?.id,J=$.cases.some(Q=>Q.id===N)?N:$.defaultCaseId||$.cases[0].id;B(J),A(J),P("")}).catch($=>{z&&P($.message)}),()=>{z=!1}},[k]),S.useEffect(()=>{e?.id&&y?.cases.some(z=>z.id===e.id)&&T(e.id)},[e,y]),S.useEffect(()=>{_&&xs("public-case",{id:_})},[_]);function T(z){m.current?.cancel(),E(++d.current),o.current?.pause(),p(null),j(!1),v(!1),u(null),B(z),A(z),F(!1)}function M(z){try{const $=cn(z,y.cases);o.current?.pause();const N=++d.current;E(N),v(!1),j(!0),u(null),F(!1),B($.settings.caseId),A($.settings.caseId),p({doc:$,token:N})}catch($){u({error:$})}}async function V(z,$,N){if(N.throwIfAborted(),$.kind!=="field"){if(!o.current?.restoreAnalysis)throw Error("Analysis is not ready");return o.current.restoreAnalysis(z,$.kind,N)}const J=cn($.value,y.cases);return new Promise((Q,be)=>{const le=()=>{f.current?.signal===N&&(f.current=null,++d.current,p(null),j(!1),be(new DOMException("Cancelled","AbortError")))};N.addEventListener("abort",le,{once:!0});const ye=we=>{N.removeEventListener("abort",le),we?be(we):Q()};f.current={signal:N,finish:ye,reject:be},M(J)})}function X(z,$){if(z!==d.current)return;const N=f.current;f.current=null,N?.finish($),j(!1),u($?{error:$}:{cn:"场方案已恢复：样例、帧、切面、探针、视角与显示设置已同步，播放已暂停。",en:"Field view restored: sample, frame, section, probe, camera and display settings are synchronized. Playback paused."})}const Y=y?.cases.find(z=>z.id===_),q=y?.cases.find(z=>z.id===C);return Y?.comparison.settings?.previewOnly,n.createElement("section",{"data-os-loc":"src/FieldSamples.jsx:62:9",className:"public-field-demo","aria-label":"Published field examples"},n.createElement("header",{"data-os-loc":"src/FieldSamples.jsx:63:3",className:"demo-case-header"},n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:63:40"},n.createElement("h1",{"data-os-loc":"src/FieldSamples.jsx:63:45"},Y?.name||(r?"场分析":"Field analysis")),n.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:63:95"},Y&&(r?`${Vn(Y).length||Y.processing.frames.length}帧三维 · ${Y.processing.frames.length}帧体积场`:`${Vn(Y).length||Y.processing.frames.length} 3D frames · ${Y.processing.frames.length} volume frames`))),n.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:63:357",disabled:g,"aria-expanded":D,onClick:()=>{A(_),F(z=>!z)}},r?"数据与示例":"Datasets & examples")),O?n.createElement(Ue,{error:O,zh:r,resource:r?"示例目录":"Sample catalogue",onRetry:()=>I(z=>z+1)}):y?n.createElement(n.Fragment,null,D&&n.createElement("section",{"data-os-loc":"src/FieldSamples.jsx:66:14",className:"sample-setup","aria-label":"Sample dataset selection"},n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:66:86",className:"sample-setup-heading"},n.createElement("h2",{"data-os-loc":"src/FieldSamples.jsx:66:124"},r?"数据与对比设置":"Datasets & comparison setup"),n.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:66:177"},r?"选择已发布的数据组合，打开已有分析结果。":"Choose a published dataset pair to open its existing analysis.")),n.createElement("label",{"data-os-loc":"src/FieldSamples.jsx:67:5"},r?"示例组合":"Published example",n.createElement("select",{"data-os-loc":"src/FieldSamples.jsx:67:43","aria-label":"Published field example",value:C,onChange:z=>A(z.target.value)},y.cases.map(z=>n.createElement("option",{"data-os-loc":"src/FieldSamples.jsx:67:168",key:z.id,value:z.id},z.name)))),q&&n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:68:13",className:"sample-dataset-grid"},n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:68:50",className:"sample-source"},n.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:68:81",className:"source-role"},"GROUND TRUTH"),n.createElement("h3",{"data-os-loc":"src/FieldSamples.jsx:68:130"},q.comparison.labels?.gt?.displayName),n.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:68:181"},q.comparison.availableGroups.join(" + ").toUpperCase()),n.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:68:248"},r?"可用":"Ready")),n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:68:284",className:"sample-source"},n.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:68:315",className:"source-role prediction"},"PREDICTION"),n.createElement("h3",{"data-os-loc":"src/FieldSamples.jsx:68:373"},q.comparison.settings?.previewOnly?r?"无预测数据":"No prediction included":q.comparison.labels?.prediction?.displayName),n.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:68:509"},q.comparison.settings?.previewOnly?r?"独立查看，不显示误差指标":"Standalone inspection without error metrics":r?"已对齐的场数据 · 已记录的计算规则":"Aligned fields · Recorded evaluation protocol"))),n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:69:5",className:"sample-actions"},n.createElement("span",{"data-os-loc":"src/FieldSamples.jsx:69:37"},r?"本工具读取已有样例与分析资源；原始 VDB / ABC 处理需使用配套离线流程。":"This tool reads existing samples and analysis resources; raw VDB / ABC processing uses the separate offline workflow."),n.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:69:217",onClick:()=>F(!1)},r?"取消":"Cancel"),n.createElement("button",{"data-os-loc":"src/FieldSamples.jsx:69:284",className:"primary",onClick:()=>{T(C)}},q?.comparison.settings?.previewOnly?r?"查看 Ground Truth":"View Ground Truth":r?"打开已有对比":"Open saved comparison"))),Y&&n.createElement(n.Fragment,null,n.createElement("div",{"data-os-loc":"src/FieldSamples.jsx:71:13",className:"demo-session-tools",hidden:t!=="report"},n.createElement(ll,{controlRef:m,zh:r,onRestore:V}),n.createElement(rl,{unifiedRestore:!0,catalog:y.cases,ready:l,restoring:g,onCapture:()=>o.current.captureView(),onRestore:M,restoreNotice:x})),n.createElement(gl,{analysisSection:t,onAnalysisSection:s,onCancelImport:()=>m.current?.cancel(),key:`${Y.id}:${h}`,item:Y,active:a,viewApiRef:o,initialView:b?.doc,onViewReady:v,restoring:g,onViewRestored:z=>X(b?.token,z)}))):n.createElement("p",{"data-os-loc":"src/FieldSamples.jsx:65:130",role:"status"},r?"正在加载示例…":"Loading samples…"))}export{Bl as default};
