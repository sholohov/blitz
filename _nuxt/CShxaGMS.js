const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./nhyh6XV1.js","./AxE_3BVK.js","./DlAUqK2U.js","./BzQ49_ll.js","./entry.C2el_uhD.css","./nuxt-icon.Cvbtxq7p.css","./Cv-UuCz8.js","./CHCCHQkz.js","./Cvpa3So7.js"])))=>i.map(i=>d[i]);
import{d as n,o as r,f as l,I as m,J as c,K as a,L as i,a4 as u,n as _,x as d}from"./BzQ49_ll.js";import{_ as p}from"./nNENDGj9.js";const k=n({__name:"TankType",props:{type:{type:String,required:!0,default:"",validator(e){return["AT-SPG","heavyTank","lightTank","mediumTank"].includes(e)}},size:{type:[Number,String],default:24},isPremium:{type:Boolean,default:!1},isCollectible:{type:Boolean,default:!1}},setup(e){const t={lightTank:a(()=>i(()=>import("./nhyh6XV1.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url)),mediumTank:a(()=>i(()=>import("./Cv-UuCz8.js"),__vite__mapDeps([6,1,2,3,4,5]),import.meta.url)),heavyTank:a(()=>i(()=>import("./CHCCHQkz.js"),__vite__mapDeps([7,1,2,3,4,5]),import.meta.url)),"AT-SPG":a(()=>i(()=>import("./Cvpa3So7.js"),__vite__mapDeps([8,1,2,3,4,5]),import.meta.url))};return(s,o)=>(r(),l(c(e.type in t?t[e.type]:"span"),{filled:!0,"font-controlled":!1,class:m(["tank-type",[e.isPremium?"tank-type--is-premium":"",e.isCollectible?"tank-type--is-collectible":""]]),width:e.size,height:e.size},null,8,["class","width","height"]))}}),T=n({__name:"TankNation",props:{nation:{type:String,default:""},size:{type:[Number,String],default:24}},setup(e){return(t,s)=>{const o=p;return r(),l(o,{style:u({width:`${e.size}px`,height:`${e.size}px`}),src:`/img/nations/nation-${e.nation}.svg`,alt:e.nation,class:"tank-nation"},null,8,["style","src","alt"])}}}),y={class:"tank-tier"},g=n({__name:"TankTier",props:{tier:{type:Number,required:!0}},setup(e){return(t,s)=>(r(),_("div",y,d(t.$formatter.encyclopedia.tier(e.tier)),1))}});export{g as _,k as a,T as b};