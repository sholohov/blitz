import{f as K,ae as H,af as j,W as b,I as c,r as A,ag as k,ah as O,h as _,z as S,ai as T,aa as I,aj as v,ak as R,al as N,am as L,an as B,ao as C,M as q,Z as w,ap as E,aq as F}from"./entry.DP5yAQ98.js";const V=K({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const i=e.renderKey,n=e.route,a={};for(const r in e.route)Object.defineProperty(a,r,{get:()=>i===e.renderKey?e.route[r]:n[r]});return H(b,j(a)),()=>c(e.vnode,{ref:e.vnodeRef})}}),D=K({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:i,expose:n}){const a=I(),r=A(),o=k(b,null);let u;n({pageRef:r});const d=k(O,null);let s;const f=a.deferHydration();if(a.isHydrating){const t=a.hooks.hookOnce("app:error",f);_().beforeEach(t)}return e.pageKey&&S(()=>e.pageKey,(t,g)=>{t!==g&&a.callHook("page:loading:start")}),()=>c(T,{name:e.name,route:e.route,...i},{default:t=>{const g=M(o,t.route,t.Component),m=o&&o.matched.length===t.route.matched.length;if(!t.Component){if(s&&!m)return s;f();return}if(s&&d&&!d.isCurrent(t.route))return s;if(g&&o&&(!d||d!=null&&d.isCurrent(o)))return m?s:null;const l=v(t,e.pageKey);!a.isHydrating&&!W(o,t.route,t.Component)&&u===l&&a.callHook("page:loading:end"),u=l;const y=!!(e.transition??t.route.meta.pageTransition??R),x=y&&z([e.transition,t.route.meta.pageTransition,R,{onAfterLeave:()=>{a.callHook("page:transition:finish",t.Component)}}].filter(Boolean)),h=e.keepalive??t.route.meta.keepalive??N;return s=L(w,y&&x,B(h,c(C,{suspensible:!0,onPending:()=>a.callHook("page:start",t.Component),onResolve:()=>{q(()=>a.callHook("page:finish",t.Component).then(()=>a.callHook("page:loading:end")).finally(f))}},{default:()=>{const p=c(V,{key:l||void 0,vnode:t.Component,route:t.route,renderKey:l||void 0,trackRootNodes:y,vnodeRef:r});return h&&(p.type.name=t.Component.type.name||t.Component.type.__name||"RouteProvider"),p}}))).default(),s}})}});function z(e){const i=e.map(n=>({...n,onAfterLeave:n.onAfterLeave?E(n.onAfterLeave):void 0}));return F(...i)}function M(e,i,n){if(!e)return!1;const a=i.matched.findIndex(r=>{var o;return((o=r.components)==null?void 0:o.default)===(n==null?void 0:n.type)});return!a||a===-1?!1:i.matched.slice(0,a).some((r,o)=>{var u,d,s;return((u=r.components)==null?void 0:u.default)!==((s=(d=e.matched[o])==null?void 0:d.components)==null?void 0:s.default)})||n&&v({route:i,Component:n})!==v({route:e,Component:n})}function W(e,i,n){return e?i.matched.findIndex(r=>{var o;return((o=r.components)==null?void 0:o.default)===(n==null?void 0:n.type)})<i.matched.length-1:!1}export{D as _};
