var Vc=Object.defineProperty;var Dc=(n,t,e)=>t in n?Vc(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var He=(n,t,e)=>Dc(n,typeof t!="symbol"?t+"":t,e);import{f as kc,o as Nc,c as Oc,C as xc,av as Lc,a0 as cs,af as Mc,O as Fc}from"./C0--9zv3.js";const gm=kc({__name:"ContentLoader",props:{loading:{type:Boolean,default:!1},backdropLight:{type:Boolean,default:!1}},setup(n){return(t,e)=>(Nc(),Oc("div",{class:xc(["content-loader",[n.loading?"content-loader--is-active":"",n.backdropLight!==!1?"content-loader--hide-backdrop":""]])},null,2))}}),Br=n=>typeof n!="object"||n===null?!1:"status"in n&&("data"in n||"error"in n);class Mi extends Error{constructor(t){super(t),this.name="StoreError"}}const Wn=n=>{throw n instanceof Error&&n.message?new Mi(n.message):new Mi("unknown error")},Uc=n=>{try{const t=localStorage.getItem(n);if(!t)return null;const e=JSON.parse(t);return e.ttl&&Date.now()>e.ttl?(localStorage.removeItem(n),null):e.value}catch(t){Wn(t)}},Bc=n=>n&&Number.isInteger(n)?Date.now()+n:void 0,$c=(n,t,e)=>{try{const r={value:t,timestamp:Date.now(),ttl:Bc(e==null?void 0:e.expires)};localStorage.setItem(n,JSON.stringify(r))}catch(r){Wn(r)}},qc=n=>{try{localStorage.removeItem(n)}catch(t){Wn(t)}},jc=()=>{try{localStorage.clear()}catch(n){Wn(n)}},us={get:Uc,set:$c,remove:qc,clear:jc},ls="updateConfirmed",zc=()=>{try{return us.get(ls)}catch(n){return console.error("updateConfirmation.get",n),null}},Hc=n=>{try{us.set(ls,n)}catch(t){console.error("updateConfirmation.set",t)}},Kc=()=>{try{us.remove(ls)}catch(n){console.error("updateConfirmation.remove",n)}},Gc={get:zc,set:Hc,remove:Kc},Qc=()=>{try{localStorage.removeItem("access_token"),localStorage.removeItem("expires_at"),localStorage.removeItem("account_id"),localStorage.removeItem("nickname")}catch(n){console.error("storage.removeUser",n)}},Wc=n=>{try{localStorage.setItem("access_token",n.access_token),localStorage.setItem("expires_at",n.expires_at),localStorage.setItem("account_id",n.account_id),localStorage.setItem("nickname",n.nickname)}catch(t){console.error("storage.setUser",t)}},Yc=()=>{try{const n={access_token:localStorage.getItem("access_token")??"",expires_at:localStorage.getItem("expires_at")??"",account_id:localStorage.getItem("account_id")??"",nickname:localStorage.getItem("nickname")??""};return Object.values(n).every(t=>t)?n:null}catch(n){return console.error("storage.getUser",n),null}},Xc=()=>{try{return localStorage.getItem("access_token")}catch(n){return console.error("storage.getAccessToken",n),null}},Jc=()=>{try{localStorage.removeItem("access_token")}catch(n){console.error("storage.removeAccessToken",n)}},Zc={getAccessToken:Xc,removeAccessToken:Jc,removeUser:Qc,getUser:Yc,setUser:Wc,updateConfirmation:Gc};var Fi={};/**
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
 */const Lo=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?t[e++]=i:i<2048?(t[e++]=i>>6|192,t[e++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=i>>18|240,t[e++]=i>>12&63|128,t[e++]=i>>6&63|128,t[e++]=i&63|128):(t[e++]=i>>12|224,t[e++]=i>>6&63|128,t[e++]=i&63|128)}return t},tu=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const i=n[e++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[e++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[e++],c=n[e++],l=n[e++],d=((i&7)<<18|(o&63)<<12|(c&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(d>>10)),t[r++]=String.fromCharCode(56320+(d&1023))}else{const o=n[e++],c=n[e++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|c&63)}}return t.join("")},Mo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],c=i+1<n.length,l=c?n[i+1]:0,d=i+2<n.length,f=d?n[i+2]:0,_=o>>2,w=(o&3)<<4|l>>4;let S=(l&15)<<2|f>>6,b=f&63;d||(b=64,c||(S=64)),r.push(e[_],e[w],e[S],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Lo(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):tu(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=e[n.charAt(i++)],l=i<n.length?e[n.charAt(i)]:0;++i;const f=i<n.length?e[n.charAt(i)]:64;++i;const w=i<n.length?e[n.charAt(i)]:64;if(++i,o==null||l==null||f==null||w==null)throw new eu;const S=o<<2|l>>4;if(r.push(S),f!==64){const b=l<<4&240|f>>2;if(r.push(b),w!==64){const k=f<<6&192|w;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class eu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nu=function(n){const t=Lo(n);return Mo.encodeByteArray(t,!0)},$n=function(n){return nu(n).replace(/\./g,"")},ru=function(n){try{return Mo.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function su(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const iu=()=>su().__FIREBASE_DEFAULTS__,ou=()=>{if(typeof process>"u"||typeof Fi>"u")return;const n=Fi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},au=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ru(n[1]);return t&&JSON.parse(t)},hs=()=>{try{return iu()||ou()||au()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cu=n=>{var t,e;return(e=(t=hs())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},uu=n=>{const t=cu(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Fo=()=>{var n;return(n=hs())===null||n===void 0?void 0:n.config};/**
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
 */class lu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function hu(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[$n(JSON.stringify(e)),$n(JSON.stringify(c)),""].join(".")}/**
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
 */function du(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fu(){var n;const t=(n=hs())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function gu(){return!fu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mu(){try{return typeof indexedDB=="object"}catch{return!1}}function pu(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{e=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const _u="FirebaseError";class Ae extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=_u,Object.setPrototypeOf(this,Ae.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Uo.prototype.create)}}class Uo{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},i=`${this.service}/${t}`,o=this.errors[t],c=o?yu(o,r):"Error",l=`${this.serviceName}: ${c} (${i}).`;return new Ae(i,l,r)}}function yu(n,t){return n.replace(Eu,(e,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Eu=/\{\$([^}]+)}/g;function $r(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const i of e){if(!r.includes(i))return!1;const o=n[i],c=t[i];if(Ui(o)&&Ui(c)){if(!$r(o,c))return!1}else if(o!==c)return!1}for(const i of r)if(!e.includes(i))return!1;return!0}function Ui(n){return n!==null&&typeof n=="object"}/**
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
 */function Bo(n){return n&&n._delegate?n._delegate:n}class nn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Xt="[DEFAULT]";/**
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
 */class vu{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new lu;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Iu(t))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Xt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Xt){return this.instances.has(t)}getOptions(t=Xt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,c]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&c.resolve(i)}return i}onInit(t,e){var r;const i=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const c=this.instances.get(i);return c&&t(c,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const i of r)try{i(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Tu(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Xt){return this.component?this.component.multipleInstances?t:Xt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Tu(n){return n===Xt?void 0:n}function Iu(n){return n.instantiationMode==="EAGER"}/**
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
 */class Au{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new vu(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var $;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})($||($={}));const wu={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},Su=$.INFO,Ru={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},Cu=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),i=Ru[t];if(i)console[i](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $o{constructor(t){this.name=t,this._logLevel=Su,this._logHandler=Cu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in $))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?wu[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...t),this._logHandler(this,$.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...t),this._logHandler(this,$.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,$.INFO,...t),this._logHandler(this,$.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,$.WARN,...t),this._logHandler(this,$.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...t),this._logHandler(this,$.ERROR,...t)}}const bu=(n,t)=>t.some(e=>n instanceof e);let Bi,$i;function Pu(){return Bi||(Bi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vu(){return $i||($i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qo=new WeakMap,qr=new WeakMap,jo=new WeakMap,Vr=new WeakMap,ds=new WeakMap;function Du(n){const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",c)},o=()=>{e(qt(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",c)});return t.then(e=>{e instanceof IDBCursor&&qo.set(e,n)}).catch(()=>{}),ds.set(t,n),t}function ku(n){if(qr.has(n))return;const t=new Promise((e,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",c),n.removeEventListener("abort",c)},o=()=>{e(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",c),n.addEventListener("abort",c)});qr.set(n,t)}let jr={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return qr.get(n);if(t==="objectStoreNames")return n.objectStoreNames||jo.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return qt(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Nu(n){jr=n(jr)}function Ou(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Dr(this),t,...e);return jo.set(r,t.sort?t.sort():[t]),qt(r)}:Vu().includes(n)?function(...t){return n.apply(Dr(this),t),qt(qo.get(this))}:function(...t){return qt(n.apply(Dr(this),t))}}function xu(n){return typeof n=="function"?Ou(n):(n instanceof IDBTransaction&&ku(n),bu(n,Pu())?new Proxy(n,jr):n)}function qt(n){if(n instanceof IDBRequest)return Du(n);if(Vr.has(n))return Vr.get(n);const t=xu(n);return t!==n&&(Vr.set(n,t),ds.set(t,n)),t}const Dr=n=>ds.get(n);function Lu(n,t,{blocked:e,upgrade:r,blocking:i,terminated:o}={}){const c=indexedDB.open(n,t),l=qt(c);return r&&c.addEventListener("upgradeneeded",d=>{r(qt(c.result),d.oldVersion,d.newVersion,qt(c.transaction),d)}),e&&c.addEventListener("blocked",d=>e(d.oldVersion,d.newVersion,d)),l.then(d=>{o&&d.addEventListener("close",()=>o()),i&&d.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),l}const Mu=["get","getKey","getAll","getAllKeys","count"],Fu=["put","add","delete","clear"],kr=new Map;function qi(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(kr.get(t))return kr.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,i=Fu.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Mu.includes(e)))return;const o=async function(c,...l){const d=this.transaction(c,i?"readwrite":"readonly");let f=d.store;return r&&(f=f.index(l.shift())),(await Promise.all([f[e](...l),i&&d.done]))[0]};return kr.set(t,o),o}Nu(n=>({...n,get:(t,e,r)=>qi(t,e)||n.get(t,e,r),has:(t,e)=>!!qi(t,e)||n.has(t,e)}));/**
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
 */class Uu{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(Bu(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function Bu(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const zr="@firebase/app",ji="0.10.8";/**
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
 */const ee=new $o("@firebase/app"),$u="@firebase/app-compat",qu="@firebase/analytics-compat",ju="@firebase/analytics",zu="@firebase/app-check-compat",Hu="@firebase/app-check",Ku="@firebase/auth",Gu="@firebase/auth-compat",Qu="@firebase/database",Wu="@firebase/database-compat",Yu="@firebase/functions",Xu="@firebase/functions-compat",Ju="@firebase/installations",Zu="@firebase/installations-compat",tl="@firebase/messaging",el="@firebase/messaging-compat",nl="@firebase/performance",rl="@firebase/performance-compat",sl="@firebase/remote-config",il="@firebase/remote-config-compat",ol="@firebase/storage",al="@firebase/storage-compat",cl="@firebase/firestore",ul="@firebase/vertexai-preview",ll="@firebase/firestore-compat",hl="firebase",dl="10.12.5";/**
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
 */const Hr="[DEFAULT]",fl={[zr]:"fire-core",[$u]:"fire-core-compat",[ju]:"fire-analytics",[qu]:"fire-analytics-compat",[Hu]:"fire-app-check",[zu]:"fire-app-check-compat",[Ku]:"fire-auth",[Gu]:"fire-auth-compat",[Qu]:"fire-rtdb",[Wu]:"fire-rtdb-compat",[Yu]:"fire-fn",[Xu]:"fire-fn-compat",[Ju]:"fire-iid",[Zu]:"fire-iid-compat",[tl]:"fire-fcm",[el]:"fire-fcm-compat",[nl]:"fire-perf",[rl]:"fire-perf-compat",[sl]:"fire-rc",[il]:"fire-rc-compat",[ol]:"fire-gcs",[al]:"fire-gcs-compat",[cl]:"fire-fst",[ll]:"fire-fst-compat",[ul]:"fire-vertex","fire-js":"fire-js",[hl]:"fire-js-all"};/**
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
 */const qn=new Map,gl=new Map,Kr=new Map;function zi(n,t){try{n.container.addComponent(t)}catch(e){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function jn(n){const t=n.name;if(Kr.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;Kr.set(t,n);for(const e of qn.values())zi(e,n);for(const e of gl.values())zi(e,n);return!0}function ml(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
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
 */const pl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jt=new Uo("app","Firebase",pl);/**
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
 */class _l{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw jt.create("app-deleted",{appName:this._name})}}/**
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
 */const yl=dl;function zo(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Hr,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw jt.create("bad-app-name",{appName:String(i)});if(e||(e=Fo()),!e)throw jt.create("no-options");const o=qn.get(i);if(o){if($r(e,o.options)&&$r(r,o.config))return o;throw jt.create("duplicate-app",{appName:i})}const c=new Au(i);for(const d of Kr.values())c.addComponent(d);const l=new _l(e,r,c);return qn.set(i,l),l}function El(n=Hr){const t=qn.get(n);if(!t&&n===Hr&&Fo())return zo();if(!t)throw jt.create("no-app",{appName:n});return t}function de(n,t,e){var r;let i=(r=fl[n])!==null&&r!==void 0?r:n;e&&(i+=`-${e}`);const o=i.match(/\s|\//),c=t.match(/\s|\//);if(o||c){const l=[`Unable to register library "${i}" with version "${t}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&c&&l.push("and"),c&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ee.warn(l.join(" "));return}jn(new nn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const vl="firebase-heartbeat-database",Tl=1,rn="firebase-heartbeat-store";let Nr=null;function Ho(){return Nr||(Nr=Lu(vl,Tl,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(rn)}catch(e){console.warn(e)}}}}).catch(n=>{throw jt.create("idb-open",{originalErrorMessage:n.message})})),Nr}async function Il(n){try{const e=(await Ho()).transaction(rn),r=await e.objectStore(rn).get(Ko(n));return await e.done,r}catch(t){if(t instanceof Ae)ee.warn(t.message);else{const e=jt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ee.warn(e.message)}}}async function Hi(n,t){try{const r=(await Ho()).transaction(rn,"readwrite");await r.objectStore(rn).put(t,Ko(n)),await r.done}catch(e){if(e instanceof Ae)ee.warn(e.message);else{const r=jt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ee.warn(r.message)}}}function Ko(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Al=1024,wl=30*24*60*60*1e3;class Sl{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Cl(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ki();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(c=>c.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const l=new Date(c.date).valueOf();return Date.now()-l<=wl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ki(),{heartbeatsToSend:r,unsentEntries:i}=Rl(this._heartbeatsCache.heartbeats),o=$n(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Ki(){return new Date().toISOString().substring(0,10)}function Rl(n,t=Al){const e=[];let r=n.slice();for(const i of n){const o=e.find(c=>c.agent===i.agent);if(o){if(o.dates.push(i.date),Gi(e)>t){o.dates.pop();break}}else if(e.push({agent:i.agent,dates:[i.date]}),Gi(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Cl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mu()?pu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Il(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hi(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Gi(n){return $n(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function bl(n){jn(new nn("platform-logger",t=>new Uu(t),"PRIVATE")),jn(new nn("heartbeat",t=>new Sl(t),"PRIVATE")),de(zr,ji,n),de(zr,ji,"esm2017"),de("fire-js","")}bl("");var Pl="firebase",Vl="10.12.5";/**
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
 */de(Pl,Vl,"app");var Qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zt,Go;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,g){function p(){}p.prototype=g.prototype,v.D=g.prototype,v.prototype=new p,v.prototype.constructor=v,v.C=function(y,E,I){for(var m=Array(arguments.length-2),Dt=2;Dt<arguments.length;Dt++)m[Dt-2]=arguments[Dt];return g.prototype[E].apply(y,m)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(v,g,p){p||(p=0);var y=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)y[E]=g.charCodeAt(p++)|g.charCodeAt(p++)<<8|g.charCodeAt(p++)<<16|g.charCodeAt(p++)<<24;else for(E=0;16>E;++E)y[E]=g[p++]|g[p++]<<8|g[p++]<<16|g[p++]<<24;g=v.g[0],p=v.g[1],E=v.g[2];var I=v.g[3],m=g+(I^p&(E^I))+y[0]+3614090360&4294967295;g=p+(m<<7&4294967295|m>>>25),m=I+(E^g&(p^E))+y[1]+3905402710&4294967295,I=g+(m<<12&4294967295|m>>>20),m=E+(p^I&(g^p))+y[2]+606105819&4294967295,E=I+(m<<17&4294967295|m>>>15),m=p+(g^E&(I^g))+y[3]+3250441966&4294967295,p=E+(m<<22&4294967295|m>>>10),m=g+(I^p&(E^I))+y[4]+4118548399&4294967295,g=p+(m<<7&4294967295|m>>>25),m=I+(E^g&(p^E))+y[5]+1200080426&4294967295,I=g+(m<<12&4294967295|m>>>20),m=E+(p^I&(g^p))+y[6]+2821735955&4294967295,E=I+(m<<17&4294967295|m>>>15),m=p+(g^E&(I^g))+y[7]+4249261313&4294967295,p=E+(m<<22&4294967295|m>>>10),m=g+(I^p&(E^I))+y[8]+1770035416&4294967295,g=p+(m<<7&4294967295|m>>>25),m=I+(E^g&(p^E))+y[9]+2336552879&4294967295,I=g+(m<<12&4294967295|m>>>20),m=E+(p^I&(g^p))+y[10]+4294925233&4294967295,E=I+(m<<17&4294967295|m>>>15),m=p+(g^E&(I^g))+y[11]+2304563134&4294967295,p=E+(m<<22&4294967295|m>>>10),m=g+(I^p&(E^I))+y[12]+1804603682&4294967295,g=p+(m<<7&4294967295|m>>>25),m=I+(E^g&(p^E))+y[13]+4254626195&4294967295,I=g+(m<<12&4294967295|m>>>20),m=E+(p^I&(g^p))+y[14]+2792965006&4294967295,E=I+(m<<17&4294967295|m>>>15),m=p+(g^E&(I^g))+y[15]+1236535329&4294967295,p=E+(m<<22&4294967295|m>>>10),m=g+(E^I&(p^E))+y[1]+4129170786&4294967295,g=p+(m<<5&4294967295|m>>>27),m=I+(p^E&(g^p))+y[6]+3225465664&4294967295,I=g+(m<<9&4294967295|m>>>23),m=E+(g^p&(I^g))+y[11]+643717713&4294967295,E=I+(m<<14&4294967295|m>>>18),m=p+(I^g&(E^I))+y[0]+3921069994&4294967295,p=E+(m<<20&4294967295|m>>>12),m=g+(E^I&(p^E))+y[5]+3593408605&4294967295,g=p+(m<<5&4294967295|m>>>27),m=I+(p^E&(g^p))+y[10]+38016083&4294967295,I=g+(m<<9&4294967295|m>>>23),m=E+(g^p&(I^g))+y[15]+3634488961&4294967295,E=I+(m<<14&4294967295|m>>>18),m=p+(I^g&(E^I))+y[4]+3889429448&4294967295,p=E+(m<<20&4294967295|m>>>12),m=g+(E^I&(p^E))+y[9]+568446438&4294967295,g=p+(m<<5&4294967295|m>>>27),m=I+(p^E&(g^p))+y[14]+3275163606&4294967295,I=g+(m<<9&4294967295|m>>>23),m=E+(g^p&(I^g))+y[3]+4107603335&4294967295,E=I+(m<<14&4294967295|m>>>18),m=p+(I^g&(E^I))+y[8]+1163531501&4294967295,p=E+(m<<20&4294967295|m>>>12),m=g+(E^I&(p^E))+y[13]+2850285829&4294967295,g=p+(m<<5&4294967295|m>>>27),m=I+(p^E&(g^p))+y[2]+4243563512&4294967295,I=g+(m<<9&4294967295|m>>>23),m=E+(g^p&(I^g))+y[7]+1735328473&4294967295,E=I+(m<<14&4294967295|m>>>18),m=p+(I^g&(E^I))+y[12]+2368359562&4294967295,p=E+(m<<20&4294967295|m>>>12),m=g+(p^E^I)+y[5]+4294588738&4294967295,g=p+(m<<4&4294967295|m>>>28),m=I+(g^p^E)+y[8]+2272392833&4294967295,I=g+(m<<11&4294967295|m>>>21),m=E+(I^g^p)+y[11]+1839030562&4294967295,E=I+(m<<16&4294967295|m>>>16),m=p+(E^I^g)+y[14]+4259657740&4294967295,p=E+(m<<23&4294967295|m>>>9),m=g+(p^E^I)+y[1]+2763975236&4294967295,g=p+(m<<4&4294967295|m>>>28),m=I+(g^p^E)+y[4]+1272893353&4294967295,I=g+(m<<11&4294967295|m>>>21),m=E+(I^g^p)+y[7]+4139469664&4294967295,E=I+(m<<16&4294967295|m>>>16),m=p+(E^I^g)+y[10]+3200236656&4294967295,p=E+(m<<23&4294967295|m>>>9),m=g+(p^E^I)+y[13]+681279174&4294967295,g=p+(m<<4&4294967295|m>>>28),m=I+(g^p^E)+y[0]+3936430074&4294967295,I=g+(m<<11&4294967295|m>>>21),m=E+(I^g^p)+y[3]+3572445317&4294967295,E=I+(m<<16&4294967295|m>>>16),m=p+(E^I^g)+y[6]+76029189&4294967295,p=E+(m<<23&4294967295|m>>>9),m=g+(p^E^I)+y[9]+3654602809&4294967295,g=p+(m<<4&4294967295|m>>>28),m=I+(g^p^E)+y[12]+3873151461&4294967295,I=g+(m<<11&4294967295|m>>>21),m=E+(I^g^p)+y[15]+530742520&4294967295,E=I+(m<<16&4294967295|m>>>16),m=p+(E^I^g)+y[2]+3299628645&4294967295,p=E+(m<<23&4294967295|m>>>9),m=g+(E^(p|~I))+y[0]+4096336452&4294967295,g=p+(m<<6&4294967295|m>>>26),m=I+(p^(g|~E))+y[7]+1126891415&4294967295,I=g+(m<<10&4294967295|m>>>22),m=E+(g^(I|~p))+y[14]+2878612391&4294967295,E=I+(m<<15&4294967295|m>>>17),m=p+(I^(E|~g))+y[5]+4237533241&4294967295,p=E+(m<<21&4294967295|m>>>11),m=g+(E^(p|~I))+y[12]+1700485571&4294967295,g=p+(m<<6&4294967295|m>>>26),m=I+(p^(g|~E))+y[3]+2399980690&4294967295,I=g+(m<<10&4294967295|m>>>22),m=E+(g^(I|~p))+y[10]+4293915773&4294967295,E=I+(m<<15&4294967295|m>>>17),m=p+(I^(E|~g))+y[1]+2240044497&4294967295,p=E+(m<<21&4294967295|m>>>11),m=g+(E^(p|~I))+y[8]+1873313359&4294967295,g=p+(m<<6&4294967295|m>>>26),m=I+(p^(g|~E))+y[15]+4264355552&4294967295,I=g+(m<<10&4294967295|m>>>22),m=E+(g^(I|~p))+y[6]+2734768916&4294967295,E=I+(m<<15&4294967295|m>>>17),m=p+(I^(E|~g))+y[13]+1309151649&4294967295,p=E+(m<<21&4294967295|m>>>11),m=g+(E^(p|~I))+y[4]+4149444226&4294967295,g=p+(m<<6&4294967295|m>>>26),m=I+(p^(g|~E))+y[11]+3174756917&4294967295,I=g+(m<<10&4294967295|m>>>22),m=E+(g^(I|~p))+y[2]+718787259&4294967295,E=I+(m<<15&4294967295|m>>>17),m=p+(I^(E|~g))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+g&4294967295,v.g[1]=v.g[1]+(E+(m<<21&4294967295|m>>>11))&4294967295,v.g[2]=v.g[2]+E&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,g){g===void 0&&(g=v.length);for(var p=g-this.blockSize,y=this.B,E=this.h,I=0;I<g;){if(E==0)for(;I<=p;)i(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<g;)if(y[E++]=v.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<g;)if(y[E++]=v[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var g=1;g<v.length-8;++g)v[g]=0;var p=8*this.o;for(g=v.length-8;g<v.length;++g)v[g]=p&255,p/=256;for(this.u(v),v=Array(16),g=p=0;4>g;++g)for(var y=0;32>y;y+=8)v[p++]=this.g[g]>>>y&255;return v};function o(v,g){var p=l;return Object.prototype.hasOwnProperty.call(p,v)?p[v]:p[v]=g(v)}function c(v,g){this.h=g;for(var p=[],y=!0,E=v.length-1;0<=E;E--){var I=v[E]|0;y&&I==g||(p[E]=I,y=!1)}this.g=p}var l={};function d(v){return-128<=v&&128>v?o(v,function(g){return new c([g|0],0>g?-1:0)}):new c([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return w;if(0>v)return D(f(-v));for(var g=[],p=1,y=0;v>=p;y++)g[y]=v/p|0,p*=4294967296;return new c(g,0)}function _(v,g){if(v.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(v.charAt(0)=="-")return D(_(v.substring(1),g));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var p=f(Math.pow(g,8)),y=w,E=0;E<v.length;E+=8){var I=Math.min(8,v.length-E),m=parseInt(v.substring(E,E+I),g);8>I?(I=f(Math.pow(g,I)),y=y.j(I).add(f(m))):(y=y.j(p),y=y.add(f(m)))}return y}var w=d(0),S=d(1),b=d(16777216);n=c.prototype,n.m=function(){if(L(this))return-D(this).m();for(var v=0,g=1,p=0;p<this.g.length;p++){var y=this.i(p);v+=(0<=y?y:4294967296+y)*g,g*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(k(this))return"0";if(L(this))return"-"+D(this).toString(v);for(var g=f(Math.pow(v,6)),p=this,y="";;){var E=ot(p,g).g;p=W(p,E.j(g));var I=((0<p.g.length?p.g[0]:p.h)>>>0).toString(v);if(p=E,k(p))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function k(v){if(v.h!=0)return!1;for(var g=0;g<v.g.length;g++)if(v.g[g]!=0)return!1;return!0}function L(v){return v.h==-1}n.l=function(v){return v=W(this,v),L(v)?-1:k(v)?0:1};function D(v){for(var g=v.g.length,p=[],y=0;y<g;y++)p[y]=~v.g[y];return new c(p,~v.h).add(S)}n.abs=function(){return L(this)?D(this):this},n.add=function(v){for(var g=Math.max(this.g.length,v.g.length),p=[],y=0,E=0;E<=g;E++){var I=y+(this.i(E)&65535)+(v.i(E)&65535),m=(I>>>16)+(this.i(E)>>>16)+(v.i(E)>>>16);y=m>>>16,I&=65535,m&=65535,p[E]=m<<16|I}return new c(p,p[p.length-1]&-2147483648?-1:0)};function W(v,g){return v.add(D(g))}n.j=function(v){if(k(this)||k(v))return w;if(L(this))return L(v)?D(this).j(D(v)):D(D(this).j(v));if(L(v))return D(this.j(D(v)));if(0>this.l(b)&&0>v.l(b))return f(this.m()*v.m());for(var g=this.g.length+v.g.length,p=[],y=0;y<2*g;y++)p[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<v.g.length;E++){var I=this.i(y)>>>16,m=this.i(y)&65535,Dt=v.i(E)>>>16,Ce=v.i(E)&65535;p[2*y+2*E]+=m*Ce,Y(p,2*y+2*E),p[2*y+2*E+1]+=I*Ce,Y(p,2*y+2*E+1),p[2*y+2*E+1]+=m*Dt,Y(p,2*y+2*E+1),p[2*y+2*E+2]+=I*Dt,Y(p,2*y+2*E+2)}for(y=0;y<g;y++)p[y]=p[2*y+1]<<16|p[2*y];for(y=g;y<2*g;y++)p[y]=0;return new c(p,0)};function Y(v,g){for(;(v[g]&65535)!=v[g];)v[g+1]+=v[g]>>>16,v[g]&=65535,g++}function X(v,g){this.g=v,this.h=g}function ot(v,g){if(k(g))throw Error("division by zero");if(k(v))return new X(w,w);if(L(v))return g=ot(D(v),g),new X(D(g.g),D(g.h));if(L(g))return g=ot(v,D(g)),new X(D(g.g),g.h);if(30<v.g.length){if(L(v)||L(g))throw Error("slowDivide_ only works with positive integers.");for(var p=S,y=g;0>=y.l(v);)p=Vt(p),y=Vt(y);var E=ct(p,1),I=ct(y,1);for(y=ct(y,2),p=ct(p,2);!k(y);){var m=I.add(y);0>=m.l(v)&&(E=E.add(p),I=m),y=ct(y,1),p=ct(p,1)}return g=W(v,E.j(g)),new X(E,g)}for(E=w;0<=v.l(g);){for(p=Math.max(1,Math.floor(v.m()/g.m())),y=Math.ceil(Math.log(p)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(p),m=I.j(g);L(m)||0<m.l(v);)p-=y,I=f(p),m=I.j(g);k(I)&&(I=S),E=E.add(I),v=W(v,m)}return new X(E,v)}n.A=function(v){return ot(this,v).h},n.and=function(v){for(var g=Math.max(this.g.length,v.g.length),p=[],y=0;y<g;y++)p[y]=this.i(y)&v.i(y);return new c(p,this.h&v.h)},n.or=function(v){for(var g=Math.max(this.g.length,v.g.length),p=[],y=0;y<g;y++)p[y]=this.i(y)|v.i(y);return new c(p,this.h|v.h)},n.xor=function(v){for(var g=Math.max(this.g.length,v.g.length),p=[],y=0;y<g;y++)p[y]=this.i(y)^v.i(y);return new c(p,this.h^v.h)};function Vt(v){for(var g=v.g.length+1,p=[],y=0;y<g;y++)p[y]=v.i(y)<<1|v.i(y-1)>>>31;return new c(p,v.h)}function ct(v,g){var p=g>>5;g%=32;for(var y=v.g.length-p,E=[],I=0;I<y;I++)E[I]=0<g?v.i(I+p)>>>g|v.i(I+p+1)<<32-g:v.i(I+p);return new c(E,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Go=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=f,c.fromString=_,Zt=c}).apply(typeof Qi<"u"?Qi:typeof self<"u"?self:typeof window<"u"?window:{});var kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qo,Wo,Qe,Yo,Ln,Gr,Xo,Jo,Zo;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,u){return s==Array.prototype||s==Object.prototype||(s[a]=u.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof kn=="object"&&kn];for(var a=0;a<s.length;++a){var u=s[a];if(u&&u.Math==Math)return u}throw Error("Cannot find global object")}var r=e(this);function i(s,a){if(a)t:{var u=r;s=s.split(".");for(var h=0;h<s.length-1;h++){var T=s[h];if(!(T in u))break t;u=u[T]}s=s[s.length-1],h=u[s],a=a(h),a!=h&&a!=null&&t(u,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var u=0,h=!1,T={next:function(){if(!h&&u<s.length){var A=u++;return{value:a(A,s[A]),done:!1}}return h=!0,{done:!0,value:void 0}}};return T[Symbol.iterator]=function(){return T},T}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,u){return u})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},l=this||self;function d(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function f(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function _(s,a,u){return s.call.apply(s.bind,arguments)}function w(s,a,u){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var T=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(T,h),s.apply(a,T)}}return function(){return s.apply(a,arguments)}}function S(s,a,u){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:w,S.apply(null,arguments)}function b(s,a){var u=Array.prototype.slice.call(arguments,1);return function(){var h=u.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function k(s,a){function u(){}u.prototype=a.prototype,s.aa=a.prototype,s.prototype=new u,s.prototype.constructor=s,s.Qb=function(h,T,A){for(var C=Array(arguments.length-2),G=2;G<arguments.length;G++)C[G-2]=arguments[G];return a.prototype[T].apply(h,C)}}function L(s){const a=s.length;if(0<a){const u=Array(a);for(let h=0;h<a;h++)u[h]=s[h];return u}return[]}function D(s,a){for(let u=1;u<arguments.length;u++){const h=arguments[u];if(d(h)){const T=s.length||0,A=h.length||0;s.length=T+A;for(let C=0;C<A;C++)s[T+C]=h[C]}else s.push(h)}}class W{constructor(a,u){this.i=a,this.j=u,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function Y(s){return/^[\s\xa0]*$/.test(s)}function X(){var s=l.navigator;return s&&(s=s.userAgent)?s:""}function ot(s){return ot[" "](s),s}ot[" "]=function(){};var Vt=X().indexOf("Gecko")!=-1&&!(X().toLowerCase().indexOf("webkit")!=-1&&X().indexOf("Edge")==-1)&&!(X().indexOf("Trident")!=-1||X().indexOf("MSIE")!=-1)&&X().indexOf("Edge")==-1;function ct(s,a,u){for(const h in s)a.call(u,s[h],h,s)}function v(s,a){for(const u in s)a.call(void 0,s[u],u,s)}function g(s){const a={};for(const u in s)a[u]=s[u];return a}const p="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let u,h;for(let T=1;T<arguments.length;T++){h=arguments[T];for(u in h)s[u]=h[u];for(let A=0;A<p.length;A++)u=p[A],Object.prototype.hasOwnProperty.call(h,u)&&(s[u]=h[u])}}function E(s){var a=1;s=s.split(":");const u=[];for(;0<a&&s.length;)u.push(s.shift()),a--;return s.length&&u.push(s.join(":")),u}function I(s){l.setTimeout(()=>{throw s},0)}function m(){var s=or;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Dt{constructor(){this.h=this.g=null}add(a,u){const h=Ce.get();h.set(a,u),this.h?this.h.next=h:this.g=h,this.h=h}}var Ce=new W(()=>new Wa,s=>s.reset());class Wa{constructor(){this.next=this.g=this.h=null}set(a,u){this.h=a,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}let be,Pe=!1,or=new Dt,Ms=()=>{const s=l.Promise.resolve(void 0);be=()=>{s.then(Ya)}};var Ya=()=>{for(var s;s=m();){try{s.h.call(s.g)}catch(u){I(u)}var a=Ce;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Pe=!1};function Lt(){this.s=this.s,this.C=this.C}Lt.prototype.s=!1,Lt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Lt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ft(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var Xa=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const u=()=>{};l.addEventListener("test",u,a),l.removeEventListener("test",u,a)}catch{}return s}();function Ve(s,a){if(ft.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var u=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Vt){t:{try{ot(a.nodeName);var T=!0;break t}catch{}T=!1}T||(a=null)}}else u=="mouseover"?a=s.fromElement:u=="mouseout"&&(a=s.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Ja[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&Ve.aa.h.call(this)}}k(Ve,ft);var Ja={2:"touch",3:"pen",4:"mouse"};Ve.prototype.h=function(){Ve.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var gn="closure_listenable_"+(1e6*Math.random()|0),Za=0;function tc(s,a,u,h,T){this.listener=s,this.proxy=null,this.src=a,this.type=u,this.capture=!!h,this.ha=T,this.key=++Za,this.da=this.fa=!1}function mn(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function pn(s){this.src=s,this.g={},this.h=0}pn.prototype.add=function(s,a,u,h,T){var A=s.toString();s=this.g[A],s||(s=this.g[A]=[],this.h++);var C=cr(s,a,h,T);return-1<C?(a=s[C],u||(a.fa=!1)):(a=new tc(a,this.src,A,!!h,T),a.fa=u,s.push(a)),a};function ar(s,a){var u=a.type;if(u in s.g){var h=s.g[u],T=Array.prototype.indexOf.call(h,a,void 0),A;(A=0<=T)&&Array.prototype.splice.call(h,T,1),A&&(mn(a),s.g[u].length==0&&(delete s.g[u],s.h--))}}function cr(s,a,u,h){for(var T=0;T<s.length;++T){var A=s[T];if(!A.da&&A.listener==a&&A.capture==!!u&&A.ha==h)return T}return-1}var ur="closure_lm_"+(1e6*Math.random()|0),lr={};function Fs(s,a,u,h,T){if(Array.isArray(a)){for(var A=0;A<a.length;A++)Fs(s,a[A],u,h,T);return null}return u=$s(u),s&&s[gn]?s.K(a,u,f(h)?!!h.capture:!!h,T):ec(s,a,u,!1,h,T)}function ec(s,a,u,h,T,A){if(!a)throw Error("Invalid event type");var C=f(T)?!!T.capture:!!T,G=dr(s);if(G||(s[ur]=G=new pn(s)),u=G.add(a,u,h,C,A),u.proxy)return u;if(h=nc(),u.proxy=h,h.src=s,h.listener=u,s.addEventListener)Xa||(T=C),T===void 0&&(T=!1),s.addEventListener(a.toString(),h,T);else if(s.attachEvent)s.attachEvent(Bs(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return u}function nc(){function s(u){return a.call(s.src,s.listener,u)}const a=rc;return s}function Us(s,a,u,h,T){if(Array.isArray(a))for(var A=0;A<a.length;A++)Us(s,a[A],u,h,T);else h=f(h)?!!h.capture:!!h,u=$s(u),s&&s[gn]?(s=s.i,a=String(a).toString(),a in s.g&&(A=s.g[a],u=cr(A,u,h,T),-1<u&&(mn(A[u]),Array.prototype.splice.call(A,u,1),A.length==0&&(delete s.g[a],s.h--)))):s&&(s=dr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=cr(a,u,h,T)),(u=-1<s?a[s]:null)&&hr(u))}function hr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[gn])ar(a.i,s);else{var u=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(u,h,s.capture):a.detachEvent?a.detachEvent(Bs(u),h):a.addListener&&a.removeListener&&a.removeListener(h),(u=dr(a))?(ar(u,s),u.h==0&&(u.src=null,a[ur]=null)):mn(s)}}}function Bs(s){return s in lr?lr[s]:lr[s]="on"+s}function rc(s,a){if(s.da)s=!0;else{a=new Ve(a,this);var u=s.listener,h=s.ha||s.src;s.fa&&hr(s),s=u.call(h,a)}return s}function dr(s){return s=s[ur],s instanceof pn?s:null}var fr="__closure_events_fn_"+(1e9*Math.random()>>>0);function $s(s){return typeof s=="function"?s:(s[fr]||(s[fr]=function(a){return s.handleEvent(a)}),s[fr])}function gt(){Lt.call(this),this.i=new pn(this),this.M=this,this.F=null}k(gt,Lt),gt.prototype[gn]=!0,gt.prototype.removeEventListener=function(s,a,u,h){Us(this,s,a,u,h)};function vt(s,a){var u,h=s.F;if(h)for(u=[];h;h=h.F)u.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new ft(a,s);else if(a instanceof ft)a.target=a.target||s;else{var T=a;a=new ft(h,s),y(a,T)}if(T=!0,u)for(var A=u.length-1;0<=A;A--){var C=a.g=u[A];T=_n(C,h,!0,a)&&T}if(C=a.g=s,T=_n(C,h,!0,a)&&T,T=_n(C,h,!1,a)&&T,u)for(A=0;A<u.length;A++)C=a.g=u[A],T=_n(C,h,!1,a)&&T}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var u=s.g[a],h=0;h<u.length;h++)mn(u[h]);delete s.g[a],s.h--}}this.F=null},gt.prototype.K=function(s,a,u,h){return this.i.add(String(s),a,!1,u,h)},gt.prototype.L=function(s,a,u,h){return this.i.add(String(s),a,!0,u,h)};function _n(s,a,u,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var T=!0,A=0;A<a.length;++A){var C=a[A];if(C&&!C.da&&C.capture==u){var G=C.listener,ut=C.ha||C.src;C.fa&&ar(s.i,C),T=G.call(ut,h)!==!1&&T}}return T&&!h.defaultPrevented}function qs(s,a,u){if(typeof s=="function")u&&(s=S(s,u));else if(s&&typeof s.handleEvent=="function")s=S(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:l.setTimeout(s,a||0)}function js(s){s.g=qs(()=>{s.g=null,s.i&&(s.i=!1,js(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class sc extends Lt{constructor(a,u){super(),this.m=a,this.l=u,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:js(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function De(s){Lt.call(this),this.h=s,this.g={}}k(De,Lt);var zs=[];function Hs(s){ct(s.g,function(a,u){this.g.hasOwnProperty(u)&&hr(a)},s),s.g={}}De.prototype.N=function(){De.aa.N.call(this),Hs(this)},De.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gr=l.JSON.stringify,ic=l.JSON.parse,oc=class{stringify(s){return l.JSON.stringify(s,void 0)}parse(s){return l.JSON.parse(s,void 0)}};function mr(){}mr.prototype.h=null;function Ks(s){return s.h||(s.h=s.i())}function Gs(){}var ke={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pr(){ft.call(this,"d")}k(pr,ft);function _r(){ft.call(this,"c")}k(_r,ft);var Gt={},Qs=null;function yn(){return Qs=Qs||new gt}Gt.La="serverreachability";function Ws(s){ft.call(this,Gt.La,s)}k(Ws,ft);function Ne(s){const a=yn();vt(a,new Ws(a))}Gt.STAT_EVENT="statevent";function Ys(s,a){ft.call(this,Gt.STAT_EVENT,s),this.stat=a}k(Ys,ft);function Tt(s){const a=yn();vt(a,new Ys(a,s))}Gt.Ma="timingevent";function Xs(s,a){ft.call(this,Gt.Ma,s),this.size=a}k(Xs,ft);function Oe(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){s()},a)}function xe(){this.g=!0}xe.prototype.xa=function(){this.g=!1};function ac(s,a,u,h,T,A){s.info(function(){if(s.g)if(A)for(var C="",G=A.split("&"),ut=0;ut<G.length;ut++){var j=G[ut].split("=");if(1<j.length){var mt=j[0];j=j[1];var pt=mt.split("_");C=2<=pt.length&&pt[1]=="type"?C+(mt+"="+j+"&"):C+(mt+"=redacted&")}}else C=null;else C=A;return"XMLHTTP REQ ("+h+") [attempt "+T+"]: "+a+`
`+u+`
`+C})}function cc(s,a,u,h,T,A,C){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+T+"]: "+a+`
`+u+`
`+A+" "+C})}function ie(s,a,u,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+lc(s,u)+(h?" "+h:"")})}function uc(s,a){s.info(function(){return"TIMEOUT: "+a})}xe.prototype.info=function(){};function lc(s,a){if(!s.g)return a;if(!a)return null;try{var u=JSON.parse(a);if(u){for(s=0;s<u.length;s++)if(Array.isArray(u[s])){var h=u[s];if(!(2>h.length)){var T=h[1];if(Array.isArray(T)&&!(1>T.length)){var A=T[0];if(A!="noop"&&A!="stop"&&A!="close")for(var C=1;C<T.length;C++)T[C]=""}}}}return gr(u)}catch{return a}}var En={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Js={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},yr;function vn(){}k(vn,mr),vn.prototype.g=function(){return new XMLHttpRequest},vn.prototype.i=function(){return{}},yr=new vn;function Mt(s,a,u,h){this.j=s,this.i=a,this.l=u,this.R=h||1,this.U=new De(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zs}function Zs(){this.i=null,this.g="",this.h=!1}var ti={},Er={};function vr(s,a,u){s.L=1,s.v=wn(kt(a)),s.m=u,s.P=!0,ei(s,null)}function ei(s,a){s.F=Date.now(),Tn(s),s.A=kt(s.v);var u=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),mi(u.i,"t",h),s.C=0,u=s.j.J,s.h=new Zs,s.g=Ni(s.j,u?a:null,!s.m),0<s.O&&(s.M=new sc(S(s.Y,s,s.g),s.O)),a=s.U,u=s.g,h=s.ca;var T="readystatechange";Array.isArray(T)||(T&&(zs[0]=T.toString()),T=zs);for(var A=0;A<T.length;A++){var C=Fs(u,T[A],h||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=s.H?g(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),Ne(),ac(s.i,s.u,s.A,s.l,s.R,s.m)}Mt.prototype.ca=function(s){s=s.target;const a=this.M;a&&Nt(s)==3?a.j():this.Y(s)},Mt.prototype.Y=function(s){try{if(s==this.g)t:{const pt=Nt(this.g);var a=this.g.Ba();const ce=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Ii(this.g)))){this.J||pt!=4||a==7||(a==8||0>=ce?Ne(3):Ne(2)),Tr(this);var u=this.g.Z();this.X=u;e:if(ni(this)){var h=Ii(this.g);s="";var T=h.length,A=Nt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),Le(this);var C="";break e}this.h.i=new l.TextDecoder}for(a=0;a<T;a++)this.h.h=!0,s+=this.h.i.decode(h[a],{stream:!(A&&a==T-1)});h.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=u==200,cc(this.i,this.u,this.A,this.l,this.R,pt,u),this.o){if(this.T&&!this.K){e:{if(this.g){var G,ut=this.g;if((G=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Y(G)){var j=G;break e}}j=null}if(u=j)ie(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ir(this,u);else{this.o=!1,this.s=3,Tt(12),Qt(this),Le(this);break t}}if(this.P){u=!0;let St;for(;!this.J&&this.C<C.length;)if(St=hc(this,C),St==Er){pt==4&&(this.s=4,Tt(14),u=!1),ie(this.i,this.l,null,"[Incomplete Response]");break}else if(St==ti){this.s=4,Tt(15),ie(this.i,this.l,C,"[Invalid Chunk]"),u=!1;break}else ie(this.i,this.l,St,null),Ir(this,St);if(ni(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||C.length!=0||this.h.h||(this.s=1,Tt(16),u=!1),this.o=this.o&&u,!u)ie(this.i,this.l,C,"[Invalid Chunked Response]"),Qt(this),Le(this);else if(0<C.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),br(mt),mt.M=!0,Tt(11))}}else ie(this.i,this.l,C,null),Ir(this,C);pt==4&&Qt(this),this.o&&!this.J&&(pt==4?Pi(this.j,this):(this.o=!1,Tn(this)))}else bc(this.g),u==400&&0<C.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),Qt(this),Le(this)}}}catch{}finally{}};function ni(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function hc(s,a){var u=s.C,h=a.indexOf(`
`,u);return h==-1?Er:(u=Number(a.substring(u,h)),isNaN(u)?ti:(h+=1,h+u>a.length?Er:(a=a.slice(h,h+u),s.C=h+u,a)))}Mt.prototype.cancel=function(){this.J=!0,Qt(this)};function Tn(s){s.S=Date.now()+s.I,ri(s,s.I)}function ri(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=Oe(S(s.ba,s),a)}function Tr(s){s.B&&(l.clearTimeout(s.B),s.B=null)}Mt.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(uc(this.i,this.A),this.L!=2&&(Ne(),Tt(17)),Qt(this),this.s=2,Le(this)):ri(this,this.S-s)};function Le(s){s.j.G==0||s.J||Pi(s.j,s)}function Qt(s){Tr(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,Hs(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function Ir(s,a){try{var u=s.j;if(u.G!=0&&(u.g==s||Ar(u.h,s))){if(!s.K&&Ar(u.h,s)&&u.G==3){try{var h=u.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var T=h;if(T[0]==0){t:if(!u.u){if(u.g)if(u.g.F+3e3<s.F)Pn(u),Cn(u);else break t;Cr(u),Tt(18)}}else u.za=T[1],0<u.za-u.T&&37500>T[2]&&u.F&&u.v==0&&!u.C&&(u.C=Oe(S(u.Za,u),6e3));if(1>=oi(u.h)&&u.ca){try{u.ca()}catch{}u.ca=void 0}}else Yt(u,11)}else if((s.K||u.g==s)&&Pn(u),!Y(a))for(T=u.Da.g.parse(a),a=0;a<T.length;a++){let j=T[a];if(u.T=j[0],j=j[1],u.G==2)if(j[0]=="c"){u.K=j[1],u.ia=j[2];const mt=j[3];mt!=null&&(u.la=mt,u.j.info("VER="+u.la));const pt=j[4];pt!=null&&(u.Aa=pt,u.j.info("SVER="+u.Aa));const ce=j[5];ce!=null&&typeof ce=="number"&&0<ce&&(h=1.5*ce,u.L=h,u.j.info("backChannelRequestTimeoutMs_="+h)),h=u;const St=s.g;if(St){const Dn=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Dn){var A=h.h;A.g||Dn.indexOf("spdy")==-1&&Dn.indexOf("quic")==-1&&Dn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(wr(A,A.h),A.h=null))}if(h.D){const Pr=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;Pr&&(h.ya=Pr,Q(h.I,h.D,Pr))}}u.G=3,u.l&&u.l.ua(),u.ba&&(u.R=Date.now()-s.F,u.j.info("Handshake RTT: "+u.R+"ms")),h=u;var C=s;if(h.qa=ki(h,h.J?h.ia:null,h.W),C.K){ai(h.h,C);var G=C,ut=h.L;ut&&(G.I=ut),G.B&&(Tr(G),Tn(G)),h.g=C}else Ci(h);0<u.i.length&&bn(u)}else j[0]!="stop"&&j[0]!="close"||Yt(u,7);else u.G==3&&(j[0]=="stop"||j[0]=="close"?j[0]=="stop"?Yt(u,7):Rr(u):j[0]!="noop"&&u.l&&u.l.ta(j),u.v=0)}}Ne(4)}catch{}}var dc=class{constructor(s,a){this.g=s,this.map=a}};function si(s){this.l=s||10,l.PerformanceNavigationTiming?(s=l.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ii(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function oi(s){return s.h?1:s.g?s.g.size:0}function Ar(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function wr(s,a){s.g?s.g.add(a):s.h=a}function ai(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}si.prototype.cancel=function(){if(this.i=ci(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ci(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const u of s.g.values())a=a.concat(u.D);return a}return L(s.i)}function fc(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(d(s)){for(var a=[],u=s.length,h=0;h<u;h++)a.push(s[h]);return a}a=[],u=0;for(h in s)a[u++]=s[h];return a}function gc(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(d(s)||typeof s=="string"){var a=[];s=s.length;for(var u=0;u<s;u++)a.push(u);return a}a=[],u=0;for(const h in s)a[u++]=h;return a}}}function ui(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(d(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var u=gc(s),h=fc(s),T=h.length,A=0;A<T;A++)a.call(void 0,h[A],u&&u[A],s)}var li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function mc(s,a){if(s){s=s.split("&");for(var u=0;u<s.length;u++){var h=s[u].indexOf("="),T=null;if(0<=h){var A=s[u].substring(0,h);T=s[u].substring(h+1)}else A=s[u];a(A,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function Wt(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof Wt){this.h=s.h,In(this,s.j),this.o=s.o,this.g=s.g,An(this,s.s),this.l=s.l;var a=s.i,u=new Ue;u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),hi(this,u),this.m=s.m}else s&&(a=String(s).match(li))?(this.h=!1,In(this,a[1]||"",!0),this.o=Me(a[2]||""),this.g=Me(a[3]||"",!0),An(this,a[4]),this.l=Me(a[5]||"",!0),hi(this,a[6]||"",!0),this.m=Me(a[7]||"")):(this.h=!1,this.i=new Ue(null,this.h))}Wt.prototype.toString=function(){var s=[],a=this.j;a&&s.push(Fe(a,di,!0),":");var u=this.g;return(u||a=="file")&&(s.push("//"),(a=this.o)&&s.push(Fe(a,di,!0),"@"),s.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.s,u!=null&&s.push(":",String(u))),(u=this.l)&&(this.g&&u.charAt(0)!="/"&&s.push("/"),s.push(Fe(u,u.charAt(0)=="/"?yc:_c,!0))),(u=this.i.toString())&&s.push("?",u),(u=this.m)&&s.push("#",Fe(u,vc)),s.join("")};function kt(s){return new Wt(s)}function In(s,a,u){s.j=u?Me(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function An(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function hi(s,a,u){a instanceof Ue?(s.i=a,Tc(s.i,s.h)):(u||(a=Fe(a,Ec)),s.i=new Ue(a,s.h))}function Q(s,a,u){s.i.set(a,u)}function wn(s){return Q(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Me(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Fe(s,a,u){return typeof s=="string"?(s=encodeURI(s).replace(a,pc),u&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function pc(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var di=/[#\/\?@]/g,_c=/[#\?:]/g,yc=/[#\?]/g,Ec=/[#\?@]/g,vc=/#/g;function Ue(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Ft(s){s.g||(s.g=new Map,s.h=0,s.i&&mc(s.i,function(a,u){s.add(decodeURIComponent(a.replace(/\+/g," ")),u)}))}n=Ue.prototype,n.add=function(s,a){Ft(this),this.i=null,s=oe(this,s);var u=this.g.get(s);return u||this.g.set(s,u=[]),u.push(a),this.h+=1,this};function fi(s,a){Ft(s),a=oe(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function gi(s,a){return Ft(s),a=oe(s,a),s.g.has(a)}n.forEach=function(s,a){Ft(this),this.g.forEach(function(u,h){u.forEach(function(T){s.call(a,T,h,this)},this)},this)},n.na=function(){Ft(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),u=[];for(let h=0;h<a.length;h++){const T=s[h];for(let A=0;A<T.length;A++)u.push(a[h])}return u},n.V=function(s){Ft(this);let a=[];if(typeof s=="string")gi(this,s)&&(a=a.concat(this.g.get(oe(this,s))));else{s=Array.from(this.g.values());for(let u=0;u<s.length;u++)a=a.concat(s[u])}return a},n.set=function(s,a){return Ft(this),this.i=null,s=oe(this,s),gi(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},n.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function mi(s,a,u){fi(s,a),0<u.length&&(s.i=null,s.g.set(oe(s,a),L(u)),s.h+=u.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var u=0;u<a.length;u++){var h=a[u];const A=encodeURIComponent(String(h)),C=this.V(h);for(h=0;h<C.length;h++){var T=A;C[h]!==""&&(T+="="+encodeURIComponent(String(C[h]))),s.push(T)}}return this.i=s.join("&")};function oe(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function Tc(s,a){a&&!s.j&&(Ft(s),s.i=null,s.g.forEach(function(u,h){var T=h.toLowerCase();h!=T&&(fi(this,h),mi(this,T,u))},s)),s.j=a}function Ic(s,a){const u=new xe;if(l.Image){const h=new Image;h.onload=b(Ut,u,"TestLoadImage: loaded",!0,a,h),h.onerror=b(Ut,u,"TestLoadImage: error",!1,a,h),h.onabort=b(Ut,u,"TestLoadImage: abort",!1,a,h),h.ontimeout=b(Ut,u,"TestLoadImage: timeout",!1,a,h),l.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function Ac(s,a){const u=new xe,h=new AbortController,T=setTimeout(()=>{h.abort(),Ut(u,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(A=>{clearTimeout(T),A.ok?Ut(u,"TestPingServer: ok",!0,a):Ut(u,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(T),Ut(u,"TestPingServer: error",!1,a)})}function Ut(s,a,u,h,T){try{T&&(T.onload=null,T.onerror=null,T.onabort=null,T.ontimeout=null),h(u)}catch{}}function wc(){this.g=new oc}function Sc(s,a,u){const h=u||"";try{ui(s,function(T,A){let C=T;f(T)&&(C=gr(T)),a.push(h+A+"="+encodeURIComponent(C))})}catch(T){throw a.push(h+"type="+encodeURIComponent("_badmap")),T}}function Be(s){this.l=s.Ub||null,this.j=s.eb||!1}k(Be,mr),Be.prototype.g=function(){return new Sn(this.l,this.j)},Be.prototype.i=function(s){return function(){return s}}({});function Sn(s,a){gt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Sn,gt),n=Sn.prototype,n.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,qe(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||l).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,$e(this)),this.readyState=0},n.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,qe(this)),this.g&&(this.readyState=3,qe(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;pi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function pi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}n.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?$e(this):qe(this),this.readyState==3&&pi(this)}},n.Ra=function(s){this.g&&(this.response=this.responseText=s,$e(this))},n.Qa=function(s){this.g&&(this.response=s,$e(this))},n.ga=function(){this.g&&$e(this)};function $e(s){s.readyState=4,s.l=null,s.j=null,s.v=null,qe(s)}n.setRequestHeader=function(s,a){this.u.append(s,a)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var u=a.next();!u.done;)u=u.value,s.push(u[0]+": "+u[1]),u=a.next();return s.join(`\r
`)};function qe(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(Sn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function _i(s){let a="";return ct(s,function(u,h){a+=h,a+=":",a+=u,a+=`\r
`}),a}function Sr(s,a,u){t:{for(h in u){var h=!1;break t}h=!0}h||(u=_i(u),typeof s=="string"?u!=null&&encodeURIComponent(String(u)):Q(s,a,u))}function J(s){gt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(J,gt);var Rc=/^https?$/i,Cc=["POST","PUT"];n=J.prototype,n.Ha=function(s){this.J=s},n.ea=function(s,a,u,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():yr.g(),this.v=this.o?Ks(this.o):Ks(yr),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(A){yi(this,A);return}if(s=u||"",u=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var T in h)u.set(T,h[T]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const A of h.keys())u.set(A,h.get(A));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(u.keys()).find(A=>A.toLowerCase()=="content-type"),T=l.FormData&&s instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Cc,a,void 0))||h||T||u.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,C]of u)this.g.setRequestHeader(A,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ti(this),this.u=!0,this.g.send(s),this.u=!1}catch(A){yi(this,A)}};function yi(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Ei(s),Rn(s)}function Ei(s){s.A||(s.A=!0,vt(s,"complete"),vt(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,vt(this,"complete"),vt(this,"abort"),Rn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Rn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?vi(this):this.bb())},n.bb=function(){vi(this)};function vi(s){if(s.h&&typeof c<"u"&&(!s.v[1]||Nt(s)!=4||s.Z()!=2)){if(s.u&&Nt(s)==4)qs(s.Ea,0,s);else if(vt(s,"readystatechange"),Nt(s)==4){s.h=!1;try{const C=s.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var u;if(!(u=a)){var h;if(h=C===0){var T=String(s.D).match(li)[1]||null;!T&&l.self&&l.self.location&&(T=l.self.location.protocol.slice(0,-1)),h=!Rc.test(T?T.toLowerCase():"")}u=h}if(u)vt(s,"complete"),vt(s,"success");else{s.m=6;try{var A=2<Nt(s)?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.Z()+"]",Ei(s)}}finally{Rn(s)}}}}function Rn(s,a){if(s.g){Ti(s);const u=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||vt(s,"ready");try{u.onreadystatechange=h}catch{}}}function Ti(s){s.I&&(l.clearTimeout(s.I),s.I=null)}n.isActive=function(){return!!this.g};function Nt(s){return s.g?s.g.readyState:0}n.Z=function(){try{return 2<Nt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),ic(a)}};function Ii(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function bc(s){const a={};s=(s.g&&2<=Nt(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(Y(s[h]))continue;var u=E(s[h]);const T=u[0];if(u=u[1],typeof u!="string")continue;u=u.trim();const A=a[T]||[];a[T]=A,A.push(u)}v(a,function(h){return h.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function je(s,a,u){return u&&u.internalChannelParams&&u.internalChannelParams[s]||a}function Ai(s){this.Aa=0,this.i=[],this.j=new xe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=je("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=je("baseRetryDelayMs",5e3,s),this.cb=je("retryDelaySeedMs",1e4,s),this.Wa=je("forwardChannelMaxRetries",2,s),this.wa=je("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new si(s&&s.concurrentRequestLimit),this.Da=new wc,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ai.prototype,n.la=8,n.G=1,n.connect=function(s,a,u,h){Tt(0),this.W=s,this.H=a||{},u&&h!==void 0&&(this.H.OSID=u,this.H.OAID=h),this.F=this.X,this.I=ki(this,null,this.W),bn(this)};function Rr(s){if(wi(s),s.G==3){var a=s.U++,u=kt(s.I);if(Q(u,"SID",s.K),Q(u,"RID",a),Q(u,"TYPE","terminate"),ze(s,u),a=new Mt(s,s.j,a),a.L=2,a.v=wn(kt(u)),u=!1,l.navigator&&l.navigator.sendBeacon)try{u=l.navigator.sendBeacon(a.v.toString(),"")}catch{}!u&&l.Image&&(new Image().src=a.v,u=!0),u||(a.g=Ni(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Tn(a)}Di(s)}function Cn(s){s.g&&(br(s),s.g.cancel(),s.g=null)}function wi(s){Cn(s),s.u&&(l.clearTimeout(s.u),s.u=null),Pn(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&l.clearTimeout(s.s),s.s=null)}function bn(s){if(!ii(s.h)&&!s.s){s.s=!0;var a=s.Ga;be||Ms(),Pe||(be(),Pe=!0),or.add(a,s),s.B=0}}function Pc(s,a){return oi(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=Oe(S(s.Ga,s,a),Vi(s,s.B)),s.B++,!0)}n.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const T=new Mt(this,this.j,s);let A=this.o;if(this.S&&(A?(A=g(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(T.H=A,A=null),this.P)t:{for(var a=0,u=0;u<this.i.length;u++){e:{var h=this.i[u];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=u;break t}if(a===4096||u===this.i.length-1){a=u+1;break t}}a=1e3}else a=1e3;a=Ri(this,T,a),u=kt(this.I),Q(u,"RID",s),Q(u,"CVER",22),this.D&&Q(u,"X-HTTP-Session-Id",this.D),ze(this,u),A&&(this.O?a="headers="+encodeURIComponent(String(_i(A)))+"&"+a:this.m&&Sr(u,this.m,A)),wr(this.h,T),this.Ua&&Q(u,"TYPE","init"),this.P?(Q(u,"$req",a),Q(u,"SID","null"),T.T=!0,vr(T,u,null)):vr(T,u,a),this.G=2}}else this.G==3&&(s?Si(this,s):this.i.length==0||ii(this.h)||Si(this))};function Si(s,a){var u;a?u=a.l:u=s.U++;const h=kt(s.I);Q(h,"SID",s.K),Q(h,"RID",u),Q(h,"AID",s.T),ze(s,h),s.m&&s.o&&Sr(h,s.m,s.o),u=new Mt(s,s.j,u,s.B+1),s.m===null&&(u.H=s.o),a&&(s.i=a.D.concat(s.i)),a=Ri(s,u,1e3),u.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),wr(s.h,u),vr(u,h,a)}function ze(s,a){s.H&&ct(s.H,function(u,h){Q(a,h,u)}),s.l&&ui({},function(u,h){Q(a,h,u)})}function Ri(s,a,u){u=Math.min(s.i.length,u);var h=s.l?S(s.l.Na,s.l,s):null;t:{var T=s.i;let A=-1;for(;;){const C=["count="+u];A==-1?0<u?(A=T[0].g,C.push("ofs="+A)):A=0:C.push("ofs="+A);let G=!0;for(let ut=0;ut<u;ut++){let j=T[ut].g;const mt=T[ut].map;if(j-=A,0>j)A=Math.max(0,T[ut].g-100),G=!1;else try{Sc(mt,C,"req"+j+"_")}catch{h&&h(mt)}}if(G){h=C.join("&");break t}}}return s=s.i.splice(0,u),a.D=s,h}function Ci(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;be||Ms(),Pe||(be(),Pe=!0),or.add(a,s),s.v=0}}function Cr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=Oe(S(s.Fa,s),Vi(s,s.v)),s.v++,!0)}n.Fa=function(){if(this.u=null,bi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=Oe(S(this.ab,this),s)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),Cn(this),bi(this))};function br(s){s.A!=null&&(l.clearTimeout(s.A),s.A=null)}function bi(s){s.g=new Mt(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=kt(s.qa);Q(a,"RID","rpc"),Q(a,"SID",s.K),Q(a,"AID",s.T),Q(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&Q(a,"TO",s.ja),Q(a,"TYPE","xmlhttp"),ze(s,a),s.m&&s.o&&Sr(a,s.m,s.o),s.L&&(s.g.I=s.L);var u=s.g;s=s.ia,u.L=1,u.v=wn(kt(a)),u.m=null,u.P=!0,ei(u,s)}n.Za=function(){this.C!=null&&(this.C=null,Cn(this),Cr(this),Tt(19))};function Pn(s){s.C!=null&&(l.clearTimeout(s.C),s.C=null)}function Pi(s,a){var u=null;if(s.g==a){Pn(s),br(s),s.g=null;var h=2}else if(Ar(s.h,a))u=a.D,ai(s.h,a),h=1;else return;if(s.G!=0){if(a.o)if(h==1){u=a.m?a.m.length:0,a=Date.now()-a.F;var T=s.B;h=yn(),vt(h,new Xs(h,u)),bn(s)}else Ci(s);else if(T=a.s,T==3||T==0&&0<a.X||!(h==1&&Pc(s,a)||h==2&&Cr(s)))switch(u&&0<u.length&&(a=s.h,a.i=a.i.concat(u)),T){case 1:Yt(s,5);break;case 4:Yt(s,10);break;case 3:Yt(s,6);break;default:Yt(s,2)}}}function Vi(s,a){let u=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(u*=2),u*a}function Yt(s,a){if(s.j.info("Error code "+a),a==2){var u=S(s.fb,s),h=s.Xa;const T=!h;h=new Wt(h||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||In(h,"https"),wn(h),T?Ic(h.toString(),u):Ac(h.toString(),u)}else Tt(2);s.G=0,s.l&&s.l.sa(a),Di(s),wi(s)}n.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function Di(s){if(s.G=0,s.ka=[],s.l){const a=ci(s.h);(a.length!=0||s.i.length!=0)&&(D(s.ka,a),D(s.ka,s.i),s.h.i.length=0,L(s.i),s.i.length=0),s.l.ra()}}function ki(s,a,u){var h=u instanceof Wt?kt(u):new Wt(u);if(h.g!="")a&&(h.g=a+"."+h.g),An(h,h.s);else{var T=l.location;h=T.protocol,a=a?a+"."+T.hostname:T.hostname,T=+T.port;var A=new Wt(null);h&&In(A,h),a&&(A.g=a),T&&An(A,T),u&&(A.l=u),h=A}return u=s.D,a=s.ya,u&&a&&Q(h,u,a),Q(h,"VER",s.la),ze(s,h),h}function Ni(s,a,u){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new J(new Be({eb:u})):new J(s.pa),a.Ha(s.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oi(){}n=Oi.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Vn(){}Vn.prototype.g=function(s,a){return new wt(s,a)};function wt(s,a){gt.call(this),this.g=new Ai(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!Y(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!Y(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new ae(this)}k(wt,gt),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Rr(this.g)},wt.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var u={};u.__data__=s,s=u}else this.u&&(u={},u.__data__=gr(s),s=u);a.i.push(new dc(a.Ya++,s)),a.G==3&&bn(a)},wt.prototype.N=function(){this.g.l=null,delete this.j,Rr(this.g),delete this.g,wt.aa.N.call(this)};function xi(s){pr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const u in a){s=u;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}k(xi,pr);function Li(){_r.call(this),this.status=1}k(Li,_r);function ae(s){this.g=s}k(ae,Oi),ae.prototype.ua=function(){vt(this.g,"a")},ae.prototype.ta=function(s){vt(this.g,new xi(s))},ae.prototype.sa=function(s){vt(this.g,new Li)},ae.prototype.ra=function(){vt(this.g,"b")},Vn.prototype.createWebChannel=Vn.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,Zo=function(){return new Vn},Jo=function(){return yn()},Xo=Gt,Gr={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},En.NO_ERROR=0,En.TIMEOUT=8,En.HTTP_ERROR=6,Ln=En,Js.COMPLETE="complete",Yo=Js,Gs.EventType=ke,ke.OPEN="a",ke.CLOSE="b",ke.ERROR="c",ke.MESSAGE="d",gt.prototype.listen=gt.prototype.K,Qe=Gs,Wo=Be,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,Qo=J}).apply(typeof kn<"u"?kn:typeof self<"u"?self:typeof window<"u"?window:{});const Wi="@firebase/firestore";/**
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
 */class yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
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
 */let we="10.12.5";/**
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
 */const ne=new $o("@firebase/firestore");function Ke(){return ne.logLevel}function V(n,...t){if(ne.logLevel<=$.DEBUG){const e=t.map(fs);ne.debug(`Firestore (${we}): ${n}`,...e)}}function xt(n,...t){if(ne.logLevel<=$.ERROR){const e=t.map(fs);ne.error(`Firestore (${we}): ${n}`,...e)}}function pe(n,...t){if(ne.logLevel<=$.WARN){const e=t.map(fs);ne.warn(`Firestore (${we}): ${n}`,...e)}}function fs(n){if(typeof n=="string")return n;try{/**
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
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function M(n="Unexpected state"){const t=`FIRESTORE (${we}) INTERNAL ASSERTION FAILED: `+n;throw xt(t),new Error(t)}function st(n,t){n||M()}function B(n,t){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends Ae{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class ta{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Dl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(yt.UNAUTHENTICATED))}shutdown(){}}class kl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Nl{constructor(t){this.t=t,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=d=>this.i!==r?(r=this.i,e(d)):Promise.resolve();let o=new fe;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new fe,t.enqueueRetryable(()=>i(this.currentUser))};const c=()=>{const d=o;t.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},l=d=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),c()};this.t.onInit(d=>l(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?l(d):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new fe)}},0),c()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(st(typeof r.accessToken=="string"),new ta(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return st(t===null||typeof t=="string"),new yt(t)}}class Ol{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xl{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Ol(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ll{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ml{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const c=o.token!==this.R;return this.R=o.token,V("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(st(typeof e.token=="string"),this.R=e.token,new Ll(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Fl(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class ea{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Fl(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<e&&(r+=t.charAt(i[o]%t.length))}return r}}function z(n,t){return n<t?-1:n>t?1:0}function _e(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
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
 */class At{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return At.fromMillis(Date.now())}static fromDate(t){return At.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new At(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class x{constructor(t){this.timestamp=t}static fromTimestamp(t){return new x(t)}static min(){return new x(new At(0,0))}static max(){return new x(new At(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class sn{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(),r===void 0?r=t.length-e:r>t.length-e&&M(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return sn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof sn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const o=t.get(i),c=e.get(i);if(o<c)return-1;if(o>c)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Z extends sn{construct(t,e,r){return new Z(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new N(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new Z(e)}static emptyPath(){return new Z([])}}const Ul=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class It extends sn{construct(t,e,r){return new It(t,e,r)}static isValidIdentifier(t){return Ul.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),It.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new It(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const o=()=>{if(r.length===0)throw new N(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let c=!1;for(;i<t.length;){const l=t[i];if(l==="\\"){if(i+1===t.length)throw new N(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const d=t[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new N(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=d,i+=2}else l==="`"?(c=!c,i++):l!=="."||c?(r+=l,i++):(o(),i++)}if(o(),c)throw new N(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new It(e)}static emptyPath(){return new It([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(Z.fromString(t))}static fromName(t){return new O(Z.fromString(t).popFirst(5))}static empty(){return new O(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Z.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Z.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new Z(t.slice()))}}function Bl(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=x.fromTimestamp(r===1e9?new At(e+1,0):new At(e,r));return new zt(i,O.empty(),t)}function $l(n){return new zt(n.readTime,n.key,-1)}class zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new zt(x.min(),O.empty(),-1)}static max(){return new zt(x.max(),O.empty(),-1)}}function ql(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(n.documentKey,t.documentKey),e!==0?e:z(n.largestBatchId,t.largestBatchId))}/**
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
 */const jl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function gs(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==jl)throw n;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new R((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof R?e:R.resolve(e)}catch(e){return R.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):R.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):R.reject(e)}static resolve(t){return new R((e,r)=>{e(t)})}static reject(t){return new R((e,r)=>{r(t)})}static waitFor(t){return new R((e,r)=>{let i=0,o=0,c=!1;t.forEach(l=>{++i,l.next(()=>{++o,c&&o===i&&e()},d=>r(d))}),c=!0,o===i&&e()})}static or(t){let e=R.resolve(!1);for(const r of t)e=e.next(i=>i?R.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,o)=>{r.push(e.call(this,i,o))}),this.waitFor(r)}static mapArray(t,e){return new R((r,i)=>{const o=t.length,c=new Array(o);let l=0;for(let d=0;d<o;d++){const f=d;e(t[f]).next(_=>{c[f]=_,++l,l===o&&r(c)},_=>i(_))}})}static doWhile(t,e){return new R((r,i)=>{const o=()=>{t()===!0?e().next(()=>{o()},i):r()};o()})}}function Hl(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function ln(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ms{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}ms.oe=-1;function Yn(n){return n==null}function Qr(n){return n===0&&1/n==-1/0}/**
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
 */function Yi(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Xn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Kl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class tt{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new tt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Nn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Nn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Nn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Nn(this.root,t,this.comparator,!0)}}class Nn{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,r,i,o){this.key=t,this.value=e,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,o){return new lt(t??this.key,e??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const o=r(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,r),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,r,i,o){return this}insert(t,e,r){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(t){this.comparator=t,this.data=new tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xi(this.data.getIterator())}getIteratorFrom(t){return new Xi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class Xi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Bt{constructor(t){this.fields=t,t.sort(It.comparator)}static empty(){return new Bt([])}unionWith(t){let e=new ht(It.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Bt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return _e(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class na extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new na("Invalid base64 string: "+o):o}}(t);return new dt(e)}static fromUint8Array(t){const e=function(i){let o="";for(let c=0;c<i.length;++c)o+=String.fromCharCode(i[c]);return o}(t);return new dt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const Gl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ht(n){if(st(!!n),typeof n=="string"){let t=0;const e=Gl.exec(n);if(st(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rt(n.seconds),nanos:rt(n.nanos)}}function rt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function re(n){return typeof n=="string"?dt.fromBase64String(n):dt.fromUint8Array(n)}/**
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
 */function ps(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function _s(n){const t=n.mapValue.fields.__previous_value__;return ps(t)?_s(t):t}function on(n){const t=Ht(n.mapValue.fields.__local_write_time__.timestampValue);return new At(t.seconds,t.nanos)}/**
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
 */class Ql{constructor(t,e,r,i,o,c,l,d,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=c,this.autoDetectLongPolling=l,this.longPollingOptions=d,this.useFetchStreams=f}}class an{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new an("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof an&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const On={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function se(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ps(n)?4:Wl(n)?9007199254740991:10:M()}function bt(n,t){if(n===t)return!0;const e=se(n);if(e!==se(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return on(n).isEqual(on(t));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const c=Ht(i.timestampValue),l=Ht(o.timestampValue);return c.seconds===l.seconds&&c.nanos===l.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,o){return re(i.bytesValue).isEqual(re(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,o){return rt(i.geoPointValue.latitude)===rt(o.geoPointValue.latitude)&&rt(i.geoPointValue.longitude)===rt(o.geoPointValue.longitude)}(n,t);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return rt(i.integerValue)===rt(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const c=rt(i.doubleValue),l=rt(o.doubleValue);return c===l?Qr(c)===Qr(l):isNaN(c)&&isNaN(l)}return!1}(n,t);case 9:return _e(n.arrayValue.values||[],t.arrayValue.values||[],bt);case 10:return function(i,o){const c=i.mapValue.fields||{},l=o.mapValue.fields||{};if(Yi(c)!==Yi(l))return!1;for(const d in c)if(c.hasOwnProperty(d)&&(l[d]===void 0||!bt(c[d],l[d])))return!1;return!0}(n,t);default:return M()}}function cn(n,t){return(n.values||[]).find(e=>bt(e,t))!==void 0}function ye(n,t){if(n===t)return 0;const e=se(n),r=se(t);if(e!==r)return z(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(n.booleanValue,t.booleanValue);case 2:return function(o,c){const l=rt(o.integerValue||o.doubleValue),d=rt(c.integerValue||c.doubleValue);return l<d?-1:l>d?1:l===d?0:isNaN(l)?isNaN(d)?0:-1:1}(n,t);case 3:return Ji(n.timestampValue,t.timestampValue);case 4:return Ji(on(n),on(t));case 5:return z(n.stringValue,t.stringValue);case 6:return function(o,c){const l=re(o),d=re(c);return l.compareTo(d)}(n.bytesValue,t.bytesValue);case 7:return function(o,c){const l=o.split("/"),d=c.split("/");for(let f=0;f<l.length&&f<d.length;f++){const _=z(l[f],d[f]);if(_!==0)return _}return z(l.length,d.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,c){const l=z(rt(o.latitude),rt(c.latitude));return l!==0?l:z(rt(o.longitude),rt(c.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,c){const l=o.values||[],d=c.values||[];for(let f=0;f<l.length&&f<d.length;++f){const _=ye(l[f],d[f]);if(_)return _}return z(l.length,d.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,c){if(o===On.mapValue&&c===On.mapValue)return 0;if(o===On.mapValue)return 1;if(c===On.mapValue)return-1;const l=o.fields||{},d=Object.keys(l),f=c.fields||{},_=Object.keys(f);d.sort(),_.sort();for(let w=0;w<d.length&&w<_.length;++w){const S=z(d[w],_[w]);if(S!==0)return S;const b=ye(l[d[w]],f[_[w]]);if(b!==0)return b}return z(d.length,_.length)}(n.mapValue,t.mapValue);default:throw M()}}function Ji(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return z(n,t);const e=Ht(n),r=Ht(t),i=z(e.seconds,r.seconds);return i!==0?i:z(e.nanos,r.nanos)}function Ee(n){return Wr(n)}function Wr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ht(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return re(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return O.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const o of e.values||[])i?i=!1:r+=",",r+=Wr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const c of r)o?o=!1:i+=",",i+=`${c}:${Wr(e.fields[c])}`;return i+"}"}(n.mapValue):M()}function Yr(n){return!!n&&"integerValue"in n}function ys(n){return!!n&&"arrayValue"in n}function Zi(n){return!!n&&"nullValue"in n}function to(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Or(n){return!!n&&"mapValue"in n}function Je(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Xn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Je(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Je(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Wl(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Rt{constructor(t){this.value=t}static empty(){return new Rt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Or(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Je(e)}setAll(t){let e=It.emptyPath(),r={},i=[];t.forEach((c,l)=>{if(!e.isImmediateParentOf(l)){const d=this.getFieldsMap(e);this.applyChanges(d,r,i),r={},i=[],e=l.popLast()}c?r[l.lastSegment()]=Je(c):i.push(l.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,i)}delete(t){const e=this.field(t.popLast());Or(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return bt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];Or(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){Xn(e,(i,o)=>t[i]=o);for(const i of r)delete t[i]}clone(){return new Rt(Je(this.value))}}/**
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
 */class Et{constructor(t,e,r,i,o,c,l){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=o,this.data=c,this.documentState=l}static newInvalidDocument(t){return new Et(t,0,x.min(),x.min(),x.min(),Rt.empty(),0)}static newFoundDocument(t,e,r,i){return new Et(t,1,e,x.min(),r,i,0)}static newNoDocument(t,e){return new Et(t,2,e,x.min(),x.min(),Rt.empty(),0)}static newUnknownDocument(t,e){return new Et(t,3,e,x.min(),x.min(),Rt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Et&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class zn{constructor(t,e){this.position=t,this.inclusive=e}}function eo(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const o=t[i],c=n.position[i];if(o.field.isKeyField()?r=O.comparator(O.fromName(c.referenceValue),e.key):r=ye(c,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function no(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!bt(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Hn{constructor(t,e="asc"){this.field=t,this.dir=e}}function Yl(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class ra{}class it extends ra{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Jl(t,e,r):e==="array-contains"?new eh(t,r):e==="in"?new nh(t,r):e==="not-in"?new rh(t,r):e==="array-contains-any"?new sh(t,r):new it(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Zl(t,r):new th(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ye(e,this.value)):e!==null&&se(this.value)===se(e)&&this.matchesComparison(ye(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Pt extends ra{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Pt(t,e)}matches(t){return sa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function sa(n){return n.op==="and"}function ia(n){return Xl(n)&&sa(n)}function Xl(n){for(const t of n.filters)if(t instanceof Pt)return!1;return!0}function Xr(n){if(n instanceof it)return n.field.canonicalString()+n.op.toString()+Ee(n.value);if(ia(n))return n.filters.map(t=>Xr(t)).join(",");{const t=n.filters.map(e=>Xr(e)).join(",");return`${n.op}(${t})`}}function oa(n,t){return n instanceof it?function(r,i){return i instanceof it&&r.op===i.op&&r.field.isEqual(i.field)&&bt(r.value,i.value)}(n,t):n instanceof Pt?function(r,i){return i instanceof Pt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,c,l)=>o&&oa(c,i.filters[l]),!0):!1}(n,t):void M()}function aa(n){return n instanceof it?function(e){return`${e.field.canonicalString()} ${e.op} ${Ee(e.value)}`}(n):n instanceof Pt?function(e){return e.op.toString()+" {"+e.getFilters().map(aa).join(" ,")+"}"}(n):"Filter"}class Jl extends it{constructor(t,e,r){super(t,e,r),this.key=O.fromName(r.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Zl extends it{constructor(t,e){super(t,"in",e),this.keys=ca("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class th extends it{constructor(t,e){super(t,"not-in",e),this.keys=ca("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function ca(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>O.fromName(r.referenceValue))}class eh extends it{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ys(e)&&cn(e.arrayValue,this.value)}}class nh extends it{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&cn(this.value.arrayValue,e)}}class rh extends it{constructor(t,e){super(t,"not-in",e)}matches(t){if(cn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!cn(this.value.arrayValue,e)}}class sh extends it{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ys(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>cn(this.value.arrayValue,r))}}/**
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
 */class ih{constructor(t,e=null,r=[],i=[],o=null,c=null,l=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=c,this.endAt=l,this.ue=null}}function ro(n,t=null,e=[],r=[],i=null,o=null,c=null){return new ih(n,t,e,r,i,o,c)}function Es(n){const t=B(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Xr(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Yn(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Ee(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Ee(r)).join(",")),t.ue=e}return t.ue}function vs(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Yl(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!oa(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!no(n.startAt,t.startAt)&&no(n.endAt,t.endAt)}function Jr(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Jn{constructor(t,e=null,r=[],i=[],o=null,c="F",l=null,d=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=c,this.startAt=l,this.endAt=d,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function oh(n,t,e,r,i,o,c,l){return new Jn(n,t,e,r,i,o,c,l)}function Ts(n){return new Jn(n)}function so(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ah(n){return n.collectionGroup!==null}function Ze(n){const t=B(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(c){let l=new ht(It.comparator);return c.filters.forEach(d=>{d.getFlattenedFilters().forEach(f=>{f.isInequality()&&(l=l.add(f.field))})}),l})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Hn(o,r))}),e.has(It.keyField().canonicalString())||t.ce.push(new Hn(It.keyField(),r))}return t.ce}function Ct(n){const t=B(n);return t.le||(t.le=ch(t,Ze(n))),t.le}function ch(n,t){if(n.limitType==="F")return ro(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new Hn(i.field,o)});const e=n.endAt?new zn(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new zn(n.startAt.position,n.startAt.inclusive):null;return ro(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Zr(n,t,e){return new Jn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Zn(n,t){return vs(Ct(n),Ct(t))&&n.limitType===t.limitType}function ua(n){return`${Es(Ct(n))}|lt:${n.limitType}`}function ue(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>aa(i)).join(", ")}]`),Yn(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>Ee(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>Ee(i)).join(",")),`Target(${r})`}(Ct(n))}; limitType=${n.limitType})`}function tr(n,t){return t.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):O.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,i){for(const o of Ze(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(c,l,d){const f=eo(c,l,d);return c.inclusive?f<=0:f<0}(r.startAt,Ze(r),i)||r.endAt&&!function(c,l,d){const f=eo(c,l,d);return c.inclusive?f>=0:f>0}(r.endAt,Ze(r),i))}(n,t)}function uh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function la(n){return(t,e)=>{let r=!1;for(const i of Ze(n)){const o=lh(i,t,e);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function lh(n,t,e){const r=n.field.isKeyField()?O.comparator(t.key,e.key):function(o,c,l){const d=c.data.field(o),f=l.data.field(o);return d!==null&&f!==null?ye(d,f):M()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
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
 */class Se{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Xn(this.inner,(e,r)=>{for(const[i,o]of r)t(i,o)})}isEmpty(){return Kl(this.inner)}size(){return this.innerSize}}/**
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
 */const hh=new tt(O.comparator);function Kt(){return hh}const ha=new tt(O.comparator);function We(...n){let t=ha;for(const e of n)t=t.insert(e.key,e);return t}function dh(n){let t=ha;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Jt(){return tn()}function da(){return tn()}function tn(){return new Se(n=>n.toString(),(n,t)=>n.isEqual(t))}const fh=new ht(O.comparator);function q(...n){let t=fh;for(const e of n)t=t.add(e);return t}const gh=new ht(z);function mh(){return gh}/**
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
 */function ph(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qr(t)?"-0":t}}function _h(n){return{integerValue:""+n}}/**
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
 */class er{constructor(){this._=void 0}}function yh(n,t,e){return n instanceof ts?function(i,o){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&ps(o)&&(o=_s(o)),o&&(c.fields.__previous_value__=o),{mapValue:c}}(e,t):n instanceof Kn?fa(n,t):n instanceof Gn?ga(n,t):function(i,o){const c=vh(i,o),l=io(c)+io(i.Pe);return Yr(c)&&Yr(i.Pe)?_h(l):ph(i.serializer,l)}(n,t)}function Eh(n,t,e){return n instanceof Kn?fa(n,t):n instanceof Gn?ga(n,t):e}function vh(n,t){return n instanceof es?function(r){return Yr(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class ts extends er{}class Kn extends er{constructor(t){super(),this.elements=t}}function fa(n,t){const e=ma(t);for(const r of n.elements)e.some(i=>bt(i,r))||e.push(r);return{arrayValue:{values:e}}}class Gn extends er{constructor(t){super(),this.elements=t}}function ga(n,t){let e=ma(t);for(const r of n.elements)e=e.filter(i=>!bt(i,r));return{arrayValue:{values:e}}}class es extends er{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function io(n){return rt(n.integerValue||n.doubleValue)}function ma(n){return ys(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Th(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Kn&&i instanceof Kn||r instanceof Gn&&i instanceof Gn?_e(r.elements,i.elements,bt):r instanceof es&&i instanceof es?bt(r.Pe,i.Pe):r instanceof ts&&i instanceof ts}(n.transform,t.transform)}class te{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new te}static exists(t){return new te(void 0,t)}static updateTime(t){return new te(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mn(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Is{}function pa(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ah(n.key,te.none()):new As(n.key,n.data,te.none());{const e=n.data,r=Rt.empty();let i=new ht(It.comparator);for(let o of t.fields)if(!i.has(o)){let c=e.field(o);c===null&&o.length>1&&(o=o.popLast(),c=e.field(o)),c===null?r.delete(o):r.set(o,c),i=i.add(o)}return new nr(n.key,r,new Bt(i.toArray()),te.none())}}function Ih(n,t,e){n instanceof As?function(i,o,c){const l=i.value.clone(),d=ao(i.fieldTransforms,o,c.transformResults);l.setAll(d),o.convertToFoundDocument(c.version,l).setHasCommittedMutations()}(n,t,e):n instanceof nr?function(i,o,c){if(!Mn(i.precondition,o))return void o.convertToUnknownDocument(c.version);const l=ao(i.fieldTransforms,o,c.transformResults),d=o.data;d.setAll(_a(i)),d.setAll(l),o.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,t,e):function(i,o,c){o.convertToNoDocument(c.version).setHasCommittedMutations()}(0,t,e)}function en(n,t,e,r){return n instanceof As?function(o,c,l,d){if(!Mn(o.precondition,c))return l;const f=o.value.clone(),_=co(o.fieldTransforms,d,c);return f.setAll(_),c.convertToFoundDocument(c.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof nr?function(o,c,l,d){if(!Mn(o.precondition,c))return l;const f=co(o.fieldTransforms,d,c),_=c.data;return _.setAll(_a(o)),_.setAll(f),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(w=>w.field))}(n,t,e,r):function(o,c,l){return Mn(o.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):l}(n,t,e)}function oo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_e(r,i,(o,c)=>Th(o,c))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class As extends Is{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class nr extends Is{constructor(t,e,r,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function _a(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ao(n,t,e){const r=new Map;st(n.length===e.length);for(let i=0;i<e.length;i++){const o=n[i],c=o.transform,l=t.data.field(o.field);r.set(o.field,Eh(c,l,e[i]))}return r}function co(n,t,e){const r=new Map;for(const i of n){const o=i.transform,c=e.data.field(i.field);r.set(i.field,yh(o,c,t))}return r}class Ah extends Is{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class wh{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Ih(o,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=en(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=en(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=da();return this.mutations.forEach(i=>{const o=t.get(i.key),c=o.overlayedDocument;let l=this.applyToLocalView(c,o.mutatedFields);l=e.has(i.key)?null:l;const d=pa(c,l);d!==null&&r.set(i.key,d),c.isValidDocument()||c.convertToNoDocument(x.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&_e(this.mutations,t.mutations,(e,r)=>oo(e,r))&&_e(this.baseMutations,t.baseMutations,(e,r)=>oo(e,r))}}/**
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
 */class Sh{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Rh{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var nt,U;function ya(n){if(n===void 0)return xt("GRPC error has no .code"),P.UNKNOWN;switch(n){case nt.OK:return P.OK;case nt.CANCELLED:return P.CANCELLED;case nt.UNKNOWN:return P.UNKNOWN;case nt.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case nt.INTERNAL:return P.INTERNAL;case nt.UNAVAILABLE:return P.UNAVAILABLE;case nt.UNAUTHENTICATED:return P.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case nt.NOT_FOUND:return P.NOT_FOUND;case nt.ALREADY_EXISTS:return P.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return P.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case nt.ABORTED:return P.ABORTED;case nt.OUT_OF_RANGE:return P.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return P.UNIMPLEMENTED;case nt.DATA_LOSS:return P.DATA_LOSS;default:return M()}}(U=nt||(nt={}))[U.OK=0]="OK",U[U.CANCELLED=1]="CANCELLED",U[U.UNKNOWN=2]="UNKNOWN",U[U.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",U[U.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",U[U.NOT_FOUND=5]="NOT_FOUND",U[U.ALREADY_EXISTS=6]="ALREADY_EXISTS",U[U.PERMISSION_DENIED=7]="PERMISSION_DENIED",U[U.UNAUTHENTICATED=16]="UNAUTHENTICATED",U[U.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",U[U.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",U[U.ABORTED=10]="ABORTED",U[U.OUT_OF_RANGE=11]="OUT_OF_RANGE",U[U.UNIMPLEMENTED=12]="UNIMPLEMENTED",U[U.INTERNAL=13]="INTERNAL",U[U.UNAVAILABLE=14]="UNAVAILABLE",U[U.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ch(){return new TextEncoder}/**
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
 */const bh=new Zt([4294967295,4294967295],0);function uo(n){const t=Ch().encode(n),e=new Go;return e.update(t),new Uint8Array(e.digest())}function lo(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Zt([e,r],0),new Zt([i,o],0)]}class ws{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Ye(`Invalid padding: ${e}`);if(r<0)throw new Ye(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ye(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Ye(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Zt.fromNumber(this.Ie)}Ee(t,e,r){let i=t.add(e.multiply(Zt.fromNumber(r)));return i.compare(bh)===1&&(i=new Zt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=uo(t),[r,i]=lo(e);for(let o=0;o<this.hashCount;o++){const c=this.Ee(r,i,o);if(!this.de(c))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),c=new ws(o,i,e);return r.forEach(l=>c.insert(l)),c}insert(t){if(this.Ie===0)return;const e=uo(t),[r,i]=lo(e);for(let o=0;o<this.hashCount;o++){const c=this.Ee(r,i,o);this.Ae(c)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Ye extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rr{constructor(t,e,r,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,hn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new rr(x.min(),i,new tt(z),Kt(),q())}}class hn{constructor(t,e,r,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new hn(r,e,q(),q(),q())}}/**
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
 */class Fn{constructor(t,e,r,i){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=i}}class Ea{constructor(t,e){this.targetId=t,this.me=e}}class va{constructor(t,e,r=dt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class ho{constructor(){this.fe=0,this.ge=go(),this.pe=dt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=q(),e=q(),r=q();return this.ge.forEach((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:M()}}),new hn(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=go()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,st(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ph{constructor(t){this.Le=t,this.Be=new Map,this.ke=Kt(),this.qe=fo(),this.Qe=new tt(z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,i)=>{this.ze(i)&&e(i)})}He(t){const e=t.targetId,r=t.me.count,i=this.Je(e);if(i){const o=i.target;if(Jr(o))if(r===0){const c=new O(o.path);this.Ue(e,c,Et.newNoDocument(c,x.min()))}else st(r===1);else{const c=this.Ye(e);if(c!==r){const l=this.Ze(t),d=l?this.Xe(l,t,c):1;if(d!==0){this.je(e);const f=d===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=e;let c,l;try{c=re(r).toUint8Array()}catch(d){if(d instanceof na)return pe("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw d}try{l=new ws(c,i,o)}catch(d){return pe(d instanceof Ye?"BloomFilter error: ":"Applying bloom filter failed: ",d),null}return l.Ie===0?null:l}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(o=>{const c=this.Le.tt(),l=`projects/${c.projectId}/databases/${c.database}/documents/${o.path.canonicalString()}`;t.mightContain(l)||(this.Ue(e,o,null),i++)}),i}rt(t){const e=new Map;this.Be.forEach((o,c)=>{const l=this.Je(c);if(l){if(o.current&&Jr(l.target)){const d=new O(l.target.path);this.ke.get(d)!==null||this.it(c,d)||this.Ue(c,d,Et.newNoDocument(d,t))}o.be&&(e.set(c,o.Ce()),o.ve())}});let r=q();this.qe.forEach((o,c)=>{let l=!0;c.forEachWhile(d=>{const f=this.Je(d);return!f||f.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(o))}),this.ke.forEach((o,c)=>c.setReadTime(t));const i=new rr(t,e,this.Qe,this.ke,r);return this.ke=Kt(),this.qe=fo(),this.Qe=new tt(z),i}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const i=this.Ge(t);this.it(t,e)?i.Fe(e,1):i.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new ho,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ht(z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||V("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new ho),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function fo(){return new tt(O.comparator)}function go(){return new tt(O.comparator)}const Vh={asc:"ASCENDING",desc:"DESCENDING"},Dh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},kh={and:"AND",or:"OR"};class Nh{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ns(n,t){return n.useProto3Json||Yn(t)?t:{value:t}}function Oh(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xh(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function ge(n){return st(!!n),x.fromTimestamp(function(e){const r=Ht(e);return new At(r.seconds,r.nanos)}(n))}function Lh(n,t){return rs(n,t).canonicalString()}function rs(n,t){const e=function(i){return new Z(["projects",i.projectId,"databases",i.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Ta(n){const t=Z.fromString(n);return st(Ra(t)),t}function xr(n,t){const e=Ta(t);if(e.get(1)!==n.databaseId.projectId)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new N(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new O(Aa(e))}function Ia(n,t){return Lh(n.databaseId,t)}function Mh(n){const t=Ta(n);return t.length===4?Z.emptyPath():Aa(t)}function mo(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Aa(n){return st(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Fh(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=function(f,_){return f.useProto3Json?(st(_===void 0||typeof _=="string"),dt.fromBase64String(_||"")):(st(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),dt.fromUint8Array(_||new Uint8Array))}(n,t.targetChange.resumeToken),c=t.targetChange.cause,l=c&&function(f){const _=f.code===void 0?P.UNKNOWN:ya(f.code);return new N(_,f.message||"")}(c);e=new va(r,i,o,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=xr(n,r.document.name),o=ge(r.document.updateTime),c=r.document.createTime?ge(r.document.createTime):x.min(),l=new Rt({mapValue:{fields:r.document.fields}}),d=Et.newFoundDocument(i,o,c,l),f=r.targetIds||[],_=r.removedTargetIds||[];e=new Fn(f,_,d.key,d)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=xr(n,r.document),o=r.readTime?ge(r.readTime):x.min(),c=Et.newNoDocument(i,o),l=r.removedTargetIds||[];e=new Fn([],l,c.key,c)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=xr(n,r.document),o=r.removedTargetIds||[];e=new Fn([],o,i,null)}else{if(!("filter"in t))return M();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,c=new Rh(i,o),l=r.targetId;e=new Ea(l,c)}}return e}function Uh(n,t){return{documents:[Ia(n,t.path)]}}function Bh(n,t){const e={structuredQuery:{}},r=t.path;let i;t.collectionGroup!==null?(i=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Ia(n,i);const o=function(f){if(f.length!==0)return Sa(Pt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const c=function(f){if(f.length!==0)return f.map(_=>function(S){return{field:le(S.field),direction:jh(S.dir)}}(_))}(t.orderBy);c&&(e.structuredQuery.orderBy=c);const l=ns(n,t.limit);return l!==null&&(e.structuredQuery.limit=l),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:i}}function $h(n){let t=Mh(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){st(r===1);const _=e.from[0];_.allDescendants?i=_.collectionId:t=t.child(_.collectionId)}let o=[];e.where&&(o=function(w){const S=wa(w);return S instanceof Pt&&ia(S)?S.getFilters():[S]}(e.where));let c=[];e.orderBy&&(c=function(w){return w.map(S=>function(k){return new Hn(he(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(S))}(e.orderBy));let l=null;e.limit&&(l=function(w){let S;return S=typeof w=="object"?w.value:w,Yn(S)?null:S}(e.limit));let d=null;e.startAt&&(d=function(w){const S=!!w.before,b=w.values||[];return new zn(b,S)}(e.startAt));let f=null;return e.endAt&&(f=function(w){const S=!w.before,b=w.values||[];return new zn(b,S)}(e.endAt)),oh(t,i,c,o,l,"F",d,f)}function qh(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function wa(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=he(e.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=he(e.unaryFilter.field);return it.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=he(e.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=he(e.unaryFilter.field);return it.create(c,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return it.create(he(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Pt.create(e.compositeFilter.filters.map(r=>wa(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function jh(n){return Vh[n]}function zh(n){return Dh[n]}function Hh(n){return kh[n]}function le(n){return{fieldPath:n.canonicalString()}}function he(n){return It.fromServerFormat(n.fieldPath)}function Sa(n){return n instanceof it?function(e){if(e.op==="=="){if(to(e.value))return{unaryFilter:{field:le(e.field),op:"IS_NAN"}};if(Zi(e.value))return{unaryFilter:{field:le(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(to(e.value))return{unaryFilter:{field:le(e.field),op:"IS_NOT_NAN"}};if(Zi(e.value))return{unaryFilter:{field:le(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:le(e.field),op:zh(e.op),value:e.value}}}(n):n instanceof Pt?function(e){const r=e.getFilters().map(i=>Sa(i));return r.length===1?r[0]:{compositeFilter:{op:Hh(e.op),filters:r}}}(n):M()}function Ra(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class $t{constructor(t,e,r,i,o=x.min(),c=x.min(),l=dt.EMPTY_BYTE_STRING,d=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=l,this.expectedCount=d}withSequenceNumber(t){return new $t(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $t(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Kh{constructor(t){this.ct=t}}function Gh(n){const t=$h({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zr(t,t.limit,"L"):t}/**
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
 */class Qh{constructor(){this.an=new Wh}addToCollectionParentIndex(t,e){return this.an.add(e),R.resolve()}getCollectionParents(t,e){return R.resolve(this.an.getEntries(e))}addFieldIndex(t,e){return R.resolve()}deleteFieldIndex(t,e){return R.resolve()}deleteAllFieldIndexes(t){return R.resolve()}createTargetIndexes(t,e){return R.resolve()}getDocumentsMatchingTarget(t,e){return R.resolve(null)}getIndexType(t,e){return R.resolve(0)}getFieldIndexes(t,e){return R.resolve([])}getNextCollectionGroupToUpdate(t){return R.resolve(null)}getMinOffset(t,e){return R.resolve(zt.min())}getMinOffsetFromCollectionGroup(t,e){return R.resolve(zt.min())}updateCollectionGroup(t,e,r){return R.resolve()}updateIndexEntries(t,e){return R.resolve()}}class Wh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new ht(Z.comparator),o=!i.has(r);return this.index[e]=i.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new ht(Z.comparator)).toArray()}}/**
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
 */class ve{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Ln(){return new ve(0)}static Bn(){return new ve(-1)}}/**
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
 */class Yh{constructor(){this.changes=new Se(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Et.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?R.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Xh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Jh{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&en(r.mutation,i,Bt.empty(),At.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=q()){const i=Jt();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(o=>{let c=We();return o.forEach((l,d)=>{c=c.insert(l,d.overlayedDocument)}),c}))}getOverlayedDocuments(t,e){const r=Jt();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,q()))}populateOverlays(t,e,r){const i=[];return r.forEach(o=>{e.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(t,i).next(o=>{o.forEach((c,l)=>{e.set(c,l)})})}computeViews(t,e,r,i){let o=Kt();const c=tn(),l=function(){return tn()}();return e.forEach((d,f)=>{const _=r.get(f.key);i.has(f.key)&&(_===void 0||_.mutation instanceof nr)?o=o.insert(f.key,f):_!==void 0?(c.set(f.key,_.mutation.getFieldMask()),en(_.mutation,f,_.mutation.getFieldMask(),At.now())):c.set(f.key,Bt.empty())}),this.recalculateAndSaveOverlays(t,o).next(d=>(d.forEach((f,_)=>c.set(f,_)),e.forEach((f,_)=>{var w;return l.set(f,new Xh(_,(w=c.get(f))!==null&&w!==void 0?w:null))}),l))}recalculateAndSaveOverlays(t,e){const r=tn();let i=new tt((c,l)=>c-l),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(c=>{for(const l of c)l.keys().forEach(d=>{const f=e.get(d);if(f===null)return;let _=r.get(d)||Bt.empty();_=l.applyToLocalView(f,_),r.set(d,_);const w=(i.get(l.batchId)||q()).add(d);i=i.insert(l.batchId,w)})}).next(()=>{const c=[],l=i.getReverseIterator();for(;l.hasNext();){const d=l.getNext(),f=d.key,_=d.value,w=da();_.forEach(S=>{if(!o.has(S)){const b=pa(e.get(S),r.get(S));b!==null&&w.set(S,b),o=o.add(S)}}),c.push(this.documentOverlayCache.saveOverlays(t,f,w))}return R.waitFor(c)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(c){return O.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ah(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(o=>{const c=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-o.size):R.resolve(Jt());let l=-1,d=o;return c.next(f=>R.forEach(f,(_,w)=>(l<w.largestBatchId&&(l=w.largestBatchId),o.get(_)?R.resolve():this.remoteDocumentCache.getEntry(t,_).next(S=>{d=d.insert(_,S)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,d,f,q())).next(_=>({batchId:l,changes:dh(_)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next(r=>{let i=We();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const o=e.collectionGroup;let c=We();return this.indexManager.getCollectionParents(t,o).next(l=>R.forEach(l,d=>{const f=function(w,S){return new Jn(S,null,w.explicitOrderBy.slice(),w.filters.slice(),w.limit,w.limitType,w.startAt,w.endAt)}(e,d.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,i).next(_=>{_.forEach((w,S)=>{c=c.insert(w,S)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(t,e,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(c=>(o=c,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,i))).next(c=>{o.forEach((d,f)=>{const _=f.getKey();c.get(_)===null&&(c=c.insert(_,Et.newInvalidDocument(_)))});let l=We();return c.forEach((d,f)=>{const _=o.get(d);_!==void 0&&en(_.mutation,f,Bt.empty(),At.now()),tr(e,f)&&(l=l.insert(d,f))}),l})}}/**
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
 */class Zh{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,e){return R.resolve(this.lr.get(e))}saveBundleMetadata(t,e){return this.lr.set(e.id,function(i){return{id:i.id,version:i.version,createTime:ge(i.createTime)}}(e)),R.resolve()}getNamedQuery(t,e){return R.resolve(this.hr.get(e))}saveNamedQuery(t,e){return this.hr.set(e.name,function(i){return{name:i.name,query:Gh(i.bundledQuery),readTime:ge(i.readTime)}}(e)),R.resolve()}}/**
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
 */class td{constructor(){this.overlays=new tt(O.comparator),this.Pr=new Map}getOverlay(t,e){return R.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Jt();return R.forEach(e,i=>this.getOverlay(t,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,o)=>{this.ht(t,e,o)}),R.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.Pr.delete(r)),R.resolve()}getOverlaysForCollection(t,e,r){const i=Jt(),o=e.length+1,c=new O(e.child("")),l=this.overlays.getIteratorFrom(c);for(;l.hasNext();){const d=l.getNext().value,f=d.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&d.largestBatchId>r&&i.set(d.getKey(),d)}return R.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let o=new tt((f,_)=>f-_);const c=this.overlays.getIterator();for(;c.hasNext();){const f=c.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let _=o.get(f.largestBatchId);_===null&&(_=Jt(),o=o.insert(f.largestBatchId,_)),_.set(f.getKey(),f)}}const l=Jt(),d=o.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((f,_)=>l.set(f,_)),!(l.size()>=i)););return R.resolve(l)}ht(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new Sh(e,r));let o=this.Pr.get(e);o===void 0&&(o=q(),this.Pr.set(e,o)),this.Pr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ed{constructor(){this.sessionToken=dt.EMPTY_BYTE_STRING}getSessionToken(t){return R.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,R.resolve()}}/**
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
 */class Ss{constructor(){this.Ir=new ht(at.Tr),this.Er=new ht(at.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(t,e){const r=new at(t,e);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Rr(new at(t,e))}Vr(t,e){t.forEach(r=>this.removeReference(r,e))}mr(t){const e=new O(new Z([])),r=new at(e,t),i=new at(e,t+1),o=[];return this.Er.forEachInRange([r,i],c=>{this.Rr(c),o.push(c.key)}),o}gr(){this.Ir.forEach(t=>this.Rr(t))}Rr(t){this.Ir=this.Ir.delete(t),this.Er=this.Er.delete(t)}pr(t){const e=new O(new Z([])),r=new at(e,t),i=new at(e,t+1);let o=q();return this.Er.forEachInRange([r,i],c=>{o=o.add(c.key)}),o}containsKey(t){const e=new at(t,0),r=this.Ir.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.yr=e}static Tr(t,e){return O.comparator(t.key,e.key)||z(t.yr,e.yr)}static dr(t,e){return z(t.yr,e.yr)||O.comparator(t.key,e.key)}}/**
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
 */class nd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.wr=1,this.Sr=new ht(at.Tr)}checkEmpty(t){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const o=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new wh(o,e,r,i);this.mutationQueue.push(c);for(const l of i)this.Sr=this.Sr.add(new at(l.key,o)),this.indexManager.addToCollectionParentIndex(t,l.key.path.popLast());return R.resolve(c)}lookupMutationBatch(t,e){return R.resolve(this.br(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Dr(r),o=i<0?0:i;return R.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(t){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),i=new at(e,Number.POSITIVE_INFINITY),o=[];return this.Sr.forEachInRange([r,i],c=>{const l=this.br(c.yr);o.push(l)}),R.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ht(z);return e.forEach(i=>{const o=new at(i,0),c=new at(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([o,c],l=>{r=r.add(l.yr)})}),R.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let o=r;O.isDocumentKey(o)||(o=o.child(""));const c=new at(new O(o),0);let l=new ht(z);return this.Sr.forEachWhile(d=>{const f=d.key.path;return!!r.isPrefixOf(f)&&(f.length===i&&(l=l.add(d.yr)),!0)},c),R.resolve(this.Cr(l))}Cr(t){const e=[];return t.forEach(r=>{const i=this.br(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){st(this.vr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return R.forEach(e.mutations,i=>{const o=new at(i.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Sr=r})}xn(t){}containsKey(t,e){const r=new at(e,0),i=this.Sr.firstAfterOrEqual(r);return R.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,R.resolve()}vr(t,e){return this.Dr(t)}Dr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}br(t){const e=this.Dr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class rd{constructor(t){this.Fr=t,this.docs=function(){return new tt(O.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),o=i?i.size:0,c=this.Fr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:c}),this.size+=c-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return R.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(e))}getEntries(t,e){let r=Kt();return e.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Et.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let o=Kt();const c=e.path,l=new O(c.child("")),d=this.docs.getIteratorFrom(l);for(;d.hasNext();){const{key:f,value:{document:_}}=d.getNext();if(!c.isPrefixOf(f.path))break;f.path.length>c.length+1||ql($l(_),r)<=0||(i.has(_.key)||tr(e,_))&&(o=o.insert(_.key,_.mutableCopy()))}return R.resolve(o)}getAllFromCollectionGroup(t,e,r,i){M()}Mr(t,e){return R.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new sd(this)}getSize(t){return R.resolve(this.size)}}class sd extends Yh{constructor(t){super(),this.ur=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this.ur.addEntry(t,i)):this.ur.removeEntry(r)}),R.waitFor(e)}getFromCache(t,e){return this.ur.getEntry(t,e)}getAllFromCache(t,e){return this.ur.getEntries(t,e)}}/**
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
 */class id{constructor(t){this.persistence=t,this.Or=new Se(e=>Es(e),vs),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new Ss,this.targetCount=0,this.Br=ve.Ln()}forEachTarget(t,e){return this.Or.forEach((r,i)=>e(i)),R.resolve()}getLastRemoteSnapshotVersion(t){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return R.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Nr&&(this.Nr=e),R.resolve()}Qn(t){this.Or.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new ve(e),this.highestTargetId=e),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,e){return this.Qn(e),this.targetCount+=1,R.resolve()}updateTargetData(t,e){return this.Qn(e),R.resolve()}removeTargetData(t,e){return this.Or.delete(e.target),this.Lr.mr(e.targetId),this.targetCount-=1,R.resolve()}removeTargets(t,e,r){let i=0;const o=[];return this.Or.forEach((c,l)=>{l.sequenceNumber<=e&&r.get(l.targetId)===null&&(this.Or.delete(c),o.push(this.removeMatchingKeysForTargetId(t,l.targetId)),i++)}),R.waitFor(o).next(()=>i)}getTargetCount(t){return R.resolve(this.targetCount)}getTargetData(t,e){const r=this.Or.get(e)||null;return R.resolve(r)}addMatchingKeys(t,e,r){return this.Lr.Ar(e,r),R.resolve()}removeMatchingKeys(t,e,r){this.Lr.Vr(e,r);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach(c=>{o.push(i.markPotentiallyOrphaned(t,c))}),R.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Lr.mr(e),R.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Lr.pr(e);return R.resolve(r)}containsKey(t,e){return R.resolve(this.Lr.containsKey(e))}}/**
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
 */class od{constructor(t,e){this.kr={},this.overlays={},this.qr=new ms(0),this.Qr=!1,this.Qr=!0,this.Kr=new ed,this.referenceDelegate=t(this),this.$r=new id(this),this.indexManager=new Qh,this.remoteDocumentCache=function(i){return new rd(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new Kh(e),this.Wr=new Zh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new td,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.kr[t.toKey()];return r||(r=new nd(e,this.referenceDelegate),this.kr[t.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(t,e,r){V("MemoryPersistence","Starting transaction:",t);const i=new ad(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(o=>this.referenceDelegate.zr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}jr(t,e){return R.or(Object.values(this.kr).map(r=>()=>r.containsKey(t,e)))}}class ad extends zl{constructor(t){super(),this.currentSequenceNumber=t}}class Rs{constructor(t){this.persistence=t,this.Hr=new Ss,this.Jr=null}static Yr(t){return new Rs(t)}get Zr(){if(this.Jr)return this.Jr;throw M()}addReference(t,e,r){return this.Hr.addReference(r,e),this.Zr.delete(r.toString()),R.resolve()}removeReference(t,e,r){return this.Hr.removeReference(r,e),this.Zr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(t,e){return this.Zr.add(e.toString()),R.resolve()}removeTarget(t,e){this.Hr.mr(e.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(o=>this.Zr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Gr(){this.Jr=new Set}zr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Zr,r=>{const i=O.fromPath(r);return this.Xr(t,i).next(o=>{o||e.removeEntry(i,x.min())})}).next(()=>(this.Jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Xr(t,e).next(r=>{r?this.Zr.delete(e.toString()):this.Zr.add(e.toString())})}Ur(t){return 0}Xr(t,e){return R.or([()=>R.resolve(this.Hr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.jr(t,e)])}}/**
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
 */class Cs{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.Ki=r,this.$i=i}static Ui(t,e){let r=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Cs(t,e.fromCache,r,i)}}/**
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
 */class cd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class ud{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return gu()?8:Hl(du())>0?6:4}()}initialize(t,e){this.Hi=t,this.indexManager=e,this.Wi=!0}getDocumentsMatchingQuery(t,e,r,i){const o={result:null};return this.Ji(t,e).next(c=>{o.result=c}).next(()=>{if(!o.result)return this.Yi(t,e,i,r).next(c=>{o.result=c})}).next(()=>{if(o.result)return;const c=new cd;return this.Zi(t,e,c).next(l=>{if(o.result=l,this.Gi)return this.Xi(t,e,c,l.size)})}).next(()=>o.result)}Xi(t,e,r,i){return r.documentReadCount<this.zi?(Ke()<=$.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",ue(e),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),R.resolve()):(Ke()<=$.DEBUG&&V("QueryEngine","Query:",ue(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(Ke()<=$.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",ue(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ct(e))):R.resolve())}Ji(t,e){if(so(e))return R.resolve(null);let r=Ct(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=Zr(e,null,"F"),r=Ct(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const c=q(...o);return this.Hi.getDocuments(t,c).next(l=>this.indexManager.getMinOffset(t,r).next(d=>{const f=this.es(e,l);return this.ts(e,f,c,d.readTime)?this.Ji(t,Zr(e,null,"F")):this.ns(t,f,e,d)}))})))}Yi(t,e,r,i){return so(e)||i.isEqual(x.min())?R.resolve(null):this.Hi.getDocuments(t,r).next(o=>{const c=this.es(e,o);return this.ts(e,c,r,i)?R.resolve(null):(Ke()<=$.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ue(e)),this.ns(t,c,e,Bl(i,-1)).next(l=>l))})}es(t,e){let r=new ht(la(t));return e.forEach((i,o)=>{tr(t,o)&&(r=r.add(o))}),r}ts(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Zi(t,e,r){return Ke()<=$.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",ue(e)),this.Hi.getDocumentsMatchingQuery(t,e,zt.min(),r)}ns(t,e,r,i){return this.Hi.getDocumentsMatchingQuery(t,r,i).next(o=>(e.forEach(c=>{o=o.insert(c.key,c)}),o))}}/**
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
 */class ld{constructor(t,e,r,i){this.persistence=t,this.rs=e,this.serializer=i,this.ss=new tt(z),this.os=new Se(o=>Es(o),vs),this._s=new Map,this.us=t.getRemoteDocumentCache(),this.$r=t.getTargetCache(),this.Wr=t.getBundleCache(),this.cs(r)}cs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Jh(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ss))}}function hd(n,t,e,r){return new ld(n,t,e,r)}async function Ca(n,t){const e=B(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,e.cs(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const c=[],l=[];let d=q();for(const f of i){c.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}for(const f of o){l.push(f.batchId);for(const _ of f.mutations)d=d.add(_.key)}return e.localDocuments.getDocuments(r,d).next(f=>({ls:f,removedBatchIds:c,addedBatchIds:l}))})})}function ba(n){const t=B(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.$r.getLastRemoteSnapshotVersion(e))}function dd(n,t){const e=B(n),r=t.snapshotVersion;let i=e.ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const c=e.us.newChangeBuffer({trackRemovals:!0});i=e.ss;const l=[];t.targetChanges.forEach((_,w)=>{const S=i.get(w);if(!S)return;l.push(e.$r.removeMatchingKeys(o,_.removedDocuments,w).next(()=>e.$r.addMatchingKeys(o,_.addedDocuments,w)));let b=S.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(w)!==null?b=b.withResumeToken(dt.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):_.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(_.resumeToken,r)),i=i.insert(w,b),function(L,D,W){return L.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:W.addedDocuments.size+W.modifiedDocuments.size+W.removedDocuments.size>0}(S,b,_)&&l.push(e.$r.updateTargetData(o,b))});let d=Kt(),f=q();if(t.documentUpdates.forEach(_=>{t.resolvedLimboDocuments.has(_)&&l.push(e.persistence.referenceDelegate.updateLimboDocument(o,_))}),l.push(fd(o,c,t.documentUpdates).next(_=>{d=_.hs,f=_.Ps})),!r.isEqual(x.min())){const _=e.$r.getLastRemoteSnapshotVersion(o).next(w=>e.$r.setTargetsMetadata(o,o.currentSequenceNumber,r));l.push(_)}return R.waitFor(l).next(()=>c.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,d,f)).next(()=>d)}).then(o=>(e.ss=i,o))}function fd(n,t,e){let r=q(),i=q();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let c=Kt();return e.forEach((l,d)=>{const f=o.get(l);d.isFoundDocument()!==f.isFoundDocument()&&(i=i.add(l)),d.isNoDocument()&&d.version.isEqual(x.min())?(t.removeEntry(l,d.readTime),c=c.insert(l,d)):!f.isValidDocument()||d.version.compareTo(f.version)>0||d.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(d),c=c.insert(l,d)):V("LocalStore","Ignoring outdated watch update for ",l,". Current version:",f.version," Watch version:",d.version)}),{hs:c,Ps:i}})}function gd(n,t){const e=B(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.$r.getTargetData(r,t).next(o=>o?(i=o,R.resolve(i)):e.$r.allocateTargetId(r).next(c=>(i=new $t(t,c,"TargetPurposeListen",r.currentSequenceNumber),e.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ss=e.ss.insert(r.targetId,r),e.os.set(t,r.targetId)),r})}async function ss(n,t,e){const r=B(n),i=r.ss.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,c=>r.persistence.referenceDelegate.removeTarget(c,i))}catch(c){if(!ln(c))throw c;V("LocalStore",`Failed to update sequence numbers for target ${t}: ${c}`)}r.ss=r.ss.remove(t),r.os.delete(i.target)}function po(n,t,e){const r=B(n);let i=x.min(),o=q();return r.persistence.runTransaction("Execute query","readwrite",c=>function(d,f,_){const w=B(d),S=w.os.get(_);return S!==void 0?R.resolve(w.ss.get(S)):w.$r.getTargetData(f,_)}(r,c,Ct(t)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(c,l.targetId).next(d=>{o=d})}).next(()=>r.rs.getDocumentsMatchingQuery(c,t,e?i:x.min(),e?o:q())).next(l=>(md(r,uh(t),l),{documents:l,Is:o})))}function md(n,t,e){let r=n._s.get(t)||x.min();e.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n._s.set(t,r)}class _o{constructor(){this.activeTargetIds=mh()}Vs(t){this.activeTargetIds=this.activeTargetIds.add(t)}fs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Rs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class pd{constructor(){this.io=new _o,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.io.Vs(t),this.so[t]||"not-current"}updateQueryState(t,e,r){this.so[t]=e}removeLocalQueryTarget(t){this.io.fs(t)}isLocalQueryTarget(t){return this.io.activeTargetIds.has(t)}clearQueryState(t){delete this.so[t]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(t){return this.io.activeTargetIds.has(t)}start(){return this.io=new _o,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class _d{oo(t){}shutdown(){}}/**
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
 */class yo{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(t){this.lo.push(t)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.lo)t(0)}co(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.lo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let xn=null;function Lr(){return xn===null?xn=function(){return 268435456+Math.round(2147483648*Math.random())}():xn++,"0x"+xn.toString(16)}/**
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
 */const yd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Ed{constructor(t){this.Po=t.Po,this.Io=t.Io}To(t){this.Eo=t}Ao(t){this.Ro=t}Vo(t){this.mo=t}onMessage(t){this.fo=t}close(){this.Io()}send(t){this.Po(t)}po(){this.Eo()}yo(){this.Ro()}wo(t){this.mo(t)}So(t){this.fo(t)}}/**
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
 */const _t="WebChannelConnection";class vd extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+e.host,this.Do=`projects/${i}/databases/${o}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get vo(){return!1}Fo(e,r,i,o,c){const l=Lr(),d=this.Mo(e,r.toUriEncodedString());V("RestConnection",`Sending RPC '${e}' ${l}:`,d,i);const f={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(f,o,c),this.Oo(e,d,f,i).then(_=>(V("RestConnection",`Received RPC '${e}' ${l}: `,_),_),_=>{throw pe("RestConnection",`RPC '${e}' ${l} failed with error: `,_,"url: ",d,"request:",i),_})}No(e,r,i,o,c,l){return this.Fo(e,r,i,o,c)}xo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+we}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,c)=>e[c]=o),i&&i.headers.forEach((o,c)=>e[c]=o)}Mo(e,r){const i=yd[e];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Oo(t,e,r,i){const o=Lr();return new Promise((c,l)=>{const d=new Qo;d.setWithCredentials(!0),d.listenOnce(Yo.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Ln.NO_ERROR:const _=d.getResponseJson();V(_t,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(_)),c(_);break;case Ln.TIMEOUT:V(_t,`RPC '${t}' ${o} timed out`),l(new N(P.DEADLINE_EXCEEDED,"Request time out"));break;case Ln.HTTP_ERROR:const w=d.getStatus();if(V(_t,`RPC '${t}' ${o} failed with status:`,w,"response text:",d.getResponseText()),w>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const b=S==null?void 0:S.error;if(b&&b.status&&b.message){const k=function(D){const W=D.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(W)>=0?W:P.UNKNOWN}(b.status);l(new N(k,b.message))}else l(new N(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new N(P.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{V(_t,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(i);V(_t,`RPC '${t}' ${o} sending request:`,i),d.send(e,"POST",f,r,15)})}Lo(t,e,r){const i=Lr(),o=[this.bo,"/","google.firestore.v1.Firestore","/",t,"/channel"],c=Zo(),l=Jo(),d={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(d.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(d.xmlHttpFactory=new Wo({})),this.xo(d.initMessageHeaders,e,r),d.encodeInitMessageHeaders=!0;const _=o.join("");V(_t,`Creating RPC '${t}' stream ${i}: ${_}`,d);const w=c.createWebChannel(_,d);let S=!1,b=!1;const k=new Ed({Po:D=>{b?V(_t,`Not sending because RPC '${t}' stream ${i} is closed:`,D):(S||(V(_t,`Opening RPC '${t}' stream ${i} transport.`),w.open(),S=!0),V(_t,`RPC '${t}' stream ${i} sending:`,D),w.send(D))},Io:()=>w.close()}),L=(D,W,Y)=>{D.listen(W,X=>{try{Y(X)}catch(ot){setTimeout(()=>{throw ot},0)}})};return L(w,Qe.EventType.OPEN,()=>{b||(V(_t,`RPC '${t}' stream ${i} transport opened.`),k.po())}),L(w,Qe.EventType.CLOSE,()=>{b||(b=!0,V(_t,`RPC '${t}' stream ${i} transport closed`),k.wo())}),L(w,Qe.EventType.ERROR,D=>{b||(b=!0,pe(_t,`RPC '${t}' stream ${i} transport errored:`,D),k.wo(new N(P.UNAVAILABLE,"The operation could not be completed")))}),L(w,Qe.EventType.MESSAGE,D=>{var W;if(!b){const Y=D.data[0];st(!!Y);const X=Y,ot=X.error||((W=X[0])===null||W===void 0?void 0:W.error);if(ot){V(_t,`RPC '${t}' stream ${i} received error:`,ot);const Vt=ot.status;let ct=function(p){const y=nt[p];if(y!==void 0)return ya(y)}(Vt),v=ot.message;ct===void 0&&(ct=P.INTERNAL,v="Unknown error status: "+Vt+" with message "+ot.message),b=!0,k.wo(new N(ct,v)),w.close()}else V(_t,`RPC '${t}' stream ${i} received:`,Y),k.So(Y)}}),L(l,Xo.STAT_EVENT,D=>{D.stat===Gr.PROXY?V(_t,`RPC '${t}' stream ${i} detected buffering proxy`):D.stat===Gr.NOPROXY&&V(_t,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.yo()},0),k}}function Mr(){return typeof document<"u"?document:null}/**
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
 */function Pa(n){return new Nh(n,!0)}/**
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
 */class Va{constructor(t,e,r=1e3,i=1.5,o=6e4){this.ai=t,this.timerId=e,this.Bo=r,this.ko=i,this.qo=o,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(t){this.cancel();const e=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,e-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),t())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
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
 */class Td{constructor(t,e,r,i,o,c,l,d){this.ai=t,this.jo=r,this.Ho=i,this.connection=o,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=l,this.listener=d,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new Va(t,e)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(t){this.a_(),this.stream.send(t)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(t,e){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,t!==4?this.e_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(xt(e.toString()),xt("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Vo(e)}c_(){}auth(){this.state=1;const t=this.l_(this.Jo),e=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===e&&this.h_(r,i)},r=>{t(()=>{const i=new N(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(t,e){const r=this.l_(this.Jo);this.stream=this.I_(t,e),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(t){return V("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}l_(t){return e=>{this.ai.enqueueAndForget(()=>this.Jo===t?e():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Id extends Td{constructor(t,e,r,i,o,c){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,c),this.serializer=o}I_(t,e){return this.connection.Lo("Listen",t,e)}T_(t){return this.onNext(t)}onNext(t){this.e_.reset();const e=Fh(this.serializer,t),r=function(o){if(!("targetChange"in o))return x.min();const c=o.targetChange;return c.targetIds&&c.targetIds.length?x.min():c.readTime?ge(c.readTime):x.min()}(t);return this.listener.E_(e,r)}d_(t){const e={};e.database=mo(this.serializer),e.addTarget=function(o,c){let l;const d=c.target;if(l=Jr(d)?{documents:Uh(o,d)}:{query:Bh(o,d)._t},l.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){l.resumeToken=xh(o,c.resumeToken);const f=ns(o,c.expectedCount);f!==null&&(l.expectedCount=f)}else if(c.snapshotVersion.compareTo(x.min())>0){l.readTime=Oh(o,c.snapshotVersion.toTimestamp());const f=ns(o,c.expectedCount);f!==null&&(l.expectedCount=f)}return l}(this.serializer,t);const r=qh(this.serializer,t);r&&(e.labels=r),this.__(e)}A_(t){const e={};e.database=mo(this.serializer),e.removeTarget=t,this.__(e)}}/**
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
 */class Ad extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(t,e,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Fo(t,rs(e,r),i,o,c)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(P.UNKNOWN,o.toString())})}No(t,e,r,i,o){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,l])=>this.connection.No(t,rs(e,r),i,c,l,o)).catch(c=>{throw c.name==="FirebaseError"?(c.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new N(P.UNKNOWN,c.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class wd{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(t){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.M_(),this.w_=0,t==="Online"&&(this.b_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}v_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(xt(e),this.b_=!1):V("OnlineStateTracker",e)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
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
 */class Sd{constructor(t,e,r,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=o,this.B_.oo(c=>{r.enqueueAndForget(async()=>{fn(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(d){const f=B(d);f.N_.add(4),await dn(f),f.k_.set("Unknown"),f.N_.delete(4),await sr(f)}(this))})}),this.k_=new wd(r,i)}}async function sr(n){if(fn(n))for(const t of n.L_)await t(!0)}async function dn(n){for(const t of n.L_)await t(!1)}function Da(n,t){const e=B(n);e.O_.has(t.targetId)||(e.O_.set(t.targetId,t),Ds(e)?Vs(e):Re(e).n_()&&Ps(e,t))}function bs(n,t){const e=B(n),r=Re(e);e.O_.delete(t),r.n_()&&ka(e,t),e.O_.size===0&&(r.n_()?r.s_():fn(e)&&e.k_.set("Unknown"))}function Ps(n,t){if(n.q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(x.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Re(n).d_(t)}function ka(n,t){n.q_.xe(t),Re(n).A_(t)}function Vs(n){n.q_=new Ph({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.O_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Re(n).start(),n.k_.D_()}function Ds(n){return fn(n)&&!Re(n).t_()&&n.O_.size>0}function fn(n){return B(n).N_.size===0}function Na(n){n.q_=void 0}async function Rd(n){n.k_.set("Online")}async function Cd(n){n.O_.forEach((t,e)=>{Ps(n,t)})}async function bd(n,t){Na(n),Ds(n)?(n.k_.F_(t),Vs(n)):n.k_.set("Unknown")}async function Pd(n,t,e){if(n.k_.set("Online"),t instanceof va&&t.state===2&&t.cause)try{await async function(i,o){const c=o.cause;for(const l of o.targetIds)i.O_.has(l)&&(await i.remoteSyncer.rejectListen(l,c),i.O_.delete(l),i.q_.removeTarget(l))}(n,t)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Eo(n,r)}else if(t instanceof Fn?n.q_.Ke(t):t instanceof Ea?n.q_.He(t):n.q_.We(t),!e.isEqual(x.min()))try{const r=await ba(n.localStore);e.compareTo(r)>=0&&await function(o,c){const l=o.q_.rt(c);return l.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const _=o.O_.get(f);_&&o.O_.set(f,_.withResumeToken(d.resumeToken,c))}}),l.targetMismatches.forEach((d,f)=>{const _=o.O_.get(d);if(!_)return;o.O_.set(d,_.withResumeToken(dt.EMPTY_BYTE_STRING,_.snapshotVersion)),ka(o,d);const w=new $t(_.target,d,f,_.sequenceNumber);Ps(o,w)}),o.remoteSyncer.applyRemoteEvent(l)}(n,e)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Eo(n,r)}}async function Eo(n,t,e){if(!ln(t))throw t;n.N_.add(1),await dn(n),n.k_.set("Offline"),e||(e=()=>ba(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await e(),n.N_.delete(1),await sr(n)})}async function vo(n,t){const e=B(n);e.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=fn(e);e.N_.add(3),await dn(e),r&&e.k_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.N_.delete(3),await sr(e)}async function Vd(n,t){const e=B(n);t?(e.N_.delete(2),await sr(e)):t||(e.N_.add(2),await dn(e),e.k_.set("Unknown"))}function Re(n){return n.Q_||(n.Q_=function(e,r,i){const o=B(e);return o.y_(),new Id(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{To:Rd.bind(null,n),Ao:Cd.bind(null,n),Vo:bd.bind(null,n),E_:Pd.bind(null,n)}),n.L_.push(async t=>{t?(n.Q_.i_(),Ds(n)?Vs(n):n.k_.set("Unknown")):(await n.Q_.stop(),Na(n))})),n.Q_}/**
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
 */class ks{constructor(t,e,r,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new fe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,o){const c=Date.now()+r,l=new ks(t,e,c,i,o);return l.start(r),l}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oa(n,t){if(xt("AsyncQueue",`${t}: ${n}`),ln(n))return new N(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class me{constructor(t){this.comparator=t?(e,r)=>t(e,r)||O.comparator(e.key,r.key):(e,r)=>O.comparator(e.key,r.key),this.keyedMap=We(),this.sortedSet=new tt(this.comparator)}static emptySet(t){return new me(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof me)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new me;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class To{constructor(){this.U_=new tt(O.comparator)}track(t){const e=t.doc.key,r=this.U_.get(e);r?t.type!==0&&r.type===3?this.U_=this.U_.insert(e,t):t.type===3&&r.type!==1?this.U_=this.U_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.U_=this.U_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.U_=this.U_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.U_=this.U_.remove(e):t.type===1&&r.type===2?this.U_=this.U_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.U_=this.U_.insert(e,{type:2,doc:t.doc}):M():this.U_=this.U_.insert(e,t)}W_(){const t=[];return this.U_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Te{constructor(t,e,r,i,o,c,l,d,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=c,this.syncStateChanged=l,this.excludesMetadataChanges=d,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,i,o){const c=[];return e.forEach(l=>{c.push({type:0,doc:l})}),new Te(t,e,me.emptySet(e),c,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class Dd{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(t=>t.H_())}}class kd{constructor(){this.queries=Io(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(e,r){const i=B(e),o=i.queries;i.queries=Io(),o.forEach((c,l)=>{for(const d of l.z_)d.onError(r)})})(this,new N(P.ABORTED,"Firestore shutting down"))}}function Io(){return new Se(n=>ua(n),Zn)}async function Nd(n,t){const e=B(n);let r=3;const i=t.query;let o=e.queries.get(i);o?!o.j_()&&t.H_()&&(r=2):(o=new Dd,r=t.H_()?0:1);try{switch(r){case 0:o.G_=await e.onListen(i,!0);break;case 1:o.G_=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(c){const l=Oa(c,`Initialization of query '${ue(t.query)}' failed`);return void t.onError(l)}e.queries.set(i,o),o.z_.push(t),t.Y_(e.onlineState),o.G_&&t.Z_(o.G_)&&Ns(e)}async function Od(n,t){const e=B(n),r=t.query;let i=3;const o=e.queries.get(r);if(o){const c=o.z_.indexOf(t);c>=0&&(o.z_.splice(c,1),o.z_.length===0?i=t.H_()?0:1:!o.j_()&&t.H_()&&(i=2))}switch(i){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function xd(n,t){const e=B(n);let r=!1;for(const i of t){const o=i.query,c=e.queries.get(o);if(c){for(const l of c.z_)l.Z_(i)&&(r=!0);c.G_=i}}r&&Ns(e)}function Ld(n,t,e){const r=B(n),i=r.queries.get(t);if(i)for(const o of i.z_)o.onError(e);r.queries.delete(t)}function Ns(n){n.J_.forEach(t=>{t.next()})}var is,Ao;(Ao=is||(is={})).X_="default",Ao.Cache="cache";class Md{constructor(t,e,r){this.query=t,this.ea=e,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Te(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ta?this.ra(t)&&(this.ea.next(t),e=!0):this.ia(t,this.onlineState)&&(this.sa(t),e=!0),this.na=t,e}onError(t){this.ea.error(t)}Y_(t){this.onlineState=t;let e=!1;return this.na&&!this.ta&&this.ia(this.na,t)&&(this.sa(this.na),e=!0),e}ia(t,e){if(!t.fromCache||!this.H_())return!0;const r=e!=="Offline";return(!this.options.oa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ra(t){if(t.docChanges.length>0)return!0;const e=this.na&&this.na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}sa(t){t=Te.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ta=!0,this.ea.next(t)}H_(){return this.options.source!==is.Cache}}/**
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
 */class xa{constructor(t){this.key=t}}class La{constructor(t){this.key=t}}class Fd{constructor(t,e){this.query=t,this.Ia=e,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=q(),this.mutatedKeys=q(),this.da=la(t),this.Aa=new me(this.da)}get Ra(){return this.Ia}Va(t,e){const r=e?e.ma:new To,i=e?e.Aa:this.Aa;let o=e?e.mutatedKeys:this.mutatedKeys,c=i,l=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,f=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((_,w)=>{const S=i.get(_),b=tr(this.query,w)?w:null,k=!!S&&this.mutatedKeys.has(S.key),L=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let D=!1;S&&b?S.data.isEqual(b.data)?k!==L&&(r.track({type:3,doc:b}),D=!0):this.fa(S,b)||(r.track({type:2,doc:b}),D=!0,(d&&this.da(b,d)>0||f&&this.da(b,f)<0)&&(l=!0)):!S&&b?(r.track({type:0,doc:b}),D=!0):S&&!b&&(r.track({type:1,doc:S}),D=!0,(d||f)&&(l=!0)),D&&(b?(c=c.add(b),o=L?o.add(_):o.delete(_)):(c=c.delete(_),o=o.delete(_)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),o=o.delete(_.key),r.track({type:1,doc:_})}return{Aa:c,ma:r,ts:l,mutatedKeys:o}}fa(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,i){const o=this.Aa;this.Aa=t.Aa,this.mutatedKeys=t.mutatedKeys;const c=t.ma.W_();c.sort((_,w)=>function(b,k){const L=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return L(b)-L(k)}(_.type,w.type)||this.da(_.doc,w.doc)),this.ga(r),i=i!=null&&i;const l=e&&!i?this.pa():[],d=this.Ea.size===0&&this.current&&!i?1:0,f=d!==this.Ta;return this.Ta=d,c.length!==0||f?{snapshot:new Te(this.query,t.Aa,o,c,t.mutatedKeys,d===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:l}:{ya:l}}Y_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new To,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(t){return!this.Ia.has(t)&&!!this.Aa.has(t)&&!this.Aa.get(t).hasLocalMutations}ga(t){t&&(t.addedDocuments.forEach(e=>this.Ia=this.Ia.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ia=this.Ia.delete(e)),this.current=t.current)}pa(){if(!this.current)return[];const t=this.Ea;this.Ea=q(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const e=[];return t.forEach(r=>{this.Ea.has(r)||e.push(new La(r))}),this.Ea.forEach(r=>{t.has(r)||e.push(new xa(r))}),e}Sa(t){this.Ia=t.Is,this.Ea=q();const e=this.Va(t.documents);return this.applyChanges(e,!0)}ba(){return Te.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class Ud{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Bd{constructor(t){this.key=t,this.Da=!1}}class $d{constructor(t,e,r,i,o,c){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=c,this.Ca={},this.va=new Se(l=>ua(l),Zn),this.Fa=new Map,this.Ma=new Set,this.xa=new tt(O.comparator),this.Oa=new Map,this.Na=new Ss,this.La={},this.Ba=new Map,this.ka=ve.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function qd(n,t,e=!0){const r=$a(n);let i;const o=r.va.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.ba()):i=await Ma(r,t,e,!0),i}async function jd(n,t){const e=$a(n);await Ma(e,t,!0,!1)}async function Ma(n,t,e,r){const i=await gd(n.localStore,Ct(t)),o=i.targetId,c=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let l;return r&&(l=await zd(n,t,o,c==="current",i.resumeToken)),n.isPrimaryClient&&e&&Da(n.remoteStore,i),l}async function zd(n,t,e,r,i){n.Qa=(w,S,b)=>async function(L,D,W,Y){let X=D.view.Va(W);X.ts&&(X=await po(L.localStore,D.query,!1).then(({documents:v})=>D.view.Va(v,X)));const ot=Y&&Y.targetChanges.get(D.targetId),Vt=Y&&Y.targetMismatches.get(D.targetId)!=null,ct=D.view.applyChanges(X,L.isPrimaryClient,ot,Vt);return So(L,D.targetId,ct.ya),ct.snapshot}(n,w,S,b);const o=await po(n.localStore,t,!0),c=new Fd(t,o.Is),l=c.Va(o.documents),d=hn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),f=c.applyChanges(l,n.isPrimaryClient,d);So(n,e,f.ya);const _=new Ud(t,e,c);return n.va.set(t,_),n.Fa.has(e)?n.Fa.get(e).push(t):n.Fa.set(e,[t]),f.snapshot}async function Hd(n,t,e){const r=B(n),i=r.va.get(t),o=r.Fa.get(i.targetId);if(o.length>1)return r.Fa.set(i.targetId,o.filter(c=>!Zn(c,t))),void r.va.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await ss(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),e&&bs(r.remoteStore,i.targetId),os(r,i.targetId)}).catch(gs)):(os(r,i.targetId),await ss(r.localStore,i.targetId,!0))}async function Kd(n,t){const e=B(n),r=e.va.get(t),i=e.Fa.get(r.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),bs(e.remoteStore,r.targetId))}async function Fa(n,t){const e=B(n);try{const r=await dd(e.localStore,t);t.targetChanges.forEach((i,o)=>{const c=e.Oa.get(o);c&&(st(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?c.Da=!0:i.modifiedDocuments.size>0?st(c.Da):i.removedDocuments.size>0&&(st(c.Da),c.Da=!1))}),await Ba(e,r,t)}catch(r){await gs(r)}}function wo(n,t,e){const r=B(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.va.forEach((o,c)=>{const l=c.view.Y_(t);l.snapshot&&i.push(l.snapshot)}),function(c,l){const d=B(c);d.onlineState=l;let f=!1;d.queries.forEach((_,w)=>{for(const S of w.z_)S.Y_(l)&&(f=!0)}),f&&Ns(d)}(r.eventManager,t),i.length&&r.Ca.E_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Gd(n,t,e){const r=B(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.Oa.get(t),o=i&&i.key;if(o){let c=new tt(O.comparator);c=c.insert(o,Et.newNoDocument(o,x.min()));const l=q().add(o),d=new rr(x.min(),new Map,new tt(z),c,l);await Fa(r,d),r.xa=r.xa.remove(o),r.Oa.delete(t),Os(r)}else await ss(r.localStore,t,!1).then(()=>os(r,t,e)).catch(gs)}function os(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Fa.get(t))n.va.delete(r),e&&n.Ca.Ka(r,e);n.Fa.delete(t),n.isPrimaryClient&&n.Na.mr(t).forEach(r=>{n.Na.containsKey(r)||Ua(n,r)})}function Ua(n,t){n.Ma.delete(t.path.canonicalString());const e=n.xa.get(t);e!==null&&(bs(n.remoteStore,e),n.xa=n.xa.remove(t),n.Oa.delete(e),Os(n))}function So(n,t,e){for(const r of e)r instanceof xa?(n.Na.addReference(r.key,t),Qd(n,r)):r instanceof La?(V("SyncEngine","Document no longer in limbo: "+r.key),n.Na.removeReference(r.key,t),n.Na.containsKey(r.key)||Ua(n,r.key)):M()}function Qd(n,t){const e=t.key,r=e.path.canonicalString();n.xa.get(e)||n.Ma.has(r)||(V("SyncEngine","New document in limbo: "+e),n.Ma.add(r),Os(n))}function Os(n){for(;n.Ma.size>0&&n.xa.size<n.maxConcurrentLimboResolutions;){const t=n.Ma.values().next().value;n.Ma.delete(t);const e=new O(Z.fromString(t)),r=n.ka.next();n.Oa.set(r,new Bd(e)),n.xa=n.xa.insert(e,r),Da(n.remoteStore,new $t(Ct(Ts(e.path)),r,"TargetPurposeLimboResolution",ms.oe))}}async function Ba(n,t,e){const r=B(n),i=[],o=[],c=[];r.va.isEmpty()||(r.va.forEach((l,d)=>{c.push(r.Qa(d,t,e).then(f=>{var _;if((f||e)&&r.isPrimaryClient){const w=f?!f.fromCache:(_=e==null?void 0:e.targetChanges.get(d.targetId))===null||_===void 0?void 0:_.current;r.sharedClientState.updateQueryState(d.targetId,w?"current":"not-current")}if(f){i.push(f);const w=Cs.Ui(d.targetId,f);o.push(w)}}))}),await Promise.all(c),r.Ca.E_(i),await async function(d,f){const _=B(d);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",w=>R.forEach(f,S=>R.forEach(S.Ki,b=>_.persistence.referenceDelegate.addReference(w,S.targetId,b)).next(()=>R.forEach(S.$i,b=>_.persistence.referenceDelegate.removeReference(w,S.targetId,b)))))}catch(w){if(!ln(w))throw w;V("LocalStore","Failed to update sequence numbers: "+w)}for(const w of f){const S=w.targetId;if(!w.fromCache){const b=_.ss.get(S),k=b.snapshotVersion,L=b.withLastLimboFreeSnapshotVersion(k);_.ss=_.ss.insert(S,L)}}}(r.localStore,o))}async function Wd(n,t){const e=B(n);if(!e.currentUser.isEqual(t)){V("SyncEngine","User change. New user:",t.toKey());const r=await Ca(e.localStore,t);e.currentUser=t,function(o,c){o.Ba.forEach(l=>{l.forEach(d=>{d.reject(new N(P.CANCELLED,c))})}),o.Ba.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ba(e,r.ls)}}function Yd(n,t){const e=B(n),r=e.Oa.get(t);if(r&&r.Da)return q().add(r.key);{let i=q();const o=e.Fa.get(t);if(!o)return i;for(const c of o){const l=e.va.get(c);i=i.unionWith(l.view.Ra)}return i}}function $a(n){const t=B(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Fa.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Gd.bind(null,t),t.Ca.E_=xd.bind(null,t.eventManager),t.Ca.Ka=Ld.bind(null,t.eventManager),t}class Ro{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Pa(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return hd(this.persistence,new ud,t.initialUser,this.serializer)}createPersistence(t){return new od(Rs.Yr,this.serializer)}createSharedClientState(t){return new pd}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Xd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wd.bind(null,this.syncEngine),await Vd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new kd}()}createDatastore(t){const e=Pa(t.databaseInfo.databaseId),r=function(o){return new vd(o)}(t.databaseInfo);return function(o,c,l,d){return new Ad(o,c,l,d)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,o,c,l){return new Sd(r,i,o,c,l)}(this.localStore,this.datastore,t.asyncQueue,e=>wo(this.syncEngine,e,0),function(){return yo.D()?new yo:new _d}())}createSyncEngine(t,e){return function(i,o,c,l,d,f,_){const w=new $d(i,o,c,l,d,f);return _&&(w.qa=!0),w}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(i){const o=B(i);V("RemoteStore","RemoteStore shutting down."),o.N_.add(5),await dn(o),o.B_.shutdown(),o.k_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}/**
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
 */class Jd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Wa(this.observer.next,t)}error(t){this.observer.error?this.Wa(this.observer.error,t):xt("Uncaught Error in snapshot listener:",t.toString())}Ga(){this.muted=!0}Wa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class Zd{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=yt.UNAUTHENTICATED,this.clientId=ea.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{V("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(V("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new N(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new fe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Oa(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Fr(n,t){n.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ca(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Co(n,t){n.asyncQueue.verifyOperationInProgress();const e=await ef(n);V("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>vo(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>vo(t.remoteStore,i)),n._onlineComponents=t}function tf(n){return n.name==="FirebaseError"?n.code===P.FAILED_PRECONDITION||n.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function ef(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await Fr(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!tf(e))throw e;pe("Error using user provided cache. Falling back to memory cache: "+e),await Fr(n,new Ro)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await Fr(n,new Ro);return n._offlineComponents}async function nf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await Co(n,n._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await Co(n,new Xd))),n._onlineComponents}async function bo(n){const t=await nf(n),e=t.eventManager;return e.onListen=qd.bind(null,t.syncEngine),e.onUnlisten=Hd.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=jd.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Kd.bind(null,t.syncEngine),e}/**
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
 */function qa(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Po=new Map;/**
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
 */function rf(n,t,e){if(!e)throw new N(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function sf(n,t,e,r){if(t===!0&&r===!0)throw new N(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Vo(n){if(!O.isDocumentKey(n))throw new N(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function of(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function Un(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new N(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=of(n);throw new N(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
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
 */class Do{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new N(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new N(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}sf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qa((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(P.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class xs{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Do({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new N(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new N(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Do(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Dl;switch(r.type){case"firstParty":return new xl(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new N(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Po.get(e);r&&(V("ComponentProvider","Removing Datastore"),Po.delete(e),r.terminate())}(this),Promise.resolve()}}function af(n,t,e,r={}){var i;const o=(n=Un(n,xs))._getSettings(),c=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==c&&pe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:c,ssl:!1})),r.mockUserToken){let l,d;if(typeof r.mockUserToken=="string")l=r.mockUserToken,d=yt.MOCK_USER;else{l=hu(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new N(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new yt(f)}n._authCredentials=new kl(new ta(l,d))}}/**
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
 */class ir{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ir(this.firestore,t,this._query)}}class Ot{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new un(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ot(this.firestore,t,this._key)}}class un extends ir{constructor(t,e,r){super(t,e,Ts(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ot(this.firestore,null,new O(t))}withConverter(t){return new un(this.firestore,t,this._path)}}function ym(n,t,...e){if(n=Bo(n),arguments.length===1&&(t=ea.newId()),rf("doc","path",t),n instanceof xs){const r=Z.fromString(t,...e);return Vo(r),new Ot(n,null,new O(r))}{if(!(n instanceof Ot||n instanceof un))throw new N(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(t,...e));return Vo(r),new Ot(n.firestore,n instanceof un?n.converter:null,new O(r))}}/**
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
 */class cf{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new Va(this,"async_queue_retry"),this.Tu=()=>{const e=Mr();e&&V("AsyncQueue","Visibility state changed to "+e.visibilityState),this.e_.zo()};const t=Mr();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Eu(),this.du(t)}enterRestrictedMode(t){if(!this.uu){this.uu=!0,this.Pu=t||!1;const e=Mr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Tu)}}enqueue(t){if(this.Eu(),this.uu)return new Promise(()=>{});const e=new fe;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.au.push(t),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(t){if(!ln(t))throw t;V("AsyncQueue","Operation failed with retryable error: "+t)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(t){const e=this._u.then(()=>(this.hu=!0,t().catch(r=>{this.lu=r,this.hu=!1;const i=function(c){let l=c.message||"";return c.stack&&(l=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),l}(r);throw xt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=e,e}enqueueAfterDelay(t,e,r){this.Eu(),this.Iu.indexOf(t)>-1&&(e=0);const i=ks.createAndSchedule(this,t,e,r,o=>this.Ru(o));return this.cu.push(i),i}Eu(){this.lu&&M()}verifyOperationInProgress(){}async Vu(){let t;do t=this._u,await t;while(t!==this._u)}mu(t){for(const e of this.cu)if(e.timerId===t)return!0;return!1}fu(t){return this.Vu().then(()=>{this.cu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.cu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Vu()})}gu(t){this.Iu.push(t)}Ru(t){const e=this.cu.indexOf(t);this.cu.splice(e,1)}}function ko(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class as extends xs{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new cf}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ja(this),this._firestoreClient.terminate()}}function uf(n,t){const e=typeof n=="object"?n:El(),r=typeof n=="string"?n:"(default)",i=ml(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=uu("firestore");o&&af(i,...o)}return i}function lf(n){return n._firestoreClient||ja(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function ja(n){var t,e,r;const i=n._freezeSettings(),o=function(l,d,f,_){return new Ql(l,d,f,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,qa(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Zd(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Qn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Qn(dt.fromBase64String(t))}catch(e){throw new N(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Qn(dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class za{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new It(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class hf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}}const df=new RegExp("[~\\*/\\[\\]]");function ff(n,t,e){if(t.search(df)>=0)throw No(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new za(...t.split("."))._internalPath}catch{throw No(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function No(n,t,e,r,i){let o=`Function ${t}() called with invalid data`;o+=". ";let c="";return new N(P.INVALID_ARGUMENT,o+n+c)}/**
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
 */class Ha{constructor(t,e,r,i,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new gf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ka("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class gf extends Ha{data(){return super.data()}}function Ka(n,t){return typeof t=="string"?ff(n,t):t instanceof za?t._internalPath:t._delegate._internalPath}/**
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
 */function mf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new N(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pf{convertValue(t,e="none"){switch(se(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Xn(t,(i,o)=>{r[i]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new hf(rt(t.latitude),rt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=_s(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(on(t));default:return null}}convertTimestamp(t){const e=Ht(t);return new At(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Z.fromString(t);st(Ra(r));const i=new an(r.get(1),r.get(3)),o=new O(r.popFirst(5));return i.isEqual(e)||xt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class Xe{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ga extends Ha{constructor(t,e,r,i,o,c){super(t,e,r,i,c),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Bn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Ka("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class Bn extends Ga{data(t={}){return super.data(t)}}class _f{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new Xe(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new Bn(this._firestore,this._userDataWriter,r.key,r,new Xe(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map(l=>{const d=new Bn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Xe(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:d,oldIndex:-1,newIndex:c++}})}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>o||l.type!==3).map(l=>{const d=new Bn(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Xe(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let f=-1,_=-1;return l.type!==0&&(f=c.indexOf(l.doc.key),c=c.delete(l.doc.key)),l.type!==1&&(c=c.add(l.doc),_=c.indexOf(l.doc.key)),{type:yf(l.type),doc:d,oldIndex:f,newIndex:_}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function yf(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class Qa extends pf{constructor(t){super(),this.firestore=t}convertBytes(t){return new Qn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ot(this.firestore,null,e)}}function Em(n,...t){var e,r,i;n=Bo(n);let o={includeMetadataChanges:!1,source:"default"},c=0;typeof t[c]!="object"||ko(t[c])||(o=t[c],c++);const l={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(ko(t[c])){const w=t[c];t[c]=(e=w.next)===null||e===void 0?void 0:e.bind(w),t[c+1]=(r=w.error)===null||r===void 0?void 0:r.bind(w),t[c+2]=(i=w.complete)===null||i===void 0?void 0:i.bind(w)}let d,f,_;if(n instanceof Ot)f=Un(n.firestore,as),_=Ts(n._key.path),d={next:w=>{t[c]&&t[c](Ef(f,n,w))},error:t[c+1],complete:t[c+2]};else{const w=Un(n,ir);f=Un(w.firestore,as),_=w._query;const S=new Qa(f);d={next:b=>{t[c]&&t[c](new _f(f,S,w,b))},error:t[c+1],complete:t[c+2]},mf(n._query)}return function(S,b,k,L){const D=new Jd(L),W=new Md(b,D,k);return S.asyncQueue.enqueueAndForget(async()=>Nd(await bo(S),W)),()=>{D.Ga(),S.asyncQueue.enqueueAndForget(async()=>Od(await bo(S),W))}}(lf(f),_,l,d)}function Ef(n,t,e){const r=e.docs.get(t._key),i=new Qa(n);return new Ga(n,i,t._key,r,new Xe(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(i){we=i})(yl),jn(new nn("firestore",(r,{instanceIdentifier:i,options:o})=>{const c=r.getProvider("app").getImmediate(),l=new as(new Nl(r.getProvider("auth-internal")),new Ml(r.getProvider("app-check-internal")),function(f,_){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new N(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new an(f.options.projectId,_)}(c,i),c);return o=Object.assign({useFetchStreams:e},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),de(Wi,"4.6.5",t),de(Wi,"4.6.5","esm2017")})();const vf={apiKey:"AIzaSyBz2CHnovBsBw3K7i0tl4kSzIke5n8HfYM",authDomain:"blitz-commander.firebaseapp.com",databaseURL:"https://blitz-commander-default-rtdb.firebaseio.com",projectId:"blitz-commander",storageBucket:"blitz-commander.appspot.com",messagingSenderId:"28860105912",appId:"1:28860105912:web:efc3c91dfbc6f008e4a04d",measurementId:"G-MFY9V2D927"},Tf=zo(vf),If={db:()=>uf(Tf)},Af="blitz_commander",wf=6,H=Object.freeze({CLANS_STAT:"clans_stat",CLANS_FAVORITES:"clans_favorites",ACCOUNTS_STAT:"accounts_stat",ACCOUNTS_TANKS_STAT:"accounts_tanks_stat",ACCOUNTS_TANKS_ACHIEVEMENTS:"accounts_tanks_achievements",ACCOUNTS_FAVORITES:"accounts_favorites",ACCOUNTS_ACHIEVEMENTS:"accounts_achievements"});let Ge;const K=()=>{if(Ge)return Promise.resolve(Ge);const n=indexedDB.open(Af,wf);return new Promise((t,e)=>{n.addEventListener("error",e),n.addEventListener("upgradeneeded",()=>{const r=n.result;Object.values(H).forEach(i=>{r.objectStoreNames.contains(i)||r.createObjectStore(i)})}),n.addEventListener("success",()=>{const r=n.result;Ge={get(i,o){return new Promise((c,l)=>{const _=r.transaction(i,"readonly").objectStore(i).get(o);_.onsuccess=()=>c(_.result??null),_.onerror=()=>l(_.error)})},getAll(i){return new Promise((o,c)=>{const f=r.transaction(i,"readonly").objectStore(i).getAll();f.onsuccess=()=>o(f.result??null),f.onerror=()=>c(f.error)})},set(i,o,c){return new Promise((l,d)=>{const f=r.transaction(i,"readwrite");f.objectStore(i).put(c,o),f.oncomplete=()=>l(),f.onerror=()=>d(f.error)})},remove(i,o){return new Promise((c,l)=>{const _=r.transaction(i,"readwrite").objectStore(i).delete(o);_.onsuccess=()=>c(_.result),_.onerror=()=>l(_.error)})},onBlocked:()=>{}},n.addEventListener("blocked",Ge.onBlocked),t(Ge)})})},Sf={async get(n){return(await K()).get(H.ACCOUNTS_ACHIEVEMENTS,String(n))},async getAll(){return(await K()).getAll(H.ACCOUNTS_ACHIEVEMENTS)},async set(n,t){const e=await K(),r={id:n,timestamp:Date.now(),data:t};return e.set(H.ACCOUNTS_ACHIEVEMENTS,String(n),r)},async remove(n){return(await K()).remove(H.ACCOUNTS_ACHIEVEMENTS,String(n))}},Rf={async get(n){return(await K()).get(H.ACCOUNTS_FAVORITES,String(n))},async getAll(){return(await K()).getAll(H.ACCOUNTS_FAVORITES)},async set(n,t){return(await K()).set(H.ACCOUNTS_FAVORITES,String(n),t)},async remove(n){return(await K()).remove(H.ACCOUNTS_FAVORITES,String(n))}},Cf={async get(n){return(await K()).get(H.ACCOUNTS_STAT,String(n))},async getAll(){return(await K()).getAll(H.ACCOUNTS_STAT)},async set(n,t){const e=await K(),r={id:n,timestamp:Date.now(),data:t};return e.set(H.ACCOUNTS_STAT,String(n),r)},async remove(n){return(await K()).remove(H.ACCOUNTS_STAT,String(n))}},bf={async get(n){return(await K()).get(H.CLANS_STAT,String(n))},async getAll(){return(await K()).getAll(H.CLANS_STAT)},async set(n,t){const e=await K(),r={id:n,timestamp:Date.now(),data:t};return e.set(H.CLANS_STAT,String(n),r)},async remove(n){return(await K()).remove(H.CLANS_STAT,String(n))}},Pf={async get(n){return(await K()).get(H.ACCOUNTS_TANKS_STAT,String(n))},async getAll(){return(await K()).getAll(H.ACCOUNTS_TANKS_STAT)},async set(n,t){const e=await K(),r={id:n,timestamp:Date.now(),data:t};return e.set(H.ACCOUNTS_TANKS_STAT,String(n),r)},async remove(n){return(await K()).remove(H.ACCOUNTS_TANKS_STAT,String(n))}},Vf={async get(n){return(await K()).get(H.CLANS_FAVORITES,String(n))},async getAll(){return(await K()).getAll(H.CLANS_FAVORITES)},async set(n,t){return(await K()).set(H.CLANS_FAVORITES,String(n),t)},async remove(n){return(await K()).remove(H.CLANS_FAVORITES,String(n))}},Df={async get(n){return(await K()).get(H.ACCOUNTS_TANKS_ACHIEVEMENTS,String(n))},async getAll(){return(await K()).getAll(H.ACCOUNTS_TANKS_ACHIEVEMENTS)},async set(n,t){const e=await K(),r={id:n,timestamp:Date.now(),data:t};return e.set(H.ACCOUNTS_TANKS_ACHIEVEMENTS,String(n),r)},async remove(n){return(await K()).remove(H.ACCOUNTS_TANKS_ACHIEVEMENTS,String(n))}},kf={getInstance:K,accountsAchievements:Sf,accountsFavorites:Rf,accountsInfo:Cf,clansFavorites:Vf,clansInfo:bf,tanksStat:Pf,tanksAchievements:Df},Ie={storage:Zc,indexedDB:kf,firebase:If},Nf=()=>{const n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";try{return n.replace(/[xy]/g,t=>(Number(t)^crypto.getRandomValues(new Uint8Array(1))[0]&15>>Number(t)/4).toString(16))}catch{return n.replace(/[xy]/g,e=>{const r=Math.random()*16|0;return(e==="x"?r:r&3|8).toString(16)})}},Of=Lc("notify",{state:()=>({items:[],duration:5e3}),actions:{add(n){n.id=Nf(),n.duration=n.duration??this.duration,this.items.push(n),n.duration!==0&&setTimeout(()=>{this.remove(n)},n.duration)},remove(n){const t=this.items.findIndex(e=>e.id===n.id);t>=0&&this.items.splice(t,1)}}}),Oo=(n,t)=>{const e=Of(),r=i=>i instanceof Error;e.add({type:"error",title:t.title,message:t.message??(r(n)?n.message:"Неизвестная ошибка")}),console.error(n)},Ls="https://api.tanki.su/wot/",xf="https://papi.tanksblitz.ru/wotb/";let Ur=!1;async function Lf(){if(Ur)return;const n=Ie.storage.getUser();if(!n||Number.isNaN(+n.expires_at))return;const t=+n.expires_at*1e3,e=Date.now();if(!(t<=e)&&!(t-e>Mc)){Ur=!0;try{const r=e+Fc*13,{data:i}=await ug.auth.prolongate({expires_at:Math.round(r/1e3),access_token:n.access_token});Ie.storage.setUser({...n,access_token:i.access_token,expires_at:String(i.expires_at)}),hm.auth.prolongate({id:n.account_id,expiresAt:new Date(r).toISOString(),token:i.access_token}).catch(o=>{Oo(o,{title:"Продление сессии авторизации"})})}catch(r){Oo(r,{title:"Продление сессии авторизации"})}Ur=!1}}const et=n=>new Promise((t,e)=>$fetch(n.url,{baseURL:n.baseURL||xf,method:n.method,headers:n.headers,params:n.params,body:n.body,async onRequest(r){n.method==="get"&&(r.options.params=r.options.params??{},r.options.params.access_token=Ie.storage.getAccessToken(),r.options.params.application_id=cs().public.appId),n.url.includes("prolongate")||await Lf()},onResponse(r){var o;(o=n.onResponse)==null||o.call(n,r);const i=r.response._data;if(Br(i)&&i.error)return e(new Error(`Lesta API (${i.error.code}) ${i.error.message}`));t(r.response._data)},onResponseError(r){var o;(o=n.onResponseError)==null||o.call(n,r);const i=r.response._data;if(Br(i)&&i.error)return e(new Error(`Lesta API (${i.error.code}) ${i.error.message}`));e(r.response._data)}})),Mf=n=>et({url:"account/list/",method:"get",params:n}),Ff=n=>et({url:"account/info/",method:"get",params:n}),Uf=n=>et({url:"account/achievements/",method:"get",params:n}),Bf={getList:Mf,getInfo:Ff,getAchievements:Uf},$f=n=>et({baseURL:Ls,url:"auth/login/",method:"get",params:n}),qf=n=>{const t=Ie.storage.getAccessToken(),e=cs().public.appId;if(!t)throw new Error("Токен не найден");const r=new FormData;return r.append("application_id",String(e??"")),r.append("access_token",t??""),r.append("expires_at",String(n.expires_at)??""),et({baseURL:Ls,url:"auth/prolongate/",method:"post",body:r})},jf=()=>{const n=Ie.storage.getAccessToken(),t=cs().public.appId;if(!n)throw new Error("Токен не найден");const e=new FormData;return e.append("application_id",String(t??"")),e.append("access_token",n??""),et({baseURL:Ls,url:"auth/logout/",method:"post",body:e})},zf={login:$f,prolongate:qf,logout:jf},Hf=n=>et({url:"clans/info/",method:"get",params:n}),Kf=n=>et({url:"clans/list/",method:"get",params:n}),Gf=n=>et({url:"clans/accountinfo/",method:"get",params:n}),Qf={getInfo:Hf,getList:Kf,getAccountInfo:Gf},Wf=n=>et({url:"tanks/achievements/",method:"get",params:n}),Yf=n=>et({url:"tanks/stats/",method:"get",params:n}),Xf={getAchievements:Wf,getStats:Yf},Jf=n=>et({url:"encyclopedia/vehicles/",method:"get",params:n}),Zf=n=>et({url:"encyclopedia/achievements/",method:"get",params:n}),tg={getVehicles:Jf,getAchievements:Zf},eg=n=>et({url:"tournaments/list/",method:"get",params:n}),ng=n=>et({url:"tournaments/info/",method:"get",params:n}),rg=n=>et({url:"tournaments/stages/",method:"get",params:n}),sg=n=>et({url:"tournaments/teams/",method:"get",params:n}),ig=n=>et({url:"tournaments/tables/",method:"get",params:n}),og=n=>et({url:"tournaments/matches/",method:"get",params:n}),ag=n=>et({url:"tournaments/standings/",method:"get",params:n}),cg={getList:eg,getInfo:ng,getStages:rg,getTeams:sg,getTables:ig,getMatches:og,getStandings:ag},ug={account:Bf,auth:zf,clan:Qf,tanks:Xf,encyclopedia:tg,tournaments:cg,isResponse:Br,request:et},lg=n=>n!==null&&typeof n=="object",hg=n=>{if(!lg(n))throw new TypeError("Value is not a object");const t={};return Object.entries(n).forEach(([e,r])=>{r!=null&&String(r)&&(t[e]=String(r))}),t},dg="https://server.blitz-commander.by/";class xo extends Error{constructor(e){super(typeof e.error=="string"?e.error:"");He(this,"data");He(this,"status");He(this,"error");He(this,"meta");this.name="RequestError",this.data=e.data,this.status=e.status,this.error=e.error,this.meta=e.meta}}const F=n=>new Promise((t,e)=>$fetch(n.url,{baseURL:n.baseURL??dg,method:n.method,headers:n.headers,params:n.params,body:n.body,onRequest(r){r.options.params=hg(r.options.params??{})},onResponse(r){var c;(c=n.onResponse)==null||c.call(n,r);const i=r.response._data,o=r.response.status;if(i.error)return e(new xo({...i,status:o}));t(r.response._data)},onResponseError(r){var c;(c=n.onResponse)==null||c.call(n,r);const i=r.response._data,o=r.response.status;return e(new xo({...i,status:o}))}})),fg=n=>F({url:"session/account/"+n,method:"get"}),gg=n=>F({url:"session/account/"+n,method:"delete"}),mg=n=>F({url:"session/account/list/",method:"get",params:n}),pg=(n,t)=>F({url:"session/account/",method:"post",body:{id:n,raw:t}}),_g={get:fg,remove:gg,getList:mg,set:pg},yg=n=>F({url:"session/account-achievements/"+n,method:"get"}),Eg=n=>F({url:"session/account-achievements/"+n,method:"delete"}),vg=n=>F({url:"session/account-achievements/list",method:"get",params:n}),Tg=(n,t)=>F({url:"session/account-achievements",method:"post",body:{id:n,raw:t}}),Ig={get:yg,remove:Eg,getList:vg,set:Tg},Ag=n=>F({url:"session/account/tanks/"+n,method:"get"}),wg=n=>F({url:"session/account/tanks/"+n,method:"delete"}),Sg=n=>F({url:"session/account/tanks/list",method:"get",params:n}),Rg=(n,t)=>F({url:"session/tanks",method:"post",body:{id:n,raw:t}}),Cg={get:Ag,remove:wg,getList:Sg,set:Rg},bg=n=>F({url:"session/tanks-achievements/"+n,method:"get"}),Pg=n=>F({url:"session/tanks-achievements/"+n,method:"delete"}),Vg=n=>F({url:"session/tanks-achievements/list",method:"get",params:n}),Dg=(n,t)=>F({url:"session/tanks-achievements",method:"post",body:{id:n,raw:t}}),kg={get:bg,remove:Pg,getList:Vg,set:Dg},Ng={account:_g,tanks:Cg,tanksAchievements:kg,accountAchievements:Ig},Og=n=>F({url:"user/list/",method:"get",params:n}),xg=n=>F({url:"user/action/",method:"put",data:{id:n.id}}),Lg=n=>F({url:"user/"+n,method:"get"}),Mg=n=>F({url:"user/",method:"post",body:n}),Fg=n=>F({url:"user/"+n,method:"delete"}),Ug={get:Lg,getList:Og,set:Mg,action:xg,remove:Fg},Bg=n=>{if(!n.token)throw new Error("Токен не найден");const t=new FormData;return t.append("id",String(n.id)),t.append("token",n.token),t.append("expiresAt",n.expiresAt),F({url:"auth/login/",method:"post",body:n})},$g=()=>{const n=Ie.storage.getAccessToken();if(!n)throw new Error("Токен не найден");const t=new FormData;return t.append("token",n),F({url:"auth/logout/",method:"post",body:t})},qg=n=>{if(!n.token)throw new Error("Токен не найден");const t=new FormData;return t.append("id",String(n.id)),t.append("token",n.token),t.append("expiresAt",n.expiresAt),F({url:"auth/prolongate/",method:"post",body:t})},jg={prolongate:qg,logout:$g,login:Bg},zg=n=>F({url:"stat/accounts/list/",method:"get",params:n}),Hg=n=>F({url:"stat/accounts/solo/",method:"get",params:n}),Kg=n=>F({url:"stat/accounts/diff/",method:"get",params:n}),Gg=n=>F({url:"stat/accounts/range/",method:"get",params:n}),Qg={getList:zg,getSolo:Hg,getRange:Gg,getDiff:Kg},Wg=n=>F({url:"stat/clans/list",method:"get",params:n}),Yg=n=>F({url:"stat/clans/range",method:"get",params:n}),Xg={getList:Wg,getRange:Yg},Jg=n=>F({url:"stat/tanks/list/",method:"get",params:n}),Zg=n=>F({url:"stat/tanks/diff/",method:"get",params:n}),tm=n=>F({url:"stat/tanks/range/",method:"get",params:n}),em={getList:Jg,getRange:tm,getDiff:Zg},nm=n=>F({url:"stat/clans-accounts/list",method:"get",params:n}),rm=n=>F({url:"stat/clans-accounts/activity-list",method:"get",params:n}),sm=n=>F({url:"stat/clans-accounts/range",method:"get",params:n}),im={getList:nm,getRange:sm,getActivityList:rm},om={accounts:Qg,clans:Xg,clansAccounts:im,tanks:em},am=n=>F({url:"leaderboards/accounts/",method:"get",params:n}),cm=n=>F({url:"leaderboards/tanks/",method:"get",params:n}),um={getAccounts:am,getTanks:cm},lm=n=>typeof n!="object"||n===null?!1:"status"in n&&("data"in n||"error"in n),hm={stat:om,session:Ng,user:Ug,auth:jg,leaderboards:um,request:F,isResponse:lm};export{gm as _,ug as a,hm as b,ym as d,Nf as g,Oo as h,lg as i,Em as o,Ie as s,Of as u};
