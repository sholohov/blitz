import{_ as V}from"./CSelect.vue.Bwjii43I.js";import{_ as q}from"./CImage.vue.Bt9jYEX6.js";import{_ as N}from"./nuxt-link.CnjmgimZ.js";import{_ as R,a as C}from"./request.KP0oJ4ww.js";import{f as L,i as T,o as l,c as _,F as S,A as k,a as e,t as u,b as d,d as w,C as b,k as r,u as j,g as H,h as O,n as $,s as A,q as D,y as F,j as U,w as W}from"./entry.DfoUuq3X.js";import{_ as I}from"./PageContent.vue.BsBPKap3.js";import{h as M}from"./disableScroll.DHm38N0M.js";import"./index.CyzYM5Sw.js";import"./image-broken.B1Egd7NA.js";import"./nuxt-icon.DIr-5axS.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./ContentBox.vue.k3uwJU1p.js";import"./CInput.vue.2V38F1JB.js";import"./notEmpty.BxBPJGBn.js";import"./debounce.ez8muWAK.js";import"./CDialog.vue.DCMX0sJA.js";import"./user.tsQBkfAX.js";import"./index.Sqwnd-tJ.js";import"./index.CJIEVhkZ.js";import"./leader.Dvb5M9sB.js";import"./client-only.IfhfVTTb.js";import"./dark-mode.DbjMN3Xk.js";import"./light-mode.C_PBuHVr.js";const P={class:"tournaments-list"},G={class:"tournaments-list__section-title"},J={class:"tournaments-list__list"},K={class:"tournaments-list__item-img-wrapper"},Q={class:"tournaments-list__item-content"},X={class:"tournaments-list__item-title"},Y={class:"tournaments-list__item-tier"},Z={class:"tournaments-list__item-details"},tt={class:"tournaments-list__item-date"},st=L({__name:"TournamentsList",props:{tournaments:{type:Array,default:()=>[],required:!0},loading:{type:Boolean,default:!1}},setup(f){const h=f,p=T(()=>{const s={running:[],registration_started:[],registration_finished:[],upcoming:[],finished:[],complete:[]};return h.tournaments.forEach(t=>{s[t.status].push(t)}),Object.entries(s).map(([t,m])=>({status:t,list:m})).filter(t=>t.list.length)});function v(s){const t=s.description.match(/Уровень техники: (.+?)\./i);return t!=null&&t[1]?t==null?void 0:t[1]:""}return(s,t)=>{const m=q,y=N,g=R;return l(),_("div",P,[(l(!0),_(S,null,k(r(p),i=>(l(),_("div",{key:i.status,class:"tournaments-list__section"},[e("div",G,u(s.$formatter.tournament.status(i.status)),1),e("ul",J,[(l(!0),_(S,null,k(i.list,o=>(l(),_("li",{key:o.tournament_id,class:"tournaments-list__item"},[e("div",K,[d(m,{class:"tournaments-list__item-img",loading:"lazy",src:o.logo.original,alt:"image"},null,8,["src"])]),e("div",Q,[e("div",X,[w(u(o.title)+" ",1),e("div",Y,u(v(o)),1)]),e("div",Z,[e("div",tt,u(s.$formatter.date.toDateTime(o.start_at*1e3)),1),e("div",{class:b(["tournaments-list__item-status",["tournaments-list__item-status--"+o.status]])},u(s.$formatter.tournament.status(o.status)),3)])]),d(y,{class:"tournaments-list__item-link link",to:{name:"tournaments-id",params:{id:o.tournament_id}}},null,8,["to"])]))),128))])]))),128)),d(g,{loading:f.loading},null,8,["loading"])])}}}),nt={class:"tournaments-page__filter"},et={class:"tournaments-page__count"},ot=e("span",{class:"tournaments-page__count-title"}," Кол-во: ",-1),at={class:"tournaments-page__list"},Bt=L({__name:"index",setup(f){const h=[null,"upcoming","registration_started","registration_finished","running","finished","complete"];j({title:"Турниры"});const p=H(),v=O(),s=$({loading:0,tournaments:[],status:null}),t=$({page:1,pageSize:25,total:0}),m=$(h.map(n=>({label:n?A.tournament.status(n):"Все",value:n}))),y=T(()=>t.total>t.page*t.pageSize);D(async()=>{var n;s.status=((n=p.query)==null?void 0:n.status)??null,o(),await i(),window.addEventListener("scroll",g)}),F(()=>{window.removeEventListener("scroll",g)});function g(){const{scrollTop:n,scrollHeight:a,clientHeight:c}=document.documentElement;s.loading===0&&y.value&&n+c>=a-100&&(t.page+=1,i())}async function i(){s.loading++;try{if(s.status===null&&t.page===1){const c=await C.tournaments.getList({limit:t.pageSize,status:"running"});s.tournaments.push(...c.data)}const n=["upcoming","registration_started","registration_finished","finished","complete"].join(","),a=await C.tournaments.getList({limit:t.pageSize,page_no:t.page,status:s.status??n});t.total=a.meta.total,s.tournaments.push(...a.data)}catch(n){M(n,{title:"Получение списка турниров"})}s.loading--}function o(){v.replace({query:{...p.query,status:s.status||null}}).catch(()=>{})}function x(){t.page=1,s.tournaments=[],o(),i()}return(n,a)=>{const c=V,z=st,B=I;return l(),U(B,{class:"tournaments-page"},{default:W(()=>[e("div",nt,[w(" По статусу: "),d(c,{modelValue:r(s).status,"onUpdate:modelValue":a[0]||(a[0]=E=>r(s).status=E),style:{width:"200px"},options:r(m),onChange:x},null,8,["modelValue","options"])]),e("div",et,[ot,w(" "+u(r(t).total),1)]),e("div",at,[d(z,{tournaments:r(s).tournaments,loading:r(s).loading>0},null,8,["tournaments","loading"])])]),_:1})}}});export{Bt as default};
