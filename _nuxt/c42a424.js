(window.webpackJsonp=window.webpackJsonp||[]).push([[31,16,29,35,63],{583:function(t,e,n){"use strict";n.r(e);n(84);var o=n(36),r=n(35),c=n(40),l=n(41),d=n(25),f=n(21),h=(n(4),n(1),n(34),n(17));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).name="ContentLoader",t}return Object(o.a)(n)}(h.Vue);y([Object(h.Prop)({default:!1})],_.prototype,"loading",void 0),y([Object(h.Prop)({default:!1})],_.prototype,"backdropLight",void 0);var m=_=y([Object(h.Component)({})],_),O=(n(592),n(37)),component=Object(O.a)(m,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"content-loader",class:[t.loading?"content-loader--is-active":"",!1!==t.backdropLight?"content-loader--hide-backdrop":""]})}),[],!1,null,null,null);e.default=component.exports},585:function(t,e,n){var content=n(593);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("03eb9cfd",content,!0,{sourceMap:!1})},592:function(t,e,n){"use strict";n(585)},593:function(t,e,n){var o=n(75)((function(i){return i[1]}));o.push([t.i,'.content-loader{align-items:center;bottom:0;display:flex;justify-content:center;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s;z-index:1}.content-loader--is-active{opacity:1;pointer-events:auto}.content-loader:before{background-color:var(--bg-color-darken);bottom:0;content:"";left:0;opacity:.95;position:absolute;right:0;top:0}.content-loader--hide-backdrop:before{background-color:var(--bg-color)}.content-loader:after{animation:loader-rotation 1.5s linear infinite;border:4px solid var(--bg-color-darken);border-left-color:var(--color-primary);border-radius:50%;box-sizing:border-box;content:"";display:flex;height:24px;position:relative;transform:translateZ(0);width:24px}@keyframes loader-rotation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),o.locals={},t.exports=o},622:function(t,e,n){var content=n(647);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("1a2252fa",content,!0,{sourceMap:!1})},642:function(t,e,n){"use strict";n.r(e);n(84);var o=n(35),r=n(36),c=n(40),l=n(41),d=n(25),f=n(21),h=(n(4),n(1),n(34),n(17)),v=n(91),y=n(187),_=n.n(y),m=n(188),O=n.n(m),k=n(114);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var r=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},w=function(t){Object(c.a)(n,t);var e=x(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).name="CInput",t}return Object(r.a)(n,[{key:"input",value:function(t){return t}},{key:"clear",value:function(){this.input("")}},{key:"keyup",value:function(t){return t}},{key:"keydown",value:function(t){return t}},{key:"blur",value:function(){var t;null===(t=this.inputRef)||void 0===t||t.blur()}},{key:"focus",value:function(){var t;null===(t=this.inputRef)||void 0===t||t.focus()}}]),n}(h.Vue);j([Object(h.Prop)({required:!0,type:String})],w.prototype,"value",void 0),j([Object(h.Prop)()],w.prototype,"placeholder",void 0),j([Object(h.Prop)()],w.prototype,"type",void 0),j([Object(h.Ref)("input")],w.prototype,"inputRef",void 0),j([Object(v.Emit)()],w.prototype,"input",null),j([Object(v.Emit)()],w.prototype,"clear",null),j([Object(v.Emit)()],w.prototype,"keyup",null),j([Object(v.Emit)()],w.prototype,"keydown",null);var R=w=j([Object(h.Component)({components:{CButton:k.default,ClearIcon:_.a,SearchIcon:O.a}})],w),C=(n(646),n(37)),component=Object(C.a)(R,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"c-input"},[e("div",{staticClass:"c-input__inner"},[e("div",{staticClass:"c-input__input"},["search"===t.type?e("SearchIcon",{staticClass:"c-input__search-icon"}):t._e(),t._v(" "),e("input",{ref:"input",staticClass:"c-input__input-element",class:["c-input__input-element--"+t.type],attrs:{placeholder:t.placeholder||"Введите текст"},domProps:{value:t.value},on:{input:function(e){return t.input(e.target.value)},keyup:t.keyup,keydown:t.keydown}}),t._v(" "),t.value&&"search"===t.type?e("CButton",{staticClass:"c-input__clear link",attrs:{"is-text":""},on:{click:t.clear}},[e("ClearIcon")],1):t._e()],1)])])}),[],!1,null,null,null);e.default=component.exports},646:function(t,e,n){"use strict";n(622)},647:function(t,e,n){var o=n(75)((function(i){return i[1]}));o.push([t.i,".c-input__inner{display:flex}.c-input__input{position:relative;width:100%}.c-input__search-icon{align-items:center;bottom:0;color:var(--border-color);display:flex;justify-content:center;left:0;position:absolute;top:50%;transform:translateY(-50%);transition:color .1s;width:36px}.c-input__input-element{background-color:var(--bg-color);border:1px solid var(--border-color);border-radius:0;box-sizing:border-box;color:inherit;display:inline-block;font:inherit;height:36px;margin:0;outline:none;padding:0 12px;transition:color .1s,border-color .1s;width:100%}.c-input__input-element--search{padding-left:36px;padding-right:36px}.c-input__input-element:active,.c-input__input-element:focus,.c-input__input-element:hover{border-color:var(--color-primary)}.c-input__clear{bottom:0;position:absolute;right:6px;top:0}",""]),o.locals={},t.exports=o},753:function(t,e,n){var content=n(797);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(76).default)("6e95ded8",content,!0,{sourceMap:!1})},796:function(t,e,n){"use strict";n(753)},797:function(t,e,n){var o=n(75)((function(i){return i[1]}));o.push([t.i,".c-search__item-btn{-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;background:transparent;border:none;color:inherit;font:inherit;line-height:normal;overflow:visible;padding:0;text-align:inherit;width:auto}.c-search__item-btn::-moz-focus-inner{border:0;padding:0}.c-search__item-btn:focus{outline:none}.c-search__inner{display:flex;position:relative}.c-search__type-btn{display:inline-flex}.c-search__input{font:inherit;width:100%}.c-search__dropdown{background-color:var(--bg-color);border:1px solid var(--border-color);height:220px;margin:4px 0 0;overflow-y:scroll;position:absolute;top:100%;width:100%;z-index:1}.c-search__list{list-style:none;margin:0 0 8px;padding:0}.c-search__item-title{color:var(--color-text-light);font-size:14px;padding:6px 8px}.c-search__item-btn{align-items:center;border:1px solid transparent;cursor:pointer;display:flex;padding:8px;transition:border-color .1s;width:100%}.c-search__item-btn:hover{background-color:var(--border-color-light)}.c-search__item-btn:active,.c-search__item-btn:focus{border:1px solid var(--color-primary)}.c-search__item-btn--highlight{color:var(--color-green)}.c-search__item-btn-icon{margin:0 8px 0 0}",""]),o.locals={},t.exports=o},877:function(t,e,n){"use strict";n.r(e);n(84);var o=n(12),r=n(35),c=n(36),l=n(40),d=n(41),f=n(25),h=n(21),v=(n(49),n(4),n(1),n(44),n(87),n(362),n(66),n(348),n(107),n(105),n(17)),y=n(642),_=n(114),m=n(115),O=n(583);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(d.a)(this,n)}}var x=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},j=function(t){Object(l.a)(d,t);var e,n=k(d);function d(){var t;return Object(r.a)(this,d),(t=n.apply(this,arguments)).isOpen=!1,t.focusedElemIndex=-1,t}return Object(c.a)(d,[{key:"created",value:function(){window.addEventListener("click",this.handleClickOutside)}},{key:"destroyed",value:function(){window.removeEventListener("click",this.handleClickOutside)}},{key:"beforeDestroy",value:function(){window.addEventListener("click",this.handleClickOutside)}},{key:"emitReset",value:function(){}},{key:"emitInput",value:function(t){return t}},{key:"emitSelect",value:function(t){return t}},{key:"itemsChanged",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isOpen=this.items.length>0,t.next=3,this.$nextTick();case 3:this.setBtnElements();case 4:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"highlightText",value:function(){var text=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.value?text.replace(new RegExp(this.value,"gi"),(function(t){return'<span class="c-search__item-btn--highlight">'.concat(t,"</span>")})):text}},{key:"reset",value:function(){this.emitReset(),this.focusedElemIndex=-1,this.isOpen=!1}},{key:"handleClickOutside",value:function(t){this.$el.contains(t.target)||(this.isOpen=!1)}},{key:"handleInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t=String(t).replace(/\/\d+$/,"").trim(),this.emitInput(t)}},{key:"handleSelect",value:function(t){this.emitSelect(t),this.isOpen=!1,setTimeout(this.inputRef.focus,300)}},{key:"setBtnElements",value:function(){var t;this.btnList=null===(t=this.rootRef)||void 0===t?void 0:t.querySelectorAll(".c-search__item-btn")}},{key:"handleInputKeyDown",value:function(t){if(!(this.loading>0)){var e,n,o,r;if("Escape"===t.key&&(this.reset(),this.focusedElemIndex=-1,this.inputRef.focus()),"INPUT"===t.target.tagName&&(this.focusedElemIndex=-1),"ArrowUp"===t.key)if(t.preventDefault(),null!==(e=this.btnList)&&void 0!==e&&e.length&&this.focusedElemIndex>0)null===(n=this.btnList[--this.focusedElemIndex])||void 0===n||n.focus();else this.inputRef.focus();if("ArrowDown"===t.key)if(t.preventDefault(),null!==(o=this.btnList)&&void 0!==o&&o.length&&this.focusedElemIndex<this.btnList.length-1)null===(r=this.btnList[++this.focusedElemIndex])||void 0===r||r.focus()}}}]),d}(v.Vue);x([Object(v.Prop)({required:!0,type:String})],j.prototype,"value",void 0),x([Object(v.Prop)({default:function(){return[]},type:Array})],j.prototype,"items",void 0),x([Object(v.Prop)({default:0,type:Number})],j.prototype,"loading",void 0),x([Object(v.Prop)({default:"Введите фразу",type:String})],j.prototype,"placeholder",void 0),x([Object(v.Ref)("root")],j.prototype,"rootRef",void 0),x([Object(v.Ref)("input")],j.prototype,"inputRef",void 0),x([Object(v.Emit)("reset")],j.prototype,"emitReset",null),x([Object(v.Emit)("input")],j.prototype,"emitInput",null),x([Object(v.Emit)("select")],j.prototype,"emitSelect",null),x([Object(v.Watch)("items",{deep:!0})],j.prototype,"itemsChanged",null);var w=j=x([Object(v.Component)({components:{CButton:_.default,CInput:y.default,SvgIcon:m.default,ContentLoader:O.default}})],j),R=(n(796),n(37)),component=Object(R.a)(w,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{ref:"root",staticClass:"c-search"},[e("div",{staticClass:"c-search__inner"},[e("div",{staticClass:"c-search__input"},[e("CInput",{ref:"input",attrs:{value:t.value,placeholder:t.placeholder,type:"search"},on:{input:t.handleInput,keydown:t.handleInputKeyDown}})],1),t._v(" "),t.isOpen?e("div",{staticClass:"c-search__dropdown"},[e("ul",{staticClass:"c-search__list",on:{keydown:t.handleInputKeyDown}},t._l(t.items,(function(n){return e("li",{key:n.value,staticClass:"c-search__item"},[e("button",{staticClass:"c-search__item-btn",domProps:{innerHTML:t._s(t.highlightText(n.label))},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleSelect(n)},click:function(e){return t.handleSelect(n)}}})])})),0),t._v(" "),e("ContentLoader",{attrs:{loading:t.loading>0}})],1):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentLoader:n(583).default})}}]);