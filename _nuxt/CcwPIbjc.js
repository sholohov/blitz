import{d as N,u as z,k as _,c as T,l as A,m as g,n as i,h as c,w as r,f as d,p as f,q as L,s as k,x as y,o as p,e as V,v as h,I as j,J as q,F,t as H,_ as P,y as R}from"./CjZrE5Wh.js";import{_ as U}from"./CrA9g0iF.js";import{_ as G}from"./Bx2A0I5R.js";import{_ as J}from"./Cb74_AAG.js";import{n as M}from"./BxBPJGBn.js";import{_ as O}from"./DVWFMday.js";import{_ as K}from"./Ce3nYSQl.js";import"./DD4asW33.js";import"./Bn1JX7hh.js";import"./i0sd772w.js";import"./BBnSm2t4.js";import"./DlAUqK2U.js";const Q={class:"clan-tracked-page"},W={class:"clan-tracked-page__inner"},X={class:"clan-tracked-page__name"},ma=N({__name:"tracked",setup(Y){z({title:"Отслеживаемые / Кланы"});const e=_({items:[],clans:[],localClans:null,loading:0}),o=_({total:0,page:1,pageSize:100}),b=_({order:"desc",prop:"updated_at"}),C=[{key:"tag",label:"Название"},{key:"members_count",align:"center",label:"Уч-ков"},{key:"updated_at",label:"Обновлён",formatter:a=>a&&typeof a=="number"?f.date.toRelativeTime(a*1e3):"---"},{key:"created_at",label:"Создан",formatter:a=>a?f.date.toDate(Number(a)*1e3):"---"},{key:"actions",width:60}],u=T(()=>{const a=o.page*o.pageSize,t=a-o.pageSize;return(e.localClans??[]).slice(t,a)});A(()=>{m()});async function x(a){e.loading++;let t=[];try{const{data:s}=await L.clan.getInfo({clan_id:a.join(",")});t=Object.values(s).filter(M)??[]}catch(s){k(s,{title:"Получение данных клана"})}return e.loading--,t}async function v(){e.loading++;try{const{$indexedDB:a}=y(),t=await a.clansInfo.getAll();e.localClans=(t??[]).map(s=>s.data),o.total=e.localClans.length}catch(a){k(a,{title:"Получение локальных данных клана"})}e.loading--}function $(a){e.items=u.value.map(t=>a.find(l=>(l==null?void 0:l.clan_id)===t.clan_id)??{...t,updated_at:0,created_at:0,members_count:0,notExists:!0})}async function m(){var s;if(e.localClans||await v(),!((s=e.localClans)!=null&&s.length))return;const a=u.value.map(l=>l.clan_id),t=await x(a);$(t)}async function B(a){const{$indexedDB:t}=y();await t.clansInfo.remove(a),e.items.length<o.total?e.items=e.items.filter(s=>s.clan_id!==a):await m()}async function E(){await m()}return(a,t)=>{const s=P,l=R,I=U,S=G,D=J;return p(),g("div",Q,[t[0]||(t[0]=i("div",{class:"clan-tracked__description content-area",style:{"max-width":"800px"}},[i("p",null,"Список кланов, отслеживаемых в конкретном браузере."),i("p",null," Отслеживание начинается с момента просмотра клана на данном ресурсе. После удаления из списка - отслеживание прекращается. ")],-1)),i("div",W,[c(S,{"no-wrap":"","scroll-to-top":"","scroll-auto-disabling":"",headers:C,data:d(e).items,"default-sort":d(b),height:"calc(100vh - 112px)"},{tag:r(({row:n})=>[n!=null&&n.tag&&(n!=null&&n.name)?(p(),V(q(n.notExists?"span":d(O)),{key:0,class:j([[n.notExists?"":"link"],"clan-tracked-page__details"]),to:{name:"clan-id",params:{id:n.clan_id}}},{default:r(()=>[c(K,{class:"clan-tracked-page__emblem",alt:n.tag,emblem:n.emblem_set_id},null,8,["alt","emblem"]),i("span",X," ["+h(n.tag)+"] "+h(n.name),1)]),_:2},1032,["class","to"])):(p(),g(F,{key:1},[H(" Удалён ")],64))]),actions:r(({row:n})=>[c(l,{title:"Удалить","is-text":"","is-square":"",onClick:Z=>B(n.clan_id)},{default:r(()=>[c(s,{name:"delete"})]),_:2},1032,["onClick"])]),footer:r(()=>[c(I,{pagination:d(o),onChange:E},null,8,["pagination"])]),_:1},8,["data","default-sort"]),c(D,{loading:d(e).loading>0},null,8,["loading"])])])}}});export{ma as default};