import{_ as Rt}from"./-Ugn9RHd.js";import{d as H,o as y,n as U,p as t,g as a,t as C,x as G,Q as Pt,c as K,v as ht,e as l,b as A,w as i,_ as Z,q as V,y as lt,F as E,B as ot,H as Y,D as dt,r as q,j as F,f as N,C as z,R as It,A as J,h as Mt,L as Ot,S as pt,k as Wt,E as kt,i as Dt,m as Et,G as ft,T as Ht}from"./CbpaTVLF.js";import{_ as jt}from"./DqZ5VINZ.js";import{_ as ct}from"./CzIwMopt.js";import{_ as rt,a as tt,b as yt}from"./fU9alnc8.js";import{_ as gt}from"./B5RtmFoY.js";import{_ as qt}from"./BeChpmDq.js";import{_ as Nt}from"./BYsS9vqb.js";import{u as mt}from"./CeC760OF.js";import{_ as Kt}from"./CTBGZ9ZJ.js";import{_ as bt}from"./CFtLwjiE.js";import{_ as zt}from"./BX5NZO3T.js";import{_ as At}from"./gcaCL54F.js";import{_ as Ft}from"./1fhjzkg-.js";import{_ as ut}from"./DSyc53rl.js";import{d as Gt}from"./CKeGCx3Z.js";import{s as D}from"./C04RlcEn.js";import{_ as Lt}from"./BWf4iw8B.js";import{u as Qt}from"./Wb6dze4w.js";import{_ as vt}from"./BuVKvM_6.js";import"./CWJ3BWWI.js";import"./SB0MPsD8.js";import"./DlAUqK2U.js";import"./DD4asW33.js";import"./BnCvvBO_.js";import"./CURRwDO9.js";import"./BufGgsVL.js";import"./Cl8s4ibS.js";import"./C_bjtiOT.js";import"./D-_bMSkg.js";import"./CK40c25S.js";import"./BWArym7p.js";import"./SI484xt3.js";const Xt={class:"hand-statistic-tank-preview__img-wrapper"},Jt={class:"hand-statistic-tank-preview__description"},Yt={class:"hand-statistic-tank-preview__description-tank"},Zt={class:"hand-statistic-tank-preview__name"},te={class:"hand-statistic-tank-preview__name-text"},ee={class:"hand-statistic-tank-preview__description-tank"},ae={class:"hand-statistic-tank-preview__props"},se={class:"hand-statistic-tank-preview__prop"},ne={class:"hand-statistic-tank-preview__prop-value"},ie={class:"hand-statistic-tank-preview__prop"},le={class:"hand-statistic-tank-preview__prop-value"},oe={class:"hand-statistic-tank-preview__prop"},de={class:"hand-statistic-tank-preview__prop-value"},ce=H({__name:"HandStatisticTankPreview",props:{tank:{type:Object,default:()=>({}),required:!0}},setup(_){return(f,r)=>{const h=ct,k=tt,m=G,g=gt;return y(),U("div",Pt({class:"hand-statistic-tank-preview"},f.$attrs),[t("div",Xt,[a(h,{class:"hand-statistic-tank-preview__nation-img",src:`/img/nations/nation-${_.tank.nation}.svg`,alt:_.tank.nation},null,8,["src","alt"]),a(h,{class:"hand-statistic-tank-preview__tank-img",src:_.tank.images.preview,alt:_.tank.name},null,8,["src","alt"]),a(rt,{class:"hand-statistic-tank-preview__tier",tier:_.tank.tier},null,8,["tier"])]),t("div",Jt,[t("div",Yt,[t("div",Zt,[a(k,{type:_.tank.type,class:"hand-statistic-tank-preview__type","is-premium":_.tank.is_premium,"is-collectible":_.tank.is_collectible},null,8,["type","is-premium","is-collectible"]),t("span",te,C(_.tank.name??`Tank ID: ${_.tank.tank_id}`),1)])]),t("div",ee,[t("div",ae,[t("span",se,[a(m,{name:"sword-cross",size:"18"}),t("span",ne,C(f.$formatter.number.toInteger(_.tank.stat.battles)),1)]),t("span",ie,[a(m,{name:"flag-variant",size:"18"}),t("span",le,[a(g,{"win-rate":_.tank.stat.winRate},null,8,["win-rate"])])]),t("span",oe,[a(m,{name:"destruction",size:"18"}),t("span",de,C(f.$formatter.number.toInteger(_.tank.stat.damagePerBattle)),1)])])])])],16)}}}),re={class:"hand-statistic-tank-table__row"},me={class:"hand-statistic-tank-table__tank"},ue={class:"hand-statistic-tank-table__name"},_e={class:"hand-statistic-tank-table__diff"},pe={style:{display:"flex",gap:"10px"}},ke=H({__name:"HendStatisticTankTable",props:{items:{type:Array,default:()=>[],required:!0}},emits:["pressEdit"],setup(_,{emit:f}){const r={prop:"lastUpdateTime",order:"asc"},h=mt(),k=K(()=>h.isTablet),{$formatter:m}=ht(),g=[{key:"name",label:"Танк",sortable:!0},{key:"type",label:"Тип",sortable:!0},{key:"tier",label:"I-X",sortable:!0},{key:"battles",label:m.stat.accountProp("battles"),sortable:!0,sortMethod(e,c){const v=e,d=c;return v.stat.battles-d.stat.battles}},{key:"winRate",label:m.stat.accountProp("wins"),sortable:!0,sortMethod(e,c){const v=e,d=c;return v.stat.winRate-d.stat.winRate}},{key:"damagePerBattle",label:m.stat.accountProp("damage_dealt"),sortable:!0,sortMethod(e,c){const v=e,d=c;return v.stat.damagePerBattle-d.stat.damagePerBattle}},{key:"lastUpdateTime",label:"Дата обновления",sortable:!0,sortMethod(e,c){return c.lastUpdateTime-e.lastUpdateTime}},{key:"controls",label:"",width:100}],S=[{key:"battles",label:m.stat.accountProp("battles"),sortable:!0,sortMethod(e,c){const v=e,d=c;return v.stat.battles-d.stat.battles}},{key:"winRate",label:m.stat.accountProp("wins"),sortable:!0,sortMethod(e,c){const v=e,d=c;return v.stat.winRate-d.stat.winRate}},{key:"damagePerBattle",label:m.stat.accountProp("damage_dealt"),sortable:!0,sortMethod(e,c){const v=e,d=c;return v.stat.damagePerBattle-d.stat.damagePerBattle}},{key:"lastUpdateTime",label:"Дата обновления",sortable:!0,sortMethod(e,c){return c.lastUpdateTime-e.lastUpdateTime}}],o=f;return(e,c)=>{const v=ce,d=qt,R=tt,B=rt,T=ct,w=gt,p=G,M=Z,O=Nt;return l(k)?(y(),A(d,{key:0,class:"hand-statistic-tank-table",headers:S,data:_.items,"default-sort":r},{default:i(({row:u})=>[a(v,{tank:u,onClick:W=>o("pressEdit",u)},null,8,["tank","onClick"])]),_:1},8,["data"])):(y(),A(O,{key:1,class:"hand-statistic-tank-table",headers:g,data:_.items,"default-sort":r},{type:i(({row:u})=>[a(R,{size:"24",type:u.type,"is-premium":u.is_premium,"is-collectible":u.is_collectible},null,8,["type","is-premium","is-collectible"])]),tier:i(({row:u})=>[a(B,{tier:u.tier},null,8,["tier"])]),name:i(({row:u})=>{var W;return[t("div",re,[t("div",me,[a(T,{class:"hand-statistic-tank-table__tank-nation",src:`/img/nations/nation-${u.nation}.svg`,alt:u.nation},null,8,["src","alt"]),a(T,{class:"hand-statistic-tank-table__tank-img",alt:u.name,src:(W=u.images)==null?void 0:W.preview},null,8,["alt","src"])]),t("span",ue,C(u.name),1)])]}),battles:i(({row:u})=>[t("span",null,C(l(m).number.toInteger(u.stat.battles)),1)]),winRate:i(({row:u})=>[a(w,{"win-rate":u.stat.winRate},null,8,["win-rate"])]),damagePerBattle:i(({row:u})=>[V(C(l(m).number.toInteger(u.stat.damagePerBattle)),1)]),lastUpdateTime:i(({row:u})=>[V(C(l(m).date.toRelativeTime(u.lastUpdateTime)||"---")+" ",1),t("div",_e,C(l(m).date.toDateTime(u.lastUpdateTime)||"---"),1)]),controls:i(({row:u})=>[t("div",pe,[a(M,{onClick:W=>o("pressEdit",u)},{before:i(()=>[a(p,{name:"edit"})]),default:i(()=>[c[0]||(c[0]=V(" Изменить "))]),_:2},1032,["onClick"]),c[1]||(c[1]=t("div",null,null,-1))])]),_:1},8,["data"]))}}}),fe=H({__name:"NationSelect",props:dt({noWrap:{type:Boolean,default:!1,required:!1}},{modelValue:{required:!0,default:()=>[]},modelModifiers:{}}),emits:["update:modelValue"],setup(_){const f=lt(_,"modelValue"),r=["ussr","germany","usa","uk","japan","china","france","european","other"];function h(k,m){m?f.value.push(k):f.value=[...f.value.filter(g=>g!==k)]}return(k,m)=>{const g=yt,S=ut;return y(),U("div",{class:Y(["nation-select",[_.noWrap?"nation-select--no-wrap":""]])},[(y(),U(E,null,ot(r,o=>{var e;return a(S,{key:o,"model-value":!!((e=f.value)!=null&&e.includes(o)),onChange:c=>h(o,c)},{default:i(()=>[a(g,{nation:o},null,8,["nation"])]),_:2},1032,["model-value","onChange"])}),64))],2)}}}),ve=H({__name:"TypeSelect",props:dt({noWrap:{type:Boolean,default:!1,required:!1}},{modelValue:{required:!0,default:()=>[]},modelModifiers:{}}),emits:["update:modelValue"],setup(_){const f=lt(_,"modelValue"),r=["lightTank","mediumTank","heavyTank","AT-SPG"];function h(k,m){m?f.value.push(k):f.value=[...f.value.filter(g=>g!==k)]}return(k,m)=>{const g=tt,S=ut;return y(),U("div",{class:Y(["type-select",[_.noWrap?"type-select--no-wrap":""]])},[(y(),U(E,null,ot(r,o=>{var e;return a(S,{key:o,"model-value":!!((e=f.value)!=null&&e.includes(o)),onChange:c=>h(o,c)},{default:i(()=>[a(g,{type:o},null,8,["type"])]),_:2},1032,["model-value","onChange"])}),64))],2)}}}),he={class:"hand-statistic-tank-select"},ye={class:"hand-statistic-tank-select__body"},ge={class:"hand-statistic-tank-select__filters"},be={class:"hand-statistic-tank-select__filters-item"},we={class:"hand-statistic-tank-select__filters-item"},Te={class:"hand-statistic-tank-select__filters-item"},$e={class:"hand-statistic-tank-select__filters-item"},Ve={class:"hand-statistic-tank-select__count"},Se={key:0,class:"hand-statistic-tank-select__list",style:{display:"flex","align-items":"center","justify-content":"center"}},Ue={key:1,class:"hand-statistic-tank-select__list"},Be=["onClick","onKeyup"],xe={class:"hand-statistic-tank-select__item-details"},Ce={class:"hand-statistic-tank-select__item-props"},Re={key:2,class:"hand-statistic-tank-select__list",style:{display:"flex","align-items":"center","justify-content":"center"}},Pe={class:"hand-statistic-tank-select__controls"},Ie={class:"hand-statistic-tank-select__controls-row"},Me=H({__name:"HandStatisticTankSelect",props:{items:{type:Object,default:()=>({}),required:!0},exclude:{type:Array,default:()=>[],required:!1}},emits:["select","cancel"],setup(_,{emit:f}){const r=q(),h=_,k=mt(),m=K(()=>k.isMobile),g=K(()=>Object.values(h.items).sort((w,p)=>p.tier-w.tier).filter(w=>[!w.name.startsWith("#"),!h.exclude.includes(w.tank_id),o.tiers.length?o.tiers.includes(w.tier):!0,o.types.length?o.types.includes(w.type):!0,o.nations.length?o.nations.includes(w.nation):!0].every(p=>p))),S=()=>({tiers:[],types:[],nations:[]}),o=F(S()),e=K(()=>!Gt(S(),o)),c=K(()=>o.tiers.length===0&&o.types.length===0&&o.nations.length===0),v=f;function d(w){let p="standard";return w.is_premium&&(p="premium"),w.is_collectible&&(p="collectible"),p}async function R(w,p){var M,O;v("select",w),await It(),(O=(M=r.value)==null?void 0:M[p+1])==null||O.focus()}function B(w){return h.exclude.includes(w.tank_id)}function T(){Object.assign(o,S())}return(w,p)=>{const M=Ft,O=fe,u=ve,W=G,j=Z,et=ct,at=yt,st=tt,nt=rt;return y(),U("div",he,[t("div",ye,[t("div",ge,[t("div",be,[a(M,{modelValue:l(o).tiers,"onUpdate:modelValue":p[0]||(p[0]=b=>l(o).tiers=b),"no-wrap":""},null,8,["modelValue"])]),t("div",we,[a(O,{modelValue:l(o).nations,"onUpdate:modelValue":p[1]||(p[1]=b=>l(o).nations=b),"no-wrap":""},null,8,["modelValue"])]),t("div",Te,[a(u,{modelValue:l(o).types,"onUpdate:modelValue":p[2]||(p[2]=b=>l(o).types=b),"no-wrap":""},null,8,["modelValue"])]),t("div",$e,[a(j,{title:"Сброс фильтров",disabled:!l(e),onClick:T},{before:i(()=>[a(W,{name:"close"})]),default:i(()=>[l(m)?N("",!0):(y(),U(E,{key:0},[V(" Сброс ")],64))]),_:1},8,["disabled"])])]),t("div",Ve," Всего - "+C(Object.keys(h.items).length),1),l(c)?(y(),U("div",Se," Выберите что-нибудь в фильтре... ")):l(g).length?(y(),U("div",Ue,[(y(!0),U(E,null,ot(l(g),(b,L)=>(y(),U("div",{key:b.tank_id,ref_for:!0,ref_key:"itemsRef",ref:r,role:"button","aria-pressed":"false",class:Y(["hand-statistic-tank-select__item",[B(b)?"hand-statistic-tank-select__item--excluded":""]]),tabindex:"0",onClick:it=>R(b,L),onKeyup:z(it=>R(b,L),["enter"])},[a(et,{class:"hand-statistic-tank-select__item-img",alt:b.name,src:b.images.preview},null,8,["alt","src"]),t("div",xe,[t("div",{class:Y(["hand-statistic-tank-select__item-name",`hand-statistic-tank-select__item-name--${d(b)}`])},C(b.name),3),t("div",Ce,[a(at,{size:"18",nation:b.nation},null,8,["nation"]),a(st,{size:"24",type:b.type},null,8,["type"]),a(nt,{tier:b.tier},null,8,["tier"])])])],42,Be))),128))])):(y(),U("div",Re," Ничего не найдено... "))]),t("div",Pe,[p[5]||(p[5]=t("div",{class:"hand-statistic-tank-select__controls-row"},null,-1)),t("div",Ie,[a(j,{onClick:p[3]||(p[3]=b=>v("cancel"))},{default:i(()=>p[4]||(p[4]=[V(" Закрыть ")])),_:1})])])])}}}),Oe={class:"hand-statistic-tank-edit"},We={class:"hand-statistic-tank-edit__body"},De={class:"hand-statistic-tank-edit__params"},Ee={class:"hand-statistic-tank-edit__params-item"},He={class:"hand-statistic-tank-edit__params-item"},je={class:"hand-statistic-tank-edit__params"},qe={class:"hand-statistic-tank-edit__params-item"},Ne={class:"hand-statistic-tank-edit__params-item"},Ke={class:"hand-statistic-tank-edit__params"},ze={class:"hand-statistic-tank-edit__params-item"},Ae={class:"hand-statistic-tank-edit__params-item"},Fe={class:"hand-statistic-tank-edit__params-item"},Ge={class:"hand-statistic-tank-edit__controls"},Le={class:"hand-statistic-tank-edit__controls-row"},Qe=H({__name:"HandStatisticTankEdit",props:{modelValue:{required:!0,default:()=>({})},modelModifiers:{}},emits:dt(["close","save"],["update:modelValue"]),setup(_,{emit:f}){const r=lt(_,"modelValue"),h=F({isWin:!0}),k=F({damage_dealt:0,losses:0,wins:0});J(()=>[r.value.stat],()=>{const{losses:o,wins:e}=r.value.stat;r.value.stat.battles=o+e,r.value.stat.winRate=D.winRate(r.value.stat),r.value.stat.damagePerBattle=D.damagePerBattle(r.value.stat)},{deep:!0});const m=f;function g(){m("close")}function S(){h.isWin?k.wins+=1:k.losses+=1,r.value.lastUpdateTime=Date.now(),r.value.stat=D.sum(r.value.stat,{...k,battles:k.losses+k.wins}),m("save",r.value)}return(o,e)=>{const c=bt,v=ut,d=G,R=Z;return y(),U("div",Oe,[t("div",We,[t("div",De,[e[7]||(e[7]=t("div",{class:"hand-statistic-tank-edit__params-title"}," Информация ",-1)),t("div",Ee,[e[5]||(e[5]=t("span",{class:"hand-statistic-tank-edit__params-item-title"}," Название танка: ",-1)),V(" "+C(r.value.name),1)]),t("div",He,[e[6]||(e[6]=t("span",{class:"hand-statistic-tank-edit__params-item-title"}," Дата обновления: ",-1)),V(" "+C(o.$formatter.date.toDateTime(r.value.lastUpdateTime)||"---"),1)])]),t("div",je,[e[11]||(e[11]=t("div",{class:"hand-statistic-tank-edit__params-title"}," Показатели за бой ",-1)),t("div",qe,[e[8]||(e[8]=t("span",{class:"hand-statistic-tank-edit__params-item-title"}," Урон: ",-1)),a(c,{modelValue:l(k).damage_dealt,"onUpdate:modelValue":e[0]||(e[0]=B=>l(k).damage_dealt=B),width:"100px",min:"0",onKeyup:z(S,["enter"])},null,8,["modelValue"])]),t("div",Ne,[e[10]||(e[10]=t("span",{class:"hand-statistic-tank-edit__params-item-title"}," Результат: ",-1)),a(v,{modelValue:l(h).isWin,"onUpdate:modelValue":e[1]||(e[1]=B=>l(h).isWin=B)},{default:i(()=>e[9]||(e[9]=[V(" Победа ")])),_:1},8,["modelValue"])])]),t("div",Ke,[e[15]||(e[15]=t("div",{class:"hand-statistic-tank-edit__params-title"}," Суммарные показатели ",-1)),t("div",ze,[e[12]||(e[12]=t("span",{class:"hand-statistic-tank-edit__params-item-title"}," Урон: ",-1)),a(c,{modelValue:r.value.stat.damage_dealt,"onUpdate:modelValue":e[2]||(e[2]=B=>r.value.stat.damage_dealt=B),width:"100px",min:"0",onKeyup:z(S,["enter"])},null,8,["modelValue"])]),t("div",Ae,[e[13]||(e[13]=t("span",{class:"hand-statistic-tank-edit__params-item-title"}," Побед: ",-1)),a(c,{modelValue:r.value.stat.wins,"onUpdate:modelValue":e[3]||(e[3]=B=>r.value.stat.wins=B),width:"100px",min:"0",onKeyup:z(S,["enter"])},null,8,["modelValue"])]),t("div",Fe,[e[14]||(e[14]=t("span",{class:"hand-statistic-tank-edit__params-item-title"}," Пораж.: ",-1)),a(c,{modelValue:r.value.stat.losses,"onUpdate:modelValue":e[4]||(e[4]=B=>r.value.stat.losses=B),width:"100px",min:"0",onKeyup:z(S,["enter"])},null,8,["modelValue"])])])]),t("div",Ge,[e[18]||(e[18]=t("div",{class:"hand-statistic-tank-edit__controls-row"},null,-1)),t("div",Le,[a(R,{onClick:g},{before:i(()=>[a(d,{name:"close"})]),default:i(()=>[e[16]||(e[16]=V(" Отмена "))]),_:1}),a(R,{onClick:S},{before:i(()=>[a(d,{name:"content-save"})]),default:i(()=>[e[17]||(e[17]=V(" Сохранить "))]),_:1})])])])}}}),Xe={class:"hand-statistic-page__settings"},Je={key:0},Ye={class:"hand-statistic-page__params"},Ze={class:"hand-statistic-page__params-item"},ta={class:"hand-statistic-page__params-item-value"},ea={class:"hand-statistic-page__params-item"},aa={class:"hand-statistic-page__params-item-value"},sa={class:"hand-statistic-page__params-item"},na={class:"hand-statistic-page__params-item-value link",style:{"font-weight":"500"}},ia={style:{display:"flex","justify-content":"space-between"}},la={style:{display:"flex","justify-content":"space-between"}},oa={style:{display:"flex",gap:"10px","text-align":"center"}},qa=H({__name:"index",setup(_){const{$formatter:f}=ht(),r=q(),h=q(),k=q(),m=q(),g=Mt(),S=mt(),o=K(()=>S.isMobile),e=q([{key:"battles",label:f.stat.accountProp("battles"),value:0},{key:"winRate",label:f.stat.accountProp("winRate"),value:0},{key:"damagePerBattle",label:f.stat.accountProp("damagePerBattle"),value:0}]),c=Qt(),v=Ot(),d=F({tanks:[],currentTank:null}),R=pt("handleStatMetricsOpacity"),B=pt("handleStatMetricsWidth"),T=F({metricsOpacity:+R.value,metricsWidth:B.value});J(()=>T.metricsOpacity,()=>{R.value=T.metricsOpacity}),J(()=>T.metricsWidth,()=>{B.value=T.metricsWidth}),J(()=>d.tanks,w,{deep:!0,immediate:!0}),Wt(async()=>{var s;await c.getTanksVehicles(),(s=(await kt.handStat.tanks.get(g.accountId)).data)==null||s.raw.forEach($=>{var x;const I=(x=c.vehicles)==null?void 0:x[$.tankId];I&&d.tanks.push(M({tank:I,stat:$.stat,lastUpdateTime:$.lastBattleTime}))})});function w(){var s;let n={};d.tanks.forEach($=>{n=D.sum(n,$.stat)}),(s=e.value)==null||s.forEach($=>{$.key==="winRate"?$.value=D.winRate(n):$.key==="damagePerBattle"?$.value=D.damagePerBattle(n):$.value=n.battles??0})}function p(n){return{...n,battles:(n.losses||0)+(n.wins||0),winRate:D.winRate(n),damagePerBattle:D.damagePerBattle(n)}}function M(n){const s={...n.tank,stat:n.stat};return s.stat=p(s.stat),s.lastUpdateTime=n.lastUpdateTime,s}function O(){var n;(n=r.value)==null||n.doOpen()}function u(){var n;(n=k.value)==null||n.doOpen()}function W(){return{battles:0,damage_dealt:0,losses:0,wins:0,winRate:0,damagePerBattle:0}}async function j(n){try{return await kt.handStat.tanks.set(g.accountId,n.map(s=>({stat:s.stat,tankId:s.tank_id,lastBattleTime:s.lastUpdateTime}))),!0}catch(s){return Et(s,{title:"Установка данных ручной статистики"}),!1}}async function et(n){let s=[...d.tanks];d.tanks.some(x=>x.tank_id===n.tank_id)||(s=[{...n,lastUpdateTime:Date.now(),stat:W()},...s]),await j(s)&&(d.tanks=s,v.add({type:"success",message:"Техники успешно добавлена"}))}function at(){var n;(n=r.value)==null||n.doClose()}function st(n){var s;d.currentTank=ft(n),(s=h.value)==null||s.doOpen()}async function nt(){var n;await((n=h.value)==null?void 0:n.doClose()),d.currentTank=null}async function b(){var x;if(!d.currentTank)return;const n=ft(d.currentTank);n.stat=p(n.stat);const s=d.tanks.findIndex(Q=>Q.tank_id===n.tank_id),$=[...d.tanks];s>=0&&$.splice(s,1,n),await j($)&&(d.tanks=$,await((x=h.value)==null?void 0:x.doClose()),d.currentTank=null,v.add({type:"success",message:"Данные техники успешно обновлены"}))}function L(){var n;(n=m.value)==null||n.doOpen()}function it(){var n;(n=m.value)==null||n.doClose()}async function wt(){var n;d.tanks.length?await j([])&&(d.tanks=[],(n=m.value)==null||n.doClose(),v.add({type:"success",message:"Данные техники успешно обновлены"})):v.add({type:"info",message:"Нечего сбрасывать"})}function Tt(){Ht({path:"/hand-statistic/widget",query:{accountId:g.accountId,opacity:T.metricsOpacity,width:T.metricsWidth}},{open:{target:"_blank"}})}return(n,s)=>{const $=Rt,I=G,x=Z,Q=jt,$t=ke,Vt=Kt,St=bt,Ut=zt,X=At,Bt=Me,xt=Qe,Ct=Lt;return l(g).accountId?(y(),A(vt,{key:0,class:"hand-statistic-page"},{default:i(()=>[a(Q,{title:"Средние показатели"},{default:i(()=>[a($,{modelValue:l(e),"onUpdate:modelValue":s[0]||(s[0]=P=>Dt(e)?e.value=P:null),opacity:l(T).metricsOpacity,width:l(T).metricsWidth,class:"hand-statistic-page__average-list"},null,8,["modelValue","opacity","width"]),t("div",Xe,[a(x,{title:"Добавить танк",onClick:O},{before:i(()=>[a(I,{name:"add"})]),default:i(()=>[l(o)?N("",!0):(y(),U(E,{key:0},[V(" Добавить танк ")],64))]),_:1}),a(x,{title:"Сброс",onClick:L},{before:i(()=>[a(I,{name:"refresh"})]),default:i(()=>[l(o)?N("",!0):(y(),U(E,{key:0},[V(" Сброс ")],64))]),_:1}),a(x,{title:"Настройки",onClick:u},{before:i(()=>[a(I,{name:"tune"})]),default:i(()=>[l(o)?N("",!0):(y(),U(E,{key:0},[V(" Настройки ")],64))]),_:1}),a(x,{title:"К виджету",onClick:Tt},{before:i(()=>[a(I,{name:"open-in-new"})]),default:i(()=>[l(o)?N("",!0):(y(),U("span",Je," К виджету "))]),_:1})])]),_:1}),a(Q,{title:"Техника"},{default:i(()=>[a($t,{items:l(d).tanks,onPressEdit:st},null,8,["items"])]),_:1}),a(X,{ref_key:"settingsDialogRef",ref:k,width:"480px",title:"Настройки"},{footer:i(()=>[t("div",ia,[s[9]||(s[9]=t("span",null,null,-1)),a(x,{onClick:s[3]||(s[3]=P=>{var _t;return(_t=l(k))==null?void 0:_t.doClose()})},{default:i(()=>s[8]||(s[8]=[V(" Закрыть ")])),_:1})])]),default:i(()=>[t("div",Ye,[t("div",Ze,[s[5]||(s[5]=t("div",{class:"hand-statistic-page__params-item-title"}," Прозрачность фона виджета ",-1)),t("div",ta,[a(Vt,{modelValue:l(T).metricsOpacity,"onUpdate:modelValue":s[1]||(s[1]=P=>l(T).metricsOpacity=P),width:"200px",min:0,max:1,step:.1},null,8,["modelValue"]),V(" "+C(l(f).number.toPercent((l(T).metricsOpacity||0)*100)),1)])]),t("div",ea,[s[6]||(s[6]=t("div",{class:"hand-statistic-page__params-item-title"}," Ширина виджета (200px - 1880px) ",-1)),t("div",aa,[a(St,{modelValue:l(T).metricsWidth,"onUpdate:modelValue":s[2]||(s[2]=P=>l(T).metricsWidth=P),width:"80px",min:0,max:1880,step:10},null,8,["modelValue"])])]),t("div",sa,[s[7]||(s[7]=t("div",{class:"hand-statistic-page__params-item-title"}," Выбор темы интерфейса ",-1)),t("label",na,[a(Ut,{"is-large":""})])])])]),_:1},512),a(X,{ref_key:"selectTankDialogRef",ref:r,width:"640px","no-scroll":"",title:"Добавление танка"},{default:i(()=>[l(c).vehicles?(y(),A(Bt,{key:0,items:l(c).vehicles,exclude:l(d).tanks.map(P=>P.tank_id),onSelect:et,onCancel:at},null,8,["items","exclude"])):N("",!0)]),_:1},512),a(X,{ref_key:"editTankDialogRef",ref:h,width:"480px","no-scroll":"",title:"Изменение показателей"},{default:i(()=>[a(xt,{modelValue:l(d).currentTank,"onUpdate:modelValue":s[4]||(s[4]=P=>l(d).currentTank=P),onClose:nt,onSave:b},null,8,["modelValue"])]),_:1},512),a(X,{ref_key:"confirmResetDialogRef",ref:m,width:"480px",title:"Сброс сессии"},{footer:i(()=>[t("div",la,[s[12]||(s[12]=t("span",null,null,-1)),t("div",oa,[a(x,{width:"80px",align:"center",onClick:wt},{default:i(()=>s[10]||(s[10]=[V(" Да ")])),_:1}),a(x,{width:"80px",align:"center",onClick:it},{default:i(()=>s[11]||(s[11]=[V(" Нет ")])),_:1})])])]),default:i(()=>[s[13]||(s[13]=t("div",{class:"content-area"},[t("p",null," Вы уверены? Текущий прогресс будет утерян. ")],-1))]),_:1},512)]),_:1})):(y(),A(vt,{key:1,class:"hand-statistic-page"},{default:i(()=>[a(Ct,{height:"calc(70vh)"},{default:i(()=>s[14]||(s[14]=[V(" Для использования ручной статистики необходимо авторизоваться ")])),_:1})]),_:1}))}}});export{qa as default};
