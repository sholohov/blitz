import{_ as f}from"./COTG7EOG.js";import{_ as g}from"./CXAJefOs.js";import{_ as h}from"./uwS_71_x.js";import{f as k,u as x,g as C,h as V,i as m,r as w,j as n,w as T,o as p,k as t,l as v,m as y,b as N}from"./Dfk_Fzw6.js";import"./BQaFixBN.js";import"./DcLHZll-.js";import"./DDaHkhwB.js";import"./B_hX8Ya9.js";import"./BMjfXaaq.js";import"./BHA4Nd6Z.js";import"./BxBPJGBn.js";import"./DQzVWw1H.js";import"./BRMwARTk.js";import"./7UWFdEo2.js";import"./R5p0mRuj.js";import"./Dwwx9l0Y.js";import"./ew24QEYm.js";import"./C2vHB1V7.js";import"./CuL2OHxI.js";import"./CtnZGq4p.js";import"./DlAUqK2U.js";import"./CvmE4Bnd.js";import"./CT2wOa03.js";import"./a9t8p20z.js";const Z=k({__name:"leaderboards",setup(R){x({title:"Аккаунты"});const a=C(),i=V(),r=m(()=>[{label:"Аккаунты",name:"leaderboards-accounts"},{label:"Техника",name:"leaderboards-tanks"}]),e=w(a.name??""),l=m(()=>r.value.some(o=>o.name===a.name));async function u({name:o}){await i.push({name:o})}return(o,s)=>{const c=f,_=g,d=h;return p(),n(d,{class:"leaderboards-root-page"},{default:T(()=>[t(l)?(p(),n(c,{key:0,modelValue:t(e),"onUpdate:modelValue":s[0]||(s[0]=b=>v(e)?e.value=b:null),tabs:t(r),class:"leaderboards-root-page__tabs",onChange:u},null,8,["modelValue","tabs"])):y("",!0),N(_)]),_:1})}}});export{Z as default};