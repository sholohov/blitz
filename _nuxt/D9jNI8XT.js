import{_ as v}from"./CQB08oTp.js";import{_ as z}from"./DP7BBWgZ.js";import{_ as T}from"./BdFzBH2T.js";import{_ as j}from"./DXoVmfh7.js";import{_ as D}from"./BasnbMXt.js";import{_ as P}from"./Bk-rULPo.js";import{_ as E}from"./Ct3-oKJ2.js";import{n as V}from"./BxBPJGBn.js";import{c as W}from"./ZnSD-95i.js";import{u as O,a as R,h as f,b as U}from"./D_RpC5tF.js";import{f as q,n as y,i as G,q as L,j as k,w as i,o as l,b as c,d as m,t as p,a as M,c as F,k as b,s as _}from"./BM_c6A7U.js";import"./D4aUj366.js";import"./DB4JgT8g.js";import"./DDxGNb5w.js";import"./Ct4DMbE-.js";import"./tz8OXiQC.js";import"./DgZNgcpm.js";import"./Buklct90.js";import"./BL2Wcl4w.js";import"./B7Mce4cO.js";import"./B3PV7--H.js";import"./raUFiEvG.js";import"./DlAUqK2U.js";import"./DKx20K7W.js";import"./Dkx8VsaV.js";import"./DUozLQMQ.js";const H={class:"recruiting-page__name"},J={key:1},Ct=q({__name:"recruiting",setup(K){const d=O(),e=y({loading:0,accounts:[],clanAccounts:[]}),o=y({page:1,pageSize:100,total:0});e.loading++;const h=[{label:"#",key:"position",width:40},{label:"Ник",key:"nickname"},{label:"Клан",key:"clan"},{label:"% Побед",key:"win_rate"},{label:"Бои",key:"battles",formatter(t){return _.number.toInteger(t)}},{label:"Урон/Бой",key:"damage_per_battle",formatter(t){return _.number.toInteger(t)}},{label:"Последний бой",key:"last_battle_time",formatter(t){return typeof t=="string"?_.date.toDateTime(t):"---"}}],S=G(()=>e.accounts.map(t=>{var s;const a=(s=e.clanAccounts.find(r=>r.account_id===t.id))==null?void 0:s.clan;return{...t,clan:a}}));L(()=>{u()});async function u(){var t;e.loading--,await C(),(t=e.accounts)!=null&&t.length&&await x(e.accounts.map(a=>a.id))}async function x(t){e.loading++;try{const{data:a}=await R.clan.getAccountInfo({extra:"clan",account_id:t.join(",")});e.clanAccounts=Object.values(a).filter(V)}catch(a){f(a,{title:"Ошибка поучения списка клановых аккаунтов"})}e.loading--}async function C(){var t;e.loading++;try{const a=await U.stat.accounts.getSolo({lastBattleInDays:2,minWinRate:58,minBattles:1e4,minDamagePerBattle:1800,page:o.page,pageSize:o.pageSize});e.accounts=a.data,o.total=(t=a.meta)!=null&&t.hasNext?o.page*o.pageSize+a.data.length:o.page*o.pageSize-1}catch(a){f(a,{title:"Запрос соло игроков"})}e.loading--}async function w(t){await W(t.nickname)?d.add({type:"success",title:"Скопировано",message:t.nickname,duration:3e3}):d.add({type:"error",message:"При копировании что-то пошло не так",duration:3e3})}function B(t){Object.assign(o,t),u()}return(t,a)=>{const s=v,r=z,A=T,g=j,N=D,$=P,I=E;return l(),k(I,{class:"recruiting-page"},{default:i(()=>[c($,{class:"recruiting-page__table","row-key":"id",data:b(S),headers:h,"scroll-to-top":"","max-height":"calc(100vh - 70px)"},{position:i(({index:n})=>[m(p(n+1),1)]),win_rate:i(({row:n})=>[c(s,{"win-rate":n.win_rate},null,8,["win-rate"])]),nickname:i(({row:n})=>[M("div",H,[c(A,{class:"recruiting-page__name-copy","is-text":"",title:"Копировать (nickname)",onClick:Q=>w(n)},{default:i(()=>[c(r,{name:"content-copy"})]),_:2},1032,["onClick"]),c(g,{class:"link",to:{name:"account-id",params:{id:n.id}}},{default:i(()=>[m(p(n.nickname),1)]),_:2},1032,["to"])])]),clan:i(({row:n})=>[n.clan?(l(),k(g,{key:0,title:n.clan.name,class:"recruiting-page__clan link",to:{name:"clan-id",params:{id:n.clan.clan_id}}},{default:i(()=>[m(p(n.clan.tag),1)]),_:2},1032,["title","to"])):(l(),F("span",J,"---"))]),footer:i(()=>[c(N,{pagination:b(o),onChange:B},null,8,["pagination"])]),_:1},8,["data"])]),_:1})}}});export{Ct as default};
