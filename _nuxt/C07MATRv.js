import{_ as M}from"./C0D3GLS_.js";import{_ as j}from"./DDaHkhwB.js";import{_ as D}from"./CXVwBHr2.js";import{_ as R}from"./BcoL5P8V.js";import{_ as T,a as A}from"./BHA4Nd6Z.js";import{f as E,u as W,n as B,s as r,q,c as v,k as d,d as c,a as s,t as l,m as z,b as u,w as i,o as h,j as G,F as H}from"./Dfk_Fzw6.js";import{u as J}from"./7UWFdEo2.js";import{s as K}from"./D-pHF5aR.js";import{a as $}from"./R5p0mRuj.js";import{h as k}from"./BQaFixBN.js";import{_ as Q}from"./qUbMiEWU.js";import"./DcLHZll-.js";import"./Dwwx9l0Y.js";const X={class:"leaderboards-accounts-page"},Y=s("div",{class:"leaderboards-accounts-page__description content-area"},[s("h2",null,"Топ «Опытных» игроков"),s("p",null,'Чем выше средний "Опыт", тем выше ваша позиция в рейтинге.'),s("p",null,"Условия участия:"),s("ol",null,[s("li",null,"Быть авторизованным на ресурсе не менее 3-х дней"),s("li",null,'Провести суммарно не менее 10 "обычных" боёв в сутки')])],-1),Z={key:0,class:"leaderboards-accounts-page__user-position"},tt={class:"leaderboards-accounts-page__filters"},at={class:"leaderboards-accounts-page__filters-item"},et={class:"leaderboards-accounts-page__filters-item"},ot={class:"leaderboards-accounts-page__sub"},nt={class:"leaderboards-accounts-page__sub"},st={class:"leaderboards-accounts-page__sub"},lt={class:"leaderboards-accounts-page__sub"},rt={class:"leaderboards-accounts-page__sub"},ct={class:"leaderboards-accounts-page__sub"},It=E({__name:"accounts",setup(it){W({title:"Рейтинги / Техника"});const P=J(),e=B({loading:0,tanks:[],accountsLeaderboard:[],userOnLeaderboard:null,items:[],clanAccounts:null,accounts:null}),_=B({page:1,pageSize:100,period:7,battlesPerDay:10,battlesMin:1e4}),N=[7,14,30,60,90].map(t=>({value:t,label:new Intl.NumberFormat("ru",{style:"unit",unit:"day",unitDisplay:"long"}).format(t)})),F=[{label:"От 1к",value:1e3},{label:"от 5к",value:5e3},{label:"от 10к",value:1e4},{label:"от 30к",value:3e4}],V=[{key:"position",label:"#",width:40,align:"center"},{key:"nickname",label:"Ник"},{key:"clan",label:"Клан"},{key:"xp_per_battle",label:"Опыт",tooltip:r.stat.accountProp("xp"),formatter:t=>r.number.toInteger(t)},{key:"battles",label:"Бои",tooltip:r.stat.accountProp("battles"),formatter:t=>r.number.toInteger(t)},{key:"win_rate",label:"Победы",tooltip:r.stat.accountProp("winRate"),formatter:t=>r.number.toFloatNumber(t)},{key:"damage_per_battle",label:"Урон",tooltip:r.stat.accountProp("damagePerBattle"),formatter:t=>r.number.toInteger(t)},{key:"frags_per_battle",label:"Уничт. / ур. >= 8",tooltip:r.stat.accountProp("fragPerBattle"),formatter:t=>r.number.toFloatNumber(t)},{key:"spotted_per_battle",label:"Обн.",tooltip:r.stat.accountProp("spotted"),formatter:t=>r.number.toFloatNumber(t)}];q(()=>{I()});async function x(t){e.loading++;try{const{data:o}=await A.account.getInfo({extra:"statistics.rating",account_id:t.join(",")});e.accounts=o??null}catch(o){e.accounts=null,k(o,{title:"Поучение списка аккаунтов"})}e.loading--}async function C(t){e.loading++;try{const{data:o}=await A.clan.getAccountInfo({extra:"clan",account_id:t.join(",")});e.clanAccounts=o??null}catch(o){e.clanAccounts=null,k(o,{title:"Ошибка поучения списка клановых аккаунтов"})}e.loading--}async function O(){e.loading++;try{const{data:t}=await $.leaderboards.getAccounts(_);e.accountsLeaderboard=t}catch(t){e.accountsLeaderboard=[],k(t,{title:"Получение рейтинга игроков"})}e.loading--}async function S(){e.loading++;try{const{data:t}=await $.leaderboards.getAccounts({..._,ids:[P.accountId]});e.userOnLeaderboard=t[0]}catch(t){e.userOnLeaderboard=null,k(t,{title:"Получение рейтинга пользователя"})}e.loading--}async function U(){const t=e.accountsLeaderboard.map(o=>o.id);t.length&&(await Promise.allSettled([C(t),x(t)]),e.items=e.accountsLeaderboard.map(o=>{var g,f,y,m;const b=(f=(g=e.clanAccounts)==null?void 0:g[o.id])==null?void 0:f.clan,p=(m=(y=e.accounts)==null?void 0:y[o.id])==null?void 0:m.statistics;return{...o,stat:p?K.accountAll(p.all):null,clan:b??null}}))}async function I(){await Promise.all([O(),P.accountId?S():null]),await U()}function L(){I()}return(t,o)=>{var m;const b=M,p=j,g=D,f=R,y=T;return h(),v("div",X,[Y,d(e).userOnLeaderboard?(h(),v("div",Z,[c(" Ваша позиция в рейтинге: "),s("b",null,l((m=d(e).userOnLeaderboard)==null?void 0:m.position),1),c(". ")])):z("",!0),s("div",tt,[s("div",at,[c(" За период: "),u(b,{modelValue:d(_).period,"onUpdate:modelValue":o[0]||(o[0]=a=>d(_).period=a),style:{width:"120px"},options:d(N),onChange:L},null,8,["modelValue","options"])]),s("div",et,[c(" Боёв: "),u(b,{modelValue:d(_).battlesMin,"onUpdate:modelValue":o[1]||(o[1]=a=>d(_).battlesMin=a),style:{width:"120px"},options:F,onChange:L},null,8,["modelValue"])])]),u(f,{ref:"accountsTable","no-wrap":"","row-key":"id","scroll-to-top":"","scroll-auto-disabling":"",headers:V,data:d(e).items,height:"calc(100vh - 112px)"},{position:i(({row:a})=>[u(Q,{position:a.position},null,8,["position"])]),nickname:i(({row:a})=>[u(p,{class:"leaderboards-accounts-page__nickname link",to:{name:"account-id",params:{id:a.id}}},{default:i(()=>[c(l(a.nickname),1)]),_:2},1032,["to"])]),clan:i(({row:a})=>[a.clan?(h(),G(p,{key:0,class:"leaderboards-accounts-page__clan link",to:{name:"clan-id",params:{id:a.clan.clan_id}}},{default:i(()=>[c(l(a.clan.tag),1)]),_:2},1032,["to"])):(h(),v(H,{key:1},[c(" --- ")],64))]),battles:i(({row:a})=>{var n;return[c(l(a.battles)+" ",1),s("div",ot,l(t.$formatter.number.toInteger((n=a.stat)==null?void 0:n.battles)||"---"),1)]}),win_rate:i(({row:a})=>{var n;return[u(g,{"win-rate":a.win_rate,class:"leaderboards-accounts-page__win-rate"},null,8,["win-rate"]),s("div",nt,l(t.$formatter.number.toFloatPercent((n=a.stat)==null?void 0:n.winRate)||"---"),1)]}),damage_per_battle:i(({row:a})=>{var n;return[c(l(a.damage_per_battle)+" ",1),s("div",st,l(t.$formatter.number.toInteger((n=a.stat)==null?void 0:n.damagePerBattle)||"---"),1)]}),frags_per_battle:i(({row:a})=>{var n,w;return[c(l(a.frags_per_battle)+" / "+l(a.frags8p_per_battle)+" ",1),s("div",lt,l(t.$formatter.number.toFloatNumber((n=a.stat)==null?void 0:n.fragPerBattle)||"---")+" / "+l(t.$formatter.number.toFloatNumber((w=a.stat)==null?void 0:w.frag8pPerBattle)||"---"),1)]}),xp_per_battle:i(({row:a})=>{var n;return[c(l(a.xp_per_battle)+" ",1),s("div",rt,l(t.$formatter.number.toInteger((n=a.stat)==null?void 0:n.xpPerBattle)||"---"),1)]}),spotted_per_battle:i(({row:a})=>{var n;return[c(l(a.spotted_per_battle)+" ",1),s("div",ct,l(t.$formatter.number.toInteger((n=a.stat)==null?void 0:n.spottedPerBattle)||"---"),1)]}),_:1},8,["data"]),u(y,{loading:d(e).loading>0},null,8,["loading"])])}}});export{It as default};