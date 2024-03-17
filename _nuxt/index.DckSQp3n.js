import{u as ft,h as C,_ as ht}from"./disableScroll.DWKNMT60.js";import{_ as vt}from"./UiButton.vue.Bm7hv4rP.js";import{_ as bt,a as wt}from"./UiSelect.vue.D77OGgu9.js";import{f as G,v as E,x as yt,r as D,i as F,o as p,c as h,a as o,N as kt,U as Ct,K as P,k as i,g as xt,h as At,n as H,s as Q,q as Vt,m as M,b as l,w as d,F as U,A as O,C as St,t as N,T as Bt,d as S,V as $t,u as It,j as Pt}from"./entry.DPNISXbu.js";import{_ as qt}from"./nuxt-link.04FmkAu-.js";import{_ as Rt}from"./UiDialog.vue.B32ke6mJ.js";import{c as X}from"./cloneDeep.C12b-jZV.js";import{u as Mt}from"./user.DwTc9bEk.js";import{f as T}from"./index.D8XH-Ub0.js";import{a as $}from"./request.hZoxRoxp.js";import{a as I}from"./index.2Ql63jum.js";import{_ as Ut}from"./PageSection.vue.o2yYh9Qa.js";import{_ as Ot}from"./PageContent.vue.Bh0SlX8X.js";import"./index.B5Lqs8x3.js";import"./isArrayLike.f7gYYEEg.js";import"./MainSearch.vue.dHnhol0L.js";import"./UiInput.vue.Dkf3VeE-.js";import"./notEmpty.BxBPJGBn.js";import"./debounce.CF1BWiom.js";import"./index.CzeyoFAQ.js";import"./ContentBox.vue.BsWmWxMD.js";import"./leader.C0XodCYA.js";import"./nuxt-icon.DBuS59iJ.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./client-only.Dyiq2at0.js";import"./dark-mode.Cu1pTH_9.js";import"./light-mode.D7zr0h2m.js";const Nt={class:"ui-input-range__inner"},Tt={class:"ui-input-range__input"},Dt=["max","min","step"],Ft=G({__name:"UiInputRange",props:E({min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1},width:{type:String,default:void 0}},{modelValue:{required:!0,default:0},modelModifiers:{}}),emits:E(["keyup","keydown","input","change"],["update:modelValue"]),setup(v,{expose:w,emit:B}){const x=v,y=yt(v,"modelValue"),u=D(),n=F(()=>{const m=(x.max-x.min)/100;return Math.round(y.value/m)}),A=B;return w({focus:()=>{var m;(m=u.value)==null||m.focus()},blur:()=>{var m;(m=u.value)==null||m.blur()}}),(m,r)=>(p(),h("div",{class:"ui-input-range",style:P({width:v.width})},[o("div",Nt,[o("div",Tt,[kt(o("input",{ref_key:"inputRef",ref:u,"onUpdate:modelValue":r[0]||(r[0]=_=>y.value=_),max:v.max,min:v.min,step:v.step,type:"range",class:"ui-input-range__input-element",onInput:r[1]||(r[1]=_=>A("input",_)),onChange:r[2]||(r[2]=_=>A("change",_)),onKeyup:r[3]||(r[3]=_=>A("keyup")),onKeydown:r[4]||(r[4]=_=>A("keydown"))},null,40,Dt),[[Ct,y.value,void 0,{number:!0}]]),o("span",{class:"ui-input-range__input-thumb",style:P({transform:`translateX(${i(n)-100}%)`})},null,4)])])],4))}}),Gt={class:"widget-account-stat-constructor"},Lt={class:"widget-account-stat-constructor__inner"},Wt={class:"widget-account-stat-constructor__description"},jt={class:"content-area"},Kt={key:0,style:{color:"var(--color-red)"}},zt=o("p",null," Виджет для слежения за изменениями статистики вашего аккаунта. Используется в инструментах для стрима наподобие OBS Studio. Обновление статистики происходит 1 раз в 30 секунд. Сессия независима от аналогичной на странице аккаунта, по этому можно поделиться ссылкой. Выберите количество атрибутов и измените ширину окна браузера и плитки автоматически перестроятся на следующую линию. ",-1),Et=$t('<div class="content-area"><h4>&quot;Командная игра&quot;</h4><p><i>Конфигурация =&gt; Командная игра</i></p><p> В игре участвует 2 и более взвода. Всем Участникам следует запустить сессию в одно время. Играется серия из определённого кол-ва боёв. После окончания сессии очки взвода суммируются. Победил взвод набравший больше очков. Счёт отображает атрибут - &quot;Командная игра&quot; </p><blockquote>Важно! Сессия не должна прерываться боями в &quot;Обычном режиме&quot;.</blockquote><table><tbody style="width:360px;"><tr style="text-align:left;"><th>Действие</th><th>Очки</th></tr><tr><td>Единица урона</td><td>+1</td></tr><tr><td>Победа</td><td>+500</td></tr><tr><td>Медаль &quot;Братья по оружию&quot;</td><td>+750</td></tr><tr><td>Медаль &quot;Решающий вклад&quot;</td><td>+1750</td></tr></tbody></table></div>',1),Ht={class:"widget-account-stat-constructor__params"},Qt={class:"widget-account-stat-constructor__param"},Xt=o("div",{class:"widget-account-stat-constructor__param-title"}," Атрибуты ",-1),Jt={class:"widget-account-stat-constructor__param-options"},Yt=["onClick"],Zt={key:0,class:"widget-account-stat-constructor__attributes-control"},te={class:"widget-account-stat-constructor__param"},ee=o("div",{class:"widget-account-stat-constructor__param-title"}," Конфигурация ",-1),oe={class:"widget-account-stat-constructor__param-options"},ne={class:"widget-account-stat-constructor__param"},se=o("div",{class:"widget-account-stat-constructor__param-title"}," Режим боя ",-1),ae={class:"widget-account-stat-constructor__param-options"},ie={class:"widget-account-stat-constructor__param"},ce=o("div",{class:"widget-account-stat-constructor__param-title"}," Цвет текста ",-1),le={class:"widget-account-stat-constructor__param-options"},re={class:"widget-account-stat-constructor__checkbox-group"},ue={class:"widget-account-stat-constructor__param"},de=o("div",{class:"widget-account-stat-constructor__param-title"}," Цвет фона ",-1),_e={class:"widget-account-stat-constructor__param-options"},me={class:"widget-account-stat-constructor__checkbox-group"},pe={class:"widget-account-stat-constructor__param"},ge=o("div",{class:"widget-account-stat-constructor__param-title"}," Прозрачность фона ",-1),fe={class:"widget-account-stat-constructor__param-options"},he={style:{margin:"0 0 0 10px"}},ve={key:0,class:"widget-account-stat-constructor__panel"},be={class:"content-area"},we={style:{"white-space":"nowrap"}},ye=o("p",null,"Начать новую?",-1),ke={style:{display:"flex","justify-content":"flex-end"}},Ce=G({__name:"WidgetAccountSessionConstructor",setup(v){const w=D(null),B=xt(),x=At(),y=ft(),u=Mt(),n=H({loading:0,account:null,achievementsInfo:null,accountAchievements:null,tanksAchievements:null,tanks:null,sessionUpdateAt:null}),A=[{value:null,label:"Обычный"},{value:"rating",label:"Рейтинговый"}],L=F(()=>[{value:"default",label:"По умолчанию"},{value:"teamGamePoints",label:"Командная игра",disabled:s.battleMode==="rating"}]),W=["white","black"],m=["white","black","grey","green","orange","red","purple","blue"],r=F(()=>{const t=["battles","winRate","damagePerBattle","fragPerBattle","surviveRate","hitRate","spottedPerBattle","xpPerBattle","markOfMastery","medalBrothersInArms","medalCrucialContribution","teamGamePoints"],e=["battles","winRate","damagePerBattle","fragPerBattle","surviveRate","hitRate","spottedPerBattle","xpPerBattle"];return s.battleMode==="rating"?e:t}),_=T.makeAccountSessionWidgetFilters({battleMode:null,attributes:["battles","winRate","damagePerBattle"],style:"tile",textColor:"white",bgColor:"black",bgColorOpacity:.5}),s=H(X(_)),g=D(r.value.map(t=>({key:t,isVisible:!1,label:Q.stat.accountProp(t)??t})));Vt(async()=>{Object.assign(s,T.makeAccountSessionWidgetFilters({...X(_),...B.query})),b(),await st(),q()});function j(){s.config==="default"&&(s.attributes=_.attributes),s.config==="teamGamePoints"&&(s.attributes=["battles","winRate","damagePerBattle","medalBrothersInArms","medalCrucialContribution","teamGamePoints"])}function q(){g.value=r.value.map(t=>{var f,k;const e=(f=n.achievementsInfo)==null?void 0:f[t],c=((k=s.attributes)==null?void 0:k.includes(t))??!1;return e?{key:t,isVisible:c,label:String(e.name).replace(/\([^)]+\)/gi,"")??t}:{key:t,isVisible:c,label:Q.stat.accountProp(t)??t}}),R()}function b(){x.replace({query:T.toRouteQuery(s)}).catch(()=>null)}function J(t){s.textColor=t,b()}function Y(t){s.bgColor=t,b()}function R(){g.value.sort((t,e)=>!t.isVisible&&e.isVisible?1:t.isVisible&&!e.isVisible?-1:0)}function Z(t){const e=g.value.findIndex(c=>c.key===t.key);e!==-1&&(g.value[e].isVisible=!t.isVisible,s.attributes=g.value.filter(c=>c.isVisible).map(c=>c.key),s.config=null,R(),b())}function tt(t,e){const c=g.value.findIndex(k=>k.key===t.key);if(c===-1)return;const f=g.value.splice(c,1);g.value.splice(e?c-1:c+1,0,...f),R(),b()}function et(){j(),q(),b()}function ot(){s.battleMode==="rating"&&(s.config="default",j()),q(),b()}function nt(){b()}async function st(){n.loading++;try{const{data:t}=await $.encyclopedia.getAchievements();n.achievementsInfo=t??null}catch(t){C(t,{title:"Получение описания достижений"})}n.loading--}async function at(t){n.loading++;try{const{data:e}=await $.account.getInfo({account_id:t,extra:"statistics.rating"});n.account=(e==null?void 0:e[t])??null}catch(e){C(e,{title:"Получение данных игрока"})}n.loading--}async function it(t){n.loading++;try{const{data:e}=await $.account.getAchievements({account_id:t});n.accountAchievements=(e==null?void 0:e[t])??null}catch(e){C(e,{title:"Получение достижений игрока"})}n.loading--}async function ct(t){n.loading++;try{const{data:e}=await $.tanks.getAchievements({account_id:t});n.tanksAchievements=(e==null?void 0:e[t])??null}catch(e){C(e,{title:"Получение достижений техники игрока"})}n.loading--}async function lt(t){n.loading++;try{const{data:e}=await $.tanks.getStats({account_id:t});n.tanks=e?e[t]:null}catch(e){C(e,{title:"Получение статистики по технике игрока"})}n.loading--}async function K(){const t=u.accountId;if(t&&(await Promise.all([at(t),it(t),ct(t),lt(t)]),!(!n.account||!n.accountAchievements||!n.tanks||!n.tanksAchievements))){try{await Promise.all([I.session.account.set(t,n.account),I.session.accountAchievements.set(t,n.accountAchievements),I.session.tanks.set(t,n.tanks),I.session.tanksAchievements.set(t,n.tanksAchievements)]),y.add({type:"success",message:"Новая сессия успешно запущена"})}catch(e){C(e,{title:"Начало новой сессии"})}n.account=null,n.accountAchievements=null,n.tanks=null,n.tanksAchievements=null}}async function rt(){var t;await((t=w.value)==null?void 0:t.doClose()),await K()}async function ut(t){try{const{data:e}=await I.session.account.getList({ids:[t]});return e[0]??null}catch(e){return C(e,{title:"Получение сессии игрока"}),null}}async function dt(){var c;const t=u.accountId;if(!t)return;const e=await ut(t);e?(n.sessionUpdateAt=e.updateAt,await((c=w.value)==null?void 0:c.doOpen())):await K()}return(t,e)=>{const c=ht,f=vt,k=bt,z=wt,_t=Ft,mt=qt,pt=Rt;return p(),h("div",Gt,[o("div",Lt,[o("div",Wt,[o("div",jt,[i(u).accountId?M("",!0):(p(),h("p",Kt," Создать виджет могут только авторизованные пользователи. ")),zt]),Et]),o("div",Ht,[o("div",Qt,[Xt,o("div",Jt,[l(Bt,{tag:"div",class:"widget-account-stat-constructor__attributes",name:"widget-account-stat-constructor__attributes-"},{default:d(()=>[(p(!0),h(U,null,O(i(g),(a,V)=>(p(),h("div",{key:a.key,class:St(["widget-account-stat-constructor__attributes-item",[a.isVisible?"widget-account-stat-constructor__attributes-item--is-visible":""]])},[o("button",{class:"widget-account-stat-constructor__attributes-label",onClick:gt=>Z(a)},N(a.label),9,Yt),a.isVisible?(p(),h("span",Zt,[l(f,{"is-text":"","is-square":"",disabled:V===0,class:"widget-account-stat-constructor__attributes-btn",onClick:gt=>tt(a,!0)},{default:d(()=>[l(c,{name:"swipe-up"})]),_:2},1032,["disabled","onClick"])])):M("",!0)],2))),128))]),_:1})])]),o("div",te,[ee,o("div",oe,[l(k,{modelValue:i(s).config,"onUpdate:modelValue":e[0]||(e[0]=a=>i(s).config=a),width:"200px",options:i(L),onChange:et},null,8,["modelValue","options"])])]),o("div",ne,[se,o("div",ae,[l(k,{modelValue:i(s).battleMode,"onUpdate:modelValue":e[1]||(e[1]=a=>i(s).battleMode=a),width:"200px",options:A,onChange:ot},null,8,["modelValue"])])]),o("div",ie,[ce,o("div",le,[o("div",re,[(p(),h(U,null,O(W,a=>l(z,{key:a,"model-value":i(s).textColor===a,class:"widget-account-stat-constructor__checkbox",onChange:V=>J(a)},{default:d(()=>[o("span",{style:P({color:`var(--color-${a})`}),class:"widget-account-stat-constructor__color-pick"},null,4)]),_:2},1032,["model-value","onChange"])),64))])])]),o("div",ue,[de,o("div",_e,[o("div",me,[(p(),h(U,null,O(m,a=>l(z,{key:a,"model-value":i(s).bgColor===a,class:"widget-account-stat-constructor__checkbox",title:i(s).textColor,onChange:V=>Y(a)},{default:d(()=>[o("span",{style:P({color:`var(--color-${a})`}),class:"widget-account-stat-constructor__color-pick"},null,4)]),_:2},1032,["model-value","title","onChange"])),64))])])]),o("div",pe,[ge,o("div",fe,[l(_t,{modelValue:i(s).bgColorOpacity,"onUpdate:modelValue":e[2]||(e[2]=a=>i(s).bgColorOpacity=a),width:"200px",min:0,max:1,step:.1,onInput:nt},null,8,["modelValue"]),o("span",he,N((i(s).bgColorOpacity||0)*100)+"% ",1)])])]),i(u).accountId?(p(),h("div",ve,[l(f,{disabled:!i(u).accountId,class:"widget-account-stat-constructor__btn",onClick:dt},{default:d(()=>[S(" Начать сессию ")]),_:1},8,["disabled"]),l(mt,{class:"widget-account-stat-constructor__btn link",to:{name:"widgets-account-session",query:{...i(B).query,accountId:String(i(u).accountId)}},target:"_blank"},{default:d(()=>[S(" Перейти к виджету ")]),_:1},8,["to"])])):M("",!0)]),l(pt,{ref_key:"confirmDialogRef",ref:w,width:"400px",title:"Запуск новой сессии"},{footer:d(()=>[o("div",ke,[l(f,{style:{margin:"0 4px 0 0"},onClick:e[3]||(e[3]=a=>{var V;return(V=i(w))==null?void 0:V.doClose()})},{default:d(()=>[S(" Отмена ")]),_:1}),l(f,{class:"widget-account-stat-constructor__btn",onClick:rt},{default:d(()=>[S(" Так точно! ")]),_:1})])]),default:d(()=>[o("div",be,[o("p",null,[S(" Текущая сессия от "),o("span",we,N(t.$formatter.date.toDateTime(i(n).sessionUpdateAt??0)),1),S(". ")]),ye])]),_:1},512)])}}}),Je=G({__name:"index",setup(v){return It({title:"Виджеты"}),(w,B)=>{const x=Ce,y=Ut,u=Ot;return p(),Pt(u,{class:"main-widgets"},{default:d(()=>[l(y,{title:"Статистика аккаунта",identity:"account-stat"},{default:d(()=>[l(x)]),_:1})]),_:1})}}});export{Je as default};
