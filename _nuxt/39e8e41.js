(window.webpackJsonp=window.webpackJsonp||[]).push([[78,29,33,40,43,44],{586:function(t,e,n){"use strict";var o=n(2),r=n(57).find,c=n(183),l="find",f=!0;l in[]&&Array(1)[l]((function(){f=!1})),o({target:"Array",proto:!0,forced:f},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},588:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},589:function(t,e,n){var o=n(615),r="object"==typeof self&&self&&self.Object===Object&&self,c=o||r||Function("return this")();t.exports=c},592:function(t,e,n){var content=n(612);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("22cba9cc",content,!0,{sourceMap:!1})},593:function(t,e,n){"use strict";n.r(e);n(84);var o=n(35),r=n(36),c=n(40),l=n(41),f=n(25),d=n(21),h=(n(4),n(1),n(34),n(17)),m=n(114);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var _=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).name="CButtonCheckbox",t}return Object(r.a)(n,[{key:"handleClick",value:function(){this.$emit("input",!this.checked),this.$emit("change",!this.checked)}}]),n}(h.Vue);_([Object(h.Model)("change",{default:!1})],y.prototype,"checked",void 0),_([Object(h.Prop)({default:!1})],y.prototype,"disabled",void 0),_([Object(h.Prop)({default:!1})],y.prototype,"noBorder",void 0);var x=y=_([Object(h.Component)({components:{CButton:m.default}})],y),O=(n(611),n(37)),component=Object(O.a)(x,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("CButton",{staticClass:"c-button-checkbox",attrs:{"no-border":t.noBorder,disabled:t.disabled},on:{click:t.handleClick},scopedSlots:t._u([{key:"before",fn:function(){return[e("span",{staticClass:"c-button-checkbox__indicator",class:[t.checked?"is-active":""]}),t._v(" "),e("span",{staticClass:"c-button-checkbox__before"},[t._t("before")],2)]},proxy:!0},{key:"after",fn:function(){return[t._t("after")]},proxy:!0}],null,!0)},[t._v(" "),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},594:function(t,e,n){var o=n(589).Symbol;t.exports=o},597:function(t,e,n){var content=n(620);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("d1b55c7a",content,!0,{sourceMap:!1})},599:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},601:function(t,e,n){var o=n(594),r=n(617),c=n(618),l=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":l&&l in Object(t)?r(t):c(t)}},602:function(t,e,n){"use strict";n.r(e);n(84);var o=n(35),r=n(36),c=n(40),l=n(41),f=n(25),d=n(21),h=(n(4),n(1),n(34),n(187),n(48),n(586),n(17)),m=n(114),v=n(341),_=n.n(v),y=n(593),x=n(229);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},k=function(t){Object(c.a)(n,t);var e=O(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).name="CSelect",t.isOpen=!1,t.defaultOption=Object.freeze({value:null,label:"Выбрать"}),t.currentOption=t.defaultOption,t}return Object(r.a)(n,[{key:"isMobile",get:function(){return/(Android|webOS|iPhone|iPad|iPod|BlackBerry|Phone)/i.test(navigator.userAgent)}},{key:"valueChanged",value:function(){var t=this,e=this.options.find((function(i){return i.value===t.value}));this.currentOption=null!=e?e:this.defaultOption}},{key:"created",value:function(){window.addEventListener("click",this.handleClickOutside)}},{key:"destroyed",value:function(){window.removeEventListener("click",this.handleClickOutside)}},{key:"handleOpenBtn",value:function(){this.isMobile&&Object(x.a)(!0),this.isOpen=!this.isOpen}},{key:"handleOptionBtn",value:function(option){this.isMobile&&Object(x.a)(!1),this.currentOption=option,this.isOpen=!1,this.$emit("input",this.currentOption.value),this.$emit("change",this.currentOption.value)}},{key:"handleClickOutside",value:function(t){this.$el.contains(t.target)||(this.isOpen=!1)}},{key:"handleBackdropClick",value:function(){this.isOpen=!1,Object(x.a)(!1)}}]),n}(h.Vue);j([Object(h.Model)("change")],k.prototype,"value",void 0),j([Object(h.Prop)({default:function(){return[]}})],k.prototype,"options",void 0),j([Object(h.Prop)({default:!1})],k.prototype,"disabled",void 0),j([Object(h.Prop)()],k.prototype,"idKey",void 0),j([Object(h.Prop)()],k.prototype,"width",void 0),j([Object(h.Watch)("value",{immediate:!0})],k.prototype,"valueChanged",null);var w=k=j([Object(h.Component)({components:{CButtonCheckbox:y.default,CButton:m.default,ArrowDownIcon:_.a}})],k),C=(n(619),n(37)),component=Object(C.a)(w,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"c-options",class:["c-options--is-"+(t.isOpen?"opened":"closed"),t.isMobile?"c-options--is-mobile":""],style:{width:t.width}},[t.isMobile&&t.isOpen&&t.options.length?e("div",{staticClass:"c-options__backdrop",on:{click:t.handleBackdropClick}}):t._e(),t._v(" "),e("div",{staticClass:"c-options__input"},[e("CButton",{staticClass:"c-options__trigger",attrs:{disabled:t.disabled},on:{click:t.handleOpenBtn},scopedSlots:t._u([{key:"after",fn:function(){return[e("ArrowDownIcon",{staticClass:"c-options__arrow"})]},proxy:!0}])},[t._v("\n      "+t._s(t.currentOption.label)+"\n      ")]),t._v(" "),e("transition",[t.isOpen&&t.options.length?e("ul",{staticClass:"c-options__list"},t._l(t.options,(function(option){return e("li",{key:t.idKey?option[t.idKey]:option.value,staticClass:"c-options__item"},[e("CButtonCheckbox",{staticClass:"c-options__item-btn",attrs:{checked:option.value===t.value,disabled:option.disabled,"no-border":""},on:{change:function(e){return t.handleOptionBtn(option)}}},[t._v("\n            "+t._s(option.label)+"\n          ")])],1)})),0):t._e()])],1)])}),[],!1,null,null,null);e.default=component.exports},605:function(t,e,n){var o=n(608),r=n(588),c=n(610),l=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,d=/^0o[0-7]+$/i,h=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(c(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=o(t);var n=f.test(t);return n||d.test(t)?h(t.slice(2),n?2:8):l.test(t)?NaN:+t}},606:function(t,e,n){var content=n(633);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("46d8e6de",content,!0,{sourceMap:!1})},608:function(t,e,n){var o=n(609),r=/^\s+/;t.exports=function(t){return t?t.slice(0,o(t)+1).replace(r,""):t}},609:function(t,e){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},610:function(t,e,n){var o=n(601),r=n(599);t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==o(t)}},611:function(t,e,n){"use strict";n(592)},612:function(t,e,n){var o=n(75)((function(i){return i[1]}));o.push([t.i,".c-button-checkbox__indicator{background-color:var(--border-color-light);height:20px;transition:background-color .2s;width:4px}.c-button-checkbox__indicator.is-active{background-color:var(--color-green)}.c-button-checkbox__before{align-self:center;display:inline-flex;margin:0 0 0 4px}.c-button-checkbox__before:empty{display:none}",""]),o.locals={},t.exports=o},613:function(t,e,n){var o=n(588),r=n(614),c=n(605),l=Math.max,f=Math.min;t.exports=function(t,e,n){var d,h,m,v,_,y,x=0,O=!1,j=!1,k=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function w(time){var e=d,n=h;return d=h=void 0,x=time,v=t.apply(n,e)}function C(time){var t=time-y;return void 0===y||t>=e||t<0||j&&time-x>=m}function P(){var time=r();if(C(time))return R(time);_=setTimeout(P,function(time){var t=e-(time-y);return j?f(t,m-(time-x)):t}(time))}function R(time){return _=void 0,k&&d?w(time):(d=h=void 0,v)}function S(){var time=r(),t=C(time);if(d=arguments,h=this,y=time,t){if(void 0===_)return function(time){return x=time,_=setTimeout(P,e),O?w(time):v}(y);if(j)return clearTimeout(_),_=setTimeout(P,e),w(y)}return void 0===_&&(_=setTimeout(P,e)),v}return e=c(e)||0,o(n)&&(O=!!n.leading,m=(j="maxWait"in n)?l(c(n.maxWait)||0,e):m,k="trailing"in n?!!n.trailing:k),S.cancel=function(){void 0!==_&&clearTimeout(_),x=0,d=y=h=_=void 0},S.flush=function(){return void 0===_?v:R(r())},S}},614:function(t,e,n){var o=n(589);t.exports=function(){return o.Date.now()}},615:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(61))},617:function(t,e,n){var o=n(594),r=Object.prototype,c=r.hasOwnProperty,l=r.toString,f=o?o.toStringTag:void 0;t.exports=function(t){var e=c.call(t,f),n=t[f];try{t[f]=void 0;var o=!0}catch(t){}var r=l.call(t);return o&&(e?t[f]=n:delete t[f]),r}},618:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},619:function(t,e,n){"use strict";n(597)},620:function(t,e,n){var o=n(75)((function(i){return i[1]}));o.push([t.i,".c-options{position:relative}.c-options__trigger{position:relative;width:100%}.c-options__arrow{color:var(--color-grey);transition:transform .2s}.c-options--is-opened .c-options__arrow{transform:scaleY(-1)}.c-options__backdrop{background:var(--bg-color-darken);bottom:0;left:0;opacity:.9;position:fixed;right:0;top:0;transition:opacity .2s;z-index:110}.c-options__list{background-color:var(--bg-color);border:1px solid var(--border-color);left:0;list-style:none;margin:6px 0 0;max-height:235px;overflow-x:hidden;overflow-y:auto;padding:0;position:absolute;top:100%;width:100%;z-index:111}.c-options--is-mobile .c-options__list{bottom:auto;left:0;margin:auto;max-height:40vh;max-width:480px;min-height:50px;position:fixed;right:0;top:65%;transform:translateY(-50%)}.c-options__list.v-enter-active,.c-options__list.v-leave-active{transform-origin:top;transition:transform .2s,opacity .2s}.c-options__list.v-enter,.c-options__list.v-leave-to{opacity:0;transform:translateY(-10px)}.c-options--is-mobile .c-options__list.v-enter,.c-options--is-mobile .c-options__list.v-leave-to{transform:translateY(-55%)}.c-options__item:not(:last-child){border-bottom:1px solid var(--border-color-light)}.c-options__item-btn{justify-content:flex-start;white-space:nowrap;width:100%}.c-options--is-mobile .c-options__item-btn{height:50px}",""]),o.locals={},t.exports=o},621:function(t,e,n){"use strict";n.r(e);n(84);var o=n(35),r=n(36),c=n(40),l=n(41),f=n(25),d=n(21),h=(n(4),n(1),n(34),n(631)),m=n.n(h),v=n(17),_=n(91),y=n(182),x=n(623),O=n(230),j=n(630),k=n(660),w=n(104);function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var P=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},R=function(t){Object(c.a)(n,t);var e=C(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).name="Page",t.isInit=!1,t.isScrolled=!1,t.headerHeight=54,t.navigation=[{label:t.$formatter.route.getTitle("index"),key:"main",to:{name:"index"},icon:"home"},{label:t.$formatter.route.getTitle("account"),key:"account",to:{name:"account"},icon:"person"},{label:t.$formatter.route.getTitle("clan"),key:"clan",to:{name:"clan"},icon:"groups-icon"},{label:t.$formatter.route.getTitle("tournaments"),key:"tournaments",to:{name:"tournaments"},icon:"emoji-events"},{label:t.$formatter.route.getTitle("widgets"),key:"widgets",to:{name:"widgets"},icon:"widgets"}],t.scrollThrottled=m()(t.handleScroll,60),t}return Object(r.a)(n,[{key:"isMobileView",get:function(){return w.a.breakpoints().isTablet}},{key:"mobileMenuOpened",get:function(){return w.a.global().mobileMenuOpened}},{key:"isSidebarOpen",get:function(){return!this.isMobileView||this.mobileMenuOpened}},{key:"routeChanged",value:function(){w.a.global().mobileMenuOpened=!1}},{key:"mounted",value:function(){var t;null===(t=window)||void 0===t||t.addEventListener("scroll",this.scrollThrottled),this.scrollThrottled()}},{key:"created",value:function(){this.isInit=!0}},{key:"scroll",value:function(){return window.scrollY}},{key:"handleScroll",value:function(){this.scroll(),this.headerSticky()}},{key:"headerSticky",value:function(){return this.isScrolled=window.scrollY>10}}]),n}(v.Vue);P([Object(v.Watch)("$route")],R.prototype,"routeChanged",null),P([Object(_.Emit)()],R.prototype,"scroll",null);var S=R=P([Object(v.Component)({components:{CNotify:O.default,ContentBox:y.default,PageHeader:x.default,PageSidebar:j.default,PageSidebarHeader:k.default}})],R),T=(n(632),n(37)),component=Object(T.a)(S,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"page",class:[t.isScrolled?"page--is-scrolled":"",t.isMobileView?"page--mobile-view":""]},[e("header",{staticClass:"page__header"},[e("ContentBox",[e("PageHeader",{attrs:{"is-sticky":t.isScrolled,height:t.headerHeight}})],1)],1),t._v(" "),e("main",{staticClass:"page__main"},[e("ContentBox",[t._t("default")],2)],1),t._v(" "),e("aside",{staticClass:"page__sidebar"},[e("PageSidebar",{attrs:{navigation:t.navigation,"is-open":t.isSidebarOpen,"header-height":t.headerHeight}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:n(623).default,ContentBox:n(182).default,PageSidebar:n(630).default})},631:function(t,e,n){var o=n(613),r=n(588);t.exports=function(t,e,n){var c=!0,l=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return r(n)&&(c="leading"in n?!!n.leading:c,l="trailing"in n?!!n.trailing:l),o(t,e,{leading:c,maxWait:e,trailing:l})}},632:function(t,e,n){"use strict";n(606)},633:function(t,e,n){var o=n(75)((function(i){return i[1]}));o.push([t.i,".page{min-height:100vh}.page__header{display:flex;flex-direction:column;justify-content:center;left:220px;position:fixed;right:0;top:0;transform:translateZ(0);transition:background-color .1s,box-shadow .1s;z-index:4}.page--is-scrolled .page__header{background-color:var(--bg-color);box-shadow:0 0 8px rgba(0,0,0,.1),0 0 16px rgba(0,0,0,.1),0 0 32px rgba(0,0,0,.1)}.page--mobile-view .page__header{left:0}.page__header-inner{display:flex}.page__main{min-width:0;padding:54px 0 0 220px;z-index:1}.page--mobile-view .page__main{padding:54px 0 0}.page__notify{pointer-events:none;right:0;z-index:6}.page__notify,.page__sidebar{bottom:0;position:fixed;top:0}.page__sidebar{border-right:1px solid var(--border-color-light);left:0;width:220px;z-index:5}.page--mobile-view .page__sidebar{border-right:none;box-shadow:0 0 8px rgba(0,0,0,.1),0 0 16px rgba(0,0,0,.1),0 0 32px rgba(0,0,0,.1);width:auto}",""]),o.locals={},t.exports=o},636:function(t,e,n){t.exports=n.p+"img/image-broken.0c22bd4.svg"},767:function(t,e,n){var content=n(847);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("3b8ebbd1",content,!0,{sourceMap:!1})},846:function(t,e,n){"use strict";n(767)},847:function(t,e,n){var o=n(75)((function(i){return i[1]}));o.push([t.i,'.tournaments-list{position:relative}.tournaments-list__section:not(:last-child){margin:0 0 20px}.tournaments-list__section-title{border-bottom:1px solid var(--border-color-light);font-size:16px;font-weight:500;margin:0 0 8px;padding:0 0 4px}.tournaments-list__list{display:flex;flex-wrap:wrap;list-style:none;margin:0 -4px;padding:0;position:relative}.tournaments-list__item{background-color:var(--bg-color);border:1px solid var(--border-color-light);display:flex;flex-direction:column;margin:4px;position:relative;width:calc(25% - 8px)}@media(any-hover:hover){.tournaments-list__item:hover .tournaments-list__item-image,.tournaments-list__item:hover .tournaments-list__item-title{color:var(--color-text-link)}}@media only screen and (max-width:1400px){.tournaments-list__item{width:calc(33.33333% - 8px)}}@media only screen and (max-width:1024px){.tournaments-list__item{width:calc(50% - 8px)}}@media only screen and (max-width:480px){.tournaments-list__item{width:calc(100% - 8px)}}.tournaments-list__item-link{bottom:0;font-size:14px;left:0;margin:10px 0 0;position:absolute;right:0;top:0}.tournaments-list__item-img-wrapper{padding:0 0 40%;position:relative}.tournaments-list__item-img{background-color:var(--border-color);display:block;height:100%;-o-object-fit:cover;object-fit:cover;position:absolute;width:100%}.tournaments-list__item-img.is-broken{-o-object-fit:scale-down;object-fit:scale-down;opacity:.5}.tournaments-list__item-content{display:flex;flex:1;flex-direction:column;padding:10px;position:relative}.tournaments-list__item-title{align-items:flex-start;display:flex;font-weight:500;justify-content:space-between;line-height:1.25em;margin:0 0 .5em;min-height:1.25em;transition:color .2s;width:100%}.tournaments-list__item-tier{color:var(--color-text-light);display:inline-flex;font-size:10px;font-weight:500;margin:0 0 0 10px}.tournaments-list__item-details{align-items:center;display:flex;justify-content:space-between}.tournaments-list__item-date{color:var(--color-text-light);display:inline-flex;font-size:12px;line-height:1.5em;min-height:1.5em}.tournaments-list__item-status{align-self:flex-end;font-size:8px;font-weight:500;padding:2px 4px;position:relative;text-transform:uppercase}.tournaments-list__item-status:before{background-color:currentColor;bottom:0;content:"";left:0;opacity:.1;position:absolute;right:0;top:0}.tournaments-list__item-status:after{border:1px solid;bottom:0;content:"";left:0;opacity:.2;position:absolute;right:0;top:0}.tournaments-list__item-status--upcoming{color:var(--color-purple)}.tournaments-list__item-status--running{color:var(--color-green)}.tournaments-list__item-status--registration_started{color:var(--color-blue)}.tournaments-list__item-status--registration_finished{color:var(--color-red)}.tournaments-list__item-status--finished{color:var(--color-orange)}',""]),o.locals={},t.exports=o},872:function(t,e,n){"use strict";n.r(e);n(84);var o=n(39),r=n(35),c=n(36),l=n(40),f=n(41),d=n(25),h=n(21),m=(n(4),n(1),n(34),n(3),n(6),n(85),n(154),n(48),n(186),n(5),n(86),n(17)),v=n(583);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.a)(this,n)}}var y=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(l.a)(f,t);var e=_(f);function f(){var t;return Object(r.a)(this,f),(t=e.apply(this,arguments)).name="TournamentsList",t}return Object(c.a)(f,[{key:"tournamentsByStatus",get:function(){var t={running:[],registration_started:[],registration_finished:[],upcoming:[],finished:[],complete:[]};return this.tournaments.forEach((function(e){t[e.status].push(e)})),Object.entries(t).map((function(t){var e=Object(o.a)(t,2);return{status:e[0],list:e[1]}})).filter((function(i){return i.list.length}))}},{key:"parseTier",value:function(t){var e=t.description.match(/Уровень техники: (.+?)\./i);return null!=e&&e[1]?null==e?void 0:e[1]:""}},{key:"handleErrorImageLoading",value:function(t){t.target.src=n(636),t.target.classList.add("is-broken")}}]),f}(m.Vue);y([Object(m.Prop)()],x.prototype,"tournaments",void 0),y([Object(m.Prop)()],x.prototype,"loading",void 0);var O=x=y([Object(m.Component)({components:{ContentLoader:v.default}})],x),j=(n(846),n(37)),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"tournaments-list"},[t._l(t.tournamentsByStatus,(function(n){var o=n.list,r=n.status;return e("div",{key:r,staticClass:"tournaments-list__section"},[e("div",{staticClass:"tournaments-list__section-title"},[t._v("\n      "+t._s(t.$formatter.tournament.status(r))+"\n    ")]),t._v(" "),e("ul",{staticClass:"tournaments-list__list"},t._l(o,(function(n){return e("li",{key:n.tournament_id,staticClass:"tournaments-list__item"},[e("div",{staticClass:"tournaments-list__item-img-wrapper"},[e("img",{staticClass:"tournaments-list__item-img",attrs:{loading:"lazy",src:n.logo.original,alt:"image"},on:{error:t.handleErrorImageLoading}})]),t._v(" "),e("div",{staticClass:"tournaments-list__item-content"},[e("div",{staticClass:"tournaments-list__item-title"},[t._v("\n            "+t._s(n.title)+"\n\n            "),e("div",{staticClass:"tournaments-list__item-tier"},[t._v("\n              "+t._s(t.parseTier(n))+"\n            ")])]),t._v(" "),e("div",{staticClass:"tournaments-list__item-details"},[e("div",{staticClass:"tournaments-list__item-date"},[t._v("\n              "+t._s(t.$formatter.date.toLocaleDateTime(1e3*n.start_at))+"\n            ")]),t._v(" "),e("div",{staticClass:"tournaments-list__item-status",class:["tournaments-list__item-status--"+n.status]},[t._v("\n              "+t._s(t.$formatter.tournament.status(n.status))+"\n            ")])])]),t._v(" "),e("nuxt-link",{staticClass:"tournaments-list__item-link link",attrs:{to:{name:"tournaments-id",params:{id:n.tournament_id}}}})],1)})),0)])})),t._v(" "),e("ContentLoader",{attrs:{loading:t.loading}})],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentLoader:n(583).default})},893:function(t,e,n){var content=n(967);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("1e32b4de",content,!0,{sourceMap:!1})},966:function(t,e,n){"use strict";n(893)},967:function(t,e,n){var o=n(75)((function(i){return i[1]}));o.push([t.i,".tournaments-page{min-height:calc(100vh + 10px);padding:10px 0 20px}.tournaments-page__filter{margin:0 0 20px}.tournaments-page__count{display:flex;margin:0 0 10px}.tournaments-page__count-title{color:var(--color-text-light);margin:0 5px 0 0}",""]),o.locals={},t.exports=o},995:function(t,e,n){"use strict";n.r(e);n(84),n(7),n(5),n(6),n(3),n(10);var o=n(42),r=n(106),c=n(12),l=n(35),f=n(36),d=n(40),h=n(41),m=n(25),v=n(21),_=(n(49),n(4),n(1),n(34),n(85),n(48),n(90),n(17)),y=n(621),x=n(115),O=n(104),j=n(602),k=n(583),w=n(226),C=n(872);function P(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function R(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?P(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(m.a)(t);if(e){var r=Object(m.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(h.a)(this,n)}}var T=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},B=[null,"upcoming","registration_started","registration_finished","running","finished","complete"],M=function(t){Object(d.a)(h,t);var e,n,o=S(h);function h(){var t;return Object(l.a)(this,h),(t=o.apply(this,arguments)).name="TournamentsPage",t.notify=O.a.notify(),t.loading=0,t.tournaments=[],t.status=null,t.statusOptions=B.map((function(t){return{label:t?w.a.tournament.status(t):"Все",value:t}})),t.currentPage=1,t.perPage=25,t.total=0,t}return Object(f.a)(h,[{key:"hasNext",get:function(){return this.total>this.currentPage*this.perPage}},{key:"created",value:(n=Object(c.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.status=null===(e=this.$route.query)||void 0===e?void 0:e.status,this.setStatusToRoure(),t.next=4,this.getTournaments();case 4:window.addEventListener("scroll",this.handleScroll);case 5:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"destroyed",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var t=document.documentElement,e=t.scrollTop,n=t.scrollHeight,o=t.clientHeight;0===this.loading&&this.hasNext&&e+o>=n-100&&(this.currentPage+=1,this.getTournaments())}},{key:"getTournaments",value:(e=Object(c.a)(regeneratorRuntime.mark((function t(){var e,n,data,meta;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,x.a.tournaments.getList({limit:this.perPage,page_no:this.currentPage,status:this.status});case 4:n=t.sent,data=n.data,meta=n.meta,this.total=meta.total,(e=this.tournaments).push.apply(e,Object(r.a)(data)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),this.notify.add({type:"error",message:"Получение списка турниров"}),console.error(t.t0);case 15:this.loading--;case 16:case"end":return t.stop()}}),t,this,[[1,11]])}))),function(){return e.apply(this,arguments)})},{key:"setStatusToRoure",value:function(){this.$router.replace({query:R(R({},this.$route.query),{},{status:this.status||void 0})})}},{key:"handleStatusChange",value:function(){this.currentPage=1,this.tournaments=[],this.setStatusToRoure(),this.getTournaments()}}]),h}(_.Vue),$=M=T([Object(_.Component)({components:{TournamentsList:C.default,CSelect:j.default,Page:y.default,ContentLoader:k.default},head:function(){return{title:"Турниры | Blitz Commander"}}})],M),L=(n(966),n(37)),component=Object(L.a)($,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("Page",{staticClass:"tournaments-page"},[e("div",{staticClass:"tournaments-page__filter"},[t._v("\n    По статусу:\n    "),e("CSelect",{staticStyle:{width:"200px"},attrs:{options:t.statusOptions},on:{change:t.handleStatusChange},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1),t._v(" "),e("div",{staticClass:"tournaments-page__count"},[e("span",{staticClass:"tournaments-page__count-title"},[t._v("\n      Кол-во:\n    ")]),t._v("\n    "+t._s(t.total)+"\n  ")]),t._v(" "),e("div",{staticClass:"tournaments-page__list"},[e("TournamentsList",{attrs:{tournaments:t.tournaments,loading:t.loading>0}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TournamentsList:n(872).default,Page:n(621).default})}}]);