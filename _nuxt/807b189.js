(window.webpackJsonp=window.webpackJsonp||[]).push([[2,18,32],{611:function(e,t,n){"use strict";n.r(t);n(83),n(6),n(5),n(7),n(4),n(9);var r=n(38),o=n(35),c=n(36),l=n(40),f=n(41),d=n(25),h=n(21),_=(n(3),n(1),n(34),n(17)),v=n(66),m=n(104),y=n(652),O=n(114),x=n(186),j=n.n(x),w=n(647),R=n(150),C=n(355),k=n.n(C),P=n(225),S=n(653);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var D=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},N=function(e){Object(l.a)(n,e);var t=M(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).name="PageHeader",e}return Object(c.a)(n,[{key:"isMobileView",get:function(){return m.a.breakpoints().isTablet}},{key:"handleSearchOpen",value:function(){this.searchRef.doOpen()}},{key:"handleSearchSelect",value:function(){this.searchRef.doClose()}},{key:"handleBurgerBtnClick",value:function(){m.a.global().mobileMenuOpened=!m.a.global().mobileMenuOpened,Object(P.a)(!0)}}]),n}(_.Vue);D([Object(_.Prop)({required:!0})],N.prototype,"height",void 0),D([Object(_.Prop)({default:!1})],N.prototype,"isSticky",void 0),D([Object(_.Ref)("search")],N.prototype,"searchRef",void 0),N=D([Object(_.Component)({components:{BreadcrumbsNavigation:S.default,CDialog:R.default,MainSearch:w.default,CButton:O.default,LoginSwitcher:y.default,SearchIcon:j.a,MenuIcon:k.a},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(v.d)(m.a.breakpoints,["isMobile","isTablet"]))})],N);var V=N,L=(n(697),n(37)),component=Object(L.a)(V,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"page-header",class:[e.isSticky?"page-header--is-sticky":"",e.isMobileView?"page-header--is-mobile-view":""],style:{height:e.height+"px"}},[t("div",{staticClass:"page-header__inner"},[t("div",{staticClass:"page-header__col page-header__col--left"},[e.isMobileView?t("span",{staticClass:"page-header__col-item"},[t("CButton",{attrs:{"is-square":"","is-text":""},on:{click:e.handleBurgerBtnClick}},[t("MenuIcon")],1)],1):e._e(),e._v(" "),t("span",{staticClass:"page-header__col-item"},[t("BreadcrumbsNavigation")],1)]),e._v(" "),t("div",{staticClass:"page-header__col page-header__col--right"},[t("span",{staticClass:"page-header__col-item"},[e.isMobileView?e._e():t("MainSearch",{staticClass:"page-header__search"})],1)]),e._v(" "),t("div",{staticClass:"page-header__col page-header__col--right"},[t("span",{staticClass:"page-header__col-item"},[e.isMobileView?t("CButton",{attrs:{"is-square":"","is-text":""},on:{click:e.handleSearchOpen}},[t("SearchIcon")],1):e._e()],1),e._v(" "),t("span",{staticClass:"page-header__col-item"},[t("LoginSwitcher")],1)])]),e._v(" "),e.isMobileView?t("CDialog",{ref:"search",attrs:{title:"Поиск аккаунтов и кланов","append-to-body":"",width:"480px",position:"top","close-one-back-disable":""}},[t("MainSearch",{staticStyle:{height:"270px"},on:{select:e.handleSearchSelect}})],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BreadcrumbsNavigation:n(653).default,MainSearch:n(647).default,LoginSwitcher:n(652).default})},638:function(e,t,n){var content=n(678);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(74).default)("7939f5b1",content,!0,{sourceMap:!1})},639:function(e,t,n){var content=n(680);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(74).default)("9bddbc7a",content,!0,{sourceMap:!1})},652:function(e,t,n){"use strict";n.r(t);n(34),n(83),n(6),n(5),n(7),n(4),n(9);var r=n(38),o=n(12),c=n(35),l=n(36),f=n(40),d=n(41),h=n(25),_=n(21),v=(n(48),n(3),n(1),n(58),n(57),n(17)),m=n(66),y=n(114),O=n(224),x=n(75),j=n(104),w=n(150);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(h.a)(e);if(t){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var k=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(_.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},P=function(e){Object(f.a)(h,e);var t,n,r,d=C(h);function h(){var e;return Object(c.a)(this,h),(e=d.apply(this,arguments)).name="LoginSwitcher",e.user=j.a.user(),e}return Object(l.a)(h,[{key:"logged",get:function(){return 0!==this.user.accountId}},{key:"login",value:(r=Object(o.a)(regeneratorRuntime.mark((function e(){var t,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.auth.login({redirect_uri:location.href,nofollow:1});case 2:t=e.sent,(data=t.data)&&(window.location.href=data.location);case 5:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})},{key:"logout",value:(n=Object(o.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.auth.logout({access_token:t});case 2:x.a.storage.removeUser(),this.user.resetUser(),location.assign("/");case 5:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"handleLogoutConfirm",value:function(e){var t=x.a.storage.getUser();t&&(e&&this.logout(t.access_token),this.logoutConfirmRef.doClose())}},{key:"handleSwitcher",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.a.storage.getUser()){e.next=6;break}return e.next=4,this.login();case 4:e.next=8;break;case 6:return e.next=8,this.logoutConfirmRef.doOpen();case 8:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),h}(v.Vue);k([Object(v.Ref)("logoutConfirm")],P.prototype,"logoutConfirmRef",void 0),P=k([Object(v.Component)({components:{CDialog:w.default,CButton:y.default,login:function(){return Promise.resolve().then(n.t.bind(null,489,7))},logout:function(){return Promise.resolve().then(n.t.bind(null,490,7))}},computed:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(m.d)(j.a.breakpoints,["isTablet"]))})],P);var S=P,B=(n(677),n(37)),component=Object(B.a)(S,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"login-switcher"},[e.isTablet?e._e():t("div",{staticClass:"login-switcher__username"},[t("span",{staticClass:"login-switcher__username-text"},[e._v("\n      "+e._s(e.user.name)+"\n    ")])]),e._v(" "),t("CButton",{staticClass:"login-switcher__btn",attrs:{"is-text":"","is-square":"",align:"center",title:e.logged?"Выйти":"Войти"},on:{click:e.handleSwitcher}},[t(e.logged?"logout":"login",{tag:"component"})],1),e._v(" "),t("CDialog",{ref:"logoutConfirm",attrs:{title:"Выход из аккаунта","append-to-body":""}},[t("div",{staticStyle:{margin:"0 0 1em"}},[e._v("\n      Вы уверены, что хотите выйти из аккаунта?\n    ")]),e._v(" "),t("div",{staticStyle:{"text-align":"right"}},[t("CButton",{attrs:{align:"center",width:"80px"},on:{click:function(t){return e.handleLogoutConfirm(!0)}}},[e._v("\n        Да\n      ")]),e._v(" "),t("CButton",{attrs:{align:"center",width:"80px"},on:{click:function(t){return e.handleLogoutConfirm(!1)}}},[e._v("\n        Нет\n      ")])],1)])],1)}),[],!1,null,null,null);t.default=component.exports},653:function(e,t,n){"use strict";n.r(t);n(83);var r=n(35),o=n(36),c=n(40),l=n(41),f=n(25),d=n(21),h=(n(3),n(1),n(34),n(17)),_=n(114),v=n(115);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},O=function(e){Object(c.a)(n,e);var t=m(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).name="BreadcrumbsNavigation",e}return Object(o.a)(n,[{key:"rootRouteName",get:function(){var e,t;return null!==(e=null===(t=String(this.$route.name).split("-"))||void 0===t?void 0:t[0])&&void 0!==e?e:"index"}},{key:"currentRouteName",get:function(){var e;return null!==(e=this.$route.name)&&void 0!==e?e:""}},{key:"isRoot",get:function(){return this.currentRouteName===this.rootRouteName}}]),n}(h.Vue),x=O=y([Object(h.Component)({components:{CButton:_.default,SvgIcon:v.default}})],O),j=(n(679),n(37)),component=Object(j.a)(x,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"breadcrumbs-navigation"},[t("div",{staticClass:"breadcrumbs-navigation__inner"},[e.isRoot?t("span",{staticClass:"breadcrumbs-navigation__root"},[e._v("\n      "+e._s(e.$formatter.route.getTitle(e.rootRouteName))+"\n    ")]):t("nuxt-link",{staticClass:"breadcrumbs-navigation__root link",attrs:{to:{name:e.rootRouteName}}},[e._v("\n      "+e._s(e.$formatter.route.getTitle(e.rootRouteName))+"\n    ")]),e._v(" "),e.isRoot?e._e():[t("span",{staticClass:"breadcrumbs-navigation__separator"}),e._v(" "),t("span",{staticClass:"breadcrumbs-navigation__current"},[e._v("\n        "+e._s(e.$formatter.route.getTitle(e.currentRouteName))+"\n      ")])]],2)])}),[],!1,null,null,null);t.default=component.exports},659:function(e,t,n){var content=n(698);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(74).default)("88f7260c",content,!0,{sourceMap:!1})},677:function(e,t,n){"use strict";n(638)},678:function(e,t,n){var r=n(73)((function(i){return i[1]}));r.push([e.i,".login-switcher{align-items:center;display:flex;position:relative}.login-switcher__username{align-self:center;display:inline-flex;max-width:200px;padding:0 8px;position:relative}.login-switcher__username-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""]),r.locals={},e.exports=r},679:function(e,t,n){"use strict";n(639)},680:function(e,t,n){var r=n(73)((function(i){return i[1]}));r.push([e.i,".breadcrumbs-navigation__inner{align-items:center;display:flex}.breadcrumbs-navigation__separator{border-left:1px solid var(--border-color);height:16px;margin:0 10px;transform:rotate(26deg)}",""]),r.locals={},e.exports=r},697:function(e,t,n){"use strict";n(659)},698:function(e,t,n){var r=n(73)((function(i){return i[1]}));r.push([e.i,".page-header__inner{align-items:center;display:flex;height:54px}.page-header__col{align-items:center;display:flex;flex:1}.page-header__col--left .page-header__col-item{margin:0 10px 0 0}.page-header__col--right{justify-content:flex-end}.page-header__col--right .page-header__col-item{margin:0 0 0 10px}.page-header__col-item{display:inline-flex;flex:none;margin:0}.page-header__col-item--menu{margin:0 10px 0 0}.page-header__logo{align-items:center;color:var(--color-text);display:flex;flex:none;margin:0 1em 0 0;position:relative;-webkit-text-decoration:none;text-decoration:none;transition:opacity .2s}.page-header__logo:link:hover{opacity:.7}.page-header__logo-icon{align-items:center;background-color:var(--color-primary);border-radius:2px;color:var(--bg-color-darken);display:inline-flex;flex:none;height:30px;justify-content:center;margin:0 14px 0 0;-webkit-text-decoration:none;text-decoration:none;width:30px}@media only screen and (max-width:1024px){.page-header__logo-icon{margin:0 10px 0 0}}.page-header__logo-text{align-self:center;display:inline-flex;font-weight:500}.page-header__breadcrumbs{font-weight:500;padding:0}.page-header__search{max-width:32vw;width:460px}",""]),r.locals={},e.exports=r}}]);