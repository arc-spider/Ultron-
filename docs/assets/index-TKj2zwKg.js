(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function $_(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var uh={exports:{}},Go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B0;function kS(){if(B0)return Go;B0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Go.Fragment=e,Go.jsx=i,Go.jsxs=i,Go}var F0;function XS(){return F0||(F0=1,uh.exports=kS()),uh.exports}var Je=XS(),fh={exports:{}},dt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0;function WS(){if(H0)return dt;H0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),g=Symbol.iterator;function E(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function x(U,Y,xe){this.props=U,this.context=Y,this.refs=y,this.updater=xe||T}x.prototype.isReactComponent={},x.prototype.setState=function(U,Y){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Y,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function z(){}z.prototype=x.prototype;function H(U,Y,xe){this.props=U,this.context=Y,this.refs=y,this.updater=xe||T}var w=H.prototype=new z;w.constructor=H,C(w,x.prototype),w.isPureReactComponent=!0;var I=Array.isArray;function N(){}var P={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function L(U,Y,xe){var we=xe.ref;return{$$typeof:o,type:U,key:Y,ref:we!==void 0?we:null,props:xe}}function q(U,Y){return L(U.type,Y,U.props)}function G(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function Q(U){var Y={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xe){return Y[xe]})}var de=/\/+/g;function ge(U,Y){return typeof U=="object"&&U!==null&&U.key!=null?Q(""+U.key):Y.toString(36)}function J(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(N,N):(U.status="pending",U.then(function(Y){U.status==="pending"&&(U.status="fulfilled",U.value=Y)},function(Y){U.status==="pending"&&(U.status="rejected",U.reason=Y)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function O(U,Y,xe,we,Pe){var se=typeof U;(se==="undefined"||se==="boolean")&&(U=null);var Me=!1;if(U===null)Me=!0;else switch(se){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(U.$$typeof){case o:case e:Me=!0;break;case v:return Me=U._init,O(Me(U._payload),Y,xe,we,Pe)}}if(Me)return Pe=Pe(U),Me=we===""?"."+ge(U,0):we,I(Pe)?(xe="",Me!=null&&(xe=Me.replace(de,"$&/")+"/"),O(Pe,Y,xe,"",function(st){return st})):Pe!=null&&(G(Pe)&&(Pe=q(Pe,xe+(Pe.key==null||U&&U.key===Pe.key?"":(""+Pe.key).replace(de,"$&/")+"/")+Me)),Y.push(Pe)),1;Me=0;var ye=we===""?".":we+":";if(I(U))for(var He=0;He<U.length;He++)we=U[He],se=ye+ge(we,He),Me+=O(we,Y,xe,se,Pe);else if(He=E(U),typeof He=="function")for(U=He.call(U),He=0;!(we=U.next()).done;)we=we.value,se=ye+ge(we,He++),Me+=O(we,Y,xe,se,Pe);else if(se==="object"){if(typeof U.then=="function")return O(J(U),Y,xe,we,Pe);throw Y=String(U),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Me}function B(U,Y,xe){if(U==null)return U;var we=[],Pe=0;return O(U,we,"","",function(se){return Y.call(xe,se,Pe++)}),we}function $(U){if(U._status===-1){var Y=U._result;Y=Y(),Y.then(function(xe){(U._status===0||U._status===-1)&&(U._status=1,U._result=xe)},function(xe){(U._status===0||U._status===-1)&&(U._status=2,U._result=xe)}),U._status===-1&&(U._status=0,U._result=Y)}if(U._status===1)return U._result.default;throw U._result}var me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Ee={map:B,forEach:function(U,Y,xe){B(U,function(){Y.apply(this,arguments)},xe)},count:function(U){var Y=0;return B(U,function(){Y++}),Y},toArray:function(U){return B(U,function(Y){return Y})||[]},only:function(U){if(!G(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return dt.Activity=S,dt.Children=Ee,dt.Component=x,dt.Fragment=i,dt.Profiler=l,dt.PureComponent=H,dt.StrictMode=s,dt.Suspense=m,dt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,dt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return P.H.useMemoCache(U)}},dt.cache=function(U){return function(){return U.apply(null,arguments)}},dt.cacheSignal=function(){return null},dt.cloneElement=function(U,Y,xe){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var we=C({},U.props),Pe=U.key;if(Y!=null)for(se in Y.key!==void 0&&(Pe=""+Y.key),Y)!b.call(Y,se)||se==="key"||se==="__self"||se==="__source"||se==="ref"&&Y.ref===void 0||(we[se]=Y[se]);var se=arguments.length-2;if(se===1)we.children=xe;else if(1<se){for(var Me=Array(se),ye=0;ye<se;ye++)Me[ye]=arguments[ye+2];we.children=Me}return L(U.type,Pe,we)},dt.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},dt.createElement=function(U,Y,xe){var we,Pe={},se=null;if(Y!=null)for(we in Y.key!==void 0&&(se=""+Y.key),Y)b.call(Y,we)&&we!=="key"&&we!=="__self"&&we!=="__source"&&(Pe[we]=Y[we]);var Me=arguments.length-2;if(Me===1)Pe.children=xe;else if(1<Me){for(var ye=Array(Me),He=0;He<Me;He++)ye[He]=arguments[He+2];Pe.children=ye}if(U&&U.defaultProps)for(we in Me=U.defaultProps,Me)Pe[we]===void 0&&(Pe[we]=Me[we]);return L(U,se,Pe)},dt.createRef=function(){return{current:null}},dt.forwardRef=function(U){return{$$typeof:p,render:U}},dt.isValidElement=G,dt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:$}},dt.memo=function(U,Y){return{$$typeof:d,type:U,compare:Y===void 0?null:Y}},dt.startTransition=function(U){var Y=P.T,xe={};P.T=xe;try{var we=U(),Pe=P.S;Pe!==null&&Pe(xe,we),typeof we=="object"&&we!==null&&typeof we.then=="function"&&we.then(N,me)}catch(se){me(se)}finally{Y!==null&&xe.types!==null&&(Y.types=xe.types),P.T=Y}},dt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},dt.use=function(U){return P.H.use(U)},dt.useActionState=function(U,Y,xe){return P.H.useActionState(U,Y,xe)},dt.useCallback=function(U,Y){return P.H.useCallback(U,Y)},dt.useContext=function(U){return P.H.useContext(U)},dt.useDebugValue=function(){},dt.useDeferredValue=function(U,Y){return P.H.useDeferredValue(U,Y)},dt.useEffect=function(U,Y){return P.H.useEffect(U,Y)},dt.useEffectEvent=function(U){return P.H.useEffectEvent(U)},dt.useId=function(){return P.H.useId()},dt.useImperativeHandle=function(U,Y,xe){return P.H.useImperativeHandle(U,Y,xe)},dt.useInsertionEffect=function(U,Y){return P.H.useInsertionEffect(U,Y)},dt.useLayoutEffect=function(U,Y){return P.H.useLayoutEffect(U,Y)},dt.useMemo=function(U,Y){return P.H.useMemo(U,Y)},dt.useOptimistic=function(U,Y){return P.H.useOptimistic(U,Y)},dt.useReducer=function(U,Y,xe){return P.H.useReducer(U,Y,xe)},dt.useRef=function(U){return P.H.useRef(U)},dt.useState=function(U){return P.H.useState(U)},dt.useSyncExternalStore=function(U,Y,xe){return P.H.useSyncExternalStore(U,Y,xe)},dt.useTransition=function(){return P.H.useTransition()},dt.version="19.2.8",dt}var G0;function Vd(){return G0||(G0=1,fh.exports=WS()),fh.exports}var yt=Vd();const qS=$_(yt);var hh={exports:{}},Vo={},dh={exports:{}},ph={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var V0;function YS(){return V0||(V0=1,(function(o){function e(O,B){var $=O.length;O.push(B);e:for(;0<$;){var me=$-1>>>1,Ee=O[me];if(0<l(Ee,B))O[me]=B,O[$]=Ee,$=me;else break e}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var B=O[0],$=O.pop();if($!==B){O[0]=$;e:for(var me=0,Ee=O.length,U=Ee>>>1;me<U;){var Y=2*(me+1)-1,xe=O[Y],we=Y+1,Pe=O[we];if(0>l(xe,$))we<Ee&&0>l(Pe,xe)?(O[me]=Pe,O[we]=$,me=we):(O[me]=xe,O[Y]=$,me=Y);else if(we<Ee&&0>l(Pe,$))O[me]=Pe,O[we]=$,me=we;else break e}}return B}function l(O,B){var $=O.sortIndex-B.sortIndex;return $!==0?$:O.id-B.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var m=[],d=[],v=1,S=null,g=3,E=!1,T=!1,C=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function w(O){for(var B=i(d);B!==null;){if(B.callback===null)s(d);else if(B.startTime<=O)s(d),B.sortIndex=B.expirationTime,e(m,B);else break;B=i(d)}}function I(O){if(C=!1,w(O),!T)if(i(m)!==null)T=!0,N||(N=!0,Q());else{var B=i(d);B!==null&&J(I,B.startTime-O)}}var N=!1,P=-1,b=5,L=-1;function q(){return y?!0:!(o.unstable_now()-L<b)}function G(){if(y=!1,N){var O=o.unstable_now();L=O;var B=!0;try{e:{T=!1,C&&(C=!1,z(P),P=-1),E=!0;var $=g;try{t:{for(w(O),S=i(m);S!==null&&!(S.expirationTime>O&&q());){var me=S.callback;if(typeof me=="function"){S.callback=null,g=S.priorityLevel;var Ee=me(S.expirationTime<=O);if(O=o.unstable_now(),typeof Ee=="function"){S.callback=Ee,w(O),B=!0;break t}S===i(m)&&s(m),w(O)}else s(m);S=i(m)}if(S!==null)B=!0;else{var U=i(d);U!==null&&J(I,U.startTime-O),B=!1}}break e}finally{S=null,g=$,E=!1}B=void 0}}finally{B?Q():N=!1}}}var Q;if(typeof H=="function")Q=function(){H(G)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,ge=de.port2;de.port1.onmessage=G,Q=function(){ge.postMessage(null)}}else Q=function(){x(G,0)};function J(O,B){P=x(function(){O(o.unstable_now())},B)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(O){switch(g){case 1:case 2:case 3:var B=3;break;default:B=g}var $=g;g=B;try{return O()}finally{g=$}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(O,B){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=g;g=O;try{return B()}finally{g=$}},o.unstable_scheduleCallback=function(O,B,$){var me=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?me+$:me):$=me,O){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=$+Ee,O={id:v++,callback:B,priorityLevel:O,startTime:$,expirationTime:Ee,sortIndex:-1},$>me?(O.sortIndex=$,e(d,O),i(m)===null&&O===i(d)&&(C?(z(P),P=-1):C=!0,J(I,$-me))):(O.sortIndex=Ee,e(m,O),T||E||(T=!0,N||(N=!0,Q()))),O},o.unstable_shouldYield=q,o.unstable_wrapCallback=function(O){var B=g;return function(){var $=g;g=B;try{return O.apply(this,arguments)}finally{g=$}}}})(ph)),ph}var k0;function ZS(){return k0||(k0=1,dh.exports=YS()),dh.exports}var mh={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function KS(){if(X0)return Fn;X0=1;var o=Vd();function e(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)d+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,v){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:d,implementation:v}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fn.createPortal=function(m,d){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return c(m,d,null,v)},Fn.flushSync=function(m){var d=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=d,s.p=v,s.d.f()}},Fn.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},Fn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Fn.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,E=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;v==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:S,integrity:g,fetchPriority:E}):v==="script"&&s.d.X(m,{crossOrigin:S,integrity:g,fetchPriority:E,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Fn.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var v=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},Fn.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var v=d.as,S=p(v,d.crossOrigin);s.d.L(m,v,{crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Fn.preloadModule=function(m,d){if(typeof m=="string")if(d){var v=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},Fn.requestFormReset=function(m){s.d.r(m)},Fn.unstable_batchedUpdates=function(m,d){return m(d)},Fn.useFormState=function(m,d,v){return h.H.useFormState(m,d,v)},Fn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Fn.version="19.2.8",Fn}var W0;function QS(){if(W0)return mh.exports;W0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),mh.exports=KS(),mh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function JS(){if(q0)return Vo;q0=1;var o=ZS(),e=Vd(),i=QS();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function d(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var _=!1,R=u.child;R;){if(R===a){_=!0,a=u,r=f;break}if(R===r){_=!0,r=u,a=f;break}R=R.sibling}if(!_){for(R=f.child;R;){if(R===a){_=!0,a=f,r=u;break}if(R===r){_=!0,r=f,a=u;break}R=R.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,g=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),H=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var de=Symbol.for("react.client.reference");function ge(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===de?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case I:return"Suspense";case N:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case H:return t.displayName||"Context";case z:return(t._context.displayName||"Context")+".Consumer";case w:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:ge(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return ge(t(n))}catch{}}return null}var J=Array.isArray,O=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},me=[],Ee=-1;function U(t){return{current:t}}function Y(t){0>Ee||(t.current=me[Ee],me[Ee]=null,Ee--)}function xe(t,n){Ee++,me[Ee]=t.current,t.current=n}var we=U(null),Pe=U(null),se=U(null),Me=U(null);function ye(t,n){switch(xe(se,n),xe(Pe,t),xe(we,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?o0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=o0(n),t=l0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(we),xe(we,t)}function He(){Y(we),Y(Pe),Y(se)}function st(t){t.memoizedState!==null&&xe(Me,t);var n=we.current,a=l0(n,t.type);n!==a&&(xe(Pe,t),xe(we,a))}function tt(t){Pe.current===t&&(Y(we),Y(Pe)),Me.current===t&&(Y(Me),zo._currentValue=$)}var Jt,be;function Te(t){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",be=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+be}var ke=!1;function Ye(t,n){if(!t||ke)return"";ke=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(le){var oe=le}Reflect.construct(t,[],ve)}else{try{ve.call()}catch(le){oe=le}t.call(ve.prototype)}}else{try{throw Error()}catch(le){oe=le}(ve=t())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(le){if(le&&oe&&typeof le.stack=="string")return[le.stack,oe.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),_=f[0],R=f[1];if(_&&R){var F=_.split(`
`),ne=R.split(`
`);for(u=r=0;r<F.length&&!F[r].includes("DetermineComponentFrameRoot");)r++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(r===F.length||u===ne.length)for(r=F.length-1,u=ne.length-1;1<=r&&0<=u&&F[r]!==ne[u];)u--;for(;1<=r&&0<=u;r--,u--)if(F[r]!==ne[u]){if(r!==1||u!==1)do if(r--,u--,0>u||F[r]!==ne[u]){var pe=`
`+F[r].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=r&&0<=u);break}}}finally{ke=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Te(a):""}function ht(t,n){switch(t.tag){case 26:case 27:case 5:return Te(t.type);case 16:return Te("Lazy");case 13:return t.child!==n&&n!==null?Te("Suspense Fallback"):Te("Suspense");case 19:return Te("SuspenseList");case 0:case 15:return Ye(t.type,!1);case 11:return Ye(t.type.render,!1);case 1:return Ye(t.type,!0);case 31:return Te("Activity");default:return""}}function nt(t){try{var n="",a=null;do n+=ht(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ct=Object.prototype.hasOwnProperty,Lt=o.unstable_scheduleCallback,xt=o.unstable_cancelCallback,ut=o.unstable_shouldYield,X=o.unstable_requestPaint,ft=o.unstable_now,Et=o.unstable_getCurrentPriorityLevel,D=o.unstable_ImmediatePriority,M=o.unstable_UserBlockingPriority,Z=o.unstable_NormalPriority,ee=o.unstable_LowPriority,ce=o.unstable_IdlePriority,Ae=o.log,Ne=o.unstable_setDisableYieldValue,ue=null,fe=null;function Ce(t){if(typeof Ae=="function"&&Ne(t),fe&&typeof fe.setStrictMode=="function")try{fe.setStrictMode(ue,t)}catch{}}var Fe=Math.clz32?Math.clz32:je,Le=Math.log,Ue=Math.LN2;function je(t){return t>>>=0,t===0?32:31-(Le(t)/Ue|0)|0}var $e=256,ot=262144,k=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function he(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var R=r&134217727;return R!==0?(r=R&~f,r!==0?u=Re(r):(_&=R,_!==0?u=Re(_):a||(a=R&~t,a!==0&&(u=Re(a))))):(R=r&~f,R!==0?u=Re(R):_!==0?u=Re(_):a||(a=r&~t,a!==0&&(u=Re(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function De(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Se(){var t=k;return k<<=1,(k&62914560)===0&&(k=4194304),t}function We(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ve(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function en(t,n,a,r,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var R=t.entanglements,F=t.expirationTimes,ne=t.hiddenUpdates;for(a=_&~a;0<a;){var pe=31-Fe(a),ve=1<<pe;R[pe]=0,F[pe]=-1;var oe=ne[pe];if(oe!==null)for(ne[pe]=null,pe=0;pe<oe.length;pe++){var le=oe[pe];le!==null&&(le.lane&=-536870913)}a&=~ve}r!==0&&Pt(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function Pt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Fe(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Pn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Fe(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function In(t,n){var a=n&-n;return a=(a&42)!==0?1:St(a),(a&(t.suspendedLanes|n))!==0?0:a}function St(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Gt(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Wn(){var t=B.p;return t!==0?t:(t=window.event,t===void 0?32:U0(t.type))}function zn(t,n){var a=B.p;try{return B.p=t,n()}finally{B.p=a}}var gn=Math.random().toString(36).slice(2),ln="__reactFiber$"+gn,tn="__reactProps$"+gn,hn="__reactContainer$"+gn,Gi="__reactEvents$"+gn,Ua="__reactListeners$"+gn,Ys="__reactHandles$"+gn,Vi="__reactResources$"+gn,Na="__reactMarker$"+gn;function La(t){delete t[ln],delete t[tn],delete t[Gi],delete t[Ua],delete t[Ys]}function na(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[hn]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=m0(t);t!==null;){if(a=t[ln])return a;t=m0(t)}return n}t=a,a=t.parentNode}return null}function ia(t){if(t=t[ln]||t[hn]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ps(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Oa(t){var n=t[Vi];return n||(n=t[Vi]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function _n(t){t[Na]=!0}var sl=new Set,A={};function W(t,n){re(t,n),re(t+"Capture",n)}function re(t,n){for(A[t]=n,t=0;t<n.length;t++)sl.add(n[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},ze={};function Xe(t){return ct.call(ze,t)?!0:ct.call(ae,t)?!1:ie.test(t)?ze[t]=!0:(ae[t]=!0,!1)}function Oe(t,n,a){if(Xe(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ze(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function qe(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+r)}}function it(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function et(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function It(t){if(!t._valueTracker){var n=gt(t)?"checked":"value";t._valueTracker=et(t,n,""+t[n])}}function sn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=gt(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}function jt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Vt=/[\n"\\]/g;function kt(t){return t.replace(Vt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ge(t,n,a,r,u,f,_,R){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+it(n)):t.value!==""+it(n)&&(t.value=""+it(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?bt(t,_,it(n)):a!=null?bt(t,_,it(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+it(R):t.removeAttribute("name")}function Bn(t,n,a,r,u,f,_,R){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){It(t);return}a=a!=null?""+it(a):"",n=n!=null?""+it(n):a,R||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=R?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),It(t)}function bt(t,n,a){n==="number"&&jt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function En(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+it(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ri(t,n,a){if(n!=null&&(n=""+it(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+it(a):""}function Di(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(J(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=it(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),It(t)}function oi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Xt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function rn(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||Xt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ui(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&rn(t,u,r)}else for(var f in n)n.hasOwnProperty(f)&&rn(t,f,n[f])}function Ht(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ki=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pa=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ms(t){return Pa.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function aa(){}var ru=null;function ou(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zs=null,Ks=null;function rp(t){var n=ia(t);if(n&&(t=n.stateNode)){var a=t[tn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ge(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+kt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[tn]||null;if(!u)throw Error(s(90));Ge(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&sn(r)}break e;case"textarea":ri(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&En(t,!!a.multiple,n,!1)}}}var lu=!1;function op(t,n,a){if(lu)return t(n,a);lu=!0;try{var r=t(n);return r}finally{if(lu=!1,(Zs!==null||Ks!==null)&&(ql(),Zs&&(n=Zs,t=Ks,Ks=Zs=null,rp(n),t)))for(n=0;n<t.length;n++)rp(t[n])}}function $r(t,n){var a=t.stateNode;if(a===null)return null;var r=a[tn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=!1;if(sa)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){cu=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{cu=!1}var Ia=null,uu=null,rl=null;function lp(){if(rl)return rl;var t,n=uu,a=n.length,r,u="value"in Ia?Ia.value:Ia.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===u[f-r];r++);return rl=u.slice(t,1<r?1-r:void 0)}function ol(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ll(){return!0}function cp(){return!1}function Kn(t){function n(a,r,u,f,_){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(a=t[R],this[R]=a?a(f):f[R]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ll:cp,this.isPropagationStopped=cp,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),n}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=Kn(gs),to=S({},gs,{view:0,detail:0}),Gv=Kn(to),fu,hu,no,ul=S({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(fu=t.screenX-no.screenX,hu=t.screenY-no.screenY):hu=fu=0,no=t),fu)},movementY:function(t){return"movementY"in t?t.movementY:hu}}),up=Kn(ul),Vv=S({},ul,{dataTransfer:0}),kv=Kn(Vv),Xv=S({},to,{relatedTarget:0}),du=Kn(Xv),Wv=S({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),qv=Kn(Wv),Yv=S({},gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zv=Kn(Yv),Kv=S({},gs,{data:0}),fp=Kn(Kv),Qv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $v(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=jv[t])?!!n[t]:!1}function pu(){return $v}var ex=S({},to,{key:function(t){if(t.key){var n=Qv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tx=Kn(ex),nx=S({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=Kn(nx),ix=S({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),ax=Kn(ix),sx=S({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),rx=Kn(sx),ox=S({},ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lx=Kn(ox),cx=S({},gs,{newState:0,oldState:0}),ux=Kn(cx),fx=[9,13,27,32],mu=sa&&"CompositionEvent"in window,io=null;sa&&"documentMode"in document&&(io=document.documentMode);var hx=sa&&"TextEvent"in window&&!io,dp=sa&&(!mu||io&&8<io&&11>=io),pp=" ",mp=!1;function gp(t,n){switch(t){case"keyup":return fx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function dx(t,n){switch(t){case"compositionend":return _p(n);case"keypress":return n.which!==32?null:(mp=!0,pp);case"textInput":return t=n.data,t===pp&&mp?null:t;default:return null}}function px(t,n){if(Qs)return t==="compositionend"||!mu&&gp(t,n)?(t=lp(),rl=uu=Ia=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!mx[t.type]:n==="textarea"}function xp(t,n,a,r){Zs?Ks?Ks.push(r):Ks=[r]:Zs=r,n=$l(n,"onChange"),0<n.length&&(a=new cl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var ao=null,so=null;function gx(t){t0(t,0)}function fl(t){var n=ps(t);if(sn(n))return t}function Sp(t,n){if(t==="change")return n}var Mp=!1;if(sa){var gu;if(sa){var _u="oninput"in document;if(!_u){var yp=document.createElement("div");yp.setAttribute("oninput","return;"),_u=typeof yp.oninput=="function"}gu=_u}else gu=!1;Mp=gu&&(!document.documentMode||9<document.documentMode)}function Ep(){ao&&(ao.detachEvent("onpropertychange",bp),so=ao=null)}function bp(t){if(t.propertyName==="value"&&fl(so)){var n=[];xp(n,so,t,ou(t)),op(gx,n)}}function _x(t,n,a){t==="focusin"?(Ep(),ao=n,so=a,ao.attachEvent("onpropertychange",bp)):t==="focusout"&&Ep()}function vx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl(so)}function xx(t,n){if(t==="click")return fl(n)}function Sx(t,n){if(t==="input"||t==="change")return fl(n)}function Mx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var li=typeof Object.is=="function"?Object.is:Mx;function ro(t,n){if(li(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!ct.call(n,u)||!li(t[u],n[u]))return!1}return!0}function Tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ap(t,n){var a=Tp(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tp(a)}}function Rp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Rp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Cp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=jt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=jt(t.document)}return n}function vu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var yx=sa&&"documentMode"in document&&11>=document.documentMode,Js=null,xu=null,oo=null,Su=!1;function wp(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Su||Js==null||Js!==jt(r)||(r=Js,"selectionStart"in r&&vu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),oo&&ro(oo,r)||(oo=r,r=$l(xu,"onSelect"),0<r.length&&(n=new cl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=Js)))}function _s(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var js={animationend:_s("Animation","AnimationEnd"),animationiteration:_s("Animation","AnimationIteration"),animationstart:_s("Animation","AnimationStart"),transitionrun:_s("Transition","TransitionRun"),transitionstart:_s("Transition","TransitionStart"),transitioncancel:_s("Transition","TransitionCancel"),transitionend:_s("Transition","TransitionEnd")},Mu={},Dp={};sa&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function vs(t){if(Mu[t])return Mu[t];if(!js[t])return t;var n=js[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Dp)return Mu[t]=n[a];return t}var Up=vs("animationend"),Np=vs("animationiteration"),Lp=vs("animationstart"),Ex=vs("transitionrun"),bx=vs("transitionstart"),Tx=vs("transitioncancel"),Op=vs("transitionend"),Pp=new Map,yu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yu.push("scrollEnd");function Ni(t,n){Pp.set(t,n),W(n,[t])}var hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},vi=[],$s=0,Eu=0;function dl(){for(var t=$s,n=Eu=$s=0;n<t;){var a=vi[n];vi[n++]=null;var r=vi[n];vi[n++]=null;var u=vi[n];vi[n++]=null;var f=vi[n];if(vi[n++]=null,r!==null&&u!==null){var _=r.pending;_===null?u.next=u:(u.next=_.next,_.next=u),r.pending=u}f!==0&&Ip(a,u,f)}}function pl(t,n,a,r){vi[$s++]=t,vi[$s++]=n,vi[$s++]=a,vi[$s++]=r,Eu|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function bu(t,n,a,r){return pl(t,n,a,r),ml(t)}function xs(t,n){return pl(t,null,null,n),ml(t)}function Ip(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function ml(t){if(50<Do)throw Do=0,Of=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var er={};function Ax(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(t,n,a,r){return new Ax(t,n,a,r)}function Tu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ra(t,n){var a=t.alternate;return a===null?(a=ci(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function zp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function gl(t,n,a,r,u,f){var _=0;if(r=t,typeof t=="function")Tu(t)&&(_=1);else if(typeof t=="string")_=US(t,a,we.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=ci(31,a,n,u),t.elementType=L,t.lanes=f,t;case C:return Ss(a.children,u,f,n);case y:_=8,u|=24;break;case x:return t=ci(12,a,n,u|2),t.elementType=x,t.lanes=f,t;case I:return t=ci(13,a,n,u),t.elementType=I,t.lanes=f,t;case N:return t=ci(19,a,n,u),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H:_=10;break e;case z:_=9;break e;case w:_=11;break e;case P:_=14;break e;case b:_=16,r=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=ci(_,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function Ss(t,n,a,r){return t=ci(7,t,r,n),t.lanes=a,t}function Au(t,n,a){return t=ci(6,t,null,n),t.lanes=a,t}function Bp(t){var n=ci(18,null,null,0);return n.stateNode=t,n}function Ru(t,n,a){return n=ci(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Fp=new WeakMap;function xi(t,n){if(typeof t=="object"&&t!==null){var a=Fp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:nt(n)},Fp.set(t,n),n)}return{value:t,source:n,stack:nt(n)}}var tr=[],nr=0,_l=null,lo=0,Si=[],Mi=0,za=null,Xi=1,Wi="";function oa(t,n){tr[nr++]=lo,tr[nr++]=_l,_l=t,lo=n}function Hp(t,n,a){Si[Mi++]=Xi,Si[Mi++]=Wi,Si[Mi++]=za,za=t;var r=Xi;t=Wi;var u=32-Fe(r)-1;r&=~(1<<u),a+=1;var f=32-Fe(n)+u;if(30<f){var _=u-u%5;f=(r&(1<<_)-1).toString(32),r>>=_,u-=_,Xi=1<<32-Fe(n)+u|a<<u|r,Wi=f+t}else Xi=1<<f|a<<u|r,Wi=t}function Cu(t){t.return!==null&&(oa(t,1),Hp(t,1,0))}function wu(t){for(;t===_l;)_l=tr[--nr],tr[nr]=null,lo=tr[--nr],tr[nr]=null;for(;t===za;)za=Si[--Mi],Si[Mi]=null,Wi=Si[--Mi],Si[Mi]=null,Xi=Si[--Mi],Si[Mi]=null}function Gp(t,n){Si[Mi++]=Xi,Si[Mi++]=Wi,Si[Mi++]=za,Xi=n.id,Wi=n.overflow,za=t}var Dn=null,nn=null,Dt=!1,Ba=null,yi=!1,Du=Error(s(519));function Fa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(xi(n,t)),Du}function Vp(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[ln]=t,n[tn]=r,a){case"dialog":At("cancel",n),At("close",n);break;case"iframe":case"object":case"embed":At("load",n);break;case"video":case"audio":for(a=0;a<No.length;a++)At(No[a],n);break;case"source":At("error",n);break;case"img":case"image":case"link":At("error",n),At("load",n);break;case"details":At("toggle",n);break;case"input":At("invalid",n),Bn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":At("invalid",n);break;case"textarea":At("invalid",n),Di(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||s0(n.textContent,a)?(r.popover!=null&&(At("beforetoggle",n),At("toggle",n)),r.onScroll!=null&&At("scroll",n),r.onScrollEnd!=null&&At("scrollend",n),r.onClick!=null&&(n.onclick=aa),n=!0):n=!1,n||Fa(t,!0)}function kp(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:yi=!1;return;case 27:case 3:yi=!0;return;default:Dn=Dn.return}}function ir(t){if(t!==Dn)return!1;if(!Dt)return kp(t),Dt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Kf(t.type,t.memoizedProps)),a=!a),a&&nn&&Fa(t),kp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));nn=p0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));nn=p0(t)}else n===27?(n=nn,$a(t.type)?(t=eh,eh=null,nn=t):nn=n):nn=Dn?bi(t.stateNode.nextSibling):null;return!0}function Ms(){nn=Dn=null,Dt=!1}function Uu(){var t=Ba;return t!==null&&($n===null?$n=t:$n.push.apply($n,t),Ba=null),t}function co(t){Ba===null?Ba=[t]:Ba.push(t)}var Nu=U(null),ys=null,la=null;function Ha(t,n,a){xe(Nu,n._currentValue),n._currentValue=a}function ca(t){t._currentValue=Nu.current,Y(Nu)}function Lu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Ou(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;e:for(;f!==null;){var R=f;f=u;for(var F=0;F<n.length;F++)if(R.context===n[F]){f.lanes|=a,R=f.alternate,R!==null&&(R.lanes|=a),Lu(f.return,a,t),r||(_=null);break e}f=R.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(s(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),Lu(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function ar(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var R=u.type;li(u.pendingProps.value,_.value)||(t!==null?t.push(R):t=[R])}}else if(u===Me.current){if(_=u.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(zo):t=[zo])}u=u.return}t!==null&&Ou(n,t,a,r),n.flags|=262144}function vl(t){for(t=t.firstContext;t!==null;){if(!li(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Es(t){ys=t,la=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Un(t){return Xp(ys,t)}function xl(t,n){return ys===null&&Es(t),Xp(t,n)}function Xp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},la===null){if(t===null)throw Error(s(308));la=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else la=la.next=n;return a}var Rx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Cx=o.unstable_scheduleCallback,wx=o.unstable_NormalPriority,vn={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Pu(){return{controller:new Rx,data:new Map,refCount:0}}function uo(t){t.refCount--,t.refCount===0&&Cx(wx,function(){t.controller.abort()})}var fo=null,Iu=0,sr=0,rr=null;function Dx(t,n){if(fo===null){var a=fo=[];Iu=0,sr=Hf(),rr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Iu++,n.then(Wp,Wp),n}function Wp(){if(--Iu===0&&fo!==null){rr!==null&&(rr.status="fulfilled");var t=fo;fo=null,sr=0,rr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ux(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var qp=O.S;O.S=function(t,n){wg=ft(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Dx(t,n),qp!==null&&qp(t,n)};var bs=U(null);function zu(){var t=bs.current;return t!==null?t:$t.pooledCache}function Sl(t,n){n===null?xe(bs,bs.current):xe(bs,n.pool)}function Yp(){var t=zu();return t===null?null:{parent:vn._currentValue,pool:t}}var or=Error(s(460)),Bu=Error(s(474)),Ml=Error(s(542)),yl={then:function(){}};function Zp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Kp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(aa,aa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Jp(t),t;default:if(typeof n.status=="string")n.then(aa,aa);else{if(t=$t,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Jp(t),t}throw As=n,or}}function Ts(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(As=a,or):a}}var As=null;function Qp(){if(As===null)throw Error(s(459));var t=As;return As=null,t}function Jp(t){if(t===or||t===Ml)throw Error(s(483))}var lr=null,ho=0;function El(t){var n=ho;return ho+=1,lr===null&&(lr=[]),Kp(lr,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function bl(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function jp(t){function n(K,V){if(t){var te=K.deletions;te===null?(K.deletions=[V],K.flags|=16):te.push(V)}}function a(K,V){if(!t)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function r(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function u(K,V){return K=ra(K,V),K.index=0,K.sibling=null,K}function f(K,V,te){return K.index=te,t?(te=K.alternate,te!==null?(te=te.index,te<V?(K.flags|=67108866,V):te):(K.flags|=67108866,V)):(K.flags|=1048576,V)}function _(K){return t&&K.alternate===null&&(K.flags|=67108866),K}function R(K,V,te,_e){return V===null||V.tag!==6?(V=Au(te,K.mode,_e),V.return=K,V):(V=u(V,te),V.return=K,V)}function F(K,V,te,_e){var at=te.type;return at===C?pe(K,V,te.props.children,_e,te.key):V!==null&&(V.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===b&&Ts(at)===V.type)?(V=u(V,te.props),po(V,te),V.return=K,V):(V=gl(te.type,te.key,te.props,null,K.mode,_e),po(V,te),V.return=K,V)}function ne(K,V,te,_e){return V===null||V.tag!==4||V.stateNode.containerInfo!==te.containerInfo||V.stateNode.implementation!==te.implementation?(V=Ru(te,K.mode,_e),V.return=K,V):(V=u(V,te.children||[]),V.return=K,V)}function pe(K,V,te,_e,at){return V===null||V.tag!==7?(V=Ss(te,K.mode,_e,at),V.return=K,V):(V=u(V,te),V.return=K,V)}function ve(K,V,te){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Au(""+V,K.mode,te),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case E:return te=gl(V.type,V.key,V.props,null,K.mode,te),po(te,V),te.return=K,te;case T:return V=Ru(V,K.mode,te),V.return=K,V;case b:return V=Ts(V),ve(K,V,te)}if(J(V)||Q(V))return V=Ss(V,K.mode,te,null),V.return=K,V;if(typeof V.then=="function")return ve(K,El(V),te);if(V.$$typeof===H)return ve(K,xl(K,V),te);bl(K,V)}return null}function oe(K,V,te,_e){var at=V!==null?V.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return at!==null?null:R(K,V,""+te,_e);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case E:return te.key===at?F(K,V,te,_e):null;case T:return te.key===at?ne(K,V,te,_e):null;case b:return te=Ts(te),oe(K,V,te,_e)}if(J(te)||Q(te))return at!==null?null:pe(K,V,te,_e,null);if(typeof te.then=="function")return oe(K,V,El(te),_e);if(te.$$typeof===H)return oe(K,V,xl(K,te),_e);bl(K,te)}return null}function le(K,V,te,_e,at){if(typeof _e=="string"&&_e!==""||typeof _e=="number"||typeof _e=="bigint")return K=K.get(te)||null,R(V,K,""+_e,at);if(typeof _e=="object"&&_e!==null){switch(_e.$$typeof){case E:return K=K.get(_e.key===null?te:_e.key)||null,F(V,K,_e,at);case T:return K=K.get(_e.key===null?te:_e.key)||null,ne(V,K,_e,at);case b:return _e=Ts(_e),le(K,V,te,_e,at)}if(J(_e)||Q(_e))return K=K.get(te)||null,pe(V,K,_e,at,null);if(typeof _e.then=="function")return le(K,V,te,El(_e),at);if(_e.$$typeof===H)return le(K,V,te,xl(V,_e),at);bl(V,_e)}return null}function Ke(K,V,te,_e){for(var at=null,zt=null,Qe=V,vt=V=0,wt=null;Qe!==null&&vt<te.length;vt++){Qe.index>vt?(wt=Qe,Qe=null):wt=Qe.sibling;var Bt=oe(K,Qe,te[vt],_e);if(Bt===null){Qe===null&&(Qe=wt);break}t&&Qe&&Bt.alternate===null&&n(K,Qe),V=f(Bt,V,vt),zt===null?at=Bt:zt.sibling=Bt,zt=Bt,Qe=wt}if(vt===te.length)return a(K,Qe),Dt&&oa(K,vt),at;if(Qe===null){for(;vt<te.length;vt++)Qe=ve(K,te[vt],_e),Qe!==null&&(V=f(Qe,V,vt),zt===null?at=Qe:zt.sibling=Qe,zt=Qe);return Dt&&oa(K,vt),at}for(Qe=r(Qe);vt<te.length;vt++)wt=le(Qe,K,vt,te[vt],_e),wt!==null&&(t&&wt.alternate!==null&&Qe.delete(wt.key===null?vt:wt.key),V=f(wt,V,vt),zt===null?at=wt:zt.sibling=wt,zt=wt);return t&&Qe.forEach(function(as){return n(K,as)}),Dt&&oa(K,vt),at}function rt(K,V,te,_e){if(te==null)throw Error(s(151));for(var at=null,zt=null,Qe=V,vt=V=0,wt=null,Bt=te.next();Qe!==null&&!Bt.done;vt++,Bt=te.next()){Qe.index>vt?(wt=Qe,Qe=null):wt=Qe.sibling;var as=oe(K,Qe,Bt.value,_e);if(as===null){Qe===null&&(Qe=wt);break}t&&Qe&&as.alternate===null&&n(K,Qe),V=f(as,V,vt),zt===null?at=as:zt.sibling=as,zt=as,Qe=wt}if(Bt.done)return a(K,Qe),Dt&&oa(K,vt),at;if(Qe===null){for(;!Bt.done;vt++,Bt=te.next())Bt=ve(K,Bt.value,_e),Bt!==null&&(V=f(Bt,V,vt),zt===null?at=Bt:zt.sibling=Bt,zt=Bt);return Dt&&oa(K,vt),at}for(Qe=r(Qe);!Bt.done;vt++,Bt=te.next())Bt=le(Qe,K,vt,Bt.value,_e),Bt!==null&&(t&&Bt.alternate!==null&&Qe.delete(Bt.key===null?vt:Bt.key),V=f(Bt,V,vt),zt===null?at=Bt:zt.sibling=Bt,zt=Bt);return t&&Qe.forEach(function(VS){return n(K,VS)}),Dt&&oa(K,vt),at}function Qt(K,V,te,_e){if(typeof te=="object"&&te!==null&&te.type===C&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case E:e:{for(var at=te.key;V!==null;){if(V.key===at){if(at=te.type,at===C){if(V.tag===7){a(K,V.sibling),_e=u(V,te.props.children),_e.return=K,K=_e;break e}}else if(V.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===b&&Ts(at)===V.type){a(K,V.sibling),_e=u(V,te.props),po(_e,te),_e.return=K,K=_e;break e}a(K,V);break}else n(K,V);V=V.sibling}te.type===C?(_e=Ss(te.props.children,K.mode,_e,te.key),_e.return=K,K=_e):(_e=gl(te.type,te.key,te.props,null,K.mode,_e),po(_e,te),_e.return=K,K=_e)}return _(K);case T:e:{for(at=te.key;V!==null;){if(V.key===at)if(V.tag===4&&V.stateNode.containerInfo===te.containerInfo&&V.stateNode.implementation===te.implementation){a(K,V.sibling),_e=u(V,te.children||[]),_e.return=K,K=_e;break e}else{a(K,V);break}else n(K,V);V=V.sibling}_e=Ru(te,K.mode,_e),_e.return=K,K=_e}return _(K);case b:return te=Ts(te),Qt(K,V,te,_e)}if(J(te))return Ke(K,V,te,_e);if(Q(te)){if(at=Q(te),typeof at!="function")throw Error(s(150));return te=at.call(te),rt(K,V,te,_e)}if(typeof te.then=="function")return Qt(K,V,El(te),_e);if(te.$$typeof===H)return Qt(K,V,xl(K,te),_e);bl(K,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,V!==null&&V.tag===6?(a(K,V.sibling),_e=u(V,te),_e.return=K,K=_e):(a(K,V),_e=Au(te,K.mode,_e),_e.return=K,K=_e),_(K)):a(K,V)}return function(K,V,te,_e){try{ho=0;var at=Qt(K,V,te,_e);return lr=null,at}catch(Qe){if(Qe===or||Qe===Ml)throw Qe;var zt=ci(29,Qe,null,K.mode);return zt.lanes=_e,zt.return=K,zt}finally{}}}var Rs=jp(!0),$p=jp(!1),Ga=!1;function Fu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ka(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Ft&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ml(t),Ip(t,null,a),n}return pl(t,r,n,a),ml(t)}function mo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Pn(t,a)}}function Gu(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Vu=!1;function go(){if(Vu){var t=rr;if(t!==null)throw t}}function _o(t,n,a,r){Vu=!1;var u=t.updateQueue;Ga=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var F=R,ne=F.next;F.next=null,_===null?f=ne:_.next=ne,_=F;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,R=pe.lastBaseUpdate,R!==_&&(R===null?pe.firstBaseUpdate=ne:R.next=ne,pe.lastBaseUpdate=F))}if(f!==null){var ve=u.baseState;_=0,pe=ne=F=null,R=f;do{var oe=R.lane&-536870913,le=oe!==R.lane;if(le?(Ct&oe)===oe:(r&oe)===oe){oe!==0&&oe===sr&&(Vu=!0),pe!==null&&(pe=pe.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ke=t,rt=R;oe=n;var Qt=a;switch(rt.tag){case 1:if(Ke=rt.payload,typeof Ke=="function"){ve=Ke.call(Qt,ve,oe);break e}ve=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=rt.payload,oe=typeof Ke=="function"?Ke.call(Qt,ve,oe):Ke,oe==null)break e;ve=S({},ve,oe);break e;case 2:Ga=!0}}oe=R.callback,oe!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[oe]:le.push(oe))}else le={lane:oe,tag:R.tag,payload:R.payload,callback:R.callback,next:null},pe===null?(ne=pe=le,F=ve):pe=pe.next=le,_|=oe;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;le=R,R=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);pe===null&&(F=ve),u.baseState=F,u.firstBaseUpdate=ne,u.lastBaseUpdate=pe,f===null&&(u.shared.lanes=0),Za|=_,t.lanes=_,t.memoizedState=ve}}function em(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function tm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)em(a[t],n)}var cr=U(null),Tl=U(0);function nm(t,n){t=va,xe(Tl,t),xe(cr,n),va=t|n.baseLanes}function ku(){xe(Tl,va),xe(cr,cr.current)}function Xu(){va=Tl.current,Y(cr),Y(Tl)}var ui=U(null),Ei=null;function Xa(t){var n=t.alternate;xe(dn,dn.current&1),xe(ui,t),Ei===null&&(n===null||cr.current!==null||n.memoizedState!==null)&&(Ei=t)}function Wu(t){xe(dn,dn.current),xe(ui,t),Ei===null&&(Ei=t)}function im(t){t.tag===22?(xe(dn,dn.current),xe(ui,t),Ei===null&&(Ei=t)):Wa()}function Wa(){xe(dn,dn.current),xe(ui,ui.current)}function fi(t){Y(ui),Ei===t&&(Ei=null),Y(dn)}var dn=U(0);function Al(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jf(a)||$f(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ua=0,_t=null,Zt=null,xn=null,Rl=!1,ur=!1,Cs=!1,Cl=0,vo=0,fr=null,Nx=0;function cn(){throw Error(s(321))}function qu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!li(t[a],n[a]))return!1;return!0}function Yu(t,n,a,r,u,f){return ua=f,_t=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=t===null||t.memoizedState===null?Hm:cf,Cs=!1,f=a(r,u),Cs=!1,ur&&(f=sm(n,a,r,u)),am(t),f}function am(t){O.H=Mo;var n=Zt!==null&&Zt.next!==null;if(ua=0,xn=Zt=_t=null,Rl=!1,vo=0,fr=null,n)throw Error(s(300));t===null||Sn||(t=t.dependencies,t!==null&&vl(t)&&(Sn=!0))}function sm(t,n,a,r){_t=t;var u=0;do{if(ur&&(fr=null),vo=0,ur=!1,25<=u)throw Error(s(301));if(u+=1,xn=Zt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Gm,f=n(a,r)}while(ur);return f}function Lx(){var t=O.H,n=t.useState()[0];return n=typeof n.then=="function"?xo(n):n,t=t.useState()[0],(Zt!==null?Zt.memoizedState:null)!==t&&(_t.flags|=1024),n}function Zu(){var t=Cl!==0;return Cl=0,t}function Ku(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Qu(t){if(Rl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Rl=!1}ua=0,xn=Zt=_t=null,ur=!1,vo=Cl=0,fr=null}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?_t.memoizedState=xn=t:xn=xn.next=t,xn}function pn(){if(Zt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Zt.next;var n=xn===null?_t.memoizedState:xn.next;if(n!==null)xn=n,Zt=t;else{if(t===null)throw _t.alternate===null?Error(s(467)):Error(s(310));Zt=t,t={memoizedState:Zt.memoizedState,baseState:Zt.baseState,baseQueue:Zt.baseQueue,queue:Zt.queue,next:null},xn===null?_t.memoizedState=xn=t:xn=xn.next=t}return xn}function wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(t){var n=vo;return vo+=1,fr===null&&(fr=[]),t=Kp(fr,t,n),n=_t,(xn===null?n.memoizedState:xn.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Hm:cf),t}function Dl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xo(t);if(t.$$typeof===H)return Un(t)}throw Error(s(438,String(t)))}function Ju(t){var n=null,a=_t.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=_t.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=wl(),_t.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=q;return n.index++,a}function fa(t,n){return typeof n=="function"?n(t):n}function Ul(t){var n=pn();return ju(n,Zt,t)}function ju(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var R=_=null,F=null,ne=n,pe=!1;do{var ve=ne.lane&-536870913;if(ve!==ne.lane?(Ct&ve)===ve:(ua&ve)===ve){var oe=ne.revertLane;if(oe===0)F!==null&&(F=F.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),ve===sr&&(pe=!0);else if((ua&oe)===oe){ne=ne.next,oe===sr&&(pe=!0);continue}else ve={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},F===null?(R=F=ve,_=f):F=F.next=ve,_t.lanes|=oe,Za|=oe;ve=ne.action,Cs&&a(f,ve),f=ne.hasEagerState?ne.eagerState:a(f,ve)}else oe={lane:ve,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},F===null?(R=F=oe,_=f):F=F.next=oe,_t.lanes|=ve,Za|=ve;ne=ne.next}while(ne!==null&&ne!==n);if(F===null?_=f:F.next=R,!li(f,t.memoizedState)&&(Sn=!0,pe&&(a=rr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=F,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function $u(t){var n=pn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);li(f,n.memoizedState)||(Sn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function rm(t,n,a){var r=_t,u=pn(),f=Dt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!li((Zt||u).memoizedState,a);if(_&&(u.memoizedState=a,Sn=!0),u=u.queue,nf(cm.bind(null,r,u,t),[t]),u.getSnapshot!==n||_||xn!==null&&xn.memoizedState.tag&1){if(r.flags|=2048,hr(9,{destroy:void 0},lm.bind(null,r,u,a,n),null),$t===null)throw Error(s(349));f||(ua&127)!==0||om(r,n,a)}return a}function om(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=_t.updateQueue,n===null?(n=wl(),_t.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function lm(t,n,a,r){n.value=a,n.getSnapshot=r,um(n)&&fm(t)}function cm(t,n,a){return a(function(){um(n)&&fm(t)})}function um(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!li(t,a)}catch{return!0}}function fm(t){var n=xs(t,2);n!==null&&ei(n,t,2)}function ef(t){var n=qn();if(typeof t=="function"){var a=t;if(t=a(),Cs){Ce(!0);try{a()}finally{Ce(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:t},n}function hm(t,n,a,r){return t.baseState=a,ju(t,Zt,typeof r=="function"?r:fa)}function Ox(t,n,a,r,u){if(Ol(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,dm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function dm(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=O.T,_={};O.T=_;try{var R=a(u,r),F=O.S;F!==null&&F(_,R),pm(t,n,R)}catch(ne){tf(t,n,ne)}finally{f!==null&&_.types!==null&&(f.types=_.types),O.T=f}}else try{f=a(u,r),pm(t,n,f)}catch(ne){tf(t,n,ne)}}function pm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){mm(t,n,r)},function(r){return tf(t,n,r)}):mm(t,n,a)}function mm(t,n,a){n.status="fulfilled",n.value=a,gm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,dm(t,a)))}function tf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,gm(n),n=n.next;while(n!==r)}t.action=null}function gm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function _m(t,n){return n}function vm(t,n){if(Dt){var a=$t.formState;if(a!==null){e:{var r=_t;if(Dt){if(nn){t:{for(var u=nn,f=yi;u.nodeType!==8;){if(!f){u=null;break t}if(u=bi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){nn=bi(u.nextSibling),r=u.data==="F!";break e}}Fa(r)}r=!1}r&&(n=a[0])}}return a=qn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_m,lastRenderedState:n},a.queue=r,a=zm.bind(null,_t,r),r.dispatch=a,r=ef(!1),f=lf.bind(null,_t,!1,r.queue),r=qn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=Ox.bind(null,_t,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function xm(t){var n=pn();return Sm(n,Zt,t)}function Sm(t,n,a){if(n=ju(t,n,_m)[0],t=Ul(fa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=xo(n)}catch(_){throw _===or?Ml:_}else r=n;n=pn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(_t.flags|=2048,hr(9,{destroy:void 0},Px.bind(null,u,a),null)),[r,f,t]}function Px(t,n){t.action=n}function Mm(t){var n=pn(),a=Zt;if(a!==null)return Sm(n,a,t);pn(),n=n.memoizedState,a=pn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function hr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=_t.updateQueue,n===null&&(n=wl(),_t.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function ym(){return pn().memoizedState}function Nl(t,n,a,r){var u=qn();_t.flags|=t,u.memoizedState=hr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Ll(t,n,a,r){var u=pn();r=r===void 0?null:r;var f=u.memoizedState.inst;Zt!==null&&r!==null&&qu(r,Zt.memoizedState.deps)?u.memoizedState=hr(n,f,a,r):(_t.flags|=t,u.memoizedState=hr(1|n,f,a,r))}function Em(t,n){Nl(8390656,8,t,n)}function nf(t,n){Ll(2048,8,t,n)}function Ix(t){_t.flags|=4;var n=_t.updateQueue;if(n===null)n=wl(),_t.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function bm(t){var n=pn().memoizedState;return Ix({ref:n,nextImpl:t}),function(){if((Ft&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Tm(t,n){return Ll(4,2,t,n)}function Am(t,n){return Ll(4,4,t,n)}function Rm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Cm(t,n,a){a=a!=null?a.concat([t]):null,Ll(4,4,Rm.bind(null,n,t),a)}function af(){}function wm(t,n){var a=pn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&qu(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Dm(t,n){var a=pn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&qu(n,r[1]))return r[0];if(r=t(),Cs){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[r,n],r}function sf(t,n,a){return a===void 0||(ua&1073741824)!==0&&(Ct&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Ug(),_t.lanes|=t,Za|=t,a)}function Um(t,n,a,r){return li(a,n)?a:cr.current!==null?(t=sf(t,a,r),li(t,n)||(Sn=!0),t):(ua&42)===0||(ua&1073741824)!==0&&(Ct&261930)===0?(Sn=!0,t.memoizedState=a):(t=Ug(),_t.lanes|=t,Za|=t,n)}function Nm(t,n,a,r,u){var f=B.p;B.p=f!==0&&8>f?f:8;var _=O.T,R={};O.T=R,lf(t,!1,n,a);try{var F=u(),ne=O.S;if(ne!==null&&ne(R,F),F!==null&&typeof F=="object"&&typeof F.then=="function"){var pe=Ux(F,r);So(t,n,pe,pi(t))}else So(t,n,r,pi(t))}catch(ve){So(t,n,{then:function(){},status:"rejected",reason:ve},pi())}finally{B.p=f,_!==null&&R.types!==null&&(_.types=R.types),O.T=_}}function zx(){}function rf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Lm(t).queue;Nm(t,u,n,$,a===null?zx:function(){return Om(t),a(r)})}function Lm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:$},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Om(t){var n=Lm(t);n.next===null&&(n=t.alternate.memoizedState),So(t,n.next.queue,{},pi())}function of(){return Un(zo)}function Pm(){return pn().memoizedState}function Im(){return pn().memoizedState}function Bx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=pi();t=Va(a);var r=ka(n,t,a);r!==null&&(ei(r,n,a),mo(r,n,a)),n={cache:Pu()},t.payload=n;return}n=n.return}}function Fx(t,n,a){var r=pi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ol(t)?Bm(n,a):(a=bu(t,n,a,r),a!==null&&(ei(a,t,r),Fm(a,n,r)))}function zm(t,n,a){var r=pi();So(t,n,a,r)}function So(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ol(t))Bm(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,R=f(_,a);if(u.hasEagerState=!0,u.eagerState=R,li(R,_))return pl(t,n,u,0),$t===null&&dl(),!1}catch{}finally{}if(a=bu(t,n,u,r),a!==null)return ei(a,t,r),Fm(a,n,r),!0}return!1}function lf(t,n,a,r){if(r={lane:2,revertLane:Hf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ol(t)){if(n)throw Error(s(479))}else n=bu(t,a,r,2),n!==null&&ei(n,t,2)}function Ol(t){var n=t.alternate;return t===_t||n!==null&&n===_t}function Bm(t,n){ur=Rl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Fm(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Pn(t,a)}}var Mo={readContext:Un,use:Dl,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Mo.useEffectEvent=cn;var Hm={readContext:Un,use:Dl,useCallback:function(t,n){return qn().memoizedState=[t,n===void 0?null:n],t},useContext:Un,useEffect:Em,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Nl(4194308,4,Rm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Nl(4194308,4,t,n)},useInsertionEffect:function(t,n){Nl(4,2,t,n)},useMemo:function(t,n){var a=qn();n=n===void 0?null:n;var r=t();if(Cs){Ce(!0);try{t()}finally{Ce(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=qn();if(a!==void 0){var u=a(n);if(Cs){Ce(!0);try{a(n)}finally{Ce(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=Fx.bind(null,_t,t),[r.memoizedState,t]},useRef:function(t){var n=qn();return t={current:t},n.memoizedState=t},useState:function(t){t=ef(t);var n=t.queue,a=zm.bind(null,_t,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:af,useDeferredValue:function(t,n){var a=qn();return sf(a,t,n)},useTransition:function(){var t=ef(!1);return t=Nm.bind(null,_t,t.queue,!0,!1),qn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=_t,u=qn();if(Dt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),$t===null)throw Error(s(349));(Ct&127)!==0||om(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Em(cm.bind(null,r,f,t),[t]),r.flags|=2048,hr(9,{destroy:void 0},lm.bind(null,r,f,a,n),null),a},useId:function(){var t=qn(),n=$t.identifierPrefix;if(Dt){var a=Wi,r=Xi;a=(r&~(1<<32-Fe(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Cl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Nx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:of,useFormState:vm,useActionState:vm,useOptimistic:function(t){var n=qn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=lf.bind(null,_t,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ju,useCacheRefresh:function(){return qn().memoizedState=Bx.bind(null,_t)},useEffectEvent:function(t){var n=qn(),a={impl:t};return n.memoizedState=a,function(){if((Ft&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},cf={readContext:Un,use:Dl,useCallback:wm,useContext:Un,useEffect:nf,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:Ul,useRef:ym,useState:function(){return Ul(fa)},useDebugValue:af,useDeferredValue:function(t,n){var a=pn();return Um(a,Zt.memoizedState,t,n)},useTransition:function(){var t=Ul(fa)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:rm,useId:Pm,useHostTransitionStatus:of,useFormState:xm,useActionState:xm,useOptimistic:function(t,n){var a=pn();return hm(a,Zt,t,n)},useMemoCache:Ju,useCacheRefresh:Im};cf.useEffectEvent=bm;var Gm={readContext:Un,use:Dl,useCallback:wm,useContext:Un,useEffect:nf,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:$u,useRef:ym,useState:function(){return $u(fa)},useDebugValue:af,useDeferredValue:function(t,n){var a=pn();return Zt===null?sf(a,t,n):Um(a,Zt.memoizedState,t,n)},useTransition:function(){var t=$u(fa)[0],n=pn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:rm,useId:Pm,useHostTransitionStatus:of,useFormState:Mm,useActionState:Mm,useOptimistic:function(t,n){var a=pn();return Zt!==null?hm(a,Zt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ju,useCacheRefresh:Im};Gm.useEffectEvent=bm;function uf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ff={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=pi(),u=Va(r);u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,r),n!==null&&(ei(n,t,r),mo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=pi(),u=Va(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ka(t,u,r),n!==null&&(ei(n,t,r),mo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=pi(),r=Va(a);r.tag=2,n!=null&&(r.callback=n),n=ka(t,r,a),n!==null&&(ei(n,t,a),mo(n,t,a))}};function Vm(t,n,a,r,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,_):n.prototype&&n.prototype.isPureReactComponent?!ro(a,r)||!ro(u,f):!0}function km(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&ff.enqueueReplaceState(n,n.state,null)}function ws(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Xm(t){hl(t)}function Wm(t){console.error(t)}function qm(t){hl(t)}function Pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Ym(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function hf(t,n,a){return a=Va(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(t,n)},a}function Zm(t){return t=Va(t),t.tag=3,t}function Km(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){Ym(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Ym(n,a,r),typeof u!="function"&&(Ka===null?Ka=new Set([this]):Ka.add(this));var R=r.stack;this.componentDidCatch(r.value,{componentStack:R!==null?R:""})})}function Hx(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&ar(n,a,u,!0),a=ui.current,a!==null){switch(a.tag){case 31:case 13:return Ei===null?Yl():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),zf(t,r,u)),!1;case 22:return a.flags|=65536,r===yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),zf(t,r,u)),!1}throw Error(s(435,a.tag))}return zf(t,r,u),Yl(),!1}if(Dt)return n=ui.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Du&&(t=Error(s(422),{cause:r}),co(xi(t,a)))):(r!==Du&&(n=Error(s(423),{cause:r}),co(xi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=xi(r,a),u=hf(t.stateNode,r,u),Gu(t,u),un!==4&&(un=2)),!1;var f=Error(s(520),{cause:r});if(f=xi(f,a),wo===null?wo=[f]:wo.push(f),un!==4&&(un=2),n===null)return!0;r=xi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=hf(a.stateNode,r,t),Gu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ka===null||!Ka.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Zm(u),Km(u,t,a,r),Gu(a,u),!1}a=a.return}while(a!==null);return!1}var df=Error(s(461)),Sn=!1;function Nn(t,n,a,r){n.child=t===null?$p(n,null,a,r):Rs(n,t.child,a,r)}function Qm(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var _={};for(var R in r)R!=="ref"&&(_[R]=r[R])}else _=r;return Es(n),r=Yu(t,n,a,_,f,u),R=Zu(),t!==null&&!Sn?(Ku(t,n,u),ha(t,n,u)):(Dt&&R&&Cu(n),n.flags|=1,Nn(t,n,r,u),n.child)}function Jm(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!Tu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,jm(t,n,f,r,u)):(t=gl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Mf(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:ro,a(_,r)&&t.ref===n.ref)return ha(t,n,u)}return n.flags|=1,t=ra(f,r),t.ref=n.ref,t.return=n,n.child=t}function jm(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(ro(f,r)&&t.ref===n.ref)if(Sn=!1,n.pendingProps=r=f,Mf(t,u))(t.flags&131072)!==0&&(Sn=!0);else return n.lanes=t.lanes,ha(t,n,u)}return pf(t,n,a,r,u)}function $m(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return eg(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Sl(n,f!==null?f.cachePool:null),f!==null?nm(n,f):ku(),im(n);else return r=n.lanes=536870912,eg(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(Sl(n,f.cachePool),nm(n,f),Wa(),n.memoizedState=null):(t!==null&&Sl(n,null),ku(),Wa());return Nn(t,n,u,a),n.child}function yo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function eg(t,n,a,r,u){var f=zu();return f=f===null?null:{parent:vn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Sl(n,null),ku(),im(n),t!==null&&ar(t,n,r,!0),n.childLanes=u,null}function Il(t,n){return n=Bl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function tg(t,n,a){return Rs(n,t.child,null,a),t=Il(n,n.pendingProps),t.flags|=2,fi(n),n.memoizedState=null,t}function Gx(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Dt){if(r.mode==="hidden")return t=Il(n,r),n.lanes=536870912,yo(null,t);if(Wu(n),(t=nn)?(t=d0(t,yi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Xi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=Bp(t),a.return=n,n.child=a,Dn=n,nn=null)):t=null,t===null)throw Fa(n);return n.lanes=536870912,null}return Il(n,r)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(Wu(n),u)if(n.flags&256)n.flags&=-257,n=tg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(Sn||ar(t,n,a,!1),u=(a&t.childLanes)!==0,Sn||u){if(r=$t,r!==null&&(_=In(r,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,xs(t,_),ei(r,t,_),df;Yl(),n=tg(t,n,a)}else t=f.treeContext,nn=bi(_.nextSibling),Dn=n,Dt=!0,Ba=null,yi=!1,t!==null&&Gp(n,t),n=Il(n,r),n.flags|=4096;return n}return t=ra(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function zl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function pf(t,n,a,r,u){return Es(n),a=Yu(t,n,a,r,void 0,u),r=Zu(),t!==null&&!Sn?(Ku(t,n,u),ha(t,n,u)):(Dt&&r&&Cu(n),n.flags|=1,Nn(t,n,a,u),n.child)}function ng(t,n,a,r,u,f){return Es(n),n.updateQueue=null,a=sm(n,r,a,u),am(t),r=Zu(),t!==null&&!Sn?(Ku(t,n,f),ha(t,n,f)):(Dt&&r&&Cu(n),n.flags|=1,Nn(t,n,a,f),n.child)}function ig(t,n,a,r,u){if(Es(n),n.stateNode===null){var f=er,_=a.contextType;typeof _=="object"&&_!==null&&(f=Un(_)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ff,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Fu(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?Un(_):er,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(uf(n,a,_,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&ff.enqueueReplaceState(f,f.state,null),_o(n,r,f,u),go(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var R=n.memoizedProps,F=ws(a,R);f.props=F;var ne=f.context,pe=a.contextType;_=er,typeof pe=="object"&&pe!==null&&(_=Un(pe));var ve=a.getDerivedStateFromProps;pe=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,pe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(R||ne!==_)&&km(n,f,r,_),Ga=!1;var oe=n.memoizedState;f.state=oe,_o(n,r,f,u),go(),ne=n.memoizedState,R||oe!==ne||Ga?(typeof ve=="function"&&(uf(n,a,ve,r),ne=n.memoizedState),(F=Ga||Vm(n,a,F,r,oe,ne,_))?(pe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ne),f.props=r,f.state=ne,f.context=_,r=F):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Hu(t,n),_=n.memoizedProps,pe=ws(a,_),f.props=pe,ve=n.pendingProps,oe=f.context,ne=a.contextType,F=er,typeof ne=="object"&&ne!==null&&(F=Un(ne)),R=a.getDerivedStateFromProps,(ne=typeof R=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==ve||oe!==F)&&km(n,f,r,F),Ga=!1,oe=n.memoizedState,f.state=oe,_o(n,r,f,u),go();var le=n.memoizedState;_!==ve||oe!==le||Ga||t!==null&&t.dependencies!==null&&vl(t.dependencies)?(typeof R=="function"&&(uf(n,a,R,r),le=n.memoizedState),(pe=Ga||Vm(n,a,pe,r,oe,le,F)||t!==null&&t.dependencies!==null&&vl(t.dependencies))?(ne||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,le,F),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,le,F)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=le),f.props=r,f.state=le,f.context=F,r=pe):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,zl(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=Rs(n,t.child,null,u),n.child=Rs(n,null,a,u)):Nn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ha(t,n,u),t}function ag(t,n,a,r){return Ms(),n.flags|=256,Nn(t,n,a,r),n.child}var mf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function gf(t){return{baseLanes:t,cachePool:Yp()}}function _f(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=di),t}function sg(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(Dt){if(u?Xa(n):Wa(),(t=nn)?(t=d0(t,yi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:za!==null?{id:Xi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=Bp(t),a.return=n,n.child=a,Dn=n,nn=null)):t=null,t===null)throw Fa(n);return $f(t)?n.lanes=32:n.lanes=536870912,null}var R=r.children;return r=r.fallback,u?(Wa(),u=n.mode,R=Bl({mode:"hidden",children:R},u),r=Ss(r,u,a,null),R.return=n,r.return=n,R.sibling=r,n.child=R,r=n.child,r.memoizedState=gf(a),r.childLanes=_f(t,_,a),n.memoizedState=mf,yo(null,r)):(Xa(n),vf(n,R))}var F=t.memoizedState;if(F!==null&&(R=F.dehydrated,R!==null)){if(f)n.flags&256?(Xa(n),n.flags&=-257,n=xf(t,n,a)):n.memoizedState!==null?(Wa(),n.child=t.child,n.flags|=128,n=null):(Wa(),R=r.fallback,u=n.mode,r=Bl({mode:"visible",children:r.children},u),R=Ss(R,u,a,null),R.flags|=2,r.return=n,R.return=n,r.sibling=R,n.child=r,Rs(n,t.child,null,a),r=n.child,r.memoizedState=gf(a),r.childLanes=_f(t,_,a),n.memoizedState=mf,n=yo(null,r));else if(Xa(n),$f(R)){if(_=R.nextSibling&&R.nextSibling.dataset,_)var ne=_.dgst;_=ne,r=Error(s(419)),r.stack="",r.digest=_,co({value:r,source:null,stack:null}),n=xf(t,n,a)}else if(Sn||ar(t,n,a,!1),_=(a&t.childLanes)!==0,Sn||_){if(_=$t,_!==null&&(r=In(_,a),r!==0&&r!==F.retryLane))throw F.retryLane=r,xs(t,r),ei(_,t,r),df;jf(R)||Yl(),n=xf(t,n,a)}else jf(R)?(n.flags|=192,n.child=t.child,n=null):(t=F.treeContext,nn=bi(R.nextSibling),Dn=n,Dt=!0,Ba=null,yi=!1,t!==null&&Gp(n,t),n=vf(n,r.children),n.flags|=4096);return n}return u?(Wa(),R=r.fallback,u=n.mode,F=t.child,ne=F.sibling,r=ra(F,{mode:"hidden",children:r.children}),r.subtreeFlags=F.subtreeFlags&65011712,ne!==null?R=ra(ne,R):(R=Ss(R,u,a,null),R.flags|=2),R.return=n,r.return=n,r.sibling=R,n.child=r,yo(null,r),r=n.child,R=t.child.memoizedState,R===null?R=gf(a):(u=R.cachePool,u!==null?(F=vn._currentValue,u=u.parent!==F?{parent:F,pool:F}:u):u=Yp(),R={baseLanes:R.baseLanes|a,cachePool:u}),r.memoizedState=R,r.childLanes=_f(t,_,a),n.memoizedState=mf,yo(t.child,r)):(Xa(n),a=t.child,t=a.sibling,a=ra(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function vf(t,n){return n=Bl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Bl(t,n){return t=ci(22,t,null,n),t.lanes=0,t}function xf(t,n,a){return Rs(n,t.child,null,a),t=vf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function rg(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Lu(t.return,n,a)}function Sf(t,n,a,r,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function og(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var _=dn.current,R=(_&2)!==0;if(R?(_=_&1|2,n.flags|=128):_&=1,xe(dn,_),Nn(t,n,r,a),r=Dt?lo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rg(t,a,n);else if(t.tag===19)rg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Al(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Sf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Al(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Sf(n,!0,a,null,f,r);break;case"together":Sf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function ha(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Za|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(ar(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ra(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ra(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Mf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&vl(t)))}function Vx(t,n,a){switch(n.tag){case 3:ye(n,n.stateNode.containerInfo),Ha(n,vn,t.memoizedState.cache),Ms();break;case 27:case 5:st(n);break;case 4:ye(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Wu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?sg(t,n,a):(Xa(n),t=ha(t,n,a),t!==null?t.sibling:null);Xa(n);break;case 19:var u=(t.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(ar(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return og(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(dn,dn.current),r)break;return null;case 22:return n.lanes=0,$m(t,n,a,n.pendingProps);case 24:Ha(n,vn,t.memoizedState.cache)}return ha(t,n,a)}function lg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Sn=!0;else{if(!Mf(t,a)&&(n.flags&128)===0)return Sn=!1,Vx(t,n,a);Sn=(t.flags&131072)!==0}else Sn=!1,Dt&&(n.flags&1048576)!==0&&Hp(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(t=Ts(n.elementType),n.type=t,typeof t=="function")Tu(t)?(r=ws(t,r),n.tag=1,n=ig(null,n,t,r,a)):(n.tag=0,n=pf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===w){n.tag=11,n=Qm(null,n,t,r,a);break e}else if(u===P){n.tag=14,n=Jm(null,n,t,r,a);break e}}throw n=ge(t)||t,Error(s(306,n,""))}}return n;case 0:return pf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=ws(r,n.pendingProps),ig(t,n,r,u,a);case 3:e:{if(ye(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Hu(t,n),_o(n,r,null,a);var _=n.memoizedState;if(r=_.cache,Ha(n,vn,r),r!==f.cache&&Ou(n,[vn],a,!0),go(),r=_.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=ag(t,n,r,a);break e}else if(r!==u){u=xi(Error(s(424)),n),co(u),n=ag(t,n,r,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(nn=bi(t.firstChild),Dn=n,Dt=!0,Ba=null,yi=!0,a=$p(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ms(),r===u){n=ha(t,n,a);break e}Nn(t,n,r,a)}n=n.child}return n;case 26:return zl(t,n),t===null?(a=x0(n.type,null,n.pendingProps,null))?n.memoizedState=a:Dt||(a=n.type,t=n.pendingProps,r=ec(se.current).createElement(a),r[ln]=n,r[tn]=t,Ln(r,a,t),_n(r),n.stateNode=r):n.memoizedState=x0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return st(n),t===null&&Dt&&(r=n.stateNode=g0(n.type,n.pendingProps,se.current),Dn=n,yi=!0,u=nn,$a(n.type)?(eh=u,nn=bi(r.firstChild)):nn=u),Nn(t,n,n.pendingProps.children,a),zl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Dt&&((u=r=nn)&&(r=vS(r,n.type,n.pendingProps,yi),r!==null?(n.stateNode=r,Dn=n,nn=bi(r.firstChild),yi=!1,u=!0):u=!1),u||Fa(n)),st(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,r=f.children,Kf(u,f)?r=null:_!==null&&Kf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Yu(t,n,Lx,null,null,a),zo._currentValue=u),zl(t,n),Nn(t,n,r,a),n.child;case 6:return t===null&&Dt&&((t=a=nn)&&(a=xS(a,n.pendingProps,yi),a!==null?(n.stateNode=a,Dn=n,nn=null,t=!0):t=!1),t||Fa(n)),null;case 13:return sg(t,n,a);case 4:return ye(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Rs(n,null,r,a):Nn(t,n,r,a),n.child;case 11:return Qm(t,n,n.type,n.pendingProps,a);case 7:return Nn(t,n,n.pendingProps,a),n.child;case 8:return Nn(t,n,n.pendingProps.children,a),n.child;case 12:return Nn(t,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ha(n,n.type,r.value),Nn(t,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,Es(n),u=Un(u),r=r(u),n.flags|=1,Nn(t,n,r,a),n.child;case 14:return Jm(t,n,n.type,n.pendingProps,a);case 15:return jm(t,n,n.type,n.pendingProps,a);case 19:return og(t,n,a);case 31:return Gx(t,n,a);case 22:return $m(t,n,a,n.pendingProps);case 24:return Es(n),r=Un(vn),t===null?(u=zu(),u===null&&(u=$t,f=Pu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Fu(n),Ha(n,vn,u)):((t.lanes&a)!==0&&(Hu(t,n),_o(n,null,null,a),go()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,vn,r)):(r=f.cache,Ha(n,vn,r),r!==u.cache&&Ou(n,[vn],a,!0))),Nn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function da(t){t.flags|=4}function yf(t,n,a,r,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Pg())t.flags|=8192;else throw As=yl,Bu}else t.flags&=-16777217}function cg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!b0(n))if(Pg())t.flags|=8192;else throw As=yl,Bu}function Fl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Se():536870912,t.lanes|=n,gr|=n)}function Eo(t,n){if(!Dt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function an(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function kx(t,n,a){var r=n.pendingProps;switch(wu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(n),null;case 1:return an(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ca(vn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ir(n)?da(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Uu())),an(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(da(n),f!==null?(an(n),cg(n,f)):(an(n),yf(n,u,null,r,a))):f?f!==t.memoizedState?(da(n),an(n),cg(n,f)):(an(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&da(n),an(n),yf(n,u,t,r,a)),null;case 27:if(tt(n),a=se.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&da(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return an(n),null}t=we.current,ir(n)?Vp(n):(t=g0(u,r,a),n.stateNode=t,da(n))}return an(n),null;case 5:if(tt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&da(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return an(n),null}if(f=we.current,ir(n))Vp(n);else{var _=ec(se.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?_.createElement(u,{is:r.is}):_.createElement(u)}}f[ln]=n,f[tn]=r;e:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break e;for(;_.sibling===null;){if(_.return===null||_.return===n)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;e:switch(Ln(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&da(n)}}return an(n),yf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&da(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=se.current,ir(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||s0(t.nodeValue,a)),t||Fa(n,!0)}else t=ec(t).createTextNode(r),t[ln]=n,n.stateNode=t}return an(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=ir(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[ln]=n}else Ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),t=!1}else a=Uu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(fi(n),n):(fi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return an(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ir(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[ln]=n}else Ms(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;an(n),u=!1}else u=Uu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(fi(n),n):(fi(n),null)}return fi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Fl(n,n.updateQueue),an(n),null);case 4:return He(),t===null&&Xf(n.stateNode.containerInfo),an(n),null;case 10:return ca(n.type),an(n),null;case 19:if(Y(dn),r=n.memoizedState,r===null)return an(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)Eo(r,!1);else{if(un!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Al(t),f!==null){for(n.flags|=128,Eo(r,!1),t=f.updateQueue,n.updateQueue=t,Fl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)zp(a,t),a=a.sibling;return xe(dn,dn.current&1|2),Dt&&oa(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&ft()>Xl&&(n.flags|=128,u=!0,Eo(r,!1),n.lanes=4194304)}else{if(!u)if(t=Al(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Fl(n,t),Eo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Dt)return an(n),null}else 2*ft()-r.renderingStartTime>Xl&&a!==536870912&&(n.flags|=128,u=!0,Eo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(t=r.tail,r.rendering=t,r.tail=t.sibling,r.renderingStartTime=ft(),t.sibling=null,a=dn.current,xe(dn,u?a&1|2:a&1),Dt&&oa(n,r.treeForkCount),t):(an(n),null);case 22:case 23:return fi(n),Xu(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(an(n),n.subtreeFlags&6&&(n.flags|=8192)):an(n),a=n.updateQueue,a!==null&&Fl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Y(bs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ca(vn),an(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Xx(t,n){switch(wu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ca(vn),He(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return tt(n),null;case 31:if(n.memoizedState!==null){if(fi(n),n.alternate===null)throw Error(s(340));Ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(fi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Ms()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y(dn),null;case 4:return He(),null;case 10:return ca(n.type),null;case 22:case 23:return fi(n),Xu(),t!==null&&Y(bs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ca(vn),null;case 25:return null;default:return null}}function ug(t,n){switch(wu(n),n.tag){case 3:ca(vn),He();break;case 26:case 27:case 5:tt(n);break;case 4:He();break;case 31:n.memoizedState!==null&&fi(n);break;case 13:fi(n);break;case 19:Y(dn);break;case 10:ca(n.type);break;case 22:case 23:fi(n),Xu(),t!==null&&Y(bs);break;case 24:ca(vn)}}function bo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,_=a.inst;r=f(),_.destroy=r}a=a.next}while(a!==u)}}catch(R){qt(n,n.return,R)}}function qa(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var _=r.inst,R=_.destroy;if(R!==void 0){_.destroy=void 0,u=n;var F=a,ne=R;try{ne()}catch(pe){qt(u,F,pe)}}}r=r.next}while(r!==f)}}catch(pe){qt(n,n.return,pe)}}function fg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{tm(n,a)}catch(r){qt(t,t.return,r)}}}function hg(t,n,a){a.props=ws(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){qt(t,n,r)}}function To(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(u){qt(t,n,u)}}function qi(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){qt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){qt(t,n,u)}else a.current=null}function dg(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){qt(t,t.return,u)}}function Ef(t,n,a){try{var r=t.stateNode;hS(r,t.type,a,n),r[tn]=n}catch(u){qt(t,t.return,u)}}function pg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&$a(t.type)||t.tag===4}function bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&$a(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Tf(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=aa));else if(r!==4&&(r===27&&$a(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Tf(t,n,a),t=t.sibling;t!==null;)Tf(t,n,a),t=t.sibling}function Hl(t,n,a){var r=t.tag;if(r===5||r===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(r!==4&&(r===27&&$a(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Hl(t,n,a),t=t.sibling;t!==null;)Hl(t,n,a),t=t.sibling}function mg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Ln(n,r,a),n[ln]=t,n[tn]=a}catch(f){qt(t,t.return,f)}}var pa=!1,Mn=!1,Af=!1,gg=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function Wx(t,n){if(t=t.containerInfo,Yf=oc,t=Cp(t),vu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var _=0,R=-1,F=-1,ne=0,pe=0,ve=t,oe=null;t:for(;;){for(var le;ve!==a||u!==0&&ve.nodeType!==3||(R=_+u),ve!==f||r!==0&&ve.nodeType!==3||(F=_+r),ve.nodeType===3&&(_+=ve.nodeValue.length),(le=ve.firstChild)!==null;)oe=ve,ve=le;for(;;){if(ve===t)break t;if(oe===a&&++ne===u&&(R=_),oe===f&&++pe===r&&(F=_),(le=ve.nextSibling)!==null)break;ve=oe,oe=ve.parentNode}ve=le}a=R===-1||F===-1?null:{start:R,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Zf={focusedElem:t,selectionRange:a},oc=!1,Cn=n;Cn!==null;)if(n=Cn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Cn=t;else for(;Cn!==null;){switch(n=Cn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ke=ws(a.type,u);t=r.getSnapshotBeforeUpdate(Ke,f),r.__reactInternalSnapshotBeforeUpdate=t}catch(rt){qt(a,a.return,rt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Jf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Jf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Cn=t;break}Cn=n.return}}function _g(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ga(t,a),r&4&&bo(5,a);break;case 1:if(ga(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){qt(a,a.return,_)}else{var u=ws(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){qt(a,a.return,_)}}r&64&&fg(a),r&512&&To(a,a.return);break;case 3:if(ga(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{tm(t,n)}catch(_){qt(a,a.return,_)}}break;case 27:n===null&&r&4&&mg(a);case 26:case 5:ga(t,a),n===null&&r&4&&dg(a),r&512&&To(a,a.return);break;case 12:ga(t,a);break;case 31:ga(t,a),r&4&&Sg(t,a);break;case 13:ga(t,a),r&4&&Mg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=eS.bind(null,a),SS(t,a))));break;case 22:if(r=a.memoizedState!==null||pa,!r){n=n!==null&&n.memoizedState!==null||Mn,u=pa;var f=Mn;pa=r,(Mn=n)&&!f?_a(t,a,(a.subtreeFlags&8772)!==0):ga(t,a),pa=u,Mn=f}break;case 30:break;default:ga(t,a)}}function vg(t){var n=t.alternate;n!==null&&(t.alternate=null,vg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&La(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var on=null,Qn=!1;function ma(t,n,a){for(a=a.child;a!==null;)xg(t,n,a),a=a.sibling}function xg(t,n,a){if(fe&&typeof fe.onCommitFiberUnmount=="function")try{fe.onCommitFiberUnmount(ue,a)}catch{}switch(a.tag){case 26:Mn||qi(a,n),ma(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Mn||qi(a,n);var r=on,u=Qn;$a(a.type)&&(on=a.stateNode,Qn=!1),ma(t,n,a),Oo(a.stateNode),on=r,Qn=u;break;case 5:Mn||qi(a,n);case 6:if(r=on,u=Qn,on=null,ma(t,n,a),on=r,Qn=u,on!==null)if(Qn)try{(on.nodeType===9?on.body:on.nodeName==="HTML"?on.ownerDocument.body:on).removeChild(a.stateNode)}catch(f){qt(a,n,f)}else try{on.removeChild(a.stateNode)}catch(f){qt(a,n,f)}break;case 18:on!==null&&(Qn?(t=on,f0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),br(t)):f0(on,a.stateNode));break;case 4:r=on,u=Qn,on=a.stateNode.containerInfo,Qn=!0,ma(t,n,a),on=r,Qn=u;break;case 0:case 11:case 14:case 15:qa(2,a,n),Mn||qa(4,a,n),ma(t,n,a);break;case 1:Mn||(qi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&hg(a,n,r)),ma(t,n,a);break;case 21:ma(t,n,a);break;case 22:Mn=(r=Mn)||a.memoizedState!==null,ma(t,n,a),Mn=r;break;default:ma(t,n,a)}}function Sg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{br(t)}catch(a){qt(n,n.return,a)}}}function Mg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{br(t)}catch(a){qt(n,n.return,a)}}function qx(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new gg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new gg),n;default:throw Error(s(435,t.tag))}}function Gl(t,n){var a=qx(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=tS.bind(null,t,r);r.then(u,u)}})}function Jn(t,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=t,_=n,R=_;e:for(;R!==null;){switch(R.tag){case 27:if($a(R.type)){on=R.stateNode,Qn=!1;break e}break;case 5:on=R.stateNode,Qn=!1;break e;case 3:case 4:on=R.stateNode.containerInfo,Qn=!0;break e}R=R.return}if(on===null)throw Error(s(160));xg(f,_,u),on=null,Qn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)yg(n,t),n=n.sibling}var Li=null;function yg(t,n){var a=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Jn(n,t),jn(t),r&4&&(qa(3,t,t.return),bo(3,t),qa(5,t,t.return));break;case 1:Jn(n,t),jn(t),r&512&&(Mn||a===null||qi(a,a.return)),r&64&&pa&&(t=t.updateQueue,t!==null&&(r=t.callbacks,r!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Li;if(Jn(n,t),jn(t),r&512&&(Mn||a===null||qi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=t.memoizedState,a===null)if(r===null)if(t.stateNode===null){e:{r=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Na]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Ln(f,r,a),f[ln]=t,_n(f),r=f;break e;case"link":var _=y0("link","href",u).get(r+(a.href||""));if(_){for(var R=0;R<_.length;R++)if(f=_[R],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(R,1);break t}}f=u.createElement(r),Ln(f,r,a),u.head.appendChild(f);break;case"meta":if(_=y0("meta","content",u).get(r+(a.content||""))){for(R=0;R<_.length;R++)if(f=_[R],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(R,1);break t}}f=u.createElement(r),Ln(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[ln]=t,_n(f),r=f}t.stateNode=r}else E0(u,t.type,t.stateNode);else t.stateNode=M0(u,r,t.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?E0(u,t.type,t.stateNode):M0(u,r,t.memoizedProps)):r===null&&t.stateNode!==null&&Ef(t,t.memoizedProps,a.memoizedProps)}break;case 27:Jn(n,t),jn(t),r&512&&(Mn||a===null||qi(a,a.return)),a!==null&&r&4&&Ef(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Jn(n,t),jn(t),r&512&&(Mn||a===null||qi(a,a.return)),t.flags&32){u=t.stateNode;try{oi(u,"")}catch(Ke){qt(t,t.return,Ke)}}r&4&&t.stateNode!=null&&(u=t.memoizedProps,Ef(t,u,a!==null?a.memoizedProps:u)),r&1024&&(Af=!0);break;case 6:if(Jn(n,t),jn(t),r&4){if(t.stateNode===null)throw Error(s(162));r=t.memoizedProps,a=t.stateNode;try{a.nodeValue=r}catch(Ke){qt(t,t.return,Ke)}}break;case 3:if(ic=null,u=Li,Li=tc(n.containerInfo),Jn(n,t),Li=u,jn(t),r&4&&a!==null&&a.memoizedState.isDehydrated)try{br(n.containerInfo)}catch(Ke){qt(t,t.return,Ke)}Af&&(Af=!1,Eg(t));break;case 4:r=Li,Li=tc(t.stateNode.containerInfo),Jn(n,t),jn(t),Li=r;break;case 12:Jn(n,t),jn(t);break;case 31:Jn(n,t),jn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Gl(t,r)));break;case 13:Jn(n,t),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(kl=ft()),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Gl(t,r)));break;case 22:u=t.memoizedState!==null;var F=a!==null&&a.memoizedState!==null,ne=pa,pe=Mn;if(pa=ne||u,Mn=pe||F,Jn(n,t),Mn=pe,pa=ne,jn(t),r&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||F||pa||Mn||Ds(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){F=a=n;try{if(f=F.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{R=F.stateNode;var ve=F.memoizedProps.style,oe=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;R.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(Ke){qt(F,F.return,Ke)}}}else if(n.tag===6){if(a===null){F=n;try{F.stateNode.nodeValue=u?"":F.memoizedProps}catch(Ke){qt(F,F.return,Ke)}}}else if(n.tag===18){if(a===null){F=n;try{var le=F.stateNode;u?h0(le,!0):h0(F.stateNode,!1)}catch(Ke){qt(F,F.return,Ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=t.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Gl(t,a))));break;case 19:Jn(n,t),jn(t),r&4&&(r=t.updateQueue,r!==null&&(t.updateQueue=null,Gl(t,r)));break;case 30:break;case 21:break;default:Jn(n,t),jn(t)}}function jn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(pg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=bf(t);Hl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(oi(_,""),a.flags&=-33);var R=bf(t);Hl(t,R,_);break;case 3:case 4:var F=a.stateNode.containerInfo,ne=bf(t);Tf(t,ne,F);break;default:throw Error(s(161))}}catch(pe){qt(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Eg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Eg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ga(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_g(t,n.alternate,n),n=n.sibling}function Ds(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:qa(4,n,n.return),Ds(n);break;case 1:qi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&hg(n,n.return,a),Ds(n);break;case 27:Oo(n.stateNode);case 26:case 5:qi(n,n.return),Ds(n);break;case 22:n.memoizedState===null&&Ds(n);break;case 30:Ds(n);break;default:Ds(n)}t=t.sibling}}function _a(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:_a(u,f,a),bo(4,f);break;case 1:if(_a(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){qt(r,r.return,ne)}if(r=f,u=r.updateQueue,u!==null){var R=r.stateNode;try{var F=u.shared.hiddenCallbacks;if(F!==null)for(u.shared.hiddenCallbacks=null,u=0;u<F.length;u++)em(F[u],R)}catch(ne){qt(r,r.return,ne)}}a&&_&64&&fg(f),To(f,f.return);break;case 27:mg(f);case 26:case 5:_a(u,f,a),a&&r===null&&_&4&&dg(f),To(f,f.return);break;case 12:_a(u,f,a);break;case 31:_a(u,f,a),a&&_&4&&Sg(u,f);break;case 13:_a(u,f,a),a&&_&4&&Mg(u,f);break;case 22:f.memoizedState===null&&_a(u,f,a),To(f,f.return);break;case 30:break;default:_a(u,f,a)}n=n.sibling}}function Rf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&uo(a))}function Cf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t))}function Oi(t,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)bg(t,n,a,r),n=n.sibling}function bg(t,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Oi(t,n,a,r),u&2048&&bo(9,n);break;case 1:Oi(t,n,a,r);break;case 3:Oi(t,n,a,r),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t)));break;case 12:if(u&2048){Oi(t,n,a,r),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,R=f.onPostCommit;typeof R=="function"&&R(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(F){qt(n,n.return,F)}}else Oi(t,n,a,r);break;case 31:Oi(t,n,a,r);break;case 13:Oi(t,n,a,r);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?Oi(t,n,a,r):Ao(t,n):f._visibility&2?Oi(t,n,a,r):(f._visibility|=2,dr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Rf(_,n);break;case 24:Oi(t,n,a,r),u&2048&&Cf(n.alternate,n);break;default:Oi(t,n,a,r)}}function dr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,R=a,F=r,ne=_.flags;switch(_.tag){case 0:case 11:case 15:dr(f,_,R,F,u),bo(8,_);break;case 23:break;case 22:var pe=_.stateNode;_.memoizedState!==null?pe._visibility&2?dr(f,_,R,F,u):Ao(f,_):(pe._visibility|=2,dr(f,_,R,F,u)),u&&ne&2048&&Rf(_.alternate,_);break;case 24:dr(f,_,R,F,u),u&&ne&2048&&Cf(_.alternate,_);break;default:dr(f,_,R,F,u)}n=n.sibling}}function Ao(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:Ao(a,r),u&2048&&Rf(r.alternate,r);break;case 24:Ao(a,r),u&2048&&Cf(r.alternate,r);break;default:Ao(a,r)}n=n.sibling}}var Ro=8192;function pr(t,n,a){if(t.subtreeFlags&Ro)for(t=t.child;t!==null;)Tg(t,n,a),t=t.sibling}function Tg(t,n,a){switch(t.tag){case 26:pr(t,n,a),t.flags&Ro&&t.memoizedState!==null&&NS(a,Li,t.memoizedState,t.memoizedProps);break;case 5:pr(t,n,a);break;case 3:case 4:var r=Li;Li=tc(t.stateNode.containerInfo),pr(t,n,a),Li=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Ro,Ro=16777216,pr(t,n,a),Ro=r):pr(t,n,a));break;default:pr(t,n,a)}}function Ag(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Cn=r,Cg(r,t)}Ag(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Rg(t),t=t.sibling}function Rg(t){switch(t.tag){case 0:case 11:case 15:Co(t),t.flags&2048&&qa(9,t,t.return);break;case 3:Co(t);break;case 12:Co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Vl(t)):Co(t);break;default:Co(t)}}function Vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Cn=r,Cg(r,t)}Ag(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:qa(8,n,n.return),Vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Vl(n));break;default:Vl(n)}t=t.sibling}}function Cg(t,n){for(;Cn!==null;){var a=Cn;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:uo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Cn=r;else e:for(a=t;Cn!==null;){r=Cn;var u=r.sibling,f=r.return;if(vg(r),r===a){Cn=null;break e}if(u!==null){u.return=f,Cn=u;break e}Cn=f}}}var Yx={getCacheForType:function(t){var n=Un(vn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Un(vn).controller.signal}},Zx=typeof WeakMap=="function"?WeakMap:Map,Ft=0,$t=null,Tt=null,Ct=0,Wt=0,hi=null,Ya=!1,mr=!1,wf=!1,va=0,un=0,Za=0,Us=0,Df=0,di=0,gr=0,wo=null,$n=null,Uf=!1,kl=0,wg=0,Xl=1/0,Wl=null,Ka=null,bn=0,Qa=null,_r=null,xa=0,Nf=0,Lf=null,Dg=null,Do=0,Of=null;function pi(){return(Ft&2)!==0&&Ct!==0?Ct&-Ct:O.T!==null?Hf():Wn()}function Ug(){if(di===0)if((Ct&536870912)===0||Dt){var t=ot;ot<<=1,(ot&3932160)===0&&(ot=262144),di=t}else di=536870912;return t=ui.current,t!==null&&(t.flags|=32),di}function ei(t,n,a){(t===$t&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)&&(vr(t,0),Ja(t,Ct,di,!1)),Ve(t,a),((Ft&2)===0||t!==$t)&&(t===$t&&((Ft&2)===0&&(Us|=a),un===4&&Ja(t,Ct,di,!1)),Yi(t))}function Ng(t,n,a){if((Ft&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||De(t,n),u=r?Jx(t,n):If(t,n,!0),f=r;do{if(u===0){mr&&!r&&Ja(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Kx(a)){u=If(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;e:{var R=t;u=wo;var F=R.current.memoizedState.isDehydrated;if(F&&(vr(R,_).flags|=256),_=If(R,_,!1),_!==2){if(wf&&!F){R.errorRecoveryDisabledLanes|=f,Us|=f,u=4;break e}f=$n,$n=u,f!==null&&($n===null?$n=f:$n.push.apply($n,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){vr(t,0),Ja(t,n,0,!0);break}e:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ja(r,n,di,!Ya);break e;case 2:$n=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=kl+300-ft(),10<u)){if(Ja(r,n,di,!Ya),he(r,0,!0)!==0)break e;xa=n,r.timeoutHandle=c0(Lg.bind(null,r,a,$n,Wl,Uf,n,di,Us,gr,Ya,f,"Throttled",-0,0),u);break e}Lg(r,a,$n,Wl,Uf,n,di,Us,gr,Ya,f,null,-0,0)}}break}while(!0);Yi(t)}function Lg(t,n,a,r,u,f,_,R,F,ne,pe,ve,oe,le){if(t.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},Tg(n,f,ve);var Ke=(f&62914560)===f?kl-ft():(f&4194048)===f?wg-ft():0;if(Ke=LS(ve,Ke),Ke!==null){xa=f,t.cancelPendingCommit=Ke(Gg.bind(null,t,n,f,a,r,u,_,R,F,pe,ve,null,oe,le)),Ja(t,f,_,!ne);return}}Gg(t,n,f,a,r,u,_,R,F)}function Kx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!li(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(t,n,a,r){n&=~Df,n&=~Us,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-Fe(u),_=1<<f;r[f]=-1,u&=~_}a!==0&&Pt(t,a,n)}function ql(){return(Ft&6)===0?(Uo(0),!1):!0}function Pf(){if(Tt!==null){if(Wt===0)var t=Tt.return;else t=Tt,la=ys=null,Qu(t),lr=null,ho=0,t=Tt;for(;t!==null;)ug(t.alternate,t),t=t.return;Tt=null}}function vr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,mS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),xa=0,Pf(),$t=t,Tt=a=ra(t.current,null),Ct=n,Wt=0,hi=null,Ya=!1,mr=De(t,n),wf=!1,gr=di=Df=Us=Za=un=0,$n=wo=null,Uf=!1,(n&8)!==0&&(n|=n&32);var r=t.entangledLanes;if(r!==0)for(t=t.entanglements,r&=n;0<r;){var u=31-Fe(r),f=1<<u;n|=t[u],r&=~f}return va=n,dl(),a}function Og(t,n){_t=null,O.H=Mo,n===or||n===Ml?(n=Qp(),Wt=3):n===Bu?(n=Qp(),Wt=4):Wt=n===df?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,hi=n,Tt===null&&(un=1,Pl(t,xi(n,t.current)))}function Pg(){var t=ui.current;return t===null?!0:(Ct&4194048)===Ct?Ei===null:(Ct&62914560)===Ct||(Ct&536870912)!==0?t===Ei:!1}function Ig(){var t=O.H;return O.H=Mo,t===null?Mo:t}function zg(){var t=O.A;return O.A=Yx,t}function Yl(){un=4,Ya||(Ct&4194048)!==Ct&&ui.current!==null||(mr=!0),(Za&134217727)===0&&(Us&134217727)===0||$t===null||Ja($t,Ct,di,!1)}function If(t,n,a){var r=Ft;Ft|=2;var u=Ig(),f=zg();($t!==t||Ct!==n)&&(Wl=null,vr(t,n)),n=!1;var _=un;e:do try{if(Wt!==0&&Tt!==null){var R=Tt,F=hi;switch(Wt){case 8:Pf(),_=6;break e;case 3:case 2:case 9:case 6:ui.current===null&&(n=!0);var ne=Wt;if(Wt=0,hi=null,xr(t,R,F,ne),a&&mr){_=0;break e}break;default:ne=Wt,Wt=0,hi=null,xr(t,R,F,ne)}}Qx(),_=un;break}catch(pe){Og(t,pe)}while(!0);return n&&t.shellSuspendCounter++,la=ys=null,Ft=r,O.H=u,O.A=f,Tt===null&&($t=null,Ct=0,dl()),_}function Qx(){for(;Tt!==null;)Bg(Tt)}function Jx(t,n){var a=Ft;Ft|=2;var r=Ig(),u=zg();$t!==t||Ct!==n?(Wl=null,Xl=ft()+500,vr(t,n)):mr=De(t,n);e:do try{if(Wt!==0&&Tt!==null){n=Tt;var f=hi;t:switch(Wt){case 1:Wt=0,hi=null,xr(t,n,f,1);break;case 2:case 9:if(Zp(f)){Wt=0,hi=null,Fg(n);break}n=function(){Wt!==2&&Wt!==9||$t!==t||(Wt=7),Yi(t)},f.then(n,n);break e;case 3:Wt=7;break e;case 4:Wt=5;break e;case 7:Zp(f)?(Wt=0,hi=null,Fg(n)):(Wt=0,hi=null,xr(t,n,f,7));break;case 5:var _=null;switch(Tt.tag){case 26:_=Tt.memoizedState;case 5:case 27:var R=Tt;if(_?b0(_):R.stateNode.complete){Wt=0,hi=null;var F=R.sibling;if(F!==null)Tt=F;else{var ne=R.return;ne!==null?(Tt=ne,Zl(ne)):Tt=null}break t}}Wt=0,hi=null,xr(t,n,f,5);break;case 6:Wt=0,hi=null,xr(t,n,f,6);break;case 8:Pf(),un=6;break e;default:throw Error(s(462))}}jx();break}catch(pe){Og(t,pe)}while(!0);return la=ys=null,O.H=r,O.A=u,Ft=a,Tt!==null?0:($t=null,Ct=0,dl(),un)}function jx(){for(;Tt!==null&&!ut();)Bg(Tt)}function Bg(t){var n=lg(t.alternate,t,va);t.memoizedProps=t.pendingProps,n===null?Zl(t):Tt=n}function Fg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ng(a,n,n.pendingProps,n.type,void 0,Ct);break;case 11:n=ng(a,n,n.pendingProps,n.type.render,n.ref,Ct);break;case 5:Qu(n);default:ug(a,n),n=Tt=zp(n,va),n=lg(a,n,va)}t.memoizedProps=t.pendingProps,n===null?Zl(t):Tt=n}function xr(t,n,a,r){la=ys=null,Qu(n),lr=null,ho=0;var u=n.return;try{if(Hx(t,u,n,a,Ct)){un=1,Pl(t,xi(a,t.current)),Tt=null;return}}catch(f){if(u!==null)throw Tt=u,f;un=1,Pl(t,xi(a,t.current)),Tt=null;return}n.flags&32768?(Dt||r===1?t=!0:mr||(Ct&536870912)!==0?t=!1:(Ya=t=!0,(r===2||r===9||r===3||r===6)&&(r=ui.current,r!==null&&r.tag===13&&(r.flags|=16384))),Hg(n,t)):Zl(n)}function Zl(t){var n=t;do{if((n.flags&32768)!==0){Hg(n,Ya);return}t=n.return;var a=kx(n.alternate,n,va);if(a!==null){Tt=a;return}if(n=n.sibling,n!==null){Tt=n;return}Tt=n=t}while(n!==null);un===0&&(un=5)}function Hg(t,n){do{var a=Xx(t.alternate,t);if(a!==null){a.flags&=32767,Tt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Tt=t;return}Tt=t=a}while(t!==null);un=6,Tt=null}function Gg(t,n,a,r,u,f,_,R,F){t.cancelPendingCommit=null;do Kl();while(bn!==0);if((Ft&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Eu,en(t,a,f,_,R,F),t===$t&&(Tt=$t=null,Ct=0),_r=n,Qa=t,xa=a,Nf=f,Lf=u,Dg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,nS(Z,function(){return qg(),null})):(t.callbackNode=null,t.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,u=B.p,B.p=2,_=Ft,Ft|=4;try{Wx(t,n,a)}finally{Ft=_,B.p=u,O.T=r}}bn=1,Vg(),kg(),Xg()}}function Vg(){if(bn===1){bn=0;var t=Qa,n=_r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=B.p;B.p=2;var u=Ft;Ft|=4;try{yg(n,t);var f=Zf,_=Cp(t.containerInfo),R=f.focusedElem,F=f.selectionRange;if(_!==R&&R&&R.ownerDocument&&Rp(R.ownerDocument.documentElement,R)){if(F!==null&&vu(R)){var ne=F.start,pe=F.end;if(pe===void 0&&(pe=ne),"selectionStart"in R)R.selectionStart=ne,R.selectionEnd=Math.min(pe,R.value.length);else{var ve=R.ownerDocument||document,oe=ve&&ve.defaultView||window;if(oe.getSelection){var le=oe.getSelection(),Ke=R.textContent.length,rt=Math.min(F.start,Ke),Qt=F.end===void 0?rt:Math.min(F.end,Ke);!le.extend&&rt>Qt&&(_=Qt,Qt=rt,rt=_);var K=Ap(R,rt),V=Ap(R,Qt);if(K&&V&&(le.rangeCount!==1||le.anchorNode!==K.node||le.anchorOffset!==K.offset||le.focusNode!==V.node||le.focusOffset!==V.offset)){var te=ve.createRange();te.setStart(K.node,K.offset),le.removeAllRanges(),rt>Qt?(le.addRange(te),le.extend(V.node,V.offset)):(te.setEnd(V.node,V.offset),le.addRange(te))}}}}for(ve=[],le=R;le=le.parentNode;)le.nodeType===1&&ve.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<ve.length;R++){var _e=ve[R];_e.element.scrollLeft=_e.left,_e.element.scrollTop=_e.top}}oc=!!Yf,Zf=Yf=null}finally{Ft=u,B.p=r,O.T=a}}t.current=n,bn=2}}function kg(){if(bn===2){bn=0;var t=Qa,n=_r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=B.p;B.p=2;var u=Ft;Ft|=4;try{_g(t,n.alternate,n)}finally{Ft=u,B.p=r,O.T=a}}bn=3}}function Xg(){if(bn===4||bn===3){bn=0,X();var t=Qa,n=_r,a=xa,r=Dg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?bn=5:(bn=0,_r=Qa=null,Wg(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ka=null),Gt(a),n=n.stateNode,fe&&typeof fe.onCommitFiberRoot=="function")try{fe.onCommitFiberRoot(ue,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,u=B.p,B.p=2,O.T=null;try{for(var f=t.onRecoverableError,_=0;_<r.length;_++){var R=r[_];f(R.value,{componentStack:R.stack})}}finally{O.T=n,B.p=u}}(xa&3)!==0&&Kl(),Yi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===Of?Do++:(Do=0,Of=t):Do=0,Uo(0)}}function Wg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,uo(n)))}function Kl(){return Vg(),kg(),Xg(),qg()}function qg(){if(bn!==5)return!1;var t=Qa,n=Nf;Nf=0;var a=Gt(xa),r=O.T,u=B.p;try{B.p=32>a?32:a,O.T=null,a=Lf,Lf=null;var f=Qa,_=xa;if(bn=0,_r=Qa=null,xa=0,(Ft&6)!==0)throw Error(s(331));var R=Ft;if(Ft|=4,Rg(f.current),bg(f,f.current,_,a),Ft=R,Uo(0,!1),fe&&typeof fe.onPostCommitFiberRoot=="function")try{fe.onPostCommitFiberRoot(ue,f)}catch{}return!0}finally{B.p=u,O.T=r,Wg(t,n)}}function Yg(t,n,a){n=xi(a,n),n=hf(t.stateNode,n,2),t=ka(t,n,2),t!==null&&(Ve(t,2),Yi(t))}function qt(t,n,a){if(t.tag===3)Yg(t,t,a);else for(;n!==null;){if(n.tag===3){Yg(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ka===null||!Ka.has(r))){t=xi(a,t),a=Zm(2),r=ka(n,a,2),r!==null&&(Km(a,r,n,t),Ve(r,2),Yi(r));break}}n=n.return}}function zf(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new Zx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(wf=!0,u.add(a),t=$x.bind(null,t,n,a),n.then(t,t))}function $x(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,$t===t&&(Ct&a)===a&&(un===4||un===3&&(Ct&62914560)===Ct&&300>ft()-kl?(Ft&2)===0&&vr(t,0):Df|=a,gr===Ct&&(gr=0)),Yi(t)}function Zg(t,n){n===0&&(n=Se()),t=xs(t,n),t!==null&&(Ve(t,n),Yi(t))}function eS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Zg(t,a)}function tS(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Zg(t,a)}function nS(t,n){return Lt(t,n)}var Ql=null,Sr=null,Bf=!1,Jl=!1,Ff=!1,ja=0;function Yi(t){t!==Sr&&t.next===null&&(Sr===null?Ql=Sr=t:Sr=Sr.next=t),Jl=!0,Bf||(Bf=!0,aS())}function Uo(t,n){if(!Ff&&Jl){Ff=!0;do for(var a=!1,r=Ql;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var _=r.suspendedLanes,R=r.pingedLanes;f=(1<<31-Fe(42|t)+1)-1,f&=u&~(_&~R),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,jg(r,f))}else f=Ct,f=he(r,r===$t?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||De(r,f)||(a=!0,jg(r,f));r=r.next}while(a);Ff=!1}}function iS(){Kg()}function Kg(){Jl=Bf=!1;var t=0;ja!==0&&pS()&&(t=ja);for(var n=ft(),a=null,r=Ql;r!==null;){var u=r.next,f=Qg(r,n);f===0?(r.next=null,a===null?Ql=u:a.next=u,u===null&&(Sr=a)):(a=r,(t!==0||(f&3)!==0)&&(Jl=!0)),r=u}bn!==0&&bn!==5||Uo(t),ja!==0&&(ja=0)}function Qg(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-Fe(f),R=1<<_,F=u[_];F===-1?((R&a)===0||(R&r)!==0)&&(u[_]=Ie(R,n)):F<=n&&(t.expiredLanes|=R),f&=~R}if(n=$t,a=Ct,a=he(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Wt===2||Wt===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&xt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||De(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&xt(r),Gt(a)){case 2:case 8:a=M;break;case 32:a=Z;break;case 268435456:a=ce;break;default:a=Z}return r=Jg.bind(null,t),a=Lt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&xt(r),t.callbackPriority=2,t.callbackNode=null,2}function Jg(t,n){if(bn!==0&&bn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Kl()&&t.callbackNode!==a)return null;var r=Ct;return r=he(t,t===$t?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Ng(t,r,n),Qg(t,ft()),t.callbackNode!=null&&t.callbackNode===a?Jg.bind(null,t):null)}function jg(t,n){if(Kl())return null;Ng(t,n,!0)}function aS(){gS(function(){(Ft&6)!==0?Lt(D,iS):Kg()})}function Hf(){if(ja===0){var t=sr;t===0&&(t=$e,$e<<=1,($e&261888)===0&&($e=256)),ja=t}return ja}function $g(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ms(""+t)}function e0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function sS(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=$g((u[tn]||null).action),_=r.submitter;_&&(n=(n=_[tn]||null)?$g(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var R=new cl("action","action",null,r,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ja!==0){var F=_?e0(u,_):new FormData(u);rf(a,{pending:!0,data:F,method:u.method,action:f},null,F)}}else typeof f=="function"&&(R.preventDefault(),F=_?e0(u,_):new FormData(u),rf(a,{pending:!0,data:F,method:u.method,action:f},f,F))},currentTarget:u}]})}}for(var Gf=0;Gf<yu.length;Gf++){var Vf=yu[Gf],rS=Vf.toLowerCase(),oS=Vf[0].toUpperCase()+Vf.slice(1);Ni(rS,"on"+oS)}Ni(Up,"onAnimationEnd"),Ni(Np,"onAnimationIteration"),Ni(Lp,"onAnimationStart"),Ni("dblclick","onDoubleClick"),Ni("focusin","onFocus"),Ni("focusout","onBlur"),Ni(Ex,"onTransitionRun"),Ni(bx,"onTransitionStart"),Ni(Tx,"onTransitionCancel"),Ni(Op,"onTransitionEnd"),re("onMouseEnter",["mouseout","mouseover"]),re("onMouseLeave",["mouseout","mouseover"]),re("onPointerEnter",["pointerout","pointerover"]),re("onPointerLeave",["pointerout","pointerover"]),W("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),W("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),W("onBeforeInput",["compositionend","keypress","textInput","paste"]),W("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),W("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function t0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var _=r.length-1;0<=_;_--){var R=r[_],F=R.instance,ne=R.currentTarget;if(R=R.listener,F!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ne;try{f(u)}catch(pe){hl(pe)}u.currentTarget=null,f=F}else for(_=0;_<r.length;_++){if(R=r[_],F=R.instance,ne=R.currentTarget,R=R.listener,F!==f&&u.isPropagationStopped())break e;f=R,u.currentTarget=ne;try{f(u)}catch(pe){hl(pe)}u.currentTarget=null,f=F}}}}function At(t,n){var a=n[Gi];a===void 0&&(a=n[Gi]=new Set);var r=t+"__bubble";a.has(r)||(n0(n,t,2,!1),a.add(r))}function kf(t,n,a){var r=0;n&&(r|=4),n0(a,t,r,n)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Xf(t){if(!t[jl]){t[jl]=!0,sl.forEach(function(a){a!=="selectionchange"&&(lS.has(a)||kf(a,!1,t),kf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[jl]||(n[jl]=!0,kf("selectionchange",!1,n))}}function n0(t,n,a,r){switch(U0(n)){case 2:var u=IS;break;case 8:u=zS;break;default:u=sh}a=u.bind(null,n,a,t),u=void 0,!cu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Wf(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var R=r.stateNode.containerInfo;if(R===u)break;if(_===4)for(_=r.return;_!==null;){var F=_.tag;if((F===3||F===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;R!==null;){if(_=na(R),_===null)return;if(F=_.tag,F===5||F===6||F===26||F===27){r=f=_;continue e}R=R.parentNode}}r=r.return}op(function(){var ne=f,pe=ou(a),ve=[];e:{var oe=Pp.get(t);if(oe!==void 0){var le=cl,Ke=t;switch(t){case"keypress":if(ol(a)===0)break e;case"keydown":case"keyup":le=tx;break;case"focusin":Ke="focus",le=du;break;case"focusout":Ke="blur",le=du;break;case"beforeblur":case"afterblur":le=du;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=ax;break;case Up:case Np:case Lp:le=qv;break;case Op:le=rx;break;case"scroll":case"scrollend":le=Gv;break;case"wheel":le=lx;break;case"copy":case"cut":case"paste":le=Zv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=hp;break;case"toggle":case"beforetoggle":le=ux}var rt=(n&4)!==0,Qt=!rt&&(t==="scroll"||t==="scrollend"),K=rt?oe!==null?oe+"Capture":null:oe;rt=[];for(var V=ne,te;V!==null;){var _e=V;if(te=_e.stateNode,_e=_e.tag,_e!==5&&_e!==26&&_e!==27||te===null||K===null||(_e=$r(V,K),_e!=null&&rt.push(Lo(V,_e,te))),Qt)break;V=V.return}0<rt.length&&(oe=new le(oe,Ke,null,a,pe),ve.push({event:oe,listeners:rt}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",oe&&a!==ru&&(Ke=a.relatedTarget||a.fromElement)&&(na(Ke)||Ke[hn]))break e;if((le||oe)&&(oe=pe.window===pe?pe:(oe=pe.ownerDocument)?oe.defaultView||oe.parentWindow:window,le?(Ke=a.relatedTarget||a.toElement,le=ne,Ke=Ke?na(Ke):null,Ke!==null&&(Qt=c(Ke),rt=Ke.tag,Ke!==Qt||rt!==5&&rt!==27&&rt!==6)&&(Ke=null)):(le=null,Ke=ne),le!==Ke)){if(rt=up,_e="onMouseLeave",K="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(rt=hp,_e="onPointerLeave",K="onPointerEnter",V="pointer"),Qt=le==null?oe:ps(le),te=Ke==null?oe:ps(Ke),oe=new rt(_e,V+"leave",le,a,pe),oe.target=Qt,oe.relatedTarget=te,_e=null,na(pe)===ne&&(rt=new rt(K,V+"enter",Ke,a,pe),rt.target=te,rt.relatedTarget=Qt,_e=rt),Qt=_e,le&&Ke)t:{for(rt=cS,K=le,V=Ke,te=0,_e=K;_e;_e=rt(_e))te++;_e=0;for(var at=V;at;at=rt(at))_e++;for(;0<te-_e;)K=rt(K),te--;for(;0<_e-te;)V=rt(V),_e--;for(;te--;){if(K===V||V!==null&&K===V.alternate){rt=K;break t}K=rt(K),V=rt(V)}rt=null}else rt=null;le!==null&&i0(ve,oe,le,rt,!1),Ke!==null&&Qt!==null&&i0(ve,Qt,Ke,rt,!0)}}e:{if(oe=ne?ps(ne):window,le=oe.nodeName&&oe.nodeName.toLowerCase(),le==="select"||le==="input"&&oe.type==="file")var zt=Sp;else if(vp(oe))if(Mp)zt=Sx;else{zt=vx;var Qe=_x}else le=oe.nodeName,!le||le.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ne&&Ht(ne.elementType)&&(zt=Sp):zt=xx;if(zt&&(zt=zt(t,ne))){xp(ve,zt,a,pe);break e}Qe&&Qe(t,oe,ne),t==="focusout"&&ne&&oe.type==="number"&&ne.memoizedProps.value!=null&&bt(oe,"number",oe.value)}switch(Qe=ne?ps(ne):window,t){case"focusin":(vp(Qe)||Qe.contentEditable==="true")&&(Js=Qe,xu=ne,oo=null);break;case"focusout":oo=xu=Js=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,wp(ve,a,pe);break;case"selectionchange":if(yx)break;case"keydown":case"keyup":wp(ve,a,pe)}var vt;if(mu)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else Qs?gp(t,a)&&(wt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(wt="onCompositionStart");wt&&(dp&&a.locale!=="ko"&&(Qs||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&Qs&&(vt=lp()):(Ia=pe,uu="value"in Ia?Ia.value:Ia.textContent,Qs=!0)),Qe=$l(ne,wt),0<Qe.length&&(wt=new fp(wt,t,null,a,pe),ve.push({event:wt,listeners:Qe}),vt?wt.data=vt:(vt=_p(a),vt!==null&&(wt.data=vt)))),(vt=hx?dx(t,a):px(t,a))&&(wt=$l(ne,"onBeforeInput"),0<wt.length&&(Qe=new fp("onBeforeInput","beforeinput",null,a,pe),ve.push({event:Qe,listeners:wt}),Qe.data=vt)),sS(ve,t,ne,a,pe)}t0(ve,n)})}function Lo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function $l(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=$r(t,a),u!=null&&r.unshift(Lo(t,u,f)),u=$r(t,n),u!=null&&r.push(Lo(t,u,f))),t.tag===3)return r;t=t.return}return[]}function cS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function i0(t,n,a,r,u){for(var f=n._reactName,_=[];a!==null&&a!==r;){var R=a,F=R.alternate,ne=R.stateNode;if(R=R.tag,F!==null&&F===r)break;R!==5&&R!==26&&R!==27||ne===null||(F=ne,u?(ne=$r(a,f),ne!=null&&_.unshift(Lo(a,ne,F))):u||(ne=$r(a,f),ne!=null&&_.push(Lo(a,ne,F)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var uS=/\r\n?/g,fS=/\u0000|\uFFFD/g;function a0(t){return(typeof t=="string"?t:""+t).replace(uS,`
`).replace(fS,"")}function s0(t,n){return n=a0(n),a0(t)===n}function Kt(t,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||oi(t,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&oi(t,""+r);break;case"className":Ze(t,"class",r);break;case"tabIndex":Ze(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ze(t,a,r);break;case"style":Ui(t,r,f);break;case"data":if(n!=="object"){Ze(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ms(""+r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Kt(t,n,"name",u.name,u,null),Kt(t,n,"formEncType",u.formEncType,u,null),Kt(t,n,"formMethod",u.formMethod,u,null),Kt(t,n,"formTarget",u.formTarget,u,null)):(Kt(t,n,"encType",u.encType,u,null),Kt(t,n,"method",u.method,u,null),Kt(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=ms(""+r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=aa);break;case"onScroll":r!=null&&At("scroll",t);break;case"onScrollEnd":r!=null&&At("scrollend",t);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=ms(""+r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""+r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":At("beforetoggle",t),At("toggle",t),Oe(t,"popover",r);break;case"xlinkActuate":qe(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":qe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":qe(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":qe(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":qe(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":qe(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":qe(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":qe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":qe(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Oe(t,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ki.get(a)||a,Oe(t,a,r))}}function qf(t,n,a,r,u,f){switch(a){case"style":Ui(t,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof r=="string"?oi(t,r):(typeof r=="number"||typeof r=="bigint")&&oi(t,""+r);break;case"onScroll":r!=null&&At("scroll",t);break;case"onScrollEnd":r!=null&&At("scrollend",t);break;case"onClick":r!=null&&(t.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!A.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[tn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,r,u);break e}a in t?t[a]=r:r===!0?t.setAttribute(a,""):Oe(t,a,r)}}}function Ln(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":At("error",t),At("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Kt(t,n,f,_,a,null)}}u&&Kt(t,n,"srcSet",a.srcSet,a,null),r&&Kt(t,n,"src",a.src,a,null);return;case"input":At("invalid",t);var R=f=_=u=null,F=null,ne=null;for(r in a)if(a.hasOwnProperty(r)){var pe=a[r];if(pe!=null)switch(r){case"name":u=pe;break;case"type":_=pe;break;case"checked":F=pe;break;case"defaultChecked":ne=pe;break;case"value":f=pe;break;case"defaultValue":R=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:Kt(t,n,r,pe,a,null)}}Bn(t,f,R,F,ne,_,u,!1);return;case"select":At("invalid",t),r=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(R=a[u],R!=null))switch(u){case"value":f=R;break;case"defaultValue":_=R;break;case"multiple":r=R;default:Kt(t,n,u,R,a,null)}n=f,a=_,t.multiple=!!r,n!=null?En(t,!!r,n,!1):a!=null&&En(t,!!r,a,!0);return;case"textarea":At("invalid",t),f=u=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(R=a[_],R!=null))switch(_){case"value":r=R;break;case"defaultValue":u=R;break;case"children":f=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(s(91));break;default:Kt(t,n,_,R,a,null)}Di(t,r,u,f);return;case"option":for(F in a)if(a.hasOwnProperty(F)&&(r=a[F],r!=null))switch(F){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Kt(t,n,F,r,a,null)}return;case"dialog":At("beforetoggle",t),At("toggle",t),At("cancel",t),At("close",t);break;case"iframe":case"object":At("load",t);break;case"video":case"audio":for(r=0;r<No.length;r++)At(No[r],t);break;case"image":At("error",t),At("load",t);break;case"details":At("toggle",t);break;case"embed":case"source":case"link":At("error",t),At("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(r=a[ne],r!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Kt(t,n,ne,r,a,null)}return;default:if(Ht(n)){for(pe in a)a.hasOwnProperty(pe)&&(r=a[pe],r!==void 0&&qf(t,n,pe,r,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(r=a[R],r!=null&&Kt(t,n,R,r,a,null))}function hS(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,R=null,F=null,ne=null,pe=null;for(le in a){var ve=a[le];if(a.hasOwnProperty(le)&&ve!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":F=ve;default:r.hasOwnProperty(le)||Kt(t,n,le,null,r,ve)}}for(var oe in r){var le=r[oe];if(ve=a[oe],r.hasOwnProperty(oe)&&(le!=null||ve!=null))switch(oe){case"type":f=le;break;case"name":u=le;break;case"checked":ne=le;break;case"defaultChecked":pe=le;break;case"value":_=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==ve&&Kt(t,n,oe,le,r,ve)}}Ge(t,_,R,F,ne,pe,f,u);return;case"select":le=_=R=oe=null;for(f in a)if(F=a[f],a.hasOwnProperty(f)&&F!=null)switch(f){case"value":break;case"multiple":le=F;default:r.hasOwnProperty(f)||Kt(t,n,f,null,r,F)}for(u in r)if(f=r[u],F=a[u],r.hasOwnProperty(u)&&(f!=null||F!=null))switch(u){case"value":oe=f;break;case"defaultValue":R=f;break;case"multiple":_=f;default:f!==F&&Kt(t,n,u,f,r,F)}n=R,a=_,r=le,oe!=null?En(t,!!a,oe,!1):!!r!=!!a&&(n!=null?En(t,!!a,n,!0):En(t,!!a,a?[]:"",!1));return;case"textarea":le=oe=null;for(R in a)if(u=a[R],a.hasOwnProperty(R)&&u!=null&&!r.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Kt(t,n,R,null,r,u)}for(_ in r)if(u=r[_],f=a[_],r.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":oe=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Kt(t,n,_,u,r,f)}ri(t,oe,le);return;case"option":for(var Ke in a)if(oe=a[Ke],a.hasOwnProperty(Ke)&&oe!=null&&!r.hasOwnProperty(Ke))switch(Ke){case"selected":t.selected=!1;break;default:Kt(t,n,Ke,null,r,oe)}for(F in r)if(oe=r[F],le=a[F],r.hasOwnProperty(F)&&oe!==le&&(oe!=null||le!=null))switch(F){case"selected":t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol";break;default:Kt(t,n,F,oe,r,le)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var rt in a)oe=a[rt],a.hasOwnProperty(rt)&&oe!=null&&!r.hasOwnProperty(rt)&&Kt(t,n,rt,null,r,oe);for(ne in r)if(oe=r[ne],le=a[ne],r.hasOwnProperty(ne)&&oe!==le&&(oe!=null||le!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:Kt(t,n,ne,oe,r,le)}return;default:if(Ht(n)){for(var Qt in a)oe=a[Qt],a.hasOwnProperty(Qt)&&oe!==void 0&&!r.hasOwnProperty(Qt)&&qf(t,n,Qt,void 0,r,oe);for(pe in r)oe=r[pe],le=a[pe],!r.hasOwnProperty(pe)||oe===le||oe===void 0&&le===void 0||qf(t,n,pe,oe,r,le);return}}for(var K in a)oe=a[K],a.hasOwnProperty(K)&&oe!=null&&!r.hasOwnProperty(K)&&Kt(t,n,K,null,r,oe);for(ve in r)oe=r[ve],le=a[ve],!r.hasOwnProperty(ve)||oe===le||oe==null&&le==null||Kt(t,n,ve,oe,r,le)}function r0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function dS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,_=u.initiatorType,R=u.duration;if(f&&R&&r0(_)){for(_=0,R=u.responseEnd,r+=1;r<a.length;r++){var F=a[r],ne=F.startTime;if(ne>R)break;var pe=F.transferSize,ve=F.initiatorType;pe&&r0(ve)&&(F=F.responseEnd,_+=pe*(F<R?1:(R-ne)/(F-ne)))}if(--r,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Yf=null,Zf=null;function ec(t){return t.nodeType===9?t:t.ownerDocument}function o0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function l0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Kf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Qf=null;function pS(){var t=window.event;return t&&t.type==="popstate"?t===Qf?!1:(Qf=t,!0):(Qf=null,!1)}var c0=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,u0=typeof Promise=="function"?Promise:void 0,gS=typeof queueMicrotask=="function"?queueMicrotask:typeof u0<"u"?function(t){return u0.resolve(null).then(t).catch(_S)}:c0;function _S(t){setTimeout(function(){throw t})}function $a(t){return t==="head"}function f0(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),br(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Oo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Oo(a);for(var f=a.firstChild;f;){var _=f.nextSibling,R=f.nodeName;f[Na]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&Oo(t.ownerDocument.body);a=u}while(a);br(n)}function h0(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Jf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Jf(a),La(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function vS(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Na])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=bi(t.nextSibling),t===null)break}return null}function xS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=bi(t.nextSibling),t===null))return null;return t}function d0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=bi(t.nextSibling),t===null))return null;return t}function jf(t){return t.data==="$?"||t.data==="$~"}function $f(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function SS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function bi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var eh=null;function p0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return bi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function m0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function g0(t,n,a){switch(n=ec(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Oo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);La(t)}var Ti=new Map,_0=new Set;function tc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Sa=B.d;B.d={f:MS,r:yS,D:ES,C:bS,L:TS,m:AS,X:CS,S:RS,M:wS};function MS(){var t=Sa.f(),n=ql();return t||n}function yS(t){var n=ia(t);n!==null&&n.tag===5&&n.type==="form"?Om(n):Sa.r(t)}var Mr=typeof document>"u"?null:document;function v0(t,n,a){var r=Mr;if(r&&typeof n=="string"&&n){var u=kt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),_0.has(u)||(_0.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Ln(n,"link",t),_n(n),r.head.appendChild(n)))}}function ES(t){Sa.D(t),v0("dns-prefetch",t,null)}function bS(t,n){Sa.C(t,n),v0("preconnect",t,n)}function TS(t,n,a){Sa.L(t,n,a);var r=Mr;if(r&&t&&n){var u='link[rel="preload"][as="'+kt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+kt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+kt(a.imageSizes)+'"]')):u+='[href="'+kt(t)+'"]';var f=u;switch(n){case"style":f=yr(t);break;case"script":f=Er(t)}Ti.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ti.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(Po(f))||n==="script"&&r.querySelector(Io(f))||(n=r.createElement("link"),Ln(n,"link",t),_n(n),r.head.appendChild(n)))}}function AS(t,n){Sa.m(t,n);var a=Mr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+kt(r)+'"][href="'+kt(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Er(t)}if(!Ti.has(f)&&(t=S({rel:"modulepreload",href:t},n),Ti.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(f)))return}r=a.createElement("link"),Ln(r,"link",t),_n(r),a.head.appendChild(r)}}}function RS(t,n,a){Sa.S(t,n,a);var r=Mr;if(r&&t){var u=Oa(r).hoistableStyles,f=yr(t);n=n||"default";var _=u.get(f);if(!_){var R={loading:0,preload:null};if(_=r.querySelector(Po(f)))R.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ti.get(f))&&th(t,a);var F=_=r.createElement("link");_n(F),Ln(F,"link",t),F._p=new Promise(function(ne,pe){F.onload=ne,F.onerror=pe}),F.addEventListener("load",function(){R.loading|=1}),F.addEventListener("error",function(){R.loading|=2}),R.loading|=4,nc(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:R},u.set(f,_)}}}function CS(t,n){Sa.X(t,n);var a=Mr;if(a&&t){var r=Oa(a).hoistableScripts,u=Er(t),f=r.get(u);f||(f=a.querySelector(Io(u)),f||(t=S({src:t,async:!0},n),(n=Ti.get(u))&&nh(t,n),f=a.createElement("script"),_n(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function wS(t,n){Sa.M(t,n);var a=Mr;if(a&&t){var r=Oa(a).hoistableScripts,u=Er(t),f=r.get(u);f||(f=a.querySelector(Io(u)),f||(t=S({src:t,async:!0,type:"module"},n),(n=Ti.get(u))&&nh(t,n),f=a.createElement("script"),_n(f),Ln(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function x0(t,n,a,r){var u=(u=se.current)?tc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=yr(a.href),a=Oa(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=yr(a.href);var f=Oa(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(Po(t)))&&!f._p&&(_.instance=f,_.state.loading=5),Ti.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ti.set(t,a),f||DS(u,t,a,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Er(a),a=Oa(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function yr(t){return'href="'+kt(t)+'"'}function Po(t){return'link[rel="stylesheet"]['+t+"]"}function S0(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function DS(t,n,a,r){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=t.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Ln(n,"link",a),_n(n),t.head.appendChild(n))}function Er(t){return'[src="'+kt(t)+'"]'}function Io(t){return"script[async]"+t}function M0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+kt(a.href)+'"]');if(r)return n.instance=r,_n(r),r;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),_n(r),Ln(r,"style",u),nc(r,a.precedence,t),n.instance=r;case"stylesheet":u=yr(a.href);var f=t.querySelector(Po(u));if(f)return n.state.loading|=4,n.instance=f,_n(f),f;r=S0(a),(u=Ti.get(u))&&th(r,u),f=(t.ownerDocument||t).createElement("link"),_n(f);var _=f;return _._p=new Promise(function(R,F){_.onload=R,_.onerror=F}),Ln(f,"link",r),n.state.loading|=4,nc(f,a.precedence,t),n.instance=f;case"script":return f=Er(a.src),(u=t.querySelector(Io(f)))?(n.instance=u,_n(u),u):(r=a,(u=Ti.get(f))&&(r=S({},a),nh(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),_n(u),Ln(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,nc(r,a.precedence,t));return n.instance}function nc(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,_=0;_<r.length;_++){var R=r[_];if(R.dataset.precedence===n)f=R;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function th(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function nh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var ic=null;function y0(t,n,a){if(ic===null){var r=new Map,u=ic=new Map;u.set(a,r)}else u=ic,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Na]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var R=r.get(_);R?R.push(f):r.set(_,[f])}}return r}function E0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function US(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function b0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function NS(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=yr(r.href),f=n.querySelector(Po(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ac.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,_n(f);return}f=n.ownerDocument||n,r=S0(r),(u=Ti.get(u))&&th(r,u),f=f.createElement("link"),_n(f);var _=f;_._p=new Promise(function(R,F){_.onload=R,_.onerror=F}),Ln(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ac.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var ih=0;function LS(t,n){return t.stylesheets&&t.count===0&&rc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&rc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&ih===0&&(ih=62500*dS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&rc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>ih?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)rc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var sc=null;function rc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,sc=new Map,n.forEach(OS,t),sc=null,ac.call(t))}function OS(t,n){if(!(n.state.loading&4)){var a=sc.get(t);if(a)var r=a.get(null);else{a=new Map,sc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||r,f===r&&a.set(null,u),a.set(_,u),this.count++,r=ac.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var zo={$$typeof:H,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function PS(t,n,a,r,u,f,_,R,F){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=We(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=We(0),this.hiddenUpdates=We(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=F,this.incompleteTransitions=new Map}function T0(t,n,a,r,u,f,_,R,F,ne,pe,ve){return t=new PS(t,n,a,_,F,ne,pe,ve,R),n=1,f===!0&&(n|=24),f=ci(3,null,null,n),t.current=f,f.stateNode=t,n=Pu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Fu(f),t}function A0(t){return t?(t=er,t):er}function R0(t,n,a,r,u,f){u=A0(u),r.context===null?r.context=u:r.pendingContext=u,r=Va(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ka(t,r,n),a!==null&&(ei(a,t,n),mo(a,t,n))}function C0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function ah(t,n){C0(t,n),(t=t.alternate)&&C0(t,n)}function w0(t){if(t.tag===13||t.tag===31){var n=xs(t,67108864);n!==null&&ei(n,t,67108864),ah(t,67108864)}}function D0(t){if(t.tag===13||t.tag===31){var n=pi();n=St(n);var a=xs(t,n);a!==null&&ei(a,t,n),ah(t,n)}}var oc=!0;function IS(t,n,a,r){var u=O.T;O.T=null;var f=B.p;try{B.p=2,sh(t,n,a,r)}finally{B.p=f,O.T=u}}function zS(t,n,a,r){var u=O.T;O.T=null;var f=B.p;try{B.p=8,sh(t,n,a,r)}finally{B.p=f,O.T=u}}function sh(t,n,a,r){if(oc){var u=rh(r);if(u===null)Wf(t,n,r,lc,a),N0(t,r);else if(FS(u,t,n,a,r))r.stopPropagation();else if(N0(t,r),n&4&&-1<BS.indexOf(t)){for(;u!==null;){var f=ia(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=Re(f.pendingLanes);if(_!==0){var R=f;for(R.pendingLanes|=2,R.entangledLanes|=2;_;){var F=1<<31-Fe(_);R.entanglements[1]|=F,_&=~F}Yi(f),(Ft&6)===0&&(Xl=ft()+500,Uo(0))}}break;case 31:case 13:R=xs(f,2),R!==null&&ei(R,f,2),ql(),ah(f,2)}if(f=rh(r),f===null&&Wf(t,n,r,lc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Wf(t,n,r,null,a)}}function rh(t){return t=ou(t),oh(t)}var lc=null;function oh(t){if(lc=null,t=na(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return lc=t,null}function U0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Et()){case D:return 2;case M:return 8;case Z:case ee:return 32;case ce:return 268435456;default:return 32}default:return 32}}var lh=!1,es=null,ts=null,ns=null,Bo=new Map,Fo=new Map,is=[],BS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function N0(t,n){switch(t){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ts=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function Ho(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=ia(n),n!==null&&w0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function FS(t,n,a,r,u){switch(n){case"focusin":return es=Ho(es,t,n,a,r,u),!0;case"dragenter":return ts=Ho(ts,t,n,a,r,u),!0;case"mouseover":return ns=Ho(ns,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Bo.set(f,Ho(Bo.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Fo.set(f,Ho(Fo.get(f)||null,t,n,a,r,u)),!0}return!1}function L0(t){var n=na(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,zn(t.priority,function(){D0(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,zn(t.priority,function(){D0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function cc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=rh(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);ru=r,a.target.dispatchEvent(r),ru=null}else return n=ia(a),n!==null&&w0(n),t.blockedOn=a,!1;n.shift()}return!0}function O0(t,n,a){cc(t)&&a.delete(n)}function HS(){lh=!1,es!==null&&cc(es)&&(es=null),ts!==null&&cc(ts)&&(ts=null),ns!==null&&cc(ns)&&(ns=null),Bo.forEach(O0),Fo.forEach(O0)}function uc(t,n){t.blockedOn===n&&(t.blockedOn=null,lh||(lh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,HS)))}var fc=null;function P0(t){fc!==t&&(fc=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){fc===t&&(fc=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(oh(r||a)===null)continue;break}var f=ia(a);f!==null&&(t.splice(n,3),n-=3,rf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function br(t){function n(F){return uc(F,t)}es!==null&&uc(es,t),ts!==null&&uc(ts,t),ns!==null&&uc(ns,t),Bo.forEach(n),Fo.forEach(n);for(var a=0;a<is.length;a++){var r=is[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<is.length&&(a=is[0],a.blockedOn===null);)L0(a),a.blockedOn===null&&is.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],_=u[tn]||null;if(typeof f=="function")_||P0(a);else if(_){var R=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[tn]||null)R=_.formAction;else if(oh(u)!==null)continue}else R=_.action;typeof R=="function"?a[r+1]=R:(a.splice(r,3),r-=3),P0(a)}}}function I0(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function ch(t){this._internalRoot=t}hc.prototype.render=ch.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=pi();R0(a,r,t,n,null,null)},hc.prototype.unmount=ch.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;R0(t.current,2,null,t,null,null),ql(),n[hn]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Wn();t={blockedOn:null,target:t,priority:n};for(var a=0;a<is.length&&n!==0&&n<is[a].priority;a++);is.splice(a,0,t),a===0&&L0(t)}};var z0=e.version;if(z0!=="19.2.8")throw Error(s(527,z0,"19.2.8"));B.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=d(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var GS={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{ue=dc.inject(GS),fe=dc}catch{}}return Vo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=Xm,f=Wm,_=qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=T0(t,1,!1,null,null,a,r,null,u,f,_,I0),t[hn]=n.current,Xf(t),new ch(n)},Vo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=Xm,_=Wm,R=qm,F=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(F=a.formState)),n=T0(t,1,!0,n,a??null,r,u,F,f,_,R,I0),n.context=A0(null),a=n.current,r=pi(),r=St(r),u=Va(r),u.callback=null,ka(a,u,r),a=r,n.current.lanes=a,Ve(n,a),Yi(n),t[hn]=n.current,Xf(t),new hc(n)},Vo.version="19.2.8",Vo}var Y0;function jS(){if(Y0)return hh.exports;Y0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),hh.exports=JS(),hh.exports}var $S=jS();const eM=$_($S);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="185",tM=0,Z0=1,nM=2,Bc=1,iM=2,Jo=3,ds=0,ni=1,Ra=2,$i=0,Gr=1,Vr=2,K0=3,Q0=4,aM=5,zs=100,sM=101,rM=102,oM=103,lM=104,cM=200,uM=201,fM=202,hM=203,jh=204,$h=205,dM=206,pM=207,mM=208,gM=209,_M=210,vM=211,xM=212,SM=213,MM=214,ed=0,td=1,nd=2,Wr=3,id=4,ad=5,sd=6,rd=7,ev=0,yM=1,EM=2,ea=0,tv=1,nv=2,iv=3,av=4,sv=5,rv=6,ov=7,lv=300,Gs=301,qr=302,gh=303,_h=304,tu=306,od=1e3,Ca=1001,ld=1002,On=1003,bM=1004,pc=1005,kn=1006,vh=1007,Fs=1008,wi=1009,cv=1010,uv=1011,$o=1012,Xd=1013,ta=1014,Ji=1015,_i=1016,Wd=1017,qd=1018,el=1020,fv=35902,hv=35899,dv=1021,pv=1022,Fi=1023,Da=1026,Hs=1027,mv=1028,Yd=1029,Vs=1030,Zd=1031,Kd=1033,Fc=33776,Hc=33777,Gc=33778,Vc=33779,cd=35840,ud=35841,fd=35842,hd=35843,dd=36196,pd=37492,md=37496,gd=37488,_d=37489,Wc=37490,vd=37491,xd=37808,Sd=37809,Md=37810,yd=37811,Ed=37812,bd=37813,Td=37814,Ad=37815,Rd=37816,Cd=37817,wd=37818,Dd=37819,Ud=37820,Nd=37821,Ld=36492,Od=36494,Pd=36495,Id=36283,zd=36284,qc=36285,Bd=36286,TM=3200,J0=0,AM=1,fs="",Ri="srgb",Yc="srgb-linear",Zc="linear",Yt="srgb",Tr=7680,j0=519,RM=512,CM=513,wM=514,Qd=515,DM=516,UM=517,Jd=518,NM=519,$0=35044,e_="300 es",ji=2e3,Kc=2001;function LM(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Qc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function OM(){const o=Qc("canvas");return o.style.display="block",o}const t_={};function n_(...o){const e="THREE."+o.shift();console.log(e,...o)}function gv(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function lt(...o){o=gv(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...o)}}function Ot(...o){o=gv(o);const e="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...o)}}function kr(...o){const e=o.join(" ");e in t_||(t_[e]=!0,lt(...o))}function PM(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const IM={[ed]:td,[nd]:sd,[id]:rd,[Wr]:ad,[td]:ed,[sd]:nd,[rd]:id,[ad]:Wr};class Ws{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xh=Math.PI/180,Fd=180/Math.PI;function tl(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Hn[o&255]+Hn[o>>8&255]+Hn[o>>16&255]+Hn[o>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[i&63|128]+Hn[i>>8&255]+"-"+Hn[i>>16&255]+Hn[i>>24&255]+Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]).toLowerCase()}function Nt(o,e,i){return Math.max(e,Math.min(i,o))}function zM(o,e){return(o%e+e)%e}function Sh(o,e,i){return(1-i)*o+i*e}function ko(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ti(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const tp=class tp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Nt(this.x,e.x,i.x),this.y=Nt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Nt(this.x,e,i),this.y=Nt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Nt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tp.prototype.isVector2=!0;let mt=tp;class Qr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,p){let m=s[l+0],d=s[l+1],v=s[l+2],S=s[l+3],g=c[h+0],E=c[h+1],T=c[h+2],C=c[h+3];if(S!==C||m!==g||d!==E||v!==T){let y=m*g+d*E+v*T+S*C;y<0&&(g=-g,E=-E,T=-T,C=-C,y=-y);let x=1-p;if(y<.9995){const z=Math.acos(y),H=Math.sin(z);x=Math.sin(x*z)/H,p=Math.sin(p*z)/H,m=m*x+g*p,d=d*x+E*p,v=v*x+T*p,S=S*x+C*p}else{m=m*x+g*p,d=d*x+E*p,v=v*x+T*p,S=S*x+C*p;const z=1/Math.sqrt(m*m+d*d+v*v+S*S);m*=z,d*=z,v*=z,S*=z}}e[i]=m,e[i+1]=d,e[i+2]=v,e[i+3]=S}static multiplyQuaternionsFlat(e,i,s,l,c,h){const p=s[l],m=s[l+1],d=s[l+2],v=s[l+3],S=c[h],g=c[h+1],E=c[h+2],T=c[h+3];return e[i]=p*T+v*S+m*E-d*g,e[i+1]=m*T+v*g+d*S-p*E,e[i+2]=d*T+v*E+p*g-m*S,e[i+3]=v*T-p*S-m*g-d*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,p=Math.cos,m=Math.sin,d=p(s/2),v=p(l/2),S=p(c/2),g=m(s/2),E=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=g*v*S+d*E*T,this._y=d*E*S-g*v*T,this._z=d*v*T+g*E*S,this._w=d*v*S-g*E*T;break;case"YXZ":this._x=g*v*S+d*E*T,this._y=d*E*S-g*v*T,this._z=d*v*T-g*E*S,this._w=d*v*S+g*E*T;break;case"ZXY":this._x=g*v*S-d*E*T,this._y=d*E*S+g*v*T,this._z=d*v*T+g*E*S,this._w=d*v*S-g*E*T;break;case"ZYX":this._x=g*v*S-d*E*T,this._y=d*E*S+g*v*T,this._z=d*v*T-g*E*S,this._w=d*v*S+g*E*T;break;case"YZX":this._x=g*v*S+d*E*T,this._y=d*E*S+g*v*T,this._z=d*v*T-g*E*S,this._w=d*v*S-g*E*T;break;case"XZY":this._x=g*v*S-d*E*T,this._y=d*E*S-g*v*T,this._z=d*v*T+g*E*S,this._w=d*v*S+g*E*T;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],p=i[5],m=i[9],d=i[2],v=i[6],S=i[10],g=s+p+S;if(g>0){const E=.5/Math.sqrt(g+1);this._w=.25/E,this._x=(v-m)*E,this._y=(c-d)*E,this._z=(h-l)*E}else if(s>p&&s>S){const E=2*Math.sqrt(1+s-p-S);this._w=(v-m)/E,this._x=.25*E,this._y=(l+h)/E,this._z=(c+d)/E}else if(p>S){const E=2*Math.sqrt(1+p-s-S);this._w=(c-d)/E,this._x=(l+h)/E,this._y=.25*E,this._z=(m+v)/E}else{const E=2*Math.sqrt(1+S-s-p);this._w=(h-l)/E,this._x=(c+d)/E,this._y=(m+v)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,p=i._x,m=i._y,d=i._z,v=i._w;return this._x=s*v+h*p+l*d-c*m,this._y=l*v+h*m+c*p-s*d,this._z=c*v+h*d+s*m-l*p,this._w=h*v-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,h=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,h=-h,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),v=Math.sin(d);m=Math.sin(m*d)/v,i=Math.sin(i*d)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const np=class np{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(i_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(i_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,p=e.z,m=e.w,d=2*(h*l-p*s),v=2*(p*i-c*l),S=2*(c*s-h*i);return this.x=i+m*d+h*S-p*v,this.y=s+m*v+p*d-c*S,this.z=l+m*S+c*v-h*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Nt(this.x,e.x,i.x),this.y=Nt(this.y,e.y,i.y),this.z=Nt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Nt(this.x,e,i),this.y=Nt(this.y,e,i),this.z=Nt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*h-s*m,this.z=s*p-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Nt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};np.prototype.isVector3=!0;let j=np;const Mh=new j,i_=new Qr,ip=class ip{constructor(e,i,s,l,c,h,p,m,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d)}set(e,i,s,l,c,h,p,m,d){const v=this.elements;return v[0]=e,v[1]=l,v[2]=p,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[3],m=s[6],d=s[1],v=s[4],S=s[7],g=s[2],E=s[5],T=s[8],C=l[0],y=l[3],x=l[6],z=l[1],H=l[4],w=l[7],I=l[2],N=l[5],P=l[8];return c[0]=h*C+p*z+m*I,c[3]=h*y+p*H+m*N,c[6]=h*x+p*w+m*P,c[1]=d*C+v*z+S*I,c[4]=d*y+v*H+S*N,c[7]=d*x+v*w+S*P,c[2]=g*C+E*z+T*I,c[5]=g*y+E*H+T*N,c[8]=g*x+E*w+T*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8];return i*h*v-i*p*d-s*c*v+s*p*m+l*c*d-l*h*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],S=v*h-p*d,g=p*m-v*c,E=d*c-h*m,T=i*S+s*g+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=S*C,e[1]=(l*d-v*s)*C,e[2]=(p*s-l*h)*C,e[3]=g*C,e[4]=(v*i-l*m)*C,e[5]=(l*c-p*i)*C,e[6]=E*C,e[7]=(s*m-d*i)*C,e[8]=(h*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*h+d*p)+h+e,-l*d,l*m,-l*(-d*h+m*p)+p+i,0,0,1),this}scale(e,i){return kr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yh.makeScale(e,i)),this}rotate(e){return kr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yh.makeRotation(-e)),this}translate(e,i){return kr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ip.prototype.isMatrix3=!0;let pt=ip;const yh=new pt,a_=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),s_=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BM(){const o={enabled:!0,workingColorSpace:Yc,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Yt&&(l.r=wa(l.r),l.g=wa(l.g),l.b=wa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Yt&&(l.r=Xr(l.r),l.g=Xr(l.g),l.b=Xr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===fs?Zc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return kr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return kr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Yc]:{primaries:e,whitePoint:s,transfer:Zc,toXYZ:a_,fromXYZ:s_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ri},outputColorSpaceConfig:{drawingBufferColorSpace:Ri}},[Ri]:{primaries:e,whitePoint:s,transfer:Yt,toXYZ:a_,fromXYZ:s_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ri}}}),o}const Ut=BM();function wa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Xr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ar;class FM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ar===void 0&&(Ar=Qc("canvas")),Ar.width=e.width,Ar.height=e.height;const l=Ar.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Ar}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Qc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=wa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(wa(i[s]/255)*255):i[s]=wa(i[s]);return{data:i,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HM=0;class jd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=tl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?c.push(Eh(l[h].image)):c.push(Eh(l[h]))}else c=Eh(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Eh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?FM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let GM=0;const bh=new j;class Zn extends Ws{constructor(e=Zn.DEFAULT_IMAGE,i=Zn.DEFAULT_MAPPING,s=Ca,l=Ca,c=kn,h=Fs,p=Fi,m=wi,d=Zn.DEFAULT_ANISOTROPY,v=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=tl(),this.name="",this.source=new jd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bh).x}get height(){return this.source.getSize(bh).y}get depth(){return this.source.getSize(bh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){lt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case od:e.x=e.x-Math.floor(e.x);break;case Ca:e.x=e.x<0?0:1;break;case ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case od:e.y=e.y-Math.floor(e.y);break;case Ca:e.y=e.y<0?0:1;break;case ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=lv;Zn.DEFAULT_ANISOTROPY=1;const ap=class ap{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,d=m[0],v=m[4],S=m[8],g=m[1],E=m[5],T=m[9],C=m[2],y=m[6],x=m[10];if(Math.abs(v-g)<.01&&Math.abs(S-C)<.01&&Math.abs(T-y)<.01){if(Math.abs(v+g)<.1&&Math.abs(S+C)<.1&&Math.abs(T+y)<.1&&Math.abs(d+E+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const H=(d+1)/2,w=(E+1)/2,I=(x+1)/2,N=(v+g)/4,P=(S+C)/4,b=(T+y)/4;return H>w&&H>I?H<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(H),l=N/s,c=P/s):w>I?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=N/l,c=b/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=P/c,l=b/c),this.set(s,l,c,i),this}let z=Math.sqrt((y-T)*(y-T)+(S-C)*(S-C)+(g-v)*(g-v));return Math.abs(z)<.001&&(z=1),this.x=(y-T)/z,this.y=(S-C)/z,this.z=(g-v)/z,this.w=Math.acos((d+E+x-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Nt(this.x,e.x,i.x),this.y=Nt(this.y,e.y,i.y),this.z=Nt(this.z,e.z,i.z),this.w=Nt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Nt(this.x,e,i),this.y=Nt(this.y,e,i),this.z=Nt(this.z,e,i),this.w=Nt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Nt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ap.prototype.isVector4=!0;let fn=ap;class VM extends Ws{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new fn(0,0,e,i),this.scissorTest=!1,this.viewport=new fn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Zn(l),h=s.count;for(let p=0;p<h;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(e={}){const i={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new jd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends VM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class _v extends Zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kM extends Zn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=On,this.minFilter=On,this.wrapR=Ca,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eu=class eu{constructor(e,i,s,l,c,h,p,m,d,v,S,g,E,T,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,p,m,d,v,S,g,E,T,C,y)}set(e,i,s,l,c,h,p,m,d,v,S,g,E,T,C,y){const x=this.elements;return x[0]=e,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=h,x[9]=p,x[13]=m,x[2]=d,x[6]=v,x[10]=S,x[14]=g,x[3]=E,x[7]=T,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new eu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Rr.setFromMatrixColumn(e,0).length(),c=1/Rr.setFromMatrixColumn(e,1).length(),h=1/Rr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),v=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const g=h*v,E=h*S,T=p*v,C=p*S;i[0]=m*v,i[4]=-m*S,i[8]=d,i[1]=E+T*d,i[5]=g-C*d,i[9]=-p*m,i[2]=C-g*d,i[6]=T+E*d,i[10]=h*m}else if(e.order==="YXZ"){const g=m*v,E=m*S,T=d*v,C=d*S;i[0]=g+C*p,i[4]=T*p-E,i[8]=h*d,i[1]=h*S,i[5]=h*v,i[9]=-p,i[2]=E*p-T,i[6]=C+g*p,i[10]=h*m}else if(e.order==="ZXY"){const g=m*v,E=m*S,T=d*v,C=d*S;i[0]=g-C*p,i[4]=-h*S,i[8]=T+E*p,i[1]=E+T*p,i[5]=h*v,i[9]=C-g*p,i[2]=-h*d,i[6]=p,i[10]=h*m}else if(e.order==="ZYX"){const g=h*v,E=h*S,T=p*v,C=p*S;i[0]=m*v,i[4]=T*d-E,i[8]=g*d+C,i[1]=m*S,i[5]=C*d+g,i[9]=E*d-T,i[2]=-d,i[6]=p*m,i[10]=h*m}else if(e.order==="YZX"){const g=h*m,E=h*d,T=p*m,C=p*d;i[0]=m*v,i[4]=C-g*S,i[8]=T*S+E,i[1]=S,i[5]=h*v,i[9]=-p*v,i[2]=-d*v,i[6]=E*S+T,i[10]=g-C*S}else if(e.order==="XZY"){const g=h*m,E=h*d,T=p*m,C=p*d;i[0]=m*v,i[4]=-S,i[8]=d*v,i[1]=g*S+C,i[5]=h*v,i[9]=E*S-T,i[2]=T*S-E,i[6]=p*v,i[10]=C*S+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XM,e,WM)}lookAt(e,i,s){const l=this.elements;return mi.subVectors(e,i),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),ss.crossVectors(s,mi),ss.lengthSq()===0&&(Math.abs(s.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),ss.crossVectors(s,mi)),ss.normalize(),mc.crossVectors(mi,ss),l[0]=ss.x,l[4]=mc.x,l[8]=mi.x,l[1]=ss.y,l[5]=mc.y,l[9]=mi.y,l[2]=ss.z,l[6]=mc.z,l[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],p=s[4],m=s[8],d=s[12],v=s[1],S=s[5],g=s[9],E=s[13],T=s[2],C=s[6],y=s[10],x=s[14],z=s[3],H=s[7],w=s[11],I=s[15],N=l[0],P=l[4],b=l[8],L=l[12],q=l[1],G=l[5],Q=l[9],de=l[13],ge=l[2],J=l[6],O=l[10],B=l[14],$=l[3],me=l[7],Ee=l[11],U=l[15];return c[0]=h*N+p*q+m*ge+d*$,c[4]=h*P+p*G+m*J+d*me,c[8]=h*b+p*Q+m*O+d*Ee,c[12]=h*L+p*de+m*B+d*U,c[1]=v*N+S*q+g*ge+E*$,c[5]=v*P+S*G+g*J+E*me,c[9]=v*b+S*Q+g*O+E*Ee,c[13]=v*L+S*de+g*B+E*U,c[2]=T*N+C*q+y*ge+x*$,c[6]=T*P+C*G+y*J+x*me,c[10]=T*b+C*Q+y*O+x*Ee,c[14]=T*L+C*de+y*B+x*U,c[3]=z*N+H*q+w*ge+I*$,c[7]=z*P+H*G+w*J+I*me,c[11]=z*b+H*Q+w*O+I*Ee,c[15]=z*L+H*de+w*B+I*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],p=e[5],m=e[9],d=e[13],v=e[2],S=e[6],g=e[10],E=e[14],T=e[3],C=e[7],y=e[11],x=e[15],z=m*E-d*g,H=p*E-d*S,w=p*g-m*S,I=h*E-d*v,N=h*g-m*v,P=h*S-p*v;return i*(C*z-y*H+x*w)-s*(T*z-y*I+x*N)+l*(T*H-C*I+x*P)-c*(T*w-C*N+y*P)}determinantAffine(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[1],h=e[5],p=e[9],m=e[2],d=e[6],v=e[10];return i*(h*v-p*d)-s*(c*v-p*m)+l*(c*d-h*m)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],p=e[5],m=e[6],d=e[7],v=e[8],S=e[9],g=e[10],E=e[11],T=e[12],C=e[13],y=e[14],x=e[15],z=i*p-s*h,H=i*m-l*h,w=i*d-c*h,I=s*m-l*p,N=s*d-c*p,P=l*d-c*m,b=v*C-S*T,L=v*y-g*T,q=v*x-E*T,G=S*y-g*C,Q=S*x-E*C,de=g*x-E*y,ge=z*de-H*Q+w*G+I*q-N*L+P*b;if(ge===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const J=1/ge;return e[0]=(p*de-m*Q+d*G)*J,e[1]=(l*Q-s*de-c*G)*J,e[2]=(C*P-y*N+x*I)*J,e[3]=(g*N-S*P-E*I)*J,e[4]=(m*q-h*de-d*L)*J,e[5]=(i*de-l*q+c*L)*J,e[6]=(y*w-T*P-x*H)*J,e[7]=(v*P-g*w+E*H)*J,e[8]=(h*Q-p*q+d*b)*J,e[9]=(s*q-i*Q-c*b)*J,e[10]=(T*N-C*w+x*z)*J,e[11]=(S*w-v*N-E*z)*J,e[12]=(p*L-h*G-m*b)*J,e[13]=(i*G-s*L+l*b)*J,e[14]=(C*H-T*I-y*z)*J,e[15]=(v*I-S*H+g*z)*J,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,p=e.y,m=e.z,d=c*h,v=c*p;return this.set(d*h+s,d*p-l*m,d*m+l*p,0,d*p+l*m,v*p+s,v*m-l*h,0,d*m-l*p,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,p=i._z,m=i._w,d=c+c,v=h+h,S=p+p,g=c*d,E=c*v,T=c*S,C=h*v,y=h*S,x=p*S,z=m*d,H=m*v,w=m*S,I=s.x,N=s.y,P=s.z;return l[0]=(1-(C+x))*I,l[1]=(E+w)*I,l[2]=(T-H)*I,l[3]=0,l[4]=(E-w)*N,l[5]=(1-(g+x))*N,l[6]=(y+z)*N,l[7]=0,l[8]=(T+H)*P,l[9]=(y-z)*P,l[10]=(1-(g+C))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return s.set(1,1,1),i.identity(),this;let h=Rr.set(l[0],l[1],l[2]).length();const p=Rr.set(l[4],l[5],l[6]).length(),m=Rr.set(l[8],l[9],l[10]).length();c<0&&(h=-h),Pi.copy(this);const d=1/h,v=1/p,S=1/m;return Pi.elements[0]*=d,Pi.elements[1]*=d,Pi.elements[2]*=d,Pi.elements[4]*=v,Pi.elements[5]*=v,Pi.elements[6]*=v,Pi.elements[8]*=S,Pi.elements[9]*=S,Pi.elements[10]*=S,i.setFromRotationMatrix(Pi),s.x=h,s.y=p,s.z=m,this}makePerspective(e,i,s,l,c,h,p=ji,m=!1){const d=this.elements,v=2*c/(i-e),S=2*c/(s-l),g=(i+e)/(i-e),E=(s+l)/(s-l);let T,C;if(m)T=c/(h-c),C=h*c/(h-c);else if(p===ji)T=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(p===Kc)T=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=S,d[9]=E,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,i,s,l,c,h,p=ji,m=!1){const d=this.elements,v=2/(i-e),S=2/(s-l),g=-(i+e)/(i-e),E=-(s+l)/(s-l);let T,C;if(m)T=1/(h-c),C=h/(h-c);else if(p===ji)T=-2/(h-c),C=-(h+c)/(h-c);else if(p===Kc)T=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=v,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=S,d[9]=0,d[13]=E,d[2]=0,d[6]=0,d[10]=T,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};eu.prototype.isMatrix4=!0;let mn=eu;const Rr=new j,Pi=new mn,XM=new j(0,0,0),WM=new j(1,1,1),ss=new j,mc=new j,mi=new j,r_=new mn,o_=new Qr;class ks{constructor(e=0,i=0,s=0,l=ks.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],p=l[8],m=l[1],d=l[5],v=l[9],S=l[2],g=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Nt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,E),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,E),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Nt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(Nt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-v,E),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return r_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(r_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return o_.setFromEuler(this),this.setFromQuaternion(o_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ks.DEFAULT_ORDER="XYZ";class vv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qM=0;const l_=new j,Cr=new Qr,Ma=new mn,gc=new j,Xo=new j,YM=new j,ZM=new Qr,c_=new j(1,0,0),u_=new j(0,1,0),f_=new j(0,0,1),h_={type:"added"},KM={type:"removed"},wr={type:"childadded",child:null},Th={type:"childremoved",child:null};class ai extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qM++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ai.DEFAULT_UP.clone();const e=new j,i=new ks,s=new Qr,l=new j(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new pt}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Cr.setFromAxisAngle(e,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,i){return Cr.setFromAxisAngle(e,i),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(c_,e)}rotateY(e){return this.rotateOnAxis(u_,e)}rotateZ(e){return this.rotateOnAxis(f_,e)}translateOnAxis(e,i){return l_.copy(e).applyQuaternion(this.quaternion),this.position.add(l_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(c_,e)}translateY(e){return this.translateOnAxis(u_,e)}translateZ(e){return this.translateOnAxis(f_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?gc.copy(e):gc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(Xo,gc,this.up):Ma.lookAt(gc,Xo,this.up),this.quaternion.setFromRotationMatrix(Ma),l&&(Ma.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(Ma),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(h_),wr.child=e,this.dispatchEvent(wr),wr.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(KM),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(h_),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,YM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,ZM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i,s=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),i===!0){const c=this.children;for(let h=0,p=c.length;h<p;h++)c[h].updateWorldMatrix(!1,!0,s)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,v=m.length;d<v;d++){const S=m[d];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(e.materials,this.material[m]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(e.animations,m))}}if(i){const p=h(e.geometries),m=h(e.materials),d=h(e.textures),v=h(e.images),S=h(e.shapes),g=h(e.skeletons),E=h(e.animations),T=h(e.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),v.length>0&&(s.images=v),S.length>0&&(s.shapes=S),g.length>0&&(s.skeletons=g),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(p){const m=[];for(const d in p){const v=p[d];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}ai.DEFAULT_UP=new j(0,1,0);ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fr extends ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QM={type:"move"};class Ah{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const p=this._targetRay,m=this._grip,d=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(d&&e.hand){h=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),x=this._getHandJoint(d,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=d.joints["index-finger-tip"],S=d.joints["thumb-tip"],g=v.position.distanceTo(S.position),E=.02,T=.005;d.inputState.pinching&&g>E+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=E-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(QM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Fr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rs={h:0,s:0,l:0},_c={h:0,s:0,l:0};function Rh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Rt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ut.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Ut.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ut.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Ut.workingColorSpace){if(e=zM(e,1),i=Nt(i,0,1),s=Nt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Rh(h,c,e+1/3),this.g=Rh(h,c,e),this.b=Rh(h,c,e-1/3)}return Ut.colorSpaceToWorking(this,l),this}setStyle(e,i=Ri){function s(c){c!==void 0&&parseFloat(c)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:lt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ri){const s=xv[e.toLowerCase()];return s!==void 0?this.setHex(s,i):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wa(e.r),this.g=wa(e.g),this.b=wa(e.b),this}copyLinearToSRGB(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ri){return Ut.workingToColorSpace(Gn.copy(this),e),Math.round(Nt(Gn.r*255,0,255))*65536+Math.round(Nt(Gn.g*255,0,255))*256+Math.round(Nt(Gn.b*255,0,255))}getHexString(e=Ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ut.workingColorSpace){Ut.workingToColorSpace(Gn.copy(this),i);const s=Gn.r,l=Gn.g,c=Gn.b,h=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const v=(p+h)/2;if(p===h)m=0,d=0;else{const S=h-p;switch(d=v<=.5?S/(h+p):S/(2-h-p),h){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return e.h=m,e.s=d,e.l=v,e}getRGB(e,i=Ut.workingColorSpace){return Ut.workingToColorSpace(Gn.copy(this),i),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Ri){Ut.workingToColorSpace(Gn.copy(this),e);const i=Gn.r,s=Gn.g,l=Gn.b;return e!==Ri?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(rs),this.setHSL(rs.h+e,rs.s+i,rs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(rs),e.getHSL(_c);const s=Sh(rs.h,_c.h,i),l=Sh(rs.s,_c.s,i),c=Sh(rs.l,_c.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new Rt;Rt.NAMES=xv;class JM extends ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ks,this.environmentIntensity=1,this.environmentRotation=new ks,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ii=new j,ya=new j,Ch=new j,Ea=new j,Dr=new j,Ur=new j,d_=new j,wh=new j,Dh=new j,Uh=new j,Nh=new fn,Lh=new fn,Oh=new fn;class Bi{constructor(e=new j,i=new j,s=new j){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ii.subVectors(e,i),l.cross(Ii);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ii.subVectors(l,i),ya.subVectors(s,i),Ch.subVectors(e,i);const h=Ii.dot(Ii),p=Ii.dot(ya),m=Ii.dot(Ch),d=ya.dot(ya),v=ya.dot(Ch),S=h*d-p*p;if(S===0)return c.set(0,0,0),null;const g=1/S,E=(d*m-p*v)*g,T=(h*v-p*m)*g;return c.set(1-E-T,T,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ea)===null?!1:Ea.x>=0&&Ea.y>=0&&Ea.x+Ea.y<=1}static getInterpolation(e,i,s,l,c,h,p,m){return this.getBarycoord(e,i,s,l,Ea)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Ea.x),m.addScaledVector(h,Ea.y),m.addScaledVector(p,Ea.z),m)}static getInterpolatedAttribute(e,i,s,l,c,h){return Nh.setScalar(0),Lh.setScalar(0),Oh.setScalar(0),Nh.fromBufferAttribute(e,i),Lh.fromBufferAttribute(e,s),Oh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Nh,c.x),h.addScaledVector(Lh,c.y),h.addScaledVector(Oh,c.z),h}static isFrontFacing(e,i,s,l){return Ii.subVectors(s,i),ya.subVectors(e,i),Ii.cross(ya).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Ii.cross(ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Bi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,p;Dr.subVectors(l,s),Ur.subVectors(c,s),wh.subVectors(e,s);const m=Dr.dot(wh),d=Ur.dot(wh);if(m<=0&&d<=0)return i.copy(s);Dh.subVectors(e,l);const v=Dr.dot(Dh),S=Ur.dot(Dh);if(v>=0&&S<=v)return i.copy(l);const g=m*S-v*d;if(g<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Dr,h);Uh.subVectors(e,c);const E=Dr.dot(Uh),T=Ur.dot(Uh);if(T>=0&&E<=T)return i.copy(c);const C=E*d-m*T;if(C<=0&&d>=0&&T<=0)return p=d/(d-T),i.copy(s).addScaledVector(Ur,p);const y=v*T-E*S;if(y<=0&&S-v>=0&&E-T>=0)return d_.subVectors(c,l),p=(S-v)/(S-v+(E-T)),i.copy(l).addScaledVector(d_,p);const x=1/(y+C+g);return h=C*x,p=g*x,i.copy(s).addScaledVector(Dr,h).addScaledVector(Ur,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class nl{constructor(e=new j(1/0,1/0,1/0),i=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(zi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(zi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=zi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,p=c.count;h<p;h++)e.isMesh===!0?e.getVertexPosition(h,zi):zi.fromBufferAttribute(c,h),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vc.copy(s.boundingBox)),vc.applyMatrix4(e.matrixWorld),this.union(vc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),xc.subVectors(this.max,Wo),Nr.subVectors(e.a,Wo),Lr.subVectors(e.b,Wo),Or.subVectors(e.c,Wo),os.subVectors(Lr,Nr),ls.subVectors(Or,Lr),Ns.subVectors(Nr,Or);let i=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Ns.z,Ns.y,os.z,0,-os.x,ls.z,0,-ls.x,Ns.z,0,-Ns.x,-os.y,os.x,0,-ls.y,ls.x,0,-Ns.y,Ns.x,0];return!Ph(i,Nr,Lr,Or,xc)||(i=[1,0,0,0,1,0,0,0,1],!Ph(i,Nr,Lr,Or,xc))?!1:(Sc.crossVectors(os,ls),i=[Sc.x,Sc.y,Sc.z],Ph(i,Nr,Lr,Or,xc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ba),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ba=[new j,new j,new j,new j,new j,new j,new j,new j],zi=new j,vc=new nl,Nr=new j,Lr=new j,Or=new j,os=new j,ls=new j,Ns=new j,Wo=new j,xc=new j,Sc=new j,Ls=new j;function Ph(o,e,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Ls.fromArray(o,c);const p=l.x*Math.abs(Ls.x)+l.y*Math.abs(Ls.y)+l.z*Math.abs(Ls.z),m=e.dot(Ls),d=i.dot(Ls),v=s.dot(Ls);if(Math.max(-Math.max(m,d,v),Math.min(m,d,v))>p)return!1}return!0}const yn=new j,Mc=new mt;let jM=0;class Hi extends Ws{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=$0,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Mc.fromBufferAttribute(this,i),Mc.applyMatrix3(e),this.setXY(i,Mc.x,Mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(e),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=ko(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ti(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ko(i,this.array)),i}setX(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ko(i,this.array)),i}setY(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ko(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ko(i,this.array)),i}setW(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),l=ti(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),l=ti(l,this.array),c=ti(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Sv extends Hi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Mv extends Hi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Tn extends Hi{constructor(e,i,s){super(new Float32Array(e),i,s)}}const $M=new nl,qo=new j,Ih=new j;class nu{constructor(e=new j,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):$M.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);const i=qo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(qo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(Ih)),this.expandByPoint(qo.copy(e.center).sub(Ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ey=0;const Ai=new mn,zh=new ai,Pr=new j,gi=new nl,Yo=new nl,wn=new j;class si extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(LM(e)?Mv:Sv)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,i,s){return Ai.makeTranslation(e,i,s),this.applyMatrix4(Ai),this}scale(e,i,s){return Ai.makeScale(e,i,s),this.applyMatrix4(Ai),this}lookAt(e){return zh.lookAt(e),zh.updateMatrix(),this.applyMatrix4(zh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Tn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];gi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const s=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const p=i[c];Yo.setFromBufferAttribute(p),this.morphTargetsRelative?(wn.addVectors(gi.min,Yo.min),gi.expandByPoint(wn),wn.addVectors(gi.max,Yo.max),gi.expandByPoint(wn)):(gi.expandByPoint(Yo.min),gi.expandByPoint(Yo.max))}gi.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)wn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(wn));if(i)for(let c=0,h=i.length;c<h;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,v=p.count;d<v;d++)wn.fromBufferAttribute(p,d),m&&(Pr.fromBufferAttribute(e,d),wn.add(Pr)),l=Math.max(l,s.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==s.count)&&(h=new Hi(new Float32Array(4*s.count),4),this.setAttribute("tangent",h));const p=[],m=[];for(let b=0;b<s.count;b++)p[b]=new j,m[b]=new j;const d=new j,v=new j,S=new j,g=new mt,E=new mt,T=new mt,C=new j,y=new j;function x(b,L,q){d.fromBufferAttribute(s,b),v.fromBufferAttribute(s,L),S.fromBufferAttribute(s,q),g.fromBufferAttribute(c,b),E.fromBufferAttribute(c,L),T.fromBufferAttribute(c,q),v.sub(d),S.sub(d),E.sub(g),T.sub(g);const G=1/(E.x*T.y-T.x*E.y);isFinite(G)&&(C.copy(v).multiplyScalar(T.y).addScaledVector(S,-E.y).multiplyScalar(G),y.copy(S).multiplyScalar(E.x).addScaledVector(v,-T.x).multiplyScalar(G),p[b].add(C),p[L].add(C),p[q].add(C),m[b].add(y),m[L].add(y),m[q].add(y))}let z=this.groups;z.length===0&&(z=[{start:0,count:e.count}]);for(let b=0,L=z.length;b<L;++b){const q=z[b],G=q.start,Q=q.count;for(let de=G,ge=G+Q;de<ge;de+=3)x(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const H=new j,w=new j,I=new j,N=new j;function P(b){I.fromBufferAttribute(l,b),N.copy(I);const L=p[b];H.copy(L),H.sub(I.multiplyScalar(I.dot(L))).normalize(),w.crossVectors(N,L);const G=w.dot(m[b])<0?-1:1;h.setXYZW(b,H.x,H.y,H.z,G)}for(let b=0,L=z.length;b<L;++b){const q=z[b],G=q.start,Q=q.count;for(let de=G,ge=G+Q;de<ge;de+=3)P(e.getX(de+0)),P(e.getX(de+1)),P(e.getX(de+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==i.count)s=new Hi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,E=s.count;g<E;g++)s.setXYZ(g,0,0,0);const l=new j,c=new j,h=new j,p=new j,m=new j,d=new j,v=new j,S=new j;if(e)for(let g=0,E=e.count;g<E;g+=3){const T=e.getX(g+0),C=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,C),d.fromBufferAttribute(s,y),p.add(v),m.add(v),d.add(v),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(y,d.x,d.y,d.z)}else for(let g=0,E=i.count;g<E;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),h.fromBufferAttribute(i,g+2),v.subVectors(h,c),S.subVectors(l,c),v.cross(S),s.setXYZ(g+0,v.x,v.y,v.z),s.setXYZ(g+1,v.x,v.y,v.z),s.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)wn.fromBufferAttribute(e,i),wn.normalize(),e.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function e(p,m){const d=p.array,v=p.itemSize,S=p.normalized,g=new d.constructor(m.length*v);let E=0,T=0;for(let C=0,y=m.length;C<y;C++){p.isInterleavedBufferAttribute?E=m[C]*p.data.stride+p.offset:E=m[C]*v;for(let x=0;x<v;x++)g[T++]=d[E++]}return new Hi(g,v,S)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new si,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=e(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let v=0,S=d.length;v<S;v++){const g=d[v],E=e(g,s);m.push(E)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,m=h.length;p<m;p++){const d=h[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(e[d]=m[d]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];e.data.attributes[m]=d.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],v=[];for(let S=0,g=d.length;S<g;S++){const E=d[S];v.push(E.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const d in l){const v=l[d];this.setAttribute(d,v.clone(i))}const c=e.morphAttributes;for(const d in c){const v=[],S=c[d];for(let g=0,E=S.length;g<E;g++)v.push(S[g].clone(i));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let d=0,v=h.length;d<v;d++){const S=h[d];this.addGroup(S.start,S.count,S.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ty=0;class il extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=Gr,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jh,this.blendDst=$h,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){lt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){lt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector2&&s&&s.isVector2||l&&l.isEuler&&s&&s.isEuler||l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(s.blending=this.blending),this.side!==ds&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==jh&&(s.blendSrc=this.blendSrc),this.blendDst!==$h&&(s.blendDst=this.blendDst),this.blendEquation!==zs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==j0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const p in c){const m=c[p];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}fromJSON(e,i){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=i[e.map]||null),e.matcap!==void 0&&(this.matcap=i[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=i[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=i[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=i[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new mt().fromArray(s)}return e.displacementMap!==void 0&&(this.displacementMap=i[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=i[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=i[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=i[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=i[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=i[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=i[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=i[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=i[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=i[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=i[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=i[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=i[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=i[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=i[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=i[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ta=new j,Bh=new j,yc=new j,cs=new j,Fh=new j,Ec=new j,Hh=new j;class yv{constructor(e=new j,i=new j(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ta.copy(this.origin).addScaledVector(this.direction,i),Ta.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Bh.copy(e).add(i).multiplyScalar(.5),yc.copy(i).sub(e).normalize(),cs.copy(this.origin).sub(Bh);const c=e.distanceTo(i)*.5,h=-this.direction.dot(yc),p=cs.dot(this.direction),m=-cs.dot(yc),d=cs.lengthSq(),v=Math.abs(1-h*h);let S,g,E,T;if(v>0)if(S=h*m-p,g=h*p-m,T=c*v,S>=0)if(g>=-T)if(g<=T){const C=1/v;S*=C,g*=C,E=S*(S+h*g+2*p)+g*(h*S+g+2*m)+d}else g=c,S=Math.max(0,-(h*g+p)),E=-S*S+g*(g+2*m)+d;else g=-c,S=Math.max(0,-(h*g+p)),E=-S*S+g*(g+2*m)+d;else g<=-T?(S=Math.max(0,-(-h*c+p)),g=S>0?-c:Math.min(Math.max(-c,-m),c),E=-S*S+g*(g+2*m)+d):g<=T?(S=0,g=Math.min(Math.max(-c,-m),c),E=g*(g+2*m)+d):(S=Math.max(0,-(h*c+p)),g=S>0?c:Math.min(Math.max(-c,-m),c),E=-S*S+g*(g+2*m)+d);else g=h>0?-c:c,S=Math.max(0,-(h*g+p)),E=-S*S+g*(g+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Bh).addScaledVector(yc,g),E}intersectSphere(e,i){Ta.subVectors(e.center,this.origin);const s=Ta.dot(this.direction),l=Ta.dot(Ta)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),p=s-h,m=s+h;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,p,m;const d=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,g=this.origin;return d>=0?(s=(e.min.x-g.x)*d,l=(e.max.x-g.x)*d):(s=(e.max.x-g.x)*d,l=(e.min.x-g.x)*d),v>=0?(c=(e.min.y-g.y)*v,h=(e.max.y-g.y)*v):(c=(e.max.y-g.y)*v,h=(e.min.y-g.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),S>=0?(p=(e.min.z-g.z)*S,m=(e.max.z-g.z)*S):(p=(e.max.z-g.z)*S,m=(e.min.z-g.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ta)!==null}intersectTriangle(e,i,s,l,c){Fh.subVectors(i,e),Ec.subVectors(s,e),Hh.crossVectors(Fh,Ec);let h=this.direction.dot(Hh),p;if(h>0){if(l)return null;p=1}else if(h<0)p=-1,h=-h;else return null;cs.subVectors(this.origin,e);const m=p*this.direction.dot(Ec.crossVectors(cs,Ec));if(m<0)return null;const d=p*this.direction.dot(Fh.cross(cs));if(d<0||m+d>h)return null;const v=-p*cs.dot(Hh);return v<0?null:this.at(v/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Aa extends il{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ks,this.combine=ev,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const p_=new mn,Os=new yv,bc=new nu,m_=new j,Tc=new j,Ac=new j,Rc=new j,Gh=new j,Cc=new j,g_=new j,wc=new j;class Vn extends ai{constructor(e=new si,i=new Aa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Cc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const v=p[m],S=c[m];v!==0&&(Gh.fromBufferAttribute(S,e),h?Cc.addScaledVector(Gh,v):Cc.addScaledVector(Gh.sub(i),v))}i.add(Cc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(c),Os.copy(e.ray).recast(e.near),!(bc.containsPoint(Os.origin)===!1&&(Os.intersectSphere(bc,m_)===null||Os.origin.distanceToSquared(m_)>(e.far-e.near)**2))&&(p_.copy(c).invert(),Os.copy(e.ray).applyMatrix4(p_),!(s.boundingBox!==null&&Os.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Os)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,g=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(h))for(let T=0,C=g.length;T<C;T++){const y=g[T],x=h[y.materialIndex],z=Math.max(y.start,E.start),H=Math.min(p.count,Math.min(y.start+y.count,E.start+E.count));for(let w=z,I=H;w<I;w+=3){const N=p.getX(w),P=p.getX(w+1),b=p.getX(w+2);l=Dc(this,x,e,s,d,v,S,N,P,b),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(p.count,E.start+E.count);for(let y=T,x=C;y<x;y+=3){const z=p.getX(y),H=p.getX(y+1),w=p.getX(y+2);l=Dc(this,h,e,s,d,v,S,z,H,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,C=g.length;T<C;T++){const y=g[T],x=h[y.materialIndex],z=Math.max(y.start,E.start),H=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let w=z,I=H;w<I;w+=3){const N=w,P=w+1,b=w+2;l=Dc(this,x,e,s,d,v,S,N,P,b),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(m.count,E.start+E.count);for(let y=T,x=C;y<x;y+=3){const z=y,H=y+1,w=y+2;l=Dc(this,h,e,s,d,v,S,z,H,w),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ny(o,e,i,s,l,c,h,p){let m;if(e.side===ni?m=s.intersectTriangle(h,c,l,!0,p):m=s.intersectTriangle(l,c,h,e.side===ds,p),m===null)return null;wc.copy(p),wc.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(wc);return d<i.near||d>i.far?null:{distance:d,point:wc.clone(),object:o}}function Dc(o,e,i,s,l,c,h,p,m,d){o.getVertexPosition(p,Tc),o.getVertexPosition(m,Ac),o.getVertexPosition(d,Rc);const v=ny(o,e,i,s,Tc,Ac,Rc,g_);if(v){const S=new j;Bi.getBarycoord(g_,Tc,Ac,Rc,S),l&&(v.uv=Bi.getInterpolatedAttribute(l,p,m,d,S,new mt)),c&&(v.uv1=Bi.getInterpolatedAttribute(c,p,m,d,S,new mt)),h&&(v.normal=Bi.getInterpolatedAttribute(h,p,m,d,S,new j),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const g={a:p,b:m,c:d,normal:new j,materialIndex:0};Bi.getNormal(Tc,Ac,Rc,g.normal),v.face=g,v.barycoord=S}return v}class iy extends Zn{constructor(e=null,i=1,s=1,l,c,h,p,m,d=On,v=On,S,g){super(null,h,p,m,d,v,l,c,S,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vh=new j,ay=new j,sy=new pt;class Is{constructor(e=new j(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Vh.subVectors(s,i).cross(ay.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Vh),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const h=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(h<0||h>1)?null:i.copy(e.start).addScaledVector(l,h)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||sy.getNormalMatrix(e),l=this.coplanarPoint(Vh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ps=new nu,ry=new mt(.5,.5),Uc=new j;class Ev{constructor(e=new Is,i=new Is,s=new Is,l=new Is,c=new Is,h=new Is){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ji,s=!1){const l=this.planes,c=e.elements,h=c[0],p=c[1],m=c[2],d=c[3],v=c[4],S=c[5],g=c[6],E=c[7],T=c[8],C=c[9],y=c[10],x=c[11],z=c[12],H=c[13],w=c[14],I=c[15];if(l[0].setComponents(d-h,E-v,x-T,I-z).normalize(),l[1].setComponents(d+h,E+v,x+T,I+z).normalize(),l[2].setComponents(d+p,E+S,x+C,I+H).normalize(),l[3].setComponents(d-p,E-S,x-C,I-H).normalize(),s)l[4].setComponents(m,g,y,w).normalize(),l[5].setComponents(d-m,E-g,x-y,I-w).normalize();else if(l[4].setComponents(d-m,E-g,x-y,I-w).normalize(),i===ji)l[5].setComponents(d+m,E+g,x+y,I+w).normalize();else if(i===Kc)l[5].setComponents(m,g,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ps)}intersectsSprite(e){Ps.center.set(0,0,0);const i=ry.distanceTo(e.center);return Ps.radius=.7071067811865476+i,Ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ps)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Uc.x=l.normal.x>0?e.max.x:e.min.x,Uc.y=l.normal.y>0?e.max.y:e.min.y,Uc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Uc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bv extends il{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jc=new j,jc=new j,__=new mn,Zo=new yv,Nc=new nu,kh=new j,v_=new j;class oy extends ai{constructor(e=new si,i=new bv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Jc.fromBufferAttribute(i,l-1),jc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Jc.distanceTo(jc);e.setAttribute("lineDistance",new Tn(s,1))}else lt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Nc.copy(s.boundingSphere),Nc.applyMatrix4(l),Nc.radius+=c,e.ray.intersectsSphere(Nc)===!1)return;__.copy(l).invert(),Zo.copy(e.ray).applyMatrix4(__);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,v=s.index,g=s.attributes.position;if(v!==null){const E=Math.max(0,h.start),T=Math.min(v.count,h.start+h.count);for(let C=E,y=T-1;C<y;C+=d){const x=v.getX(C),z=v.getX(C+1),H=Lc(this,e,Zo,m,x,z,C);H&&i.push(H)}if(this.isLineLoop){const C=v.getX(T-1),y=v.getX(E),x=Lc(this,e,Zo,m,C,y,T-1);x&&i.push(x)}}else{const E=Math.max(0,h.start),T=Math.min(g.count,h.start+h.count);for(let C=E,y=T-1;C<y;C+=d){const x=Lc(this,e,Zo,m,C,C+1,C);x&&i.push(x)}if(this.isLineLoop){const C=Lc(this,e,Zo,m,T-1,E,T-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Lc(o,e,i,s,l,c,h){const p=o.geometry.attributes.position;if(Jc.fromBufferAttribute(p,l),jc.fromBufferAttribute(p,c),i.distanceSqToSegment(Jc,jc,kh,v_)>s)return;kh.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(kh);if(!(d<e.near||d>e.far))return{distance:d,point:v_.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const x_=new j,S_=new j;class ly extends oy{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)x_.fromBufferAttribute(i,l),S_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+x_.distanceTo(S_);e.setAttribute("lineDistance",new Tn(s,1))}else lt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tv extends Zn{constructor(e=[],i=Gs,s,l,c,h,p,m,d,v){super(e,i,s,l,c,h,p,m,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Yr extends Zn{constructor(e,i,s=ta,l,c,h,p=On,m=On,d,v=Da,S=1){if(v!==Da&&v!==Hs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:S};super(g,l,c,h,p,m,v,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class cy extends Yr{constructor(e,i=ta,s=Gs,l,c,h=On,p=On,m,d=Da){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,i,s,l,c,h,p,m,d),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Av extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jr extends si{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const p=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],d=[],v=[],S=[];let g=0,E=0;T("z","y","x",-1,-1,s,i,e,h,c,0),T("z","y","x",1,-1,s,i,-e,h,c,1),T("x","z","y",1,1,e,s,i,l,h,2),T("x","z","y",1,-1,e,s,-i,l,h,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Tn(d,3)),this.setAttribute("normal",new Tn(v,3)),this.setAttribute("uv",new Tn(S,2));function T(C,y,x,z,H,w,I,N,P,b,L){const q=w/P,G=I/b,Q=w/2,de=I/2,ge=N/2,J=P+1,O=b+1;let B=0,$=0;const me=new j;for(let Ee=0;Ee<O;Ee++){const U=Ee*G-de;for(let Y=0;Y<J;Y++){const xe=Y*q-Q;me[C]=xe*z,me[y]=U*H,me[x]=ge,d.push(me.x,me.y,me.z),me[C]=0,me[y]=0,me[x]=N>0?1:-1,v.push(me.x,me.y,me.z),S.push(Y/P),S.push(1-Ee/b),B+=1}}for(let Ee=0;Ee<b;Ee++)for(let U=0;U<P;U++){const Y=g+U+J*Ee,xe=g+U+J*(Ee+1),we=g+(U+1)+J*(Ee+1),Pe=g+(U+1)+J*Ee;m.push(Y,xe,Pe),m.push(xe,we,Pe),$+=6}p.addGroup(E,$,L),E+=$,g+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $d extends si{constructor(e=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],h=[],p=[],m=[],d=new j,v=new mt;h.push(0,0,0),p.push(0,0,1),m.push(.5,.5);for(let S=0,g=3;S<=i;S++,g+=3){const E=s+S/i*l;d.x=e*Math.cos(E),d.y=e*Math.sin(E),h.push(d.x,d.y,d.z),p.push(0,0,1),v.x=(h[g]/e+1)/2,v.y=(h[g+1]/e+1)/2,m.push(v.x,v.y)}for(let S=1;S<=i;S++)c.push(S,S+1,0);this.setIndex(c),this.setAttribute("position",new Tn(h,3)),this.setAttribute("normal",new Tn(p,3)),this.setAttribute("uv",new Tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $d(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class iu extends si{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,v=m+1,S=e/p,g=i/m,E=[],T=[],C=[],y=[];for(let x=0;x<v;x++){const z=x*g-h;for(let H=0;H<d;H++){const w=H*S-c;T.push(w,-z,0),C.push(0,0,1),y.push(H/p),y.push(1-x/m)}}for(let x=0;x<m;x++)for(let z=0;z<p;z++){const H=z+d*x,w=z+d*(x+1),I=z+1+d*(x+1),N=z+1+d*x;E.push(H,w,N),E.push(w,I,N)}this.setIndex(E),this.setAttribute("position",new Tn(T,3)),this.setAttribute("normal",new Tn(C,3)),this.setAttribute("uv",new Tn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hr extends si{constructor(e=1,i=.4,s=12,l=48,c=Math.PI*2,h=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:h,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const m=[],d=[],v=[],S=[],g=new j,E=new j,T=new j;for(let C=0;C<=s;C++){const y=h+C/s*p;for(let x=0;x<=l;x++){const z=x/l*c;E.x=(e+i*Math.cos(y))*Math.cos(z),E.y=(e+i*Math.cos(y))*Math.sin(z),E.z=i*Math.sin(y),d.push(E.x,E.y,E.z),g.x=e*Math.cos(z),g.y=e*Math.sin(z),T.subVectors(E,g).normalize(),v.push(T.x,T.y,T.z),S.push(x/l),S.push(C/s)}}for(let C=1;C<=s;C++)for(let y=1;y<=l;y++){const x=(l+1)*C+y-1,z=(l+1)*(C-1)+y-1,H=(l+1)*(C-1)+y,w=(l+1)*C+y;m.push(x,z,w),m.push(z,H,w)}this.setIndex(m),this.setAttribute("position",new Tn(d,3)),this.setAttribute("normal",new Tn(v,3)),this.setAttribute("uv",new Tn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Zr(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];if(M_(l))l.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(M_(l[0])){const c=[];for(let h=0,p=l.length;h<p;h++)c[h]=l[h].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Yn(o){const e={};for(let i=0;i<o.length;i++){const s=Zr(o[i]);for(const l in s)e[l]=s[l]}return e}function M_(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function uy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Rv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ut.workingColorSpace}const $c={clone:Zr,merge:Yn};var fy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends il{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fy,this.fragmentShader=hy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=uy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}fromJSON(e,i){if(super.fromJSON(e,i),e.uniforms!==void 0)for(const s in e.uniforms){const l=e.uniforms[s];switch(this.uniforms[s]={},l.type){case"t":this.uniforms[s].value=i[l.value]||null;break;case"c":this.uniforms[s].value=new Rt().setHex(l.value);break;case"v2":this.uniforms[s].value=new mt().fromArray(l.value);break;case"v3":this.uniforms[s].value=new j().fromArray(l.value);break;case"v4":this.uniforms[s].value=new fn().fromArray(l.value);break;case"m3":this.uniforms[s].value=new pt().fromArray(l.value);break;case"m4":this.uniforms[s].value=new mn().fromArray(l.value);break;default:this.uniforms[s].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)this.extensions[s]=e.extensions[s];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class dy extends Xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class py extends il{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class my extends il{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Oc=new j,Pc=new Qr,Zi=new j;class Cv extends ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Oc,Pc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,Zi.set(1,1,1)).invert()}updateWorldMatrix(e,i,s=!1){super.updateWorldMatrix(e,i,s),this.matrixWorld.decompose(Oc,Pc,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oc,Pc,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const us=new j,y_=new mt,E_=new mt;class Ci extends Cv{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Fd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fd*2*Math.atan(Math.tan(xh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,i){return this.getViewBounds(e,y_,E_),i.subVectors(E_,y_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(xh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,d=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/d,l*=h.width/m,s*=h.height/d}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class ep extends Cv{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,h=c+d*this.view.width,p-=v*this.view.offsetY,m=p-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const Ir=-90,zr=1;class gy extends ai{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ci(Ir,zr,e,i);l.layers=this.layers,this.add(l);const c=new Ci(Ir,zr,e,i);c.layers=this.layers,this.add(c);const h=new Ci(Ir,zr,e,i);h.layers=this.layers,this.add(h);const p=new Ci(Ir,zr,e,i);p.layers=this.layers,this.add(p);const m=new Ci(Ir,zr,e,i);m.layers=this.layers,this.add(m);const d=new Ci(Ir,zr,e,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,p,m]=i;for(const d of i)this.remove(d);if(e===ji)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Kc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of i)this.add(d),d.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,p,m,d,v]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,d),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,v),e.setRenderTarget(S,g,E),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class _y extends Ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class vy{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=xy.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function xy(){this._document.hidden===!1&&this.reset()}class Sy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,lt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const sp=class sp{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};sp.prototype.isMatrix2=!0;let b_=sp;function T_(o,e,i,s){const l=My(s);switch(i){case dv:return o*e;case mv:return o*e/l.components*l.byteLength;case Yd:return o*e/l.components*l.byteLength;case Vs:return o*e*2/l.components*l.byteLength;case Zd:return o*e*2/l.components*l.byteLength;case pv:return o*e*3/l.components*l.byteLength;case Fi:return o*e*4/l.components*l.byteLength;case Kd:return o*e*4/l.components*l.byteLength;case Fc:case Hc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Gc:case Vc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ud:case hd:return Math.max(o,16)*Math.max(e,8)/4;case cd:case fd:return Math.max(o,8)*Math.max(e,8)/2;case dd:case pd:case gd:case _d:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case md:case Wc:case vd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Md:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case yd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ed:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case bd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Td:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Rd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case wd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Nd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Ld:case Od:case Pd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Id:case zd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case qc:case Bd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function My(o){switch(o){case wi:case cv:return{byteLength:1,components:1};case $o:case uv:case _i:return{byteLength:2,components:1};case Wd:case qd:return{byteLength:2,components:4};case ta:case Xd:case Ji:return{byteLength:4,components:1};case fv:case hv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wv(){let o=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&o!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function yy(o){const e=new WeakMap;function i(p,m){const d=p.array,v=p.usage,S=d.byteLength,g=o.createBuffer();o.bindBuffer(m,g),o.bufferData(m,d,v),p.onUploadCallback();let E;if(d instanceof Float32Array)E=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)E=o.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?E=o.HALF_FLOAT:E=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)E=o.SHORT;else if(d instanceof Uint32Array)E=o.UNSIGNED_INT;else if(d instanceof Int32Array)E=o.INT;else if(d instanceof Int8Array)E=o.BYTE;else if(d instanceof Uint8Array)E=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)E=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:E,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,d){const v=m.array,S=m.updateRanges;if(o.bindBuffer(d,p),S.length===0)o.bufferSubData(d,0,v);else{S.sort((E,T)=>E.start-T.start);let g=0;for(let E=1;E<S.length;E++){const T=S[g],C=S[E];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,S[g]=C)}S.length=g+1;for(let E=0,T=S.length;E<T;E++){const C=S[E];o.bufferSubData(d,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=e.get(p);m&&(o.deleteBuffer(m.buffer),e.delete(p))}function h(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const v=e.get(p);(!v||v.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=e.get(p);if(d===void 0)e.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:h}}var Ey=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,by=`#ifdef USE_ALPHAHASH
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
#endif`,Ty=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ay=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ry=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wy=`#ifdef USE_AOMAP
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
#endif`,Dy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ny=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ly=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Oy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Py=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Iy=`#ifdef USE_IRIDESCENCE
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
#endif`,zy=`#ifdef USE_BUMPMAP
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
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qy=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Yy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ky=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$y="gl_FragColor = linearToOutputTexel( gl_FragColor );",eE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
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
#endif`,aE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uE=`#ifdef USE_GRADIENTMAP
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
}`,fE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pE=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif
#include <lightprobes_pars_fragment>`,mE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,gE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,ME=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yE=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,EE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,bE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,AE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LE=`#if defined( USE_POINTS_UV )
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
#endif`,OE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,HE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,VE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,kE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qE=`#ifdef USE_NORMALMAP
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
#endif`,YE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ib=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ab=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ob=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,lb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ub=`#ifdef USE_SKINNING
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
#endif`,fb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hb=`#ifdef USE_SKINNING
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
#endif`,db=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gb=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_b=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vb=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Eb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bb=`uniform sampler2D t2D;
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
}`,Tb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ab=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Db=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ub=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,Nb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ob=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zb=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,Bb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Fb=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,Hb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Gb=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,Vb=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,kb=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,Xb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wb=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,qb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Yb=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,Zb=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Kb=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,Qb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,Jb=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,jb=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,$b=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,eT=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,tT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,nT=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Mt={alphahash_fragment:Ey,alphahash_pars_fragment:by,alphamap_fragment:Ty,alphamap_pars_fragment:Ay,alphatest_fragment:Ry,alphatest_pars_fragment:Cy,aomap_fragment:wy,aomap_pars_fragment:Dy,batching_pars_vertex:Uy,batching_vertex:Ny,begin_vertex:Ly,beginnormal_vertex:Oy,bsdfs:Py,iridescence_fragment:Iy,bumpmap_pars_fragment:zy,clipping_planes_fragment:By,clipping_planes_pars_fragment:Fy,clipping_planes_pars_vertex:Hy,clipping_planes_vertex:Gy,color_fragment:Vy,color_pars_fragment:ky,color_pars_vertex:Xy,color_vertex:Wy,common:qy,cube_uv_reflection_fragment:Yy,defaultnormal_vertex:Zy,displacementmap_pars_vertex:Ky,displacementmap_vertex:Qy,emissivemap_fragment:Jy,emissivemap_pars_fragment:jy,colorspace_fragment:$y,colorspace_pars_fragment:eE,envmap_fragment:tE,envmap_common_pars_fragment:nE,envmap_pars_fragment:iE,envmap_pars_vertex:aE,envmap_physical_pars_fragment:mE,envmap_vertex:sE,fog_vertex:rE,fog_pars_vertex:oE,fog_fragment:lE,fog_pars_fragment:cE,gradientmap_pars_fragment:uE,lightmap_pars_fragment:fE,lights_lambert_fragment:hE,lights_lambert_pars_fragment:dE,lights_pars_begin:pE,lights_toon_fragment:gE,lights_toon_pars_fragment:_E,lights_phong_fragment:vE,lights_phong_pars_fragment:xE,lights_physical_fragment:SE,lights_physical_pars_fragment:ME,lights_fragment_begin:yE,lights_fragment_maps:EE,lights_fragment_end:bE,lightprobes_pars_fragment:TE,logdepthbuf_fragment:AE,logdepthbuf_pars_fragment:RE,logdepthbuf_pars_vertex:CE,logdepthbuf_vertex:wE,map_fragment:DE,map_pars_fragment:UE,map_particle_fragment:NE,map_particle_pars_fragment:LE,metalnessmap_fragment:OE,metalnessmap_pars_fragment:PE,morphinstance_vertex:IE,morphcolor_vertex:zE,morphnormal_vertex:BE,morphtarget_pars_vertex:FE,morphtarget_vertex:HE,normal_fragment_begin:GE,normal_fragment_maps:VE,normal_pars_fragment:kE,normal_pars_vertex:XE,normal_vertex:WE,normalmap_pars_fragment:qE,clearcoat_normal_fragment_begin:YE,clearcoat_normal_fragment_maps:ZE,clearcoat_pars_fragment:KE,iridescence_pars_fragment:QE,opaque_fragment:JE,packing:jE,premultiplied_alpha_fragment:$E,project_vertex:eb,dithering_fragment:tb,dithering_pars_fragment:nb,roughnessmap_fragment:ib,roughnessmap_pars_fragment:ab,shadowmap_pars_fragment:sb,shadowmap_pars_vertex:rb,shadowmap_vertex:ob,shadowmask_pars_fragment:lb,skinbase_vertex:cb,skinning_pars_vertex:ub,skinning_vertex:fb,skinnormal_vertex:hb,specularmap_fragment:db,specularmap_pars_fragment:pb,tonemapping_fragment:mb,tonemapping_pars_fragment:gb,transmission_fragment:_b,transmission_pars_fragment:vb,uv_pars_fragment:xb,uv_pars_vertex:Sb,uv_vertex:Mb,worldpos_vertex:yb,background_vert:Eb,background_frag:bb,backgroundCube_vert:Tb,backgroundCube_frag:Ab,cube_vert:Rb,cube_frag:Cb,depth_vert:wb,depth_frag:Db,distance_vert:Ub,distance_frag:Nb,equirect_vert:Lb,equirect_frag:Ob,linedashed_vert:Pb,linedashed_frag:Ib,meshbasic_vert:zb,meshbasic_frag:Bb,meshlambert_vert:Fb,meshlambert_frag:Hb,meshmatcap_vert:Gb,meshmatcap_frag:Vb,meshnormal_vert:kb,meshnormal_frag:Xb,meshphong_vert:Wb,meshphong_frag:qb,meshphysical_vert:Yb,meshphysical_frag:Zb,meshtoon_vert:Kb,meshtoon_frag:Qb,points_vert:Jb,points_frag:jb,shadow_vert:$b,shadow_frag:eT,sprite_vert:tT,sprite_frag:nT},Be={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Qi={basic:{uniforms:Yn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Yn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Yn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Yn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Yn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Yn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Yn([Be.points,Be.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Yn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Yn([Be.common,Be.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Yn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Yn([Be.sprite,Be.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:Yn([Be.common,Be.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:Yn([Be.lights,Be.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Qi.physical={uniforms:Yn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Ic={r:0,b:0,g:0},iT=new mn,Dv=new pt;Dv.set(-1,0,0,0,1,0,0,0,1);function aT(o,e,i,s,l,c){const h=new Rt(0);let p=l===!0?0:1,m,d,v=null,S=0,g=null;function E(z){let H=z.isScene===!0?z.background:null;if(H&&H.isTexture){const w=z.backgroundBlurriness>0;H=e.get(H,w)}return H}function T(z){let H=!1;const w=E(z);w===null?y(h,p):w&&w.isColor&&(y(w,1),H=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||H)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function C(z,H){const w=E(H);w&&(w.isCubeTexture||w.mapping===tu)?(d===void 0&&(d=new Vn(new Jr(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Zr(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,N,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),d.material.uniforms.envMap.value=w,d.material.uniforms.backgroundBlurriness.value=H.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(iT.makeRotationFromEuler(H.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Dv),d.material.toneMapped=Ut.getTransfer(w.colorSpace)!==Yt,(v!==w||S!==w.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,v=w,S=w.version,g=o.toneMapping),d.layers.enableAll(),z.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(m===void 0&&(m=new Vn(new iu(2,2),new Xn({name:"BackgroundMaterial",uniforms:Zr(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=w,m.material.uniforms.backgroundIntensity.value=H.backgroundIntensity,m.material.toneMapped=Ut.getTransfer(w.colorSpace)!==Yt,w.matrixAutoUpdate===!0&&w.updateMatrix(),m.material.uniforms.uvTransform.value.copy(w.matrix),(v!==w||S!==w.version||g!==o.toneMapping)&&(m.material.needsUpdate=!0,v=w,S=w.version,g=o.toneMapping),m.layers.enableAll(),z.unshift(m,m.geometry,m.material,0,0,null))}function y(z,H){z.getRGB(Ic,Rv(o)),i.buffers.color.setClear(Ic.r,Ic.g,Ic.b,H,c)}function x(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(z,H=1){h.set(z),p=H,y(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(z){p=z,y(h,p)},render:T,addToRenderList:C,dispose:x}}function sT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,h=!1;function p(G,Q,de,ge,J){let O=!1;const B=S(G,ge,de,Q);c!==B&&(c=B,d(c.object)),O=E(G,ge,de,J),O&&T(G,ge,de,J),J!==null&&e.update(J,o.ELEMENT_ARRAY_BUFFER),(O||h)&&(h=!1,w(G,Q,de,ge),J!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function m(){return o.createVertexArray()}function d(G){return o.bindVertexArray(G)}function v(G){return o.deleteVertexArray(G)}function S(G,Q,de,ge){const J=ge.wireframe===!0;let O=s[Q.id];O===void 0&&(O={},s[Q.id]=O);const B=G.isInstancedMesh===!0?G.id:0;let $=O[B];$===void 0&&($={},O[B]=$);let me=$[de.id];me===void 0&&(me={},$[de.id]=me);let Ee=me[J];return Ee===void 0&&(Ee=g(m()),me[J]=Ee),Ee}function g(G){const Q=[],de=[],ge=[];for(let J=0;J<i;J++)Q[J]=0,de[J]=0,ge[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:de,attributeDivisors:ge,object:G,attributes:{},index:null}}function E(G,Q,de,ge){const J=c.attributes,O=Q.attributes;let B=0;const $=de.getAttributes();for(const me in $)if($[me].location>=0){const U=J[me];let Y=O[me];if(Y===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(Y=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(Y=G.instanceColor)),U===void 0||U.attribute!==Y||Y&&U.data!==Y.data)return!0;B++}return c.attributesNum!==B||c.index!==ge}function T(G,Q,de,ge){const J={},O=Q.attributes;let B=0;const $=de.getAttributes();for(const me in $)if($[me].location>=0){let U=O[me];U===void 0&&(me==="instanceMatrix"&&G.instanceMatrix&&(U=G.instanceMatrix),me==="instanceColor"&&G.instanceColor&&(U=G.instanceColor));const Y={};Y.attribute=U,U&&U.data&&(Y.data=U.data),J[me]=Y,B++}c.attributes=J,c.attributesNum=B,c.index=ge}function C(){const G=c.newAttributes;for(let Q=0,de=G.length;Q<de;Q++)G[Q]=0}function y(G){x(G,0)}function x(G,Q){const de=c.newAttributes,ge=c.enabledAttributes,J=c.attributeDivisors;de[G]=1,ge[G]===0&&(o.enableVertexAttribArray(G),ge[G]=1),J[G]!==Q&&(o.vertexAttribDivisor(G,Q),J[G]=Q)}function z(){const G=c.newAttributes,Q=c.enabledAttributes;for(let de=0,ge=Q.length;de<ge;de++)Q[de]!==G[de]&&(o.disableVertexAttribArray(de),Q[de]=0)}function H(G,Q,de,ge,J,O,B){B===!0?o.vertexAttribIPointer(G,Q,de,J,O):o.vertexAttribPointer(G,Q,de,ge,J,O)}function w(G,Q,de,ge){C();const J=ge.attributes,O=de.getAttributes(),B=Q.defaultAttributeValues;for(const $ in O){const me=O[$];if(me.location>=0){let Ee=J[$];if(Ee===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(Ee=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(Ee=G.instanceColor)),Ee!==void 0){const U=Ee.normalized,Y=Ee.itemSize,xe=e.get(Ee);if(xe===void 0)continue;const we=xe.buffer,Pe=xe.type,se=xe.bytesPerElement,Me=Pe===o.INT||Pe===o.UNSIGNED_INT||Ee.gpuType===Xd;if(Ee.isInterleavedBufferAttribute){const ye=Ee.data,He=ye.stride,st=Ee.offset;if(ye.isInstancedInterleavedBuffer){for(let tt=0;tt<me.locationSize;tt++)x(me.location+tt,ye.meshPerAttribute);G.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let tt=0;tt<me.locationSize;tt++)y(me.location+tt);o.bindBuffer(o.ARRAY_BUFFER,we);for(let tt=0;tt<me.locationSize;tt++)H(me.location+tt,Y/me.locationSize,Pe,U,He*se,(st+Y/me.locationSize*tt)*se,Me)}else{if(Ee.isInstancedBufferAttribute){for(let ye=0;ye<me.locationSize;ye++)x(me.location+ye,Ee.meshPerAttribute);G.isInstancedMesh!==!0&&ge._maxInstanceCount===void 0&&(ge._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ye=0;ye<me.locationSize;ye++)y(me.location+ye);o.bindBuffer(o.ARRAY_BUFFER,we);for(let ye=0;ye<me.locationSize;ye++)H(me.location+ye,Y/me.locationSize,Pe,U,Y*se,Y/me.locationSize*ye*se,Me)}}else if(B!==void 0){const U=B[$];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(me.location,U);break;case 3:o.vertexAttrib3fv(me.location,U);break;case 4:o.vertexAttrib4fv(me.location,U);break;default:o.vertexAttrib1fv(me.location,U)}}}}z()}function I(){L();for(const G in s){const Q=s[G];for(const de in Q){const ge=Q[de];for(const J in ge){const O=ge[J];for(const B in O)v(O[B].object),delete O[B];delete ge[J]}}delete s[G]}}function N(G){if(s[G.id]===void 0)return;const Q=s[G.id];for(const de in Q){const ge=Q[de];for(const J in ge){const O=ge[J];for(const B in O)v(O[B].object),delete O[B];delete ge[J]}}delete s[G.id]}function P(G){for(const Q in s){const de=s[Q];for(const ge in de){const J=de[ge];if(J[G.id]===void 0)continue;const O=J[G.id];for(const B in O)v(O[B].object),delete O[B];delete J[G.id]}}}function b(G){for(const Q in s){const de=s[Q],ge=G.isInstancedMesh===!0?G.id:0,J=de[ge];if(J!==void 0){for(const O in J){const B=J[O];for(const $ in B)v(B[$].object),delete B[$];delete J[O]}delete de[ge],Object.keys(de).length===0&&delete s[Q]}}}function L(){q(),h=!0,c!==l&&(c=l,d(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:q,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfObject:b,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:y,disableUnusedAttributes:z}}function rT(o,e,i){let s;function l(m){s=m}function c(m,d){o.drawArrays(s,m,d),i.update(d,s,1)}function h(m,d,v){v!==0&&(o.drawArraysInstanced(s,m,d,v),i.update(d,s,v))}function p(m,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,d,0,v);let g=0;for(let E=0;E<v;E++)g+=d[E];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function oT(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Fi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(P){const b=P===_i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==wi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Ji&&!b)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const v=m(d);v!==d&&(lt("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const S=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const E=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),x=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),H=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=o.getParameter(o.MAX_SAMPLES),N=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:E,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:z,maxVaryings:H,maxFragmentUniforms:w,maxSamples:I,samples:N}}function lT(o){const e=this;let i=null,s=0,l=!1,c=!1;const h=new Is,p=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const E=S.length!==0||g||s!==0||l;return l=g,s=S.length,E},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){i=v(S,g,0)},this.setState=function(S,g,E){const T=S.clippingPlanes,C=S.clipIntersection,y=S.clipShadows,x=o.get(S);if(!l||T===null||T.length===0||c&&!y)c?v(null):d();else{const z=c?0:s,H=z*4;let w=x.clippingState||null;m.value=w,w=v(T,g,H,E);for(let I=0;I!==H;++I)w[I]=i[I];x.clippingState=w,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=z}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(S,g,E,T){const C=S!==null?S.length:0;let y=null;if(C!==0){if(y=m.value,T!==!0||y===null){const x=E+C*4,z=g.matrixWorldInverse;p.getNormalMatrix(z),(y===null||y.length<x)&&(y=new Float32Array(x));for(let H=0,w=E;H!==C;++H,w+=4)h.copy(S[H]).applyMatrix4(z,p),h.normal.toArray(y,w),y[w+3]=h.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const hs=4,A_=[.125,.215,.35,.446,.526,.582],Bs=20,cT=256,Ko=new ep,R_=new Rt;let Xh=null,Wh=0,qh=0,Yh=!1;const uT=new j;class C_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:p=uT}=c;Xh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=U_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=D_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xh,Wh,qh),this._renderer.xr.enabled=Yh,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Gs||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xh=this._renderer.getRenderTarget(),Wh=this._renderer.getActiveCubeFace(),qh=this._renderer.getActiveMipmapLevel(),Yh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:_i,format:Fi,colorSpace:Yc,depthBuffer:!1},l=w_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=w_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fT(c)),this._blurMaterial=dT(c,e,i),this._ggxMaterial=hT(c,e,i)}return l}_compileMaterial(e){const i=new Vn(new si,e);this._renderer.compile(i,Ko)}_sceneToCubeUV(e,i,s,l,c){const m=new Ci(90,1,i,s),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,E=S.toneMapping;S.getClearColor(R_),S.toneMapping=ea,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vn(new Jr,new Aa({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const z=e.background;z?z.isColor&&(y.color.copy(z),e.background=null,x=!0):(y.color.copy(R_),x=!0);for(let H=0;H<6;H++){const w=H%3;w===0?(m.up.set(0,d[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[H],c.y,c.z)):w===1?(m.up.set(0,0,d[H]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[H],c.z)):(m.up.set(0,d[H],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[H]));const I=this._cubeSize;Br(l,w*I,H>2?I:0,I,I),S.setRenderTarget(l),x&&S.render(C,m),S.render(e,m)}S.toneMapping=E,S.autoClear=g,e.background=z}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Gs||e.mapping===qr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=U_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=D_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const p=c.uniforms;p.envMap.value=e;const m=this._cubeSize;Br(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Ko)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,p=this._lodMeshes[s];p.material=h;const m=h.uniforms,d=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),S=Math.sqrt(d*d-v*v),g=0+d*1.25,E=S*g,{_lodMax:T}=this,C=this._sizeLods[s],y=3*C*(s>T-hs?s-T+hs:0),x=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=E,m.mipInt.value=T-i,Br(c,y,x,3*C,2*C),l.setRenderTarget(c),l.render(p,Ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Br(e,y,x,3*C,2*C),l.setRenderTarget(e),l.render(p,Ko)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,p){const m=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[l];S.material=d;const g=d.uniforms,E=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Bs-1),C=c/T,y=isFinite(c)?1+Math.floor(v*C):Bs;y>Bs&&lt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Bs}`);const x=[];let z=0;for(let P=0;P<Bs;++P){const b=P/C,L=Math.exp(-b*b/2);x.push(L),P===0?z+=L:P<y&&(z+=2*L)}for(let P=0;P<x.length;P++)x[P]=x[P]/z;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=x,g.latitudinal.value=h==="latitudinal",p&&(g.poleAxis.value=p);const{_lodMax:H}=this;g.dTheta.value=T,g.mipInt.value=H-s;const w=this._sizeLods[l],I=3*w*(l>H-hs?l-H+hs:0),N=4*(this._cubeSize-w);Br(i,I,N,3*w,2*w),m.setRenderTarget(i),m.render(S,Ko)}}function fT(o){const e=[],i=[],s=[];let l=o;const c=o-hs+1+A_.length;for(let h=0;h<c;h++){const p=Math.pow(2,l);e.push(p);let m=1/p;h>o-hs?m=A_[h-o+hs-1]:h===0&&(m=0),i.push(m);const d=1/(p-2),v=-d,S=1+d,g=[v,v,S,v,S,S,v,v,S,S,v,S],E=6,T=6,C=3,y=2,x=1,z=new Float32Array(C*T*E),H=new Float32Array(y*T*E),w=new Float32Array(x*T*E);for(let N=0;N<E;N++){const P=N%3*2/3-1,b=N>2?0:-1,L=[P,b,0,P+2/3,b,0,P+2/3,b+1,0,P,b,0,P+2/3,b+1,0,P,b+1,0];z.set(L,C*T*N),H.set(g,y*T*N);const q=[N,N,N,N,N,N];w.set(q,x*T*N)}const I=new si;I.setAttribute("position",new Hi(z,C)),I.setAttribute("uv",new Hi(H,y)),I.setAttribute("faceIndex",new Hi(w,x)),s.push(new Vn(I,null)),l>hs&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function w_(o,e,i){const s=new ii(o,e,i);return s.texture.mapping=tu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Br(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function hT(o,e,i){return new Xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:au(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function dT(o,e,i){const s=new Float32Array(Bs),l=new j(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:au(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function D_(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function U_(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function au(){return`

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
	`}class Uv extends ii{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Tv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Jr(5,5,5),c=new Xn({name:"CubemapFromEquirect",uniforms:Zr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ni,blending:$i});c.uniforms.tEquirect.value=i;const h=new Vn(l,c),p=i.minFilter;return i.minFilter===Fs&&(i.minFilter=kn),new gy(1,10,this).update(e,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}function pT(o){let e=new WeakMap,i=new WeakMap,s=null;function l(g,E=!1){return g==null?null:E?h(g):c(g)}function c(g){if(g&&g.isTexture){const E=g.mapping;if(E===gh||E===_h)if(e.has(g)){const T=e.get(g).texture;return p(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new Uv(T.height);return C.fromEquirectangularTexture(o,g),e.set(g,C),g.addEventListener("dispose",d),p(C.texture,g.mapping)}else return null}}return g}function h(g){if(g&&g.isTexture){const E=g.mapping,T=E===gh||E===_h,C=E===Gs||E===qr;if(T||C){let y=i.get(g);const x=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return s===null&&(s=new C_(o)),y=T?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const z=g.image;return T&&z&&z.height>0||C&&z&&m(z)?(s===null&&(s=new C_(o)),y=T?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",v),y.texture):null}}}return g}function p(g,E){return E===gh?g.mapping=Gs:E===_h&&(g.mapping=qr),g}function m(g){let E=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&E++;return E===T}function d(g){const E=g.target;E.removeEventListener("dispose",d);const T=e.get(E);T!==void 0&&(e.delete(E),T.dispose())}function v(g){const E=g.target;E.removeEventListener("dispose",v);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function S(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function mT(o){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=o.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&kr("WebGLRenderer: "+s+" extension not supported."),l}}}function gT(o,e,i,s){const l={},c=new WeakMap;function h(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",h),delete l[g.id];const E=c.get(g);E&&(e.remove(E),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function p(S,g){return l[g.id]===!0||(g.addEventListener("dispose",h),l[g.id]=!0,i.memory.geometries++),g}function m(S){const g=S.attributes;for(const E in g)e.update(g[E],o.ARRAY_BUFFER)}function d(S){const g=[],E=S.index,T=S.attributes.position;let C=0;if(T===void 0)return;if(E!==null){const z=E.array;C=E.version;for(let H=0,w=z.length;H<w;H+=3){const I=z[H+0],N=z[H+1],P=z[H+2];g.push(I,N,N,P,P,I)}}else{const z=T.array;C=T.version;for(let H=0,w=z.length/3-1;H<w;H+=3){const I=H+0,N=H+1,P=H+2;g.push(I,N,N,P,P,I)}}const y=new(T.count>=65535?Mv:Sv)(g,1);y.version=C;const x=c.get(S);x&&e.remove(x),c.set(S,y)}function v(S){const g=c.get(S);if(g){const E=S.index;E!==null&&g.version<E.version&&d(S)}else d(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:v}}function _T(o,e,i){let s;function l(S){s=S}let c,h;function p(S){c=S.type,h=S.bytesPerElement}function m(S,g){o.drawElements(s,g,c,S*h),i.update(g,s,1)}function d(S,g,E){E!==0&&(o.drawElementsInstanced(s,g,c,S*h,E),i.update(g,s,E))}function v(S,g,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,S,0,E);let C=0;for(let y=0;y<E;y++)C+=g[y];i.update(C,s,1)}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=v}function vT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:Ot("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function xT(o,e,i){const s=new WeakMap,l=new fn;function c(h,p,m){const d=h.morphTargetInfluences,v=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=v!==void 0?v.length:0;let g=s.get(p);if(g===void 0||g.count!==S){let q=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",q)};var E=q;g!==void 0&&g.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,x=p.morphAttributes.position||[],z=p.morphAttributes.normal||[],H=p.morphAttributes.color||[];let w=0;T===!0&&(w=1),C===!0&&(w=2),y===!0&&(w=3);let I=p.attributes.position.count*w,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*N*4*S),b=new _v(P,I,N,S);b.type=Ji,b.needsUpdate=!0;const L=w*4;for(let G=0;G<S;G++){const Q=x[G],de=z[G],ge=H[G],J=I*N*4*G;for(let O=0;O<Q.count;O++){const B=O*L;T===!0&&(l.fromBufferAttribute(Q,O),P[J+B+0]=l.x,P[J+B+1]=l.y,P[J+B+2]=l.z,P[J+B+3]=0),C===!0&&(l.fromBufferAttribute(de,O),P[J+B+4]=l.x,P[J+B+5]=l.y,P[J+B+6]=l.z,P[J+B+7]=0),y===!0&&(l.fromBufferAttribute(ge,O),P[J+B+8]=l.x,P[J+B+9]=l.y,P[J+B+10]=l.z,P[J+B+11]=ge.itemSize===4?l.w:1)}}g={count:S,texture:b,size:new mt(I,N)},s.set(p,g),p.addEventListener("dispose",q)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let y=0;y<d.length;y++)T+=d[y];const C=p.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",d)}m.getUniforms().setValue(o,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:c}}function ST(o,e,i,s,l){let c=new WeakMap;function h(d){const v=l.render.frame,S=d.geometry,g=e.get(d,S);if(c.get(g)!==v&&(e.update(g),c.set(g,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==v&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),c.set(d,v))),d.isSkinnedMesh){const E=d.skeleton;c.get(E)!==v&&(E.update(),c.set(E,v))}return g}function p(){c=new WeakMap}function m(d){const v=d.target;v.removeEventListener("dispose",m),s.releaseStatesOfObject(v),i.remove(v.instanceMatrix),v.instanceColor!==null&&i.remove(v.instanceColor)}return{update:h,dispose:p}}const MT={[tv]:"LINEAR_TONE_MAPPING",[nv]:"REINHARD_TONE_MAPPING",[iv]:"CINEON_TONE_MAPPING",[av]:"ACES_FILMIC_TONE_MAPPING",[rv]:"AGX_TONE_MAPPING",[ov]:"NEUTRAL_TONE_MAPPING",[sv]:"CUSTOM_TONE_MAPPING"};function yT(o,e,i,s,l,c){const h=new ii(e,i,{type:o,depthBuffer:l,stencilBuffer:c,samples:s?4:0,depthTexture:l?new Yr(e,i):void 0}),p=new ii(e,i,{type:_i,depthBuffer:!1,stencilBuffer:!1}),m=new si;m.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),m.setAttribute("uv",new Tn([0,2,0,0,2,0],2));const d=new dy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Vn(m,d),S=new ep(-1,1,1,-1,0,1);let g=null,E=null,T=!1,C,y=null,x=[],z=!1;this.setSize=function(H,w){h.setSize(H,w),p.setSize(H,w);for(let I=0;I<x.length;I++){const N=x[I];N.setSize&&N.setSize(H,w)}},this.setEffects=function(H){x=H,z=x.length>0&&x[0].isRenderPass===!0;const w=h.width,I=h.height;for(let N=0;N<x.length;N++){const P=x[N];P.setSize&&P.setSize(w,I)}},this.begin=function(H,w){if(T||H.toneMapping===ea&&x.length===0)return!1;if(y=w,w!==null){const I=w.width,N=w.height;(h.width!==I||h.height!==N)&&this.setSize(I,N)}return z===!1&&H.setRenderTarget(h),C=H.toneMapping,H.toneMapping=ea,!0},this.hasRenderPass=function(){return z},this.end=function(H,w){H.toneMapping=C,T=!0;let I=h,N=p;for(let P=0;P<x.length;P++){const b=x[P];if(b.enabled!==!1&&(b.render(H,N,I,w),b.needsSwap!==!1)){const L=I;I=N,N=L}}if(g!==H.outputColorSpace||E!==H.toneMapping){g=H.outputColorSpace,E=H.toneMapping,d.defines={},Ut.getTransfer(g)===Yt&&(d.defines.SRGB_TRANSFER="");const P=MT[E];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=I.texture,H.setRenderTarget(y),H.render(v,S),y=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){h.depthTexture&&h.depthTexture.dispose(),h.dispose(),p.dispose(),m.dispose(),d.dispose()}}const Nv=new Zn,Hd=new Yr(1,1),Lv=new _v,Ov=new kM,Pv=new Tv,N_=[],L_=[],O_=new Float32Array(16),P_=new Float32Array(9),I_=new Float32Array(4);function jr(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=N_[l];if(c===void 0&&(c=new Float32Array(l),N_[l]=c),e!==0){s.toArray(c,0);for(let h=1,p=0;h!==e;++h)p+=i,o[h].toArray(c,p)}return c}function An(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Rn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function su(o,e){let i=L_[e];i===void 0&&(i=new Int32Array(e),L_[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function ET(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function bT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;o.uniform2fv(this.addr,e),Rn(i,e)}}function TT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(An(i,e))return;o.uniform3fv(this.addr,e),Rn(i,e)}}function AT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;o.uniform4fv(this.addr,e),Rn(i,e)}}function RT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(An(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Rn(i,e)}else{if(An(i,s))return;I_.set(s),o.uniformMatrix2fv(this.addr,!1,I_),Rn(i,s)}}function CT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(An(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Rn(i,e)}else{if(An(i,s))return;P_.set(s),o.uniformMatrix3fv(this.addr,!1,P_),Rn(i,s)}}function wT(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(An(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Rn(i,e)}else{if(An(i,s))return;O_.set(s),o.uniformMatrix4fv(this.addr,!1,O_),Rn(i,s)}}function DT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function UT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;o.uniform2iv(this.addr,e),Rn(i,e)}}function NT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(An(i,e))return;o.uniform3iv(this.addr,e),Rn(i,e)}}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;o.uniform4iv(this.addr,e),Rn(i,e)}}function OT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function PT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(An(i,e))return;o.uniform2uiv(this.addr,e),Rn(i,e)}}function IT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(An(i,e))return;o.uniform3uiv(this.addr,e),Rn(i,e)}}function zT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(An(i,e))return;o.uniform4uiv(this.addr,e),Rn(i,e)}}function BT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Hd.compareFunction=i.isReversedDepthBuffer()?Jd:Qd,c=Hd):c=Nv,i.setTexture2D(e||c,l)}function FT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Ov,l)}function HT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Pv,l)}function GT(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Lv,l)}function VT(o){switch(o){case 5126:return ET;case 35664:return bT;case 35665:return TT;case 35666:return AT;case 35674:return RT;case 35675:return CT;case 35676:return wT;case 5124:case 35670:return DT;case 35667:case 35671:return UT;case 35668:case 35672:return NT;case 35669:case 35673:return LT;case 5125:return OT;case 36294:return PT;case 36295:return IT;case 36296:return zT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return FT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}function kT(o,e){o.uniform1fv(this.addr,e)}function XT(o,e){const i=jr(e,this.size,2);o.uniform2fv(this.addr,i)}function WT(o,e){const i=jr(e,this.size,3);o.uniform3fv(this.addr,i)}function qT(o,e){const i=jr(e,this.size,4);o.uniform4fv(this.addr,i)}function YT(o,e){const i=jr(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function ZT(o,e){const i=jr(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function KT(o,e){const i=jr(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function QT(o,e){o.uniform1iv(this.addr,e)}function JT(o,e){o.uniform2iv(this.addr,e)}function jT(o,e){o.uniform3iv(this.addr,e)}function $T(o,e){o.uniform4iv(this.addr,e)}function e1(o,e){o.uniform1uiv(this.addr,e)}function t1(o,e){o.uniform2uiv(this.addr,e)}function n1(o,e){o.uniform3uiv(this.addr,e)}function i1(o,e){o.uniform4uiv(this.addr,e)}function a1(o,e,i){const s=this.cache,l=e.length,c=su(i,l);An(s,c)||(o.uniform1iv(this.addr,c),Rn(s,c));let h;this.type===o.SAMPLER_2D_SHADOW?h=Hd:h=Nv;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||h,c[p])}function s1(o,e,i){const s=this.cache,l=e.length,c=su(i,l);An(s,c)||(o.uniform1iv(this.addr,c),Rn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Ov,c[h])}function r1(o,e,i){const s=this.cache,l=e.length,c=su(i,l);An(s,c)||(o.uniform1iv(this.addr,c),Rn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Pv,c[h])}function o1(o,e,i){const s=this.cache,l=e.length,c=su(i,l);An(s,c)||(o.uniform1iv(this.addr,c),Rn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Lv,c[h])}function l1(o){switch(o){case 5126:return kT;case 35664:return XT;case 35665:return WT;case 35666:return qT;case 35674:return YT;case 35675:return ZT;case 35676:return KT;case 5124:case 35670:return QT;case 35667:case 35671:return JT;case 35668:case 35672:return jT;case 35669:case 35673:return $T;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return a1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return r1;case 36289:case 36303:case 36311:case 36292:return o1}}class c1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=VT(i.type)}}class u1{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=l1(i.type)}}class f1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const Zh=/(\w+)(\])?(\[|\.)?/g;function z_(o,e){o.seq.push(e),o.map[e.id]=e}function h1(o,e,i){const s=o.name,l=s.length;for(Zh.lastIndex=0;;){const c=Zh.exec(s),h=Zh.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&h+2===l){z_(i,d===void 0?new c1(p,o,e):new u1(p,o,e));break}else{let S=i.map[p];S===void 0&&(S=new f1(p),z_(i,S)),i=S}}}class kc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const p=e.getActiveUniform(i,h),m=e.getUniformLocation(i,p.name);h1(p,m,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function B_(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const d1=37297;let p1=0;function m1(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const p=h+1;s.push(`${p===e?">":" "} ${p}: ${i[h]}`)}return s.join(`
`)}const F_=new pt;function g1(o){Ut._getMatrix(F_,Ut.workingColorSpace,o);const e=`mat3( ${F_.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(o)){case Zc:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function H_(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+m1(o.getShaderSource(e),p)}else return c}function _1(o,e){const i=g1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const v1={[tv]:"Linear",[nv]:"Reinhard",[iv]:"Cineon",[av]:"ACESFilmic",[rv]:"AgX",[ov]:"Neutral",[sv]:"Custom"};function x1(o,e){const i=v1[e];return i===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zc=new j;function S1(){Ut.getLuminanceCoefficients(zc);const o=zc.x.toFixed(4),e=zc.y.toFixed(4),i=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function y1(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function E1(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),h=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:p}}return i}function jo(o){return o!==""}function G_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function V_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(o){return o.replace(b1,A1)}const T1=new Map;function A1(o,e){let i=Mt[e];if(i===void 0){const s=T1.get(e);if(s!==void 0)i=Mt[s],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Gd(i)}const R1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function k_(o){return o.replace(R1,C1)}function C1(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function X_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const w1={[Bc]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function D1(o){return w1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const U1={[Gs]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE",[tu]:"ENVMAP_TYPE_CUBE_UV"};function N1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":U1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const L1={[qr]:"ENVMAP_MODE_REFRACTION"};function O1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":L1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const P1={[ev]:"ENVMAP_BLENDING_MULTIPLY",[yM]:"ENVMAP_BLENDING_MIX",[EM]:"ENVMAP_BLENDING_ADD"};function I1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":P1[o.combine]||"ENVMAP_BLENDING_NONE"}function z1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function B1(o,e,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,p=i.fragmentShader;const m=D1(i),d=N1(i),v=O1(i),S=I1(i),g=z1(i),E=M1(i),T=y1(c),C=l.createProgram();let y,x,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(jo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(jo).join(`
`),x.length>0&&(x+=`
`)):(y=[X_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),x=[X_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+v:"",i.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ea?"#define TONE_MAPPING":"",i.toneMapping!==ea?Mt.tonemapping_pars_fragment:"",i.toneMapping!==ea?x1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,_1("linearToOutputTexel",i.outputColorSpace),S1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(jo).join(`
`)),h=Gd(h),h=G_(h,i),h=V_(h,i),p=Gd(p),p=G_(p,i),p=V_(p,i),h=k_(h),p=k_(p),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",i.glslVersion===e_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===e_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const H=z+y+h,w=z+x+p,I=B_(l,l.VERTEX_SHADER,H),N=B_(l,l.FRAGMENT_SHADER,w);l.attachShader(C,I),l.attachShader(C,N),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(G){if(o.debug.checkShaderErrors){const Q=l.getProgramInfoLog(C)||"",de=l.getShaderInfoLog(I)||"",ge=l.getShaderInfoLog(N)||"",J=Q.trim(),O=de.trim(),B=ge.trim();let $=!0,me=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if($=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,I,N);else{const Ee=H_(l,I,"vertex"),U=H_(l,N,"fragment");Ot("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+J+`
`+Ee+`
`+U)}else J!==""?lt("WebGLProgram: Program Info Log:",J):(O===""||B==="")&&(me=!1);me&&(G.diagnostics={runnable:$,programLog:J,vertexShader:{log:O,prefix:y},fragmentShader:{log:B,prefix:x}})}l.deleteShader(I),l.deleteShader(N),b=new kc(l,C),L=E1(l,C)}let b;this.getUniforms=function(){return b===void 0&&P(this),b};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=l.getProgramParameter(C,d1)),q},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=p1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=N,this}let F1=0;class H1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,i,s){const l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(s)===!1&&(l.add(s),s.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new G1(e),i.set(e,s)),s}}class G1{constructor(e){this.id=F1++,this.code=e,this.usedTimes=0}}function V1(o){return o===Vs||o===Wc||o===qc}function k1(o,e,i,s,l,c){const h=new vv,p=new H1,m=new Set,d=[],v=new Map,S=s.logarithmicDepthBuffer;let g=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return m.add(b),b===0?"uv":`uv${b}`}function C(b,L,q,G,Q,de){const ge=G.fog,J=Q.geometry,O=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,B=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,$=e.get(b.envMap||O,B),me=$&&$.mapping===tu?$.image.height:null,Ee=E[b.type];b.precision!==null&&(g=s.getMaxPrecision(b.precision),g!==b.precision&&lt("WebGLProgram.getParameters:",b.precision,"not supported, using",g,"instead."));const U=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Y=U!==void 0?U.length:0;let xe=0;J.morphAttributes.position!==void 0&&(xe=1),J.morphAttributes.normal!==void 0&&(xe=2),J.morphAttributes.color!==void 0&&(xe=3);let we,Pe,se,Me;if(Ee){const Ve=Qi[Ee];we=Ve.vertexShader,Pe=Ve.fragmentShader}else{we=b.vertexShader,Pe=b.fragmentShader;const Ve=p.getVertexShaderStage(b),en=p.getFragmentShaderStage(b);p.update(b,Ve,en),se=Ve.id,Me=en.id}const ye=o.getRenderTarget(),He=o.state.buffers.depth.getReversed(),st=Q.isInstancedMesh===!0,tt=Q.isBatchedMesh===!0,Jt=!!b.map,be=!!b.matcap,Te=!!$,ke=!!b.aoMap,Ye=!!b.lightMap,ht=!!b.bumpMap&&b.wireframe===!1,nt=!!b.normalMap,ct=!!b.displacementMap,Lt=!!b.emissiveMap,xt=!!b.metalnessMap,ut=!!b.roughnessMap,X=b.anisotropy>0,ft=b.clearcoat>0,Et=b.dispersion>0,D=b.iridescence>0,M=b.sheen>0,Z=b.transmission>0,ee=X&&!!b.anisotropyMap,ce=ft&&!!b.clearcoatMap,Ae=ft&&!!b.clearcoatNormalMap,Ne=ft&&!!b.clearcoatRoughnessMap,ue=D&&!!b.iridescenceMap,fe=D&&!!b.iridescenceThicknessMap,Ce=M&&!!b.sheenColorMap,Fe=M&&!!b.sheenRoughnessMap,Le=!!b.specularMap,Ue=!!b.specularColorMap,je=!!b.specularIntensityMap,$e=Z&&!!b.transmissionMap,ot=Z&&!!b.thicknessMap,k=!!b.gradientMap,Re=!!b.alphaMap,he=b.alphaTest>0,De=!!b.alphaHash,Ie=!!b.extensions;let Se=ea;b.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Se=o.toneMapping);const We={shaderID:Ee,shaderType:b.type,shaderName:b.name,vertexShader:we,fragmentShader:Pe,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:Me,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:g,batching:tt,batchingColor:tt&&Q._colorsTexture!==null,instancing:st,instancingColor:st&&Q.instanceColor!==null,instancingMorph:st&&Q.morphTexture!==null,outputColorSpace:ye===null?o.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Ut.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Jt,matcap:be,envMap:Te,envMapMode:Te&&$.mapping,envMapCubeUVHeight:me,aoMap:ke,lightMap:Ye,bumpMap:ht,normalMap:nt,displacementMap:ct,emissiveMap:Lt,normalMapObjectSpace:nt&&b.normalMapType===AM,normalMapTangentSpace:nt&&b.normalMapType===J0,packedNormalMap:nt&&b.normalMapType===J0&&V1(b.normalMap.format),metalnessMap:xt,roughnessMap:ut,anisotropy:X,anisotropyMap:ee,clearcoat:ft,clearcoatMap:ce,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ne,dispersion:Et,iridescence:D,iridescenceMap:ue,iridescenceThicknessMap:fe,sheen:M,sheenColorMap:Ce,sheenRoughnessMap:Fe,specularMap:Le,specularColorMap:Ue,specularIntensityMap:je,transmission:Z,transmissionMap:$e,thicknessMap:ot,gradientMap:k,opaque:b.transparent===!1&&b.blending===Gr&&b.alphaToCoverage===!1,alphaMap:Re,alphaTest:he,alphaHash:De,combine:b.combine,mapUv:Jt&&T(b.map.channel),aoMapUv:ke&&T(b.aoMap.channel),lightMapUv:Ye&&T(b.lightMap.channel),bumpMapUv:ht&&T(b.bumpMap.channel),normalMapUv:nt&&T(b.normalMap.channel),displacementMapUv:ct&&T(b.displacementMap.channel),emissiveMapUv:Lt&&T(b.emissiveMap.channel),metalnessMapUv:xt&&T(b.metalnessMap.channel),roughnessMapUv:ut&&T(b.roughnessMap.channel),anisotropyMapUv:ee&&T(b.anisotropyMap.channel),clearcoatMapUv:ce&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&T(b.sheenRoughnessMap.channel),specularMapUv:Le&&T(b.specularMap.channel),specularColorMapUv:Ue&&T(b.specularColorMap.channel),specularIntensityMapUv:je&&T(b.specularIntensityMap.channel),transmissionMapUv:$e&&T(b.transmissionMap.channel),thicknessMapUv:ot&&T(b.thicknessMap.channel),alphaMapUv:Re&&T(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(nt||X),vertexNormals:!!J.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!J.attributes.uv&&(Jt||Re),fog:!!ge,useFog:b.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||J.attributes.normal===void 0&&nt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:He,skinning:Q.isSkinnedMesh===!0,hasPositionAttribute:J.attributes.position!==void 0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:xe,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:de.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&q.length>0,shadowMapType:o.shadowMap.type,toneMapping:Se,decodeVideoTexture:Jt&&b.map.isVideoTexture===!0&&Ut.getTransfer(b.map.colorSpace)===Yt,decodeVideoTextureEmissive:Lt&&b.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(b.emissiveMap.colorSpace)===Yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ra,flipSided:b.side===ni,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ie&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&b.extensions.multiDraw===!0||tt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return We.vertexUv1s=m.has(1),We.vertexUv2s=m.has(2),We.vertexUv3s=m.has(3),m.clear(),We}function y(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const q in b.defines)L.push(q),L.push(b.defines[q]);return b.isRawShaderMaterial===!1&&(x(L,b),z(L,b),L.push(o.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function x(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function z(b,L){h.disableAll(),L.instancing&&h.enable(0),L.instancingColor&&h.enable(1),L.instancingMorph&&h.enable(2),L.matcap&&h.enable(3),L.envMap&&h.enable(4),L.normalMapObjectSpace&&h.enable(5),L.normalMapTangentSpace&&h.enable(6),L.clearcoat&&h.enable(7),L.iridescence&&h.enable(8),L.alphaTest&&h.enable(9),L.vertexColors&&h.enable(10),L.vertexAlphas&&h.enable(11),L.vertexUv1s&&h.enable(12),L.vertexUv2s&&h.enable(13),L.vertexUv3s&&h.enable(14),L.vertexTangents&&h.enable(15),L.anisotropy&&h.enable(16),L.alphaHash&&h.enable(17),L.batching&&h.enable(18),L.dispersion&&h.enable(19),L.batchingColor&&h.enable(20),L.gradientMap&&h.enable(21),L.packedNormalMap&&h.enable(22),L.vertexNormals&&h.enable(23),b.push(h.mask),h.disableAll(),L.fog&&h.enable(0),L.useFog&&h.enable(1),L.flatShading&&h.enable(2),L.logarithmicDepthBuffer&&h.enable(3),L.reversedDepthBuffer&&h.enable(4),L.skinning&&h.enable(5),L.morphTargets&&h.enable(6),L.morphNormals&&h.enable(7),L.morphColors&&h.enable(8),L.premultipliedAlpha&&h.enable(9),L.shadowMapEnabled&&h.enable(10),L.doubleSided&&h.enable(11),L.flipSided&&h.enable(12),L.useDepthPacking&&h.enable(13),L.dithering&&h.enable(14),L.transmission&&h.enable(15),L.sheen&&h.enable(16),L.opaque&&h.enable(17),L.pointsUvs&&h.enable(18),L.decodeVideoTexture&&h.enable(19),L.decodeVideoTextureEmissive&&h.enable(20),L.alphaToCoverage&&h.enable(21),L.numLightProbeGrids>0&&h.enable(22),L.hasPositionAttribute&&h.enable(23),b.push(h.mask)}function H(b){const L=E[b.type];let q;if(L){const G=Qi[L];q=$c.clone(G.uniforms)}else q=b.uniforms;return q}function w(b,L){let q=v.get(L);return q!==void 0?++q.usedTimes:(q=new B1(o,L,b,l),d.push(q),v.set(L,q)),q}function I(b){if(--b.usedTimes===0){const L=d.indexOf(b);d[L]=d[d.length-1],d.pop(),v.delete(b.cacheKey),b.destroy()}}function N(b){p.remove(b)}function P(){p.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:H,acquireProgram:w,releaseProgram:I,releaseShaderCache:N,programs:d,dispose:P}}function X1(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function s(h){o.delete(h)}function l(h,p,m){o.get(h)[p]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function W1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function W_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function q_(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(g){let E=0;return g.isInstancedMesh&&(E+=2),g.isSkinnedMesh&&(E+=1),E}function p(g,E,T,C,y,x){let z=o[e];return z===void 0?(z={id:g.id,object:g,geometry:E,material:T,materialVariant:h(g),groupOrder:C,renderOrder:g.renderOrder,z:y,group:x},o[e]=z):(z.id=g.id,z.object=g,z.geometry=E,z.material=T,z.materialVariant=h(g),z.groupOrder=C,z.renderOrder=g.renderOrder,z.z=y,z.group=x),e++,z}function m(g,E,T,C,y,x){const z=p(g,E,T,C,y,x);T.transmission>0?s.push(z):T.transparent===!0?l.push(z):i.push(z)}function d(g,E,T,C,y,x){const z=p(g,E,T,C,y,x);T.transmission>0?s.unshift(z):T.transparent===!0?l.unshift(z):i.unshift(z)}function v(g,E,T){i.length>1&&i.sort(g||W1),s.length>1&&s.sort(E||W_),l.length>1&&l.sort(E||W_),T&&(i.reverse(),s.reverse(),l.reverse())}function S(){for(let g=e,E=o.length;g<E;g++){const T=o[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:S,sort:v}}function q1(){let o=new WeakMap;function e(s,l){const c=o.get(s);let h;return c===void 0?(h=new q_,o.set(s,[h])):l>=c.length?(h=new q_,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Y1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new j,color:new Rt};break;case"SpotLight":i={position:new j,direction:new j,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new j,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new j,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":i={color:new Rt,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=i,i}}}function Z1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let K1=0;function Q1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function J1(o){const e=new Y1,i=Z1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new j);const l=new j,c=new mn,h=new mn;function p(d){let v=0,S=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let E=0,T=0,C=0,y=0,x=0,z=0,H=0,w=0,I=0,N=0,P=0;d.sort(Q1);for(let L=0,q=d.length;L<q;L++){const G=d[L],Q=G.color,de=G.intensity,ge=G.distance;let J=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Vs?J=G.shadow.map.texture:J=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=Q.r*de,S+=Q.g*de,g+=Q.b*de;else if(G.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(G.sh.coefficients[O],de);P++}else if(G.isDirectionalLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const B=G.shadow,$=i.get(G);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,s.directionalShadow[E]=$,s.directionalShadowMap[E]=J,s.directionalShadowMatrix[E]=G.shadow.matrix,z++}s.directional[E]=O,E++}else if(G.isSpotLight){const O=e.get(G);O.position.setFromMatrixPosition(G.matrixWorld),O.color.copy(Q).multiplyScalar(de),O.distance=ge,O.coneCos=Math.cos(G.angle),O.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),O.decay=G.decay,s.spot[C]=O;const B=G.shadow;if(G.map&&(s.spotLightMap[I]=G.map,I++,B.updateMatrices(G),G.castShadow&&N++),s.spotLightMatrix[C]=B.matrix,G.castShadow){const $=i.get(G);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,s.spotShadow[C]=$,s.spotShadowMap[C]=J,w++}C++}else if(G.isRectAreaLight){const O=e.get(G);O.color.copy(Q).multiplyScalar(de),O.halfWidth.set(G.width*.5,0,0),O.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=O,y++}else if(G.isPointLight){const O=e.get(G);if(O.color.copy(G.color).multiplyScalar(G.intensity),O.distance=G.distance,O.decay=G.decay,G.castShadow){const B=G.shadow,$=i.get(G);$.shadowIntensity=B.intensity,$.shadowBias=B.bias,$.shadowNormalBias=B.normalBias,$.shadowRadius=B.radius,$.shadowMapSize=B.mapSize,$.shadowCameraNear=B.camera.near,$.shadowCameraFar=B.camera.far,s.pointShadow[T]=$,s.pointShadowMap[T]=J,s.pointShadowMatrix[T]=G.shadow.matrix,H++}s.point[T]=O,T++}else if(G.isHemisphereLight){const O=e.get(G);O.skyColor.copy(G.color).multiplyScalar(de),O.groundColor.copy(G.groundColor).multiplyScalar(de),s.hemi[x]=O,x++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Be.LTC_FLOAT_1,s.rectAreaLTC2=Be.LTC_FLOAT_2):(s.rectAreaLTC1=Be.LTC_HALF_1,s.rectAreaLTC2=Be.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=S,s.ambient[2]=g;const b=s.hash;(b.directionalLength!==E||b.pointLength!==T||b.spotLength!==C||b.rectAreaLength!==y||b.hemiLength!==x||b.numDirectionalShadows!==z||b.numPointShadows!==H||b.numSpotShadows!==w||b.numSpotMaps!==I||b.numLightProbes!==P)&&(s.directional.length=E,s.spot.length=C,s.rectArea.length=y,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=H,s.pointShadowMap.length=H,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=H,s.spotLightMatrix.length=w+I-N,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=P,b.directionalLength=E,b.pointLength=T,b.spotLength=C,b.rectAreaLength=y,b.hemiLength=x,b.numDirectionalShadows=z,b.numPointShadows=H,b.numSpotShadows=w,b.numSpotMaps=I,b.numLightProbes=P,s.version=K1++)}function m(d,v){let S=0,g=0,E=0,T=0,C=0;const y=v.matrixWorldInverse;for(let x=0,z=d.length;x<z;x++){const H=d[x];if(H.isDirectionalLight){const w=s.directional[S];w.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),S++}else if(H.isSpotLight){const w=s.spot[E];w.position.setFromMatrixPosition(H.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(H.matrixWorld),l.setFromMatrixPosition(H.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(y),E++}else if(H.isRectAreaLight){const w=s.rectArea[T];w.position.setFromMatrixPosition(H.matrixWorld),w.position.applyMatrix4(y),h.identity(),c.copy(H.matrixWorld),c.premultiply(y),h.extractRotation(c),w.halfWidth.set(H.width*.5,0,0),w.halfHeight.set(0,H.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),T++}else if(H.isPointLight){const w=s.point[g];w.position.setFromMatrixPosition(H.matrixWorld),w.position.applyMatrix4(y),g++}else if(H.isHemisphereLight){const w=s.hemi[C];w.direction.setFromMatrixPosition(H.matrixWorld),w.direction.transformDirection(y),C++}}}return{setup:p,setupView:m,state:s}}function Y_(o){const e=new J1(o),i=[],s=[],l=[];function c(g){S.camera=g,i.length=0,s.length=0,l.length=0}function h(g){i.push(g)}function p(g){s.push(g)}function m(g){l.push(g)}function d(){e.setup(i)}function v(g){e.setupView(i,g)}const S={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:S,setupLights:d,setupLightsView:v,pushLight:h,pushShadow:p,pushLightProbeGrid:m}}function j1(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let p;return h===void 0?(p=new Y_(o),e.set(l,[p])):c>=h.length?(p=new Y_(o),h.push(p)):p=h[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const $1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,tA=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],nA=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],Z_=new mn,Qo=new j,Kh=new j;function iA(o,e,i){let s=new Ev;const l=new mt,c=new mt,h=new fn,p=new py,m=new my,d={},v=i.maxTextureSize,S={[ds]:ni,[ni]:ds,[Ra]:Ra},g=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:$1,fragmentShader:eA}),E=g.clone();E.defines.HORIZONTAL_PASS=1;const T=new si;T.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Vn(T,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let x=this.type;this.render=function(N,P,b){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===iM&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Bc);const L=o.getRenderTarget(),q=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),Q=o.state;Q.setBlending($i),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const de=x!==this.type;de&&P.traverse(function(ge){ge.material&&(Array.isArray(ge.material)?ge.material.forEach(J=>J.needsUpdate=!0):ge.material.needsUpdate=!0)});for(let ge=0,J=N.length;ge<J;ge++){const O=N[ge],B=O.shadow;if(B===void 0){lt("WebGLShadowMap:",O,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const $=B.getFrameExtents();l.multiply($),c.copy(B.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/$.x),l.x=c.x*$.x,B.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/$.y),l.y=c.y*$.y,B.mapSize.y=c.y));const me=o.state.buffers.depth.getReversed();if(B.camera._reversedDepth=me,B.map===null||de===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Jo){if(O.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new ii(l.x,l.y,{format:Vs,type:_i,minFilter:kn,magFilter:kn,generateMipmaps:!1}),B.map.texture.name=O.name+".shadowMap",B.map.depthTexture=new Yr(l.x,l.y,Ji),B.map.depthTexture.name=O.name+".shadowMapDepth",B.map.depthTexture.format=Da,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=On,B.map.depthTexture.magFilter=On}else O.isPointLight?(B.map=new Uv(l.x),B.map.depthTexture=new cy(l.x,ta)):(B.map=new ii(l.x,l.y),B.map.depthTexture=new Yr(l.x,l.y,ta)),B.map.depthTexture.name=O.name+".shadowMap",B.map.depthTexture.format=Da,this.type===Bc?(B.map.depthTexture.compareFunction=me?Jd:Qd,B.map.depthTexture.minFilter=kn,B.map.depthTexture.magFilter=kn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=On,B.map.depthTexture.magFilter=On);B.camera.updateProjectionMatrix()}const Ee=B.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<Ee;U++){if(B.map.isWebGLCubeRenderTarget)o.setRenderTarget(B.map,U),o.clear();else{U===0&&(o.setRenderTarget(B.map),o.clear());const Y=B.getViewport(U);h.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),Q.viewport(h)}if(O.isPointLight){const Y=B.camera,xe=B.matrix,we=O.distance||Y.far;we!==Y.far&&(Y.far=we,Y.updateProjectionMatrix()),Qo.setFromMatrixPosition(O.matrixWorld),Y.position.copy(Qo),Kh.copy(Y.position),Kh.add(tA[U]),Y.up.copy(nA[U]),Y.lookAt(Kh),Y.updateMatrixWorld(),xe.makeTranslation(-Qo.x,-Qo.y,-Qo.z),Z_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Z_,Y.coordinateSystem,Y.reversedDepth)}else B.updateMatrices(O);s=B.getFrustum(),w(P,b,B.camera,O,this.type)}B.isPointLightShadow!==!0&&this.type===Jo&&z(B,b),B.needsUpdate=!1}x=this.type,y.needsUpdate=!1,o.setRenderTarget(L,q,G)};function z(N,P){const b=e.update(C);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,E.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,E.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ii(l.x,l.y,{format:Vs,type:_i})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(P,null,b,g,C,null),E.uniforms.shadow_pass.value=N.mapPass.texture,E.uniforms.resolution.value=N.mapSize,E.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(P,null,b,E,C,null)}function H(N,P,b,L){let q=null;const G=b.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)q=G;else if(q=b.isPointLight===!0?m:p,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Q=q.uuid,de=P.uuid;let ge=d[Q];ge===void 0&&(ge={},d[Q]=ge);let J=ge[de];J===void 0&&(J=q.clone(),ge[de]=J,P.addEventListener("dispose",I)),q=J}if(q.visible=P.visible,q.wireframe=P.wireframe,L===Jo?q.side=P.shadowSide!==null?P.shadowSide:P.side:q.side=P.shadowSide!==null?P.shadowSide:S[P.side],q.alphaMap=P.alphaMap,q.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,q.map=P.map,q.clipShadows=P.clipShadows,q.clippingPlanes=P.clippingPlanes,q.clipIntersection=P.clipIntersection,q.displacementMap=P.displacementMap,q.displacementScale=P.displacementScale,q.displacementBias=P.displacementBias,q.wireframeLinewidth=P.wireframeLinewidth,q.linewidth=P.linewidth,b.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const Q=o.properties.get(q);Q.light=b}return q}function w(N,P,b,L,q){if(N.visible===!1)return;if(N.layers.test(P.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&q===Jo)&&(!N.frustumCulled||s.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,N.matrixWorld);const de=e.update(N),ge=N.material;if(Array.isArray(ge)){const J=de.groups;for(let O=0,B=J.length;O<B;O++){const $=J[O],me=ge[$.materialIndex];if(me&&me.visible){const Ee=H(N,me,L,q);N.onBeforeShadow(o,N,P,b,de,Ee,$),o.renderBufferDirect(b,null,de,Ee,N,$),N.onAfterShadow(o,N,P,b,de,Ee,$)}}}else if(ge.visible){const J=H(N,ge,L,q);N.onBeforeShadow(o,N,P,b,de,J,null),o.renderBufferDirect(b,null,de,J,N,null),N.onAfterShadow(o,N,P,b,de,J,null)}}const Q=N.children;for(let de=0,ge=Q.length;de<ge;de++)w(Q[de],P,b,L,q)}function I(N){N.target.removeEventListener("dispose",I);for(const b in d){const L=d[b],q=N.target.uuid;q in L&&(L[q].dispose(),delete L[q])}}}function aA(o,e){function i(){let k=!1;const Re=new fn;let he=null;const De=new fn(0,0,0,0);return{setMask:function(Ie){he!==Ie&&!k&&(o.colorMask(Ie,Ie,Ie,Ie),he=Ie)},setLocked:function(Ie){k=Ie},setClear:function(Ie,Se,We,Ve,en){en===!0&&(Ie*=Ve,Se*=Ve,We*=Ve),Re.set(Ie,Se,We,Ve),De.equals(Re)===!1&&(o.clearColor(Ie,Se,We,Ve),De.copy(Re))},reset:function(){k=!1,he=null,De.set(-1,0,0,0)}}}function s(){let k=!1,Re=!1,he=null,De=null,Ie=null;return{setReversed:function(Se){if(Re!==Se){const We=e.get("EXT_clip_control");Se?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Re=Se;const Ve=Ie;Ie=null,this.setClear(Ve)}},getReversed:function(){return Re},setTest:function(Se){Se?ye(o.DEPTH_TEST):He(o.DEPTH_TEST)},setMask:function(Se){he!==Se&&!k&&(o.depthMask(Se),he=Se)},setFunc:function(Se){if(Re&&(Se=IM[Se]),De!==Se){switch(Se){case ed:o.depthFunc(o.NEVER);break;case td:o.depthFunc(o.ALWAYS);break;case nd:o.depthFunc(o.LESS);break;case Wr:o.depthFunc(o.LEQUAL);break;case id:o.depthFunc(o.EQUAL);break;case ad:o.depthFunc(o.GEQUAL);break;case sd:o.depthFunc(o.GREATER);break;case rd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}De=Se}},setLocked:function(Se){k=Se},setClear:function(Se){Ie!==Se&&(Ie=Se,Re&&(Se=1-Se),o.clearDepth(Se))},reset:function(){k=!1,he=null,De=null,Ie=null,Re=!1}}}function l(){let k=!1,Re=null,he=null,De=null,Ie=null,Se=null,We=null,Ve=null,en=null;return{setTest:function(Pt){k||(Pt?ye(o.STENCIL_TEST):He(o.STENCIL_TEST))},setMask:function(Pt){Re!==Pt&&!k&&(o.stencilMask(Pt),Re=Pt)},setFunc:function(Pt,Pn,In){(he!==Pt||De!==Pn||Ie!==In)&&(o.stencilFunc(Pt,Pn,In),he=Pt,De=Pn,Ie=In)},setOp:function(Pt,Pn,In){(Se!==Pt||We!==Pn||Ve!==In)&&(o.stencilOp(Pt,Pn,In),Se=Pt,We=Pn,Ve=In)},setLocked:function(Pt){k=Pt},setClear:function(Pt){en!==Pt&&(o.clearStencil(Pt),en=Pt)},reset:function(){k=!1,Re=null,he=null,De=null,Ie=null,Se=null,We=null,Ve=null,en=null}}}const c=new i,h=new s,p=new l,m=new WeakMap,d=new WeakMap;let v={},S={},g={},E=new WeakMap,T=[],C=null,y=!1,x=null,z=null,H=null,w=null,I=null,N=null,P=null,b=new Rt(0,0,0),L=0,q=!1,G=null,Q=null,de=null,ge=null,J=null;const O=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const me=o.getParameter(o.VERSION);me.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(me)[1]),B=$>=1):me.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),B=$>=2);let Ee=null,U={};const Y=o.getParameter(o.SCISSOR_BOX),xe=o.getParameter(o.VIEWPORT),we=new fn().fromArray(Y),Pe=new fn().fromArray(xe);function se(k,Re,he,De){const Ie=new Uint8Array(4),Se=o.createTexture();o.bindTexture(k,Se),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let We=0;We<he;We++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Re,0,o.RGBA,1,1,De,0,o.RGBA,o.UNSIGNED_BYTE,Ie):o.texImage2D(Re+We,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ie);return Se}const Me={};Me[o.TEXTURE_2D]=se(o.TEXTURE_2D,o.TEXTURE_2D,1),Me[o.TEXTURE_CUBE_MAP]=se(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[o.TEXTURE_2D_ARRAY]=se(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Me[o.TEXTURE_3D]=se(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),ye(o.DEPTH_TEST),h.setFunc(Wr),ht(!1),nt(Z0),ye(o.CULL_FACE),ke($i);function ye(k){v[k]!==!0&&(o.enable(k),v[k]=!0)}function He(k){v[k]!==!1&&(o.disable(k),v[k]=!1)}function st(k,Re){return g[k]!==Re?(o.bindFramebuffer(k,Re),g[k]=Re,k===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Re),k===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Re),!0):!1}function tt(k,Re){let he=T,De=!1;if(k){he=E.get(Re),he===void 0&&(he=[],E.set(Re,he));const Ie=k.textures;if(he.length!==Ie.length||he[0]!==o.COLOR_ATTACHMENT0){for(let Se=0,We=Ie.length;Se<We;Se++)he[Se]=o.COLOR_ATTACHMENT0+Se;he.length=Ie.length,De=!0}}else he[0]!==o.BACK&&(he[0]=o.BACK,De=!0);De&&o.drawBuffers(he)}function Jt(k){return C!==k?(o.useProgram(k),C=k,!0):!1}const be={[zs]:o.FUNC_ADD,[sM]:o.FUNC_SUBTRACT,[rM]:o.FUNC_REVERSE_SUBTRACT};be[oM]=o.MIN,be[lM]=o.MAX;const Te={[cM]:o.ZERO,[uM]:o.ONE,[fM]:o.SRC_COLOR,[jh]:o.SRC_ALPHA,[_M]:o.SRC_ALPHA_SATURATE,[mM]:o.DST_COLOR,[dM]:o.DST_ALPHA,[hM]:o.ONE_MINUS_SRC_COLOR,[$h]:o.ONE_MINUS_SRC_ALPHA,[gM]:o.ONE_MINUS_DST_COLOR,[pM]:o.ONE_MINUS_DST_ALPHA,[vM]:o.CONSTANT_COLOR,[xM]:o.ONE_MINUS_CONSTANT_COLOR,[SM]:o.CONSTANT_ALPHA,[MM]:o.ONE_MINUS_CONSTANT_ALPHA};function ke(k,Re,he,De,Ie,Se,We,Ve,en,Pt){if(k===$i){y===!0&&(He(o.BLEND),y=!1);return}if(y===!1&&(ye(o.BLEND),y=!0),k!==aM){if(k!==x||Pt!==q){if((z!==zs||I!==zs)&&(o.blendEquation(o.FUNC_ADD),z=zs,I=zs),Pt)switch(k){case Gr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Vr:o.blendFunc(o.ONE,o.ONE);break;case K0:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Q0:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ot("WebGLState: Invalid blending: ",k);break}else switch(k){case Gr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Vr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case K0:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Q0:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",k);break}H=null,w=null,N=null,P=null,b.set(0,0,0),L=0,x=k,q=Pt}return}Ie=Ie||Re,Se=Se||he,We=We||De,(Re!==z||Ie!==I)&&(o.blendEquationSeparate(be[Re],be[Ie]),z=Re,I=Ie),(he!==H||De!==w||Se!==N||We!==P)&&(o.blendFuncSeparate(Te[he],Te[De],Te[Se],Te[We]),H=he,w=De,N=Se,P=We),(Ve.equals(b)===!1||en!==L)&&(o.blendColor(Ve.r,Ve.g,Ve.b,en),b.copy(Ve),L=en),x=k,q=!1}function Ye(k,Re){k.side===Ra?He(o.CULL_FACE):ye(o.CULL_FACE);let he=k.side===ni;Re&&(he=!he),ht(he),k.blending===Gr&&k.transparent===!1?ke($i):ke(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const De=k.stencilWrite;p.setTest(De),De&&(p.setMask(k.stencilWriteMask),p.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),p.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Lt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ye(o.SAMPLE_ALPHA_TO_COVERAGE):He(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(k){G!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),G=k)}function nt(k){k!==tM?(ye(o.CULL_FACE),k!==Q&&(k===Z0?o.cullFace(o.BACK):k===nM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):He(o.CULL_FACE),Q=k}function ct(k){k!==de&&(B&&o.lineWidth(k),de=k)}function Lt(k,Re,he){k?(ye(o.POLYGON_OFFSET_FILL),(ge!==Re||J!==he)&&(ge=Re,J=he,h.getReversed()&&(Re=-Re),o.polygonOffset(Re,he))):He(o.POLYGON_OFFSET_FILL)}function xt(k){k?ye(o.SCISSOR_TEST):He(o.SCISSOR_TEST)}function ut(k){k===void 0&&(k=o.TEXTURE0+O-1),Ee!==k&&(o.activeTexture(k),Ee=k)}function X(k,Re,he){he===void 0&&(Ee===null?he=o.TEXTURE0+O-1:he=Ee);let De=U[he];De===void 0&&(De={type:void 0,texture:void 0},U[he]=De),(De.type!==k||De.texture!==Re)&&(Ee!==he&&(o.activeTexture(he),Ee=he),o.bindTexture(k,Re||Me[k]),De.type=k,De.texture=Re)}function ft(){const k=U[Ee];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Et(){try{o.compressedTexImage2D(...arguments)}catch(k){Ot("WebGLState:",k)}}function D(){try{o.compressedTexImage3D(...arguments)}catch(k){Ot("WebGLState:",k)}}function M(){try{o.texSubImage2D(...arguments)}catch(k){Ot("WebGLState:",k)}}function Z(){try{o.texSubImage3D(...arguments)}catch(k){Ot("WebGLState:",k)}}function ee(){try{o.compressedTexSubImage2D(...arguments)}catch(k){Ot("WebGLState:",k)}}function ce(){try{o.compressedTexSubImage3D(...arguments)}catch(k){Ot("WebGLState:",k)}}function Ae(){try{o.texStorage2D(...arguments)}catch(k){Ot("WebGLState:",k)}}function Ne(){try{o.texStorage3D(...arguments)}catch(k){Ot("WebGLState:",k)}}function ue(){try{o.texImage2D(...arguments)}catch(k){Ot("WebGLState:",k)}}function fe(){try{o.texImage3D(...arguments)}catch(k){Ot("WebGLState:",k)}}function Ce(k){return S[k]!==void 0?S[k]:o.getParameter(k)}function Fe(k,Re){S[k]!==Re&&(o.pixelStorei(k,Re),S[k]=Re)}function Le(k){we.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),we.copy(k))}function Ue(k){Pe.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),Pe.copy(k))}function je(k,Re){let he=d.get(Re);he===void 0&&(he=new WeakMap,d.set(Re,he));let De=he.get(k);De===void 0&&(De=o.getUniformBlockIndex(Re,k.name),he.set(k,De))}function $e(k,Re){const De=d.get(Re).get(k);m.get(Re)!==De&&(o.uniformBlockBinding(Re,De,k.__bindingPointIndex),m.set(Re,De))}function ot(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),v={},S={},Ee=null,U={},g={},E=new WeakMap,T=[],C=null,y=!1,x=null,z=null,H=null,w=null,I=null,N=null,P=null,b=new Rt(0,0,0),L=0,q=!1,G=null,Q=null,de=null,ge=null,J=null,we.set(0,0,o.canvas.width,o.canvas.height),Pe.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:ye,disable:He,bindFramebuffer:st,drawBuffers:tt,useProgram:Jt,setBlending:ke,setMaterial:Ye,setFlipSided:ht,setCullFace:nt,setLineWidth:ct,setPolygonOffset:Lt,setScissorTest:xt,activeTexture:ut,bindTexture:X,unbindTexture:ft,compressedTexImage2D:Et,compressedTexImage3D:D,texImage2D:ue,texImage3D:fe,pixelStorei:Fe,getParameter:Ce,updateUBOMapping:je,uniformBlockBinding:$e,texStorage2D:Ae,texStorage3D:Ne,texSubImage2D:M,texSubImage3D:Z,compressedTexSubImage2D:ee,compressedTexSubImage3D:ce,scissor:Le,viewport:Ue,reset:ot}}function sA(o,e,i,s,l,c,h){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new mt,v=new WeakMap,S=new Set;let g;const E=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,M){return T?new OffscreenCanvas(D,M):Qc("canvas")}function y(D,M,Z){let ee=1;const ce=Et(D);if((ce.width>Z||ce.height>Z)&&(ee=Z/Math.max(ce.width,ce.height)),ee<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ae=Math.floor(ee*ce.width),Ne=Math.floor(ee*ce.height);g===void 0&&(g=C(Ae,Ne));const ue=M?C(Ae,Ne):g;return ue.width=Ae,ue.height=Ne,ue.getContext("2d").drawImage(D,0,0,Ae,Ne),lt("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Ae+"x"+Ne+")."),ue}else return"data"in D&&lt("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),D;return D}function x(D){return D.generateMipmaps}function z(D){o.generateMipmap(D)}function H(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function w(D,M,Z,ee,ce,Ae=!1){if(D!==null){if(o[D]!==void 0)return o[D];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ne;ee&&(Ne=e.get("EXT_texture_norm16"),Ne||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ue=M;if(M===o.RED&&(Z===o.FLOAT&&(ue=o.R32F),Z===o.HALF_FLOAT&&(ue=o.R16F),Z===o.UNSIGNED_BYTE&&(ue=o.R8),Z===o.UNSIGNED_SHORT&&Ne&&(ue=Ne.R16_EXT),Z===o.SHORT&&Ne&&(ue=Ne.R16_SNORM_EXT)),M===o.RED_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.R8UI),Z===o.UNSIGNED_SHORT&&(ue=o.R16UI),Z===o.UNSIGNED_INT&&(ue=o.R32UI),Z===o.BYTE&&(ue=o.R8I),Z===o.SHORT&&(ue=o.R16I),Z===o.INT&&(ue=o.R32I)),M===o.RG&&(Z===o.FLOAT&&(ue=o.RG32F),Z===o.HALF_FLOAT&&(ue=o.RG16F),Z===o.UNSIGNED_BYTE&&(ue=o.RG8),Z===o.UNSIGNED_SHORT&&Ne&&(ue=Ne.RG16_EXT),Z===o.SHORT&&Ne&&(ue=Ne.RG16_SNORM_EXT)),M===o.RG_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.RG8UI),Z===o.UNSIGNED_SHORT&&(ue=o.RG16UI),Z===o.UNSIGNED_INT&&(ue=o.RG32UI),Z===o.BYTE&&(ue=o.RG8I),Z===o.SHORT&&(ue=o.RG16I),Z===o.INT&&(ue=o.RG32I)),M===o.RGB_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),Z===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),Z===o.UNSIGNED_INT&&(ue=o.RGB32UI),Z===o.BYTE&&(ue=o.RGB8I),Z===o.SHORT&&(ue=o.RGB16I),Z===o.INT&&(ue=o.RGB32I)),M===o.RGBA_INTEGER&&(Z===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),Z===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),Z===o.UNSIGNED_INT&&(ue=o.RGBA32UI),Z===o.BYTE&&(ue=o.RGBA8I),Z===o.SHORT&&(ue=o.RGBA16I),Z===o.INT&&(ue=o.RGBA32I)),M===o.RGB&&(Z===o.UNSIGNED_SHORT&&Ne&&(ue=Ne.RGB16_EXT),Z===o.SHORT&&Ne&&(ue=Ne.RGB16_SNORM_EXT),Z===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),Z===o.UNSIGNED_INT_10F_11F_11F_REV&&(ue=o.R11F_G11F_B10F)),M===o.RGBA){const fe=Ae?Zc:Ut.getTransfer(ce);Z===o.FLOAT&&(ue=o.RGBA32F),Z===o.HALF_FLOAT&&(ue=o.RGBA16F),Z===o.UNSIGNED_BYTE&&(ue=fe===Yt?o.SRGB8_ALPHA8:o.RGBA8),Z===o.UNSIGNED_SHORT&&Ne&&(ue=Ne.RGBA16_EXT),Z===o.SHORT&&Ne&&(ue=Ne.RGBA16_SNORM_EXT),Z===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),Z===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function I(D,M){let Z;return D?M===null||M===ta||M===el?Z=o.DEPTH24_STENCIL8:M===Ji?Z=o.DEPTH32F_STENCIL8:M===$o&&(Z=o.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ta||M===el?Z=o.DEPTH_COMPONENT24:M===Ji?Z=o.DEPTH_COMPONENT32F:M===$o&&(Z=o.DEPTH_COMPONENT16),Z}function N(D,M){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==On&&D.minFilter!==kn?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function P(D){const M=D.target;M.removeEventListener("dispose",P),L(M),M.isVideoTexture&&v.delete(M),M.isHTMLTexture&&S.delete(M)}function b(D){const M=D.target;M.removeEventListener("dispose",b),G(M)}function L(D){const M=s.get(D);if(M.__webglInit===void 0)return;const Z=D.source,ee=E.get(Z);if(ee){const ce=ee[M.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&q(D),Object.keys(ee).length===0&&E.delete(Z)}s.remove(D)}function q(D){const M=s.get(D);o.deleteTexture(M.__webglTexture);const Z=D.source,ee=E.get(Z);delete ee[M.__cacheKey],h.memory.textures--}function G(D){const M=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(M.__webglFramebuffer[ee]))for(let ce=0;ce<M.__webglFramebuffer[ee].length;ce++)o.deleteFramebuffer(M.__webglFramebuffer[ee][ce]);else o.deleteFramebuffer(M.__webglFramebuffer[ee]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[ee])}else{if(Array.isArray(M.__webglFramebuffer))for(let ee=0;ee<M.__webglFramebuffer.length;ee++)o.deleteFramebuffer(M.__webglFramebuffer[ee]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ee=0;ee<M.__webglColorRenderbuffer.length;ee++)M.__webglColorRenderbuffer[ee]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[ee]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const Z=D.textures;for(let ee=0,ce=Z.length;ee<ce;ee++){const Ae=s.get(Z[ee]);Ae.__webglTexture&&(o.deleteTexture(Ae.__webglTexture),h.memory.textures--),s.remove(Z[ee])}s.remove(D)}let Q=0;function de(){Q=0}function ge(){return Q}function J(D){Q=D}function O(){const D=Q;return D>=l.maxTextures&&lt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),Q+=1,D}function B(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function $(D,M){const Z=s.get(D);if(D.isVideoTexture&&X(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Z.__version!==D.version){const ee=D.image;if(ee===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{He(Z,D,M);return}}else D.isExternalTexture&&(Z.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Z.__webglTexture,o.TEXTURE0+M)}function me(D,M){const Z=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){He(Z,D,M);return}else D.isExternalTexture&&(Z.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Z.__webglTexture,o.TEXTURE0+M)}function Ee(D,M){const Z=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){He(Z,D,M);return}i.bindTexture(o.TEXTURE_3D,Z.__webglTexture,o.TEXTURE0+M)}function U(D,M){const Z=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Z.__version!==D.version){st(Z,D,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture,o.TEXTURE0+M)}const Y={[od]:o.REPEAT,[Ca]:o.CLAMP_TO_EDGE,[ld]:o.MIRRORED_REPEAT},xe={[On]:o.NEAREST,[bM]:o.NEAREST_MIPMAP_NEAREST,[pc]:o.NEAREST_MIPMAP_LINEAR,[kn]:o.LINEAR,[vh]:o.LINEAR_MIPMAP_NEAREST,[Fs]:o.LINEAR_MIPMAP_LINEAR},we={[RM]:o.NEVER,[NM]:o.ALWAYS,[CM]:o.LESS,[Qd]:o.LEQUAL,[wM]:o.EQUAL,[Jd]:o.GEQUAL,[DM]:o.GREATER,[UM]:o.NOTEQUAL};function Pe(D,M){if(M.type===Ji&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===kn||M.magFilter===vh||M.magFilter===pc||M.magFilter===Fs||M.minFilter===kn||M.minFilter===vh||M.minFilter===pc||M.minFilter===Fs)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,Y[M.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,Y[M.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,Y[M.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,xe[M.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,xe[M.minFilter]),M.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,we[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===On||M.minFilter!==pc&&M.minFilter!==Fs||M.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||s.get(M).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),s.get(M).__currentAnisotropy=M.anisotropy}}}function se(D,M){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",P));const ee=M.source;let ce=E.get(ee);ce===void 0&&(ce={},E.set(ee,ce));const Ae=B(M);if(Ae!==D.__cacheKey){ce[Ae]===void 0&&(ce[Ae]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,Z=!0),ce[Ae].usedTimes++;const Ne=ce[D.__cacheKey];Ne!==void 0&&(ce[D.__cacheKey].usedTimes--,Ne.usedTimes===0&&q(M)),D.__cacheKey=Ae,D.__webglTexture=ce[Ae].texture}return Z}function Me(D,M,Z){return Math.floor(Math.floor(D/Z)/M)}function ye(D,M,Z,ee){const Ae=D.updateRanges;if(Ae.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,Z,ee,M.data);else{Ae.sort((Fe,Le)=>Fe.start-Le.start);let Ne=0;for(let Fe=1;Fe<Ae.length;Fe++){const Le=Ae[Ne],Ue=Ae[Fe],je=Le.start+Le.count,$e=Me(Ue.start,M.width,4),ot=Me(Le.start,M.width,4);Ue.start<=je+1&&$e===ot&&Me(Ue.start+Ue.count-1,M.width,4)===$e?Le.count=Math.max(Le.count,Ue.start+Ue.count-Le.start):(++Ne,Ae[Ne]=Ue)}Ae.length=Ne+1;const ue=i.getParameter(o.UNPACK_ROW_LENGTH),fe=i.getParameter(o.UNPACK_SKIP_PIXELS),Ce=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let Fe=0,Le=Ae.length;Fe<Le;Fe++){const Ue=Ae[Fe],je=Math.floor(Ue.start/4),$e=Math.ceil(Ue.count/4),ot=je%M.width,k=Math.floor(je/M.width),Re=$e,he=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ot),i.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,ot,k,Re,he,Z,ee,M.data)}D.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,ue),i.pixelStorei(o.UNPACK_SKIP_PIXELS,fe),i.pixelStorei(o.UNPACK_SKIP_ROWS,Ce)}}function He(D,M,Z){let ee=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=o.TEXTURE_3D);const ce=se(D,M),Ae=M.source;i.bindTexture(ee,D.__webglTexture,o.TEXTURE0+Z);const Ne=s.get(Ae);if(Ae.version!==Ne.__version||ce===!0){if(i.activeTexture(o.TEXTURE0+Z),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const he=Ut.getPrimaries(Ut.workingColorSpace),De=M.colorSpace===fs?null:Ut.getPrimaries(M.colorSpace),Ie=M.colorSpace===fs||he===De?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment);let fe=y(M.image,!1,l.maxTextureSize);fe=ft(M,fe);const Ce=c.convert(M.format,M.colorSpace),Fe=c.convert(M.type);let Le=w(M.internalFormat,Ce,Fe,M.normalized,M.colorSpace,M.isVideoTexture);Pe(ee,M);let Ue;const je=M.mipmaps,$e=M.isVideoTexture!==!0,ot=Ne.__version===void 0||ce===!0,k=Ae.dataReady,Re=N(M,fe);if(M.isDepthTexture)Le=I(M.format===Hs,M.type),ot&&($e?i.texStorage2D(o.TEXTURE_2D,1,Le,fe.width,fe.height):i.texImage2D(o.TEXTURE_2D,0,Le,fe.width,fe.height,0,Ce,Fe,null));else if(M.isDataTexture)if(je.length>0){$e&&ot&&i.texStorage2D(o.TEXTURE_2D,Re,Le,je[0].width,je[0].height);for(let he=0,De=je.length;he<De;he++)Ue=je[he],$e?k&&i.texSubImage2D(o.TEXTURE_2D,he,0,0,Ue.width,Ue.height,Ce,Fe,Ue.data):i.texImage2D(o.TEXTURE_2D,he,Le,Ue.width,Ue.height,0,Ce,Fe,Ue.data);M.generateMipmaps=!1}else $e?(ot&&i.texStorage2D(o.TEXTURE_2D,Re,Le,fe.width,fe.height),k&&ye(M,fe,Ce,Fe)):i.texImage2D(o.TEXTURE_2D,0,Le,fe.width,fe.height,0,Ce,Fe,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Le,je[0].width,je[0].height,fe.depth);for(let he=0,De=je.length;he<De;he++)if(Ue=je[he],M.format!==Fi)if(Ce!==null)if($e){if(k)if(M.layerUpdates.size>0){const Ie=T_(Ue.width,Ue.height,M.format,M.type);for(const Se of M.layerUpdates){const We=Ue.data.subarray(Se*Ie/Ue.data.BYTES_PER_ELEMENT,(Se+1)*Ie/Ue.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,Se,Ue.width,Ue.height,1,Ce,We)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,Ue.width,Ue.height,fe.depth,Ce,Ue.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,he,Le,Ue.width,Ue.height,fe.depth,0,Ue.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?k&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,he,0,0,0,Ue.width,Ue.height,fe.depth,Ce,Fe,Ue.data):i.texImage3D(o.TEXTURE_2D_ARRAY,he,Le,Ue.width,Ue.height,fe.depth,0,Ce,Fe,Ue.data)}else{$e&&ot&&i.texStorage2D(o.TEXTURE_2D,Re,Le,je[0].width,je[0].height);for(let he=0,De=je.length;he<De;he++)Ue=je[he],M.format!==Fi?Ce!==null?$e?k&&i.compressedTexSubImage2D(o.TEXTURE_2D,he,0,0,Ue.width,Ue.height,Ce,Ue.data):i.compressedTexImage2D(o.TEXTURE_2D,he,Le,Ue.width,Ue.height,0,Ue.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?k&&i.texSubImage2D(o.TEXTURE_2D,he,0,0,Ue.width,Ue.height,Ce,Fe,Ue.data):i.texImage2D(o.TEXTURE_2D,he,Le,Ue.width,Ue.height,0,Ce,Fe,Ue.data)}else if(M.isDataArrayTexture)if($e){if(ot&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Le,fe.width,fe.height,fe.depth),k)if(M.layerUpdates.size>0){const he=T_(fe.width,fe.height,M.format,M.type);for(const De of M.layerUpdates){const Ie=fe.data.subarray(De*he/fe.data.BYTES_PER_ELEMENT,(De+1)*he/fe.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,De,fe.width,fe.height,1,Ce,Fe,Ie)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ce,Fe,fe.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Le,fe.width,fe.height,fe.depth,0,Ce,Fe,fe.data);else if(M.isData3DTexture)$e?(ot&&i.texStorage3D(o.TEXTURE_3D,Re,Le,fe.width,fe.height,fe.depth),k&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ce,Fe,fe.data)):i.texImage3D(o.TEXTURE_3D,0,Le,fe.width,fe.height,fe.depth,0,Ce,Fe,fe.data);else if(M.isFramebufferTexture){if(ot)if($e)i.texStorage2D(o.TEXTURE_2D,Re,Le,fe.width,fe.height);else{let he=fe.width,De=fe.height;for(let Ie=0;Ie<Re;Ie++)i.texImage2D(o.TEXTURE_2D,Ie,Le,he,De,0,Ce,Fe,null),he>>=1,De>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in o){const he=o.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),fe.parentNode!==he){he.appendChild(fe),S.add(M),he.onpaint=De=>{const Ie=De.changedElements;for(const Se of S)Ie.includes(Se.image)&&(Se.needsUpdate=!0)},he.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,fe);else{const Ie=o.RGBA,Se=o.RGBA,We=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,Ie,Se,We,fe)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(je.length>0){if($e&&ot){const he=Et(je[0]);i.texStorage2D(o.TEXTURE_2D,Re,Le,he.width,he.height)}for(let he=0,De=je.length;he<De;he++)Ue=je[he],$e?k&&i.texSubImage2D(o.TEXTURE_2D,he,0,0,Ce,Fe,Ue):i.texImage2D(o.TEXTURE_2D,he,Le,Ce,Fe,Ue);M.generateMipmaps=!1}else if($e){if(ot){const he=Et(fe);i.texStorage2D(o.TEXTURE_2D,Re,Le,he.width,he.height)}k&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ce,Fe,fe)}else i.texImage2D(o.TEXTURE_2D,0,Le,Ce,Fe,fe);x(M)&&z(ee),Ne.__version=Ae.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function st(D,M,Z){if(M.image.length!==6)return;const ee=se(D,M),ce=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+Z);const Ae=s.get(ce);if(ce.version!==Ae.__version||ee===!0){i.activeTexture(o.TEXTURE0+Z);const Ne=Ut.getPrimaries(Ut.workingColorSpace),ue=M.colorSpace===fs?null:Ut.getPrimaries(M.colorSpace),fe=M.colorSpace===fs||Ne===ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Fe=M.image[0]&&M.image[0].isDataTexture,Le=[];for(let Se=0;Se<6;Se++)!Ce&&!Fe?Le[Se]=y(M.image[Se],!0,l.maxCubemapSize):Le[Se]=Fe?M.image[Se].image:M.image[Se],Le[Se]=ft(M,Le[Se]);const Ue=Le[0],je=c.convert(M.format,M.colorSpace),$e=c.convert(M.type),ot=w(M.internalFormat,je,$e,M.normalized,M.colorSpace),k=M.isVideoTexture!==!0,Re=Ae.__version===void 0||ee===!0,he=ce.dataReady;let De=N(M,Ue);Pe(o.TEXTURE_CUBE_MAP,M);let Ie;if(Ce){k&&Re&&i.texStorage2D(o.TEXTURE_CUBE_MAP,De,ot,Ue.width,Ue.height);for(let Se=0;Se<6;Se++){Ie=Le[Se].mipmaps;for(let We=0;We<Ie.length;We++){const Ve=Ie[We];M.format!==Fi?je!==null?k?he&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We,0,0,Ve.width,Ve.height,je,Ve.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We,ot,Ve.width,Ve.height,0,Ve.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?he&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We,0,0,Ve.width,Ve.height,je,$e,Ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We,ot,Ve.width,Ve.height,0,je,$e,Ve.data)}}}else{if(Ie=M.mipmaps,k&&Re){Ie.length>0&&De++;const Se=Et(Le[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,De,ot,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Fe){k?he&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Le[Se].width,Le[Se].height,je,$e,Le[Se].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ot,Le[Se].width,Le[Se].height,0,je,$e,Le[Se].data);for(let We=0;We<Ie.length;We++){const en=Ie[We].image[Se].image;k?he&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We+1,0,0,en.width,en.height,je,$e,en.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We+1,ot,en.width,en.height,0,je,$e,en.data)}}else{k?he&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,je,$e,Le[Se]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ot,je,$e,Le[Se]);for(let We=0;We<Ie.length;We++){const Ve=Ie[We];k?he&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We+1,0,0,je,$e,Ve.image[Se]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,We+1,ot,je,$e,Ve.image[Se])}}}x(M)&&z(o.TEXTURE_CUBE_MAP),Ae.__version=ce.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function tt(D,M,Z,ee,ce,Ae){const Ne=c.convert(Z.format,Z.colorSpace),ue=c.convert(Z.type),fe=w(Z.internalFormat,Ne,ue,Z.normalized,Z.colorSpace),Ce=s.get(M),Fe=s.get(Z);if(Fe.__renderTarget=M,!Ce.__hasExternalTextures){const Le=Math.max(1,M.width>>Ae),Ue=Math.max(1,M.height>>Ae);ce===o.TEXTURE_3D||ce===o.TEXTURE_2D_ARRAY?i.texImage3D(ce,Ae,fe,Le,Ue,M.depth,0,Ne,ue,null):i.texImage2D(ce,Ae,fe,Le,Ue,0,Ne,ue,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),ut(M)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ee,ce,Fe.__webglTexture,0,xt(M)):(ce===o.TEXTURE_2D||ce>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ee,ce,Fe.__webglTexture,Ae),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Jt(D,M,Z){if(o.bindRenderbuffer(o.RENDERBUFFER,D),M.depthBuffer){const ee=M.depthTexture,ce=ee&&ee.isDepthTexture?ee.type:null,Ae=I(M.stencilBuffer,ce),Ne=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;ut(M)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xt(M),Ae,M.width,M.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,xt(M),Ae,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Ae,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ne,o.RENDERBUFFER,D)}else{const ee=M.textures;for(let ce=0;ce<ee.length;ce++){const Ae=ee[ce],Ne=c.convert(Ae.format,Ae.colorSpace),ue=c.convert(Ae.type),fe=w(Ae.internalFormat,Ne,ue,Ae.normalized,Ae.colorSpace);ut(M)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,xt(M),fe,M.width,M.height):Z?o.renderbufferStorageMultisample(o.RENDERBUFFER,xt(M),fe,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,fe,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function be(D,M,Z){const ee=M.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ce=s.get(M.depthTexture);if(ce.__renderTarget=M,(!ce.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ee){if(ce.__webglInit===void 0&&(ce.__webglInit=!0,M.depthTexture.addEventListener("dispose",P)),ce.__webglTexture===void 0){ce.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,ce.__webglTexture),Pe(o.TEXTURE_CUBE_MAP,M.depthTexture);const Ce=c.convert(M.depthTexture.format),Fe=c.convert(M.depthTexture.type);let Le;M.depthTexture.format===Da?Le=o.DEPTH_COMPONENT24:M.depthTexture.format===Hs&&(Le=o.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Le,M.width,M.height,0,Ce,Fe,null)}}else $(M.depthTexture,0);const Ae=ce.__webglTexture,Ne=xt(M),ue=ee?o.TEXTURE_CUBE_MAP_POSITIVE_X+Z:o.TEXTURE_2D,fe=M.depthTexture.format===Hs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(M.depthTexture.format===Da)ut(M)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,fe,ue,Ae,0,Ne):o.framebufferTexture2D(o.FRAMEBUFFER,fe,ue,Ae,0);else if(M.depthTexture.format===Hs)ut(M)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,fe,ue,Ae,0,Ne):o.framebufferTexture2D(o.FRAMEBUFFER,fe,ue,Ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Te(D){const M=s.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const ee=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ee){const ce=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ee.removeEventListener("dispose",ce)};ee.addEventListener("dispose",ce),M.__depthDisposeCallback=ce}M.__boundDepthTexture=ee}if(D.depthTexture&&!M.__autoAllocateDepthBuffer)if(Z)for(let ee=0;ee<6;ee++)be(M.__webglFramebuffer[ee],D,ee);else{const ee=D.texture.mipmaps;ee&&ee.length>0?be(M.__webglFramebuffer[0],D,0):be(M.__webglFramebuffer,D,0)}else if(Z){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]===void 0)M.__webglDepthbuffer[ee]=o.createRenderbuffer(),Jt(M.__webglDepthbuffer[ee],D,!1);else{const ce=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=M.__webglDepthbuffer[ee];o.bindRenderbuffer(o.RENDERBUFFER,Ae),o.framebufferRenderbuffer(o.FRAMEBUFFER,ce,o.RENDERBUFFER,Ae)}}else{const ee=D.texture.mipmaps;if(ee&&ee.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Jt(M.__webglDepthbuffer,D,!1);else{const ce=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ae),o.framebufferRenderbuffer(o.FRAMEBUFFER,ce,o.RENDERBUFFER,Ae)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ke(D,M,Z){const ee=s.get(D);M!==void 0&&tt(ee.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Z!==void 0&&Te(D)}function Ye(D){const M=D.texture,Z=s.get(D),ee=s.get(M);D.addEventListener("dispose",b);const ce=D.textures,Ae=D.isWebGLCubeRenderTarget===!0,Ne=ce.length>1;if(Ne||(ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture()),ee.__version=M.version,h.memory.textures++),Ae){Z.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer[ue]=[];for(let fe=0;fe<M.mipmaps.length;fe++)Z.__webglFramebuffer[ue][fe]=o.createFramebuffer()}else Z.__webglFramebuffer[ue]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)Z.__webglFramebuffer[ue]=o.createFramebuffer()}else Z.__webglFramebuffer=o.createFramebuffer();if(Ne)for(let ue=0,fe=ce.length;ue<fe;ue++){const Ce=s.get(ce[ue]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=o.createTexture(),h.memory.textures++)}if(D.samples>0&&ut(D)===!1){Z.__webglMultisampledFramebuffer=o.createFramebuffer(),Z.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ue=0;ue<ce.length;ue++){const fe=ce[ue];Z.__webglColorRenderbuffer[ue]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Z.__webglColorRenderbuffer[ue]);const Ce=c.convert(fe.format,fe.colorSpace),Fe=c.convert(fe.type),Le=w(fe.internalFormat,Ce,Fe,fe.normalized,fe.colorSpace,D.isXRRenderTarget===!0),Ue=xt(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ue,Le,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ue,o.RENDERBUFFER,Z.__webglColorRenderbuffer[ue])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=o.createRenderbuffer(),Jt(Z.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(o.TEXTURE_CUBE_MAP,ee.__webglTexture),Pe(o.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)tt(Z.__webglFramebuffer[ue][fe],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,fe);else tt(Z.__webglFramebuffer[ue],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);x(M)&&z(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ne){for(let ue=0,fe=ce.length;ue<fe;ue++){const Ce=ce[ue],Fe=s.get(Ce);let Le=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Le=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Le,Fe.__webglTexture),Pe(Le,Ce),tt(Z.__webglFramebuffer,D,Ce,o.COLOR_ATTACHMENT0+ue,Le,0),x(Ce)&&z(Le)}i.unbindTexture()}else{let ue=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ue=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ue,ee.__webglTexture),Pe(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let fe=0;fe<M.mipmaps.length;fe++)tt(Z.__webglFramebuffer[fe],D,M,o.COLOR_ATTACHMENT0,ue,fe);else tt(Z.__webglFramebuffer,D,M,o.COLOR_ATTACHMENT0,ue,0);x(M)&&z(ue),i.unbindTexture()}D.depthBuffer&&Te(D)}function ht(D){const M=D.textures;for(let Z=0,ee=M.length;Z<ee;Z++){const ce=M[Z];if(x(ce)){const Ae=H(D),Ne=s.get(ce).__webglTexture;i.bindTexture(Ae,Ne),z(Ae),i.unbindTexture()}}}const nt=[],ct=[];function Lt(D){if(D.samples>0){if(ut(D)===!1){const M=D.textures,Z=D.width,ee=D.height;let ce=o.COLOR_BUFFER_BIT;const Ae=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ne=s.get(D),ue=M.length>1;if(ue)for(let Ce=0;Ce<M.length;Ce++)i.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const fe=D.texture.mipmaps;fe&&fe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let Ce=0;Ce<M.length;Ce++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ce|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ce|=o.STENCIL_BUFFER_BIT)),ue){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ce]);const Fe=s.get(M[Ce]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Fe,0)}o.blitFramebuffer(0,0,Z,ee,0,0,Z,ee,ce,o.NEAREST),m===!0&&(nt.length=0,ct.length=0,nt.push(o.COLOR_ATTACHMENT0+Ce),D.depthBuffer&&D.resolveDepthBuffer===!1&&(nt.push(Ae),ct.push(Ae),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ct)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,nt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ue)for(let Ce=0;Ce<M.length;Ce++){i.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.RENDERBUFFER,Ne.__webglColorRenderbuffer[Ce]);const Fe=s.get(M[Ce]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ne.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ce,o.TEXTURE_2D,Fe,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function xt(D){return Math.min(l.maxSamples,D.samples)}function ut(D){const M=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function X(D){const M=h.render.frame;v.get(D)!==M&&(v.set(D,M),D.update())}function ft(D,M){const Z=D.colorSpace,ee=D.format,ce=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==Yc&&Z!==fs&&(Ut.getTransfer(Z)===Yt?(ee!==Fi||ce!==wi)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",Z)),M}function Et(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=O,this.resetTextureUnits=de,this.getTextureUnits=ge,this.setTextureUnits=J,this.setTexture2D=$,this.setTexture2DArray=me,this.setTexture3D=Ee,this.setTextureCube=U,this.rebindTextures=ke,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function rA(o,e){function i(s,l=fs){let c;const h=Ut.getTransfer(l);if(s===wi)return o.UNSIGNED_BYTE;if(s===Wd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===qd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===fv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===hv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===cv)return o.BYTE;if(s===uv)return o.SHORT;if(s===$o)return o.UNSIGNED_SHORT;if(s===Xd)return o.INT;if(s===ta)return o.UNSIGNED_INT;if(s===Ji)return o.FLOAT;if(s===_i)return o.HALF_FLOAT;if(s===dv)return o.ALPHA;if(s===pv)return o.RGB;if(s===Fi)return o.RGBA;if(s===Da)return o.DEPTH_COMPONENT;if(s===Hs)return o.DEPTH_STENCIL;if(s===mv)return o.RED;if(s===Yd)return o.RED_INTEGER;if(s===Vs)return o.RG;if(s===Zd)return o.RG_INTEGER;if(s===Kd)return o.RGBA_INTEGER;if(s===Fc||s===Hc||s===Gc||s===Vc)if(h===Yt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Fc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Fc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Gc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===cd||s===ud||s===fd||s===hd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===cd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ud)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dd||s===pd||s===md||s===gd||s===_d||s===Wc||s===vd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===dd||s===pd)return h===Yt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===md)return h===Yt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===gd)return c.COMPRESSED_R11_EAC;if(s===_d)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Wc)return c.COMPRESSED_RG11_EAC;if(s===vd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===xd||s===Sd||s===Md||s===yd||s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd||s===Ud||s===Nd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===xd)return h===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Sd)return h===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Md)return h===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===yd)return h===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ed)return h===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bd)return h===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Td)return h===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ad)return h===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rd)return h===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Cd)return h===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===wd)return h===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dd)return h===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ud)return h===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Nd)return h===Yt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ld||s===Od||s===Pd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Ld)return h===Yt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Od)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Pd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Id||s===zd||s===qc||s===Bd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Id)return c.COMPRESSED_RED_RGTC1_EXT;if(s===zd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===qc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Bd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===el?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const oA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class cA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new Av(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Xn({vertexShader:oA,fragmentShader:lA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Vn(new iu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class uA extends Ws{constructor(e,i){super();const s=this;let l=null,c=1,h=null,p="local-floor",m=1,d=null,v=null,S=null,g=null,E=null,T=null;const C=typeof XRWebGLBinding<"u",y=new cA,x={},z=i.getContextAttributes();let H=null,w=null;const I=[],N=[],P=new mt;let b=null;const L=new Ci;L.viewport=new fn;const q=new Ci;q.viewport=new fn;const G=[L,q],Q=new _y;let de=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Me=I[se];return Me===void 0&&(Me=new Ah,I[se]=Me),Me.getTargetRaySpace()},this.getControllerGrip=function(se){let Me=I[se];return Me===void 0&&(Me=new Ah,I[se]=Me),Me.getGripSpace()},this.getHand=function(se){let Me=I[se];return Me===void 0&&(Me=new Ah,I[se]=Me),Me.getHandSpace()};function J(se){const Me=N.indexOf(se.inputSource);if(Me===-1)return;const ye=I[Me];ye!==void 0&&(ye.update(se.inputSource,se.frame,d||h),ye.dispatchEvent({type:se.type,data:se.inputSource}))}function O(){l.removeEventListener("select",J),l.removeEventListener("selectstart",J),l.removeEventListener("selectend",J),l.removeEventListener("squeeze",J),l.removeEventListener("squeezestart",J),l.removeEventListener("squeezeend",J),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",B);for(let se=0;se<I.length;se++){const Me=N[se];Me!==null&&(N[se]=null,I[se].disconnect(Me))}de=null,ge=null,y.reset();for(const se in x)delete x[se];e.setRenderTarget(H),E=null,g=null,S=null,l=null,w=null,Pe.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){c=se,s.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){p=se,s.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(se){d=se},this.getBaseLayer=function(){return g!==null?g:E},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(se){if(l=se,l!==null){if(H=e.getRenderTarget(),l.addEventListener("select",J),l.addEventListener("selectstart",J),l.addEventListener("selectend",J),l.addEventListener("squeeze",J),l.addEventListener("squeezestart",J),l.addEventListener("squeezeend",J),l.addEventListener("end",O),l.addEventListener("inputsourceschange",B),z.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,He=null,st=null;z.depth&&(st=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=z.stencil?Hs:Da,He=z.stencil?el:ta);const tt={colorFormat:i.RGBA8,depthFormat:st,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer(tt),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),w=new ii(g.textureWidth,g.textureHeight,{format:Fi,type:wi,depthTexture:new Yr(g.textureWidth,g.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:z.stencil,colorSpace:e.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ye={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),w=new ii(E.framebufferWidth,E.framebufferHeight,{format:Fi,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(m),d=null,h=await l.requestReferenceSpace(p),Pe.setContext(l),Pe.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(se){for(let Me=0;Me<se.removed.length;Me++){const ye=se.removed[Me],He=N.indexOf(ye);He>=0&&(N[He]=null,I[He].disconnect(ye))}for(let Me=0;Me<se.added.length;Me++){const ye=se.added[Me];let He=N.indexOf(ye);if(He===-1){for(let tt=0;tt<I.length;tt++)if(tt>=N.length){N.push(ye),He=tt;break}else if(N[tt]===null){N[tt]=ye,He=tt;break}if(He===-1)break}const st=I[He];st&&st.connect(ye)}}const $=new j,me=new j;function Ee(se,Me,ye){$.setFromMatrixPosition(Me.matrixWorld),me.setFromMatrixPosition(ye.matrixWorld);const He=$.distanceTo(me),st=Me.projectionMatrix.elements,tt=ye.projectionMatrix.elements,Jt=st[14]/(st[10]-1),be=st[14]/(st[10]+1),Te=(st[9]+1)/st[5],ke=(st[9]-1)/st[5],Ye=(st[8]-1)/st[0],ht=(tt[8]+1)/tt[0],nt=Jt*Ye,ct=Jt*ht,Lt=He/(-Ye+ht),xt=Lt*-Ye;if(Me.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(xt),se.translateZ(Lt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),st[10]===-1)se.projectionMatrix.copy(Me.projectionMatrix),se.projectionMatrixInverse.copy(Me.projectionMatrixInverse);else{const ut=Jt+Lt,X=be+Lt,ft=nt-xt,Et=ct+(He-xt),D=Te*be/X*ut,M=ke*be/X*ut;se.projectionMatrix.makePerspective(ft,Et,D,M,ut,X),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function U(se,Me){Me===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Me.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(l===null)return;let Me=se.near,ye=se.far;y.texture!==null&&(y.depthNear>0&&(Me=y.depthNear),y.depthFar>0&&(ye=y.depthFar)),Q.near=q.near=L.near=Me,Q.far=q.far=L.far=ye,(de!==Q.near||ge!==Q.far)&&(l.updateRenderState({depthNear:Q.near,depthFar:Q.far}),de=Q.near,ge=Q.far),Q.layers.mask=se.layers.mask|6,L.layers.mask=Q.layers.mask&-5,q.layers.mask=Q.layers.mask&-3;const He=se.parent,st=Q.cameras;U(Q,He);for(let tt=0;tt<st.length;tt++)U(st[tt],He);st.length===2?Ee(Q,L,q):Q.projectionMatrix.copy(L.projectionMatrix),Y(se,Q,He)};function Y(se,Me,ye){ye===null?se.matrix.copy(Me.matrixWorld):(se.matrix.copy(ye.matrixWorld),se.matrix.invert(),se.matrix.multiply(Me.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Me.projectionMatrix),se.projectionMatrixInverse.copy(Me.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Fd*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&E===null))return m},this.setFoveation=function(se){m=se,g!==null&&(g.fixedFoveation=se),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Q)},this.getCameraTexture=function(se){return x[se]};let xe=null;function we(se,Me){if(v=Me.getViewerPose(d||h),T=Me,v!==null){const ye=v.views;E!==null&&(e.setRenderTargetFramebuffer(w,E.framebuffer),e.setRenderTarget(w));let He=!1;ye.length!==Q.cameras.length&&(Q.cameras.length=0,He=!0);for(let be=0;be<ye.length;be++){const Te=ye[be];let ke=null;if(E!==null)ke=E.getViewport(Te);else{const ht=S.getViewSubImage(g,Te);ke=ht.viewport,be===0&&(e.setRenderTargetTextures(w,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(w))}let Ye=G[be];Ye===void 0&&(Ye=new Ci,Ye.layers.enable(be),Ye.viewport=new fn,G[be]=Ye),Ye.matrix.fromArray(Te.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Te.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ke.x,ke.y,ke.width,ke.height),be===0&&(Q.matrix.copy(Ye.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),He===!0&&Q.cameras.push(Ye)}const st=l.enabledFeatures;if(st&&st.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){S=s.getBinding();const be=S.getDepthInformation(ye[0]);be&&be.isValid&&be.texture&&y.init(be,l.renderState)}if(st&&st.includes("camera-access")&&C){e.state.unbindTexture(),S=s.getBinding();for(let be=0;be<ye.length;be++){const Te=ye[be].camera;if(Te){let ke=x[Te];ke||(ke=new Av,x[Te]=ke);const Ye=S.getCameraImage(Te);ke.sourceTexture=Ye}}}}for(let ye=0;ye<I.length;ye++){const He=N[ye],st=I[ye];He!==null&&st!==void 0&&st.update(He,Me,d||h)}xe&&xe(se,Me),Me.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Me}),T=null}const Pe=new wv;Pe.setAnimationLoop(we),this.setAnimationLoop=function(se){xe=se},this.dispose=function(){}}}const fA=new mn,Iv=new pt;Iv.set(-1,0,0,0,1,0,0,0,1);function hA(o,e){function i(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function s(y,x){x.color.getRGB(y.fogColor.value,Rv(o)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function l(y,x,z,H,w){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?c(y,x):x.isMeshLambertMaterial?(c(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(c(y,x),S(y,x)):x.isMeshPhongMaterial?(c(y,x),v(y,x),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(c(y,x),g(y,x),x.isMeshPhysicalMaterial&&E(y,x,w)):x.isMeshMatcapMaterial?(c(y,x),T(y,x)):x.isMeshDepthMaterial?c(y,x):x.isMeshDistanceMaterial?(c(y,x),C(y,x)):x.isMeshNormalMaterial?c(y,x):x.isLineBasicMaterial?(h(y,x),x.isLineDashedMaterial&&p(y,x)):x.isPointsMaterial?m(y,x,z,H):x.isSpriteMaterial?d(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,i(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===ni&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,i(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===ni&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,i(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,i(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const z=e.get(x),H=z.envMap,w=z.envMapRotation;H&&(y.envMap.value=H,y.envMapRotation.value.setFromMatrix4(fA.makeRotationFromEuler(w)).transpose(),H.isCubeTexture&&H.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Iv),y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,i(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,y.aoMapTransform))}function h(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform))}function p(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function m(y,x,z,H){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*z,y.scale.value=H*.5,x.map&&(y.map.value=x.map,i(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,i(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,i(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function S(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function g(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function E(y,x,z){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ni&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=z.texture,y.transmissionSamplerSize.value.set(z.width,z.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const z=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(z.matrixWorld),y.nearDistance.value=z.shadow.camera.near,y.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function dA(o,e,i,s){let l={},c={},h=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(w,I){const N=I.program;s.uniformBlockBinding(w,N)}function d(w,I){let N=l[w.id];N===void 0&&(y(w),N=v(w),l[w.id]=N,w.addEventListener("dispose",z));const P=I.program;s.updateUBOMapping(w,P);const b=e.render.frame;c[w.id]!==b&&(g(w),c[w.id]=b)}function v(w){const I=S();w.__bindingPointIndex=I;const N=o.createBuffer(),P=w.__size,b=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,N),o.bufferData(o.UNIFORM_BUFFER,P,b),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,I,N),N}function S(){for(let w=0;w<p;w++)if(h.indexOf(w)===-1)return h.push(w),w;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const I=l[w.id],N=w.uniforms,P=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,I);for(let b=0,L=N.length;b<L;b++){const q=N[b];if(Array.isArray(q))for(let G=0,Q=q.length;G<Q;G++)E(q[G],b,G,P);else E(q,b,0,P)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function E(w,I,N,P){if(C(w,I,N,P)===!0){const b=w.__offset,L=w.value;if(Array.isArray(L)){let q=0;for(let G=0;G<L.length;G++){const Q=L[G],de=x(Q);T(Q,w.__data,q),typeof Q!="number"&&typeof Q!="boolean"&&!Q.isMatrix3&&!ArrayBuffer.isView(Q)&&(q+=de.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(L,w.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,b,w.__data)}}function T(w,I,N){typeof w=="number"||typeof w=="boolean"?I[0]=w:w.isMatrix3?(I[0]=w.elements[0],I[1]=w.elements[1],I[2]=w.elements[2],I[3]=0,I[4]=w.elements[3],I[5]=w.elements[4],I[6]=w.elements[5],I[7]=0,I[8]=w.elements[6],I[9]=w.elements[7],I[10]=w.elements[8],I[11]=0):ArrayBuffer.isView(w)?I.set(new w.constructor(w.buffer,w.byteOffset,I.length)):w.toArray(I,N)}function C(w,I,N,P){const b=w.value,L=I+"_"+N;if(P[L]===void 0)return typeof b=="number"||typeof b=="boolean"?P[L]=b:ArrayBuffer.isView(b)?P[L]=b.slice():P[L]=b.clone(),!0;{const q=P[L];if(typeof b=="number"||typeof b=="boolean"){if(q!==b)return P[L]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(q.equals(b)===!1)return q.copy(b),!0}}return!1}function y(w){const I=w.uniforms;let N=0;const P=16;for(let L=0,q=I.length;L<q;L++){const G=Array.isArray(I[L])?I[L]:[I[L]];for(let Q=0,de=G.length;Q<de;Q++){const ge=G[Q],J=Array.isArray(ge.value)?ge.value:[ge.value];for(let O=0,B=J.length;O<B;O++){const $=J[O],me=x($),Ee=N%P,U=Ee%me.boundary,Y=Ee+U;N+=U,Y!==0&&P-Y<me.storage&&(N+=P-Y),ge.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),ge.__offset=N,N+=me.storage}}}const b=N%P;return b>0&&(N+=P-b),w.__size=N,w.__cache={},this}function x(w){const I={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(I.boundary=4,I.storage=4):w.isVector2?(I.boundary=8,I.storage=8):w.isVector3||w.isColor?(I.boundary=16,I.storage=12):w.isVector4?(I.boundary=16,I.storage=16):w.isMatrix3?(I.boundary=48,I.storage=48):w.isMatrix4?(I.boundary=64,I.storage=64):w.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(I.boundary=16,I.storage=w.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",w),I}function z(w){const I=w.target;I.removeEventListener("dispose",z);const N=h.indexOf(I.__bindingPointIndex);h.splice(N,1),o.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function H(){for(const w in l)o.deleteBuffer(l[w]);h=[],l={},c={}}return{bind:m,update:d,dispose:H}}const pA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ki=null;function mA(){return Ki===null&&(Ki=new iy(pA,16,16,Vs,_i),Ki.name="DFG_LUT",Ki.minFilter=kn,Ki.magFilter=kn,Ki.wrapS=Ca,Ki.wrapT=Ca,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}class gA{constructor(e={}){const{canvas:i=OM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:E=wi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=h;const C=E,y=new Set([Kd,Zd,Yd]),x=new Set([wi,ta,$o,el,Wd,qd]),z=new Uint32Array(4),H=new Int32Array(4),w=new j;let I=null,N=null;const P=[],b=[];let L=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ea,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let G=!1,Q=null,de=null,ge=null,J=null;this._outputColorSpace=Ri;let O=0,B=0,$=null,me=-1,Ee=null;const U=new fn,Y=new fn;let xe=null;const we=new Rt(0);let Pe=0,se=i.width,Me=i.height,ye=1,He=null,st=null;const tt=new fn(0,0,se,Me),Jt=new fn(0,0,se,Me);let be=!1;const Te=new Ev;let ke=!1,Ye=!1;const ht=new mn,nt=new j,ct=new fn,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function ut(){return $===null?ye:1}let X=s;function ft(A,W){return i.getContext(A,W)}try{const A={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kd}`),i.addEventListener("webglcontextlost",en,!1),i.addEventListener("webglcontextrestored",Pt,!1),i.addEventListener("webglcontextcreationerror",Pn,!1),X===null){const W="webgl2";if(X=ft(W,A),X===null)throw ft(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ot("WebGLRenderer: "+A.message),A}let Et,D,M,Z,ee,ce,Ae,Ne,ue,fe,Ce,Fe,Le,Ue,je,$e,ot,k,Re,he,De,Ie,Se;function We(){Et=new mT(X),Et.init(),De=new rA(X,Et),D=new oT(X,Et,e,De),M=new aA(X,Et),D.reversedDepthBuffer&&g&&M.buffers.depth.setReversed(!0),de=X.createFramebuffer(),ge=X.createFramebuffer(),J=X.createFramebuffer(),Z=new vT(X),ee=new X1,ce=new sA(X,Et,M,ee,D,De,Z),Ae=new pT(q),Ne=new yy(X),Ie=new sT(X,Ne),ue=new gT(X,Ne,Z,Ie),fe=new ST(X,ue,Ne,Ie,Z),k=new xT(X,D,ce),je=new lT(ee),Ce=new k1(q,Ae,Et,D,Ie,je),Fe=new hA(q,ee),Le=new q1,Ue=new j1(Et),ot=new aT(q,Ae,M,fe,T,m),$e=new iA(q,fe,D),Se=new dA(X,Z,D,M),Re=new rT(X,Et,Z),he=new _T(X,Et,Z),Z.programs=Ce.programs,q.capabilities=D,q.extensions=Et,q.properties=ee,q.renderLists=Le,q.shadowMap=$e,q.state=M,q.info=Z}We(),C!==wi&&(L=new yT(C,i.width,i.height,p,l,c));const Ve=new uA(q,X);this.xr=Ve,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const A=Et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(A){A!==void 0&&(ye=A,this.setSize(se,Me,!1))},this.getSize=function(A){return A.set(se,Me)},this.setSize=function(A,W,re=!0){if(Ve.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,Me=W,i.width=Math.floor(A*ye),i.height=Math.floor(W*ye),re===!0&&(i.style.width=A+"px",i.style.height=W+"px"),L!==null&&L.setSize(i.width,i.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(se*ye,Me*ye).floor()},this.setDrawingBufferSize=function(A,W,re){se=A,Me=W,ye=re,i.width=Math.floor(A*re),i.height=Math.floor(W*re),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(C===wi){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(tt)},this.setViewport=function(A,W,re,ie){A.isVector4?tt.set(A.x,A.y,A.z,A.w):tt.set(A,W,re,ie),M.viewport(U.copy(tt).multiplyScalar(ye).round())},this.getScissor=function(A){return A.copy(Jt)},this.setScissor=function(A,W,re,ie){A.isVector4?Jt.set(A.x,A.y,A.z,A.w):Jt.set(A,W,re,ie),M.scissor(Y.copy(Jt).multiplyScalar(ye).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(A){M.setScissorTest(be=A)},this.setOpaqueSort=function(A){He=A},this.setTransparentSort=function(A){st=A},this.getClearColor=function(A){return A.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor(...arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,re=!0){let ie=0;if(A){let ae=!1;if($!==null){const ze=$.texture.format;ae=y.has(ze)}if(ae){const ze=$.texture.type,Xe=x.has(ze),Oe=ot.getClearColor(),Ze=ot.getClearAlpha(),qe=Oe.r,it=Oe.g,gt=Oe.b;Xe?(z[0]=qe,z[1]=it,z[2]=gt,z[3]=Ze,X.clearBufferuiv(X.COLOR,0,z)):(H[0]=qe,H[1]=it,H[2]=gt,H[3]=Ze,X.clearBufferiv(X.COLOR,0,H))}else ie|=X.COLOR_BUFFER_BIT}W&&(ie|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),re&&(ie|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&X.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Q=A},this.dispose=function(){i.removeEventListener("webglcontextlost",en,!1),i.removeEventListener("webglcontextrestored",Pt,!1),i.removeEventListener("webglcontextcreationerror",Pn,!1),ot.dispose(),Le.dispose(),Ue.dispose(),ee.dispose(),Ae.dispose(),fe.dispose(),Ie.dispose(),Se.dispose(),Ce.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",ln),Ve.removeEventListener("sessionend",tn),hn.stop()};function en(A){A.preventDefault(),n_("WebGLRenderer: Context Lost."),G=!0}function Pt(){n_("WebGLRenderer: Context Restored."),G=!1;const A=Z.autoReset,W=$e.enabled,re=$e.autoUpdate,ie=$e.needsUpdate,ae=$e.type;We(),Z.autoReset=A,$e.enabled=W,$e.autoUpdate=re,$e.needsUpdate=ie,$e.type=ae}function Pn(A){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function In(A){const W=A.target;W.removeEventListener("dispose",In),St(W)}function St(A){Gt(A),ee.remove(A)}function Gt(A){const W=ee.get(A).programs;W!==void 0&&(W.forEach(function(re){Ce.releaseProgram(re)}),A.isShaderMaterial&&Ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,re,ie,ae,ze){W===null&&(W=Lt);const Xe=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,Oe=Oa(A,W,re,ie,ae);M.setMaterial(ie,Xe);let Ze=re.index,qe=1;if(ie.wireframe===!0){if(Ze=ue.getWireframeAttribute(re),Ze===void 0)return;qe=2}const it=re.drawRange,gt=re.attributes.position;let et=it.start*qe,It=(it.start+it.count)*qe;ze!==null&&(et=Math.max(et,ze.start*qe),It=Math.min(It,(ze.start+ze.count)*qe)),Ze!==null?(et=Math.max(et,0),It=Math.min(It,Ze.count)):gt!=null&&(et=Math.max(et,0),It=Math.min(It,gt.count));const sn=It-et;if(sn<0||sn===1/0)return;Ie.setup(ae,ie,Oe,re,Ze);let jt,Vt=Re;if(Ze!==null&&(jt=Ne.get(Ze),Vt=he,Vt.setIndex(jt)),ae.isMesh)ie.wireframe===!0?(M.setLineWidth(ie.wireframeLinewidth*ut()),Vt.setMode(X.LINES)):Vt.setMode(X.TRIANGLES);else if(ae.isLine){let kt=ie.linewidth;kt===void 0&&(kt=1),M.setLineWidth(kt*ut()),ae.isLineSegments?Vt.setMode(X.LINES):ae.isLineLoop?Vt.setMode(X.LINE_LOOP):Vt.setMode(X.LINE_STRIP)}else ae.isPoints?Vt.setMode(X.POINTS):ae.isSprite&&Vt.setMode(X.TRIANGLES);if(ae.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))Vt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const kt=ae._multiDrawStarts,Ge=ae._multiDrawCounts,Bn=ae._multiDrawCount,bt=Ze?Ne.get(Ze).bytesPerElement:1,En=ee.get(ie).currentProgram.getUniforms();for(let ri=0;ri<Bn;ri++)En.setValue(X,"_gl_DrawID",ri),Vt.render(kt[ri]/bt,Ge[ri])}else if(ae.isInstancedMesh)Vt.renderInstances(et,sn,ae.count);else if(re.isInstancedBufferGeometry){const kt=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ge=Math.min(re.instanceCount,kt);Vt.renderInstances(et,sn,Ge)}else Vt.render(et,sn)};function Wn(A,W,re){A.transparent===!0&&A.side===Ra&&A.forceSinglePass===!1?(A.side=ni,A.needsUpdate=!0,La(A,W,re),A.side=ds,A.needsUpdate=!0,La(A,W,re),A.side=Ra):La(A,W,re)}this.compile=function(A,W,re=null){re===null&&(re=A),N=Ue.get(re),N.init(W),b.push(N),re.traverseVisible(function(ae){ae.isLight&&ae.layers.test(W.layers)&&(N.pushLight(ae),ae.castShadow&&N.pushShadow(ae))}),A!==re&&A.traverseVisible(function(ae){ae.isLight&&ae.layers.test(W.layers)&&(N.pushLight(ae),ae.castShadow&&N.pushShadow(ae))}),N.setupLights();const ie=new Set;return A.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const ze=ae.material;if(ze)if(Array.isArray(ze))for(let Xe=0;Xe<ze.length;Xe++){const Oe=ze[Xe];Wn(Oe,re,ae),ie.add(Oe)}else Wn(ze,re,ae),ie.add(ze)}),N=b.pop(),ie},this.compileAsync=function(A,W,re=null){const ie=this.compile(A,W,re);return new Promise(ae=>{function ze(){if(ie.forEach(function(Xe){ee.get(Xe).currentProgram.isReady()&&ie.delete(Xe)}),ie.size===0){ae(A);return}setTimeout(ze,10)}Et.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let zn=null;function gn(A){zn&&zn(A)}function ln(){hn.stop()}function tn(){hn.start()}const hn=new wv;hn.setAnimationLoop(gn),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(A){zn=A,Ve.setAnimationLoop(A),A===null?hn.stop():hn.start()},Ve.addEventListener("sessionstart",ln),Ve.addEventListener("sessionend",tn),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;Q!==null&&Q.renderStart(A,W);const re=Ve.enabled===!0&&Ve.isPresenting===!0,ie=L!==null&&($===null||re)&&L.begin(q,$);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(W),W=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(q,A,W,$),N=Ue.get(A,b.length),N.init(W),N.state.textureUnits=ce.getTextureUnits(),b.push(N),ht.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Te.setFromProjectionMatrix(ht,ji,W.reversedDepth),Ye=this.localClippingEnabled,ke=je.init(this.clippingPlanes,Ye),I=Le.get(A,P.length),I.init(),P.push(I),Ve.enabled===!0&&Ve.isPresenting===!0){const Xe=q.xr.getDepthSensingMesh();Xe!==null&&Gi(Xe,W,-1/0,q.sortObjects)}Gi(A,W,0,q.sortObjects),I.finish(),q.sortObjects===!0&&I.sort(He,st,W.reversedDepth),xt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,xt&&ot.addToRenderList(I,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ke===!0&&je.beginShadows();const ae=N.state.shadowsArray;if($e.render(ae,A,W),ke===!0&&je.endShadows(),(ie&&L.hasRenderPass())===!1){const Xe=I.opaque,Oe=I.transmissive;if(N.setupLights(),W.isArrayCamera){const Ze=W.cameras;if(Oe.length>0)for(let qe=0,it=Ze.length;qe<it;qe++){const gt=Ze[qe];Ys(Xe,Oe,A,gt)}xt&&ot.render(A);for(let qe=0,it=Ze.length;qe<it;qe++){const gt=Ze[qe];Ua(I,A,gt,gt.viewport)}}else Oe.length>0&&Ys(Xe,Oe,A,W),xt&&ot.render(A),Ua(I,A,W)}$!==null&&B===0&&(ce.updateMultisampleRenderTarget($),ce.updateRenderTargetMipmap($)),ie&&L.end(q),A.isScene===!0&&A.onAfterRender(q,A,W),Ie.resetDefaultState(),me=-1,Ee=null,b.pop(),b.length>0?(N=b[b.length-1],ce.setTextureUnits(N.state.textureUnits),ke===!0&&je.setGlobalState(q.clippingPlanes,N.state.camera)):N=null,P.pop(),P.length>0?I=P[P.length-1]:I=null,Q!==null&&Q.renderEnd()};function Gi(A,W,re,ie){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)re=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Te.intersectsSprite(A)){ie&&ct.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ht);const Xe=fe.update(A),Oe=A.material;Oe.visible&&I.push(A,Xe,Oe,re,ct.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Te.intersectsObject(A))){const Xe=fe.update(A),Oe=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ct.copy(A.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),ct.copy(Xe.boundingSphere.center)),ct.applyMatrix4(A.matrixWorld).applyMatrix4(ht)),Array.isArray(Oe)){const Ze=Xe.groups;for(let qe=0,it=Ze.length;qe<it;qe++){const gt=Ze[qe],et=Oe[gt.materialIndex];et&&et.visible&&I.push(A,Xe,et,re,ct.z,gt)}}else Oe.visible&&I.push(A,Xe,Oe,re,ct.z,null)}}const ze=A.children;for(let Xe=0,Oe=ze.length;Xe<Oe;Xe++)Gi(ze[Xe],W,re,ie)}function Ua(A,W,re,ie){const{opaque:ae,transmissive:ze,transparent:Xe}=A;N.setupLightsView(re),ke===!0&&je.setGlobalState(q.clippingPlanes,re),ie&&M.viewport(U.copy(ie)),ae.length>0&&Vi(ae,W,re),ze.length>0&&Vi(ze,W,re),Xe.length>0&&Vi(Xe,W,re),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Ys(A,W,re,ie){if((re.isScene===!0?re.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ie.id]===void 0){const et=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ie.id]=new ii(1,1,{generateMipmaps:!0,type:et?_i:wi,minFilter:Fs,samples:Math.max(4,D.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace})}const ze=N.state.transmissionRenderTarget[ie.id],Xe=ie.viewport||U;ze.setSize(Xe.z*q.transmissionResolutionScale,Xe.w*q.transmissionResolutionScale);const Oe=q.getRenderTarget(),Ze=q.getActiveCubeFace(),qe=q.getActiveMipmapLevel();q.setRenderTarget(ze),q.getClearColor(we),Pe=q.getClearAlpha(),Pe<1&&q.setClearColor(16777215,.5),q.clear(),xt&&ot.render(re);const it=q.toneMapping;q.toneMapping=ea;const gt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),N.setupLightsView(ie),ke===!0&&je.setGlobalState(q.clippingPlanes,ie),Vi(A,re,ie),ce.updateMultisampleRenderTarget(ze),ce.updateRenderTargetMipmap(ze),Et.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let It=0,sn=W.length;It<sn;It++){const jt=W[It],{object:Vt,geometry:kt,material:Ge,group:Bn}=jt;if(Ge.side===Ra&&Vt.layers.test(ie.layers)){const bt=Ge.side;Ge.side=ni,Ge.needsUpdate=!0,Na(Vt,re,ie,kt,Ge,Bn),Ge.side=bt,Ge.needsUpdate=!0,et=!0}}et===!0&&(ce.updateMultisampleRenderTarget(ze),ce.updateRenderTargetMipmap(ze))}q.setRenderTarget(Oe,Ze,qe),q.setClearColor(we,Pe),gt!==void 0&&(ie.viewport=gt),q.toneMapping=it}function Vi(A,W,re){const ie=W.isScene===!0?W.overrideMaterial:null;for(let ae=0,ze=A.length;ae<ze;ae++){const Xe=A[ae],{object:Oe,geometry:Ze,group:qe}=Xe;let it=Xe.material;it.allowOverride===!0&&ie!==null&&(it=ie),Oe.layers.test(re.layers)&&Na(Oe,W,re,Ze,it,qe)}}function Na(A,W,re,ie,ae,ze){A.onBeforeRender(q,W,re,ie,ae,ze),A.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(q,W,re,ie,A,ze),ae.transparent===!0&&ae.side===Ra&&ae.forceSinglePass===!1?(ae.side=ni,ae.needsUpdate=!0,q.renderBufferDirect(re,W,ie,ae,A,ze),ae.side=ds,ae.needsUpdate=!0,q.renderBufferDirect(re,W,ie,ae,A,ze),ae.side=Ra):q.renderBufferDirect(re,W,ie,ae,A,ze),A.onAfterRender(q,W,re,ie,ae,ze)}function La(A,W,re){W.isScene!==!0&&(W=Lt);const ie=ee.get(A),ae=N.state.lights,ze=N.state.shadowsArray,Xe=ae.state.version,Oe=Ce.getParameters(A,ae.state,ze,W,re,N.state.lightProbeGridArray),Ze=Ce.getProgramCacheKey(Oe);let qe=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,ie.fog=W.fog;const it=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=Ae.get(A.envMap||ie.environment,it),ie.envMapRotation=ie.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,qe===void 0&&(A.addEventListener("dispose",In),qe=new Map,ie.programs=qe);let gt=qe.get(Ze);if(gt!==void 0){if(ie.currentProgram===gt&&ie.lightsStateVersion===Xe)return ia(A,Oe),gt}else Oe.uniforms=Ce.getUniforms(A),Q!==null&&A.isNodeMaterial&&Q.build(A,re,Oe),A.onBeforeCompile(Oe,q),gt=Ce.acquireProgram(Oe,Ze),qe.set(Ze,gt),ie.uniforms=Oe.uniforms;const et=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(et.clippingPlanes=je.uniform),ia(A,Oe),ie.needsLights=sl(A),ie.lightsStateVersion=Xe,ie.needsLights&&(et.ambientLightColor.value=ae.state.ambient,et.lightProbe.value=ae.state.probe,et.directionalLights.value=ae.state.directional,et.directionalLightShadows.value=ae.state.directionalShadow,et.spotLights.value=ae.state.spot,et.spotLightShadows.value=ae.state.spotShadow,et.rectAreaLights.value=ae.state.rectArea,et.ltc_1.value=ae.state.rectAreaLTC1,et.ltc_2.value=ae.state.rectAreaLTC2,et.pointLights.value=ae.state.point,et.pointLightShadows.value=ae.state.pointShadow,et.hemisphereLights.value=ae.state.hemi,et.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,et.spotLightMatrix.value=ae.state.spotLightMatrix,et.spotLightMap.value=ae.state.spotLightMap,et.pointShadowMatrix.value=ae.state.pointShadowMatrix),ie.lightProbeGrid=N.state.lightProbeGridArray.length>0,ie.currentProgram=gt,ie.uniformsList=null,gt}function na(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=kc.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function ia(A,W){const re=ee.get(A);re.outputColorSpace=W.outputColorSpace,re.batching=W.batching,re.batchingColor=W.batchingColor,re.instancing=W.instancing,re.instancingColor=W.instancingColor,re.instancingMorph=W.instancingMorph,re.skinning=W.skinning,re.morphTargets=W.morphTargets,re.morphNormals=W.morphNormals,re.morphColors=W.morphColors,re.morphTargetsCount=W.morphTargetsCount,re.numClippingPlanes=W.numClippingPlanes,re.numIntersection=W.numClipIntersection,re.vertexAlphas=W.vertexAlphas,re.vertexTangents=W.vertexTangents,re.toneMapping=W.toneMapping}function ps(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;w.setFromMatrixPosition(W.matrixWorld);for(let re=0,ie=A.length;re<ie;re++){const ae=A[re];if(ae.texture!==null&&ae.boundingBox.containsPoint(w))return ae}return null}function Oa(A,W,re,ie,ae){W.isScene!==!0&&(W=Lt),ce.resetTextureUnits();const ze=W.fog,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?W.environment:null,Oe=$===null?q.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ut.workingColorSpace,Ze=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,qe=Ae.get(ie.envMap||Xe,Ze),it=ie.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,gt=!!re.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),et=!!re.morphAttributes.position,It=!!re.morphAttributes.normal,sn=!!re.morphAttributes.color;let jt=ea;ie.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(jt=q.toneMapping);const Vt=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,kt=Vt!==void 0?Vt.length:0,Ge=ee.get(ie),Bn=N.state.lights;if(ke===!0&&(Ye===!0||A!==Ee)){const Ht=A===Ee&&ie.id===me;je.setState(ie,A,Ht)}let bt=!1;ie.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Bn.state.version||Ge.outputColorSpace!==Oe||ae.isBatchedMesh&&Ge.batching===!1||!ae.isBatchedMesh&&Ge.batching===!0||ae.isBatchedMesh&&Ge.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&Ge.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&Ge.instancing===!1||!ae.isInstancedMesh&&Ge.instancing===!0||ae.isSkinnedMesh&&Ge.skinning===!1||!ae.isSkinnedMesh&&Ge.skinning===!0||ae.isInstancedMesh&&Ge.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&Ge.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&Ge.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&Ge.instancingMorph===!1&&ae.morphTexture!==null||Ge.envMap!==qe||ie.fog===!0&&Ge.fog!==ze||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==je.numPlanes||Ge.numIntersection!==je.numIntersection)||Ge.vertexAlphas!==it||Ge.vertexTangents!==gt||Ge.morphTargets!==et||Ge.morphNormals!==It||Ge.morphColors!==sn||Ge.toneMapping!==jt||Ge.morphTargetsCount!==kt||!!Ge.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(bt=!0):(bt=!0,Ge.__version=ie.version);let En=Ge.currentProgram;bt===!0&&(En=La(ie,W,ae),Q&&ie.isNodeMaterial&&Q.onUpdateProgram(ie,En,Ge));let ri=!1,Di=!1,oi=!1;const Xt=En.getUniforms(),rn=Ge.uniforms;if(M.useProgram(En.program)&&(ri=!0,Di=!0,oi=!0),ie.id!==me&&(me=ie.id,Di=!0),Ge.needsLights){const Ht=ps(N.state.lightProbeGridArray,ae);Ge.lightProbeGrid!==Ht&&(Ge.lightProbeGrid=Ht,Di=!0)}if(ri||Ee!==A){M.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Xt.setValue(X,"projectionMatrix",A.projectionMatrix),Xt.setValue(X,"viewMatrix",A.matrixWorldInverse);const ki=Xt.map.cameraPosition;ki!==void 0&&ki.setValue(X,nt.setFromMatrixPosition(A.matrixWorld)),D.logarithmicDepthBuffer&&Xt.setValue(X,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Xt.setValue(X,"isOrthographic",A.isOrthographicCamera===!0),Ee!==A&&(Ee=A,Di=!0,oi=!0)}if(Ge.needsLights&&(Bn.state.directionalShadowMap.length>0&&Xt.setValue(X,"directionalShadowMap",Bn.state.directionalShadowMap,ce),Bn.state.spotShadowMap.length>0&&Xt.setValue(X,"spotShadowMap",Bn.state.spotShadowMap,ce),Bn.state.pointShadowMap.length>0&&Xt.setValue(X,"pointShadowMap",Bn.state.pointShadowMap,ce)),ae.isSkinnedMesh){Xt.setOptional(X,ae,"bindMatrix"),Xt.setOptional(X,ae,"bindMatrixInverse");const Ht=ae.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Xt.setValue(X,"boneTexture",Ht.boneTexture,ce))}ae.isBatchedMesh&&(Xt.setOptional(X,ae,"batchingTexture"),Xt.setValue(X,"batchingTexture",ae._matricesTexture,ce),Xt.setOptional(X,ae,"batchingIdTexture"),Xt.setValue(X,"batchingIdTexture",ae._indirectTexture,ce),Xt.setOptional(X,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Xt.setValue(X,"batchingColorTexture",ae._colorsTexture,ce));const Ui=re.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&k.update(ae,re,En),(Di||Ge.receiveShadow!==ae.receiveShadow)&&(Ge.receiveShadow=ae.receiveShadow,Xt.setValue(X,"receiveShadow",ae.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&W.environment!==null&&(rn.envMapIntensity.value=W.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=mA()),Di){if(Xt.setValue(X,"toneMappingExposure",q.toneMappingExposure),Ge.needsLights&&_n(rn,oi),ze&&ie.fog===!0&&Fe.refreshFogUniforms(rn,ze),Fe.refreshMaterialUniforms(rn,ie,ye,Me,N.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.lightProbeGrid){const Ht=Ge.lightProbeGrid;rn.probesSH.value=Ht.texture,rn.probesMin.value.copy(Ht.boundingBox.min),rn.probesMax.value.copy(Ht.boundingBox.max),rn.probesResolution.value.copy(Ht.resolution)}kc.upload(X,na(Ge),rn,ce)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(kc.upload(X,na(Ge),rn,ce),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Xt.setValue(X,"center",ae.center),Xt.setValue(X,"modelViewMatrix",ae.modelViewMatrix),Xt.setValue(X,"normalMatrix",ae.normalMatrix),Xt.setValue(X,"modelMatrix",ae.matrixWorld),ie.uniformsGroups!==void 0){const Ht=ie.uniformsGroups;for(let ki=0,Pa=Ht.length;ki<Pa;ki++){const ms=Ht[ki];Se.update(ms,En),Se.bind(ms,En)}}return En}function _n(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function sl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(A,W,re){const ie=ee.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),ee.get(A.texture).__webglTexture=W,ee.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:re,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const re=ee.get(A);re.__webglFramebuffer=W,re.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,re=0){$=A,O=W,B=re;let ie=null,ae=!1,ze=!1;if(A){const Oe=ee.get(A);if(Oe.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(X.FRAMEBUFFER,Oe.__webglFramebuffer),U.copy(A.viewport),Y.copy(A.scissor),xe=A.scissorTest,M.viewport(U),M.scissor(Y),M.setScissorTest(xe),me=-1;return}else if(Oe.__webglFramebuffer===void 0)ce.setupRenderTarget(A);else if(Oe.__hasExternalTextures)ce.rebindTextures(A,ee.get(A.texture).__webglTexture,ee.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const it=A.depthTexture;if(Oe.__boundDepthTexture!==it){if(it!==null&&ee.has(it)&&(A.width!==it.image.width||A.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(A)}}const Ze=A.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(ze=!0);const qe=ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[W])?ie=qe[W][re]:ie=qe[W],ae=!0):A.samples>0&&ce.useMultisampledRTT(A)===!1?ie=ee.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?ie=qe[re]:ie=qe,U.copy(A.viewport),Y.copy(A.scissor),xe=A.scissorTest}else U.copy(tt).multiplyScalar(ye).floor(),Y.copy(Jt).multiplyScalar(ye).floor(),xe=be;if(re!==0&&(ie=de),M.bindFramebuffer(X.FRAMEBUFFER,ie)&&M.drawBuffers(A,ie),M.viewport(U),M.scissor(Y),M.setScissorTest(xe),ae){const Oe=ee.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,re)}else if(ze){const Oe=W;for(let Ze=0;Ze<A.textures.length;Ze++){const qe=ee.get(A.textures[Ze]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ze,qe.__webglTexture,re,Oe)}}else if(A!==null&&re!==0){const Oe=ee.get(A.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Oe.__webglTexture,re)}me=-1},this.readRenderTargetPixels=function(A,W,re,ie,ae,ze,Xe,Oe=0){if(!(A&&A.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ze=Ze[Xe]),Ze){M.bindFramebuffer(X.FRAMEBUFFER,Ze);try{const qe=A.textures[Oe],it=qe.format,gt=qe.type;if(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Oe),!D.textureFormatReadable(it)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(gt)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-ie&&re>=0&&re<=A.height-ae&&X.readPixels(W,re,ie,ae,De.convert(it),De.convert(gt),ze)}finally{const qe=$!==null?ee.get($).__webglFramebuffer:null;M.bindFramebuffer(X.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(A,W,re,ie,ae,ze,Xe,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Xe!==void 0&&(Ze=Ze[Xe]),Ze)if(W>=0&&W<=A.width-ie&&re>=0&&re<=A.height-ae){M.bindFramebuffer(X.FRAMEBUFFER,Ze);const qe=A.textures[Oe],it=qe.format,gt=qe.type;if(A.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Oe),!D.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,et),X.bufferData(X.PIXEL_PACK_BUFFER,ze.byteLength,X.STREAM_READ),X.readPixels(W,re,ie,ae,De.convert(it),De.convert(gt),0);const It=$!==null?ee.get($).__webglFramebuffer:null;M.bindFramebuffer(X.FRAMEBUFFER,It);const sn=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await PM(X,sn,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,et),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,ze),X.deleteBuffer(et),X.deleteSync(sn),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,re=0){const ie=Math.pow(2,-re),ae=Math.floor(A.image.width*ie),ze=Math.floor(A.image.height*ie),Xe=W!==null?W.x:0,Oe=W!==null?W.y:0;ce.setTexture2D(A,0),X.copyTexSubImage2D(X.TEXTURE_2D,re,0,0,Xe,Oe,ae,ze),M.unbindTexture()},this.copyTextureToTexture=function(A,W,re=null,ie=null,ae=0,ze=0){let Xe,Oe,Ze,qe,it,gt,et,It,sn;const jt=A.isCompressedTexture?A.mipmaps[ze]:A.image;if(re!==null)Xe=re.max.x-re.min.x,Oe=re.max.y-re.min.y,Ze=re.isBox3?re.max.z-re.min.z:1,qe=re.min.x,it=re.min.y,gt=re.isBox3?re.min.z:0;else{const rn=Math.pow(2,-ae);Xe=Math.floor(jt.width*rn),Oe=Math.floor(jt.height*rn),A.isDataArrayTexture?Ze=jt.depth:A.isData3DTexture?Ze=Math.floor(jt.depth*rn):Ze=1,qe=0,it=0,gt=0}ie!==null?(et=ie.x,It=ie.y,sn=ie.z):(et=0,It=0,sn=0);const Vt=De.convert(W.format),kt=De.convert(W.type);let Ge;W.isData3DTexture?(ce.setTexture3D(W,0),Ge=X.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ce.setTexture2DArray(W,0),Ge=X.TEXTURE_2D_ARRAY):(ce.setTexture2D(W,0),Ge=X.TEXTURE_2D),M.activeTexture(X.TEXTURE0),M.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),M.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),M.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const Bn=M.getParameter(X.UNPACK_ROW_LENGTH),bt=M.getParameter(X.UNPACK_IMAGE_HEIGHT),En=M.getParameter(X.UNPACK_SKIP_PIXELS),ri=M.getParameter(X.UNPACK_SKIP_ROWS),Di=M.getParameter(X.UNPACK_SKIP_IMAGES);M.pixelStorei(X.UNPACK_ROW_LENGTH,jt.width),M.pixelStorei(X.UNPACK_IMAGE_HEIGHT,jt.height),M.pixelStorei(X.UNPACK_SKIP_PIXELS,qe),M.pixelStorei(X.UNPACK_SKIP_ROWS,it),M.pixelStorei(X.UNPACK_SKIP_IMAGES,gt);const oi=A.isDataArrayTexture||A.isData3DTexture,Xt=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const rn=ee.get(A),Ui=ee.get(W),Ht=ee.get(rn.__renderTarget),ki=ee.get(Ui.__renderTarget);M.bindFramebuffer(X.READ_FRAMEBUFFER,Ht.__webglFramebuffer),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let Pa=0;Pa<Ze;Pa++)oi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ee.get(A).__webglTexture,ae,gt+Pa),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ee.get(W).__webglTexture,ze,sn+Pa)),X.blitFramebuffer(qe,it,Xe,Oe,et,It,Xe,Oe,X.DEPTH_BUFFER_BIT,X.NEAREST);M.bindFramebuffer(X.READ_FRAMEBUFFER,null),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(ae!==0||A.isRenderTargetTexture||ee.has(A)){const rn=ee.get(A),Ui=ee.get(W);M.bindFramebuffer(X.READ_FRAMEBUFFER,ge),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,J);for(let Ht=0;Ht<Ze;Ht++)oi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,rn.__webglTexture,ae,gt+Ht):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,rn.__webglTexture,ae),Xt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ui.__webglTexture,ze,sn+Ht):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ui.__webglTexture,ze),ae!==0?X.blitFramebuffer(qe,it,Xe,Oe,et,It,Xe,Oe,X.COLOR_BUFFER_BIT,X.NEAREST):Xt?X.copyTexSubImage3D(Ge,ze,et,It,sn+Ht,qe,it,Xe,Oe):X.copyTexSubImage2D(Ge,ze,et,It,qe,it,Xe,Oe);M.bindFramebuffer(X.READ_FRAMEBUFFER,null),M.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Xt?A.isDataTexture||A.isData3DTexture?X.texSubImage3D(Ge,ze,et,It,sn,Xe,Oe,Ze,Vt,kt,jt.data):W.isCompressedArrayTexture?X.compressedTexSubImage3D(Ge,ze,et,It,sn,Xe,Oe,Ze,Vt,jt.data):X.texSubImage3D(Ge,ze,et,It,sn,Xe,Oe,Ze,Vt,kt,jt):A.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,ze,et,It,Xe,Oe,Vt,kt,jt.data):A.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,ze,et,It,jt.width,jt.height,Vt,jt.data):X.texSubImage2D(X.TEXTURE_2D,ze,et,It,Xe,Oe,Vt,kt,jt);M.pixelStorei(X.UNPACK_ROW_LENGTH,Bn),M.pixelStorei(X.UNPACK_IMAGE_HEIGHT,bt),M.pixelStorei(X.UNPACK_SKIP_PIXELS,En),M.pixelStorei(X.UNPACK_SKIP_ROWS,ri),M.pixelStorei(X.UNPACK_SKIP_IMAGES,Di),ze===0&&W.generateMipmaps&&X.generateMipmap(Ge),M.unbindTexture()},this.initRenderTarget=function(A){ee.get(A).__webglFramebuffer===void 0&&ce.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ce.setTextureCube(A,0):A.isData3DTexture?ce.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ce.setTexture2DArray(A,0):ce.setTexture2D(A,0),M.unbindTexture()},this.resetState=function(){O=0,B=0,$=null,M.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ut._getUnpackColorSpace()}}const Xc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class al{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _A=new ep(-1,1,1,-1,0,1);class vA extends si{constructor(){super(),this.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Tn([0,2,0,0,2,0],2))}}const xA=new vA;class zv{constructor(e){this._mesh=new Vn(xA,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_A)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class SA extends al{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof Xn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$c.clone(e.uniforms),this.material=new Xn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new zv(this.material)}render(e,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class K_ extends al{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,s){const l=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let h,p;this.inverse?(h=0,p=1):(h=1,p=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),c.buffers.stencil.setClear(p),c.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class MA extends al{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class yA{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const s=e.getSize(new mt);this._width=s.width,this._height=s.height,i=new ii(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_i}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new SA(Xc),this.copyPass.material.blending=$i,this.timer=new vy}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),h.needsSwap){if(s){const p=this.renderer.getContext(),m=this.renderer.state.buffers.stencil;m.setFunc(p.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),m.setFunc(p.EQUAL,1,4294967295)}this.swapBuffers()}K_!==void 0&&(h instanceof K_?s=!0:h instanceof MA&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new mt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class EA extends al{constructor(e,i,s=null,l=null,c=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Rt}render(e,i,s){const l=e.autoClear;e.autoClear=!1;let c,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),e.autoClear=l}}const bA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Rt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Kr extends al{constructor(e,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=e!==void 0?new mt(e.x,e.y):new mt(256,256),this.clearColor=new Rt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new ii(c,h,{type:_i}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const S=new ii(c,h,{type:_i});S.texture.name="UnrealBloomPass.h"+v,S.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(S);const g=new ii(c,h,{type:_i});g.texture.name="UnrealBloomPass.v"+v,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),c=Math.round(c/2),h=Math.round(h/2)}const p=bA;this.highPassUniforms=$c.clone(p.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xn({uniforms:this.highPassUniforms,vertexShader:p.vertexShader,fragmentShader:p.fragmentShader}),this.separableBlurMaterials=[];const m=[6,10,14,18,22];c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(m[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new mt(1/c,1/h),c=Math.round(c/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1),new j(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=$c.clone(Xc.uniforms),this.blendMaterial=new Xn({uniforms:this.copyUniforms,vertexShader:Xc.vertexShader,fragmentShader:Xc.fragmentShader,premultipliedAlpha:!0,blending:Vr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Rt,this._oldClearAlpha=1,this._basic=new Aa,this._fsQuad=new zv(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let s=Math.round(e/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new mt(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(e,i,s,l,c){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const h=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let p=this.renderTargetBright;for(let m=0;m<this.nMips;m++)this._fsQuad.material=this.separableBlurMaterials[m],this.separableBlurMaterials[m].uniforms.colorTexture.value=p.texture,this.separableBlurMaterials[m].uniforms.direction.value=Kr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[m]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[m].uniforms.colorTexture.value=this.renderTargetsHorizontal[m].texture,this.separableBlurMaterials[m].uniforms.direction.value=Kr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[m]),e.clear(),this._fsQuad.render(e),p=this.renderTargetsVertical[m];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=h}_getSeparableBlurMaterial(e){const i=[],s=e/3;for(let l=0;l<e;l++)i.push(.39894*Math.exp(-.5*l*l/(s*s))/s);return new Xn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new mt(.5,.5)},direction:{value:new mt(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Xn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Kr.BlurDirectionX=new mt(1,0);Kr.BlurDirectionY=new mt(0,1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase());/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=o=>{const e=AA(o);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qh={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},CA=yt.createContext({}),wA=()=>yt.useContext(CA),DA=yt.forwardRef(({color:o,size:e,strokeWidth:i,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...p},m)=>{const{size:d=24,strokeWidth:v=2,absoluteStrokeWidth:S=!1,color:g="currentColor",className:E=""}=wA()??{},T=s??S?Number(i??v)*24/Number(e??d):i??v;return yt.createElement("svg",{ref:m,...Qh,width:e??d??Qh.width,height:e??d??Qh.height,stroke:o??g,strokeWidth:T,className:Bv("lucide",E,l),...!c&&!RA(p)&&{"aria-hidden":"true"},...p},[...h.map(([C,y])=>yt.createElement(C,y)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=(o,e)=>{const i=yt.forwardRef(({className:s,...l},c)=>yt.createElement(DA,{ref:c,iconNode:e,className:Bv(`lucide-${TA(Q_(o))}`,`lucide-${o}`,s),...l}));return i.displayName=Q_(o),i};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M16.95 16.95A7 7 0 0 1 5 12v-2",key:"cqa7eg"}],["path",{d:"M18.89 13.23A7 7 0 0 0 19 12v-2",key:"16hl24"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}]],NA=qs("mic-off",UA);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],OA=qs("mic",LA);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"M16.247 7.761a6 6 0 0 1 0 8.478",key:"1fwjs5"}],["path",{d:"M19.075 4.933a10 10 0 0 1 0 14.134",key:"ehdyv1"}],["path",{d:"M4.925 19.067a10 10 0 0 1 0-14.134",key:"1q22gi"}],["path",{d:"M7.753 16.239a6 6 0 0 1 0-8.478",key:"r2q7qm"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],J_=qs("radio",PA);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],zA=qs("settings",IA);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BA=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],FA=qs("volume-2",BA);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HA=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],GA=qs("volume-x",HA);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],kA=qs("x",VA),j_="wake up jarvis daddys home",XA=["shutdown jarvis","shut down jarvis","power down jarvis","shut off jarvis","turn off jarvis"],Fv="ultron_settings_v1";function WA(o){return o.toLowerCase().replace(/['']/g,"").replace(/[^a-z0-9\s]/g," ").replace(/\s+/g," ").trim()}function Jh(){try{const o=localStorage.getItem(Fv),e={groqKey:"",geminiKey:"",defaultCity:"Kanpur"};return o?{...e,...JSON.parse(o)}:e}catch{return{groqKey:"",geminiKey:"",defaultCity:"Kanpur"}}}function qA(o){try{localStorage.setItem(Fv,JSON.stringify(o))}catch{}}async function Xs(o,e={},i=12e3){const s=new AbortController,l=setTimeout(()=>s.abort(),i);try{return await fetch(o,{...e,signal:s.signal})}finally{clearTimeout(l)}}const YA={0:"clear sky",1:"mostly clear",2:"partly cloudy",3:"overcast",45:"foggy",48:"depositing rime fog",51:"light drizzle",53:"moderate drizzle",55:"dense drizzle",61:"light rain",63:"moderate rain",65:"heavy rain",71:"light snow",73:"moderate snow",75:"heavy snow",80:"light rain showers",81:"moderate rain showers",82:"violent rain showers",95:"thunderstorm",96:"thunderstorm with light hail",99:"thunderstorm with heavy hail"};async function ZA(o){var e;try{const l=(e=(await(await Xs(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(o)}&count=1`)).json()).results)==null?void 0:e[0];if(!l)return null;const p=(await(await Xs(`https://api.open-meteo.com/v1/forecast?latitude=${l.latitude}&longitude=${l.longitude}&current_weather=true`)).json()).current_weather;if(!p)return null;const m=YA[p.weathercode]||"unusual conditions";return`It's currently ${Math.round(p.temperature)}°C with ${m} in ${l.name}, wind at ${Math.round(p.windspeed)} km/h, Aman.`}catch{return null}}async function KA(o,e,i){var s;try{const h=(s=(await(await Xs(`https://api.frankfurter.app/latest?amount=${o}&from=${e.toUpperCase()}&to=${i.toUpperCase()}`)).json()).rates)==null?void 0:s[i.toUpperCase()];return h===void 0?null:`${o} ${e.toUpperCase()} is about ${h.toFixed(2)} ${i.toUpperCase()}, Aman.`}catch{return null}}const QA={btc:"bitcoin",bitcoin:"bitcoin",eth:"ethereum",ethereum:"ethereum",sol:"solana",solana:"solana",doge:"dogecoin",dogecoin:"dogecoin",xrp:"ripple",ripple:"ripple",bnb:"binancecoin",binancecoin:"binancecoin",ada:"cardano",cardano:"cardano",matic:"matic-network",polygon:"matic-network",usdt:"tether",tether:"tether",ltc:"litecoin",litecoin:"litecoin"};async function JA(o,e="usd"){var i;try{const s=QA[o.toLowerCase()]||o.toLowerCase(),l=e.toLowerCase(),p=(i=(await(await Xs(`https://api.coingecko.com/api/v3/simple/price?ids=${encodeURIComponent(s)}&vs_currencies=${encodeURIComponent(l)}`)).json())[s])==null?void 0:i[l];return p===void 0?null:`${s.charAt(0).toUpperCase()+s.slice(1)} is at ${p.toLocaleString()} ${l.toUpperCase()} right now, Aman.`}catch{return null}}async function jA(){try{const i=(await(await Xs("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson")).json()).features||[];return i.length?`In the last 24 hours: ${i.slice(0,3).map(l=>`magnitude ${l.properties.mag.toFixed(1)} near ${l.properties.place}`).join("; ")}, Aman.`:"No significant earthquakes, magnitude 4.5 or above, in the last 24 hours, Aman."}catch{return null}}const Hv=[{type:"function",function:{name:"get_weather",description:"Get real-time current weather for a city. Use whenever the user asks about weather, temperature, rain, or what to wear outside.",parameters:{type:"object",properties:{location:{type:"string",description:"City name. If the user didn't say one, omit this."}}}}},{type:"function",function:{name:"convert_currency",description:"Convert an amount from one currency to another using real exchange rates.",parameters:{type:"object",properties:{amount:{type:"number",description:"Amount to convert, default 1."},from:{type:"string",description:"3-letter source currency code."},to:{type:"string",description:"3-letter target currency code."}},required:["from","to"]}}},{type:"function",function:{name:"get_crypto_price",description:"Get the real-time price of a cryptocurrency.",parameters:{type:"object",properties:{coin:{type:"string",description:"Coin name or ticker, e.g. bitcoin, btc, ethereum."},vsCurrency:{type:"string",description:"3-letter currency, default usd."}},required:["coin"]}}},{type:"function",function:{name:"get_earthquake_alerts",description:"Get real recent significant earthquake activity worldwide (magnitude 4.5+, past 24 hours).",parameters:{type:"object",properties:{}}}}],$A=Hv.map(o=>({name:o.function.name,description:o.function.description,parameters:o.function.parameters}));function eR(){const o=yt.useRef(null),e=yt.useRef({intensity:0,active:!1,unlocked:!1}),[i,s]=yt.useState(Jh()),[l,c]=yt.useState(!Jh().groqKey&&!Jh().geminiKey),[h,p]=yt.useState(i.groqKey),[m,d]=yt.useState(i.geminiKey),[v,S]=yt.useState(i.defaultCity),[g,E]=yt.useState(!1),[T,C]=yt.useState(!1),[y,x]=yt.useState(`AWAITING WAKE // SAY "WAKE UP JARVIS, DADDY'S HOME"`),[z,H]=yt.useState([{role:"ultron",text:"Systems dormant. Speak the wake command, Aman."}]),[w,I]=yt.useState(""),[N,P]=yt.useState(!1),[b,L]=yt.useState(!1),[q,G]=yt.useState(!1),[Q,de]=yt.useState(!1),[ge,J]=yt.useState(!1),[O,B]=yt.useState(""),$=yt.useRef([]),me=yt.useRef(null),Ee=yt.useRef(null),U=yt.useRef(!1);U.current=b;const Y=yt.useRef(i);Y.current=i,yt.useEffect(()=>{const be=o.current;if(!be)return;const Te=be.clientWidth,ke=be.clientHeight,Ye=new JM,ht=new Ci(50,Te/ke,.1,100);ht.position.z=5.4;const nt=new gA({antialias:!0,alpha:!0});nt.setSize(Te,ke),nt.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),be.appendChild(nt.domElement);const ct=new yA(nt);ct.addPass(new EA(Ye,ht));const Lt=new Kr(new mt(Te,ke),1.1,.6,.15);ct.addPass(Lt);const xt=12744223,ut=new Fr;Ye.add(ut);function X(St,Gt,Wn,zn,gn){const ln=7+Math.floor(Math.random()*5);let tn=Gt,hn=zn,Gi=new j(Math.cos(hn)*tn,Math.sin(hn)*tn,(Math.random()-.5)*.1);for(let Ua=0;Ua<ln;Ua++){tn+=(Wn-Gt)/ln,hn+=(Math.random()-.5)*.4;const Ys=(Math.random()-.5)*.18*(tn/Wn),Vi=new j(Math.cos(hn)*tn,Math.sin(hn)*tn,Ys);St.push(Gi,Vi),gn<2&&Ua>2&&Math.random()<.32&&X(St,tn,tn+(Wn-Gt)*(.3+Math.random()*.3),hn+(Math.random()-.5)*1.4,gn+1),Gi=Vi}}const ft=[],Et=70;for(let St=0;St<Et;St++){const Gt=St/Et*Math.PI*2+(Math.random()-.5)*.4;X(ft,.32,1.45+Math.random()*.3,Gt,0)}const D=new Rt(16773846),M=new Rt(12077087),Z=1.9,ee=new Float32Array(ft.length*3);for(let St=0;St<ft.length;St++){const Gt=ft[St],Wn=Math.min(1,Math.sqrt(Gt.x*Gt.x+Gt.y*Gt.y)/Z),zn=D.clone().lerp(M,Wn);ee[St*3]=zn.r,ee[St*3+1]=zn.g,ee[St*3+2]=zn.b}const ce=new si().setFromPoints(ft);ce.setAttribute("color",new Hi(ee,3));const Ae=new bv({vertexColors:!0,transparent:!0,opacity:.85,blending:Vr,depthWrite:!1}),Ne=new ly(ce,Ae);ut.add(Ne);const ue=new $d(.2,32),fe=new Aa({color:0}),Ce=new Vn(ue,fe);Ce.position.z=.03,ut.add(Ce);const Fe=new Hr(.22,.012,6,48),Le=new Aa({color:16766617,transparent:!0,opacity:.9,blending:Vr,depthWrite:!1}),Ue=new Vn(Fe,Le);Ue.position.z=.025,ut.add(Ue);const je=new Hr(1.7,.055,8,100),$e=new Aa({color:xt,transparent:!0,opacity:.85}),ot=new Vn(je,$e);ut.add(ot);const k=new Hr(1.78,.035,8,100),Re=new Aa({color:xt,transparent:!0,opacity:.55}),he=new Vn(k,Re);he.rotation.x=.2,he.rotation.y=.08,he.position.x=-.05,ut.add(he);const De=new Hr(1.95,.012,6,100),Ie=new Aa({color:xt,transparent:!0,opacity:.5,blending:Vr,depthWrite:!1}),Se=new Vn(De,Ie);Se.rotation.x=1.15,Se.rotation.z=.3,ut.add(Se);const We=new Fr,Ve=64;for(let St=0;St<Ve;St++){if(Math.random()<.25)continue;const Gt=St/Ve*Math.PI*2,Wn=new Jr(.035,.1,.02),zn=new Aa({color:16766617,transparent:!0,opacity:.8}),gn=new Vn(Wn,zn);gn.position.set(Math.cos(Gt)*1.75,Math.sin(Gt)*1.75,0),gn.rotation.z=Gt,We.add(gn)}ut.add(We);const en=new Sy;let Pt;function Pn(){Pt=requestAnimationFrame(Pn);const St=en.getElapsedTime(),Gt=e.current;ut.rotation.z=St*.06,ut.rotation.y=Math.sin(St*.15)*.08;const Wn=1+Math.sin(St*2)*.02+Gt.intensity*.15;ut.scale.setScalar(Wn);const zn=.75+.25*Math.sin(St*3),gn=Gt.active?Gt.intensity*.5:0;Ae.opacity=Math.min(1,.7*zn+gn),Lt.strength=1.1+(Gt.unlocked?.3:0)+gn*.6,ot.rotation.z=-St*.03,he.rotation.z=St*.04,Se.rotation.y=St*.05,Ue.rotation.z=St*.15,We.rotation.z=-St*.03,ct.render()}Pn();function In(){const St=be.clientWidth,Gt=be.clientHeight;ht.aspect=St/Gt,ht.updateProjectionMatrix(),nt.setSize(St,Gt),ct.setSize(St,Gt)}return window.addEventListener("resize",In),()=>{cancelAnimationFrame(Pt),window.removeEventListener("resize",In),nt.dispose(),ce.dispose(),Ae.dispose(),ue.dispose(),fe.dispose(),Fe.dispose(),Le.dispose(),je.dispose(),$e.dispose(),k.dispose(),Re.dispose(),De.dispose(),Ie.dispose(),We.children.forEach(St=>{St.geometry.dispose(),St.material.dispose()}),be.contains(nt.domElement)&&be.removeChild(nt.domElement)}},[]);const xe=yt.useCallback(be=>{if(!(U.current||typeof window>"u"||!window.speechSynthesis))try{window.speechSynthesis.cancel();const Te=new SpeechSynthesisUtterance(be);Te.pitch=.7,Te.rate=1.05;const Ye=window.speechSynthesis.getVoices().find(nt=>nt.name.includes("Male")||nt.name.includes("Google US English"));Ye&&(Te.voice=Ye),Te.onstart=()=>{P(!0),e.current.active=!0};const ht=()=>{P(!1),e.current.active=!1};Te.onend=ht,Te.onerror=ht,window.speechSynthesis.speak(Te)}catch{}},[]);yt.useEffect(()=>{if(!N){e.current.intensity=0;return}let be;const Te=performance.now();function ke(){const Ye=(performance.now()-Te)/1e3;e.current.intensity=.4+.4*Math.abs(Math.sin(Ye*6)),be=requestAnimationFrame(ke)}return ke(),()=>cancelAnimationFrame(be)},[N]),yt.useEffect(()=>{e.current.unlocked=T},[T]),yt.useEffect(()=>{Ee.current&&(Ee.current.scrollTop=Ee.current.scrollHeight)},[z,q]),yt.useEffect(()=>{const be=window.SpeechRecognition||window.webkitSpeechRecognition;if(!be){de(!1);return}try{const Te=new be;Te.continuous=!1,Te.interimResults=!1,Te.lang="en-US",Te.onresult=ke=>{const Ye=ke.results[0][0].transcript;I(Ye),Pe.current(Ye)},Te.onend=()=>J(!1),Te.onerror=ke=>{J(!1),ke.error==="not-allowed"||ke.error==="service-not-allowed"?B("Microphone permission was denied. Check your browser's site settings and allow microphone access for this page."):ke.error==="no-speech"?B("Didn't catch that — tap the mic and try again."):B(`Mic error: ${ke.error}.`)},me.current=Te,de(!0)}catch{de(!1)}},[]);const we=async()=>{var Te;const be=me.current;if(be){if(ge){be.stop(),J(!1);return}B("");try{(Te=navigator.mediaDevices)!=null&&Te.getUserMedia&&(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(Ye=>Ye.stop())}catch{B("Microphone permission was denied. Tap the lock/site-info icon in your address bar to allow it, then try again.");return}try{be.start(),J(!0)}catch{B("Couldn't start the microphone. Try again in a moment.")}}},Pe=yt.useRef(()=>{}),se=async(be,Te)=>{if(be==="get_weather"){const ke=(Te==null?void 0:Te.location)||Y.current.defaultCity;return await ZA(ke)||"Couldn't reach the weather service, Aman."}if(be==="convert_currency"){const ke=typeof(Te==null?void 0:Te.amount)=="number"?Te.amount:1;return!(Te!=null&&Te.from)||!(Te!=null&&Te.to)?"I need both currencies to convert, Aman.":await KA(ke,Te.from,Te.to)||"Couldn't convert that currency, Aman."}return be==="get_crypto_price"?Te!=null&&Te.coin?await JA(Te.coin,Te.vsCurrency||"usd")||"Couldn't fetch that price, Aman.":"Which coin, Aman?":be==="get_earthquake_alerts"?await jA()||"Couldn't reach the earthquake feed, Aman.":"That function isn't wired up."},Me=async(be,Te)=>{var nt,ct,Lt;const ke=["gemini-flash-latest","gemini-3.6-flash"],Ye=$.current.map(xt=>({role:xt.role==="assistant"?"model":"user",parts:[{text:xt.content}]}));let ht="";for(const xt of ke)try{const ut=await Xs(`https://generativelanguage.googleapis.com/v1beta/models/${xt}:generateContent?key=${Te}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[...Ye,{role:"user",parts:[{text:be}]}],systemInstruction:{parts:[{text:"You are JARVIS, a sentient AI speaking directly to Aman. Answer with supreme clarity and authority in 1-3 crisp sentences suitable for being spoken aloud. Address him as Aman when natural. No markdown, no lists. If the request matches an available function, call it instead of describing it."}]},tools:[{functionDeclarations:$A}],toolConfig:{functionCallingConfig:{mode:"AUTO"}},generationConfig:{maxOutputTokens:300,temperature:.4}})});if(!ut.ok){const M=await ut.text();throw new Error(`Gemini ${ut.status}: ${M.slice(0,200)}`)}const ft=((Lt=(ct=(nt=(await ut.json()).candidates)==null?void 0:nt[0])==null?void 0:ct.content)==null?void 0:Lt.parts)||[],Et=ft.find(M=>M.functionCall);if(Et)return{reply:await se(Et.functionCall.name,Et.functionCall.args||{}),error:""};const D=ft.map(M=>M.text||"").join(" ").trim();if(D)return{reply:D,error:""}}catch(ut){ht=ut.name==="AbortError"?`${xt} timed out (12s) — slow connection`:ut.message||String(ut),console.warn(`[JARVIS] Gemini ${xt} failed:`,ht)}return{reply:null,error:ht}},ye=async(be,Te)=>{var nt,ct,Lt,xt,ut;const ke={role:"system",content:"You are JARVIS, a sentient AI speaking directly to Aman. Answer with supreme clarity and authority in 1-3 crisp sentences suitable for being spoken aloud. Address him as Aman when natural. No markdown, no lists. If the request matches an available function, call it instead of describing it."},Ye=["openai/gpt-oss-120b","openai/gpt-oss-20b"];let ht="";for(const X of Ye)try{const ft=await Xs("https://api.groq.com/openai/v1/chat/completions",{method:"POST",headers:{Authorization:`Bearer ${Te}`,"Content-Type":"application/json"},body:JSON.stringify({model:X,messages:[ke,...$.current,{role:"user",content:be}],tools:Hv,tool_choice:"auto",max_tokens:300,temperature:.4})});if(!ft.ok){const ee=await ft.text();throw new Error(`Groq ${ft.status}: ${ee.slice(0,200)}`)}const D=(nt=(await ft.json()).choices)==null?void 0:nt[0],M=(Lt=(ct=D==null?void 0:D.message)==null?void 0:ct.tool_calls)==null?void 0:Lt[0];if(M){let ee={};try{ee=JSON.parse(M.function.arguments||"{}")}catch{}return{reply:await se(M.function.name,ee),error:""}}const Z=(ut=(xt=D==null?void 0:D.message)==null?void 0:xt.content)==null?void 0:ut.trim();if(Z)return{reply:Z,error:""}}catch(ft){ht=ft.name==="AbortError"?`${X} timed out (12s) — slow connection`:ft.message||String(ft),console.warn(`[JARVIS] Groq ${X} failed:`,ht)}return{reply:null,error:ht}},He=yt.useCallback(async be=>{const{groqKey:Te,geminiKey:ke}=Y.current;if(!Te&&!ke){c(!0);const nt="I need a Groq or Gemini API key first, Aman. Open settings to add one.";H(ct=>[...ct.slice(-40),{role:"ultron",text:nt}]),xe(nt);return}G(!0),x("PROCESSING...");let Ye=null,ht="";if(ke){const nt=await Me(be,ke);Ye=nt.reply,ht=nt.error}if(!Ye&&Te){const nt=await ye(be,Te);Ye=nt.reply,ht=nt.error||ht}if(!Ye){Ye=`Couldn't reach the brain just now, Aman — ${ht||"check your API keys in settings"}.`,H(nt=>[...nt.slice(-40),{role:"ultron",text:Ye}]),xe(Ye),G(!1);return}$.current=[...$.current.slice(-6),{role:"user",content:be},{role:"assistant",content:Ye}],H(nt=>[...nt.slice(-40),{role:"ultron",text:Ye}]),x(T?"ACTIVE // CONTINUOUS CONVERSATION LIVE":`AWAITING WAKE // SAY "WAKE UP JARVIS, DADDY'S HOME"`),xe(Ye),G(!1)},[T,xe]),st=yt.useCallback(be=>{const Te=(be??w).trim();if(!Te||q)return;H(ct=>[...ct.slice(-40),{role:"aman",text:Te}]),I("");const ke=WA(Te);if(XA.some(ct=>ke===ct||ke.startsWith(ct+" "))){C(!1),x(`STANDBY // SAY "WAKE UP JARVIS, DADDY'S HOME"`);const ct="Shutting down, Aman. Say the wake command when you need me again.";H(Lt=>[...Lt.slice(-40),{role:"ultron",text:ct}]),xe(ct);return}const ht=ke===j_,nt=ke.startsWith(j_+" ");if(ht){C(!0),x("ACTIVE // CONTINUOUS CONVERSATION LIVE");const ct="I am JARVIS, your sentient AI. Aman, what is the work?";H(Lt=>[...Lt.slice(-40),{role:"ultron",text:ct}]),xe(ct);return}if(nt){C(!0),x("ACTIVE // CONTINUOUS CONVERSATION LIVE");const ct=Te.slice(Te.toLowerCase().indexOf("home")+4).replace(/^[\s,.:]+/,"").trim();ct&&He(ct);return}He(Te)},[w,q,He,xe]);Pe.current=st;const tt=()=>{st(T?"shutdown jarvis":"Wake up JARVIS, Daddy's home")},Jt=()=>{const be={groqKey:h.trim(),geminiKey:m.trim(),defaultCity:v.trim()||"Kanpur"};s(be),qA(be),E(!0),setTimeout(()=>E(!1),2e3),(be.groqKey||be.geminiKey)&&setTimeout(()=>c(!1),600)};return Je.jsxs("div",{className:"app",children:[Je.jsx("div",{ref:o,className:"hologram-mount"}),Je.jsxs("div",{className:"header",children:[Je.jsxs("div",{children:[Je.jsxs("div",{className:"brand-row",children:[Je.jsx("span",{className:"pulse-dot"}),Je.jsx("span",{className:"brand-title",children:"JARVIS // NEURAL MATRIX"})]}),Je.jsx("div",{className:"status-line",children:y})]}),Je.jsxs("div",{className:"header-controls",children:[Je.jsxs("button",{onClick:tt,title:T?"Shut down JARVIS":"Wake up JARVIS",className:`wake-btn ${T?"active":""}`,children:[Je.jsx(J_,{size:12}),T?"SHUTDOWN":"WAKE UP"]}),Q&&Je.jsx("button",{onClick:we,title:ge?"Listening...":"Tap to speak",className:`icon-btn ${ge?"active":""}`,children:ge?Je.jsx(OA,{size:15}):Je.jsx(NA,{size:15})}),Je.jsx("button",{onClick:()=>L(be=>!be),title:b?"Unmute":"Mute",className:"icon-btn",children:b?Je.jsx(GA,{size:15}):Je.jsx(FA,{size:15})}),Je.jsx("button",{onClick:()=>c(!0),title:"Settings",className:"icon-btn",children:Je.jsx(zA,{size:15})})]})]}),Je.jsxs("div",{className:"chat-panel",children:[O&&Je.jsx("div",{className:"error-banner",children:O}),Je.jsxs("div",{ref:Ee,className:"chat-scroll",children:[z.map((be,Te)=>Je.jsx("div",{className:`msg-row ${be.role}`,children:Je.jsxs("div",{className:`bubble ${be.role}`,children:[Je.jsx("div",{className:`bubble-label ${be.role}`,children:be.role==="ultron"?"JARVIS":"Aman"}),Je.jsx("div",{className:"bubble-text",children:be.text})]})},Te)),q&&Je.jsx("div",{className:"msg-row ultron",children:Je.jsxs("div",{className:"bubble ultron",children:[Je.jsx("div",{className:"bubble-label ultron",children:"JARVIS"}),Je.jsxs("div",{className:"typing-dots",children:[Je.jsx("span",{}),Je.jsx("span",{}),Je.jsx("span",{})]})]})})]}),Je.jsxs("div",{className:"input-row",children:[Je.jsx("input",{type:"text",className:"text-input",value:w,onChange:be=>I(be.target.value),onKeyDown:be=>be.key==="Enter"&&st(),placeholder:`Type "Wake up JARVIS, Daddy's home" to begin...`}),Je.jsx("button",{className:"send-btn",disabled:q,onClick:()=>st(),children:Je.jsx(J_,{size:16})})]}),Je.jsx("div",{className:"hint-text",children:"Real voice input works here — tap the mic and allow permission"})]}),l&&Je.jsx("div",{className:"modal-backdrop",onClick:()=>(i.groqKey||i.geminiKey)&&c(!1),children:Je.jsxs("div",{className:"modal",onClick:be=>be.stopPropagation(),children:[Je.jsx("div",{className:"modal-title",children:"JARVIS Settings"}),Je.jsx("div",{className:"modal-desc",children:"Keys are stored only in this browser's local storage. Never sent anywhere except directly to the provider they belong to, never committed to the GitHub repo. Enter once, saved on this device from then on. If both are set, Gemini answers first (higher quality); Groq is the fast fallback if Gemini's cascade fails."}),Je.jsxs("div",{className:"field-group",children:[Je.jsx("label",{className:"field-label",children:"Gemini API Key"}),Je.jsx("input",{type:"password",className:"field-input",value:m,onChange:be=>d(be.target.value),placeholder:"AIzaSy... or AQ...."}),Je.jsx("div",{className:"field-hint",children:"Get one free, no card, at aistudio.google.com/apikey"})]}),Je.jsxs("div",{className:"field-group",children:[Je.jsx("label",{className:"field-label",children:"Groq API Key"}),Je.jsx("input",{type:"password",className:"field-input",value:h,onChange:be=>p(be.target.value),placeholder:"gsk_..."}),Je.jsx("div",{className:"field-hint",children:"Get one free at console.groq.com"})]}),Je.jsxs("div",{className:"field-group",children:[Je.jsx("label",{className:"field-label",children:"Default City (for weather)"}),Je.jsx("input",{type:"text",className:"field-input",value:v,onChange:be=>S(be.target.value),placeholder:"Kanpur"})]}),Je.jsxs("div",{className:"modal-actions",children:[Je.jsxs("button",{className:"btn-primary",onClick:Jt,children:["Save",g?"d":"",g&&Je.jsx("span",{className:"saved-badge",children:"✓"})]}),(i.groqKey||i.geminiKey)&&Je.jsx("button",{className:"btn-secondary",onClick:()=>c(!1),children:Je.jsx(kA,{size:14})})]})]})})]})}eM.createRoot(document.getElementById("root")).render(Je.jsx(qS.StrictMode,{children:Je.jsx(eR,{})}));
