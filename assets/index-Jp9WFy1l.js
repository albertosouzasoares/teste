import{d as T,G as fe,j as u,r as _}from"./index-D1Z8vhaG.js";import{T as rt,M as st,a as ot}from"./index-CADMw4Er.js";function Be(e,t){return function(){return e.apply(t,arguments)}}const{toString:it}=Object.prototype,{getPrototypeOf:pe}=Object,G=(e=>t=>{const n=it.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),N=e=>(e=e.toLowerCase(),t=>G(t)===e),X=e=>t=>typeof t===e,{isArray:U}=Array,q=X("undefined");function at(e){return e!==null&&!q(e)&&e.constructor!==null&&!q(e.constructor)&&F(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Le=N("ArrayBuffer");function ct(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Le(e.buffer),t}const lt=X("string"),F=X("function"),ke=X("number"),Q=e=>e!==null&&typeof e=="object",ut=e=>e===!0||e===!1,W=e=>{if(G(e)!=="object")return!1;const t=pe(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},dt=N("Date"),ft=N("File"),pt=N("Blob"),ht=N("FileList"),mt=e=>Q(e)&&F(e.pipe),xt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||F(e.append)&&((t=G(e))==="formdata"||t==="object"&&F(e.toString)&&e.toString()==="[object FormData]"))},yt=N("URLSearchParams"),[wt,gt,bt,Et]=["ReadableStream","Request","Response","Headers"].map(N),St=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function I(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),U(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function De(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const k=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,ve=e=>!q(e)&&e!==k;function oe(){const{caseless:e}=ve(this)&&this||{},t={},n=(r,s)=>{const o=e&&De(t,s)||s;W(t[o])&&W(r)?t[o]=oe(t[o],r):W(r)?t[o]=oe({},r):U(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&I(arguments[r],n);return t}const Rt=(e,t,n,{allOwnKeys:r}={})=>(I(t,(s,o)=>{n&&F(s)?e[o]=Be(s,n):e[o]=s},{allOwnKeys:r}),e),At=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ft=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Tt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&pe(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ot=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},jt=e=>{if(!e)return null;if(U(e))return e;let t=e.length;if(!ke(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Nt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&pe(Uint8Array)),Ct=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Pt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},_t=N("HTMLFormElement"),Bt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ge=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Lt=N("RegExp"),Ue=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};I(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},kt=e=>{Ue(e,(t,n)=>{if(F(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(F(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Dt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return U(e)?r(e):r(String(e).split(t)),n},vt=()=>{},Ut=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,te="abcdefghijklmnopqrstuvwxyz",be="0123456789",ze={DIGIT:be,ALPHA:te,ALPHA_DIGIT:te+te.toUpperCase()+be},zt=(e=16,t=ze.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Mt(e){return!!(e&&F(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const qt=e=>{const t=new Array(10),n=(r,s)=>{if(Q(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=U(r)?[]:{};return I(r,(i,c)=>{const f=n(i,s+1);!q(f)&&(o[c]=f)}),t[s]=void 0,o}}return r};return n(e,0)},It=N("AsyncFunction"),Ht=e=>e&&(Q(e)||F(e))&&F(e.then)&&F(e.catch),Me=((e,t)=>e?setImmediate:t?((n,r)=>(k.addEventListener("message",({source:s,data:o})=>{s===k&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),k.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",F(k.postMessage)),Vt=typeof queueMicrotask<"u"?queueMicrotask.bind(k):typeof process<"u"&&process.nextTick||Me,a={isArray:U,isArrayBuffer:Le,isBuffer:at,isFormData:xt,isArrayBufferView:ct,isString:lt,isNumber:ke,isBoolean:ut,isObject:Q,isPlainObject:W,isReadableStream:wt,isRequest:gt,isResponse:bt,isHeaders:Et,isUndefined:q,isDate:dt,isFile:ft,isBlob:pt,isRegExp:Lt,isFunction:F,isStream:mt,isURLSearchParams:yt,isTypedArray:Nt,isFileList:ht,forEach:I,merge:oe,extend:Rt,trim:St,stripBOM:At,inherits:Ft,toFlatObject:Tt,kindOf:G,kindOfTest:N,endsWith:Ot,toArray:jt,forEachEntry:Ct,matchAll:Pt,isHTMLForm:_t,hasOwnProperty:ge,hasOwnProp:ge,reduceDescriptors:Ue,freezeMethods:kt,toObjectSet:Dt,toCamelCase:Bt,noop:vt,toFiniteNumber:Ut,findKey:De,global:k,isContextDefined:ve,ALPHABET:ze,generateString:zt,isSpecCompliantForm:Mt,toJSONObject:qt,isAsyncFn:It,isThenable:Ht,setImmediate:Me,asap:Vt};function x(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(x,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const qe=x.prototype,Ie={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ie[e]={value:e}});Object.defineProperties(x,Ie);Object.defineProperty(qe,"isAxiosError",{value:!0});x.from=(e,t,n,r,s,o)=>{const i=Object.create(qe);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),x.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Wt=null;function ie(e){return a.isPlainObject(e)||a.isArray(e)}function He(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ee(e,t,n){return e?e.concat(t).map(function(s,o){return s=He(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function Jt(e){return a.isArray(e)&&!e.some(ie)}const $t=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Z(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,h){return!a.isUndefined(h[y])});const r=n.metaTokens,s=n.visitor||d,o=n.dots,i=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(m){if(m===null)return"";if(a.isDate(m))return m.toISOString();if(!f&&a.isBlob(m))throw new x("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(m)||a.isTypedArray(m)?f&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function d(m,y,h){let S=m;if(m&&!h&&typeof m=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),m=JSON.stringify(m);else if(a.isArray(m)&&Jt(m)||(a.isFileList(m)||a.endsWith(y,"[]"))&&(S=a.toArray(m)))return y=He(y),S.forEach(function(g,O){!(a.isUndefined(g)||g===null)&&t.append(i===!0?Ee([y],O,o):i===null?y:y+"[]",l(g))}),!1}return ie(m)?!0:(t.append(Ee(h,y,o),l(m)),!1)}const p=[],w=Object.assign($t,{defaultVisitor:d,convertValue:l,isVisitable:ie});function b(m,y){if(!a.isUndefined(m)){if(p.indexOf(m)!==-1)throw Error("Circular reference detected in "+y.join("."));p.push(m),a.forEach(m,function(S,A){(!(a.isUndefined(S)||S===null)&&s.call(t,S,a.isString(A)?A.trim():A,y,w))===!0&&b(S,y?y.concat(A):[A])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return b(e),t}function Se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function he(e,t){this._pairs=[],e&&Z(e,this,t)}const Ve=he.prototype;Ve.append=function(t,n){this._pairs.push([t,n])};Ve.toString=function(t){const n=t?function(r){return t.call(this,r,Se)}:Se;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Kt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function We(e,t,n){if(!t)return e;const r=n&&n.encode||Kt,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new he(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Re{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Je={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Gt=typeof URLSearchParams<"u"?URLSearchParams:he,Xt=typeof FormData<"u"?FormData:null,Qt=typeof Blob<"u"?Blob:null,Zt={isBrowser:!0,classes:{URLSearchParams:Gt,FormData:Xt,Blob:Qt},protocols:["http","https","file","blob","url","data"]},me=typeof window<"u"&&typeof document<"u",Yt=(e=>me&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),en=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",tn=me&&window.location.href||"http://localhost",nn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:me,hasStandardBrowserEnv:Yt,hasStandardBrowserWebWorkerEnv:en,origin:tn},Symbol.toStringTag,{value:"Module"})),j={...nn,...Zt};function rn(e,t){return Z(e,new j.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return j.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function sn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function on(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function $e(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=on(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(sn(r),s,n,0)}),n}return null}function an(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const H={transitional:Je,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify($e(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return rn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Z(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),an(t)):t}],transformResponse:[function(t){const n=this.transitional||H.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?x.from(c,x.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:j.classes.FormData,Blob:j.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{H.headers[e]={}});const cn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ln=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&cn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ae=Symbol("internals");function M(e){return e&&String(e).trim().toLowerCase()}function J(e){return e===!1||e==null?e:a.isArray(e)?e.map(J):String(e)}function un(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const dn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ne(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function fn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function pn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class R{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,f,l){const d=M(f);if(!d)throw new Error("header name must be a non-empty string");const p=a.findKey(s,d);(!p||s[p]===void 0||l===!0||l===void 0&&s[p]!==!1)&&(s[p||f]=J(c))}const i=(c,f)=>a.forEach(c,(l,d)=>o(l,d,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!dn(t))i(ln(t),n);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=M(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return un(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=M(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ne(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=M(i),i){const c=a.findKey(r,i);c&&(!n||ne(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ne(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=J(s),delete n[o];return}const c=t?fn(o):String(o).trim();c!==o&&delete n[o],n[c]=J(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Ae]=this[Ae]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=M(i);r[c]||(pn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}R.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(R.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(R);function re(e,t){const n=this||H,r=t||n,s=R.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Ke(e){return!!(e&&e.__CANCEL__)}function z(e,t,n){x.call(this,e??"canceled",x.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(z,x,{__CANCEL__:!0});function Ge(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new x("Request failed with status code "+n.status,[x.ERR_BAD_REQUEST,x.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function hn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function mn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),d=r[o];i||(i=l),n[s]=f,r[s]=l;let p=o,w=0;for(;p!==s;)w+=n[p++],p=p%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const b=d&&l-d;return b?Math.round(w*1e3/b):void 0}}function xn(e,t){let n=0,r=1e3/t,s,o;const i=(l,d=Date.now())=>{n=d,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const d=Date.now(),p=d-n;p>=r?i(l,d):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-p)))},()=>s&&i(s)]}const $=(e,t,n=3)=>{let r=0;const s=mn(50,250);return xn(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-r,l=s(f),d=i<=c;r=i;const p={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:l||void 0,estimated:l&&c&&d?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(p)},n)},Fe=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Te=e=>(...t)=>a.asap(()=>e(...t)),yn=j.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),wn=j.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function gn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function bn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Xe(e,t){return e&&!gn(t)?bn(e,t):t}const Oe=e=>e instanceof R?{...e}:e;function v(e,t){t=t||{};const n={};function r(l,d,p){return a.isPlainObject(l)&&a.isPlainObject(d)?a.merge.call({caseless:p},l,d):a.isPlainObject(d)?a.merge({},d):a.isArray(d)?d.slice():d}function s(l,d,p){if(a.isUndefined(d)){if(!a.isUndefined(l))return r(void 0,l,p)}else return r(l,d,p)}function o(l,d){if(!a.isUndefined(d))return r(void 0,d)}function i(l,d){if(a.isUndefined(d)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,d)}function c(l,d,p){if(p in t)return r(l,d);if(p in e)return r(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,d)=>s(Oe(l),Oe(d),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(d){const p=f[d]||s,w=p(e[d],t[d],d);a.isUndefined(w)&&p!==c||(n[d]=w)}),n}const Qe=e=>{const t=v({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=R.from(i),t.url=We(Xe(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(n)){if(j.hasStandardBrowserEnv||j.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...d]=f?f.split(";").map(p=>p.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...d].join("; "))}}if(j.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&yn(t.url))){const l=s&&o&&wn.read(o);l&&i.set(s,l)}return t},En=typeof XMLHttpRequest<"u",Sn=En&&function(e){return new Promise(function(n,r){const s=Qe(e);let o=s.data;const i=R.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:l}=s,d,p,w,b,m;function y(){b&&b(),m&&m(),s.cancelToken&&s.cancelToken.unsubscribe(d),s.signal&&s.signal.removeEventListener("abort",d)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function S(){if(!h)return;const g=R.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),L={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:g,config:e,request:h};Ge(function(P){n(P),y()},function(P){r(P),y()},L),h=null}"onloadend"in h?h.onloadend=S:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(S)},h.onabort=function(){h&&(r(new x("Request aborted",x.ECONNABORTED,e,h)),h=null)},h.onerror=function(){r(new x("Network Error",x.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let O=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const L=s.transitional||Je;s.timeoutErrorMessage&&(O=s.timeoutErrorMessage),r(new x(O,L.clarifyTimeoutError?x.ETIMEDOUT:x.ECONNABORTED,e,h)),h=null},o===void 0&&i.setContentType(null),"setRequestHeader"in h&&a.forEach(i.toJSON(),function(O,L){h.setRequestHeader(L,O)}),a.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),c&&c!=="json"&&(h.responseType=s.responseType),l&&([w,m]=$(l,!0),h.addEventListener("progress",w)),f&&h.upload&&([p,b]=$(f),h.upload.addEventListener("progress",p),h.upload.addEventListener("loadend",b)),(s.cancelToken||s.signal)&&(d=g=>{h&&(r(!g||g.type?new z(null,e,h):g),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(d),s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort",d)));const A=hn(s.url);if(A&&j.protocols.indexOf(A)===-1){r(new x("Unsupported protocol "+A+":",x.ERR_BAD_REQUEST,e));return}h.send(o||null)})},Rn=(e,t)=>{let n=new AbortController,r;const s=function(f){if(!r){r=!0,i();const l=f instanceof Error?f:this.reason;n.abort(l instanceof x?l:new z(l instanceof Error?l.message:l))}};let o=t&&setTimeout(()=>{s(new x(`timeout ${t} of ms exceeded`,x.ETIMEDOUT))},t);const i=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(f=>{f&&(f.removeEventListener?f.removeEventListener("abort",s):f.unsubscribe(s))}),e=null)};e.forEach(f=>f&&f.addEventListener&&f.addEventListener("abort",s));const{signal:c}=n;return c.unsubscribe=i,[c,()=>{o&&clearTimeout(o),o=null}]},An=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Fn=async function*(e,t,n){for await(const r of e)yield*An(ArrayBuffer.isView(r)?r:await n(String(r)),t)},je=(e,t,n,r,s)=>{const o=Fn(e,t,s);let i=0,c,f=l=>{c||(c=!0,r&&r(l))};return new ReadableStream({async pull(l){try{const{done:d,value:p}=await o.next();if(d){f(),l.close();return}let w=p.byteLength;if(n){let b=i+=w;n(b)}l.enqueue(new Uint8Array(p))}catch(d){throw f(d),d}},cancel(l){return f(l),o.return()}},{highWaterMark:2})},Y=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ze=Y&&typeof ReadableStream=="function",ae=Y&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Ye=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Tn=Ze&&Ye(()=>{let e=!1;const t=new Request(j.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Ne=64*1024,ce=Ze&&Ye(()=>a.isReadableStream(new Response("").body)),K={stream:ce&&(e=>e.body)};Y&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!K[t]&&(K[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new x(`Response type '${t}' is not supported`,x.ERR_NOT_SUPPORT,r)})})})(new Response);const On=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await ae(e)).byteLength},jn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??On(t)},Nn=Y&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:l,headers:d,withCredentials:p="same-origin",fetchOptions:w}=Qe(e);l=l?(l+"").toLowerCase():"text";let[b,m]=s||o||i?Rn([s,o],i):[],y,h;const S=()=>{!y&&setTimeout(()=>{b&&b.unsubscribe()}),y=!0};let A;try{if(f&&Tn&&n!=="get"&&n!=="head"&&(A=await jn(d,r))!==0){let C=new Request(t,{method:"POST",body:r,duplex:"half"}),P;if(a.isFormData(r)&&(P=C.headers.get("content-type"))&&d.setContentType(P),C.body){const[ee,V]=Fe(A,$(Te(f)));r=je(C.body,Ne,ee,V,ae)}}a.isString(p)||(p=p?"include":"omit"),h=new Request(t,{...w,signal:b,method:n.toUpperCase(),headers:d.normalize().toJSON(),body:r,duplex:"half",credentials:p});let g=await fetch(h);const O=ce&&(l==="stream"||l==="response");if(ce&&(c||O)){const C={};["status","statusText","headers"].forEach(we=>{C[we]=g[we]});const P=a.toFiniteNumber(g.headers.get("content-length")),[ee,V]=c&&Fe(P,$(Te(c),!0))||[];g=new Response(je(g.body,Ne,ee,()=>{V&&V(),O&&S()},ae),C)}l=l||"text";let L=await K[a.findKey(K,l)||"text"](g,e);return!O&&S(),m&&m(),await new Promise((C,P)=>{Ge(C,P,{data:L,headers:R.from(g.headers),status:g.status,statusText:g.statusText,config:e,request:h})})}catch(g){throw S(),g&&g.name==="TypeError"&&/fetch/i.test(g.message)?Object.assign(new x("Network Error",x.ERR_NETWORK,e,h),{cause:g.cause||g}):x.from(g,g&&g.code,e,h)}}),le={http:Wt,xhr:Sn,fetch:Nn};a.forEach(le,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ce=e=>`- ${e}`,Cn=e=>a.isFunction(e)||e===null||e===!1,et={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!Cn(n)&&(r=le[(i=String(n)).toLowerCase()],r===void 0))throw new x(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Ce).join(`
`):" "+Ce(o[0]):"as no adapter specified";throw new x("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:le};function se(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new z(null,e)}function Pe(e){return se(e),e.headers=R.from(e.headers),e.data=re.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),et.getAdapter(e.adapter||H.adapter)(e).then(function(r){return se(e),r.data=re.call(e,e.transformResponse,r),r.headers=R.from(r.headers),r},function(r){return Ke(r)||(se(e),r&&r.response&&(r.response.data=re.call(e,e.transformResponse,r.response),r.response.headers=R.from(r.response.headers))),Promise.reject(r)})}const tt="1.7.4",xe={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{xe[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const _e={};xe.transitional=function(t,n,r){function s(o,i){return"[Axios v"+tt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new x(s(i," has been removed"+(n?" in "+n:"")),x.ERR_DEPRECATED);return n&&!_e[i]&&(_e[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function Pn(e,t,n){if(typeof e!="object")throw new x("options must be an object",x.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new x("option "+o+" must be "+f,x.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new x("Unknown option "+o,x.ERR_BAD_OPTION)}}const ue={assertOptions:Pn,validators:xe},B=ue.validators;class D{constructor(t){this.defaults=t,this.interceptors={request:new Re,response:new Re}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=v(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&ue.assertOptions(r,{silentJSONParsing:B.transitional(B.boolean),forcedJSONParsing:B.transitional(B.boolean),clarifyTimeoutError:B.transitional(B.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ue.assertOptions(s,{encode:B.function,serialize:B.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],m=>{delete o[m]}),n.headers=R.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(f=f&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let d,p=0,w;if(!f){const m=[Pe.bind(this),void 0];for(m.unshift.apply(m,c),m.push.apply(m,l),w=m.length,d=Promise.resolve(n);p<w;)d=d.then(m[p++],m[p++]);return d}w=c.length;let b=n;for(p=0;p<w;){const m=c[p++],y=c[p++];try{b=m(b)}catch(h){y.call(this,h);break}}try{d=Pe.call(this,b)}catch(m){return Promise.reject(m)}for(p=0,w=l.length;p<w;)d=d.then(l[p++],l[p++]);return d}getUri(t){t=v(this.defaults,t);const n=Xe(t.baseURL,t.url);return We(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(n,r){return this.request(v(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(v(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}D.prototype[t]=n(),D.prototype[t+"Form"]=n(!0)});class ye{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new z(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ye(function(s){t=s}),cancel:t}}}function _n(e){return function(n){return e.apply(null,n)}}function Bn(e){return a.isObject(e)&&e.isAxiosError===!0}const de={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(de).forEach(([e,t])=>{de[t]=e});function nt(e){const t=new D(e),n=Be(D.prototype.request,t);return a.extend(n,D.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return nt(v(e,s))},n}const E=nt(H);E.Axios=D;E.CanceledError=z;E.CancelToken=ye;E.isCancel=Ke;E.VERSION=tt;E.toFormData=Z;E.AxiosError=x;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=_n;E.isAxiosError=Bn;E.mergeConfig=v;E.AxiosHeaders=R;E.formToJSON=e=>$e(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=et.getAdapter;E.HttpStatusCode=de;E.default=E;const Ln=T.div`
    padding: 12px;
    
    div {
        width: 100%;
        height: 500px;
        max-width: 862px;
        margin: 0px auto;
        border-radius: 4px;
        background-color: #FFFFFF;
        box-shadow: 0px 0px 4px #04040466;

        display: flex;
        align-items: center;
        justify-content: center;

        span {
            width: 50px;
            height: 50px;
            display: block;
            border-radius: 50%;
            border: 6px solid #04040466;
            border-top-color: #313F4F !important;
            animation: 1s loading linear infinite;

            @keyframes loading {
                0% {
                    transform: rotate(0deg);
                }

                100% {
                    transform: rotate(360deg);
                }
            }
        }
    }
`,kn=T.main`
    padding: 12px;
    display: flex;
    justify-content: center;
    gap: 12px;
        
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`,Dn=T.section`
    width: 100%;
    max-width: 500px;

    @media screen and (max-width: 800px) {
        margin: 0px auto;
    }
`,vn=T.div`
    padding: 12px;

    div {
        width: 100%;
        padding: 12px;
        max-width: 862px;
        margin: 0px auto;
        border-radius: 6px;
        border-radius: 6px;
        
        color: #A61111;
        background-color: #FFC0C0;
        border: 1px solid #A61111;
    }
`;function Un(e){return fe({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"},child:[]}]})(e)}const zn=T.div`
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 4px #04040466;
    margin-bottom: 12px;

    .city-time {
        padding: 12px;
        background-color: #313F4F;
        border-radius: 4px 4px 0px 0px;

        display: flex;
        align-items: center;
        gap: 12px;

        span {
            display: block;
            color: #FFFFFF;
        }

        .city {
            font-size: 16px;
            font-weight: 700;
        }

        .time {
            font-size: 14px;
        }

        @media screen and (max-width: 300px) {
            padding: 8px;

            .city {
                font-size: 14px;
            }

            .time {
                font-size: 12px;
            }
        }
    }

    .weather {
        padding: 20px;
        display: flex;
        align-items: center;

        span {
            display: block;
        }

        .temp {
            font-size: 50px;
            font-weight: 900;
            margin: -10px 0px;
        }

        .description {
            font-size: 16px;
            text-transform: capitalize;
            font-weight: 600;
        }

        @media screen and (max-width: 300px) {
            padding: 12px;

            .temp {
                font-size: 42px;
            }

            .description {
                font-size: 14px;
            }
        }
    }
`,Mn=T(Un)`
    display: block;
    fill: #FFFFFF;
    font-size: 24px;

    @media screen and (max-width: 300px) {
        font-size: 20px;
    }
`,qn=({data:e})=>u.jsxs(zn,{children:[u.jsxs("div",{className:"city-time",children:[u.jsx("div",{children:u.jsx(Mn,{})}),u.jsxs("div",{children:[u.jsx("span",{className:"city",children:"Brumado - BA"}),u.jsx("span",{className:"time",children:e.date})]})]}),u.jsxs("div",{className:"weather",children:[u.jsxs("div",{children:[u.jsxs("span",{className:"temp",children:[e.temp,"°"]}),u.jsx("span",{className:"description",children:e.description})]}),u.jsx("div",{children:u.jsx("img",{src:e.icon,alt:"icon-weather"})})]})]});function In(e){return fe({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11.473 9a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 14h8.5a2.5 2.5 0 1 0-.027-5"},child:[]},{tag:"path",attr:{d:"M14.544 9.772a3.5 3.5 0 0 0-2.225-1.676 5.5 5.5 0 0 0-6.337-4.002 4.002 4.002 0 0 1 7.392.91 2.5 2.5 0 0 1 1.17 4.769z"},child:[]}]})(e)}function Hn(e){return fe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M448 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 96a96 96 0 1 1 192 0A96 96 0 1 1 320 96zM144 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C70.2 332.6 64 349.5 64 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM32 112C32 50.2 82.1 0 144 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S0 447.5 0 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM192 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V272c0-8.8 7.2-16 16-16s16 7.2 16 16v50.7c18.6 6.6 32 24.4 32 45.3z"},child:[]}]})(e)}const Vn=T.div`
    padding: 12px;
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 4px #04040466;

    display: flex;
    flex-direction: column;
    gap: 12px;

    .forecast {
        padding: 12px;
        border-radius: 4px;
        border: 1px solid #04040466;
        
        display: flex;
        align-items: center;
        justify-content: space-between;

        .box {
            display: flex;
            align-items: center;
            gap: 12px;

            .icon {
                display: block;
                font-size: 16px;
            }
        }

        div span {
            display: block;
            font-size: 14px;
            font-weight: 600;
        }
    }
    
    @media screen and (max-width: 300px) {
        padding: 8px;
        gap: 8px;

        .forecast {
            padding: 8px;

            .box {
                gap: 8px;

                .icon {
                    font-size: 13px;
                }
            }
            
            div span {
                font-size: 13px;
            }
        } 
    }
`,Wn=T(rt)`
    fill: #B9A305AA;
    stroke: #B9A305;
`,Jn=T(Hn)`
    fill: #A50909;
`,$n=T(st)`
    fill: #345DB8;
`,Kn=T(ot)`
    fill: #783FA8AA;
    stroke: #783FA8;
`,Gn=T(In)`
    fill: #7DAAA0;
`,Xn=({data:e})=>u.jsxs(Vn,{children:[u.jsxs("div",{className:"forecast",children:[u.jsxs("div",{className:"box",children:[u.jsx("div",{children:u.jsx(Wn,{className:"icon"})}),u.jsx("div",{children:u.jsx("span",{children:"Sensação"})})]}),u.jsx("div",{children:u.jsxs("span",{children:[e.feels_like,"°"]})})]}),u.jsxs("div",{className:"forecast",children:[u.jsxs("div",{className:"box",children:[u.jsx("div",{children:u.jsx(Jn,{className:"icon"})}),u.jsx("div",{children:u.jsx("span",{children:"Min / Max "})})]}),u.jsx("div",{children:u.jsxs("span",{children:[e.temp_min,"° / ",e.temp_max,"°"]})})]}),u.jsxs("div",{className:"forecast",children:[u.jsxs("div",{className:"box",children:[u.jsx("div",{children:u.jsx($n,{className:"icon"})}),u.jsx("div",{children:u.jsx("span",{children:"Umidade"})})]}),u.jsx("div",{children:u.jsxs("span",{children:[e.humidity,"%"]})})]}),u.jsxs("div",{className:"forecast",children:[u.jsxs("div",{className:"box",children:[u.jsx("div",{children:u.jsx(Kn,{className:"icon"})}),u.jsx("div",{children:u.jsx("span",{children:"Vento"})})]}),u.jsx("div",{children:u.jsxs("span",{children:[e.wind_speed," km/h"]})})]}),u.jsxs("div",{className:"forecast",children:[u.jsxs("div",{className:"box",children:[u.jsx("div",{children:u.jsx(Gn,{className:"icon"})}),u.jsx("div",{children:u.jsx("span",{children:"Nebulosidade"})})]}),u.jsx("div",{children:u.jsxs("span",{children:[e.clouds,"%"]})})]})]}),Qn=T.aside`
    width: 100%;
    max-width: 350px;
    border-radius: 4px;
    background-color: #FFFFFF;
    box-shadow: 0px 0px 4px #04040466;

    .title {
        height: 59px;
        padding: 12px;
        display: flex;
        align-items: center;
        background-color: #313F4F;
        border-radius: 4px 4px 0px 0px;

        span {
            display: block;
            font-size: 16px;
            font-weight: 700;
            color: #FFFFFF;
        }

        @media screen and (max-width: 300px) {
            padding: 8px;

            span {
                font-size: 14px;
            }
        }
    }

    .hours-forecast {
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 12px;

        .weather {
            padding: 8px 12px;
            border-radius: 4px;
            border: 1px solid #04040466;
            
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            span {
                display: block;
            }

            .box {
                display: flex;
                margin: -10px 0px;
                align-items: center;
                gap: 4px;
                
                .temp {
                    font-size: 18px;
                    font-weight: 800;
                    margin: -4px 0px;
                }
                
                img {
                    height: 40px;
                }
            }

            .description {
                font-size: 14px;
                text-transform: capitalize;
                font-weight: 600;
            }

            .time {
                font-size: 14px;
                font-weight: 600;
            }
        }

        @media screen and (max-width: 300px) {
            padding: 8px;
            gap: 8px;

            .weather {
                padding: 8px;

                .box {
                    margin: -8px 0px;

                    .temp {
                        font-size: 16px;
                        font-weight: 700;
                    }

                    img {
                        height: 32px;
                    }
                }
                
                .description {
                    font-size: 13px;
                }

                .time {
                    font-size: 13px;
                }
            }
        }
    }

    @media screen and (max-width: 800px) {
        max-width: 500px;
        margin: 0px auto;

        .title {
            height: auto;
            display: block;
        }
    }        
`,Zn=({data:e})=>u.jsxs(Qn,{children:[u.jsx("div",{className:"title",children:u.jsx("span",{children:"Próximas 3 horas"})}),u.jsx("div",{className:"hours-forecast",children:e.map(t=>u.jsx("div",{children:u.jsxs("div",{className:"weather",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"box",children:[u.jsxs("span",{className:"temp",children:[t.temp,"°"]}),u.jsx("img",{src:t.icon,alt:"icon-weather"})]}),u.jsx("span",{className:"description",children:t.description})]}),u.jsx("div",{className:"time",children:u.jsx("span",{children:t.hours})})]})}))})]}),tr=()=>{const[e,t]=_.useState(void 0),[n,r]=_.useState(void 0),[s,o]=_.useState(void 0),[i,c]=_.useState(!0),[f,l]=_.useState(void 0);return _.useEffect(()=>{(async()=>{try{const p=await E.get("http://localhost:3000/api/weather");if(p.status===200){const w=p.data.weather,b={date:w.date,temp:w.temp,description:w.description,icon:w.icon},m={feels_like:w.forecast.feels_like,temp_min:w.forecast.temp_min,temp_max:w.forecast.temp_max,humidity:w.forecast.humidity,wind_speed:w.forecast.wind_speed,clouds:w.forecast.clouds};t(b),r(m),o(w.forecast.hours_forecast)}else l("Não foi possível carregar a previsão. Por favor, tente novamente.")}catch(p){if(p.response.status===404)return l("Erro 404: Dados não encontrado.");l("Erro 500: Erro interno do servidor.")}c(!1)})()},[]),u.jsx(_.Fragment,{children:f===void 0?u.jsx(_.Fragment,{children:i?u.jsx(Ln,{children:u.jsx("div",{children:u.jsx("span",{})})}):u.jsxs(kn,{children:[u.jsxs(Dn,{children:[u.jsx(qn,{data:e}),u.jsx(Xn,{data:n})]}),s&&u.jsx(Zn,{data:s})]})}):u.jsx(vn,{children:u.jsx("div",{children:f})})})};export{tr as default};
