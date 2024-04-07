import{_ as q}from"./dAvVLxv5.js";import{_ as O}from"./DZd8ySUx.js";import{_ as U}from"./3YsmnF-1.js";import{h as v,_ as W}from"./C2BuzcM2.js";import{_ as G}from"./BfF4LBiS.js";import{_ as H}from"./DtkCsNz_.js";import{_ as M}from"./DsHWkLU8.js";import{s as g,a as S,_ as F}from"./DIwkXMey.js";import{f as J,u as K,n as T,q as Q,i as X,c as r,b as p,w as o,k as B,a as x,s as Y,o as c,j as k,d as C,t as f}from"./C1pZ3Ysy.js";import{n as A}from"./BxBPJGBn.js";import{s as I}from"./BwpGAOBT.js";const Z={class:"account-tracked"},tt=x("div",{class:"account-tracked__description content-area",style:{"max-width":"800px"}},[x("p",null,"Список игроков, статистика которых отслеживается. Данные хранятся в браузере."),x("p",null," Отслеживание начинается с момента просмотра аккаунта на данном ресурсе. После удаления из списка - отслеживание прекращается. ")],-1),at={key:1},nt={key:0},et={key:1},ct={key:1},it={key:1},ot={key:0},st={key:1},lt={key:1},vt=J({__name:"tracked",setup(rt){K({title:"Отслеживаемые / Аккаунты"});const e=T({loading:0,items:[],accountsLocal:null}),m=T({total:0,page:1,pageSize:100}),$=[{key:"nickname",label:"Ник"},{key:"clan",label:"Клан"},{key:"battles",label:"Боёв"},{key:"winRate",label:"Побед"},{key:"damagePerBattle",label:"Урон"},{key:"rating",label:"Рейтинг"},{key:"lastBattleTime",width:160,label:"Последний бой",formatter:t=>typeof t=="number"?Y.date.toRelativeTime(t*1e3):"---"},{key:"actions",width:60}];Q(()=>{w()});const D=X(()=>{const t=m.page*m.pageSize,n=t-m.pageSize;return(e.accountsLocal??[]).filter(A).slice(n,t)});async function L(){e.loading++;try{const t=await g.indexedDB.accountsInfo.getAll();e.accountsLocal=(t??[]).map(n=>n.data).sort((n,d)=>d.last_battle_time-n.last_battle_time),m.total=(t==null?void 0:t.length)??0}catch(t){v(t,{title:"Ошибка поучения локального списка аккаунтов"})}e.loading--}async function P(t){e.loading++;try{const n=await S.account.getInfo({extra:"statistics.rating",account_id:t.join(",")});return Object.values(n.data).filter(A)}catch(n){return v(n,{title:"Ошибка поучения списка аккаунтов"}),[]}finally{e.loading--}}async function N(t){e.loading++;try{const{data:n}=await S.clan.getAccountInfo({extra:"clan",account_id:t.join(",")});return Object.values(n).filter(A)}catch(n){return v(n,{title:"Ошибка поучения списка клановых аккаунтов"}),[]}finally{e.loading--}}async function w(){var t;e.accountsLocal||await L(),(t=e.accountsLocal)!=null&&t.length&&await R()}function j(t,n){const d=D.value.map(l=>{const s=t.find(_=>_.account_id===l.account_id);if(!s)return{id:l.account_id,nickname:l.nickname,lastBattleTime:NaN,isDeleted:!0,statistic:null,clan:null};const u=s.statistics,y=I.accountAll(u.all),h=u.rating?I.accountRating(u.rating):null,{clan:b}=n.find(_=>(_==null?void 0:_.account_id)===s.account_id)??{};return{id:s.account_id,nickname:s.nickname,lastBattleTime:s.last_battle_time,statistic:{all:y,rating:h},clan:b??null}});e.items=d.sort((l,s)=>s.lastBattleTime-l.lastBattleTime)}async function R(){const t=D.value.map(l=>l.account_id);if(!t.length)return;const[n,d]=await Promise.all([P(t),N(t)]);j(n,d)}async function E(t){await Promise.all([g.indexedDB.accountsInfo.remove(t),g.indexedDB.accountsAchievements.remove(t),g.indexedDB.tanksStat.remove(t)])}async function z(t){await E(t),e.items.length<m.total?e.items=e.items.filter(n=>n.id!==t):await w()}async function V(){await R()}return(t,n)=>{const d=q,l=O,s=U,u=W,y=G,h=H,b=M,_=F;return c(),r("div",Z,[tt,p(b,{"no-wrap":"","scroll-to-top":"","scroll-auto-disabling":"",headers:$,data:B(e).items,height:"calc(100vh - 112px)"},{nickname:o(({row:a})=>[a.isDeleted?(c(),r("span",at,f(a.nickname),1)):(c(),k(d,{key:0,class:"account-tracked__link link",to:{name:"account-id",params:{id:a.id}}},{default:o(()=>[C(f(a.nickname),1)]),_:2},1032,["to"]))]),battles:o(({row:a})=>{var i;return[a.isDeleted?(c(),r("span",et,"---")):(c(),r("span",nt,f((i=a.statistic)==null?void 0:i.all.battles),1))]}),winRate:o(({row:a})=>{var i;return[a.isDeleted?(c(),r("span",ct,"---")):(c(),k(l,{key:0,"model-value":(i=a.statistic)==null?void 0:i.all.winRate,class:"account-tracked__win-rate"},null,8,["model-value"]))]}),rating:o(({row:a})=>{var i;return[a.isDeleted?(c(),r("span",it,"---")):(c(),k(s,{key:0,rating:(i=a.statistic)==null?void 0:i.rating},null,8,["rating"]))]}),damagePerBattle:o(({row:a})=>{var i;return[a.isDeleted?(c(),r("span",st,"---")):(c(),r("span",ot,f((i=a.statistic)==null?void 0:i.all.damagePerBattle),1))]}),clan:o(({row:a})=>[a.clan?(c(),k(d,{key:0,title:a.clan.name,class:"account-tracked__link link",to:{name:"clan-id",params:{id:a.clan.clan_id}}},{default:o(()=>[C(f(a.clan.tag),1)]),_:2},1032,["title","to"])):(c(),r("span",lt,"---"))]),actions:o(({row:a})=>[p(y,{title:"Удалить","is-text":"","is-square":"",onClick:i=>z(a.id)},{default:o(()=>[p(u,{name:"delete"})]),_:2},1032,["onClick"])]),footer:o(()=>[p(h,{pagination:B(m),onChange:V},null,8,["pagination"])]),_:1},8,["data"]),p(_,{loading:B(e).loading>0},null,8,["loading"])])}}});export{vt as default};
