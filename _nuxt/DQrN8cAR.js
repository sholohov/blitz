import{_ as b}from"./DjzxW8ms.js";import{_ as g}from"./CrVrE52S.js";import{_ as h}from"./CYoyJ2a8.js";import{f as k,u as x,g as C,h as V,i as m,r as v,j as r,w,o as c,k as a,l as T,m as y,b as N}from"./Bsdcsqyr.js";import"./CJAPXafR.js";import"./oPPLSGsL.js";import"./CrTmqXQ-.js";import"./EzwXdRW-.js";import"./CYDBnore.js";import"./DfPHqO9p.js";import"./BxBPJGBn.js";import"./DmGZOdTU.js";import"./BWG_B3AI.js";import"./hQ_9_cpE.js";import"./CmTyC_Di.js";import"./B7OXLAu7.js";import"./2izKRhkt.js";import"./YFbRQhvd.js";import"./4q2mJNPb.js";import"./Djgy7nEl.js";import"./Bw9wN6Vr.js";import"./DlAUqK2U.js";import"./Db8l1Yae.js";import"./D2j33KO8.js";import"./hHV4bPqx.js";const oo=k({__name:"account",setup(R){x({title:"Аккаунты"});const e=C(),p=V(),n=m(()=>[{label:"Избранное",name:"account-favorites"},{label:"Контакты",name:"account-contacts"},{label:"Сессии",name:"account-sessions"},{label:"Отслеживаемые",name:"account-tracked"}]),t=v(e.name??""),i=m(()=>n.value.some(o=>o.name===e.name));async function u({name:o}){await p.push({name:o})}return(o,s)=>{const l=b,_=g,f=h;return c(),r(f,{class:"account-root-page"},{default:w(()=>[a(i)?(c(),r(l,{key:0,modelValue:a(t),"onUpdate:modelValue":s[0]||(s[0]=d=>T(t)?t.value=d:null),tabs:a(n),class:"account-root-page__tabs",onChange:u},null,8,["modelValue","tabs"])):y("",!0),N(_)]),_:1})}}});export{oo as default};
