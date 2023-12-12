(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{596:function(t,e,r){"use strict";r.d(e,"a",(function(){return x}));r(7),r(5),r(6),r(1),r(3),r(4),r(8);var n=r(40),o=(r(608),function(t){return+(t.hits/(t.shots/100)||0).toFixed(2)}),c=function(t){return+(t.wins/(t.battles/100)||0).toFixed(2)},l=function(t){var e=t.battles||0;return+((t.survived_battles||0)/(e/100)||0).toFixed(2)},f=function(t){var e=t.battles||0;return+((t.damage_dealt||0)/e||0).toFixed(0)},d=function(t){var e=t.battles||0;return+((t.xp||0)/e||0).toFixed(0)},v=function(t){var e=t.battles||0;return+((t.frags||0)/e||0).toFixed(2)},m=function(t){var e=t.battles||0;return+((t.spotted||0)/e||0).toFixed(2)};function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O=r(227),j=function(t,e){if(!Object(O.a)(t)||!Object(O.a)(e))throw new Error("addValues: some value is not a object");var r={};for(var n in t){var o,c,l=null!==(o=t[n])&&void 0!==o?o:0,f=null!==(c=e[n])&&void 0!==c?c:0;r[n]=l-f}return r},y=function(t,e){if(!Object(O.a)(t)||!Object(O.a)(e))throw new Error("statsSum: some value is not a object");var r={};for(var n in t){var o=t[n]||0,c=e[n]||0;r[n]=o+c}return r},w=r(232),x={accountAll:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!Object(O.a)(t))throw new Error("accountStats: value is nota a object");return{battles:Math.floor(t.battles/e),capture_points:Math.floor(t.capture_points/e),damage_dealt:Math.floor(t.damage_dealt/e),damage_received:Math.floor(t.damage_received/e),dropped_capture_points:Math.floor(t.dropped_capture_points/e),frags8p:Math.floor(t.frags8p/e),frags:Math.floor(t.frags/e),hits:Math.floor(t.hits/e),losses:Math.floor(t.losses/e),max_frags:Math.floor(t.max_frags/e),max_frags_tank_id:Math.floor(t.max_frags_tank_id/e),max_xp:Math.floor(t.max_xp/e),max_xp_tank_id:Math.floor(t.max_xp_tank_id/e),shots:Math.floor(t.shots/e),spotted:Math.floor(t.spotted/e),survived_battles:Math.floor(t.survived_battles/e),win_and_survived:Math.floor(t.win_and_survived/e),wins:Math.floor(t.wins/e),xp:Math.floor(t.xp/e),winRate:c(t),hitRate:o(t),surviveRate:l(t),xpPerBattle:d(t),damagePerBattle:f(t),fragPerBattle:v(t),spottedPerBattle:m(t)}},accountRating:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!Object(O.a)(t))throw new Error("accountStats: value is nota a object");return{battles:Math.floor(t.battles/e),capture_points:Math.floor(t.capture_points/e),damage_dealt:Math.floor(t.damage_dealt/e),damage_received:Math.floor(t.damage_received/e),dropped_capture_points:Math.floor(t.dropped_capture_points/e),frags8p:Math.floor(t.frags8p/e),frags:Math.floor(t.frags/e),hits:Math.floor(t.hits/e),losses:Math.floor(t.losses/e),shots:Math.floor(t.shots/e),spotted:Math.floor(t.spotted/e),survived_battles:Math.floor(t.survived_battles/e),win_and_survived:Math.floor(t.win_and_survived/e),wins:Math.floor(t.wins/e),xp:Math.floor(t.xp/e),calibration_battles_left:Math.floor(t.calibration_battles_left/e),current_season:Math.floor(t.current_season/e),mm_rating:+(t.mm_rating/e).toFixed(2),recalibration_start_time:Math.floor(t.recalibration_start_time/e),is_recalibration:t.is_recalibration,rating:t.mm_rating?Math.floor(10*t.mm_rating+3e3):0,winRate:c(t),hitRate:o(t),surviveRate:l(t),damagePerBattle:f(t),fragPerBattle:v(t),spottedPerBattle:m(t)}},tank:function(t){return h(h({},t),{},{winRate:c(t),hitRate:o(t),surviveRate:l(t),damagePerBattle:f(t),xpPerBattle:d(t),fragPerBattle:v(t),spottedPerBattle:m(t)})},diffFull:function(t,e){var r={frags:t.frags,clan:j(t.clan,e.clan),all:j(t.all,e.all),rating:void 0};return t.rating&&e.rating&&(r.rating=j(t.rating,e.rating)),r},diff:j,sum:y,sumFull:function(t,e){var r={frags:t.frags,clan:y(t.clan,e.clan),all:y(t.all,e.all),rating:void 0};return t.rating&&e.rating&&(r.rating=y(t.rating,e.rating)),r},achievementsDiff:function(t,e,r){var n={achievements:{},max_series:{}};for(var o in t.achievements){var c,l=t.achievements[o]||0,f=(null===(c=e.achievements)||void 0===c?void 0:c[o])||0,d=Array.isArray(null==r?void 0:r[o].options);n.achievements[o]=d?Math.abs(l-f)?l:0:d?l:l-f}for(var v in t.max_series){var m,_=t.max_series[v]||0,h=(null===(m=e.max_series)||void 0===m?void 0:m[v])||0;n.max_series[v]=_-h}return n},teamPoints:function(t,e){var r,n,o,c;return[1e3*t.all.wins,t.all.damage_dealt,750*(null!==(r=null===(n=e.achievements)||void 0===n?void 0:n.medalBrothersInArms)&&void 0!==r?r:0),1750*(null!==(o=null===(c=e.achievements)||void 0===c?void 0:c.medalCrucialContribution)&&void 0!==o?o:0)].reduce((function(t,e){return t+e}),0)},winsInPlatoon:function(t){var e;return((null===(e=t.achievements.max_series)||void 0===e?void 0:e.jointVictory)||0)/(t.wins/100)},battlesPerDay:function(t){var e=t.battles,r=t.createAt,n=(Date.now()-r)/w.a;return Math.floor(e/Math.max(n,1))},totalMasters:function(t){return t.reduce((function(t,e){return 4===e.mark_of_mastery?t+1:t}),0)}}},629:function(t,e,r){"use strict";r.r(e);r(9);var n=r(32),o=r(33),c=r(36),l=r(37),f=r(23),d=r(20),v=(r(3),r(1),r(73),r(15)),m=r(657);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var h=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},O=function(t){Object(c.a)(r,t);var e=_(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(o.a)(r,[{key:"iconType",get:function(){return!1!==this.large?"m":"l"}},{key:"ratingInfo",get:function(){var t=this.rating;return t?m.a.getRating({battlesLeft:t.calibration_battles_left,mmRating:t.mm_rating}):{}}}]),r}(v.Vue);h([Object(v.Prop)({required:!0})],O.prototype,"rating",void 0),h([Object(v.Prop)({default:!1})],O.prototype,"large",void 0);var j=O=h([Object(v.Component)({})],O),y=(r(898),r(35)),component=Object(y.a)(j,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"rating-icon",class:[!1!==t.large?"rating-icon--large":""]},[e("img",{staticClass:"rating-icon__img",attrs:{src:"/img/leagues/".concat(t.ratingInfo.league,"_").concat(t.iconType,".webp"),alt:t.$formatter.clan.league(t.ratingInfo.league)}}),t._v(" "),e("span",{staticClass:"rating-icon__value"},[t._v("\n    "+t._s(t.ratingInfo.value||"---")+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},657:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r(40),o=(r(88),r(592),r(1),r(34),r(7),r(5),r(6),r(3),r(4),r(8),r(596));function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r(151);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v=function(t,e){var r=e.statistics.all,n=e.statistics.rating;return{account_id:t.account_id,account_name:t.account_name,joined_at:t.joined_at,create_at:e.created_at,role:h.getMemberRole({role:t.role,joinedAt:t.joined_at}),last_battle_time:e.last_battle_time,statistic:{all:o.a.accountAll(r),rating:n?o.a.accountRating(n):null}}};function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r(608),r(9),r(43),r(89),r(78);var h={getMemberRole:function(t){if("private"!==t.role)return t.role;var e=Date.now(),r=t.role;return 1e3*t.joinedAt>e-6048e5&&(r="recruit"),r},getRating:function(t){var e={league:"calibration",value:""};if(0===t.battlesLeft&&0===t.mmRating)return e;if(0===t.mmRating)return e.value="".concat(10-t.battlesLeft,"/10"),e;var r=10*t.mmRating+3e3;return e.value=r.toFixed(0),e.league=r<2e3?"bronze":r<3e3?"silver":r<4e3?"gold":r<5e3?"platinum":"brilliant",e},clan:function(t,e){var r,n=Object.values(null!==(r=t.members)&&void 0!==r?r:{}).map((function(t){var r=e[t.account_id];return r?v(t,r):function(t){return d(d({},t),{},{statistic:{all:{},rating:{}},create_at:0,last_battle_time:0})}(t)}));return _(_({},t),{},{members:n})},clanMember:v,accountTanks:function(t,e,r){return t.map((function(t){var n,c,f,d,v,m,_=null!==(n=(null!=e?e:{})[t.tank_id])&&void 0!==n?n:{},h=r.find((function(i){return i.tank_id===t.tank_id}));return _.name||console.log("no tank in vehicles data: id -",t.tank_id),l(l({},t),{},{is_premium:_.is_premium,is_collectible:null!==(c=_.is_collectible)&&void 0!==c&&c,name:_.name,nation:_.nation,tier:_.tier,type:_.type,images:_.images,all:o.a.tank(t.all),achievements:{achievements:null!==(f=null==h?void 0:h.achievements)&&void 0!==f?f:{},max_series:null!==(d=null==h?void 0:h.max_series)&&void 0!==d?d:{},tank_id:null!==(v=null==h?void 0:h.tank_id)&&void 0!==v?v:0,account_id:null!==(m=null==h?void 0:h.account_id)&&void 0!==m?m:0}})}))},achievementsMedal:function(t){var e,r=t.key,n=t.achievements.achievements[r],o=t.achievements.max_series[r],c=t.encyclopedia[r],l=function(t){return"/img/medals/".concat(r.replace(/EU|RU|NA|SEA/,"")).concat(null!=t?t:"",".webp")},f={key:r,count:n||0,series:o||0,condition:null==c?void 0:c.condition,description:null==c?void 0:c.description,name:null==c?void 0:c.name,section:null==c?void 0:c.section,image:l()};c.options&&(f.name=(null===(e=c.options[n-1])||void 0===e?void 0:e.name)||c.name,f.count=n?c.options.length-n+1:0,f.degree=n,f.image=l(n||c.options.length));return f.name=String(f.name).replace(/\(.+\)/,""),f}}},862:function(t,e,r){var content=r(899);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(68).default)("232f424a",content,!0,{sourceMap:!1})},898:function(t,e,r){"use strict";r(862)},899:function(t,e,r){var n=r(67)((function(i){return i[1]}));n.push([t.i,".rating-icon{align-items:center;display:inline-flex;justify-content:center}.rating-icon--large{flex-direction:column}.rating-icon__img{display:flex;height:20px;margin:0 4px 0 0;-o-object-fit:cover;object-fit:cover;width:20px}.rating-icon--large .rating-icon__img{height:54px;margin:0 0 -8px;width:54px}",""]),n.locals={},t.exports=n}}]);