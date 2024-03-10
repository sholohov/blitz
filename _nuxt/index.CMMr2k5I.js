import{_ as V}from"./UiSelect.vue.D2eRQWvm.js";import{_ as q}from"./UiImage.vue.DS0P_sJE.js";import{_ as N}from"./nuxt-link.vBf0PoaZ.js";import{_ as R,a as S}from"./request.DYurK6w5.js";import{f as L,i as T,o as l,c as _,F as k,A as C,a as e,t as u,b as d,d as w,C as b,k as r,u as U,g as j,h as H,n as $,s as O,q as A,y as D,j as F,w as W}from"./entry.BCxoBdpj.js";import{_ as I}from"./PageContent.vue.CjVF284l.js";import{h as M}from"./disableScroll.BMhynJqB.js";import"./index.R4QztNYD.js";import"./image-broken.I0tdFF4R.js";import"./nuxt-icon.j5VLktT_.js";import"./_plugin-vue_export-helper.DlAUqK2U.js";import"./MainSearch.vue.DriJ0O-h.js";import"./UiInput.vue.ZQG53_VX.js";import"./notEmpty.BxBPJGBn.js";import"./debounce.B4CGx-ur.js";import"./UiDialog.vue.BESQZ_pt.js";import"./user.BXGQUIUO.js";import"./index.BxyEh5Dy.js";import"./index.54BYZypU.js";import"./ContentBox.vue.B2lu2vIZ.js";import"./leader.CagW_mQj.js";import"./client-only.Dbbbis-5.js";import"./dark-mode.1dmeuvir.js";import"./light-mode.Bx25YAGu.js";const P={class:"tournaments-list"},G={class:"tournaments-list__section-title"},J={class:"tournaments-list__list"},K={class:"tournaments-list__item-img-wrapper"},Q={class:"tournaments-list__item-content"},X={class:"tournaments-list__item-title"},Y={class:"tournaments-list__item-tier"},Z={class:"tournaments-list__item-details"},tt={class:"tournaments-list__item-date"},st=L({__name:"TournamentsList",props:{tournaments:{type:Array,default:()=>[],required:!0},loading:{type:Boolean,default:!1}},setup(f){const h=f,p=T(()=>{const s={running:[],registration_started:[],registration_finished:[],upcoming:[],finished:[],complete:[]};return h.tournaments.forEach(t=>{s[t.status].push(t)}),Object.entries(s).map(([t,m])=>({status:t,list:m})).filter(t=>t.list.length)});function v(s){const t=s.description.match(/Уровень техники: (.+?)\./i);return t!=null&&t[1]?t==null?void 0:t[1]:""}return(s,t)=>{const m=q,y=N,g=R;return l(),_("div",P,[(l(!0),_(k,null,C(r(p),i=>(l(),_("div",{key:i.status,class:"tournaments-list__section"},[e("div",G,u(s.$formatter.tournament.status(i.status)),1),e("ul",J,[(l(!0),_(k,null,C(i.list,o=>(l(),_("li",{key:o.tournament_id,class:"tournaments-list__item"},[e("div",K,[d(m,{class:"tournaments-list__item-img",loading:"lazy",src:o.logo.original,alt:"image"},null,8,["src"])]),e("div",Q,[e("div",X,[w(u(o.title)+" ",1),e("div",Y,u(v(o)),1)]),e("div",Z,[e("div",tt,u(s.$formatter.date.toDateTime(o.start_at*1e3)),1),e("div",{class:b(["tournaments-list__item-status",["tournaments-list__item-status--"+o.status]])},u(s.$formatter.tournament.status(o.status)),3)])]),d(y,{class:"tournaments-list__item-link link",to:{name:"tournaments-id",params:{id:o.tournament_id}}},null,8,["to"])]))),128))])]))),128)),d(g,{loading:f.loading},null,8,["loading"])])}}}),nt={class:"tournaments-page__filter"},et={class:"tournaments-page__count"},ot=e("span",{class:"tournaments-page__count-title"}," Кол-во: ",-1),at={class:"tournaments-page__list"},Et=L({__name:"index",setup(f){const h=[null,"upcoming","registration_started","registration_finished","running","finished","complete"];U({title:"Турниры"});const p=j(),v=H(),s=$({loading:0,tournaments:[],status:null}),t=$({page:1,pageSize:25,total:0}),m=$(h.map(n=>({label:n?O.tournament.status(n):"Все",value:n}))),y=T(()=>t.total>t.page*t.pageSize);A(async()=>{var n;s.status=((n=p.query)==null?void 0:n.status)??null,o(),await i(),window.addEventListener("scroll",g)}),D(()=>{window.removeEventListener("scroll",g)});function g(){const{scrollTop:n,scrollHeight:a,clientHeight:c}=document.documentElement;s.loading===0&&y.value&&n+c>=a-100&&(t.page+=1,i())}async function i(){s.loading++;try{if(s.status===null&&t.page===1){const c=await S.tournaments.getList({limit:t.pageSize,status:"running"});s.tournaments.push(...c.data)}const n=["upcoming","registration_started","registration_finished","finished","complete"].join(","),a=await S.tournaments.getList({limit:t.pageSize,page_no:t.page,status:s.status??n});t.total=a.meta.total,s.tournaments.push(...a.data)}catch(n){M(n,{title:"Получение списка турниров"})}s.loading--}function o(){v.replace({query:{...p.query,status:s.status||null}}).catch(()=>{})}function x(){t.page=1,s.tournaments=[],o(),i()}return(n,a)=>{const c=V,z=st,B=I;return l(),F(B,{class:"tournaments-page"},{default:W(()=>[e("div",nt,[w(" По статусу: "),d(c,{modelValue:r(s).status,"onUpdate:modelValue":a[0]||(a[0]=E=>r(s).status=E),style:{width:"200px"},options:r(m),onChange:x},null,8,["modelValue","options"])]),e("div",et,[ot,w(" "+u(r(t).total),1)]),e("div",at,[d(z,{tournaments:r(s).tournaments,loading:r(s).loading>0},null,8,["tournaments","loading"])])]),_:1})}}});export{Et as default};
