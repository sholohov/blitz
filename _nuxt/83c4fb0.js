(window.webpackJsonp=window.webpackJsonp||[]).push([[49,28,35,63],{583:function(e,t,n){"use strict";n.r(t);n(84);var o=n(36),r=n(35),c=n(40),l=n(41),f=n(25),d=n(21),v=(n(4),n(1),n(34),n(17));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var _=function(e,t,n,desc){var o,r=arguments.length,c=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},y=function(e){Object(c.a)(n,e);var t=h(n);function n(){var e;return Object(r.a)(this,n),(e=t.apply(this,arguments)).name="ContentLoader",e}return Object(o.a)(n)}(v.Vue);_([Object(v.Prop)({default:!1})],y.prototype,"loading",void 0),_([Object(v.Prop)({default:!1})],y.prototype,"backdropLight",void 0);var C=y=_([Object(v.Component)({})],y),m=(n(592),n(37)),component=Object(m.a)(C,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"content-loader",class:[e.loading?"content-loader--is-active":"",!1!==e.backdropLight?"content-loader--hide-backdrop":""]})}),[],!1,null,null,null);t.default=component.exports},585:function(e,t,n){var content=n(593);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(76).default)("03eb9cfd",content,!0,{sourceMap:!1})},592:function(e,t,n){"use strict";n(585)},593:function(e,t,n){var o=n(75)((function(i){return i[1]}));o.push([e.i,'.content-loader{align-items:center;bottom:0;display:flex;justify-content:center;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s;z-index:1}.content-loader--is-active{opacity:1;pointer-events:auto}.content-loader:before{background-color:var(--bg-color-darken);bottom:0;content:"";left:0;opacity:.95;position:absolute;right:0;top:0}.content-loader--hide-backdrop:before{background-color:var(--bg-color)}.content-loader:after{animation:loader-rotation 1.5s linear infinite;border:4px solid var(--bg-color-darken);border-left-color:var(--color-primary);border-radius:50%;box-sizing:border-box;content:"";display:flex;height:24px;position:relative;transform:translateZ(0);width:24px}@keyframes loader-rotation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),o.locals={},e.exports=o},594:function(e,t,n){"use strict";n.r(t);n(84);var o=n(35),r=n(36),c=n(40),l=n(41),f=n(25),d=n(21),v=(n(4),n(1),n(34),n(17)),h=n(114);function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(e,t,n,desc){var o,r=arguments.length,c=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},C=function(e){Object(c.a)(n,e);var t=_(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).name="CButtonCheckbox",e}return Object(r.a)(n,[{key:"handleClick",value:function(){this.$emit("input",!this.checked),this.$emit("change",!this.checked)}}]),n}(v.Vue);y([Object(v.Model)("change",{default:!1})],C.prototype,"checked",void 0),y([Object(v.Prop)({default:!1})],C.prototype,"disabled",void 0),y([Object(v.Prop)({default:!1})],C.prototype,"noBorder",void 0);var m=C=y([Object(v.Component)({components:{CButton:h.default}})],C),k=(n(610),n(37)),component=Object(k.a)(m,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("CButton",{staticClass:"c-button-checkbox",attrs:{"no-border":e.noBorder,disabled:e.disabled},on:{click:e.handleClick},scopedSlots:e._u([{key:"before",fn:function(){return[t("span",{staticClass:"c-button-checkbox__indicator",class:[e.checked?"is-active":""]}),e._v(" "),t("span",{staticClass:"c-button-checkbox__before"},[e._t("before")],2)]},proxy:!0},{key:"after",fn:function(){return[e._t("after")]},proxy:!0}],null,!0)},[e._v(" "),e._v(" "),e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},596:function(e,t,n){var content=n(611);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(76).default)("22cba9cc",content,!0,{sourceMap:!1})},610:function(e,t,n){"use strict";n(596)},611:function(e,t,n){var o=n(75)((function(i){return i[1]}));o.push([e.i,".c-button-checkbox__indicator{background-color:var(--border-color-light);height:20px;transition:background-color .2s;width:4px}.c-button-checkbox__indicator.is-active{background-color:var(--color-green)}.c-button-checkbox__before{align-self:center;display:inline-flex;margin:0 0 0 4px}.c-button-checkbox__before:empty{display:none}",""]),o.locals={},e.exports=o},677:function(e,t,n){var content=n(733);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(76).default)("1a4c8fac",content,!0,{sourceMap:!1})},698:function(e,t,n){"use strict";n.r(t);n(84);var o=n(35),r=n(36),c=n(40),l=n(41),f=n(25),d=n(21),v=(n(4),n(1),n(34),n(107),n(17)),h=n(594),_=n(114),y=n(150),C=n(583),m=n(349),k=n.n(m),x=n(356),O=n.n(x),j=n(355),R=n.n(j),B=n(104);function U(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var P=function(e,t,n,desc){var o,r=arguments.length,c=r<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,desc);else for(var i=e.length-1;i>=0;i--)(o=e[i])&&(c=(r<3?o(c):r>3?o(t,n,c):o(t,n))||c);return r>3&&c&&Object.defineProperty(t,n,c),c},w=function(e){Object(c.a)(n,e);var t=U(n);function n(){var e;return Object(o.a)(this,n),(e=t.apply(this,arguments)).name="SessionPanel",e.breakpoints=B.a.breakpoints(),e.autoUpdateChecked=!1,e.autoUpdateInterval=60,e.autoUpdateTimer=0,e.autoUpdateCounter=e.autoUpdateInterval,e}return Object(r.a)(n,[{key:"isMobile",get:function(){return this.breakpoints.isMobile}},{key:"destroyed",value:function(){clearInterval(this.autoUpdateTimer)}},{key:"reset",value:function(){}},{key:"diffActiveChange",value:function(){return!this.sessionActive}},{key:"updateChange",value:function(){}},{key:"handleResetBtnClick",value:function(){this.confirmDialogRef.doOpen()}},{key:"handleResetConfirm",value:function(e){e&&this.reset(),this.confirmDialogRef.doClose()}},{key:"handleSessionActiveBtn",value:function(){this.diffActiveChange()}},{key:"handleAutoUpdateBtn",value:function(){var e=this;if(this.autoUpdateChecked=!this.autoUpdateChecked,this.autoUpdateCounter=this.autoUpdateInterval,this.autoUpdateChecked){this.updateChange(),function t(){clearInterval(e.autoUpdateTimer),e.autoUpdateTimer=setInterval(t,1e3),e.autoUpdateCounter>0?e.autoUpdateCounter--:(e.autoUpdateCounter=e.autoUpdateInterval,e.updateChange())}()}else clearInterval(this.autoUpdateTimer)}}]),n}(v.Vue);P([Object(v.Prop)({required:!0})],w.prototype,"updateAt",void 0),P([Object(v.Prop)({required:!0})],w.prototype,"sessionActive",void 0),P([Object(v.Prop)({default:!1})],w.prototype,"hideAutoUpdate",void 0),P([Object(v.Prop)()],w.prototype,"loading",void 0),P([Object(v.Ref)()],w.prototype,"confirmDialogRef",void 0),P([Object(v.Ref)()],w.prototype,"savedDataDialogRef",void 0),P([Object(v.Emit)()],w.prototype,"reset",null),P([Object(v.Emit)("session-active")],w.prototype,"diffActiveChange",null),P([Object(v.Emit)("update")],w.prototype,"updateChange",null);var A=w=P([Object(v.Component)({components:{CDialog:y.default,CButton:_.default,CButtonCheckbox:h.default,ContentLoader:C.default,CloseIcon:k.a,RefreshIcon:O.a,RefreshAutoIcon:R.a}})],w),I=(n(732),n(37)),component=Object(I.a)(A,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"session-panel"},[t("div",{staticClass:"session-panel__inner"},[t("div",{staticClass:"session-panel__item"},[t("div",{staticClass:"session-panel__buttons"},[t("CButtonCheckbox",{staticClass:"session-panel__btn",attrs:{checked:e.sessionActive,title:"Просмотр статистики за сессию"},on:{change:e.handleSessionActiveBtn}},[e._v("\n          Просмотр\n        ")]),e._v(" "),!1===e.hideAutoUpdate?t("CButton",{staticClass:"session-panel__btn",attrs:{title:"Автоматическое обновление данных"},on:{click:e.handleAutoUpdateBtn},scopedSlots:e._u([{key:"before",fn:function(){return[t("RefreshAutoIcon")]},proxy:!0}],null,!1,2566094536)},[e._v(" "),e.isMobile?e._e():[e._v("\n            Обновление\n          ")],e._v("\n          "+e._s(e.autoUpdateCounter)+" сек.\n        ")],2):e._e(),e._v(" "),t("CButton",{staticClass:"session-panel__btn",attrs:{title:"Сброс данных сессии"},on:{click:e.handleResetBtnClick},scopedSlots:e._u([{key:"before",fn:function(){return[t("CloseIcon")]},proxy:!0}])},[e._v(" "),e.isMobile?e._e():[e._v("\n            Сброс\n          ")]],2)],1)]),e._v(" "),e.updateAt?t("div",{staticClass:"session-panel__item session-panel__item--time"},[t("span",{staticClass:"session-panel__time"},[t("span",{staticClass:"session-panel__time-title"},[e._v("\n          Время начала\n        ")]),e._v("\n        "+e._s(e.$formatter.date.toLocaleDateTime(e.updateAt))+"\n      ")])]):e._e()]),e._v(" "),t("ContentLoader",{attrs:{loading:e.loading}}),e._v(" "),t("CDialog",{ref:"confirmDialogRef",attrs:{title:"Сброс сессии"}},[t("div",{staticStyle:{margin:"0 0 1em"}},[e._v("\n      Вы уверены, что хотите сбросить сессию?\n    ")]),e._v(" "),t("div",{staticStyle:{"text-align":"right"}},[t("CButton",{attrs:{align:"center",width:"80px"},on:{click:function(t){return e.handleResetConfirm(!0)}}},[e._v("\n        Да\n      ")]),e._v(" "),t("CButton",{attrs:{align:"center",width:"80px"},on:{click:function(t){return e.handleResetConfirm(!1)}}},[e._v("\n        Нет\n      ")])],1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ContentLoader:n(583).default})},732:function(e,t,n){"use strict";n(677)},733:function(e,t,n){var o=n(75)((function(i){return i[1]}));o.push([e.i,".session-panel{background-color:var(--bg-color);border:1px solid var(--border-color-light);position:relative}.session-panel__inner{justify-content:space-between;padding:10px 15px}.session-panel__inner,.session-panel__item{align-items:center;display:flex;flex-wrap:wrap}.session-panel__item{margin:5px}.session-panel__title{margin:4px 16px 4px 0}.session-panel__buttons{display:flex}.session-panel__btn{margin:0 4px 0 0}@media only screen and (max-width:640px){.session-panel__btn-content{display:none}}.session-panel__time{display:flex;font-size:14px}.session-panel__time-title{color:var(--color-text-light);margin:0 .75em 0 0}",""]),o.locals={},e.exports=o}}]);