(window.webpackJsonp=window.webpackJsonp||[]).push([[63,32,35,36,54],{573:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},576:function(e,t,n){var r=n(598),o="object"==typeof self&&self&&self.Object===Object&&self,c=r||o||Function("return this")();e.exports=c},578:function(e,t,n){var r=n(576).Symbol;e.exports=r},584:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},586:function(e,t,n){var content=n(617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("71116536",content,!0,{sourceMap:!1})},589:function(e,t,n){"use strict";n.r(t);n(82);var r=n(35),o=n(36),c=n(39),l=n(40),f=n(24),d=n(19),v=(n(3),n(1),n(34),n(615)),h=n.n(v),y=n(16),x=n(88),m=n(179),O=n(597),j=n(229),_=n(614),w=n(638),R=n(103),S=n(228),P=[{label:S.a.getTitle("index"),key:"main",to:{name:"index"},icon:"home"},{label:S.a.getTitle("account"),key:"account",to:{name:"account"},icon:"person"},{label:S.a.getTitle("clan"),key:"clan",to:{name:"clan"},icon:"groups-icon"},{label:S.a.getTitle("tournaments"),key:"tournaments",to:{name:"tournaments"},icon:"emoji-events"},{label:S.a.getTitle("widgets"),key:"widgets",to:{name:"widgets"},icon:"widgets",isHidden:!0}];function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var C=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},T=function(e){Object(c.a)(n,e);var t=k(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).name="Page",e.isInit=!1,e.isScrolled=!1,e.headerHeight=54,e.navigation=P,e.scrollThrottled=h()(e.handleScroll,60),e}return Object(o.a)(n,[{key:"isMobileView",get:function(){return R.a.breakpoints().isTablet}},{key:"mobileMenuOpened",get:function(){return R.a.global().mobileMenuOpened}},{key:"isSidebarOpen",get:function(){return!this.isMobileView||this.mobileMenuOpened}},{key:"routeChanged",value:function(){R.a.global().mobileMenuOpened=!1}},{key:"mounted",value:function(){var e;null===(e=window)||void 0===e||e.addEventListener("scroll",this.scrollThrottled),this.scrollThrottled()}},{key:"created",value:function(){this.isInit=!0}},{key:"scroll",value:function(){return window.scrollY}},{key:"handleScroll",value:function(){this.scroll(),this.headerSticky()}},{key:"headerSticky",value:function(){return this.isScrolled=window.scrollY>10}}]),n}(y.Vue);C([Object(y.Watch)("$route")],T.prototype,"routeChanged",null),C([Object(x.Emit)()],T.prototype,"scroll",null);var M=T=C([Object(y.Component)({components:{CNotify:j.default,ContentBox:m.default,PageHeader:O.default,PageSidebar:_.default,PageSidebarHeader:w.default}})],T),B=(n(616),n(37)),component=Object(B.a)(M,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"page",class:[e.isScrolled?"page--is-scrolled":"",e.isMobileView?"page--mobile-view":""]},[t("header",{staticClass:"page__header"},[t("ContentBox",[t("PageHeader",{attrs:{"is-sticky":e.isScrolled,height:e.headerHeight}})],1)],1),e._v(" "),t("main",{staticClass:"page__main"},[t("ContentBox",[e._t("default")],2)],1),e._v(" "),t("aside",{staticClass:"page__sidebar"},[t("PageSidebar",{attrs:{navigation:e.navigation,"is-open":e.isSidebarOpen,"header-height":e.headerHeight}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PageHeader:n(597).default,ContentBox:n(179).default,PageSidebar:n(614).default})},590:function(e,t,n){var r=n(578),o=n(604),c=n(605),l=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?o(e):c(e)}},594:function(e,t,n){var r=n(573),o=n(599),c=n(600),l=Math.max,f=Math.min;e.exports=function(e,t,n){var d,v,h,y,x,m,O=0,j=!1,_=!1,w=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function R(time){var t=d,n=v;return d=v=void 0,O=time,y=e.apply(n,t)}function S(time){var e=time-m;return void 0===m||e>=t||e<0||_&&time-O>=h}function P(){var time=o();if(S(time))return k(time);x=setTimeout(P,function(time){var e=t-(time-m);return _?f(e,h-(time-O)):e}(time))}function k(time){return x=void 0,w&&d?R(time):(d=v=void 0,y)}function C(){var time=o(),e=S(time);if(d=arguments,v=this,m=time,e){if(void 0===x)return function(time){return O=time,x=setTimeout(P,t),j?R(time):y}(m);if(_)return clearTimeout(x),x=setTimeout(P,t),R(m)}return void 0===x&&(x=setTimeout(P,t)),y}return t=c(t)||0,r(n)&&(j=!!n.leading,h=(_="maxWait"in n)?l(c(n.maxWait)||0,t):h,w="trailing"in n?!!n.trailing:w),C.cancel=function(){void 0!==x&&clearTimeout(x),O=0,d=m=v=x=void 0},C.flush=function(){return void 0===x?y:k(o())},C}},598:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(57))},599:function(e,t,n){var r=n(576);e.exports=function(){return r.Date.now()}},600:function(e,t,n){var r=n(601),o=n(573),c=n(603),l=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,d=/^0o[0-7]+$/i,v=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(c(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=r(e);var n=f.test(e);return n||d.test(e)?v(e.slice(2),n?2:8):l.test(e)?NaN:+e}},601:function(e,t,n){var r=n(602),o=/^\s+/;e.exports=function(e){return e?e.slice(0,r(e)+1).replace(o,""):e}},602:function(e,t){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},603:function(e,t,n){var r=n(590),o=n(584);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},604:function(e,t,n){var r=n(578),o=Object.prototype,c=o.hasOwnProperty,l=o.toString,f=r?r.toStringTag:void 0;e.exports=function(e){var t=c.call(e,f),n=e[f];try{e[f]=void 0;var r=!0}catch(e){}var o=l.call(e);return r&&(t?e[f]=n:delete e[f]),o}},605:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},615:function(e,t,n){var r=n(594),o=n(573);e.exports=function(e,t,n){var c=!0,l=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return o(n)&&(c="leading"in n?!!n.leading:c,l="trailing"in n?!!n.trailing:l),r(e,t,{leading:c,maxWait:t,trailing:l})}},616:function(e,t,n){"use strict";n(586)},617:function(e,t,n){var r=n(71)((function(i){return i[1]}));r.push([e.i,".page__header{display:flex;flex-direction:column;justify-content:center;left:220px;position:fixed;right:0;top:0;transform:translateZ(0);transition:background-color .1s,box-shadow .1s;z-index:4}.page--is-scrolled .page__header{background-color:var(--bg-color);box-shadow:0 0 8px rgba(0,0,0,.1),0 0 16px rgba(0,0,0,.1),0 0 32px rgba(0,0,0,.1)}.page--mobile-view .page__header{left:0}.page__header-inner{display:flex}.page__main{min-width:0;padding:54px 0 0 220px;z-index:1}.page--mobile-view .page__main{padding:54px 0 0}.page__notify{pointer-events:none;right:0;z-index:6}.page__notify,.page__sidebar{bottom:0;position:fixed;top:0}.page__sidebar{border-right:1px solid var(--border-color-light);left:0;width:220px;z-index:5}.page--mobile-view .page__sidebar{border-right:none;box-shadow:0 0 8px rgba(0,0,0,.1),0 0 16px rgba(0,0,0,.1),0 0 32px rgba(0,0,0,.1);width:auto}",""]),r.locals={},e.exports=r},684:function(e,t,n){var content=n(738);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("5da8c66c",content,!0,{sourceMap:!1})},731:function(e,t,n){"use strict";n.r(t);n(82);var r=n(36),o=n(35),c=n(39),l=n(40),f=n(24),d=n(19),v=(n(3),n(1),n(34),n(16)),h=n(103);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var x=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},m=function(e){Object(c.a)(n,e);var t=y(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).name="WidgetAccountStat",e.user=h.a.user(),e}return Object(r.a)(n)}(v.Vue),O=m=x([Object(v.Component)({components:{}})],m),j=(n(737),n(37)),component=Object(j.a)(O,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"widget-account-stat-page"},[e._v("\n  widget\n")])}),[],!1,null,null,null);t.default=component.exports},737:function(e,t,n){"use strict";n(684)},738:function(e,t,n){var r=n(71)((function(i){return i[1]}));r.push([e.i,"",""]),r.locals={},e.exports=r},808:function(e,t,n){var content=n(846);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(72).default)("80fafeca",content,!0,{sourceMap:!1})},845:function(e,t,n){"use strict";n(808)},846:function(e,t,n){var r=n(71)((function(i){return i[1]}));r.push([e.i,".widgets-account-stat-page{padding:10px 0 20px}",""]),r.locals={},e.exports=r},929:function(e,t,n){"use strict";n.r(t);n(82);var r=n(36),o=n(35),c=n(39),l=n(40),f=n(24),d=n(19),v=(n(3),n(1),n(34),n(16)),h=n(589),y=n(103),x=n(731);function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(e,t,n,desc){var r,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(o<3?r(c):o>3?r(t,n,c):r(t,n))||c);return o>3&&c&&Object.defineProperty(t,n,c),c},j=function(e){Object(c.a)(n,e);var t=m(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).name="WidgetsAccountStatPage",e.user=y.a.user(),e}return Object(r.a)(n)}(v.Vue),_=j=O([Object(v.Component)({components:{WidgetAccountStat:x.default,Page:h.default},head:function(){return{title:"Виджет Статистики Аккаунта | Blitz Commander"}}})],j),w=(n(845),n(37)),component=Object(w.a)(_,(function(){var e=this._self._c;this._self._setupProxy;return e("div",{staticClass:"widgets-account-stat-page"},[e("WidgetAccountStat")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{WidgetAccountStat:n(731).default})}}]);