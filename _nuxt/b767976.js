(window.webpackJsonp=window.webpackJsonp||[]).push([[60,26,27,32,35,36],{572:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},574:function(t,e,r){"use strict";var n=r(2),o=r(14),c=r(47),l=r(48),f=r(49),d=r(228),v=r(37),h=r(12),y=r(227),_=r(182),m=r(341),x=r(342),O=r(129),j=r(343),k=[],w=o(k.sort),C=o(k.push),P=h((function(){k.sort(void 0)})),S=h((function(){k.sort(null)})),R=_("sort"),T=!h((function(){if(O)return O<70;if(!(m&&m>3)){if(x)return!0;if(j)return j<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)k.push({k:t+r,v:e})}for(k.sort((function(a,b){return b.v-a.v})),r=0;r<k.length;r++)t=k[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:P||!S||!R||!T},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(T)return void 0===t?w(e):w(e,t);var r,n,o=[],h=f(e);for(n=0;n<h;n++)n in e&&C(o,e[n]);for(y(o,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:v(e)>v(r)?1:-1}}(t)),r=f(o),n=0;n<r;)e[n]=o[n++];for(;n<h;)d(e,n++);return e}})},576:function(t,e,r){var n=r(597),o="object"==typeof self&&self&&self.Object===Object&&self,c=n||o||Function("return this")();t.exports=c},578:function(t,e,r){var n=r(576).Symbol;t.exports=n},583:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},584:function(t,e,r){var content=r(608);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("45ae9757",content,!0,{sourceMap:!1})},587:function(t,e,r){var n=r(578),o=r(603),c=r(604),l=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":l&&l in Object(t)?o(t):c(t)}},588:function(t,e,r){var content=r(619);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("71116536",content,!0,{sourceMap:!1})},592:function(t,e,r){"use strict";r.r(e);r(81);var n=r(34),o=r(35),c=r(38),l=r(39),f=r(24),d=r(19),v=(r(3),r(1),r(33),r(617)),h=r.n(v),y=r(16),_=r(87),m=r(179),x=r(605),O=r(230),j=r(616),k=r(640),w=r(103),C=r(229),P=[{label:C.a.getTitle("index"),key:"main",to:{name:"index"},icon:"home"},{label:C.a.getTitle("account"),key:"account",to:{name:"account"},icon:"person"},{label:C.a.getTitle("clan"),key:"clan",to:{name:"clan"},icon:"groups-icon"},{label:C.a.getTitle("tournaments"),key:"tournaments",to:{name:"tournaments"},icon:"emoji-events"},{label:C.a.getTitle("widgets"),key:"widgets",to:{name:"widgets"},icon:"widgets",isHidden:!0}];function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var R=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},T=function(t){Object(c.a)(r,t);var e=S(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).name="Page",t.isInit=!1,t.isScrolled=!1,t.headerHeight=54,t.navigation=P,t.scrollThrottled=h()(t.handleScroll,60),t}return Object(o.a)(r,[{key:"isMobileView",get:function(){return w.a.breakpoints().isTablet}},{key:"mobileMenuOpened",get:function(){return w.a.global().mobileMenuOpened}},{key:"isSidebarOpen",get:function(){return!this.isMobileView||this.mobileMenuOpened}},{key:"routeChanged",value:function(){w.a.global().mobileMenuOpened=!1}},{key:"mounted",value:function(){var t;null===(t=window)||void 0===t||t.addEventListener("scroll",this.scrollThrottled),this.scrollThrottled()}},{key:"created",value:function(){this.isInit=!0}},{key:"scroll",value:function(){return window.scrollY}},{key:"handleScroll",value:function(){this.scroll(),this.headerSticky()}},{key:"headerSticky",value:function(){return this.isScrolled=window.scrollY>10}}]),r}(y.Vue);R([Object(y.Watch)("$route")],T.prototype,"routeChanged",null),R([Object(_.Emit)()],T.prototype,"scroll",null);var A=T=R([Object(y.Component)({components:{CNotify:O.default,ContentBox:m.default,PageHeader:x.default,PageSidebar:j.default,PageSidebarHeader:k.default}})],T),M=(r(618),r(36)),component=Object(M.a)(A,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"page",class:[t.isScrolled?"page--is-scrolled":"",t.isMobileView?"page--mobile-view":""]},[e("header",{staticClass:"page__header"},[e("ContentBox",[e("PageHeader",{attrs:{"is-sticky":t.isScrolled,height:t.headerHeight}})],1)],1),t._v(" "),e("main",{staticClass:"page__main"},[e("ContentBox",[t._t("default")],2)],1),t._v(" "),e("aside",{staticClass:"page__sidebar"},[e("PageSidebar",{attrs:{navigation:t.navigation,"is-open":t.isSidebarOpen,"header-height":t.headerHeight}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:r(605).default,ContentBox:r(179).default,PageSidebar:r(616).default})},597:function(t,e,r){(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.exports=r}).call(this,r(56))},598:function(t,e,r){var n=r(600),o=r(572),c=r(602),l=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,d=/^0o[0-7]+$/i,v=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(c(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=n(t);var r=f.test(t);return r||d.test(t)?v(t.slice(2),r?2:8):l.test(t)?NaN:+t}},599:function(t,e,r){var n=r(572),o=r(606),c=r(598),l=Math.max,f=Math.min;t.exports=function(t,e,r){var d,v,h,y,_,m,x=0,O=!1,j=!1,k=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function w(time){var e=d,r=v;return d=v=void 0,x=time,y=t.apply(r,e)}function C(time){var t=time-m;return void 0===m||t>=e||t<0||j&&time-x>=h}function P(){var time=o();if(C(time))return S(time);_=setTimeout(P,function(time){var t=e-(time-m);return j?f(t,h-(time-x)):t}(time))}function S(time){return _=void 0,k&&d?w(time):(d=v=void 0,y)}function R(){var time=o(),t=C(time);if(d=arguments,v=this,m=time,t){if(void 0===_)return function(time){return x=time,_=setTimeout(P,e),O?w(time):y}(m);if(j)return clearTimeout(_),_=setTimeout(P,e),w(m)}return void 0===_&&(_=setTimeout(P,e)),y}return e=c(e)||0,n(r)&&(O=!!r.leading,h=(j="maxWait"in r)?l(c(r.maxWait)||0,e):h,k="trailing"in r?!!r.trailing:k),R.cancel=function(){void 0!==_&&clearTimeout(_),x=0,d=m=v=_=void 0},R.flush=function(){return void 0===_?y:S(o())},R}},600:function(t,e,r){var n=r(601),o=/^\s+/;t.exports=function(t){return t?t.slice(0,n(t)+1).replace(o,""):t}},601:function(t,e){var r=/\s/;t.exports=function(t){for(var e=t.length;e--&&r.test(t.charAt(e)););return e}},602:function(t,e,r){var n=r(587),o=r(583);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==n(t)}},603:function(t,e,r){var n=r(578),o=Object.prototype,c=o.hasOwnProperty,l=o.toString,f=n?n.toStringTag:void 0;t.exports=function(t){var e=c.call(t,f),r=t[f];try{t[f]=void 0;var n=!0}catch(t){}var o=l.call(t);return n&&(e?t[f]=r:delete t[f]),o}},604:function(t,e){var r=Object.prototype.toString;t.exports=function(t){return r.call(t)}},606:function(t,e,r){var n=r(576);t.exports=function(){return n.Date.now()}},607:function(t,e,r){"use strict";r(584)},608:function(t,e,r){var n=r(70)((function(i){return i[1]}));n.push([t.i,'.c-table__sort-btn{-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;background:transparent;border:none;color:inherit;font:inherit;line-height:normal;overflow:visible;padding:0;text-align:inherit;width:auto}.c-table__sort-btn::-moz-focus-inner{border:0;padding:0}.c-table__sort-btn:focus{outline:none}.c-table{background-color:var(--bg-color);flex:0 0 auto;min-height:100%;overflow-x:auto;overflow-y:scroll;position:relative;transform:translateZ(0)}.c-table--no-wrap{white-space:nowrap}.c-table__table{border-collapse:separate;border-spacing:0;position:relative;width:100%}.c-table__row:hover .c-table__cell:before{opacity:.1}.c-table__row:not(:last-child) .c-table__cell{border-bottom:1px solid var(--border-color-light)}.c-table__cell{padding:10px;position:relative;text-align:left;z-index:0}.c-table__cell:before{background-color:var(--color-primary);bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .1s}.c-table__cell--header{background-color:var(--bg-color);border-bottom:1px solid var(--border-color-light);position:sticky;top:0;white-space:nowrap;z-index:1}.c-table__sort{align-items:center;display:inline-flex}.c-table__sort-icons{display:inline-flex;flex-direction:column;margin:0 0 0 4px}.c-table__sort-icon{height:16px;margin:-4px 0;width:16px}.c-table__sort-icon.is-active{color:var(--color-primary)}.c-table__sort-btn{color:var(--color-text-lightest);padding:4px 0}.c-table__sort-btn--has-sort{cursor:pointer;transition:color .1s}.c-table__sort-btn--has-sort:hover{color:var(--color-text)}.c-table__summary{color:var(--color-text-light);font-size:12px;font-weight:400;line-height:14px;margin:0;min-height:14px}',""]),n.locals={},t.exports=n},609:function(t,e,r){t.exports=r.p+"img/image-broken.0c22bd4.svg"},612:function(t,e,r){var content=r(634);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("8f675a88",content,!0,{sourceMap:!1})},615:function(t,e,r){"use strict";r.r(e);r(81);var n=r(34),o=r(35),c=r(38),l=r(39),f=r(24),d=r(19),v=(r(3),r(1),r(33),r(152),r(574),r(127),r(128),r(8),r(16)),h=r(344),y=r.n(h),_=r(340),m=r.n(_),x=(r(6),r(7),r(9),r(40));r(4);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function j(t,e,r){var n=[],o=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(x.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},t);if("string"==typeof o.target){var c=document.querySelectorAll(o.target);Array.prototype.forEach.call(c,(function(t){n.push(t)}))}else Array.isArray(o.target)&&o.target.forEach((function(t){n.push(t)}));var l=new IntersectionObserver((function(e){e.forEach((function(e){var n=e.target,c=e.isIntersecting;o.visibleClassName&&n.classList[c?"add":"remove"](o.visibleClassName),o.hiddenSelector&&n.classList[c?"remove":"add"](o.hiddenSelector),"function"==typeof r&&r(e),t.once&&c&&l.unobserve(n)}))}),e);return n.forEach((function(t){return l.observe(t)})),l}function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var w=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},C=function(t){Object(c.a)(r,t);var e=k(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).name="CTable",t.sortOrder="asc",t.sortProp="",t.elementObserver=null,t}return Object(o.a)(r,[{key:"mounted",value:function(){var t=this;!1!==this.scrollAutoDisabling&&(this.elementObserver=j({target:".c-table",visibleClassName:"c-table--in-view"},{rootMargin:"0%",threshold:1},(function(e){var r=e.target;e.isIntersecting?t.disableScroll(r,!1):(t.disableScroll(r,!0),r.scrollTo({top:0}))})))}},{key:"destroyed",value:function(){var t;!1!==this.scrollAutoDisabling&&(null===(t=this.elementObserver)||void 0===t||t.disconnect())}},{key:"sort",value:function(t){return t}},{key:"colStyles",value:function(col){return{textAlign:col.align,width:Number(col.width)?"".concat(col.width,"px"):"auto"}}},{key:"smartSort",value:function(){var t=this.sortProp,e=this.sortOrder;this.data.sort((function(a,b){var r=("desc"===e?b:a)[t],n=("desc"===e?a:b)[t];return String(r).localeCompare(String(n),void 0,{numeric:!0,sensitivity:"base"})}))}},{key:"sortByMethod",value:function(header){var t=this.sortOrder;this.data.sort((function(a,b){var e,r;return"desc"===t?(null===(e=header.sortMethod)||void 0===e?void 0:e.call(header,b,a))||0:(null===(r=header.sortMethod)||void 0===r?void 0:r.call(header,a,b))||0}))}},{key:"handleSort",value:function(t){if(t.hasSort){var e=this.sortOrder;this.sortProp!==t.key&&(e=""),e=e?"asc"===e?"desc":"":"asc",this.sortOrder=e,this.sortProp=t.key,e&&("function"==typeof t.sortMethod?this.sortByMethod(t):this.smartSort()),this.sort({order:this.sortOrder,prop:this.sortProp,column:t})}}},{key:"formatValue",value:function(header,t){return"function"==typeof header.formatter?header.formatter(t):t}},{key:"arrowIsActive",value:function(t,e){return this.sortOrder===t&&this.sortProp===e}},{key:"getSummary",value:function(col){return"object"===Object(d.a)(this.summary)&&Object.keys(this.summary).includes(col.key)?"function"==typeof col.formatter?col.formatter(this.summary[col.key]):this.summary[col.key]:""}},{key:"getScrollbarWidth",value:function(){var t=document.createElement("div");t.style.position="absolute",t.style.overflow="scroll",document.body.append(t);var e=t.offsetWidth-t.clientWidth;return t.remove(),e}},{key:"disableScroll",value:function(t,e){e?(t.style.paddingRight=this.getScrollbarWidth()+"px",t.style.overflowY="hidden"):(t.style.overflowY="",t.style.paddingRight="")}}]),r}(v.Vue);w([Object(v.Prop)({required:!0})],C.prototype,"headers",void 0),w([Object(v.Prop)({required:!0})],C.prototype,"data",void 0),w([Object(v.Prop)()],C.prototype,"summary",void 0),w([Object(v.Prop)({default:!1})],C.prototype,"noWrap",void 0),w([Object(v.Prop)({default:!1})],C.prototype,"scrollAutoDisabling",void 0),w([Object(v.Prop)()],C.prototype,"height",void 0),w([Object(v.Prop)()],C.prototype,"rowKey",void 0),w([Object(v.Prop)()],C.prototype,"maxHeight",void 0),w([Object(v.Prop)()],C.prototype,"minHeight",void 0),w([Object(v.Emit)()],C.prototype,"sort",null);var P=C=w([Object(v.Component)({components:{AscIcon:y.a,DescIcon:m.a}})],C),S=(r(607),r(36)),component=Object(S.a)(P,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"c-table",class:[!1!==t.noWrap?"c-table--no-wrap":""],style:{height:t.height,maxHeight:t.maxHeight,minHeight:t.minHeight}},[e("table",{staticClass:"c-table__table"},[e("thead",{staticClass:"c-table__head"},[e("tr",{staticClass:"c-table__head-row"},t._l(t.headers,(function(col){return e("th",{key:col.key,staticClass:"c-table__cell c-table__cell--header",style:t.colStyles(col)},[e("div",{staticClass:"c-table__sort"},[e("button",{staticClass:"c-table__sort-btn",class:[col.hasSort?"c-table__sort-btn--has-sort":""],attrs:{title:col.tooltip},on:{click:function(e){return t.handleSort(col)}}},[t._t("".concat(col.key,"-header"),(function(){return[t._v("\n                "+t._s(col.label)+"\n              ")]}))],2),t._v(" "),col.hasSort?e("span",{staticClass:"c-table__sort-icons"},[e("AscIcon",{staticClass:"c-table__sort-icon",class:[t.arrowIsActive("asc",col.key)?"is-active":""]}),t._v(" "),e("DescIcon",{staticClass:"c-table__sort-icon",class:[t.arrowIsActive("desc",col.key)?"is-active":""]})],1):t._e()]),t._v(" "),t.summary?e("div",{staticClass:"c-table__summary"},[t._t("".concat(col.key,"-summary"),(function(){return[t._v("\n              "+t._s(t.getSummary(col))+"\n            ")]}))],2):t._e()])})),0)]),t._v(" "),e("tbody",{staticClass:"c-table__body"},t._l(t.data,(function(r,n){var o;return e("tr",{key:null!==(o=r[t.rowKey])&&void 0!==o?o:n,staticClass:"c-table__row"},t._l(t.headers,(function(col){return e("td",{key:col.key,staticClass:"c-table__cell",style:t.colStyles(col)},[r?t._t("".concat(col.key),(function(){return[t._v("\n            "+t._s(t.formatValue(col,r[col.key]))+"\n          ")]}),{row:r,data:r[col.key],index:n}):t._e()],2)})),0)})),0)])])}),[],!1,null,null,null);e.default=component.exports},617:function(t,e,r){var n=r(599),o=r(572);t.exports=function(t,e,r){var c=!0,l=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(r)&&(c="leading"in r?!!r.leading:c,l="trailing"in r?!!r.trailing:l),n(t,e,{leading:c,maxWait:e,trailing:l})}},618:function(t,e,r){"use strict";r(588)},619:function(t,e,r){var n=r(70)((function(i){return i[1]}));n.push([t.i,".page__header{display:flex;flex-direction:column;justify-content:center;left:220px;position:fixed;right:0;top:0;transform:translateZ(0);transition:background-color .1s,box-shadow .1s;z-index:4}.page--is-scrolled .page__header{background-color:var(--bg-color);box-shadow:0 0 8px rgba(0,0,0,.1),0 0 16px rgba(0,0,0,.1),0 0 32px rgba(0,0,0,.1)}.page--mobile-view .page__header{left:0}.page__header-inner{display:flex}.page__main{min-width:0;padding:54px 0 0 220px;z-index:1}.page--mobile-view .page__main{padding:54px 0 0}.page__notify{pointer-events:none;right:0;z-index:6}.page__notify,.page__sidebar{bottom:0;position:fixed;top:0}.page__sidebar{border-right:1px solid var(--border-color-light);left:0;width:220px;z-index:5}.page--mobile-view .page__sidebar{border-right:none;box-shadow:0 0 8px rgba(0,0,0,.1),0 0 16px rgba(0,0,0,.1),0 0 32px rgba(0,0,0,.1);width:auto}",""]),n.locals={},t.exports=n},633:function(t,e,r){"use strict";r(612)},634:function(t,e,r){var n=r(70)((function(i){return i[1]}));n.push([t.i,'.c-tabs__tab{-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;background:transparent;border:none;color:inherit;font:inherit;line-height:normal;overflow:visible;padding:0;text-align:inherit;width:auto}.c-tabs__tab::-moz-focus-inner{border:0;padding:0}.c-tabs__tab:focus{outline:none}.c-tabs__controls{position:relative}.c-tabs__controls:before{background-color:var(--border-color-light);bottom:0;content:"";display:flex;height:3px;left:0;position:absolute;right:0}.c-tabs__scroll{display:flex;overflow-x:auto}.c-tabs__tab{border-bottom:3px solid transparent;color:var(--color-text-light);cursor:pointer;display:inline-flex;flex:0 0 auto;font-weight:500;margin:0;padding:10px 0;position:relative;transition:color .2s,border-color .2s}.c-tabs__tab:not(:last-child){margin-right:20px}.c-tabs__tab--is-active{border-bottom:3px solid var(--color-primary);color:var(--color-text)}.c-tabs__tab:disabled{color:var(--color-text);opacity:.3;pointer-events:none}.c-tabs__panels{margin:10px 0 0}',""]),n.locals={},t.exports=n},646:function(t,e,r){"use strict";r.r(e);r(33),r(81);var n=r(34),o=r(35),c=r(38),l=r(39),f=r(24),d=r(19),v=(r(3),r(1),r(16)),h=r(113);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var _=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},m=function(t){Object(c.a)(r,t);var e=y(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).name="CTabs",t}return Object(o.a)(r,[{key:"change",value:function(t){return t}},{key:"tabClick",value:function(t){return this.change(t.name),t}},{key:"hasSlot",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return!!this.$slots[t]||!!this.$scopedSlots[t]}}]),r}(v.Vue);_([Object(v.Model)("change")],m.prototype,"active",void 0),_([Object(v.Prop)({required:!0})],m.prototype,"tabs",void 0),_([Object(v.Emit)()],m.prototype,"change",null),_([Object(v.Emit)()],m.prototype,"tabClick",null);var x=m=_([Object(v.Component)({components:{CButton:h.default}})],m),O=(r(633),r(36)),component=Object(O.a)(x,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"c-tabs"},[e("div",{staticClass:"c-tabs__inner"},[e("div",{staticClass:"c-tabs__controls"},[e("div",{staticClass:"c-tabs__scroll"},t._l(t.tabs,(function(r){return e("button",{key:r.name,staticClass:"c-tabs__tab",class:[r.name===t.active?"c-tabs__tab--is-active":""],attrs:{disabled:r.disabled},on:{click:function(e){return t.tabClick(r)}}},[t._v("\n          "+t._s(r.label)+"\n        ")])})),0)]),t._v(" "),e("div",{staticClass:"c-tabs__panels"},[t._l(t.tabs,(function(e){return[t.active===e.name?t._t(e.name):t._e()]})),t._v(" "),t.hasSlot()?t._t("default"):t._e()],2)])])}),[],!1,null,null,null);e.default=component.exports},823:function(t,e,r){var content=r(852);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("1a21ea3e",content,!0,{sourceMap:!1})},851:function(t,e,r){"use strict";r(823)},852:function(t,e,r){var n=r(70)((function(i){return i[1]}));n.push([t.i,".clan-page{padding:10px 0 20px}.clan-page__total{color:var(--color-text-light);margin:0 0 4px}.clan-page__total-value{color:var(--color-text)}.clan-page__link{display:flex;font-weight:500;width:100%}.clan-page__name{align-items:center;display:flex}.clan-page__emblem{align-self:center;display:inline-flex;height:32px;margin:0 10px 0 0;-o-object-fit:contain;object-fit:contain;position:relative;width:32px}.clan-page__emblem.is-broken{-o-object-fit:scale-down;object-fit:scale-down;opacity:.5}",""]),n.locals={},t.exports=n},936:function(t,e,r){"use strict";r.r(e);r(33),r(81),r(8),r(6),r(7),r(4),r(9);var n=r(40),o=r(21),c=r(34),l=r(35),f=r(38),d=r(39),v=r(24),h=r(19),y=(r(72),r(3),r(1),r(152),r(130),r(151),r(82),r(88),r(46),r(86),r(574),r(16)),_=r(592),m=r(615),x=r(646),O=r(103),j=r(153),k=r(73),w=r(224),C=r(585);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var T=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},A=function(t){Object(f.a)(y,t);var e,n,d,v,h=R(y);function y(){var t;return Object(c.a)(this,y),(t=h.apply(this,arguments)).name="ClanPage",t.notify=O.a.notify(),t.items=[],t.loading=0,t.activeTab="",t}return Object(l.a)(y,[{key:"tabs",get:function(){var t=[];return t.push({label:"Просмотренные",name:"viewed"}),t}},{key:"headers",get:function(){return[{key:"tag",label:"Название",hasSort:!0},{key:"members_count",align:"center",label:"Уч-ков",hasSort:!0},{key:"updated_at",label:"Обновлён",hasSort:!0,formatter:function(t){return"number"==typeof t?w.a.date.toDatePassed(t):"-"}},{key:"created_at",label:"Создан",formatter:function(t){return w.a.date.toLocaleDate(1e3*Number(t))},hasSort:!0}]}},{key:"created",value:function(){var t,e=(null===(t=this.$route.query)||void 0===t?void 0:t.activeTab)||this.tabs[0].name;this.setActiveTab(e),this.loadAll()}},{key:"emblemUrl",value:function(t){return"https://wotblitz-gc.gcdn.co/icons/clanEmblems1x/clan-icon-v2-".concat(t,".png")}},{key:"getClanInfo",value:(v=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,C.a.clan.getInfo({clan_id:e.join(","),extra:"members"});case 4:n=t.sent,data=n.data,this.items=null!==(r=Object.values(data))&&void 0!==r?r:[],t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),this.notify.add({type:"error",message:"Получение данных клана"}),console.error(t.t0);case 13:this.loading--;case 14:case"end":return t.stop()}}),t,this,[[1,9]])}))),function(t){return v.apply(this,arguments)})},{key:"loadClans",value:(d=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,k.a.db();case 4:return e=t.sent,t.next=7,e.getAll(j.b.CLANS_STAT);case 7:return r=t.sent,t.abrupt("return",(null!=r?r:[]).map((function(i){return i.data})));case 11:return t.prev=11,t.t0=t.catch(1),this.notify.add({type:"error",message:"Получение локальных данных клана"}),console.error(t.t0),t.abrupt("return",[]);case 16:return t.prev=16,this.loading--,t.finish(16);case 19:case"end":return t.stop()}}),t,this,[[1,11,16,19]])}))),function(){return d.apply(this,arguments)})},{key:"getViewedClansInfo",value:(n=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadClans();case 2:if((e=t.sent).length){t.next=5;break}return t.abrupt("return");case 5:return r=e.map((function(i){return i.clan_id})),t.next=8,this.getClanInfo(r.slice(0,99));case 8:this.defaultSort();case 9:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"loadAll",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("viewed"!==this.activeTab){t.next=3;break}return t.next=3,this.getViewedClansInfo();case 3:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"setActiveTab",value:function(t){var e;this.activeTab=t,(null===(e=this.$route.query)||void 0===e?void 0:e.activeTab)!==t&&this.$router.replace({query:S(S({},this.$route.query),{},{activeTab:t})})}},{key:"defaultSort",value:function(){this.items.sort((function(a,b){return b.updated_at-a.updated_at}))}},{key:"handleSort",value:function(t){t.order||this.defaultSort()}},{key:"handleTabClick",value:function(t){var e=t.name;this.items=[],this.activeTab=e,this.setActiveTab(e),this.loadAll()}},{key:"handleErrorImageLoading",value:function(t){t.target.src=r(609),t.target.classList.add("is-broken")}}]),y}(y.Vue),M=A=T([Object(y.Component)({components:{CTabs:x.default,CTable:m.default,Page:_.default},head:function(){return{title:"Кланы | Blitz Commander"}}})],A),E=(r(851),r(36)),component=Object(E.a)(M,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("Page",{staticClass:"clan-page"},[e("div",{staticClass:"clan-page__inner"},[e("CTabs",{attrs:{tabs:t.tabs,active:t.activeTab},on:{"tab-click":t.handleTabClick}}),t._v(" "),e("div",{staticClass:"clan-page__total"},[t._v("\n      Кол-во:\n      "),e("span",{staticClass:"clan-page__total-value"},[t._v("\n        "+t._s(t.items.length||0)+"\n      ")])]),t._v(" "),e("CTable",{attrs:{"no-wrap":"","scroll-auto-disabling":"",headers:t.headers,data:t.items,height:"calc(100vh - 112px)"},on:{sort:t.handleSort},scopedSlots:t._u([{key:"tag",fn:function(r){var n,o=r.row;return[o.tag?e("nuxt-link",{staticClass:"clan-page__link link",attrs:{to:{name:"clan-id",params:{id:o.clan_id}}}},[e("img",{staticClass:"clan-page__emblem",attrs:{"data-text":null!==(n=null==o?void 0:o.clan_id)&&void 0!==n?n:"No image",alt:"Эмблема клана",src:t.emblemUrl(o.emblem_set_id)},on:{error:t.handleErrorImageLoading}}),t._v(" "),e("span",{staticClass:"clan-page__name"},[t._v("\n            ["+t._s(o.tag)+"] "+t._s(o.name)+"\n          ")])]):[t._v("\n          Удалён\n        ")]]}}])})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Page:r(592).default})}}]);