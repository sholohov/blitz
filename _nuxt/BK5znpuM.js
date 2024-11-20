import{_ as mt}from"./EAeUkgBq.js";import{d as X,z as Z,A as _t,r as W,l as O,m as nt,B as ft,C as st,o as I,n as C,p as d,j as r,g as u,F as at,D as pt,E as gt,x as p,h as ht,G as J,s as U,t as P,u as yt,a as vt,b as bt,c as At,H as kt,e as tt,v as f,w as l,y as St,f as wt,_ as It}from"./BzQ49_ll.js";import{_ as xt}from"./z8RK9n7K.js";import{_ as Rt}from"./Dy7JMDz2.js";import{_ as $t}from"./BvAUi8YU.js";import{_ as Ct}from"./DQ9jL8Ly.js";import{_ as ot}from"./W1n9aEx_.js";import{_ as Et}from"./B3dZcLnw.js";import{d as Lt}from"./B6X_EJD7.js";import{_ as Bt}from"./Dzhj1Yli.js";import{c as Pt}from"./B4FMxlHh.js";import{d as Tt}from"./CKeGCx3Z.js";import{n as et}from"./BxBPJGBn.js";import{f as N}from"./BFIP-xo3.js";import{s as B}from"./DhcCwqhx.js";import"./DD4asW33.js";const Dt={class:"ui-search__inner"},Ot={class:"ui-search__input"},Vt={key:0,class:"ui-search__dropdown"},Nt=["onKeydown","onClick"],Ut=X({__name:"UiSearch",props:Z({items:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},placeholder:{type:String,default:void 0}},{modelValue:{required:!0,default:""},modelModifiers:{}}),emits:Z(["reset","input","select"],["update:modelValue"]),setup(E,{emit:_}){const i=_t(E,"modelValue"),x=E,e=W(),k=W(null),a=O({isOpen:!1,btnList:[],focusedElemIndex:-1});nt(()=>{window.addEventListener("click",g)}),ft(()=>{window.removeEventListener("click",g)});const L=_;st(()=>x.items,()=>{a.isOpen=x.items.length>0,b()});function v(){L("reset"),a.focusedElemIndex=-1,a.isOpen=!1}function g(o){var m;(m=e.value)!=null&&m.contains(o.target)||(a.isOpen=!1)}function c(o){L("select",o),a.isOpen=!1,setTimeout(()=>{var m;return(m=k.value)==null?void 0:m.focus},300)}function b(){var o;(o=e.value)==null||o.querySelectorAll(".ui-search__item-btn").forEach(m=>{a.btnList.push(m)})}function R(o){var $,T,A,D,q,j;const m=o.target;x.loading||(o.key==="Escape"&&(v(),a.focusedElemIndex=-1,($=k.value)==null||$.focus()),m.tagName==="INPUT"&&(a.focusedElemIndex=-1),o.key==="ArrowUp"&&(o.preventDefault(),(T=a.btnList)!=null&&T.length&&a.focusedElemIndex>0?(A=a.btnList[--a.focusedElemIndex])==null||A.focus():(D=k.value)==null||D.focus()),o.key==="ArrowDown"&&(o.preventDefault(),(q=a.btnList)!=null&&q.length&&a.focusedElemIndex<a.btnList.length-1&&((j=a.btnList[++a.focusedElemIndex])==null||j.focus())))}return(o,m)=>{const $=Et,T=ot;return I(),C("div",{ref_key:"rootRef",ref:e,class:"ui-search"},[d("div",Dt,[d("div",Ot,[r($,{ref_key:"inputRef",ref:k,modelValue:i.value,"onUpdate:modelValue":m[0]||(m[0]=A=>i.value=A),modelModifiers:{trim:!0},placeholder:E.placeholder,type:"search",onKeydown:R},null,8,["modelValue","placeholder"])]),u(a).isOpen?(I(),C("div",Vt,[d("ul",{class:"ui-search__list",onKeydown:R},[(I(!0),C(at,null,pt(E.items,A=>(I(),C("li",{key:String(A.value),class:"ui-search__item"},[d("button",{class:"ui-search__item-btn",onKeydown:gt(D=>c(A),["enter"]),onClick:D=>c(A)},p(A.label),41,Nt)]))),128))],32),r(T,{loading:E.loading},null,8,["loading"])])):ht("",!0)])],512)}}}),qt={class:"account-sessions-search"},jt=X({__name:"AccountSessionsSearch",emits:["select"],setup(E,{emit:_}){const i=O({items:[],loading:0,search:""}),x=_;async function e(v=""){i.loading++;try{const c=((await J.session.account.getList({query:v})).data||[]).map(b=>({label:b.raw.nickname,value:b.raw.account_id}));if(c.length){const b=await U.clan.getAccountInfo({extra:"clan",account_id:c.map(R=>R.value).join(",")}).catch(()=>({data:null}));b.data&&c.forEach(R=>{var m,$;const o=($=(m=b.data[String(R.value)])==null?void 0:m.clan)==null?void 0:$.tag;R.label+=o?` [${o}]`:""})}i.items=c}catch(g){P(g,{title:"Поиск аккаунта"})}i.loading--}const k=Lt(e,1e3,{leading:!0});st(()=>i.search,async()=>{if(i.search.length<=2){i.items=[];return}await k(i.search)});function a(v){i.items=[],i.search="",x("select",v)}function L(){i.search="",i.items=[]}return(v,g)=>{const c=Ut;return I(),C("div",qt,[r(c,{modelValue:u(i).search,"onUpdate:modelValue":g[0]||(g[0]=b=>u(i).search=b),placeholder:"Введите ник игрока",items:u(i).items,loading:u(i).loading>0,onSelect:a,onReset:L},null,8,["modelValue","items","loading"])])}}}),Ft={class:"account-sessions"},zt={class:"account-sessions__description content-area",style:{"max-width":"800px"}},Kt={class:"account-sessions__filters"},Mt={class:"account-sessions__filters-item"},Ht={class:"account-sessions__filters-item"},Qt={class:"account-sessions__table"},Gt={class:"account-sessions__sub"},Wt={class:"account-sessions__sub"},Jt={key:1},Xt={class:"account-sessions__win-rate--sub"},Yt={class:"account-sessions__sub"},Zt={key:1},te={class:"account-sessions__sub"},ee={class:"account-sessions__sub"},ye=X({__name:"sessions",setup(E){const{$formatter:_}=yt(),i=vt();bt({title:()=>_.route.getTitle(Pt.toString(i.name)??"")});const x=W(null),e=O({loading:0,items:[],achievementsInfo:null,achievementsSessions:[],achievements:null,clanAccounts:null,accounts:[],accountsSessions:[]}),k=At(),a=O({total:0,page:1,pageSize:100}),L={order:"desc",prop:"updateAt"},v=O(L),g=N.makeAccountSessionsFilters(),c=O(kt(g)),b=tt(()=>{const n=[{key:"nickname",label:"Ник",sortable:"custom"},{key:"clan",label:"Клан"},{key:"battles",label:"Боёв"},{key:"winRate",label:"Побед"},{key:"damagePerBattle",label:"Урон"},{key:"teamPoints",label:"КМД *"},{key:"updateAt",width:180,label:"Дата начала",sortable:"custom"},{key:"last_battle_time",width:180,label:"Последний бой"}];return c.ids.length&&n.push({key:"actions"}),n}),R=tt(()=>!Tt(c,g));nt(()=>{Object.assign(c,N.makeAccountSessionsFilters({...g,...i.query})),o()});async function o(){e.loading++,await $(c.ids);const n=e.accountsSessions.map(t=>t.id);n.length&&(await Promise.all([A(),T(n),D(n),q(n),j(n)]),m()),e.loading--}function m(){e.items=e.accountsSessions.map(({raw:n,updateAt:t,id:S})=>{var s,y,Y;const w=e.accounts.find(G=>G.account_id===S);if(!w)return null;const h={...n,statistics:B.diffFull(w.statistics,n.statistics),updateAt:new Date(t).valueOf()},V=h.statistics,M=B.accountAll(V.all),H=V.rating?B.accountRating(V.rating):null,Q=(y=(s=e.clanAccounts)==null?void 0:s[h.account_id])==null?void 0:y.clan,F=e.achievementsSessions.find(G=>G.id===h.account_id);let z=NaN;const K=(Y=e.achievements)==null?void 0:Y[h.account_id];return K&&F&&e.achievementsInfo&&(z=B.teamPoints(h.statistics,B.accountAchievementsDiff(K,F.raw,e.achievementsInfo))),{updateAt:h.updateAt,id:h.account_id,nickname:h.nickname,lastBattleTime:w.last_battle_time,teamPoints:z,currentStatistic:{all:B.accountAll(w.statistics.all),rating:w.statistics.rating?B.accountRating(w.statistics.rating):null},statistic:{all:M,rating:H},clan:Q??null}}).filter(et)}async function $(n){e.loading++;try{const{data:t,meta:S}=await J.session.account.getList({ids:n,pageSize:a.pageSize,page:a.page,sort:`${v.prop}:${v.order}`});a.total=(S==null?void 0:S.total)??0,e.accountsSessions=t}catch(t){P(t,{title:"Ошибка поучения сессий аккаунтов"})}e.loading--}async function T(n){e.loading++;try{const{data:t}=await J.session.accountAchievements.getList({ids:n,pageSize:a.pageSize});e.achievementsSessions=t}catch(t){P(t,{title:"Ошибка поучения сессий достижений"})}e.loading--}async function A(){if(!e.achievementsInfo){e.loading++;try{const{data:n}=await U.encyclopedia.getAchievements();e.achievementsInfo=n??null}catch(n){P(n,{title:"Ошибка поучения описания достижений"})}e.loading--}}async function D(n){e.loading++;try{const t=await U.account.getInfo({extra:"statistics.rating",account_id:n.join(",")});e.accounts=Object.values(t.data).filter(et)??null}catch(t){P(t,{title:"Ошибка поучения списка аккаунтов"})}e.loading--}async function q(n){e.loading++;try{const{data:t}=await U.account.getAchievements({account_id:n.join(",")});e.achievements=t??null}catch(t){P(t,{title:"Ошибка поучения списка достижений аккаунтов"})}e.loading--}async function j(n){e.loading++;try{const{data:t}=await U.clan.getAccountInfo({extra:"clan",account_id:n.join(",")});e.clanAccounts=t??null}catch(t){P(t,{title:"Ошибка поучения списка клановых аккаунтов"})}e.loading--}function it(n){v.order=n.order,v.prop=n.prop,o()}async function ct({value:n}){var t;await((t=x.value)==null?void 0:t.doClose()),c.ids.includes(n)||(c.ids=[...c.ids,n]),await k.push({query:{...i.query,...N.toRouteQuery(c)}}),await o()}function lt(){var n;(n=x.value)==null||n.doOpen()}function ut(n){e.items=e.items.filter(t=>t.id!==n.id),c.ids=e.items.map(t=>t.id),k.push({query:N.toRouteQuery(c)}),o()}async function rt(){Object.assign(c,g),await k.push({query:N.toRouteQuery(c)}),o()}async function dt(n){Object.assign(a,n),await o()}return(n,t)=>{const S=mt,w=It,h=St,V=xt,M=Rt,H=$t,Q=Ct,F=ot,z=jt,K=Bt;return I(),C("div",Ft,[d("div",zt,[d("p",null,[t[1]||(t[1]=f(' "Сессии" - статистика пользователей за определённый период. Активировать сбор статистики можно через ')),r(S,{to:{name:"widgets"}},{default:l(()=>t[0]||(t[0]=[f(" виджет сессии ")])),_:1}),t[2]||(t[2]=f(" . Данные хранятся на сервере ресурса. "))]),d("ul",null,[d("li",null,[t[4]||(t[4]=d("b",null,"Командная игра (КМД)",-1)),t[5]||(t[5]=f(" - сумма нескольких показателей, основной смысл - оценка игры взводом. Подробнее на ")),r(S,{to:{name:"widgets"}},{default:l(()=>t[3]||(t[3]=[f(" Странице Виджета ")])),_:1})])])]),t[8]||(t[8]=f(" Фильтры ")),d("div",Kt,[d("div",Mt,[r(h,{onClick:lt},{after:l(()=>[r(w,{name:"add"})]),default:l(()=>[t[6]||(t[6]=f(" По игроку "))]),_:1})]),d("div",Ht,[r(h,{disabled:!u(R),onClick:rt},{after:l(()=>[r(w,{name:"close"})]),default:l(()=>[t[7]||(t[7]=f(" Очистить "))]),_:1},8,["disabled"])])]),d("div",Qt,[r(Q,{"no-wrap":"","scroll-to-top":"","scroll-auto-disabling":"","default-sort":L,headers:u(b),data:u(e).items,height:"calc(100vh - 112px)",onSort:it},{nickname:l(({row:s})=>[r(S,{class:"account-sessions__nickname link",to:{name:"account-id",params:{id:s.id}}},{default:l(()=>[f(p(s.nickname),1)]),_:2},1032,["to"])]),battles:l(({row:s})=>{var y;return[f(p(u(_).number.toInteger(s.statistic.all.battles))+" ",1),d("div",Gt,p(u(_).number.toInteger((y=s.currentStatistic)==null?void 0:y.all.battles)||"---"),1)]}),teamPoints:l(({row:s})=>[Number.isNaN(s.teamPoints)?(I(),C("span",Jt," --- ")):(I(),C(at,{key:0},[f(p(u(_).number.toInteger(s.teamPoints/s.statistic.all.battles)||0)+" ",1),d("span",Wt,p(u(_).number.toInteger(s.teamPoints)||0),1)],64))]),winRate:l(({row:s})=>{var y;return[r(V,{"win-rate":s.statistic.all.winRate,class:"account-sessions__win-rate"},null,8,["win-rate"]),d("div",Xt,p(u(_).number.toFloatPercent((y=s.currentStatistic)==null?void 0:y.all.winRate)||"---"),1)]}),rating:l(({row:s})=>[r(M,{rating:s.statistic.rating},null,8,["rating"])]),damagePerBattle:l(({row:s})=>{var y;return[f(p(u(_).number.toInteger(s.statistic.all.damagePerBattle))+" ",1),d("div",Yt,p(u(_).number.toInteger((y=s.currentStatistic)==null?void 0:y.all.damagePerBattle)||"---"),1)]}),clan:l(({row:s})=>[s.clan?(I(),wt(S,{key:0,title:s.clan.name,class:"account-sessions__clan link",to:{name:"clan-id",params:{id:s.clan.clan_id}}},{default:l(()=>[f(p(s.clan.tag),1)]),_:2},1032,["title","to"])):(I(),C("span",Zt,"---"))]),last_battle_time:l(({row:s})=>[f(p(u(_).date.toRelativeTime(s.lastBattleTime*1e3))+" ",1),d("span",te,p(u(_).date.toDateTime(s.lastBattleTime*1e3)),1)]),updateAt:l(({row:s})=>[f(p(u(_).date.toRelativeTime(s.updateAt))+" ",1),d("span",ee,p(u(_).date.toDateTime(s.updateAt)),1)]),actions:l(({row:s})=>[r(h,{"is-text":"","is-square":"",onClick:y=>ut(s)},{default:l(()=>[r(w,{name:"delete"})]),_:2},1032,["onClick"])]),footer:l(()=>[r(H,{pagination:u(a),onChange:dt},null,8,["pagination"])]),_:1},8,["headers","data"]),r(F,{loading:u(e).loading>0},null,8,["loading"])]),r(K,{ref_key:"addAccountDialogRef",ref:x,width:"400px",position:"top",title:"Поиск игрока"},{default:l(()=>[r(z,{style:{height:"270px"},onSelect:ct})]),_:1},512)])}}});export{ye as default};