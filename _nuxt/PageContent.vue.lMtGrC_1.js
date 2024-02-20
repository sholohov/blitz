import{_ as T,a as L,h as j,d as Y}from"./disableScroll.CgQQwGmz.js";import{_ as E}from"./nuxt-link.DCTOZAmW.js";import{f as k,g as O,i as $,o as i,c as m,a as t,k as a,t as w,j as p,w as g,d as C,F as U,m as b,r as I,b as c,C as V,K as z,D as W,X,A as Z,Y as G,z as q,Z as K,$ as J,a0 as Q,s as x,q as ee,G as te,a1 as ae}from"./entry.DxBPLwvI.js";import{a as ne,_ as A}from"./ContentBox.vue.BafsV8Mo.js";import{_ as oe,g as se,b as ie}from"./CDialog.vue.Zcq38T73.js";import{u as re}from"./user.Ddh76-di.js";import{s as P,a as D}from"./request.BjF5k-df.js";import{a as ce}from"./index.DVpvj6uo.js";import{u as M}from"./index.BHa7uVph.js";import{u as H}from"./index.C_Ipm7Ym.js";import le from"./leader.NpaHmwsQ.js";import{_ as _e}from"./client-only.BusZwPnk.js";import de from"./dark-mode.BvymKQZR.js";import ue from"./light-mode.6hj8P1fT.js";import{a as ge}from"./debounce.BCnAhbZM.js";const me={class:"breadcrumbs-navigation"},pe={class:"breadcrumbs-navigation__inner"},he={key:0,class:"breadcrumbs-navigation__root"},fe=t("span",{class:"breadcrumbs-navigation__separator"},null,-1),be={class:"breadcrumbs-navigation__current"},ve=k({__name:"BreadcrumbsNavigation",setup(d){const n=O(),e=$(()=>{var r;return((r=String(n.name).split("-"))==null?void 0:r[0])??"index"}),l=$(()=>String(n.name??"")),o=$(()=>l.value===e.value);return(r,_)=>{const s=E;return i(),m("div",me,[t("div",pe,[a(o)?(i(),m("span",he,w(r.$formatter.route.getTitle(a(e))),1)):(i(),p(s,{key:1,class:"breadcrumbs-navigation__root link",to:{name:a(e)}},{default:g(()=>[C(w(r.$formatter.route.getTitle(a(e))),1)]),_:1},8,["to"])),a(o)?b("",!0):(i(),m(U,{key:2},[fe,t("span",be,w(r.$formatter.route.getTitle(a(l))),1)],64))])])}}}),ye={class:"login-switcher"},ke={key:0,class:"login-switcher__username"},$e={class:"login-switcher__username-text"},we=t("div",{style:{margin:"0 0 1em"}}," Вы уверены, что хотите выйти из аккаунта? ",-1),Se={style:{"text-align":"right"}},xe=k({__name:"LoginSwitcher",setup(d){const n=I(null),e=re(),l=M(),o=$(()=>e.accountId!==0);async function r(){try{const{data:u}=await D.auth.login({redirect_uri:location.href,nofollow:1});u&&(window.location.href=u.location)}catch(u){j(u,{title:"Вход в аккаунт"})}}async function _(){await D.auth.logout()}async function s(){await ce.auth.logout(),P.storage.removeUser(),e.resetUser(),location.assign("/")}async function h(){try{await _(),await s()}catch(u){j(u,{title:"Вход из аккаунта"})}}function v(u){P.storage.getUser()&&(u&&h(),n.value.doClose())}async function y(){P.storage.getUser()?await n.value.doOpen():await r()}return(u,f)=>{const S=T,B=L,R=oe;return i(),m("div",ye,[a(l).isTablet?b("",!0):(i(),m("div",ke,[t("span",$e,w(a(e).name),1)])),c(B,{class:"login-switcher__btn","is-text":"","is-square":"",align:"center",title:a(o)?"Выйти":"Войти",onClick:y},{default:g(()=>[c(S,{name:a(o)?"logout":"login"},null,8,["name"])]),_:1},8,["title"]),c(R,{ref_key:"logoutConfirmRef",ref:n,title:"Выход из аккаунта","append-to-body":""},{default:g(()=>[we,t("div",Se,[c(B,{align:"center",width:"80px",onClick:f[0]||(f[0]=N=>v(!0))},{default:g(()=>[C(" Да ")]),_:1}),c(B,{align:"center",width:"80px",onClick:f[1]||(f[1]=N=>v(!1))},{default:g(()=>[C(" Нет ")]),_:1})])]),_:1},512)])}}}),Ce={class:"page-header__inner"},Te={class:"page-header__col page-header__col--left"},Me={key:0,class:"page-header__col-item"},Be={class:"page-header__col-item"},Ne={class:"page-header__col page-header__col--right"},Le={class:"page-header__col-item"},Oe={class:"page-header__col page-header__col--right"},Re={class:"page-header__col-item"},Pe={class:"page-header__col-item"},Ie=k({__name:"PageHeader",props:{height:{type:Number,required:!0},isSticky:{type:Boolean,default:!1}},setup(d){const n=M(),e=H();function l(){e.toggleMainSearch(!0)}function o(){e.toggleMobileMenu(),Y(!0)}return(r,_)=>{const s=T,h=L,v=ve,y=ne,u=xe;return i(),m("div",{class:V(["page-header",[d.isSticky?"page-header--is-sticky":"",a(n).isTablet?"page-header--is-mobile-view":""]]),style:z({height:d.height+"px"})},[t("div",Ce,[t("div",Te,[a(n).isTablet?(i(),m("div",Me,[c(h,{"is-square":"","is-text":"",onClick:o},{default:g(()=>[c(s,{name:"menu"})]),_:1})])):b("",!0),t("div",Be,[c(v)])]),t("div",Ne,[t("div",Le,[a(n).isTablet?b("",!0):(i(),p(y,{key:0,class:"page-header__search"}))])]),t("div",Oe,[t("div",Re,[a(n).isTablet?(i(),p(h,{key:0,"is-square":"","is-text":"",onClick:l},{default:g(()=>[c(s,{name:"search"})]),_:1})):b("",!0)]),t("div",Pe,[c(u)])])])],6)}}}),qe={class:"page-sidebar-header"},Ee={class:"page-sidebar-header__inner"},He={class:"page-sidebar-header__logo-icon"},je=t("span",{class:"page-sidebar-header__logo-text"}," Blitz Commander ",-1),De=k({__name:"PageSidebarHeader",emits:["close"],setup(d,{emit:n}){const e=M(),l=n;return(o,r)=>{const _=T,s=L;return i(),m("div",qe,[t("div",Ee,[(i(),p(W((o._.provides[X]||o.$route).name==="index"?"span":a(E)),{class:"page-sidebar-header__logo",to:"/"},{default:g(()=>[t("span",He,[c(a(le),{style:{width:"24px",height:"24px"}})]),je]),_:1})),a(e).isMobile?(i(),p(s,{key:0,"is-square":"","is-text":"",class:"page-sidebar-header__close",onClick:r[0]||(r[0]=h=>l("close"))},{default:g(()=>[c(_,{name:"close"})]),_:1})):b("",!0)])])}}}),Ue={class:"navigation-list"},Ve={class:"navigation-list__list"},ze={key:0,class:"navigation-list__link navigation-list__link--is-active"},Ae=k({__name:"NavigationList",props:{navigation:{type:Array,required:!0,default:()=>[]}},setup(d){const n=O();function e(l){return n.matched.some(o=>{const r=String(o.name).split("-")[0]??"index",_=String(l.to.name).split("-")[0]??"index";return r===_})}return(l,o)=>{const r=T,_=E;return i(),m("nav",Ue,[t("ul",Ve,[(i(!0),m(U,null,Z(d.navigation.filter(s=>!s.isHidden),s=>(i(),m("li",{key:s.key,class:"navigation-list__item"},[e(s)?(i(),m("span",ze,[s.icon?(i(),p(r,{key:0,name:s.icon,class:"navigation-list__icon"},null,8,["name"])):b("",!0),C(" "+w(s.label),1)])):(i(),p(_,{key:1,class:"navigation-list__link",to:s.to},{default:g(()=>[s.icon?(i(),p(r,{key:0,name:s.icon,class:"navigation-list__icon"},null,8,["name"])):b("",!0),C(" "+w(s.label),1)]),_:2},1032,["to"]))]))),128))])])}}}),Fe=()=>G("color-mode").value,Ye=k({__name:"ThemeSwitcher",setup(d){const n=Fe(),e=$(()=>n.value==="system"?"":n.value==="dark"?"light":"dark");function l(){const o=n.value==="light";n.preference=o?"dark":"light"}return(o,r)=>{const _=_e,s=L;return i(),p(s,{class:"theme-switcher","is-text":"","is-square":"",title:"Переключить тему",onClick:l},{default:g(()=>[c(_,null,{default:g(()=>[a(e)==="dark"?(i(),p(a(de),{key:0,class:"theme-switcher__icon"})):a(e)==="light"?(i(),p(a(ue),{key:1,class:"theme-switcher__icon"})):b("",!0)]),_:1})]),_:1})}}}),We={class:"page-sidebar__body"},Xe={class:"page-sidebar__footer"},Ze={class:"page-sidebar__prop"},Ge=t("span",{class:"page-sidebar__prop-title"},"Тема",-1),Ke={target:"_blank",href:"https://t.me/+kpbNPjc8nyZlMmIy",class:"page-sidebar__prop link"},Je=t("span",{class:"page-sidebar__prop-title"},"Комьюнити",-1),Qe={target:"_blank",href:"https://yoomoney.ru/to/4100118432687922",class:"page-sidebar__prop link"},et=t("span",{class:"page-sidebar__prop-title"},"Поблагодарить",-1),tt={class:"page-sidebar__version"},at=k({__name:"PageSidebar",props:{isOpen:{type:Boolean,default:!1},navigation:{type:Array,default:()=>[]},headerHeight:{type:Number,default:0}},setup(d){const n=Q(),e=H(),l=O(),o=M(),r=$(()=>n.public.clientVersion);q(()=>o.isTablet,()=>{o.isTablet||e.toggleMobileMenu(!1)}),q(()=>l.name,(s,h)=>{s!==h&&setTimeout(()=>e.toggleMobileMenu(!1),300)},{immediate:!0});function _(){e.toggleMobileMenu(!1)}return(s,h)=>{const v=De,y=Ae,u=Ye,f=T,S=A;return i(),p(J,{name:"page-sidebar-",duration:600},{default:g(()=>[d.isOpen?(i(),m("div",{key:0,class:V(["page-sidebar",[a(o).isTablet?"page-sidebar--mobile-view":""]]),onClick:K(_,["self"])},[c(S,{class:"page-sidebar__panel","inner-class":"page-sidebar__inner"},{default:g(()=>[c(v,{class:"page-sidebar__header",style:z({height:d.headerHeight+"px"}),onClose:_},null,8,["style"]),t("div",We,[c(y,{class:"page-sidebar__navigation",navigation:d.navigation},null,8,["navigation"])]),t("div",Xe,[t("label",Ze,[c(u),Ge]),t("a",Ke,[c(f,{name:"telegram",style:{margin:"6px"}}),Je]),t("a",Qe,[c(f,{name:"savings",style:{margin:"6px"}}),et]),t("div",tt," v"+w(a(r)),1)])]),_:1})],2)):b("",!0)]),_:1})}}});var nt=ge,ot=ie,st="Expected a function";function it(d,n,e){var l=!0,o=!0;if(typeof d!="function")throw new TypeError(st);return ot(e)&&(l="leading"in e?!!e.leading:l,o="trailing"in e?!!e.trailing:o),nt(d,n,{leading:l,maxWait:n,trailing:o})}var rt=it;const ct=se(rt),lt={class:"page-content__header"},_t={class:"page-content__main"},dt={class:"page-content__sidebar"},Tt=k({__name:"PageContent",emits:["scroll"],setup(d,{emit:n}){const e=O(),l=H(),o=M(),r=I(!1),_=I(54),s=[{label:x.route.getTitle("index"),key:"main",to:{name:"index"},icon:"home"},{label:x.route.getTitle("account"),key:"account",to:{name:"account"},icon:"person"},{label:x.route.getTitle("clan"),key:"clan",to:{name:"clan"},icon:"groups"},{label:x.route.getTitle("leaderboards"),key:"leaderboards",to:{name:"leaderboards"},icon:"leaderboard"},{label:x.route.getTitle("tournaments"),key:"tournaments",to:{name:"tournaments"},icon:"emoji-events"},{label:x.route.getTitle("widgets"),key:"widgets",to:{name:"widgets"},icon:"widgets"}],h=$(()=>o.isTablet?l.mobileMenuOpened:!0),v=n;q(()=>e.fullPath,()=>{l.toggleMobileMenu(!1)}),ee(()=>{window==null||window.addEventListener("scroll",y),y()});const y=ct(u,60);function u(){v("scroll",window.scrollY),f()}function f(){r.value=window.scrollY>10}return(S,B)=>{const R=Ie,N=A,F=at;return i(),m("div",ae(S.$attrs,{class:["page-content",[a(r)?"page-content--is-scrolled":"",a(o).isTablet?"page-content--mobile-view":""]]}),[t("header",lt,[c(N,null,{default:g(()=>[c(R,{"is-sticky":a(r),height:a(_)},null,8,["is-sticky","height"])]),_:1})]),t("main",_t,[c(N,null,{default:g(()=>[te(S.$slots,"default")]),_:3})]),t("aside",dt,[c(F,{navigation:s,"is-open":a(h),"header-height":a(_)},null,8,["is-open","header-height"])])],16)}}});export{Tt as _};
