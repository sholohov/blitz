(window.webpackJsonp=window.webpackJsonp||[]).push([[53,16,23,24,26,29,33,37,54,56],{576:function(t,e,n){"use strict";n.r(e);n(83);var o=n(36),r=n(35),c=n(40),l=n(41),f=n(25),d=n(21),v=(n(3),n(1),n(34),n(17));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var m=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).name="ContentLoader",t}return Object(o.a)(n)}(v.Vue);m([Object(v.Prop)({default:!1})],_.prototype,"loading",void 0),m([Object(v.Prop)({default:!1})],_.prototype,"backdropLight",void 0);var y=_=m([Object(v.Component)({})],_),x=(n(595),n(37)),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"content-loader",class:[t.loading?"content-loader--is-active":"",!1!==t.backdropLight?"content-loader--hide-backdrop":""]})}),[],!1,null,null,null);e.default=component.exports},577:function(t,e,n){"use strict";var o=n(2),r=n(55).find,c=n(181),l="find",f=!0;l in[]&&Array(1)[l]((function(){f=!1})),o({target:"Array",proto:!0,forced:f},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},578:function(t,e,n){"use strict";var o=n(2),r=n(16),c=n(49),l=n(50),f=n(51),d=n(226),v=n(39),h=n(15),m=n(225),_=n(183),y=n(340),x=n(341),O=n(131),j=n(342),k=[],w=r(k.sort),C=r(k.push),R=h((function(){k.sort(void 0)})),P=h((function(){k.sort(null)})),T=_("sort"),B=!h((function(){if(O)return O<70;if(!(y&&y>3)){if(x)return!0;if(j)return j<603;var code,t,e,n,o="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)k.push({k:t+n,v:e})}for(k.sort((function(a,b){return b.v-a.v})),n=0;n<k.length;n++)t=k[n].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}}));o({target:"Array",proto:!0,forced:R||!P||!T||!B},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(B)return void 0===t?w(e):w(e,t);var n,o,r=[],h=f(e);for(o=0;o<h;o++)o in e&&C(r,e[o]);for(m(r,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:v(e)>v(n)?1:-1}}(t)),n=f(r),o=0;o<n;)e[o]=r[o++];for(;o<h;)d(e,o++);return e}})},580:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},581:function(t,e,n){var content=n(592);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("e320c11c",content,!0,{sourceMap:!1})},582:function(t,e,n){"use strict";n.r(e);n(83);var o=n(35),r=n(36),c=n(40),l=n(41),f=n(25),d=n(21),v=(n(3),n(1),n(34),n(17)),h=n(114);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var _=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=m(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).name="CButtonCheckbox",t}return Object(r.a)(n,[{key:"handleClick",value:function(){this.$emit("input",!this.checked),this.$emit("change",!this.checked)}}]),n}(v.Vue);_([Object(v.Model)("change",{default:!1})],y.prototype,"checked",void 0),_([Object(v.Prop)({default:!1})],y.prototype,"disabled",void 0),_([Object(v.Prop)({default:!1})],y.prototype,"noBorder",void 0);var x=y=_([Object(v.Component)({components:{CButton:h.default}})],y),O=(n(591),n(37)),component=Object(O.a)(x,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("CButton",{staticClass:"c-button-checkbox",attrs:{"no-border":t.noBorder,disabled:t.disabled},on:{click:t.handleClick},scopedSlots:t._u([{key:"before",fn:function(){return[e("span",{staticClass:"c-button-checkbox__indicator",class:[t.checked?"is-active":""]}),t._v(" "),e("span",{staticClass:"c-button-checkbox__before"},[t._t("before")],2)]},proxy:!0},{key:"after",fn:function(){return[t._t("after")]},proxy:!0}],null,!0)},[t._v(" "),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},583:function(t,e,n){var content=n(596);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("d9f51612",content,!0,{sourceMap:!1})},584:function(t,e,n){var o=n(603),r="object"==typeof self&&self&&self.Object===Object&&self,c=o||r||Function("return this")();t.exports=c},585:function(t,e,n){var content=n(599);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("33649bd7",content,!0,{sourceMap:!1})},586:function(t,e,n){var o=n(584).Symbol;t.exports=o},588:function(t,e,n){"use strict";n.r(e);n(83);var o=n(35),r=n(36),c=n(40),l=n(41),f=n(25),d=n(21),v=(n(3),n(1),n(34),n(186),n(47),n(577),n(17)),h=n(114),m=n(339),_=n.n(m),y=n(582),x=n(224);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},k=function(t){Object(c.a)(n,t);var e=O(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).name="CSelect",t.isOpen=!1,t.defaultOption=Object.freeze({value:null,label:"Выбрать"}),t.currentOption=t.defaultOption,t}return Object(r.a)(n,[{key:"isMobile",get:function(){return/(Android|webOS|iPhone|iPad|iPod|BlackBerry|Phone)/i.test(navigator.userAgent)}},{key:"valueChanged",value:function(){var t=this,e=this.options.find((function(i){return i.value===t.value}));this.currentOption=null!=e?e:this.defaultOption}},{key:"created",value:function(){window.addEventListener("click",this.handleClickOutside)}},{key:"destroyed",value:function(){window.removeEventListener("click",this.handleClickOutside)}},{key:"handleOpenBtn",value:function(){this.isMobile&&Object(x.a)(!0),this.isOpen=!this.isOpen}},{key:"handleOptionBtn",value:function(option){this.isMobile&&Object(x.a)(!1),this.currentOption=option,this.isOpen=!1,this.$emit("input",this.currentOption.value),this.$emit("change",this.currentOption.value)}},{key:"handleClickOutside",value:function(t){this.$el.contains(t.target)||(this.isOpen=!1)}},{key:"handleBackdropClick",value:function(){this.isOpen=!1,Object(x.a)(!1)}}]),n}(v.Vue);j([Object(v.Model)("change")],k.prototype,"value",void 0),j([Object(v.Prop)({default:function(){return[]}})],k.prototype,"options",void 0),j([Object(v.Prop)({default:!1})],k.prototype,"disabled",void 0),j([Object(v.Prop)()],k.prototype,"idKey",void 0),j([Object(v.Prop)()],k.prototype,"width",void 0),j([Object(v.Watch)("value",{immediate:!0})],k.prototype,"valueChanged",null);var w=k=j([Object(v.Component)({components:{CButtonCheckbox:y.default,CButton:h.default,ArrowDownIcon:_.a}})],k),C=(n(598),n(37)),component=Object(C.a)(w,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"c-options",class:["c-options--is-"+(t.isOpen?"opened":"closed"),t.isMobile?"c-options--is-mobile":""],style:{width:t.width}},[t.isMobile&&t.isOpen&&t.options.length?e("div",{staticClass:"c-options__backdrop",on:{click:t.handleBackdropClick}}):t._e(),t._v(" "),e("div",{staticClass:"c-options__input"},[e("CButton",{staticClass:"c-options__trigger",attrs:{disabled:t.disabled},on:{click:t.handleOpenBtn},scopedSlots:t._u([{key:"after",fn:function(){return[e("ArrowDownIcon",{staticClass:"c-options__arrow"})]},proxy:!0}])},[t._v("\n      "+t._s(t.currentOption.label)+"\n      ")]),t._v(" "),e("transition",[t.isOpen&&t.options.length?e("ul",{staticClass:"c-options__list"},t._l(t.options,(function(option){return e("li",{key:t.idKey?option[t.idKey]:option.value,staticClass:"c-options__item"},[e("CButtonCheckbox",{staticClass:"c-options__item-btn",attrs:{checked:option.value===t.value,disabled:option.disabled,"no-border":""},on:{change:function(e){return t.handleOptionBtn(option)}}},[t._v("\n            "+t._s(option.label)+"\n          ")])],1)})),0):t._e()])],1)])}),[],!1,null,null,null);e.default=component.exports},589:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},591:function(t,e,n){"use strict";n(581)},592:function(t,e,n){var o=n(74)((function(i){return i[1]}));o.push([t.i,".c-button-checkbox__indicator{background-color:var(--border-color-light);height:20px;transition:background-color .2s;width:4px}.c-button-checkbox__indicator.is-active{background-color:var(--color-green)}.c-button-checkbox__before{align-self:center;display:inline-flex;margin:0 0 0 4px}.c-button-checkbox__before:empty{display:none}",""]),o.locals={},t.exports=o},594:function(t,e,n){var o=n(586),r=n(609),c=n(610),l=o?o.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":l&&l in Object(t)?r(t):c(t)}},595:function(t,e,n){"use strict";n(583)},596:function(t,e,n){var o=n(74)((function(i){return i[1]}));o.push([t.i,'.content-loader{align-items:center;bottom:0;display:flex;justify-content:center;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s;z-index:1}.content-loader--is-active{opacity:1;pointer-events:auto}.content-loader:before{background-color:var(--bg-color-darken);bottom:0;content:"";left:0;opacity:.95;position:absolute;right:0;top:0}.content-loader--hide-backdrop:before{background-color:var(--bg-color)}.content-loader:after{animation:loader-rotation 1.5s linear infinite;border:4px solid var(--bg-color-darken);border-left-color:var(--color-primary);border-radius:50%;box-sizing:border-box;content:"";display:flex;height:24px;position:relative;transform:translateZ(0);width:24px}@keyframes loader-rotation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),o.locals={},t.exports=o},598:function(t,e,n){"use strict";n(585)},599:function(t,e,n){var o=n(74)((function(i){return i[1]}));o.push([t.i,".c-options{position:relative}.c-options__trigger{position:relative;width:100%}.c-options__arrow{color:var(--color-grey);transition:transform .2s}.c-options--is-opened .c-options__arrow{transform:scaleY(-1)}.c-options__backdrop{background:var(--bg-color-darken);bottom:0;left:0;opacity:.9;position:fixed;right:0;top:0;transition:opacity .2s;z-index:110}.c-options__list{background-color:var(--bg-color);border:1px solid var(--border-color);left:0;list-style:none;margin:6px 0 0;max-height:235px;overflow-x:hidden;overflow-y:auto;padding:0;position:absolute;top:100%;width:100%;z-index:111}.c-options--is-mobile .c-options__list{bottom:auto;left:0;margin:auto;max-height:40vh;max-width:480px;min-height:50px;position:fixed;right:0;top:65%;transform:translateY(-50%)}.c-options__list.v-enter-active,.c-options__list.v-leave-active{transform-origin:top;transition:transform .2s,opacity .2s}.c-options__list.v-enter,.c-options__list.v-leave-to{opacity:0;transform:translateY(-10px)}.c-options--is-mobile .c-options__list.v-enter,.c-options--is-mobile .c-options__list.v-leave-to{transform:translateY(-55%)}.c-options__item:not(:last-child){border-bottom:1px solid var(--border-color-light)}.c-options__item-btn{justify-content:flex-start;white-space:nowrap;width:100%}.c-options--is-mobile .c-options__item-btn{height:50px}",""]),o.locals={},t.exports=o},603:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(60))},604:function(t,e,n){var o=n(606),r=n(580),c=n(608),l=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,d=/^0o[0-7]+$/i,v=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(c(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=o(t);var n=f.test(t);return n||d.test(t)?v(t.slice(2),n?2:8):l.test(t)?NaN:+t}},605:function(t,e,n){var o=n(580),r=n(614),c=n(604),l=Math.max,f=Math.min;t.exports=function(t,e,n){var d,v,h,m,_,y,x=0,O=!1,j=!1,k=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function w(time){var e=d,n=v;return d=v=void 0,x=time,m=t.apply(n,e)}function C(time){var t=time-y;return void 0===y||t>=e||t<0||j&&time-x>=h}function R(){var time=r();if(C(time))return P(time);_=setTimeout(R,function(time){var t=e-(time-y);return j?f(t,h-(time-x)):t}(time))}function P(time){return _=void 0,k&&d?w(time):(d=v=void 0,m)}function T(){var time=r(),t=C(time);if(d=arguments,v=this,y=time,t){if(void 0===_)return function(time){return x=time,_=setTimeout(R,e),O?w(time):m}(y);if(j)return clearTimeout(_),_=setTimeout(R,e),w(y)}return void 0===_&&(_=setTimeout(R,e)),m}return e=c(e)||0,o(n)&&(O=!!n.leading,h=(j="maxWait"in n)?l(c(n.maxWait)||0,e):h,k="trailing"in n?!!n.trailing:k),T.cancel=function(){void 0!==_&&clearTimeout(_),x=0,d=y=v=_=void 0},T.flush=function(){return void 0===_?m:P(r())},T}},606:function(t,e,n){var o=n(607),r=/^\s+/;t.exports=function(t){return t?t.slice(0,o(t)+1).replace(r,""):t}},607:function(t,e){var n=/\s/;t.exports=function(t){for(var e=t.length;e--&&n.test(t.charAt(e)););return e}},608:function(t,e,n){var o=n(594),r=n(589);t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==o(t)}},609:function(t,e,n){var o=n(586),r=Object.prototype,c=r.hasOwnProperty,l=r.toString,f=o?o.toStringTag:void 0;t.exports=function(t){var e=c.call(t,f),n=t[f];try{t[f]=void 0;var o=!0}catch(t){}var r=l.call(t);return o&&(e?t[f]=n:delete t[f]),r}},610:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},614:function(t,e,n){var o=n(584);t.exports=function(){return o.Date.now()}},630:function(t,e,n){var content=n(660);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("10fedbf8",content,!0,{sourceMap:!1})},650:function(t,e,n){"use strict";n.r(e);n(83);var o=n(35),r=n(36),c=n(40),l=n(41),f=n(25),d=n(21),v=(n(3),n(1),n(34),n(17)),h=n(89),m=n(187),_=n.n(m),y=n(188),x=n.n(y),O=n(114);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var k=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},w=function(t){Object(c.a)(n,t);var e=j(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).name="CInput",t}return Object(r.a)(n,[{key:"input",value:function(t){return t}},{key:"clear",value:function(){this.input("")}},{key:"keyup",value:function(t){return t}},{key:"keydown",value:function(t){return t}},{key:"blur",value:function(){var t;null===(t=this.inputRef)||void 0===t||t.blur()}},{key:"focus",value:function(){var t;null===(t=this.inputRef)||void 0===t||t.focus()}}]),n}(v.Vue);k([Object(v.Prop)({required:!0,type:String})],w.prototype,"value",void 0),k([Object(v.Prop)()],w.prototype,"placeholder",void 0),k([Object(v.Prop)()],w.prototype,"type",void 0),k([Object(v.Ref)("input")],w.prototype,"inputRef",void 0),k([Object(h.Emit)()],w.prototype,"input",null),k([Object(h.Emit)()],w.prototype,"clear",null),k([Object(h.Emit)()],w.prototype,"keyup",null),k([Object(h.Emit)()],w.prototype,"keydown",null);var C=w=k([Object(v.Component)({components:{CButton:O.default,ClearIcon:_.a,SearchIcon:x.a}})],w),R=(n(659),n(37)),component=Object(R.a)(C,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"c-input"},[e("div",{staticClass:"c-input__inner"},[e("div",{staticClass:"c-input__input"},["search"===t.type?e("SearchIcon",{staticClass:"c-input__search-icon"}):t._e(),t._v(" "),e("input",{ref:"input",staticClass:"c-input__input-element",class:["c-input__input-element--"+t.type],attrs:{placeholder:t.placeholder||"Введите текст"},domProps:{value:t.value},on:{input:function(e){return t.input(e.target.value)},keyup:t.keyup,keydown:t.keydown}}),t._v(" "),t.value&&"search"===t.type?e("CButton",{staticClass:"c-input__clear link",attrs:{"is-text":""},on:{click:t.clear}},[e("ClearIcon")],1):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports},659:function(t,e,n){"use strict";n(630)},660:function(t,e,n){var o=n(74)((function(i){return i[1]}));o.push([t.i,".c-input__inner{display:flex}.c-input__input{position:relative;width:100%}.c-input__search-icon{align-items:center;bottom:0;color:var(--border-color);display:flex;justify-content:center;left:0;position:absolute;top:50%;transform:translateY(-50%);transition:color .1s;width:36px}.c-input__input-element{background-color:var(--bg-color);border:1px solid var(--border-color);border-radius:0;box-sizing:border-box;color:inherit;display:inline-block;font:inherit;height:36px;margin:0;outline:none;padding:0 12px;transition:color .1s,border-color .1s;width:100%}.c-input__input-element--search{padding-left:36px;padding-right:36px}.c-input__input-element:active,.c-input__input-element:focus,.c-input__input-element:hover{border-color:var(--color-primary)}.c-input__clear{bottom:0;position:absolute;right:6px;top:0}",""]),o.locals={},t.exports=o},763:function(t,e,n){var content=n(806);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("38025e02",content,!0,{sourceMap:!1})},773:function(t,e,n){"use strict";var o=n(2),r=n(229),c=n(181);o({target:"Array",proto:!0},{fill:r}),c("fill")},805:function(t,e,n){"use strict";n(763)},806:function(t,e,n){var o=n(74)((function(i){return i[1]}));o.push([t.i,".tournaments-teams__team{-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;background:transparent;border:none;color:inherit;font:inherit;line-height:normal;overflow:visible;padding:0;text-align:inherit;width:auto}.tournaments-teams__team::-moz-focus-inner{border:0;padding:0}.tournaments-teams__team:focus{outline:none}.tournaments-teams{position:relative}.tournaments-teams__filters{display:flex;flex-wrap:wrap;margin:0 0 20px}.tournaments-teams__filters-item{margin:0 10px 10px 0}.tournaments-teams__count{display:flex;margin:0 0 10px}.tournaments-teams__count-title{color:var(--color-text-light);margin:0 5px 0 0}.tournaments-teams__list{display:flex;flex-wrap:wrap;margin:0 -4px}.tournaments-teams__team{align-items:center;background-color:var(--bg-color);border:1px solid var(--border-color-light);cursor:pointer;display:flex;margin:4px;padding:10px;transition:border-color .2s;width:calc(25% - 8px)}.tournaments-teams__team:focus,.tournaments-teams__team:hover{border-color:var(--color-text-link)}@media only screen and (max-width:1600px){.tournaments-teams__team{width:calc(33.33333% - 8px)}}@media only screen and (max-width:768px){.tournaments-teams__team{width:calc(50% - 8px)}}@media only screen and (max-width:640px){.tournaments-teams__team{width:calc(100% - 8px)}}.tournaments-teams__status{background-color:var(--bg-color-darken);border-radius:50%;display:inline-flex;flex:none;height:8px;margin:0 14px 0 0;width:8px}.tournaments-teams__status--confirmed{background-color:var(--color-green)}.tournaments-teams__status--forming{background-color:var(--color-orange)}.tournaments-teams__status--disqualified{background-color:var(--color-red)}.tournaments-teams__team-description{display:flex;flex:1;flex-direction:column;margin:0 6px 0 0}.tournaments-teams__team-count{align-self:flex-start;color:var(--color-text-light);flex:none;font-size:12px;font-weight:500}.tournaments-teams__team-owner{align-items:center;color:var(--color-text-light);display:flex;font-size:12px;height:18px;min-width:0;position:relative}.tournaments-teams__team-owner-text{overflow:hidden;position:absolute;text-overflow:ellipsis;white-space:nowrap;width:100%}",""]),o.locals={},t.exports=o},826:function(t,e,n){"use strict";n.r(e);n(47),n(182),n(83),n(6),n(5),n(7),n(4),n(9);var o=n(105),r=n(38),c=n(12),l=n(35),f=n(36),d=n(40),v=n(41),h=n(25),m=n(21),_=(n(48),n(3),n(1),n(34),n(84),n(577),n(353),n(17)),y=n(605),x=n.n(y),O=n(115),j=n(104),k=n(576),w=n(582),C=n(588),R=n(223),P=n(650),T=n(151),B=n(827);function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(h.a)(t);if(e){var r=Object(h.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(v.a)(this,n)}}var A=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},E=[null,"confirmed","forming","disqualified"],I=function(t){Object(d.a)(h,t);var e,n,r,v=M(h);function h(){var t;return Object(l.a)(this,h),(t=v.apply(this,arguments)).name="TournamentsTeams",t.loading=0,t.teams=[],t.currentTeam=null,t.currentPage=1,t.total=0,t.perPage=50,t.filters={status:"confirmed",search:""},t.statusOptions=E.map((function(t){return{label:t?R.a.tournament.teamStatus(t):"Все",value:t}})),t.fetchLoadAllThrottled=x()(t.loadAll,1e3,{leading:!0}),t}return Object(f.a)(h,[{key:"hasNext",get:function(){return this.total>this.currentPage*this.perPage}},{key:"notify",get:function(){return j.a.notify()}},{key:"created",value:function(){window.addEventListener("scroll",this.handleScroll),this.loadAll()}},{key:"destroyed",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"getTeamOwner",value:function(t){var e;return null===(e=t.players.find((function(i){return"owner"===i.role})))||void 0===e?void 0:e.name}},{key:"loadAll",value:(r=Object(c.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getTournamentTeams();case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"getTournamentTeams",value:(n=Object(c.a)(regeneratorRuntime.mark((function t(){var e,n,data,meta;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,O.a.tournaments.getTeams(D({tournament_id:this.tournament.tournament_id,limit:this.perPage,page_no:this.currentPage},this.filters));case 4:n=t.sent,data=n.data,meta=n.meta,this.total=meta.total,(e=this.teams).push.apply(e,Object(o.a)(data)),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),this.notify.add({type:"error",message:"Получение списка команд"}),console.error(t.t0);case 15:this.loading--;case 16:case"end":return t.stop()}}),t,this,[[1,11]])}))),function(){return n.apply(this,arguments)})},{key:"handleScroll",value:function(){var t=document.documentElement,e=t.scrollTop,n=t.scrollHeight,o=t.clientHeight;0===this.loading&&this.hasNext&&e+o>=n-100&&(this.currentPage+=1,this.getTournamentTeams())}},{key:"handleStatusChange",value:function(){this.currentPage=1,this.teams=[],this.loadAll()}},{key:"handleSearchInput",value:(e=Object(c.a)(regeneratorRuntime.mark((function t(){var e,n=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=n.length>0&&void 0!==n[0]?n[0]:"",this.filters.search=e=e.trim(),!(e.length<2&&""!==e)){t.next=4;break}return t.abrupt("return");case 4:return this.currentPage=1,this.teams=[],t.next=8,this.fetchLoadAllThrottled();case 8:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"handleTeamClick",value:function(t){this.currentTeam=t,this.teamDialogRef.doOpen()}}]),h}(_.Vue);A([Object(_.Prop)({required:!0})],I.prototype,"tournament",void 0),A([Object(_.Ref)("teamDialog")],I.prototype,"teamDialogRef",void 0);var L=I=A([Object(_.Component)({components:{TournamentTeam:B.default,CDialog:T.default,CInput:P.default,CSelect:C.default,CButtonCheckbox:w.default,ContentLoader:k.default}})],I),z=(n(805),n(37)),component=Object(z.a)(L,(function(){var t,e,n=this,o=n._self._c;n._self._setupProxy;return o("div",{staticClass:"tournaments-teams"},[o("div",{staticClass:"tournaments-teams__filters"},[o("div",{staticClass:"tournaments-teams__filters-item"},[n._v("\n      Статус\n      "),o("CSelect",{staticStyle:{width:"220px"},attrs:{options:n.statusOptions},on:{change:n.handleStatusChange},model:{value:n.filters.status,callback:function(t){n.$set(n.filters,"status",t)},expression:"filters.status"}})],1),n._v(" "),o("div",{staticClass:"tournaments-teams__filters-item"},[n._v("\n      Поиск\n      "),o("CInput",{staticStyle:{width:"300px"},attrs:{value:null!==(t=n.filters.search)&&void 0!==t?t:"",type:"search",placeholder:"Введите название команды"},on:{input:n.handleSearchInput}})],1)]),n._v(" "),o("div",{staticClass:"tournaments-teams__count"},[o("div",{staticClass:"tournaments-teams__count-title"},[n._v("\n      Кол-во:\n    ")]),n._v("\n    "+n._s(n.total||0)+"\n  ")]),n._v(" "),o("div",{staticClass:"tournaments-teams__list"},[n._l(n.teams,(function(t){return o("button",{key:t.team_id,staticClass:"tournaments-teams__team",on:{click:function(e){return n.handleTeamClick(t)}}},[o("span",{staticClass:"tournaments-teams__status",class:[t.status?"tournaments-teams__status--".concat(t.status):""]}),n._v(" "),o("span",{staticClass:"tournaments-teams__team-description"},[o("span",{staticClass:"tournaments-teams__team-name"},[n._v("\n          "+n._s(t.title)+"\n        ")]),n._v(" "),o("span",{staticClass:"tournaments-teams__team-owner"},[o("span",{staticClass:"tournaments-teams__team-owner-text"},[n._v("\n            "+n._s(n.getTeamOwner(t))+"\n          ")])])]),n._v(" "),o("span",{staticClass:"tournaments-teams__team-count"},[n._v("\n        "+n._s(t.players.length)+" / "+n._s(n.tournament.max_players_count)+"\n      ")])])})),n._v(" "),o("ContentLoader",{attrs:{loading:n.loading>0}})],2),n._v(" "),o("CDialog",{ref:"teamDialog",attrs:{width:"500px","append-to-body":"",title:null===(e=n.currentTeam)||void 0===e?void 0:e.title}},[n.currentTeam?o("TournamentTeam",{attrs:{tournament:n.tournament,team:n.currentTeam}}):n._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentLoader:n(576).default})}}]);