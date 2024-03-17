import{_ as z}from"./nuxt-link.04FmkAu-.js";import{_ as L}from"./WinRate.vue.CFuWW5lr.js";import{_ as O}from"./RatingIcon.vue.Dp41mXaS.js";import{_ as U}from"./TablePagination.vue.CZJJO1HL.js";import{_ as D}from"./UiTable.vue.DwQ_iDIQ.js";import{_ as F}from"./UnauthorisedView.vue.D0oym8G8.js";import{a as x,_ as W}from"./request.hZoxRoxp.js";import{f as q,u as H,n as T,i as M,q as G,c as g,k as f,j as u,w as s,b as S,a as C,s as J,o as i,d as r,t as k,F as y}from"./entry.DPNISXbu.js";import{n as p}from"./notEmpty.BxBPJGBn.js";import{u as K}from"./user.DwTc9bEk.js";import{s as P}from"./index.CaqNhiay.js";import{h as B}from"./disableScroll.DWKNMT60.js";import"./UiButton.vue.Bm7hv4rP.js";import"./ContentBox.vue.BsWmWxMD.js";import"./leader.C0XodCYA.js";import"./nuxt-icon.DBuS59iJ.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";const Q={class:"account-contacts"},X=C("div",{class:"account-contacts__description content-area",style:{"max-width":"800px"}},[C("p",null,'Список "Контактов". Данные из игры.')],-1),ft=q({__name:"contacts",setup(Y){H({title:"Контакты / Аккаунты"});const w=K(),c=T({loading:0,items:[],account:null,contactsIds:[]}),m=T({total:0,page:1,pageSize:100}),R=[{key:"nickname",label:"Ник"},{key:"clan",label:"Клан"},{key:"battles",label:"Боёв"},{key:"winRate",label:"Побед"},{key:"damagePerBattle",label:"Урон"},{key:"rating",label:"Рейтинг"},{key:"lastBattleTime",width:160,label:"Последний бой",formatter:a=>typeof a=="number"?J.date.toRelativeTime(a*1e3):"---"}],h=M(()=>{const a=m.page*m.pageSize,e=a-m.pageSize;return c.contactsIds.filter(p).slice(e,a)});G(()=>{A()});async function $(a){var e,n;c.loading++;try{const{data:o}=await x.account.getInfo({account_id:a,extra:"private.grouped_contacts"});return c.account=o[a]??null,c.contactsIds=((n=(e=o[a])==null?void 0:e.private)==null?void 0:n.grouped_contacts.ungrouped)??[],m.total=c.contactsIds.length,o[a]??null}catch(o){return B(o,{title:"Ошибка получения данных аккаунта"}),null}finally{c.loading--}}async function j(a){c.loading++;let e=[];try{const{data:n}=await x.clan.getAccountInfo({extra:"clan",account_id:a.join(",")});e=Object.values(n).filter(p)}catch(n){B(n,{title:"Ошибка поучения списка клановых аккаунтов"})}return c.loading--,e}function E(a,e){const n=h.value.map(o=>{const l=a.find(t=>t.account_id===o);if(!l)return{id:0,nickname:"",lastBattleTime:0,statistic:{all:null,rating:null},clan:null};const d=l.statistics,b=P.accountAll(d.all),I=d.rating?P.accountRating(d.rating):null,{clan:v}=e.find(t=>(t==null?void 0:t.account_id)===l.account_id)??{};return{id:l.account_id,nickname:l.nickname,lastBattleTime:l.last_battle_time,statistic:{all:b,rating:I},clan:v??null}});c.items=n.sort((o,l)=>l.lastBattleTime-o.lastBattleTime)}async function N(a){c.loading++;let e=[];try{const{data:n}=await x.account.getInfo({extra:"statistics.rating",account_id:a.join(",")});e=Object.values(n).filter(p)}catch(n){B(n,{title:"Ошибка поучения списка аккаунтов"})}return c.loading--,e}async function A(){const a=w.accountId;if(!a||(c.account||await $(a),!c.contactsIds.length))return;const[e,n]=await Promise.all([N(h.value),j(h.value)]);E(e.filter(p),n.filter(p))}async function V(){await A()}return(a,e)=>{const n=z,o=L,l=O,d=U,b=D,I=F,v=W;return i(),g("div",Q,[X,f(w).accountId?(i(),u(b,{key:0,"no-wrap":"","scroll-auto-disabling":"",headers:R,data:f(c).items,height:"calc(100vh - 112px)"},{nickname:s(({row:t})=>[t.id?(i(),u(n,{key:0,class:"account-contacts__link link",to:{name:"account-id",params:{id:t.id}}},{default:s(()=>[r(k(t.nickname),1)]),_:2},1032,["to"])):(i(),g(y,{key:1},[r(" Deleted ")],64))]),battles:s(({row:t})=>{var _;return[r(k(((_=t.statistic.all)==null?void 0:_.battles)??"---"),1)]}),winRate:s(({row:t})=>[t.statistic.all?(i(),u(o,{key:0,"model-value":t.statistic.all.winRate,class:"account-contacts__win-rate"},null,8,["model-value"])):(i(),g(y,{key:1},[r(" --- ")],64))]),rating:s(({row:t})=>[t.statistic.rating?(i(),u(l,{key:0,rating:t.statistic.rating},null,8,["rating"])):(i(),g(y,{key:1},[r(" --- ")],64))]),damagePerBattle:s(({row:t})=>{var _;return[r(k(((_=t.statistic.all)==null?void 0:_.damagePerBattle)??"---"),1)]}),clan:s(({row:t})=>[t.clan?(i(),u(n,{key:0,title:t.clan.name,class:"account-contacts__link link",to:{name:"clan-id",params:{id:t.clan.clan_id}}},{default:s(()=>[r(k(t.clan.tag),1)]),_:2},1032,["title","to"])):(i(),g(y,{key:1},[r(" --- ")],64))]),footer:s(()=>[S(d,{pagination:f(m),onChange:V},null,8,["pagination"])]),_:1},8,["data"])):(i(),u(I,{key:1,height:"calc(100vh - 180px)"},{default:s(()=>[r(" Отобразится список контактов вашего аккаунта ")]),_:1})),S(v,{loading:f(c).loading>0},null,8,["loading"])])}}});export{ft as default};
