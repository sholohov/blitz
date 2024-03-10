import{_ as R}from"./UiSelect.vue.D2eRQWvm.js";import{_ as T}from"./nuxt-link.vBf0PoaZ.js";import{_ as z}from"./WinRate.vue.BzptdZEm.js";import{_ as D}from"./UiTable.vue.BVfjirGu.js";import{_ as E}from"./PageSection.vue.s6l2bVZ8.js";import{a as B,_ as W}from"./request.DYurK6w5.js";import{_ as q}from"./PageContent.vue.CjVF284l.js";import{f as H,u as G,n as L,s as i,q as J,j as C,w as r,o as y,b as p,k as c,c as N,d,a as s,t as n,m as K,C as Q,F as X}from"./entry.BCxoBdpj.js";import{u as Y}from"./user.BXGQUIUO.js";import{s as Z}from"./index.Bti3NMCI.js";import{a as V}from"./index.BxyEh5Dy.js";import{h as k}from"./disableScroll.BMhynJqB.js";import"./index.R4QztNYD.js";import"./MainSearch.vue.DriJ0O-h.js";import"./UiInput.vue.ZQG53_VX.js";import"./notEmpty.BxBPJGBn.js";import"./debounce.B4CGx-ur.js";import"./UiDialog.vue.BESQZ_pt.js";import"./index.54BYZypU.js";import"./ContentBox.vue.B2lu2vIZ.js";import"./leader.CagW_mQj.js";import"./nuxt-icon.j5VLktT_.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./client-only.Dbbbis-5.js";import"./dark-mode.1dmeuvir.js";import"./light-mode.Bx25YAGu.js";const tt=s("div",{class:"leaderboards-page__description content-area",style:{"max-width":"800px"}},[s("p",null,'Чем выше средний "Опыт", тем выше ваша позиция в рейтинге.'),s("p",null,"Условия участия:"),s("ol",null,[s("li",null,"Быть авторизованным на ресурсе не менее 3-х дней"),s("li",null,'Провести суммарно не менее 10 "обычных" боёв в сутки')])],-1),at={key:0,class:"leaderboards-page__user-position"},et={class:"leaderboards-page__filters"},ot={class:"leaderboards-page__filters-item"},lt={class:"leaderboards-page__filters-item"},nt={class:"leaderboards-page__sub"},st={class:"leaderboards-page__sub"},rt={class:"leaderboards-page__sub"},it={class:"leaderboards-page__sub"},dt={class:"leaderboards-page__sub"},ct={class:"leaderboards-page__sub"},jt=H({__name:"index",setup(pt){G({title:"Лидерборды"});const v=Y(),e=L({loading:0,leaderboard:[],userOnLeaderboard:null,items:[],clanAccounts:null,accounts:null}),_=L({page:1,pageSize:100,period:7,battlesPerDay:10,battlesMin:1e4}),A=[{label:"7 дней",value:7},{label:"14 дней",value:14},{label:"30 дней",value:30},{label:"90 дней",value:90}],F=[{label:"От 1к",value:1e3},{label:"от 5к",value:5e3},{label:"от 10к",value:1e4},{label:"от 30к",value:3e4}],O=[{key:"position",label:"#",width:40,align:"center"},{key:"nickname",label:"Ник"},{key:"clan",label:"Клан"},{key:"battles",label:"Бои",tooltip:i.stat.accountProp("battles"),formatter:t=>i.number.toInteger(t)},{key:"win_rate",label:"Победы",tooltip:i.stat.accountProp("winRate"),formatter:t=>i.number.toFloatNumber(t)},{key:"damage_per_battle",label:"Урон",tooltip:i.stat.accountProp("damagePerBattle"),formatter:t=>i.number.toInteger(t)},{key:"frags_per_battle",label:"Уничт. / ур. >= 8",tooltip:i.stat.accountProp("fragPerBattle"),formatter:t=>i.number.toFloatNumber(t)},{key:"xp_per_battle",label:"Опыт",tooltip:i.stat.accountProp("xp"),formatter:t=>i.number.toInteger(t)},{key:"spotted_per_battle",label:"Обн.",tooltip:i.stat.accountProp("spotted"),formatter:t=>i.number.toFloatNumber(t)}];J(()=>{P()});async function P(){await Promise.all([U(),v.accountId?M():null]);const t=e.leaderboard.map(({id:o})=>o);t.length&&(await Promise.allSettled([S(t),w(t)]),e.items=e.leaderboard.map(o=>{var b,g,f,h;const u=(g=(b=e.clanAccounts)==null?void 0:b[o.id])==null?void 0:g.clan,m=(h=(f=e.accounts)==null?void 0:f[o.id])==null?void 0:h.statistics;return{...o,stat:m?Z.accountAll(m.all):null,clan:u??null}}))}async function w(t){e.loading++;try{const{data:o}=await B.account.getInfo({extra:"statistics.rating",account_id:t.join(",")});e.accounts=o??null}catch(o){e.accounts=null,k(o,{title:"Поучение списка аккаунтов"})}e.loading--}async function S(t){e.loading++;try{const{data:o}=await B.clan.getAccountInfo({extra:"clan",account_id:t.join(",")});e.clanAccounts=o??null}catch(o){e.clanAccounts=null,k(o,{title:"Ошибка поучения списка клановых аккаунтов"})}e.loading--}async function U(){e.loading++;try{const{data:t}=await V.leaderboards.getList(_);e.leaderboard=t}catch(t){e.leaderboard=[],k(t,{title:"Получение рейтинга игроков"})}e.loading--}async function M(){e.loading++;try{const{data:t}=await V.leaderboards.getList({..._,ids:[v.accountId]});e.userOnLeaderboard=t[0]}catch(t){e.userOnLeaderboard=null,k(t,{title:"Получение рейтинга пользователя"})}e.loading--}function x(){P()}return(t,o)=>{const u=R,m=T,b=z,g=D,f=E,h=W,j=q;return y(),C(j,{class:"leaderboards-page"},{default:r(()=>[p(f,{title:"Топ «Опытных» игроков",identity:"xp"},{default:r(()=>{var I;return[tt,c(e).userOnLeaderboard?(y(),N("div",at,[d(" Ваша позиция в рейтинге: "),s("b",null,n((I=c(e).userOnLeaderboard)==null?void 0:I.position),1),d(". ")])):K("",!0),s("div",et,[s("div",ot,[d(" За период: "),p(u,{modelValue:c(_).period,"onUpdate:modelValue":o[0]||(o[0]=a=>c(_).period=a),style:{width:"120px"},options:A,onChange:x},null,8,["modelValue"])]),s("div",lt,[d(" Боёв: "),p(u,{modelValue:c(_).battlesMin,"onUpdate:modelValue":o[1]||(o[1]=a=>c(_).battlesMin=a),style:{width:"120px"},options:F,onChange:x},null,8,["modelValue"])])]),p(g,{ref:"accountsTable","no-wrap":"","scroll-to-top":"","scroll-auto-disabling":"",headers:O,data:c(e).items,height:"calc(100vh - 112px)"},{position:r(({row:a})=>[s("span",{class:Q(["leaderboards-page__mark",["leaderboards-page__mark--"+a.position]])},n(a.position),3)]),nickname:r(({row:a})=>[p(m,{class:"leaderboards-page__nickname link",to:{name:"account-id",params:{id:a.id}}},{default:r(()=>[d(n(a.nickname),1)]),_:2},1032,["to"])]),clan:r(({row:a})=>[a.clan?(y(),C(m,{key:0,class:"leaderboards-page__clan link",to:{name:"clan-id",params:{id:a.clan.clan_id}}},{default:r(()=>[d(n(a.clan.tag),1)]),_:2},1032,["to"])):(y(),N(X,{key:1},[d(" --- ")],64))]),battles:r(({row:a})=>{var l;return[d(n(a.battles)+" ",1),s("div",nt,n(t.$formatter.number.toInteger((l=a.stat)==null?void 0:l.battles)||"---"),1)]}),win_rate:r(({row:a})=>{var l;return[p(b,{"model-value":a.win_rate,class:"leaderboards-page__win-rate"},null,8,["model-value"]),s("div",st,n(t.$formatter.number.toFloatPercent((l=a.stat)==null?void 0:l.winRate)||"---"),1)]}),damage_per_battle:r(({row:a})=>{var l;return[d(n(a.damage_per_battle)+" ",1),s("div",rt,n(t.$formatter.number.toInteger((l=a.stat)==null?void 0:l.damagePerBattle)||"---"),1)]}),frags_per_battle:r(({row:a})=>{var l,$;return[d(n(a.frags_per_battle)+" / "+n(a.frags8p_per_battle)+" ",1),s("div",it,n(t.$formatter.number.toFloatNumber((l=a.stat)==null?void 0:l.fragPerBattle)||"---")+" / "+n(t.$formatter.number.toFloatNumber(($=a.stat)==null?void 0:$.frag8pPerBattle)||"---"),1)]}),xp_per_battle:r(({row:a})=>{var l;return[d(n(a.xp_per_battle)+" ",1),s("div",dt,n(t.$formatter.number.toInteger((l=a.stat)==null?void 0:l.xpPerBattle)||"---"),1)]}),spotted_per_battle:r(({row:a})=>{var l;return[d(n(a.spotted_per_battle)+" ",1),s("div",ct,n(t.$formatter.number.toInteger((l=a.stat)==null?void 0:l.spottedPerBattle)||"---"),1)]}),_:1},8,["data"])]}),_:1}),p(h,{loading:c(e).loading>0},null,8,["loading"])]),_:1})}}});export{jt as default};
