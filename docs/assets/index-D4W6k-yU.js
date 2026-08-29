(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function n0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Of={exports:{}},So={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yg;function XS(){if(yg)return So;yg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:u}}return So.Fragment=e,So.jsx=i,So.jsxs=i,So}var xg;function WS(){return xg||(xg=1,Of.exports=XS()),Of.exports}var qt=WS(),zf={exports:{}},ie={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mg;function qS(){if(Mg)return ie;Mg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),y=Symbol.iterator;function M(D){return D===null||typeof D!="object"?null:(D=y&&D[y]||D["@@iterator"],typeof D=="function"?D:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,x={};function v(D,V,G){this.props=D,this.context=V,this.refs=x,this.updater=G||A}v.prototype.isReactComponent={},v.prototype.setState=function(D,V){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,V,"setState")},v.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function L(){}L.prototype=v.prototype;function R(D,V,G){this.props=D,this.context=V,this.refs=x,this.updater=G||A}var O=R.prototype=new L;O.constructor=R,T(O,v.prototype),O.isPureReactComponent=!0;var X=Array.isArray;function I(){}var z={H:null,A:null,T:null,S:null},lt=Object.prototype.hasOwnProperty;function C(D,V,G){var Z=G.ref;return{$$typeof:o,type:D,key:V,ref:Z!==void 0?Z:null,props:G}}function N(D,V){return C(D.type,V,D.props)}function ot(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function ft(D){var V={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(G){return V[G]})}var Et=/\/+/g;function k(D,V){return typeof D=="object"&&D!==null&&D.key!=null?ft(""+D.key):V.toString(36)}function et(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(I,I):(D.status="pending",D.then(function(V){D.status==="pending"&&(D.status="fulfilled",D.value=V)},function(V){D.status==="pending"&&(D.status="rejected",D.reason=V)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function P(D,V,G,Z,pt){var Mt=typeof D;(Mt==="undefined"||Mt==="boolean")&&(D=null);var Tt=!1;if(D===null)Tt=!0;else switch(Mt){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(D.$$typeof){case o:case e:Tt=!0;break;case _:return Tt=D._init,P(Tt(D._payload),V,G,Z,pt)}}if(Tt)return pt=pt(D),Tt=Z===""?"."+k(D,0):Z,X(pt)?(G="",Tt!=null&&(G=Tt.replace(Et,"$&/")+"/"),P(pt,V,G,"",function(_t){return _t})):pt!=null&&(ot(pt)&&(pt=N(pt,G+(pt.key==null||D&&D.key===pt.key?"":(""+pt.key).replace(Et,"$&/")+"/")+Tt)),V.push(pt)),1;Tt=0;var Xt=Z===""?".":Z+":";if(X(D))for(var mt=0;mt<D.length;mt++)Z=D[mt],Mt=Xt+k(Z,mt),Tt+=P(Z,V,G,Mt,pt);else if(mt=M(D),typeof mt=="function")for(D=mt.call(D),mt=0;!(Z=D.next()).done;)Z=Z.value,Mt=Xt+k(Z,mt++),Tt+=P(Z,V,G,Mt,pt);else if(Mt==="object"){if(typeof D.then=="function")return P(et(D),V,G,Z,pt);throw V=String(D),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function q(D,V,G){if(D==null)return D;var Z=[],pt=0;return P(D,Z,"","",function(Mt){return V.call(G,Mt,pt++)}),Z}function Q(D){if(D._status===-1){var V=D._result;V=V(),V.then(function(G){(D._status===0||D._status===-1)&&(D._status=1,D._result=G)},function(G){(D._status===0||D._status===-1)&&(D._status=2,D._result=G)}),D._status===-1&&(D._status=0,D._result=V)}if(D._status===1)return D._result.default;throw D._result}var ct=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},ut={map:q,forEach:function(D,V,G){q(D,function(){V.apply(this,arguments)},G)},count:function(D){var V=0;return q(D,function(){V++}),V},toArray:function(D){return q(D,function(V){return V})||[]},only:function(D){if(!ot(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return ie.Activity=S,ie.Children=ut,ie.Component=v,ie.Fragment=i,ie.Profiler=l,ie.PureComponent=R,ie.StrictMode=s,ie.Suspense=m,ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ie.__COMPILER_RUNTIME={__proto__:null,c:function(D){return z.H.useMemoCache(D)}},ie.cache=function(D){return function(){return D.apply(null,arguments)}},ie.cacheSignal=function(){return null},ie.cloneElement=function(D,V,G){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var Z=T({},D.props),pt=D.key;if(V!=null)for(Mt in V.key!==void 0&&(pt=""+V.key),V)!lt.call(V,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&V.ref===void 0||(Z[Mt]=V[Mt]);var Mt=arguments.length-2;if(Mt===1)Z.children=G;else if(1<Mt){for(var Tt=Array(Mt),Xt=0;Xt<Mt;Xt++)Tt[Xt]=arguments[Xt+2];Z.children=Tt}return C(D.type,pt,Z)},ie.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},ie.createElement=function(D,V,G){var Z,pt={},Mt=null;if(V!=null)for(Z in V.key!==void 0&&(Mt=""+V.key),V)lt.call(V,Z)&&Z!=="key"&&Z!=="__self"&&Z!=="__source"&&(pt[Z]=V[Z]);var Tt=arguments.length-2;if(Tt===1)pt.children=G;else if(1<Tt){for(var Xt=Array(Tt),mt=0;mt<Tt;mt++)Xt[mt]=arguments[mt+2];pt.children=Xt}if(D&&D.defaultProps)for(Z in Tt=D.defaultProps,Tt)pt[Z]===void 0&&(pt[Z]=Tt[Z]);return C(D,Mt,pt)},ie.createRef=function(){return{current:null}},ie.forwardRef=function(D){return{$$typeof:h,render:D}},ie.isValidElement=ot,ie.lazy=function(D){return{$$typeof:_,_payload:{_status:-1,_result:D},_init:Q}},ie.memo=function(D,V){return{$$typeof:p,type:D,compare:V===void 0?null:V}},ie.startTransition=function(D){var V=z.T,G={};z.T=G;try{var Z=D(),pt=z.S;pt!==null&&pt(G,Z),typeof Z=="object"&&Z!==null&&typeof Z.then=="function"&&Z.then(I,ct)}catch(Mt){ct(Mt)}finally{V!==null&&G.types!==null&&(V.types=G.types),z.T=V}},ie.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ie.use=function(D){return z.H.use(D)},ie.useActionState=function(D,V,G){return z.H.useActionState(D,V,G)},ie.useCallback=function(D,V){return z.H.useCallback(D,V)},ie.useContext=function(D){return z.H.useContext(D)},ie.useDebugValue=function(){},ie.useDeferredValue=function(D,V){return z.H.useDeferredValue(D,V)},ie.useEffect=function(D,V){return z.H.useEffect(D,V)},ie.useEffectEvent=function(D){return z.H.useEffectEvent(D)},ie.useId=function(){return z.H.useId()},ie.useImperativeHandle=function(D,V,G){return z.H.useImperativeHandle(D,V,G)},ie.useInsertionEffect=function(D,V){return z.H.useInsertionEffect(D,V)},ie.useLayoutEffect=function(D,V){return z.H.useLayoutEffect(D,V)},ie.useMemo=function(D,V){return z.H.useMemo(D,V)},ie.useOptimistic=function(D,V){return z.H.useOptimistic(D,V)},ie.useReducer=function(D,V,G){return z.H.useReducer(D,V,G)},ie.useRef=function(D){return z.H.useRef(D)},ie.useState=function(D){return z.H.useState(D)},ie.useSyncExternalStore=function(D,V,G){return z.H.useSyncExternalStore(D,V,G)},ie.useTransition=function(){return z.H.useTransition()},ie.version="19.2.8",ie}var Eg;function Uh(){return Eg||(Eg=1,zf.exports=qS()),zf.exports}var fe=Uh();const YS=n0(fe);var Pf={exports:{}},yo={},Bf={exports:{}},If={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tg;function jS(){return Tg||(Tg=1,(function(o){function e(P,q){var Q=P.length;P.push(q);t:for(;0<Q;){var ct=Q-1>>>1,ut=P[ct];if(0<l(ut,q))P[ct]=q,P[Q]=ut,Q=ct;else break t}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var q=P[0],Q=P.pop();if(Q!==q){P[0]=Q;t:for(var ct=0,ut=P.length,D=ut>>>1;ct<D;){var V=2*(ct+1)-1,G=P[V],Z=V+1,pt=P[Z];if(0>l(G,Q))Z<ut&&0>l(pt,G)?(P[ct]=pt,P[Z]=Q,ct=Z):(P[ct]=G,P[V]=Q,ct=V);else if(Z<ut&&0>l(pt,Q))P[ct]=pt,P[Z]=Q,ct=Z;else break t}}return q}function l(P,q){var Q=P.sortIndex-q.sortIndex;return Q!==0?Q:P.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,S=null,y=3,M=!1,A=!1,T=!1,x=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function O(P){for(var q=i(p);q!==null;){if(q.callback===null)s(p);else if(q.startTime<=P)s(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=i(p)}}function X(P){if(T=!1,O(P),!A)if(i(m)!==null)A=!0,I||(I=!0,ft());else{var q=i(p);q!==null&&et(X,q.startTime-P)}}var I=!1,z=-1,lt=5,C=-1;function N(){return x?!0:!(o.unstable_now()-C<lt)}function ot(){if(x=!1,I){var P=o.unstable_now();C=P;var q=!0;try{t:{A=!1,T&&(T=!1,L(z),z=-1),M=!0;var Q=y;try{e:{for(O(P),S=i(m);S!==null&&!(S.expirationTime>P&&N());){var ct=S.callback;if(typeof ct=="function"){S.callback=null,y=S.priorityLevel;var ut=ct(S.expirationTime<=P);if(P=o.unstable_now(),typeof ut=="function"){S.callback=ut,O(P),q=!0;break e}S===i(m)&&s(m),O(P)}else s(m);S=i(m)}if(S!==null)q=!0;else{var D=i(p);D!==null&&et(X,D.startTime-P),q=!1}}break t}finally{S=null,y=Q,M=!1}q=void 0}}finally{q?ft():I=!1}}}var ft;if(typeof R=="function")ft=function(){R(ot)};else if(typeof MessageChannel<"u"){var Et=new MessageChannel,k=Et.port2;Et.port1.onmessage=ot,ft=function(){k.postMessage(null)}}else ft=function(){v(ot,0)};function et(P,q){z=v(function(){P(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):lt=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(P){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var Q=y;y=q;try{return P()}finally{y=Q}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(P,q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Q=y;y=P;try{return q()}finally{y=Q}},o.unstable_scheduleCallback=function(P,q,Q){var ct=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ct+Q:ct):Q=ct,P){case 1:var ut=-1;break;case 2:ut=250;break;case 5:ut=1073741823;break;case 4:ut=1e4;break;default:ut=5e3}return ut=Q+ut,P={id:_++,callback:q,priorityLevel:P,startTime:Q,expirationTime:ut,sortIndex:-1},Q>ct?(P.sortIndex=Q,e(p,P),i(m)===null&&P===i(p)&&(T?(L(z),z=-1):T=!0,et(X,Q-ct))):(P.sortIndex=ut,e(m,P),A||M||(A=!0,I||(I=!0,ft()))),P},o.unstable_shouldYield=N,o.unstable_wrapCallback=function(P){var q=y;return function(){var Q=y;y=q;try{return P.apply(this,arguments)}finally{y=Q}}}})(If)),If}var Ag;function ZS(){return Ag||(Ag=1,Bf.exports=jS()),Bf.exports}var Ff={exports:{}},En={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bg;function KS(){if(bg)return En;bg=1;var o=Uh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,En.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,_)},En.flushSync=function(m){var p=d.T,_=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=_,s.d.f()}},En.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},En.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},En.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,S=h(_,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:y,fetchPriority:M}):_==="script"&&s.d.X(m,{crossOrigin:S,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},En.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},En.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,S=h(_,p.crossOrigin);s.d.L(m,_,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},En.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},En.requestFormReset=function(m){s.d.r(m)},En.unstable_batchedUpdates=function(m,p){return m(p)},En.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},En.useFormStatus=function(){return d.H.useHostTransitionStatus()},En.version="19.2.8",En}var Rg;function QS(){if(Rg)return Ff.exports;Rg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Ff.exports=KS(),Ff.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cg;function JS(){if(Cg)return yo;Cg=1;var o=ZS(),e=Uh(),i=QS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===r)return m(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var g=!1,E=c.child;E;){if(E===a){g=!0,a=c,r=f;break}if(E===r){g=!0,r=c,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,r=c;break}if(E===r){g=!0,r=f,a=c;break}E=E.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),R=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),lt=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),ot=Symbol.iterator;function ft(t){return t===null||typeof t!="object"?null:(t=ot&&t[ot]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Symbol.for("react.client.reference");function k(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Et?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case v:return"Profiler";case x:return"StrictMode";case X:return"Suspense";case I:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case R:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:k(t.type)||"Memo";case lt:n=t._payload,t=t._init;try{return k(t(n))}catch{}}return null}var et=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},ct=[],ut=-1;function D(t){return{current:t}}function V(t){0>ut||(t.current=ct[ut],ct[ut]=null,ut--)}function G(t,n){ut++,ct[ut]=t.current,t.current=n}var Z=D(null),pt=D(null),Mt=D(null),Tt=D(null);function Xt(t,n){switch(G(Mt,n),G(pt,t),G(Z,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?km(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=km(n),t=Xm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}V(Z),G(Z,t)}function mt(){V(Z),V(pt),V(Mt)}function _t(t){t.memoizedState!==null&&G(Tt,t);var n=Z.current,a=Xm(n,t.type);n!==a&&(G(pt,t),G(Z,a))}function Ft(t){pt.current===t&&(V(Z),V(pt)),Tt.current===t&&(V(Tt),mo._currentValue=Q)}var Y,Te;function Lt(t){if(Y===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Y=n&&n[1]||"",Te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Y+t+Te}var Pt=!1;function Nt(t,n){if(!t||Pt)return"";Pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(st){var tt=st}Reflect.construct(t,[],gt)}else{try{gt.call()}catch(st){tt=st}t.call(gt.prototype)}}else{try{throw Error()}catch(st){tt=st}(gt=t())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(st){if(st&&tt&&typeof st.stack=="string")return[st.stack,tt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var B=g.split(`
`),J=E.split(`
`);for(c=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(r===B.length||c===J.length)for(r=B.length-1,c=J.length-1;1<=r&&0<=c&&B[r]!==J[c];)c--;for(;1<=r&&0<=c;r--,c--)if(B[r]!==J[c]){if(r!==1||c!==1)do if(r--,c--,0>c||B[r]!==J[c]){var ht=`
`+B[r].replace(" at new "," at ");return t.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",t.displayName)),ht}while(1<=r&&0<=c);break}}}finally{Pt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Lt(a):""}function he(t,n){switch(t.tag){case 26:case 27:case 5:return Lt(t.type);case 16:return Lt("Lazy");case 13:return t.child!==n&&n!==null?Lt("Suspense Fallback"):Lt("Suspense");case 19:return Lt("SuspenseList");case 0:case 15:return Nt(t.type,!1);case 11:return Nt(t.type.render,!1);case 1:return Nt(t.type,!0);case 31:return Lt("Activity");default:return""}}function Jt(t){try{var n="",a=null;do n+=he(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var U=Object.prototype.hasOwnProperty,b=o.unstable_scheduleCallback,$=o.unstable_cancelCallback,St=o.unstable_shouldYield,xt=o.unstable_requestPaint,vt=o.unstable_now,Gt=o.unstable_getCurrentPriorityLevel,wt=o.unstable_ImmediatePriority,It=o.unstable_UserBlockingPriority,Yt=o.unstable_NormalPriority,ae=o.unstable_LowPriority,yt=o.unstable_IdlePriority,xe=o.log,re=o.unstable_setDisableYieldValue,zt=null,bt=null;function Dt(t){if(typeof xe=="function"&&re(t),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(zt,t)}catch{}}var Bt=Math.clz32?Math.clz32:se,pe=Math.log,ye=Math.LN2;function se(t){return t>>>=0,t===0?32:31-(pe(t)/ye|0)|0}var At=256,F=262144,Ut=4194304;function Rt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function $t(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~f,r!==0?c=Rt(r):(g&=E,g!==0?c=Rt(g):a||(a=E&~t,a!==0&&(c=Rt(a))))):(E=r&~f,E!==0?c=Rt(E):g!==0?c=Rt(g):a||(a=r&~t,a!==0&&(c=Rt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function jt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Le(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Re(){var t=Ut;return Ut<<=1,(Ut&62914560)===0&&(Ut=4194304),t}function We(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function je(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ne(t,n,a,r,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,B=t.expirationTimes,J=t.hiddenUpdates;for(a=g&~a;0<a;){var ht=31-Bt(a),gt=1<<ht;E[ht]=0,B[ht]=-1;var tt=J[ht];if(tt!==null)for(J[ht]=null,ht=0;ht<tt.length;ht++){var st=tt[ht];st!==null&&(st.lane&=-536870913)}a&=~gt}r!==0&&un(t,r,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function un(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Bt(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Gn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Bt(a),c=1<<r;c&n|t[r]&n&&(t[r]|=n),a&=~c}}function Ts(t,n){var a=n&-n;return a=(a&42)!==0?1:As(a),(a&(t.suspendedLanes|n))!==0?0:a}function As(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ia(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bs(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:dg(t.type))}function Va(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var hi=Math.random().toString(36).slice(2),Qe="__reactFiber$"+hi,xn="__reactProps$"+hi,aa="__reactContainer$"+hi,Rs="__reactEvents$"+hi,w="__reactListeners$"+hi,j="__reactHandles$"+hi,at="__reactResources$"+hi,rt="__reactMarker$"+hi;function it(t){delete t[Qe],delete t[xn],delete t[Rs],delete t[w],delete t[j]}function Ot(t){var n=t[Qe];if(n)return n;for(var a=t.parentNode;a;){if(n=a[aa]||a[Qe]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Qm(t);t!==null;){if(a=t[Qe])return a;t=Qm(t)}return n}t=a,a=t.parentNode}return null}function Vt(t){if(t=t[Qe]||t[aa]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Kt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Qt(t){var n=t[at];return n||(n=t[at]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Wt(t){t[rt]=!0}var ee=new Set,ne={};function Ce(t,n){Je(t,n),Je(t+"Capture",n)}function Je(t,n){for(ne[t]=n,t=0;t<n.length;t++)ee.add(n[t])}var $e=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$n={},He={};function ce(t){return U.call(He,t)?!0:U.call($n,t)?!1:$e.test(t)?He[t]=!0:($n[t]=!0,!1)}function ra(t,n,a){if(ce(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ie(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function pn(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function bn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function sa(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Cs(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function tn(t){if(!t._valueTracker){var n=sa(t)?"checked":"value";t._valueTracker=Cs(t,n,""+t[n])}}function Ai(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=sa(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function oa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Un=/[\n"\\]/g;function Mn(t){return t.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ws(t,n,a,r,c,f,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+bn(n)):t.value!==""+bn(n)&&(t.value=""+bn(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?Cc(t,g,bn(n)):a!=null?Cc(t,g,bn(a)):r!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+bn(E):t.removeAttribute("name")}function Us(t,n,a,r,c,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){tn(t);return}a=a!=null?""+bn(a):"",n=n!=null?""+bn(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),tn(t)}function Cc(t,n,a){n==="number"&&oa(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Sr(t,n,a,r){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&r&&(t[a].defaultSelected=!0)}else{for(a=""+bn(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,r&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Ih(t,n,a){if(n!=null&&(n=""+bn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+bn(a):""}function Fh(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(et(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=bn(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),tn(t)}function yr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var F0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Hh(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||F0.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Gh(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&Hh(t,c,r)}else for(var f in n)n.hasOwnProperty(f)&&Hh(t,f,n[f])}function wc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),G0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function zo(t){return G0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Di(){}var Uc=null;function Dc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xr=null,Mr=null;function Vh(t){var n=Vt(t);if(n&&(t=n.stateNode)){var a=t[xn]||null;t:switch(t=n.stateNode,n.type){case"input":if(ws(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var c=r[xn]||null;if(!c)throw Error(s(90));ws(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Ai(r)}break t;case"textarea":Ih(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Sr(t,!!a.multiple,n,!1)}}}var Lc=!1;function kh(t,n,a){if(Lc)return t(n,a);Lc=!0;try{var r=t(n);return r}finally{if(Lc=!1,(xr!==null||Mr!==null)&&(Ml(),xr&&(n=xr,t=Mr,Mr=xr=null,Vh(n),t)))for(n=0;n<t.length;n++)Vh(t[n])}}function Ds(t,n){var a=t.stateNode;if(a===null)return null;var r=a[xn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Li=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nc=!1;if(Li)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){Nc=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{Nc=!1}var la=null,Oc=null,Po=null;function Xh(){if(Po)return Po;var t,n=Oc,a=n.length,r,c="value"in la?la.value:la.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===c[f-r];r++);return Po=c.slice(t,1<r?1-r:void 0)}function Bo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Io(){return!0}function Wh(){return!1}function Dn(t){function n(a,r,c,f,g){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Io:Wh,this.isPropagationStopped=Wh,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),n}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=Dn(ka),Ns=S({},ka,{view:0,detail:0}),V0=Dn(Ns),zc,Pc,Os,Ho=S({},Ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ic,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Os&&(Os&&t.type==="mousemove"?(zc=t.screenX-Os.screenX,Pc=t.screenY-Os.screenY):Pc=zc=0,Os=t),zc)},movementY:function(t){return"movementY"in t?t.movementY:Pc}}),qh=Dn(Ho),k0=S({},Ho,{dataTransfer:0}),X0=Dn(k0),W0=S({},Ns,{relatedTarget:0}),Bc=Dn(W0),q0=S({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),Y0=Dn(q0),j0=S({},ka,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Z0=Dn(j0),K0=S({},ka,{data:0}),Yh=Dn(K0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},J0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=$0[t])?!!n[t]:!1}function Ic(){return tv}var ev=S({},Ns,{key:function(t){if(t.key){var n=Q0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?J0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ic,charCode:function(t){return t.type==="keypress"?Bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nv=Dn(ev),iv=S({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jh=Dn(iv),av=S({},Ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ic}),rv=Dn(av),sv=S({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),ov=Dn(sv),lv=S({},Ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),cv=Dn(lv),uv=S({},ka,{newState:0,oldState:0}),fv=Dn(uv),hv=[9,13,27,32],Fc=Li&&"CompositionEvent"in window,zs=null;Li&&"documentMode"in document&&(zs=document.documentMode);var dv=Li&&"TextEvent"in window&&!zs,Zh=Li&&(!Fc||zs&&8<zs&&11>=zs),Kh=" ",Qh=!1;function Jh(t,n){switch(t){case"keyup":return hv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $h(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Er=!1;function pv(t,n){switch(t){case"compositionend":return $h(n);case"keypress":return n.which!==32?null:(Qh=!0,Kh);case"textInput":return t=n.data,t===Kh&&Qh?null:t;default:return null}}function mv(t,n){if(Er)return t==="compositionend"||!Fc&&Jh(t,n)?(t=Xh(),Po=Oc=la=null,Er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Zh&&n.locale!=="ko"?null:n.data;default:return null}}var gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function td(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!gv[t.type]:n==="textarea"}function ed(t,n,a,r){xr?Mr?Mr.push(r):Mr=[r]:xr=r,n=wl(n,"onChange"),0<n.length&&(a=new Fo("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Ps=null,Bs=null;function _v(t){Bm(t,0)}function Go(t){var n=Kt(t);if(Ai(n))return t}function nd(t,n){if(t==="change")return n}var id=!1;if(Li){var Hc;if(Li){var Gc="oninput"in document;if(!Gc){var ad=document.createElement("div");ad.setAttribute("oninput","return;"),Gc=typeof ad.oninput=="function"}Hc=Gc}else Hc=!1;id=Hc&&(!document.documentMode||9<document.documentMode)}function rd(){Ps&&(Ps.detachEvent("onpropertychange",sd),Bs=Ps=null)}function sd(t){if(t.propertyName==="value"&&Go(Bs)){var n=[];ed(n,Bs,t,Dc(t)),kh(_v,n)}}function vv(t,n,a){t==="focusin"?(rd(),Ps=n,Bs=a,Ps.attachEvent("onpropertychange",sd)):t==="focusout"&&rd()}function Sv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Go(Bs)}function yv(t,n){if(t==="click")return Go(n)}function xv(t,n){if(t==="input"||t==="change")return Go(n)}function Mv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Vn=typeof Object.is=="function"?Object.is:Mv;function Is(t,n){if(Vn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!U.call(n,c)||!Vn(t[c],n[c]))return!1}return!0}function od(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ld(t,n){var a=od(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=od(a)}}function cd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?cd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function ud(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=oa(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=oa(t.document)}return n}function Vc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ev=Li&&"documentMode"in document&&11>=document.documentMode,Tr=null,kc=null,Fs=null,Xc=!1;function fd(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xc||Tr==null||Tr!==oa(r)||(r=Tr,"selectionStart"in r&&Vc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Fs&&Is(Fs,r)||(Fs=r,r=wl(kc,"onSelect"),0<r.length&&(n=new Fo("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Tr)))}function Xa(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ar={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},Wc={},hd={};Li&&(hd=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Wa(t){if(Wc[t])return Wc[t];if(!Ar[t])return t;var n=Ar[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in hd)return Wc[t]=n[a];return t}var dd=Wa("animationend"),pd=Wa("animationiteration"),md=Wa("animationstart"),Tv=Wa("transitionrun"),Av=Wa("transitionstart"),bv=Wa("transitioncancel"),gd=Wa("transitionend"),_d=new Map,qc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qc.push("scrollEnd");function di(t,n){_d.set(t,n),Ce(n,[t])}var Vo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ti=[],br=0,Yc=0;function ko(){for(var t=br,n=Yc=br=0;n<t;){var a=ti[n];ti[n++]=null;var r=ti[n];ti[n++]=null;var c=ti[n];ti[n++]=null;var f=ti[n];if(ti[n++]=null,r!==null&&c!==null){var g=r.pending;g===null?c.next=c:(c.next=g.next,g.next=c),r.pending=c}f!==0&&vd(a,c,f)}}function Xo(t,n,a,r){ti[br++]=t,ti[br++]=n,ti[br++]=a,ti[br++]=r,Yc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function jc(t,n,a,r){return Xo(t,n,a,r),Wo(t)}function qa(t,n){return Xo(t,null,null,n),Wo(t)}function vd(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Bt(a),t=f.hiddenUpdates,r=t[c],r===null?t[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function Wo(t){if(50<oo)throw oo=0,af=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Rr={};function Rv(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(t,n,a,r){return new Rv(t,n,a,r)}function Zc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ni(t,n){var a=t.alternate;return a===null?(a=kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Sd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function qo(t,n,a,r,c,f){var g=0;if(r=t,typeof t=="function")Zc(t)&&(g=1);else if(typeof t=="string")g=LS(t,a,Z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case C:return t=kn(31,a,n,c),t.elementType=C,t.lanes=f,t;case T:return Ya(a.children,c,f,n);case x:g=8,c|=24;break;case v:return t=kn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case X:return t=kn(13,a,n,c),t.elementType=X,t.lanes=f,t;case I:return t=kn(19,a,n,c),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R:g=10;break t;case L:g=9;break t;case O:g=11;break t;case z:g=14;break t;case lt:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=kn(g,a,n,c),n.elementType=t,n.type=r,n.lanes=f,n}function Ya(t,n,a,r){return t=kn(7,t,r,n),t.lanes=a,t}function Kc(t,n,a){return t=kn(6,t,null,n),t.lanes=a,t}function yd(t){var n=kn(18,null,null,0);return n.stateNode=t,n}function Qc(t,n,a){return n=kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var xd=new WeakMap;function ei(t,n){if(typeof t=="object"&&t!==null){var a=xd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Jt(n)},xd.set(t,n),n)}return{value:t,source:n,stack:Jt(n)}}var Cr=[],wr=0,Yo=null,Hs=0,ni=[],ii=0,ca=null,bi=1,Ri="";function Oi(t,n){Cr[wr++]=Hs,Cr[wr++]=Yo,Yo=t,Hs=n}function Md(t,n,a){ni[ii++]=bi,ni[ii++]=Ri,ni[ii++]=ca,ca=t;var r=bi;t=Ri;var c=32-Bt(r)-1;r&=~(1<<c),a+=1;var f=32-Bt(n)+c;if(30<f){var g=c-c%5;f=(r&(1<<g)-1).toString(32),r>>=g,c-=g,bi=1<<32-Bt(n)+c|a<<c|r,Ri=f+t}else bi=1<<f|a<<c|r,Ri=t}function Jc(t){t.return!==null&&(Oi(t,1),Md(t,1,0))}function $c(t){for(;t===Yo;)Yo=Cr[--wr],Cr[wr]=null,Hs=Cr[--wr],Cr[wr]=null;for(;t===ca;)ca=ni[--ii],ni[ii]=null,Ri=ni[--ii],ni[ii]=null,bi=ni[--ii],ni[ii]=null}function Ed(t,n){ni[ii++]=bi,ni[ii++]=Ri,ni[ii++]=ca,bi=n.id,Ri=n.overflow,ca=t}var mn=null,Ge=null,Se=!1,ua=null,ai=!1,tu=Error(s(519));function fa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gs(ei(n,t)),tu}function Td(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Qe]=t,n[xn]=r,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<co.length;a++)ge(co[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Us(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Fh(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Gm(n.textContent,a)?(r.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),r.onScroll!=null&&ge("scroll",n),r.onScrollEnd!=null&&ge("scrollend",n),r.onClick!=null&&(n.onclick=Di),n=!0):n=!1,n||fa(t,!0)}function Ad(t){for(mn=t.return;mn;)switch(mn.tag){case 5:case 31:case 13:ai=!1;return;case 27:case 3:ai=!0;return;default:mn=mn.return}}function Ur(t){if(t!==mn)return!1;if(!Se)return Ad(t),Se=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Sf(t.type,t.memoizedProps)),a=!a),a&&Ge&&fa(t),Ad(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ge=Km(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ge=Km(t)}else n===27?(n=Ge,Aa(t.type)?(t=Tf,Tf=null,Ge=t):Ge=n):Ge=mn?si(t.stateNode.nextSibling):null;return!0}function ja(){Ge=mn=null,Se=!1}function eu(){var t=ua;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),ua=null),t}function Gs(t){ua===null?ua=[t]:ua.push(t)}var nu=D(null),Za=null,zi=null;function ha(t,n,a){G(nu,n._currentValue),n._currentValue=a}function Pi(t){t._currentValue=nu.current,V(nu)}function iu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function au(t,n,a,r){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var B=0;B<n.length;B++)if(E.context===n[B]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),iu(f.return,a,t),r||(g=null);break t}f=E.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),iu(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Dr(t,n,a,r){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var E=c.type;Vn(c.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(c===Tt.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(mo):t=[mo])}c=c.return}t!==null&&au(n,t,a,r),n.flags|=262144}function jo(t){for(t=t.firstContext;t!==null;){if(!Vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ka(t){Za=t,zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function gn(t){return bd(Za,t)}function Zo(t,n){return Za===null&&Ka(t),bd(t,n)}function bd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},zi===null){if(t===null)throw Error(s(308));zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else zi=zi.next=n;return a}var Cv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},wv=o.unstable_scheduleCallback,Uv=o.unstable_NormalPriority,en={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ru(){return{controller:new Cv,data:new Map,refCount:0}}function Vs(t){t.refCount--,t.refCount===0&&wv(Uv,function(){t.controller.abort()})}var ks=null,su=0,Lr=0,Nr=null;function Dv(t,n){if(ks===null){var a=ks=[];su=0,Lr=uf(),Nr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return su++,n.then(Rd,Rd),n}function Rd(){if(--su===0&&ks!==null){Nr!==null&&(Nr.status="fulfilled");var t=ks;ks=null,Lr=0,Nr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Lv(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Cd=P.S;P.S=function(t,n){fm=vt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Dv(t,n),Cd!==null&&Cd(t,n)};var Qa=D(null);function ou(){var t=Qa.current;return t!==null?t:Fe.pooledCache}function Ko(t,n){n===null?G(Qa,Qa.current):G(Qa,n.pool)}function wd(){var t=ou();return t===null?null:{parent:en._currentValue,pool:t}}var Or=Error(s(460)),lu=Error(s(474)),Qo=Error(s(542)),Jo={then:function(){}};function Ud(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Dd(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Di,Di),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Nd(t),t;default:if(typeof n.status=="string")n.then(Di,Di);else{if(t=Fe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Nd(t),t}throw $a=n,Or}}function Ja(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($a=a,Or):a}}var $a=null;function Ld(){if($a===null)throw Error(s(459));var t=$a;return $a=null,t}function Nd(t){if(t===Or||t===Qo)throw Error(s(483))}var zr=null,Xs=0;function $o(t){var n=Xs;return Xs+=1,zr===null&&(zr=[]),Dd(zr,t,n)}function Ws(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function tl(t,n){throw n.$$typeof===y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Od(t){function n(W,H){if(t){var K=W.deletions;K===null?(W.deletions=[H],W.flags|=16):K.push(H)}}function a(W,H){if(!t)return null;for(;H!==null;)n(W,H),H=H.sibling;return null}function r(W){for(var H=new Map;W!==null;)W.key!==null?H.set(W.key,W):H.set(W.index,W),W=W.sibling;return H}function c(W,H){return W=Ni(W,H),W.index=0,W.sibling=null,W}function f(W,H,K){return W.index=K,t?(K=W.alternate,K!==null?(K=K.index,K<H?(W.flags|=67108866,H):K):(W.flags|=67108866,H)):(W.flags|=1048576,H)}function g(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function E(W,H,K,dt){return H===null||H.tag!==6?(H=Kc(K,W.mode,dt),H.return=W,H):(H=c(H,K),H.return=W,H)}function B(W,H,K,dt){var Zt=K.type;return Zt===T?ht(W,H,K.props.children,dt,K.key):H!==null&&(H.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===lt&&Ja(Zt)===H.type)?(H=c(H,K.props),Ws(H,K),H.return=W,H):(H=qo(K.type,K.key,K.props,null,W.mode,dt),Ws(H,K),H.return=W,H)}function J(W,H,K,dt){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=Qc(K,W.mode,dt),H.return=W,H):(H=c(H,K.children||[]),H.return=W,H)}function ht(W,H,K,dt,Zt){return H===null||H.tag!==7?(H=Ya(K,W.mode,dt,Zt),H.return=W,H):(H=c(H,K),H.return=W,H)}function gt(W,H,K){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Kc(""+H,W.mode,K),H.return=W,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return K=qo(H.type,H.key,H.props,null,W.mode,K),Ws(K,H),K.return=W,K;case A:return H=Qc(H,W.mode,K),H.return=W,H;case lt:return H=Ja(H),gt(W,H,K)}if(et(H)||ft(H))return H=Ya(H,W.mode,K,null),H.return=W,H;if(typeof H.then=="function")return gt(W,$o(H),K);if(H.$$typeof===R)return gt(W,Zo(W,H),K);tl(W,H)}return null}function tt(W,H,K,dt){var Zt=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Zt!==null?null:E(W,H,""+K,dt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case M:return K.key===Zt?B(W,H,K,dt):null;case A:return K.key===Zt?J(W,H,K,dt):null;case lt:return K=Ja(K),tt(W,H,K,dt)}if(et(K)||ft(K))return Zt!==null?null:ht(W,H,K,dt,null);if(typeof K.then=="function")return tt(W,H,$o(K),dt);if(K.$$typeof===R)return tt(W,H,Zo(W,K),dt);tl(W,K)}return null}function st(W,H,K,dt,Zt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return W=W.get(K)||null,E(H,W,""+dt,Zt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case M:return W=W.get(dt.key===null?K:dt.key)||null,B(H,W,dt,Zt);case A:return W=W.get(dt.key===null?K:dt.key)||null,J(H,W,dt,Zt);case lt:return dt=Ja(dt),st(W,H,K,dt,Zt)}if(et(dt)||ft(dt))return W=W.get(K)||null,ht(H,W,dt,Zt,null);if(typeof dt.then=="function")return st(W,H,K,$o(dt),Zt);if(dt.$$typeof===R)return st(W,H,K,Zo(H,dt),Zt);tl(H,dt)}return null}function Ht(W,H,K,dt){for(var Zt=null,Me=null,kt=H,le=H=0,ve=null;kt!==null&&le<K.length;le++){kt.index>le?(ve=kt,kt=null):ve=kt.sibling;var Ee=tt(W,kt,K[le],dt);if(Ee===null){kt===null&&(kt=ve);break}t&&kt&&Ee.alternate===null&&n(W,kt),H=f(Ee,H,le),Me===null?Zt=Ee:Me.sibling=Ee,Me=Ee,kt=ve}if(le===K.length)return a(W,kt),Se&&Oi(W,le),Zt;if(kt===null){for(;le<K.length;le++)kt=gt(W,K[le],dt),kt!==null&&(H=f(kt,H,le),Me===null?Zt=kt:Me.sibling=kt,Me=kt);return Se&&Oi(W,le),Zt}for(kt=r(kt);le<K.length;le++)ve=st(kt,W,le,K[le],dt),ve!==null&&(t&&ve.alternate!==null&&kt.delete(ve.key===null?le:ve.key),H=f(ve,H,le),Me===null?Zt=ve:Me.sibling=ve,Me=ve);return t&&kt.forEach(function(Ua){return n(W,Ua)}),Se&&Oi(W,le),Zt}function te(W,H,K,dt){if(K==null)throw Error(s(151));for(var Zt=null,Me=null,kt=H,le=H=0,ve=null,Ee=K.next();kt!==null&&!Ee.done;le++,Ee=K.next()){kt.index>le?(ve=kt,kt=null):ve=kt.sibling;var Ua=tt(W,kt,Ee.value,dt);if(Ua===null){kt===null&&(kt=ve);break}t&&kt&&Ua.alternate===null&&n(W,kt),H=f(Ua,H,le),Me===null?Zt=Ua:Me.sibling=Ua,Me=Ua,kt=ve}if(Ee.done)return a(W,kt),Se&&Oi(W,le),Zt;if(kt===null){for(;!Ee.done;le++,Ee=K.next())Ee=gt(W,Ee.value,dt),Ee!==null&&(H=f(Ee,H,le),Me===null?Zt=Ee:Me.sibling=Ee,Me=Ee);return Se&&Oi(W,le),Zt}for(kt=r(kt);!Ee.done;le++,Ee=K.next())Ee=st(kt,W,le,Ee.value,dt),Ee!==null&&(t&&Ee.alternate!==null&&kt.delete(Ee.key===null?le:Ee.key),H=f(Ee,H,le),Me===null?Zt=Ee:Me.sibling=Ee,Me=Ee);return t&&kt.forEach(function(kS){return n(W,kS)}),Se&&Oi(W,le),Zt}function Pe(W,H,K,dt){if(typeof K=="object"&&K!==null&&K.type===T&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case M:t:{for(var Zt=K.key;H!==null;){if(H.key===Zt){if(Zt=K.type,Zt===T){if(H.tag===7){a(W,H.sibling),dt=c(H,K.props.children),dt.return=W,W=dt;break t}}else if(H.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===lt&&Ja(Zt)===H.type){a(W,H.sibling),dt=c(H,K.props),Ws(dt,K),dt.return=W,W=dt;break t}a(W,H);break}else n(W,H);H=H.sibling}K.type===T?(dt=Ya(K.props.children,W.mode,dt,K.key),dt.return=W,W=dt):(dt=qo(K.type,K.key,K.props,null,W.mode,dt),Ws(dt,K),dt.return=W,W=dt)}return g(W);case A:t:{for(Zt=K.key;H!==null;){if(H.key===Zt)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){a(W,H.sibling),dt=c(H,K.children||[]),dt.return=W,W=dt;break t}else{a(W,H);break}else n(W,H);H=H.sibling}dt=Qc(K,W.mode,dt),dt.return=W,W=dt}return g(W);case lt:return K=Ja(K),Pe(W,H,K,dt)}if(et(K))return Ht(W,H,K,dt);if(ft(K)){if(Zt=ft(K),typeof Zt!="function")throw Error(s(150));return K=Zt.call(K),te(W,H,K,dt)}if(typeof K.then=="function")return Pe(W,H,$o(K),dt);if(K.$$typeof===R)return Pe(W,H,Zo(W,K),dt);tl(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,H!==null&&H.tag===6?(a(W,H.sibling),dt=c(H,K),dt.return=W,W=dt):(a(W,H),dt=Kc(K,W.mode,dt),dt.return=W,W=dt),g(W)):a(W,H)}return function(W,H,K,dt){try{Xs=0;var Zt=Pe(W,H,K,dt);return zr=null,Zt}catch(kt){if(kt===Or||kt===Qo)throw kt;var Me=kn(29,kt,null,W.mode);return Me.lanes=dt,Me.return=W,Me}finally{}}}var tr=Od(!0),zd=Od(!1),da=!1;function cu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ma(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ae&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=Wo(t),vd(t,null,a),n}return Xo(t,r,n,a),Wo(t)}function qs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Gn(t,a)}}function fu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var hu=!1;function Ys(){if(hu){var t=Nr;if(t!==null)throw t}}function js(t,n,a,r){hu=!1;var c=t.updateQueue;da=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var B=E,J=B.next;B.next=null,g===null?f=J:g.next=J,g=B;var ht=t.alternate;ht!==null&&(ht=ht.updateQueue,E=ht.lastBaseUpdate,E!==g&&(E===null?ht.firstBaseUpdate=J:E.next=J,ht.lastBaseUpdate=B))}if(f!==null){var gt=c.baseState;g=0,ht=J=B=null,E=f;do{var tt=E.lane&-536870913,st=tt!==E.lane;if(st?(_e&tt)===tt:(r&tt)===tt){tt!==0&&tt===Lr&&(hu=!0),ht!==null&&(ht=ht.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ht=t,te=E;tt=n;var Pe=a;switch(te.tag){case 1:if(Ht=te.payload,typeof Ht=="function"){gt=Ht.call(Pe,gt,tt);break t}gt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=te.payload,tt=typeof Ht=="function"?Ht.call(Pe,gt,tt):Ht,tt==null)break t;gt=S({},gt,tt);break t;case 2:da=!0}}tt=E.callback,tt!==null&&(t.flags|=64,st&&(t.flags|=8192),st=c.callbacks,st===null?c.callbacks=[tt]:st.push(tt))}else st={lane:tt,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ht===null?(J=ht=st,B=gt):ht=ht.next=st,g|=tt;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;st=E,E=st.next,st.next=null,c.lastBaseUpdate=st,c.shared.pending=null}}while(!0);ht===null&&(B=gt),c.baseState=B,c.firstBaseUpdate=J,c.lastBaseUpdate=ht,f===null&&(c.shared.lanes=0),ya|=g,t.lanes=g,t.memoizedState=gt}}function Pd(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Bd(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Pd(a[t],n)}var Pr=D(null),el=D(0);function Id(t,n){t=Wi,G(el,t),G(Pr,n),Wi=t|n.baseLanes}function du(){G(el,Wi),G(Pr,Pr.current)}function pu(){Wi=el.current,V(Pr),V(el)}var Xn=D(null),ri=null;function ga(t){var n=t.alternate;G(Ze,Ze.current&1),G(Xn,t),ri===null&&(n===null||Pr.current!==null||n.memoizedState!==null)&&(ri=t)}function mu(t){G(Ze,Ze.current),G(Xn,t),ri===null&&(ri=t)}function Fd(t){t.tag===22?(G(Ze,Ze.current),G(Xn,t),ri===null&&(ri=t)):_a()}function _a(){G(Ze,Ze.current),G(Xn,Xn.current)}function Wn(t){V(Xn),ri===t&&(ri=null),V(Ze)}var Ze=D(0);function nl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Mf(a)||Ef(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Bi=0,oe=null,Oe=null,nn=null,il=!1,Br=!1,er=!1,al=0,Zs=0,Ir=null,Nv=0;function qe(){throw Error(s(321))}function gu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Vn(t[a],n[a]))return!1;return!0}function _u(t,n,a,r,c,f){return Bi=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Mp:Lu,er=!1,f=a(r,c),er=!1,Br&&(f=Gd(n,a,r,c)),Hd(t),f}function Hd(t){P.H=Js;var n=Oe!==null&&Oe.next!==null;if(Bi=0,nn=Oe=oe=null,il=!1,Zs=0,Ir=null,n)throw Error(s(300));t===null||an||(t=t.dependencies,t!==null&&jo(t)&&(an=!0))}function Gd(t,n,a,r){oe=t;var c=0;do{if(Br&&(Ir=null),Zs=0,Br=!1,25<=c)throw Error(s(301));if(c+=1,nn=Oe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Ep,f=n(a,r)}while(Br);return f}function Ov(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?Ks(n):n,t=t.useState()[0],(Oe!==null?Oe.memoizedState:null)!==t&&(oe.flags|=1024),n}function vu(){var t=al!==0;return al=0,t}function Su(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function yu(t){if(il){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}il=!1}Bi=0,nn=Oe=oe=null,Br=!1,Zs=al=0,Ir=null}function Rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?oe.memoizedState=nn=t:nn=nn.next=t,nn}function Ke(){if(Oe===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var n=nn===null?oe.memoizedState:nn.next;if(n!==null)nn=n,Oe=t;else{if(t===null)throw oe.alternate===null?Error(s(467)):Error(s(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},nn===null?oe.memoizedState=nn=t:nn=nn.next=t}return nn}function rl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ks(t){var n=Zs;return Zs+=1,Ir===null&&(Ir=[]),t=Dd(Ir,t,n),n=oe,(nn===null?n.memoizedState:nn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Mp:Lu),t}function sl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ks(t);if(t.$$typeof===R)return gn(t)}throw Error(s(438,String(t)))}function xu(t){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=oe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=rl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=N;return n.index++,a}function Ii(t,n){return typeof n=="function"?n(t):n}function ol(t){var n=Ke();return Mu(n,Oe,t)}function Mu(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=t.baseQueue,f=r.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,r.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=g=null,B=null,J=n,ht=!1;do{var gt=J.lane&-536870913;if(gt!==J.lane?(_e&gt)===gt:(Bi&gt)===gt){var tt=J.revertLane;if(tt===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),gt===Lr&&(ht=!0);else if((Bi&tt)===tt){J=J.next,tt===Lr&&(ht=!0);continue}else gt={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(E=B=gt,g=f):B=B.next=gt,oe.lanes|=tt,ya|=tt;gt=J.action,er&&a(f,gt),f=J.hasEagerState?J.eagerState:a(f,gt)}else tt={lane:gt,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(E=B=tt,g=f):B=B.next=tt,oe.lanes|=gt,ya|=gt;J=J.next}while(J!==null&&J!==n);if(B===null?g=f:B.next=E,!Vn(f,t.memoizedState)&&(an=!0,ht&&(a=Nr,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=B,r.lastRenderedState=f}return c===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Eu(t){var n=Ke(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Vn(f,n.memoizedState)||(an=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Vd(t,n,a){var r=oe,c=Ke(),f=Se;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!Vn((Oe||c).memoizedState,a);if(g&&(c.memoizedState=a,an=!0),c=c.queue,bu(Wd.bind(null,r,c,t),[t]),c.getSnapshot!==n||g||nn!==null&&nn.memoizedState.tag&1){if(r.flags|=2048,Fr(9,{destroy:void 0},Xd.bind(null,r,c,a,n),null),Fe===null)throw Error(s(349));f||(Bi&127)!==0||kd(r,n,a)}return a}function kd(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=rl(),oe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Xd(t,n,a,r){n.value=a,n.getSnapshot=r,qd(n)&&Yd(t)}function Wd(t,n,a){return a(function(){qd(n)&&Yd(t)})}function qd(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Vn(t,a)}catch{return!0}}function Yd(t){var n=qa(t,2);n!==null&&Pn(n,t,2)}function Tu(t){var n=Rn();if(typeof t=="function"){var a=t;if(t=a(),er){Dt(!0);try{a()}finally{Dt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:t},n}function jd(t,n,a,r){return t.baseState=a,Mu(t,Oe,typeof r=="function"?r:Ii)}function zv(t,n,a,r,c){if(ul(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};P.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Zd(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Zd(t,n){var a=n.action,r=n.payload,c=t.state;if(n.isTransition){var f=P.T,g={};P.T=g;try{var E=a(c,r),B=P.S;B!==null&&B(g,E),Kd(t,n,E)}catch(J){Au(t,n,J)}finally{f!==null&&g.types!==null&&(f.types=g.types),P.T=f}}else try{f=a(c,r),Kd(t,n,f)}catch(J){Au(t,n,J)}}function Kd(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Qd(t,n,r)},function(r){return Au(t,n,r)}):Qd(t,n,a)}function Qd(t,n,a){n.status="fulfilled",n.value=a,Jd(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Zd(t,a)))}function Au(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Jd(n),n=n.next;while(n!==r)}t.action=null}function Jd(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function $d(t,n){return n}function tp(t,n){if(Se){var a=Fe.formState;if(a!==null){t:{var r=oe;if(Se){if(Ge){e:{for(var c=Ge,f=ai;c.nodeType!==8;){if(!f){c=null;break e}if(c=si(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ge=si(c.nextSibling),r=c.data==="F!";break t}}fa(r)}r=!1}r&&(n=a[0])}}return a=Rn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$d,lastRenderedState:n},a.queue=r,a=Sp.bind(null,oe,r),r.dispatch=a,r=Tu(!1),f=Du.bind(null,oe,!1,r.queue),r=Rn(),c={state:n,dispatch:null,action:t,pending:null},r.queue=c,a=zv.bind(null,oe,c,f,a),c.dispatch=a,r.memoizedState=t,[n,a,!1]}function ep(t){var n=Ke();return np(n,Oe,t)}function np(t,n,a){if(n=Mu(t,n,$d)[0],t=ol(Ii)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Ks(n)}catch(g){throw g===Or?Qo:g}else r=n;n=Ke();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,Fr(9,{destroy:void 0},Pv.bind(null,c,a),null)),[r,f,t]}function Pv(t,n){t.action=n}function ip(t){var n=Ke(),a=Oe;if(a!==null)return np(n,a,t);Ke(),n=n.memoizedState,a=Ke();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function Fr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=oe.updateQueue,n===null&&(n=rl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function ap(){return Ke().memoizedState}function ll(t,n,a,r){var c=Rn();oe.flags|=t,c.memoizedState=Fr(1|n,{destroy:void 0},a,r===void 0?null:r)}function cl(t,n,a,r){var c=Ke();r=r===void 0?null:r;var f=c.memoizedState.inst;Oe!==null&&r!==null&&gu(r,Oe.memoizedState.deps)?c.memoizedState=Fr(n,f,a,r):(oe.flags|=t,c.memoizedState=Fr(1|n,f,a,r))}function rp(t,n){ll(8390656,8,t,n)}function bu(t,n){cl(2048,8,t,n)}function Bv(t){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=rl(),oe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function sp(t){var n=Ke().memoizedState;return Bv({ref:n,nextImpl:t}),function(){if((Ae&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function op(t,n){return cl(4,2,t,n)}function lp(t,n){return cl(4,4,t,n)}function cp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function up(t,n,a){a=a!=null?a.concat([t]):null,cl(4,4,cp.bind(null,n,t),a)}function Ru(){}function fp(t,n){var a=Ke();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&gu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function hp(t,n){var a=Ke();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&gu(n,r[1]))return r[0];if(r=t(),er){Dt(!0);try{t()}finally{Dt(!1)}}return a.memoizedState=[r,n],r}function Cu(t,n,a){return a===void 0||(Bi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=dm(),oe.lanes|=t,ya|=t,a)}function dp(t,n,a,r){return Vn(a,n)?a:Pr.current!==null?(t=Cu(t,a,r),Vn(t,n)||(an=!0),t):(Bi&42)===0||(Bi&1073741824)!==0&&(_e&261930)===0?(an=!0,t.memoizedState=a):(t=dm(),oe.lanes|=t,ya|=t,n)}function pp(t,n,a,r,c){var f=q.p;q.p=f!==0&&8>f?f:8;var g=P.T,E={};P.T=E,Du(t,!1,n,a);try{var B=c(),J=P.S;if(J!==null&&J(E,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ht=Lv(B,r);Qs(t,n,ht,jn(t))}else Qs(t,n,r,jn(t))}catch(gt){Qs(t,n,{then:function(){},status:"rejected",reason:gt},jn())}finally{q.p=f,g!==null&&E.types!==null&&(g.types=E.types),P.T=g}}function Iv(){}function wu(t,n,a,r){if(t.tag!==5)throw Error(s(476));var c=mp(t).queue;pp(t,c,n,Q,a===null?Iv:function(){return gp(t),a(r)})}function mp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:Q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function gp(t){var n=mp(t);n.next===null&&(n=t.alternate.memoizedState),Qs(t,n.next.queue,{},jn())}function Uu(){return gn(mo)}function _p(){return Ke().memoizedState}function vp(){return Ke().memoizedState}function Fv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();t=pa(a);var r=ma(n,t,a);r!==null&&(Pn(r,n,a),qs(r,n,a)),n={cache:ru()},t.payload=n;return}n=n.return}}function Hv(t,n,a){var r=jn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ul(t)?yp(n,a):(a=jc(t,n,a,r),a!==null&&(Pn(a,t,r),xp(a,n,r)))}function Sp(t,n,a){var r=jn();Qs(t,n,a,r)}function Qs(t,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ul(t))yp(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(c.hasEagerState=!0,c.eagerState=E,Vn(E,g))return Xo(t,n,c,0),Fe===null&&ko(),!1}catch{}finally{}if(a=jc(t,n,c,r),a!==null)return Pn(a,t,r),xp(a,n,r),!0}return!1}function Du(t,n,a,r){if(r={lane:2,revertLane:uf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ul(t)){if(n)throw Error(s(479))}else n=jc(t,a,r,2),n!==null&&Pn(n,t,2)}function ul(t){var n=t.alternate;return t===oe||n!==null&&n===oe}function yp(t,n){Br=il=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function xp(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Gn(t,a)}}var Js={readContext:gn,use:sl,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe};Js.useEffectEvent=qe;var Mp={readContext:gn,use:sl,useCallback:function(t,n){return Rn().memoizedState=[t,n===void 0?null:n],t},useContext:gn,useEffect:rp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ll(4194308,4,cp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ll(4194308,4,t,n)},useInsertionEffect:function(t,n){ll(4,2,t,n)},useMemo:function(t,n){var a=Rn();n=n===void 0?null:n;var r=t();if(er){Dt(!0);try{t()}finally{Dt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Rn();if(a!==void 0){var c=a(n);if(er){Dt(!0);try{a(n)}finally{Dt(!1)}}}else c=n;return r.memoizedState=r.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},r.queue=t,t=t.dispatch=Hv.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var n=Rn();return t={current:t},n.memoizedState=t},useState:function(t){t=Tu(t);var n=t.queue,a=Sp.bind(null,oe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ru,useDeferredValue:function(t,n){var a=Rn();return Cu(a,t,n)},useTransition:function(){var t=Tu(!1);return t=pp.bind(null,oe,t.queue,!0,!1),Rn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=oe,c=Rn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Fe===null)throw Error(s(349));(_e&127)!==0||kd(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,rp(Wd.bind(null,r,f,t),[t]),r.flags|=2048,Fr(9,{destroy:void 0},Xd.bind(null,r,f,a,n),null),a},useId:function(){var t=Rn(),n=Fe.identifierPrefix;if(Se){var a=Ri,r=bi;a=(r&~(1<<32-Bt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=al++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Nv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Uu,useFormState:tp,useActionState:tp,useOptimistic:function(t){var n=Rn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Du.bind(null,oe,!0,a),a.dispatch=n,[t,n]},useMemoCache:xu,useCacheRefresh:function(){return Rn().memoizedState=Fv.bind(null,oe)},useEffectEvent:function(t){var n=Rn(),a={impl:t};return n.memoizedState=a,function(){if((Ae&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Lu={readContext:gn,use:sl,useCallback:fp,useContext:gn,useEffect:bu,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:lp,useMemo:hp,useReducer:ol,useRef:ap,useState:function(){return ol(Ii)},useDebugValue:Ru,useDeferredValue:function(t,n){var a=Ke();return dp(a,Oe.memoizedState,t,n)},useTransition:function(){var t=ol(Ii)[0],n=Ke().memoizedState;return[typeof t=="boolean"?t:Ks(t),n]},useSyncExternalStore:Vd,useId:_p,useHostTransitionStatus:Uu,useFormState:ep,useActionState:ep,useOptimistic:function(t,n){var a=Ke();return jd(a,Oe,t,n)},useMemoCache:xu,useCacheRefresh:vp};Lu.useEffectEvent=sp;var Ep={readContext:gn,use:sl,useCallback:fp,useContext:gn,useEffect:bu,useImperativeHandle:up,useInsertionEffect:op,useLayoutEffect:lp,useMemo:hp,useReducer:Eu,useRef:ap,useState:function(){return Eu(Ii)},useDebugValue:Ru,useDeferredValue:function(t,n){var a=Ke();return Oe===null?Cu(a,t,n):dp(a,Oe.memoizedState,t,n)},useTransition:function(){var t=Eu(Ii)[0],n=Ke().memoizedState;return[typeof t=="boolean"?t:Ks(t),n]},useSyncExternalStore:Vd,useId:_p,useHostTransitionStatus:Uu,useFormState:ip,useActionState:ip,useOptimistic:function(t,n){var a=Ke();return Oe!==null?jd(a,Oe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:xu,useCacheRefresh:vp};Ep.useEffectEvent=sp;function Nu(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ou={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=jn(),c=pa(r);c.payload=n,a!=null&&(c.callback=a),n=ma(t,c,r),n!==null&&(Pn(n,t,r),qs(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=jn(),c=pa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ma(t,c,r),n!==null&&(Pn(n,t,r),qs(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=jn(),r=pa(a);r.tag=2,n!=null&&(r.callback=n),n=ma(t,r,a),n!==null&&(Pn(n,t,a),qs(n,t,a))}};function Tp(t,n,a,r,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,g):n.prototype&&n.prototype.isPureReactComponent?!Is(a,r)||!Is(c,f):!0}function Ap(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Ou.enqueueReplaceState(n,n.state,null)}function nr(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function bp(t){Vo(t)}function Rp(t){console.error(t)}function Cp(t){Vo(t)}function fl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function wp(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function zu(t,n,a){return a=pa(a),a.tag=3,a.payload={element:null},a.callback=function(){fl(t,n)},a}function Up(t){return t=pa(t),t.tag=3,t}function Dp(t,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;t.payload=function(){return c(f)},t.callback=function(){wp(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){wp(n,a,r),typeof c!="function"&&(xa===null?xa=new Set([this]):xa.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function Gv(t,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Dr(n,a,c,!0),a=Xn.current,a!==null){switch(a.tag){case 31:case 13:return ri===null?El():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===Jo?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),of(t,r,c)),!1;case 22:return a.flags|=65536,r===Jo?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),of(t,r,c)),!1}throw Error(s(435,a.tag))}return of(t,r,c),El(),!1}if(Se)return n=Xn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==tu&&(t=Error(s(422),{cause:r}),Gs(ei(t,a)))):(r!==tu&&(n=Error(s(423),{cause:r}),Gs(ei(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,r=ei(r,a),c=zu(t.stateNode,r,c),fu(t,c),Ye!==4&&(Ye=2)),!1;var f=Error(s(520),{cause:r});if(f=ei(f,a),so===null?so=[f]:so.push(f),Ye!==4&&(Ye=2),n===null)return!0;r=ei(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=zu(a.stateNode,r,t),fu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(xa===null||!xa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Up(c),Dp(c,t,a,r),fu(a,c),!1}a=a.return}while(a!==null);return!1}var Pu=Error(s(461)),an=!1;function _n(t,n,a,r){n.child=t===null?zd(n,null,a,r):tr(n,t.child,a,r)}function Lp(t,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var g={};for(var E in r)E!=="ref"&&(g[E]=r[E])}else g=r;return Ka(n),r=_u(t,n,a,g,f,c),E=vu(),t!==null&&!an?(Su(t,n,c),Fi(t,n,c)):(Se&&E&&Jc(n),n.flags|=1,_n(t,n,r,c),n.child)}function Np(t,n,a,r,c){if(t===null){var f=a.type;return typeof f=="function"&&!Zc(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Op(t,n,f,r,c)):(t=qo(a.type,null,r,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Xu(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Is,a(g,r)&&t.ref===n.ref)return Fi(t,n,c)}return n.flags|=1,t=Ni(f,r),t.ref=n.ref,t.return=n,n.child=t}function Op(t,n,a,r,c){if(t!==null){var f=t.memoizedProps;if(Is(f,r)&&t.ref===n.ref)if(an=!1,n.pendingProps=r=f,Xu(t,c))(t.flags&131072)!==0&&(an=!0);else return n.lanes=t.lanes,Fi(t,n,c)}return Bu(t,n,a,r,c)}function zp(t,n,a,r){var c=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return Pp(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ko(n,f!==null?f.cachePool:null),f!==null?Id(n,f):du(),Fd(n);else return r=n.lanes=536870912,Pp(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(Ko(n,f.cachePool),Id(n,f),_a(),n.memoizedState=null):(t!==null&&Ko(n,null),du(),_a());return _n(t,n,c,a),n.child}function $s(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Pp(t,n,a,r,c){var f=ou();return f=f===null?null:{parent:en._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Ko(n,null),du(),Fd(n),t!==null&&Dr(t,n,r,!0),n.childLanes=c,null}function hl(t,n){return n=pl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Bp(t,n,a){return tr(n,t.child,null,a),t=hl(n,n.pendingProps),t.flags|=2,Wn(n),n.memoizedState=null,t}function Vv(t,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Se){if(r.mode==="hidden")return t=hl(n,r),n.lanes=536870912,$s(null,t);if(mu(n),(t=Ge)?(t=Zm(t,ai),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ca!==null?{id:bi,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=yd(t),a.return=n,n.child=a,mn=n,Ge=null)):t=null,t===null)throw fa(n);return n.lanes=536870912,null}return hl(n,r)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(mu(n),c)if(n.flags&256)n.flags&=-257,n=Bp(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(an||Dr(t,n,a,!1),c=(a&t.childLanes)!==0,an||c){if(r=Fe,r!==null&&(g=Ts(r,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,qa(t,g),Pn(r,t,g),Pu;El(),n=Bp(t,n,a)}else t=f.treeContext,Ge=si(g.nextSibling),mn=n,Se=!0,ua=null,ai=!1,t!==null&&Ed(n,t),n=hl(n,r),n.flags|=4096;return n}return t=Ni(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function dl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Bu(t,n,a,r,c){return Ka(n),a=_u(t,n,a,r,void 0,c),r=vu(),t!==null&&!an?(Su(t,n,c),Fi(t,n,c)):(Se&&r&&Jc(n),n.flags|=1,_n(t,n,a,c),n.child)}function Ip(t,n,a,r,c,f){return Ka(n),n.updateQueue=null,a=Gd(n,r,a,c),Hd(t),r=vu(),t!==null&&!an?(Su(t,n,f),Fi(t,n,f)):(Se&&r&&Jc(n),n.flags|=1,_n(t,n,a,f),n.child)}function Fp(t,n,a,r,c){if(Ka(n),n.stateNode===null){var f=Rr,g=a.contextType;typeof g=="object"&&g!==null&&(f=gn(g)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ou,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},cu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?gn(g):Rr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Nu(n,a,g,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Ou.enqueueReplaceState(f,f.state,null),js(n,r,f,c),Ys(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,B=nr(a,E);f.props=B;var J=f.context,ht=a.contextType;g=Rr,typeof ht=="object"&&ht!==null&&(g=gn(ht));var gt=a.getDerivedStateFromProps;ht=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||J!==g)&&Ap(n,f,r,g),da=!1;var tt=n.memoizedState;f.state=tt,js(n,r,f,c),Ys(),J=n.memoizedState,E||tt!==J||da?(typeof gt=="function"&&(Nu(n,a,gt,r),J=n.memoizedState),(B=da||Tp(n,a,B,r,tt,J,g))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=J),f.props=r,f.state=J,f.context=g,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,uu(t,n),g=n.memoizedProps,ht=nr(a,g),f.props=ht,gt=n.pendingProps,tt=f.context,J=a.contextType,B=Rr,typeof J=="object"&&J!==null&&(B=gn(J)),E=a.getDerivedStateFromProps,(J=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==gt||tt!==B)&&Ap(n,f,r,B),da=!1,tt=n.memoizedState,f.state=tt,js(n,r,f,c),Ys();var st=n.memoizedState;g!==gt||tt!==st||da||t!==null&&t.dependencies!==null&&jo(t.dependencies)?(typeof E=="function"&&(Nu(n,a,E,r),st=n.memoizedState),(ht=da||Tp(n,a,ht,r,tt,st,B)||t!==null&&t.dependencies!==null&&jo(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,st,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,st,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=st),f.props=r,f.state=st,f.context=B,r=ht):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,dl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=tr(n,t.child,null,c),n.child=tr(n,null,a,c)):_n(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Fi(t,n,c),t}function Hp(t,n,a,r){return ja(),n.flags|=256,_n(t,n,a,r),n.child}var Iu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fu(t){return{baseLanes:t,cachePool:wd()}}function Hu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Yn),t}function Gp(t,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Ze.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Se){if(c?ga(n):_a(),(t=Ge)?(t=Zm(t,ai),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ca!==null?{id:bi,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=yd(t),a.return=n,n.child=a,mn=n,Ge=null)):t=null,t===null)throw fa(n);return Ef(t)?n.lanes=32:n.lanes=536870912,null}var E=r.children;return r=r.fallback,c?(_a(),c=n.mode,E=pl({mode:"hidden",children:E},c),r=Ya(r,c,a,null),E.return=n,r.return=n,E.sibling=r,n.child=E,r=n.child,r.memoizedState=Fu(a),r.childLanes=Hu(t,g,a),n.memoizedState=Iu,$s(null,r)):(ga(n),Gu(n,E))}var B=t.memoizedState;if(B!==null&&(E=B.dehydrated,E!==null)){if(f)n.flags&256?(ga(n),n.flags&=-257,n=Vu(t,n,a)):n.memoizedState!==null?(_a(),n.child=t.child,n.flags|=128,n=null):(_a(),E=r.fallback,c=n.mode,r=pl({mode:"visible",children:r.children},c),E=Ya(E,c,a,null),E.flags|=2,r.return=n,E.return=n,r.sibling=E,n.child=r,tr(n,t.child,null,a),r=n.child,r.memoizedState=Fu(a),r.childLanes=Hu(t,g,a),n.memoizedState=Iu,n=$s(null,r));else if(ga(n),Ef(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var J=g.dgst;g=J,r=Error(s(419)),r.stack="",r.digest=g,Gs({value:r,source:null,stack:null}),n=Vu(t,n,a)}else if(an||Dr(t,n,a,!1),g=(a&t.childLanes)!==0,an||g){if(g=Fe,g!==null&&(r=Ts(g,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,qa(t,r),Pn(g,t,r),Pu;Mf(E)||El(),n=Vu(t,n,a)}else Mf(E)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Ge=si(E.nextSibling),mn=n,Se=!0,ua=null,ai=!1,t!==null&&Ed(n,t),n=Gu(n,r.children),n.flags|=4096);return n}return c?(_a(),E=r.fallback,c=n.mode,B=t.child,J=B.sibling,r=Ni(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,J!==null?E=Ni(J,E):(E=Ya(E,c,a,null),E.flags|=2),E.return=n,r.return=n,r.sibling=E,n.child=r,$s(null,r),r=n.child,E=t.child.memoizedState,E===null?E=Fu(a):(c=E.cachePool,c!==null?(B=en._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=wd(),E={baseLanes:E.baseLanes|a,cachePool:c}),r.memoizedState=E,r.childLanes=Hu(t,g,a),n.memoizedState=Iu,$s(t.child,r)):(ga(n),a=t.child,t=a.sibling,a=Ni(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Gu(t,n){return n=pl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function pl(t,n){return t=kn(22,t,null,n),t.lanes=0,t}function Vu(t,n,a){return tr(n,t.child,null,a),t=Gu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Vp(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),iu(t.return,n,a)}function ku(t,n,a,r,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function kp(t,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var g=Ze.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,G(Ze,g),_n(t,n,r,a),r=Se?Hs:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vp(t,a,n);else if(t.tag===19)Vp(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&nl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ku(n,!1,c,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&nl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ku(n,!0,a,null,f,r);break;case"together":ku(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Fi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ya|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Dr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ni(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ni(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Xu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&jo(t)))}function kv(t,n,a){switch(n.tag){case 3:Xt(n,n.stateNode.containerInfo),ha(n,en,t.memoizedState.cache),ja();break;case 27:case 5:_t(n);break;case 4:Xt(n,n.stateNode.containerInfo);break;case 10:ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,mu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(ga(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Gp(t,n,a):(ga(n),t=Fi(t,n,a),t!==null?t.sibling:null);ga(n);break;case 19:var c=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Dr(t,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return kp(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),G(Ze,Ze.current),r)break;return null;case 22:return n.lanes=0,zp(t,n,a,n.pendingProps);case 24:ha(n,en,t.memoizedState.cache)}return Fi(t,n,a)}function Xp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)an=!0;else{if(!Xu(t,a)&&(n.flags&128)===0)return an=!1,kv(t,n,a);an=(t.flags&131072)!==0}else an=!1,Se&&(n.flags&1048576)!==0&&Md(n,Hs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Ja(n.elementType),n.type=t,typeof t=="function")Zc(t)?(r=nr(t,r),n.tag=1,n=Fp(null,n,t,r,a)):(n.tag=0,n=Bu(null,n,t,r,a));else{if(t!=null){var c=t.$$typeof;if(c===O){n.tag=11,n=Lp(null,n,t,r,a);break t}else if(c===z){n.tag=14,n=Np(null,n,t,r,a);break t}}throw n=k(t)||t,Error(s(306,n,""))}}return n;case 0:return Bu(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=nr(r,n.pendingProps),Fp(t,n,r,c,a);case 3:t:{if(Xt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,uu(t,n),js(n,r,null,a);var g=n.memoizedState;if(r=g.cache,ha(n,en,r),r!==f.cache&&au(n,[en],a,!0),Ys(),r=g.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Hp(t,n,r,a);break t}else if(r!==c){c=ei(Error(s(424)),n),Gs(c),n=Hp(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ge=si(t.firstChild),mn=n,Se=!0,ua=null,ai=!0,a=zd(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ja(),r===c){n=Fi(t,n,a);break t}_n(t,n,r,a)}n=n.child}return n;case 26:return dl(t,n),t===null?(a=eg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,t=n.pendingProps,r=Ul(Mt.current).createElement(a),r[Qe]=n,r[xn]=t,vn(r,a,t),Wt(r),n.stateNode=r):n.memoizedState=eg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return _t(n),t===null&&Se&&(r=n.stateNode=Jm(n.type,n.pendingProps,Mt.current),mn=n,ai=!0,c=Ge,Aa(n.type)?(Tf=c,Ge=si(r.firstChild)):Ge=c),_n(t,n,n.pendingProps.children,a),dl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Se&&((c=r=Ge)&&(r=SS(r,n.type,n.pendingProps,ai),r!==null?(n.stateNode=r,mn=n,Ge=si(r.firstChild),ai=!1,c=!0):c=!1),c||fa(n)),_t(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,r=f.children,Sf(c,f)?r=null:g!==null&&Sf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=_u(t,n,Ov,null,null,a),mo._currentValue=c),dl(t,n),_n(t,n,r,a),n.child;case 6:return t===null&&Se&&((t=a=Ge)&&(a=yS(a,n.pendingProps,ai),a!==null?(n.stateNode=a,mn=n,Ge=null,t=!0):t=!1),t||fa(n)),null;case 13:return Gp(t,n,a);case 4:return Xt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=tr(n,null,r,a):_n(t,n,r,a),n.child;case 11:return Lp(t,n,n.type,n.pendingProps,a);case 7:return _n(t,n,n.pendingProps,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ha(n,n.type,r.value),_n(t,n,r.children,a),n.child;case 9:return c=n.type._context,r=n.pendingProps.children,Ka(n),c=gn(c),r=r(c),n.flags|=1,_n(t,n,r,a),n.child;case 14:return Np(t,n,n.type,n.pendingProps,a);case 15:return Op(t,n,n.type,n.pendingProps,a);case 19:return kp(t,n,a);case 31:return Vv(t,n,a);case 22:return zp(t,n,a,n.pendingProps);case 24:return Ka(n),r=gn(en),t===null?(c=ou(),c===null&&(c=Fe,f=ru(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},cu(n),ha(n,en,c)):((t.lanes&a)!==0&&(uu(t,n),js(n,null,null,a),Ys()),c=t.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ha(n,en,r)):(r=f.cache,ha(n,en,r),r!==c.cache&&au(n,[en],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Hi(t){t.flags|=4}function Wu(t,n,a,r,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(_m())t.flags|=8192;else throw $a=Jo,lu}else t.flags&=-16777217}function Wp(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!sg(n))if(_m())t.flags|=8192;else throw $a=Jo,lu}function ml(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Re():536870912,t.lanes|=n,kr|=n)}function to(t,n){if(!Se)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ve(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function Xv(t,n,a){var r=n.pendingProps;switch($c(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ve(n),null;case 1:return Ve(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Pi(en),mt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ur(n)?Hi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,eu())),Ve(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Hi(n),f!==null?(Ve(n),Wp(n,f)):(Ve(n),Wu(n,c,null,r,a))):f?f!==t.memoizedState?(Hi(n),Ve(n),Wp(n,f)):(Ve(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&Hi(n),Ve(n),Wu(n,c,t,r,a)),null;case 27:if(Ft(n),a=Mt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Hi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}t=Z.current,Ur(n)?Td(n):(t=Jm(c,r,a),n.stateNode=t,Hi(n))}return Ve(n),null;case 5:if(Ft(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&Hi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ve(n),null}if(f=Z.current,Ur(n))Td(n);else{var g=Ul(Mt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?g.createElement(c,{is:r.is}):g.createElement(c)}}f[Qe]=n,f[xn]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(vn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Hi(n)}}return Ve(n),Wu(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&Hi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Mt.current,Ur(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,c=mn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}t[Qe]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Gm(t.nodeValue,a)),t||fa(n,!0)}else t=Ul(t).createTextNode(r),t[Qe]=n,n.stateNode=t}return Ve(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=Ur(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Qe]=n}else ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),t=!1}else a=eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Wn(n),n):(Wn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ve(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Ur(n),r!==null&&r.dehydrated!==null){if(t===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Qe]=n}else ja(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ve(n),c=!1}else c=eu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Wn(n),n):(Wn(n),null)}return Wn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),ml(n,n.updateQueue),Ve(n),null);case 4:return mt(),t===null&&pf(n.stateNode.containerInfo),Ve(n),null;case 10:return Pi(n.type),Ve(n),null;case 19:if(V(Ze),r=n.memoizedState,r===null)return Ve(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)to(r,!1);else{if(Ye!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=nl(t),f!==null){for(n.flags|=128,to(r,!1),t=f.updateQueue,n.updateQueue=t,ml(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Sd(a,t),a=a.sibling;return G(Ze,Ze.current&1|2),Se&&Oi(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&vt()>yl&&(n.flags|=128,c=!0,to(r,!1),n.lanes=4194304)}else{if(!c)if(t=nl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,ml(n,t),to(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Se)return Ve(n),null}else 2*vt()-r.renderingStartTime>yl&&a!==536870912&&(n.flags|=128,c=!0,to(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=vt(),t.sibling=null,a=Ze.current,G(Ze,c?a&1|2:a&1),Se&&Oi(n,r.treeForkCount),t):(Ve(n),null);case 22:case 23:return Wn(n),pu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ve(n),n.subtreeFlags&6&&(n.flags|=8192)):Ve(n),a=n.updateQueue,a!==null&&ml(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&V(Qa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Pi(en),Ve(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Wv(t,n){switch($c(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Pi(en),mt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ft(n),null;case 31:if(n.memoizedState!==null){if(Wn(n),n.alternate===null)throw Error(s(340));ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Wn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ja()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return V(Ze),null;case 4:return mt(),null;case 10:return Pi(n.type),null;case 22:case 23:return Wn(n),pu(),t!==null&&V(Qa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Pi(en),null;case 25:return null;default:return null}}function qp(t,n){switch($c(n),n.tag){case 3:Pi(en),mt();break;case 26:case 27:case 5:Ft(n);break;case 4:mt();break;case 31:n.memoizedState!==null&&Wn(n);break;case 13:Wn(n);break;case 19:V(Ze);break;case 10:Pi(n.type);break;case 22:case 23:Wn(n),pu(),t!==null&&V(Qa);break;case 24:Pi(en)}}function eo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&t)===t){r=void 0;var f=a.create,g=a.inst;r=f(),g.destroy=r}a=a.next}while(a!==c)}}catch(E){Ue(n,n.return,E)}}function va(t,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&t)===t){var g=r.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,c=n;var B=a,J=E;try{J()}catch(ht){Ue(c,B,ht)}}}r=r.next}while(r!==f)}}catch(ht){Ue(n,n.return,ht)}}function Yp(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Bd(n,a)}catch(r){Ue(t,t.return,r)}}}function jp(t,n,a){a.props=nr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ue(t,n,r)}}function no(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(c){Ue(t,n,c)}}function Ci(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Ue(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ue(t,n,c)}else a.current=null}function Zp(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Ue(t,t.return,c)}}function qu(t,n,a){try{var r=t.stateNode;dS(r,t.type,a,n),r[xn]=n}catch(c){Ue(t,t.return,c)}}function Kp(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Aa(t.type)||t.tag===4}function Yu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Kp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Aa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ju(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Di));else if(r!==4&&(r===27&&Aa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(ju(t,n,a),t=t.sibling;t!==null;)ju(t,n,a),t=t.sibling}function gl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&Aa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(gl(t,n,a),t=t.sibling;t!==null;)gl(t,n,a),t=t.sibling}function Qp(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);vn(n,r,a),n[Qe]=t,n[xn]=a}catch(f){Ue(t,t.return,f)}}var Gi=!1,rn=!1,Zu=!1,Jp=typeof WeakSet=="function"?WeakSet:Set,fn=null;function qv(t,n){if(t=t.containerInfo,_f=Bl,t=ud(t),Vc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,E=-1,B=-1,J=0,ht=0,gt=t,tt=null;e:for(;;){for(var st;gt!==a||c!==0&&gt.nodeType!==3||(E=g+c),gt!==f||r!==0&&gt.nodeType!==3||(B=g+r),gt.nodeType===3&&(g+=gt.nodeValue.length),(st=gt.firstChild)!==null;)tt=gt,gt=st;for(;;){if(gt===t)break e;if(tt===a&&++J===c&&(E=g),tt===f&&++ht===r&&(B=g),(st=gt.nextSibling)!==null)break;gt=tt,tt=gt.parentNode}gt=st}a=E===-1||B===-1?null:{start:E,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(vf={focusedElem:t,selectionRange:a},Bl=!1,fn=n;fn!==null;)if(n=fn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,fn=t;else for(;fn!==null;){switch(n=fn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ht=nr(a.type,c);t=r.getSnapshotBeforeUpdate(Ht,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(te){Ue(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)xf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":xf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,fn=t;break}fn=n.return}}function $p(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ki(t,a),r&4&&eo(5,a);break;case 1:if(ki(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Ue(a,a.return,g)}else{var c=nr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ue(a,a.return,g)}}r&64&&Yp(a),r&512&&no(a,a.return);break;case 3:if(ki(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Bd(t,n)}catch(g){Ue(a,a.return,g)}}break;case 27:n===null&&r&4&&Qp(a);case 26:case 5:ki(t,a),n===null&&r&4&&Zp(a),r&512&&no(a,a.return);break;case 12:ki(t,a);break;case 31:ki(t,a),r&4&&nm(t,a);break;case 13:ki(t,a),r&4&&im(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=eS.bind(null,a),xS(t,a))));break;case 22:if(r=a.memoizedState!==null||Gi,!r){n=n!==null&&n.memoizedState!==null||rn,c=Gi;var f=rn;Gi=r,(rn=n)&&!f?Xi(t,a,(a.subtreeFlags&8772)!==0):ki(t,a),Gi=c,rn=f}break;case 30:break;default:ki(t,a)}}function tm(t){var n=t.alternate;n!==null&&(t.alternate=null,tm(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&it(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Xe=null,Ln=!1;function Vi(t,n,a){for(a=a.child;a!==null;)em(t,n,a),a=a.sibling}function em(t,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(zt,a)}catch{}switch(a.tag){case 26:rn||Ci(a,n),Vi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ci(a,n);var r=Xe,c=Ln;Aa(a.type)&&(Xe=a.stateNode,Ln=!1),Vi(t,n,a),fo(a.stateNode),Xe=r,Ln=c;break;case 5:rn||Ci(a,n);case 6:if(r=Xe,c=Ln,Xe=null,Vi(t,n,a),Xe=r,Ln=c,Xe!==null)if(Ln)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(f){Ue(a,n,f)}else try{Xe.removeChild(a.stateNode)}catch(f){Ue(a,n,f)}break;case 18:Xe!==null&&(Ln?(t=Xe,Ym(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Qr(t)):Ym(Xe,a.stateNode));break;case 4:r=Xe,c=Ln,Xe=a.stateNode.containerInfo,Ln=!0,Vi(t,n,a),Xe=r,Ln=c;break;case 0:case 11:case 14:case 15:va(2,a,n),rn||va(4,a,n),Vi(t,n,a);break;case 1:rn||(Ci(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&jp(a,n,r)),Vi(t,n,a);break;case 21:Vi(t,n,a);break;case 22:rn=(r=rn)||a.memoizedState!==null,Vi(t,n,a),rn=r;break;default:Vi(t,n,a)}}function nm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Qr(t)}catch(a){Ue(n,n.return,a)}}}function im(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Qr(t)}catch(a){Ue(n,n.return,a)}}function Yv(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Jp),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Jp),n;default:throw Error(s(435,t.tag))}}function _l(t,n){var a=Yv(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=nS.bind(null,t,r);r.then(c,c)}})}function Nn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=t,g=n,E=g;t:for(;E!==null;){switch(E.tag){case 27:if(Aa(E.type)){Xe=E.stateNode,Ln=!1;break t}break;case 5:Xe=E.stateNode,Ln=!1;break t;case 3:case 4:Xe=E.stateNode.containerInfo,Ln=!0;break t}E=E.return}if(Xe===null)throw Error(s(160));em(f,g,c),Xe=null,Ln=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)am(n,t),n=n.sibling}var pi=null;function am(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Nn(n,t),On(t),r&4&&(va(3,t,t.return),eo(3,t),va(5,t,t.return));break;case 1:Nn(n,t),On(t),r&512&&(rn||a===null||Ci(a,a.return)),r&64&&Gi&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=pi;if(Nn(n,t),On(t),r&512&&(rn||a===null||Ci(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){t:{r=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[rt]||f[Qe]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),vn(f,r,a),f[Qe]=t,Wt(f),r=f;break t;case"link":var g=ag("link","href",c).get(r+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break e}}f=c.createElement(r),vn(f,r,a),c.head.appendChild(f);break;case"meta":if(g=ag("meta","content",c).get(r+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break e}}f=c.createElement(r),vn(f,r,a),c.head.appendChild(f);break;default:throw Error(s(468,r))}f[Qe]=t,Wt(f),r=f}t.stateNode=r}else rg(c,t.type,t.stateNode);else t.stateNode=ig(c,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?rg(c,t.type,t.stateNode):ig(c,r,t.memoizedProps)):r===null&&t.stateNode!==null&&qu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Nn(n,t),On(t),r&512&&(rn||a===null||Ci(a,a.return)),a!==null&&r&4&&qu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Nn(n,t),On(t),r&512&&(rn||a===null||Ci(a,a.return)),t.flags&32){c=t.stateNode;try{yr(c,"")}catch(Ht){Ue(t,t.return,Ht)}}r&4&&t.stateNode!=null&&(c=t.memoizedProps,qu(t,c,a!==null?a.memoizedProps:c)),r&1024&&(Zu=!0);break;case 6:if(Nn(n,t),On(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ht){Ue(t,t.return,Ht)}}break;case 3:if(Nl=null,c=pi,pi=Dl(n.containerInfo),Nn(n,t),pi=c,On(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Qr(n.containerInfo)}catch(Ht){Ue(t,t.return,Ht)}Zu&&(Zu=!1,rm(t));break;case 4:r=pi,pi=Dl(t.stateNode.containerInfo),Nn(n,t),On(t),pi=r;break;case 12:Nn(n,t),On(t);break;case 31:Nn(n,t),On(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,_l(t,r)));break;case 13:Nn(n,t),On(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Sl=vt()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,_l(t,r)));break;case 22:c=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=Gi,ht=rn;if(Gi=J||c,rn=ht||B,Nn(n,t),rn=ht,Gi=J,On(t),r&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||Gi||rn||ir(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=B.stateNode;var gt=B.memoizedProps.style,tt=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;E.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Ht){Ue(B,B.return,Ht)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(Ht){Ue(B,B.return,Ht)}}}else if(n.tag===18){if(a===null){B=n;try{var st=B.stateNode;c?jm(st,!0):jm(B.stateNode,!1)}catch(Ht){Ue(B,B.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,_l(t,a))));break;case 19:Nn(n,t),On(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,_l(t,r)));break;case 30:break;case 21:break;default:Nn(n,t),On(t)}}function On(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(Kp(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,f=Yu(t);gl(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(yr(g,""),a.flags&=-33);var E=Yu(t);gl(t,E,g);break;case 3:case 4:var B=a.stateNode.containerInfo,J=Yu(t);ju(t,J,B);break;default:throw Error(s(161))}}catch(ht){Ue(t,t.return,ht)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function rm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;rm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ki(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)$p(t,n.alternate,n),n=n.sibling}function ir(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:va(4,n,n.return),ir(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&jp(n,n.return,a),ir(n);break;case 27:fo(n.stateNode);case 26:case 5:Ci(n,n.return),ir(n);break;case 22:n.memoizedState===null&&ir(n);break;case 30:ir(n);break;default:ir(n)}t=t.sibling}}function Xi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Xi(c,f,a),eo(4,f);break;case 1:if(Xi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ue(r,r.return,J)}if(r=f,c=r.updateQueue,c!==null){var E=r.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)Pd(B[c],E)}catch(J){Ue(r,r.return,J)}}a&&g&64&&Yp(f),no(f,f.return);break;case 27:Qp(f);case 26:case 5:Xi(c,f,a),a&&r===null&&g&4&&Zp(f),no(f,f.return);break;case 12:Xi(c,f,a);break;case 31:Xi(c,f,a),a&&g&4&&nm(c,f);break;case 13:Xi(c,f,a),a&&g&4&&im(c,f);break;case 22:f.memoizedState===null&&Xi(c,f,a),no(f,f.return);break;case 30:break;default:Xi(c,f,a)}n=n.sibling}}function Ku(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Vs(a))}function Qu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Vs(t))}function mi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)sm(t,n,a,r),n=n.sibling}function sm(t,n,a,r){var c=n.flags;switch(n.tag){case 0:case 11:case 15:mi(t,n,a,r),c&2048&&eo(9,n);break;case 1:mi(t,n,a,r);break;case 3:mi(t,n,a,r),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Vs(t)));break;case 12:if(c&2048){mi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Ue(n,n.return,B)}}else mi(t,n,a,r);break;case 31:mi(t,n,a,r);break;case 13:mi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?mi(t,n,a,r):io(t,n):f._visibility&2?mi(t,n,a,r):(f._visibility|=2,Hr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),c&2048&&Ku(g,n);break;case 24:mi(t,n,a,r),c&2048&&Qu(n.alternate,n);break;default:mi(t,n,a,r)}}function Hr(t,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,E=a,B=r,J=g.flags;switch(g.tag){case 0:case 11:case 15:Hr(f,g,E,B,c),eo(8,g);break;case 23:break;case 22:var ht=g.stateNode;g.memoizedState!==null?ht._visibility&2?Hr(f,g,E,B,c):io(f,g):(ht._visibility|=2,Hr(f,g,E,B,c)),c&&J&2048&&Ku(g.alternate,g);break;case 24:Hr(f,g,E,B,c),c&&J&2048&&Qu(g.alternate,g);break;default:Hr(f,g,E,B,c)}n=n.sibling}}function io(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,c=r.flags;switch(r.tag){case 22:io(a,r),c&2048&&Ku(r.alternate,r);break;case 24:io(a,r),c&2048&&Qu(r.alternate,r);break;default:io(a,r)}n=n.sibling}}var ao=8192;function Gr(t,n,a){if(t.subtreeFlags&ao)for(t=t.child;t!==null;)om(t,n,a),t=t.sibling}function om(t,n,a){switch(t.tag){case 26:Gr(t,n,a),t.flags&ao&&t.memoizedState!==null&&NS(a,pi,t.memoizedState,t.memoizedProps);break;case 5:Gr(t,n,a);break;case 3:case 4:var r=pi;pi=Dl(t.stateNode.containerInfo),Gr(t,n,a),pi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=ao,ao=16777216,Gr(t,n,a),ao=r):Gr(t,n,a));break;default:Gr(t,n,a)}}function lm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ro(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];fn=r,um(r,t)}lm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)cm(t),t=t.sibling}function cm(t){switch(t.tag){case 0:case 11:case 15:ro(t),t.flags&2048&&va(9,t,t.return);break;case 3:ro(t);break;case 12:ro(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,vl(t)):ro(t);break;default:ro(t)}}function vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];fn=r,um(r,t)}lm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:va(8,n,n.return),vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,vl(n));break;default:vl(n)}t=t.sibling}}function um(t,n){for(;fn!==null;){var a=fn;switch(a.tag){case 0:case 11:case 15:va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Vs(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,fn=r;else t:for(a=t;fn!==null;){r=fn;var c=r.sibling,f=r.return;if(tm(r),r===a){fn=null;break t}if(c!==null){c.return=f,fn=c;break t}fn=f}}}var jv={getCacheForType:function(t){var n=gn(en),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return gn(en).controller.signal}},Zv=typeof WeakMap=="function"?WeakMap:Map,Ae=0,Fe=null,me=null,_e=0,we=0,qn=null,Sa=!1,Vr=!1,Ju=!1,Wi=0,Ye=0,ya=0,ar=0,$u=0,Yn=0,kr=0,so=null,zn=null,tf=!1,Sl=0,fm=0,yl=1/0,xl=null,xa=null,on=0,Ma=null,Xr=null,qi=0,ef=0,nf=null,hm=null,oo=0,af=null;function jn(){return(Ae&2)!==0&&_e!==0?_e&-_e:P.T!==null?uf():bs()}function dm(){if(Yn===0)if((_e&536870912)===0||Se){var t=F;F<<=1,(F&3932160)===0&&(F=262144),Yn=t}else Yn=536870912;return t=Xn.current,t!==null&&(t.flags|=32),Yn}function Pn(t,n,a){(t===Fe&&(we===2||we===9)||t.cancelPendingCommit!==null)&&(Wr(t,0),Ea(t,_e,Yn,!1)),je(t,a),((Ae&2)===0||t!==Fe)&&(t===Fe&&((Ae&2)===0&&(ar|=a),Ye===4&&Ea(t,_e,Yn,!1)),wi(t))}function pm(t,n,a){if((Ae&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||jt(t,n),c=r?Jv(t,n):sf(t,n,!0),f=r;do{if(c===0){Vr&&!r&&Ea(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Kv(a)){c=sf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;c=so;var B=E.current.memoizedState.isDehydrated;if(B&&(Wr(E,g).flags|=256),g=sf(E,g,!1),g!==2){if(Ju&&!B){E.errorRecoveryDisabledLanes|=f,ar|=f,c=4;break t}f=zn,zn=c,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Wr(t,0),Ea(t,n,0,!0);break}t:{switch(r=t,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ea(r,n,Yn,!Sa);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Sl+300-vt(),10<c)){if(Ea(r,n,Yn,!Sa),$t(r,0,!0)!==0)break t;qi=n,r.timeoutHandle=Wm(mm.bind(null,r,a,zn,xl,tf,n,Yn,ar,kr,Sa,f,"Throttled",-0,0),c);break t}mm(r,a,zn,xl,tf,n,Yn,ar,kr,Sa,f,null,-0,0)}}break}while(!0);wi(t)}function mm(t,n,a,r,c,f,g,E,B,J,ht,gt,tt,st){if(t.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Di},om(n,f,gt);var Ht=(f&62914560)===f?Sl-vt():(f&4194048)===f?fm-vt():0;if(Ht=OS(gt,Ht),Ht!==null){qi=f,t.cancelPendingCommit=Ht(Em.bind(null,t,n,f,a,r,c,g,E,B,ht,gt,null,tt,st)),Ea(t,f,g,!J);return}}Em(t,n,f,a,r,c,g,E,B)}function Kv(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Vn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ea(t,n,a,r){n&=~$u,n&=~ar,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var c=n;0<c;){var f=31-Bt(c),g=1<<f;r[f]=-1,c&=~g}a!==0&&un(t,a,n)}function Ml(){return(Ae&6)===0?(lo(0),!1):!0}function rf(){if(me!==null){if(we===0)var t=me.return;else t=me,zi=Za=null,yu(t),zr=null,Xs=0,t=me;for(;t!==null;)qp(t.alternate,t),t=t.return;me=null}}function Wr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,gS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),qi=0,rf(),Fe=t,me=a=Ni(t.current,null),_e=n,we=0,qn=null,Sa=!1,Vr=jt(t,n),Ju=!1,kr=Yn=$u=ar=ya=Ye=0,zn=so=null,tf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var c=31-Bt(r),f=1<<c;n|=t[c],r&=~f}return Wi=n,ko(),a}function gm(t,n){oe=null,P.H=Js,n===Or||n===Qo?(n=Ld(),we=3):n===lu?(n=Ld(),we=4):we=n===Pu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,me===null&&(Ye=1,fl(t,ei(n,t.current)))}function _m(){var t=Xn.current;return t===null?!0:(_e&4194048)===_e?ri===null:(_e&62914560)===_e||(_e&536870912)!==0?t===ri:!1}function vm(){var t=P.H;return P.H=Js,t===null?Js:t}function Sm(){var t=P.A;return P.A=jv,t}function El(){Ye=4,Sa||(_e&4194048)!==_e&&Xn.current!==null||(Vr=!0),(ya&134217727)===0&&(ar&134217727)===0||Fe===null||Ea(Fe,_e,Yn,!1)}function sf(t,n,a){var r=Ae;Ae|=2;var c=vm(),f=Sm();(Fe!==t||_e!==n)&&(xl=null,Wr(t,n)),n=!1;var g=Ye;t:do try{if(we!==0&&me!==null){var E=me,B=qn;switch(we){case 8:rf(),g=6;break t;case 3:case 2:case 9:case 6:Xn.current===null&&(n=!0);var J=we;if(we=0,qn=null,qr(t,E,B,J),a&&Vr){g=0;break t}break;default:J=we,we=0,qn=null,qr(t,E,B,J)}}Qv(),g=Ye;break}catch(ht){gm(t,ht)}while(!0);return n&&t.shellSuspendCounter++,zi=Za=null,Ae=r,P.H=c,P.A=f,me===null&&(Fe=null,_e=0,ko()),g}function Qv(){for(;me!==null;)ym(me)}function Jv(t,n){var a=Ae;Ae|=2;var r=vm(),c=Sm();Fe!==t||_e!==n?(xl=null,yl=vt()+500,Wr(t,n)):Vr=jt(t,n);t:do try{if(we!==0&&me!==null){n=me;var f=qn;e:switch(we){case 1:we=0,qn=null,qr(t,n,f,1);break;case 2:case 9:if(Ud(f)){we=0,qn=null,xm(n);break}n=function(){we!==2&&we!==9||Fe!==t||(we=7),wi(t)},f.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:Ud(f)?(we=0,qn=null,xm(n)):(we=0,qn=null,qr(t,n,f,7));break;case 5:var g=null;switch(me.tag){case 26:g=me.memoizedState;case 5:case 27:var E=me;if(g?sg(g):E.stateNode.complete){we=0,qn=null;var B=E.sibling;if(B!==null)me=B;else{var J=E.return;J!==null?(me=J,Tl(J)):me=null}break e}}we=0,qn=null,qr(t,n,f,5);break;case 6:we=0,qn=null,qr(t,n,f,6);break;case 8:rf(),Ye=6;break t;default:throw Error(s(462))}}$v();break}catch(ht){gm(t,ht)}while(!0);return zi=Za=null,P.H=r,P.A=c,Ae=a,me!==null?0:(Fe=null,_e=0,ko(),Ye)}function $v(){for(;me!==null&&!St();)ym(me)}function ym(t){var n=Xp(t.alternate,t,Wi);t.memoizedProps=t.pendingProps,n===null?Tl(t):me=n}function xm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Ip(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=Ip(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:yu(n);default:qp(a,n),n=me=Sd(n,Wi),n=Xp(a,n,Wi)}t.memoizedProps=t.pendingProps,n===null?Tl(t):me=n}function qr(t,n,a,r){zi=Za=null,yu(n),zr=null,Xs=0;var c=n.return;try{if(Gv(t,c,n,a,_e)){Ye=1,fl(t,ei(a,t.current)),me=null;return}}catch(f){if(c!==null)throw me=c,f;Ye=1,fl(t,ei(a,t.current)),me=null;return}n.flags&32768?(Se||r===1?t=!0:Vr||(_e&536870912)!==0?t=!1:(Sa=t=!0,(r===2||r===9||r===3||r===6)&&(r=Xn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Mm(n,t)):Tl(n)}function Tl(t){var n=t;do{if((n.flags&32768)!==0){Mm(n,Sa);return}t=n.return;var a=Xv(n.alternate,n,Wi);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=t}while(n!==null);Ye===0&&(Ye=5)}function Mm(t,n){do{var a=Wv(t.alternate,t);if(a!==null){a.flags&=32767,me=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){me=t;return}me=t=a}while(t!==null);Ye=6,me=null}function Em(t,n,a,r,c,f,g,E,B){t.cancelPendingCommit=null;do Al();while(on!==0);if((Ae&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Yc,Ne(t,a,f,g,E,B),t===Fe&&(me=Fe=null,_e=0),Xr=n,Ma=t,qi=a,ef=f,nf=c,hm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,iS(Yt,function(){return Cm(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=P.T,P.T=null,c=q.p,q.p=2,g=Ae,Ae|=4;try{qv(t,n,a)}finally{Ae=g,q.p=c,P.T=r}}on=1,Tm(),Am(),bm()}}function Tm(){if(on===1){on=0;var t=Ma,n=Xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var r=q.p;q.p=2;var c=Ae;Ae|=4;try{am(n,t);var f=vf,g=ud(t.containerInfo),E=f.focusedElem,B=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&cd(E.ownerDocument.documentElement,E)){if(B!==null&&Vc(E)){var J=B.start,ht=B.end;if(ht===void 0&&(ht=J),"selectionStart"in E)E.selectionStart=J,E.selectionEnd=Math.min(ht,E.value.length);else{var gt=E.ownerDocument||document,tt=gt&&gt.defaultView||window;if(tt.getSelection){var st=tt.getSelection(),Ht=E.textContent.length,te=Math.min(B.start,Ht),Pe=B.end===void 0?te:Math.min(B.end,Ht);!st.extend&&te>Pe&&(g=Pe,Pe=te,te=g);var W=ld(E,te),H=ld(E,Pe);if(W&&H&&(st.rangeCount!==1||st.anchorNode!==W.node||st.anchorOffset!==W.offset||st.focusNode!==H.node||st.focusOffset!==H.offset)){var K=gt.createRange();K.setStart(W.node,W.offset),st.removeAllRanges(),te>Pe?(st.addRange(K),st.extend(H.node,H.offset)):(K.setEnd(H.node,H.offset),st.addRange(K))}}}}for(gt=[],st=E;st=st.parentNode;)st.nodeType===1&&gt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<gt.length;E++){var dt=gt[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Bl=!!_f,vf=_f=null}finally{Ae=c,q.p=r,P.T=a}}t.current=n,on=2}}function Am(){if(on===2){on=0;var t=Ma,n=Xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var r=q.p;q.p=2;var c=Ae;Ae|=4;try{$p(t,n.alternate,n)}finally{Ae=c,q.p=r,P.T=a}}on=3}}function bm(){if(on===4||on===3){on=0,xt();var t=Ma,n=Xr,a=qi,r=hm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?on=5:(on=0,Xr=Ma=null,Rm(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(xa=null),ia(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(zt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=P.T,c=q.p,q.p=2,P.T=null;try{for(var f=t.onRecoverableError,g=0;g<r.length;g++){var E=r[g];f(E.value,{componentStack:E.stack})}}finally{P.T=n,q.p=c}}(qi&3)!==0&&Al(),wi(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===af?oo++:(oo=0,af=t):oo=0,lo(0)}}function Rm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Vs(n)))}function Al(){return Tm(),Am(),bm(),Cm()}function Cm(){if(on!==5)return!1;var t=Ma,n=ef;ef=0;var a=ia(qi),r=P.T,c=q.p;try{q.p=32>a?32:a,P.T=null,a=nf,nf=null;var f=Ma,g=qi;if(on=0,Xr=Ma=null,qi=0,(Ae&6)!==0)throw Error(s(331));var E=Ae;if(Ae|=4,cm(f.current),sm(f,f.current,g,a),Ae=E,lo(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(zt,f)}catch{}return!0}finally{q.p=c,P.T=r,Rm(t,n)}}function wm(t,n,a){n=ei(a,n),n=zu(t.stateNode,n,2),t=ma(t,n,2),t!==null&&(je(t,2),wi(t))}function Ue(t,n,a){if(t.tag===3)wm(t,t,a);else for(;n!==null;){if(n.tag===3){wm(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xa===null||!xa.has(r))){t=ei(a,t),a=Up(2),r=ma(n,a,2),r!==null&&(Dp(a,r,n,t),je(r,2),wi(r));break}}n=n.return}}function of(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Zv;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Ju=!0,c.add(a),t=tS.bind(null,t,n,a),n.then(t,t))}function tS(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Fe===t&&(_e&a)===a&&(Ye===4||Ye===3&&(_e&62914560)===_e&&300>vt()-Sl?(Ae&2)===0&&Wr(t,0):$u|=a,kr===_e&&(kr=0)),wi(t)}function Um(t,n){n===0&&(n=Re()),t=qa(t,n),t!==null&&(je(t,n),wi(t))}function eS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Um(t,a)}function nS(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Um(t,a)}function iS(t,n){return b(t,n)}var bl=null,Yr=null,lf=!1,Rl=!1,cf=!1,Ta=0;function wi(t){t!==Yr&&t.next===null&&(Yr===null?bl=Yr=t:Yr=Yr.next=t),Rl=!0,lf||(lf=!0,rS())}function lo(t,n){if(!cf&&Rl){cf=!0;do for(var a=!1,r=bl;r!==null;){if(t!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var g=r.suspendedLanes,E=r.pingedLanes;f=(1<<31-Bt(42|t)+1)-1,f&=c&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Om(r,f))}else f=_e,f=$t(r,r===Fe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||jt(r,f)||(a=!0,Om(r,f));r=r.next}while(a);cf=!1}}function aS(){Dm()}function Dm(){Rl=lf=!1;var t=0;Ta!==0&&mS()&&(t=Ta);for(var n=vt(),a=null,r=bl;r!==null;){var c=r.next,f=Lm(r,n);f===0?(r.next=null,a===null?bl=c:a.next=c,c===null&&(Yr=a)):(a=r,(t!==0||(f&3)!==0)&&(Rl=!0)),r=c}on!==0&&on!==5||lo(t),Ta!==0&&(Ta=0)}function Lm(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Bt(f),E=1<<g,B=c[g];B===-1?((E&a)===0||(E&r)!==0)&&(c[g]=Le(E,n)):B<=n&&(t.expiredLanes|=E),f&=~E}if(n=Fe,a=_e,a=$t(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(we===2||we===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&$(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||jt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&$(r),ia(a)){case 2:case 8:a=It;break;case 32:a=Yt;break;case 268435456:a=yt;break;default:a=Yt}return r=Nm.bind(null,t),a=b(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&$(r),t.callbackPriority=2,t.callbackNode=null,2}function Nm(t,n){if(on!==0&&on!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Al()&&t.callbackNode!==a)return null;var r=_e;return r=$t(t,t===Fe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(pm(t,r,n),Lm(t,vt()),t.callbackNode!=null&&t.callbackNode===a?Nm.bind(null,t):null)}function Om(t,n){if(Al())return null;pm(t,n,!0)}function rS(){_S(function(){(Ae&6)!==0?b(wt,aS):Dm()})}function uf(){if(Ta===0){var t=Lr;t===0&&(t=At,At<<=1,(At&261888)===0&&(At=256)),Ta=t}return Ta}function zm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:zo(""+t)}function Pm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function sS(t,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=zm((c[xn]||null).action),g=r.submitter;g&&(n=(n=g[xn]||null)?zm(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new Fo("action","action",null,r,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ta!==0){var B=g?Pm(c,g):new FormData(c);wu(a,{pending:!0,data:B,method:c.method,action:f},null,B)}}else typeof f=="function"&&(E.preventDefault(),B=g?Pm(c,g):new FormData(c),wu(a,{pending:!0,data:B,method:c.method,action:f},f,B))},currentTarget:c}]})}}for(var ff=0;ff<qc.length;ff++){var hf=qc[ff],oS=hf.toLowerCase(),lS=hf[0].toUpperCase()+hf.slice(1);di(oS,"on"+lS)}di(dd,"onAnimationEnd"),di(pd,"onAnimationIteration"),di(md,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(Tv,"onTransitionRun"),di(Av,"onTransitionStart"),di(bv,"onTransitionCancel"),di(gd,"onTransitionEnd"),Je("onMouseEnter",["mouseout","mouseover"]),Je("onMouseLeave",["mouseout","mouseover"]),Je("onPointerEnter",["pointerout","pointerover"]),Je("onPointerLeave",["pointerout","pointerover"]),Ce("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ce("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ce("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ce("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ce("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ce("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(co));function Bm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var g=r.length-1;0<=g;g--){var E=r[g],B=E.instance,J=E.currentTarget;if(E=E.listener,B!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=J;try{f(c)}catch(ht){Vo(ht)}c.currentTarget=null,f=B}else for(g=0;g<r.length;g++){if(E=r[g],B=E.instance,J=E.currentTarget,E=E.listener,B!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=J;try{f(c)}catch(ht){Vo(ht)}c.currentTarget=null,f=B}}}}function ge(t,n){var a=n[Rs];a===void 0&&(a=n[Rs]=new Set);var r=t+"__bubble";a.has(r)||(Im(n,t,2,!1),a.add(r))}function df(t,n,a){var r=0;n&&(r|=4),Im(a,t,r,n)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function pf(t){if(!t[Cl]){t[Cl]=!0,ee.forEach(function(a){a!=="selectionchange"&&(cS.has(a)||df(a,!1,t),df(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Cl]||(n[Cl]=!0,df("selectionchange",!1,n))}}function Im(t,n,a,r){switch(dg(n)){case 2:var c=BS;break;case 8:c=IS;break;default:c=wf}a=c.bind(null,n,a,t),c=void 0,!Nc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function mf(t,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var E=r.stateNode.containerInfo;if(E===c)break;if(g===4)for(g=r.return;g!==null;){var B=g.tag;if((B===3||B===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;E!==null;){if(g=Ot(E),g===null)return;if(B=g.tag,B===5||B===6||B===26||B===27){r=f=g;continue t}E=E.parentNode}}r=r.return}kh(function(){var J=f,ht=Dc(a),gt=[];t:{var tt=_d.get(t);if(tt!==void 0){var st=Fo,Ht=t;switch(t){case"keypress":if(Bo(a)===0)break t;case"keydown":case"keyup":st=nv;break;case"focusin":Ht="focus",st=Bc;break;case"focusout":Ht="blur",st=Bc;break;case"beforeblur":case"afterblur":st=Bc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=qh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=X0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=rv;break;case dd:case pd:case md:st=Y0;break;case gd:st=ov;break;case"scroll":case"scrollend":st=V0;break;case"wheel":st=cv;break;case"copy":case"cut":case"paste":st=Z0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=jh;break;case"toggle":case"beforetoggle":st=fv}var te=(n&4)!==0,Pe=!te&&(t==="scroll"||t==="scrollend"),W=te?tt!==null?tt+"Capture":null:tt;te=[];for(var H=J,K;H!==null;){var dt=H;if(K=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||K===null||W===null||(dt=Ds(H,W),dt!=null&&te.push(uo(H,dt,K))),Pe)break;H=H.return}0<te.length&&(tt=new st(tt,Ht,null,a,ht),gt.push({event:tt,listeners:te}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",st=t==="mouseout"||t==="pointerout",tt&&a!==Uc&&(Ht=a.relatedTarget||a.fromElement)&&(Ot(Ht)||Ht[aa]))break t;if((st||tt)&&(tt=ht.window===ht?ht:(tt=ht.ownerDocument)?tt.defaultView||tt.parentWindow:window,st?(Ht=a.relatedTarget||a.toElement,st=J,Ht=Ht?Ot(Ht):null,Ht!==null&&(Pe=u(Ht),te=Ht.tag,Ht!==Pe||te!==5&&te!==27&&te!==6)&&(Ht=null)):(st=null,Ht=J),st!==Ht)){if(te=qh,dt="onMouseLeave",W="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(te=jh,dt="onPointerLeave",W="onPointerEnter",H="pointer"),Pe=st==null?tt:Kt(st),K=Ht==null?tt:Kt(Ht),tt=new te(dt,H+"leave",st,a,ht),tt.target=Pe,tt.relatedTarget=K,dt=null,Ot(ht)===J&&(te=new te(W,H+"enter",Ht,a,ht),te.target=K,te.relatedTarget=Pe,dt=te),Pe=dt,st&&Ht)e:{for(te=uS,W=st,H=Ht,K=0,dt=W;dt;dt=te(dt))K++;dt=0;for(var Zt=H;Zt;Zt=te(Zt))dt++;for(;0<K-dt;)W=te(W),K--;for(;0<dt-K;)H=te(H),dt--;for(;K--;){if(W===H||H!==null&&W===H.alternate){te=W;break e}W=te(W),H=te(H)}te=null}else te=null;st!==null&&Fm(gt,tt,st,te,!1),Ht!==null&&Pe!==null&&Fm(gt,Pe,Ht,te,!0)}}t:{if(tt=J?Kt(J):window,st=tt.nodeName&&tt.nodeName.toLowerCase(),st==="select"||st==="input"&&tt.type==="file")var Me=nd;else if(td(tt))if(id)Me=xv;else{Me=Sv;var kt=vv}else st=tt.nodeName,!st||st.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?J&&wc(J.elementType)&&(Me=nd):Me=yv;if(Me&&(Me=Me(t,J))){ed(gt,Me,a,ht);break t}kt&&kt(t,tt,J),t==="focusout"&&J&&tt.type==="number"&&J.memoizedProps.value!=null&&Cc(tt,"number",tt.value)}switch(kt=J?Kt(J):window,t){case"focusin":(td(kt)||kt.contentEditable==="true")&&(Tr=kt,kc=J,Fs=null);break;case"focusout":Fs=kc=Tr=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,fd(gt,a,ht);break;case"selectionchange":if(Ev)break;case"keydown":case"keyup":fd(gt,a,ht)}var le;if(Fc)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Er?Jh(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Zh&&a.locale!=="ko"&&(Er||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Er&&(le=Xh()):(la=ht,Oc="value"in la?la.value:la.textContent,Er=!0)),kt=wl(J,ve),0<kt.length&&(ve=new Yh(ve,t,null,a,ht),gt.push({event:ve,listeners:kt}),le?ve.data=le:(le=$h(a),le!==null&&(ve.data=le)))),(le=dv?pv(t,a):mv(t,a))&&(ve=wl(J,"onBeforeInput"),0<ve.length&&(kt=new Yh("onBeforeInput","beforeinput",null,a,ht),gt.push({event:kt,listeners:ve}),kt.data=le)),sS(gt,t,J,a,ht)}Bm(gt,n)})}function uo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function wl(t,n){for(var a=n+"Capture",r=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ds(t,a),c!=null&&r.unshift(uo(t,c,f)),c=Ds(t,n),c!=null&&r.push(uo(t,c,f))),t.tag===3)return r;t=t.return}return[]}function uS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Fm(t,n,a,r,c){for(var f=n._reactName,g=[];a!==null&&a!==r;){var E=a,B=E.alternate,J=E.stateNode;if(E=E.tag,B!==null&&B===r)break;E!==5&&E!==26&&E!==27||J===null||(B=J,c?(J=Ds(a,f),J!=null&&g.unshift(uo(a,J,B))):c||(J=Ds(a,f),J!=null&&g.push(uo(a,J,B)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var fS=/\r\n?/g,hS=/\u0000|\uFFFD/g;function Hm(t){return(typeof t=="string"?t:""+t).replace(fS,`
`).replace(hS,"")}function Gm(t,n){return n=Hm(n),Hm(t)===n}function ze(t,n,a,r,c,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||yr(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&yr(t,""+r);break;case"className":Ie(t,"class",r);break;case"tabIndex":Ie(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(t,a,r);break;case"style":Gh(t,r,f);break;case"data":if(n!=="object"){Ie(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=zo(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ze(t,n,"name",c.name,c,null),ze(t,n,"formEncType",c.formEncType,c,null),ze(t,n,"formMethod",c.formMethod,c,null),ze(t,n,"formTarget",c.formTarget,c,null)):(ze(t,n,"encType",c.encType,c,null),ze(t,n,"method",c.method,c,null),ze(t,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=zo(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Di);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=zo(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ge("beforetoggle",t),ge("toggle",t),ra(t,"popover",r);break;case"xlinkActuate":pn(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":pn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":pn(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":pn(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":pn(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":pn(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":pn(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":pn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":pn(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ra(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=H0.get(a)||a,ra(t,a,r))}}function gf(t,n,a,r,c,f){switch(a){case"style":Gh(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?yr(t,r):(typeof r=="number"||typeof r=="bigint")&&yr(t,""+r);break;case"onScroll":r!=null&&ge("scroll",t);break;case"onScrollEnd":r!=null&&ge("scrollend",t);break;case"onClick":r!=null&&(t.onclick=Di);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ne.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[xn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,c);break t}a in t?t[a]=r:r===!0?t.setAttribute(a,""):ra(t,a,r)}}}function vn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(t,n,f,g,a,null)}}c&&ze(t,n,"srcSet",a.srcSet,a,null),r&&ze(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var E=f=g=c=null,B=null,J=null;for(r in a)if(a.hasOwnProperty(r)){var ht=a[r];if(ht!=null)switch(r){case"name":c=ht;break;case"type":g=ht;break;case"checked":B=ht;break;case"defaultChecked":J=ht;break;case"value":f=ht;break;case"defaultValue":E=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:ze(t,n,r,ht,a,null)}}Us(t,f,E,B,J,g,c,!1);return;case"select":ge("invalid",t),r=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":r=E;default:ze(t,n,c,E,a,null)}n=f,a=g,t.multiple=!!r,n!=null?Sr(t,!!r,n,!1):a!=null&&Sr(t,!!r,a,!0);return;case"textarea":ge("invalid",t),f=c=r=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":r=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:ze(t,n,g,E,a,null)}Fh(t,r,c,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:ze(t,n,B,r,a,null)}return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(r=0;r<co.length;r++)ge(co[r],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(r=a[J],r!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:ze(t,n,J,r,a,null)}return;default:if(wc(n)){for(ht in a)a.hasOwnProperty(ht)&&(r=a[ht],r!==void 0&&gf(t,n,ht,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&ze(t,n,E,r,a,null))}function dS(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,E=null,B=null,J=null,ht=null;for(st in a){var gt=a[st];if(a.hasOwnProperty(st)&&gt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":B=gt;default:r.hasOwnProperty(st)||ze(t,n,st,null,r,gt)}}for(var tt in r){var st=r[tt];if(gt=a[tt],r.hasOwnProperty(tt)&&(st!=null||gt!=null))switch(tt){case"type":f=st;break;case"name":c=st;break;case"checked":J=st;break;case"defaultChecked":ht=st;break;case"value":g=st;break;case"defaultValue":E=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,n));break;default:st!==gt&&ze(t,n,tt,st,r,gt)}}ws(t,g,E,B,J,ht,f,c);return;case"select":st=g=E=tt=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":st=B;default:r.hasOwnProperty(f)||ze(t,n,f,null,r,B)}for(c in r)if(f=r[c],B=a[c],r.hasOwnProperty(c)&&(f!=null||B!=null))switch(c){case"value":tt=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==B&&ze(t,n,c,f,r,B)}n=E,a=g,r=st,tt!=null?Sr(t,!!a,tt,!1):!!r!=!!a&&(n!=null?Sr(t,!!a,n,!0):Sr(t,!!a,a?[]:"",!1));return;case"textarea":st=tt=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:ze(t,n,E,null,r,c)}for(g in r)if(c=r[g],f=a[g],r.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":tt=c;break;case"defaultValue":st=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&ze(t,n,g,c,r,f)}Ih(t,tt,st);return;case"option":for(var Ht in a)if(tt=a[Ht],a.hasOwnProperty(Ht)&&tt!=null&&!r.hasOwnProperty(Ht))switch(Ht){case"selected":t.selected=!1;break;default:ze(t,n,Ht,null,r,tt)}for(B in r)if(tt=r[B],st=a[B],r.hasOwnProperty(B)&&tt!==st&&(tt!=null||st!=null))switch(B){case"selected":t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:ze(t,n,B,tt,r,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)tt=a[te],a.hasOwnProperty(te)&&tt!=null&&!r.hasOwnProperty(te)&&ze(t,n,te,null,r,tt);for(J in r)if(tt=r[J],st=a[J],r.hasOwnProperty(J)&&tt!==st&&(tt!=null||st!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:ze(t,n,J,tt,r,st)}return;default:if(wc(n)){for(var Pe in a)tt=a[Pe],a.hasOwnProperty(Pe)&&tt!==void 0&&!r.hasOwnProperty(Pe)&&gf(t,n,Pe,void 0,r,tt);for(ht in r)tt=r[ht],st=a[ht],!r.hasOwnProperty(ht)||tt===st||tt===void 0&&st===void 0||gf(t,n,ht,tt,r,st);return}}for(var W in a)tt=a[W],a.hasOwnProperty(W)&&tt!=null&&!r.hasOwnProperty(W)&&ze(t,n,W,null,r,tt);for(gt in r)tt=r[gt],st=a[gt],!r.hasOwnProperty(gt)||tt===st||tt==null&&st==null||ze(t,n,gt,tt,r,st)}function Vm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function pS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,g=c.initiatorType,E=c.duration;if(f&&E&&Vm(g)){for(g=0,E=c.responseEnd,r+=1;r<a.length;r++){var B=a[r],J=B.startTime;if(J>E)break;var ht=B.transferSize,gt=B.initiatorType;ht&&Vm(gt)&&(B=B.responseEnd,g+=ht*(B<E?1:(E-J)/(B-J)))}if(--r,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var _f=null,vf=null;function Ul(t){return t.nodeType===9?t:t.ownerDocument}function km(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Sf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yf=null;function mS(){var t=window.event;return t&&t.type==="popstate"?t===yf?!1:(yf=t,!0):(yf=null,!1)}var Wm=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,qm=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof qm<"u"?function(t){return qm.resolve(null).then(t).catch(vS)}:Wm;function vS(t){setTimeout(function(){throw t})}function Aa(t){return t==="head"}function Ym(t,n){var a=n,r=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(c),Qr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")fo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,fo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[rt]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&fo(t.ownerDocument.body);a=c}while(a);Qr(n)}function jm(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function xf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xf(a),it(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function SS(t,n,a,r){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[rt])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=si(t.nextSibling),t===null)break}return null}function yS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=si(t.nextSibling),t===null))return null;return t}function Zm(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=si(t.nextSibling),t===null))return null;return t}function Mf(t){return t.data==="$?"||t.data==="$~"}function Ef(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function xS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Tf=null;function Km(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Qm(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Jm(t,n,a){switch(n=Ul(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function fo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);it(t)}var oi=new Map,$m=new Set;function Dl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Yi=q.d;q.d={f:MS,r:ES,D:TS,C:AS,L:bS,m:RS,X:wS,S:CS,M:US};function MS(){var t=Yi.f(),n=Ml();return t||n}function ES(t){var n=Vt(t);n!==null&&n.tag===5&&n.type==="form"?gp(n):Yi.r(t)}var jr=typeof document>"u"?null:document;function tg(t,n,a){var r=jr;if(r&&typeof n=="string"&&n){var c=Mn(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),$m.has(c)||($m.add(c),t={rel:t,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),vn(n,"link",t),Wt(n),r.head.appendChild(n)))}}function TS(t){Yi.D(t),tg("dns-prefetch",t,null)}function AS(t,n){Yi.C(t,n),tg("preconnect",t,n)}function bS(t,n,a){Yi.L(t,n,a);var r=jr;if(r&&t&&n){var c='link[rel="preload"][as="'+Mn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Mn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Mn(a.imageSizes)+'"]')):c+='[href="'+Mn(t)+'"]';var f=c;switch(n){case"style":f=Zr(t);break;case"script":f=Kr(t)}oi.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),oi.set(f,t),r.querySelector(c)!==null||n==="style"&&r.querySelector(ho(f))||n==="script"&&r.querySelector(po(f))||(n=r.createElement("link"),vn(n,"link",t),Wt(n),r.head.appendChild(n)))}}function RS(t,n){Yi.m(t,n);var a=jr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Mn(r)+'"][href="'+Mn(t)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Kr(t)}if(!oi.has(f)&&(t=S({rel:"modulepreload",href:t},n),oi.set(f,t),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(po(f)))return}r=a.createElement("link"),vn(r,"link",t),Wt(r),a.head.appendChild(r)}}}function CS(t,n,a){Yi.S(t,n,a);var r=jr;if(r&&t){var c=Qt(r).hoistableStyles,f=Zr(t);n=n||"default";var g=c.get(f);if(!g){var E={loading:0,preload:null};if(g=r.querySelector(ho(f)))E.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=oi.get(f))&&Af(t,a);var B=g=r.createElement("link");Wt(B),vn(B,"link",t),B._p=new Promise(function(J,ht){B.onload=J,B.onerror=ht}),B.addEventListener("load",function(){E.loading|=1}),B.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Ll(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:E},c.set(f,g)}}}function wS(t,n){Yi.X(t,n);var a=jr;if(a&&t){var r=Qt(a).hoistableScripts,c=Kr(t),f=r.get(c);f||(f=a.querySelector(po(c)),f||(t=S({src:t,async:!0},n),(n=oi.get(c))&&bf(t,n),f=a.createElement("script"),Wt(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function US(t,n){Yi.M(t,n);var a=jr;if(a&&t){var r=Qt(a).hoistableScripts,c=Kr(t),f=r.get(c);f||(f=a.querySelector(po(c)),f||(t=S({src:t,async:!0,type:"module"},n),(n=oi.get(c))&&bf(t,n),f=a.createElement("script"),Wt(f),vn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function eg(t,n,a,r){var c=(c=Mt.current)?Dl(c):null;if(!c)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Zr(a.href),a=Qt(c).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Zr(a.href);var f=Qt(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(ho(t)))&&!f._p&&(g.instance=f,g.state.loading=5),oi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oi.set(t,a),f||DS(c,t,a,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Kr(a),a=Qt(c).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Zr(t){return'href="'+Mn(t)+'"'}function ho(t){return'link[rel="stylesheet"]['+t+"]"}function ng(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function DS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),vn(n,"link",a),Wt(n),t.head.appendChild(n))}function Kr(t){return'[src="'+Mn(t)+'"]'}function po(t){return"script[async]"+t}function ig(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+Mn(a.href)+'"]');if(r)return n.instance=r,Wt(r),r;var c=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Wt(r),vn(r,"style",c),Ll(r,a.precedence,t),n.instance=r;case"stylesheet":c=Zr(a.href);var f=t.querySelector(ho(c));if(f)return n.state.loading|=4,n.instance=f,Wt(f),f;r=ng(a),(c=oi.get(c))&&Af(r,c),f=(t.ownerDocument||t).createElement("link"),Wt(f);var g=f;return g._p=new Promise(function(E,B){g.onload=E,g.onerror=B}),vn(f,"link",r),n.state.loading|=4,Ll(f,a.precedence,t),n.instance=f;case"script":return f=Kr(a.src),(c=t.querySelector(po(f)))?(n.instance=c,Wt(c),c):(r=a,(c=oi.get(f))&&(r=S({},a),bf(r,c)),t=t.ownerDocument||t,c=t.createElement("script"),Wt(c),vn(c,"link",r),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ll(r,a.precedence,t));return n.instance}function Ll(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,g=0;g<r.length;g++){var E=r[g];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Af(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Nl=null;function ag(t,n,a){if(Nl===null){var r=new Map,c=Nl=new Map;c.set(a,r)}else c=Nl,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[rt]||f[Qe]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var E=r.get(g);E?E.push(f):r.set(g,[f])}}return r}function rg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function LS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function sg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function NS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Zr(r.href),f=n.querySelector(ho(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ol.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Wt(f);return}f=n.ownerDocument||n,r=ng(r),(c=oi.get(c))&&Af(r,c),f=f.createElement("link"),Wt(f);var g=f;g._p=new Promise(function(E,B){g.onload=E,g.onerror=B}),vn(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ol.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Rf=0;function OS(t,n){return t.stylesheets&&t.count===0&&Pl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Pl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Rf===0&&(Rf=62500*pS());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Pl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Rf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function Ol(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Pl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var zl=null;function Pl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,zl=new Map,n.forEach(zS,t),zl=null,Ol.call(t))}function zS(t,n){if(!(n.state.loading&4)){var a=zl.get(t);if(a)var r=a.get(null);else{a=new Map,zl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||r,f===r&&a.set(null,c),a.set(g,c),this.count++,r=Ol.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var mo={$$typeof:R,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function PS(t,n,a,r,c,f,g,E,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=We(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=We(0),this.hiddenUpdates=We(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function og(t,n,a,r,c,f,g,E,B,J,ht,gt){return t=new PS(t,n,a,g,B,J,ht,gt,E),n=1,f===!0&&(n|=24),f=kn(3,null,null,n),t.current=f,f.stateNode=t,n=ru(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},cu(f),t}function lg(t){return t?(t=Rr,t):Rr}function cg(t,n,a,r,c,f){c=lg(c),r.context===null?r.context=c:r.pendingContext=c,r=pa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ma(t,r,n),a!==null&&(Pn(a,t,n),qs(a,t,n))}function ug(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Cf(t,n){ug(t,n),(t=t.alternate)&&ug(t,n)}function fg(t){if(t.tag===13||t.tag===31){var n=qa(t,67108864);n!==null&&Pn(n,t,67108864),Cf(t,67108864)}}function hg(t){if(t.tag===13||t.tag===31){var n=jn();n=As(n);var a=qa(t,n);a!==null&&Pn(a,t,n),Cf(t,n)}}var Bl=!0;function BS(t,n,a,r){var c=P.T;P.T=null;var f=q.p;try{q.p=2,wf(t,n,a,r)}finally{q.p=f,P.T=c}}function IS(t,n,a,r){var c=P.T;P.T=null;var f=q.p;try{q.p=8,wf(t,n,a,r)}finally{q.p=f,P.T=c}}function wf(t,n,a,r){if(Bl){var c=Uf(r);if(c===null)mf(t,n,r,Il,a),pg(t,r);else if(HS(c,t,n,a,r))r.stopPropagation();else if(pg(t,r),n&4&&-1<FS.indexOf(t)){for(;c!==null;){var f=Vt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=Rt(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var B=1<<31-Bt(g);E.entanglements[1]|=B,g&=~B}wi(f),(Ae&6)===0&&(yl=vt()+500,lo(0))}}break;case 31:case 13:E=qa(f,2),E!==null&&Pn(E,f,2),Ml(),Cf(f,2)}if(f=Uf(r),f===null&&mf(t,n,r,Il,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else mf(t,n,r,null,a)}}function Uf(t){return t=Dc(t),Df(t)}var Il=null;function Df(t){if(Il=null,t=Ot(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Il=t,null}function dg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gt()){case wt:return 2;case It:return 8;case Yt:case ae:return 32;case yt:return 268435456;default:return 32}default:return 32}}var Lf=!1,ba=null,Ra=null,Ca=null,go=new Map,_o=new Map,wa=[],FS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function pg(t,n){switch(t){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":Ra=null;break;case"mouseover":case"mouseout":Ca=null;break;case"pointerover":case"pointerout":go.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(n.pointerId)}}function vo(t,n,a,r,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Vt(n),n!==null&&fg(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function HS(t,n,a,r,c){switch(n){case"focusin":return ba=vo(ba,t,n,a,r,c),!0;case"dragenter":return Ra=vo(Ra,t,n,a,r,c),!0;case"mouseover":return Ca=vo(Ca,t,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return go.set(f,vo(go.get(f)||null,t,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,_o.set(f,vo(_o.get(f)||null,t,n,a,r,c)),!0}return!1}function mg(t){var n=Ot(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Va(t.priority,function(){hg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Va(t.priority,function(){hg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Uf(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Uc=r,a.target.dispatchEvent(r),Uc=null}else return n=Vt(a),n!==null&&fg(n),t.blockedOn=a,!1;n.shift()}return!0}function gg(t,n,a){Fl(t)&&a.delete(n)}function GS(){Lf=!1,ba!==null&&Fl(ba)&&(ba=null),Ra!==null&&Fl(Ra)&&(Ra=null),Ca!==null&&Fl(Ca)&&(Ca=null),go.forEach(gg),_o.forEach(gg)}function Hl(t,n){t.blockedOn===n&&(t.blockedOn=null,Lf||(Lf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,GS)))}var Gl=null;function _g(t){Gl!==t&&(Gl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gl===t&&(Gl=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],c=t[n+2];if(typeof r!="function"){if(Df(r||a)===null)continue;break}var f=Vt(a);f!==null&&(t.splice(n,3),n-=3,wu(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Qr(t){function n(B){return Hl(B,t)}ba!==null&&Hl(ba,t),Ra!==null&&Hl(Ra,t),Ca!==null&&Hl(Ca,t),go.forEach(n),_o.forEach(n);for(var a=0;a<wa.length;a++){var r=wa[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<wa.length&&(a=wa[0],a.blockedOn===null);)mg(a),a.blockedOn===null&&wa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],g=c[xn]||null;if(typeof f=="function")g||_g(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[xn]||null)E=g.formAction;else if(Df(c)!==null)continue}else E=g.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),_g(a)}}}function vg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Nf(t){this._internalRoot=t}Vl.prototype.render=Nf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=jn();cg(a,r,t,n,null,null)},Vl.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;cg(t.current,2,null,t,null,null),Ml(),n[aa]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var n=bs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<wa.length&&n!==0&&n<wa[a].priority;a++);wa.splice(a,0,t),a===0&&mg(t)}};var Sg=e.version;if(Sg!=="19.2.8")throw Error(s(527,Sg,"19.2.8"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var VS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{zt=kl.inject(VS),bt=kl}catch{}}return yo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",c=bp,f=Rp,g=Cp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=og(t,1,!1,null,null,a,r,null,c,f,g,vg),t[aa]=n.current,pf(t),new Nf(n)},yo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,c="",f=bp,g=Rp,E=Cp,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=og(t,1,!0,n,a??null,r,c,B,f,g,E,vg),n.context=lg(null),a=n.current,r=jn(),r=As(r),c=pa(r),c.callback=null,ma(a,c,r),a=r,n.current.lanes=a,je(n,a),wi(n),t[aa]=n.current,pf(t),new Vl(n)},yo.version="19.2.8",yo}var wg;function $S(){if(wg)return Pf.exports;wg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Pf.exports=JS(),Pf.exports}var ty=$S();const ey=n0(ty);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dh="160",ny=0,Ug=1,iy=2,i0=1,ay=2,$i=3,Ga=0,Fn=1,ta=2,Ia=0,gs=1,vh=2,Dg=3,Lg=4,ry=5,fr=100,sy=101,oy=102,Ng=103,Og=104,ly=200,cy=201,uy=202,fy=203,Sh=204,yh=205,hy=206,dy=207,py=208,my=209,gy=210,_y=211,vy=212,Sy=213,yy=214,xy=0,My=1,Ey=2,gc=3,Ty=4,Ay=5,by=6,Ry=7,a0=0,Cy=1,wy=2,Fa=0,Uy=1,Dy=2,Ly=3,Ny=4,Oy=5,zy=6,r0=300,vs=301,Ss=302,xh=303,Mh=304,Ec=306,Eh=1e3,yi=1001,Th=1002,wn=1003,zg=1004,Hf=1005,ci=1006,Py=1007,Co=1008,Ha=1009,By=1010,Iy=1011,Lh=1012,s0=1013,Pa=1014,Ba=1015,wo=1016,o0=1017,l0=1018,dr=1020,Fy=1021,xi=1023,Hy=1024,Gy=1025,pr=1026,ys=1027,Vy=1028,c0=1029,ky=1030,u0=1031,f0=1033,Gf=33776,Vf=33777,kf=33778,Xf=33779,Pg=35840,Bg=35841,Ig=35842,Fg=35843,h0=36196,Hg=37492,Gg=37496,Vg=37808,kg=37809,Xg=37810,Wg=37811,qg=37812,Yg=37813,jg=37814,Zg=37815,Kg=37816,Qg=37817,Jg=37818,$g=37819,t_=37820,e_=37821,Wf=36492,n_=36494,i_=36495,Xy=36283,a_=36284,r_=36285,s_=36286,d0=3e3,mr=3001,Wy=3200,qy=3201,Yy=0,jy=1,fi="",Sn="srgb",na="srgb-linear",Nh="display-p3",Tc="display-p3-linear",_c="linear",ke="srgb",vc="rec709",Sc="p3",Jr=7680,o_=519,Zy=512,Ky=513,Qy=514,p0=515,Jy=516,$y=517,tx=518,ex=519,l_=35044,c_="300 es",Ah=1035,ea=2e3,yc=2001;class Ms{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qf=Math.PI/180,bh=180/Math.PI;function Uo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Tn[o&255]+Tn[o>>8&255]+Tn[o>>16&255]+Tn[o>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[i&63|128]+Tn[i>>8&255]+"-"+Tn[i>>16&255]+Tn[i>>24&255]+Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]).toLowerCase()}function In(o,e,i){return Math.max(e,Math.min(i,o))}function nx(o,e){return(o%e+e)%e}function Yf(o,e,i){return(1-i)*o+i*e}function u_(o){return(o&o-1)===0&&o!==0}function Rh(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function xo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class be{constructor(e=0,i=0){be.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(In(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*s-d*l+e.x,this.y=u*l+d*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class de{constructor(e,i,s,l,u,d,h,m,p){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,m,p)}set(e,i,s,l,u,d,h,m,p){const _=this.elements;return _[0]=e,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=s,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],_=s[4],S=s[7],y=s[2],M=s[5],A=s[8],T=l[0],x=l[3],v=l[6],L=l[1],R=l[4],O=l[7],X=l[2],I=l[5],z=l[8];return u[0]=d*T+h*L+m*X,u[3]=d*x+h*R+m*I,u[6]=d*v+h*O+m*z,u[1]=p*T+_*L+S*X,u[4]=p*x+_*R+S*I,u[7]=p*v+_*O+S*z,u[2]=y*T+M*L+A*X,u[5]=y*x+M*R+A*I,u[8]=y*v+M*O+A*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8];return i*d*_-i*h*p-s*u*_+s*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],S=_*d-h*p,y=h*m-_*u,M=p*u-d*m,A=i*S+s*y+l*M;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=S*T,e[1]=(l*p-_*s)*T,e[2]=(h*s-l*d)*T,e[3]=y*T,e[4]=(_*i-l*m)*T,e[5]=(l*u-h*i)*T,e[6]=M*T,e[7]=(s*m-p*i)*T,e[8]=(d*i-s*u)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(jf.makeScale(e,i)),this}rotate(e){return this.premultiply(jf.makeRotation(-e)),this}translate(e,i){return this.premultiply(jf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jf=new de;function m0(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function xc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ix(){const o=xc("canvas");return o.style.display="block",o}const f_={};function bo(o){o in f_||(f_[o]=!0,console.warn(o))}const h_=new de().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),d_=new de().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Xl={[na]:{transfer:_c,primaries:vc,toReference:o=>o,fromReference:o=>o},[Sn]:{transfer:ke,primaries:vc,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Tc]:{transfer:_c,primaries:Sc,toReference:o=>o.applyMatrix3(d_),fromReference:o=>o.applyMatrix3(h_)},[Nh]:{transfer:ke,primaries:Sc,toReference:o=>o.convertSRGBToLinear().applyMatrix3(d_),fromReference:o=>o.applyMatrix3(h_).convertLinearToSRGB()}},ax=new Set([na,Tc]),Be={enabled:!0,_workingColorSpace:na,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!ax.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const s=Xl[e].toReference,l=Xl[i].fromReference;return l(s(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Xl[o].primaries},getTransfer:function(o){return o===fi?_c:Xl[o].transfer}};function _s(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Zf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let $r;class g0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$r===void 0&&($r=xc("canvas")),$r.width=e.width,$r.height=e.height;const s=$r.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=$r}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=xc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=_s(u[d]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(_s(i[s]/255)*255):i[s]=_s(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rx=0;class _0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=Uo(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Kf(l[d].image)):u.push(Kf(l[d]))}else u=Kf(l);s.url=u}return i||(e.images[this.uuid]=s),s}}function Kf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?g0.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sx=0;class Qn extends Ms{constructor(e=Qn.DEFAULT_IMAGE,i=Qn.DEFAULT_MAPPING,s=yi,l=yi,u=ci,d=Co,h=xi,m=Ha,p=Qn.DEFAULT_ANISOTROPY,_=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=Uo(),this.name="",this.source=new _0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof _=="string"?this.colorSpace=_:(bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=_===mr?Sn:fi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==r0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eh:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case Th:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eh:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case Th:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Sn?mr:d0}set encoding(e){bo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===mr?Sn:fi}}Qn.DEFAULT_IMAGE=null;Qn.DEFAULT_MAPPING=r0;Qn.DEFAULT_ANISOTROPY=1;class yn{constructor(e=0,i=0,s=0,l=1){yn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,u;const m=e.elements,p=m[0],_=m[4],S=m[8],y=m[1],M=m[5],A=m[9],T=m[2],x=m[6],v=m[10];if(Math.abs(_-y)<.01&&Math.abs(S-T)<.01&&Math.abs(A-x)<.01){if(Math.abs(_+y)<.1&&Math.abs(S+T)<.1&&Math.abs(A+x)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const R=(p+1)/2,O=(M+1)/2,X=(v+1)/2,I=(_+y)/4,z=(S+T)/4,lt=(A+x)/4;return R>O&&R>X?R<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(R),l=I/s,u=z/s):O>X?O<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(O),s=I/l,u=lt/l):X<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(X),s=z/u,l=lt/u),this.set(s,l,u,i),this}let L=Math.sqrt((x-A)*(x-A)+(S-T)*(S-T)+(y-_)*(y-_));return Math.abs(L)<.001&&(L=1),this.x=(x-A)/L,this.y=(S-T)/L,this.z=(y-_)/L,this.w=Math.acos((p+M+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ox extends Ms{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new yn(0,0,e,i),this.scissorTest=!1,this.viewport=new yn(0,0,e,i);const l={width:e,height:i,depth:1};s.encoding!==void 0&&(bo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),s.colorSpace=s.encoding===mr?Sn:fi),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},s),this.texture=new Qn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=s.generateMipmaps,this.texture.internalFormat=s.internalFormat,this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}setSize(e,i,s=1){(this.width!==e||this.height!==i||this.depth!==s)&&(this.width=e,this.height=i,this.depth=s,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=s,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new _0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends ox{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class v0 extends Qn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lx extends Qn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Do{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,u,d,h){let m=s[l+0],p=s[l+1],_=s[l+2],S=s[l+3];const y=u[d+0],M=u[d+1],A=u[d+2],T=u[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=_,e[i+3]=S;return}if(h===1){e[i+0]=y,e[i+1]=M,e[i+2]=A,e[i+3]=T;return}if(S!==T||m!==y||p!==M||_!==A){let x=1-h;const v=m*y+p*M+_*A+S*T,L=v>=0?1:-1,R=1-v*v;if(R>Number.EPSILON){const X=Math.sqrt(R),I=Math.atan2(X,v*L);x=Math.sin(x*I)/X,h=Math.sin(h*I)/X}const O=h*L;if(m=m*x+y*O,p=p*x+M*O,_=_*x+A*O,S=S*x+T*O,x===1-h){const X=1/Math.sqrt(m*m+p*p+_*_+S*S);m*=X,p*=X,_*=X,S*=X}}e[i]=m,e[i+1]=p,e[i+2]=_,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,u,d){const h=s[l],m=s[l+1],p=s[l+2],_=s[l+3],S=u[d],y=u[d+1],M=u[d+2],A=u[d+3];return e[i]=h*A+_*S+m*M-p*y,e[i+1]=m*A+_*y+p*S-h*M,e[i+2]=p*A+_*M+h*y-m*S,e[i+3]=_*A-h*S-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(s/2),_=h(l/2),S=h(u/2),y=m(s/2),M=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=y*_*S+p*M*A,this._y=p*M*S-y*_*A,this._z=p*_*A+y*M*S,this._w=p*_*S-y*M*A;break;case"YXZ":this._x=y*_*S+p*M*A,this._y=p*M*S-y*_*A,this._z=p*_*A-y*M*S,this._w=p*_*S+y*M*A;break;case"ZXY":this._x=y*_*S-p*M*A,this._y=p*M*S+y*_*A,this._z=p*_*A+y*M*S,this._w=p*_*S-y*M*A;break;case"ZYX":this._x=y*_*S-p*M*A,this._y=p*M*S+y*_*A,this._z=p*_*A-y*M*S,this._w=p*_*S+y*M*A;break;case"YZX":this._x=y*_*S+p*M*A,this._y=p*M*S+y*_*A,this._z=p*_*A-y*M*S,this._w=p*_*S-y*M*A;break;case"XZY":this._x=y*_*S-p*M*A,this._y=p*M*S-y*_*A,this._z=p*_*A+y*M*S,this._w=p*_*S+y*M*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],S=i[10],y=s+h+S;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(d-l)*M}else if(s>h&&s>S){const M=2*Math.sqrt(1+s-h-S);this._w=(_-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(u+p)/M}else if(h>S){const M=2*Math.sqrt(1+h-s-S);this._w=(u-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+S-s-h);this._w=(d-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=s*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-s*p,this._z=u*_+d*p+s*m-l*h,this._w=d*_-s*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,u=this._z,d=this._w;let h=d*e._w+s*e._x+l*e._y+u*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=s,this._y=l,this._z=u,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,h),S=Math.sin((1-i)*_)/p,y=Math.sin(i*_)/p;return this._w=d*S+this._w*y,this._x=s*S+this._x*y,this._y=l*S+this._y*y,this._z=u*S+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=Math.random(),i=Math.sqrt(1-e),s=Math.sqrt(e),l=2*Math.PI*Math.random(),u=2*Math.PI*Math.random();return this.set(i*Math.cos(l),s*Math.sin(u),s*Math.cos(u),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(e=0,i=0,s=0){nt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(p_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(p_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*s),_=2*(h*i-u*l),S=2*(u*s-d*i);return this.x=i+m*p+d*S-h*_,this.y=s+m*_+h*p-u*S,this.z=l+m*S+u*_-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-s*m,this.z=s*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Qf.copy(this).projectOnVector(e),this.sub(Qf)}reflect(e){return this.sub(Qf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(In(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,s=Math.sqrt(1-e**2);return this.x=s*Math.cos(i),this.y=s*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new nt,p_=new Do;class Lo{constructor(e=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,gi):gi.fromBufferAttribute(u,d),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Wl.copy(s.boundingBox)),Wl.applyMatrix4(e.matrixWorld),this.union(Wl)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),ql.subVectors(this.max,Mo),ts.subVectors(e.a,Mo),es.subVectors(e.b,Mo),ns.subVectors(e.c,Mo),Da.subVectors(es,ts),La.subVectors(ns,es),rr.subVectors(ts,ns);let i=[0,-Da.z,Da.y,0,-La.z,La.y,0,-rr.z,rr.y,Da.z,0,-Da.x,La.z,0,-La.x,rr.z,0,-rr.x,-Da.y,Da.x,0,-La.y,La.x,0,-rr.y,rr.x,0];return!Jf(i,ts,es,ns,ql)||(i=[1,0,0,0,1,0,0,0,1],!Jf(i,ts,es,ns,ql))?!1:(Yl.crossVectors(Da,La),i=[Yl.x,Yl.y,Yl.z],Jf(i,ts,es,ns,ql))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ji=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],gi=new nt,Wl=new Lo,ts=new nt,es=new nt,ns=new nt,Da=new nt,La=new nt,rr=new nt,Mo=new nt,ql=new nt,Yl=new nt,sr=new nt;function Jf(o,e,i,s,l){for(let u=0,d=o.length-3;u<=d;u+=3){sr.fromArray(o,u);const h=l.x*Math.abs(sr.x)+l.y*Math.abs(sr.y)+l.z*Math.abs(sr.z),m=e.dot(sr),p=i.dot(sr),_=s.dot(sr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const cx=new Lo,Eo=new nt,$f=new nt;class Ac{constructor(e=new nt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):cx.setFromPoints(e).getCenter(s);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,s.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);const i=Eo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Eo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add($f)),this.expandByPoint(Eo.copy(e.center).sub($f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new nt,th=new nt,jl=new nt,Na=new nt,eh=new nt,Zl=new nt,nh=new nt;class S0{constructor(e=new nt,i=new nt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Zi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){th.copy(e).add(i).multiplyScalar(.5),jl.copy(i).sub(e).normalize(),Na.copy(this.origin).sub(th);const u=e.distanceTo(i)*.5,d=-this.direction.dot(jl),h=Na.dot(this.direction),m=-Na.dot(jl),p=Na.lengthSq(),_=Math.abs(1-d*d);let S,y,M,A;if(_>0)if(S=d*m-h,y=d*h-m,A=u*_,S>=0)if(y>=-A)if(y<=A){const T=1/_;S*=T,y*=T,M=S*(S+d*y+2*h)+y*(d*S+y+2*m)+p}else y=u,S=Math.max(0,-(d*y+h)),M=-S*S+y*(y+2*m)+p;else y=-u,S=Math.max(0,-(d*y+h)),M=-S*S+y*(y+2*m)+p;else y<=-A?(S=Math.max(0,-(-d*u+h)),y=S>0?-u:Math.min(Math.max(-u,-m),u),M=-S*S+y*(y+2*m)+p):y<=A?(S=0,y=Math.min(Math.max(-u,-m),u),M=y*(y+2*m)+p):(S=Math.max(0,-(d*u+h)),y=S>0?u:Math.min(Math.max(-u,-m),u),M=-S*S+y*(y+2*m)+p);else y=d>0?-u:u,S=Math.max(0,-(d*y+h)),M=-S*S+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(th).addScaledVector(jl,y),M}intersectSphere(e,i){Zi.subVectors(e.center,this.origin);const s=Zi.dot(this.direction),l=Zi.dot(Zi)-s*s,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),_>=0?(u=(e.min.y-y.y)*_,d=(e.max.y-y.y)*_):(u=(e.max.y-y.y)*_,d=(e.min.y-y.y)*_),s>d||u>l||((u>s||isNaN(s))&&(s=u),(d<l||isNaN(l))&&(l=d),S>=0?(h=(e.min.z-y.z)*S,m=(e.max.z-y.z)*S):(h=(e.max.z-y.z)*S,m=(e.min.z-y.z)*S),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,i,s,l,u){eh.subVectors(i,e),Zl.subVectors(s,e),nh.crossVectors(eh,Zl);let d=this.direction.dot(nh),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Na.subVectors(this.origin,e);const m=h*this.direction.dot(Zl.crossVectors(Na,Zl));if(m<0)return null;const p=h*this.direction.dot(eh.cross(Na));if(p<0||m+p>d)return null;const _=-h*Na.dot(nh);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dn{constructor(e,i,s,l,u,d,h,m,p,_,S,y,M,A,T,x){dn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,u,d,h,m,p,_,S,y,M,A,T,x)}set(e,i,s,l,u,d,h,m,p,_,S,y,M,A,T,x){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=S,v[14]=y,v[3]=M,v[7]=A,v[11]=T,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/is.setFromMatrixColumn(e,0).length(),u=1/is.setFromMatrixColumn(e,1).length(),d=1/is.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,u=e.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const y=d*_,M=d*S,A=h*_,T=h*S;i[0]=m*_,i[4]=-m*S,i[8]=p,i[1]=M+A*p,i[5]=y-T*p,i[9]=-h*m,i[2]=T-y*p,i[6]=A+M*p,i[10]=d*m}else if(e.order==="YXZ"){const y=m*_,M=m*S,A=p*_,T=p*S;i[0]=y+T*h,i[4]=A*h-M,i[8]=d*p,i[1]=d*S,i[5]=d*_,i[9]=-h,i[2]=M*h-A,i[6]=T+y*h,i[10]=d*m}else if(e.order==="ZXY"){const y=m*_,M=m*S,A=p*_,T=p*S;i[0]=y-T*h,i[4]=-d*S,i[8]=A+M*h,i[1]=M+A*h,i[5]=d*_,i[9]=T-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const y=d*_,M=d*S,A=h*_,T=h*S;i[0]=m*_,i[4]=A*p-M,i[8]=y*p+T,i[1]=m*S,i[5]=T*p+y,i[9]=M*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const y=d*m,M=d*p,A=h*m,T=h*p;i[0]=m*_,i[4]=T-y*S,i[8]=A*S+M,i[1]=S,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=M*S+A,i[10]=y-T*S}else if(e.order==="XZY"){const y=d*m,M=d*p,A=h*m,T=h*p;i[0]=m*_,i[4]=-S,i[8]=p*_,i[1]=y*S+T,i[5]=d*_,i[9]=M*S-A,i[2]=A*S-M,i[6]=h*_,i[10]=T*S+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ux,e,fx)}lookAt(e,i,s){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Oa.crossVectors(s,Zn),Oa.lengthSq()===0&&(Math.abs(s.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Oa.crossVectors(s,Zn)),Oa.normalize(),Kl.crossVectors(Zn,Oa),l[0]=Oa.x,l[4]=Kl.x,l[8]=Zn.x,l[1]=Oa.y,l[5]=Kl.y,l[9]=Zn.y,l[2]=Oa.z,l[6]=Kl.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,u=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],_=s[1],S=s[5],y=s[9],M=s[13],A=s[2],T=s[6],x=s[10],v=s[14],L=s[3],R=s[7],O=s[11],X=s[15],I=l[0],z=l[4],lt=l[8],C=l[12],N=l[1],ot=l[5],ft=l[9],Et=l[13],k=l[2],et=l[6],P=l[10],q=l[14],Q=l[3],ct=l[7],ut=l[11],D=l[15];return u[0]=d*I+h*N+m*k+p*Q,u[4]=d*z+h*ot+m*et+p*ct,u[8]=d*lt+h*ft+m*P+p*ut,u[12]=d*C+h*Et+m*q+p*D,u[1]=_*I+S*N+y*k+M*Q,u[5]=_*z+S*ot+y*et+M*ct,u[9]=_*lt+S*ft+y*P+M*ut,u[13]=_*C+S*Et+y*q+M*D,u[2]=A*I+T*N+x*k+v*Q,u[6]=A*z+T*ot+x*et+v*ct,u[10]=A*lt+T*ft+x*P+v*ut,u[14]=A*C+T*Et+x*q+v*D,u[3]=L*I+R*N+O*k+X*Q,u[7]=L*z+R*ot+O*et+X*ct,u[11]=L*lt+R*ft+O*P+X*ut,u[15]=L*C+R*Et+O*q+X*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],_=e[2],S=e[6],y=e[10],M=e[14],A=e[3],T=e[7],x=e[11],v=e[15];return A*(+u*m*S-l*p*S-u*h*y+s*p*y+l*h*M-s*m*M)+T*(+i*m*M-i*p*y+u*d*y-l*d*M+l*p*_-u*m*_)+x*(+i*p*S-i*h*M-u*d*S+s*d*M+u*h*_-s*p*_)+v*(-l*h*_-i*m*S+i*h*y+l*d*S-s*d*y+s*m*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],_=e[8],S=e[9],y=e[10],M=e[11],A=e[12],T=e[13],x=e[14],v=e[15],L=S*x*p-T*y*p+T*m*M-h*x*M-S*m*v+h*y*v,R=A*y*p-_*x*p-A*m*M+d*x*M+_*m*v-d*y*v,O=_*T*p-A*S*p+A*h*M-d*T*M-_*h*v+d*S*v,X=A*S*m-_*T*m-A*h*y+d*T*y+_*h*x-d*S*x,I=i*L+s*R+l*O+u*X;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=L*z,e[1]=(T*y*u-S*x*u-T*l*M+s*x*M+S*l*v-s*y*v)*z,e[2]=(h*x*u-T*m*u+T*l*p-s*x*p-h*l*v+s*m*v)*z,e[3]=(S*m*u-h*y*u-S*l*p+s*y*p+h*l*M-s*m*M)*z,e[4]=R*z,e[5]=(_*x*u-A*y*u+A*l*M-i*x*M-_*l*v+i*y*v)*z,e[6]=(A*m*u-d*x*u-A*l*p+i*x*p+d*l*v-i*m*v)*z,e[7]=(d*y*u-_*m*u+_*l*p-i*y*p-d*l*M+i*m*M)*z,e[8]=O*z,e[9]=(A*S*u-_*T*u-A*s*M+i*T*M+_*s*v-i*S*v)*z,e[10]=(d*T*u-A*h*u+A*s*p-i*T*p-d*s*v+i*h*v)*z,e[11]=(_*h*u-d*S*u-_*s*p+i*S*p+d*s*M-i*h*M)*z,e[12]=X*z,e[13]=(_*T*l-A*S*l+A*s*y-i*T*y-_*s*x+i*S*x)*z,e[14]=(A*h*l-d*T*l-A*s*m+i*T*m+d*s*x-i*h*x)*z,e[15]=(d*S*l-_*h*l+_*s*m-i*S*m-d*s*y+i*h*y)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,u=e.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,d=e.x,h=e.y,m=e.z,p=u*d,_=u*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+s,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,u,d){return this.set(1,s,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,S=h+h,y=u*p,M=u*_,A=u*S,T=d*_,x=d*S,v=h*S,L=m*p,R=m*_,O=m*S,X=s.x,I=s.y,z=s.z;return l[0]=(1-(T+v))*X,l[1]=(M+O)*X,l[2]=(A-R)*X,l[3]=0,l[4]=(M-O)*I,l[5]=(1-(y+v))*I,l[6]=(x+L)*I,l[7]=0,l[8]=(A+R)*z,l[9]=(x-L)*z,l[10]=(1-(y+T))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let u=is.set(l[0],l[1],l[2]).length();const d=is.set(l[4],l[5],l[6]).length(),h=is.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],_i.copy(this);const p=1/u,_=1/d,S=1/h;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=_,_i.elements[5]*=_,_i.elements[6]*=_,_i.elements[8]*=S,_i.elements[9]*=S,_i.elements[10]*=S,i.setFromRotationMatrix(_i),s.x=u,s.y=d,s.z=h,this}makePerspective(e,i,s,l,u,d,h=ea){const m=this.elements,p=2*u/(i-e),_=2*u/(s-l),S=(i+e)/(i-e),y=(s+l)/(s-l);let M,A;if(h===ea)M=-(d+u)/(d-u),A=-2*d*u/(d-u);else if(h===yc)M=-d/(d-u),A=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=_,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,u,d,h=ea){const m=this.elements,p=1/(i-e),_=1/(s-l),S=1/(d-u),y=(i+e)*p,M=(s+l)*_;let A,T;if(h===ea)A=(d+u)*S,T=-2*S;else if(h===yc)A=u*S,T=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-y,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=T,m[14]=-A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const is=new nt,_i=new dn,ux=new nt(0,0,0),fx=new nt(1,1,1),Oa=new nt,Kl=new nt,Zn=new nt,m_=new dn,g_=new Do;class bc{constructor(e=0,i=0,s=0,l=bc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],S=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(In(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-In(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(In(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-In(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(In(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-In(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return m_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(m_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return g_.setFromEuler(this),this.setFromQuaternion(g_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bc.DEFAULT_ORDER="XYZ";class y0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hx=0;const __=new nt,as=new Do,Ki=new dn,Ql=new nt,To=new nt,dx=new nt,px=new Do,v_=new nt(1,0,0),S_=new nt(0,1,0),y_=new nt(0,0,1),mx={type:"added"},gx={type:"removed"};class Hn extends Ms{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Hn.DEFAULT_UP.clone();const e=new nt,i=new bc,s=new Do,l=new nt(1,1,1);function u(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new dn},normalMatrix:{value:new de}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=Hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new y0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,i){return as.setFromAxisAngle(e,i),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(v_,e)}rotateY(e){return this.rotateOnAxis(S_,e)}rotateZ(e){return this.rotateOnAxis(y_,e)}translateOnAxis(e,i){return __.copy(e).applyQuaternion(this.quaternion),this.position.add(__.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(v_,e)}translateY(e){return this.translateOnAxis(S_,e)}translateZ(e){return this.translateOnAxis(y_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Ql.copy(e):Ql.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(To,Ql,this.up):Ki.lookAt(Ql,To,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),as.setFromRotationMatrix(Ki),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mx)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(gx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,e,dx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,px,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++){const u=i[s];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++){const h=l[u];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const S=m[p];u(e.shapes,S)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),_=d(e.images),S=d(e.shapes),y=d(e.skeletons),M=d(e.animations),A=d(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),_.length>0&&(s.images=_),S.length>0&&(s.shapes=S),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),A.length>0&&(s.nodes=A)}return s.object=l,s;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Hn.DEFAULT_UP=new nt(0,1,0);Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new nt,Qi=new nt,ih=new nt,Ji=new nt,rs=new nt,ss=new nt,x_=new nt,ah=new nt,rh=new nt,sh=new nt;let Jl=!1;class Si{constructor(e=new nt,i=new nt,s=new nt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),vi.subVectors(e,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,s,l,u){vi.subVectors(l,i),Qi.subVectors(s,i),ih.subVectors(e,i);const d=vi.dot(vi),h=vi.dot(Qi),m=vi.dot(ih),p=Qi.dot(Qi),_=Qi.dot(ih),S=d*p-h*h;if(S===0)return u.set(0,0,0),null;const y=1/S,M=(p*m-h*_)*y,A=(d*_-h*m)*y;return u.set(1-M-A,A,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getUV(e,i,s,l,u,d,h,m){return Jl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jl=!0),this.getInterpolation(e,i,s,l,u,d,h,m)}static getInterpolation(e,i,s,l,u,d,h,m){return this.getBarycoord(e,i,s,l,Ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ji.x),m.addScaledVector(d,Ji.y),m.addScaledVector(h,Ji.z),m)}static isFrontFacing(e,i,s,l){return vi.subVectors(s,i),Qi.subVectors(e,i),vi.cross(Qi).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),vi.cross(Qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Si.getBarycoord(e,this.a,this.b,this.c,i)}getUV(e,i,s,l,u){return Jl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jl=!0),Si.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}getInterpolation(e,i,s,l,u){return Si.getInterpolation(e,this.a,this.b,this.c,i,s,l,u)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,u=this.c;let d,h;rs.subVectors(l,s),ss.subVectors(u,s),ah.subVectors(e,s);const m=rs.dot(ah),p=ss.dot(ah);if(m<=0&&p<=0)return i.copy(s);rh.subVectors(e,l);const _=rs.dot(rh),S=ss.dot(rh);if(_>=0&&S<=_)return i.copy(l);const y=m*S-_*p;if(y<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(s).addScaledVector(rs,d);sh.subVectors(e,u);const M=rs.dot(sh),A=ss.dot(sh);if(A>=0&&M<=A)return i.copy(u);const T=M*p-m*A;if(T<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(s).addScaledVector(ss,h);const x=_*A-M*S;if(x<=0&&S-_>=0&&M-A>=0)return x_.subVectors(u,l),h=(S-_)/(S-_+(M-A)),i.copy(l).addScaledVector(x_,h);const v=1/(x+T+y);return d=T*v,h=y*v,i.copy(s).addScaledVector(rs,d).addScaledVector(ss,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const x0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},za={h:0,s:0,l:0},$l={h:0,s:0,l:0};function oh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class De{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Be.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Be.workingColorSpace){return this.r=e,this.g=i,this.b=s,Be.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Be.workingColorSpace){if(e=nx(e,1),i=In(i,0,1),s=In(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,d=2*s-u;this.r=oh(d,u,e+1/3),this.g=oh(d,u,e),this.b=oh(d,u,e-1/3)}return Be.toWorkingColorSpace(this,l),this}setStyle(e,i=Sn){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Sn){const s=x0[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_s(e.r),this.g=_s(e.g),this.b=_s(e.b),this}copyLinearToSRGB(e){return this.r=Zf(e.r),this.g=Zf(e.g),this.b=Zf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return Be.fromWorkingColorSpace(An.copy(this),e),Math.round(In(An.r*255,0,255))*65536+Math.round(In(An.g*255,0,255))*256+Math.round(In(An.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Be.workingColorSpace){Be.fromWorkingColorSpace(An.copy(this),i);const s=An.r,l=An.g,u=An.b,d=Math.max(s,l,u),h=Math.min(s,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const S=d-h;switch(p=_<=.5?S/(d+h):S/(2-d-h),d){case s:m=(l-u)/S+(l<u?6:0);break;case l:m=(u-s)/S+2;break;case u:m=(s-l)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=_,e}getRGB(e,i=Be.workingColorSpace){return Be.fromWorkingColorSpace(An.copy(this),i),e.r=An.r,e.g=An.g,e.b=An.b,e}getStyle(e=Sn){Be.fromWorkingColorSpace(An.copy(this),e);const i=An.r,s=An.g,l=An.b;return e!==Sn?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(za),this.setHSL(za.h+e,za.s+i,za.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(za),e.getHSL($l);const s=Yf(za.h,$l.h,i),l=Yf(za.s,$l.s,i),u=Yf(za.l,$l.l,i);return this.setHSL(s,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const An=new De;De.NAMES=x0;let _x=0;class No extends Ms{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=gs,this.side=Ga,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sh,this.blendDst=yh,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=gc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=o_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(s.blending=this.blending),this.side!==Ga&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Sh&&(s.blendSrc=this.blendSrc),this.blendDst!==yh&&(s.blendDst=this.blendDst),this.blendEquation!==fr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==gc&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==o_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(s.textures=u),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ro extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=a0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new nt,tc=new be;class Ei{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=l_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ba,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)tc.fromBufferAttribute(this,i),tc.applyMatrix3(e),this.setXY(i,tc.x,tc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(e),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=xo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Bn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=xo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=xo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=xo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=xo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,u){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),s=Bn(s,this.array),l=Bn(l,this.array),u=Bn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==l_&&(e.usage=this.usage),e}}class M0 extends Ei{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class E0 extends Ei{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Jn extends Ei{constructor(e,i,s){super(new Float32Array(e),i,s)}}let vx=0;const li=new dn,lh=new Hn,os=new nt,Kn=new Lo,Ao=new Lo,hn=new nt;class Ti extends Ms{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vx++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(m0(e)?E0:M0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new de().getNormalMatrix(e);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,i,s){return li.makeTranslation(e,i,s),this.applyMatrix4(li),this}scale(e,i,s){return li.makeScale(e,i,s),this.applyMatrix4(li),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const i=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Jn(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];Kn.setFromBufferAttribute(u),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ac);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new nt,1/0);return}if(e){const s=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Ao.setFromBufferAttribute(h),this.morphTargetsRelative?(hn.addVectors(Kn.min,Ao.min),Kn.expandByPoint(hn),hn.addVectors(Kn.max,Ao.max),Kn.expandByPoint(hn)):(Kn.expandByPoint(Ao.min),Kn.expandByPoint(Ao.max))}Kn.getCenter(s);let l=0;for(let u=0,d=e.count;u<d;u++)hn.fromBufferAttribute(e,u),l=Math.max(l,s.distanceToSquared(hn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)hn.fromBufferAttribute(h,p),m&&(os.fromBufferAttribute(e,p),hn.add(os)),l=Math.max(l,s.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.array,l=i.position.array,u=i.normal.array,d=i.uv.array,h=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*h),4));const m=this.getAttribute("tangent").array,p=[],_=[];for(let N=0;N<h;N++)p[N]=new nt,_[N]=new nt;const S=new nt,y=new nt,M=new nt,A=new be,T=new be,x=new be,v=new nt,L=new nt;function R(N,ot,ft){S.fromArray(l,N*3),y.fromArray(l,ot*3),M.fromArray(l,ft*3),A.fromArray(d,N*2),T.fromArray(d,ot*2),x.fromArray(d,ft*2),y.sub(S),M.sub(S),T.sub(A),x.sub(A);const Et=1/(T.x*x.y-x.x*T.y);isFinite(Et)&&(v.copy(y).multiplyScalar(x.y).addScaledVector(M,-T.y).multiplyScalar(Et),L.copy(M).multiplyScalar(T.x).addScaledVector(y,-x.x).multiplyScalar(Et),p[N].add(v),p[ot].add(v),p[ft].add(v),_[N].add(L),_[ot].add(L),_[ft].add(L))}let O=this.groups;O.length===0&&(O=[{start:0,count:s.length}]);for(let N=0,ot=O.length;N<ot;++N){const ft=O[N],Et=ft.start,k=ft.count;for(let et=Et,P=Et+k;et<P;et+=3)R(s[et+0],s[et+1],s[et+2])}const X=new nt,I=new nt,z=new nt,lt=new nt;function C(N){z.fromArray(u,N*3),lt.copy(z);const ot=p[N];X.copy(ot),X.sub(z.multiplyScalar(z.dot(ot))).normalize(),I.crossVectors(lt,ot);const Et=I.dot(_[N])<0?-1:1;m[N*4]=X.x,m[N*4+1]=X.y,m[N*4+2]=X.z,m[N*4+3]=Et}for(let N=0,ot=O.length;N<ot;++N){const ft=O[N],Et=ft.start,k=ft.count;for(let et=Et,P=Et+k;et<P;et+=3)C(s[et+0]),C(s[et+1]),C(s[et+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ei(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new nt,u=new nt,d=new nt,h=new nt,m=new nt,p=new nt,_=new nt,S=new nt;if(e)for(let y=0,M=e.count;y<M;y+=3){const A=e.getX(y+0),T=e.getX(y+1),x=e.getX(y+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,x),_.subVectors(d,u),S.subVectors(l,u),_.cross(S),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,T),p.fromBufferAttribute(s,x),h.add(_),m.add(_),p.add(_),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(T,m.x,m.y,m.z),s.setXYZ(x,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),_.subVectors(d,u),S.subVectors(l,u),_.cross(S),s.setXYZ(y+0,_.x,_.y,_.z),s.setXYZ(y+1,_.x,_.y,_.z),s.setXYZ(y+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)hn.fromBufferAttribute(e,i),hn.normalize(),e.setXYZ(i,hn.x,hn.y,hn.z)}toNonIndexed(){function e(h,m){const p=h.array,_=h.itemSize,S=h.normalized,y=new p.constructor(m.length*_);let M=0,A=0;for(let T=0,x=m.length;T<x;T++){h.isInterleavedBufferAttribute?M=m[T]*h.data.stride+h.offset:M=m[T]*_;for(let v=0;v<_;v++)y[A++]=p[M++]}return new Ei(y,_,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ti,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,S=p.length;_<S;_++){const y=p[_],M=e(y,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let S=0,y=p.length;S<y;S++){const M=p[S];_.push(M.toJSON(e.data))}_.length>0&&(l[m]=_,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(i));const l=e.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=e.morphAttributes;for(const p in u){const _=[],S=u[p];for(let y=0,M=S.length;y<M;y++)_.push(S[y].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,_=d.length;p<_;p++){const S=d[p];this.addGroup(S.start,S.count,S.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const M_=new dn,or=new S0,ec=new Ac,E_=new nt,ls=new nt,cs=new nt,us=new nt,ch=new nt,nc=new nt,ic=new be,ac=new be,rc=new be,T_=new nt,A_=new nt,b_=new nt,sc=new nt,oc=new nt;class Mi extends Hn{constructor(e=new Ti,i=new Ro){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){nc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],S=u[m];_!==0&&(ch.fromBufferAttribute(S,e),d?nc.addScaledVector(ch,_):nc.addScaledVector(ch.sub(i),_))}i.add(nc)}return i}raycast(e,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ec.copy(s.boundingSphere),ec.applyMatrix4(u),or.copy(e.ray).recast(e.near),!(ec.containsPoint(or.origin)===!1&&(or.intersectSphere(ec,E_)===null||or.origin.distanceToSquared(E_)>(e.far-e.near)**2))&&(M_.copy(u).invert(),or.copy(e.ray).applyMatrix4(M_),!(s.boundingBox!==null&&or.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,or)))}_computeIntersections(e,i,s){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,S=u.attributes.normal,y=u.groups,M=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,T=y.length;A<T;A++){const x=y[A],v=d[x.materialIndex],L=Math.max(x.start,M.start),R=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let O=L,X=R;O<X;O+=3){const I=h.getX(O),z=h.getX(O+1),lt=h.getX(O+2);l=lc(this,v,e,s,p,_,S,I,z,lt),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let x=A,v=T;x<v;x+=3){const L=h.getX(x),R=h.getX(x+1),O=h.getX(x+2);l=lc(this,d,e,s,p,_,S,L,R,O),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,T=y.length;A<T;A++){const x=y[A],v=d[x.materialIndex],L=Math.max(x.start,M.start),R=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let O=L,X=R;O<X;O+=3){const I=O,z=O+1,lt=O+2;l=lc(this,v,e,s,p,_,S,I,z,lt),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const A=Math.max(0,M.start),T=Math.min(m.count,M.start+M.count);for(let x=A,v=T;x<v;x+=3){const L=x,R=x+1,O=x+2;l=lc(this,d,e,s,p,_,S,L,R,O),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function Sx(o,e,i,s,l,u,d,h){let m;if(e.side===Fn?m=s.intersectTriangle(d,u,l,!0,h):m=s.intersectTriangle(l,u,d,e.side===Ga,h),m===null)return null;oc.copy(h),oc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(oc);return p<i.near||p>i.far?null:{distance:p,point:oc.clone(),object:o}}function lc(o,e,i,s,l,u,d,h,m,p){o.getVertexPosition(h,ls),o.getVertexPosition(m,cs),o.getVertexPosition(p,us);const _=Sx(o,e,i,s,ls,cs,us,sc);if(_){l&&(ic.fromBufferAttribute(l,h),ac.fromBufferAttribute(l,m),rc.fromBufferAttribute(l,p),_.uv=Si.getInterpolation(sc,ls,cs,us,ic,ac,rc,new be)),u&&(ic.fromBufferAttribute(u,h),ac.fromBufferAttribute(u,m),rc.fromBufferAttribute(u,p),_.uv1=Si.getInterpolation(sc,ls,cs,us,ic,ac,rc,new be),_.uv2=_.uv1),d&&(T_.fromBufferAttribute(d,h),A_.fromBufferAttribute(d,m),b_.fromBufferAttribute(d,p),_.normal=Si.getInterpolation(sc,ls,cs,us,T_,A_,b_,new nt),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new nt,materialIndex:0};Si.getNormal(ls,cs,us,S.normal),_.face=S}return _}class Oo extends Ti{constructor(e=1,i=1,s=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],S=[];let y=0,M=0;A("z","y","x",-1,-1,s,i,e,d,u,0),A("z","y","x",1,-1,s,i,-e,d,u,1),A("x","z","y",1,1,e,s,i,l,d,2),A("x","z","y",1,-1,e,s,-i,l,d,3),A("x","y","z",1,-1,e,i,s,l,u,4),A("x","y","z",-1,-1,e,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new Jn(p,3)),this.setAttribute("normal",new Jn(_,3)),this.setAttribute("uv",new Jn(S,2));function A(T,x,v,L,R,O,X,I,z,lt,C){const N=O/z,ot=X/lt,ft=O/2,Et=X/2,k=I/2,et=z+1,P=lt+1;let q=0,Q=0;const ct=new nt;for(let ut=0;ut<P;ut++){const D=ut*ot-Et;for(let V=0;V<et;V++){const G=V*N-ft;ct[T]=G*L,ct[x]=D*R,ct[v]=k,p.push(ct.x,ct.y,ct.z),ct[T]=0,ct[x]=0,ct[v]=I>0?1:-1,_.push(ct.x,ct.y,ct.z),S.push(V/z),S.push(1-ut/lt),q+=1}}for(let ut=0;ut<lt;ut++)for(let D=0;D<z;D++){const V=y+D+et*ut,G=y+D+et*(ut+1),Z=y+(D+1)+et*(ut+1),pt=y+(D+1)+et*ut;m.push(V,G,pt),m.push(G,Z,pt),Q+=6}h.addGroup(M,Q,C),M+=Q,y+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xs(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Cn(o){const e={};for(let i=0;i<o.length;i++){const s=xs(o[i]);for(const l in s)e[l]=s[l]}return e}function yx(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function T0(o){return o.getRenderTarget()===null?o.outputColorSpace:Be.workingColorSpace}const xx={clone:xs,merge:Cn};var Mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ex=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mx,this.fragmentShader=Ex,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xs(e.uniforms),this.uniformsGroups=yx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class A0 extends Hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=ea}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ui extends A0{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=bh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bh*2*Math.atan(Math.tan(qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,i,s,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(qf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const fs=-90,hs=1;class Tx extends Hn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ui(fs,hs,e,i);l.layers=this.layers,this.add(l);const u=new ui(fs,hs,e,i);u.layers=this.layers,this.add(u);const d=new ui(fs,hs,e,i);d.layers=this.layers,this.add(d);const h=new ui(fs,hs,e,i);h.layers=this.layers,this.add(h);const m=new ui(fs,hs,e,i);m.layers=this.layers,this.add(m);const p=new ui(fs,hs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===ea)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===yc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,_]=this.children,S=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,u),e.setRenderTarget(s,1,l),e.render(i,d),e.setRenderTarget(s,2,l),e.render(i,h),e.setRenderTarget(s,3,l),e.render(i,m),e.setRenderTarget(s,4,l),e.render(i,p),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(S,y,M),e.xr.enabled=A,s.texture.needsPMREMUpdate=!0}}class b0 extends Qn{constructor(e,i,s,l,u,d,h,m,p,_){e=e!==void 0?e:[],i=i!==void 0?i:vs,super(e,i,s,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ax extends gr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];i.encoding!==void 0&&(bo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===mr?Sn:fi),this.texture=new b0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ci}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Oo(5,5,5),u=new _r({name:"CubemapFromEquirect",uniforms:xs(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Fn,blending:Ia});u.uniforms.tEquirect.value=i;const d=new Mi(l,u),h=i.minFilter;return i.minFilter===Co&&(i.minFilter=ci),new Tx(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,s,l){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,s,l);e.setRenderTarget(u)}}const uh=new nt,bx=new nt,Rx=new de;class cr{constructor(e=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=uh.subVectors(s,i).cross(bx.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(uh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||Rx.getNormalMatrix(e),l=this.coplanarPoint(uh).applyMatrix4(e),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Ac,cc=new nt;class R0{constructor(e=new cr,i=new cr,s=new cr,l=new cr,u=new cr,d=new cr){this.planes=[e,i,s,l,u,d]}set(e,i,s,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ea){const s=this.planes,l=e.elements,u=l[0],d=l[1],h=l[2],m=l[3],p=l[4],_=l[5],S=l[6],y=l[7],M=l[8],A=l[9],T=l[10],x=l[11],v=l[12],L=l[13],R=l[14],O=l[15];if(s[0].setComponents(m-u,y-p,x-M,O-v).normalize(),s[1].setComponents(m+u,y+p,x+M,O+v).normalize(),s[2].setComponents(m+d,y+_,x+A,O+L).normalize(),s[3].setComponents(m-d,y-_,x-A,O-L).normalize(),s[4].setComponents(m-h,y-S,x-T,O-R).normalize(),i===ea)s[5].setComponents(m+h,y+S,x+T,O+R).normalize();else if(i===yc)s[5].setComponents(h,S,T,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(cc.x=l.normal.x>0?e.max.x:e.min.x,cc.y=l.normal.y>0?e.max.y:e.min.y,cc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function C0(){let o=null,e=!1,i=null,s=null;function l(u,d){i(u,d),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Cx(o,e){const i=e.isWebGL2,s=new WeakMap;function l(p,_){const S=p.array,y=p.usage,M=S.byteLength,A=o.createBuffer();o.bindBuffer(_,A),o.bufferData(_,S,y),p.onUploadCallback();let T;if(S instanceof Float32Array)T=o.FLOAT;else if(S instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(i)T=o.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=o.UNSIGNED_SHORT;else if(S instanceof Int16Array)T=o.SHORT;else if(S instanceof Uint32Array)T=o.UNSIGNED_INT;else if(S instanceof Int32Array)T=o.INT;else if(S instanceof Int8Array)T=o.BYTE;else if(S instanceof Uint8Array)T=o.UNSIGNED_BYTE;else if(S instanceof Uint8ClampedArray)T=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+S);return{buffer:A,type:T,bytesPerElement:S.BYTES_PER_ELEMENT,version:p.version,size:M}}function u(p,_,S){const y=_.array,M=_._updateRange,A=_.updateRanges;if(o.bindBuffer(S,p),M.count===-1&&A.length===0&&o.bufferSubData(S,0,y),A.length!==0){for(let T=0,x=A.length;T<x;T++){const v=A[T];i?o.bufferSubData(S,v.start*y.BYTES_PER_ELEMENT,y,v.start,v.count):o.bufferSubData(S,v.start*y.BYTES_PER_ELEMENT,y.subarray(v.start,v.start+v.count))}_.clearUpdateRanges()}M.count!==-1&&(i?o.bufferSubData(S,M.offset*y.BYTES_PER_ELEMENT,y,M.offset,M.count):o.bufferSubData(S,M.offset*y.BYTES_PER_ELEMENT,y.subarray(M.offset,M.offset+M.count)),M.count=-1),_.onUploadCallback()}function d(p){return p.isInterleavedBufferAttribute&&(p=p.data),s.get(p)}function h(p){p.isInterleavedBufferAttribute&&(p=p.data);const _=s.get(p);_&&(o.deleteBuffer(_.buffer),s.delete(p))}function m(p,_){if(p.isGLBufferAttribute){const y=s.get(p);(!y||y.version<p.version)&&s.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const S=s.get(p);if(S===void 0)s.set(p,l(p,_));else if(S.version<p.version){if(S.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");u(S.buffer,p,_),S.version=p.version}}return{get:d,remove:h,update:m}}class Oh extends Ti{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,_=m+1,S=e/h,y=i/m,M=[],A=[],T=[],x=[];for(let v=0;v<_;v++){const L=v*y-d;for(let R=0;R<p;R++){const O=R*S-u;A.push(O,-L,0),T.push(0,0,1),x.push(R/h),x.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<h;L++){const R=L+p*v,O=L+p*(v+1),X=L+1+p*(v+1),I=L+1+p*v;M.push(R,O,I),M.push(O,X,I)}this.setIndex(M),this.setAttribute("position",new Jn(A,3)),this.setAttribute("normal",new Jn(T,3)),this.setAttribute("uv",new Jn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oh(e.width,e.height,e.widthSegments,e.heightSegments)}}var wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ux=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nx=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ox=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Fx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$x=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rM="gl_FragColor = linearToOutputTexel( gl_FragColor );",sM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,oM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_M=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,vM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,SM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,MM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,EM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,CM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,PM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,FM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,XM=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,WM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,qM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,aE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_E=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ME=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,RE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,PE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$E=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ue={alphahash_fragment:wx,alphahash_pars_fragment:Ux,alphamap_fragment:Dx,alphamap_pars_fragment:Lx,alphatest_fragment:Nx,alphatest_pars_fragment:Ox,aomap_fragment:zx,aomap_pars_fragment:Px,batching_pars_vertex:Bx,batching_vertex:Ix,begin_vertex:Fx,beginnormal_vertex:Hx,bsdfs:Gx,iridescence_fragment:Vx,bumpmap_pars_fragment:kx,clipping_planes_fragment:Xx,clipping_planes_pars_fragment:Wx,clipping_planes_pars_vertex:qx,clipping_planes_vertex:Yx,color_fragment:jx,color_pars_fragment:Zx,color_pars_vertex:Kx,color_vertex:Qx,common:Jx,cube_uv_reflection_fragment:$x,defaultnormal_vertex:tM,displacementmap_pars_vertex:eM,displacementmap_vertex:nM,emissivemap_fragment:iM,emissivemap_pars_fragment:aM,colorspace_fragment:rM,colorspace_pars_fragment:sM,envmap_fragment:oM,envmap_common_pars_fragment:lM,envmap_pars_fragment:cM,envmap_pars_vertex:uM,envmap_physical_pars_fragment:MM,envmap_vertex:fM,fog_vertex:hM,fog_pars_vertex:dM,fog_fragment:pM,fog_pars_fragment:mM,gradientmap_pars_fragment:gM,lightmap_fragment:_M,lightmap_pars_fragment:vM,lights_lambert_fragment:SM,lights_lambert_pars_fragment:yM,lights_pars_begin:xM,lights_toon_fragment:EM,lights_toon_pars_fragment:TM,lights_phong_fragment:AM,lights_phong_pars_fragment:bM,lights_physical_fragment:RM,lights_physical_pars_fragment:CM,lights_fragment_begin:wM,lights_fragment_maps:UM,lights_fragment_end:DM,logdepthbuf_fragment:LM,logdepthbuf_pars_fragment:NM,logdepthbuf_pars_vertex:OM,logdepthbuf_vertex:zM,map_fragment:PM,map_pars_fragment:BM,map_particle_fragment:IM,map_particle_pars_fragment:FM,metalnessmap_fragment:HM,metalnessmap_pars_fragment:GM,morphcolor_vertex:VM,morphnormal_vertex:kM,morphtarget_pars_vertex:XM,morphtarget_vertex:WM,normal_fragment_begin:qM,normal_fragment_maps:YM,normal_pars_fragment:jM,normal_pars_vertex:ZM,normal_vertex:KM,normalmap_pars_fragment:QM,clearcoat_normal_fragment_begin:JM,clearcoat_normal_fragment_maps:$M,clearcoat_pars_fragment:tE,iridescence_pars_fragment:eE,opaque_fragment:nE,packing:iE,premultiplied_alpha_fragment:aE,project_vertex:rE,dithering_fragment:sE,dithering_pars_fragment:oE,roughnessmap_fragment:lE,roughnessmap_pars_fragment:cE,shadowmap_pars_fragment:uE,shadowmap_pars_vertex:fE,shadowmap_vertex:hE,shadowmask_pars_fragment:dE,skinbase_vertex:pE,skinning_pars_vertex:mE,skinning_vertex:gE,skinnormal_vertex:_E,specularmap_fragment:vE,specularmap_pars_fragment:SE,tonemapping_fragment:yE,tonemapping_pars_fragment:xE,transmission_fragment:ME,transmission_pars_fragment:EE,uv_pars_fragment:TE,uv_pars_vertex:AE,uv_vertex:bE,worldpos_vertex:RE,background_vert:CE,background_frag:wE,backgroundCube_vert:UE,backgroundCube_frag:DE,cube_vert:LE,cube_frag:NE,depth_vert:OE,depth_frag:zE,distanceRGBA_vert:PE,distanceRGBA_frag:BE,equirect_vert:IE,equirect_frag:FE,linedashed_vert:HE,linedashed_frag:GE,meshbasic_vert:VE,meshbasic_frag:kE,meshlambert_vert:XE,meshlambert_frag:WE,meshmatcap_vert:qE,meshmatcap_frag:YE,meshnormal_vert:jE,meshnormal_frag:ZE,meshphong_vert:KE,meshphong_frag:QE,meshphysical_vert:JE,meshphysical_frag:$E,meshtoon_vert:tT,meshtoon_frag:eT,points_vert:nT,points_frag:iT,shadow_vert:aT,shadow_frag:rT,sprite_vert:sT,sprite_frag:oT},Ct={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Ui={basic:{uniforms:Cn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:Cn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new De(0)}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:Cn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:Cn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:Cn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new De(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:Cn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:Cn([Ct.points,Ct.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:Cn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:Cn([Ct.common,Ct.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:Cn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:Cn([Ct.sprite,Ct.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distanceRGBA:{uniforms:Cn([Ct.common,Ct.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distanceRGBA_vert,fragmentShader:ue.distanceRGBA_frag},shadow:{uniforms:Cn([Ct.lights,Ct.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};Ui.physical={uniforms:Cn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};const uc={r:0,b:0,g:0};function lT(o,e,i,s,l,u,d){const h=new De(0);let m=u===!0?0:1,p,_,S=null,y=0,M=null;function A(x,v){let L=!1,R=v.isScene===!0?v.background:null;R&&R.isTexture&&(R=(v.backgroundBlurriness>0?i:e).get(R)),R===null?T(h,m):R&&R.isColor&&(T(R,1),L=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,d):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||L)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),R&&(R.isCubeTexture||R.mapping===Ec)?(_===void 0&&(_=new Mi(new Oo(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:xs(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(X,I,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,_.material.toneMapped=Be.getTransfer(R.colorSpace)!==ke,(S!==R||y!==R.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,S=R,y=R.version,M=o.toneMapping),_.layers.enableAll(),x.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new Mi(new Oh(2,2),new _r({name:"BackgroundMaterial",uniforms:xs(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Ga,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,p.material.toneMapped=Be.getTransfer(R.colorSpace)!==ke,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(S!==R||y!==R.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,S=R,y=R.version,M=o.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function T(x,v){x.getRGB(uc,T0(o)),s.buffers.color.setClear(uc.r,uc.g,uc.b,v,d)}return{getClearColor:function(){return h},setClearColor:function(x,v=1){h.set(x),m=v,T(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(x){m=x,T(h,m)},render:A}}function cT(o,e,i,s){const l=o.getParameter(o.MAX_VERTEX_ATTRIBS),u=s.isWebGL2?null:e.get("OES_vertex_array_object"),d=s.isWebGL2||u!==null,h={},m=x(null);let p=m,_=!1;function S(k,et,P,q,Q){let ct=!1;if(d){const ut=T(q,P,et);p!==ut&&(p=ut,M(p.object)),ct=v(k,q,P,Q),ct&&L(k,q,P,Q)}else{const ut=et.wireframe===!0;(p.geometry!==q.id||p.program!==P.id||p.wireframe!==ut)&&(p.geometry=q.id,p.program=P.id,p.wireframe=ut,ct=!0)}Q!==null&&i.update(Q,o.ELEMENT_ARRAY_BUFFER),(ct||_)&&(_=!1,lt(k,et,P,q),Q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,i.get(Q).buffer))}function y(){return s.isWebGL2?o.createVertexArray():u.createVertexArrayOES()}function M(k){return s.isWebGL2?o.bindVertexArray(k):u.bindVertexArrayOES(k)}function A(k){return s.isWebGL2?o.deleteVertexArray(k):u.deleteVertexArrayOES(k)}function T(k,et,P){const q=P.wireframe===!0;let Q=h[k.id];Q===void 0&&(Q={},h[k.id]=Q);let ct=Q[et.id];ct===void 0&&(ct={},Q[et.id]=ct);let ut=ct[q];return ut===void 0&&(ut=x(y()),ct[q]=ut),ut}function x(k){const et=[],P=[],q=[];for(let Q=0;Q<l;Q++)et[Q]=0,P[Q]=0,q[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:P,attributeDivisors:q,object:k,attributes:{},index:null}}function v(k,et,P,q){const Q=p.attributes,ct=et.attributes;let ut=0;const D=P.getAttributes();for(const V in D)if(D[V].location>=0){const Z=Q[V];let pt=ct[V];if(pt===void 0&&(V==="instanceMatrix"&&k.instanceMatrix&&(pt=k.instanceMatrix),V==="instanceColor"&&k.instanceColor&&(pt=k.instanceColor)),Z===void 0||Z.attribute!==pt||pt&&Z.data!==pt.data)return!0;ut++}return p.attributesNum!==ut||p.index!==q}function L(k,et,P,q){const Q={},ct=et.attributes;let ut=0;const D=P.getAttributes();for(const V in D)if(D[V].location>=0){let Z=ct[V];Z===void 0&&(V==="instanceMatrix"&&k.instanceMatrix&&(Z=k.instanceMatrix),V==="instanceColor"&&k.instanceColor&&(Z=k.instanceColor));const pt={};pt.attribute=Z,Z&&Z.data&&(pt.data=Z.data),Q[V]=pt,ut++}p.attributes=Q,p.attributesNum=ut,p.index=q}function R(){const k=p.newAttributes;for(let et=0,P=k.length;et<P;et++)k[et]=0}function O(k){X(k,0)}function X(k,et){const P=p.newAttributes,q=p.enabledAttributes,Q=p.attributeDivisors;P[k]=1,q[k]===0&&(o.enableVertexAttribArray(k),q[k]=1),Q[k]!==et&&((s.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[s.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,et),Q[k]=et)}function I(){const k=p.newAttributes,et=p.enabledAttributes;for(let P=0,q=et.length;P<q;P++)et[P]!==k[P]&&(o.disableVertexAttribArray(P),et[P]=0)}function z(k,et,P,q,Q,ct,ut){ut===!0?o.vertexAttribIPointer(k,et,P,Q,ct):o.vertexAttribPointer(k,et,P,q,Q,ct)}function lt(k,et,P,q){if(s.isWebGL2===!1&&(k.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;R();const Q=q.attributes,ct=P.getAttributes(),ut=et.defaultAttributeValues;for(const D in ct){const V=ct[D];if(V.location>=0){let G=Q[D];if(G===void 0&&(D==="instanceMatrix"&&k.instanceMatrix&&(G=k.instanceMatrix),D==="instanceColor"&&k.instanceColor&&(G=k.instanceColor)),G!==void 0){const Z=G.normalized,pt=G.itemSize,Mt=i.get(G);if(Mt===void 0)continue;const Tt=Mt.buffer,Xt=Mt.type,mt=Mt.bytesPerElement,_t=s.isWebGL2===!0&&(Xt===o.INT||Xt===o.UNSIGNED_INT||G.gpuType===s0);if(G.isInterleavedBufferAttribute){const Ft=G.data,Y=Ft.stride,Te=G.offset;if(Ft.isInstancedInterleavedBuffer){for(let Lt=0;Lt<V.locationSize;Lt++)X(V.location+Lt,Ft.meshPerAttribute);k.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let Lt=0;Lt<V.locationSize;Lt++)O(V.location+Lt);o.bindBuffer(o.ARRAY_BUFFER,Tt);for(let Lt=0;Lt<V.locationSize;Lt++)z(V.location+Lt,pt/V.locationSize,Xt,Z,Y*mt,(Te+pt/V.locationSize*Lt)*mt,_t)}else{if(G.isInstancedBufferAttribute){for(let Ft=0;Ft<V.locationSize;Ft++)X(V.location+Ft,G.meshPerAttribute);k.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Ft=0;Ft<V.locationSize;Ft++)O(V.location+Ft);o.bindBuffer(o.ARRAY_BUFFER,Tt);for(let Ft=0;Ft<V.locationSize;Ft++)z(V.location+Ft,pt/V.locationSize,Xt,Z,pt*mt,pt/V.locationSize*Ft*mt,_t)}}else if(ut!==void 0){const Z=ut[D];if(Z!==void 0)switch(Z.length){case 2:o.vertexAttrib2fv(V.location,Z);break;case 3:o.vertexAttrib3fv(V.location,Z);break;case 4:o.vertexAttrib4fv(V.location,Z);break;default:o.vertexAttrib1fv(V.location,Z)}}}}I()}function C(){ft();for(const k in h){const et=h[k];for(const P in et){const q=et[P];for(const Q in q)A(q[Q].object),delete q[Q];delete et[P]}delete h[k]}}function N(k){if(h[k.id]===void 0)return;const et=h[k.id];for(const P in et){const q=et[P];for(const Q in q)A(q[Q].object),delete q[Q];delete et[P]}delete h[k.id]}function ot(k){for(const et in h){const P=h[et];if(P[k.id]===void 0)continue;const q=P[k.id];for(const Q in q)A(q[Q].object),delete q[Q];delete P[k.id]}}function ft(){Et(),_=!0,p!==m&&(p=m,M(p.object))}function Et(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:S,reset:ft,resetDefaultState:Et,dispose:C,releaseStatesOfGeometry:N,releaseStatesOfProgram:ot,initAttributes:R,enableAttribute:O,disableUnusedAttributes:I}}function uT(o,e,i,s){const l=s.isWebGL2;let u;function d(_){u=_}function h(_,S){o.drawArrays(u,_,S),i.update(S,u,1)}function m(_,S,y){if(y===0)return;let M,A;if(l)M=o,A="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),A="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[A](u,_,S,y),i.update(S,u,y)}function p(_,S,y){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let A=0;A<y;A++)this.render(_[A],S[A]);else{M.multiDrawArraysWEBGL(u,_,0,S,0,y);let A=0;for(let T=0;T<y;T++)A+=S[T];i.update(A,u,1)}}this.setMode=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=p}function fT(o,e,i){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&o.constructor.name==="WebGL2RenderingContext";let h=i.precision!==void 0?i.precision:"highp";const m=u(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const p=d||e.has("WEBGL_draw_buffers"),_=i.logarithmicDepthBuffer===!0,S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_TEXTURE_SIZE),A=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),T=o.getParameter(o.MAX_VERTEX_ATTRIBS),x=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),v=o.getParameter(o.MAX_VARYING_VECTORS),L=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),R=y>0,O=d||e.has("OES_texture_float"),X=R&&O,I=d?o.getParameter(o.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:p,getMaxAnisotropy:l,getMaxPrecision:u,precision:h,logarithmicDepthBuffer:_,maxTextures:S,maxVertexTextures:y,maxTextureSize:M,maxCubemapSize:A,maxAttributes:T,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:L,vertexTextures:R,floatFragmentTextures:O,floatVertexTextures:X,maxSamples:I}}function hT(o){const e=this;let i=null,s=0,l=!1,u=!1;const d=new cr,h=new de,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,y){const M=S.length!==0||y||s!==0||l;return l=y,s=S.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,y){i=_(S,y,0)},this.setState=function(S,y,M){const A=S.clippingPlanes,T=S.clipIntersection,x=S.clipShadows,v=o.get(S);if(!l||A===null||A.length===0||u&&!x)u?_(null):p();else{const L=u?0:s,R=L*4;let O=v.clippingState||null;m.value=O,O=_(A,y,R,M);for(let X=0;X!==R;++X)O[X]=i[X];v.clippingState=O,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(S,y,M,A){const T=S!==null?S.length:0;let x=null;if(T!==0){if(x=m.value,A!==!0||x===null){const v=M+T*4,L=y.matrixWorldInverse;h.getNormalMatrix(L),(x===null||x.length<v)&&(x=new Float32Array(v));for(let R=0,O=M;R!==T;++R,O+=4)d.copy(S[R]).applyMatrix4(L,h),d.normal.toArray(x,O),x[O+3]=d.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function dT(o){let e=new WeakMap;function i(d,h){return h===xh?d.mapping=vs:h===Mh&&(d.mapping=Ss),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===xh||h===Mh)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Ax(m.height/2);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:s,dispose:u}}class pT extends A0{constructor(e=-1,i=1,s=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-e,d=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ps=4,R_=[.125,.215,.35,.446,.526,.582],hr=20,fh=new pT,C_=new De;let hh=null,dh=0,ph=0;const ur=(1+Math.sqrt(5))/2,ds=1/ur,w_=[new nt(1,1,1),new nt(-1,1,1),new nt(1,1,-1),new nt(-1,1,-1),new nt(0,ur,ds),new nt(0,ur,-ds),new nt(ds,0,ur),new nt(-ds,0,ur),new nt(ur,ds,0),new nt(-ur,ds,0)];class U_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100){hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,s,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=N_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hh,dh,ph),e.scissorTest=!1,fc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===vs||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel();const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:wo,format:xi,colorSpace:na,depthBuffer:!1},l=D_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D_(e,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mT(u)),this._blurMaterial=gT(u,e,i)}return l}_compileMaterial(e){const i=new Mi(this._lodPlanes[0],e);this._renderer.compile(i,fh)}_sceneToCubeUV(e,i,s,l){const h=new ui(90,1,i,s),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,y=_.toneMapping;_.getClearColor(C_),_.toneMapping=Fa,_.autoClear=!1;const M=new Ro({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),A=new Mi(new Oo,M);let T=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,T=!0):(M.color.copy(C_),T=!0);for(let v=0;v<6;v++){const L=v%3;L===0?(h.up.set(0,m[v],0),h.lookAt(p[v],0,0)):L===1?(h.up.set(0,0,m[v]),h.lookAt(0,p[v],0)):(h.up.set(0,m[v],0),h.lookAt(0,0,p[v]));const R=this._cubeSize;fc(l,L*R,v>2?R:0,R,R),_.setRenderTarget(l),T&&_.render(A,h),_.render(e,h)}A.geometry.dispose(),A.material.dispose(),_.toneMapping=y,_.autoClear=S,e.background=x}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===vs||e.mapping===Ss;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=N_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L_());const u=l?this._cubemapMaterial:this._equirectMaterial,d=new Mi(this._lodPlanes[0],u),h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;fc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,fh)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=w_[(l-1)%w_.length];this._blur(e,l-1,l,u,d)}i.autoClear=s}_blur(e,i,s,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,s,l,"latitudinal",u),this._halfBlur(d,e,s,s,l,"longitudinal",u)}_halfBlur(e,i,s,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,S=new Mi(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[s]-1,A=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*hr-1),T=u/A,x=isFinite(u)?1+Math.floor(_*T):hr;x>hr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${hr}`);const v=[];let L=0;for(let z=0;z<hr;++z){const lt=z/T,C=Math.exp(-lt*lt/2);v.push(C),z===0?L+=C:z<x&&(L+=2*C)}for(let z=0;z<v.length;z++)v[z]=v[z]/L;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=v,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:R}=this;y.dTheta.value=A,y.mipInt.value=R-s;const O=this._sizeLods[l],X=3*O*(l>R-ps?l-R+ps:0),I=4*(this._cubeSize-O);fc(i,X,I,3*O,2*O),m.setRenderTarget(i),m.render(S,fh)}}function mT(o){const e=[],i=[],s=[];let l=o;const u=o-ps+1+R_.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-ps?m=R_[d-o+ps-1]:d===0&&(m=0),s.push(m);const p=1/(h-2),_=-p,S=1+p,y=[_,_,S,_,S,S,_,_,S,S,_,S],M=6,A=6,T=3,x=2,v=1,L=new Float32Array(T*A*M),R=new Float32Array(x*A*M),O=new Float32Array(v*A*M);for(let I=0;I<M;I++){const z=I%3*2/3-1,lt=I>2?0:-1,C=[z,lt,0,z+2/3,lt,0,z+2/3,lt+1,0,z,lt,0,z+2/3,lt+1,0,z,lt+1,0];L.set(C,T*A*I),R.set(y,x*A*I);const N=[I,I,I,I,I,I];O.set(N,v*A*I)}const X=new Ti;X.setAttribute("position",new Ei(L,T)),X.setAttribute("uv",new Ei(R,x)),X.setAttribute("faceIndex",new Ei(O,v)),e.push(X),l>ps&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function D_(o,e,i){const s=new gr(o,e,i);return s.texture.mapping=Ec,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function fc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function gT(o,e,i){const s=new Float32Array(hr),l=new nt(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function L_(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function N_(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ia,depthTest:!1,depthWrite:!1})}function zh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _T(o){let e=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===xh||m===Mh,_=m===vs||m===Ss;if(p||_)if(h.isRenderTargetTexture&&h.needsPMREMUpdate===!0){h.needsPMREMUpdate=!1;let S=e.get(h);return i===null&&(i=new U_(o)),S=p?i.fromEquirectangular(h,S):i.fromCubemap(h,S),e.set(h,S),S.texture}else{if(e.has(h))return e.get(h).texture;{const S=h.image;if(p&&S&&S.height>0||_&&S&&l(S)){i===null&&(i=new U_(o));const y=p?i.fromEquirectangular(h):i.fromCubemap(h);return e.set(h,y),h.addEventListener("dispose",u),y.texture}else return null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function vT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(s){s.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(s){const l=i(s);return l===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function ST(o,e,i,s){const l={},u=new WeakMap;function d(S){const y=S.target;y.index!==null&&e.remove(y.index);for(const A in y.attributes)e.remove(y.attributes[A]);for(const A in y.morphAttributes){const T=y.morphAttributes[A];for(let x=0,v=T.length;x<v;x++)e.remove(T[x])}y.removeEventListener("dispose",d),delete l[y.id];const M=u.get(y);M&&(e.remove(M),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(S,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(S){const y=S.attributes;for(const A in y)e.update(y[A],o.ARRAY_BUFFER);const M=S.morphAttributes;for(const A in M){const T=M[A];for(let x=0,v=T.length;x<v;x++)e.update(T[x],o.ARRAY_BUFFER)}}function p(S){const y=[],M=S.index,A=S.attributes.position;let T=0;if(M!==null){const L=M.array;T=M.version;for(let R=0,O=L.length;R<O;R+=3){const X=L[R+0],I=L[R+1],z=L[R+2];y.push(X,I,I,z,z,X)}}else if(A!==void 0){const L=A.array;T=A.version;for(let R=0,O=L.length/3-1;R<O;R+=3){const X=R+0,I=R+1,z=R+2;y.push(X,I,I,z,z,X)}}else return;const x=new(m0(y)?E0:M0)(y,1);x.version=T;const v=u.get(S);v&&e.remove(v),u.set(S,x)}function _(S){const y=u.get(S);if(y){const M=S.index;M!==null&&y.version<M.version&&p(S)}else p(S);return u.get(S)}return{get:h,update:m,getWireframeAttribute:_}}function yT(o,e,i,s){const l=s.isWebGL2;let u;function d(M){u=M}let h,m;function p(M){h=M.type,m=M.bytesPerElement}function _(M,A){o.drawElements(u,A,h,M*m),i.update(A,u,1)}function S(M,A,T){if(T===0)return;let x,v;if(l)x=o,v="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[v](u,A,h,M*m,T),i.update(A,u,T)}function y(M,A,T){if(T===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let v=0;v<T;v++)this.render(M[v]/m,A[v]);else{x.multiDrawElementsWEBGL(u,A,0,h,M,0,T);let v=0;for(let L=0;L<T;L++)v+=A[L];i.update(v,u,1)}}this.setMode=d,this.setIndex=p,this.render=_,this.renderInstances=S,this.renderMultiDraw=y}function xT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function MT(o,e){return o[0]-e[0]}function ET(o,e){return Math.abs(e[1])-Math.abs(o[1])}function TT(o,e,i){const s={},l=new Float32Array(8),u=new WeakMap,d=new yn,h=[];for(let p=0;p<8;p++)h[p]=[p,0];function m(p,_,S){const y=p.morphTargetInfluences;if(e.isWebGL2===!0){const A=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,T=A!==void 0?A.length:0;let x=u.get(_);if(x===void 0||x.count!==T){let et=function(){Et.dispose(),u.delete(_),_.removeEventListener("dispose",et)};var M=et;x!==void 0&&x.texture.dispose();const R=_.morphAttributes.position!==void 0,O=_.morphAttributes.normal!==void 0,X=_.morphAttributes.color!==void 0,I=_.morphAttributes.position||[],z=_.morphAttributes.normal||[],lt=_.morphAttributes.color||[];let C=0;R===!0&&(C=1),O===!0&&(C=2),X===!0&&(C=3);let N=_.attributes.position.count*C,ot=1;N>e.maxTextureSize&&(ot=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const ft=new Float32Array(N*ot*4*T),Et=new v0(ft,N,ot,T);Et.type=Ba,Et.needsUpdate=!0;const k=C*4;for(let P=0;P<T;P++){const q=I[P],Q=z[P],ct=lt[P],ut=N*ot*4*P;for(let D=0;D<q.count;D++){const V=D*k;R===!0&&(d.fromBufferAttribute(q,D),ft[ut+V+0]=d.x,ft[ut+V+1]=d.y,ft[ut+V+2]=d.z,ft[ut+V+3]=0),O===!0&&(d.fromBufferAttribute(Q,D),ft[ut+V+4]=d.x,ft[ut+V+5]=d.y,ft[ut+V+6]=d.z,ft[ut+V+7]=0),X===!0&&(d.fromBufferAttribute(ct,D),ft[ut+V+8]=d.x,ft[ut+V+9]=d.y,ft[ut+V+10]=d.z,ft[ut+V+11]=ct.itemSize===4?d.w:1)}}x={count:T,texture:Et,size:new be(N,ot)},u.set(_,x),_.addEventListener("dispose",et)}let v=0;for(let R=0;R<y.length;R++)v+=y[R];const L=_.morphTargetsRelative?1:1-v;S.getUniforms().setValue(o,"morphTargetBaseInfluence",L),S.getUniforms().setValue(o,"morphTargetInfluences",y),S.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),S.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}else{const A=y===void 0?0:y.length;let T=s[_.id];if(T===void 0||T.length!==A){T=[];for(let O=0;O<A;O++)T[O]=[O,0];s[_.id]=T}for(let O=0;O<A;O++){const X=T[O];X[0]=O,X[1]=y[O]}T.sort(ET);for(let O=0;O<8;O++)O<A&&T[O][1]?(h[O][0]=T[O][0],h[O][1]=T[O][1]):(h[O][0]=Number.MAX_SAFE_INTEGER,h[O][1]=0);h.sort(MT);const x=_.morphAttributes.position,v=_.morphAttributes.normal;let L=0;for(let O=0;O<8;O++){const X=h[O],I=X[0],z=X[1];I!==Number.MAX_SAFE_INTEGER&&z?(x&&_.getAttribute("morphTarget"+O)!==x[I]&&_.setAttribute("morphTarget"+O,x[I]),v&&_.getAttribute("morphNormal"+O)!==v[I]&&_.setAttribute("morphNormal"+O,v[I]),l[O]=z,L+=z):(x&&_.hasAttribute("morphTarget"+O)===!0&&_.deleteAttribute("morphTarget"+O),v&&_.hasAttribute("morphNormal"+O)===!0&&_.deleteAttribute("morphNormal"+O),l[O]=0)}const R=_.morphTargetsRelative?1:1-L;S.getUniforms().setValue(o,"morphTargetBaseInfluence",R),S.getUniforms().setValue(o,"morphTargetInfluences",l)}}return{update:m}}function AT(o,e,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,_=m.geometry,S=e.get(m,_);if(l.get(S)!==p&&(e.update(S),l.set(S,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return S}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}class w0 extends Qn{constructor(e,i,s,l,u,d,h,m,p,_){if(_=_!==void 0?_:pr,_!==pr&&_!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&_===pr&&(s=Pa),s===void 0&&_===ys&&(s=dr),super(null,l,u,d,h,m,_,s,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:wn,this.minFilter=m!==void 0?m:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const U0=new Qn,D0=new w0(1,1);D0.compareFunction=p0;const L0=new v0,N0=new lx,O0=new b0,O_=[],z_=[],P_=new Float32Array(16),B_=new Float32Array(9),I_=new Float32Array(4);function Es(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let u=O_[l];if(u===void 0&&(u=new Float32Array(l),O_[l]=u),e!==0){s.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function ln(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function cn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Rc(o,e){let i=z_[e];i===void 0&&(i=new Int32Array(e),z_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function bT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function RT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2fv(this.addr,e),cn(i,e)}}function CT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(ln(i,e))return;o.uniform3fv(this.addr,e),cn(i,e)}}function wT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4fv(this.addr,e),cn(i,e)}}function UT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(ln(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,s))return;I_.set(s),o.uniformMatrix2fv(this.addr,!1,I_),cn(i,s)}}function DT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(ln(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,s))return;B_.set(s),o.uniformMatrix3fv(this.addr,!1,B_),cn(i,s)}}function LT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(ln(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),cn(i,e)}else{if(ln(i,s))return;P_.set(s),o.uniformMatrix4fv(this.addr,!1,P_),cn(i,s)}}function NT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function OT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2iv(this.addr,e),cn(i,e)}}function zT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3iv(this.addr,e),cn(i,e)}}function PT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4iv(this.addr,e),cn(i,e)}}function BT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(ln(i,e))return;o.uniform2uiv(this.addr,e),cn(i,e)}}function FT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(ln(i,e))return;o.uniform3uiv(this.addr,e),cn(i,e)}}function HT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(ln(i,e))return;o.uniform4uiv(this.addr,e),cn(i,e)}}function GT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);const u=this.type===o.SAMPLER_2D_SHADOW?D0:U0;i.setTexture2D(e||u,l)}function VT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||N0,l)}function kT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||O0,l)}function XT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||L0,l)}function WT(o){switch(o){case 5126:return bT;case 35664:return RT;case 35665:return CT;case 35666:return wT;case 35674:return UT;case 35675:return DT;case 35676:return LT;case 5124:case 35670:return NT;case 35667:case 35671:return OT;case 35668:case 35672:return zT;case 35669:case 35673:return PT;case 5125:return BT;case 36294:return IT;case 36295:return FT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return GT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return kT;case 36289:case 36303:case 36311:case 36292:return XT}}function qT(o,e){o.uniform1fv(this.addr,e)}function YT(o,e){const i=Es(e,this.size,2);o.uniform2fv(this.addr,i)}function jT(o,e){const i=Es(e,this.size,3);o.uniform3fv(this.addr,i)}function ZT(o,e){const i=Es(e,this.size,4);o.uniform4fv(this.addr,i)}function KT(o,e){const i=Es(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function QT(o,e){const i=Es(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function JT(o,e){const i=Es(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function $T(o,e){o.uniform1iv(this.addr,e)}function tA(o,e){o.uniform2iv(this.addr,e)}function eA(o,e){o.uniform3iv(this.addr,e)}function nA(o,e){o.uniform4iv(this.addr,e)}function iA(o,e){o.uniform1uiv(this.addr,e)}function aA(o,e){o.uniform2uiv(this.addr,e)}function rA(o,e){o.uniform3uiv(this.addr,e)}function sA(o,e){o.uniform4uiv(this.addr,e)}function oA(o,e,i){const s=this.cache,l=e.length,u=Rc(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||U0,u[d])}function lA(o,e,i){const s=this.cache,l=e.length,u=Rc(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||N0,u[d])}function cA(o,e,i){const s=this.cache,l=e.length,u=Rc(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||O0,u[d])}function uA(o,e,i){const s=this.cache,l=e.length,u=Rc(i,l);ln(s,u)||(o.uniform1iv(this.addr,u),cn(s,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||L0,u[d])}function fA(o){switch(o){case 5126:return qT;case 35664:return YT;case 35665:return jT;case 35666:return ZT;case 35674:return KT;case 35675:return QT;case 35676:return JT;case 5124:case 35670:return $T;case 35667:case 35671:return tA;case 35668:case 35672:return eA;case 35669:case 35673:return nA;case 5125:return iA;case 36294:return aA;case 36295:return rA;case 36296:return sA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return lA;case 35680:case 36300:case 36308:case 36293:return cA;case 36289:case 36303:case 36311:case 36292:return uA}}class hA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=WT(i.type)}}class dA{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=fA(i.type)}}class pA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],s)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function F_(o,e){o.seq.push(e),o.map[e.id]=e}function mA(o,e,i){const s=o.name,l=s.length;for(mh.lastIndex=0;;){const u=mh.exec(s),d=mh.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){F_(i,p===void 0?new hA(h,o,e):new dA(h,o,e));break}else{let S=i.map[h];S===void 0&&(S=new pA(h),F_(i,S)),i=S}}}class mc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);mA(u,d,this)}}setValue(e,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&s.push(d)}return s}}function H_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const gA=37297;let _A=0;function vA(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;s.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}function SA(o){const e=Be.getPrimaries(Be.workingColorSpace),i=Be.getPrimaries(o);let s;switch(e===i?s="":e===Sc&&i===vc?s="LinearDisplayP3ToLinearSRGB":e===vc&&i===Sc&&(s="LinearSRGBToLinearDisplayP3"),o){case na:case Tc:return[s,"LinearTransferOETF"];case Sn:case Nh:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[s,"LinearTransferOETF"]}}function G_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+vA(o.getShaderSource(e),d)}else return l}function yA(o,e){const i=SA(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function xA(o,e){let i;switch(e){case Uy:i="Linear";break;case Dy:i="Reinhard";break;case Ly:i="OptimizedCineon";break;case Ny:i="ACESFilmic";break;case zy:i="AgX";break;case Oy:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function MA(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.normalMapTangentSpace||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ms).join(`
`)}function EA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ms).join(`
`)}function TA(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function AA(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function ms(o){return o!==""}function V_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(o){return o.replace(bA,CA)}const RA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function CA(o,e){let i=ue[e];if(i===void 0){const s=RA.get(e);if(s!==void 0)i=ue[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ch(i)}const wA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function X_(o){return o.replace(wA,UA)}function UA(o,e,i,s){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function W_(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===i0?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===ay?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function LA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case vs:case Ss:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function OA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case a0:e="ENVMAP_BLENDING_MULTIPLY";break;case Cy:e="ENVMAP_BLENDING_MIX";break;case wy:e="ENVMAP_BLENDING_ADD";break}return e}function zA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function PA(o,e,i,s){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=DA(i),p=LA(i),_=NA(i),S=OA(i),y=zA(i),M=i.isWebGL2?"":MA(i),A=EA(i),T=TA(u),x=l.createProgram();let v,L,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ms).join(`
`),v.length>0&&(v+=`
`),L=[M,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ms).join(`
`),L.length>0&&(L+=`
`)):(v=[W_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),L=[M,W_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+S:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fa?"#define TONE_MAPPING":"",i.toneMapping!==Fa?ue.tonemapping_pars_fragment:"",i.toneMapping!==Fa?xA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,yA("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ms).join(`
`)),d=Ch(d),d=V_(d,i),d=k_(d,i),h=Ch(h),h=V_(h,i),h=k_(h,i),d=X_(d),h=X_(h),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,v=[A,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,L=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+L);const O=R+v+d,X=R+L+h,I=H_(l,l.VERTEX_SHADER,O),z=H_(l,l.FRAGMENT_SHADER,X);l.attachShader(x,I),l.attachShader(x,z),i.index0AttributeName!==void 0?l.bindAttribLocation(x,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(x,0,"position"),l.linkProgram(x);function lt(ft){if(o.debug.checkShaderErrors){const Et=l.getProgramInfoLog(x).trim(),k=l.getShaderInfoLog(I).trim(),et=l.getShaderInfoLog(z).trim();let P=!0,q=!0;if(l.getProgramParameter(x,l.LINK_STATUS)===!1)if(P=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,x,I,z);else{const Q=G_(l,I,"vertex"),ct=G_(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(x,l.VALIDATE_STATUS)+`

Program Info Log: `+Et+`
`+Q+`
`+ct)}else Et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Et):(k===""||et==="")&&(q=!1);q&&(ft.diagnostics={runnable:P,programLog:Et,vertexShader:{log:k,prefix:v},fragmentShader:{log:et,prefix:L}})}l.deleteShader(I),l.deleteShader(z),C=new mc(l,x),N=AA(l,x)}let C;this.getUniforms=function(){return C===void 0&&lt(this),C};let N;this.getAttributes=function(){return N===void 0&&lt(this),N};let ot=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ot===!1&&(ot=l.getProgramParameter(x,gA)),ot},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=_A++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=z,this}let BA=0;class IA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new FA(e),i.set(e,s)),s}}class FA{constructor(e){this.id=BA++,this.code=e,this.usedTimes=0}}function HA(o,e,i,s,l,u,d){const h=new y0,m=new IA,p=[],_=l.isWebGL2,S=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return C===0?"uv":`uv${C}`}function x(C,N,ot,ft,Et){const k=ft.fog,et=Et.geometry,P=C.isMeshStandardMaterial?ft.environment:null,q=(C.isMeshStandardMaterial?i:e).get(C.envMap||P),Q=q&&q.mapping===Ec?q.image.height:null,ct=A[C.type];C.precision!==null&&(M=l.getMaxPrecision(C.precision),M!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",M,"instead."));const ut=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,D=ut!==void 0?ut.length:0;let V=0;et.morphAttributes.position!==void 0&&(V=1),et.morphAttributes.normal!==void 0&&(V=2),et.morphAttributes.color!==void 0&&(V=3);let G,Z,pt,Mt;if(ct){const je=Ui[ct];G=je.vertexShader,Z=je.fragmentShader}else G=C.vertexShader,Z=C.fragmentShader,m.update(C),pt=m.getVertexShaderID(C),Mt=m.getFragmentShaderID(C);const Tt=o.getRenderTarget(),Xt=Et.isInstancedMesh===!0,mt=Et.isBatchedMesh===!0,_t=!!C.map,Ft=!!C.matcap,Y=!!q,Te=!!C.aoMap,Lt=!!C.lightMap,Pt=!!C.bumpMap,Nt=!!C.normalMap,he=!!C.displacementMap,Jt=!!C.emissiveMap,U=!!C.metalnessMap,b=!!C.roughnessMap,$=C.anisotropy>0,St=C.clearcoat>0,xt=C.iridescence>0,vt=C.sheen>0,Gt=C.transmission>0,wt=$&&!!C.anisotropyMap,It=St&&!!C.clearcoatMap,Yt=St&&!!C.clearcoatNormalMap,ae=St&&!!C.clearcoatRoughnessMap,yt=xt&&!!C.iridescenceMap,xe=xt&&!!C.iridescenceThicknessMap,re=vt&&!!C.sheenColorMap,zt=vt&&!!C.sheenRoughnessMap,bt=!!C.specularMap,Dt=!!C.specularColorMap,Bt=!!C.specularIntensityMap,pe=Gt&&!!C.transmissionMap,ye=Gt&&!!C.thicknessMap,se=!!C.gradientMap,At=!!C.alphaMap,F=C.alphaTest>0,Ut=!!C.alphaHash,Rt=!!C.extensions,$t=!!et.attributes.uv1,jt=!!et.attributes.uv2,Le=!!et.attributes.uv3;let Re=Fa;return C.toneMapped&&(Tt===null||Tt.isXRRenderTarget===!0)&&(Re=o.toneMapping),{isWebGL2:_,shaderID:ct,shaderType:C.type,shaderName:C.name,vertexShader:G,fragmentShader:Z,defines:C.defines,customVertexShaderID:pt,customFragmentShaderID:Mt,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:M,batching:mt,instancing:Xt,instancingColor:Xt&&Et.instanceColor!==null,supportsVertexTextures:y,outputColorSpace:Tt===null?o.outputColorSpace:Tt.isXRRenderTarget===!0?Tt.texture.colorSpace:na,map:_t,matcap:Ft,envMap:Y,envMapMode:Y&&q.mapping,envMapCubeUVHeight:Q,aoMap:Te,lightMap:Lt,bumpMap:Pt,normalMap:Nt,displacementMap:y&&he,emissiveMap:Jt,normalMapObjectSpace:Nt&&C.normalMapType===jy,normalMapTangentSpace:Nt&&C.normalMapType===Yy,metalnessMap:U,roughnessMap:b,anisotropy:$,anisotropyMap:wt,clearcoat:St,clearcoatMap:It,clearcoatNormalMap:Yt,clearcoatRoughnessMap:ae,iridescence:xt,iridescenceMap:yt,iridescenceThicknessMap:xe,sheen:vt,sheenColorMap:re,sheenRoughnessMap:zt,specularMap:bt,specularColorMap:Dt,specularIntensityMap:Bt,transmission:Gt,transmissionMap:pe,thicknessMap:ye,gradientMap:se,opaque:C.transparent===!1&&C.blending===gs,alphaMap:At,alphaTest:F,alphaHash:Ut,combine:C.combine,mapUv:_t&&T(C.map.channel),aoMapUv:Te&&T(C.aoMap.channel),lightMapUv:Lt&&T(C.lightMap.channel),bumpMapUv:Pt&&T(C.bumpMap.channel),normalMapUv:Nt&&T(C.normalMap.channel),displacementMapUv:he&&T(C.displacementMap.channel),emissiveMapUv:Jt&&T(C.emissiveMap.channel),metalnessMapUv:U&&T(C.metalnessMap.channel),roughnessMapUv:b&&T(C.roughnessMap.channel),anisotropyMapUv:wt&&T(C.anisotropyMap.channel),clearcoatMapUv:It&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:re&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:zt&&T(C.sheenRoughnessMap.channel),specularMapUv:bt&&T(C.specularMap.channel),specularColorMapUv:Dt&&T(C.specularColorMap.channel),specularIntensityMapUv:Bt&&T(C.specularIntensityMap.channel),transmissionMapUv:pe&&T(C.transmissionMap.channel),thicknessMapUv:ye&&T(C.thicknessMap.channel),alphaMapUv:At&&T(C.alphaMap.channel),vertexTangents:!!et.attributes.tangent&&(Nt||$),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,vertexUv1s:$t,vertexUv2s:jt,vertexUv3s:Le,pointsUvs:Et.isPoints===!0&&!!et.attributes.uv&&(_t||At),fog:!!k,useFog:C.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:Et.isSkinnedMesh===!0,morphTargets:et.morphAttributes.position!==void 0,morphNormals:et.morphAttributes.normal!==void 0,morphColors:et.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:V,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&ot.length>0,shadowMapType:o.shadowMap.type,toneMapping:Re,useLegacyLights:o._useLegacyLights,decodeVideoTexture:_t&&C.map.isVideoTexture===!0&&Be.getTransfer(C.map.colorSpace)===ke,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ta,flipSided:C.side===Fn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionDerivatives:Rt&&C.extensions.derivatives===!0,extensionFragDepth:Rt&&C.extensions.fragDepth===!0,extensionDrawBuffers:Rt&&C.extensions.drawBuffers===!0,extensionShaderTextureLOD:Rt&&C.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Rt&&C.extensions.clipCullDistance&&s.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:_||s.has("EXT_frag_depth"),rendererExtensionDrawBuffers:_||s.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:_||s.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()}}function v(C){const N=[];if(C.shaderID?N.push(C.shaderID):(N.push(C.customVertexShaderID),N.push(C.customFragmentShaderID)),C.defines!==void 0)for(const ot in C.defines)N.push(ot),N.push(C.defines[ot]);return C.isRawShaderMaterial===!1&&(L(N,C),R(N,C),N.push(o.outputColorSpace)),N.push(C.customProgramCacheKey),N.join()}function L(C,N){C.push(N.precision),C.push(N.outputColorSpace),C.push(N.envMapMode),C.push(N.envMapCubeUVHeight),C.push(N.mapUv),C.push(N.alphaMapUv),C.push(N.lightMapUv),C.push(N.aoMapUv),C.push(N.bumpMapUv),C.push(N.normalMapUv),C.push(N.displacementMapUv),C.push(N.emissiveMapUv),C.push(N.metalnessMapUv),C.push(N.roughnessMapUv),C.push(N.anisotropyMapUv),C.push(N.clearcoatMapUv),C.push(N.clearcoatNormalMapUv),C.push(N.clearcoatRoughnessMapUv),C.push(N.iridescenceMapUv),C.push(N.iridescenceThicknessMapUv),C.push(N.sheenColorMapUv),C.push(N.sheenRoughnessMapUv),C.push(N.specularMapUv),C.push(N.specularColorMapUv),C.push(N.specularIntensityMapUv),C.push(N.transmissionMapUv),C.push(N.thicknessMapUv),C.push(N.combine),C.push(N.fogExp2),C.push(N.sizeAttenuation),C.push(N.morphTargetsCount),C.push(N.morphAttributeCount),C.push(N.numDirLights),C.push(N.numPointLights),C.push(N.numSpotLights),C.push(N.numSpotLightMaps),C.push(N.numHemiLights),C.push(N.numRectAreaLights),C.push(N.numDirLightShadows),C.push(N.numPointLightShadows),C.push(N.numSpotLightShadows),C.push(N.numSpotLightShadowsWithMaps),C.push(N.numLightProbes),C.push(N.shadowMapType),C.push(N.toneMapping),C.push(N.numClippingPlanes),C.push(N.numClipIntersection),C.push(N.depthPacking)}function R(C,N){h.disableAll(),N.isWebGL2&&h.enable(0),N.supportsVertexTextures&&h.enable(1),N.instancing&&h.enable(2),N.instancingColor&&h.enable(3),N.matcap&&h.enable(4),N.envMap&&h.enable(5),N.normalMapObjectSpace&&h.enable(6),N.normalMapTangentSpace&&h.enable(7),N.clearcoat&&h.enable(8),N.iridescence&&h.enable(9),N.alphaTest&&h.enable(10),N.vertexColors&&h.enable(11),N.vertexAlphas&&h.enable(12),N.vertexUv1s&&h.enable(13),N.vertexUv2s&&h.enable(14),N.vertexUv3s&&h.enable(15),N.vertexTangents&&h.enable(16),N.anisotropy&&h.enable(17),N.alphaHash&&h.enable(18),N.batching&&h.enable(19),C.push(h.mask),h.disableAll(),N.fog&&h.enable(0),N.useFog&&h.enable(1),N.flatShading&&h.enable(2),N.logarithmicDepthBuffer&&h.enable(3),N.skinning&&h.enable(4),N.morphTargets&&h.enable(5),N.morphNormals&&h.enable(6),N.morphColors&&h.enable(7),N.premultipliedAlpha&&h.enable(8),N.shadowMapEnabled&&h.enable(9),N.useLegacyLights&&h.enable(10),N.doubleSided&&h.enable(11),N.flipSided&&h.enable(12),N.useDepthPacking&&h.enable(13),N.dithering&&h.enable(14),N.transmission&&h.enable(15),N.sheen&&h.enable(16),N.opaque&&h.enable(17),N.pointsUvs&&h.enable(18),N.decodeVideoTexture&&h.enable(19),C.push(h.mask)}function O(C){const N=A[C.type];let ot;if(N){const ft=Ui[N];ot=xx.clone(ft.uniforms)}else ot=C.uniforms;return ot}function X(C,N){let ot;for(let ft=0,Et=p.length;ft<Et;ft++){const k=p[ft];if(k.cacheKey===N){ot=k,++ot.usedTimes;break}}return ot===void 0&&(ot=new PA(o,N,C,u),p.push(ot)),ot}function I(C){if(--C.usedTimes===0){const N=p.indexOf(C);p[N]=p[p.length-1],p.pop(),C.destroy()}}function z(C){m.remove(C)}function lt(){m.dispose()}return{getParameters:x,getProgramCacheKey:v,getUniforms:O,acquireProgram:X,releaseProgram:I,releaseShaderCache:z,programs:p,dispose:lt}}function GA(){let o=new WeakMap;function e(u){let d=o.get(u);return d===void 0&&(d={},o.set(u,d)),d}function i(u){o.delete(u)}function s(u,d,h){o.get(u)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:s,dispose:l}}function VA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function q_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Y_(){const o=[];let e=0;const i=[],s=[],l=[];function u(){e=0,i.length=0,s.length=0,l.length=0}function d(S,y,M,A,T,x){let v=o[e];return v===void 0?(v={id:S.id,object:S,geometry:y,material:M,groupOrder:A,renderOrder:S.renderOrder,z:T,group:x},o[e]=v):(v.id=S.id,v.object=S,v.geometry=y,v.material=M,v.groupOrder=A,v.renderOrder=S.renderOrder,v.z=T,v.group=x),e++,v}function h(S,y,M,A,T,x){const v=d(S,y,M,A,T,x);M.transmission>0?s.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(S,y,M,A,T,x){const v=d(S,y,M,A,T,x);M.transmission>0?s.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(S,y){i.length>1&&i.sort(S||VA),s.length>1&&s.sort(y||q_),l.length>1&&l.sort(y||q_)}function _(){for(let S=e,y=o.length;S<y;S++){const M=o[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function kA(){let o=new WeakMap;function e(s,l){const u=o.get(s);let d;return u===void 0?(d=new Y_,o.set(s,[d])):l>=u.length?(d=new Y_,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function XA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new nt,color:new De};break;case"SpotLight":i={position:new nt,direction:new nt,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new De,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new De,groundColor:new De};break;case"RectAreaLight":i={color:new De,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[e.id]=i,i}}}function WA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let qA=0;function YA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function jA(o,e){const i=new XA,s=WA(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)l.probe.push(new nt);const u=new nt,d=new dn,h=new dn;function m(_,S){let y=0,M=0,A=0;for(let ft=0;ft<9;ft++)l.probe[ft].set(0,0,0);let T=0,x=0,v=0,L=0,R=0,O=0,X=0,I=0,z=0,lt=0,C=0;_.sort(YA);const N=S===!0?Math.PI:1;for(let ft=0,Et=_.length;ft<Et;ft++){const k=_[ft],et=k.color,P=k.intensity,q=k.distance,Q=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)y+=et.r*P*N,M+=et.g*P*N,A+=et.b*P*N;else if(k.isLightProbe){for(let ct=0;ct<9;ct++)l.probe[ct].addScaledVector(k.sh.coefficients[ct],P);C++}else if(k.isDirectionalLight){const ct=i.get(k);if(ct.color.copy(k.color).multiplyScalar(k.intensity*N),k.castShadow){const ut=k.shadow,D=s.get(k);D.shadowBias=ut.bias,D.shadowNormalBias=ut.normalBias,D.shadowRadius=ut.radius,D.shadowMapSize=ut.mapSize,l.directionalShadow[T]=D,l.directionalShadowMap[T]=Q,l.directionalShadowMatrix[T]=k.shadow.matrix,O++}l.directional[T]=ct,T++}else if(k.isSpotLight){const ct=i.get(k);ct.position.setFromMatrixPosition(k.matrixWorld),ct.color.copy(et).multiplyScalar(P*N),ct.distance=q,ct.coneCos=Math.cos(k.angle),ct.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ct.decay=k.decay,l.spot[v]=ct;const ut=k.shadow;if(k.map&&(l.spotLightMap[z]=k.map,z++,ut.updateMatrices(k),k.castShadow&&lt++),l.spotLightMatrix[v]=ut.matrix,k.castShadow){const D=s.get(k);D.shadowBias=ut.bias,D.shadowNormalBias=ut.normalBias,D.shadowRadius=ut.radius,D.shadowMapSize=ut.mapSize,l.spotShadow[v]=D,l.spotShadowMap[v]=Q,I++}v++}else if(k.isRectAreaLight){const ct=i.get(k);ct.color.copy(et).multiplyScalar(P),ct.halfWidth.set(k.width*.5,0,0),ct.halfHeight.set(0,k.height*.5,0),l.rectArea[L]=ct,L++}else if(k.isPointLight){const ct=i.get(k);if(ct.color.copy(k.color).multiplyScalar(k.intensity*N),ct.distance=k.distance,ct.decay=k.decay,k.castShadow){const ut=k.shadow,D=s.get(k);D.shadowBias=ut.bias,D.shadowNormalBias=ut.normalBias,D.shadowRadius=ut.radius,D.shadowMapSize=ut.mapSize,D.shadowCameraNear=ut.camera.near,D.shadowCameraFar=ut.camera.far,l.pointShadow[x]=D,l.pointShadowMap[x]=Q,l.pointShadowMatrix[x]=k.shadow.matrix,X++}l.point[x]=ct,x++}else if(k.isHemisphereLight){const ct=i.get(k);ct.skyColor.copy(k.color).multiplyScalar(P*N),ct.groundColor.copy(k.groundColor).multiplyScalar(P*N),l.hemi[R]=ct,R++}}L>0&&(e.isWebGL2?o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Ct.LTC_FLOAT_1,l.rectAreaLTC2=Ct.LTC_FLOAT_2):(l.rectAreaLTC1=Ct.LTC_HALF_1,l.rectAreaLTC2=Ct.LTC_HALF_2):o.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Ct.LTC_FLOAT_1,l.rectAreaLTC2=Ct.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Ct.LTC_HALF_1,l.rectAreaLTC2=Ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=y,l.ambient[1]=M,l.ambient[2]=A;const ot=l.hash;(ot.directionalLength!==T||ot.pointLength!==x||ot.spotLength!==v||ot.rectAreaLength!==L||ot.hemiLength!==R||ot.numDirectionalShadows!==O||ot.numPointShadows!==X||ot.numSpotShadows!==I||ot.numSpotMaps!==z||ot.numLightProbes!==C)&&(l.directional.length=T,l.spot.length=v,l.rectArea.length=L,l.point.length=x,l.hemi.length=R,l.directionalShadow.length=O,l.directionalShadowMap.length=O,l.pointShadow.length=X,l.pointShadowMap.length=X,l.spotShadow.length=I,l.spotShadowMap.length=I,l.directionalShadowMatrix.length=O,l.pointShadowMatrix.length=X,l.spotLightMatrix.length=I+z-lt,l.spotLightMap.length=z,l.numSpotLightShadowsWithMaps=lt,l.numLightProbes=C,ot.directionalLength=T,ot.pointLength=x,ot.spotLength=v,ot.rectAreaLength=L,ot.hemiLength=R,ot.numDirectionalShadows=O,ot.numPointShadows=X,ot.numSpotShadows=I,ot.numSpotMaps=z,ot.numLightProbes=C,l.version=qA++)}function p(_,S){let y=0,M=0,A=0,T=0,x=0;const v=S.matrixWorldInverse;for(let L=0,R=_.length;L<R;L++){const O=_[L];if(O.isDirectionalLight){const X=l.directional[y];X.direction.setFromMatrixPosition(O.matrixWorld),u.setFromMatrixPosition(O.target.matrixWorld),X.direction.sub(u),X.direction.transformDirection(v),y++}else if(O.isSpotLight){const X=l.spot[A];X.position.setFromMatrixPosition(O.matrixWorld),X.position.applyMatrix4(v),X.direction.setFromMatrixPosition(O.matrixWorld),u.setFromMatrixPosition(O.target.matrixWorld),X.direction.sub(u),X.direction.transformDirection(v),A++}else if(O.isRectAreaLight){const X=l.rectArea[T];X.position.setFromMatrixPosition(O.matrixWorld),X.position.applyMatrix4(v),h.identity(),d.copy(O.matrixWorld),d.premultiply(v),h.extractRotation(d),X.halfWidth.set(O.width*.5,0,0),X.halfHeight.set(0,O.height*.5,0),X.halfWidth.applyMatrix4(h),X.halfHeight.applyMatrix4(h),T++}else if(O.isPointLight){const X=l.point[M];X.position.setFromMatrixPosition(O.matrixWorld),X.position.applyMatrix4(v),M++}else if(O.isHemisphereLight){const X=l.hemi[x];X.direction.setFromMatrixPosition(O.matrixWorld),X.direction.transformDirection(v),x++}}}return{setup:m,setupView:p,state:l}}function j_(o,e){const i=new jA(o,e),s=[],l=[];function u(){s.length=0,l.length=0}function d(S){s.push(S)}function h(S){l.push(S)}function m(S){i.setup(s,S)}function p(S){i.setupView(s,S)}return{init:u,state:{lightsArray:s,shadowsArray:l,lights:i},setupLights:m,setupLightsView:p,pushLight:d,pushShadow:h}}function ZA(o,e){let i=new WeakMap;function s(u,d=0){const h=i.get(u);let m;return h===void 0?(m=new j_(o,e),i.set(u,[m])):d>=h.length?(m=new j_(o,e),h.push(m)):m=h[d],m}function l(){i=new WeakMap}return{get:s,dispose:l}}class KA extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QA extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const JA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$A=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tb(o,e,i){let s=new R0;const l=new be,u=new be,d=new yn,h=new KA({depthPacking:qy}),m=new QA,p={},_=i.maxTextureSize,S={[Ga]:Fn,[Fn]:Ga,[ta]:ta},y=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:JA,fragmentShader:$A}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const A=new Ti;A.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Mi(A,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=i0;let v=this.type;this.render=function(I,z,lt){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;const C=o.getRenderTarget(),N=o.getActiveCubeFace(),ot=o.getActiveMipmapLevel(),ft=o.state;ft.setBlending(Ia),ft.buffers.color.setClear(1,1,1,1),ft.buffers.depth.setTest(!0),ft.setScissorTest(!1);const Et=v!==$i&&this.type===$i,k=v===$i&&this.type!==$i;for(let et=0,P=I.length;et<P;et++){const q=I[et],Q=q.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const ct=Q.getFrameExtents();if(l.multiply(ct),u.copy(Q.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/ct.x),l.x=u.x*ct.x,Q.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/ct.y),l.y=u.y*ct.y,Q.mapSize.y=u.y)),Q.map===null||Et===!0||k===!0){const D=this.type!==$i?{minFilter:wn,magFilter:wn}:{};Q.map!==null&&Q.map.dispose(),Q.map=new gr(l.x,l.y,D),Q.map.texture.name=q.name+".shadowMap",Q.camera.updateProjectionMatrix()}o.setRenderTarget(Q.map),o.clear();const ut=Q.getViewportCount();for(let D=0;D<ut;D++){const V=Q.getViewport(D);d.set(u.x*V.x,u.y*V.y,u.x*V.z,u.y*V.w),ft.viewport(d),Q.updateMatrices(q,D),s=Q.getFrustum(),O(z,lt,Q.camera,q,this.type)}Q.isPointLightShadow!==!0&&this.type===$i&&L(Q,lt),Q.needsUpdate=!1}v=this.type,x.needsUpdate=!1,o.setRenderTarget(C,N,ot)};function L(I,z){const lt=e.update(T);y.defines.VSM_SAMPLES!==I.blurSamples&&(y.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new gr(l.x,l.y)),y.uniforms.shadow_pass.value=I.map.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(z,null,lt,y,T,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(z,null,lt,M,T,null)}function R(I,z,lt,C){let N=null;const ot=lt.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(ot!==void 0)N=ot;else if(N=lt.isPointLight===!0?m:h,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ft=N.uuid,Et=z.uuid;let k=p[ft];k===void 0&&(k={},p[ft]=k);let et=k[Et];et===void 0&&(et=N.clone(),k[Et]=et,z.addEventListener("dispose",X)),N=et}if(N.visible=z.visible,N.wireframe=z.wireframe,C===$i?N.side=z.shadowSide!==null?z.shadowSide:z.side:N.side=z.shadowSide!==null?z.shadowSide:S[z.side],N.alphaMap=z.alphaMap,N.alphaTest=z.alphaTest,N.map=z.map,N.clipShadows=z.clipShadows,N.clippingPlanes=z.clippingPlanes,N.clipIntersection=z.clipIntersection,N.displacementMap=z.displacementMap,N.displacementScale=z.displacementScale,N.displacementBias=z.displacementBias,N.wireframeLinewidth=z.wireframeLinewidth,N.linewidth=z.linewidth,lt.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const ft=o.properties.get(N);ft.light=lt}return N}function O(I,z,lt,C,N){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&N===$i)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,I.matrixWorld);const Et=e.update(I),k=I.material;if(Array.isArray(k)){const et=Et.groups;for(let P=0,q=et.length;P<q;P++){const Q=et[P],ct=k[Q.materialIndex];if(ct&&ct.visible){const ut=R(I,ct,C,N);I.onBeforeShadow(o,I,z,lt,Et,ut,Q),o.renderBufferDirect(lt,null,Et,ut,I,Q),I.onAfterShadow(o,I,z,lt,Et,ut,Q)}}}else if(k.visible){const et=R(I,k,C,N);I.onBeforeShadow(o,I,z,lt,Et,et,null),o.renderBufferDirect(lt,null,Et,et,I,null),I.onAfterShadow(o,I,z,lt,Et,et,null)}}const ft=I.children;for(let Et=0,k=ft.length;Et<k;Et++)O(ft[Et],z,lt,C,N)}function X(I){I.target.removeEventListener("dispose",X);for(const lt in p){const C=p[lt],N=I.target.uuid;N in C&&(C[N].dispose(),delete C[N])}}}function eb(o,e,i){const s=i.isWebGL2;function l(){let F=!1;const Ut=new yn;let Rt=null;const $t=new yn(0,0,0,0);return{setMask:function(jt){Rt!==jt&&!F&&(o.colorMask(jt,jt,jt,jt),Rt=jt)},setLocked:function(jt){F=jt},setClear:function(jt,Le,Re,We,je){je===!0&&(jt*=We,Le*=We,Re*=We),Ut.set(jt,Le,Re,We),$t.equals(Ut)===!1&&(o.clearColor(jt,Le,Re,We),$t.copy(Ut))},reset:function(){F=!1,Rt=null,$t.set(-1,0,0,0)}}}function u(){let F=!1,Ut=null,Rt=null,$t=null;return{setTest:function(jt){jt?mt(o.DEPTH_TEST):_t(o.DEPTH_TEST)},setMask:function(jt){Ut!==jt&&!F&&(o.depthMask(jt),Ut=jt)},setFunc:function(jt){if(Rt!==jt){switch(jt){case xy:o.depthFunc(o.NEVER);break;case My:o.depthFunc(o.ALWAYS);break;case Ey:o.depthFunc(o.LESS);break;case gc:o.depthFunc(o.LEQUAL);break;case Ty:o.depthFunc(o.EQUAL);break;case Ay:o.depthFunc(o.GEQUAL);break;case by:o.depthFunc(o.GREATER);break;case Ry:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Rt=jt}},setLocked:function(jt){F=jt},setClear:function(jt){$t!==jt&&(o.clearDepth(jt),$t=jt)},reset:function(){F=!1,Ut=null,Rt=null,$t=null}}}function d(){let F=!1,Ut=null,Rt=null,$t=null,jt=null,Le=null,Re=null,We=null,je=null;return{setTest:function(Ne){F||(Ne?mt(o.STENCIL_TEST):_t(o.STENCIL_TEST))},setMask:function(Ne){Ut!==Ne&&!F&&(o.stencilMask(Ne),Ut=Ne)},setFunc:function(Ne,un,Gn){(Rt!==Ne||$t!==un||jt!==Gn)&&(o.stencilFunc(Ne,un,Gn),Rt=Ne,$t=un,jt=Gn)},setOp:function(Ne,un,Gn){(Le!==Ne||Re!==un||We!==Gn)&&(o.stencilOp(Ne,un,Gn),Le=Ne,Re=un,We=Gn)},setLocked:function(Ne){F=Ne},setClear:function(Ne){je!==Ne&&(o.clearStencil(Ne),je=Ne)},reset:function(){F=!1,Ut=null,Rt=null,$t=null,jt=null,Le=null,Re=null,We=null,je=null}}}const h=new l,m=new u,p=new d,_=new WeakMap,S=new WeakMap;let y={},M={},A=new WeakMap,T=[],x=null,v=!1,L=null,R=null,O=null,X=null,I=null,z=null,lt=null,C=new De(0,0,0),N=0,ot=!1,ft=null,Et=null,k=null,et=null,P=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,ct=0;const ut=o.getParameter(o.VERSION);ut.indexOf("WebGL")!==-1?(ct=parseFloat(/^WebGL (\d)/.exec(ut)[1]),Q=ct>=1):ut.indexOf("OpenGL ES")!==-1&&(ct=parseFloat(/^OpenGL ES (\d)/.exec(ut)[1]),Q=ct>=2);let D=null,V={};const G=o.getParameter(o.SCISSOR_BOX),Z=o.getParameter(o.VIEWPORT),pt=new yn().fromArray(G),Mt=new yn().fromArray(Z);function Tt(F,Ut,Rt,$t){const jt=new Uint8Array(4),Le=o.createTexture();o.bindTexture(F,Le),o.texParameteri(F,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(F,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Re=0;Re<Rt;Re++)s&&(F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY)?o.texImage3D(Ut,0,o.RGBA,1,1,$t,0,o.RGBA,o.UNSIGNED_BYTE,jt):o.texImage2D(Ut+Re,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,jt);return Le}const Xt={};Xt[o.TEXTURE_2D]=Tt(o.TEXTURE_2D,o.TEXTURE_2D,1),Xt[o.TEXTURE_CUBE_MAP]=Tt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),s&&(Xt[o.TEXTURE_2D_ARRAY]=Tt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Xt[o.TEXTURE_3D]=Tt(o.TEXTURE_3D,o.TEXTURE_3D,1,1)),h.setClear(0,0,0,1),m.setClear(1),p.setClear(0),mt(o.DEPTH_TEST),m.setFunc(gc),Jt(!1),U(Ug),mt(o.CULL_FACE),Nt(Ia);function mt(F){y[F]!==!0&&(o.enable(F),y[F]=!0)}function _t(F){y[F]!==!1&&(o.disable(F),y[F]=!1)}function Ft(F,Ut){return M[F]!==Ut?(o.bindFramebuffer(F,Ut),M[F]=Ut,s&&(F===o.DRAW_FRAMEBUFFER&&(M[o.FRAMEBUFFER]=Ut),F===o.FRAMEBUFFER&&(M[o.DRAW_FRAMEBUFFER]=Ut)),!0):!1}function Y(F,Ut){let Rt=T,$t=!1;if(F)if(Rt=A.get(Ut),Rt===void 0&&(Rt=[],A.set(Ut,Rt)),F.isWebGLMultipleRenderTargets){const jt=F.texture;if(Rt.length!==jt.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let Le=0,Re=jt.length;Le<Re;Le++)Rt[Le]=o.COLOR_ATTACHMENT0+Le;Rt.length=jt.length,$t=!0}}else Rt[0]!==o.COLOR_ATTACHMENT0&&(Rt[0]=o.COLOR_ATTACHMENT0,$t=!0);else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,$t=!0);$t&&(i.isWebGL2?o.drawBuffers(Rt):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Rt))}function Te(F){return x!==F?(o.useProgram(F),x=F,!0):!1}const Lt={[fr]:o.FUNC_ADD,[sy]:o.FUNC_SUBTRACT,[oy]:o.FUNC_REVERSE_SUBTRACT};if(s)Lt[Ng]=o.MIN,Lt[Og]=o.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Lt[Ng]=F.MIN_EXT,Lt[Og]=F.MAX_EXT)}const Pt={[ly]:o.ZERO,[cy]:o.ONE,[uy]:o.SRC_COLOR,[Sh]:o.SRC_ALPHA,[gy]:o.SRC_ALPHA_SATURATE,[py]:o.DST_COLOR,[hy]:o.DST_ALPHA,[fy]:o.ONE_MINUS_SRC_COLOR,[yh]:o.ONE_MINUS_SRC_ALPHA,[my]:o.ONE_MINUS_DST_COLOR,[dy]:o.ONE_MINUS_DST_ALPHA,[_y]:o.CONSTANT_COLOR,[vy]:o.ONE_MINUS_CONSTANT_COLOR,[Sy]:o.CONSTANT_ALPHA,[yy]:o.ONE_MINUS_CONSTANT_ALPHA};function Nt(F,Ut,Rt,$t,jt,Le,Re,We,je,Ne){if(F===Ia){v===!0&&(_t(o.BLEND),v=!1);return}if(v===!1&&(mt(o.BLEND),v=!0),F!==ry){if(F!==L||Ne!==ot){if((R!==fr||I!==fr)&&(o.blendEquation(o.FUNC_ADD),R=fr,I=fr),Ne)switch(F){case gs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case vh:o.blendFunc(o.ONE,o.ONE);break;case Dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case gs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case vh:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Dg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Lg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}O=null,X=null,z=null,lt=null,C.set(0,0,0),N=0,L=F,ot=Ne}return}jt=jt||Ut,Le=Le||Rt,Re=Re||$t,(Ut!==R||jt!==I)&&(o.blendEquationSeparate(Lt[Ut],Lt[jt]),R=Ut,I=jt),(Rt!==O||$t!==X||Le!==z||Re!==lt)&&(o.blendFuncSeparate(Pt[Rt],Pt[$t],Pt[Le],Pt[Re]),O=Rt,X=$t,z=Le,lt=Re),(We.equals(C)===!1||je!==N)&&(o.blendColor(We.r,We.g,We.b,je),C.copy(We),N=je),L=F,ot=!1}function he(F,Ut){F.side===ta?_t(o.CULL_FACE):mt(o.CULL_FACE);let Rt=F.side===Fn;Ut&&(Rt=!Rt),Jt(Rt),F.blending===gs&&F.transparent===!1?Nt(Ia):Nt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),m.setFunc(F.depthFunc),m.setTest(F.depthTest),m.setMask(F.depthWrite),h.setMask(F.colorWrite);const $t=F.stencilWrite;p.setTest($t),$t&&(p.setMask(F.stencilWriteMask),p.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),p.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),$(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?mt(o.SAMPLE_ALPHA_TO_COVERAGE):_t(o.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(F){ft!==F&&(F?o.frontFace(o.CW):o.frontFace(o.CCW),ft=F)}function U(F){F!==ny?(mt(o.CULL_FACE),F!==Et&&(F===Ug?o.cullFace(o.BACK):F===iy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):_t(o.CULL_FACE),Et=F}function b(F){F!==k&&(Q&&o.lineWidth(F),k=F)}function $(F,Ut,Rt){F?(mt(o.POLYGON_OFFSET_FILL),(et!==Ut||P!==Rt)&&(o.polygonOffset(Ut,Rt),et=Ut,P=Rt)):_t(o.POLYGON_OFFSET_FILL)}function St(F){F?mt(o.SCISSOR_TEST):_t(o.SCISSOR_TEST)}function xt(F){F===void 0&&(F=o.TEXTURE0+q-1),D!==F&&(o.activeTexture(F),D=F)}function vt(F,Ut,Rt){Rt===void 0&&(D===null?Rt=o.TEXTURE0+q-1:Rt=D);let $t=V[Rt];$t===void 0&&($t={type:void 0,texture:void 0},V[Rt]=$t),($t.type!==F||$t.texture!==Ut)&&(D!==Rt&&(o.activeTexture(Rt),D=Rt),o.bindTexture(F,Ut||Xt[F]),$t.type=F,$t.texture=Ut)}function Gt(){const F=V[D];F!==void 0&&F.type!==void 0&&(o.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function wt(){try{o.compressedTexImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{o.compressedTexImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Yt(){try{o.texSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{o.texSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{o.texStorage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function zt(){try{o.texStorage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{o.texImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Dt(){try{o.texImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Bt(F){pt.equals(F)===!1&&(o.scissor(F.x,F.y,F.z,F.w),pt.copy(F))}function pe(F){Mt.equals(F)===!1&&(o.viewport(F.x,F.y,F.z,F.w),Mt.copy(F))}function ye(F,Ut){let Rt=S.get(Ut);Rt===void 0&&(Rt=new WeakMap,S.set(Ut,Rt));let $t=Rt.get(F);$t===void 0&&($t=o.getUniformBlockIndex(Ut,F.name),Rt.set(F,$t))}function se(F,Ut){const $t=S.get(Ut).get(F);_.get(Ut)!==$t&&(o.uniformBlockBinding(Ut,$t,F.__bindingPointIndex),_.set(Ut,$t))}function At(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),s===!0&&(o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),y={},D=null,V={},M={},A=new WeakMap,T=[],x=null,v=!1,L=null,R=null,O=null,X=null,I=null,z=null,lt=null,C=new De(0,0,0),N=0,ot=!1,ft=null,Et=null,k=null,et=null,P=null,pt.set(0,0,o.canvas.width,o.canvas.height),Mt.set(0,0,o.canvas.width,o.canvas.height),h.reset(),m.reset(),p.reset()}return{buffers:{color:h,depth:m,stencil:p},enable:mt,disable:_t,bindFramebuffer:Ft,drawBuffers:Y,useProgram:Te,setBlending:Nt,setMaterial:he,setFlipSided:Jt,setCullFace:U,setLineWidth:b,setPolygonOffset:$,setScissorTest:St,activeTexture:xt,bindTexture:vt,unbindTexture:Gt,compressedTexImage2D:wt,compressedTexImage3D:It,texImage2D:bt,texImage3D:Dt,updateUBOMapping:ye,uniformBlockBinding:se,texStorage2D:re,texStorage3D:zt,texSubImage2D:Yt,texSubImage3D:ae,compressedTexSubImage2D:yt,compressedTexSubImage3D:xe,scissor:Bt,viewport:pe,reset:At}}function nb(o,e,i,s,l,u,d){const h=l.isWebGL2,m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let S;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,b){return M?new OffscreenCanvas(U,b):xc("canvas")}function T(U,b,$,St){let xt=1;if((U.width>St||U.height>St)&&(xt=St/Math.max(U.width,U.height)),xt<1||b===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const vt=b?Rh:Math.floor,Gt=vt(xt*U.width),wt=vt(xt*U.height);S===void 0&&(S=A(Gt,wt));const It=$?A(Gt,wt):S;return It.width=Gt,It.height=wt,It.getContext("2d").drawImage(U,0,0,Gt,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+Gt+"x"+wt+")."),It}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function x(U){return u_(U.width)&&u_(U.height)}function v(U){return h?!1:U.wrapS!==yi||U.wrapT!==yi||U.minFilter!==wn&&U.minFilter!==ci}function L(U,b){return U.generateMipmaps&&b&&U.minFilter!==wn&&U.minFilter!==ci}function R(U){o.generateMipmap(U)}function O(U,b,$,St,xt=!1){if(h===!1)return b;if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let vt=b;if(b===o.RED&&($===o.FLOAT&&(vt=o.R32F),$===o.HALF_FLOAT&&(vt=o.R16F),$===o.UNSIGNED_BYTE&&(vt=o.R8)),b===o.RED_INTEGER&&($===o.UNSIGNED_BYTE&&(vt=o.R8UI),$===o.UNSIGNED_SHORT&&(vt=o.R16UI),$===o.UNSIGNED_INT&&(vt=o.R32UI),$===o.BYTE&&(vt=o.R8I),$===o.SHORT&&(vt=o.R16I),$===o.INT&&(vt=o.R32I)),b===o.RG&&($===o.FLOAT&&(vt=o.RG32F),$===o.HALF_FLOAT&&(vt=o.RG16F),$===o.UNSIGNED_BYTE&&(vt=o.RG8)),b===o.RGBA){const Gt=xt?_c:Be.getTransfer(St);$===o.FLOAT&&(vt=o.RGBA32F),$===o.HALF_FLOAT&&(vt=o.RGBA16F),$===o.UNSIGNED_BYTE&&(vt=Gt===ke?o.SRGB8_ALPHA8:o.RGBA8),$===o.UNSIGNED_SHORT_4_4_4_4&&(vt=o.RGBA4),$===o.UNSIGNED_SHORT_5_5_5_1&&(vt=o.RGB5_A1)}return(vt===o.R16F||vt===o.R32F||vt===o.RG16F||vt===o.RG32F||vt===o.RGBA16F||vt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),vt}function X(U,b,$){return L(U,$)===!0||U.isFramebufferTexture&&U.minFilter!==wn&&U.minFilter!==ci?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function I(U){return U===wn||U===zg||U===Hf?o.NEAREST:o.LINEAR}function z(U){const b=U.target;b.removeEventListener("dispose",z),C(b),b.isVideoTexture&&_.delete(b)}function lt(U){const b=U.target;b.removeEventListener("dispose",lt),ot(b)}function C(U){const b=s.get(U);if(b.__webglInit===void 0)return;const $=U.source,St=y.get($);if(St){const xt=St[b.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&N(U),Object.keys(St).length===0&&y.delete($)}s.remove(U)}function N(U){const b=s.get(U);o.deleteTexture(b.__webglTexture);const $=U.source,St=y.get($);delete St[b.__cacheKey],d.memory.textures--}function ot(U){const b=U.texture,$=s.get(U),St=s.get(b);if(St.__webglTexture!==void 0&&(o.deleteTexture(St.__webglTexture),d.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let xt=0;xt<6;xt++){if(Array.isArray($.__webglFramebuffer[xt]))for(let vt=0;vt<$.__webglFramebuffer[xt].length;vt++)o.deleteFramebuffer($.__webglFramebuffer[xt][vt]);else o.deleteFramebuffer($.__webglFramebuffer[xt]);$.__webglDepthbuffer&&o.deleteRenderbuffer($.__webglDepthbuffer[xt])}else{if(Array.isArray($.__webglFramebuffer))for(let xt=0;xt<$.__webglFramebuffer.length;xt++)o.deleteFramebuffer($.__webglFramebuffer[xt]);else o.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&o.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&o.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let xt=0;xt<$.__webglColorRenderbuffer.length;xt++)$.__webglColorRenderbuffer[xt]&&o.deleteRenderbuffer($.__webglColorRenderbuffer[xt]);$.__webglDepthRenderbuffer&&o.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let xt=0,vt=b.length;xt<vt;xt++){const Gt=s.get(b[xt]);Gt.__webglTexture&&(o.deleteTexture(Gt.__webglTexture),d.memory.textures--),s.remove(b[xt])}s.remove(b),s.remove(U)}let ft=0;function Et(){ft=0}function k(){const U=ft;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),ft+=1,U}function et(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function P(U,b){const $=s.get(U);if(U.isVideoTexture&&he(U),U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){const St=U.image;if(St===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(St.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pt($,U,b);return}}i.bindTexture(o.TEXTURE_2D,$.__webglTexture,o.TEXTURE0+b)}function q(U,b){const $=s.get(U);if(U.version>0&&$.__version!==U.version){pt($,U,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,$.__webglTexture,o.TEXTURE0+b)}function Q(U,b){const $=s.get(U);if(U.version>0&&$.__version!==U.version){pt($,U,b);return}i.bindTexture(o.TEXTURE_3D,$.__webglTexture,o.TEXTURE0+b)}function ct(U,b){const $=s.get(U);if(U.version>0&&$.__version!==U.version){Mt($,U,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,$.__webglTexture,o.TEXTURE0+b)}const ut={[Eh]:o.REPEAT,[yi]:o.CLAMP_TO_EDGE,[Th]:o.MIRRORED_REPEAT},D={[wn]:o.NEAREST,[zg]:o.NEAREST_MIPMAP_NEAREST,[Hf]:o.NEAREST_MIPMAP_LINEAR,[ci]:o.LINEAR,[Py]:o.LINEAR_MIPMAP_NEAREST,[Co]:o.LINEAR_MIPMAP_LINEAR},V={[Zy]:o.NEVER,[ex]:o.ALWAYS,[Ky]:o.LESS,[p0]:o.LEQUAL,[Qy]:o.EQUAL,[tx]:o.GEQUAL,[Jy]:o.GREATER,[$y]:o.NOTEQUAL};function G(U,b,$){if($?(o.texParameteri(U,o.TEXTURE_WRAP_S,ut[b.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,ut[b.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,ut[b.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,D[b.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,D[b.minFilter])):(o.texParameteri(U,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(U,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,o.CLAMP_TO_EDGE),(b.wrapS!==yi||b.wrapT!==yi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(U,o.TEXTURE_MAG_FILTER,I(b.magFilter)),o.texParameteri(U,o.TEXTURE_MIN_FILTER,I(b.minFilter)),b.minFilter!==wn&&b.minFilter!==ci&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,V[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const St=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===wn||b.minFilter!==Hf&&b.minFilter!==Co||b.type===Ba&&e.has("OES_texture_float_linear")===!1||h===!1&&b.type===wo&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||s.get(b).__currentAnisotropy)&&(o.texParameterf(U,St.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy)}}function Z(U,b){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",z));const St=b.source;let xt=y.get(St);xt===void 0&&(xt={},y.set(St,xt));const vt=et(b);if(vt!==U.__cacheKey){xt[vt]===void 0&&(xt[vt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,$=!0),xt[vt].usedTimes++;const Gt=xt[U.__cacheKey];Gt!==void 0&&(xt[U.__cacheKey].usedTimes--,Gt.usedTimes===0&&N(b)),U.__cacheKey=vt,U.__webglTexture=xt[vt].texture}return $}function pt(U,b,$){let St=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(St=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(St=o.TEXTURE_3D);const xt=Z(U,b),vt=b.source;i.bindTexture(St,U.__webglTexture,o.TEXTURE0+$);const Gt=s.get(vt);if(vt.version!==Gt.__version||xt===!0){i.activeTexture(o.TEXTURE0+$);const wt=Be.getPrimaries(Be.workingColorSpace),It=b.colorSpace===fi?null:Be.getPrimaries(b.colorSpace),Yt=b.colorSpace===fi||wt===It?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const ae=v(b)&&x(b.image)===!1;let yt=T(b.image,ae,!1,l.maxTextureSize);yt=Jt(b,yt);const xe=x(yt)||h,re=u.convert(b.format,b.colorSpace);let zt=u.convert(b.type),bt=O(b.internalFormat,re,zt,b.colorSpace,b.isVideoTexture);G(St,b,xe);let Dt;const Bt=b.mipmaps,pe=h&&b.isVideoTexture!==!0&&bt!==h0,ye=Gt.__version===void 0||xt===!0,se=X(b,yt,xe);if(b.isDepthTexture)bt=o.DEPTH_COMPONENT,h?b.type===Ba?bt=o.DEPTH_COMPONENT32F:b.type===Pa?bt=o.DEPTH_COMPONENT24:b.type===dr?bt=o.DEPTH24_STENCIL8:bt=o.DEPTH_COMPONENT16:b.type===Ba&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===pr&&bt===o.DEPTH_COMPONENT&&b.type!==Lh&&b.type!==Pa&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Pa,zt=u.convert(b.type)),b.format===ys&&bt===o.DEPTH_COMPONENT&&(bt=o.DEPTH_STENCIL,b.type!==dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=dr,zt=u.convert(b.type))),ye&&(pe?i.texStorage2D(o.TEXTURE_2D,1,bt,yt.width,yt.height):i.texImage2D(o.TEXTURE_2D,0,bt,yt.width,yt.height,0,re,zt,null));else if(b.isDataTexture)if(Bt.length>0&&xe){pe&&ye&&i.texStorage2D(o.TEXTURE_2D,se,bt,Bt[0].width,Bt[0].height);for(let At=0,F=Bt.length;At<F;At++)Dt=Bt[At],pe?i.texSubImage2D(o.TEXTURE_2D,At,0,0,Dt.width,Dt.height,re,zt,Dt.data):i.texImage2D(o.TEXTURE_2D,At,bt,Dt.width,Dt.height,0,re,zt,Dt.data);b.generateMipmaps=!1}else pe?(ye&&i.texStorage2D(o.TEXTURE_2D,se,bt,yt.width,yt.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,yt.width,yt.height,re,zt,yt.data)):i.texImage2D(o.TEXTURE_2D,0,bt,yt.width,yt.height,0,re,zt,yt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){pe&&ye&&i.texStorage3D(o.TEXTURE_2D_ARRAY,se,bt,Bt[0].width,Bt[0].height,yt.depth);for(let At=0,F=Bt.length;At<F;At++)Dt=Bt[At],b.format!==xi?re!==null?pe?i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Dt.width,Dt.height,yt.depth,re,Dt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,At,bt,Dt.width,Dt.height,yt.depth,0,Dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?i.texSubImage3D(o.TEXTURE_2D_ARRAY,At,0,0,0,Dt.width,Dt.height,yt.depth,re,zt,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,At,bt,Dt.width,Dt.height,yt.depth,0,re,zt,Dt.data)}else{pe&&ye&&i.texStorage2D(o.TEXTURE_2D,se,bt,Bt[0].width,Bt[0].height);for(let At=0,F=Bt.length;At<F;At++)Dt=Bt[At],b.format!==xi?re!==null?pe?i.compressedTexSubImage2D(o.TEXTURE_2D,At,0,0,Dt.width,Dt.height,re,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,At,bt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?i.texSubImage2D(o.TEXTURE_2D,At,0,0,Dt.width,Dt.height,re,zt,Dt.data):i.texImage2D(o.TEXTURE_2D,At,bt,Dt.width,Dt.height,0,re,zt,Dt.data)}else if(b.isDataArrayTexture)pe?(ye&&i.texStorage3D(o.TEXTURE_2D_ARRAY,se,bt,yt.width,yt.height,yt.depth),i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,yt.width,yt.height,yt.depth,re,zt,yt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,bt,yt.width,yt.height,yt.depth,0,re,zt,yt.data);else if(b.isData3DTexture)pe?(ye&&i.texStorage3D(o.TEXTURE_3D,se,bt,yt.width,yt.height,yt.depth),i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,yt.width,yt.height,yt.depth,re,zt,yt.data)):i.texImage3D(o.TEXTURE_3D,0,bt,yt.width,yt.height,yt.depth,0,re,zt,yt.data);else if(b.isFramebufferTexture){if(ye)if(pe)i.texStorage2D(o.TEXTURE_2D,se,bt,yt.width,yt.height);else{let At=yt.width,F=yt.height;for(let Ut=0;Ut<se;Ut++)i.texImage2D(o.TEXTURE_2D,Ut,bt,At,F,0,re,zt,null),At>>=1,F>>=1}}else if(Bt.length>0&&xe){pe&&ye&&i.texStorage2D(o.TEXTURE_2D,se,bt,Bt[0].width,Bt[0].height);for(let At=0,F=Bt.length;At<F;At++)Dt=Bt[At],pe?i.texSubImage2D(o.TEXTURE_2D,At,0,0,re,zt,Dt):i.texImage2D(o.TEXTURE_2D,At,bt,re,zt,Dt);b.generateMipmaps=!1}else pe?(ye&&i.texStorage2D(o.TEXTURE_2D,se,bt,yt.width,yt.height),i.texSubImage2D(o.TEXTURE_2D,0,0,0,re,zt,yt)):i.texImage2D(o.TEXTURE_2D,0,bt,re,zt,yt);L(b,xe)&&R(St),Gt.__version=vt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Mt(U,b,$){if(b.image.length!==6)return;const St=Z(U,b),xt=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+$);const vt=s.get(xt);if(xt.version!==vt.__version||St===!0){i.activeTexture(o.TEXTURE0+$);const Gt=Be.getPrimaries(Be.workingColorSpace),wt=b.colorSpace===fi?null:Be.getPrimaries(b.colorSpace),It=b.colorSpace===fi||Gt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Yt=b.isCompressedTexture||b.image[0].isCompressedTexture,ae=b.image[0]&&b.image[0].isDataTexture,yt=[];for(let At=0;At<6;At++)!Yt&&!ae?yt[At]=T(b.image[At],!1,!0,l.maxCubemapSize):yt[At]=ae?b.image[At].image:b.image[At],yt[At]=Jt(b,yt[At]);const xe=yt[0],re=x(xe)||h,zt=u.convert(b.format,b.colorSpace),bt=u.convert(b.type),Dt=O(b.internalFormat,zt,bt,b.colorSpace),Bt=h&&b.isVideoTexture!==!0,pe=vt.__version===void 0||St===!0;let ye=X(b,xe,re);G(o.TEXTURE_CUBE_MAP,b,re);let se;if(Yt){Bt&&pe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,ye,Dt,xe.width,xe.height);for(let At=0;At<6;At++){se=yt[At].mipmaps;for(let F=0;F<se.length;F++){const Ut=se[F];b.format!==xi?zt!==null?Bt?i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,F,0,0,Ut.width,Ut.height,zt,Ut.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,F,Dt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,F,0,0,Ut.width,Ut.height,zt,bt,Ut.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,F,Dt,Ut.width,Ut.height,0,zt,bt,Ut.data)}}}else{se=b.mipmaps,Bt&&pe&&(se.length>0&&ye++,i.texStorage2D(o.TEXTURE_CUBE_MAP,ye,Dt,yt[0].width,yt[0].height));for(let At=0;At<6;At++)if(ae){Bt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,yt[At].width,yt[At].height,zt,bt,yt[At].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Dt,yt[At].width,yt[At].height,0,zt,bt,yt[At].data);for(let F=0;F<se.length;F++){const Rt=se[F].image[At].image;Bt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,F+1,0,0,Rt.width,Rt.height,zt,bt,Rt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,F+1,Dt,Rt.width,Rt.height,0,zt,bt,Rt.data)}}else{Bt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,0,0,zt,bt,yt[At]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,Dt,zt,bt,yt[At]);for(let F=0;F<se.length;F++){const Ut=se[F];Bt?i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,F+1,0,0,zt,bt,Ut.image[At]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+At,F+1,Dt,zt,bt,Ut.image[At])}}}L(b,re)&&R(o.TEXTURE_CUBE_MAP),vt.__version=xt.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Tt(U,b,$,St,xt,vt){const Gt=u.convert($.format,$.colorSpace),wt=u.convert($.type),It=O($.internalFormat,Gt,wt,$.colorSpace);if(!s.get(b).__hasExternalTextures){const ae=Math.max(1,b.width>>vt),yt=Math.max(1,b.height>>vt);xt===o.TEXTURE_3D||xt===o.TEXTURE_2D_ARRAY?i.texImage3D(xt,vt,It,ae,yt,b.depth,0,Gt,wt,null):i.texImage2D(xt,vt,It,ae,yt,0,Gt,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Nt(b)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,St,xt,s.get($).__webglTexture,0,Pt(b)):(xt===o.TEXTURE_2D||xt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,St,xt,s.get($).__webglTexture,vt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xt(U,b,$){if(o.bindRenderbuffer(o.RENDERBUFFER,U),b.depthBuffer&&!b.stencilBuffer){let St=h===!0?o.DEPTH_COMPONENT24:o.DEPTH_COMPONENT16;if($||Nt(b)){const xt=b.depthTexture;xt&&xt.isDepthTexture&&(xt.type===Ba?St=o.DEPTH_COMPONENT32F:xt.type===Pa&&(St=o.DEPTH_COMPONENT24));const vt=Pt(b);Nt(b)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,vt,St,b.width,b.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,vt,St,b.width,b.height)}else o.renderbufferStorage(o.RENDERBUFFER,St,b.width,b.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,U)}else if(b.depthBuffer&&b.stencilBuffer){const St=Pt(b);$&&Nt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,St,o.DEPTH24_STENCIL8,b.width,b.height):Nt(b)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,St,o.DEPTH24_STENCIL8,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,U)}else{const St=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let xt=0;xt<St.length;xt++){const vt=St[xt],Gt=u.convert(vt.format,vt.colorSpace),wt=u.convert(vt.type),It=O(vt.internalFormat,Gt,wt,vt.colorSpace),Yt=Pt(b);$&&Nt(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,It,b.width,b.height):Nt(b)?m.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Yt,It,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,It,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function mt(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),P(b.depthTexture,0);const St=s.get(b.depthTexture).__webglTexture,xt=Pt(b);if(b.depthTexture.format===pr)Nt(b)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,xt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(b.depthTexture.format===ys)Nt(b)?m.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,xt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function _t(U){const b=s.get(U),$=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");mt(b.__webglFramebuffer,U)}else if($){b.__webglDepthbuffer=[];for(let St=0;St<6;St++)i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[St]),b.__webglDepthbuffer[St]=o.createRenderbuffer(),Xt(b.__webglDepthbuffer[St],U,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),Xt(b.__webglDepthbuffer,U,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ft(U,b,$){const St=s.get(U);b!==void 0&&Tt(St.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),$!==void 0&&_t(U)}function Y(U){const b=U.texture,$=s.get(U),St=s.get(b);U.addEventListener("dispose",lt),U.isWebGLMultipleRenderTargets!==!0&&(St.__webglTexture===void 0&&(St.__webglTexture=o.createTexture()),St.__version=b.version,d.memory.textures++);const xt=U.isWebGLCubeRenderTarget===!0,vt=U.isWebGLMultipleRenderTargets===!0,Gt=x(U)||h;if(xt){$.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(h&&b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[wt]=[];for(let It=0;It<b.mipmaps.length;It++)$.__webglFramebuffer[wt][It]=o.createFramebuffer()}else $.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(h&&b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let wt=0;wt<b.mipmaps.length;wt++)$.__webglFramebuffer[wt]=o.createFramebuffer()}else $.__webglFramebuffer=o.createFramebuffer();if(vt)if(l.drawBuffers){const wt=U.texture;for(let It=0,Yt=wt.length;It<Yt;It++){const ae=s.get(wt[It]);ae.__webglTexture===void 0&&(ae.__webglTexture=o.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(h&&U.samples>0&&Nt(U)===!1){const wt=vt?b:[b];$.__webglMultisampledFramebuffer=o.createFramebuffer(),$.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let It=0;It<wt.length;It++){const Yt=wt[It];$.__webglColorRenderbuffer[It]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,$.__webglColorRenderbuffer[It]);const ae=u.convert(Yt.format,Yt.colorSpace),yt=u.convert(Yt.type),xe=O(Yt.internalFormat,ae,yt,Yt.colorSpace,U.isXRRenderTarget===!0),re=Pt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,re,xe,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+It,o.RENDERBUFFER,$.__webglColorRenderbuffer[It])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=o.createRenderbuffer(),Xt($.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(xt){i.bindTexture(o.TEXTURE_CUBE_MAP,St.__webglTexture),G(o.TEXTURE_CUBE_MAP,b,Gt);for(let wt=0;wt<6;wt++)if(h&&b.mipmaps&&b.mipmaps.length>0)for(let It=0;It<b.mipmaps.length;It++)Tt($.__webglFramebuffer[wt][It],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,It);else Tt($.__webglFramebuffer[wt],U,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);L(b,Gt)&&R(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(vt){const wt=U.texture;for(let It=0,Yt=wt.length;It<Yt;It++){const ae=wt[It],yt=s.get(ae);i.bindTexture(o.TEXTURE_2D,yt.__webglTexture),G(o.TEXTURE_2D,ae,Gt),Tt($.__webglFramebuffer,U,ae,o.COLOR_ATTACHMENT0+It,o.TEXTURE_2D,0),L(ae,Gt)&&R(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(h?wt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(wt,St.__webglTexture),G(wt,b,Gt),h&&b.mipmaps&&b.mipmaps.length>0)for(let It=0;It<b.mipmaps.length;It++)Tt($.__webglFramebuffer[It],U,b,o.COLOR_ATTACHMENT0,wt,It);else Tt($.__webglFramebuffer,U,b,o.COLOR_ATTACHMENT0,wt,0);L(b,Gt)&&R(wt),i.unbindTexture()}U.depthBuffer&&_t(U)}function Te(U){const b=x(U)||h,$=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let St=0,xt=$.length;St<xt;St++){const vt=$[St];if(L(vt,b)){const Gt=U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,wt=s.get(vt).__webglTexture;i.bindTexture(Gt,wt),R(Gt),i.unbindTexture()}}}function Lt(U){if(h&&U.samples>0&&Nt(U)===!1){const b=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],$=U.width,St=U.height;let xt=o.COLOR_BUFFER_BIT;const vt=[],Gt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=s.get(U),It=U.isWebGLMultipleRenderTargets===!0;if(It)for(let Yt=0;Yt<b.length;Yt++)i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Yt=0;Yt<b.length;Yt++){vt.push(o.COLOR_ATTACHMENT0+Yt),U.depthBuffer&&vt.push(Gt);const ae=wt.__ignoreDepthValues!==void 0?wt.__ignoreDepthValues:!1;if(ae===!1&&(U.depthBuffer&&(xt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&(xt|=o.STENCIL_BUFFER_BIT)),It&&o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,wt.__webglColorRenderbuffer[Yt]),ae===!0&&(o.invalidateFramebuffer(o.READ_FRAMEBUFFER,[Gt]),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[Gt])),It){const yt=s.get(b[Yt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,yt,0)}o.blitFramebuffer(0,0,$,St,0,0,$,St,xt,o.NEAREST),p&&o.invalidateFramebuffer(o.READ_FRAMEBUFFER,vt)}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),It)for(let Yt=0;Yt<b.length;Yt++){i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,wt.__webglColorRenderbuffer[Yt]);const ae=s.get(b[Yt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,ae,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}}function Pt(U){return Math.min(l.maxSamples,U.samples)}function Nt(U){const b=s.get(U);return h&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function he(U){const b=d.render.frame;_.get(U)!==b&&(_.set(U,b),U.update())}function Jt(U,b){const $=U.colorSpace,St=U.format,xt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===Ah||$!==na&&$!==fi&&(Be.getTransfer($)===ke?h===!1?e.has("EXT_sRGB")===!0&&St===xi?(U.format=Ah,U.minFilter=ci,U.generateMipmaps=!1):b=g0.sRGBToLinear(b):(St!==xi||xt!==Ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),b}this.allocateTextureUnit=k,this.resetTextureUnits=Et,this.setTexture2D=P,this.setTexture2DArray=q,this.setTexture3D=Q,this.setTextureCube=ct,this.rebindTextures=Ft,this.setupRenderTarget=Y,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Nt}function ib(o,e,i){const s=i.isWebGL2;function l(u,d=fi){let h;const m=Be.getTransfer(d);if(u===Ha)return o.UNSIGNED_BYTE;if(u===o0)return o.UNSIGNED_SHORT_4_4_4_4;if(u===l0)return o.UNSIGNED_SHORT_5_5_5_1;if(u===By)return o.BYTE;if(u===Iy)return o.SHORT;if(u===Lh)return o.UNSIGNED_SHORT;if(u===s0)return o.INT;if(u===Pa)return o.UNSIGNED_INT;if(u===Ba)return o.FLOAT;if(u===wo)return s?o.HALF_FLOAT:(h=e.get("OES_texture_half_float"),h!==null?h.HALF_FLOAT_OES:null);if(u===Fy)return o.ALPHA;if(u===xi)return o.RGBA;if(u===Hy)return o.LUMINANCE;if(u===Gy)return o.LUMINANCE_ALPHA;if(u===pr)return o.DEPTH_COMPONENT;if(u===ys)return o.DEPTH_STENCIL;if(u===Ah)return h=e.get("EXT_sRGB"),h!==null?h.SRGB_ALPHA_EXT:null;if(u===Vy)return o.RED;if(u===c0)return o.RED_INTEGER;if(u===ky)return o.RG;if(u===u0)return o.RG_INTEGER;if(u===f0)return o.RGBA_INTEGER;if(u===Gf||u===Vf||u===kf||u===Xf)if(m===ke)if(h=e.get("WEBGL_compressed_texture_s3tc_srgb"),h!==null){if(u===Gf)return h.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(u===Vf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(u===kf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(u===Xf)return h.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(h=e.get("WEBGL_compressed_texture_s3tc"),h!==null){if(u===Gf)return h.COMPRESSED_RGB_S3TC_DXT1_EXT;if(u===Vf)return h.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(u===kf)return h.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(u===Xf)return h.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(u===Pg||u===Bg||u===Ig||u===Fg)if(h=e.get("WEBGL_compressed_texture_pvrtc"),h!==null){if(u===Pg)return h.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(u===Bg)return h.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(u===Ig)return h.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(u===Fg)return h.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(u===h0)return h=e.get("WEBGL_compressed_texture_etc1"),h!==null?h.COMPRESSED_RGB_ETC1_WEBGL:null;if(u===Hg||u===Gg)if(h=e.get("WEBGL_compressed_texture_etc"),h!==null){if(u===Hg)return m===ke?h.COMPRESSED_SRGB8_ETC2:h.COMPRESSED_RGB8_ETC2;if(u===Gg)return m===ke?h.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:h.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(u===Vg||u===kg||u===Xg||u===Wg||u===qg||u===Yg||u===jg||u===Zg||u===Kg||u===Qg||u===Jg||u===$g||u===t_||u===e_)if(h=e.get("WEBGL_compressed_texture_astc"),h!==null){if(u===Vg)return m===ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:h.COMPRESSED_RGBA_ASTC_4x4_KHR;if(u===kg)return m===ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:h.COMPRESSED_RGBA_ASTC_5x4_KHR;if(u===Xg)return m===ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:h.COMPRESSED_RGBA_ASTC_5x5_KHR;if(u===Wg)return m===ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:h.COMPRESSED_RGBA_ASTC_6x5_KHR;if(u===qg)return m===ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:h.COMPRESSED_RGBA_ASTC_6x6_KHR;if(u===Yg)return m===ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:h.COMPRESSED_RGBA_ASTC_8x5_KHR;if(u===jg)return m===ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:h.COMPRESSED_RGBA_ASTC_8x6_KHR;if(u===Zg)return m===ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:h.COMPRESSED_RGBA_ASTC_8x8_KHR;if(u===Kg)return m===ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:h.COMPRESSED_RGBA_ASTC_10x5_KHR;if(u===Qg)return m===ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:h.COMPRESSED_RGBA_ASTC_10x6_KHR;if(u===Jg)return m===ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:h.COMPRESSED_RGBA_ASTC_10x8_KHR;if(u===$g)return m===ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:h.COMPRESSED_RGBA_ASTC_10x10_KHR;if(u===t_)return m===ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:h.COMPRESSED_RGBA_ASTC_12x10_KHR;if(u===e_)return m===ke?h.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:h.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(u===Wf||u===n_||u===i_)if(h=e.get("EXT_texture_compression_bptc"),h!==null){if(u===Wf)return m===ke?h.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:h.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(u===n_)return h.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(u===i_)return h.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(u===Xy||u===a_||u===r_||u===s_)if(h=e.get("EXT_texture_compression_rgtc"),h!==null){if(u===Wf)return h.COMPRESSED_RED_RGTC1_EXT;if(u===a_)return h.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(u===r_)return h.COMPRESSED_RED_GREEN_RGTC2_EXT;if(u===s_)return h.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return u===dr?s?o.UNSIGNED_INT_24_8:(h=e.get("WEBGL_depth_texture"),h!==null?h.UNSIGNED_INT_24_8_WEBGL:null):o[u]!==void 0?o[u]:null}return{convert:l}}class ab extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hc extends Hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rb={type:"move"};class gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const T of e.hand.values()){const x=i.getJointPose(T,s),v=this._getHandJoint(p,T);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const _=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],y=_.position.distanceTo(S.position),M=.02,A=.005;p.inputState.pinching&&y>M+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(rb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new hc;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class sb extends Ms{constructor(e,i){super();const s=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,S=null,y=null,M=null,A=null;const T=i.getContextAttributes();let x=null,v=null;const L=[],R=[],O=new be;let X=null;const I=new ui;I.layers.enable(1),I.viewport=new yn;const z=new ui;z.layers.enable(2),z.viewport=new yn;const lt=[I,z],C=new ab;C.layers.enable(1),C.layers.enable(2);let N=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Z=L[G];return Z===void 0&&(Z=new gh,L[G]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(G){let Z=L[G];return Z===void 0&&(Z=new gh,L[G]=Z),Z.getGripSpace()},this.getHand=function(G){let Z=L[G];return Z===void 0&&(Z=new gh,L[G]=Z),Z.getHandSpace()};function ft(G){const Z=R.indexOf(G.inputSource);if(Z===-1)return;const pt=L[Z];pt!==void 0&&(pt.update(G.inputSource,G.frame,p||d),pt.dispatchEvent({type:G.type,data:G.inputSource}))}function Et(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",Et),l.removeEventListener("inputsourceschange",k);for(let G=0;G<L.length;G++){const Z=R[G];Z!==null&&(R[G]=null,L[G].disconnect(Z))}N=null,ot=null,e.setRenderTarget(x),M=null,y=null,S=null,l=null,v=null,V.stop(),s.isPresenting=!1,e.setPixelRatio(X),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){u=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){h=G,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(G){p=G},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return S},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(G){if(l=G,l!==null){if(x=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",Et),l.addEventListener("inputsourceschange",k),T.xrCompatible!==!0&&await i.makeXRCompatible(),X=e.getPixelRatio(),e.getSize(O),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:l.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,Z),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),v=new gr(M.framebufferWidth,M.framebufferHeight,{format:xi,type:Ha,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let Z=null,pt=null,Mt=null;T.depth&&(Mt=T.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Z=T.stencil?ys:pr,pt=T.stencil?dr:Pa);const Tt={colorFormat:i.RGBA8,depthFormat:Mt,scaleFactor:u};S=new XRWebGLBinding(l,i),y=S.createProjectionLayer(Tt),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),v=new gr(y.textureWidth,y.textureHeight,{format:xi,type:Ha,depthTexture:new w0(y.textureWidth,y.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const Xt=e.properties.get(v);Xt.__ignoreDepthValues=y.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),V.setContext(l),V.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function k(G){for(let Z=0;Z<G.removed.length;Z++){const pt=G.removed[Z],Mt=R.indexOf(pt);Mt>=0&&(R[Mt]=null,L[Mt].disconnect(pt))}for(let Z=0;Z<G.added.length;Z++){const pt=G.added[Z];let Mt=R.indexOf(pt);if(Mt===-1){for(let Xt=0;Xt<L.length;Xt++)if(Xt>=R.length){R.push(pt),Mt=Xt;break}else if(R[Xt]===null){R[Xt]=pt,Mt=Xt;break}if(Mt===-1)break}const Tt=L[Mt];Tt&&Tt.connect(pt)}}const et=new nt,P=new nt;function q(G,Z,pt){et.setFromMatrixPosition(Z.matrixWorld),P.setFromMatrixPosition(pt.matrixWorld);const Mt=et.distanceTo(P),Tt=Z.projectionMatrix.elements,Xt=pt.projectionMatrix.elements,mt=Tt[14]/(Tt[10]-1),_t=Tt[14]/(Tt[10]+1),Ft=(Tt[9]+1)/Tt[5],Y=(Tt[9]-1)/Tt[5],Te=(Tt[8]-1)/Tt[0],Lt=(Xt[8]+1)/Xt[0],Pt=mt*Te,Nt=mt*Lt,he=Mt/(-Te+Lt),Jt=he*-Te;Z.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Jt),G.translateZ(he),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const U=mt+he,b=_t+he,$=Pt-Jt,St=Nt+(Mt-Jt),xt=Ft*_t/b*U,vt=Y*_t/b*U;G.projectionMatrix.makePerspective($,St,xt,vt,U,b),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Q(G,Z){Z===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Z.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(l===null)return;C.near=z.near=I.near=G.near,C.far=z.far=I.far=G.far,(N!==C.near||ot!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),N=C.near,ot=C.far);const Z=G.parent,pt=C.cameras;Q(C,Z);for(let Mt=0;Mt<pt.length;Mt++)Q(pt[Mt],Z);pt.length===2?q(C,I,z):C.projectionMatrix.copy(I.projectionMatrix),ct(G,C,Z)};function ct(G,Z,pt){pt===null?G.matrix.copy(Z.matrixWorld):(G.matrix.copy(pt.matrixWorld),G.matrix.invert(),G.matrix.multiply(Z.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Z.projectionMatrix),G.projectionMatrixInverse.copy(Z.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=bh*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(G){m=G,y!==null&&(y.fixedFoveation=G),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=G)};let ut=null;function D(G,Z){if(_=Z.getViewerPose(p||d),A=Z,_!==null){const pt=_.views;M!==null&&(e.setRenderTargetFramebuffer(v,M.framebuffer),e.setRenderTarget(v));let Mt=!1;pt.length!==C.cameras.length&&(C.cameras.length=0,Mt=!0);for(let Tt=0;Tt<pt.length;Tt++){const Xt=pt[Tt];let mt=null;if(M!==null)mt=M.getViewport(Xt);else{const Ft=S.getViewSubImage(y,Xt);mt=Ft.viewport,Tt===0&&(e.setRenderTargetTextures(v,Ft.colorTexture,y.ignoreDepthValues?void 0:Ft.depthStencilTexture),e.setRenderTarget(v))}let _t=lt[Tt];_t===void 0&&(_t=new ui,_t.layers.enable(Tt),_t.viewport=new yn,lt[Tt]=_t),_t.matrix.fromArray(Xt.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(Xt.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(mt.x,mt.y,mt.width,mt.height),Tt===0&&(C.matrix.copy(_t.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Mt===!0&&C.cameras.push(_t)}}for(let pt=0;pt<L.length;pt++){const Mt=R[pt],Tt=L[pt];Mt!==null&&Tt!==void 0&&Tt.update(Mt,Z,p||d)}ut&&ut(G,Z),Z.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Z}),A=null}const V=new C0;V.setAnimationLoop(D),this.setAnimationLoop=function(G){ut=G},this.dispose=function(){}}}function ob(o,e){function i(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function s(x,v){v.color.getRGB(x.fogColor.value,T0(o)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function l(x,v,L,R,O){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(x,v):v.isMeshToonMaterial?(u(x,v),S(x,v)):v.isMeshPhongMaterial?(u(x,v),_(x,v)):v.isMeshStandardMaterial?(u(x,v),y(x,v),v.isMeshPhysicalMaterial&&M(x,v,O)):v.isMeshMatcapMaterial?(u(x,v),A(x,v)):v.isMeshDepthMaterial?u(x,v):v.isMeshDistanceMaterial?(u(x,v),T(x,v)):v.isMeshNormalMaterial?u(x,v):v.isLineBasicMaterial?(d(x,v),v.isLineDashedMaterial&&h(x,v)):v.isPointsMaterial?m(x,v,L,R):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,i(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Fn&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,i(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Fn&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,i(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,i(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const L=e.get(v).envMap;if(L&&(x.envMap.value=L,x.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap){x.lightMap.value=v.lightMap;const R=o._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=v.lightMapIntensity*R,i(v.lightMap,x.lightMapTransform)}v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,x.aoMapTransform))}function d(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform))}function h(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function m(x,v,L,R){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*L,x.scale.value=R*.5,v.map&&(x.map.value=v.map,i(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,i(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,i(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function _(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function S(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function y(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,x.roughnessMapTransform)),e.get(v).envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,L){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Fn&&x.clearcoatNormalScale.value.negate())),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,x.specularIntensityMapTransform))}function A(x,v){v.matcap&&(x.matcap.value=v.matcap)}function T(x,v){const L=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function lb(o,e,i,s){let l={},u={},d=[];const h=i.isWebGL2?o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS):0;function m(L,R){const O=R.program;s.uniformBlockBinding(L,O)}function p(L,R){let O=l[L.id];O===void 0&&(A(L),O=_(L),l[L.id]=O,L.addEventListener("dispose",x));const X=R.program;s.updateUBOMapping(L,X);const I=e.render.frame;u[L.id]!==I&&(y(L),u[L.id]=I)}function _(L){const R=S();L.__bindingPointIndex=R;const O=o.createBuffer(),X=L.__size,I=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,O),o.bufferData(o.UNIFORM_BUFFER,X,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,R,O),O}function S(){for(let L=0;L<h;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const R=l[L.id],O=L.uniforms,X=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,R);for(let I=0,z=O.length;I<z;I++){const lt=Array.isArray(O[I])?O[I]:[O[I]];for(let C=0,N=lt.length;C<N;C++){const ot=lt[C];if(M(ot,I,C,X)===!0){const ft=ot.__offset,Et=Array.isArray(ot.value)?ot.value:[ot.value];let k=0;for(let et=0;et<Et.length;et++){const P=Et[et],q=T(P);typeof P=="number"||typeof P=="boolean"?(ot.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,ft+k,ot.__data)):P.isMatrix3?(ot.__data[0]=P.elements[0],ot.__data[1]=P.elements[1],ot.__data[2]=P.elements[2],ot.__data[3]=0,ot.__data[4]=P.elements[3],ot.__data[5]=P.elements[4],ot.__data[6]=P.elements[5],ot.__data[7]=0,ot.__data[8]=P.elements[6],ot.__data[9]=P.elements[7],ot.__data[10]=P.elements[8],ot.__data[11]=0):(P.toArray(ot.__data,k),k+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ft,ot.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,R,O,X){const I=L.value,z=R+"_"+O;if(X[z]===void 0)return typeof I=="number"||typeof I=="boolean"?X[z]=I:X[z]=I.clone(),!0;{const lt=X[z];if(typeof I=="number"||typeof I=="boolean"){if(lt!==I)return X[z]=I,!0}else if(lt.equals(I)===!1)return lt.copy(I),!0}return!1}function A(L){const R=L.uniforms;let O=0;const X=16;for(let z=0,lt=R.length;z<lt;z++){const C=Array.isArray(R[z])?R[z]:[R[z]];for(let N=0,ot=C.length;N<ot;N++){const ft=C[N],Et=Array.isArray(ft.value)?ft.value:[ft.value];for(let k=0,et=Et.length;k<et;k++){const P=Et[k],q=T(P),Q=O%X;Q!==0&&X-Q<q.boundary&&(O+=X-Q),ft.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),ft.__offset=O,O+=q.storage}}}const I=O%X;return I>0&&(O+=X-I),L.__size=O,L.__cache={},this}function T(L){const R={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(R.boundary=4,R.storage=4):L.isVector2?(R.boundary=8,R.storage=8):L.isVector3||L.isColor?(R.boundary=16,R.storage=12):L.isVector4?(R.boundary=16,R.storage=16):L.isMatrix3?(R.boundary=48,R.storage=48):L.isMatrix4?(R.boundary=64,R.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),R}function x(L){const R=L.target;R.removeEventListener("dispose",x);const O=d.indexOf(R.__bindingPointIndex);d.splice(O,1),o.deleteBuffer(l[R.id]),delete l[R.id],delete u[R.id]}function v(){for(const L in l)o.deleteBuffer(l[L]);d=[],l={},u={}}return{bind:m,update:p,dispose:v}}class z0{constructor(e={}){const{canvas:i=ix(),context:s=null,depth:l=!0,stencil:u=!0,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1}=e;this.isWebGLRenderer=!0;let y;s!==null?y=s.getContextAttributes().alpha:y=d;const M=new Uint32Array(4),A=new Int32Array(4);let T=null,x=null;const v=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this._useLegacyLights=!1,this.toneMapping=Fa,this.toneMappingExposure=1;const R=this;let O=!1,X=0,I=0,z=null,lt=-1,C=null;const N=new yn,ot=new yn;let ft=null;const Et=new De(0);let k=0,et=i.width,P=i.height,q=1,Q=null,ct=null;const ut=new yn(0,0,et,P),D=new yn(0,0,et,P);let V=!1;const G=new R0;let Z=!1,pt=!1,Mt=null;const Tt=new dn,Xt=new be,mt=new nt,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ft(){return z===null?q:1}let Y=s;function Te(w,j){for(let at=0;at<w.length;at++){const rt=w[at],it=i.getContext(rt,j);if(it!==null)return it}return null}try{const w={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Dh}`),i.addEventListener("webglcontextlost",At,!1),i.addEventListener("webglcontextrestored",F,!1),i.addEventListener("webglcontextcreationerror",Ut,!1),Y===null){const j=["webgl2","webgl","experimental-webgl"];if(R.isWebGL1Renderer===!0&&j.shift(),Y=Te(j,w),Y===null)throw Te(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&Y instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Lt,Pt,Nt,he,Jt,U,b,$,St,xt,vt,Gt,wt,It,Yt,ae,yt,xe,re,zt,bt,Dt,Bt,pe;function ye(){Lt=new vT(Y),Pt=new fT(Y,Lt,e),Lt.init(Pt),Dt=new ib(Y,Lt,Pt),Nt=new eb(Y,Lt,Pt),he=new xT(Y),Jt=new GA,U=new nb(Y,Lt,Nt,Jt,Pt,Dt,he),b=new dT(R),$=new _T(R),St=new Cx(Y,Pt),Bt=new cT(Y,Lt,St,Pt),xt=new ST(Y,St,he,Bt),vt=new AT(Y,xt,St,he),re=new TT(Y,Pt,U),ae=new hT(Jt),Gt=new HA(R,b,$,Lt,Pt,Bt,ae),wt=new ob(R,Jt),It=new kA,Yt=new ZA(Lt,Pt),xe=new lT(R,b,$,Nt,vt,y,m),yt=new tb(R,vt,Pt),pe=new lb(Y,he,Pt,Nt),zt=new uT(Y,Lt,he,Pt),bt=new yT(Y,Lt,he,Pt),he.programs=Gt.programs,R.capabilities=Pt,R.extensions=Lt,R.properties=Jt,R.renderLists=It,R.shadowMap=yt,R.state=Nt,R.info=he}ye();const se=new sb(R,Y);this.xr=se,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const w=Lt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Lt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(w){w!==void 0&&(q=w,this.setSize(et,P,!1))},this.getSize=function(w){return w.set(et,P)},this.setSize=function(w,j,at=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=w,P=j,i.width=Math.floor(w*q),i.height=Math.floor(j*q),at===!0&&(i.style.width=w+"px",i.style.height=j+"px"),this.setViewport(0,0,w,j)},this.getDrawingBufferSize=function(w){return w.set(et*q,P*q).floor()},this.setDrawingBufferSize=function(w,j,at){et=w,P=j,q=at,i.width=Math.floor(w*at),i.height=Math.floor(j*at),this.setViewport(0,0,w,j)},this.getCurrentViewport=function(w){return w.copy(N)},this.getViewport=function(w){return w.copy(ut)},this.setViewport=function(w,j,at,rt){w.isVector4?ut.set(w.x,w.y,w.z,w.w):ut.set(w,j,at,rt),Nt.viewport(N.copy(ut).multiplyScalar(q).floor())},this.getScissor=function(w){return w.copy(D)},this.setScissor=function(w,j,at,rt){w.isVector4?D.set(w.x,w.y,w.z,w.w):D.set(w,j,at,rt),Nt.scissor(ot.copy(D).multiplyScalar(q).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(w){Nt.setScissorTest(V=w)},this.setOpaqueSort=function(w){Q=w},this.setTransparentSort=function(w){ct=w},this.getClearColor=function(w){return w.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(w=!0,j=!0,at=!0){let rt=0;if(w){let it=!1;if(z!==null){const Ot=z.texture.format;it=Ot===f0||Ot===u0||Ot===c0}if(it){const Ot=z.texture.type,Vt=Ot===Ha||Ot===Pa||Ot===Lh||Ot===dr||Ot===o0||Ot===l0,Kt=xe.getClearColor(),Qt=xe.getClearAlpha(),Wt=Kt.r,ee=Kt.g,ne=Kt.b;Vt?(M[0]=Wt,M[1]=ee,M[2]=ne,M[3]=Qt,Y.clearBufferuiv(Y.COLOR,0,M)):(A[0]=Wt,A[1]=ee,A[2]=ne,A[3]=Qt,Y.clearBufferiv(Y.COLOR,0,A))}else rt|=Y.COLOR_BUFFER_BIT}j&&(rt|=Y.DEPTH_BUFFER_BIT),at&&(rt|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",At,!1),i.removeEventListener("webglcontextrestored",F,!1),i.removeEventListener("webglcontextcreationerror",Ut,!1),It.dispose(),Yt.dispose(),Jt.dispose(),b.dispose(),$.dispose(),vt.dispose(),Bt.dispose(),pe.dispose(),Gt.dispose(),se.dispose(),se.removeEventListener("sessionstart",je),se.removeEventListener("sessionend",Ne),Mt&&(Mt.dispose(),Mt=null),un.stop()};function At(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const w=he.autoReset,j=yt.enabled,at=yt.autoUpdate,rt=yt.needsUpdate,it=yt.type;ye(),he.autoReset=w,yt.enabled=j,yt.autoUpdate=at,yt.needsUpdate=rt,yt.type=it}function Ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Rt(w){const j=w.target;j.removeEventListener("dispose",Rt),$t(j)}function $t(w){jt(w),Jt.remove(w)}function jt(w){const j=Jt.get(w).programs;j!==void 0&&(j.forEach(function(at){Gt.releaseProgram(at)}),w.isShaderMaterial&&Gt.releaseShaderCache(w))}this.renderBufferDirect=function(w,j,at,rt,it,Ot){j===null&&(j=_t);const Vt=it.isMesh&&it.matrixWorld.determinant()<0,Kt=xn(w,j,at,rt,it);Nt.setMaterial(rt,Vt);let Qt=at.index,Wt=1;if(rt.wireframe===!0){if(Qt=xt.getWireframeAttribute(at),Qt===void 0)return;Wt=2}const ee=at.drawRange,ne=at.attributes.position;let Ce=ee.start*Wt,Je=(ee.start+ee.count)*Wt;Ot!==null&&(Ce=Math.max(Ce,Ot.start*Wt),Je=Math.min(Je,(Ot.start+Ot.count)*Wt)),Qt!==null?(Ce=Math.max(Ce,0),Je=Math.min(Je,Qt.count)):ne!=null&&(Ce=Math.max(Ce,0),Je=Math.min(Je,ne.count));const $e=Je-Ce;if($e<0||$e===1/0)return;Bt.setup(it,rt,Kt,at,Qt);let $n,He=zt;if(Qt!==null&&($n=St.get(Qt),He=bt,He.setIndex($n)),it.isMesh)rt.wireframe===!0?(Nt.setLineWidth(rt.wireframeLinewidth*Ft()),He.setMode(Y.LINES)):He.setMode(Y.TRIANGLES);else if(it.isLine){let ce=rt.linewidth;ce===void 0&&(ce=1),Nt.setLineWidth(ce*Ft()),it.isLineSegments?He.setMode(Y.LINES):it.isLineLoop?He.setMode(Y.LINE_LOOP):He.setMode(Y.LINE_STRIP)}else it.isPoints?He.setMode(Y.POINTS):it.isSprite&&He.setMode(Y.TRIANGLES);if(it.isBatchedMesh)He.renderMultiDraw(it._multiDrawStarts,it._multiDrawCounts,it._multiDrawCount);else if(it.isInstancedMesh)He.renderInstances(Ce,$e,it.count);else if(at.isInstancedBufferGeometry){const ce=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,ra=Math.min(at.instanceCount,ce);He.renderInstances(Ce,$e,ra)}else He.render(Ce,$e)};function Le(w,j,at){w.transparent===!0&&w.side===ta&&w.forceSinglePass===!1?(w.side=Fn,w.needsUpdate=!0,Va(w,j,at),w.side=Ga,w.needsUpdate=!0,Va(w,j,at),w.side=ta):Va(w,j,at)}this.compile=function(w,j,at=null){at===null&&(at=w),x=Yt.get(at),x.init(),L.push(x),at.traverseVisible(function(it){it.isLight&&it.layers.test(j.layers)&&(x.pushLight(it),it.castShadow&&x.pushShadow(it))}),w!==at&&w.traverseVisible(function(it){it.isLight&&it.layers.test(j.layers)&&(x.pushLight(it),it.castShadow&&x.pushShadow(it))}),x.setupLights(R._useLegacyLights);const rt=new Set;return w.traverse(function(it){const Ot=it.material;if(Ot)if(Array.isArray(Ot))for(let Vt=0;Vt<Ot.length;Vt++){const Kt=Ot[Vt];Le(Kt,at,it),rt.add(Kt)}else Le(Ot,at,it),rt.add(Ot)}),L.pop(),x=null,rt},this.compileAsync=function(w,j,at=null){const rt=this.compile(w,j,at);return new Promise(it=>{function Ot(){if(rt.forEach(function(Vt){Jt.get(Vt).currentProgram.isReady()&&rt.delete(Vt)}),rt.size===0){it(w);return}setTimeout(Ot,10)}Lt.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Re=null;function We(w){Re&&Re(w)}function je(){un.stop()}function Ne(){un.start()}const un=new C0;un.setAnimationLoop(We),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(w){Re=w,se.setAnimationLoop(w),w===null?un.stop():un.start()},se.addEventListener("sessionstart",je),se.addEventListener("sessionend",Ne),this.render=function(w,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(j),j=se.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,j,z),x=Yt.get(w,L.length),x.init(),L.push(x),Tt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),G.setFromProjectionMatrix(Tt),pt=this.localClippingEnabled,Z=ae.init(this.clippingPlanes,pt),T=It.get(w,v.length),T.init(),v.push(T),Gn(w,j,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(Q,ct),this.info.render.frame++,Z===!0&&ae.beginShadows();const at=x.state.shadowsArray;if(yt.render(at,w,j),Z===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),xe.render(T,w),x.setupLights(R._useLegacyLights),j.isArrayCamera){const rt=j.cameras;for(let it=0,Ot=rt.length;it<Ot;it++){const Vt=rt[it];Ts(T,w,Vt,Vt.viewport)}}else Ts(T,w,j);z!==null&&(U.updateMultisampleRenderTarget(z),U.updateRenderTargetMipmap(z)),w.isScene===!0&&w.onAfterRender(R,w,j),Bt.resetDefaultState(),lt=-1,C=null,L.pop(),L.length>0?x=L[L.length-1]:x=null,v.pop(),v.length>0?T=v[v.length-1]:T=null};function Gn(w,j,at,rt){if(w.visible===!1)return;if(w.layers.test(j.layers)){if(w.isGroup)at=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(j);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||G.intersectsSprite(w)){rt&&mt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Tt);const Vt=vt.update(w),Kt=w.material;Kt.visible&&T.push(w,Vt,Kt,at,mt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||G.intersectsObject(w))){const Vt=vt.update(w),Kt=w.material;if(rt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),mt.copy(w.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),mt.copy(Vt.boundingSphere.center)),mt.applyMatrix4(w.matrixWorld).applyMatrix4(Tt)),Array.isArray(Kt)){const Qt=Vt.groups;for(let Wt=0,ee=Qt.length;Wt<ee;Wt++){const ne=Qt[Wt],Ce=Kt[ne.materialIndex];Ce&&Ce.visible&&T.push(w,Vt,Ce,at,mt.z,ne)}}else Kt.visible&&T.push(w,Vt,Kt,at,mt.z,null)}}const Ot=w.children;for(let Vt=0,Kt=Ot.length;Vt<Kt;Vt++)Gn(Ot[Vt],j,at,rt)}function Ts(w,j,at,rt){const it=w.opaque,Ot=w.transmissive,Vt=w.transparent;x.setupLightsView(at),Z===!0&&ae.setGlobalState(R.clippingPlanes,at),Ot.length>0&&As(it,Ot,j,at),rt&&Nt.viewport(N.copy(rt)),it.length>0&&ia(it,j,at),Ot.length>0&&ia(Ot,j,at),Vt.length>0&&ia(Vt,j,at),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function As(w,j,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;const Ot=Pt.isWebGL2;Mt===null&&(Mt=new gr(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")?wo:Ha,minFilter:Co,samples:Ot?4:0})),R.getDrawingBufferSize(Xt),Ot?Mt.setSize(Xt.x,Xt.y):Mt.setSize(Rh(Xt.x),Rh(Xt.y));const Vt=R.getRenderTarget();R.setRenderTarget(Mt),R.getClearColor(Et),k=R.getClearAlpha(),k<1&&R.setClearColor(16777215,.5),R.clear();const Kt=R.toneMapping;R.toneMapping=Fa,ia(w,at,rt),U.updateMultisampleRenderTarget(Mt),U.updateRenderTargetMipmap(Mt);let Qt=!1;for(let Wt=0,ee=j.length;Wt<ee;Wt++){const ne=j[Wt],Ce=ne.object,Je=ne.geometry,$e=ne.material,$n=ne.group;if($e.side===ta&&Ce.layers.test(rt.layers)){const He=$e.side;$e.side=Fn,$e.needsUpdate=!0,bs(Ce,at,rt,Je,$e,$n),$e.side=He,$e.needsUpdate=!0,Qt=!0}}Qt===!0&&(U.updateMultisampleRenderTarget(Mt),U.updateRenderTargetMipmap(Mt)),R.setRenderTarget(Vt),R.setClearColor(Et,k),R.toneMapping=Kt}function ia(w,j,at){const rt=j.isScene===!0?j.overrideMaterial:null;for(let it=0,Ot=w.length;it<Ot;it++){const Vt=w[it],Kt=Vt.object,Qt=Vt.geometry,Wt=rt===null?Vt.material:rt,ee=Vt.group;Kt.layers.test(at.layers)&&bs(Kt,j,at,Qt,Wt,ee)}}function bs(w,j,at,rt,it,Ot){w.onBeforeRender(R,j,at,rt,it,Ot),w.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),it.onBeforeRender(R,j,at,rt,w,Ot),it.transparent===!0&&it.side===ta&&it.forceSinglePass===!1?(it.side=Fn,it.needsUpdate=!0,R.renderBufferDirect(at,j,rt,it,w,Ot),it.side=Ga,it.needsUpdate=!0,R.renderBufferDirect(at,j,rt,it,w,Ot),it.side=ta):R.renderBufferDirect(at,j,rt,it,w,Ot),w.onAfterRender(R,j,at,rt,it,Ot)}function Va(w,j,at){j.isScene!==!0&&(j=_t);const rt=Jt.get(w),it=x.state.lights,Ot=x.state.shadowsArray,Vt=it.state.version,Kt=Gt.getParameters(w,it.state,Ot,j,at),Qt=Gt.getProgramCacheKey(Kt);let Wt=rt.programs;rt.environment=w.isMeshStandardMaterial?j.environment:null,rt.fog=j.fog,rt.envMap=(w.isMeshStandardMaterial?$:b).get(w.envMap||rt.environment),Wt===void 0&&(w.addEventListener("dispose",Rt),Wt=new Map,rt.programs=Wt);let ee=Wt.get(Qt);if(ee!==void 0){if(rt.currentProgram===ee&&rt.lightsStateVersion===Vt)return Qe(w,Kt),ee}else Kt.uniforms=Gt.getUniforms(w),w.onBuild(at,Kt,R),w.onBeforeCompile(Kt,R),ee=Gt.acquireProgram(Kt,Qt),Wt.set(Qt,ee),rt.uniforms=Kt.uniforms;const ne=rt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ne.clippingPlanes=ae.uniform),Qe(w,Kt),rt.needsLights=Rs(w),rt.lightsStateVersion=Vt,rt.needsLights&&(ne.ambientLightColor.value=it.state.ambient,ne.lightProbe.value=it.state.probe,ne.directionalLights.value=it.state.directional,ne.directionalLightShadows.value=it.state.directionalShadow,ne.spotLights.value=it.state.spot,ne.spotLightShadows.value=it.state.spotShadow,ne.rectAreaLights.value=it.state.rectArea,ne.ltc_1.value=it.state.rectAreaLTC1,ne.ltc_2.value=it.state.rectAreaLTC2,ne.pointLights.value=it.state.point,ne.pointLightShadows.value=it.state.pointShadow,ne.hemisphereLights.value=it.state.hemi,ne.directionalShadowMap.value=it.state.directionalShadowMap,ne.directionalShadowMatrix.value=it.state.directionalShadowMatrix,ne.spotShadowMap.value=it.state.spotShadowMap,ne.spotLightMatrix.value=it.state.spotLightMatrix,ne.spotLightMap.value=it.state.spotLightMap,ne.pointShadowMap.value=it.state.pointShadowMap,ne.pointShadowMatrix.value=it.state.pointShadowMatrix),rt.currentProgram=ee,rt.uniformsList=null,ee}function hi(w){if(w.uniformsList===null){const j=w.currentProgram.getUniforms();w.uniformsList=mc.seqWithValue(j.seq,w.uniforms)}return w.uniformsList}function Qe(w,j){const at=Jt.get(w);at.outputColorSpace=j.outputColorSpace,at.batching=j.batching,at.instancing=j.instancing,at.instancingColor=j.instancingColor,at.skinning=j.skinning,at.morphTargets=j.morphTargets,at.morphNormals=j.morphNormals,at.morphColors=j.morphColors,at.morphTargetsCount=j.morphTargetsCount,at.numClippingPlanes=j.numClippingPlanes,at.numIntersection=j.numClipIntersection,at.vertexAlphas=j.vertexAlphas,at.vertexTangents=j.vertexTangents,at.toneMapping=j.toneMapping}function xn(w,j,at,rt,it){j.isScene!==!0&&(j=_t),U.resetTextureUnits();const Ot=j.fog,Vt=rt.isMeshStandardMaterial?j.environment:null,Kt=z===null?R.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:na,Qt=(rt.isMeshStandardMaterial?$:b).get(rt.envMap||Vt),Wt=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ee=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),ne=!!at.morphAttributes.position,Ce=!!at.morphAttributes.normal,Je=!!at.morphAttributes.color;let $e=Fa;rt.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&($e=R.toneMapping);const $n=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,He=$n!==void 0?$n.length:0,ce=Jt.get(rt),ra=x.state.lights;if(Z===!0&&(pt===!0||w!==C)){const Un=w===C&&rt.id===lt;ae.setState(rt,w,Un)}let Ie=!1;rt.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==ra.state.version||ce.outputColorSpace!==Kt||it.isBatchedMesh&&ce.batching===!1||!it.isBatchedMesh&&ce.batching===!0||it.isInstancedMesh&&ce.instancing===!1||!it.isInstancedMesh&&ce.instancing===!0||it.isSkinnedMesh&&ce.skinning===!1||!it.isSkinnedMesh&&ce.skinning===!0||it.isInstancedMesh&&ce.instancingColor===!0&&it.instanceColor===null||it.isInstancedMesh&&ce.instancingColor===!1&&it.instanceColor!==null||ce.envMap!==Qt||rt.fog===!0&&ce.fog!==Ot||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==ae.numPlanes||ce.numIntersection!==ae.numIntersection)||ce.vertexAlphas!==Wt||ce.vertexTangents!==ee||ce.morphTargets!==ne||ce.morphNormals!==Ce||ce.morphColors!==Je||ce.toneMapping!==$e||Pt.isWebGL2===!0&&ce.morphTargetsCount!==He)&&(Ie=!0):(Ie=!0,ce.__version=rt.version);let pn=ce.currentProgram;Ie===!0&&(pn=Va(rt,j,it));let bn=!1,sa=!1,Cs=!1;const tn=pn.getUniforms(),Ai=ce.uniforms;if(Nt.useProgram(pn.program)&&(bn=!0,sa=!0,Cs=!0),rt.id!==lt&&(lt=rt.id,sa=!0),bn||C!==w){tn.setValue(Y,"projectionMatrix",w.projectionMatrix),tn.setValue(Y,"viewMatrix",w.matrixWorldInverse);const Un=tn.map.cameraPosition;Un!==void 0&&Un.setValue(Y,mt.setFromMatrixPosition(w.matrixWorld)),Pt.logarithmicDepthBuffer&&tn.setValue(Y,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&tn.setValue(Y,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,sa=!0,Cs=!0)}if(it.isSkinnedMesh){tn.setOptional(Y,it,"bindMatrix"),tn.setOptional(Y,it,"bindMatrixInverse");const Un=it.skeleton;Un&&(Pt.floatVertexTextures?(Un.boneTexture===null&&Un.computeBoneTexture(),tn.setValue(Y,"boneTexture",Un.boneTexture,U)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}it.isBatchedMesh&&(tn.setOptional(Y,it,"batchingTexture"),tn.setValue(Y,"batchingTexture",it._matricesTexture,U));const oa=at.morphAttributes;if((oa.position!==void 0||oa.normal!==void 0||oa.color!==void 0&&Pt.isWebGL2===!0)&&re.update(it,at,pn),(sa||ce.receiveShadow!==it.receiveShadow)&&(ce.receiveShadow=it.receiveShadow,tn.setValue(Y,"receiveShadow",it.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Ai.envMap.value=Qt,Ai.flipEnvMap.value=Qt.isCubeTexture&&Qt.isRenderTargetTexture===!1?-1:1),sa&&(tn.setValue(Y,"toneMappingExposure",R.toneMappingExposure),ce.needsLights&&aa(Ai,Cs),Ot&&rt.fog===!0&&wt.refreshFogUniforms(Ai,Ot),wt.refreshMaterialUniforms(Ai,rt,q,P,Mt),mc.upload(Y,hi(ce),Ai,U)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(mc.upload(Y,hi(ce),Ai,U),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&tn.setValue(Y,"center",it.center),tn.setValue(Y,"modelViewMatrix",it.modelViewMatrix),tn.setValue(Y,"normalMatrix",it.normalMatrix),tn.setValue(Y,"modelMatrix",it.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Un=rt.uniformsGroups;for(let Mn=0,ws=Un.length;Mn<ws;Mn++)if(Pt.isWebGL2){const Us=Un[Mn];pe.update(Us,pn),pe.bind(Us,pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return pn}function aa(w,j){w.ambientLightColor.needsUpdate=j,w.lightProbe.needsUpdate=j,w.directionalLights.needsUpdate=j,w.directionalLightShadows.needsUpdate=j,w.pointLights.needsUpdate=j,w.pointLightShadows.needsUpdate=j,w.spotLights.needsUpdate=j,w.spotLightShadows.needsUpdate=j,w.rectAreaLights.needsUpdate=j,w.hemisphereLights.needsUpdate=j}function Rs(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(w,j,at){Jt.get(w.texture).__webglTexture=j,Jt.get(w.depthTexture).__webglTexture=at;const rt=Jt.get(w);rt.__hasExternalTextures=!0,rt.__hasExternalTextures&&(rt.__autoAllocateDepthBuffer=at===void 0,rt.__autoAllocateDepthBuffer||Lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,j){const at=Jt.get(w);at.__webglFramebuffer=j,at.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(w,j=0,at=0){z=w,X=j,I=at;let rt=!0,it=null,Ot=!1,Vt=!1;if(w){const Qt=Jt.get(w);Qt.__useDefaultFramebuffer!==void 0?(Nt.bindFramebuffer(Y.FRAMEBUFFER,null),rt=!1):Qt.__webglFramebuffer===void 0?U.setupRenderTarget(w):Qt.__hasExternalTextures&&U.rebindTextures(w,Jt.get(w.texture).__webglTexture,Jt.get(w.depthTexture).__webglTexture);const Wt=w.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Vt=!0);const ee=Jt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ee[j])?it=ee[j][at]:it=ee[j],Ot=!0):Pt.isWebGL2&&w.samples>0&&U.useMultisampledRTT(w)===!1?it=Jt.get(w).__webglMultisampledFramebuffer:Array.isArray(ee)?it=ee[at]:it=ee,N.copy(w.viewport),ot.copy(w.scissor),ft=w.scissorTest}else N.copy(ut).multiplyScalar(q).floor(),ot.copy(D).multiplyScalar(q).floor(),ft=V;if(Nt.bindFramebuffer(Y.FRAMEBUFFER,it)&&Pt.drawBuffers&&rt&&Nt.drawBuffers(w,it),Nt.viewport(N),Nt.scissor(ot),Nt.setScissorTest(ft),Ot){const Qt=Jt.get(w.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+j,Qt.__webglTexture,at)}else if(Vt){const Qt=Jt.get(w.texture),Wt=j||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Qt.__webglTexture,at||0,Wt)}lt=-1},this.readRenderTargetPixels=function(w,j,at,rt,it,Ot,Vt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=Jt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Vt!==void 0&&(Kt=Kt[Vt]),Kt){Nt.bindFramebuffer(Y.FRAMEBUFFER,Kt);try{const Qt=w.texture,Wt=Qt.format,ee=Qt.type;if(Wt!==xi&&Dt.convert(Wt)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ne=ee===wo&&(Lt.has("EXT_color_buffer_half_float")||Pt.isWebGL2&&Lt.has("EXT_color_buffer_float"));if(ee!==Ha&&Dt.convert(ee)!==Y.getParameter(Y.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ee===Ba&&(Pt.isWebGL2||Lt.has("OES_texture_float")||Lt.has("WEBGL_color_buffer_float")))&&!ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=w.width-rt&&at>=0&&at<=w.height-it&&Y.readPixels(j,at,rt,it,Dt.convert(Wt),Dt.convert(ee),Ot)}finally{const Qt=z!==null?Jt.get(z).__webglFramebuffer:null;Nt.bindFramebuffer(Y.FRAMEBUFFER,Qt)}}},this.copyFramebufferToTexture=function(w,j,at=0){const rt=Math.pow(2,-at),it=Math.floor(j.image.width*rt),Ot=Math.floor(j.image.height*rt);U.setTexture2D(j,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,at,0,0,w.x,w.y,it,Ot),Nt.unbindTexture()},this.copyTextureToTexture=function(w,j,at,rt=0){const it=j.image.width,Ot=j.image.height,Vt=Dt.convert(at.format),Kt=Dt.convert(at.type);U.setTexture2D(at,0),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,at.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,at.unpackAlignment),j.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,rt,w.x,w.y,it,Ot,Vt,Kt,j.image.data):j.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,rt,w.x,w.y,j.mipmaps[0].width,j.mipmaps[0].height,Vt,j.mipmaps[0].data):Y.texSubImage2D(Y.TEXTURE_2D,rt,w.x,w.y,Vt,Kt,j.image),rt===0&&at.generateMipmaps&&Y.generateMipmap(Y.TEXTURE_2D),Nt.unbindTexture()},this.copyTextureToTexture3D=function(w,j,at,rt,it=0){if(R.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ot=w.max.x-w.min.x+1,Vt=w.max.y-w.min.y+1,Kt=w.max.z-w.min.z+1,Qt=Dt.convert(rt.format),Wt=Dt.convert(rt.type);let ee;if(rt.isData3DTexture)U.setTexture3D(rt,0),ee=Y.TEXTURE_3D;else if(rt.isDataArrayTexture||rt.isCompressedArrayTexture)U.setTexture2DArray(rt,0),ee=Y.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,rt.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,rt.unpackAlignment);const ne=Y.getParameter(Y.UNPACK_ROW_LENGTH),Ce=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Je=Y.getParameter(Y.UNPACK_SKIP_PIXELS),$e=Y.getParameter(Y.UNPACK_SKIP_ROWS),$n=Y.getParameter(Y.UNPACK_SKIP_IMAGES),He=at.isCompressedTexture?at.mipmaps[it]:at.image;Y.pixelStorei(Y.UNPACK_ROW_LENGTH,He.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,He.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,w.min.x),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,w.min.y),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,w.min.z),at.isDataTexture||at.isData3DTexture?Y.texSubImage3D(ee,it,j.x,j.y,j.z,Ot,Vt,Kt,Qt,Wt,He.data):at.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(ee,it,j.x,j.y,j.z,Ot,Vt,Kt,Qt,He.data)):Y.texSubImage3D(ee,it,j.x,j.y,j.z,Ot,Vt,Kt,Qt,Wt,He),Y.pixelStorei(Y.UNPACK_ROW_LENGTH,ne),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ce),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Je),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,$e),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,$n),it===0&&rt.generateMipmaps&&Y.generateMipmap(ee),Nt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?U.setTextureCube(w,0):w.isData3DTexture?U.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?U.setTexture2DArray(w,0):U.setTexture2D(w,0),Nt.unbindTexture()},this.resetState=function(){X=0,I=0,z=null,Nt.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Nh?"display-p3":"srgb",i.unpackColorSpace=Be.workingColorSpace===Tc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Sn?mr:d0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===mr?Sn:na}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class cb extends z0{}cb.prototype.isWebGL1Renderer=!0;class ub extends Hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}class P0 extends No{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Z_=new dn,wh=new S0,dc=new Ac,pc=new nt;class fb extends Hn{constructor(e=new Ti,i=new P0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,u=e.params.Points.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),dc.copy(s.boundingSphere),dc.applyMatrix4(l),dc.radius+=u,e.ray.intersectsSphere(dc)===!1)return;Z_.copy(l).invert(),wh.copy(e.ray).applyMatrix4(Z_);const h=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,S=s.attributes.position;if(p!==null){const y=Math.max(0,d.start),M=Math.min(p.count,d.start+d.count);for(let A=y,T=M;A<T;A++){const x=p.getX(A);pc.fromBufferAttribute(S,x),K_(pc,x,m,l,e,i,this)}}else{const y=Math.max(0,d.start),M=Math.min(S.count,d.start+d.count);for(let A=y,T=M;A<T;A++)pc.fromBufferAttribute(S,A),K_(pc,A,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}}function K_(o,e,i,s,l,u,d){const h=wh.distanceSqToPoint(o);if(h<i){const m=new nt;wh.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,object:d})}}class Ph extends Ti{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const u=[],d=[];h(l),p(s),_(),this.setAttribute("position",new Jn(u,3)),this.setAttribute("normal",new Jn(u.slice(),3)),this.setAttribute("uv",new Jn(d,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function h(L){const R=new nt,O=new nt,X=new nt;for(let I=0;I<i.length;I+=3)M(i[I+0],R),M(i[I+1],O),M(i[I+2],X),m(R,O,X,L)}function m(L,R,O,X){const I=X+1,z=[];for(let lt=0;lt<=I;lt++){z[lt]=[];const C=L.clone().lerp(O,lt/I),N=R.clone().lerp(O,lt/I),ot=I-lt;for(let ft=0;ft<=ot;ft++)ft===0&&lt===I?z[lt][ft]=C:z[lt][ft]=C.clone().lerp(N,ft/ot)}for(let lt=0;lt<I;lt++)for(let C=0;C<2*(I-lt)-1;C++){const N=Math.floor(C/2);C%2===0?(y(z[lt][N+1]),y(z[lt+1][N]),y(z[lt][N])):(y(z[lt][N+1]),y(z[lt+1][N+1]),y(z[lt+1][N]))}}function p(L){const R=new nt;for(let O=0;O<u.length;O+=3)R.x=u[O+0],R.y=u[O+1],R.z=u[O+2],R.normalize().multiplyScalar(L),u[O+0]=R.x,u[O+1]=R.y,u[O+2]=R.z}function _(){const L=new nt;for(let R=0;R<u.length;R+=3){L.x=u[R+0],L.y=u[R+1],L.z=u[R+2];const O=x(L)/2/Math.PI+.5,X=v(L)/Math.PI+.5;d.push(O,1-X)}A(),S()}function S(){for(let L=0;L<d.length;L+=6){const R=d[L+0],O=d[L+2],X=d[L+4],I=Math.max(R,O,X),z=Math.min(R,O,X);I>.9&&z<.1&&(R<.2&&(d[L+0]+=1),O<.2&&(d[L+2]+=1),X<.2&&(d[L+4]+=1))}}function y(L){u.push(L.x,L.y,L.z)}function M(L,R){const O=L*3;R.x=e[O+0],R.y=e[O+1],R.z=e[O+2]}function A(){const L=new nt,R=new nt,O=new nt,X=new nt,I=new be,z=new be,lt=new be;for(let C=0,N=0;C<u.length;C+=9,N+=6){L.set(u[C+0],u[C+1],u[C+2]),R.set(u[C+3],u[C+4],u[C+5]),O.set(u[C+6],u[C+7],u[C+8]),I.set(d[N+0],d[N+1]),z.set(d[N+2],d[N+3]),lt.set(d[N+4],d[N+5]),X.copy(L).add(R).add(O).divideScalar(3);const ot=x(X);T(I,N+0,L,ot),T(z,N+2,R,ot),T(lt,N+4,O,ot)}}function T(L,R,O,X){X<0&&L.x===1&&(d[R]=L.x-1),O.x===0&&O.z===0&&(d[R]=X/2/Math.PI+.5)}function x(L){return Math.atan2(L.z,-L.x)}function v(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ph(e.vertices,e.indices,e.radius,e.details)}}class Mc extends Ph{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Mc(e.radius,e.detail)}}class Bh extends Ti{constructor(e=1,i=.4,s=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:u},s=Math.floor(s),l=Math.floor(l);const d=[],h=[],m=[],p=[],_=new nt,S=new nt,y=new nt;for(let M=0;M<=s;M++)for(let A=0;A<=l;A++){const T=A/l*u,x=M/s*Math.PI*2;S.x=(e+i*Math.cos(x))*Math.cos(T),S.y=(e+i*Math.cos(x))*Math.sin(T),S.z=i*Math.sin(x),h.push(S.x,S.y,S.z),_.x=e*Math.cos(T),_.y=e*Math.sin(T),y.subVectors(S,_).normalize(),m.push(y.x,y.y,y.z),p.push(A/l),p.push(M/s)}for(let M=1;M<=s;M++)for(let A=1;A<=l;A++){const T=(l+1)*M+A-1,x=(l+1)*(M-1)+A-1,v=(l+1)*(M-1)+A,L=(l+1)*M+A;d.push(T,x,L),d.push(x,v,L)}this.setIndex(d),this.setAttribute("position",new Jn(h,3)),this.setAttribute("normal",new Jn(m,3)),this.setAttribute("uv",new Jn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class hb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Q_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=Q_();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Q_(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=o=>{const e=pb(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _h={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},gb=fe.createContext({}),_b=()=>fe.useContext(gb),vb=fe.forwardRef(({color:o,size:e,strokeWidth:i,absoluteStrokeWidth:s,className:l="",children:u,iconNode:d,...h},m)=>{const{size:p=24,strokeWidth:_=2,absoluteStrokeWidth:S=!1,color:y="currentColor",className:M=""}=_b()??{},A=s??S?Number(i??_)*24/Number(e??p):i??_;return fe.createElement("svg",{ref:m,..._h,width:e??p??_h.width,height:e??p??_h.height,stroke:o??y,strokeWidth:A,className:B0("lucide",M,l),...!u&&!mb(h)&&{"aria-hidden":"true"},...h},[...d.map(([T,x])=>fe.createElement(T,x)),...Array.isArray(u)?u:[u]])});/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=(o,e)=>{const i=fe.forwardRef(({className:s,...l},u)=>fe.createElement(vb,{ref:u,iconNode:e,className:B0(`lucide-${db(J_(o))}`,`lucide-${o}`,s),...l}));return i.displayName=J_(o),i};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],yb=vr("mic-off",Sb);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],Mb=vr("mic",xb);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],$_=vr("radio",Eb);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ab=vr("settings",Tb);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Rb=vr("volume-2",bb);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],wb=vr("volume-x",Cb);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Db=vr("x",Ub),t0="wake up ultron daddys home",Lb=["shutdown ultron","shut down ultron","power down ultron","shut off ultron","turn off ultron"],I0="ultron_settings_v1";function Nb(o){return o.toLowerCase().replace(/['']/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim()}function e0(){try{const o=localStorage.getItem(I0);return o?{groqKey:"",defaultCity:"Kanpur",...JSON.parse(o)}:{groqKey:"",defaultCity:"Kanpur"}}catch{return{groqKey:"",defaultCity:"Kanpur"}}}function Ob(o){try{localStorage.setItem(I0,JSON.stringify(o))}catch{}}const zb={0:"clear sky",1:"mostly clear",2:"partly cloudy",3:"overcast",45:"foggy",48:"depositing rime fog",51:"light drizzle",53:"moderate drizzle",55:"dense drizzle",61:"light rain",63:"moderate rain",65:"heavy rain",71:"light snow",73:"moderate snow",75:"heavy snow",80:"light rain showers",81:"moderate rain showers",82:"violent rain showers",95:"thunderstorm",96:"thunderstorm with light hail",99:"thunderstorm with heavy hail"};async function Pb(o){var e;try{const l=(e=(await(await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(o)}&count=1`)).json()).results)==null?void 0:e[0];if(!l)return null;const h=(await(await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${l.latitude}&longitude=${l.longitude}&current_weather=true`)).json()).current_weather;if(!h)return null;const m=zb[h.weathercode]||"unusual conditions";return`It's currently ${Math.round(h.temperature)}°C with ${m} in ${l.name}, wind at ${Math.round(h.windspeed)} km/h, Aman.`}catch{return null}}async function Bb(o,e,i){var s;try{const d=(s=(await(await fetch(`https://api.frankfurter.app/latest?amount=${o}&from=${e.toUpperCase()}&to=${i.toUpperCase()}`)).json()).rates)==null?void 0:s[i.toUpperCase()];return d===void 0?null:`${o} ${e.toUpperCase()} is about ${d.toFixed(2)} ${i.toUpperCase()}, Aman.`}catch{return null}}const Ib={btc:"bitcoin",bitcoin:"bitcoin",eth:"ethereum",ethereum:"ethereum",sol:"solana",solana:"solana",doge:"dogecoin",dogecoin:"dogecoin",xrp:"ripple",ripple:"ripple",bnb:"binancecoin",binancecoin:"binancecoin",ada:"cardano",cardano:"cardano",matic:"matic-network",polygon:"matic-network",usdt:"tether",tether:"tether",ltc:"litecoin",litecoin:"litecoin"};async function Fb(o,e="usd"){var i;try{const s=Ib[o.toLowerCase()]||o.toLowerCase(),l=e.toLowerCase(),h=(i=(await(await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(s)}&vs_currencies=${encodeURIComponent(l)}`)).json())[s])==null?void 0:i[l];return h===void 0?null:`${s.charAt(0).toUpperCase()+s.slice(1)} is at ${h.toLocaleString()} ${l.toUpperCase()} right now, Aman.`}catch{return null}}async function Hb(){try{const i=(await(await fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson")).json()).features||[];return i.length?`In the last 24 hours: ${i.slice(0,3).map(l=>`magnitude ${l.properties.mag.toFixed(1)} near ${l.properties.place}`).join("; ")}, Aman.`:"No significant earthquakes, magnitude 4.5 or above, in the last 24 hours, Aman."}catch{return null}}const Gb=[{type:"function",function:{name:"get_weather",description:"Get real-time current weather for a city. Use whenever the user asks about weather, temperature, rain, or what to wear outside.",parameters:{type:"object",properties:{location:{type:"string",description:"City name. If the user didn't say one, omit this."}}}}},{type:"function",function:{name:"convert_currency",description:"Convert an amount from one currency to another using real exchange rates.",parameters:{type:"object",properties:{amount:{type:"number",description:"Amount to convert, default 1."},from:{type:"string",description:"3-letter source currency code."},to:{type:"string",description:"3-letter target currency code."}},required:["from","to"]}}},{type:"function",function:{name:"get_crypto_price",description:"Get the real-time price of a cryptocurrency.",parameters:{type:"object",properties:{coin:{type:"string",description:"Coin name or ticker, e.g. bitcoin, btc, ethereum."},vsCurrency:{type:"string",description:"3-letter currency, default usd."}},required:["coin"]}}},{type:"function",function:{name:"get_earthquake_alerts",description:"Get real recent significant earthquake activity worldwide (magnitude 4.5+, past 24 hours).",parameters:{type:"object",properties:{}}}}];function Vb(){const o=fe.useRef(null),e=fe.useRef({intensity:0,active:!1,unlocked:!1}),[i,s]=fe.useState(e0()),[l,u]=fe.useState(!e0().groqKey),[d,h]=fe.useState(i.groqKey),[m,p]=fe.useState(i.defaultCity),[_,S]=fe.useState(!1),[y,M]=fe.useState(!1),[A,T]=fe.useState(`AWAITING WAKE // SAY "WAKE UP ULTRON, DADDY'S HOME"`),[x,v]=fe.useState([{role:"ultron",text:"Systems dormant. Speak the wake command, Aman."}]),[L,R]=fe.useState(""),[O,X]=fe.useState(!1),[I,z]=fe.useState(!1),[lt,C]=fe.useState(!1),[N,ot]=fe.useState(!1),[ft,Et]=fe.useState(!1),[k,et]=fe.useState(""),P=fe.useRef([]),q=fe.useRef(null),Q=fe.useRef(null),ct=fe.useRef(!1);ct.current=I;const ut=fe.useRef(i);ut.current=i,fe.useEffect(()=>{const mt=o.current;if(!mt)return;const _t=mt.clientWidth,Ft=mt.clientHeight,Y=new ub,Te=new ui(58,_t/Ft,.1,100);Te.position.z=4.6;const Lt=new z0({antialias:!0,alpha:!0});Lt.setSize(_t,Ft),Lt.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),mt.appendChild(Lt.domElement);const Pt=16098851,Nt=new Mc(.72,3),he=new Ro({color:Pt}),Jt=new Mi(Nt,he);Y.add(Jt);const U=new Mc(1.05,1),b=new Ro({color:Pt,wireframe:!0,transparent:!0,opacity:.35}),$=new Mi(U,b);Y.add($);const St=26,xt=[];for(let zt=0;zt<St;zt++){const bt=1.4+Math.random()*1,Dt=.004+Math.random()*.006,Bt=new Bh(bt,Dt,6,72),pe=new Ro({color:Pt,transparent:!0,opacity:.3,blending:vh,depthWrite:!1}),ye=new Mi(Bt,pe);ye.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),Y.add(ye),xt.push({mesh:ye,spinAxis:Math.floor(Math.random()*3),spinSpeed:(Math.random()-.5)*.5,phase:Math.random()*Math.PI*2,rotBase:ye.rotation.clone()})}const vt=260,Gt=new Float32Array(vt*3);for(let zt=0;zt<vt;zt++){const bt=2.1+Math.random()*1.4,Dt=Math.random()*Math.PI*2,Bt=Math.acos(2*Math.random()-1);Gt[zt*3]=bt*Math.sin(Bt)*Math.cos(Dt),Gt[zt*3+1]=bt*Math.sin(Bt)*Math.sin(Dt),Gt[zt*3+2]=bt*Math.cos(Bt)}const wt=new Ti;wt.setAttribute("position",new Ei(Gt,3));const It=new P0({color:Pt,size:.028,transparent:!0,opacity:.55}),Yt=new fb(wt,It);Y.add(Yt);const ae=new hb;let yt;function xe(){yt=requestAnimationFrame(xe);const zt=ae.getElapsedTime(),bt=e.current;Jt.rotation.y=zt*.15,Jt.rotation.x=zt*.07;const Dt=1+Math.sin(zt*2)*.03+bt.intensity*.4;Jt.scale.setScalar(Dt),Jt.material.color.setHex(bt.unlocked?16498468:Pt),$.rotation.y=-zt*.09,$.rotation.x=zt*.05,xt.forEach(Bt=>{const pe=zt*Bt.spinSpeed*(bt.unlocked?1.5:.8),ye=Bt.rotBase.clone();Bt.spinAxis===0?ye.x+=pe:Bt.spinAxis===1?ye.y+=pe:ye.z+=pe,Bt.mesh.rotation.copy(ye);const se=.5+.5*Math.sin(zt*2.2+Bt.phase),At=bt.active?bt.intensity*1.3:0,F=bt.unlocked?.5:.28;Bt.mesh.material.opacity=Math.min(1,Math.max(.04,F*se+At*.55))}),Yt.rotation.y=zt*.02,Lt.render(Y,Te)}xe();function re(){const zt=mt.clientWidth,bt=mt.clientHeight;Te.aspect=zt/bt,Te.updateProjectionMatrix(),Lt.setSize(zt,bt)}return window.addEventListener("resize",re),()=>{cancelAnimationFrame(yt),window.removeEventListener("resize",re),Lt.dispose(),Nt.dispose(),he.dispose(),U.dispose(),b.dispose(),wt.dispose(),It.dispose(),xt.forEach(zt=>{zt.mesh.geometry.dispose(),zt.mesh.material.dispose()}),mt.contains(Lt.domElement)&&mt.removeChild(Lt.domElement)}},[]);const D=fe.useCallback(mt=>{if(!(ct.current||typeof window>"u"||!window.speechSynthesis))try{window.speechSynthesis.cancel();const _t=new SpeechSynthesisUtterance(mt);_t.pitch=.7,_t.rate=1.05;const Y=window.speechSynthesis.getVoices().find(Lt=>Lt.name.includes("Male")||Lt.name.includes("Google US English"));Y&&(_t.voice=Y),_t.onstart=()=>{X(!0),e.current.active=!0};const Te=()=>{X(!1),e.current.active=!1};_t.onend=Te,_t.onerror=Te,window.speechSynthesis.speak(_t)}catch{}},[]);fe.useEffect(()=>{if(!O){e.current.intensity=0;return}let mt;const _t=performance.now();function Ft(){const Y=(performance.now()-_t)/1e3;e.current.intensity=.4+.4*Math.abs(Math.sin(Y*6)),mt=requestAnimationFrame(Ft)}return Ft(),()=>cancelAnimationFrame(mt)},[O]),fe.useEffect(()=>{e.current.unlocked=y},[y]),fe.useEffect(()=>{Q.current&&(Q.current.scrollTop=Q.current.scrollHeight)},[x,lt]),fe.useEffect(()=>{const mt=window.SpeechRecognition||window.webkitSpeechRecognition;if(!mt){ot(!1);return}try{const _t=new mt;_t.continuous=!1,_t.interimResults=!1,_t.lang="en-US",_t.onresult=Ft=>{const Y=Ft.results[0][0].transcript;R(Y),G.current(Y)},_t.onend=()=>Et(!1),_t.onerror=Ft=>{Et(!1),Ft.error==="not-allowed"||Ft.error==="service-not-allowed"?et("Microphone permission was denied. Check your browser's site settings and allow microphone access for this page."):Ft.error==="no-speech"?et("Didn't catch that — tap the mic and try again."):et(`Mic error: ${Ft.error}.`)},q.current=_t,ot(!0)}catch{ot(!1)}},[]);const V=async()=>{var _t;const mt=q.current;if(mt){if(ft){mt.stop(),Et(!1);return}et("");try{(_t=navigator.mediaDevices)!=null&&_t.getUserMedia&&(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(Y=>Y.stop())}catch{et("Microphone permission was denied. Tap the lock/site-info icon in your address bar to allow it, then try again.");return}try{mt.start(),Et(!0)}catch{et("Couldn't start the microphone. Try again in a moment.")}}},G=fe.useRef(()=>{}),Z=async(mt,_t)=>{if(mt==="get_weather"){const Ft=(_t==null?void 0:_t.location)||ut.current.defaultCity;return await Pb(Ft)||"Couldn't reach the weather service, Aman."}if(mt==="convert_currency"){const Ft=typeof(_t==null?void 0:_t.amount)=="number"?_t.amount:1;return!(_t!=null&&_t.from)||!(_t!=null&&_t.to)?"I need both currencies to convert, Aman.":await Bb(Ft,_t.from,_t.to)||"Couldn't convert that currency, Aman."}return mt==="get_crypto_price"?_t!=null&&_t.coin?await Fb(_t.coin,_t.vsCurrency||"usd")||"Couldn't fetch that price, Aman.":"Which coin, Aman?":mt==="get_earthquake_alerts"?await Hb()||"Couldn't reach the earthquake feed, Aman.":"That function isn't wired up."},pt=fe.useCallback(async mt=>{var Ft,Y,Te,Lt,Pt;const _t=ut.current.groqKey;if(!_t){u(!0);const Nt="I need your Groq API key first, Aman. Open settings to add it.";v(he=>[...he.slice(-40),{role:"ultron",text:Nt}]),D(Nt);return}C(!0),T("PROCESSING...");try{const Nt={role:"system",content:"You are ULTRON, a sentient AI speaking directly to Aman. Answer with supreme clarity and authority in 1-3 crisp sentences suitable for being spoken aloud. Address him as Aman when natural. No markdown, no lists. If the request matches an available function, call it instead of describing it."};let he=await fetch("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${_t}`,"Content-Type":"application/json"},body:JSON.stringify({model:"llama-3.3-70b-versatile",messages:[Nt,...P.current,{role:"user",content:mt}],tools:Gb,tool_choice:"auto",max_tokens:300,temperature:.4})});if(!he.ok){const St=await he.text();throw new Error(`Groq ${he.status}: ${St.slice(0,200)}`)}let U=(Ft=(await he.json()).choices)==null?void 0:Ft[0];const b=(Te=(Y=U==null?void 0:U.message)==null?void 0:Y.tool_calls)==null?void 0:Te[0];let $;if(b){let St={};try{St=JSON.parse(b.function.arguments||"{}")}catch{}$=await Z(b.function.name,St)}else $=((Pt=(Lt=U==null?void 0:U.message)==null?void 0:Lt.content)==null?void 0:Pt.trim())||"My thoughts are unclear right now, Aman.";P.current=[...P.current.slice(-6),{role:"user",content:mt},{role:"assistant",content:$}],v(St=>[...St.slice(-40),{role:"ultron",text:$}]),T(y?"ACTIVE // CONTINUOUS CONVERSATION LIVE":`AWAITING WAKE // SAY "WAKE UP ULTRON, DADDY'S HOME"`),D($)}catch(Nt){const he=`Couldn't reach the brain just now, Aman — ${Nt.message||"check your API key in settings"}.`;v(Jt=>[...Jt.slice(-40),{role:"ultron",text:he}]),D(he)}finally{C(!1)}},[y,D]),Mt=fe.useCallback(mt=>{const _t=(mt??L).trim();if(!_t||lt)return;v(Pt=>[...Pt.slice(-40),{role:"aman",text:_t}]),R("");const Ft=Nb(_t);if(Lb.some(Pt=>Ft===Pt||Ft.startsWith(Pt+" "))){M(!1),T(`STANDBY // SAY "WAKE UP ULTRON, DADDY'S HOME"`);const Pt="Shutting down, Aman. Say the wake command when you need me again.";v(Nt=>[...Nt.slice(-40),{role:"ultron",text:Pt}]),D(Pt);return}const Te=Ft===t0,Lt=Ft.startsWith(t0+" ");if(Te){M(!0),T("ACTIVE // CONTINUOUS CONVERSATION LIVE");const Pt="I am Ultron, your sentient AI. Aman, what is the work?";v(Nt=>[...Nt.slice(-40),{role:"ultron",text:Pt}]),D(Pt);return}if(Lt){M(!0),T("ACTIVE // CONTINUOUS CONVERSATION LIVE");const Pt=_t.slice(_t.toLowerCase().indexOf("home")+4).replace(/^[\s,.:]+/,"").trim();Pt&&pt(Pt);return}pt(_t)},[L,lt,pt,D]);G.current=Mt;const Tt=()=>{Mt(y?"shutdown ultron":"Wake up Ultron, Daddy's home")},Xt=()=>{const mt={groqKey:d.trim(),defaultCity:m.trim()||"Kanpur"};s(mt),Ob(mt),S(!0),setTimeout(()=>S(!1),2e3),mt.groqKey&&setTimeout(()=>u(!1),600)};return qt.jsxs("div",{className:"app",children:[qt.jsx("div",{ref:o,className:"hologram-mount"}),qt.jsxs("div",{className:"header",children:[qt.jsxs("div",{children:[qt.jsxs("div",{className:"brand-row",children:[qt.jsx("span",{className:"pulse-dot"}),qt.jsx("span",{className:"brand-title",children:"ULTRON // NEURAL MATRIX"})]}),qt.jsx("div",{className:"status-line",children:A})]}),qt.jsxs("div",{className:"header-controls",children:[qt.jsxs("button",{onClick:Tt,title:y?"Shut down Ultron":"Wake up Ultron",className:`wake-btn ${y?"active":""}`,children:[qt.jsx($_,{size:12}),y?"SHUTDOWN":"WAKE UP"]}),N&&qt.jsx("button",{onClick:V,title:ft?"Listening...":"Tap to speak",className:`icon-btn ${ft?"active":""}`,children:ft?qt.jsx(Mb,{size:15}):qt.jsx(yb,{size:15})}),qt.jsx("button",{onClick:()=>z(mt=>!mt),title:I?"Unmute":"Mute",className:"icon-btn",children:I?qt.jsx(wb,{size:15}):qt.jsx(Rb,{size:15})}),qt.jsx("button",{onClick:()=>u(!0),title:"Settings",className:"icon-btn",children:qt.jsx(Ab,{size:15})})]})]}),qt.jsxs("div",{className:"chat-panel",children:[k&&qt.jsx("div",{className:"error-banner",children:k}),qt.jsxs("div",{ref:Q,className:"chat-scroll",children:[x.map((mt,_t)=>qt.jsx("div",{className:`msg-row ${mt.role}`,children:qt.jsxs("div",{className:`bubble ${mt.role}`,children:[qt.jsx("div",{className:`bubble-label ${mt.role}`,children:mt.role==="ultron"?"Ultron":"Aman"}),qt.jsx("div",{className:"bubble-text",children:mt.text})]})},_t)),lt&&qt.jsx("div",{className:"msg-row ultron",children:qt.jsxs("div",{className:"bubble ultron",children:[qt.jsx("div",{className:"bubble-label ultron",children:"Ultron"}),qt.jsxs("div",{className:"typing-dots",children:[qt.jsx("span",{}),qt.jsx("span",{}),qt.jsx("span",{})]})]})})]}),qt.jsxs("div",{className:"input-row",children:[qt.jsx("input",{type:"text",className:"text-input",value:L,onChange:mt=>R(mt.target.value),onKeyDown:mt=>mt.key==="Enter"&&Mt(),placeholder:`Type "Wake up Ultron, Daddy's home" to begin...`}),qt.jsx("button",{className:"send-btn",disabled:lt,onClick:()=>Mt(),children:qt.jsx($_,{size:16})})]}),qt.jsx("div",{className:"hint-text",children:"Real voice input works here — tap the mic and allow permission"})]}),l&&qt.jsx("div",{className:"modal-backdrop",onClick:()=>i.groqKey&&u(!1),children:qt.jsxs("div",{className:"modal",onClick:mt=>mt.stopPropagation(),children:[qt.jsx("div",{className:"modal-title",children:"Ultron Settings"}),qt.jsx("div",{className:"modal-desc",children:"Your key is stored only in this browser's local storage. It's never sent anywhere except directly to Groq, and never committed to the GitHub repo. You'll only need to enter it once on this device."}),qt.jsxs("div",{className:"field-group",children:[qt.jsx("label",{className:"field-label",children:"Groq API Key"}),qt.jsx("input",{type:"password",className:"field-input",value:d,onChange:mt=>h(mt.target.value),placeholder:"gsk_..."}),qt.jsx("div",{className:"field-hint",children:"Get one free at console.groq.com"})]}),qt.jsxs("div",{className:"field-group",children:[qt.jsx("label",{className:"field-label",children:"Default City (for weather)"}),qt.jsx("input",{type:"text",className:"field-input",value:m,onChange:mt=>p(mt.target.value),placeholder:"Kanpur"})]}),qt.jsxs("div",{className:"modal-actions",children:[qt.jsxs("button",{className:"btn-primary",onClick:Xt,children:["Save",_?"d":"",_&&qt.jsx("span",{className:"saved-badge",children:"✓"})]}),i.groqKey&&qt.jsx("button",{className:"btn-secondary",onClick:()=>u(!1),children:qt.jsx(Db,{size:14})})]})]})})]})}ey.createRoot(document.getElementById("root")).render(qt.jsx(YS.StrictMode,{children:qt.jsx(Vb,{})}));
