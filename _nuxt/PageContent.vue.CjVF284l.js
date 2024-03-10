import{_ as T,a as L,h as H,d as W}from"./disableScroll.BMhynJqB.js";import{_ as q}from"./nuxt-link.vBf0PoaZ.js";import{f as $,g as O,i as w,o as i,c as m,a as t,k as a,t as S,j as h,w as g,d as C,F as D,m as b,r as U,b as c,C as V,K as z,D as Y,W as X,A as Z,X as G,z as I,Y as K,Z as J,$ as Q,s as x,q as ee,G as te,a0 as ae}from"./entry.BCxoBdpj.js";import{_ as ne}from"./MainSearch.vue.DriJ0O-h.js";import{_ as oe,g as se,b as ie}from"./UiDialog.vue.BESQZ_pt.js";import{u as re}from"./user.BXGQUIUO.js";import{s as P,a as j}from"./request.DYurK6w5.js";import{a as ce}from"./index.BxyEh5Dy.js";import{u as M}from"./index.R4QztNYD.js";import{u as E}from"./index.54BYZypU.js";import{_ as A}from"./ContentBox.vue.B2lu2vIZ.js";import le from"./leader.CagW_mQj.js";import{_ as _e}from"./client-only.Dbbbis-5.js";import de from"./dark-mode.1dmeuvir.js";import ue from"./light-mode.Bx25YAGu.js";import{a as ge}from"./debounce.B4CGx-ur.js";const me={class:"breadcrumbs-navigation"},pe={class:"breadcrumbs-navigation__inner"},he={key:0,class:"breadcrumbs-navigation__root"},fe=t("span",{class:"breadcrumbs-navigation__separator"},null,-1),be={class:"breadcrumbs-navigation__current"},ve=$({__name:"BreadcrumbsNavigation",setup(d){const n=O(),e=w(()=>{var r;return((r=String(n.name).split("-"))==null?void 0:r[0])??"index"}),l=w(()=>String(n.name??"")),o=w(()=>l.value===e.value);return(r,_)=>{const s=q;return i(),m("div",me,[t("div",pe,[a(o)?(i(),m("span",he,S(r.$formatter.route.getTitle(a(e))),1)):(i(),h(s,{key:1,class:"breadcrumbs-navigation__root link",to:{name:a(e)}},{default:g(()=>[C(S(r.$formatter.route.getTitle(a(e))),1)]),_:1},8,["to"])),a(o)?b("",!0):(i(),m(D,{key:2},[fe,t("span",be,S(r.$formatter.route.getTitle(a(l))),1)],64))])])}}}),ye={class:"login-switcher"},ke={key:0,class:"login-switcher__username"},$e={class:"login-switcher__username-text"},we=t("div",{style:{margin:"0 0 1em"}}," Вы уверены, что хотите выйти из аккаунта? ",-1),Se={style:{"text-align":"right"}},xe=$({__name:"LoginSwitcher",setup(d){const n=U(null),e=re(),l=M(),o=w(()=>e.accountId!==0);async function r(){try{const{data:u}=await j.auth.login({redirect_uri:location.href,nofollow:1});u&&(window.location.href=u.location)}catch(u){H(u,{title:"Вход в аккаунт"})}}async function _(){await j.auth.logout()}async function s(){await ce.auth.logout(),P.storage.removeUser(),e.resetUser(),location.assign("/")}async function f(){try{await _(),await s()}catch(u){H(u,{title:"Вход из аккаунта"})}}function y(u){var v;P.storage.getUser()&&(u&&f(),(v=n.value)==null||v.doClose())}async function k(){var p;P.storage.getUser()?await((p=n.value)==null?void 0:p.doOpen()):await r()}return(u,p)=>{const v=T,B=L,R=oe;return i(),m("div",ye,[a(l).isTablet?b("",!0):(i(),m("div",ke,[t("span",$e,S(a(e).name),1)])),c(B,{class:"login-switcher__btn","is-text":"","is-square":"",align:"center",title:a(o)?"Выйти":"Войти",onClick:k},{default:g(()=>[c(v,{name:a(o)?"logout":"login"},null,8,["name"])]),_:1},8,["title"]),c(R,{ref_key:"logoutConfirmRef",ref:n,title:"Выход из аккаунта","append-to-body":""},{default:g(()=>[we,t("div",Se,[c(B,{align:"center",width:"80px",onClick:p[0]||(p[0]=N=>y(!0))},{default:g(()=>[C(" Да ")]),_:1}),c(B,{align:"center",width:"80px",onClick:p[1]||(p[1]=N=>y(!1))},{default:g(()=>[C(" Нет ")]),_:1})])]),_:1},512)])}}}),Ce={class:"page-header__inner"},Te={class:"page-header__col page-header__col--left"},Me={key:0,class:"page-header__col-item"},Be={class:"page-header__col-item"},Ne={class:"page-header__col page-header__col--right"},Le={class:"page-header__col-item"},Oe={class:"page-header__col page-header__col--right"},Re={class:"page-header__col-item"},Pe={class:"page-header__col-item"},Ue=$({__name:"PageHeader",props:{height:{type:Number,required:!0},isSticky:{type:Boolean,default:!1}},setup(d){const n=M(),e=E();function l(){e.toggleMainSearch(!0)}function o(){e.toggleMobileMenu(),W(!0)}return(r,_)=>{const s=T,f=L,y=ve,k=ne,u=xe;return i(),m("div",{class:V(["page-header",[d.isSticky?"page-header--is-sticky":"",a(n).isTablet?"page-header--is-mobile-view":""]]),style:z({height:d.height+"px"})},[t("div",Ce,[t("div",Te,[a(n).isTablet?(i(),m("div",Me,[c(f,{"is-square":"","is-text":"",onClick:o},{default:g(()=>[c(s,{name:"menu"})]),_:1})])):b("",!0),t("div",Be,[c(y)])]),t("div",Ne,[t("div",Le,[a(n).isTablet?b("",!0):(i(),h(k,{key:0,class:"page-header__search"}))])]),t("div",Oe,[t("div",Re,[a(n).isTablet?(i(),h(f,{key:0,"is-square":"","is-text":"",onClick:l},{default:g(()=>[c(s,{name:"search"})]),_:1})):b("",!0)]),t("div",Pe,[c(u)])])])],6)}}}),Ie={class:"page-sidebar-header"},qe={class:"page-sidebar-header__inner"},Ee={class:"page-sidebar-header__logo-icon"},He=t("span",{class:"page-sidebar-header__logo-text"}," Blitz Commander ",-1),je=$({__name:"PageSidebarHeader",emits:["close"],setup(d,{emit:n}){const e=M(),l=n;return(o,r)=>{const _=T,s=L;return i(),m("div",Ie,[t("div",qe,[(i(),h(Y((o._.provides[X]||o.$route).name==="index"?"span":a(q)),{class:"page-sidebar-header__logo",to:"/"},{default:g(()=>[t("span",Ee,[c(a(le),{style:{width:"24px",height:"24px"}})]),He]),_:1})),a(e).isMobile?(i(),h(s,{key:0,"is-square":"","is-text":"",class:"page-sidebar-header__close",onClick:r[0]||(r[0]=f=>l("close"))},{default:g(()=>[c(_,{name:"close"})]),_:1})):b("",!0)])])}}}),De={class:"navigation-list"},Ve={class:"navigation-list__list"},ze={key:0,class:"navigation-list__link navigation-list__link--is-active"},Ae=$({__name:"NavigationList",props:{navigation:{type:Array,required:!0,default:()=>[]}},setup(d){const n=O();function e(l){return n.matched.some(o=>{const r=String(o.name).split("-")[0]??"index",_=String(l.to.name).split("-")[0]??"index";return r===_})}return(l,o)=>{const r=T,_=q;return i(),m("nav",De,[t("ul",Ve,[(i(!0),m(D,null,Z(d.navigation.filter(s=>!s.isHidden),s=>(i(),m("li",{key:s.key,class:"navigation-list__item"},[e(s)?(i(),m("span",ze,[s.icon?(i(),h(r,{key:0,name:s.icon,class:"navigation-list__icon"},null,8,["name"])):b("",!0),C(" "+S(s.label),1)])):(i(),h(_,{key:1,class:"navigation-list__link",to:s.to},{default:g(()=>[s.icon?(i(),h(r,{key:0,name:s.icon,class:"navigation-list__icon"},null,8,["name"])):b("",!0),C(" "+S(s.label),1)]),_:2},1032,["to"]))]))),128))])])}}}),Fe=()=>G("color-mode").value,We=$({__name:"ThemeSwitcher",setup(d){const n=Fe(),e=w(()=>n.value==="system"?"":n.value==="dark"?"light":"dark");function l(){const o=n.value==="light";n.preference=o?"dark":"light"}return(o,r)=>{const _=_e,s=L;return i(),h(s,{class:"theme-switcher","is-text":"","is-square":"",title:"Переключить тему",onClick:l},{default:g(()=>[c(_,null,{default:g(()=>[a(e)==="dark"?(i(),h(a(de),{key:0,class:"theme-switcher__icon"})):a(e)==="light"?(i(),h(a(ue),{key:1,class:"theme-switcher__icon"})):b("",!0)]),_:1})]),_:1})}}}),Ye={class:"page-sidebar__body"},Xe={class:"page-sidebar__footer"},Ze={class:"page-sidebar__prop"},Ge=t("span",{class:"page-sidebar__prop-title"},"Тема",-1),Ke={target:"_blank",href:"https://t.me/+kpbNPjc8nyZlMmIy",class:"page-sidebar__prop link"},Je=t("span",{class:"page-sidebar__prop-title"},"Комьюнити",-1),Qe={target:"_blank",href:"https://yoomoney.ru/to/4100118432687922",class:"page-sidebar__prop link"},et=t("span",{class:"page-sidebar__prop-title"},"Поблагодарить",-1),tt={class:"page-sidebar__version"},at=$({__name:"PageSidebar",props:{isOpen:{type:Boolean,default:!1},navigation:{type:Array,default:()=>[]},headerHeight:{type:Number,default:0}},setup(d){const n=Q(),e=E(),l=O(),o=M(),r=w(()=>n.public.clientVersion);I(()=>o.isTablet,()=>{o.isTablet||e.toggleMobileMenu(!1)}),I(()=>l.name,(s,f)=>{s!==f&&setTimeout(()=>e.toggleMobileMenu(!1),300)},{immediate:!0});function _(){e.toggleMobileMenu(!1)}return(s,f)=>{const y=je,k=Ae,u=We,p=T,v=A;return i(),h(J,{name:"page-sidebar-",duration:600},{default:g(()=>[d.isOpen?(i(),m("div",{key:0,class:V(["page-sidebar",[a(o).isTablet?"page-sidebar--mobile-view":""]]),onClick:K(_,["self"])},[c(v,{class:"page-sidebar__panel","inner-class":"page-sidebar__inner"},{default:g(()=>[c(y,{class:"page-sidebar__header",style:z({height:d.headerHeight+"px"}),onClose:_},null,8,["style"]),t("div",Ye,[c(k,{class:"page-sidebar__navigation",navigation:d.navigation},null,8,["navigation"])]),t("div",Xe,[t("label",Ze,[c(u),Ge]),t("a",Ke,[c(p,{name:"telegram",style:{margin:"6px"}}),Je]),t("a",Qe,[c(p,{name:"savings",style:{margin:"6px"}}),et]),t("div",tt," v"+S(a(r)),1)])]),_:1})],2)):b("",!0)]),_:1})}}});var nt=ge,ot=ie,st="Expected a function";function it(d,n,e){var l=!0,o=!0;if(typeof d!="function")throw new TypeError(st);return ot(e)&&(l="leading"in e?!!e.leading:l,o="trailing"in e?!!e.trailing:o),nt(d,n,{leading:l,maxWait:n,trailing:o})}var rt=it;const ct=se(rt),lt={class:"page-content__header"},_t={class:"page-content__main"},dt={class:"page-content__sidebar"},Mt=$({__name:"PageContent",emits:["scroll"],setup(d,{emit:n}){const e=O(),l=E(),o=M(),r=U(!1),_=U(54),s=[{label:x.route.getTitle("index"),key:"main",to:{name:"index"},icon:"home"},{label:x.route.getTitle("account"),key:"account",to:{name:"account"},icon:"person"},{label:x.route.getTitle("clan"),key:"clan",to:{name:"clan"},icon:"groups"},{label:x.route.getTitle("leaderboards"),key:"leaderboards",to:{name:"leaderboards"},icon:"leaderboard"},{label:x.route.getTitle("tournaments"),key:"tournaments",to:{name:"tournaments"},icon:"emoji-events"},{label:x.route.getTitle("widgets"),key:"widgets",to:{name:"widgets"},icon:"widgets"}],f=w(()=>o.isTablet?l.mobileMenuOpened:!0),y=n;I(()=>e.fullPath,()=>{l.toggleMobileMenu(!1)}),ee(()=>{window==null||window.addEventListener("scroll",k),k()});const k=ct(u,60);function u(){y("scroll",window.scrollY),p()}function p(){r.value=window.scrollY>10}return(v,B)=>{const R=Ue,N=A,F=at;return i(),m("div",ae(v.$attrs,{class:["page-content",[a(r)?"page-content--is-scrolled":"",a(o).isTablet?"page-content--mobile-view":""]]}),[t("header",lt,[c(N,null,{default:g(()=>[c(R,{"is-sticky":a(r),height:a(_)},null,8,["is-sticky","height"])]),_:1})]),t("main",_t,[c(N,null,{default:g(()=>[te(v.$slots,"default")]),_:3})]),t("aside",dt,[c(F,{navigation:s,"is-open":a(f),"header-height":a(_)},null,8,["is-open","header-height"])])],16)}}});export{Mt as _};
