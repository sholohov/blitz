import{_ as V}from"./C93CMuTi.js";import{_ as q}from"./B2ejvlwh.js";import{_ as R}from"./3lIG1lYq.js";import{_ as b}from"./PfUKTOG5.js";import{d as T,c as x,o as l,l as _,F as S,B as k,m as n,t as u,h as p,q as $,E as H,f as r,u as N,a as U,b as j,j as w,n as D,k as F,z as O,p as L,e as A,w as G}from"./DJlEGeV1.js";import{_ as I}from"./CAAaFnNp.js";import{u as M}from"./j8H2iFUT.js";import"./pQ9QSYKp.js";import"./C1V66jBN.js";import"./DD4asW33.js";import"./BV1GL1vA.js";import"./CpfoCNYP.js";import"./DlAUqK2U.js";import"./B7WhaZnE.js";import"./NWUEeXks.js";import"./BxBPJGBn.js";import"./RA3fBwkA.js";import"./D-TuSGJo.js";import"./RPJY7rI9.js";import"./YbE3Ovi3.js";import"./BE0zBel4.js";import"./BVA0GR3k.js";import"./btAca64B.js";import"./CIh7AwxB.js";import"./Dmx_wtdT.js";import"./BmHpWDuk.js";import"./HeP0UT03.js";import"./C35J47Ry.js";import"./roZIKyQo.js";const P={class:"tournaments-list"},W={class:"tournaments-list__section-title"},J={class:"tournaments-list__list"},K={class:"tournaments-list__item-img-wrapper"},Q={class:"tournaments-list__item-content"},X={class:"tournaments-list__item-title"},Y={class:"tournaments-list__item-tier"},Z={class:"tournaments-list__item-details"},tt={class:"tournaments-list__item-date"},st=T({__name:"TournamentsList",props:{tournaments:{type:Array,default:()=>[],required:!0},loading:{type:Boolean,default:!1}},setup(f){const h=f,d=x(()=>{const s={running:[],registration_started:[],registration_finished:[],upcoming:[],finished:[],complete:[]};return h.tournaments.forEach(t=>{s[t.status].push(t)}),Object.entries(s).map(([t,m])=>({status:t,list:m})).filter(t=>t.list.length)});function v(s){const t=s.description.match(/Уровень техники: (.+?)\./i);return t!=null&&t[1]?t==null?void 0:t[1]:""}return(s,t)=>{const m=q,y=R,g=b;return l(),_("div",P,[(l(!0),_(S,null,k(r(d),i=>(l(),_("div",{key:i.status,class:"tournaments-list__section"},[n("div",W,u(s.$formatter.tournament.status(i.status)),1),n("ul",J,[(l(!0),_(S,null,k(i.list,a=>(l(),_("li",{key:a.tournament_id,class:"tournaments-list__item"},[n("div",K,[p(m,{class:"tournaments-list__item-img",loading:"lazy",src:a.logo.original,alt:"image"},null,8,["src"])]),n("div",Q,[n("div",X,[$(u(a.title)+" ",1),n("div",Y,u(v(a)),1)]),n("div",Z,[n("div",tt,u(s.$formatter.date.toDateTime(a.start_at*1e3)),1),n("div",{class:H(["tournaments-list__item-status",["tournaments-list__item-status--"+a.status]])},u(s.$formatter.tournament.status(a.status)),3)])]),p(y,{class:"tournaments-list__item-link link",to:{name:"tournaments-id",params:{id:a.tournament_id}}},null,8,["to"])]))),128))])]))),128)),p(g,{loading:f.loading},null,8,["loading"])])}}}),et={class:"tournaments-page__filter"},nt={class:"tournaments-page__count"},ot={class:"tournaments-page__list"},bt=T({__name:"index",setup(f){const h=[null,"upcoming","registration_started","registration_finished","running","finished","complete"];N({title:"Турниры"});const d=U(),v=j(),s=w({loading:0,tournaments:[],status:null}),t=w({page:1,pageSize:25,total:0}),m=w(h.map(e=>({label:e?D.tournament.status(e):"Все",value:e}))),y=x(()=>t.total>t.page*t.pageSize);F(async()=>{var e;s.status=((e=d.query)==null?void 0:e.status)??null,a(),await i(),window.addEventListener("scroll",g)}),O(()=>{window.removeEventListener("scroll",g)});function g(){const{scrollTop:e,scrollHeight:o,clientHeight:c}=document.documentElement;s.loading===0&&y.value&&e+c>=o-100&&(t.page+=1,i())}async function i(){s.loading++;try{if(s.status===null&&t.page===1){const c=await L.tournaments.getList({limit:t.pageSize,status:"running"});s.tournaments.push(...c.data)}const e=["upcoming","registration_started","registration_finished","finished","complete"].join(","),o=await L.tournaments.getList({limit:t.pageSize,page_no:t.page,status:s.status??e});t.total=o.meta.total,s.tournaments.push(...o.data)}catch(e){M(e,{title:"Получение списка турниров"})}s.loading--}function a(){v.replace({query:{...d.query,status:s.status||null}}).catch(()=>{})}function z(){t.page=1,s.tournaments=[],a(),i()}return(e,o)=>{const c=V,B=st,E=I;return l(),A(E,{class:"tournaments-page"},{default:G(()=>[n("div",et,[o[1]||(o[1]=$(" По статусу: ")),p(c,{modelValue:r(s).status,"onUpdate:modelValue":o[0]||(o[0]=C=>r(s).status=C),style:{width:"200px"},options:r(m),onChange:z},null,8,["modelValue","options"])]),n("div",nt,[o[2]||(o[2]=n("span",{class:"tournaments-page__count-title"}," Кол-во: ",-1)),$(" "+u(r(t).total),1)]),n("div",ot,[p(B,{tournaments:r(s).tournaments,loading:r(s).loading>0},null,8,["tournaments","loading"])])]),_:1})}}});export{bt as default};
