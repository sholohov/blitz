import{_ as z}from"./nuxt-link.B5LnOQLN.js";import{_ as L}from"./WinRate.vue.DMG6i7Ym.js";import{_ as O}from"./RatingIcon.vue.CF4pXHe8.js";import{_ as V}from"./TablePagination.vue.DjBrL1Kt.js";import{_ as D}from"./CTable.vue.BtjbC63F.js";import{_ as F}from"./ContentLoader.vue.gSVxuRhP.js";import{n as _}from"./notEmpty.BxBPJGBn.js";import{u as W}from"./user.CdOYHEHf.js";import{f as q,n as T,i as M,q as U,c as g,b as I,w as s,k as v,a as w,s as G,o as r,j as f,d as u,t as p,F as k}from"./entry.DnyhrCzd.js";import{a as x}from"./request.D7J0I_-4.js";import{s as C}from"./index.rFE-yYyM.js";import{h as B}from"./disableScroll.DbQbNoWW.js";const H={class:"account-contacts"},J=w("div",{class:"account-contacts__description content-area",style:{"max-width":"800px"}},[w("p",null,'Список "Контактов". Данные из игры.')],-1),st=q({__name:"contacts",setup(K){const S=W(),c=T({loading:0,items:[],account:null,contactsIds:[]}),m=T({total:0,page:1,pageSize:100}),P=[{key:"nickname",label:"Ник"},{key:"clan",label:"Клан"},{key:"battles",label:"Боёв"},{key:"winRate",label:"Побед"},{key:"damagePerBattle",label:"Урон"},{key:"rating",label:"Рейтинг"},{key:"lastBattleTime",width:160,label:"Последний бой",formatter:t=>typeof t=="number"?G.date.toRelativeTime(t*1e3):"---"}],y=M(()=>{const t=m.page*m.pageSize,e=t-m.pageSize;return c.contactsIds.filter(_).slice(e,t)});U(()=>{A()});async function R(t){var e,n;c.loading++;try{const{data:o}=await x.account.getInfo({account_id:t,extra:"private.grouped_contacts"});return c.account=o[t]??null,c.contactsIds=((n=(e=o[t])==null?void 0:e.private)==null?void 0:n.grouped_contacts.ungrouped)??[],m.total=c.contactsIds.length,o[t]??null}catch(o){return B(o,{title:"Ошибка получения данных аккаунта"}),null}finally{c.loading--}}async function j(t){c.loading++;let e=[];try{const{data:n}=await x.clan.getAccountInfo({extra:"clan",account_id:t.join(",")});e=Object.values(n).filter(_)}catch(n){B(n,{title:"Ошибка поучения списка клановых аккаунтов"})}return c.loading--,e}function $(t,e){const n=y.value.map(o=>{const l=t.find(i=>i.account_id===o);if(!l)return{id:0,nickname:"",lastBattleTime:0,statistic:{all:null,rating:null},clan:null};const d=l.statistics,h=C.accountAll(d.all),b=d.rating?C.accountRating(d.rating):null,{clan:a}=e.find(i=>(i==null?void 0:i.account_id)===l.account_id)??{};return{id:l.account_id,nickname:l.nickname,lastBattleTime:l.last_battle_time,statistic:{all:h,rating:b},clan:a??null}});c.items=n.sort((o,l)=>l.lastBattleTime-o.lastBattleTime)}async function E(t){c.loading++;let e=[];try{const{data:n}=await x.account.getInfo({extra:"statistics.rating",account_id:t.join(",")});e=Object.values(n).filter(_)}catch(n){B(n,{title:"Ошибка поучения списка аккаунтов"})}return c.loading--,e}async function A(){const t=S.accountId;if(!t||(c.account||await R(t),!c.contactsIds.length))return;const[e,n]=await Promise.all([E(y.value),j(y.value)]);$(e.filter(_),n.filter(_))}async function N(){await A()}return(t,e)=>{const n=z,o=L,l=O,d=V,h=D,b=F;return r(),g("div",H,[J,I(h,{"no-wrap":"","scroll-auto-disabling":"",headers:P,data:v(c).items,height:"calc(100vh - 112px)"},{nickname:s(({row:a})=>[a.id?(r(),f(n,{key:0,class:"account-contacts__link link",to:{name:"account-id",params:{id:a.id}}},{default:s(()=>[u(p(a.nickname),1)]),_:2},1032,["to"])):(r(),g(k,{key:1},[u(" Deleted ")],64))]),battles:s(({row:a})=>{var i;return[u(p(((i=a.statistic.all)==null?void 0:i.battles)??"---"),1)]}),winRate:s(({row:a})=>[a.statistic.all?(r(),f(o,{key:0,"model-value":a.statistic.all.winRate,class:"account-contacts__win-rate"},null,8,["model-value"])):(r(),g(k,{key:1},[u(" --- ")],64))]),rating:s(({row:a})=>[a.statistic.rating?(r(),f(l,{key:0,rating:a.statistic.rating},null,8,["rating"])):(r(),g(k,{key:1},[u(" --- ")],64))]),damagePerBattle:s(({row:a})=>{var i;return[u(p(((i=a.statistic.all)==null?void 0:i.damagePerBattle)??"---"),1)]}),clan:s(({row:a})=>[a.clan?(r(),f(n,{key:0,title:a.clan.name,class:"account-contacts__link link",to:{name:"clan-id",params:{id:a.clan.clan_id}}},{default:s(()=>[u(p(a.clan.tag),1)]),_:2},1032,["title","to"])):(r(),g(k,{key:1},[u(" --- ")],64))]),footer:s(()=>[I(d,{pagination:v(m),onChange:N},null,8,["pagination"])]),_:1},8,["data"]),I(b,{loading:v(c).loading>0},null,8,["loading"])])}}});export{st as default};
