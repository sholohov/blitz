(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{567:function(t,e,r){"use strict";r.d(e,"a",(function(){return P}));r(7),r(6),r(8),r(1),r(3),r(4),r(9);var n=r(41),o=(r(223),function(t){return+(t.hits/(t.shots/100)||0).toFixed(2)}),c=function(t){return+(t.wins/(t.battles/100)||0).toFixed(2)},l=function(t){var e=t.battles||0;return+((t.survived_battles||0)/(e/100)||0).toFixed(2)},f=function(t){var e=t.battles||0;return+((t.damage_dealt||0)/e||0).toFixed(0)},d=function(t){var e=t.battles||0;return+((t.xp||0)/e||0).toFixed(0)},v=function(t){var e=t.battles||0;return+((t.frags||0)/e||0).toFixed(2)},_=function(t){var e=t.battles||0;return+((t.spotted||0)/e||0).toFixed(2)};function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=r(19),j=function(t){return null!==t&&"object"===Object(O.a)(t)},y=function(t,e){var r,n;if(!j(t)||!j(e))throw new Error("addValues: some value is not a object");var o={};for(var c in t){var l=null!==(r=t[c])&&void 0!==r?r:0,f=null!==(n=e[c])&&void 0!==n?n:0;o[c]=l-f}return o},w=function(t,e){if(!j(t)||!j(e))throw new Error("statsSum: some value is not a object");var r={};for(var n in t){var o=t[n]||0,c=e[n]||0;r[n]=o+c}return r},P={accountAll:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!j(t))throw new Error("accountStats: value is nota a object");return{battles:Math.floor(t.battles/e),capture_points:Math.floor(t.capture_points/e),damage_dealt:Math.floor(t.damage_dealt/e),damage_received:Math.floor(t.damage_received/e),dropped_capture_points:Math.floor(t.dropped_capture_points/e),frags8p:Math.floor(t.frags8p/e),frags:Math.floor(t.frags/e),hits:Math.floor(t.hits/e),losses:Math.floor(t.losses/e),max_frags:Math.floor(t.max_frags/e),max_frags_tank_id:Math.floor(t.max_frags_tank_id/e),max_xp:Math.floor(t.max_xp/e),max_xp_tank_id:Math.floor(t.max_xp_tank_id/e),shots:Math.floor(t.shots/e),spotted:Math.floor(t.spotted/e),survived_battles:Math.floor(t.survived_battles/e),win_and_survived:Math.floor(t.win_and_survived/e),wins:Math.floor(t.wins/e),xp:Math.floor(t.xp/e),winRate:c(t),hitRate:o(t),surviveRate:l(t),xpPerBattle:d(t),damagePerBattle:f(t),fragPerBattle:v(t),spottedPerBattle:_(t)}},accountRating:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!j(t))throw new Error("accountStats: value is nota a object");return{battles:Math.floor(t.battles/e),capture_points:Math.floor(t.capture_points/e),damage_dealt:Math.floor(t.damage_dealt/e),damage_received:Math.floor(t.damage_received/e),dropped_capture_points:Math.floor(t.dropped_capture_points/e),frags8p:Math.floor(t.frags8p/e),frags:Math.floor(t.frags/e),hits:Math.floor(t.hits/e),losses:Math.floor(t.losses/e),shots:Math.floor(t.shots/e),spotted:Math.floor(t.spotted/e),survived_battles:Math.floor(t.survived_battles/e),win_and_survived:Math.floor(t.win_and_survived/e),wins:Math.floor(t.wins/e),xp:Math.floor(t.xp/e),calibration_battles_left:Math.floor(t.calibration_battles_left/e),current_season:Math.floor(t.current_season/e),mm_rating:+(t.mm_rating/e).toFixed(2),recalibration_start_time:Math.floor(t.recalibration_start_time/e),is_recalibration:t.is_recalibration,rating:t.mm_rating?Math.floor(10*t.mm_rating+3e3):0,winRate:c(t),hitRate:o(t),surviveRate:l(t),damagePerBattle:f(t),fragPerBattle:v(t),spottedPerBattle:_(t)}},tank:function(t){return h(h({},t),{},{winRate:c(t),hitRate:o(t),surviveRate:l(t),damagePerBattle:f(t),xpPerBattle:d(t),fragPerBattle:v(t),spottedPerBattle:_(t)})},diffFull:function(t,e){var r={frags:t.frags,clan:y(t.clan,e.clan),all:y(t.all,e.all),rating:void 0};return t.rating&&e.rating&&(r.rating=y(t.rating,e.rating)),r},diff:y,sum:w,sumFull:function(t,e){var r={frags:t.frags,clan:w(t.clan,e.clan),all:w(t.all,e.all),rating:void 0};return t.rating&&e.rating&&(r.rating=w(t.rating,e.rating)),r},achievementsDiff:function(t,e,r){var n={achievements:{},max_series:{}};for(var o in t.achievements){var c=t.achievements[o]||0,l=e.achievements[o]||0,f=Array.isArray(r[o].options);n.achievements[o]=f?Math.abs(c-l)?c:0:f?c:c-l}for(var d in t.max_series){var v=t.max_series[d]||0,_=e.max_series[d]||0;n.max_series[d]=v-_}return n}}},569:function(t,e,r){"use strict";var n=r(2),o=r(52).find,c=r(180),l="find",f=!0;l in[]&&Array(1)[l]((function(){f=!1})),n({target:"Array",proto:!0,forced:f},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},581:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r(41),o=(r(83),r(569),r(1),r(34),r(7),r(6),r(8),r(3),r(4),r(9),r(567));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}r(151);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=function(t,e){var r=e.statistics.all,n=e.statistics.rating;return{account_id:t.account_id,account_name:t.account_name,joined_at:t.joined_at,role:h.getMemberRole({role:t.role,joinedAt:t.joined_at}),lastBattleTime:e.last_battle_time,statistic:{all:o.a.accountAll(r),rating:n?o.a.accountRating(n):null}}};function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}r(223);var h={getMemberRole:function(t){if("private"!==t.role)return t.role;var e=Date.now(),r=t.role;return 1e3*t.joinedAt>e-6048e5&&(r="recruit"),r},getRating:function(t){var e={league:"calibration",value:""};if(0===t.battlesLeft&&0===t.mmRating)return e;if(0===t.mmRating)return e.value="".concat(10-t.battlesLeft,"/10"),e;var r=10*t.mmRating+3e3;return e.value=r.toFixed(0),e.league=r<3e3?"bronze":r<4e3?"silver":r<5e3?"gold":r<6e3?"platinum":"brilliant",e},clan:function(t,e){var r,n=Object.values(null!==(r=t.members)&&void 0!==r?r:{}).map((function(t){return e[t.account_id]?v(t,e[t.account_id]):function(t){return d(d({},t),{},{statistic:{all:{},rating:{}},lastBattleTime:0})}(t)}));return m(m({},t),{},{members:n})},clanMember:v,accountTanks:function(t,e,r){return t.map((function(t){var n,c,f,d,v=null!==(n=(null!=e?e:{})[t.tank_id])&&void 0!==n?n:{},_=r.find((function(i){return i.tank_id===t.tank_id}));return _||console.log("no tank achievements",v,t),v.name||console.log("no tank in vehicles data: id -",t.tank_id),l(l({},t),{},{is_premium:v.is_premium,is_collectible:null!==(c=v.is_collectible)&&void 0!==c&&c,name:v.name,nation:v.nation,tier:v.tier,type:v.type,images:v.images,all:o.a.tank(t.all),achievements:null!==(f=null==_?void 0:_.achievements)&&void 0!==f?f:{},max_series:null!==(d=null==_?void 0:_.max_series)&&void 0!==d?d:{}})}))}}},624:function(t,e,r){var content=r(673);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("3c09be2c",content,!0,{sourceMap:!1})},657:function(t,e,r){"use strict";r.r(e);r(82);var n=r(35),o=r(36),c=r(39),l=r(40),f=r(24),d=r(19),v=(r(3),r(1),r(34),r(16)),_=r(581);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},O=function(t){Object(c.a)(r,t);var e=m(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).name="RatingIcon",t}return Object(o.a)(r,[{key:"getRating",get:function(){var t=this.rating;return t?_.a.getRating({battlesLeft:t.calibration_battles_left,mmRating:t.mm_rating}):{}}}]),r}(v.Vue);h([Object(v.Prop)()],O.prototype,"rating",void 0);var j=O=h([Object(v.Component)({})],O),y=(r(672),r(37)),component=Object(y.a)(j,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"rating-icon"},[e("img",{staticClass:"rating-icon__img",attrs:{src:"/img/leagues/".concat(t.getRating.league,"_l.webp"),alt:t.$formatter.byKey("league",t.getRating.league)}}),t._v("\n  "+t._s(t.getRating.value||"---")+"\n")])}),[],!1,null,null,null);e.default=component.exports},672:function(t,e,r){"use strict";r(624)},673:function(t,e,r){var n=r(71)((function(i){return i[1]}));n.push([t.i,".rating-icon{align-items:center;display:flex}.rating-icon__img{display:flex;height:20px;margin:0 4px 0 0;-o-object-fit:cover;object-fit:cover;width:20px}",""]),n.locals={},t.exports=n}}]);