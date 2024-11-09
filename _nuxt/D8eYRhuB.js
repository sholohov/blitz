import{d as j,r as G,a as gt,b as ft,M as vt,j as bt,k as T,c as N,H as F,p as L,l as wt,q as y,s as v,o as _,m as g,n as o,f as i,g as I,b2 as ht,h as r,w as l,F as P,D as q,I as yt,v as $,a7 as kt,a4 as W,t as w,_ as Ct,y as xt,G as k,u as At,e as Bt}from"./CjZrE5Wh.js";import{_ as St}from"./CI6zNOZI.js";import{_ as Vt}from"./CVTThTqB.js";import{_ as It}from"./DFsy_17x.js";import{_ as Pt}from"./DVWFMday.js";import{_ as qt}from"./Zt_43PKh.js";import{f as R}from"./C65nMr_n.js";import{_ as $t}from"./qdLsBVkU.js";import{_ as Rt}from"./UsgrnhQW.js";import"./DBvd0WFK.js";import"./DD4asW33.js";import"./eaCJGG-n.js";import"./BtCZQDp8.js";import"./Cb74_AAG.js";import"./BxBPJGBn.js";import"./gCGvA3p7.js";import"./08N2mJ2P.js";import"./BPrNtVlW.js";import"./f3e3m13b.js";import"./BBnSm2t4.js";import"./DlAUqK2U.js";import"./wGjzNOYn.js";import"./DSeEFkux.js";import"./BRok-xIX.js";import"./DMYS3RtA.js";import"./Qj2LaeAt.js";const Ut={class:"widget-account-stat-constructor"},Mt={class:"widget-account-stat-constructor__inner"},Ot={class:"widget-account-stat-constructor__description"},Dt={class:"content-area"},Gt={key:0,style:{color:"var(--color-red)"}},Tt={class:"widget-account-stat-constructor__params"},Nt={class:"widget-account-stat-constructor__param"},Ft={class:"widget-account-stat-constructor__param-options"},Lt=["onClick"],Wt={key:0,class:"widget-account-stat-constructor__attributes-control"},jt={class:"widget-account-stat-constructor__param"},Ht={class:"widget-account-stat-constructor__param-options"},zt={class:"widget-account-stat-constructor__param"},Et={class:"widget-account-stat-constructor__param-options"},Qt={class:"widget-account-stat-constructor__param"},Jt={class:"widget-account-stat-constructor__param-options"},Kt={class:"widget-account-stat-constructor__checkbox-group"},Xt={class:"widget-account-stat-constructor__param"},Yt={class:"widget-account-stat-constructor__param-options"},Zt={class:"widget-account-stat-constructor__checkbox-group"},te={class:"widget-account-stat-constructor__param"},ee={class:"widget-account-stat-constructor__param-options"},oe={style:{margin:"0 0 0 10px"}},se={key:0,class:"widget-account-stat-constructor__panel"},ne={class:"content-area"},ae={style:{"white-space":"nowrap"}},ie={style:{display:"flex","justify-content":"flex-end"}},ce=j({__name:"WidgetAccountSessionConstructor",setup(H){const h=G(null),C=gt(),x=ft(),A=vt(),m=bt(),s=T({loading:0,account:null,achievementsInfo:null,accountAchievements:null,tanksAchievements:null,tanks:null,sessionUpdateAt:null}),z=[{value:null,label:"Обычный"},{value:"rating",label:"Рейтинговый"}],E=N(()=>[{value:"default",label:"По умолчанию"},{value:"teamGamePoints",label:"Командная игра",disabled:n.battleMode==="rating"}]),Q=["white","black"],J=["white","black","grey","green","orange","red","purple","blue"],U=N(()=>{const e=["battles","winRate","damagePerBattle","fragPerBattle","surviveRate","hitRate","spottedPerBattle","xpPerBattle","markOfMastery","medalBrothersInArms","medalCrucialContribution","teamGamePoints"],t=["battles","winRate","damagePerBattle","fragPerBattle","surviveRate","hitRate","spottedPerBattle","xpPerBattle"];return n.battleMode==="rating"?t:e}),B=R.makeAccountSessionWidgetFilters({battleMode:null,attributes:["battles","winRate","damagePerBattle"],style:"tile",textColor:"white",bgColor:"black",bgColorOpacity:.5}),n=T(F(B)),u=G(U.value.map(e=>({key:e,isVisible:!1,label:L.stat.accountProp(e)??e})));wt(async()=>{Object.assign(n,R.makeAccountSessionWidgetFilters({...F(B),...C.query})),p(),await st(),S()});function M(){n.config==="default"&&(n.attributes=B.attributes),n.config==="teamGamePoints"&&(n.attributes=["battles","winRate","damagePerBattle","medalBrothersInArms","medalCrucialContribution","teamGamePoints"])}function S(){u.value=U.value.map(e=>{var d,f;const t=(d=s.achievementsInfo)==null?void 0:d[e],c=((f=n.attributes)==null?void 0:f.includes(e))??!1;return t?{key:e,isVisible:c,label:String(t.name).replace(/\([^)]+\)/gi,"")??e}:{key:e,isVisible:c,label:L.stat.accountProp(e)??e}}),V()}function p(){x.replace({query:R.toRouteQuery(n)}).catch(()=>null)}function K(e){n.textColor=e,p()}function X(e){n.bgColor=e,p()}function V(){u.value.sort((e,t)=>!e.isVisible&&t.isVisible?1:e.isVisible&&!t.isVisible?-1:0)}function Y(e){const t=u.value.findIndex(c=>c.key===e.key);t!==-1&&(u.value[t].isVisible=!e.isVisible,n.attributes=u.value.filter(c=>c.isVisible).map(c=>c.key),n.config=null,V(),p())}function Z(e,t){const c=u.value.findIndex(f=>f.key===e.key);if(c===-1)return;const d=u.value.splice(c,1);u.value.splice(c-1,0,...d),V(),p()}function tt(){M(),S(),p()}function et(){n.battleMode==="rating"&&(n.config="default",M()),S(),p()}function ot(){p()}async function st(){s.loading++;try{const{data:e}=await y.encyclopedia.getAchievements();s.achievementsInfo=e??null}catch(e){v(e,{title:"Получение описания достижений"})}s.loading--}async function nt(e){s.loading++;try{const{data:t}=await y.account.getInfo({account_id:e,extra:"statistics.rating"});s.account=(t==null?void 0:t[e])??null}catch(t){v(t,{title:"Получение данных игрока"})}s.loading--}async function at(e){s.loading++;try{const{data:t}=await y.account.getAchievements({account_id:e});s.accountAchievements=(t==null?void 0:t[e])??null}catch(t){v(t,{title:"Получение достижений игрока"})}s.loading--}async function it(e){s.loading++;try{const{data:t}=await y.tanks.getAchievements({account_id:e});s.tanksAchievements=(t==null?void 0:t[e])??null}catch(t){v(t,{title:"Получение достижений техники игрока"})}s.loading--}async function ct(e){s.loading++;try{const{data:t}=await y.tanks.getStats({account_id:e});s.tanks=t?t[e]:null}catch(t){v(t,{title:"Получение статистики по технике игрока"})}s.loading--}async function O(){const e=m.accountId;if(e&&(await Promise.all([nt(e),at(e),it(e),ct(e)]),!(!s.account||!s.accountAchievements||!s.tanks||!s.tanksAchievements))){try{await Promise.all([k.session.account.set(e,s.account),k.session.accountAchievements.set(e,s.accountAchievements),k.session.tanks.set(e,s.tanks),k.session.tanksAchievements.set(e,s.tanksAchievements)]),A.add({type:"success",message:"Новая сессия успешно запущена"})}catch(t){v(t,{title:"Начало новой сессии"})}s.account=null,s.accountAchievements=null,s.tanks=null,s.tanksAchievements=null}}async function rt(){var e;await((e=h.value)==null?void 0:e.doClose()),await O()}async function lt(e){try{const{data:t}=await k.session.account.getList({ids:[e]});return t[0]??null}catch(t){return v(t,{title:"Получение сессии игрока"}),null}}async function ut(){var c;const e=m.accountId;if(!e)return;const t=await lt(e);t?(s.sessionUpdateAt=t.updateAt,await((c=h.value)==null?void 0:c.doOpen())):await O()}return(e,t)=>{const c=Ct,d=xt,f=St,D=Vt,dt=It,_t=Pt,mt=qt;return _(),g("div",Ut,[o("div",Mt,[o("div",Ot,[o("div",Dt,[i(m).accountId?I("",!0):(_(),g("p",Gt," Создать виджет могут только авторизованные пользователи. ")),t[4]||(t[4]=o("p",null," Виджет для слежения за изменениями статистики вашего аккаунта. Используется в инструментах для стрима наподобие OBS Studio. Обновление статистики происходит 1 раз в 30 секунд. Сессия независима от аналогичной на странице аккаунта, по этому можно поделиться ссылкой. Выберите количество атрибутов и измените ширину окна браузера и плитки автоматически перестроятся на следующую линию. ",-1))]),t[5]||(t[5]=ht('<div class="content-area"><h4>&quot;Командная игра&quot;</h4><p><i>Конфигурация =&gt; Командная игра</i></p><p> В игре участвует 2 и более взвода. Всем Участникам следует запустить сессию в одно время. Играется серия из определённого кол-ва боёв. После окончания сессии очки взвода суммируются. Победил взвод набравший больше очков. Счёт отображает атрибут - &quot;Командная игра&quot; </p><blockquote>Важно! Сессия не должна прерываться боями в &quot;Обычном режиме&quot;.</blockquote><table><tbody style="width:360px;"><tr style="text-align:left;"><th>Действие</th><th>Очки</th></tr><tr><td>Единица урона</td><td>+1</td></tr><tr><td>Победа</td><td>+500</td></tr><tr><td>Медаль &quot;Братья по оружию&quot;</td><td>+750</td></tr><tr><td>Медаль &quot;Решающий вклад&quot;</td><td>+1750</td></tr></tbody></table></div>',1))]),o("div",Tt,[o("div",Nt,[t[6]||(t[6]=o("div",{class:"widget-account-stat-constructor__param-title"}," Атрибуты ",-1)),o("div",Ft,[r(kt,{tag:"div",class:"widget-account-stat-constructor__attributes",name:"widget-account-stat-constructor__attributes-"},{default:l(()=>[(_(!0),g(P,null,q(i(u),(a,b)=>(_(),g("div",{key:a.key,class:yt(["widget-account-stat-constructor__attributes-item",[a.isVisible?"widget-account-stat-constructor__attributes-item--is-visible":""]])},[o("button",{class:"widget-account-stat-constructor__attributes-label",onClick:pt=>Y(a)},$(a.label),9,Lt),a.isVisible?(_(),g("span",Wt,[r(d,{"is-text":"","is-square":"",disabled:b===0,class:"widget-account-stat-constructor__attributes-btn",onClick:pt=>Z(a,!0)},{default:l(()=>[r(c,{name:"swipe-up"})]),_:2},1032,["disabled","onClick"])])):I("",!0)],2))),128))]),_:1})])]),o("div",jt,[t[7]||(t[7]=o("div",{class:"widget-account-stat-constructor__param-title"}," Конфигурация ",-1)),o("div",Ht,[r(f,{modelValue:i(n).config,"onUpdate:modelValue":t[0]||(t[0]=a=>i(n).config=a),width:"200px",options:i(E),onChange:tt},null,8,["modelValue","options"])])]),o("div",zt,[t[8]||(t[8]=o("div",{class:"widget-account-stat-constructor__param-title"}," Режим боя ",-1)),o("div",Et,[r(f,{modelValue:i(n).battleMode,"onUpdate:modelValue":t[1]||(t[1]=a=>i(n).battleMode=a),width:"200px",options:z,onChange:et},null,8,["modelValue"])])]),o("div",Qt,[t[9]||(t[9]=o("div",{class:"widget-account-stat-constructor__param-title"}," Цвет текста ",-1)),o("div",Jt,[o("div",Kt,[(_(),g(P,null,q(Q,a=>r(D,{key:a,"model-value":i(n).textColor===a,class:"widget-account-stat-constructor__checkbox",onChange:b=>K(a)},{default:l(()=>[o("span",{style:W({color:`var(--color-${a})`}),class:"widget-account-stat-constructor__color-pick"},null,4)]),_:2},1032,["model-value","onChange"])),64))])])]),o("div",Xt,[t[10]||(t[10]=o("div",{class:"widget-account-stat-constructor__param-title"}," Цвет фона ",-1)),o("div",Yt,[o("div",Zt,[(_(),g(P,null,q(J,a=>r(D,{key:a,"model-value":i(n).bgColor===a,class:"widget-account-stat-constructor__checkbox",title:i(n).textColor,onChange:b=>X(a)},{default:l(()=>[o("span",{style:W({color:`var(--color-${a})`}),class:"widget-account-stat-constructor__color-pick"},null,4)]),_:2},1032,["model-value","title","onChange"])),64))])])]),o("div",te,[t[11]||(t[11]=o("div",{class:"widget-account-stat-constructor__param-title"}," Прозрачность фона ",-1)),o("div",ee,[r(dt,{modelValue:i(n).bgColorOpacity,"onUpdate:modelValue":t[2]||(t[2]=a=>i(n).bgColorOpacity=a),width:"200px",min:0,max:1,step:.1,onInput:ot},null,8,["modelValue"]),o("span",oe,$((i(n).bgColorOpacity||0)*100)+"% ",1)])])]),i(m).accountId?(_(),g("div",se,[r(d,{disabled:!i(m).accountId,class:"widget-account-stat-constructor__btn",onClick:ut},{default:l(()=>t[12]||(t[12]=[w(" Начать сессию ")])),_:1},8,["disabled"]),r(_t,{class:"widget-account-stat-constructor__btn link",to:{name:"widgets-account-session",query:{...i(C).query,accountId:String(i(m).accountId)}},target:"_blank"},{default:l(()=>t[13]||(t[13]=[w(" Перейти к виджету ")])),_:1},8,["to"])])):I("",!0)]),r(mt,{ref_key:"confirmDialogRef",ref:h,width:"400px",title:"Запуск новой сессии"},{footer:l(()=>[o("div",ie,[r(d,{style:{margin:"0 4px 0 0"},onClick:t[3]||(t[3]=a=>{var b;return(b=i(h))==null?void 0:b.doClose()})},{default:l(()=>t[17]||(t[17]=[w(" Отмена ")])),_:1}),r(d,{class:"widget-account-stat-constructor__btn",onClick:rt},{default:l(()=>t[18]||(t[18]=[w(" Так точно! ")])),_:1})])]),default:l(()=>[o("div",ne,[o("p",null,[t[14]||(t[14]=w(" Текущая сессия от ")),o("span",ae,$(e.$formatter.date.toDateTime(i(s).sessionUpdateAt??0)),1),t[15]||(t[15]=w(". "))]),t[16]||(t[16]=o("p",null,"Начать новую?",-1))])]),_:1},512)])}}}),Ue=j({__name:"index",setup(H){return At({title:"Виджеты"}),(h,C)=>{const x=ce,A=$t,m=Rt;return _(),Bt(m,{class:"main-widgets"},{default:l(()=>[r(A,{title:"Статистика аккаунта",identity:"account-stat"},{default:l(()=>[r(x)]),_:1})]),_:1})}}});export{Ue as default};