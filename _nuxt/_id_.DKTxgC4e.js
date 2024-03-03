import{_ as L,a as H,u as ie,h as q}from"./disableScroll.BsGCYrkf.js";import{_ as W}from"./nuxt-link.BmiB8yFf.js";import{_ as te}from"./UiDialog.vue.D81x2SMr.js";import{f as j,r as G,i as S,o as u,c as h,a as t,b as _,w as f,k as c,C as Z,t as o,d as m,F as O,A as z,m as A,j as P,D as oe,E as J,_ as K,n as V,q as ae,G as ce,s as Q,u as re,g as _e,H as de,I as ue}from"./entry.Bm-llWz1.js";import{s as E,_ as ne,a as U}from"./request.CU-8ZD0i.js";import{c as me,m as pe,_ as ve}from"./index.BSa98ZfB.js";import{_ as fe}from"./ClanEmblem.vue.HddQ_11R.js";import{_ as he}from"./PageSection.vue.B8sPfSqh.js";import{_ as be}from"./UiInput.vue.CFT_pDMS.js";import{_ as ge}from"./UiSelect.vue.CChtO11c.js";import{f as R}from"./index.7vZybl1X.js";import{_ as we}from"./RoleIcon.vue.DnOK6lDo.js";import{_ as ye}from"./WinRate.vue.BQAjquz-.js";import{_ as $e,m as X}from"./RatingIcon.vue.Ol0I3glb.js";import{_ as ke}from"./UiTable.vue.Bd0s4Rz5.js";import{s as T}from"./index.Cra1aU8X.js";import{n as Ce}from"./notEmpty.BxBPJGBn.js";import{c as Y}from"./cloneDeep.BNfpnd7q.js";import{a as De}from"./index.sjA9RjdT.js";import"./UiImage.vue.Cf9qJ5Fc.js";import"./image-broken.DkiNmB-Q.js";import"./nuxt-icon.CC_2cq_E.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./index.CeO3w1EJ.js";import"./isArrayLike.qcTCkieX.js";const Ie={class:"clan-events"},xe={class:"clan-events__inner"},Be={class:"clan-events__count"},Ae={class:"clan-events__prop"},Pe=t("span",{class:"clan-events__prop-title"}," События от ",-1),Se={key:0,class:"clan-events__prop"},je={class:"clan-events__prop-title"},Re={key:1,class:"clan-events__prop"},Fe={class:"clan-events__prop-title"},Me={key:2},Ee={style:{display:"flex","justify-content":"space-between"}},Oe=t("div",null,null,-1),qe=j({__name:"ClanEvents",props:{savedAt:{type:Number,default:0,required:!0},clan:{type:Object,default:()=>({}),required:!0},savedClan:{type:Object,default:()=>({}),required:!0}},emits:["reset"],setup(n,{emit:p}){const e=n,d=G(null),v=S(()=>{const l=e.clan.members_ids??[],b=e.savedClan.members??[];return Object.values(b).filter(w=>!l.includes(w.account_id))}),g=S(()=>{var w,k;const l=((w=e.clan)==null?void 0:w.members)??[],b=((k=e.savedClan)==null?void 0:k.members_ids)??[];return Object.values(l).filter(I=>!b.includes(I.account_id))}),y=S(()=>g.value.length+v.value.length),D=p;function $(){var l;D("reset"),(l=d.value)==null||l.doClose()}function s(){var l;(l=d.value)==null||l.doOpen()}function i(){var l;(l=d.value)==null||l.doClose()}return(l,b)=>{const w=L,k=H,I=W,F=te;return u(),h("div",Ie,[t("div",xe,[_(k,{disabled:!c(y),class:Z(["clan-events__btn",[c(y)?"clan-events__btn--has-unread":""]]),"is-text":"","is-square":"",title:"События клана",onClick:s},{default:f(()=>[_(w,{name:"mail"})]),_:1},8,["disabled","class"]),t("div",Be,o(c(y)>99?"99+":c(y)),1)]),_(F,{ref_key:"dialogRef",ref:d,width:"640px",title:"События клана"},{title:f(()=>[t("div",Ae,[Pe,m(" "+o(l.$formatter.date.toDateTime(n.savedAt))+" ("+o(l.$formatter.date.toDaysPassed(n.savedAt,Date.now()))+") ",1)])]),footer:f(()=>[t("div",Ee,[Oe,t("div",null,[_(k,{onClick:$},{default:f(()=>[m(" Прочитано ")]),_:1}),_(k,{onClick:i},{default:f(()=>[m(" Закрыть ")]),_:1})])])]),default:f(()=>[c(v).length?(u(),h("div",Se,[t("span",je," Покинули ("+o(c(v).length)+") ",1),(u(!0),h(O,null,z(c(v),(a,r)=>(u(),h("span",{key:a.account_id,class:"clan-events__prop-value"},[_(I,{to:{name:"account-id",params:{id:a.account_id}},class:"link"},{default:f(()=>[m(o(a.account_name),1)]),_:2},1032,["to"]),m(o(r+1!==c(v).length?", ":""),1)]))),128))])):A("",!0),c(g).length?(u(),h("div",Re,[t("span",Fe," Вступили ("+o(c(g).length)+") ",1),(u(!0),h(O,null,z(c(g),(a,r)=>(u(),h("span",{key:a.account_id,class:"clan-events__prop-value"},[_(I,{to:{name:"account-id",params:{id:a.account_id}},class:"link"},{default:f(()=>[m(o(a.account_name),1)]),_:2},1032,["to"]),m(o(r+1!==c(g).length?", ":""),1)]))),128))])):A("",!0),c(y)?A("",!0):(u(),h("span",Me," Пока всё тихо ... "))]),_:1},512)])}}}),Te={class:"social-links"},Ve={class:"social-links__links"},Le=["href","title"],Ne=j({__name:"SocialLinks",props:{links:{type:Array,default:()=>[],required:!0}},setup(n){return(p,e)=>(u(),h("div",Te,[t("div",Ve,[(u(!0),h(O,null,z(n.links,d=>(u(),h("a",{key:d.link,class:"link social-links__links-item",href:d.link,target:"_blank",title:d.title},[(u(),P(oe(d.icon)))],8,Le))),128))])]))}}),Ue=/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z|0-9]/gi,ze=/(https?:\/\/)?(www\.)?((t|telegram)\.me)\/\+?[a-zA-Z0-9_]{5,32}/gi,He=n=>{const p=[],e=n.match(Ue),d=n.match(ze);return e!=null&&e.length&&p.push({title:"Discord",icon:J(()=>K(()=>import("./discord.CovoCbjo.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)),link:e[0]}),d!=null&&d.length&&p.push({title:"Telegram",icon:J(()=>K(()=>import("./telegram.DipKuGly.js"),__vite__mapDeps([5,1,2,3,4]),import.meta.url)),link:d[0]}),p},We={class:"clan-preview-details__body"},Ge={key:0,class:"clan-preview-details__section"},Ze={class:"clan-preview-details__props-title"},Je={class:"clan-preview-details__section"},Ke={class:"clan-preview-details__props-title"},Qe=["textContent"],Xe={key:1,class:"clan-preview-details__section"},Ye={class:"clan-preview-details__props-title"},et={class:"clan-preview-details__props"},tt={class:"clan-preview-details__prop"},at=t("span",{class:"clan-preview-details__prop-title"}," Создатель ",-1),nt={class:"clan-preview-details__prop"},st=t("span",{class:"clan-preview-details__prop-title"}," Дата создания ",-1),lt={class:"clan-preview-details__prop"},it=t("span",{class:"clan-preview-details__prop-title"}," Дата обновления ",-1),ot={class:"clan-preview-details__prop"},ct=t("span",{class:"clan-preview-details__prop-title"}," Участников ",-1),rt={key:0,class:"clan-preview-details__prop"},_t=t("span",{class:"clan-preview-details__prop-title"}," Старое название ",-1),dt={class:"clan-preview-details__section"},ut={class:"clan-preview-details__props-title"},mt={class:"clan-preview-details__props"},pt={class:"clan-preview-details__prop"},vt=t("span",{class:"clan-preview-details__prop-title"}," Политика приёма. ",-1),ft=t("div",{class:"clan-preview-details__props-subtitle"}," Пороги статистики для вступления: ",-1),ht={class:"clan-preview-details__prop"},bt=t("span",{class:"clan-preview-details__prop-title"}," Боёв в день ",-1),gt={class:"clan-preview-details__prop"},wt=t("span",{class:"clan-preview-details__prop-title"}," Боёв всего ",-1),yt={class:"clan-preview-details__prop"},$t=t("span",{class:"clan-preview-details__prop-title"}," Урон ср. ",-1),kt={class:"clan-preview-details__prop"},Ct=t("span",{class:"clan-preview-details__prop-title"}," Уровень ",-1),Dt={class:"clan-preview-details__prop"},It=t("span",{class:"clan-preview-details__prop-title"}," Побед ",-1),xt={style:{display:"flex","justify-content":"space-between"}},Bt=j({__name:"ClanPreviewDetails",props:{clan:{type:Object,default:()=>({}),required:!0}},setup(n,{expose:p}){const e=n,d=G(null),v=V({descExpended:!1}),g=S(()=>He(e.clan.description??""));function y(){var s;(s=d.value)==null||s.doOpen()}function D(){var s;(s=d.value)==null||s.doClose()}function $(){v.descExpended=!v.descExpended}return p({open:y,close:D}),(s,i)=>{const l=L,b=H,w=W,k=Ne,I=te;return u(),P(I,{ref_key:"clanDetailsRef",ref:d,class:"clan-preview-details",title:`[${n.clan.tag}] ${n.clan.name}`,width:"640px"},{footer:f(()=>[t("div",xt,[c(g).length?(u(),P(k,{key:0,class:"clan-preview-details__links",links:c(g)},null,8,["links"])):A("",!0),_(b,{onClick:D},{default:f(()=>[m(" Закрыть ")]),_:1})])]),default:f(()=>[t("div",We,[n.clan.motto?(u(),h("div",Ge,[t("h5",Ze,[_(l,{class:"clan-preview-details__prop-title-icon",name:"format-quote"}),m(" Девиз ")]),t("i",null,o(n.clan.motto),1)])):A("",!0),t("div",Je,[t("h5",Ke,[_(l,{class:"clan-preview-details__prop-title-icon",name:"description"}),m(" Описание ")]),n.clan.description?(u(),h("div",{key:0,class:Z(["content-area clan-preview-details__desc",c(v).descExpended?"clan-preview-details__desc--expended":""]),textContent:o(n.clan.description)},null,10,Qe)):A("",!0),_(b,{"is-text":"",class:"clan-preview-details__desc-expend-btn",onClick:$},{default:f(()=>[m(o(c(v).descExpended?"Свернуть":"Развернуть"),1)]),_:1})]),n.clan.motto?(u(),h("div",Xe,[t("h5",Ye,[_(l,{class:"clan-preview-details__prop-title-icon",name:"info"}),m(" Информация ")]),t("div",et,[t("div",tt,[at,n.clan.creator_id?(u(),P(w,{key:0,class:"link",to:n.clan.creator_id?{name:"account-id",params:{id:n.clan.creator_id}}:{}},{default:f(()=>[m(o(n.clan.creator_name),1)]),_:1},8,["to"])):(u(),h(O,{key:1},[m(" Не известен ")],64))]),t("div",nt,[st,m(" "+o(s.$formatter.date.toDate(n.clan.created_at*1e3)),1)]),t("div",lt,[it,m(" "+o(s.$formatter.date.toDate(n.clan.updated_at*1e3)),1)]),t("div",ot,[ct,m(" "+o(s.$formatter.number.toInteger(n.clan.members_count)),1)]),n.clan.old_tag?(u(),h("div",rt,[_t,m(" ["+o(n.clan.old_tag)+"] "+o(n.clan.old_name),1)])):A("",!0)])])):A("",!0),t("div",dt,[t("h5",ut,[_(l,{class:"clan-preview-details__prop-title-icon",name:"person-search"}),m(" Рекрутинг ")]),t("div",mt,[t("div",pt,[vt,m(" "+o(s.$formatter.clan.recruitingPolicy(n.clan.recruiting_policy))+". ",1)]),n.clan.recruiting_policy==="open"&&n.clan.recruiting_options?(u(),h(O,{key:0},[ft,t("div",ht,[bt,m(" "+o(s.$formatter.number.toInteger(n.clan.recruiting_options.average_battles_per_day)),1)]),t("div",gt,[wt,m(" "+o(s.$formatter.number.toInteger(n.clan.recruiting_options.battles)),1)]),t("div",yt,[$t,m(" "+o(s.$formatter.number.toInteger(n.clan.recruiting_options.average_damage)),1)]),t("div",kt,[Ct,m(" "+o(s.$formatter.number.toInteger(n.clan.recruiting_options.vehicles_level)),1)]),t("div",Dt,[It,m(" "+o(s.$formatter.number.toInteger(n.clan.recruiting_options.wins_ratio))+"% ",1)])],64)):A("",!0)])])])]),_:1},8,["title"])}}}),At={class:"clan-preview"},Pt={class:"clan-preview__inner"},St={class:"clan-preview__emblem"},jt={class:"clan-preview__info"},Rt={class:"clan-preview__title"},Ft={class:"clan-preview__tag"},Mt={class:"clan-preview__name"},Et={class:"clan-preview__props"},Ot={class:"clan-preview__prop"},qt=t("span",{class:"clan-preview__prop-title"}," Участников ",-1),Tt={class:"clan-preview__prop-value"},Vt={class:"clan-preview__prop"},Lt=t("span",{class:"clan-preview__prop-title"}," События ",-1),Nt={class:"clan-preview__prop-value"},Ut={class:"clan-preview__actions"},zt=j({__name:"ClanPreview",props:{clan:{type:Object,default:()=>({}),required:!0},hideDescription:{type:[Boolean,String],default:!1},loading:{type:Boolean,default:!1}},setup(n){const p=n,e=G(null),d=ie(),v=V({isFavorite:!1});ae(()=>{g()});async function g(){const i=await E.indexedDB.clansFavorites.get(p.clan.clan_id);v.isFavorite=i?i==null?void 0:i.isFavorite:!1}async function y(){p.clan&&(v.isFavorite=!v.isFavorite,await E.indexedDB.clansFavorites.set(p.clan.clan_id,{id:p.clan.clan_id,isFavorite:v.isFavorite}))}async function D(){await me(`${p.clan.tag}/${p.clan.clan_id}`)?d.add({type:"success",title:"Скопировано",message:`${p.clan.tag}/${p.clan.clan_id}`,duration:3e3}):d.add({type:"error",message:"Клан копировании что-то пошло не так",duration:3e3})}function $(){var i;(i=e.value)==null||i.open()}function s(){y()}return(i,l)=>{const b=L,w=H,k=ne,I=Bt;return u(),h("div",At,[t("div",Pt,[t("div",St,[_(fe,{class:"clan-preview__emblem-img",alt:n.clan.name,emblem:n.clan.emblem_set_id},null,8,["alt","emblem"])]),t("div",jt,[t("div",Rt,[t("span",Ft,"["+o(n.clan.tag??"...")+"]",1),t("span",Mt,o(n.clan.name??"..."),1)]),t("div",Et,[t("div",Ot,[qt,t("span",Tt,o(n.clan.members_count??"---"),1)]),t("div",Vt,[Lt,t("span",Nt,[ce(i.$slots,"events")])])])]),t("div",Ut,[_(w,{"is-text":"",class:"clan-preview__actions-btn",title:"Копировать (nickname/ID)",onClick:D},{default:f(()=>[_(b,{name:"content-copy"})]),_:1}),_(w,{"is-text":"",class:"clan-preview__actions-btn",title:"Добавить в избранные",onClick:s},{default:f(()=>[c(v).isFavorite?(u(),P(b,{key:0,name:"star"})):(u(),P(b,{key:1,name:"star-border"}))]),_:1}),_(w,{"is-text":"",class:"clan-preview__actions-btn",title:"Полная информация",onClick:$},{default:f(()=>[_(b,{name:"info"})]),_:1})])]),_(k,{loading:n.loading},null,8,["loading"]),_(I,{ref_key:"previewDetailsRef",ref:e,clan:n.clan},null,8,["clan"])])}}}),Ht={class:"clan-view-filters"},Wt={class:"clan-view-filters__list"},Gt={class:"clan-view-filters__item clan-view-filters__item--search"},Zt=t("div",{class:"clan-view-filters__item-title"}," Поиск в клане ",-1),Jt={class:"clan-view-filters__item"},Kt=t("div",{class:"clan-view-filters__item-title"}," Дней в клане ",-1),Qt={class:"clan-view-filters__item"},Xt=t("div",{class:"clan-view-filters__item-title"}," Дней отсутствовал ",-1),Yt=j({__name:"ClanViewFilter",props:{filters:{type:Object,required:!0,default:R.makeClanFilters}},emits:["filters-change"],setup(n,{emit:p}){const e=n,d=[{value:null,label:"Не выбрано"},{value:"<3",label:"Меньше чем 3"},{value:"<5",label:"Меньше чем 5"},{value:"<7",label:"Меньше чем 7"},{value:">3",label:"Больше чем 3"},{value:">5",label:"Больше чем 5"},{value:">7",label:"Больше чем 7"}],v=[{value:null,label:"Не выбрано"},{value:"<1",label:"Меньше чем 1"},{value:"<3",label:"Меньше чем 3"},{value:">3",label:"Больше чем 3"},{value:">5",label:"Больше чем 5"},{value:">7",label:"Больше чем 7"}],g=p;function y(D,$){g("filters-change",{...e.filters,[D]:$})}return(D,$)=>{const s=be,i=ge;return u(),h("div",Ht,[t("div",Wt,[t("div",Gt,[Zt,_(s,{"model-value":n.filters.search,style:{width:"100%"},placeholder:"Введите ник",type:"search","onUpdate:modelValue":$[0]||($[0]=l=>y("search",l))},null,8,["model-value"])]),t("div",Jt,[Kt,_(i,{"model-value":n.filters.joinedAtDays,style:{width:"150px"},options:d,onChange:$[1]||($[1]=l=>y("joinedAtDays",l))},null,8,["model-value"])]),t("div",Qt,[Xt,_(i,{"model-value":n.filters.lastBattleDays,style:{width:"150px"},options:v,onChange:$[2]||($[2]=l=>y("lastBattleDays",l))},null,8,["model-value"])])])])}}}),ea={class:"clan-view-table"},ta={class:"clan-view-table__total"},aa={class:"clan-view-table__total-value"},na={class:"clan-view-table__member"},sa=["title"],la={key:0,class:"clan-view-table__name clan-view-table__name--deleted"},ia={class:"clan-view-table__sub"},oa={class:"clan-view-table__sub"},ca={class:"clan-view-table__sub"},ra={class:"clan-view-table__sub"},_a={class:"clan-view-table__sub"},da={class:"clan-view-table__sub"},ua=j({__name:"ClanViewMembersTable",props:{members:{type:Array,default:()=>[],required:!0},savedMembers:{type:Array,default:()=>[],required:!0},users:{type:Array,default:()=>[],required:!0},sort:{type:Object,default:()=>({}),required:!0}},emits:["sort"],setup(n,{emit:p}){const e=n,d=p,v=[{key:"account_name",label:"Ник",sortable:!0},{key:"battles",label:"Боёв",sortable:!0,sortMethod(s,i){return s.statistic.all.battles-i.statistic.all.battles}},{key:"winRate",label:"Побед",sortable:!0,sortMethod(s,i){return s.statistic.all.winRate-i.statistic.all.winRate}},{key:"damagePerBattle",label:"Урон",sortable:!0,sortMethod(s,i){return s.statistic.all.damagePerBattle-i.statistic.all.damagePerBattle}},{key:"rating",label:"Рейтинг",sortable:!0,sortMethod(s,i){var w,k;const l=((w=s.statistic.rating)==null?void 0:w.rating)??0,b=((k=i.statistic.rating)==null?void 0:k.rating)??0;return l-b}},{key:"battlesPerDay",label:"Боёв в день",sortable:!0},{key:"last_battle_time",label:"Последний бой",sortable:!0},{key:"joined_at",label:"В клане",sortable:!0}],g=S(()=>e.members.map(s=>{const i=e.savedMembers.find(k=>k.account_id===s.account_id),l=i?T.diff(s.statistic.all,i.statistic.all):null,b=T.battlesPerDay({createAt:s.create_at*1e3,battles:s.statistic.all.battles}),w=i?T.battlesPerDay({createAt:i.create_at,battles:(l==null?void 0:l.battles)||0})-b:null;return{...s,battlesPerDay:b,battlesPerDayDiff:w,diff:l}}));function y(s){const i=e.users.find(l=>l.id===s.account_id);return i?{found:!0,online:Date.now()-new Date(i.visitedAt).valueOf()<1e3*60*5}:{found:!1,online:!1}}function D(s){const i=s;return/^del_\d+$/.test(i.account_name)||!i.last_battle_time}function $(s,i){const l=i;return l.diff?s==="winRate"?Q.number.toFloatNumber(l.diff[s],!0):Q.number.toInteger(l.diff[s],!0):"---"}return(s,i)=>{const l=we,b=L,w=W,k=ye,I=$e,F=ke;return u(),h("div",ea,[t("div",ta,[m(" Кол-во: "),t("span",aa,o(c(g).length||0),1)]),c(g)?(u(),P(F,{key:0,data:c(g),"default-sort":n.sort,headers:v,"no-wrap":"","scroll-auto-disabling":"","row-key":"account_id",height:"calc(100vh - 112px)",class:"clan-view-table__table",onSort:i[0]||(i[0]=a=>d("sort",a))},{account_name:f(({row:a})=>[t("span",na,[t("span",{class:Z(["clan-view-table__role",["clan-view-table__role--"+a.role,y(a).found?"clan-view-table__role--is-user":"",y(a).online?"clan-view-table__role--is-online":""]]),title:s.$formatter.clan.role(a.role)??"Не известна"},[a.role?(u(),P(l,{key:0,width:"18",height:"18",class:"clan-view-table__role-icon",role:a.role},null,8,["role"])):(u(),P(b,{key:1,style:{width:"16px",color:"var(--color-text-light)"},name:"close"}))],10,sa),D(a)?(u(),h("span",la,o(a.account_name),1)):(u(),P(w,{key:1,class:"link clan-view-table__name",to:{name:"account-id",params:{id:a.account_id}}},{default:f(()=>[m(o(a.account_name),1)]),_:2},1032,["to"]))])]),battles:f(({row:a})=>[m(o(a.statistic.all.battles||"---")+" ",1),t("span",ia,o($("battles",a)||"---"),1)]),winRate:f(({row:a})=>[_(k,{"model-value":a.statistic.all.winRate,class:"clan-view-table__win-rate"},null,8,["model-value"]),t("span",oa,o($("winRate",a)||"---"),1)]),rating:f(({row:a})=>[_(I,{rating:a.statistic.rating},null,8,["rating"])]),damagePerBattle:f(({row:a})=>[m(o(a.statistic.all.damagePerBattle||"---")+" ",1),t("span",ca,o($("damagePerBattle",a)),1)]),battlesPerDay:f(({row:a})=>[m(o(a.battlesPerDay||"---")+" ",1),t("span",ra,o(s.$formatter.number.toInteger(a.battlesPerDayDiff,!0)||"---"),1)]),last_battle_time:f(({row:a})=>[m(o(s.$formatter.date.toRelativeTime(a.last_battle_time*1e3)||"---")+" ",1),t("span",_a,o(s.$formatter.date.toDateTime(a.last_battle_time*1e3)||"---"),1)]),joined_at:f(({row:a})=>[m(o(s.$formatter.date.toDaysPassed(a.joined_at*1e3)||"---")+" ",1),t("span",da,o(s.$formatter.date.toDate(a.joined_at*1e3)||"---"),1)]),_:1},8,["data","default-sort"])):A("",!0)])}}}),ma=(n,p)=>{const{prop:e,order:d}=p;return d?n.toSorted((v,g)=>{const y=(d==="desc"?g:v)[e],D=(d==="desc"?v:g)[e];return String(y).localeCompare(String(D),void 0,{numeric:!0,sensitivity:"base"})}):n},pa=n=>{n.sort((p,e)=>p.joined_at-e.joined_at)},va=n=>{n.sort((p,e)=>{const d={recruit:0,private:1,executive_officer:2,commander:3};return d[e.role]-d[p.role]})},fa=n=>{pa(n),va(n)},ee={smart:ma,clanMembersDefault:fa},ha={key:0,class:"clan-page"},ba={key:1,class:"clan-page--no-data"},ga={key:0,class:"content-area"},wa=t("p",null,"Нет данных.",-1),ya=t("p",null,"Возможно клан удалён.",-1),$a=[wa,ya],Za=j({__name:"[id]",setup(n){re({title:"Инфо / Кланы"});const p=_e(),e=V({loading:0,users:[],clanInfo:null,clan:null,filters:R.makeClanFilters(),statisticsSum:null,savedMembers:[],savedClan:null,metricsItems:[],clanSavedAt:0}),d=V({order:"desc",prop:""}),v=S(()=>{var a;return((a=e.clan)==null?void 0:a.members)||[]}),g=S(()=>{let a=v.value.filter(C=>{const B=C.account_name.toLowerCase(),M=e.filters.search.toLowerCase();return B.includes(M)});const r=Date.now(),x=1e3*60*60*24;if(e.filters.joinedAtDays){const C=R.parseParameter(e.filters.joinedAtDays);a=v.value.filter(B=>R.executeExpression(r-Number(C.value)*x,B.joined_at*1e3,C.operator))}if(e.filters.lastBattleDays){const C=R.parseParameter(e.filters.lastBattleDays);a=v.value.filter(B=>R.executeExpression(r-Number(C.value)*x,B.last_battle_time*1e3,C.operator))}return a});ae(()=>{const a=+p.params.id;a&&i(a)});async function y(a){e.loading++;try{const{data:r}=await U.clan.getAccountInfo({account_id:a.join(",")});return r}catch(r){return q(r,{title:"Получение данных участников клана"}),null}finally{e.loading--}}async function D(a){e.loading++;try{const{data:r}=await U.clan.getInfo({clan_id:a});e.clanInfo=r[a]??null}catch(r){q(r,{title:"Получение данных клана"})}e.loading--}async function $(a){e.loading++;try{const{data:r}=await De.user.getList({id:a});e.users=r}catch(r){q(r,{title:"Получение данных аккаунта"})}e.loading--}async function s(a){e.loading++;try{const{data:r}=await U.account.getInfo({extra:"statistics.rating",account_id:a.join(",")});return r}catch(r){return q(r,{title:"Получение данных аккаунта"}),null}finally{e.loading--}}async function i(a){if(await D(a),!e.clanInfo)return;const r=await y(e.clanInfo.members_ids);e.clanInfo.members=r,await Promise.all([$(e.clanInfo.members_ids),l(e.clanInfo),w(e.clanInfo)]),e.savedClan||await b(e.clanInfo);const x=await s(e.clanInfo.members_ids);if(!x)return;e.clan=X.clan(e.clanInfo,x);const C=Object.values(x).filter(Ce);e.statisticsSum=C.reduce((B,M,N)=>N===0?C[0].statistics:T.sumFull(B,M.statistics),{}),e.metricsItems=pe.clan(C,e.statisticsSum),ee.clanMembersDefault(v.value)}async function l(a){e.loading++;const r=[];for(const x in a.members){const C=await E.indexedDB.accountsInfo.get(x);C&&(C.data.created_at=C.timestamp,r.push(X.clanMember(a.members[x],C.data)))}e.savedMembers=r,e.loading--}async function b(a){e.loading++,await E.indexedDB.clansInfo.set(a.clan_id,de(a)),e.savedClan=Y(a),e.clanSavedAt=Date.now(),e.loading--}async function w(a){e.loading++;const r=await E.indexedDB.clansInfo.get(a.clan_id);e.savedClan=(r==null?void 0:r.data)??null,e.clanSavedAt=(r==null?void 0:r.timestamp)??0,e.loading--}function k(a){a.order||ee.clanMembersDefault(v.value)}async function I(){e.clanInfo&&await b(e.clanInfo)}function F(a){e.filters=Y(a)}return(a,r)=>{const x=qe,C=zt,B=he,M=ve,N=Yt,se=ua,le=ne;return c(e).clanInfo?(u(),h("div",ha,[_(B,{identity:"preview"},{default:f(()=>[_(C,{class:"clan-page__preview","hide-description":!0,clan:c(e).clanInfo,loading:c(e).loading>0},ue({_:2},[c(e).clanInfo&&c(e).savedClan?{name:"events",fn:f(()=>[_(x,{clan:c(e).clanInfo,"saved-clan":c(e).savedClan,"saved-at":c(e).clanSavedAt,onReset:I},null,8,["clan","saved-clan","saved-at"])]),key:"0"}:void 0]),1032,["clan","loading"])]),_:1}),_(B,{title:"Статистика",identity:"statistic"},{default:f(()=>[_(M,{loading:c(e).loading>0,items:c(e).metricsItems},null,8,["loading","items"])]),_:1}),_(B,{title:"Участники",identity:"members"},{default:f(()=>[_(N,{class:"clan-page__filters",filters:c(e).filters,onFiltersChange:F},null,8,["filters"]),_(se,{sort:c(d),users:c(e).users,"saved-members":c(e).savedMembers,members:c(g),onSort:k},null,8,["sort","users","saved-members","members"])]),_:1})])):(u(),h("div",ba,[c(e).loading?A("",!0):(u(),h("div",ga,$a)),_(le,{loading:c(e).loading>0},null,8,["loading"])]))}}});export{Za as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./discord.CovoCbjo.js","./nuxt-icon.CC_2cq_E.js","./_plugin-vue_export-helper.DlAUqK2U.js","./entry.Bm-llWz1.js","./nuxt-icon.MfBulapQ.css","./telegram.DipKuGly.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
