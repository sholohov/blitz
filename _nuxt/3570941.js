(window.webpackJsonp=window.webpackJsonp||[]).push([[41,23,28],{569:function(t,e,n){"use strict";n.r(e);n(82);var o=n(36),r=n(35),c=n(39),l=n(40),f=n(24),d=n(19),v=(n(3),n(1),n(34),n(16));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var _=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).name="ContentLoader",t}return Object(o.a)(n)}(v.Vue);_([Object(v.Prop)({default:!1})],y.prototype,"loading",void 0),_([Object(v.Prop)({default:!1})],y.prototype,"backdropLight",void 0);var C=y=_([Object(v.Component)({})],y),m=(n(595),n(37)),component=Object(m.a)(C,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"content-loader",class:[t.loading?"content-loader--is-active":"",!1!==t.backdropLight?"content-loader--hide-backdrop":""]})}),[],!1,null,null,null);e.default=component.exports},574:function(t,e,n){var content=n(588);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("6b1f1675",content,!0,{sourceMap:!1})},575:function(t,e,n){"use strict";n.r(e);n(82);var o=n(35),r=n(36),c=n(39),l=n(40),f=n(24),d=n(19),v=(n(3),n(1),n(34),n(16)),h=n(113);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},C=function(t){Object(c.a)(n,t);var e=_(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).name="CButtonCheckbox",t}return Object(r.a)(n,[{key:"handleClick",value:function(){this.$emit("input",!this.checked),this.$emit("change",!this.checked)}}]),n}(v.Vue);y([Object(v.Model)("change",{default:!1})],C.prototype,"checked",void 0),y([Object(v.Prop)({default:!1})],C.prototype,"disabled",void 0);var m=C=y([Object(v.Component)({components:{CButton:h.default}})],C),k=(n(587),n(37)),component=Object(k.a)(m,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("CButton",{staticClass:"c-button-checkbox",attrs:{disabled:t.disabled},on:{click:t.handleClick},scopedSlots:t._u([{key:"before",fn:function(){return[e("span",{staticClass:"c-button-checkbox__indicator",class:[t.checked?"is-active":""]}),t._v(" "),e("span",{staticClass:"c-button-checkbox__before"},[t._t("before")],2)]},proxy:!0},{key:"after",fn:function(){return[t._t("after")]},proxy:!0}],null,!0)},[t._v(" "),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},580:function(t,e,n){var content=n(596);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("d9f51612",content,!0,{sourceMap:!1})},587:function(t,e,n){"use strict";n(574)},588:function(t,e,n){var o=n(71)((function(i){return i[1]}));o.push([t.i,".c-button-checkbox__indicator{background-color:var(--border-color-light);height:20px;transition:background-color .2s;width:4px}.c-button-checkbox__indicator.is-active{background-color:var(--color-green)}.c-button-checkbox__before{align-self:center;display:inline-flex;margin:0 0 0 4px}.c-button-checkbox__before:empty{display:none}",""]),o.locals={},t.exports=o},595:function(t,e,n){"use strict";n(580)},596:function(t,e,n){var o=n(71)((function(i){return i[1]}));o.push([t.i,'.content-loader{align-items:center;bottom:0;display:flex;justify-content:center;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s;z-index:1}.content-loader--is-active{opacity:1;pointer-events:auto}.content-loader:before{background-color:var(--bg-color-darken);bottom:0;content:"";left:0;opacity:.95;position:absolute;right:0;top:0}.content-loader--hide-backdrop:before{background-color:var(--bg-color)}.content-loader:after{animation:loader-rotation 1.5s linear infinite;border:4px solid var(--bg-color-darken);border-left-color:var(--color-primary);border-radius:50%;box-sizing:border-box;content:"";display:flex;height:24px;position:relative;transform:translateZ(0);width:24px}@keyframes loader-rotation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),o.locals={},t.exports=o},660:function(t,e,n){var content=n(715);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("ebb7366e",content,!0,{sourceMap:!1})},678:function(t,e,n){"use strict";n.r(e);n(82);var o=n(35),r=n(36),c=n(39),l=n(40),f=n(24),d=n(19),v=(n(3),n(1),n(34),n(105),n(16)),h=n(575),_=n(113),y=n(150),C=n(569),m=n(351),k=n.n(m),x=n(357),O=n.n(x),j=n(356),R=n.n(j),w=n(103);function U(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var B=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},P=function(t){Object(c.a)(n,t);var e=U(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).name="SessionPanel",t.breakpoints=w.a.breakpoints(),t.autoUpdateChecked=!1,t.autoUpdateInterval=60,t.autoUpdateTimer=0,t.autoUpdateCounter=t.autoUpdateInterval,t}return Object(r.a)(n,[{key:"isMobile",get:function(){return this.breakpoints.isMobile}},{key:"destroyed",value:function(){window.clearInterval(this.autoUpdateTimer)}},{key:"reset",value:function(){}},{key:"diffActiveChange",value:function(){return!this.sessionActive}},{key:"updateChange",value:function(){}},{key:"handleResetBtnClick",value:function(){this.confirmDialogRef.doOpen()}},{key:"handleResetConfirm",value:function(t){t&&this.reset(),this.confirmDialogRef.doClose()}},{key:"handleSessionActiveBtn",value:function(){this.diffActiveChange()}},{key:"handleAutoUpdateBtn",value:function(){var t=this;if(this.autoUpdateChecked=!this.autoUpdateChecked,this.autoUpdateCounter=this.autoUpdateInterval,this.autoUpdateChecked){this.updateChange(),function e(){window.clearInterval(t.autoUpdateTimer),t.autoUpdateTimer=window.setInterval(e,1e3),t.autoUpdateCounter>0?t.autoUpdateCounter--:(t.autoUpdateCounter=t.autoUpdateInterval,t.updateChange())}()}else window.clearInterval(this.autoUpdateTimer)}}]),n}(v.Vue);B([Object(v.Prop)({required:!0})],P.prototype,"updateAt",void 0),B([Object(v.Prop)({required:!0})],P.prototype,"sessionActive",void 0),B([Object(v.Prop)({default:!1})],P.prototype,"hideAutoUpdate",void 0),B([Object(v.Prop)()],P.prototype,"loading",void 0),B([Object(v.Ref)()],P.prototype,"confirmDialogRef",void 0),B([Object(v.Ref)()],P.prototype,"savedDataDialogRef",void 0),B([Object(v.Emit)()],P.prototype,"reset",null),B([Object(v.Emit)("session-active")],P.prototype,"diffActiveChange",null),B([Object(v.Emit)("update")],P.prototype,"updateChange",null);var A=P=B([Object(v.Component)({components:{CDialog:y.default,CButton:_.default,CButtonCheckbox:h.default,ContentLoader:C.default,CloseIcon:k.a,RefreshIcon:O.a,RefreshAutoIcon:R.a}})],P),I=(n(714),n(37)),component=Object(I.a)(A,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"session-panel"},[e("div",{staticClass:"session-panel__inner"},[e("div",{staticClass:"session-panel__item"},[e("div",{staticClass:"session-panel__buttons"},[e("CButtonCheckbox",{staticClass:"session-panel__btn",attrs:{checked:t.sessionActive,title:"Просмотр статистики за сессию"},on:{change:t.handleSessionActiveBtn}},[t._v("\n          Просмотр\n        ")]),t._v(" "),!1===t.hideAutoUpdate?e("CButton",{staticClass:"session-panel__btn",attrs:{title:"Автоматическое обновление данных"},on:{click:t.handleAutoUpdateBtn},scopedSlots:t._u([{key:"before",fn:function(){return[e("RefreshAutoIcon")]},proxy:!0}],null,!1,2566094536)},[t._v(" "),t.isMobile?t._e():[t._v("\n            Обновление\n          ")],t._v("\n          "+t._s(t.autoUpdateCounter)+" сек.\n        ")],2):t._e(),t._v(" "),e("CButton",{staticClass:"session-panel__btn",attrs:{title:"Сброс данных сессии"},on:{click:t.handleResetBtnClick},scopedSlots:t._u([{key:"before",fn:function(){return[e("CloseIcon")]},proxy:!0}])},[t._v(" "),t.isMobile?t._e():[t._v("\n            Сброс\n          ")]],2)],1)]),t._v(" "),t.updateAt?e("div",{staticClass:"session-panel__item session-panel__item--time"},[e("span",{staticClass:"session-panel__time"},[e("span",{staticClass:"session-panel__time-title"},[t._v("\n          Время начала\n        ")]),t._v("\n        "+t._s(t.$formatter.toLocaleDateTime(t.updateAt))+"\n      ")])]):t._e()]),t._v(" "),e("ContentLoader",{attrs:{loading:t.loading}}),t._v(" "),e("CDialog",{ref:"confirmDialogRef",attrs:{title:"Сброс сессии"}},[e("div",{staticStyle:{margin:"0 0 1em"}},[t._v("\n      Вы уверены, что хотите сбросить сессию?\n    ")]),t._v(" "),e("div",{staticStyle:{"text-align":"right"}},[e("CButton",{attrs:{align:"center",width:"80px"},on:{click:function(e){return t.handleResetConfirm(!0)}}},[t._v("\n        Да\n      ")]),t._v(" "),e("CButton",{attrs:{align:"center",width:"80px"},on:{click:function(e){return t.handleResetConfirm(!1)}}},[t._v("\n        Нет\n      ")])],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentLoader:n(569).default})},714:function(t,e,n){"use strict";n(660)},715:function(t,e,n){var o=n(71)((function(i){return i[1]}));o.push([t.i,".session-panel{background-color:var(--bg-color);border:1px solid var(--border-color-light);position:relative}.session-panel__inner{justify-content:space-between;padding:10px 15px}.session-panel__inner,.session-panel__item{align-items:center;display:flex;flex-wrap:wrap}.session-panel__item{margin:5px}.session-panel__title{margin:4px 16px 4px 0}.session-panel__buttons{display:flex}.session-panel__btn{margin:0 4px 0 0}@media only screen and (max-width:640px){.session-panel__btn-content{display:none}}.session-panel__time{display:flex;font-size:14px}.session-panel__time-title{color:var(--color-text-light);margin:0 .75em 0 0}",""]),o.locals={},t.exports=o}}]);