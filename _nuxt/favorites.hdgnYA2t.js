import{_ as V}from"./nuxt-link.L0yXcBJ9.js";import{_ as W}from"./WinRate.vue.CRSh5IUU.js";import{_ as q}from"./RatingIcon.vue.4uO5v5Kn.js";import{h as C,_ as M,a as G}from"./disableScroll.C0aRP9sA.js";import{_ as H}from"./TablePagination.vue.YWKQ08UD.js";import{_ as J}from"./CTable.vue.Nq0ui9O0.js";import{_ as K}from"./ContentLoader.vue.CZ7Avnj8.js";import{n as b}from"./notEmpty.BxBPJGBn.js";import{n as Q,A,B as U,s as X,c as g,b as p,w as o,x as B,a as x,C as Y,o as l,v,d as m,t as k,F as I}from"./entry.C7rsCkde.js";import{s as T,a as F}from"./request.2vtDDBdm.js";import{s as R}from"./index.DVI7ejDe.js";const Z={class:"account-favorites"},tt=x("div",{class:"account-favorites__description content-area",style:{"max-width":"800px"}},[x("p",null,' Список игроков добавленных в "Избранные". Данные хранится в браузере. '),x("p",null,'Добавить в избранное, можно нажав "Звёздочку" превью на странице аккаунта.')],-1),at={key:1},ft=Q({__name:"favorites",setup(nt){const e=A({loading:0,items:[],favoritesIds:null}),d=A({total:0,page:1,pageSize:100}),$=[{key:"nickname",label:"Ник"},{key:"clan",label:"Клан"},{key:"battles",label:"Боёв"},{key:"winRate",label:"Побед"},{key:"damagePerBattle",label:"Урон"},{key:"rating",label:"Рейтинг"},{key:"lastBattleTime",width:160,label:"Последний бой",formatter:t=>typeof t=="number"?Y.date.toRelativeTime(t*1e3):"---"},{key:"actions",width:60}];U(()=>{h()});const y=X(()=>{const t=d.page*d.pageSize,n=t-d.pageSize;return(e.favoritesIds??[]).filter(b).slice(n,t)});async function S(){e.loading++;const t=await T.indexedDB.accountsFavorites.getAll();e.favoritesIds=(t??[]).filter(n=>n.isFavorite).map(n=>n.id),d.total=e.favoritesIds.length,e.loading--}async function P(t){e.loading++;let n=[];try{const{data:i}=await F.account.getInfo({extra:"statistics.rating",account_id:t.join(",")});n=Object.values(i).filter(b)}catch(i){C(i,{title:"Ошибка поучения списка аккаунтов"})}return e.loading--,n}async function D(t){e.loading++;let n=[];try{const{data:i}=await F.clan.getAccountInfo({extra:"clan",account_id:t.join(",")});n=Object.values(i).filter(b)}catch(i){C(i,{title:"Ошибка поучения списка клановых аккаунтов"})}return e.loading--,n}function j(t,n){const i=y.value.map(_=>{const s=t.find(r=>r.account_id===_);if(!s)return{id:0,nickname:"Deleted",lastBattleTime:0,statistic:{all:null,rating:null},clan:null};const u=s.statistics,f=n.find(r=>(r==null?void 0:r.account_id)===(s==null?void 0:s.account_id));return{id:_,nickname:s.nickname,lastBattleTime:s.last_battle_time,statistic:{all:R.accountAll(u.all),rating:u.rating?R.accountRating(u.rating):null},clan:(f==null?void 0:f.clan)??null}});e.items=i.sort((_,s)=>s.lastBattleTime-_.lastBattleTime)}async function h(){var i;if(e.favoritesIds||await S(),!((i=e.favoritesIds)!=null&&i.length))return;const[t,n]=await Promise.all([P(y.value),D(y.value)]);j(t,n)}async function z(t){await T.indexedDB.accountsFavorites.remove(t)}async function E(t){await z(t),e.items.length<d.pageSize?e.items=e.items.filter(n=>n.id!==t):await h()}async function N(){await h()}return(t,n)=>{const i=V,_=W,s=q,u=M,f=G,r=H,L=J,O=K;return l(),g("div",Z,[tt,p(L,{"no-wrap":"","scroll-auto-disabling":"",headers:$,data:B(e).items,height:"calc(100vh - 112px)"},{nickname:o(({row:a})=>[a.id?(l(),v(i,{key:0,class:"account-favorites__link link",to:{name:"account-id",params:{id:a.id}}},{default:o(()=>[m(k(a.nickname),1)]),_:2},1032,["to"])):(l(),g(I,{key:1},[m(" Deleted ")],64))]),battles:o(({row:a})=>{var c;return[m(k(((c=a.statistic.all)==null?void 0:c.battles)??"---"),1)]}),winRate:o(({row:a})=>[a.statistic.all?(l(),v(_,{key:0,"model-value":a.statistic.all.winRate,class:"account-favorites__win-rate"},null,8,["model-value"])):(l(),g(I,{key:1},[m(" --- ")],64))]),rating:o(({row:a})=>{var c,w;return[(c=a.statistic)!=null&&c.rating?(l(),v(s,{key:0,rating:(w=a.statistic)==null?void 0:w.rating},null,8,["rating"])):(l(),g(I,{key:1},[m(" --- ")],64))]}),damagePerBattle:o(({row:a})=>{var c;return[m(k(((c=a.statistic.all)==null?void 0:c.damagePerBattle)??"---"),1)]}),clan:o(({row:a})=>[a.clan?(l(),v(i,{key:0,title:a.clan.name,class:"account-favorites__link link",to:{name:"clan-id",params:{id:a.clan.clan_id}}},{default:o(()=>[m(k(a.clan.tag),1)]),_:2},1032,["title","to"])):(l(),g("span",at,"---"))]),actions:o(({row:a})=>[p(f,{title:"Удалить","is-text":"","is-square":"",onClick:c=>E(a.id)},{default:o(()=>[p(u,{name:"delete"})]),_:2},1032,["onClick"])]),footer:o(()=>[p(r,{pagination:B(d),onChange:N},null,8,["pagination"])]),_:1},8,["data"]),p(O,{loading:B(e).loading>0},null,8,["loading"])])}}});export{ft as default};
