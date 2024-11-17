import{d as pt,r as T,u as gt,a as ft,L as vt,h as bt,j as D,c as L,G as N,s as F,k as wt,l as y,m as f,o as _,n as p,p as o,e as i,f as P,b2 as ht,g as r,w as l,F as I,B as q,H as yt,t as $,_ as kt,x as Ct,a7 as xt,a4 as W,q as w,E as k,b as At}from"./CbpaTVLF.js";import{_ as Bt}from"./D0bbJ2Al.js";import{_ as St}from"./DSyc53rl.js";import{_ as Vt}from"./CTBGZ9ZJ.js";import{_ as Pt}from"./BWArym7p.js";import{_ as It}from"./gcaCL54F.js";import{f as R}from"./catDNVfW.js";import{_ as qt}from"./DqZ5VINZ.js";import{_ as $t}from"./CTdUBdYB.js";import{_ as Rt}from"./DlAUqK2U.js";import"./CeC760OF.js";import"./DD4asW33.js";import"./BfR1J8Wj.js";import"./CGYFkopd.js";import"./BufGgsVL.js";import"./BxBPJGBn.js";import"./SI484xt3.js";import"./CK40c25S.js";import"./D-_bMSkg.js";import"./C_bjtiOT.js";import"./SB0MPsD8.js";import"./Wb6dze4w.js";import"./Cl8s4ibS.js";import"./BX5NZO3T.js";import"./BnCvvBO_.js";import"./CURRwDO9.js";const Ut={class:"widget-account-stat-constructor"},Mt={class:"widget-account-stat-constructor__inner"},Ot={class:"widget-account-stat-constructor__description"},Gt={class:"content-area"},Tt={key:0,style:{color:"var(--color-red)"}},Dt={class:"widget-account-stat-constructor__params"},Lt={class:"widget-account-stat-constructor__param"},Nt={class:"widget-account-stat-constructor__param-options"},Ft=["onClick"],Wt={key:0,class:"widget-account-stat-constructor__attributes-control"},jt={class:"widget-account-stat-constructor__param"},Et={class:"widget-account-stat-constructor__param-options"},zt={class:"widget-account-stat-constructor__param"},Ht={class:"widget-account-stat-constructor__param-options"},Qt={class:"widget-account-stat-constructor__param"},Jt={class:"widget-account-stat-constructor__param-options"},Kt={class:"widget-account-stat-constructor__checkbox-group"},Xt={class:"widget-account-stat-constructor__param"},Yt={class:"widget-account-stat-constructor__param-options"},Zt={class:"widget-account-stat-constructor__checkbox-group"},te={class:"widget-account-stat-constructor__param"},ee={class:"widget-account-stat-constructor__param-options"},oe={style:{margin:"0 0 0 10px"}},ne={key:0,class:"widget-account-stat-constructor__panel"},se={class:"content-area"},ae={style:{"white-space":"nowrap"}},ie={style:{display:"flex","justify-content":"flex-end"}},ce=pt({__name:"WidgetAccountSessionConstructor",setup(j){const h=T(null),C=gt(),x=ft(),A=vt(),v=bt(),n=D({loading:0,account:null,achievementsInfo:null,accountAchievements:null,tanksAchievements:null,tanks:null,sessionUpdateAt:null}),E=[{value:null,label:"Обычный"},{value:"rating",label:"Рейтинговый"}],z=L(()=>[{value:"default",label:"По умолчанию"},{value:"teamGamePoints",label:"Командная игра",disabled:s.battleMode==="rating"}]),H=["white","black"],Q=["white","black","grey","green","orange","red","purple","blue"],U=L(()=>{const e=["battles","winRate","damagePerBattle","fragPerBattle","surviveRate","hitRate","spottedPerBattle","xpPerBattle","markOfMastery","medalBrothersInArms","medalCrucialContribution","teamGamePoints"],t=["battles","winRate","damagePerBattle","fragPerBattle","surviveRate","hitRate","spottedPerBattle","xpPerBattle"];return s.battleMode==="rating"?t:e}),B=R.makeAccountSessionWidgetFilters({battleMode:null,attributes:["battles","winRate","damagePerBattle"],style:"tile",textColor:"white",bgColor:"black",bgColorOpacity:.5}),s=D(N(B)),u=T(U.value.map(e=>({key:e,isVisible:!1,label:F.stat.accountProp(e)??e})));wt(async()=>{Object.assign(s,R.makeAccountSessionWidgetFilters({...N(B),...C.query})),m(),await ot(),S()});function M(){s.config==="default"&&(s.attributes=B.attributes),s.config==="teamGamePoints"&&(s.attributes=["battles","winRate","damagePerBattle","medalBrothersInArms","medalCrucialContribution","teamGamePoints"])}function S(){u.value=U.value.map(e=>{var d,g;const t=(d=n.achievementsInfo)==null?void 0:d[e],c=((g=s.attributes)==null?void 0:g.includes(e))??!1;return t?{key:e,isVisible:c,label:String(t.name).replace(/\([^)]+\)/gi,"")??e}:{key:e,isVisible:c,label:F.stat.accountProp(e)??e}}),V()}function m(){x.replace({query:R.toRouteQuery(s)}).catch(()=>null)}function J(e){s.textColor=e,m()}function K(e){s.bgColor=e,m()}function V(){u.value.sort((e,t)=>!e.isVisible&&t.isVisible?1:e.isVisible&&!t.isVisible?-1:0)}function X(e){const t=u.value.findIndex(c=>c.key===e.key);t!==-1&&(u.value[t].isVisible=!e.isVisible,s.attributes=u.value.filter(c=>c.isVisible).map(c=>c.key),s.config=null,V(),m())}function Y(e,t){const c=u.value.findIndex(g=>g.key===e.key);if(c===-1)return;const d=u.value.splice(c,1);u.value.splice(c-1,0,...d),V(),m()}function Z(){M(),S(),m()}function tt(){s.battleMode==="rating"&&(s.config="default",M()),S(),m()}function et(){m()}async function ot(){n.loading++;try{const{data:e}=await y.encyclopedia.getAchievements();n.achievementsInfo=e??null}catch(e){f(e,{title:"Получение описания достижений"})}n.loading--}async function nt(e){n.loading++;try{const{data:t}=await y.account.getInfo({account_id:e,extra:"statistics.rating"});n.account=(t==null?void 0:t[e])??null}catch(t){f(t,{title:"Получение данных игрока"})}n.loading--}async function st(e){n.loading++;try{const{data:t}=await y.account.getAchievements({account_id:e});n.accountAchievements=(t==null?void 0:t[e])??null}catch(t){f(t,{title:"Получение достижений игрока"})}n.loading--}async function at(e){n.loading++;try{const{data:t}=await y.tanks.getAchievements({account_id:e});n.tanksAchievements=(t==null?void 0:t[e])??null}catch(t){f(t,{title:"Получение достижений техники игрока"})}n.loading--}async function it(e){n.loading++;try{const{data:t}=await y.tanks.getStats({account_id:e});n.tanks=t?t[e]:null}catch(t){f(t,{title:"Получение статистики по технике игрока"})}n.loading--}async function O(){const e=v.accountId;if(e&&(await Promise.all([nt(e),st(e),at(e),it(e)]),!(!n.account||!n.accountAchievements||!n.tanks||!n.tanksAchievements))){try{await Promise.all([k.session.account.set(e,n.account),k.session.accountAchievements.set(e,n.accountAchievements),k.session.tanks.set(e,n.tanks),k.session.tanksAchievements.set(e,n.tanksAchievements)]),A.add({type:"success",message:"Новая сессия успешно запущена"})}catch(t){f(t,{title:"Начало новой сессии"})}n.account=null,n.accountAchievements=null,n.tanks=null,n.tanksAchievements=null}}async function ct(){var e;await((e=h.value)==null?void 0:e.doClose()),await O()}async function rt(e){try{const{data:t}=await k.session.account.getList({ids:[e]});return t[0]??null}catch(t){return f(t,{title:"Получение сессии игрока"}),null}}async function lt(){var c;const e=v.accountId;if(!e)return;const t=await rt(e);t?(n.sessionUpdateAt=t.updateAt,await((c=h.value)==null?void 0:c.doOpen())):await O()}return(e,t)=>{const c=Ct,d=kt,g=Bt,G=St,ut=Vt,dt=Pt,_t=It;return _(),p("div",Ut,[o("div",Mt,[o("div",Ot,[o("div",Gt,[i(v).accountId?P("",!0):(_(),p("p",Tt," Создать виджет могут только авторизованные пользователи. ")),t[4]||(t[4]=o("p",null," Виджет для слежения за изменениями статистики вашего аккаунта. Используется в инструментах для стрима наподобие OBS Studio. Обновление статистики происходит 1 раз в 30 секунд. Сессия независима от аналогичной на странице аккаунта, по этому можно поделиться ссылкой. Выберите количество атрибутов и измените ширину окна браузера и плитки автоматически перестроятся на следующую линию. ",-1))]),t[5]||(t[5]=ht('<div class="content-area"><h4>&quot;Командная игра&quot;</h4><p><i>Конфигурация =&gt; Командная игра</i></p><p> В игре участвует 2 и более взвода. Всем Участникам следует запустить сессию в одно время. Играется серия из определённого кол-ва боёв. После окончания сессии очки взвода суммируются. Победил взвод набравший больше очков. Счёт отображает атрибут - &quot;Командная игра&quot; </p><blockquote>Важно! Сессия не должна прерываться боями в &quot;Обычном режиме&quot;.</blockquote><table><tbody style="width:360px;"><tr style="text-align:left;"><th>Действие</th><th>Очки</th></tr><tr><td>Единица урона</td><td>+1</td></tr><tr><td>Победа</td><td>+500</td></tr><tr><td>Медаль &quot;Братья по оружию&quot;</td><td>+750</td></tr><tr><td>Медаль &quot;Решающий вклад&quot;</td><td>+1750</td></tr></tbody></table></div>',1))]),o("div",Dt,[o("div",Lt,[t[6]||(t[6]=o("div",{class:"widget-account-stat-constructor__param-title"}," Атрибуты ",-1)),o("div",Nt,[r(xt,{tag:"div",class:"widget-account-stat-constructor__attributes",name:"widget-account-stat-constructor__attributes-"},{default:l(()=>[(_(!0),p(I,null,q(i(u),(a,b)=>(_(),p("div",{key:a.key,class:yt(["widget-account-stat-constructor__attributes-item",[a.isVisible?"widget-account-stat-constructor__attributes-item--is-visible":""]])},[o("button",{class:"widget-account-stat-constructor__attributes-label",onClick:mt=>X(a)},$(a.label),9,Ft),a.isVisible?(_(),p("span",Wt,[r(d,{"is-text":"","is-square":"",disabled:b===0,class:"widget-account-stat-constructor__attributes-btn",onClick:mt=>Y(a,!0)},{default:l(()=>[r(c,{name:"swipe-up"})]),_:2},1032,["disabled","onClick"])])):P("",!0)],2))),128))]),_:1})])]),o("div",jt,[t[7]||(t[7]=o("div",{class:"widget-account-stat-constructor__param-title"}," Конфигурация ",-1)),o("div",Et,[r(g,{modelValue:i(s).config,"onUpdate:modelValue":t[0]||(t[0]=a=>i(s).config=a),width:"200px",options:i(z),onChange:Z},null,8,["modelValue","options"])])]),o("div",zt,[t[8]||(t[8]=o("div",{class:"widget-account-stat-constructor__param-title"}," Режим боя ",-1)),o("div",Ht,[r(g,{modelValue:i(s).battleMode,"onUpdate:modelValue":t[1]||(t[1]=a=>i(s).battleMode=a),width:"200px",options:E,onChange:tt},null,8,["modelValue"])])]),o("div",Qt,[t[9]||(t[9]=o("div",{class:"widget-account-stat-constructor__param-title"}," Цвет текста ",-1)),o("div",Jt,[o("div",Kt,[(_(),p(I,null,q(H,a=>r(G,{key:a,"model-value":i(s).textColor===a,class:"widget-account-stat-constructor__checkbox",onChange:b=>J(a)},{default:l(()=>[o("span",{style:W({color:`var(--color-${a})`}),class:"widget-account-stat-constructor__color-pick"},null,4)]),_:2},1032,["model-value","onChange"])),64))])])]),o("div",Xt,[t[10]||(t[10]=o("div",{class:"widget-account-stat-constructor__param-title"}," Цвет фона ",-1)),o("div",Yt,[o("div",Zt,[(_(),p(I,null,q(Q,a=>r(G,{key:a,"model-value":i(s).bgColor===a,class:"widget-account-stat-constructor__checkbox",title:i(s).textColor,onChange:b=>K(a)},{default:l(()=>[o("span",{style:W({color:`var(--color-${a})`}),class:"widget-account-stat-constructor__color-pick"},null,4)]),_:2},1032,["model-value","title","onChange"])),64))])])]),o("div",te,[t[11]||(t[11]=o("div",{class:"widget-account-stat-constructor__param-title"}," Прозрачность фона ",-1)),o("div",ee,[r(ut,{modelValue:i(s).bgColorOpacity,"onUpdate:modelValue":t[2]||(t[2]=a=>i(s).bgColorOpacity=a),width:"200px",min:0,max:1,step:.1,onInput:et},null,8,["modelValue"]),o("span",oe,$((i(s).bgColorOpacity||0)*100)+"% ",1)])])]),i(v).accountId?(_(),p("div",ne,[r(d,{disabled:!i(v).accountId,class:"widget-account-stat-constructor__btn",onClick:lt},{default:l(()=>t[12]||(t[12]=[w(" Начать сессию ")])),_:1},8,["disabled"]),r(dt,{class:"widget-account-stat-constructor__btn link",to:{name:"widgets-account-session",query:{...i(C).query,accountId:String(i(v).accountId)}},target:"_blank"},{default:l(()=>t[13]||(t[13]=[w(" Перейти к виджету ")])),_:1},8,["to"])])):P("",!0)]),r(_t,{ref_key:"confirmDialogRef",ref:h,width:"400px",title:"Запуск новой сессии"},{footer:l(()=>[o("div",ie,[r(d,{style:{margin:"0 4px 0 0"},onClick:t[3]||(t[3]=a=>{var b;return(b=i(h))==null?void 0:b.doClose()})},{default:l(()=>t[17]||(t[17]=[w(" Отмена ")])),_:1}),r(d,{class:"widget-account-stat-constructor__btn",onClick:ct},{default:l(()=>t[18]||(t[18]=[w(" Так точно! ")])),_:1})])]),default:l(()=>[o("div",se,[o("p",null,[t[14]||(t[14]=w(" Текущая сессия от ")),o("span",ae,$(e.$formatter.date.toDateTime(i(n).sessionUpdateAt??0)),1),t[15]||(t[15]=w(". "))]),t[16]||(t[16]=o("p",null,"Начать новую?",-1))])]),_:1},512)])}}}),re={};function le(j,h){const C=ce,x=qt,A=$t;return _(),At(A,{class:"main-widgets"},{default:l(()=>[r(x,{title:"Статистика аккаунта",identity:"account-stat"},{default:l(()=>[r(C)]),_:1})]),_:1})}const Oe=Rt(re,[["render",le]]);export{Oe as default};
