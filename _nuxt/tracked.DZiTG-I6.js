import{_ as V}from"./nuxt-link.Co6L5LJl.js";import{_ as q}from"./WinRate.vue.DT9Oisv9.js";import{_ as M}from"./RatingIcon.vue.VdPeuJ-p.js";import{u as W,_ as F,a as G}from"./disableScroll.DjVa_9z0.js";import{_ as H}from"./TablePagination.vue.DLYVzolE.js";import{_ as J}from"./CTable.vue.K25daDRq.js";import{_ as K}from"./ContentLoader.vue.BNVRvGyj.js";import{n as B}from"./notEmpty.BxBPJGBn.js";import{s as g,a as S}from"./request.5IkpOjNq.js";import{s as R}from"./index.gZPKXVCX.js";import{f as Q,n as T,q as U,i as X,c as r,b as f,w as s,k as x,a as A,s as Y,o as c,j as k,d as I,t as p}from"./entry.DP5yAQ98.js";const Z={class:"account-tracked"},tt=A("div",{class:"account-tracked__description content-area",style:{"max-width":"800px"}},[A("p",null,"Список игроков, статистика которых отслеживается. Данные хранятся в браузере."),A("p",null," Отслеживание начинается с момента просмотра аккаунта на данном ресурсе. После удаления из списка - отслеживание прекращается. ")],-1),at={key:1},et={key:0},nt={key:1},ct={key:1},ot={key:1},st={key:0},it={key:1},lt={key:1},vt=Q({__name:"tracked",setup(rt){const y=W(),n=T({loading:0,items:[],accountsLocal:null}),_=T({total:0,page:1,pageSize:100}),$=[{key:"nickname",label:"Ник"},{key:"clan",label:"Клан"},{key:"battles",label:"Боёв"},{key:"winRate",label:"Побед"},{key:"damagePerBattle",label:"Урон"},{key:"rating",label:"Рейтинг"},{key:"lastBattleTime",width:160,label:"Последний бой",formatter:t=>typeof t=="number"?Y.date.toRelativeTime(t*1e3):"---"},{key:"actions",width:60}];U(()=>{w()});const D=X(()=>{const t=_.page*_.pageSize,a=t-_.pageSize;return(n.accountsLocal??[]).filter(B).slice(a,t)});async function L(){n.loading++;try{const t=await g.indexedDB.accountsInfo.getAll();n.accountsLocal=(t??[]).map(a=>a.data).sort((a,d)=>d.last_battle_time-a.last_battle_time),_.total=(t==null?void 0:t.length)??0}catch(t){console.error(t),y.add({type:"error",title:"Ошибка поучения локального списка аккаунтов",message:t instanceof Error?t.message:"Неизвестная ошибка"})}n.loading--}async function P(t){n.loading++;try{const a=await S.account.getInfo({extra:"statistics.rating",account_id:t.join(",")});return Object.values(a.data).filter(B)}catch(a){return y.add({type:"error",title:"Ошибка поучения списка аккаунтов",message:a instanceof Error?a.message:"Неизвестная ошибка"}),console.error(a),[]}finally{n.loading--}}async function E(t){n.loading++;try{const{data:a}=await S.clan.getAccountInfo({extra:"clan",account_id:t.join(",")});return Object.values(a).filter(B)}catch(a){return y.add({type:"error",title:"Ошибка поучения списка клановых аккаунтов",message:a instanceof Error?a.message:"Неизвестная ошибка"}),console.error(a),[]}finally{n.loading--}}async function w(){var t;n.accountsLocal||await L(),(t=n.accountsLocal)!=null&&t.length&&await C()}function N(t,a){const d=D.value.map(l=>{const i=t.find(m=>m.account_id===l.account_id);if(!i)return{id:l.account_id,nickname:l.nickname,lastBattleTime:NaN,isDeleted:!0,statistic:null,clan:null};const u=i.statistics,h=R.accountAll(u.all),b=u.rating?R.accountRating(u.rating):null,{clan:v}=a.find(m=>(m==null?void 0:m.account_id)===i.account_id)??{};return{id:i.account_id,nickname:i.nickname,lastBattleTime:i.last_battle_time,statistic:{all:h,rating:b},clan:v??null}});n.items=d.sort((l,i)=>i.lastBattleTime-l.lastBattleTime)}async function C(){const t=D.value.map(l=>l.account_id);if(!t.length)return;const[a,d]=await Promise.all([P(t),E(t)]);N(a,d)}async function j(t){await Promise.all([g.indexedDB.accountsInfo.remove(t),g.indexedDB.accountsAchievements.remove(t),g.indexedDB.tanksStat.remove(t)])}async function z(t){await j(t),n.items.length<_.total?n.items=n.items.filter(a=>a.id!==t):await w()}async function O(){await C()}return(t,a)=>{const d=V,l=q,i=M,u=F,h=G,b=H,v=J,m=K;return c(),r("div",Z,[tt,f(v,{"no-wrap":"","scroll-to-top":"","scroll-auto-disabling":"",headers:$,data:x(n).items,height:"calc(100vh - 112px)"},{nickname:s(({row:e})=>[e.isDeleted?(c(),r("span",at,p(e.nickname),1)):(c(),k(d,{key:0,class:"account-tracked__link link",to:{name:"account-id",params:{id:e.id}}},{default:s(()=>[I(p(e.nickname),1)]),_:2},1032,["to"]))]),battles:s(({row:e})=>{var o;return[e.isDeleted?(c(),r("span",nt,"---")):(c(),r("span",et,p((o=e.statistic)==null?void 0:o.all.battles),1))]}),winRate:s(({row:e})=>{var o;return[e.isDeleted?(c(),r("span",ct,"---")):(c(),k(l,{key:0,"model-value":(o=e.statistic)==null?void 0:o.all.winRate,class:"account-tracked__win-rate"},null,8,["model-value"]))]}),rating:s(({row:e})=>{var o;return[e.isDeleted?(c(),r("span",ot,"---")):(c(),k(i,{key:0,rating:(o=e.statistic)==null?void 0:o.rating},null,8,["rating"]))]}),damagePerBattle:s(({row:e})=>{var o;return[e.isDeleted?(c(),r("span",it,"---")):(c(),r("span",st,p((o=e.statistic)==null?void 0:o.all.damagePerBattle),1))]}),clan:s(({row:e})=>[e.clan?(c(),k(d,{key:0,title:e.clan.name,class:"account-tracked__link link",to:{name:"clan-id",params:{id:e.clan.clan_id}}},{default:s(()=>[I(p(e.clan.tag),1)]),_:2},1032,["title","to"])):(c(),r("span",lt,"---"))]),actions:s(({row:e})=>[f(h,{title:"Удалить","is-text":"","is-square":"",onClick:o=>z(e.id)},{default:s(()=>[f(u,{name:"delete"})]),_:2},1032,["onClick"])]),footer:s(()=>[f(b,{pagination:x(_),onChange:O},null,8,["pagination"])]),_:1},8,["data"]),f(m,{loading:x(n).loading>0},null,8,["loading"])])}}});export{vt as default};
