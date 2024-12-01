import{q as Y,o as $,n as oe,U as ne,V as re,M as se,e as W,g as J,r as b,c as R,f as q,d as ie,j as G,B as le,x as ae,k as ue,l as B,D as ce,W as fe}from"./index-DIrStFNf.js";function F(e){return ne()?(re(e),!0):!1}function y(e){return typeof e=="function"?e():Y(e)}const K=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const de=e=>e!=null,pe=Object.prototype.toString,ve=e=>pe.call(e)==="[object Object]",_=()=>{},me=he();function he(){var e,o;return K&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(?:ad|hone|od)/.test(window.navigator.userAgent)||((o=window==null?void 0:window.navigator)==null?void 0:o.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function z(e,o){function n(...t){return new Promise((l,s)=>{Promise.resolve(e(()=>o.apply(this,t),{fn:o,thisArg:this,args:t})).then(l).catch(s)})}return n}const we=e=>e();function Q(e,o={}){let n,t,l=_;const s=a=>{clearTimeout(a),l(),l=_};return a=>{const m=y(e),c=y(o.maxWait);return n&&s(n),m<=0||c!==void 0&&c<=0?(t&&(s(t),t=null),Promise.resolve(a())):new Promise((f,d)=>{l=o.rejectOnCancel?d:f,c&&!t&&(t=setTimeout(()=>{n&&s(n),t=null,f(a())},c)),n=setTimeout(()=>{t&&s(t),t=null,f(a())},m)})}}function be(...e){let o=0,n,t=!0,l=_,s,v,a,m,c;!se(e[0])&&typeof e[0]=="object"?{delay:v,trailing:a=!0,leading:m=!0,rejectOnCancel:c=!1}=e[0]:[v,a=!0,m=!0,c=!1]=e;const f=()=>{n&&(clearTimeout(n),n=void 0,l(),l=_)};return r=>{const i=y(v),p=Date.now()-o,g=()=>s=r();return f(),i<=0?(o=Date.now(),g()):(p>i&&(m||!t)?(o=Date.now(),g()):a&&(s=new Promise((h,T)=>{l=c?T:h,n=setTimeout(()=>{o=Date.now(),t=!0,h(g()),f()},Math.max(0,i-p))})),!m&&!n&&(n=setTimeout(()=>t=!0,i)),t=!1,s)}}function ye(e){return J()}function ge(e,o=200,n={}){return z(Q(o,n),e)}function Te(e,o=200,n=!1,t=!0,l=!1){return z(be(o,n,t,l),e)}function Ee(e,o,n={}){const{eventFilter:t=we,...l}=n;return W(e,z(t,o),l)}function Z(e,o=!0,n){ye()?$(e,n):o?e():oe(e)}function Ae(e,o,n={}){const{debounce:t=0,maxWait:l=void 0,...s}=n;return Ee(e,o,{...s,eventFilter:Q(t,{maxWait:l})})}function S(e){var o;const n=y(e);return(o=n==null?void 0:n.$el)!=null?o:n}const P=K?window:void 0;function M(...e){let o,n,t,l;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,t,l]=e,o=P):[o,n,t,l]=e,!o)return _;Array.isArray(n)||(n=[n]),Array.isArray(t)||(t=[t]);const s=[],v=()=>{s.forEach(f=>f()),s.length=0},a=(f,d,r,i)=>(f.addEventListener(d,r,i),()=>f.removeEventListener(d,r,i)),m=W(()=>[S(o),y(l)],([f,d])=>{if(v(),!f)return;const r=ve(d)?{...d}:d;s.push(...n.flatMap(i=>t.map(p=>a(f,i,p,r))))},{immediate:!0,flush:"post"}),c=()=>{m(),v()};return F(c),c}let X=!1;function Me(e,o,n={}){const{window:t=P,ignore:l=[],capture:s=!0,detectIframe:v=!1}=n;if(!t)return _;me&&!X&&(X=!0,Array.from(t.document.body.children).forEach(r=>r.addEventListener("click",_)),t.document.documentElement.addEventListener("click",_));let a=!0;const m=r=>l.some(i=>{if(typeof i=="string")return Array.from(t.document.querySelectorAll(i)).some(p=>p===r.target||r.composedPath().includes(p));{const p=S(i);return p&&(r.target===p||r.composedPath().includes(p))}}),f=[M(t,"click",r=>{const i=S(e);if(!(!i||i===r.target||r.composedPath().includes(i))){if(r.detail===0&&(a=!m(r)),!a){a=!0;return}o(r)}},{passive:!0,capture:s}),M(t,"pointerdown",r=>{const i=S(e);a=!m(r)&&!!(i&&!r.composedPath().includes(i))},{passive:!0}),v&&M(t,"blur",r=>{setTimeout(()=>{var i;const p=S(e);((i=t.document.activeElement)==null?void 0:i.tagName)==="IFRAME"&&!(p!=null&&p.contains(t.document.activeElement))&&o(r)},0)})].filter(Boolean);return()=>f.forEach(r=>r())}function Se(){const e=b(!1),o=J();return o&&$(()=>{e.value=!0},o),e}function ee(e){const o=Se();return R(()=>(o.value,!!e()))}function _e(e,o,n={}){const{window:t=P,...l}=n;let s;const v=ee(()=>t&&"MutationObserver"in t),a=()=>{s&&(s.disconnect(),s=void 0)},m=R(()=>{const r=y(e),i=(Array.isArray(r)?r:[r]).map(S).filter(de);return new Set(i)}),c=W(()=>m.value,r=>{a(),v.value&&r.size&&(s=new MutationObserver(o),r.forEach(i=>s.observe(i,l)))},{immediate:!0,flush:"post"}),f=()=>s==null?void 0:s.takeRecords(),d=()=>{a(),c()};return F(d),{isSupported:v,stop:d,takeRecords:f}}function xe(e,o,n={}){const{window:t=P,...l}=n;let s;const v=ee(()=>t&&"ResizeObserver"in t),a=()=>{s&&(s.disconnect(),s=void 0)},m=R(()=>Array.isArray(e)?e.map(d=>S(d)):[S(e)]),c=W(m,d=>{if(a(),v.value&&t){s=new ResizeObserver(o);for(const r of d)r&&s.observe(r,l)}},{immediate:!0,flush:"post"}),f=()=>{a(),c()};return F(f),{isSupported:v,stop:f}}function Ce(e,o={}){const{reset:n=!0,windowResize:t=!0,windowScroll:l=!0,immediate:s=!0}=o,v=b(0),a=b(0),m=b(0),c=b(0),f=b(0),d=b(0),r=b(0),i=b(0);function p(){const g=S(e);if(!g){n&&(v.value=0,a.value=0,m.value=0,c.value=0,f.value=0,d.value=0,r.value=0,i.value=0);return}const h=g.getBoundingClientRect();v.value=h.height,a.value=h.bottom,m.value=h.left,c.value=h.right,f.value=h.top,d.value=h.width,r.value=h.x,i.value=h.y}return xe(e,p),W(()=>S(e),g=>!g&&p()),_e(e,p,{attributeFilter:["style","class"]}),l&&M("scroll",p,{capture:!0,passive:!0}),t&&M("resize",p,{passive:!0}),Z(()=>{s&&p()}),{height:v,bottom:a,left:m,right:c,top:f,width:d,x:r,y:i,update:p}}const U=1;function Oe(e,o={}){const{throttle:n=0,idle:t=200,onStop:l=_,onScroll:s=_,offset:v={left:0,right:0,top:0,bottom:0},eventListenerOptions:a={capture:!1,passive:!0},behavior:m="auto",window:c=P,onError:f=u=>{console.error(u)}}=o,d=b(0),r=b(0),i=R({get(){return d.value},set(u){g(u,void 0)}}),p=R({get(){return r.value},set(u){g(void 0,u)}});function g(u,k){var w,C,D,O;if(!c)return;const E=y(e);if(!E)return;(D=E instanceof Document?c.document.body:E)==null||D.scrollTo({top:(w=y(k))!=null?w:p.value,left:(C=y(u))!=null?C:i.value,behavior:y(m)});const L=((O=E==null?void 0:E.document)==null?void 0:O.documentElement)||(E==null?void 0:E.documentElement)||E;i!=null&&(d.value=L.scrollLeft),p!=null&&(r.value=L.scrollTop)}const h=b(!1),T=q({left:!0,right:!1,top:!0,bottom:!1}),x=q({left:!1,right:!1,top:!1,bottom:!1}),I=u=>{h.value&&(h.value=!1,x.left=!1,x.right=!1,x.top=!1,x.bottom=!1,l(u))},te=ge(I,n+t),j=u=>{var k;if(!c)return;const w=((k=u==null?void 0:u.document)==null?void 0:k.documentElement)||(u==null?void 0:u.documentElement)||S(u),{display:C,flexDirection:D}=getComputedStyle(w),O=w.scrollLeft;x.left=O<d.value,x.right=O>d.value;const E=Math.abs(O)<=(v.left||0),L=Math.abs(O)+w.clientWidth>=w.scrollWidth-(v.right||0)-U;C==="flex"&&D==="row-reverse"?(T.left=L,T.right=E):(T.left=E,T.right=L),d.value=O;let A=w.scrollTop;u===c.document&&!A&&(A=c.document.body.scrollTop),x.top=A<r.value,x.bottom=A>r.value;const H=Math.abs(A)<=(v.top||0),N=Math.abs(A)+w.clientHeight>=w.scrollHeight-(v.bottom||0)-U;C==="flex"&&D==="column-reverse"?(T.top=N,T.bottom=H):(T.top=H,T.bottom=N),r.value=A},V=u=>{var k;if(!c)return;const w=(k=u.target.documentElement)!=null?k:u.target;j(w),h.value=!0,te(u),s(u)};return M(e,"scroll",n?Te(V,n,!0,!1):V,a),Z(()=>{try{const u=y(e);if(!u)return;j(u)}catch(u){f(u)}}),M(e,"scrollend",I,a),{x:i,y:p,isScrolling:h,arrivedState:T,directions:x,measure(){const u=y(e);c&&u&&j(u)}}}const De=ie({__name:"BackToTop",setup(e){const{y:o}=Oe(window),n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return(t,l)=>(G(),le(fe,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-8 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-200 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-8 opacity-0"},{default:ae(()=>[Y(o)>200?(G(),ue("button",{key:0,class:"group fixed bottom-16 right-5 size-12 cursor-pointer rounded-xl bg-gray-900/50 ring-1 ring-white/10 backdrop-blur-sm transition duration-200 ease-in-out hover:-translate-y-1 hover:ring-white/20 sm:size-14 lg:bottom-20","aria-label":"ページトップへ戻る","data-testid":"back-to-top-button",onClick:n},l[0]||(l[0]=[B("div",{class:"flex size-full items-center justify-center text-gray-400 transition duration-200 group-hover:text-white"},[B("svg",{xmlns:"http://www.w3.org/2000/svg",class:"size-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[B("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 10l7-7m0 0l7 7m-7-7v18"})])],-1)]))):ce("",!0)]),_:1}))}});export{De as _,Ce as a,Me as o,Oe as u,Ae as w};
