(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{650:function(t,e,c){var content=c(710);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(72).default)("4ab7574c",content,!0,{sourceMap:!1})},666:function(t,e,c){"use strict";c.r(e);c(82);var o=c(35),n=c(36),r=c(39),l=c(40),_=c(24),f=c(19),v=(c(3),c(1),c(34),c(10),c(16)),d=c(356),x=c.n(d),m=c(358),h=c.n(m),y=c(357),C=c.n(y),j=c(31);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,o=Object(_.a)(t);if(e){var n=Object(_.a)(this).constructor;c=Reflect.construct(o,arguments,n)}else c=o.apply(this,arguments);return Object(l.a)(this,c)}}var w=function(t,e,c,desc){var o,n=arguments.length,r=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,c):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,c,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(n<3?o(r):n>3?o(e,c,r):o(e,c))||r);return n>3&&r&&Object.defineProperty(e,c,r),r},P=function(t){Object(r.a)(c,t);var e=O(c);function c(){var t;return Object(o.a)(this,c),(t=e.apply(this,arguments)).name="AccountResources",t}return Object(n.a)(c,[{key:"premExpiresAt",get:function(){var t=1e3*this.accountPrivate.premium_expires_at-Date.now(),e=Math.floor(t/j.a),c=Math.floor(t%j.a/j.b);return"".concat(e.toLocaleString(),"д. ").concat(c.toLocaleString(),"ч.")}}]),c}(v.Vue);w([Object(v.Prop)({required:!0})],P.prototype,"accountPrivate",void 0);var R=P=w([Object(v.Component)({components:{CoinsIcon:x.a,XpIcon:h.a,PremIcon:C.a}})],P),I=(c(709),c(37)),component=Object(I.a)(R,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"account-resources"},[e("div",{staticClass:"account-resources__inner"},[t.accountPrivate.is_premium.toLocaleString()?e("div",{staticClass:"account-resources__item"},[e("PremIcon",{staticClass:"account-resources__icon account-resources__icon--prem"}),t._v(" "),e("div",{staticClass:"account-resources__text"},[t._v("\n        "+t._s(t.premExpiresAt)+"\n      ")])],1):t._e(),t._v(" "),e("div",{staticClass:"account-resources__item"},[e("CoinsIcon",{staticClass:"account-resources__icon account-resources__icon--gold"}),t._v(" "),e("div",{staticClass:"account-resources__text"},[t._v("\n        "+t._s(t.accountPrivate.gold.toLocaleString())+"\n      ")])],1),t._v(" "),e("div",{staticClass:"account-resources__item"},[e("CoinsIcon",{staticClass:"account-resources__icon account-resources__icon--credits"}),t._v(" "),e("div",{staticClass:"account-resources__text"},[t._v("\n        "+t._s(t.accountPrivate.credits.toLocaleString())+"\n      ")])],1),t._v(" "),e("div",{staticClass:"account-resources__item"},[e("XpIcon",{staticClass:"account-resources__icon account-resources__icon--xp"}),t._v(" "),e("div",{staticClass:"account-resources__text"},[t._v("\n        "+t._s(t.accountPrivate.free_xp.toLocaleString())+"\n      ")])],1)])])}),[],!1,null,null,null);e.default=component.exports},709:function(t,e,c){"use strict";c(650)},710:function(t,e,c){var o=c(71)((function(i){return i[1]}));o.push([t.i,".account-resources__inner{display:flex}.account-resources__item{align-items:center;display:inline-flex;flex-wrap:wrap;font-size:14px;justify-content:center;margin:0 5px}.account-resources__icon{height:24px;width:24px}.account-resources__icon--gold,.account-resources__icon--prem,.account-resources__icon--xp{color:var(--color-orange)}.account-resources__icon--credits{color:var(--color-blue)}.account-resources__text{margin:0 4px}@media only screen and (max-width:640px){.account-resources__text{text-align:center;width:100%}}",""]),o.locals={},t.exports=o}}]);