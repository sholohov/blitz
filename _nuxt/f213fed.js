(window.webpackJsonp=window.webpackJsonp||[]).push([[67,27,34,48],{591:function(t,e,r){"use strict";var n=r(2),o=r(17),c=r(50),l=r(45),f=r(51),d=r(229),v=r(41),h=r(16),y=r(228),_=r(185),m=r(342),k=r(343),w=r(131),x=r(344),O=[],j=o(O.sort),C=o(O.push),R=h((function(){O.sort(void 0)})),S=h((function(){O.sort(null)})),P=_("sort"),A=!h((function(){if(w)return w<70;if(!(m&&m>3)){if(k)return!0;if(x)return x<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)O.push({k:t+r,v:e})}for(O.sort((function(a,b){return b.v-a.v})),r=0;r<O.length;r++)t=O[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:R||!S||!P||!A},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(A)return void 0===t?j(e):j(e,t);var r,n,o=[],h=f(e);for(n=0;n<h;n++)n in e&&C(o,e[n]);for(y(o,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:v(e)>v(r)?1:-1}}(t)),r=f(o),n=0;n<r;)e[n]=o[n++];for(;n<h;)d(e,n++);return e}})},592:function(t,e,r){"use strict";var n=r(2),o=r(57).find,c=r(184),l="find",f=!0;l in[]&&Array(1)[l]((function(){f=!1})),n({target:"Array",proto:!0,forced:f},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},595:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n={winRate:function(t){switch(!0){case t>=70:return"purple";case t>=60:return"blue";case t>=50:return"green";default:return"text"}}}},596:function(t,e,r){var content=r(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("58b69000",content,!0,{sourceMap:!1})},604:function(t,e,r){"use strict";r.r(e);r(73);var n=r(32),o=r(33),c=r(36),l=r(37),f=r(23),d=r(20),v=(r(3),r(1),r(34),r(105),r(591),r(129),r(130),r(7),r(15)),h=r(347),y=r.n(h),_=r(341),m=r.n(_),k=(r(5),r(6),r(8),r(40));r(4);function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t,e,r){var n=[],o=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){Object(k.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t);if("string"==typeof o.target){var c=document.querySelectorAll(o.target);Array.prototype.forEach.call(c,(function(t){n.push(t)}))}else Array.isArray(o.target)&&o.target.forEach((function(t){n.push(t)}));var l=new IntersectionObserver((function(e){e.forEach((function(e){var n=e.target,c=e.isIntersecting;o.visibleClassName&&n.classList[c?"add":"remove"](o.visibleClassName),o.hiddenSelector&&n.classList[c?"remove":"add"](o.hiddenSelector),"function"==typeof r&&r(e),t.once&&c&&l.unobserve(n)}))}),e);return n.forEach((function(t){return l.observe(t)})),l}function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var j=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},C=function(t){Object(c.a)(r,t);var e=O(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).name="CTable",t.elementObserver=null,t}return Object(o.a)(r,[{key:"mounted",value:function(){var t=this;!1!==this.scrollAutoDisabling&&(this.elementObserver=x({target:".c-table",visibleClassName:"c-table--in-view"},{rootMargin:"0%",threshold:1},(function(e){var r=e.target;e.isIntersecting?t.disableScroll(r,!1):(t.disableScroll(r,!0),r.scrollTo({top:0}))})))}},{key:"destroyed",value:function(){var t;!1!==this.scrollAutoDisabling&&(null===(t=this.elementObserver)||void 0===t||t.disconnect())}},{key:"sortEvent",value:function(t){return t}},{key:"rowClickEvent",value:function(t){return t}},{key:"colStyles",value:function(col){return{textAlign:col.align,width:Number(col.width)?"".concat(col.width,"px"):"auto"}}},{key:"smartSort",value:function(){var t=this.sort.prop,e=this.sort.order;this.data.sort((function(a,b){var r=("desc"===e?b:a)[t],n=("desc"===e?a:b)[t];return String(r).localeCompare(String(n),void 0,{numeric:!0,sensitivity:"base"})}))}},{key:"sortByMethod",value:function(header){var t=this.sort.order;this.data.sort((function(a,b){var e,r;return"desc"===t?(null===(e=header.sortMethod)||void 0===e?void 0:e.call(header,b,a))||0:(null===(r=header.sortMethod)||void 0===r?void 0:r.call(header,a,b))||0}))}},{key:"handleSort",value:function(t){if(t.hasSort){var e=this.sort.order;this.sort.prop!==t.key&&(e=""),e=e?"asc"===e?"desc":"":"asc",this.sort.order=e,this.sort.prop=t.key,e&&("function"==typeof t.sortMethod?this.sortByMethod(t):this.smartSort()),this.sortEvent({order:this.sort.order,prop:this.sort.prop,column:t})}}},{key:"formatValue",value:function(header,t){return"function"==typeof header.formatter?header.formatter(t):t}},{key:"arrowIsActive",value:function(t,e){return this.sort.order===t&&this.sort.prop===e}},{key:"getSummary",value:function(col){return"object"===Object(d.a)(this.summary)&&Object.keys(this.summary).includes(col.key)?"function"==typeof col.formatter?col.formatter(this.summary[col.key]):this.summary[col.key]:""}},{key:"getScrollbarWidth",value:function(){var t=document.createElement("div");t.style.position="absolute",t.style.overflow="scroll",document.body.append(t);var e=t.offsetWidth-t.clientWidth;return t.remove(),e}},{key:"disableScroll",value:function(t,e){e?(t.style.paddingRight=this.getScrollbarWidth()+"px",t.style.overflowY="hidden"):(t.style.overflowY="",t.style.paddingRight="")}}]),r}(v.Vue);j([Object(v.Prop)({required:!0})],C.prototype,"headers",void 0),j([Object(v.Prop)({required:!0})],C.prototype,"data",void 0),j([Object(v.Prop)()],C.prototype,"summary",void 0),j([Object(v.Prop)({default:!1})],C.prototype,"noWrap",void 0),j([Object(v.Prop)({default:!1})],C.prototype,"scrollAutoDisabling",void 0),j([Object(v.Prop)({default:!1})],C.prototype,"isFixed",void 0),j([Object(v.Prop)()],C.prototype,"height",void 0),j([Object(v.Prop)()],C.prototype,"rowKey",void 0),j([Object(v.Prop)()],C.prototype,"maxHeight",void 0),j([Object(v.Prop)()],C.prototype,"minHeight",void 0),j([Object(v.Prop)({default:function(){return{order:"asc",prop:""}}})],C.prototype,"sort",void 0),j([Object(v.Emit)("sort")],C.prototype,"sortEvent",null),j([Object(v.Emit)("row-click")],C.prototype,"rowClickEvent",null);var R=C=j([Object(v.Component)({components:{AscIcon:y.a,DescIcon:m.a}})],C),S=(r(606),r(35)),component=Object(S.a)(R,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"c-table",class:[!1!==t.noWrap?"c-table--no-wrap":""],style:{height:t.height,maxHeight:t.maxHeight,minHeight:t.minHeight,tableLayout:!1!==t.isFixed?"fixed":"auto"}},[e("table",{staticClass:"c-table__table"},[e("thead",{staticClass:"c-table__head"},[e("tr",{staticClass:"c-table__head-row"},t._l(t.headers,(function(col){return e("th",{key:col.key,staticClass:"c-table__cell c-table__cell--header",style:t.colStyles(col)},[e("div",{staticClass:"c-table__sort"},[e("button",{staticClass:"c-table__sort-btn",class:[col.hasSort?"c-table__sort-btn--has-sort":""],attrs:{title:col.tooltip},on:{click:function(e){return t.handleSort(col)}}},[t._t("".concat(col.key,"-header"),(function(){return[t._v("\n                "+t._s(col.label)+"\n              ")]}))],2),t._v(" "),col.hasSort?e("span",{staticClass:"c-table__sort-icons"},[e("AscIcon",{staticClass:"c-table__sort-icon",class:[t.arrowIsActive("asc",col.key)?"is-active":""]}),t._v(" "),e("DescIcon",{staticClass:"c-table__sort-icon",class:[t.arrowIsActive("desc",col.key)?"is-active":""]})],1):t._e()]),t._v(" "),t.summary?e("div",{staticClass:"c-table__summary"},[t._t("".concat(col.key,"-summary"),(function(){return[t._v("\n              "+t._s(t.getSummary(col))+"\n            ")]}))],2):t._e()])})),0)]),t._v(" "),e("tbody",{staticClass:"c-table__body"},t._l(t.data,(function(r,n){var o;return e("tr",{key:null!==(o=r[t.rowKey])&&void 0!==o?o:n,staticClass:"c-table__row",on:{click:function(e){return t.rowClickEvent(r)}}},t._l(t.headers,(function(col){return e("td",{key:col.key,staticClass:"c-table__cell",style:t.colStyles(col)},[r?t._t("".concat(col.key),(function(){return[t._v("\n            "+t._s(t.formatValue(col,r[col.key]))+"\n          ")]}),{row:r,data:r[col.key],index:n}):t._e()],2)})),0)})),0)]),t._v(" "),Array.isArray(t.data)&&t.data.length?t._e():e("div",{staticClass:"c-table__no-data"},[t._v("\n    Нет данных\n  ")])])}),[],!1,null,null,null);e.default=component.exports},606:function(t,e,r){"use strict";r(596)},607:function(t,e,r){var n=r(66)((function(i){return i[1]}));n.push([t.i,'.c-table__sort-btn{-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;background:transparent;border:none;color:inherit;font:inherit;line-height:normal;overflow:visible;padding:0;text-align:inherit;width:auto}.c-table__sort-btn::-moz-focus-inner{border:0;padding:0}.c-table__sort-btn:focus{outline:none}.c-table{background-color:var(--bg-color);flex:0 0 auto;min-height:100%;overflow-x:auto;overflow-y:scroll;position:relative;transform:translateZ(0)}.c-table--no-wrap{white-space:nowrap}.c-table__table{border-collapse:separate;border-spacing:0;position:relative;width:100%}.c-table__no-data{align-items:center;color:var(--color-text-light);display:flex;height:100%;justify-content:center;left:0;padding:20px 0;position:sticky}.c-table__row:hover .c-table__cell:before{opacity:.1}.c-table__row:not(:last-child) .c-table__cell{border-bottom:1px solid var(--border-color-light)}.c-table__cell{padding:10px;position:relative;text-align:left;z-index:0}.c-table__cell:before{background-color:var(--color-primary);bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .1s}.c-table__cell--header{background-color:var(--bg-color);border-bottom:1px solid var(--border-color-light);position:sticky;top:0;white-space:nowrap;z-index:1}.c-table__sort{align-items:center;display:inline-flex}.c-table__sort-icons{display:inline-flex;flex-direction:column;margin:0 0 0 4px}.c-table__sort-icon{height:16px;margin:-4px 0;width:16px}.c-table__sort-icon.is-active{color:var(--color-primary)}.c-table__sort-btn{color:var(--color-text-lightest);padding:4px 0}.c-table__sort-btn--has-sort{cursor:pointer;transition:color .1s}.c-table__sort-btn--has-sort:hover{color:var(--color-text)}.c-table__summary{color:var(--color-text-light);font-size:12px;font-weight:400;line-height:14px;margin:0;min-height:14px}',""]),n.locals={},t.exports=n},608:function(t,e,r){"use strict";var n=r(2),o=r(17),c=r(74),l=r(346),f=r(345),d=r(16),v=RangeError,h=String,y=Math.floor,_=o(f),m=o("".slice),k=o(1..toFixed),w=function(t,e,r){return 0===e?r:e%2==1?w(t,e-1,r*t):w(t*t,e/2,r)},x=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=y(n/1e7)},O=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=y(r/t),r=r%t*1e7},j=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:d((function(){return"0.000"!==k(8e-5,3)||"1"!==k(.9,0)||"1.25"!==k(1.255,2)||"1000000000000000128"!==k(0xde0b6b3a7640080,0)}))||!d((function(){k({})}))},{toFixed:function(t){var e,r,n,o,f=l(this),d=c(t),data=[0,0,0,0,0,0],y="",k="0";if(d<0||d>20)throw new v("Incorrect fraction digits");if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return h(f);if(f<0&&(y="-",f=-f),f>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(f*w(2,69,1))-69)<0?f*w(2,-e,1):f/w(2,e,1),r*=4503599627370496,(e=52-e)>0){for(x(data,0,r),n=d;n>=7;)x(data,1e7,0),n-=7;for(x(data,w(10,n,1),0),n=e-1;n>=23;)O(data,1<<23),n-=23;O(data,1<<n),x(data,1,1),O(data,2),k=j(data)}else x(data,0,r),x(data,1<<-e,0),k=j(data)+_("0",d);return k=d>0?y+((o=k.length)<=d?"0."+_("0",d-o)+k:m(k,0,o-d)+"."+m(k,o-d)):y+k}})},645:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t){return null!=t}},858:function(t,e,r){var content=r(896);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("f369c718",content,!0,{sourceMap:!1})},895:function(t,e,r){"use strict";r(858)},896:function(t,e,r){var n=r(66)((function(i){return i[1]}));n.push([t.i,".account-contacts__link{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.account-contacts{position:relative}.account-contacts__total{margin:0 0 4px}.account-contacts__total-title{color:var(--color-text-light)}.account-contacts__link{display:block;font-weight:500;max-width:calc(100vw - 140px)}.account-contacts__win-rate{color:var(--win-rate-color)}",""]),n.locals={},t.exports=n},995:function(t,e,r){"use strict";r.r(e);r(591),r(34),r(73);var n=r(42),o=r(13),c=r(32),l=r(33),f=r(36),d=r(37),v=r(23),h=r(20),y=(r(49),r(3),r(1),r(152),r(6),r(151),r(86),r(592),r(56),r(55),r(92),r(15)),_=r(115),m=r(114),k=r(604),w=r(628),x=r(595),O=r(226),j=r(116),C=r(104),R=r(598),S=r(225),P=r(645);function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var I=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},B=function(t){Object(f.a)(_,t);var e,r,d,v,h,y=A(_);function _(){var t;return Object(c.a)(this,_),(t=y.apply(this,arguments)).loading=0,t.notify=C.a.notify(),t.user=C.a.user(),t.items=[],t.sort={order:"desc",prop:"lastBattleTime"},t}return Object(l.a)(_,[{key:"colors",get:function(){return x.a}},{key:"headers",get:function(){return[{key:"nickname",label:"Ник",hasSort:!0},{key:"clan",label:"Клан",hasSort:!0,sortMethod:function(a,b){var t,e;return String((null===(t=a.clan)||void 0===t?void 0:t.tag)||"").localeCompare((null===(e=b.clan)||void 0===e?void 0:e.tag)||"")}},{key:"battles",label:"Боёв",hasSort:!0,sortMethod:function(a,b){return a.statistic.all.battles-b.statistic.all.battles}},{key:"winRate",label:"Побед",hasSort:!0,sortMethod:function(a,b){return a.statistic.all.winRate-b.statistic.all.winRate}},{key:"damagePerBattle",label:"Урон",hasSort:!0,sortMethod:function(a,b){return a.statistic.all.damagePerBattle-b.statistic.all.damagePerBattle}},{key:"rating",label:"Рейтинг",hasSort:!0,sortMethod:function(a,b){var t,e,r,n;return(null!==(t=null===(e=a.statistic.rating)||void 0===e?void 0:e.rating)&&void 0!==t?t:0)-(null!==(r=null===(n=b.statistic.rating)||void 0===n?void 0:n.rating)&&void 0!==r?r:0)}},{key:"lastBattleTime",width:160,label:"Последний бой",hasSort:!0,formatter:function(t){return"number"==typeof t?O.a.date.toDatePassed(1e3*t):"---"}}]}},{key:"created",value:(h=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAccountContacts();case 2:case"end":return t.stop()}}),t,this)}))),function(){return h.apply(this,arguments)})},{key:"getAccountInfo",value:(v=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n,data,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,j.a.account.getInfo({account_id:e,extra:"private.grouped_contacts"});case 4:return n=t.sent,data=n.data,t.abrupt("return",null!==(r=data[e])&&void 0!==r?r:null);case 9:return t.prev=9,t.t0=t.catch(1),this.notify.add({type:"error",title:"Ошибка получения данных аккаунта",message:null!==(o=null===t.t0||void 0===t.t0?void 0:t.t0.message)&&void 0!==o?o:"Неизвестная ошибка"}),console.error(t.t0),t.abrupt("return",null);case 14:return t.prev=14,this.loading--,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,9,14,17]])}))),function(t){return v.apply(this,arguments)})},{key:"getClanAccountsInfo",value:(d=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,j.a.clan.getAccountInfo({extra:"clan",account_id:e.join(",")});case 4:return r=t.sent,data=r.data,t.abrupt("return",Object.values(data).filter(P.a));case 9:return t.prev=9,t.t0=t.catch(1),this.notify.add({type:"error",title:"Ошибка поучения списка клановых аккаунтов",message:null!==(n=null===t.t0||void 0===t.t0?void 0:t.t0.message)&&void 0!==n?n:"Неизвестная ошибка"}),console.error(t.t0),t.abrupt("return",[]);case 14:return t.prev=14,this.loading--,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,9,14,17]])}))),function(t){return d.apply(this,arguments)})},{key:"buildAccountsList",value:function(t,e){var r=t.map((function(t){var r,n=t.statistics,o=R.a.accountAll(n.all),c=n.rating?R.a.accountRating(n.rating):null,l=(null!==(r=e.find((function(i){return(null==i?void 0:i.account_id)===t.account_id})))&&void 0!==r?r:{}).clan;return{id:t.account_id,nickname:t.nickname,lastBattleTime:t.last_battle_time,statistic:{all:o,rating:c},clan:null!=l?l:null}}));this.items=r.sort((function(a,b){return b.lastBattleTime-a.lastBattleTime}))}},{key:"getAccountInfoList",value:(r=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,j.a.account.getInfo({extra:"statistics.rating",account_id:e.join(",")});case 4:return r=t.sent,t.abrupt("return",Object.values(r.data).filter(P.a));case 8:return t.prev=8,t.t0=t.catch(1),this.notify.add({type:"error",title:"Ошибка поучения списка аккаунтов",message:null!==(n=null===t.t0||void 0===t.t0?void 0:t.t0.message)&&void 0!==n?n:"Неизвестная ошибка"}),console.error(t.t0),t.abrupt("return",[]);case 13:return t.prev=13,this.loading--,t.finish(13);case 16:case"end":return t.stop()}}),t,this,[[1,8,13,16]])}))),function(t){return r.apply(this,arguments)})},{key:"getAccountContacts",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r,o,c,l,f,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.user.accountId){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,this.getAccountInfo(e);case 5:if(null==(r=t.sent)||!r.private){t.next=15;break}return o=r.private.grouped_contacts.ungrouped.filter((function(i){return i})),t.next=10,Promise.all([this.getAccountInfoList(o.slice(0,100)),this.getClanAccountsInfo(o.slice(0,100))]);case 10:c=t.sent,l=Object(n.a)(c,2),f=l[0],d=l[1],this.buildAccountsList(f.filter((function(i){return null!==i})),d.filter((function(i){return null!==i})));case 15:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"handleSort",value:function(t){t.order||this.items.sort((function(a,b){return b.lastBattleTime-a.lastBattleTime}))}}]),_}(y.Vue),E=B=I([Object(y.Component)({components:{ContentLoader:S.default,RatingIcon:w.default,CTable:k.default,CButton:m.default,SvgIcon:_.default},head:function(){return{title:"Контакты / Аккаунты | Blitz Commander"}}})],B),M=(r(895),r(35)),component=Object(M.a)(E,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"account-contacts"},[t._m(0),t._v(" "),e("div",{staticClass:"account-contacts__total"},[e("span",{staticClass:"account-contacts__total-title"},[t._v("\n      Кол-во (макс. 100):\n    ")]),t._v("\n    "+t._s(t.items.length||0)+"\n  ")]),t._v(" "),e("CTable",{attrs:{"no-wrap":"","scroll-auto-disabling":"",sort:t.sort,headers:t.headers,data:t.items,height:"calc(100vh - 112px)"},on:{sort:t.handleSort},scopedSlots:t._u([{key:"nickname",fn:function(r){var n=r.row;return[e("nuxt-link",{staticClass:"account-contacts__link link",attrs:{to:{name:"account-id",params:{id:n.id}}}},[t._v("\n        "+t._s(n.nickname)+"\n      ")])]}},{key:"battles",fn:function(e){var r=e.row;return[t._v("\n      "+t._s(r.statistic.all.battles)+"\n    ")]}},{key:"winRate",fn:function(r){var n=r.row;return[e("b",{staticClass:"account-contacts__win-rate",style:{color:"var(--color-".concat(t.colors.winRate(n.statistic.all.winRate),")")}},[t._v("\n        "+t._s(t.$formatter.number.toFloatPercent(n.statistic.all.winRate))+"\n      ")])]}},{key:"rating",fn:function(t){var r=t.row;return[e("RatingIcon",{attrs:{rating:r.statistic.rating}})]}},{key:"damagePerBattle",fn:function(e){var r=e.row;return[t._v("\n      "+t._s(r.statistic.all.damagePerBattle)+"\n    ")]}},{key:"clan",fn:function(r){var n=r.row;return[n.clan?e("nuxt-link",{staticClass:"account-contacts__link link",attrs:{title:n.clan.name,to:{name:"clan-id",params:{id:n.clan.clan_id}}}},[t._v("\n        "+t._s(n.clan.tag)+"\n      ")]):e("span",[t._v("---")])]}}])}),t._v(" "),e("ContentLoader",{attrs:{loading:t.loading>0}})],1)}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"account-contacts__description content-area"},[e("p",[t._v('Таблица "Контактов" из игры. Удаление и добавление возможно только в игре')])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{RatingIcon:r(628).default,ContentLoader:r(225).default})}}]);