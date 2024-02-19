import{_ as R}from"./CSelect.vue.wFKzONck.js";import{_ as T}from"./nuxt-link.L0yXcBJ9.js";import{_ as j}from"./WinRate.vue.CRSh5IUU.js";import{_ as D}from"./CTable.vue.Nq0ui9O0.js";import{_ as E}from"./PageSection.vue.CMtJcZy6.js";import{_ as W}from"./ContentLoader.vue.CZ7Avnj8.js";import{_ as J}from"./PageContent.vue.DiWfrwfS.js";import{u as q}from"./user.DLlwbhvI.js";import{n as G,A as I,C as i,B as H,v as $,w as r,o as y,b as p,x as c,c as L,d,a as s,t as n,z as K,J as Q,F as X}from"./entry.C7rsCkde.js";import{s as Y}from"./index.DVI7ejDe.js";import{a as A}from"./request.2vtDDBdm.js";import{a as N}from"./index.CiYw46hj.js";import{h as k}from"./disableScroll.C0aRP9sA.js";import"./index.DkVO-Tjf.js";import"./ContentBox.vue.C-VSBEfk.js";import"./CInput.vue.zZzbFdHH.js";import"./notEmpty.BxBPJGBn.js";import"./debounce.C9J8JV9z.js";import"./CDialog.vue.DWhS8OEK.js";import"./index.EUvklMki.js";import"./leader.CbdGYCpE.js";import"./nuxt-icon.qIaVhdWh.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./client-only.DbbL8paw.js";import"./dark-mode.As55vT4i.js";import"./light-mode.DTGtv4dw.js";const Z=s("div",{class:"leaderboards-page__description content-area",style:{"max-width":"800px"}},[s("p",null,'Чем выше средний "Опыт", тем выше ваша позиция в рейтинге.'),s("p",null,"Условия участия:"),s("ol",null,[s("li",null,"Быть авторизованным на ресурсе не менее 3-х дней"),s("li",null,'Провести суммарно не менее 10 "обычных" боёв в сутки')])],-1),tt={key:0,class:"leaderboards-page__user-position"},at={class:"leaderboards-page__filters"},et={class:"leaderboards-page__filters-item"},ot={class:"leaderboards-page__filters-item"},lt={class:"leaderboards-page__sub"},nt={class:"leaderboards-page__sub"},st={class:"leaderboards-page__sub"},rt={class:"leaderboards-page__sub"},it={class:"leaderboards-page__sub"},dt={class:"leaderboards-page__sub"},Ut=G({__name:"index",setup(ct){const v=q(),e=I({loading:0,leaderboard:[],userOnLeaderboard:null,items:[],clanAccounts:null,accounts:null}),_=I({page:1,pageSize:100,period:7,battlesPerDay:10,battlesMin:1e4}),V=[{label:"7 дней",value:7},{label:"14 дней",value:14},{label:"30 дней",value:30},{label:"90 дней",value:90}],F=[{label:"От 1к",value:1e3},{label:"от 5к",value:5e3},{label:"от 10к",value:1e4},{label:"от 30к",value:3e4}],O=[{key:"position",label:"#",width:40,align:"center"},{key:"nickname",label:"Ник"},{key:"clan",label:"Клан"},{key:"battles",label:"Бои",tooltip:i.stat.accountProp("battles"),formatter:t=>i.number.toInteger(t)},{key:"win_rate",label:"Победы",tooltip:i.stat.accountProp("winRate"),formatter:t=>i.number.toFloatNumber(t)},{key:"damage_per_battle",label:"Урон",tooltip:i.stat.accountProp("damagePerBattle"),formatter:t=>i.number.toInteger(t)},{key:"frags_per_battle",label:"Уничт. / ур. >= 8",tooltip:i.stat.accountProp("fragPerBattle"),formatter:t=>i.number.toFloatNumber(t)},{key:"xp_per_battle",label:"Опыт",tooltip:i.stat.accountProp("xp"),formatter:t=>i.number.toInteger(t)},{key:"spotted_per_battle",label:"Обн.",tooltip:i.stat.accountProp("spotted"),formatter:t=>i.number.toFloatNumber(t)}];H(()=>{P()});async function P(){await Promise.all([M(),v.accountId?U():null]);const t=e.leaderboard.map(({id:o})=>o);t.length&&(await Promise.allSettled([S(t),w(t)]),e.items=e.leaderboard.map(o=>{var b,g,f,h;const u=(g=(b=e.clanAccounts)==null?void 0:b[o.id])==null?void 0:g.clan,m=(h=(f=e.accounts)==null?void 0:f[o.id])==null?void 0:h.statistics;return{...o,stat:m?Y.accountAll(m.all):null,clan:u??null}}))}async function w(t){e.loading++;try{const{data:o}=await A.account.getInfo({extra:"statistics.rating",account_id:t.join(",")});e.accounts=o??null}catch(o){e.accounts=null,k(o,{title:"Поучение списка аккаунтов"})}e.loading--}async function S(t){e.loading++;try{const{data:o}=await A.clan.getAccountInfo({extra:"clan",account_id:t.join(",")});e.clanAccounts=o??null}catch(o){e.clanAccounts=null,k(o,{title:"Ошибка поучения списка клановых аккаунтов"})}e.loading--}async function M(){e.loading++;try{const{data:t}=await N.leaderboards.getList(_);e.leaderboard=t}catch(t){e.leaderboard=[],k(t,{title:"Получение рейтинга игроков"})}e.loading--}async function U(){e.loading++;try{const{data:t}=await N.leaderboards.getList({..._,ids:[v.accountId]});e.userOnLeaderboard=t[0]}catch(t){e.userOnLeaderboard=null,k(t,{title:"Получение рейтинга пользователя"})}e.loading--}function x(){P()}return(t,o)=>{const u=R,m=T,b=j,g=D,f=E,h=W,z=J;return y(),$(z,{class:"leaderboards-page"},{default:r(()=>[p(f,{title:"Топ «Опытных» игроков (тест)",identity:"xp"},{default:r(()=>{var B;return[Z,c(e).userOnLeaderboard?(y(),L("div",tt,[d(" Ваша позиция в рейтинге: "),s("b",null,n((B=c(e).userOnLeaderboard)==null?void 0:B.position),1),d(". ")])):K("",!0),s("div",at,[s("div",et,[d(" За период: "),p(u,{modelValue:c(_).period,"onUpdate:modelValue":o[0]||(o[0]=a=>c(_).period=a),style:{width:"120px"},options:V,onChange:x},null,8,["modelValue"])]),s("div",ot,[d(" Боёв: "),p(u,{modelValue:c(_).battlesMin,"onUpdate:modelValue":o[1]||(o[1]=a=>c(_).battlesMin=a),style:{width:"120px"},options:F,onChange:x},null,8,["modelValue"])])]),p(g,{ref:"accountsTable","no-wrap":"","scroll-to-top":"","scroll-auto-disabling":"",headers:O,data:c(e).items,height:"calc(100vh - 112px)"},{position:r(({row:a})=>[s("span",{class:Q(["leaderboards-page__mark",["leaderboards-page__mark--"+a.position]])},n(a.position),3)]),nickname:r(({row:a})=>[p(m,{class:"leaderboards-page__nickname link",to:{name:"account-id",params:{id:a.id}}},{default:r(()=>[d(n(a.nickname),1)]),_:2},1032,["to"])]),clan:r(({row:a})=>[a.clan?(y(),$(m,{key:0,class:"leaderboards-page__clan link",to:{name:"clan-id",params:{id:a.clan.clan_id}}},{default:r(()=>[d(n(a.clan.tag),1)]),_:2},1032,["to"])):(y(),L(X,{key:1},[d(" --- ")],64))]),battles:r(({row:a})=>{var l;return[d(n(a.battles)+" ",1),s("div",lt,n(t.$formatter.number.toInteger((l=a.stat)==null?void 0:l.battles)||"---"),1)]}),win_rate:r(({row:a})=>{var l;return[p(b,{"model-value":a.win_rate,class:"leaderboards-page__win-rate"},null,8,["model-value"]),s("div",nt,n(t.$formatter.number.toFloatPercent((l=a.stat)==null?void 0:l.winRate)||"---"),1)]}),damage_per_battle:r(({row:a})=>{var l;return[d(n(a.damage_per_battle)+" ",1),s("div",st,n(t.$formatter.number.toInteger((l=a.stat)==null?void 0:l.damagePerBattle)||"---"),1)]}),frags_per_battle:r(({row:a})=>{var l,C;return[d(n(a.frags_per_battle)+" / "+n(a.frags8p_per_battle)+" ",1),s("div",rt,n(t.$formatter.number.toFloatNumber((l=a.stat)==null?void 0:l.fragPerBattle)||"---")+" / "+n(t.$formatter.number.toFloatNumber((C=a.stat)==null?void 0:C.frag8pPerBattle)||"---"),1)]}),xp_per_battle:r(({row:a})=>{var l;return[d(n(a.xp_per_battle)+" ",1),s("div",it,n(t.$formatter.number.toInteger((l=a.stat)==null?void 0:l.xpPerBattle)||"---"),1)]}),spotted_per_battle:r(({row:a})=>{var l;return[d(n(a.spotted_per_battle)+" ",1),s("div",dt,n(t.$formatter.number.toInteger((l=a.stat)==null?void 0:l.spottedPerBattle)||"---"),1)]}),_:1},8,["data"])]}),_:1}),p(h,{loading:c(e).loading>0},null,8,["loading"])]),_:1})}}});export{Ut as default};
