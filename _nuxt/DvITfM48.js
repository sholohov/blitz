import{_ as T}from"./CX4hQkTI.js";import{d as D,u as m,a as E,b as j,l as p,e as z,m as A,n as R,p as V,o as _,q as f,s as l,j as i,w as c,g as d,_ as q,y as H,f as P,v as g,F as U,t as G,x as u}from"./BytUdlbn.js";import{_ as L}from"./B2Mn_ris.js";import{_ as M}from"./Bt0MSxaA.js";import{_ as O}from"./D4jFUD0b.js";import{c as J}from"./B4FMxlHh.js";import{n as K}from"./BxBPJGBn.js";import{_ as Q}from"./HxHq1sF7.js";import"./DD4asW33.js";import"./BrvVNMDf.js";import"./bM0fVfPW.js";import"./DSr_Q9T0.js";import"./DlAUqK2U.js";const W={class:"clan-favorites-page"},X={class:"clan-favorites-page__inner"},Y={class:"clan-favorites-page__name"},pa=D({__name:"favorites",setup(Z){const{$formatter:v}=m(),y=E();j({title:()=>v.route.getTitle(J.toString(y.name)??"")});const t=p({clans:[],favoritesIds:null,loading:0}),o=p({total:0,page:1,pageSize:100}),h=[{key:"tag",label:"Название"},{key:"members_count",align:"center",label:"Уч-ков"},{key:"updated_at",label:"Обновлён",formatter:a=>a&&typeof a=="number"?u.date.toRelativeTime(a*1e3):"---"},{key:"created_at",label:"Создан",formatter:a=>a?u.date.toDate(Number(a)*1e3):"---"},{key:"actions",width:60}],b=z(()=>{const a=o.page*o.pageSize,n=a-o.pageSize;return(t.favoritesIds??[]).slice(n,a)});A(()=>{r()});async function k(a){t.loading++;try{const{data:n}=await R.clan.getInfo({clan_id:a.join(",")});t.clans=Object.values(n).filter(K)??[]}catch(n){V(n,{title:"Получение данных клана"})}t.loading--}async function x(){const{$indexedDB:a}=m(),n=await a.clansFavorites.getAll();t.favoritesIds=(n??[]).filter(s=>s.isFavorite).map(s=>s.id),o.total=t.favoritesIds.length}async function r(){var a;t.favoritesIds||await x(),(a=t.favoritesIds)!=null&&a.length&&await k(b.value)}async function I(a){const{$indexedDB:n}=m();await n.clansFavorites.remove(a),t.clans.length<o.total?t.clans=t.clans.filter(s=>s.clan_id!==a):await r()}async function $(){await r()}return(a,n)=>{const s=T,B=H,C=q,S=L,F=M,N=O;return _(),f("div",W,[n[0]||(n[0]=l("div",{class:"clan-favorites-page__description content-area",style:{"max-width":"800px"}},[l("p",null,' Список кланов добавленных в "Избранные". Данные хранятся в браузере. '),l("p",null,' Добавить в избранное, можно нажав "Звёздочку" превью на странице клана. ')],-1)),l("div",X,[i(F,{"no-wrap":"","scroll-to-top":"","scroll-auto-disabling":"",headers:h,data:d(t).clans,height:"calc(100vh - 112px)"},{tag:c(({row:e})=>[e!=null&&e.tag&&(e!=null&&e.name)?(_(),P(s,{key:0,class:"clan-favorites-page__details link",to:{name:"clan-id",params:{id:e.clan_id}}},{default:c(()=>[i(Q,{class:"clan-favorites-page__emblem",alt:e.tag,emblem:e.emblem_set_id},null,8,["alt","emblem"]),l("span",Y," ["+g(e.tag)+"] "+g(e.name),1)]),_:2},1032,["to"])):(_(),f(U,{key:1},[G(" Удалён ")],64))]),actions:c(({row:e})=>[i(C,{title:"Удалить","is-text":"","is-square":"",onClick:w=>I(e.clan_id)},{default:c(()=>[i(B,{name:"delete"})]),_:2},1032,["onClick"])]),footer:c(()=>[i(S,{pagination:d(o),onChange:$},null,8,["pagination"])]),_:1},8,["data"]),i(N,{loading:d(t).loading>0},null,8,["loading"])])])}}});export{pa as default};
