import{_ as j}from"./page.DUew4DkT.js";import{u as D,_ as R,a as T}from"./disableScroll.DjVa_9z0.js";import{_ as q,b as z,a as G}from"./ContentBox.vue.D4kCB2dM.js";import{f as x,q as I,r as k,i as M,o as d,j as $,w as r,k as y,c as b,b as c,a,d as f,t as w,m as U,Z as H,$ as K,T as Z,F as J,A as Q,C as W,g as X,z as Y,R as ee}from"./entry.DP5yAQ98.js";import{s as h,o as te,d as oe,a as N}from"./request.5IkpOjNq.js";import{_ as E}from"./CDialog.vue.CALeW1zY.js";import{a as ne,u as se,b as ae}from"./index.DoNr5vfs.js";import{a as S}from"./index.DVpF3T2t.js";import{u as ce}from"./user.ZEoePuA8.js";import"./CInput.vue.OZgMIOZf.js";import"./notEmpty.BxBPJGBn.js";import"./debounce.C9kaufHr.js";const ie={key:0,class:"update-message"},re={class:"update-message__title"},le=a("div",{class:"update-message__body"}," Что бы изменения вступили в силу, необходимо обновить страницу. ",-1),_e={class:"update-message__control"},ue=x({__name:"UpdateMessage",setup(B){I(()=>{t()});const l=k(!1),i=k(null),n=D(),m=K(),g=M(()=>{const _=m.public.clientVersion;return!i.value||!_||l.value?!1:i.value!==_});function t(){const _=h.firebase.db();te(oe(_,"app","info"),p=>{const u=p.data();i.value=(u==null?void 0:u.version)??null},p=>{n.add({type:"error",message:"Получение информации турнира"}),console.error(p)})}function s(){location.reload()}function v(){l.value=!0}return(_,p)=>{const u=R,C=T,e=q;return d(),$(H,{name:"update-message-"},{default:r(()=>[y(g)?(d(),b("div",ie,[c(e,{class:"update-message__inner"},{default:r(()=>[a("div",re,[c(u,{class:"update-message__icon",name:"new-releases"}),f(" Обновление v"+w(y(i)),1)]),le,a("div",_e,[c(C,{class:"update-message__btn",onClick:s},{default:r(()=>[f(" Обновить ")]),_:1}),c(C,{class:"update-message__btn",onClick:v},{default:r(()=>[f(" Скрыть ")]),_:1})])]),_:1})])):U("",!0)]),_:1})}}}),de={class:"update-db-dialog__header"},pe=a("b",null,"База данных обновлена",-1),fe=a("br",null,null,-1),me=a("br",null,null,-1),ge=a("br",null,null,-1),he=a("br",null,null,-1),ye={style:{display:"flex","justify-content":"flex-end"}},ve=x({__name:"UpdateDBDialog",emits:["confirm"],setup(B,{expose:l,emit:i}){const n=k(null),m=i;function g(){var s;(s=n.value)==null||s.doClose(),m("confirm")}function t(){var s;(s=n.value)==null||s.doOpen()}return l({open:t}),(s,v)=>{const _=R,p=T,u=E;return d(),$(u,{ref_key:"dialogRef",ref:n,class:"update-db-dialog","modal-enabled":"",width:"480px"},{title:r(()=>[a("div",de,[c(_,{class:"update-db-dialog__icon",name:"database-alert"}),pe])]),footer:r(()=>[a("div",ye,[c(p,{onClick:g},{default:r(()=>[f(" Так точно ")]),_:1})])]),default:r(()=>[f(" Для продолжения использования необходимо: "),fe,f(" 1. Закрыть все вкладки ресурса, кроме активной."),me,f(" 2. Обновить текущую страницу."),ge,f(" 3. Готово."),he]),_:1},512)}}}),be={class:"c-notification"},ke={key:0,class:"c-notification__item-title"},Ce={class:"c-notification__item-body"},Se=["onClick"],xe=x({__name:"CNotification",props:{appendToBody:Boolean},setup(B){const l=D(),i=n=>{if(n.title)return n.title;switch(n.type){case"success":return"Успешно";case"error":return"Ошибка";case"info":return"Информация";case"warning":return"Внимание";default:return n.title}};return(n,m)=>{const g=z;return d(),$(g,null,{default:r(()=>[a("div",be,[c(Z,{tag:"ul",class:"c-notification__list",name:"c-notification__item-"},{default:r(()=>[(d(!0),b(J,null,Q(y(l).items,t=>(d(),b("li",{key:t.id,class:W(["c-notification__item",[t.type?"c-notification__item--"+t.type:""]])},[t.title||t.type?(d(),b("div",ke,w(i(t)),1)):U("",!0),a("div",Ce,w(t.message),1),a("button",{class:"c-notification__item-close",onClick:s=>y(l).remove(t)},null,8,Se)],2))),128))]),_:1})])]),_:1})}}}),$e={class:"layout"},Fe=x({__name:"default",setup(B){const l=X(),i=ne(),n=se(),m=ce(),g=D(),t=ae(),s=k(null),v=k(null),_=M(()=>n.isTablet||i.isTablet||i.isMobile);{const e=h.url.getUser();e&&(h.storage.setUser(e),history.replaceState(null,document.title,location.pathname),p(e))}Y(()=>l.fullPath,async(e,o)=>{e!==o&&(await u(),t.toggleMainSearch(!1))}),ee(()=>{var e,o;t.mainSearchOpened?(e=s.value)==null||e.doOpen():(o=s.value)==null||o.doClose()}),I(()=>{n.init(),C();const e=h.storage.getUser();e&&m.setUser({accountId:Number(e.account_id),name:e.nickname})}),N.request.onError=({error:e})=>{(e==null?void 0:e.message)==="INVALID_ACCESS_TOKEN"&&(S.auth.logout(),m.resetUser(),h.storage.removeUser(),location.assign("/"))};async function p(e){try{await S.auth.login({id:e.account_id,token:e.access_token,expiresAt:new Date(+e.expires_at*1e3).toISOString()}),await S.user.set({id:e.account_id,name:e.nickname})}catch(o){console.error(o),await N.auth.logout()}}async function u(){const e=h.storage.getUser();if(e)try{await S.user.action({id:e.account_id})}catch(o){g.add({type:"error",title:"Действие пользователя",message:"[SELF API] "+(o instanceof Error?o.message:"Неизвестная ошибка")}),console.error(o)}}async function C(){const e=await h.indexedDB.getInstance();e.onBlocked=()=>{var o;return(o=v.value)==null?void 0:o.open()}}return(e,o)=>{const V=j,A=ue,O=ve,F=G,L=E,P=xe;return d(),b("div",$e,[c(V),c(A),c(O,{ref_key:"updateDBRef",ref:v},null,512),y(_)?(d(),$(L,{key:0,ref_key:"searchDialogRef",ref:s,title:"Поиск аккаунтов и кланов",width:"480px",position:"top",onClose:o[0]||(o[0]=Be=>y(t).toggleMainSearch(!1))},{default:r(()=>[c(F,{style:{height:"270px"}})]),_:1},512)):U("",!0),c(P)])}}});export{Fe as default};