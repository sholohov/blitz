import{_ as b}from"./DphHsVo-.js";import{_ as g}from"./BFjkyBEs.js";import{_ as h}from"./BKsmnJl0.js";import{f as k,u as x,g as C,h as V,i as m,r as v,j as r,w,o as c,k as a,l as T,m as y,b as N}from"./C1pZ3Ysy.js";import"./C2BuzcM2.js";import"./BfF4LBiS.js";import"./dAvVLxv5.js";import"./Bgql84gp.js";import"./BrX1J4SK.js";import"./DIwkXMey.js";import"./BxBPJGBn.js";import"./VCkIz5Ac.js";import"./DYVPuHM_.js";import"./YOq-_6aY.js";import"./CEfgnHem.js";import"./Ba3yjCYF.js";import"./BR5uHrNA.js";import"./DIC5o3iZ.js";import"./CVTXfaOm.js";import"./-p8L5eN0.js";import"./DlAUqK2U.js";import"./CT3UIwUl.js";import"./Bxz8qzMz.js";import"./DqM6bzz7.js";const Z=k({__name:"account",setup(R){x({title:"Аккаунты"});const e=C(),p=V(),n=m(()=>[{label:"Избранное",name:"account-favorites"},{label:"Контакты",name:"account-contacts"},{label:"Сессии",name:"account-sessions"},{label:"Отслеживаемые",name:"account-tracked"}]),t=v(e.name??""),i=m(()=>n.value.some(o=>o.name===e.name));async function u({name:o}){await p.push({name:o})}return(o,s)=>{const l=b,_=g,f=h;return c(),r(f,{class:"account-root-page"},{default:w(()=>[a(i)?(c(),r(l,{key:0,modelValue:a(t),"onUpdate:modelValue":s[0]||(s[0]=d=>T(t)?t.value=d:null),tabs:a(n),class:"account-root-page__tabs",onChange:u},null,8,["modelValue","tabs"])):y("",!0),N(_)]),_:1})}}});export{Z as default};
