import{h as u,_ as N}from"./BQaFixBN.js";import{_ as z}from"./DcLHZll-.js";import{_ as T}from"./Bzs-z8zA.js";import{_ as j}from"./BcoL5P8V.js";import{a as L,s as g,_ as V}from"./BHA4Nd6Z.js";import{f as q,u as A,n as _,i as F,q as P,c as h,a as m,b as c,w as i,k as r,s as k,o as p,j as R,t as y,C as U,D as G,F as H,d as M}from"./Dfk_Fzw6.js";import{n as O}from"./BxBPJGBn.js";import{_ as W}from"./DDaHkhwB.js";import{_ as J}from"./ShJ_6ErJ.js";import"./Dn-2mSTs.js";import"./CcfJZxZN.js";import"./CtnZGq4p.js";import"./DlAUqK2U.js";const K={class:"clan-tracked-page"},Q=m("div",{class:"clan-tracked__description content-area",style:{"max-width":"800px"}},[m("p",null,"Список кланов, отслеживаемых в конкретном браузере."),m("p",null," Отслеживание начинается с момента просмотра клана на данном ресурсе. После удаления из списка - отслеживание прекращается. ")],-1),X={class:"clan-tracked-page__inner"},Y={class:"clan-tracked-page__name"},pa=q({__name:"tracked",setup(Z){A({title:"Отслеживаемые / Кланы"});const t=_({items:[],clans:[],localClans:null,loading:0}),l=_({total:0,page:1,pageSize:100}),b=_({order:"desc",prop:"updated_at"}),C=[{key:"tag",label:"Название"},{key:"members_count",align:"center",label:"Уч-ков"},{key:"updated_at",label:"Обновлён",formatter:a=>a&&typeof a=="number"?k.date.toRelativeTime(a*1e3):"---"},{key:"created_at",label:"Создан",formatter:a=>a?k.date.toDate(Number(a)*1e3):"---"},{key:"actions",width:60}],f=F(()=>{const a=l.page*l.pageSize,n=a-l.pageSize;return(t.localClans??[]).slice(n,a)});P(()=>{d()});async function x(a){t.loading++;let n=[];try{const{data:s}=await L.clan.getInfo({clan_id:a.join(",")});n=Object.values(s).filter(O)??[]}catch(s){u(s,{title:"Получение данных клана"})}return t.loading--,n}async function v(){t.loading++;try{const a=await g.indexedDB.clansInfo.getAll();t.localClans=(a??[]).map(n=>n.data),l.total=t.localClans.length}catch(a){u(a,{title:"Получение локальных данных клана"})}t.loading--}function B(a){t.items=f.value.map(n=>a.find(o=>(o==null?void 0:o.clan_id)===n.clan_id)??{...n,updated_at:0,created_at:0,members_count:0,notExists:!0})}async function d(){var s;if(t.localClans||await v(),!((s=t.localClans)!=null&&s.length))return;const a=f.value.map(o=>o.clan_id),n=await x(a);B(n)}async function E(a){await g.indexedDB.clansInfo.remove(a),t.items.length<l.total?t.items=t.items.filter(n=>n.clan_id!==a):await d()}async function $(){await d()}return(a,n)=>{const s=N,o=z,D=T,I=j,S=V;return p(),h("div",K,[Q,m("div",X,[c(I,{"no-wrap":"","scroll-to-top":"","scroll-auto-disabling":"",headers:C,data:r(t).items,"default-sort":r(b),height:"calc(100vh - 112px)"},{tag:i(({row:e})=>[e!=null&&e.tag&&(e!=null&&e.name)?(p(),R(G(e.notExists?"span":r(W)),{key:0,class:U([[e.notExists?"":"link"],"clan-tracked-page__details"]),to:{name:"clan-id",params:{id:e.clan_id}}},{default:i(()=>[c(J,{class:"clan-tracked-page__emblem",alt:e.tag,emblem:e.emblem_set_id},null,8,["alt","emblem"]),m("span",Y," ["+y(e.tag)+"] "+y(e.name),1)]),_:2},1032,["class","to"])):(p(),h(H,{key:1},[M(" Удалён ")],64))]),actions:i(({row:e})=>[c(o,{title:"Удалить","is-text":"","is-square":"",onClick:w=>E(e.clan_id)},{default:i(()=>[c(s,{name:"delete"})]),_:2},1032,["onClick"])]),footer:i(()=>[c(D,{pagination:r(l),onChange:$},null,8,["pagination"])]),_:1},8,["data","default-sort"]),c(S,{loading:r(t).loading>0},null,8,["loading"])])])}}});export{pa as default};