(window.webpackJsonp=window.webpackJsonp||[]).push([[58,20,33,44,45,60],{576:function(t,e,n){"use strict";n.r(e);n(83);var r=n(36),o=n(35),c=n(40),l=n(41),f=n(25),d=n(21),m=(n(3),n(1),n(34),n(17));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).name="ContentLoader",t}return Object(r.a)(n)}(m.Vue);_([Object(m.Prop)({default:!1})],y.prototype,"loading",void 0),_([Object(m.Prop)({default:!1})],y.prototype,"backdropLight",void 0);var h=y=_([Object(m.Component)({})],y),x=(n(589),n(37)),component=Object(x.a)(h,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"content-loader",class:[t.loading?"content-loader--is-active":"",!1!==t.backdropLight?"content-loader--hide-backdrop":""]})}),[],!1,null,null,null);e.default=component.exports},577:function(t,e,n){"use strict";var r=n(2),o=n(16),c=n(49),l=n(50),f=n(51),d=n(224),m=n(39),v=n(15),_=n(223),y=n(181),h=n(340),x=n(341),O=n(132),j=n(342),R=[],w=o(R.sort),k=o(R.push),C=v((function(){R.sort(void 0)})),A=v((function(){R.sort(null)})),P=y("sort"),I=!v((function(){if(O)return O<70;if(!(h&&h>3)){if(x)return!0;if(j)return j<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)R.push({k:t+n,v:e})}for(R.sort((function(a,b){return b.v-a.v})),n=0;n<R.length;n++)t=R[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:C||!A||!P||!I},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(I)return void 0===t?w(e):w(e,t);var n,r,o=[],v=f(e);for(r=0;r<v;r++)r in e&&k(o,e[r]);for(_(o,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:m(e)>m(n)?1:-1}}(t)),n=f(o),r=0;r<n;)e[r]=o[r++];for(;r<v;)d(e,r++);return e}})},578:function(t,e,n){"use strict";var r=n(2),o=n(55).find,c=n(180),l="find",f=!0;l in[]&&Array(1)[l]((function(){f=!1})),r({target:"Array",proto:!0,forced:f},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},579:function(t,e,n){var content=n(590);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("03eb9cfd",content,!0,{sourceMap:!1})},582:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={winRate:function(t){switch(!0){case t>=70:return"purple";case t>=60:return"blue";case t>=50:return"green";default:return"text"}}}},589:function(t,e,n){"use strict";n(579)},590:function(t,e,n){var r=n(74)((function(i){return i[1]}));r.push([t.i,'.content-loader{align-items:center;bottom:0;display:flex;justify-content:center;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s;z-index:1}.content-loader--is-active{opacity:1;pointer-events:auto}.content-loader:before{background-color:var(--bg-color-darken);bottom:0;content:"";left:0;opacity:.95;position:absolute;right:0;top:0}.content-loader--hide-backdrop:before{background-color:var(--bg-color)}.content-loader:after{animation:loader-rotation 1.5s linear infinite;border:4px solid var(--bg-color-darken);border-left-color:var(--color-primary);border-radius:50%;box-sizing:border-box;content:"";display:flex;height:24px;position:relative;transform:translateZ(0);width:24px}@keyframes loader-rotation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),r.locals={},t.exports=r},621:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return null!=t}},637:function(t,e,n){var content=n(681);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("315e1269",content,!0,{sourceMap:!1})},647:function(t,e,n){"use strict";n.r(e);n(83);var r=n(36),o=n(35),c=n(40),l=n(41),f=n(25),d=n(21),m=(n(3),n(1),n(34),n(59),n(58),n(17));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).name="RoleIcon",t}return Object(r.a)(n)}(m.Vue);_([Object(m.Prop)({required:!0})],y.prototype,"role",void 0),_([Object(m.Prop)({default:"100%"})],y.prototype,"width",void 0),_([Object(m.Prop)({default:"auto"})],y.prototype,"height",void 0);var h=y=_([Object(m.Component)({components:{commander:function(){return Promise.resolve().then(n.t.bind(null,355,7))},executive_officer:function(){return Promise.resolve().then(n.t.bind(null,502,7))},private:function(){return Promise.resolve().then(n.t.bind(null,500,7))},recruit:function(){return Promise.resolve().then(n.t.bind(null,501,7))}}})],y),x=(n(680),n(37)),component=Object(x.a)(h,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("i",{staticClass:"role-icon",class:["role-icon--"+t.role]},[t.role?e(t.role,{tag:"component",attrs:{width:t.width,height:t.height}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},680:function(t,e,n){"use strict";n(637)},681:function(t,e,n){var r=n(74)((function(i){return i[1]}));r.push([t.i,".role-icon{color:var(--color-green);display:inline-flex}.role-icon--commander,.role-icon--executive_officer{color:var(--color-orange)}",""]),r.locals={},t.exports=r},699:function(t,e,n){var content=n(768);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(75).default)("2a36d956",content,!0,{sourceMap:!1})},766:function(t,e,n){"use strict";var r=n(2),o=n(228),c=n(180);r({target:"Array",proto:!0},{fill:o}),c("fill")},767:function(t,e,n){"use strict";n(699)},768:function(t,e,n){var r=n(74)((function(i){return i[1]}));r.push([t.i,'.tournament-team__inner{position:relative}.tournament-team__props-list{margin:0 0 20px}.tournament-team__props{align-items:baseline;display:flex;flex-wrap:wrap}.tournament-team__props-title{color:var(--color-text-light);font-size:14px;margin:0 8px 0 0}.tournament-team__player-list{list-style:none;margin:0;padding:0}.tournament-team__player{align-items:center;display:flex;line-height:1.25;padding:10px 0}.tournament-team__player:not(:last-child){border-bottom:1px solid var(--border-color-light)}.tournament-team__player-role{margin:0 14px 0 0}.tournament-team__details{align-items:center;display:flex;flex:1;justify-content:space-between}@media only screen and (max-width:480px){.tournament-team__details{align-items:normal;flex-direction:column;justify-content:normal}}.tournament-team__player-name{align-items:center;display:flex}@media only screen and (max-width:480px){.tournament-team__player-name{font-size:15px}}.tournament-team__player-link{font-weight:500;margin:0 8px 0 0}.tournament-team__player-stat{font-size:12px}.tournament-team__stat-item{color:var(--color-text-light)}.tournament-team__stat-item:not(:last-child):after{border-right:2px solid var(--border-color-light);content:"";display:inline-flex;height:.75em;margin:0 4px}.tournament-team__win-rate{font-weight:400}.tournament-team__empty{align-items:center;color:var(--color-text-light);display:flex}@media only screen and (max-width:480px){.tournament-team__empty{height:40px}}',""]),r.locals={},t.exports=r},781:function(t,e,n){"use strict";n.r(e);n(34),n(83);var r=n(42),o=n(12),c=n(35),l=n(36),f=n(40),d=n(41),m=n(25),v=n(21),_=(n(48),n(3),n(1),n(766),n(131),n(6),n(152),n(84),n(59),n(58),n(577),n(578),n(17)),y=n(114),h=n(576),x=n(103),O=n(582),j=n(581),R=n(608),w=n(647),k=n(621);function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(m.a)(t);if(e){var o=Object(m.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var A=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},P=function(t){Object(f.a)(v,t);var e,n,d,m=C(v);function v(){var t;return Object(c.a)(this,v),(t=m.apply(this,arguments)).name="TournamentTeam",t.notify=x.a.notify(),t.loading=0,t.players=[],t.statisticsAll=null,t}return Object(l.a)(v,[{key:"created",value:function(){var t=this.tournament.max_players_count;this.players=Array(t).fill(this.makePlayer({})),this.loadAll()}},{key:"getClanAccountsInfo",value:(d=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,y.a.clan.getAccountInfo({extra:"clan",account_id:e.join(",")});case 4:return n=t.sent,data=n.data,t.abrupt("return",Object.values(data).filter(k.a));case 9:return t.prev=9,t.t0=t.catch(1),this.notify.add({type:"error",message:"Поучение списка клановых аккаунтов"}),console.error(t.t0),t.abrupt("return",[]);case 14:return t.prev=14,this.loading--,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,9,14,17]])}))),function(t){return d.apply(this,arguments)})},{key:"getAccountInfoList",value:(n=Object(o.a)(regeneratorRuntime.mark((function t(e){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,y.a.account.getInfo({extra:"statistics.rating",account_id:e.join(",")});case 4:return n=t.sent,data=n.data,t.abrupt("return",Object.values(data).filter(k.a));case 9:return t.prev=9,t.t0=t.catch(1),this.notify.add({type:"error",message:"Поучение списка аккаунтов"}),console.error(t.t0),t.abrupt("return",[]);case 14:return t.prev=14,this.loading--,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,9,14,17]])}))),function(t){return n.apply(this,arguments)})},{key:"makePlayer",value:function(t){var e,n,r,o,c,l,f,d,m,v,_,y,h=null===(e=t.account)||void 0===e?void 0:e.statistics.all,x=null===(n=t.account)||void 0===n?void 0:n.statistics.rating;return{id:null!==(r=null===(o=t.player)||void 0===o?void 0:o.account_id)&&void 0!==r?r:0,name:null!==(c=null===(l=t.player)||void 0===l?void 0:l.name)&&void 0!==c?c:"",isOwner:"owner"===(null===(f=t.player)||void 0===f?void 0:f.role),clan:null!==(d=t.clanAccount)&&void 0!==d&&d.clan?{id:t.clanAccount.clan_id,tag:null!==(m=null===(v=t.clanAccount.clan)||void 0===v?void 0:v.tag)&&void 0!==m?m:"",name:null!==(_=null===(y=t.clanAccount.clan)||void 0===y?void 0:y.name)&&void 0!==_?_:""}:null,statistic:{all:h?j.a.accountAll(h):null,rating:x?j.a.accountRating(x):null}}}},{key:"loadAll",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){var e,n,o,c,l,f,d,m=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.team.players.map((function(i){return i.account_id})),t.next=3,Promise.all([this.getAccountInfoList(e),this.getClanAccountsInfo(e)]);case 3:n=t.sent,o=Object(r.a)(n,2),c=o[0],l=o[1],f=c.reduce((function(t,e){return j.a.sumFull(t,e.statistics)}),c[0].statistics),this.statisticsAll=j.a.accountAll(f.all,c.length),d=this.tournament.max_players_count,this.players=Array(d).fill({}).map((function(t,e){var n=m.team.players[e],r=c.find((function(i){return i.account_id===(null==n?void 0:n.account_id)})),o=l.find((function(i){return i.account_id===(null==n?void 0:n.account_id)}));return m.makePlayer({player:n,account:r,clanAccount:o})})).sort((function(i){return i.isOwner?1:0}));case 11:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),v}(_.Vue);A([Object(_.Prop)({required:!0})],P.prototype,"tournament",void 0),A([Object(_.Prop)({required:!0})],P.prototype,"team",void 0);var I=P=A([Object(_.Component)({computed:{colors:function(){return O.a}},components:{RoleIcon:w.default,RatingIcon:R.default,ContentLoader:h.default}})],P),L=(n(767),n(37)),component=Object(L.a)(I,(function(){var t,e,n,r=this,o=r._self._c;r._self._setupProxy;return o("div",{staticClass:"tournament-team"},[o("div",{staticClass:"tournament-team__inner"},[o("div",{staticClass:"tournament-team__props-list"},[o("div",{staticClass:"tournament-team__props"},[o("span",{staticClass:"tournament-team__props-title"},[r._v("Статус")]),r._v("\n        "+r._s(r.$formatter.tournament.teamStatusDetails(r.team.status))+"\n      ")]),r._v(" "),o("div",{staticClass:"tournament-team__props",style:{color:"var(--color-".concat(r.colors.winRate((null===(t=r.statisticsAll)||void 0===t?void 0:t.winRate)||0),")")}},[o("span",{staticClass:"tournament-team__props-title"},[r._v("Ср. побед")]),r._v("\n        "+r._s(r.$formatter.number.toFloatPercent((null===(e=r.statisticsAll)||void 0===e?void 0:e.winRate)||0))+"\n      ")]),r._v(" "),o("div",{staticClass:"tournament-team__props"},[o("span",{staticClass:"tournament-team__props-title"},[r._v("Ср. боёв")]),r._v("\n        "+r._s(r.$formatter.number.toInteger((null===(n=r.statisticsAll)||void 0===n?void 0:n.battles)||0))+"\n      ")])]),r._v(" "),o("ul",{staticClass:"tournament-team__player-list"},r._l(r.players,(function(t,e){return o("li",{key:t.id||e,staticClass:"tournament-team__player"},[o("RoleIcon",{staticClass:"tournament-team__player-role",attrs:{width:"18",height:"18",role:t.isOwner?"commander":"private"}}),r._v(" "),t.id?o("div",{staticClass:"tournament-team__details"},[o("div",{staticClass:"tournament-team__player-name"},[o("nuxt-link",{staticClass:"tournament-team__player-link link",attrs:{to:{name:"account-id",params:{id:t.id}}}},[r._v("\n              "+r._s(t.name)+"\n            ")]),r._v(" "),t.clan?o("nuxt-link",{staticClass:"tournament-team__player-link link",attrs:{to:{name:"clan-id",params:{id:t.clan.id}}}},[r._v("\n              "+r._s("[".concat(t.clan.tag,"]"))+"\n            ")]):r._e()],1),r._v(" "),o("span",{staticClass:"tournament-team__player-stat"},[t.statistic.all?o("span",{staticClass:"tournament-team__stat-item",style:{color:"var(--color-".concat(r.colors.winRate(t.statistic.all.winRate),")")}},[r._v("\n              "+r._s(r.$formatter.stat.winRate(t.statistic.all.winRate))+"\n            ")]):r._e(),r._v(" "),o("span",{staticClass:"tournament-team__stat-item"},[r._v("\n              "+r._s(t.statistic.all.battles)+"\n            ")])])]):o("span",{staticClass:"tournament-team__empty"},[r._v("\n          Место свободно\n        ")])],1)})),0),r._v(" "),o("ContentLoader",{attrs:{"backdrop-light":"",loading:r.loading>0}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RoleIcon:n(647).default,ContentLoader:n(576).default})}}]);