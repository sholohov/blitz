var qu=Object.defineProperty;var $u=(e,t,n)=>t in e?qu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Re=(e,t,n)=>($u(e,typeof t!="symbol"?t+"":t,n),n);import{f as zu,o as Hu,c as Ku,C as Gu,$ as ca}from"./m8Dh55rh.js";const G_=zu({__name:"ContentLoader",props:{loading:{type:Boolean,default:!1},backdropLight:{type:Boolean,default:!1}},setup(e){return(t,n)=>(Hu(),Ku("div",{class:Gu(["content-loader",[e.loading?"content-loader--is-active":"",e.backdropLight!==!1?"content-loader--hide-backdrop":""]])},null,2))}});function ua(e,t){return function(){return e.apply(t,arguments)}}const{toString:Qu}=Object.prototype,{getPrototypeOf:xs}=Object,Zn=(e=>t=>{const n=Qu.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),St=e=>(e=e.toLowerCase(),t=>Zn(t)===e),tr=e=>t=>typeof t===e,{isArray:Ee}=Array,$e=tr("undefined");function Wu(e){return e!==null&&!$e(e)&&e.constructor!==null&&!$e(e.constructor)&&ft(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const la=St("ArrayBuffer");function Ju(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&la(e.buffer),t}const Xu=tr("string"),ft=tr("function"),ha=tr("number"),er=e=>e!==null&&typeof e=="object",Yu=e=>e===!0||e===!1,Dn=e=>{if(Zn(e)!=="object")return!1;const t=xs(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Zu=St("Date"),tl=St("File"),el=St("Blob"),nl=St("FileList"),rl=e=>er(e)&&ft(e.pipe),sl=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||ft(e.append)&&((t=Zn(e))==="formdata"||t==="object"&&ft(e.toString)&&e.toString()==="[object FormData]"))},il=St("URLSearchParams"),ol=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function on(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),Ee(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let a;for(r=0;r<o;r++)a=i[r],t.call(null,e[a],a,e)}}function da(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const fa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,pa=e=>!$e(e)&&e!==fa;function Yr(){const{caseless:e}=pa(this)&&this||{},t={},n=(r,s)=>{const i=e&&da(t,s)||s;Dn(t[i])&&Dn(r)?t[i]=Yr(t[i],r):Dn(r)?t[i]=Yr({},r):Ee(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&on(arguments[r],n);return t}const al=(e,t,n,{allOwnKeys:r}={})=>(on(t,(s,i)=>{n&&ft(s)?e[i]=ua(s,n):e[i]=s},{allOwnKeys:r}),e),cl=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ul=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ll=(e,t,n,r)=>{let s,i,o;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!a[o]&&(t[o]=e[o],a[o]=!0);e=n!==!1&&xs(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},hl=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},dl=e=>{if(!e)return null;if(Ee(e))return e;let t=e.length;if(!ha(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},fl=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&xs(Uint8Array)),pl=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},ml=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},gl=St("HTMLFormElement"),_l=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ji=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),yl=St("RegExp"),ma=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};on(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},El=e=>{ma(e,(t,n)=>{if(ft(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(ft(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Tl=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Ee(e)?r(e):r(String(e).split(t)),n},vl=()=>{},wl=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Vr="abcdefghijklmnopqrstuvwxyz",qi="0123456789",ga={DIGIT:qi,ALPHA:Vr,ALPHA_DIGIT:Vr+Vr.toUpperCase()+qi},Al=(e=16,t=ga.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Il(e){return!!(e&&ft(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Sl=e=>{const t=new Array(10),n=(r,s)=>{if(er(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=Ee(r)?[]:{};return on(r,(o,a)=>{const c=n(o,s+1);!$e(c)&&(i[a]=c)}),t[s]=void 0,i}}return r};return n(e,0)},Rl=St("AsyncFunction"),Cl=e=>e&&(er(e)||ft(e))&&ft(e.then)&&ft(e.catch),d={isArray:Ee,isArrayBuffer:la,isBuffer:Wu,isFormData:sl,isArrayBufferView:Ju,isString:Xu,isNumber:ha,isBoolean:Yu,isObject:er,isPlainObject:Dn,isUndefined:$e,isDate:Zu,isFile:tl,isBlob:el,isRegExp:yl,isFunction:ft,isStream:rl,isURLSearchParams:il,isTypedArray:fl,isFileList:nl,forEach:on,merge:Yr,extend:al,trim:ol,stripBOM:cl,inherits:ul,toFlatObject:ll,kindOf:Zn,kindOfTest:St,endsWith:hl,toArray:dl,forEachEntry:pl,matchAll:ml,isHTMLForm:gl,hasOwnProperty:ji,hasOwnProp:ji,reduceDescriptors:ma,freezeMethods:El,toObjectSet:Tl,toCamelCase:_l,noop:vl,toFiniteNumber:wl,findKey:da,global:fa,isContextDefined:pa,ALPHABET:ga,generateString:Al,isSpecCompliantForm:Il,toJSONObject:Sl,isAsyncFn:Rl,isThenable:Cl};function P(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}d.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:d.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const _a=P.prototype,ya={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ya[e]={value:e}});Object.defineProperties(P,ya);Object.defineProperty(_a,"isAxiosError",{value:!0});P.from=(e,t,n,r,s,i)=>{const o=Object.create(_a);return d.toFlatObject(e,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),P.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const Pl=null;function Zr(e){return d.isPlainObject(e)||d.isArray(e)}function Ea(e){return d.endsWith(e,"[]")?e.slice(0,-2):e}function $i(e,t,n){return e?e.concat(t).map(function(s,i){return s=Ea(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function bl(e){return d.isArray(e)&&!e.some(Zr)}const Dl=d.toFlatObject(d,{},null,function(t){return/^is[A-Z]/.test(t)});function nr(e,t,n){if(!d.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=d.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,v){return!d.isUndefined(v[y])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&d.isSpecCompliantForm(t);if(!d.isFunction(s))throw new TypeError("visitor must be a function");function u(_){if(_===null)return"";if(d.isDate(_))return _.toISOString();if(!c&&d.isBlob(_))throw new P("Blob is not supported. Use a Buffer instead.");return d.isArrayBuffer(_)||d.isTypedArray(_)?c&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function l(_,y,v){let b=_;if(_&&!v&&typeof _=="object"){if(d.endsWith(y,"{}"))y=r?y:y.slice(0,-2),_=JSON.stringify(_);else if(d.isArray(_)&&bl(_)||(d.isFileList(_)||d.endsWith(y,"[]"))&&(b=d.toArray(_)))return y=Ea(y),b.forEach(function(Q,pt){!(d.isUndefined(Q)||Q===null)&&t.append(o===!0?$i([y],pt,i):o===null?y:y+"[]",u(Q))}),!1}return Zr(_)?!0:(t.append($i(v,y,i),u(_)),!1)}const h=[],f=Object.assign(Dl,{defaultVisitor:l,convertValue:u,isVisitable:Zr});function m(_,y){if(!d.isUndefined(_)){if(h.indexOf(_)!==-1)throw Error("Circular reference detected in "+y.join("."));h.push(_),d.forEach(_,function(b,$){(!(d.isUndefined(b)||b===null)&&s.call(t,b,d.isString($)?$.trim():$,y,f))===!0&&m(b,y?y.concat($):[$])}),h.pop()}}if(!d.isObject(e))throw new TypeError("data must be an object");return m(e),t}function zi(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Ls(e,t){this._pairs=[],e&&nr(e,this,t)}const Ta=Ls.prototype;Ta.append=function(t,n){this._pairs.push([t,n])};Ta.toString=function(t){const n=t?function(r){return t.call(this,r,zi)}:zi;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Vl(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function va(e,t,n){if(!t)return e;const r=n&&n.encode||Vl,s=n&&n.serialize;let i;if(s?i=s(t,n):i=d.isURLSearchParams(t)?t.toString():new Ls(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Hi{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){d.forEach(this.handlers,function(r){r!==null&&t(r)})}}const wa={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Nl=typeof URLSearchParams<"u"?URLSearchParams:Ls,Ol=typeof FormData<"u"?FormData:null,kl=typeof Blob<"u"?Blob:null,xl={isBrowser:!0,classes:{URLSearchParams:Nl,FormData:Ol,Blob:kl},protocols:["http","https","file","blob","url","data"]},Aa=typeof window<"u"&&typeof document<"u",Ll=(e=>Aa&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),Ml=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Fl=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Aa,hasStandardBrowserEnv:Ll,hasStandardBrowserWebWorkerEnv:Ml},Symbol.toStringTag,{value:"Module"})),yt={...Fl,...xl};function Ul(e,t){return nr(e,new yt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return yt.isNode&&d.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Bl(e){return d.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function jl(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Ia(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&d.isArray(s)?s.length:o,c?(d.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!d.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&d.isArray(s[o])&&(s[o]=jl(s[o])),!a)}if(d.isFormData(e)&&d.isFunction(e.entries)){const n={};return d.forEachEntry(e,(r,s)=>{t(Bl(r),s,n,0)}),n}return null}function ql(e,t,n){if(d.isString(e))try{return(t||JSON.parse)(e),d.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Ms={transitional:wa,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=d.isObject(t);if(i&&d.isHTMLForm(t)&&(t=new FormData(t)),d.isFormData(t))return s?JSON.stringify(Ia(t)):t;if(d.isArrayBuffer(t)||d.isBuffer(t)||d.isStream(t)||d.isFile(t)||d.isBlob(t))return t;if(d.isArrayBufferView(t))return t.buffer;if(d.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Ul(t,this.formSerializer).toString();if((a=d.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return nr(a?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),ql(t)):t}],transformResponse:[function(t){const n=this.transitional||Ms.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&d.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(o)throw a.name==="SyntaxError"?P.from(a,P.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:yt.classes.FormData,Blob:yt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};d.forEach(["delete","get","head","post","put","patch"],e=>{Ms.headers[e]={}});const Fs=Ms,$l=d.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zl=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&$l[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ki=Symbol("internals");function Ce(e){return e&&String(e).trim().toLowerCase()}function Vn(e){return e===!1||e==null?e:d.isArray(e)?e.map(Vn):String(e)}function Hl(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Kl=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Nr(e,t,n,r,s){if(d.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!d.isString(t)){if(d.isString(r))return t.indexOf(r)!==-1;if(d.isRegExp(r))return r.test(t)}}function Gl(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ql(e,t){const n=d.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class rr{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(a,c,u){const l=Ce(c);if(!l)throw new Error("header name must be a non-empty string");const h=d.findKey(s,l);(!h||s[h]===void 0||u===!0||u===void 0&&s[h]!==!1)&&(s[h||c]=Vn(a))}const o=(a,c)=>d.forEach(a,(u,l)=>i(u,l,c));return d.isPlainObject(t)||t instanceof this.constructor?o(t,n):d.isString(t)&&(t=t.trim())&&!Kl(t)?o(zl(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=Ce(t),t){const r=d.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Hl(s);if(d.isFunction(n))return n.call(this,s,r);if(d.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Ce(t),t){const r=d.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Nr(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=Ce(o),o){const a=d.findKey(r,o);a&&(!n||Nr(r,r[a],a,n))&&(delete r[a],s=!0)}}return d.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||Nr(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return d.forEach(this,(s,i)=>{const o=d.findKey(r,i);if(o){n[o]=Vn(s),delete n[i];return}const a=t?Gl(i):String(i).trim();a!==i&&delete n[i],n[a]=Vn(s),r[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return d.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&d.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ki]=this[Ki]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Ce(o);r[a]||(Ql(s,o),r[a]=!0)}return d.isArray(t)?t.forEach(i):i(t),this}}rr.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);d.reduceDescriptors(rr.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});d.freezeMethods(rr);const Ct=rr;function Or(e,t){const n=this||Fs,r=t||n,s=Ct.from(r.headers);let i=r.data;return d.forEach(e,function(a){i=a.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Sa(e){return!!(e&&e.__CANCEL__)}function an(e,t,n){P.call(this,e??"canceled",P.ERR_CANCELED,t,n),this.name="CanceledError"}d.inherits(an,P,{__CANCEL__:!0});function Wl(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new P("Request failed with status code "+n.status,[P.ERR_BAD_REQUEST,P.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Jl=yt.hasStandardBrowserEnv?{write(e,t,n,r,s,i){const o=[e+"="+encodeURIComponent(t)];d.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),d.isString(r)&&o.push("path="+r),d.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Xl(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Yl(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ra(e,t){return e&&!Xl(t)?Yl(e,t):t}const Zl=yt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=d.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function th(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function eh(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),l=r[i];o||(o=u),n[s]=c,r[s]=u;let h=i,f=0;for(;h!==s;)f+=n[h++],h=h%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),u-o<t)return;const m=l&&u-l;return m?Math.round(f*1e3/m):void 0}}function Gi(e,t){let n=0;const r=eh(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),u=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-i)/c:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const nh=typeof XMLHttpRequest<"u",rh=nh&&function(e){return new Promise(function(n,r){let s=e.data;const i=Ct.from(e.headers).normalize();let{responseType:o,withXSRFToken:a}=e,c;function u(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}let l;if(d.isFormData(s)){if(yt.hasStandardBrowserEnv||yt.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((l=i.getContentType())!==!1){const[y,...v]=l?l.split(";").map(b=>b.trim()).filter(Boolean):[];i.setContentType([y||"multipart/form-data",...v].join("; "))}}let h=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+v))}const f=Ra(e.baseURL,e.url);h.open(e.method.toUpperCase(),va(f,e.params,e.paramsSerializer),!0),h.timeout=e.timeout;function m(){if(!h)return;const y=Ct.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),b={data:!o||o==="text"||o==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:y,config:e,request:h};Wl(function(Q){n(Q),u()},function(Q){r(Q),u()},b),h=null}if("onloadend"in h?h.onloadend=m:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(m)},h.onabort=function(){h&&(r(new P("Request aborted",P.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new P("Network Error",P.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let v=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const b=e.transitional||wa;e.timeoutErrorMessage&&(v=e.timeoutErrorMessage),r(new P(v,b.clarifyTimeoutError?P.ETIMEDOUT:P.ECONNABORTED,e,h)),h=null},yt.hasStandardBrowserEnv&&(a&&d.isFunction(a)&&(a=a(e)),a||a!==!1&&Zl(f))){const y=e.xsrfHeaderName&&e.xsrfCookieName&&Jl.read(e.xsrfCookieName);y&&i.set(e.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in h&&d.forEach(i.toJSON(),function(v,b){h.setRequestHeader(b,v)}),d.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),o&&o!=="json"&&(h.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&h.addEventListener("progress",Gi(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&h.upload&&h.upload.addEventListener("progress",Gi(e.onUploadProgress)),(e.cancelToken||e.signal)&&(c=y=>{h&&(r(!y||y.type?new an(null,e,h):y),h.abort(),h=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c)));const _=th(f);if(_&&yt.protocols.indexOf(_)===-1){r(new P("Unsupported protocol "+_+":",P.ERR_BAD_REQUEST,e));return}h.send(s||null)})},ts={http:Pl,xhr:rh};d.forEach(ts,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Qi=e=>`- ${e}`,sh=e=>d.isFunction(e)||e===null||e===!1,Ca={getAdapter:e=>{e=d.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!sh(n)&&(r=ts[(o=String(n)).toLowerCase()],r===void 0))throw new P(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(Qi).join(`
`):" "+Qi(i[0]):"as no adapter specified";throw new P("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ts};function kr(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new an(null,e)}function Wi(e){return kr(e),e.headers=Ct.from(e.headers),e.data=Or.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ca.getAdapter(e.adapter||Fs.adapter)(e).then(function(r){return kr(e),r.data=Or.call(e,e.transformResponse,r),r.headers=Ct.from(r.headers),r},function(r){return Sa(r)||(kr(e),r&&r.response&&(r.response.data=Or.call(e,e.transformResponse,r.response),r.response.headers=Ct.from(r.response.headers))),Promise.reject(r)})}const Ji=e=>e instanceof Ct?{...e}:e;function he(e,t){t=t||{};const n={};function r(u,l,h){return d.isPlainObject(u)&&d.isPlainObject(l)?d.merge.call({caseless:h},u,l):d.isPlainObject(l)?d.merge({},l):d.isArray(l)?l.slice():l}function s(u,l,h){if(d.isUndefined(l)){if(!d.isUndefined(u))return r(void 0,u,h)}else return r(u,l,h)}function i(u,l){if(!d.isUndefined(l))return r(void 0,l)}function o(u,l){if(d.isUndefined(l)){if(!d.isUndefined(u))return r(void 0,u)}else return r(void 0,l)}function a(u,l,h){if(h in t)return r(u,l);if(h in e)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(u,l)=>s(Ji(u),Ji(l),!0)};return d.forEach(Object.keys(Object.assign({},e,t)),function(l){const h=c[l]||s,f=h(e[l],t[l],l);d.isUndefined(f)&&h!==a||(n[l]=f)}),n}const Pa="1.6.8",Us={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Us[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Xi={};Us.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Pa+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(t===!1)throw new P(s(o," has been removed"+(n?" in "+n:"")),P.ERR_DEPRECATED);return n&&!Xi[o]&&(Xi[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,a):!0}};function ih(e,t,n){if(typeof e!="object")throw new P("options must be an object",P.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const a=e[i],c=a===void 0||o(a,i,e);if(c!==!0)throw new P("option "+i+" must be "+c,P.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new P("Unknown option "+i,P.ERR_BAD_OPTION)}}const es={assertOptions:ih,validators:Us},Dt=es.validators;class Mn{constructor(t){this.defaults=t,this.interceptors={request:new Hi,response:new Hi}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=he(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&es.assertOptions(r,{silentJSONParsing:Dt.transitional(Dt.boolean),forcedJSONParsing:Dt.transitional(Dt.boolean),clarifyTimeoutError:Dt.transitional(Dt.boolean)},!1),s!=null&&(d.isFunction(s)?n.paramsSerializer={serialize:s}:es.assertOptions(s,{encode:Dt.function,serialize:Dt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&d.merge(i.common,i[n.method]);i&&d.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=Ct.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(c=c&&y.synchronous,a.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let l,h=0,f;if(!c){const _=[Wi.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,u),f=_.length,l=Promise.resolve(n);h<f;)l=l.then(_[h++],_[h++]);return l}f=a.length;let m=n;for(h=0;h<f;){const _=a[h++],y=a[h++];try{m=_(m)}catch(v){y.call(this,v);break}}try{l=Wi.call(this,m)}catch(_){return Promise.reject(_)}for(h=0,f=u.length;h<f;)l=l.then(u[h++],u[h++]);return l}getUri(t){t=he(this.defaults,t);const n=Ra(t.baseURL,t.url);return va(n,t.params,t.paramsSerializer)}}d.forEach(["delete","get","head","options"],function(t){Mn.prototype[t]=function(n,r){return this.request(he(r||{},{method:t,url:n,data:(r||{}).data}))}});d.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,a){return this.request(he(a||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Mn.prototype[t]=n(),Mn.prototype[t+"Form"]=n(!0)});const Nn=Mn;class Bs{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,a){r.reason||(r.reason=new an(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Bs(function(s){t=s}),cancel:t}}}const oh=Bs;function ah(e){return function(n){return e.apply(null,n)}}function ch(e){return d.isObject(e)&&e.isAxiosError===!0}const ns={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ns).forEach(([e,t])=>{ns[t]=e});const uh=ns;function ba(e){const t=new Nn(e),n=ua(Nn.prototype.request,t);return d.extend(n,Nn.prototype,t,{allOwnKeys:!0}),d.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ba(he(e,s))},n}const F=ba(Fs);F.Axios=Nn;F.CanceledError=an;F.CancelToken=oh;F.isCancel=Sa;F.VERSION=Pa;F.toFormData=nr;F.AxiosError=P;F.Cancel=F.CanceledError;F.all=function(t){return Promise.all(t)};F.spread=ah;F.isAxiosError=ch;F.mergeConfig=he;F.AxiosHeaders=Ct;F.formToJSON=e=>Ia(d.isHTMLForm(e)?new FormData(e):e);F.getAdapter=Ca.getAdapter;F.HttpStatusCode=uh;F.default=F;const Da=e=>typeof e!="object"||e===null?!1:"status"in e&&("data"in e||"error"in e),js="https://api.tanki.su/wot/",lh="https://papi.tanksblitz.ru/wotb/",hh=e=>{throw e},U=Object.assign(async e=>{var t;try{await U.beforeRequest(e);const n={baseURL:e.baseURL??lh,url:e.url,params:e.params??{},data:e.data,method:e.method},{data:r}=await F.request(n);return r.error&&hh(r),r}catch(n){throw Da(n)&&n.error?(U.onError(n),new Error(`Lesta API (${n.error.code}) ${n.error.message}`)):F.isAxiosError(n)?((t=n.response)==null?void 0:t.data)??"Unknown error":n}},{onError(e){return e},beforeRequest(e){return Promise.resolve(e)}}),dh=e=>U({url:"account/list/",method:"get",params:e}),fh=e=>U({url:"account/info/",method:"get",params:e}),ph=e=>U({url:"account/achievements/",method:"get",params:e}),mh={getList:dh,getInfo:fh,getAchievements:ph},gh=e=>U({baseURL:js,url:"auth/login/",method:"get",params:e}),_h=()=>{const e=new URL(location.href),t=Object.fromEntries(e.searchParams.entries()),n={access_token:t.access_token,expires_at:t.expires_at,account_id:t.account_id,nickname:t.nickname};return Object.values(n).every(r=>r)?n:null},yh={getUser:_h};class Yi extends Error{constructor(t){super(t),this.name="StoreError"}}const sr=e=>{throw e instanceof Error&&e.message?new Yi(e.message):new Yi("unknown error")},Eh=e=>{try{const t=localStorage.getItem(e);if(!t)return null;const n=JSON.parse(t);return n.ttl&&Date.now()>n.ttl?(localStorage.removeItem(e),null):n.value}catch(t){sr(t)}},Th=e=>e&&Number.isInteger(e)?Date.now()+e:void 0,vh=(e,t,n)=>{try{const r={value:t,timestamp:Date.now(),ttl:Th(n==null?void 0:n.expires)};localStorage.setItem(e,JSON.stringify(r))}catch(r){sr(r)}},wh=e=>{try{localStorage.removeItem(e)}catch(t){sr(t)}},Ah=()=>{try{localStorage.clear()}catch(e){sr(e)}},qs={get:Eh,set:vh,remove:wh,clear:Ah},$s="updateConfirmed",Ih=()=>{try{return qs.get($s)}catch(e){return console.error("updateConfirmation.get",e),null}},Sh=e=>{try{qs.set($s,e)}catch(t){console.error("updateConfirmation.set",t)}},Rh=()=>{try{qs.remove($s)}catch(e){console.error("updateConfirmation.remove",e)}},Ch={get:Ih,set:Sh,remove:Rh},Ph=()=>{try{localStorage.removeItem("access_token"),localStorage.removeItem("expires_at"),localStorage.removeItem("account_id"),localStorage.removeItem("nickname")}catch(e){console.error("storage.removeUser",e)}},bh=e=>{try{localStorage.setItem("access_token",e.access_token),localStorage.setItem("expires_at",e.expires_at),localStorage.setItem("account_id",e.account_id),localStorage.setItem("nickname",e.nickname)}catch(t){console.error("storage.setUser",t)}},Dh=()=>{try{const e={access_token:localStorage.getItem("access_token")??"",expires_at:localStorage.getItem("expires_at")??"",account_id:localStorage.getItem("account_id")??"",nickname:localStorage.getItem("nickname")??""};return Object.values(e).every(t=>t)?e:null}catch(e){return console.error("storage.getUser",e),null}},Vh=()=>{try{return localStorage.getItem("access_token")}catch(e){return console.error("storage.getAccessToken",e),null}},Nh=()=>{try{localStorage.removeItem("access_token")}catch(e){console.error("storage.removeAccessToken",e)}},Oh={getAccessToken:Vh,removeAccessToken:Nh,removeUser:Ph,getUser:Dh,setUser:bh,updateConfirmation:Ch};var Zi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},kh=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Na={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,c=s+2<e.length,u=c?e[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(f=64)),r.push(n[l],n[h],n[f],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Va(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):kh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const u=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new xh;const f=i<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const _=u<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class xh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Lh=function(e){const t=Va(e);return Na.encodeByteArray(t,!0)},Fn=function(e){return Lh(e).replace(/\./g,"")},Mh=function(e){try{return Na.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=()=>Fh().__FIREBASE_DEFAULTS__,Bh=()=>{if(typeof process>"u"||typeof Zi>"u")return;const e=Zi.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},jh=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Mh(e[1]);return t&&JSON.parse(t)},zs=()=>{try{return Uh()||Bh()||jh()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},qh=e=>{var t,n;return(n=(t=zs())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},$h=e=>{const t=qh(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Oa=()=>{var e;return(e=zs())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hh(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[Fn(JSON.stringify(n)),Fn(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kh(){var e;const t=(e=zs())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function Gh(){return!Kh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ka(){try{return typeof indexedDB=="object"}catch{return!1}}function Qh(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="FirebaseError";class Te extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Wh,Object.setPrototypeOf(this,Te.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xa.prototype.create)}}class xa{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Jh(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Te(s,a,r)}}function Jh(e,t){return e.replace(Xh,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Xh=/\{\$([^}]+)}/g;function rs(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(to(i)&&to(o)){if(!rs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function to(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(e){return e&&e._delegate?e._delegate:e}class ze{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new zh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(td(t))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Bt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Bt){return this.instances.has(t)}getOptions(t=Bt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zh(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Bt){return this.component?this.component.multipleInstances?t:Bt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zh(e){return e===Bt?void 0:e}function td(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Yh(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(D||(D={}));const nd={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},rd=D.INFO,sd={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},id=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=sd[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ma{constructor(t){this.name=t,this._logLevel=rd,this._logHandler=id,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in D))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?nd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...t),this._logHandler(this,D.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...t),this._logHandler(this,D.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,D.INFO,...t),this._logHandler(this,D.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,D.WARN,...t),this._logHandler(this,D.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...t),this._logHandler(this,D.ERROR,...t)}}const od=(e,t)=>t.some(n=>e instanceof n);let eo,no;function ad(){return eo||(eo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cd(){return no||(no=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fa=new WeakMap,ss=new WeakMap,Ua=new WeakMap,xr=new WeakMap,Hs=new WeakMap;function ud(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(Ot(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Fa.set(n,e)}).catch(()=>{}),Hs.set(t,e),t}function ld(e){if(ss.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});ss.set(e,t)}let is={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ss.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Ua.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ot(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function hd(e){is=e(is)}function dd(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Lr(this),t,...n);return Ua.set(r,t.sort?t.sort():[t]),Ot(r)}:cd().includes(e)?function(...t){return e.apply(Lr(this),t),Ot(Fa.get(this))}:function(...t){return Ot(e.apply(Lr(this),t))}}function fd(e){return typeof e=="function"?dd(e):(e instanceof IDBTransaction&&ld(e),od(e,ad())?new Proxy(e,is):e)}function Ot(e){if(e instanceof IDBRequest)return ud(e);if(xr.has(e))return xr.get(e);const t=fd(e);return t!==e&&(xr.set(e,t),Hs.set(t,e)),t}const Lr=e=>Hs.get(e);function pd(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=Ot(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ot(o.result),c.oldVersion,c.newVersion,Ot(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const md=["get","getKey","getAll","getAllKeys","count"],gd=["put","add","delete","clear"],Mr=new Map;function ro(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Mr.get(t))return Mr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=gd.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||md.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Mr.set(t,i),i}hd(e=>({...e,get:(t,n,r)=>ro(t,n)||e.get(t,n,r),has:(t,n)=>!!ro(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(yd(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function yd(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const os="@firebase/app",so="0.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new Ma("@firebase/app"),Ed="@firebase/app-compat",Td="@firebase/analytics-compat",vd="@firebase/analytics",wd="@firebase/app-check-compat",Ad="@firebase/app-check",Id="@firebase/auth",Sd="@firebase/auth-compat",Rd="@firebase/database",Cd="@firebase/database-compat",Pd="@firebase/functions",bd="@firebase/functions-compat",Dd="@firebase/installations",Vd="@firebase/installations-compat",Nd="@firebase/messaging",Od="@firebase/messaging-compat",kd="@firebase/performance",xd="@firebase/performance-compat",Ld="@firebase/remote-config",Md="@firebase/remote-config-compat",Fd="@firebase/storage",Ud="@firebase/storage-compat",Bd="@firebase/firestore",jd="@firebase/firestore-compat",qd="firebase",$d="10.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as="[DEFAULT]",zd={[os]:"fire-core",[Ed]:"fire-core-compat",[vd]:"fire-analytics",[Td]:"fire-analytics-compat",[Ad]:"fire-app-check",[wd]:"fire-app-check-compat",[Id]:"fire-auth",[Sd]:"fire-auth-compat",[Rd]:"fire-rtdb",[Cd]:"fire-rtdb-compat",[Pd]:"fire-fn",[bd]:"fire-fn-compat",[Dd]:"fire-iid",[Vd]:"fire-iid-compat",[Nd]:"fire-fcm",[Od]:"fire-fcm-compat",[kd]:"fire-perf",[xd]:"fire-perf-compat",[Ld]:"fire-rc",[Md]:"fire-rc-compat",[Fd]:"fire-gcs",[Ud]:"fire-gcs-compat",[Bd]:"fire-fst",[jd]:"fire-fst-compat","fire-js":"fire-js",[qd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn=new Map,Hd=new Map,cs=new Map;function io(e,t){try{e.container.addComponent(t)}catch(n){Wt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function jn(e){const t=e.name;if(cs.has(t))return Wt.debug(`There were multiple attempts to register component ${t}.`),!1;cs.set(t,e);for(const n of Bn.values())io(n,e);for(const n of Hd.values())io(n,e);return!0}function Kd(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kt=new xa("app","Firebase",Gd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=$d;function Ba(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:as,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw kt.create("bad-app-name",{appName:String(s)});if(n||(n=Oa()),!n)throw kt.create("no-options");const i=Bn.get(s);if(i){if(rs(n,i.options)&&rs(r,i.config))return i;throw kt.create("duplicate-app",{appName:s})}const o=new ed(s);for(const c of cs.values())o.addComponent(c);const a=new Qd(n,r,o);return Bn.set(s,a),a}function Jd(e=as){const t=Bn.get(e);if(!t&&e===as&&Oa())return Ba();if(!t)throw kt.create("no-app",{appName:e});return t}function oe(e,t,n){var r;let s=(r=zd[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Wt.warn(a.join(" "));return}jn(new ze(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="firebase-heartbeat-database",Yd=1,He="firebase-heartbeat-store";let Fr=null;function ja(){return Fr||(Fr=pd(Xd,Yd,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(He)}catch(n){console.warn(n)}}}}).catch(e=>{throw kt.create("idb-open",{originalErrorMessage:e.message})})),Fr}async function Zd(e){try{const n=(await ja()).transaction(He),r=await n.objectStore(He).get(qa(e));return await n.done,r}catch(t){if(t instanceof Te)Wt.warn(t.message);else{const n=kt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Wt.warn(n.message)}}}async function oo(e,t){try{const r=(await ja()).transaction(He,"readwrite");await r.objectStore(He).put(t,qa(e)),await r.done}catch(n){if(n instanceof Te)Wt.warn(n.message);else{const r=kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Wt.warn(r.message)}}}function qa(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf=1024,ef=30*24*60*60*1e3;class nf{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ao();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ef}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ao(),{heartbeatsToSend:r,unsentEntries:s}=rf(this._heartbeatsCache.heartbeats),i=Fn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ao(){return new Date().toISOString().substring(0,10)}function rf(e,t=tf){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),co(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),co(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sf{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ka()?Qh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Zd(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return oo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return oo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function co(e){return Fn(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(e){jn(new ze("platform-logger",t=>new _d(t),"PRIVATE")),jn(new ze("heartbeat",t=>new nf(t),"PRIVATE")),oe(os,so,e),oe(os,so,"esm2017"),oe("fire-js","")}of("");var af="firebase",cf="10.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oe(af,cf,"app");var uf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,Ks=Ks||{},I=uf||self;function ir(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function cn(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function lf(e){return Object.prototype.hasOwnProperty.call(e,Ur)&&e[Ur]||(e[Ur]=++hf)}var Ur="closure_uid_"+(1e9*Math.random()>>>0),hf=0;function df(e,t,n){return e.call.apply(e.bind,arguments)}function ff(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function it(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?it=df:it=ff,it.apply(null,arguments)}function wn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function X(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function Ft(){this.s=this.s,this.o=this.o}var pf=0;Ft.prototype.s=!1;Ft.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),pf!=0)&&lf(this)};Ft.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const $a=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Gs(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function uo(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ir(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function ot(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var mf=function(){if(!I.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};I.addEventListener("test",n,t),I.removeEventListener("test",n,t)}catch{}return e}();function Ke(e){return/^[\s\xa0]*$/.test(e)}function or(){var e=I.navigator;return e&&(e=e.userAgent)?e:""}function gt(e){return or().indexOf(e)!=-1}function Qs(e){return Qs[" "](e),e}Qs[" "]=function(){};function gf(e,t){var n=cp;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var _f=gt("Opera"),de=gt("Trident")||gt("MSIE"),za=gt("Edge"),us=za||de,Ha=gt("Gecko")&&!(or().toLowerCase().indexOf("webkit")!=-1&&!gt("Edge"))&&!(gt("Trident")||gt("MSIE"))&&!gt("Edge"),yf=or().toLowerCase().indexOf("webkit")!=-1&&!gt("Edge");function Ka(){var e=I.document;return e?e.documentMode:void 0}var ls;t:{var Br="",jr=function(){var e=or();if(Ha)return/rv:([^\);]+)(\)|;)/.exec(e);if(za)return/Edge\/([\d\.]+)/.exec(e);if(de)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(yf)return/WebKit\/(\S+)/.exec(e);if(_f)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(jr&&(Br=jr?jr[1]:""),de){var qr=Ka();if(qr!=null&&qr>parseFloat(Br)){ls=String(qr);break t}}ls=Br}var hs;if(I.document&&de){var lo=Ka();hs=lo||parseInt(ls,10)||void 0}else hs=void 0;var Ef=hs;function Ge(e,t){if(ot.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ha){t:{try{Qs(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Tf[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Ge.$.h.call(this)}}X(Ge,ot);var Tf={2:"touch",3:"pen",4:"mouse"};Ge.prototype.h=function(){Ge.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var un="closure_listenable_"+(1e6*Math.random()|0),vf=0;function wf(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++vf,this.fa=this.ia=!1}function ar(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ws(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function Af(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function Ga(e){const t={};for(const n in e)t[n]=e[n];return t}const ho="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qa(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<ho.length;i++)n=ho[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function cr(e){this.src=e,this.g={},this.h=0}cr.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=fs(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new wf(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function ds(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=$a(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ar(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function fs(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Js="closure_lm_"+(1e6*Math.random()|0),$r={};function Wa(e,t,n,r,s){if(r&&r.once)return Xa(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Wa(e,t[i],n,r,s);return null}return n=Zs(n),e&&e[un]?e.O(t,n,cn(r)?!!r.capture:!!r,s):Ja(e,t,n,!1,r,s)}function Ja(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=cn(s)?!!s.capture:!!s,a=Ys(e);if(a||(e[Js]=a=new cr(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=If(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)mf||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Za(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function If(){function e(n){return t.call(e.src,e.listener,n)}const t=Sf;return e}function Xa(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Xa(e,t[i],n,r,s);return null}return n=Zs(n),e&&e[un]?e.P(t,n,cn(r)?!!r.capture:!!r,s):Ja(e,t,n,!0,r,s)}function Ya(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Ya(e,t[i],n,r,s);else r=cn(r)?!!r.capture:!!r,n=Zs(n),e&&e[un]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=fs(i,n,r,s),-1<n&&(ar(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ys(e))&&(t=e.g[t.toString()],e=-1,t&&(e=fs(t,n,r,s)),(n=-1<e?t[e]:null)&&Xs(n))}function Xs(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[un])ds(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Za(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ys(t))?(ds(n,e),n.h==0&&(n.src=null,t[Js]=null)):ar(e)}}}function Za(e){return e in $r?$r[e]:$r[e]="on"+e}function Sf(e,t){if(e.fa)e=!0;else{t=new Ge(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Xs(e),e=n.call(r,t)}return e}function Ys(e){return e=e[Js],e instanceof cr?e:null}var zr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zs(e){return typeof e=="function"?e:(e[zr]||(e[zr]=function(t){return e.handleEvent(t)}),e[zr])}function J(){Ft.call(this),this.i=new cr(this),this.S=this,this.J=null}X(J,Ft);J.prototype[un]=!0;J.prototype.removeEventListener=function(e,t,n,r){Ya(this,e,t,n,r)};function tt(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new ot(t,e);else if(t instanceof ot)t.target=t.target||e;else{var s=t;t=new ot(r,e),Qa(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=An(o,r,!0,t)&&s}if(o=t.g=e,s=An(o,r,!0,t)&&s,s=An(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=An(o,r,!1,t)&&s}J.prototype.N=function(){if(J.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ar(n[r]);delete e.g[t],e.h--}}this.J=null};J.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};J.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function An(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ds(e.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ti=I.JSON.stringify;class Rf{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Cf(){var e=ei;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Pf{constructor(){this.h=this.g=null}add(t,n){const r=tc.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var tc=new Rf(()=>new bf,e=>e.reset());class bf{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Df(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Vf(e){I.setTimeout(()=>{throw e},0)}let Qe,We=!1,ei=new Pf,ec=()=>{const e=I.Promise.resolve(void 0);Qe=()=>{e.then(Nf)}};var Nf=()=>{for(var e;e=Cf();){try{e.h.call(e.g)}catch(n){Vf(n)}var t=tc;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}We=!1};function ur(e,t){J.call(this),this.h=e||1,this.g=t||I,this.j=it(this.qb,this),this.l=Date.now()}X(ur,J);E=ur.prototype;E.ga=!1;E.T=null;E.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),tt(this,"tick"),this.ga&&(ni(this),this.start()))}};E.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ni(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}E.N=function(){ur.$.N.call(this),ni(this),delete this.g};function ri(e,t,n){if(typeof e=="function")n&&(e=it(e,n));else if(e&&typeof e.handleEvent=="function")e=it(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:I.setTimeout(e,t||0)}function nc(e){e.g=ri(()=>{e.g=null,e.i&&(e.i=!1,nc(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Of extends Ft{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:nc(this)}N(){super.N(),this.g&&(I.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Je(e){Ft.call(this),this.h=e,this.g={}}X(Je,Ft);var fo=[];function rc(e,t,n,r){Array.isArray(n)||(n&&(fo[0]=n.toString()),n=fo);for(var s=0;s<n.length;s++){var i=Wa(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function sc(e){Ws(e.g,function(t,n){this.g.hasOwnProperty(n)&&Xs(t)},e),e.g={}}Je.prototype.N=function(){Je.$.N.call(this),sc(this)};Je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function lr(){this.g=!0}lr.prototype.Ea=function(){this.g=!1};function kf(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function xf(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function ie(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Mf(e,n)+(r?" "+r:"")})}function Lf(e,t){e.info(function(){return"TIMEOUT: "+t})}lr.prototype.info=function(){};function Mf(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ti(n)}catch{return t}}var Zt={},po=null;function hr(){return po=po||new J}Zt.Ta="serverreachability";function ic(e){ot.call(this,Zt.Ta,e)}X(ic,ot);function Xe(e){const t=hr();tt(t,new ic(t))}Zt.STAT_EVENT="statevent";function oc(e,t){ot.call(this,Zt.STAT_EVENT,e),this.stat=t}X(oc,ot);function ut(e){const t=hr();tt(t,new oc(t,e))}Zt.Ua="timingevent";function ac(e,t){ot.call(this,Zt.Ua,e),this.size=t}X(ac,ot);function ln(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return I.setTimeout(function(){e()},t)}var dr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},cc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function si(){}si.prototype.h=null;function mo(e){return e.h||(e.h=e.i())}function uc(){}var hn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ii(){ot.call(this,"d")}X(ii,ot);function oi(){ot.call(this,"c")}X(oi,ot);var ps;function fr(){}X(fr,si);fr.prototype.g=function(){return new XMLHttpRequest};fr.prototype.i=function(){return{}};ps=new fr;function dn(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new Je(this),this.P=Ff,e=us?125:void 0,this.V=new ur(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new lc}function lc(){this.i=null,this.g="",this.h=!1}var Ff=45e3,hc={},ms={};E=dn.prototype;E.setTimeout=function(e){this.P=e};function gs(e,t,n){e.L=1,e.A=mr(bt(t)),e.u=n,e.S=!0,dc(e,null)}function dc(e,t){e.G=Date.now(),fn(e),e.B=bt(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),Tc(n.i,"t",r),e.o=0,n=e.l.J,e.h=new lc,e.g=jc(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Of(it(e.Pa,e,e.g),e.O)),rc(e.U,e.g,"readystatechange",e.nb),t=e.I?Ga(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Xe(),kf(e.j,e.v,e.B,e.m,e.W,e.u)}E.nb=function(e){e=e.target;const t=this.M;t&&Et(e)==3?t.l():this.Pa(e)};E.Pa=function(e){try{if(e==this.g)t:{const l=Et(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||us||this.g&&(this.h.h||this.g.ja()||Eo(this.g)))){this.J||l!=4||t==7||(t==8||0>=h?Xe(3):Xe(2)),pr(this);var n=this.g.da();this.ca=n;e:if(fc(this)){var r=Eo(this.g);e="";var s=r.length,i=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qt(this),Me(this);var o="";break e}this.h.i=new I.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,xf(this.j,this.v,this.B,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ke(a)){var u=a;break e}}u=null}if(n=u)ie(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_s(this,n);else{this.i=!1,this.s=3,ut(12),qt(this),Me(this);break t}}this.S?(pc(this,l,o),us&&this.i&&l==3&&(rc(this.U,this.V,"tick",this.mb),this.V.start())):(ie(this.j,this.m,o,null),_s(this,o)),l==4&&qt(this),this.i&&!this.J&&(l==4?Mc(this.l,this):(this.i=!1,fn(this)))}else ip(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),qt(this),Me(this)}}}catch{}finally{}};function fc(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function pc(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=Uf(e,n),s==ms){t==4&&(e.s=4,ut(14),r=!1),ie(e.j,e.m,null,"[Incomplete Response]");break}else if(s==hc){e.s=4,ut(15),ie(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ie(e.j,e.m,s,null),_s(e,s);fc(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,ut(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),di(t),t.M=!0,ut(11))):(ie(e.j,e.m,n,"[Invalid Chunked Response]"),qt(e),Me(e))}E.mb=function(){if(this.g){var e=Et(this.g),t=this.g.ja();this.o<t.length&&(pr(this),pc(this,e,t),this.i&&e!=4&&fn(this))}};function Uf(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?ms:(n=Number(t.substring(n,r)),isNaN(n)?hc:(r+=1,r+n>t.length?ms:(t=t.slice(r,r+n),e.o=r+n,t)))}E.cancel=function(){this.J=!0,qt(this)};function fn(e){e.Y=Date.now()+e.P,mc(e,e.P)}function mc(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=ln(it(e.lb,e),t)}function pr(e){e.C&&(I.clearTimeout(e.C),e.C=null)}E.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(Lf(this.j,this.B),this.L!=2&&(Xe(),ut(17)),qt(this),this.s=2,Me(this)):mc(this,this.Y-e)};function Me(e){e.l.H==0||e.J||Mc(e.l,e)}function qt(e){pr(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,ni(e.V),sc(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function _s(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||ys(n.i,e))){if(!e.K&&ys(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)zn(n),Er(n);else break t;hi(n),ut(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=ln(it(n.ib,n),6e3));if(1>=Ac(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else $t(n,11)}else if((e.K||n.g==e)&&zn(n),!Ke(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let u=s[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const l=u[3];l!=null&&(n.ra=l,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=e.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ai(i,i.h),i.h=null))}if(r.F){const y=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,M(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Bc(r,r.J?r.pa:null,r.Y),o.K){Ic(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(pr(a),fn(a)),r.g=o}else xc(r);0<n.j.length&&Tr(n)}else u[0]!="stop"&&u[0]!="close"||$t(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?$t(n,7):li(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Xe(4)}catch{}}function Bf(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(ir(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function jf(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(ir(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function gc(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ir(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=jf(e),r=Bf(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var _c=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qf(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Kt(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Kt){this.h=e.h,qn(this,e.j),this.s=e.s,this.g=e.g,$n(this,e.m),this.l=e.l;var t=e.i,n=new Ye;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),go(this,n),this.o=e.o}else e&&(t=String(e).match(_c))?(this.h=!1,qn(this,t[1]||"",!0),this.s=Ne(t[2]||""),this.g=Ne(t[3]||"",!0),$n(this,t[4]),this.l=Ne(t[5]||"",!0),go(this,t[6]||"",!0),this.o=Ne(t[7]||"")):(this.h=!1,this.i=new Ye(null,this.h))}Kt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Oe(t,_o,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Oe(t,_o,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Oe(n,n.charAt(0)=="/"?Hf:zf,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Oe(n,Gf)),e.join("")};function bt(e){return new Kt(e)}function qn(e,t,n){e.j=n?Ne(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function $n(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function go(e,t,n){t instanceof Ye?(e.i=t,Qf(e.i,e.h)):(n||(t=Oe(t,Kf)),e.i=new Ye(t,e.h))}function M(e,t,n){e.i.set(t,n)}function mr(e){return M(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ne(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Oe(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,$f),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function $f(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var _o=/[#\/\?@]/g,zf=/[#\?:]/g,Hf=/[#\?]/g,Kf=/[#\?@]/g,Gf=/#/g;function Ye(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ut(e){e.g||(e.g=new Map,e.h=0,e.i&&qf(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}E=Ye.prototype;E.add=function(e,t){Ut(this),this.i=null,e=ve(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function yc(e,t){Ut(e),t=ve(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Ec(e,t){return Ut(e),t=ve(e,t),e.g.has(t)}E.forEach=function(e,t){Ut(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};E.ta=function(){Ut(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};E.Z=function(e){Ut(this);let t=[];if(typeof e=="string")Ec(this,e)&&(t=t.concat(this.g.get(ve(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};E.set=function(e,t){return Ut(this),this.i=null,e=ve(this,e),Ec(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};E.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function Tc(e,t,n){yc(e,t),0<n.length&&(e.i=null,e.g.set(ve(e,t),Gs(n)),e.h+=n.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function ve(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Qf(e,t){t&&!e.j&&(Ut(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(yc(this,r),Tc(this,s,n))},e)),e.j=t}var Wf=class{constructor(e,t){this.g=e,this.map=t}};function vc(e){this.l=e||Jf,I.PerformanceNavigationTiming?(e=I.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(I.g&&I.g.Ka&&I.g.Ka()&&I.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Jf=10;function wc(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Ac(e){return e.h?1:e.g?e.g.size:0}function ys(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function ai(e,t){e.g?e.g.add(t):e.h=t}function Ic(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}vc.prototype.cancel=function(){if(this.i=Sc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Sc(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Gs(e.i)}var Xf=class{stringify(e){return I.JSON.stringify(e,void 0)}parse(e){return I.JSON.parse(e,void 0)}};function Yf(){this.g=new Xf}function Zf(e,t,n){const r=n||"";try{gc(e,function(s,i){let o=s;cn(s)&&(o=ti(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function tp(e,t){const n=new lr;if(I.Image){const r=new Image;r.onload=wn(In,n,r,"TestLoadImage: loaded",!0,t),r.onerror=wn(In,n,r,"TestLoadImage: error",!1,t),r.onabort=wn(In,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=wn(In,n,r,"TestLoadImage: timeout",!1,t),I.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function In(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function gr(e){this.l=e.ec||null,this.j=e.ob||!1}X(gr,si);gr.prototype.g=function(){return new _r(this.l,this.j)};gr.prototype.i=function(e){return function(){return e}}({});function _r(e,t){J.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=ci,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}X(_r,J);var ci=0;E=_r.prototype;E.open=function(e,t){if(this.readyState!=ci)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ze(this)};E.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||I).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,pn(this)),this.readyState=ci};E.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ze(this)),this.g&&(this.readyState=3,Ze(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof I.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rc(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function Rc(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}E.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?pn(this):Ze(this),this.readyState==3&&Rc(this)}};E.Za=function(e){this.g&&(this.response=this.responseText=e,pn(this))};E.Ya=function(e){this.g&&(this.response=e,pn(this))};E.ka=function(){this.g&&pn(this)};function pn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ze(e)}E.setRequestHeader=function(e,t){this.v.append(e,t)};E.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ze(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(_r.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var ep=I.JSON.parse;function j(e){J.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Cc,this.L=this.M=!1}X(j,J);var Cc="",np=/^https?$/i,rp=["POST","PUT"];E=j.prototype;E.Oa=function(e){this.M=e};E.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():ps.g(),this.C=this.u?mo(this.u):mo(ps),this.g.onreadystatechange=it(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){yo(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=I.FormData&&e instanceof I.FormData,!(0<=$a(rp,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Dc(this),0<this.B&&((this.L=sp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=it(this.ua,this)):this.A=ri(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){yo(this,i)}};function sp(e){return de&&typeof e.timeout=="number"&&e.ontimeout!==void 0}E.ua=function(){typeof Ks<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tt(this,"timeout"),this.abort(8))};function yo(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Pc(e),yr(e)}function Pc(e){e.F||(e.F=!0,tt(e,"complete"),tt(e,"error"))}E.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,tt(this,"complete"),tt(this,"abort"),yr(this))};E.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yr(this,!0)),j.$.N.call(this)};E.La=function(){this.s||(this.G||this.v||this.l?bc(this):this.kb())};E.kb=function(){bc(this)};function bc(e){if(e.h&&typeof Ks<"u"&&(!e.C[1]||Et(e)!=4||e.da()!=2)){if(e.v&&Et(e)==4)ri(e.La,0,e);else if(tt(e,"readystatechange"),Et(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(_c)[1]||null;!s&&I.self&&I.self.location&&(s=I.self.location.protocol.slice(0,-1)),r=!np.test(s?s.toLowerCase():"")}n=r}if(n)tt(e,"complete"),tt(e,"success");else{e.m=6;try{var i=2<Et(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",Pc(e)}}finally{yr(e)}}}}function yr(e,t){if(e.g){Dc(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||tt(e,"ready");try{n.onreadystatechange=r}catch{}}}function Dc(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(I.clearTimeout(e.A),e.A=null)}E.isActive=function(){return!!this.g};function Et(e){return e.g?e.g.readyState:0}E.da=function(){try{return 2<Et(this)?this.g.status:-1}catch{return-1}};E.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),ep(t)}};function Eo(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case Cc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function ip(e){const t={};e=(e.g&&2<=Et(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(Ke(e[r]))continue;var n=Df(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}Af(t,function(r){return r.join(", ")})}E.Ia=function(){return this.m};E.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Vc(e){let t="";return Ws(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function ui(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Vc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):M(e,t,n))}function Pe(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Nc(e){this.Ga=0,this.j=[],this.l=new lr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Pe("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Pe("baseRetryDelayMs",5e3,e),this.hb=Pe("retryDelaySeedMs",1e4,e),this.eb=Pe("forwardChannelMaxRetries",2,e),this.xa=Pe("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new vc(e&&e.concurrentRequestLimit),this.Ja=new Yf,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}E=Nc.prototype;E.ra=8;E.H=1;function li(e){if(Oc(e),e.H==3){var t=e.W++,n=bt(e.I);if(M(n,"SID",e.K),M(n,"RID",t),M(n,"TYPE","terminate"),mn(e,n),t=new dn(e,e.l,t),t.L=2,t.A=mr(bt(n)),n=!1,I.navigator&&I.navigator.sendBeacon)try{n=I.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&I.Image&&(new Image().src=t.A,n=!0),n||(t.g=jc(t.l,null),t.g.ha(t.A)),t.G=Date.now(),fn(t)}Uc(e)}function Er(e){e.g&&(di(e),e.g.cancel(),e.g=null)}function Oc(e){Er(e),e.u&&(I.clearTimeout(e.u),e.u=null),zn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&I.clearTimeout(e.m),e.m=null)}function Tr(e){if(!wc(e.i)&&!e.m){e.m=!0;var t=e.Na;Qe||ec(),We||(Qe(),We=!0),ei.add(t,e),e.C=0}}function op(e,t){return Ac(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=ln(it(e.Na,e,t),Fc(e,e.C)),e.C++,!0)}E.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new dn(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Ga(i),Qa(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=kc(this,s,t),n=bt(this.I),M(n,"RID",e),M(n,"CVER",22),this.F&&M(n,"X-HTTP-Session-Id",this.F),mn(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Vc(i)))+"&"+t:this.o&&ui(n,this.o,i)),ai(this.i,s),this.bb&&M(n,"TYPE","init"),this.P?(M(n,"$req",t),M(n,"SID","null"),s.aa=!0,gs(s,n,null)):gs(s,n,t),this.H=2}}else this.H==3&&(e?To(this,e):this.j.length==0||wc(this.i)||To(this))};function To(e,t){var n;t?n=t.m:n=e.W++;const r=bt(e.I);M(r,"SID",e.K),M(r,"RID",n),M(r,"AID",e.V),mn(e,r),e.o&&e.s&&ui(r,e.o,e.s),n=new dn(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=kc(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),ai(e.i,n),gs(n,r,t)}function mn(e,t){e.na&&Ws(e.na,function(n,r){M(t,r,n)}),e.h&&gc({},function(n,r){M(t,r,n)})}function kc(e,t,n){n=Math.min(e.j.length,n);var r=e.h?it(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let u=s[c].g;const l=s[c].map;if(u-=i,0>u)i=Math.max(0,s[c].g-100),a=!1;else try{Zf(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function xc(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Qe||ec(),We||(Qe(),We=!0),ei.add(t,e),e.A=0}}function hi(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=ln(it(e.Ma,e),Fc(e,e.A)),e.A++,!0)}E.Ma=function(){if(this.u=null,Lc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=ln(it(this.jb,this),e)}};E.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ut(10),Er(this),Lc(this))};function di(e){e.B!=null&&(I.clearTimeout(e.B),e.B=null)}function Lc(e){e.g=new dn(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=bt(e.wa);M(t,"RID","rpc"),M(t,"SID",e.K),M(t,"AID",e.V),M(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&M(t,"TO",e.qa),M(t,"TYPE","xmlhttp"),mn(e,t),e.o&&e.s&&ui(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=mr(bt(t)),n.u=null,n.S=!0,dc(n,e)}E.ib=function(){this.v!=null&&(this.v=null,Er(this),hi(this),ut(19))};function zn(e){e.v!=null&&(I.clearTimeout(e.v),e.v=null)}function Mc(e,t){var n=null;if(e.g==t){zn(e),di(e),e.g=null;var r=2}else if(ys(e.i,t))n=t.F,Ic(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=hr(),tt(r,new ac(r,n)),Tr(e)}else xc(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&op(e,t)||r==2&&hi(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:$t(e,5);break;case 4:$t(e,10);break;case 3:$t(e,6);break;default:$t(e,2)}}}function Fc(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function $t(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=it(e.pb,e);n||(n=new Kt("//www.google.com/images/cleardot.gif"),I.location&&I.location.protocol=="http"||qn(n,"https"),mr(n)),tp(n.toString(),r)}else ut(2);e.H=0,e.h&&e.h.za(t),Uc(e),Oc(e)}E.pb=function(e){e?(this.l.info("Successfully pinged google.com"),ut(2)):(this.l.info("Failed to ping google.com"),ut(1))};function Uc(e){if(e.H=0,e.ma=[],e.h){const t=Sc(e.i);(t.length!=0||e.j.length!=0)&&(uo(e.ma,t),uo(e.ma,e.j),e.i.i.length=0,Gs(e.j),e.j.length=0),e.h.ya()}}function Bc(e,t,n){var r=n instanceof Kt?bt(n):new Kt(n);if(r.g!="")t&&(r.g=t+"."+r.g),$n(r,r.m);else{var s=I.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Kt(null);r&&qn(i,r),t&&(i.g=t),s&&$n(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&M(r,n,t),M(r,"VER",e.ra),mn(e,r),r}function jc(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new j(new gr({ob:n})):new j(e.va),t.Oa(e.J),t}E.isActive=function(){return!!this.h&&this.h.isActive(this)};function qc(){}E=qc.prototype;E.Ba=function(){};E.Aa=function(){};E.za=function(){};E.ya=function(){};E.isActive=function(){return!0};E.Va=function(){};function Hn(){if(de&&!(10<=Number(Ef)))throw Error("Environmental error: no available transport.")}Hn.prototype.g=function(e,t){return new ht(e,t)};function ht(e,t){J.call(this),this.g=new Nc(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!Ke(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ke(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new we(this)}X(ht,J);ht.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;ut(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Bc(e,null,e.Y),Tr(e)};ht.prototype.close=function(){li(this.g)};ht.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=ti(e),e=n);t.j.push(new Wf(t.fb++,e)),t.H==3&&Tr(t)};ht.prototype.N=function(){this.g.h=null,delete this.j,li(this.g),delete this.g,ht.$.N.call(this)};function $c(e){ii.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}X($c,ii);function zc(){oi.call(this),this.status=1}X(zc,oi);function we(e){this.g=e}X(we,qc);we.prototype.Ba=function(){tt(this.g,"a")};we.prototype.Aa=function(e){tt(this.g,new $c(e))};we.prototype.za=function(e){tt(this.g,new zc)};we.prototype.ya=function(){tt(this.g,"b")};function ap(){this.blockSize=-1}function mt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}X(mt,ap);mt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Hr(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}mt.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)Hr(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){Hr(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){Hr(this,r),s=0;break}}this.h=s,this.i+=t};mt.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function L(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var cp={};function fi(e){return-128<=e&&128>e?gf(e,function(t){return new L([t|0],0>t?-1:0)}):new L([e|0],0>e?-1:0)}function Tt(e){if(isNaN(e)||!isFinite(e))return ae;if(0>e)return Z(Tt(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=Es;return new L(t,0)}function Hc(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Z(Hc(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Tt(Math.pow(t,8)),r=ae,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=Tt(Math.pow(t,i)),r=r.R(i).add(Tt(o))):(r=r.R(n),r=r.add(Tt(o)))}return r}var Es=4294967296,ae=fi(0),Ts=fi(1),vo=fi(16777216);E=L.prototype;E.ea=function(){if(dt(this))return-Z(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:Es+r)*t,t*=Es}return e};E.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Rt(this))return"0";if(dt(this))return"-"+Z(this).toString(e);for(var t=Tt(Math.pow(e,6)),n=this,r="";;){var s=Gn(n,t).g;n=Kn(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Rt(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};E.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Rt(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function dt(e){return e.h==-1}E.X=function(e){return e=Kn(this,e),dt(e)?-1:Rt(e)?0:1};function Z(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new L(n,~e.h).add(Ts)}E.abs=function(){return dt(this)?Z(this):this};E.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new L(n,n[n.length-1]&-2147483648?-1:0)};function Kn(e,t){return e.add(Z(t))}E.R=function(e){if(Rt(this)||Rt(e))return ae;if(dt(this))return dt(e)?Z(this).R(Z(e)):Z(Z(this).R(e));if(dt(e))return Z(this.R(Z(e)));if(0>this.X(vo)&&0>e.X(vo))return Tt(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,c=e.D(s)&65535;n[2*r+2*s]+=o*c,Sn(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Sn(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Sn(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Sn(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new L(n,0)};function Sn(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function be(e,t){this.g=e,this.h=t}function Gn(e,t){if(Rt(t))throw Error("division by zero");if(Rt(e))return new be(ae,ae);if(dt(e))return t=Gn(Z(e),t),new be(Z(t.g),Z(t.h));if(dt(t))return t=Gn(e,Z(t)),new be(Z(t.g),t.h);if(30<e.g.length){if(dt(e)||dt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ts,r=t;0>=r.X(e);)n=wo(n),r=wo(r);var s=ee(n,1),i=ee(r,1);for(r=ee(r,2),n=ee(n,2);!Rt(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=ee(r,1),n=ee(n,1)}return t=Kn(e,s.R(t)),new be(s,t)}for(s=ae;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Tt(n),o=i.R(t);dt(o)||0<o.X(e);)n-=r,i=Tt(n),o=i.R(t);Rt(i)&&(i=Ts),s=s.add(i),e=Kn(e,o)}return new be(s,e)}E.gb=function(e){return Gn(this,e).h};E.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new L(n,this.h&e.h)};E.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new L(n,this.h|e.h)};E.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new L(n,this.h^e.h)};function wo(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new L(n,e.h)}function ee(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new L(s,e.h)}Hn.prototype.createWebChannel=Hn.prototype.g;ht.prototype.send=ht.prototype.u;ht.prototype.open=ht.prototype.m;ht.prototype.close=ht.prototype.close;dr.NO_ERROR=0;dr.TIMEOUT=8;dr.HTTP_ERROR=6;cc.COMPLETE="complete";uc.EventType=hn;hn.OPEN="a";hn.CLOSE="b";hn.ERROR="c";hn.MESSAGE="d";J.prototype.listen=J.prototype.O;j.prototype.listenOnce=j.prototype.P;j.prototype.getLastError=j.prototype.Sa;j.prototype.getLastErrorCode=j.prototype.Ia;j.prototype.getStatus=j.prototype.da;j.prototype.getResponseJson=j.prototype.Wa;j.prototype.getResponseText=j.prototype.ja;j.prototype.send=j.prototype.ha;j.prototype.setWithCredentials=j.prototype.Oa;mt.prototype.digest=mt.prototype.l;mt.prototype.reset=mt.prototype.reset;mt.prototype.update=mt.prototype.j;L.prototype.add=L.prototype.add;L.prototype.multiply=L.prototype.R;L.prototype.modulo=L.prototype.gb;L.prototype.compare=L.prototype.X;L.prototype.toNumber=L.prototype.ea;L.prototype.toString=L.prototype.toString;L.prototype.getBits=L.prototype.D;L.fromNumber=Tt;L.fromString=Hc;var up=function(){return new Hn},lp=function(){return hr()},Kr=dr,hp=cc,dp=Zt,Ao={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Rn=uc,fp=j,pp=mt,ce=L;const Io="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ae="10.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Ma("@firebase/firestore");function De(){return Jt.logLevel}function T(e,...t){if(Jt.logLevel<=D.DEBUG){const n=t.map(pi);Jt.debug(`Firestore (${Ae}): ${e}`,...n)}}function wt(e,...t){if(Jt.logLevel<=D.ERROR){const n=t.map(pi);Jt.error(`Firestore (${Ae}): ${e}`,...n)}}function fe(e,...t){if(Jt.logLevel<=D.WARN){const n=t.map(pi);Jt.warn(`Firestore (${Ae}): ${e}`,...n)}}function pi(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e="Unexpected state"){const t=`FIRESTORE (${Ae}) INTERNAL ASSERTION FAILED: `+e;throw wt(t),new Error(t)}function K(e,t){e||R()}function N(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Te{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mp{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class gp{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _p{constructor(t){this.t=t,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Gt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Gt,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;t.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{T("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(T("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Gt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(T("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string"),new Kc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return K(t===null||typeof t=="string"),new rt(t)}}class yp{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ep{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new yp(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Tp{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vp{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&T("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,T("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{T("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):T("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(K(typeof n.token=="string"),this.R=n.token,new Tp(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=wp(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function O(e,t){return e<t?-1:e>t?1:0}function pe(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return lt.fromMillis(Date.now())}static fromDate(t){return lt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new lt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?O(this.nanoseconds,t.nanoseconds):O(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new lt(0,0))}static max(){return new S(new lt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,n,r){n===void 0?n=0:n>t.length&&R(),r===void 0?r=t.length-n:r>t.length-n&&R(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return tn.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof tn?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class B extends tn{construct(t,n,r){return new B(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new w(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new B(n)}static emptyPath(){return new B([])}}const Ap=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends tn{construct(t,n,r){return new ct(t,n,r)}static isValidIdentifier(t){return Ap.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ct(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new w(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new w(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new w(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(n)}static emptyPath(){return new ct([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(t){this.path=t}static fromPath(t){return new A(B.fromString(t))}static fromName(t){return new A(B.fromString(t).popFirst(5))}static empty(){return new A(B.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&B.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return B.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new A(new B(t.slice()))}}function Ip(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=S.fromTimestamp(r===1e9?new lt(n+1,0):new lt(n,r));return new xt(s,A.empty(),t)}function Sp(e){return new xt(e.readTime,e.key,-1)}class xt{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new xt(S.min(),A.empty(),-1)}static max(){return new xt(S.max(),A.empty(),-1)}}function Rp(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=A.comparator(e.documentKey,t.documentKey),n!==0?n:O(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(e){if(e.code!==g.FAILED_PRECONDITION||e.message!==Cp)throw e;T("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&R(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new p((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof p?n:p.resolve(n)}catch(n){return p.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):p.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):p.reject(n)}static resolve(t){return new p((n,r)=>{n(t)})}static reject(t){return new p((n,r)=>{r(t)})}static waitFor(t){return new p((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(t){let n=p.resolve(!1);for(const r of t)n=n.next(s=>s?p.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new p((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(t[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(t,n){return new p((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new Gt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Fe(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=_i(r.target.error);this.V.reject(new Fe(t,s))}}static open(t,n,r,s){try{return new gi(n,t.transaction(s,r))}catch(i){throw new Fe(n,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(T("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new Dp(n)}}class zt{constructor(t,n,r){this.name=t,this.version=n,this.p=r,zt.S(Un())===12.2&&wt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return T("SimpleDb","Removing database:",t),jt(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!ka())return!1;if(zt.C())return!0;const t=Un(),n=zt.S(t),r=0<n&&n<10,s=zt.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(T("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Fe(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new w(g.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new w(g.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Fe(t,o))},s.onupgradeneeded=i=>{T("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{T("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(t){this.L=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=gi.open(this.db,t,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),p.reject(u))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(T("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class bp{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return jt(this.k.delete())}}class Fe extends w{constructor(t,n){super(g.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function gn(e){return e.name==="IndexedDbTransactionError"}class Dp{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(T("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(T("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),jt(r)}add(t){return T("SimpleDb","ADD",this.store.name,t,t),jt(this.store.add(t))}get(t){return jt(this.store.get(t)).next(n=>(n===void 0&&(n=null),T("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return T("SimpleDb","DELETE",this.store.name,t),jt(this.store.delete(t))}count(){return T("SimpleDb","COUNT",this.store.name),jt(this.store.count())}W(t,n){const r=this.options(t,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new p((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new p((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,n){T("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const s=this.cursor(r);return this.G(s,n)}Z(t){const n=this.cursor({});return new p((r,s)=>{n.onerror=i=>{const o=_i(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new p((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new bp(a),u=n(a.primaryKey,a.value,c);if(u instanceof p){const l=u.catch(h=>(c.done(),p.reject(h)));r.push(l)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>p.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function jt(e){return new p((t,n)=>{e.onsuccess=r=>{const s=r.target.result;t(s)},e.onerror=r=>{const s=_i(r.target.error);n(s)}})}let So=!1;function _i(e){const t=zt.S(Un());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new w("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return So||(So=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}yi._e=-1;function vr(e){return e==null}function vs(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function wr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Vp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,n){this.comparator=t,this.root=n||Y.EMPTY}insert(t,n){return new q(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Y.BLACK,null,null))}remove(t){return new q(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Y.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Cn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Cn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Cn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Cn(this.root,t,this.comparator,!0)}}class Cn{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Y{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Y.RED,this.left=s??Y.EMPTY,this.right=i??Y.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Y(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Y.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Y.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Y.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Y.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw R();const t=this.left.check();if(t!==this.right.check())throw R();return t+(this.isRed()?0:1)}}Y.EMPTY=null,Y.RED=!0,Y.BLACK=!1;Y.EMPTY=new class{constructor(){this.size=0}get key(){throw R()}get value(){throw R()}get color(){throw R()}get left(){throw R()}get right(){throw R()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Y(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.comparator=t,this.data=new q(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Co(this.data.getIterator())}getIteratorFrom(t){return new Co(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof et)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new et(this.comparator);return n.data=t,n}}class Co{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new Vt([])}unionWith(t){let n=new et(ct.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new Vt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return pe(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Qc("Invalid base64 string: "+i):i}}(t);return new at(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new at(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return O(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}at.EMPTY_BYTE_STRING=new at("");const Np=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lt(e){if(K(!!e),typeof e=="string"){let t=0;const n=Np.exec(e);if(K(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:H(e.seconds),nanos:H(e.nanos)}}function H(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Xt(e){return typeof e=="string"?at.fromBase64String(e):at.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Ti(e){const t=e.mapValue.fields.__previous_value__;return Ei(t)?Ti(t):t}function en(e){const t=Lt(e.mapValue.fields.__local_write_time__.timestampValue);return new lt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(t,n,r,s,i,o,a,c,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class nn{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new nn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof nn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ei(e)?4:kp(e)?9007199254740991:10:R()}function At(e,t){if(e===t)return!0;const n=Yt(e);if(n!==Yt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return en(e).isEqual(en(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Lt(s.timestampValue),a=Lt(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Xt(s.bytesValue).isEqual(Xt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return H(s.geoPointValue.latitude)===H(i.geoPointValue.latitude)&&H(s.geoPointValue.longitude)===H(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return H(s.integerValue)===H(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=H(s.doubleValue),a=H(i.doubleValue);return o===a?vs(o)===vs(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return pe(e.arrayValue.values||[],t.arrayValue.values||[],At);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Ro(o)!==Ro(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!At(o[c],a[c])))return!1;return!0}(e,t);default:return R()}}function rn(e,t){return(e.values||[]).find(n=>At(n,t))!==void 0}function me(e,t){if(e===t)return 0;const n=Yt(e),r=Yt(t);if(n!==r)return O(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return O(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=H(i.integerValue||i.doubleValue),c=H(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(e,t);case 3:return Po(e.timestampValue,t.timestampValue);case 4:return Po(en(e),en(t));case 5:return O(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Xt(i),c=Xt(o);return a.compareTo(c)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const l=O(a[u],c[u]);if(l!==0)return l}return O(a.length,c.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=O(H(i.latitude),H(o.latitude));return a!==0?a:O(H(i.longitude),H(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let u=0;u<a.length&&u<c.length;++u){const l=me(a[u],c[u]);if(l)return l}return O(a.length,c.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===Pn.mapValue&&o===Pn.mapValue)return 0;if(i===Pn.mapValue)return 1;if(o===Pn.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},l=Object.keys(u);c.sort(),l.sort();for(let h=0;h<c.length&&h<l.length;++h){const f=O(c[h],l[h]);if(f!==0)return f;const m=me(a[c[h]],u[l[h]]);if(m!==0)return m}return O(c.length,l.length)}(e.mapValue,t.mapValue);default:throw R()}}function Po(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return O(e,t);const n=Lt(e),r=Lt(t),s=O(n.seconds,r.seconds);return s!==0?s:O(n.nanos,r.nanos)}function ge(e){return ws(e)}function ws(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Lt(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Xt(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return A.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ws(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ws(n.fields[o])}`;return s+"}"}(e.mapValue):R()}function As(e){return!!e&&"integerValue"in e}function vi(e){return!!e&&"arrayValue"in e}function bo(e){return!!e&&"nullValue"in e}function Do(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Gr(e){return!!e&&"mapValue"in e}function Ue(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return wr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=Ue(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ue(e.arrayValue.values[n]);return t}return Object.assign({},e)}function kp(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.value=t}static empty(){return new _t({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Gr(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ue(n)}setAll(t){let n=ct.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ue(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());Gr(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return At(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];Gr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){wr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new _t(Ue(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new st(t,0,S.min(),S.min(),S.min(),_t.empty(),0)}static newFoundDocument(t,n,r,s){return new st(t,1,n,S.min(),r,s,0)}static newNoDocument(t,n){return new st(t,2,n,S.min(),S.min(),_t.empty(),0)}static newUnknownDocument(t,n){return new st(t,3,n,S.min(),S.min(),_t.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(S.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=_t.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=_t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=S.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof st&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t,n){this.position=t,this.inclusive=n}}function Vo(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=A.comparator(A.fromName(o.referenceValue),n.key):r=me(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function No(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!At(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,n="asc"){this.field=t,this.dir=n}}function xp(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{}class G extends Wc{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new Mp(t,n,r):n==="array-contains"?new Bp(t,r):n==="in"?new jp(t,r):n==="not-in"?new qp(t,r):n==="array-contains-any"?new $p(t,r):new G(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new Fp(t,r):new Up(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(me(n,this.value)):n!==null&&Yt(this.value)===Yt(n)&&this.matchesComparison(me(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return R()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class It extends Wc{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new It(t,n)}matches(t){return Jc(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Jc(e){return e.op==="and"}function Xc(e){return Lp(e)&&Jc(e)}function Lp(e){for(const t of e.filters)if(t instanceof It)return!1;return!0}function Is(e){if(e instanceof G)return e.field.canonicalString()+e.op.toString()+ge(e.value);if(Xc(e))return e.filters.map(t=>Is(t)).join(",");{const t=e.filters.map(n=>Is(n)).join(",");return`${e.op}(${t})`}}function Yc(e,t){return e instanceof G?function(r,s){return s instanceof G&&r.op===s.op&&r.field.isEqual(s.field)&&At(r.value,s.value)}(e,t):e instanceof It?function(r,s){return s instanceof It&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Yc(o,s.filters[a]),!0):!1}(e,t):void R()}function Zc(e){return e instanceof G?function(n){return`${n.field.canonicalString()} ${n.op} ${ge(n.value)}`}(e):e instanceof It?function(n){return n.op.toString()+" {"+n.getFilters().map(Zc).join(" ,")+"}"}(e):"Filter"}class Mp extends G{constructor(t,n,r){super(t,n,r),this.key=A.fromName(r.referenceValue)}matches(t){const n=A.comparator(t.key,this.key);return this.matchesComparison(n)}}class Fp extends G{constructor(t,n){super(t,"in",n),this.keys=tu("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Up extends G{constructor(t,n){super(t,"not-in",n),this.keys=tu("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function tu(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>A.fromName(r.referenceValue))}class Bp extends G{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return vi(n)&&rn(n.arrayValue,this.value)}}class jp extends G{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&rn(this.value.arrayValue,n)}}class qp extends G{constructor(t,n){super(t,"not-in",n)}matches(t){if(rn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!rn(this.value.arrayValue,n)}}class $p extends G{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!vi(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>rn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Oo(e,t=null,n=[],r=[],s=null,i=null,o=null){return new zp(e,t,n,r,s,i,o)}function wi(e){const t=N(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Is(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),vr(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>ge(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>ge(r)).join(",")),t.ce=n}return t.ce}function Ai(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!xp(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Yc(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!No(e.startAt,t.startAt)&&No(e.endAt,t.endAt)}function Ss(e){return A.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Hp(e,t,n,r,s,i,o,a){return new Ar(e,t,n,r,s,i,o,a)}function Ii(e){return new Ar(e)}function ko(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Kp(e){return e.collectionGroup!==null}function Be(e){const t=N(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new et(ct.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new Wn(i,r))}),n.has(ct.keyField().canonicalString())||t.le.push(new Wn(ct.keyField(),r))}return t.le}function vt(e){const t=N(e);return t.he||(t.he=Gp(t,Be(e))),t.he}function Gp(e,t){if(e.limitType==="F")return Oo(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Wn(s.field,i)});const n=e.endAt?new Qn(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Qn(e.startAt.position,e.startAt.inclusive):null;return Oo(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Rs(e,t,n){return new Ar(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ir(e,t){return Ai(vt(e),vt(t))&&e.limitType===t.limitType}function eu(e){return`${wi(vt(e))}|lt:${e.limitType}`}function ne(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Zc(s)).join(", ")}]`),vr(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ge(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ge(s)).join(",")),`Target(${r})`}(vt(e))}; limitType=${e.limitType})`}function Sr(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):A.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of Be(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,c){const u=Vo(o,a,c);return o.inclusive?u<=0:u<0}(r.startAt,Be(r),s)||r.endAt&&!function(o,a,c){const u=Vo(o,a,c);return o.inclusive?u>=0:u>0}(r.endAt,Be(r),s))}(e,t)}function Qp(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function nu(e){return(t,n)=>{let r=!1;for(const s of Be(e)){const i=Wp(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Wp(e,t,n){const r=e.field.isKeyField()?A.comparator(t.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?me(c,u):R()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return R()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){wr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Vp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=new q(A.comparator);function Mt(){return Jp}const ru=new q(A.comparator);function ke(...e){let t=ru;for(const n of e)t=t.insert(n.key,n);return t}function Xp(e){let t=ru;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Ht(){return je()}function su(){return je()}function je(){return new Ie(e=>e.toString(),(e,t)=>e.isEqual(t))}const Yp=new et(A.comparator);function V(...e){let t=Yp;for(const n of e)t=t.add(n);return t}const Zp=new et(O);function tm(){return Zp}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vs(t)?"-0":t}}function nm(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this._=void 0}}function rm(e,t,n){return e instanceof Cs?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ei(i)&&(i=Ti(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof Jn?iu(e,t):e instanceof Xn?ou(e,t):function(s,i){const o=im(s,i),a=xo(o)+xo(s.Ie);return As(o)&&As(s.Ie)?nm(a):em(s.serializer,a)}(e,t)}function sm(e,t,n){return e instanceof Jn?iu(e,t):e instanceof Xn?ou(e,t):n}function im(e,t){return e instanceof Ps?function(r){return As(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Cs extends Rr{}class Jn extends Rr{constructor(t){super(),this.elements=t}}function iu(e,t){const n=au(t);for(const r of e.elements)n.some(s=>At(s,r))||n.push(r);return{arrayValue:{values:n}}}class Xn extends Rr{constructor(t){super(),this.elements=t}}function ou(e,t){let n=au(t);for(const r of e.elements)n=n.filter(s=>!At(s,r));return{arrayValue:{values:n}}}class Ps extends Rr{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function xo(e){return H(e.integerValue||e.doubleValue)}function au(e){return vi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function om(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof Jn&&s instanceof Jn||r instanceof Xn&&s instanceof Xn?pe(r.elements,s.elements,At):r instanceof Ps&&s instanceof Ps?At(r.Ie,s.Ie):r instanceof Cs&&s instanceof Cs}(e.transform,t.transform)}class Qt{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Qt}static exists(t){return new Qt(void 0,t)}static updateTime(t){return new Qt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function On(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Si{}function cu(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new cm(e.key,Qt.none()):new Ri(e.key,e.data,Qt.none());{const n=e.data,r=_t.empty();let s=new et(ct.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Cr(e.key,r,new Vt(s.toArray()),Qt.none())}}function am(e,t,n){e instanceof Ri?function(s,i,o){const a=s.value.clone(),c=Mo(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Cr?function(s,i,o){if(!On(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Mo(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(uu(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function qe(e,t,n,r){return e instanceof Ri?function(i,o,a,c){if(!On(i.precondition,o))return a;const u=i.value.clone(),l=Fo(i.fieldTransforms,c,o);return u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof Cr?function(i,o,a,c){if(!On(i.precondition,o))return a;const u=Fo(i.fieldTransforms,c,o),l=o.data;return l.setAll(uu(i)),l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return On(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function Lo(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&pe(r,s,(i,o)=>om(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Ri extends Si{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cr extends Si{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function uu(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Mo(e,t,n){const r=new Map;K(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,sm(o,a,n[s]))}return r}function Fo(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,rm(i,o,t))}return r}class cm extends Si{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&am(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=qe(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=qe(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=su();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=cu(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(S.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),V())}isEqual(t){return this.batchId===t.batchId&&pe(this.mutations,t.mutations,(n,r)=>Lo(n,r))&&pe(this.baseMutations,t.baseMutations,(n,r)=>Lo(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var z,C;function lu(e){if(e===void 0)return wt("GRPC error has no .code"),g.UNKNOWN;switch(e){case z.OK:return g.OK;case z.CANCELLED:return g.CANCELLED;case z.UNKNOWN:return g.UNKNOWN;case z.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case z.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case z.INTERNAL:return g.INTERNAL;case z.UNAVAILABLE:return g.UNAVAILABLE;case z.UNAUTHENTICATED:return g.UNAUTHENTICATED;case z.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case z.NOT_FOUND:return g.NOT_FOUND;case z.ALREADY_EXISTS:return g.ALREADY_EXISTS;case z.PERMISSION_DENIED:return g.PERMISSION_DENIED;case z.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case z.ABORTED:return g.ABORTED;case z.OUT_OF_RANGE:return g.OUT_OF_RANGE;case z.UNIMPLEMENTED:return g.UNIMPLEMENTED;case z.DATA_LOSS:return g.DATA_LOSS;default:return R()}}(C=z||(z={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=new ce([4294967295,4294967295],0);function Uo(e){const t=dm().encode(e),n=new pp;return n.update(t),new Uint8Array(n.digest())}function Bo(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new ce([n,r],0),new ce([s,i],0)]}class Ci{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new xe(`Invalid padding: ${n}`);if(r<0)throw new xe(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new xe(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new xe(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=ce.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(ce.fromNumber(r)));return s.compare(fm)===1&&(s=new ce([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=Uo(t),[r,s]=Bo(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new Ci(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=Uo(t),[r,s]=Bo(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class xe extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,_n.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Pr(S.min(),s,new q(O),Mt(),V())}}class _n{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new _n(r,n,V(),V(),V())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class hu{constructor(t,n){this.targetId=t,this.fe=n}}class du{constructor(t,n,r=at.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class jo{constructor(){this.ge=0,this.pe=$o(),this.ye=at.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=V(),n=V(),r=V();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:R()}}),new _n(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=$o()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,K(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class pm{constructor(t){this.Be=t,this.ke=new Map,this.qe=Mt(),this.Qe=qo(),this.Ke=new q(O)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:R()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Ss(i))if(r===0){const o=new A(i.path);this.We(n,o,st.newNoDocument(o,S.min()))}else K(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),c=a?this.et(a,t,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Xt(r).toUint8Array()}catch(c){if(c instanceof Qc)return fe("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Ci(o,s,i)}catch(c){return fe(c instanceof xe?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Ss(a.target)){const c=new A(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,st.newNoDocument(c,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=V();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new Pr(t,n,this.Ke,this.qe,r);return this.qe=Mt(),this.Qe=qo(),this.Ke=new q(O),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new jo,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new et(O),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||T("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Be._t(t)}He(t){this.ke.set(t,new jo),this.Be.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Be.getRemoteKeysForTarget(t).has(n)}}function qo(){return new q(A.comparator)}function $o(){return new q(A.comparator)}const mm={asc:"ASCENDING",desc:"DESCENDING"},gm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_m={and:"AND",or:"OR"};class ym{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function bs(e,t){return e.useProto3Json||vr(t)?t:{value:t}}function Em(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Tm(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ue(e){return K(!!e),S.fromTimestamp(function(n){const r=Lt(n);return new lt(r.seconds,r.nanos)}(e))}function vm(e,t){return Ds(e,t).canonicalString()}function Ds(e,t){const n=function(s){return new B(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function fu(e){const t=B.fromString(e);return K(yu(t)),t}function Qr(e,t){const n=fu(t);if(n.get(1)!==e.databaseId.projectId)throw new w(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new A(mu(n))}function pu(e,t){return vm(e.databaseId,t)}function wm(e){const t=fu(e);return t.length===4?B.emptyPath():mu(t)}function zo(e){return new B(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function mu(e){return K(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Am(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:R()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(u,l){return u.useProto3Json?(K(l===void 0||typeof l=="string"),at.fromBase64String(l||"")):(K(l===void 0||l instanceof Uint8Array),at.fromUint8Array(l||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const l=u.code===void 0?g.UNKNOWN:lu(u.code);return new w(l,u.message||"")}(o);n=new du(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Qr(e,r.document.name),i=ue(r.document.updateTime),o=r.document.createTime?ue(r.document.createTime):S.min(),a=new _t({mapValue:{fields:r.document.fields}}),c=st.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new kn(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Qr(e,r.document),i=r.readTime?ue(r.readTime):S.min(),o=st.newNoDocument(s,i),a=r.removedTargetIds||[];n=new kn([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Qr(e,r.document),i=r.removedTargetIds||[];n=new kn([],i,s,null)}else{if(!("filter"in t))return R();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new hm(s,i),a=r.targetId;n=new hu(a,o)}}return n}function Im(e,t){return{documents:[pu(e,t.path)]}}function Sm(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=pu(e,s);const i=function(u){if(u.length!==0)return _u(It.create(u,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(l=>function(f){return{field:re(f.field),direction:Pm(f.dir)}}(l))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=bs(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),{ut:n,parent:s}}function Rm(e){let t=wm(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){K(r===1);const l=n.from[0];l.allDescendants?s=l.collectionId:t=t.child(l.collectionId)}let i=[];n.where&&(i=function(h){const f=gu(h);return f instanceof It&&Xc(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(_){return new Wn(se(_.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,vr(f)?null:f}(n.limit));let c=null;n.startAt&&(c=function(h){const f=!!h.before,m=h.values||[];return new Qn(m,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,m=h.values||[];return new Qn(m,f)}(n.endAt)),Hp(t,s,o,i,a,"F",c,u)}function Cm(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return R()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function gu(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=se(n.unaryFilter.field);return G.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=se(n.unaryFilter.field);return G.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=se(n.unaryFilter.field);return G.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=se(n.unaryFilter.field);return G.create(o,"!=",{nullValue:"NULL_VALUE"});default:return R()}}(e):e.fieldFilter!==void 0?function(n){return G.create(se(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return R()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return It.create(n.compositeFilter.filters.map(r=>gu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return R()}}(n.compositeFilter.op))}(e):R()}function Pm(e){return mm[e]}function bm(e){return gm[e]}function Dm(e){return _m[e]}function re(e){return{fieldPath:e.canonicalString()}}function se(e){return ct.fromServerFormat(e.fieldPath)}function _u(e){return e instanceof G?function(n){if(n.op==="=="){if(Do(n.value))return{unaryFilter:{field:re(n.field),op:"IS_NAN"}};if(bo(n.value))return{unaryFilter:{field:re(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Do(n.value))return{unaryFilter:{field:re(n.field),op:"IS_NOT_NAN"}};if(bo(n.value))return{unaryFilter:{field:re(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:re(n.field),op:bm(n.op),value:n.value}}}(e):e instanceof It?function(n){const r=n.getFilters().map(s=>_u(s));return r.length===1?r[0]:{compositeFilter:{op:Dm(n.op),filters:r}}}(e):R()}function yu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,n,r,s,i=S.min(),o=S.min(),a=at.EMPTY_BYTE_STRING,c=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(t){return new Nt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Nt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(t){this.ct=t}}function Nm(e){const t=Rm({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Rs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this._n=new km}addToCollectionParentIndex(t,n){return this._n.add(n),p.resolve()}getCollectionParents(t,n){return p.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return p.resolve()}deleteFieldIndex(t,n){return p.resolve()}deleteAllFieldIndexes(t){return p.resolve()}createTargetIndexes(t,n){return p.resolve()}getDocumentsMatchingTarget(t,n){return p.resolve(null)}getIndexType(t,n){return p.resolve(0)}getFieldIndexes(t,n){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,n){return p.resolve(xt.min())}getMinOffsetFromCollectionGroup(t,n){return p.resolve(xt.min())}updateCollectionGroup(t,n,r){return p.resolve()}updateIndexEntries(t,n){return p.resolve()}}class km{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new et(B.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new et(B.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new _e(0)}static Ln(){return new _e(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.changes=new Ie(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,st.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?p.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&qe(r.mutation,s,Vt.empty(),lt.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,V()).next(()=>r))}getLocalViewOfDocuments(t,n,r=V()){const s=Ht();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=ke();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Ht();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,V()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=Mt();const o=je(),a=function(){return je()}();return n.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof Cr)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),qe(l.mutation,u,l.mutation.getFieldMask(),lt.now())):o.set(u.key,Vt.empty())}),this.recalculateAndSaveOverlays(t,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),n.forEach((u,l)=>{var h;return a.set(u,new Lm(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=je();let s=new q((o,a)=>o-a),i=V();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let l=r.get(c)||Vt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||V()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=su();l.forEach(f=>{if(!i.has(f)){const m=cu(n.get(f),r.get(f));m!==null&&h.set(f,m),i=i.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,h))}return p.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return A.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Kp(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):p.resolve(Ht());let a=-1,c=i;return o.next(u=>p.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?p.resolve():this.remoteDocumentCache.getEntry(t,l).next(f=>{c=c.insert(l,f)}))).next(()=>this.populateOverlays(t,u,i)).next(()=>this.computeViews(t,c,u,V())).next(l=>({batchId:a,changes:Xp(l)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new A(n)).next(r=>{let s=ke();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=ke();return this.indexManager.getCollectionParents(t,i).next(a=>p.forEach(a,c=>{const u=function(h,f){return new Ar(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(t,u,r,s).next(l=>{l.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((c,u)=>{const l=u.getKey();o.get(l)===null&&(o=o.insert(l,st.newInvalidDocument(l)))});let a=ke();return o.forEach((c,u)=>{const l=i.get(c);l!==void 0&&qe(l.mutation,u,Vt.empty(),lt.now()),Sr(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return p.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ue(s.createTime)}}(n)),p.resolve()}getNamedQuery(t,n){return p.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:Nm(s.bundledQuery),readTime:ue(s.readTime)}}(n)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(){this.overlays=new q(A.comparator),this.hr=new Map}getOverlay(t,n){return p.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Ht();return p.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),p.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),p.resolve()}getOverlaysForCollection(t,n,r){const s=Ht(),i=n.length+1,o=new A(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return p.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new q((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=Ht(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Ht(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return p.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new lm(n,r));let i=this.hr.get(n);i===void 0&&(i=V(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.Pr=new et(W.Ir),this.Tr=new et(W.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new W(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new W(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new A(new B([])),r=new W(n,t),s=new W(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new A(new B([])),r=new W(n,t),s=new W(n,t+1);let i=V();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new W(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class W{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return A.comparator(t.key,n.key)||O(t.pr,n.pr)}static Er(t,n){return O(t.pr,n.pr)||A.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new et(W.Ir)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new um(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new W(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,n){return p.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return p.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new W(n,0),s=new W(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new et(O);return n.forEach(s=>{const i=new W(s,0),o=new W(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),p.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;A.isDocumentKey(i)||(i=i.child(""));const o=new W(new A(i),0);let a=new et(O);return this.wr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.pr)),!0)},o),p.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){K(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return p.forEach(n.mutations,s=>{const i=new W(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new W(n,0),s=this.wr.firstAfterOrEqual(r);return p.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(t){this.vr=t,this.docs=function(){return new q(A.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return p.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(t,n){let r=Mt();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():st.newInvalidDocument(s))}),p.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Mt();const o=n.path,a=new A(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Rp(Sp(l),r)<=0||(s.has(l.key)||Sr(n,l))&&(i=i.insert(l.key,l.mutableCopy()))}return p.resolve(i)}getAllFromCollectionGroup(t,n,r,s){R()}Fr(t,n){return p.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new qm(this)}getSize(t){return p.resolve(this.size)}}class qm extends xm{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),p.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(t){this.persistence=t,this.Mr=new Ie(n=>wi(n),Ai),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Pi,this.targetCount=0,this.Lr=_e.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),p.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new _e(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,p.resolve()}updateTargetData(t,n){return this.qn(n),p.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),p.waitFor(i).next(()=>s)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return p.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),p.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),p.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return p.resolve(r)}containsKey(t,n){return p.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(t,n){this.Br={},this.overlays={},this.kr=new yi(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new $m(this),this.indexManager=new Om,this.remoteDocumentCache=function(s){return new jm(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Vm(n),this.$r=new Fm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Um,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new Bm(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){T("MemoryPersistence","Starting transaction:",t);const s=new Hm(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return p.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class Hm extends Pp{constructor(t){super(),this.currentSequenceNumber=t}}class bi{constructor(t){this.persistence=t,this.zr=new Pi,this.jr=null}static Hr(t){return new bi(t)}get Jr(){if(this.jr)return this.jr;throw R()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),p.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),p.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),p.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Jr,r=>{const s=A.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,S.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return p.or([()=>p.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=V(),s=V();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Di(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Gh()?8:zt.v(Un())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Km;return this.Ji(t,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?(De()<=D.DEBUG&&T("QueryEngine","SDK will not create cache indexes for query:",ne(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),p.resolve()):(De()<=D.DEBUG&&T("QueryEngine","Query:",ne(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(De()<=D.DEBUG&&T("QueryEngine","The SDK decides to create cache indexes for query:",ne(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,vt(n))):p.resolve())}ji(t,n){if(ko(n))return p.resolve(null);let r=vt(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Rs(n,null,"F"),r=vt(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=V(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(c=>{const u=this.Zi(n,a);return this.Xi(n,u,o,c.readTime)?this.ji(t,Rs(n,null,"F")):this.es(t,u,n,c)}))})))}Hi(t,n,r,s){return ko(n)||s.isEqual(S.min())?p.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?p.resolve(null):(De()<=D.DEBUG&&T("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ne(n)),this.es(t,o,n,Ip(s,-1)).next(a=>a))})}Zi(t,n){let r=new et(nu(t));return n.forEach((s,i)=>{Sr(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return De()<=D.DEBUG&&T("QueryEngine","Using full collection scan to execute query:",ne(n)),this.zi.getDocumentsMatchingQuery(t,n,xt.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new q(O),this.rs=new Ie(i=>wi(i),Ai),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Mm(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function Wm(e,t,n,r){return new Qm(e,t,n,r)}async function Eu(e,t){const n=N(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=V();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return n.localDocuments.getDocuments(r,c).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function Tu(e){const t=N(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function Jm(e,t){const n=N(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];t.targetChanges.forEach((l,h)=>{const f=s.get(h);if(!f)return;a.push(n.Qr.removeMatchingKeys(i,l.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,l.addedDocuments,h)));let m=f.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?m=m.withResumeToken(at.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):l.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(l.resumeToken,r)),s=s.insert(h,m),function(y,v,b){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:b.addedDocuments.size+b.modifiedDocuments.size+b.removedDocuments.size>0}(f,m,l)&&a.push(n.Qr.updateTargetData(i,m))});let c=Mt(),u=V();if(t.documentUpdates.forEach(l=>{t.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Xm(i,o,t.documentUpdates).next(l=>{c=l.cs,u=l.ls})),!r.isEqual(S.min())){const l=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.ns=s,i))}function Xm(e,t,n){let r=V(),s=V();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=Mt();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(S.min())?(t.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(c),o=o.insert(a,c)):T("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{cs:o,ls:s}})}function Ym(e,t){const n=N(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,p.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Nt(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function Vs(e,t,n){const r=N(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!gn(o))throw o;T("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function Ho(e,t,n){const r=N(e);let s=S.min(),i=V();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,l){const h=N(c),f=h.rs.get(l);return f!==void 0?p.resolve(h.ns.get(f)):h.Qr.getTargetData(u,l)}(r,o,vt(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?s:S.min(),n?i:V())).next(a=>(Zm(r,Qp(t),a),{documents:a,hs:i})))}function Zm(e,t,n){let r=e.ss.get(t)||S.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class Ko{constructor(){this.activeTargetIds=tm()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class tg{constructor(){this.no=new Ko,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Ko,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){T("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){T("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bn=null;function Wr(){return bn===null?bn=function(){return 268435456+Math.round(2147483648*Math.random())}():bn++,"0x"+bn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="WebChannelConnection";class sg extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=Wr(),c=this.bo(n,r.toUriEncodedString());T("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,i,o),this.Co(n,c,u,s).then(l=>(T("RestConnection",`Received RPC '${n}' ${a}: `,l),l),l=>{throw fe("RestConnection",`RPC '${n}' ${a} failed with error: `,l,"url: ",c,"request:",s),l})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ae}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=ng[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,s){const i=Wr();return new Promise((o,a)=>{const c=new fp;c.setWithCredentials(!0),c.listenOnce(hp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Kr.NO_ERROR:const l=c.getResponseJson();T(nt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(l)),o(l);break;case Kr.TIMEOUT:T(nt,`RPC '${t}' ${i} timed out`),a(new w(g.DEADLINE_EXCEEDED,"Request time out"));break;case Kr.HTTP_ERROR:const h=c.getStatus();if(T(nt,`RPC '${t}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let f=c.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const _=function(v){const b=v.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(b)>=0?b:g.UNKNOWN}(m.status);a(new w(_,m.message))}else a(new w(g.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new w(g.UNAVAILABLE,"Connection failed."));break;default:R()}}finally{T(nt,`RPC '${t}' ${i} completed.`)}});const u=JSON.stringify(s);T(nt,`RPC '${t}' ${i} sending request:`,s),c.send(n,"POST",u,r,15)})}Fo(t,n,r){const s=Wr(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=up(),a=lp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=i.join("");T(nt,`Creating RPC '${t}' stream ${s}: ${l}`,c);const h=o.createWebChannel(l,c);let f=!1,m=!1;const _=new rg({lo:v=>{m?T(nt,`Not sending because RPC '${t}' stream ${s} is closed:`,v):(f||(T(nt,`Opening RPC '${t}' stream ${s} transport.`),h.open(),f=!0),T(nt,`RPC '${t}' stream ${s} sending:`,v),h.send(v))},ho:()=>h.close()}),y=(v,b,$)=>{v.listen(b,Q=>{try{$(Q)}catch(pt){setTimeout(()=>{throw pt},0)}})};return y(h,Rn.EventType.OPEN,()=>{m||T(nt,`RPC '${t}' stream ${s} transport opened.`)}),y(h,Rn.EventType.CLOSE,()=>{m||(m=!0,T(nt,`RPC '${t}' stream ${s} transport closed`),_.Vo())}),y(h,Rn.EventType.ERROR,v=>{m||(m=!0,fe(nt,`RPC '${t}' stream ${s} transport errored:`,v),_.Vo(new w(g.UNAVAILABLE,"The operation could not be completed")))}),y(h,Rn.EventType.MESSAGE,v=>{var b;if(!m){const $=v.data[0];K(!!$);const Q=$,pt=Q.error||((b=Q[0])===null||b===void 0?void 0:b.error);if(pt){T(nt,`RPC '${t}' stream ${s} received error:`,pt);const Tn=pt.status;let te=function(ju){const Bi=z[ju];if(Bi!==void 0)return lu(Bi)}(Tn),vn=pt.message;te===void 0&&(te=g.INTERNAL,vn="Unknown error status: "+Tn+" with message "+pt.message),m=!0,_.Vo(new w(te,vn)),h.close()}else T(nt,`RPC '${t}' stream ${s} received:`,$),_.mo($)}}),y(a,dp.STAT_EVENT,v=>{v.stat===Ao.PROXY?T(nt,`RPC '${t}' stream ${s} detected buffering proxy`):v.stat===Ao.NOPROXY&&T(nt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Ro()},0),_}}function Jr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(e){return new ym(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&T("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ig{constructor(t,n,r,s,i,o,a,c){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new wu(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===g.RESOURCE_EXHAUSTED?(wt(n.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{t(()=>{const s=new w(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return T("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(T("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class og extends ig{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=Am(this.serializer,t),r=function(i){if(!("targetChange"in i))return S.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?S.min():o.readTime?ue(o.readTime):S.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=zo(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Ss(c)?{documents:Im(i,c)}:{query:Sm(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Tm(i,o.resumeToken);const u=bs(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(S.min())>0){a.readTime=Em(i,o.snapshotVersion.toTimestamp());const u=bs(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=Cm(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=zo(this.serializer),n.removeTarget=t,this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new w(g.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,Ds(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(g.UNKNOWN,i.toString())})}vo(t,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Ds(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new w(g.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class cg{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(wt(n),this.g_=!1):T("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{En(this)&&(T("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=N(c);u.v_.add(4),await yn(u),u.x_.set("Unknown"),u.v_.delete(4),await br(u)}(this))})}),this.x_=new cg(r,s)}}async function br(e){if(En(e))for(const t of e.F_)await t(!0)}async function yn(e){for(const t of e.F_)await t(!1)}function Au(e,t){const n=N(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),ki(n)?Oi(n):Se(n).Jo()&&Ni(n,t))}function Vi(e,t){const n=N(e),r=Se(n);n.C_.delete(t),r.Jo()&&Iu(n,t),n.C_.size===0&&(r.Jo()?r.Xo():En(n)&&n.x_.set("Unknown"))}function Ni(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(S.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Se(e).c_(t)}function Iu(e,t){e.O_.Oe(t),Se(e).l_(t)}function Oi(e){e.O_=new pm({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Se(e).start(),e.x_.p_()}function ki(e){return En(e)&&!Se(e).Ho()&&e.C_.size>0}function En(e){return N(e).v_.size===0}function Su(e){e.O_=void 0}async function lg(e){e.C_.forEach((t,n)=>{Ni(e,t)})}async function hg(e,t){Su(e),ki(e)?(e.x_.S_(t),Oi(e)):e.x_.set("Unknown")}async function dg(e,t,n){if(e.x_.set("Online"),t instanceof du&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(e,t)}catch(r){T("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Qo(e,r)}else if(t instanceof kn?e.O_.$e(t):t instanceof hu?e.O_.Je(t):e.O_.Ge(t),!n.isEqual(S.min()))try{const r=await Tu(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const l=i.C_.get(u);l&&i.C_.set(u,l.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const l=i.C_.get(c);if(!l)return;i.C_.set(c,l.withResumeToken(at.EMPTY_BYTE_STRING,l.snapshotVersion)),Iu(i,c);const h=new Nt(l.target,c,u,l.sequenceNumber);Ni(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){T("RemoteStore","Failed to raise snapshot:",r),await Qo(e,r)}}async function Qo(e,t,n){if(!gn(t))throw t;e.v_.add(1),await yn(e),e.x_.set("Offline"),n||(n=()=>Tu(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{T("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await br(e)})}async function Wo(e,t){const n=N(e);n.asyncQueue.verifyOperationInProgress(),T("RemoteStore","RemoteStore received new credentials");const r=En(n);n.v_.add(3),await yn(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await br(n)}async function fg(e,t){const n=N(e);t?(n.v_.delete(2),await br(n)):t||(n.v_.add(2),await yn(n),n.x_.set("Unknown"))}function Se(e){return e.N_||(e.N_=function(n,r,s){const i=N(n);return i.R_(),new og(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:lg.bind(null,e),To:hg.bind(null,e),u_:dg.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),ki(e)?Oi(e):e.x_.set("Unknown")):(await e.N_.stop(),Su(e))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Gt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new xi(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ru(e,t){if(wt("AsyncQueue",`${t}: ${e}`),gn(e))return new w(g.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t){this.comparator=t?(n,r)=>t(n,r)||A.comparator(n.key,r.key):(n,r)=>A.comparator(n.key,r.key),this.keyedMap=ke(),this.sortedSet=new q(this.comparator)}static emptySet(t){return new le(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof le)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new le;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this.B_=new q(A.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):R():this.B_=this.B_.insert(n,t)}k_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class ye{constructor(t,n,r,s,i,o,a,c,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ye(t,n,le.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ir(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(t=>t.U_())}}class mg{constructor(){this.queries=new Ie(t=>eu(t),Ir),this.onlineState="Unknown",this.W_=new Set}}async function gg(e,t){const n=N(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.K_()&&t.U_()&&(r=2):(i=new pg,r=t.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Ru(o,`Initialization of query '${ne(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.Q_.push(t),t.G_(n.onlineState),i.q_&&t.z_(i.q_)&&Li(n)}async function _g(e,t){const n=N(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=t.U_()?0:1:!i.K_()&&t.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function yg(e,t){const n=N(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&Li(n)}function Eg(e,t,n){const r=N(e),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(t)}function Li(e){e.W_.forEach(t=>{t.next()})}var Ns,Xo;(Xo=Ns||(Ns={})).j_="default",Xo.Cache="cache";class Tg{constructor(t,n,r){this.query=t,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new ye(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.J_?this.Z_(t)&&(this.H_.next(t),n=!0):this.X_(t,this.onlineState)&&(this.ea(t),n=!0),this.Y_=t,n}onError(t){this.H_.error(t)}G_(t){this.onlineState=t;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,t)&&(this.ea(this.Y_),n=!0),n}X_(t,n){if(!t.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Z_(t){if(t.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(t){t=ye.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.J_=!0,this.H_.next(t)}U_(){return this.options.source!==Ns.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t){this.key=t}}class Pu{constructor(t){this.key=t}}class vg{constructor(t,n){this.query=t,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=V(),this.mutatedKeys=V(),this.ha=nu(t),this.Pa=new le(this.ha)}get Ia(){return this.ua}Ta(t,n){const r=n?n.Ea:new Jo,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((l,h)=>{const f=s.get(l),m=Sr(this.query,h)?h:null,_=!!f&&this.mutatedKeys.has(f.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let v=!1;f&&m?f.data.isEqual(m.data)?_!==y&&(r.track({type:3,doc:m}),v=!0):this.da(f,m)||(r.track({type:2,doc:m}),v=!0,(c&&this.ha(m,c)>0||u&&this.ha(m,u)<0)&&(a=!0)):!f&&m?(r.track({type:0,doc:m}),v=!0):f&&!m&&(r.track({type:1,doc:f}),v=!0,(c||u)&&(a=!0)),v&&(m?(o=o.add(m),i=y?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.Pa;this.Pa=t.Pa,this.mutatedKeys=t.mutatedKeys;const o=t.Ea.k_();o.sort((l,h)=>function(m,_){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return R()}};return y(m)-y(_)}(l.type,h.type)||this.ha(l.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],c=this.la.size===0&&this.current&&!s?1:0,u=c!==this.ca;return this.ca=c,o.length!==0||u?{snapshot:new ye(this.query,t.Pa,i,o,t.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Jo,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(t){return!this.ua.has(t)&&!!this.Pa.has(t)&&!this.Pa.get(t).hasLocalMutations}Aa(t){t&&(t.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=t.current)}Ra(){if(!this.current)return[];const t=this.la;this.la=V(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return t.forEach(r=>{this.la.has(r)||n.push(new Pu(r))}),this.la.forEach(r=>{t.has(r)||n.push(new Cu(r))}),n}fa(t){this.ua=t.hs,this.la=V();const n=this.Ta(t.documents);return this.applyChanges(n,!0)}ga(){return ye.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class wg{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class Ag{constructor(t){this.key=t,this.pa=!1}}class Ig{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Ie(a=>eu(a),Ir),this.Sa=new Map,this.ba=new Set,this.Da=new q(A.comparator),this.Ca=new Map,this.va=new Pi,this.Fa={},this.Ma=new Map,this.xa=_e.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function Sg(e,t,n=!0){const r=Ou(e);let s;const i=r.wa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await bu(r,t,n,!0),s}async function Rg(e,t){const n=Ou(e);await bu(n,t,!0,!1)}async function bu(e,t,n,r){const s=await Ym(e.localStore,vt(t)),i=s.targetId,o=n?e.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await Cg(e,t,i,o==="current",s.resumeToken)),e.isPrimaryClient&&n&&Au(e.remoteStore,s),a}async function Cg(e,t,n,r,s){e.Na=(h,f,m)=>async function(y,v,b,$){let Q=v.view.Ta(b);Q.Xi&&(Q=await Ho(y.localStore,v.query,!1).then(({documents:vn})=>v.view.Ta(vn,Q)));const pt=$&&$.targetChanges.get(v.targetId),Tn=$&&$.targetMismatches.get(v.targetId)!=null,te=v.view.applyChanges(Q,y.isPrimaryClient,pt,Tn);return Zo(y,v.targetId,te.Va),te.snapshot}(e,h,f,m);const i=await Ho(e.localStore,t,!0),o=new vg(t,i.hs),a=o.Ta(i.documents),c=_n.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),u=o.applyChanges(a,e.isPrimaryClient,c);Zo(e,n,u.Va);const l=new wg(t,n,o);return e.wa.set(t,l),e.Sa.has(n)?e.Sa.get(n).push(t):e.Sa.set(n,[t]),u.snapshot}async function Pg(e,t,n){const r=N(e),s=r.wa.get(t),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!Ir(o,t))),void r.wa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Vs(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Vi(r.remoteStore,s.targetId),Os(r,s.targetId)}).catch(mi)):(Os(r,s.targetId),await Vs(r.localStore,s.targetId,!0))}async function bg(e,t){const n=N(e),r=n.wa.get(t),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Vi(n.remoteStore,r.targetId))}async function Du(e,t){const n=N(e);try{const r=await Jm(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?K(o.pa):s.removedDocuments.size>0&&(K(o.pa),o.pa=!1))}),await Nu(n,r,t)}catch(r){await mi(r)}}function Yo(e,t,n){const r=N(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=N(o);c.onlineState=a;let u=!1;c.queries.forEach((l,h)=>{for(const f of h.Q_)f.G_(a)&&(u=!0)}),u&&Li(c)}(r.eventManager,t),s.length&&r.ya.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Dg(e,t,n){const r=N(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ca.get(t),i=s&&s.key;if(i){let o=new q(A.comparator);o=o.insert(i,st.newNoDocument(i,S.min()));const a=V().add(i),c=new Pr(S.min(),new Map,new q(O),o,a);await Du(r,c),r.Da=r.Da.remove(i),r.Ca.delete(t),Mi(r)}else await Vs(r.localStore,t,!1).then(()=>Os(r,t,n)).catch(mi)}function Os(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Sa.get(t))e.wa.delete(r),n&&e.ya.La(r,n);e.Sa.delete(t),e.isPrimaryClient&&e.va.Vr(t).forEach(r=>{e.va.containsKey(r)||Vu(e,r)})}function Vu(e,t){e.ba.delete(t.path.canonicalString());const n=e.Da.get(t);n!==null&&(Vi(e.remoteStore,n),e.Da=e.Da.remove(t),e.Ca.delete(n),Mi(e))}function Zo(e,t,n){for(const r of n)r instanceof Cu?(e.va.addReference(r.key,t),Vg(e,r)):r instanceof Pu?(T("SyncEngine","Document no longer in limbo: "+r.key),e.va.removeReference(r.key,t),e.va.containsKey(r.key)||Vu(e,r.key)):R()}function Vg(e,t){const n=t.key,r=n.path.canonicalString();e.Da.get(n)||e.ba.has(r)||(T("SyncEngine","New document in limbo: "+n),e.ba.add(r),Mi(e))}function Mi(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){const t=e.ba.values().next().value;e.ba.delete(t);const n=new A(B.fromString(t)),r=e.xa.next();e.Ca.set(r,new Ag(n)),e.Da=e.Da.insert(n,r),Au(e.remoteStore,new Nt(vt(Ii(n.path)),r,"TargetPurposeLimboResolution",yi._e))}}async function Nu(e,t,n){const r=N(e),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,c)=>{o.push(r.Na(c,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=Di.Ki(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.ya.u_(s),await async function(c,u){const l=N(c);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(u,f=>p.forEach(f.qi,m=>l.persistence.referenceDelegate.addReference(h,f.targetId,m)).next(()=>p.forEach(f.Qi,m=>l.persistence.referenceDelegate.removeReference(h,f.targetId,m)))))}catch(h){if(!gn(h))throw h;T("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const f=h.targetId;if(!h.fromCache){const m=l.ns.get(f),_=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(_);l.ns=l.ns.insert(f,y)}}}(r.localStore,i))}async function Ng(e,t){const n=N(e);if(!n.currentUser.isEqual(t)){T("SyncEngine","User change. New user:",t.toKey());const r=await Eu(n.localStore,t);n.currentUser=t,function(i,o){i.Ma.forEach(a=>{a.forEach(c=>{c.reject(new w(g.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Nu(n,r.us)}}function Og(e,t){const n=N(e),r=n.Ca.get(t);if(r&&r.pa)return V().add(r.key);{let s=V();const i=n.Sa.get(t);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function Ou(e){const t=N(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Du.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Og.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Dg.bind(null,t),t.ya.u_=yg.bind(null,t.eventManager),t.ya.La=Eg.bind(null,t.eventManager),t}class ta{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=vu(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return Wm(this.persistence,new Gm,t.initialUser,this.serializer)}createPersistence(t){return new zm(bi.Hr,this.serializer)}createSharedClientState(t){return new tg}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kg{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ng.bind(null,this.syncEngine),await fg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new mg}()}createDatastore(t){const n=vu(t.databaseInfo.databaseId),r=function(i){return new sg(i)}(t.databaseInfo);return function(i,o,a,c){return new ag(i,o,a,c)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new ug(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Yo(this.syncEngine,n,0),function(){return Go.D()?new Go:new eg}())}createSyncEngine(t,n){return function(s,i,o,a,c,u,l){const h=new Ig(s,i,o,a,c,u);return l&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=N(r);T("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await yn(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.qa(this.observer.next,t)}error(t){this.observer.error?this.qa(this.observer.error,t):wt("Uncaught Error in snapshot listener:",t.toString())}Qa(){this.muted=!0}qa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=rt.UNAUTHENTICATED,this.clientId=Gc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{T("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(T("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Gt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Ru(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Xr(e,t){e.asyncQueue.verifyOperationInProgress(),T("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Eu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ea(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Fg(e);T("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Wo(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Wo(t.remoteStore,s)),e._onlineComponents=t}function Mg(e){return e.name==="FirebaseError"?e.code===g.FAILED_PRECONDITION||e.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function Fg(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){T("FirestoreClient","Using user provided OfflineComponentProvider");try{await Xr(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!Mg(n))throw n;fe("Error using user provided cache. Falling back to memory cache: "+n),await Xr(e,new ta)}}else T("FirestoreClient","Using default OfflineComponentProvider"),await Xr(e,new ta);return e._offlineComponents}async function Ug(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(T("FirestoreClient","Using user provided OnlineComponentProvider"),await ea(e,e._uninitializedComponentsProvider._online)):(T("FirestoreClient","Using default OnlineComponentProvider"),await ea(e,new kg))),e._onlineComponents}async function na(e){const t=await Ug(e),n=t.eventManager;return n.onListen=Sg.bind(null,t.syncEngine),n.onUnlisten=Pg.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=Rg.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=bg.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(e,t,n){if(!n)throw new w(g.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function jg(e,t,n,r){if(t===!0&&r===!0)throw new w(g.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function sa(e){if(!A.isDocumentKey(e))throw new w(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function qg(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":R()}function xn(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qg(e);throw new w(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new w(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}jg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ku((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new w(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new w(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new w(g.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Fi{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ia({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ia(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mp;switch(r.type){case"firstParty":return new Ep(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new w(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ra.get(n);r&&(T("ComponentProvider","Removing Datastore"),ra.delete(n),r.terminate())}(this),Promise.resolve()}}function $g(e,t,n,r={}){var s;const i=(e=xn(e,Fi))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&fe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=rt.MOCK_USER;else{a=Hh(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new w(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new rt(u)}e._authCredentials=new gp(new Kc(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Dr(this.firestore,t,this._query)}}class Pt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Pt(this.firestore,t,this._key)}}class sn extends Dr{constructor(t,n,r){super(t,n,Ii(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Pt(this.firestore,null,new A(t))}withConverter(t){return new sn(this.firestore,t,this._path)}}function X_(e,t,...n){if(e=La(e),arguments.length===1&&(t=Gc.newId()),Bg("doc","path",t),e instanceof Fi){const r=B.fromString(t,...n);return sa(r),new Pt(e,null,new A(r))}{if(!(e instanceof Pt||e instanceof sn))throw new w(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(B.fromString(t,...n));return sa(r),new Pt(e.firestore,e instanceof sn?e.converter:null,new A(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new wu(this,"async_queue_retry"),this.cu=()=>{const n=Jr();n&&T("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=Jr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const n=Jr();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const n=new Gt;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!gn(t))throw t;T("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const n=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw wt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(t,n,r){this.lu(),this.uu.indexOf(t)>-1&&(n=0);const s=xi.createAndSchedule(this,t,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&R()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const n of this.su)if(n.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const n=this.su.indexOf(t);this.su.splice(n,1)}}function oa(e){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(e,["next","error","complete"])}class ks extends Fi{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new zg}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xu(this),this._firestoreClient.terminate()}}function Hg(e,t){const n=typeof e=="object"?e:Jd(),r=typeof e=="string"?e:t||"(default)",s=Kd(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=$h("firestore");i&&$g(s,...i)}return s}function Kg(e){return e._firestoreClient||xu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function xu(e){var t,n,r;const s=e._freezeSettings(),i=function(a,c,u,l){return new Op(a,c,u,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,ku(l.experimentalLongPollingOptions),l.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new Lg(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Yn(at.fromBase64String(t))}catch(n){throw new w(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Yn(at.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return O(this._lat,t._lat)||O(this._long,t._long)}}const Qg=new RegExp("[~\\*/\\[\\]]");function Wg(e,t,n){if(t.search(Qg)>=0)throw aa(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Lu(...t.split("."))._internalPath}catch{throw aa(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function aa(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new w(g.INVALID_ARGUMENT,a+e+c)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Jg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(Fu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Jg extends Mu{data(){return super.data()}}function Fu(e,t){return typeof t=="string"?Wg(e,t):t instanceof Lu?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new w(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yg{convertValue(t,n="none"){switch(Yt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return H(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Xt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw R()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return wr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new Gg(H(t.latitude),H(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Ti(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(en(t));default:return null}}convertTimestamp(t){const n=Lt(t);return new lt(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=B.fromString(t);K(yu(r));const s=new nn(r.get(1),r.get(3)),i=new A(r.popFirst(5));return s.isEqual(n)||wt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Uu extends Mu{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ln(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(Fu("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ln extends Uu{data(t={}){return super.data(t)}}class Zg{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new Le(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Ln(this._firestore,this._userDataWriter,r.key,r,new Le(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Ln(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Le(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Ln(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Le(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,l=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),l=o.indexOf(a.doc.key)),{type:t_(a.type),doc:c,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function t_(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return R()}}class Bu extends Yg{constructor(t){super(),this.firestore=t}convertBytes(t){return new Yn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function Y_(e,...t){var n,r,s;e=La(e);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof t[o]!="object"||oa(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(oa(t[o])){const h=t[o];t[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),t[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),t[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(e instanceof Pt)u=xn(e.firestore,ks),l=Ii(e._key.path),c={next:h=>{t[o]&&t[o](e_(u,e,h))},error:t[o+1],complete:t[o+2]};else{const h=xn(e,Dr);u=xn(h.firestore,ks),l=h._query;const f=new Bu(u);c={next:m=>{t[o]&&t[o](new Zg(u,f,h,m))},error:t[o+1],complete:t[o+2]},Xg(e._query)}return function(f,m,_,y){const v=new xg(y),b=new Tg(m,v,_);return f.asyncQueue.enqueueAndForget(async()=>gg(await na(f),b)),()=>{v.Qa(),f.asyncQueue.enqueueAndForget(async()=>_g(await na(f),b))}}(Kg(u),l,a,c)}function e_(e,t,n){const r=n.docs.get(t._key),s=new Bu(e);return new Uu(e,s,t._key,r,new Le(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(s){Ae=s})(Wd),jn(new ze("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ks(new _p(r.getProvider("auth-internal")),new vp(r.getProvider("app-check-internal")),function(u,l){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new w(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nn(u.options.projectId,l)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),oe(Io,"4.5.1",t),oe(Io,"4.5.1","esm2017")})();const n_={apiKey:"AIzaSyBz2CHnovBsBw3K7i0tl4kSzIke5n8HfYM",authDomain:"blitz-commander.firebaseapp.com",databaseURL:"https://blitz-commander-default-rtdb.firebaseio.com",projectId:"blitz-commander",storageBucket:"blitz-commander.appspot.com",messagingSenderId:"28860105912",appId:"1:28860105912:web:efc3c91dfbc6f008e4a04d",measurementId:"G-MFY9V2D927"},r_=Ba(n_),s_={db:()=>Hg(r_)},i_="blitz_commander",o_=6,k=Object.freeze({CLANS_STAT:"clans_stat",CLANS_FAVORITES:"clans_favorites",ACCOUNTS_STAT:"accounts_stat",ACCOUNTS_TANKS_STAT:"accounts_tanks_stat",ACCOUNTS_TANKS_ACHIEVEMENTS:"accounts_tanks_achievements",ACCOUNTS_FAVORITES:"accounts_favorites",ACCOUNTS_ACHIEVEMENTS:"accounts_achievements"});let Ve;const x=()=>{if(Ve)return Promise.resolve(Ve);const e=indexedDB.open(i_,o_);return new Promise((t,n)=>{e.addEventListener("error",n),e.addEventListener("upgradeneeded",()=>{const r=e.result;Object.values(k).forEach(s=>{r.objectStoreNames.contains(s)||r.createObjectStore(s)})}),e.addEventListener("success",()=>{const r=e.result;Ve={get(s,i){return new Promise((o,a)=>{const l=r.transaction(s,"readonly").objectStore(s).get(i);l.onsuccess=()=>o(l.result??null),l.onerror=()=>a(l.error)})},getAll(s){return new Promise((i,o)=>{const u=r.transaction(s,"readonly").objectStore(s).getAll();u.onsuccess=()=>i(u.result??null),u.onerror=()=>o(u.error)})},set(s,i,o){return new Promise((a,c)=>{const u=r.transaction(s,"readwrite");u.objectStore(s).put(o,i),u.oncomplete=()=>a(),u.onerror=()=>c(u.error)})},remove(s,i){return new Promise((o,a)=>{const l=r.transaction(s,"readwrite").objectStore(s).delete(i);l.onsuccess=()=>o(l.result),l.onerror=()=>a(l.error)})},onBlocked:()=>{}},e.addEventListener("blocked",Ve.onBlocked),t(Ve)})})},a_={async get(e){return(await x()).get(k.ACCOUNTS_ACHIEVEMENTS,String(e))},async getAll(){return(await x()).getAll(k.ACCOUNTS_ACHIEVEMENTS)},async set(e,t){const n=await x(),r={id:e,timestamp:Date.now(),data:t};return n.set(k.ACCOUNTS_ACHIEVEMENTS,String(e),r)},async remove(e){return(await x()).remove(k.ACCOUNTS_ACHIEVEMENTS,String(e))}},c_={async get(e){return(await x()).get(k.ACCOUNTS_FAVORITES,String(e))},async getAll(){return(await x()).getAll(k.ACCOUNTS_FAVORITES)},async set(e,t){return(await x()).set(k.ACCOUNTS_FAVORITES,String(e),t)},async remove(e){return(await x()).remove(k.ACCOUNTS_FAVORITES,String(e))}},u_={async get(e){return(await x()).get(k.ACCOUNTS_STAT,String(e))},async getAll(){return(await x()).getAll(k.ACCOUNTS_STAT)},async set(e,t){const n=await x(),r={id:e,timestamp:Date.now(),data:t};return n.set(k.ACCOUNTS_STAT,String(e),r)},async remove(e){return(await x()).remove(k.ACCOUNTS_STAT,String(e))}},l_={async get(e){return(await x()).get(k.CLANS_STAT,String(e))},async getAll(){return(await x()).getAll(k.CLANS_STAT)},async set(e,t){const n=await x(),r={id:e,timestamp:Date.now(),data:t};return n.set(k.CLANS_STAT,String(e),r)},async remove(e){return(await x()).remove(k.CLANS_STAT,String(e))}},h_={async get(e){return(await x()).get(k.ACCOUNTS_TANKS_STAT,String(e))},async getAll(){return(await x()).getAll(k.ACCOUNTS_TANKS_STAT)},async set(e,t){const n=await x(),r={id:e,timestamp:Date.now(),data:t};return n.set(k.ACCOUNTS_TANKS_STAT,String(e),r)},async remove(e){return(await x()).remove(k.ACCOUNTS_TANKS_STAT,String(e))}},d_={async get(e){return(await x()).get(k.CLANS_FAVORITES,String(e))},async getAll(){return(await x()).getAll(k.CLANS_FAVORITES)},async set(e,t){return(await x()).set(k.CLANS_FAVORITES,String(e),t)},async remove(e){return(await x()).remove(k.CLANS_FAVORITES,String(e))}},f_={async get(e){return(await x()).get(k.ACCOUNTS_TANKS_ACHIEVEMENTS,String(e))},async getAll(){return(await x()).getAll(k.ACCOUNTS_TANKS_ACHIEVEMENTS)},async set(e,t){const n=await x(),r={id:e,timestamp:Date.now(),data:t};return n.set(k.ACCOUNTS_TANKS_ACHIEVEMENTS,String(e),r)},async remove(e){return(await x()).remove(k.ACCOUNTS_TANKS_ACHIEVEMENTS,String(e))}},p_={getInstance:x,accountsAchievements:a_,accountsFavorites:c_,accountsInfo:u_,clansFavorites:d_,clansInfo:l_,tanksStat:h_,tanksAchievements:f_},Ui={url:yh,storage:Oh,indexedDB:p_,firebase:s_},m_=e=>{const t=Ui.storage.getAccessToken(),n=ca().public.appId;if(!t)throw new Error("Токен не найден");const r=new FormData;return r.append("application_id",String(n??"")),r.append("access_token",t??""),r.append("expires_at",String(e.expires_at)??""),U({baseURL:js,url:"auth/prolongate/",method:"post",data:r})},g_=()=>{const e=Ui.storage.getAccessToken(),t=ca().public.appId;if(!e)throw new Error("Токен не найден");const n=new FormData;return n.append("application_id",String(t??"")),n.append("access_token",e??""),U({baseURL:js,url:"auth/logout/",method:"post",data:n})},__={login:gh,prolongate:m_,logout:g_},y_=e=>U({url:"clans/info/",method:"get",params:e}),E_=e=>U({url:"clans/list/",method:"get",params:e}),T_=e=>U({url:"clans/accountinfo/",method:"get",params:e}),v_={getInfo:y_,getList:E_,getAccountInfo:T_},w_=e=>U({url:"tanks/achievements/",method:"get",params:e}),A_=e=>U({url:"tanks/stats/",method:"get",params:e}),I_={getAchievements:w_,getStats:A_},S_=e=>U({url:"encyclopedia/vehicles/",method:"get",params:e}),R_=e=>U({url:"encyclopedia/achievements/",method:"get",params:e}),C_={getVehicles:S_,getAchievements:R_},P_=e=>U({url:"tournaments/list/",method:"get",params:e}),b_=e=>U({url:"tournaments/info/",method:"get",params:e}),D_=e=>U({url:"tournaments/stages/",method:"get",params:e}),V_=e=>U({url:"tournaments/teams/",method:"get",params:e}),N_=e=>U({url:"tournaments/tables/",method:"get",params:e}),O_=e=>U({url:"tournaments/matches/",method:"get",params:e}),k_=e=>U({url:"tournaments/standings/",method:"get",params:e}),x_={getList:P_,getInfo:b_,getStages:D_,getTeams:V_,getTables:N_,getMatches:O_,getStandings:k_},Z_={account:mh,auth:__,clan:v_,tanks:I_,encyclopedia:C_,tournaments:x_,isResponse:Da,request:U},L_=e=>e!==null&&typeof e=="object",M_=e=>{if(!L_(e))throw new TypeError("Value is not a object");const t={};return Object.entries(e).forEach(([n,r])=>{r!=null&&String(r)&&(t[n]=String(r))}),t},F_=e=>typeof e!="object"||e===null?!1:"status"in e&&("data"in e||"error"in e),U_="https://server.blitz-commander.by/",B_="http://localhost:80/",j_=!1;class q_ extends Error{constructor(n){super(typeof n.error=="string"?n.error:"");Re(this,"data");Re(this,"status");Re(this,"error");Re(this,"meta");this.name="RequestError",this.data=n.data,this.status=n.status,this.error=n.error,this.meta=n.meta}}const $_=Object.assign(async e=>{try{const{data:t}=await F.request({baseURL:e.baseURL??(j_?B_:U_),url:e.url,headers:{...e.headers,token:Ui.storage.getAccessToken()},method:e.method,params:M_(e.params??{}),data:e.data});return t}catch(t){if(!F.isAxiosError(t)||!t.response)throw t;const{data:n,status:r}=t.response??{},s=new q_({...n,status:r});throw F_(n)&&$_.onError(s),s}},{onError(e){}});export{G_ as _,Z_ as a,F as b,F_ as c,X_ as d,L_ as i,Y_ as o,$_ as r,Ui as s};
