(window.webpackJsonp=window.webpackJsonp||[]).push([[31,25],{565:function(t,e,o){"use strict";o.r(e);o(82);var n=o(36),r=o(35),c=o(39),l=o(40),f=o(24),d=o(19),v=(o(3),o(1),o(34),o(16));function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(l.a)(this,o)}}var m=function(t,e,o,desc){var n,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},h=function(t){Object(c.a)(o,t);var e=y(o);function o(){var t;return Object(r.a)(this,o),(t=e.apply(this,arguments)).name="ContentLoader",t}return Object(n.a)(o)}(v.Vue);m([Object(v.Prop)({default:!1})],h.prototype,"loading",void 0),m([Object(v.Prop)({default:!1})],h.prototype,"backdropLight",void 0);var _=h=m([Object(v.Component)({})],h),x=(o(575),o(37)),component=Object(x.a)(_,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"content-loader",class:[t.loading?"content-loader--is-active":"",!1!==t.backdropLight?"content-loader--hide-backdrop":""]})}),[],!1,null,null,null);e.default=component.exports},568:function(t,e,o){var content=o(576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(72).default)("d9f51612",content,!0,{sourceMap:!1})},575:function(t,e,o){"use strict";o(568)},576:function(t,e,o){var n=o(71)((function(i){return i[1]}));n.push([t.i,'.content-loader{align-items:center;bottom:0;display:flex;justify-content:center;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s;z-index:1}.content-loader--is-active{opacity:1;pointer-events:auto}.content-loader:before{background-color:var(--bg-color-darken);bottom:0;content:"";left:0;opacity:.95;position:absolute;right:0;top:0}.content-loader--hide-backdrop:before{background-color:var(--bg-color)}.content-loader:after{animation:loader-rotation 1.5s linear infinite;border:4px solid var(--bg-color-darken);border-left-color:var(--color-primary);border-radius:50%;box-sizing:border-box;content:"";display:flex;height:24px;position:relative;transform:translateZ(0);width:24px}@keyframes loader-rotation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),n.locals={},t.exports=n},588:function(t,e,o){"use strict";o.r(e);o(82);var n=o(36),r=o(35),c=o(39),l=o(40),f=o(24),d=o(19),v=(o(3),o(1),o(34),o(16)),y=o(347),m=o.n(y),h=o(348),_=o.n(h),x=o(565);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,n=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;o=Reflect.construct(n,arguments,r)}else o=n.apply(this,arguments);return Object(l.a)(this,o)}}var O=function(t,e,o,desc){var n,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(r<3?n(c):r>3?n(e,o,c):n(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c},w=function(t){Object(c.a)(o,t);var e=j(o);function o(){var t;return Object(r.a)(this,o),(t=e.apply(this,arguments)).name="MetricsPlates",t}return Object(n.a)(o)}(v.Vue);O([Object(v.Prop)({default:!1})],w.prototype,"loading",void 0),O([Object(v.Prop)({required:!0})],w.prototype,"items",void 0);var R=w=O([Object(v.Component)({components:{ContentLoader:x.default,InfoIcon:_.a,ContentCopyIcon:m.a}})],w),C=(o(679),o(37)),component=Object(C.a)(R,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"metrics-plates"},[e("ul",{staticClass:"metrics-plates__list"},t._l(t.items,(function(o){return e("li",{key:o.key,staticClass:"metrics-plates__item"},[e("span",{staticClass:"metrics-plates__item-label"},[t._v("\n        "+t._s(o.label)+"\n      ")]),t._v(" "),e("b",{staticClass:"metrics-plates__item-value",style:{color:o.color?"var(--color-".concat(o.color,")"):null}},[t._v("\n        "+t._s(o.value)+"\n\n        "),o.diff?e("span",{staticClass:"metrics-plates__item-diff"},[t._v("\n          "+t._s(o.diff)+"\n        ")]):t._e()]),t._v(" "),e("ContentLoader",{attrs:{loading:t.loading}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentLoader:o(565).default})},628:function(t,e,o){var content=o(680);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(72).default)("53aa2323",content,!0,{sourceMap:!1})},679:function(t,e,o){"use strict";o(628)},680:function(t,e,o){var n=o(71)((function(i){return i[1]}));n.push([t.i,".metrics-plates__list{display:flex;flex-wrap:wrap;list-style:none;padding:0}.metrics-plates__item{align-items:center;background-color:var(--bg-color);border:1px solid var(--border-color-light);display:inline-flex;flex-direction:column;justify-content:center;margin:2px;padding:10px;position:relative;width:calc(16.66667% - 4px)}@media only screen and (max-width:1400px){.metrics-plates__item{width:calc(25% - 4px)}}@media only screen and (max-width:768px){.metrics-plates__item{width:calc(50% - 4px)}}.metrics-plates__item-label{color:var(--color-text-light);display:inline-flex;font-size:14px;line-height:1.125;text-align:center}.metrics-plates__item-value{align-items:center;display:flex;font-size:22px;justify-content:center;line-height:1.25;margin:12px 0;position:relative;width:100%}.metrics-plates__item-diff{bottom:0;color:var(--color-text-lightest);display:flex;font-size:12px;font-weight:400;justify-content:center;left:0;position:absolute;right:0;top:100%}",""]),n.locals={},t.exports=n}}]);