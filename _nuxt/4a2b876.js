(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{609:function(t,n,e){var content=e(647);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(72).default)("0648d070",content,!0,{sourceMap:!1})},622:function(t,n,e){"use strict";e.r(n);e(82);var o=e(36),c=e(35),l=e(39),r=e(40),f=e(24),v=e(19),_=(e(3),e(1),e(34),e(16)),d=e(114);function y(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=Object(f.a)(t);if(n){var c=Object(f.a)(this).constructor;e=Reflect.construct(o,arguments,c)}else e=o.apply(this,arguments);return Object(r.a)(this,e)}}var x=function(t,n,e,desc){var o,c=arguments.length,l=c<3?n:null===desc?desc=Object.getOwnPropertyDescriptor(n,e):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,n,e,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(l=(c<3?o(l):c>3?o(n,e,l):o(n,e))||l);return c>3&&l&&Object.defineProperty(n,e,l),l},k=function(t){Object(l.a)(e,t);var n=y(e);function e(){var t;return Object(c.a)(this,e),(t=n.apply(this,arguments)).name="NavigationList",t}return Object(o.a)(e)}(_.Vue);x([Object(_.Prop)({required:!0,default:function(){return[]}})],k.prototype,"navigation",void 0);var h=k=x([Object(_.Component)({components:{SvgIcon:d.default}})],k),O=(e(646),e(37)),component=Object(O.a)(h,(function(){var t=this,n=t._self._c;t._self._setupProxy;return n("div",{staticClass:"navigation-list"},[n("ul",{staticClass:"navigation-list__list"},t._l(t.navigation,(function(e){return n("li",{key:e.key,staticClass:"navigation-list__item"},[n("nuxt-link",{staticClass:"navigation-list__link",attrs:{"exact-active-class":"navigation-list__link--is-exact-active","active-class":"navigation-list__link--is-active",to:e.to}},[e.icon?n("SvgIcon",{staticClass:"navigation-list__icon",attrs:{"icon-name":e.icon}}):t._e(),t._v("\n\n        "+t._s(e.label)+"\n      ")],1)],1)})),0)])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{SvgIcon:e(114).default})},646:function(t,n,e){"use strict";e(609)},647:function(t,n,e){var o=e(71)((function(i){return i[1]}));o.push([t.i,'.navigation-list__list{list-style:none;margin:0;padding:0}.navigation-list__link{align-items:center;color:var(--color-text-light);display:flex;font-weight:500;padding:8px 0;position:relative;-webkit-text-decoration:none;text-decoration:none;transition:color .2s}.navigation-list__link:before{background-color:var(--color-text-link);bottom:0;content:"";display:block;left:-8px;opacity:0;pointer-events:none;position:absolute;right:-8px;top:0;transition:opacity .2s}.navigation-list__link--is-exact-active{color:var(--color-text-link);cursor:default}.navigation-list__link:not(.navigation-list__link--is-exact-active):hover:before{opacity:.1}.navigation-list__icon{margin:0 16px 0 2px}',""]),o.locals={},t.exports=o}}]);