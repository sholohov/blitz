import{_ as z}from"./DDaHkhwB.js";import{_ as L}from"./CXVwBHr2.js";import{_ as U}from"./BjkmB4Ek.js";import{_ as D}from"./Bzs-z8zA.js";import{_ as F}from"./BcoL5P8V.js";import{_ as O}from"./CJ8U3Gfj.js";import{a as v,_ as W}from"./BHA4Nd6Z.js";import{f as q,u as G,n as T,i as H,q as M,c as g,k as f,j as u,w as l,b as S,a as C,s as J,o as i,d as r,t as k,F as y}from"./Dfk_Fzw6.js";import{n as p}from"./BxBPJGBn.js";import{u as K}from"./7UWFdEo2.js";import{s as P}from"./D-pHF5aR.js";import{h as B}from"./BQaFixBN.js";import"./DcLHZll-.js";import"./C2vHB1V7.js";import"./CuL2OHxI.js";import"./CtnZGq4p.js";import"./DlAUqK2U.js";const Q={class:"account-contacts"},X=C("div",{class:"account-contacts__description content-area",style:{"max-width":"800px"}},[C("p",null,'Список "Контактов". Данные из игры.')],-1),ft=q({__name:"contacts",setup(Y){G({title:"Контакты / Аккаунты"});const w=K(),c=T({loading:0,items:[],account:null,contactsIds:[]}),m=T({total:0,page:1,pageSize:100}),R=[{key:"nickname",label:"Ник"},{key:"clan",label:"Клан"},{key:"battles",label:"Боёв"},{key:"winRate",label:"Побед"},{key:"damagePerBattle",label:"Урон"},{key:"rating",label:"Рейтинг"},{key:"lastBattleTime",width:160,label:"Последний бой",formatter:a=>typeof a=="number"?J.date.toRelativeTime(a*1e3):"---"}],h=H(()=>{const a=m.page*m.pageSize,e=a-m.pageSize;return c.contactsIds.filter(p).slice(e,a)});M(()=>{A()});async function $(a){var e,n;c.loading++;try{const{data:o}=await v.account.getInfo({account_id:a,extra:"private.grouped_contacts"});return c.account=o[a]??null,c.contactsIds=((n=(e=o[a])==null?void 0:e.private)==null?void 0:n.grouped_contacts.ungrouped)??[],m.total=c.contactsIds.length,o[a]??null}catch(o){return B(o,{title:"Ошибка получения данных аккаунта"}),null}finally{c.loading--}}async function j(a){c.loading++;let e=[];try{const{data:n}=await v.clan.getAccountInfo({extra:"clan",account_id:a.join(",")});e=Object.values(n).filter(p)}catch(n){B(n,{title:"Ошибка поучения списка клановых аккаунтов"})}return c.loading--,e}function E(a,e){const n=h.value.map(o=>{const s=a.find(t=>t.account_id===o);if(!s)return{id:0,nickname:"",lastBattleTime:0,statistic:{all:null,rating:null},clan:null};const d=s.statistics,b=P.accountAll(d.all),I=d.rating?P.accountRating(d.rating):null,{clan:x}=e.find(t=>(t==null?void 0:t.account_id)===s.account_id)??{};return{id:s.account_id,nickname:s.nickname,lastBattleTime:s.last_battle_time,statistic:{all:b,rating:I},clan:x??null}});c.items=n.sort((o,s)=>s.lastBattleTime-o.lastBattleTime)}async function N(a){c.loading++;let e=[];try{const{data:n}=await v.account.getInfo({extra:"statistics.rating",account_id:a.join(",")});e=Object.values(n).filter(p)}catch(n){B(n,{title:"Ошибка поучения списка аккаунтов"})}return c.loading--,e}async function A(){const a=w.accountId;if(!a||(c.account||await $(a),!c.contactsIds.length))return;const[e,n]=await Promise.all([N(h.value),j(h.value)]);E(e.filter(p),n.filter(p))}async function V(){await A()}return(a,e)=>{const n=z,o=L,s=U,d=D,b=F,I=O,x=W;return i(),g("div",Q,[X,f(w).accountId?(i(),u(b,{key:0,"no-wrap":"","scroll-auto-disabling":"",headers:R,data:f(c).items,height:"calc(100vh - 112px)"},{nickname:l(({row:t})=>[t.id?(i(),u(n,{key:0,class:"account-contacts__link link",to:{name:"account-id",params:{id:t.id}}},{default:l(()=>[r(k(t.nickname),1)]),_:2},1032,["to"])):(i(),g(y,{key:1},[r(" Deleted ")],64))]),battles:l(({row:t})=>{var _;return[r(k(((_=t.statistic.all)==null?void 0:_.battles)??"---"),1)]}),winRate:l(({row:t})=>[t.statistic.all?(i(),u(o,{key:0,"win-rate":t.statistic.all.winRate,class:"account-contacts__win-rate"},null,8,["win-rate"])):(i(),g(y,{key:1},[r(" --- ")],64))]),rating:l(({row:t})=>[t.statistic.rating?(i(),u(s,{key:0,rating:t.statistic.rating},null,8,["rating"])):(i(),g(y,{key:1},[r(" --- ")],64))]),damagePerBattle:l(({row:t})=>{var _;return[r(k(((_=t.statistic.all)==null?void 0:_.damagePerBattle)??"---"),1)]}),clan:l(({row:t})=>[t.clan?(i(),u(n,{key:0,title:t.clan.name,class:"account-contacts__link link",to:{name:"clan-id",params:{id:t.clan.clan_id}}},{default:l(()=>[r(k(t.clan.tag),1)]),_:2},1032,["title","to"])):(i(),g(y,{key:1},[r(" --- ")],64))]),footer:l(()=>[S(d,{pagination:f(m),onChange:V},null,8,["pagination"])]),_:1},8,["data"])):(i(),u(I,{key:1,height:"calc(100vh - 180px)"},{default:l(()=>[r(" Отобразится список контактов вашего аккаунта ")]),_:1})),S(x,{loading:f(c).loading>0},null,8,["loading"])])}}});export{ft as default};
