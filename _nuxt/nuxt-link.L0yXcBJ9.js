import{q as _,n as B,s as b,a7 as q,r as C,B as w,a8 as L,a9 as N,j,aa as T,P,ab as U,ac as I,ad as O,ae as V,af as D,a5 as E,ag as R,ah as F,ai as H,aj as z}from"./entry.C7rsCkde.js";async function k(t,r=_()){const{path:s,matched:e}=r.resolve(t);if(!e.length||(r._routePreloaded||(r._routePreloaded=new Set),r._routePreloaded.has(s)))return;const n=r._preloadPromises=r._preloadPromises||[];if(n.length>4)return Promise.all(n).then(()=>k(t,r));r._routePreloaded.add(s);const i=e.map(c=>{var a;return(a=c.components)==null?void 0:a.default}).filter(c=>typeof c=="function");for(const c of i){const a=Promise.resolve(c()).catch(()=>{}).finally(()=>n.splice(n.indexOf(a)));n.push(a)}await Promise.all(n)}const M=(...t)=>t.find(r=>r!==void 0);function $(t){const r=t.componentName||"NuxtLink";function s(e,n){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return S(e,t.trailingSlash);const i="path"in e?e.path:n(e).path;return{...e,name:void 0,path:S(i,t.trailingSlash)}}return B({name:r,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:n}){const i=_(),c=E(),a=b(()=>{const l=e.to||e.href||"";return s(l,i.resolve)}),f=b(()=>typeof a.value=="string"&&q(a.value,{acceptRelative:!0})),m=b(()=>e.target&&e.target!=="_self"),p=b(()=>e.external||m.value?!0:typeof a.value=="object"?!1:a.value===""||f.value),x=C(!1),v=C(null),A=l=>{var d;v.value=e.custom?(d=l==null?void 0:l.$el)==null?void 0:d.nextElementSibling:l==null?void 0:l.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!W()){const d=R();let h,u=null;w(()=>{const y=Q();L(()=>{h=N(()=>{var g;(g=v==null?void 0:v.value)!=null&&g.tagName&&(u=y.observe(v.value,async()=>{u==null||u(),u=null;const o=typeof a.value=="string"?a.value:i.resolve(a.value).fullPath;await Promise.all([d.hooks.callHook("link:prefetch",o).catch(()=>{}),!p.value&&k(a.value,i).catch(()=>{})]),x.value=!0}))})})}),j(()=>{h&&T(h),u==null||u(),u=null})}return()=>{var y,g;if(!p.value){const o={ref:A,to:a.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(x.value&&(o.class=e.prefetchedClass||t.prefetchedClass),o.rel=e.rel||void 0),P(U("RouterLink"),o,n.default)}const l=typeof a.value=="object"?((y=i.resolve(a.value))==null?void 0:y.href)??null:a.value&&!e.external&&!f.value?s(I(c.app.baseURL,a.value),i.resolve):a.value||null,d=e.target||null,h=M(e.noRel?"":e.rel,t.externalRelAttribute,f.value||m.value?"noopener noreferrer":"")||null,u=()=>F(l,{replace:e.replace});return e.custom?n.default?n.default({href:l,navigate:u,get route(){if(!l)return;const o=O(l);return{path:o.pathname,fullPath:o.pathname,get query(){return V(o.search)},hash:o.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:l}},rel:h,target:d,isExternal:p.value,isActive:!1,isExactActive:!1}):null:P("a",{ref:v,href:l,rel:h,target:d},(g=n.default)==null?void 0:g.call(n))}}})}const J=$(D);function S(t,r){const s=r==="append"?H:z;return q(t)&&!t.startsWith("http")?t:s(t,!0)}function Q(){const t=R();if(t._observer)return t._observer;let r=null;const s=new Map,e=(i,c)=>(r||(r=new IntersectionObserver(a=>{for(const f of a){const m=s.get(f.target);(f.isIntersecting||f.intersectionRatio>0)&&m&&m()}})),s.set(i,c),r.observe(i),()=>{s.delete(i),r.unobserve(i),s.size===0&&(r.disconnect(),r=null)});return t._observer={observe:e}}function W(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{J as _};
