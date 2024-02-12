import{_ as V}from"./CSelect.vue.CbIsFS8V.js";import{_ as q}from"./CImage.vue.BpBC8UI2.js";import{_ as N}from"./nuxt-link.B5LnOQLN.js";import{_ as R}from"./ContentLoader.vue.gSVxuRhP.js";import{f as L,i as T,o as l,c as _,F as C,A as S,a as e,t as u,b as d,d as w,C as b,k as r,g as j,h as O,n as $,s as A,q as D,y as F,j as H,w as U}from"./entry.DnyhrCzd.js";import{_ as W}from"./PageContent.vue.DookzeT3.js";import{a as k}from"./request.D7J0I_-4.js";import{h as I}from"./disableScroll.DbQbNoWW.js";import"./image-broken.8lwG3CGm.js";import"./nuxt-icon.BsZsWr24.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./ContentBox.vue.1EWrA6dy.js";import"./CInput.vue.BvL80IAb.js";import"./notEmpty.BxBPJGBn.js";import"./debounce.DaU679KR.js";import"./CDialog.vue.CQlkuHhL.js";import"./index.D7cX-f-u.js";import"./user.CdOYHEHf.js";import"./index.BRuhnkRA.js";import"./leader.C8Lo4CF8.js";import"./client-only.BwacdUep.js";import"./dark-mode.dGHoi32H.js";import"./light-mode.C-MYmDsT.js";const M={class:"tournaments-list"},P={class:"tournaments-list__section-title"},G={class:"tournaments-list__list"},J={class:"tournaments-list__item-img-wrapper"},K={class:"tournaments-list__item-content"},Q={class:"tournaments-list__item-title"},X={class:"tournaments-list__item-tier"},Y={class:"tournaments-list__item-details"},Z={class:"tournaments-list__item-date"},tt=L({__name:"TournamentsList",props:{tournaments:{type:Array,default:()=>[],required:!0},loading:{type:Boolean,default:!1}},setup(f){const h=f,p=T(()=>{const s={running:[],registration_started:[],registration_finished:[],upcoming:[],finished:[],complete:[]};return h.tournaments.forEach(t=>{s[t.status].push(t)}),Object.entries(s).map(([t,m])=>({status:t,list:m})).filter(t=>t.list.length)});function v(s){const t=s.description.match(/Уровень техники: (.+?)\./i);return t!=null&&t[1]?t==null?void 0:t[1]:""}return(s,t)=>{const m=q,y=N,g=R;return l(),_("div",M,[(l(!0),_(C,null,S(r(p),i=>(l(),_("div",{key:i.status,class:"tournaments-list__section"},[e("div",P,u(s.$formatter.tournament.status(i.status)),1),e("ul",G,[(l(!0),_(C,null,S(i.list,o=>(l(),_("li",{key:o.tournament_id,class:"tournaments-list__item"},[e("div",J,[d(m,{class:"tournaments-list__item-img",loading:"lazy",src:o.logo.original,alt:"image"},null,8,["src"])]),e("div",K,[e("div",Q,[w(u(o.title)+" ",1),e("div",X,u(v(o)),1)]),e("div",Y,[e("div",Z,u(s.$formatter.date.toDateTime(o.start_at*1e3)),1),e("div",{class:b(["tournaments-list__item-status",["tournaments-list__item-status--"+o.status]])},u(s.$formatter.tournament.status(o.status)),3)])]),d(y,{class:"tournaments-list__item-link link",to:{name:"tournaments-id",params:{id:o.tournament_id}}},null,8,["to"])]))),128))])]))),128)),d(g,{loading:f.loading},null,8,["loading"])])}}}),st={class:"tournaments-page__filter"},nt={class:"tournaments-page__count"},et=e("span",{class:"tournaments-page__count-title"}," Кол-во: ",-1),ot={class:"tournaments-page__list"},zt=L({__name:"index",setup(f){const h=[null,"upcoming","registration_started","registration_finished","running","finished","complete"],p=j(),v=O(),s=$({loading:0,tournaments:[],status:null}),t=$({page:1,pageSize:25,total:0}),m=$(h.map(n=>({label:n?A.tournament.status(n):"Все",value:n}))),y=T(()=>t.total>t.page*t.pageSize);D(async()=>{var n;s.status=((n=p.query)==null?void 0:n.status)??null,o(),await i(),window.addEventListener("scroll",g)}),F(()=>{window.removeEventListener("scroll",g)});function g(){const{scrollTop:n,scrollHeight:a,clientHeight:c}=document.documentElement;s.loading===0&&y.value&&n+c>=a-100&&(t.page+=1,i())}async function i(){s.loading++;try{if(s.status===null&&t.page===1){const c=await k.tournaments.getList({limit:t.pageSize,status:"running"});s.tournaments.push(...c.data)}const n=["upcoming","registration_started","registration_finished","finished","complete"].join(","),a=await k.tournaments.getList({limit:t.pageSize,page_no:t.page,status:s.status??n});t.total=a.meta.total,s.tournaments.push(...a.data)}catch(n){I(n,{title:"Получение списка турниров"})}s.loading--}function o(){v.replace({query:{...p.query,status:s.status||null}}).catch(()=>{})}function x(){t.page=1,s.tournaments=[],o(),i()}return(n,a)=>{const c=V,z=tt,B=W;return l(),H(B,{class:"tournaments-page"},{default:U(()=>[e("div",st,[w(" По статусу: "),d(c,{modelValue:r(s).status,"onUpdate:modelValue":a[0]||(a[0]=E=>r(s).status=E),style:{width:"200px"},options:r(m),onChange:x},null,8,["modelValue","options"])]),e("div",nt,[et,w(" "+u(r(t).total),1)]),e("div",ot,[d(z,{tournaments:r(s).tournaments,loading:r(s).loading>0},null,8,["tournaments","loading"])])]),_:1})}}});export{zt as default};
