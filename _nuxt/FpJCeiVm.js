import{_ as P}from"./CzIwMopt.js";import{_ as x}from"./B5RtmFoY.js";import{_ as I}from"./BYsS9vqb.js";import{_ as T}from"./BufGgsVL.js";import{u as S}from"./Wb6dze4w.js";import{d as $,j as m,s as e,c as B,k as V,E as C,m as p,o as E,n as N,p as o,g as r,w as i,t as L,e as _}from"./CbpaTVLF.js";import{_ as M}from"./CC4nJMY4.js";import"./CWJ3BWWI.js";import"./SB0MPsD8.js";import"./DlAUqK2U.js";import"./DD4asW33.js";const R={class:"leaderboards-tanks-page"},U={class:"leaderboards-tanks-page__tank"},j={class:"leaderboards-tanks-page__tank-name"},X=$({__name:"tanks",setup(z){const l=S(),a=m({loading:0,tanks:[],items:[]}),d=m({page:1,pageSize:99}),u=[{key:"position",label:"#",width:40,align:"center"},{key:"name",label:"Название"},{key:"players",label:"Игроков",tooltip:e.stat.accountProp("battles"),formatter:t=>e.number.toInteger(t)},{key:"battles",label:"Боёв всего",tooltip:e.stat.accountProp("battles"),formatter:t=>e.number.toInteger(t)},{key:"win_rate",label:"Победы",tooltip:e.stat.accountProp("winRate"),formatter:t=>e.number.toFloatNumber(t)},{key:"damage_per_battle",label:"Урон",tooltip:e.stat.accountProp("damagePerBattle"),formatter:t=>e.number.toInteger(t)},{key:"xp_per_battle",label:"Опыт",tooltip:e.stat.accountProp("xp"),formatter:t=>e.number.toInteger(t)}],c=B(()=>l.vehicles);V(()=>{b()});async function g(){a.loading++;try{const{data:t}=await C.leaderboards.getTanks(d);a.tanks=t}catch(t){a.tanks=[],p(t,{title:"Получение рейтинга игроков"})}a.loading--}async function f(){if(!c.value){a.loading++;try{await l.getTanksVehicles()}catch(t){p(t,{title:"Получение данных описания техники"})}a.loading--}}function k(){const t=c.value;a.tanks.length&&t&&(a.items=a.tanks.map(s=>({...s,...t[s.tank_id]})))}async function b(){await Promise.all([g(),f()]),k()}return(t,s)=>{const h=P,y=x,w=I,v=T;return E(),N("div",R,[s[0]||(s[0]=o("div",{class:"leaderboards-tanks-page__description content-area"},[o("h2",null,"Топ популярных танков (тест)"),o("p",null,"Чем выше позиция рейтинге, тем больше боёв сыграно на танке."),o("p",null,"В учёт бои сыгранные игроками зарегистрированными на данном ресурсе.")],-1)),r(w,{"no-wrap":"","row-key":"id","scroll-to-top":"","scroll-auto-disabling":"",headers:u,data:_(a).items,height:"calc(100vh - 112px)"},{position:i(({index:n})=>[r(M,{position:n+1},null,8,["position"])]),name:i(({row:n})=>[o("div",U,[r(h,{class:"leaderboards-tanks-page__tank-img",src:n.images.preview,alt:n.name},null,8,["src","alt"]),o("div",j,L(n.name),1)])]),win_rate:i(({row:n})=>[r(y,{"win-rate":n.win_rate,class:"leaderboards-tanks-page__win-rate"},null,8,["win-rate"])]),_:1},8,["data"]),r(v,{loading:_(a).loading>0},null,8,["loading"])])}}});export{X as default};
