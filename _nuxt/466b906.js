(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{707:function(t,e,r){var content=r(732);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("60b7cbda",content,!0,{sourceMap:!1})},731:function(t,e,r){"use strict";r(707)},732:function(t,e,r){var n=r(71)((function(i){return i[1]}));n.push([t.i,".breadcrumbs-navigation__inner{align-items:center;display:flex}.breadcrumbs-navigation__separator{border-left:1px solid var(--border-color);height:16px;margin:0 10px;transform:rotate(26deg)}",""]),n.locals={},t.exports=n},786:function(t,e,r){"use strict";r.r(e);r(82);var n=r(35),o=r(36),c=r(39),l=r(40),f=r(24),d=r(19),v=(r(3),r(1),r(34),r(16)),m=r(113),_=r(114);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){Object(c.a)(r,t);var e=R(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).name="BreadcrumbsNavigation",t}return Object(o.a)(r,[{key:"rootRouteName",get:function(){var t,e;return null!==(e=null===(t=String(this.$route.name).split("-"))||void 0===t?void 0:t[0])&&void 0!==e?e:"index"}},{key:"currentRouteName",get:function(){var t;return null!==(t=this.$route.name)&&void 0!==t?t:""}},{key:"isRoot",get:function(){return console.log(this.currentRouteName,this.rootRouteName),this.currentRouteName===this.rootRouteName}}]),r}(v.Vue),O=y=h([Object(v.Component)({components:{CButton:m.default,SvgIcon:_.default}})],y),j=(r(731),r(37)),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"breadcrumbs-navigation"},[e("div",{staticClass:"breadcrumbs-navigation__inner"},[t.isRoot?e("span",{staticClass:"breadcrumbs-navigation__root"},[t._v("\n      "+t._s(t.$formatter.route.getTitle(t.rootRouteName))+"\n    ")]):e("nuxt-link",{staticClass:"breadcrumbs-navigation__root link",attrs:{to:{name:t.rootRouteName}}},[t._v("\n      "+t._s(t.$formatter.route.getTitle(t.rootRouteName))+"\n    ")]),t._v(" "),t.isRoot?t._e():[e("span",{staticClass:"breadcrumbs-navigation__separator"}),t._v(" "),e("span",{staticClass:"breadcrumbs-navigation__current"},[t._v("\n        "+t._s(t.$formatter.route.getTitle(t.currentRouteName))+"\n      ")])]],2)])}),[],!1,null,null,null);e.default=component.exports}}]);