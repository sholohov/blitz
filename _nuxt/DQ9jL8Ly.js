import{d as q,r as H,l as K,an as R,m as U,B as W,o as u,n as d,N as g,h as _,p as m,a4 as S,F as A,D as C,g as G,I as p,ao as J,v as $,x,j as V,_ as P}from"./BzQ49_ll.js";import{d as j}from"./DD4asW33.js";function Q(a){const b=[],c={root:null,threshold:0,rootMargin:"0px 0px 0px 0px",...a};if(typeof c.target=="string"){const n=document.querySelectorAll(c.target);Array.prototype.forEach.call(n,i=>{b.push(i)})}else Array.isArray(c.target)?c.target.forEach(n=>{b.push(n)}):b.push(c.target);const s=new IntersectionObserver(n=>{n.forEach(i=>{const{target:y,isIntersecting:h}=i;c.visibleClassName&&y.classList[h?"add":"remove"](c.visibleClassName),c.hiddenSelector&&y.classList[h?"remove":"add"](c.hiddenSelector),typeof a.callback=="function"&&a.callback(i),a.once&&h&&s.unobserve(y)})},{root:a.root,rootMargin:a.rootMargin,threshold:a.threshold});return b.forEach(n=>s.observe(n)),s}const X={key:0,class:"ui-table__header"},Y={class:"ui-table__head"},Z={class:"ui-table__head-row"},ee={class:"ui-table__sort"},te=["title","onClick"],ae={key:0,class:"ui-table__sort-icons"},re={key:0,class:"ui-table__summary"},se={class:"ui-table__body"},oe=["onClick"],le={key:0,class:"ui-table__no-data"},ie={key:1,class:"ui-table__footer"},de=q({__name:"UiTable",props:{data:{type:Array,required:!0,default:()=>[]},headers:{type:Array,required:!0,default:()=>[]},summary:{type:Object,default:void 0},defaultSort:{type:Object,default:void 0},noWrap:{type:Boolean,default:!1},scrollAutoDisabling:{type:Boolean,default:!1},scrollToTop:{type:Boolean,default:!1},isFixed:{type:Boolean,default:!1},height:{type:String,default:void 0},rowKey:{type:String,default:void 0},maxHeight:{type:String,default:void 0},minHeight:{type:String,default:void 0}},emits:["sort","row-click"],setup(a,{expose:b,emit:c}){var M,E;const s=a,n=H(),i=K({order:((M=s.defaultSort)==null?void 0:M.order)??"",prop:((E=s.defaultSort)==null?void 0:E.prop)??""}),y=H([]);R(()=>{var e;y.value=s.data,w(),s.scrollToTop&&((e=n.value)==null||e.scrollTo({top:0}))});let h=null;function D(){n.value&&(h=Q({target:[n.value],visibleClassName:"ui-table__scroll--in-view",threshold:1,callback(e){const o=e.target;e.isIntersecting?j(!1,o):(j(!0,o),o.scrollTo({top:0}))}}))}U(()=>{s.scrollAutoDisabling&&D()}),W(()=>{s.scrollAutoDisabling&&(h==null||h.disconnect())});const N=e=>({textAlign:e.align,width:Number(e.width)?`${e.width}px`:"auto"}),B=(e="default")=>!!J()[e];function w(){var t;let e=i.order,o=i.prop;e===""&&s.defaultSort&&(e=s.defaultSort.order,o=s.defaultSort.prop);const r=(t=s.headers)==null?void 0:t.find(f=>f.key===o);r&&(typeof r.sortMethod=="function"?y.value.sort((f,l)=>{var v,k;return e==="desc"?((v=r.sortMethod)==null?void 0:v.call(r,l,f))||0:((k=r.sortMethod)==null?void 0:k.call(r,f,l))||0}):r.sortable===!0&&y.value.sort((f,l)=>{const v=(e==="desc"?l:f)[o],k=(e==="desc"?f:l)[o];return String(v).localeCompare(String(k),void 0,{numeric:!0,sensitivity:"base"})}))}const T=c;function O(e){let o=e.key,r=i.order;i.prop!==o&&(r=""),r?r==="asc"?r="desc":(r="",o=""):r="asc",i.order=r,i.prop=o}function z(e){e.sortable&&(O(e),w(),T("sort",{...i,column:e}))}function F(e,o){return typeof e.formatter=="function"?e.formatter(o):o}function I(e,o){return i.order===e&&i.prop===o}function L(e){return typeof s.summary!="object"||!Object.keys(s.summary).includes(e.key)?"":typeof e.formatter=="function"?e.formatter(s.summary[e.key]):s.summary[e.key]}return b({sortItems:w}),(e,o)=>{const r=P;return u(),d("div",{class:p(["ui-table",[a.noWrap?"ui-table--no-wrap":""]]),style:S({height:a.height,maxHeight:a.maxHeight,minHeight:a.minHeight})},[B("header")?(u(),d("div",X,[g(e.$slots,"header")])):_("",!0),m("div",{ref_key:"tableScrollRef",ref:n,class:"ui-table__scroll"},[m("table",{class:"ui-table__table",style:S({tableLayout:a.isFixed?"fixed":"auto"})},[m("thead",Y,[m("tr",Z,[(u(!0),d(A,null,C(a.headers,t=>(u(),d("th",{key:t.key,style:S(N(t)),class:"ui-table__cell ui-table__cell--header"},[m("div",ee,[m("button",{title:t.tooltip,class:p(["ui-table__sort-btn",[t.sortable?"ui-table__sort-btn--has-sort":""]]),onClick:f=>z(t)},[g(e.$slots,`${t.key}-header`,{},()=>[$(x(t.label),1)])],10,te),t.sortable?(u(),d("span",ae,[V(r,{size:"16",name:"arrow-up",class:p(["ui-table__sort-icon",[I("asc",t.key)?"is-active":""]])},null,8,["class"]),V(r,{size:"16",name:"arrow-down",class:p(["ui-table__sort-icon",[I("desc",t.key)?"is-active":""]])},null,8,["class"])])):_("",!0)]),a.summary?(u(),d("div",re,[g(e.$slots,`${t.key}-summary`,{},()=>[$(x(L(t)),1)])])):_("",!0)],4))),128))])]),m("tbody",se,[(u(!0),d(A,null,C(G(y),(t,f)=>(u(),d("tr",{key:String(a.rowKey?t[a.rowKey]:f),class:"ui-table__row",onClick:l=>T("row-click",t)},[(u(!0),d(A,null,C(a.headers,l=>(u(),d("td",{key:l.key,class:p(["ui-table__cell",[l.rowClass?l.rowClass:""]]),style:S(N(l))},[t?g(e.$slots,`${l.key}`,{key:0,row:t,data:t[l.key],index:f},()=>[$(x(F(l,t[l.key])),1)]):_("",!0)],6))),128))],8,oe))),128))])],4),Array.isArray(a.data)&&a.data.length?_("",!0):(u(),d("div",le," Нет данных "))],512),B("footer")?(u(),d("div",ie,[g(e.$slots,"footer")])):_("",!0)],6)}}});export{de as _,Q as i};
