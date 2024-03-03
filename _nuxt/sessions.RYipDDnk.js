import{_ as mt}from"./nuxt-link.BmiB8yFf.js";import{h as P,a as ft,_ as _t}from"./disableScroll.BsGCYrkf.js";import{_ as pt}from"./WinRate.vue.BQAjquz-.js";import{_ as ht}from"./RatingIcon.vue.Ol0I3glb.js";import{_ as gt}from"./TablePagination.vue.DdKn4wx2.js";import{_ as yt}from"./UiTable.vue.Bd0s4Rz5.js";import{_ as vt}from"./UiInput.vue.CFT_pDMS.js";import{_ as nt,a as N}from"./request.CU-8ZD0i.js";import{f as X,v as Z,x as bt,r as G,n as j,q as at,y as kt,z as st,o as R,c as B,a as r,b as l,k as C,F as ot,A as At,B as St,t as _,m as wt,u as $t,h as It,g as Rt,i as tt,d as m,w as i,j as Ct}from"./entry.Bm-llWz1.js";import{d as Et}from"./debounce.BIsCNxQH.js";import{a as J}from"./index.sjA9RjdT.js";import{_ as Lt}from"./UiDialog.vue.D81x2SMr.js";import{n as et}from"./notEmpty.BxBPJGBn.js";import{c as Bt}from"./cloneDeep.BNfpnd7q.js";import{f as V}from"./index.7vZybl1X.js";import{s as O}from"./index.Cra1aU8X.js";import"./isArrayLike.qcTCkieX.js";const Ot={class:"ui-search__inner"},Pt={class:"ui-search__input"},xt={key:0,class:"ui-search__dropdown"},Tt=["onKeydown","onClick"],jt=X({__name:"UiSearch",props:Z({items:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},placeholder:{type:String,default:void 0}},{modelValue:{required:!0,default:""},modelModifiers:{}}),emits:Z(["reset","input","select"],["update:modelValue"]),setup(p,{emit:h}){const t=bt(p,"modelValue"),g=p,y=G(),u=G(null),s=j({isOpen:!1,btnList:[],focusedElemIndex:-1});at(()=>{window.addEventListener("click",o)}),kt(()=>{window.removeEventListener("click",o)});const E=h;st(()=>g.items,()=>{s.isOpen=g.items.length>0,S()});function k(){E("reset"),s.focusedElemIndex=-1,s.isOpen=!1}function o(c){var d;(d=y.value)!=null&&d.contains(c.target)||(s.isOpen=!1)}function A(c){E("select",c),s.isOpen=!1,setTimeout(()=>{var d;return(d=u.value)==null?void 0:d.focus},300)}function S(){var c;(c=y.value)==null||c.querySelectorAll(".ui-search__item-btn").forEach(d=>{s.btnList.push(d)})}function f(c){var L,x,w,T,q,U;const d=c.target;g.loading||(c.key==="Escape"&&(k(),s.focusedElemIndex=-1,(L=u.value)==null||L.focus()),d.tagName==="INPUT"&&(s.focusedElemIndex=-1),c.key==="ArrowUp"&&(c.preventDefault(),(x=s.btnList)!=null&&x.length&&s.focusedElemIndex>0?(w=s.btnList[--s.focusedElemIndex])==null||w.focus():(T=u.value)==null||T.focus()),c.key==="ArrowDown"&&(c.preventDefault(),(q=s.btnList)!=null&&q.length&&s.focusedElemIndex<s.btnList.length-1&&((U=s.btnList[++s.focusedElemIndex])==null||U.focus())))}return(c,d)=>{const L=vt,x=nt;return R(),B("div",{ref_key:"rootRef",ref:y,class:"ui-search"},[r("div",Ot,[r("div",Pt,[l(L,{ref_key:"inputRef",ref:u,modelValue:t.value,"onUpdate:modelValue":d[0]||(d[0]=w=>t.value=w),modelModifiers:{trim:!0},placeholder:p.placeholder,type:"search",onKeydown:f},null,8,["modelValue","placeholder"])]),C(s).isOpen?(R(),B("div",xt,[r("ul",{class:"ui-search__list",onKeydown:f},[(R(!0),B(ot,null,At(p.items,w=>(R(),B("li",{key:String(w.value),class:"ui-search__item"},[r("button",{class:"ui-search__item-btn",onKeydown:St(T=>A(w),["enter"]),onClick:T=>A(w)},_(w.label),41,Tt)]))),128))],32),l(x,{loading:p.loading},null,8,["loading"])])):wt("",!0)])],512)}}}),Dt={class:"account-sessions-search"},Vt=X({__name:"AccountSessionsSearch",emits:["select"],setup(p,{emit:h}){const t=j({items:[],loading:0,search:""}),g=h;async function y(k=""){t.loading++;try{const A=((await J.session.account.getList({query:k})).data||[]).map(S=>({label:S.raw.nickname,value:S.raw.account_id}));if(A.length){const S=await N.clan.getAccountInfo({extra:"clan",account_id:A.map(f=>f.value).join(",")});S.data&&A.forEach(f=>{var d,L;const c=(L=(d=S.data[String(f.value)])==null?void 0:d.clan)==null?void 0:L.tag;f.label+=c?` [${c}]`:""})}t.items=A}catch(o){P(o,{title:"Поиск аккаунта"})}t.loading--}const u=Et(y,1e3,{leading:!0});st(()=>t.search,async()=>{if(t.search.length<=2){t.items=[];return}await u(t.search)});function s(k){t.items=[],t.search="",g("select",k)}function E(){t.search="",t.items=[]}return(k,o)=>{const A=jt;return R(),B("div",Dt,[l(A,{modelValue:C(t).search,"onUpdate:modelValue":o[0]||(o[0]=S=>C(t).search=S),placeholder:"Введите ник игрока",items:C(t).items,loading:C(t).loading>0,onSelect:s,onReset:E},null,8,["modelValue","items","loading"])])}}}),it=(p,h)=>{if(p===h)return!0;if(p===null||h===null||typeof p!="object"||typeof h!="object")return!1;const t=Object.keys(p),g=Object.keys(h);if(t.length!==g.length)return!1;for(let y=0;y<t.length;y+=1){const u=t[y];if(!g.includes(u)||!it(p[u],h[u]))return!1}return!0},Nt={class:"account-sessions"},qt={class:"account-sessions__description content-area",style:{"max-width":"800px"}},Ut=r("b",null,"Командная игра (КМД)",-1),Ft={class:"account-sessions__filters"},Kt={class:"account-sessions__filters-item"},zt={class:"account-sessions__filters-item"},Mt={class:"account-sessions__sub"},Qt={class:"account-sessions__sub"},Wt={key:1},Ht={class:"account-sessions__win-rate--sub"},Gt={class:"account-sessions__sub"},Jt={key:1},Xt={class:"account-sessions__sub"},Yt={class:"account-sessions__sub"},he=X({__name:"sessions",setup(p){$t({title:"Сессии / Аккаунты"});const h=G(null),t=j({loading:0,items:[],achievementsInfo:null,achievementsSessions:[],achievements:null,clanAccounts:null,accounts:[],accountsSessions:[]}),g=It(),y=Rt(),u=j({total:0,page:1,pageSize:100}),s={order:"desc",prop:"updateAt"},E=j(s),k=V.makeAccountSessionsFilters(),o=j(Bt(k)),A=tt(()=>{const e=[{key:"nickname",label:"Ник",sortable:"custom"},{key:"clan",label:"Клан"},{key:"battles",label:"Боёв"},{key:"winRate",label:"Побед"},{key:"damagePerBattle",label:"Урон"},{key:"teamPoints",label:"КМД *"},{key:"updateAt",width:180,label:"Дата начала",sortable:"custom"},{key:"last_battle_time",width:180,label:"Последний бой"}];return o.ids.length&&e.push({key:"actions"}),e}),S=tt(()=>!it(o,k));at(()=>{Object.assign(o,V.makeAccountSessionsFilters({...k,...y.query})),f()});async function f(){t.loading++,await d(o.ids);const e=t.accountsSessions.map(a=>a.id);e.length&&(await Promise.all([x(),L(e),w(e),T(e),q(e)]),c()),t.loading--}function c(){t.items=t.accountsSessions.map(({raw:e,updateAt:a,id:$})=>{var n,b,Y;const I=t.accounts.find(H=>H.account_id===$);if(!I)return null;const v={...e,statistics:O.diffFull(I.statistics,e.statistics),updateAt:new Date(a).valueOf()},D=v.statistics,M=O.accountAll(D.all),Q=D.rating?O.accountRating(D.rating):null,W=(b=(n=t.clanAccounts)==null?void 0:n[v.account_id])==null?void 0:b.clan,F=t.achievementsSessions.find(H=>H.id===v.account_id);let K=NaN;const z=(Y=t.achievements)==null?void 0:Y[v.account_id];return z&&F&&t.achievementsInfo&&(K=O.teamPoints(v.statistics,O.accountAchievementsDiff(z,F.raw,t.achievementsInfo))),{updateAt:v.updateAt,id:v.account_id,nickname:v.nickname,lastBattleTime:I.last_battle_time,teamPoints:K,currentStatistic:{all:O.accountAll(I.statistics.all),rating:I.statistics.rating?O.accountRating(I.statistics.rating):null},statistic:{all:M,rating:Q},clan:W??null}}).filter(et)}async function d(e){t.loading++;try{const{data:a,meta:$}=await J.session.account.getList({ids:e,pageSize:u.pageSize,page:u.page,sort:`${E.prop}:${E.order}`});u.total=($==null?void 0:$.total)??0,t.accountsSessions=a}catch(a){P(a,{title:"Ошибка поучения сессий аккаунтов"})}t.loading--}async function L(e){t.loading++;try{const{data:a}=await J.session.accountAchievements.getList({ids:e,pageSize:u.pageSize});t.achievementsSessions=a}catch(a){P(a,{title:"Ошибка поучения сессий достижений"})}t.loading--}async function x(){if(!t.achievementsInfo){t.loading++;try{const{data:e}=await N.encyclopedia.getAchievements();t.achievementsInfo=e??null}catch(e){P(e,{title:"Ошибка поучения описания достижений"})}t.loading--}}async function w(e){t.loading++;try{const a=await N.account.getInfo({extra:"statistics.rating",account_id:e.join(",")});t.accounts=Object.values(a.data).filter(et)??null}catch(a){P(a,{title:"Ошибка поучения списка аккаунтов"})}t.loading--}async function T(e){t.loading++;try{const{data:a}=await N.account.getAchievements({account_id:e.join(",")});t.achievements=a??null}catch(a){P(a,{title:"Ошибка поучения списка достижений аккаунтов"})}t.loading--}async function q(e){t.loading++;try{const{data:a}=await N.clan.getAccountInfo({extra:"clan",account_id:e.join(",")});t.clanAccounts=a??null}catch(a){P(a,{title:"Ошибка поучения списка клановых аккаунтов"})}t.loading--}function U(e){E.order=e.order,E.prop=e.prop,f()}async function ct({value:e}){var a;await((a=h.value)==null?void 0:a.doClose()),o.ids.includes(e)||(o.ids=[...o.ids,e]),await g.push({query:{...y.query,...V.toRouteQuery(o)}}),await f()}function lt(){var e;(e=h.value)==null||e.doOpen()}function rt(e){t.items=t.items.filter(a=>a.id!==e.id),o.ids=t.items.map(a=>a.id),g.push({query:V.toRouteQuery(o)}),f()}async function ut(){Object.assign(o,k),await g.push({query:V.toRouteQuery(o)}),f()}async function dt(e){Object.assign(u,e),await f()}return(e,a)=>{const $=mt,I=_t,v=ft,D=pt,M=ht,Q=gt,W=yt,F=Vt,K=Lt,z=nt;return R(),B("div",Nt,[r("div",qt,[r("p",null,[m(' "Сессии" - статистика пользователей за определённый период. Активировать сбор статистики можно через '),l($,{to:{name:"widgets"}},{default:i(()=>[m(" виджет сессии ")]),_:1}),m(" . Данные хранятся на сервере ресурса. ")]),r("ul",null,[r("li",null,[Ut,m(" - сумма нескольких показателей, основной смысл - оценка игры взводом. Подробнее на "),l($,{to:{name:"widgets"}},{default:i(()=>[m(" Странице Виджета ")]),_:1})])])]),m(" Фильтры "),r("div",Ft,[r("div",Kt,[l(v,{onClick:lt},{after:i(()=>[l(I,{name:"add"})]),default:i(()=>[m(" По игроку ")]),_:1})]),r("div",zt,[l(v,{disabled:!C(S),onClick:ut},{after:i(()=>[l(I,{name:"close"})]),default:i(()=>[m(" Очистить ")]),_:1},8,["disabled"])])]),l(W,{"no-wrap":"","scroll-to-top":"","scroll-auto-disabling":"","default-sort":s,headers:C(A),data:C(t).items,height:"calc(100vh - 112px)",onSort:U},{nickname:i(({row:n})=>[l($,{class:"account-sessions__nickname link",to:{name:"account-id",params:{id:n.id}}},{default:i(()=>[m(_(n.nickname),1)]),_:2},1032,["to"])]),battles:i(({row:n})=>{var b;return[m(_(e.$formatter.number.toInteger(n.statistic.all.battles))+" ",1),r("div",Mt,_(e.$formatter.number.toInteger((b=n.currentStatistic)==null?void 0:b.all.battles)||"---"),1)]}),teamPoints:i(({row:n})=>[Number.isNaN(n.teamPoints)?(R(),B("span",Wt," --- ")):(R(),B(ot,{key:0},[m(_(e.$formatter.number.toInteger(n.teamPoints/n.statistic.all.battles)||0)+" ",1),r("span",Qt,_(e.$formatter.number.toInteger(n.teamPoints)||0),1)],64))]),winRate:i(({row:n})=>{var b;return[l(D,{"model-value":n.statistic.all.winRate,class:"account-sessions__win-rate"},null,8,["model-value"]),r("div",Ht,_(e.$formatter.number.toFloatPercent((b=n.currentStatistic)==null?void 0:b.all.winRate)||"---"),1)]}),rating:i(({row:n})=>[l(M,{rating:n.statistic.rating},null,8,["rating"])]),damagePerBattle:i(({row:n})=>{var b;return[m(_(e.$formatter.number.toInteger(n.statistic.all.damagePerBattle))+" ",1),r("div",Gt,_(e.$formatter.number.toInteger((b=n.currentStatistic)==null?void 0:b.all.damagePerBattle)||"---"),1)]}),clan:i(({row:n})=>[n.clan?(R(),Ct($,{key:0,title:n.clan.name,class:"account-sessions__clan link",to:{name:"clan-id",params:{id:n.clan.clan_id}}},{default:i(()=>[m(_(n.clan.tag),1)]),_:2},1032,["title","to"])):(R(),B("span",Jt,"---"))]),last_battle_time:i(({row:n})=>[m(_(e.$formatter.date.toRelativeTime(n.lastBattleTime*1e3))+" ",1),r("span",Xt,_(e.$formatter.date.toDateTime(n.lastBattleTime*1e3)),1)]),updateAt:i(({row:n})=>[m(_(e.$formatter.date.toRelativeTime(n.updateAt))+" ",1),r("span",Yt,_(e.$formatter.date.toDateTime(n.updateAt)),1)]),actions:i(({row:n})=>[l(v,{"is-text":"","is-square":"",onClick:b=>rt(n)},{default:i(()=>[l(I,{name:"delete"})]),_:2},1032,["onClick"])]),footer:i(()=>[l(Q,{pagination:C(u),onChange:dt},null,8,["pagination"])]),_:1},8,["headers","data"]),l(K,{ref_key:"addAccountDialogRef",ref:h,width:"400px",position:"top",title:"Поиск игрока"},{default:i(()=>[l(F,{style:{height:"270px"},onSelect:ct})]),_:1},512),l(z,{loading:C(t).loading>0},null,8,["loading"])])}}});export{he as default};
