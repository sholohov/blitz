(window.webpackJsonp=window.webpackJsonp||[]).push([[16,17,52],{608:function(t,e,n){"use strict";var r=n(9),c=n(56).find,o=n(184),l="find",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),o(l)},634:function(t,e,n){"use strict";var r=n(9),c=n(17),o=n(73),l=n(347),d=n(346),v=n(16),_=RangeError,f=String,w=Math.floor,h=c(d),x=c("".slice),m=c(1..toFixed),y=function(t,e,n){return 0===e?n:e%2==1?y(t,e-1,n*t):y(t*t,e/2,n)},C=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=w(r/1e7)},k=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=w(n/t),n=n%t*1e7},j=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=f(data[t]);s=""===s?e:s+h("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:v((function(){return"0.000"!==m(8e-5,3)||"1"!==m(.9,0)||"1.25"!==m(1.255,2)||"1000000000000000128"!==m(0xde0b6b3a7640080,0)}))||!v((function(){m({})}))},{toFixed:function(t){var e,n,r,c,d=l(this),v=o(t),data=[0,0,0,0,0,0],w="",m="0";if(v<0||v>20)throw new _("Incorrect fraction digits");if(d!=d)return"NaN";if(d<=-1e21||d>=1e21)return f(d);if(d<0&&(w="-",d=-d),d>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(d*y(2,69,1))-69)<0?d*y(2,-e,1):d/y(2,e,1),n*=4503599627370496,(e=52-e)>0){for(C(data,0,n),r=v;r>=7;)C(data,1e7,0),r-=7;for(C(data,y(10,r,1),0),r=e-1;r>=23;)k(data,1<<23),r-=23;k(data,1<<r),C(data,1,1),k(data,2),m=j(data)}else C(data,0,n),C(data,1<<-e,0),m=j(data)+h("0",v);return m=v>0?w+((c=m.length)<=v?"0."+h("0",v-c)+m:x(m,0,c-v)+"."+x(m,c-v)):w+m}})},678:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(13),c=(n(43),function(text){try{var t=document.createElement("textarea");return t.value=text,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t),!0}catch(t){return!1}}),o=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(text){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.next=2;break;case 2:if(navigator.clipboard){t.next=4;break}return t.abrupt("return",c(text));case 4:return t.prev=4,t.next=7,navigator.clipboard.writeText(text);case 7:return t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t.catch(4),console.error(t.t0),t.abrupt("return",!1);case 14:case"end":return t.stop()}}),t,null,[[4,10]])})));return function(e){return t.apply(this,arguments)}}()},684:function(t,e,n){var content=n(729);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("634d5d6a",content,!0,{sourceMap:!1})},694:function(t,e,n){"use strict";n.r(e);n(72);var r=n(13),c=n(32),o=n(33),l=n(35),d=n(36),v=n(23),_=n(20),f=(n(43),n(3),n(1),n(7),n(153),n(89),n(5),n(15)),w=n(152),h=n(94),x=n(105),m=n(114),y=n(115),C=n(227);function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(v.a)(t);if(e){var c=Object(v.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(_.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},R=function(t,e){var n,r;if((null==t||!t.raw)&&t.timestamp)return C.a.date.toLocaleDate(t.timestamp);var c=e?e.raw?1e3*e.raw.joined_at:e.timestamp:Date.now(),o=t.raw?1e3*(null===(n=t.raw)||void 0===n?void 0:n.joined_at):t.timestamp,l=C.a.date.toLocaleDate(t.raw?1e3*(null===(r=t.raw)||void 0===r?void 0:r.joined_at):null==t?void 0:t.timestamp),d=C.a.date.toDaysPassed(c,o,!0);return"".concat(l," (").concat(d,")")},O=function(t){Object(l.a)(m,t);var e,n,d,v,_,f,w=k(m);function m(){var t;return Object(c.a)(this,m),(t=w.apply(this,arguments)).notify=x.a.notify(),t.user=null,t.clan=null,t.clanHistory=[],t.loading=0,t.isOpened=!1,t}return Object(o.a)(m,[{key:"fetchClanInfo",value:(f=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,h.a.clan.getInfo({clan_id:e});case 4:n=t.sent,data=n.data,this.clan=data?data[e]:null,t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),this.notify.add({type:"error",message:"Получение данных клана"}),console.error(t.t0);case 13:this.loading--;case 14:case"end":return t.stop()}}),t,this,[[1,9]])}))),function(t){return f.apply(this,arguments)})},{key:"getUserInfo",value:(_=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,h.b.user.get(e);case 4:n=t.sent,data=n.data,this.user=data,t.next=15;break;case 9:if(t.prev=9,t.t0=t.catch(1),console.error(t.t0),!h.b.isResponse(t.t0)||404!==t.t0.status){t.next=14;break}return t.abrupt("return");case 14:this.notify.add({type:"error",title:"Получение данных пользователя",message:t.t0 instanceof Error?t.t0.message:"Неизвестная ошибка"});case 15:return t.prev=15,this.loading--,t.finish(15);case 18:case"end":return t.stop()}}),t,this,[[1,9,15,18]])}))),function(t){return _.apply(this,arguments)})},{key:"getClans",value:(v=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,h.a.clan.getInfo({clan_id:e.join(","),fields:"clan_id,name,tag"});case 4:return n=t.sent,data=n.data,t.abrupt("return",null!=data?data:null);case 9:return t.prev=9,t.t0=t.catch(1),this.notify.add({type:"error",title:"Получение данных кланов",message:t.t0 instanceof Error?t.t0.message:"Неизвестная ошибка"}),t.abrupt("return",null);case 13:return t.prev=13,this.loading--,t.finish(13);case 16:case"end":return t.stop()}}),t,this,[[1,9,13,16]])}))),function(t){return v.apply(this,arguments)})},{key:"buildClanHistory",value:function(t,e){this.clanHistory=t.map((function(n,r){var c,o=n.raw,l=n.timestamp,d=o&&e?e[o.clan_id]:null;return{key:l,date:R(n,t[r-1]),info:d&&o?"[".concat(d.tag,"] ").concat(C.a.clan.role(o.role)):"Не в клане",clanId:null!==(c=null==o?void 0:o.clan_id)&&void 0!==c?c:null}}))}},{key:"clansAccounts",value:(d=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.loading++,t.prev=1,t.next=4,h.b.stat.clansAccounts.getList({id:e});case 4:return n=t.sent,data=n.data,t.abrupt("return",null!=data?data:[]);case 9:if(t.prev=9,t.t0=t.catch(1),console.error(t.t0),!h.b.isResponse(t.t0)||404!==t.t0.status){t.next=14;break}return t.abrupt("return",[]);case 14:return this.notify.add({type:"error",title:"Получение данных пользователя",message:t.t0 instanceof Error?t.t0.message:"Неизвестная ошибка"}),t.abrupt("return",[]);case 16:return t.prev=16,this.loading--,t.finish(16);case 19:case"end":return t.stop()}}),t,this,[[1,9,16,19]])}))),function(t){return d.apply(this,arguments)})},{key:"loadData",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isOpened){t.next=2;break}return t.abrupt("return");case 2:if(this.isOpened=!0,null===(e=this.clanAccount)||void 0===e||!e.clan_id){t.next=6;break}return t.next=6,this.fetchClanInfo(this.clanAccount.clan_id);case 6:return t.next=8,this.getUserInfo(this.account.account_id);case 8:if(this.user){t.next=10;break}return t.abrupt("return");case 10:return t.next=12,this.clansAccounts(this.account.account_id);case 12:if(!(n=t.sent).length){t.next=19;break}return r=n.filter((function(t){var e=t.raw;return null==e?void 0:e.clan_id})).map((function(t){var e=t.raw;return null==e?void 0:e.clan_id})),t.next=17,this.getClans(r);case 17:c=t.sent,this.buildClanHistory(n,c);case 19:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"close",value:function(){this.detailedDialogRef.doClose()}},{key:"open",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadData();case 2:return t.next=4,this.detailedDialogRef.doOpen();case 4:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),m}(f.Vue);j([Object(f.Prop)({required:!0})],O.prototype,"account",void 0),j([Object(f.Prop)({required:!0})],O.prototype,"clanAccount",void 0),j([Object(f.Ref)()],O.prototype,"detailedDialogRef",void 0);var D=O=j([Object(f.Component)({components:{SvgIcon:y.default,CButton:m.default,CDialog:w.default}})],O),A=(n(728),n(34)),component=Object(A.a)(D,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("CDialog",{ref:"detailedDialogRef",staticClass:"account-preview-details",attrs:{title:"Дополнительная информация",width:"600px"},scopedSlots:t._u([{key:"footer",fn:function(){return[e("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("span"),t._v(" "),e("CButton",{on:{click:t.close}},[t._v("\n        Закрыть\n      ")])],1)]},proxy:!0}])},[e("div",{staticClass:"account-preview-details__body"},[e("div",{staticClass:"account-preview-details__section"},[e("h5",{staticClass:"account-preview-details__props-title"},[e("SvgIcon",{staticClass:"account-preview-details__prop-title-icon",attrs:{"icon-name":"sports-esports"}}),t._v("\n        Аккаунт игрока\n      ")],1),t._v(" "),e("div",{staticClass:"account-preview-details__props"},[e("div",{staticClass:"account-preview-details__prop"},[e("span",{staticClass:"account-preview-details__prop-title"},[t._v("\n            Дата создания\n          ")]),t._v("\n          "+t._s(t.$formatter.date.toLocaleDate(1e3*t.account.created_at))+"\n        ")]),t._v(" "),e("div",{staticClass:"account-preview-details__prop"},[e("span",{staticClass:"account-preview-details__prop-title"},[t._v("\n            Дата обновления\n          ")]),t._v("\n          "+t._s(t.$formatter.date.toLocaleDate(1e3*t.account.updated_at))+"\n        ")])])]),t._v(" "),t.user?e("div",{staticClass:"account-preview-details__section"},[e("h5",{staticClass:"account-preview-details__props-title"},[e("SvgIcon",{staticClass:"account-preview-details__prop-title-icon",attrs:{"icon-name":"person"}}),t._v("\n        Пользователь ресурса\n      ")],1),t._v(" "),e("div",{staticClass:"account-preview-details__props"},[e("div",{staticClass:"account-preview-details__prop"},[e("span",{staticClass:"account-preview-details__prop-title"},[t._v("\n            Зарегистрирован\n          ")]),t._v("\n          "+t._s(t.$formatter.date.toLocaleDate(t.user.createAt))+"\n        ")]),t._v(" "),e("div",{staticClass:"account-preview-details__prop"},[e("span",{staticClass:"account-preview-details__prop-title"},[t._v("\n            Последний визит\n          ")]),t._v("\n          "+t._s(t.$formatter.date.toLocaleDate(t.user.visitedAt))+"\n        ")])])]):t._e(),t._v(" "),e("div",{staticClass:"account-preview-details__section"},[e("h5",{staticClass:"account-preview-details__props-title"},[e("SvgIcon",{staticClass:"account-preview-details__prop-title-icon",attrs:{"icon-name":"groups"}}),t._v("\n        Клан игрока\n      ")],1),t._v(" "),t.clan&&t.clanAccount?e("div",{staticClass:"account-preview-details__props"},[e("div",{staticClass:"account-preview-details__prop"},[e("span",{staticClass:"account-preview-details__prop-title"},[t._v("\n            Командир\n          ")]),t._v(" "),t.clan.leader_id?e("nuxt-link",{staticClass:"account-preview-details__clan-history-link link",attrs:{to:{name:"account-id",params:{id:t.clan.leader_id}}}},[t._v("\n            "+t._s(t.clan.leader_name)+"\n          ")]):t._e()],1),t._v(" "),e("div",{staticClass:"account-preview-details__prop"},[e("span",{staticClass:"account-preview-details__prop-title"},[t._v("\n            Участников\n          ")]),t._v("\n          "+t._s(t.$formatter.number.toInteger(t.clan.members_count))+"\n        ")]),t._v(" "),e("div",{staticClass:"account-preview-details__prop"},[e("span",{staticClass:"account-preview-details__prop-title"},[t._v("\n            Создан\n          ")]),t._v("\n          "+t._s(t.$formatter.date.toLocaleDate(1e3*t.clan.created_at))+"\n        ")]),t._v(" "),e("div",{staticClass:"account-preview-details__prop"},[e("span",{staticClass:"account-preview-details__prop-title"},[t._v("\n            Роль\n          ")]),t._v("\n          "+t._s(t.$formatter.clan.role(t.clanAccount.role))+"\n        ")]),t._v(" "),e("div",{staticClass:"account-preview-details__prop"},[e("span",{staticClass:"account-preview-details__prop-title"},[t._v("\n            Вступил\n          ")]),t._v("\n          "+t._s(t.$formatter.date.toLocaleDate(1e3*t.clanAccount.joined_at))+"\n        ")])]):e("div",{staticClass:"account-preview-details__props"},[e("div",{staticClass:"account-preview-details__prop"},[t._v("\n          Не состоит в клане\n        ")])])]),t._v(" "),t.user?e("div",{staticClass:"account-preview-details__section"},[e("h5",{staticClass:"account-preview-details__props-title"},[e("SvgIcon",{staticClass:"account-preview-details__prop-title-icon",attrs:{"icon-name":"history"}}),t._v("\n        Клановая история\n      ")],1),t._v(" "),e("div",{staticClass:"account-preview-details__props"},[e("div",{staticClass:"account-preview-details__prop"},[e("span",{staticClass:"account-preview-details__prop-title"},[t._v("\n            Данные собираются со дня регистрации на сайте.\n          ")]),t._v(" "),t.clanHistory.length?e("div",{staticClass:"account-preview-details__clan-history"},t._l(t.clanHistory,(function(n){return e("div",{key:n.key,staticClass:"account-preview-details__clan-history-item"},[e("span",{staticClass:"account-preview-details__clan-history-date"},[t._v("\n                "+t._s(n.date)+"\n              ")]),t._v(" "),n.clanId?e("nuxt-link",{staticClass:"account-preview-details__clan-history-link link",attrs:{to:{name:"clan-id",params:{id:n.clanId}}}},[t._v("\n                "+t._s(n.info)+"\n              ")]):e("span",{staticClass:"account-preview-details__clan-history-link"},[t._v("\n                "+t._s(n.info)+"\n              ")])],1)})),0):[t._v("\n            Данные собираются.\n          ")]],2)])]):t._e()]),t._v(" "),e("ContentLoader",{attrs:{"backdrop-light":"",loading:t.loading>0}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SvgIcon:n(115).default,ContentLoader:n(226).default})},710:function(t,e,n){var content=n(774);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("19f848a6",content,!0,{sourceMap:!1})},728:function(t,e,n){"use strict";n(684)},729:function(t,e,n){var r=n(67)((function(i){return i[1]}));r.push([t.i,".account-preview-details__body{padding:20px 0}.account-preview-details__section+.account-preview-details__section{border-top:1px solid var(--border-color-light);margin:20px 0 0;padding:20px 0 0}.account-preview-details__props-title{font-weight:500;margin:0 0 14px}.account-preview-details__props-subtitle,.account-preview-details__props-title{align-items:flex-start;color:var(--color-text-light);display:flex;font-size:14px;line-height:1.5}.account-preview-details__props-subtitle{margin:0;width:100%}.account-preview-details__prop-title-icon{color:var(--color-text);flex:none;margin:-2px 8px 0 0}.account-preview-details__props{align-items:center;display:flex;flex-wrap:wrap;gap:20px 30px}.account-preview-details__prop{display:flex;flex-direction:column;min-width:0}.account-preview-details__prop--row{width:100%}.account-preview-details__prop-title{color:var(--color-text-light);font-size:12px;max-width:350px}.account-preview-details__clan-history{display:table;margin:6px 0;white-space:nowrap;width:100%}@media only screen and (max-width:480px){.account-preview-details__clan-history{display:flex;flex-direction:column}}.account-preview-details__clan-history-item{display:table-row}@media only screen and (max-width:480px){.account-preview-details__clan-history-item{display:flex;flex-direction:column;margin:6px 0}}.account-preview-details__clan-history-date{display:table-cell;font-size:12px;padding:0 10px 0 0}.account-preview-details__clan-history-link:not(.link){color:var(--color-text-light);display:table-cell;overflow:hidden;text-overflow:ellipsis}",""]),r.locals={},t.exports=r},736:function(t,e,n){"use strict";n.r(e);n(37),n(72);var r=n(13),c=n(32),o=n(33),l=n(35),d=n(36),v=n(23),_=n(20),f=(n(43),n(3),n(1),n(7),n(15)),w=n(114),h=n(678),x=n(152),m=n(105),y=n(226),C=n(53),k=n(656),j=n(694),R=n(115);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(v.a)(t);if(e){var c=Object(v.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var D=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(_.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},A=function(t){Object(l.a)(f,t);var e,n,d,v,_=O(f);function f(){var t;return Object(c.a)(this,f),(t=_.apply(this,arguments)).name="AccountPreview",t.notify=m.a.notify(),t.isFavorite=!0,t.clan=null,t.detailsLoading=!1,t}return Object(o.a)(f,[{key:"created",value:function(){this.getFavorites()}},{key:"handleDetailsBtnClick",value:(v=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.detailsLoading=!0,t.next=3,this.accountPreviewDetailsRef.open();case 3:this.detailsLoading=!1;case 4:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)})},{key:"getFavorites",value:(d=Object(r.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.account){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,C.a.indexedDB.accountsFavorites.get(this.account.account_id);case 4:e=t.sent,this.isFavorite=!!e&&(null==e?void 0:e.isFavorite);case 6:case"end":return t.stop()}}),t,this)}))),function(){return d.apply(this,arguments)})},{key:"setToFavorites",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isFavorite=!this.isFavorite,t.next=3,C.a.indexedDB.accountsFavorites.set(this.account.account_id,{id:this.account.account_id,isFavorite:this.isFavorite});case 3:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"handleAddToFavoritesBtn",value:function(){this.setToFavorites()}},{key:"handleNicknameBtnClick",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.a)("".concat(null===(e=this.account)||void 0===e?void 0:e.nickname,"/").concat(null===(n=this.account)||void 0===n?void 0:n.account_id));case 2:t.sent?this.notify.add({type:"success",title:"Скопировано",message:"".concat(null===(r=this.account)||void 0===r?void 0:r.nickname,"/").concat(null===(c=this.account)||void 0===c?void 0:c.account_id),duration:3e3}):this.notify.add({type:"error",message:"При копировании что-то пошло не так",duration:3e3});case 4:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),f}(f.Vue);D([Object(f.Prop)({required:!0})],A.prototype,"account",void 0),D([Object(f.Prop)({required:!0})],A.prototype,"clanAccount",void 0),D([Object(f.Prop)()],A.prototype,"loading",void 0),D([Object(f.Ref)()],A.prototype,"accountPreviewDetailsRef",void 0);var I=A=D([Object(f.Component)({components:{SvgIcon:R.default,AccountPreviewDetails:j.default,RatingIcon:k.default,CDialog:x.default,CButton:w.default,ContentLoader:y.default}})],A),P=(n(773),n(34)),component=Object(P.a)(I,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"account-preview"},[t.account?e("div",{staticClass:"account-preview__inner"},[e("div",{staticClass:"account-preview__league"},[e("RatingIcon",{attrs:{large:"",rating:t.account.statistics.rating}})],1),t._v(" "),e("div",{staticClass:"account-preview__info"},[e("div",{staticClass:"account-preview__nickname"},[e("span",{staticClass:"account-preview__nickname-text"},[t._v("\n          "+t._s(t.account.nickname)+"\n        ")])]),t._v(" "),t.clanAccount&&t.clanAccount.clan?e("nuxt-link",{staticClass:"account-preview__clan link",attrs:{title:"Перейти к клану",to:{name:"clan-id",params:{id:t.clanAccount.clan_id}}}},[e("span",{staticClass:"account-preview__clan-text"},[t._v("\n          ["+t._s(t.clanAccount.clan.tag)+"] "+t._s(t.clanAccount.clan.name)+"\n        ")])]):t._e(),t._v(" "),e("div",{staticClass:"account-preview__props"},[e("div",{staticClass:"account-preview__prop"},[e("span",{staticClass:"account-preview__prop-title"},[t._v("\n            Последний бой\n          ")]),t._v(" "),e("span",{staticClass:"account-preview__prop-value"},[t._v("\n            "+t._s(t.$formatter.date.toDatePassed(1e3*t.account.last_battle_time))+"\n          ")])]),t._v(" "),t.clanAccount?e("div",{staticClass:"account-preview__prop"},[e("span",{staticClass:"account-preview__prop-title"},[t._v("\n            Должность\n          ")]),t._v(" "),e("span",{staticClass:"account-preview__prop-value"},[t._v("\n            "+t._s(t.$formatter.clan.role(t.clanAccount.role))+"\n          ")])]):t._e()])],1),t._v(" "),e("div",{staticClass:"account-preview__actions"},[e("CButton",{staticClass:"account-preview__actions-btn",attrs:{"is-text":"",title:"Копировать (nickname/ID)"},on:{click:t.handleNicknameBtnClick}},[e("SvgIcon",{attrs:{"icon-name":"content-copy"}})],1),t._v(" "),e("CButton",{staticClass:"account-preview__actions-btn",attrs:{"is-text":"",title:"Добавить в избранные"},on:{click:t.handleAddToFavoritesBtn}},[t.isFavorite?e("SvgIcon",{attrs:{"icon-name":"star"}}):e("SvgIcon",{attrs:{"icon-name":"star-border"}})],1),t._v(" "),e("CButton",{staticClass:"account-preview__actions-btn",attrs:{"is-text":"",disabled:t.detailsLoading,title:"Дополнительная информация"},on:{click:t.handleDetailsBtnClick}},[e("SvgIcon",{attrs:{"icon-name":"info"}})],1)],1)]):t._e(),t._v(" "),e("ContentLoader",{attrs:{loading:t.loading}}),t._v(" "),e("AccountPreviewDetails",{ref:"accountPreviewDetailsRef",attrs:{account:t.account,"clan-account":t.clanAccount}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RatingIcon:n(656).default,SvgIcon:n(115).default,ContentLoader:n(226).default,AccountPreviewDetails:n(694).default})},773:function(t,e,n){"use strict";n(710)},774:function(t,e,n){var r=n(67)((function(i){return i[1]}));r.push([t.i,".account-preview{background-color:var(--bg-color);border:1px solid var(--border-color-light);position:relative}.account-preview__inner{align-items:center;display:flex;flex:1;justify-content:center;padding:10px 15px;position:relative}@media only screen and (max-width:480px){.account-preview__inner{flex-direction:column}}.account-preview__info{align-items:center;display:flex;flex:1;flex-direction:column;font-size:22px;max-width:100%;min-width:0;padding:12px;text-align:center}@media only screen and (max-width:1024px){.account-preview__info{font-size:20px}}@media only screen and (max-width:640px){.account-preview__info{font-size:18px}}.account-preview__league{background-color:var(--bg-color-darkest);border:1px solid var(--border-color-light);border-radius:50%;display:flex;flex:none;padding:5px}.account-preview__nickname{display:flex;flex:1;font-weight:500;max-width:100%}.account-preview__nickname-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.account-preview__clan{display:flex;flex:1;font-size:14px;font-weight:500;max-width:100%}.account-preview__clan-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.account-preview__props{align-items:center;display:flex;flex-wrap:wrap;gap:16px;justify-content:center;margin:10px 0 0}.account-preview__prop{align-items:center;display:flex;flex-direction:column;justify-content:stretch;white-space:nowrap}.account-preview__prop-title{color:var(--color-text-light);font-size:12px}.account-preview__prop-value{align-items:center;display:flex;flex:1;font-size:12px}.account-preview__league-img{display:flex;height:48px;-o-object-fit:cover;object-fit:cover;width:64px}.account-preview__league-rating{display:flex;font-size:14px;font-weight:500;line-height:1}.account-preview__actions{align-items:center;display:flex;flex:none;flex-direction:column;justify-content:center}@media only screen and (max-width:480px){.account-preview__actions{flex-direction:row}}.account-preview__actions-btn{align-items:center;height:24px;justify-content:center;margin:4px 0;width:24px}@media only screen and (max-width:1024px){.account-preview__actions-btn{height:40px;margin:0;width:40px}}",""]),r.locals={},t.exports=r}}]);