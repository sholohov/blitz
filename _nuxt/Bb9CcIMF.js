import{_ as f}from"./B8pVlpHr.js";import{_ as g}from"./Cmn0f48e.js";import{_ as h}from"./Ct3-oKJ2.js";import{f as k,u as x,g as C,h as V,i as m,r as w,j as n,w as T,o as p,k as t,l as v,m as y,b as N}from"./BM_c6A7U.js";import"./DP7BBWgZ.js";import"./BdFzBH2T.js";import"./DXoVmfh7.js";import"./D4aUj366.js";import"./DB4JgT8g.js";import"./D_RpC5tF.js";import"./BxBPJGBn.js";import"./DDxGNb5w.js";import"./Ct4DMbE-.js";import"./tz8OXiQC.js";import"./DgZNgcpm.js";import"./Buklct90.js";import"./BL2Wcl4w.js";import"./B7Mce4cO.js";import"./B3PV7--H.js";import"./raUFiEvG.js";import"./DlAUqK2U.js";import"./DKx20K7W.js";import"./Dkx8VsaV.js";import"./DUozLQMQ.js";const Z=k({__name:"leaderboards",setup(R){x({title:"Аккаунты"});const a=C(),i=V(),r=m(()=>[{label:"Аккаунты",name:"leaderboards-accounts"},{label:"Техника",name:"leaderboards-tanks"}]),e=w(a.name??""),l=m(()=>r.value.some(o=>o.name===a.name));async function u({name:o}){await i.push({name:o})}return(o,s)=>{const c=f,_=g,d=h;return p(),n(d,{class:"leaderboards-root-page"},{default:T(()=>[t(l)?(p(),n(c,{key:0,modelValue:t(e),"onUpdate:modelValue":s[0]||(s[0]=b=>v(e)?e.value=b:null),tabs:t(r),class:"leaderboards-root-page__tabs",onChange:u},null,8,["modelValue","tabs"])):y("",!0),N(_)]),_:1})}}});export{Z as default};
