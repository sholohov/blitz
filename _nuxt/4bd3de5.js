(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{584:function(t,e,n){var content=n(618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("39c2bb06",content,!0,{sourceMap:!1})},592:function(t,e,n){"use strict";n.r(e);n(633),n(82);var r=n(36),c=n(35),o=n(39),l=n(40),f=n(24),d=n(19),h=(n(3),n(1),n(34),n(16));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var k=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},y=function(t){Object(o.a)(n,t);var e=v(n);function n(){var t;return Object(c.a)(this,n),(t=e.apply(this,arguments)).name="SocialLinks",t}return Object(r.a)(n)}(h.Vue);k([Object(h.Prop)({required:!0,type:Array})],y.prototype,"links",void 0);var _=y=k([h.Component],y),j=(n(617),n(37)),component=Object(j.a)(_,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"social-links"},[e("div",{staticClass:"social-links__links"},t._l(t.links,(function(link){return e("a",{key:link.link,staticClass:"link social-links__links-item",attrs:{href:link.link,target:"_blank",title:link.title}},[e(link.icon,{tag:"component",attrs:{width:"24",height:"24"}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},617:function(t,e,n){"use strict";n(584)},618:function(t,e,n){var r=n(71)((function(i){return i[1]}));r.push([t.i,".social-links__links{display:flex;flex-wrap:wrap}.social-links__links-item{align-items:center;display:inline-flex;font-weight:700;height:36px;justify-content:center;width:36px}",""]),r.locals={},t.exports=r},633:function(t,e,n){"use strict";var r=n(2),c=n(653);r({target:"String",proto:!0,forced:n(654)("link")},{link:function(t){return c(this,"a","href",t)}})},653:function(t,e,n){var r=n(13),c=n(69),o=n(38),l=/"/g,f=r("".replace);t.exports=function(t,e,n,r){var d=o(c(t)),h="<"+e;return""!==n&&(h+=" "+n+'="'+f(o(r),l,"&quot;")+'"'),h+">"+d+"</"+e+">"}},654:function(t,e,n){var r=n(12);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}}}]);