import{_ as b}from"./B8pVlpHr.js";import{_ as g}from"./Cmn0f48e.js";import{_ as h}from"./Ct3-oKJ2.js";import{f as k,u as x,g as C,h as V,i as m,r as v,j as r,w,o as c,k as a,l as T,m as y,b as N}from"./BM_c6A7U.js";import"./DP7BBWgZ.js";import"./BdFzBH2T.js";import"./DXoVmfh7.js";import"./D4aUj366.js";import"./DB4JgT8g.js";import"./D_RpC5tF.js";import"./BxBPJGBn.js";import"./DDxGNb5w.js";import"./Ct4DMbE-.js";import"./tz8OXiQC.js";import"./DgZNgcpm.js";import"./Buklct90.js";import"./BL2Wcl4w.js";import"./B7Mce4cO.js";import"./B3PV7--H.js";import"./raUFiEvG.js";import"./DlAUqK2U.js";import"./DKx20K7W.js";import"./Dkx8VsaV.js";import"./DUozLQMQ.js";const Z=k({__name:"account",setup(R){x({title:"Аккаунты"});const e=C(),p=V(),n=m(()=>[{label:"Избранное",name:"account-favorites"},{label:"Контакты",name:"account-contacts"},{label:"Сессии",name:"account-sessions"},{label:"Отслеживаемые",name:"account-tracked"}]),t=v(e.name??""),i=m(()=>n.value.some(o=>o.name===e.name));async function u({name:o}){await p.push({name:o})}return(o,s)=>{const l=b,_=g,f=h;return c(),r(f,{class:"account-root-page"},{default:w(()=>[a(i)?(c(),r(l,{key:0,modelValue:a(t),"onUpdate:modelValue":s[0]||(s[0]=d=>T(t)?t.value=d:null),tabs:a(n),class:"account-root-page__tabs",onChange:u},null,8,["modelValue","tabs"])):y("",!0),N(_)]),_:1})}}});export{Z as default};
