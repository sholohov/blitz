import{_ as w}from"./DReJ8vQK.js";import{_ as k}from"./AY0GpZ3k.js";import{_ as B}from"./3OUiC8Lt.js";import{_ as $}from"./B_qt9tlw.js";import{u as P}from"./Dz0q-Wbl.js";import{d as S,A as C,e as N,q as y,o as n,n as d,p as r,j as a,F as A,D as M,w as V,v as x,x as R,g as m,a4 as T,u as F,a as D,b as j,k as q,M as I,l as z,m as E,f as G,h as H,G as b,y as L}from"./BzQ49_ll.js";import{_ as O}from"./RGOgyXP7.js";import{c as J}from"./B4FMxlHh.js";import"./DD4asW33.js";const K={class:"recruitment-player-profile-form"},Q={class:"recruitment-player-profile-form__item"},W={class:"recruitment-player-profile-form__item"},X={class:"recruitment-player-profile-form__item"},Y={class:"recruitment-player-profile-form__props"},Z={class:"recruitment-player-profile-form__props-value"},h={class:"recruitment-player-profile-form__item"},ee={class:"recruitment-player-profile-form__props recruitment-player-profile-form__props--preferences"},te={class:"recruitment-player-profile-form__props-item"},re={class:"recruitment-player-profile-form__props-item"},oe={class:"recruitment-player-profile-form__props-item"},le={class:"recruitment-player-profile-form__props-item"},ae={class:"recruitment-player-profile-form__tiers"},se=S({__name:"RecruitmentPlayerProfileForm",props:{modelValue:{required:!0,default:()=>({})},modelModifiers:{}},emits:["update:modelValue"],setup(U){const o=C(U,"modelValue"),f=P(),p=N(()=>f.isTablet),_=[{value:"active",label:y.recruitment.playerStatus("active")},{value:"passive",label:y.recruitment.playerStatus("passive")},{value:"inactive",label:y.recruitment.playerStatus("inactive")}];return(s,e)=>{const c=w,v=k,u=B,l=$;return n(),d("div",K,[r("div",Q,[e[6]||(e[6]=r("div",{class:"recruitment-player-profile-form__item-title"}," Статус поиска ",-1)),a(c,{modelValue:o.value.status,"onUpdate:modelValue":e[0]||(e[0]=t=>o.value.status=t),class:"recruitment-status-select",options:_,width:"150px"},null,8,["modelValue"])]),r("div",W,[e[7]||(e[7]=r("div",{class:"recruitment-player-profile-form__item-title"}," Цель поиска ",-1)),a(v,{modelValue:o.value.target,"onUpdate:modelValue":e[1]||(e[1]=t=>o.value.target=t)},null,8,["modelValue"])]),r("div",X,[e[8]||(e[8]=r("div",{class:"recruitment-player-profile-form__item-title"}," Время активности (00:00 - 24:00) ",-1)),r("div",Y,[(n(!0),d(A,null,M(o.value.schedule,t=>(n(),d("div",{key:t.day,class:"recruitment-player-profile-form__props-item"},[r("div",Z,[a(u,{modelValue:t.isActive,"onUpdate:modelValue":i=>t.isActive=i,style:T({width:m(p)?"60px":"134px"})},{default:V(()=>[x(R(s.$formatter.date.toDay(t.day,m(p))),1)]),_:2},1032,["modelValue","onUpdate:modelValue","style"]),a(l,{modelValue:t.start,"onUpdate:modelValue":i=>t.start=i,step:"1",min:"0",max:Math.min(24,t.end-1),width:"70",disabled:!t.isActive},null,8,["modelValue","onUpdate:modelValue","max","disabled"]),a(l,{modelValue:t.end,"onUpdate:modelValue":i=>t.end=i,step:"1",min:Math.max(0,t.start+1),max:"24",width:"70",disabled:!t.isActive},null,8,["modelValue","onUpdate:modelValue","min","disabled"])])]))),128))])]),r("div",h,[e[13]||(e[13]=r("div",{class:"recruitment-player-profile-form__item-title"}," Предпочтения ",-1)),r("div",ee,[r("div",te,[e[9]||(e[9]=r("span",{class:"recruitment-player-profile-form__props-title"}," Победы (%) ",-1)),a(l,{modelValue:o.value.preferences.winRate,"onUpdate:modelValue":e[2]||(e[2]=t=>o.value.preferences.winRate=t),min:"0",max:"99",width:"170"},null,8,["modelValue"])]),r("div",re,[e[10]||(e[10]=r("span",{class:"recruitment-player-profile-form__props-title"}," Бои ",-1)),a(l,{modelValue:o.value.preferences.battles,"onUpdate:modelValue":e[3]||(e[3]=t=>o.value.preferences.battles=t),min:"0",max:"99999",width:"170"},null,8,["modelValue"])]),r("div",oe,[e[11]||(e[11]=r("span",{class:"recruitment-player-profile-form__props-title"}," Урон ср. ",-1)),a(l,{modelValue:o.value.preferences.damagePerBattle,"onUpdate:modelValue":e[4]||(e[4]=t=>o.value.preferences.damagePerBattle=t),min:"0",max:"9999",width:"170"},null,8,["modelValue"])]),r("div",le,[e[12]||(e[12]=r("span",{class:"recruitment-player-profile-form__props-title"}," Уровни ",-1)),r("div",ae,[a(O,{modelValue:o.value.preferences.tiers,"onUpdate:modelValue":e[5]||(e[5]=t=>o.value.preferences.tiers=t)},null,8,["modelValue"])])])])])])}}}),ie={class:"recruitment-profile-page"},ne={style:{display:"flex","justify-content":"space-between"}},Ve=S({__name:"profile",setup(U){const{$formatter:o}=F(),f=D();j({title:()=>o.route.getTitle(J.toString(f.name)??"")});const p=q(),_=I(),s=z({profile:null});async function e(){const{data:u}=await b.recruitment.get({id:p.accountId});s.profile=u}function c(){}function v(){s!=null&&s.profile&&(b.recruitment.set(s.profile),_.add({type:"success",message:"Анкета сохранена"}))}return E(()=>{e()}),(u,l)=>{const t=se,i=L;return n(),d("div",ie,[l[3]||(l[3]=r("div",{class:"content-area recruitment-profile-page__content"},[r("h2",null,"Профиль"),r("p",null," Здесь вы можете опубликовать анкету для поиска клана, взвода или турнирной команды. Через 5 минут после публикации анкету можно поднять в ТОП. ")],-1)),m(s).profile?(n(),G(t,{key:0,modelValue:m(s).profile,"onUpdate:modelValue":l[0]||(l[0]=g=>m(s).profile=g)},null,8,["modelValue"])):H("",!0),r("div",ne,[a(i,{onClick:c},{default:V(()=>l[1]||(l[1]=[x(" Поднять ")])),_:1}),a(i,{onClick:v},{default:V(()=>l[2]||(l[2]=[x(" Сохранить ")])),_:1})])])}}});export{Ve as default};