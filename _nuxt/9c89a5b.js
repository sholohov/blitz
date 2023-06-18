(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{532:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(217),o={getList:function(t){return Object(r.a)({url:"account/list/",method:"get",params:t})},getInfo:function(t){return Object(r.a)({url:"account/info/",method:"get",params:t})},getAchievements:function(t){return Object(r.a)({url:"account/achievements/",method:"get",params:t})}},c=n(224),l={account:o,auth:{login:function(t){return Object(r.a)({baseUrl:c.a,url:"auth/login/",method:"get",params:t})},prolongate:function(t){return Object(r.a)({baseUrl:c.a,url:"auth/prolongate/",method:"get",params:t})},logout:function(t){return Object(r.a)({baseUrl:c.a,url:"auth/logout/",method:"post",params:t})}},clan:{getInfo:function(t){return Object(r.a)({url:"clans/info/",method:"get",params:t})},getList:function(t){return Object(r.a)({url:"clans/list/",method:"get",params:t})},getAccountInfo:function(t){return Object(r.a)({url:"clans/accountinfo/",method:"get",params:t})}},tanks:{getAchievements:function(t){return Object(r.a)({url:"tanks/achievements/",method:"get",params:t})},getStats:function(t){return Object(r.a)({url:"tanks/stats/",method:"get",params:t})}},encyclopedia:{getVehicles:function(t){return Object(r.a)({url:"encyclopedia/vehicles/",method:"get",params:t})},getAchievements:function(t){return Object(r.a)({url:"encyclopedia/achievements/",method:"get",params:t})}},tournaments:{getList:function(t){return Object(r.a)({url:"tournaments/list/",method:"get",params:t})},getInfo:function(t){return Object(r.a)({url:"tournaments/info/",method:"get",params:t})}}}},576:function(t,e,n){var content=n(636);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(82).default)("4c89fc10",content,!0,{sourceMap:!1})},616:function(t,e,n){"use strict";n.r(e);n(28),n(100),n(39),n(38),n(40),n(25),n(59);var r=n(29),o=n(12),c=n(32),l=n(33),f=n(46),h=n(47),d=n(22),m=n(11),v=(n(69),n(27),n(8),n(52),n(51),n(10)),O=n(64),j=n(146),y=n(532),w=n(70),_=n(101),x=n(220);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(h.a)(this,n)}}var R=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},P=function(t){Object(f.a)(d,t);var e,n,r,h=C(d);function d(){var t;return Object(c.a)(this,d),(t=h.apply(this,arguments)).name="LoginSwitcher",t.user=_.a.user(),t}return Object(l.a)(d,[{key:"logged",get:function(){return 0!==this.user.accountId}},{key:"login",value:(r=Object(o.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.auth.login({redirect_uri:location.href,nofollow:1});case 2:e=t.sent,(data=e.data)&&(window.location.href=data.location);case 5:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)})},{key:"logout",value:(n=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y.a.auth.logout({access_token:e});case 2:w.a.storage.removeUser(),this.user.resetUser(),location.assign("/");case 5:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"handleLogoutConfirm",value:function(t){var e=w.a.storage.getUser();e&&(t&&this.logout(e.access_token),this.logoutConfirmRef.doClose())}},{key:"handleSwitcher",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(w.a.storage.getUser()){t.next=6;break}return t.next=4,this.login();case 4:t.next=8;break;case 6:return t.next=8,this.logoutConfirmRef.doOpen();case 8:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),d}(v.Vue);R([Object(v.Ref)("logoutConfirm")],P.prototype,"logoutConfirmRef",void 0),P=R([Object(v.Component)({components:{CDialog:x.default,CButton:j.default,login:function(){return n.e(56).then(n.t.bind(null,725,7))},logout:function(){return n.e(57).then(n.t.bind(null,726,7))}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(O.d)(_.a.breakpoints,["isTablet"]))})],P);var S=P,D=(n(635),n(34)),component=Object(D.a)(S,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"login-switcher"},[t.isTablet?t._e():e("div",{staticClass:"login-switcher__username"},[e("span",{staticClass:"login-switcher__username-text"},[t._v("\n      "+t._s(t.user.name)+"\n    ")])]),t._v(" "),e("CButton",{staticClass:"login-switcher__btn",attrs:{"is-text":"","is-square":"",align:"center",title:t.logged?"Выйти":"Войти"},on:{click:t.handleSwitcher}},[e(t.logged?"logout":"login",{tag:"component"})],1),t._v(" "),e("CDialog",{ref:"logoutConfirm",attrs:{title:"Выход из аккаунта","append-to-body":""}},[e("div",{staticStyle:{margin:"0 0 1em"}},[t._v("\n      Вы уверены, что хотите выйти из аккаунта?\n    ")]),t._v(" "),e("div",{staticStyle:{"text-align":"right"}},[e("CButton",{attrs:{align:"center",width:"80px"},on:{click:function(e){return t.handleLogoutConfirm(!0)}}},[t._v("\n        Да\n      ")]),t._v(" "),e("CButton",{attrs:{align:"center",width:"80px"},on:{click:function(e){return t.handleLogoutConfirm(!1)}}},[t._v("\n        Нет\n      ")])],1)])],1)}),[],!1,null,null,null);e.default=component.exports},635:function(t,e,n){"use strict";n(576)},636:function(t,e,n){var r=n(81)((function(i){return i[1]}));r.push([t.i,".login-switcher{align-items:center;display:flex;position:relative}.login-switcher__username{align-self:center;display:inline-flex;max-width:200px;padding:0 8px;position:relative}.login-switcher__username-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}",""]),r.locals={},t.exports=r}}]);