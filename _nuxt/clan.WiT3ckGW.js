import{_ as b}from"./UiTabs.vue.WHK8u1sg.js";import{_ as g}from"./page.BKintW9q.js";import{_ as h}from"./PageLayout.vue.Bsa4TKTj.js";import{f as k,u as x,g as C,h as V,i as m,r as v,j as s,w,o as p,k as a,l as T,m as y,b as N}from"./entry.38LME4ko.js";import"./disableScroll.bcJx9LND.js";import"./UiButton.vue.BlJ_24Cx.js";import"./nuxt-link.C3WD0srD.js";import"./MainSearch.vue.C-zG-Ats.js";import"./UiInput.vue.Bnd6JzIv.js";import"./request.BVKHoC5m.js";import"./notEmpty.BxBPJGBn.js";import"./debounce.D6S8q1nH.js";import"./UiDialog.vue.Bpz9VH2j.js";import"./user.BzIqZnQp.js";import"./index.DK8OZMT_.js";import"./index.DhpBw61k.js";import"./index.CesnwhB4.js";import"./ContentBox.vue.DBRxv3kT.js";import"./leader.DCwJw9Y9.js";import"./nuxt-icon.tdHFESbn.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./client-only.CxqVZBjJ.js";import"./dark-mode.CsF_CE04.js";import"./light-mode.DkKAGSZC.js";const Z=k({__name:"clan",setup(R){x({title:"Кланы"});const e=C(),i=V(),n=m(()=>[{label:"Избранное",name:"clan-favorites"},{label:"Отслеживаемые",name:"clan-tracked"}]),t=v(e.name??""),c=m(()=>n.value.some(o=>o.name===e.name));async function l({name:o}){await i.push({name:o})}return(o,r)=>{const u=b,_=g,f=h;return p(),s(f,{class:"clan-root-page"},{default:w(()=>[a(c)?(p(),s(u,{key:0,modelValue:a(t),"onUpdate:modelValue":r[0]||(r[0]=d=>T(t)?t.value=d:null),tabs:a(n),class:"clan-root-page__tabs",onChange:l},null,8,["modelValue","tabs"])):y("",!0),N(_)]),_:1})}}});export{Z as default};
