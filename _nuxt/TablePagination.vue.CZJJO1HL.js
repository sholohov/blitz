import{_ as P}from"./disableScroll.DWKNMT60.js";import{_ as S}from"./UiButton.vue.Bm7hv4rP.js";import{f as v,i as d,o as x,c as B,a as g,b as t,w as r,k as o,t as _,d as $}from"./entry.DPNISXbu.js";const q={class:"ui-pagination"},z={class:"ui-pagination__inner"},M={class:"ui-pagination__page"},N=v({__name:"UiPagination",props:{pagination:{}},emits:["change"],setup(a,{emit:m}){const f=d(()=>a.pagination.page),h=d(()=>Math.ceil(a.pagination.total/a.pagination.pageSize)),s=d(()=>{const{page:c,pageSize:p,total:l}=a.pagination;return c*p>=l}),i=d(()=>a.pagination.page<=1),e=m,n=c=>{e("change",c)};function b(){i.value||n({...a.pagination,page:a.pagination.page-1})}function C(){s.value||n({...a.pagination,page:a.pagination.page+1})}function k(){i.value||n({...a.pagination,page:1})}function w(){if(!s.value){const{total:c=0,pageSize:p=1}=a.pagination;n({...a.pagination,page:Math.max(Math.ceil(c/p),1)})}}return(c,p)=>{const l=P,u=S;return x(),B("div",q,[g("div",z,[t(u,{title:"На первую","is-square":"","is-text":"",disabled:o(i),onClick:k},{default:r(()=>[t(l,{class:"ui-pagination__btn-icon",name:"first-page"})]),_:1},8,["disabled"]),t(u,{title:"На предыдущую","is-square":"","is-text":"",disabled:o(i),onClick:b},{default:r(()=>[t(l,{class:"ui-pagination__btn-icon",name:"arrow-left"})]),_:1},8,["disabled"]),g("div",M,_(o(f))+" / "+_(o(h)),1),t(u,{title:"На следующую","is-square":"","is-text":"",disabled:o(s),onClick:C},{default:r(()=>[t(l,{class:"ui-pagination__btn-icon",name:"arrow-right"})]),_:1},8,["disabled"]),t(u,{title:"На последнюю","is-square":"","is-text":"",disabled:o(s),onClick:w},{default:r(()=>[t(l,{class:"ui-pagination__btn-icon",name:"last-page"})]),_:1},8,["disabled"])])])}}}),D={class:"table-pagination"},U={class:"table-pagination__inner"},V={class:"table-pagination__total"},y=g("span",{class:"table-pagination__total-title"}," Кол-во: ",-1),O={class:"table-pagination__pagination"},F=v({__name:"TablePagination",props:{pagination:{type:Object,default:()=>({}),required:!0}},emits:["change"],setup(a,{emit:m}){const f=a,h=d(()=>{const{page:i,pageSize:e,total:n}=f.pagination;return Math.min(e,n-(i-1)*e)}),s=m;return(i,e)=>{const n=N;return x(),B("div",D,[g("div",U,[g("div",V,[y,$(" "+_(o(h))+" / "+_(a.pagination.total),1)]),g("div",O,[t(n,{pagination:a.pagination,onChange:e[0]||(e[0]=b=>s("change",b))},null,8,["pagination"])])])])}}});export{F as _};
