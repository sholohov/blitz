import{d as s}from"./disableScroll.C0aRP9sA.js";import{ax as l}from"./entry.C7rsCkde.js";import{b as o,a as c}from"./request.2vtDDBdm.js";const t="http://glossary-static-cdn.lesta.ru/icons/wotb/current/uploaded/vehicles",r=l("main",{state:()=>({version:"0.8.0",mainSearchOpened:!1,mobileMenuOpened:!1,vehicles:null,achievements:null}),actions:{openMobileMenu(i){this.mobileMenuOpened=i,s(i)},toggleMobileMenu(i){i===void 0?this.mobileMenuOpened=!this.mobileMenuOpened:this.mobileMenuOpened=i,s(this.mobileMenuOpened)},toggleMainSearch(i){i===void 0?this.mainSearchOpened=!this.mainSearchOpened:this.mainSearchOpened=i},async getTanksVehicles(){const{data:i}=await o.get("/data/tanks.json"),a={};i.forEach(e=>{let n=e.ru_name||e.en_name;n=/^none$/i.test(n)?`TN: ${e.tech_name}`:n??`ID: ${e.cd}`,a[e.cd]={tank_id:e.cd,name:n,nation:e.nation,tier:e.level,type:e.class,is_premium:String(e.tags).includes("premium"),is_collectible:String(e.tags).includes("collectible"),images:{preview:`${t}/hd_thumbnail/${e.tech_name}.png`,normal:`${t}/hd/${e.tech_name}.png`}}}),this.vehicles=a||null},async getAchievements(){const{data:i}=await c.encyclopedia.getAchievements();this.achievements=i??null}}});export{r as u};
