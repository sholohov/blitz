(window.webpackJsonp=window.webpackJsonp||[]).push([[71,19,22,34,36,47,63],{583:function(t,e,r){"use strict";r.r(e);r(84);var n=r(36),o=r(35),c=r(40),l=r(41),f=r(25),d=r(21),v=(r(4),r(1),r(34),r(17));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var m=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},_=function(t){Object(c.a)(r,t);var e=h(r);function r(){var t;return Object(o.a)(this,r),(t=e.apply(this,arguments)).name="ContentLoader",t}return Object(n.a)(r)}(v.Vue);m([Object(v.Prop)({default:!1})],_.prototype,"loading",void 0),m([Object(v.Prop)({default:!1})],_.prototype,"backdropLight",void 0);var y=_=m([Object(v.Component)({})],_),O=(r(595),r(37)),component=Object(O.a)(y,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"content-loader",class:[t.loading?"content-loader--is-active":"",!1!==t.backdropLight?"content-loader--hide-backdrop":""]})}),[],!1,null,null,null);e.default=component.exports},584:function(t,e,r){"use strict";var n=r(2),o=r(16),c=r(50),l=r(44),f=r(51),d=r(228),v=r(38),h=r(15),m=r(227),_=r(184),y=r(342),O=r(343),j=r(132),k=r(344),w=[],x=o(w.sort),R=o(w.push),P=h((function(){w.sort(void 0)})),M=h((function(){w.sort(null)})),C=_("sort"),S=!h((function(){if(j)return j<70;if(!(y&&y>3)){if(O)return!0;if(k)return k<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)w.push({k:t+r,v:e})}for(w.sort((function(a,b){return b.v-a.v})),r=0;r<w.length;r++)t=w[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:P||!M||!C||!S},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(S)return void 0===t?x(e):x(e,t);var r,n,o=[],h=f(e);for(n=0;n<h;n++)n in e&&R(o,e[n]);for(m(o,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:v(e)>v(r)?1:-1}}(t)),r=f(o),n=0;n<r;)e[n]=o[n++];for(;n<h;)d(e,n++);return e}})},585:function(t,e,r){"use strict";r.d(e,"a",(function(){return k}));r(7),r(5),r(6),r(1),r(4),r(3),r(10);var n=r(42),o=(r(340),function(t){return+(t.hits/(t.shots/100)||0).toFixed(2)}),c=function(t){return+(t.wins/(t.battles/100)||0).toFixed(2)},l=function(t){var e=t.battles||0;return+((t.survived_battles||0)/(e/100)||0).toFixed(2)},f=function(t){var e=t.battles||0;return+((t.damage_dealt||0)/e||0).toFixed(0)},d=function(t){var e=t.battles||0;return+((t.xp||0)/e||0).toFixed(0)},v=function(t){var e=t.battles||0;return+((t.frags||0)/e||0).toFixed(2)},h=function(t){var e=t.battles||0;return+((t.spotted||0)/e||0).toFixed(2)};function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var y=r(225),O=function(t,e){if(!Object(y.a)(t)||!Object(y.a)(e))throw new Error("addValues: some value is not a object");var r={};for(var n in t){var o,c,l=null!==(o=t[n])&&void 0!==o?o:0,f=null!==(c=e[n])&&void 0!==c?c:0;r[n]=l-f}return r},j=function(t,e){if(!Object(y.a)(t)||!Object(y.a)(e))throw new Error("statsSum: some value is not a object");var r={};for(var n in t){var o=t[n]||0,c=e[n]||0;r[n]=o+c}return r},k={accountAll:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!Object(y.a)(t))throw new Error("accountStats: value is nota a object");return{battles:Math.floor(t.battles/e),capture_points:Math.floor(t.capture_points/e),damage_dealt:Math.floor(t.damage_dealt/e),damage_received:Math.floor(t.damage_received/e),dropped_capture_points:Math.floor(t.dropped_capture_points/e),frags8p:Math.floor(t.frags8p/e),frags:Math.floor(t.frags/e),hits:Math.floor(t.hits/e),losses:Math.floor(t.losses/e),max_frags:Math.floor(t.max_frags/e),max_frags_tank_id:Math.floor(t.max_frags_tank_id/e),max_xp:Math.floor(t.max_xp/e),max_xp_tank_id:Math.floor(t.max_xp_tank_id/e),shots:Math.floor(t.shots/e),spotted:Math.floor(t.spotted/e),survived_battles:Math.floor(t.survived_battles/e),win_and_survived:Math.floor(t.win_and_survived/e),wins:Math.floor(t.wins/e),xp:Math.floor(t.xp/e),winRate:c(t),hitRate:o(t),surviveRate:l(t),xpPerBattle:d(t),damagePerBattle:f(t),fragPerBattle:v(t),spottedPerBattle:h(t)}},accountRating:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!Object(y.a)(t))throw new Error("accountStats: value is nota a object");return{battles:Math.floor(t.battles/e),capture_points:Math.floor(t.capture_points/e),damage_dealt:Math.floor(t.damage_dealt/e),damage_received:Math.floor(t.damage_received/e),dropped_capture_points:Math.floor(t.dropped_capture_points/e),frags8p:Math.floor(t.frags8p/e),frags:Math.floor(t.frags/e),hits:Math.floor(t.hits/e),losses:Math.floor(t.losses/e),shots:Math.floor(t.shots/e),spotted:Math.floor(t.spotted/e),survived_battles:Math.floor(t.survived_battles/e),win_and_survived:Math.floor(t.win_and_survived/e),wins:Math.floor(t.wins/e),xp:Math.floor(t.xp/e),calibration_battles_left:Math.floor(t.calibration_battles_left/e),current_season:Math.floor(t.current_season/e),mm_rating:+(t.mm_rating/e).toFixed(2),recalibration_start_time:Math.floor(t.recalibration_start_time/e),is_recalibration:t.is_recalibration,rating:t.mm_rating?Math.floor(10*t.mm_rating+3e3):0,winRate:c(t),hitRate:o(t),surviveRate:l(t),damagePerBattle:f(t),fragPerBattle:v(t),spottedPerBattle:h(t)}},tank:function(t){return _(_({},t),{},{winRate:c(t),hitRate:o(t),surviveRate:l(t),damagePerBattle:f(t),xpPerBattle:d(t),fragPerBattle:v(t),spottedPerBattle:h(t)})},diffFull:function(t,e){var r={frags:t.frags,clan:O(t.clan,e.clan),all:O(t.all,e.all),rating:void 0};return t.rating&&e.rating&&(r.rating=O(t.rating,e.rating)),r},diff:O,sum:j,sumFull:function(t,e){var r={frags:t.frags,clan:j(t.clan,e.clan),all:j(t.all,e.all),rating:void 0};return t.rating&&e.rating&&(r.rating=j(t.rating,e.rating)),r},achievementsDiff:function(t,e,r){var n={achievements:{},max_series:{}};for(var o in t.achievements){var c,l=t.achievements[o]||0,f=(null===(c=e.achievements)||void 0===c?void 0:c[o])||0,d=Array.isArray(null==r?void 0:r[o].options);n.achievements[o]=d?Math.abs(l-f)?l:0:d?l:l-f}for(var v in t.max_series){var h,m=t.max_series[v]||0,_=(null===(h=e.max_series)||void 0===h?void 0:h[v])||0;n.max_series[v]=m-_}return n},teamPoints:function(t,e){var r,n,o,c;return[1e3*t.all.wins,t.all.damage_dealt,750*(null!==(r=null===(n=e.achievements)||void 0===n?void 0:n.medalBrothersInArms)&&void 0!==r?r:0),1750*(null!==(o=null===(c=e.achievements)||void 0===c?void 0:c.medalCrucialContribution)&&void 0!==o?o:0)].reduce((function(t,e){return t+e}),0)}}},586:function(t,e,r){"use strict";var n=r(2),o=r(57).find,c=r(183),l="find",f=!0;l in[]&&Array(1)[l]((function(){f=!1})),n({target:"Array",proto:!0,forced:f},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},587:function(t,e,r){var content=r(596);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("03eb9cfd",content,!0,{sourceMap:!1})},590:function(t,e,r){var content=r(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("58b69000",content,!0,{sourceMap:!1})},591:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n={winRate:function(t){switch(!0){case t>=70:return"purple";case t>=60:return"blue";case t>=50:return"green";default:return"text"}}}},595:function(t,e,r){"use strict";r(587)},596:function(t,e,r){var n=r(75)((function(i){return i[1]}));n.push([t.i,'.content-loader{align-items:center;bottom:0;display:flex;justify-content:center;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s;z-index:1}.content-loader--is-active{opacity:1;pointer-events:auto}.content-loader:before{background-color:var(--bg-color-darken);bottom:0;content:"";left:0;opacity:.95;position:absolute;right:0;top:0}.content-loader--hide-backdrop:before{background-color:var(--bg-color)}.content-loader:after{animation:loader-rotation 1.5s linear infinite;border:4px solid var(--bg-color-darken);border-left-color:var(--color-primary);border-radius:50%;box-sizing:border-box;content:"";display:flex;height:24px;position:relative;transform:translateZ(0);width:24px}@keyframes loader-rotation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),n.locals={},t.exports=n},598:function(t,e,r){"use strict";r.d(e,"a",(function(){return _}));var n=r(42),o=(r(85),r(586),r(1),r(34),r(7),r(5),r(6),r(4),r(3),r(10),r(585));function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r(152);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v=function(t,e){var r=e.statistics.all,n=e.statistics.rating;return{account_id:t.account_id,account_name:t.account_name,joined_at:t.joined_at,role:_.getMemberRole({role:t.role,joinedAt:t.joined_at}),lastBattleTime:e.last_battle_time,statistic:{all:o.a.accountAll(r),rating:n?o.a.accountRating(n):null}}};function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r(340),r(11),r(48),r(90),r(86);var _={getMemberRole:function(t){if("private"!==t.role)return t.role;var e=Date.now(),r=t.role;return 1e3*t.joinedAt>e-6048e5&&(r="recruit"),r},getRating:function(t){var e={league:"calibration",value:""};if(0===t.battlesLeft&&0===t.mmRating)return e;if(0===t.mmRating)return e.value="".concat(10-t.battlesLeft,"/10"),e;var r=10*t.mmRating+3e3;return e.value=r.toFixed(0),e.league=r<2e3?"bronze":r<3e3?"silver":r<4e3?"gold":r<5e3?"platinum":"brilliant",e},clan:function(t,e){var r,n=Object.values(null!==(r=t.members)&&void 0!==r?r:{}).map((function(t){var r=e[t.account_id];return r?v(t,r):function(t){return d(d({},t),{},{statistic:{all:{},rating:{}},lastBattleTime:0})}(t)}));return m(m({},t),{},{members:n})},clanMember:v,accountTanks:function(t,e,r){return t.map((function(t){var n,c,f,d,v,h,m=null!==(n=(null!=e?e:{})[t.tank_id])&&void 0!==n?n:{},_=r.find((function(i){return i.tank_id===t.tank_id}));return m.name||console.log("no tank in vehicles data: id -",t.tank_id),l(l({},t),{},{is_premium:m.is_premium,is_collectible:null!==(c=m.is_collectible)&&void 0!==c&&c,name:m.name,nation:m.nation,tier:m.tier,type:m.type,images:m.images,all:o.a.tank(t.all),achievements:{achievements:null!==(f=null==_?void 0:_.achievements)&&void 0!==f?f:{},max_series:null!==(d=null==_?void 0:_.max_series)&&void 0!==d?d:{},tank_id:null!==(v=null==_?void 0:_.tank_id)&&void 0!==v?v:0,account_id:null!==(h=null==_?void 0:_.account_id)&&void 0!==h?h:0}})}))},achievementsMedal:function(t){var e,r=t.key,n=t.achievements.achievements[r],o=t.achievements.max_series[r],c=t.encyclopedia[r],l=function(t){return"/img/medals/".concat(r.replace(/EU|RU|NA|SEA/,"")).concat(null!=t?t:"",".webp")},f={key:r,count:n||0,series:o||0,condition:null==c?void 0:c.condition,description:null==c?void 0:c.description,name:null==c?void 0:c.name,section:null==c?void 0:c.section,image:l()};c.options&&(f.name=(null===(e=c.options[n-1])||void 0===e?void 0:e.name)||c.name,f.count=n?c.options.length-n+1:0,f.degree=n,f.image=l(n||c.options.length));return f.name=String(f.name).replace(/\(.+\)/,""),f}}},600:function(t,e,r){"use strict";r.r(e);r(84);var n=r(35),o=r(36),c=r(40),l=r(41),f=r(25),d=r(21),v=(r(4),r(1),r(34),r(105),r(584),r(130),r(131),r(7),r(17)),h=r(345),m=r.n(h),_=r(341),y=r.n(_),O=(r(5),r(6),r(10),r(42));r(3);function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function k(t,e,r){var n=[],o=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){Object(O.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},t);if("string"==typeof o.target){var c=document.querySelectorAll(o.target);Array.prototype.forEach.call(c,(function(t){n.push(t)}))}else Array.isArray(o.target)&&o.target.forEach((function(t){n.push(t)}));var l=new IntersectionObserver((function(e){e.forEach((function(e){var n=e.target,c=e.isIntersecting;o.visibleClassName&&n.classList[c?"add":"remove"](o.visibleClassName),o.hiddenSelector&&n.classList[c?"remove":"add"](o.hiddenSelector),"function"==typeof r&&r(e),t.once&&c&&l.unobserve(n)}))}),e);return n.forEach((function(t){return l.observe(t)})),l}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var x=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},R=function(t){Object(c.a)(r,t);var e=w(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).name="CTable",t.elementObserver=null,t}return Object(o.a)(r,[{key:"mounted",value:function(){var t=this;!1!==this.scrollAutoDisabling&&(this.elementObserver=k({target:".c-table",visibleClassName:"c-table--in-view"},{rootMargin:"0%",threshold:1},(function(e){var r=e.target;e.isIntersecting?t.disableScroll(r,!1):(t.disableScroll(r,!0),r.scrollTo({top:0}))})))}},{key:"destroyed",value:function(){var t;!1!==this.scrollAutoDisabling&&(null===(t=this.elementObserver)||void 0===t||t.disconnect())}},{key:"sortEvent",value:function(t){return t}},{key:"rowClickEvent",value:function(t){return t}},{key:"colStyles",value:function(col){return{textAlign:col.align,width:Number(col.width)?"".concat(col.width,"px"):"auto"}}},{key:"smartSort",value:function(){var t=this.sort.prop,e=this.sort.order;this.data.sort((function(a,b){var r=("desc"===e?b:a)[t],n=("desc"===e?a:b)[t];return String(r).localeCompare(String(n),void 0,{numeric:!0,sensitivity:"base"})}))}},{key:"sortByMethod",value:function(header){var t=this.sort.order;this.data.sort((function(a,b){var e,r;return"desc"===t?(null===(e=header.sortMethod)||void 0===e?void 0:e.call(header,b,a))||0:(null===(r=header.sortMethod)||void 0===r?void 0:r.call(header,a,b))||0}))}},{key:"handleSort",value:function(t){if(t.hasSort){var e=this.sort.order;this.sort.prop!==t.key&&(e=""),e=e?"asc"===e?"desc":"":"asc",this.sort.order=e,this.sort.prop=t.key,e&&("function"==typeof t.sortMethod?this.sortByMethod(t):this.smartSort()),this.sortEvent({order:this.sort.order,prop:this.sort.prop,column:t})}}},{key:"formatValue",value:function(header,t){return"function"==typeof header.formatter?header.formatter(t):t}},{key:"arrowIsActive",value:function(t,e){return this.sort.order===t&&this.sort.prop===e}},{key:"getSummary",value:function(col){return"object"===Object(d.a)(this.summary)&&Object.keys(this.summary).includes(col.key)?"function"==typeof col.formatter?col.formatter(this.summary[col.key]):this.summary[col.key]:""}},{key:"getScrollbarWidth",value:function(){var t=document.createElement("div");t.style.position="absolute",t.style.overflow="scroll",document.body.append(t);var e=t.offsetWidth-t.clientWidth;return t.remove(),e}},{key:"disableScroll",value:function(t,e){e?(t.style.paddingRight=this.getScrollbarWidth()+"px",t.style.overflowY="hidden"):(t.style.overflowY="",t.style.paddingRight="")}}]),r}(v.Vue);x([Object(v.Prop)({required:!0})],R.prototype,"headers",void 0),x([Object(v.Prop)({required:!0})],R.prototype,"data",void 0),x([Object(v.Prop)()],R.prototype,"summary",void 0),x([Object(v.Prop)({default:!1})],R.prototype,"noWrap",void 0),x([Object(v.Prop)({default:!1})],R.prototype,"scrollAutoDisabling",void 0),x([Object(v.Prop)({default:!1})],R.prototype,"isFixed",void 0),x([Object(v.Prop)()],R.prototype,"height",void 0),x([Object(v.Prop)()],R.prototype,"rowKey",void 0),x([Object(v.Prop)()],R.prototype,"maxHeight",void 0),x([Object(v.Prop)()],R.prototype,"minHeight",void 0),x([Object(v.Prop)({default:function(){return{order:"asc",prop:""}}})],R.prototype,"sort",void 0),x([Object(v.Emit)("sort")],R.prototype,"sortEvent",null),x([Object(v.Emit)("row-click")],R.prototype,"rowClickEvent",null);var P=R=x([Object(v.Component)({components:{AscIcon:m.a,DescIcon:y.a}})],R),M=(r(603),r(37)),component=Object(M.a)(P,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"c-table",class:[!1!==t.noWrap?"c-table--no-wrap":""],style:{height:t.height,maxHeight:t.maxHeight,minHeight:t.minHeight,tableLayout:!1!==t.isFixed?"fixed":"auto"}},[e("table",{staticClass:"c-table__table"},[e("thead",{staticClass:"c-table__head"},[e("tr",{staticClass:"c-table__head-row"},t._l(t.headers,(function(col){return e("th",{key:col.key,staticClass:"c-table__cell c-table__cell--header",style:t.colStyles(col)},[e("div",{staticClass:"c-table__sort"},[e("button",{staticClass:"c-table__sort-btn",class:[col.hasSort?"c-table__sort-btn--has-sort":""],attrs:{title:col.tooltip},on:{click:function(e){return t.handleSort(col)}}},[t._t("".concat(col.key,"-header"),(function(){return[t._v("\n                "+t._s(col.label)+"\n              ")]}))],2),t._v(" "),col.hasSort?e("span",{staticClass:"c-table__sort-icons"},[e("AscIcon",{staticClass:"c-table__sort-icon",class:[t.arrowIsActive("asc",col.key)?"is-active":""]}),t._v(" "),e("DescIcon",{staticClass:"c-table__sort-icon",class:[t.arrowIsActive("desc",col.key)?"is-active":""]})],1):t._e()]),t._v(" "),t.summary?e("div",{staticClass:"c-table__summary"},[t._t("".concat(col.key,"-summary"),(function(){return[t._v("\n              "+t._s(t.getSummary(col))+"\n            ")]}))],2):t._e()])})),0)]),t._v(" "),e("tbody",{staticClass:"c-table__body"},t._l(t.data,(function(r,n){var o;return e("tr",{key:null!==(o=r[t.rowKey])&&void 0!==o?o:n,staticClass:"c-table__row",on:{click:function(e){return t.rowClickEvent(r)}}},t._l(t.headers,(function(col){return e("td",{key:col.key,staticClass:"c-table__cell",style:t.colStyles(col)},[r?t._t("".concat(col.key),(function(){return[t._v("\n            "+t._s(t.formatValue(col,r[col.key]))+"\n          ")]}),{row:r,data:r[col.key],index:n}):t._e()],2)})),0)})),0)]),t._v(" "),Array.isArray(t.data)&&t.data.length?t._e():e("div",{staticClass:"c-table__no-data"},[t._v("\n    Нет данных\n  ")])])}),[],!1,null,null,null);e.default=component.exports},603:function(t,e,r){"use strict";r(590)},604:function(t,e,r){var n=r(75)((function(i){return i[1]}));n.push([t.i,'.c-table__sort-btn{-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;background:transparent;border:none;color:inherit;font:inherit;line-height:normal;overflow:visible;padding:0;text-align:inherit;width:auto}.c-table__sort-btn::-moz-focus-inner{border:0;padding:0}.c-table__sort-btn:focus{outline:none}.c-table{background-color:var(--bg-color);flex:0 0 auto;min-height:100%;overflow-x:auto;overflow-y:scroll;position:relative;transform:translateZ(0)}.c-table--no-wrap{white-space:nowrap}.c-table__table{border-collapse:separate;border-spacing:0;position:relative;width:100%}.c-table__no-data{align-items:center;color:var(--color-text-light);display:flex;height:100%;justify-content:center;left:0;padding:20px 0;position:sticky}.c-table__row:hover .c-table__cell:before{opacity:.1}.c-table__row:not(:last-child) .c-table__cell{border-bottom:1px solid var(--border-color-light)}.c-table__cell{padding:10px;position:relative;text-align:left;z-index:0}.c-table__cell:before{background-color:var(--color-primary);bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .1s}.c-table__cell--header{background-color:var(--bg-color);border-bottom:1px solid var(--border-color-light);position:sticky;top:0;white-space:nowrap;z-index:1}.c-table__sort{align-items:center;display:inline-flex}.c-table__sort-icons{display:inline-flex;flex-direction:column;margin:0 0 0 4px}.c-table__sort-icon{height:16px;margin:-4px 0;width:16px}.c-table__sort-icon.is-active{color:var(--color-primary)}.c-table__sort-btn{color:var(--color-text-lightest);padding:4px 0}.c-table__sort-btn--has-sort{cursor:pointer;transition:color .1s}.c-table__sort-btn--has-sort:hover{color:var(--color-text)}.c-table__summary{color:var(--color-text-light);font-size:12px;font-weight:400;line-height:14px;margin:0;min-height:14px}',""]),n.locals={},t.exports=n},607:function(t,e,r){var content=r(635);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("2e7c8396",content,!0,{sourceMap:!1})},616:function(t,e,r){"use strict";r.r(e);r(84);var n=r(35),o=r(36),c=r(40),l=r(41),f=r(25),d=r(21),v=(r(4),r(1),r(34),r(17)),h=r(598);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var _=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},y=function(t){Object(c.a)(r,t);var e=m(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).name="RatingIcon",t}return Object(o.a)(r,[{key:"getRating",get:function(){var t=this.rating;return t?h.a.getRating({battlesLeft:t.calibration_battles_left,mmRating:t.mm_rating}):{}}}]),r}(v.Vue);_([Object(v.Prop)()],y.prototype,"rating",void 0);var O=y=_([Object(v.Component)({})],y),j=(r(634),r(37)),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"rating-icon"},[e("img",{staticClass:"rating-icon__img",attrs:{src:"/img/leagues/".concat(t.getRating.league,"_l.webp"),alt:t.$formatter.clan.league(t.getRating.league)}}),t._v("\n  "+t._s(t.getRating.value||"---")+"\n")])}),[],!1,null,null,null);e.default=component.exports},634:function(t,e,r){"use strict";r(607)},635:function(t,e,r){var n=r(75)((function(i){return i[1]}));n.push([t.i,".rating-icon{align-items:center;display:inline-flex}.rating-icon__img{display:flex;height:20px;margin:0 4px 0 0;-o-object-fit:cover;object-fit:cover;width:20px}",""]),n.locals={},t.exports=n},642:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t){return null!=t}},887:function(t,e,r){var content=r(919);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(76).default)("2b357cee",content,!0,{sourceMap:!1})},918:function(t,e,r){"use strict";r(887)},919:function(t,e,r){var n=r(75)((function(i){return i[1]}));n.push([t.i,".account-tracked[data-v-f73ff294]{position:relative}.account-tracked__total[data-v-f73ff294]{margin:0 0 4px}.account-tracked__total-title[data-v-f73ff294]{color:var(--color-text-light)}.account-tracked__link[data-v-f73ff294]{display:flex;flex:1;font-weight:500}.account-tracked__win-rate[data-v-f73ff294]{color:var(--win-rate-color)}",""]),n.locals={},t.exports=n},990:function(t,e,r){"use strict";r.r(e);r(584),r(34),r(84);var n=r(39),o=r(12),c=r(35),l=r(36),f=r(40),d=r(41),v=r(25),h=r(21),m=(r(49),r(4),r(1),r(92),r(85),r(133),r(6),r(152),r(586),r(56),r(55),r(17)),_=r(116),y=r(114),O=r(600),j=r(616),k=r(591),w=r(52),x=r(226),R=r(115),P=r(104),M=r(585),C=r(583),S=r(642);function A(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var B=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},D=function(t){Object(f.a)(O,t);var e,r,d,v,h,m,_,y=A(O);function O(){var t;return Object(c.a)(this,O),(t=y.apply(this,arguments)).loading=0,t.notify=P.a.notify(),t.items=[],t.itemsLimit=100,t.accountsLocal=[],t.sort={order:"desc",prop:"lastBattleTime"},t}return Object(l.a)(O,[{key:"colors",get:function(){return k.a}},{key:"headers",get:function(){return[{key:"nickname",label:"Ник",hasSort:!0},{key:"clan",label:"Клан",hasSort:!0,sortMethod:function(a,b){var t,e;return String((null===(t=a.clan)||void 0===t?void 0:t.tag)||"").localeCompare((null===(e=b.clan)||void 0===e?void 0:e.tag)||"")}},{key:"battles",label:"Боёв",hasSort:!0,sortMethod:function(a,b){return a.statistic&&b.statistic?a.statistic.all.battles-b.statistic.all.battles:0}},{key:"winRate",label:"Побед",hasSort:!0,sortMethod:function(a,b){return a.statistic&&b.statistic?a.statistic.all.winRate-b.statistic.all.winRate:0}},{key:"damagePerBattle",label:"Урон",hasSort:!0,sortMethod:function(a,b){return a.statistic&&b.statistic?a.statistic.all.damagePerBattle-b.statistic.all.damagePerBattle:0}},{key:"rating",label:"Рейтинг",hasSort:!0,sortMethod:function(a,b){var t,e,r,n;return a.statistic&&b.statistic?(null!==(t=null===(e=a.statistic.rating)||void 0===e?void 0:e.rating)&&void 0!==t?t:0)-(null!==(r=null===(n=b.statistic.rating)||void 0===n?void 0:n.rating)&&void 0!==r?r:0):0}},{key:"lastBattleTime",width:160,label:"Последний бой",hasSort:!0,formatter:function(t){return"number"==typeof t?x.a.date.toDatePassed(1e3*t):"---"}},{key:"actions",width:60}]}},{key:"created",value:function(){this.loadAll()}},{key:"loadAccounts",value:(_=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w.a.indexedDB.accountsInfo.getAll();case 3:e=t.sent,this.accountsLocal=(Array.isArray(e)?e.map((function(i){return i.data})):[]).sort((function(a,b){return b.last_battle_time-a.last_battle_time})).slice(0,100),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0),this.notify.add({type:"error",title:"Ошибка поучения локального списка аккаунтов",message:null!==(r=null===t.t0||void 0===t.t0?void 0:t.t0.message)&&void 0!==r?r:"Неизвестная ошибка"});case 11:case"end":return t.stop()}}),t,this,[[0,7]])}))),function(){return _.apply(this,arguments)})},{key:"getAccountInfoList",value:(m=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,R.a.account.getInfo({extra:"statistics.rating",account_id:e.join(",")});case 4:return r=t.sent,t.abrupt("return",Object.values(r.data).filter(S.a));case 8:return t.prev=8,t.t0=t.catch(1),this.notify.add({type:"error",title:"Ошибка поучения списка аккаунтов",message:null!==(n=null===t.t0||void 0===t.t0?void 0:t.t0.message)&&void 0!==n?n:"Неизвестная ошибка"}),console.error(t.t0),t.abrupt("return",[]);case 13:return t.prev=13,this.loading--,t.finish(13);case 16:case"end":return t.stop()}}),t,this,[[1,8,13,16]])}))),function(t){return m.apply(this,arguments)})},{key:"getClanAccountsInfo",value:(h=Object(o.a)(regeneratorRuntime.mark((function t(e){var r,data,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,R.a.clan.getAccountInfo({extra:"clan",account_id:e.join(",")});case 4:return r=t.sent,data=r.data,t.abrupt("return",Object.values(data).filter(S.a));case 9:return t.prev=9,t.t0=t.catch(1),this.notify.add({type:"error",title:"Ошибка поучения списка клановых аккаунтов",message:null!==(n=null===t.t0||void 0===t.t0?void 0:t.t0.message)&&void 0!==n?n:"Неизвестная ошибка"}),console.error(t.t0),t.abrupt("return",[]);case 14:return t.prev=14,this.loading--,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,9,14,17]])}))),function(t){return h.apply(this,arguments)})},{key:"loadAll",value:(v=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadAccounts();case 2:return t.next=4,this.getAccounts();case 4:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)})},{key:"buildAccountsList",value:function(t,e){var r=this.accountsLocal.map((function(r){var n,o=t.find((function(i){return i.account_id===r.account_id}));if(!o)return{id:r.account_id,nickname:r.nickname,lastBattleTime:NaN,isDeleted:!0,statistic:null,clan:null};var c=o.statistics,l=M.a.accountAll(c.all),f=c.rating?M.a.accountRating(c.rating):null,d=(null!==(n=e.find((function(i){return(null==i?void 0:i.account_id)===o.account_id})))&&void 0!==n?n:{}).clan;return{id:o.account_id,nickname:o.nickname,lastBattleTime:o.last_battle_time,statistic:{all:l,rating:f},clan:null!=d?d:null}}));this.items=r.sort((function(a,b){return b.lastBattleTime-a.lastBattleTime}))}},{key:"getAccounts",value:(d=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((e=this.accountsLocal.map((function(i){return i.account_id}))).length){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,Promise.all([this.getAccountInfoList(e.slice(0,this.itemsLimit)),this.getClanAccountsInfo(e.slice(0,this.itemsLimit))]);case 5:r=t.sent,o=Object(n.a)(r,2),c=o[0],l=o[1],this.buildAccountsList(c,l);case 10:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)})},{key:"handleSort",value:function(t){t.order||this.items.sort((function(a,b){return b.lastBattleTime-a.lastBattleTime}))}},{key:"bulkRemove",value:(r=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([w.a.indexedDB.accountsInfo.remove(e),w.a.indexedDB.accountsAchievements.remove(e),w.a.indexedDB.tanksStat.remove(e)]);case 2:case"end":return t.stop()}}),t)}))),function(t){return r.apply(this,arguments)})},{key:"handleRemoveBtn",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.bulkRemove(e);case 2:if(!(this.items.length<this.itemsLimit)){t.next=6;break}this.items=this.items.filter((function(i){return i.id!==e})),t.next=8;break;case 6:return t.next=8,this.loadAll();case 8:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),O}(m.Vue),E=D=B([Object(m.Component)({components:{ContentLoader:C.default,RatingIcon:j.default,CTable:O.default,CButton:y.default,SvgIcon:_.default},head:function(){return{title:"Отслеживаемые | Blitz Commander"}}})],D),I=(r(918),r(37)),component=Object(I.a)(E,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"account-tracked"},[t._m(0),t._v(" "),e("div",{staticClass:"account-tracked__total"},[e("span",{staticClass:"account-tracked__total-title"},[t._v("\n      Кол-во (макс. 100):\n    ")]),t._v("\n    "+t._s(t.items.length||0)+"\n  ")]),t._v(" "),e("CTable",{attrs:{"no-wrap":"","scroll-auto-disabling":"",headers:t.headers,data:t.items,sort:t.sort,height:"calc(100vh - 112px)"},on:{sort:t.handleSort},scopedSlots:t._u([{key:"nickname",fn:function(r){var n=r.row;return[n.isDeleted?e("span",[t._v(t._s(n.nickname))]):e("nuxt-link",{staticClass:"account-tracked__link link",attrs:{to:{name:"account-id",params:{id:n.id}}}},[t._v("\n        "+t._s(n.nickname)+"\n      ")])]}},{key:"battles",fn:function(r){var n=r.row;return[n.isDeleted?e("span",[t._v("---")]):e("span",[t._v("\n        "+t._s(n.statistic.all.battles)+"\n      ")])]}},{key:"winRate",fn:function(r){var n=r.row;return[n.isDeleted?e("span",[t._v("---")]):e("b",{staticClass:"account-tracked__win-rate",style:{color:"var(--color-".concat(t.colors.winRate(n.statistic.all.winRate),")")}},[t._v("\n        "+t._s(t.$formatter.stat.winRate(n.statistic.all.winRate))+"\n      ")])]}},{key:"rating",fn:function(r){var n=r.row;return[n.isDeleted?e("span",[t._v("---")]):e("RatingIcon",{attrs:{rating:n.statistic.rating}})]}},{key:"damagePerBattle",fn:function(r){var n=r.row;return[n.isDeleted?e("span",[t._v("---")]):e("span",[t._v("\n        "+t._s(n.statistic.all.damagePerBattle)+"\n      ")])]}},{key:"clan",fn:function(r){var n=r.row;return[n.clan?e("nuxt-link",{staticClass:"account-tracked__link link",attrs:{title:n.clan.name,to:{name:"clan-id",params:{id:n.clan.clan_id}}}},[t._v("\n        "+t._s(n.clan.tag)+"\n      ")]):e("span",[t._v("---")])]}},{key:"actions",fn:function(r){var n=r.row;return[e("CButton",{attrs:{title:"Удалить","is-text":"","is-square":""},on:{click:function(e){return t.handleRemoveBtn(n.id)}}},[e("SvgIcon",{attrs:{"icon-name":"delete"}})],1)]}}])}),t._v(" "),e("ContentLoader",{attrs:{loading:t.loading>0}})],1)}),[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"account-tracked__description content-area"},[e("p",[t._v("В таблице находятся игроки, статистика которых отслеживается в конкретном браузере.")]),t._v(" "),e("p",[t._v("\n      Отслеживание начинается сразу после посещения страницы аккаунта игрока.\n      После удаления из таблицы отслеживание статистики прекращается.\n    ")])])}],!1,null,"f73ff294",null);e.default=component.exports;installComponents(component,{RatingIcon:r(616).default,SvgIcon:r(116).default,ContentLoader:r(583).default})}}]);