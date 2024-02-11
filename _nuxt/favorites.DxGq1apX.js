import{_ as z}from"./CImage.vue.CvwyBujS.js";import{_ as D}from"./nuxt-link.BmjxKRKG.js";import{u as T,_ as j,a as V}from"./disableScroll.DYMxvxot.js";import{_ as q}from"./TablePagination.vue.BZ-wrSe6.js";import{_ as A}from"./CTable.vue.DunflFFB.js";import{_ as O}from"./ContentLoader.vue.5R4WWV0u.js";import{n as P}from"./notEmpty.BxBPJGBn.js";import{f as R,n as m,i as L,q as M,c as d,a as c,b as s,w as i,k as r,s as p,o as _,j as U,t as f,F as w,d as G}from"./entry.C5iIeEMf.js";import{a as H,s as g}from"./request.CetvaxyE.js";import"./image-broken.O8TKxjfx.js";import"./nuxt-icon.BveY_ybo.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";const J={class:"clan-favorites-page"},K=c("div",{class:"clan-favorites-page__description content-area",style:{"max-width":"800px"}},[c("p",null,' Список кланов добавленных в "Избранные". Данные хранятся в браузере. '),c("p",null,' Добавить в избранное, можно нажав "Звёздочку" превью на странице клана. ')],-1),Q={class:"clan-favorites-page__inner"},W={class:"clan-favorites-page__name"},ma=R({__name:"favorites",setup(X){const u=T(),e=m({clans:[],favoritesIds:null,loading:0}),o=m({total:0,page:1,pageSize:100}),v=[{key:"tag",label:"Название"},{key:"members_count",align:"center",label:"Уч-ков"},{key:"updated_at",label:"Обновлён",formatter:a=>a&&typeof a=="number"?p.date.toRelativeTime(a*1e3):"---"},{key:"created_at",label:"Создан",formatter:a=>a?p.date.toDate(Number(a)*1e3):"---"},{key:"actions",width:60}],h=L(()=>{const a=o.page*o.pageSize,t=a-o.pageSize;return(e.favoritesIds??[]).slice(t,a)});M(()=>{l()});function y(a){return`https://wotblitz-gc.gcdn.co/icons/clanEmblems1x/clan-icon-v2-${a}.png`}async function b(a){e.loading++;try{const{data:t}=await H.clan.getInfo({clan_id:a.join(",")});e.clans=Object.values(t).filter(P)??[]}catch(t){console.error(t),u.add({type:"error",title:"Получение данных клана",message:t instanceof Error?t.message:"Неизвестная ошибка"})}e.loading--}async function k(){const a=await g.indexedDB.clansFavorites.getAll();e.favoritesIds=(a??[]).filter(t=>t.isFavorite).map(t=>t.id),o.total=e.favoritesIds.length}async function l(){var a;e.favoritesIds||await k(),(a=e.favoritesIds)!=null&&a.length&&await b(h.value)}async function x(a){await g.indexedDB.clansFavorites.remove(a),e.clans.length<o.total?e.clans=e.clans.filter(t=>t.clan_id!==a):await l()}async function C(){await l()}return(a,t)=>{const I=z,B=D,$=j,S=V,E=q,F=A,N=O;return _(),d("div",J,[K,c("div",Q,[s(F,{"no-wrap":"","scroll-to-top":"","scroll-auto-disabling":"",headers:v,data:r(e).clans,height:"calc(100vh - 112px)"},{tag:i(({row:n})=>[n!=null&&n.tag&&(n!=null&&n.name)?(_(),U(B,{key:0,class:"clan-favorites-page__details link",to:{name:"clan-id",params:{id:n.clan_id}}},{default:i(()=>[s(I,{class:"clan-favorites-page__emblem",alt:"Эмблема клана",src:y(n.emblem_set_id)},null,8,["src"]),c("span",W," ["+f(n.tag)+"] "+f(n.name),1)]),_:2},1032,["to"])):(_(),d(w,{key:1},[G(" Удалён ")],64))]),actions:i(({row:n})=>[s(S,{title:"Удалить","is-text":"","is-square":"",onClick:Y=>x(n.clan_id)},{default:i(()=>[s($,{"icon-name":"delete"})]),_:2},1032,["onClick"])]),footer:i(()=>[s(E,{pagination:r(o),onChange:C},null,8,["pagination"])]),_:1},8,["data"]),s(N,{loading:r(e).loading>0},null,8,["loading"])])])}}});export{ma as default};