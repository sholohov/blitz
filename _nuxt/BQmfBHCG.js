import{_ as N}from"./Z7RafptJ.js";import{d as z,M as T,k as f,c as D,l as P,q as j,s as y,G as E,e as k,w as i,o as l,h as c,t as m,v as p,n as V,m as W,f as b,p as _,_ as G,y as M}from"./CjZrE5Wh.js";import{_ as O}from"./DVWFMday.js";import{_ as R}from"./CrA9g0iF.js";import{_ as U}from"./Bx2A0I5R.js";import{_ as q}from"./UsgrnhQW.js";import{n as H}from"./BxBPJGBn.js";import{c as F}from"./ZnSD-95i.js";import"./DD4asW33.js";import"./eaCJGG-n.js";import"./BtCZQDp8.js";import"./Cb74_AAG.js";import"./gCGvA3p7.js";import"./08N2mJ2P.js";import"./Zt_43PKh.js";import"./DBvd0WFK.js";import"./BPrNtVlW.js";import"./f3e3m13b.js";import"./BBnSm2t4.js";import"./DlAUqK2U.js";import"./wGjzNOYn.js";import"./DSeEFkux.js";import"./BRok-xIX.js";import"./DMYS3RtA.js";import"./Qj2LaeAt.js";const J={class:"recruiting-page__name"},K={key:1},xt=z({__name:"recruitment-solo",setup(L){const d=T(),e=f({loading:0,accounts:[],clanAccounts:[]}),o=f({page:1,pageSize:100,total:0});e.loading++;const h=[{label:"#",key:"position",width:40},{label:"Ник",key:"nickname"},{label:"Клан",key:"clan"},{label:"% Побед",key:"win_rate"},{label:"Бои",key:"battles",formatter(t){return _.number.toInteger(t)}},{label:"Урон/Бой",key:"damage_per_battle",formatter(t){return _.number.toInteger(t)}},{label:"Последний бой",key:"last_battle_time",formatter(t){return typeof t=="string"?_.date.toDateTime(t):"---"}}],S=D(()=>e.accounts.map(t=>{var s;const a=(s=e.clanAccounts.find(r=>r.account_id===t.id))==null?void 0:s.clan;return{...t,clan:a}}));P(()=>{u()});async function u(){var t;e.loading--,await C(),(t=e.accounts)!=null&&t.length&&await x(e.accounts.map(a=>a.id))}async function x(t){e.loading++;try{const{data:a}=await j.clan.getAccountInfo({extra:"clan",account_id:t.join(",")});e.clanAccounts=Object.values(a).filter(H)}catch(a){y(a,{title:"Ошибка поучения списка клановых аккаунтов"})}e.loading--}async function C(){var t;e.loading++;try{const a=await E.stat.accounts.getSolo({lastBattleInDays:2,minWinRate:58,minBattles:1e4,minDamagePerBattle:1800,page:o.page,pageSize:o.pageSize});e.accounts=a.data,o.total=(t=a.meta)!=null&&t.hasNext?o.page*o.pageSize+a.data.length:o.page*o.pageSize-1}catch(a){y(a,{title:"Запрос соло игроков"})}e.loading--}async function w(t){await F(t.nickname)?d.add({type:"success",title:"Скопировано",message:t.nickname,duration:3e3}):d.add({type:"error",message:"При копировании что-то пошло не так",duration:3e3})}function B(t){Object.assign(o,t),u()}return(t,a)=>{const s=N,r=G,A=M,g=O,$=R,v=U,I=q;return l(),k(I,{class:"recruiting-page"},{default:i(()=>[c(v,{class:"recruiting-page__table","row-key":"id",data:b(S),headers:h,"scroll-to-top":"","max-height":"calc(100vh - 70px)"},{position:i(({index:n})=>[m(p(n+1),1)]),win_rate:i(({row:n})=>[c(s,{"win-rate":n.win_rate},null,8,["win-rate"])]),nickname:i(({row:n})=>[V("div",J,[c(A,{class:"recruiting-page__name-copy","is-text":"",title:"Копировать (nickname)",onClick:Q=>w(n)},{default:i(()=>[c(r,{name:"content-copy"})]),_:2},1032,["onClick"]),c(g,{class:"link",to:{name:"account-id",params:{id:n.id}}},{default:i(()=>[m(p(n.nickname),1)]),_:2},1032,["to"])])]),clan:i(({row:n})=>[n.clan?(l(),k(g,{key:0,title:n.clan.name,class:"recruiting-page__clan link",to:{name:"clan-id",params:{id:n.clan.clan_id}}},{default:i(()=>[m(p(n.clan.tag),1)]),_:2},1032,["title","to"])):(l(),W("span",K,"---"))]),footer:i(()=>[c($,{pagination:b(o),onChange:B},null,8,["pagination"])]),_:1},8,["data"])]),_:1})}}});export{xt as default};
