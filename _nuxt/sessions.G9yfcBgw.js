import{_ as mt}from"./nuxt-link.L0yXcBJ9.js";import{h as P,a as ft,_ as _t}from"./disableScroll.C0aRP9sA.js";import{_ as pt}from"./WinRate.vue.CRSh5IUU.js";import{_ as ht}from"./RatingIcon.vue.4uO5v5Kn.js";import{_ as gt}from"./TablePagination.vue.YWKQ08UD.js";import{_ as yt}from"./CTable.vue.Nq0ui9O0.js";import{_ as vt}from"./CInput.vue.zZzbFdHH.js";import{_ as nt}from"./ContentLoader.vue.CZ7Avnj8.js";import{n as X,D as Z,E as bt,r as H,A as V,B as st,G as kt,h as at,o as C,c as B,a as r,b as l,x as R,F as ot,H as St,I as At,t as p,z as wt,q as $t,u as It,s as tt,d as f,w as i,v as Ct}from"./entry.C7rsCkde.js";import{d as Rt}from"./debounce.C9J8JV9z.js";import{a as q}from"./request.2vtDDBdm.js";import{a as J}from"./index.CiYw46hj.js";import{_ as Et}from"./CDialog.vue.DWhS8OEK.js";import{n as et}from"./notEmpty.BxBPJGBn.js";import{c as Lt}from"./cloneDeep.6mdasiia.js";import{f as N}from"./index.B0yFPb21.js";import{s as O}from"./index.DVI7ejDe.js";import"./isArrayLike.ji7-7BFC.js";const Bt={class:"c-search__inner"},Ot={class:"c-search__input"},Pt={key:0,class:"c-search__dropdown"},xt=["onKeydown","onClick"],Tt=X({__name:"CSearch",props:Z({items:{type:Array,default:()=>[]},loading:{type:Boolean,default:!1},placeholder:{type:String,default:void 0}},{modelValue:{required:!0,default:""},modelModifiers:{}}),emits:Z(["reset","input","select"],["update:modelValue"]),setup(h,{emit:u}){const t=bt(h,"modelValue"),g=h,y=H(),d=H(null),a=V({isOpen:!1,btnList:[],focusedElemIndex:-1});st(()=>{window.addEventListener("click",o)}),kt(()=>{window.removeEventListener("click",o)});const E=u;at(()=>g.items,()=>{a.isOpen=g.items.length>0,A()});function k(){E("reset"),a.focusedElemIndex=-1,a.isOpen=!1}function o(c){var m;(m=y.value)!=null&&m.contains(c.target)||(a.isOpen=!1)}function S(c){E("select",c),a.isOpen=!1,setTimeout(()=>{var m;return(m=d.value)==null?void 0:m.focus},300)}function A(){var c;(c=y.value)==null||c.querySelectorAll(".c-search__item-btn").forEach(m=>{a.btnList.push(m)})}function _(c){var L,x,w,T,D,F;const m=c.target;g.loading||(c.key==="Escape"&&(k(),a.focusedElemIndex=-1,(L=d.value)==null||L.focus()),m.tagName==="INPUT"&&(a.focusedElemIndex=-1),c.key==="ArrowUp"&&(c.preventDefault(),(x=a.btnList)!=null&&x.length&&a.focusedElemIndex>0?(w=a.btnList[--a.focusedElemIndex])==null||w.focus():(T=d.value)==null||T.focus()),c.key==="ArrowDown"&&(c.preventDefault(),(D=a.btnList)!=null&&D.length&&a.focusedElemIndex<a.btnList.length-1&&((F=a.btnList[++a.focusedElemIndex])==null||F.focus())))}return(c,m)=>{const L=vt,x=nt;return C(),B("div",{ref_key:"rootRef",ref:y,class:"c-search"},[r("div",Bt,[r("div",Ot,[l(L,{ref_key:"inputRef",ref:d,modelValue:t.value,"onUpdate:modelValue":m[0]||(m[0]=w=>t.value=w),modelModifiers:{trim:!0},placeholder:h.placeholder,type:"search",onKeydown:_},null,8,["modelValue","placeholder"])]),R(a).isOpen?(C(),B("div",Pt,[r("ul",{class:"c-search__list",onKeydown:_},[(C(!0),B(ot,null,St(h.items,w=>(C(),B("li",{key:String(w.value),class:"c-search__item"},[r("button",{class:"c-search__item-btn",onKeydown:At(T=>S(w),["enter"]),onClick:T=>S(w)},p(w.label),41,xt)]))),128))],32),l(x,{loading:h.loading},null,8,["loading"])])):wt("",!0)])],512)}}}),Vt={class:"account-sessions-search"},jt=X({__name:"AccountSessionsSearch",emits:["select"],setup(h,{emit:u}){const t=V({items:[],loading:0,search:""}),g=u;async function y(k=""){t.loading++;try{const S=((await J.session.account.getList({query:k})).data||[]).map(A=>({label:A.raw.nickname,value:A.raw.account_id}));if(S.length){const A=await q.clan.getAccountInfo({extra:"clan",account_id:S.map(_=>_.value).join(",")});A.data&&S.forEach(_=>{var m,L;const c=(L=(m=A.data[String(_.value)])==null?void 0:m.clan)==null?void 0:L.tag;_.label+=c?` [${c}]`:""})}t.items=S}catch(o){P(o,{title:"Поиск аккаунта"})}t.loading--}const d=Rt(y,1e3,{leading:!0});at(()=>t.search,async()=>{if(t.search.length<=2){t.items=[];return}await d(t.search)});function a(k){t.items=[],t.search="",g("select",k)}function E(){t.search="",t.items=[]}return(k,o)=>{const S=Tt;return C(),B("div",Vt,[l(S,{modelValue:R(t).search,"onUpdate:modelValue":o[0]||(o[0]=A=>R(t).search=A),placeholder:"Введите ник игрока",items:R(t).items,loading:R(t).loading>0,onSelect:a,onReset:E},null,8,["modelValue","items","loading"])])}}}),it=(h,u)=>{if(h===u)return!0;if(h===null||u===null||typeof h!="object"||typeof u!="object")return!1;const t=Object.keys(h),g=Object.keys(u);if(t.length!==g.length)return!1;for(let y=0;y<t.length;y+=1){const d=t[y];if(!g.includes(d)||!it(h[d],u[d]))return!1}return!0},Nt={class:"account-sessions"},qt={class:"account-sessions__description content-area",style:{"max-width":"800px"}},Dt=r("b",null,"Командная игра (КМД)",-1),Ft={class:"account-sessions__filters"},Kt={class:"account-sessions__filters-item"},zt={class:"account-sessions__filters-item"},Mt={class:"account-sessions__sub"},Ut={class:"account-sessions__sub"},Qt={key:1},Wt={class:"account-sessions__win-rate--sub"},Gt={class:"account-sessions__sub"},Ht={key:1},Jt={class:"account-sessions__sub"},Xt={class:"account-sessions__sub"},he=X({__name:"sessions",setup(h){const u=H(null),t=V({loading:0,items:[],achievementsInfo:null,achievementsSessions:[],achievements:null,clanAccounts:null,accounts:[],accountsSessions:[]}),g=$t(),y=It(),d=V({total:0,page:1,pageSize:100}),a={order:"desc",prop:"updateAt"},E=V(a),k=N.makeAccountSessionsFilters(),o=V(Lt(k)),S=tt(()=>{const e=[{key:"nickname",label:"Ник",sortable:"custom"},{key:"clan",label:"Клан"},{key:"battles",label:"Боёв"},{key:"winRate",label:"Побед"},{key:"damagePerBattle",label:"Урон"},{key:"teamPoints",label:"КМД *"},{key:"updateAt",width:180,label:"Дата начала",sortable:"custom"},{key:"last_battle_time",width:180,label:"Последний бой"}];return o.ids.length&&e.push({key:"actions"}),e}),A=tt(()=>!it(o,k));st(()=>{Object.assign(o,N.makeAccountSessionsFilters({...k,...y.query})),_()});async function _(){t.loading++,await m(o.ids);const e=t.accountsSessions.map(s=>s.id);e.length&&(await Promise.all([x(),L(e),w(e),T(e),D(e)]),c()),t.loading--}function c(){t.items=t.accountsSessions.map(({raw:e,updateAt:s,id:$})=>{var n,b,Y;const I=t.accounts.find(G=>G.account_id===$);if(!I)return null;const v={...e,statistics:O.diffFull(I.statistics,e.statistics),updateAt:new Date(s).valueOf()},j=v.statistics,U=O.accountAll(j.all),Q=j.rating?O.accountRating(j.rating):null,W=(b=(n=t.clanAccounts)==null?void 0:n[v.account_id])==null?void 0:b.clan,K=t.achievementsSessions.find(G=>G.id===v.account_id);let z=NaN;const M=(Y=t.achievements)==null?void 0:Y[v.account_id];return M&&K&&t.achievementsInfo&&(z=O.teamPoints(v.statistics,O.achievementsDiff(M,K.raw,t.achievementsInfo))),{updateAt:v.updateAt,id:v.account_id,nickname:v.nickname,lastBattleTime:I.last_battle_time,teamPoints:z,currentStatistic:{all:O.accountAll(I.statistics.all),rating:I.statistics.rating?O.accountRating(I.statistics.rating):null},statistic:{all:U,rating:Q},clan:W??null}}).filter(et)}async function m(e){t.loading++;try{const{data:s,meta:$}=await J.session.account.getList({ids:e,pageSize:d.pageSize,page:d.page,sort:`${E.prop}:${E.order}`});d.total=($==null?void 0:$.total)??0,t.accountsSessions=s}catch(s){P(s,{title:"Ошибка поучения сессий аккаунтов"})}t.loading--}async function L(e){t.loading++;try{const{data:s}=await J.session.accountAchievements.getList({ids:e,pageSize:d.pageSize});t.achievementsSessions=s}catch(s){P(s,{title:"Ошибка поучения сессий достижений"})}t.loading--}async function x(){if(!t.achievementsInfo){t.loading++;try{const{data:e}=await q.encyclopedia.getAchievements();t.achievementsInfo=e??null}catch(e){P(e,{title:"Ошибка поучения описания достижений"})}t.loading--}}async function w(e){t.loading++;try{const s=await q.account.getInfo({extra:"statistics.rating",account_id:e.join(",")});t.accounts=Object.values(s.data).filter(et)??null}catch(s){P(s,{title:"Ошибка поучения списка аккаунтов"})}t.loading--}async function T(e){t.loading++;try{const{data:s}=await q.account.getAchievements({account_id:e.join(",")});t.achievements=s??null}catch(s){P(s,{title:"Ошибка поучения списка достижений аккаунтов"})}t.loading--}async function D(e){t.loading++;try{const{data:s}=await q.clan.getAccountInfo({extra:"clan",account_id:e.join(",")});t.clanAccounts=s??null}catch(s){P(s,{title:"Ошибка поучения списка клановых аккаунтов"})}t.loading--}function F(e){E.order=e.order,E.prop=e.prop,_()}async function ct({value:e}){await(u==null?void 0:u.value.doClose()),o.ids.includes(e)||(o.ids=[...o.ids,e]),await g.push({query:{...y.query,...N.toRouteQuery(o)}}),await _()}function lt(){u==null||u.value.doOpen()}function rt(e){t.items=t.items.filter(s=>s.id!==e.id),o.ids=t.items.map(s=>s.id),g.push({query:N.toRouteQuery(o)}),_()}async function ut(){Object.assign(o,k),await g.push({query:N.toRouteQuery(o)}),_()}async function dt(e){Object.assign(d,e),await _()}return(e,s)=>{const $=mt,I=_t,v=ft,j=pt,U=ht,Q=gt,W=yt,K=jt,z=Et,M=nt;return C(),B("div",Nt,[r("div",qt,[r("p",null,[f(' "Сессии" - статистика пользователей за определённый период. Активировать сбор статистики можно через '),l($,{to:{name:"widgets"}},{default:i(()=>[f(" виджет сессии ")]),_:1}),f(" . Данные хранятся на сервере ресурса. ")]),r("ul",null,[r("li",null,[Dt,f(" - сумма нескольких показателей, основной смысл - оценка игры взводом. Подробнее на "),l($,{to:{name:"widgets"}},{default:i(()=>[f(" Странице Виджета ")]),_:1})])])]),f(" Фильтры "),r("div",Ft,[r("div",Kt,[l(v,{onClick:lt},{after:i(()=>[l(I,{name:"add"})]),default:i(()=>[f(" По игроку ")]),_:1})]),r("div",zt,[l(v,{disabled:!R(A),onClick:ut},{after:i(()=>[l(I,{name:"close"})]),default:i(()=>[f(" Очистить ")]),_:1},8,["disabled"])])]),l(W,{"no-wrap":"","scroll-to-top":"","scroll-auto-disabling":"","default-sort":a,headers:R(S),data:R(t).items,height:"calc(100vh - 112px)",onSort:F},{nickname:i(({row:n})=>[l($,{class:"account-sessions__nickname link",to:{name:"account-id",params:{id:n.id}}},{default:i(()=>[f(p(n.nickname),1)]),_:2},1032,["to"])]),battles:i(({row:n})=>{var b;return[f(p(e.$formatter.number.toInteger(n.statistic.all.battles))+" ",1),r("div",Mt,p(e.$formatter.number.toInteger((b=n.currentStatistic)==null?void 0:b.all.battles)||"---"),1)]}),teamPoints:i(({row:n})=>[Number.isNaN(n.teamPoints)?(C(),B("span",Qt," --- ")):(C(),B(ot,{key:0},[f(p(e.$formatter.number.toInteger(n.teamPoints/n.statistic.all.battles)||0)+" ",1),r("span",Ut,p(e.$formatter.number.toInteger(n.teamPoints)||0),1)],64))]),winRate:i(({row:n})=>{var b;return[l(j,{"model-value":n.statistic.all.winRate,class:"account-sessions__win-rate"},null,8,["model-value"]),r("div",Wt,p(e.$formatter.number.toFloatPercent((b=n.currentStatistic)==null?void 0:b.all.winRate)||"---"),1)]}),rating:i(({row:n})=>[l(U,{rating:n.statistic.rating},null,8,["rating"])]),damagePerBattle:i(({row:n})=>{var b;return[f(p(e.$formatter.number.toInteger(n.statistic.all.damagePerBattle))+" ",1),r("div",Gt,p(e.$formatter.number.toInteger((b=n.currentStatistic)==null?void 0:b.all.damagePerBattle)||"---"),1)]}),clan:i(({row:n})=>[n.clan?(C(),Ct($,{key:0,title:n.clan.name,class:"account-sessions__clan link",to:{name:"clan-id",params:{id:n.clan.clan_id}}},{default:i(()=>[f(p(n.clan.tag),1)]),_:2},1032,["title","to"])):(C(),B("span",Ht,"---"))]),last_battle_time:i(({row:n})=>[f(p(e.$formatter.date.toRelativeTime(n.lastBattleTime*1e3))+" ",1),r("span",Jt,p(e.$formatter.date.toDateTime(n.lastBattleTime*1e3)),1)]),updateAt:i(({row:n})=>[f(p(e.$formatter.date.toRelativeTime(n.updateAt))+" ",1),r("span",Xt,p(e.$formatter.date.toDateTime(n.updateAt)),1)]),actions:i(({row:n})=>[l(v,{"is-text":"","is-square":"",onClick:b=>rt(n)},{default:i(()=>[l(I,{name:"delete"})]),_:2},1032,["onClick"])]),footer:i(()=>[l(Q,{pagination:R(d),onChange:dt},null,8,["pagination"])]),_:1},8,["headers","data"]),l(z,{ref_key:"addAccountDialogRef",ref:u,width:"400px",position:"top",title:"Поиск игрока"},{default:i(()=>[l(K,{style:{height:"270px"},onSelect:ct})]),_:1},512),l(M,{loading:R(t).loading>0},null,8,["loading"])])}}});export{he as default};
