(window.webpackJsonp=window.webpackJsonp||[]).push([[17,25,40],{565:function(t,e,n){"use strict";n.r(e);n(82);var o=n(36),l=n(35),r=n(39),c=n(40),d=n(24),f=n(19),v=(n(3),n(1),n(34),n(16));function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var l=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(t,e,n,desc){var o,l=arguments.length,r=l<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(l<3?o(r):l>3?o(e,n,r):o(e,n))||r);return l>3&&r&&Object.defineProperty(e,n,r),r},m=function(t){Object(r.a)(n,t);var e=_(n);function n(){var t;return Object(l.a)(this,n),(t=e.apply(this,arguments)).name="ContentLoader",t}return Object(o.a)(n)}(v.Vue);h([Object(v.Prop)({default:!1})],m.prototype,"loading",void 0),h([Object(v.Prop)({default:!1})],m.prototype,"backdropLight",void 0);var y=m=h([Object(v.Component)({})],m),x=(n(575),n(37)),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"content-loader",class:[t.loading?"content-loader--is-active":"",!1!==t.backdropLight?"content-loader--hide-backdrop":""]})}),[],!1,null,null,null);e.default=component.exports},568:function(t,e,n){var content=n(576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("d9f51612",content,!0,{sourceMap:!1})},575:function(t,e,n){"use strict";n(568)},576:function(t,e,n){var o=n(71)((function(i){return i[1]}));o.push([t.i,'.content-loader{align-items:center;bottom:0;display:flex;justify-content:center;left:0;opacity:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s;z-index:1}.content-loader--is-active{opacity:1;pointer-events:auto}.content-loader:before{background-color:var(--bg-color-darken);bottom:0;content:"";left:0;opacity:.95;position:absolute;right:0;top:0}.content-loader--hide-backdrop:before{background-color:var(--bg-color)}.content-loader:after{animation:loader-rotation 1.5s linear infinite;border:4px solid var(--bg-color-darken);border-left-color:var(--color-primary);border-radius:50%;box-sizing:border-box;content:"";display:flex;height:24px;position:relative;transform:translateZ(0);width:24px}@keyframes loader-rotation{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),o.locals={},t.exports=o},585:function(t,e,n){var content=n(618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("39c2bb06",content,!0,{sourceMap:!1})},589:function(t,e,n){"use strict";n.r(e);n(34),n(6),n(86),n(82);var o=n(35),l=n(36),r=n(39),c=n(40),d=n(24),f=n(19),v=(n(3),n(1),n(16)),_=n(340),h=n.n(_),m=n(353),y=n.n(m),x=n(113),w=n(590),j=(n(47),n(181),n(56),n(55),/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z|0-9]/gi),k=/(https?:\/\/)?(www\.)?((t|telegram)\.me)\/\+?[a-zA-Z0-9_]{5,32}/gi,O=function(t){var e=[],o=t.match(j),l=t.match(k);return(null==o?void 0:o.length)&&e.push({title:"Discord",icon:function(){return Promise.resolve().then(n.t.bind(null,353,7))},link:o[0]}),(null==l?void 0:l.length)&&e.push({title:"Telegram",icon:function(){return Promise.resolve().then(n.t.bind(null,340,7))},link:l[0]}),e},C=n(565);function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var l=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var P=function(t,e,n,desc){var o,l=arguments.length,r=l<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(l<3?o(r):l>3?o(e,n,r):o(e,n))||r);return l>3&&r&&Object.defineProperty(e,n,r),r},D=function(t){Object(r.a)(n,t);var e=R(n);function n(){var t,l;return Object(o.a)(this,n),(t=e.apply(this,arguments)).name="ClanDetails",t.showDescription=null===(l=!t.hideDescription)||void 0===l||l,t}return Object(l.a)(n,[{key:"emblemUrl",get:function(){var t,e=null===(t=this.clan)||void 0===t?void 0:t.emblem_set_id;return e?"https://wotblitz-gc.gcdn.co/icons/clanEmblems1x/clan-icon-v2-".concat(e,".png"):""}},{key:"socialLinks",get:function(){var t,e;return O(null!==(e=null===(t=this.clan)||void 0===t?void 0:t.description)&&void 0!==e?e:"")}},{key:"toggleHideDescription",value:function(){var t;this.showDescription=!this.showDescription,this.showDescription||(null===(t=this.footerRef)||void 0===t||t.scrollIntoView(),window.scrollBy({top:-76}))}}]),n}(v.Vue);P([Object(v.Prop)({default:!1})],D.prototype,"hideDescription",void 0),P([Object(v.Prop)({required:!0})],D.prototype,"clan",void 0),P([Object(v.Prop)()],D.prototype,"loading",void 0),P([Object(v.Ref)("main")],D.prototype,"footerRef",void 0);var L=D=P([Object(v.Component)({components:{CButton:x.default,DiscordSvg:y.a,TelegramIcon:h.a,SocialLinks:w.default,ContentLoader:C.default}})],D),z=(n(630),n(37)),component=Object(z.a)(L,(function(){var t,e,n,o,l,r,c,d,f,v,_,h,m,y,x,w,j=this,k=j._self._c;j._self._setupProxy;return k("div",{ref:"main",staticClass:"clan-details"},[k("div",{staticClass:"clan-details__header"},[k("div",{staticClass:"clan-details__header-col"},[k("div",{staticClass:"clan-details__info"},[k("img",{staticClass:"clan-details__emblem-img",attrs:{"data-text":null!==(t=null===(e=j.clan)||void 0===e?void 0:e.clan_id)&&void 0!==t?t:"No image",alt:"Эмблема клана",src:j.emblemUrl}}),j._v(" "),k("div",{staticClass:"clan-details__title"},[k("span",{staticClass:"clan-details__tag"},[j._v("["+j._s(null!==(n=null===(o=j.clan)||void 0===o?void 0:o.tag)&&void 0!==n?n:"...")+"]")]),j._v(" "),k("span",{staticClass:"clan-details__name"},[j._v(j._s(null!==(l=null===(r=j.clan)||void 0===r?void 0:r.name)&&void 0!==l?l:"..."))])])]),j._v(" "),null!==(c=j.clan)&&void 0!==c&&c.motto?k("div",{staticClass:"clan-details__motto"},[j._v("\n        «"+j._s(j.clan.motto)+"»\n      ")]):j._e()]),j._v(" "),k("div",{staticClass:"clan-details__header-col"},[k("div",{staticClass:"clan-details__param-list"},[k("div",{staticClass:"clan-details__param"},[k("span",{staticClass:"clan-details__param-title"},[j._v("ID")]),j._v(" "),k("span",[j._v(j._s(null!==(d=null===(f=j.clan)||void 0===f?void 0:f.clan_id)&&void 0!==d?d:"..."))])]),j._v(" "),k("div",{staticClass:"clan-details__param"},[k("span",{staticClass:"clan-details__param-title"},[j._v("Дата создания")]),j._v(" "),k("span",[j._v(j._s(null!==(v=j.clan)&&void 0!==v&&v.created_at?j.$formatter.toLocaleDate(1e3*(null===(_=j.clan)||void 0===_?void 0:_.created_at)):"..."))])]),j._v(" "),k("div",{staticClass:"clan-details__param"},[k("span",{staticClass:"clan-details__param-title"},[j._v("Кол-во игроков")]),j._v(" "),k("span",[j._v(j._s(null!==(h=null===(m=j.clan)||void 0===m?void 0:m.members_count)&&void 0!==h?h:"..."))])])])])]),j._v(" "),k("transition",[j.showDescription&&null!==(y=j.clan)&&void 0!==y&&y.description?k("div",{staticClass:"clan-details__description",domProps:{textContent:j._s(null===(x=j.clan)||void 0===x?void 0:x.description)}}):j._e()]),j._v(" "),k("div",{ref:"footer",staticClass:"clan-details__footer"},[null!==(w=j.clan)&&void 0!==w&&w.description&&j.hideDescription?k("CButton",{staticClass:"clan-details__hide-description-btn",on:{click:j.toggleHideDescription}},[j._v("\n      "+j._s(j.showDescription?"Скрыть":"Показать")+" описание\n    ")]):j._e(),j._v(" "),k("div",{staticClass:"clan-details__links"},[k("SocialLinks",{attrs:{links:j.socialLinks}})],1)],1),j._v(" "),k("ContentLoader",{attrs:{loading:j.loading}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SocialLinks:n(590).default,ContentLoader:n(565).default})},590:function(t,e,n){"use strict";n.r(e);n(629),n(82);var o=n(36),l=n(35),r=n(39),c=n(40),d=n(24),f=n(19),v=(n(3),n(1),n(34),n(16));function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(d.a)(t);if(e){var l=Object(d.a)(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return Object(c.a)(this,n)}}var h=function(t,e,n,desc){var o,l=arguments.length,r=l<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(r=(l<3?o(r):l>3?o(e,n,r):o(e,n))||r);return l>3&&r&&Object.defineProperty(e,n,r),r},m=function(t){Object(r.a)(n,t);var e=_(n);function n(){var t;return Object(l.a)(this,n),(t=e.apply(this,arguments)).name="SocialLinks",t}return Object(o.a)(n)}(v.Vue);h([Object(v.Prop)({required:!0,type:Array})],m.prototype,"links",void 0);var y=m=h([v.Component],m),x=(n(617),n(37)),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"social-links"},[e("div",{staticClass:"social-links__links"},t._l(t.links,(function(link){return e("a",{key:link.link,staticClass:"link social-links__links-item",attrs:{href:link.link,target:"_blank",title:link.title}},[e(link.icon,{tag:"component",attrs:{width:"24",height:"24"}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports},594:function(t,e,n){var content=n(631);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(72).default)("505415f4",content,!0,{sourceMap:!1})},617:function(t,e,n){"use strict";n(585)},618:function(t,e,n){var o=n(71)((function(i){return i[1]}));o.push([t.i,".social-links__links{display:flex;flex-wrap:wrap}.social-links__links-item{align-items:center;display:inline-flex;font-weight:700;height:36px;justify-content:center;width:36px}",""]),o.locals={},t.exports=o},629:function(t,e,n){"use strict";var o=n(2),l=n(650);o({target:"String",proto:!0,forced:n(651)("link")},{link:function(t){return l(this,"a","href",t)}})},630:function(t,e,n){"use strict";n(594)},631:function(t,e,n){var o=n(71)((function(i){return i[1]}));o.push([t.i,'.clan-details__emblem-img:after,.clan-details__emblem-img:before{bottom:0;left:0;position:absolute;right:0;top:0}.clan-details__emblem-img:before{background-color:var(--bg-color);border:1px solid var(--border-color-light);content:"";display:block}.clan-details__emblem-img:after{align-items:center;color:var(--color-text-light);content:attr(data-text);display:flex;flex-wrap:wrap;font-size:10px;font-style:normal;justify-content:center;padding:4px;text-align:center;word-break:break-word}.clan-details{position:relative}.clan-details__header{display:flex;justify-content:space-between;margin:0 0 10px}@media only screen and (max-width:640px){.clan-details__header{flex-direction:column}}.clan-details__header-col{display:flex;flex-direction:column;margin:0 0 14px}.clan-details__info{display:flex;margin:0 14px 10px 0;position:relative}.clan-details__emblem-img{align-self:center;display:inline-flex;height:64px;margin:0 14px 0 0;-o-object-fit:contain;object-fit:contain;position:relative;width:64px}@media only screen and (max-width:640px){.clan-details__emblem-img{height:48px;margin:0 8px 0 0;width:48px}}.clan-details__title{display:flex;flex-direction:column;flex-wrap:wrap;font-size:22px;justify-content:center;line-height:1.25;position:relative}@media only screen and (max-width:640px){.clan-details__title{font-size:18px}}.clan-details__tag{font-weight:500}.clan-details__motto{font-style:italic}.clan-details__footer{display:flex;justify-content:space-between}.clan-details__description{margin:0 0 20px;max-width:720px;white-space:pre-line}.clan-details__description.v-enter-active,.clan-details__description.v-leave-active{transition:opacity .2s ease-out}.clan-details__description.v-enter,.clan-details__description.v-leave-to{opacity:0}.clan-details__param{display:table-row;font-size:14px}.clan-details__param-title{color:var(--color-text-light);display:table-cell;padding:0 10px 0 0;text-align:right}@media only screen and (max-width:640px){.clan-details__param-title{text-align:left}}.clan-details__no-data{white-space:pre}',""]),o.locals={},t.exports=o},650:function(t,e,n){var o=n(13),l=n(69),r=n(38),c=/"/g,d=o("".replace);t.exports=function(t,e,n,o){var f=r(l(t)),v="<"+e;return""!==n&&(v+=" "+n+'="'+d(r(o),c,"&quot;")+'"'),v+">"+f+"</"+e+">"}},651:function(t,e,n){var o=n(12);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}}}]);