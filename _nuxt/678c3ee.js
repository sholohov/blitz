(window.webpackJsonp=window.webpackJsonp||[]).push([[1,17,20,45],{576:function(e,t,n){"use strict";n.r(t);n(82);var r=n(35),o=n(36),c=n(39),l=n(40),f=n(24),d=n(19),h=(n(3),n(1),n(34),n(16)),v=n(113);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},O=function(e){Object(c.a)(n,e);var t=_(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).name="CButtonCheckbox",e}return Object(o.a)(n,[{key:"handleClick",value:function(){this.$emit("input",!this.checked),this.$emit("change",!this.checked)}}]),n}(h.Vue);y([Object(h.Model)("change",{default:!1})],O.prototype,"checked",void 0);var m=O=y([Object(h.Component)({components:{CButton:v.default}})],O),j=(n(600),n(37)),component=Object(j.a)(m,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("CButton",{staticClass:"c-button-checkbox",on:{click:e.handleClick},scopedSlots:e._u([{key:"before",fn:function(){return[t("span",{staticClass:"c-button-checkbox__indicator",class:[e.checked?"is-active":""]}),e._v(" "),t("span",{staticClass:"c-button-checkbox__before"},[e._t("before")],2)]},proxy:!0},{key:"after",fn:function(){return[e._t("after")]},proxy:!0}],null,!0)},[e._v(" "),e._v(" "),e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},578:function(e,t,n){var content=n(601);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("d7ffc0c8",content,!0,{sourceMap:!1})},584:function(e,t,n){var content=n(614);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("182fa50e",content,!0,{sourceMap:!1})},588:function(e,t,n){"use strict";n.r(t);n(82);var r=n(35),o=n(36),c=n(39),l=n(40),f=n(24),d=n(19),h=(n(3),n(1),n(34),n(569),n(16)),v=n(113),_=n(339),y=n.n(_),O=n(576);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},x=function(e){Object(c.a)(n,e);var t=m(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).name="CSelect",e.isOpen=!1,e.currentOption={value:null,label:"Выбрать"},e}return Object(o.a)(n,[{key:"valueChanged",value:function(){var e=this,t=this.options.find((function(i){return i.value===e.value}));t&&(this.currentOption=t)}},{key:"created",value:function(){window.addEventListener("click",this.handleClickOutside)}},{key:"destroyed",value:function(){window.removeEventListener("click",this.handleClickOutside)}},{key:"handleOpenBtn",value:function(){this.isOpen=!this.isOpen}},{key:"handleOptionBtn",value:function(option){this.currentOption=option,this.isOpen=!1,this.$emit("input",this.currentOption.value),this.$emit("change",this.currentOption.value)}},{key:"handleClickOutside",value:function(e){this.$el.contains(e.target)||(this.isOpen=!1)}}]),n}(h.Vue);j([Object(h.Model)("change")],x.prototype,"value",void 0),j([Object(h.Prop)({default:function(){return[]}})],x.prototype,"options",void 0),j([Object(h.Prop)({default:!1})],x.prototype,"disabled",void 0),j([Object(h.Watch)("value",{immediate:!0})],x.prototype,"valueChanged",null);var k=x=j([Object(h.Component)({components:{CButtonCheckbox:O.default,CButton:v.default,ArrowDownIcon:y.a}})],x),w=(n(613),n(37)),component=Object(w.a)(k,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"c-options",class:["c-options--is-"+(e.isOpen?"opened":"closed")]},[t("div",{staticClass:"c-options__input"},[t("CButton",{staticClass:"c-options__trigger",attrs:{disabled:e.disabled},on:{click:e.handleOpenBtn},scopedSlots:e._u([{key:"after",fn:function(){return[t("ArrowDownIcon",{staticClass:"c-options__arrow"})]},proxy:!0}])},[e._v("\n      "+e._s(e.currentOption.label)+"\n      ")]),e._v(" "),t("transition",[e.isOpen&&e.options.length?t("ul",{staticClass:"c-options__list"},[t("li",{staticClass:"c-options__item"},e._l(e.options,(function(option){return t("CButtonCheckbox",{key:option.value,staticClass:"c-options__item-btn",attrs:{checked:option.value===e.value},on:{change:function(t){return e.handleOptionBtn(option)}}},[e._v("\n            "+e._s(option.label)+"\n          ")])})),1)]):e._e()])],1)])}),[],!1,null,null,null);t.default=component.exports},600:function(e,t,n){"use strict";n(578)},601:function(e,t,n){var r=n(71)((function(i){return i[1]}));r.push([e.i,".c-button-checkbox__indicator{background-color:var(--border-color-light);height:20px;transition:background-color .2s;width:4px}.c-button-checkbox__indicator.is-active{background-color:var(--color-green)}.c-button-checkbox__before{align-self:center;display:inline-flex;margin:0 0 0 4px}.c-button-checkbox__before:empty{display:none}",""]),r.locals={},e.exports=r},613:function(e,t,n){"use strict";n(584)},614:function(e,t,n){var r=n(71)((function(i){return i[1]}));r.push([e.i,".c-options{position:relative}.c-options__trigger{width:100%}.c-options__arrow{color:var(--color-grey);transition:transform .2s}.c-options--is-opened .c-options__arrow{transform:scaleY(-1)}.c-options__list{left:0;list-style:none;margin:6px 0 0;padding:0;position:absolute;top:100%;width:100%;z-index:1}.c-options__list.v-enter-active,.c-options__list.v-leave-active{transform-origin:top;transition:transform .2s,opacity .2s}.c-options__list.v-enter,.c-options__list.v-leave-to{opacity:0;transform:translateY(-10px)}.c-options__item-btn{justify-content:flex-start;white-space:nowrap;width:100%}",""]),r.locals={},e.exports=r},647:function(e,t,n){"use strict";n.r(t);n(82);var r=n(35),o=n(36),c=n(39),l=n(40),f=n(24),d=n(19),h=(n(3),n(1),n(34),n(56),n(55),n(16)),v=n(113);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},O=function(e){Object(c.a)(n,e);var t=_(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).name="ThemeSwitcher",e}return Object(o.a)(n,[{key:"theme",get:function(){return"system"===this.$colorMode.value?"span":"dark"===this.$colorMode.value?"light":"dark"}},{key:"themeText",get:function(){return"dark"===this.theme?"Темная":"light"===this.theme?"Светлая":""}},{key:"toggle",value:function(){"light"===this.$colorMode.value?this.$colorMode.preference="dark":this.$colorMode.preference="light"}}]),n}(h.Vue),m=O=y([Object(h.Component)({components:{CButton:v.default,light:function(){return Promise.resolve().then(n.t.bind(null,483,7))},dark:function(){return Promise.resolve().then(n.t.bind(null,476,7))}}})],O),j=(n(704),n(37)),component=Object(j.a)(m,(function(){var e,t=this,n=t._self._c;t._self._setupProxy;return n("CButton",{staticClass:"theme-switcher",attrs:{"is-text":"","is-square":"",title:"Переключить тему"},on:{click:t.toggle}},[n(null!==(e=t.theme)&&void 0!==e?e:"span",{tag:"component"})],1)}),[],!1,null,null,null);t.default=component.exports},666:function(e,t,n){var content=n(705);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("4cb9ae50",content,!0,{sourceMap:!1})},699:function(e,t,n){"use strict";n.r(t);n(82),n(7),n(6),n(8),n(4),n(9);var r=n(41),o=n(35),c=n(36),l=n(39),f=n(40),d=n(24),h=n(19),v=(n(3),n(1),n(34),n(16)),_=n(67),y=n(103),O=n(647),m=n(751),j=n(588),x=n(113),k=n(340),w=n.n(k),C=n(185),R=n.n(C),P=n(696),B=n(151),S=n(363),M=n.n(S),D=n(282);function $(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var V=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},T=function(e){Object(l.a)(n,e);var t=N(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).name="PageHeader",e}return Object(c.a)(n,[{key:"isMobileView",get:function(){return y.a.breakpoints().isTablet}},{key:"handleSearchOpen",value:function(){this.searchRef.doOpen()}},{key:"handleSearchSelect",value:function(){this.searchRef.doClose()}},{key:"handleSearchCloseBtn",value:function(){this.searchRef.doClose()}},{key:"handleBurgerBtnClick",value:function(){y.a.global().mobileMenuOpened=!y.a.global().mobileMenuOpened,Object(D.a)(!0)}}]),n}(v.Vue);V([Object(v.Prop)({required:!0})],T.prototype,"height",void 0),V([Object(v.Prop)({default:!1})],T.prototype,"isSticky",void 0),V([Object(v.Ref)("search")],T.prototype,"searchRef",void 0),T=V([Object(v.Component)({components:{CDialog:B.default,MainSearch:P.default,CButton:x.default,CSelect:j.default,LoginSwitcher:m.default,ThemeSwitcher:O.default,SearchIcon:R.a,TelegramIcon:w.a,MenuIcon:M.a},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(_.d)(y.a.breakpoints,["isMobile","isTablet"]))})],T);var I=T,L=(n(790),n(37)),component=Object(L.a)(I,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"page-header",class:[e.isSticky?"page-header--is-sticky":"",e.isMobileView?"page-header--is-mobile-view":""],style:{height:e.height+"px"}},[t("div",{staticClass:"page-header__inner"},[t("div",{staticClass:"page-header__col"},[t("span",{staticClass:"page-header__col-item"},[e.isMobileView?t("CButton",{attrs:{"is-square":"","is-text":""},on:{click:e.handleBurgerBtnClick}},[t("MenuIcon")],1):e._e()],1),e._v(" "),e.isMobileView?t("span",{staticClass:"page-header__col-item"},[t("span",{staticClass:"page-header__title"},[t("BreadcrumbsNavigation")],1)]):e._e(),e._v(" "),t("span",{staticClass:"page-header__col-item"},[e.isMobileView?e._e():t("MainSearch",{staticClass:"page-header__search"})],1)]),e._v(" "),t("div",{staticClass:"page-header__col"},[t("span",{staticClass:"page-header__col-item"},[e.isMobileView?t("CButton",{attrs:{"is-square":"","is-text":""},on:{click:e.handleSearchOpen}},[t("SearchIcon")],1):e._e()],1),e._v(" "),t("span",{staticClass:"page-header__col-item"},[t("LoginSwitcher")],1)])]),e._v(" "),e.isMobileView?t("CDialog",{ref:"search",attrs:{title:"Поиск аккаунтов и кланов","append-to-body":"",width:"480px",position:"top","close-one-back-disable":""}},[t("MainSearch",{staticStyle:{height:"250px"},on:{select:e.handleSearchSelect}}),e._v(" "),t("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[t("CButton",{on:{click:e.handleSearchCloseBtn}},[e._v("\n        Закрыть\n      ")])],1)],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BreadcrumbsNavigation:n(786).default,MainSearch:n(696).default,LoginSwitcher:n(751).default})},704:function(e,t,n){"use strict";n(666)},705:function(e,t,n){var r=n(71)((function(i){return i[1]}));r.push([e.i,"",""]),r.locals={},e.exports=r},706:function(e,t,n){var content=n(730);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("4c89fc10",content,!0,{sourceMap:!1})},707:function(e,t,n){var content=n(732);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("60b7cbda",content,!0,{sourceMap:!1})},729:function(e,t,n){"use strict";n(706)},730:function(e,t,n){var r=n(71)((function(i){return i[1]}));r.push([e.i,".login-switcher{align-items:center;display:flex;position:relative}.login-switcher__username{align-self:center;display:inline-flex;max-width:200px;padding:0 8px;position:relative}.login-switcher__username-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""]),r.locals={},e.exports=r},731:function(e,t,n){"use strict";n(707)},732:function(e,t,n){var r=n(71)((function(i){return i[1]}));r.push([e.i,".breadcrumbs-navigation__inner{align-items:center;display:flex}.breadcrumbs-navigation__separator{border-left:1px solid var(--border-color);height:16px;margin:0 10px;transform:rotate(26deg)}",""]),r.locals={},e.exports=r},751:function(e,t,n){"use strict";n.r(t);n(34),n(82),n(7),n(6),n(8),n(4),n(9);var r=n(41),o=n(21),c=n(35),l=n(36),f=n(39),d=n(40),h=n(24),v=n(19),_=(n(73),n(3),n(1),n(56),n(55),n(16)),y=n(67),O=n(113),m=n(589),j=n(74),x=n(103),k=n(151);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(h.a)(e);if(t){var o=Object(h.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var R=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},P=function(e){Object(f.a)(h,e);var t,n,r,d=C(h);function h(){var e;return Object(c.a)(this,h),(e=d.apply(this,arguments)).name="LoginSwitcher",e.user=x.a.user(),e}return Object(l.a)(h,[{key:"logged",get:function(){return 0!==this.user.accountId}},{key:"login",value:(r=Object(o.a)(regeneratorRuntime.mark((function e(){var t,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.auth.login({redirect_uri:location.href,nofollow:1});case 2:t=e.sent,(data=t.data)&&(window.location.href=data.location);case 5:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})},{key:"logout",value:(n=Object(o.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.auth.logout({access_token:t});case 2:j.a.storage.removeUser(),this.user.resetUser(),location.assign("/");case 5:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"handleLogoutConfirm",value:function(e){var t=j.a.storage.getUser();t&&(e&&this.logout(t.access_token),this.logoutConfirmRef.doClose())}},{key:"handleSwitcher",value:(t=Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j.a.storage.getUser()){e.next=6;break}return e.next=4,this.login();case 4:e.next=8;break;case 6:return e.next=8,this.logoutConfirmRef.doOpen();case 8:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),h}(_.Vue);R([Object(_.Ref)("logoutConfirm")],P.prototype,"logoutConfirmRef",void 0),P=R([Object(_.Component)({components:{CDialog:k.default,CButton:O.default,login:function(){return Promise.resolve().then(n.t.bind(null,484,7))},logout:function(){return Promise.resolve().then(n.t.bind(null,485,7))}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(y.d)(x.a.breakpoints,["isTablet"]))})],P);var B=P,S=(n(729),n(37)),component=Object(S.a)(B,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"login-switcher"},[e.isTablet?e._e():t("div",{staticClass:"login-switcher__username"},[t("span",{staticClass:"login-switcher__username-text"},[e._v("\n      "+e._s(e.user.name)+"\n    ")])]),e._v(" "),t("CButton",{staticClass:"login-switcher__btn",attrs:{"is-text":"","is-square":"",align:"center",title:e.logged?"Выйти":"Войти"},on:{click:e.handleSwitcher}},[t(e.logged?"logout":"login",{tag:"component"})],1),e._v(" "),t("CDialog",{ref:"logoutConfirm",attrs:{title:"Выход из аккаунта","append-to-body":""}},[t("div",{staticStyle:{margin:"0 0 1em"}},[e._v("\n      Вы уверены, что хотите выйти из аккаунта?\n    ")]),e._v(" "),t("div",{staticStyle:{"text-align":"right"}},[t("CButton",{attrs:{align:"center",width:"80px"},on:{click:function(t){return e.handleLogoutConfirm(!0)}}},[e._v("\n        Да\n      ")]),e._v(" "),t("CButton",{attrs:{align:"center",width:"80px"},on:{click:function(t){return e.handleLogoutConfirm(!1)}}},[e._v("\n        Нет\n      ")])],1)])],1)}),[],!1,null,null,null);t.default=component.exports},756:function(e,t,n){var content=n(791);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("c37588ec",content,!0,{sourceMap:!1})},786:function(e,t,n){"use strict";n.r(t);n(82);var r=n(35),o=n(36),c=n(39),l=n(40),f=n(24),d=n(19),h=(n(3),n(1),n(34),n(16)),v=n(113),_=n(114);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},m=function(e){Object(c.a)(n,e);var t=y(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).name="BreadcrumbsNavigation",e}return Object(o.a)(n,[{key:"rootRouteName",get:function(){var e,t;return null!==(t=null===(e=String(this.$route.name).split("-"))||void 0===e?void 0:e[0])&&void 0!==t?t:"index"}},{key:"currentRouteName",get:function(){var e;return null!==(e=this.$route.name)&&void 0!==e?e:""}},{key:"isRoot",get:function(){return console.log(this.currentRouteName,this.rootRouteName),this.currentRouteName===this.rootRouteName}}]),n}(h.Vue),j=m=O([Object(h.Component)({components:{CButton:v.default,SvgIcon:_.default}})],m),x=(n(731),n(37)),component=Object(x.a)(j,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"breadcrumbs-navigation"},[t("div",{staticClass:"breadcrumbs-navigation__inner"},[e.isRoot?t("span",{staticClass:"breadcrumbs-navigation__root"},[e._v("\n      "+e._s(e.$formatter.route.getTitle(e.rootRouteName))+"\n    ")]):t("nuxt-link",{staticClass:"breadcrumbs-navigation__root link",attrs:{to:{name:e.rootRouteName}}},[e._v("\n      "+e._s(e.$formatter.route.getTitle(e.rootRouteName))+"\n    ")]),e._v(" "),e.isRoot?e._e():[t("span",{staticClass:"breadcrumbs-navigation__separator"}),e._v(" "),t("span",{staticClass:"breadcrumbs-navigation__current"},[e._v("\n        "+e._s(e.$formatter.route.getTitle(e.currentRouteName))+"\n      ")])]],2)])}),[],!1,null,null,null);t.default=component.exports},790:function(e,t,n){"use strict";n(756)},791:function(e,t,n){var r=n(71)((function(i){return i[1]}));r.push([e.i,".page-header__inner{height:54px;justify-content:space-between}.page-header__col,.page-header__inner{align-items:center;display:flex}.page-header__col:not(:last-child){margin:0 16px 0 0}.page-header__col-item{display:inline-flex;flex:none;margin:0}.page-header__col-item--fill{flex:1}.page-header__col-item--last{margin:0 -8px 0 0}.page-header__logo{align-items:center;color:var(--color-text);display:flex;flex:none;margin:0 1em 0 0;position:relative;-webkit-text-decoration:none;text-decoration:none;transition:opacity .2s}.page-header__logo:link:hover{opacity:.7}.page-header__logo-icon{align-items:center;background-color:var(--color-primary);border-radius:2px;color:var(--bg-color-darken);display:inline-flex;flex:none;height:30px;justify-content:center;margin:0 14px 0 0;-webkit-text-decoration:none;text-decoration:none;width:30px}@media only screen and (max-width:1024px){.page-header__logo-icon{margin:0 10px 0 0}}.page-header__logo-text{align-self:center;display:inline-flex;font-weight:500}.page-header__title{font-weight:500;padding:0 10px}.page-header__search{min-width:460px;width:100%}",""]),r.locals={},e.exports=r}}]);