(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{596:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));n(7),n(5),n(6),n(1),n(3),n(4),n(8);var r=n(40),o=(n(608),function(t){return+(t.hits/(t.shots/100)||0).toFixed(2)}),c=function(t){return+(t.wins/(t.battles/100)||0).toFixed(2)},l=function(t){var e=t.battles||0;return+((t.survived_battles||0)/(e/100)||0).toFixed(2)},d=function(t){var e=t.battles||0;return+((t.damage_dealt||0)/e||0).toFixed(0)},f=function(t){var e=t.battles||0;return+((t.xp||0)/e||0).toFixed(0)},v=function(t){var e=t.battles||0;return+((t.frags||0)/e||0).toFixed(2)},h=function(t){var e=t.battles||0;return+((t.spotted||0)/e||0).toFixed(2)};function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var w=n(227),x=function(t,e){if(!Object(w.a)(t)||!Object(w.a)(e))throw new Error("addValues: some value is not a object");var n={};for(var r in t){var o,c,l=null!==(o=t[r])&&void 0!==o?o:0,d=null!==(c=e[r])&&void 0!==c?c:0;n[r]=l-d}return n},y=function(t,e){if(!Object(w.a)(t)||!Object(w.a)(e))throw new Error("statsSum: some value is not a object");var n={};for(var r in t){var o=t[r]||0,c=e[r]||0;n[r]=o+c}return n},k=n(232),j={accountAll:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!Object(w.a)(t))throw new Error("accountStats: value is nota a object");return{battles:Math.floor(t.battles/e),capture_points:Math.floor(t.capture_points/e),damage_dealt:Math.floor(t.damage_dealt/e),damage_received:Math.floor(t.damage_received/e),dropped_capture_points:Math.floor(t.dropped_capture_points/e),frags8p:Math.floor(t.frags8p/e),frags:Math.floor(t.frags/e),hits:Math.floor(t.hits/e),losses:Math.floor(t.losses/e),max_frags:Math.floor(t.max_frags/e),max_frags_tank_id:Math.floor(t.max_frags_tank_id/e),max_xp:Math.floor(t.max_xp/e),max_xp_tank_id:Math.floor(t.max_xp_tank_id/e),shots:Math.floor(t.shots/e),spotted:Math.floor(t.spotted/e),survived_battles:Math.floor(t.survived_battles/e),win_and_survived:Math.floor(t.win_and_survived/e),wins:Math.floor(t.wins/e),xp:Math.floor(t.xp/e),winRate:c(t),hitRate:o(t),surviveRate:l(t),xpPerBattle:f(t),damagePerBattle:d(t),fragPerBattle:v(t),spottedPerBattle:h(t)}},accountRating:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!Object(w.a)(t))throw new Error("accountStats: value is nota a object");return{battles:Math.floor(t.battles/e),capture_points:Math.floor(t.capture_points/e),damage_dealt:Math.floor(t.damage_dealt/e),damage_received:Math.floor(t.damage_received/e),dropped_capture_points:Math.floor(t.dropped_capture_points/e),frags8p:Math.floor(t.frags8p/e),frags:Math.floor(t.frags/e),hits:Math.floor(t.hits/e),losses:Math.floor(t.losses/e),shots:Math.floor(t.shots/e),spotted:Math.floor(t.spotted/e),survived_battles:Math.floor(t.survived_battles/e),win_and_survived:Math.floor(t.win_and_survived/e),wins:Math.floor(t.wins/e),xp:Math.floor(t.xp/e),calibration_battles_left:Math.floor(t.calibration_battles_left/e),current_season:Math.floor(t.current_season/e),mm_rating:+(t.mm_rating/e).toFixed(2),recalibration_start_time:Math.floor(t.recalibration_start_time/e),is_recalibration:t.is_recalibration,rating:t.mm_rating?Math.floor(10*t.mm_rating+3e3):0,winRate:c(t),hitRate:o(t),surviveRate:l(t),damagePerBattle:d(t),fragPerBattle:v(t),spottedPerBattle:h(t)}},tank:function(t){return _(_({},t),{},{winRate:c(t),hitRate:o(t),surviveRate:l(t),damagePerBattle:d(t),xpPerBattle:f(t),fragPerBattle:v(t),spottedPerBattle:h(t)})},diffFull:function(t,e){var n={frags:t.frags,clan:x(t.clan,e.clan),all:x(t.all,e.all),rating:void 0};return t.rating&&e.rating&&(n.rating=x(t.rating,e.rating)),n},diff:x,sum:y,sumFull:function(t,e){var n={frags:t.frags,clan:y(t.clan,e.clan),all:y(t.all,e.all),rating:void 0};return t.rating&&e.rating&&(n.rating=y(t.rating,e.rating)),n},achievementsDiff:function(t,e,n){var r={achievements:{},max_series:{}};for(var o in t.achievements){var c,l=t.achievements[o]||0,d=(null===(c=e.achievements)||void 0===c?void 0:c[o])||0,f=Array.isArray(null==n?void 0:n[o].options);r.achievements[o]=f?Math.abs(l-d)?l:0:f?l:l-d}for(var v in t.max_series){var h,m=t.max_series[v]||0,_=(null===(h=e.max_series)||void 0===h?void 0:h[v])||0;r.max_series[v]=m-_}return r},teamPoints:function(t,e){var n,r,o,c;return[1e3*t.all.wins,t.all.damage_dealt,750*(null!==(n=null===(r=e.achievements)||void 0===r?void 0:r.medalBrothersInArms)&&void 0!==n?n:0),1750*(null!==(o=null===(c=e.achievements)||void 0===c?void 0:c.medalCrucialContribution)&&void 0!==o?o:0)].reduce((function(t,e){return t+e}),0)},winsInPlatoon:function(t){var e;return((null===(e=t.achievements.max_series)||void 0===e?void 0:e.jointVictory)||0)/(t.wins/100)},battlesPerDay:function(t){var e=t.battles,n=t.createAt,r=(Date.now()-n)/k.a;return Math.floor(e/r)},totalMasters:function(t){return t.reduce((function(t,e){return 4===e.mark_of_mastery?t+1:t}),0)}}},608:function(t,e,n){"use strict";var r=n(2),o=n(17),c=n(74),l=n(346),d=n(345),f=n(16),v=RangeError,h=String,m=Math.floor,_=o(d),w=o("".slice),x=o(1..toFixed),y=function(t,e,n){return 0===e?n:e%2==1?y(t,e-1,n*t):y(t*t,e/2,n)},k=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=m(r/1e7)},j=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=m(n/t),n=n%t*1e7},O=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:f((function(){return"0.000"!==x(8e-5,3)||"1"!==x(.9,0)||"1.25"!==x(1.255,2)||"1000000000000000128"!==x(0xde0b6b3a7640080,0)}))||!f((function(){x({})}))},{toFixed:function(t){var e,n,r,o,d=l(this),f=c(t),data=[0,0,0,0,0,0],m="",x="0";if(f<0||f>20)throw new v("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return h(d);if(d<0&&(m="-",d=-d),d>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(d*y(2,69,1))-69)<0?d*y(2,-e,1):d/y(2,e,1),n*=4503599627370496,(e=52-e)>0){for(k(data,0,n),r=f;r>=7;)k(data,1e7,0),r-=7;for(k(data,y(10,r,1),0),r=e-1;r>=23;)j(data,1<<23),r-=23;j(data,1<<r),k(data,1,1),j(data,2),x=O(data)}else k(data,0,n),k(data,1<<-e,0),x=O(data)+_("0",f);return x=f>0?m+((o=x.length)<=f?"0."+_("0",f-o)+x:w(x,0,o-f)+"."+w(x,o-f)):m+x}})},637:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(43),n(187),n(9);var r=n(648),o=n(42),c=(n(1),n(4),n(153),n(227)),l={executeExpression:function(t,e,n){switch(n){case"<":return t<e;case">":return t>e;case"<=":case">=":return t<=e;case"=":return t===e;case"!=":return t!==e;default:return!0}},makeAccountFilters:r.a,makeClanFilters:r.d,humanizeParam:function(t){var e=t.operator,n=t.value;switch(e){case">":return"больше чем ".concat(n);case"<":return"меньше чем ".concat(n);case">=":return"больше или равно ".concat(n);case"<=":return"меньше или равно ".concat(n);case"!=":return"не равно ".concat(n);case"=":return"равно ".concat(n);default:return n}},parseParameter:function(t){var e,n=t.match(/([<>!=]{1,2})([^<>!=]{1,2})/i);if(!n||!n[1])throw new Error("Filter Parameter Parse: operator not found");return{operator:n[1],value:null!==(e=null==n?void 0:n[2])&&void 0!==e?e:""}},stringifyParameter:function(param){return"".concat(param.operator).concat(param.value)},makeAccountSessionWidgetFilters:r.b,makeAccountSessionsFilters:r.c,toRouteQuery:function(t){if(!Object(c.a)(t))throw new TypeError("Value is not a object");var e={};return Object.entries(t).forEach((function(t){var n=Object(o.a)(t,2),r=n[0],c=n[1];null!=c&&String(c)&&(e[r]=String(c))})),e}}},648:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"d",(function(){return _})),n.d(e,"b",(function(){return w})),n.d(e,"c",(function(){return x}));n(1),n(62),n(43),n(186),n(129),n(189),n(106),n(88);var r=function(t){switch(String(t)){case"true":return!0;case"false":return!1;default:return null}},o=function(t){return"string"!=typeof t||["[object Object]","null"].includes(t)?null:String(t)},c=function(t){return Number.isNaN(Number(t))?null:Number(t)},l=function(t,e){if(Array.isArray(t))return t;if(!t||"string"!=typeof t)return null;var n=t.split(",");switch(e){case"boolean":return n.map(r);case"number":return n.map(c);case"string":return n.map(o);default:return null}},d=r,f=o,v=c,h=n(227),m=function(t){var e,n,r,o,c,m,_,w,x,y,k,j,O;return t=Object(h.a)(t)?t:{},{tankIsPremium:d(null===(e=t)||void 0===e?void 0:e.tankIsPremium),tankInGarage:v(null===(n=t)||void 0===n?void 0:n.tankInGarage),tankNation:null!==(r=l(null===(o=t)||void 0===o?void 0:o.tankNation,"string"))&&void 0!==r?r:[],tankTire:null!==(c=l(null===(m=t)||void 0===m?void 0:m.tankTire,"number"))&&void 0!==c?c:[],tankType:null!==(_=l(null===(w=t)||void 0===w?void 0:w.tankType,"string"))&&void 0!==_?_:[],achievementsSection:f(null===(x=t)||void 0===x?void 0:x.achievementsSection),achievementsShow:null!==(y=f(null===(k=t)||void 0===k?void 0:k.achievementsShow))&&void 0!==y?y:"important",battleMode:null!==(j=f(null===(O=t)||void 0===O?void 0:O.battleMode))&&void 0!==j?j:"random"}},_=function(t){var e,n,r,o;return t=Object(h.a)(t)?t:{},{search:null!==(e=f(null===(n=t)||void 0===n?void 0:n.search))&&void 0!==e?e:"",joinedAtDays:f(null===(r=t)||void 0===r?void 0:r.joinedAtDays),lastBattleDays:f(null===(o=t)||void 0===o?void 0:o.lastBattleDays)}},w=function(t){var e,n,r,o,c,d,m,_,w;return t=Object(h.a)(t)?t:{},{battleMode:f(null===(e=t)||void 0===e?void 0:e.battleMode),accountId:v(null===(n=t)||void 0===n?void 0:n.accountId),attributes:null!==(r=l(null===(o=t)||void 0===o?void 0:o.attributes,"string"))&&void 0!==r?r:[],config:f(null===(c=t)||void 0===c?void 0:c.config),style:f(null===(d=t)||void 0===d?void 0:d.style),textColor:f(null===(m=t)||void 0===m?void 0:m.textColor),bgColor:f(null===(_=t)||void 0===_?void 0:_.bgColor),bgColorOpacity:v(null===(w=t)||void 0===w?void 0:w.bgColorOpacity)}},x=function(t){var e,n;return t=Object(h.a)(t)?t:{},{ids:null!==(e=l(null===(n=t)||void 0===n?void 0:n.ids,"number"))&&void 0!==e?e:[]}}},811:function(t,e,n){"use strict";n.r(e);n(73);var r=n(12),o=n(32),c=n(33),l=n(36),d=n(37),f=n(23),v=n(20),h=(n(45),n(3),n(1),n(34),n(88),n(43),n(89),n(51),n(50),n(94),n(15)),m=n(637),_=n(226),w=n(116),x=n(596),y=n(225);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(l.a)(O,t);var e,n,d,f,v,h,m,y,j=k(O);function O(){var t;return Object(o.a)(this,O),(t=j.apply(this,arguments)).name="WidgetAccountSession",t.loading=0,t.accountSession=null,t.account=null,t.achievementsInfo=null,t.accountAchievements=null,t.accountAchievementsSession=null,t.tanksStat=null,t.tanksStatSession=null,t.updateTimerDuration=3e4,t.items=[],t}return Object(c.a)(O,[{key:"created",value:function(){this.init()}},{key:"getAchievementsInfo",value:(y=Object(r.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,w.a.encyclopedia.getAchievements();case 4:e=t.sent,data=e.data,this.achievementsInfo=null!=data?data:null,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:this.loading--;case 13:case"end":return t.stop()}}),t,this,[[1,9]])}))),function(){return y.apply(this,arguments)})},{key:"getAccountInfo",value:(m=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,w.a.account.getInfo({account_id:e,extra:"statistics.rating"});case 4:r=t.sent,data=r.data,this.account=null!==(n=null==data?void 0:data[e])&&void 0!==n?n:null,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:this.loading--;case 13:case"end":return t.stop()}}),t,this,[[1,9]])}))),function(t){return m.apply(this,arguments)})},{key:"getAccountSession",value:(h=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,w.b.session.account.get(e);case 4:n=t.sent,data=n.data,this.accountSession=data.raw,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:this.loading--;case 13:case"end":return t.stop()}}),t,this,[[1,9]])}))),function(t){return h.apply(this,arguments)})},{key:"getAccountAchievements",value:(v=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,w.a.account.getAchievements({account_id:e});case 4:r=t.sent,data=r.data,this.accountAchievements=null!==(n=null==data?void 0:data[e])&&void 0!==n?n:null,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:this.loading--;case 13:case"end":return t.stop()}}),t,this,[[1,9]])}))),function(t){return v.apply(this,arguments)})},{key:"getAccountAchievementsSession",value:(f=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,w.b.session.accountAchievements.get(e);case 4:n=t.sent,data=n.data,this.accountAchievementsSession=data.raw,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:this.loading--;case 13:case"end":return t.stop()}}),t,this,[[1,9]])}))),function(t){return f.apply(this,arguments)})},{key:"getTanksStat",value:(d=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,r,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,w.a.tanks.getStats({account_id:e});case 4:r=t.sent,data=r.data,this.tanksStat=null!==(n=null==data?void 0:data[e])&&void 0!==n?n:null,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:this.loading--;case 13:case"end":return t.stop()}}),t,this,[[1,9]])}))),function(t){return d.apply(this,arguments)})},{key:"getTanksStatSession",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,w.b.session.tanks.get(e);case 4:n=t.sent,data=n.data,this.tanksStatSession=data.raw,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.error(t.t0);case 12:this.loading--;case 13:case"end":return t.stop()}}),t,this,[[1,9]])}))),function(t){return n.apply(this,arguments)})},{key:"getFormattedValue",value:function(t,e){switch(t){case"battles":return _.a.number.toInteger(e.battles);case"winRate":return _.a.number.toFloatPercent(e.winRate);case"damagePerBattle":return _.a.number.toInteger(e.damagePerBattle);case"fragPerBattle":return _.a.number.toFloatNumber(e.fragPerBattle);case"surviveRate":return _.a.number.toFloatPercent(e.spottedPerBattle);case"hitRate":return _.a.number.toFloatPercent(e.hitRate);case"spottedPerBattle":return _.a.number.toFloatNumber(e.spottedPerBattle);case"xpPerBattle":return"xpPerBattle"in e?_.a.number.toInteger(e.xpPerBattle):"---";default:return"---"}}},{key:"buildItems",value:function(){var t=this;if(this.account&&this.accountSession){var e,n=x.a.diffFull(this.account.statistics,this.accountSession.statistics);this.achievementsInfo&&this.accountAchievements&&this.accountAchievementsSession&&(e=x.a.achievementsDiff(this.accountAchievements,this.accountAchievementsSession,this.achievementsInfo)),this.items=this.params.attributes.map((function(r){var o;if("teamGamePoints"===r&&e)return{key:r,label:_.a.stat.accountProp(r),value:String(x.a.teamPoints(n,e))};var c,l,d,f=null===(o=t.achievementsInfo)||void 0===o?void 0:o[r];if(f&&e)return{key:r,label:null!==(c=String(f.name).replace(/\([^)]+\)/gi,""))&&void 0!==c?c:r,value:String(null!==(l=null===(d=e.achievements)||void 0===d?void 0:d[r])&&void 0!==l?l:0)};var v="rating"===t.params.battleMode&&n.rating?x.a.accountRating(n.rating):x.a.accountAll(n.all);return{key:r,label:_.a.stat.accountProp(r),value:t.getFormattedValue(r,v)}}))}}},{key:"runUpdating",value:function(t){var e,n=this;this.buildItems();var o=function(){var c=Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.loading++,clearTimeout(e),r.next=4,Promise.all([n.getAccountInfo(t),n.getAccountAchievements(t)]);case 4:n.buildItems(),e=setTimeout(o,n.updateTimerDuration),n.loading--;case 7:case"end":return r.stop()}}),r)})));return function(){return c.apply(this,arguments)}}();o()}},{key:"init",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.items=this.params.attributes.map((function(t){return{key:t,label:_.a.stat.accountProp(t),value:"---"}})),n=null===(e=this.params)||void 0===e?void 0:e.accountId){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,Promise.all([this.getAchievementsInfo(),this.getAccountSession(n),this.getAccountAchievementsSession(n)]);case 6:if(this.accountSession){t.next=8;break}return t.abrupt("return");case 8:this.runUpdating(n);case 9:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),O}(h.Vue);j([Object(h.Prop)({default:function(){return m.a.makeAccountSessionWidgetFilters()}})],O.prototype,"params",void 0);var P=O=j([Object(h.Component)({components:{ContentLoader:y.default}})],O),M=(n(984),n(35)),component=Object(M.a)(P,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"widget-account-session",class:["widget-account-session--"+t.params.style],style:{"--widget-account-session-bg-color":t.params.bgColor,"--widget-account-session-bg-opacity":t.params.bgColorOpacity,"--widget-account-session-text-color":t.params.textColor}},[e("div",{staticClass:"widget-account-session__list"},t._l(t.items,(function(n){return e("div",{key:n.key,staticClass:"widget-account-session__item"},[e("div",{staticClass:"widget-account-session__label"},[t._v("\n        "+t._s(n.label)+"\n      ")]),t._v(" "),e("div",{staticClass:"widget-account-session__value"},[t._v("\n        "+t._s(n.value)+"\n      ")]),t._v(" "),e("ContentLoader",{attrs:{loading:t.loading>0}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContentLoader:n(225).default})},884:function(t,e,n){var content=n(985);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("ef67fec2",content,!0,{sourceMap:!1})},984:function(t,e,n){"use strict";n(884)},985:function(t,e,n){var r=n(67)((function(i){return i[1]}));r.push([t.i,'.widget-account-session{overflow:hidden}.widget-account-session--tile .widget-account-session__list{display:flex;flex-wrap:wrap;padding:2px;width:100%}.widget-account-session__item{position:relative}.widget-account-session--tile .widget-account-session__item{align-items:center;display:flex;flex:1;flex-direction:column;justify-content:center;margin:4px;min-width:180px;padding:5px 0}.widget-account-session--tile .widget-account-session__item:before{background-color:var(--widget-account-session-bg-color);bottom:0;content:"";display:flex;left:0;opacity:var(--widget-account-session-bg-opacity);pointer-events:none;position:absolute;right:0;top:0}.widget-account-session__label,.widget-account-session__value{color:var(--widget-account-session-text-color);position:relative;text-align:center}.widget-account-session--tile .widget-account-session__label{opacity:.7}.widget-account-session--tile .widget-account-session__value{font-size:24px;font-weight:500}',""]),r.locals={},t.exports=r}}]);