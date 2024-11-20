import{d as x,ax as A,ay as O,az as b,a6 as c,u as _,r as j,aA as R,aB as S,c as T,C,aC as m,aD as K,aE as I,aF as L,aG as N,aH as B,S as F,F as w,aI as E,aJ as q,aK as V,aL as z}from"./BzQ49_ll.js";const D=x({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const o=e.renderKey,a=e.route,r={};for(const n in e.route)Object.defineProperty(r,n,{get:()=>o===e.renderKey?e.route[n]:a[n]});return A(b,O(r)),()=>c(e.vnode,{ref:e.vnodeRef})}}),U=x({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:o,slots:a,expose:r}){const n=_(),i=j(),d=R(b,null);let l;r({pageRef:i});const s=R(S,null);let u;const g=n.deferHydration();if(n.isHydrating){const t=n.hooks.hookOnce("app:error",g);T().beforeEach(t)}return e.pageKey&&C(()=>e.pageKey,(t,y)=>{t!==y&&n.callHook("page:loading:start")}),()=>c(q,{name:e.name,route:e.route,...o},{default:t=>{const y=J(d,t.route,t.Component),h=d&&d.matched.length===t.route.matched.length;if(!t.Component){if(u&&!h)return u;g();return}if(u&&s&&!s.isCurrent(t.route))return u;if(y&&d&&(!s||s!=null&&s.isCurrent(d)))return h?u:null;const f=m(t,e.pageKey);!n.isHydrating&&!M(d,t.route,t.Component)&&l===f&&n.callHook("page:loading:end"),l=f;const v=!!(e.transition??t.route.meta.pageTransition??K),H=v&&G([e.transition,t.route.meta.pageTransition,K,{onAfterLeave:()=>{n.callHook("page:transition:finish",t.Component)}}].filter(Boolean)),p=e.keepalive??t.route.meta.keepalive??I;return u=L(E,v&&H,N(p,c(B,{suspensible:!0,onPending:()=>n.callHook("page:start",t.Component),onResolve:()=>{F(()=>n.callHook("page:finish",t.Component).then(()=>n.callHook("page:loading:end")).finally(g))}},{default:()=>{const k=c(D,{key:f||void 0,vnode:a.default?c(w,void 0,a.default(t)):t.Component,route:t.route,renderKey:f||void 0,trackRootNodes:v,vnodeRef:i});return p&&(k.type.name=t.Component.type.name||t.Component.type.__name||"RouteProvider"),k}}))).default(),u}})}});function G(e){const o=e.map(a=>({...a,onAfterLeave:a.onAfterLeave?V(a.onAfterLeave):void 0}));return z(...o)}function J(e,o,a){if(!e)return!1;const r=o.matched.findIndex(n=>{var i;return((i=n.components)==null?void 0:i.default)===(a==null?void 0:a.type)});return!r||r===-1?!1:o.matched.slice(0,r).some((n,i)=>{var d,l,s;return((d=n.components)==null?void 0:d.default)!==((s=(l=e.matched[i])==null?void 0:l.components)==null?void 0:s.default)})||a&&m({route:o,Component:a})!==m({route:e,Component:a})}function M(e,o,a){return e?o.matched.findIndex(n=>{var i;return((i=n.components)==null?void 0:i.default)===(a==null?void 0:a.type)})<o.matched.length-1:!1}export{U as _};