import{f as a,o as i,j as n,C as c,D as l,k as m,m as u,J as _,_ as t}from"./entry.DP5yAQ98.js";import{b as d}from"./disableScroll.DjVa_9z0.js";const h=a({__name:"RoleIcon",props:{role:{type:String,default:"",required:!0},width:{type:String,default:"100%"},height:{type:String,default:"auto"}},setup(e){const r=e,o={commander:"leader",executive_officer:"vice-leader",private:"private",recruit:"recruit"},s=_(()=>d(Object.assign({"../assets/icons/ranks/leader.svg":()=>t(()=>import("./leader.D6ddP-Y1.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url),"../assets/icons/ranks/private.svg":()=>t(()=>import("./private.CJcuVYeg.js"),__vite__mapDeps([5,1,2,3,4]),import.meta.url),"../assets/icons/ranks/recruit.svg":()=>t(()=>import("./recruit.DELxXFno.js"),__vite__mapDeps([6,1,2,3,4]),import.meta.url),"../assets/icons/ranks/vice-leader.svg":()=>t(()=>import("./vice-leader.DQV8gbwi.js"),__vite__mapDeps([7,1,2,3,4]),import.meta.url)}),`../assets/icons/ranks/${o[r.role]}.svg`));return(p,v)=>e.role?(i(),n(l(m(s)),{key:0,filled:!0,"font-controlled":!1,class:c(["role-icon",["role-icon--"+e.role]]),width:e.width,height:e.height},null,8,["class","width","height"])):u("",!0)}});export{h as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./leader.D6ddP-Y1.js","./nuxt-icon.DMN9Msny.js","./_plugin-vue_export-helper.DlAUqK2U.js","./entry.DP5yAQ98.js","./nuxt-icon.MfBulapQ.css","./private.CJcuVYeg.js","./recruit.DELxXFno.js","./vice-leader.DQV8gbwi.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
