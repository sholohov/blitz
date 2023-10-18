(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{582:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));n(6),n(5),n(7),n(1),n(3),n(4),n(9);var r=n(38),o=(n(339),function(t){return+(t.hits/(t.shots/100)||0).toFixed(2)}),c=function(t){return+(t.wins/(t.battles/100)||0).toFixed(2)},l=function(t){var e=t.battles||0;return+((t.survived_battles||0)/(e/100)||0).toFixed(2)},d=function(t){var e=t.battles||0;return+((t.damage_dealt||0)/e||0).toFixed(0)},f=function(t){var e=t.battles||0;return+((t.xp||0)/e||0).toFixed(0)},v=function(t){var e=t.battles||0;return+((t.frags||0)/e||0).toFixed(2)},h=function(t){var e=t.battles||0;return+((t.spotted||0)/e||0).toFixed(2)};function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w=n(21),y=function(t){return null!==t&&"object"===Object(w.a)(t)},x=function(t,e){if(!y(t)||!y(e))throw new Error("addValues: some value is not a object");var n={};for(var r in t){var o,c,l=null!==(o=t[r])&&void 0!==o?o:0,d=null!==(c=e[r])&&void 0!==c?c:0;n[r]=l-d}return n},k=function(t,e){if(!y(t)||!y(e))throw new Error("statsSum: some value is not a object");var n={};for(var r in t){var o=t[r]||0,c=e[r]||0;n[r]=o+c}return n},j={accountAll:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!y(t))throw new Error("accountStats: value is nota a object");return{battles:Math.floor(t.battles/e),capture_points:Math.floor(t.capture_points/e),damage_dealt:Math.floor(t.damage_dealt/e),damage_received:Math.floor(t.damage_received/e),dropped_capture_points:Math.floor(t.dropped_capture_points/e),frags8p:Math.floor(t.frags8p/e),frags:Math.floor(t.frags/e),hits:Math.floor(t.hits/e),losses:Math.floor(t.losses/e),max_frags:Math.floor(t.max_frags/e),max_frags_tank_id:Math.floor(t.max_frags_tank_id/e),max_xp:Math.floor(t.max_xp/e),max_xp_tank_id:Math.floor(t.max_xp_tank_id/e),shots:Math.floor(t.shots/e),spotted:Math.floor(t.spotted/e),survived_battles:Math.floor(t.survived_battles/e),win_and_survived:Math.floor(t.win_and_survived/e),wins:Math.floor(t.wins/e),xp:Math.floor(t.xp/e),winRate:c(t),hitRate:o(t),surviveRate:l(t),xpPerBattle:f(t),damagePerBattle:d(t),fragPerBattle:v(t),spottedPerBattle:h(t)}},accountRating:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!y(t))throw new Error("accountStats: value is nota a object");return{battles:Math.floor(t.battles/e),capture_points:Math.floor(t.capture_points/e),damage_dealt:Math.floor(t.damage_dealt/e),damage_received:Math.floor(t.damage_received/e),dropped_capture_points:Math.floor(t.dropped_capture_points/e),frags8p:Math.floor(t.frags8p/e),frags:Math.floor(t.frags/e),hits:Math.floor(t.hits/e),losses:Math.floor(t.losses/e),shots:Math.floor(t.shots/e),spotted:Math.floor(t.spotted/e),survived_battles:Math.floor(t.survived_battles/e),win_and_survived:Math.floor(t.win_and_survived/e),wins:Math.floor(t.wins/e),xp:Math.floor(t.xp/e),calibration_battles_left:Math.floor(t.calibration_battles_left/e),current_season:Math.floor(t.current_season/e),mm_rating:+(t.mm_rating/e).toFixed(2),recalibration_start_time:Math.floor(t.recalibration_start_time/e),is_recalibration:t.is_recalibration,rating:t.mm_rating?Math.floor(10*t.mm_rating+3e3):0,winRate:c(t),hitRate:o(t),surviveRate:l(t),damagePerBattle:d(t),fragPerBattle:v(t),spottedPerBattle:h(t)}},tank:function(t){return _(_({},t),{},{winRate:c(t),hitRate:o(t),surviveRate:l(t),damagePerBattle:d(t),xpPerBattle:f(t),fragPerBattle:v(t),spottedPerBattle:h(t)})},diffFull:function(t,e){var n={frags:t.frags,clan:x(t.clan,e.clan),all:x(t.all,e.all),rating:void 0};return t.rating&&e.rating&&(n.rating=x(t.rating,e.rating)),n},diff:x,sum:k,sumFull:function(t,e){var n={frags:t.frags,clan:k(t.clan,e.clan),all:k(t.all,e.all),rating:void 0};return t.rating&&e.rating&&(n.rating=k(t.rating,e.rating)),n},achievementsDiff:function(t,e,n){var r={achievements:{},max_series:{}};for(var o in t.achievements){var c,l=t.achievements[o]||0,d=(null===(c=e.achievements)||void 0===c?void 0:c[o])||0,f=Array.isArray(null==n?void 0:n[o].options);r.achievements[o]=f?Math.abs(l-d)?l:0:f?l:l-d}for(var v in t.max_series){var h,m=t.max_series[v]||0,_=(null===(h=e.max_series)||void 0===h?void 0:h[v])||0;r.max_series[v]=m-_}return r},teamPoints:function(t,e){var n,r,o,c;return[1e3*t.all.wins,t.all.damage_dealt,750*(null!==(n=null===(r=e.achievements)||void 0===r?void 0:r.medalBrothersInArms)&&void 0!==n?n:0),1750*(null!==(o=null===(c=e.achievements)||void 0===c?void 0:c.medalCrucialContribution)&&void 0!==o?o:0)].reduce((function(t,e){return t+e}),0)}}},631:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(47),n(184),n(10),n(183);var r=n(42),o=n(21),c=(n(6),n(129),n(130),n(84),n(1),n(4),n(185),function(t){try{return JSON.parse(t)}catch(e){return t}}),l=(n(131),{executeExpression:function(t,e,n){switch(n){case"<":return t<e;case">":return t>e;case"<=":case">=":return t<=e;case"=":return t===e;case"!=":return t!==e;default:return!0}},makeAccountFilters:function(){var t,e,n,r,o,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{tankIsPremium:null!==(t=c.tankIsPremium)&&void 0!==t?t:null,tankInGarage:null!==(e=c.tankInGarage)&&void 0!==e?e:null,tankNation:null!==(n=c.tankNation)&&void 0!==n?n:[],tankTire:null!==(r=c.tankTire)&&void 0!==r?r:[],tankType:null!==(o=c.tankType)&&void 0!==o?o:[],achievementsSection:null,achievementsShow:"important"}},makeClanFilters:function(){var t,e,n,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{search:null!==(t=r.search)&&void 0!==t?t:"",joinedAtDays:null!==(e=r.joinedAtDays)&&void 0!==e?e:null,lastBattleDays:null!==(n=r.lastBattleDays)&&void 0!==n?n:null}},humanizeParam:function(t){var e=t.operator,n=t.value;switch(e){case">":return"больше чем ".concat(n);case"<":return"меньше чем ".concat(n);case">=":return"больше или равно ".concat(n);case"<=":return"меньше или равно ".concat(n);case"!=":return"не равно ".concat(n);case"=":return"равно ".concat(n);default:return n}},parseParameter:function(t){var e,n=t.match(/([<>!=]{1,2})([^<>!=]{1,2})/i);if(!n||!n[1])throw new Error("Filter Parameter Parse: operator not found");return{operator:n[1],value:null!==(e=null==n?void 0:n[2])&&void 0!==e?e:""}},stringifyParameter:function(param){return"".concat(param.operator).concat(param.value)},makeAccountSessionWidget:function(){var t,e,n,r,o,c,l,d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{accountId:null!==(t=d.accountId)&&void 0!==t?t:null,attributes:null!==(e=d.attributes)&&void 0!==e?e:[],config:null!==(n=d.config)&&void 0!==n?n:null,style:null!==(r=d.style)&&void 0!==r?r:null,textColor:null!==(o=d.textColor)&&void 0!==o?o:null,bgColor:null!==(c=d.bgColor)&&void 0!==c?c:null,bgColorOpacity:null!==(l=d.bgColorOpacity)&&void 0!==l?l:null}},encodeQuery:function(t){if("object"!==Object(o.a)(t)||!Object.keys(t).length)return null;var e={},n=function(t){return"string"!=typeof t?t:t.includes(",")?t.split(",").map(c):c(t)};return Object.entries(t).forEach((function(t){var o=Object(r.a)(t,2),c=o[0],l=o[1];e[c]=Array.isArray(l)?l.map(n):n(l)})),e},decodeQuery:function(t){if("object"!==Object(o.a)(t))throw new TypeError("Value is not a object");var e={};return Object.entries(null!=t?t:{}).forEach((function(t){var n=Object(r.a)(t,2),o=n[0],c=n[1];null!=c&&(e[o]=Array.isArray(c)?c.join(","):String(c))})),e}})},779:function(t,e,n){"use strict";n.r(e);n(83);var r=n(12),o=n(35),c=n(36),l=n(40),d=n(41),f=n(25),v=n(21),h=(n(48),n(3),n(1),n(34),n(84),n(47),n(88),n(59),n(58),n(106),n(17)),m=n(631),_=n(223),w=n(115),y=n(582),x=n(577);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(l.a)(O,t);var e,n,d,f,v,h,m,x,j=k(O);function O(){var t;return Object(o.a)(this,O),(t=j.apply(this,arguments)).name="WidgetAccountSession",t.loading=0,t.accountSession=null,t.account=null,t.achievementsInfo=null,t.accountAchievements=null,t.accountAchievementsSession=null,t.tanksStat=null,t.tanksStatSession=null,t.savedAccountUpdateAt=0,t.updateTimerDuration=3e4,t.items=[],t}return Object(c.a)(O,[{key:"created",value:function(){this.init()}},{key:"getAchievementsInfo",value:(x=Object(r.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,w.a.encyclopedia.getAchievements();case 4:e=t.sent,data=e.data,this.achievementsInfo=null!=data?data:null,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:this.loading--;case 13:case"end":return t.stop()}}),t,this,[[1,9]])}))),function(){return x.apply(this,arguments)})},{key:"getAccountInfo",value:(m=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,w.a.account.getInfo({account_id:e,extra:"statistics.rating"});case 4:r=t.sent,data=r.data,this.account=null!==(n=null==data?void 0:data[e])&&void 0!==n?n:null,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:this.loading--;case 13:case"end":return t.stop()}}),t,this,[[1,9]])}))),function(t){return m.apply(this,arguments)})},{key:"getAccountSession",value:(h=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,w.b.session.account.get(e);case 4:n=t.sent,data=n.data,this.accountSession=data.raw,this.savedAccountUpdateAt=Date.parse(data.updateAt),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0);case 13:this.loading--;case 14:case"end":return t.stop()}}),t,this,[[1,10]])}))),function(t){return h.apply(this,arguments)})},{key:"getAccountAchievements",value:(v=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,w.a.account.getAchievements({account_id:e});case 4:r=t.sent,data=r.data,this.accountAchievements=null!==(n=null==data?void 0:data[e])&&void 0!==n?n:null,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:this.loading--;case 13:case"end":return t.stop()}}),t,this,[[1,9]])}))),function(t){return v.apply(this,arguments)})},{key:"getAccountAchievementsSession",value:(f=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,w.b.session.accountAchievements.get(e);case 4:n=t.sent,data=n.data,this.accountAchievementsSession=data.raw,this.savedAccountUpdateAt=Date.parse(data.updateAt),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0);case 13:this.loading--;case 14:case"end":return t.stop()}}),t,this,[[1,10]])}))),function(t){return f.apply(this,arguments)})},{key:"getTanksStat",value:(d=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,w.a.tanks.getStats({account_id:e});case 4:r=t.sent,data=r.data,this.tanksStat=null!==(n=null==data?void 0:data[e])&&void 0!==n?n:null,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:this.loading--;case 13:case"end":return t.stop()}}),t,this,[[1,9]])}))),function(t){return d.apply(this,arguments)})},{key:"getTanksStatSession",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,w.b.session.accountTanks.get(e);case 4:n=t.sent,data=n.data,this.tanksStatSession=data.raw,this.savedAccountUpdateAt=Date.parse(data.updateAt),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0);case 13:this.loading--;case 14:case"end":return t.stop()}}),t,this,[[1,10]])}))),function(t){return n.apply(this,arguments)})},{key:"getFormattedValue",value:function(t,e){switch(t){case"battles":return _.a.number.toInteger(e.battles);case"winRate":return _.a.number.toFloatPercent(e.winRate);case"damagePerBattle":return _.a.number.toInteger(e.damagePerBattle);case"fragPerBattle":return _.a.number.toFloatNumber(e.fragPerBattle);case"surviveRate":return _.a.number.toFloatPercent(e.spottedPerBattle);case"hitRate":return _.a.number.toFloatPercent(e.hitRate);case"spottedPerBattle":return _.a.number.toFloatNumber(e.spottedPerBattle);case"xpPerBattle":return _.a.number.toInteger(e.xpPerBattle);default:return"---"}}},{key:"buildItems",value:function(){var t=this;if(this.achievementsInfo&&this.account&&this.accountSession&&this.accountAchievements&&this.accountAchievementsSession){var e=y.a.diffFull(this.account.statistics,this.accountSession.statistics),n=y.a.achievementsDiff(this.accountAchievements,this.accountAchievementsSession,this.achievementsInfo);this.items=this.params.attributes.map((function(r){var o;if("teamGamePoints"===r)return{key:r,label:_.a.stat.titleForKey(r),value:String(y.a.teamPoints(e,n))};var c,l,d,f=null===(o=t.achievementsInfo)||void 0===o?void 0:o[r];return f?{key:r,label:null!==(c=String(f.name).replace(/\([^)]+\)/gi,""))&&void 0!==c?c:r,value:String(null!==(l=null===(d=n.achievements)||void 0===d?void 0:d[r])&&void 0!==l?l:0)}:{key:r,label:_.a.stat.titleForKey(r),value:t.getFormattedValue(r,y.a.accountAll(e.all))}}))}}},{key:"runUpdating",value:function(t){var e,n=this;this.buildItems();var o=function(){var c=Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.loading++,clearTimeout(e),r.next=4,Promise.all([n.getAccountInfo(t),n.getAccountAchievements(t)]);case 4:n.buildItems(),e=setTimeout(o,n.updateTimerDuration),n.loading--;case 7:case"end":return r.stop()}}),r)})));return function(){return c.apply(this,arguments)}}();o()}},{key:"init",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.items=this.params.attributes.map((function(t){return{key:t,label:_.a.stat.titleForKey(t),value:"--"}})),n=null===(e=this.params)||void 0===e?void 0:e.accountId){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,Promise.all([this.getAchievementsInfo(),this.getAccountSession(n),this.getAccountAchievementsSession(n)]);case 6:if(this.accountSession){t.next=8;break}return t.abrupt("return");case 8:this.runUpdating(n);case 9:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),O}(h.Vue);j([Object(h.Prop)({default:function(){return m.a.makeAccountSessionWidget()}})],O.prototype,"params",void 0);var A=O=j([Object(h.Component)({components:{ContentLoader:x.default}})],O),P=(n(882),n(37)),component=Object(P.a)(A,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"widget-account-session",class:["widget-account-session--"+t.params.style],style:{"--widget-account-session-bg-color":t.params.bgColor,"--widget-account-session-bg-opacity":t.params.bgColorOpacity,"--widget-account-session-text-color":t.params.textColor}},[e("div",{staticClass:"widget-account-session__list"},t._l(t.items,(function(n){return e("div",{key:n.key,staticClass:"widget-account-session__item"},[e("div",{staticClass:"widget-account-session__label"},[t._v("\n        "+t._s(n.label)+"\n      ")]),t._v(" "),e("div",{staticClass:"widget-account-session__value"},[t._v("\n        "+t._s(n.value)+"\n      ")]),t._v(" "),e("ContentLoader",{attrs:{loading:t.loading>0}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentLoader:n(577).default})},853:function(t,e,n){var content=n(883);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("561d38d6",content,!0,{sourceMap:!1})},882:function(t,e,n){"use strict";n(853)},883:function(t,e,n){var r=n(74)((function(i){return i[1]}));r.push([t.i,'.widget-account-session{overflow:hidden}.widget-account-session--tile .widget-account-session__list{display:flex;flex-wrap:wrap;padding:2px;width:100%}.widget-account-session__item{position:relative}.widget-account-session--tile .widget-account-session__item{align-items:center;display:flex;flex:1;flex-direction:column;justify-content:center;margin:4px;min-width:180px;padding:5px 0}.widget-account-session--tile .widget-account-session__item:before{background-color:var(--widget-account-session-bg-color);bottom:0;content:"";display:flex;left:0;opacity:var(--widget-account-session-bg-opacity);pointer-events:none;position:absolute;right:0;top:0}.widget-account-session__label,.widget-account-session__value{color:var(--widget-account-session-text-color);position:relative;text-align:center}.widget-account-session--tile .widget-account-session__label{opacity:.7}.widget-account-session--tile .widget-account-session__value{font-size:24px;font-weight:500}',""]),r.locals={},t.exports=r}}]);