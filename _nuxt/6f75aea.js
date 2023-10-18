(window.webpackJsonp=window.webpackJsonp||[]).push([[8,46],{577:function(t,e,n){"use strict";n.d(e,"a",(function(){return w}));n(6),n(5),n(7),n(1),n(3),n(4),n(9);var r=n(38),o=(n(338),function(t){return+(t.hits/(t.shots/100)||0).toFixed(2)}),l=function(t){return+(t.wins/(t.battles/100)||0).toFixed(2)},c=function(t){var e=t.battles||0;return+((t.survived_battles||0)/(e/100)||0).toFixed(2)},f=function(t){var e=t.battles||0;return+((t.damage_dealt||0)/e||0).toFixed(0)},d=function(t){var e=t.battles||0;return+((t.xp||0)/e||0).toFixed(0)},m=function(t){var e=t.battles||0;return+((t.frags||0)/e||0).toFixed(2)},v=function(t){var e=t.battles||0;return+((t.spotted||0)/e||0).toFixed(2)};function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var y=n(21),O=function(t){return null!==t&&"object"===Object(y.a)(t)},j=function(t,e){if(!O(t)||!O(e))throw new Error("addValues: some value is not a object");var n={};for(var r in t){var o,l,c=null!==(o=t[r])&&void 0!==o?o:0,f=null!==(l=e[r])&&void 0!==l?l:0;n[r]=c-f}return n},x=function(t,e){if(!O(t)||!O(e))throw new Error("statsSum: some value is not a object");var n={};for(var r in t){var o=t[r]||0,l=e[r]||0;n[r]=o+l}return n},w={accountAll:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!O(t))throw new Error("accountStats: value is nota a object");return{battles:Math.floor(t.battles/e),capture_points:Math.floor(t.capture_points/e),damage_dealt:Math.floor(t.damage_dealt/e),damage_received:Math.floor(t.damage_received/e),dropped_capture_points:Math.floor(t.dropped_capture_points/e),frags8p:Math.floor(t.frags8p/e),frags:Math.floor(t.frags/e),hits:Math.floor(t.hits/e),losses:Math.floor(t.losses/e),max_frags:Math.floor(t.max_frags/e),max_frags_tank_id:Math.floor(t.max_frags_tank_id/e),max_xp:Math.floor(t.max_xp/e),max_xp_tank_id:Math.floor(t.max_xp_tank_id/e),shots:Math.floor(t.shots/e),spotted:Math.floor(t.spotted/e),survived_battles:Math.floor(t.survived_battles/e),win_and_survived:Math.floor(t.win_and_survived/e),wins:Math.floor(t.wins/e),xp:Math.floor(t.xp/e),winRate:l(t),hitRate:o(t),surviveRate:c(t),xpPerBattle:d(t),damagePerBattle:f(t),fragPerBattle:m(t),spottedPerBattle:v(t)}},accountRating:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!O(t))throw new Error("accountStats: value is nota a object");return{battles:Math.floor(t.battles/e),capture_points:Math.floor(t.capture_points/e),damage_dealt:Math.floor(t.damage_dealt/e),damage_received:Math.floor(t.damage_received/e),dropped_capture_points:Math.floor(t.dropped_capture_points/e),frags8p:Math.floor(t.frags8p/e),frags:Math.floor(t.frags/e),hits:Math.floor(t.hits/e),losses:Math.floor(t.losses/e),shots:Math.floor(t.shots/e),spotted:Math.floor(t.spotted/e),survived_battles:Math.floor(t.survived_battles/e),win_and_survived:Math.floor(t.win_and_survived/e),wins:Math.floor(t.wins/e),xp:Math.floor(t.xp/e),calibration_battles_left:Math.floor(t.calibration_battles_left/e),current_season:Math.floor(t.current_season/e),mm_rating:+(t.mm_rating/e).toFixed(2),recalibration_start_time:Math.floor(t.recalibration_start_time/e),is_recalibration:t.is_recalibration,rating:t.mm_rating?Math.floor(10*t.mm_rating+3e3):0,winRate:l(t),hitRate:o(t),surviveRate:c(t),damagePerBattle:f(t),fragPerBattle:m(t),spottedPerBattle:v(t)}},tank:function(t){return h(h({},t),{},{winRate:l(t),hitRate:o(t),surviveRate:c(t),damagePerBattle:f(t),xpPerBattle:d(t),fragPerBattle:m(t),spottedPerBattle:v(t)})},diffFull:function(t,e){var n={frags:t.frags,clan:j(t.clan,e.clan),all:j(t.all,e.all),rating:void 0};return t.rating&&e.rating&&(n.rating=j(t.rating,e.rating)),n},diff:j,sum:x,sumFull:function(t,e){var n={frags:t.frags,clan:x(t.clan,e.clan),all:x(t.all,e.all),rating:void 0};return t.rating&&e.rating&&(n.rating=x(t.rating,e.rating)),n},achievementsDiff:function(t,e,n){var r={achievements:{},max_series:{}};for(var o in t.achievements){var l,c=t.achievements[o]||0,f=(null===(l=e.achievements)||void 0===l?void 0:l[o])||0,d=Array.isArray(null==n?void 0:n[o].options);r.achievements[o]=d?Math.abs(c-f)?c:0:d?c:c-f}for(var m in t.max_series){var v,_=t.max_series[m]||0,h=(null===(v=e.max_series)||void 0===v?void 0:v[m])||0;r.max_series[m]=_-h}return r},teamPoints:function(t,e){var n,r;return[1e3*t.all.wins,t.all.damage_dealt,750*(null===(n=e.achievements)||void 0===n?void 0:n.medalBrothersInArms),1750*(null===(r=e.achievements)||void 0===r?void 0:r.medalCrucialContribution)].reduce((function(t,e){return t+e}),0)}}},584:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={winRate:function(t){switch(!0){case t>=70:return"purple";case t>=60:return"blue";case t>=50:return"green";default:return"text"}}}},593:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(38),o=(n(84),n(578),n(1),n(34),n(6),n(5),n(7),n(3),n(4),n(9),n(577));function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n(151);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m=function(t,e){var n=e.statistics.all,r=e.statistics.rating;return{account_id:t.account_id,account_name:t.account_name,joined_at:t.joined_at,role:h.getMemberRole({role:t.role,joinedAt:t.joined_at}),lastBattleTime:e.last_battle_time,statistic:{all:o.a.accountAll(n),rating:r?o.a.accountRating(r):null}}};function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n(338),n(10),n(47),n(88),n(87);var h={getMemberRole:function(t){if("private"!==t.role)return t.role;var e=Date.now(),n=t.role;return 1e3*t.joinedAt>e-6048e5&&(n="recruit"),n},getRating:function(t){var e={league:"calibration",value:""};if(0===t.battlesLeft&&0===t.mmRating)return e;if(0===t.mmRating)return e.value="".concat(10-t.battlesLeft,"/10"),e;var n=10*t.mmRating+3e3;return e.value=n.toFixed(0),e.league=n<2e3?"bronze":n<3e3?"silver":n<4e3?"gold":n<5e3?"platinum":"brilliant",e},clan:function(t,e){var n,r=Object.values(null!==(n=t.members)&&void 0!==n?n:{}).map((function(t){return e[t.account_id]?m(t,e[t.account_id]):function(t){return d(d({},t),{},{statistic:{all:{},rating:{}},lastBattleTime:0})}(t)}));return _(_({},t),{},{members:r})},clanMember:m,accountTanks:function(t,e,n){return t.map((function(t){var r,l,f,d,m,v,_=null!==(r=(null!=e?e:{})[t.tank_id])&&void 0!==r?r:{},h=n.find((function(i){return i.tank_id===t.tank_id}));return h||console.log("no tank achievements",_,t),_.name||console.log("no tank in vehicles data: id -",t.tank_id),c(c({},t),{},{is_premium:_.is_premium,is_collectible:null!==(l=_.is_collectible)&&void 0!==l&&l,name:_.name,nation:_.nation,tier:_.tier,type:_.type,images:_.images,all:o.a.tank(t.all),achievements:{achievements:null!==(f=null==h?void 0:h.achievements)&&void 0!==f?f:{},max_series:null!==(d=null==h?void 0:h.max_series)&&void 0!==d?d:{},tank_id:null!==(m=null==h?void 0:h.tank_id)&&void 0!==m?m:0,account_id:null!==(v=null==h?void 0:h.account_id)&&void 0!==v?v:0}})}))},achievementsMedal:function(t){var e,n=t.key,r=t.achievements.achievements[n],o=t.achievements.max_series[n],l=t.encyclopedia[n],c=function(t){return"/img/medals/".concat(n.replace(/EU|RU|NA|SEA/,"")).concat(null!=t?t:"",".webp")},f={key:n,count:r||0,series:o||0,condition:null==l?void 0:l.condition,description:null==l?void 0:l.description,name:null==l?void 0:l.name,section:null==l?void 0:l.section,image:c()};l.options&&(f.name=(null===(e=l.options[r-1])||void 0===e?void 0:e.name)||l.name,f.count=r?l.options.length-r+1:0,f.degree=r,f.image=c(r||l.options.length));return f.name=String(f.name).replace(/\(.+\)/,""),f}}},600:function(t,e,n){"use strict";n.r(e);n(83);var r=n(35),o=n(36),l=n(40),c=n(41),f=n(25),d=n(21),m=(n(3),n(1),n(34),n(17)),v=n(593);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},y=function(t){Object(l.a)(n,t);var e=_(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).name="RatingIcon",t}return Object(o.a)(n,[{key:"getRating",get:function(){var t=this.rating;return t?v.a.getRating({battlesLeft:t.calibration_battles_left,mmRating:t.mm_rating}):{}}}]),n}(m.Vue);h([Object(m.Prop)()],y.prototype,"rating",void 0);var O=y=h([Object(m.Component)({})],y),j=(n(633),n(37)),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"rating-icon"},[e("img",{staticClass:"rating-icon__img",attrs:{src:"/img/leagues/".concat(t.getRating.league,"_l.webp"),alt:t.$formatter.clan.league(t.getRating.league)}}),t._v("\n  "+t._s(t.getRating.value||"---")+"\n")])}),[],!1,null,null,null);e.default=component.exports},605:function(t,e,n){var content=n(634);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("2e7c8396",content,!0,{sourceMap:!1})},633:function(t,e,n){"use strict";n(605)},634:function(t,e,n){var r=n(74)((function(i){return i[1]}));r.push([t.i,".rating-icon{align-items:center;display:inline-flex}.rating-icon__img{display:flex;height:20px;margin:0 4px 0 0;-o-object-fit:cover;object-fit:cover;width:20px}",""]),r.locals={},t.exports=r},645:function(t,e,n){var content=n(686);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("315e1269",content,!0,{sourceMap:!1})},659:function(t,e,n){"use strict";n.r(e);n(83);var r=n(36),o=n(35),l=n(40),c=n(41),f=n(25),d=n(21),m=(n(3),n(1),n(34),n(59),n(58),n(17));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},h=function(t){Object(l.a)(n,t);var e=v(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).name="RoleIcon",t}return Object(r.a)(n)}(m.Vue);_([Object(m.Prop)({required:!0})],h.prototype,"role",void 0),_([Object(m.Prop)({default:"100%"})],h.prototype,"width",void 0),_([Object(m.Prop)({default:"auto"})],h.prototype,"height",void 0);var y=h=_([Object(m.Component)({components:{commander:function(){return Promise.resolve().then(n.t.bind(null,355,7))},executive_officer:function(){return Promise.resolve().then(n.t.bind(null,502,7))},private:function(){return Promise.resolve().then(n.t.bind(null,500,7))},recruit:function(){return Promise.resolve().then(n.t.bind(null,501,7))}}})],h),O=(n(685),n(37)),component=Object(O.a)(y,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("i",{staticClass:"role-icon",class:["role-icon--"+t.role]},[t.role?e(t.role,{tag:"component",attrs:{width:t.width,height:t.height}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},685:function(t,e,n){"use strict";n(645)},686:function(t,e,n){var r=n(74)((function(i){return i[1]}));r.push([t.i,".role-icon{color:var(--color-green);display:inline-flex}.role-icon--commander,.role-icon--executive_officer{color:var(--color-orange)}",""]),r.locals={},t.exports=r},765:function(t,e,n){var content=n(813);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("1fd38039",content,!0,{sourceMap:!1})},812:function(t,e,n){"use strict";n(765)},813:function(t,e,n){var r=n(74)((function(i){return i[1]}));r.push([t.i,'.tournament-team__inner{position:relative}.tournament-team__props-list{margin:0 0 20px}.tournament-team__props{align-items:baseline;display:flex;flex-wrap:wrap}.tournament-team__props-title{color:var(--color-text-light);font-size:14px;margin:0 8px 0 0}.tournament-team__player-list{list-style:none;margin:0;padding:0}.tournament-team__player{align-items:center;display:flex;line-height:1.25;padding:10px 0}.tournament-team__player:not(:last-child){border-bottom:1px solid var(--border-color-light)}.tournament-team__player-role{margin:0 14px 0 0}.tournament-team__details{align-items:center;display:flex;flex:1;justify-content:space-between}@media only screen and (max-width:480px){.tournament-team__details{align-items:normal;flex-direction:column;justify-content:normal}}.tournament-team__player-name{align-items:center;display:flex}@media only screen and (max-width:480px){.tournament-team__player-name{font-size:15px}}.tournament-team__player-link{font-weight:500;margin:0 8px 0 0}.tournament-team__player-stat{font-size:12px}.tournament-team__stat-item{color:var(--color-text-light)}.tournament-team__stat-item:not(:last-child):after{border-right:2px solid var(--border-color-light);content:"";display:inline-flex;height:.75em;margin:0 4px}.tournament-team__win-rate{font-weight:400}.tournament-team__empty{align-items:center;color:var(--color-text-light);display:flex}@media only screen and (max-width:480px){.tournament-team__empty{height:40px}}',""]),r.locals={},t.exports=r},839:function(t,e,n){"use strict";n.r(e);n(34),n(83);var r=n(42),o=n(12),l=n(35),c=n(36),f=n(40),d=n(41),m=n(25),v=n(21),_=(n(48),n(3),n(1),n(776),n(131),n(151),n(84),n(59),n(58),n(579),n(578),n(17)),h=n(115),y=n(576),O=n(104),j=n(584),x=n(577),w=n(600),R=n(659);function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(m.a)(t);if(e){var o=Object(m.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var M=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},k=function(t){Object(f.a)(v,t);var e,n,d,m=P(v);function v(){var t;return Object(l.a)(this,v),(t=m.apply(this,arguments)).name="TournamentTeam",t.notify=O.a.notify(),t.loading=0,t.players=[],t.statisticsAll=null,t}return Object(c.a)(v,[{key:"created",value:function(){var t=this.tournament.max_players_count;this.players=Array(t).fill(this.makePlayer({})),this.loadAll()}},{key:"getClanAccountsInfo",value:(d=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,h.a.clan.getAccountInfo({extra:"clan",account_id:e.join(",")});case 4:return n=t.sent,data=n.data,t.abrupt("return",Object.values(data));case 9:return t.prev=9,t.t0=t.catch(1),this.notify.add({type:"error",message:"Поучение списка клановых аккаунтов"}),console.error(t.t0),t.abrupt("return",[]);case 14:return t.prev=14,this.loading--,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,9,14,17]])}))),function(t){return d.apply(this,arguments)})},{key:"getAccountInfoList",value:(n=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,h.a.account.getInfo({extra:"statistics.rating",account_id:e.join(",")});case 4:return n=t.sent,data=n.data,t.abrupt("return",Object.values(data));case 9:return t.prev=9,t.t0=t.catch(1),this.notify.add({type:"error",message:"Поучение списка аккаунтов"}),console.error(t.t0),t.abrupt("return",[]);case 14:return t.prev=14,this.loading--,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,9,14,17]])}))),function(t){return n.apply(this,arguments)})},{key:"makePlayer",value:function(t){var e,n,r,o,l,c,f,d,m,v,_,h,y=null===(e=t.account)||void 0===e?void 0:e.statistics.all,O=null===(n=t.account)||void 0===n?void 0:n.statistics.rating;return{id:null!==(r=null===(o=t.player)||void 0===o?void 0:o.account_id)&&void 0!==r?r:0,name:null!==(l=null===(c=t.player)||void 0===c?void 0:c.name)&&void 0!==l?l:"",isOwner:"owner"===(null===(f=t.player)||void 0===f?void 0:f.role),clan:null!==(d=t.clanAccount)&&void 0!==d&&d.clan?{id:t.clanAccount.clan_id,tag:null!==(m=null===(v=t.clanAccount.clan)||void 0===v?void 0:v.tag)&&void 0!==m?m:"",name:null!==(_=null===(h=t.clanAccount.clan)||void 0===h?void 0:h.name)&&void 0!==_?_:""}:null,statistic:{all:y?x.a.accountAll(y):null,rating:O?x.a.accountRating(O):null}}}},{key:"loadAll",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){var e,n,o,l,c,f,d,m=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.team.players.map((function(i){return i.account_id})),t.next=3,Promise.all([this.getAccountInfoList(e),this.getClanAccountsInfo(e)]);case 3:n=t.sent,o=Object(r.a)(n,2),l=o[0],c=o[1],f=l.reduce((function(t,e){return x.a.sumFull(t,e.statistics)}),l[0].statistics),this.statisticsAll=x.a.accountAll(f.all,l.length),d=this.tournament.max_players_count,this.players=Array(d).fill({}).map((function(t,e){var n=m.team.players[e],r=l.find((function(i){return i.account_id===(null==n?void 0:n.account_id)})),o=c.find((function(i){return i.account_id===(null==n?void 0:n.account_id)}));return m.makePlayer({player:n,account:r,clanAccount:o})})).sort((function(i){return i.isOwner?1:0}));case 11:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),v}(_.Vue);M([Object(_.Prop)({required:!0})],k.prototype,"tournament",void 0),M([Object(_.Prop)({required:!0})],k.prototype,"team",void 0);var C=k=M([Object(_.Component)({computed:{colors:function(){return j.a}},components:{RoleIcon:R.default,RatingIcon:w.default,ContentLoader:y.default}})],k),A=(n(812),n(37)),component=Object(A.a)(C,(function(){var t,e,n,r=this,o=r._self._c;r._self._setupProxy;return o("div",{staticClass:"tournament-team"},[o("div",{staticClass:"tournament-team__inner"},[o("div",{staticClass:"tournament-team__props-list"},[o("div",{staticClass:"tournament-team__props"},[o("span",{staticClass:"tournament-team__props-title"},[r._v("Статус")]),r._v("\n        "+r._s(r.$formatter.tournament.teamStatusDetails(r.team.status))+"\n      ")]),r._v(" "),o("div",{staticClass:"tournament-team__props",style:{color:"var(--color-".concat(r.colors.winRate((null===(t=r.statisticsAll)||void 0===t?void 0:t.winRate)||0),")")}},[o("span",{staticClass:"tournament-team__props-title"},[r._v("Ср. побед")]),r._v("\n        "+r._s(r.$formatter.number.toFloatPercent((null===(e=r.statisticsAll)||void 0===e?void 0:e.winRate)||0))+"\n      ")]),r._v(" "),o("div",{staticClass:"tournament-team__props"},[o("span",{staticClass:"tournament-team__props-title"},[r._v("Ср. боёв")]),r._v("\n        "+r._s(r.$formatter.number.toInteger((null===(n=r.statisticsAll)||void 0===n?void 0:n.battles)||0))+"\n      ")])]),r._v(" "),o("ul",{staticClass:"tournament-team__player-list"},r._l(r.players,(function(t,e){return o("li",{key:t.id||e,staticClass:"tournament-team__player"},[o("RoleIcon",{staticClass:"tournament-team__player-role",attrs:{width:"18",height:"18",role:t.isOwner?"commander":"private"}}),r._v(" "),t.id?o("div",{staticClass:"tournament-team__details"},[o("div",{staticClass:"tournament-team__player-name"},[o("nuxt-link",{staticClass:"tournament-team__player-link link",attrs:{to:{name:"account-id",params:{id:t.id}}}},[r._v("\n              "+r._s(t.name)+"\n            ")]),r._v(" "),t.clan?o("nuxt-link",{staticClass:"tournament-team__player-link link",attrs:{to:{name:"clan-id",params:{id:t.clan.id}}}},[r._v("\n              "+r._s("[".concat(t.clan.tag,"]"))+"\n            ")]):r._e()],1),r._v(" "),o("span",{staticClass:"tournament-team__player-stat"},[t.statistic.all?o("span",{staticClass:"tournament-team__stat-item",style:{color:"var(--color-".concat(r.colors.winRate(t.statistic.all.winRate),")")}},[r._v("\n              "+r._s(r.$formatter.stat.winRate(t.statistic.all.winRate))+"\n            ")]):r._e(),r._v(" "),o("span",{staticClass:"tournament-team__stat-item"},[r._v("\n              "+r._s(t.statistic.all.battles)+"\n            ")])])]):o("span",{staticClass:"tournament-team__empty"},[r._v("\n          Место свободно\n        ")])],1)})),0),r._v(" "),o("ContentLoader",{attrs:{"backdrop-light":"",loading:r.loading>0}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RoleIcon:n(659).default,ContentLoader:n(576).default})}}]);