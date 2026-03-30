(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dt=new WeakMap,ct=s=>{if((e=>e.pattern!==void 0)(s))return s.pattern;let t=dt.get(s);return t===void 0&&dt.set(s,t=new URLPattern({pathname:s.path})),t};let Rt=class{constructor(t,e,i){this.routes=[],this.o=[],this.t={},this.i=n=>{if(n.routes===this)return;const r=n.routes;this.o.push(r),r.h=this,n.stopImmediatePropagation(),n.onDisconnect=()=>{var d;(d=this.o)==null||d.splice(this.o.indexOf(r)>>>0,1)};const o=ht(this.t);o!==void 0&&r.goto(o)},(this.l=t).addController(this),this.routes=[...e],this.fallback=i==null?void 0:i.fallback}link(t){var e;if(t!=null&&t.startsWith("/"))return t;if(t!=null&&t.startsWith("."))throw Error("Not implemented");return t??(t=this.u),(((e=this.h)==null?void 0:e.link())??"")+t}async goto(t){let e;if(this.routes.length===0&&this.fallback===void 0)e=t,this.u="",this.t={0:e};else{const i=this.p(t);if(i===void 0)throw Error("No route found for "+t);const n=ct(i).exec({pathname:t}),r=(n==null?void 0:n.pathname.groups)??{};if(e=ht(r),typeof i.enter=="function"&&await i.enter(r)===!1)return;this.v=i,this.t=r,this.u=e===void 0?t:t.substring(0,t.length-e.length)}if(e!==void 0)for(const i of this.o)i.goto(e);this.l.requestUpdate()}outlet(){var t,e;return(e=(t=this.v)==null?void 0:t.render)==null?void 0:e.call(t,this.t)}get params(){return this.t}p(t){const e=this.routes.find((i=>ct(i).test({pathname:t})));return e||this.fallback===void 0?e:this.fallback?{...this.fallback,path:"/*"}:void 0}hostConnected(){this.l.addEventListener(nt.eventName,this.i);const t=new nt(this);this.l.dispatchEvent(t),this._=t.onDisconnect}hostDisconnected(){var t;(t=this._)==null||t.call(this),this.h=void 0}};const ht=s=>{let t;for(const e of Object.keys(s))/\d+/.test(e)&&(t===void 0||e>t)&&(t=e);return t&&s[t]};let nt=class Pt extends Event{constructor(t){super(Pt.eventName,{bubbles:!0,composed:!0,cancelable:!1}),this.routes=t}};nt.eventName="lit-routes-connected";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt=location.origin||location.protocol+"//"+location.host;let Nt=class extends Rt{constructor(){super(...arguments),this.m=t=>{const e=t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey;if(t.defaultPrevented||e)return;const i=t.composedPath().find((o=>o.tagName==="A"));if(i===void 0||i.target!==""||i.hasAttribute("download")||i.getAttribute("rel")==="external")return;const n=i.href;if(n===""||n.startsWith("mailto:"))return;const r=window.location;i.origin===jt&&(t.preventDefault(),n!==r.href&&(window.history.pushState({},"",n),this.goto(i.pathname)))},this.R=t=>{this.goto(window.location.pathname)}}hostConnected(){super.hostConnected(),window.addEventListener("click",this.m),window.addEventListener("popstate",this.R),this.goto(window.location.pathname)}hostDisconnected(){super.hostDisconnected(),window.removeEventListener("click",this.m),window.removeEventListener("popstate",this.R)}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K=globalThis,rt=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ct=Symbol(),ut=new WeakMap;let Ut=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(rt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ut.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ut.set(e,t))}return t}toString(){return this.cssText}};const Lt=s=>new Ut(typeof s=="string"?s:s+"",void 0,Ct),Dt=(s,t)=>{if(rt)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),n=K.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)}},pt=rt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Lt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:kt,defineProperty:Ht,getOwnPropertyDescriptor:It,getOwnPropertyNames:Ft,getOwnPropertySymbols:Wt,getPrototypeOf:zt}=Object,_=globalThis,ft=_.trustedTypes,Bt=ft?ft.emptyScript:"",Y=_.reactiveElementPolyfillSupport,U=(s,t)=>s,q={toAttribute(s,t){switch(t){case Boolean:s=s?Bt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},ot=(s,t)=>!kt(s,t),mt={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:ot};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),_.litPropertyMetadata??(_.litPropertyMetadata=new WeakMap);let T=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=mt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Ht(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){const{get:n,set:r}=It(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:n,set(o){const d=n==null?void 0:n.call(this);r==null||r.call(this,o),this.requestUpdate(t,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??mt}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=zt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,i=[...Ft(e),...Wt(e)];for(const n of i)this.createProperty(n,e[n])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,n]of e)this.elementProperties.set(i,n)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const n=this._$Eu(e,i);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(pt(n))}else t!==void 0&&e.push(pt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Dt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){var r;const i=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,i);if(n!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:q).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(t,e){var r,o;const i=this.constructor,n=i._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const d=i.getPropertyOptions(n),l=typeof d.converter=="function"?{fromAttribute:d.converter}:((r=d.converter)==null?void 0:r.fromAttribute)!==void 0?d.converter:q;this._$Em=n;const u=l.fromAttribute(e,d.type);this[n]=u??((o=this._$Ej)==null?void 0:o.get(n))??u,this._$Em=null}}requestUpdate(t,e,i,n=!1,r){var o;if(t!==void 0){const d=this.constructor;if(n===!1&&(r=this[t]),i??(i=d.getPropertyOptions(t)),!((i.hasChanged??ot)(r,e)||i.useDefault&&i.reflect&&r===((o=this._$Ej)==null?void 0:o.get(t))&&!this.hasAttribute(d._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:n,wrapped:r},o){i&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,o??e??this[t]),r!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),n===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[r,o]of n){const{wrapped:d}=o,l=this[r];d!==!0||this._$AL.has(r)||l===void 0||this.C(r,void 0,o,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(n=>{var r;return(r=n.hostUpdate)==null?void 0:r.call(n)}),this.update(e)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var n;return(n=i.hostUpdated)==null?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[U("elementProperties")]=new Map,T[U("finalized")]=new Map,Y==null||Y({ReactiveElement:T}),(_.reactiveElementVersions??(_.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=globalThis,gt=s=>s,V=L.trustedTypes,vt=V?V.createPolicy("lit-html",{createHTML:s=>s}):void 0,Et="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,Ot="?"+w,Kt=`<${Ot}>`,E=document,D=()=>E.createComment(""),k=s=>s===null||typeof s!="object"&&typeof s!="function",at=Array.isArray,qt=s=>at(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",tt=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,yt=/-->/g,bt=/>/g,A=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$t=/'/g,xt=/"/g,Tt=/^(?:script|style|textarea|title)$/i,Vt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),a=Vt(1),M=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),wt=new WeakMap,P=E.createTreeWalker(E,129);function Mt(s,t){if(!at(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return vt!==void 0?vt.createHTML(t):t}const Jt=(s,t)=>{const e=s.length-1,i=[];let n,r=t===2?"<svg>":t===3?"<math>":"",o=N;for(let d=0;d<e;d++){const l=s[d];let u,f,h=-1,y=0;for(;y<l.length&&(o.lastIndex=y,f=o.exec(l),f!==null);)y=o.lastIndex,o===N?f[1]==="!--"?o=yt:f[1]!==void 0?o=bt:f[2]!==void 0?(Tt.test(f[2])&&(n=RegExp("</"+f[2],"g")),o=A):f[3]!==void 0&&(o=A):o===A?f[0]===">"?(o=n??N,h=-1):f[1]===void 0?h=-2:(h=o.lastIndex-f[2].length,u=f[1],o=f[3]===void 0?A:f[3]==='"'?xt:$t):o===xt||o===$t?o=A:o===yt||o===bt?o=N:(o=A,n=void 0);const x=o===A&&s[d+1].startsWith("/>")?" ":"";r+=o===N?l+Kt:h>=0?(i.push(u),l.slice(0,h)+Et+l.slice(h)+w+x):l+w+(h===-2?d:x)}return[Mt(s,r+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class H{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,o=0;const d=t.length-1,l=this.parts,[u,f]=Jt(t,e);if(this.el=H.createElement(u,i),P.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(n=P.nextNode())!==null&&l.length<d;){if(n.nodeType===1){if(n.hasAttributes())for(const h of n.getAttributeNames())if(h.endsWith(Et)){const y=f[o++],x=n.getAttribute(h).split(w),z=/([.?@])?(.*)/.exec(y);l.push({type:1,index:r,name:z[2],strings:x,ctor:z[1]==="."?Xt:z[1]==="?"?Zt:z[1]==="@"?Qt:G}),n.removeAttribute(h)}else h.startsWith(w)&&(l.push({type:6,index:r}),n.removeAttribute(h));if(Tt.test(n.tagName)){const h=n.textContent.split(w),y=h.length-1;if(y>0){n.textContent=V?V.emptyScript:"";for(let x=0;x<y;x++)n.append(h[x],D()),P.nextNode(),l.push({type:2,index:++r});n.append(h[y],D())}}}else if(n.nodeType===8)if(n.data===Ot)l.push({type:2,index:r});else{let h=-1;for(;(h=n.data.indexOf(w,h+1))!==-1;)l.push({type:7,index:r}),h+=w.length-1}r++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function R(s,t,e=s,i){var o,d;if(t===M)return t;let n=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl;const r=k(t)?void 0:t._$litDirective$;return(n==null?void 0:n.constructor)!==r&&((d=n==null?void 0:n._$AO)==null||d.call(n,!1),r===void 0?n=void 0:(n=new r(s),n._$AT(s,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=n:e._$Cl=n),n!==void 0&&(t=R(s,n._$AS(s,t.values),n,i)),t}class Gt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,n=((t==null?void 0:t.creationScope)??E).importNode(e,!0);P.currentNode=n;let r=P.nextNode(),o=0,d=0,l=i[0];for(;l!==void 0;){if(o===l.index){let u;l.type===2?u=new W(r,r.nextSibling,this,t):l.type===1?u=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(u=new Yt(r,this,t)),this._$AV.push(u),l=i[++d]}o!==(l==null?void 0:l.index)&&(r=P.nextNode(),o++)}return P.currentNode=E,n}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class W{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,n){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cv=(n==null?void 0:n.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),k(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==M&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):qt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&k(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:i}=t,n=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=H.createElement(Mt(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===n)this._$AH.p(e);else{const o=new Gt(n,this),d=o.u(this.options);o.p(e),this.T(d),this._$AH=o}}_$AC(t){let e=wt.get(t.strings);return e===void 0&&wt.set(t.strings,e=new H(t)),e}k(t){at(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new W(this.O(D()),this.O(D()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t!==this._$AB;){const n=gt(t).nextSibling;gt(t).remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,n,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,n){const r=this.strings;let o=!1;if(r===void 0)t=R(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==M,o&&(this._$AH=t);else{const d=t;let l,u;for(t=r[0],l=0;l<r.length-1;l++)u=R(this,d[i+l],e,l),u===M&&(u=this._$AH[l]),o||(o=!k(u)||u!==this._$AH[l]),u===p?t=p:t!==p&&(t+=(u??"")+r[l+1]),this._$AH[l]=u}o&&!n&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Xt extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Zt extends G{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Qt extends G{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){if((t=R(this,t,e,0)??p)===M)return;const i=this._$AH,n=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==p&&(i===p||n);n&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Yt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const et=L.litHtmlPolyfillSupport;et==null||et(H,W),(L.litHtmlVersions??(L.litHtmlVersions=[])).push("3.3.2");const te=(s,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let n=i._$litPart$;if(n===void 0){const r=(e==null?void 0:e.renderBefore)??null;i._$litPart$=n=new W(t.insertBefore(D(),r),r,void 0,e??{})}return n._$AI(s),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis;class m extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=te(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return M}}var At;m._$litElement$=!0,m.finalized=!0,(At=C.litElementHydrateSupport)==null||At.call(C,{LitElement:m});const st=C.litElementPolyfillSupport;st==null||st({LitElement:m});(C.litElementVersions??(C.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:ot},se=(s=ee,t,e)=>{const{kind:i,metadata:n}=e;let r=globalThis.litPropertyMetadata.get(n);if(r===void 0&&globalThis.litPropertyMetadata.set(n,r=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),r.set(e.name,s),i==="accessor"){const{name:o}=e;return{set(d){const l=t.get.call(this);t.set.call(this,d),this.requestUpdate(o,l,s,!0,d)},init(d){return d!==void 0&&this.C(o,void 0,s,d),d}}}if(i==="setter"){const{name:o}=e;return function(d){const l=this[o];t.call(this,d),this.requestUpdate(o,l,s,!0,d)}}throw Error("Unsupported decorator location: "+i)};function X(s){return(t,e)=>typeof e=="object"?se(s,t,e):((i,n,r)=>{const o=n.hasOwnProperty(r);return n.constructor.createProperty(r,i),o?Object.getOwnPropertyDescriptor(n,r):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function c(s){return X({...s,state:!0,attribute:!1})}var ie=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,Z=(s,t,e,i)=>{for(var n=i>1?void 0:i?ne(t,e):t,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&ie(t,e,n),n};let I=class extends m{constructor(){super(...arguments),this.password="",this.error="",this.loading=!1}createRenderRoot(){return this}async handleSubmit(s){s.preventDefault(),this.error="",this.loading=!0;try{const t=await fetch("/api/auth/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:this.password})});if(t.ok)this.dispatchEvent(new CustomEvent("login-success",{bubbles:!0,composed:!0}));else{const e=await t.json();this.error=e.error||"Invalid password"}}catch{this.error="Connection failed. Is the server running?"}finally{this.loading=!1}}handleInput(s){this.password=s.target.value}handleKeyDown(s){s.key==="Enter"&&this.handleSubmit(s)}render(){return a`
			<div class="w-full h-screen flex items-center justify-center bg-background">
				<div class="w-full max-w-sm p-8">
					<h1 class="text-2xl font-bold text-foreground mb-2">DG-Claw</h1>
					<p class="text-sm text-muted-foreground mb-8">Enter your password to continue.</p>

					<form @submit=${this.handleSubmit}>
						<div class="space-y-4">
							<input
								type="password"
								placeholder="Password"
								.value=${this.password}
								@input=${this.handleInput}
								@keydown=${this.handleKeyDown}
								?disabled=${this.loading}
								class="w-full px-3 py-2 bg-secondary text-foreground border border-border rounded-md
									   focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
									   placeholder:text-muted-foreground disabled:opacity-50"
								autocomplete="current-password"
								autofocus
							/>

							${this.error?a`<p class="text-sm text-destructive">${this.error}</p>`:null}

							<button
								type="submit"
								?disabled=${this.loading||!this.password}
								class="w-full px-3 py-2 bg-primary text-primary-foreground rounded-md
									   hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed
									   transition-colors font-medium"
							>
								${this.loading?"Signing in...":"Sign in"}
							</button>
						</div>
					</form>
				</div>
			</div>
		`}};Z([c()],I.prototype,"password",2);Z([c()],I.prototype,"error",2);Z([c()],I.prototype,"loading",2);I=Z([j("login-view")],I);const _t=1e3,re=3e4,oe=2;class ae{constructor(t){if(this.ws=null,this.state="disconnected",this.backoffMs=_t,this.reconnectTimer=null,this.shouldReconnect=!0,this.messageHandlers=[],this.stateChangeHandlers=[],t)this.url=t;else{const e=window.location.protocol==="https:"?"wss:":"ws:";this.url=`${e}//${window.location.host}/ws`}}get connectionState(){return this.state}onMessage(t){return this.messageHandlers.push(t),()=>{const e=this.messageHandlers.indexOf(t);e>=0&&this.messageHandlers.splice(e,1)}}onStateChange(t){return this.stateChangeHandlers.push(t),()=>{const e=this.stateChangeHandlers.indexOf(t);e>=0&&this.stateChangeHandlers.splice(e,1)}}connect(){this.shouldReconnect=!0,this.doConnect()}send(t){if(!this.ws||this.ws.readyState!==WebSocket.OPEN){console.warn("[WsClient] Cannot send: not connected");return}this.ws.send(JSON.stringify(t))}close(){this.shouldReconnect=!1,this.reconnectTimer!==null&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=null),this.ws&&(this.ws.close(),this.ws=null),this.setState("disconnected")}doConnect(){this.ws&&(this.ws.close(),this.ws=null),this.setState(this.state==="disconnected"?"connecting":"reconnecting");try{this.ws=new WebSocket(this.url)}catch(t){console.error("[WsClient] Failed to create WebSocket:",t),this.scheduleReconnect();return}this.ws.onopen=()=>{this.setState("connected"),this.backoffMs=_t},this.ws.onmessage=t=>{try{const e=JSON.parse(t.data);for(const i of this.messageHandlers)i(e)}catch(e){console.error("[WsClient] Failed to parse message:",e)}},this.ws.onclose=()=>{this.ws=null,this.setState("disconnected"),this.scheduleReconnect()},this.ws.onerror=t=>{console.error("[WsClient] WebSocket error:",t)}}scheduleReconnect(){if(!this.shouldReconnect)return;const t=this.backoffMs;this.backoffMs=Math.min(this.backoffMs*oe,re),this.setState("reconnecting"),this.reconnectTimer=setTimeout(()=>{this.reconnectTimer=null,this.doConnect()},t)}setState(t){if(this.state!==t){this.state=t;for(const e of this.stateChangeHandlers)e(t)}}}var le=Object.defineProperty,de=Object.getOwnPropertyDescriptor,O=(s,t,e,i)=>{for(var n=i>1?void 0:i?de(t,e):t,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&le(t,e,n),n};let ce=0;function it(){return String(++ce)}let S=class extends m{constructor(){super(...arguments),this.sessionId=null,this.activePanel=null,this.connectionState="disconnected",this.messages=[],this.inputText="",this.isAgentRunning=!1,this.wsClient=null,this.unsubscribeWs=null,this.unsubscribeState=null}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this._initConnection()}disconnectedCallback(){super.disconnectedCallback(),this._cleanup()}updated(s){s.has("sessionId")&&this.sessionId&&this._loadSession(this.sessionId)}_initConnection(){if(this.wsClient=new ae,this.unsubscribeWs=this.wsClient.onMessage(s=>{this._handleServerMessage(s)}),this.unsubscribeState=this.wsClient.onStateChange(s=>{this.connectionState=s}),this.wsClient.connect(),this.sessionId){const s=this.wsClient.onStateChange(t=>{t==="connected"&&(s(),this._loadSession(this.sessionId))})}}_loadSession(s){var t;((t=this.wsClient)==null?void 0:t.connectionState)==="connected"&&this.wsClient.send({type:"session_load",sessionId:s})}_cleanup(){var s,t,e;(s=this.unsubscribeWs)==null||s.call(this),(t=this.unsubscribeState)==null||t.call(this),(e=this.wsClient)==null||e.close(),this.wsClient=null}_handleServerMessage(s){switch(s.type){case"agent_start":this.isAgentRunning=!0;break;case"agent_end":this.isAgentRunning=!1,this.messages=this.messages.map(t=>t.streaming?{...t,streaming:!1}:t);break;case"message_start":{const t=s.message,e=St(t);if(!e)break;const i={id:it(),role:e,text:B(t),streaming:e==="assistant"};this.messages=[...this.messages,i];break}case"message_update":{const t=s.message,e=B(t);this.messages=this.messages.map((i,n)=>n===this.messages.length-1&&i.streaming?{...i,text:e}:i);break}case"message_end":{const t=s.message,e=B(t);this.messages=this.messages.map((i,n)=>n===this.messages.length-1&&i.streaming?{...i,text:e,streaming:!1}:i);break}case"session_loaded":{const t=s.entries;this.messages=[];for(const e of t)if(e.type==="message"&&e.message){const i=St(e.message);i&&(this.messages=[...this.messages,{id:it(),role:i,text:B(e.message),streaming:!1}])}break}case"error":console.error("[ChatView] Server error:",s.message);break}}_handleInput(s){this.inputText=s.target.value}_handleKeyDown(s){s.key==="Enter"&&!s.shiftKey&&(s.preventDefault(),this._send())}_send(){var t;const s=this.inputText.trim();!s||this.isAgentRunning||this.connectionState!=="connected"||(this.messages=[...this.messages,{id:it(),role:"user",text:s,streaming:!1}],this.inputText="",(t=this.wsClient)==null||t.send({type:"message",content:s}))}_abort(){var s;(s=this.wsClient)==null||s.send({type:"abort"})}render(){const s=this.connectionState==="connected";return a`
			<div class="flex flex-col h-full">
				${s?p:a`
						<div class="bg-yellow-500/10 text-yellow-600 text-xs px-3 py-1 text-center">
							${this.connectionState==="connecting"?"Connecting...":"Reconnecting to server..."}
						</div>
					`}

				<!-- Message list -->
				<div class="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
					${this.messages.length===0?a`
							<div class="flex items-center justify-center h-full text-muted-foreground text-sm">
								No messages yet. Say something!
							</div>
						`:this.messages.map(t=>this._renderMessage(t))}
				</div>

				<!-- Input area -->
				<div class="border-t border-border p-3 flex gap-2">
					<textarea
						class="flex-1 resize-none bg-secondary text-foreground border border-border rounded-md
							   px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary
							   focus:border-transparent placeholder:text-muted-foreground disabled:opacity-50"
						rows="2"
						placeholder="Type a message... (Enter to send, Shift+Enter for newline)"
						.value=${this.inputText}
						@input=${this._handleInput}
						@keydown=${this._handleKeyDown}
						?disabled=${!s||this.isAgentRunning}
					></textarea>

					${this.isAgentRunning?a`
							<button
								class="px-3 py-2 bg-destructive text-destructive-foreground rounded-md
									   hover:bg-destructive/90 text-sm font-medium transition-colors self-end"
								@click=${this._abort}
							>
								Stop
							</button>
						`:a`
							<button
								class="px-3 py-2 bg-primary text-primary-foreground rounded-md
									   hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed
									   text-sm font-medium transition-colors self-end"
								?disabled=${!s||!this.inputText.trim()}
								@click=${this._send}
							>
								Send
							</button>
						`}
				</div>
			</div>
		`}_renderMessage(s){const t=s.role==="user";return a`
			<div class="flex ${t?"justify-end":"justify-start"}">
				<div
					class="max-w-[80%] rounded-lg px-4 py-2 text-sm whitespace-pre-wrap
						   ${t?"bg-primary text-primary-foreground":"bg-secondary text-foreground border border-border"}"
				>
					${s.text||p}
					${s.streaming?a`<span class="inline-block w-2 h-4 bg-current animate-pulse ml-0.5 align-middle"></span>`:p}
				</div>
			</div>
		`}};O([X({type:String})],S.prototype,"sessionId",2);O([X({type:String})],S.prototype,"activePanel",2);O([c()],S.prototype,"connectionState",2);O([c()],S.prototype,"messages",2);O([c()],S.prototype,"inputText",2);O([c()],S.prototype,"isAgentRunning",2);S=O([j("chat-view")],S);function St(s){if(!s||typeof s!="object")return null;const t=s.role;return t==="user"||t==="user-with-attachments"?"user":t==="assistant"?"assistant":null}function B(s){if(!s||typeof s!="object")return"";const t=s.content;return typeof t=="string"?t:Array.isArray(t)?t.filter(e=>(e==null?void 0:e.type)==="text").map(e=>e.text).join(""):""}var he=Object.defineProperty,ue=Object.getOwnPropertyDescriptor,b=(s,t,e,i)=>{for(var n=i>1?void 0:i?ue(t,e):t,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&he(t,e,n),n};const pe=["Profile","Preference","Goal","Entity","Event","Case","Pattern","Tool"];let g=class extends m{constructor(){super(...arguments),this.activeTab="facts",this.facts=[],this.factsTotal=0,this.topOfMind="",this.experiments=[],this.stats=null,this.categoryFilter="",this.loading=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadData()}async loadData(){this.loading=!0,await Promise.all([this.loadFacts(),this.loadTopOfMind(),this.loadExperiments(),this.loadStats()]),this.loading=!1}async loadFacts(){try{const s=new URLSearchParams;this.categoryFilter&&s.set("category",this.categoryFilter),s.set("limit","100");const e=await(await fetch(`/api/memory/facts?${s}`)).json();this.facts=e.facts??[],this.factsTotal=e.total??0}catch(s){console.error("[MemoryPanel] Failed to load facts:",s)}}async loadTopOfMind(){try{const t=await(await fetch("/api/memory/top-of-mind")).json();this.topOfMind=t.summary??""}catch(s){console.error("[MemoryPanel] Failed to load top-of-mind:",s)}}async loadExperiments(){try{const t=await(await fetch("/api/memory/experiments")).json();this.experiments=t.experiments??[]}catch(s){console.error("[MemoryPanel] Failed to load experiments:",s)}}async loadStats(){try{const s=await fetch("/api/memory/stats");this.stats=await s.json()}catch(s){console.error("[MemoryPanel] Failed to load stats:",s)}}onCategoryChange(s){this.categoryFilter=s.target.value,this.loadFacts()}renderTabs(){return a`
			<div class="flex border-b border-border mb-4">
				${[{id:"facts",label:"Facts"},{id:"top-of-mind",label:"Top of Mind"},{id:"experiments",label:"Experiments"},{id:"stats",label:"Stats"}].map(t=>a`
						<button
							class="px-3 py-2 text-sm font-medium transition-colors
								   ${this.activeTab===t.id?"text-primary border-b-2 border-primary":"text-muted-foreground hover:text-foreground"}"
							@click=${()=>{this.activeTab=t.id}}
						>
							${t.label}
						</button>
					`)}
			</div>
		`}renderFacts(){return a`
			<div class="space-y-3">
				<div class="flex items-center gap-2">
					<select
						class="px-2 py-1 text-sm bg-secondary text-foreground border border-border rounded"
						@change=${this.onCategoryChange}
					>
						<option value="">All categories</option>
						${pe.map(s=>a`<option value=${s} ?selected=${this.categoryFilter===s}>${s}</option>`)}
					</select>
					<span class="text-xs text-muted-foreground">${this.factsTotal} facts</span>
				</div>

				<div class="space-y-1 max-h-[60vh] overflow-y-auto">
					${this.facts.map(s=>a`
							<div class="p-2 bg-secondary/50 rounded text-sm">
								<div class="flex items-center justify-between">
									<span class="font-medium text-foreground">${s.entity}:${s.slot}</span>
									<span class="text-xs px-1.5 py-0.5 bg-primary/10 text-primary rounded"
										>${s.category}</span
									>
								</div>
								<div class="text-muted-foreground mt-1">${s.value}</div>
								<div class="flex gap-3 mt-1 text-xs text-muted-foreground">
									<span>Salience: ${(s.salience*100).toFixed(0)}%</span>
									<span>Conf: ${(s.confidence*100).toFixed(0)}%</span>
								</div>
							</div>
						`)}

					${this.facts.length===0?a`<p class="text-sm text-muted-foreground p-4 text-center">No facts found.</p>`:null}
				</div>
			</div>
		`}renderTopOfMind(){return a`
			<div class="space-y-3">
				<h3 class="text-sm font-medium text-foreground">L0 Summary</h3>
				${this.topOfMind?a`<div class="p-3 bg-secondary/50 rounded text-sm text-foreground whitespace-pre-wrap">
							${this.topOfMind}
						</div>`:a`<p class="text-sm text-muted-foreground">No top-of-mind summary available.</p>`}
			</div>
		`}renderExperiments(){return a`
			<div class="space-y-2 max-h-[60vh] overflow-y-auto">
				${this.experiments.map(s=>a`
						<div class="p-2 bg-secondary/50 rounded text-sm">
							<div class="flex items-center justify-between">
								<span class="font-medium text-foreground">${s.target}</span>
								<span
									class="text-xs px-1.5 py-0.5 rounded
									${s.status==="kept"?"bg-green-500/10 text-green-600":""}
									${s.status==="discarded"?"bg-yellow-500/10 text-yellow-600":""}
									${s.status==="crashed"?"bg-red-500/10 text-red-600":""}
								"
									>${s.status}</span
								>
							</div>
							<div class="text-muted-foreground mt-1">${s.mutation}</div>
							<div class="flex gap-3 mt-1 text-xs text-muted-foreground">
								${s.score!==null?a`<span>Score: ${(s.score*100).toFixed(1)}%</span>`:null}
								<span>${new Date(s.timestamp).toLocaleString()}</span>
							</div>
						</div>
					`)}

				${this.experiments.length===0?a`<p class="text-sm text-muted-foreground p-4 text-center">No experiments recorded.</p>`:null}
			</div>
		`}renderStats(){return this.stats?a`
			<div class="space-y-4">
				<div class="p-3 bg-secondary/50 rounded">
					<div class="text-2xl font-bold text-foreground">${this.stats.total}</div>
					<div class="text-sm text-muted-foreground">Total active facts</div>
				</div>

				<div>
					<h4 class="text-sm font-medium text-foreground mb-2">By Category</h4>
					<div class="space-y-1">
						${Object.entries(this.stats.byCategory).map(([s,t])=>a`
								<div class="flex justify-between items-center text-sm">
									<span class="text-foreground">${s}</span>
									<span class="text-muted-foreground">${t}</span>
								</div>
							`)}
					</div>
				</div>

				<div>
					<h4 class="text-sm font-medium text-foreground mb-2">By Salience</h4>
					<div class="space-y-1 text-sm">
						<div class="flex justify-between">
							<span class="text-green-600">High (&gt;=70%)</span>
							<span class="text-muted-foreground">${this.stats.bySalience.high}</span>
						</div>
						<div class="flex justify-between">
							<span class="text-yellow-600">Medium (30-69%)</span>
							<span class="text-muted-foreground">${this.stats.bySalience.medium}</span>
						</div>
						<div class="flex justify-between">
							<span class="text-red-600">Low (&lt;30%)</span>
							<span class="text-muted-foreground">${this.stats.bySalience.low}</span>
						</div>
					</div>
				</div>
			</div>
		`:a`<p class="text-sm text-muted-foreground">Loading stats...</p>`}render(){return a`
			<div class="p-4">
				<h2 class="text-lg font-semibold text-foreground mb-4">Memory</h2>

				${this.loading?a`<div class="text-sm text-muted-foreground">Loading...</div>`:a`
							${this.renderTabs()}
							${this.activeTab==="facts"?this.renderFacts():null}
							${this.activeTab==="top-of-mind"?this.renderTopOfMind():null}
							${this.activeTab==="experiments"?this.renderExperiments():null}
							${this.activeTab==="stats"?this.renderStats():null}
						`}
			</div>
		`}};b([c()],g.prototype,"activeTab",2);b([c()],g.prototype,"facts",2);b([c()],g.prototype,"factsTotal",2);b([c()],g.prototype,"topOfMind",2);b([c()],g.prototype,"experiments",2);b([c()],g.prototype,"stats",2);b([c()],g.prototype,"categoryFilter",2);b([c()],g.prototype,"loading",2);g=b([j("memory-panel")],g);var fe=Object.defineProperty,me=Object.getOwnPropertyDescriptor,$=(s,t,e,i)=>{for(var n=i>1?void 0:i?me(t,e):t,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&fe(t,e,n),n};let v=class extends m{constructor(){super(...arguments),this.activeTab="models",this.models=[],this.sandboxStatus=null,this.schedules=[],this.settings={},this.loading=!1,this.ratchetTarget="",this.ratchetMessage=""}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.loadData()}async loadData(){this.loading=!0,await Promise.all([this.loadModels(),this.loadSandboxStatus(),this.loadSchedules(),this.loadSettings()]),this.loading=!1}async loadModels(){try{const t=await(await fetch("/api/admin/models")).json();this.models=t.models??[]}catch(s){console.error("[AdminPanel] Failed to load models:",s)}}async loadSandboxStatus(){try{const s=await fetch("/api/admin/sandbox/status");this.sandboxStatus=await s.json()}catch(s){console.error("[AdminPanel] Failed to load sandbox status:",s)}}async loadSchedules(){try{const t=await(await fetch("/api/admin/autolearn/schedules")).json();this.schedules=t.schedules??[]}catch(s){console.error("[AdminPanel] Failed to load schedules:",s)}}async loadSettings(){try{const t=await(await fetch("/api/admin/config")).json();this.settings=t.settings??{}}catch(s){console.error("[AdminPanel] Failed to load settings:",s)}}async triggerRatchet(){if(this.ratchetTarget){this.ratchetMessage="";try{const t=await(await fetch("/api/admin/autolearn/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({target:this.ratchetTarget})})).json();this.ratchetMessage=t.message||"Ratchet triggered."}catch(s){this.ratchetMessage=`Failed: ${s instanceof Error?s.message:String(s)}`}}}renderTabs(){return a`
			<div class="flex border-b border-border mb-4">
				${[{id:"models",label:"Models"},{id:"sandbox",label:"Sandbox"},{id:"autolearn",label:"AutoLearn"},{id:"settings",label:"Settings"}].map(t=>a`
						<button
							class="px-3 py-2 text-sm font-medium transition-colors
								   ${this.activeTab===t.id?"text-primary border-b-2 border-primary":"text-muted-foreground hover:text-foreground"}"
							@click=${()=>{this.activeTab=t.id}}
						>
							${t.label}
						</button>
					`)}
			</div>
		`}renderModels(){return a`
			<div class="space-y-2">
				<h3 class="text-sm font-medium text-foreground">Available Models</h3>
				${this.models.map(s=>a`
						<div class="p-2 bg-secondary/50 rounded text-sm">
							<div class="font-medium text-foreground">${s.label}</div>
							<div class="text-xs text-muted-foreground">${s.provider} / ${s.id}</div>
						</div>
					`)}
				${this.models.length===0?a`<p class="text-sm text-muted-foreground">No models available.</p>`:null}
			</div>
		`}renderSandbox(){return this.sandboxStatus?a`
			<div class="space-y-3">
				<div class="p-3 bg-secondary/50 rounded">
					<div class="flex items-center gap-2">
						<span
							class="w-2 h-2 rounded-full
							${this.sandboxStatus.available?"bg-green-500":"bg-red-500"}"
						></span>
						<span class="text-sm font-medium text-foreground">
							${this.sandboxStatus.available?"Available":"Unavailable"}
						</span>
					</div>
					<div class="text-xs text-muted-foreground mt-1">${this.sandboxStatus.message}</div>
				</div>
			</div>
		`:a`<p class="text-sm text-muted-foreground">Loading...</p>`}renderAutoLearn(){return a`
			<div class="space-y-4">
				<div>
					<h3 class="text-sm font-medium text-foreground mb-2">Trigger Ratchet Run</h3>
					<div class="flex gap-2">
						<input
							type="text"
							placeholder="Target (e.g., system-prompt)"
							.value=${this.ratchetTarget}
							@input=${s=>{this.ratchetTarget=s.target.value}}
							class="flex-1 px-2 py-1 text-sm bg-secondary text-foreground border border-border rounded"
						/>
						<button
							@click=${this.triggerRatchet}
							?disabled=${!this.ratchetTarget}
							class="px-3 py-1 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90
								   disabled:opacity-50 disabled:cursor-not-allowed"
						>
							Run
						</button>
					</div>
					${this.ratchetMessage?a`<p class="text-xs text-muted-foreground mt-1">${this.ratchetMessage}</p>`:null}
				</div>

				<div>
					<h3 class="text-sm font-medium text-foreground mb-2">Schedules</h3>
					${this.schedules.map(s=>a`
							<div class="p-2 bg-secondary/50 rounded text-sm mb-1">
								<div class="flex items-center justify-between">
									<span class="font-medium text-foreground">${s.target}</span>
									<span
										class="text-xs px-1.5 py-0.5 rounded
										${s.enabled?"bg-green-500/10 text-green-600":"bg-gray-500/10 text-gray-500"}"
									>
										${s.enabled?"Active":"Disabled"}
									</span>
								</div>
								<div class="text-xs text-muted-foreground">${s.cron}</div>
							</div>
						`)}
					${this.schedules.length===0?a`<p class="text-sm text-muted-foreground">No schedules configured.</p>`:null}
				</div>
			</div>
		`}renderSettings(){const s=Object.entries(this.settings);return a`
			<div class="space-y-3">
				<h3 class="text-sm font-medium text-foreground">Current Settings</h3>
				${s.length>0?a`
							<div class="p-3 bg-secondary/50 rounded">
								<pre class="text-xs text-foreground whitespace-pre-wrap font-mono">${JSON.stringify(this.settings,null,2)}</pre>
							</div>
						`:a`<p class="text-sm text-muted-foreground">No settings configured.</p>`}
			</div>
		`}render(){return a`
			<div class="p-4">
				<h2 class="text-lg font-semibold text-foreground mb-4">Admin</h2>

				${this.loading?a`<div class="text-sm text-muted-foreground">Loading...</div>`:a`
							${this.renderTabs()}
							${this.activeTab==="models"?this.renderModels():null}
							${this.activeTab==="sandbox"?this.renderSandbox():null}
							${this.activeTab==="autolearn"?this.renderAutoLearn():null}
							${this.activeTab==="settings"?this.renderSettings():null}
						`}
			</div>
		`}};$([c()],v.prototype,"activeTab",2);$([c()],v.prototype,"models",2);$([c()],v.prototype,"sandboxStatus",2);$([c()],v.prototype,"schedules",2);$([c()],v.prototype,"settings",2);$([c()],v.prototype,"loading",2);$([c()],v.prototype,"ratchetTarget",2);$([c()],v.prototype,"ratchetMessage",2);v=$([j("admin-panel")],v);var ge=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,lt=(s,t,e,i)=>{for(var n=i>1?void 0:i?ve(t,e):t,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&ge(t,e,n),n};let J=class extends m{constructor(){super(...arguments),this.activePanel=null,this.panelOpen=!1}createRenderRoot(){return this}updated(s){s.has("activePanel")&&(this.panelOpen=!!this.activePanel)}openPanel(s){this.activePanel=s,this.panelOpen=!0;const t=new URL(window.location.href);t.searchParams.set("panel",s),window.history.replaceState({},"",t.toString())}closePanel(){this.panelOpen=!1,this.activePanel=null;const s=new URL(window.location.href);s.searchParams.delete("panel"),window.history.replaceState({},"",s.toString())}renderPanelContent(){switch(this.activePanel){case"memory":return a`<memory-panel></memory-panel>`;case"admin":return a`<admin-panel></admin-panel>`;default:return null}}render(){return a`
			<div class="flex h-screen overflow-hidden">
				<!-- Main content area -->
				<div class="flex-1 flex flex-col min-w-0 ${this.panelOpen?"border-r border-border":""}">
					<!-- Panel toggle buttons -->
					<div class="flex items-center gap-1 px-2 py-1 border-b border-border shrink-0">
						<button
							class="px-2 py-1 text-xs font-medium rounded transition-colors
								   ${this.activePanel==="memory"?"bg-primary/10 text-primary":"text-muted-foreground hover:text-foreground hover:bg-secondary"}"
							@click=${()=>this.activePanel==="memory"?this.closePanel():this.openPanel("memory")}
						>
							Memory
						</button>
						<button
							class="px-2 py-1 text-xs font-medium rounded transition-colors
								   ${this.activePanel==="admin"?"bg-primary/10 text-primary":"text-muted-foreground hover:text-foreground hover:bg-secondary"}"
							@click=${()=>this.activePanel==="admin"?this.closePanel():this.openPanel("admin")}
						>
							Admin
						</button>
						<div class="flex-1"></div>
						<slot name="header-actions"></slot>
					</div>

					<!-- Slotted main content -->
					<div class="flex-1 min-h-0">
						<slot name="main"></slot>
					</div>
				</div>

				<!-- Panel sidebar -->
				${this.panelOpen?a`
							<div
								class="w-80 shrink-0 flex flex-col bg-background border-l border-border
										overflow-y-auto animate-slide-in"
							>
								<!-- Panel header with close button -->
								<div
									class="flex items-center justify-between px-4 py-2 border-b border-border shrink-0"
								>
									<span class="text-sm font-medium text-foreground capitalize">
										${this.activePanel}
									</span>
									<button
										class="text-muted-foreground hover:text-foreground transition-colors p-1"
										@click=${this.closePanel}
										aria-label="Close panel"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<line x1="18" y1="6" x2="6" y2="18"></line>
											<line x1="6" y1="6" x2="18" y2="18"></line>
										</svg>
									</button>
								</div>

								<!-- Panel content -->
								${this.renderPanelContent()}
							</div>
						`:null}
			</div>

			<style>
				@keyframes slide-in {
					from {
						transform: translateX(100%);
						opacity: 0;
					}
					to {
						transform: translateX(0);
						opacity: 1;
					}
				}
				.animate-slide-in {
					animation: slide-in 0.2s ease-out;
				}

				@media (max-width: 768px) {
					.animate-slide-in {
						position: fixed;
						top: 0;
						right: 0;
						bottom: 0;
						width: 100%;
						max-width: 400px;
						z-index: 50;
					}
				}
			</style>
		`}};lt([X({type:String})],J.prototype,"activePanel",2);lt([c()],J.prototype,"panelOpen",2);J=lt([j("panel-layout")],J);var ye=Object.defineProperty,be=Object.getOwnPropertyDescriptor,Q=(s,t,e,i)=>{for(var n=i>1?void 0:i?be(t,e):t,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&ye(t,e,n),n};let F=class extends m{constructor(){super(...arguments),this.authenticated=!1,this.loading=!0,this.activePanel=null,this.router=new Nt(this,[{path:"/login",render:()=>a`<login-view @login-success=${this._onLoginSuccess}></login-view>`},{path:"/",render:()=>this._renderMain()},{path:"/sessions/:id",render:s=>this._renderMain(s.id)}])}createRenderRoot(){return this}async connectedCallback(){super.connectedCallback(),await this._checkAuth();const s=new URLSearchParams(window.location.search);this.activePanel=s.get("panel")}async _checkAuth(){try{const t=await(await fetch("/api/auth/status")).json();this.authenticated=t.authenticated===!0}catch{this.authenticated=!1}this.loading=!1,!this.authenticated&&!window.location.pathname.startsWith("/login")&&(window.history.pushState({},"","/login"),this.router.goto("/login"))}_onLoginSuccess(){this.authenticated=!0,window.history.pushState({},"","/"),this.router.goto("/")}_renderMain(s){return this.authenticated?a`
			<panel-layout .activePanel=${this.activePanel}>
				<chat-view
					slot="main"
					.sessionId=${s??null}
				></chat-view>
			</panel-layout>
		`:a`<login-view @login-success=${this._onLoginSuccess}></login-view>`}render(){return this.loading?a`
				<div class="w-full h-screen flex items-center justify-center bg-background text-foreground">
					<div class="text-muted-foreground">Loading...</div>
				</div>
			`:a`${this.router.outlet()}`}};Q([c()],F.prototype,"authenticated",2);Q([c()],F.prototype,"loading",2);Q([c()],F.prototype,"activePanel",2);F=Q([j("dg-claw-app")],F);
