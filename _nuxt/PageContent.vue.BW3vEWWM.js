import{u as Z,_ as N,a as E,d as K}from"./disableScroll.DjVa_9z0.js";import{_ as A}from"./nuxt-link.Co6L5LJl.js";import{f as w,g as P,i as p,o as a,c as m,a as e,k as n,t as C,j as f,w as g,d as B,F,m as v,r as I,b as l,C as U,K as Y,D as G,W as J,A as Q,X as ee,z as j,Y as te,Z as ne,$ as oe,s as T,q as se,E as ae}from"./entry.DP5yAQ98.js";import{a as ie,b as re,_ as W}from"./ContentBox.vue.D4kCB2dM.js";import{_ as ce,g as le,b as _e}from"./CDialog.vue.CALeW1zY.js";import{a as M,u as O,b as V}from"./index.DoNr5vfs.js";import{u as de}from"./user.ZEoePuA8.js";import{s as D,a as z}from"./request.5IkpOjNq.js";import{a as ue}from"./index.DVpF3T2t.js";import ge from"./leader.D6ddP-Y1.js";import me from"./dark-mode.DbjQkAUq.js";import pe from"./light-mode.DjyTuOBr.js";import{a as he}from"./debounce.C9kaufHr.js";const fe={class:"breadcrumbs-navigation"},be={class:"breadcrumbs-navigation__inner"},ve={key:0,class:"breadcrumbs-navigation__root"},ye=e("span",{class:"breadcrumbs-navigation__separator"},null,-1),ke={class:"breadcrumbs-navigation__current"},$e=w({__name:"BreadcrumbsNavigation",setup(u){const i=P(),t=p(()=>{var _;return((_=String(i.name).split("-"))==null?void 0:_[0])??"index"}),r=p(()=>String(i.name??"")),o=p(()=>r===t);return(_,d)=>{const s=A;return a(),m("div",fe,[e("div",be,[n(o)?(a(),m("span",ve,C(_.$formatter.route.getTitle(n(t))),1)):(a(),f(s,{key:1,class:"breadcrumbs-navigation__root link",to:{name:n(t)}},{default:g(()=>[B(C(_.$formatter.route.getTitle(n(t))),1)]),_:1},8,["to"])),n(o)?v("",!0):(a(),m(F,{key:2},[ye,e("span",ke,C(_.$formatter.route.getTitle(n(r))),1)],64))])])}}}),Se={class:"login-switcher"},we={key:0,class:"login-switcher__username"},xe={class:"login-switcher__username-text"},Ce=e("div",{style:{margin:"0 0 1em"}}," Вы уверены, что хотите выйти из аккаунта? ",-1),Te={style:{"text-align":"right"}},Me=w({__name:"LoginSwitcher",setup(u){const i=I(null),t=de(),r=Z(),o=M(),_=O(),d=p(()=>t.accountId!==0),s=p(()=>_.isTablet||o.isTablet||o.isMobile);async function y(){try{const{data:c}=await z.auth.login({redirect_uri:location.href,nofollow:1});c&&(window.location.href=c.location)}catch(c){console.error(c),this.notify.add({type:"error",title:"Вход в аккаунт",message:c instanceof Error?c==null?void 0:c.message:"Неизвестная ошибка"})}}async function h(){await z.auth.logout()}async function b(){await ue.auth.logout(),D.storage.removeUser(),t.resetUser(),location.assign("/")}async function x(){try{await h(),await b()}catch(c){console.error(c),r.add({type:"error",title:"Вход из аккаунта",message:c instanceof Error?c==null?void 0:c.message:"Неизвестная ошибка"})}}function $(c){D.storage.getUser()&&(c&&x(),i.value.doClose())}async function S(){D.storage.getUser()?await i.value.doOpen():await y()}return(c,k)=>{const q=N,L=E,H=ce;return a(),m("div",Se,[n(s)?v("",!0):(a(),m("div",we,[e("span",xe,C(n(t).name),1)])),l(L,{class:"login-switcher__btn","is-text":"","is-square":"",align:"center",title:n(d)?"Выйти":"Войти",onClick:S},{default:g(()=>[l(q,{name:n(d)?"logout":"login"},null,8,["name"])]),_:1},8,["title"]),l(H,{ref_key:"logoutConfirmRef",ref:i,title:"Выход из аккаунта","append-to-body":""},{default:g(()=>[Ce,e("div",Te,[l(L,{align:"center",width:"80px",onClick:k[0]||(k[0]=R=>$(!0))},{default:g(()=>[B(" Да ")]),_:1}),l(L,{align:"center",width:"80px",onClick:k[1]||(k[1]=R=>$(!1))},{default:g(()=>[B(" Нет ")]),_:1})])]),_:1},512)])}}}),Be={class:"page-header__inner"},Ne={class:"page-header__col page-header__col--left"},Oe={key:0,class:"page-header__col-item"},Le={class:"page-header__col-item"},Re={class:"page-header__col page-header__col--right"},Ie={class:"page-header__col-item"},Ee={class:"page-header__col page-header__col--right"},Pe={class:"page-header__col-item"},qe={class:"page-header__col-item"},He=w({__name:"PageHeader",props:{height:{type:Number,required:!0},isSticky:{type:Boolean,default:!1}},setup(u){const i=M(),t=O(),r=V(),o=p(()=>t.isTablet||i.isTablet||i.isMobile);function _(){r.toggleMainSearch(!0)}function d(){r.toggleMobileMenu(),K(!0)}return(s,y)=>{const h=N,b=E,x=$e,$=ie,S=Me;return a(),m("div",{class:U(["page-header",[u.isSticky?"page-header--is-sticky":"",n(o)?"page-header--is-mobile-view":""]]),style:Y({height:u.height+"px"})},[e("div",Be,[e("div",Ne,[n(o)?(a(),m("div",Oe,[l(b,{"is-square":"","is-text":"",onClick:d},{default:g(()=>[l(h,{name:"menu"})]),_:1})])):v("",!0),e("div",Le,[l(x)])]),e("div",Re,[e("div",Ie,[n(o)?v("",!0):(a(),f($,{key:0,class:"page-header__search"}))])]),e("div",Ee,[e("div",Pe,[n(o)?(a(),f(b,{key:0,"is-square":"","is-text":"",onClick:_},{default:g(()=>[l(h,{name:"search"})]),_:1})):v("",!0)]),e("div",qe,[l(S)])])])],6)}}}),De={class:"page-sidebar-header"},je={class:"page-sidebar-header__inner"},Ue={class:"page-sidebar-header__logo-icon"},Ve=e("span",{class:"page-sidebar-header__logo-text"}," Blitz Commander ",-1),ze=w({__name:"PageSidebarHeader",emits:["close"],setup(u,{emit:i}){const t=O(),r=M(),o=i,_=p(()=>t.isTablet||r.isTablet||r.isMobile);return(d,s)=>{const y=N,h=E;return a(),m("div",De,[e("div",je,[(a(),f(G((d._.provides[J]||d.$route).name==="index"?"span":"nuxt-link"),{class:"page-sidebar-header__logo",to:"/"},{default:g(()=>[e("span",Ue,[l(n(ge),{style:{width:"24px",height:"24px"}})]),Ve]),_:1})),n(_)?(a(),f(h,{key:0,"is-square":"","is-text":"",class:"page-sidebar-header__close",onClick:s[0]||(s[0]=b=>o("close"))},{default:g(()=>[l(y,{name:"close"})]),_:1})):v("",!0)])])}}}),Ae={class:"navigation-list"},Fe={class:"navigation-list__list"},Ye={key:0,class:"navigation-list__link navigation-list__link--is-active"},We=w({__name:"NavigationList",props:{navigation:{type:Array,required:!0,default:()=>[]}},setup(u){const i=P();function t(r){return i.matched.some(o=>{const _=String(o.name).split("-")[0]??"index",d=String(r.to.name).split("-")[0]??"index";return _===d})}return(r,o)=>{const _=N,d=A;return a(),m("nav",Ae,[e("ul",Fe,[(a(!0),m(F,null,Q(u.navigation.filter(s=>!s.isHidden),s=>(a(),m("li",{key:s.key,class:"navigation-list__item"},[t(s)?(a(),m("span",Ye,[s.icon?(a(),f(_,{key:0,name:s.icon,class:"navigation-list__icon"},null,8,["name"])):v("",!0),B(" "+C(s.label),1)])):(a(),f(d,{key:1,class:"navigation-list__link",to:s.to},{default:g(()=>[s.icon?(a(),f(_,{key:0,name:s.icon,class:"navigation-list__icon"},null,8,["name"])):v("",!0),B(" "+C(s.label),1)]),_:2},1032,["to"]))]))),128))])])}}}),Xe=()=>ee("color-mode").value,Ze=w({__name:"ThemeSwitcher",setup(u){const i=Xe(),t=p(()=>i.value==="system"?"":i.value==="dark"?"light":"dark");function r(){const o=i.value==="light";i.preference=o?"dark":"light"}return(o,_)=>{const d=re,s=E;return a(),f(s,{class:"theme-switcher","is-text":"","is-square":"",title:"Переключить тему",onClick:r},{default:g(()=>[l(d,null,{default:g(()=>[n(t)==="dark"?(a(),f(n(me),{key:0,class:"theme-switcher__icon"})):n(t)==="light"?(a(),f(n(pe),{key:1,class:"theme-switcher__icon"})):v("",!0)]),_:1})]),_:1})}}}),Ke={class:"page-sidebar__body"},Ge={class:"page-sidebar__footer"},Je={class:"page-sidebar__prop"},Qe=e("span",{class:"page-sidebar__prop-title"},"Тема",-1),et={target:"_blank",href:"https://t.me/+kpbNPjc8nyZlMmIy",class:"page-sidebar__prop link"},tt=e("span",{class:"page-sidebar__prop-title"},"Комьюнити",-1),nt={target:"_blank",href:"https://yoomoney.ru/to/4100118432687922",class:"page-sidebar__prop link"},ot=e("span",{class:"page-sidebar__prop-title"},"Поблагодарить",-1),st={class:"page-sidebar__version"},at=w({__name:"PageSidebar",props:{isOpen:{type:Boolean,default:!1},navigation:{type:Array,default:()=>[]},headerHeight:{type:Number,default:0}},setup(u){const i=oe(),t=V(),r=O(),o=M(),_=P(),d=p(()=>r.isTablet||o.isTablet||o.isMobile),s=p(()=>i.public.clientVersion);j(d,()=>{d.value||t.toggleMobileMenu(!1)}),j(()=>_.name,(h,b)=>{h!==b&&setTimeout(()=>t.toggleMobileMenu(!1),300)},{immediate:!0});function y(){t.toggleMobileMenu(!1)}return(h,b)=>{const x=ze,$=We,S=Ze,c=N,k=W;return a(),f(ne,{name:"page-sidebar-",duration:600},{default:g(()=>[u.isOpen?(a(),m("div",{key:0,class:U(["page-sidebar",[n(d)?"page-sidebar--mobile-view":""]]),onClick:te(y,["self"])},[l(k,{class:"page-sidebar__panel","inner-class":"page-sidebar__inner"},{default:g(()=>[l(x,{class:"page-sidebar__header",style:Y({height:u.headerHeight+"px"}),onClose:y},null,8,["style"]),e("div",Ke,[l($,{class:"page-sidebar__navigation",navigation:u.navigation},null,8,["navigation"])]),e("div",Ge,[e("label",Je,[l(S),Qe]),e("a",et,[l(c,{name:"telegram",style:{margin:"6px"}}),tt]),e("a",nt,[l(c,{name:"savings",style:{margin:"6px"}}),ot]),e("div",st," v"+C(n(s)),1)])]),_:1})],2)):v("",!0)]),_:1})}}});var it=he,rt=_e,ct="Expected a function";function lt(u,i,t){var r=!0,o=!0;if(typeof u!="function")throw new TypeError(ct);return rt(t)&&(r="leading"in t?!!t.leading:r,o="trailing"in t?!!t.trailing:o),it(u,i,{leading:r,maxWait:i,trailing:o})}var _t=lt;const dt=le(_t),ut={class:"page-content__header"},gt={class:"page-content__main"},mt={class:"page-content__sidebar"},Mt=w({__name:"PageContent",emits:["scroll"],setup(u,{emit:i}){const t=P(),r=V(),o=O(),_=I(!1),d=I(!1),s=I(54),y=[{label:T.route.getTitle("index"),key:"main",to:{name:"index"},icon:"home"},{label:T.route.getTitle("account"),key:"account",to:{name:"account"},icon:"person"},{label:T.route.getTitle("clan"),key:"clan",to:{name:"clan"},icon:"groups"},{label:T.route.getTitle("leaderboards"),key:"leaderboards",to:{name:"leaderboards"},icon:"leaderboard"},{label:T.route.getTitle("tournaments"),key:"tournaments",to:{name:"tournaments"},icon:"emoji-events"},{label:T.route.getTitle("widgets"),key:"widgets",to:{name:"widgets"},icon:"widgets"}],h=p(()=>o.isTablet||M().isTablet||M().isMobile),b=p(()=>r.mobileMenuOpened),x=p(()=>!h.value||b.value),$=i;j(()=>t,()=>{r.toggleMobileMenu(!1)}),se(()=>{_.value=!0,window==null||window.addEventListener("scroll",S),S()});const S=dt(c,60);function c(){$("scroll",window.scrollY),k()}function k(){return d.value=window.scrollY>10}return(q,L)=>{const H=He,R=W,X=at;return a(),m("div",{class:U(["page-content",[n(d)?"page-content--is-scrolled":"",n(h)?"page-content--mobile-view":""]])},[e("header",ut,[l(R,null,{default:g(()=>[l(H,{"is-sticky":n(d),height:n(s)},null,8,["is-sticky","height"])]),_:1})]),e("main",gt,[l(R,null,{default:g(()=>[ae(q.$slots,"default")]),_:3})]),e("aside",mt,[l(X,{navigation:y,"is-open":n(x),"header-height":n(s)},null,8,["is-open","header-height"])])],2)}}});export{Mt as _};
